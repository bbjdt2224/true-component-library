"use strict";(self.webpackChunktrue_components=self.webpackChunktrue_components||[]).push([[3741],{"./dist/esm/button-common-6d6d30b6.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function trySubmitForm(isSubmit,element){if(!0===isSubmit){const formEl=element.closest("form");formEl&&formEl.dispatchEvent(new CustomEvent("submit",{cancelable:!0}))}}function removeButtonFocus(event){try{event.target.closest("button").blur()}catch(_a){}}__webpack_require__.d(__webpack_exports__,{r:()=>removeButtonFocus,t:()=>trySubmitForm})},"./dist/esm/true-button.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{true_button:()=>Button});var _index_d781eb2f_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-d781eb2f.js"),_button_common_6d6d30b6_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/button-common-6d6d30b6.js");const Button=class{constructor(hostRef){(0,_index_d781eb2f_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.type="primary",this.textSize="s",this.submit=!1,this.disabled=!1,this.textAlign="center",this.hasOverlay=void 0}hostClick(event){this.disabled?event.preventDefault():(0,_button_common_6d6d30b6_js__WEBPACK_IMPORTED_MODULE_1__.t)(this.submit,this.element)}render(){return(0,_index_d781eb2f_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d781eb2f_js__WEBPACK_IMPORTED_MODULE_0__.H,{style:{"--text-align":this.textAlign},"aria-disabled":this.disabled?"true":null},this.hasOverlay?(0,_index_d781eb2f_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"overlay"}):null,(0,_index_d781eb2f_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{disabled:this.disabled,onClick:e=>(0,_button_common_6d6d30b6_js__WEBPACK_IMPORTED_MODULE_1__.r)(e),type:!0===this.submit?"submit":"button"},(0,_index_d781eb2f_js__WEBPACK_IMPORTED_MODULE_0__.h)("true-text-base",{size:this.textSize,weight:"medium"},(0,_index_d781eb2f_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)),(0,_index_d781eb2f_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"end"})))}get element(){return(0,_index_d781eb2f_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};Button.style=":host{--height:32px;--font-size:14px;--font-weight:500;--padding:0 20px;--border-radius:16px;--min-width:max-content;--button-transition:100ms ease-in-out;--text-align:center;--border-width:0px;--color:var(--color-neutral-100);--bg-color:var(--color-custom-brand-accent);--border-color:transparent;--color-hover:var(--color-custom-brand-accent-contrast);--bg-color-hover:var(--color-custom-brand-accent-shade);--border-color-hover:transparent;--color-disabled:var(--color-tertiary);--bg-color-disabled:var(--bg-color-primary);--border-color-disabled:transparent;display:inline-block;position:relative}:host .overlay{position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0, 0, 0, 0.15);border-radius:var(--border-radius);z-index:2;cursor:pointer}:host button{cursor:pointer;appearance:none;border:0;padding:0;background-color:transparent;font-family:var(--app-font-family);width:100%;min-width:var(--min-width);height:100%;font-size:var(--font-size);font-weight:var(--font-weight);height:var(--height);background-color:var(--bg-color);border:var(--border-width) solid var(--border-color);padding:var(--padding);border-radius:var(--border-radius);position:relative;text-align:var(--text-align);transition:background-color var(--button-transition), border var(--button-transition), color var(--button-transition)}:host button[disabled]{cursor:not-allowed}:host button:focus{outline:0}:host button::-moz-focus-inner{border:0}:host button:focus:not([disabled]):not(:active){box-shadow:0 0 0 2px var(--color-true-primary-blue)}:host button true-text-base{--text-color:var(--color)}:host([type=secondary]){--border-width:2px;--color:var(--color-secondary);--bg-color:transparent;--border-color:var(--bg-color-tertiary);--color-hover:var(--color-primary);--bg-color-hover:transparent;--border-color-hover:var(--bg-hover-tertiary);--color-disabled:var(--color-tertiary);--bg-color-disabled:transparent;--border-color-disabled:var(--bg-color-tertiary)}:host([type=danger]){--color:var(--color-neutral-100);--bg-color:var(--color-true-primary-red);--border-color:var(--color-true-primary-red);--color-hover:var(--color-true-primary-red-contrast);--bg-color-hover:var(--color-true-primary-red-shade);--border-color-hover:transparent;--color-disabled:var(--color-tertiary);--bg-color-disabled:var(--bg-color-primary);--border-color-disabled:transparent}:host(.activated) button:not([disabled]){--color:var(--color-hover);--bg-color:var(--bg-color-hover);--border-color:var(--border-color-hover)}@media (any-hover: hover){:host(:hover) button:not([disabled]){--color:var(--color-hover);--bg-color:var(--bg-color-hover);--border-color:var(--border-color-hover)}}:host([disabled]) button{--color:var(--color-disabled);--bg-color:var(--bg-color-disabled);--border-color:var(--border-color-disabled)}"}}]);