(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,o)=>{let n={};for(var i in e)t(n,i,{get:e[i],enumerable:!0});return o||t(n,Symbol.toStringTag,{value:"Module"}),n}])},257177,e=>{"use strict";var t=e.i(433512),o=e.i(481178),n=e.i(317477),i=e.i(44091),r=e.i(391466),l=e.i(956449),s=e.i(232471),a={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"},p=e.i(391398);let c=(0,o.createVarsResolver)((e,{radius:o,color:i,gradient:r,variant:l,size:s,autoContrast:a,circle:p})=>{let c=e.variantColorResolver({color:i||e.primaryColor,theme:e,gradient:r,variant:l||"filled",autoContrast:a});return{root:{"--badge-height":(0,t.getSize)(s,"badge-height"),"--badge-padding-x":(0,t.getSize)(s,"badge-padding-x"),"--badge-fz":(0,t.getSize)(s,"badge-fz"),"--badge-radius":p||void 0===o?void 0:(0,t.getRadius)(o),"--badge-bg":i||l?c.background:void 0,"--badge-color":i||l?c.color:void 0,"--badge-bd":i||l?c.border:void 0,"--badge-dot-color":"dot"===l?(0,n.getThemeColor)(i,e):void 0}}}),d=(0,l.polymorphicFactory)(e=>{let t=(0,i.useProps)("Badge",null,e),{classNames:o,className:n,style:l,styles:d,unstyled:u,vars:m,radius:h,color:x,gradient:f,leftSection:y,rightSection:T,children:b,variant:j,fullWidth:g,autoContrast:v,circle:B,mod:w,attributes:D,...k}=t,P=(0,r.useStyles)({name:"Badge",props:t,classes:a,className:n,style:l,classNames:o,styles:d,unstyled:u,attributes:D,vars:m,varsResolver:c});return(0,p.jsxs)(s.Box,{variant:j,mod:[{block:g,circle:B,"with-right-section":!!T,"with-left-section":!!y},w],...P("root",{variant:j}),...k,children:[y&&(0,p.jsx)("span",{...P("section"),"data-position":"left",children:y}),(0,p.jsx)("span",{...P("label"),children:b}),T&&(0,p.jsx)("span",{...P("section"),"data-position":"right",children:T})]})});d.classes=a,d.varsResolver=c,d.displayName="@mantine/core/Badge",e.s(["Badge",0,d],257177)},19830,216339,e=>{"use strict";var t=e.i(931718),o=e.i(330693),n=e.i(951254),i=e.i(44091),r=e.i(391466),l=e.i(871346),s=e.i(41298),a=e.i(7535),p=e.i(83353),c=e.i(956449),d=e.i(232471);let u={gap:{type:"spacing",property:"gap"},rowGap:{type:"spacing",property:"rowGap"},columnGap:{type:"spacing",property:"columnGap"},align:{type:"identity",property:"alignItems"},justify:{type:"identity",property:"justifyContent"},wrap:{type:"identity",property:"flexWrap"},direction:{type:"identity",property:"flexDirection"}};e.s(["FLEX_STYLE_PROPS_DATA",0,u],216339);var m={root:"m_8bffd616"},h=e.i(391398);let x=(0,c.polymorphicFactory)(e=>{let c=(0,i.useProps)("Flex",null,e),{classNames:x,className:f,style:y,styles:T,unstyled:b,vars:j,gap:g,rowGap:v,columnGap:B,align:w,justify:D,wrap:k,direction:P,attributes:O,...A}=c,_=(0,r.useStyles)({name:"Flex",classes:m,props:c,className:f,style:y,classNames:x,styles:T,unstyled:b,attributes:O,vars:j}),S=(0,n.useMantineTheme)(),C=(0,p.useRandomClassName)(),M=(0,a.parseStyleProps)({styleProps:{gap:g,rowGap:v,columnGap:B,align:w,justify:D,wrap:k,direction:P},theme:S,data:u}),F=(0,o.useMantineDeduplicateInlineStyles)(),I=F&&M.hasResponsiveStyles?(0,s.hashStyleProps)(M.styles,M.media):C;return(0,h.jsxs)(h.Fragment,{children:[M.hasResponsiveStyles&&(0,h.jsx)(l.InlineStyles,{selector:`.${I}`,styles:M.styles,media:M.media,deduplicate:F}),(0,h.jsx)(d.Box,{..._("root",{className:I,style:(0,t.filterProps)(M.inlineStyles)}),...A})]})});x.classes=m,x.displayName="@mantine/core/Flex",e.s(["Flex",0,x],19830)},7883,e=>{"use strict";e.s(["FLOATING_ARROW_POSITION_DATA",0,[{label:"side",value:"side"},{label:"center",value:"center"}],"FLOATING_POSITION_DATA",0,[{label:"top",value:"top"},{label:"top-start",value:"top-start"},{label:"top-end",value:"top-end"},{label:"left",value:"left"},{label:"left-start",value:"left-start"},{label:"left-end",value:"left-end"},{label:"right",value:"right"},{label:"right-start",value:"right-start"},{label:"right-end",value:"right-end"},{label:"bottom",value:"bottom"},{label:"bottom-start",value:"bottom-start"},{label:"bottom-end",value:"bottom-end"}]])},165678,e=>{"use strict";var t=e.i(648863),o=e.i(485108),n=e.i(431868),i=e.i(391398);let r={type:"configurator",component:function(e){return(0,i.jsx)(n.Tooltip,{label:"Tooltip",...e,children:(0,i.jsx)(o.Button,{children:"With tooltip"})})},code:`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip"{{props}}>
      <Button>With tooltip</Button>
    </Tooltip>
  );
}
`,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"__none__"}]};var l=e.i(191788);let s={type:"code",centered:!0,code:`
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
}`,component:function(){let[e,t]=(0,l.useState)(!1);return(0,i.jsx)(n.Tooltip,{label:"Ctrl + J",opened:e,children:(0,i.jsx)(o.Button,{onClick:()=>t(e=>!e),children:"Toggle color scheme"})})}},a={type:"configurator",component:function(e){return(0,i.jsx)(n.Tooltip,{label:"Tooltip",withArrow:!0,opened:!0,position:"top-start",...e,children:(0,i.jsx)(o.Button,{children:"Button with tooltip"})})},code:`
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
`,centered:!0,component:function(){return(0,i.jsx)(n.Tooltip,{multiline:!0,w:220,withArrow:!0,transitionProps:{duration:200},label:"Use this button to save this information in your profile, after that you will be able to access it any time and share it via email.",children:(0,i.jsx)(o.Button,{children:"Multiline tooltip"})})}};var c=e.i(257177),d=e.i(725695),u=e.i(412011),u=u,m=e.i(76112);let h={type:"code",component:function(){return(0,i.jsx)(d.Group,{justify:"center",style:{cursor:"default"},children:(0,m.keys)(u.transitions).map(e=>(0,i.jsx)(n.Tooltip,{label:e,transitionProps:{transition:e,duration:300},children:(0,i.jsx)(c.Badge,{variant:"light",children:e})},e))})}},x={type:"code",code:`
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
`,component:function(){return(0,i.jsxs)(d.Group,{justify:"center",children:[(0,i.jsx)(n.Tooltip,{label:"Opened after 500ms",openDelay:500,children:(0,i.jsx)(o.Button,{children:"Delay open - 500ms"})}),(0,i.jsx)(n.Tooltip,{label:"Closes after 500ms",closeDelay:500,children:(0,i.jsx)(o.Button,{children:"Delay close - 500ms"})})]})}};var f=e.i(232471);let y={type:"code",component:function(){return(0,i.jsx)(n.Tooltip.Floating,{label:"Floating tooltip",children:(0,i.jsx)(f.Box,{p:"xl",bg:"var(--mantine-color-blue-light)",style:{cursor:"default"},children:"Hover over the box to see tooltip"})})},code:`
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
`,centered:!0},T={type:"code",component:function(){return(0,i.jsx)(n.Tooltip,{label:"Tooltip",children:(0,i.jsx)(o.Button,{children:"Button with tooltip"})})},centered:!0,code:`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip">
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
`},b={type:"code",component:function(){return(0,i.jsx)(n.Tooltip.Group,{openDelay:500,closeDelay:100,children:(0,i.jsxs)(d.Group,{justify:"center",children:[(0,i.jsx)(n.Tooltip,{label:"Tooltip 1",children:(0,i.jsx)(o.Button,{children:"Button 1"})}),(0,i.jsx)(n.Tooltip,{label:"Tooltip 2",children:(0,i.jsx)(o.Button,{children:"Button 2"})}),(0,i.jsx)(n.Tooltip,{label:"Tooltip 3",children:(0,i.jsx)(o.Button,{children:"Button 3"})})]})})},code:`
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
`};var j=e.i(7883);let g={type:"configurator",component:function(e){return(0,i.jsx)(n.Tooltip,{label:"Tooltip",opened:!0,...e,children:(0,i.jsx)(o.Button,{children:"Button with tooltip"})})},code:`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip" opened{{props}}>
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
`,centered:!0,controls:[{type:"select",prop:"position",initialValue:"top",data:j.FLOATING_POSITION_DATA,libraryValue:null},{type:"number",prop:"offset",initialValue:5,libraryValue:null,min:-50,max:50}]};var v=e.i(218262),B=e.i(883364);let w={type:"code",component:function(){return(0,i.jsxs)(B.Text,{children:["Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this Pokémon was hunted close to extinction by those who were after the priceless antlers."," ",(0,i.jsx)(n.Tooltip,{inline:!0,label:"Inline tooltip",children:(0,i.jsx)(v.Mark,{children:"When visiting a junkyard"})}),", you may catch sight of it having an intense fight with Murkrow over shiny objects.Ho-Oh’s feathers glow in seven colors depending on the angle at which they are struck by light. These feathers are said to bring happiness to the bearers. This Pokémon is said to live at the foot of a rainbow."]})},code:`
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
`},D={type:"code",centered:!0,component:function(){return(0,i.jsx)(n.Tooltip,{label:"top",position:"top",closeDelay:1500,children:(0,i.jsx)(n.Tooltip,{label:"bottom",position:"bottom",openDelay:500,closeDelay:1e3,children:(0,i.jsx)(n.Tooltip,{label:"left",position:"left",openDelay:1e3,closeDelay:500,children:(0,i.jsx)(n.Tooltip,{label:"right",position:"right",openDelay:1500,children:(0,i.jsx)(o.Button,{children:"Nested Tooltips"})})})})})},code:`
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
`},k={type:"configurator",component:function(e){return(0,i.jsx)(n.Tooltip,{position:e.position,opened:!0,label:"Tooltip",offset:{mainAxis:e.mainAxis,crossAxis:e.crossAxis},children:(0,i.jsx)(o.Button,{children:"Button with tooltip"})})},code:e=>`
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
`,centered:!0,controls:[{type:"select",prop:"position",initialValue:"top",data:j.FLOATING_POSITION_DATA,libraryValue:null},{type:"number",prop:"mainAxis",initialValue:5,libraryValue:null,min:-50,max:50},{type:"number",prop:"crossAxis",initialValue:0,libraryValue:null,min:-50,max:50}]},P={type:"code",component:function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.Tooltip,{target:"#hover-me",label:"Tooltip over button"}),(0,i.jsx)(o.Button,{id:"hover-me",children:"Hover me to see tooltip"})]})},code:`
import { Button, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <>
      <Tooltip target="#hover-me" label="Tooltip over button" />
      <Button id="hover-me">Hover me to see tooltip</Button>
    </>
  );
}
`,centered:!0};var O=(0,t.__exportAll)({arrow:()=>a,configurator:()=>r,controlled:()=>s,delay:()=>x,floating:()=>y,group:()=>b,inline:()=>w,multiline:()=>p,nested:()=>D,offset:()=>g,offsetAxis:()=>k,target:()=>P,transitions:()=>h,usage:()=>T});e.s(["TooltipDemos",0,O],165678)},811527,e=>{"use strict";var t=e.i(648863),o=e.i(191788),n=e.i(232471),i=e.i(485108),r=e.i(470743),l=e.i(34515),s=e.i(391398),a=e.i(196072);let p={in:{opacity:1,transform:"scaleY(1)"},out:{opacity:0,transform:"scaleY(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},c={type:"code",code:`
import { useState } from 'react';
import { useClickOutside } from '@mantine/hooks';
import { Transition, Paper, Button, Box } from '@mantine/core';

const scaleY = {
  in: { opacity: 1, transform: 'scaleY(1)' },
  out: { opacity: 0, transform: 'scaleY(0)' },
  common: { transformOrigin: 'top' },
  transitionProperty: 'transform, opacity',
};

function Demo() {
  const [opened, setOpened] = useState(false);
  const clickOutsideRef = useClickOutside(() => setOpened(false));

  return (
    <Box
      maw={200}
      pos="relative"
      style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}
    >
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>
      <Transition
        mounted={opened}
        transition={scaleY}
        duration={200}
        timingFunction="ease"
        keepMounted
      >
        {(transitionStyle) => (
          <Paper
            shadow="md"
            p="xl"
            h={120}
            pos="absolute"
            top={0}
            left={0}
            right={0}
            ref={clickOutsideRef}
            style={{ ...transitionStyle, zIndex: 1 }}
          >
            Dropdown
          </Paper>
        )}
      </Transition>
    </Box>
  );
}`,component:function(){let[e,t]=(0,o.useState)(!1),c=(0,a.useClickOutside)(()=>t(!1));return(0,s.jsxs)(n.Box,{maw:200,pos:"relative",style:{display:"flex",justifyContent:"center",margin:"auto"},children:[(0,s.jsx)(i.Button,{onClick:()=>t(!0),children:"Open dropdown"}),(0,s.jsx)(l.Transition,{mounted:e,transition:p,duration:200,timingFunction:"ease",keepMounted:!0,children:e=>(0,s.jsx)(r.Paper,{shadow:"md",p:"xl",h:120,pos:"absolute",top:0,left:0,right:0,ref:c,style:{...e,zIndex:1},children:"Dropdown"})})]})}};var d=e.i(19830);let u={type:"code",code:`
import { useState } from 'react';
import { Button, Flex, Paper, Transition } from '@mantine/core';

export function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <Flex maw={200} pos="relative" justify="center" m="auto">
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>

      <Transition mounted={opened} transition="pop" enterDelay={500} exitDelay={300}>
        {(transitionStyle) => (
          <Paper
            shadow="md"
            p="xl"
            h={120}
            pos="absolute"
            inset={0}
            bottom="auto"
            onClick={() => setOpened(false)}
            style={{ ...transitionStyle, zIndex: 1 }}
          >
            Click to close
          </Paper>
        )}
      </Transition>
    </Flex>
  );
}`,component:function(){let[e,t]=(0,o.useState)(!1);return(0,s.jsxs)(d.Flex,{maw:200,pos:"relative",justify:"center",m:"auto",children:[(0,s.jsx)(i.Button,{onClick:()=>t(!0),children:"Open dropdown"}),(0,s.jsx)(l.Transition,{mounted:e,transition:"pop",enterDelay:500,exitDelay:300,children:e=>(0,s.jsx)(r.Paper,{shadow:"md",p:"xl",h:120,pos:"absolute",inset:0,bottom:"auto",onClick:()=>t(!1),style:{...e,zIndex:1},children:"Click here to close"})})]})}};var m=(0,t.__exportAll)({custom:()=>c,delay:()=>u});e.s(["TransitionDemos",0,m],811527)},637252,e=>{"use strict";var t=e.i(391398),o=e.i(38856),n=e.i(165678),i=e.i(811527);e.i(603441);var r=e.i(62558);e.i(457450);var l=e.i(418026);let s=(0,r.Layout)(l.MDX_DATA.Transition);function a(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.useMDXComponents)(),...e.components},{Demo:l}=r;return l||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(r.p,{children:["The Transition component is designed to animate the presence of elements with\nfixed or absolute positioning, such as dropdowns, modals, or tooltips. Other Mantine\ncomponents (like ",(0,t.jsx)(r.a,{href:"/core/modal",children:"Modal"})," and ",(0,t.jsx)(r.a,{href:"/core/tooltip",children:"Tooltip"}),") use Transition internally\nfor their animations."]}),"\n",(0,t.jsxs)(r.p,{children:["Note that the Transition component is not intended to be a comprehensive solution for all\nanimations. It is a simple utility for animating the presence of elements\nwith fixed or absolute positioning. If you need to implement more complex animations,\nconsider using ",(0,t.jsx)(r.a,{href:"https://motion.dev/",children:"Motion"}),", ",(0,t.jsx)(r.a,{href:"https://www.react-spring.dev/",children:"React Spring"}),",\nor other dedicated animation libraries."]}),"\n",(0,t.jsx)(r.p,{children:"Example usage of the Transition component:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"import { Transition } from '@mantine/core';\n\nfunction Demo({ opened }: { opened: boolean }) {\n  return (\n    <Transition mounted={opened} transition=\"fade\">\n      {(styles) => <div style={styles}>Your modal</div>}\n    </Transition>\n  );\n}\n"})}),"\n",(0,t.jsx)(r.h2,{id:"premade-transitions",children:"Premade transitions"}),"\n",(0,t.jsx)(r.p,{children:"Mantine includes several premade transitions:"}),"\n",(0,t.jsx)(l,{data:n.TooltipDemos.transitions}),"\n",(0,t.jsxs)(r.p,{children:["To use one of them, set the ",(0,t.jsx)(r.code,{children:"transition"})," property to one of these values:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:'import { Transition } from \'@mantine/core\';\n\nfunction Demo({ opened }: { opened: boolean }) {\n  return (\n    <Transition\n      mounted={opened}\n      transition="fade"\n      duration={400}\n      timingFunction="ease"\n    >\n      {(styles) => <div style={styles}>Your modal</div>}\n    </Transition>\n  );\n}\n'})}),"\n",(0,t.jsx)(r.h2,{id:"custom-transitions",children:"Custom transitions"}),"\n",(0,t.jsxs)(r.p,{children:["You can create your own transition. ",(0,t.jsx)(r.code,{children:"transition"})," is an object with 4 properties:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"in"})," – styles for mounted state"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"out"})," – styles for unmounted state"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"common"})," (optional) – styles for both mounted and unmounted states"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"transitionProperty"})," – properties which participate in the transition"]}),"\n"]}),"\n",(0,t.jsx)(l,{data:i.TransitionDemos.custom}),"\n",(0,t.jsx)(r.h2,{id:"enter-and-exit-delay",children:"Enter and exit delay"}),"\n",(0,t.jsxs)(r.p,{children:["Use the ",(0,t.jsx)(r.code,{children:"enterDelay"})," and ",(0,t.jsx)(r.code,{children:"exitDelay"})," props to delay the transition start. Values are in milliseconds:"]}),"\n",(0,t.jsx)(l,{data:i.TransitionDemos.delay}),"\n",(0,t.jsx)(r.h2,{id:"reduced-motion",children:"Reduced motion"}),"\n",(0,t.jsxs)(r.p,{children:["Transition respects the ",(0,t.jsx)(r.code,{children:"prefers-reduced-motion"})," media query and your theme's\n",(0,t.jsx)(r.code,{children:"respectReducedMotion"})," setting. When reduced motion is preferred, all\ntransitions complete instantly:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"import { createTheme, MantineProvider, Transition } from '@mantine/core';\n\nconst theme = createTheme({\n  respectReducedMotion: true, // default\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <Transition mounted transition=\"fade\" duration={400}>\n        {(styles) => <div style={styles}>Content</div>}\n      </Transition>\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,t.jsx)(r.p,{children:"This improves accessibility for users with vestibular disorders who may\nexperience motion sickness from animations."}),"\n",(0,t.jsx)(r.h2,{id:"lifecycle-callbacks",children:"Lifecycle callbacks"}),"\n",(0,t.jsx)(r.p,{children:"Use lifecycle callbacks to perform actions at different stages of the transition:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"onEnter"})," - Called when enter transition starts"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"onEntered"})," - Called when enter transition completes"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"onExit"})," - Called when exit transition starts"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"onExited"})," - Called when exit transition completes"]}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"import { Transition } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Transition\n      mounted\n      transition=\"fade\"\n      duration={200}\n      onEnter={() => console.log('Enter started')}\n      onEntered={() => console.log('Enter completed')}\n      onExit={() => console.log('Exit started')}\n      onExited={() => console.log('Exit completed')}\n    >\n      {(styles) => <div style={styles}>Content</div>}\n    </Transition>\n  );\n}\n"})}),"\n",(0,t.jsx)(r.h2,{id:"keep-mounted",children:"Keep mounted"}),"\n",(0,t.jsxs)(r.p,{children:["By default, the element is unmounted from the DOM when the transition is\ncomplete. Use ",(0,t.jsx)(r.code,{children:"keepMounted"})," to keep the element mounted with ",(0,t.jsx)(r.code,{children:"display: none"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"import { Transition } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Transition mounted={false} keepMounted transition=\"fade\">\n      {(styles) => <div style={styles}>Content</div>}\n    </Transition>\n  );\n}\n"})}),"\n",(0,t.jsx)(r.p,{children:"This is useful when you want to:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Preserve element state during hide/show"}),"\n",(0,t.jsx)(r.li,{children:"Avoid remounting overhead"}),"\n",(0,t.jsx)(r.li,{children:"Maintain focus/scroll position"}),"\n"]})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})})}])},107830,(e,t,o)=>{let n="/core/transition";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(637252)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);