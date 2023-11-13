(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106],{33507:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},95670:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/segmented-control",function(){return n(82309)}])},82309:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ei}});var r=n(85893),a=n(11151),l=n(19905),o=n(9904),i=n(67294),c=n(11528),s=Object.defineProperty,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(d)for(var n of d(t))m.call(t,n)&&p(e,n,t[n]);return e};let v=`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue']} />;
}
`,y={type:"configurator",component:function(e){return i.createElement(c.s,h({data:["React","Angular","Vue"]},e))},code:v,controls:[{prop:"orientation",type:"segmented",initialValue:"horizontal",libraryValue:"horizontal",data:[{label:"horizontal",value:"horizontal"},{label:"vertical",value:"vertical"}]},{prop:"fullWidth",type:"boolean",initialValue:!1,libraryValue:!1},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"}]};var g=n(75253),f=n(72039);let b=`
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
`,x={type:"code",component:function(){return i.createElement(g.K,{align:"center"},i.createElement("div",null,i.createElement(f.x,{size:"sm",fw:500,mb:3},"Disabled control"),i.createElement(c.s,{disabled:!0,data:[{value:"preview",label:"Preview"},{value:"code",label:"Code"},{value:"export",label:"Export"}]})),i.createElement("div",null,i.createElement(f.x,{size:"sm",fw:500,mb:3},"Disabled option"),i.createElement(c.s,{data:[{value:"preview",label:"Preview",disabled:!0},{value:"code",label:"Code"},{value:"export",label:"Export"}]})))},code:b};var j=n(52076),w=n(77573),E=n(31550),C=n(39394),k=n(72622),S=n(81110);let O=`
import { Center, SegmentedControl, Box, rem } from '@mantine/core';
import { IconEye, IconCode, IconExternalLink } from '@tabler/icons-react';

function Demo() {
  return (
    <SegmentedControl
      data={[
        {
          value: 'preview',
          label: (
            <Center>
              <IconEye style={{ width: rem(16), height: rem(16) }} />
              <Box ml={10}>Preview</Box>
            </Center>
          ),
        },
        {
          value: 'code',
          label: (
            <Center>
              <IconCode style={{ width: rem(16), height: rem(16) }} />
              <Box ml={10}>Code</Box>
            </Center>
          ),
        },
        {
          value: 'export',
          label: (
            <Center>
              <IconExternalLink style={{ width: rem(16), height: rem(16) }} />
              <Box ml={10}>Export</Box>
            </Center>
          ),
        },
      ]}
    />
  );
}
`,M={type:"code",component:function(){return i.createElement(c.s,{data:[{value:"preview",label:i.createElement(C.M,null,i.createElement(j.Z,{style:{width:(0,k.h)(16),height:(0,k.h)(16)}}),i.createElement(S.x,{ml:10},"Preview"))},{value:"code",label:i.createElement(C.M,null,i.createElement(w.Z,{style:{width:(0,k.h)(16),height:(0,k.h)(16)}}),i.createElement(S.x,{ml:10},"Code"))},{value:"export",label:i.createElement(C.M,null,i.createElement(E.Z,{style:{width:(0,k.h)(16),height:(0,k.h)(16)}}),i.createElement(S.x,{ml:10},"Export"))}]})},centered:!0,code:O};var V=Object.defineProperty,P=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,Z=(e,t,n)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,D=(e,t)=>{for(var n in t||(t={}))I.call(t,n)&&Z(e,n,t[n]);if(P)for(var n of P(t))A.call(t,n)&&Z(e,n,t[n]);return e};let R=`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue', 'Svelte']} />;
}
`,T={type:"configurator",component:function(e){return i.createElement(c.s,D({data:["React","Angular","Vue","Svelte"]},e))},code:R,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:null}]},z=`
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
`,N={type:"code",code:z,centered:!0,component:function(){return i.createElement(i.Fragment,null,i.createElement(f.x,{size:"sm",fw:500,mt:3},"No transitions"),i.createElement(c.s,{data:["React","Angular","Vue","Svelte"],transitionDuration:0}),i.createElement(f.x,{size:"sm",fw:500,mt:"md"},"500ms linear transition"),i.createElement(c.s,{data:["React","Angular","Vue","Svelte"],transitionDuration:500,transitionTimingFunction:"linear"}))}},_=`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl readOnly defaultValue="Angular" data={['React', 'Angular', 'Vue']} />;
}
`,B={type:"code",component:function(){return i.createElement(c.s,{readOnly:!0,defaultValue:"Angular",data:["React","Angular","Vue"]})},centered:!0,code:_};var F=n(99940),H=Object.defineProperty,L=Object.getOwnPropertySymbols,X=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,K=(e,t,n)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,U=(e,t)=>{for(var n in t||(t={}))X.call(t,n)&&K(e,n,t[n]);if(L)for(var n of L(t))q.call(t,n)&&K(e,n,t[n]);return e};let W=`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue']} />;
}
`,Y={type:"styles-api",data:F.o,component:function(e){return i.createElement(c.s,U({data:["React","Angular","Vue"]},e))},code:W,centered:!0};var G=n(23835),J=Object.defineProperty,Q=Object.getOwnPropertySymbols,$=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,et=(e,t,n)=>t in e?J(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,en=(e,t)=>{for(var n in t||(t={}))$.call(t,n)&&et(e,n,t[n]);if(Q)for(var n of Q(t))ee.call(t,n)&&et(e,n,t[n]);return e};let er=`
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
`,ea={type:"code",component:function(){let e={style:{width:(0,k.h)(20),height:(0,k.h)(20),display:"block"},stroke:1.5};return i.createElement(c.s,{data:[{value:"preview",label:i.createElement(i.Fragment,null,i.createElement(j.Z,en({},e)),i.createElement(G.T,null,"Preview"))},{value:"code",label:i.createElement(i.Fragment,null,i.createElement(w.Z,en({},e)),i.createElement(G.T,null,"Code"))},{value:"export",label:i.createElement(i.Fragment,null,i.createElement(E.Z,en({},e)),i.createElement(G.T,null,"Export"))}]})},centered:!0,code:er},el=(0,l.A)(o.us.SegmentedControl);function eo(e){let t=Object.assign({h2:"h2",pre:"pre",code:"code",p:"p",ol:"ol",li:"li",ul:"ul",a:"a"},(0,a.ah)(),e.components),{Demo:n,StylesApiSelectors:l}=t;return n||ec("Demo",!0),l||ec("StylesApiSelectors",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n,{data:y}),"\n",(0,r.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { SegmentedControl } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('react');\n\n  return (\n    <SegmentedControl\n      value={value}\n      onChange={setValue}\n      data={[\n        { label: 'React', value: 'react' },\n        { label: 'Angular', value: 'ng' },\n        { label: 'Vue', value: 'vue' },\n        { label: 'Svelte', value: 'svelte' },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"data-prop",children:"Data prop"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"SegmentedControl"})," support two different data formats:"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["An array of strings – used when ",(0,r.jsx)(t.code,{children:"value"})," and ",(0,r.jsx)(t.code,{children:"label"})," are the same"]}),"\n",(0,r.jsxs)(t.li,{children:["An array of objects – used when ",(0,r.jsx)(t.code,{children:"value"})," and ",(0,r.jsx)(t.code,{children:"label"})," are different"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { SegmentedControl } from '@mantine/core';\n\nfunction ArrayOfStrings() {\n  return <SegmentedControl data={['React', 'Angular', 'Svelte', 'Vue']} />;\n}\n\nfunction ArrayOfObjects() {\n  return (\n    <SegmentedControl\n      data={[\n        { value: 'React', label: 'React' },\n        { value: 'Angular', label: 'Angular' },\n        { value: 'Svelte', label: 'Svelte' },\n        { value: 'Vue', label: 'Vue' },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,r.jsxs)(t.p,{children:["To disable ",(0,r.jsx)(t.code,{children:"SegmentedControl"})," item, use array of objects ",(0,r.jsx)(t.code,{children:"data"})," format and set ",(0,r.jsx)(t.code,{children:"disabled: true"}),"\non the item that you want to disable. To disable the entire component, use ",(0,r.jsx)(t.code,{children:"disabled"})," prop."]}),"\n",(0,r.jsx)(n,{data:x}),"\n",(0,r.jsx)(t.h2,{id:"react-node-as-label",children:"React node as label"}),"\n",(0,r.jsx)(t.p,{children:"You can use any React node as label:"}),"\n",(0,r.jsx)(n,{data:M}),"\n",(0,r.jsx)(t.h2,{id:"color",children:"Color"}),"\n",(0,r.jsxs)(t.p,{children:["By default, ",(0,r.jsx)(t.code,{children:"SegmentedControl"})," uses ",(0,r.jsx)(t.code,{children:"theme.white"})," with shadow in light color scheme and ",(0,r.jsx)(t.code,{children:"var(--mantine-color-dark-6)"})," background color for indicator.\nSet ",(0,r.jsx)(t.code,{children:"color"})," prop to change indicator ",(0,r.jsx)(t.code,{children:"background-color"}),":"]}),"\n",(0,r.jsx)(n,{data:T}),"\n",(0,r.jsx)(t.h2,{id:"transitions",children:"Transitions"}),"\n",(0,r.jsx)(t.p,{children:"Change transition properties with:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"transitionDuration"})," – all transitions duration in ms, ",(0,r.jsx)(t.code,{children:"200"})," by default"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"transitionTimingFunction"})," – all transitions timing function, ",(0,r.jsx)(t.code,{children:"ease"})," by default"]}),"\n"]}),"\n",(0,r.jsx)(n,{data:N}),"\n",(0,r.jsx)(t.h2,{id:"readonly",children:"readOnly"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"readOnly"})," prop to prevent value from being changed:"]}),"\n",(0,r.jsx)(n,{data:B}),"\n",(0,r.jsx)(l,{component:"SegmentedControl"}),"\n",(0,r.jsx)(n,{data:Y}),"\n",(0,r.jsx)(t.h2,{id:"accessibility-and-usability",children:"Accessibility and usability"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"SegmentedControl"})," uses radio inputs under the hood, it is accessible by default with no extra steps required if you have text in labels.\nComponent support the same keyboard events as a regular radio group."]}),"\n",(0,r.jsxs)(t.p,{children:["In case you do not have text in labels (for example, when you want to use ",(0,r.jsx)(t.code,{children:"SegmentedControl"})," with icons only),\nuse ",(0,r.jsx)(t.a,{href:"/core/visually-hidden",children:"VisuallyHidden"})," to make component accessible:"]}),"\n",(0,r.jsx)(n,{data:ea})]})}var ei=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(el,Object.assign({},e,{children:(0,r.jsx)(eo,e)}))};function ec(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},77573:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(54764).Z)("code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},31550:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(54764).Z)("external-link","IconExternalLink",[["path",{d:"M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6",key:"svg-0"}],["path",{d:"M11 13l9 -9",key:"svg-1"}],["path",{d:"M15 4h5v5",key:"svg-2"}]])},52076:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(54764).Z)("eye","IconEye",[["path",{d:"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6",key:"svg-1"}]])},39394:function(e,t,n){"use strict";n.d(t,{M:function(){return g}});var r=n(67294),a={root:"m-4451eb3a"},l=n(70405),o=n(30370),i=n(86109),c=n(81110),s=Object.defineProperty,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(d)for(var n of d(t))m.call(t,n)&&p(e,n,t[n]);return e},v=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&d)for(var r of d(e))0>t.indexOf(r)&&m.call(e,r)&&(n[r]=e[r]);return n};let y={},g=(0,l.b)((e,t)=>{let n=(0,o.w)("Center",y,e),{classNames:l,className:s,style:d,styles:u,unstyled:m,vars:p,inline:g}=n,f=v(n,["classNames","className","style","styles","unstyled","vars","inline"]),b=(0,i.y)({name:"Center",props:n,classes:a,className:s,style:d,classNames:l,styles:u,unstyled:m,vars:p});return r.createElement(c.x,h(h({ref:t,mod:{inline:g}},b("root")),f))});g.classes=a,g.displayName="@mantine/core/Center"}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=95670)}),_N_E=e.O()}]);