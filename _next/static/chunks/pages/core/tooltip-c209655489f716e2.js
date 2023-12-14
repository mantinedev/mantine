(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8096],{84231:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/tooltip",function(){return o(86777)}])},86777:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return F}});var n=o(24246),r=o(71670),i=o(27378),l=o(99684),a=o(8671);let s=`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip">
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
`,c={type:"code",component:function(){return i.createElement(l.u,{label:"Tooltip"},i.createElement(a.z,null,"Button with tooltip"))},centered:!0,code:s},p=`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip"{{props}}>
      <Button>With tooltip</Button>
    </Tooltip>
  );
}
`,d={type:"configurator",component:function(e){return i.createElement(l.u,{label:"Tooltip",...e},i.createElement(a.z,null,"With tooltip"))},code:p,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"__none__"}]};var u=o(67240);let h=`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip" opened{{props}}>
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
`,m={type:"configurator",component:function(e){return i.createElement(l.u,{label:"Tooltip",opened:!0,...e},i.createElement(a.z,null,"Button with tooltip"))},code:h,centered:!0,controls:[{type:"select",prop:"position",initialValue:"top",data:u.c,libraryValue:null},{type:"number",prop:"offset",initialValue:5,libraryValue:null,min:-50,max:50}]},f={type:"configurator",component:function(e){return i.createElement(l.u,{position:e.position,opened:!0,label:"Tooltip",offset:{mainAxis:e.mainAxis,crossAxis:e.crossAxis}},i.createElement(a.z,null,"Button with tooltip"))},code:e=>`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip
      position="${e.position}"
      opened
      label="Tooltip"
      offset={{ mainAxis: ${e.mainAxis}, crossAxis: ${e.crossAxis} }}
    >
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
`,centered:!0,controls:[{type:"select",prop:"position",initialValue:"top",data:u.c,libraryValue:null},{type:"number",prop:"mainAxis",initialValue:5,libraryValue:null,min:-50,max:50},{type:"number",prop:"crossAxis",initialValue:0,libraryValue:null,min:-50,max:50}]},b=`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip{{props}} label="Tooltip" withArrow opened position="top-start">
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
`,x={type:"configurator",component:function(e){return i.createElement(l.u,{label:"Tooltip",withArrow:!0,opened:!0,position:"top-start",...e},i.createElement(a.z,null,"Button with tooltip"))},code:b,centered:!0,controls:[{type:"segmented",prop:"arrowPosition",initialValue:"center",libraryValue:"center",data:["center","side"]},{type:"number",prop:"arrowOffset",initialValue:10,libraryValue:null,min:5,max:50},{type:"number",prop:"arrowSize",initialValue:4,libraryValue:null,min:2,max:8},{type:"number",prop:"arrowRadius",initialValue:0,libraryValue:0,min:0,max:10}]},g=`
import { useState } from 'react';
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(true);

  return (
    <Tooltip label="Ctrl + J" opened={opened}>
      <Button onClick={() => setOpened((o) => !o)}>
        Toggle color scheme
      </Button>
    </Tooltip>
  );
}`,T={type:"code",centered:!0,code:g,component:function(){let[e,t]=(0,i.useState)(!1);return i.createElement(l.u,{label:"Ctrl + J",opened:e},i.createElement(a.z,{onClick:()=>t(e=>!e)},"Toggle color scheme"))}},w=`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip
      multiline
      w={220}
      withArrow
      transitionProps={{ duration: 200 }}
      label="Use this button to save this information in your profile, after that you will be able to access it any time and share it via email."
    >
      <Button>Multiline tooltip</Button>
    </Tooltip>
  );
}
`,j={type:"code",code:w,centered:!0,component:function(){return i.createElement(l.u,{multiline:!0,w:220,withArrow:!0,transitionProps:{duration:200},label:"Use this button to save this information in your profile, after that you will be able to access it any time and share it via email."},i.createElement(a.z,null,"Multiline tooltip"))}};var Text=o(26569),y=o(20804);let v=`
import { Tooltip, Mark, Text } from '@mantine/core';

function Demo() {
  return (
    <Text>
      Stantler\u2019s magnificent antlers were traded at high prices as works of art. As a result, this
      Pok\xe9mon was hunted close to extinction by those who were after the priceless antlers.{' '}
      <Tooltip inline label="Inline tooltip">
        <Mark>When visiting a junkyard</Mark>
      </Tooltip>
      , you may catch sight of it having an intense fight with Murkrow over shiny objects.Ho-Oh\u2019s
      feathers glow in seven colors depending on the angle at which they are struck by light. These
      feathers are said to bring happiness to the bearers. This Pok\xe9mon is said to live at the foot
      of a rainbow.
    </Text>
  );
}
`,B={type:"code",component:function(){return i.createElement(Text.x,null,"Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this Pok\xe9mon was hunted close to extinction by those who were after the priceless antlers."," ",i.createElement(l.u,{inline:!0,label:"Inline tooltip"},i.createElement(y.v,null,"When visiting a junkyard")),", you may catch sight of it having an intense fight with Murkrow over shiny objects.Ho-Oh’s feathers glow in seven colors depending on the angle at which they are struck by light. These feathers are said to bring happiness to the bearers. This Pok\xe9mon is said to live at the foot of a rainbow.")},code:v};var E=o(64470),D=o(22971);let k=`
import { Button, Tooltip, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Tooltip label="Opened after 500ms" openDelay={500}>
        <Button>Delay open - 500ms</Button>
      </Tooltip>
      <Tooltip label="Closes after 500ms" closeDelay={500}>
        <Button>Delay close - 500ms</Button>
      </Tooltip>
    </Group>
  );
}
`,A={type:"code",code:k,component:function(){return i.createElement(D.Z,{justify:"center"},i.createElement(l.u,{label:"Opened after 500ms",openDelay:500},i.createElement(a.z,null,"Delay open - 500ms")),i.createElement(l.u,{label:"Closes after 500ms",closeDelay:500},i.createElement(a.z,null,"Delay close - 500ms")))}},C=`
import { Tooltip, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Tooltip.Group openDelay={500} closeDelay={100}>
      <Group justify="center">
        <Tooltip label="Tooltip 1">
          <Button>Button 1</Button>
        </Tooltip>
        <Tooltip label="Tooltip 2">
          <Button>Button 2</Button>
        </Tooltip>
        <Tooltip label="Tooltip 3">
          <Button>Button 3</Button>
        </Tooltip>
      </Group>
    </Tooltip.Group>
  );
}
`,M={type:"code",component:function(){return i.createElement(l.u.Group,{openDelay:500,closeDelay:100},i.createElement(D.Z,{justify:"center"},i.createElement(l.u,{label:"Tooltip 1"},i.createElement(a.z,null,"Button 1")),i.createElement(l.u,{label:"Tooltip 2"},i.createElement(a.z,null,"Button 2")),i.createElement(l.u,{label:"Tooltip 3"},i.createElement(a.z,null,"Button 3"))))},code:C};var O=o(56589);let N=`
import { Box, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip.Floating label="Floating tooltip">
      <Box p="xl" bg="var(--mantine-color-blue-light)" style={{ cursor: 'default' }}>
        Hover over the box to see tooltip
      </Box>
    </Tooltip.Floating>
  );
}
`,R={type:"code",component:function(){return i.createElement(l.u.Floating,{label:"Floating tooltip"},i.createElement(O.x,{p:"xl",bg:"var(--mantine-color-blue-light)",style:{cursor:"default"}},"Hover over the box to see tooltip"))},code:N,centered:!0};var V=o(3916),P=o(30289);let _=(0,V.A)(P.us.Tooltip);function z(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Demo:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(o,{data:c}),"\n",(0,n.jsx)(t.h2,{id:"tooltip-children",children:"Tooltip children"}),"\n",(0,n.jsxs)(t.p,{children:["Tooltip requires an element or a component as a single child –\nstrings, fragments, numbers and multiple elements/components are not supported and ",(0,n.jsx)(t.strong,{children:"will throw error"}),".\nCustom components must provide a prop to get root element ref,\nall Mantine components support ref out of the box."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:'import { Badge, Tooltip } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <>\n      <Tooltip label="OK">\n        <button>Native button – ok</button>\n      </Tooltip>\n\n      <Tooltip label="OK">\n        <Badge>Mantine component – ok</Badge>\n      </Tooltip>\n\n      <Tooltip label="Throws">\n        Raw string, NOT OK – will throw error\n      </Tooltip>\n\n      {/* Number, NOT OK – will throw error */}\n      <Tooltip label="Throws">{2}</Tooltip>\n\n      <Tooltip label="Throws">\n        <>Fragment, NOT OK, will throw error</>\n      </Tooltip>\n\n      <Tooltip label="Throws">\n        <div>More that one node</div>\n        <div>NOT OK, will throw error</div>\n      </Tooltip>\n    </>\n  );\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"required-ref-prop",children:"Required ref prop"}),"\n",(0,n.jsxs)(t.p,{children:["Custom components that are rendered inside ",(0,n.jsx)(t.code,{children:"Tooltip"})," are required to support ",(0,n.jsx)(t.code,{children:"ref"})," prop:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"// Example of code that WILL NOT WORK\nimport { Tooltip } from '@mantine/core';\n\nfunction MyComponent() {\n  return <div>My component</div>;\n}\n\n// This will not work – MyComponent does not support ref\nfunction Demo() {\n  return (\n    <Tooltip label=\"Does not work\">\n      <MyComponent />\n    </Tooltip>\n  );\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Use ",(0,n.jsx)(t.code,{children:"forwardRef"})," function to forward ref to root element:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"// Example of code that will work\nimport { forwardRef } from 'react';\nimport { Tooltip } from '@mantine/core';\n\nconst MyComponent = forwardRef<HTMLDivElement>((props, ref) => (\n  <div ref={ref} {...props}>\n    My component\n  </div>\n));\n\n// Works correctly – ref is forwarded\nfunction Demo() {\n  return (\n    <Tooltip label=\"Works fine\">\n      <MyComponent />\n    </Tooltip>\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"color",children:"Color"}),"\n",(0,n.jsx)(o,{data:d}),"\n",(0,n.jsx)(t.h2,{id:"offset",children:"Offset"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"offset"})," prop to a number to change tooltip position relative to the target element.\nThis way you can control tooltip offset on main axis only."]}),"\n",(0,n.jsx)(o,{data:m}),"\n",(0,n.jsxs)(t.p,{children:["To control offset on both axis, pass object with ",(0,n.jsx)(t.code,{children:"mainAxis"})," and ",(0,n.jsx)(t.code,{children:"crossAxis"})," properties:"]}),"\n",(0,n.jsx)(o,{data:f}),"\n",(0,n.jsx)(t.h2,{id:"arrow",children:"Arrow"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"withArrow"})," prop to add an arrow to the tooltip. Arrow is a ",(0,n.jsx)(t.code,{children:"div"})," element rotated with ",(0,n.jsx)(t.code,{children:"transform: rotate(45deg)"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"arrowPosition"})," prop determines how arrow is position relative to the target element when ",(0,n.jsx)(t.code,{children:"position"})," is set to ",(0,n.jsx)(t.code,{children:"*-start"})," and ",(0,n.jsx)(t.code,{children:"*-end"})," values on ",(0,n.jsx)(t.code,{children:"Popover"})," component.\nBy default, the value is ",(0,n.jsx)(t.code,{children:"center"})," – the arrow is positioned in the center of the target element if it is possible."]}),"\n",(0,n.jsxs)(t.p,{children:["If you change ",(0,n.jsx)(t.code,{children:"arrowPosition"})," to ",(0,n.jsx)(t.code,{children:"side"}),", then the arrow will be positioned on the side of the target element,\nand you will be able to control arrow offset with ",(0,n.jsx)(t.code,{children:"arrowOffset"})," prop. Note that when ",(0,n.jsx)(t.code,{children:"arrowPosition"})," is set to ",(0,n.jsx)(t.code,{children:"center"}),",\n",(0,n.jsx)(t.code,{children:"arrowOffset"})," prop is ignored."]}),"\n",(0,n.jsx)(o,{data:x}),"\n",(0,n.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsx)(o,{data:T}),"\n",(0,n.jsx)(t.h2,{id:"change-events",children:"Change events"}),"\n",(0,n.jsxs)(t.p,{children:["Events that trigger tooltip can be changed with ",(0,n.jsx)(t.code,{children:"events"})," prop, it accepts an object\nwith the following properties that determine which events will trigger tooltip:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"hover"})," – mouse hover event, ",(0,n.jsx)(t.code,{children:"true"})," by default"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"focus"})," – focus/blur events excluding clicks on the target element, ",(0,n.jsx)(t.code,{children:"false"})," by default"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"touch"})," – events for touchscreen devices, ",(0,n.jsx)(t.code,{children:"false"})," by default"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { Tooltip } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Tooltip\n      label=\"Tooltip\"\n      events={{ hover: true, focus: true, touch: false }}\n    >\n      <button>target</button>\n    </Tooltip>\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"multiline",children:"Multiline"}),"\n",(0,n.jsxs)(t.p,{children:["To enable multiline mode, set ",(0,n.jsx)(t.code,{children:"multiline"})," prop to enable line breaks and ",(0,n.jsx)(t.code,{children:"w"})," ",(0,n.jsx)(t.a,{href:"/styles/style-props",children:"style prop"})," to set tooltip width:"]}),"\n",(0,n.jsx)(o,{data:j}),"\n",(0,n.jsx)(t.h2,{id:"inline",children:"Inline"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"inline"})," prop to use ",(0,n.jsx)(t.code,{children:"Tooltip"})," with inline elements:"]}),"\n",(0,n.jsx)(o,{data:B}),"\n",(0,n.jsx)(t.h2,{id:"change-transition",children:"Change transition"}),"\n",(0,n.jsxs)(t.p,{children:["Tooltip is built with ",(0,n.jsx)(t.a,{href:"/core/transition/",children:"Transition"})," component, it supports ",(0,n.jsx)(t.code,{children:"transitionProps"})," props:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { Button, Tooltip } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Tooltip\n      label=\"Tooltip with custom transition\"\n      transitionProps={{ transition: 'skew-up', duration: 300 }}\n    >\n      <Button>Button with tooltip</Button>\n    </Tooltip>\n  );\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"All available premade transitions:"}),"\n",(0,n.jsx)(o,{data:E.p}),"\n",(0,n.jsx)(t.h2,{id:"close-and-open-delay",children:"Close and open delay"}),"\n",(0,n.jsxs)(t.p,{children:["You can delay tooltip open/close events by setting ",(0,n.jsx)(t.code,{children:"openDelay"})," and ",(0,n.jsx)(t.code,{children:"closeDelay"})," props in ms:"]}),"\n",(0,n.jsx)(o,{data:A}),"\n",(0,n.jsx)(t.h2,{id:"tooltip-delay-group",children:"Tooltip delay group"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Tooltip.Group"})," component can be used to sync open and close delays for multiple tooltips:"]}),"\n",(0,n.jsx)(o,{data:M}),"\n",(0,n.jsx)(t.h2,{id:"floating-tooltip",children:"Floating tooltip"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Tooltip.Floating"})," component has the same API as Tooltip component but tooltip will follow mouse:"]}),"\n",(0,n.jsx)(o,{data:R}),"\n",(0,n.jsx)(t.h2,{id:"custom-components-with-tooltip",children:"Custom components with Tooltip"}),"\n",(0,n.jsxs)(t.p,{children:["If you want to build a component that can be used with Tooltip use\n",(0,n.jsx)(t.a,{href:"https://reactjs.org/docs/forwarding-refs.html",children:"forwardRef"})," or other prop that will allow to get root element ref.\nThis logic is applied to Tooltip and Tooltip.Floating components:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:'import { forwardRef } from \'react\';\nimport { Tooltip } from \'@mantine/core\';\n\n// forwardRef function will allow to get root element ref\nconst MyBadge = forwardRef<HTMLDivElement, { color: string }>(\n  ({ color }, ref) => (\n    <div ref={ref} color={color}>\n      Badge\n    </div>\n  )\n);\n\n// other props can also be used\nfunction MyOtherBadge({\n  color,\n  innerRef,\n}: {\n  color: string;\n  innerRef?: React.ForwardedRef<HTMLDivElement>;\n}) {\n  return (\n    <div ref={innerRef} color={color}>\n      Badge\n    </div>\n  );\n}\n\nfunction Demo() {\n  return (\n    <>\n      <Tooltip label="Can be used as is">\n        <MyBadge color="red" />\n      </Tooltip>\n\n      <Tooltip label="refProp is required" refProp="innerRef">\n        <MyOtherBadge color="orange" />\n      </Tooltip>\n    </>\n  );\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsxs)(t.p,{children:["Tooltip follows ",(0,n.jsx)(t.a,{href:"https://www.w3.org/TR/wai-aria-practices/#tooltip",children:"WAI-ARIA recommendations"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Tooltip body has ",(0,n.jsx)(t.code,{children:'role="tooltip"'})," attribute"]}),"\n",(0,n.jsxs)(t.li,{children:["Target element has ",(0,n.jsx)(t.code,{children:"aria-describedby"})," attribute"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Tooltip.Floating"})," is ignored by screen readers"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["By default, Tooltip is not triggered by focus events and thus users who use a screen reader\nor navigate with keyboard will not be able to get tooltip content. Set ",(0,n.jsx)(t.code,{children:"events"})," prop to enable\nfocus/blur tooltip events:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { Button, Tooltip } from '@mantine/core';\n\n// Tooltip will be visible for screen readers\nfunction Demo() {\n  return (\n    <Tooltip\n      label=\"Tooltip\"\n      events={{ hover: true, focus: true, touch: false }}\n    >\n      <Button>Button with tooltip</Button>\n    </Tooltip>\n  );\n}\n"})})]})}function F(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(_,{...e,children:(0,n.jsx)(z,{...e})})}},64470:function(e,t,o){"use strict";o.d(t,{p:function(){return c}});var n=o(27378),r=o(53007),i=o(34296),l=o(99684),a=o(73988),s=o(22971);let c={type:"code",component:function(){let e=(0,r.X)(i.p).map(e=>n.createElement(l.u,{key:e,label:e,transitionProps:{transition:e,duration:300}},n.createElement(a.C,{variant:"light"},e)));return n.createElement(s.Z,{justify:"center",style:{cursor:"default"}},e)}}},67240:function(e,t,o){"use strict";o.d(t,{M:function(){return r},c:function(){return n}});let n=[{label:"top",value:"top"},{label:"top-start",value:"top-start"},{label:"top-end",value:"top-end"},{label:"left",value:"left"},{label:"left-start",value:"left-start"},{label:"left-end",value:"left-end"},{label:"right",value:"right"},{label:"right-start",value:"right-start"},{label:"right-end",value:"right-end"},{label:"bottom",value:"bottom"},{label:"bottom-start",value:"bottom-start"},{label:"bottom-end",value:"bottom-end"}],r=[{label:"side",value:"side"},{label:"center",value:"center"}]},73988:function(e,t,o){"use strict";o.d(t,{C:function(){return m}});var n=o(27378),r=o(92082),i=o(83453),l=o(89738),a=o(96739),s=o(6231),c=o(56589),p=o(50332),d={root:"m-347db0ec","root--dot":"m-fbd81e3d",label:"m-5add502a",section:"m-91fdda9b"};let u={},h=(0,i.Z)((e,{radius:t,color:o,gradient:n,variant:i,size:a})=>{let s=e.variantColorResolver({color:o||e.primaryColor,theme:e,gradient:n,variant:i||"filled"});return{root:{"--badge-height":(0,r.ap)(a,"badge-height"),"--badge-padding-x":(0,r.ap)(a,"badge-padding-x"),"--badge-fz":(0,r.ap)(a,"badge-fz"),"--badge-radius":void 0===t?void 0:(0,r.H5)(t),"--badge-bg":o||i?s.background:void 0,"--badge-color":o||i?s.color:void 0,"--badge-bd":o||i?s.border:void 0,"--badge-dot-color":"dot"===i?(0,l.p)(o,e):void 0}}}),m=(0,p.b)((e,t)=>{let o=(0,a.w)("Badge",u,e),{classNames:r,className:i,style:l,styles:p,unstyled:m,vars:f,radius:b,color:x,gradient:g,leftSection:T,rightSection:w,children:j,variant:y,fullWidth:v,...B}=o,E=(0,s.y)({name:"Badge",props:o,classes:d,className:i,style:l,classNames:r,styles:p,unstyled:m,vars:f,varsResolver:h});return n.createElement(c.x,{variant:y,mod:{block:v},...E("root",{variant:y}),ref:t,...B},T&&n.createElement("span",{...E("section"),"data-position":"left"},T),n.createElement("span",{...E("label")},j),w&&n.createElement("span",{...E("section"),"data-position":"right"},w))});m.classes=d,m.displayName="@mantine/core/Badge"}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=84231)}),_N_E=e.O()}]);