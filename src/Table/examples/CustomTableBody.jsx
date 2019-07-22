// @flow
import React from 'react';
import CustomTableRow from './CustomTableRow';

const CustomTableBody = () => (
  <tbody>
    <CustomTableRow name="John Doe" hours="80" pay="$2020.00" />
    <CustomTableRow name="Jane Smith" hours="55" pay="$1388.75" />
    <CustomTableRow />
  </tbody>
);

export default CustomTableBody;
