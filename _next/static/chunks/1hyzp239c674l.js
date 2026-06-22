(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var o=Object.defineProperty;e.s(["__exportAll",0,(e,t)=>{let n={};for(var i in e)o(n,i,{get:e[i],enumerable:!0});return t||o(n,Symbol.toStringTag,{value:"Module"}),n}])},257177,e=>{"use strict";var o=e.i(433512),t=e.i(481178),n=e.i(317477),i=e.i(44091),l=e.i(391466),r=e.i(956449),s=e.i(232471),a={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"},p=e.i(391398);let c=(0,t.createVarsResolver)((e,{radius:t,color:i,gradient:l,variant:r,size:s,autoContrast:a,circle:p})=>{let c=e.variantColorResolver({color:i||e.primaryColor,theme:e,gradient:l,variant:r||"filled",autoContrast:a});return{root:{"--badge-height":(0,o.getSize)(s,"badge-height"),"--badge-padding-x":(0,o.getSize)(s,"badge-padding-x"),"--badge-fz":(0,o.getSize)(s,"badge-fz"),"--badge-radius":p||void 0===t?void 0:(0,o.getRadius)(t),"--badge-bg":i||r?c.background:void 0,"--badge-color":i||r?c.color:void 0,"--badge-bd":i||r?c.border:void 0,"--badge-dot-color":"dot"===r?(0,n.getThemeColor)(i,e):void 0}}}),d=(0,r.polymorphicFactory)(e=>{let o=(0,i.useProps)("Badge",null,e),{classNames:t,className:n,style:r,styles:d,unstyled:h,vars:u,radius:m,color:x,gradient:f,leftSection:T,rightSection:b,children:j,variant:g,fullWidth:y,autoContrast:w,circle:v,mod:B,attributes:D,...A}=o,O=(0,l.useStyles)({name:"Badge",props:o,classes:a,className:n,style:r,classNames:t,styles:d,unstyled:h,attributes:D,vars:u,varsResolver:c});return(0,p.jsxs)(s.Box,{variant:g,mod:[{block:y,circle:v,"with-right-section":!!b,"with-left-section":!!T},B],...O("root",{variant:g}),...A,children:[T&&(0,p.jsx)("span",{...O("section"),"data-position":"left",children:T}),(0,p.jsx)("span",{...O("label"),children:j}),b&&(0,p.jsx)("span",{...O("section"),"data-position":"right",children:b})]})});d.classes=a,d.varsResolver=c,d.displayName="@mantine/core/Badge",e.s(["Badge",0,d],257177)},7883,e=>{"use strict";e.s(["FLOATING_ARROW_POSITION_DATA",0,[{label:"side",value:"side"},{label:"center",value:"center"}],"FLOATING_POSITION_DATA",0,[{label:"top",value:"top"},{label:"top-start",value:"top-start"},{label:"top-end",value:"top-end"},{label:"left",value:"left"},{label:"left-start",value:"left-start"},{label:"left-end",value:"left-end"},{label:"right",value:"right"},{label:"right-start",value:"right-start"},{label:"right-end",value:"right-end"},{label:"bottom",value:"bottom"},{label:"bottom-start",value:"bottom-start"},{label:"bottom-end",value:"bottom-end"}]])},165678,e=>{"use strict";var o=e.i(648863),t=e.i(485108),n=e.i(431868),i=e.i(391398);let l={type:"configurator",component:function(e){return(0,i.jsx)(n.Tooltip,{label:"Tooltip",...e,children:(0,i.jsx)(t.Button,{children:"With tooltip"})})},code:`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip"{{props}}>
      <Button>With tooltip</Button>
    </Tooltip>
  );
}
`,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"__none__"}]};var r=e.i(191788);let s={type:"code",centered:!0,code:`
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
}`,component:function(){let[e,o]=(0,r.useState)(!1);return(0,i.jsx)(n.Tooltip,{label:"Ctrl + J",opened:e,children:(0,i.jsx)(t.Button,{onClick:()=>o(e=>!e),children:"Toggle color scheme"})})}},a={type:"configurator",component:function(e){return(0,i.jsx)(n.Tooltip,{label:"Tooltip",withArrow:!0,opened:!0,position:"top-start",...e,children:(0,i.jsx)(t.Button,{children:"Button with tooltip"})})},code:`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip{{props}} label="Tooltip" withArrow opened position="top-start">
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
`,centered:!0,controls:[{type:"segmented",prop:"arrowPosition",initialValue:"center",libraryValue:"center",data:["center","side","merge"]},{type:"number",prop:"arrowOffset",initialValue:10,libraryValue:null,min:5,max:50},{type:"number",prop:"arrowSize",initialValue:4,libraryValue:null,min:2,max:8},{type:"number",prop:"arrowRadius",initialValue:0,libraryValue:0,min:0,max:10}]},p={type:"code",code:`
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
`,centered:!0,component:function(){return(0,i.jsx)(n.Tooltip,{multiline:!0,w:220,withArrow:!0,transitionProps:{duration:200},label:"Use this button to save this information in your profile, after that you will be able to access it any time and share it via email.",children:(0,i.jsx)(t.Button,{children:"Multiline tooltip"})})}};var c=e.i(257177),d=e.i(725695),h=e.i(412011),h=h,u=e.i(76112);let m={type:"code",component:function(){return(0,i.jsx)(d.Group,{justify:"center",style:{cursor:"default"},children:(0,u.keys)(h.transitions).map(e=>(0,i.jsx)(n.Tooltip,{label:e,transitionProps:{transition:e,duration:300},children:(0,i.jsx)(c.Badge,{variant:"light",children:e})},e))})}},x={type:"code",code:`
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
`,component:function(){return(0,i.jsxs)(d.Group,{justify:"center",children:[(0,i.jsx)(n.Tooltip,{label:"Opened after 500ms",openDelay:500,children:(0,i.jsx)(t.Button,{children:"Delay open - 500ms"})}),(0,i.jsx)(n.Tooltip,{label:"Closes after 500ms",closeDelay:500,children:(0,i.jsx)(t.Button,{children:"Delay close - 500ms"})})]})}};var f=e.i(232471);let T={type:"code",component:function(){return(0,i.jsx)(n.Tooltip.Floating,{label:"Floating tooltip",children:(0,i.jsx)(f.Box,{p:"xl",bg:"var(--mantine-color-blue-light)",style:{cursor:"default"},children:"Hover over the box to see tooltip"})})},code:`
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
`,centered:!0},b={type:"code",component:function(){return(0,i.jsx)(n.Tooltip,{label:"Tooltip",children:(0,i.jsx)(t.Button,{children:"Button with tooltip"})})},centered:!0,code:`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip">
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
`},j={type:"code",component:function(){return(0,i.jsx)(n.Tooltip.Group,{openDelay:500,closeDelay:100,children:(0,i.jsxs)(d.Group,{justify:"center",children:[(0,i.jsx)(n.Tooltip,{label:"Tooltip 1",children:(0,i.jsx)(t.Button,{children:"Button 1"})}),(0,i.jsx)(n.Tooltip,{label:"Tooltip 2",children:(0,i.jsx)(t.Button,{children:"Button 2"})}),(0,i.jsx)(n.Tooltip,{label:"Tooltip 3",children:(0,i.jsx)(t.Button,{children:"Button 3"})})]})})},code:`
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
`};var g=e.i(7883);let y={type:"configurator",component:function(e){return(0,i.jsx)(n.Tooltip,{label:"Tooltip",opened:!0,...e,children:(0,i.jsx)(t.Button,{children:"Button with tooltip"})})},code:`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip" opened{{props}}>
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
`,centered:!0,controls:[{type:"select",prop:"position",initialValue:"top",data:g.FLOATING_POSITION_DATA,libraryValue:null},{type:"number",prop:"offset",initialValue:5,libraryValue:null,min:-50,max:50}]};var w=e.i(218262),v=e.i(883364);let B={type:"code",component:function(){return(0,i.jsxs)(v.Text,{children:["Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this Pokémon was hunted close to extinction by those who were after the priceless antlers."," ",(0,i.jsx)(n.Tooltip,{inline:!0,label:"Inline tooltip",children:(0,i.jsx)(w.Mark,{children:"When visiting a junkyard"})}),", you may catch sight of it having an intense fight with Murkrow over shiny objects.Ho-Oh’s feathers glow in seven colors depending on the angle at which they are struck by light. These feathers are said to bring happiness to the bearers. This Pokémon is said to live at the foot of a rainbow."]})},code:`
import { Tooltip, Mark, Text } from '@mantine/core';

function Demo() {
  return (
    <Text>
      Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this
      Pok\xe9mon was hunted close to extinction by those who were after the priceless antlers.{' '}
      <Tooltip inline label="Inline tooltip">
        <Mark>When visiting a junkyard</Mark>
      </Tooltip>
      , you may catch sight of it having an intense fight with Murkrow over shiny objects.Ho-Oh’s
      feathers glow in seven colors depending on the angle at which they are struck by light. These
      feathers are said to bring happiness to the bearers. This Pok\xe9mon is said to live at the foot
      of a rainbow.
    </Text>
  );
}
`},D={type:"code",centered:!0,component:function(){return(0,i.jsx)(n.Tooltip,{label:"top",position:"top",closeDelay:1500,children:(0,i.jsx)(n.Tooltip,{label:"bottom",position:"bottom",openDelay:500,closeDelay:1e3,children:(0,i.jsx)(n.Tooltip,{label:"left",position:"left",openDelay:1e3,closeDelay:500,children:(0,i.jsx)(n.Tooltip,{label:"right",position:"right",openDelay:1500,children:(0,i.jsx)(t.Button,{children:"Nested Tooltips"})})})})})},code:`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="top" position="top" closeDelay={1500}>
      <Tooltip label="bottom" position="bottom" openDelay={500} closeDelay={1000}>
        <Tooltip label="left" position="left" openDelay={1000} closeDelay={500}>
          <Tooltip label="right" position="right" openDelay={1500}>
            <Button>Nested Tooltips</Button>
          </Tooltip>
        </Tooltip>
      </Tooltip>
    </Tooltip>
  );
}
`},A={type:"configurator",component:function(e){return(0,i.jsx)(n.Tooltip,{position:e.position,opened:!0,label:"Tooltip",offset:{mainAxis:e.mainAxis,crossAxis:e.crossAxis},children:(0,i.jsx)(t.Button,{children:"Button with tooltip"})})},code:e=>`
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
`,centered:!0,controls:[{type:"select",prop:"position",initialValue:"top",data:g.FLOATING_POSITION_DATA,libraryValue:null},{type:"number",prop:"mainAxis",initialValue:5,libraryValue:null,min:-50,max:50},{type:"number",prop:"crossAxis",initialValue:0,libraryValue:null,min:-50,max:50}]},O={type:"code",component:function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.Tooltip,{target:"#hover-me",label:"Tooltip over button"}),(0,i.jsx)(t.Button,{id:"hover-me",children:"Hover me to see tooltip"})]})},code:`
import { Button, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <>
      <Tooltip target="#hover-me" label="Tooltip over button" />
      <Button id="hover-me">Hover me to see tooltip</Button>
    </>
  );
}
`,centered:!0};var k=(0,o.__exportAll)({arrow:()=>a,configurator:()=>l,controlled:()=>s,delay:()=>x,floating:()=>T,group:()=>j,inline:()=>B,multiline:()=>p,nested:()=>D,offset:()=>y,offsetAxis:()=>A,target:()=>O,transitions:()=>m,usage:()=>b});e.s(["TooltipDemos",0,k],165678)},55687,e=>{"use strict";var o=e.i(391398),t=e.i(38856),n=e.i(165678);e.i(603441);var i=e.i(62558);e.i(457450);var l=e.i(418026);let r=(0,i.Layout)(l.MDX_DATA.Tooltip);function s(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.useMDXComponents)(),...e.components},{Demo:l}=i;return l||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(l,{data:n.TooltipDemos.usage}),"\n",(0,o.jsx)(i.h2,{id:"tooltip-children",children:"Tooltip children"}),"\n",(0,o.jsxs)(i.p,{children:["Tooltip requires an element or a component as a single child –\nstrings, fragments, numbers and multiple elements/components are not supported and ",(0,o.jsx)(i.strong,{children:"will throw an error"}),".\nCustom components must provide a prop to get the root element ref;\nall Mantine components support ref out of the box."]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-tsx",children:'import { Badge, Tooltip } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <>\n      <Tooltip label="OK">\n        <button>Native button – ok</button>\n      </Tooltip>\n\n      <Tooltip label="OK">\n        <Badge>Mantine component – ok</Badge>\n      </Tooltip>\n\n      <Tooltip label="Throws">\n        Raw string, NOT OK – will throw an error\n      </Tooltip>\n\n      {/* Number, NOT OK – will throw an error */}\n      <Tooltip label="Throws">{2}</Tooltip>\n\n      <Tooltip label="Throws">\n        <>Fragment, NOT OK, will throw an error</>\n      </Tooltip>\n\n      <Tooltip label="Throws">\n        <div>More than one node</div>\n        <div>NOT OK, will throw an error</div>\n      </Tooltip>\n    </>\n  );\n}\n'})}),"\n",(0,o.jsx)(i.h2,{id:"tooltip-target",children:"Tooltip target"}),"\n",(0,o.jsxs)(i.p,{children:["The ",(0,o.jsx)(i.code,{children:"target"})," prop is an alternative to ",(0,o.jsx)(i.code,{children:"children"}),". It accepts a string (selector),\nan HTML element or a ref object with an HTML element. Use the ",(0,o.jsx)(i.code,{children:"target"})," prop when you do\nnot render the tooltip target as a JSX element."]}),"\n",(0,o.jsxs)(i.p,{children:["Example of using the ",(0,o.jsx)(i.code,{children:"target"})," prop with a string selector:"]}),"\n",(0,o.jsx)(l,{data:n.TooltipDemos.target}),"\n",(0,o.jsx)(i.h2,{id:"required-ref-prop",children:"Required ref prop"}),"\n",(0,o.jsxs)(i.p,{children:["Custom components that are rendered inside ",(0,o.jsx)(i.code,{children:"Tooltip"})," are required to support ",(0,o.jsx)(i.code,{children:"ref"})," prop:"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-tsx",children:"// Example of code that WILL NOT WORK\nimport { Tooltip } from '@mantine/core';\n\nfunction MyComponent() {\n  return <div>My component</div>;\n}\n\n// This will not work – MyComponent does not support ref\nfunction Demo() {\n  return (\n    <Tooltip label=\"Does not work\">\n      <MyComponent />\n    </Tooltip>\n  );\n}\n"})}),"\n",(0,o.jsxs)(i.p,{children:["The component must support ",(0,o.jsx)(i.code,{children:"ref"})," prop:"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-tsx",children:"// Example of code that will work\nimport { Tooltip } from '@mantine/core';\n\nconst MyComponent = ({ ref, ...props }) => (\n  <div ref={ref} {...props}>\n    My component\n  </div>\n);\n\n// Works correctly – ref is forwarded\nfunction Demo() {\n  return (\n    <Tooltip label=\"Works fine\">\n      <MyComponent />\n    </Tooltip>\n  );\n}\n"})}),"\n",(0,o.jsx)(i.h2,{id:"color",children:"Color"}),"\n",(0,o.jsx)(l,{data:n.TooltipDemos.configurator}),"\n",(0,o.jsx)(i.h2,{id:"offset",children:"Offset"}),"\n",(0,o.jsxs)(i.p,{children:["Set the ",(0,o.jsx)(i.code,{children:"offset"})," prop to a number to change the tooltip position relative to the target element.\nThis way you can control the tooltip offset on the main axis only."]}),"\n",(0,o.jsx)(l,{data:n.TooltipDemos.offset}),"\n",(0,o.jsxs)(i.p,{children:["To control the offset on both axes, pass an object with ",(0,o.jsx)(i.code,{children:"mainAxis"})," and ",(0,o.jsx)(i.code,{children:"crossAxis"})," properties:"]}),"\n",(0,o.jsx)(l,{data:n.TooltipDemos.offsetAxis}),"\n",(0,o.jsx)(i.h2,{id:"arrow",children:"Arrow"}),"\n",(0,o.jsxs)(i.p,{children:["Set the ",(0,o.jsx)(i.code,{children:"withArrow"})," prop to add an arrow to the tooltip. The arrow is a ",(0,o.jsx)(i.code,{children:"div"})," element rotated with ",(0,o.jsx)(i.code,{children:"transform: rotate(45deg)"}),"."]}),"\n",(0,o.jsxs)(i.p,{children:["The ",(0,o.jsx)(i.code,{children:"arrowPosition"})," prop determines how the arrow is positioned relative to the target element when ",(0,o.jsx)(i.code,{children:"position"})," is set to ",(0,o.jsx)(i.code,{children:"*-start"})," and ",(0,o.jsx)(i.code,{children:"*-end"})," values on the ",(0,o.jsx)(i.code,{children:"Popover"})," component.\nBy default, the value is ",(0,o.jsx)(i.code,{children:"center"})," – the arrow is positioned in the center of the target element if it is possible."]}),"\n",(0,o.jsxs)(i.p,{children:["If you change ",(0,o.jsx)(i.code,{children:"arrowPosition"})," to ",(0,o.jsx)(i.code,{children:"side"}),", then the arrow will be positioned on the side of the target element,\nand you will be able to control the arrow offset with the ",(0,o.jsx)(i.code,{children:"arrowOffset"})," prop. Note that when ",(0,o.jsx)(i.code,{children:"arrowPosition"})," is set to ",(0,o.jsx)(i.code,{children:"center"}),",\nthe ",(0,o.jsx)(i.code,{children:"arrowOffset"})," prop is ignored."]}),"\n",(0,o.jsxs)(i.p,{children:["If you set ",(0,o.jsx)(i.code,{children:"arrowPosition"})," to ",(0,o.jsx)(i.code,{children:"merge"}),", the arrow will form a right triangle merged with the corresponding\ncorner of the tooltip, and the border radius of that corner will be removed. This mode only works\nwith ",(0,o.jsx)(i.code,{children:"*-start"})," and ",(0,o.jsx)(i.code,{children:"*-end"})," positions. Note that ",(0,o.jsx)(i.code,{children:"arrowOffset"})," and ",(0,o.jsx)(i.code,{children:"arrowRadius"})," props are ignored\nwhen ",(0,o.jsx)(i.code,{children:"arrowPosition"})," is set to ",(0,o.jsx)(i.code,{children:"merge"}),"."]}),"\n",(0,o.jsx)(l,{data:n.TooltipDemos.arrow}),"\n",(0,o.jsx)(i.h2,{id:"controlled",children:"Controlled"}),"\n",(0,o.jsx)(l,{data:n.TooltipDemos.controlled}),"\n",(0,o.jsx)(i.h2,{id:"change-events",children:"Change events"}),"\n",(0,o.jsxs)(i.p,{children:["Events that trigger the tooltip can be changed with the ",(0,o.jsx)(i.code,{children:"events"})," prop; it accepts an object\nwith the following properties that determine which events will trigger the tooltip:"]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"hover"})," – mouse hover event, ",(0,o.jsx)(i.code,{children:"true"})," by default"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"focus"})," – focus/blur events excluding clicks on the target element, ",(0,o.jsx)(i.code,{children:"false"})," by default"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"touch"})," – events for touchscreen devices, ",(0,o.jsx)(i.code,{children:"false"})," by default"]}),"\n"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-tsx",children:"import { Tooltip } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Tooltip\n      label=\"Tooltip\"\n      events={{ hover: true, focus: true, touch: false }}\n    >\n      <button>target</button>\n    </Tooltip>\n  );\n}\n"})}),"\n",(0,o.jsx)(i.h2,{id:"multiline",children:"Multiline"}),"\n",(0,o.jsxs)(i.p,{children:["To enable multiline mode, set the ",(0,o.jsx)(i.code,{children:"multiline"})," prop to enable line breaks and the ",(0,o.jsx)(i.code,{children:"w"})," ",(0,o.jsx)(i.a,{href:"/styles/style-props",children:"style prop"})," to set the tooltip width:"]}),"\n",(0,o.jsx)(l,{data:n.TooltipDemos.multiline}),"\n",(0,o.jsx)(i.h2,{id:"inline",children:"Inline"}),"\n",(0,o.jsxs)(i.p,{children:["Set the ",(0,o.jsx)(i.code,{children:"inline"})," prop to use ",(0,o.jsx)(i.code,{children:"Tooltip"})," with inline elements:"]}),"\n",(0,o.jsx)(l,{data:n.TooltipDemos.inline}),"\n",(0,o.jsx)(i.h2,{id:"change-transition",children:"Change transition"}),"\n",(0,o.jsxs)(i.p,{children:["Tooltip is built with the ",(0,o.jsx)(i.a,{href:"/core/transition/",children:"Transition"})," component; it supports ",(0,o.jsx)(i.code,{children:"transitionProps"})," props:"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-tsx",children:"import { Button, Tooltip } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Tooltip\n      label=\"Tooltip with custom transition\"\n      transitionProps={{ transition: 'skew-up', duration: 300 }}\n    >\n      <Button>Button with tooltip</Button>\n    </Tooltip>\n  );\n}\n"})}),"\n",(0,o.jsx)(i.p,{children:"All available premade transitions:"}),"\n",(0,o.jsx)(l,{data:n.TooltipDemos.transitions}),"\n",(0,o.jsx)(i.h2,{id:"close-and-open-delay",children:"Close and open delay"}),"\n",(0,o.jsxs)(i.p,{children:["You can delay tooltip open/close events by setting the ",(0,o.jsx)(i.code,{children:"openDelay"})," and ",(0,o.jsx)(i.code,{children:"closeDelay"})," props in ms:"]}),"\n",(0,o.jsx)(l,{data:n.TooltipDemos.delay}),"\n",(0,o.jsx)(i.h2,{id:"tooltip-delay-group",children:"Tooltip delay group"}),"\n",(0,o.jsxs)(i.p,{children:["The ",(0,o.jsx)(i.code,{children:"Tooltip.Group"})," component can be used to sync open and close delays for multiple tooltips:"]}),"\n",(0,o.jsx)(l,{data:n.TooltipDemos.group}),"\n",(0,o.jsx)(i.h2,{id:"floating-tooltip",children:"Floating tooltip"}),"\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.code,{children:"Tooltip.Floating"})," component has the same API as the Tooltip component but the tooltip will follow the mouse:"]}),"\n",(0,o.jsx)(l,{data:n.TooltipDemos.floating}),"\n",(0,o.jsx)(i.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,o.jsxs)(i.p,{children:["Tooltip follows ",(0,o.jsx)(i.a,{href:"https://www.w3.org/TR/wai-aria-practices/#tooltip",children:"WAI-ARIA recommendations"}),":"]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["The tooltip body has ",(0,o.jsx)(i.code,{children:'role="tooltip"'})," attribute"]}),"\n",(0,o.jsxs)(i.li,{children:["The target element has ",(0,o.jsx)(i.code,{children:"aria-describedby"})," attribute"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"Tooltip.Floating"})," is ignored by screen readers"]}),"\n"]}),"\n",(0,o.jsxs)(i.p,{children:["By default, Tooltip is not triggered by focus events and thus users who use a screen reader\nor navigate with the keyboard will not be able to get tooltip content. Set the ",(0,o.jsx)(i.code,{children:"events"})," prop to enable\nfocus/blur tooltip events:"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-tsx",children:"import { Button, Tooltip } from '@mantine/core';\n\n// Tooltip will be visible for screen readers\nfunction Demo() {\n  return (\n    <Tooltip\n      label=\"Tooltip\"\n      events={{ hover: true, focus: true, touch: false }}\n    >\n      <Button>Button with tooltip</Button>\n    </Tooltip>\n  );\n}\n"})})]})}e.s(["default",0,function(e={}){return(0,o.jsx)(r,{...e,children:(0,o.jsx)(s,{...e})})}])},332753,(e,o,t)=>{let n="/core/tooltip";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(55687)]),o.hot&&o.hot.dispose(function(){window.__NEXT_P.push([n])})},648761,e=>{e.v(o=>Promise.all(["static/chunks/22379_btw709h.js"].map(o=>e.l(o))).then(()=>o(493594)))},828805,e=>{e.v(o=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(o=>e.l(o))).then(()=>o(879466)))}]);