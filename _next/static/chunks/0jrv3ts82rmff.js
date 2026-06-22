(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,o)=>{let r={};for(var n in e)t(r,n,{get:e[n],enumerable:!0});return o||t(r,Symbol.toStringTag,{value:"Module"}),r}])},505716,e=>{"use strict";var t=e.i(749218),o=e.i(481178),r=e.i(951254),n=e.i(44091),s=e.i(391466),i=e.i(275519),a=e.i(232471),l=e.i(476273),c=e.i(34515),d=e.i(935769),u={root:"m_6e45937b",loader:"m_e8eb006c",overlay:"m_df587f17"},h=e.i(391398);let p={transitionProps:{transition:"fade",duration:0},overlayProps:{backgroundOpacity:.75},zIndex:(0,t.getDefaultZIndex)("overlay")},m=(0,o.createVarsResolver)((e,{zIndex:t})=>({root:{"--lo-z-index":t?.toString()}})),x=(0,i.factory)(e=>{let t=(0,n.useProps)("LoadingOverlay",p,e),{classNames:o,className:i,style:x,styles:f,unstyled:y,vars:g,transitionProps:j,loaderProps:v,overlayProps:b,visible:k,zIndex:T,attributes:O,onEnter:_,onEntered:F,onExit:N,onExited:B,...C}=t,R=(0,r.useMantineTheme)(),U=(0,s.useStyles)({name:"LoadingOverlay",classes:u,props:t,className:i,style:x,classNames:o,styles:f,unstyled:y,attributes:O,vars:g,varsResolver:m}),P={...p.overlayProps,...b};return(0,h.jsx)(c.Transition,{transition:"fade",...j,mounted:!!k,onEnter:_,onEntered:F,onExit:N,onExited:B,children:e=>(0,h.jsxs)(a.Box,{...U("root",{style:e}),...C,children:[(0,h.jsx)(d.Loader,{unstyled:y,...v,...U("loader",{className:v?.className,style:v?.style})}),(0,h.jsx)(l.Overlay,{...P,...U("overlay",{className:P?.className,style:P?.style}),darkHidden:!0,unstyled:y,color:b?.color||R.white}),(0,h.jsx)(l.Overlay,{...P,...U("overlay",{className:P?.className,style:P?.style}),lightHidden:!0,unstyled:y,color:b?.color||R.colors.dark[5]})]})})});x.classes=u,x.varsResolver=m,x.displayName="@mantine/core/LoadingOverlay",e.s(["LoadingOverlay",0,x],505716)},612457,e=>{"use strict";var t=e.i(648863),o=e.i(232471),r=e.i(485108),n=e.i(301388),s=e.i(725695),i=e.i(505716),a=e.i(883364),l=e.i(391398),c=e.i(191788);let d={type:"code",component:function(){let{data:e,loading:t,error:d,refetch:u,abort:h}=function(e,{autoInvoke:t=!0,...o}={}){let[r,n]=(0,c.useState)(null),[s,i]=(0,c.useState)(!1),[a,l]=(0,c.useState)(null),d=(0,c.useRef)(null),u=(0,c.useCallback)(()=>(d.current&&d.current.abort(),d.current=new AbortController,i(!0),fetch(e,{...o,signal:d.current.signal}).then(e=>{if(!e.ok)throw Error(`Request failed with status ${e.status}`);return e.json()}).then(e=>(n(e),i(!1),e)).catch(e=>(i(!1),"AbortError"!==e.name&&l(e),e))),[e,JSON.stringify(o)]),h=(0,c.useCallback)(()=>{d.current&&d.current?.abort("")},[]);return(0,c.useEffect)(()=>(t&&u(),()=>{d.current&&d.current.abort("")}),[u,t]),{data:r,loading:s,error:a,refetch:u,abort:h}}("https://jsonplaceholder.typicode.com/todos/");return(0,l.jsxs)("div",{children:[d&&(0,l.jsx)(a.Text,{c:"red",children:d.message}),(0,l.jsxs)(s.Group,{children:[(0,l.jsx)(r.Button,{onClick:u,color:"blue",children:"Refetch"}),(0,l.jsx)(r.Button,{onClick:h,color:"red",children:"Abort"})]}),(0,l.jsxs)(o.Box,{pos:"relative",mt:"md",children:[(0,l.jsx)(n.Code,{block:!0,children:e?JSON.stringify(e.slice(0,3),null,2):"Fetching"}),(0,l.jsx)(i.LoadingOverlay,{visible:t})]})]})},code:`
import { Box, Button, Code, Group, LoadingOverlay, Text } from '@mantine/core';
import { useFetch } from '@mantine/hooks';

interface Item {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function Demo() {
  const { data, loading, error, refetch, abort } = useFetch<Item[]>(
    'https://jsonplaceholder.typicode.com/todos/'
  );

  return (
    <div>
      {error && <Text c="red">{error.message}</Text>}

      <Group>
        <Button onClick={refetch} color="blue">
          Refetch
        </Button>
        <Button onClick={abort} color="red">
          Abort
        </Button>
      </Group>
      <Box pos="relative" mt="md">
        <Code block>{data ? JSON.stringify(data.slice(0, 3), null, 2) : 'Fetching'}</Code>
        <LoadingOverlay visible={loading} />
      </Box>
    </div>
  );
}
`};var u=(0,t.__exportAll)({usage:()=>d});e.s(["UseFetchDemos",0,u],612457)},449967,e=>{"use strict";var t=e.i(391398),o=e.i(38856),r=e.i(612457);e.i(603441);var n=e.i(62558);e.i(457450);var s=e.i(418026);let i=(0,n.Layout)(s.MDX_DATA.useFetch);function a(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.useMDXComponents)(),...e.components},{Demo:s}=n;return s||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"useFetch"})," hook sends a GET request to the specified URL and returns the response data, loading state, error,\n",(0,t.jsx)(n.code,{children:"refetch"})," and ",(0,t.jsx)(n.code,{children:"abort"})," functions."]}),"\n",(0,t.jsx)(s,{data:r.UseFetchDemos.usage}),"\n",(0,t.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"interface UseFetchOptions extends RequestInit {\n  autoInvoke?: boolean;\n}\n\ninterface UseFetchReturnValue<T> {\n  data: T | null;\n  loading: boolean;\n  error: Error | null;\n  refetch: () => Promise<any>;\n  abort: () => void;\n}\n\nfunction useFetch<T>(\n  url: string,\n  options?: UseFetchOptions,\n): UseFetchReturnValue<T>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"exported-types",children:"Exported types"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"UseFetchOptions"})," and ",(0,t.jsx)(n.code,{children:"UseFetchReturnValue"})," types are exported from the ",(0,t.jsx)(n.code,{children:"@mantine/hooks"})," package;\nyou can import them in your application:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import type { UseFetchOptions, UseFetchReturnValue } from '@mantine/hooks';\n"})})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(i,{...e,children:(0,t.jsx)(a,{...e})})}])},957855,(e,t,o)=>{let r="/hooks/use-fetch";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(449967)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);