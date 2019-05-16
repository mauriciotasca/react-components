// @flow
import React from 'react';
import './style.scss';

type Props = {
  children: React.Element,
};

const Button = (props: Props) => (
  <button type="button">{props.children}</button>
);

Button.displayName = 'Button';

export default Button;
