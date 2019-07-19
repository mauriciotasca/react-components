ConfirmModal component for Avenue Code.
This component uses the Avenue Code `Modal` component to generate a custom Confirm Modal.
When using the ConfirmModal component, remember to apply the `aria-hidden` attribute to your `App` component.
It is important for screenreaders that other page content be hidden while the `Modal` is open.

There are 6 required props: `isOpen`, `onClose`, `onConfirm`, `title`, `subtitle` and `disclaimer`. Other props are optional.

This component makes use of `Bootstrap modal` styles in addition to `ac-ui` base styles (which includes Bootstrap SCSS variables, functions, and mixins).
To apply styles, import `ac-ui` page styles and Bootstrap's modal classes:
  * `@import "~@ac-ui/design-system/src/page"`
  * `@import "~@ac-ui/design-system/src/bridge/modal"`
  
Thereafter, you can pass in Bootstrap classnames via the `classList` prop, include them as part of `children` nodes, or apply your own custom styles.

ConfirmModal content can be accessed using the classname `ac-modal--confirm`.

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
      <Button onClick={handleOpen}>Open Confirm Modal</Button>
      <ConfirmModal
        isOpen={isOpen}
        onClose={handleClose}
        onConfirm={() => null}
        title="Example Confirm"
        subtitle="Are you sure?"
        disclaimer="This action cannot be undone."
      />
    </>
  )
}

<ExampleModal />
```