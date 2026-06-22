(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,a=>{"use strict";var e=Object.defineProperty;a.s(["__exportAll",0,(a,t)=>{let r={};for(var n in a)e(r,n,{get:a[n],enumerable:!0});return t||e(r,Symbol.toStringTag,{value:"Module"}),r}])},141806,a=>{"use strict";var e=a.i(433512),t=a.i(481178),r=a.i(44091),n=a.i(391466),o=a.i(956449),i=a.i(232471),l={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"},s=a.i(275519),c=a.i(191788),d=a.i(391398);let p=(0,c.createContext)({withinGroup:!1}),u=(0,t.createVarsResolver)((a,{spacing:t})=>({group:{"--ag-spacing":(0,e.getSpacing)(t)}})),m=(0,s.factory)(a=>{let e=(0,r.useProps)("AvatarGroup",null,a),{classNames:t,className:o,style:s,styles:c,unstyled:m,vars:h,spacing:v,attributes:g,...A}=e;return(0,d.jsx)(p,{value:{withinGroup:!0},children:(0,d.jsx)(i.Box,{...(0,n.useStyles)({name:"AvatarGroup",classes:l,props:e,className:o,style:s,classNames:t,styles:c,unstyled:m,attributes:g,vars:h,varsResolver:u,rootSelector:"group"})("group"),...A})})});function h(a){return(0,d.jsx)("svg",{...a,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}m.classes=l,m.varsResolver=u,m.displayName="@mantine/core/AvatarGroup";let v=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],g=(0,t.createVarsResolver)((a,{size:t,radius:r,variant:n,gradient:o,color:i,autoContrast:l,name:s,allowedInitialsColors:c})=>{let d="initials"===i&&"string"==typeof s?function(a,e=v){return e[Math.abs(function(a){let e=0;for(let t=0;t<a.length;t+=1)e=(e<<5)-e+a.charCodeAt(t)|0;return e}(a))%e.length]}(s,c):i,p=a.variantColorResolver({color:d||"gray",theme:a,gradient:o,variant:n||"light",autoContrast:l});return{root:{"--avatar-size":(0,e.getSize)(t,"avatar-size"),"--avatar-radius":void 0===r?void 0:(0,e.getRadius)(r),"--avatar-bg":d||n?p.background:void 0,"--avatar-color":d||n?p.color:void 0,"--avatar-bd":d||n?p.border:void 0}}}),A=(0,o.polymorphicFactory)(a=>{let e=(0,r.useProps)("Avatar",null,a),{classNames:t,className:o,style:s,styles:u,unstyled:m,vars:v,src:A,alt:x,radius:f,color:j,gradient:y,imageProps:b,children:w,autoContrast:C,mod:L,name:_,allowedInitialsColors:T,attributes:D,...G}=e,V=(0,c.use)(p),[E,M]=(0,c.useState)(!A),S=(0,n.useStyles)({name:"Avatar",props:e,classes:l,className:o,style:s,classNames:t,styles:u,unstyled:m,attributes:D,vars:v,varsResolver:g});return(0,c.useEffect)(()=>M(!A),[A]),(0,d.jsx)(i.Box,{...S("root"),mod:[{"within-group":V.withinGroup},L],...G,children:E||!A?(0,d.jsx)("span",{...S("placeholder"),title:x,children:w||"string"==typeof _&&function(a,e=2){let t=a.split(" ");return 1===t.length?a.slice(0,e).toUpperCase():t.map(a=>a[0]).slice(0,e).join("").toUpperCase()}(_)||(0,d.jsx)(h,{})}):(0,d.jsx)("img",{...b,...S("image"),src:A,alt:x,onError:a=>{M(!0),b?.onError?.(a)}})})});A.classes=l,A.varsResolver=g,A.displayName="@mantine/core/Avatar",A.Group=m,a.s(["Avatar",0,A],141806)},577830,a=>{"use strict";a.s(["gradientControls",0,[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]])},153338,a=>{"use strict";a.s(["interactiveVariantsControl",0,{type:"select",prop:"variant",data:["default","filled","light","outline","subtle","transparent","white"],initialValue:"filled",libraryValue:"__none__"},"staticVariantsControl",0,{type:"select",prop:"variant",data:["filled","light","outline","transparent","white","default"],initialValue:"filled",libraryValue:"__none__"}])},471714,a=>{"use strict";var e=a.i(191788),t=a.i(171481);let r=new Map([["bold",e.createElement(e.Fragment,null,e.createElement("path",{d:"M243,96a20.33,20.33,0,0,0-17.74-14l-56.59-4.57L146.83,24.62a20.36,20.36,0,0,0-37.66,0L87.35,77.44,30.76,82A20.45,20.45,0,0,0,19.1,117.88l43.18,37.24-13.2,55.7A20.37,20.37,0,0,0,79.57,233L128,203.19,176.43,233a20.39,20.39,0,0,0,30.49-22.15l-13.2-55.7,43.18-37.24A20.43,20.43,0,0,0,243,96ZM172.53,141.7a12,12,0,0,0-3.84,11.86L181.58,208l-47.29-29.08a12,12,0,0,0-12.58,0L74.42,208l12.89-54.4a12,12,0,0,0-3.84-11.86L41.2,105.24l55.4-4.47a12,12,0,0,0,10.13-7.38L128,41.89l21.27,51.5a12,12,0,0,0,10.13,7.38l55.4,4.47Z"}))],["duotone",e.createElement(e.Fragment,null,e.createElement("path",{d:"M229.06,108.79l-48.7,42,14.88,62.79a8.4,8.4,0,0,1-12.52,9.17L128,189.09,73.28,222.74a8.4,8.4,0,0,1-12.52-9.17l14.88-62.79-48.7-42A8.46,8.46,0,0,1,31.73,94L95.64,88.8l24.62-59.6a8.36,8.36,0,0,1,15.48,0l24.62,59.6L224.27,94A8.46,8.46,0,0,1,229.06,108.79Z",opacity:"0.2"}),e.createElement("path",{d:"M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"}))],["fill",e.createElement(e.Fragment,null,e.createElement("path",{d:"M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"}))],["light",e.createElement(e.Fragment,null,e.createElement("path",{d:"M237.28,97.87A14.18,14.18,0,0,0,224.76,88l-60.25-4.87-23.22-56.2a14.37,14.37,0,0,0-26.58,0L91.49,83.11,31.24,88a14.18,14.18,0,0,0-12.52,9.89A14.43,14.43,0,0,0,23,113.32L69,152.93l-14,59.25a14.4,14.4,0,0,0,5.59,15,14.1,14.1,0,0,0,15.91.6L128,196.12l51.58,31.71a14.1,14.1,0,0,0,15.91-.6,14.4,14.4,0,0,0,5.59-15l-14-59.25L233,113.32A14.43,14.43,0,0,0,237.28,97.87Zm-12.14,6.37-48.69,42a6,6,0,0,0-1.92,5.92l14.88,62.79a2.35,2.35,0,0,1-.95,2.57,2.24,2.24,0,0,1-2.6.1L131.14,184a6,6,0,0,0-6.28,0L70.14,217.61a2.24,2.24,0,0,1-2.6-.1,2.35,2.35,0,0,1-1-2.57l14.88-62.79a6,6,0,0,0-1.92-5.92l-48.69-42a2.37,2.37,0,0,1-.73-2.65,2.28,2.28,0,0,1,2.07-1.65l63.92-5.16a6,6,0,0,0,5.06-3.69l24.63-59.6a2.35,2.35,0,0,1,4.38,0l24.63,59.6a6,6,0,0,0,5.06,3.69l63.92,5.16a2.28,2.28,0,0,1,2.07,1.65A2.37,2.37,0,0,1,225.14,104.24Z"}))],["regular",e.createElement(e.Fragment,null,e.createElement("path",{d:"M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"}))],["thin",e.createElement(e.Fragment,null,e.createElement("path",{d:"M235.36,98.49A12.21,12.21,0,0,0,224.59,90l-61.47-5L139.44,27.67a12.37,12.37,0,0,0-22.88,0L92.88,85,31.41,90a12.45,12.45,0,0,0-7.07,21.84l46.85,40.41L56.87,212.64a12.35,12.35,0,0,0,18.51,13.49L128,193.77l52.62,32.36a12.12,12.12,0,0,0,13.69-.51,12.28,12.28,0,0,0,4.82-13l-14.32-60.42,46.85-40.41A12.29,12.29,0,0,0,235.36,98.49Zm-8.93,7.26-48.68,42a4,4,0,0,0-1.28,3.95l14.87,62.79a4.37,4.37,0,0,1-1.72,4.65,4.24,4.24,0,0,1-4.81.18L130.1,185.67a4,4,0,0,0-4.2,0L71.19,219.32a4.24,4.24,0,0,1-4.81-.18,4.37,4.37,0,0,1-1.72-4.65L79.53,151.7a4,4,0,0,0-1.28-3.95l-48.68-42A4.37,4.37,0,0,1,28.25,101a4.31,4.31,0,0,1,3.81-3L96,92.79a4,4,0,0,0,3.38-2.46L124,30.73a4.35,4.35,0,0,1,8.08,0l24.62,59.6A4,4,0,0,0,160,92.79l63.9,5.15a4.31,4.31,0,0,1,3.81,3A4.37,4.37,0,0,1,226.43,105.75Z"}))]]),n=e.forwardRef((a,n)=>e.createElement(t.default,{ref:n,...a,weights:r}));n.displayName="StarIcon",a.s(["StarIcon",0,n],471714)},621333,a=>{"use strict";var e=a.i(648863);let t=["John Doe","Jane Mol","Alex Lump","Sarah Condor","Mike Johnson","Kate Kok","Tom Smith"],r=`const names = [
  'John Doe',
  'Jane Mol',
  'Alex Lump',
  'Sarah Condor',
  'Mike Johnson',
  'Kate Kok',
  'Tom Smith',
];`;var n=a.i(471714),o=a.i(141806),i=a.i(725695),l=a.i(391398);let s={type:"code",code:`
import { Avatar } from '@mantine/core';
import { StarIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <>
      {/* With image */}
      <Avatar src="avatar.png" alt="it's me" />

      {/* Default placeholder */}
      <Avatar radius="xl" />

      {/* Letters with xl radius */}
      <Avatar color="cyan" radius="xl">MK</Avatar>

      {/* Custom placeholder icon */}
      <Avatar color="blue" radius="sm">
        <StarIcon size={20} />
      </Avatar>
    </>
  );
}

`,component:function(){return(0,l.jsxs)(i.Group,{justify:"center",children:[(0,l.jsx)(o.Avatar,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",alt:"it's me"}),(0,l.jsx)(o.Avatar,{radius:"xl"}),(0,l.jsx)(o.Avatar,{color:"cyan",radius:"xl",children:"MK"}),(0,l.jsx)(o.Avatar,{color:"blue",radius:"sm",children:(0,l.jsx)(n.StarIcon,{size:20})})]})}},c={type:"code",code:`
import { Avatar } from '@mantine/core';
import { StarIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <>
      {/* Default placeholder */}
      <Avatar src={null} alt="no image here" />

      {/* Default placeholder with custom color */}
      <Avatar src={null} alt="no image here" color="indigo" />

      {/* Placeholder with initials */}
      <Avatar src={null} alt="Vitaly Rtishchev" color="red">VR</Avatar>

      {/* Placeholder with custom icon */}
      <Avatar color="blue" radius="xl">
        <StarIcon size={20} />
      </Avatar>
    </>
  );
}

`,component:function(){return(0,l.jsxs)(i.Group,{justify:"center",children:[(0,l.jsx)(o.Avatar,{src:null,alt:"no image here"}),(0,l.jsx)(o.Avatar,{src:null,alt:"no image here",color:"indigo"}),(0,l.jsx)(o.Avatar,{src:null,alt:"no image here",color:"red",children:"VR"}),(0,l.jsx)(o.Avatar,{color:"blue",radius:"xl",children:(0,l.jsx)(n.StarIcon,{size:20})})]})}};var d=a.i(153338);let p={type:"configurator",component:o.Avatar,centered:!0,code:`
import { Avatar } from '@mantine/core';

function Demo() {
  return <Avatar{{props}} />;
}
`,controls:[d.staticVariantsControl,{prop:"radius",type:"size",initialValue:"md",libraryValue:"100%"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"color",type:"color",initialValue:"gray",libraryValue:"gray"},{prop:"src",type:"string",initialValue:"",libraryValue:null}]},u={type:"code",centered:!0,code:`
import { Avatar } from '@mantine/core';

function Demo() {
  return (
    <Avatar
      component="a"
      href="https://github.com/rtivital"
      target="_blank"
      src="avatar.png"
      alt="it's me"
    />
  );
}
`,component:function(){return(0,l.jsx)(o.Avatar,{component:"a",href:"https://github.com/rtivital",target:"_blank",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",alt:"it's me"})}},m={type:"code",centered:!0,code:`
import { Avatar } from '@mantine/core';

function Demo() {
  return (
    <Avatar.Group>
      <Avatar src="image.png" />
      <Avatar src="image.png" />
      <Avatar src="image.png" />
      <Avatar>+5</Avatar>
    </Avatar.Group>
  );
}
`,component:function(){return(0,l.jsxs)(o.Avatar.Group,{children:[(0,l.jsx)(o.Avatar,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png"}),(0,l.jsx)(o.Avatar,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"}),(0,l.jsx)(o.Avatar,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"}),(0,l.jsx)(o.Avatar,{children:"+5"})]})}};var h=a.i(431868);let v={type:"code",centered:!0,code:`
import { Avatar, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip.Group openDelay={300} closeDelay={100}>
      <Avatar.Group spacing="sm">
        <Tooltip label="Salazar Troop" withArrow>
          <Avatar src="image.png" radius="xl" />
        </Tooltip>
        <Tooltip label="Bandit Crimes" withArrow>
          <Avatar src="image.png" radius="xl" />
        </Tooltip>
        <Tooltip label="Jane Rata" withArrow>
          <Avatar src="image.png" radius="xl" />
        </Tooltip>
        <Tooltip
          withArrow
          label={
            <>
              <div>John Outcast</div>
              <div>Levi Capitan</div>
            </>
          }
        >
          <Avatar radius="xl">+2</Avatar>
        </Tooltip>
      </Avatar.Group>
    </Tooltip.Group>
  );
}
`,component:function(){return(0,l.jsx)(h.Tooltip.Group,{openDelay:300,closeDelay:100,children:(0,l.jsxs)(o.Avatar.Group,{spacing:"sm",children:[(0,l.jsx)(h.Tooltip,{label:"Salazar Troop",withArrow:!0,children:(0,l.jsx)(o.Avatar,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",radius:"xl"})}),(0,l.jsx)(h.Tooltip,{label:"Bandit Crimes",withArrow:!0,children:(0,l.jsx)(o.Avatar,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",radius:"xl"})}),(0,l.jsx)(h.Tooltip,{label:"Jane Rata",withArrow:!0,children:(0,l.jsx)(o.Avatar,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",radius:"xl"})}),(0,l.jsx)(h.Tooltip,{withArrow:!0,label:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{children:"John Outcast"}),(0,l.jsx)("div",{children:"Levi Capitan"})]}),children:(0,l.jsx)(o.Avatar,{radius:"xl",children:"+2"})})]})})}},g={type:"configurator",component:function(a){return(0,l.jsx)(o.Avatar,{size:"xl",variant:"gradient",gradient:{from:a.gradientFrom,to:a.gradientTo,deg:a.gradientDegree},children:"GR"})},code:a=>`
import { Avatar } from '@mantine/core';

function Demo() {
  return (
    <Avatar
      size="xl"
      variant="gradient"
      gradient={{ from: '${a.gradientFrom}', to: '${a.gradientTo}', deg: ${a.gradientDegree} }}
    >
      GR
    </Avatar>
  );
}
`,centered:!0,controls:a.i(577830).gradientControls},A={type:"code",component:function(){return(0,l.jsx)(i.Group,{children:t.map(a=>(0,l.jsx)(o.Avatar,{name:a,color:"initials"},a))})},code:`
import { Avatar, Group } from '@mantine/core';

${r}

function Demo() {
  const avatars = names.map((name) => <Avatar key={name} name={name} color="initials" />);
  return <Group>{avatars}</Group>;
}
`,centered:!0},x={type:"code",component:function(){return(0,l.jsx)(i.Group,{children:t.map(a=>(0,l.jsx)(o.Avatar,{name:a,color:"initials",allowedInitialsColors:["blue","red"]},a))})},code:`
import { Avatar, Group } from '@mantine/core';

${r}

function Demo() {
  const avatars = names.map((name) => (
    <Avatar key={name} name={name} color="initials" allowedInitialsColors={['blue', 'red']} />
  ));
  return <Group>{avatars}</Group>;
}
`,centered:!0};var f=(0,e.__exportAll)({allowedColors:()=>x,configurator:()=>p,gradient:()=>g,group:()=>m,groupTooltip:()=>v,initials:()=>A,link:()=>u,placeholders:()=>c,usage:()=>s});a.s(["AvatarDemos",0,f],621333)},667490,a=>{"use strict";var e=a.i(391398),t=a.i(38856),r=a.i(621333);a.i(603441);var n=a.i(62558);a.i(457450);var o=a.i(418026);let i=(0,n.Layout)(o.MDX_DATA.Avatar);function l(a){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.useMDXComponents)(),...a.components},{Demo:o,Polymorphic:i}=n;return o||s("Demo",!0),i||s("Polymorphic",!0),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,e.jsx)(o,{data:r.AvatarDemos.usage}),"\n",(0,e.jsx)(n.h2,{id:"initials",children:"Initials"}),"\n",(0,e.jsxs)(n.p,{children:["To display initials instead of the default placeholder, set the ",(0,e.jsx)(n.code,{children:"name"})," prop\nto the name of the person, for example, ",(0,e.jsx)(n.code,{children:'name="John Doe"'}),". If the name\nis set, you can use ",(0,e.jsx)(n.code,{children:'color="initials"'})," to generate a color based on the name:"]}),"\n",(0,e.jsx)(o,{data:r.AvatarDemos.initials}),"\n",(0,e.jsx)(n.h2,{id:"allowed-initials-colors",children:"Allowed initials colors"}),"\n",(0,e.jsxs)(n.p,{children:["By default, all colors from the default theme are allowed for initials. You can restrict them\nby providing the ",(0,e.jsx)(n.code,{children:"allowedInitialsColors"})," prop with an array of colors. Note that the default colors\narray does not include custom colors defined in the theme – you need to provide them manually\nif needed."]}),"\n",(0,e.jsx)(o,{data:r.AvatarDemos.allowedColors}),"\n",(0,e.jsx)(n.h2,{id:"placeholder",children:"Placeholder"}),"\n",(0,e.jsxs)(n.p,{children:["If the image cannot be loaded or is not provided, ",(0,e.jsx)(n.code,{children:"Avatar"})," will display a placeholder instead. By default,\nthe placeholder is an icon, but it can be changed to any React node:"]}),"\n",(0,e.jsx)(o,{data:r.AvatarDemos.placeholders}),"\n",(0,e.jsx)(n.h2,{id:"variants",children:"Variants"}),"\n",(0,e.jsx)(o,{data:r.AvatarDemos.configurator}),"\n",(0,e.jsx)(n.h2,{id:"avatargroup",children:"Avatar.Group"}),"\n",(0,e.jsxs)(n.p,{children:["The ",(0,e.jsx)(n.code,{children:"Avatar.Group"})," component combines multiple avatars into a stack:"]}),"\n",(0,e.jsx)(o,{data:r.AvatarDemos.group}),"\n",(0,e.jsxs)(n.p,{children:["Note that you must not wrap child ",(0,e.jsx)(n.code,{children:"Avatar"})," components with any additional elements,\nbut you can wrap ",(0,e.jsx)(n.code,{children:"Avatar"})," with components that do not render any HTML elements\nin the current tree, for example ",(0,e.jsx)(n.a,{href:"/core/tooltip",children:"Tooltip"}),"."]}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-tsx",children:'import { Avatar } from \'@mantine/core\';\n\n// Will not work correctly\nfunction Demo() {\n  return (\n    <Avatar.Group spacing="sm">\n      <div>\n        <Avatar src="image.png" radius="xl" />\n      </div>\n      <Avatar src="image.png" radius="xl" />\n      <Avatar src="image.png" radius="xl" />\n      <Avatar radius="xl">+5</Avatar>\n    </Avatar.Group>\n  );\n}\n'})}),"\n",(0,e.jsxs)(n.p,{children:["Example of usage with ",(0,e.jsx)(n.a,{href:"/core/tooltip/",children:"Tooltip"}),":"]}),"\n",(0,e.jsx)(o,{data:r.AvatarDemos.groupTooltip}),"\n",(0,e.jsx)(i,{defaultElement:"div",changeToElement:"button",component:"Avatar",withNext:!0}),"\n",(0,e.jsxs)(n.p,{children:["Example of using ",(0,e.jsx)(n.code,{children:"Avatar"})," as a link:"]}),"\n",(0,e.jsx)(o,{data:r.AvatarDemos.link}),"\n",(0,e.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,e.jsxs)(n.p,{children:["Avatar renders an ",(0,e.jsx)(n.code,{children:"<img />"})," HTML element. Set the ",(0,e.jsx)(n.code,{children:"alt"})," prop to describe the image –\nit is also used as the ",(0,e.jsx)(n.code,{children:"title"})," attribute for the avatar placeholder when the image cannot be loaded."]}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-tsx",children:'import { Avatar } from \'@mantine/core\';\n\nfunction Demo() {\n  // ❌ No alt for image\n  return <Avatar src="./image.png" />;\n\n  // ✅ alt is set\n  return <Avatar src="./image.png" alt="Rob Johnson" />;\n\n  // ✅ title is not required, but still recommended\n  return <Avatar>RJ</Avatar>;\n\n  // ✅ title is set on placeholder\n  return <Avatar alt="Rob Johnson">RJ</Avatar>;\n}\n'})})]})}function s(a,e){throw Error("Expected "+(e?"component":"object")+" `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}a.s(["default",0,function(a={}){return(0,e.jsx)(i,{...a,children:(0,e.jsx)(l,{...a})})}])},377443,(a,e,t)=>{let r="/core/avatar";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>a.r(667490)]),e.hot&&e.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,a=>{a.v(e=>Promise.all(["static/chunks/22379_btw709h.js"].map(e=>a.l(e))).then(()=>e(493594)))},828805,a=>{a.v(e=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(e=>a.l(e))).then(()=>e(879466)))}]);