(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[90705],{35661:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(99882).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},81884:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/textarea",function(){return r(41467)}])},41467:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return S}});var n=r(52322),a=r(45392),i=r(2784),o=r(8378),l=r(76528);let s=`
import { Textarea } from '@mantine/core';


function Demo() {
  return (
    <Textarea
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,u={type:"configurator",component:function(e){return i.createElement(o.g,{...e,placeholder:"Input placeholder"})},code:s,centered:!0,maxWidth:340,controls:l.pc},c=`
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

`,d={type:"code",code:c,component:function(){return i.createElement(i.Fragment,null,i.createElement(o.g,{placeholder:"Autosize with no rows limit",label:"Autosize with no rows limit",autosize:!0,minRows:2}),i.createElement(o.g,{label:"Autosize with 4 rows max",placeholder:"Autosize with 4 rows max",autosize:!0,minRows:2,maxRows:4,mt:"md"}))},maxWidth:340,centered:!0},p=`
import { Textarea } from '@mantine/core';

function Demo() {
  return <Textarea resize="vertical" label="Disabled" placeholder="Your comment" />;
}
`,m={type:"code",code:p,component:function(){return i.createElement(o.g,{resize:"vertical",label:"Disabled",placeholder:"Your comment"})},centered:!0,maxWidth:340},h=`
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
`,f={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(o.g,{label:"Boolean error",placeholder:"Boolean error",error:!0}),i.createElement(o.g,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"}))},maxWidth:340,centered:!0,code:h},x=`
import { Textarea } from '@mantine/core';

function Demo() {
  return <Textarea label="Disabled" placeholder="Your comment" disabled />;
}
`,b={type:"code",code:x,component:function(){return i.createElement(o.g,{label:"Disabled",placeholder:"Your comment",disabled:!0})},centered:!0,maxWidth:340};var g=r(35661),y=r(58898),v=r(10629);let w=`
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
`,z={type:"styles-api",data:v.g,component:function(e){return i.createElement(o.g,{label:"Label",placeholder:"Textarea",description:"Description",error:"Error",withAsterisk:!0,leftSection:i.createElement(g.Z,{style:{width:(0,y.h)(18),height:(0,y.h)(18)}}),autosize:!0,...e})},code:w,centered:!0,maxWidth:340};var j=r(79016),T=r(33638);let V=(0,j.A)(T.us.Textarea);function E(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Demo:r,GetElementRef:i,InputAccessibility:o,InputFeatures:l,StylesApiSelectors:s}=t;return r||R("Demo",!0),i||R("GetElementRef",!0),o||R("InputAccessibility",!0),l||R("InputFeatures",!0),s||R("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(l,{component:"Textarea",element:"textarea"}),"\n",(0,n.jsx)(r,{data:u}),"\n",(0,n.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Textarea } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return (\n    <Textarea\n      value={value}\n      onChange={(event) => setValue(event.currentTarget.value)}\n    />\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"autosize",children:"Autosize"}),"\n",(0,n.jsxs)(t.p,{children:["Autosize textarea uses ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/react-textarea-autosize",children:"react-textarea-autosize"})," package.\nTextarea height will grow until maxRows are reached or indefinitely if maxRows not set."]}),"\n",(0,n.jsx)(r,{data:d}),"\n",(0,n.jsx)(t.h2,{id:"enable-resize",children:"Enable resize"}),"\n",(0,n.jsxs)(t.p,{children:["By default, ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/resize",children:"resize"})," is ",(0,n.jsx)(t.code,{children:"none"}),",\nto enable it set ",(0,n.jsx)(t.code,{children:"resize"})," prop to ",(0,n.jsx)(t.code,{children:"vertical"})," or ",(0,n.jsx)(t.code,{children:"both"}),":"]}),"\n",(0,n.jsx)(r,{data:m}),"\n",(0,n.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,n.jsx)(r,{data:f}),"\n",(0,n.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,n.jsx)(r,{data:b}),"\n",(0,n.jsx)(s,{component:"Textarea"}),"\n",(0,n.jsx)(r,{data:z}),"\n",(0,n.jsx)(i,{component:"Textarea",refType:"textarea"}),"\n",(0,n.jsx)(o,{component:"Textarea"})]})}function S(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(V,{...e,children:(0,n.jsx)(E,{...e})})}function R(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},76528:function(e,t,r){"use strict";r.d(t,{Mt:function(){return n},nW:function(){return a},pc:function(){return i}});let n=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],a=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],i=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},8378:function(e,t,r){"use strict";r.d(t,{g:function(){return S}});var n=r(2784);function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var i=n.useLayoutEffect,o=function(e){var t=n.useRef(e);return i(function(){t.current=e}),t},l=function(e,t){if("function"==typeof e){e(t);return}e.current=t},s=function(e,t){var r=(0,n.useRef)();return(0,n.useCallback)(function(n){e.current=n,r.current&&l(r.current,null),r.current=t,t&&l(t,n)},[t])},u={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},c=function(e){Object.keys(u).forEach(function(t){e.style.setProperty(t,u[t],"important")})},d=null,p=function(e,t){var r=e.scrollHeight;return"border-box"===t.sizingStyle.boxSizing?r+t.borderSize:r-t.paddingSize},m=function(){},h=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],f=!!document.documentElement.currentStyle,x=function(e){var t=window.getComputedStyle(e);if(null===t)return null;var r=h.reduce(function(e,r){return e[r]=t[r],e},{}),n=r.boxSizing;if(""===n)return null;f&&"border-box"===n&&(r.width=parseFloat(r.width)+parseFloat(r.borderRightWidth)+parseFloat(r.borderLeftWidth)+parseFloat(r.paddingRight)+parseFloat(r.paddingLeft)+"px");var a=parseFloat(r.paddingBottom)+parseFloat(r.paddingTop),i=parseFloat(r.borderBottomWidth)+parseFloat(r.borderTopWidth);return{sizingStyle:r,paddingSize:a,borderSize:i}};function b(e,t,r){var a=o(r);n.useLayoutEffect(function(){var r=function(e){return a.current(e)};if(e)return e.addEventListener(t,r),function(){return e.removeEventListener(t,r)}},[])}var g=function(e){b(window,"resize",e)},y=function(e){b(document.fonts,"loadingdone",e)},v=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],w=n.forwardRef(function(e,t){var r=e.cacheMeasurements,i=e.maxRows,o=e.minRows,l=e.onChange,u=void 0===l?m:l,h=e.onHeightChange,f=void 0===h?m:h,b=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,v),w=void 0!==b.value,z=n.useRef(null),j=s(z,t),T=n.useRef(0),V=n.useRef(),E=function(){var e,t,n,a,l,s,u,m,h,b,g,y=z.current,v=r&&V.current?V.current:x(y);if(v){V.current=v;var w=(e=y.value||y.placeholder||"x",void 0===(t=o)&&(t=1),void 0===(n=i)&&(n=1/0),d||((d=document.createElement("textarea")).setAttribute("tabindex","-1"),d.setAttribute("aria-hidden","true"),c(d)),null===d.parentNode&&document.body.appendChild(d),a=v.paddingSize,l=v.borderSize,u=(s=v.sizingStyle).boxSizing,Object.keys(s).forEach(function(e){d.style[e]=s[e]}),c(d),d.value=e,m=p(d,v),d.value=e,m=p(d,v),d.value="x",b=(h=d.scrollHeight-a)*t,"border-box"===u&&(b=b+a+l),m=Math.max(b,m),g=h*n,"border-box"===u&&(g=g+a+l),[m=Math.min(g,m),h]),j=w[0],E=w[1];T.current!==j&&(T.current=j,y.style.setProperty("height",j+"px","important"),f(j,{rowHeight:E}))}};return n.useLayoutEffect(E),g(E),y(E),n.createElement("textarea",a({},b,{onChange:function(e){w||E(),u(e)},ref:j}))}),z=r(66596),j=r(38483),T=r(82027),V=r(73063);let E={},S=(0,T.d)((e,t)=>{let{autosize:r,maxRows:a,minRows:i,__staticSelector:o,resize:l,...s}=(0,j.w)("Textarea",E,e),u=r&&"test"!==(0,z.d)();return n.createElement(V.M,{component:u?w:"textarea",ref:t,...s,__staticSelector:o||"Textarea",multiline:!0,"data-no-overflow":r&&void 0===a||void 0,__vars:{"--input-resize":l},...u?{maxRows:a,minRows:i}:{}})});S.classes=V.M.classes,S.displayName="@mantine/core/Textarea"}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=81884)}),_N_E=e.O()}]);