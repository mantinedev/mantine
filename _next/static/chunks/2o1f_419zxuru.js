(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,o=>{"use strict";var e=Object.defineProperty;o.s(["__exportAll",0,(o,t)=>{let n={};for(var i in o)e(n,i,{get:o[i],enumerable:!0});return t||e(n,Symbol.toStringTag,{value:"Module"}),n}])},286558,o=>{"use strict";var e=o.i(44091),t=o.i(334996),n=o.i(391398);let i={timeout:1e3};function c(o){let{children:c,timeout:r,value:l,...s}=(0,e.useProps)("CopyButton",i,o),p=(0,t.useClipboard)({timeout:r});return(0,n.jsx)(n.Fragment,{children:c({copy:()=>p.copy(l),copied:p.copied,...s})})}c.displayName="@mantine/core/CopyButton",o.s(["CopyButton",0,c])},672155,o=>{"use strict";var e=o.i(391398),t=o.i(38856),n=o.i(648863),i=o.i(485108),c=o.i(286558);let r={type:"code",component:function(){return(0,e.jsx)(c.CopyButton,{value:"https://mantine.dev",children:({copied:o,copy:t})=>(0,e.jsx)(i.Button,{color:o?"teal":"blue",onClick:t,children:o?"Copied url":"Copy url"})})},centered:!0,code:`
import { CopyButton, Button } from '@mantine/core';

function Demo() {
  return (
    <CopyButton value="https://mantine.dev">
      {({ copied, copy }) => (
        <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
          {copied ? 'Copied url' : 'Copy url'}
        </Button>
      )}
    </CopyButton>
  );
}
`};var l=o.i(837048),s=o.i(289058),p=o.i(658109),a=o.i(431868);let d={type:"code",component:function(){return(0,e.jsx)(c.CopyButton,{value:"https://mantine.dev",timeout:2e3,children:({copied:o,copy:t})=>(0,e.jsx)(a.Tooltip,{label:o?"Copied":"Copy",withArrow:!0,position:"right",children:(0,e.jsx)(p.ActionIcon,{color:o?"teal":"gray",variant:"subtle",onClick:t,children:o?(0,e.jsx)(l.CheckIcon,{size:16}):(0,e.jsx)(s.CopyIcon,{size:16})})})})},centered:!0,code:`
import { ActionIcon, CopyButton, Tooltip } from '@mantine/core';
import { CopyIcon, CheckIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <CopyButton value="https://mantine.dev" timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
          <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
            {copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButton>
  );
}

`};var u=(0,n.__exportAll)({timeout:()=>d,usage:()=>r});o.i(603441);var h=o.i(62558);o.i(457450);var m=o.i(418026);let y=(0,h.Layout)(m.MDX_DATA.CopyButton);function j(o){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.useMDXComponents)(),...o.components},{Demo:i,ServerComponentsIncompatible:c}=n;return i||C("Demo",!0),c||C("ServerComponentsIncompatible",!0),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.code,{children:"CopyButton"})," is based on the ",(0,e.jsx)(n.a,{href:"/hooks/use-clipboard/",children:"use-clipboard"})," hook.\nIts children is a function that receives an object with the following properties:"]}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"copied"})," – boolean value that indicates that a given value was recently copied to the clipboard, it resets after a given timeout (defaults to 500ms)"]}),"\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"copy"})," – function that should be called to copy the given value to the clipboard"]}),"\n"]}),"\n",(0,e.jsx)(i,{data:u.usage}),"\n",(0,e.jsx)(n.h2,{id:"security",children:"Security"}),"\n",(0,e.jsxs)(n.p,{children:["Due to security reasons, the ",(0,e.jsx)(n.code,{children:"CopyButton"})," component will not work in iframes and may not work with local files opened with the ",(0,e.jsx)(n.code,{children:"file://"})," protocol\n(the component will work fine with local websites that are using the ",(0,e.jsx)(n.code,{children:"http://"})," protocol). You can learn more about ",(0,e.jsx)(n.code,{children:"navigator.clipboard"})," ",(0,e.jsx)(n.a,{href:"https://web.dev/async-clipboard/",children:"here"}),"."]}),"\n",(0,e.jsx)(n.h2,{id:"timeout",children:"Timeout"}),"\n",(0,e.jsxs)(n.p,{children:["You can provide a custom ",(0,e.jsx)(n.code,{children:"copied"})," reset ",(0,e.jsx)(n.code,{children:"timeout"}),":"]}),"\n",(0,e.jsx)(i,{data:u.timeout}),"\n",(0,e.jsx)(c,{component:"CopyButton"})]})}function C(o,e){throw Error("Expected "+(e?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}o.s(["default",0,function(o={}){return(0,e.jsx)(y,{...o,children:(0,e.jsx)(j,{...o})})}],672155)},73626,(o,e,t)=>{let n="/core/copy-button";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>o.r(672155)]),e.hot&&e.hot.dispose(function(){window.__NEXT_P.push([n])})},648761,o=>{o.v(e=>Promise.all(["static/chunks/22379_btw709h.js"].map(e=>o.l(e))).then(()=>e(493594)))},828805,o=>{o.v(e=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(e=>o.l(e))).then(()=>e(879466)))}]);