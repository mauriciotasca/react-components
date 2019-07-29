// @flow
import React from 'react';
import { Menu } from 'react-feather';
import classNames from 'classnames';
import uuidv4 from 'uuid/v4';
import HeaderTitle from '../HeaderTitle';
import MenuPopover from '../MenuPopover';
import './style.scss';

type Props = {
  /** Header title. */
  title: string,
  /** List of navigation items. */
  nav?: Array<any>,
  /** Menu popover toggle button. This element/component should contain an onClick callback that
   * controls the open/close state of the popover. */
  popoverToggle?: React.Element,
  /** Content to display in menu popover. */
  popoverContent?: React.Element,
  /** Boolean describing if the modal should be shown or not. */
  isPopoverOpen?: boolean,
  /** Function that will be run when popover focus is lost. */
  onPopoverClose?: Function,
  /** Callback function for when hamburger menu icon is clicked. */
  onHamburgerMenuClick?: Function,
  /** Additional classNames to add to component wrapper. */
  classList?: string | Array<string>,
};

const Header = (props: Props) => {
  const {
    title,
    nav,
    popoverToggle,
    popoverContent,
    isPopoverOpen,
    onPopoverClose,
    onHamburgerMenuClick,
    classList,
  } = props;

  return (
    <div className={classNames('ac-header nav-wrapper', classList)}>
      <nav className="ac-header-navbar navbar navbar-expand-lg navbar-dark bg-dark">
        { onHamburgerMenuClick && <Menu className="ac-header-navbar__hamburger-icon navbar-brand feather-24" onClick={onHamburgerMenuClick} /> }
        <HeaderTitle text={title} classList="ac-header-navbar__header-title center-logo-header text-white" />

        { nav && (
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="ac-header-navbar__nav navbar-nav mr-auto">
              {
                nav.map(navItem => (<li key={uuidv4()} className="nav-item">{navItem}</li>))
              }
            </ul>
          </div>
        )}

        { popoverToggle && popoverContent && (
          <div className="ac-header-navbar__popover-wrapper header-icons">
            <MenuPopover
              isOpen={isPopoverOpen}
              onClose={onPopoverClose}
              toggle={popoverToggle}
              classList="ac-header-navbar__popover"
            >
              {popoverContent}
            </MenuPopover>
          </div>
        )}
      </nav>
    </div>
  );
};

Header.defaultProps = {
  nav: [],
  popoverToggle: null,
  popoverContent: null,
  isPopoverOpen: null,
  onPopoverClose: null,
  onHamburgerMenuClick: null,
  classList: '',
};

MenuPopover.displayName = 'Header';

export default Header;
