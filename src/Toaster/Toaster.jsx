import React, { PureComponent } from 'react';
import './Toaster.scss';

type Props = {
  visible: boolean,
  timeout?: number,
  topOffset?: number,
  closeIcon?: any,
  hasCloseIcon?: boolean,
  icon?: any,
  title: string,
  subtitle: string,
  classNames: string,
  onToasterDismissed: Function
};

type State = {
  toggleVisibility: false,
  toasterTopPosition: number,
  isMouseOverToast: false
};

class Toaster extends PureComponent<Props, State> {
  timeoutReference = null;

  state = {
    toggleVisibility: false,
    toasterTopPosition: this.props.topOffset
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

    if (visible) {
      this.checkScrollTopPosition();
      if (prevProps.visible !== visible && visible) {
        this.addScrollListener();
        this.setToasterTimeout(timeout);
      }
    } else {
      this.removeScrollListener();
    }
  }

  checkScrollTopPosition = () => {
    const { topOffset } = this.props;
    const bodyScrollTop = document.body.scrollTop;
    const documentScrollTop = document.documentElement.scrollTop;
    const scrollTop = bodyScrollTop || documentScrollTop;

    if (scrollTop <= topOffset) {
      this.setState({ toasterTopPosition: topOffset - scrollTop });
    } else {
      this.setState({ toasterTopPosition: 0 });
    }
  };

  startTimeoutAfterVisibility = () => {
    const { timeout, onToasterDismissed, visible } = this.props;
    const { toggleVisibility } = this.state;

    this.timeoutReference = setTimeout(() => {
      if (!this.state.isMouseOverToast) {
        if (visible || toggleVisibility) {
          this.removeScrollListener();
          this.setState({ toggleVisibility: false });
          onToasterDismissed();
        }
      }
    }, timeout);
  };

  onCloseIconClick = () => {
    const { onToasterDismissed } = this.props;
    this.removeScrollListener();
    clearTimeout(this.timeoutReference);
    onToasterDismissed();
  };

  removeScrollListener = () => {
    window.removeEventListener('scroll', this.checkScrollTopPosition);
  };

  addScrollListener = () => {
    window.addEventListener('scroll', this.checkScrollTopPosition);
  };

  setToasterTimeout = () => {
    this.setState({ toggleVisibility: true }, this.startTimeoutAfterVisibility);
  };

  onMouseEnter = () => {
    this.setState({ isMouseOverToast: true });
  }

  onMouseLeave = () => {
    this.setState({ isMouseOverToast: false }, this.startTimeoutAfterVisibility);
  }

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
