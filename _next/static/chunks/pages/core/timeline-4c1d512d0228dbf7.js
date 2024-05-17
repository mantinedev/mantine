(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[12962],{91083:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/timeline",function(){return t(15511)}])},15511:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return b}});var n=t(52322),l=t(45392),r=t(28559),o=t(64170);let s={type:"code",component:function(){return(0,n.jsx)(r.x,{maw:320,mx:"auto",children:(0,n.jsx)(o.i,{})})},code:`
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
`};var a=t(92448),c=t(90664),m=(0,t(73681).Z)("outline","video","IconVideo",[["path",{d:"M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z",key:"svg-0"}],["path",{d:"M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z",key:"svg-1"}]]),d=t(84786),u=t(8582),h=t(47100),x=t(67925);let p={type:"code",centered:!0,maxWidth:320,component:function(){return(0,n.jsxs)(d.T,{bulletSize:24,children:[(0,n.jsx)(d.T.Item,{title:"Default bullet",children:(0,n.jsx)(u.x,{c:"dimmed",size:"sm",children:"Default bullet without anything"})}),(0,n.jsx)(d.T.Item,{title:"Avatar",bullet:(0,n.jsx)(h.q,{size:22,radius:"xl",src:"https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"}),children:(0,n.jsx)(u.x,{c:"dimmed",size:"sm",children:"Timeline bullet as avatar image"})}),(0,n.jsx)(d.T.Item,{title:"Icon",bullet:(0,n.jsx)(c.Z,{size:"0.8rem"}),children:(0,n.jsx)(u.x,{c:"dimmed",size:"sm",children:"Timeline bullet as icon"})}),(0,n.jsx)(d.T.Item,{title:"ThemeIcon",bullet:(0,n.jsx)(x.k,{size:22,variant:"gradient",gradient:{from:"lime",to:"cyan"},radius:"xl",children:(0,n.jsx)(m,{size:"0.8rem"})}),children:(0,n.jsx)(u.x,{c:"dimmed",size:"sm",children:"Timeline bullet as ThemeIcon component"})})]})},code:`
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
`};var v=t(25071),T=t(15019);let f=(0,v.A)(T.us.Timeline);function g(e){let i={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components},{Demo:t}=i;return t||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t,{data:s}),"\n",(0,n.jsx)(i.h2,{id:"line-and-bullet-props",children:"Line and bullet props"}),"\n",(0,n.jsx)(i.p,{children:"Control timeline appearance with the following props:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"active"})," – index of current active element, all elements before this index will be highlighted with ",(0,n.jsx)(i.code,{children:"color"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"color"})," – color from theme that should be used to highlight active items, defaults to ",(0,n.jsx)(i.code,{children:"theme.primaryColor"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"lineWidth"})," – controls line width and bullet border"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"bulletSize"})," – bullet width, height and border-radius"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"align"})," – defines line and bullets position relative to content, also sets text-align"]}),"\n"]}),"\n",(0,n.jsx)(t,{data:a.g}),"\n",(0,n.jsx)(i.h2,{id:"bullet-as-react-node",children:"Bullet as React node"}),"\n",(0,n.jsx)(t,{data:p}),"\n",(0,n.jsx)(i.h2,{id:"wrap-timelineitem",children:"Wrap Timeline.Item"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"Timeline"})," component relies on ",(0,n.jsx)(i.code,{children:"Timeline.Item"})," order. Wrapping ",(0,n.jsx)(i.code,{children:"Timeline.Item"})," is not supported,\nInstead you will need to use different approaches:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-tsx",children:'import { Timeline } from \'@mantine/core\';\n\n// This will not work, step children will not render\nfunction WillNotWork() {\n  return <Timeline.Item title="Nope">It will not work</Timeline.Item>;\n}\n\n// Create a separate component for children\nfunction WillWork() {\n  return <div>This will work as expected!</div>;\n}\n\nfunction Demo() {\n  return (\n    <Timeline active={1}>\n      <Timeline.Item title="Regular item">First item</Timeline.Item>\n      <WillNotWork />\n      <Timeline.Item title="Works as expected">\n        <WillWork />\n      </Timeline.Item>\n      <Timeline.Item title="Regular item">Third item</Timeline.Item>\n    </Timeline>\n  );\n}\n'})})]})}function b(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(f,{...e,children:(0,n.jsx)(g,{...e})})}},97742:function(e,i,t){"use strict";t.d(i,{Z:function(){return n}});/**
 * @license @tabler/icons-react v3.3.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var n=(0,t(73681).Z)("outline","git-branch","IconGitBranch",[["path",{d:"M7 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-0"}],["path",{d:"M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-1"}],["path",{d:"M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-2"}],["path",{d:"M7 8l0 8",key:"svg-3"}],["path",{d:"M9 18h6a2 2 0 0 0 2 -2v-5",key:"svg-4"}],["path",{d:"M14 14l3 -3l3 3",key:"svg-5"}]])},40258:function(e,i,t){"use strict";t.d(i,{Z:function(){return n}});/**
 * @license @tabler/icons-react v3.3.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var n=(0,t(73681).Z)("outline","git-commit","IconGitCommit",[["path",{d:"M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",key:"svg-0"}],["path",{d:"M12 3l0 6",key:"svg-1"}],["path",{d:"M12 15l0 6",key:"svg-2"}]])},41711:function(e,i,t){"use strict";t.d(i,{Z:function(){return n}});/**
 * @license @tabler/icons-react v3.3.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var n=(0,t(73681).Z)("outline","git-pull-request","IconGitPullRequest",[["path",{d:"M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-0"}],["path",{d:"M6 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-1"}],["path",{d:"M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-2"}],["path",{d:"M6 8l0 8",key:"svg-3"}],["path",{d:"M11 6h5a2 2 0 0 1 2 2v8",key:"svg-4"}],["path",{d:"M14 9l-3 -3l3 -3",key:"svg-5"}]])},84126:function(e,i,t){"use strict";t.d(i,{Z:function(){return n}});/**
 * @license @tabler/icons-react v3.3.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var n=(0,t(73681).Z)("outline","message-dots","IconMessageDots",[["path",{d:"M12 11v.01",key:"svg-0"}],["path",{d:"M8 11v.01",key:"svg-1"}],["path",{d:"M16 11v.01",key:"svg-2"}],["path",{d:"M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3z",key:"svg-3"}]])},92448:function(e,i,t){"use strict";t.d(i,{g:function(){return o}});var n=t(52322),l=t(28559),r=t(64170);let o={type:"configurator",component:function(e){return(0,n.jsx)(l.x,{maw:320,mx:"auto",children:(0,n.jsx)(r.i,{noIcon:!0,...e})})},code:`
import { Timeline } from '@mantine/core';

function Demo() {
  return (
    <Timeline{{props}}>
      {/* items */}
    </Timeline>
  );
}
`,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"active",type:"number",initialValue:1,libraryValue:null,min:-1,max:3},{prop:"reverseActive",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"lineWidth",type:"number",initialValue:4,libraryValue:4,min:1,max:6},{prop:"bulletSize",type:"number",initialValue:25,libraryValue:20,min:18,max:40,step:1},{prop:"align",type:"segmented",data:[{label:"Left",value:"left"},{label:"Right",value:"right"}],initialValue:"left",libraryValue:"left"}]}},64170:function(e,i,t){"use strict";t.d(i,{i:function(){return m}});var n=t(52322),l=t(97742),r=t(40258),o=t(41711),s=t(84126),a=t(84786),c=t(8582);function m({noIcon:e,...i}){let t=!e;return(0,n.jsxs)(a.T,{active:1,bulletSize:24,lineWidth:2,...i,children:[(0,n.jsxs)(a.T.Item,{bullet:t?(0,n.jsx)(l.Z,{size:"0.8rem"}):null,title:"New branch",children:[(0,n.jsxs)(c.x,{c:"dimmed",size:"sm",children:["You've created new branch"," ",(0,n.jsx)(c.x,{variant:"link",component:"span",inherit:!0,children:"fix-notifications"})," ","from master"]}),(0,n.jsx)(c.x,{size:"xs",mt:4,children:"2 hours ago"})]}),(0,n.jsxs)(a.T.Item,{bullet:t?(0,n.jsx)(r.Z,{size:"0.8rem"}):null,title:"Commits",children:[(0,n.jsxs)(c.x,{c:"dimmed",size:"sm",children:["You've pushed 23 commits to"," ",(0,n.jsx)(c.x,{variant:"link",component:"span",inherit:!0,children:"fix-notifications"})," ","branch"]}),(0,n.jsx)(c.x,{size:"xs",mt:4,children:"52 minutes ago"})]}),(0,n.jsxs)(a.T.Item,{title:"Pull request",bullet:t?(0,n.jsx)(o.Z,{size:"0.8rem"}):null,lineVariant:"dashed",children:[(0,n.jsxs)(c.x,{c:"dimmed",size:"sm",children:["You've submitted a pull request"," ",(0,n.jsx)(c.x,{variant:"link",component:"span",inherit:!0,children:"Fix incorrect notification message (#187)"})," "]}),(0,n.jsx)(c.x,{size:"xs",mt:4,children:"34 minutes ago"})]}),(0,n.jsxs)(a.T.Item,{title:"Code review",bullet:t?(0,n.jsx)(s.Z,{size:"0.8rem"}):null,children:[(0,n.jsxs)(c.x,{c:"dimmed",size:"sm",children:[(0,n.jsx)(c.x,{variant:"link",component:"span",inherit:!0,children:"Robert Gluesticker"})," ","left a code review on your pull request"]}),(0,n.jsx)(c.x,{size:"xs",mt:4,children:"12 minutes ago"})]})]})}},47100:function(e,i,t){"use strict";t.d(i,{q:function(){return j}});var n=t(52322),l=t(2784),r=t(91482),o=t(11200),s=t(38483),a=t(46690),c=t(28559),m=t(33502),d=t(82027);let u=(0,l.createContext)(null),h=u.Provider;var x={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};let p={},v=(0,o.Z)((e,{spacing:i})=>({group:{"--ag-spacing":(0,r.bG)(i)}})),T=(0,d.d)((e,i)=>{let t=(0,s.w)("AvatarGroup",p,e),{classNames:l,className:r,style:o,styles:m,unstyled:d,vars:u,spacing:T,...f}=t,g=(0,a.y)({name:"AvatarGroup",classes:x,props:t,className:r,style:o,classNames:l,styles:m,unstyled:d,vars:u,varsResolver:v,rootSelector:"group"});return(0,n.jsx)(h,{value:!0,children:(0,n.jsx)(c.x,{ref:i,...g("group"),...f})})});function f(e){return(0,n.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}T.classes=x,T.displayName="@mantine/core/AvatarGroup";let g={},b=(0,o.Z)((e,{size:i,radius:t,variant:n,gradient:l,color:o,autoContrast:s})=>{let a=e.variantColorResolver({color:o||"gray",theme:e,gradient:l,variant:n||"light",autoContrast:s});return{root:{"--avatar-size":(0,r.ap)(i,"avatar-size"),"--avatar-radius":void 0===t?void 0:(0,r.H5)(t),"--avatar-bg":o||n?a.background:void 0,"--avatar-color":o||n?a.color:void 0,"--avatar-bd":o||n?a.border:void 0}}}),j=(0,m.b)((e,i)=>{let t=(0,s.w)("Avatar",g,e),{classNames:r,className:o,style:m,styles:d,unstyled:h,vars:p,src:v,alt:T,radius:j,color:I,gradient:y,imageProps:z,children:w,autoContrast:k,mod:C,..._}=t,M={withinGroup:!!(0,l.useContext)(u)},[Z,V]=(0,l.useState)(!v),G=(0,a.y)({name:"Avatar",props:t,classes:x,className:o,style:m,classNames:r,styles:d,unstyled:h,vars:p,varsResolver:b});return(0,l.useEffect)(()=>V(!v),[v]),(0,n.jsx)(c.x,{...G("root"),mod:[{"within-group":M.withinGroup},C],ref:i,..._,children:Z?(0,n.jsx)("span",{...G("placeholder"),title:T,children:w||(0,n.jsx)(f,{})}):(0,n.jsx)("img",{...z,...G("image"),src:v,alt:T,onError:e=>{V(!0),z?.onError?.(e)}})})});j.classes=x,j.displayName="@mantine/core/Avatar",j.Group=T},67925:function(e,i,t){"use strict";t.d(i,{k:function(){return h}});var n=t(52322);t(2784);var l=t(91482),r=t(11200),o=t(38483),s=t(46690),a=t(28559),c=t(82027),m={root:"m_7341320d"};let d={},u=(0,r.Z)((e,{size:i,radius:t,variant:n,gradient:r,color:o,autoContrast:s})=>{let a=e.variantColorResolver({color:o||e.primaryColor,theme:e,gradient:r,variant:n||"filled",autoContrast:s});return{root:{"--ti-size":(0,l.ap)(i,"ti-size"),"--ti-radius":void 0===t?void 0:(0,l.H5)(t),"--ti-bg":o||n?a.background:void 0,"--ti-color":o||n?a.color:void 0,"--ti-bd":o||n?a.border:void 0}}}),h=(0,c.d)((e,i)=>{let t=(0,o.w)("ThemeIcon",d,e),{classNames:l,className:r,style:c,styles:h,unstyled:x,vars:p,autoContrast:v,...T}=t,f=(0,s.y)({name:"ThemeIcon",classes:m,props:t,className:r,style:c,classNames:l,styles:h,unstyled:x,vars:p,varsResolver:u});return(0,n.jsx)(a.x,{ref:i,...f("root"),...T})});h.classes=m,h.displayName="@mantine/core/ThemeIcon"},84786:function(e,i,t){"use strict";t.d(i,{T:function(){return y}});var n=t(52322),l=t(2784),r=t(58898),o=t(91482),s=t(11200),a=t(13588),c=t(39568),m=t(90006),d=t(38483),u=t(46690),h=t(28559),x=t(82027);let[p,v]=(0,t(89106).R)("Timeline component was not found in tree");var T=t(68755),f={root:"m_43657ece",itemTitle:"m_2ebe8099",item:"m_436178ff",itemBullet:"m_8affcee1",itemBody:"m_540e8f41"};let g={},b=(0,x.d)((e,i)=>{let{classNames:t,className:l,style:r,styles:s,vars:c,__active:m,__align:u,__lineActive:x,__vars:p,bullet:f,radius:b,color:j,lineVariant:I,children:y,title:z,mod:w,...k}=(0,d.w)("TimelineItem",g,e),C=v(),_=(0,T.rZ)(),M={classNames:t,styles:s};return(0,n.jsxs)(h.x,{...C.getStyles("item",{...M,className:l,style:r}),mod:[{"line-active":x,active:m},w],ref:i,__vars:{"--tli-radius":b?(0,o.H5)(b):void 0,"--tli-color":j?(0,a.p)(j,_):void 0,"--tli-border-style":I||void 0},...k,children:[(0,n.jsx)(h.x,{...C.getStyles("itemBullet",M),mod:{"with-child":!!f,align:u,active:m},children:f}),(0,n.jsxs)("div",{...C.getStyles("itemBody",M),children:[z&&(0,n.jsx)("div",{...C.getStyles("itemTitle",M),children:z}),(0,n.jsx)("div",{...C.getStyles("itemContent",M),children:y})]})]})});b.classes=f,b.displayName="@mantine/core/TimelineItem";let j={active:-1,align:"left",reverseActive:!1},I=(0,s.Z)((e,{bulletSize:i,lineWidth:t,radius:n,color:l,autoContrast:s})=>({root:{"--tl-bullet-size":(0,r.h)(i),"--tl-line-width":(0,r.h)(t),"--tl-radius":void 0===n?void 0:(0,o.H5)(n),"--tl-color":l?(0,a.p)(l,e):void 0,"--tl-icon-color":(0,m.o)(s,e)?(0,c.R)({color:l,theme:e}):void 0}})),y=(0,x.d)((e,i)=>{let t=(0,d.w)("Timeline",j,e),{classNames:r,className:o,style:s,styles:a,unstyled:c,vars:m,children:x,active:v,color:T,radius:g,bulletSize:b,align:y,lineWidth:z,reverseActive:w,mod:k,autoContrast:C,..._}=t,M=(0,u.y)({name:"Timeline",classes:f,props:t,className:o,style:s,classNames:r,styles:a,unstyled:c,vars:m,varsResolver:I}),Z=l.Children.toArray(x),V=Z.map((e,i)=>(0,l.cloneElement)(e,{unstyled:c,__align:y,__active:e.props?.active||(w?v>=Z.length-i-1:v>=i),__lineActive:e.props?.lineActive||(w?v>=Z.length-i-1:v-1>=i)}));return(0,n.jsx)(p,{value:{getStyles:M},children:(0,n.jsx)(h.x,{...M("root"),mod:[{align:y},k],ref:i,..._,children:V})})});y.classes=f,y.displayName="@mantine/core/Timeline",y.Item=b}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=91083)}),_N_E=e.O()}]);