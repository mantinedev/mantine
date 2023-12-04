(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4762],{91647:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/others/dropzone",function(){return o(7835)}])},7835:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return ex}});var t=o(24246),r=o(71670),c=o(3916),i=o(30289),a=o(27378),l=o(22971),s=o(71078),Text=o(26569),d=o(36487),p=o(86171),m=o(60060),u=o(13041),f=o(20410),h=o(96739),g=o(6231),x=o(5564),v=o(15666),j=o(56589),z=o(87921),y=o(26761),E=o(83453),D=o(92082),b=o(77188),w=o(72840),k=o(71656);let[I,M]=(0,k.R)("Dropzone component was not found in tree");var _=o(44258),S=o(513);function T(e){let n=n=>{let{children:o,...t}=(0,h.w)(`Dropzone${(0,_.j)(e)}`,{},n),r=M(),c=(0,S.k)(o)?o:a.createElement("span",null,o);return r[e]?(0,a.cloneElement)(c,t):null};return n.displayName=`@mantine/dropzone/${(0,_.j)(e)}`,n}let R=T("accept"),P=T("reject"),A=T("idle");var G={root:"m-d46a4834",inner:"m-b85f7144",fullScreen:"m-96f6e9ad",dropzone:"m-7946116d"};let N={loading:!1,multiple:!0,maxSize:1/0,autoFocus:!1,activateOnClick:!0,activateOnDrag:!0,dragEventsBubbling:!0,activateOnKeyboard:!0,useFsAccessApi:!0,variant:"light",rejectColor:"red"},O=(0,E.Z)((e,{radius:n,variant:o,acceptColor:t,rejectColor:r})=>{let c=e.variantColorResolver({color:t||e.primaryColor,theme:e,variant:o}),i=e.variantColorResolver({color:r||"red",theme:e,variant:o});return{root:{"--dropzone-radius":(0,D.H5)(n),"--dropzone-accept-color":c.color,"--dropzone-accept-bg":c.background,"--dropzone-reject-color":i.color,"--dropzone-reject-bg":i.background}}}),C=(0,f.d)((e,n)=>{let o=(0,h.w)("Dropzone",N,e),{classNames:t,className:r,style:c,styles:i,unstyled:l,vars:s,radius:d,disabled:p,loading:m,multiple:u,maxSize:f,accept:x,children:v,onDropAny:z,onDrop:E,onReject:D,openRef:k,name:M,maxFiles:_,autoFocus:S,activateOnClick:T,activateOnDrag:R,dragEventsBubbling:P,activateOnKeyboard:A,onDragEnter:C,onDragLeave:L,onDragOver:Y,onFileDialogCancel:F,onFileDialogOpen:U,preventDropOnDocument:B,useFsAccessApi:Z,getFilesFromEvent:X,validator:W,rejectColor:H,acceptColor:q,enablePointerEvents:K,loaderProps:$,...V}=o,J=(0,g.y)({name:"Dropzone",classes:G,props:o,className:r,style:c,classNames:t,styles:i,unstyled:l,vars:s,varsResolver:O}),{getRootProps:Q,getInputProps:ee,isDragAccept:en,isDragReject:eo,open:et}=(0,y.uI)({onDrop:z,onDropAccepted:E,onDropRejected:D,disabled:p||m,accept:Array.isArray(x)?x.reduce((e,n)=>({...e,[n]:[]}),{}):x,multiple:u,maxSize:f,maxFiles:_,autoFocus:S,noClick:!T,noDrag:!R,noDragEventsBubbling:!P,noKeyboard:!A,onDragEnter:C,onDragLeave:L,onDragOver:Y,onFileDialogCancel:F,onFileDialogOpen:U,preventDropOnDocument:B,useFsAccessApi:Z,validator:W,...X?{getFilesFromEvent:X}:null});(0,w.kR)(k,et);let er=!en&&!eo;return a.createElement(I,{value:{accept:en,reject:eo,idle:er}},a.createElement(j.x,{...Q({ref:n}),...J("root",{focusable:!0}),...V,mod:{accept:en,reject:eo,idle:er,loading:m,"activate-on-click":T}},a.createElement(b.f,{visible:m,overlayProps:{radius:d},unstyled:l,loaderProps:$}),a.createElement("input",{...ee(),name:M}),a.createElement("div",{...J("inner"),"data-enable-pointer-events":K||void 0},v)))});C.classes=G,C.displayName="@mantine/dropzone/Dropzone",C.Accept=R,C.Idle=A,C.Reject=P;let L={loading:!1,maxSize:1/0,activateOnClick:!1,activateOnDrag:!0,dragEventsBubbling:!0,activateOnKeyboard:!0,active:!0,zIndex:(0,u.w)("max"),withinPortal:!0},Y=(0,f.d)((e,n)=>{let o=(0,h.w)("DropzoneFullScreen",L,e),{classNames:t,className:r,style:c,styles:i,unstyled:l,vars:s,active:d,onDrop:p,onReject:m,zIndex:u,withinPortal:f,portalProps:y,...E}=o,D=(0,g.y)({name:"DropzoneFullScreen",classes:G,props:o,className:r,style:c,classNames:t,styles:i,unstyled:l,rootSelector:"fullScreen"}),{resolvedClassNames:b,resolvedStyles:w}=(0,x.h)({classNames:t,styles:i,props:o}),[k,I]=(0,a.useState)(0),[M,{open:_,close:S}]=(0,z.q)(!1),T=e=>{e.dataTransfer?.types.includes("Files")&&(I(e=>e+1),_())},R=()=>{I(e=>e-1)};return(0,a.useEffect)(()=>{0===k&&S()},[k]),(0,a.useEffect)(()=>{if(d)return document.addEventListener("dragenter",T,!1),document.addEventListener("dragleave",R,!1),()=>{document.removeEventListener("dragenter",T,!1),document.removeEventListener("dragleave",R,!1)}},[d]),a.createElement(v.q,{...y,withinPortal:f},a.createElement(j.x,{...D("fullScreen",{style:{opacity:M?1:0,pointerEvents:M?"all":"none",zIndex:u}}),ref:n},a.createElement(C,{...E,classNames:b,styles:w,unstyled:l,className:G.dropzone,onDrop:e=>{p?.(e),S(),I(0)},onReject:e=>{m?.(e),S(),I(0)}})))});Y.classes=G,Y.displayName="@mantine/dropzone/DropzoneFullScreen",C.FullScreen=Y;let F={png:"image/png",gif:"image/gif",jpeg:"image/jpeg",svg:"image/svg+xml",webp:"image/webp",avif:"image/avif",mp4:"video/mp4",zip:"application/zip",csv:"text/csv",pdf:"application/pdf",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",xls:"application/vnd.ms-excel",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",ppt:"application/vnd.ms-powerpoint",pptx:"application/vnd.openxmlformats-officedocument.presentationml.presentation",exe:"application/vnd.microsoft.portable-executable"},U=[F.png,F.gif,F.jpeg,F.svg,F.webp,F.avif],B=[F.pdf],Z=[F.doc,F.docx],X=[F.xls,F.xlsx],W=[F.ppt,F.pptx];function H(){return a.createElement(l.Z,{justify:"center",gap:"xl",mih:220,style:{pointerEvents:"none"}},a.createElement(C.Accept,null,a.createElement(d.Z,{style:{width:(0,s.h)(52),height:(0,s.h)(52),color:"var(--mantine-color-blue-6)"},stroke:1.5})),a.createElement(C.Reject,null,a.createElement(p.Z,{style:{width:(0,s.h)(52),height:(0,s.h)(52),color:"var(--mantine-color-red-6)"},stroke:1.5})),a.createElement(C.Idle,null,a.createElement(m.Z,{style:{width:(0,s.h)(52),height:(0,s.h)(52),color:"var(--mantine-color-dimmed)"},stroke:1.5})),a.createElement("div",null,a.createElement(Text.x,{size:"xl",inline:!0},"Drag images here or click to select files"),a.createElement(Text.x,{size:"sm",c:"dimmed",inline:!0,mt:7},"Attach as many files as you like, each file should not exceed 5mb")))}function q(e){return a.createElement(C,{onDrop:e=>console.log("accepted files",e),onReject:e=>console.log("rejected files",e),maxSize:3145728,accept:U,...e},a.createElement(H,null))}F.exe;let K=`
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
`,$={type:"code",component:q,code:K},V=`
import { Dropzone } from '@mantine/dropzone';

function Demo() {
  return (
    <Dropzone loading onDrop={() => {}}>
      {/* children */}
    </Dropzone>
  );
}
`,J={type:"code",component:function(){return a.createElement(q,{loading:!0})},code:V},Q=`
.disabled {
  background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
  border-color: light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-5));
  cursor: not-allowed;

  & * {
    color: light-dark(var(--mantine-color-gray-5), var(--mantine-color-dark-3));
  }
}
`,ee=`
import { Dropzone } from '@mantine/dropzone';
import classes from './Demo.module.css';

function Demo() {
  return <BaseDemo disabled className={classes.disabled} />;
}
`,en={type:"code",component:function(){return a.createElement(q,{disabled:!0,className:"m-f79e9eba"})},code:[{fileName:"Demo.tsx",code:ee,language:"tsx"},{fileName:"Demo.module.css",code:Q,language:"scss"}]};var eo=o(8671);let et=`
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
`,er={type:"code",component:function(){let e=(0,a.useRef)(null);return a.createElement(a.Fragment,null,a.createElement(q,{openRef:e}),a.createElement(l.Z,{justify:"center",mt:"md"},a.createElement(eo.z,{onClick:()=>e.current?.()},"Select files")))},code:et},ec=`
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
`,ei={type:"code",component:function(){let e=(0,a.useRef)(null);return a.createElement(C,{openRef:e,onDrop:()=>{},activateOnClick:!1},a.createElement(l.Z,{justify:"center"},a.createElement(eo.z,{onClick:()=>e.current?.(),style:{pointerEvents:"all"}},"Select files")))},code:ec},ea=`
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

`,el=`
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
`,es={type:"code",component:function(){return a.createElement(C,{onDrop:()=>{},accept:U,className:"m-ad28dbef"},a.createElement(Text.x,{ta:"center"},"Drop images here"))},code:[{fileName:"Demo.tsx",code:el,language:"tsx"},{fileName:"Demo.module.css",code:ea,language:"scss"}]};var Image=o(58818),ed=o(37454);let ep=`
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
`,em={type:"code",component:function(){let[e,n]=(0,a.useState)([]),o=e.map((e,n)=>{let o=URL.createObjectURL(e);return a.createElement(Image.E,{key:n,src:o,onLoad:()=>URL.revokeObjectURL(o)})});return a.createElement("div",null,a.createElement(C,{accept:U,onDrop:n},a.createElement(Text.x,{ta:"center"},"Drop images here")),a.createElement(ed.M,{cols:{base:1,sm:4},mt:o.length>0?"xl":0},o))},code:ep},eu=`
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
`,ef={type:"code",component:function(){let[e,n]=(0,a.useState)(!1);return a.createElement(a.Fragment,null,a.createElement(l.Z,{justify:"center"},a.createElement(eo.z,{color:e?"red":"blue",onClick:()=>n(e=>!e)},e?"Deactivate":"Activate"," full screen dropzone")),a.createElement(C.FullScreen,{active:e,accept:U,onDrop:e=>{console.log(e),n(!1)}},a.createElement(H,null)))},code:eu},eh=(0,c.A)(i.us.Dropzone);function eg(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{DataTable:o,Demo:c,InstallScript:i}=n;return o||ev("DataTable",!0),c||ev("Demo",!0),i||ev("InstallScript",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(i,{packages:"@mantine/dropzone"}),"\n",(0,t.jsx)(n.p,{children:"After installation import package styles at the root of your application:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import '@mantine/dropzone/styles.css';\n"})}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Dropzone"})," lets you capture one or more files from user.\nComponent is based on ",(0,t.jsx)(n.a,{href:"https://react-dropzone.js.org/",children:"react-dropzone"})," and support all of its core features:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Accepts/rejects files based on provided mime types"}),"\n",(0,t.jsx)(n.li,{children:"Limits individual file size"}),"\n",(0,t.jsx)(n.li,{children:"Renders given children and provides context based component to display elements based on current status"}),"\n"]}),"\n",(0,t.jsx)(c,{data:$}),"\n",(0,t.jsx)(n.h2,{id:"dropzoneaccept-dropzonereject-and-dropzoneidle",children:"Dropzone.Accept, Dropzone.Reject and Dropzone.Idle"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Dropzone.Accept"}),", ",(0,t.jsx)(n.code,{children:"Dropzone.Reject"})," and ",(0,t.jsx)(n.code,{children:"Dropzone.Idle"})," components are visible only when the user performs certain action:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Dropzone.Accept"})," is visible only when the user drags file that can be accepted over the dropzone"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Dropzone.Reject"})," is visible only when the user drags file that cannot be accepted over the dropzone"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Dropzone.Idle"})," is visible when the user does not drag anything over dropzone"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"loading-state",children:"Loading state"}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:"loading"})," prop to indicate loading state with ",(0,t.jsx)(n.a,{href:"/core/loading-overlay/",children:"LoadingOverlay"})," component.\nWhen ",(0,t.jsx)(n.code,{children:"loading"})," props is true user cannot drop or select new files (",(0,t.jsx)(n.code,{children:"Dropzone"})," becomes disabled):"]}),"\n",(0,t.jsx)(c,{data:J}),"\n",(0,t.jsx)(n.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,t.jsxs)(n.p,{children:["If you want to implement your own loading state you can disable ",(0,t.jsx)(n.code,{children:"Dropzone"})," without ",(0,t.jsx)(n.code,{children:"LoadingOverlay"}),".\nSame as with ",(0,t.jsx)(n.code,{children:"loading"}),", when ",(0,t.jsx)(n.code,{children:"Dropzone"})," is disabled user cannot drop or select new files:"]}),"\n",(0,t.jsx)(c,{data:en}),"\n",(0,t.jsx)(n.h2,{id:"open-file-browser-manually",children:"Open file browser manually"}),"\n",(0,t.jsxs)(n.p,{children:["To open files browser from outside of component use ",(0,t.jsx)(n.code,{children:"openRef"})," prop to get function that will trigger file browser:"]}),"\n",(0,t.jsx)(c,{data:er}),"\n",(0,t.jsx)(n.h2,{id:"enable-child-pointer-event",children:"Enable child pointer event"}),"\n",(0,t.jsxs)(n.p,{children:["By default, Dropzone disables pointer events on its children for dragging events to work. When ",(0,t.jsx)(n.code,{children:"activateOnClick={false}"}),",\nclicking on any children inside Dropzone will not do anything.\nHowever, you can set style ",(0,t.jsx)(n.code,{children:"pointerEvents: 'all'"})," to make children clickable.\nNote that you need to set these styles only on interactive elements, such as buttons or links."]}),"\n",(0,t.jsx)(c,{data:ei}),"\n",(0,t.jsx)(n.h2,{id:"mime-types",children:"Mime types"}),"\n",(0,t.jsxs)(n.p,{children:["To specify file types provide an object with the keys set to the ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types",children:"mime type"}),"\nand the values as an array of file extensions. Find more examples of accepting specific file types\nin the ",(0,t.jsx)(n.a,{href:"https://react-dropzone.js.org/#section-accepting-specific-file-types",children:"react-dropzone documentation"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Dropzone } from '@mantine/dropzone';\n\nfunction Demo() {\n  return (\n    <Dropzone\n      accept={{\n        'image/*': [], // All images\n        'text/html': ['.html', '.htm'],\n      }}\n    >\n      {/* children */}\n    </Dropzone>\n  );\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can also specify file types by providing an array of mime types to ",(0,t.jsx)(n.code,{children:"accept"})," prop:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Dropzone } from '@mantine/dropzone';\n\nfunction Demo() {\n  return (\n    <Dropzone\n      accept={[\n        'image/png',\n        'image/jpeg',\n        'image/sgv+xml',\n        'image/gif',\n      ]}\n    >\n      {/* children */}\n    </Dropzone>\n  );\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To save some research time you can use ",(0,t.jsx)(n.code,{children:"MIME_TYPES"})," variable exported from ",(0,t.jsx)(n.code,{children:"@mantine/dropzone"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Dropzone, MIME_TYPES } from '@mantine/dropzone';\n\nfunction Demo() {\n  return (\n    <Dropzone\n      accept={[\n        MIME_TYPES.png,\n        MIME_TYPES.jpeg,\n        MIME_TYPES.svg,\n        MIME_TYPES.gif,\n      ]}\n    >\n      {/* children */}\n    </Dropzone>\n  );\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"MIME_TYPES"})," includes following data:"]}),"\n",(0,t.jsx)(o,{head:["Key","Mime type"],data:Object.keys(F).map(e=>[e,F[e]])}),"\n",(0,t.jsx)(n.p,{children:"Additionally you can use grouped mime types:"}),"\n",(0,t.jsx)(o,{head:["Variable","Mime types"],data:[["IMAGE_MIME_TYPE",U.join(", ")],["PDF_MIME_TYPE",B.join(", ")],["MS_WORD_MIME_TYPE",Z.join(", ")],["MS_EXCEL_MIME_TYPE",X.join(", ")],["MS_POWERPOINT_MIME_TYPE",W.join(", ")]]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { IMAGE_MIME_TYPE, Dropzone } from '@mantine/dropzone';\n\nfunction Demo() {\n  return (\n    <Dropzone accept={IMAGE_MIME_TYPE}>{/* children */}</Dropzone>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"styles-api",children:"Styles API"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Dropzone"})," root element has the following data attributes to change styles based on current status:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"data-loading"})," – when ",(0,t.jsx)(n.code,{children:"loading"})," prop is ",(0,t.jsx)(n.code,{children:"true"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"data-accept"})," – when user drags files that can be accepted over the dropzone"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"data-reject"})," – when user drags files that cannot be accepted over the dropzone"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"data-idle"})," – default state – user does not drag any files over dropzone"]}),"\n"]}),"\n",(0,t.jsx)(c,{data:es}),"\n",(0,t.jsx)(n.h2,{id:"images-previews",children:"Images previews"}),"\n",(0,t.jsx)(c,{data:em}),"\n",(0,t.jsx)(n.h2,{id:"get-ref",children:"Get ref"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useRef, useEffect } from 'react';\nimport { Dropzone } from '@mantine/dropzone';\n\nfunction Demo() {\n  const dropzoneRef = useRef<HTMLDivElement>(null);\n\n  useEffect(() => {\n    dropzoneRef.current.focus();\n  }, []);\n\n  return <Dropzone ref={dropzoneRef}>{/* children */}</Dropzone>;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"dropzonefullscreen-component",children:"Dropzone.FullScreen component"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Dropzone.FullScreen"})," lets you capture files dropped to browser window instead of specific area.\nIt supports the same props as ",(0,t.jsx)(n.code,{children:"Dropzone"})," component."]}),"\n",(0,t.jsx)(n.p,{children:"To preview component click button and drop images to browser window:"}),"\n",(0,t.jsx)(c,{data:ef})]})}function ex(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(eh,{...e,children:(0,t.jsx)(eg,{...e})})}function ev(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},58818:function(e,n,o){"use strict";o.d(n,{E:function(){return Image}});var t=o(27378),r=o(92082),c=o(83453),i=o(96739),a=o(6231),l=o(56589),s=o(50332),d={root:"m-9e117634"};let p={},m=(0,c.Z)((e,{radius:n,fit:o})=>({root:{"--image-radius":void 0===n?void 0:(0,r.H5)(n),"--image-object-fit":o}})),Image=(0,s.b)((e,n)=>{let o=(0,i.w)("Image",p,e),{classNames:r,className:c,style:s,styles:u,unstyled:f,vars:h,onError:g,src:x,radius:v,fit:j,fallbackSrc:z,...y}=o,[E,D]=(0,t.useState)(!x);(0,t.useEffect)(()=>D(!x),[x]);let b=(0,a.y)({name:"Image",classes:d,props:o,className:c,style:s,classNames:r,styles:u,unstyled:f,vars:h,varsResolver:m});return E&&z?t.createElement(l.x,{component:"img",src:z,...b("root"),onError:g,mod:"fallback",...y}):t.createElement(l.x,{component:"img",ref:n,...b("root"),src:x,onError:e=>{g?.(e),D(!0)},...y})});Image.classes=d,Image.displayName="@mantine/core/Image"},77188:function(e,n,o){"use strict";o.d(n,{f:function(){return x}});var t=o(27378),r=o(13041),c=o(83453),i=o(2256),a=o(96739),l=o(6231),s=o(56589),d=o(20410),p=o(88101),m=o(42029),u=o(7118),f={root:"m-6e45937b",loader:"m-e8eb006c",overlay:"m-df587f17"};let h={transitionProps:{transition:"fade",duration:0},overlayProps:{backgroundOpacity:.75},zIndex:(0,r.w)("overlay")},g=(0,c.Z)((e,{zIndex:n})=>({root:{"--lo-z-index":n?.toString()}})),x=(0,d.d)((e,n)=>{let o=(0,a.w)("LoadingOverlay",h,e),{classNames:r,className:c,style:d,styles:x,unstyled:v,vars:j,transitionProps:z,loaderProps:y,overlayProps:E,visible:D,zIndex:b,...w}=o,k=(0,i.rZ)(),I=(0,l.y)({name:"LoadingOverlay",classes:f,props:o,className:c,style:d,classNames:r,styles:x,unstyled:v,vars:j,varsResolver:g}),M={...h.overlayProps,...E};return t.createElement(p.u,{transition:"fade",...z,mounted:!!D},e=>t.createElement(s.x,{...I("root",{style:e}),ref:n,...w},t.createElement(m.a,{...I("loader"),unstyled:v,...y}),t.createElement(u.a,{...M,...I("overlay"),"data-light":!0,unstyled:v,color:E?.color||k.white}),t.createElement(u.a,{...M,...I("overlay"),"data-dark":!0,unstyled:v,color:E?.color||k.colors.dark[5]})))});x.classes=f,x.displayName="@mantine/core/LoadingOverlay"},37454:function(e,n,o){"use strict";o.d(n,{M:function(){return j}});var t=o(27378),r=o(96739),c=o(6231),i=o(40593),a=o(56589),l=o(20410),s=o(53007),d=o(86689),p=o(92082),m=o(31582),u=o(75001),f=o(2256),h=o(9889);function g({spacing:e,verticalSpacing:n,cols:o,selector:r}){let c=(0,f.rZ)(),i=void 0===n?e:n,a=(0,d.L)({"--sg-spacing-x":(0,p.bG)((0,u.v)(e)),"--sg-spacing-y":(0,p.bG)((0,u.v)(i)),"--sg-cols":u.v(o)?.toString()}),l=(0,s.X)(c.breakpoints).reduce((n,t)=>(n[t]||(n[t]={}),"object"==typeof e&&void 0!==e[t]&&(n[t]["--sg-spacing-x"]=(0,p.bG)(e[t])),"object"==typeof i&&void 0!==i[t]&&(n[t]["--sg-spacing-y"]=(0,p.bG)(i[t])),"object"==typeof o&&void 0!==o[t]&&(n[t]["--sg-cols"]=o[t]),n),{}),g=(0,m.I)((0,s.X)(l),c).filter(e=>(0,s.X)(l[e.value]).length>0),x=g.map(e=>({query:`(min-width: ${c.breakpoints[e.value]})`,styles:l[e.value]}));return t.createElement(h.f,{styles:a,media:x,selector:r})}var x={root:"m-2415a157"};let v={cols:1,spacing:"md"},j=(0,l.d)((e,n)=>{let o=(0,r.w)("SimpleGrid",v,e),{classNames:l,className:s,style:d,styles:p,unstyled:m,vars:u,cols:f,verticalSpacing:h,spacing:j,...z}=o,y=(0,c.y)({name:"SimpleGrid",classes:x,props:o,className:s,style:d,classNames:l,styles:p,unstyled:m,vars:u}),E=(0,i.m)();return t.createElement(t.Fragment,null,t.createElement(g,{...o,selector:`.${E}`}),t.createElement(a.x,{ref:n,...y("root",{className:E}),...z}))});j.classes=x,j.displayName="@mantine/core/SimpleGrid"},75001:function(e,n,o){"use strict";function t(e){return"object"==typeof e&&null!==e?"base"in e?e.base:void 0:e}o.d(n,{v:function(){return t}})},10874:function(e,n,o){"use strict";o.d(n,{o:function(){return r}});var t=o(27589);function r(e,n){return e in n.breakpoints?(0,t.px)(n.breakpoints[e]):(0,t.px)(e)}},31582:function(e,n,o){"use strict";o.d(n,{I:function(){return r}});var t=o(10874);function r(e,n){let o=e.map(e=>({value:e,px:(0,t.o)(e,n)}));return o.sort((e,n)=>e.px-n.px),o}},87921:function(e,n,o){"use strict";o.d(n,{q:function(){return r}});var t=o(27378);function r(e=!1,n){let{onOpen:o,onClose:r}=n||{},[c,i]=(0,t.useState)(e),a=(0,t.useCallback)(()=>{i(e=>e||(o?.(),!0))},[o]),l=(0,t.useCallback)(()=>{i(e=>e?(r?.(),!1):e)},[r]),s=(0,t.useCallback)(()=>{c?l():a()},[l,a,c]);return[c,{open:a,close:l,toggle:s}]}}},function(e){e.O(0,[370,2433,5819,2775,9774,2888,179],function(){return e(e.s=91647)}),_N_E=e.O()}]);