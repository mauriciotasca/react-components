DatePicker component for Avenue Code.
This component is a custom wrapper for `react-datepicker ` with preset configurations. Some usage examples are given below. For a complete list of configuration options, see the examples [here](https://reactdatepicker.com/).

Example: Default
```jsx
<div>
  <CustomDatePicker />
</div>
```

Example: Default with placeholder text
```jsx
const selected = new Date();
<div>
  <CustomDatePicker selected={selected} />
</div>
```

Example: Custom date format
```jsx
const selected = new Date();
<div>
  <CustomDatePicker selected={selected} dateFormat="MMMM d, yyyy h:mm aa" />
</div>
```

Example: Custom header (built-in)
```jsx
/*
Custom header element example:

const CustomHeader = (props: Props) => {
  const {
    date,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  } = props;

  return (
    <div className="react-datepicker__header-custom--navigation">
      <ArrowLeftCircle
        className="feather-24 arrow-hover-effect clickable primary-stroke"
        onClick={decreaseMonth}
        disabled={prevMonthButtonDisabled}
        title="Previous Month"
      />
      <div>
        <span className="font-weight-bold">{moment(date).format('MMMM')}</span> &nbsp;
        <span className="font-weight-light">{moment(date).format('YYYY')}</span>
      </div>
      <ArrowRightCircle
        className="feather-24 arrow-hover-effect clickable primary-stroke"
        onClick={increaseMonth}
        disabled={nextMonthButtonDisabled}
        title="Next Month"
      />
    </div>
  );
};
*/

const selected = new Date();
const useCustomHeader = true;
<div>
  <CustomDatePicker selected={selected} useCustomHeader={useCustomHeader} />
</div>
```

Example: Custom input (built-in)
```jsx
/*
Custom input element example:

const CustomInput = forwardRef((props: Props, ref) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="#0095f4" fill="none" onClick={props.onClick} ref={ref}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
));

CustomInput.displayName = 'CustomInput';
*/

const selected = new Date();
const useCustomInput = true;
<div>
  <CustomDatePicker selected={selected} useCustomInput={useCustomInput} />
</div>
```