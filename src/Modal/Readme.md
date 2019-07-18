Modal component for Avenue Code.
This component is a custom wrapper around `react-modal` with preset configurations.
When using the Modal component, remember to apply the `aria-hidden` attribute to your `App` component.
It is important for screenreaders that other page content be hidden while the `Modal` is open.

There are 3 required props: `isOpen`, `onClose`, and `ariaAttributes`. Other props are optional.
For a complete list of available props, refer to the `react-modal` [documentation](http://reactcommunity.org/react-modal/#usage).

This component has access to `Bootstrap modal` styles in addition to `AC design-system` base styles (which includes `Bootstrap SCSS variables, functions, and mixins`).
To apply styles, simply pass in `Bootstrap` classnames via the `classList` prop or include them as part of `children` nodes.
The root of this component can be accessed using the classname `ac-modal`.

```jsx
import { useState } from 'react';
import Button from '../Button';

const ExampleModal = () => {
  const classes = ['custom', 'custom-modal'];
  const ariaAttributes = {
    labelledby: 'heading',
    describedby: 'description',
  }
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        classList={classes}
        ariaAttributes={ariaAttributes}
      >
        <div className="modal-content">
          <h1 id="heading">Example Modal</h1>
          <p id="description">This is the main content.</p>
        </div>
      </Modal>
    </>
  )
}

<ExampleModal />
```