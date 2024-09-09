import { h } from "@stencil/core";
export class Subtext {
  constructor() {
    this.weight = 'regular';
    this.color = undefined;
    this.maxLines = undefined;
  }
  render() {
    return (h("true-text-base", { size: "s", weight: this.weight, maxLines: this.maxLines, color: this.color }, h("slot", null)));
  }
  static get is() { return "true-subtext"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["subtext.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["subtext.css"]
    };
  }
  static get properties() {
    return {
      "weight": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "Extract<TextWeight, 'regular' | 'medium' | 'bold'>",
          "resolved": "\"bold\" | \"medium\" | \"regular\"",
          "references": {
            "Extract": {
              "location": "global",
              "id": "global::Extract"
            },
            "TextWeight": {
              "location": "import",
              "path": "../text-base/text-base.interface",
              "id": "src/components/typography/text-base/text-base.interface.ts::TextWeight"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Passthrough prop for weight of the text"
        },
        "attribute": "weight",
        "reflect": true,
        "defaultValue": "'regular'"
      },
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
          "text": "Passthrough prop for the color of the text"
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
          "text": "The maximum lines to display before truncating the text.\r\nDefault behavior shows all lines of text with no truncation."
        },
        "attribute": "max-lines",
        "reflect": true
      }
    };
  }
}
//# sourceMappingURL=subtext.js.map
