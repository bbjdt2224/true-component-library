import { h, Host } from "@stencil/core";
export class TextBase {
  constructor() {
    this.size = 'm';
    this.color = undefined;
    this.weight = undefined;
    this.maxLines = undefined;
    this.loaded = undefined;
  }
  componentDidLoad() {
    // Set loaded to true so colors are correct
    requestAnimationFrame(() => {
      this.loaded = true;
    });
  }
  render() {
    const style = {};
    if (this.maxLines != null) {
      style['--max-lines'] = this.maxLines;
    }
    if (this.color) {
      style['--text-color'] = `var(--color-${this.color})`;
    }
    return (h(Host, { style: style, class: this.loaded ? 'loaded' : '' }, h("span", null, h("slot", null))));
  }
  static get is() { return "true-text-base"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["text-base.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["text-base.css"]
    };
  }
  static get properties() {
    return {
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "TextSize",
          "resolved": "\"l\" | \"m\" | \"s\" | \"xl\" | \"xs\" | \"xxl\" | \"xxs\" | \"xxxl\"",
          "references": {
            "TextSize": {
              "location": "import",
              "path": "./text-base.interface",
              "id": "src/components/typography/text-base/text-base.interface.ts::TextSize"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Size of the text"
        },
        "attribute": "size",
        "reflect": true,
        "defaultValue": "'m'"
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
              "path": "./text-base.interface",
              "id": "src/components/typography/text-base/text-base.interface.ts::TextColor"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Primary color of the text\r\nUses predefined css variables"
        },
        "attribute": "color",
        "reflect": true
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
              "path": "./text-base.interface",
              "id": "src/components/typography/text-base/text-base.interface.ts::TextWeight"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Weight of the text"
        },
        "attribute": "weight",
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
          "text": "Maximum lines to display before truncating the text\r\nIf no value is given all lines will show"
        },
        "attribute": "max-lines",
        "reflect": true
      }
    };
  }
  static get states() {
    return {
      "loaded": {}
    };
  }
}
//# sourceMappingURL=text-base.js.map
