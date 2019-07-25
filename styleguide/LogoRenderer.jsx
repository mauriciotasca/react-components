import React from 'react';
import { AlternatingText } from '../src';
import AClogo from './assets/logo-avenue-code-horizontal.svg';
import './style.scss';

type Props = {
  children: React.Element,
}

const LogoRenderer = (props: Props) => (
  <div className="ac-components-library-info">
    <img className="ac-components-library-info__logo" src={AClogo} alt="Avenue Code logo" />
    <AlternatingText text={props.children} classList="ac-components-library-info__title" />
  </div>
);


export default LogoRenderer;
