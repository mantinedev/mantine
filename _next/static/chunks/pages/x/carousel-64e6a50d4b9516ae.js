(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38162],{21396:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/x/carousel",function(){return o(5347)}])},5347:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return el}});var a=o(52322),i=o(45392),s=o(18451),r=o(41452);let n=`
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
`,l={type:"code",component:function(){return(0,a.jsx)(s.l,{withIndicators:!0,height:200,children:(0,a.jsx)(r.M,{count:5})})},code:n,centered:!0,maxWidth:320},c=`
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel slideSize="70%" height={200}{{props}}>
      {/* ...slides */}
    </Carousel>
  );
}
`,d={type:"configurator",component:function(e){return(0,a.jsx)(s.l,{height:200,slideSize:"70%",...e,children:(0,a.jsx)(r.M,{count:5})})},code:c,centered:!0,maxWidth:"100%",controls:[{prop:"align",type:"segmented",initialValue:"center",libraryValue:"center",data:[{label:"Start",value:"start"},{label:"Center",value:"center"},{label:"End",value:"end"}]},{prop:"orientation",type:"segmented",initialValue:"horizontal",libraryValue:"horizontal",data:[{label:"Horizontal",value:"horizontal"},{label:"Vertical",value:"vertical"}]},{prop:"slideGap",type:"size",initialValue:"md",libraryValue:"__"},{prop:"controlsOffset",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"controlSize",type:"number",min:14,max:40,initialValue:26,libraryValue:26},{prop:"loop",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"dragFree",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"draggable",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"withControls",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"withIndicators",type:"boolean",initialValue:!1,libraryValue:!1}]},u=`
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel
      withIndicators
      height={200}
      slideSize="33.333333%"
      slideGap="md"
      loop
      align="start"
      slidesToScroll={3}
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`,m={type:"code",component:function(){return(0,a.jsx)(s.l,{withIndicators:!0,height:200,slideSize:"33.333333%",slideGap:"md",loop:!0,align:"start",slidesToScroll:3,children:(0,a.jsx)(r.M,{count:12})})},code:u};var h=o(21607);let p=`
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel withIndicators height={200} dragFree slideGap="md" align="start">
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`,f={type:"code",component:function(){return(0,a.jsx)(s.l,{withIndicators:!0,height:200,dragFree:!0,slideGap:"md",align:"start",children:(0,a.jsx)(r.M,{count:5})})},code:p,centered:!0,maxWidth:320},x=`
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
`,g={type:"code",component:function(){return(0,a.jsx)(s.l,{orientation:"vertical",height:200,withIndicators:!0,children:(0,a.jsx)(r.M,{count:5})})},code:x,centered:!0,maxWidth:320};var b=o(4521),w=o(8113),C=o(58898);let j=`
import { rem } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

function Demo() {
  return (
    <Carousel
      height={180}
      nextControlIcon={<IconArrowRight style={{ width: rem(16), height: rem(16) }} />}
      previousControlIcon={<IconArrowLeft style={{ width: rem(16), height: rem(16) }} />}
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`,y={type:"code",component:function(){return(0,a.jsx)(s.l,{height:180,nextControlIcon:(0,a.jsx)(b.Z,{style:{width:(0,C.h)(16),height:(0,C.h)(16)}}),previousControlIcon:(0,a.jsx)(w.Z,{style:{width:(0,C.h)(16),height:(0,C.h)(16)}}),children:(0,a.jsx)(r.M,{count:5})})},code:j,centered:!0,maxWidth:320};var S=o(2784),v=o(45757);let M=`
import { useCallback, useEffect, useState } from 'react';
import { Carousel, Embla } from '@mantine/carousel';
import { Progress } from '@mantine/core';

function Demo() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState<Embla | null>(null);

  const handleScroll = useCallback(() => {
    if (!embla) return;
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
        dragFree
        slideSize="50%"
        slideGap="md"
        height={200}
        getEmblaApi={setEmbla}
        initialSlide={2}
      >
        <Carousel.Slide>1</Carousel.Slide>
        <Carousel.Slide>2</Carousel.Slide>
        <Carousel.Slide>3</Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
      <Progress
        value={scrollProgress}
        maw={320}
        size="sm"
        mt="xl"
        mx="auto"
      />
    </>
  );
}
`,D={type:"code",component:function(){let[e,t]=(0,S.useState)(0),[o,i]=(0,S.useState)(null),n=(0,S.useCallback)(()=>{if(!o)return;let e=Math.max(0,Math.min(1,o.scrollProgress()));t(100*e)},[o,t]);return(0,S.useEffect)(()=>{o&&(o.on("scroll",n),n())},[o]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.l,{dragFree:!0,slideSize:"50%",slideGap:"md",height:200,getEmblaApi:i,initialSlide:2,children:(0,a.jsx)(r.M,{count:12})}),(0,a.jsx)(v.E,{value:e,maw:320,size:"sm",mt:"xl",mx:"auto"})]})},code:M};var I=o(68745),N={active:!0,breakpoints:{},delay:4e3,jump:!1,playOnInit:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function A(e){var t,o,a,i=I.Z.optionsHandler(),s=i.merge(N,A.globalOptions),r=0,n=!1;function l(){o.off("pointerDown",a),t.stopOnInteraction||o.off("pointerUp",u),d(),r=0}function c(e){d(),void 0!==e&&(n=e),r=window.setTimeout(m,t.delay)}function d(){r&&window.clearTimeout(r)}function u(){r&&(d(),c())}function m(){var e=o.internalEngine().index;if(t.stopOnLastSnap&&e.get()===e.max)return l();o.canScrollNext()?o.scrollNext(n):o.scrollTo(0,n),c()}var h={name:"autoplay",options:i.merge(s,e),init:function(e){o=e,n=(t=i.atMedia(h.options)).jump,a=t.stopOnInteraction?l:d;var s=o.internalEngine().eventStore,r=o.rootNode(),m=t.rootNode&&t.rootNode(r)||r;o.on("pointerDown",a),t.stopOnInteraction||o.on("pointerUp",u),t.stopOnMouseEnter&&(s.add(m,"mouseenter",a),t.stopOnInteraction||s.add(m,"mouseleave",u)),s.add(document,"visibilitychange",function(){if("hidden"===document.visibilityState)return d();u()}),s.add(window,"pagehide",function(e){e.persisted&&d()}),t.playOnInit&&c()},destroy:l,play:c,stop:d,reset:u};return h}A.globalOptions=void 0;let E=`
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';

function Demo() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Carousel
      withIndicators
      height={200}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`,H={type:"code",component:function(){let e=(0,S.useRef)(A({delay:2e3}));return(0,a.jsx)(s.l,{withIndicators:!0,height:200,plugins:[e.current],onMouseEnter:e.current.stop,onMouseLeave:e.current.reset,children:(0,a.jsx)(r.M,{count:5})})},code:E,centered:!0,maxWidth:320};var k=o(34052);let B=`
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel withIndicators height={200}{{props}}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
    </Carousel>
  );
}
`,O={type:"styles-api",data:k.J,component:function(e){return(0,a.jsx)(s.l,{withIndicators:!0,height:200,...e,children:(0,a.jsx)(r.M,{count:2})})},code:B,centered:!0,maxWidth:"100%"};var G={indicator:"m_4fe518f6"};let z=`
.indicator {
  width: 12px;
  height: 4px;
  transition: width 250ms ease;

  &[data-active] {
    width: 40px;
  }
}`,T=`
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
`,V={type:"code",component:function(){return(0,a.jsx)(s.l,{withIndicators:!0,height:200,classNames:G,children:(0,a.jsx)(r.M,{count:5})})},code:[{fileName:"Demo.tsx",code:T,language:"tsx"},{fileName:"Demo.module.css",code:z,language:"scss"}],centered:!0,maxWidth:320};var _={control:"m_bf2c70c5"};let W=`
.control {
  &[data-inactive] {
    opacity: 0;
    cursor: default;
  }
}
`,F=`
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
`,P={type:"code",component:function(){return(0,a.jsx)(s.l,{height:200,classNames:_,children:(0,a.jsx)(r.M,{count:5})})},code:[{fileName:"Demo.tsx",code:F,language:"tsx"},{fileName:"Demo.module.css",code:W,language:"scss"}],centered:!0,maxWidth:320};var R={controls:"m_78ad357a",root:"m_f45b71a6"};let Y=`.controls {
  transition: opacity 150ms ease;
  opacity: 0;
}

.root {
  &:hover {
    .controls {
      opacity: 1;
    }
  }
}`,q=`
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
`,U={type:"code",component:function(){return(0,a.jsx)(s.l,{height:200,classNames:R,children:(0,a.jsx)(r.M,{count:5})})},code:[{fileName:"Demo.tsx",code:q,language:"tsx"},{fileName:"Demo.module.css",code:Y,language:"scss"}],centered:!0,maxWidth:320};var Image=o(43076);let L=["https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png"],Z=`
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

  return <Carousel withIndicators>{slides}</Carousel>;
}
`,$={type:"code",component:function(){let e=L.map(e=>(0,a.jsx)(s.l.Slide,{children:(0,a.jsx)(Image.E,{src:e})},e));return(0,a.jsx)(s.l,{withIndicators:!0,children:e})},code:Z,maxWidth:320,centered:!0};var X=o(46285),Q=o(17115),J=o(78222);let K=`
import { useState } from 'react';
import { Button, Modal, rem } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

function Demo() {
  const TRANSITION_DURATION = 200;
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Button onClick={() => setOpened(true)}>Open carousel with broken offset</Button>
      <Modal
        opened={opened}
        size={300}
        padding={0}
        transitionProps={{ duration: TRANSITION_DURATION }}
        withCloseButton={false}
        onClose={() => setOpened(false)}
      >
        <Carousel loop maw={300}>
          <Carousel.Slide>
            <img
              src="https://cataas.com/cat"
              alt="Cat"
              style={{ width: rem(300), height: rem(200), objectFit: 'cover' }}
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              src="https://cataas.com/cat/cute"
              alt="Cat"
              style={{ width: rem(300), height: rem(200), objectFit: 'cover' }}
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              src="https://cataas.com/cat/angry"
              alt="Cat"
              style={{ width: rem(300), height: rem(200), objectFit: 'cover' }}
            />
          </Carousel.Slide>
        </Carousel>
      </Modal>
    </>
  );
}
`,ee={type:"code",component:function(){let[e,t]=(0,S.useState)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Q.z,{onClick:()=>t(!0),children:"Open carousel with broken offset"}),(0,a.jsx)(J.u,{opened:e,size:300,padding:0,transitionProps:{duration:200},withCloseButton:!1,onClose:()=>t(!1),children:(0,a.jsxs)(s.l,{loop:!0,maw:300,children:[(0,a.jsx)(s.l.Slide,{children:(0,a.jsx)("img",{src:"https://cataas.com/cat",alt:"",style:{width:(0,C.h)(300),height:(0,C.h)(200),objectFit:"cover"}})}),(0,a.jsx)(s.l.Slide,{children:(0,a.jsx)("img",{src:"https://cataas.com/cat/cute",alt:"",style:{width:(0,C.h)(300),height:(0,C.h)(200),objectFit:"cover"}})}),(0,a.jsx)(s.l.Slide,{children:(0,a.jsx)("img",{src:"https://cataas.com/cat/angry",alt:"",style:{width:(0,C.h)(300),height:(0,C.h)(200),objectFit:"cover"}})})]})})]})},code:K,centered:!0};var et=o(62563);let eo=`
import { useState } from 'react';
import { Button, Modal, rem } from '@mantine/core';
import { Carousel, Embla, useAnimationOffsetEffect } from '@mantine/carousel';

function Demo() {
  const TRANSITION_DURATION = 200;
  const [opened, setOpened] = useState(false);
  const [embla, setEmbla] = useState<Embla | null>(null);

  useAnimationOffsetEffect(embla, TRANSITION_DURATION);

  return (
    <>
      <Button onClick={() => setOpened(true)}>Open modal with carousel</Button>
      <Modal
        opened={opened}
        size={300}
        padding={0}
        transitionProps={{ duration: TRANSITION_DURATION }}
        withCloseButton={false}
        onClose={() => setOpened(false)}
      >
        <Carousel loop getEmblaApi={setEmbla} maw={300}>
          <Carousel.Slide>
            <img
              src="https://cataas.com/cat"
              alt="Cat"
              style={{ width: rem(300), height: rem(200), objectFit: 'cover' }}
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              src="https://cataas.com/cat/cute"
              alt="Cat"
              style={{ width: rem(300), height: rem(200), objectFit: 'cover' }}
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              src="https://cataas.com/cat/angry"
              alt="Cat"
              style={{ width: rem(300), height: rem(200), objectFit: 'cover' }}
            />
          </Carousel.Slide>
        </Carousel>
      </Modal>
    </>
  );
}
`,ea={type:"code",component:function(){let[e,t]=(0,S.useState)(!1),[o,i]=(0,S.useState)(null);return(0,et.D)(o,200),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Q.z,{onClick:()=>t(!0),children:"Open modal with carousel"}),(0,a.jsx)(J.u,{opened:e,size:300,padding:0,transitionProps:{duration:200},withCloseButton:!1,onClose:()=>t(!1),children:(0,a.jsxs)(s.l,{loop:!0,getEmblaApi:i,maw:300,children:[(0,a.jsx)(s.l.Slide,{children:(0,a.jsx)("img",{src:"https://cataas.com/cat",alt:"Cat",style:{width:(0,C.h)(300),height:(0,C.h)(200),objectFit:"cover"}})}),(0,a.jsx)(s.l.Slide,{children:(0,a.jsx)("img",{src:"https://cataas.com/cat/cute",alt:"Cat",style:{width:(0,C.h)(300),height:(0,C.h)(200),objectFit:"cover"}})}),(0,a.jsx)(s.l.Slide,{children:(0,a.jsx)("img",{src:"https://cataas.com/cat/angry",alt:"Cat",style:{width:(0,C.h)(300),height:(0,C.h)(200),objectFit:"cover"}})})]})})]})},code:eo,centered:!0};var ei=o(79016),es=o(33638);let er=(0,ei.A)(es.us.Carousel);function en(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{Demo:o,InstallScript:s,StylesApiSelectors:r}=t;return o||ec("Demo",!0),s||ec("InstallScript",!0),r||ec("StylesApiSelectors",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(s,{packages:"embla-carousel-react@^7.1.0 @mantine/carousel"}),"\n",(0,a.jsx)(t.p,{children:"After installation import package styles at the root of your application:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import '@mantine/carousel/styles.css';\n"})}),"\n",(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"@mantine/carousel"})," package is based on ",(0,a.jsx)(t.a,{href:"https://www.embla-carousel.com/",children:"embla carousel"}),",\nit supports most of its features:"]}),"\n",(0,a.jsx)(o,{data:l}),"\n",(0,a.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,a.jsx)(o,{data:d}),"\n",(0,a.jsx)(t.h2,{id:"size-and-gap",children:"Size and gap"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"slideSize"})," and ",(0,a.jsx)(t.code,{children:"slideGap"})," on ",(0,a.jsx)(t.code,{children:"Carousel"})," component to control size and gap of every slide:"]}),"\n",(0,a.jsx)(o,{data:m}),"\n",(0,a.jsx)(t.h2,{id:"responsive-styles",children:"Responsive styles"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"slideSize"})," and ",(0,a.jsx)(t.code,{children:"slideGap"})," props work the same way as ",(0,a.jsx)(t.a,{href:"/styles/style-props/",children:"style props"}),",\nyou can pass an object with values for different breakpoints:"]}),"\n",(0,a.jsx)(o,{data:h.A}),"\n",(0,a.jsx)(t.h2,{id:"drag-free",children:"Drag free"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"dragFree"})," will disable slides snap points – user will be able to stop dragging at any position:"]}),"\n",(0,a.jsx)(o,{data:f}),"\n",(0,a.jsx)(t.h2,{id:"vertical-orientation",children:"Vertical orientation"}),"\n",(0,a.jsxs)(t.p,{children:["Carousel with ",(0,a.jsx)(t.code,{children:'orientation="vertical"'})," requires ",(0,a.jsx)(t.code,{children:"height"})," prop to be set:"]}),"\n",(0,a.jsx)(o,{data:g}),"\n",(0,a.jsx)(t.h2,{id:"controls-icons",children:"Controls icons"}),"\n",(0,a.jsx)(t.p,{children:"You can replace default next/previous controls icons with any React nodes:"}),"\n",(0,a.jsx)(o,{data:y}),"\n",(0,a.jsx)(t.h2,{id:"100-height",children:"100% height"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:'height="100%"'})," to make Carousel take 100% height of the container. Note that in this case:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["container element must have ",(0,a.jsx)(t.code,{children:"display: flex"})," styles"]}),"\n",(0,a.jsxs)(t.li,{children:["carousel root element must have ",(0,a.jsx)(t.code,{children:"flex: 1"})," styles"]}),"\n",(0,a.jsx)(t.li,{children:"container element must have fixed height"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { Carousel } from '@mantine/carousel';\n\nexport function PercentageHeight() {\n  return (\n    <div style={{ height: 400, display: 'flex' }}>\n      <Carousel withIndicators height=\"100%\" style={{ flex: 1 }}>\n        <Carousel.Slide>1</Carousel.Slide>\n        <Carousel.Slide>2</Carousel.Slide>\n        <Carousel.Slide>3</Carousel.Slide>\n      </Carousel>\n    </div>\n  );\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"get-embla-instance",children:"Get embla instance"}),"\n",(0,a.jsxs)(t.p,{children:["You can get ",(0,a.jsx)(t.a,{href:"https://www.embla-carousel.com/api/methods/",children:"embla instance"})," with ",(0,a.jsx)(t.code,{children:"getEmblaApi"})," prop.\nYou will be able enhance carousel with additional logic after that using embla api methods:"]}),"\n",(0,a.jsx)(o,{data:D}),"\n",(0,a.jsx)(t.h2,{id:"embla-plugins",children:"Embla plugins"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"plugins"})," prop to enhance carousel with ",(0,a.jsx)(t.a,{href:"https://www.embla-carousel.com/plugins/",children:"embla plugins"}),".\nNote that plugins are not installed with ",(0,a.jsx)(t.code,{children:"@mantine/carousel"})," package and you will need to\ninstall them on your side."]}),"\n",(0,a.jsxs)(t.p,{children:["Example with ",(0,a.jsx)(t.a,{href:"https://www.embla-carousel.com/plugins/autoplay/",children:"autoplay plugin"}),":"]}),"\n",(0,a.jsx)(s,{packages:"embla-carousel-autoplay@^7.1.0"}),"\n",(0,a.jsx)(o,{data:H}),"\n",(0,a.jsx)(r,{component:"Carousel"}),"\n",(0,a.jsx)(o,{data:O}),"\n",(0,a.jsx)(t.h2,{id:"indicator-styles",children:"Indicator styles"}),"\n",(0,a.jsx)(o,{data:V}),"\n",(0,a.jsx)(t.h2,{id:"hide-inactive-controls",children:"Hide inactive controls"}),"\n",(0,a.jsx)(o,{data:P}),"\n",(0,a.jsx)(t.h2,{id:"show-controls-on-hover",children:"Show controls on hover"}),"\n",(0,a.jsx)(o,{data:U}),"\n",(0,a.jsx)(t.h2,{id:"example-images-carousel",children:"Example: Images carousel"}),"\n",(0,a.jsx)(o,{data:$}),"\n",(0,a.jsx)(t.h2,{id:"example-cards-carousel",children:"Example: Cards carousel"}),"\n",(0,a.jsx)(o,{data:X._u}),"\n",(0,a.jsx)(t.h2,{id:"carousel-container-animation-offset",children:"Carousel container animation offset"}),"\n",(0,a.jsx)(t.p,{children:"Embla carousel only reads slides positions and sizes upon initialization. When you are using Carousel\ncomponent inside animated component you may experience an issue with incorrect slides offset after\nanimation finishes."}),"\n",(0,a.jsx)(t.p,{children:"Example of incorrect slides offset calculation (scroll though slides):"}),"\n",(0,a.jsx)(o,{data:ee}),"\n",(0,a.jsxs)(t.p,{children:["To solve this issue use ",(0,a.jsx)(t.code,{children:"useAnimationOffsetEffect"})," hook exported from ",(0,a.jsx)(t.code,{children:"@mantine/carousel"})," package.\nIt accepts embla instance as first argument and transition duration as second:"]}),"\n",(0,a.jsx)(o,{data:ea})]})}function el(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(er,{...e,children:(0,a.jsx)(en,{...e})})}function ec(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},46285:function(e,t,o){"use strict";o.d(t,{P7:function(){return p},_u:function(){return f}});var a=o(52322),i=o(18451),s=o(1198),Text=o(8582),r=o(94120),n=o(17115),l=o(68755),c=o(27780);let d=`.card {
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
`,u=`
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
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
}
`,m=[{image:"https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Best forests to visit in North America",category:"nature"},{image:"https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Hawaii beaches review: better than you think",category:"beach"},{image:"https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Mountains at night: 12 best locations to enjoy the view",category:"nature"},{image:"https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Aurora in Norway: when to visit for best experience",category:"nature"},{image:"https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Best places to visit this winter",category:"tourism"},{image:"https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Active volcanos reviews: travel at your own risk",category:"nature"}];function h({image:e,title:t,category:o}){return(0,a.jsxs)(s.X,{shadow:"md",p:"xl",radius:"md",style:{backgroundImage:`url(${e})`},className:"m_819023b7",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(Text.x,{className:"m_3481ba25",size:"xs",children:o}),(0,a.jsx)(r.D,{order:3,className:"m_b1678e91",children:t})]}),(0,a.jsx)(n.z,{variant:"white",color:"dark",children:"Read article"})]})}function p(e){let t=(0,l.rZ)(),o=(0,c.a)(`(max-width: ${t.breakpoints.sm})`),s=m.map(e=>(0,a.jsx)(i.l.Slide,{children:(0,a.jsx)(h,{...e})},e.title));return(0,a.jsx)(i.l,{slideSize:{base:"100%",sm:"50%"},slideGap:{base:"xl",sm:2},align:"start",slidesToScroll:o?1:2,...e,children:s})}let f={type:"code",component:p,code:[{fileName:"Demo.tsx",code:u,language:"tsx"},{fileName:"Demo.module.css",code:d,language:"scss"}]}},62563:function(e,t,o){"use strict";o.d(t,{D:function(){return i}});var a=o(2784);function i(e,t){(0,a.useEffect)(()=>{e&&window.setTimeout(()=>{e.reInit()},t)},[e,t])}}},function(e){e.O(0,[57938,26601,17454,47747,82605,49774,92888,40179],function(){return e(e.s=21396)}),_N_E=e.O()}]);