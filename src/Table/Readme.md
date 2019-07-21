Table component for Avenue Code. Generates a `<table>` component given a data array or a custom React component.

Makes use of `<TableHeader>`, `<TableBody>` and `<TableRow>` sub-components, each of which are reusable independently as well.

This component makes use of `Bootstrap table` styles in addition to `ac-ui` base styles (which includes Bootstrap SCSS variables, functions, and mixins).
To apply styles, import `ac-ui` page styles and Bootstrap's modal classes:
  * `@import "~@ac-ui/design-system/src/page"`
  * `@import "~@ac-ui/design-system/src/bridge/tables"`
  
Thereafter, you can pass in Bootstrap classnames via the `classList` prop or apply your own custom styles.

Table content can be accessed using the classname `ac-table`.

Example: Table data array
```jsx
const headerNames = ['Name', 'Billable Hours', 'Total Pay']
const tableData = [
  ['John Doe', '80', '$2020.00'],
  ['Jane Smith', '55', '$1388.75'],
  ['John Appleseed', '40', '$1010.00']
];

<Table headerNames={headerNames} tableData={tableData} />
```

Example: Custom React component
```jsx
const headerNames = ['Name', 'Billable Hours', 'Total Pay', ''];
import { CustomTableBody } from './examples';

/* 
Partial custom React component <CustomTableBody>:

<>
  <tr>
    <td className="d-table-cell align-middle text-center w-10 font-weight-bold">John Doe</td>
    <td className="d-table-cell align-middle text-left">
      <p className="text-truncate name-field-width" title="customData">80</p>
    </td>
    <td className="table-success">
      <span>$2020.00</span>
    </td>
    <td className="d-table-cell align-middle text-center w-10">
      <button type="button" className="btn btn-sm btn-primary btn-plain btn-rounded">Check</button>
    </td>
  </tr>
</>
*/

<Table headerNames={headerNames} CustomTableBody={CustomTableBody} />
```
