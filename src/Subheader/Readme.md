Subheader component for Avenue Code.
Should sit right below the black header

The name to the left will correspond to the current page, the right hand side of the subheader
can be filled with useful links or other information

This component makes use of `ac-ui` base styles (which includes Bootstrap SCSS variables, functions, and mixins).
To apply styles, import `ac-ui` page and base styles:
  * `@import "~@ac-ui/design-system/src/page"`
  * `@import "~@ac-ui/design-system/src/base"`
  
Thereafter, you can pass in Bootstrap classnames via the `classList` prop or apply your own custom styles.

Subheader content can be accessed using the classname `ac-subheader`.

```jsx
<div className="bg-info p-5">
	<Subheader title={<span>Subheading text</span>} content={'Optional content'} />
</div>
```
