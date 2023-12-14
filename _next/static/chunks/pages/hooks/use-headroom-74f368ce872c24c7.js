(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3827],{23259:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-headroom",function(){return t(39444)}])},39444:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return x}});var o=t(24246),r=t(71670),i=t(27378),d=t(7727),s=t(56589),a=t(71078),Text=t(26569),l=t(15553);let u=`
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

`,c={type:"code",code:u,component:function(){let e=(0,l.Jd)({fixedAt:120});return i.createElement(i.Fragment,null,i.createElement(d.h,null,i.createElement(s.x,{style:{position:"fixed",top:0,left:0,right:0,padding:"var(--mantine-spacing-xs)",height:(0,a.h)(60),zIndex:1e6,transform:`translate3d(0, ${e?0:(0,a.h)(-110)}, 0)`,transition:"transform 400ms ease",backgroundColor:"var(--mantine-color-body)"}},"Pinned header")),i.createElement(Text.x,{ta:"center"},"Header is ",e?"pinned":"not pinned"))}};var f=t(3916),h=t(30289);let p=(0,f.A)(h.us.useHeadroom);function m(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.code,{children:"use-headroom"})," hook to create headers that are hidden after user scrolls past the given distance in px.\nThe hook returns a boolean value that determines whether the element should be pinned or hidden.\nHook returns ",(0,o.jsx)(n.code,{children:"true"})," when the current scroll position is less than the specified ",(0,o.jsx)(n.code,{children:"fixedAt"})," value and\nafter user scrolled up."]}),"\n",(0,o.jsx)(t,{data:c}),"\n",(0,o.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"function useHeadroom(input?: {\n  /** Number in px at which element should be fixed */\n  fixedAt?: number;\n\n  /** Called when element is pinned */\n  onPin?(): void;\n\n  /** Called when element is at fixed position */\n  onFix?(): void;\n\n  /** Called when element is unpinned */\n  onRelease?(): void;\n}): boolean;\n"})})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(p,{...e,children:(0,o.jsx)(m,{...e})})}},15553:function(e,n,t){"use strict";t.d(n,{Jd:function(){return l}});var o=t(27378),r=t(62849),i=t(34642);let d=(e,n)=>e<=n,s=(e,n)=>e<=n,a=(e,n,t)=>!s(e,n)&&!d(e,t);function l({fixedAt:e=0,onPin:n,onFix:t,onRelease:l}={}){let u=(0,o.useRef)(0),[{y:c}]=(0,i.b)();return(0,r.Y)(()=>{s(c,u.current)&&n?.()},[c,n]),(0,r.Y)(()=>{d(c,e)&&t?.()},[c,e,t]),(0,r.Y)(()=>{a(c,u.current,e)&&l?.()},[c,l]),(0,r.Y)(()=>{u.current=window.scrollY},[c]),!!(s(c,u.current)||d(c,e))}},34642:function(e,n,t){"use strict";t.d(n,{b:function(){return s}});var o=t(27378),r=t(56617);function i(){return"undefined"!=typeof window?{x:window.pageXOffset,y:window.pageYOffset}:{x:0,y:0}}function d({x:e,y:n}){if("undefined"!=typeof window){let t={behavior:"smooth"};"number"==typeof e&&(t.left=e),"number"==typeof n&&(t.top=n),window.scrollTo(t)}}function s(){let[e,n]=(0,o.useState)({x:0,y:0});return(0,r.s)("scroll",()=>n(i())),(0,r.s)("resize",()=>n(i())),(0,o.useEffect)(()=>{n(i())},[]),[e,d]}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=23259)}),_N_E=e.O()}]);