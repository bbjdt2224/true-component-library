(self.webpackChunktrue_components=self.webpackChunktrue_components||[]).push([[9062],{"./src/stories/Page.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LoggedIn:()=>LoggedIn,LoggedOut:()=>LoggedOut,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Page_stories});var dist=__webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),page=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[12].use[2]!./src/stories/page.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(page.Z,options);page.Z&&page.Z.locals&&page.Z.locals;var _LoggedOut$parameters,_LoggedOut$parameters2,_LoggedIn$parameters,_LoggedIn$parameters2,Header=__webpack_require__("./src/stories/Header.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}const Page_stories={title:"Example/Page",render:()=>{return article=document.createElement("article"),user=null,rerenderHeader=()=>{var wrapper=document.getElementsByTagName("article")[0];wrapper.replaceChild(createHeaderElement(),wrapper.firstChild)},onLogin=()=>{user={name:"Jane Doe"},rerenderHeader()},onLogout=()=>{user=null,rerenderHeader()},onCreateAccount=()=>{user={name:"Jane Doe"},rerenderHeader()},header=(createHeaderElement=()=>(0,Header.d)({onLogin,onLogout,onCreateAccount,user}))(),article.appendChild(header),article.insertAdjacentHTML("beforeend",'\n  <section class="storybook-page">\n    <h2>Pages in Storybook</h2>\n    <p>\n      We recommend building UIs with a\n      <a\n        href="https://blog.hichroma.com/component-driven-development-ce1109d56c8e"\n        target="_blank"\n        rel="noopener noreferrer">\n        <strong>component-driven</strong>\n      </a>\n      process starting with atomic components and ending with pages.\n    </p>\n    <p>\n      Render pages with mock data. This makes it easy to build and review page states without\n      needing to navigate to them in your app. Here are some handy patterns for managing page data\n      in Storybook:\n    </p>\n    <ul>\n      <li>\n        Use a higher-level connected component. Storybook helps you compose such data from the\n        "args" of child component stories\n      </li>\n      <li>\n        Assemble data in the page component from your services. You can mock these services out\n        using Storybook.\n      </li>\n    </ul>\n    <p>\n      Get a guided tutorial on component-driven development at\n      <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">\n        Storybook tutorials\n      </a>\n      . Read more in the\n      <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">docs</a>\n      .\n    </p>\n    <div class="tip-wrapper">\n      <span class="tip">Tip</span>\n      Adjust the width of the canvas with the\n      <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">\n        <g fill="none" fillRule="evenodd">\n          <path\n            d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0\n            01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0\n            010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"\n            id="a"\n            fill="#999" />\n        </g>\n      </svg>\n      Viewports addon in the toolbar\n    </div>\n  </section>\n'),article;var header,article,user,rerenderHeader,onLogin,onLogout,onCreateAccount,createHeaderElement},parameters:{layout:"fullscreen"}};var _play,LoggedOut={},LoggedIn={play:(_play=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}((function*(_ref){var{canvasElement}=_ref,canvas=(0,dist.uh)(canvasElement),loginButton=yield canvas.getByRole("button",{name:/Log in/i});yield dist.mV.click(loginButton)})),function play(_x){return _play.apply(this,arguments)})};LoggedOut.parameters=_objectSpread(_objectSpread({},LoggedOut.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_LoggedOut$parameters=LoggedOut.parameters)||void 0===_LoggedOut$parameters?void 0:_LoggedOut$parameters.docs),{},{source:_objectSpread({originalSource:"{}"},null===(_LoggedOut$parameters2=LoggedOut.parameters)||void 0===_LoggedOut$parameters2||null===(_LoggedOut$parameters2=_LoggedOut$parameters2.docs)||void 0===_LoggedOut$parameters2?void 0:_LoggedOut$parameters2.source)})}),LoggedIn.parameters=_objectSpread(_objectSpread({},LoggedIn.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_LoggedIn$parameters=LoggedIn.parameters)||void 0===_LoggedIn$parameters?void 0:_LoggedIn$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const loginButton = await canvas.getByRole('button', {\n      name: /Log in/i\n    });\n    await userEvent.click(loginButton);\n  }\n}"},null===(_LoggedIn$parameters2=LoggedIn.parameters)||void 0===_LoggedIn$parameters2||null===(_LoggedIn$parameters2=_LoggedIn$parameters2.docs)||void 0===_LoggedIn$parameters2?void 0:_LoggedIn$parameters2.source)})});const __namedExportsOrder=["LoggedOut","LoggedIn"]},"./src/stories/Button.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>createButton});var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),stories_button=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[12].use[2]!./src/stories/button.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(stories_button.Z,options);stories_button.Z&&stories_button.Z.locals&&stories_button.Z.locals;var createButton=_ref=>{var{primary=!1,size="medium",backgroundColor,label,onClick}=_ref,btn=document.createElement("button");btn.type="button",btn.innerText=label,btn.addEventListener("click",onClick);var mode=primary?"storybook-button--primary":"storybook-button--secondary";return btn.className=["storybook-button","storybook-button--".concat(size),mode].join(" "),btn.style.backgroundColor=backgroundColor,btn}},"./src/stories/Header.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{d:()=>createHeader});var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),header=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[12].use[2]!./src/stories/header.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(header.Z,options);header.Z&&header.Z.locals&&header.Z.locals;var Button=__webpack_require__("./src/stories/Button.js"),createHeader=_ref=>{var{user,onLogout,onLogin,onCreateAccount}=_ref,header=document.createElement("header"),wrapper=document.createElement("div");wrapper.className="storybook-header";wrapper.insertAdjacentHTML("afterbegin",'<div>\n    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">\n      <g fill="none" fillRule="evenodd">\n        <path\n          d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"\n          fill="#FFF" />\n        <path\n          d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"\n          fill="#555AB9" />\n        <path d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z" fill="#91BAF8" />\n      </g>\n    </svg>\n    <h1>Acme</h1>\n  </div>');var account=document.createElement("div");if(user){var welcomeMessage='<span class="welcome">Welcome, <b>'.concat(user.name,"</b>!</span>");account.innerHTML=welcomeMessage,account.appendChild((0,Button.a)({size:"small",label:"Log out",onClick:onLogout}))}else account.appendChild((0,Button.a)({size:"small",label:"Log in",onClick:onLogin})),account.appendChild((0,Button.a)({size:"small",label:"Sign up",onClick:onCreateAccount,primary:!0}));return wrapper.appendChild(account),header.appendChild(wrapper),header}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[12].use[2]!./src/stories/button.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.storybook-button{font-family:"Nunito Sans","Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:700;border:0;border-radius:3em;cursor:pointer;display:inline-block;line-height:1}.storybook-button--primary{color:#fff;background-color:#1ea7fd}.storybook-button--secondary{color:#333;background-color:rgba(0,0,0,0);box-shadow:rgba(0,0,0,.15) 0px 0px 0px 1px inset}.storybook-button--small{font-size:12px;padding:10px 16px}.storybook-button--medium{font-size:14px;padding:11px 20px}.storybook-button--large{font-size:16px;padding:12px 24px}',"",{version:3,sources:["webpack://./src/stories/button.scss"],names:[],mappings:"AAAA,kBACE,qEAAA,CACA,eAAA,CACA,QAAA,CACA,iBAAA,CACA,cAAA,CACA,oBAAA,CACA,aAAA,CAEF,2BACE,UAAA,CACA,wBAAA,CAEF,6BACE,UAAA,CACA,8BAAA,CACA,gDAAA,CAEF,yBACE,cAAA,CACA,iBAAA,CAEF,0BACE,cAAA,CACA,iBAAA,CAEF,yBACE,cAAA,CACA,iBAAA",sourcesContent:[".storybook-button {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.storybook-button--primary {\n  color: white;\n  background-color: #1ea7fd;\n}\n.storybook-button--secondary {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button--medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[12].use[2]!./src/stories/header.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.storybook-header{font-family:"Nunito Sans","Helvetica Neue",Helvetica,Arial,sans-serif;border-bottom:1px solid rgba(0,0,0,.1);padding:15px 20px;display:flex;align-items:center;justify-content:space-between}.storybook-header svg{display:inline-block;vertical-align:top}.storybook-header h1{font-weight:700;font-size:20px;line-height:1;margin:6px 0 6px 10px;display:inline-block;vertical-align:top}.storybook-header button+button{margin-left:10px}.storybook-header .welcome{color:#333;font-size:14px;margin-right:10px}',"",{version:3,sources:["webpack://./src/stories/header.scss"],names:[],mappings:"AAAA,kBACE,qEAAA,CACA,sCAAA,CACA,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,6BAAA,CAGF,sBACE,oBAAA,CACA,kBAAA,CAGF,qBACE,eAAA,CACA,cAAA,CACA,aAAA,CACA,qBAAA,CACA,oBAAA,CACA,kBAAA,CAGF,gCACE,gBAAA,CAGF,2BACE,UAAA,CACA,cAAA,CACA,iBAAA",sourcesContent:[".storybook-header {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.storybook-header svg {\n  display: inline-block;\n  vertical-align: top;\n}\n\n.storybook-header h1 {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 1;\n  margin: 6px 0 6px 10px;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.storybook-header button + button {\n  margin-left: 10px;\n}\n\n.storybook-header .welcome {\n  color: #333;\n  font-size: 14px;\n  margin-right: 10px;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[12].use[2]!./src/stories/page.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.storybook-page{font-family:"Nunito Sans","Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;line-height:24px;padding:48px 20px;margin:0 auto;max-width:600px;color:#333}.storybook-page h2{font-weight:700;font-size:32px;line-height:1;margin:0 0 4px;display:inline-block;vertical-align:top}.storybook-page p{margin:1em 0}.storybook-page a{text-decoration:none;color:#1ea7fd}.storybook-page ul{padding-left:30px;margin:1em 0}.storybook-page li{margin-bottom:8px}.storybook-page .tip{display:inline-block;border-radius:1em;font-size:11px;line-height:12px;font-weight:700;background:#e7fdd8;color:#66bf3c;padding:4px 12px;margin-right:10px;vertical-align:top}.storybook-page .tip-wrapper{font-size:13px;line-height:20px;margin-top:40px;margin-bottom:40px}.storybook-page .tip-wrapper svg{display:inline-block;height:12px;width:12px;margin-right:4px;vertical-align:top;margin-top:3px}.storybook-page .tip-wrapper svg path{fill:#1ea7fd}',"",{version:3,sources:["webpack://./src/stories/page.scss"],names:[],mappings:"AAAA,gBACE,qEAAA,CACA,cAAA,CACA,gBAAA,CACA,iBAAA,CACA,aAAA,CACA,eAAA,CACA,UAAA,CAGF,mBACE,eAAA,CACA,cAAA,CACA,aAAA,CACA,cAAA,CACA,oBAAA,CACA,kBAAA,CAGF,kBACE,YAAA,CAGF,kBACE,oBAAA,CACA,aAAA,CAGF,mBACE,iBAAA,CACA,YAAA,CAGF,mBACE,iBAAA,CAGF,qBACE,oBAAA,CACA,iBAAA,CACA,cAAA,CACA,gBAAA,CACA,eAAA,CACA,kBAAA,CACA,aAAA,CACA,gBAAA,CACA,iBAAA,CACA,kBAAA,CAGF,6BACE,cAAA,CACA,gBAAA,CACA,eAAA,CACA,kBAAA,CAGF,iCACE,oBAAA,CACA,WAAA,CACA,UAAA,CACA,gBAAA,CACA,kBAAA,CACA,cAAA,CAGF,sCACE,YAAA",sourcesContent:[".storybook-page {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 24px;\n  padding: 48px 20px;\n  margin: 0 auto;\n  max-width: 600px;\n  color: #333;\n}\n\n.storybook-page h2 {\n  font-weight: 700;\n  font-size: 32px;\n  line-height: 1;\n  margin: 0 0 4px;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.storybook-page p {\n  margin: 1em 0;\n}\n\n.storybook-page a {\n  text-decoration: none;\n  color: #1ea7fd;\n}\n\n.storybook-page ul {\n  padding-left: 30px;\n  margin: 1em 0;\n}\n\n.storybook-page li {\n  margin-bottom: 8px;\n}\n\n.storybook-page .tip {\n  display: inline-block;\n  border-radius: 1em;\n  font-size: 11px;\n  line-height: 12px;\n  font-weight: 700;\n  background: #e7fdd8;\n  color: #66bf3c;\n  padding: 4px 12px;\n  margin-right: 10px;\n  vertical-align: top;\n}\n\n.storybook-page .tip-wrapper {\n  font-size: 13px;\n  line-height: 20px;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.storybook-page .tip-wrapper svg {\n  display: inline-block;\n  height: 12px;\n  width: 12px;\n  margin-right: 4px;\n  vertical-align: top;\n  margin-top: 3px;\n}\n\n.storybook-page .tip-wrapper svg path {\n  fill: #1ea7fd;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"?4f7e":()=>{}}]);