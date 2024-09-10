# true-text



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description                                                                                                           | Type                                                                                                                                                    | Default     |
| ---------- | ----------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `color`    | `color`     | Passthrough prop for the color of the text                                                                            | `"custom-brand-accent" \| "neutral-100" \| "primary" \| "secondary" \| "tertiary" \| "true-primary-blue" \| "true-primary-green" \| "true-primary-red"` | `undefined` |
| `maxLines` | `max-lines` | The maximum lines to display before truncating the text. Default behavior shows all lines of text with no truncation. | `string`                                                                                                                                                | `undefined` |
| `weight`   | `weight`    | Passthrough prop for weight of the text                                                                               | `"medium" \| "regular"`                                                                                                                                 | `'regular'` |


## Dependencies

### Used by

 - [true-card](../../layout/card)
 - [true-icon-preview](../../icon/icon-preview)

### Depends on

- [true-text-base](../text-base)

### Graph
```mermaid
graph TD;
  true-text --> true-text-base
  true-card --> true-text
  true-icon-preview --> true-text
  style true-text fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
