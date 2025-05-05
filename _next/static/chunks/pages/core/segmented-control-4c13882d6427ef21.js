(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[62560],{41701:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/segmented-control",function(){return t(43878)}])},43878:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>M});var a=t(31085),l=t(71184),r=t(63736);let o={type:"configurator",component:function(e){return(0,a.jsx)(r.I,{data:["React","Angular","Vue"],...e})},code:`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue']} />;
}
`,controls:[{prop:"orientation",type:"segmented",initialValue:"horizontal",libraryValue:"horizontal",data:[{label:"horizontal",value:"horizontal"},{label:"vertical",value:"vertical"}]},{prop:"fullWidth",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withItemsBorders",type:"boolean",initialValue:!0,libraryValue:!0},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"}]};var i=t(75390),s=t(93065);let d={type:"code",component:function(){return(0,a.jsxs)(i.B,{align:"center",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(s.E,{size:"sm",fw:500,mb:3,children:"Disabled control"}),(0,a.jsx)(r.I,{disabled:!0,data:[{value:"preview",label:"Preview"},{value:"code",label:"Code"},{value:"export",label:"Export"}]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(s.E,{size:"sm",fw:500,mb:3,children:"Disabled option"}),(0,a.jsx)(r.I,{data:[{value:"preview",label:"Preview",disabled:!0},{value:"code",label:"Code"},{value:"export",label:"Export"}]})]})]})},code:`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return (
    <Stack align="center">
      <div>
        <Text size="sm" fw={500} mb={3}>
          Disabled control
        </Text>
        <SegmentedControl
          disabled
          data={[
            {
              value: 'preview',
              label: 'Preview',
            },
            {
              value: 'code',
              label: 'Code',
            },
            {
              value: 'export',
              label: 'Export',
            },
          ]}
        />
      </div>

      <div>
        <Text size="sm" fw={500} mb={3}>
          Disabled option
        </Text>
        <SegmentedControl
          data={[
            {
              value: 'preview',
              label: 'Preview',
              disabled: true,
            },
            {
              value: 'code',
              label: 'Code',
            },
            {
              value: 'export',
              label: 'Export',
            },
          ]}
        />
      </div>
    </Stack>
  );
}
`,defaultExpanded:!1};var c=t(4925),u=t(91133),p=t(81723),h=t(73687);let v={type:"code",component:function(){return(0,a.jsx)(r.I,{data:[{value:"preview",label:(0,a.jsxs)(h.o,{style:{gap:10},children:[(0,a.jsx)(c.A,{size:16}),(0,a.jsx)("span",{children:"Preview"})]})},{value:"code",label:(0,a.jsxs)(h.o,{style:{gap:10},children:[(0,a.jsx)(u.A,{size:16}),(0,a.jsx)("span",{children:"Code"})]})},{value:"export",label:(0,a.jsxs)(h.o,{style:{gap:10},children:[(0,a.jsx)(p.A,{size:16}),(0,a.jsx)("span",{children:"Export"})]})}]})},centered:!0,code:`
import { Center, SegmentedControl } from '@mantine/core';
import { IconEye, IconCode, IconExternalLink } from '@tabler/icons-react';

function Demo() {
  return (
    <SegmentedControl
      data={[
        {
          value: 'preview',
          label: (
            <Center style={{ gap: 10 }}>
              <IconEye size={16} />
              <span>Preview</span>
            </Center>
          ),
        },
        {
          value: 'code',
          label: (
            <Center style={{ gap: 10 }}>
              <IconCode size={16} />
              <span>Code</span>
            </Center>
          ),
        },
        {
          value: 'export',
          label: (
            <Center style={{ gap: 10 }}>
              <IconExternalLink size={16} />
              <span>Export</span>
            </Center>
          ),
        },
      ]}
    />
  );
}
`},m={type:"configurator",component:function(e){return(0,a.jsx)(r.I,{data:["React","Angular","Vue","Svelte"],...e})},code:`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue', 'Svelte']} />;
}
`,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:null}]},x={type:"code",code:`
import { SegmentedControl, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="sm" fw={500} mt={3}>
        No transitions
      </Text>
      <SegmentedControl data={['React', 'Angular', 'Vue', 'Svelte']} transitionDuration={0} />

      <Text size="sm" fw={500} mt="md">
        500ms linear transition
      </Text>
      <SegmentedControl
        data={['React', 'Angular', 'Vue', 'Svelte']}
        transitionDuration={500}
        transitionTimingFunction="linear"
      />
    </>
  );
}
`,centered:!0,component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.E,{size:"sm",fw:500,mt:3,children:"No transitions"}),(0,a.jsx)(r.I,{data:["React","Angular","Vue","Svelte"],transitionDuration:0}),(0,a.jsx)(s.E,{size:"sm",fw:500,mt:"md",children:"500ms linear transition"}),(0,a.jsx)(r.I,{data:["React","Angular","Vue","Svelte"],transitionDuration:500,transitionTimingFunction:"linear"})]})}},g={type:"code",component:function(){return(0,a.jsx)(r.I,{readOnly:!0,defaultValue:"Angular",data:["React","Angular","Vue"]})},centered:!0,code:`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl readOnly defaultValue="Angular" data={['React', 'Angular', 'Vue']} />;
}
`};var y=t(28507);let j=`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue']} />;
}
`,b={type:"styles-api",data:y.G,component:function(e){return(0,a.jsx)(r.I,{data:["React","Angular","Vue"],...e})},code:j,centered:!0};var f=t(42052);let k={type:"code",component:function(){let e={style:{display:"block"},size:20,stroke:1.5};return(0,a.jsx)(r.I,{data:[{value:"preview",label:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.A,{...e}),(0,a.jsx)(f.s,{children:"Preview"})]})},{value:"code",label:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.A,{...e}),(0,a.jsx)(f.s,{children:"Code"})]})},{value:"export",label:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p.A,{...e}),(0,a.jsx)(f.s,{children:"Export"})]})}]})},centered:!0,code:`
import { SegmentedControl, VisuallyHidden } from '@mantine/core';
import { IconEye, IconCode, IconExternalLink } from '@tabler/icons-react';

function Demo() {
  const iconProps = {
    style: { display: 'block' },
    size: 20,
    stroke: 1.5,
  };

  return (
    <SegmentedControl
      data={[
        {
          value: 'preview',
          label: (
            <>
              <IconEye {...iconProps} />
              <VisuallyHidden>Preview</VisuallyHidden>
            </>
          ),
        },
        {
          value: 'code',
          label: (
            <>
              <IconCode {...iconProps} />
              <VisuallyHidden>Code</VisuallyHidden>
            </>
          ),
        },
        {
          value: 'export',
          label: (
            <>
              <IconExternalLink {...iconProps} />
              <VisuallyHidden>Export</VisuallyHidden>
            </>
          ),
        },
      ]}
    />
  );
}
`};var C=t(18675),A=t(20017);let w=(0,C.P)(A.XZ.SegmentedControl);function S(e){let n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components},{Demo:t,StylesApiSelectors:r}=n;return t||V("Demo",!0),r||V("StylesApiSelectors",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t,{data:o}),"\n",(0,a.jsx)(n.h2,{id:"controlled",children:"Controlled"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { SegmentedControl } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('react');\n\n  return (\n    <SegmentedControl\n      value={value}\n      onChange={setValue}\n      data={[\n        { label: 'React', value: 'react' },\n        { label: 'Angular', value: 'ng' },\n        { label: 'Vue', value: 'vue' },\n        { label: 'Svelte', value: 'svelte' },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"data-prop",children:"Data prop"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"SegmentedControl"})," support two different data formats:"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["An array of strings – used when ",(0,a.jsx)(n.code,{children:"value"})," and ",(0,a.jsx)(n.code,{children:"label"})," are the same"]}),"\n",(0,a.jsxs)(n.li,{children:["An array of objects – used when ",(0,a.jsx)(n.code,{children:"value"})," and ",(0,a.jsx)(n.code,{children:"label"})," are different"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { SegmentedControl } from '@mantine/core';\n\nfunction ArrayOfStrings() {\n  return (\n    <SegmentedControl data={['React', 'Angular', 'Svelte', 'Vue']} />\n  );\n}\n\nfunction ArrayOfObjects() {\n  return (\n    <SegmentedControl\n      data={[\n        { value: 'React', label: 'React' },\n        { value: 'Angular', label: 'Angular' },\n        { value: 'Svelte', label: 'Svelte' },\n        { value: 'Vue', label: 'Vue' },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"disabled",children:"Disabled"}),"\n",(0,a.jsxs)(n.p,{children:["To disable ",(0,a.jsx)(n.code,{children:"SegmentedControl"})," item, use array of objects ",(0,a.jsx)(n.code,{children:"data"})," format and set ",(0,a.jsx)(n.code,{children:"disabled: true"}),"\non the item that you want to disable. To disable the entire component, use ",(0,a.jsx)(n.code,{children:"disabled"})," prop."]}),"\n",(0,a.jsx)(t,{data:d}),"\n",(0,a.jsx)(n.h2,{id:"react-node-as-label",children:"React node as label"}),"\n",(0,a.jsx)(n.p,{children:"You can use any React node as label:"}),"\n",(0,a.jsx)(t,{data:v}),"\n",(0,a.jsx)(n.h2,{id:"color",children:"Color"}),"\n",(0,a.jsxs)(n.p,{children:["By default, ",(0,a.jsx)(n.code,{children:"SegmentedControl"})," uses ",(0,a.jsx)(n.code,{children:"theme.white"})," with shadow in light color scheme and ",(0,a.jsx)(n.code,{children:"var(--mantine-color-dark-6)"})," background color for indicator.\nSet ",(0,a.jsx)(n.code,{children:"color"})," prop to change indicator ",(0,a.jsx)(n.code,{children:"background-color"}),":"]}),"\n",(0,a.jsx)(t,{data:m}),"\n",(0,a.jsx)(n.h2,{id:"transitions",children:"Transitions"}),"\n",(0,a.jsx)(n.p,{children:"Change transition properties with:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"transitionDuration"})," – all transitions duration in ms, ",(0,a.jsx)(n.code,{children:"200"})," by default"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"transitionTimingFunction"})," – all transitions timing function, ",(0,a.jsx)(n.code,{children:"ease"})," by default"]}),"\n"]}),"\n",(0,a.jsx)(t,{data:x}),"\n",(0,a.jsx)(n.h2,{id:"readonly",children:"readOnly"}),"\n",(0,a.jsxs)(n.p,{children:["Set ",(0,a.jsx)(n.code,{children:"readOnly"})," prop to prevent value from being changed:"]}),"\n",(0,a.jsx)(t,{data:g}),"\n",(0,a.jsx)(r,{component:"SegmentedControl"}),"\n",(0,a.jsx)(t,{data:b}),"\n",(0,a.jsx)(n.h2,{id:"accessibility-and-usability",children:"Accessibility and usability"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"SegmentedControl"})," uses radio inputs under the hood, it is accessible by default with no extra steps required if you have text in labels.\nComponent support the same keyboard events as a regular radio group."]}),"\n",(0,a.jsxs)(n.p,{children:["In case you do not have text in labels (for example, when you want to use ",(0,a.jsx)(n.code,{children:"SegmentedControl"})," with icons only),\nuse ",(0,a.jsx)(n.a,{href:"/core/visually-hidden",children:"VisuallyHidden"})," to make component accessible:"]}),"\n",(0,a.jsx)(t,{data:k})]})}function M(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(w,{...e,children:(0,a.jsx)(S,{...e})})}function V(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},87186:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});var a=(0,t(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});var a=(0,t(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});var a=(0,t(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});var a=(0,t(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});var a=(0,t(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},4925:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});var a=(0,t(73366).A)("outline","eye","IconEye",[["path",{d:"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6",key:"svg-1"}]])},11749:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});var a=(0,t(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});var a=(0,t(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});var a=(0,t(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});var a=(0,t(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])}},e=>{var n=n=>e(e.s=n);e.O(0,[18675,90636,46593,38792],()=>n(41701)),_N_E=e.O()}]);