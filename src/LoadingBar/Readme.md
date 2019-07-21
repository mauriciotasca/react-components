LoadingBar component for Avenue Code.
Loading bar is activated when `isLoading` is set to `true`.

This component makes use of `ac-ui` base styles (which includes Bootstrap SCSS variables, functions, and mixins).
To apply styles, import `ac-ui` page and base styles:
  * `@import "~@ac-ui/design-system/src/page"`
  * `@import "~@ac-ui/design-system/src/base"`
  
Thereafter, you can pass in Bootstrap classnames via the `classList` prop or apply your own custom styles.

LoadingBar content can be accessed using the classname `ac-loading-bar`.

Example:
```jsx
import { useState } from 'react';
import Button from '../Button';

const Loader = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Button classList={['toggle-loader']} onClick={() => setLoading(!loading)}>
        Toggle Loader
      </Button>
      <LoadingBar isLoading={loading} />
    </div>
  );
}

<Loader />
```
