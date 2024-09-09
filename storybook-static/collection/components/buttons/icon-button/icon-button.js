import { h, Host } from "@stencil/core";
import { removeButtonFocus } from "../button-common";
export class IconButton {
  constructor() {
    this.icon = undefined;
    this.type = 'secondary';
    this.disabled = false;
    this.toggled = false;
    this.tabindex = 0;
    this.size = 'm';
    this.shadow = false;
    this.badge = undefined;
    this.hasOverlay = undefined;
    this.flip = undefined;
  }
  renderBadge() {
    if (this.badge) {
      return (h("div", { class: "badge" }, h("true-subtext", { color: "neutral-100" }, this.badge)));
    }
  }
  render() {
    return (h(Host, { "aria-disabled": this.disabled ? 'true' : null, class: {
        'ion-activatable': true,
      } }, this.hasOverlay ? h("div", { class: "overlay" }) : null, h("button", { tabindex: this.tabindex, disabled: this.disabled, onClick: e => removeButtonFocus(e) }, h("div", { class: "background" }), h("true-icon", { name: this.icon })), this.renderBadge()));
  }
  static get is() { return "true-icon-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["icon-button.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["icon-button.css"]
    };
  }
  static get properties() {
    return {
      "icon": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The icon to display inside the button"
        },
        "attribute": "icon",
        "reflect": false
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
        "defaultValue": "'secondary'"
      },
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
      "toggled": {
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
          "text": "`true` if button is in toggled state"
        },
        "attribute": "toggled",
        "reflect": true,
        "defaultValue": "false"
      },
      "tabindex": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The keyboard focus order"
        },
        "attribute": "tabindex",
        "reflect": false,
        "defaultValue": "0"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "IconButtonSize",
          "resolved": "\"l\" | \"m\" | \"s\" | \"xl\" | \"xs\"",
          "references": {
            "IconButtonSize": {
              "location": "import",
              "path": "./icon-button.interface",
              "id": "src/components/buttons/icon-button/icon-button.interface.ts::IconButtonSize"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Size of the icon"
        },
        "attribute": "size",
        "reflect": true,
        "defaultValue": "'m'"
      },
      "shadow": {
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
          "text": "`true` if a box shadow should be shown (only suports primary type)"
        },
        "attribute": "shadow",
        "reflect": true,
        "defaultValue": "false"
      },
      "badge": {
        "type": "number",
        "mutable": true,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Number shown in a badge in the corner of the button"
        },
        "attribute": "badge",
        "reflect": false
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
          "text": "`true` if the overlay should be rendered."
        },
        "attribute": "has-overlay",
        "reflect": true
      },
      "flip": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'h' | 'v'",
          "resolved": "\"h\" | \"v\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Flips the icon horizontally (h) of vertically (v) in css"
        },
        "attribute": "flip",
        "reflect": true
      }
    };
  }
}
//# sourceMappingURL=icon-button.js.map
