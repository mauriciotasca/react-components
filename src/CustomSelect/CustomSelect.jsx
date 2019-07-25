// @flow
import React from 'react';
import classNames from 'classnames';
import './style.scss';

type Props = {
  /** Array of options to display in Dropdown. */
  items: Array<object>,
  /** Within an Item, which property represents the key. */
  idKey: string,
  /** Within an Item, which property represents the value. */
  valueKey: string,
  /** Selected value of DropDown. */
  selectedValue: any,
  /** Fallback text when no Items are passed to DropDown. */
  noItemsText?: string,
  /** Placeholder text of unselected DropDown. */
  dummyOptionText?: string,
  /** Additional classnames to add to component as String or Array of Strings. */
  classList?: string | Array<string>,
  /** Callback function when DropDown changes value. */
  onDropDownItemChange: Function,
  /** Callback function when a user leaves a DropDown. */
  onDropDownItemBlur: Function
}

const CustomSelect = (props: Props) => {
  const {
    items,
    selectedValue,
    idKey,
    valueKey,
    noItemsText,
    dummyOptionText,
    classList,
    onDropDownItemChange,
    onDropDownItemBlur,
    ...rest
  } = props;

  const selectText = items && items.length ? dummyOptionText : noItemsText;

  return (
    <select
      className={classNames('ac-custom-select custom-select', classList)}
      value={selectedValue}
      onChange={onDropDownItemChange}
      onBlur={onDropDownItemBlur}
      {...rest}
    >
      <option disabled key={0} value="0">
        -- {selectText} --
      </option>
      {
        items && items.length ? (
          items.map(item => (
            <option key={item[idKey]} value={item[idKey]}>
              { item[valueKey] }
            </option>
          ))
        )
          : null
      }
    </select>
  );
};

CustomSelect.defaultProps = {
  noItemsText: 'No items Found',
  dummyOptionText: 'Select an Option',
  classList: '',
};

CustomSelect.displayName = 'CustomSelect';

export default CustomSelect;
