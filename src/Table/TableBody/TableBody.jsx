// @flow
import React from 'react';
import TableRow from '../TableRow';

type Props = {
  tableData: Array<any>,
  CustomTableData?: React.Component
}

const TableBody = (props: Props) => {
  const { tableData, CustomTableData } = props;
  const hasData = tableData && tableData.length > 0;

  return (
    <tbody>
      { CustomTableData ? (
        <CustomTableData />
      ) : (
        hasData && (
          tableData.map(rowData => <TableRow rowData={rowData} />)
        )
      )}
    </tbody>
  );
};

TableBody.defaultProps = {
  CustomTableData: null,
};

export default TableBody;
