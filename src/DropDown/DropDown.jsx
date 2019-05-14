// @flow
import React from 'react';
import './DropDown.scss';


type Props = {
  /** Description of prop "field..." */
  field: any,
  /** Description of prop "items..." */
  items: Array<any>,
  /** Description of prop "noItemsText..." */
  selectedValue: any,
  /** Description of prop "noItemsText..." */
  /** Description of prop "idKey..." */
  idKey: string,
  /** Description of prop "valueKey..." */
  valueKey: string,
  /** Description of prop "noItemsText..." */
  noItemsText: string,
  /** Description of prop "dummyOptionText..." */
  dummyOptionText: string,
  /** Description of prop "onDropDownItemChange..." */
  onDropDownItemChange: Function,
  /** Description of prop "onDropDownItemBlur..." */
  onDropDownItemBlur: Function
}
/**
 *
 * */
const DropDown = (props: Props) => {
  const {
    items,
    selectedValue,
    idKey,
    valueKey,
    noItemsText,
    dummyOptionText,
    onDropDownItemChange,
    onDropDownItemBlur
  } = props;

  const selectText = items && items.length ? dummyOptionText : noItemsText;

  return (
    <select
      className="custom-select"
      value={selectedValue}
      onChange={onDropDownItemChange}
      onBlur={onDropDownItemBlur}
    >
      <option disabled key={0} value={'0'}>
        -- {selectText} --
      </option>
      {
        items && items.length ? (
            items.map(item => (
                <option key={item[idKey]} value={item[idKey]}>
                  {item[valueKey]}
                </option>
              )
            )
          )
          :
          null
      }
    </select>
  );
};

export default DropDown;
