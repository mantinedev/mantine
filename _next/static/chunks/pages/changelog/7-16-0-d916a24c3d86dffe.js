(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[15763],{59207:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-16-0",function(){return n(4566)}])},4566:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});var r=n(31085),o=n(71184),i=n(13001),a=n(16631),s=n(85233),l=n(75898),c=n(43741),d=n(24377),u=n(81160),h=n(18675),p=n(20017);let m=(0,h.P)(p.XZ.Changelog7160);function v(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"use-scroll-spy-hook",children:"use-scroll-spy hook"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/hooks/use-scroll-spy",children:"use-scroll-spy"})," hook tracks scroll position and returns index of the\nelement that is currently in the viewport. It is useful for creating\ntable of contents components (like in mantine.dev sidebar on the right side)\nand similar features."]}),"\n",(0,r.jsx)(n,{data:i.s}),"\n",(0,r.jsx)(t.h2,{id:"tableofcontents-component",children:"TableOfContents component"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/core/table-of-contents",children:"TableOfContents"})," component is built on top of ",(0,r.jsx)(t.code,{children:"use-scroll-spy"})," hook\nand can be used to create table of contents components like the one on the right side of mantine.dev\ndocumentation sidebar:"]}),"\n",(0,r.jsx)(n,{data:a.C}),"\n",(0,r.jsx)(t.h2,{id:"inputclearbutton-component",children:"Input.ClearButton component"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.code,{children:"Input.ClearButton"})," component can be used to add clear button to custom inputs\nbased on ",(0,r.jsx)(t.code,{children:"Input"})," component. ",(0,r.jsx)(t.code,{children:"size"})," of the clear button is automatically\ninherited from the input:"]}),"\n",(0,r.jsx)(n,{data:s.m}),"\n",(0,r.jsx)(t.h2,{id:"popover-with-overlay",children:"Popover with overlay"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/core/popover",children:"Popover"})," and other components based on it now support ",(0,r.jsx)(t.code,{children:"withOverlay"})," prop:"]}),"\n",(0,r.jsx)(n,{data:l.L}),"\n",(0,r.jsx)(t.h2,{id:"container-queries-in-carousel",children:"Container queries in Carousel"}),"\n",(0,r.jsxs)(t.p,{children:["You can now use ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",children:"container queries"}),"\nin ",(0,r.jsx)(t.a,{href:"/x/carousel",children:"Carousel"})," component. With container queries, all responsive values\nare adjusted based on the container width, not the viewport width."]}),"\n",(0,r.jsx)(t.p,{children:"Example of using container queries. To see how the grid changes, resize the root element\nof the demo with the resize handle located at the bottom right corner of the demo:"}),"\n",(0,r.jsx)(n,{data:c.k}),"\n",(0,r.jsx)(t.h2,{id:"rangeslider-restricttomarks",children:"RangeSlider restrictToMarks"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/core/slider",children:"RangeSlider"})," component now supports ",(0,r.jsx)(t.code,{children:"restrictToMarks"})," prop:"]}),"\n",(0,r.jsx)(n,{data:d.A}),"\n",(0,r.jsx)(t.h2,{id:"pagination-withpages-prop",children:"Pagination withPages prop"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/core/pagination",children:"Pagination"})," component now supports ",(0,r.jsx)(t.code,{children:"withPages"})," prop which allows hiding pages\ncontrols and displaying only previous and next buttons:"]}),"\n",(0,r.jsx)(n,{data:u.h}),"\n",(0,r.jsx)(t.h2,{id:"useform-touchtrigger-option",children:"useForm touchTrigger option"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/form/use-form",children:"use-form"})," hook now supports ",(0,r.jsx)(t.code,{children:"touchTrigger"})," option that allows customizing events that change touched state.\nIt accepts two options:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"change"})," (default) – field will be considered touched when its value changes or it has been focused"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"focus"})," – field will be considered touched only when it has been focused"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Example of using ",(0,r.jsx)(t.code,{children:"focus"})," trigger:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: { a: 1 },\n  touchTrigger: 'focus',\n});\n\nform.isTouched('a'); // -> false\nform.setFieldValue('a', 2);\nform.isTouched('a'); // -> false\n\n// onFocus is called automatically when the user focuses the field\nform.getInputProps('a').onFocus();\nform.isTouched('a'); // -> true\n"})}),"\n",(0,r.jsx)(t.h2,{id:"help-center-updates",children:"Help Center updates"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/native-required",children:"Native browser validation does not work in some components, what should I do?"})," question"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/disabled-js",children:"My styles are broken with disabled JavaScript. What should I do?"})," question"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/select-fuzzy",children:"How can I add fuzzy search to Select component?"})," question"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/local-storage-effect",children:"use-local-storage hook returns real value only after mounting, is it a bug?"})," question"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/dropzone-upload",children:"How can I upload files from Dropzone component?"})," question"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/autocomplete",children:"Autocomplete"})," now supports ",(0,r.jsx)(t.code,{children:"clearable"})," prop"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/styles/postcss-preset/#where--mixins",children:"where-* mixins"})," documentation has been added"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/hooks/use-local-storage",children:"use-local-storage"})," hook now supports ",(0,r.jsx)(t.code,{children:"sync"})," option which allows disabling synchronization between browser tabs"]}),"\n"]})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(m,{...e,children:(0,r.jsx)(v,{...e})})}},80502:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var r=(0,n(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},61584:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var r=(0,n(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},11749:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var r=(0,n(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var r=(0,n(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var r=(0,n(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var r=(0,n(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},43741:(e,t,n)=>{"use strict";n.d(t,{k:()=>a});var r=n(31085),o=n(64893),i=n(12946);let a={type:"code",component:function(){return(0,r.jsx)("div",{style:{resize:"horizontal",overflow:"hidden",maxWidth:"100%",minWidth:250,padding:10},children:(0,r.jsx)(o.F,{withIndicators:!0,height:200,type:"container",slideSize:{base:"100%","300px":"50%","500px":"33.333333%"},slideGap:{base:0,"300px":"md","500px":"lg"},emblaOptions:{loop:!0,align:"start"},children:(0,r.jsx)(i.t,{count:6})})})},code:`
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    // Wrapper div is added for demonstration purposes only,
    // It is not required in real projects
    <div
      style={{
        resize: 'horizontal',
        overflow: 'hidden',
        maxWidth: '100%',
        minWidth: 250,
        padding: 10,
      }}
    >
      <Carousel
        withIndicators
        height={200}
        type="container"
        slideSize={{ base: '100%', '300px': '50%', '500px': '33.333333%' }}
        slideGap={{ base: 0, '300px': 'md', '500px': 'lg' }}
        emblaOptions={{ loop: true, align: 'start' }}
      >
        <Carousel.Slide>1</Carousel.Slide>
        <Carousel.Slide>2</Carousel.Slide>
        <Carousel.Slide>3</Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
    </div>
  );
}
`}},12946:(e,t,n)=>{"use strict";n.d(t,{t:()=>s});var r=n(31085),o=n(64893),i=n(34056);function a({children:e}){return(0,r.jsx)(i.a,{style:{backgroundColor:"var(--mantine-color-blue-filled)",color:"var(--mantine-color-white)",height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",fontSize:50,fontWeight:"bold"},children:e})}function s({count:e}){let t=Array(e).fill(0).map((e,t)=>(0,r.jsx)(o.F.Slide,{children:(0,r.jsx)(a,{children:t+1})},t));return(0,r.jsx)(r.Fragment,{children:t})}},85233:(e,t,n)=>{"use strict";n.d(t,{m:()=>a});var r=n(31085),o=n(14041),i=n(34452);let a={type:"configurator",component:function(e){let[t,n]=(0,o.useState)("clearable");return(0,r.jsx)(i.p,{placeholder:"Clearable input",value:t,onChange:e=>n(e.currentTarget.value),rightSection:""!==t?(0,r.jsx)(i.p.ClearButton,{onClick:()=>n("")}):void 0,rightSectionPointerEvents:"auto",...e})},code:e=>`
import { Input } from '@mantine/core';

function Demo(){
  const [value, setValue] = useState('clearable');

  return (
    <Input
      placeholder="Clearable input"
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      rightSection={value !== '' ? <Input.ClearButton onClick={() => setValue('')} /> : undefined}
      rightSectionPointerEvents="auto"
      size="${e.size}"
    />
  );
}
`,maxWidth:340,centered:!0,controls:[{type:"size",prop:"size",initialValue:"sm",libraryValue:"__"}]}},81160:(e,t,n)=>{"use strict";n.d(t,{h:()=>c});var r=n(31085),o=n(14041),i=n(56051),a=n(93065),s=n(48895);let l=Math.ceil(14.5),c={type:"code",component:function(){let[e,t]=(0,o.useState)(1),n=`Showing ${10*(e-1)+1} \u2013 ${Math.min(145,10*e)} of 145`;return(0,r.jsxs)(i.Y,{justify:"flex-end",children:[(0,r.jsx)(a.E,{size:"sm",children:n}),(0,r.jsx)(s.d,{total:l,value:e,onChange:t,withPages:!1})]})},code:`
import { useState } from 'react';
import { Group, Pagination, Text } from '@mantine/core';

const limit = 10;
const total = 145;
const totalPages = Math.ceil(total / limit);

function Demo() {
  const [page, setPage] = useState(1);
  const message = \`Showing \${limit * (page - 1) + 1} \u2013 \${Math.min(total, limit * page)} of \${total}\`;

  return (
    <Group justify="flex-end">
      <Text size="sm">{message}</Text>
      <Pagination total={totalPages} value={page} onChange={setPage} withPages={false} />
    </Group>
  );
}
`}},75898:(e,t,n)=>{"use strict";n.d(t,{L:()=>u});var r=n(31085),o=n(35764),i=n(33970),a=n(86658),s=n(56051),l=n(75390),c=n(93065),d=n(12129);let u={type:"code",component:function(){return(0,r.jsxs)(o.A,{width:320,shadow:"md",withArrow:!0,withOverlay:!0,overlayProps:{zIndex:1e4,blur:"8px"},zIndex:10001,children:[(0,r.jsx)(o.A.Target,{children:(0,r.jsx)(i.N,{style:{zIndex:10001,position:"relative"},children:(0,r.jsx)(a.e,{src:"https://avatars.githubusercontent.com/u/79146003?s=200&v=4",radius:"xl"})})}),(0,r.jsxs)(o.A.Dropdown,{children:[(0,r.jsxs)(s.Y,{children:[(0,r.jsx)(a.e,{src:"https://avatars.githubusercontent.com/u/79146003?s=200&v=4",radius:"xl"}),(0,r.jsxs)(l.B,{gap:5,children:[(0,r.jsx)(c.E,{size:"sm",fw:700,style:{lineHeight:1},children:"Mantine"}),(0,r.jsx)(d.M,{href:"https://x.com/mantinedev",c:"dimmed",size:"xs",style:{lineHeight:1},children:"@mantinedev"})]})]}),(0,r.jsx)(c.E,{size:"sm",mt:"md",children:"Customizable React components and hooks library with focus on usability, accessibility and developer experience"}),(0,r.jsxs)(s.Y,{mt:"md",gap:"xl",children:[(0,r.jsxs)(c.E,{size:"sm",children:[(0,r.jsx)("b",{children:"0"})," Following"]}),(0,r.jsxs)(c.E,{size:"sm",children:[(0,r.jsx)("b",{children:"1,174"})," Followers"]})]})]})]})},code:`
import { Popover, Avatar, Text, Group, Anchor, Stack } from '@mantine/core';

function Demo() {
  return (
    <Popover
      width={320}
      shadow="md"
      withArrow
      withOverlay
      overlayProps={{ zIndex: 10000, blur: '8px' }}
      zIndex={10001}
    >
      <Popover.Target>
        <UnstyledButton style={{ zIndex: 10001, position: 'relative' }}>
          <Avatar src="https://avatars.githubusercontent.com/u/79146003?s=200&v=4" radius="xl" />
        </UnstyledButton>
      </Popover.Target>
      <Popover.Dropdown>
        <Group>
          <Avatar src="https://avatars.githubusercontent.com/u/79146003?s=200&v=4" radius="xl" />
          <Stack gap={5}>
            <Text size="sm" fw={700} style={{ lineHeight: 1 }}>
              Mantine
            </Text>
            <Anchor href="https://x.com/mantinedev" c="dimmed" size="xs" style={{ lineHeight: 1 }}>
              @mantinedev
            </Anchor>
          </Stack>
        </Group>

        <Text size="sm" mt="md">
          Customizable React components and hooks library with focus on usability, accessibility and
          developer experience
        </Text>

        <Group mt="md" gap="xl">
          <Text size="sm">
            <b>0</b> Following
          </Text>
          <Text size="sm">
            <b>1,174</b> Followers
          </Text>
        </Group>
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0}},24377:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var r=n(31085),o=n(75390),i=n(84281),a=n(1784);let s={type:"code",component:function(){return(0,r.jsxs)(o.B,{children:[(0,r.jsx)(i.A,{restrictToMarks:!0,defaultValue:25,marks:Array.from({length:5}).map((e,t)=>({value:25*t}))}),(0,r.jsx)(a.F,{restrictToMarks:!0,defaultValue:[5,15],marks:[{value:5},{value:15},{value:25},{value:35},{value:70},{value:80},{value:90}]})]})},code:`
import { RangeSlider, Slider, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Slider
        restrictToMarks
        defaultValue={25}
        marks={Array.from({ length: 5 }).map((_, index) => ({ value: index * 25 }))}
      />

      <RangeSlider
        restrictToMarks
        defaultValue={[5, 15]}
        marks={[
          { value: 5 },
          { value: 15 },
          { value: 25 },
          { value: 35 },
          { value: 70 },
          { value: 80 },
          { value: 90 },
        ]}
      />
    </Stack>
  );
}
`,centered:!0,maxWidth:400}},16631:(e,t,n)=>{"use strict";n.d(t,{C:()=>i});var r=n(31085),o=n(55897);let i={type:"configurator",component:function(e){return(0,r.jsx)(o.M,{...e,scrollSpyOptions:{selector:"#mdx :is(h1, h2, h3, h4, h5, h6)"},getControlProps:({data:e})=>({onClick:()=>e.getNode().scrollIntoView(),children:e.value})})},code:`
import { TableOfContents } from '@mantine/core';


function Demo() {
  return (
    <TableOfContents
      {{props}}
      scrollSpyOptions={{
        selector: '#mdx :is(h1, h2, h3, h4, h5, h6)',
      }}
      getControlProps={({ data }) => ({
        onClick: () => data.getNode().scrollIntoView(),
        children: data.value,
      })}
    />
  );
}
`,centered:!0,maxWidth:340,controls:[{type:"segmented",prop:"variant",initialValue:"filled",data:["filled","light","none"],libraryValue:null},{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"__"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"__"}]}},13001:(e,t,n)=>{"use strict";n.d(t,{s:()=>s});var r=n(31085),o=n(33970),i=n(93065),a=n(14921);let s={type:"code",component:function(){let e=(0,a.f)({selector:"#mdx :is(h1, h2, h3, h4, h5, h6)"}),t=e.data.map((t,n)=>(0,r.jsx)("li",{style:{listStylePosition:"inside",paddingInlineStart:20*t.depth,background:n===e.active?"var(--mantine-color-blue-light)":void 0},children:(0,r.jsx)(o.N,{onClick:()=>t.getNode().scrollIntoView(),children:t.value})},t.id));return(0,r.jsxs)("div",{children:[(0,r.jsx)(i.E,{children:"Scroll to heading:"}),(0,r.jsx)("ul",{style:{margin:0,padding:0},children:t})]})},code:`
import { Text, UnstyledButton } from '@mantine/core';
import { useScrollSpy } from '@mantine/hooks';

function Demo() {
  const spy = useScrollSpy({
    selector: '#mdx :is(h1, h2, h3, h4, h5, h6)',
  });

  const headings = spy.data.map((heading, index) => (
    <li
      key={heading.id}
      style={{
        listStylePosition: 'inside',
        paddingInlineStart: heading.depth * 20,
        background: index === spy.active ? 'var(--mantine-color-blue-light)' : undefined,
      }}
    >
      <UnstyledButton onClick={() => heading.getNode().scrollIntoView()}>
        {heading.value}
      </UnstyledButton>
    </li>
  ));

  return (
    <div>
      <Text>Scroll to heading:</Text>
      <ul style={{ margin: 0, padding: 0 }}>{headings}</ul>
    </div>
  );
}
`}},64893:(e,t,n)=>{"use strict";n.d(t,{F:()=>V});var r=n(31085),o=n(14041),i=n(88286),a=n(7098),s=n(39735),l=n(33450),c=n(6754),d=n(29686),u=n(69564),h=n(22448),p=n(46746),m=n(33970),v=n(34056),f=n(76076),x=n(68193);let[g,y]=(0,n(59852).F)("Carousel component was not found in tree");var j={root:"m_17884d0f",viewport:"m_a2dae653",container:"m_fcd81474",controls:"m_39bc3463",control:"m_64f58e10",indicators:"m_71ea3ab1",indicator:"m_eae68602",slide:"m_d98df724"};let b={},w=(0,c.P9)((e,t)=>{let{classNames:n,className:o,style:i,styles:a,vars:s,mod:l,...c}=(0,d.Y)("CarouselSlide",b,e),u=y();return(0,r.jsx)(v.a,{ref:t,mod:[{orientation:u.orientation},l],...u.getStyles("slide",{className:o,style:i,classNames:n,styles:a}),...c})});w.classes=j,w.displayName="@mantine/carousel/CarouselSlide";var C=n(92408),k=n(41280),S=n(2306),z=n(93698),M=n(1300),A=n(54212),T=n(4749);function I({slideGap:e,slideSize:t,selector:n}){let o=(0,C.xd)(),i=(0,k.J)({"--carousel-slide-gap":(0,l.GY)((0,S.D)(e)),"--carousel-slide-size":(0,s.D)((0,S.D)(t))}),a=(0,z.H)(o.breakpoints).reduce((n,r)=>(n[r]||(n[r]={}),"object"==typeof e&&void 0!==e[r]&&(n[r]["--carousel-slide-gap"]=(0,l.GY)(e[r])),"object"==typeof t&&void 0!==t[r]&&(n[r]["--carousel-slide-size"]=(0,l.GY)(t[r])),n),{}),c=(0,M.q)((0,z.H)(a),o.breakpoints).filter(e=>(0,z.H)(a[e.value]).length>0).map(e=>({query:`(min-width: ${o.breakpoints[e.value]})`,styles:a[e.value]}));return(0,r.jsx)(A.K,{styles:i,media:c,selector:n})}function P(e){return"object"==typeof e&&null!==e?(0,z.H)(e):[]}function N({slideGap:e,slideSize:t,selector:n}){let o=(0,k.J)({"--carousel-slide-gap":(0,l.GY)((0,S.D)(e)),"--carousel-slide-size":(0,s.D)((0,S.D)(t))}),i=(function({slideGap:e,slideSize:t}){return Array.from(new Set([...P(e),...P(t)])).sort((e,t)=>(0,T.px)(e)-(0,T.px)(t))})({slideGap:e,slideSize:t}).reduce((n,r)=>(n[r]||(n[r]={}),"object"==typeof e&&void 0!==e[r]&&(n[r]["--carousel-slide-gap"]=(0,l.GY)(e[r])),"object"==typeof t&&void 0!==t[r]&&(n[r]["--carousel-slide-size"]=(0,l.GY)(t[r])),n),{}),a=Object.keys(i).map(e=>({query:`carousel (min-width: ${e})`,styles:i[e]}));return(0,r.jsx)(A.K,{styles:o,container:a,selector:n})}function _({dir:e,orientation:t,direction:n}){return"previous"===n?"horizontal"===t?90*("ltr"===e?1:-1):-180:"horizontal"===t?90*("ltr"===e?-1:1):0}let D={controlSize:26,controlsOffset:"sm",slideSize:"100%",slideGap:0,orientation:"horizontal",includeGapInSize:!0,initialSlide:0,withControls:!0,withIndicators:!1,withKeyboardEvents:!0,type:"media"},E={align:"center",loop:!1,slidesToScroll:1,dragFree:!1,inViewThreshold:0,skipSnaps:!1,containScroll:"trimSnaps"},q=(0,a.V)((e,{height:t,controlSize:n,controlsOffset:r})=>({root:{"--carousel-height":(0,s.D)(t),"--carousel-control-size":(0,s.D)(n),"--carousel-controls-offset":(0,l.GY)(r)}})),V=(0,c.P9)((e,t)=>{let n=(0,d.Y)("Carousel",D,e),{classNames:a,className:s,style:l,styles:c,unstyled:y,vars:b,children:w,getEmblaApi:C,onNextSlide:k,onPreviousSlide:S,onSlideChange:z,nextControlProps:M,previousControlProps:A,controlSize:T,controlsOffset:P,slideSize:V,slideGap:G,orientation:O,height:R,includeGapInSize:F,draggable:Y,initialSlide:H,withControls:$,withIndicators:B,plugins:W,nextControlIcon:L,previousControlIcon:U,withKeyboardEvents:Z,mod:J,type:K,emblaOptions:X,...Q}=n,ee=(0,u.I)({name:"Carousel",classes:j,props:n,className:s,style:l,classNames:a,styles:c,unstyled:y,vars:b,varsResolver:q}),et=(0,h.C)(),{dir:en}=(0,p.jH)(),[er,eo]=(0,i.A)({axis:"horizontal"===O?"x":"y",direction:"horizontal"===O?en:void 0,startIndex:H,...E,...X},W),[ei,ea]=(0,o.useState)(0),[es,el]=(0,o.useState)(0),ec=(0,o.useCallback)(e=>eo&&eo.scrollTo(e),[eo]),ed=(0,o.useCallback)(()=>{if(!eo)return;let e=eo.selectedScrollSnap();ea(e),e!==ei&&z?.(e)},[eo,ea,z,ei]),eu=(0,o.useCallback)(()=>{eo?.scrollPrev(),S?.()},[eo]),eh=(0,o.useCallback)(()=>{eo?.scrollNext(),k?.()},[eo]),ep=(0,o.useCallback)(e=>{Z&&("ArrowRight"===e.key&&(e.preventDefault(),eh()),"ArrowLeft"===e.key&&(e.preventDefault(),eu()))},[eo]);(0,o.useEffect)(()=>{if(eo)return C?.(eo),ed(),el(eo.scrollSnapList().length),eo.on("select",ed),()=>{eo.off("select",ed)}},[eo,X?.slidesToScroll,ed]),(0,o.useEffect)(()=>{eo&&(eo.reInit(),el(eo.scrollSnapList().length),ea(e=>(0,x.q)(e,0,o.Children.toArray(w).length-1)))},[o.Children.toArray(w).length,X?.slidesToScroll]);let em=eo?.canScrollPrev()||!1,ev=eo?.canScrollNext()||!1,ef=Array(es).fill(0).map((e,t)=>(0,o.createElement)(m.N,{...ee("indicator"),key:t,"data-active":t===ei||void 0,"aria-hidden":!0,tabIndex:-1,onClick:()=>ec(t),"data-orientation":O,onMouseDown:e=>e.preventDefault()}));return(0,r.jsxs)(g,{value:{getStyles:ee,orientation:O},children:["container"===K?(0,r.jsx)(N,{...n,selector:`.${et}`}):(0,r.jsx)(I,{...n,selector:`.${et}`}),(0,r.jsxs)(v.a,{ref:t,...ee("root",{className:"responsiveClassName"}),...Q,mod:[{orientation:O,"include-gap-in-size":F},J],onKeyDownCapture:ep,children:[(0,r.jsx)("div",{...ee("viewport"),ref:er,"data-type":K,children:(0,r.jsx)("div",{...ee("container",{className:et}),"data-orientation":O,children:w})}),B&&(0,r.jsx)("div",{...ee("indicators"),"data-orientation":O,children:ef}),$&&(0,r.jsxs)("div",{...ee("controls"),"data-orientation":O,children:[(0,r.jsx)(m.N,{...A,...ee("control",{className:A?.className,style:A?.style}),onClick:e=>{eu(),A?.onClick?.(e)},"data-inactive":!em||void 0,tabIndex:em?0:-1,children:void 0!==U?U:(0,r.jsx)(f.U,{style:{transform:`rotate(${_({dir:en,orientation:O,direction:"previous"})}deg)`}})}),(0,r.jsx)(m.N,{...ee("control",{className:M?.className,style:M?.style}),...M,onClick:e=>{eh(),M?.onClick?.(e)},"data-inactive":!ev||void 0,tabIndex:ev?0:-1,children:void 0!==L?L:(0,r.jsx)(f.U,{style:{transform:`rotate(${_({dir:en,orientation:O,direction:"next"})}deg)`}})})]})]})]})});V.classes=j,V.displayName="@mantine/carousel/Carousel",V.Slide=w},86658:(e,t,n)=>{"use strict";n.d(t,{e:()=>w});var r=n(31085),o=n(14041),i=n(33450),a=n(7098),s=n(29686),l=n(69564),c=n(34056),d=n(2453),u=n(6754);let h=(0,o.createContext)(null),p=h.Provider;var m={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};let v={},f=(0,a.V)((e,{spacing:t})=>({group:{"--ag-spacing":(0,i.GY)(t)}})),x=(0,u.P9)((e,t)=>{let n=(0,s.Y)("AvatarGroup",v,e),{classNames:o,className:i,style:a,styles:d,unstyled:u,vars:h,spacing:x,...g}=n,y=(0,l.I)({name:"AvatarGroup",classes:m,props:n,className:i,style:a,classNames:o,styles:d,unstyled:u,vars:h,varsResolver:f,rootSelector:"group"});return(0,r.jsx)(p,{value:!0,children:(0,r.jsx)(c.a,{ref:t,...y("group"),...g})})});function g(e){return(0,r.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}x.classes=m,x.displayName="@mantine/core/AvatarGroup";let y=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],j={},b=(0,a.V)((e,{size:t,radius:n,variant:r,gradient:o,color:a,autoContrast:s,name:l,allowedInitialsColors:c})=>{let d="initials"===a&&"string"==typeof l?function(e,t=y){let n=Math.abs(function(e){let t=0;for(let n=0;n<e.length;n+=1)t=(t<<5)-t+e.charCodeAt(n)|0;return t}(e))%t.length;return t[n]}(l,c):a,u=e.variantColorResolver({color:d||"gray",theme:e,gradient:o,variant:r||"light",autoContrast:s});return{root:{"--avatar-size":(0,i.YC)(t,"avatar-size"),"--avatar-radius":void 0===n?void 0:(0,i.nJ)(n),"--avatar-bg":d||r?u.background:void 0,"--avatar-color":d||r?u.color:void 0,"--avatar-bd":d||r?u.border:void 0}}}),w=(0,d.v)((e,t)=>{let n=(0,s.Y)("Avatar",j,e),{classNames:i,className:a,style:d,styles:u,unstyled:p,vars:v,src:f,alt:x,radius:y,color:w,gradient:C,imageProps:k,children:S,autoContrast:z,mod:M,name:A,allowedInitialsColors:T,...I}=n,P={withinGroup:!!(0,o.useContext)(h)},[N,_]=(0,o.useState)(!f),D=(0,l.I)({name:"Avatar",props:n,classes:m,className:a,style:d,classNames:i,styles:u,unstyled:p,vars:v,varsResolver:b});return(0,o.useEffect)(()=>_(!f),[f]),(0,r.jsx)(c.a,{...D("root"),mod:[{"within-group":P.withinGroup},M],ref:t,...I,children:N||!f?(0,r.jsx)("span",{...D("placeholder"),title:x,children:S||"string"==typeof A&&function(e,t=2){let n=e.split(" ");return 1===n.length?e.slice(0,t).toUpperCase():n.map(e=>e[0]).slice(0,t).join("").toUpperCase()}(A)||(0,r.jsx)(g,{})}):(0,r.jsx)("img",{...k,...D("image"),src:f,alt:x,onError:e=>{_(!0),k?.onError?.(e)}})})});w.classes=m,w.displayName="@mantine/core/Avatar",w.Group=x},1784:(e,t,n)=>{"use strict";n.d(t,{F:()=>I});var r=n(31085),o=n(14041),i=n(82307),a=n(68193),s=n(7235),l=n(34321),c=n(39735),d=n(33450),u=n(96532),h=n(7098),p=n(51606),m=n(29686),v=n(69564),f=n(6754),x=n(46746),g=n(96448),y=n(5861),j=n(60881),b=n(36247),w=n(7139),C=n(27064),k=n(48093),S=n(46315),z=n(94023),M=n(85212);let A=(0,h.V)((e,{size:t,color:n,thumbSize:r,radius:o})=>({root:{"--slider-size":(0,d.YC)(t,"slider-size"),"--slider-color":n?(0,p.r)(n,e):void 0,"--slider-radius":void 0===o?void 0:(0,d.nJ)(o),"--slider-thumb-size":void 0!==r?(0,c.D)(r):"calc(var(--slider-size) * 2)"}})),T={min:0,max:100,minRange:10,step:1,marks:[],label:e=>e,labelTransitionProps:{transition:"fade",duration:0},labelAlwaysOn:!1,showLabelOnHover:!0,disabled:!1,pushOnOverlap:!0,scale:e=>e,size:"md",maxRange:1/0},I=(0,f.P9)((e,t)=>{let n=(0,m.Y)("RangeSlider",T,e),{classNames:c,styles:d,value:h,onChange:p,onChangeEnd:f,size:I,min:P,max:N,domain:_,minRange:D,maxRange:E,step:q,precision:V,defaultValue:G,name:O,marks:R,label:F,labelTransitionProps:Y,labelAlwaysOn:H,thumbFromLabel:$,thumbToLabel:B,showLabelOnHover:W,thumbChildren:L,disabled:U,unstyled:Z,scale:J,inverted:K,className:X,style:Q,vars:ee,hiddenInputProps:et,restrictToMarks:en,thumbProps:er,pushOnOverlap:eo,...ei}=n,ea=(0,v.I)({name:"Slider",props:n,classes:M.A,classNames:c,className:X,styles:d,style:Q,vars:ee,varsResolver:A,unstyled:Z}),es=(0,o.useRef)(null),{dir:el}=(0,x.jH)(),[ec,ed]=(0,o.useState)(-1),[eu,eh]=(0,o.useState)(!1),[ep,em]=(0,i.Z)({value:h,defaultValue:G,finalValue:[P,N],onChange:p}),ev=(0,o.useRef)(ep),ef=(0,o.useRef)([]),ex=(0,o.useRef)(null),eg=(0,o.useRef)(void 0),[ey,ej]=_||[P,N],eb=[(0,k.E)({value:ep[0],min:ey,max:ej}),(0,k.E)({value:ep[1],min:ey,max:ej})],ew=V??(0,S.X)(q),eC=e=>{em(e),ev.current=e};(0,o.useEffect)(()=>{Array.isArray(h)&&(ev.current=h)},Array.isArray(h)?[h[0],h[1]]:[null,null]);let ek=(e,t,n)=>{if(-1===t)return;let r=[...ev.current];if(en&&R){let n=(0,u.k)(e,R.map(e=>e.value)),o=r[t];r[t]=n;let i=0===t?1:0,a=(0,z.rq)(R),s=(0,z.HE)(R);n===a&&r[i]===a?r[t]=o:n===s&&r[i]===s?r[t]=o:n===r[i]&&(o>r[i]?r[i]=(0,z.Mh)(n,R):r[i]=(0,z.C8)(n,R))}else{let n=(0,a.q)(e,P,N);r[t]=n,0===t&&(n>r[1]-(D-1e-9)&&(eo?r[1]=Math.min(e+D,N):r[t]=ev.current[t]),n>(N-(D-1e-9)||P)&&(r[t]=ev.current[t]),r[1]-e>E&&(eo?r[1]=e+E:r[t]=ev.current[t])),1===t&&(n<r[0]+D&&(eo?r[0]=Math.max(e-D,P):r[t]=ev.current[t]),n<r[0]+D&&(r[t]=ev.current[t]),n-r[0]>E&&(eo?r[0]=e-E:r[t]=ev.current[t]))}if(r[0]=(0,C.q)(r[0],ew),r[1]=(0,C.q)(r[1],ew),r[0]>r[1]){let e=r[0];r[0]=r[1],r[1]=e}eC(r),n&&f?.(ev.current)},eS=e=>{U||void 0===eg.current||ek((0,w.c)({value:e,min:ey,max:ej,step:q,precision:ew}),eg.current,!1)},{ref:ez,active:eM}=(0,s.f)(({x:e})=>eS(e),{onScrubEnd:()=>!U&&f?.(ev.current)},el),eA=e=>{if(es.current){es.current.focus();let t=es.current.getBoundingClientRect(),n=function(e){return"TouchEvent"in window&&e instanceof window.TouchEvent?e.touches[0].clientX:e.clientX}(e.nativeEvent),r=(0,w.c)({value:n-t.left,max:N,min:P,step:q,containerWidth:t.width}),o=Math.abs(ep[0]-r)>Math.abs(ep[1]-r)?1:0,i="ltr"===el?o:1===o?0:1;eg.current=i}},eT=()=>1!==ec&&0!==ec?(ed(0),0):ec,eI={max:N,min:P,size:I,labelTransitionProps:Y,labelAlwaysOn:H,onBlur:()=>ed(-1)},eP=Array.isArray(L);return(0,r.jsx)(g.h,{value:{getStyles:ea},children:(0,r.jsxs)(y.g,{...ei,size:I,ref:(0,l.pc)(t,ex),disabled:U,onMouseDownCapture:()=>ex.current?.focus(),onKeyDownCapture:()=>{ef.current[0]?.parentElement?.contains(document.activeElement)||ef.current[0]?.focus()},children:[(0,r.jsxs)(b.C,{offset:eb[0],marksOffset:ep[0],filled:eb[1]-eb[0],marks:R,inverted:K,min:ey,max:ej,value:ep[1],disabled:U,containerProps:{ref:(0,l.pc)(es,ez),onMouseEnter:W?()=>eh(!0):void 0,onMouseLeave:W?()=>eh(!1):void 0,onTouchStartCapture:eA,onTouchEndCapture:()=>{eg.current=-1},onMouseDownCapture:eA,onMouseUpCapture:()=>{eg.current=-1},onKeyDownCapture:e=>{if(!U)switch(e.key){case"ArrowUp":{e.preventDefault();let t=eT();ef.current[t].focus();let n=en&&R?(0,z.C8)(ev.current[t],R):Math.min(Math.max(ev.current[t]+q,P),N);ek((0,C.q)(n,ew),t,!0);break}case"ArrowRight":{e.preventDefault();let t=eT();ef.current[t].focus();let n=en&&R?("rtl"===el?z.Mh:z.C8)(ev.current[t],R):Math.min(Math.max("rtl"===el?ev.current[t]-q:ev.current[t]+q,P),N);ek((0,C.q)(n,ew),t,!0);break}case"ArrowDown":{e.preventDefault();let t=eT();ef.current[t].focus();let n=en&&R?(0,z.Mh)(ev.current[t],R):Math.min(Math.max(ev.current[t]-q,P),N);ek((0,C.q)(n,ew),t,!0);break}case"ArrowLeft":{e.preventDefault();let t=eT();ef.current[t].focus();let n=en&&R?("rtl"===el?z.C8:z.Mh)(ev.current[t],R):Math.min(Math.max("rtl"===el?ev.current[t]+q:ev.current[t]-q,P),N);ek((0,C.q)(n,ew),t,!0)}}}},children:[(0,r.jsx)(j.z,{...eI,value:J(ep[0]),position:eb[0],dragging:eM,label:"function"==typeof F?F((0,C.q)(J(ep[0]),ew)):F,ref:e=>{e&&(ef.current[0]=e)},thumbLabel:$,onMouseDown:()=>void(eg.current=0),onFocus:()=>ed(0),showLabelOnHover:W,isHovered:eu,disabled:U,...er?.(0),children:eP?L[0]:L}),(0,r.jsx)(j.z,{...eI,thumbLabel:B,value:J(ep[1]),position:eb[1],dragging:eM,label:"function"==typeof F?F((0,C.q)(J(ep[1]),ew)):F,ref:e=>{e&&(ef.current[1]=e)},onMouseDown:()=>void(eg.current=1),onFocus:()=>ed(1),showLabelOnHover:W,isHovered:eu,disabled:U,...er?.(1),children:eP?L[1]:L})]}),(0,r.jsx)("input",{type:"hidden",name:`${O}_from`,value:ep[0],...et}),(0,r.jsx)("input",{type:"hidden",name:`${O}_to`,value:ep[1],...et})]})})});I.classes=M.A,I.displayName="@mantine/core/RangeSlider"},55897:(e,t,n)=>{"use strict";n.d(t,{M:()=>g});var r=n(31085),o=n(97567),i=n(14921),a=n(34321),s=n(39735);n(14041);var l=n(33450),c=n(7098),d=n(29686),u=n(69564),h=n(34056),p=n(6754),m=n(33970),v={root:"m_bcaa9990",control:"m_375a65ef"};let f={getControlProps:({data:e})=>({children:e.value})},x=(0,c.V)((e,{color:t,size:n,variant:r,autoContrast:o,depthOffset:i,radius:a})=>{let c=e.variantColorResolver({color:t||e.primaryColor,theme:e,variant:r||"filled",autoContrast:o});return{root:{"--toc-bg":"none"!==r?c.background:void 0,"--toc-color":"none"!==r?c.color:void 0,"--toc-size":(0,l.ny)(n),"--toc-depth-offset":(0,s.D)(i),"--toc-radius":(0,l.nJ)(a)}}}),g=(0,p.P9)((e,t)=>{let n=(0,d.Y)("TableOfContents",f,e),{classNames:s,className:l,style:c,styles:p,unstyled:g,vars:y,color:j,autoContrast:b,scrollSpyOptions:w,initialData:C,getControlProps:k,minDepthToOffset:S,depthOffset:z,variant:M,radius:A,reinitializeRef:T,...I}=n,P=(0,u.I)({name:"TableOfContents",classes:v,props:n,className:l,style:c,classNames:s,styles:p,unstyled:g,vars:y,varsResolver:x}),N=(0,o.B)(),_=(0,i.f)(w);(0,a.bl)(T,_.reinitialize);let D=(_.initialized?_.data:C||[]).map((e,t)=>{let n=k?.({active:t===_.active,data:{...e,getNode:e.getNode||(()=>{})}});return(0,r.jsx)(m.N,{__vars:{"--depth-offset":`${e.depth-(S||1)}`},"data-active":t===_.active||void 0,variant:M,...n,...P("control",{className:n?.className,style:n?.style})},e.id||`${N}-${t}`)});return(0,r.jsx)(h.a,{ref:t,variant:M,...P("root"),...I,children:D})});g.displayName="@mantine/core/TableOfContents",g.classes=v}},e=>{var t=t=>e(e.s=t);e.O(0,[84181,18675,48895,90636,46593,38792],()=>t(59207)),_N_E=e.O()}]);