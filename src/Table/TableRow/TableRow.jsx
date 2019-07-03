// @flow
import React from 'react';
import uuidv4 from 'uuid/v4';

type Props = {
  rowData: Array<Object>
}

const TableRow = (props: Props) => {
  const { rowData } = props;

  return (
    <tr>
      {
        rowData.map(data => <td key={uuidv4()}>{data}</td>)
      }
    </tr>
  );
};

export default TableRow;
