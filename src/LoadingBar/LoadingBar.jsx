// @flow
import React from 'react';
import './LoadingBar.scss';

type Props = {
  /** Description of prop "isLoading..." */
  isLoading: boolean;
}

const LoadingBar = (props:Props) => {
  const {
    isLoading,
  } = props;

  return (
    isLoading ? (
      <div className="load-bar">
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
    ) : (<div className="not-loading" />)
  );
};

export default LoadingBar;
