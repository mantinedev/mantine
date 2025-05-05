(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[22095],{89671:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/file-button",function(){return n(76081)}])},76081:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});var l=n(31085),s=n(71184),i=n(14041),r=n(56051),a=n(28561),o=n(52022),c=n(93065);let u={type:"code",component:function(){let[e,t]=(0,i.useState)(null);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.Y,{justify:"center",children:(0,l.jsx)(a.H,{onChange:t,accept:"image/png,image/jpeg",children:e=>(0,l.jsx)(o.$,{...e,children:"Upload image"})})}),e&&(0,l.jsxs)(c.E,{size:"sm",ta:"center",mt:"sm",children:["Picked file: ",e.name]})]})},code:`
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
`},d={type:"code",component:function(){let[e,t]=(0,i.useState)([]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.Y,{justify:"center",children:(0,l.jsx)(a.H,{onChange:t,accept:"image/png,image/jpeg",multiple:!0,children:e=>(0,l.jsx)(o.$,{...e,children:"Upload image"})})}),e.length>0&&(0,l.jsx)(c.E,{size:"sm",mt:"sm",children:"Picked files:"}),(0,l.jsx)("ul",{children:e.map((e,t)=>(0,l.jsx)("li",{children:e.name},t))})]})},code:`
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
`},p={type:"code",component:function(){let[e,t]=(0,i.useState)(null),n=(0,i.useRef)(null);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r.Y,{justify:"center",children:[(0,l.jsx)(a.H,{resetRef:n,onChange:t,accept:"image/png,image/jpeg",children:e=>(0,l.jsx)(o.$,{...e,children:"Upload image"})}),(0,l.jsx)(o.$,{disabled:!e,color:"red",onClick:()=>{t(null),n.current?.()},children:"Reset"})]}),e&&(0,l.jsxs)(c.E,{size:"sm",ta:"center",mt:"sm",children:["Picked file: ",e.name]})]})},code:`
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
`};var h=n(18675),g=n(20017);let m=(0,h.P)(g.XZ.FileButton);function v(e){let t={code:"code",h2:"h2",p:"p",...(0,s.R)(),...e.components},{Demo:n,ServerComponentsIncompatible:i}=t;return n||y("Demo",!0),i||y("ServerComponentsIncompatible",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(n,{data:u}),"\n",(0,l.jsx)(t.h2,{id:"multiple-files",children:"Multiple files"}),"\n",(0,l.jsxs)(t.p,{children:["Set ",(0,l.jsx)(t.code,{children:"multiple"})," prop to allow picking multiple files:"]}),"\n",(0,l.jsx)(n,{data:d}),"\n",(0,l.jsx)(t.h2,{id:"reset-file",children:"Reset file"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"resetRef"})," should be used to fix issue with stale value on hidden input element as input type file cannot be controlled.\nCall ",(0,l.jsx)(t.code,{children:"resetRef"})," when user selection is cleared:"]}),"\n",(0,l.jsx)(n,{data:p}),"\n",(0,l.jsx)(i,{component:"FileButton"})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.jsx)(m,{...e,children:(0,l.jsx)(v,{...e})})}function y(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},87186:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var l=(0,n(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var l=(0,n(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var l=(0,n(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var l=(0,n(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var l=(0,n(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var l=(0,n(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var l=(0,n(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var l=(0,n(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var l=(0,n(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},28561:(e,t,n)=>{"use strict";n.d(t,{H:()=>o});var l=n(31085),s=n(14041),i=n(34321),r=n(29686);let a={multiple:!1},o=(0,s.forwardRef)((e,t)=>{let{onChange:n,children:o,multiple:c,accept:u,name:d,form:p,resetRef:h,disabled:g,capture:m,inputProps:v,...f}=(0,r.Y)("FileButton",a,e),y=(0,s.useRef)(null);return(0,i.bl)(h,()=>{y.current&&(y.current.value="")}),(0,l.jsxs)(l.Fragment,{children:[o({onClick:()=>{g||y.current?.click()},...f}),(0,l.jsx)("input",{style:{display:"none"},type:"file",accept:u,multiple:c,onChange:e=>{c?n(Array.from(e.currentTarget.files)):n(e.currentTarget.files[0]||null)},ref:(0,i.pc)(t,y),name:d,form:p,capture:m,...v})]})});o.displayName="@mantine/core/FileButton"}},e=>{var t=t=>e(e.s=t);e.O(0,[18675,90636,46593,38792],()=>t(89671)),_N_E=e.O()}]);