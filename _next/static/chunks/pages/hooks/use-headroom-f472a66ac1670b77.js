(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3827],{33507:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},96989:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-headroom",function(){return t(50861)}])},50861:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var r=t(85893),o=t(11151),i=t(19905),s=t(9904),a=t(67294),d=t(41458),l=t(81110),c=t(72622),u=t(72039),h=t(18312);let p=`
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

`,f={type:"code",code:p,component:function(){let e=(0,h.Jd)({fixedAt:120});return a.createElement(a.Fragment,null,a.createElement(d.h,null,a.createElement(l.x,{style:{position:"fixed",top:0,left:0,right:0,padding:"var(--mantine-spacing-xs)",height:(0,c.h)(60),zIndex:1e6,transform:`translate3d(0, ${e?0:(0,c.h)(-110)}, 0)`,transition:"transform 400ms ease",backgroundColor:"var(--mantine-color-body)"}},"Pinned header")),a.createElement(u.x,{ta:"center"},"Header is ",e?"pinned":"not pinned"))}},v=(0,i.A)(s.us.useHeadroom);function g(e){let n=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre"},(0,o.ah)(),e.components),{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"use-headroom"})," hook to create headers that are hidden after user scrolls past the given distance in px.\nThe hook returns a boolean value that determines whether the element should be pinned or hidden.\nHook returns ",(0,r.jsx)(n.code,{children:"true"})," when the current scroll position is less than the specified ",(0,r.jsx)(n.code,{children:"fixedAt"})," value and\nafter user scrolled up."]}),"\n",(0,r.jsx)(t,{data:f}),"\n",(0,r.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"function useHeadroom(input?: {\n  /** Number in px at which element should be fixed */\n  fixedAt?: number;\n\n  /** Called when element is pinned */\n  onPin?(): void;\n\n  /** Called when element is at fixed position */\n  onFix?(): void;\n\n  /** Called when element is unpinned */\n  onRelease?(): void;\n}): boolean;\n"})})]})}var m=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(v,Object.assign({},e,{children:(0,r.jsx)(g,e)}))}},18312:function(e,n,t){"use strict";t.d(n,{Jd:function(){return l}});var r=t(67294),o=t(98200),i=t(67510);let s=(e,n)=>e<=n,a=(e,n)=>e<=n,d=(e,n,t)=>!a(e,n)&&!s(e,t);function l({fixedAt:e=0,onPin:n,onFix:t,onRelease:l}={}){let c=(0,r.useRef)(0),[{y:u}]=(0,o.b)();return(0,i.Y)(()=>{a(u,c.current)&&(null==n||n())},[u,n]),(0,i.Y)(()=>{s(u,e)&&(null==t||t())},[u,e,t]),(0,i.Y)(()=>{d(u,c.current,e)&&(null==l||l())},[u,l]),(0,i.Y)(()=>{c.current=window.scrollY},[u]),!!(a(u,c.current)||s(u,e))}},98200:function(e,n,t){"use strict";t.d(n,{b:function(){return a}});var r=t(67294),o=t(37662);function i(){return"undefined"!=typeof window?{x:window.pageXOffset,y:window.pageYOffset}:{x:0,y:0}}function s({x:e,y:n}){if("undefined"!=typeof window){let t={behavior:"smooth"};"number"==typeof e&&(t.left=e),"number"==typeof n&&(t.top=n),window.scrollTo(t)}}function a(){let[e,n]=(0,r.useState)({x:0,y:0});return(0,o.s)("scroll",()=>n(i())),(0,o.s)("resize",()=>n(i())),(0,r.useEffect)(()=>{n(i())},[]),[e,s]}}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=96989)}),_N_E=e.O()}]);