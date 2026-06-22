(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,a)=>{let r={};for(var n in e)t(r,n,{get:e[n],enumerable:!0});return a||t(r,Symbol.toStringTag,{value:"Module"}),r}])},541772,e=>{"use strict";var t=e.i(191788);e.s(["useDisclosure",0,function(e=!1,a={}){let[r,n]=(0,t.useState)(e),i=(0,t.useCallback)(()=>{n(e=>e||(a.onOpen?.(),!0))},[a.onOpen]),o=(0,t.useCallback)(()=>{n(e=>e?(a.onClose?.(),!1):e)},[a.onClose]);return[r,{open:i,close:o,toggle:(0,t.useCallback)(()=>{r?o():i()},[o,i,r]),set:n}]}])},141806,e=>{"use strict";var t=e.i(433512),a=e.i(481178),r=e.i(44091),n=e.i(391466),i=e.i(956449),o=e.i(232471),s={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"},l=e.i(275519),c=e.i(191788),d=e.i(391398);let u=(0,c.createContext)({withinGroup:!1}),m=(0,a.createVarsResolver)((e,{spacing:a})=>({group:{"--ag-spacing":(0,t.getSpacing)(a)}})),p=(0,l.factory)(e=>{let t=(0,r.useProps)("AvatarGroup",null,e),{classNames:a,className:i,style:l,styles:c,unstyled:p,vars:h,spacing:v,attributes:g,...x}=t;return(0,d.jsx)(u,{value:{withinGroup:!0},children:(0,d.jsx)(o.Box,{...(0,n.useStyles)({name:"AvatarGroup",classes:s,props:t,className:i,style:l,classNames:a,styles:c,unstyled:p,attributes:g,vars:h,varsResolver:m,rootSelector:"group"})("group"),...x})})});function h(e){return(0,d.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}p.classes=s,p.varsResolver=m,p.displayName="@mantine/core/AvatarGroup";let v=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],g=(0,a.createVarsResolver)((e,{size:a,radius:r,variant:n,gradient:i,color:o,autoContrast:s,name:l,allowedInitialsColors:c})=>{let d="initials"===o&&"string"==typeof l?function(e,t=v){return t[Math.abs(function(e){let t=0;for(let a=0;a<e.length;a+=1)t=(t<<5)-t+e.charCodeAt(a)|0;return t}(e))%t.length]}(l,c):o,u=e.variantColorResolver({color:d||"gray",theme:e,gradient:i,variant:n||"light",autoContrast:s});return{root:{"--avatar-size":(0,t.getSize)(a,"avatar-size"),"--avatar-radius":void 0===r?void 0:(0,t.getRadius)(r),"--avatar-bg":d||n?u.background:void 0,"--avatar-color":d||n?u.color:void 0,"--avatar-bd":d||n?u.border:void 0}}}),x=(0,i.polymorphicFactory)(e=>{let t=(0,r.useProps)("Avatar",null,e),{classNames:a,className:i,style:l,styles:m,unstyled:p,vars:v,src:x,alt:b,radius:f,color:j,gradient:w,imageProps:y,children:I,autoContrast:A,mod:C,name:z,allowedInitialsColors:V,attributes:_,...S}=t,k=(0,c.use)(u),[G,D]=(0,c.useState)(!x),B=(0,n.useStyles)({name:"Avatar",props:t,classes:s,className:i,style:l,classNames:a,styles:m,unstyled:p,attributes:_,vars:v,varsResolver:g});return(0,c.useEffect)(()=>D(!x),[x]),(0,d.jsx)(o.Box,{...B("root"),mod:[{"within-group":k.withinGroup},C],...S,children:G||!x?(0,d.jsx)("span",{...B("placeholder"),title:b,children:I||"string"==typeof z&&function(e,t=2){let a=e.split(" ");return 1===a.length?e.slice(0,t).toUpperCase():a.map(e=>e[0]).slice(0,t).join("").toUpperCase()}(z)||(0,d.jsx)(h,{})}):(0,d.jsx)("img",{...y,...B("image"),src:x,alt:b,onError:e=>{D(!0),y?.onError?.(e)}})})});x.classes=s,x.varsResolver=g,x.displayName="@mantine/core/Avatar",x.Group=p,e.s(["Avatar",0,x],141806)},393353,e=>{"use strict";var t=e.i(779177),a=e.i(433512),r=e.i(481178),n=e.i(317477),i=e.i(700145),o=e.i(853487),s=e.i(44091),l=e.i(391466),c=e.i(275519),d=e.i(232471),u={root:"m_e5262200",indicator:"m_760d1fb1",processing:"m_885901b1"},m=e.i(391398);let p={position:"top-end",offset:0,showZero:!0},h=(0,r.createVarsResolver)((e,{color:r,position:s,offset:l,size:c,radius:d,zIndex:u,autoContrast:m})=>({root:{"--indicator-color":r?(0,n.getThemeColor)(r,e):void 0,"--indicator-text-color":(0,o.getAutoContrastValue)(m,e)?(0,i.getContrastColor)({color:r,theme:e,autoContrast:m}):void 0,"--indicator-size":(0,t.rem)(c),"--indicator-radius":void 0===d?void 0:(0,a.getRadius)(d),"--indicator-z-index":u?.toString(),...function(e="top-end",a=0){let r={"--indicator-top":void 0,"--indicator-bottom":void 0,"--indicator-left":void 0,"--indicator-right":void 0,"--indicator-translate-x":void 0,"--indicator-translate-y":void 0},n="number"==typeof a?a:a.x,i="number"==typeof a?a:a.y,o=(0,t.rem)(n),s=(0,t.rem)(i),[l,c]=e.split("-");return"top"===l&&(r["--indicator-top"]=s,r["--indicator-translate-y"]="-50%"),"middle"===l&&(r["--indicator-top"]="50%",r["--indicator-translate-y"]="-50%"),"bottom"===l&&(r["--indicator-bottom"]=s,r["--indicator-translate-y"]="50%"),"start"===c&&(r["--indicator-left"]=o,r["--indicator-translate-x"]="-50%"),"center"===c&&(r["--indicator-left"]="50%",r["--indicator-translate-x"]="-50%"),"end"===c&&(r["--indicator-right"]=o,r["--indicator-translate-x"]="50%"),r}(s,l)}})),v=(0,c.factory)(e=>{let t=(0,s.useProps)("Indicator",p,e),{classNames:a,className:r,style:n,styles:i,unstyled:o,vars:c,children:v,position:g,offset:x,inline:b,label:f,radius:j,color:w,withBorder:y,disabled:I,processing:A,zIndex:C,autoContrast:z,maxValue:V,showZero:_,mod:S,attributes:k,...G}=t,D=(0,l.useStyles)({name:"Indicator",classes:u,props:t,className:r,style:n,classNames:a,styles:i,unstyled:o,attributes:k,vars:c,varsResolver:h}),B=!_&&(0===f||"0"===f),R=void 0!==V&&"number"==typeof f&&f>V?`${V}+`:f;return(0,m.jsxs)(d.Box,{...D("root"),mod:[{inline:b},S],...G,children:[!I&&!B&&(0,m.jsx)(d.Box,{mod:{"with-label":!!f,"with-border":y,processing:A},...D("indicator"),children:R}),v]})});v.classes=u,v.varsResolver=h,v.displayName="@mantine/core/Indicator",e.s(["Indicator",0,v],393353)},89990,e=>{"use strict";var t=e.i(391398),a=e.i(38856),r=e.i(648863),n=e.i(141806),i=e.i(393353);let o={type:"configurator",component:function(e){return(0,t.jsx)(i.Indicator,{...e,children:(0,t.jsx)(n.Avatar,{size:"lg",radius:"sm",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"})})},code:`
import { Indicator, Avatar } from '@mantine/core';

function Demo() {
  return (
    <Indicator{{props}}>
      <Avatar
        size="lg"
        radius="sm"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
      />
    </Indicator>
  );
}
`,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"position",type:"select",data:[{value:"top-start",label:"top-start"},{value:"top-center",label:"top-center"},{value:"top-end",label:"top-end"},{value:"middle-start",label:"middle-start"},{value:"middle-center",label:"middle-center"},{value:"middle-end",label:"middle-end"},{value:"bottom-start",label:"bottom-start"},{value:"bottom-center",label:"bottom-center"},{value:"bottom-end",label:"bottom-end"}],initialValue:"top-end",libraryValue:"top-end"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"size",type:"number",initialValue:10,libraryValue:10,step:1,min:6,max:30},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withBorder",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"processing",type:"boolean",initialValue:!1,libraryValue:!1}]},s={type:"code",component:function(){return(0,t.jsx)(i.Indicator,{inline:!0,label:"New",size:16,children:(0,t.jsx)(n.Avatar,{size:"lg",radius:"sm",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"})})},code:`
import { Avatar, Indicator } from '@mantine/core';

function Demo() {
  return (
    <Indicator inline label="New" size={16}>
      <Avatar
        size="lg"
        radius="sm"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
      />
    </Indicator>
  );
}
`},l={type:"code",component:function(){return(0,t.jsx)(i.Indicator,{inline:!0,size:16,offset:7,position:"bottom-end",color:"red",withBorder:!0,children:(0,t.jsx)(n.Avatar,{size:"lg",radius:"xl",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png"})})},code:`
import { Avatar, Indicator } from '@mantine/core';

function Demo() {
  return (
    <Indicator inline size={16} offset={7} position="bottom-end" color="red" withBorder>
      <Avatar
        size="lg"
        radius="xl"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png"
      />
    </Indicator>
  );
}
`},c={type:"code",component:function(){return(0,t.jsx)(i.Indicator,{inline:!0,processing:!0,color:"red",size:12,children:(0,t.jsx)(n.Avatar,{size:"lg",radius:"sm",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png"})})},code:`
import { Avatar, Indicator } from '@mantine/core';

function Demo() {
  return (
    <Indicator inline processing color="red" size={12}>
      <Avatar
        size="lg"
        radius="sm"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png"
      />
    </Indicator>
  );
}
`,centered:!0};var d=e.i(485108),u=e.i(671640),m=e.i(541772);let p={type:"code",component:function(){let[e,{toggle:a}]=(0,m.useDisclosure)();return(0,t.jsxs)(u.Stack,{align:"center",children:[(0,t.jsx)(i.Indicator,{inline:!0,disabled:!e,color:"red",size:12,children:(0,t.jsx)(n.Avatar,{size:"lg",radius:"sm",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png"})}),(0,t.jsx)(d.Button,{onClick:a,children:"Toggle indicator"})]})},code:`
import { useDisclosure } from '@mantine/hooks';
import { Avatar, Indicator, Button, Stack } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure();

  return (
    <Stack align="center">
      <Indicator inline disabled={!visible} color="red" size={12}>
        <Avatar
          size="lg"
          radius="sm"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png"
        />
      </Indicator>
      <Button onClick={toggle}>Toggle indicator</Button>
    </Stack>
  );
}
`,centered:!0};var h=e.i(725695);let v={type:"code",component:function(){return(0,t.jsxs)(h.Group,{children:[(0,t.jsx)(i.Indicator,{inline:!0,label:50,maxValue:99,children:(0,t.jsx)(n.Avatar,{size:"lg",radius:"xl",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"})}),(0,t.jsx)(i.Indicator,{inline:!0,label:100,maxValue:99,children:(0,t.jsx)(n.Avatar,{size:"lg",radius:"xl",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"})}),(0,t.jsx)(i.Indicator,{inline:!0,label:1e3,maxValue:999,children:(0,t.jsx)(n.Avatar,{size:"lg",radius:"xl",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png"})})]})},code:`
import { Avatar, Group, Indicator } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Indicator inline label={50} maxValue={99}>
        <Avatar
          size="lg"
          radius="xl"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
        />
      </Indicator>

      <Indicator inline label={100} maxValue={99}>
        <Avatar
          size="lg"
          radius="xl"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
        />
      </Indicator>

      <Indicator inline label={1000} maxValue={999}>
        <Avatar
          size="lg"
          radius="xl"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png"
        />
      </Indicator>
    </Group>
  );
}
`,centered:!0},g={type:"code",component:function(){return(0,t.jsxs)(h.Group,{children:[(0,t.jsx)(i.Indicator,{inline:!0,label:0,children:(0,t.jsx)(n.Avatar,{size:"lg",radius:"xl",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"})}),(0,t.jsx)(i.Indicator,{inline:!0,label:0,showZero:!1,children:(0,t.jsx)(n.Avatar,{size:"lg",radius:"xl",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"})})]})},code:`
import { Avatar, Group, Indicator } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Indicator inline label={0}>
        <Avatar
          size="lg"
          radius="xl"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
        />
      </Indicator>

      <Indicator inline label={0} showZero={false}>
        <Avatar
          size="lg"
          radius="xl"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
        />
      </Indicator>
    </Group>
  );
}
`,centered:!0},x={type:"code",component:function(){return(0,t.jsxs)(h.Group,{children:[(0,t.jsx)(i.Indicator,{inline:!0,label:"99",color:"lime.4",children:(0,t.jsx)(n.Avatar,{size:"lg",radius:"xl",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"})}),(0,t.jsx)(i.Indicator,{inline:!0,label:"99",color:"lime.4",autoContrast:!0,children:(0,t.jsx)(n.Avatar,{size:"lg",radius:"xl",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"})}),(0,t.jsx)(i.Indicator,{inline:!0,label:"99",color:"cyan.9",children:(0,t.jsx)(n.Avatar,{size:"lg",radius:"xl",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png"})}),(0,t.jsx)(i.Indicator,{inline:!0,label:"99",color:"cyan.9",autoContrast:!0,children:(0,t.jsx)(n.Avatar,{size:"lg",radius:"xl",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png"})})]})},code:`
import { Avatar, Group, Indicator } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Indicator inline label="99" color="lime.4">
        <Avatar
          size="lg"
          radius="xl"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
        />
      </Indicator>

      <Indicator inline label="99" color="lime.4" autoContrast>
        <Avatar
          size="lg"
          radius="xl"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
        />
      </Indicator>

      <Indicator inline label="99" color="cyan.9">
        <Avatar
          size="lg"
          radius="xl"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png"
        />
      </Indicator>

      <Indicator inline label="99" color="cyan.9" autoContrast>
        <Avatar
          size="lg"
          radius="xl"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png"
        />
      </Indicator>
    </Group>
  );
}
`,centered:!0};var b=(0,r.__exportAll)({autoContrast:()=>x,configurator:()=>o,disabled:()=>p,inline:()=>s,maxValue:()=>v,offset:()=>l,processing:()=>c,showZero:()=>g});e.i(603441);var f=e.i(62558);e.i(457450);var j=e.i(418026);let w=(0,f.Layout)(j.MDX_DATA.Indicator);function y(e){let r={code:"code",h2:"h2",p:"p",...(0,a.useMDXComponents)(),...e.components},{Demo:n}=r;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n,{data:b.configurator}),"\n",(0,t.jsx)(r.h2,{id:"inline",children:"Inline"}),"\n",(0,t.jsxs)(r.p,{children:["When the target element has a fixed width, set the ",(0,t.jsx)(r.code,{children:"inline"})," prop to add ",(0,t.jsx)(r.code,{children:"display: inline-block;"})," styles to\nthe Indicator container. Alternatively, you can set width and height with the ",(0,t.jsx)(r.code,{children:"style"})," prop if you still want the root\nelement to keep ",(0,t.jsx)(r.code,{children:"display: block"}),"."]}),"\n",(0,t.jsx)(n,{data:b.inline}),"\n",(0,t.jsx)(r.h2,{id:"offset",children:"Offset"}),"\n",(0,t.jsxs)(r.p,{children:["Set ",(0,t.jsx)(r.code,{children:"offset"})," to change the indicator position. It is useful when the Indicator component is\nused with children that have border-radius. You can provide a number for uniform offset or an\nobject with ",(0,t.jsx)(r.code,{children:"x"})," and ",(0,t.jsx)(r.code,{children:"y"})," properties for separate horizontal and vertical offsets:"]}),"\n",(0,t.jsx)(n,{data:b.offset}),"\n",(0,t.jsx)(r.h2,{id:"processing-animation",children:"Processing animation"}),"\n",(0,t.jsx)(n,{data:b.processing}),"\n",(0,t.jsx)(r.h2,{id:"disabled",children:"Disabled"}),"\n",(0,t.jsxs)(r.p,{children:["Set ",(0,t.jsx)(r.code,{children:"disabled"})," to hide the indicator:"]}),"\n",(0,t.jsx)(n,{data:b.disabled}),"\n",(0,t.jsx)(r.h2,{id:"max-value",children:"Max value"}),"\n",(0,t.jsxs)(r.p,{children:["Set ",(0,t.jsx)(r.code,{children:"maxValue"})," prop to display ",(0,t.jsx)(r.code,{children:"{maxValue}+"})," when the label exceeds the maximum value. This is useful for\nnotification counters that should not show exact large numbers:"]}),"\n",(0,t.jsx)(n,{data:b.maxValue}),"\n",(0,t.jsx)(r.h2,{id:"show-zero",children:"Show zero"}),"\n",(0,t.jsxs)(r.p,{children:["By default, the indicator is displayed when the label is ",(0,t.jsx)(r.code,{children:"0"}),". Set ",(0,t.jsx)(r.code,{children:"showZero={false}"})," to hide the indicator\nwhen the label is ",(0,t.jsx)(r.code,{children:"0"}),":"]}),"\n",(0,t.jsx)(n,{data:b.showZero}),"\n",(0,t.jsx)(r.h2,{id:"auto-contrast",children:"Auto contrast"}),"\n",(0,t.jsxs)(r.p,{children:["Set ",(0,t.jsx)(r.code,{children:"autoContrast"})," prop to automatically adjust text color based on the background color to ensure\nreadable contrast:"]}),"\n",(0,t.jsx)(n,{data:b.autoContrast})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(w,{...e,children:(0,t.jsx)(y,{...e})})}],89990)},1033,(e,t,a)=>{let r="/core/indicator";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(89990)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);