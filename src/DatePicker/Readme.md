DatePicker component for Avenue Code.
This component is a custom wrapper for `react-datepicker ` with preset configurations. Some usage examples are given below. For a complete list of configuration options, see the examples [here](https://reactdatepicker.com/).

This component makes use of `Bootstrap button` styles in addition to `ac-ui` base styles (which includes Bootstrap SCSS variables, functions, and mixins).
To apply styles, import `ac-ui` page styles and Bootstrap's button classes:
  * `@import "~@ac-ui/design-system/src/page"`
  * `@import "~@ac-ui/design-system/src/bridge/buttons"`

Thereafter, you can pass in Bootstrap classnames via the `classList` prop or apply your own custom styles.

DatePicker content can be accessed using the classname `ac-datepicker`.

Example: Default
```jsx
import { useState } from 'react';

const ExampleDatePicker = () => {
  const [date, setDate] = useState(new Date());
  const handleChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <DatePicker onChange={handleChange} selected={date} />
  );
}

<ExampleDatePicker />
```
