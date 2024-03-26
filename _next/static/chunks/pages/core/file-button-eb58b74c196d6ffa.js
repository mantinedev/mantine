(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[98444],{90793:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/file-button",function(){return n(77207)}])},77207:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var l=n(52322),i=n(45392),r=n(2784),o=n(93010),u=n(1787),c=n(17115),Text=n(8582);let a=`
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
`,s={type:"code",component:function(){let[e,t]=(0,r.useState)(null);return r.createElement(r.Fragment,null,r.createElement(o.Z,{justify:"center"},r.createElement(u.S,{onChange:t,accept:"image/png,image/jpeg"},e=>r.createElement(c.z,{...e},"Upload image"))),e&&r.createElement(Text.x,{size:"sm",ta:"center",mt:"sm"},"Picked file: ",e.name))},code:a},m=`
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
`,p={type:"code",component:function(){let[e,t]=(0,r.useState)([]);return r.createElement(r.Fragment,null,r.createElement(o.Z,{justify:"center"},r.createElement(u.S,{onChange:t,accept:"image/png,image/jpeg",multiple:!0},e=>r.createElement(c.z,{...e},"Upload image"))),e.length>0&&r.createElement(Text.x,{size:"sm",mt:"sm"},"Picked files:"),r.createElement("ul",null,e.map((e,t)=>r.createElement("li",{key:t},e.name))))},code:m},f=`
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
`,d={type:"code",component:function(){let[e,t]=(0,r.useState)(null),n=(0,r.useRef)(null);return r.createElement(r.Fragment,null,r.createElement(o.Z,{justify:"center"},r.createElement(u.S,{resetRef:n,onChange:t,accept:"image/png,image/jpeg"},e=>r.createElement(c.z,{...e},"Upload image")),r.createElement(c.z,{disabled:!e,color:"red",onClick:()=>{t(null),n.current?.()}},"Reset")),e&&r.createElement(Text.x,{size:"sm",ta:"center",mt:"sm"},"Picked file: ",e.name))},code:f};var g=n(79016),h=n(33638);let x=(0,g.A)(h.us.FileButton);function F(e){let t={code:"code",h2:"h2",p:"p",...(0,i.a)(),...e.components},{Demo:n,ServerComponentsIncompatible:r}=t;return n||E("Demo",!0),r||E("ServerComponentsIncompatible",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(n,{data:s}),"\n",(0,l.jsx)(t.h2,{id:"multiple-files",children:"Multiple files"}),"\n",(0,l.jsxs)(t.p,{children:["Set ",(0,l.jsx)(t.code,{children:"multiple"})," prop to allow picking multiple files:"]}),"\n",(0,l.jsx)(n,{data:p}),"\n",(0,l.jsx)(t.h2,{id:"reset-file",children:"Reset file"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"resetRef"})," should be used to fix issue with stale value on hidden input element as input type file cannot be controlled.\nCall ",(0,l.jsx)(t.code,{children:"resetRef"})," when user selection is cleared:"]}),"\n",(0,l.jsx)(n,{data:d}),"\n",(0,l.jsx)(r,{component:"FileButton"})]})}function j(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.jsx)(x,{...e,children:(0,l.jsx)(F,{...e})})}function E(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1787:function(e,t,n){"use strict";n.d(t,{S:function(){return u}});var l=n(2784),i=n(70837),r=n(38483);let o={multiple:!1},u=(0,l.forwardRef)((e,t)=>{let{onChange:n,children:u,multiple:c,accept:a,name:s,form:m,resetRef:p,disabled:f,capture:d,inputProps:g,...h}=(0,r.w)("FileButton",o,e),x=(0,l.useRef)();return(0,i.kR)(p,()=>{x.current.value=""}),l.createElement(l.Fragment,null,u({onClick:()=>{f||x.current?.click()},...h}),l.createElement("input",{style:{display:"none"},type:"file",accept:a,multiple:c,onChange:e=>{c?n(Array.from(e.currentTarget.files)):n(e.currentTarget.files[0]||null)},ref:(0,i.Yx)(t,x),name:s,form:m,capture:d,...g}))});u.displayName="@mantine/core/FileButton"}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=90793)}),_N_E=e.O()}]);