// @flow
import React from 'react';
import './style.scss'

type Props = {
  children: any,
};

const Row = (props: Props) => (<div className={'row'}>{props.children}</div>);

export default Row;
