(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[99369],{61803:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-fullscreen",function(){return t(11107)}])},11107:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var r=t(52322),l=t(45392),o=t(93828),c=t(65438),u=t(17115),s=t(49910);let i={type:"code",code:`
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
`,component:function(){let{ref:e,toggle:n,fullscreen:t}=(0,s.O)();return(0,r.jsxs)(c.K,{align:"center",children:[(0,r.jsx)("img",{ref:e,src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png",alt:"For demo",width:200}),(0,r.jsx)(u.z,{onClick:n,color:t?"red":"blue",children:t?"Exit Fullscreen":"View Image Fullscreen"})]})}};var a=t(25071),d=t(15019);let m=(0,a.A)(d.us.useFullscreen);function f(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"use-fullscreen"})," allows to enter/exit fullscreen for given element using the ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API",children:"Fullscreen API"}),".\nBy default, if you don't provide ",(0,r.jsx)(n.code,{children:"ref"}),", the hook will target ",(0,r.jsx)(n.code,{children:"document.documentElement"}),":"]}),"\n",(0,r.jsx)(t,{data:o.v}),"\n",(0,r.jsx)(n.h2,{id:"custom-target-element",children:"Custom target element"}),"\n",(0,r.jsxs)(n.p,{children:["The hook returns an optional ",(0,r.jsx)(n.code,{children:"ref"})," function that can be passed to an element to act as root.\nBe sure to follow best practices to not ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API/Guide#things_your_users_want_to_know",children:"confuse or trap the end user"}),":"]}),"\n",(0,r.jsx)(t,{data:i}),"\n",(0,r.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"function useFullscreen<T extends HTMLElement = any>(): {\n  readonly ref: (element: T | null) => void;\n  readonly toggle: () => Promise<void>;\n  readonly fullscreen: boolean;\n};\n"})})]})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(m,{...e,children:(0,r.jsx)(f,{...e})})}},93828:function(e,n,t){"use strict";t.d(n,{v:function(){return c}});var r=t(52322),l=t(17115),o=t(49910);let c={type:"code",code:`
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
`,component:function(){let{toggle:e,fullscreen:n}=(0,o.O)();return(0,r.jsx)(l.z,{onClick:e,color:n?"red":"blue",children:n?"Exit Fullscreen":"Enter Fullscreen"})},centered:!0}},49910:function(e,n,t){"use strict";t.d(n,{O:function(){return u}});var r=t(2784);function l(){let e=window.document;return e.fullscreenElement||e.webkitFullscreenElement||e.mozFullScreenElement||e.msFullscreenElement}let o=["","webkit","moz","ms"];function c(e,{onFullScreen:n,onError:t}){return o.forEach(r=>{e.addEventListener(`${r}fullscreenchange`,n),e.addEventListener(`${r}fullscreenerror`,t)}),()=>{o.forEach(r=>{e.removeEventListener(`${r}fullscreenchange`,n),e.removeEventListener(`${r}fullscreenerror`,t)})}}function u(){let[e,n]=(0,r.useState)(!1),t=(0,r.useRef)(),o=(0,r.useCallback)(e=>{n(e.target===l())},[n]),u=(0,r.useCallback)(e=>{n(!1),console.error(`[@mantine/hooks] use-fullscreen: Error attempting full-screen mode method: ${e} (${e.target})`)},[n]),s=(0,r.useCallback)(async()=>{if(l())await function(){let e=window.document;return"function"==typeof e.exitFullscreen?e.exitFullscreen():"function"==typeof e.msExitFullscreen?e.msExitFullscreen():"function"==typeof e.webkitExitFullscreen?e.webkitExitFullscreen():"function"==typeof e.mozCancelFullScreen?e.mozCancelFullScreen():null}();else{var e;await (e=t.current,e.requestFullscreen?.()||e.msRequestFullscreen?.()||e.webkitEnterFullscreen?.()||e.webkitRequestFullscreen?.()||e.mozRequestFullscreen?.())}},[]),i=(0,r.useCallback)(e=>{null===e?t.current=window.document.documentElement:t.current=e},[]);return(0,r.useEffect)(()=>!t.current&&window.document?(t.current=window.document.documentElement,c(t.current,{onFullScreen:o,onError:u})):t.current?c(t.current,{onFullScreen:o,onError:u}):void 0,[]),{ref:i,toggle:s,fullscreen:e}}}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=61803)}),_N_E=e.O()}]);