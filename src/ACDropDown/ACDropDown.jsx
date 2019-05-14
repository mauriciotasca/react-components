// @flow
import React from 'react';
import './ACDropDown.scss';


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
const ACDropDown = (props: Props) => {
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

  function renderSelectOptions() {
    if (items && items.length > 0) {
      const convertedItems = items.map(item => (
        <option key={item[idKey]} value={item[idKey]}>
          {item[valueKey]}
        </option>
      ));

      convertedItems.unshift(
        <option disabled key={0} value={'0'}>-- {dummyOptionText} --</option>
      );

      return convertedItems;
    }
    return <option disabled key={0} value={'0'}>-- {noItemsText} --</option>;
  }

  return (
      <select
        data-test="component-acdropdown"
        className="custom-select"
        value={selectedValue}
        onChange={onDropDownItemChange}
        onBlur={onDropDownItemBlur}
      >
        {renderSelectOptions()}
      </select>
  );
};

export default ACDropDown;
