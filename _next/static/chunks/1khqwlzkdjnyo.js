(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var o=Object.defineProperty;e.s(["__exportAll",0,(e,t)=>{let s={};for(var r in e)o(s,r,{get:e[r],enumerable:!0});return t||o(s,Symbol.toStringTag,{value:"Module"}),s}])},462138,e=>{"use strict";var o=e.i(779177),t=e.i(391398);function s({style:e,size:r=16,...i}){return(0,t.jsx)("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...e,width:(0,o.rem)(r),height:(0,o.rem)(r),display:"block"},...i,children:(0,t.jsx)("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}s.displayName="@mantine/core/AccordionChevron",e.s(["AccordionChevron",0,s])},424035,e=>{"use strict";var o=e.i(44091),t=e.i(62904),s=e.i(275519),r={root:"m_db6d6462",section:"m_2242eb65","stripes-animation":"m_81a374bd","stripes-animation-vertical":"m_e0fb7a86",label:"m_91e40b74"},i=e.i(232471);let[a,n]=(0,e.i(386179).createSafeContext)("Progress.Root component was not found in tree");var l=e.i(391398);let c=(0,s.factory)(e=>{let{classNames:t,className:s,style:r,styles:a,vars:c,...d}=(0,o.useProps)("ProgressLabel",null,e);return(0,l.jsx)(i.Box,{...n().getStyles("label",{className:s,style:r,classNames:t,styles:a}),...d})});c.classes=r,c.displayName="@mantine/core/ProgressLabel";var d=e.i(433512),u=e.i(481178),m=e.i(391466);let p=(0,u.createVarsResolver)((e,{size:o,radius:t,transitionDuration:s})=>({root:{"--progress-size":(0,d.getSize)(o,"progress-size"),"--progress-radius":void 0===t?void 0:(0,d.getRadius)(t),"--progress-transition-duration":"number"==typeof s?`${s}ms`:void 0}})),h=(0,s.factory)(e=>{let t=(0,o.useProps)("ProgressRoot",null,e),{classNames:s,className:n,style:c,styles:d,unstyled:u,vars:h,autoContrast:x,transitionDuration:g,orientation:f,attributes:b,mod:C,...y}=t,j=(0,m.useStyles)({name:"Progress",classes:r,props:t,className:n,style:c,classNames:s,styles:d,unstyled:u,attributes:b,vars:h,varsResolver:p});return(0,l.jsx)(a,{value:{getStyles:j,autoContrast:x},children:(0,l.jsx)(i.Box,{mod:[{orientation:f},C],...j("root"),...y})})});h.classes=r,h.varsResolver=p,h.displayName="@mantine/core/ProgressRoot";var x=e.i(317477),g=e.i(700145),f=e.i(853487),b=e.i(951254);let C={withAria:!0},y=(0,s.factory)(e=>{let{classNames:t,className:s,style:r,styles:a,vars:c,value:d,withAria:u,color:m,striped:p,animated:h,mod:y,...j}=(0,o.useProps)("ProgressSection",C,e),w=n(),S=(0,b.useMantineTheme)(),v=u?{role:"progressbar","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":d,"aria-valuetext":`${d}%`}:{};return(0,l.jsx)(i.Box,{...w.getStyles("section",{className:s,classNames:t,styles:a,style:r}),...j,...v,mod:[{striped:p||h,animated:h},y],__vars:{"--progress-section-size":`${d}%`,"--progress-section-color":(0,x.getThemeColor)(m,S),"--progress-label-color":(0,f.getAutoContrastValue)(w.autoContrast,S)?(0,g.getContrastColor)({color:m,theme:S,autoContrast:w.autoContrast}):void 0}})});y.classes=r,y.displayName="@mantine/core/ProgressSection";let j=(0,s.factory)(e=>{let s=(0,o.useProps)("Progress",null,e),{value:r,classNames:i,styles:a,vars:n,color:c,striped:d,animated:u,"aria-label":m,...p}=s,{resolvedClassNames:x,resolvedStyles:g}=(0,t.useResolvedStylesApi)({classNames:i,styles:a,props:s});return(0,l.jsx)(h,{classNames:x,styles:g,vars:n,...p,children:(0,l.jsx)(y,{value:r,color:c,striped:d,animated:u,"aria-label":m})})});j.classes=r,j.displayName="@mantine/core/Progress",j.Section=y,j.Root=h,j.Label=c,e.s(["Progress",0,j],424035)},103935,e=>{"use strict";var o=e.i(648863),t=e.i(485108),s=e.i(470743),r=e.i(883364),i=e.i(804052),a=e.i(951254),n=e.i(391398),l=e.i(371542),c=e.i(839608);let d=[{image:"https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Best forests to visit in North America",category:"nature"},{image:"https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Hawaii beaches review: better than you think",category:"beach"},{image:"https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Mountains at night: 12 best locations to enjoy the view",category:"nature"},{image:"https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Aurora in Norway: when to visit for best experience",category:"nature"},{image:"https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Best places to visit this winter",category:"tourism"},{image:"https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Active volcanos reviews: travel at your own risk",category:"nature"}];function u({image:e,title:o,category:a}){return(0,n.jsxs)(s.Paper,{shadow:"md",p:"xl",style:{backgroundImage:`url(${e})`},className:"m_819023b7",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(r.Text,{className:"m_3481ba25",size:"xs",children:a}),(0,n.jsx)(i.Title,{order:3,className:"m_b1678e91",children:o})]}),(0,n.jsx)(t.Button,{variant:"white",color:"dark",children:"Read article"})]})}let m={type:"code",component:function(e){let o=(0,c.useMediaQuery)(`(max-width: ${(0,a.useMantineTheme)().breakpoints.sm})`),t=d.map(e=>(0,n.jsx)(l.Carousel.Slide,{children:(0,n.jsx)(u,{...e})},e.title));return(0,n.jsx)(l.Carousel,{slideSize:{base:"100%",sm:"50%"},slideGap:{base:"xl",sm:2},emblaOptions:{align:"start",slidesToScroll:o?1:2},...e,children:t})},code:[{fileName:"Demo.tsx",code:`
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Button, Paper, Title, useMantineTheme, Text } from '@mantine/core';
import classes from './Demo.module.css';

const data = [
  {
    image:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Hawaii beaches review: better than you think',
    category: 'beach',
  },
  {
    image:
      'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Mountains at night: 12 best locations to enjoy the view',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Aurora in Norway: when to visit for best experience',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best places to visit this winter',
    category: 'tourism',
  },
  {
    image:
      'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Active volcanos reviews: travel at your own risk',
    category: 'nature',
  },
];

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      style={{ backgroundImage: \`url(\${image})\` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Read article
      </Button>
    </Paper>
  );
}

function Demo() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(\`(max-width: \${theme.breakpoints.sm})\`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: '100%', sm: '50%' }}
      slideGap={{ base: 'xl', sm: 2 }}
      emblaOptions={{ align: 'start', slidesToScroll: mobile ? 1 : 2 }}
    >
      {slides}
    </Carousel>
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`.card {
  height: 440px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-size: cover;
  background-position: center;
}

.title {
  font-weight: 900;
  color: var(--mantine-color-white);
  line-height: 1.2;
  font-size: 32px;
  margin-top: var(--mantine-spacing-xs);
  cursor: default;
}

.category {
  color: var(--mantine-color-white);
  opacity: 0.7;
  font-weight: 700;
  text-transform: uppercase;
  cursor: default;
}
`,language:"scss"}]};var p=e.i(232471);function h({children:e}){return(0,n.jsx)(p.Box,{style:{backgroundColor:"var(--mantine-color-blue-filled)",color:"var(--mantine-color-white)",height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",fontSize:50,fontWeight:"bold"},children:e})}function x({count:e}){return(0,n.jsx)(n.Fragment,{children:Array(e).fill(0).map((e,o)=>(0,n.jsx)(l.Carousel.Slide,{children:(0,n.jsx)(h,{children:o+1})},o))})}let g={type:"code",component:function(){return(0,n.jsx)(l.Carousel,{withIndicators:!0,height:200,children:(0,n.jsx)(x,{count:5})})},code:`
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel withIndicators height={200}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`,centered:!0,maxWidth:320},f={type:"code",component:function(){return(0,n.jsx)(l.Carousel,{orientation:"vertical",height:200,withIndicators:!0,children:(0,n.jsx)(x,{count:5})})},code:`
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel orientation="vertical" height={200} withIndicators>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`,centered:!0,maxWidth:320};var b=e.i(943311),C=e.i(858508);let y={type:"code",component:function(){return(0,n.jsx)(l.Carousel,{height:180,nextControlIcon:(0,n.jsx)(C.ArrowRightIcon,{size:16}),previousControlIcon:(0,n.jsx)(b.ArrowLeftIcon,{size:16}),children:(0,n.jsx)(x,{count:5})})},code:`
import { Carousel } from '@mantine/carousel';
import { ArrowRightIcon, ArrowLeftIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <Carousel
      height={180}
      nextControlIcon={<ArrowRightIcon size={16} />}
      previousControlIcon={<ArrowLeftIcon size={16} />}
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`,centered:!0,maxWidth:320},j=["https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png"];var w=e.i(724288);let S={type:"code",component:function(){return(0,n.jsx)(l.Carousel,{withIndicators:!0,height:200,children:j.map(e=>(0,n.jsx)(l.Carousel.Slide,{children:(0,n.jsx)(w.Image,{src:e})},e))})},code:`
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';

const images = [
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
];

function Demo() {
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));

  return (
    <Carousel withIndicators height={200}>
      {slides}
    </Carousel>
  );
}
`,maxWidth:380,centered:!0},v={type:"code",component:function(){return(0,n.jsx)(l.Carousel,{withIndicators:!0,height:200,slideSize:"33.333333%",slideGap:"md",emblaOptions:{loop:!0,align:"start",slidesToScroll:3},children:(0,n.jsx)(x,{count:12})})},code:`
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel
      withIndicators
      height={200}
      slideSize="33.333333%"
      slideGap="md"
      emblaOptions={{ loop: true, align: 'start', slidesToScroll: 3 }}
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`},D={type:"code",component:function(){return(0,n.jsx)(l.Carousel,{withIndicators:!0,height:200,slideSize:{base:"100%",sm:"50%",md:"33.333333%"},slideGap:{base:0,sm:"md"},emblaOptions:{loop:!0,align:"start"},children:(0,n.jsx)(x,{count:6})})},code:`
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel
      withIndicators
      height={200}
      slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
      slideGap={{ base: 0, sm: 'md' }}
      emblaOptions={{ loop: true, align: 'start' }}
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`};var M=e.i(191788);let I={active:!0,breakpoints:{},delay:4e3,jump:!1,playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function z(e={}){let o,t,s,r,i=null,a=0,n=!1,l=!1,c=!1,d=!1;function u(){if(!s){if(h()){c=!0;return}n||t.emit("autoplay:play"),function(){let{ownerWindow:e}=t.internalEngine();e.clearTimeout(a),a=e.setTimeout(C,r[t.selectedScrollSnap()]),i=new Date().getTime(),t.emit("autoplay:timerset")}(),n=!0}}function m(){s||(n&&t.emit("autoplay:stop"),function(){let{ownerWindow:e}=t.internalEngine();e.clearTimeout(a),a=0,i=null,t.emit("autoplay:timerstopped")}(),n=!1)}function p(){if(h())return c=n,m();c&&u()}function h(){let{ownerDocument:e}=t.internalEngine();return"hidden"===e.visibilityState}function x(){l||m()}function g(){l||u()}function f(){l=!0,m()}function b(){l=!1,u()}function C(){let{index:e}=t.internalEngine(),s=e.clone().add(1).get(),r=t.scrollSnapList().length-1,i=o.stopOnLastSnap&&s===r;if(t.canScrollNext()?t.scrollNext(d):t.scrollTo(0,d),t.emit("autoplay:select"),i)return m();u()}return{name:"autoplay",options:e,init:function(i,a){var n,l,c,h;let C,y;t=i;let{mergeOptions:j,optionsAtMedia:w}=a,S=j(I,z.globalOptions);if(o=w(j(S,e)),t.scrollSnapList().length<=1)return;d=o.jump,s=!1,n=t,l=o.delay,C=n.scrollSnapList(),r="number"==typeof l?C.map(()=>l):l(C,n);let{eventStore:v,ownerDocument:D}=t.internalEngine(),M=!!t.internalEngine().options.watchDrag,A=(c=t,h=o.rootNode,y=c.rootNode(),h&&h(y)||y);v.add(D,"visibilitychange",p),M&&t.on("pointerDown",x),M&&!o.stopOnInteraction&&t.on("pointerUp",g),o.stopOnMouseEnter&&v.add(A,"mouseenter",f),o.stopOnMouseEnter&&!o.stopOnInteraction&&v.add(A,"mouseleave",b),o.stopOnFocusIn&&t.on("slideFocusStart",m),o.stopOnFocusIn&&!o.stopOnInteraction&&v.add(t.containerNode(),"focusout",u),o.playOnInit&&u()},destroy:function(){t.off("pointerDown",x).off("pointerUp",g).off("slideFocusStart",m),m(),s=!0,n=!1},play:function(e){void 0!==e&&(d=e),u()},stop:function(){n&&m()},reset:function(){n&&u()},isPlaying:function(){return n},timeUntilNext:function(){return i?r[t.selectedScrollSnap()]-(new Date().getTime()-i):null}}}z.globalOptions=void 0;let A={type:"code",component:function(){let e=(0,M.useRef)(z({delay:1e3}));return(0,n.jsx)(l.Carousel,{withIndicators:!0,height:200,plugins:[e.current],onMouseEnter:e.current.stop,onMouseLeave:()=>e.current.play(),children:(0,n.jsx)(x,{count:5})})},code:`
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';

function Demo() {
  const autoplay = useRef(Autoplay({ delay: 1000 }));

  return (
    <Carousel
      withIndicators
      height={200}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={() => autoplay.current.play()}
    >
      <Slides count={5} />
    </Carousel>
  );
}
`,centered:!0,maxWidth:320},N={type:"code",component:function(){return(0,n.jsx)(l.Carousel,{withIndicators:!0,height:200,slideGap:"md",emblaOptions:{dragFree:!0,align:"start"},children:(0,n.jsx)(x,{count:5})})},code:`
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel
      withIndicators
      height={200}
      emblaOptions={{ dragFree: true, align: 'start' }}
      slideGap="md"
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`,centered:!0,maxWidth:320};var _={indicator:"m_4fe518f6"};let P={type:"code",component:function(){return(0,n.jsx)(l.Carousel,{withIndicators:!0,height:200,classNames:_,children:(0,n.jsx)(x,{count:5})})},code:[{fileName:"Demo.tsx",code:`
import { Carousel } from '@mantine/carousel';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Carousel withIndicators height={200} classNames={classes}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`
.indicator {
  width: 12px;
  height: 4px;
  transition: width 250ms ease;

  &[data-active] {
    width: 40px;
  }
}`,language:"scss"}],centered:!0,maxWidth:320};var G={control:"m_bf2c70c5"};let H={type:"code",component:function(){return(0,n.jsx)(l.Carousel,{height:200,classNames:G,children:(0,n.jsx)(x,{count:5})})},code:[{fileName:"Demo.tsx",code:`
import { Carousel } from '@mantine/carousel';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Carousel height={200} classNames={classes}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`
.control {
  &[data-inactive] {
    opacity: 0;
    cursor: default;
  }
}
`,language:"scss"}],centered:!0,maxWidth:320};var k={controls:"m_78ad357a",root:"m_f45b71a6"};let B={type:"code",component:function(){return(0,n.jsx)(l.Carousel,{height:200,classNames:k,children:(0,n.jsx)(x,{count:5})})},code:[{fileName:"Demo.tsx",code:`
import { Carousel } from '@mantine/carousel';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Carousel height={200} classNames={classes}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`.controls {
  transition: opacity 150ms ease;
  opacity: 0;
}

.root {
  &:hover {
    .controls {
      opacity: 1;
    }
  }
}`,language:"scss"}],centered:!0,maxWidth:320},T={type:"configurator",component:function(e){return(0,n.jsx)(l.Carousel,{height:200,slideSize:"70%",...e,children:(0,n.jsx)(x,{count:5})})},code:`
import { Carousel } from '@mantine/carousel';


function Demo() {
  return (
    <Carousel
      slideSize="70%"
      height={200}
      {{props}}
    >
      {/* ...slides */}
    </Carousel>
  );
}
`,centered:!0,maxWidth:"100%",controls:[{prop:"orientation",type:"segmented",initialValue:"horizontal",libraryValue:"horizontal",data:[{label:"Horizontal",value:"horizontal"},{label:"Vertical",value:"vertical"}]},{prop:"slideGap",type:"size",initialValue:"md",libraryValue:"__"},{prop:"controlsOffset",type:"size",initialValue:"sm",libraryValue:"__"},{prop:"controlSize",type:"number",min:14,max:40,initialValue:26,libraryValue:"__"},{prop:"withControls",type:"boolean",initialValue:!0,libraryValue:"__"},{prop:"withIndicators",type:"boolean",initialValue:!1,libraryValue:"__"}]};var O=e.i(424035);let V={type:"code",component:function(){let[e,o]=(0,M.useState)(0),[t,s]=(0,M.useState)(null),r=(0,M.useCallback)(()=>{t&&o(100*Math.max(0,Math.min(1,t.scrollProgress())))},[t,o]);return(0,M.useEffect)(()=>{t&&(t.on("scroll",r),r())},[t]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Carousel,{emblaOptions:{dragFree:!0},slideSize:"50%",slideGap:"md",height:200,getEmblaApi:s,initialSlide:2,children:(0,n.jsx)(x,{count:12})}),(0,n.jsx)(O.Progress,{value:e,maw:320,size:"sm",mt:"xl",mx:"auto"})]})},code:`
import { useCallback, useEffect, useState } from 'react';
import { EmblaCarouselType } from 'embla-carousel';
import { Carousel } from '@mantine/carousel';
import { Progress } from '@mantine/core';

function Demo() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);

  const handleScroll = useCallback(() => {
    if (!embla) {
      return;
    }
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (embla) {
      embla.on('scroll', handleScroll);
      handleScroll();
    }
  }, [embla]);

  return (
    <>
      <Carousel
        emblaOptions={{ dragFree: true }}
        slideSize="50%"
        slideGap="md"
        height={200}
        getEmblaApi={setEmbla}
        initialSlide={2}
      >
        <Slides count={12} />
      </Carousel>
      <Progress value={scrollProgress} maw={320} size="sm" mt="xl" mx="auto" />
    </>
  );
}
`};var E=e.i(583385);let W=`
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel withIndicators height={200}{{props}}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
    </Carousel>
  );
}
`,q={type:"styles-api",data:E.CarouselStylesApi,component:function(e){return(0,n.jsx)(l.Carousel,{withIndicators:!0,height:200,...e,children:(0,n.jsx)(x,{count:2})})},code:W,centered:!0,maxWidth:"100%"},R={type:"code",component:function(){return(0,n.jsx)("div",{style:{resize:"horizontal",overflow:"hidden",maxWidth:"100%",minWidth:250,padding:10},children:(0,n.jsx)(l.Carousel,{withIndicators:!0,height:200,type:"container",slideSize:{base:"100%","300px":"50%","500px":"33.333333%"},slideGap:{base:0,"300px":"md","500px":"lg"},emblaOptions:{loop:!0,align:"start"},children:(0,n.jsx)(x,{count:6})})})},code:`
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
`},F={type:"configurator",component:function(e){return(0,n.jsx)(l.Carousel,{height:200,slideSize:"70%",slideGap:"md",emblaOptions:e,children:(0,n.jsx)(x,{count:5})})},code:e=>`
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel
      slideSize="70%"
      height={200}
      emblaOptions={{
        loop: ${e.loop},
        dragFree: ${e.dragFree},
        align: '${e.align}'
      }}
    >
      {/* ...slides */}
    </Carousel>
  );
}
`,centered:!0,maxWidth:"100%",controls:[{prop:"align",type:"segmented",initialValue:"center",libraryValue:"__",data:[{label:"Start",value:"start"},{label:"Center",value:"center"},{label:"End",value:"end"}]},{prop:"loop",type:"boolean",initialValue:!0,libraryValue:"__"},{prop:"dragFree",type:"boolean",initialValue:!1,libraryValue:"__"}]};var Y=(0,o.__exportAll)({autoplay:()=>A,breakpoints:()=>D,cards:()=>m,configurator:()=>T,container:()=>R,controlsHover:()=>B,controlsStyles:()=>H,dragFree:()=>N,emblaOptions:()=>F,icons:()=>y,images:()=>S,indicatorStyles:()=>P,multiple:()=>v,progress:()=>V,stylesApi:()=>q,usage:()=>g,vertical:()=>f});e.s(["CarouselDemos",0,Y],103935)},127495,e=>{"use strict";var o=e.i(391398),t=e.i(38856),s=e.i(103935);e.i(603441);var r=e.i(62558);e.i(457450);var i=e.i(418026);let a=(0,r.Layout)(i.MDX_DATA.Carousel);function n(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.useMDXComponents)(),...e.components},{Demo:i,InstallScript:a,StylesApiSelectors:n}=r;return i||l("Demo",!0),a||l("InstallScript",!0),n||l("StylesApiSelectors",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(a,{packages:"embla-carousel@^8.5.2 embla-carousel-react@^8.5.2 @mantine/carousel"}),"\n",(0,o.jsx)(r.p,{children:"After installation import package styles at the root of your application:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-tsx",children:"import '@mantine/core/styles.css';\n// ‼️ import carousel styles after core package styles\nimport '@mantine/carousel/styles.css';\n"})}),"\n",(0,o.jsx)(r.h2,{id:"do-not-forget-to-import-styles",children:"Do not forget to import styles"}),"\n",(0,o.jsx)(r.p,{children:"Have you followed the installation instructions above but something is not working\n(Carousel slides are rendered vertically, no controls or indicators)?\nYou've fallen into the trap of not importing carousel styles!\nTo fix the issue, import carousel styles at the root of your application:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-tsx",children:"import '@mantine/carousel/styles.css';\n"})}),"\n",(0,o.jsx)(r.h2,{id:"documentation-demos",children:"Documentation demos"}),"\n",(0,o.jsx)(r.p,{children:"The demos presented on this page use blue background color for demonstration purposes. To simplify\ndemo code, background color and other demo-only styles are not included in the demo code.\nWhen you copy and paste demo code to your project, it will not have blue background color."}),"\n",(0,o.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"@mantine/carousel"})," package is based on ",(0,o.jsx)(r.a,{href:"https://www.embla-carousel.com/",children:"embla carousel"}),":"]}),"\n",(0,o.jsx)(i,{data:s.CarouselDemos.usage}),"\n",(0,o.jsx)(r.h2,{id:"options",children:"Options"}),"\n",(0,o.jsx)(i,{data:s.CarouselDemos.configurator}),"\n",(0,o.jsx)(r.h2,{id:"embla-options",children:"Embla options"}),"\n",(0,o.jsxs)(r.p,{children:["You can pass configuration options directly to embla carousel with the ",(0,o.jsx)(r.code,{children:"emblaOptions"})," prop.\nYou can find embla options description in the ",(0,o.jsx)(r.a,{href:"https://www.embla-carousel.com/docs/api/options",children:"embla options reference"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["Example of passing ",(0,o.jsx)(r.code,{children:"loop"}),", ",(0,o.jsx)(r.code,{children:"dragFree"})," and ",(0,o.jsx)(r.code,{children:"align"})," options:"]}),"\n",(0,o.jsx)(i,{data:s.CarouselDemos.emblaOptions}),"\n",(0,o.jsx)(r.h2,{id:"size-and-gap",children:"Size and gap"}),"\n",(0,o.jsxs)(r.p,{children:["Set ",(0,o.jsx)(r.code,{children:"slideSize"})," and ",(0,o.jsx)(r.code,{children:"slideGap"})," on the ",(0,o.jsx)(r.code,{children:"Carousel"})," component to control the size and gap of every slide:"]}),"\n",(0,o.jsx)(i,{data:s.CarouselDemos.multiple}),"\n",(0,o.jsx)(r.h2,{id:"responsive-styles",children:"Responsive styles"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"slideSize"})," and ",(0,o.jsx)(r.code,{children:"slideGap"})," props work the same way as ",(0,o.jsx)(r.a,{href:"/styles/style-props/",children:"style props"}),",\nyou can pass an object with values for different breakpoints:"]}),"\n",(0,o.jsx)(i,{data:s.CarouselDemos.breakpoints}),"\n",(0,o.jsx)(r.h2,{id:"container-queries",children:"Container queries"}),"\n",(0,o.jsxs)(r.p,{children:["To use ",(0,o.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",children:"container queries"}),"\ninstead of media queries, set ",(0,o.jsx)(r.code,{children:'type="container"'}),". With container queries, slide size and gap\nwill be adjusted based on the container width, not the viewport width."]}),"\n",(0,o.jsxs)(r.p,{children:["Note that when using container queries, ",(0,o.jsx)(r.code,{children:"slideSize"})," and ",(0,o.jsx)(r.code,{children:"slideGap"})," props cannot\nreference ",(0,o.jsx)(r.code,{children:"theme.breakpoints"})," values in keys. You are required to use exact px or em values."]}),"\n",(0,o.jsx)(r.p,{children:"To see how the slide size and gap changes, resize the root element of the demo\nwith the resize handle located at the bottom right corner of the demo:"}),"\n",(0,o.jsx)(i,{data:s.CarouselDemos.container}),"\n",(0,o.jsx)(r.h2,{id:"drag-free",children:"Drag free"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"dragFree"})," will disable slide snap points – users will be able to stop dragging at any position:"]}),"\n",(0,o.jsx)(i,{data:s.CarouselDemos.dragFree}),"\n",(0,o.jsx)(r.h2,{id:"vertical-orientation",children:"Vertical orientation"}),"\n",(0,o.jsxs)(r.p,{children:["A carousel with ",(0,o.jsx)(r.code,{children:'orientation="vertical"'})," requires the ",(0,o.jsx)(r.code,{children:"height"})," prop to be set:"]}),"\n",(0,o.jsx)(i,{data:s.CarouselDemos.vertical}),"\n",(0,o.jsx)(r.h2,{id:"controls-icons",children:"Controls icons"}),"\n",(0,o.jsx)(r.p,{children:"You can replace default next/previous controls icons with any React nodes:"}),"\n",(0,o.jsx)(i,{data:s.CarouselDemos.icons}),"\n",(0,o.jsx)(r.h2,{id:"100-height",children:"100% height"}),"\n",(0,o.jsxs)(r.p,{children:["Set ",(0,o.jsx)(r.code,{children:'height="100%"'})," to make the Carousel take 100% height of the container. Note that in this case:"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["the container element must have ",(0,o.jsx)(r.code,{children:"display: flex"})," styles"]}),"\n",(0,o.jsxs)(r.li,{children:["the carousel root element must have ",(0,o.jsx)(r.code,{children:"flex: 1"})," styles"]}),"\n",(0,o.jsx)(r.li,{children:"the container element must have fixed height"}),"\n"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-tsx",children:"import { Carousel } from '@mantine/carousel';\n\nexport function PercentageHeight() {\n  return (\n    <div style={{ height: 400, display: 'flex' }}>\n      <Carousel withIndicators height=\"100%\" flex={1}>\n        <Carousel.Slide>1</Carousel.Slide>\n        <Carousel.Slide>2</Carousel.Slide>\n        <Carousel.Slide>3</Carousel.Slide>\n      </Carousel>\n    </div>\n  );\n}\n"})}),"\n",(0,o.jsx)(r.h2,{id:"get-embla-instance",children:"Get embla instance"}),"\n",(0,o.jsxs)(r.p,{children:["You can get the ",(0,o.jsx)(r.a,{href:"https://www.embla-carousel.com/docs/api/methods",children:"embla instance"})," with the ",(0,o.jsx)(r.code,{children:"getEmblaApi"})," prop.\nYou will be able to enhance the carousel with additional logic after that using embla api methods:"]}),"\n",(0,o.jsx)(i,{data:s.CarouselDemos.progress}),"\n",(0,o.jsx)(r.h2,{id:"embla-plugins",children:"Embla plugins"}),"\n",(0,o.jsxs)(r.p,{children:["Set the ",(0,o.jsx)(r.code,{children:"plugins"})," prop to enhance the carousel with ",(0,o.jsx)(r.a,{href:"https://www.embla-carousel.com/docs/plugins",children:"embla plugins"}),".\nNote that plugins are not installed with the ",(0,o.jsx)(r.code,{children:"@mantine/carousel"})," package and you will need to\ninstall them separately."]}),"\n",(0,o.jsxs)(r.p,{children:["Example with ",(0,o.jsx)(r.a,{href:"https://www.embla-carousel.com/docs/plugins/autoplay",children:"autoplay plugin"}),":"]}),"\n",(0,o.jsx)(a,{packages:"embla-carousel-autoplay@^8.5.2"}),"\n",(0,o.jsx)(i,{data:s.CarouselDemos.autoplay}),"\n",(0,o.jsx)(n,{component:"Carousel"}),"\n",(0,o.jsx)(i,{data:s.CarouselDemos.stylesApi}),"\n",(0,o.jsx)(r.h2,{id:"indicator-styles",children:"Indicator styles"}),"\n",(0,o.jsx)(i,{data:s.CarouselDemos.indicatorStyles}),"\n",(0,o.jsx)(r.h2,{id:"hide-inactive-controls",children:"Hide inactive controls"}),"\n",(0,o.jsx)(i,{data:s.CarouselDemos.controlsStyles}),"\n",(0,o.jsx)(r.h2,{id:"show-controls-on-hover",children:"Show controls on hover"}),"\n",(0,o.jsx)(i,{data:s.CarouselDemos.controlsHover}),"\n",(0,o.jsx)(r.h2,{id:"example-images-carousel",children:"Example: Images carousel"}),"\n",(0,o.jsx)(i,{data:s.CarouselDemos.images}),"\n",(0,o.jsx)(r.h2,{id:"example-cards-carousel",children:"Example: Cards carousel"}),"\n",(0,o.jsx)(i,{data:s.CarouselDemos.cards}),"\n",(0,o.jsx)(r.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,o.jsxs)(r.p,{children:["Set ",(0,o.jsx)(r.code,{children:"aria-label"})," or ",(0,o.jsx)(r.code,{children:"aria-labelledby"})," on the ",(0,o.jsx)(r.code,{children:"Carousel"})," component to make it accessible for screen readers:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-tsx",children:"import { Carousel } from '@mantine/carousel';\n\nexport function AccessibleCarousel() {\n  return (\n    <Carousel aria-label=\"Gallery of nature pictures\">\n      <Carousel.Slide>...</Carousel.Slide>\n      <Carousel.Slide>...</Carousel.Slide>\n      <Carousel.Slide>...</Carousel.Slide>\n    </Carousel>\n  );\n}\n"})}),"\n",(0,o.jsxs)(r.p,{children:["Set ",(0,o.jsx)(r.code,{children:"aria-label"})," for next/previous controls with ",(0,o.jsx)(r.code,{children:"nextControlProps"})," and ",(0,o.jsx)(r.code,{children:"previousControlProps"})," props:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-tsx",children:"import { Carousel } from '@mantine/carousel';\n\nexport function AccessibleControlsCarousel() {\n  return (\n    <Carousel\n      aria-label=\"Gallery of nature pictures\"\n      nextControlProps={{ 'aria-label': 'Next slide' }}\n      previousControlProps={{ 'aria-label': 'Previous slide' }}\n    >\n      <Carousel.Slide>...</Carousel.Slide>\n      <Carousel.Slide>...</Carousel.Slide>\n      <Carousel.Slide>...</Carousel.Slide>\n    </Carousel>\n  );\n}\n"})})]})}function l(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,o.jsx)(a,{...e,children:(0,o.jsx)(n,{...e})})}])},509815,(e,o,t)=>{let s="/x/carousel";(window.__NEXT_P=window.__NEXT_P||[]).push([s,()=>e.r(127495)]),o.hot&&o.hot.dispose(function(){window.__NEXT_P.push([s])})},648761,e=>{e.v(o=>Promise.all(["static/chunks/22379_btw709h.js"].map(o=>e.l(o))).then(()=>o(493594)))},828805,e=>{e.v(o=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(o=>e.l(o))).then(()=>o(879466)))}]);