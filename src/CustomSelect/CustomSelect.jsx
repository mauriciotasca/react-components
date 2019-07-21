// @flow
import React from 'react';
import './style.scss';

type Props = {
  /** Array of options to display in Dropdown */
  items: Array<any>,
  /** Should Select be disabled (SelectHTMLAttributes) */
  disabled?: boolean,
  /** Selected value of DropDown */
  selectedValue: any,
  /** Within an Item, which property represents the key */
  idKey: string,
  /** Within an Item, which property represents the value */
  valueKey: string,
  /** Fallback text when no Items are passed to DropDown */
  noItemsText: string,
  /** Placeholder text of unselected DropDown */
  dummyOptionText: string,
  /** Callback function when DropDown changes value */
  onDropDownItemChange: Function,
  /** Callback function when a user leaves a DropDown */
  onDropDownItemBlur: Function
}

const CustomSelect = (props: Props) => {
  const {
    items,
    disabled,
    selectedValue,
    idKey,
    valueKey,
    noItemsText,
    dummyOptionText,
    onDropDownItemChange,
    onDropDownItemBlur,
  } = props;

  const selectText = items && items.length ? dummyOptionText : noItemsText;

  return (
    <select
      className="ac-custom-select"
      value={selectedValue}
      disabled={disabled}
      onChange={onDropDownItemChange}
      onBlur={onDropDownItemBlur}
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
  disabled: false,
};

CustomSelect.displayName = 'CustomSelect';

export default CustomSelect;
