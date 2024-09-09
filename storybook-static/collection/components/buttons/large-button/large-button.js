import { h } from "@stencil/core";
import { trySubmitForm } from "../button-common";
/**
 * @slot - Content is placed in the default slot.
 */
export class LargeButton {
  constructor() {
    this.icon = undefined;
    this.type = 'primary';
    this.submit = false;
    this.disabled = false;
    this.busy = false;
    this.textAlign = 'center';
  }
  hostClick(event) {
    if (this.disabled) {
      event.preventDefault();
      return;
    }
    if (!this.busy) {
      trySubmitForm(this.submit, this.element);
    }
  }
  render() {
    return (h("true-button", { textSize: 'm', submit: this.submit, disabled: this.disabled, type: this.type, textAlign: this.textAlign }, h("slot", null), h("div", { class: 'icon-bubble', slot: 'end' }, this.busy ?
      h("true-loading-spinner", { size: 'l' }) :
      h("true-icon", { name: this.icon }))));
  }
  static get is() { return "true-large-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["large-button.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["large-button.css"]
    };
  }
  static get properties() {
    return {
      "icon": {
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
          "text": "The icon to display on the right side of the button"
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
          "text": "The importance of action the button is intended for (primary, secondary)"
        },
        "attribute": "type",
        "reflect": true,
        "defaultValue": "'primary'"
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
      "busy": {
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
          "text": "`true` if the button is in a busy state."
        },
        "attribute": "busy",
        "reflect": false,
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
          "text": "Whether to align the text left or center. Center is default"
        },
        "attribute": "text-align",
        "reflect": true,
        "defaultValue": "'center'"
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
//# sourceMappingURL=large-button.js.map
