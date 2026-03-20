# jsx-a11y-x/no-access-key

📝 Enforce that the `accessKey` prop is not used on any element to avoid complications with keyboard commands used by a screen reader.

💼 This rule is enabled in the following configs: ☑️ `recommended`, 🔒 `strict`.

<!-- end auto-generated rule header -->

Enforce no accessKey prop on element. Access keys are HTML attributes that allow web developers to assign keyboard shortcuts to elements. Inconsistencies between keyboard shortcuts and keyboard commands used by screen readers and keyboard-only users create accessibility complications so to avoid complications, access keys should not be used.

### References

1. [WebAIM](https://webaim.org/techniques/keyboard/accesskey#spec)

## Rule details

This rule takes no arguments.

### Succeed

```jsx
<div />
```

### Fail

```jsx
<div accessKey="h" />
```

## Accessibility guidelines

General best practice (reference resources)

### Resources

- [WebAIM, Keyboard Accessibility: Accesskey](https://webaim.org/techniques/keyboard/accesskey#spec)
