// @flow
import React from 'react';
import './style.scss';

type Props = {
  headerNames: Array<string>
}

const TableHeader = (props: Props) => {
  const { headerNames } = props;
  const hasHeaders = headerNames && headerNames.length > 0;

  return (
    <thead className="text-center text-uppercase font-weight-bold">
      { hasHeaders && (
        <tr>
          { headerNames.map(headerName => (
            <th key={headerName} scope="col">
              {headerName}
            </th>
          ))}
        </tr>
      )}
    </thead>
  );
};

export default TableHeader;
