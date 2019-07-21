AlertModal component for Avenue Code.
This component uses the Avenue Code `Modal` component to generate a custom Alert Modal.
When using the AlertModal component, remember to apply the `aria-hidden` attribute to your `App` component.
It is important for screenreaders that other page content be hidden while the `Modal` is open.

There are 4 required props: `isOpen`, `onClose`, `title` and `description`. Other props are optional.

This component makes use of `Bootstrap modal` and `button` styles in addition to `ac-ui` base styles (which includes Bootstrap SCSS variables, functions, and mixins).
To apply styles, import `ac-ui` page styles and Bootstrap's modal classes:
  * `@import "~@ac-ui/design-system/src/page"`
  * `@import "~@ac-ui/design-system/src/bridge/modal"`
  * `@import "~@ac-ui/design-system/src/bridge/buttons"`
  
Thereafter, you can pass in Bootstrap classnames via the `classList` prop, include them as part of `children` nodes, or apply your own custom styles.

AlertModal content can be accessed using the classname `ac-modal--alert`.

```jsx
import { useState } from 'react';
import Button from '../Button';

const ExampleModal = () => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <Button onClick={handleOpen}>Open Alert</Button>
      <AlertModal
        isOpen={isOpen}
        onClose={handleClose}
        title="Example Alert"
        description="This is an alert!"
      />
    </>
  )
}

<ExampleModal />
```