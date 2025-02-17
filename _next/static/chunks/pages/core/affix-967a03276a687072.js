(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3982],{49221:(t,e,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/affix",function(){return o(91039)}])},91039:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>m});var n=o(31085),i=o(71184),r=o(41590),s=o(93065),l=o(26991),c=o(98523),f=o(52022),a=o(63319);let d={type:"code",code:`
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
`,component:function(){let[t,e]=(0,a.l)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.E,{ta:"center",children:"Affix is located at the bottom of the screen, scroll to see it"}),(0,n.jsx)(l.p,{position:{bottom:20,right:20},children:(0,n.jsx)(c.e,{transition:"slide-up",mounted:t.y>0,children:t=>(0,n.jsx)(f.$,{leftSection:(0,n.jsx)(r.A,{size:16}),style:t,onClick:()=>e({y:0}),children:"Scroll to top"})})})]})}};var p=o(85954),u=o(38215);let x=(0,p.P)(u.XZ.Affix);function h(t){let e={a:"a",code:"code",h2:"h2",p:"p",...(0,i.R)(),...t.components},{Demo:o}=e;return o||function(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"Affix"})," renders a div element with a fixed position inside the ",(0,n.jsx)(e.a,{href:"/core/portal",children:"Portal"})," component.\nUse it to display elements fixed at any position on the screen, for example, scroll to top button:"]}),"\n",(0,n.jsx)(o,{data:d})]})}function m(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(x,{...t,children:(0,n.jsx)(h,{...t})})}},41590:(t,e,o)=>{"use strict";o.d(e,{A:()=>n});var n=(0,o(73366).A)("outline","arrow-up","IconArrowUp",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M18 11l-6 -6",key:"svg-1"}],["path",{d:"M6 11l6 -6",key:"svg-2"}]])},26991:(t,e,o)=>{"use strict";o.d(e,{p:()=>h});var n=o(31085);o(14041);var i=o(81296),r=o(33450),s=o(7098),l=o(29686),c=o(69564),f=o(34056),a=o(6754),d=o(54977),p={root:"m_7f854edf"};let u={position:{bottom:0,right:0},zIndex:(0,i.I)("modal"),withinPortal:!0},x=(0,s.V)((t,{zIndex:e,position:o})=>({root:{"--affix-z-index":e?.toString(),"--affix-top":(0,r.GY)(o?.top),"--affix-left":(0,r.GY)(o?.left),"--affix-bottom":(0,r.GY)(o?.bottom),"--affix-right":(0,r.GY)(o?.right)}})),h=(0,a.P9)((t,e)=>{let o=(0,l.Y)("Affix",u,t),{classNames:i,className:r,style:s,styles:a,unstyled:h,vars:m,portalProps:w,zIndex:y,withinPortal:g,position:j,...b}=o,A=(0,c.I)({name:"Affix",classes:p,props:o,className:r,style:s,classNames:i,styles:a,unstyled:h,vars:m,varsResolver:x});return(0,n.jsx)(d.r,{...w,withinPortal:g,children:(0,n.jsx)(f.a,{ref:e,...A("root"),...b})})});h.classes=p,h.displayName="@mantine/core/Affix"},63319:(t,e,o)=>{"use strict";o.d(e,{l:()=>l});var n=o(14041),i=o(93739);function r(){return"undefined"!=typeof window?{x:window.pageXOffset,y:window.pageYOffset}:{x:0,y:0}}function s({x:t,y:e}){if("undefined"!=typeof window){let o={behavior:"smooth"};"number"==typeof t&&(o.left=t),"number"==typeof e&&(o.top=e),window.scrollTo(o)}}function l(){let[t,e]=(0,n.useState)({x:0,y:0});return(0,i.M)("scroll",()=>e(r())),(0,i.M)("resize",()=>e(r())),(0,n.useEffect)(()=>{e(r())},[]),[t,s]}}},t=>{var e=e=>t(t.s=e);t.O(0,[67456,39699,68831,90636,46593,38792],()=>e(49221)),_N_E=t.O()}]);