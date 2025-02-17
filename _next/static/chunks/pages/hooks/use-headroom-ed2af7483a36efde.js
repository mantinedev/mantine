(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[85918],{82349:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-headroom",function(){return t(55239)}])},55239:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>f});var o=t(31085),r=t(71184),i=t(8777),s=t(34056),d=t(93065),a=t(52419);let l={type:"code",code:`
import { Box, Portal, Text } from '@mantine/core';
import { useHeadroom } from '@mantine/hooks';

function Demo() {
  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <>
      <Portal>
        <Box
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            padding: 'var(--mantine-spacing-xs)',
            height: 60,
            zIndex: 1000000,
            transform: \`translate3d(0, \${pinned ? 0 : '-110px'}, 0)\`,
            transition: 'transform 400ms ease',
            backgroundColor: 'var(--mantine-color-body)',
          }}
        >
          Pinned header
        </Box>
      </Portal>
      <Text ta="center">Header is {pinned ? 'pinned' : 'not pinned'}</Text>
    </>
  );
}

`,component:function(){let e=(0,a.XH)({fixedAt:120});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.Z,{children:(0,o.jsx)(s.a,{style:{position:"fixed",top:0,left:0,right:0,padding:"var(--mantine-spacing-xs)",height:60,zIndex:1e6,transform:`translate3d(0, ${e?0:"-110px"}, 0)`,transition:"transform 400ms ease",backgroundColor:"var(--mantine-color-body)"},children:"Pinned header"})}),(0,o.jsxs)(d.E,{ta:"center",children:["Header is ",e?"pinned":"not pinned"]})]})}};var c=t(85954),u=t(38215);let h=(0,c.P)(u.XZ.useHeadroom);function p(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.code,{children:"use-headroom"})," hook to create headers that are hidden after user scrolls past the given distance in px.\nThe hook returns a boolean value that determines whether the element should be pinned or hidden.\nHook returns ",(0,o.jsx)(n.code,{children:"true"})," when the current scroll position is less than the specified ",(0,o.jsx)(n.code,{children:"fixedAt"})," value and\nafter user scrolled up."]}),"\n",(0,o.jsx)(t,{data:l}),"\n",(0,o.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"interface UseHeadroomInput {\n  /** Number in px at which element should be fixed */\n  fixedAt?: number;\n\n  /** Called when element is pinned */\n  onPin?: () => void;\n\n  /** Called when element is at fixed position */\n  onFix?: () => void;\n\n  /** Called when element is unpinned */\n  onRelease?: () => void;\n}\n\nfunction useHeadroom(input?: UseHeadroomInput): boolean;\n"})})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(h,{...e,children:(0,o.jsx)(p,{...e})})}},52419:(e,n,t)=>{"use strict";t.d(n,{XH:()=>l});var o=t(14041),r=t(89571),i=t(63319);let s=(e,n)=>e<=n,d=(e,n,t,o,r,i)=>{let d=s(e,n);d&&!t.current?(t.current=!0,r?.()):d||!o||t.current?!d&&t.current&&(t.current=!1,i?.()):(t.current=!0,r?.())},a=()=>{let[e,n]=(0,o.useState)(0),[t,r]=(0,o.useState)(!1),[i,s]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let t;let o=()=>{s(!0),clearTimeout(t),t=setTimeout(()=>{s(!1)},300)},d=()=>{if(i)return;let t=window.pageYOffset||document.documentElement.scrollTop;r(t<e),n(t)};return window.addEventListener("scroll",d),window.addEventListener("resize",o),()=>{window.removeEventListener("scroll",d),window.removeEventListener("resize",o)}},[e,i]),t};function l({fixedAt:e=0,onPin:n,onFix:t,onRelease:c}={}){let u=(0,o.useRef)(!1),h=a(),[{y:p}]=(0,i.l)();return(0,r.o)(()=>{d(p,e,u,h,n,c)},[p]),(0,r.o)(()=>{s(p,e)&&t?.()},[p,e,t]),!!s(p,e)||!!h}},63319:(e,n,t)=>{"use strict";t.d(n,{l:()=>d});var o=t(14041),r=t(93739);function i(){return"undefined"!=typeof window?{x:window.pageXOffset,y:window.pageYOffset}:{x:0,y:0}}function s({x:e,y:n}){if("undefined"!=typeof window){let t={behavior:"smooth"};"number"==typeof e&&(t.left=e),"number"==typeof n&&(t.top=n),window.scrollTo(t)}}function d(){let[e,n]=(0,o.useState)({x:0,y:0});return(0,r.M)("scroll",()=>n(i())),(0,r.M)("resize",()=>n(i())),(0,o.useEffect)(()=>{n(i())},[]),[e,s]}}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,39699,68831,90636,46593,38792],()=>n(82349)),_N_E=e.O()}]);