(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[39678],{99125:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/textarea",function(){return r(46127)}])},46127:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>y});var n=r(31085),a=r(71184),i=r(71054);let o={type:"configurator",component:function(e){return(0,n.jsx)(i.T,{...e,placeholder:"Input placeholder"})},code:`
import { Textarea } from '@mantine/core';


function Demo() {
  return (
    <Textarea
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,centered:!0,maxWidth:340,controls:r(23232).$7},l={type:"code",code:`
import { Textarea } from '@mantine/core';

function Demo() {
  return (
    <>
      <Textarea
        placeholder="Autosize with no rows limit"
        label="Autosize with no rows limit"
        autosize
        minRows={2}
      />

      <Textarea
        label="Autosize with 4 rows max"
        placeholder="Autosize with 4 rows max"
        autosize
        minRows={2}
        maxRows={4}
      />
    </>
  );
}

`,component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.T,{placeholder:"Autosize with no rows limit",label:"Autosize with no rows limit",autosize:!0,minRows:2}),(0,n.jsx)(i.T,{label:"Autosize with 4 rows max",placeholder:"Autosize with 4 rows max",autosize:!0,minRows:2,maxRows:4,mt:"md"})]})},maxWidth:340,centered:!0},s={type:"code",code:`
import { Textarea } from '@mantine/core';

function Demo() {
  return <Textarea resize="vertical" label="Disabled" placeholder="Your comment" />;
}
`,component:function(){return(0,n.jsx)(i.T,{resize:"vertical",label:"Disabled",placeholder:"Your comment"})},centered:!0,maxWidth:340},u={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.T,{label:"Boolean error",placeholder:"Boolean error",error:!0}),(0,n.jsx)(i.T,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"})]})},maxWidth:340,centered:!0,code:`
import { Textarea } from '@mantine/core';

function Demo() {
  return (
    <>
      <Textarea label="Boolean error" placeholder="Boolean error" error />
      <Textarea
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}
`},d={type:"code",code:`
import { Textarea } from '@mantine/core';

function Demo() {
  return <Textarea label="Disabled" placeholder="Your comment" disabled />;
}
`,component:function(){return(0,n.jsx)(i.T,{label:"Disabled",placeholder:"Your comment",disabled:!0})},centered:!0,maxWidth:340};var c=r(32653),p=r(68572);let m=`
import { IconAt } from '@tabler/icons-react';
import { Textarea } from '@mantine/core';

function Demo() {
  return (
    <Textarea
      label="Label"
      placeholder="Textarea"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt size={18} />}
      autosize
      {{props}}
    />
  );
}
`,h={type:"styles-api",data:p.f,component:function(e){return(0,n.jsx)(i.T,{label:"Label",placeholder:"Textarea",description:"Description",error:"Error",withAsterisk:!0,leftSection:(0,n.jsx)(c.A,{size:18}),autosize:!0,...e})},code:m,centered:!0,maxWidth:340};var f=r(85954),x=r(38215);let b=(0,f.P)(x.XZ.Textarea);function g(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Demo:r,GetElementRef:i,InputAccessibility:c,InputFeatures:p,StylesApiSelectors:m}=t;return r||v("Demo",!0),i||v("GetElementRef",!0),c||v("InputAccessibility",!0),p||v("InputFeatures",!0),m||v("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(p,{component:"Textarea",element:"textarea"}),"\n",(0,n.jsx)(r,{data:o}),"\n",(0,n.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Textarea } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return (\n    <Textarea\n      value={value}\n      onChange={(event) => setValue(event.currentTarget.value)}\n    />\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"autosize",children:"Autosize"}),"\n",(0,n.jsxs)(t.p,{children:["Autosize textarea uses ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/react-textarea-autosize",children:"react-textarea-autosize"})," package.\nTextarea height will grow until maxRows are reached or indefinitely if maxRows not set."]}),"\n",(0,n.jsx)(r,{data:l}),"\n",(0,n.jsx)(t.h2,{id:"enable-resize",children:"Enable resize"}),"\n",(0,n.jsxs)(t.p,{children:["By default, ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/resize",children:"resize"})," is ",(0,n.jsx)(t.code,{children:"none"}),",\nto enable it set ",(0,n.jsx)(t.code,{children:"resize"})," prop to ",(0,n.jsx)(t.code,{children:"vertical"})," or ",(0,n.jsx)(t.code,{children:"both"}),":"]}),"\n",(0,n.jsx)(r,{data:s}),"\n",(0,n.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,n.jsx)(r,{data:u}),"\n",(0,n.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,n.jsx)(r,{data:d}),"\n",(0,n.jsx)(m,{component:"Textarea"}),"\n",(0,n.jsx)(r,{data:h}),"\n",(0,n.jsx)(i,{component:"Textarea",refType:"textarea"}),"\n",(0,n.jsx)(c,{component:"Textarea"})]})}function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(b,{...e,children:(0,n.jsx)(g,{...e})})}function v(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},32653:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});var n=(0,r(73366).A)("outline","at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},23232:(e,t,r)=>{"use strict";r.d(t,{$7:()=>i,l$:()=>n,wQ:()=>a});let n=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],a=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],i=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},71054:(e,t,r)=>{"use strict";r.d(t,{T:()=>E});var n=r(31085);function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var i=r(14041),o=i.useLayoutEffect,l=function(e){var t=i.useRef(e);return o(function(){t.current=e}),t},s=function(e,t){if("function"==typeof e){e(t);return}e.current=t};let u=function(e,t){var r=(0,i.useRef)();return(0,i.useCallback)(function(n){e.current=n,r.current&&s(r.current,null),r.current=t,t&&s(t,n)},[t])};var d={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0",display:"block"},c=function(e){Object.keys(d).forEach(function(t){e.style.setProperty(t,d[t],"important")})},p=null,m=function(e,t){var r=e.scrollHeight;return"border-box"===t.sizingStyle.boxSizing?r+t.borderSize:r-t.paddingSize},h=function(){},f=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak","wordSpacing","scrollbarGutter"],x=!!document.documentElement.currentStyle,b=function(e){var t=window.getComputedStyle(e);if(null===t)return null;var r=f.reduce(function(e,r){return e[r]=t[r],e},{}),n=r.boxSizing;if(""===n)return null;x&&"border-box"===n&&(r.width=parseFloat(r.width)+parseFloat(r.borderRightWidth)+parseFloat(r.borderLeftWidth)+parseFloat(r.paddingRight)+parseFloat(r.paddingLeft)+"px");var a=parseFloat(r.paddingBottom)+parseFloat(r.paddingTop),i=parseFloat(r.borderBottomWidth)+parseFloat(r.borderTopWidth);return{sizingStyle:r,paddingSize:a,borderSize:i}};function g(e,t,r){var n=l(r);i.useLayoutEffect(function(){var r=function(e){return n.current(e)};if(e)return e.addEventListener(t,r),function(){return e.removeEventListener(t,r)}},[])}var y=function(e,t){g(document.body,"reset",function(r){e.current.form===r.target&&t(r)})},v=function(e){g(window,"resize",e)},w=function(e){g(document.fonts,"loadingdone",e)},z=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],j=i.forwardRef(function(e,t){var r=e.cacheMeasurements,n=e.maxRows,o=e.minRows,l=e.onChange,s=void 0===l?h:l,d=e.onHeightChange,f=void 0===d?h:d,x=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,z),g=void 0!==x.value,j=i.useRef(null),T=u(j,t),V=i.useRef(0),S=i.useRef(),A=function(){var e,t,a,i,l,s,u,d,h,x,g,y=j.current,v=r&&S.current?S.current:b(y);if(v){S.current=v;var w=(e=y.value||y.placeholder||"x",void 0===(t=o)&&(t=1),void 0===(a=n)&&(a=1/0),p||((p=document.createElement("textarea")).setAttribute("tabindex","-1"),p.setAttribute("aria-hidden","true"),c(p)),null===p.parentNode&&document.body.appendChild(p),i=v.paddingSize,l=v.borderSize,u=(s=v.sizingStyle).boxSizing,Object.keys(s).forEach(function(e){p.style[e]=s[e]}),c(p),p.value=e,d=m(p,v),p.value=e,d=m(p,v),p.value="x",x=(h=p.scrollHeight-i)*t,"border-box"===u&&(x=x+i+l),d=Math.max(x,d),g=h*a,"border-box"===u&&(g=g+i+l),[d=Math.min(g,d),h]),z=w[0],T=w[1];V.current!==z&&(V.current=z,y.style.setProperty("height",z+"px","important"),f(z,{rowHeight:T}))}};return i.useLayoutEffect(A),y(j,function(){if(!g){var e=j.current.value;requestAnimationFrame(function(){var t=j.current;t&&e!==t.value&&A()})}}),v(A),w(A),i.createElement("textarea",a({},x,{onChange:function(e){g||A(),s(e)},ref:T}))}),T=r(24808),V=r(29686),S=r(6754),A=r(87059);let R={},E=(0,S.P9)((e,t)=>{let{autosize:r,maxRows:a,minRows:i,__staticSelector:o,resize:l,...s}=(0,V.Y)("Textarea",R,e),u=r&&"test"!==(0,T._)();return(0,n.jsx)(A.O,{component:u?j:"textarea",ref:t,...s,__staticSelector:o||"Textarea",multiline:!0,"data-no-overflow":r&&void 0===a||void 0,__vars:{"--input-resize":l},...u?{maxRows:a,minRows:i}:{}})});E.classes=A.O.classes,E.displayName="@mantine/core/Textarea"}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,39699,68831,90636,46593,38792],()=>t(99125)),_N_E=e.O()}]);