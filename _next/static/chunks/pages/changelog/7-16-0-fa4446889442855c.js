(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1987],{13656:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-16-0",function(){return n(77164)}])},77164:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(52322),o=n(45392),i=n(42279),s=n(40817),a=n(16722),l=n(14308),c=n(93844),d=n(47838),u=n(49884),h=n(54078),p=n(15019);let m=(0,h.A)(p.us.Changelog7160);function f(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"use-scroll-spy-hook",children:"use-scroll-spy hook"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/hooks/use-scroll-spy",children:"use-scroll-spy"})," hook tracks scroll position and returns index of the\nelement that is currently in the viewport. It is useful for creating\ntable of contents components (like in mantine.dev sidebar on the right side)\nand similar features."]}),"\n",(0,r.jsx)(n,{data:i.y}),"\n",(0,r.jsx)(t.h2,{id:"tableofcontents-component",children:"TableOfContents component"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/core/table-of-contents",children:"TableOfContents"})," component is built on top of ",(0,r.jsx)(t.code,{children:"use-scroll-spy"})," hook\nand can be used to create table of contents components like the one on the right side of mantine.dev\ndocumentation sidebar:"]}),"\n",(0,r.jsx)(n,{data:s.j}),"\n",(0,r.jsx)(t.h2,{id:"inputclearbutton-component",children:"Input.ClearButton component"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.code,{children:"Input.ClearButton"})," component can be used to add clear button to custom inputs\nbased on ",(0,r.jsx)(t.code,{children:"Input"})," component. ",(0,r.jsx)(t.code,{children:"size"})," of the clear button is automatically\ninherited from the input:"]}),"\n",(0,r.jsx)(n,{data:a.S}),"\n",(0,r.jsx)(t.h2,{id:"popover-with-overlay",children:"Popover with overlay"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/core/popover",children:"Popover"})," and other components based on it now support ",(0,r.jsx)(t.code,{children:"withOverlay"})," prop:"]}),"\n",(0,r.jsx)(n,{data:l.I}),"\n",(0,r.jsx)(t.h2,{id:"container-queries-in-carousel",children:"Container queries in Carousel"}),"\n",(0,r.jsxs)(t.p,{children:["You can now use ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",children:"container queries"}),"\nin ",(0,r.jsx)(t.a,{href:"/x/carousel",children:"Carousel"})," component. With container queries, all responsive values\nare adjusted based on the container width, not the viewport width."]}),"\n",(0,r.jsx)(t.p,{children:"Example of using container queries. To see how the grid changes, resize the root element\nof the demo with the resize handle located at the bottom right corner of the demo:"}),"\n",(0,r.jsx)(n,{data:c.n}),"\n",(0,r.jsx)(t.h2,{id:"rangeslider-restricttomarks",children:"RangeSlider restrictToMarks"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/core/slider",children:"RangeSlider"})," component now supports ",(0,r.jsx)(t.code,{children:"restrictToMarks"})," prop:"]}),"\n",(0,r.jsx)(n,{data:d.Z}),"\n",(0,r.jsx)(t.h2,{id:"pagination-withpages-prop",children:"Pagination withPages prop"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/core/pagination",children:"Pagination"})," component now supports ",(0,r.jsx)(t.code,{children:"withPages"})," prop which allows hiding pages\ncontrols and displaying only previous and next buttons:"]}),"\n",(0,r.jsx)(n,{data:u.c}),"\n",(0,r.jsx)(t.h2,{id:"useform-touchtrigger-option",children:"useForm touchTrigger option"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/form/use-form",children:"use-form"})," hook now supports ",(0,r.jsx)(t.code,{children:"touchTrigger"})," option that allows customizing events that change touched state.\nIt accepts two options:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"change"})," (default) – field will be considered touched when its value changes or it has been focused"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"focus"})," – field will be considered touched only when it has been focused"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Example of using ",(0,r.jsx)(t.code,{children:"focus"})," trigger:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: { a: 1 },\n  touchTrigger: 'focus',\n});\n\nform.isTouched('a'); // -> false\nform.setFieldValue('a', 2);\nform.isTouched('a'); // -> false\n\n// onFocus is called automatically when the user focuses the field\nform.getInputProps('a').onFocus();\nform.isTouched('a'); // -> true\n"})}),"\n",(0,r.jsx)(t.h2,{id:"help-center-updates",children:"Help Center updates"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/native-required",children:"Native browser validation does not work in some components, what should I do?"})," question"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/disabled-js",children:"My styles are broken with disabled JavaScript. What should I do?"})," question"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/select-fuzzy",children:"How can I add fuzzy search to Select component?"})," question"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/local-storage-effect",children:"use-local-storage hook returns real value only after mounting, is it a bug?"})," question"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/dropzone-upload",children:"How can I upload files from Dropzone component?"})," question"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/autocomplete",children:"Autocomplete"})," now supports ",(0,r.jsx)(t.code,{children:"clearable"})," prop"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/styles/postcss-preset/#where--mixins",children:"where-* mixins"})," documentation has been added"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/hooks/use-local-storage",children:"use-local-storage"})," hook now supports ",(0,r.jsx)(t.code,{children:"sync"})," option which allows disabling synchronization between browser tabs"]}),"\n"]})]})}function v(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(m,{...e,children:(0,r.jsx)(f,{...e})})}},93844:function(e,t,n){"use strict";n.d(t,{n:function(){return c}});var r=n(52322),o=n(2784),i=n(18451),s=n(88916),a=n(64006),l=n(41452);let c={type:"code",component:function(){let[e,t]=(0,o.useState)(null),n=(0,s.h)(),c=(0,a.y)(()=>e?.reInit(),10);return(0,o.useEffect)(()=>{e&&c()},[c,e,n.width]),(0,r.jsx)("div",{ref:n.ref,style:{resize:"horizontal",overflow:"hidden",maxWidth:"100%",minWidth:250,padding:10},children:(0,r.jsx)(i.l,{getEmblaApi:t,withIndicators:!0,height:200,type:"container",slideSize:{base:"100%","300px":"50%","500px":"33.333333%"},slideGap:{base:0,"300px":"md","500px":"lg"},loop:!0,align:"start",children:(0,r.jsx)(l.M,{count:6})})})},code:`
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
`}},41452:function(e,t,n){"use strict";n.d(t,{M:function(){return a}});var r=n(52322),o=n(18451),i=n(28559);function s({children:e}){return(0,r.jsx)(i.x,{style:{backgroundColor:"var(--mantine-color-blue-filled)",color:"var(--mantine-color-white)",height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",fontSize:50,fontWeight:"bold"},children:e})}function a({count:e}){let t=Array(e).fill(0).map((e,t)=>(0,r.jsx)(o.l.Slide,{children:(0,r.jsx)(s,{children:t+1})},t));return(0,r.jsx)(r.Fragment,{children:t})}},16722:function(e,t,n){"use strict";n.d(t,{S:function(){return s}});var r=n(52322),o=n(2784),i=n(89420);let s={type:"configurator",component:function(e){let[t,n]=(0,o.useState)("clearable");return(0,r.jsx)(i.I,{placeholder:"Clearable input",value:t,onChange:e=>n(e.currentTarget.value),rightSection:""!==t?(0,r.jsx)(i.I.ClearButton,{onClick:()=>n("")}):void 0,rightSectionPointerEvents:"auto",...e})},code:e=>`
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
`,maxWidth:340,centered:!0,controls:[{type:"size",prop:"size",initialValue:"sm",libraryValue:"__"}]}},49884:function(e,t,n){"use strict";n.d(t,{c:function(){return c}});var r=n(52322),o=n(2784),i=n(93010),s=n(8582),a=n(46159);let l=Math.ceil(14.5),c={type:"code",component:function(){let[e,t]=(0,o.useState)(1),n=`Showing ${10*(e-1)+1} \u2013 ${Math.min(145,10*e)} of 145`;return(0,r.jsxs)(i.Z,{justify:"flex-end",children:[(0,r.jsx)(s.x,{size:"sm",children:n}),(0,r.jsx)(a.t,{total:l,value:e,onChange:t,withPages:!1})]})},code:`
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
      <Pagination total={totalPages} value={page} onChange={setPage} />
    </Group>
  );
}
`}},14308:function(e,t,n){"use strict";n.d(t,{I:function(){return u}});var r=n(52322),o=n(26972),i=n(63409),s=n(82067),a=n(93010),l=n(65438),c=n(8582),d=n(71873);let u={type:"code",component:function(){return(0,r.jsxs)(o.J,{width:320,shadow:"md",withArrow:!0,withOverlay:!0,overlayProps:{zIndex:1e4,blur:"8px"},zIndex:10001,children:[(0,r.jsx)(o.J.Target,{children:(0,r.jsx)(i.k,{style:{zIndex:10001,position:"relative"},children:(0,r.jsx)(s.q,{src:"https://avatars.githubusercontent.com/u/79146003?s=200&v=4",radius:"xl"})})}),(0,r.jsxs)(o.J.Dropdown,{children:[(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(s.q,{src:"https://avatars.githubusercontent.com/u/79146003?s=200&v=4",radius:"xl"}),(0,r.jsxs)(l.K,{gap:5,children:[(0,r.jsx)(c.x,{size:"sm",fw:700,style:{lineHeight:1},children:"Mantine"}),(0,r.jsx)(d.e,{href:"https://x.com/mantinedev",c:"dimmed",size:"xs",style:{lineHeight:1},children:"@mantinedev"})]})]}),(0,r.jsx)(c.x,{size:"sm",mt:"md",children:"Customizable React components and hooks library with focus on usability, accessibility and developer experience"}),(0,r.jsxs)(a.Z,{mt:"md",gap:"xl",children:[(0,r.jsxs)(c.x,{size:"sm",children:[(0,r.jsx)("b",{children:"0"})," Following"]}),(0,r.jsxs)(c.x,{size:"sm",children:[(0,r.jsx)("b",{children:"1,174"})," Followers"]})]})]})]})},code:`
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
`,centered:!0}},47838:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(52322),o=n(65438),i=n(73822),s=n(5356);let a={type:"code",component:function(){return(0,r.jsxs)(o.K,{children:[(0,r.jsx)(i.i,{restrictToMarks:!0,defaultValue:25,marks:Array.from({length:5}).map((e,t)=>({value:25*t}))}),(0,r.jsx)(s.U,{restrictToMarks:!0,defaultValue:[5,15],marks:[{value:5},{value:15},{value:25},{value:35},{value:70},{value:80},{value:90}]})]})},code:`
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
`,centered:!0,maxWidth:400}},40817:function(e,t,n){"use strict";n.d(t,{j:function(){return i}});var r=n(52322),o=n(18848);let i={type:"configurator",component:function(e){return(0,r.jsx)(o.o,{...e,scrollSpyOptions:{selector:"#mdx :is(h1, h2, h3, h4, h5, h6)"},getControlProps:({data:e})=>({onClick:()=>e.getNode().scrollIntoView(),children:e.value})})},code:`
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
`,centered:!0,maxWidth:340,controls:[{type:"segmented",prop:"variant",initialValue:"filled",data:["filled","light","none"],libraryValue:null},{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"__"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"__"}]}},42279:function(e,t,n){"use strict";n.d(t,{y:function(){return a}});var r=n(52322),o=n(63409),i=n(8582),s=n(25698);let a={type:"code",component:function(){let e=(0,s.H)({selector:"#mdx :is(h1, h2, h3, h4, h5, h6)"}),t=e.data.map((t,n)=>(0,r.jsx)("li",{style:{listStylePosition:"inside",paddingInlineStart:20*t.depth,background:n===e.active?"var(--mantine-color-blue-light)":void 0},children:(0,r.jsx)(o.k,{onClick:()=>t.getNode().scrollIntoView(),children:t.value})},t.id));return(0,r.jsxs)("div",{children:[(0,r.jsx)(i.x,{children:"Scroll to heading:"}),(0,r.jsx)("ul",{style:{margin:0,padding:0},children:t})]})},code:`
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
`}},18451:function(e,t,n){"use strict";n.d(t,{l:function(){return G}});var r=n(52322),o=n(2784),i=n(26601),s=n(11200),a=n(58898),l=n(91482),c=n(82027),d=n(38483),u=n(46690),h=n(12063),p=n(89027),m=n(63409),f=n(28559),v=n(46752),x=n(82692);let[g,y]=(0,n(89106).R)("Carousel component was not found in tree");var j={root:"m_17884d0f",viewport:"m_a2dae653",container:"m_fcd81474",controls:"m_39bc3463",control:"m_64f58e10",indicators:"m_71ea3ab1",indicator:"m_eae68602",slide:"m_d98df724"};let b={},w=(0,c.d5)((e,t)=>{let{classNames:n,className:o,style:i,styles:s,vars:a,mod:l,...c}=(0,d.w)("CarouselSlide",b,e),u=y();return(0,r.jsx)(f.x,{ref:t,mod:[{orientation:u.orientation},l],...u.getStyles("slide",{className:o,style:i,classNames:n,styles:s}),...c})});w.classes=j,w.displayName="@mantine/carousel/CarouselSlide";var C=n(68755),S=n(40580),k=n(32100),z=n(98446),T=n(54541),M=n(9437),I=n(65744);function A({slideGap:e,slideSize:t,selector:n}){let o=(0,C.rZ)(),i=(0,S.L)({"--carousel-slide-gap":(0,l.bG)((0,k.v)(e)),"--carousel-slide-size":(0,a.h)((0,k.v)(t))}),s=(0,z.X)(o.breakpoints).reduce((n,r)=>(n[r]||(n[r]={}),"object"==typeof e&&void 0!==e[r]&&(n[r]["--carousel-slide-gap"]=(0,l.bG)(e[r])),"object"==typeof t&&void 0!==t[r]&&(n[r]["--carousel-slide-size"]=(0,l.bG)(t[r])),n),{}),c=(0,T.I)((0,z.X)(s),o.breakpoints).filter(e=>(0,z.X)(s[e.value]).length>0).map(e=>({query:`(min-width: ${o.breakpoints[e.value]})`,styles:s[e.value]}));return(0,r.jsx)(M.f,{styles:i,media:c,selector:n})}function _(e){return"object"==typeof e&&null!==e?(0,z.X)(e):[]}function P({slideGap:e,slideSize:t,selector:n}){let o=(0,S.L)({"--carousel-slide-gap":(0,l.bG)((0,k.v)(e)),"--carousel-slide-size":(0,a.h)((0,k.v)(t))}),i=(function({slideGap:e,slideSize:t}){return Array.from(new Set([..._(e),..._(t)])).sort((e,t)=>(0,I.px)(e)-(0,I.px)(t))})({slideGap:e,slideSize:t}).reduce((n,r)=>(n[r]||(n[r]={}),"object"==typeof e&&void 0!==e[r]&&(n[r]["--carousel-slide-gap"]=(0,l.bG)(e[r])),"object"==typeof t&&void 0!==t[r]&&(n[r]["--carousel-slide-size"]=(0,l.bG)(t[r])),n),{}),s=Object.keys(i).map(e=>({query:`carousel (min-width: ${e})`,styles:i[e]}));return(0,r.jsx)(M.f,{styles:o,container:s,selector:n})}function N({dir:e,orientation:t,direction:n}){return"previous"===n?"horizontal"===t?90*("ltr"===e?1:-1):-180:"horizontal"===t?90*("ltr"===e?-1:1):0}let E={controlSize:26,controlsOffset:"sm",slideSize:"100%",slideGap:0,orientation:"horizontal",align:"center",slidesToScroll:1,includeGapInSize:!0,draggable:!0,dragFree:!1,loop:!1,speed:10,initialSlide:0,inViewThreshold:0,withControls:!0,withIndicators:!1,skipSnaps:!1,containScroll:"",withKeyboardEvents:!0,type:"media"},R=(0,s.Z)((e,{height:t,controlSize:n,controlsOffset:r})=>({root:{"--carousel-height":(0,a.h)(t),"--carousel-control-size":(0,a.h)(n),"--carousel-controls-offset":(0,l.bG)(r)}})),G=(0,c.d5)((e,t)=>{let n=(0,d.w)("Carousel",E,e),{classNames:s,className:a,style:l,styles:c,unstyled:y,vars:b,children:w,getEmblaApi:C,onNextSlide:S,onPreviousSlide:k,onSlideChange:z,nextControlProps:T,previousControlProps:M,controlSize:I,controlsOffset:_,slideSize:G,slideGap:V,orientation:q,height:D,align:O,slidesToScroll:Z,includeGapInSize:F,draggable:$,dragFree:H,loop:B,speed:L,initialSlide:J,inViewThreshold:W,withControls:U,withIndicators:X,plugins:K,nextControlIcon:Q,previousControlIcon:Y,skipSnaps:ee,containScroll:et,withKeyboardEvents:en,mod:er,type:eo,...ei}=n,es=(0,u.y)({name:"Carousel",classes:j,props:n,className:a,style:l,classNames:s,styles:c,unstyled:y,vars:b,varsResolver:R}),ea=(0,h.m)(),{dir:el}=(0,p.gm)(),[ec,ed]=(0,i.Z)({axis:"horizontal"===q?"x":"y",direction:"horizontal"===q?el:void 0,startIndex:J,loop:B,align:O,slidesToScroll:Z,draggable:$,dragFree:H,speed:L,inViewThreshold:W,skipSnaps:ee,containScroll:et},K),[eu,eh]=(0,o.useState)(0),[ep,em]=(0,o.useState)(0),ef=(0,o.useCallback)(e=>ed&&ed.scrollTo(e),[ed]),ev=(0,o.useCallback)(()=>{if(!ed)return;let e=ed.selectedScrollSnap();eh(e),e!==eu&&z?.(e)},[ed,eh,z,eu]),ex=(0,o.useCallback)(()=>{ed?.scrollPrev(),k?.()},[ed]),eg=(0,o.useCallback)(()=>{ed?.scrollNext(),S?.()},[ed]),ey=(0,o.useCallback)(e=>{en&&("ArrowRight"===e.key&&(e.preventDefault(),eg()),"ArrowLeft"===e.key&&(e.preventDefault(),ex()))},[ed]);(0,o.useEffect)(()=>{if(ed)return C?.(ed),ev(),em(ed.scrollSnapList().length),ed.on("select",ev),()=>{ed.off("select",ev)}},[ed,Z,ev]),(0,o.useEffect)(()=>{ed&&(ed.reInit(),em(ed.scrollSnapList().length),eh(e=>(0,x.u)(e,0,o.Children.toArray(w).length-1)))},[o.Children.toArray(w).length,Z]);let ej=ed?.canScrollPrev()||!1,eb=ed?.canScrollNext()||!1,ew=Array(ep).fill(0).map((e,t)=>(0,o.createElement)(m.k,{...es("indicator"),key:t,"data-active":t===eu||void 0,"aria-hidden":!0,tabIndex:-1,onClick:()=>ef(t),"data-orientation":q}));return(0,r.jsxs)(g,{value:{getStyles:es,orientation:q},children:["container"===eo?(0,r.jsx)(P,{...n,selector:`.${ea}`}):(0,r.jsx)(A,{...n,selector:`.${ea}`}),(0,r.jsxs)(f.x,{ref:t,...es("root",{className:"responsiveClassName"}),...ei,mod:[{orientation:q,"include-gap-in-size":F},er],onKeyDownCapture:ey,children:[(0,r.jsx)("div",{...es("viewport"),ref:ec,"data-type":eo,children:(0,r.jsx)("div",{...es("container",{className:ea}),"data-orientation":q,children:w})}),X&&(0,r.jsx)("div",{...es("indicators"),"data-orientation":q,children:ew}),U&&(0,r.jsxs)("div",{...es("controls"),"data-orientation":q,children:[(0,r.jsx)(m.k,{...M,...es("control",{className:M?.className,style:M?.style}),onClick:e=>{ex(),M?.onClick?.(e)},"data-inactive":!ej||void 0,tabIndex:ej?0:-1,children:void 0!==Y?Y:(0,r.jsx)(v.Q,{style:{transform:`rotate(${N({dir:el,orientation:q,direction:"previous"})}deg)`}})}),(0,r.jsx)(m.k,{...es("control",{className:T?.className,style:T?.style}),...T,onClick:e=>{eg(),T?.onClick?.(e)},"data-inactive":!eb||void 0,tabIndex:eb?0:-1,children:void 0!==Q?Q:(0,r.jsx)(v.Q,{style:{transform:`rotate(${N({dir:el,orientation:q,direction:"next"})}deg)`}})})]})]})]})});G.classes=j,G.displayName="@mantine/carousel/Carousel",G.Slide=w},46752:function(e,t,n){"use strict";n.d(t,{Q:function(){return i}});var r=n(52322),o=n(58898);function i({style:e,size:t=16,...n}){return(0,r.jsx)("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...e,width:(0,o.h)(t),height:(0,o.h)(t),display:"block"},...n,children:(0,r.jsx)("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}n(2784),i.displayName="@mantine/core/AccordionChevron"},82067:function(e,t,n){"use strict";n.d(t,{q:function(){return w}});var r=n(52322),o=n(2784),i=n(91482),s=n(11200),a=n(38483),l=n(46690),c=n(28559),d=n(33502),u=n(82027);let h=(0,o.createContext)(null),p=h.Provider;var m={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};let f={},v=(0,s.Z)((e,{spacing:t})=>({group:{"--ag-spacing":(0,i.bG)(t)}})),x=(0,u.d5)((e,t)=>{let n=(0,a.w)("AvatarGroup",f,e),{classNames:o,className:i,style:s,styles:d,unstyled:u,vars:h,spacing:x,...g}=n,y=(0,l.y)({name:"AvatarGroup",classes:m,props:n,className:i,style:s,classNames:o,styles:d,unstyled:u,vars:h,varsResolver:v,rootSelector:"group"});return(0,r.jsx)(p,{value:!0,children:(0,r.jsx)(c.x,{ref:t,...y("group"),...g})})});function g(e){return(0,r.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}x.classes=m,x.displayName="@mantine/core/AvatarGroup";let y=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],j={},b=(0,s.Z)((e,{size:t,radius:n,variant:r,gradient:o,color:s,autoContrast:a,name:l,allowedInitialsColors:c})=>{let d="initials"===s&&"string"==typeof l?function(e,t=y){let n=Math.abs(function(e){let t=0;for(let n=0;n<e.length;n+=1)t=(t<<5)-t+e.charCodeAt(n)|0;return t}(e))%t.length;return t[n]}(l,c):s,u=e.variantColorResolver({color:d||"gray",theme:e,gradient:o,variant:r||"light",autoContrast:a});return{root:{"--avatar-size":(0,i.ap)(t,"avatar-size"),"--avatar-radius":void 0===n?void 0:(0,i.H5)(n),"--avatar-bg":d||r?u.background:void 0,"--avatar-color":d||r?u.color:void 0,"--avatar-bd":d||r?u.border:void 0}}}),w=(0,d.b)((e,t)=>{let n=(0,a.w)("Avatar",j,e),{classNames:i,className:s,style:d,styles:u,unstyled:p,vars:f,src:v,alt:x,radius:y,color:w,gradient:C,imageProps:S,children:k,autoContrast:z,mod:T,name:M,allowedInitialsColors:I,...A}=n,_={withinGroup:!!(0,o.useContext)(h)},[P,N]=(0,o.useState)(!v),E=(0,l.y)({name:"Avatar",props:n,classes:m,className:s,style:d,classNames:i,styles:u,unstyled:p,vars:f,varsResolver:b});return(0,o.useEffect)(()=>N(!v),[v]),(0,r.jsx)(c.x,{...E("root"),mod:[{"within-group":_.withinGroup},T],ref:t,...A,children:P?(0,r.jsx)("span",{...E("placeholder"),title:x,children:k||"string"==typeof M&&function(e,t=2){let n=e.split(" ");return 1===n.length?e.slice(0,t).toUpperCase():n.map(e=>e[0]).slice(0,t).join("").toUpperCase()}(M)||(0,r.jsx)(g,{})}):(0,r.jsx)("img",{...S,...E("image"),src:v,alt:x,onError:e=>{N(!0),S?.onError?.(e)}})})});w.classes=m,w.displayName="@mantine/core/Avatar",w.Group=x},5356:function(e,t,n){"use strict";n.d(t,{U:function(){return M}});var r=n(52322),o=n(2784),i=n(9341),s=n(51438),a=n(58898),l=n(91482),c=n(86411),d=n(11200),u=n(13588),h=n(38483),p=n(46690),m=n(82027),f=n(89027),v=n(56867),x=n(10497),g=n(39172),y=n(77970),j=n(37748),b=n(81515),w=n(49514),C=n(40148),S=n(83879),k=n(40908);let z=(0,d.Z)((e,{size:t,color:n,thumbSize:r,radius:o})=>({root:{"--slider-size":(0,l.ap)(t,"slider-size"),"--slider-color":n?(0,u.p)(n,e):void 0,"--slider-radius":void 0===o?void 0:(0,l.H5)(o),"--slider-thumb-size":void 0!==r?(0,a.h)(r):"calc(var(--slider-size) * 2)"}})),T={min:0,max:100,minRange:10,step:1,marks:[],label:e=>e,labelTransitionProps:{transition:"fade",duration:0},labelAlwaysOn:!1,showLabelOnHover:!0,disabled:!1,scale:e=>e},M=(0,m.d5)((e,t)=>{let n=(0,h.w)("RangeSlider",T,e),{classNames:a,styles:l,value:d,onChange:u,onChangeEnd:m,size:M,min:I,max:A,minRange:_,maxRange:P,step:N,precision:E,defaultValue:R,name:G,marks:V,label:q,labelTransitionProps:D,labelAlwaysOn:O,thumbFromLabel:Z,thumbToLabel:F,showLabelOnHover:$,thumbChildren:H,disabled:B,unstyled:L,scale:J,inverted:W,className:U,style:X,vars:K,hiddenInputProps:Q,restrictToMarks:Y,thumbProps:ee,...et}=n,en=(0,p.y)({name:"Slider",props:n,classes:k.Z,classNames:a,className:U,styles:l,style:X,vars:K,varsResolver:z,unstyled:L}),{dir:er}=(0,f.gm)(),[eo,ei]=(0,o.useState)(-1),[es,ea]=(0,o.useState)(!1),[el,ec]=(0,i.C)({value:d,defaultValue:R,finalValue:[I,A],onChange:u}),ed=(0,o.useRef)(el),eu=(0,o.useRef)([]),eh=(0,o.useRef)(void 0),ep=[(0,w.b)({value:el[0],min:I,max:A}),(0,w.b)({value:el[1],min:I,max:A})],em=E??(0,C.p)(N),ef=e=>{ec(e),ed.current=e};(0,o.useEffect)(()=>{Array.isArray(d)&&(ed.current=d)},Array.isArray(d)?[d[0],d[1]]:[null,null]);let ev=(e,t,n)=>{if(-1===t)return;let r=[...ed.current];if(Y&&V){let n=(0,c.s)(e,V.map(e=>e.value)),o=r[t];r[t]=n;let i=0===t?1:0,s=(0,S.Jy)(V),a=(0,S.Bm)(V);n===s&&r[i]===s?r[t]=o:n===a&&r[i]===a?r[t]=o:n===r[i]&&(o>r[i]?r[i]=(0,S.ru)(n,V):r[i]=(0,S.Ml)(n,V))}else r[t]=e,0===t&&(e>r[1]-(_-1e-9)&&(r[1]=Math.min(e+_,A)),e>(A-(_-1e-9)||I)&&(r[t]=ed.current[t]),r[1]-e>P&&(r[1]=e+P)),1===t&&(e<r[0]+_&&(r[0]=Math.max(e-_,I)),e<r[0]+_&&(r[t]=ed.current[t]),e-r[0]>P&&(r[0]=e-P));if(r[0]=(0,b.J)(r[0],em),r[1]=(0,b.J)(r[1],em),r[0]>r[1]){let e=r[0];r[0]=r[1],r[1]=e}ef(r),n&&m?.(ed.current)},ex=e=>{B||ev((0,j.i)({value:e,min:I,max:A,step:N,precision:em}),eh.current,!1)},{ref:eg,active:ey}=(0,s.r)(({x:e})=>ex(e),{onScrubEnd:()=>m?.(ed.current)},er),ej=e=>{var t;eg.current.focus();let n=eg.current.getBoundingClientRect(),r=(t=e.nativeEvent,"TouchEvent"in window&&t instanceof window.TouchEvent?t.touches[0].clientX:t.clientX),o=(0,j.i)({value:r-n.left,max:A,min:I,step:N,containerWidth:n.width}),i=Math.abs(el[0]-o)>Math.abs(el[1]-o)?1:0,s="ltr"===er?i:1===i?0:1;eh.current=s},eb=()=>1!==eo&&0!==eo?(ei(0),0):eo,ew={max:A,min:I,size:M,labelTransitionProps:D,labelAlwaysOn:O,onBlur:()=>ei(-1)},eC=Array.isArray(H);return(0,r.jsx)(v.Y,{value:{getStyles:en},children:(0,r.jsxs)(x.l,{...et,size:M,ref:t,disabled:B,children:[(0,r.jsxs)(y.f,{offset:ep[0],marksOffset:el[0],filled:ep[1]-ep[0],marks:V,inverted:W,min:I,max:A,value:el[1],disabled:B,containerProps:{ref:eg,onMouseEnter:$?()=>ea(!0):void 0,onMouseLeave:$?()=>ea(!1):void 0,onTouchStartCapture:ej,onTouchEndCapture:()=>{eh.current=-1},onMouseDownCapture:ej,onMouseUpCapture:()=>{eh.current=-1},onKeyDownCapture:e=>{if(!B)switch(e.key){case"ArrowUp":{e.preventDefault();let t=eb();eu.current[t].focus();let n=Y&&V?(0,S.Ml)(ed.current[t],V):Math.min(Math.max(ed.current[t]+N,I),A);ev((0,b.J)(n,em),t,!0);break}case"ArrowRight":{e.preventDefault();let t=eb();eu.current[t].focus();let n=Y&&V?("rtl"===er?S.ru:S.Ml)(ed.current[t],V):Math.min(Math.max("rtl"===er?ed.current[t]-N:ed.current[t]+N,I),A);ev((0,b.J)(n,em),t,!0);break}case"ArrowDown":{e.preventDefault();let t=eb();eu.current[t].focus();let n=Y&&V?(0,S.ru)(ed.current[t],V):Math.min(Math.max(ed.current[t]-N,I),A);ev((0,b.J)(n,em),t,!0);break}case"ArrowLeft":{e.preventDefault();let t=eb();eu.current[t].focus();let n=Y&&V?("rtl"===er?S.Ml:S.ru)(ed.current[t],V):Math.min(Math.max("rtl"===er?ed.current[t]+N:ed.current[t]-N,I),A);ev((0,b.J)(n,em),t,!0)}}}},children:[(0,r.jsx)(g.b,{...ew,value:J(el[0]),position:ep[0],dragging:ey,label:"function"==typeof q?q((0,b.J)(J(el[0]),em)):q,ref:e=>{eu.current[0]=e},thumbLabel:Z,onMouseDown:()=>void(eh.current=0),onFocus:()=>ei(0),showLabelOnHover:$,isHovered:es,disabled:B,...ee?.(0),children:eC?H[0]:H}),(0,r.jsx)(g.b,{...ew,thumbLabel:F,value:J(el[1]),position:ep[1],dragging:ey,label:"function"==typeof q?q((0,b.J)(J(el[1]),em)):q,ref:e=>{eu.current[1]=e},onMouseDown:()=>void(eh.current=1),onFocus:()=>ei(1),showLabelOnHover:$,isHovered:es,disabled:B,...ee?.(1),children:eC?H[1]:H})]}),(0,r.jsx)("input",{type:"hidden",name:`${G}_from`,value:el[0],...Q}),(0,r.jsx)("input",{type:"hidden",name:`${G}_to`,value:el[1],...Q})]})})});M.classes=k.Z,M.displayName="@mantine/core/RangeSlider"},18848:function(e,t,n){"use strict";n.d(t,{o:function(){return g}});var r=n(52322),o=n(66178),i=n(25698),s=n(70837),a=n(58898);n(2784);var l=n(91482),c=n(11200),d=n(38483),u=n(46690),h=n(28559),p=n(82027),m=n(63409),f={root:"m_bcaa9990",control:"m_375a65ef"};let v={getControlProps:({data:e})=>({children:e.value})},x=(0,c.Z)((e,{color:t,size:n,variant:r,autoContrast:o,depthOffset:i,radius:s})=>{let c=e.variantColorResolver({color:t||e.primaryColor,theme:e,variant:r||"filled",autoContrast:o});return{root:{"--toc-bg":"none"!==r?c.background:void 0,"--toc-color":"none"!==r?c.color:void 0,"--toc-size":(0,l.yv)(n),"--toc-depth-offset":(0,a.h)(i),"--toc-radius":(0,l.H5)(s)}}}),g=(0,p.d5)((e,t)=>{let n=(0,d.w)("TableOfContents",v,e),{classNames:a,className:l,style:c,styles:p,unstyled:g,vars:y,color:j,autoContrast:b,scrollSpyOptions:w,initialData:C,getControlProps:S,minDepthToOffset:k,depthOffset:z,variant:T,radius:M,reinitializeRef:I,...A}=n,_=(0,u.y)({name:"TableOfContents",classes:f,props:n,className:l,style:c,classNames:a,styles:p,unstyled:g,vars:y,varsResolver:x}),P=(0,o.M)(),N=(0,i.H)(w);(0,s.kR)(I,N.reinitialize);let E=(N.initialized?N.data:C||[]).map((e,t)=>{let n=S?.({active:t===N.active,data:{...e,getNode:e.getNode||(()=>{})}});return(0,r.jsx)(m.k,{__vars:{"--depth-offset":`${e.depth-(k||1)}`},"data-active":t===N.active||void 0,variant:T,...n,..._("control",{className:n?.className,style:n?.style})},e.id||`${P}-${t}`)});return(0,r.jsx)(h.x,{ref:t,variant:T,..._("root"),...A,children:E})});g.displayName="@mantine/core/TableOfContents",g.classes=f},32100:function(e,t,n){"use strict";function r(e){return"object"==typeof e&&null!==e?"base"in e?e.base:void 0:e}n.d(t,{v:function(){return r}})},99070:function(e,t,n){"use strict";n.d(t,{o:function(){return o}});var r=n(65744);function o(e,t){return e in t?(0,r.px)(t[e]):(0,r.px)(e)}},54541:function(e,t,n){"use strict";n.d(t,{I:function(){return o}});var r=n(99070);function o(e,t){let n=e.map(e=>({value:e,px:(0,r.o)(e,t)}));return n.sort((e,t)=>e.px-t.px),n}},88916:function(e,t,n){"use strict";n.d(t,{h:function(){return s},y:function(){return i}});var r=n(2784);let o={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};function i(e){let t=(0,r.useRef)(0),n=(0,r.useRef)(null),[i,s]=(0,r.useState)(o),a=(0,r.useMemo)(()=>"undefined"!=typeof window?new ResizeObserver(e=>{let r=e[0];r&&(cancelAnimationFrame(t.current),t.current=requestAnimationFrame(()=>{n.current&&s(r.contentRect)}))}):null,[]);return(0,r.useEffect)(()=>(n.current&&a?.observe(n.current,e),()=>{a?.disconnect(),t.current&&cancelAnimationFrame(t.current)}),[n.current]),[n,i]}function s(e){let[t,{width:n,height:r}]=i(e);return{ref:t,width:n,height:r}}}},function(e){e.O(0,[61177,26601,66748,61639,46159,92888,49774,40179],function(){return e(e.s=13656)}),_N_E=e.O()}]);