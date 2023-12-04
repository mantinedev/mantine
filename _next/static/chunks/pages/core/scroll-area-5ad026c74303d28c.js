(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5282],{95974:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/scroll-area",function(){return r(12141)}])},12141:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return _}});var o=r(24246),n=r(71670),l=r(3916),a=r(30289),i=r(27378),s=r(56589),c=r(49849),Text=r(26569);function u(){return i.createElement(i.Fragment,null,i.createElement(Text.x,{size:"xl",fw:700},"Charizard (Pok\xe9mon)"),i.createElement(Text.x,{c:"dimmed"},"Charizard description from Bulbapedia"),i.createElement(Text.x,{size:"sm",mt:"md"},"Charizard is a draconic, bipedal Pok\xe9mon. It is primarily orange with a cream underside from the chest to the tip of its tail. It has a long neck, small blue eyes, slightly raised nostrils, and two horn-like structures protruding from the back of its rectangular head. There are two fangs visible in the upper jaw when its mouth is closed. Two large wings with blue-green undersides sprout from its back, and a horn-like appendage juts out from the top of the third joint of each wing. A single wing-finger is visible through the center of each wing membrane. Charizard's arms are short and skinny compared to its robust belly, and each limb has three white claws. It has stocky legs with cream-colored soles on each of its plantigrade feet. The tip of its long, tapering tail burns with a sizable flame."),i.createElement(Text.x,{size:"sm",mt:"md"},"As Mega Charizard X, its body and legs are more physically fit, though its arms remain thin. Its skin turns black with a sky-blue underside and soles. Two spikes with blue tips curve upward from the front and back of each shoulder, while the tips of its horns sharpen, turn blue, and curve slightly upward. Its brow and claws are larger, and its eyes are now red. It has two small, fin-like spikes under each horn and two more down its lower neck. The finger disappears from the wing membrane, and the lower edges are divided into large, rounded points. The third joint of each wing-arm is adorned with a claw-like spike. Mega Charizard X breathes blue flames out the sides of its mouth, and the flame on its tail now burns blue. It is said that its new power turns it black and creates more intense flames."))}let d=`
import { ScrollArea } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea h={250}{{props}}>
      {/* ... content */}
    </ScrollArea>
  );
}
`,m={type:"configurator",component:function(e){return i.createElement(s.x,{maw:400,mx:"auto"},i.createElement(c.x,{h:250,...e},i.createElement(u,null)))},code:d,controls:[{prop:"type",type:"select",data:[{value:"hover",label:"Hover"},{value:"auto",label:"Auto"},{value:"always",label:"Always"},{value:"scroll",label:"Scroll"},{value:"never",label:"Never"}],initialValue:"hover",libraryValue:"hover"},{prop:"offsetScrollbars",type:"boolean",libraryValue:!1,initialValue:!1},{prop:"scrollbarSize",type:"number",min:2,max:20,step:2,libraryValue:10,initialValue:10},{prop:"scrollHideDelay",type:"number",min:0,max:6e3,step:500,libraryValue:1e3,initialValue:1e3}]},h=`
import { ScrollArea, Box } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea w={300} h={200}>
      <Box w={600}>
        {/* ... content */}
      </Box>
    </ScrollArea>
  );
}
`,p={type:"code",component:function(){return i.createElement(c.x,{w:300,h:200},i.createElement(s.x,{w:600},i.createElement(u,null)))},centered:!0,code:h};var f=r(27884),w=r(94998);let x=`
import { useState } from 'react';
import { Text, ScrollArea, Code, Box } from '@mantine/core';

function Demo() {
  const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });

  return (
    <>
      <ScrollArea
        w={300}
        h={200}
        onScrollPositionChange={onScrollPositionChange}
      >
        <Box w={600}>
          {/* ... content */}
        </Box>
      </ScrollArea>

      <Text>
        Scroll position: <Code>{\`{ x: \${scrollPosition.x}, y: \${scrollPosition.y} }\`}</Code>
      </Text>
    </>
  );
}
`,v={type:"code",component:function(){let[e,t]=(0,i.useState)({x:0,y:0});return i.createElement(f.K,{align:"center"},i.createElement(c.x,{w:300,h:200,onScrollPositionChange:t},i.createElement(s.x,{w:600},i.createElement(u,null))),i.createElement(Text.x,null,"Scroll position: ",i.createElement(w.E,null,`{ x: ${e.x}, y: ${e.y} }`)))},code:x};var g=r(22971),b=r(8671);let y=`
import { useRef } from 'react';
import { ScrollArea, Button, Stack, Group } from '@mantine/core';

function Demo() {
  const viewport = useRef<HTMLDivElement>(null);

  const scrollToBottom = () =>
    viewport.current!.scrollTo({ top: viewport.current!.scrollHeight, behavior: 'smooth' });

  const scrollToCenter = () =>
    viewport.current!.scrollTo({ top: viewport.current!.scrollHeight / 2, behavior: 'smooth' });

  const scrollToTop = () => viewport.current!.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Stack align="center">
      <ScrollArea w={300} h={200} viewportRef={viewport}>
        {/* ... content */}
      </ScrollArea>

      <Group justify="center">
        <Button onClick={scrollToBottom}>Scroll to bottom</Button>
        <Button onClick={scrollToCenter}>Scroll to center</Button>
        <Button onClick={scrollToTop}>Scroll to top</Button>
      </Group>
    </Stack>
  );
}
`,S={type:"code",component:function(){let e=(0,i.useRef)(null);return i.createElement(f.K,{align:"center"},i.createElement(c.x,{w:300,h:200,viewportRef:e},i.createElement(u,null)),i.createElement(g.Z,{justify:"center"},i.createElement(b.z,{onClick:()=>e.current.scrollTo({top:e.current.scrollHeight,behavior:"smooth"})},"Scroll to bottom"),i.createElement(b.z,{onClick:()=>e.current.scrollTo({top:e.current.scrollHeight/2,behavior:"smooth"})},"Scroll to center"),i.createElement(b.z,{onClick:()=>e.current.scrollTo({top:0,behavior:"smooth"})},"Scroll to top")))},code:y};var k={scrollbar:"m-3dc2e23a",thumb:"m-b848b7ea",corner:"m-342d2ec1"};let C=`
import { ScrollArea, Box } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <ScrollArea w={300} h={200} type="always" offsetScrollbars classNames={classes}>
      <Box w={600}>
        {/* ... content */}
      </Box>
    </ScrollArea>
  );
}
`,A=`
.scrollbar {
  &,
  &:hover {
    background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
  }

  &[data-orientation='vertical'] .thumb {
    background-color: var(--mantine-color-red-6);
  }

  &[data-orientation='horizontal'] .thumb {
    background-color: var(--mantine-color-blue-6);
  }
}

.corner {
  background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
  opacity: 1;
}
`,j={type:"code",component:function(){return i.createElement(c.x,{w:300,h:200,type:"always",offsetScrollbars:!0,classNames:k},i.createElement(s.x,{w:600},i.createElement(u,null)))},centered:!0,code:[{fileName:"Demo.tsx",code:C,language:"tsx"},{fileName:"Demo.module.css",code:A,language:"scss"}]};var E=r(19397),B=r(7033);let T=`
import { useState, useRef } from 'react';
import { ScrollArea, UnstyledButton, TextInput } from '@mantine/core';

const groceries = [
  'Apples',
  'Bananas',
  'Oranges',
  'Milk',
  'Bread',
  'Eggs',
  'Chicken',
  'Beef',
  'Pasta',
  'Rice',
  'Potatoes',
  'Onions',
  'Tomatoes',
  'Cucumbers',
  'Carrots',
  'Lettuce',
  'Spinach',
  'Broccoli',
  'Cheese',
  'Yogurt',
  'Butter',
  'Sugar',
  'Salt',
  'Pepper',
  'Coffee',
  'Tea',
  'Juice',
  'Water',
  'Cookies',
  'Chocolate',
];

function Demo() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState('');
  const [hovered, setHovered] = useState(-1);
  const filtered = groceries.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
  const items = filtered.map((item, index) => (
    <UnstyledButton
      data-list-item
      key={item}
      display="block"
      bg={index === hovered ? 'var(--mantine-color-blue-light)' : undefined}
      w="100%"
      p={5}
    >
      {item}
    </UnstyledButton>
  ));

  return (
    <>
      <TextInput
        value={query}
        onChange={(event) => {
          setQuery(event.currentTarget.value);
          setHovered(-1);
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowDown') {
            event.preventDefault();
            setHovered((current) => {
              const nextIndex = current + 1 >= filtered.length ? current : current + 1;
              viewportRef.current
                ?.querySelectorAll('[data-list-item]')
                ?.[nextIndex]?.scrollIntoView({ block: 'nearest' });
              return nextIndex;
            });
          }

          if (event.key === 'ArrowUp') {
            event.preventDefault();
            setHovered((current) => {
              const nextIndex = current - 1 < 0 ? current : current - 1;
              viewportRef.current
                ?.querySelectorAll('[data-list-item]')
                ?.[nextIndex]?.scrollIntoView({ block: 'nearest' });
              return nextIndex;
            });
          }
        }}
        placeholder="Search groceries"
      />
      <ScrollArea h={150} type="always" mt="md" viewportRef={viewportRef}>
        {items}
      </ScrollArea>
    </>
  );
}
`,D=["Apples","Bananas","Oranges","Milk","Bread","Eggs","Chicken","Beef","Pasta","Rice","Potatoes","Onions","Tomatoes","Cucumbers","Carrots","Lettuce","Spinach","Broccoli","Cheese","Yogurt","Butter","Sugar","Salt","Pepper","Coffee","Tea","Juice","Water","Cookies","Chocolate"],z={type:"code",component:function(){let e=(0,i.useRef)(null),[t,r]=(0,i.useState)(""),[o,n]=(0,i.useState)(-1),l=D.filter(e=>e.toLowerCase().includes(t.toLowerCase())),a=l.map((e,t)=>i.createElement(E.k,{"data-list-item":!0,key:e,display:"block",bg:t===o?"var(--mantine-color-blue-light)":void 0,w:"100%",p:5},e));return i.createElement(i.Fragment,null,i.createElement(B.o,{value:t,onChange:e=>{r(e.currentTarget.value),n(-1)},onKeyDown:t=>{"ArrowDown"===t.key&&(t.preventDefault(),n(t=>{let r=t+1>=l.length?t:t+1;return e.current?.querySelectorAll("[data-list-item]")?.[r]?.scrollIntoView({block:"nearest"}),r})),"ArrowUp"===t.key&&(t.preventDefault(),n(t=>{let r=t-1<0?t:t-1;return e.current?.querySelectorAll("[data-list-item]")?.[r]?.scrollIntoView({block:"nearest"}),r}))},placeholder:"Search groceries"}),i.createElement(c.x,{h:150,type:"always",mt:"md",viewportRef:e},a))},code:T,centered:!0,maxWidth:340};var I=r(72048);let P=`
import { useCounter } from '@mantine/hooks';
import { ScrollArea, Button, Group } from '@mantine/core';

const lorem =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta perspiciatis reiciendis voluptate eaque itaque quos. Natus iure tenetur libero, reprehenderit ad, sequi, in aliquam eos necessitatibus expedita delectus veniam culpa!';

function Demo() {
  const [count, handlers] = useCounter(3, { min: 0, max: 10 });
  const content = Array(count)
    .fill(0)
    .map((_, index) => <p key={index}>{lorem}</p>);

  return (
    <>
      <ScrollArea.Autosize mah={300} maw={400} mx="auto">
        {content}
      </ScrollArea.Autosize>

      <Group justify="center" mt="md">
        <Button color="red" onClick={handlers.decrement}>
          Remove paragraph
        </Button>
        <Button onClick={handlers.increment}>
          Add paragraph
        </Button>
      </Group>
    </>
  );
}
`,R={type:"code",component:function(){let[e,t]=(0,I.C)(3,{min:0,max:10}),r=Array(e).fill(0).map((e,t)=>i.createElement("p",{key:t},"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta perspiciatis reiciendis voluptate eaque itaque quos. Natus iure tenetur libero, reprehenderit ad, sequi, in aliquam eos necessitatibus expedita delectus veniam culpa!"));return i.createElement(i.Fragment,null,i.createElement(c.x.Autosize,{mah:300,maw:400,mx:"auto"},r),i.createElement(g.Z,{justify:"center",mt:"md"},i.createElement(b.z,{color:"red",onClick:t.decrement},"Remove paragraph"),i.createElement(b.z,{onClick:t.increment},"Add paragraph")))},code:P};var q=r(63433);let H=`
import { useState, useRef } from 'react';
import { ScrollArea, Popover, TextInput, UnstyledButton, Text } from '@mantine/core';

const groceries = [
  'Apples',
  'Bananas',
  'Oranges',
  'Milk',
  'Bread',
  'Eggs',
  'Chicken',
  'Beef',
  'Pasta',
  'Rice',
  'Potatoes',
  'Onions',
  'Tomatoes',
  'Cucumbers',
  'Carrots',
  'Lettuce',
  'Spinach',
  'Broccoli',
  'Cheese',
  'Yogurt',
  'Butter',
  'Sugar',
  'Salt',
  'Pepper',
  'Coffee',
  'Tea',
  'Juice',
  'Water',
  'Cookies',
  'Chocolate',
];

function Demo() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState('');
  const [opened, setOpened] = useState(false);
  const [hovered, setHovered] = useState(-1);
  const filtered = groceries.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
  const items = filtered.map((item, index) => (
    <UnstyledButton
      data-list-item
      key={item}
      display="block"
      bg={index === hovered ? 'var(--mantine-color-blue-light)' : undefined}
      w="100%"
      p={5}
    >
      {item}
    </UnstyledButton>
  ));

  return (
    <Popover width="target" opened={opened}>
      <Popover.Target>
        <TextInput
          value={query}
          onFocus={() => setOpened(true)}
          onBlur={() => setOpened(false)}
          onChange={(event) => {
            setQuery(event.currentTarget.value);
            setHovered(-1);
          }}
          onKeyDown={(event) => {
            if (event.key === 'ArrowDown') {
              event.preventDefault();
              setHovered((current) => {
                const nextIndex = current + 1 >= filtered.length ? current : current + 1;
                viewportRef.current
                  ?.querySelectorAll('[data-list-item]')
                  ?.[nextIndex]?.scrollIntoView({ block: 'nearest' });
                return nextIndex;
              });
            }

            if (event.key === 'ArrowUp') {
              event.preventDefault();
              setHovered((current) => {
                const nextIndex = current - 1 < 0 ? current : current - 1;
                viewportRef.current
                  ?.querySelectorAll('[data-list-item]')
                  ?.[nextIndex]?.scrollIntoView({ block: 'nearest' });
                return nextIndex;
              });
            }
          }}
          placeholder="Search groceries"
        />
      </Popover.Target>
      <Popover.Dropdown p="xs">
        <ScrollArea.Autosize viewportRef={viewportRef} mah={200} type="always">
          {items.length > 0 ? items : <Text c="dimmed">Nothing found</Text>}
        </ScrollArea.Autosize>
      </Popover.Dropdown>
    </Popover>
  );
}
`,L=["Apples","Bananas","Oranges","Milk","Bread","Eggs","Chicken","Beef","Pasta","Rice","Potatoes","Onions","Tomatoes","Cucumbers","Carrots","Lettuce","Spinach","Broccoli","Cheese","Yogurt","Butter","Sugar","Salt","Pepper","Coffee","Tea","Juice","Water","Cookies","Chocolate"],V={type:"code",component:function(){let e=(0,i.useRef)(null),[t,r]=(0,i.useState)(""),[o,n]=(0,i.useState)(!1),[l,a]=(0,i.useState)(-1),s=L.filter(e=>e.toLowerCase().includes(t.toLowerCase())),u=s.map((e,t)=>i.createElement(E.k,{"data-list-item":!0,key:e,display:"block",bg:t===l?"var(--mantine-color-blue-light)":void 0,w:"100%",p:5},e));return i.createElement(q.J,{width:"target",opened:o},i.createElement(q.J.Target,null,i.createElement(B.o,{value:t,onFocus:()=>n(!0),onBlur:()=>n(!1),onChange:e=>{r(e.currentTarget.value),a(-1)},onKeyDown:t=>{"ArrowDown"===t.key&&(t.preventDefault(),a(t=>{let r=t+1>=s.length?t:t+1;return e.current?.querySelectorAll("[data-list-item]")?.[r]?.scrollIntoView({block:"nearest"}),r})),"ArrowUp"===t.key&&(t.preventDefault(),a(t=>{let r=t-1<0?t:t-1;return e.current?.querySelectorAll("[data-list-item]")?.[r]?.scrollIntoView({block:"nearest"}),r}))},placeholder:"Search groceries"})),i.createElement(q.J.Dropdown,{p:"xs"},i.createElement(c.x.Autosize,{viewportRef:e,mah:200,type:"always"},u.length>0?u:i.createElement(Text.x,{c:"dimmed"},"Nothing found"))))},code:H,centered:!0,maxWidth:340},N=(0,l.A)(a.us.ScrollArea);function O(e){let t={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components},{Demo:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"ScrollArea"})," component supports the following props:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"type"})," defines scrollbars behavior:","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"hover"})," – scrollbars are visible on hover"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"scroll"})," – scrollbars are visible on scroll"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"auto"})," – similar to ",(0,o.jsx)(t.code,{children:"overflow: auto"})," – scrollbars are always visible when the content is overflowing"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"always"})," – same as ",(0,o.jsx)(t.code,{children:"auto"}),", but scrollbars are always visible regardless of whether the content is overflowing"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"never"})," – scrollbars are always hidden"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"offsetScrollbars"})," – offset scrollbars with padding"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"scrollbarSize"})," – scrollbar size, controls scrollbar and thumb width/height"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"scrollHideDelay"})," – delay in ms to hide scrollbars, applicable only when type is ",(0,o.jsx)(t.code,{children:"hover"})," or ",(0,o.jsx)(t.code,{children:"scroll"})]}),"\n"]}),"\n",(0,o.jsx)(r,{data:m}),"\n",(0,o.jsx)(t.h2,{id:"horizontal-scrollbars",children:"Horizontal scrollbars"}),"\n",(0,o.jsx)(r,{data:p}),"\n",(0,o.jsx)(t.h2,{id:"subscribe-to-scroll-position-changes",children:"Subscribe to scroll position changes"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"onScrollPositionChange"})," function to subscribe to scroll position changes,\nit will be called each time user scrolls with x and y coordinates:"]}),"\n",(0,o.jsx)(r,{data:v}),"\n",(0,o.jsx)(t.h2,{id:"scroll-to-position",children:"Scroll to position"}),"\n",(0,o.jsxs)(t.p,{children:["To programmatically scroll to any position,\nget viewport element ref with ",(0,o.jsx)(t.code,{children:"viewportRef"})," prop and call ",(0,o.jsx)(t.code,{children:"scrollTo"})," method:"]}),"\n",(0,o.jsx)(r,{data:S}),"\n",(0,o.jsx)(t.h2,{id:"styles-api",children:"Styles API"}),"\n",(0,o.jsx)(r,{data:j}),"\n",(0,o.jsx)(t.h2,{id:"scroll-element-into-view",children:"Scroll element into view"}),"\n",(0,o.jsx)(r,{data:z}),"\n",(0,o.jsx)(t.h2,{id:"scrollareaautosize",children:"ScrollArea.Autosize"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"ScrollArea.Autosize"})," component allows to create scrollable containers when given max-height is reached:"]}),"\n",(0,o.jsx)(r,{data:R}),"\n",(0,o.jsx)(t.h2,{id:"scrollareaautosize-with-popover",children:"ScrollArea.Autosize with Popover"}),"\n",(0,o.jsx)(r,{data:V})]})}function _(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(N,{...e,children:(0,o.jsx)(O,{...e})})}},72048:function(e,t,r){"use strict";r.d(t,{C:function(){return a}});var o=r(27378),n=r(28086);let l={min:-1/0,max:1/0};function a(e=0,t){let{min:r,max:a}={...l,...t},[i,s]=(0,o.useState)((0,n.u)(e,r,a));return[i,{increment:()=>s(e=>(0,n.u)(e+1,r,a)),decrement:()=>s(e=>(0,n.u)(e-1,r,a)),set:e=>s((0,n.u)(e,r,a)),reset:()=>s((0,n.u)(e,r,a))}]}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=95974)}),_N_E=e.O()}]);