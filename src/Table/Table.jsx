// @flow
import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

type Props = {
  headerNames: Array<string>,
  tableData: Array<any>,
  CustomTableData?: React.Component
}

const Table = (props: Props) => {
  const { headerNames, tableData, CustomTableData } = props;

  return (
    <table className="table table-bordered table-hover">
      <TableHeader headerNames={headerNames} />
      <TableBody tableData={tableData} CustomTableData={CustomTableData} />
    </table>
  );
};

Table.defaultProps = {
  CustomTableData: null,
};

export default Table;
