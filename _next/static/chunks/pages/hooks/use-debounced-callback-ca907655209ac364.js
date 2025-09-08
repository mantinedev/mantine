(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[97280],{1469:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-debounced-callback",function(){return n(8209)}])},1798:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let a=(0,n(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},6620:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let a=(0,n(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let a=(0,n(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},8209:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var a=n(6029),s=n(16285),l=n(83897),c=n(38547),o=n(5262);let d=(0,c.P)(o.XZ.useDebouncedCallback);function r(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"use-debounced-callback"})," creates a debounced version of the given function,\ndelaying its execution until a specified time has elapsed since the last invocation."]}),"\n",(0,a.jsx)(n,{data:l.r}),"\n",(0,a.jsx)(t.h2,{id:"flushonunmount-option",children:"flushOnUnmount option"}),"\n",(0,a.jsxs)(t.p,{children:["By default, the callback is not fired when the component unmounts.\nIf you want to execute the pending callback before the component unmounts,\nset ",(0,a.jsx)(t.code,{children:"flushOnUnmount: true"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { useDebouncedCallback } from '@mantine/hooks';\n\nconst callback = useDebouncedCallback(\n  () => console.log('Hello'),\n  { delay: 1000, flushOnUnmount: true },\n);\n"})}),"\n",(0,a.jsx)(t.h2,{id:"flush-debounced-callback",children:"Flush debounced callback"}),"\n",(0,a.jsxs)(t.p,{children:["You can call the ",(0,a.jsx)(t.code,{children:"flush"})," method to execute the debounced callback immediately:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { useDebouncedCallback } from '@mantine/hooks';\n\nconst callback = useDebouncedCallback(() => console.log('Hello'), 1000);\n\ncallback.flush(); // immediately executes the pending callback\n"})}),"\n",(0,a.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"interface UseDebouncedCallbackOptions {\n  delay: number;\n  flushOnUnmount?: boolean;\n}\n\ntype UseDebouncedCallbackReturnValue<T extends (...args: any[]) => any> = ((\n  ...args: Parameters<T>\n) => void) & { flush: () => void };\n\nfunction useDebouncedCallback<T extends (...args: any[]) => any>(\n  callback: T,\n  delayOrOptions: number | UseDebouncedCallbackOptions\n): UseDebouncedCallbackReturnValue<T>\n"})}),"\n",(0,a.jsx)(t.h2,{id:"exported-types",children:"Exported types"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"UseDebouncedCallbackOptions"})," and ",(0,a.jsx)(t.code,{children:"UseDebouncedCallbackReturnValue"})," types are exported from ",(0,a.jsx)(t.code,{children:"@mantine/hooks"})," package,\nyou can import them in your application:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import type { UseDebouncedCallbackOptions, UseDebouncedCallbackReturnValue } from '@mantine/hooks';\n"})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(d,{...e,children:(0,a.jsx)(r,{...e})})}},24583:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let a=(0,n(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},34891:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let a=(0,n(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},41949:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let a=(0,n(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},65433:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let a=(0,n(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},83897:(e,t,n)=>{"use strict";n.d(t,{r:()=>r});var a=n(6029),s=n(55729),l=n(38774),c=n(10109),o=n(45208),d=n(11886);let r={type:"code",component:function(){let[e,t]=(0,s.useState)(""),[n,r]=(0,s.useState)([]),[i,u]=(0,s.useState)(!1),h=(0,d.Y)(async e=>{u(!0),r(await new Promise(t=>{setTimeout(()=>{t(""===e.trim()?[]:[,,,,,].fill(0).map((t,n)=>({id:n,title:`${e} ${n+1}`})))},1e3)})),u(!1)},500);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.k,{value:e,onChange:e=>{t(e.currentTarget.value),h(e.currentTarget.value)},placeholder:"Search...",rightSection:i&&(0,a.jsx)(c.a,{size:20})}),n.map(e=>(0,a.jsx)(o.E,{size:"sm",children:e.title},e.id))]})},code:`
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
`,centered:!0,maxWidth:340}},84276:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let a=(0,n(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let a=(0,n(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])}},e=>{e.O(0,[38547,90636,46593,38792],()=>e(e.s=1469)),_N_E=e.O()}]);