(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,r)=>{let n={};for(var i in e)t(n,i,{get:e[i],enumerable:!0});return r||t(n,Symbol.toStringTag,{value:"Module"}),n}])},80267,e=>{"use strict";var t=e.i(191788);let r={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};function n(e){let n=(0,t.useRef)(0),[i,o]=(0,t.useState)(r),s=(0,t.useRef)(null);return[(0,t.useCallback)(t=>{s.current&&(s.current.disconnect(),s.current=null),n.current&&cancelAnimationFrame(n.current),t&&(s.current=new ResizeObserver(e=>{let t=e[0];t&&(cancelAnimationFrame(n.current),n.current=requestAnimationFrame(()=>{let e=t.borderBoxSize?.[0]||t.contentBoxSize?.[0];e?o({width:e.inlineSize,height:e.blockSize,x:t.contentRect.x,y:t.contentRect.y,top:t.contentRect.top,left:t.contentRect.left,bottom:t.contentRect.bottom,right:t.contentRect.right}):o(t.contentRect)}))}),s.current.observe(t,e))},[e]),i]}e.s(["useElementSize",0,function(e){let[t,{width:r,height:i}]=n(e);return{ref:t,width:r,height:i}},"useResizeObserver",0,n])},727593,e=>{"use strict";var t=e.i(648863),r=e.i(725695),n=e.i(245745),i=e.i(391398),o=e.i(80267);let s={type:"code",code:[{code:`
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
  font-weight: 600;
}`,language:"scss",fileName:"Demo.module.css"}],component:function(){let[e,t]=(0,o.useResizeObserver)();return(0,i.jsxs)("div",{className:"m_32b5ee14",children:[(0,i.jsx)(r.Group,{justify:"center",children:(0,i.jsx)("div",{ref:e,className:"m_32af6b15",children:"Resize me!"})}),(0,i.jsx)(n.Table,{captionSide:"top",data:{caption:"Resize element by dragging its right bottom corner",head:["Property","Value"],body:[["width",t.width],["height",t.height]]}})]})}};var c=(0,t.__exportAll)({usage:()=>s});e.s(["UseResizeObserverDemos",0,c],727593)},878811,e=>{"use strict";var t=e.i(391398),r=e.i(38856),n=e.i(727593);e.i(603441);var i=e.i(62558);e.i(457450);var o=e.i(418026);let s=(0,i.Layout)(o.MDX_DATA.useResizeObserver);function c(e){let i={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.useMDXComponents)(),...e.components},{Demo:o}=i;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(o,{data:n.UseResizeObserverDemos.usage}),"\n",(0,t.jsx)(i.h2,{id:"api",children:"API"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"use-resize-observer"})," hook returns a ",(0,t.jsx)(i.code,{children:"ref"})," object that should be passed to the observed element, and the current element content rect, as returned by the ",(0,t.jsx)(i.code,{children:"ResizeObserver"}),"'s callback ",(0,t.jsx)(i.code,{children:"entry.contentRect"}),".\nSee the ",(0,t.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver",children:"Resize Observer API"})," documentation to learn more.\nOn the first render (as well as during SSR), or when no element is being observed, all of the properties are equal to ",(0,t.jsx)(i.code,{children:"0"}),"."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-tsx",children:"import { useResizeObserver } from '@mantine/hooks';\n\nfunction Demo() {\n  const [ref, rect] = useResizeObserver();\n  return <div ref={ref}>Observed</div>;\n}\n"})}),"\n",(0,t.jsxs)(i.p,{children:["See also the ",(0,t.jsx)(i.a,{href:"https://mantine.dev/hooks/use-element-size/",children:"use-element-size"})," hook in case you need to subscribe only to ",(0,t.jsx)(i.code,{children:"width"})," and ",(0,t.jsx)(i.code,{children:"height"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-tsx",children:"type ObserverRect = Omit<DOMRectReadOnly, 'toJSON'>;\n\nfunction useResizeObserver<T extends HTMLElement = any>(\n  options?: ResizeObserverOptions\n): readonly [React.RefCallback<T | null>, ObserverRect];\n"})})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})})}])},270049,(e,t,r)=>{let n="/hooks/use-resize-observer";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(878811)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);