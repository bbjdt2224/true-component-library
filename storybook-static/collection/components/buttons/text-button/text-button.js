import { h, Host } from "@stencil/core";
import { removeButtonFocus } from "../button-common";
/**
 * @virtualProp {"light" | "dark"} theme - The theme determines which platform styles to use.
 *
 * @slot - Content is placed in the default slot.
 */
export class TextButton {
  constructor() {
    this.disabled = false;
    this.type = 'primary';
    this.size = 's';
    this.weight = 'medium';
    this.location = undefined;
    this.newTab = undefined;
    this.focusable = true;
  }
  componentDidLoad() {
    // Removes issue where router link adds tab index and steals focus from the button
    this.host.removeAttribute('tabindex');
  }
  renderText() {
    const textBase = (h("true-text-base", { class: 'content', weight: this.weight, size: this.size }, h("slot", null)));
    if (this.location) {
      return (h("a", { href: this.location, target: this.newTab ? 'blank' : '' }, textBase));
    }
    else {
      return textBase;
    }
  }
  render() {
    return (h(Host, { "aria-disabled": this.disabled ? 'true' : null, class: {
        'ion-activatable': true
      } }, h("button", { disabled: this.disabled, onClick: e => removeButtonFocus(e), type: 'button', tabindex: this.focusable ? 0 : -1 }, h("slot", { name: 'start' }), this.renderText(), h("slot", { name: 'end' }))));
  }
  static get is() { return "true-text-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["text-button.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["text-button.css"]
    };
  }
  static get properties() {
    return {
      "disabled": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "`true` if the button is disabled and cannot be interacted with."
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      },
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ActionType",
          "resolved": "\"danger\" | \"primary\" | \"secondary\"",
          "references": {
            "ActionType": {
              "location": "import",
              "path": "../../../interface",
              "id": "src/interface.d.ts::ActionType"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The color display of the button."
        },
        "attribute": "type",
        "reflect": true,
        "defaultValue": "'primary'"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "TextButtonSizes",
          "resolved": "\"l\" | \"m\" | \"s\" | \"xl\"",
          "references": {
            "TextButtonSizes": {
              "location": "import",
              "path": "./text-button.interface",
              "id": "src/components/buttons/text-button/text-button.interface.ts::TextButtonSizes"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The size of the text button, defaults small."
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "'s'"
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
              "path": "../../typography/text-base/text-base.interface",
              "id": "src/components/typography/text-base/text-base.interface.ts::TextWeight"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The weight of the text in the button."
        },
        "attribute": "weight",
        "reflect": false,
        "defaultValue": "'medium'"
      },
      "location": {
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
          "text": "A link href. If provided the button will render as a link using an a tag"
        },
        "attribute": "location",
        "reflect": false
      },
      "newTab": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If a location is provided, add this attribute to have the link open in a new tab"
        },
        "attribute": "new-tab",
        "reflect": true
      },
      "focusable": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If true allow element to be focusable"
        },
        "attribute": "focusable",
        "reflect": false,
        "defaultValue": "true"
      }
    };
  }
  static get elementRef() { return "host"; }
}
//# sourceMappingURL=text-button.js.map
