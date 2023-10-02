(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8455],{33507:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},955:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/copy-button",function(){return o(96151)}])},96151:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return C}});var n=o(85893),c=o(11151),i=o(19905),r=o(9904),a=o(67294),l=o(79810),s=o(14469);let d=`
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
`,h={type:"code",component:function(){return a.createElement(l.q,{value:"https://mantine.dev"},({copied:e,copy:t})=>a.createElement(s.z,{color:e?"teal":"blue",onClick:t},e?"Copied url":"Copy url"))},centered:!0,code:d};var p=o(46842),u=o(89363),v=o(72622),y=o(16659),f=(0,o(54764).Z)("copy","IconCopy",[["path",{d:"M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2",key:"svg-1"}]]);let m=`
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

`,g={type:"code",component:function(){return a.createElement(l.q,{value:"https://mantine.dev",timeout:2e3},({copied:e,copy:t})=>a.createElement(p.u,{label:e?"Copied":"Copy",withArrow:!0,position:"right"},a.createElement(u.A,{color:e?"teal":"gray",variant:"subtle",onClick:t},e?a.createElement(y.Z,{style:{width:(0,v.h)(16)}}):a.createElement(f,{style:{width:(0,v.h)(16)}}))))},centered:!0,code:m},k=(0,i.A)(r.us.CopyButton);function w(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a",ul:"ul",li:"li"},(0,c.ah)(),e.components),{Demo:o,ServerComponentsIncompatible:i}=t;return o||j("Demo",!0),i||j("ServerComponentsIncompatible",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"CopyButton"})," is based on ",(0,n.jsx)(t.a,{href:"/hooks/use-clipboard/",children:"use-clipboard"})," hook.\nIts children is a function that receives an object with the following properties:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"copied"})," – boolean value that indicates that a given value was recently copied to the clipboard, it resets after a given timeout (defaults to 500ms)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"copy"})," – function that should be called to copy given value to clipboard"]}),"\n"]}),"\n",(0,n.jsx)(o,{data:h}),"\n",(0,n.jsx)(t.h2,{id:"security",children:"Security"}),"\n",(0,n.jsxs)(t.p,{children:["Due to security reasons ",(0,n.jsx)(t.code,{children:"CopyButton"})," component will not work in iframes and may not work with local files opened with ",(0,n.jsx)(t.code,{children:"file://"})," protocol\n(component will work fine with local websites that are using ",(0,n.jsx)(t.code,{children:"http://"})," protocol). You can learn more about ",(0,n.jsx)(t.code,{children:"navigator.clipboard"})," ",(0,n.jsx)(t.a,{href:"https://web.dev/async-clipboard/",children:"here"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"timeout",children:"Timeout"}),"\n",(0,n.jsxs)(t.p,{children:["You can provide a custom ",(0,n.jsx)(t.code,{children:"copied"})," reset ",(0,n.jsx)(t.code,{children:"timeout"}),":"]}),"\n",(0,n.jsx)(o,{data:g}),"\n",(0,n.jsx)(i,{component:"CopyButton"})]})}var C=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(k,Object.assign({},e,{children:(0,n.jsx)(w,e)}))};function j(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},16659:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(54764).Z)("check","IconCheck",[["path",{d:"M5 12l5 5l10 -10",key:"svg-0"}]])}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=955)}),_N_E=e.O()}]);