(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5618],{93693:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},15013:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/json-input",function(){return n(93342)}])},93342:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R}});var r=n(24246),i=n(71670),o=n(3916),a=n(30289),l=n(27378),u=n(58675),s=n(96739),c=n(20410),p=n(23163),d=n(59655);function f(e,t){if("string"==typeof e&&0===e.trim().length)return!0;try{return t(e),!0}catch(e){return!1}}let m={serialize:JSON.stringify,deserialize:JSON.parse},h=(0,c.d)((e,t)=>{let{value:n,defaultValue:r,onChange:i,formatOnBlur:o,validationError:a,serialize:c,deserialize:p,onFocus:h,onBlur:b,readOnly:g,error:y,...v}=(0,s.w)("JsonInput",m,e),[x,V]=(0,u.C)({value:n,defaultValue:r,finalValue:"",onChange:i}),[w,I]=(0,l.useState)(f(x,p));return l.createElement(d.g,{value:x,onChange:e=>V(e.currentTarget.value),onFocus:e=>{h?.(e),I(!0)},onBlur:e=>{"function"==typeof b&&b(e);let t=f(e.currentTarget.value,p);o&&!g&&t&&""!==e.currentTarget.value.trim()&&V(c(p(e.currentTarget.value),null,2)),I(t)},ref:t,readOnly:g,...v,autoComplete:"off",__staticSelector:"JsonInput",error:w?y:a||!0,"data-monospace":!0})});h.classes=p.M.classes,h.displayName="@mantine/core/JsonInput";let b=`
import { JsonInput } from '@mantine/core';

function Demo() {
  return (
    <JsonInput
      label="Your package.json"
      placeholder="Textarea will autosize to fit the content"
      validationError="Invalid JSON"
      formatOnBlur
      autosize
      minRows={4}
    />
  );
}
`,g={type:"code",code:b,component:function(){return l.createElement(h,{maw:400,mx:"auto",label:"Your package.json",placeholder:"Textarea will autosize to fit the content",validationError:"Invalid JSON",formatOnBlur:!0,autosize:!0,minRows:4})}};var y=n(77481);let v=`
import { JsonInput } from '@mantine/core';


function Demo() {
  return (
    <JsonInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,x={type:"configurator",component:function(e){return l.createElement(h,{...e,placeholder:"Input placeholder"})},code:v,centered:!0,maxWidth:340,controls:y.pc},V=`
import { JsonInput } from '@mantine/core';

function Demo() {
  return (
    <JsonInput disabled defaultValue='{ "a": 1, "B": 2 }' label="Disabled" placeholder="Disabled" />
  );
}
`,w={type:"code",code:V,component:function(){return l.createElement(h,{disabled:!0,defaultValue:'{ "a": 1, "B": 2 }',label:"Disabled",placeholder:"Disabled"})},centered:!0,maxWidth:340};var I=n(71078),z=n(93693),S=n(55838);let j=`
import { IconAt } from '@tabler/icons-react';
import { JsonInput, rem } from '@mantine/core';

function Demo() {
  return (
    <JsonInput
      label="Label"
      placeholder="JsonInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} />}
      autosize
      {{props}}
    />
  );
}
`,E={type:"styles-api",data:S.P,component:function(e){return l.createElement(h,{label:"Label",placeholder:"JsonInput",description:"Description",error:"Error",withAsterisk:!0,leftSection:l.createElement(z.Z,{style:{width:(0,I.h)(18),height:(0,I.h)(18)}}),autosize:!0,...e})},code:j,centered:!0,maxWidth:340},J=(0,o.A)(a.us.JsonInput);function k(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components},{Demo:n,GetElementRef:o,InputAccessibility:a,InputFeatures:l,StylesApiSelectors:u}=t;return n||T("Demo",!0),o||T("GetElementRef",!0),a||T("InputAccessibility",!0),l||T("InputFeatures",!0),u||T("StylesApiSelectors",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"JsonInput"})," is based on ",(0,r.jsx)(t.a,{href:"/core/textarea/",children:"Textarea"})," component,\nit includes json validation logic and option to format input value on blur:"]}),"\n",(0,r.jsx)(n,{data:g}),"\n",(0,r.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { JsonInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return <JsonInput value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"input-props",children:"Input props"}),"\n",(0,r.jsx)(l,{component:"JsonInput",element:"textarea"}),"\n",(0,r.jsx)(n,{data:x}),"\n",(0,r.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,r.jsx)(n,{data:w}),"\n",(0,r.jsx)(u,{component:"JsonInput"}),"\n",(0,r.jsx)(n,{data:E}),"\n",(0,r.jsx)(o,{component:"JsonInput",refType:"textarea"}),"\n",(0,r.jsx)(a,{component:"JsonInput"})]})}function R(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(J,{...e,children:(0,r.jsx)(k,{...e})})}function T(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},77481:function(e,t,n){"use strict";n.d(t,{Mt:function(){return r},nW:function(){return i},pc:function(){return o}});let r=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],i=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],o=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},59655:function(e,t,n){"use strict";n.d(t,{g:function(){return j}});var r=n(27378);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o=r.useLayoutEffect,a=function(e){var t=r.useRef(e);return o(function(){t.current=e}),t},l=function(e,t){if("function"==typeof e){e(t);return}e.current=t},u=function(e,t){var n=(0,r.useRef)();return(0,r.useCallback)(function(r){e.current=r,n.current&&l(n.current,null),n.current=t,t&&l(t,r)},[t])},s={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},c=function(e){Object.keys(s).forEach(function(t){e.style.setProperty(t,s[t],"important")})},p=null,d=function(e,t){var n=e.scrollHeight;return"border-box"===t.sizingStyle.boxSizing?n+t.borderSize:n-t.paddingSize},f=function(){},m=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],h=!!document.documentElement.currentStyle,b=function(e){var t=window.getComputedStyle(e);if(null===t)return null;var n=m.reduce(function(e,n){return e[n]=t[n],e},{}),r=n.boxSizing;if(""===r)return null;h&&"border-box"===r&&(n.width=parseFloat(n.width)+parseFloat(n.borderRightWidth)+parseFloat(n.borderLeftWidth)+parseFloat(n.paddingRight)+parseFloat(n.paddingLeft)+"px");var i=parseFloat(n.paddingBottom)+parseFloat(n.paddingTop),o=parseFloat(n.borderBottomWidth)+parseFloat(n.borderTopWidth);return{sizingStyle:n,paddingSize:i,borderSize:o}};function g(e,t,n){var i=a(n);r.useLayoutEffect(function(){var n=function(e){return i.current(e)};if(e)return e.addEventListener(t,n),function(){return e.removeEventListener(t,n)}},[])}var y=function(e){g(window,"resize",e)},v=function(e){g(document.fonts,"loadingdone",e)},x=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],V=r.forwardRef(function(e,t){var n=e.cacheMeasurements,o=e.maxRows,a=e.minRows,l=e.onChange,s=void 0===l?f:l,m=e.onHeightChange,h=void 0===m?f:m,g=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,x),V=void 0!==g.value,w=r.useRef(null),I=u(w,t),z=r.useRef(0),S=r.useRef(),j=function(){var e,t,r,i,l,u,s,f,m,g,y,v=w.current,x=n&&S.current?S.current:b(v);if(x){S.current=x;var V=(e=v.value||v.placeholder||"x",void 0===(t=a)&&(t=1),void 0===(r=o)&&(r=1/0),p||((p=document.createElement("textarea")).setAttribute("tabindex","-1"),p.setAttribute("aria-hidden","true"),c(p)),null===p.parentNode&&document.body.appendChild(p),i=x.paddingSize,l=x.borderSize,s=(u=x.sizingStyle).boxSizing,Object.keys(u).forEach(function(e){p.style[e]=u[e]}),c(p),p.value=e,f=d(p,x),p.value=e,f=d(p,x),p.value="x",g=(m=p.scrollHeight-i)*t,"border-box"===s&&(g=g+i+l),f=Math.max(g,f),y=m*r,"border-box"===s&&(y=y+i+l),[f=Math.min(y,f),m]),I=V[0],j=V[1];z.current!==I&&(z.current=I,v.style.setProperty("height",I+"px","important"),h(I,{rowHeight:j}))}};return r.useLayoutEffect(j),y(j),v(j),r.createElement("textarea",i({},g,{onChange:function(e){V||j(),s(e)},ref:I}))}),w=n(96739),I=n(20410),z=n(23163);let S={},j=(0,I.d)((e,t)=>{let{autosize:n,maxRows:i,minRows:o,__staticSelector:a,...l}=(0,w.w)("Textarea",S,e);return r.createElement(z.M,{component:n?V:"textarea",ref:t,...l,__staticSelector:a||"Textarea",multiline:!0,"data-no-overflow":n&&void 0===i||void 0,...n?{maxRows:i,minRows:o}:{}})});j.classes=z.M.classes,j.displayName="@mantine/core/Textarea"}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=15013)}),_N_E=e.O()}]);