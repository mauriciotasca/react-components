// @flow
import React from 'react';
import './style.scss'

type Props = {
  children: any,
};

const defaultProps: Props = {
  children: null,
};

const Button = (props: Props) => {
  return (
    <button>{props.children}</button>
  )
};

Button.defaultProps = defaultProps;
Button.displayName = 'Button';

export default Button;
