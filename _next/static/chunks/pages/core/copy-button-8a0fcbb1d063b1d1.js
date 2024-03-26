(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[98455],{64596:function(e,o,t){"use strict";t.d(o,{Z:function(){return n}});var n=(0,t(99882).Z)("copy","IconCopy",[["path",{d:"M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2",key:"svg-1"}]])},16684:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/copy-button",function(){return t(66016)}])},66016:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return x}});var n=t(52322),i=t(45392),c=t(2784),r=t(87385),l=t(17115);let a=`
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
`,d={type:"code",component:function(){return c.createElement(r.q,{value:"https://mantine.dev"},({copied:e,copy:o})=>c.createElement(l.z,{color:e?"teal":"blue",onClick:o},e?"Copied url":"Copy url"))},centered:!0,code:a};var s=t(92856),p=t(64596),u=t(893),h=t(54813),m=t(58898);let y=`
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

`,f={type:"code",component:function(){return c.createElement(r.q,{value:"https://mantine.dev",timeout:2e3},({copied:e,copy:o})=>c.createElement(u.u,{label:e?"Copied":"Copy",withArrow:!0,position:"right"},c.createElement(h.A,{color:e?"teal":"gray",variant:"subtle",onClick:o},e?c.createElement(s.Z,{style:{width:(0,m.h)(16)}}):c.createElement(p.Z,{style:{width:(0,m.h)(16)}}))))},centered:!0,code:y};var v=t(79016),C=t(33638);let j=(0,v.A)(C.us.CopyButton);function w(e){let o={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components},{Demo:t,ServerComponentsIncompatible:c}=o;return t||b("Demo",!0),c||b("ServerComponentsIncompatible",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"CopyButton"})," is based on ",(0,n.jsx)(o.a,{href:"/hooks/use-clipboard/",children:"use-clipboard"})," hook.\nIts children is a function that receives an object with the following properties:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"copied"})," – boolean value that indicates that a given value was recently copied to the clipboard, it resets after a given timeout (defaults to 500ms)"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"copy"})," – function that should be called to copy given value to clipboard"]}),"\n"]}),"\n",(0,n.jsx)(t,{data:d}),"\n",(0,n.jsx)(o.h2,{id:"security",children:"Security"}),"\n",(0,n.jsxs)(o.p,{children:["Due to security reasons ",(0,n.jsx)(o.code,{children:"CopyButton"})," component will not work in iframes and may not work with local files opened with ",(0,n.jsx)(o.code,{children:"file://"})," protocol\n(component will work fine with local websites that are using ",(0,n.jsx)(o.code,{children:"http://"})," protocol). You can learn more about ",(0,n.jsx)(o.code,{children:"navigator.clipboard"})," ",(0,n.jsx)(o.a,{href:"https://web.dev/async-clipboard/",children:"here"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"timeout",children:"Timeout"}),"\n",(0,n.jsxs)(o.p,{children:["You can provide a custom ",(0,n.jsx)(o.code,{children:"copied"})," reset ",(0,n.jsx)(o.code,{children:"timeout"}),":"]}),"\n",(0,n.jsx)(t,{data:f}),"\n",(0,n.jsx)(c,{component:"CopyButton"})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(j,{...e,children:(0,n.jsx)(w,{...e})})}function b(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=16684)}),_N_E=e.O()}]);