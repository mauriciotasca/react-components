import React from 'react';
import AClogo from './assets/logo-avenue-code-vertical-white.svg';
import './style.scss';

type Props = {
  children: React.Element,
}

const LogoRenderer = (props: Props) => (
  <div className="ac-components-library-info">
    <img className="ac-components-library-info__logo" src={AClogo} alt="Avenue Code logo" />
  </div>
);


export default LogoRenderer;
