(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[30106],{34251:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/segmented-control",function(){return t(90779)}])},90779:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return E}});var r=t(52322),l=t(45392),o=t(84385);let a={type:"configurator",component:function(e){return(0,r.jsx)(o.s,{data:["React","Angular","Vue"],...e})},code:`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue']} />;
}
`,controls:[{prop:"orientation",type:"segmented",initialValue:"horizontal",libraryValue:"horizontal",data:[{label:"horizontal",value:"horizontal"},{label:"vertical",value:"vertical"}]},{prop:"fullWidth",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withItemsBorders",type:"boolean",initialValue:!0,libraryValue:!0},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"}]};var i=t(65438),d=t(8582);let s={type:"code",component:function(){return(0,r.jsxs)(i.K,{align:"center",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(d.x,{size:"sm",fw:500,mb:3,children:"Disabled control"}),(0,r.jsx)(o.s,{disabled:!0,data:[{value:"preview",label:"Preview"},{value:"code",label:"Code"},{value:"export",label:"Export"}]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(d.x,{size:"sm",fw:500,mb:3,children:"Disabled option"}),(0,r.jsx)(o.s,{data:[{value:"preview",label:"Preview",disabled:!0},{value:"code",label:"Code"},{value:"export",label:"Export"}]})]})]})},code:`
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
`,defaultExpanded:!1};var c=t(12150),u=t(12312),h=t(79797),p=t(16438),m=t(58898);let x={type:"code",component:function(){return(0,r.jsx)(o.s,{data:[{value:"preview",label:(0,r.jsxs)(p.M,{style:{gap:10},children:[(0,r.jsx)(c.Z,{style:{width:(0,m.h)(16),height:(0,m.h)(16)}}),(0,r.jsx)("span",{children:"Preview"})]})},{value:"code",label:(0,r.jsxs)(p.M,{style:{gap:10},children:[(0,r.jsx)(u.Z,{style:{width:(0,m.h)(16),height:(0,m.h)(16)}}),(0,r.jsx)("span",{children:"Code"})]})},{value:"export",label:(0,r.jsxs)(p.M,{style:{gap:10},children:[(0,r.jsx)(h.Z,{style:{width:(0,m.h)(16),height:(0,m.h)(16)}}),(0,r.jsx)("span",{children:"Export"})]})}]})},centered:!0,code:`
import { Center, SegmentedControl, rem } from '@mantine/core';
import { IconEye, IconCode, IconExternalLink } from '@tabler/icons-react';

function Demo() {
  return (
    <SegmentedControl
      data={[
        {
          value: 'preview',
          label: (
            <Center style={{ gap: 10 }}>
              <IconEye style={{ width: rem(16), height: rem(16) }} />
              <span>Preview</span>
            </Center>
          ),
        },
        {
          value: 'code',
          label: (
            <Center style={{ gap: 10 }}>
              <IconCode style={{ width: rem(16), height: rem(16) }} />
              <span>Code</span>
            </Center>
          ),
        },
        {
          value: 'export',
          label: (
            <Center style={{ gap: 10 }}>
              <IconExternalLink style={{ width: rem(16), height: rem(16) }} />
              <span>Export</span>
            </Center>
          ),
        },
      ]}
    />
  );
}
`},g={type:"configurator",component:function(e){return(0,r.jsx)(o.s,{data:["React","Angular","Vue","Svelte"],...e})},code:`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue', 'Svelte']} />;
}
`,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:null}]},j={type:"code",code:`
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
`,centered:!0,component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.x,{size:"sm",fw:500,mt:3,children:"No transitions"}),(0,r.jsx)(o.s,{data:["React","Angular","Vue","Svelte"],transitionDuration:0}),(0,r.jsx)(d.x,{size:"sm",fw:500,mt:"md",children:"500ms linear transition"}),(0,r.jsx)(o.s,{data:["React","Angular","Vue","Svelte"],transitionDuration:500,transitionTimingFunction:"linear"})]})}},v={type:"code",component:function(){return(0,r.jsx)(o.s,{readOnly:!0,defaultValue:"Angular",data:["React","Angular","Vue"]})},centered:!0,code:`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl readOnly defaultValue="Angular" data={['React', 'Angular', 'Vue']} />;
}
`};var b=t(31641);let f=`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue']} />;
}
`,y={type:"styles-api",data:b.o,component:function(e){return(0,r.jsx)(o.s,{data:["React","Angular","Vue"],...e})},code:f,centered:!0};var C=t(1767);let w={type:"code",component:function(){let e={style:{width:(0,m.h)(20),height:(0,m.h)(20),display:"block"},stroke:1.5};return(0,r.jsx)(o.s,{data:[{value:"preview",label:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Z,{...e}),(0,r.jsx)(C.T,{children:"Preview"})]})},{value:"code",label:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.Z,{...e}),(0,r.jsx)(C.T,{children:"Code"})]})},{value:"export",label:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h.Z,{...e}),(0,r.jsx)(C.T,{children:"Export"})]})}]})},centered:!0,code:`
import { SegmentedControl, VisuallyHidden, rem } from '@mantine/core';
import { IconEye, IconCode, IconExternalLink } from '@tabler/icons-react';

function Demo() {
  const iconProps = {
    style: { width: rem(20), height: rem(20), display: 'block' },
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
`};var S=t(25071),V=t(15019);let k=(0,S.A)(V.us.SegmentedControl);function A(e){let n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components},{Demo:t,StylesApiSelectors:o}=n;return t||D("Demo",!0),o||D("StylesApiSelectors",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t,{data:a}),"\n",(0,r.jsx)(n.h2,{id:"controlled",children:"Controlled"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { SegmentedControl } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('react');\n\n  return (\n    <SegmentedControl\n      value={value}\n      onChange={setValue}\n      data={[\n        { label: 'React', value: 'react' },\n        { label: 'Angular', value: 'ng' },\n        { label: 'Vue', value: 'vue' },\n        { label: 'Svelte', value: 'svelte' },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"data-prop",children:"Data prop"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"SegmentedControl"})," support two different data formats:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["An array of strings – used when ",(0,r.jsx)(n.code,{children:"value"})," and ",(0,r.jsx)(n.code,{children:"label"})," are the same"]}),"\n",(0,r.jsxs)(n.li,{children:["An array of objects – used when ",(0,r.jsx)(n.code,{children:"value"})," and ",(0,r.jsx)(n.code,{children:"label"})," are different"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { SegmentedControl } from '@mantine/core';\n\nfunction ArrayOfStrings() {\n  return (\n    <SegmentedControl data={['React', 'Angular', 'Svelte', 'Vue']} />\n  );\n}\n\nfunction ArrayOfObjects() {\n  return (\n    <SegmentedControl\n      data={[\n        { value: 'React', label: 'React' },\n        { value: 'Angular', label: 'Angular' },\n        { value: 'Svelte', label: 'Svelte' },\n        { value: 'Vue', label: 'Vue' },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"disabled",children:"Disabled"}),"\n",(0,r.jsxs)(n.p,{children:["To disable ",(0,r.jsx)(n.code,{children:"SegmentedControl"})," item, use array of objects ",(0,r.jsx)(n.code,{children:"data"})," format and set ",(0,r.jsx)(n.code,{children:"disabled: true"}),"\non the item that you want to disable. To disable the entire component, use ",(0,r.jsx)(n.code,{children:"disabled"})," prop."]}),"\n",(0,r.jsx)(t,{data:s}),"\n",(0,r.jsx)(n.h2,{id:"react-node-as-label",children:"React node as label"}),"\n",(0,r.jsx)(n.p,{children:"You can use any React node as label:"}),"\n",(0,r.jsx)(t,{data:x}),"\n",(0,r.jsx)(n.h2,{id:"color",children:"Color"}),"\n",(0,r.jsxs)(n.p,{children:["By default, ",(0,r.jsx)(n.code,{children:"SegmentedControl"})," uses ",(0,r.jsx)(n.code,{children:"theme.white"})," with shadow in light color scheme and ",(0,r.jsx)(n.code,{children:"var(--mantine-color-dark-6)"})," background color for indicator.\nSet ",(0,r.jsx)(n.code,{children:"color"})," prop to change indicator ",(0,r.jsx)(n.code,{children:"background-color"}),":"]}),"\n",(0,r.jsx)(t,{data:g}),"\n",(0,r.jsx)(n.h2,{id:"transitions",children:"Transitions"}),"\n",(0,r.jsx)(n.p,{children:"Change transition properties with:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"transitionDuration"})," – all transitions duration in ms, ",(0,r.jsx)(n.code,{children:"200"})," by default"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"transitionTimingFunction"})," – all transitions timing function, ",(0,r.jsx)(n.code,{children:"ease"})," by default"]}),"\n"]}),"\n",(0,r.jsx)(t,{data:j}),"\n",(0,r.jsx)(n.h2,{id:"readonly",children:"readOnly"}),"\n",(0,r.jsxs)(n.p,{children:["Set ",(0,r.jsx)(n.code,{children:"readOnly"})," prop to prevent value from being changed:"]}),"\n",(0,r.jsx)(t,{data:v}),"\n",(0,r.jsx)(o,{component:"SegmentedControl"}),"\n",(0,r.jsx)(t,{data:y}),"\n",(0,r.jsx)(n.h2,{id:"accessibility-and-usability",children:"Accessibility and usability"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"SegmentedControl"})," uses radio inputs under the hood, it is accessible by default with no extra steps required if you have text in labels.\nComponent support the same keyboard events as a regular radio group."]}),"\n",(0,r.jsxs)(n.p,{children:["In case you do not have text in labels (for example, when you want to use ",(0,r.jsx)(n.code,{children:"SegmentedControl"})," with icons only),\nuse ",(0,r.jsx)(n.a,{href:"/core/visually-hidden",children:"VisuallyHidden"})," to make component accessible:"]}),"\n",(0,r.jsx)(t,{data:w})]})}function E(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(k,{...e,children:(0,r.jsx)(A,{...e})})}function D(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},12312:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(73681).Z)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},12150:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(73681).Z)("outline","eye","IconEye",[["path",{d:"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6",key:"svg-1"}]])}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=34251)}),_N_E=e.O()}]);