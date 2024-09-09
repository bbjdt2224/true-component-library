"use strict";(self.webpackChunktrue_components=self.webpackChunktrue_components||[]).push([[4011],{"./dist/esm/true-loading-spinner.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{true_loading_spinner:()=>LoadingSpinner});var _index_d781eb2f_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-d781eb2f.js");const LoadingSpinner=class{constructor(hostRef){(0,_index_d781eb2f_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.sizeMap={s:14,m:16,l:18,xl:50},this.strokeSizeMap={s:2,m:2,l:2,xl:4},this.size="m",this.loaderColor="custom-brand-accent",this.pathColor="tertiary"}get radius(){return this.sizeNumber/2-this.strokeWidth/2}get circumference(){return 2*Math.PI*this.radius}get sizeNumber(){return this.sizeMap[this.size]}get strokeWidth(){return this.strokeSizeMap[this.size]}render(){const style={height:`${this.size}px`,width:`${this.size}px`,"--positive-circumference":""+(this.circumference-1),"--negative-circumference":""+(1-this.circumference)};return this.loaderColor&&(style["--stroke-color"]=`var(--color-${this.loaderColor})`),this.pathColor&&(style["--path-color"]=`var(--bg-color-${this.pathColor})`),(0,_index_d781eb2f_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d781eb2f_js__WEBPACK_IMPORTED_MODULE_0__.H,{style},(0,_index_d781eb2f_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{width:this.sizeNumber,height:this.sizeNumber,viewBox:`0 0 ${this.sizeNumber} ${this.sizeNumber}`},(0,_index_d781eb2f_js__WEBPACK_IMPORTED_MODULE_0__.h)("circle",{class:"background",cx:this.sizeNumber/2,cy:this.sizeNumber/2,r:this.radius,fill:"none","stroke-width":this.strokeWidth}),(0,_index_d781eb2f_js__WEBPACK_IMPORTED_MODULE_0__.h)("circle",{class:"loader",cx:this.sizeNumber/2,cy:this.sizeNumber/2,r:this.radius,fill:"none","stroke-width":this.strokeWidth,"stroke-dasharray":this.circumference,"stroke-linecap":"round"})))}};LoadingSpinner.style=':host{--stroke-color:currentColor;--path-color:none;--path-opacity:1;--background-color:none;--background-shadow:none;position:relative;display:flex;justify-content:center;align-items:center}:host::before{content:"";position:absolute;background-color:var(--background-color);top:0;left:0;right:0;bottom:0;border-radius:50%;opacity:var(--background-opacity);box-shadow:var(--background-shadow)}:host svg{transform:rotate(-90deg);padding:5px;animation:spin 3s infinite linear}:host .background{stroke:var(--path-color)}:host .loader{stroke:var(--stroke-color);animation:dash 2s infinite}@keyframes spin{from{transform:rotate(-90deg)}to{transform:rotate(269deg)}}@keyframes dash{from{stroke-dashoffset:var(--positive-circumference)}to{stroke-dashoffset:var(--negative-circumference)}}'}}]);