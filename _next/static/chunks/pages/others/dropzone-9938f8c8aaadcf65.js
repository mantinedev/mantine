(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4762],{4598:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/others/dropzone",function(){return o(42012)}])},42012:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return eV}});var r=o(85893),t=o(11151),l=o(19905),a=o(9904),c=o(67294),i=o(16262),s=o(72622),p=o(72039),d=o(36487),m=o(86171),u=o(60060),f=o(88380),h=o(3154),v=o(30370),g=o(86109),y=o(28816),x=o(95036),j=o(81110),b=o(12177),E=o(26761),D=o(8586),z=o(48468),O=o(17286),w=o(83443),I=o(45763);let[P,k]=(0,I.R)("Dropzone component was not found in tree");var M=o(54431),S=o(12322),_=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,A=(e,n)=>{var o={};for(var r in e)T.call(e,r)&&0>n.indexOf(r)&&(o[r]=e[r]);if(null!=e&&_)for(var r of _(e))0>n.indexOf(r)&&R.call(e,r)&&(o[r]=e[r]);return o};function N(e){let n=n=>{let o=(0,v.w)(`Dropzone${(0,M.j)(e)}`,{},n),{children:r}=o,t=A(o,["children"]),l=k(),a=(0,S.k)(r)?r:c.createElement("span",null,r);return l[e]?(0,c.cloneElement)(a,t):null};return n.displayName=`@mantine/dropzone/${(0,M.j)(e)}`,n}let G=N("accept"),F=N("reject"),C=N("idle");var L={root:"m-d46a4834",inner:"m-b85f7144",fullScreen:"m-96f6e9ad",dropzone:"m-7946116d"},Y=Object.defineProperty,B=Object.defineProperties,U=Object.getOwnPropertyDescriptors,Z=Object.getOwnPropertySymbols,X=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,H=(e,n,o)=>n in e?Y(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,K=(e,n)=>{for(var o in n||(n={}))X.call(n,o)&&H(e,o,n[o]);if(Z)for(var o of Z(n))W.call(n,o)&&H(e,o,n[o]);return e},q=(e,n)=>B(e,U(n)),$=(e,n)=>{var o={};for(var r in e)X.call(e,r)&&0>n.indexOf(r)&&(o[r]=e[r]);if(null!=e&&Z)for(var r of Z(e))0>n.indexOf(r)&&W.call(e,r)&&(o[r]=e[r]);return o};let V={loading:!1,multiple:!0,maxSize:1/0,autoFocus:!1,activateOnClick:!0,activateOnDrag:!0,dragEventsBubbling:!0,activateOnKeyboard:!0,useFsAccessApi:!0,variant:"light",rejectColor:"red"},J=(0,D.Z)((e,{radius:n,variant:o,acceptColor:r,rejectColor:t})=>{let l=e.variantColorResolver({color:r||e.primaryColor,theme:e,variant:o}),a=e.variantColorResolver({color:t||"red",theme:e,variant:o});return{root:{"--dropzone-radius":(0,z.H5)(n),"--dropzone-accept-color":l.color,"--dropzone-accept-bg":l.background,"--dropzone-reject-color":a.color,"--dropzone-reject-bg":a.background}}}),Q=(0,h.d)((e,n)=>{let o=(0,v.w)("Dropzone",V,e),{classNames:r,className:t,style:l,styles:a,unstyled:i,vars:s,radius:p,disabled:d,loading:m,multiple:u,maxSize:f,accept:h,children:y,onDropAny:x,onDrop:b,onReject:D,openRef:z,name:I,maxFiles:k,autoFocus:M,activateOnClick:S,activateOnDrag:_,dragEventsBubbling:T,activateOnKeyboard:R,onDragEnter:A,onDragLeave:N,onDragOver:G,onFileDialogCancel:F,onFileDialogOpen:C,preventDropOnDocument:Y,useFsAccessApi:B,getFilesFromEvent:U,validator:Z,rejectColor:X,acceptColor:W,enablePointerEvents:H}=o,Q=$(o,["classNames","className","style","styles","unstyled","vars","radius","disabled","loading","multiple","maxSize","accept","children","onDropAny","onDrop","onReject","openRef","name","maxFiles","autoFocus","activateOnClick","activateOnDrag","dragEventsBubbling","activateOnKeyboard","onDragEnter","onDragLeave","onDragOver","onFileDialogCancel","onFileDialogOpen","preventDropOnDocument","useFsAccessApi","getFilesFromEvent","validator","rejectColor","acceptColor","enablePointerEvents"]),ee=(0,g.y)({name:"Dropzone",classes:L,props:o,className:t,style:l,classNames:r,styles:a,unstyled:i,vars:s,varsResolver:J}),{getRootProps:en,getInputProps:eo,isDragAccept:er,isDragReject:et,open:el}=(0,E.uI)(K({onDrop:x,onDropAccepted:b,onDropRejected:D,disabled:d||m,accept:Array.isArray(h)?h.reduce((e,n)=>q(K({},e),{[n]:[]}),{}):h,multiple:u,maxSize:f,maxFiles:k,autoFocus:M,noClick:!S,noDrag:!_,noDragEventsBubbling:!T,noKeyboard:!R,onDragEnter:A,onDragLeave:N,onDragOver:G,onFileDialogCancel:F,onFileDialogOpen:C,preventDropOnDocument:Y,useFsAccessApi:B,validator:Z},U?{getFilesFromEvent:U}:null));(0,w.kR)(z,el);let ea=!er&&!et;return c.createElement(P,{value:{accept:er,reject:et,idle:ea}},c.createElement(j.x,q(K(K(K({},Q),en({ref:n})),ee("root",{focusable:!0})),{mod:{accept:er,reject:et,idle:ea,loading:m,"activate-on-click":S}}),c.createElement(O.f,{visible:m,overlayProps:{radius:p},unstyled:i}),c.createElement("input",q(K({},eo()),{name:I})),c.createElement("div",q(K({},ee("inner")),{"data-enable-pointer-events":H||void 0}),y)))});Q.classes=L,Q.displayName="@mantine/dropzone/Dropzone",Q.Accept=G,Q.Idle=C,Q.Reject=F;var ee=Object.defineProperty,en=Object.defineProperties,eo=Object.getOwnPropertyDescriptors,er=Object.getOwnPropertySymbols,et=Object.prototype.hasOwnProperty,el=Object.prototype.propertyIsEnumerable,ea=(e,n,o)=>n in e?ee(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,ec=(e,n)=>{for(var o in n||(n={}))et.call(n,o)&&ea(e,o,n[o]);if(er)for(var o of er(n))el.call(n,o)&&ea(e,o,n[o]);return e},ei=(e,n)=>en(e,eo(n)),es=(e,n)=>{var o={};for(var r in e)et.call(e,r)&&0>n.indexOf(r)&&(o[r]=e[r]);if(null!=e&&er)for(var r of er(e))0>n.indexOf(r)&&el.call(e,r)&&(o[r]=e[r]);return o};let ep={loading:!1,maxSize:1/0,activateOnClick:!1,activateOnDrag:!0,dragEventsBubbling:!0,activateOnKeyboard:!0,active:!0,zIndex:(0,f.w)("max"),withinPortal:!0},ed=(0,h.d)((e,n)=>{let o=(0,v.w)("DropzoneFullScreen",ep,e),{classNames:r,className:t,style:l,styles:a,unstyled:i,vars:s,active:p,onDrop:d,onReject:m,zIndex:u,withinPortal:f,portalProps:h}=o,E=es(o,["classNames","className","style","styles","unstyled","vars","active","onDrop","onReject","zIndex","withinPortal","portalProps"]),D=(0,g.y)({name:"DropzoneFullScreen",classes:L,props:o,className:t,style:l,classNames:r,styles:a,unstyled:i,rootSelector:"fullScreen"}),{resolvedClassNames:z,resolvedStyles:O}=(0,y.h)({classNames:r,styles:a,props:o}),[w,I]=(0,c.useState)(0),[P,{open:k,close:M}]=(0,b.q)(!1),S=e=>{var n;(null==(n=e.dataTransfer)?void 0:n.types.includes("Files"))&&(I(e=>e+1),k())},_=()=>{I(e=>e-1)};return(0,c.useEffect)(()=>{0===w&&M()},[w]),(0,c.useEffect)(()=>{if(p)return document.addEventListener("dragenter",S,!1),document.addEventListener("dragleave",_,!1),()=>{document.removeEventListener("dragenter",S,!1),document.removeEventListener("dragleave",_,!1)}},[p]),c.createElement(x.q,ei(ec({},h),{withinPortal:f}),c.createElement(j.x,ei(ec({},D("fullScreen",{style:{opacity:P?1:0,pointerEvents:P?"all":"none",zIndex:u}})),{ref:n}),c.createElement(Q,ei(ec({},E),{classNames:z,styles:O,unstyled:i,className:L.dropzone,onDrop:e=>{null==d||d(e),M(),I(0)},onReject:e=>{null==m||m(e),M(),I(0)}}))))});ed.classes=L,ed.displayName="@mantine/dropzone/DropzoneFullScreen",Q.FullScreen=ed;let em={png:"image/png",gif:"image/gif",jpeg:"image/jpeg",svg:"image/svg+xml",webp:"image/webp",avif:"image/avif",mp4:"video/mp4",zip:"application/zip",csv:"text/csv",pdf:"application/pdf",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",xls:"application/vnd.ms-excel",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",ppt:"application/vnd.ms-powerpoint",pptx:"application/vnd.openxmlformats-officedocument.presentationml.presentation",exe:"application/vnd.microsoft.portable-executable"},eu=[em.png,em.gif,em.jpeg,em.svg,em.webp,em.avif],ef=[em.pdf],eh=[em.doc,em.docx],ev=[em.xls,em.xlsx],eg=[em.ppt,em.pptx];em.exe;var ey=Object.defineProperty,ex=Object.getOwnPropertySymbols,ej=Object.prototype.hasOwnProperty,eb=Object.prototype.propertyIsEnumerable,eE=(e,n,o)=>n in e?ey(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,eD=(e,n)=>{for(var o in n||(n={}))ej.call(n,o)&&eE(e,o,n[o]);if(ex)for(var o of ex(n))eb.call(n,o)&&eE(e,o,n[o]);return e};function ez(){return c.createElement(i.Z,{justify:"center",gap:"xl",mih:220,style:{pointerEvents:"none"}},c.createElement(Q.Accept,null,c.createElement(d.Z,{style:{width:(0,s.h)(52),height:(0,s.h)(52),color:"var(--mantine-color-blue-6)"},stroke:1.5})),c.createElement(Q.Reject,null,c.createElement(m.Z,{style:{width:(0,s.h)(52),height:(0,s.h)(52),color:"var(--mantine-color-red-6)"},stroke:1.5})),c.createElement(Q.Idle,null,c.createElement(u.Z,{style:{width:(0,s.h)(52),height:(0,s.h)(52),color:"var(--mantine-color-dimmed)"},stroke:1.5})),c.createElement("div",null,c.createElement(p.x,{size:"xl",inline:!0},"Drag images here or click to select files"),c.createElement(p.x,{size:"sm",c:"dimmed",inline:!0,mt:7},"Attach as many files as you like, each file should not exceed 5mb")))}function eO(e){return c.createElement(Q,eD({onDrop:e=>console.log("accepted files",e),onReject:e=>console.log("rejected files",e),maxSize:3145728,accept:eu},e),c.createElement(ez,null))}let ew=`
import { Group, Text, rem } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';

export function BaseDemo(props: Partial<DropzoneProps>) {
  return (
    <Dropzone
      onDrop={(files) => console.log('accepted files', files)}
      onReject={(files) => console.log('rejected files', files)}
      maxSize={3 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
      {...props}
    >
      <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
        <Dropzone.Accept>
          <IconUpload
            style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}
            stroke={1.5}
          />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <IconX
            style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
            stroke={1.5}
          />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <IconPhoto
            style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }}
            stroke={1.5}
          />
        </Dropzone.Idle>

        <div>
          <Text size="xl" inline>
            Drag images here or click to select files
          </Text>
          <Text size="sm" c="dimmed" inline mt={7}>
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </div>
      </Group>
    </Dropzone>
  );
}
`,eI={type:"code",component:eO,code:ew},eP=`
import { Dropzone } from '@mantine/dropzone';

function Demo() {
  return (
    <Dropzone loading onDrop={() => {}}>
      {/* children */}
    </Dropzone>
  );
}
`,ek={type:"code",component:function(){return c.createElement(eO,{loading:!0})},code:eP};var eM={disabled:"m-f79e9eba"};let eS=`
.disabled {
  background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
  border-color: light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-5));
  cursor: not-allowed;

  & * {
    color: light-dark(var(--mantine-color-gray-5), var(--mantine-color-dark-3));
  }
}
`,e_=`
import { Dropzone } from '@mantine/dropzone';
import classes from './Demo.module.css';

function Demo() {
  return <BaseDemo disabled className={classes.disabled} />;
}
`,eT={type:"code",component:function(){return c.createElement(eO,{disabled:!0,className:eM.disabled})},code:[{fileName:"Demo.tsx",code:e_,language:"tsx"},{fileName:"Demo.module.css",code:eS,language:"scss"}]};var eR=o(14469);let eA=`
import { useRef } from 'react';
import { Button, Group } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';

function Demo() {
  const openRef = useRef<() => void>(null);

  return (
    <>
      <Dropzone openRef={openRef} onDrop={() => {}}>
        {/* children */}
      </Dropzone>

      <Group justify="center" mt="md">
        <Button onClick={() => openRef.current?.()}>Select files</Button>
      </Group>
    </>
  );
}
`,eN={type:"code",component:function(){let e=(0,c.useRef)(null);return c.createElement(c.Fragment,null,c.createElement(eO,{openRef:e}),c.createElement(i.Z,{justify:"center",mt:"md"},c.createElement(eR.z,{onClick:()=>{var n;return null==(n=e.current)?void 0:n.call(e)}},"Select files")))},code:eA},eG=`
import { useRef } from 'react';
import { Button, Group } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';

function Demo() {
  const openRef = useRef<() => void>(null);

  return (
    <Dropzone openRef={openRef} onDrop={() => {}} activateOnClick={false}>
      <Group justify="center">
        <Button onClick={() => openRef.current?.()} style={{ pointerEvents: 'all' }}>
          Select files
        </Button>
      </Group>
    </Dropzone>
  );
}
`,eF={type:"code",component:function(){let e=(0,c.useRef)(null);return c.createElement(Q,{openRef:e,onDrop:()=>{},activateOnClick:!1},c.createElement(i.Z,{justify:"center"},c.createElement(eR.z,{onClick:()=>{var n;return null==(n=e.current)?void 0:n.call(e)},style:{pointerEvents:"all"}},"Select files")))},code:eG};var eC={root:"m-ad28dbef"};let eL=`
.root {
  min-height: rem(120px);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));

  &[data-accept] {
    color: var(--mantine-color-white);
    background-color: var(--mantine-color-blue-6);
  }

  &[data-reject] {
    color: var(--mantine-color-white);
    background-color: var(--mantine-color-red-6);
  }
}

`,eY=`
import { Text } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Dropzone onDrop={() => {}} accept={IMAGE_MIME_TYPE} className={classes.root}>
      <Text ta="center">Drop images here</Text>
    </Dropzone>
  );
}
`,eB={type:"code",component:function(){return c.createElement(Q,{onDrop:()=>{},accept:eu,className:eC.root},c.createElement(p.x,{ta:"center"},"Drop images here"))},code:[{fileName:"Demo.tsx",code:eY,language:"tsx"},{fileName:"Demo.module.css",code:eL,language:"scss"}]};var eU=o(40720),eZ=o(52987);let eX=`
import { useState } from 'react';
import { Text, Image, SimpleGrid } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from '@mantine/dropzone';

function Demo() {
  const [files, setFiles] = useState<FileWithPath[]>([]);

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return <Image key={index} src={imageUrl} onLoad={() => URL.revokeObjectURL(imageUrl)} />;
  });

  return (
    <div>
      <Dropzone accept={IMAGE_MIME_TYPE} onDrop={setFiles}>
        <Text ta="center">Drop images here</Text>
      </Dropzone>

      <SimpleGrid cols={{ base: 1, sm: 4 }} mt={previews.length > 0 ? 'xl' : 0}>
        {previews}
      </SimpleGrid>
    </div>
  );
}
`,eW={type:"code",component:function(){let[e,n]=(0,c.useState)([]),o=e.map((e,n)=>{let o=URL.createObjectURL(e);return c.createElement(eU.E,{key:n,src:o,onLoad:()=>URL.revokeObjectURL(o)})});return c.createElement("div",null,c.createElement(Q,{accept:eu,onDrop:n},c.createElement(p.x,{ta:"center"},"Drop images here")),c.createElement(eZ.M,{cols:{base:1,sm:4},mt:o.length>0?"xl":0},o))},code:eX},eH=`
import { useState } from 'react';
import { Group, Text, Button, rem } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';

function Demo() {
  const [active, setActive] = useState(false);

  return (
    <>
      <Group justify="center">
        <Button color={active ? 'red' : 'blue'} onClick={() => setActive((d) => !d)}>
          {active ? 'Deactivate' : 'Activate'} full screen dropzone
        </Button>
      </Group>

      <Dropzone.FullScreen
        active={active}
        accept={IMAGE_MIME_TYPE}
        onDrop={(files) => {
          console.log(files);
          setActive(false);
        }}
      >
        <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
          <Dropzone.Accept>
            <IconUpload
              style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}
              stroke={1.5}
            />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX
              style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
              stroke={1.5}
            />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <IconPhoto
              style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }}
              stroke={1.5}
            />
          </Dropzone.Idle>

          <div>
            <Text size="xl" inline>
              Drag images here or click to select files
            </Text>
            <Text size="sm" c="dimmed" inline mt={7}>
              Attach as many files as you like, each file should not exceed 5mb
            </Text>
          </div>
        </Group>
      </Dropzone.FullScreen>
    </>
  );
}
`,eK={type:"code",component:function(){let[e,n]=(0,c.useState)(!1);return c.createElement(c.Fragment,null,c.createElement(i.Z,{justify:"center"},c.createElement(eR.z,{color:e?"red":"blue",onClick:()=>n(e=>!e)},e?"Deactivate":"Activate"," full screen dropzone")),c.createElement(Q.FullScreen,{active:e,accept:eu,onDrop:e=>{console.log(e),n(!1)}},c.createElement(ez,null)))},code:eH},eq=(0,l.A)(a.us.Dropzone);function e$(e){let n=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",a:"a",ul:"ul",li:"li"},(0,t.ah)(),e.components),{InstallScript:o,Demo:l,DataTable:a}=n;return a||eJ("DataTable",!0),l||eJ("Demo",!0),o||eJ("InstallScript",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(o,{packages:"@mantine/dropzone"}),"\n",(0,r.jsx)(n.p,{children:"After installation import package styles at the root of your application:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import '@mantine/dropzone/styles.css';\n"})}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Dropzone"})," lets you capture one or more files from user.\nComponent is based on ",(0,r.jsx)(n.a,{href:"https://react-dropzone.js.org/",children:"react-dropzone"})," and support all of its core features:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Accepts/rejects files based on provided mime types"}),"\n",(0,r.jsx)(n.li,{children:"Limits individual file size"}),"\n",(0,r.jsx)(n.li,{children:"Renders given children and provides context based component to display elements based on current status"}),"\n"]}),"\n",(0,r.jsx)(l,{data:eI}),"\n",(0,r.jsx)(n.h2,{id:"dropzoneaccept-dropzonereject-and-dropzoneidle",children:"Dropzone.Accept, Dropzone.Reject and Dropzone.Idle"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Dropzone.Accept"}),", ",(0,r.jsx)(n.code,{children:"Dropzone.Reject"})," and ",(0,r.jsx)(n.code,{children:"Dropzone.Idle"})," components are visible only when the user performs certain action:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Dropzone.Accept"})," is visible only when the user drags file that can be accepted over the dropzone"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Dropzone.Reject"})," is visible only when the user drags file that cannot be accepted over the dropzone"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Dropzone.Idle"})," is visible when the user does not drag anything over dropzone"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"loading-state",children:"Loading state"}),"\n",(0,r.jsxs)(n.p,{children:["Set ",(0,r.jsx)(n.code,{children:"loading"})," prop to indicate loading state with ",(0,r.jsx)(n.a,{href:"/core/loading-overlay/",children:"LoadingOverlay"})," component.\nWhen ",(0,r.jsx)(n.code,{children:"loading"})," props is true user cannot drop or select new files (",(0,r.jsx)(n.code,{children:"Dropzone"})," becomes disabled):"]}),"\n",(0,r.jsx)(l,{data:ek}),"\n",(0,r.jsx)(n.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,r.jsxs)(n.p,{children:["If you want to implement your own loading state you can disable ",(0,r.jsx)(n.code,{children:"Dropzone"})," without ",(0,r.jsx)(n.code,{children:"LoadingOverlay"}),".\nSame as with ",(0,r.jsx)(n.code,{children:"loading"}),", when ",(0,r.jsx)(n.code,{children:"Dropzone"})," is disabled user cannot drop or select new files:"]}),"\n",(0,r.jsx)(l,{data:eT}),"\n",(0,r.jsx)(n.h2,{id:"open-file-browser-manually",children:"Open file browser manually"}),"\n",(0,r.jsxs)(n.p,{children:["To open files browser from outside of component use ",(0,r.jsx)(n.code,{children:"openRef"})," prop to get function that will trigger file browser:"]}),"\n",(0,r.jsx)(l,{data:eN}),"\n",(0,r.jsx)(n.h2,{id:"enable-child-pointer-event",children:"Enable child pointer event"}),"\n",(0,r.jsxs)(n.p,{children:["By default, Dropzone disables pointer events on its children for dragging events to work. When ",(0,r.jsx)(n.code,{children:"activateOnClick={false}"}),",\nclicking on any children inside Dropzone will not do anything.\nHowever, you can set style ",(0,r.jsx)(n.code,{children:"pointerEvents: 'all'"})," to make children clickable.\nNote that you need to set these styles only on interactive elements, such as buttons or links."]}),"\n",(0,r.jsx)(l,{data:eF}),"\n",(0,r.jsx)(n.h2,{id:"mime-types",children:"Mime types"}),"\n",(0,r.jsxs)(n.p,{children:["To specify file types provide an object with the keys set to the ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types",children:"mime type"}),"\nand the values as an array of file extensions. Find more examples of accepting specific file types\nin the ",(0,r.jsx)(n.a,{href:"https://react-dropzone.js.org/#section-accepting-specific-file-types",children:"react-dropzone documentation"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Dropzone } from '@mantine/dropzone';\n\nfunction Demo() {\n  return (\n    <Dropzone\n      accept={{\n        'image/*': [], // All images\n        'text/html': ['.html', '.htm'],\n      }}\n    >\n      {/* children */}\n    </Dropzone>\n  );\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can also specify file types by providing an array of mime types to ",(0,r.jsx)(n.code,{children:"accept"})," prop:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Dropzone } from '@mantine/dropzone';\n\nfunction Demo() {\n  return (\n    <Dropzone accept={['image/png', 'image/jpeg', 'image/sgv+xml', 'image/gif']}>\n      {/* children */}\n    </Dropzone>\n  );\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To save some research time you can use ",(0,r.jsx)(n.code,{children:"MIME_TYPES"})," variable exported from ",(0,r.jsx)(n.code,{children:"@mantine/dropzone"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Dropzone, MIME_TYPES } from '@mantine/dropzone';\n\nfunction Demo() {\n  return (\n    <Dropzone accept={[MIME_TYPES.png, MIME_TYPES.jpeg, MIME_TYPES.svg, MIME_TYPES.gif]}>\n      {/* children */}\n    </Dropzone>\n  );\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"MIME_TYPES"})," includes following data:"]}),"\n",(0,r.jsx)(a,{head:["Key","Mime type"],data:Object.keys(em).map(e=>[e,em[e]])}),"\n",(0,r.jsx)(n.p,{children:"Additionally you can use grouped mime types:"}),"\n",(0,r.jsx)(a,{head:["Variable","Mime types"],data:[["IMAGE_MIME_TYPE",eu.join(", ")],["PDF_MIME_TYPE",ef.join(", ")],["MS_WORD_MIME_TYPE",eh.join(", ")],["MS_EXCEL_MIME_TYPE",ev.join(", ")],["MS_POWERPOINT_MIME_TYPE",eg.join(", ")]]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { IMAGE_MIME_TYPE, Dropzone } from '@mantine/dropzone';\n\nfunction Demo() {\n  return <Dropzone accept={IMAGE_MIME_TYPE}>{/* children */}</Dropzone>;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"styles-api",children:"Styles API"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Dropzone"})," root element has the following data attributes to change styles based on current status:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"data-loading"})," – when ",(0,r.jsx)(n.code,{children:"loading"})," prop is ",(0,r.jsx)(n.code,{children:"true"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"data-accept"})," – when user drags files that can be accepted over the dropzone"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"data-reject"})," – when user drags files that cannot be accepted over the dropzone"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"data-idle"})," – default state – user does not drag any files over dropzone"]}),"\n"]}),"\n",(0,r.jsx)(l,{data:eB}),"\n",(0,r.jsx)(n.h2,{id:"images-previews",children:"Images previews"}),"\n",(0,r.jsx)(l,{data:eW}),"\n",(0,r.jsx)(n.h2,{id:"get-ref",children:"Get ref"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useRef, useEffect } from 'react';\nimport { Dropzone } from '@mantine/dropzone';\n\nfunction Demo() {\n  const dropzoneRef = useRef<HTMLDivElement>(null);\n\n  useEffect(() => {\n    dropzoneRef.current.focus();\n  }, []);\n\n  return <Dropzone ref={dropzoneRef}>{/* children */}</Dropzone>;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"dropzonefullscreen-component",children:"Dropzone.FullScreen component"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Dropzone.FullScreen"})," lets you capture files dropped to browser window instead of specific area.\nIt supports the same props as ",(0,r.jsx)(n.code,{children:"Dropzone"})," component."]}),"\n",(0,r.jsx)(n.p,{children:"To preview component click button and drop images to browser window:"}),"\n",(0,r.jsx)(l,{data:eK})]})}var eV=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(eq,Object.assign({},e,{children:(0,r.jsx)(e$,e)}))};function eJ(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},40720:function(e,n,o){"use strict";o.d(n,{E:function(){return D}});var r=o(67294),t={root:"m-9e117634"},l=o(70405),a=o(30370),c=o(86109),i=o(81110),s=o(8586),p=o(48468),d=Object.defineProperty,m=Object.defineProperties,u=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,g=(e,n,o)=>n in e?d(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,y=(e,n)=>{for(var o in n||(n={}))h.call(n,o)&&g(e,o,n[o]);if(f)for(var o of f(n))v.call(n,o)&&g(e,o,n[o]);return e},x=(e,n)=>m(e,u(n)),j=(e,n)=>{var o={};for(var r in e)h.call(e,r)&&0>n.indexOf(r)&&(o[r]=e[r]);if(null!=e&&f)for(var r of f(e))0>n.indexOf(r)&&v.call(e,r)&&(o[r]=e[r]);return o};let b={},E=(0,s.Z)((e,{radius:n,fit:o})=>({root:{"--image-radius":void 0===n?void 0:(0,p.H5)(n),"--image-object-fit":o}})),D=(0,l.b)((e,n)=>{let o=(0,a.w)("Image",b,e),{classNames:l,className:s,style:p,styles:d,unstyled:m,vars:u,onError:f,src:h,radius:v,fit:g,fallbackSrc:D}=o,z=j(o,["classNames","className","style","styles","unstyled","vars","onError","src","radius","fit","fallbackSrc"]),[O,w]=(0,r.useState)(!h);(0,r.useEffect)(()=>w(!h),[h]);let I=(0,c.y)({name:"Image",classes:t,props:o,className:s,style:p,classNames:l,styles:d,unstyled:m,vars:u,varsResolver:E});return O&&D?r.createElement(i.x,y(x(y({component:"img",src:D},I("root")),{onError:f,mod:"fallback"}),z)):r.createElement(i.x,y(x(y({component:"img",ref:n},I("root")),{src:h,onError:e=>{null==f||f(e),w(!0)}}),z))});D.classes=t,D.displayName="@mantine/core/Image"},17286:function(e,n,o){"use strict";o.d(n,{f:function(){return I}});var r=o(67294),t={root:"m-6e45937b",loader:"m-e8eb006c",overlay:"m-df587f17"},l=o(56338),a=o(77015),c=o(9065),i=o(3154),s=o(30370),p=o(43440),d=o(86109),m=o(81110),u=o(88380),f=o(8586),h=Object.defineProperty,v=Object.defineProperties,g=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,b=(e,n,o)=>n in e?h(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,E=(e,n)=>{for(var o in n||(n={}))x.call(n,o)&&b(e,o,n[o]);if(y)for(var o of y(n))j.call(n,o)&&b(e,o,n[o]);return e},D=(e,n)=>v(e,g(n)),z=(e,n)=>{var o={};for(var r in e)x.call(e,r)&&0>n.indexOf(r)&&(o[r]=e[r]);if(null!=e&&y)for(var r of y(e))0>n.indexOf(r)&&j.call(e,r)&&(o[r]=e[r]);return o};let O={transitionProps:{transition:"fade",duration:0},overlayProps:{backgroundOpacity:.75},zIndex:(0,u.w)("overlay")},w=(0,f.Z)((e,{zIndex:n})=>({root:{"--lo-z-index":null==n?void 0:n.toString()}})),I=(0,i.d)((e,n)=>{let o=(0,s.w)("LoadingOverlay",O,e),{classNames:i,className:u,style:f,styles:h,unstyled:v,vars:g,transitionProps:y,loaderProps:x,overlayProps:j,visible:b,zIndex:I}=o,P=z(o,["classNames","className","style","styles","unstyled","vars","transitionProps","loaderProps","overlayProps","visible","zIndex"]),k=(0,p.rZ)(),M=(0,d.y)({name:"LoadingOverlay",classes:t,props:o,className:u,style:f,classNames:i,styles:h,unstyled:v,vars:g,varsResolver:w}),S=E(E({},O.overlayProps),j);return r.createElement(l.u,D(E({transition:"fade"},y),{mounted:!!b}),e=>r.createElement(m.x,E(D(E({},M("root",{style:e})),{ref:n}),P),r.createElement(a.a,E(D(E({},M("loader")),{unstyled:v}),x)),r.createElement(c.a,D(E(E({},S),M("overlay")),{"data-light":!0,unstyled:v,color:(null==j?void 0:j.color)||k.white})),r.createElement(c.a,D(E(E({},S),M("overlay")),{"data-dark":!0,unstyled:v,color:(null==j?void 0:j.color)||k.colors.dark[5]}))))});I.classes=t,I.displayName="@mantine/core/LoadingOverlay"},52987:function(e,n,o){"use strict";o.d(n,{M:function(){return k}});var r=o(67294),t=o(43440),l=o(45016),a=o(48468),c=o(92925),i=o(88313),s=o(57197),p=o(43602);function d({spacing:e,verticalSpacing:n,cols:o,selector:d}){var m;let u=(0,t.rZ)(),f=void 0===n?e:n,h=(0,l.L)({"--sg-spacing-x":(0,a.bG)((0,c.v)(e)),"--sg-spacing-y":(0,a.bG)((0,c.v)(f)),"--sg-cols":null==(m=(0,c.v)(o))?void 0:m.toString()}),v=(0,i.X)(u.breakpoints).reduce((n,r)=>(n[r]||(n[r]={}),"object"==typeof e&&void 0!==e[r]&&(n[r]["--sg-spacing-x"]=(0,a.bG)(e[r])),"object"==typeof f&&void 0!==f[r]&&(n[r]["--sg-spacing-y"]=(0,a.bG)(f[r])),"object"==typeof o&&void 0!==o[r]&&(n[r]["--sg-cols"]=o[r]),n),{}),g=(0,s.I)((0,i.X)(v),u).filter(e=>(0,i.X)(v[e.value]).length>0),y=g.map(e=>({query:`(min-width: ${u.breakpoints[e.value]})`,styles:v[e.value]}));return r.createElement(p.f,{styles:h,media:y,selector:d})}var m={root:"m-2415a157"},u=o(3154),f=o(30370),h=o(86109),v=o(13035),g=o(81110),y=Object.defineProperty,x=Object.defineProperties,j=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,z=(e,n,o)=>n in e?y(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,O=(e,n)=>{for(var o in n||(n={}))E.call(n,o)&&z(e,o,n[o]);if(b)for(var o of b(n))D.call(n,o)&&z(e,o,n[o]);return e},w=(e,n)=>x(e,j(n)),I=(e,n)=>{var o={};for(var r in e)E.call(e,r)&&0>n.indexOf(r)&&(o[r]=e[r]);if(null!=e&&b)for(var r of b(e))0>n.indexOf(r)&&D.call(e,r)&&(o[r]=e[r]);return o};let P={cols:1,spacing:"md"},k=(0,u.d)((e,n)=>{let o=(0,f.w)("SimpleGrid",P,e),{classNames:t,className:l,style:a,styles:c,unstyled:i,vars:s,cols:p,verticalSpacing:u,spacing:y}=o,x=I(o,["classNames","className","style","styles","unstyled","vars","cols","verticalSpacing","spacing"]),j=(0,h.y)({name:"SimpleGrid",classes:m,props:o,className:l,style:a,classNames:t,styles:c,unstyled:i,vars:s}),b=(0,v.m)();return r.createElement(r.Fragment,null,r.createElement(d,w(O({},o),{selector:`.${b}`})),r.createElement(g.x,O(O({ref:n},j("root",{className:b})),x)))});k.classes=m,k.displayName="@mantine/core/SimpleGrid"},92925:function(e,n,o){"use strict";function r(e){return"object"==typeof e&&null!==e?"base"in e?e.base:void 0:e}o.d(n,{v:function(){return r}})},30514:function(e,n,o){"use strict";o.d(n,{o:function(){return t}});var r=o(91624);function t(e,n){return e in n.breakpoints?(0,r.px)(n.breakpoints[e]):(0,r.px)(e)}},57197:function(e,n,o){"use strict";o.d(n,{I:function(){return t}});var r=o(30514);function t(e,n){let o=e.map(e=>({value:e,px:(0,r.o)(e,n)}));return o.sort((e,n)=>e.px-n.px),o}},12177:function(e,n,o){"use strict";o.d(n,{q:function(){return t}});var r=o(67294);function t(e=!1,n){let{onOpen:o,onClose:t}=n||{},[l,a]=(0,r.useState)(e),c=(0,r.useCallback)(()=>{a(e=>e||(null==o||o(),!0))},[o]),i=(0,r.useCallback)(()=>{a(e=>e?(null==t||t(),!1):e)},[t]),s=(0,r.useCallback)(()=>{l?i():c()},[i,c,l]);return[l,{open:c,close:i,toggle:s}]}}},function(e){e.O(0,[9766,8992,178,9774,2888,179],function(){return e(e.s=4598)}),_N_E=e.O()}]);