(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[15763],{59207:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-16-0",function(){return n(4566)}])},4566:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>v});var r=n(31085),o=n(71184),i=n(13001),s=n(16631),a=n(85233),l=n(75898),c=n(43741),d=n(24377),u=n(81160),h=n(85954),p=n(38215);let m=(0,h.P)(p.XZ.Changelog7160);function f(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"use-scroll-spy-hook",children:"use-scroll-spy hook"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/hooks/use-scroll-spy",children:"use-scroll-spy"})," hook tracks scroll position and returns index of the\nelement that is currently in the viewport. It is useful for creating\ntable of contents components (like in mantine.dev sidebar on the right side)\nand similar features."]}),"\n",(0,r.jsx)(n,{data:i.s}),"\n",(0,r.jsx)(t.h2,{id:"tableofcontents-component",children:"TableOfContents component"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/core/table-of-contents",children:"TableOfContents"})," component is built on top of ",(0,r.jsx)(t.code,{children:"use-scroll-spy"})," hook\nand can be used to create table of contents components like the one on the right side of mantine.dev\ndocumentation sidebar:"]}),"\n",(0,r.jsx)(n,{data:s.C}),"\n",(0,r.jsx)(t.h2,{id:"inputclearbutton-component",children:"Input.ClearButton component"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.code,{children:"Input.ClearButton"})," component can be used to add clear button to custom inputs\nbased on ",(0,r.jsx)(t.code,{children:"Input"})," component. ",(0,r.jsx)(t.code,{children:"size"})," of the clear button is automatically\ninherited from the input:"]}),"\n",(0,r.jsx)(n,{data:a.m}),"\n",(0,r.jsx)(t.h2,{id:"popover-with-overlay",children:"Popover with overlay"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/core/popover",children:"Popover"})," and other components based on it now support ",(0,r.jsx)(t.code,{children:"withOverlay"})," prop:"]}),"\n",(0,r.jsx)(n,{data:l.L}),"\n",(0,r.jsx)(t.h2,{id:"container-queries-in-carousel",children:"Container queries in Carousel"}),"\n",(0,r.jsxs)(t.p,{children:["You can now use ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",children:"container queries"}),"\nin ",(0,r.jsx)(t.a,{href:"/x/carousel",children:"Carousel"})," component. With container queries, all responsive values\nare adjusted based on the container width, not the viewport width."]}),"\n",(0,r.jsx)(t.p,{children:"Example of using container queries. To see how the grid changes, resize the root element\nof the demo with the resize handle located at the bottom right corner of the demo:"}),"\n",(0,r.jsx)(n,{data:c.k}),"\n",(0,r.jsx)(t.h2,{id:"rangeslider-restricttomarks",children:"RangeSlider restrictToMarks"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/core/slider",children:"RangeSlider"})," component now supports ",(0,r.jsx)(t.code,{children:"restrictToMarks"})," prop:"]}),"\n",(0,r.jsx)(n,{data:d.A}),"\n",(0,r.jsx)(t.h2,{id:"pagination-withpages-prop",children:"Pagination withPages prop"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/core/pagination",children:"Pagination"})," component now supports ",(0,r.jsx)(t.code,{children:"withPages"})," prop which allows hiding pages\ncontrols and displaying only previous and next buttons:"]}),"\n",(0,r.jsx)(n,{data:u.h}),"\n",(0,r.jsx)(t.h2,{id:"useform-touchtrigger-option",children:"useForm touchTrigger option"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/form/use-form",children:"use-form"})," hook now supports ",(0,r.jsx)(t.code,{children:"touchTrigger"})," option that allows customizing events that change touched state.\nIt accepts two options:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"change"})," (default) – field will be considered touched when its value changes or it has been focused"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"focus"})," – field will be considered touched only when it has been focused"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Example of using ",(0,r.jsx)(t.code,{children:"focus"})," trigger:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: { a: 1 },\n  touchTrigger: 'focus',\n});\n\nform.isTouched('a'); // -> false\nform.setFieldValue('a', 2);\nform.isTouched('a'); // -> false\n\n// onFocus is called automatically when the user focuses the field\nform.getInputProps('a').onFocus();\nform.isTouched('a'); // -> true\n"})}),"\n",(0,r.jsx)(t.h2,{id:"help-center-updates",children:"Help Center updates"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/native-required",children:"Native browser validation does not work in some components, what should I do?"})," question"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/disabled-js",children:"My styles are broken with disabled JavaScript. What should I do?"})," question"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/select-fuzzy",children:"How can I add fuzzy search to Select component?"})," question"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/local-storage-effect",children:"use-local-storage hook returns real value only after mounting, is it a bug?"})," question"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/dropzone-upload",children:"How can I upload files from Dropzone component?"})," question"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/autocomplete",children:"Autocomplete"})," now supports ",(0,r.jsx)(t.code,{children:"clearable"})," prop"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/styles/postcss-preset/#where--mixins",children:"where-* mixins"})," documentation has been added"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/hooks/use-local-storage",children:"use-local-storage"})," hook now supports ",(0,r.jsx)(t.code,{children:"sync"})," option which allows disabling synchronization between browser tabs"]}),"\n"]})]})}function v(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(m,{...e,children:(0,r.jsx)(f,{...e})})}},43741:(e,t,n)=>{"use strict";n.d(t,{k:()=>c});var r=n(31085),o=n(14041),i=n(64893),s=n(40003),a=n(99627),l=n(12946);let c={type:"code",component:function(){let[e,t]=(0,o.useState)(null),n=(0,s.L)(),c=(0,a.Y)(()=>e?.reInit(),10);return(0,o.useEffect)(()=>{e&&c()},[c,e,n.width]),(0,r.jsx)("div",{ref:n.ref,style:{resize:"horizontal",overflow:"hidden",maxWidth:"100%",minWidth:250,padding:10},children:(0,r.jsx)(i.F,{getEmblaApi:t,withIndicators:!0,height:200,type:"container",slideSize:{base:"100%","300px":"50%","500px":"33.333333%"},slideGap:{base:0,"300px":"md","500px":"lg"},loop:!0,align:"start",children:(0,r.jsx)(l.t,{count:6})})})},code:`
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
        loop
        align="start"
      >
        <Carousel.Slide>1</Carousel.Slide>
        <Carousel.Slide>2</Carousel.Slide>
        <Carousel.Slide>3</Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
    </div>
  );
}
`}},12946:(e,t,n)=>{"use strict";n.d(t,{t:()=>a});var r=n(31085),o=n(64893),i=n(34056);function s({children:e}){return(0,r.jsx)(i.a,{style:{backgroundColor:"var(--mantine-color-blue-filled)",color:"var(--mantine-color-white)",height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",fontSize:50,fontWeight:"bold"},children:e})}function a({count:e}){let t=Array(e).fill(0).map((e,t)=>(0,r.jsx)(o.F.Slide,{children:(0,r.jsx)(s,{children:t+1})},t));return(0,r.jsx)(r.Fragment,{children:t})}},85233:(e,t,n)=>{"use strict";n.d(t,{m:()=>s});var r=n(31085),o=n(14041),i=n(34452);let s={type:"configurator",component:function(e){let[t,n]=(0,o.useState)("clearable");return(0,r.jsx)(i.p,{placeholder:"Clearable input",value:t,onChange:e=>n(e.currentTarget.value),rightSection:""!==t?(0,r.jsx)(i.p.ClearButton,{onClick:()=>n("")}):void 0,rightSectionPointerEvents:"auto",...e})},code:e=>`
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
`,maxWidth:340,centered:!0,controls:[{type:"size",prop:"size",initialValue:"sm",libraryValue:"__"}]}},81160:(e,t,n)=>{"use strict";n.d(t,{h:()=>c});var r=n(31085),o=n(14041),i=n(56051),s=n(93065),a=n(48895);let l=Math.ceil(14.5),c={type:"code",component:function(){let[e,t]=(0,o.useState)(1),n=`Showing ${10*(e-1)+1} \u2013 ${Math.min(145,10*e)} of 145`;return(0,r.jsxs)(i.Y,{justify:"flex-end",children:[(0,r.jsx)(s.E,{size:"sm",children:n}),(0,r.jsx)(a.d,{total:l,value:e,onChange:t,withPages:!1})]})},code:`
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
`}},75898:(e,t,n)=>{"use strict";n.d(t,{L:()=>u});var r=n(31085),o=n(35764),i=n(33970),s=n(86658),a=n(56051),l=n(75390),c=n(93065),d=n(12129);let u={type:"code",component:function(){return(0,r.jsxs)(o.A,{width:320,shadow:"md",withArrow:!0,withOverlay:!0,overlayProps:{zIndex:1e4,blur:"8px"},zIndex:10001,children:[(0,r.jsx)(o.A.Target,{children:(0,r.jsx)(i.N,{style:{zIndex:10001,position:"relative"},children:(0,r.jsx)(s.e,{src:"https://avatars.githubusercontent.com/u/79146003?s=200&v=4",radius:"xl"})})}),(0,r.jsxs)(o.A.Dropdown,{children:[(0,r.jsxs)(a.Y,{children:[(0,r.jsx)(s.e,{src:"https://avatars.githubusercontent.com/u/79146003?s=200&v=4",radius:"xl"}),(0,r.jsxs)(l.B,{gap:5,children:[(0,r.jsx)(c.E,{size:"sm",fw:700,style:{lineHeight:1},children:"Mantine"}),(0,r.jsx)(d.M,{href:"https://x.com/mantinedev",c:"dimmed",size:"xs",style:{lineHeight:1},children:"@mantinedev"})]})]}),(0,r.jsx)(c.E,{size:"sm",mt:"md",children:"Customizable React components and hooks library with focus on usability, accessibility and developer experience"}),(0,r.jsxs)(a.Y,{mt:"md",gap:"xl",children:[(0,r.jsxs)(c.E,{size:"sm",children:[(0,r.jsx)("b",{children:"0"})," Following"]}),(0,r.jsxs)(c.E,{size:"sm",children:[(0,r.jsx)("b",{children:"1,174"})," Followers"]})]})]})]})},code:`
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
`,centered:!0}},24377:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var r=n(31085),o=n(75390),i=n(84281),s=n(1784);let a={type:"code",component:function(){return(0,r.jsxs)(o.B,{children:[(0,r.jsx)(i.A,{restrictToMarks:!0,defaultValue:25,marks:Array.from({length:5}).map((e,t)=>({value:25*t}))}),(0,r.jsx)(s.F,{restrictToMarks:!0,defaultValue:[5,15],marks:[{value:5},{value:15},{value:25},{value:35},{value:70},{value:80},{value:90}]})]})},code:`
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
`,centered:!0,maxWidth:340,controls:[{type:"segmented",prop:"variant",initialValue:"filled",data:["filled","light","none"],libraryValue:null},{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"__"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"__"}]}},13001:(e,t,n)=>{"use strict";n.d(t,{s:()=>a});var r=n(31085),o=n(33970),i=n(93065),s=n(14921);let a={type:"code",component:function(){let e=(0,s.f)({selector:"#mdx :is(h1, h2, h3, h4, h5, h6)"}),t=e.data.map((t,n)=>(0,r.jsx)("li",{style:{listStylePosition:"inside",paddingInlineStart:20*t.depth,background:n===e.active?"var(--mantine-color-blue-light)":void 0},children:(0,r.jsx)(o.N,{onClick:()=>t.getNode().scrollIntoView(),children:t.value})},t.id));return(0,r.jsxs)("div",{children:[(0,r.jsx)(i.E,{children:"Scroll to heading:"}),(0,r.jsx)("ul",{style:{margin:0,padding:0},children:t})]})},code:`
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
`}},64893:(e,t,n)=>{"use strict";n.d(t,{F:()=>R});var r=n(31085),o=n(14041),i=n(98149),s=n(7098),a=n(39735),l=n(33450),c=n(6754),d=n(29686),u=n(69564),h=n(22448),p=n(46746),m=n(33970),f=n(34056),v=n(76076),x=n(68193);let[g,j]=(0,n(59852).F)("Carousel component was not found in tree");var y={root:"m_17884d0f",viewport:"m_a2dae653",container:"m_fcd81474",controls:"m_39bc3463",control:"m_64f58e10",indicators:"m_71ea3ab1",indicator:"m_eae68602",slide:"m_d98df724"};let b={},w=(0,c.P9)((e,t)=>{let{classNames:n,className:o,style:i,styles:s,vars:a,mod:l,...c}=(0,d.Y)("CarouselSlide",b,e),u=j();return(0,r.jsx)(f.a,{ref:t,mod:[{orientation:u.orientation},l],...u.getStyles("slide",{className:o,style:i,classNames:n,styles:s}),...c})});w.classes=y,w.displayName="@mantine/carousel/CarouselSlide";var C=n(92408),S=n(41280),k=n(2306),z=n(93698),A=n(1300),T=n(54212),M=n(4749);function P({slideGap:e,slideSize:t,selector:n}){let o=(0,C.xd)(),i=(0,S.J)({"--carousel-slide-gap":(0,l.GY)((0,k.D)(e)),"--carousel-slide-size":(0,a.D)((0,k.D)(t))}),s=(0,z.H)(o.breakpoints).reduce((n,r)=>(n[r]||(n[r]={}),"object"==typeof e&&void 0!==e[r]&&(n[r]["--carousel-slide-gap"]=(0,l.GY)(e[r])),"object"==typeof t&&void 0!==t[r]&&(n[r]["--carousel-slide-size"]=(0,l.GY)(t[r])),n),{}),c=(0,A.q)((0,z.H)(s),o.breakpoints).filter(e=>(0,z.H)(s[e.value]).length>0).map(e=>({query:`(min-width: ${o.breakpoints[e.value]})`,styles:s[e.value]}));return(0,r.jsx)(T.K,{styles:i,media:c,selector:n})}function I(e){return"object"==typeof e&&null!==e?(0,z.H)(e):[]}function D({slideGap:e,slideSize:t,selector:n}){let o=(0,S.J)({"--carousel-slide-gap":(0,l.GY)((0,k.D)(e)),"--carousel-slide-size":(0,a.D)((0,k.D)(t))}),i=(function({slideGap:e,slideSize:t}){return Array.from(new Set([...I(e),...I(t)])).sort((e,t)=>(0,M.px)(e)-(0,M.px)(t))})({slideGap:e,slideSize:t}).reduce((n,r)=>(n[r]||(n[r]={}),"object"==typeof e&&void 0!==e[r]&&(n[r]["--carousel-slide-gap"]=(0,l.GY)(e[r])),"object"==typeof t&&void 0!==t[r]&&(n[r]["--carousel-slide-size"]=(0,l.GY)(t[r])),n),{}),s=Object.keys(i).map(e=>({query:`carousel (min-width: ${e})`,styles:i[e]}));return(0,r.jsx)(T.K,{styles:o,container:s,selector:n})}function N({dir:e,orientation:t,direction:n}){return"previous"===n?"horizontal"===t?90*("ltr"===e?1:-1):-180:"horizontal"===t?90*("ltr"===e?-1:1):0}let E={controlSize:26,controlsOffset:"sm",slideSize:"100%",slideGap:0,orientation:"horizontal",align:"center",slidesToScroll:1,includeGapInSize:!0,draggable:!0,dragFree:!1,loop:!1,speed:10,initialSlide:0,inViewThreshold:0,withControls:!0,withIndicators:!1,skipSnaps:!1,containScroll:"",withKeyboardEvents:!0,type:"media"},_=(0,s.V)((e,{height:t,controlSize:n,controlsOffset:r})=>({root:{"--carousel-height":(0,a.D)(t),"--carousel-control-size":(0,a.D)(n),"--carousel-controls-offset":(0,l.GY)(r)}})),R=(0,c.P9)((e,t)=>{let n=(0,d.Y)("Carousel",E,e),{classNames:s,className:a,style:l,styles:c,unstyled:j,vars:b,children:w,getEmblaApi:C,onNextSlide:S,onPreviousSlide:k,onSlideChange:z,nextControlProps:A,previousControlProps:T,controlSize:M,controlsOffset:I,slideSize:R,slideGap:q,orientation:V,height:G,align:F,slidesToScroll:O,includeGapInSize:Y,draggable:B,dragFree:H,loop:$,speed:L,initialSlide:U,inViewThreshold:W,withControls:Z,withIndicators:J,plugins:K,nextControlIcon:X,previousControlIcon:Q,skipSnaps:ee,containScroll:et,withKeyboardEvents:en,mod:er,type:eo,...ei}=n,es=(0,u.I)({name:"Carousel",classes:y,props:n,className:a,style:l,classNames:s,styles:c,unstyled:j,vars:b,varsResolver:_}),ea=(0,h.C)(),{dir:el}=(0,p.jH)(),[ec,ed]=(0,i.A)({axis:"horizontal"===V?"x":"y",direction:"horizontal"===V?el:void 0,startIndex:U,loop:$,align:F,slidesToScroll:O,draggable:B,dragFree:H,speed:L,inViewThreshold:W,skipSnaps:ee,containScroll:et},K),[eu,eh]=(0,o.useState)(0),[ep,em]=(0,o.useState)(0),ef=(0,o.useCallback)(e=>ed&&ed.scrollTo(e),[ed]),ev=(0,o.useCallback)(()=>{if(!ed)return;let e=ed.selectedScrollSnap();eh(e),e!==eu&&z?.(e)},[ed,eh,z,eu]),ex=(0,o.useCallback)(()=>{ed?.scrollPrev(),k?.()},[ed]),eg=(0,o.useCallback)(()=>{ed?.scrollNext(),S?.()},[ed]),ej=(0,o.useCallback)(e=>{en&&("ArrowRight"===e.key&&(e.preventDefault(),eg()),"ArrowLeft"===e.key&&(e.preventDefault(),ex()))},[ed]);(0,o.useEffect)(()=>{if(ed)return C?.(ed),ev(),em(ed.scrollSnapList().length),ed.on("select",ev),()=>{ed.off("select",ev)}},[ed,O,ev]),(0,o.useEffect)(()=>{ed&&(ed.reInit(),em(ed.scrollSnapList().length),eh(e=>(0,x.q)(e,0,o.Children.toArray(w).length-1)))},[o.Children.toArray(w).length,O]);let ey=ed?.canScrollPrev()||!1,eb=ed?.canScrollNext()||!1,ew=Array(ep).fill(0).map((e,t)=>(0,o.createElement)(m.N,{...es("indicator"),key:t,"data-active":t===eu||void 0,"aria-hidden":!0,tabIndex:-1,onClick:()=>ef(t),"data-orientation":V,onMouseDown:e=>e.preventDefault()}));return(0,r.jsxs)(g,{value:{getStyles:es,orientation:V},children:["container"===eo?(0,r.jsx)(D,{...n,selector:`.${ea}`}):(0,r.jsx)(P,{...n,selector:`.${ea}`}),(0,r.jsxs)(f.a,{ref:t,...es("root",{className:"responsiveClassName"}),...ei,mod:[{orientation:V,"include-gap-in-size":Y},er],onKeyDownCapture:ej,children:[(0,r.jsx)("div",{...es("viewport"),ref:ec,"data-type":eo,children:(0,r.jsx)("div",{...es("container",{className:ea}),"data-orientation":V,children:w})}),J&&(0,r.jsx)("div",{...es("indicators"),"data-orientation":V,children:ew}),Z&&(0,r.jsxs)("div",{...es("controls"),"data-orientation":V,children:[(0,r.jsx)(m.N,{...T,...es("control",{className:T?.className,style:T?.style}),onClick:e=>{ex(),T?.onClick?.(e)},"data-inactive":!ey||void 0,tabIndex:ey?0:-1,children:void 0!==Q?Q:(0,r.jsx)(v.U,{style:{transform:`rotate(${N({dir:el,orientation:V,direction:"previous"})}deg)`}})}),(0,r.jsx)(m.N,{...es("control",{className:A?.className,style:A?.style}),...A,onClick:e=>{eg(),A?.onClick?.(e)},"data-inactive":!eb||void 0,tabIndex:eb?0:-1,children:void 0!==X?X:(0,r.jsx)(v.U,{style:{transform:`rotate(${N({dir:el,orientation:V,direction:"next"})}deg)`}})})]})]})]})});R.classes=y,R.displayName="@mantine/carousel/Carousel",R.Slide=w},76076:(e,t,n)=>{"use strict";n.d(t,{U:()=>i});var r=n(31085),o=n(39735);function i({style:e,size:t=16,...n}){return(0,r.jsx)("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...e,width:(0,o.D)(t),height:(0,o.D)(t),display:"block"},...n,children:(0,r.jsx)("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}n(14041),i.displayName="@mantine/core/AccordionChevron"},86658:(e,t,n)=>{"use strict";n.d(t,{e:()=>w});var r=n(31085),o=n(14041),i=n(33450),s=n(7098),a=n(29686),l=n(69564),c=n(34056),d=n(2453),u=n(6754);let h=(0,o.createContext)(null),p=h.Provider;var m={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};let f={},v=(0,s.V)((e,{spacing:t})=>({group:{"--ag-spacing":(0,i.GY)(t)}})),x=(0,u.P9)((e,t)=>{let n=(0,a.Y)("AvatarGroup",f,e),{classNames:o,className:i,style:s,styles:d,unstyled:u,vars:h,spacing:x,...g}=n,j=(0,l.I)({name:"AvatarGroup",classes:m,props:n,className:i,style:s,classNames:o,styles:d,unstyled:u,vars:h,varsResolver:v,rootSelector:"group"});return(0,r.jsx)(p,{value:!0,children:(0,r.jsx)(c.a,{ref:t,...j("group"),...g})})});function g(e){return(0,r.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}x.classes=m,x.displayName="@mantine/core/AvatarGroup";let j=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],y={},b=(0,s.V)((e,{size:t,radius:n,variant:r,gradient:o,color:s,autoContrast:a,name:l,allowedInitialsColors:c})=>{let d="initials"===s&&"string"==typeof l?function(e,t=j){let n=Math.abs(function(e){let t=0;for(let n=0;n<e.length;n+=1)t=(t<<5)-t+e.charCodeAt(n)|0;return t}(e))%t.length;return t[n]}(l,c):s,u=e.variantColorResolver({color:d||"gray",theme:e,gradient:o,variant:r||"light",autoContrast:a});return{root:{"--avatar-size":(0,i.YC)(t,"avatar-size"),"--avatar-radius":void 0===n?void 0:(0,i.nJ)(n),"--avatar-bg":d||r?u.background:void 0,"--avatar-color":d||r?u.color:void 0,"--avatar-bd":d||r?u.border:void 0}}}),w=(0,d.v)((e,t)=>{let n=(0,a.Y)("Avatar",y,e),{classNames:i,className:s,style:d,styles:u,unstyled:p,vars:f,src:v,alt:x,radius:j,color:w,gradient:C,imageProps:S,children:k,autoContrast:z,mod:A,name:T,allowedInitialsColors:M,...P}=n,I={withinGroup:!!(0,o.useContext)(h)},[D,N]=(0,o.useState)(!v),E=(0,l.I)({name:"Avatar",props:n,classes:m,className:s,style:d,classNames:i,styles:u,unstyled:p,vars:f,varsResolver:b});return(0,o.useEffect)(()=>N(!v),[v]),(0,r.jsx)(c.a,{...E("root"),mod:[{"within-group":I.withinGroup},A],ref:t,...P,children:D?(0,r.jsx)("span",{...E("placeholder"),title:x,children:k||"string"==typeof T&&function(e,t=2){let n=e.split(" ");return 1===n.length?e.slice(0,t).toUpperCase():n.map(e=>e[0]).slice(0,t).join("").toUpperCase()}(T)||(0,r.jsx)(g,{})}):(0,r.jsx)("img",{...S,...E("image"),src:v,alt:x,onError:e=>{N(!0),S?.onError?.(e)}})})});w.classes=m,w.displayName="@mantine/core/Avatar",w.Group=x},1784:(e,t,n)=>{"use strict";n.d(t,{F:()=>M});var r=n(31085),o=n(14041),i=n(82307),s=n(7235),a=n(34321),l=n(39735),c=n(33450),d=n(96532),u=n(7098),h=n(51606),p=n(29686),m=n(69564),f=n(6754),v=n(46746),x=n(96448),g=n(5861),j=n(60881),y=n(36247),b=n(7139),w=n(27064),C=n(48093),S=n(46315),k=n(94023),z=n(85212);let A=(0,u.V)((e,{size:t,color:n,thumbSize:r,radius:o})=>({root:{"--slider-size":(0,c.YC)(t,"slider-size"),"--slider-color":n?(0,h.r)(n,e):void 0,"--slider-radius":void 0===o?void 0:(0,c.nJ)(o),"--slider-thumb-size":void 0!==r?(0,l.D)(r):"calc(var(--slider-size) * 2)"}})),T={min:0,max:100,minRange:10,step:1,marks:[],label:e=>e,labelTransitionProps:{transition:"fade",duration:0},labelAlwaysOn:!1,showLabelOnHover:!0,disabled:!1,scale:e=>e},M=(0,f.P9)((e,t)=>{let n=(0,p.Y)("RangeSlider",T,e),{classNames:l,styles:c,value:u,onChange:h,onChangeEnd:f,size:M,min:P,max:I,minRange:D,maxRange:N,step:E,precision:_,defaultValue:R,name:q,marks:V,label:G,labelTransitionProps:F,labelAlwaysOn:O,thumbFromLabel:Y,thumbToLabel:B,showLabelOnHover:H,thumbChildren:$,disabled:L,unstyled:U,scale:W,inverted:Z,className:J,style:K,vars:X,hiddenInputProps:Q,restrictToMarks:ee,thumbProps:et,...en}=n,er=(0,m.I)({name:"Slider",props:n,classes:z.A,classNames:l,className:J,styles:c,style:K,vars:X,varsResolver:A,unstyled:U}),{dir:eo}=(0,v.jH)(),[ei,es]=(0,o.useState)(-1),[ea,el]=(0,o.useState)(!1),[ec,ed]=(0,i.Z)({value:u,defaultValue:R,finalValue:[P,I],onChange:h}),eu=(0,o.useRef)(ec),eh=(0,o.useRef)([]),ep=(0,o.useRef)(null),em=(0,o.useRef)(void 0),ef=[(0,C.E)({value:ec[0],min:P,max:I}),(0,C.E)({value:ec[1],min:P,max:I})],ev=_??(0,S.X)(E),ex=e=>{ed(e),eu.current=e};(0,o.useEffect)(()=>{Array.isArray(u)&&(eu.current=u)},Array.isArray(u)?[u[0],u[1]]:[null,null]);let eg=(e,t,n)=>{if(-1===t)return;let r=[...eu.current];if(ee&&V){let n=(0,d.k)(e,V.map(e=>e.value)),o=r[t];r[t]=n;let i=0===t?1:0,s=(0,k.rq)(V),a=(0,k.HE)(V);n===s&&r[i]===s?r[t]=o:n===a&&r[i]===a?r[t]=o:n===r[i]&&(o>r[i]?r[i]=(0,k.Mh)(n,V):r[i]=(0,k.C8)(n,V))}else r[t]=e,0===t&&(e>r[1]-(D-1e-9)&&(r[1]=Math.min(e+D,I)),e>(I-(D-1e-9)||P)&&(r[t]=eu.current[t]),r[1]-e>N&&(r[1]=e+N)),1===t&&(e<r[0]+D&&(r[0]=Math.max(e-D,P)),e<r[0]+D&&(r[t]=eu.current[t]),e-r[0]>N&&(r[0]=e-N));if(r[0]=(0,w.q)(r[0],ev),r[1]=(0,w.q)(r[1],ev),r[0]>r[1]){let e=r[0];r[0]=r[1],r[1]=e}ex(r),n&&f?.(eu.current)},ej=e=>{L||eg((0,b.c)({value:e,min:P,max:I,step:E,precision:ev}),em.current,!1)},{ref:ey,active:eb}=(0,s.f)(({x:e})=>ej(e),{onScrubEnd:()=>!L&&f?.(eu.current)},eo),ew=e=>{ey.current.focus();let t=ey.current.getBoundingClientRect(),n=function(e){return"TouchEvent"in window&&e instanceof window.TouchEvent?e.touches[0].clientX:e.clientX}(e.nativeEvent),r=(0,b.c)({value:n-t.left,max:I,min:P,step:E,containerWidth:t.width}),o=Math.abs(ec[0]-r)>Math.abs(ec[1]-r)?1:0,i="ltr"===eo?o:1===o?0:1;em.current=i},eC=()=>1!==ei&&0!==ei?(es(0),0):ei,eS={max:I,min:P,size:M,labelTransitionProps:F,labelAlwaysOn:O,onBlur:()=>es(-1)},ek=Array.isArray($);return(0,r.jsx)(x.h,{value:{getStyles:er},children:(0,r.jsxs)(g.g,{...en,size:M,ref:(0,a.pc)(t,ep),disabled:L,onMouseDownCapture:()=>ep.current?.focus(),onKeyDownCapture:()=>{eh.current[0]?.parentElement?.contains(document.activeElement)||eh.current[0]?.focus()},children:[(0,r.jsxs)(y.C,{offset:ef[0],marksOffset:ec[0],filled:ef[1]-ef[0],marks:V,inverted:Z,min:P,max:I,value:ec[1],disabled:L,containerProps:{ref:ey,onMouseEnter:H?()=>el(!0):void 0,onMouseLeave:H?()=>el(!1):void 0,onTouchStartCapture:ew,onTouchEndCapture:()=>{em.current=-1},onMouseDownCapture:ew,onMouseUpCapture:()=>{em.current=-1},onKeyDownCapture:e=>{if(!L)switch(e.key){case"ArrowUp":{e.preventDefault();let t=eC();eh.current[t].focus();let n=ee&&V?(0,k.C8)(eu.current[t],V):Math.min(Math.max(eu.current[t]+E,P),I);eg((0,w.q)(n,ev),t,!0);break}case"ArrowRight":{e.preventDefault();let t=eC();eh.current[t].focus();let n=ee&&V?("rtl"===eo?k.Mh:k.C8)(eu.current[t],V):Math.min(Math.max("rtl"===eo?eu.current[t]-E:eu.current[t]+E,P),I);eg((0,w.q)(n,ev),t,!0);break}case"ArrowDown":{e.preventDefault();let t=eC();eh.current[t].focus();let n=ee&&V?(0,k.Mh)(eu.current[t],V):Math.min(Math.max(eu.current[t]-E,P),I);eg((0,w.q)(n,ev),t,!0);break}case"ArrowLeft":{e.preventDefault();let t=eC();eh.current[t].focus();let n=ee&&V?("rtl"===eo?k.C8:k.Mh)(eu.current[t],V):Math.min(Math.max("rtl"===eo?eu.current[t]+E:eu.current[t]-E,P),I);eg((0,w.q)(n,ev),t,!0)}}}},children:[(0,r.jsx)(j.z,{...eS,value:W(ec[0]),position:ef[0],dragging:eb,label:"function"==typeof G?G((0,w.q)(W(ec[0]),ev)):G,ref:e=>{eh.current[0]=e},thumbLabel:Y,onMouseDown:()=>void(em.current=0),onFocus:()=>es(0),showLabelOnHover:H,isHovered:ea,disabled:L,...et?.(0),children:ek?$[0]:$}),(0,r.jsx)(j.z,{...eS,thumbLabel:B,value:W(ec[1]),position:ef[1],dragging:eb,label:"function"==typeof G?G((0,w.q)(W(ec[1]),ev)):G,ref:e=>{eh.current[1]=e},onMouseDown:()=>void(em.current=1),onFocus:()=>es(1),showLabelOnHover:H,isHovered:ea,disabled:L,...et?.(1),children:ek?$[1]:$})]}),(0,r.jsx)("input",{type:"hidden",name:`${q}_from`,value:ec[0],...Q}),(0,r.jsx)("input",{type:"hidden",name:`${q}_to`,value:ec[1],...Q})]})})});M.classes=z.A,M.displayName="@mantine/core/RangeSlider"},55897:(e,t,n)=>{"use strict";n.d(t,{M:()=>g});var r=n(31085),o=n(97567),i=n(14921),s=n(34321),a=n(39735);n(14041);var l=n(33450),c=n(7098),d=n(29686),u=n(69564),h=n(34056),p=n(6754),m=n(33970),f={root:"m_bcaa9990",control:"m_375a65ef"};let v={getControlProps:({data:e})=>({children:e.value})},x=(0,c.V)((e,{color:t,size:n,variant:r,autoContrast:o,depthOffset:i,radius:s})=>{let c=e.variantColorResolver({color:t||e.primaryColor,theme:e,variant:r||"filled",autoContrast:o});return{root:{"--toc-bg":"none"!==r?c.background:void 0,"--toc-color":"none"!==r?c.color:void 0,"--toc-size":(0,l.ny)(n),"--toc-depth-offset":(0,a.D)(i),"--toc-radius":(0,l.nJ)(s)}}}),g=(0,p.P9)((e,t)=>{let n=(0,d.Y)("TableOfContents",v,e),{classNames:a,className:l,style:c,styles:p,unstyled:g,vars:j,color:y,autoContrast:b,scrollSpyOptions:w,initialData:C,getControlProps:S,minDepthToOffset:k,depthOffset:z,variant:A,radius:T,reinitializeRef:M,...P}=n,I=(0,u.I)({name:"TableOfContents",classes:f,props:n,className:l,style:c,classNames:a,styles:p,unstyled:g,vars:j,varsResolver:x}),D=(0,o.B)(),N=(0,i.f)(w);(0,s.bl)(M,N.reinitialize);let E=(N.initialized?N.data:C||[]).map((e,t)=>{let n=S?.({active:t===N.active,data:{...e,getNode:e.getNode||(()=>{})}});return(0,r.jsx)(m.N,{__vars:{"--depth-offset":`${e.depth-(k||1)}`},"data-active":t===N.active||void 0,variant:A,...n,...I("control",{className:n?.className,style:n?.style})},e.id||`${D}-${t}`)});return(0,r.jsx)(h.a,{ref:t,variant:A,...I("root"),...P,children:E})});g.displayName="@mantine/core/TableOfContents",g.classes=f},2306:(e,t,n)=>{"use strict";function r(e){return"object"==typeof e&&null!==e?"base"in e?e.base:void 0:e}n.d(t,{D:()=>r})},29814:(e,t,n)=>{"use strict";n.d(t,{r:()=>o});var r=n(4749);function o(e,t){return e in t?(0,r.px)(t[e]):(0,r.px)(e)}},1300:(e,t,n)=>{"use strict";n.d(t,{q:()=>o});var r=n(29814);function o(e,t){let n=e.map(e=>({value:e,px:(0,r.r)(e,t)}));return n.sort((e,t)=>e.px-t.px),n}},40003:(e,t,n)=>{"use strict";n.d(t,{L:()=>s,w:()=>i});var r=n(14041);let o={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};function i(e){let t=(0,r.useRef)(0),n=(0,r.useRef)(null),[i,s]=(0,r.useState)(o),a=(0,r.useMemo)(()=>"undefined"!=typeof window?new ResizeObserver(e=>{let r=e[0];r&&(cancelAnimationFrame(t.current),t.current=requestAnimationFrame(()=>{if(n.current){let e=r.borderBoxSize?.[0]||r.contentBoxSize?.[0];e?s({width:e.inlineSize,height:e.blockSize,x:r.contentRect.x,y:r.contentRect.y,top:r.contentRect.top,left:r.contentRect.left,bottom:r.contentRect.bottom,right:r.contentRect.right}):s(r.contentRect)}}))}):null,[]);return(0,r.useEffect)(()=>(n.current&&a?.observe(n.current,e),()=>{a?.disconnect(),t.current&&cancelAnimationFrame(t.current)}),[n.current]),[n,i]}function s(e){let[t,{width:n,height:r}]=i(e);return{ref:t,width:n,height:r}}}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,98149,39699,68831,48895,90636,46593,38792],()=>t(59207)),_N_E=e.O()}]);