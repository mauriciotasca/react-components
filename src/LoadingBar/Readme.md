LoadingBar component for Avenue Code.
The loading animation is activated when `isLoading` is set to `true`.

___
#### **How do I style this component?**
___
This component uses `ac-ui` base styles (which includes Bootstrap SCSS variables, functions, and mixins).
To apply default styles, import `ac-ui` base style:
```scss
@import "~@ac-ui/design-system/src/base";
```

Thereafter, you can pass in Bootstrap classnames via the `classList` prop or apply your own custom styles.

___
#### **How can I reference this component?**
___
This component can be accessed using the classname `ac-loading-bar` or displayname `LoadingBar`.

___
#### **How do I use this component?**
___
**Example:** Default
```jsx
import { useState } from 'react';
import Button from '../Button';

const Loader = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Button classList={['toggle-loader btn btn-primary mb-5']} onClick={() => setLoading(!loading)}>
        Toggle Loader
      </Button>
      <LoadingBar isLoading={loading} />
    </div>
  );
}

<Loader />
```
