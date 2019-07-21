This component makes use of `ac-ui` base styles (which includes Bootstrap SCSS variables, functions, and mixins).
To apply styles, import `ac-ui` page and base styles:
  * `@import "~@ac-ui/design-system/src/page"`
  * `@import "~@ac-ui/design-system/src/base"`
  
Thereafter, you can pass in Bootstrap classnames via the `classList` prop or apply your own custom styles.

CustomSelect content can be accessed using the classname `ac-custom-select`.

```jsx
/*
TODO:
- Selected value should explicitly reference an item value
- Selected option should represent itself in the DOM as selected
- Forms require a label, or an aria-label for a11y
*/

state = {
  activityId: 1
};
<div className="w-100 bg-info p-4">
  <div className="w-25">
    <CustomSelect
      items={[{ name: 'Client', id: 1 }, { name: 'Task', id: 2 }]}
      selectedValue={state.activityId}
      idKey="id"
      valueKey="name"
      name="activityId"
      noItemsText={'No items Found'}
      dummyOptionText={'Select an Option'}
      onDropDownItemChange={(e)=>{setState({ activityId: e.target.value });}}
      onDropDownItemBlur={()=>{}}
    />
  </div>
</div>
```
