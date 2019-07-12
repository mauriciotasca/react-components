LoadingBar component for Avenue Code.
Loading bar is activated when `isLoading` is set to `true`.

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
