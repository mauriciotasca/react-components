// @flow
import React, { forwardRef } from 'react';

type Props = {
  /** OnClick handler injected in by react-datepicker. */
  onClick: Function,
}

const CustomInput = forwardRef((props: Props, ref) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="#0095f4" fill="none" onClick={props.onClick} ref={ref}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
));

CustomInput.displayName = 'CustomInput';

export default CustomInput;
