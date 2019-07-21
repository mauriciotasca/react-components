HeaderTitle component for Avenue Code.

This component makes use of `ac-ui` base styles (which includes Bootstrap SCSS variables, functions, and mixins).
To apply styles, import `ac-ui` page and base styles:
  * `@import "~@ac-ui/design-system/src/page"`
  * `@import "~@ac-ui/design-system/src/base"`
  
Thereafter, you can pass in Bootstrap classnames via the `classList` prop or apply your own custom styles.

HeaderTitle content can be accessed using the classname `ac-header-title`.

Example:
```jsx
<HeaderTitle text="Header Title" />
```
