// @flow
import React from 'react';
import classNames from 'classnames';
import './style.scss';

type Props = {
  /** Boolean to toggle LoadingBar on/off. */
  isLoading: boolean,
  /** Additional classNames to add to the component. */
  classList?: string | Array<string>,
}

const LoadingBar = (props:Props) => {
  const { isLoading, classList, ...rest } = props;

  return (
    isLoading ? (
      <div className={classNames('ac-loading-bar', classList)} {...rest}>
        <div className="ac-loading-bar__is-loading ac-loading-bar__is-loading--blue" />
        <div className="ac-loading-bar__is-loading ac-loading-bar__is-loading--blue-light" />
        <div className="ac-loading-bar__is-loading ac-loading-bar__is-loading--blue-lighter" />
      </div>
    ) : (
      <div className={classNames('ac-loading-bar ac-loading-bar--not-loading', classList)} {...rest} />
    )
  );
};

LoadingBar.defaultProps = {
  classList: '',
};

LoadingBar.displayName = 'LoadingBar';

export default LoadingBar;
