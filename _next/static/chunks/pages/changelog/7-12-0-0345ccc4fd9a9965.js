(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[57047],{13255:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-12-0",function(){return n(4666)}])},4666:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var o=n(31085),i=n(71184),s=n(13643),r=n(11417),a=n(18275),l=n(3907),c=n(18675),d=n(20017);let h=(0,c.P)(d.XZ.Changelog7120);function p(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"notifications-at-any-position",children:"Notifications at any position"}),"\n",(0,o.jsxs)(t.p,{children:["It is now possible to display notifications at any position on the screen\nwith ",(0,o.jsx)(t.a,{href:"/x/notifications",children:"@mantine/notifications package"}),":"]}),"\n",(0,o.jsx)(n,{data:s.G}),"\n",(0,o.jsx)(t.h2,{id:"subscribe-to-notifications-state",children:"Subscribe to notifications state"}),"\n",(0,o.jsxs)(t.p,{children:["You can now subscribe to notifications state changes with ",(0,o.jsx)(t.code,{children:"useNotifications"})," hook:"]}),"\n",(0,o.jsx)(n,{data:r.M}),"\n",(0,o.jsx)(t.h2,{id:"semicircleprogress-component",children:"SemiCircleProgress component"}),"\n",(0,o.jsxs)(t.p,{children:["New ",(0,o.jsx)(t.a,{href:"/core/semi-circle-progress",children:"SemiCircleProgress"})," component:"]}),"\n",(0,o.jsx)(n,{data:a.C}),"\n",(0,o.jsx)(t.h2,{id:"tree-checked-state",children:"Tree checked state"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/core/tree",children:"Tree"})," component now supports checked state:"]}),"\n",(0,o.jsx)(n,{data:l.K}),"\n",(0,o.jsx)(t.h2,{id:"disable-specific-features-in-postcss-preset-mantine",children:"Disable specific features in postcss-preset-mantine"}),"\n",(0,o.jsxs)(t.p,{children:["You can now disable specific features of the ",(0,o.jsx)(t.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"}),"\nby setting them to ",(0,o.jsx)(t.code,{children:"false"})," in the configuration object. This feature is available starting from\n",(0,o.jsx)(t.code,{children:"postcss-preset-mantine@1.17.0"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"module.exports = {\n  'postcss-preset-mantine': {\n    features: {\n      // Turn off `light-dark` function\n      lightDarkFunction: false,\n\n      // Turn off `postcss-nested` plugin\n      nested: false,\n\n      // Turn off `lighten`, `darken` and `alpha` functions\n      colorMixAlpha: false,\n\n      // Turn off `rem` and `em` functions\n      remEmFunctions: false,\n\n      // Turn off `postcss-mixins` plugin\n      mixins: false,\n    },\n  },\n};\n"})}),"\n",(0,o.jsx)(t.h2,{id:"help-center-updates",children:"Help Center updates"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://help.mantine.dev/q/server-components",children:"Server components guide"})," has been updated to include ",(0,o.jsx)(t.code,{children:"Component.extend"})," usage in server components."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://help.mantine.dev/q/input-focus-styles",children:"A guide on applying input focus styles"})," has been updated to work correctly with ",(0,o.jsx)(t.a,{href:"/core/password-input",children:"PasswordInput"})," and other components in which the ",(0,o.jsx)(t.code,{children:"input"})," selector is not used for actual input element."]}),"\n",(0,o.jsxs)(t.li,{children:["The guide on ",(0,o.jsx)(t.a,{href:"https://help.mantine.dev/q/disable-all-inputs-in-form",children:"how to disable all inputs in the form"})," now includes additional instructions for ",(0,o.jsx)(t.a,{href:"/form/use-form",children:"use-form"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["New ",(0,o.jsx)(t.a,{href:"https://help.mantine.dev/q/light-dark-is-not-enough",children:"Can I have color schemes other than light and dark?"})," guide explains the difference between color scheme and theme and why Mantine does not support custom color schemes."]}),"\n",(0,o.jsxs)(t.li,{children:["New ",(0,o.jsx)(t.a,{href:"https://help.mantine.dev/q/why-vscode-cannot-autoimport-text",children:"Why VSCode cannot autoimport Text component?"})," guide explains why VSCode cannot automatically import ",(0,o.jsx)(t.code,{children:"Text"})," component."]}),"\n",(0,o.jsxs)(t.li,{children:["New ",(0,o.jsx)(t.a,{href:"https://help.mantine.dev/q/are-mantine-components-accessible",children:"Are Mantine components accessible?"})," question"]}),"\n",(0,o.jsxs)(t.li,{children:["New ",(0,o.jsx)(t.a,{href:"https://help.mantine.dev/q/focus-first-input-with-error",children:"How can I focus the first input with error with use-form?"})," question"]}),"\n",(0,o.jsxs)(t.li,{children:["New ",(0,o.jsx)(t.a,{href:"https://help.mantine.dev/q/scroll-to-the-top-of-the-form",children:"How to scroll to the top of the form if the form is submitted with errors?"})," question"]}),"\n",(0,o.jsxs)(t.li,{children:["New ",(0,o.jsx)(t.a,{href:"https://help.mantine.dev/q/notifications-missing-styles",children:"Why my notifications are displayed at a wrong position?"})," question"]}),"\n",(0,o.jsxs)(t.li,{children:["New ",(0,o.jsx)(t.a,{href:"https://help.mantine.dev/q/notifications-empty-screen",children:"Why my screen is completely empty after I've added notifications package?"})," question"]}),"\n",(0,o.jsxs)(t.li,{children:["New ",(0,o.jsx)(t.a,{href:"https://help.mantine.dev/q/autocomplete-value-label",children:"Why can I not use value/label data structure with Autocomplete/TagsInput?"})," question"]}),"\n",(0,o.jsxs)(t.li,{children:["New ",(0,o.jsx)(t.a,{href:"https://help.mantine.dev/q/file-button-in-menu",children:"Why FileButton does not work in Menu?"})," question"]}),"\n",(0,o.jsxs)(t.li,{children:["New ",(0,o.jsx)(t.a,{href:"https://help.mantine.dev/q/light-dark-elements",children:"How can I display different elements in light and dark color schemes?"})," question"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/hooks/use-interval",children:"use-interval"})," hook now supports ",(0,o.jsx)(t.code,{children:"autoInvoke"})," option to start the interval automatically when the component mounts."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/form/use-form",children:"use-form"})," with ",(0,o.jsx)(t.code,{children:'mode="uncontrolled"'})," now triggers additional rerender when dirty state changes to allow subscribing to form state changes."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/core/scroll-area",children:"ScrollArea"})," component now supports ",(0,o.jsx)(t.code,{children:"onTopReached"})," and ",(0,o.jsx)(t.code,{children:"onBottomReached"})," props. The functions are called when the user scrolls to the top or bottom of the scroll area."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/core/accordion",children:"Accordion.Panel"})," component now supports ",(0,o.jsx)(t.code,{children:"onTransitionEnd"})," prop that is called when the panel animation completes."]}),"\n"]})]})}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(h,{...e,children:(0,o.jsx)(p,{...e})})}},18275:(e,t,n)=>{"use strict";n.d(t,{C:()=>s});var o=n(31085),i=n(69633);let s={type:"configurator",component:function(e){return(0,o.jsx)(i.A,{label:"Label",...e})},code:`
import { SemiCircleProgress } from '@mantine/core';


function Demo() {
  return (
    <SemiCircleProgress
      {{props}}
      label="Label"
    />
  );
}
`,centered:!0,controls:[{type:"segmented",prop:"fillDirection",initialValue:"left-to-right",data:[{label:"Right to left",value:"right-to-left"},{label:"Left to right",value:"left-to-right"}],libraryValue:null},{type:"segmented",prop:"orientation",initialValue:"up",data:[{label:"Up",value:"up"},{label:"Down",value:"down"}],libraryValue:null},{type:"color",prop:"filledSegmentColor",initialValue:"blue",libraryValue:null},{type:"number",prop:"size",min:120,max:450,initialValue:200,libraryValue:null},{type:"number",prop:"thickness",min:1,max:20,initialValue:12,libraryValue:null},{type:"number",prop:"value",min:0,max:100,initialValue:40,libraryValue:null}]}},3907:(e,t,n)=>{"use strict";n.d(t,{K:()=>d});var o=n(31085),i=n(24551),s=n(56051),r=n(87858),a=n(70781),l=n(41507);let c=({node:e,expanded:t,hasChildren:n,elementProps:a,tree:l})=>{let c=l.isNodeChecked(e.value),d=l.isNodeIndeterminate(e.value);return(0,o.jsxs)(s.Y,{gap:"xs",...a,children:[(0,o.jsx)(r.S.Indicator,{checked:c,indeterminate:d,onClick:()=>c?l.uncheckNode(e.value):l.checkNode(e.value)}),(0,o.jsxs)(s.Y,{gap:5,onClick:()=>l.toggleExpanded(e.value),children:[(0,o.jsx)("span",{children:e.label}),n&&(0,o.jsx)(i.A,{size:14,style:{transform:t?"rotate(180deg)":"rotate(0deg)"}})]})]})},d={type:"code",component:function(){return(0,o.jsx)(a.P,{data:l.p,levelOffset:23,expandOnClick:!1,renderNode:c})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { IconChevronDown } from '@tabler/icons-react';
import { Checkbox, Group, RenderTreeNodePayload, Tree } from '@mantine/core';
import { data } from './data';

const renderTreeNode = ({
  node,
  expanded,
  hasChildren,
  elementProps,
  tree,
}: RenderTreeNodePayload) => {
  const checked = tree.isNodeChecked(node.value);
  const indeterminate = tree.isNodeIndeterminate(node.value);

  return (
    <Group gap="xs" {...elementProps}>
      <Checkbox.Indicator
        checked={checked}
        indeterminate={indeterminate}
        onClick={() => (!checked ? tree.checkNode(node.value) : tree.uncheckNode(node.value))}
      />

      <Group gap={5} onClick={() => tree.toggleExpanded(node.value)}>
        <span>{node.label}</span>

        {hasChildren && (
          <IconChevronDown
            size={14}
            style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
          />
        )}
      </Group>
    </Group>
  );
};

function Demo() {
  return <Tree data={data} levelOffset={23} expandOnClick={false} renderNode={renderTreeNode} />;
}
`},{fileName:"data.ts",language:"tsx",code:l.k}]}},13643:(e,t,n)=>{"use strict";n.d(t,{G:()=>l});var o=n(31085),i=n(52022),s=n(56051),r=n(48727);let a=["top-left","top-right","bottom-left","bottom-right","top-center","bottom-center"],l={type:"code",code:`
import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

const positions = [
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
  'top-center',
  'bottom-center',
] as const;

function Demo() {
  const buttons = positions.map((position) => (
    <Button
      key={position}
      onClick={() =>
        notifications.show({
          title: \`Notification at \${position}\`,
          message: \`Notification at \${position} message\`,
          position,
        })
      }
    >
      {position}
    </Button>
  ));

  return <Group>{buttons}</Group>;
}`,centered:!0,component:function(){let e=a.map(e=>(0,o.jsx)(i.$,{onClick:()=>r.$e.show({title:`Notification at ${e}`,message:`Notification at ${e} message`,position:e}),children:e},e));return(0,o.jsx)(s.Y,{children:e})}}},11417:(e,t,n)=>{"use strict";n.d(t,{M:()=>c});var o=n(31085),i=n(52022),s=n(93065),r=n(37905),a=n(89939),l=n(48727);let c={type:"code",code:`
function Demo() {
  const [counter, { increment }] = useCounter();
  const notificationsStore = useNotifications();

  const showNotification = () => {
    notifications.show({
      title: \`Notification \${counter}\`,
      message: 'Most notifications are added to queue',
    });

    increment();
  };

  return (
    <>
      <Button onClick={showNotification} mb="md">
        Show notification
      </Button>

      <Text>Notifications state</Text>
      <Code block>{JSON.stringify(notificationsStore.notifications, null, 2)}</Code>

      <Text mt="md">Notifications queue</Text>
      <Code block>{JSON.stringify(notificationsStore.queue, null, 2)}</Code>
    </>
  );
}`,component:function(){let[e,{increment:t}]=(0,a.I)(),n=(0,l.E$)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.$,{onClick:()=>{l.$e.show({title:`Notification ${e}`,message:"Most notifications are added to queue"}),t()},mb:"md",children:"Show notification"}),(0,o.jsx)(s.E,{children:"Notifications state"}),(0,o.jsx)(r.C,{block:!0,children:JSON.stringify(n.notifications,null,2)}),(0,o.jsx)(s.E,{mt:"md",children:"Notifications queue"}),(0,o.jsx)(r.C,{block:!0,children:JSON.stringify(n.queue,null,2)})]})}}},69633:(e,t,n)=>{"use strict";n.d(t,{A:()=>f});var o=n(31085),i=n(68193),s=n(39735);n(14041);var r=n(7098),a=n(51606),l=n(29686),c=n(69564),d=n(34056),h=n(6754),p={root:"m_fa528724",svg:"m_62e9e7e2",filledSegment:"m_c573fb6f",label:"m_4fa340f2"};let u={size:200,thickness:12,orientation:"up",fillDirection:"left-to-right",labelPosition:"bottom"},m=(0,r.V)((e,{filledSegmentColor:t,emptySegmentColor:n,orientation:o,fillDirection:i,transitionDuration:r,thickness:l})=>({root:{"--scp-filled-segment-color":t?(0,a.r)(t,e):void 0,"--scp-empty-segment-color":n?(0,a.r)(n,e):void 0,"--scp-rotation":function({orientation:e,fillDirection:t}){return"down"===e?"right-to-left"===t?"rotate(180deg) rotateY(180deg)":"rotate(180deg)":"left-to-right"===t?"rotateY(180deg)":void 0}({orientation:o,fillDirection:i}),"--scp-transition-duration":r?`${r}ms`:void 0,"--scp-thickness":(0,s.D)(l)}})),f=(0,h.P9)((e,t)=>{let n=(0,l.Y)("SemiCircleProgress",u,e),{classNames:s,className:r,style:a,styles:h,unstyled:f,vars:x,size:g,thickness:j,value:b,orientation:w,fillDirection:k,filledSegmentColor:y,emptySegmentColor:v,transitionDuration:N,label:C,labelPosition:q,attributes:S,...T}=n,P=(0,c.I)({name:"SemiCircleProgress",classes:p,props:n,className:r,style:a,classNames:s,styles:h,unstyled:f,attributes:S,vars:x,varsResolver:m}),I=g/2,D=(g-2*j)/2,_=Math.PI*D,V=(0,i.q)(b,0,100)*(_/100);return(0,o.jsxs)(d.a,{ref:t,size:g,...P("root"),...T,children:[C&&(0,o.jsx)("p",{...P("label"),"data-position":q,"data-orientation":w,children:C}),(0,o.jsxs)("svg",{width:g,height:g/2,...P("svg"),children:[(0,o.jsx)("circle",{cx:I,cy:I,r:D,fill:"none",stroke:"var(--scp-empty-segment-color)",strokeWidth:j,strokeDasharray:_,...P("emptySegment",{style:{strokeDashoffset:_}})}),(0,o.jsx)("circle",{cx:I,cy:I,r:D,fill:"none",stroke:"var(--scp-filled-segment-color)",strokeWidth:j,strokeDasharray:_,...P("filledSegment",{style:{strokeDashoffset:V}})})]})]})});f.displayName="@mantine/core/SemiCircleProgress",f.classes=p},89939:(e,t,n)=>{"use strict";n.d(t,{I:()=>r});var o=n(14041),i=n(68193);let s={min:-1/0,max:1/0};function r(e=0,t){let{min:n,max:a}={...s,...t},[l,c]=(0,o.useState)((0,i.q)(e,n,a)),d=(0,o.useCallback)(()=>c(e=>(0,i.q)(e+1,n,a)),[n,a]);return[l,{increment:d,decrement:(0,o.useCallback)(()=>c(e=>(0,i.q)(e-1,n,a)),[n,a]),set:(0,o.useCallback)(e=>c((0,i.q)(e,n,a)),[n,a]),reset:(0,o.useCallback)(()=>c((0,i.q)(e,n,a)),[e,n,a])}]}}},e=>{var t=t=>e(e.s=t);e.O(0,[18675,82383,90636,46593,38792],()=>t(13255)),_N_E=e.O()}]);