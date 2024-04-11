(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[93827],{16145:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-headroom",function(){return t(58866)}])},58866:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return x}});var o=t(52322),r=t(45392),i=t(2784),s=t(11649),d=t(28559),a=t(58898),Text=t(8582),u=t(88221);let l=`
import { Box, Portal, rem, Text } from '@mantine/core';
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
            height: rem(60),
            zIndex: 1000000,
            transform: \`translate3d(0, \${pinned ? 0 : rem(-110)}, 0)\`,
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

`,c={type:"code",code:l,component:function(){let e=(0,u.Jd)({fixedAt:120});return i.createElement(i.Fragment,null,i.createElement(s.h,null,i.createElement(d.x,{style:{position:"fixed",top:0,left:0,right:0,padding:"var(--mantine-spacing-xs)",height:(0,a.h)(60),zIndex:1e6,transform:`translate3d(0, ${e?0:(0,a.h)(-110)}, 0)`,transition:"transform 400ms ease",backgroundColor:"var(--mantine-color-body)"}},"Pinned header")),i.createElement(Text.x,{ta:"center"},"Header is ",e?"pinned":"not pinned"))}};var f=t(79016),h=t(33638);let m=(0,f.A)(h.us.useHeadroom);function p(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.code,{children:"use-headroom"})," hook to create headers that are hidden after user scrolls past the given distance in px.\nThe hook returns a boolean value that determines whether the element should be pinned or hidden.\nHook returns ",(0,o.jsx)(n.code,{children:"true"})," when the current scroll position is less than the specified ",(0,o.jsx)(n.code,{children:"fixedAt"})," value and\nafter user scrolled up."]}),"\n",(0,o.jsx)(t,{data:c}),"\n",(0,o.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"interface UseHeadroomInput {\n  /** Number in px at which element should be fixed */\n  fixedAt?: number;\n\n  /** Called when element is pinned */\n  onPin?: () => void;\n\n  /** Called when element is at fixed position */\n  onFix?: () => void;\n\n  /** Called when element is unpinned */\n  onRelease?: () => void;\n}\n\nfunction useHeadroom(input?: UseHeadroomInput): boolean;\n"})})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(m,{...e,children:(0,o.jsx)(p,{...e})})}},88221:function(e,n,t){"use strict";t.d(n,{Jd:function(){return u}});var o=t(2784),r=t(64261),i=t(46928);let s=(e,n)=>e<=n,d=(e,n,t,o,r,i)=>{let d=s(e,n);d&&!t.current?(t.current=!0,r?.()):d||!o||t.current?!d&&t.current&&(t.current=!1,i?.()):(t.current=!0,r?.())},a=()=>{let[e,n]=(0,o.useState)(0),[t,r]=(0,o.useState)(!1),[i,s]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let t;let o=()=>{s(!0),clearTimeout(t),t=setTimeout(()=>{s(!1)},300)},d=()=>{if(i)return;let t=window.pageYOffset||document.documentElement.scrollTop;r(t<e),n(t)};return window.addEventListener("scroll",d),window.addEventListener("resize",o),()=>{window.removeEventListener("scroll",d),window.removeEventListener("resize",o)}},[e,i]),t};function u({fixedAt:e=0,onPin:n,onFix:t,onRelease:u}={}){let l=(0,o.useRef)(!1),c=a(),[{y:f}]=(0,i.b)();return(0,r.Y)(()=>{d(f,e,l,c,n,u)},[f]),(0,r.Y)(()=>{s(f,e)&&t?.()},[f,e,t]),!!s(f,e)||!!c}},46928:function(e,n,t){"use strict";t.d(n,{b:function(){return d}});var o=t(2784),r=t(65695);function i(){return"undefined"!=typeof window?{x:window.pageXOffset,y:window.pageYOffset}:{x:0,y:0}}function s({x:e,y:n}){if("undefined"!=typeof window){let t={behavior:"smooth"};"number"==typeof e&&(t.left=e),"number"==typeof n&&(t.top=n),window.scrollTo(t)}}function d(){let[e,n]=(0,o.useState)({x:0,y:0});return(0,r.s)("scroll",()=>n(i())),(0,r.s)("resize",()=>n(i())),(0,o.useEffect)(()=>{n(i())},[]),[e,s]}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=16145)}),_N_E=e.O()}]);