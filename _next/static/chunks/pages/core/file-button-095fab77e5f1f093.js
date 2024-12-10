(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[98444],{90793:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/file-button",function(){return n(77207)}])},77207:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var i=n(52322),l=n(45392),r=n(2784),o=n(93010),s=n(1787),c=n(39629),u=n(8582);let a={type:"code",component:function(){let[e,t]=(0,r.useState)(null);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{justify:"center",children:(0,i.jsx)(s.S,{onChange:t,accept:"image/png,image/jpeg",children:e=>(0,i.jsx)(c.z,{...e,children:"Upload image"})})}),e&&(0,i.jsxs)(u.x,{size:"sm",ta:"center",mt:"sm",children:["Picked file: ",e.name]})]})},code:`
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
`},p={type:"code",component:function(){let[e,t]=(0,r.useState)([]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{justify:"center",children:(0,i.jsx)(s.S,{onChange:t,accept:"image/png,image/jpeg",multiple:!0,children:e=>(0,i.jsx)(c.z,{...e,children:"Upload image"})})}),e.length>0&&(0,i.jsx)(u.x,{size:"sm",mt:"sm",children:"Picked files:"}),(0,i.jsx)("ul",{children:e.map((e,t)=>(0,i.jsx)("li",{children:e.name},t))})]})},code:`
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
`},m={type:"code",component:function(){let[e,t]=(0,r.useState)(null),n=(0,r.useRef)(null);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.Z,{justify:"center",children:[(0,i.jsx)(s.S,{resetRef:n,onChange:t,accept:"image/png,image/jpeg",children:e=>(0,i.jsx)(c.z,{...e,children:"Upload image"})}),(0,i.jsx)(c.z,{disabled:!e,color:"red",onClick:()=>{t(null),n.current?.()},children:"Reset"})]}),e&&(0,i.jsxs)(u.x,{size:"sm",ta:"center",mt:"sm",children:["Picked file: ",e.name]})]})},code:`
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
`};var d=n(25071),f=n(15019);let h=(0,d.A)(f.us.FileButton);function x(e){let t={code:"code",h2:"h2",p:"p",...(0,l.a)(),...e.components},{Demo:n,ServerComponentsIncompatible:r}=t;return n||j("Demo",!0),r||j("ServerComponentsIncompatible",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n,{data:a}),"\n",(0,i.jsx)(t.h2,{id:"multiple-files",children:"Multiple files"}),"\n",(0,i.jsxs)(t.p,{children:["Set ",(0,i.jsx)(t.code,{children:"multiple"})," prop to allow picking multiple files:"]}),"\n",(0,i.jsx)(n,{data:p}),"\n",(0,i.jsx)(t.h2,{id:"reset-file",children:"Reset file"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"resetRef"})," should be used to fix issue with stale value on hidden input element as input type file cannot be controlled.\nCall ",(0,i.jsx)(t.code,{children:"resetRef"})," when user selection is cleared:"]}),"\n",(0,i.jsx)(n,{data:m}),"\n",(0,i.jsx)(r,{component:"FileButton"})]})}function g(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(h,{...e,children:(0,i.jsx)(x,{...e})})}function j(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1787:function(e,t,n){"use strict";n.d(t,{S:function(){return c}});var i=n(52322),l=n(2784),r=n(70837),o=n(38483);let s={multiple:!1},c=(0,l.forwardRef)((e,t)=>{let{onChange:n,children:c,multiple:u,accept:a,name:p,form:m,resetRef:d,disabled:f,capture:h,inputProps:x,...g}=(0,o.w)("FileButton",s,e),j=(0,l.useRef)(null);return(0,r.kR)(d,()=>{j.current&&(j.current.value="")}),(0,i.jsxs)(i.Fragment,{children:[c({onClick:()=>{f||j.current?.click()},...g}),(0,i.jsx)("input",{style:{display:"none"},type:"file",accept:a,multiple:u,onChange:e=>{u?n(Array.from(e.currentTarget.files)):n(e.currentTarget.files[0]||null)},ref:(0,r.Yx)(t,j),name:p,form:m,capture:h,...x})]})});c.displayName="@mantine/core/FileButton"}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=90793)}),_N_E=e.O()}]);