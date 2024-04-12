(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[37885],{24333:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-fetch",function(){return n(38723)}])},38723:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(52322),o=n(45392),c=n(76578),l=n(79016),a=n(33638);let i=(0,l.A)(a.us.useFetch);function s(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"useFetch"})," hook sends a GET request to the specified URL and returns the response data, loading state, error,\n",(0,r.jsx)(t.code,{children:"refetch"})," and ",(0,r.jsx)(t.code,{children:"abort"})," functions."]}),"\n",(0,r.jsx)(n,{data:c.u}),"\n",(0,r.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"export interface UseFetchOptions extends RequestInit {\n  autoInvoke?: boolean;\n}\n\nfunction useFetch<T>(\n  url: string,\n  options?: UseFetchOptions\n): {\n  data: T | null;\n  loading: boolean;\n  error: Error | null;\n  refetch: () => Promise<T> | undefined;\n  abort: () => void;\n};\n"})})]})}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(i,{...e,children:(0,r.jsx)(s,{...e})})}},76578:function(e,t,n){"use strict";n.d(t,{u:function(){return u}});var r=n(2784),Text=n(8582),o=n(93010),c=n(17115),l=n(28559),a=n(45909),i=n(20992);let s=`
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
`,u={type:"code",component:function(){let{data:e,loading:t,error:n,refetch:s,abort:u}=function(e,{autoInvoke:t=!0,...n}={}){let[o,c]=(0,r.useState)(null),[l,a]=(0,r.useState)(!1),[i,s]=(0,r.useState)(null),u=(0,r.useRef)(null),d=(0,r.useCallback)(()=>{if(e)return u.current&&u.current.abort(),u.current=new AbortController,a(!0),fetch(e,{signal:u.current.signal,...n}).then(e=>e.json()).then(e=>(c(e),a(!1),e)).catch(e=>{throw a(!1),"AbortError"!==e.name&&s(e),e})},[e]),h=(0,r.useCallback)(()=>{u.current&&u.current?.abort()},[]);return(0,r.useEffect)(()=>(t&&d(),()=>{u.current&&u.current.abort()}),[d,t]),{data:o,loading:l,error:i,refetch:d,abort:h}}("https://jsonplaceholder.typicode.com/todos/");return r.createElement("div",null,n&&r.createElement(Text.x,{c:"red"},n.message),r.createElement(o.Z,null,r.createElement(c.z,{onClick:s,color:"blue"},"Refetch"),r.createElement(c.z,{onClick:u,color:"red"},"Abort")),r.createElement(l.x,{pos:"relative",mt:"md"},r.createElement(a.E,{block:!0},e?JSON.stringify(e.slice(0,3),null,2):"Fetching"),r.createElement(i.f,{visible:t})))},code:s}},20992:function(e,t,n){"use strict";n.d(t,{f:function(){return g}});var r=n(2784),o=n(97263),c=n(11200),l=n(68755),a=n(38483),i=n(62378),s=n(28559),u=n(82027),d=n(12491),h=n(87170),f=n(96321),m={root:"m_6e45937b",loader:"m_e8eb006c",overlay:"m_df587f17"};let p={transitionProps:{transition:"fade",duration:0},overlayProps:{backgroundOpacity:.75},zIndex:(0,o.w)("overlay")},b=(0,c.Z)((e,{zIndex:t})=>({root:{"--lo-z-index":t?.toString()}})),g=(0,u.d)((e,t)=>{let n=(0,a.w)("LoadingOverlay",p,e),{classNames:o,className:c,style:u,styles:g,unstyled:x,vars:v,transitionProps:E,loaderProps:y,overlayProps:k,visible:j,zIndex:_,...w}=n,C=(0,l.rZ)(),O=(0,i.y)({name:"LoadingOverlay",classes:m,props:n,className:c,style:u,classNames:o,styles:g,unstyled:x,vars:v,varsResolver:b}),F={...p.overlayProps,...k};return r.createElement(f.u,{transition:"fade",...E,mounted:!!j},e=>r.createElement(s.x,{...O("root",{style:e}),ref:t,...w},r.createElement(d.a,{...O("loader"),unstyled:x,...y}),r.createElement(h.a,{...F,...O("overlay"),darkHidden:!0,unstyled:x,color:k?.color||C.white}),r.createElement(h.a,{...F,...O("overlay"),lightHidden:!0,unstyled:x,color:k?.color||C.colors.dark[5]})))});g.classes=m,g.displayName="@mantine/core/LoadingOverlay"}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=24333)}),_N_E=e.O()}]);