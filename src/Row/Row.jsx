// @flow
import React from 'react';
import classNames from 'classnames';

type Props = {
  /** Additional classNames to be added to component. */
  classList?: string | Array<string>,
  children: any,
};

const Row = (props: Props) => {
  const { classList, children, ...rest } = props;

  return (
    <div className={classNames('ac-row row', classList)} {...rest}>{children}</div>
  );
};

Row.defaultProps = {
  classList: '',
};

Row.displayName = 'Row';

export default Row;
