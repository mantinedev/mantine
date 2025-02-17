(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[97280],{65701:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-debounced-callback",function(){return n(51309)}])},51309:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var a=n(31085),r=n(71184),s=n(500),i=n(85954),c=n(38215);let o=(0,i.P)(c.XZ.useDebouncedCallback);function l(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t.p,{children:"useDebouncedCallback hook creates a debounced version of a callback function,\ndelaying its execution until a specified time has elapsed since the last invocation."}),"\n",(0,a.jsx)(n,{data:s.r}),"\n",(0,a.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"function useDebouncedCallback<T extends (...args: any[]) => any>(\n  callback: T,\n  delay: number\n): (...args: Parameters<T>) => void;\n"})})]})}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(o,{...e,children:(0,a.jsx)(l,{...e})})}},500:(e,t,n)=>{"use strict";n.d(t,{r:()=>l});var a=n(31085),r=n(14041),s=n(90275),i=n(25810),c=n(93065),o=n(99627);let l={type:"code",component:function(){let[e,t]=(0,r.useState)(""),[n,l]=(0,r.useState)([]),[u,d]=(0,r.useState)(!1),h=(0,o.Y)(async e=>{d(!0),l(await new Promise(t=>{setTimeout(()=>{t(""===e.trim()?[]:[,,,,,].fill(0).map((t,n)=>({id:n,title:`${e} ${n+1}`})))},1e3)})),d(!1)},500);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.k,{value:e,onChange:e=>{t(e.currentTarget.value),h(e.currentTarget.value)},placeholder:"Search...",rightSection:u&&(0,a.jsx)(i.a,{size:20})}),n.map(e=>(0,a.jsx)(c.E,{size:"sm",children:e.title},e.id))]})},code:`
import { useState } from 'react';
import { Loader, Text, TextInput } from '@mantine/core';
import { useDebouncedCallback } from '@mantine/hooks';

function getSearchResults(query: string): Promise<{ id: number; title: string }[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        query.trim() === ''
          ? []
          : Array(5)
              .fill(0)
              .map((_, index) => ({ id: index, title: \`\${query} \${index + 1}\` }))
      );
    }, 1000);
  });
}

function Demo() {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState<{ id: number; title: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = useDebouncedCallback(async (query: string) => {
    setLoading(true);
    setSearchResults(await getSearchResults(query));
    setLoading(false);
  }, 500);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
    handleSearch(event.currentTarget.value);
  };

  return (
    <>
      <TextInput
        value={search}
        onChange={handleChange}
        placeholder="Search..."
        rightSection={loading && <Loader size={20} />}
      />
      {searchResults.map((result) => (
        <Text key={result.id} size="sm">
          {result.title}
        </Text>
      ))}
    </>
  );
}
`,centered:!0,maxWidth:340}}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,39699,68831,90636,46593,38792],()=>t(65701)),_N_E=e.O()}]);