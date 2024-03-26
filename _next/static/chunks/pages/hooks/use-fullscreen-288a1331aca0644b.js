(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[99369],{61803:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-fullscreen",function(){return t(11107)}])},11107:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var r=t(52322),l=t(45392),o=t(93828),c=t(2784),u=t(65438),s=t(17115),i=t(49910);let a=`
import { useFullscreen } from '@mantine/hooks';
import { Button, Stack } from '@mantine/core';

function RefDemo() {
  const { ref, toggle, fullscreen } = useFullscreen();

  return (
    <Stack align="center">
      <img
        ref={ref}
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png"
        alt="For demo"
        width={200}
      />
      <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
        {fullscreen ? 'Exit Fullscreen' : 'View Image Fullscreen'}
      </Button>
    </Stack>
  );
}
`,d={type:"code",code:a,component:function(){let{ref:e,toggle:n,fullscreen:t}=(0,i.O)();return c.createElement(u.K,{align:"center"},c.createElement("img",{ref:e,src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png",alt:"For demo",width:200}),c.createElement(s.z,{onClick:n,color:t?"red":"blue"},t?"Exit Fullscreen":"View Image Fullscreen"))}};var m=t(79016),f=t(33638);let h=(0,m.A)(f.us.useFullscreen);function g(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"use-fullscreen"})," allows to enter/exit fullscreen for given element using the ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API",children:"Fullscreen API"}),".\nBy default, if you don't provide ",(0,r.jsx)(n.code,{children:"ref"}),", the hook will target ",(0,r.jsx)(n.code,{children:"document.documentElement"}),":"]}),"\n",(0,r.jsx)(t,{data:o.v}),"\n",(0,r.jsx)(n.h2,{id:"custom-target-element",children:"Custom target element"}),"\n",(0,r.jsxs)(n.p,{children:["The hook returns an optional ",(0,r.jsx)(n.code,{children:"ref"})," function that can be passed to an element to act as root.\nBe sure to follow best practices to not ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API/Guide#things_your_users_want_to_know",children:"confuse or trap the end user"}),":"]}),"\n",(0,r.jsx)(t,{data:d}),"\n",(0,r.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"function useFullscreen<T extends HTMLElement = any>(): {\n  readonly ref: (element: T | null) => void;\n  readonly toggle: () => Promise<void>;\n  readonly fullscreen: boolean;\n};\n"})})]})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(h,{...e,children:(0,r.jsx)(g,{...e})})}},93828:function(e,n,t){"use strict";t.d(n,{v:function(){return u}});var r=t(2784),l=t(17115),o=t(49910);let c=`
import { useFullscreen } from '@mantine/hooks';
import { Button } from '@mantine/core';

function Demo() {
  const { toggle, fullscreen } = useFullscreen();

  return (
    <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
      {fullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
    </Button>
  );
}
`,u={type:"code",code:c,component:function(){let{toggle:e,fullscreen:n}=(0,o.O)();return r.createElement(l.z,{onClick:e,color:n?"red":"blue"},n?"Exit Fullscreen":"Enter Fullscreen")},centered:!0}},49910:function(e,n,t){"use strict";t.d(n,{O:function(){return i}});var r=t(2784);function l(){let e=window.document,n=e.fullscreenElement||e.webkitFullscreenElement||e.mozFullScreenElement||e.msFullscreenElement;return n}async function o(){let e=window.document;return"function"==typeof e.exitFullscreen?e.exitFullscreen():"function"==typeof e.msExitFullscreen?e.msExitFullscreen():"function"==typeof e.webkitExitFullscreen?e.webkitExitFullscreen():"function"==typeof e.mozCancelFullScreen?e.mozCancelFullScreen():null}async function c(e){return e.requestFullscreen?.()||e.msRequestFullscreen?.()||e.webkitEnterFullscreen?.()||e.webkitRequestFullscreen?.()||e.mozRequestFullscreen?.()}let u=["","webkit","moz","ms"];function s(e,{onFullScreen:n,onError:t}){return u.forEach(r=>{e.addEventListener(`${r}fullscreenchange`,n),e.addEventListener(`${r}fullscreenerror`,t)}),()=>{u.forEach(r=>{e.removeEventListener(`${r}fullscreenchange`,n),e.removeEventListener(`${r}fullscreenerror`,t)})}}function i(){let[e,n]=(0,r.useState)(!1),t=(0,r.useRef)(),u=(0,r.useCallback)(e=>{n(e.target===l())},[n]),i=(0,r.useCallback)(e=>{n(!1),console.error(`[@mantine/hooks] use-fullscreen: Error attempting full-screen mode method: ${e} (${e.target})`)},[n]),a=(0,r.useCallback)(async()=>{l()?await o():await c(t.current)},[]),d=(0,r.useCallback)(e=>{null===e?t.current=window.document.documentElement:t.current=e},[]);return(0,r.useEffect)(()=>!t.current&&window.document?(t.current=window.document.documentElement,s(t.current,{onFullScreen:u,onError:i})):t.current?s(t.current,{onFullScreen:u,onError:i}):void 0,[]),{ref:d,toggle:a,fullscreen:e}}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=61803)}),_N_E=e.O()}]);