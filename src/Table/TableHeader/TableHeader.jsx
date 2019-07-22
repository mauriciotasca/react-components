// @flow
import React from 'react';
import classNames from 'classnames';

type Props = {
  /** Array of column headings. */
  headerNames: Array<string>,
  /** Additional classNames to add to table header component. */
  classList?: string | Array<string>,
}

const TableHeader = (props: Props) => {
  const { headerNames, classList } = props;
  const hasHeaders = headerNames && headerNames.length > 0;

  return (
    <thead className={classNames('ac-table-header text-center text-uppercase font-weight-bold', classList)}>
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

TableHeader.defaultProps = {
  classList: '',
};

TableHeader.displayName = 'TableHeader';

export default TableHeader;
