# true-subtext



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description                                                                                                           | Type                                                                                                                                                    | Default     |
| ---------- | ----------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `color`    | `color`     | Passthrough prop for the color of the text                                                                            | `"custom-brand-accent" \| "neutral-100" \| "primary" \| "secondary" \| "tertiary" \| "true-primary-blue" \| "true-primary-green" \| "true-primary-red"` | `undefined` |
| `maxLines` | `max-lines` | The maximum lines to display before truncating the text. Default behavior shows all lines of text with no truncation. | `string`                                                                                                                                                | `undefined` |
| `weight`   | `weight`    | Passthrough prop for weight of the text                                                                               | `"bold" \| "medium" \| "regular"`                                                                                                                       | `'regular'` |


## Dependencies

### Used by

 - [true-icon-button](../../buttons/icon-button)
 - [true-icon-preview](../../icon/icon-preview)

### Depends on

- [true-text-base](../text-base)

### Graph
```mermaid
graph TD;
  true-subtext --> true-text-base
  true-icon-button --> true-subtext
  true-icon-preview --> true-subtext
  style true-subtext fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
