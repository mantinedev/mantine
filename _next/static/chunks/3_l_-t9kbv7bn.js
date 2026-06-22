(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var o=Object.defineProperty;e.s(["__exportAll",0,(e,i)=>{let t={};for(var n in e)o(t,n,{get:e[n],enumerable:!0});return i||o(t,Symbol.toStringTag,{value:"Module"}),t}])},541772,e=>{"use strict";var o=e.i(191788);e.s(["useDisclosure",0,function(e=!1,i={}){let[t,n]=(0,o.useState)(e),s=(0,o.useCallback)(()=>{n(e=>e||(i.onOpen?.(),!0))},[i.onOpen]),l=(0,o.useCallback)(()=>{n(e=>e?(i.onClose?.(),!1):e)},[i.onClose]);return[t,{open:s,close:l,toggle:(0,o.useCallback)(()=>{t?l():s()},[l,s,t]),set:n}]}])},113380,e=>{"use strict";var o=e.i(391398),i=e.i(38856),t=e.i(648863),n=e.i(485108),s=e.i(433512),l=e.i(481178),r=e.i(44091),a=e.i(391466),c=e.i(275519),d=e.i(470743),u=e.i(34515),p=e.i(802046),h=e.i(976550),m={root:"m_e2125a27",closeButton:"m_5abab665"};let x={shadow:"md",p:"md",withBorder:!0,transitionProps:{transition:"pop-top-right",duration:200},position:{bottom:30,right:30}},g=(0,l.createVarsResolver)((e,{size:o})=>({root:{"--dialog-size":(0,s.getSize)(o,"dialog-size")}})),f=(0,c.factory)(e=>{let i=(0,r.useProps)("Dialog",x,e),{classNames:t,className:n,style:s,styles:l,unstyled:c,vars:f,zIndex:j,position:b,keepMounted:D,opened:y,transitionProps:w,withCloseButton:v,withinPortal:C,children:T,onClose:_,portalProps:k,attributes:B,...P}=i,S=(0,a.useStyles)({name:"Dialog",classes:m,props:i,className:n,style:s,classNames:t,styles:l,unstyled:c,attributes:B,vars:f,varsResolver:g});return(0,o.jsx)(h.Affix,{zIndex:j,position:b,withinPortal:C,portalProps:k,unstyled:c,children:(0,o.jsx)(u.Transition,{keepMounted:D,mounted:y,...w,children:e=>(0,o.jsxs)(d.Paper,{unstyled:c,...S("root",{style:e}),...P,children:[v&&(0,o.jsx)(p.CloseButton,{onClick:_,unstyled:c,...S("closeButton")}),T]})})})});f.classes=m,f.varsResolver=g,f.displayName="@mantine/core/Dialog";var j=e.i(725695),b=e.i(883364),D=e.i(841209),y=e.i(541772);let w={type:"code",component:function(){let[e,{toggle:i,close:t}]=(0,y.useDisclosure)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(j.Group,{justify:"center",children:(0,o.jsx)(n.Button,{onClick:i,children:"Toggle dialog"})}),(0,o.jsxs)(f,{opened:e,withCloseButton:!0,onClose:t,size:"lg",position:{bottom:20,left:20},children:[(0,o.jsx)(b.Text,{size:"sm",mb:"xs",fw:500,children:"Subscribe to email newsletter"}),(0,o.jsxs)(j.Group,{align:"flex-end",children:[(0,o.jsx)(D.TextInput,{placeholder:"hello@gluesticker.com",style:{flex:1}}),(0,o.jsx)(n.Button,{onClick:t,children:"Subscribe"})]})]})]})},code:`
import { useDisclosure } from '@mantine/hooks';
import { Dialog, Group, Button, TextInput, Text } from '@mantine/core';

function Demo() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <Group justify="center">
        <Button onClick={toggle}>Toggle dialog</Button>
      </Group>

      <Dialog
        opened={opened}
        withCloseButton
        onClose={close}
        size="lg"
        position={{ bottom: 20, left: 20 }}
      >
        <Text size="sm" mb="xs" fw={500}>
          Subscribe to email newsletter
        </Text>

        <Group align="flex-end">
          <TextInput placeholder="hello@gluesticker.com" style={{ flex: 1 }} />
          <Button onClick={close}>Subscribe</Button>
        </Group>
      </Dialog>
    </>
  );
}
`};var v=(0,t.__exportAll)({usage:()=>w});e.i(603441);var C=e.i(62558);e.i(457450);var T=e.i(418026);let _=(0,C.Layout)(T.MDX_DATA.Dialog);function k(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.useMDXComponents)(),...e.components},{Demo:n}=t;return n||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Dialog"})," is a simplified version of the ",(0,o.jsx)(t.a,{href:"/core/modal/",children:"Modal"})," component.\nIt does not include most of the accessibility and usability ",(0,o.jsx)(t.a,{href:"/core/modal/",children:"Modal"})," features:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Focus trap is not available"}),"\n",(0,o.jsx)(t.li,{children:"Does not close on click outside"}),"\n",(0,o.jsx)(t.li,{children:"Does not have an overlay"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"Dialog"})," to attract attention with non-important information or actions.\nFor example, you can create an email subscription form:"]}),"\n",(0,o.jsx)(n,{data:v.usage}),"\n",(0,o.jsx)(t.h2,{id:"change-position",children:"Change position"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Dialog"})," is rendered in ",(0,o.jsx)(t.a,{href:"/core/portal/",children:"Portal"})," and has a fixed position. Set the ",(0,o.jsx)(t.code,{children:"position"})," prop to control the dialog's position:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { Dialog } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <>\n      <Dialog position={{ top: 20, left: 20 }} opened>\n        Dialog in top left corner\n      </Dialog>\n      <Dialog position={{ bottom: 20, left: 20 }} opened>\n        Dialog in bottom left corner\n      </Dialog>\n    </>\n  );\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Dialog"})," is not accessible and most likely will not be announced by screen readers.\nMake sure you do not put any important information in it. In most cases it would be better\nto select ",(0,o.jsx)(t.a,{href:"/core/modal/",children:"Modal"}),", ",(0,o.jsx)(t.a,{href:"/core/drawer/",children:"Drawer"})," or ",(0,o.jsx)(t.a,{href:"/x/notifications/",children:"Notifications"}),"."]})]})}e.s(["default",0,function(e={}){return(0,o.jsx)(_,{...e,children:(0,o.jsx)(k,{...e})})}],113380)},129975,(e,o,i)=>{let t="/core/dialog";(window.__NEXT_P=window.__NEXT_P||[]).push([t,()=>e.r(113380)]),o.hot&&o.hot.dispose(function(){window.__NEXT_P.push([t])})},648761,e=>{e.v(o=>Promise.all(["static/chunks/22379_btw709h.js"].map(o=>e.l(o))).then(()=>o(493594)))},828805,e=>{e.v(o=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(o=>e.l(o))).then(()=>o(879466)))}]);