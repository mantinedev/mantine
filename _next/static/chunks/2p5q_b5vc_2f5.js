(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,n)=>{let r={};for(var o in e)t(r,o,{get:e[o],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:"Module"}),r}])},505716,e=>{"use strict";var t=e.i(749218),n=e.i(481178),r=e.i(951254),o=e.i(44091),s=e.i(391466),a=e.i(275519),l=e.i(232471),i=e.i(476273),c=e.i(34515),u=e.i(935769),d={root:"m_6e45937b",loader:"m_e8eb006c",overlay:"m_df587f17"},h=e.i(391398);let m={transitionProps:{transition:"fade",duration:0},overlayProps:{backgroundOpacity:.75},zIndex:(0,t.getDefaultZIndex)("overlay")},p=(0,n.createVarsResolver)((e,{zIndex:t})=>({root:{"--lo-z-index":t?.toString()}})),x=(0,a.factory)(e=>{let t=(0,o.useProps)("LoadingOverlay",m,e),{classNames:n,className:a,style:x,styles:f,unstyled:j,vars:v,transitionProps:g,loaderProps:T,overlayProps:b,visible:y,zIndex:w,attributes:k,onEnter:S,onEntered:C,onExit:V,onExited:D,...I}=t,E=(0,r.useMantineTheme)(),A=(0,s.useStyles)({name:"LoadingOverlay",classes:d,props:t,className:a,style:x,classNames:n,styles:f,unstyled:j,attributes:k,vars:v,varsResolver:p}),R={...m.overlayProps,...b};return(0,h.jsx)(c.Transition,{transition:"fade",...g,mounted:!!y,onEnter:S,onEntered:C,onExit:V,onExited:D,children:e=>(0,h.jsxs)(l.Box,{...A("root",{style:e}),...I,children:[(0,h.jsx)(u.Loader,{unstyled:j,...T,...A("loader",{className:T?.className,style:T?.style})}),(0,h.jsx)(i.Overlay,{...R,...A("overlay",{className:R?.className,style:R?.style}),darkHidden:!0,unstyled:j,color:b?.color||E.white}),(0,h.jsx)(i.Overlay,{...R,...A("overlay",{className:R?.className,style:R?.style}),lightHidden:!0,unstyled:j,color:b?.color||E.colors.dark[5]})]})})});x.classes=d,x.varsResolver=p,x.displayName="@mantine/core/LoadingOverlay",e.s(["LoadingOverlay",0,x],505716)},37930,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),t.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"}))]]),o=t.forwardRef((e,o)=>t.createElement(n.default,{ref:o,...e,weights:r}));o.displayName="PlusIcon",e.s(["PlusIcon",0,o],37930)},726435,e=>{"use strict";var t=e.i(114108),n=e.i(191788);function r(e,r){let o=(0,t.useCallbackRef)(e),s=(0,n.useRef)(null),a=(0,n.useRef)(null),l=(0,n.useRef)(!0),i=(0,n.useRef)(r),c=(0,n.useRef)(-1),u=(0,n.useCallback)((...e)=>{o(...e),s.current=e,a.current=e,l.current=!1},[o]),d=(0,n.useCallback)(()=>{s.current&&s.current!==a.current?(u(...s.current),c.current=window.setTimeout(d,i.current)):l.current=!0},[u]),h=(0,n.useCallback)((...e)=>{l.current?(u(...e),c.current=window.setTimeout(d,i.current)):s.current=e},[u,d]);return(0,n.useEffect)(()=>{i.current=r},[r]),[h,()=>window.clearTimeout(c.current)]}e.s(["useThrottledCallback",0,function(e,t){let[o,s]=r(e,t);return(0,n.useEffect)(()=>s,[]),o},"useThrottledCallbackWithClearTimeout",0,r])},708258,e=>{"use strict";var t=e.i(648863),n=e.i(191788),r=e.i(883364),o=e.i(841209),s=e.i(391398),a=e.i(726435);let l={type:"code",component:function(){let[e,t]=(0,n.useState)(""),l=function(e){let[t,r]=(0,n.useState)(e),o=(0,n.useRef)(e),[s,l]=(0,a.useThrottledCallbackWithClearTimeout)(r,1e3);return(0,n.useEffect)(()=>{e!==o.current&&(o.current=e,s(e))},[s,e]),(0,n.useEffect)(()=>l,[]),t}(e);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.TextInput,{placeholder:"Search",onChange:e=>t(e.currentTarget.value)}),(0,s.jsxs)(r.Text,{children:["Throttled value: ",l||"–"]})]})},code:`
import { Text, TextInput } from '@mantine/core';
import { useThrottledValue } from '@mantine/hooks';

function Demo() {
  const [value, setValue] = useState('');
  const throttledValue = useThrottledValue(value, 1000);

  return (
    <>
      <TextInput placeholder="Search" onChange={(event) => setValue(event.currentTarget.value)} />
      <Text>Throttled value: {throttledValue || '–'}</Text>
    </>
  );
}
`};var i=(0,t.__exportAll)({usage:()=>l});e.s(["UseThrottledValueDemos",0,i],708258)},537898,e=>{"use strict";var t=e.i(648863),n=e.i(883364),r=e.i(841209),o=e.i(391398),s=e.i(726435),a=e.i(191788);let l={type:"code",component:function(){let[e,t]=function(){let[e,t]=(0,a.useState)(""),[n,r]=(0,s.useThrottledCallbackWithClearTimeout)(t,1e3);return(0,a.useEffect)(()=>r,[]),[e,n]}();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.TextInput,{placeholder:"Search",onChange:e=>t(e.currentTarget.value)}),(0,o.jsxs)(n.Text,{children:["Throttled value: ",e||"–"]})]})},code:`
import { Text, TextInput } from '@mantine/core';
import { useThrottledState } from '@mantine/hooks';

function Demo() {
  const [throttledValue, setThrottledValue] = useThrottledState('', 1000);

  return (
    <>
      <TextInput
        placeholder="Search"
        onChange={(event) => setThrottledValue(event.currentTarget.value)}
      />
      <Text>Throttled value: {throttledValue || '–'}</Text>
    </>
  );
}
`};var i=(0,t.__exportAll)({usage:()=>l});e.s(["UseThrottledStateDemos",0,i],537898)},117924,e=>{"use strict";var t=e.i(648863),n=e.i(191788),r=e.i(883364),o=e.i(841209),s=e.i(391398),a=e.i(726435);let l={type:"code",component:function(){let[e,t]=(0,n.useState)(""),l=(0,a.useThrottledCallback)(e=>t(e),1e3);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.TextInput,{placeholder:"Search",onChange:e=>l(e.currentTarget.value)}),(0,s.jsxs)(r.Text,{children:["Throttled value: ",e||"–"]})]})},code:`
import { Text, TextInput } from '@mantine/core';
import { useThrottledCallback } from '@mantine/hooks';

function Demo() {
  const [throttledValue, setValue] = useState('');
  const throttledSetValue = useThrottledCallback((value) => setValue(value), 1000);

  return (
    <>
      <TextInput
        placeholder="Search"
        onChange={(event) => throttledSetValue(event.currentTarget.value)}
      />
      <Text>Throttled value: {throttledValue || '–'}</Text>
    </>
  );
}
`};var i=(0,t.__exportAll)({usage:()=>l});e.s(["UseThrottledCallbackDemos",0,i],117924)},798371,e=>{"use strict";var t=e.i(648863),n=e.i(191788),r=e.i(485108),o=e.i(883364),s=e.i(391398);let a={type:"code",component:function(){let e,[t,a]=(0,n.useState)(0),l=!0===(e=(0,n.useRef)(!0)).current?(e.current=!1,!0):e.current;return(0,s.jsxs)("div",{children:[(0,s.jsxs)(o.Text,{children:["Is first render:"," ",(0,s.jsx)(o.Text,{span:!0,c:l?"teal":"red",children:l?"Yes":"No!"})]}),(0,s.jsxs)(r.Button,{onClick:()=>a(e=>e+1),mt:"sm",children:["Rerendered ",t," times, click to rerender"]})]})},code:`
import { useState } from 'react';
import { Button, Text } from '@mantine/core';
import { useIsFirstRender } from '@mantine/hooks';

function Demo() {
  const [counter, setCounter] = useState(0);
  const firstRender = useIsFirstRender();
  return (
    <div>
      <Text>
        Is first render:{' '}
        <Text span c={firstRender ? 'teal' : 'red'}>
          {firstRender ? 'Yes' : 'No!'}
        </Text>
      </Text>
      <Button onClick={() => setCounter((c) => c + 1)} mt="sm">
        Rerendered {counter} times, click to rerender
      </Button>
    </div>
  );
}
`};var l=(0,t.__exportAll)({usage:()=>a});e.s(["UseIsFirstRenderDemos",0,l],798371)},396134,e=>{"use strict";var t=e.i(648863),n=e.i(301388),r=e.i(883364),o=e.i(391398),s=e.i(417241),a=e.i(191788);let l={type:"code",component:function(){let{angle:e,type:t}=function({defaultAngle:e=0,defaultType:t="landscape-primary",getInitialValueInEffect:n=!0}={}){var r;let[o,l]=(0,a.useState)((r={angle:e,type:t},n?r:"screen"in window?{angle:window.screen.orientation?.angle??r.angle,type:window.screen.orientation?.type??r.type}:r)),i=e=>{let t=e.currentTarget;l({angle:t?.angle||0,type:t?.type||"landscape-primary"})};return(0,s.useIsomorphicEffect)(()=>{if(window.screen.orientation)return l({angle:window.screen.orientation.angle,type:window.screen.orientation.type}),window.screen.orientation.addEventListener("change",i),()=>window.screen.orientation?.removeEventListener("change",i)},[]),o}();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.Text,{children:["Angle: ",(0,o.jsx)(n.Code,{children:e})]}),(0,o.jsxs)(r.Text,{children:["Type: ",(0,o.jsx)(n.Code,{children:t})]})]})},code:`
import { Code, Text } from '@mantine/core';
import { useOrientation } from '@mantine/hooks';

function Demo() {
  const { angle, type } = useOrientation();
  return (
    <>
      <Text>
        Angle: <Code>{angle}</Code>
      </Text>
      <Text>
        Type: <Code>{type}</Code>
      </Text>
    </>
  );
}
`};var i=(0,t.__exportAll)({usage:()=>l});e.s(["UseOrientationDemos",0,i],396134)},612457,e=>{"use strict";var t=e.i(648863),n=e.i(232471),r=e.i(485108),o=e.i(301388),s=e.i(725695),a=e.i(505716),l=e.i(883364),i=e.i(391398),c=e.i(191788);let u={type:"code",component:function(){let{data:e,loading:t,error:u,refetch:d,abort:h}=function(e,{autoInvoke:t=!0,...n}={}){let[r,o]=(0,c.useState)(null),[s,a]=(0,c.useState)(!1),[l,i]=(0,c.useState)(null),u=(0,c.useRef)(null),d=(0,c.useCallback)(()=>(u.current&&u.current.abort(),u.current=new AbortController,a(!0),fetch(e,{...n,signal:u.current.signal}).then(e=>{if(!e.ok)throw Error(`Request failed with status ${e.status}`);return e.json()}).then(e=>(o(e),a(!1),e)).catch(e=>(a(!1),"AbortError"!==e.name&&i(e),e))),[e,JSON.stringify(n)]),h=(0,c.useCallback)(()=>{u.current&&u.current?.abort("")},[]);return(0,c.useEffect)(()=>(t&&d(),()=>{u.current&&u.current.abort("")}),[d,t]),{data:r,loading:s,error:l,refetch:d,abort:h}}("https://jsonplaceholder.typicode.com/todos/");return(0,i.jsxs)("div",{children:[u&&(0,i.jsx)(l.Text,{c:"red",children:u.message}),(0,i.jsxs)(s.Group,{children:[(0,i.jsx)(r.Button,{onClick:d,color:"blue",children:"Refetch"}),(0,i.jsx)(r.Button,{onClick:h,color:"red",children:"Abort"})]}),(0,i.jsxs)(n.Box,{pos:"relative",mt:"md",children:[(0,i.jsx)(o.Code,{block:!0,children:e?JSON.stringify(e.slice(0,3),null,2):"Fetching"}),(0,i.jsx)(a.LoadingOverlay,{visible:t})]})]})},code:`
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
`};var d=(0,t.__exportAll)({usage:()=>u});e.s(["UseFetchDemos",0,d],612457)},766185,e=>{"use strict";var t=e.i(648863),n=e.i(191788),r=e.i(301388),o=e.i(671640),s=e.i(841209),a=e.i(391398);function l(e){if(e instanceof Set)return e;let t=new Set,n=e.keys(),r=n.next();for(;!r.done;)t.add(r.value),r=n.next();return t}let i={type:"code",component:function(){let[e,t]=(0,n.useState)(""),i=function(e){let[t,r]=(0,n.useState)(()=>new Set(e)),o=(0,n.useRef)(t);return o.current=t,t.add=(...e)=>{let t=Set.prototype.add.apply(o.current,e);return r(new Set(o.current)),t},t.clear=(...e)=>{Set.prototype.clear.apply(o.current,e),r(new Set(o.current))},t.delete=(...e)=>{let t=Set.prototype.delete.apply(o.current,e);return r(new Set(o.current)),t},t.union=e=>{let t=new Set(o.current);return l(e).forEach(e=>t.add(e)),t},t.intersection=e=>{let t=new Set,n=l(e);return o.current.forEach(e=>{n.has(e)&&t.add(e)}),t},t.difference=e=>{let t=new Set,n=l(e);return o.current.forEach(e=>{n.has(e)||t.add(e)}),t},t.symmetricDifference=e=>{let t=new Set,n=l(e);return o.current.forEach(e=>{n.has(e)||t.add(e)}),n.forEach(e=>{o.current.has(e)||t.add(e)}),t},t}(["@mantine","@mantine-tests","@mantinex"]),c=i.has(e.trim().toLowerCase()),u=Array.from(i).map(e=>(0,a.jsx)(r.Code,{children:e},e));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.TextInput,{label:"Add new scope",placeholder:"Enter scope",description:"Duplicate scopes are not allowed",value:e,onChange:e=>t(e.currentTarget.value),error:c&&"Scope already exists",onKeyDown:n=>{"Enter"!==n.nativeEvent.code||c||(i.add(e.trim().toLowerCase()),t(""))}}),(0,a.jsx)(o.Stack,{gap:5,align:"flex-start",mt:"md",children:u})]})},code:`
import { useState } from 'react';
import { Code, Stack, TextInput } from '@mantine/core';
import { useSet } from '@mantine/hooks';

function Demo() {
  const [input, setInput] = useState('');
  const scopes = useSet<string>(['@mantine', '@mantine-tests', '@mantinex']);

  const isDuplicate = scopes.has(input.trim().toLowerCase());

  const items = Array.from(scopes).map((scope) => <Code key={scope}>{scope}</Code>);

  return (
    <>
      <TextInput
        label="Add new scope"
        placeholder="Enter scope"
        description="Duplicate scopes are not allowed"
        value={input}
        onChange={(event) => setInput(event.currentTarget.value)}
        error={isDuplicate && 'Scope already exists'}
        onKeyDown={(event) => {
          if (event.nativeEvent.code === 'Enter' && !isDuplicate) {
            scopes.add(input.trim().toLowerCase());
            setInput('');
          }
        }}
      />

      <Stack gap={5} align="flex-start" mt="md">
        {items}
      </Stack>
    </>
  );
}
`};var c=(0,t.__exportAll)({usage:()=>i});e.s(["UseSetDemos",0,c],766185)},986470,e=>{"use strict";var t=e.i(648863),n=e.i(37930),r=e.i(823439),o=e.i(658109),s=e.i(725695),a=e.i(245745),l=e.i(391398),i=e.i(191788);let c={type:"code",component:function(){let e=function(e){let[t,n]=(0,i.useState)(()=>new Map(e)),r=(0,i.useRef)(t);return r.current=t,t.set=(...e)=>(Map.prototype.set.apply(r.current,e),n(new Map(r.current)),r.current),t.clear=(...e)=>{Map.prototype.clear.apply(r.current,e),n(new Map(r.current))},t.delete=(...e)=>{let t=Map.prototype.delete.apply(r.current,e);return n(new Map(r.current)),t},t}([["/hooks/use-media-query",4124],["/hooks/use-clipboard",8341],["/hooks/use-fetch",9001]]),t=Array.from(e.entries()).map(([t,i])=>(0,l.jsxs)(a.Table.Tr,{children:[(0,l.jsx)(a.Table.Td,{children:t}),(0,l.jsx)(a.Table.Td,{children:i}),(0,l.jsx)(a.Table.Td,{children:(0,l.jsxs)(s.Group,{children:[(0,l.jsx)(o.ActionIcon,{variant:"default",onClick:()=>e.set(t,i+1),fw:500,children:(0,l.jsx)(n.PlusIcon,{size:18})}),(0,l.jsx)(o.ActionIcon,{variant:"default",onClick:()=>e.delete(t),c:"red",children:(0,l.jsx)(r.TrashIcon,{size:18})})]})})]},t));return(0,l.jsxs)(a.Table,{layout:"fixed",children:[(0,l.jsx)(a.Table.Thead,{children:(0,l.jsxs)(a.Table.Tr,{children:[(0,l.jsx)(a.Table.Th,{children:"Page"}),(0,l.jsx)(a.Table.Th,{children:"Views last month"}),(0,l.jsx)(a.Table.Th,{})]})}),(0,l.jsx)(a.Table.Tbody,{children:t})]})},code:`
import { PlusIcon, TrashIcon } from '@phosphor-icons/react';
import { ActionIcon, Group, Table } from '@mantine/core';
import { useMap } from '@mantine/hooks';

function Demo() {
  const map = useMap([
    ['/hooks/use-media-query', 4124],
    ['/hooks/use-clipboard', 8341],
    ['/hooks/use-fetch', 9001],
  ]);

  const rows = Array.from(map.entries()).map(([key, value]) => (
    <Table.Tr key={key}>
      <Table.Td>{key}</Table.Td>
      <Table.Td>{value}</Table.Td>
      <Table.Td>
        <Group>
          <ActionIcon variant="default" onClick={() => map.set(key, value + 1)} fw={500}>
            <PlusIcon size={18} />
          </ActionIcon>
          <ActionIcon variant="default" onClick={() => map.delete(key)} c="red">
            <TrashIcon size={18} />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table layout="fixed">
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Page</Table.Th>
          <Table.Th>Views last month</Table.Th>
          <Table.Th />
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
`};var u=(0,t.__exportAll)({usage:()=>c});e.s(["UseMapDemos",0,u],986470)},290516,e=>{"use strict";var t=e.i(648863),n=e.i(191788),r=e.i(935769),o=e.i(883364),s=e.i(841209),a=e.i(391398),l=e.i(609205);let i={type:"code",component:function(){let[e,t]=(0,n.useState)(""),[i,c]=(0,n.useState)([]),[u,d]=(0,n.useState)(!1),h=(0,l.useDebouncedCallback)(async e=>{d(!0),c(await new Promise(t=>{setTimeout(()=>{t(""===e.trim()?[]:[,,,,,].fill(0).map((t,n)=>({id:n,title:`${e} ${n+1}`})))},1e3)})),d(!1)},500);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.TextInput,{value:e,onChange:e=>{t(e.currentTarget.value),h(e.currentTarget.value)},placeholder:"Search...",rightSection:u&&(0,a.jsx)(r.Loader,{size:20})}),i.map(e=>(0,a.jsx)(o.Text,{size:"sm",children:e.title},e.id))]})},code:`
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
`,centered:!0,maxWidth:340};var c=e.i(485108),u=e.i(725695),d=e.i(671640);function h({onChange:e}){let[t,r]=(0,n.useState)(""),o=(0,l.useDebouncedCallback)(t=>{e(t)},{delay:2e3,flushOnUnmount:!0});return(0,a.jsx)("input",{"aria-label":"Enter text",placeholder:"Enter text...",value:t,onChange:e=>{var t;r(t=e.target.value),o(t)},style:{padding:"8px",width:"100%"}})}let m={type:"code",component:function(){let[e,t]=(0,n.useState)(""),[r,s]=(0,n.useState)(!0);return(0,a.jsxs)(d.Stack,{children:[(0,a.jsxs)(o.Text,{fw:700,children:["Output value: ",e||"(none)"]}),(0,a.jsx)(u.Group,{children:(0,a.jsx)(c.Button,{onClick:()=>s(!r),children:r?"Hide component":"Show component"})}),r?(0,a.jsx)(h,{onChange:t}):null,(0,a.jsx)(o.Text,{size:"sm",c:"dimmed",children:"1. Type text and wait 2 seconds for the value to be transmitted. 2. Type text and immediately click the 'Hide component' button. The value will be transmitted immediately due to the flushOnUnmount option."})]})},code:`
import { useState } from 'react';
import { Button, Group, Stack, Text } from '@mantine/core';
import { useDebouncedCallback } from '@mantine/hooks';

function InputWithDebounce({ onChange }) {
  const [innerValue, setInnerValue] = useState('');
  const debouncedCallback = useDebouncedCallback(
    (newInnerValue) => {
      onChange(newInnerValue);
    },
    { delay: 2000, flushOnUnmount: true }
  );

  const handleChange = (newInnerValue) => {
    setInnerValue(newInnerValue);
    debouncedCallback(newInnerValue);
  };

  return (
    <input
      aria-label="Enter text"
      placeholder="Enter text..."
      value={innerValue}
      onChange={(event) => handleChange(event.target.value)}
      style={{ padding: '8px', width: '100%' }}
    />
  );
}

function Demo() {
  const [outerValue, setOuterValue] = useState('');
  const [visible, setVisible] = useState(true);

  return (
    <Stack>
      <Text fw={700}>Output value: {outerValue || '(none)'}</Text>

      <Group>
        <Button onClick={() => setVisible(!visible)}>
          {visible ? 'Hide component' : 'Show component'}
        </Button>
      </Group>

      {visible ? <InputWithDebounce onChange={setOuterValue} /> : null}

      <Text size="sm" c="dimmed">
        1. Type text and wait 2 seconds for the value to be transmitted.
        2. Type text and immediately click the 'Hide component' button.
           The value will be transmitted immediately due to the flushOnUnmount option.
      </Text>
    </Stack>
  );
}
`,centered:!0,maxWidth:500};var p=(0,t.__exportAll)({unmount:()=>m,usage:()=>i});e.s(["UseDebouncedCallbackDemos",0,p],290516)},20623,e=>{"use strict";var t=e.i(391398),n=e.i(38856),r=e.i(822633),o=e.i(290516),s=e.i(612457),a=e.i(798371),l=e.i(986470),i=e.i(396134),c=e.i(766185),u=e.i(117924),d=e.i(537898),h=e.i(708258);e.i(603441);var m=e.i(62558);e.i(457450);var p=e.i(418026);let x=(0,m.Layout)(p.MDX_DATA.Changelog780);function f(e){let m={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.useMDXComponents)(),...e.components},{Demo:p}=m;return p||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.h2,{id:"auto-convert-px-to-rem-in-css-files",children:"Auto convert px to rem in .css files"}),"\n",(0,t.jsxs)(m.p,{children:["Start from version ",(0,t.jsx)(m.code,{children:"1.14.4"})," ",(0,t.jsx)(m.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"}),"\nsupports ",(0,t.jsx)(m.code,{children:"autoRem"})," option that can be used to automatically convert all ",(0,t.jsx)(m.code,{children:"px"})," values\nto ",(0,t.jsx)(m.code,{children:"rem"})," units in ",(0,t.jsx)(m.code,{children:".css"})," files."]}),"\n",(0,t.jsx)(m.pre,{children:(0,t.jsx)(m.code,{className:"language-js",children:"module.exports = {\n  plugins: {\n    'postcss-preset-mantine': {\n      autoRem: true,\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(m.p,{children:["This option works similar to ",(0,t.jsx)(m.code,{children:"rem"})," function. The following code:"]}),"\n",(0,t.jsx)(m.pre,{children:(0,t.jsx)(m.code,{className:"language-scss",children:".demo {\n  font-size: 16px;\n\n  @media (min-width: 320px) {\n    font-size: 32px;\n  }\n}\n"})}),"\n",(0,t.jsx)(m.p,{children:"Will be transformed to:"}),"\n",(0,t.jsx)(m.pre,{children:(0,t.jsx)(m.code,{className:"language-scss",children:".demo {\n  font-size: calc(1rem * var(--mantine-scale));\n\n  @media (min-width: 320px) {\n    font-size: calc(2rem * var(--mantine-scale));\n  }\n}\n"})}),"\n",(0,t.jsxs)(m.p,{children:["Note that ",(0,t.jsx)(m.code,{children:"autoRem"})," converts only CSS properties, values in ",(0,t.jsx)(m.code,{children:"@media"})," queries are\nnot converted automatically – you still need to use ",(0,t.jsx)(m.code,{children:"em"})," function to convert them."]}),"\n",(0,t.jsxs)(m.p,{children:[(0,t.jsx)(m.code,{children:"autoRem"})," option does not convert values in the following cases:"]}),"\n",(0,t.jsxs)(m.ul,{children:["\n",(0,t.jsxs)(m.li,{children:["Values in ",(0,t.jsx)(m.code,{children:"calc()"}),", ",(0,t.jsx)(m.code,{children:"var()"}),", ",(0,t.jsx)(m.code,{children:"clamp()"})," and ",(0,t.jsx)(m.code,{children:"url()"})," functions"]}),"\n",(0,t.jsxs)(m.li,{children:["Values in ",(0,t.jsx)(m.code,{children:"content"})," property"]}),"\n",(0,t.jsxs)(m.li,{children:["Values that contain ",(0,t.jsx)(m.code,{children:"rgb()"}),", ",(0,t.jsx)(m.code,{children:"rgba()"}),", ",(0,t.jsx)(m.code,{children:"hsl()"}),", ",(0,t.jsx)(m.code,{children:"hsla()"})," colors"]}),"\n"]}),"\n",(0,t.jsxs)(m.p,{children:["If you want to convert above values to rem units, use ",(0,t.jsx)(m.code,{children:"rem"})," function manually."]}),"\n",(0,t.jsx)(m.h2,{id:"uncontrolled-form-mode",children:"Uncontrolled form mode"}),"\n",(0,t.jsxs)(m.p,{children:[(0,t.jsx)(m.a,{href:"/form/use-form",children:"useForm"})," hook now supports ",(0,t.jsx)(m.a,{href:"/form/uncontrolled",children:"uncontrolled mode"}),".\nUncontrolled mode provides a significant performance improvement by reducing\nthe number of re-renders and the amount of state updates almost to 0. Uncontrolled\nmode is now the recommended way to use the ",(0,t.jsx)(m.code,{children:"useForm"})," hook for almost all use cases."]}),"\n",(0,t.jsxs)(m.p,{children:["Example of uncontrolled form (",(0,t.jsx)(m.code,{children:"form.values"})," are not updated):"]}),"\n",(0,t.jsx)(p,{data:r.FormDemos.uncontrolled}),"\n",(0,t.jsx)(m.h2,{id:"formgetvalues",children:"form.getValues"}),"\n",(0,t.jsxs)(m.p,{children:["With uncontrolled mode, you can not access ",(0,t.jsx)(m.code,{children:"form.values"})," as a state variable,\ninstead, you can use ",(0,t.jsx)(m.code,{children:"form.getValues()"})," method to get current form values at any time:"]}),"\n",(0,t.jsx)(m.pre,{children:(0,t.jsx)(m.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: { name: 'John Doe' },\n});\n\nform.getValues(); // { name: 'John Doe' }\n\nform.setValues({ name: 'John Smith' });\nform.getValues(); // { name: 'John Smith' }\n"})}),"\n",(0,t.jsxs)(m.p,{children:[(0,t.jsx)(m.code,{children:"form.getValues()"})," always returns the latest form values, it is safe to use it\nafter state updates:"]}),"\n",(0,t.jsx)(m.pre,{children:(0,t.jsx)(m.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: { name: 'John Doe' },\n});\n\nconst handleNameChange = () => {\n  form.setFieldValue('name', 'Test Name');\n\n  // ❌ Do not use form.values to get the current form values\n  // form.values has stale name value until next rerender in controlled mode\n  // and is always outdated in uncontrolled mode\n  console.log(form.values); // { name: 'John Doe' }\n\n  // ✅ Use form.getValues to get the current form values\n  // form.getValues always returns the latest form values\n  console.log(form.getValues()); // { name: 'Test Name' }\n};\n"})}),"\n",(0,t.jsx)(m.h2,{id:"formwatch",children:"form.watch"}),"\n",(0,t.jsxs)(m.p,{children:[(0,t.jsx)(m.code,{children:"form.watch"})," is an effect function that allows subscribing to changes of a\nspecific form field. It accepts field path and a callback function that is\ncalled with new value, previous value, touched and dirty field states:"]}),"\n",(0,t.jsx)(p,{data:r.FormDemos.watch}),"\n",(0,t.jsx)(m.h2,{id:"customize-popover-middlewares",children:"Customize Popover middlewares"}),"\n",(0,t.jsxs)(m.p,{children:["You can now customize ",(0,t.jsx)(m.code,{children:"middlewares"})," options in ",(0,t.jsx)(m.a,{href:"/core/popover",children:"Popover"})," component and\nin other components (",(0,t.jsx)(m.a,{href:"/core/menu",children:"Menu"}),", ",(0,t.jsx)(m.a,{href:"/core/select",children:"Select"}),", ",(0,t.jsx)(m.a,{href:"/core/combobox",children:"Combobox"}),", etc.)\nbased on Popover."]}),"\n",(0,t.jsxs)(m.p,{children:["To customize ",(0,t.jsx)(m.a,{href:"https://floating-ui.com/",children:"Floating UI"})," middlewares options, pass them as\nan object to the ",(0,t.jsx)(m.code,{children:"middlewares"})," prop. For example, to change ",(0,t.jsx)(m.a,{href:"https://floating-ui.com/docs/shift",children:"shift"}),"\nmiddleware padding to ",(0,t.jsx)(m.code,{children:"20px"})," use the following configuration:"]}),"\n",(0,t.jsx)(m.pre,{children:(0,t.jsx)(m.code,{className:"language-tsx",children:"import { Popover } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Popover\n      middlewares={{ shift: { padding: 20 } }}\n      position=\"bottom\"\n    >\n      {/* Popover content */}\n    </Popover>\n  );\n}\n"})}),"\n",(0,t.jsx)(m.h2,{id:"use-fetch-hook",children:"use-fetch hook"}),"\n",(0,t.jsxs)(m.p,{children:["New ",(0,t.jsx)(m.a,{href:"/hooks/use-fetch",children:"use-fetch"})," hook:"]}),"\n",(0,t.jsx)(p,{data:s.UseFetchDemos.usage}),"\n",(0,t.jsx)(m.h2,{id:"use-map-hook",children:"use-map hook"}),"\n",(0,t.jsxs)(m.p,{children:["New ",(0,t.jsx)(m.a,{href:"/hooks/use-map",children:"use-map"})," hook:"]}),"\n",(0,t.jsx)(p,{data:l.UseMapDemos.usage}),"\n",(0,t.jsx)(m.h2,{id:"use-set-hook",children:"use-set hook"}),"\n",(0,t.jsxs)(m.p,{children:["New ",(0,t.jsx)(m.a,{href:"/hooks/use-set",children:"use-set"})," hook:"]}),"\n",(0,t.jsx)(p,{data:c.UseSetDemos.usage}),"\n",(0,t.jsx)(m.h2,{id:"use-debounced-callback-hook",children:"use-debounced-callback hook"}),"\n",(0,t.jsxs)(m.p,{children:["New ",(0,t.jsx)(m.a,{href:"/hooks/use-debounced-callback",children:"use-debounced-callback"})," hook:"]}),"\n",(0,t.jsx)(p,{data:o.UseDebouncedCallbackDemos.usage}),"\n",(0,t.jsx)(m.h2,{id:"use-throttled-state-hook",children:"use-throttled-state hook"}),"\n",(0,t.jsxs)(m.p,{children:["New ",(0,t.jsx)(m.a,{href:"/hooks/use-throttled-state",children:"use-throttled-state"})," hook:"]}),"\n",(0,t.jsx)(p,{data:d.UseThrottledStateDemos.usage}),"\n",(0,t.jsx)(m.h2,{id:"use-throttled-value-hook",children:"use-throttled-value hook"}),"\n",(0,t.jsxs)(m.p,{children:["New ",(0,t.jsx)(m.a,{href:"/hooks/use-throttled-value",children:"use-throttled-value"})," hook:"]}),"\n",(0,t.jsx)(p,{data:h.UseThrottledValueDemos.usage}),"\n",(0,t.jsx)(m.h2,{id:"use-throttled-callback-hook",children:"use-throttled-callback hook"}),"\n",(0,t.jsxs)(m.p,{children:["New ",(0,t.jsx)(m.a,{href:"/hooks/use-throttled-callback",children:"use-throttled-callback"})," hook:"]}),"\n",(0,t.jsx)(p,{data:u.UseThrottledCallbackDemos.usage}),"\n",(0,t.jsx)(m.h2,{id:"use-orientation-hook",children:"use-orientation hook"}),"\n",(0,t.jsxs)(m.p,{children:["New ",(0,t.jsx)(m.a,{href:"/hooks/use-orientation",children:"use-orientation"})," hook:"]}),"\n",(0,t.jsx)(p,{data:i.UseOrientationDemos.usage}),"\n",(0,t.jsx)(m.h2,{id:"use-is-first-render-hook",children:"use-is-first-render hook"}),"\n",(0,t.jsxs)(m.p,{children:["New ",(0,t.jsx)(m.a,{href:"/hooks/use-is-first-render",children:"use-is-first-render"})," hook:"]}),"\n",(0,t.jsx)(p,{data:a.UseIsFirstRenderDemos.usage}),"\n",(0,t.jsx)(m.h2,{id:"documentation-updates",children:"Documentation updates"}),"\n",(0,t.jsxs)(m.ul,{children:["\n",(0,t.jsxs)(m.li,{children:["New ",(0,t.jsx)(m.a,{href:"/form/uncontrolled",children:"uncontrolled form"})," guide"]}),"\n",(0,t.jsxs)(m.li,{children:[(0,t.jsx)(m.a,{href:"/form/values/#onvalueschange",children:"onValuesChange"})," documentation has been added"]}),"\n",(0,t.jsxs)(m.li,{children:["A new demo has been added to ",(0,t.jsx)(m.a,{href:"/x/tiptap/#typography-styles",children:"tiptap"})," that shows how to customize typography styles"]}),"\n",(0,t.jsxs)(m.li,{children:["A new guide has been added to customize ",(0,t.jsx)(m.a,{href:"/core/popover/#customize-middleware-options",children:"Popover"})," middlewares"]}),"\n"]}),"\n",(0,t.jsx)(m.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,t.jsxs)(m.ul,{children:["\n",(0,t.jsxs)(m.li,{children:[(0,t.jsx)(m.a,{href:"/core/number-input",children:"NumberInput"})," now supports ",(0,t.jsx)(m.code,{children:"withKeyboardEvents={false}"})," to disable up/down arrow keys handling"]}),"\n",(0,t.jsxs)(m.li,{children:[(0,t.jsx)(m.a,{href:"/core/popover",children:"Popover"})," ",(0,t.jsx)(m.a,{href:"https://floating-ui.com/docs/shift",children:"shift"})," middleware now has default padding of 5px to offset dropdown near the edge of the viewport"]}),"\n"]})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(x,{...e,children:(0,t.jsx)(f,{...e})})}])},906952,(e,t,n)=>{let r="/changelog/7-8-0";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(20623)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);