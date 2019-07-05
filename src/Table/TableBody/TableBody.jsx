// @flow
import React from 'react';
import uuidv4 from 'uuid/v4';
import TableRow from '../TableRow';

type Props = {
  /** 2D array of shape: `[[row1-value1, row1-value2], [row2-value1, row2-value2], ...]` */
  tableData: Array<any>,
  /** Child element to present within component */
  CustomTableBody?: React.Component
}

const TableBody = (props: Props) => {
  const { tableData, CustomTableBody } = props;
  const hasData = tableData && tableData.length > 0;

  return (
    <tbody>
      { CustomTableBody ? (
        <CustomTableBody className="custom" />
      ) : (
        hasData && (
          tableData.map(rowData => <TableRow key={uuidv4()} rowData={rowData} />)
        )
      )}
    </tbody>
  );
};

TableBody.defaultProps = {
  CustomTableBody: null,
};

export default TableBody;
