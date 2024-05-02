(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[30106],{23664:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(99882).Z)("code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},59905:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(99882).Z)("eye","IconEye",[["path",{d:"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6",key:"svg-1"}]])},34251:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/segmented-control",function(){return t(90779)}])},90779:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return P}});var r=t(52322),a=t(45392),o=t(84385);let l=`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue']} />;
}
`,i={type:"configurator",component:function(e){return(0,r.jsx)(o.s,{data:["React","Angular","Vue"],...e})},code:l,controls:[{prop:"orientation",type:"segmented",initialValue:"horizontal",libraryValue:"horizontal",data:[{label:"horizontal",value:"horizontal"},{label:"vertical",value:"vertical"}]},{prop:"fullWidth",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withItemsBorders",type:"boolean",initialValue:!0,libraryValue:!0},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"}]};var s=t(65438),Text=t(8582);let d=`
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
`,c={type:"code",component:function(){return(0,r.jsxs)(s.K,{align:"center",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(Text.x,{size:"sm",fw:500,mb:3,children:"Disabled control"}),(0,r.jsx)(o.s,{disabled:!0,data:[{value:"preview",label:"Preview"},{value:"code",label:"Code"},{value:"export",label:"Export"}]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(Text.x,{size:"sm",fw:500,mb:3,children:"Disabled option"}),(0,r.jsx)(o.s,{data:[{value:"preview",label:"Preview",disabled:!0},{value:"code",label:"Code"},{value:"export",label:"Export"}]})]})]})},code:d,defaultExpanded:!1};var u=t(59905),h=t(23664),p=t(26389),m=t(16438),x=t(58898);let g=`
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
`,j={type:"code",component:function(){return(0,r.jsx)(o.s,{data:[{value:"preview",label:(0,r.jsxs)(m.M,{style:{gap:10},children:[(0,r.jsx)(u.Z,{style:{width:(0,x.h)(16),height:(0,x.h)(16)}}),(0,r.jsx)("span",{children:"Preview"})]})},{value:"code",label:(0,r.jsxs)(m.M,{style:{gap:10},children:[(0,r.jsx)(h.Z,{style:{width:(0,x.h)(16),height:(0,x.h)(16)}}),(0,r.jsx)("span",{children:"Code"})]})},{value:"export",label:(0,r.jsxs)(m.M,{style:{gap:10},children:[(0,r.jsx)(p.Z,{style:{width:(0,x.h)(16),height:(0,x.h)(16)}}),(0,r.jsx)("span",{children:"Export"})]})}]})},centered:!0,code:g},v=`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue', 'Svelte']} />;
}
`,b={type:"configurator",component:function(e){return(0,r.jsx)(o.s,{data:["React","Angular","Vue","Svelte"],...e})},code:v,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:null}]},f=`
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
`,y={type:"code",code:f,centered:!0,component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Text.x,{size:"sm",fw:500,mt:3,children:"No transitions"}),(0,r.jsx)(o.s,{data:["React","Angular","Vue","Svelte"],transitionDuration:0}),(0,r.jsx)(Text.x,{size:"sm",fw:500,mt:"md",children:"500ms linear transition"}),(0,r.jsx)(o.s,{data:["React","Angular","Vue","Svelte"],transitionDuration:500,transitionTimingFunction:"linear"})]})}},C=`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl readOnly defaultValue="Angular" data={['React', 'Angular', 'Vue']} />;
}
`,w={type:"code",component:function(){return(0,r.jsx)(o.s,{readOnly:!0,defaultValue:"Angular",data:["React","Angular","Vue"]})},centered:!0,code:C};var S=t(31641);let V=`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue']} />;
}
`,k={type:"styles-api",data:S.o,component:function(e){return(0,r.jsx)(o.s,{data:["React","Angular","Vue"],...e})},code:V,centered:!0};var A=t(1767);let E=`
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
`,D={type:"code",component:function(){let e={style:{width:(0,x.h)(20),height:(0,x.h)(20),display:"block"},stroke:1.5};return(0,r.jsx)(o.s,{data:[{value:"preview",label:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.Z,{...e}),(0,r.jsx)(A.T,{children:"Preview"})]})},{value:"code",label:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h.Z,{...e}),(0,r.jsx)(A.T,{children:"Code"})]})},{value:"export",label:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p.Z,{...e}),(0,r.jsx)(A.T,{children:"Export"})]})}]})},centered:!0,code:E};var T=t(79016),R=t(33638);let I=(0,T.A)(R.us.SegmentedControl);function z(e){let n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components},{Demo:t,StylesApiSelectors:o}=n;return t||_("Demo",!0),o||_("StylesApiSelectors",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t,{data:i}),"\n",(0,r.jsx)(n.h2,{id:"controlled",children:"Controlled"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { SegmentedControl } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('react');\n\n  return (\n    <SegmentedControl\n      value={value}\n      onChange={setValue}\n      data={[\n        { label: 'React', value: 'react' },\n        { label: 'Angular', value: 'ng' },\n        { label: 'Vue', value: 'vue' },\n        { label: 'Svelte', value: 'svelte' },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"data-prop",children:"Data prop"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"SegmentedControl"})," support two different data formats:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["An array of strings – used when ",(0,r.jsx)(n.code,{children:"value"})," and ",(0,r.jsx)(n.code,{children:"label"})," are the same"]}),"\n",(0,r.jsxs)(n.li,{children:["An array of objects – used when ",(0,r.jsx)(n.code,{children:"value"})," and ",(0,r.jsx)(n.code,{children:"label"})," are different"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { SegmentedControl } from '@mantine/core';\n\nfunction ArrayOfStrings() {\n  return (\n    <SegmentedControl data={['React', 'Angular', 'Svelte', 'Vue']} />\n  );\n}\n\nfunction ArrayOfObjects() {\n  return (\n    <SegmentedControl\n      data={[\n        { value: 'React', label: 'React' },\n        { value: 'Angular', label: 'Angular' },\n        { value: 'Svelte', label: 'Svelte' },\n        { value: 'Vue', label: 'Vue' },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"disabled",children:"Disabled"}),"\n",(0,r.jsxs)(n.p,{children:["To disable ",(0,r.jsx)(n.code,{children:"SegmentedControl"})," item, use array of objects ",(0,r.jsx)(n.code,{children:"data"})," format and set ",(0,r.jsx)(n.code,{children:"disabled: true"}),"\non the item that you want to disable. To disable the entire component, use ",(0,r.jsx)(n.code,{children:"disabled"})," prop."]}),"\n",(0,r.jsx)(t,{data:c}),"\n",(0,r.jsx)(n.h2,{id:"react-node-as-label",children:"React node as label"}),"\n",(0,r.jsx)(n.p,{children:"You can use any React node as label:"}),"\n",(0,r.jsx)(t,{data:j}),"\n",(0,r.jsx)(n.h2,{id:"color",children:"Color"}),"\n",(0,r.jsxs)(n.p,{children:["By default, ",(0,r.jsx)(n.code,{children:"SegmentedControl"})," uses ",(0,r.jsx)(n.code,{children:"theme.white"})," with shadow in light color scheme and ",(0,r.jsx)(n.code,{children:"var(--mantine-color-dark-6)"})," background color for indicator.\nSet ",(0,r.jsx)(n.code,{children:"color"})," prop to change indicator ",(0,r.jsx)(n.code,{children:"background-color"}),":"]}),"\n",(0,r.jsx)(t,{data:b}),"\n",(0,r.jsx)(n.h2,{id:"transitions",children:"Transitions"}),"\n",(0,r.jsx)(n.p,{children:"Change transition properties with:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"transitionDuration"})," – all transitions duration in ms, ",(0,r.jsx)(n.code,{children:"200"})," by default"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"transitionTimingFunction"})," – all transitions timing function, ",(0,r.jsx)(n.code,{children:"ease"})," by default"]}),"\n"]}),"\n",(0,r.jsx)(t,{data:y}),"\n",(0,r.jsx)(n.h2,{id:"readonly",children:"readOnly"}),"\n",(0,r.jsxs)(n.p,{children:["Set ",(0,r.jsx)(n.code,{children:"readOnly"})," prop to prevent value from being changed:"]}),"\n",(0,r.jsx)(t,{data:w}),"\n",(0,r.jsx)(o,{component:"SegmentedControl"}),"\n",(0,r.jsx)(t,{data:k}),"\n",(0,r.jsx)(n.h2,{id:"accessibility-and-usability",children:"Accessibility and usability"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"SegmentedControl"})," uses radio inputs under the hood, it is accessible by default with no extra steps required if you have text in labels.\nComponent support the same keyboard events as a regular radio group."]}),"\n",(0,r.jsxs)(n.p,{children:["In case you do not have text in labels (for example, when you want to use ",(0,r.jsx)(n.code,{children:"SegmentedControl"})," with icons only),\nuse ",(0,r.jsx)(n.a,{href:"/core/visually-hidden",children:"VisuallyHidden"})," to make component accessible:"]}),"\n",(0,r.jsx)(t,{data:D})]})}function P(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(I,{...e,children:(0,r.jsx)(z,{...e})})}function _(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},16438:function(e,n,t){"use strict";t.d(n,{M:function(){return c}});var r=t(52322);t(2784);var a=t(38483),o=t(46690),l=t(28559),i=t(33502),s={root:"m_4451eb3a"};let d={},c=(0,i.b)((e,n)=>{let t=(0,a.w)("Center",d,e),{classNames:i,className:c,style:u,styles:h,unstyled:p,vars:m,inline:x,mod:g,...j}=t,v=(0,o.y)({name:"Center",props:t,classes:s,className:c,style:u,classNames:i,styles:h,unstyled:p,vars:m});return(0,r.jsx)(l.x,{ref:n,mod:[{inline:x},g],...v("root"),...j})});c.classes=s,c.displayName="@mantine/core/Center"}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=34251)}),_N_E=e.O()}]);