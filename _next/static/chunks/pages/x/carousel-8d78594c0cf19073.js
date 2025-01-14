(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38162],{21396:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/x/carousel",function(){return o(5347)}])},5347:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return U}});var i=o(52322),a=o(45392),s=o(18451),n=o(41452);let r={type:"code",component:function(){return(0,i.jsx)(s.l,{withIndicators:!0,height:200,children:(0,i.jsx)(n.M,{count:5})})},code:`
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
`,centered:!0,maxWidth:320},l={type:"configurator",component:function(e){return(0,i.jsx)(s.l,{height:200,slideSize:"70%",...e,children:(0,i.jsx)(n.M,{count:5})})},code:`
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel slideSize="70%" height={200}{{props}}>
      {/* ...slides */}
    </Carousel>
  );
}
`,centered:!0,maxWidth:"100%",controls:[{prop:"align",type:"segmented",initialValue:"center",libraryValue:"center",data:[{label:"Start",value:"start"},{label:"Center",value:"center"},{label:"End",value:"end"}]},{prop:"orientation",type:"segmented",initialValue:"horizontal",libraryValue:"horizontal",data:[{label:"Horizontal",value:"horizontal"},{label:"Vertical",value:"vertical"}]},{prop:"slideGap",type:"size",initialValue:"md",libraryValue:"__"},{prop:"controlsOffset",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"controlSize",type:"number",min:14,max:40,initialValue:26,libraryValue:26},{prop:"loop",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"dragFree",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"draggable",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"withControls",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"withIndicators",type:"boolean",initialValue:!1,libraryValue:!1}]},c={type:"code",component:function(){return(0,i.jsx)(s.l,{withIndicators:!0,height:200,slideSize:"33.333333%",slideGap:"md",loop:!0,align:"start",slidesToScroll:3,children:(0,i.jsx)(n.M,{count:12})})},code:`
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
`};var d=o(21607),u=o(93844);let m={type:"code",component:function(){return(0,i.jsx)(s.l,{withIndicators:!0,height:200,dragFree:!0,slideGap:"md",align:"start",children:(0,i.jsx)(n.M,{count:5})})},code:`
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
`,centered:!0,maxWidth:320},h={type:"code",component:function(){return(0,i.jsx)(s.l,{orientation:"vertical",height:200,withIndicators:!0,children:(0,i.jsx)(n.M,{count:5})})},code:`
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
`,centered:!0,maxWidth:320};var p=o(10631),f=o(66041);let x={type:"code",component:function(){return(0,i.jsx)(s.l,{height:180,nextControlIcon:(0,i.jsx)(p.Z,{size:16}),previousControlIcon:(0,i.jsx)(f.Z,{size:16}),children:(0,i.jsx)(n.M,{count:5})})},code:`
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
`,centered:!0,maxWidth:320};var g=o(2784),b=o(45757);let w={type:"code",component:function(){let[e,t]=(0,g.useState)(0),[o,a]=(0,g.useState)(null),r=(0,g.useCallback)(()=>{o&&t(100*Math.max(0,Math.min(1,o.scrollProgress())))},[o,t]);return(0,g.useEffect)(()=>{o&&(o.on("scroll",r),r())},[o]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.l,{dragFree:!0,slideSize:"50%",slideGap:"md",height:200,getEmblaApi:a,initialSlide:2,children:(0,i.jsx)(n.M,{count:12})}),(0,i.jsx)(b.E,{value:e,maw:320,size:"sm",mt:"xl",mx:"auto"})]})},code:`
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
`};var C=o(68745),j={active:!0,breakpoints:{},delay:4e3,jump:!1,playOnInit:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function y(e){var t,o,i,a=C.Z.optionsHandler(),s=a.merge(j,y.globalOptions),n=0,r=!1;function l(){o.off("pointerDown",i),t.stopOnInteraction||o.off("pointerUp",u),d(),n=0}function c(e){d(),void 0!==e&&(r=e),n=window.setTimeout(m,t.delay)}function d(){n&&window.clearTimeout(n)}function u(){n&&(d(),c())}function m(){var e=o.internalEngine().index;if(t.stopOnLastSnap&&e.get()===e.max)return l();o.canScrollNext()?o.scrollNext(r):o.scrollTo(0,r),c()}var h={name:"autoplay",options:a.merge(s,e),init:function(e){o=e,r=(t=a.atMedia(h.options)).jump,i=t.stopOnInteraction?l:d;var s=o.internalEngine().eventStore,n=o.rootNode(),m=t.rootNode&&t.rootNode(n)||n;o.on("pointerDown",i),t.stopOnInteraction||o.on("pointerUp",u),t.stopOnMouseEnter&&(s.add(m,"mouseenter",i),t.stopOnInteraction||s.add(m,"mouseleave",u)),s.add(document,"visibilitychange",function(){if("hidden"===document.visibilityState)return d();u()}),s.add(window,"pagehide",function(e){e.persisted&&d()}),t.playOnInit&&c()},destroy:l,play:c,stop:d,reset:u};return h}y.globalOptions=void 0;let S={type:"code",component:function(){let e=(0,g.useRef)(y({delay:2e3}));return(0,i.jsx)(s.l,{withIndicators:!0,height:200,plugins:[e.current],onMouseEnter:e.current.stop,onMouseLeave:e.current.reset,children:(0,i.jsx)(n.M,{count:5})})},code:`
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
`,centered:!0,maxWidth:320};var v=o(34052);let M=`
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel withIndicators height={200}{{props}}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
    </Carousel>
  );
}
`,D={type:"styles-api",data:v.J,component:function(e){return(0,i.jsx)(s.l,{withIndicators:!0,height:200,...e,children:(0,i.jsx)(n.M,{count:2})})},code:M,centered:!0,maxWidth:"100%"};var I={indicator:"m_4fe518f6"};let N={type:"code",component:function(){return(0,i.jsx)(s.l,{withIndicators:!0,height:200,classNames:I,children:(0,i.jsx)(n.M,{count:5})})},code:[{fileName:"Demo.tsx",code:`
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
}`,language:"scss"}],centered:!0,maxWidth:320};var z={control:"m_bf2c70c5"};let A={type:"code",component:function(){return(0,i.jsx)(s.l,{height:200,classNames:z,children:(0,i.jsx)(n.M,{count:5})})},code:[{fileName:"Demo.tsx",code:`
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
`,language:"scss"}],centered:!0,maxWidth:320};var E={controls:"m_78ad357a",root:"m_f45b71a6"};let k={type:"code",component:function(){return(0,i.jsx)(s.l,{height:200,classNames:E,children:(0,i.jsx)(n.M,{count:5})})},code:[{fileName:"Demo.tsx",code:`
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
}`,language:"scss"}],centered:!0,maxWidth:320};var H=o(43076);let B=["https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png"],O={type:"code",component:function(){let e=B.map(e=>(0,i.jsx)(s.l.Slide,{children:(0,i.jsx)(H.E,{src:e})},e));return(0,i.jsx)(s.l,{withIndicators:!0,children:e})},code:`
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
`,maxWidth:320,centered:!0};var G=o(46285),T=o(39629),V=o(31946);let W={type:"code",component:function(){let[e,t]=(0,g.useState)(!1);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(T.z,{onClick:()=>t(!0),children:"Open carousel with broken offset"}),(0,i.jsx)(V.u,{opened:e,size:300,padding:0,transitionProps:{duration:200},withCloseButton:!1,onClose:()=>t(!1),children:(0,i.jsxs)(s.l,{loop:!0,maw:300,children:[(0,i.jsx)(s.l.Slide,{children:(0,i.jsx)("img",{src:"https://cataas.com/cat",alt:"",style:{width:300,height:200,objectFit:"cover"}})}),(0,i.jsx)(s.l.Slide,{children:(0,i.jsx)("img",{src:"https://cataas.com/cat/cute",alt:"",style:{width:300,height:200,objectFit:"cover"}})}),(0,i.jsx)(s.l.Slide,{children:(0,i.jsx)("img",{src:"https://cataas.com/cat/angry",alt:"",style:{width:300,height:200,objectFit:"cover"}})})]})})]})},code:`
import { useState } from 'react';
import { Button, Modal } from '@mantine/core';
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
              style={{ width: 300, height: 200, objectFit: 'cover' }}
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              src="https://cataas.com/cat/cute"
              alt="Cat"
              style={{ width: 300, height: 200, objectFit: 'cover' }}
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              src="https://cataas.com/cat/angry"
              alt="Cat"
              style={{ width: 300, height: 200, objectFit: 'cover' }}
            />
          </Carousel.Slide>
        </Carousel>
      </Modal>
    </>
  );
}
`,centered:!0};var _=o(62563);let F={type:"code",component:function(){let[e,t]=(0,g.useState)(!1),[o,a]=(0,g.useState)(null);return(0,_.D)(o,200),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(T.z,{onClick:()=>t(!0),children:"Open modal with carousel"}),(0,i.jsx)(V.u,{opened:e,size:300,padding:0,transitionProps:{duration:200},withCloseButton:!1,onClose:()=>t(!1),children:(0,i.jsxs)(s.l,{loop:!0,getEmblaApi:a,maw:300,children:[(0,i.jsx)(s.l.Slide,{children:(0,i.jsx)("img",{src:"https://cataas.com/cat",alt:"Cat",style:{width:300,height:200,objectFit:"cover"}})}),(0,i.jsx)(s.l.Slide,{children:(0,i.jsx)("img",{src:"https://cataas.com/cat/cute",alt:"Cat",style:{width:300,height:200,objectFit:"cover"}})}),(0,i.jsx)(s.l.Slide,{children:(0,i.jsx)("img",{src:"https://cataas.com/cat/angry",alt:"Cat",style:{width:300,height:200,objectFit:"cover"}})})]})})]})},code:`
import { useState } from 'react';
import { Button, Modal } from '@mantine/core';
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
              style={{ width: 300, height: 200, objectFit: 'cover' }}
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              src="https://cataas.com/cat/cute"
              alt="Cat"
              style={{ width: 300, height: 200, objectFit: 'cover' }}
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              src="https://cataas.com/cat/angry"
              alt="Cat"
              style={{ width: 300, height: 200, objectFit: 'cover' }}
            />
          </Carousel.Slide>
        </Carousel>
      </Modal>
    </>
  );
}
`,centered:!0};var q=o(54078),R=o(15019);let P=(0,q.A)(R.us.Carousel);function Y(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components},{Demo:o,InstallScript:s,StylesApiSelectors:n}=t;return o||L("Demo",!0),s||L("InstallScript",!0),n||L("StylesApiSelectors",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(s,{packages:"embla-carousel-react@^7.1.0 @mantine/carousel"}),"\n",(0,i.jsx)(t.p,{children:"After installation import package styles at the root of your application:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"import '@mantine/carousel/styles.css';\n"})}),"\n",(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"@mantine/carousel"})," package is based on ",(0,i.jsx)(t.a,{href:"https://www.embla-carousel.com/",children:"embla carousel"}),",\nit supports most of its features:"]}),"\n",(0,i.jsx)(o,{data:r}),"\n",(0,i.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,i.jsx)(o,{data:l}),"\n",(0,i.jsx)(t.h2,{id:"size-and-gap",children:"Size and gap"}),"\n",(0,i.jsxs)(t.p,{children:["Set ",(0,i.jsx)(t.code,{children:"slideSize"})," and ",(0,i.jsx)(t.code,{children:"slideGap"})," on ",(0,i.jsx)(t.code,{children:"Carousel"})," component to control size and gap of every slide:"]}),"\n",(0,i.jsx)(o,{data:c}),"\n",(0,i.jsx)(t.h2,{id:"responsive-styles",children:"Responsive styles"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"slideSize"})," and ",(0,i.jsx)(t.code,{children:"slideGap"})," props work the same way as ",(0,i.jsx)(t.a,{href:"/styles/style-props/",children:"style props"}),",\nyou can pass an object with values for different breakpoints:"]}),"\n",(0,i.jsx)(o,{data:d.A}),"\n",(0,i.jsx)(t.h2,{id:"container-queries",children:"Container queries"}),"\n",(0,i.jsxs)(t.p,{children:["To use ",(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",children:"container queries"}),"\ninstead of media queries, set ",(0,i.jsx)(t.code,{children:'type="container"'}),". With container queries, slides size and gap\nwill be adjusted based on the container width, not the viewport width."]}),"\n",(0,i.jsxs)(t.p,{children:["Note that, when using container queries, ",(0,i.jsx)(t.code,{children:"slideSize"})," and ",(0,i.jsx)(t.code,{children:"slideGap"})," props cannot\nreference ",(0,i.jsx)(t.code,{children:"theme.breakpoints"})," values in keys. It is required to use exact px or em values."]}),"\n",(0,i.jsx)(t.p,{children:"To see how the slides size and gap changes, resize the root element of the demo\nwith the resize handle located at the bottom right corner of the demo:"}),"\n",(0,i.jsx)(o,{data:u.n}),"\n",(0,i.jsx)(t.h2,{id:"drag-free",children:"Drag free"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"dragFree"})," will disable slides snap points – user will be able to stop dragging at any position:"]}),"\n",(0,i.jsx)(o,{data:m}),"\n",(0,i.jsx)(t.h2,{id:"vertical-orientation",children:"Vertical orientation"}),"\n",(0,i.jsxs)(t.p,{children:["Carousel with ",(0,i.jsx)(t.code,{children:'orientation="vertical"'})," requires ",(0,i.jsx)(t.code,{children:"height"})," prop to be set:"]}),"\n",(0,i.jsx)(o,{data:h}),"\n",(0,i.jsx)(t.h2,{id:"controls-icons",children:"Controls icons"}),"\n",(0,i.jsx)(t.p,{children:"You can replace default next/previous controls icons with any React nodes:"}),"\n",(0,i.jsx)(o,{data:x}),"\n",(0,i.jsx)(t.h2,{id:"100-height",children:"100% height"}),"\n",(0,i.jsxs)(t.p,{children:["Set ",(0,i.jsx)(t.code,{children:'height="100%"'})," to make Carousel take 100% height of the container. Note that in this case:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["container element must have ",(0,i.jsx)(t.code,{children:"display: flex"})," styles"]}),"\n",(0,i.jsxs)(t.li,{children:["carousel root element must have ",(0,i.jsx)(t.code,{children:"flex: 1"})," styles"]}),"\n",(0,i.jsx)(t.li,{children:"container element must have fixed height"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"import { Carousel } from '@mantine/carousel';\n\nexport function PercentageHeight() {\n  return (\n    <div style={{ height: 400, display: 'flex' }}>\n      <Carousel withIndicators height=\"100%\" style={{ flex: 1 }}>\n        <Carousel.Slide>1</Carousel.Slide>\n        <Carousel.Slide>2</Carousel.Slide>\n        <Carousel.Slide>3</Carousel.Slide>\n      </Carousel>\n    </div>\n  );\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"get-embla-instance",children:"Get embla instance"}),"\n",(0,i.jsxs)(t.p,{children:["You can get ",(0,i.jsx)(t.a,{href:"https://www.embla-carousel.com/api/methods/",children:"embla instance"})," with ",(0,i.jsx)(t.code,{children:"getEmblaApi"})," prop.\nYou will be able enhance carousel with additional logic after that using embla api methods:"]}),"\n",(0,i.jsx)(o,{data:w}),"\n",(0,i.jsx)(t.h2,{id:"embla-plugins",children:"Embla plugins"}),"\n",(0,i.jsxs)(t.p,{children:["Set ",(0,i.jsx)(t.code,{children:"plugins"})," prop to enhance carousel with ",(0,i.jsx)(t.a,{href:"https://www.embla-carousel.com/plugins/",children:"embla plugins"}),".\nNote that plugins are not installed with ",(0,i.jsx)(t.code,{children:"@mantine/carousel"})," package and you will need to\ninstall them on your side."]}),"\n",(0,i.jsxs)(t.p,{children:["Example with ",(0,i.jsx)(t.a,{href:"https://www.embla-carousel.com/plugins/autoplay/",children:"autoplay plugin"}),":"]}),"\n",(0,i.jsx)(s,{packages:"embla-carousel-autoplay@^7.1.0"}),"\n",(0,i.jsx)(o,{data:S}),"\n",(0,i.jsx)(n,{component:"Carousel"}),"\n",(0,i.jsx)(o,{data:D}),"\n",(0,i.jsx)(t.h2,{id:"indicator-styles",children:"Indicator styles"}),"\n",(0,i.jsx)(o,{data:N}),"\n",(0,i.jsx)(t.h2,{id:"hide-inactive-controls",children:"Hide inactive controls"}),"\n",(0,i.jsx)(o,{data:A}),"\n",(0,i.jsx)(t.h2,{id:"show-controls-on-hover",children:"Show controls on hover"}),"\n",(0,i.jsx)(o,{data:k}),"\n",(0,i.jsx)(t.h2,{id:"example-images-carousel",children:"Example: Images carousel"}),"\n",(0,i.jsx)(o,{data:O}),"\n",(0,i.jsx)(t.h2,{id:"example-cards-carousel",children:"Example: Cards carousel"}),"\n",(0,i.jsx)(o,{data:G._u}),"\n",(0,i.jsx)(t.h2,{id:"carousel-container-animation-offset",children:"Carousel container animation offset"}),"\n",(0,i.jsx)(t.p,{children:"Embla carousel only reads slides positions and sizes upon initialization. When you are using Carousel\ncomponent inside animated component you may experience an issue with incorrect slides offset after\nanimation finishes."}),"\n",(0,i.jsx)(t.p,{children:"Example of incorrect slides offset calculation (scroll though slides):"}),"\n",(0,i.jsx)(o,{data:W}),"\n",(0,i.jsxs)(t.p,{children:["To solve this issue use ",(0,i.jsx)(t.code,{children:"useAnimationOffsetEffect"})," hook exported from ",(0,i.jsx)(t.code,{children:"@mantine/carousel"})," package.\nIt accepts embla instance as first argument and transition duration as second:"]}),"\n",(0,i.jsx)(o,{data:F})]})}function U(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(P,{...e,children:(0,i.jsx)(Y,{...e})})}function L(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},46285:function(e,t,o){"use strict";o.d(t,{P7:function(){return h},_u:function(){return p}});var i=o(52322),a=o(18451),s=o(1198),n=o(8582),r=o(94120),l=o(39629),c=o(68755),d=o(27780);let u=[{image:"https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Best forests to visit in North America",category:"nature"},{image:"https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Hawaii beaches review: better than you think",category:"beach"},{image:"https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Mountains at night: 12 best locations to enjoy the view",category:"nature"},{image:"https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Aurora in Norway: when to visit for best experience",category:"nature"},{image:"https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Best places to visit this winter",category:"tourism"},{image:"https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Active volcanos reviews: travel at your own risk",category:"nature"}];function m({image:e,title:t,category:o}){return(0,i.jsxs)(s.X,{shadow:"md",p:"xl",radius:"md",style:{backgroundImage:`url(${e})`},className:"m_819023b7",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(n.x,{className:"m_3481ba25",size:"xs",children:o}),(0,i.jsx)(r.D,{order:3,className:"m_b1678e91",children:t})]}),(0,i.jsx)(l.z,{variant:"white",color:"dark",children:"Read article"})]})}function h(e){let t=(0,c.rZ)(),o=(0,d.a)(`(max-width: ${t.breakpoints.sm})`),s=u.map(e=>(0,i.jsx)(a.l.Slide,{children:(0,i.jsx)(m,{...e})},e.title));return(0,i.jsx)(a.l,{slideSize:{base:"100%",sm:"50%"},slideGap:{base:"xl",sm:2},align:"start",slidesToScroll:o?1:2,...e,children:s})}let p={type:"code",component:h,code:[{fileName:"Demo.tsx",code:`
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
`,language:"scss"}]}},93844:function(e,t,o){"use strict";o.d(t,{n:function(){return c}});var i=o(52322),a=o(2784),s=o(18451),n=o(88916),r=o(64006),l=o(41452);let c={type:"code",component:function(){let[e,t]=(0,a.useState)(null),o=(0,n.h)(),c=(0,r.y)(()=>e?.reInit(),10);return(0,a.useEffect)(()=>{e&&c()},[c,e,o.width]),(0,i.jsx)("div",{ref:o.ref,style:{resize:"horizontal",overflow:"hidden",maxWidth:"100%",minWidth:250,padding:10},children:(0,i.jsx)(s.l,{getEmblaApi:t,withIndicators:!0,height:200,type:"container",slideSize:{base:"100%","300px":"50%","500px":"33.333333%"},slideGap:{base:0,"300px":"md","500px":"lg"},loop:!0,align:"start",children:(0,i.jsx)(l.M,{count:6})})})},code:`
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
        loop
        align="start"
      >
        <Carousel.Slide>1</Carousel.Slide>
        <Carousel.Slide>2</Carousel.Slide>
        <Carousel.Slide>3</Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
    </div>
  );
}
`}},62563:function(e,t,o){"use strict";o.d(t,{D:function(){return a}});var i=o(2784);function a(e,t){(0,i.useEffect)(()=>{e&&window.setTimeout(()=>{e.reInit()},t)},[e,t])}},88916:function(e,t,o){"use strict";o.d(t,{h:function(){return n},y:function(){return s}});var i=o(2784);let a={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};function s(e){let t=(0,i.useRef)(0),o=(0,i.useRef)(null),[s,n]=(0,i.useState)(a),r=(0,i.useMemo)(()=>"undefined"!=typeof window?new ResizeObserver(e=>{let i=e[0];i&&(cancelAnimationFrame(t.current),t.current=requestAnimationFrame(()=>{o.current&&n(i.contentRect)}))}):null,[]);return(0,i.useEffect)(()=>(o.current&&r?.observe(o.current,e),()=>{r?.disconnect(),t.current&&cancelAnimationFrame(t.current)}),[o.current]),[o,s]}function n(e){let[t,{width:o,height:i}]=s(e);return{ref:t,width:o,height:i}}}},function(e){e.O(0,[61177,26601,66748,61639,82605,92888,49774,40179],function(){return e(e.s=21396)}),_N_E=e.O()}]);