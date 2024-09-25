(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11988],{45813:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/x/dropzone",function(){return o(32513)}])},32513:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return el}});var r=o(52322),t=o(45392);let i={png:"image/png",gif:"image/gif",jpeg:"image/jpeg",svg:"image/svg+xml",webp:"image/webp",avif:"image/avif",heic:"image/heic",mp4:"video/mp4",zip:"application/zip",rar:"application/x-rar","7z":"application/x-7z-compressed",csv:"text/csv",pdf:"application/pdf",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",xls:"application/vnd.ms-excel",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",ppt:"application/vnd.ms-powerpoint",pptx:"application/vnd.openxmlformats-officedocument.presentationml.presentation",exe:"application/vnd.microsoft.portable-executable"},c=[i.png,i.gif,i.jpeg,i.svg,i.webp,i.avif,i.heic],s=[i.pdf],l=[i.doc,i.docx],a=[i.xls,i.xlsx],d=[i.ppt,i.pptx];i.exe;var p=o(80010),m=o(12980),u=o(40289),h=o(93010),f=o(58898),x=o(8582),j=o(4096),g=o(11200),v=o(91482),y=o(82027),z=o(38483),D=o(46690),b=o(28559),E=o(20992),w=o(70837);let[k,I]=(0,o(89106).R)("Dropzone component was not found in tree");var _=o(2784),M=o(98399),S=o(75751);function T(e){let n=n=>{let{children:o,...t}=(0,z.w)(`Dropzone${(0,S.j)(e)}`,{},n),i=I(),c=(0,M.k)(o)?o:(0,r.jsx)("span",{children:o});return i[e]?(0,_.cloneElement)(c,t):null};return n.displayName=`@mantine/dropzone/${(0,S.j)(e)}`,n}let R=T("accept"),P=T("reject"),A=T("idle");var G={root:"m_d46a4834",inner:"m_b85f7144",fullScreen:"m_96f6e9ad",dropzone:"m_7946116d"};let N={loading:!1,multiple:!0,maxSize:1/0,autoFocus:!1,activateOnClick:!0,activateOnDrag:!0,dragEventsBubbling:!0,activateOnKeyboard:!0,useFsAccessApi:!0,variant:"light",rejectColor:"red"},O=(0,g.Z)((e,{radius:n,variant:o,acceptColor:r,rejectColor:t})=>{let i=e.variantColorResolver({color:r||e.primaryColor,theme:e,variant:o}),c=e.variantColorResolver({color:t||"red",theme:e,variant:o});return{root:{"--dropzone-radius":(0,v.H5)(n),"--dropzone-accept-color":i.color,"--dropzone-accept-bg":i.background,"--dropzone-reject-color":c.color,"--dropzone-reject-bg":c.background}}}),L=(0,y.d5)((e,n)=>{let o=(0,z.w)("Dropzone",N,e),{classNames:t,className:i,style:c,styles:s,unstyled:l,vars:a,radius:d,disabled:p,loading:m,multiple:u,maxSize:h,accept:f,children:x,onDropAny:g,onDrop:v,onReject:y,openRef:I,name:_,maxFiles:M,autoFocus:S,activateOnClick:T,activateOnDrag:R,dragEventsBubbling:P,activateOnKeyboard:A,onDragEnter:L,onDragLeave:C,onDragOver:F,onFileDialogCancel:Y,onFileDialogOpen:U,preventDropOnDocument:B,useFsAccessApi:Z,getFilesFromEvent:X,validator:H,rejectColor:W,acceptColor:$,enablePointerEvents:q,loaderProps:K,inputProps:V,mod:J,...Q}=o,ee=(0,D.y)({name:"Dropzone",classes:G,props:o,className:i,style:c,classNames:t,styles:s,unstyled:l,vars:a,varsResolver:O}),{getRootProps:en,getInputProps:eo,isDragAccept:er,isDragReject:et,open:ei}=(0,j.uI)({onDrop:g,onDropAccepted:v,onDropRejected:y,disabled:p||m,accept:Array.isArray(f)?f.reduce((e,n)=>({...e,[n]:[]}),{}):f,multiple:u,maxSize:h,maxFiles:M,autoFocus:S,noClick:!T,noDrag:!R,noDragEventsBubbling:!P,noKeyboard:!A,onDragEnter:L,onDragLeave:C,onDragOver:F,onFileDialogCancel:Y,onFileDialogOpen:U,preventDropOnDocument:B,useFsAccessApi:Z,validator:H,...X?{getFilesFromEvent:X}:null});(0,w.kR)(I,ei);let ec=!er&&!et;return(0,r.jsx)(k,{value:{accept:er,reject:et,idle:ec},children:(0,r.jsxs)(b.x,{...en(),...ee("root",{focusable:!0}),...Q,mod:[{accept:er,reject:et,idle:ec,loading:m,"activate-on-click":T},J],children:[(0,r.jsx)(E.f,{visible:m,overlayProps:{radius:d},unstyled:l,loaderProps:K}),(0,r.jsx)("input",{...eo(V),name:_}),(0,r.jsx)("div",{...ee("inner"),ref:n,"data-enable-pointer-events":q||void 0,children:x})]})})});L.classes=G,L.displayName="@mantine/dropzone/Dropzone",L.Accept=R,L.Idle=A,L.Reject=P;var C=o(97263),F=o(51477),Y=o(71517),U=o(3900);let B={loading:!1,maxSize:1/0,activateOnClick:!1,activateOnDrag:!0,dragEventsBubbling:!0,activateOnKeyboard:!0,active:!0,zIndex:(0,C.w)("max"),withinPortal:!0},Z=(0,y.d5)((e,n)=>{let o=(0,z.w)("DropzoneFullScreen",B,e),{classNames:t,className:i,style:c,styles:s,unstyled:l,vars:a,active:d,onDrop:p,onReject:m,zIndex:u,withinPortal:h,portalProps:f,...x}=o,j=(0,D.y)({name:"DropzoneFullScreen",classes:G,props:o,className:i,style:c,classNames:t,styles:s,unstyled:l,rootSelector:"fullScreen"}),{resolvedClassNames:g,resolvedStyles:v}=(0,F.h)({classNames:t,styles:s,props:o}),[y,E]=(0,_.useState)(0),[w,{open:k,close:I}]=(0,U.q)(!1),M=e=>{e.dataTransfer?.types.includes("Files")&&(E(e=>e+1),k())},S=()=>{E(e=>e-1)};return(0,_.useEffect)(()=>{0===y&&I()},[y]),(0,_.useEffect)(()=>{if(d)return document.addEventListener("dragenter",M,!1),document.addEventListener("dragleave",S,!1),()=>{document.removeEventListener("dragenter",M,!1),document.removeEventListener("dragleave",S,!1)}},[d]),(0,r.jsx)(Y.q,{...f,withinPortal:h,children:(0,r.jsx)(b.x,{...j("fullScreen",{style:{opacity:w?1:0,pointerEvents:w?"all":"none",zIndex:u}}),ref:n,children:(0,r.jsx)(L,{...x,classNames:g,styles:v,unstyled:l,className:G.dropzone,onDrop:e=>{p?.(e),I(),E(0)},onReject:e=>{m?.(e),I(),E(0)}})})})});function X(){return(0,r.jsxs)(h.Z,{justify:"center",gap:"xl",mih:220,style:{pointerEvents:"none"},children:[(0,r.jsx)(L.Accept,{children:(0,r.jsx)(p.Z,{style:{width:(0,f.h)(52),height:(0,f.h)(52),color:"var(--mantine-color-blue-6)"},stroke:1.5})}),(0,r.jsx)(L.Reject,{children:(0,r.jsx)(m.Z,{style:{width:(0,f.h)(52),height:(0,f.h)(52),color:"var(--mantine-color-red-6)"},stroke:1.5})}),(0,r.jsx)(L.Idle,{children:(0,r.jsx)(u.Z,{style:{width:(0,f.h)(52),height:(0,f.h)(52),color:"var(--mantine-color-dimmed)"},stroke:1.5})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(x.x,{size:"xl",inline:!0,children:"Drag images here or click to select files"}),(0,r.jsx)(x.x,{size:"sm",c:"dimmed",inline:!0,mt:7,children:"Attach as many files as you like, each file should not exceed 5mb"})]})]})}function H(e){return(0,r.jsx)(L,{onDrop:e=>console.log("accepted files",e),onReject:e=>console.log("rejected files",e),maxSize:5242880,accept:c,...e,children:(0,r.jsx)(X,{})})}Z.classes=G,Z.displayName="@mantine/dropzone/DropzoneFullScreen",L.FullScreen=Z;let W={type:"code",component:H,code:`
import { Group, Text, rem } from '@mantine/core';
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
`},$={type:"code",component:function(){return(0,r.jsx)(H,{loading:!0})},code:`
import { Dropzone } from '@mantine/dropzone';

function Demo() {
  return (
    <Dropzone loading onDrop={() => {}}>
      {/* children */}
    </Dropzone>
  );
}
`},q={type:"code",component:function(){return(0,r.jsx)(H,{disabled:!0,className:"m_f79e9eba"})},code:[{fileName:"Demo.tsx",code:`
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
`,language:"scss"}]};var K=o(17115);let V={type:"code",component:function(){let e=(0,_.useRef)(null);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(H,{openRef:e}),(0,r.jsx)(h.Z,{justify:"center",mt:"md",children:(0,r.jsx)(K.z,{onClick:()=>e.current?.(),children:"Select files"})})]})},code:`
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
`},J={type:"code",component:function(){let e=(0,_.useRef)(null);return(0,r.jsx)(L,{openRef:e,onDrop:()=>{},activateOnClick:!1,children:(0,r.jsx)(h.Z,{justify:"center",children:(0,r.jsx)(K.z,{onClick:()=>e.current?.(),style:{pointerEvents:"all"},children:"Select files"})})})},code:`
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
`},Q={type:"code",component:function(){return(0,r.jsx)(L,{onDrop:()=>{},accept:c,className:"m_ad28dbef",children:(0,r.jsx)(x.x,{ta:"center",children:"Drop images here"})})},code:[{fileName:"Demo.tsx",code:`
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

`,language:"scss"}]};var ee=o(43076),en=o(26802);let eo={type:"code",component:function(){let[e,n]=(0,_.useState)([]),o=e.map((e,n)=>{let o=URL.createObjectURL(e);return(0,r.jsx)(ee.E,{src:o,onLoad:()=>URL.revokeObjectURL(o)},n)});return(0,r.jsxs)("div",{children:[(0,r.jsx)(L,{accept:c,onDrop:n,children:(0,r.jsx)(x.x,{ta:"center",children:"Drop images here"})}),(0,r.jsx)(en.M,{cols:{base:1,sm:4},mt:o.length>0?"xl":0,children:o})]})},code:`
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
`},er={type:"code",component:function(){let[e,n]=(0,_.useState)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h.Z,{justify:"center",children:(0,r.jsxs)(K.z,{color:e?"red":"blue",onClick:()=>n(e=>!e),children:[e?"Deactivate":"Activate"," full screen dropzone"]})}),(0,r.jsx)(L.FullScreen,{active:e,accept:c,onDrop:e=>{console.log(e),n(!1)},children:(0,r.jsx)(X,{})})]})},code:`
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
`};var et=o(25071),ei=o(15019);let ec=(0,et.A)(ei.us.Dropzone);function es(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components},{DataTable:o,Demo:p,InstallScript:m}=n;return o||ea("DataTable",!0),p||ea("Demo",!0),m||ea("InstallScript",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(m,{packages:"@mantine/dropzone"}),"\n",(0,r.jsx)(n.p,{children:"After installation import package styles at the root of your application:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import '@mantine/dropzone/styles.css';\n"})}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Dropzone"})," lets you capture one or more files from user.\nComponent is based on ",(0,r.jsx)(n.a,{href:"https://react-dropzone.js.org/",children:"react-dropzone"})," and support all of its core features:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Accepts/rejects files based on provided mime types"}),"\n",(0,r.jsx)(n.li,{children:"Limits individual file size"}),"\n",(0,r.jsx)(n.li,{children:"Renders given children and provides context based component to display elements based on current status"}),"\n"]}),"\n",(0,r.jsx)(p,{data:W}),"\n",(0,r.jsx)(n.h2,{id:"dropzoneaccept-dropzonereject-and-dropzoneidle",children:"Dropzone.Accept, Dropzone.Reject and Dropzone.Idle"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Dropzone.Accept"}),", ",(0,r.jsx)(n.code,{children:"Dropzone.Reject"})," and ",(0,r.jsx)(n.code,{children:"Dropzone.Idle"})," components are visible only when the user performs certain action:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Dropzone.Accept"})," is visible only when the user drags file that can be accepted over the dropzone"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Dropzone.Reject"})," is visible only when the user drags file that cannot be accepted over the dropzone"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Dropzone.Idle"})," is visible when the user does not drag anything over dropzone"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"loading-state",children:"Loading state"}),"\n",(0,r.jsxs)(n.p,{children:["Set ",(0,r.jsx)(n.code,{children:"loading"})," prop to indicate loading state with ",(0,r.jsx)(n.a,{href:"/core/loading-overlay/",children:"LoadingOverlay"})," component.\nWhen ",(0,r.jsx)(n.code,{children:"loading"})," props is true user cannot drop or select new files (",(0,r.jsx)(n.code,{children:"Dropzone"})," becomes disabled):"]}),"\n",(0,r.jsx)(p,{data:$}),"\n",(0,r.jsx)(n.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,r.jsxs)(n.p,{children:["If you want to implement your own loading state you can disable ",(0,r.jsx)(n.code,{children:"Dropzone"})," without ",(0,r.jsx)(n.code,{children:"LoadingOverlay"}),".\nSame as with ",(0,r.jsx)(n.code,{children:"loading"}),", when ",(0,r.jsx)(n.code,{children:"Dropzone"})," is disabled user cannot drop or select new files:"]}),"\n",(0,r.jsx)(p,{data:q}),"\n",(0,r.jsx)(n.h2,{id:"open-file-browser-manually",children:"Open file browser manually"}),"\n",(0,r.jsxs)(n.p,{children:["To open files browser from outside of component use ",(0,r.jsx)(n.code,{children:"openRef"})," prop to get function that will trigger file browser:"]}),"\n",(0,r.jsx)(p,{data:V}),"\n",(0,r.jsx)(n.h2,{id:"enable-child-pointer-event",children:"Enable child pointer event"}),"\n",(0,r.jsxs)(n.p,{children:["By default, Dropzone disables pointer events on its children for dragging events to work. When ",(0,r.jsx)(n.code,{children:"activateOnClick={false}"}),",\nclicking on any children inside Dropzone will not do anything.\nHowever, you can set style ",(0,r.jsx)(n.code,{children:"pointerEvents: 'all'"})," to make children clickable.\nNote that you need to set these styles only on interactive elements, such as buttons or links."]}),"\n",(0,r.jsx)(p,{data:J}),"\n",(0,r.jsx)(n.h2,{id:"mime-types",children:"Mime types"}),"\n",(0,r.jsxs)(n.p,{children:["To specify file types provide an object with the keys set to the ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types",children:"mime type"}),"\nand the values as an array of file extensions. Find more examples of accepting specific file types\nin the ",(0,r.jsx)(n.a,{href:"https://react-dropzone.js.org/#section-accepting-specific-file-types",children:"react-dropzone documentation"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Dropzone } from '@mantine/dropzone';\n\nfunction Demo() {\n  return (\n    <Dropzone\n      accept={{\n        'image/*': [], // All images\n        'text/html': ['.html', '.htm'],\n      }}\n      onDrop={() => {}}\n    >\n      {/* children */}\n    </Dropzone>\n  );\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can also specify file types by providing an array of mime types to ",(0,r.jsx)(n.code,{children:"accept"})," prop:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Dropzone } from '@mantine/dropzone';\n\nfunction Demo() {\n  return (\n    <Dropzone\n      accept={[\n        'image/png',\n        'image/jpeg',\n        'image/sgv+xml',\n        'image/gif',\n      ]}\n      onDrop={() => {}}\n    >\n      {/* children */}\n    </Dropzone>\n  );\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To save some research time you can use ",(0,r.jsx)(n.code,{children:"MIME_TYPES"})," variable exported from ",(0,r.jsx)(n.code,{children:"@mantine/dropzone"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Dropzone, MIME_TYPES } from '@mantine/dropzone';\n\nfunction Demo() {\n  return (\n    <Dropzone\n      accept={[\n        MIME_TYPES.png,\n        MIME_TYPES.jpeg,\n        MIME_TYPES.svg,\n        MIME_TYPES.gif,\n      ]}\n      onDrop={() => {}}\n    >\n      {/* children */}\n    </Dropzone>\n  );\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"MIME_TYPES"})," includes following data:"]}),"\n",(0,r.jsx)(o,{head:["Key","Mime type"],data:Object.keys(i).map(e=>[e,i[e]])}),"\n",(0,r.jsx)(n.p,{children:"Additionally you can use grouped mime types:"}),"\n",(0,r.jsx)(o,{head:["Variable","Mime types"],data:[["IMAGE_MIME_TYPE",c.join(", ")],["PDF_MIME_TYPE",s.join(", ")],["MS_WORD_MIME_TYPE",l.join(", ")],["MS_EXCEL_MIME_TYPE",a.join(", ")],["MS_POWERPOINT_MIME_TYPE",d.join(", ")]]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';\n\nfunction Demo() {\n  return (\n    <Dropzone accept={IMAGE_MIME_TYPE} onDrop={() => {}}>\n      {/* children */}\n    </Dropzone>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"styles-api",children:"Styles API"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Dropzone"})," root element has the following data attributes to change styles based on current status:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"data-loading"})," – when ",(0,r.jsx)(n.code,{children:"loading"})," prop is ",(0,r.jsx)(n.code,{children:"true"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"data-accept"})," – when user drags files that can be accepted over the dropzone"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"data-reject"})," – when user drags files that cannot be accepted over the dropzone"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"data-idle"})," – default state – user does not drag any files over dropzone"]}),"\n"]}),"\n",(0,r.jsx)(p,{data:Q}),"\n",(0,r.jsx)(n.h2,{id:"images-previews",children:"Images previews"}),"\n",(0,r.jsx)(p,{data:eo}),"\n",(0,r.jsx)(n.h2,{id:"get-ref",children:"Get ref"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useEffect, useRef } from 'react';\nimport { Dropzone } from '@mantine/dropzone';\n\nfunction Demo() {\n  const dropzoneRef = useRef<HTMLDivElement>(null);\n\n  useEffect(() => {\n    dropzoneRef.current?.focus();\n  }, []);\n\n  return (\n    <Dropzone ref={dropzoneRef} onDrop={() => {}}>\n      {/* children */}\n    </Dropzone>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"dropzonefullscreen-component",children:"Dropzone.FullScreen component"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Dropzone.FullScreen"})," lets you capture files dropped to browser window instead of specific area.\nIt supports the same props as ",(0,r.jsx)(n.code,{children:"Dropzone"})," component."]}),"\n",(0,r.jsx)(n.p,{children:"To preview component click button and drop images to browser window:"}),"\n",(0,r.jsx)(p,{data:er})]})}function el(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(ec,{...e,children:(0,r.jsx)(es,{...e})})}function ea(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},43076:function(e,n,o){"use strict";o.d(n,{E:function(){return h}});var r=o(52322),t=o(2784),i=o(91482),c=o(11200),s=o(38483),l=o(46690),a=o(28559),d=o(33502),p={root:"m_9e117634"};let m={},u=(0,c.Z)((e,{radius:n,fit:o})=>({root:{"--image-radius":void 0===n?void 0:(0,i.H5)(n),"--image-object-fit":o}})),h=(0,d.b)((e,n)=>{let o=(0,s.w)("Image",m,e),{classNames:i,className:c,style:d,styles:h,unstyled:f,vars:x,onError:j,src:g,radius:v,fit:y,fallbackSrc:z,mod:D,...b}=o,[E,w]=(0,t.useState)(!g);(0,t.useEffect)(()=>w(!g),[g]);let k=(0,l.y)({name:"Image",classes:p,props:o,className:c,style:d,classNames:i,styles:h,unstyled:f,vars:x,varsResolver:u});return E&&z?(0,r.jsx)(a.x,{component:"img",ref:n,src:z,...k("root"),onError:j,mod:["fallback",D],...b}):(0,r.jsx)(a.x,{component:"img",ref:n,...k("root"),src:g,onError:e=>{j?.(e),w(!0)},mod:D,...b})});h.classes=p,h.displayName="@mantine/core/Image"},20992:function(e,n,o){"use strict";o.d(n,{f:function(){return j}});var r=o(52322);o(2784);var t=o(97263),i=o(11200),c=o(68755),s=o(38483),l=o(46690),a=o(28559),d=o(82027),p=o(12491),m=o(87170),u=o(96321),h={root:"m_6e45937b",loader:"m_e8eb006c",overlay:"m_df587f17"};let f={transitionProps:{transition:"fade",duration:0},overlayProps:{backgroundOpacity:.75},zIndex:(0,t.w)("overlay")},x=(0,i.Z)((e,{zIndex:n})=>({root:{"--lo-z-index":n?.toString()}})),j=(0,d.d5)((e,n)=>{let o=(0,s.w)("LoadingOverlay",f,e),{classNames:t,className:i,style:d,styles:j,unstyled:g,vars:v,transitionProps:y,loaderProps:z,overlayProps:D,visible:b,zIndex:E,...w}=o,k=(0,c.rZ)(),I=(0,l.y)({name:"LoadingOverlay",classes:h,props:o,className:i,style:d,classNames:t,styles:j,unstyled:g,vars:v,varsResolver:x}),_={...f.overlayProps,...D};return(0,r.jsx)(u.u,{transition:"fade",...y,mounted:!!b,children:e=>(0,r.jsxs)(a.x,{...I("root",{style:e}),ref:n,...w,children:[(0,r.jsx)(p.a,{...I("loader"),unstyled:g,...z}),(0,r.jsx)(m.a,{..._,...I("overlay"),darkHidden:!0,unstyled:g,color:D?.color||k.white}),(0,r.jsx)(m.a,{..._,...I("overlay"),lightHidden:!0,unstyled:g,color:D?.color||k.colors.dark[5]})]})})});j.classes=h,j.displayName="@mantine/core/LoadingOverlay"},26802:function(e,n,o){"use strict";o.d(n,{M:function(){return D}});var r=o(52322);o(2784);var t=o(38483),i=o(46690),c=o(12063),s=o(28559),l=o(82027),a=o(98446),d=o(65744),p=o(40580),m=o(91482),u=o(54541),h=o(32100),f=o(68755),x=o(9437);function j({spacing:e,verticalSpacing:n,cols:o,selector:t}){let i=(0,f.rZ)(),c=void 0===n?e:n,s=(0,p.L)({"--sg-spacing-x":(0,m.bG)((0,h.v)(e)),"--sg-spacing-y":(0,m.bG)((0,h.v)(c)),"--sg-cols":h.v(o)?.toString()}),l=(0,a.X)(i.breakpoints).reduce((n,r)=>(n[r]||(n[r]={}),"object"==typeof e&&void 0!==e[r]&&(n[r]["--sg-spacing-x"]=(0,m.bG)(e[r])),"object"==typeof c&&void 0!==c[r]&&(n[r]["--sg-spacing-y"]=(0,m.bG)(c[r])),"object"==typeof o&&void 0!==o[r]&&(n[r]["--sg-cols"]=o[r]),n),{}),d=(0,u.I)((0,a.X)(l),i.breakpoints).filter(e=>(0,a.X)(l[e.value]).length>0).map(e=>({query:`(min-width: ${i.breakpoints[e.value]})`,styles:l[e.value]}));return(0,r.jsx)(x.f,{styles:s,media:d,selector:t})}function g(e){return"object"==typeof e&&null!==e?(0,a.X)(e):[]}function v({spacing:e,verticalSpacing:n,cols:o,selector:t}){let i=void 0===n?e:n,c=(0,p.L)({"--sg-spacing-x":(0,m.bG)((0,h.v)(e)),"--sg-spacing-y":(0,m.bG)((0,h.v)(i)),"--sg-cols":h.v(o)?.toString()}),s=function({spacing:e,verticalSpacing:n,cols:o}){return Array.from(new Set([...g(e),...g(n),...g(o)])).sort((e,n)=>(0,d.px)(e)-(0,d.px)(n))}({spacing:e,verticalSpacing:n,cols:o}),l=s.reduce((n,r)=>(n[r]||(n[r]={}),"object"==typeof e&&void 0!==e[r]&&(n[r]["--sg-spacing-x"]=(0,m.bG)(e[r])),"object"==typeof i&&void 0!==i[r]&&(n[r]["--sg-spacing-y"]=(0,m.bG)(i[r])),"object"==typeof o&&void 0!==o[r]&&(n[r]["--sg-cols"]=o[r]),n),{}),a=s.map(e=>({query:`simple-grid (min-width: ${e})`,styles:l[e]}));return(0,r.jsx)(x.f,{styles:c,container:a,selector:t})}var y={container:"m_925c2d2c",root:"m_2415a157"};let z={cols:1,spacing:"md",type:"media"},D=(0,l.d5)((e,n)=>{let o=(0,t.w)("SimpleGrid",z,e),{classNames:l,className:a,style:d,styles:p,unstyled:m,vars:u,cols:h,verticalSpacing:f,spacing:x,type:g,...D}=o,b=(0,i.y)({name:"SimpleGrid",classes:y,props:o,className:a,style:d,classNames:l,styles:p,unstyled:m,vars:u}),E=(0,c.m)();return"container"===g?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v,{...o,selector:`.${E}`}),(0,r.jsx)("div",{...b("container"),children:(0,r.jsx)(s.x,{ref:n,...b("root",{className:E}),...D})})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j,{...o,selector:`.${E}`}),(0,r.jsx)(s.x,{ref:n,...b("root",{className:E}),...D})]})});D.classes=y,D.displayName="@mantine/core/SimpleGrid"},32100:function(e,n,o){"use strict";function r(e){return"object"==typeof e&&null!==e?"base"in e?e.base:void 0:e}o.d(n,{v:function(){return r}})},99070:function(e,n,o){"use strict";o.d(n,{o:function(){return t}});var r=o(65744);function t(e,n){return e in n?(0,r.px)(n[e]):(0,r.px)(e)}},54541:function(e,n,o){"use strict";o.d(n,{I:function(){return t}});var r=o(99070);function t(e,n){let o=e.map(e=>({value:e,px:(0,r.o)(e,n)}));return o.sort((e,n)=>e.px-n.px),o}},3900:function(e,n,o){"use strict";o.d(n,{q:function(){return t}});var r=o(2784);function t(e=!1,n){let{onOpen:o,onClose:t}=n||{},[i,c]=(0,r.useState)(e),s=(0,r.useCallback)(()=>{c(e=>e||(o?.(),!0))},[o]),l=(0,r.useCallback)(()=>{c(e=>e?(t?.(),!1):e)},[t]),a=(0,r.useCallback)(()=>{i?l():s()},[l,s,i]);return[i,{open:s,close:l,toggle:a}]}}},function(e){e.O(0,[61177,40798,66748,11340,92888,49774,40179],function(){return e(e.s=45813)}),_N_E=e.O()}]);