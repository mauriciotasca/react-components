// @flow
import React from 'react';
import classNames from 'classnames';

type Props = {
  /** Additional classNames to be added to component. */
  classList?: string | Array<string>,
  children: any,
};

const Row = (props: Props) => {
  const { classList, children } = props;

  return (
    <div className={classNames('ac-row row', classList)}>{children}</div>
  );
};

Row.defaultProps = {
  classList: '',
};

export default Row;
