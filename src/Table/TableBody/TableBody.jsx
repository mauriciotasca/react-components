// @flow
import React from 'react';
import uuidv4 from 'uuid/v4';
import classNames from 'classnames';
import TableRow from '../TableRow';

type Props = {
  /** 2D array of shape: `[[row1-value1, row1-value2], [row2-value1, row2-value2], ...]` */
  tableData?: Array<any>,
  /** Custom body element to present within component. */
  CustomTableBody?: React.Component,
  /** Additional classNames to add to table body component. */
  classList?: string | Array<string>,
}

const TableBody = (props: Props) => {
  const {
    tableData,
    CustomTableBody,
    classList,
    ...rest
  } = props;
  const hasData = tableData && tableData.length > 0;

  return (
    <>
      { CustomTableBody ? (
        <CustomTableBody />
      ) : (
        hasData && (
          <tbody className={classNames('ac-table-body', classList)} {...rest}>
            { tableData.map(rowData => <TableRow key={uuidv4()} rowData={rowData} />) }
          </tbody>
        )
      )}
    </>
  );
};

TableBody.defaultProps = {
  tableData: [],
  CustomTableBody: null,
  classList: '',
};

TableBody.displayName = 'TableBody';

export default TableBody;
