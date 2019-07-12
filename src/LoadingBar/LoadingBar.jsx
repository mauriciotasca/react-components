// @flow
import React from 'react';
import './style.scss';

type Props = {
  /** Boolean to toggle LoadingBar on/off. */
  isLoading: boolean;
}

const LoadingBar = (props:Props) => {
  const { isLoading } = props;

  return (
    isLoading ? (
      <div className="loading-bar">
        <div className="is-loading is-loading--blue" />
        <div className="is-loading is-loading--blue-light" />
        <div className="is-loading is-loading--blue-lighter" />
      </div>
    ) : (
      <div className="loading-bar loading-bar--not-loading" />
    )
  );
};

export default LoadingBar;
