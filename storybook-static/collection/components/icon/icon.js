import { Build, h, Host } from "@stencil/core";
import { getSvgContent } from "./request";
import { getName, getUrl } from "./utils";
export class Icon {
  constructor() {
    this.svgContent = undefined;
    this.isVisible = false;
    this.defaultLabel = undefined;
    this.name = undefined;
    this.size = undefined;
    this.color = undefined;
    this.lazy = false;
  }
  connectedCallback() {
    // purposely do not return the promise here because loading
    // the svg file should not hold up loading the app
    // only load the svg if it's visible
    this.waitUntilVisible(this.el, '50px', () => {
      this.isVisible = true;
      this.loadIcon();
    });
  }
  disconnectedCallback() {
    if (this.io) {
      this.io.disconnect();
      this.io = undefined;
    }
  }
  waitUntilVisible(el, rootMargin, cb) {
    if (Build.isBrowser && this.lazy && typeof window !== 'undefined' && window.IntersectionObserver) {
      const io = this.io = new window.IntersectionObserver((data) => {
        if (data[0].isIntersecting) {
          io.disconnect();
          this.io = undefined;
          cb();
        }
      }, { rootMargin });
      io.observe(el);
    }
    else {
      // browser doesn't support IntersectionObserver
      // so just fallback to always show it
      cb();
    }
  }
  loadIcon() {
    if (Build.isBrowser && this.isVisible) {
      const url = getUrl(this);
      if (url) {
        getSvgContent(url)
          .then(svgContent => this.svgContent = svgContent);
      }
    }
    if (!this.defaultLabel) {
      const label = getName(this.name);
      // user did not provide a label
      // come up with the label based on the icon name
      if (label) {
        this.defaultLabel = label
          .replace('ios-', '')
          .replace('md-', '')
          .replace(/\-/g, ' ');
      }
    }
  }
  render() {
    const style = {};
    if (this.color) {
      style['--color'] = `var(--color-${this.color})`;
    }
    return (h(Host, { role: 'img', style: style }, ((Build.isBrowser && this.svgContent)
      ? h("div", { class: 'icon-inner', innerHTML: this.svgContent })
      : h("div", { class: 'icon-inner' }))));
  }
  static get is() { return "true-icon"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["icon.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["icon.css"]
    };
  }
  static get assetsDirs() { return ["icons"]; }
  static get properties() {
    return {
      "defaultLabel": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Specifies the label to use for accessibility. Defaults to the icon name."
        },
        "attribute": "default-label",
        "reflect": true
      },
      "name": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Specifies which icon to use from the built-in set of icons."
        },
        "attribute": "name",
        "reflect": true
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "IconSizes",
          "resolved": "\"l\" | \"m\" | \"s\" | \"xl\" | \"xs\" | \"xxs\"",
          "references": {
            "IconSizes": {
              "location": "import",
              "path": "./icon.interface",
              "id": "src/components/icon/icon.interface.ts::IconSizes"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The size of the icon: xxs through xl"
        },
        "attribute": "size",
        "reflect": true
      },
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "LabelColor",
          "resolved": "\"brand-primary-blue\" | \"brand-primary-green\" | \"brand-primary-red\" | \"custom-brand-accent\" | \"destructive\" | \"neutral-100\" | \"primary\" | \"secondary\" | \"tertiary\"",
          "references": {
            "LabelColor": {
              "location": "import",
              "path": "../../interface",
              "id": "src/interface.d.ts::LabelColor"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "color",
        "reflect": false
      },
      "lazy": {
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
          "text": "If enabled, ion-icon will be loaded lazily when it's visible in the viewport.\nDefault, `false`."
        },
        "attribute": "lazy",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "svgContent": {},
      "isVisible": {}
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "name",
        "methodName": "loadIcon"
      }];
  }
}
//# sourceMappingURL=icon.js.map
