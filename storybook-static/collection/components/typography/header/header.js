import { h } from "@stencil/core";
export class Text {
  constructor() {
    this.sizeMap = {
      h1: 'xxxl',
      h2: 'xxl',
      h3: 'xl',
      h4: 'l',
    };
    this.size = 'h1';
    this.weight = 'medium';
    this.color = undefined;
    this.maxLines = undefined;
  }
  render() {
    return (h("true-text-base", { size: this.sizeMap[this.size], weight: this.weight, maxLines: this.maxLines, color: this.color }, h("slot", null)));
  }
  static get is() { return "true-header"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["header.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["header.css"]
    };
  }
  static get properties() {
    return {
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "HeaderSize",
          "resolved": "\"h1\" | \"h2\" | \"h3\" | \"h4\"",
          "references": {
            "HeaderSize": {
              "location": "import",
              "path": "./header.interface",
              "id": "src/components/typography/header/header.interface.ts::HeaderSize"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The size of the header"
        },
        "attribute": "size",
        "reflect": true,
        "defaultValue": "'h1'"
      },
      "weight": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "TextWeight",
          "resolved": "\"bold\" | \"extra-bold\" | \"medium\" | \"regular\"",
          "references": {
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
          "text": "Passthrough prop for weight of the header"
        },
        "attribute": "weight",
        "reflect": true,
        "defaultValue": "'medium'"
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
          "text": "Passthrough prop for the color of the header"
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
          "text": "The maximum lines to display before truncating the header.\r\nDefault behavior shows all lines of text with no truncation."
        },
        "attribute": "max-lines",
        "reflect": true
      }
    };
  }
}
//# sourceMappingURL=header.js.map
