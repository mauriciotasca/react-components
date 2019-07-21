// @flow
import React from 'react';
import uuidv4 from 'uuid/v4';

type Props = {
  rowData: Array<any>,
  CustomTableRow?: React.Component
}

const TableRow = (props: Props) => {
  const { rowData, CustomTableRow } = props;
  const hasData = rowData && rowData.length > 0;

  return (
    <>
      { CustomTableRow ? (
        <CustomTableRow className="custom" />
      ) : (
        hasData && (
          <tr>{ rowData.map(data => <td key={uuidv4()}>{data}</td>) }</tr>
        )
      )}
    </>
  );
};

TableRow.defaultProps = {
  CustomTableRow: null,
};

TableRow.displayName = 'TableRow';

export default TableRow;
