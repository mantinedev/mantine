(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,n)=>{let i={};for(var l in e)t(i,l,{get:e[l],enumerable:!0});return n||t(i,Symbol.toStringTag,{value:"Module"}),i}])},286738,e=>{"use strict";var t=e.i(44091),n=e.i(275519),i=e.i(191788),l=e.i(332977),o=e.i(391398);let r=(0,n.genericFactory)(e=>{let{onChange:n,children:r,multiple:s,accept:u,name:c,form:a,resetRef:p,disabled:m,capture:d,inputProps:f,ref:h,...g}=(0,t.useProps)("FileButton",null,e),j=(0,i.useRef)(null);return(0,l.assignRef)(p,()=>{j.current&&(j.current.value="")}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("input",{style:{display:"none"},type:"file",accept:u,multiple:s,onChange:e=>{if(null===e.currentTarget.files)return n(s?[]:null);s?n(Array.from(e.currentTarget.files)):n(e.currentTarget.files[0]||null)},ref:(0,l.useMergedRef)(h,j),name:c,form:a,capture:d,...f}),r({onClick:()=>{m||j.current?.click()},...g})]})});r.displayName="@mantine/core/FileButton",e.s(["FileButton",0,r])},295484,e=>{"use strict";var t=e.i(391398),n=e.i(38856),i=e.i(648863),l=e.i(191788),o=e.i(485108),r=e.i(286738),s=e.i(725695),u=e.i(883364);let c={type:"code",component:function(){let[e,n]=(0,l.useState)(null);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.Group,{justify:"center",children:(0,t.jsx)(r.FileButton,{onChange:n,accept:"image/png,image/jpeg",children:e=>(0,t.jsx)(o.Button,{...e,children:"Upload image"})})}),e&&(0,t.jsxs)(u.Text,{size:"sm",ta:"center",mt:"sm",children:["Picked file: ",e.name]})]})},code:`
import { useState } from 'react';
import { FileButton, Button, Group, Text } from '@mantine/core';

function Demo() {
  const [file, setFile] = useState<File | null>(null);
  return (
    <>
      <Group justify="center">
        <FileButton onChange={setFile} accept="image/png,image/jpeg">
          {(props) => <Button {...props}>Upload image</Button>}
        </FileButton>
      </Group>

      {file && (
        <Text size="sm" ta="center" mt="sm">
          Picked file: {file.name}
        </Text>
      )}
    </>
  );
}
`},a={type:"code",component:function(){let[e,n]=(0,l.useState)([]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.Group,{justify:"center",children:(0,t.jsx)(r.FileButton,{onChange:n,accept:"image/png,image/jpeg",multiple:!0,children:e=>(0,t.jsx)(o.Button,{...e,children:"Upload image"})})}),e.length>0&&(0,t.jsx)(u.Text,{size:"sm",mt:"sm",children:"Picked files:"}),(0,t.jsx)("ul",{children:e.map((e,n)=>(0,t.jsx)("li",{children:e.name},n))})]})},code:`
import { useState } from 'react';
import { FileButton, Button, Group, Text } from '@mantine/core';

function Demo() {
  const [files, setFiles] = useState<File[]>([]);
  return (
    <>
      <Group justify="center">
        <FileButton onChange={setFiles} accept="image/png,image/jpeg" multiple>
          {(props) => <Button {...props}>Upload image</Button>}
        </FileButton>
      </Group>

      {files.length > 0 && (
        <Text size="sm" mt="sm">
          Picked files:
        </Text>
      )}

      <ul>
        {files.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </>
  );
}
`},p={type:"code",component:function(){let[e,n]=(0,l.useState)(null),i=(0,l.useRef)(null);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.Group,{justify:"center",children:[(0,t.jsx)(r.FileButton,{resetRef:i,onChange:n,accept:"image/png,image/jpeg",children:e=>(0,t.jsx)(o.Button,{...e,children:"Upload image"})}),(0,t.jsx)(o.Button,{disabled:!e,color:"red",onClick:()=>{n(null),i.current?.()},children:"Reset"})]}),e&&(0,t.jsxs)(u.Text,{size:"sm",ta:"center",mt:"sm",children:["Picked file: ",e.name]})]})},code:`
import { useState, useRef } from 'react';
import { FileButton, Button, Group, Text } from '@mantine/core';

function Demo() {
  const [file, setFile] = useState<File | null>(null);
  const resetRef = useRef<() => void>(null);

  const clearFile = () => {
    setFile(null);
    resetRef.current?.();
  };

  return (
    <>
      <Group justify="center">
        <FileButton resetRef={resetRef} onChange={setFile} accept="image/png,image/jpeg">
          {(props) => <Button {...props}>Upload image</Button>}
        </FileButton>
        <Button disabled={!file} color="red" onClick={clearFile}>
          Reset
        </Button>
      </Group>

      {file && (
        <Text size="sm" ta="center" mt="sm">
          Picked file: {file.name}
        </Text>
      )}
    </>
  );
}
`};var m=(0,i.__exportAll)({multiple:()=>a,reset:()=>p,usage:()=>c});e.i(603441);var d=e.i(62558);e.i(457450);var f=e.i(418026);let h=(0,d.Layout)(f.MDX_DATA.FileButton);function g(e){let i={code:"code",h2:"h2",p:"p",...(0,n.useMDXComponents)(),...e.components},{Demo:l,ServerComponentsIncompatible:o}=i;return l||j("Demo",!0),o||j("ServerComponentsIncompatible",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(l,{data:m.usage}),"\n",(0,t.jsx)(i.h2,{id:"multiple-files",children:"Multiple files"}),"\n",(0,t.jsxs)(i.p,{children:["Set the ",(0,t.jsx)(i.code,{children:"multiple"})," prop to allow picking multiple files:"]}),"\n",(0,t.jsx)(l,{data:m.multiple}),"\n",(0,t.jsx)(i.h2,{id:"reset-file",children:"Reset file"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"resetRef"})," should be used to fix the issue with stale value on the hidden input element as input type file cannot be controlled.\nCall ",(0,t.jsx)(i.code,{children:"resetRef"})," when the user selection is cleared:"]}),"\n",(0,t.jsx)(l,{data:m.reset}),"\n",(0,t.jsx)(o,{component:"FileButton"})]})}function j(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,t.jsx)(h,{...e,children:(0,t.jsx)(g,{...e})})}],295484)},548503,(e,t,n)=>{let i="/core/file-button";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(295484)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([i])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);