import React, { useState } from 'react';
import classNames from 'classnames';
import './style.scss';

type Props = {
  /** Popover button content. Displayed both when popover is closed and open.  */
  content: string | React.Element,
  /** Content displayed in popover when it's open  */
  children?: React.Element,
  /** Array of classNames to add to component wrapper. */
  classList?: Array<string>,
  /** Alignmnet of popover with respect to toggle button.
   * Only has effect if `usePresetStyles` is `true`.
   * Accepted values are `left` and `right`. Default is `left`.  */
  alignment?: String,
  /** Use ACDC styling. */
  usePresetStyles?: boolean,
}

const MenuPopover = (props: Props) => {
  const {
    content,
    classList,
    children,
    alignment,
    usePresetStyles,
  } = props;

  const [isOpen, setOpen] = useState(false);

  const handleBlur = (event) => {
    // currentTarget refers to this component.
    // relatedTarget refers to the element where the user clicked (or focused) which
    // triggered this event.
    // So in effect, this condition checks if the user clicked outside the component.
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setOpen(false);
    }
  };

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={classNames('menu-popover-wrapper', classList)} onBlur={handleBlur}>
      <button type="button" className="menu-popover-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded={isOpen} onClick={handleClick}>
        {content}
      </button>
      { isOpen && children && (
        <div className={classNames('menu-popover-dropdown', { 'dropdown-menu d-block': usePresetStyles }, { [`dropdown-menu-${alignment}`]: usePresetStyles })}>
          { usePresetStyles && <div className={classNames('menu-popover-arrow', [`menu-popover-arrow-${alignment}`])} /> }
          {children}
        </div>
      )}
    </div>
  );
};

MenuPopover.defaultProps = {
  children: null,
  classList: [],
  alignment: 'left',
  usePresetStyles: false,
};

export default MenuPopover;
