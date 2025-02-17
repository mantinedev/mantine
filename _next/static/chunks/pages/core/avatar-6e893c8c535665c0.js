(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[72283],{46073:(e,a,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/avatar",function(){return r(24419)}])},24419:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>C});var t=r(31085),n=r(71184),o=r(61370),i=r(56051),l=r(86658),s=r(51815);let c={type:"code",code:`
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

`,component:function(){return(0,t.jsxs)(i.Y,{justify:"center",children:[(0,t.jsx)(l.e,{src:s.HD[0],alt:"it's me"}),(0,t.jsx)(l.e,{radius:"xl"}),(0,t.jsx)(l.e,{color:"cyan",radius:"xl",children:"MK"}),(0,t.jsx)(l.e,{color:"blue",radius:"sm",children:(0,t.jsx)(o.A,{size:20})})]})}};var d=r(85569);let p={type:"code",component:function(){let e=s.Dy.map(e=>(0,t.jsx)(l.e,{name:e,color:"initials",allowedInitialsColors:["blue","red"]},e));return(0,t.jsx)(i.Y,{children:e})},code:`
import { Avatar, Group } from '@mantine/core';

${s.SD}

function Demo() {
  const avatars = names.map((name) => (
    <Avatar key={name} name={name} color="initials" allowedInitialsColors={['blue', 'red']} />
  ));
  return <Group>{avatars}</Group>;
}
`,centered:!0},u={type:"code",code:`
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

`,component:function(){return(0,t.jsxs)(i.Y,{justify:"center",children:[(0,t.jsx)(l.e,{src:null,alt:"no image here"}),(0,t.jsx)(l.e,{src:null,alt:"no image here",color:"indigo"}),(0,t.jsx)(l.e,{src:null,alt:"no image here",color:"red",children:"VR"}),(0,t.jsx)(l.e,{color:"blue",radius:"xl",children:(0,t.jsx)(o.A,{size:20})})]})}};var m=r(78362);let h=`
import { Avatar } from '@mantine/core';

function Demo() {
  return <Avatar{{props}} />;
}
`,v={type:"configurator",component:l.e,centered:!0,code:h,controls:[m.eD,{prop:"radius",type:"size",initialValue:"sm",libraryValue:"100%"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"color",type:"color",initialValue:"gray",libraryValue:"gray"},{prop:"src",type:"string",initialValue:"",libraryValue:null}]},x={type:"code",centered:!0,code:`
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
`,component:function(){return(0,t.jsxs)(l.e.Group,{children:[(0,t.jsx)(l.e,{src:s.HD[0]}),(0,t.jsx)(l.e,{src:s.HD[1]}),(0,t.jsx)(l.e,{src:s.HD[2]}),(0,t.jsx)(l.e,{children:"+5"})]})}};var g=r(2912);let f={type:"code",centered:!0,code:`
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
`,component:function(){return(0,t.jsx)(g.m.Group,{openDelay:300,closeDelay:100,children:(0,t.jsxs)(l.e.Group,{spacing:"sm",children:[(0,t.jsx)(g.m,{label:"Salazar Troop",withArrow:!0,children:(0,t.jsx)(l.e,{src:s.HD[0],radius:"xl"})}),(0,t.jsx)(g.m,{label:"Bandit Crimes",withArrow:!0,children:(0,t.jsx)(l.e,{src:s.HD[1],radius:"xl"})}),(0,t.jsx)(g.m,{label:"Jane Rata",withArrow:!0,children:(0,t.jsx)(l.e,{src:s.HD[2],radius:"xl"})}),(0,t.jsx)(g.m,{withArrow:!0,label:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{children:"John Outcast"}),(0,t.jsx)("div",{children:"Levi Capitan"})]}),children:(0,t.jsx)(l.e,{radius:"xl",children:"+2"})})]})})}},j={type:"code",centered:!0,code:`
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
`,component:function(){return(0,t.jsx)(l.e,{component:"a",href:"https://github.com/rtivital",target:"_blank",src:s.HD[0],alt:"it's me"})}};var A=r(85954),y=r(38215);let b=(0,A.P)(y.XZ.Avatar);function w(e){let a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components},{Demo:r,Polymorphic:o}=a;return r||D("Demo",!0),o||D("Polymorphic",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(r,{data:c}),"\n",(0,t.jsx)(a.h2,{id:"initials",children:"Initials"}),"\n",(0,t.jsxs)(a.p,{children:["To display initials instead of the default placeholder, set ",(0,t.jsx)(a.code,{children:"name"})," prop\nto the name of the person, for example, ",(0,t.jsx)(a.code,{children:'name="John Doe"'}),". If the name\nis set, you can use ",(0,t.jsx)(a.code,{children:'color="initials"'})," to generate color based on the name:"]}),"\n",(0,t.jsx)(r,{data:d.y}),"\n",(0,t.jsx)(a.h2,{id:"allowed-initials-colors",children:"Allowed initials colors"}),"\n",(0,t.jsxs)(a.p,{children:["By default, all colors from the default theme are allowed for initials, you can restrict them\nby providing ",(0,t.jsx)(a.code,{children:"allowedInitialsColors"})," prop with an array of colors. Note that the default colors\narray does not include custom colors defined in the theme, you need to provide them manually\nif needed."]}),"\n",(0,t.jsx)(r,{data:p}),"\n",(0,t.jsx)(a.h2,{id:"placeholder",children:"Placeholder"}),"\n",(0,t.jsxs)(a.p,{children:["If the image cannot be loaded or not provided, ",(0,t.jsx)(a.code,{children:"Avatar"})," will display a placeholder instead. By default,\nplaceholder is an icon, but it can be changed to any React node:"]}),"\n",(0,t.jsx)(r,{data:u}),"\n",(0,t.jsx)(a.h2,{id:"variants",children:"Variants"}),"\n",(0,t.jsx)(r,{data:v}),"\n",(0,t.jsx)(a.h2,{id:"avatargroup",children:"Avatar.Group"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"Avatar.Group"})," component combines multiple avatars into a stack:"]}),"\n",(0,t.jsx)(r,{data:x}),"\n",(0,t.jsxs)(a.p,{children:["Note that you must not wrap child ",(0,t.jsx)(a.code,{children:"Avatar"})," components with any additional elements,\nbut you can use wrap ",(0,t.jsx)(a.code,{children:"Avatar"})," with components that do not render any HTML elements\nin the current tree, for example ",(0,t.jsx)(a.a,{href:"/core/tooltip",children:"Tooltip"}),"."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",children:'import { Avatar } from \'@mantine/core\';\n\n// Will not work correctly\nfunction Demo() {\n  return (\n    <Avatar.Group spacing="sm">\n      <div>\n        <Avatar src="image.png" radius="xl" />\n      </div>\n      <Avatar src="image.png" radius="xl" />\n      <Avatar src="image.png" radius="xl" />\n      <Avatar radius="xl">+5</Avatar>\n    </Avatar.Group>\n  );\n}\n'})}),"\n",(0,t.jsxs)(a.p,{children:["Example of usage with ",(0,t.jsx)(a.a,{href:"/core/tooltip/",children:"Tooltip"}),":"]}),"\n",(0,t.jsx)(r,{data:f}),"\n",(0,t.jsx)(o,{defaultElement:"div",changeToElement:"button",component:"Avatar",withNext:!0}),"\n",(0,t.jsx)(r,{data:j}),"\n",(0,t.jsxs)(a.p,{children:["You can combine it with ",(0,t.jsx)(a.a,{href:"/core/tooltip/",children:"Tooltip"})," or ",(0,t.jsx)(a.a,{href:"/core/popover/",children:"Popover"})," to show additional information on hover"]}),"\n",(0,t.jsx)(r,{data:f}),"\n",(0,t.jsx)(a.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(a.p,{children:["Avatar renders ",(0,t.jsx)(a.code,{children:"<img />"})," HTML element. Set ",(0,t.jsx)(a.code,{children:"alt"})," prop to describe image,\nit is also used as ",(0,t.jsx)(a.code,{children:"title"})," attribute for avatar placeholder when the image cannot be loaded."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",children:'import { Avatar } from \'@mantine/core\';\n\nfunction NotOk() {\n  // Not ok, no alt for image\n  return <Avatar src="./image.png" />;\n}\n\nfunction Ok() {\n  // Ok, alt is set on <img /> tag\n  return <Avatar src="./image.png" alt="Rob Johnson" />;\n}\n\nfunction Ehh() {\n  // Ehh, title is not required, but still recommended\n  return <Avatar>RJ</Avatar>;\n}\n\nfunction OkPlaceholder() {\n  // Ok, title is set on placeholder\n  return <Avatar alt="Rob Johnson">RJ</Avatar>;\n}\n'})})]})}function C(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(b,{...e,children:(0,t.jsx)(w,{...e})})}function D(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},61370:(e,a,r)=>{"use strict";r.d(a,{A:()=>t});var t=(0,r(73366).A)("outline","star","IconStar",[["path",{d:"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z",key:"svg-0"}]])},85569:(e,a,r)=>{"use strict";r.d(a,{y:()=>l});var t=r(31085),n=r(86658),o=r(56051),i=r(51815);let l={type:"code",component:function(){let e=i.Dy.map(e=>(0,t.jsx)(n.e,{name:e,color:"initials"},e));return(0,t.jsx)(o.Y,{children:e})},code:`
import { Avatar, Group } from '@mantine/core';

${i.SD}

function Demo() {
  const avatars = names.map((name) => <Avatar key={name} name={name} color="initials" />);
  return <Group>{avatars}</Group>;
}
`,centered:!0}},51815:(e,a,r)=>{"use strict";r.d(a,{Dy:()=>n,HD:()=>t,SD:()=>o});let t=["https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"],n=["John Doe","Jane Mol","Alex Lump","Sarah Condor","Mike Johnson","Kate Kok","Tom Smith"],o=`const names = [
  'John Doe',
  'Jane Mol',
  'Alex Lump',
  'Sarah Condor',
  'Mike Johnson',
  'Kate Kok',
  'Tom Smith',
];`},78362:(e,a,r)=>{"use strict";r.d(a,{eD:()=>n,ip:()=>t});let t={type:"select",prop:"variant",data:["default","filled","light","outline","subtle","transparent","white"],initialValue:"filled",libraryValue:"__none__"},n={type:"select",prop:"variant",data:["filled","light","outline","transparent","white","default"],initialValue:"filled",libraryValue:"__none__"}},86658:(e,a,r)=>{"use strict";r.d(a,{e:()=>b});var t=r(31085),n=r(14041),o=r(33450),i=r(7098),l=r(29686),s=r(69564),c=r(34056),d=r(2453),p=r(6754);let u=(0,n.createContext)(null),m=u.Provider;var h={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};let v={},x=(0,i.V)((e,{spacing:a})=>({group:{"--ag-spacing":(0,o.GY)(a)}})),g=(0,p.P9)((e,a)=>{let r=(0,l.Y)("AvatarGroup",v,e),{classNames:n,className:o,style:i,styles:d,unstyled:p,vars:u,spacing:g,...f}=r,j=(0,s.I)({name:"AvatarGroup",classes:h,props:r,className:o,style:i,classNames:n,styles:d,unstyled:p,vars:u,varsResolver:x,rootSelector:"group"});return(0,t.jsx)(m,{value:!0,children:(0,t.jsx)(c.a,{ref:a,...j("group"),...f})})});function f(e){return(0,t.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}g.classes=h,g.displayName="@mantine/core/AvatarGroup";let j=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],A={},y=(0,i.V)((e,{size:a,radius:r,variant:t,gradient:n,color:i,autoContrast:l,name:s,allowedInitialsColors:c})=>{let d="initials"===i&&"string"==typeof s?function(e,a=j){let r=Math.abs(function(e){let a=0;for(let r=0;r<e.length;r+=1)a=(a<<5)-a+e.charCodeAt(r)|0;return a}(e))%a.length;return a[r]}(s,c):i,p=e.variantColorResolver({color:d||"gray",theme:e,gradient:n,variant:t||"light",autoContrast:l});return{root:{"--avatar-size":(0,o.YC)(a,"avatar-size"),"--avatar-radius":void 0===r?void 0:(0,o.nJ)(r),"--avatar-bg":d||t?p.background:void 0,"--avatar-color":d||t?p.color:void 0,"--avatar-bd":d||t?p.border:void 0}}}),b=(0,d.v)((e,a)=>{let r=(0,l.Y)("Avatar",A,e),{classNames:o,className:i,style:d,styles:p,unstyled:m,vars:v,src:x,alt:g,radius:j,color:b,gradient:w,imageProps:C,children:D,autoContrast:G,mod:_,name:k,allowedInitialsColors:T,...V}=r,S={withinGroup:!!(0,n.useContext)(u)},[J,E]=(0,n.useState)(!x),M=(0,s.I)({name:"Avatar",props:r,classes:h,className:i,style:d,classNames:o,styles:p,unstyled:m,vars:v,varsResolver:y});return(0,n.useEffect)(()=>E(!x),[x]),(0,t.jsx)(c.a,{...M("root"),mod:[{"within-group":S.withinGroup},_],ref:a,...V,children:J?(0,t.jsx)("span",{...M("placeholder"),title:g,children:D||"string"==typeof k&&function(e,a=2){let r=e.split(" ");return 1===r.length?e.slice(0,a).toUpperCase():r.map(e=>e[0]).slice(0,a).join("").toUpperCase()}(k)||(0,t.jsx)(f,{})}):(0,t.jsx)("img",{...C,...M("image"),src:x,alt:g,onError:e=>{E(!0),C?.onError?.(e)}})})});b.classes=h,b.displayName="@mantine/core/Avatar",b.Group=g}},e=>{var a=a=>e(e.s=a);e.O(0,[67456,39699,68831,90636,46593,38792],()=>a(46073)),_N_E=e.O()}]);