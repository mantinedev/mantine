(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[70831],{41977:function(t,o,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/affix",function(){return e(43553)}])},43553:function(t,o,e){"use strict";e.r(o),e.d(o,{default:function(){return m}});var n=e(52322),i=e(45392),r=e(85448),s=e(8582),c=e(87386),f=e(96321),l=e(39629),a=e(46928);let u={type:"code",code:`
import { IconArrowUp } from '@tabler/icons-react';
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Text, Transition } from '@mantine/core';

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Text ta="center">Affix is located at the bottom of the screen, scroll to see it</Text>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftSection={<IconArrowUp size={16} />}
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
`,component:function(){let[t,o]=(0,a.b)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.x,{ta:"center",children:"Affix is located at the bottom of the screen, scroll to see it"}),(0,n.jsx)(c.D,{position:{bottom:20,right:20},children:(0,n.jsx)(f.u,{transition:"slide-up",mounted:t.y>0,children:t=>(0,n.jsx)(l.z,{leftSection:(0,n.jsx)(r.Z,{size:16}),style:t,onClick:()=>o({y:0}),children:"Scroll to top"})})})]})}};var d=e(54078),p=e(15019);let x=(0,d.A)(p.us.Affix);function h(t){let o={a:"a",code:"code",h2:"h2",p:"p",...(0,i.a)(),...t.components},{Demo:e}=o;return e||function(t,o){throw Error("Expected "+(o?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"Affix"})," renders a div element with a fixed position inside the ",(0,n.jsx)(o.a,{href:"/core/portal",children:"Portal"})," component.\nUse it to display elements fixed at any position on the screen, for example, scroll to top button:"]}),"\n",(0,n.jsx)(e,{data:u})]})}function m(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(x,{...t,children:(0,n.jsx)(h,{...t})})}},85448:function(t,o,e){"use strict";e.d(o,{Z:function(){return n}});var n=(0,e(73681).Z)("outline","arrow-up","IconArrowUp",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M18 11l-6 -6",key:"svg-1"}],["path",{d:"M6 11l6 -6",key:"svg-2"}]])},87386:function(t,o,e){"use strict";e.d(o,{D:function(){return h}});var n=e(52322),i=e(58898);e(2784);var r=e(97263),s=e(11200),c=e(38483),f=e(46690),l=e(28559),a=e(82027),u=e(71517),d={root:"m_7f854edf"};let p={position:{bottom:0,right:0},zIndex:(0,r.w)("modal"),withinPortal:!0},x=(0,s.Z)((t,{zIndex:o,position:e})=>({root:{"--affix-z-index":o?.toString(),"--affix-top":(0,i.h)(e?.top),"--affix-left":(0,i.h)(e?.left),"--affix-bottom":(0,i.h)(e?.bottom),"--affix-right":(0,i.h)(e?.right)}})),h=(0,a.d5)((t,o)=>{let e=(0,c.w)("Affix",p,t),{classNames:i,className:r,style:s,styles:a,unstyled:h,vars:m,portalProps:w,zIndex:y,withinPortal:b,position:g,...j}=e,A=(0,f.y)({name:"Affix",classes:d,props:e,className:r,style:s,classNames:i,styles:a,unstyled:h,vars:m,varsResolver:x});return(0,n.jsx)(u.q,{...w,withinPortal:b,children:(0,n.jsx)(l.x,{ref:o,...A("root"),...j})})});h.classes=d,h.displayName="@mantine/core/Affix"},46928:function(t,o,e){"use strict";e.d(o,{b:function(){return c}});var n=e(2784),i=e(65695);function r(){return"undefined"!=typeof window?{x:window.pageXOffset,y:window.pageYOffset}:{x:0,y:0}}function s({x:t,y:o}){if("undefined"!=typeof window){let e={behavior:"smooth"};"number"==typeof t&&(e.left=t),"number"==typeof o&&(e.top=o),window.scrollTo(e)}}function c(){let[t,o]=(0,n.useState)({x:0,y:0});return(0,i.s)("scroll",()=>o(r())),(0,i.s)("resize",()=>o(r())),(0,n.useEffect)(()=>{o(r())},[]),[t,s]}}},function(t){t.O(0,[61177,66748,61639,92888,49774,40179],function(){return t(t.s=41977)}),_N_E=t.O()}]);