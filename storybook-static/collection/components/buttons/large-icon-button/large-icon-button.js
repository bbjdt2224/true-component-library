import { h, Host } from "@stencil/core";
export class LargeIconButton {
  constructor() {
    this.icon = undefined;
    this.type = 'secondary';
    this.disabled = false;
  }
  render() {
    return (h(Host, { "aria-disabled": this.disabled ? 'true' : null }, h("true-icon-button", { size: 'xl', type: this.type, icon: this.icon, disabled: this.disabled }), h("true-text-base", { weight: 'medium', size: 's' }, h("slot", null))));
  }
  static get is() { return "true-large-icon-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["large-icon-button.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["large-icon-button.css"]
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
      }
    };
  }
}
//# sourceMappingURL=large-icon-button.js.map
