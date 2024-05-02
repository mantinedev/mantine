(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[98455],{64596:function(o,e,t){"use strict";t.d(e,{Z:function(){return n}});var n=(0,t(99882).Z)("copy","IconCopy",[["path",{d:"M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2",key:"svg-1"}]])},16684:function(o,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/copy-button",function(){return t(66016)}])},66016:function(o,e,t){"use strict";t.r(e),t.d(e,{default:function(){return C}});var n=t(52322),i=t(45392),c=t(87385),r=t(17115);let l=`
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
`,s={type:"code",component:function(){return(0,n.jsx)(c.q,{value:"https://mantine.dev",children:({copied:o,copy:e})=>(0,n.jsx)(r.z,{color:o?"teal":"blue",onClick:e,children:o?"Copied url":"Copy url"})})},centered:!0,code:l};var d=t(92856),a=t(64596),p=t(893),u=t(54813),h=t(58898);let y=`
import { CopyButton, ActionIcon, Tooltip, rem } from '@mantine/core';
import { IconCopy, IconCheck } from '@tabler/icons-react';

function Demo() {
  return (
    <CopyButton value="https://mantine.dev" timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
          <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
            {copied ? (
              <IconCheck style={{ width: rem(16) }} />
            ) : (
              <IconCopy style={{ width: rem(16) }} />
            )}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButton>
  );
}

`,m={type:"code",component:function(){return(0,n.jsx)(c.q,{value:"https://mantine.dev",timeout:2e3,children:({copied:o,copy:e})=>(0,n.jsx)(p.u,{label:o?"Copied":"Copy",withArrow:!0,position:"right",children:(0,n.jsx)(u.A,{color:o?"teal":"gray",variant:"subtle",onClick:e,children:o?(0,n.jsx)(d.Z,{style:{width:(0,h.h)(16)}}):(0,n.jsx)(a.Z,{style:{width:(0,h.h)(16)}})})})})},centered:!0,code:y};var j=t(79016),f=t(33638);let x=(0,j.A)(f.us.CopyButton);function v(o){let e={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.a)(),...o.components},{Demo:t,ServerComponentsIncompatible:c}=e;return t||w("Demo",!0),c||w("ServerComponentsIncompatible",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"CopyButton"})," is based on ",(0,n.jsx)(e.a,{href:"/hooks/use-clipboard/",children:"use-clipboard"})," hook.\nIts children is a function that receives an object with the following properties:"]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"copied"})," – boolean value that indicates that a given value was recently copied to the clipboard, it resets after a given timeout (defaults to 500ms)"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"copy"})," – function that should be called to copy given value to clipboard"]}),"\n"]}),"\n",(0,n.jsx)(t,{data:s}),"\n",(0,n.jsx)(e.h2,{id:"security",children:"Security"}),"\n",(0,n.jsxs)(e.p,{children:["Due to security reasons ",(0,n.jsx)(e.code,{children:"CopyButton"})," component will not work in iframes and may not work with local files opened with ",(0,n.jsx)(e.code,{children:"file://"})," protocol\n(component will work fine with local websites that are using ",(0,n.jsx)(e.code,{children:"http://"})," protocol). You can learn more about ",(0,n.jsx)(e.code,{children:"navigator.clipboard"})," ",(0,n.jsx)(e.a,{href:"https://web.dev/async-clipboard/",children:"here"}),"."]}),"\n",(0,n.jsx)(e.h2,{id:"timeout",children:"Timeout"}),"\n",(0,n.jsxs)(e.p,{children:["You can provide a custom ",(0,n.jsx)(e.code,{children:"copied"})," reset ",(0,n.jsx)(e.code,{children:"timeout"}),":"]}),"\n",(0,n.jsx)(t,{data:m}),"\n",(0,n.jsx)(c,{component:"CopyButton"})]})}function C(){let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(x,{...o,children:(0,n.jsx)(v,{...o})})}function w(o,e){throw Error("Expected "+(e?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(o){o.O(0,[57938,17454,47747,49774,92888,40179],function(){return o(o.s=16684)}),_N_E=o.O()}]);