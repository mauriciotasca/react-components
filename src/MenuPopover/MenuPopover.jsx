import React, { useState } from 'react';
import classNames from 'classnames';
import './style.scss';

type Props = {
  /** Popover button content. Displayed both when popover is closed and open.  */
  content: string | React.Element,
  /** Content displayed in popover when it's open  */
  children?: React.Element,
  /** Additional classNames to add to the component wrapper. */
  classList?: string | Array<string>,
  /** Alignmnet of popover with respect to toggle button.
   * Accepted values are `left` and `right`. Default is `left`.  */
  alignment?: String,
}

const MenuPopover = (props: Props) => {
  const {
    content,
    classList,
    children,
    alignment,
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
    <div className={classNames('ac-menu-popover ac-menu-popover-wrapper', classList)} onBlur={handleBlur}>
      <button type="button" className="ac-menu-popover__button" data-toggle="dropdown" aria-haspopup="true" aria-expanded={isOpen} onClick={handleClick}>
        {content}
      </button>
      { isOpen && children && (
        <div className={`ac-menu-popover__dropdown dropdown-menu d-block dropdown-menu-${alignment}`}>
          { <div className={`ac-menu-popover__arrow menu-popover__arrow--${alignment}`} /> }
          {children}
        </div>
      )}
    </div>
  );
};

MenuPopover.defaultProps = {
  children: null,
  classList: '',
  alignment: 'left',
};

MenuPopover.displayName = 'MenuPopover';

export default MenuPopover;
