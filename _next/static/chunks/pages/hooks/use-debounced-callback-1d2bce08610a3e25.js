(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[76546],{23187:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-debounced-callback",function(){return n(44706)}])},44706:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var a=n(52322),r=n(45392),s=n(50091),i=n(79016),c=n(33638);let o=(0,i.A)(c.us.useDebouncedCallback);function u(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t.p,{children:"useDebouncedCallback hook creates a debounced version of a callback function,\ndelaying its execution until a specified time has elapsed since the last invocation."}),"\n",(0,a.jsx)(n,{data:s.A}),"\n",(0,a.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"function useDebouncedCallback<T extends (...args: any[]) => any>(\n  callback: T,\n  delay: number\n): (...args: Parameters<T>) => void;\n"})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(o,{...e,children:(0,a.jsx)(u,{...e})})}},50091:function(e,t,n){"use strict";n.d(t,{A:function(){return u}});var a=n(2784),r=n(74770),s=n(12491),i=n(8582),c=n(64006);let o=`
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
`,u={type:"code",component:function(){let[e,t]=(0,a.useState)(""),[n,o]=(0,a.useState)([]),[u,l]=(0,a.useState)(!1),d=(0,c.y)(async e=>{l(!0),o(await new Promise(t=>{setTimeout(()=>{t(""===e.trim()?[]:[,,,,,].fill(0).map((t,n)=>({id:n,title:`${e} ${n+1}`})))},1e3)})),l(!1)},500);return a.createElement(a.Fragment,null,a.createElement(r.o,{value:e,onChange:e=>{t(e.currentTarget.value),d(e.currentTarget.value)},placeholder:"Search...",rightSection:u&&a.createElement(s.a,{size:20})}),n.map(e=>a.createElement(i.x,{key:e.id,size:"sm"},e.title)))},code:o,centered:!0,maxWidth:340}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=23187)}),_N_E=e.O()}]);