// @flow
import React from 'react';
import ReactDatePicker from 'react-datepicker';
import { CustomHeader, CustomInput, CustomTodayButton } from './utils';
import 'react-datepicker/dist/react-datepicker.css';

type Props = {
  /** Custom date format as String. `date-fns` is used internally for validating date formats.
   * Please refer to the `date-fns` documentation (https://date-fns.org/v1.30.1/docs/format) for valid formats. */
  dateFormat?: string,
  /** Custom popper placement. Valid placements are: `auto`, `top`, `right`, `bottom`, `left`.
   * Each placement can be modified with: `-start`, `-end`.
   * Ex. `top-end` (on top of reference, right aligned)
   * */
  popperPlacement?: string,
  useCustomHeader?: boolean,
  /** React element to display as custom header. Use in conjunction with `useCustomHeader`.
   * Required props are injected in by `react-datepicker`: `date`, `decreaseMonth`,
   * `increaseMonth`, `prevMonthButtonDisabled`, `nextMonthButtonDisabled`.
   * If `useCustomHeader` is set to `true` and `customHeader` is omitted, the built-in
   * `customHeader` will be used.
   */
  customHeader?: React.Element,
  /** React element to display as custom today button. */
  customTodayButton?: React.Element,
  useCustomInput?: boolean,
  /** React element to display as custom input (i.e. `CustomDatePicker` open/close toggle).
   * React element must be defined as a class.
   * Required props are injected in by `react-datepicker`: `onClick`.
   * If `useCustomInput` is set to `true` and `customInput` is omitted, the built-in
   * `customInput` will be used.
   * Use in conjunction with `useCustomInput`.
   */
  customInput?: React.Element,
}

const CustomDatePicker = (props: Props) => {
  const {
    useCustomHeader,
    customHeader,
    useCustomInput,
    customInput,
    ...rest
  } = props;
  let DatePickerProps = { ...rest };

  if (useCustomHeader) {
    if (customHeader) {
      DatePickerProps = { ...DatePickerProps, renderCustomHeader: customHeader };
    } else {
      DatePickerProps = { ...DatePickerProps, renderCustomHeader: CustomHeader };
    }
  }

  if (useCustomInput) {
    if (customInput) {
      DatePickerProps = { ...DatePickerProps, customInput };
    } else {
      DatePickerProps = { ...DatePickerProps, customInput: <CustomInput /> };
    }
  }

  return (
    <ReactDatePicker {...DatePickerProps} />
  );
};

CustomDatePicker.defaultProps = {
  dateFormat: 'yyyy-MM-dd',
  popperPlacement: 'bottom',
  customTodayButton: <CustomTodayButton>Today</CustomTodayButton>,
  useCustomHeader: false,
  customHeader: null,
  useCustomInput: false,
  customInput: null,
};

CustomDatePicker.displayName = 'CustomDatePicker';

export default CustomDatePicker;
