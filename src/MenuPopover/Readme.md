MenuPopover component for Avenue Code.
This component has access to `Bootstrap dropdown` styles in addition to `AC design-system` base styles (which includes `Bootstrap SCSS variables, functions, and mixins`). 
Improve accessibility of this component by adding ARIA attributes (`aria-haspopup`, `aria-expanded`, etc) to the MenuPopover toggle.

This component makes use of `Bootstrap dropdown` styles in addition to `ac-ui` base styles (which includes Bootstrap SCSS variables, functions, and mixins).
To apply styles, import `ac-ui` page styles and Bootstrap's dropdown classes:
  * `@import "~@ac-ui/design-system/src/page"`
  * `@import "~@ac-ui/design-system/src/bridge/dropdown"`
  
Thereafter, you can pass in Bootstrap classnames via the `classList` prop, include them as part of `children` nodes, or apply your own custom styles.

MenuPopover content can be accessed using the classname `ac-menu-popover`.

Example:
```jsx
import { useState } from 'react';
import Button from '../Button';

const ExampleMenuPopover = () => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <Button
        classList="menu-popover-button"
        onClick={handleClick}
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        Open Popover
      </Button>
      <MenuPopover isOpen={isOpen} onClose={handleClose}>
        <div className="dropdown-item dropdown-menu-right ">
          <div className="justify-content-center">
            <p className="mb-0">John Appleseed</p>
            <small>jappleseed@avenuecode.com</small>
          </div>
        </div>
      </MenuPopover>
    </>
  )
}

<ExampleMenuPopover />
```
