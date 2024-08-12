(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5618],{72622:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/json-input",function(){return n(30632)}])},30632:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var r=n(52322),i=n(45392),o=n(2784),a=n(9341),l=n(38483),u=n(82027),s=n(73063),p=n(8378);function c(e,t){if("string"==typeof e&&0===e.trim().length)return!0;try{return t(e),!0}catch(e){return!1}}let d={serialize:JSON.stringify,deserialize:JSON.parse},f=(0,u.d5)((e,t)=>{let{value:n,defaultValue:i,onChange:u,formatOnBlur:s,validationError:f,serialize:h,deserialize:m,onFocus:b,onBlur:g,readOnly:y,error:x,...v}=(0,l.w)("JsonInput",d,e),[V,j]=(0,a.C)({value:n,defaultValue:i,finalValue:"",onChange:u}),[w,I]=(0,o.useState)(c(V,m));return(0,r.jsx)(p.g,{value:V,onChange:e=>j(e.currentTarget.value),onFocus:e=>{b?.(e),I(!0)},onBlur:e=>{"function"==typeof g&&g(e);let t=c(e.currentTarget.value,m);s&&!y&&t&&""!==e.currentTarget.value.trim()&&j(h(m(e.currentTarget.value),null,2)),I(t)},ref:t,readOnly:y,...v,autoComplete:"off",__staticSelector:"JsonInput",error:w?x:f||!0,"data-monospace":!0})});f.classes=s.M.classes,f.displayName="@mantine/core/JsonInput";let h={type:"code",code:`
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
`,component:function(){return(0,r.jsx)(f,{maw:400,mx:"auto",label:"Your package.json",placeholder:"Textarea will autosize to fit the content",validationError:"Invalid JSON",formatOnBlur:!0,autosize:!0,minRows:4})}},m={type:"configurator",component:function(e){return(0,r.jsx)(f,{...e,placeholder:"Input placeholder"})},code:`
import { JsonInput } from '@mantine/core';


function Demo() {
  return (
    <JsonInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,centered:!0,maxWidth:340,controls:n(76528).pc},b={type:"code",code:`
import { JsonInput } from '@mantine/core';

function Demo() {
  return (
    <JsonInput disabled defaultValue='{ "a": 1, "B": 2 }' label="Disabled" placeholder="Disabled" />
  );
}
`,component:function(){return(0,r.jsx)(f,{disabled:!0,defaultValue:'{ "a": 1, "B": 2 }',label:"Disabled",placeholder:"Disabled"})},centered:!0,maxWidth:340};var g=n(89868),y=n(58898),x=n(84380);let v=`
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
`,V={type:"styles-api",data:x.P,component:function(e){return(0,r.jsx)(f,{label:"Label",placeholder:"JsonInput",description:"Description",error:"Error",withAsterisk:!0,leftSection:(0,r.jsx)(g.Z,{style:{width:(0,y.h)(18),height:(0,y.h)(18)}}),autosize:!0,...e})},code:v,centered:!0,maxWidth:340};var j=n(25071),w=n(15019);let I=(0,j.A)(w.us.JsonInput);function z(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components},{Demo:n,GetElementRef:o,InputAccessibility:a,InputFeatures:l,StylesApiSelectors:u}=t;return n||J("Demo",!0),o||J("GetElementRef",!0),a||J("InputAccessibility",!0),l||J("InputFeatures",!0),u||J("StylesApiSelectors",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"JsonInput"})," is based on ",(0,r.jsx)(t.a,{href:"/core/textarea/",children:"Textarea"})," component,\nit includes json validation logic and option to format input value on blur:"]}),"\n",(0,r.jsx)(n,{data:h}),"\n",(0,r.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { JsonInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return <JsonInput value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"input-props",children:"Input props"}),"\n",(0,r.jsx)(l,{component:"JsonInput",element:"textarea"}),"\n",(0,r.jsx)(n,{data:m}),"\n",(0,r.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,r.jsx)(n,{data:b}),"\n",(0,r.jsx)(u,{component:"JsonInput"}),"\n",(0,r.jsx)(n,{data:V}),"\n",(0,r.jsx)(o,{component:"JsonInput",refType:"textarea"}),"\n",(0,r.jsx)(a,{component:"JsonInput"})]})}function S(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(I,{...e,children:(0,r.jsx)(z,{...e})})}function J(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},89868:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});/**
 * @license @tabler/icons-react v3.3.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var r=(0,n(73681).Z)("outline","at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},76528:function(e,t,n){"use strict";n.d(t,{Mt:function(){return r},nW:function(){return i},pc:function(){return o}});let r=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],i=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],o=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},8378:function(e,t,n){"use strict";n.d(t,{g:function(){return E}});var r=n(52322);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o=n(2784),a=o.useLayoutEffect,l=function(e){var t=o.useRef(e);return a(function(){t.current=e}),t},u=function(e,t){if("function"==typeof e){e(t);return}e.current=t},s=function(e,t){var n=(0,o.useRef)();return(0,o.useCallback)(function(r){e.current=r,n.current&&u(n.current,null),n.current=t,t&&u(t,r)},[t])},p={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},c=function(e){Object.keys(p).forEach(function(t){e.style.setProperty(t,p[t],"important")})},d=null,f=function(e,t){var n=e.scrollHeight;return"border-box"===t.sizingStyle.boxSizing?n+t.borderSize:n-t.paddingSize},h=function(){},m=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],b=!!document.documentElement.currentStyle,g=function(e){var t=window.getComputedStyle(e);if(null===t)return null;var n=m.reduce(function(e,n){return e[n]=t[n],e},{}),r=n.boxSizing;if(""===r)return null;b&&"border-box"===r&&(n.width=parseFloat(n.width)+parseFloat(n.borderRightWidth)+parseFloat(n.borderLeftWidth)+parseFloat(n.paddingRight)+parseFloat(n.paddingLeft)+"px");var i=parseFloat(n.paddingBottom)+parseFloat(n.paddingTop),o=parseFloat(n.borderBottomWidth)+parseFloat(n.borderTopWidth);return{sizingStyle:n,paddingSize:i,borderSize:o}};function y(e,t,n){var r=l(n);o.useLayoutEffect(function(){var n=function(e){return r.current(e)};if(e)return e.addEventListener(t,n),function(){return e.removeEventListener(t,n)}},[])}var x=function(e){y(window,"resize",e)},v=function(e){y(document.fonts,"loadingdone",e)},V=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],j=o.forwardRef(function(e,t){var n=e.cacheMeasurements,r=e.maxRows,a=e.minRows,l=e.onChange,u=void 0===l?h:l,p=e.onHeightChange,m=void 0===p?h:p,b=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,V),y=void 0!==b.value,j=o.useRef(null),w=s(j,t),I=o.useRef(0),z=o.useRef(),S=function(){var e,t,i,o,l,u,s,p,h,b,y,x=j.current,v=n&&z.current?z.current:g(x);if(v){z.current=v;var V=(e=x.value||x.placeholder||"x",void 0===(t=a)&&(t=1),void 0===(i=r)&&(i=1/0),d||((d=document.createElement("textarea")).setAttribute("tabindex","-1"),d.setAttribute("aria-hidden","true"),c(d)),null===d.parentNode&&document.body.appendChild(d),o=v.paddingSize,l=v.borderSize,s=(u=v.sizingStyle).boxSizing,Object.keys(u).forEach(function(e){d.style[e]=u[e]}),c(d),d.value=e,p=f(d,v),d.value=e,p=f(d,v),d.value="x",b=(h=d.scrollHeight-o)*t,"border-box"===s&&(b=b+o+l),p=Math.max(b,p),y=h*i,"border-box"===s&&(y=y+o+l),[p=Math.min(y,p),h]),w=V[0],S=V[1];I.current!==w&&(I.current=w,x.style.setProperty("height",w+"px","important"),m(w,{rowHeight:S}))}};return o.useLayoutEffect(S),x(S),v(S),o.createElement("textarea",i({},b,{onChange:function(e){y||S(),u(e)},ref:w}))}),w=n(66596),I=n(38483),z=n(82027),S=n(73063);let J={},E=(0,z.d5)((e,t)=>{let{autosize:n,maxRows:i,minRows:o,__staticSelector:a,resize:l,...u}=(0,I.w)("Textarea",J,e),s=n&&"test"!==(0,w.d)();return(0,r.jsx)(S.M,{component:s?j:"textarea",ref:t,...u,__staticSelector:a||"Textarea",multiline:!0,"data-no-overflow":n&&void 0===i||void 0,__vars:{"--input-resize":l},...s?{maxRows:i,minRows:o}:{}})});E.classes=S.M.classes,E.displayName="@mantine/core/Textarea"}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=72622)}),_N_E=e.O()}]);