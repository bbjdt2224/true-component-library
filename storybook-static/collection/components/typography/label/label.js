import { h } from "@stencil/core";
export class Label {
  constructor() {
    this.color = undefined;
    this.maxLines = undefined;
  }
  render() {
    return (h("true-text-base", { size: "xs", weight: 'medium', maxLines: this.maxLines, color: this.color }, h("slot", null)));
  }
  static get is() { return "true-label"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["label.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["label.css"]
    };
  }
  static get properties() {
    return {
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "TextColor",
          "resolved": "\"custom-brand-accent\" | \"neutral-100\" | \"primary\" | \"secondary\" | \"tertiary\" | \"true-primary-blue\" | \"true-primary-green\" | \"true-primary-red\"",
          "references": {
            "TextColor": {
              "location": "import",
              "path": "../text-base/text-base.interface",
              "id": "src/components/typography/text-base/text-base.interface.ts::TextColor"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Passthrough prop for the color of the label"
        },
        "attribute": "color",
        "reflect": true
      },
      "maxLines": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The maximum lines to display before truncating the label.\r\nDefault behavior shows all lines of label with no truncation."
        },
        "attribute": "max-lines",
        "reflect": true
      }
    };
  }
}
//# sourceMappingURL=label.js.map
