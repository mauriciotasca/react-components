// @flow
import React from 'react';
import './style.scss';

type Props = {
  name?: string,
  hours?: string,
  pay?: String
}

const CustomTableRow = (props: Props) => {
  const { name, hours, pay } = props;

  return (
    <tr>
      <td className="d-table-cell align-middle text-center w-10 font-weight-bold">{name}</td>
      <td className="d-table-cell align-middle text-left">
        <p className="text-truncate name-field-width" title="customData">{hours}</p>
      </td>
      <td className="table-success">
        <span>{pay}</span>
      </td>
      <td className="d-table-cell align-middle text-center w-10">
        <button type="button" className="btn btn-sm btn-primary btn-plain btn-rounded">Check</button>
      </td>
    </tr>
  );
};

CustomTableRow.defaultProps = {
  name: 'John Appleseed',
  hours: '40',
  pay: '$1010.00',
};

export default CustomTableRow;
