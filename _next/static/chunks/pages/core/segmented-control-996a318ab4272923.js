(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106],{77573:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var l=(0,t(54764).Z)("code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},52076:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var l=(0,t(54764).Z)("eye","IconEye",[["path",{d:"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6",key:"svg-1"}]])},59646:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/segmented-control",function(){return t(17779)}])},17779:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return _}});var l=t(24246),r=t(71670),a=t(3916),o=t(30289),i=t(27378),c=t(46674);let d=`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue']} />;
}
`,s={type:"configurator",component:function(e){return i.createElement(c.s,{data:["React","Angular","Vue"],...e})},code:d,controls:[{prop:"orientation",type:"segmented",initialValue:"horizontal",libraryValue:"horizontal",data:[{label:"horizontal",value:"horizontal"},{label:"vertical",value:"vertical"}]},{prop:"fullWidth",type:"boolean",initialValue:!1,libraryValue:!1},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"}]};var u=t(27884),Text=t(26569);let m=`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return (
    <>
      {/* Disabled control */}
      <SegmentedControl disabled={true} />

      {/* Disabled option */}
      <SegmentedControl
        data={[
          { value: 'preview', label: 'Preview', disabled: true },
          { value: 'code', label: 'Code' },
          { value: 'export', label: 'Export' },
        ]}
      />
    </>
  );
}
`,p={type:"code",component:function(){return i.createElement(u.K,{align:"center"},i.createElement("div",null,i.createElement(Text.x,{size:"sm",fw:500,mb:3},"Disabled control"),i.createElement(c.s,{disabled:!0,data:[{value:"preview",label:"Preview"},{value:"code",label:"Code"},{value:"export",label:"Export"}]})),i.createElement("div",null,i.createElement(Text.x,{size:"sm",fw:500,mb:3},"Disabled option"),i.createElement(c.s,{data:[{value:"preview",label:"Preview",disabled:!0},{value:"code",label:"Code"},{value:"export",label:"Export"}]})))},code:m};var h=t(52076),g=t(77573),x=t(31550),b=t(62150),v=t(71078);let y=`
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
`,f={type:"code",component:function(){return i.createElement(c.s,{data:[{value:"preview",label:i.createElement(b.M,{style:{gap:10}},i.createElement(h.Z,{style:{width:(0,v.h)(16),height:(0,v.h)(16)}}),i.createElement("span",null,"Preview"))},{value:"code",label:i.createElement(b.M,{style:{gap:10}},i.createElement(g.Z,{style:{width:(0,v.h)(16),height:(0,v.h)(16)}}),i.createElement("span",null,"Code"))},{value:"export",label:i.createElement(b.M,{style:{gap:10}},i.createElement(x.Z,{style:{width:(0,v.h)(16),height:(0,v.h)(16)}}),i.createElement("span",null,"Export"))}]})},centered:!0,code:y},j=`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue', 'Svelte']} />;
}
`,E={type:"configurator",component:function(e){return i.createElement(c.s,{data:["React","Angular","Vue","Svelte"],...e})},code:j,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:null}]},C=`
import { SegmentedControl } from '@mantine/core';

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
`,w={type:"code",code:C,centered:!0,component:function(){return i.createElement(i.Fragment,null,i.createElement(Text.x,{size:"sm",fw:500,mt:3},"No transitions"),i.createElement(c.s,{data:["React","Angular","Vue","Svelte"],transitionDuration:0}),i.createElement(Text.x,{size:"sm",fw:500,mt:"md"},"500ms linear transition"),i.createElement(c.s,{data:["React","Angular","Vue","Svelte"],transitionDuration:500,transitionTimingFunction:"linear"}))}},S=`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl readOnly defaultValue="Angular" data={['React', 'Angular', 'Vue']} />;
}
`,V={type:"code",component:function(){return i.createElement(c.s,{readOnly:!0,defaultValue:"Angular",data:["React","Angular","Vue"]})},centered:!0,code:S};var A=t(67355);let k=`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue']} />;
}
`,D={type:"styles-api",data:A.o,component:function(e){return i.createElement(c.s,{data:["React","Angular","Vue"],...e})},code:k,centered:!0};var R=t(30020);let I=`
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
`,T={type:"code",component:function(){let e={style:{width:(0,v.h)(20),height:(0,v.h)(20),display:"block"},stroke:1.5};return i.createElement(c.s,{data:[{value:"preview",label:i.createElement(i.Fragment,null,i.createElement(h.Z,{...e}),i.createElement(R.T,null,"Preview"))},{value:"code",label:i.createElement(i.Fragment,null,i.createElement(g.Z,{...e}),i.createElement(R.T,null,"Code"))},{value:"export",label:i.createElement(i.Fragment,null,i.createElement(x.Z,{...e}),i.createElement(R.T,null,"Export"))}]})},centered:!0,code:I},z=(0,a.A)(o.us.SegmentedControl);function P(e){let n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Demo:t,StylesApiSelectors:a}=n;return t||N("Demo",!0),a||N("StylesApiSelectors",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(t,{data:s}),"\n",(0,l.jsx)(n.h2,{id:"controlled",children:"Controlled"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { SegmentedControl } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('react');\n\n  return (\n    <SegmentedControl\n      value={value}\n      onChange={setValue}\n      data={[\n        { label: 'React', value: 'react' },\n        { label: 'Angular', value: 'ng' },\n        { label: 'Vue', value: 'vue' },\n        { label: 'Svelte', value: 'svelte' },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"data-prop",children:"Data prop"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"SegmentedControl"})," support two different data formats:"]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["An array of strings – used when ",(0,l.jsx)(n.code,{children:"value"})," and ",(0,l.jsx)(n.code,{children:"label"})," are the same"]}),"\n",(0,l.jsxs)(n.li,{children:["An array of objects – used when ",(0,l.jsx)(n.code,{children:"value"})," and ",(0,l.jsx)(n.code,{children:"label"})," are different"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:"import { SegmentedControl } from '@mantine/core';\n\nfunction ArrayOfStrings() {\n  return (\n    <SegmentedControl data={['React', 'Angular', 'Svelte', 'Vue']} />\n  );\n}\n\nfunction ArrayOfObjects() {\n  return (\n    <SegmentedControl\n      data={[\n        { value: 'React', label: 'React' },\n        { value: 'Angular', label: 'Angular' },\n        { value: 'Svelte', label: 'Svelte' },\n        { value: 'Vue', label: 'Vue' },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"disabled",children:"Disabled"}),"\n",(0,l.jsxs)(n.p,{children:["To disable ",(0,l.jsx)(n.code,{children:"SegmentedControl"})," item, use array of objects ",(0,l.jsx)(n.code,{children:"data"})," format and set ",(0,l.jsx)(n.code,{children:"disabled: true"}),"\non the item that you want to disable. To disable the entire component, use ",(0,l.jsx)(n.code,{children:"disabled"})," prop."]}),"\n",(0,l.jsx)(t,{data:p}),"\n",(0,l.jsx)(n.h2,{id:"react-node-as-label",children:"React node as label"}),"\n",(0,l.jsx)(n.p,{children:"You can use any React node as label:"}),"\n",(0,l.jsx)(t,{data:f}),"\n",(0,l.jsx)(n.h2,{id:"color",children:"Color"}),"\n",(0,l.jsxs)(n.p,{children:["By default, ",(0,l.jsx)(n.code,{children:"SegmentedControl"})," uses ",(0,l.jsx)(n.code,{children:"theme.white"})," with shadow in light color scheme and ",(0,l.jsx)(n.code,{children:"var(--mantine-color-dark-6)"})," background color for indicator.\nSet ",(0,l.jsx)(n.code,{children:"color"})," prop to change indicator ",(0,l.jsx)(n.code,{children:"background-color"}),":"]}),"\n",(0,l.jsx)(t,{data:E}),"\n",(0,l.jsx)(n.h2,{id:"transitions",children:"Transitions"}),"\n",(0,l.jsx)(n.p,{children:"Change transition properties with:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"transitionDuration"})," – all transitions duration in ms, ",(0,l.jsx)(n.code,{children:"200"})," by default"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"transitionTimingFunction"})," – all transitions timing function, ",(0,l.jsx)(n.code,{children:"ease"})," by default"]}),"\n"]}),"\n",(0,l.jsx)(t,{data:w}),"\n",(0,l.jsx)(n.h2,{id:"readonly",children:"readOnly"}),"\n",(0,l.jsxs)(n.p,{children:["Set ",(0,l.jsx)(n.code,{children:"readOnly"})," prop to prevent value from being changed:"]}),"\n",(0,l.jsx)(t,{data:V}),"\n",(0,l.jsx)(a,{component:"SegmentedControl"}),"\n",(0,l.jsx)(t,{data:D}),"\n",(0,l.jsx)(n.h2,{id:"accessibility-and-usability",children:"Accessibility and usability"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"SegmentedControl"})," uses radio inputs under the hood, it is accessible by default with no extra steps required if you have text in labels.\nComponent support the same keyboard events as a regular radio group."]}),"\n",(0,l.jsxs)(n.p,{children:["In case you do not have text in labels (for example, when you want to use ",(0,l.jsx)(n.code,{children:"SegmentedControl"})," with icons only),\nuse ",(0,l.jsx)(n.a,{href:"/core/visually-hidden",children:"VisuallyHidden"})," to make component accessible:"]}),"\n",(0,l.jsx)(t,{data:T})]})}function _(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.jsx)(z,{...e,children:(0,l.jsx)(P,{...e})})}function N(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},62150:function(e,n,t){"use strict";t.d(n,{M:function(){return s}});var l=t(27378),r=t(96739),a=t(6231),o=t(56589),i=t(50332),c={root:"m-4451eb3a"};let d={},s=(0,i.b)((e,n)=>{let t=(0,r.w)("Center",d,e),{classNames:i,className:s,style:u,styles:m,unstyled:p,vars:h,inline:g,...x}=t,b=(0,a.y)({name:"Center",props:t,classes:c,className:s,style:u,classNames:i,styles:m,unstyled:p,vars:h});return l.createElement(o.x,{ref:n,mod:{inline:g},...b("root"),...x})});s.classes=c,s.displayName="@mantine/core/Center"}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=59646)}),_N_E=e.O()}]);