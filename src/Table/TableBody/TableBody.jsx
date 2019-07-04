// @flow
import React from 'react';
import TableRow from '../TableRow';

type Props = {
  rowData: Array<any>,
  CustomTableRow?: React.Component
}

const TableBody = (props: Props) => {
  const { rowData, CustomTableRow } = props;

  return (
    <tbody>
      <TableRow
        rowData={rowData}
        CustomTableRow={CustomTableRow}
      />
    </tbody>
  );
};

TableBody.defaultProps = {
  CustomTableRow: null,
};

export default TableBody;
