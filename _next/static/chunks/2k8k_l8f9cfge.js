(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,o)=>{let i={};for(var n in e)t(i,n,{get:e[n],enumerable:!0});return o||t(i,Symbol.toStringTag,{value:"Module"}),i}])},541772,e=>{"use strict";var t=e.i(191788);e.s(["useDisclosure",0,function(e=!1,o={}){let[i,n]=(0,t.useState)(e),s=(0,t.useCallback)(()=>{n(e=>e||(o.onOpen?.(),!0))},[o.onOpen]),r=(0,t.useCallback)(()=>{n(e=>e?(o.onClose?.(),!1):e)},[o.onClose]);return[i,{open:s,close:r,toggle:(0,t.useCallback)(()=>{i?r():s()},[r,s,i]),set:n}]}])},981377,e=>{"use strict";var t=e.i(44091),o=e.i(391466),i=e.i(275519),n=e.i(232471),s={root:"m_d08caa0"},r=e.i(391398);let l=(0,i.factory)(e=>{let i=(0,t.useProps)("Typography",null,e),{classNames:l,className:a,style:u,styles:d,unstyled:c,attributes:p,...h}=i;return(0,r.jsx)(n.Box,{...(0,o.useStyles)({name:"Typography",classes:s,props:i,className:a,style:u,classNames:l,styles:d,unstyled:c,attributes:p})("root"),...h})});l.classes=s,l.displayName="@mantine/core/Typography",e.s(["Typography",0,l],981377)},556457,103738,e=>{"use strict";var t=e.i(729262),o=e.i(332977),i=e.i(191788),n=e.i(730943);function s(e){return e.current?e.current.scrollHeight:"auto"}function r(e){return e.current?e.current.scrollWidth:"auto"}e.s(["useCollapse",0,function({transitionDuration:e,transitionTimingFunction:r="ease",onTransitionEnd:l,onTransitionStart:a,expanded:u,keepMounted:d}){let c={height:0,overflow:"hidden",...d?{}:{display:"none"}},p=(0,i.useEffectEvent)(()=>a?.()),h=(0,i.useRef)(null),[m,x]=(0,i.useState)(u?{}:c),[g,f]=(0,i.useState)(u?"entered":"exited"),w=e=>{(0,n.flushSync)(()=>x(e))},b=e=>{w(t=>({...t,...e}))},y=t=>{let o=e??function(e){if(!e||"string"==typeof e)return 0;let t=e/36;return Math.round((4+15*t**.25+t/5)*10)}(t);return{transition:`height ${o}ms ${r}, opacity ${o}ms ${r}`}};(0,t.useDidUpdate)(()=>{0!==e&&p(),u?window.requestAnimationFrame(()=>{(0,n.flushSync)(()=>f("entering")),b({willChange:"height",display:"block",overflow:"hidden"}),window.requestAnimationFrame(()=>{let e=s(h);b({...y(e),height:e})})}):window.requestAnimationFrame(()=>{(0,n.flushSync)(()=>f("exiting"));let e=s(h);b({...y(e),willChange:"height",height:e}),window.requestAnimationFrame(()=>b({height:0,overflow:"hidden"}))})},[u]);let j=e=>{if(e.target===h.current&&"height"===e.propertyName)if(u){let e=s(h);e===m.height?w({}):b({height:e}),f("entered"),l?.()}else 0===m.height&&(w(c),f("exited"),l?.())};return{state:g,getCollapseProps:e=>({"aria-hidden":!u,inert:!u,ref:(0,o.mergeRefs)(h,e?.ref),onTransitionEnd:j,style:{boxSizing:"border-box",...e?.style,...m}})}}],556457),e.s(["useHorizontalCollapse",0,function({transitionDuration:e,transitionTimingFunction:s="ease",onTransitionEnd:l,onTransitionStart:a,expanded:u,keepMounted:d}){let c={width:0,overflow:"hidden",...d?{}:{display:"none"}},p=(0,i.useEffectEvent)(()=>a?.()),h=(0,i.useRef)(null),[m,x]=(0,i.useState)(u?{}:c),[g,f]=(0,i.useState)(u?"entered":"exited"),w=e=>{(0,n.flushSync)(()=>x(e))},b=e=>{w(t=>({...t,...e}))},y=t=>{let o=e??function(e){if(!e||"string"==typeof e)return 0;let t=e/36;return Math.round((4+15*t**.25+t/5)*10)}(t);return{transition:`width ${o}ms ${s}, opacity ${o}ms ${s}`}};(0,t.useDidUpdate)(()=>{0!==e&&p(),u?window.requestAnimationFrame(()=>{(0,n.flushSync)(()=>f("entering")),b({willChange:"width",display:"block",overflow:"hidden"}),window.requestAnimationFrame(()=>{let e=r(h);b({...y(e),width:e})})}):window.requestAnimationFrame(()=>{(0,n.flushSync)(()=>f("exiting"));let e=r(h);b({...y(e),willChange:"width",width:e}),window.requestAnimationFrame(()=>b({width:0,overflow:"hidden"}))})},[u]);let j=e=>{if(e.target===h.current&&"width"===e.propertyName)if(u){let e=r(h);e===m.width?w({}):b({width:e}),f("entered"),l?.()}else 0===m.width&&(w(c),f("exited"),l?.())};return{state:g,getCollapseProps:e=>({"aria-hidden":!u,inert:!u,ref:(0,o.mergeRefs)(h,e?.ref),onTransitionEnd:j,style:{boxSizing:"border-box",...e?.style,...m}})}}],103738)},586692,e=>{"use strict";var t=e.i(330693),o=e.i(951254),i=e.i(44091),n=e.i(634917),s=e.i(275519),r=e.i(232471),l=e.i(191788),a=e.i(556457),u=e.i(103738),d=e.i(779861),c=e.i(391398);let p={transitionDuration:200,transitionTimingFunction:"ease",animateOpacity:!0,orientation:"vertical",keepMounted:!0},h=(0,s.factory)(e=>{let s,{children:h,expanded:m,transitionDuration:x,transitionTimingFunction:g,style:f,onTransitionEnd:w,onTransitionStart:b,animateOpacity:y,keepMounted:j,ref:C,orientation:v,...T}=(0,i.useProps)("Collapse",p,e),k=(0,t.useMantineEnv)(),B=(0,o.useMantineTheme)(),D=(0,d.useReducedMotion)(),q=B.respectReducedMotion&&D?0:x,S=("horizontal"===v?u.useHorizontalCollapse:a.useCollapse)({expanded:m,transitionDuration:q,transitionTimingFunction:g,onTransitionEnd:w,onTransitionStart:b,keepMounted:!1});if(0===q)return!0===j&&"test"!==k?(0,c.jsx)(l.Activity,{mode:m?"visible":"hidden",children:(0,c.jsx)(r.Box,{...T,style:f,ref:C,children:h})}):m?(0,c.jsx)(r.Box,{...T,style:f,ref:C,children:h}):null;let E="exited"===S.state;return s=!1===j?E?null:h:!0===j?(0,c.jsx)(l.Activity,{mode:E?"hidden":"visible",children:h}):h,(0,c.jsx)(r.Box,{...T,...S.getCollapseProps({style:{opacity:m||!y?1:0,transition:y?`opacity ${q}ms ${g}`:"none",...(0,n.getStyleObject)(f,B)},ref:C}),children:s})});h.displayName="@mantine/core/Collapse",e.s(["Collapse",0,h])},501345,e=>{"use strict";var t=e.i(648863),o=e.i(485108),i=e.i(981377),n=e.i(391398),s=e.i(556457),r=e.i(541772);let l={type:"code",component:function(){let[e,t]=(0,r.useDisclosure)(!1),{getCollapseProps:l}=(0,s.useCollapse)({expanded:e});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Button,{onClick:t.toggle,mb:"md",children:e?"Collapse":"Expand"}),(0,n.jsx)("div",{...l(),children:(0,n.jsx)(i.Typography,{bg:"var(--mantine-color-blue-light)",p:"xs",bdrs:"md",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})})]})},code:`
import { Button, Typography } from '@mantine/core';
import { useCollapse, useDisclosure } from '@mantine/hooks';

function Demo() {
  const [expanded, handlers] = useDisclosure(false);
  const { getCollapseProps } = useCollapse({ expanded });

  return (
    <>
      <Button onClick={handlers.toggle} mb="md">
        {expanded ? 'Collapse' : 'Expand'}
      </Button>

      <div {...getCollapseProps()}>
        <Typography bg="var(--mantine-color-blue-light)" p="xs" bdrs="md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>
      </div>
    </>
  );
}
`};var a=(0,t.__exportAll)({usage:()=>l});e.s(["UseCollapseDemos",0,a],501345)},608373,e=>{"use strict";var t=e.i(648863),o=e.i(232471),i=e.i(485108),n=e.i(586692),s=e.i(725695),r=e.i(883364),l=e.i(391398),a=e.i(541772);let u={type:"code",code:`
import { Button, Group, Text, Collapse, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [expanded, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Group justify="center" mb={5}>
        <Button onClick={toggle}>Toggle content</Button>
      </Group>

      <Collapse expanded={expanded}>
        <Text>{/* ... content */}</Text>
      </Collapse>
    </Box>
  );
}
`,component:function(){let[e,{toggle:t}]=(0,a.useDisclosure)(!1);return(0,l.jsxs)(o.Box,{maw:400,mx:"auto",children:[(0,l.jsx)(s.Group,{justify:"center",mb:5,children:(0,l.jsx)(i.Button,{onClick:t,children:"Toggle content"})}),(0,l.jsx)(n.Collapse,{expanded:e,children:(0,l.jsx)(r.Text,{children:"From Bulbapedia: Bulbasaur is a small, quadrupedal Pokémon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth. The bulb also conceals two slender, tentacle-like vines and provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within."})})]})}},d={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Button, Group, Text, Collapse, Box } from '@mantine/core';

function Demo() {
  const [expanded, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Group justify="center" mb={5}>
        <Button onClick={toggle}>Toggle with linear transition</Button>
      </Group>

      <Collapse expanded={expanded} transitionDuration={1000} transitionTimingFunction="linear">
        <Text>{/* ...content */}</Text>
      </Collapse>
    </Box>
  );
}
`,component:function(){let[e,{toggle:t}]=(0,a.useDisclosure)(!1);return(0,l.jsxs)(o.Box,{maw:400,mx:"auto",children:[(0,l.jsx)(s.Group,{justify:"center",mb:5,children:(0,l.jsx)(i.Button,{onClick:t,children:"Toggle with linear transition"})}),(0,l.jsx)(n.Collapse,{expanded:e,transitionDuration:1e3,transitionTimingFunction:"linear",children:(0,l.jsx)(r.Text,{children:"From Bulbapedia: Bulbasaur is a small, quadrupedal Pokémon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth. The bulb also conceals two slender, tentacle-like vines and provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within."})})]})}};var c=e.i(191788);function p({children:e,buttonProps:t,...s}){let[r,a]=(0,c.useState)(!1);return(0,l.jsxs)(o.Box,{maw:400,mx:"auto",mt:"md",children:[(0,l.jsx)(i.Button,{onClick:()=>a(e=>!e),mb:5,...t}),(0,l.jsx)(n.Collapse,{expanded:r,...s,children:e})]})}let h="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea atque in est quaerat dolore odio! Quibusdam, a nihil modi, maiores consequuntur ex quod suscipit illum ducimus doloribus odit commodi tenetur.",m={type:"code",component:function(){return(0,l.jsxs)(p,{buttonProps:{children:"Root collapse"},children:[(0,l.jsx)(r.Text,{mt:"md",size:"lg",fw:700,children:"This collapse contains another collapse"}),(0,l.jsx)(r.Text,{mt:"xs",children:h}),(0,l.jsxs)(p,{buttonProps:{variant:"outline",children:"Inner collapse"},children:[(0,l.jsx)(r.Text,{mt:"md",size:"lg",fw:700,children:"This collapse is inside another collapse"}),(0,l.jsx)(r.Text,{mt:"xs",children:h})]})]})}};var x=e.i(671640),g=e.i(981377);let f={type:"code",component:function(){let[e,t]=(0,a.useDisclosure)(!1);return(0,l.jsxs)(x.Stack,{h:240,align:"flex-start",children:[(0,l.jsx)(i.Button,{onClick:t.toggle,w:"fit-content",children:e?"Collapse":"Expand"}),(0,l.jsx)(n.Collapse,{expanded:e,orientation:"horizontal",children:(0,l.jsx)(g.Typography,{bg:"var(--mantine-color-blue-light)",p:"xs",bdrs:"md",w:200,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})]})},code:`
import { Button, Collapse, Stack, Typography } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [expanded, handlers] = useDisclosure(false);

  return (
    <Stack h={240} align="flex-start">
      <Button onClick={handlers.toggle} w="fit-content">
        {expanded ? 'Collapse' : 'Expand'}
      </Button>

      <Collapse expanded={expanded} orientation="horizontal">
        <Typography bg="var(--mantine-color-blue-light)" p="xs" bdrs="md" w={200}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </Typography>
      </Collapse>
    </Stack>
  );
}
`};var w=(0,t.__exportAll)({horizontal:()=>f,nested:()=>m,transition:()=>d,usage:()=>u});e.s(["CollapseDemos",0,w],608373)},236214,e=>{"use strict";var t=e.i(391398),o=e.i(38856),i=e.i(608373),n=e.i(501345);e.i(603441);var s=e.i(62558);e.i(457450);var r=e.i(418026);let l=(0,s.Layout)(r.MDX_DATA.Collapse);function a(e){let s={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.useMDXComponents)(),...e.components},{Demo:r}=s;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(r,{data:i.CollapseDemos.usage}),"\n",(0,t.jsx)(s.h2,{id:"horizontal-orientation",children:"Horizontal orientation"}),"\n",(0,t.jsx)(r,{data:i.CollapseDemos.horizontal}),"\n",(0,t.jsx)(s.h2,{id:"change-transition",children:"Change transition"}),"\n",(0,t.jsx)(s.p,{children:"Set the following props to control the transition:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"transitionDuration"})," – duration in ms"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"transitionTimingFunction"})," – timing function (ease, linear, etc.), defaults to ",(0,t.jsx)(s.code,{children:"ease"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"onTransitionEnd"})," – called when transition ends (both open and close)"]}),"\n"]}),"\n",(0,t.jsx)(r,{data:i.CollapseDemos.transition}),"\n",(0,t.jsx)(s.h2,{id:"example-nested-collapse-components",children:"Example: nested Collapse components"}),"\n",(0,t.jsx)(r,{data:i.CollapseDemos.nested}),"\n",(0,t.jsx)(s.h2,{id:"use-collapse-hook",children:"use-collapse hook"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/hooks/use-collapse",children:"use-collapse"})," is the hook version of the ",(0,t.jsx)(s.code,{children:"Collapse"})," component.\nIt allows more flexible usage and control over the collapse behavior."]}),"\n",(0,t.jsx)(r,{data:n.UseCollapseDemos.usage})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(l,{...e,children:(0,t.jsx)(a,{...e})})}])},221383,(e,t,o)=>{let i="/core/collapse";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(236214)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([i])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);