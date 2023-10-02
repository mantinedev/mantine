(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8444],{33507:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},60204:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/file-button",function(){return n(81047)}])},81047:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return G}});var r=n(85893),l=n(11151),o=n(19905),i=n(9904),a=n(67294),c=n(16262),s=n(82697),u=n(14469),p=n(72039),f=Object.defineProperty,m=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&h(e,n,t[n]);if(m)for(var n of m(t))g.call(t,n)&&h(e,n,t[n]);return e};let v=`
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
`,b={type:"code",component:function(){let[e,t]=(0,a.useState)(null);return a.createElement(a.Fragment,null,a.createElement(c.Z,{justify:"center"},a.createElement(s.S,{onChange:t,accept:"image/png,image/jpeg"},e=>a.createElement(u.z,y({},e),"Upload image"))),e&&a.createElement(p.x,{size:"sm",ta:"center",mt:"sm"},"Picked file: ",e.name))},code:v};var j=Object.defineProperty,k=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,w=(e,t,n)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,F=(e,t)=>{for(var n in t||(t={}))x.call(t,n)&&w(e,n,t[n]);if(k)for(var n of k(t))E.call(t,n)&&w(e,n,t[n]);return e};let O=`
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
`,M={type:"code",component:function(){let[e,t]=(0,a.useState)([]);return a.createElement(a.Fragment,null,a.createElement(c.Z,{justify:"center"},a.createElement(s.S,{onChange:t,accept:"image/png,image/jpeg",multiple:!0},e=>a.createElement(u.z,F({},e),"Upload image"))),e.length>0&&a.createElement(p.x,{size:"sm",mt:"sm"},"Picked files:"),a.createElement("ul",null,e.map((e,t)=>a.createElement("li",{key:t},e.name))))},code:O};var B=Object.defineProperty,P=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,Z=(e,t,n)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,C=(e,t)=>{for(var n in t||(t={}))S.call(t,n)&&Z(e,n,t[n]);if(P)for(var n of P(t))R.call(t,n)&&Z(e,n,t[n]);return e};let T=`
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
`,I={type:"code",component:function(){let[e,t]=(0,a.useState)(null),n=(0,a.useRef)(null),r=()=>{var e;t(null),null==(e=n.current)||e.call(n)};return a.createElement(a.Fragment,null,a.createElement(c.Z,{justify:"center"},a.createElement(s.S,{resetRef:n,onChange:t,accept:"image/png,image/jpeg"},e=>a.createElement(u.z,C({},e),"Upload image")),a.createElement(u.z,{disabled:!e,color:"red",onClick:r},"Reset")),e&&a.createElement(p.x,{size:"sm",ta:"center",mt:"sm"},"Picked file: ",e.name))},code:T},_=(0,o.A)(i.us.FileButton);function z(e){let t=Object.assign({h2:"h2",p:"p",code:"code"},(0,l.ah)(),e.components),{Demo:n,ServerComponentsIncompatible:o}=t;return n||U("Demo",!0),o||U("ServerComponentsIncompatible",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n,{data:b}),"\n",(0,r.jsx)(t.h2,{id:"multiple-files",children:"Multiple files"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"multiple"})," prop to allow picking multiple files:"]}),"\n",(0,r.jsx)(n,{data:M}),"\n",(0,r.jsx)(t.h2,{id:"reset-file",children:"Reset file"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"resetRef"})," should be used to fix issue with stale value on hidden input element as input type file cannot be controlled.\nCall ",(0,r.jsx)(t.code,{children:"resetRef"})," when user selection is cleared:"]}),"\n",(0,r.jsx)(n,{data:I}),"\n",(0,r.jsx)(o,{component:"FileButton"})]})}var G=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(_,Object.assign({},e,{children:(0,r.jsx)(z,e)}))};function U(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},82697:function(e,t,n){"use strict";n.d(t,{S:function(){return d}});var r=n(67294),l=n(83443),o=n(30370),i=Object.defineProperty,a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(a)for(var n of a(t))s.call(t,n)&&u(e,n,t[n]);return e},f=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&a)for(var r of a(e))0>t.indexOf(r)&&s.call(e,r)&&(n[r]=e[r]);return n};let m={multiple:!1},d=(0,r.forwardRef)((e,t)=>{let n=(0,o.w)("FileButton",m,e),{onChange:i,children:a,multiple:c,accept:s,name:u,form:d,resetRef:g,disabled:h,capture:y,inputProps:v}=n,b=f(n,["onChange","children","multiple","accept","name","form","resetRef","disabled","capture","inputProps"]),j=(0,r.useRef)(),k=()=>{var e;h||null==(e=j.current)||e.click()},x=e=>{c?i(Array.from(e.currentTarget.files)):i(e.currentTarget.files[0]||null)},E=()=>{j.current.value=""};return(0,l.kR)(g,E),r.createElement(r.Fragment,null,a(p({onClick:k},b)),r.createElement("input",p({style:{display:"none"},type:"file",accept:s,multiple:c,onChange:x,ref:(0,l.Yx)(t,j),name:u,form:d,capture:y},v)))});d.displayName="@mantine/core/FileButton"}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=60204)}),_N_E=e.O()}]);