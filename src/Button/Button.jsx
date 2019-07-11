// @flow
import React from 'react';
import classNames from 'classnames';
import './style.scss';

type Props = {
  children: React.Element,
  /** Array of classNames to add to the component. */
  classList?: Array<string>,
  /** Custom click event handler. */
  onClick?: () => void,
};

const Button = (props: Props) => {
  const { classList, onClick } = props;

  return (
    <button type="button" className={classNames(classList)} onClick={onClick}>{props.children}</button>
  );
};

Button.defaultProps = {
  classList: [],
  onClick: null,
};

Button.displayName = 'Button';

export default Button;
