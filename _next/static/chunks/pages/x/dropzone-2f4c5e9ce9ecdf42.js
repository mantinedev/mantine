(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[22638],{5189:(e,o,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/x/dropzone",function(){return n(66287)}])},66287:(e,o,n)=>{"use strict";n.r(o),n.d(o,{default:()=>el});var r=n(31085),t=n(71184);let i={png:"image/png",gif:"image/gif",jpeg:"image/jpeg",svg:"image/svg+xml",webp:"image/webp",avif:"image/avif",heic:"image/heic",heif:"image/heif",mp4:"video/mp4",zip:"application/zip",rar:"application/x-rar","7z":"application/x-7z-compressed",csv:"text/csv",pdf:"application/pdf",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",xls:"application/vnd.ms-excel",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",ppt:"application/vnd.ms-powerpoint",pptx:"application/vnd.openxmlformats-officedocument.presentationml.presentation",exe:"application/vnd.microsoft.portable-executable"},s=[i.png,i.gif,i.jpeg,i.svg,i.webp,i.avif,i.heic,i.heif],c=[i.pdf],a=[i.doc,i.docx],l=[i.xls,i.xlsx],d=[i.ppt,i.pptx];i.exe;var p=n(73801),m=n(3650),u=n(33102),h=n(56051),f=n(93065),x=n(82297),j=n(7098),g=n(33450),v=n(6754),z=n(29686),D=n(69564),y=n(34056),b=n(35395),E=n(34321);let[I,k]=(0,n(59852).F)("Dropzone component was not found in tree");var _=n(14041),M=n(40880),w=n(92185);function S(e){let o=o=>{let{children:n,...t}=(0,z.Y)(`Dropzone${(0,w.Z)(e)}`,{},o),i=k(),s=(0,M.v)(n)?n:(0,r.jsx)("span",{children:n});return i[e]?(0,_.cloneElement)(s,t):null};return o.displayName=`@mantine/dropzone/${(0,w.Z)(e)}`,o}let T=S("accept"),P=S("reject"),R=S("idle");var A={root:"m_d46a4834",inner:"m_b85f7144",fullScreen:"m_96f6e9ad",dropzone:"m_7946116d"};let Y={loading:!1,multiple:!0,maxSize:1/0,autoFocus:!1,activateOnClick:!0,activateOnDrag:!0,dragEventsBubbling:!0,activateOnKeyboard:!0,useFsAccessApi:!0,variant:"light",rejectColor:"red"},G=(0,j.V)((e,{radius:o,variant:n,acceptColor:r,rejectColor:t})=>{let i=e.variantColorResolver({color:r||e.primaryColor,theme:e,variant:n}),s=e.variantColorResolver({color:t||"red",theme:e,variant:n});return{root:{"--dropzone-radius":(0,g.nJ)(o),"--dropzone-accept-color":i.color,"--dropzone-accept-bg":i.background,"--dropzone-reject-color":s.color,"--dropzone-reject-bg":s.background}}}),N=(0,v.P9)((e,o)=>{let n=(0,z.Y)("Dropzone",Y,e),{classNames:t,className:i,style:s,styles:c,unstyled:a,vars:l,radius:d,disabled:p,loading:m,multiple:u,maxSize:h,accept:f,children:j,onDropAny:g,onDrop:v,onReject:k,openRef:_,name:M,maxFiles:w,autoFocus:S,activateOnClick:T,activateOnDrag:P,dragEventsBubbling:R,activateOnKeyboard:N,onDragEnter:O,onDragLeave:C,onDragOver:F,onFileDialogCancel:L,onFileDialogOpen:U,preventDropOnDocument:B,useFsAccessApi:H,getFilesFromEvent:$,validator:X,rejectColor:W,acceptColor:K,enablePointerEvents:V,loaderProps:q,inputProps:J,mod:Z,...Q}=n,ee=(0,D.I)({name:"Dropzone",classes:A,props:n,className:i,style:s,classNames:t,styles:c,unstyled:a,vars:l,varsResolver:G}),{getRootProps:eo,getInputProps:en,isDragAccept:er,isDragReject:et,open:ei}=(0,x.VB)({onDrop:g,onDropAccepted:v,onDropRejected:k,disabled:p||m,accept:Array.isArray(f)?f.reduce((e,o)=>({...e,[o]:[]}),{}):f,multiple:u,maxSize:h,maxFiles:w,autoFocus:S,noClick:!T,noDrag:!P,noDragEventsBubbling:!R,noKeyboard:!N,onDragEnter:O,onDragLeave:C,onDragOver:F,onFileDialogCancel:L,onFileDialogOpen:U,preventDropOnDocument:B,useFsAccessApi:H,validator:X,...$?{getFilesFromEvent:$}:null});(0,E.bl)(_,ei);let es=!er&&!et;return(0,r.jsx)(I,{value:{accept:er,reject:et,idle:es},children:(0,r.jsxs)(y.a,{...eo(),...ee("root",{focusable:!0}),...Q,mod:[{accept:er,reject:et,idle:es,disabled:p,loading:m,"activate-on-click":T},Z],children:[(0,r.jsx)(b.p,{visible:m,overlayProps:{radius:d},unstyled:a,loaderProps:q}),(0,r.jsx)("input",{...en(J),name:M}),(0,r.jsx)("div",{...ee("inner"),ref:o,"data-enable-pointer-events":V||void 0,children:j})]})})});N.classes=A,N.displayName="@mantine/dropzone/Dropzone",N.Accept=T,N.Idle=R,N.Reject=P;var O=n(81296),C=n(36456),F=n(54977),L=n(92051);let U={loading:!1,maxSize:1/0,activateOnClick:!1,activateOnDrag:!0,dragEventsBubbling:!0,activateOnKeyboard:!0,active:!0,zIndex:(0,O.I)("max"),withinPortal:!0},B=(0,v.P9)((e,o)=>{let n=(0,z.Y)("DropzoneFullScreen",U,e),{classNames:t,className:i,style:s,styles:c,unstyled:a,vars:l,active:d,onDrop:p,onReject:m,zIndex:u,withinPortal:h,portalProps:f,...x}=n,j=(0,D.I)({name:"DropzoneFullScreen",classes:A,props:n,className:i,style:s,classNames:t,styles:c,unstyled:a,rootSelector:"fullScreen"}),{resolvedClassNames:g,resolvedStyles:v}=(0,C.Y)({classNames:t,styles:c,props:n}),[b,E]=(0,_.useState)(0),[I,{open:k,close:M}]=(0,L.j)(!1),w=e=>{e.dataTransfer?.types.includes("Files")&&(E(e=>e+1),k())},S=()=>{E(e=>e-1)};return(0,_.useEffect)(()=>{0===b&&M()},[b]),(0,_.useEffect)(()=>{if(d)return document.addEventListener("dragenter",w,!1),document.addEventListener("dragleave",S,!1),()=>{document.removeEventListener("dragenter",w,!1),document.removeEventListener("dragleave",S,!1)}},[d]),(0,r.jsx)(F.r,{...f,withinPortal:h,children:(0,r.jsx)(y.a,{...j("fullScreen",{style:{opacity:I?1:0,pointerEvents:I?"all":"none",zIndex:u}}),ref:o,children:(0,r.jsx)(N,{...x,classNames:g,styles:v,unstyled:a,className:A.dropzone,onDrop:e=>{p?.(e),M(),E(0)},onReject:e=>{m?.(e),M(),E(0)}})})})});function H(){return(0,r.jsxs)(h.Y,{justify:"center",gap:"xl",mih:220,style:{pointerEvents:"none"},children:[(0,r.jsx)(N.Accept,{children:(0,r.jsx)(p.A,{size:52,color:"var(--mantine-color-blue-6)",stroke:1.5})}),(0,r.jsx)(N.Reject,{children:(0,r.jsx)(m.A,{size:52,color:"var(--mantine-color-red-6)",stroke:1.5})}),(0,r.jsx)(N.Idle,{children:(0,r.jsx)(u.A,{size:52,color:"var(--mantine-color-dimmed)",stroke:1.5})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(f.E,{size:"xl",inline:!0,children:"Drag images here or click to select files"}),(0,r.jsx)(f.E,{size:"sm",c:"dimmed",inline:!0,mt:7,children:"Attach as many files as you like, each file should not exceed 5mb"})]})]})}function $(e){return(0,r.jsx)(N,{onDrop:e=>console.log("accepted files",e),onReject:e=>console.log("rejected files",e),maxSize:5242880,accept:s,...e,children:(0,r.jsx)(H,{})})}B.classes=A,B.displayName="@mantine/dropzone/DropzoneFullScreen",N.FullScreen=B;let X={type:"code",component:$,code:`
import { Group, Text } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';

export function BaseDemo(props: Partial<DropzoneProps>) {
  return (
    <Dropzone
      onDrop={(files) => console.log('accepted files', files)}
      onReject={(files) => console.log('rejected files', files)}
      maxSize={5 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
      {...props}
    >
      <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
        <Dropzone.Accept>
          <IconUpload size={52} color="var(--mantine-color-blue-6)" stroke={1.5} />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <IconX size={52} color="var(--mantine-color-red-6)" stroke={1.5} />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <IconPhoto size={52} color="var(--mantine-color-dimmed)" stroke={1.5} />
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
`},W={type:"code",component:function(){return(0,r.jsx)($,{loading:!0})},code:`
import { Dropzone } from '@mantine/dropzone';

function Demo() {
  return (
    <Dropzone loading onDrop={() => {}}>
      {/* children */}
    </Dropzone>
  );
}
`};var K={disabled:"m_f79e9eba"};let V={type:"code",component:function(){return(0,r.jsx)($,{disabled:!0,className:K.disabled})},code:[{fileName:"Demo.tsx",code:`
import { Dropzone } from '@mantine/dropzone';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Dropzone disabled className={classes.disabled} onDrop={() => {}}>
      {/* children... */}
    </Dropzone>
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`
.disabled {
  background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
  border-color: light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-5));
  cursor: not-allowed;

  & * {
    color: light-dark(var(--mantine-color-gray-5), var(--mantine-color-dark-3));
  }
}
`,language:"scss"}]};var q=n(52022);let J={type:"code",component:function(){let e=(0,_.useRef)(null);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)($,{openRef:e}),(0,r.jsx)(h.Y,{justify:"center",mt:"md",children:(0,r.jsx)(q.$,{onClick:()=>e.current?.(),children:"Select files"})})]})},code:`
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
`},Z={type:"code",component:function(){let e=(0,_.useRef)(null);return(0,r.jsx)(N,{openRef:e,onDrop:()=>{},activateOnClick:!1,children:(0,r.jsx)(h.Y,{justify:"center",children:(0,r.jsx)(q.$,{onClick:()=>e.current?.(),style:{pointerEvents:"all"},children:"Select files"})})})},code:`
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
`};var Q={root:"m_ad28dbef"};let ee={type:"code",component:function(){return(0,r.jsx)(N,{onDrop:()=>{},accept:s,className:Q.root,children:(0,r.jsx)(f.E,{ta:"center",children:"Drop images here"})})},code:[{fileName:"Demo.tsx",code:`
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
`,language:"tsx"},{fileName:"Demo.module.css",code:`
.root {
  min-height: 120px;
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

`,language:"scss"}]};var eo=n(38621),en=n(96172);let er={type:"code",component:function(){let[e,o]=(0,_.useState)([]),n=e.map((e,o)=>{let n=URL.createObjectURL(e);return(0,r.jsx)(eo._,{src:n,onLoad:()=>URL.revokeObjectURL(n)},o)});return(0,r.jsxs)("div",{children:[(0,r.jsx)(N,{accept:s,onDrop:o,children:(0,r.jsx)(f.E,{ta:"center",children:"Drop images here"})}),(0,r.jsx)(en.r,{cols:{base:1,sm:4},mt:n.length>0?"xl":0,children:n})]})},code:`
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
`},et={type:"code",component:function(){let[e,o]=(0,_.useState)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h.Y,{justify:"center",children:(0,r.jsxs)(q.$,{color:e?"red":"blue",onClick:()=>o(e=>!e),children:[e?"Deactivate":"Activate"," full screen dropzone"]})}),(0,r.jsx)(N.FullScreen,{active:e,accept:s,onDrop:e=>{console.log(e),o(!1)},children:(0,r.jsx)(H,{})})]})},code:`
import { useState } from 'react';
import { Group, Text, Button } from '@mantine/core';
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
            <IconUpload size={52} color="var(--mantine-color-blue-6)" stroke={1.5} />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX size={52} color="var(--mantine-color-red-6)" stroke={1.5} />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <IconPhoto size={52} color="var(--mantine-color-dimmed)" stroke={1.5} />
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
`};var ei=n(85954),es=n(38215);let ec=(0,ei.P)(es.XZ.Dropzone);function ea(e){let o={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components},{DataTable:n,Demo:p,InstallScript:m}=o;return n||ed("DataTable",!0),p||ed("Demo",!0),m||ed("InstallScript",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(m,{packages:"@mantine/dropzone"}),"\n",(0,r.jsx)(o.p,{children:"After installation import package styles at the root of your application:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-tsx",children:"import '@mantine/dropzone/styles.css';\n"})}),"\n",(0,r.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"Dropzone"})," lets you capture one or more files from user.\nComponent is based on ",(0,r.jsx)(o.a,{href:"https://react-dropzone.js.org/",children:"react-dropzone"})," and support all of its core features:"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"Accepts/rejects files based on provided mime types"}),"\n",(0,r.jsx)(o.li,{children:"Limits individual file size"}),"\n",(0,r.jsx)(o.li,{children:"Renders given children and provides context based component to display elements based on current status"}),"\n"]}),"\n",(0,r.jsx)(p,{data:X}),"\n",(0,r.jsx)(o.h2,{id:"dropzoneaccept-dropzonereject-and-dropzoneidle",children:"Dropzone.Accept, Dropzone.Reject and Dropzone.Idle"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"Dropzone.Accept"}),", ",(0,r.jsx)(o.code,{children:"Dropzone.Reject"})," and ",(0,r.jsx)(o.code,{children:"Dropzone.Idle"})," components are visible only when the user performs certain action:"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"Dropzone.Accept"})," is visible only when the user drags file that can be accepted over the dropzone"]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"Dropzone.Reject"})," is visible only when the user drags file that cannot be accepted over the dropzone"]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"Dropzone.Idle"})," is visible when the user does not drag anything over dropzone"]}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"loading-state",children:"Loading state"}),"\n",(0,r.jsxs)(o.p,{children:["Set ",(0,r.jsx)(o.code,{children:"loading"})," prop to indicate loading state with ",(0,r.jsx)(o.a,{href:"/core/loading-overlay/",children:"LoadingOverlay"})," component.\nWhen ",(0,r.jsx)(o.code,{children:"loading"})," props is true user cannot drop or select new files (",(0,r.jsx)(o.code,{children:"Dropzone"})," becomes disabled):"]}),"\n",(0,r.jsx)(p,{data:W}),"\n",(0,r.jsx)(o.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,r.jsxs)(o.p,{children:["If you want to implement your own loading state you can disable ",(0,r.jsx)(o.code,{children:"Dropzone"})," without ",(0,r.jsx)(o.code,{children:"LoadingOverlay"}),".\nSame as with ",(0,r.jsx)(o.code,{children:"loading"}),", when ",(0,r.jsx)(o.code,{children:"Dropzone"})," is disabled user cannot drop or select new files:"]}),"\n",(0,r.jsx)(p,{data:V}),"\n",(0,r.jsx)(o.h2,{id:"open-file-browser-manually",children:"Open file browser manually"}),"\n",(0,r.jsxs)(o.p,{children:["To open files browser from outside of component use ",(0,r.jsx)(o.code,{children:"openRef"})," prop to get function that will trigger file browser:"]}),"\n",(0,r.jsx)(p,{data:J}),"\n",(0,r.jsx)(o.h2,{id:"enable-child-pointer-event",children:"Enable child pointer event"}),"\n",(0,r.jsxs)(o.p,{children:["By default, Dropzone disables pointer events on its children for dragging events to work. When ",(0,r.jsx)(o.code,{children:"activateOnClick={false}"}),",\nclicking on any children inside Dropzone will not do anything.\nHowever, you can set style ",(0,r.jsx)(o.code,{children:"pointerEvents: 'all'"})," to make children clickable.\nNote that you need to set these styles only on interactive elements, such as buttons or links."]}),"\n",(0,r.jsx)(p,{data:Z}),"\n",(0,r.jsx)(o.h2,{id:"mime-types",children:"Mime types"}),"\n",(0,r.jsxs)(o.p,{children:["To specify file types provide an object with the keys set to the ",(0,r.jsx)(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types",children:"mime type"}),"\nand the values as an array of file extensions. Find more examples of accepting specific file types\nin the ",(0,r.jsx)(o.a,{href:"https://react-dropzone.js.org/#section-accepting-specific-file-types",children:"react-dropzone documentation"}),"."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-tsx",children:"import { Dropzone } from '@mantine/dropzone';\n\nfunction Demo() {\n  return (\n    <Dropzone\n      accept={{\n        'image/*': [], // All images\n        'text/html': ['.html', '.htm'],\n      }}\n      onDrop={() => {}}\n    >\n      {/* children */}\n    </Dropzone>\n  );\n}\n"})}),"\n",(0,r.jsxs)(o.p,{children:["You can also specify file types by providing an array of mime types to ",(0,r.jsx)(o.code,{children:"accept"})," prop:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-tsx",children:"import { Dropzone } from '@mantine/dropzone';\n\nfunction Demo() {\n  return (\n    <Dropzone\n      accept={[\n        'image/png',\n        'image/jpeg',\n        'image/svg+xml',\n        'image/gif',\n      ]}\n      onDrop={() => {}}\n    >\n      {/* children */}\n    </Dropzone>\n  );\n}\n"})}),"\n",(0,r.jsxs)(o.p,{children:["To save some research time you can use ",(0,r.jsx)(o.code,{children:"MIME_TYPES"})," variable exported from ",(0,r.jsx)(o.code,{children:"@mantine/dropzone"}),":"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-tsx",children:"import { Dropzone, MIME_TYPES } from '@mantine/dropzone';\n\nfunction Demo() {\n  return (\n    <Dropzone\n      accept={[\n        MIME_TYPES.png,\n        MIME_TYPES.jpeg,\n        MIME_TYPES.svg,\n        MIME_TYPES.gif,\n      ]}\n      onDrop={() => {}}\n    >\n      {/* children */}\n    </Dropzone>\n  );\n}\n"})}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"MIME_TYPES"})," includes following data:"]}),"\n",(0,r.jsx)(n,{head:["Key","Mime type"],data:Object.keys(i).map(e=>[e,i[e]])}),"\n",(0,r.jsx)(o.p,{children:"Additionally you can use grouped mime types:"}),"\n",(0,r.jsx)(n,{head:["Variable","Mime types"],data:[["IMAGE_MIME_TYPE",s.join(", ")],["PDF_MIME_TYPE",c.join(", ")],["MS_WORD_MIME_TYPE",a.join(", ")],["MS_EXCEL_MIME_TYPE",l.join(", ")],["MS_POWERPOINT_MIME_TYPE",d.join(", ")]]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-tsx",children:"import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';\n\nfunction Demo() {\n  return (\n    <Dropzone accept={IMAGE_MIME_TYPE} onDrop={() => {}}>\n      {/* children */}\n    </Dropzone>\n  );\n}\n"})}),"\n",(0,r.jsx)(o.h2,{id:"styles-api",children:"Styles API"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"Dropzone"})," root element has the following data attributes to change styles based on current status:"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"data-loading"})," – when ",(0,r.jsx)(o.code,{children:"loading"})," prop is ",(0,r.jsx)(o.code,{children:"true"})]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"data-accept"})," – when user drags files that can be accepted over the dropzone"]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"data-reject"})," – when user drags files that cannot be accepted over the dropzone"]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"data-idle"})," – default state – user does not drag any files over dropzone"]}),"\n"]}),"\n",(0,r.jsx)(p,{data:ee}),"\n",(0,r.jsx)(o.h2,{id:"images-previews",children:"Images previews"}),"\n",(0,r.jsx)(p,{data:er}),"\n",(0,r.jsx)(o.h2,{id:"get-ref",children:"Get ref"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-tsx",children:"import { useEffect, useRef } from 'react';\nimport { Dropzone } from '@mantine/dropzone';\n\nfunction Demo() {\n  const dropzoneRef = useRef<HTMLDivElement>(null);\n\n  useEffect(() => {\n    dropzoneRef.current?.focus();\n  }, []);\n\n  return (\n    <Dropzone ref={dropzoneRef} onDrop={() => {}}>\n      {/* children */}\n    </Dropzone>\n  );\n}\n"})}),"\n",(0,r.jsx)(o.h2,{id:"dropzonefullscreen-component",children:"Dropzone.FullScreen component"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"Dropzone.FullScreen"})," lets you capture files dropped to browser window instead of specific area.\nIt supports the same props as ",(0,r.jsx)(o.code,{children:"Dropzone"})," component."]}),"\n",(0,r.jsx)(o.p,{children:"To preview component click button and drop images to browser window:"}),"\n",(0,r.jsx)(p,{data:et})]})}function el(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(ec,{...e,children:(0,r.jsx)(ea,{...e})})}function ed(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},38621:(e,o,n)=>{"use strict";n.d(o,{_:()=>h});var r=n(31085),t=n(14041),i=n(33450),s=n(7098),c=n(29686),a=n(69564),l=n(34056),d=n(2453),p={root:"m_9e117634"};let m={},u=(0,s.V)((e,{radius:o,fit:n})=>({root:{"--image-radius":void 0===o?void 0:(0,i.nJ)(o),"--image-object-fit":n}})),h=(0,d.v)((e,o)=>{let n=(0,c.Y)("Image",m,e),{classNames:i,className:s,style:d,styles:h,unstyled:f,vars:x,onError:j,src:g,radius:v,fit:z,fallbackSrc:D,mod:y,...b}=n,[E,I]=(0,t.useState)(!g);(0,t.useEffect)(()=>I(!g),[g]);let k=(0,a.I)({name:"Image",classes:p,props:n,className:s,style:d,classNames:i,styles:h,unstyled:f,vars:x,varsResolver:u});return E&&D?(0,r.jsx)(l.a,{component:"img",ref:o,src:D,...k("root"),onError:j,mod:["fallback",y],...b}):(0,r.jsx)(l.a,{component:"img",ref:o,...k("root"),src:g,onError:e=>{j?.(e),I(!0)},mod:y,...b})});h.classes=p,h.displayName="@mantine/core/Image"},35395:(e,o,n)=>{"use strict";n.d(o,{p:()=>j});var r=n(31085);n(14041);var t=n(81296),i=n(7098),s=n(92408),c=n(29686),a=n(69564),l=n(34056),d=n(6754),p=n(25810),m=n(51629),u=n(98523),h={root:"m_6e45937b",loader:"m_e8eb006c",overlay:"m_df587f17"};let f={transitionProps:{transition:"fade",duration:0},overlayProps:{backgroundOpacity:.75},zIndex:(0,t.I)("overlay")},x=(0,i.V)((e,{zIndex:o})=>({root:{"--lo-z-index":o?.toString()}})),j=(0,d.P9)((e,o)=>{let n=(0,c.Y)("LoadingOverlay",f,e),{classNames:t,className:i,style:d,styles:j,unstyled:g,vars:v,transitionProps:z,loaderProps:D,overlayProps:y,visible:b,zIndex:E,...I}=n,k=(0,s.xd)(),_=(0,a.I)({name:"LoadingOverlay",classes:h,props:n,className:i,style:d,classNames:t,styles:j,unstyled:g,vars:v,varsResolver:x}),M={...f.overlayProps,...y};return(0,r.jsx)(u.e,{transition:"fade",...z,mounted:!!b,children:e=>(0,r.jsxs)(l.a,{..._("root",{style:e}),ref:o,...I,children:[(0,r.jsx)(p.a,{..._("loader"),unstyled:g,...D}),(0,r.jsx)(m.h,{...M,..._("overlay"),darkHidden:!0,unstyled:g,color:y?.color||k.white}),(0,r.jsx)(m.h,{...M,..._("overlay"),lightHidden:!0,unstyled:g,color:y?.color||k.colors.dark[5]})]})})});j.classes=h,j.displayName="@mantine/core/LoadingOverlay"},96172:(e,o,n)=>{"use strict";n.d(o,{r:()=>y});var r=n(31085);n(14041);var t=n(29686),i=n(69564),s=n(22448),c=n(34056),a=n(6754),l=n(93698),d=n(4749),p=n(41280),m=n(33450),u=n(1300),h=n(2306),f=n(92408),x=n(54212);function j({spacing:e,verticalSpacing:o,cols:n,selector:t}){let i=(0,f.xd)(),s=void 0===o?e:o,c=(0,p.J)({"--sg-spacing-x":(0,m.GY)((0,h.D)(e)),"--sg-spacing-y":(0,m.GY)((0,h.D)(s)),"--sg-cols":h.D(n)?.toString()}),a=(0,l.H)(i.breakpoints).reduce((o,r)=>(o[r]||(o[r]={}),"object"==typeof e&&void 0!==e[r]&&(o[r]["--sg-spacing-x"]=(0,m.GY)(e[r])),"object"==typeof s&&void 0!==s[r]&&(o[r]["--sg-spacing-y"]=(0,m.GY)(s[r])),"object"==typeof n&&void 0!==n[r]&&(o[r]["--sg-cols"]=n[r]),o),{}),d=(0,u.q)((0,l.H)(a),i.breakpoints).filter(e=>(0,l.H)(a[e.value]).length>0).map(e=>({query:`(min-width: ${i.breakpoints[e.value]})`,styles:a[e.value]}));return(0,r.jsx)(x.K,{styles:c,media:d,selector:t})}function g(e){return"object"==typeof e&&null!==e?(0,l.H)(e):[]}function v({spacing:e,verticalSpacing:o,cols:n,selector:t}){let i=void 0===o?e:o,s=(0,p.J)({"--sg-spacing-x":(0,m.GY)((0,h.D)(e)),"--sg-spacing-y":(0,m.GY)((0,h.D)(i)),"--sg-cols":h.D(n)?.toString()}),c=function({spacing:e,verticalSpacing:o,cols:n}){return Array.from(new Set([...g(e),...g(o),...g(n)])).sort((e,o)=>(0,d.px)(e)-(0,d.px)(o))}({spacing:e,verticalSpacing:o,cols:n}),a=c.reduce((o,r)=>(o[r]||(o[r]={}),"object"==typeof e&&void 0!==e[r]&&(o[r]["--sg-spacing-x"]=(0,m.GY)(e[r])),"object"==typeof i&&void 0!==i[r]&&(o[r]["--sg-spacing-y"]=(0,m.GY)(i[r])),"object"==typeof n&&void 0!==n[r]&&(o[r]["--sg-cols"]=n[r]),o),{}),l=c.map(e=>({query:`simple-grid (min-width: ${e})`,styles:a[e]}));return(0,r.jsx)(x.K,{styles:s,container:l,selector:t})}var z={container:"m_925c2d2c",root:"m_2415a157"};let D={cols:1,spacing:"md",type:"media"},y=(0,a.P9)((e,o)=>{let n=(0,t.Y)("SimpleGrid",D,e),{classNames:a,className:l,style:d,styles:p,unstyled:m,vars:u,cols:h,verticalSpacing:f,spacing:x,type:g,...y}=n,b=(0,i.I)({name:"SimpleGrid",classes:z,props:n,className:l,style:d,classNames:a,styles:p,unstyled:m,vars:u}),E=(0,s.C)();return"container"===g?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v,{...n,selector:`.${E}`}),(0,r.jsx)("div",{...b("container"),children:(0,r.jsx)(c.a,{ref:o,...b("root",{className:E}),...y})})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j,{...n,selector:`.${E}`}),(0,r.jsx)(c.a,{ref:o,...b("root",{className:E}),...y})]})});y.classes=z,y.displayName="@mantine/core/SimpleGrid"},2306:(e,o,n)=>{"use strict";function r(e){return"object"==typeof e&&null!==e?"base"in e?e.base:void 0:e}n.d(o,{D:()=>r})},29814:(e,o,n)=>{"use strict";n.d(o,{r:()=>t});var r=n(4749);function t(e,o){return e in o?(0,r.px)(o[e]):(0,r.px)(e)}},1300:(e,o,n)=>{"use strict";n.d(o,{q:()=>t});var r=n(29814);function t(e,o){let n=e.map(e=>({value:e,px:(0,r.r)(e,o)}));return n.sort((e,o)=>e.px-o.px),n}},92051:(e,o,n)=>{"use strict";n.d(o,{j:()=>t});var r=n(14041);function t(e=!1,o){let{onOpen:n,onClose:i}=o||{},[s,c]=(0,r.useState)(e),a=(0,r.useCallback)(()=>{c(e=>e||(n?.(),!0))},[n]),l=(0,r.useCallback)(()=>{c(e=>e?(i?.(),!1):e)},[i]),d=(0,r.useCallback)(()=>{s?l():a()},[l,a,s]);return[s,{open:a,close:l,toggle:d}]}}},e=>{var o=o=>e(e.s=o);e.O(0,[67456,14715,39699,68831,90636,46593,38792],()=>o(5189)),_N_E=e.O()}]);