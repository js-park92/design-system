import { useCombobox } from 'downshift'
import React from 'react'

import { CaretDownIcon, CheckIcon } from '@pluralsight/ps-design-system-icon'
import Field from '@pluralsight/ps-design-system-field'
import { BelowLeft } from '@pluralsight/ps-design-system-position'
import {
  canUseDOM,
  classNames,
  forwardRefWithAs
} from '@pluralsight/ps-design-system-util'
import Menu, { MenuItemProps } from '@pluralsight/ps-design-system-menu'

import '../css/index.css'

interface RenderOptionProps extends MenuItemProps {
  selected?: boolean
}

const defaultRenderOption = forwardRefWithAs<RenderOptionProps, 'div'>(
  (props, ref) => {
    const { label } = props
    return (
      <Menu.Item {...props} as="div" ref={ref}>
        {label && label}
        {props.selected && (
          <CheckIcon
            color={CheckIcon.colors.blue}
            style={{ marginLeft: 'auto' }}
          />
        )}
      </Menu.Item>
    )
  }
)

interface OptionItem {
  label: React.ReactText
  value: React.ReactText
}

export type TypeaheadFilterFunction = (
  options: OptionItem[],
  inputValue?: string | undefined
) => {
  label: React.ReactText
  value: React.ReactText
}[]

interface TypeaheadFieldProps
  extends Omit<
    React.ComponentProps<typeof Field>,
    'children' | 'label' | 'onChange' | 'subLabel' | 'suffix'
  > {
  label?: string | React.ReactElement<typeof Field.Label>
  onChange: (
    e: React.ChangeEvent<HTMLInputElement> | null,
    selectedItem?: {
      label: React.ReactText
      value?: React.ReactText
    }
  ) => void
  options: OptionItem[]
  placeholder?: string
  renderInputTag?: React.ComponentProps<typeof Field.Input>['renderTag']
  subLabel?: string | React.ReactNode
  value?: string
  renderOption?: React.FC
  filterFunction?: TypeaheadFilterFunction
}

interface TypeaheadFieldStatics {
  Label: typeof Field.Label
  SubLabel: typeof Field.SubLabel
  appearances: typeof Field.appearances
  sizes: typeof Field.sizes
}

const defaultFilterFunc = (options: OptionItem[], inputValue = '') => {
  return options.filter(({ label }: { label: React.ReactText }) =>
    `${label}`.toLowerCase().includes(inputValue.toLowerCase())
  )
}

const Typeahead = React.forwardRef<HTMLInputElement, TypeaheadFieldProps>(
  (props, forwardedRef) => {
    const {
      disabled,
      label,
      onChange,
      options,
      placeholder,
      subLabel,
      value,
      error,
      size,
      renderInputTag = Field.Input,
      renderOption = defaultRenderOption,
      'aria-label': ariaLabel,
      'aria-autocomplete': ariaAutoComplete = 'list',
      filterFunction = defaultFilterFunc,
      ...rest
    } = props
    const [searchTerm, setSearchTerm] = React.useState<
      React.ReactText | undefined
    >(value || '')
    const [inputItems, setInputItems] = React.useState(() => options)
    const [width, setWidth] = React.useState<number>()

    const {
      closeMenu,
      getToggleButtonProps,
      getComboboxProps,
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      highlightedIndex,
      isOpen,
      openMenu,
      selectedItem: activeItem
    } = useCombobox({
      defaultHighlightedIndex: 0,
      items: inputItems,
      stateReducer(_, actionAndChanges) {
        const { type, changes } = actionAndChanges
        // this prevents the menu from being closed when the user selects an item with 'Enter' or mouse
        switch (type) {
          case useCombobox.stateChangeTypes.InputBlur:
          case useCombobox.stateChangeTypes.InputKeyDownEnter:
          case useCombobox.stateChangeTypes.ItemClick: {
            const { selectedItem, inputValue } = changes
            return {
              ...changes,
              inputValue: selectedItem?.label
                ? `${selectedItem?.label}`
                : inputValue
            }
          }
          default:
            return changes // otherwise business as usual.
        }
      },
      onInputValueChange: ({ type, inputValue, selectedItem }) => {
        const bothTypeAutoComplete =
          type === '__input_blur__' &&
          !selectedItem &&
          !inputValue &&
          ariaAutoComplete === 'both'
        setSearchTerm(bothTypeAutoComplete ? searchTerm : inputValue)
        type === '__input_blur__' &&
          onChange &&
          onChange(
            null,
            bothTypeAutoComplete
              ? { label: searchTerm as string }
              : selectedItem || undefined
          )
        setInputItems(filterFunction(options, inputValue))
      }
    })

    const inputProps = getInputProps({
      ref: forwardedRef,
      onKeyDown: (evt: React.KeyboardEvent<HTMLInputElement>) => {
        if (!canUseDOM()) return

        const { altKey } = evt
        const key = evt.key.toLowerCase()

        const shouldClose = isOpen && altKey && key === 'arrowup'
        const shouldOpen = !isOpen && altKey && key === 'arrowdown'

        if (shouldClose) setTimeout(closeMenu, 0)
        else if (shouldOpen) setTimeout(openMenu, 0)
      },
      onFocus: () => {
        if (!isOpen) openMenu()
      },
      onChange: (evt: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(evt, activeItem || undefined)
      }
    })

    const RenderOption = React.useMemo(() => renderOption, [renderOption])
    const RenderInput = React.useMemo(() => renderInputTag, [renderInputTag])
    const fieldRef = React.useRef<HTMLDivElement>(null)
    const { ref: comboRef, ...comboBoxProps } = getComboboxProps()

    const Label = React.useMemo(() => {
      const _ariaLabel = !label ? ariaLabel : undefined
      if (React.isValidElement(label)) {
        return React.cloneElement<any>(label, {
          ...getLabelProps(),
          'aria-label': _ariaLabel
        })
      }

      return (
        <Field.Label {...getLabelProps()} aria-label={_ariaLabel}>
          {label}
        </Field.Label>
      )
    }, [label, ariaLabel, getLabelProps])

    const SubLabel = React.useMemo(() => {
      if (React.isValidElement(subLabel)) return subLabel
      return <Field.SubLabel>{subLabel}</Field.SubLabel>
    }, [subLabel])

    const hasSubLabel = Boolean(subLabel)

    React.useImperativeHandle(
      comboRef,
      () => fieldRef.current as unknown as HTMLDivElement
    )

    React.useEffect(() => {
      onChange && onChange(null, activeItem || undefined)
    }, [activeItem, onChange])

    React.useEffect(() => {
      const field = fieldRef.current
      if (field) {
        setWidth(field.getBoundingClientRect().width)
      }
    }, [fieldRef])

    React.useLayoutEffect(
      function keepInputInView() {
        if (!isOpen) return

        const el = document.getElementById(inputProps.id)
        if (!el?.scrollIntoView) return

        el.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'nearest'
        })
      },
      [isOpen, inputProps.id]
    )

    return (
      <BelowLeft
        show={
          <div
            className={classNames(
              'psds-typeahead__wrapper',
              isOpen && 'psds-typeahead__wrapper--open',
              hasSubLabel && 'psds-typeahead__wrapper--with-sub-label'
            )}
          >
            <Menu
              className={'psds-typeahead__menu'}
              selectedItem={activeItem}
              {...getMenuProps({}, { suppressRefError: true })}
              style={{ width: width || 'auto' }}
            >
              {inputItems.length < 1 && (
                <RenderOption
                  active={false}
                  id={`menu-option-empty-label`}
                  key={`menu-option-empty-label`}
                  label="No results found"
                />
              )}
              {inputItems.map((option, index) => (
                <RenderOption
                  {...option}
                  active={highlightedIndex === index}
                  key={`menu-option-${index}`}
                  role="option"
                  selected={activeItem?.label === option.label}
                  {...getItemProps({ item: option, index })}
                />
              ))}
            </Menu>
          </div>
        }
      >
        <Field
          ref={fieldRef}
          {...comboBoxProps}
          disabled={disabled}
          size={size}
          error={error}
          label={Label}
          subLabel={SubLabel}
          suffix={<CaretSuffix {...getToggleButtonProps()} />}
          {...rest}
        >
          <RenderInput
            {...inputProps}
            aria-autocomplete={ariaAutoComplete}
            value={searchTerm}
            disabled={disabled}
            placeholder={placeholder}
          />
        </Field>
      </BelowLeft>
    )
  }
) as React.ForwardRefExoticComponent<
  TypeaheadFieldProps & React.RefAttributes<HTMLInputElement>
> &
  TypeaheadFieldStatics

Typeahead.Label = Field.Label
Typeahead.SubLabel = Field.SubLabel
Typeahead.appearances = Field.appearances
Typeahead.sizes = Field.sizes

export default Typeahead

const CaretSuffix = forwardRefWithAs((props, ref) => (
  <div {...props} className="psds-typeahead__caret" ref={ref}>
    <CaretDownIcon />
  </div>
))
