// @flow
import React from 'react';
import TableRow from '../TableRow';

type Props = {
  headerNames: Array<string>
}

const getHeaderRow = headerNames => (
  <tr>
    { headerNames.map(headerName => (
      <th key={headerName} scope="col">
        {headerName}
      </th>
    ))}
  </tr>
);

const TableHeader = (props: Props) => {
  const { headerNames } = props;

  return (
    <thead className="text-center text-uppercase font-weight-bold">
      <TableRow CustomTableRow={getHeaderRow(headerNames)} />
    </thead>
  );
};

export default TableHeader;
