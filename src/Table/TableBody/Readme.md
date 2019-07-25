TableBody component for Avenue Code. This component should appear as child of `<table>`.
Generates a HTML tbody element given a data array or a custom React Component. If both are passed in, the custom React Component will take precedence and be rendered. All global HTML attributes are also supported. Pass them in as you would normally using React props.

___
#### **How can I reference this component?**
___
This component can be accessed using the classname `ac-table-body` or displayname `TableBody`.

___
#### **How do I use this component?**
___
Below are some self-contained usage examples.

**Example:** Create table body using a data array
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

**Example:** Create table body using a custom React component
```jsx
const CustomTableBody = () => {
  const tableData = [
    {name: 'John Doe', hours: '80', pay: '$2020.00'},
    {name:'Jane Smith', hours: '55', pay:'$1388.75'},
    {name:'John Appleseed', hours: '40', pay:'$1010.00'},
  ];

  return (
    <tbody>
    {
      tableData.map(rowData => {
        return (
          <tr key={rowData.hours}>
            <td className="d-table-cell align-middle text-center w-10 font-weight-bold">
              {rowData.name}
            </td>
            <td className="d-table-cell align-middle text-left">
              <p className="text-truncate name-field-width" title="custom-data">{rowData.hours}</p>
            </td>
            <td className="table-success">
              <span>{rowData.pay}</span>
            </td>
            <td className="d-table-cell align-middle text-center w-10">
              <button type="button" className="btn btn-sm btn-primary btn-plain btn-rounded">Check</button>
            </td>
          </tr>
        )
      })
    }
    </tbody>
  )
}

<table className="table table-bordered table-hover">
  <TableBody CustomTableBody={CustomTableBody} />
</table>
```
