TableRow component for Avenue Code. Should appear as child of `<tbody>`.

Generated using a data array or a custom React Component. Each `<TableRow>` should receive a unique `key`.

Example: Data array
```jsx
const rowData = ['John Appleseed', '40', '$1010.00'];

<table className="table table-bordered table-hover">
  <tbody>
    <TableRow rowData={rowData} />
  </tbody>
</table>
```

Example: Custom React component
```jsx
import { CustomTableRow } from '../examples';

<table className="table table-bordered table-hover">
  <tbody>
    <TableRow CustomTableRow={CustomTableRow} />
  </tbody>
</table>
```
