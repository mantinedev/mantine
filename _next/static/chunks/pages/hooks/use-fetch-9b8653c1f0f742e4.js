(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[96203],{37261:(e,o,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-fetch",function(){return r(37226)}])},37226:(e,o,r)=>{"use strict";r.r(o),r.d(o,{default:()=>d});var t=r(31085),n=r(71184),s=r(85396),i=r(85954),l=r(38215);let c=(0,i.P)(l.XZ.useFetch);function a(e){let o={code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components},{Demo:r}=o;return r||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"useFetch"})," hook sends a GET request to the specified URL and returns the response data, loading state, error,\n",(0,t.jsx)(o.code,{children:"refetch"})," and ",(0,t.jsx)(o.code,{children:"abort"})," functions."]}),"\n",(0,t.jsx)(r,{data:s.l}),"\n",(0,t.jsx)(o.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"export interface UseFetchOptions extends RequestInit {\n  autoInvoke?: boolean;\n}\n\nfunction useFetch<T>(\n  url: string,\n  options?: UseFetchOptions\n): {\n  data: T | null;\n  loading: boolean;\n  error: Error | null;\n  refetch: () => Promise<T> | undefined;\n  abort: () => void;\n};\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(c,{...e,children:(0,t.jsx)(a,{...e})})}},85396:(e,o,r)=>{"use strict";r.d(o,{l:()=>u});var t=r(31085),n=r(93065),s=r(56051),i=r(52022),l=r(34056),c=r(37905),a=r(35395),d=r(14041);let u={type:"code",component:function(){let{data:e,loading:o,error:r,refetch:u,abort:h}=function(e,{autoInvoke:o=!0,...r}={}){let[t,n]=(0,d.useState)(null),[s,i]=(0,d.useState)(!1),[l,c]=(0,d.useState)(null),a=(0,d.useRef)(null),u=(0,d.useCallback)(()=>{if(e)return a.current&&a.current.abort(),a.current=new AbortController,i(!0),fetch(e,{signal:a.current.signal,...r}).then(e=>e.json()).then(e=>(n(e),i(!1),e)).catch(e=>(i(!1),"AbortError"!==e.name&&c(e),e))},[e]),h=(0,d.useCallback)(()=>{a.current&&a.current?.abort("")},[]);return(0,d.useEffect)(()=>(o&&u(),()=>{a.current&&a.current.abort("")}),[u,o]),{data:t,loading:s,error:l,refetch:u,abort:h}}("https://jsonplaceholder.typicode.com/todos/");return(0,t.jsxs)("div",{children:[r&&(0,t.jsx)(n.E,{c:"red",children:r.message}),(0,t.jsxs)(s.Y,{children:[(0,t.jsx)(i.$,{onClick:u,color:"blue",children:"Refetch"}),(0,t.jsx)(i.$,{onClick:h,color:"red",children:"Abort"})]}),(0,t.jsxs)(l.a,{pos:"relative",mt:"md",children:[(0,t.jsx)(c.C,{block:!0,children:e?JSON.stringify(e.slice(0,3),null,2):"Fetching"}),(0,t.jsx)(a.p,{visible:o})]})]})},code:`
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
`}},35395:(e,o,r)=>{"use strict";r.d(o,{p:()=>b});var t=r(31085);r(14041);var n=r(81296),s=r(7098),i=r(92408),l=r(29686),c=r(69564),a=r(34056),d=r(6754),u=r(25810),h=r(51629),p=r(98523),f={root:"m_6e45937b",loader:"m_e8eb006c",overlay:"m_df587f17"};let x={transitionProps:{transition:"fade",duration:0},overlayProps:{backgroundOpacity:.75},zIndex:(0,n.I)("overlay")},m=(0,s.V)((e,{zIndex:o})=>({root:{"--lo-z-index":o?.toString()}})),b=(0,d.P9)((e,o)=>{let r=(0,l.Y)("LoadingOverlay",x,e),{classNames:n,className:s,style:d,styles:b,unstyled:g,vars:j,transitionProps:v,loaderProps:y,overlayProps:k,visible:_,zIndex:C,...E}=r,O=(0,i.xd)(),F=(0,c.I)({name:"LoadingOverlay",classes:f,props:r,className:s,style:d,classNames:n,styles:b,unstyled:g,vars:j,varsResolver:m}),w={...x.overlayProps,...k};return(0,t.jsx)(p.e,{transition:"fade",...v,mounted:!!_,children:e=>(0,t.jsxs)(a.a,{...F("root",{style:e}),ref:o,...E,children:[(0,t.jsx)(u.a,{...F("loader"),unstyled:g,...y}),(0,t.jsx)(h.h,{...w,...F("overlay"),darkHidden:!0,unstyled:g,color:k?.color||O.white}),(0,t.jsx)(h.h,{...w,...F("overlay"),lightHidden:!0,unstyled:g,color:k?.color||O.colors.dark[5]})]})})});b.classes=f,b.displayName="@mantine/core/LoadingOverlay"}},e=>{var o=o=>e(e.s=o);e.O(0,[67456,39699,68831,90636,46593,38792],()=>o(37261)),_N_E=e.O()}]);