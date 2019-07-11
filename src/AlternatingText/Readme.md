Alternating Text component for Avenue Code.
Splits text string and applies alternating bold and light font-weight styles. By default, text string is split after the first word and returned as a `<h1>` element.

Example: Default
```jsx
<AlternatingText text="里îßPseudo language is preferred in tests里îß"/>
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
