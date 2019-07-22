// @flow
import React from 'react';
import uuidv4 from 'uuid/v4';
import classNames from 'classnames';

type Props = {
  /** Array of data to present as table row. */
  rowData?: Array<any>,
  /** Custom element to present as table row. */
  CustomTableRow?: React.Component,
  /** Additional classNames to add to table row component. */
  classList?: string | Array<string>,
}

const TableRow = (props: Props) => {
  const { rowData, CustomTableRow, classList } = props;
  const hasData = rowData && rowData.length > 0;

  return (
    <>
      { CustomTableRow ? (
        <CustomTableRow />
      ) : (
        hasData && (
          <tr className={classNames('ac-table-row', classList)}>
            { rowData.map(data => <td key={uuidv4()}>{data}</td>) }
          </tr>
        )
      )}
    </>
  );
};

TableRow.defaultProps = {
  rowData: [],
  CustomTableRow: null,
  classList: '',
};

TableRow.displayName = 'TableRow';

export default TableRow;
