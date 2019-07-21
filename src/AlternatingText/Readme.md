AlternatingText component for Avenue Code.
Splits text string and applies alternating bold and light font-weight styles. By default, text string is split after the first word and returned as a `<h1>` element.

This component makes use of `ac-ui` base styles (which includes Bootstrap SCSS variables, functions, and mixins).
To apply styles, import `ac-ui` page and base styles:
  * `@import "~@ac-ui/design-system/src/page"`
  * `@import "~@ac-ui/design-system/src/base"`
  
Thereafter, you can pass in Bootstrap classnames via the `classList` prop or apply your own custom styles.

AlternatingText content can be accessed using the classname `ac-alternating-text`.

Example: Default
```jsx
<AlternatingText text="里îßPseudo language is preferred in tests里îß"/>
```

Example: Custom separator
```jsx
<AlternatingText text="里îßPseudo language is preferred in tests里îß" separator={' --> '}/>
```

Example: Reversed
```jsx
<AlternatingText text="里îßPseudo language is preferred in tests里îß" isReversed={true}/>
```

Example: Custom classes
```jsx
<AlternatingText text="里îßPseudo language is preferred in tests里îß" classList={['custom', 'custom-text']}/>
```

Example: Custom split location
```jsx
<AlternatingText text="里îßPseudo language is preferred in tests里îß" splitAt={3}/>
```

Example: Custom return type
```jsx
<AlternatingText text="里îßPseudo language is preferred in tests里îß" As={'h3'}/>
```
