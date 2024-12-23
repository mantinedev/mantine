(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[65282],{71105:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/scroll-area",function(){return t(49896)}])},49896:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return R}});var o=t(52322),n=t(45392),l=t(28559),s=t(20135),i=t(89280);let a={type:"configurator",component:function(e){return(0,o.jsx)(l.x,{maw:400,mx:"auto",children:(0,o.jsx)(s.x,{h:250,...e,children:(0,o.jsx)(i.V,{})})})},code:`
import { ScrollArea } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea h={250}{{props}}>
      {/* ... content */}
    </ScrollArea>
  );
}
`,controls:[{prop:"type",type:"select",data:[{value:"hover",label:"Hover"},{value:"auto",label:"Auto"},{value:"always",label:"Always"},{value:"scroll",label:"Scroll"},{value:"never",label:"Never"}],initialValue:"hover",libraryValue:"hover"},{prop:"offsetScrollbars",type:"boolean",libraryValue:!1,initialValue:!1},{prop:"scrollbarSize",type:"number",min:2,max:20,step:2,libraryValue:10,initialValue:10},{prop:"scrollHideDelay",type:"number",min:0,max:6e3,step:500,libraryValue:1e3,initialValue:1e3}]},c={type:"code",component:function(){return(0,o.jsx)(s.x,{w:300,h:200,children:(0,o.jsx)(l.x,{w:600,children:(0,o.jsx)(i.V,{})})})},centered:!0,code:`
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
`};var u=t(96504),d=t(2784),h=t(65438),p=t(8582),m=t(45909);let x={type:"code",component:function(){let[e,r]=(0,d.useState)({x:0,y:0});return(0,o.jsxs)(h.K,{align:"center",children:[(0,o.jsx)(s.x,{w:300,h:200,onScrollPositionChange:r,children:(0,o.jsx)(l.x,{w:600,children:(0,o.jsx)(i.V,{})})}),(0,o.jsxs)(p.x,{children:["Scroll position: ",(0,o.jsx)(m.E,{children:`{ x: ${e.x}, y: ${e.y} }`})]})]})},code:`
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
`};var f=t(93010),w=t(39629);let v={type:"code",component:function(){let e=(0,d.useRef)(null);return(0,o.jsxs)(h.K,{align:"center",children:[(0,o.jsx)(s.x,{w:300,h:200,viewportRef:e,children:(0,o.jsx)(i.V,{})}),(0,o.jsxs)(f.Z,{justify:"center",children:[(0,o.jsx)(w.z,{onClick:()=>e.current.scrollTo({top:e.current.scrollHeight,behavior:"smooth"}),children:"Scroll to bottom"}),(0,o.jsx)(w.z,{onClick:()=>e.current.scrollTo({top:e.current.scrollHeight/2,behavior:"smooth"}),children:"Scroll to center"}),(0,o.jsx)(w.z,{onClick:()=>e.current.scrollTo({top:0,behavior:"smooth"}),children:"Scroll to top"})]})]})},code:`
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
`};var g={scrollbar:"m_3dc2e23a",thumb:"m_b848b7ea",corner:"m_342d2ec1"};let b={type:"code",component:function(){return(0,o.jsx)(s.x,{w:300,h:200,type:"always",offsetScrollbars:!0,classNames:g,children:(0,o.jsx)(l.x,{w:600,children:(0,o.jsx)(i.V,{})})})},centered:!0,code:[{fileName:"Demo.tsx",code:`
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
`,language:"tsx"},{fileName:"Demo.module.css",code:`
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
`,language:"scss"}]};var y=t(63409),j=t(74770);let S=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83C\uDF4A Oranges","\uD83E\uDD5B Milk","\uD83C\uDF5E Bread","\uD83E\uDD5A Eggs","\uD83C\uDF57 Chicken","\uD83E\uDD69 Beef","\uD83C\uDF5D Pasta","\uD83C\uDF5A Rice","\uD83E\uDD54 Potatoes","\uD83E\uDDC5 Onions","\uD83C\uDF45 Tomatoes","\uD83E\uDD52 Cucumbers","\uD83E\uDD55 Carrots","\uD83E\uDD6C Lettuce","\uD83C\uDF43 Spinach","\uD83E\uDD66 Broccoli","\uD83E\uDDC0 Cheese","\uD83C\uDF66 Yogurt","\uD83E\uDDC8 Butter","\uD83C\uDF5A Sugar","\uD83E\uDDC2 Salt","\uD83C\uDF36️ Pepper","☕ Coffee","\uD83C\uDF75 Tea","\uD83E\uDD64 Juice","\uD83D\uDCA7 Water","\uD83C\uDF6A Cookies","\uD83C\uDF6B Chocolate"],k={type:"code",component:function(){let e=(0,d.useRef)(null),[r,t]=(0,d.useState)(""),[n,l]=(0,d.useState)(-1),i=S.filter(e=>e.toLowerCase().includes(r.toLowerCase())),a=i.map((e,r)=>(0,o.jsx)(y.k,{"data-list-item":!0,display:"block",bg:r===n?"var(--mantine-color-blue-light)":void 0,w:"100%",p:5,children:e},e));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(j.o,{value:r,onChange:e=>{t(e.currentTarget.value),l(-1)},onKeyDown:r=>{"ArrowDown"===r.key&&(r.preventDefault(),l(r=>{let t=r+1>=i.length?r:r+1;return e.current?.querySelectorAll("[data-list-item]")?.[t]?.scrollIntoView({block:"nearest"}),t})),"ArrowUp"===r.key&&(r.preventDefault(),l(r=>{let t=r-1<0?r:r-1;return e.current?.querySelectorAll("[data-list-item]")?.[t]?.scrollIntoView({block:"nearest"}),t}))},placeholder:"Search groceries"}),(0,o.jsx)(s.x,{h:150,type:"always",mt:"md",viewportRef:e,children:a})]})},code:`
import { useState, useRef } from 'react';
import { ScrollArea, UnstyledButton, TextInput } from '@mantine/core';

const groceries: string[] = [
  '\u{1F34E} Apples',
  '\u{1F34C} Bananas',
  '\u{1F34A} Oranges',
  '\u{1F95B} Milk',
  '\u{1F35E} Bread',
  '\u{1F95A} Eggs',
  '\u{1F357} Chicken',
  '\u{1F969} Beef',
  '\u{1F35D} Pasta',
  '\u{1F35A} Rice',
  '\u{1F954} Potatoes',
  '\u{1F9C5} Onions',
  '\u{1F345} Tomatoes',
  '\u{1F952} Cucumbers',
  '\u{1F955} Carrots',
  '\u{1F96C} Lettuce',
  '\u{1F343} Spinach',
  '\u{1F966} Broccoli',
  '\u{1F9C0} Cheese',
  '\u{1F366} Yogurt',
  '\u{1F9C8} Butter',
  '\u{1F35A} Sugar',
  '\u{1F9C2} Salt',
  '\u{1F336}\uFE0F Pepper',
  '\u2615 Coffee',
  '\u{1F375} Tea',
  '\u{1F964} Juice',
  '\u{1F4A7} Water',
  '\u{1F36A} Cookies',
  '\u{1F36B} Chocolate',
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
`,centered:!0,maxWidth:340};var A=t(43647);let C={type:"code",component:function(){let[e,r]=(0,A.C)(3,{min:0,max:10}),t=Array(e).fill(0).map((e,r)=>(0,o.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta perspiciatis reiciendis voluptate eaque itaque quos. Natus iure tenetur libero, reprehenderit ad, sequi, in aliquam eos necessitatibus expedita delectus veniam culpa!"},r));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.x.Autosize,{mah:300,maw:400,mx:"auto",children:t}),(0,o.jsxs)(f.Z,{justify:"center",mt:"md",children:[(0,o.jsx)(w.z,{color:"red",onClick:r.decrement,children:"Remove paragraph"}),(0,o.jsx)(w.z,{onClick:r.increment,children:"Add paragraph"})]})]})},code:`
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
`};var B=t(26972);let T=["Apples","Bananas","Oranges","Milk","Bread","Eggs","Chicken","Beef","Pasta","Rice","Potatoes","Onions","Tomatoes","Cucumbers","Carrots","Lettuce","Spinach","Broccoli","Cheese","Yogurt","Butter","Sugar","Salt","Pepper","Coffee","Tea","Juice","Water","Cookies","Chocolate"],D={type:"code",component:function(){let e=(0,d.useRef)(null),[r,t]=(0,d.useState)(""),[n,i]=(0,d.useState)(!1),[a,c]=(0,d.useState)(-1),u=T.filter(e=>e.toLowerCase().includes(r.toLowerCase())),h=u.map((e,r)=>(0,o.jsx)(y.k,{"data-list-item":!0,display:"block",bg:r===a?"var(--mantine-color-blue-light)":void 0,w:"100%",p:5,children:e},e));return(0,o.jsxs)(B.J,{width:"target",opened:n,children:[(0,o.jsx)(B.J.Target,{children:(0,o.jsx)(j.o,{value:r,onFocus:()=>i(!0),onBlur:()=>i(!1),onChange:e=>{t(e.currentTarget.value),c(-1)},onKeyDown:r=>{"ArrowDown"===r.key&&(r.preventDefault(),c(r=>{let t=r+1>=u.length?r:r+1;return e.current?.querySelectorAll("[data-list-item]")?.[t]?.scrollIntoView({block:"nearest"}),t})),"ArrowUp"===r.key&&(r.preventDefault(),c(r=>{let t=r-1<0?r:r-1;return e.current?.querySelectorAll("[data-list-item]")?.[t]?.scrollIntoView({block:"nearest"}),t}))},placeholder:"Search groceries"})}),(0,o.jsx)(B.J.Dropdown,{p:0,children:(0,o.jsx)(s.x.Autosize,{viewportRef:e,mah:200,type:"always",scrollbars:"y",children:(0,o.jsx)(l.x,{px:"xs",py:5,children:h.length>0?h:(0,o.jsx)(p.x,{c:"dimmed",children:"Nothing found"})})})})]})},code:`
import { useState, useRef } from 'react';
import { ScrollArea, Popover, TextInput, UnstyledButton, Text, Box } from '@mantine/core';

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
      <Popover.Dropdown p={0}>
        <ScrollArea.Autosize viewportRef={viewportRef} mah={200} type="always" scrollbars="y">
          <Box px="xs" py={5}>
            {items.length > 0 ? items : <Text c="dimmed">Nothing found</Text>}
          </Box>
        </ScrollArea.Autosize>
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0,maxWidth:340};var F=t(25071),z=t(15019);let I=(0,F.A)(z.us.ScrollArea);function P(e){let r={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components},{Demo:t}=r;return t||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"ScrollArea"})," component supports the following props:"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"type"})," defines scrollbars behavior:","\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"hover"})," – scrollbars are visible on hover"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"scroll"})," – scrollbars are visible on scroll"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"auto"})," – similar to ",(0,o.jsx)(r.code,{children:"overflow: auto"})," – scrollbars are always visible when the content is overflowing"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"always"})," – same as ",(0,o.jsx)(r.code,{children:"auto"}),", but scrollbars are always visible regardless of whether the content is overflowing"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"never"})," – scrollbars are always hidden"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"offsetScrollbars"})," – offset scrollbars with padding"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"scrollbarSize"})," – scrollbar size, controls scrollbar and thumb width/height"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"scrollHideDelay"})," – delay in ms to hide scrollbars, applicable only when type is ",(0,o.jsx)(r.code,{children:"hover"})," or ",(0,o.jsx)(r.code,{children:"scroll"})]}),"\n"]}),"\n",(0,o.jsx)(t,{data:a}),"\n",(0,o.jsx)(r.h2,{id:"horizontal-scrollbars",children:"Horizontal scrollbars"}),"\n",(0,o.jsx)(t,{data:c}),"\n",(0,o.jsx)(r.h2,{id:"disable-horizontal-scrollbars",children:"Disable horizontal scrollbars"}),"\n",(0,o.jsxs)(r.p,{children:["To disable horizontal scrollbars set ",(0,o.jsx)(r.code,{children:'scrollbars="y"'})," prop:"]}),"\n",(0,o.jsx)(t,{data:u.q}),"\n",(0,o.jsx)(r.h2,{id:"subscribe-to-scroll-position-changes",children:"Subscribe to scroll position changes"}),"\n",(0,o.jsxs)(r.p,{children:["Set ",(0,o.jsx)(r.code,{children:"onScrollPositionChange"})," function to subscribe to scroll position changes,\nit will be called each time user scrolls with x and y coordinates:"]}),"\n",(0,o.jsx)(t,{data:x}),"\n",(0,o.jsx)(r.h2,{id:"scroll-to-position",children:"Scroll to position"}),"\n",(0,o.jsxs)(r.p,{children:["To programmatically scroll to any position,\nget viewport element ref with ",(0,o.jsx)(r.code,{children:"viewportRef"})," prop and call ",(0,o.jsx)(r.code,{children:"scrollTo"})," method:"]}),"\n",(0,o.jsx)(t,{data:v}),"\n",(0,o.jsx)(r.h2,{id:"styles-api",children:"Styles API"}),"\n",(0,o.jsx)(t,{data:b}),"\n",(0,o.jsx)(r.h2,{id:"scroll-element-into-view",children:"Scroll element into view"}),"\n",(0,o.jsx)(t,{data:k}),"\n",(0,o.jsx)(r.h2,{id:"scrollareaautosize",children:"ScrollArea.Autosize"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"ScrollArea.Autosize"})," component allows to create scrollable containers when given max-height is reached:"]}),"\n",(0,o.jsx)(t,{data:C}),"\n",(0,o.jsx)(r.h2,{id:"scrollareaautosize-with-popover",children:"ScrollArea.Autosize with Popover"}),"\n",(0,o.jsx)(t,{data:D})]})}function R(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(I,{...e,children:(0,o.jsx)(P,{...e})})}},96504:function(e,r,t){"use strict";t.d(r,{q:function(){return i}});var o=t(52322),n=t(20135),l=t(28559),s=t(89280);let i={type:"code",component:function(){return(0,o.jsx)(n.x,{w:300,h:200,scrollbars:"y",children:(0,o.jsx)(l.x,{w:600,children:(0,o.jsx)(s.V,{})})})},centered:!0,code:`
import { ScrollArea, Box } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea w={300} h={200} scrollbars="y">
      <Box w={600}>
        {/* ... content */}
      </Box>
    </ScrollArea>
  );
}
`}},89280:function(e,r,t){"use strict";t.d(r,{V:function(){return l}});var o=t(52322),n=t(8582);function l(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.x,{size:"xl",fw:700,children:"Charizard (Pok\xe9mon)"}),(0,o.jsx)(n.x,{c:"dimmed",children:"Charizard description from Bulbapedia"}),(0,o.jsx)(n.x,{size:"sm",mt:"md",children:"Charizard is a draconic, bipedal Pok\xe9mon. It is primarily orange with a cream underside from the chest to the tip of its tail. It has a long neck, small blue eyes, slightly raised nostrils, and two horn-like structures protruding from the back of its rectangular head. There are two fangs visible in the upper jaw when its mouth is closed. Two large wings with blue-green undersides sprout from its back, and a horn-like appendage juts out from the top of the third joint of each wing. A single wing-finger is visible through the center of each wing membrane. Charizard's arms are short and skinny compared to its robust belly, and each limb has three white claws. It has stocky legs with cream-colored soles on each of its plantigrade feet. The tip of its long, tapering tail burns with a sizable flame."}),(0,o.jsx)(n.x,{size:"sm",mt:"md",children:"As Mega Charizard X, its body and legs are more physically fit, though its arms remain thin. Its skin turns black with a sky-blue underside and soles. Two spikes with blue tips curve upward from the front and back of each shoulder, while the tips of its horns sharpen, turn blue, and curve slightly upward. Its brow and claws are larger, and its eyes are now red. It has two small, fin-like spikes under each horn and two more down its lower neck. The finger disappears from the wing membrane, and the lower edges are divided into large, rounded points. The third joint of each wing-arm is adorned with a claw-like spike. Mega Charizard X breathes blue flames out the sides of its mouth, and the flame on its tail now burns blue. It is said that its new power turns it black and creates more intense flames."})]})}},43647:function(e,r,t){"use strict";t.d(r,{C:function(){return s}});var o=t(2784),n=t(82692);let l={min:-1/0,max:1/0};function s(e=0,r){let{min:t,max:s}={...l,...r},[i,a]=(0,o.useState)((0,n.u)(e,t,s));return[i,{increment:()=>a(e=>(0,n.u)(e+1,t,s)),decrement:()=>a(e=>(0,n.u)(e-1,t,s)),set:e=>a((0,n.u)(e,t,s)),reset:()=>a((0,n.u)(e,t,s))}]}}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=71105)}),_N_E=e.O()}]);