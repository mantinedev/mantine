(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[70831],{14703:function(t,e,o){"use strict";o.d(e,{Z:function(){return n}});var n=(0,o(99882).Z)("arrow-up","IconArrowUp",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M18 11l-6 -6",key:"svg-1"}],["path",{d:"M6 11l6 -6",key:"svg-2"}]])},41977:function(t,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/affix",function(){return o(43553)}])},43553:function(t,e,o){"use strict";o.r(e),o.d(e,{default:function(){return y}});var n=o(52322),i=o(45392),r=o(2784),s=o(14703),Text=o(8582),l=o(87386),c=o(96321),f=o(17115),a=o(58898),u=o(46928);let d=`
import { IconArrowUp } from '@tabler/icons-react';
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Text, Transition, rem } from '@mantine/core';

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Text ta="center">Affix is located at the bottom of the screen, scroll to see it</Text>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftSection={<IconArrowUp style={{ width: rem(16), height: rem(16) }} />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}
`,p={type:"code",code:d,component:function(){let[t,e]=(0,u.b)();return r.createElement(r.Fragment,null,r.createElement(Text.x,{ta:"center"},"Affix is located at the bottom of the screen, scroll to see it"),r.createElement(l.D,{position:{bottom:20,right:20}},r.createElement(c.u,{transition:"slide-up",mounted:t.y>0},t=>r.createElement(f.z,{leftSection:r.createElement(s.Z,{style:{width:(0,a.h)(16),height:(0,a.h)(16)}}),style:t,onClick:()=>e({y:0})},"Scroll to top"))))}};var m=o(79016),h=o(33638);let x=(0,m.A)(h.us.Affix);function w(t){let e={a:"a",code:"code",h2:"h2",p:"p",...(0,i.a)(),...t.components},{Demo:o}=e;return o||function(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"Affix"})," renders a div element with a fixed position inside the ",(0,n.jsx)(e.a,{href:"/core/portal",children:"Portal"})," component.\nUse it to display elements fixed at any position on the screen, for example, scroll to top button:"]}),"\n",(0,n.jsx)(o,{data:p})]})}function y(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(x,{...t,children:(0,n.jsx)(w,{...t})})}},87386:function(t,e,o){"use strict";o.d(e,{D:function(){return h}});var n=o(2784),i=o(58898),r=o(97263),s=o(11200),l=o(38483),c=o(62378),f=o(28559),a=o(82027),u=o(71517),d={root:"m-7f854edf"};let p={position:{bottom:0,right:0},zIndex:(0,r.w)("modal"),withinPortal:!0},m=(0,s.Z)((t,{zIndex:e,position:o})=>({root:{"--affix-z-index":e?.toString(),"--affix-top":(0,i.h)(o?.top),"--affix-left":(0,i.h)(o?.left),"--affix-bottom":(0,i.h)(o?.bottom),"--affix-right":(0,i.h)(o?.right)}})),h=(0,a.d)((t,e)=>{let o=(0,l.w)("Affix",p,t),{classNames:i,className:r,style:s,styles:a,unstyled:h,vars:x,portalProps:w,zIndex:y,withinPortal:g,position:b,...E}=o,A=(0,c.y)({name:"Affix",classes:d,props:o,className:r,style:s,classNames:i,styles:a,unstyled:h,vars:x,varsResolver:m});return n.createElement(u.q,{...w,withinPortal:g},n.createElement(f.x,{ref:e,...A("root"),...E}))});h.classes=d,h.displayName="@mantine/core/Affix"},46928:function(t,e,o){"use strict";o.d(e,{b:function(){return l}});var n=o(2784),i=o(65695);function r(){return"undefined"!=typeof window?{x:window.pageXOffset,y:window.pageYOffset}:{x:0,y:0}}function s({x:t,y:e}){if("undefined"!=typeof window){let o={behavior:"smooth"};"number"==typeof t&&(o.left=t),"number"==typeof e&&(o.top=e),window.scrollTo(o)}}function l(){let[t,e]=(0,n.useState)({x:0,y:0});return(0,i.s)("scroll",()=>e(r())),(0,i.s)("resize",()=>e(r())),(0,n.useEffect)(()=>{e(r())},[]),[t,s]}}},function(t){t.O(0,[57938,17454,47747,49774,92888,40179],function(){return t(t.s=41977)}),_N_E=t.O()}]);