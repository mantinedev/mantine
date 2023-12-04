(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[148],{12192:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/others/carousel",function(){return a(18603)}])},18603:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return es}});var o=a(24246),r=a(71670),i=a(3916),l=a(30289),n=a(27378),s=a(61871),c=a(39202);let u=`
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
`,d={type:"code",component:function(){return n.createElement(s.l,{withIndicators:!0,height:200},n.createElement(c.M,{count:5}))},code:u,centered:!0,maxWidth:320},m=`
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel slideSize="70%" height={200}{{props}}>
      {/* ...slides */}
    </Carousel>
  );
}
`,h={type:"configurator",component:function(e){return n.createElement(s.l,{height:200,slideSize:"70%",...e},n.createElement(c.M,{count:5}))},code:m,centered:!0,maxWidth:"100%",controls:[{prop:"align",type:"segmented",initialValue:"center",libraryValue:"center",data:[{label:"Start",value:"start"},{label:"Center",value:"center"},{label:"End",value:"end"}]},{prop:"orientation",type:"segmented",initialValue:"horizontal",libraryValue:"horizontal",data:[{label:"Horizontal",value:"horizontal"},{label:"Vertical",value:"vertical"}]},{prop:"slideGap",type:"size",initialValue:"md",libraryValue:"__"},{prop:"controlsOffset",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"controlSize",type:"number",min:14,max:40,initialValue:26,libraryValue:26},{prop:"loop",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"dragFree",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"draggable",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"withControls",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"withIndicators",type:"boolean",initialValue:!1,libraryValue:!1}]},p=`
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
`,f={type:"code",component:function(){return n.createElement(s.l,{withIndicators:!0,height:200,slideSize:"33.333333%",slideGap:"md",loop:!0,align:"start",slidesToScroll:3},n.createElement(c.M,{count:12}))},code:p};var g=a(21836);let x=`
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
`,w={type:"code",component:function(){return n.createElement(s.l,{withIndicators:!0,height:200,dragFree:!0,slideGap:"md",align:"start"},n.createElement(c.M,{count:5}))},code:x,centered:!0,maxWidth:320},C=`
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
`,b={type:"code",component:function(){return n.createElement(s.l,{orientation:"vertical",height:200,withIndicators:!0},n.createElement(c.M,{count:5}))},code:C,centered:!0,maxWidth:320};var y=a(71078),S=a(4687),j=a(87393);let v=`
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
`,E={type:"code",component:function(){return n.createElement(s.l,{height:180,nextControlIcon:n.createElement(S.Z,{style:{width:(0,y.h)(16),height:(0,y.h)(16)}}),previousControlIcon:n.createElement(j.Z,{style:{width:(0,y.h)(16),height:(0,y.h)(16)}})},n.createElement(c.M,{count:5}))},code:v,centered:!0,maxWidth:320};var M=a(30454);let D=`
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
`,I={type:"code",component:function(){let[e,t]=(0,n.useState)(0),[a,o]=(0,n.useState)(null),r=(0,n.useCallback)(()=>{if(!a)return;let e=Math.max(0,Math.min(1,a.scrollProgress()));t(100*e)},[a,t]);return(0,n.useEffect)(()=>{a&&(a.on("scroll",r),r())},[a]),n.createElement(n.Fragment,null,n.createElement(s.l,{dragFree:!0,slideSize:"50%",slideGap:"md",height:200,getEmblaApi:o,initialSlide:2},n.createElement(c.M,{count:12})),n.createElement(M.E,{value:e,maw:320,size:"sm",mt:"xl",mx:"auto"}))},code:D};var N=a(22621),A={active:!0,breakpoints:{},delay:4e3,jump:!1,playOnInit:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function k(e){var t,a,o,r=N.Z.optionsHandler(),i=r.merge(A,k.globalOptions),l=0,n=!1;function s(){a.off("pointerDown",o),t.stopOnInteraction||a.off("pointerUp",d),u(),l=0}function c(e){u(),void 0!==e&&(n=e),l=window.setTimeout(m,t.delay)}function u(){l&&window.clearTimeout(l)}function d(){l&&(u(),c())}function m(){var e=a.internalEngine().index;if(t.stopOnLastSnap&&e.get()===e.max)return s();a.canScrollNext()?a.scrollNext(n):a.scrollTo(0,n),c()}var h={name:"autoplay",options:r.merge(i,e),init:function(e){a=e,n=(t=r.atMedia(h.options)).jump,o=t.stopOnInteraction?s:u;var i=a.internalEngine().eventStore,l=a.rootNode(),m=t.rootNode&&t.rootNode(l)||l;a.on("pointerDown",o),t.stopOnInteraction||a.on("pointerUp",d),t.stopOnMouseEnter&&(i.add(m,"mouseenter",o),t.stopOnInteraction||i.add(m,"mouseleave",d)),i.add(document,"visibilitychange",function(){if("hidden"===document.visibilityState)return u();d()}),i.add(window,"pagehide",function(e){e.persisted&&u()}),t.playOnInit&&c()},destroy:s,play:c,stop:u,reset:d};return h}k.globalOptions=void 0;let H=`
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
`,B={type:"code",component:function(){let e=(0,n.useRef)(k({delay:2e3}));return n.createElement(s.l,{withIndicators:!0,height:200,plugins:[e.current],onMouseEnter:e.current.stop,onMouseLeave:e.current.reset},n.createElement(c.M,{count:5}))},code:H,centered:!0,maxWidth:320};var O=a(23570);let G=`
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel withIndicators height={200}{{props}}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
    </Carousel>
  );
}
`,z={type:"styles-api",data:O.J,component:function(e){return n.createElement(s.l,{withIndicators:!0,height:200,...e},n.createElement(c.M,{count:2}))},code:G,centered:!0,maxWidth:"100%"};var T={indicator:"m-4fe518f6"};let V=`
.indicator {
  width: rem(12px);
  height: rem(4px);
  transition: width 250ms ease;

  &[data-active] {
    width: rem(40px);
  }
}`,W=`
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
`,F={type:"code",component:function(){return n.createElement(s.l,{withIndicators:!0,height:200,classNames:T},n.createElement(c.M,{count:5}))},code:[{fileName:"Demo.tsx",code:W,language:"tsx"},{fileName:"Demo.module.css",code:V,language:"scss"}],centered:!0,maxWidth:320};var P={control:"m-bf2c70c5"};let _=`
.control {
  &[data-inactive] {
    opacity: 0;
    cursor: default;
  }
}
`,R=`
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
`,Y={type:"code",component:function(){return n.createElement(s.l,{height:200,classNames:P},n.createElement(c.M,{count:5}))},code:[{fileName:"Demo.tsx",code:R,language:"tsx"},{fileName:"Demo.module.css",code:_,language:"scss"}],centered:!0,maxWidth:320};var q={controls:"m-78ad357a",root:"m-f45b71a6"};let U=`.controls {
  transition: opacity 150ms ease;
  opacity: 0;
}

.root {
  &:hover {
    .controls {
      opacity: 1;
    }
  }
}`,L=`
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
`,Z={type:"code",component:function(){return n.createElement(s.l,{height:200,classNames:q},n.createElement(c.M,{count:5}))},code:[{fileName:"Demo.tsx",code:L,language:"tsx"},{fileName:"Demo.module.css",code:U,language:"scss"}],centered:!0,maxWidth:320};var Image=a(58818);let $=["https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png"],X=`
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';

const images = [/* ... urls of images */];

function Demo() {
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));

  return <Carousel withIndicators>{slides}</Carousel>;
}
`,Q={type:"code",component:function(){let e=$.map(e=>n.createElement(s.l.Slide,{key:e},n.createElement(Image.E,{src:e})));return n.createElement(s.l,{withIndicators:!0},e)},code:X,maxWidth:320,centered:!0};var J=a(86871),K=a(8671),ee=a(72120);let et=`
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
`,ea={type:"code",component:function(){let[e,t]=(0,n.useState)(!1);return n.createElement(n.Fragment,null,n.createElement(K.z,{onClick:()=>t(!0)},"Open carousel with broken offset"),n.createElement(ee.u,{opened:e,size:300,padding:0,transitionProps:{duration:200},withCloseButton:!1,onClose:()=>t(!1)},n.createElement(s.l,{loop:!0,maw:300},n.createElement(s.l.Slide,null,n.createElement("img",{src:"https://cataas.com/cat",alt:"",style:{width:(0,y.h)(300),height:(0,y.h)(200),objectFit:"cover"}})),n.createElement(s.l.Slide,null,n.createElement("img",{src:"https://cataas.com/cat/cute",alt:"",style:{width:(0,y.h)(300),height:(0,y.h)(200),objectFit:"cover"}})),n.createElement(s.l.Slide,null,n.createElement("img",{src:"https://cataas.com/cat/angry",alt:"",style:{width:(0,y.h)(300),height:(0,y.h)(200),objectFit:"cover"}})))))},code:et,centered:!0};var eo=a(85702);let er=`
import { useState } from 'react';
import { Button, Modal, rem } from '@mantine/core';
import { Carousel, useAnimationOffsetEffect } from '@mantine/carousel';

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
`,ei={type:"code",component:function(){let[e,t]=(0,n.useState)(!1),[a,o]=(0,n.useState)(null);return(0,eo.D)(a,200),n.createElement(n.Fragment,null,n.createElement(K.z,{onClick:()=>t(!0)},"Open modal with carousel"),n.createElement(ee.u,{opened:e,size:300,padding:0,transitionProps:{duration:200},withCloseButton:!1,onClose:()=>t(!1)},n.createElement(s.l,{loop:!0,getEmblaApi:o,maw:300},n.createElement(s.l.Slide,null,n.createElement("img",{src:"https://cataas.com/cat",alt:"Cat",style:{width:(0,y.h)(300),height:(0,y.h)(200),objectFit:"cover"}})),n.createElement(s.l.Slide,null,n.createElement("img",{src:"https://cataas.com/cat/cute",alt:"Cat",style:{width:(0,y.h)(300),height:(0,y.h)(200),objectFit:"cover"}})),n.createElement(s.l.Slide,null,n.createElement("img",{src:"https://cataas.com/cat/angry",alt:"Cat",style:{width:(0,y.h)(300),height:(0,y.h)(200),objectFit:"cover"}})))))},code:er,centered:!0},el=(0,i.A)(l.us.Carousel);function en(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Demo:a,InstallScript:i,StylesApiSelectors:l}=t;return a||ec("Demo",!0),i||ec("InstallScript",!0),l||ec("StylesApiSelectors",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(i,{packages:"embla-carousel-react@^7.1.0 @mantine/carousel"}),"\n",(0,o.jsx)(t.p,{children:"After installation import package styles at the root of your application:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import '@mantine/carousel/styles.css';\n"})}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"@mantine/carousel"})," package is based on ",(0,o.jsx)(t.a,{href:"https://www.embla-carousel.com/",children:"embla carousel"}),",\nit supports most of its features:"]}),"\n",(0,o.jsx)(a,{data:d}),"\n",(0,o.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,o.jsx)(a,{data:h}),"\n",(0,o.jsx)(t.h2,{id:"size-and-gap",children:"Size and gap"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"slideSize"})," and ",(0,o.jsx)(t.code,{children:"slideGap"})," on ",(0,o.jsx)(t.code,{children:"Carousel"})," component to control size and gap of every slide:"]}),"\n",(0,o.jsx)(a,{data:f}),"\n",(0,o.jsx)(t.h2,{id:"responsive-styles",children:"Responsive styles"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"slideSize"})," and ",(0,o.jsx)(t.code,{children:"slideGap"})," props work the same way as ",(0,o.jsx)(t.a,{href:"/styles/style-props/",children:"style props"}),",\nyou can pass an object with values for different breakpoints:"]}),"\n",(0,o.jsx)(a,{data:g.A}),"\n",(0,o.jsx)(t.h2,{id:"drag-free",children:"Drag free"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"dragFree"})," will disable slides snap points – user will be able to stop dragging at any position:"]}),"\n",(0,o.jsx)(a,{data:w}),"\n",(0,o.jsx)(t.h2,{id:"vertical-orientation",children:"Vertical orientation"}),"\n",(0,o.jsxs)(t.p,{children:["Carousel with ",(0,o.jsx)(t.code,{children:'orientation="vertical"'})," requires ",(0,o.jsx)(t.code,{children:"height"})," prop to be set:"]}),"\n",(0,o.jsx)(a,{data:b}),"\n",(0,o.jsx)(t.h2,{id:"controls-icons",children:"Controls icons"}),"\n",(0,o.jsx)(t.p,{children:"You can replace default next/previous controls icons with any React nodes:"}),"\n",(0,o.jsx)(a,{data:E}),"\n",(0,o.jsx)(t.h2,{id:"100-height",children:"100% height"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:'height="100%"'})," to make Carousel take 100% height of the container. Note that in this case:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["container element must have ",(0,o.jsx)(t.code,{children:"display: flex"})," styles"]}),"\n",(0,o.jsxs)(t.li,{children:["carousel root element must have ",(0,o.jsx)(t.code,{children:"flex: 1"})," styles"]}),"\n",(0,o.jsx)(t.li,{children:"container element must have fixed height"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { Carousel } from '@mantine/carousel';\n\nexport function PercentageHeight() {\n  return (\n    <div style={{ height: 400, display: 'flex' }}>\n      <Carousel withIndicators height=\"100%\" style={{ flex: 1 }}>\n        <Carousel.Slide>1</Carousel.Slide>\n        <Carousel.Slide>2</Carousel.Slide>\n        <Carousel.Slide>3</Carousel.Slide>\n      </Carousel>\n    </div>\n  );\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"get-embla-instance",children:"Get embla instance"}),"\n",(0,o.jsxs)(t.p,{children:["You can get ",(0,o.jsx)(t.a,{href:"https://www.embla-carousel.com/api/methods/",children:"embla instance"})," with ",(0,o.jsx)(t.code,{children:"getEmblaApi"})," prop.\nYou will be able enhance carousel with additional logic after that using embla api methods:"]}),"\n",(0,o.jsx)(a,{data:I}),"\n",(0,o.jsx)(t.h2,{id:"embla-plugins",children:"Embla plugins"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"plugins"})," prop to enhance carousel with ",(0,o.jsx)(t.a,{href:"https://www.embla-carousel.com/plugins/",children:"embla plugins"}),".\nNote that plugins are not installed with ",(0,o.jsx)(t.code,{children:"@mantine/carousel"})," package and you will need to\ninstall them on your side."]}),"\n",(0,o.jsxs)(t.p,{children:["Example with ",(0,o.jsx)(t.a,{href:"https://www.embla-carousel.com/plugins/autoplay/",children:"autoplay plugin"}),":"]}),"\n",(0,o.jsx)(i,{packages:"embla-carousel-autoplay@^7.1.0"}),"\n",(0,o.jsx)(a,{data:B}),"\n",(0,o.jsx)(l,{component:"Carousel"}),"\n",(0,o.jsx)(a,{data:z}),"\n",(0,o.jsx)(t.h2,{id:"indicator-styles",children:"Indicator styles"}),"\n",(0,o.jsx)(a,{data:F}),"\n",(0,o.jsx)(t.h2,{id:"hide-inactive-controls",children:"Hide inactive controls"}),"\n",(0,o.jsx)(a,{data:Y}),"\n",(0,o.jsx)(t.h2,{id:"show-controls-on-hover",children:"Show controls on hover"}),"\n",(0,o.jsx)(a,{data:Z}),"\n",(0,o.jsx)(t.h2,{id:"example-images-carousel",children:"Example: Images carousel"}),"\n",(0,o.jsx)(a,{data:Q}),"\n",(0,o.jsx)(t.h2,{id:"example-cards-carousel",children:"Example: Cards carousel"}),"\n",(0,o.jsx)(a,{data:J._u}),"\n",(0,o.jsx)(t.h2,{id:"carousel-container-animation-offset",children:"Carousel container animation offset"}),"\n",(0,o.jsx)(t.p,{children:"Embla carousel only reads slides positions and sizes upon initialization. When you are using Carousel\ncomponent inside animated component you may experience an issue with incorrect slides offset after\nanimation finishes."}),"\n",(0,o.jsx)(t.p,{children:"Example of incorrect slides offset calculation (scroll though slides):"}),"\n",(0,o.jsx)(a,{data:ea}),"\n",(0,o.jsxs)(t.p,{children:["To solve this issue use ",(0,o.jsx)(t.code,{children:"useAnimationOffsetEffect"})," hook exported from ",(0,o.jsx)(t.code,{children:"@mantine/carousel"})," package.\nIt accepts embla instance as first argument and transition duration as second:"]}),"\n",(0,o.jsx)(a,{data:ei})]})}function es(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(el,{...e,children:(0,o.jsx)(en,{...e})})}function ec(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},86871:function(e,t,a){"use strict";a.d(t,{P7:function(){return p},_u:function(){return f}});var o=a(27378),r=a(61871),i=a(73133),l=a(98477),Text=a(26569),n=a(57847),s=a(8671),c=a(2256);let u=`.card {
  height: rem(440px);
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
  font-size: rem(32px);
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
`,d=`
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
`,m=[{image:"https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Best forests to visit in North America",category:"nature"},{image:"https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Hawaii beaches review: better than you think",category:"beach"},{image:"https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Mountains at night: 12 best locations to enjoy the view",category:"nature"},{image:"https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Aurora in Norway: when to visit for best experience",category:"nature"},{image:"https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Best places to visit this winter",category:"tourism"},{image:"https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Active volcanos reviews: travel at your own risk",category:"nature"}];function h({image:e,title:t,category:a}){return o.createElement(l.X,{shadow:"md",p:"xl",radius:"md",style:{backgroundImage:`url(${e})`},className:"m-819023b7"},o.createElement("div",null,o.createElement(Text.x,{className:"m-3481ba25",size:"xs"},a),o.createElement(n.D,{order:3,className:"m-b1678e91"},t)),o.createElement(s.z,{variant:"white",color:"dark"},"Read article"))}function p(e){let t=(0,c.rZ)(),a=(0,i.a)(`(max-width: ${t.breakpoints.sm})`),l=m.map(e=>o.createElement(r.l.Slide,{key:e.title},o.createElement(h,{...e})));return o.createElement(r.l,{slideSize:{base:"100%",sm:"50%"},slideGap:{base:"xl",sm:2},align:"start",slidesToScroll:a?1:2,...e},l)}let f={type:"code",component:p,code:[{fileName:"Demo.tsx",code:d,language:"tsx"},{fileName:"Demo.module.css",code:u,language:"scss"}]}},85702:function(e,t,a){"use strict";a.d(t,{D:function(){return r}});var o=a(27378);function r(e,t){(0,o.useEffect)(()=>{e&&window.setTimeout(()=>{e.reInit()},t)},[e,t])}}},function(e){e.O(0,[370,213,5819,2775,6720,9774,2888,179],function(){return e(e.s=12192)}),_N_E=e.O()}]);