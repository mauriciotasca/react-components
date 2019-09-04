import React, { PureComponent } from 'react';
import './Toaster.scss';

type Props = {
  /** Boolean describing if the toaster should be shown or not. */
  visible: boolean,
  /** Number indicating the timeout to hide the toaster. */
  timeout?: number,
  /** Number indicating the distance from the toaster to the top. */
  topOffset?: number,
  /** Element to display as icon. Default is a close icon. */
  closeIcon?: any,
  /** Boolean describing if the close icon should be shown or not. */
  hasCloseIcon?: boolean,
  /** Element to display as icon. */
  icon?: any,
  /** String to display as Toaster title. */
  title: string,
  /** String to display as Toaster subtitle. */
  subtitle: string,
  /** String className to be applied to the Toaster. */
  classNames: string,
  /** Function that will be run when the Toaster is requested to be closed. */
  onToasterDismissed: Function
};

type State = {
  toggleVisibility: boolean,
  toasterTopPosition: number,
  isMouseOverToast: boolean
};

class Toaster extends PureComponent<Props, State> {
  timeoutReference = null;

  state = {
    toggleVisibility: false,
    toasterTopPosition: this.props.topOffset,
    isMouseOverToast: false
  };

  static defaultProps = {
    timeout: 4000,
    hasCloseIcon: true,
    topOffset: 40,
    icon: undefined,
    closeIcon: undefined
  };

  componentDidUpdate(prevProps): void {
    const { timeout, visible } = this.props;
    if (prevProps.visible !== visible && visible) {
      this.setToasterTimeout(timeout);
    }
  }

  startTimeoutToHideIfMouseIsNotOver = () => {
    const { timeout, onToasterDismissed, visible } = this.props;

    this.timeoutReference = setTimeout(() => {
      const { toggleVisibility, isMouseOverToast } = this.state;

      if (!isMouseOverToast) {
        if (visible || toggleVisibility) {
          this.setState({ toggleVisibility: false });
          onToasterDismissed();
        }
      }
    }, timeout);
  };

  onCloseIconClick = () => {
    const { onToasterDismissed } = this.props;
    clearTimeout(this.timeoutReference);
    onToasterDismissed();
  };

  setToasterTimeout = () => {
    this.setState({ toggleVisibility: true }, this.startTimeoutToHideIfMouseIsNotOver);
  };

  onMouseEnter = () => {
    this.setState({ isMouseOverToast: true });
  };

  onMouseLeave = () => {
    this.setState({ isMouseOverToast: false }, this.startTimeoutToHideIfMouseIsNotOver);
  };

  render() {
    const {
      visible,
      title,
      subtitle,
      hasCloseIcon,
      icon: CustomIcon,
      closeIcon: CloseIcon,
      classNames
    } = this.props;

    const { toasterTopPosition } = this.state;

    return (
      <div
        style={{ top: toasterTopPosition }}
        className="ac-toaster-container"
      >
        <div
          className={`d-flex  ac-toaster ${
            visible ? 'show' : 'hide'
          } ${classNames}`}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          <div className="d-flex p-3 justify-content-center align-items-center p-4">
            {CustomIcon ? (
              <CustomIcon className="feather-24" />
            ) : (
              <small>Look!!</small>
            )}
          </div>

          <div className="d-flex flex-column w-100">
            <div className="d-flex justify-content-between pr-3 pt-3 w-100">
              <p id="toaster-title" className="p-0 m-0 font-weight-bold">{title}</p>

              {/* eslint-disable-next-line operator-linebreak */}
              {hasCloseIcon &&
                (CloseIcon ? (
                  <CloseIcon
                    onClick={this.onCloseIconClick}
                    className="feather-16 clickable"
                  />
                ) : (
                  <small
                    tabIndex={-1}
                    role="button"
                    onKeyPress={() => {}}
                    className="clickable"
                    onClick={this.onCloseIconClick}
                  >
                    Close
                  </small>
                ))}
            </div>

            <small id="toaster-subtitle" className="p-0 pb-3 pr-3 m-0 font-weight-light">
              {subtitle}
            </small>
          </div>
        </div>
      </div>
    );
  }
}

export default Toaster;
