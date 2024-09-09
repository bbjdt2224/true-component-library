# true-icon



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                                     | Type                                                                                                                                                                        | Default     |
| -------------- | --------------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `color`        | `color`         |                                                                                                 | `"brand-primary-blue" \| "brand-primary-green" \| "brand-primary-red" \| "custom-brand-accent" \| "destructive" \| "neutral-100" \| "primary" \| "secondary" \| "tertiary"` | `undefined` |
| `defaultLabel` | `default-label` | Specifies the label to use for accessibility. Defaults to the icon name.                        | `string`                                                                                                                                                                    | `undefined` |
| `lazy`         | `lazy`          | If enabled, ion-icon will be loaded lazily when it's visible in the viewport. Default, `false`. | `boolean`                                                                                                                                                                   | `false`     |
| `name`         | `name`          | Specifies which icon to use from the built-in set of icons.                                     | `string`                                                                                                                                                                    | `undefined` |
| `size`         | `size`          | The size of the icon: xxs through xl                                                            | `"l" \| "m" \| "s" \| "xl" \| "xs" \| "xxs"`                                                                                                                                | `undefined` |


## Dependencies

### Used by

 - [true-icon-button](../buttons/icon-button)
 - [true-icon-preview](icon-preview)
 - [true-large-button](../buttons/large-button)

### Graph
```mermaid
graph TD;
  true-icon-button --> true-icon
  true-icon-preview --> true-icon
  true-large-button --> true-icon
  style true-icon fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
