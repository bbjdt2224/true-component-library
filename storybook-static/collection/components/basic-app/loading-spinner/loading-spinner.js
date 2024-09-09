import { h, Host } from "@stencil/core";
export class LoadingSpinner {
  constructor() {
    // Sizes are not yet defined. Matching current for the component
    this.sizeMap = {
      s: 14,
      m: 16,
      l: 18,
      xl: 50
    };
    this.strokeSizeMap = {
      s: 2,
      m: 2,
      l: 2,
      xl: 4
    };
    this.size = 'm';
    this.loaderColor = 'custom-brand-accent';
    this.pathColor = 'tertiary';
  }
  // calculate radius of svg
  get radius() {
    return (this.sizeNumber / 2) - (this.strokeWidth / 2);
  }
  // calculate circumference of circle
  get circumference() {
    return (2 * Math.PI * this.radius);
  }
  get sizeNumber() {
    return this.sizeMap[this.size];
  }
  get strokeWidth() {
    return this.strokeSizeMap[this.size];
  }
  render() {
    // set host style
    const style = {
      height: `${this.size}px`,
      width: `${this.size}px`,
      '--positive-circumference': `${(this.circumference - 1)}`,
      '--negative-circumference': `${(-this.circumference + 1)}`
    };
    if (this.loaderColor) {
      style['--stroke-color'] = `var(--color-${this.loaderColor})`;
    }
    if (this.pathColor) {
      style['--path-color'] = `var(--bg-color-${this.pathColor})`;
    }
    return (h(Host, { style: style }, h("svg", { width: this.sizeNumber, height: this.sizeNumber, viewBox: `0 0 ${this.sizeNumber} ${this.sizeNumber}` }, h("circle", { class: 'background', cx: this.sizeNumber / 2, cy: this.sizeNumber / 2, r: this.radius, fill: 'none', "stroke-width": this.strokeWidth }), h("circle", { class: 'loader', cx: this.sizeNumber / 2, cy: this.sizeNumber / 2, r: this.radius, fill: 'none', "stroke-width": this.strokeWidth, "stroke-dasharray": this.circumference, "stroke-linecap": 'round' }))));
  }
  static get is() { return "true-loading-spinner"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["loading-spinner.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["loading-spinner.css"]
    };
  }
  static get properties() {
    return {
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "LoadingSpinnerSizes",
          "resolved": "\"l\" | \"m\" | \"s\" | \"xl\"",
          "references": {
            "LoadingSpinnerSizes": {
              "location": "import",
              "path": "./loading-spinner.interface",
              "id": "src/components/basic-app/loading-spinner/loading-spinner.interface.ts::LoadingSpinnerSizes"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "size",
        "reflect": true,
        "defaultValue": "'m'"
      },
      "loaderColor": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "LabelColor",
          "resolved": "\"brand-primary-blue\" | \"brand-primary-green\" | \"brand-primary-red\" | \"custom-brand-accent\" | \"destructive\" | \"neutral-100\" | \"primary\" | \"secondary\" | \"tertiary\"",
          "references": {
            "LabelColor": {
              "location": "import",
              "path": "../../../interface",
              "id": "src/interface.d.ts::LabelColor"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Color of the loader line"
        },
        "attribute": "loader-color",
        "reflect": false,
        "defaultValue": "'custom-brand-accent'"
      },
      "pathColor": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BackgroundColor",
          "resolved": "\"primary\" | \"secondary\" | \"tertiary\"",
          "references": {
            "BackgroundColor": {
              "location": "import",
              "path": "../../../interface",
              "id": "src/interface.d.ts::BackgroundColor"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Color of the track the loader follows"
        },
        "attribute": "path-color",
        "reflect": false,
        "defaultValue": "'tertiary'"
      }
    };
  }
}
//# sourceMappingURL=loading-spinner.js.map
