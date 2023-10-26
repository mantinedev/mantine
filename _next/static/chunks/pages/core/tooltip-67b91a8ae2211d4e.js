(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8096],{33507:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},92446:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/tooltip",function(){return o(78819)}])},78819:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return er}});var n=o(85893),r=o(11151),i=o(19905),l=o(9904),a=o(67294),s=o(46842),c=o(14469);let p=`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip">
      <Button variant="outline">Button with tooltip</Button>
    </Tooltip>
  );
}
`,d={type:"code",component:function(){return a.createElement(s.u,{label:"Tooltip"},a.createElement(c.z,{variant:"outline"},"Button with tooltip"))},centered:!0,code:p};var u=Object.defineProperty,h=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,b=(e,t,o)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,g=(e,t)=>{for(var o in t||(t={}))m.call(t,o)&&b(e,o,t[o]);if(h)for(var o of h(t))f.call(t,o)&&b(e,o,t[o]);return e};let v=`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip"{{props}}>
      <Button variant="outline">
        With tooltip
      </Button>
    </Tooltip>
  );
}
`,y={type:"configurator",component:function(e){return a.createElement(s.u,g({label:"Tooltip"},e),a.createElement(c.z,{variant:"outline"},"With tooltip"))},code:v,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"__none__"}]};var x=o(13315),w=Object.defineProperty,j=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,k=(e,t,o)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,O=(e,t)=>{for(var o in t||(t={}))T.call(t,o)&&k(e,o,t[o]);if(j)for(var o of j(t))B.call(t,o)&&k(e,o,t[o]);return e};let E=`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip" opened{{props}}>
      <Button variant="outline">Button with tooltip</Button>
    </Tooltip>
  );
}
`,M={type:"configurator",component:function(e){return a.createElement(s.u,O({label:"Tooltip",opened:!0},e),a.createElement(c.z,{variant:"outline"},"Button with tooltip"))},code:E,centered:!0,controls:[{type:"select",prop:"position",initialValue:"top",data:x.c,libraryValue:null},{type:"number",prop:"offset",initialValue:5,libraryValue:null,min:-50,max:50}]},D=e=>`
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
`,P={type:"configurator",component:function(e){return a.createElement(s.u,{position:e.position,opened:!0,label:"Tooltip",offset:{mainAxis:e.mainAxis,crossAxis:e.crossAxis}},a.createElement(c.z,null,"Button with tooltip"))},code:D,centered:!0,controls:[{type:"select",prop:"position",initialValue:"top",data:x.c,libraryValue:null},{type:"number",prop:"mainAxis",initialValue:5,libraryValue:null,min:-50,max:50},{type:"number",prop:"crossAxis",initialValue:0,libraryValue:null,min:-50,max:50}]};var A=Object.defineProperty,C=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,I=(e,t,o)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,V=(e,t)=>{for(var o in t||(t={}))N.call(t,o)&&I(e,o,t[o]);if(C)for(var o of C(t))R.call(t,o)&&I(e,o,t[o]);return e};let Z=`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip{{props}} label="Tooltip" withArrow opened position="top-start">
      <Button variant="outline">Button with tooltip</Button>
    </Tooltip>
  );
}
`,S={type:"configurator",component:function(e){return a.createElement(s.u,V({label:"Tooltip",withArrow:!0,opened:!0,position:"top-start"},e),a.createElement(c.z,{variant:"outline"},"Button with tooltip"))},code:Z,centered:!0,controls:[{type:"segmented",prop:"arrowPosition",initialValue:"center",libraryValue:"center",data:["center","side"]},{type:"number",prop:"arrowOffset",initialValue:10,libraryValue:null,min:5,max:50},{type:"number",prop:"arrowSize",initialValue:4,libraryValue:null,min:2,max:8},{type:"number",prop:"arrowRadius",initialValue:0,libraryValue:0,min:0,max:10}]},z=`
import { useState } from 'react';
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(true);

  return (
    <Tooltip label="Ctrl + J" opened={opened}>
      <Button variant="outline" onClick={() => setOpened((o) => !o)}>
        Toggle color scheme
      </Button>
    </Tooltip>
  );
}`,_={type:"code",centered:!0,code:z,component:function(){let[e,t]=(0,a.useState)(!1);return a.createElement(s.u,{label:"Ctrl + J",opened:e},a.createElement(c.z,{variant:"outline",onClick:()=>t(e=>!e)},"Toggle color scheme"))}},F=`
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
      <Button variant="outline">Multiline tooltip</Button>
    </Tooltip>
  );
}
`,G={type:"code",code:F,centered:!0,component:function(){return a.createElement(s.u,{multiline:!0,w:220,withArrow:!0,transitionProps:{duration:200},label:"Use this button to save this information in your profile, after that you will be able to access it any time and share it via email."},a.createElement(c.z,{variant:"outline"},"Multiline tooltip"))}};var W=o(72039),H=o(16445);let L=`
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
`,K={type:"code",component:function(){return a.createElement(W.x,null,"Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this Pok\xe9mon was hunted close to extinction by those who were after the priceless antlers."," ",a.createElement(s.u,{inline:!0,label:"Inline tooltip"},a.createElement(H.v,null,"When visiting a junkyard")),", you may catch sight of it having an intense fight with Murkrow over shiny objects.Ho-Oh’s feathers glow in seven colors depending on the angle at which they are struck by light. These feathers are said to bring happiness to the bearers. This Pok\xe9mon is said to live at the foot of a rainbow.")},code:L};var q=o(93254),U=o(16262);let X=`
import { Button, Tooltip, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Tooltip label="Opened after 500ms" openDelay={500}>
        <Button variant="outline">Delay open - 500ms</Button>
      </Tooltip>
      <Tooltip label="Closes after 500ms" closeDelay={500}>
        <Button variant="outline">Delay close - 500ms</Button>
      </Tooltip>
    </Group>
  );
}
`,$={type:"code",code:X,component:function(){return a.createElement(U.Z,{justify:"center"},a.createElement(s.u,{label:"Opened after 500ms",openDelay:500},a.createElement(c.z,{variant:"outline"},"Delay open - 500ms")),a.createElement(s.u,{label:"Closes after 500ms",closeDelay:500},a.createElement(c.z,{variant:"outline"},"Delay close - 500ms")))}},J=`
import { Tooltip, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Tooltip.Group openDelay={500} closeDelay={100}>
      <Group justify="center">
        <Tooltip label="Tooltip 1">
          <Button variant="outline">Button 1</Button>
        </Tooltip>
        <Tooltip label="Tooltip 2">
          <Button variant="outline">Button 2</Button>
        </Tooltip>
        <Tooltip label="Tooltip 3">
          <Button variant="outline">Button 3</Button>
        </Tooltip>
      </Group>
    </Tooltip.Group>
  );
}
`,Y={type:"code",component:function(){return a.createElement(s.u.Group,{openDelay:500,closeDelay:100},a.createElement(U.Z,{justify:"center"},a.createElement(s.u,{label:"Tooltip 1"},a.createElement(c.z,{variant:"outline"},"Button 1")),a.createElement(s.u,{label:"Tooltip 2"},a.createElement(c.z,{variant:"outline"},"Button 2")),a.createElement(s.u,{label:"Tooltip 3"},a.createElement(c.z,{variant:"outline"},"Button 3"))))},code:J};var Q=o(81110);let ee=`
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
`,et={type:"code",component:function(){return a.createElement(s.u.Floating,{label:"Floating tooltip"},a.createElement(Q.x,{p:"xl",bg:"var(--mantine-color-blue-light)",style:{cursor:"default"}},"Hover over the box to see tooltip"))},code:ee,centered:!0},eo=(0,i.A)(l.us.Tooltip);function en(e){let t=Object.assign({h2:"h2",p:"p",strong:"strong",pre:"pre",code:"code",ul:"ul",li:"li",a:"a"},(0,r.ah)(),e.components),{Demo:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(o,{data:d}),"\n",(0,n.jsx)(t.h2,{id:"tooltip-children",children:"Tooltip children"}),"\n",(0,n.jsxs)(t.p,{children:["Tooltip requires an element or a component as a single child –\nstrings, fragments, numbers and multiple elements/components are not supported and ",(0,n.jsx)(t.strong,{children:"will throw error"}),".\nCustom components must provide a prop to get root element ref,\nall Mantine components support ref out of the box."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:'import { Tooltip, Badge } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <>\n      <Tooltip label="OK">\n        <button>Native button – ok</button>\n      </Tooltip>\n\n      <Tooltip label="OK">\n        <Badge>Mantine component – ok</Badge>\n      </Tooltip>\n\n      <Tooltip label="Throws">Raw string, NOT OK – will throw error</Tooltip>\n\n      {/* Number, NOT OK – will throw error */}\n      <Tooltip label="Throws">{2}</Tooltip>\n\n      <Tooltip label="Throws">\n        <>Fragment, NOT OK, will throw error</>\n      </Tooltip>\n\n      <Tooltip label="Throws">\n        <div>More that one node</div>\n        <div>NOT OK, will throw error</div>\n      </Tooltip>\n    </>\n  );\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"required-ref-prop",children:"Required ref prop"}),"\n",(0,n.jsxs)(t.p,{children:["Custom components that are rendered inside ",(0,n.jsx)(t.code,{children:"Tooltip"})," are required to support ",(0,n.jsx)(t.code,{children:"ref"})," prop:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"// Example of code that WILL NOT WORK\nimport { Tooltip } from '@mantine/core';\n\nfunction MyComponent() {\n  return <div>My component</div>;\n}\n\n// This will not work – MyComponent does not support ref\nfunction Demo() {\n  return (\n    <Tooltip label=\"Does not work\">\n      <MyComponent />\n    </Tooltip>\n  );\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Use ",(0,n.jsx)(t.code,{children:"forwardRef"})," function to forward ref to root element:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"// Example of code that will work\nimport { forwardRef } from 'react';\nimport { Tooltip } from '@mantine/core';\n\nconst MyComponent = forwardRef<HTMLDivElement>((props, ref) => (\n  <div ref={ref} {...props}>\n    My component\n  </div>\n));\n\n// Works correctly – ref is forwarded\nfunction Demo() {\n  return (\n    <Tooltip label=\"Works fine\">\n      <MyComponent />\n    </Tooltip>\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"color",children:"Color"}),"\n",(0,n.jsx)(o,{data:y}),"\n",(0,n.jsx)(t.h2,{id:"offset",children:"Offset"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"offset"})," prop to a number to change tooltip position relative to the target element.\nThis way you can control tooltip offset on main axis only."]}),"\n",(0,n.jsx)(o,{data:M}),"\n",(0,n.jsxs)(t.p,{children:["To control offset on both axis, pass object with ",(0,n.jsx)(t.code,{children:"mainAxis"})," and ",(0,n.jsx)(t.code,{children:"crossAxis"})," properties:"]}),"\n",(0,n.jsx)(o,{data:P}),"\n",(0,n.jsx)(t.h2,{id:"arrow",children:"Arrow"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"withArrow"})," prop to add an arrow to the tooltip. Arrow is a ",(0,n.jsx)(t.code,{children:"div"})," element rotated with ",(0,n.jsx)(t.code,{children:"transform: rotate(45deg)"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"arrowPosition"})," prop determines how arrow is position relative to the target element when ",(0,n.jsx)(t.code,{children:"position"})," is set to ",(0,n.jsx)(t.code,{children:"*-start"})," and ",(0,n.jsx)(t.code,{children:"*-end"})," values on ",(0,n.jsx)(t.code,{children:"Popover"})," component.\nBy default, the value is ",(0,n.jsx)(t.code,{children:"center"})," – the arrow is positioned in the center of the target element if it is possible."]}),"\n",(0,n.jsxs)(t.p,{children:["If you change ",(0,n.jsx)(t.code,{children:"arrowPosition"})," to ",(0,n.jsx)(t.code,{children:"side"}),", then the arrow will be positioned on the side of the target element,\nand you will be able to control arrow offset with ",(0,n.jsx)(t.code,{children:"arrowOffset"})," prop. Note that when ",(0,n.jsx)(t.code,{children:"arrowPosition"})," is set to ",(0,n.jsx)(t.code,{children:"center"}),",\n",(0,n.jsx)(t.code,{children:"arrowOffset"})," prop is ignored."]}),"\n",(0,n.jsx)(o,{data:S}),"\n",(0,n.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsx)(o,{data:_}),"\n",(0,n.jsx)(t.h2,{id:"change-events",children:"Change events"}),"\n",(0,n.jsxs)(t.p,{children:["Events that trigger tooltip can be changed with ",(0,n.jsx)(t.code,{children:"events"})," prop, it accepts an object\nwith the following properties that determine which events will trigger tooltip:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"hover"})," – mouse hover event, ",(0,n.jsx)(t.code,{children:"true"})," by default"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"focus"})," – focus/blur events excluding clicks on the target element, ",(0,n.jsx)(t.code,{children:"false"})," by default"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"touch"})," – events for touchscreen devices, ",(0,n.jsx)(t.code,{children:"false"})," by default"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { Tooltip } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Tooltip label=\"Tooltip\" events={{ hover: true, focus: true, touch: false }}>\n      <button>target</button>\n    </Tooltip>\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"multiline",children:"Multiline"}),"\n",(0,n.jsxs)(t.p,{children:["To enable multiline mode, set ",(0,n.jsx)(t.code,{children:"multiline"})," prop to enable line breaks and ",(0,n.jsx)(t.code,{children:"w"})," ",(0,n.jsx)(t.a,{href:"/styles/style-props",children:"style prop"})," to set tooltip width:"]}),"\n",(0,n.jsx)(o,{data:G}),"\n",(0,n.jsx)(t.h2,{id:"inline",children:"Inline"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"inline"})," prop to use ",(0,n.jsx)(t.code,{children:"Tooltip"})," with inline elements:"]}),"\n",(0,n.jsx)(o,{data:K}),"\n",(0,n.jsx)(t.h2,{id:"change-transition",children:"Change transition"}),"\n",(0,n.jsxs)(t.p,{children:["Tooltip is built with ",(0,n.jsx)(t.a,{href:"/core/transition/",children:"Transition"})," component, it supports ",(0,n.jsx)(t.code,{children:"transitionProps"})," props:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { Tooltip, Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Tooltip\n      label=\"Tooltip with custom transition\"\n      transitionProps={{ transition: 'skew-up', duration: 300 }}\n    >\n      <Button>Button with tooltip</Button>\n    </Tooltip>\n  );\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"All available premade transitions:"}),"\n",(0,n.jsx)(o,{data:q.p}),"\n",(0,n.jsx)(t.h2,{id:"close-and-open-delay",children:"Close and open delay"}),"\n",(0,n.jsxs)(t.p,{children:["You can delay tooltip open/close events by setting ",(0,n.jsx)(t.code,{children:"openDelay"})," and ",(0,n.jsx)(t.code,{children:"closeDelay"})," props in ms:"]}),"\n",(0,n.jsx)(o,{data:$}),"\n",(0,n.jsx)(t.h2,{id:"tooltip-delay-group",children:"Tooltip delay group"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Tooltip.Group"})," component can be used to sync open and close delays for multiple tooltips:"]}),"\n",(0,n.jsx)(o,{data:Y}),"\n",(0,n.jsx)(t.h2,{id:"floating-tooltip",children:"Floating tooltip"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Tooltip.Floating"})," component has the same API as Tooltip component but tooltip will follow mouse:"]}),"\n",(0,n.jsx)(o,{data:et}),"\n",(0,n.jsx)(t.h2,{id:"custom-components-with-tooltip",children:"Custom components with Tooltip"}),"\n",(0,n.jsxs)(t.p,{children:["If you want to build a component that can be used with Tooltip use\n",(0,n.jsx)(t.a,{href:"https://reactjs.org/docs/forwarding-refs.html",children:"forwardRef"})," or other prop that will allow to get root element ref.\nThis logic is applied to Tooltip and Tooltip.Floating components:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:'import { forwardRef } from \'react\';\nimport { Tooltip } from \'@mantine/core\';\n\n// forwardRef function will allow to get root element ref\nconst MyBadge = forwardRef<HTMLDivElement, { color: string }>(({ color }, ref) => (\n  <div ref={ref} color={color}>\n    Badge\n  </div>\n));\n\n// other props can also be used\nfunction MyOtherBadge({\n  color,\n  innerRef,\n}: {\n  color: string;\n  innerRef?: React.ForwardedRef<HTMLDivElement>;\n}) {\n  return (\n    <div ref={innerRef} color={color}>\n      Badge\n    </div>\n  );\n}\n\nfunction Demo() {\n  return (\n    <>\n      <Tooltip label="Can be used as is">\n        <MyBadge color="red" />\n      </Tooltip>\n\n      <Tooltip label="refProp is required" refProp="innerRef">\n        <MyOtherBadge color="orange" />\n      </Tooltip>\n    </>\n  );\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsxs)(t.p,{children:["Tooltip follows ",(0,n.jsx)(t.a,{href:"https://www.w3.org/TR/wai-aria-practices/#tooltip",children:"WAI-ARIA recommendations"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Tooltip body has ",(0,n.jsx)(t.code,{children:'role="tooltip"'})," attribute"]}),"\n",(0,n.jsxs)(t.li,{children:["Target element has ",(0,n.jsx)(t.code,{children:"aria-describedby"})," attribute"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Tooltip.Floating"})," is ignored by screen readers"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["By default, Tooltip is not triggered by focus events and thus users who use a screen reader\nor navigate with keyboard will not be able to get tooltip content. Set ",(0,n.jsx)(t.code,{children:"events"})," prop to enable\nfocus/blur tooltip events:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { Tooltip, Button } from '@mantine/core';\n\n// Tooltip will be visible for screen readers\nfunction Demo() {\n  return (\n    <Tooltip label=\"Tooltip\" events={{ hover: true, focus: true, touch: false }}>\n      <Button>Button with tooltip</Button>\n    </Tooltip>\n  );\n}\n"})})]})}var er=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(eo,Object.assign({},e,{children:(0,n.jsx)(en,e)}))}},28931:function(e,t,o){"use strict";o.d(t,{C:function(){return B}});var n=o(67294),r={root:"m-347db0ec","root--dot":"m-fbd81e3d",label:"m-5add502a",section:"m-91fdda9b"},i=o(70405),l=o(30370),a=o(86109),s=o(81110),c=o(8586),p=o(48468),d=o(40184),u=Object.defineProperty,h=Object.defineProperties,m=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,v=(e,t,o)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,y=(e,t)=>{for(var o in t||(t={}))b.call(t,o)&&v(e,o,t[o]);if(f)for(var o of f(t))g.call(t,o)&&v(e,o,t[o]);return e},x=(e,t)=>h(e,m(t)),w=(e,t)=>{var o={};for(var n in e)b.call(e,n)&&0>t.indexOf(n)&&(o[n]=e[n]);if(null!=e&&f)for(var n of f(e))0>t.indexOf(n)&&g.call(e,n)&&(o[n]=e[n]);return o};let j={},T=(0,c.Z)((e,{radius:t,color:o,gradient:n,variant:r,size:i})=>{let l=e.variantColorResolver({color:o,theme:e,gradient:n,variant:r||"filled"});return{root:{"--badge-height":(0,p.ap)(i,"badge-height"),"--badge-padding-x":(0,p.ap)(i,"badge-padding-x"),"--badge-fz":(0,p.ap)(i,"badge-fz"),"--badge-radius":void 0===t?void 0:(0,p.H5)(t),"--badge-bg":o||r?l.background:void 0,"--badge-color":o||r?l.color:void 0,"--badge-bd":o||r?l.border:void 0,"--badge-dot-color":"dot"===r?(0,d.p)(o,e):void 0}}}),B=(0,i.b)((e,t)=>{let o=(0,l.w)("Badge",j,e),{classNames:i,className:c,style:p,styles:d,unstyled:u,vars:h,radius:m,color:f,gradient:b,leftSection:g,rightSection:v,children:B,variant:k,fullWidth:O}=o,E=w(o,["classNames","className","style","styles","unstyled","vars","radius","color","gradient","leftSection","rightSection","children","variant","fullWidth"]),M=(0,a.y)({name:"Badge",props:o,classes:r,className:c,style:p,classNames:i,styles:d,unstyled:u,vars:h,varsResolver:T});return n.createElement(s.x,y(x(y({variant:k,mod:{block:O}},M("root",{variant:k})),{ref:t}),E),g&&n.createElement("span",x(y({},M("section")),{"data-position":"left"}),g),n.createElement("span",y({},M("label")),B),v&&n.createElement("span",x(y({},M("section")),{"data-position":"right"}),v))});B.classes=r,B.displayName="@mantine/core/Badge"},93254:function(e,t,o){"use strict";o.d(t,{p:function(){return c}});var n=o(67294),r=o(88313),i=o(14533),l=o(46842),a=o(28931),s=o(16262);let c={type:"code",component:function(){let e=(0,r.X)(i.p).map(e=>n.createElement(l.u,{key:e,label:e,transitionProps:{transition:e,duration:300}},n.createElement(a.C,{variant:"light"},e)));return n.createElement(s.Z,{justify:"center",style:{cursor:"default"}},e)}}},13315:function(e,t,o){"use strict";o.d(t,{M:function(){return r},c:function(){return n}});let n=[{label:"top",value:"top"},{label:"top-start",value:"top-start"},{label:"top-end",value:"top-end"},{label:"left",value:"left"},{label:"left-start",value:"left-start"},{label:"left-end",value:"left-end"},{label:"right",value:"right"},{label:"right-start",value:"right-start"},{label:"right-end",value:"right-end"},{label:"bottom",value:"bottom"},{label:"bottom-start",value:"bottom-start"},{label:"bottom-end",value:"bottom-end"}],r=[{label:"side",value:"side"},{label:"center",value:"center"}]}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=92446)}),_N_E=e.O()}]);