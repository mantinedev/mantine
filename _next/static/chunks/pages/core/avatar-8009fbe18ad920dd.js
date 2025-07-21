(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[72283],{46073:(e,a,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/avatar",function(){return t(24419)}])},24419:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>b});var r=t(31085),n=t(71184),o=t(61370),i=t(56051),l=t(86658),s=t(51815);let c={type:"code",code:`
import { Avatar } from '@mantine/core';
import { IconStar } from '@tabler/icons-react';

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
        <IconStar size={20} />
      </Avatar>
    </>
  );
}

`,component:function(){return(0,r.jsxs)(i.Y,{justify:"center",children:[(0,r.jsx)(l.e,{src:s.HD[0],alt:"it's me"}),(0,r.jsx)(l.e,{radius:"xl"}),(0,r.jsx)(l.e,{color:"cyan",radius:"xl",children:"MK"}),(0,r.jsx)(l.e,{color:"blue",radius:"sm",children:(0,r.jsx)(o.A,{size:20})})]})}};var d=t(85569);let p={type:"code",component:function(){let e=s.Dy.map(e=>(0,r.jsx)(l.e,{name:e,color:"initials",allowedInitialsColors:["blue","red"]},e));return(0,r.jsx)(i.Y,{children:e})},code:`
import { Avatar, Group } from '@mantine/core';

${s.SD}

function Demo() {
  const avatars = names.map((name) => (
    <Avatar key={name} name={name} color="initials" allowedInitialsColors={['blue', 'red']} />
  ));
  return <Group>{avatars}</Group>;
}
`,centered:!0},h={type:"code",code:`
import { Avatar } from '@mantine/core';
import { IconStar } from '@tabler/icons-react';

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
        <IconStar size={20} />
      </Avatar>
    </>
  );
}

`,component:function(){return(0,r.jsxs)(i.Y,{justify:"center",children:[(0,r.jsx)(l.e,{src:null,alt:"no image here"}),(0,r.jsx)(l.e,{src:null,alt:"no image here",color:"indigo"}),(0,r.jsx)(l.e,{src:null,alt:"no image here",color:"red",children:"VR"}),(0,r.jsx)(l.e,{color:"blue",radius:"xl",children:(0,r.jsx)(o.A,{size:20})})]})}};var u=t(78362);let v=`
import { Avatar } from '@mantine/core';

function Demo() {
  return <Avatar{{props}} />;
}
`,m={type:"configurator",component:l.e,centered:!0,code:v,controls:[u.eD,{prop:"radius",type:"size",initialValue:"sm",libraryValue:"100%"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"color",type:"color",initialValue:"gray",libraryValue:"gray"},{prop:"src",type:"string",initialValue:"",libraryValue:null}]},g={type:"code",centered:!0,code:`
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
`,component:function(){return(0,r.jsxs)(l.e.Group,{children:[(0,r.jsx)(l.e,{src:s.HD[0]}),(0,r.jsx)(l.e,{src:s.HD[1]}),(0,r.jsx)(l.e,{src:s.HD[2]}),(0,r.jsx)(l.e,{children:"+5"})]})}};var x=t(2912);let A={type:"code",centered:!0,code:`
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
`,component:function(){return(0,r.jsx)(x.m.Group,{openDelay:300,closeDelay:100,children:(0,r.jsxs)(l.e.Group,{spacing:"sm",children:[(0,r.jsx)(x.m,{label:"Salazar Troop",withArrow:!0,children:(0,r.jsx)(l.e,{src:s.HD[0],radius:"xl"})}),(0,r.jsx)(x.m,{label:"Bandit Crimes",withArrow:!0,children:(0,r.jsx)(l.e,{src:s.HD[1],radius:"xl"})}),(0,r.jsx)(x.m,{label:"Jane Rata",withArrow:!0,children:(0,r.jsx)(l.e,{src:s.HD[2],radius:"xl"})}),(0,r.jsx)(x.m,{withArrow:!0,label:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{children:"John Outcast"}),(0,r.jsx)("div",{children:"Levi Capitan"})]}),children:(0,r.jsx)(l.e,{radius:"xl",children:"+2"})})]})})}},y={type:"code",centered:!0,code:`
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
`,component:function(){return(0,r.jsx)(l.e,{component:"a",href:"https://github.com/rtivital",target:"_blank",src:s.HD[0],alt:"it's me"})}};var f=t(18675),j=t(20017);let w=(0,f.P)(j.XZ.Avatar);function k(e){let a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components},{Demo:t,Polymorphic:o}=a;return t||M("Demo",!0),o||M("Polymorphic",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t,{data:c}),"\n",(0,r.jsx)(a.h2,{id:"initials",children:"Initials"}),"\n",(0,r.jsxs)(a.p,{children:["To display initials instead of the default placeholder, set ",(0,r.jsx)(a.code,{children:"name"})," prop\nto the name of the person, for example, ",(0,r.jsx)(a.code,{children:'name="John Doe"'}),". If the name\nis set, you can use ",(0,r.jsx)(a.code,{children:'color="initials"'})," to generate color based on the name:"]}),"\n",(0,r.jsx)(t,{data:d.y}),"\n",(0,r.jsx)(a.h2,{id:"allowed-initials-colors",children:"Allowed initials colors"}),"\n",(0,r.jsxs)(a.p,{children:["By default, all colors from the default theme are allowed for initials, you can restrict them\nby providing ",(0,r.jsx)(a.code,{children:"allowedInitialsColors"})," prop with an array of colors. Note that the default colors\narray does not include custom colors defined in the theme, you need to provide them manually\nif needed."]}),"\n",(0,r.jsx)(t,{data:p}),"\n",(0,r.jsx)(a.h2,{id:"placeholder",children:"Placeholder"}),"\n",(0,r.jsxs)(a.p,{children:["If the image cannot be loaded or not provided, ",(0,r.jsx)(a.code,{children:"Avatar"})," will display a placeholder instead. By default,\nplaceholder is an icon, but it can be changed to any React node:"]}),"\n",(0,r.jsx)(t,{data:h}),"\n",(0,r.jsx)(a.h2,{id:"variants",children:"Variants"}),"\n",(0,r.jsx)(t,{data:m}),"\n",(0,r.jsx)(a.h2,{id:"avatargroup",children:"Avatar.Group"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"Avatar.Group"})," component combines multiple avatars into a stack:"]}),"\n",(0,r.jsx)(t,{data:g}),"\n",(0,r.jsxs)(a.p,{children:["Note that you must not wrap child ",(0,r.jsx)(a.code,{children:"Avatar"})," components with any additional elements,\nbut you can use wrap ",(0,r.jsx)(a.code,{children:"Avatar"})," with components that do not render any HTML elements\nin the current tree, for example ",(0,r.jsx)(a.a,{href:"/core/tooltip",children:"Tooltip"}),"."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-tsx",children:'import { Avatar } from \'@mantine/core\';\n\n// Will not work correctly\nfunction Demo() {\n  return (\n    <Avatar.Group spacing="sm">\n      <div>\n        <Avatar src="image.png" radius="xl" />\n      </div>\n      <Avatar src="image.png" radius="xl" />\n      <Avatar src="image.png" radius="xl" />\n      <Avatar radius="xl">+5</Avatar>\n    </Avatar.Group>\n  );\n}\n'})}),"\n",(0,r.jsxs)(a.p,{children:["Example of usage with ",(0,r.jsx)(a.a,{href:"/core/tooltip/",children:"Tooltip"}),":"]}),"\n",(0,r.jsx)(t,{data:A}),"\n",(0,r.jsx)(o,{defaultElement:"div",changeToElement:"button",component:"Avatar",withNext:!0}),"\n",(0,r.jsxs)(a.p,{children:["Example using ",(0,r.jsx)(a.code,{children:"Avatar"})," as a link:"]}),"\n",(0,r.jsx)(t,{data:y}),"\n",(0,r.jsx)(a.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,r.jsxs)(a.p,{children:["Avatar renders ",(0,r.jsx)(a.code,{children:"<img />"})," HTML element. Set ",(0,r.jsx)(a.code,{children:"alt"})," prop to describe image,\nit is also used as ",(0,r.jsx)(a.code,{children:"title"})," attribute for avatar placeholder when the image cannot be loaded."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-tsx",children:'import { Avatar } from \'@mantine/core\';\n\nfunction NotOk() {\n  // ❌ No alt for image\n  return <Avatar src="./image.png" />;\n}\n\nfunction Ok() {\n  // ✅ alt is set\n  return <Avatar src="./image.png" alt="Rob Johnson" />;\n}\n\nfunction Ehh() {\n  // ✅ title is not required, but still recommended\n  return <Avatar>RJ</Avatar>;\n}\n\nfunction OkPlaceholder() {\n  // ✅ title is set on placeholder\n  return <Avatar alt="Rob Johnson">RJ</Avatar>;\n}\n'})})]})}function b(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(w,{...e,children:(0,r.jsx)(k,{...e})})}function M(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},87186:(e,a,t)=>{"use strict";t.d(a,{A:()=>r});var r=(0,t(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,a,t)=>{"use strict";t.d(a,{A:()=>r});var r=(0,t(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,a,t)=>{"use strict";t.d(a,{A:()=>r});var r=(0,t(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,a,t)=>{"use strict";t.d(a,{A:()=>r});var r=(0,t(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,a,t)=>{"use strict";t.d(a,{A:()=>r});var r=(0,t(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,a,t)=>{"use strict";t.d(a,{A:()=>r});var r=(0,t(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,a,t)=>{"use strict";t.d(a,{A:()=>r});var r=(0,t(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,a,t)=>{"use strict";t.d(a,{A:()=>r});var r=(0,t(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},61370:(e,a,t)=>{"use strict";t.d(a,{A:()=>r});var r=(0,t(73366).A)("outline","star","IconStar",[["path",{d:"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z",key:"svg-0"}]])},55764:(e,a,t)=>{"use strict";t.d(a,{A:()=>r});var r=(0,t(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},85569:(e,a,t)=>{"use strict";t.d(a,{y:()=>l});var r=t(31085),n=t(86658),o=t(56051),i=t(51815);let l={type:"code",component:function(){let e=i.Dy.map(e=>(0,r.jsx)(n.e,{name:e,color:"initials"},e));return(0,r.jsx)(o.Y,{children:e})},code:`
import { Avatar, Group } from '@mantine/core';

${i.SD}

function Demo() {
  const avatars = names.map((name) => <Avatar key={name} name={name} color="initials" />);
  return <Group>{avatars}</Group>;
}
`,centered:!0}},51815:(e,a,t)=>{"use strict";t.d(a,{Dy:()=>n,HD:()=>r,SD:()=>o});let r=["https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"],n=["John Doe","Jane Mol","Alex Lump","Sarah Condor","Mike Johnson","Kate Kok","Tom Smith"],o=`const names = [
  'John Doe',
  'Jane Mol',
  'Alex Lump',
  'Sarah Condor',
  'Mike Johnson',
  'Kate Kok',
  'Tom Smith',
];`},78362:(e,a,t)=>{"use strict";t.d(a,{eD:()=>n,ip:()=>r});let r={type:"select",prop:"variant",data:["default","filled","light","outline","subtle","transparent","white"],initialValue:"filled",libraryValue:"__none__"},n={type:"select",prop:"variant",data:["filled","light","outline","transparent","white","default"],initialValue:"filled",libraryValue:"__none__"}},86658:(e,a,t)=>{"use strict";t.d(a,{e:()=>f});var r=t(31085),n=t(14041),o=t(33450),i=t(7098),l=t(29686),s=t(69564),c=t(34056),d=t(2453),p=t(6754);let h=(0,n.createContext)(null),u=h.Provider;var v={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};let m=(0,i.V)((e,{spacing:a})=>({group:{"--ag-spacing":(0,o.GY)(a)}})),g=(0,p.P9)((e,a)=>{let t=(0,l.Y)("AvatarGroup",null,e),{classNames:n,className:o,style:i,styles:d,unstyled:p,vars:h,spacing:g,attributes:x,...A}=t,y=(0,s.I)({name:"AvatarGroup",classes:v,props:t,className:o,style:i,classNames:n,styles:d,unstyled:p,attributes:x,vars:h,varsResolver:m,rootSelector:"group"});return(0,r.jsx)(u,{value:!0,children:(0,r.jsx)(c.a,{ref:a,...y("group"),...A})})});function x(e){return(0,r.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}g.classes=v,g.displayName="@mantine/core/AvatarGroup";let A=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],y=(0,i.V)((e,{size:a,radius:t,variant:r,gradient:n,color:i,autoContrast:l,name:s,allowedInitialsColors:c})=>{let d="initials"===i&&"string"==typeof s?function(e,a=A){let t=Math.abs(function(e){let a=0;for(let t=0;t<e.length;t+=1)a=(a<<5)-a+e.charCodeAt(t)|0;return a}(e))%a.length;return a[t]}(s,c):i,p=e.variantColorResolver({color:d||"gray",theme:e,gradient:n,variant:r||"light",autoContrast:l});return{root:{"--avatar-size":(0,o.YC)(a,"avatar-size"),"--avatar-radius":void 0===t?void 0:(0,o.nJ)(t),"--avatar-bg":d||r?p.background:void 0,"--avatar-color":d||r?p.color:void 0,"--avatar-bd":d||r?p.border:void 0}}}),f=(0,d.v)((e,a)=>{let t=(0,l.Y)("Avatar",null,e),{classNames:o,className:i,style:d,styles:p,unstyled:u,vars:m,src:g,alt:A,radius:f,color:j,gradient:w,imageProps:k,children:b,autoContrast:M,mod:C,name:D,allowedInitialsColors:G,attributes:_,...T}=t,I={withinGroup:!!(0,n.useContext)(h)},[S,V]=(0,n.useState)(!g),J=(0,s.I)({name:"Avatar",props:t,classes:v,className:i,style:d,classNames:o,styles:p,unstyled:u,attributes:_,vars:m,varsResolver:y});return(0,n.useEffect)(()=>V(!g),[g]),(0,r.jsx)(c.a,{...J("root"),mod:[{"within-group":I.withinGroup},C],ref:a,...T,children:S||!g?(0,r.jsx)("span",{...J("placeholder"),title:A,children:b||"string"==typeof D&&function(e,a=2){let t=e.split(" ");return 1===t.length?e.slice(0,a).toUpperCase():t.map(e=>e[0]).slice(0,a).join("").toUpperCase()}(D)||(0,r.jsx)(x,{})}):(0,r.jsx)("img",{...k,...J("image"),src:g,alt:A,onError:e=>{V(!0),k?.onError?.(e)}})})});f.classes=v,f.displayName="@mantine/core/Avatar",f.Group=g}},e=>{var a=a=>e(e.s=a);e.O(0,[18675,90636,46593,38792],()=>a(46073)),_N_E=e.O()}]);