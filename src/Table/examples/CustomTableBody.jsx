import React from 'react';
import CustomTableRow from './CustomTableRow';

const CustomTableBody = () => (
  <>
    <CustomTableRow name="John Doe" hours="80" pay="$2020.00" />
    <CustomTableRow name="Jane Smith" hours="55" pay="$1388.75" />
    <CustomTableRow />
  </>
);

export default CustomTableBody;
