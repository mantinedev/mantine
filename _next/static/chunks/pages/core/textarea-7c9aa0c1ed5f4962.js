(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[90705],{81884:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/textarea",function(){return r(41467)}])},41467:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n=r(52322),a=r(45392),i=r(8378);let o={type:"configurator",component:function(e){return(0,n.jsx)(i.g,{...e,placeholder:"Input placeholder"})},code:`
import { Textarea } from '@mantine/core';


function Demo() {
  return (
    <Textarea
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,centered:!0,maxWidth:340,controls:r(76528).pc},l={type:"code",code:`
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

`,component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.g,{placeholder:"Autosize with no rows limit",label:"Autosize with no rows limit",autosize:!0,minRows:2}),(0,n.jsx)(i.g,{label:"Autosize with 4 rows max",placeholder:"Autosize with 4 rows max",autosize:!0,minRows:2,maxRows:4,mt:"md"})]})},maxWidth:340,centered:!0},s={type:"code",code:`
import { Textarea } from '@mantine/core';

function Demo() {
  return <Textarea resize="vertical" label="Disabled" placeholder="Your comment" />;
}
`,component:function(){return(0,n.jsx)(i.g,{resize:"vertical",label:"Disabled",placeholder:"Your comment"})},centered:!0,maxWidth:340},u={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.g,{label:"Boolean error",placeholder:"Boolean error",error:!0}),(0,n.jsx)(i.g,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"})]})},maxWidth:340,centered:!0,code:`
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
`},c={type:"code",code:`
import { Textarea } from '@mantine/core';

function Demo() {
  return <Textarea label="Disabled" placeholder="Your comment" disabled />;
}
`,component:function(){return(0,n.jsx)(i.g,{label:"Disabled",placeholder:"Your comment",disabled:!0})},centered:!0,maxWidth:340};var d=r(89868),p=r(58898),m=r(10629);let h=`
import { IconAt } from '@tabler/icons-react';
import { Textarea, rem } from '@mantine/core';

function Demo() {
  return (
    <Textarea
      label="Label"
      placeholder="Textarea"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} />}
      autosize
      {{props}}
    />
  );
}
`,f={type:"styles-api",data:m.g,component:function(e){return(0,n.jsx)(i.g,{label:"Label",placeholder:"Textarea",description:"Description",error:"Error",withAsterisk:!0,leftSection:(0,n.jsx)(d.Z,{style:{width:(0,p.h)(18),height:(0,p.h)(18)}}),autosize:!0,...e})},code:h,centered:!0,maxWidth:340};var x=r(25071),b=r(15019);let g=(0,x.A)(b.us.Textarea);function y(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Demo:r,GetElementRef:i,InputAccessibility:d,InputFeatures:p,StylesApiSelectors:m}=t;return r||w("Demo",!0),i||w("GetElementRef",!0),d||w("InputAccessibility",!0),p||w("InputFeatures",!0),m||w("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(p,{component:"Textarea",element:"textarea"}),"\n",(0,n.jsx)(r,{data:o}),"\n",(0,n.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Textarea } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return (\n    <Textarea\n      value={value}\n      onChange={(event) => setValue(event.currentTarget.value)}\n    />\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"autosize",children:"Autosize"}),"\n",(0,n.jsxs)(t.p,{children:["Autosize textarea uses ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/react-textarea-autosize",children:"react-textarea-autosize"})," package.\nTextarea height will grow until maxRows are reached or indefinitely if maxRows not set."]}),"\n",(0,n.jsx)(r,{data:l}),"\n",(0,n.jsx)(t.h2,{id:"enable-resize",children:"Enable resize"}),"\n",(0,n.jsxs)(t.p,{children:["By default, ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/resize",children:"resize"})," is ",(0,n.jsx)(t.code,{children:"none"}),",\nto enable it set ",(0,n.jsx)(t.code,{children:"resize"})," prop to ",(0,n.jsx)(t.code,{children:"vertical"})," or ",(0,n.jsx)(t.code,{children:"both"}),":"]}),"\n",(0,n.jsx)(r,{data:s}),"\n",(0,n.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,n.jsx)(r,{data:u}),"\n",(0,n.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,n.jsx)(r,{data:c}),"\n",(0,n.jsx)(m,{component:"Textarea"}),"\n",(0,n.jsx)(r,{data:f}),"\n",(0,n.jsx)(i,{component:"Textarea",refType:"textarea"}),"\n",(0,n.jsx)(d,{component:"Textarea"})]})}function v(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(g,{...e,children:(0,n.jsx)(y,{...e})})}function w(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},89868:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license @tabler/icons-react v3.3.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var n=(0,r(73681).Z)("outline","at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},76528:function(e,t,r){"use strict";r.d(t,{Mt:function(){return n},nW:function(){return a},pc:function(){return i}});let n=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],a=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],i=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},8378:function(e,t,r){"use strict";r.d(t,{g:function(){return A}});var n=r(52322);function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var i=r(2784),o=i.useLayoutEffect,l=function(e){var t=i.useRef(e);return o(function(){t.current=e}),t},s=function(e,t){if("function"==typeof e){e(t);return}e.current=t},u=function(e,t){var r=(0,i.useRef)();return(0,i.useCallback)(function(n){e.current=n,r.current&&s(r.current,null),r.current=t,t&&s(t,n)},[t])},c={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},d=function(e){Object.keys(c).forEach(function(t){e.style.setProperty(t,c[t],"important")})},p=null,m=function(e,t){var r=e.scrollHeight;return"border-box"===t.sizingStyle.boxSizing?r+t.borderSize:r-t.paddingSize},h=function(){},f=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],x=!!document.documentElement.currentStyle,b=function(e){var t=window.getComputedStyle(e);if(null===t)return null;var r=f.reduce(function(e,r){return e[r]=t[r],e},{}),n=r.boxSizing;if(""===n)return null;x&&"border-box"===n&&(r.width=parseFloat(r.width)+parseFloat(r.borderRightWidth)+parseFloat(r.borderLeftWidth)+parseFloat(r.paddingRight)+parseFloat(r.paddingLeft)+"px");var a=parseFloat(r.paddingBottom)+parseFloat(r.paddingTop),i=parseFloat(r.borderBottomWidth)+parseFloat(r.borderTopWidth);return{sizingStyle:r,paddingSize:a,borderSize:i}};function g(e,t,r){var n=l(r);i.useLayoutEffect(function(){var r=function(e){return n.current(e)};if(e)return e.addEventListener(t,r),function(){return e.removeEventListener(t,r)}},[])}var y=function(e){g(window,"resize",e)},v=function(e){g(document.fonts,"loadingdone",e)},w=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],z=i.forwardRef(function(e,t){var r=e.cacheMeasurements,n=e.maxRows,o=e.minRows,l=e.onChange,s=void 0===l?h:l,c=e.onHeightChange,f=void 0===c?h:c,x=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,w),g=void 0!==x.value,z=i.useRef(null),j=u(z,t),T=i.useRef(0),V=i.useRef(),S=function(){var e,t,a,i,l,s,u,c,h,x,g,y=z.current,v=r&&V.current?V.current:b(y);if(v){V.current=v;var w=(e=y.value||y.placeholder||"x",void 0===(t=o)&&(t=1),void 0===(a=n)&&(a=1/0),p||((p=document.createElement("textarea")).setAttribute("tabindex","-1"),p.setAttribute("aria-hidden","true"),d(p)),null===p.parentNode&&document.body.appendChild(p),i=v.paddingSize,l=v.borderSize,u=(s=v.sizingStyle).boxSizing,Object.keys(s).forEach(function(e){p.style[e]=s[e]}),d(p),p.value=e,c=m(p,v),p.value=e,c=m(p,v),p.value="x",x=(h=p.scrollHeight-i)*t,"border-box"===u&&(x=x+i+l),c=Math.max(x,c),g=h*a,"border-box"===u&&(g=g+i+l),[c=Math.min(g,c),h]),j=w[0],S=w[1];T.current!==j&&(T.current=j,y.style.setProperty("height",j+"px","important"),f(j,{rowHeight:S}))}};return i.useLayoutEffect(S),y(S),v(S),i.createElement("textarea",a({},x,{onChange:function(e){g||S(),s(e)},ref:j}))}),j=r(66596),T=r(38483),V=r(82027),S=r(73063);let R={},A=(0,V.d5)((e,t)=>{let{autosize:r,maxRows:a,minRows:i,__staticSelector:o,resize:l,...s}=(0,T.w)("Textarea",R,e),u=r&&"test"!==(0,j.d)();return(0,n.jsx)(S.M,{component:u?z:"textarea",ref:t,...s,__staticSelector:o||"Textarea",multiline:!0,"data-no-overflow":r&&void 0===a||void 0,__vars:{"--input-resize":l},...u?{maxRows:a,minRows:i}:{}})});A.classes=S.M.classes,A.displayName="@mantine/core/Textarea"}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=81884)}),_N_E=e.O()}]);