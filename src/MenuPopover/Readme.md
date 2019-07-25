MenuPopover component for Avenue Code.
**Improve accessibility of this component by adding ARIA attributes (`aria-haspopup`, `aria-expanded`, etc) to the MenuPopover toggle.**

___
#### **How do I style this component?**
___
This component uses `Bootstrap dropdown` and `utility` classes in addition to `ac-ui` base styles (which includes Bootstrap SCSS variables, functions, and mixins).
To apply default styles, import Bootstrap classes:
  * `@import "~@ac-ui/design-system/src/bridge/utilities"`
  * `@import "~@ac-ui/design-system/src/bridge/dropdown"`
  
Thereafter, you can pass in Bootstrap classnames via the `classList` prop, include them as part of `children` nodes, or apply your own custom styles.

**Don't see the import for `ac-ui` base styles?**  
That's because they're already included when importing `bridge`, no need to duplicate import!

___
#### **How can I reference this component?**
___
This component can be accessed using the classname `ac-menu-popover` or displayname `MenuPopover`.

___
#### **How do I use this component?**
___
Below are some self-contained usage examples.

**Example:** Default
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
        <div className="text-white">
          <p>John Appleseed</p>
          <small>jappleseed@avenuecode.com</small>
        </div>
      </MenuPopover>
    </>
  )
}

<ExampleMenuPopover />
```

**Example:** Right aligned popover
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
      <MenuPopover isOpen={isOpen} onClose={handleClose} alignment="right">
        <div className="text-white">
          <p>John Appleseed</p>
          <small>jappleseed@avenuecode.com</small>
        </div>
      </MenuPopover>
    </>
  )
}

<ExampleMenuPopover />
```

**Example:** Use Boostrap classes to custom style popover content
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
