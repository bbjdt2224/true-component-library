import { h, Host } from "@stencil/core";
import { removeButtonFocus, trySubmitForm } from "../button-common";
/**
 * @virtualProp {"light" | "dark"} theme - The theme determines which platform styles to use.
 *
 * @slot - Content is placed in the default slot.
 */
export class Button {
  constructor() {
    this.type = 'primary';
    this.textSize = 's';
    this.submit = false;
    this.disabled = false;
    this.textAlign = 'center';
    this.hasOverlay = undefined;
  }
  hostClick(event) {
    if (this.disabled) {
      event.preventDefault();
      return;
    }
    trySubmitForm(this.submit, this.element);
  }
  render() {
    return (h(Host, { style: {
        '--text-align': this.textAlign
      }, "aria-disabled": this.disabled ? 'true' : null }, this.hasOverlay ? h("div", { class: 'overlay' }) : null, h("button", { disabled: this.disabled, onClick: e => removeButtonFocus(e), type: this.submit === true ? 'submit' : 'button' }, h("true-text-base", { size: this.textSize, weight: 'medium' }, h("slot", null)), h("slot", { name: 'end' }))));
  }
  static get is() { return "true-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["button.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["button.css"]
    };
  }
  static get properties() {
    return {
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
          "text": "The intended action of the button (primary, secondary, destructive)"
        },
        "attribute": "type",
        "reflect": true,
        "defaultValue": "'primary'"
      },
      "textSize": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ButtonTextSize",
          "resolved": "\"m\" | \"s\"",
          "references": {
            "ButtonTextSize": {
              "location": "import",
              "path": "./button.interface",
              "id": "src/components/buttons/button/button.interface.ts::ButtonTextSize"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "the size of the text to use in the button"
        },
        "attribute": "text-size",
        "reflect": true,
        "defaultValue": "'s'"
      },
      "submit": {
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
          "text": "Whether or not to render the button as a submit button"
        },
        "attribute": "submit",
        "reflect": false,
        "defaultValue": "false"
      },
      "disabled": {
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
          "text": "`true` if the button is disabled and cannot be interacted with"
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      },
      "textAlign": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'center' | 'left'",
          "resolved": "\"center\" | \"left\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "How the button text should be aligned"
        },
        "attribute": "text-align",
        "reflect": true,
        "defaultValue": "'center'"
      },
      "hasOverlay": {
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
          "text": "`true` if the overlay should be rendered over the button"
        },
        "attribute": "has-overlay",
        "reflect": true
      }
    };
  }
  static get elementRef() { return "element"; }
  static get listeners() {
    return [{
        "name": "click",
        "method": "hostClick",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
//# sourceMappingURL=button.js.map
