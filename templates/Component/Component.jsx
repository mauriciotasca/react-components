// @flow
import * as React from 'react';
import './style.scss';

type Props = {
  /** Child elements or string to present within component */
  children: React.Element,
};

const Component = (props: Props) => (
  <div>{props.children}</div>
);

export default Component;
