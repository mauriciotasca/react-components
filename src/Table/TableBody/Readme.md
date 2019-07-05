TableBody component for Avenue Code. Should appear as child of `<table>`.

Generated using a data array or a custom React Component.

Example: Table data array
```jsx
const tableData = [
  ['John Doe', '80', '$2020.00'],
  ['Jane Smith', '55', '$1388.75'],
  ['John Appleseed', '40', '$1010.00']
];

<table className="table table-bordered table-hover">
  <TableBody tableData={tableData} />
</table>
```

Example: Custom React component
```jsx
import { CustomTableBody } from '../examples';

<table className="table table-bordered table-hover">
  <TableBody CustomTableBody={CustomTableBody} />
</table>
```
