(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7014],{33507:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},23038:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/text",function(){return n(55401)}])},55401:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return B}});var r=n(85893),i=n(11151),a=n(19905),o=n(9904),l=n(67294),s=n(72039);let c=`
import { Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="xs">Extra small text</Text>
      <Text size="sm">Small text</Text>
      <Text size="md">Default text</Text>
      <Text size="lg">Large text</Text>
      <Text size="xl">Extra large text</Text>
      <Text fw={500}>Semibold</Text>
      <Text fw={700}>Bold</Text>
      <Text fs="italic">Italic</Text>
      <Text td="underline">Underlined</Text>
      <Text td="line-through">Strikethrough</Text>
      <Text c="dimmed">Dimmed text</Text>
      <Text c="blue">Blue text</Text>
      <Text c="teal.4">Teal 4 text</Text>
      <Text tt="uppercase">Uppercase</Text>
      <Text tt="capitalize">capitalized text</Text>
      <Text ta="center">Aligned to center</Text>
      <Text ta="right">Aligned to right</Text>
    </>
  );
}
`,p={type:"code",code:c,component:function(){return l.createElement(l.Fragment,null,l.createElement(s.x,{size:"xs"},"Extra small text"),l.createElement(s.x,{size:"sm"},"Small text"),l.createElement(s.x,{size:"md"},"Default text"),l.createElement(s.x,{size:"lg"},"Large text"),l.createElement(s.x,{size:"xl"},"Extra large text"),l.createElement(s.x,{fw:500},"Semibold"),l.createElement(s.x,{fw:700},"Bold"),l.createElement(s.x,{fs:"italic"},"Italic"),l.createElement(s.x,{td:"underline"},"Underlined"),l.createElement(s.x,{td:"line-through"},"Strikethrough"),l.createElement(s.x,{c:"dimmed"},"Dimmed text"),l.createElement(s.x,{c:"blue"},"Blue text"),l.createElement(s.x,{c:"teal.4"},"Teal 4 text"),l.createElement(s.x,{tt:"uppercase"},"Uppercase"),l.createElement(s.x,{tt:"capitalize"},"capitalized text"),l.createElement(s.x,{ta:"center"},"Aligned to center"),l.createElement(s.x,{ta:"right"},"Aligned to right"))}};var u=n(69137);let d=e=>`
import { Text } from '@mantine/core';

function Demo() {
  return (
    <Text
      size="xl"
      fw={900}
      variant="gradient"
      gradient={{ from: '${e.gradientFrom}', to: '${e.gradientTo}', deg: ${e.gradientDegree} }}
    >
      Gradient Text
    </Text>
  );
}
`,m={type:"configurator",component:function(e){return l.createElement(s.x,{size:"xl",fw:900,variant:"gradient",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree}},"Gradient Text")},code:d,centered:!0,controls:u.P};var h=n(81110),x=Object.defineProperty,g=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,T=(e,t)=>{for(var n in t||(t={}))y.call(t,n)&&v(e,n,t[n]);if(g)for(var n of g(t))f.call(t,n)&&v(e,n,t[n]);return e};let b=`
import { Text } from '@mantine/core';

function Demo() {
  return (
    <Box w={300}>
      <Text{{props}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id
        necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam
        perspiciatis excepturi iste sint itaque sunt laborum. Nihil?
      </Text>
    </Box>
  );
}
`,w={type:"configurator",component:function(e){return l.createElement(h.x,{w:300},l.createElement(s.x,T({},e),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam perspiciatis excepturi iste sint itaque sunt laborum. Nihil?"))},code:b,centered:!0,controls:[{type:"segmented",prop:"truncate",data:["start","end"],initialValue:"end",libraryValue:null}]};var j=Object.defineProperty,E=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,M=(e,t,n)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,P=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&M(e,n,t[n]);if(E)for(var n of E(t))S.call(t,n)&&M(e,n,t[n]);return e};let O=`
import { Text } from '@mantine/core';

function Demo() {
  return (
    <Text{{props}}>
      {/* Text content */}
    </Text>
  );
}
`,_={type:"configurator",component:function(e){return l.createElement(h.x,{maw:400,mx:"auto"},l.createElement(s.x,P({},e),"From Bulbapedia: Bulbasaur is a small, quadrupedal Pok\xe9mon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth. The bulb also conceals two slender, tentacle-like vines and provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within."))},code:O,controls:[{prop:"size",type:"size",libraryValue:"md",initialValue:"md"},{prop:"lineClamp",type:"number",initialValue:4,libraryValue:null,min:1,max:10,step:1}]};var z=n(73956);let q=`
import { TypographyStylesProvider, Text } from '@mantine/core';

function Demo() {
  return (
    <Text lineClamp={3} component="div">
      <TypographyStylesProvider>
        <h3>Line clamp with TypographyStylesProvider</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla quam aut sed
          corporis voluptates praesentium inventore, sapiente ex tempore sit consequatur debitis
          non! Illo cum ipsa reiciendis quidem facere, deserunt eos totam impedit. Vel ab, ipsum
          veniam aperiam odit molestiae incidunt minus, sint eos iusto earum quaerat vitae
          perspiciatis.
        </p>
      </TypographyStylesProvider>
    </Text>
  );
}
`,D={type:"code",code:q,component:function(){return l.createElement(s.x,{lineClamp:3,component:"div"},l.createElement(z.l,null,l.createElement("h3",{style:{marginTop:0}},"Line clamp with TypographyStylesProvider"),l.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla quam aut sed corporis voluptates praesentium inventore, sapiente ex tempore sit consequatur debitis non! Illo cum ipsa reiciendis quidem facere, deserunt eos totam impedit. Vel ab, ipsum veniam aperiam odit molestiae incidunt minus, sint eos iusto earum quaerat vitae perspiciatis.")))}};var I=n(44907);let N=`
import { Text, Title } from '@mantine/core';

function Demo() {
  return <Title order={3}>Title in which you want to <Text span c="blue" inherit>highlight</Text> something</Title>;
}
`,V={type:"code",component:function(){return l.createElement(I.D,{order:3},"Title in which you want to"," ",l.createElement(s.x,{span:!0,c:"blue",inherit:!0},"highlight")," ","something")},code:N},Z=(0,a.A)(o.us.Text);function L(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,i.ah)(),e.components),{Demo:n,Gradient:a,Polymorphic:o}=t;return n||C("Demo",!0),a||C("Gradient",!0),o||C("Polymorphic",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n,{data:p}),"\n",(0,r.jsx)(a,{component:"Text"}),"\n",(0,r.jsx)(n,{data:m}),"\n",(0,r.jsx)(t.h2,{id:"truncate",children:"Truncate"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"truncate"})," prop to add ",(0,r.jsx)(t.code,{children:"text-overflow: ellipsis"})," styles:"]}),"\n",(0,r.jsx)(n,{data:w}),"\n",(0,r.jsx)(t.h2,{id:"line-clamp",children:"Line clamp"}),"\n",(0,r.jsxs)(t.p,{children:["Specify maximum number of lines with ",(0,r.jsx)(t.code,{children:"lineClamp"})," prop. This option uses ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp",children:"-webkit-line-clamp"}),"\nCSS property (",(0,r.jsx)(t.a,{href:"https://caniuse.com/css-line-clamp",children:"caniuse"}),"). Note that ",(0,r.jsx)(t.code,{children:"padding-bottom"})," cannot be set on text element:"]}),"\n",(0,r.jsx)(n,{data:_}),"\n",(0,r.jsxs)(t.p,{children:["Line clamp can also be used with any children (not only strings), for example with ",(0,r.jsx)(t.a,{href:"/core/typography-styles-provider/",children:"TypographyStylesProvider"}),":"]}),"\n",(0,r.jsx)(n,{data:D}),"\n",(0,r.jsx)(t.h2,{id:"inherit-styles",children:"Inherit styles"}),"\n",(0,r.jsxs)(t.p,{children:["Text always applies font-size, font-family and line-height styles,\nbut in some cases this is not a desired behavior. To force Text to inherit parent\nstyles set ",(0,r.jsx)(t.code,{children:"inherit"})," prop. For example, highlight part of ",(0,r.jsx)(t.a,{href:"/core/title/",children:"Title"}),":"]}),"\n",(0,r.jsx)(n,{data:V}),"\n",(0,r.jsx)(o,{defaultElement:"p",changeToElement:"a",component:"Text"}),"\n",(0,r.jsx)(t.h2,{id:"span-prop",children:"span prop"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"span"})," prop as a shorthand for ",(0,r.jsx)(t.code,{children:'component="span"'}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { Text } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <>\n      <Text span>Same as below</Text>\n      <Text component=\"span\">Same as above</Text>\n    </>\n  );\n}\n"})})]})}var B=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(Z,Object.assign({},e,{children:(0,r.jsx)(L,e)}))};function C(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},73956:function(e,t,n){"use strict";n.d(t,{l:function(){return y}});var r=n(67294),i={root:"m-d6493fad"},a=n(3154),o=n(30370),l=n(86109),s=n(81110),c=Object.defineProperty,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&m(e,n,t[n]);if(p)for(var n of p(t))d.call(t,n)&&m(e,n,t[n]);return e},x=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))0>t.indexOf(r)&&d.call(e,r)&&(n[r]=e[r]);return n};let g={},y=(0,a.d)((e,t)=>{let n=(0,o.w)("TypographyStylesProvider",g,e),{classNames:a,className:c,style:p,styles:u,unstyled:d}=n,m=x(n,["classNames","className","style","styles","unstyled"]),y=(0,l.y)({name:"TypographyStylesProvider",classes:i,props:n,className:c,style:p,classNames:a,styles:u,unstyled:d});return r.createElement(s.x,h(h({ref:t},y("root")),m))});y.classes=i,y.displayName="@mantine/core/TypographyStylesProvider"},69137:function(e,t,n){"use strict";n.d(t,{P:function(){return r}});let r=[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=23038)}),_N_E=e.O()}]);