// @flow
import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import './style.scss';

type Props = {
  headerNames: Array<string>,
  /** 2D array of shape: `[[row1-value1, row1-value2], [row2-value1, row2-value2], ...]` */
  tableData: Array<any>,
  /** Child element to present within table body */
  CustomTableBody?: React.Component
}

const Table = (props: Props) => {
  const { headerNames, tableData, CustomTableBody } = props;

  return (
    <table className="table table-bordered table-hover">
      <TableHeader headerNames={headerNames} />
      <TableBody tableData={tableData} CustomTableBody={CustomTableBody} />
    </table>
  );
};

Table.defaultProps = {
  CustomTableBody: null,
};

export default Table;
