(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[148],{33507:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var o=(0,a(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var o=(0,a(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var o=(0,a(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var o=(0,a(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var o=(0,a(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var o=(0,a(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var o=(0,a(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},50404:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/others/carousel",function(){return a(35146)}])},35146:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return eb}});var o=a(85893),r=a(11151),i=a(19905),l=a(9904),n=a(67294),s=a(29374),c=a(57084);let u=`
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
`,d={type:"code",component:function(){return n.createElement(s.l,{withIndicators:!0,height:200},n.createElement(c.M,{count:5}))},code:u,centered:!0,maxWidth:320};var m=Object.defineProperty,h=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,g=(e,t,a)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,x=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&g(e,a,t[a]);if(h)for(var a of h(t))f.call(t,a)&&g(e,a,t[a]);return e};let y=`
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel slideSize="70%" height={200}{{props}}>
      {/* ...slides */}
    </Carousel>
  );
}
`,b={type:"configurator",component:function(e){return n.createElement(s.l,x({height:200,slideSize:"70%"},e),n.createElement(c.M,{count:5}))},code:y,centered:!0,maxWidth:"100%",controls:[{prop:"align",type:"segmented",initialValue:"center",libraryValue:"center",data:[{label:"Start",value:"start"},{label:"Center",value:"center"},{label:"End",value:"end"}]},{prop:"orientation",type:"segmented",initialValue:"horizontal",libraryValue:"horizontal",data:[{label:"Horizontal",value:"horizontal"},{label:"Vertical",value:"vertical"}]},{prop:"slideGap",type:"size",initialValue:"md",libraryValue:"__"},{prop:"controlsOffset",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"controlSize",type:"number",min:14,max:40,initialValue:26,libraryValue:26},{prop:"loop",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"dragFree",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"draggable",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"withControls",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"withIndicators",type:"boolean",initialValue:!1,libraryValue:!1}]},w=`
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
`,C={type:"code",component:function(){return n.createElement(s.l,{withIndicators:!0,height:200,slideSize:"33.333333%",slideGap:"md",loop:!0,align:"start",slidesToScroll:3},n.createElement(c.M,{count:12}))},code:w};var v=a(87952);let S=`
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
`,j={type:"code",component:function(){return n.createElement(s.l,{withIndicators:!0,height:200,dragFree:!0,slideGap:"md",align:"start"},n.createElement(c.M,{count:5}))},code:S,centered:!0,maxWidth:320},M=`
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
`,E={type:"code",component:function(){return n.createElement(s.l,{orientation:"vertical",height:200,withIndicators:!0},n.createElement(c.M,{count:5}))},code:M,centered:!0,maxWidth:320};var k=a(72622),D=a(4687),I=a(87393);let O=`
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
`,H={type:"code",component:function(){return n.createElement(s.l,{height:180,nextControlIcon:n.createElement(D.Z,{style:{width:(0,k.h)(16),height:(0,k.h)(16)}}),previousControlIcon:n.createElement(I.Z,{style:{width:(0,k.h)(16),height:(0,k.h)(16)}})},n.createElement(c.M,{count:5}))},code:O,centered:!0,maxWidth:320};var A=a(47081);let N=`
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
`,B={type:"code",component:function(){let[e,t]=(0,n.useState)(0),[a,o]=(0,n.useState)(null),r=(0,n.useCallback)(()=>{if(!a)return;let e=Math.max(0,Math.min(1,a.scrollProgress()));t(100*e)},[a,t]);return(0,n.useEffect)(()=>{a&&(a.on("scroll",r),r())},[a]),n.createElement(n.Fragment,null,n.createElement(s.l,{dragFree:!0,slideSize:"50%",slideGap:"md",height:200,getEmblaApi:o,initialSlide:2},n.createElement(c.M,{count:12})),n.createElement(A.E,{value:e,maw:320,size:"sm",mt:"xl",mx:"auto"}))},code:N};var G=a(306);let V=`
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
`,z={type:"code",component:function(){let e=(0,n.useRef)(G({delay:2e3}));return n.createElement(s.l,{withIndicators:!0,height:200,plugins:[e.current],onMouseEnter:e.current.stop,onMouseLeave:e.current.reset},n.createElement(c.M,{count:5}))},code:V,centered:!0,maxWidth:320};var T=a(33582),P=Object.defineProperty,W=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,Z=(e,t,a)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,_=(e,t)=>{for(var a in t||(t={}))F.call(t,a)&&Z(e,a,t[a]);if(W)for(var a of W(t))R.call(t,a)&&Z(e,a,t[a]);return e};let Y=`
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel withIndicators height={200}{{props}}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
    </Carousel>
  );
}
`,q={type:"styles-api",data:T.J,component:function(e){return n.createElement(s.l,_({withIndicators:!0,height:200},e),n.createElement(c.M,{count:2}))},code:Y,centered:!0,maxWidth:"100%"};var L={indicator:"m-4fe518f6"};let U=`
.indicator {
  width: rem(12px);
  height: rem(4px);
  transition: width 250ms ease;

  &[data-active] {
    width: rem(40px);
  }
}`,$=`
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
`,X={type:"code",component:function(){return n.createElement(s.l,{withIndicators:!0,height:200,classNames:L},n.createElement(c.M,{count:5}))},code:[{fileName:"Demo.tsx",code:$,language:"tsx"},{fileName:"Demo.module.css",code:U,language:"scss"}],centered:!0,maxWidth:320};var Q={control:"m-bf2c70c5"};let J=`
.control {
  &[data-inactive] {
    opacity: 0;
    cursor: default;
  }
}
`,K=`
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
`,ee={type:"code",component:function(){return n.createElement(s.l,{height:200,classNames:Q},n.createElement(c.M,{count:5}))},code:[{fileName:"Demo.tsx",code:K,language:"tsx"},{fileName:"Demo.module.css",code:J,language:"scss"}],centered:!0,maxWidth:320};var et={controls:"m-78ad357a",root:"m-f45b71a6"};let ea=`.controls {
  transition: opacity 150ms ease;
  opacity: 0;
}

.root {
  &:hover {
    .controls {
      opacity: 1;
    }
  }
}`,eo=`
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
`,er={type:"code",component:function(){return n.createElement(s.l,{height:200,classNames:et},n.createElement(c.M,{count:5}))},code:[{fileName:"Demo.tsx",code:eo,language:"tsx"},{fileName:"Demo.module.css",code:ea,language:"scss"}],centered:!0,maxWidth:320};var ei=a(40720);let el=["https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80","https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80","https://images.unsplash.com/photo-1554692918-08fa0fdc9db3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80","https://images.unsplash.com/photo-1562176566-73c303ac1617?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80","https://images.unsplash.com/photo-1579698374511-6017bd6db7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"],en=`
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
`,es={type:"code",component:function(){let e=el.map(e=>n.createElement(s.l.Slide,{key:e},n.createElement(ei.E,{src:e})));return n.createElement(s.l,{withIndicators:!0},e)},code:en,maxWidth:320,centered:!0};var ec=a(89059),eu=a(14469),ed=a(29613);let em=`
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
`,eh={type:"code",component:function(){let[e,t]=(0,n.useState)(!1);return n.createElement(n.Fragment,null,n.createElement(eu.z,{onClick:()=>t(!0)},"Open carousel with broken offset"),n.createElement(ed.u,{opened:e,size:300,padding:0,transitionProps:{duration:200},withCloseButton:!1,onClose:()=>t(!1)},n.createElement(s.l,{loop:!0,maw:300},n.createElement(s.l.Slide,null,n.createElement("img",{src:"https://cataas.com/cat",alt:"",style:{width:(0,k.h)(300),height:(0,k.h)(200),objectFit:"cover"}})),n.createElement(s.l.Slide,null,n.createElement("img",{src:"https://cataas.com/cat/cute",alt:"",style:{width:(0,k.h)(300),height:(0,k.h)(200),objectFit:"cover"}})),n.createElement(s.l.Slide,null,n.createElement("img",{src:"https://cataas.com/cat/angry",alt:"",style:{width:(0,k.h)(300),height:(0,k.h)(200),objectFit:"cover"}})))))},code:em,centered:!0};var ep=a(79771);let ef=`
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
`,eg={type:"code",component:function(){let[e,t]=(0,n.useState)(!1),[a,o]=(0,n.useState)(null);return(0,ep.D)(a,200),n.createElement(n.Fragment,null,n.createElement(eu.z,{onClick:()=>t(!0)},"Open modal with carousel"),n.createElement(ed.u,{opened:e,size:300,padding:0,transitionProps:{duration:200},withCloseButton:!1,onClose:()=>t(!1)},n.createElement(s.l,{loop:!0,getEmblaApi:o,maw:300},n.createElement(s.l.Slide,null,n.createElement("img",{src:"https://cataas.com/cat",alt:"Cat",style:{width:(0,k.h)(300),height:(0,k.h)(200),objectFit:"cover"}})),n.createElement(s.l.Slide,null,n.createElement("img",{src:"https://cataas.com/cat/cute",alt:"Cat",style:{width:(0,k.h)(300),height:(0,k.h)(200),objectFit:"cover"}})),n.createElement(s.l.Slide,null,n.createElement("img",{src:"https://cataas.com/cat/angry",alt:"Cat",style:{width:(0,k.h)(300),height:(0,k.h)(200),objectFit:"cover"}})))))},code:ef,centered:!0},ex=(0,i.A)(l.us.Carousel);function ey(e){let t=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",a:"a",ul:"ul",li:"li"},(0,r.ah)(),e.components),{InstallScript:a,Demo:i,StylesApiSelectors:l}=t;return i||ew("Demo",!0),a||ew("InstallScript",!0),l||ew("StylesApiSelectors",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(a,{packages:"embla-carousel-react@^7.1.0 @mantine/carousel"}),"\n",(0,o.jsx)(t.p,{children:"After installation import package styles at the root of your application:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import '@mantine/carousel/styles.css';\n"})}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"@mantine/carousel"})," package is based on ",(0,o.jsx)(t.a,{href:"https://www.embla-carousel.com/",children:"embla carousel"}),",\nit supports most of its features:"]}),"\n",(0,o.jsx)(i,{data:d}),"\n",(0,o.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,o.jsx)(i,{data:b}),"\n",(0,o.jsx)(t.h2,{id:"size-and-gap",children:"Size and gap"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"slideSize"})," and ",(0,o.jsx)(t.code,{children:"slideGap"})," on ",(0,o.jsx)(t.code,{children:"Carousel"})," component to control size and gap of every slide:"]}),"\n",(0,o.jsx)(i,{data:C}),"\n",(0,o.jsx)(t.h2,{id:"responsive-styles",children:"Responsive styles"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"slideSize"})," and ",(0,o.jsx)(t.code,{children:"slideGap"})," props work the same way as ",(0,o.jsx)(t.a,{href:"/styles/style-props/",children:"style props"}),",\nyou can pass an object with values for different breakpoints:"]}),"\n",(0,o.jsx)(i,{data:v.A}),"\n",(0,o.jsx)(t.h2,{id:"drag-free",children:"Drag free"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"dragFree"})," will disable slides snap points – user will be able to stop dragging at any position:"]}),"\n",(0,o.jsx)(i,{data:j}),"\n",(0,o.jsx)(t.h2,{id:"vertical-orientation",children:"Vertical orientation"}),"\n",(0,o.jsxs)(t.p,{children:["Carousel with ",(0,o.jsx)(t.code,{children:'orientation="vertical"'})," requires ",(0,o.jsx)(t.code,{children:"height"})," prop to be set:"]}),"\n",(0,o.jsx)(i,{data:E}),"\n",(0,o.jsx)(t.h2,{id:"controls-icons",children:"Controls icons"}),"\n",(0,o.jsx)(t.p,{children:"You can replace default next/previous controls icons with any React nodes:"}),"\n",(0,o.jsx)(i,{data:H}),"\n",(0,o.jsx)(t.h2,{id:"100-height",children:"100% height"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:'height="100%"'})," to make Carousel take 100% height of the container. Note that in this case:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["container element must have ",(0,o.jsx)(t.code,{children:"display: flex"})," styles"]}),"\n",(0,o.jsxs)(t.li,{children:["carousel root element must have ",(0,o.jsx)(t.code,{children:"flex: 1"})," styles"]}),"\n",(0,o.jsx)(t.li,{children:"container element must have fixed height"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { Carousel } from '@mantine/carousel';\n\nexport function PercentageHeight() {\n  return (\n    <div style={{ height: 400, display: 'flex' }}>\n      <Carousel withIndicators height=\"100%\" style={{ flex: 1 }}>\n        <Carousel.Slide>1</Carousel.Slide>\n        <Carousel.Slide>2</Carousel.Slide>\n        <Carousel.Slide>3</Carousel.Slide>\n      </Carousel>\n    </div>\n  );\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"get-embla-instance",children:"Get embla instance"}),"\n",(0,o.jsxs)(t.p,{children:["You can get ",(0,o.jsx)(t.a,{href:"https://www.embla-carousel.com/api/methods/",children:"embla instance"})," with ",(0,o.jsx)(t.code,{children:"getEmblaApi"})," prop.\nYou will be able enhance carousel with additional logic after that using embla api methods:"]}),"\n",(0,o.jsx)(i,{data:B}),"\n",(0,o.jsx)(t.h2,{id:"embla-plugins",children:"Embla plugins"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"plugins"})," prop to enhance carousel with ",(0,o.jsx)(t.a,{href:"https://www.embla-carousel.com/plugins/",children:"embla plugins"}),".\nNote that plugins are not installed with ",(0,o.jsx)(t.code,{children:"@mantine/carousel"})," package and you will need to\ninstall them on your side."]}),"\n",(0,o.jsxs)(t.p,{children:["Example with ",(0,o.jsx)(t.a,{href:"https://www.embla-carousel.com/plugins/autoplay/",children:"autoplay plugin"}),":"]}),"\n",(0,o.jsx)(a,{packages:"embla-carousel-autoplay@^7.1.0"}),"\n",(0,o.jsx)(i,{data:z}),"\n",(0,o.jsx)(l,{component:"Carousel"}),"\n",(0,o.jsx)(i,{data:q}),"\n",(0,o.jsx)(t.h2,{id:"indicator-styles",children:"Indicator styles"}),"\n",(0,o.jsx)(i,{data:X}),"\n",(0,o.jsx)(t.h2,{id:"hide-inactive-controls",children:"Hide inactive controls"}),"\n",(0,o.jsx)(i,{data:ee}),"\n",(0,o.jsx)(t.h2,{id:"show-controls-on-hover",children:"Show controls on hover"}),"\n",(0,o.jsx)(i,{data:er}),"\n",(0,o.jsx)(t.h2,{id:"example-images-carousel",children:"Example: Images carousel"}),"\n",(0,o.jsx)(i,{data:es}),"\n",(0,o.jsx)(t.h2,{id:"example-cards-carousel",children:"Example: Cards carousel"}),"\n",(0,o.jsx)(i,{data:ec._u}),"\n",(0,o.jsx)(t.h2,{id:"carousel-container-animation-offset",children:"Carousel container animation offset"}),"\n",(0,o.jsx)(t.p,{children:"Embla carousel only reads slides positions and sizes upon initialization. When you are using Carousel\ncomponent inside animated component you may experience an issue with incorrect slides offset after\nanimation finishes."}),"\n",(0,o.jsx)(t.p,{children:"Example of incorrect slides offset calculation (scroll though slides):"}),"\n",(0,o.jsx)(i,{data:eh}),"\n",(0,o.jsxs)(t.p,{children:["To solve this issue use ",(0,o.jsx)(t.code,{children:"useAnimationOffsetEffect"})," hook exported from ",(0,o.jsx)(t.code,{children:"@mantine/carousel"})," package.\nIt accepts embla instance as first argument and transition duration as second:"]}),"\n",(0,o.jsx)(i,{data:eg})]})}var eb=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(ex,Object.assign({},e,{children:(0,o.jsx)(ey,e)}))};function ew(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},87393:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var o=(0,a(54764).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},4687:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var o=(0,a(54764).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},306:function(e,t,a){e.exports=function(e){"use strict";var t=e&&"object"==typeof e&&"default"in e?e:{default:e},a={active:!0,breakpoints:{},delay:4e3,playOnInit:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function o(e){var r,i,l,n=t.default.optionsHandler(),s=n.merge(a,o.globalOptions),c=0;function u(){i.off("pointerDown",l),r.stopOnInteraction||i.off("pointerUp",h),m(),c=0}function d(){m(),c=window.setTimeout(p,r.delay)}function m(){c&&window.clearTimeout(c)}function h(){c&&(m(),d())}function p(){var e=i.internalEngine().index;if(r.stopOnLastSnap&&e.get()===e.max)return u();i.canScrollNext()?i.scrollNext():i.scrollTo(0),d()}var f={name:"autoplay",options:n.merge(s,e),init:function(e){i=e,l=(r=n.atMedia(f.options)).stopOnInteraction?u:m;var t=i.internalEngine().eventStore,a=i.rootNode(),o=r.rootNode&&r.rootNode(a)||a;i.on("pointerDown",l),r.stopOnInteraction||i.on("pointerUp",h),r.stopOnMouseEnter&&(t.add(o,"mouseenter",l),r.stopOnInteraction||t.add(o,"mouseleave",h)),t.add(document,"visibilitychange",function(){if("hidden"===document.visibilityState)return m();h()}),t.add(window,"pagehide",function(e){e.persisted&&m()}),r.playOnInit&&d()},destroy:u,play:d,stop:m,reset:h};return f}return o.globalOptions=void 0,o}(a(22621))},79771:function(e,t,a){"use strict";a.d(t,{D:function(){return r}});var o=a(67294);function r(e,t){(0,o.useEffect)(()=>{e&&window.setTimeout(()=>{e.reInit()},t)},[e,t])}},89059:function(e,t,a){"use strict";a.d(t,{P7:function(){return v},_u:function(){return S}});var o=a(67294),r=a(29374),i=a(3921),l=a(93384),n=a(72039),s=a(44907),c=a(14469),u=a(43440),d={card:"m-819023b7",title:"m-b1678e91",category:"m-3481ba25"},m=Object.defineProperty,h=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,g=(e,t,a)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,x=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&g(e,a,t[a]);if(h)for(var a of h(t))f.call(t,a)&&g(e,a,t[a]);return e};let y=`.card {
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
`,b=`
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
`,w=[{image:"https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Best forests to visit in North America",category:"nature"},{image:"https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Hawaii beaches review: better than you think",category:"beach"},{image:"https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Mountains at night: 12 best locations to enjoy the view",category:"nature"},{image:"https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Aurora in Norway: when to visit for best experience",category:"nature"},{image:"https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Best places to visit this winter",category:"tourism"},{image:"https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Active volcanos reviews: travel at your own risk",category:"nature"}];function C({image:e,title:t,category:a}){return o.createElement(l.X,{shadow:"md",p:"xl",radius:"md",style:{backgroundImage:`url(${e})`},className:d.card},o.createElement("div",null,o.createElement(n.x,{className:d.category,size:"xs"},a),o.createElement(s.D,{order:3,className:d.title},t)),o.createElement(c.z,{variant:"white",color:"dark"},"Read article"))}function v(e){let t=(0,u.rZ)(),a=(0,i.a)(`(max-width: ${t.breakpoints.sm})`),l=w.map(e=>o.createElement(r.l.Slide,{key:e.title},o.createElement(C,x({},e))));return o.createElement(r.l,x({slideSize:{base:"100%",sm:"50%"},slideGap:{base:"xl",sm:2},align:"start",slidesToScroll:a?1:2},e),l)}let S={type:"code",component:v,code:[{fileName:"Demo.tsx",code:b,language:"tsx"},{fileName:"Demo.module.css",code:y,language:"scss"}]}}},function(e){e.O(0,[213,8992,178,1300,9774,2888,179],function(){return e(e.s=50404)}),_N_E=e.O()}]);