(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[43024],{1798:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});let s=(0,n(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},6620:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});let s=(0,n(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});let s=(0,n(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},18869:(e,t,n)=>{"use strict";n.d(t,{T:()=>d});var s=n(6029),r=n(57414),i=n(19577),o=n(90422),a={root:"m_32b5ee14",demo:"m_32af6b15"};let d={type:"code",code:[{code:`
import { Group, Table } from '@mantine/core';
import { useResizeObserver } from '@mantine/hooks';

function Demo() {
  const [ref, rect] = useResizeObserver();

  return (
    <div className={classes.root}>
      <Group justify="center">
        <div ref={ref} className={classes.demo}>
          Resize me!
        </div>
      </Group>

      <Table
        captionSide="top"
        data={{
          caption: 'Resize element by dragging its right bottom corner',
          head: ['Property', 'Value'],
          body: [
            ['width', rect.width],
            ['height', rect.height],
          ],
        }}
      />
    </div>
  );
}`,language:"tsx",fileName:"Demo.tsx"},{code:`.root {
  min-height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.demo {
  width: 400px;
  max-width: 800px;
  min-width: 160px;
  height: 200px;
  max-height: 220px;
  min-height: 80px;
  background-color: light-dark(var(--mantine-color-blue-6), var(--mantine-color-blue-8));
  resize: both;
  overflow: auto;
  color: var(--mantine-color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
}`,language:"scss",fileName:"Demo.module.css"}],component:function(){let[e,t]=(0,o.w)();return(0,s.jsxs)("div",{className:a.root,children:[(0,s.jsx)(r.Y,{justify:"center",children:(0,s.jsx)("div",{ref:e,className:a.demo,children:"Resize me!"})}),(0,s.jsx)(i.X,{captionSide:"top",data:{caption:"Resize element by dragging its right bottom corner",head:["Property","Value"],body:[["width",t.width],["height",t.height]]}})]})}}},24583:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});let s=(0,n(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},34891:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});let s=(0,n(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},41949:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});let s=(0,n(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},46349:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-resize-observer",function(){return n(81235)}])},65433:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});let s=(0,n(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},81235:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var s=n(6029),r=n(16285),i=n(18869),o=n(38547),a=n(5262);let d=(0,o.P)(a.XZ.useResizeObserver);function l(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n,{data:i.T}),"\n",(0,s.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"use-resize-observer"})," returns a ",(0,s.jsx)(t.code,{children:"ref"})," object that should be passed to the observed element, and the current element content rect, as returned by ",(0,s.jsx)(t.code,{children:"ResizeObserver"}),"'s callback ",(0,s.jsx)(t.code,{children:"entry.contentRect"}),".\nSee ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver",children:"Resize Observer API"})," documentation to learn more.\nOn the first render (as well as during SSR), or when no element is being observed, all of the properties are equal to ",(0,s.jsx)(t.code,{children:"0"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"import { useResizeObserver } from '@mantine/hooks';\n\nfunction Demo() {\n  const [ref, rect] = useResizeObserver();\n  return <div ref={ref}>Observed</div>;\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["See also ",(0,s.jsx)(t.a,{href:"https://mantine.dev/hooks/use-element-size/",children:"use-element-size"})," hook in case you need to subscribe only to ",(0,s.jsx)(t.code,{children:"width"})," and ",(0,s.jsx)(t.code,{children:"height"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"type ObserverRect = Omit<DOMRectReadOnly, 'toJSON'>;\n\nfunction useResizeObserver<T extends HTMLElement = any>(\n  options?: ResizeObserverOptions\n): readonly [React.RefObject<T>, ObserverRect];\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(d,{...e,children:(0,s.jsx)(l,{...e})})}},84276:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});let s=(0,n(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});let s=(0,n(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},90422:(e,t,n)=>{"use strict";n.d(t,{L:()=>o,w:()=>i});var s=n(55729);let r={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};function i(e){let t=(0,s.useRef)(0),n=(0,s.useRef)(null),[i,o]=(0,s.useState)(r),a=(0,s.useMemo)(()=>"undefined"!=typeof window?new ResizeObserver(e=>{let s=e[0];s&&(cancelAnimationFrame(t.current),t.current=requestAnimationFrame(()=>{if(n.current){let e=s.borderBoxSize?.[0]||s.contentBoxSize?.[0];e?o({width:e.inlineSize,height:e.blockSize,x:s.contentRect.x,y:s.contentRect.y,top:s.contentRect.top,left:s.contentRect.left,bottom:s.contentRect.bottom,right:s.contentRect.right}):o(s.contentRect)}}))}):null,[]);return(0,s.useEffect)(()=>(n.current&&a?.observe(n.current,e),()=>{a?.disconnect(),t.current&&cancelAnimationFrame(t.current)}),[n.current]),[n,i]}function o(e){let[t,{width:n,height:s}]=i(e);return{ref:t,width:n,height:s}}}},e=>{e.O(0,[38547,90636,46593,38792],()=>e(e.s=46349)),_N_E=e.O()}]);