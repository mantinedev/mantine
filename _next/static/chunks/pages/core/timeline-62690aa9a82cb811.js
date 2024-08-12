(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[12962],{91083:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/timeline",function(){return i(15511)}])},15511:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return b}});var n=i(52322),l=i(45392),r=i(28559),o=i(64170);let a={type:"code",component:function(){return(0,n.jsx)(r.x,{maw:320,mx:"auto",children:(0,n.jsx)(o.i,{})})},code:`
import { Timeline, Text } from '@mantine/core';
import { IconGitBranch, IconGitPullRequest, IconGitCommit, IconMessageDots } from '@tabler/icons-react';

function Demo() {
  return (
    <Timeline active={1} bulletSize={24} lineWidth={2}>
      <Timeline.Item bullet={<IconGitBranch size={12} />} title="New branch">
        <Text c="dimmed" size="sm">You&apos;ve created new branch <Text variant="link" component="span" inherit>fix-notifications</Text> from master</Text>
        <Text size="xs" mt={4}>2 hours ago</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconGitCommit size={12} />} title="Commits">
        <Text c="dimmed" size="sm">You&apos;ve pushed 23 commits to<Text variant="link" component="span" inherit>fix-notifications branch</Text></Text>
        <Text size="xs" mt={4}>52 minutes ago</Text>
      </Timeline.Item>

      <Timeline.Item title="Pull request" bullet={<IconGitPullRequest size={12} />} lineVariant="dashed">
        <Text c="dimmed" size="sm">You&apos;ve submitted a pull request<Text variant="link" component="span" inherit>Fix incorrect notification message (#187)</Text></Text>
        <Text size="xs" mt={4}>34 minutes ago</Text>
      </Timeline.Item>

      <Timeline.Item title="Code review" bullet={<IconMessageDots size={12} />}>
        <Text c="dimmed" size="sm"><Text variant="link" component="span" inherit>Robert Gluesticker</Text> left a code review on your pull request</Text>
        <Text size="xs" mt={4}>12 minutes ago</Text>
      </Timeline.Item>
    </Timeline>
  );
}
`};var s=i(92448),c=i(90664),m=(0,i(73681).Z)("outline","video","IconVideo",[["path",{d:"M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z",key:"svg-0"}],["path",{d:"M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z",key:"svg-1"}]]),d=i(84786),u=i(8582),h=i(82067),x=i(67925);let p={type:"code",centered:!0,maxWidth:320,component:function(){return(0,n.jsxs)(d.T,{bulletSize:24,children:[(0,n.jsx)(d.T.Item,{title:"Default bullet",children:(0,n.jsx)(u.x,{c:"dimmed",size:"sm",children:"Default bullet without anything"})}),(0,n.jsx)(d.T.Item,{title:"Avatar",bullet:(0,n.jsx)(h.q,{size:22,radius:"xl",src:"https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"}),children:(0,n.jsx)(u.x,{c:"dimmed",size:"sm",children:"Timeline bullet as avatar image"})}),(0,n.jsx)(d.T.Item,{title:"Icon",bullet:(0,n.jsx)(c.Z,{size:"0.8rem"}),children:(0,n.jsx)(u.x,{c:"dimmed",size:"sm",children:"Timeline bullet as icon"})}),(0,n.jsx)(d.T.Item,{title:"ThemeIcon",bullet:(0,n.jsx)(x.k,{size:22,variant:"gradient",gradient:{from:"lime",to:"cyan"},radius:"xl",children:(0,n.jsx)(m,{size:"0.8rem"})}),children:(0,n.jsx)(u.x,{c:"dimmed",size:"sm",children:"Timeline bullet as ThemeIcon component"})})]})},code:`
import { ThemeIcon, Text, Avatar, Timeline } from '@mantine/core';
import { IconSun, IconVideo } from '@tabler/icons-react';

function Demo() {
  return (
    <Timeline bulletSize={24}>
      <Timeline.Item title="Default bullet">
        <Text c="dimmed" size="sm">
          Default bullet without anything
        </Text>
      </Timeline.Item>
      <Timeline.Item
        title="Avatar"
        bullet={
          <Avatar
            size={22}
            radius="xl"
            src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
          />
        }
      >
        <Text c="dimmed" size="sm">
          Timeline bullet as avatar image
        </Text>
      </Timeline.Item>
      <Timeline.Item title="Icon" bullet={<IconSun size="0.8rem" />}>
        <Text c="dimmed" size="sm">
          Timeline bullet as icon
        </Text>
      </Timeline.Item>
      <Timeline.Item
        title="ThemeIcon"
        bullet={
          <ThemeIcon
            size={22}
            variant="gradient"
            gradient={{ from: 'lime', to: 'cyan' }}
            radius="xl"
          >
            <IconVideo size="0.8rem" />
          </ThemeIcon>
        }
      >
        <Text c="dimmed" size="sm">
          Timeline bullet as ThemeIcon component
        </Text>
      </Timeline.Item>
    </Timeline>
  );
}
`};var v=i(25071),T=i(15019);let g=(0,v.A)(T.us.Timeline);function f(e){let t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components},{Demo:i}=t;return i||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(i,{data:a}),"\n",(0,n.jsx)(t.h2,{id:"line-and-bullet-props",children:"Line and bullet props"}),"\n",(0,n.jsx)(t.p,{children:"Control timeline appearance with the following props:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"active"})," – index of current active element, all elements before this index will be highlighted with ",(0,n.jsx)(t.code,{children:"color"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"color"})," – color from theme that should be used to highlight active items, defaults to ",(0,n.jsx)(t.code,{children:"theme.primaryColor"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"lineWidth"})," – controls line width and bullet border"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"bulletSize"})," – bullet width, height and border-radius"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"align"})," – defines line and bullets position relative to content, also sets text-align"]}),"\n"]}),"\n",(0,n.jsx)(i,{data:s.g}),"\n",(0,n.jsx)(t.h2,{id:"bullet-as-react-node",children:"Bullet as React node"}),"\n",(0,n.jsx)(i,{data:p}),"\n",(0,n.jsx)(t.h2,{id:"wrap-timelineitem",children:"Wrap Timeline.Item"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Timeline"})," component relies on ",(0,n.jsx)(t.code,{children:"Timeline.Item"})," order. Wrapping ",(0,n.jsx)(t.code,{children:"Timeline.Item"})," is not supported,\nInstead you will need to use different approaches:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:'import { Timeline } from \'@mantine/core\';\n\n// This will not work, step children will not render\nfunction WillNotWork() {\n  return <Timeline.Item title="Nope">It will not work</Timeline.Item>;\n}\n\n// Create a separate component for children\nfunction WillWork() {\n  return <div>This will work as expected!</div>;\n}\n\nfunction Demo() {\n  return (\n    <Timeline active={1}>\n      <Timeline.Item title="Regular item">First item</Timeline.Item>\n      <WillNotWork />\n      <Timeline.Item title="Works as expected">\n        <WillWork />\n      </Timeline.Item>\n      <Timeline.Item title="Regular item">Third item</Timeline.Item>\n    </Timeline>\n  );\n}\n'})})]})}function b(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(g,{...e,children:(0,n.jsx)(f,{...e})})}},97742:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});/**
 * @license @tabler/icons-react v3.3.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var n=(0,i(73681).Z)("outline","git-branch","IconGitBranch",[["path",{d:"M7 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-0"}],["path",{d:"M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-1"}],["path",{d:"M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-2"}],["path",{d:"M7 8l0 8",key:"svg-3"}],["path",{d:"M9 18h6a2 2 0 0 0 2 -2v-5",key:"svg-4"}],["path",{d:"M14 14l3 -3l3 3",key:"svg-5"}]])},40258:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});/**
 * @license @tabler/icons-react v3.3.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var n=(0,i(73681).Z)("outline","git-commit","IconGitCommit",[["path",{d:"M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",key:"svg-0"}],["path",{d:"M12 3l0 6",key:"svg-1"}],["path",{d:"M12 15l0 6",key:"svg-2"}]])},41711:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});/**
 * @license @tabler/icons-react v3.3.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var n=(0,i(73681).Z)("outline","git-pull-request","IconGitPullRequest",[["path",{d:"M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-0"}],["path",{d:"M6 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-1"}],["path",{d:"M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-2"}],["path",{d:"M6 8l0 8",key:"svg-3"}],["path",{d:"M11 6h5a2 2 0 0 1 2 2v8",key:"svg-4"}],["path",{d:"M14 9l-3 -3l3 -3",key:"svg-5"}]])},84126:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});/**
 * @license @tabler/icons-react v3.3.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var n=(0,i(73681).Z)("outline","message-dots","IconMessageDots",[["path",{d:"M12 11v.01",key:"svg-0"}],["path",{d:"M8 11v.01",key:"svg-1"}],["path",{d:"M16 11v.01",key:"svg-2"}],["path",{d:"M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3z",key:"svg-3"}]])},92448:function(e,t,i){"use strict";i.d(t,{g:function(){return o}});var n=i(52322),l=i(28559),r=i(64170);let o={type:"configurator",component:function(e){return(0,n.jsx)(l.x,{maw:320,mx:"auto",children:(0,n.jsx)(r.i,{noIcon:!0,...e})})},code:`
import { Timeline } from '@mantine/core';

function Demo() {
  return (
    <Timeline{{props}}>
      {/* items */}
    </Timeline>
  );
}
`,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"active",type:"number",initialValue:1,libraryValue:null,min:-1,max:3},{prop:"reverseActive",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"lineWidth",type:"number",initialValue:4,libraryValue:4,min:1,max:6},{prop:"bulletSize",type:"number",initialValue:25,libraryValue:20,min:18,max:40,step:1},{prop:"align",type:"segmented",data:[{label:"Left",value:"left"},{label:"Right",value:"right"}],initialValue:"left",libraryValue:"left"}]}},64170:function(e,t,i){"use strict";i.d(t,{i:function(){return m}});var n=i(52322),l=i(97742),r=i(40258),o=i(41711),a=i(84126),s=i(84786),c=i(8582);function m({noIcon:e,...t}){let i=!e;return(0,n.jsxs)(s.T,{active:1,bulletSize:24,lineWidth:2,...t,children:[(0,n.jsxs)(s.T.Item,{bullet:i?(0,n.jsx)(l.Z,{size:"0.8rem"}):null,title:"New branch",children:[(0,n.jsxs)(c.x,{c:"dimmed",size:"sm",children:["You've created new branch"," ",(0,n.jsx)(c.x,{variant:"link",component:"span",inherit:!0,children:"fix-notifications"})," ","from master"]}),(0,n.jsx)(c.x,{size:"xs",mt:4,children:"2 hours ago"})]}),(0,n.jsxs)(s.T.Item,{bullet:i?(0,n.jsx)(r.Z,{size:"0.8rem"}):null,title:"Commits",children:[(0,n.jsxs)(c.x,{c:"dimmed",size:"sm",children:["You've pushed 23 commits to"," ",(0,n.jsx)(c.x,{variant:"link",component:"span",inherit:!0,children:"fix-notifications"})," ","branch"]}),(0,n.jsx)(c.x,{size:"xs",mt:4,children:"52 minutes ago"})]}),(0,n.jsxs)(s.T.Item,{title:"Pull request",bullet:i?(0,n.jsx)(o.Z,{size:"0.8rem"}):null,lineVariant:"dashed",children:[(0,n.jsxs)(c.x,{c:"dimmed",size:"sm",children:["You've submitted a pull request"," ",(0,n.jsx)(c.x,{variant:"link",component:"span",inherit:!0,children:"Fix incorrect notification message (#187)"})," "]}),(0,n.jsx)(c.x,{size:"xs",mt:4,children:"34 minutes ago"})]}),(0,n.jsxs)(s.T.Item,{title:"Code review",bullet:i?(0,n.jsx)(a.Z,{size:"0.8rem"}):null,children:[(0,n.jsxs)(c.x,{c:"dimmed",size:"sm",children:[(0,n.jsx)(c.x,{variant:"link",component:"span",inherit:!0,children:"Robert Gluesticker"})," ","left a code review on your pull request"]}),(0,n.jsx)(c.x,{size:"xs",mt:4,children:"12 minutes ago"})]})]})}},82067:function(e,t,i){"use strict";i.d(t,{q:function(){return I}});var n=i(52322),l=i(2784),r=i(91482),o=i(11200),a=i(38483),s=i(46690),c=i(28559),m=i(33502),d=i(82027);let u=(0,l.createContext)(null),h=u.Provider;var x={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};let p={},v=(0,o.Z)((e,{spacing:t})=>({group:{"--ag-spacing":(0,r.bG)(t)}})),T=(0,d.d5)((e,t)=>{let i=(0,a.w)("AvatarGroup",p,e),{classNames:l,className:r,style:o,styles:m,unstyled:d,vars:u,spacing:T,...g}=i,f=(0,s.y)({name:"AvatarGroup",classes:x,props:i,className:r,style:o,classNames:l,styles:m,unstyled:d,vars:u,varsResolver:v,rootSelector:"group"});return(0,n.jsx)(h,{value:!0,children:(0,n.jsx)(c.x,{ref:t,...f("group"),...g})})});function g(e){return(0,n.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}function f(e,t=2){let i=e.split(" ");return 1===i.length?e.slice(0,t).toUpperCase():i.map(e=>e[0]).slice(0,t).join("").toUpperCase()}T.classes=x,T.displayName="@mantine/core/AvatarGroup";let b=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],j={},y=(0,o.Z)((e,{size:t,radius:i,variant:n,gradient:l,color:o,autoContrast:a,name:s,allowedInitialsColors:c})=>{let m="initials"===o&&"string"==typeof s?function(e,t=b){let i=Math.abs(function(e){let t=0;for(let i=0;i<e.length;i+=1)t=(t<<5)-t+e.charCodeAt(i)|0;return t}(f(e)))%t.length;return t[i]}(s,c):o,d=e.variantColorResolver({color:m||"gray",theme:e,gradient:l,variant:n||"light",autoContrast:a});return{root:{"--avatar-size":(0,r.ap)(t,"avatar-size"),"--avatar-radius":void 0===i?void 0:(0,r.H5)(i),"--avatar-bg":m||n?d.background:void 0,"--avatar-color":m||n?d.color:void 0,"--avatar-bd":m||n?d.border:void 0}}}),I=(0,m.b)((e,t)=>{let i=(0,a.w)("Avatar",j,e),{classNames:r,className:o,style:m,styles:d,unstyled:h,vars:p,src:v,alt:T,radius:b,color:I,gradient:z,imageProps:w,children:k,autoContrast:C,mod:M,name:_,allowedInitialsColors:Z,...V}=i,G={withinGroup:!!(0,l.useContext)(u)},[A,N]=(0,l.useState)(!v),R=(0,s.y)({name:"Avatar",props:i,classes:x,className:o,style:m,classNames:r,styles:d,unstyled:h,vars:p,varsResolver:y});return(0,l.useEffect)(()=>N(!v),[v]),(0,n.jsx)(c.x,{...R("root"),mod:[{"within-group":G.withinGroup},M],ref:t,...V,children:A?(0,n.jsx)("span",{...R("placeholder"),title:T,children:k||"string"==typeof _&&f(_)||(0,n.jsx)(g,{})}):(0,n.jsx)("img",{...w,...R("image"),src:v,alt:T,onError:e=>{N(!0),w?.onError?.(e)}})})});I.classes=x,I.displayName="@mantine/core/Avatar",I.Group=T},67925:function(e,t,i){"use strict";i.d(t,{k:function(){return h}});var n=i(52322);i(2784);var l=i(91482),r=i(11200),o=i(38483),a=i(46690),s=i(28559),c=i(82027),m={root:"m_7341320d"};let d={},u=(0,r.Z)((e,{size:t,radius:i,variant:n,gradient:r,color:o,autoContrast:a})=>{let s=e.variantColorResolver({color:o||e.primaryColor,theme:e,gradient:r,variant:n||"filled",autoContrast:a});return{root:{"--ti-size":(0,l.ap)(t,"ti-size"),"--ti-radius":void 0===i?void 0:(0,l.H5)(i),"--ti-bg":o||n?s.background:void 0,"--ti-color":o||n?s.color:void 0,"--ti-bd":o||n?s.border:void 0}}}),h=(0,c.d5)((e,t)=>{let i=(0,o.w)("ThemeIcon",d,e),{classNames:l,className:r,style:c,styles:h,unstyled:x,vars:p,autoContrast:v,...T}=i,g=(0,a.y)({name:"ThemeIcon",classes:m,props:i,className:r,style:c,classNames:l,styles:h,unstyled:x,vars:p,varsResolver:u});return(0,n.jsx)(s.x,{ref:t,...g("root"),...T})});h.classes=m,h.displayName="@mantine/core/ThemeIcon"},84786:function(e,t,i){"use strict";i.d(t,{T:function(){return I}});var n=i(52322),l=i(2784),r=i(58898),o=i(91482),a=i(11200),s=i(13588),c=i(39568),m=i(90006),d=i(38483),u=i(46690),h=i(28559),x=i(82027);let[p,v]=(0,i(89106).R)("Timeline component was not found in tree");var T=i(68755),g={root:"m_43657ece",itemTitle:"m_2ebe8099",item:"m_436178ff",itemBullet:"m_8affcee1",itemBody:"m_540e8f41"};let f={},b=(0,x.d5)((e,t)=>{let{classNames:i,className:l,style:r,styles:a,vars:c,__active:m,__align:u,__lineActive:x,__vars:p,bullet:g,radius:b,color:j,lineVariant:y,children:I,title:z,mod:w,...k}=(0,d.w)("TimelineItem",f,e),C=v(),M=(0,T.rZ)(),_={classNames:i,styles:a};return(0,n.jsxs)(h.x,{...C.getStyles("item",{..._,className:l,style:r}),mod:[{"line-active":x,active:m},w],ref:t,__vars:{"--tli-radius":b?(0,o.H5)(b):void 0,"--tli-color":j?(0,s.p)(j,M):void 0,"--tli-border-style":y||void 0},...k,children:[(0,n.jsx)(h.x,{...C.getStyles("itemBullet",_),mod:{"with-child":!!g,align:u,active:m},children:g}),(0,n.jsxs)("div",{...C.getStyles("itemBody",_),children:[z&&(0,n.jsx)("div",{...C.getStyles("itemTitle",_),children:z}),(0,n.jsx)("div",{...C.getStyles("itemContent",_),children:I})]})]})});b.classes=g,b.displayName="@mantine/core/TimelineItem";let j={active:-1,align:"left",reverseActive:!1},y=(0,a.Z)((e,{bulletSize:t,lineWidth:i,radius:n,color:l,autoContrast:a})=>({root:{"--tl-bullet-size":(0,r.h)(t),"--tl-line-width":(0,r.h)(i),"--tl-radius":void 0===n?void 0:(0,o.H5)(n),"--tl-color":l?(0,s.p)(l,e):void 0,"--tl-icon-color":(0,m.o)(a,e)?(0,c.R)({color:l,theme:e,autoContrast:a}):void 0}})),I=(0,x.d5)((e,t)=>{let i=(0,d.w)("Timeline",j,e),{classNames:r,className:o,style:a,styles:s,unstyled:c,vars:m,children:x,active:v,color:T,radius:f,bulletSize:b,align:I,lineWidth:z,reverseActive:w,mod:k,autoContrast:C,...M}=i,_=(0,u.y)({name:"Timeline",classes:g,props:i,className:o,style:a,classNames:r,styles:s,unstyled:c,vars:m,varsResolver:y}),Z=l.Children.toArray(x),V=Z.map((e,t)=>(0,l.cloneElement)(e,{unstyled:c,__align:I,__active:e.props?.active||(w?v>=Z.length-t-1:v>=t),__lineActive:e.props?.lineActive||(w?v>=Z.length-t-1:v-1>=t)}));return(0,n.jsx)(p,{value:{getStyles:_},children:(0,n.jsx)(h.x,{..._("root"),mod:[{align:I},k],ref:t,...M,children:V})})});I.classes=g,I.displayName="@mantine/core/Timeline",I.Item=b}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=91083)}),_N_E=e.O()}]);