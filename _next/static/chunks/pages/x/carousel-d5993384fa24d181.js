(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[75497],{60415:(e,t,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/x/carousel",function(){return o(26161)}])},26161:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>Q});var i=o(31085),n=o(71184),a=o(64893),s=o(12946);let r={type:"code",component:function(){return(0,i.jsx)(a.F,{withIndicators:!0,height:200,children:(0,i.jsx)(s.t,{count:5})})},code:`
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
`,centered:!0,maxWidth:320},l={type:"configurator",component:function(e){return(0,i.jsx)(a.F,{height:200,slideSize:"70%",...e,children:(0,i.jsx)(s.t,{count:5})})},code:`
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
`,centered:!0,maxWidth:"100%",controls:[{prop:"orientation",type:"segmented",initialValue:"horizontal",libraryValue:"horizontal",data:[{label:"Horizontal",value:"horizontal"},{label:"Vertical",value:"vertical"}]},{prop:"slideGap",type:"size",initialValue:"md",libraryValue:"__"},{prop:"controlsOffset",type:"size",initialValue:"sm",libraryValue:"__"},{prop:"controlSize",type:"number",min:14,max:40,initialValue:26,libraryValue:"__"},{prop:"withControls",type:"boolean",initialValue:!0,libraryValue:"__"},{prop:"withIndicators",type:"boolean",initialValue:!1,libraryValue:"__"}]},c={type:"configurator",component:function(e){return(0,i.jsx)(a.F,{height:200,slideSize:"70%",slideGap:"md",emblaOptions:e,children:(0,i.jsx)(s.t,{count:5})})},code:e=>`
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
`,centered:!0,maxWidth:"100%",controls:[{prop:"align",type:"segmented",initialValue:"center",libraryValue:"__",data:[{label:"Start",value:"start"},{label:"Center",value:"center"},{label:"End",value:"end"}]},{prop:"loop",type:"boolean",initialValue:!0,libraryValue:"__"},{prop:"dragFree",type:"boolean",initialValue:!1,libraryValue:"__"}]},d={type:"code",component:function(){return(0,i.jsx)(a.F,{withIndicators:!0,height:200,slideSize:"33.333333%",slideGap:"md",emblaOptions:{loop:!0,align:"start",slidesToScroll:3},children:(0,i.jsx)(s.t,{count:12})})},code:`
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
`};var u=o(70360),m=o(43741);let p={type:"code",component:function(){return(0,i.jsx)(a.F,{withIndicators:!0,height:200,slideGap:"md",emblaOptions:{dragFree:!0,align:"start"},children:(0,i.jsx)(s.t,{count:5})})},code:`
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
`,centered:!0,maxWidth:320},h={type:"code",component:function(){return(0,i.jsx)(a.F,{orientation:"vertical",height:200,withIndicators:!0,children:(0,i.jsx)(s.t,{count:5})})},code:`
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
`,centered:!0,maxWidth:320};var x=o(89689),f=o(80502);let g={type:"code",component:function(){return(0,i.jsx)(a.F,{height:180,nextControlIcon:(0,i.jsx)(x.A,{size:16}),previousControlIcon:(0,i.jsx)(f.A,{size:16}),children:(0,i.jsx)(s.t,{count:5})})},code:`
import { Carousel } from '@mantine/carousel';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

function Demo() {
  return (
    <Carousel
      height={180}
      nextControlIcon={<IconArrowRight size={16} />}
      previousControlIcon={<IconArrowLeft size={16} />}
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`,centered:!0,maxWidth:320};var b=o(14041),w=o(44419);let y={type:"code",component:function(){let[e,t]=(0,b.useState)(0),[o,n]=(0,b.useState)(null),r=(0,b.useCallback)(()=>{o&&t(100*Math.max(0,Math.min(1,o.scrollProgress())))},[o,t]);return(0,b.useEffect)(()=>{o&&(o.on("scroll",r),r())},[o]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.F,{emblaOptions:{dragFree:!0},slideSize:"50%",slideGap:"md",height:200,getEmblaApi:n,initialSlide:2,children:(0,i.jsx)(s.t,{count:12})}),(0,i.jsx)(w.k,{value:e,maw:320,size:"sm",mt:"xl",mx:"auto"})]})},code:`
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
`},j={active:!0,breakpoints:{},delay:4e3,jump:!1,playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function C(e={}){let t,o,i,n;let a=null,s=0,r=!1,l=!1,c=!1,d=!1;function u(){if(!i){if(h()){c=!0;return}r||o.emit("autoplay:play"),function(){let{ownerWindow:e}=o.internalEngine();e.clearTimeout(s),s=e.setTimeout(w,n[o.selectedScrollSnap()]),a=new Date().getTime(),o.emit("autoplay:timerset")}(),r=!0}}function m(){i||(r&&o.emit("autoplay:stop"),function(){let{ownerWindow:e}=o.internalEngine();e.clearTimeout(s),s=0,a=null,o.emit("autoplay:timerstopped")}(),r=!1)}function p(){if(h())return c=r,m();c&&u()}function h(){let{ownerDocument:e}=o.internalEngine();return"hidden"===e.visibilityState}function x(){l||m()}function f(){l||u()}function g(){l=!0,m()}function b(){l=!1,u()}function w(){let{index:e}=o.internalEngine(),i=e.clone().add(1).get(),n=o.scrollSnapList().length-1,a=t.stopOnLastSnap&&i===n;if(o.canScrollNext()?o.scrollNext(d):o.scrollTo(0,d),o.emit("autoplay:select"),a)return m();u()}return{name:"autoplay",options:e,init:function(a,s){o=a;let{mergeOptions:r,optionsAtMedia:l}=s,c=r(j,C.globalOptions);if(t=l(r(c,e)),o.scrollSnapList().length<=1)return;d=t.jump,i=!1,n=function(e,t){let o=e.scrollSnapList();return"number"==typeof t?o.map(()=>t):t(o,e)}(o,t.delay);let{eventStore:h,ownerDocument:w}=o.internalEngine(),y=!!o.internalEngine().options.watchDrag,S=function(e,t){let o=e.rootNode();return t&&t(o)||o}(o,t.rootNode);h.add(w,"visibilitychange",p),y&&o.on("pointerDown",x),y&&!t.stopOnInteraction&&o.on("pointerUp",f),t.stopOnMouseEnter&&h.add(S,"mouseenter",g),t.stopOnMouseEnter&&!t.stopOnInteraction&&h.add(S,"mouseleave",b),t.stopOnFocusIn&&o.on("slideFocusStart",m),t.stopOnFocusIn&&!t.stopOnInteraction&&h.add(o.containerNode(),"focusout",u),t.playOnInit&&u()},destroy:function(){o.off("pointerDown",x).off("pointerUp",f).off("slideFocusStart",m),m(),i=!0,r=!1},play:function(e){void 0!==e&&(d=e),u()},stop:function(){r&&m()},reset:function(){r&&u()},isPlaying:function(){return r},timeUntilNext:function(){return a?n[o.selectedScrollSnap()]-(new Date().getTime()-a):null}}}C.globalOptions=void 0;let S={type:"code",component:function(){let e=(0,b.useRef)(C({delay:1e3}));return(0,i.jsx)(a.F,{withIndicators:!0,height:200,plugins:[e.current],onMouseEnter:e.current.stop,onMouseLeave:()=>e.current.play(),children:(0,i.jsx)(s.t,{count:5})})},code:`
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
`,centered:!0,maxWidth:320};var v=o(40824);let D=`
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel withIndicators height={200}{{props}}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
    </Carousel>
  );
}
`,M={type:"styles-api",data:v.l,component:function(e){return(0,i.jsx)(a.F,{withIndicators:!0,height:200,...e,children:(0,i.jsx)(s.t,{count:2})})},code:D,centered:!0,maxWidth:"100%"};var I={indicator:"m_4fe518f6"};let z={type:"code",component:function(){return(0,i.jsx)(a.F,{withIndicators:!0,height:200,classNames:I,children:(0,i.jsx)(s.t,{count:5})})},code:[{fileName:"Demo.tsx",code:`
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
}`,language:"scss"}],centered:!0,maxWidth:320};var k={control:"m_bf2c70c5"};let N={type:"code",component:function(){return(0,i.jsx)(a.F,{height:200,classNames:k,children:(0,i.jsx)(s.t,{count:5})})},code:[{fileName:"Demo.tsx",code:`
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
`,language:"scss"}],centered:!0,maxWidth:320};var H={controls:"m_78ad357a",root:"m_f45b71a6"};let G={type:"code",component:function(){return(0,i.jsx)(a.F,{height:200,classNames:H,children:(0,i.jsx)(s.t,{count:5})})},code:[{fileName:"Demo.tsx",code:`
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
}`,language:"scss"}],centered:!0,maxWidth:320};var _=o(38621);let E=["https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png"],F={type:"code",component:function(){let e=E.map(e=>(0,i.jsx)(a.F.Slide,{children:(0,i.jsx)(_._,{src:e})},e));return(0,i.jsx)(a.F,{withIndicators:!0,height:200,children:e})},code:`
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
`,maxWidth:380,centered:!0};var O=o(58120),V=o(93065),W=o(61195),A=o(52022),B=o(92408),T=o(80955),q={card:"m_819023b7",title:"m_b1678e91",category:"m_3481ba25"};let P=[{image:"https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Best forests to visit in North America",category:"nature"},{image:"https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Hawaii beaches review: better than you think",category:"beach"},{image:"https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Mountains at night: 12 best locations to enjoy the view",category:"nature"},{image:"https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Aurora in Norway: when to visit for best experience",category:"nature"},{image:"https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Best places to visit this winter",category:"tourism"},{image:"https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Active volcanos reviews: travel at your own risk",category:"nature"}];function Y({image:e,title:t,category:o}){return(0,i.jsxs)(O.t,{shadow:"md",p:"xl",radius:"md",style:{backgroundImage:`url(${e})`},className:q.card,children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(V.E,{className:q.category,size:"xs",children:o}),(0,i.jsx)(W.h,{order:3,className:q.title,children:t})]}),(0,i.jsx)(A.$,{variant:"white",color:"dark",children:"Read article"})]})}let R={type:"code",component:function(e){let t=(0,B.xd)(),o=(0,T.U)(`(max-width: ${t.breakpoints.sm})`),n=P.map(e=>(0,i.jsx)(a.F.Slide,{children:(0,i.jsx)(Y,{...e})},e.title));return(0,i.jsx)(a.F,{slideSize:{base:"100%",sm:"50%"},slideGap:{base:"xl",sm:2},emblaOptions:{align:"start",slidesToScroll:o?1:2},...e,children:n})},code:[{fileName:"Demo.tsx",code:`
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
      radius="md"
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
`,language:"scss"}]};var L=o(18675),$=o(20017);let U=(0,L.P)($.XZ.Carousel);function X(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components},{Demo:o,InstallScript:a,StylesApiSelectors:s}=t;return o||Z("Demo",!0),a||Z("InstallScript",!0),s||Z("StylesApiSelectors",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(a,{packages:"embla-carousel@^8.5.2 embla-carousel-react@^8.5.2 @mantine/carousel"}),"\n",(0,i.jsx)(t.p,{children:"After installation import package styles at the root of your application:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"import '@mantine/core/styles.css';\n// ‼️ import carousel styles after core package styles\nimport '@mantine/carousel/styles.css';\n"})}),"\n",(0,i.jsx)(t.h2,{id:"do-not-forget-to-import-styles",children:"Do not forget to import styles"}),"\n",(0,i.jsx)(t.p,{children:"Followed installation instructions above but something is not working\n(Carousel slides are rendered vertically, no controls or indicators)?\nYou've fallen into the trap of not importing carousel styles!\nTo fix the issue, import carousel styles at the root of your application:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"import '@mantine/carousel/styles.css';\n"})}),"\n",(0,i.jsx)(t.h2,{id:"documentation-demos",children:"Documentation demos"}),"\n",(0,i.jsx)(t.p,{children:"Demos presents on this page use blue background color for demonstration purposes. To simply\ndemos code, background color and other demo-only styles are not included in the demo code.\nWhen you copy paste demo code to your project, it will not have blue background color."}),"\n",(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"@mantine/carousel"})," package is based on ",(0,i.jsx)(t.a,{href:"https://www.embla-carousel.com/",children:"embla carousel"}),":"]}),"\n",(0,i.jsx)(o,{data:r}),"\n",(0,i.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,i.jsx)(o,{data:l}),"\n",(0,i.jsx)(t.h2,{id:"embla-options",children:"Embla options"}),"\n",(0,i.jsxs)(t.p,{children:["You can pass configuration options directly to embla carousel with ",(0,i.jsx)(t.code,{children:"emblaOptions"})," prop.\nYou can find embla options description in ",(0,i.jsx)(t.a,{href:"https://www.embla-carousel.com/api/options/",children:"embla options reference"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Example of passing ",(0,i.jsx)(t.code,{children:"loop"}),", ",(0,i.jsx)(t.code,{children:"dragFree"})," and ",(0,i.jsx)(t.code,{children:"align"})," options:"]}),"\n",(0,i.jsx)(o,{data:c}),"\n",(0,i.jsx)(t.h2,{id:"size-and-gap",children:"Size and gap"}),"\n",(0,i.jsxs)(t.p,{children:["Set ",(0,i.jsx)(t.code,{children:"slideSize"})," and ",(0,i.jsx)(t.code,{children:"slideGap"})," on ",(0,i.jsx)(t.code,{children:"Carousel"})," component to control size and gap of every slide:"]}),"\n",(0,i.jsx)(o,{data:d}),"\n",(0,i.jsx)(t.h2,{id:"responsive-styles",children:"Responsive styles"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"slideSize"})," and ",(0,i.jsx)(t.code,{children:"slideGap"})," props work the same way as ",(0,i.jsx)(t.a,{href:"/styles/style-props/",children:"style props"}),",\nyou can pass an object with values for different breakpoints:"]}),"\n",(0,i.jsx)(o,{data:u.f}),"\n",(0,i.jsx)(t.h2,{id:"container-queries",children:"Container queries"}),"\n",(0,i.jsxs)(t.p,{children:["To use ",(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",children:"container queries"}),"\ninstead of media queries, set ",(0,i.jsx)(t.code,{children:'type="container"'}),". With container queries, slides size and gap\nwill be adjusted based on the container width, not the viewport width."]}),"\n",(0,i.jsxs)(t.p,{children:["Note that, when using container queries, ",(0,i.jsx)(t.code,{children:"slideSize"})," and ",(0,i.jsx)(t.code,{children:"slideGap"})," props cannot\nreference ",(0,i.jsx)(t.code,{children:"theme.breakpoints"})," values in keys. It is required to use exact px or em values."]}),"\n",(0,i.jsx)(t.p,{children:"To see how the slides size and gap changes, resize the root element of the demo\nwith the resize handle located at the bottom right corner of the demo:"}),"\n",(0,i.jsx)(o,{data:m.k}),"\n",(0,i.jsx)(t.h2,{id:"drag-free",children:"Drag free"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"dragFree"})," will disable slides snap points – user will be able to stop dragging at any position:"]}),"\n",(0,i.jsx)(o,{data:p}),"\n",(0,i.jsx)(t.h2,{id:"vertical-orientation",children:"Vertical orientation"}),"\n",(0,i.jsxs)(t.p,{children:["Carousel with ",(0,i.jsx)(t.code,{children:'orientation="vertical"'})," requires ",(0,i.jsx)(t.code,{children:"height"})," prop to be set:"]}),"\n",(0,i.jsx)(o,{data:h}),"\n",(0,i.jsx)(t.h2,{id:"controls-icons",children:"Controls icons"}),"\n",(0,i.jsx)(t.p,{children:"You can replace default next/previous controls icons with any React nodes:"}),"\n",(0,i.jsx)(o,{data:g}),"\n",(0,i.jsx)(t.h2,{id:"100-height",children:"100% height"}),"\n",(0,i.jsxs)(t.p,{children:["Set ",(0,i.jsx)(t.code,{children:'height="100%"'})," to make Carousel take 100% height of the container. Note that in this case:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["container element must have ",(0,i.jsx)(t.code,{children:"display: flex"})," styles"]}),"\n",(0,i.jsxs)(t.li,{children:["carousel root element must have ",(0,i.jsx)(t.code,{children:"flex: 1"})," styles"]}),"\n",(0,i.jsx)(t.li,{children:"container element must have fixed height"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"import { Carousel } from '@mantine/carousel';\n\nexport function PercentageHeight() {\n  return (\n    <div style={{ height: 400, display: 'flex' }}>\n      <Carousel withIndicators height=\"100%\" flex={1}>\n        <Carousel.Slide>1</Carousel.Slide>\n        <Carousel.Slide>2</Carousel.Slide>\n        <Carousel.Slide>3</Carousel.Slide>\n      </Carousel>\n    </div>\n  );\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"get-embla-instance",children:"Get embla instance"}),"\n",(0,i.jsxs)(t.p,{children:["You can get ",(0,i.jsx)(t.a,{href:"https://www.embla-carousel.com/api/methods/",children:"embla instance"})," with ",(0,i.jsx)(t.code,{children:"getEmblaApi"})," prop.\nYou will be able enhance carousel with additional logic after that using embla api methods:"]}),"\n",(0,i.jsx)(o,{data:y}),"\n",(0,i.jsx)(t.h2,{id:"embla-plugins",children:"Embla plugins"}),"\n",(0,i.jsxs)(t.p,{children:["Set ",(0,i.jsx)(t.code,{children:"plugins"})," prop to enhance carousel with ",(0,i.jsx)(t.a,{href:"https://www.embla-carousel.com/plugins/",children:"embla plugins"}),".\nNote that plugins are not installed with ",(0,i.jsx)(t.code,{children:"@mantine/carousel"})," package and you will need to\ninstall them on your side."]}),"\n",(0,i.jsxs)(t.p,{children:["Example with ",(0,i.jsx)(t.a,{href:"https://www.embla-carousel.com/plugins/autoplay/",children:"autoplay plugin"}),":"]}),"\n",(0,i.jsx)(a,{packages:"embla-carousel-autoplay@^8.5.2"}),"\n",(0,i.jsx)(o,{data:S}),"\n",(0,i.jsx)(s,{component:"Carousel"}),"\n",(0,i.jsx)(o,{data:M}),"\n",(0,i.jsx)(t.h2,{id:"indicator-styles",children:"Indicator styles"}),"\n",(0,i.jsx)(o,{data:z}),"\n",(0,i.jsx)(t.h2,{id:"hide-inactive-controls",children:"Hide inactive controls"}),"\n",(0,i.jsx)(o,{data:N}),"\n",(0,i.jsx)(t.h2,{id:"show-controls-on-hover",children:"Show controls on hover"}),"\n",(0,i.jsx)(o,{data:G}),"\n",(0,i.jsx)(t.h2,{id:"example-images-carousel",children:"Example: Images carousel"}),"\n",(0,i.jsx)(o,{data:F}),"\n",(0,i.jsx)(t.h2,{id:"example-cards-carousel",children:"Example: Cards carousel"}),"\n",(0,i.jsx)(o,{data:R})]})}function Q(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(U,{...e,children:(0,i.jsx)(X,{...e})})}function Z(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},43741:(e,t,o)=>{"use strict";o.d(t,{k:()=>s});var i=o(31085),n=o(64893),a=o(12946);let s={type:"code",component:function(){return(0,i.jsx)("div",{style:{resize:"horizontal",overflow:"hidden",maxWidth:"100%",minWidth:250,padding:10},children:(0,i.jsx)(n.F,{withIndicators:!0,height:200,type:"container",slideSize:{base:"100%","300px":"50%","500px":"33.333333%"},slideGap:{base:0,"300px":"md","500px":"lg"},emblaOptions:{loop:!0,align:"start"},children:(0,i.jsx)(a.t,{count:6})})})},code:`
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
`}}},e=>{var t=t=>e(e.s=t);e.O(0,[84181,18675,48833,90636,46593,38792],()=>t(60415)),_N_E=e.O()}]);