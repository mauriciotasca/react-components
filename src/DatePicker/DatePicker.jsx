// @flow
import React from 'react';
import ReactDatePicker from 'react-datepicker';
import classNames from 'classnames';
import { CustomHeader, CustomInput, CustomTodayButton } from './utils';
import './styles/style.scss';

type Props = {
  /** Selected date of calendar. */
  selected: Date,
  /** Custom date format as String. `date-fns` is used internally for validating date formats.
   * Refer to the `date-fns` [documentation](https://date-fns.org/v1.30.1/docs/format) for valid formats. */
  dateFormat?: string,
  /** Custom popper placement. Valid placements are: `auto`, `top`, `right`, `bottom`, `left`.
   * Each placement can be modified with: `-start`, `-end`.
   * Ex. `top-end` (on top of reference, right aligned)
   */
  popperPlacement?: string,
  /** React element to display as custom header.
   * Required props are injected in by `react-datepicker`: `date`, `decreaseMonth`,
   * `increaseMonth`, `prevMonthButtonDisabled`, `nextMonthButtonDisabled`.
   */
  customHeader?: React.Element,
  /** React element to display as custom today button. */
  customTodayButton?: React.Element,
  /** React element to display as custom input (i.e. open/close toggle).
   * Required props are injected in by `react-datepicker`: `onClick`, `value`, `ref`.
   * Component must be defined as a class or a stateless function with ref forwarding to handle
   * the injected `ref` prop.
   * Component must pass the injected `onClick` function to its `onClick` event handler
   * to allow the datepicker to open.
   */
  customInput?: React.Element,
  /** Use in conjunction with customInput to display custom calendar toggle button.
   * If set to `true` while `customInput` is undefined, the built-in customInput will be used. */
  useCustomInput?: boolean,
  /** Additional classNames to add to the calendar component. */
  calendarClassList?: string | Array<string>,
  /** Additional classNames to add to the input/toggle component. */
  inputClassList?: string | Array<string>,
  /** Function called when date value changes. Returns a date object. */
  onChange: Function,
}

const DatePicker = (props: Props) => {
  const {
    customHeader,
    customTodayButton,
    calendarClassList,
    inputClassList,
    customInput,
    useCustomInput,
    ...rest
  } = props;

  let DatePickerProps = { ...rest };

  if (useCustomInput) {
    DatePickerProps = { ...DatePickerProps, customInput };
  }

  return (
    <ReactDatePicker
      renderCustomHeader={customHeader}
      todayButton={customTodayButton}
      className={classNames('ac-datepicker__input', inputClassList)}
      calendarClassName={classNames('ac-datepicker', calendarClassList)}
      {...DatePickerProps}
    />
  );
};

DatePicker.defaultProps = {
  dateFormat: 'yyyy-MM-dd',
  popperPlacement: 'bottom',
  customTodayButton: <CustomTodayButton>Today</CustomTodayButton>,
  customHeader: CustomHeader,
  customInput: <CustomInput />,
  useCustomInput: false,
  calendarClassList: '',
  inputClassList: '',
};

DatePicker.displayName = 'DatePicker';

export default DatePicker;
