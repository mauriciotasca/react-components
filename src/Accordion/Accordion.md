Accordion component for Avenue Code.

---

#### **How can I reference this component?**

---

This component can be accessed using the classname `ac-accordion` or displayname `Accordion`.

---

#### **How do I use this component?**

---

Below are some self-contained usage examples.

**Example:** Default

```jsx
const ExampleAccordion = () => {
  return (
    <>
      <Accordion
        title="Accordion Title Example"
        content={
          <div>
            <p>Optional Content</p>
            <ul>
              <li>Content Example 1</li>
              <li>Content Example 2</li>
              <li>Content Example 3</li>
              <li>Content Example 4</li>
              <li>Content Example 5</li>
            </ul>
          </div>
        }
        isOpen={false}
      />
    </>
  );
};

<ExampleAccordion />;
```
