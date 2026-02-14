(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[22638],{4386:(e,o,n)=>{"use strict";n.d(o,{_:()=>u});var r=n(6029),t=n(55729),i=n(14163),c=n(33987),s=n(38919),l=n(15583),a=n(76320),d=n(82500),p={root:"m_9e117634"};let m=(0,c.V)((e,{radius:o,fit:n})=>({root:{"--image-radius":void 0===o?void 0:(0,i.nJ)(o),"--image-object-fit":n}})),u=(0,d.v)((e,o)=>{let n=(0,s.Y)("Image",null,e),{classNames:i,className:c,style:d,styles:u,unstyled:h,vars:f,onError:x,src:j,radius:g,fit:v,fallbackSrc:z,mod:D,attributes:y,...b}=n,[E,I]=(0,t.useState)(!j);(0,t.useEffect)(()=>I(!j),[j]);let _=(0,l.I)({name:"Image",classes:p,props:n,className:c,style:d,classNames:i,styles:u,unstyled:h,attributes:y,vars:f,varsResolver:m});return E&&z?(0,r.jsx)(a.a,{component:"img",ref:o,src:z,..._("root"),onError:x,mod:["fallback",D],...b}):(0,r.jsx)(a.a,{component:"img",ref:o,..._("root"),src:j,onError:e=>{x?.(e),I(!0)},mod:D,...b})});u.classes=p,u.displayName="@mantine/core/Image"},80125:(e,o,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/x/dropzone",function(){return n(97196)}])},97196:(e,o,n)=>{"use strict";n.r(o),n.d(o,{default:()=>ea});var r=n(6029),t=n(16285);let i={png:"image/png",gif:"image/gif",jpeg:"image/jpeg",svg:"image/svg+xml",webp:"image/webp",avif:"image/avif",heic:"image/heic",heif:"image/heif",mp4:"video/mp4",zip:"application/zip",rar:"application/x-rar","7z":"application/x-7z-compressed",csv:"text/csv",pdf:"application/pdf",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",xls:"application/vnd.ms-excel",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",ppt:"application/vnd.ms-powerpoint",pptx:"application/vnd.openxmlformats-officedocument.presentationml.presentation",exe:"application/vnd.microsoft.portable-executable"},c=[i.png,i.gif,i.jpeg,i.svg,i.webp,i.avif,i.heic,i.heif],s=[i.pdf],l=[i.doc,i.docx],a=[i.xls,i.xlsx],d=[i.ppt,i.pptx];i.exe;var p=n(48080),m=n(74011),u=n(39887),h=n(57414),f=n(45208),x=n(77045),j=n(33987),g=n(14163),v=n(8411),z=n(38919),D=n(15583),y=n(76320),b=n(97707),E=n(28136);let[I,_]=(0,n(95681).F)("Dropzone component was not found in tree");var k={root:"m_d46a4834",inner:"m_b85f7144",fullScreen:"m_96f6e9ad",dropzone:"m_7946116d"},M=n(55729),w=n(89341),T=n(10464);function P(e){let o=o=>{let{children:n,...t}=(0,z.Y)(`Dropzone${(0,T.Z)(e)}`,{},o),i=_(),c=(0,w.v)(n)?n:(0,r.jsx)("span",{children:n});return i[e]?(0,M.cloneElement)(c,t):null};return o.displayName=`@mantine/dropzone/${(0,T.Z)(e)}`,o}let S=P("accept"),R=P("reject"),A=P("idle"),Y={multiple:!0,maxSize:1/0,activateOnClick:!0,activateOnDrag:!0,dragEventsBubbling:!0,activateOnKeyboard:!0,useFsAccessApi:!0,variant:"light",rejectColor:"red"},G=(0,j.V)((e,{radius:o,variant:n,acceptColor:r,rejectColor:t})=>{let i=e.variantColorResolver({color:r||e.primaryColor,theme:e,variant:n}),c=e.variantColorResolver({color:t||"red",theme:e,variant:n});return{root:{"--dropzone-radius":(0,g.nJ)(o),"--dropzone-accept-color":i.color,"--dropzone-accept-bg":i.background,"--dropzone-reject-color":c.color,"--dropzone-reject-bg":c.background}}}),N=(0,v.P9)((e,o)=>{let n=(0,z.Y)("Dropzone",Y,e),{classNames:t,className:i,style:c,styles:s,unstyled:l,vars:a,radius:d,disabled:p,loading:m,multiple:u,maxSize:h,accept:f,children:j,onDropAny:g,onDrop:v,onReject:_,openRef:M,name:w,maxFiles:T,autoFocus:P,activateOnClick:S,activateOnDrag:R,dragEventsBubbling:A,activateOnKeyboard:N,onDragEnter:O,onDragLeave:L,onDragOver:C,onFileDialogCancel:F,onFileDialogOpen:U,preventDropOnDocument:B,useFsAccessApi:X,getFilesFromEvent:W,validator:H,rejectColor:V,acceptColor:$,enablePointerEvents:K,loaderProps:Z,inputProps:J,mod:q,attributes:Q,...ee}=n,eo=(0,D.I)({name:"Dropzone",classes:k,props:n,className:i,style:c,classNames:t,styles:s,unstyled:l,attributes:Q,vars:a,varsResolver:G}),{getRootProps:en,getInputProps:er,isDragAccept:et,isDragReject:ei,isDragActive:ec,open:es}=(0,x.VB)({onDrop:g,onDropAccepted:v,onDropRejected:_,disabled:p||m,accept:Array.isArray(f)?f.reduce((e,o)=>({...e,[o]:[]}),{}):f,multiple:u,maxSize:h,maxFiles:T,autoFocus:P,noClick:!S,noDrag:!R,noDragEventsBubbling:!A,noKeyboard:!N,onDragEnter:O,onDragLeave:L,onDragOver:C,onFileDialogCancel:F,onFileDialogOpen:U,preventDropOnDocument:B,useFsAccessApi:X,validator:H,...W?{getFilesFromEvent:W}:null});(0,E.bl)(M,es);let el=ec&&et,ea=ec&&ei,ed=!el&&!ea;return(0,r.jsx)(I,{value:{accept:el,reject:ea,idle:ed},children:(0,r.jsxs)(y.a,{...en(),...eo("root",{focusable:!0}),...ee,mod:[{accept:el,reject:ea,idle:ed,disabled:p,loading:m,"activate-on-click":S},q],children:[(0,r.jsx)(b.p,{visible:m,overlayProps:{radius:d},unstyled:l,loaderProps:Z}),(0,r.jsx)("input",{...er(J),name:w}),(0,r.jsx)("div",{...eo("inner"),ref:o,"data-enable-pointer-events":K||void 0,children:j})]})})});N.classes=k,N.displayName="@mantine/dropzone/Dropzone",N.Accept=S,N.Idle=A,N.Reject=R;var O=n(26237),L=n(38757),C=n(13144),F=n(66438);let U={maxSize:1/0,activateOnDrag:!0,dragEventsBubbling:!0,activateOnKeyboard:!0,active:!0,zIndex:(0,O.I)("max"),withinPortal:!0},B=(0,v.P9)((e,o)=>{let n=(0,z.Y)("DropzoneFullScreen",U,e),{classNames:t,className:i,style:c,styles:s,unstyled:l,vars:a,active:d,onDrop:p,onReject:m,zIndex:u,withinPortal:h,portalProps:f,attributes:x,...j}=n,g=(0,D.I)({name:"DropzoneFullScreen",classes:k,props:n,className:i,style:c,classNames:t,styles:s,unstyled:l,attributes:x,rootSelector:"fullScreen"}),{resolvedClassNames:v,resolvedStyles:b}=(0,L.Y)({classNames:t,styles:s,props:n}),[E,I]=(0,M.useState)(0),[_,{open:w,close:T}]=(0,F.j)(!1),P=e=>{e.dataTransfer?.types.includes("Files")&&(I(e=>e+1),w())},S=()=>{I(e=>e-1)};return(0,M.useEffect)(()=>{0===E&&T()},[E]),(0,M.useEffect)(()=>{if(d)return document.addEventListener("dragenter",P,!1),document.addEventListener("dragleave",S,!1),()=>{document.removeEventListener("dragenter",P,!1),document.removeEventListener("dragleave",S,!1)}},[d]),(0,r.jsx)(C.r,{...f,withinPortal:h,children:(0,r.jsx)(y.a,{ref:o,...g("fullScreen",{style:{opacity:+!!_,pointerEvents:_?"all":"none",zIndex:u}}),children:(0,r.jsx)(N,{activateOnClick:!1,...j,classNames:v,styles:b,unstyled:l,className:k.dropzone,onDrop:e=>{p?.(e),T(),I(0)},onReject:e=>{m?.(e),T(),I(0)}})})})});function X(){return(0,r.jsxs)(h.Y,{justify:"center",gap:"xl",mih:220,style:{pointerEvents:"none"},children:[(0,r.jsx)(N.Accept,{children:(0,r.jsx)(p.A,{size:52,color:"var(--mantine-color-blue-6)",stroke:1.5})}),(0,r.jsx)(N.Reject,{children:(0,r.jsx)(m.A,{size:52,color:"var(--mantine-color-red-6)",stroke:1.5})}),(0,r.jsx)(N.Idle,{children:(0,r.jsx)(u.A,{size:52,color:"var(--mantine-color-dimmed)",stroke:1.5})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(f.E,{size:"xl",inline:!0,children:"Drag images here or click to select files"}),(0,r.jsx)(f.E,{size:"sm",c:"dimmed",inline:!0,mt:7,children:"Attach as many files as you like, each file should not exceed 5mb"})]})]})}function W(e){return(0,r.jsx)(N,{onDrop:e=>console.log("accepted files",e),onReject:e=>console.log("rejected files",e),maxSize:5242880,accept:c,...e,children:(0,r.jsx)(X,{})})}B.classes=k,B.displayName="@mantine/dropzone/DropzoneFullScreen",N.FullScreen=B;let H={type:"code",component:W,code:`
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
`},V={type:"code",component:function(){return(0,r.jsx)(W,{loading:!0})},code:`
import { Dropzone } from '@mantine/dropzone';

function Demo() {
  return (
    <Dropzone loading onDrop={() => {}}>
      {/* children */}
    </Dropzone>
  );
}
`};var $={disabled:"m_f79e9eba"};let K={type:"code",component:function(){return(0,r.jsx)(W,{disabled:!0,className:$.disabled})},code:[{fileName:"Demo.tsx",code:`
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
`,language:"scss"}]};var Z=n(61087);let J={type:"code",component:function(){let e=(0,M.useRef)(null);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(W,{openRef:e}),(0,r.jsx)(h.Y,{justify:"center",mt:"md",children:(0,r.jsx)(Z.$,{onClick:()=>e.current?.(),children:"Select files"})})]})},code:`
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
`},q={type:"code",component:function(){let e=(0,M.useRef)(null);return(0,r.jsx)(N,{openRef:e,onDrop:()=>{},activateOnClick:!1,children:(0,r.jsx)(h.Y,{justify:"center",children:(0,r.jsx)(Z.$,{onClick:()=>e.current?.(),style:{pointerEvents:"all"},children:"Select files"})})})},code:`
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
`};var Q={root:"m_ad28dbef"};let ee={type:"code",component:function(){return(0,r.jsx)(N,{onDrop:()=>{},accept:c,className:Q.root,children:(0,r.jsx)(f.E,{ta:"center",children:"Drop images here"})})},code:[{fileName:"Demo.tsx",code:`
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

`,language:"scss"}]};var eo=n(4386),en=n(89238);let er={type:"code",component:function(){let[e,o]=(0,M.useState)([]),n=e.map((e,o)=>{let n=URL.createObjectURL(e);return(0,r.jsx)(eo._,{src:n,onLoad:()=>URL.revokeObjectURL(n)},o)});return(0,r.jsxs)("div",{children:[(0,r.jsx)(N,{accept:c,onDrop:o,children:(0,r.jsx)(f.E,{ta:"center",children:"Drop images here"})}),(0,r.jsx)(en.r,{cols:{base:1,sm:4},mt:n.length>0?"xl":0,children:n})]})},code:`
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
`},et={type:"code",component:function(){let[e,o]=(0,M.useState)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h.Y,{justify:"center",children:(0,r.jsxs)(Z.$,{color:e?"red":"blue",onClick:()=>o(e=>!e),children:[e?"Deactivate":"Activate"," full screen dropzone"]})}),(0,r.jsx)(N.FullScreen,{active:e,accept:c,onDrop:e=>{console.log(e),o(!1)},children:(0,r.jsx)(X,{})})]})},code:`
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
`};var ei=n(38547),ec=n(5262);let es=(0,ei.P)(ec.XZ.Dropzone);function el(e){let o={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components},{DataTable:n,Demo:p,InstallScript:m}=o;return n||ed("DataTable",!0),p||ed("Demo",!0),m||ed("InstallScript",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(m,{packages:"@mantine/dropzone"}),"\n",(0,r.jsx)(o.p,{children:"After installation import package styles at the root of your application:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-tsx",children:"import '@mantine/core/styles.css';\n// ‼️ import dropzone styles after core package styles\nimport '@mantine/dropzone/styles.css';\n"})}),"\n",(0,r.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"Dropzone"})," lets you capture one or more files from user.\nComponent is based on ",(0,r.jsx)(o.a,{href:"https://react-dropzone.js.org/",children:"react-dropzone"})," and support all of its core features:"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"Accepts/rejects files based on provided mime types"}),"\n",(0,r.jsx)(o.li,{children:"Limits individual file size"}),"\n",(0,r.jsx)(o.li,{children:"Renders given children and provides context based component to display elements based on current status"}),"\n"]}),"\n",(0,r.jsx)(p,{data:H}),"\n",(0,r.jsx)(o.h2,{id:"dropzoneaccept-dropzonereject-and-dropzoneidle",children:"Dropzone.Accept, Dropzone.Reject and Dropzone.Idle"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"Dropzone.Accept"}),", ",(0,r.jsx)(o.code,{children:"Dropzone.Reject"})," and ",(0,r.jsx)(o.code,{children:"Dropzone.Idle"})," components are visible only when the user performs certain action:"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"Dropzone.Accept"})," is visible only when the user drags file that can be accepted over the dropzone"]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"Dropzone.Reject"})," is visible only when the user drags file that cannot be accepted over the dropzone"]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"Dropzone.Idle"})," is visible when the user does not drag anything over dropzone"]}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"loading-state",children:"Loading state"}),"\n",(0,r.jsxs)(o.p,{children:["Set ",(0,r.jsx)(o.code,{children:"loading"})," prop to indicate loading state with ",(0,r.jsx)(o.a,{href:"/core/loading-overlay/",children:"LoadingOverlay"})," component.\nWhen ",(0,r.jsx)(o.code,{children:"loading"})," props is true user cannot drop or select new files (",(0,r.jsx)(o.code,{children:"Dropzone"})," becomes disabled):"]}),"\n",(0,r.jsx)(p,{data:V}),"\n",(0,r.jsx)(o.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,r.jsxs)(o.p,{children:["If you want to implement your own loading state you can disable ",(0,r.jsx)(o.code,{children:"Dropzone"})," without ",(0,r.jsx)(o.code,{children:"LoadingOverlay"}),".\nSame as with ",(0,r.jsx)(o.code,{children:"loading"}),", when ",(0,r.jsx)(o.code,{children:"Dropzone"})," is disabled user cannot drop or select new files:"]}),"\n",(0,r.jsx)(p,{data:K}),"\n",(0,r.jsx)(o.h2,{id:"open-file-browser-manually",children:"Open file browser manually"}),"\n",(0,r.jsxs)(o.p,{children:["To open files browser from outside of component use ",(0,r.jsx)(o.code,{children:"openRef"})," prop to get function that will trigger file browser:"]}),"\n",(0,r.jsx)(p,{data:J}),"\n",(0,r.jsx)(o.h2,{id:"enable-child-pointer-event",children:"Enable child pointer event"}),"\n",(0,r.jsxs)(o.p,{children:["By default, Dropzone disables pointer events on its children for dragging events to work. When ",(0,r.jsx)(o.code,{children:"activateOnClick={false}"}),",\nclicking on any children inside Dropzone will not do anything.\nHowever, you can set style ",(0,r.jsx)(o.code,{children:"pointerEvents: 'all'"})," to make children clickable.\nNote that you need to set these styles only on interactive elements, such as buttons or links."]}),"\n",(0,r.jsx)(p,{data:q}),"\n",(0,r.jsx)(o.h2,{id:"mime-types",children:"Mime types"}),"\n",(0,r.jsxs)(o.p,{children:["To specify file types provide an object with the keys set to the ",(0,r.jsx)(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types",children:"mime type"}),"\nand the values as an array of file extensions. Find more examples of accepting specific file types\nin the ",(0,r.jsx)(o.a,{href:"https://react-dropzone.js.org/#section-accepting-specific-file-types",children:"react-dropzone documentation"}),"."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-tsx",children:"import { Dropzone } from '@mantine/dropzone';\n\nfunction Demo() {\n  return (\n    <Dropzone\n      accept={{\n        'image/*': [], // All images\n        'text/html': ['.html', '.htm'],\n      }}\n      onDrop={() => {}}\n    >\n      {/* children */}\n    </Dropzone>\n  );\n}\n"})}),"\n",(0,r.jsxs)(o.p,{children:["You can also specify file types by providing an array of mime types to ",(0,r.jsx)(o.code,{children:"accept"})," prop:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-tsx",children:"import { Dropzone } from '@mantine/dropzone';\n\nfunction Demo() {\n  return (\n    <Dropzone\n      accept={[\n        'image/png',\n        'image/jpeg',\n        'image/svg+xml',\n        'image/gif',\n      ]}\n      onDrop={() => {}}\n    >\n      {/* children */}\n    </Dropzone>\n  );\n}\n"})}),"\n",(0,r.jsxs)(o.p,{children:["To save some research time you can use ",(0,r.jsx)(o.code,{children:"MIME_TYPES"})," variable exported from ",(0,r.jsx)(o.code,{children:"@mantine/dropzone"}),":"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-tsx",children:"import { Dropzone, MIME_TYPES } from '@mantine/dropzone';\n\nfunction Demo() {\n  return (\n    <Dropzone\n      accept={[\n        MIME_TYPES.png,\n        MIME_TYPES.jpeg,\n        MIME_TYPES.svg,\n        MIME_TYPES.gif,\n      ]}\n      onDrop={() => {}}\n    >\n      {/* children */}\n    </Dropzone>\n  );\n}\n"})}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"MIME_TYPES"})," includes following data:"]}),"\n",(0,r.jsx)(n,{head:["Key","Mime type"],data:Object.keys(i).map(e=>[e,i[e]])}),"\n",(0,r.jsx)(o.p,{children:"Additionally you can use grouped mime types:"}),"\n",(0,r.jsx)(n,{head:["Variable","Mime types"],data:[["IMAGE_MIME_TYPE",c.join(", ")],["PDF_MIME_TYPE",s.join(", ")],["MS_WORD_MIME_TYPE",l.join(", ")],["MS_EXCEL_MIME_TYPE",a.join(", ")],["MS_POWERPOINT_MIME_TYPE",d.join(", ")]]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-tsx",children:"import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';\n\nfunction Demo() {\n  return (\n    <Dropzone accept={IMAGE_MIME_TYPE} onDrop={() => {}}>\n      {/* children */}\n    </Dropzone>\n  );\n}\n"})}),"\n",(0,r.jsx)(o.h2,{id:"styles-api",children:"Styles API"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"Dropzone"})," root element has the following data attributes to change styles based on current status:"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"data-loading"})," – when ",(0,r.jsx)(o.code,{children:"loading"})," prop is ",(0,r.jsx)(o.code,{children:"true"})]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"data-accept"})," – when user drags files that can be accepted over the dropzone"]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"data-reject"})," – when user drags files that cannot be accepted over the dropzone"]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"data-idle"})," – default state – user does not drag any files over dropzone"]}),"\n"]}),"\n",(0,r.jsx)(p,{data:ee}),"\n",(0,r.jsx)(o.h2,{id:"images-previews",children:"Images previews"}),"\n",(0,r.jsx)(p,{data:er}),"\n",(0,r.jsx)(o.h2,{id:"get-ref",children:"Get ref"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-tsx",children:"import { useEffect, useRef } from 'react';\nimport { Dropzone } from '@mantine/dropzone';\n\nfunction Demo() {\n  const dropzoneRef = useRef<HTMLDivElement>(null);\n\n  useEffect(() => {\n    dropzoneRef.current?.focus();\n  }, []);\n\n  return (\n    <Dropzone ref={dropzoneRef} onDrop={() => {}}>\n      {/* children */}\n    </Dropzone>\n  );\n}\n"})}),"\n",(0,r.jsx)(o.h2,{id:"dropzonefullscreen-component",children:"Dropzone.FullScreen component"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"Dropzone.FullScreen"})," lets you capture files dropped to browser window instead of specific area.\nIt supports the same props as ",(0,r.jsx)(o.code,{children:"Dropzone"})," component."]}),"\n",(0,r.jsx)(o.p,{children:"To preview component click button and drop images to browser window:"}),"\n",(0,r.jsx)(p,{data:et})]})}function ea(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(es,{...e,children:(0,r.jsx)(el,{...e})})}function ed(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},97707:(e,o,n)=>{"use strict";n.d(o,{p:()=>j});var r=n(6029);n(55729);var t=n(26237),i=n(33987),c=n(49643),s=n(38919),l=n(15583),a=n(76320),d=n(8411),p=n(10109),m=n(70421),u=n(89184),h={root:"m_6e45937b",loader:"m_e8eb006c",overlay:"m_df587f17"};let f={transitionProps:{transition:"fade",duration:0},overlayProps:{backgroundOpacity:.75},zIndex:(0,t.I)("overlay")},x=(0,i.V)((e,{zIndex:o})=>({root:{"--lo-z-index":o?.toString()}})),j=(0,d.P9)((e,o)=>{let n=(0,s.Y)("LoadingOverlay",f,e),{classNames:t,className:i,style:d,styles:j,unstyled:g,vars:v,transitionProps:z,loaderProps:D,overlayProps:y,visible:b,zIndex:E,attributes:I,..._}=n,k=(0,c.xd)(),M=(0,l.I)({name:"LoadingOverlay",classes:h,props:n,className:i,style:d,classNames:t,styles:j,unstyled:g,attributes:I,vars:v,varsResolver:x}),w={...f.overlayProps,...y};return(0,r.jsx)(u.e,{transition:"fade",...z,mounted:!!b,children:e=>(0,r.jsxs)(a.a,{...M("root",{style:e}),ref:o,..._,children:[(0,r.jsx)(p.a,{...M("loader"),unstyled:g,...D}),(0,r.jsx)(m.h,{...w,...M("overlay"),darkHidden:!0,unstyled:g,color:y?.color||k.white}),(0,r.jsx)(m.h,{...w,...M("overlay"),lightHidden:!0,unstyled:g,color:y?.color||k.colors.dark[5]})]})})});j.classes=h,j.displayName="@mantine/core/LoadingOverlay"}},e=>{e.O(0,[5999,38547,90636,46593,38792],()=>e(e.s=80125)),_N_E=e.O()}]);