(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[674],{1858:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/Authentication/Login",function(){return n(5253)}])},9466:(e,t,n)=>{"use strict";n.d(t,{A:()=>u,R:()=>c});var o=n(4335),r=n(5537),i=n(3557),a=n(5968);let l=o.A.create({baseURL:"".concat("https://api.jolocorp.com"),headers:{"Content-Type":"application/json"}}),s=!1,c=()=>{let e=localStorage.getItem("token");if(e)try{let t=(0,r.s)(e),n=Date.now(),o=1e3*t.exp;o>n?setTimeout(()=>{i.A.dispatch((0,a.ri)()),localStorage.removeItem("token"),alert("Your session has expired. Please log in again."),window.location.href="/"},o-n):(i.A.dispatch((0,a.ri)()),localStorage.removeItem("token"),alert("Your session has expired. Please log in again."),window.location.href="/")}catch(e){console.error("Error decoding token:",e),i.A.dispatch((0,a.ri)()),localStorage.removeItem("token")}};l.interceptors.request.use(e=>{{let t=localStorage.getItem("token");t&&(e.headers.Authorization="Bearer ".concat(t))}return e},e=>Promise.reject(e)),l.interceptors.response.use(e=>e,e=>{var t,n;return(null===(t=e.response)||void 0===t?void 0:t.status)!==401||"TokenExpiredError"!==(null===(n=e.response.data)||void 0===n?void 0:n.message)||s||(s=!0,i.A.dispatch((0,a.ri)()),localStorage.removeItem("token"),alert("Your session has expired. Please log in again."),window.location.href="/"),Promise.reject(e)}),c();let u=l},9343:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var o=n(4848),r=n(6540);let i=(0,r.createContext)(null);function a({clientId:e,nonce:t,onScriptLoadSuccess:n,onScriptLoadError:o,children:a}){let l=function(e={}){let{nonce:t,onScriptLoadSuccess:n,onScriptLoadError:o}=e,[i,a]=(0,r.useState)(!1),l=(0,r.useRef)(n);l.current=n;let s=(0,r.useRef)(o);return s.current=o,(0,r.useEffect)(()=>{let e=document.createElement("script");return e.src="https://accounts.google.com/gsi/client",e.async=!0,e.defer=!0,e.nonce=t,e.onload=()=>{var e;a(!0),null===(e=l.current)||void 0===e||e.call(l)},e.onerror=()=>{var e;a(!1),null===(e=s.current)||void 0===e||e.call(s)},document.body.appendChild(e),()=>{document.body.removeChild(e)}},[t]),i}({nonce:t,onScriptLoadSuccess:n,onScriptLoadError:o}),s=(0,r.useMemo)(()=>({clientId:e,scriptLoadedSuccessfully:l}),[e,l]);return r.createElement(i.Provider,{value:s},a)}let l={large:40,medium:32,small:20};function s({onSuccess:e,onError:t,useOneTap:n,promptMomentNotification:o,type:a="standard",theme:s="outline",size:c="large",text:u,shape:d,logo_alignment:g,width:p,locale:h,click_listener:v,containerProps:m,..._}){let f=(0,r.useRef)(null),{clientId:w,scriptLoadedSuccessfully:y}=function(){let e=(0,r.useContext)(i);if(!e)throw Error("Google OAuth components must be used within GoogleOAuthProvider");return e}(),b=(0,r.useRef)(e);b.current=e;let A=(0,r.useRef)(t);A.current=t;let k=(0,r.useRef)(o);return k.current=o,(0,r.useEffect)(()=>{var e,t,o,r,i,l,m,x,E;if(y)return null===(o=null===(t=null===(e=null==window?void 0:window.google)||void 0===e?void 0:e.accounts)||void 0===t?void 0:t.id)||void 0===o||o.initialize({client_id:w,callback:e=>{var t,n;if(!(null==e?void 0:e.credential))return null===(t=A.current)||void 0===t?void 0:t.call(A);let{credential:o,select_by:r}=e;b.current({credential:o,clientId:null!==(n=null==e?void 0:e.clientId)&&void 0!==n?n:null==e?void 0:e.client_id,select_by:r})},..._}),null===(l=null===(i=null===(r=null==window?void 0:window.google)||void 0===r?void 0:r.accounts)||void 0===i?void 0:i.id)||void 0===l||l.renderButton(f.current,{type:a,theme:s,size:c,text:u,shape:d,logo_alignment:g,width:p,locale:h,click_listener:v}),n&&(null===(E=null===(x=null===(m=null==window?void 0:window.google)||void 0===m?void 0:m.accounts)||void 0===x?void 0:x.id)||void 0===E||E.prompt(k.current)),()=>{var e,t,o;n&&(null===(o=null===(t=null===(e=null==window?void 0:window.google)||void 0===e?void 0:e.accounts)||void 0===t?void 0:t.id)||void 0===o||o.cancel())}},[w,y,n,a,s,c,u,d,g,p,h]),r.createElement("div",{...m,ref:f,style:{height:l[c],...null==m?void 0:m.style}})}var c=n(5556),u=n.n(c);let d=e=>{let{onSuccess:t,onError:n}=e;return(0,o.jsx)(a,{clientId:"427179292131-6p4dkl1v9gjmmr2cf363d39a922vl3ri.apps.googleusercontent.com",lang:"en",children:(0,o.jsx)("div",{className:"google-auth",children:(0,o.jsx)(s,{onSuccess:t,onError:n})})})};d.propTypes={onSuccess:u().func.isRequired,onError:u().func.isRequired};let g=d},5253:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>v});var o=n(4848),r=n(6540),i=n(9466),a=n(9343),l=n(1514),s=n(6715),c=n(1106),u=n.n(c),d=n(8575),g=n.n(d),p=n(1468),h=n(5968);let v=()=>{let{form:e,options:t}=l.ON,n=(0,s.useRouter)(),c=(0,p.wA)(),[d,v]=(0,r.useState)(""),m=async e=>{e.preventDefault(),v("");let t=Object.fromEntries(new FormData(e.target).entries());try{let{token:e,user:o}=(await i.A.post("/login",t)).data;localStorage.setItem("token",e),(0,i.R)(),c((0,h.iD)({token:e,user:o})),n.push("/")}catch(e){console.error("Login error:",e),v("Login failed. Please check your credentials.")}},_=async e=>{try{let{data:t}=await i.A.post("/api/auth/google",{token:e.credential});if(t.success){let{token:e,user:o}=t;localStorage.setItem("token",e),(0,i.R)(),c((0,h.iD)({token:e,user:o})),n.push("/")}else console.error("Login failed:",t.message),v("Login failed. Please try again.")}catch(e){var t;console.error("Error during Google sign-in:",(null===(t=e.response)||void 0===t?void 0:t.data)||e.message),v("Google Sign-In failed. Please try again.")}};return(0,o.jsxs)("div",{className:g()["login-container"],children:[(0,o.jsxs)("form",{onSubmit:m,children:[e.inputs.map((e,t)=>(0,o.jsx)("div",{className:g()["input-group"],children:(0,o.jsx)("input",{type:e.type,id:e.id,placeholder:e.placeholder,name:e.name,required:e.required,className:g().input})},t)),(0,o.jsx)("button",{type:e.submitButton.type,className:g()[e.submitButton.className],children:e.submitButton.text})]}),(0,o.jsx)("div",{className:g().options,children:t.map((e,t)=>(0,o.jsx)(u(),{href:e.href,className:g()[e.className],children:e.text},t))}),(0,o.jsx)("div",{className:g()["google-auth-container"],children:(0,o.jsx)(a.default,{onSuccess:_,onError:e=>{console.error("Login Failed:",e),v("Google Sign-In failed. Please try again.")}})}),d&&(0,o.jsx)("div",{className:g()["error-message"],children:d})]})}},8575:e=>{e.exports={"login-container":"Authentication_login-container__7AM1j","password-recovery-container":"Authentication_password-recovery-container__IHRnB","input-group":"Authentication_input-group__noOsE","back-button-and-heading":"Authentication_back-button-and-heading__qti72","back-icon":"Authentication_back-icon__isTqg","login-btn":"Authentication_login-btn__9NLs5","submit-btn":"Authentication_submit-btn__e_Kuv",options:"Authentication_options__VM_Pj","register-container":"Authentication_register-container__HW7ue","input-group-row":"Authentication_input-group-row__UgUa_","input-field":"Authentication_input-field__Jc2wD","register-btn":"Authentication_register-btn__OF5kv","login-account":"Authentication_login-account__QoX_P","google-auth-container":"Authentication_google-auth-container__mIFMe","error-message":"Authentication_error-message__aYkMy","success-message":"Authentication_success-message__ojEzs"}},2694:(e,t,n)=>{"use strict";var o=n(6925);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},5556:(e,t,n)=>{e.exports=n(2694)()},6925:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},e=>{var t=t=>e(e.s=t);e.O(0,[279,636,593,792],()=>t(1858)),_N_E=e.O()}]);