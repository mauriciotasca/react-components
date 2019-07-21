// @flow
import React from 'react';
import classNames from 'classnames';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

type Props = {
  headerNames: Array<string>,
  /** 2D array of shape: `[[row1-value1, row1-value2], [row2-value1, row2-value2], ...]` */
  tableData: Array<any>,
  /** Child element to present within table body. */
  CustomTableBody?: React.Component,
  /** Additional classNames to add to table component. */
  classList?: string | Array<string>,
}

const Table = (props: Props) => {
  const {
    headerNames,
    tableData,
    CustomTableBody,
    classList,
  } = props;

  return (
    <table className={classNames('ac-table table table-bordered table-hover', classList)}>
      <TableHeader headerNames={headerNames} />
      <TableBody tableData={tableData} CustomTableBody={CustomTableBody} />
    </table>
  );
};

Table.defaultProps = {
  CustomTableBody: null,
  classList: '',
};

export default Table;
