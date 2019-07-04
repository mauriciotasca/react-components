// @flow
import React from 'react';
import uuidv4 from 'uuid/v4';

type Props = {
  rowData: Array<any>,
  CustomTableRow?: React.Component
}

const TableRow = (props: Props) => {
  const { rowData, CustomTableRow } = props;

  return (
    <>
      {
        CustomTableRow ? (
          <CustomTableRow key={uuidv4()} rowData={rowData} />
        ) : (
          <tr>
            {
              rowData.map(data => <td key={uuidv4()}>{data}</td>)
            }
          </tr>
        )
      }
    </>
  );
};

TableRow.defaultProps = {
  CustomTableRow: null,
};

export default TableRow;
