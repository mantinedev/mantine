(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var n=Object.defineProperty;e.s(["__exportAll",0,(e,o)=>{let r={};for(var t in e)n(r,t,{get:e[t],enumerable:!0});return o||n(r,Symbol.toStringTag,{value:"Module"}),r}])},541772,e=>{"use strict";var n=e.i(191788);e.s(["useDisclosure",0,function(e=!1,o={}){let[r,t]=(0,n.useState)(e),s=(0,n.useCallback)(()=>{t(e=>e||(o.onOpen?.(),!0))},[o.onOpen]),i=(0,n.useCallback)(()=>{t(e=>e?(o.onClose?.(),!1):e)},[o.onClose]);return[r,{open:s,close:i,toggle:(0,n.useCallback)(()=>{r?i():s()},[i,s,r]),set:t}]}])},994454,e=>{"use strict";var n=e.i(133613),o=e.i(191788);function r(){return{x:window.scrollX,y:window.scrollY}}function t({x:e,y:n}){{let o={behavior:"smooth"};"number"==typeof e&&(o.left=e),"number"==typeof n&&(o.top=n),window.scrollTo(o)}}e.s(["useWindowScroll",0,function(){let[e,s]=(0,o.useState)({x:0,y:0});return(0,n.useWindowEvent)("scroll",()=>s(r()),{passive:!0}),(0,n.useWindowEvent)("resize",()=>s(r()),{passive:!0}),(0,o.useEffect)(()=>{s(r())},[]),[e,t]}])},393362,e=>{"use strict";var n=e.i(191788);e.s(["useScrollDirection",0,function(){let e=(0,n.useRef)(0),[o,r]=(0,n.useState)("unknown"),t=(0,n.useRef)(!1),s=(0,n.useRef)(void 0),i=(0,n.useEffectEvent)(()=>{if(t.current)return;let n=window.scrollY||document.documentElement.scrollTop;r(n<e.current?"up":"down"),e.current=n});return(0,n.useEffect)(()=>{let e=()=>{t.current=!0,window.clearTimeout(s.current),s.current=window.setTimeout(()=>{t.current=!1},300)};return window.addEventListener("scroll",i),window.addEventListener("resize",e),()=>{window.removeEventListener("scroll",i),window.removeEventListener("resize",e),clearTimeout(s.current)}},[]),o}])},474642,e=>{"use strict";var n=e.i(417241),o=e.i(994454),r=e.i(393362),t=e.i(191788);e.s(["useHeadroom",0,function({fixedAt:e=0,scrollDistance:s=100,onPin:i,onFix:l,onRelease:c}={}){let a,d=(0,t.useRef)(!1),u="up"===(0,r.useScrollDirection)(),[{y:h}]=(0,o.useWindowScroll)(),x=(0,t.useEffectEvent)(()=>i?.()),f=(0,t.useEffectEvent)(()=>c?.()),m=(0,t.useEffectEvent)(()=>l?.());(0,n.useIsomorphicEffect)(()=>{let n=h<=e;n&&!d.current?(d.current=!0,x?.()):n||!u||d.current?n||u||!d.current||(d.current=!1,f?.()):(d.current=!0,x?.())},[h,e,u]);let p=(0,t.useRef)(!1);(0,n.useIsomorphicEffect)(()=>{let n=h<=e;n&&!p.current&&m(),p.current=n},[h,e]);let g=h<=e,j=(0,t.useRef)(g),w=(0,t.useRef)(h),v=(0,t.useRef)(+!!g),b=(0,t.useRef)(u);if(j.current!==g&&(j.current=g,g?w.current=h:w.current=e,v.current=1,b.current=u),!g&&b.current!==u){let e=Math.abs(h-w.current),n=b.current?Math.min(v.current+e/s,1):Math.max(v.current-e/s,0);b.current=u,w.current=h,v.current=n}if(g)a=1;else{let e=Math.abs(h-w.current);a=u?Math.min(v.current+e/s,1):Math.max(v.current-e/s,0)}return{pinned:a>0,scrollProgress:a}}])},850510,e=>{"use strict";var n=e.i(391398),o=e.i(38856),r=e.i(648863),t=e.i(232471),s=e.i(485108),i=e.i(725695),l=e.i(927501),c=e.i(883364),a=e.i(541772),d=e.i(474642);let u={type:"code",code:`
import { Box, Button, Group, Portal, Text } from '@mantine/core';
import { useDisclosure, useHeadroom } from '@mantine/hooks';

function Demo() {
  const [showHeader, handlers] = useDisclosure(false);
  const { pinned } = useHeadroom({ fixedAt: 120 });

  return (
    <>
      {showHeader && (
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
            <Group justify="center" h="100%">
              <Text>Pinned header – {pinned ? 'visible' : 'hidden'}</Text>
            </Group>
          </Box>
        </Portal>
      )}

      <Button onClick={handlers.toggle} variant="default">
        {showHeader ? 'Hide' : 'Show'} header
      </Button>
    </>
  );
}
`,component:function(){let[e,o]=(0,a.useDisclosure)(!1),{pinned:r}=(0,d.useHeadroom)({fixedAt:120});return(0,n.jsxs)(n.Fragment,{children:[e&&(0,n.jsx)(l.Portal,{children:(0,n.jsx)(t.Box,{style:{position:"fixed",top:0,left:0,right:0,padding:"var(--mantine-spacing-xs)",height:60,zIndex:1e6,transform:`translate3d(0, ${r?0:"-110px"}, 0)`,transition:"transform 400ms ease",backgroundColor:"var(--mantine-color-body)"},children:(0,n.jsx)(i.Group,{justify:"center",h:"100%",children:(0,n.jsxs)(c.Text,{children:["Pinned header – ",r?"visible":"hidden"]})})})}),(0,n.jsxs)(s.Button,{onClick:o.toggle,variant:"default",children:[e?"Hide":"Show"," header"]})]})},centered:!0};var h=e.i(191788),x=e.i(301388),f=e.i(671640);let m={type:"code",code:`
import { useState } from 'react';
import { Box, Button, Code, Group, Portal, Stack, Text } from '@mantine/core';
import { useDisclosure, useHeadroom } from '@mantine/hooks';

function Demo() {
  const [showHeader, handlers] = useDisclosure(false);
  const [log, setLog] = useState<string[]>([]);

  const addLog = (msg: string) =>
    setLog((prev) => [\`\${new Date().toLocaleTimeString()} — \${msg}\`, ...prev].slice(0, 10));

  const { pinned } = useHeadroom({
    fixedAt: 80,
    onPin: () => addLog('onPin'),
    onRelease: () => addLog('onRelease'),
    onFix: () => addLog('onFix'),
  });

  return (
    <>
      {showHeader && (
        <Portal>
          <Box
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              height: 60,
              zIndex: 1000000,
              transform: \`translate3d(0, \${pinned ? 0 : '-110px'}, 0)\`,
              transition: 'transform 400ms ease',
              backgroundColor: pinned
                ? 'var(--mantine-color-teal-6)'
                : 'var(--mantine-color-red-6)',
            }}
          >
            <Group justify="center" h="100%">
              <Text c="white" fw={500}>
                {pinned ? 'Pinned' : 'Released'}
              </Text>
            </Group>
          </Box>
        </Portal>
      )}

      <Stack>
        <Button onClick={handlers.toggle} variant="default">
          {showHeader ? 'Hide' : 'Show'} header
        </Button>
        <Code block>
          {log.length === 0 ? 'Scroll to see callback events' : log.join('\\n')}
        </Code>
      </Stack>
    </>
  );
}
`,component:function(){let[e,o]=(0,a.useDisclosure)(!1),[r,u]=(0,h.useState)([]),m=e=>u(n=>[`${new Date().toLocaleTimeString()} — ${e}`,...n].slice(0,10)),{pinned:p}=(0,d.useHeadroom)({fixedAt:80,onPin:()=>m("onPin"),onRelease:()=>m("onRelease"),onFix:()=>m("onFix")});return(0,n.jsxs)(n.Fragment,{children:[e&&(0,n.jsx)(l.Portal,{children:(0,n.jsx)(t.Box,{style:{position:"fixed",top:0,left:0,right:0,height:60,zIndex:1e6,transform:`translate3d(0, ${p?0:"-110px"}, 0)`,transition:"transform 400ms ease",backgroundColor:p?"var(--mantine-color-teal-6)":"var(--mantine-color-red-6)"},children:(0,n.jsx)(i.Group,{justify:"center",h:"100%",children:(0,n.jsx)(c.Text,{c:"white",fw:500,children:p?"Pinned":"Released"})})})}),(0,n.jsxs)(f.Stack,{children:[(0,n.jsxs)(s.Button,{onClick:o.toggle,variant:"default",children:[e?"Hide":"Show"," header"]}),(0,n.jsx)(x.Code,{block:!0,children:0===r.length?"Scroll to see callback events":r.join("\n")})]})]})},centered:!0},p={type:"code",code:`
import { Box, Button, Group, Portal, Text } from '@mantine/core';
import { useDisclosure, useHeadroom } from '@mantine/hooks';

function Demo() {
  const [showHeader, handlers] = useDisclosure(false);
  const { scrollProgress } = useHeadroom({ fixedAt: 120, scrollDistance: 60 });

  return (
    <>
      {showHeader && (
        <Portal>
          <Box
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              height: 60,
              zIndex: 1000000,
              transform: \`translateY(\${(scrollProgress - 1) * 100}%)\`,
              backgroundColor: 'var(--mantine-color-violet-6)',
            }}
          >
            <Group justify="center" h="100%">
              <Text c="white" fw={500}>
                Scroll-linked — {Math.round(scrollProgress * 100)}% visible
              </Text>
            </Group>
          </Box>
        </Portal>
      )}

      <Button onClick={handlers.toggle} variant="default">
        {showHeader ? 'Hide' : 'Show'} header
      </Button>
    </>
  );
}
`,component:function(){let[e,o]=(0,a.useDisclosure)(!1),{scrollProgress:r}=(0,d.useHeadroom)({fixedAt:120,scrollDistance:60});return(0,n.jsxs)(n.Fragment,{children:[e&&(0,n.jsx)(l.Portal,{children:(0,n.jsx)(t.Box,{style:{position:"fixed",top:0,left:0,right:0,height:60,zIndex:1e6,transform:`translateY(${(r-1)*100}%)`,backgroundColor:"var(--mantine-color-violet-6)"},children:(0,n.jsx)(i.Group,{justify:"center",h:"100%",children:(0,n.jsxs)(c.Text,{c:"white",fw:500,children:["Scroll-linked — ",Math.round(100*r),"% visible"]})})})}),(0,n.jsxs)(s.Button,{onClick:o.toggle,variant:"default",children:[e?"Hide":"Show"," header"]})]})},centered:!0};var g=(0,r.__exportAll)({callbacks:()=>m,scrollProgress:()=>p,usage:()=>u});e.i(603441);var j=e.i(62558);e.i(457450);var w=e.i(418026);let v=(0,j.Layout)(w.MDX_DATA.useHeadroom);function b(e){let r={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.useMDXComponents)(),...e.components},{Demo:t}=r;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"use-headroom"})," hook creates headers that are hidden after the user scrolls past a given distance in pixels.\nIt returns ",(0,n.jsx)(r.code,{children:"{ pinned, scrollProgress }"})," where ",(0,n.jsx)(r.code,{children:"pinned"})," is ",(0,n.jsx)(r.code,{children:"true"})," when the element is at least partially\nvisible and ",(0,n.jsx)(r.code,{children:"scrollProgress"})," is a number between ",(0,n.jsx)(r.code,{children:"0"})," (fully hidden) and ",(0,n.jsx)(r.code,{children:"1"})," (fully visible)."]}),"\n",(0,n.jsx)(t,{data:g.usage}),"\n",(0,n.jsx)(r.h2,{id:"scrollprogress",children:"scrollProgress"}),"\n",(0,n.jsxs)(r.p,{children:["Use ",(0,n.jsx)(r.code,{children:"scrollProgress"})," to create a scroll-linked reveal animation instead of an instant\nshow/hide toggle. The value transitions from ",(0,n.jsx)(r.code,{children:"1"})," (fully visible) to ",(0,n.jsx)(r.code,{children:"0"})," (fully hidden)\nas the user scrolls down past ",(0,n.jsx)(r.code,{children:"fixedAt"}),", and back to ",(0,n.jsx)(r.code,{children:"1"})," as the user scrolls up.\nDirection changes mid-scroll are handled correctly — the progress continues from\nwherever it was when the direction changed. Set ",(0,n.jsx)(r.code,{children:"scrollDistance"})," to control how many\npixels of scrolling are needed to fully reveal or hide the element."]}),"\n",(0,n.jsx)(t,{data:g.scrollProgress}),"\n",(0,n.jsx)(r.h2,{id:"callbacks",children:"Callbacks"}),"\n",(0,n.jsxs)(r.p,{children:["The hook supports ",(0,n.jsx)(r.code,{children:"onPin"}),", ",(0,n.jsx)(r.code,{children:"onRelease"}),", and ",(0,n.jsx)(r.code,{children:"onFix"})," callbacks:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"onPin"})," is called when the header becomes visible (user scrolls up)"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"onRelease"})," is called when the header is hidden (user scrolls down)"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"onFix"})," is called when the scroll position enters the fixed zone (scroll position ≤ ",(0,n.jsx)(r.code,{children:"fixedAt"}),")"]}),"\n"]}),"\n",(0,n.jsx)(t,{data:g.callbacks}),"\n",(0,n.jsx)(r.h2,{id:"definition",children:"Definition"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"interface UseHeadroomOptions {\n  /** Number in px at which element should be fixed, 0 by default */\n  fixedAt?: number;\n\n  /** Number of px to scroll to fully reveal or hide the element, 100 by default */\n  scrollDistance?: number;\n\n  /** Called when element is pinned */\n  onPin?: () => void;\n\n  /** Called when element is at fixed position */\n  onFix?: () => void;\n\n  /** Called when element is unpinned */\n  onRelease?: () => void;\n}\n\ninterface UseHeadroomReturnValue {\n  /** True when the element is at least partially visible */\n  pinned: boolean;\n\n  /** Reveal progress: 0 = fully hidden, 1 = fully visible */\n  scrollProgress: number;\n}\n\nfunction useHeadroom(input?: UseHeadroomOptions): UseHeadroomReturnValue;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"exported-types",children:"Exported types"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"UseHeadroomOptions"})," type is exported from ",(0,n.jsx)(r.code,{children:"@mantine/hooks"}),";"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"import { UseHeadroomOptions } from '@mantine/hooks';\n"})})]})}e.s(["default",0,function(e={}){return(0,n.jsx)(v,{...e,children:(0,n.jsx)(b,{...e})})}],850510)},936960,(e,n,o)=>{let r="/hooks/use-headroom";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(850510)]),n.hot&&n.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(n=>Promise.all(["static/chunks/22379_btw709h.js"].map(n=>e.l(n))).then(()=>n(493594)))},828805,e=>{e.v(n=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(n=>e.l(n))).then(()=>n(879466)))}]);