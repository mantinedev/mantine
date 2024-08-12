(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[37885],{24333:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-fetch",function(){return t(38723)}])},38723:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var o=t(52322),r=t(45392),i=t(76578),c=t(25071),s=t(15019);let l=(0,c.A)(s.us.useFetch);function a(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"useFetch"})," hook sends a GET request to the specified URL and returns the response data, loading state, error,\n",(0,o.jsx)(n.code,{children:"refetch"})," and ",(0,o.jsx)(n.code,{children:"abort"})," functions."]}),"\n",(0,o.jsx)(t,{data:i.u}),"\n",(0,o.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"export interface UseFetchOptions extends RequestInit {\n  autoInvoke?: boolean;\n}\n\nfunction useFetch<T>(\n  url: string,\n  options?: UseFetchOptions\n): {\n  data: T | null;\n  loading: boolean;\n  error: Error | null;\n  refetch: () => Promise<T> | undefined;\n  abort: () => void;\n};\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(l,{...e,children:(0,o.jsx)(a,{...e})})}},76578:function(e,n,t){"use strict";t.d(n,{u:function(){return u}});var o=t(52322),r=t(8582),i=t(93010),c=t(17115),s=t(28559),l=t(45909),a=t(20992),d=t(2784);let u={type:"code",component:function(){let{data:e,loading:n,error:t,refetch:u,abort:h}=function(e,{autoInvoke:n=!0,...t}={}){let[o,r]=(0,d.useState)(null),[i,c]=(0,d.useState)(!1),[s,l]=(0,d.useState)(null),a=(0,d.useRef)(null),u=(0,d.useCallback)(()=>{if(e)return a.current&&a.current.abort(),a.current=new AbortController,c(!0),fetch(e,{signal:a.current.signal,...t}).then(e=>e.json()).then(e=>(r(e),c(!1),e)).catch(e=>(c(!1),"AbortError"!==e.name&&l(e),e))},[e]),h=(0,d.useCallback)(()=>{a.current&&a.current?.abort("")},[]);return(0,d.useEffect)(()=>(n&&u(),()=>{a.current&&a.current.abort("")}),[u,n]),{data:o,loading:i,error:s,refetch:u,abort:h}}("https://jsonplaceholder.typicode.com/todos/");return(0,o.jsxs)("div",{children:[t&&(0,o.jsx)(r.x,{c:"red",children:t.message}),(0,o.jsxs)(i.Z,{children:[(0,o.jsx)(c.z,{onClick:u,color:"blue",children:"Refetch"}),(0,o.jsx)(c.z,{onClick:h,color:"red",children:"Abort"})]}),(0,o.jsxs)(s.x,{pos:"relative",mt:"md",children:[(0,o.jsx)(l.E,{block:!0,children:e?JSON.stringify(e.slice(0,3),null,2):"Fetching"}),(0,o.jsx)(a.f,{visible:n})]})]})},code:`
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
`}},20992:function(e,n,t){"use strict";t.d(n,{f:function(){return b}});var o=t(52322);t(2784);var r=t(97263),i=t(11200),c=t(68755),s=t(38483),l=t(46690),a=t(28559),d=t(82027),u=t(12491),h=t(87170),f=t(96321),p={root:"m_6e45937b",loader:"m_e8eb006c",overlay:"m_df587f17"};let x={transitionProps:{transition:"fade",duration:0},overlayProps:{backgroundOpacity:.75},zIndex:(0,r.w)("overlay")},m=(0,i.Z)((e,{zIndex:n})=>({root:{"--lo-z-index":n?.toString()}})),b=(0,d.d5)((e,n)=>{let t=(0,s.w)("LoadingOverlay",x,e),{classNames:r,className:i,style:d,styles:b,unstyled:g,vars:j,transitionProps:v,loaderProps:y,overlayProps:k,visible:_,zIndex:C,...E}=t,O=(0,c.rZ)(),w=(0,l.y)({name:"LoadingOverlay",classes:p,props:t,className:i,style:d,classNames:r,styles:b,unstyled:g,vars:j,varsResolver:m}),F={...x.overlayProps,...k};return(0,o.jsx)(f.u,{transition:"fade",...v,mounted:!!_,children:e=>(0,o.jsxs)(a.x,{...w("root",{style:e}),ref:n,...E,children:[(0,o.jsx)(u.a,{...w("loader"),unstyled:g,...y}),(0,o.jsx)(h.a,{...F,...w("overlay"),darkHidden:!0,unstyled:g,color:k?.color||O.white}),(0,o.jsx)(h.a,{...F,...w("overlay"),lightHidden:!0,unstyled:g,color:k?.color||O.colors.dark[5]})]})})});b.classes=p,b.displayName="@mantine/core/LoadingOverlay"}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=24333)}),_N_E=e.O()}]);