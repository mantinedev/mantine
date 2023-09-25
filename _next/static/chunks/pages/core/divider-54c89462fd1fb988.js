(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1583],{33507:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});var n=(0,i(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});var n=(0,i(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});var n=(0,i(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});var n=(0,i(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});var n=(0,i(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});var n=(0,i(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});var n=(0,i(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},51198:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/divider",function(){return i(34173)}])},34173:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return z}});var n=i(85893),r=i(11151),a=i(19905),l=i(9904),o=i(67294),s=i(22414);let c=`
import { Divider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Divider my="sm" />
      <Divider my="sm" variant="dashed" />
      <Divider my="sm" variant="dotted" />
    </>
  );
}
`,d={type:"code",code:c,component:function(){return o.createElement(o.Fragment,null,o.createElement(s.i,{my:"sm"}),o.createElement(s.i,{my:"sm",variant:"dashed"}),o.createElement(s.i,{my:"sm",variant:"dotted"}))}};var m=i(27854),v=i(81110),h=i(67585);let u=`
import { Divider, Box, Anchor } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <Divider my="xs" label="Label on the left" labelPosition="left" />
      <Divider my="xs" label="Label in the center" labelPosition="center" />
      <Divider my="xs" label="Label on the right" labelPosition="right" />
      <Divider
        my="xs"
        variant="dashed"
        labelPosition="center"
        label={
          <>
            <IconSearch size={12} />
            <Box ml={5}>Search results</Box>
          </>
        }
      />
      <Divider
        my="xs"
        label={
          <Anchor href="https://mantine.dev" target="_blank" inherit>
            Link label
          </Anchor>
        }
      />
    </>
  );
}
`,p={type:"code",code:u,component:function(){return o.createElement(o.Fragment,null,o.createElement(s.i,{my:"xs",label:"Label on the left",labelPosition:"left"}),o.createElement(s.i,{my:"xs",label:"Label in the center",labelPosition:"center"}),o.createElement(s.i,{my:"xs",label:"Label on the right",labelPosition:"right"}),o.createElement(s.i,{my:"xs",variant:"dashed",labelPosition:"center",label:o.createElement(o.Fragment,null,o.createElement(m.Z,{size:12}),o.createElement(v.x,{ml:5},"Search results"))}),o.createElement(s.i,{my:"xs",label:o.createElement(h.e,{href:"https://mantine.dev",target:"_blank",inherit:!0},"Link label")}))}},y=`
import { Divider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Divider size="xs" />
      <Divider size="sm" />
      <Divider size="md" />
      <Divider size="lg" />
      <Divider size="xl" />
      <Divider size={10} />
    </>
  );
}
`,b={type:"code",code:y,component:function(){return o.createElement(o.Fragment,null,o.createElement(s.i,{my:"xs",size:"xs"}),o.createElement(s.i,{my:"xs",size:"sm"}),o.createElement(s.i,{my:"xs",size:"md"}),o.createElement(s.i,{my:"xs",size:"lg"}),o.createElement(s.i,{my:"xs",size:"xl"}),o.createElement(s.i,{my:"xs",size:10}))}};var f=i(16262),x=i(72039);let g=`
import { Divider, Group, Text } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Text>Label</Text>
      <Divider orientation="vertical" />
      <Text>Label</Text>
      <Divider size="sm" orientation="vertical" />
      <Text>Label</Text>
      <Divider size="md" orientation="vertical" />
      <Text>Label</Text>
      <Divider size="lg" orientation="vertical" />
      <Text>Label</Text>
      <Divider size="xl" orientation="vertical" />
      <Text>Label</Text>
    </Group>
  );
}
`,E={type:"code",code:g,component:function(){return o.createElement(f.Z,null,o.createElement(x.x,null,"Label"),o.createElement(s.i,{orientation:"vertical"}),o.createElement(x.x,null,"Label"),o.createElement(s.i,{size:"sm",orientation:"vertical"}),o.createElement(x.x,null,"Label"),o.createElement(s.i,{size:"md",orientation:"vertical"}),o.createElement(x.x,null,"Label"),o.createElement(s.i,{size:"lg",orientation:"vertical"}),o.createElement(x.x,null,"Label"),o.createElement(s.i,{size:"xl",orientation:"vertical"}),o.createElement(x.x,null,"Label"))}},k=(0,a.A)(l.us.Divider);function D(e){let t=Object.assign({h2:"h2"},(0,r.ah)(),e.components),{Demo:i}=t;return i||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(i,{data:d}),"\n",(0,n.jsx)(t.h2,{id:"with-label",children:"With label"}),"\n",(0,n.jsx)(i,{data:p}),"\n",(0,n.jsx)(t.h2,{id:"sizes",children:"Sizes"}),"\n",(0,n.jsx)(i,{data:b}),"\n",(0,n.jsx)(t.h2,{id:"vertical-orientation",children:"Vertical orientation"}),"\n",(0,n.jsx)(i,{data:E})]})}var z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(k,Object.assign({},e,{children:(0,n.jsx)(D,e)}))}},22414:function(e,t,i){"use strict";i.d(t,{i:function(){return z}});var n=i(67294),r={root:"m-3eebeb36",label:"m-9e365f20"},a=i(3154),l=i(30370),o=i(86109),s=i(81110),c=i(8586),d=i(40184),m=i(48468),v=Object.defineProperty,h=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,f=(e,t,i)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,x=(e,t)=>{for(var i in t||(t={}))y.call(t,i)&&f(e,i,t[i]);if(p)for(var i of p(t))b.call(t,i)&&f(e,i,t[i]);return e},g=(e,t)=>h(e,u(t)),E=(e,t)=>{var i={};for(var n in e)y.call(e,n)&&0>t.indexOf(n)&&(i[n]=e[n]);if(null!=e&&p)for(var n of p(e))0>t.indexOf(n)&&b.call(e,n)&&(i[n]=e[n]);return i};let k={orientation:"horizontal"},D=(0,c.Z)((e,{color:t,variant:i,size:n})=>({root:{"--divider-color":t?(0,d.p)(t,e):void 0,"--divider-border-style":i,"--divider-size":(0,m.ap)(n,"divider-size")}})),z=(0,a.d)((e,t)=>{let i=(0,l.w)("Divider",k,e),{classNames:a,className:c,style:d,styles:m,unstyled:v,vars:h,color:u,orientation:p,label:y,labelPosition:b}=i,f=E(i,["classNames","className","style","styles","unstyled","vars","color","orientation","label","labelPosition"]),z=(0,o.y)({name:"Divider",classes:r,props:i,className:c,style:d,classNames:a,styles:m,unstyled:v,vars:h,varsResolver:D});return n.createElement(s.x,g(x(x({ref:t,mod:{orientation:p,"with-label":!!y}},z("root")),f),{role:"separator"}),y&&n.createElement(s.x,x({component:"span",mod:{position:b}},z("label")),y))});z.classes=r,z.displayName="@mantine/core/Divider"}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=51198)}),_N_E=e.O()}]);