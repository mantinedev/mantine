(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3827],{23259:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-headroom",function(){return t(39444)}])},39444:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return x}});var o=t(24246),r=t(71670),i=t(3916),d=t(30289),s=t(27378),a=t(7727),u=t(56589),l=t(71078),Text=t(26569),c=t(15553);let f=`
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

`,h={type:"code",code:f,component:function(){let e=(0,c.Jd)({fixedAt:120});return s.createElement(s.Fragment,null,s.createElement(a.h,null,s.createElement(u.x,{style:{position:"fixed",top:0,left:0,right:0,padding:"var(--mantine-spacing-xs)",height:(0,l.h)(60),zIndex:1e6,transform:`translate3d(0, ${e?0:(0,l.h)(-110)}, 0)`,transition:"transform 400ms ease",backgroundColor:"var(--mantine-color-body)"}},"Pinned header")),s.createElement(Text.x,{ta:"center"},"Header is ",e?"pinned":"not pinned"))}},p=(0,i.A)(d.us.useHeadroom);function m(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.code,{children:"use-headroom"})," hook to create headers that are hidden after user scrolls past the given distance in px.\nThe hook returns a boolean value that determines whether the element should be pinned or hidden.\nHook returns ",(0,o.jsx)(n.code,{children:"true"})," when the current scroll position is less than the specified ",(0,o.jsx)(n.code,{children:"fixedAt"})," value and\nafter user scrolled up."]}),"\n",(0,o.jsx)(t,{data:h}),"\n",(0,o.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"function useHeadroom(input?: {\n  /** Number in px at which element should be fixed */\n  fixedAt?: number;\n\n  /** Called when element is pinned */\n  onPin?(): void;\n\n  /** Called when element is at fixed position */\n  onFix?(): void;\n\n  /** Called when element is unpinned */\n  onRelease?(): void;\n}): boolean;\n"})})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(p,{...e,children:(0,o.jsx)(m,{...e})})}},15553:function(e,n,t){"use strict";t.d(n,{Jd:function(){return u}});var o=t(27378),r=t(34642),i=t(62849);let d=(e,n)=>e<=n,s=(e,n)=>e<=n,a=(e,n,t)=>!s(e,n)&&!d(e,t);function u({fixedAt:e=0,onPin:n,onFix:t,onRelease:u}={}){let l=(0,o.useRef)(0),[{y:c}]=(0,r.b)();return(0,i.Y)(()=>{s(c,l.current)&&n?.()},[c,n]),(0,i.Y)(()=>{d(c,e)&&t?.()},[c,e,t]),(0,i.Y)(()=>{a(c,l.current,e)&&u?.()},[c,u]),(0,i.Y)(()=>{l.current=window.scrollY},[c]),!!(s(c,l.current)||d(c,e))}},34642:function(e,n,t){"use strict";t.d(n,{b:function(){return s}});var o=t(27378),r=t(56617);function i(){return"undefined"!=typeof window?{x:window.pageXOffset,y:window.pageYOffset}:{x:0,y:0}}function d({x:e,y:n}){if("undefined"!=typeof window){let t={behavior:"smooth"};"number"==typeof e&&(t.left=e),"number"==typeof n&&(t.top=n),window.scrollTo(t)}}function s(){let[e,n]=(0,o.useState)({x:0,y:0});return(0,r.s)("scroll",()=>n(i())),(0,r.s)("resize",()=>n(i())),(0,o.useEffect)(()=>{n(i())},[]),[e,d]}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=23259)}),_N_E=e.O()}]);