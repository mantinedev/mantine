(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:"Module"}),r}])},841649,e=>{"use strict";var t=e.i(579560),n=e.i(191788);let r=/^(-?[\d.]+)px$/,i=/^(-?[\d.]+)rem$/,l=/^(-?[\d.]+)%$/;function a(e){return"string"==typeof e&&(r.test(e)||i.test(e))}function s(e){return"number"==typeof e?e:parseFloat(e)}function o(e){return e.panels.some(e=>a(e.defaultSize)||a(e.min)||a(e.max)||a(e.collapseThreshold))||a(e.step)||a(e.shiftStep)||(e.sizes?.some(a)??!1)}function c(){let e=parseFloat(getComputedStyle(document.documentElement).fontSize);return Number.isFinite(e)&&e>0?e:16}function p(e,t,n,a){if(!t)return s(e);if("number"==typeof e)return e/100*n;let o=l.exec(e);if(o)return parseFloat(o[1])/100*n;let c=i.exec(e);if(c)return parseFloat(c[1])*a;let p=r.exec(e);return p?parseFloat(p[1]):0}function d(e,t,n,r){if(!t)return 1;let i=0;return e.forEach(e=>{a(e)&&(i+=p(e,!0,n,r))}),i>n&&i>0?n/i:1}function u(e,t,n,r){if(!t)return e.map(e=>s(e));let i=0,l=0;e.forEach(e=>{a(e)?i+=p(e,!0,n,r):l+=s(e)});let o=Math.max(0,n-i),c=d(e,t,n,r);return e.map(e=>a(e)?p(e,!0,n,r)*c:l>0?s(e)/l*o:0)}function h(e,t,n,r,a,s=1){if(!n)return"string"==typeof t&&l.test(t)?`${e}%`:e;if("number"==typeof t)return r>0?e/r*100:t;if(l.test(t))return`${r>0?e/r*100:parseFloat(t)}%`;let o=s>0?e/s:e;return i.test(t)?`${a>0?o/a:0}rem`:`${o}px`}function m(e,t,n,r,i,l){let s=d(n,r,i,l),o=0;e.forEach((e,t)=>{a(n[t])&&(o+=e)});let c=s<1&&o<i-1e-6,p=c?1:s;return e.map((e,a)=>c||Math.abs(e-t[a])>1e-6?h(e,n[a],r,i,l,p):n[a])}function f(e,t,n,r){return{defaultSize:p(e.defaultSize,t,n,r),min:null!=e.min?p(e.min,t,n,r):0,max:null!=e.max?p(e.max,t,n,r):t?n:100,collapseThreshold:null!=e.collapseThreshold?p(e.collapseThreshold,t,n,r):void 0,collapsible:e.collapsible}}function x(e){return e.min??0}function S(e){return e.max??1/0}function b(e){return e.collapseThreshold??x(e)}function g(e,t,n,r){let i=[...e],l=n+1,a=i[n]+i[l],s=Math.min(S(t[n]),a-x(t[l])),o=Math.max(x(t[n]),a-S(t[l])),c=Math.min(Math.max(i[n]+r,o),s);return i[n]=c,i[l]=a-c,i}function j(e,t,n,r,i){if("function"==typeof i)return i({sizes:[...e],panels:t,handleIndex:n,delta:r});if("nearest"===i||"equal"===i){let l=("nearest"===i?function(e,t,n,r){let i=[...e];if(r>0){let e=Math.min(r,S(t[n])-i[n]),l=0;for(let r=n+1;r<i.length&&l<e;r+=1){let n=Math.min(i[r]-x(t[r]),e-l);i[r]-=n,l+=n}i[n]+=l}else if(r<0){let e=n+1,l=Math.min(Math.abs(r),S(t[e])-i[e]),a=0;for(let e=n;e>=0&&a<l;e-=1){let n=Math.min(i[e]-x(t[e]),l-a);i[e]-=n,a+=n}i[e]+=a}return i}:function(e,t,n,r){let i=[...e];if(r>0){let e=Math.min(r,S(t[n])-i[n]),l=[];for(let e=n+1;e<i.length;e+=1)i[e]>x(t[e])&&l.push(e);let a=e;for(;a>.001&&l.length>0;){let e=a/l.length,n=[];for(let r=0;r<l.length;r+=1){let s=l[r],o=i[s]-x(t[s]),c=Math.min(o,e);i[s]-=c,a-=c,o<=e+.001&&n.push(r)}for(let e=n.length-1;e>=0;e-=1)l.splice(n[e],1);if(0===n.length)break}i[n]+=e-a}else if(r<0){let e=n+1,l=Math.min(Math.abs(r),S(t[e])-i[e]),a=[];for(let e=n;e>=0;e-=1)i[e]>x(t[e])&&a.push(e);let s=l;for(;s>.001&&a.length>0;){let e=s/a.length,n=[];for(let r=0;r<a.length;r+=1){let l=a[r],o=i[l]-x(t[l]),c=Math.min(o,e);i[l]-=c,s-=c,o<=e+.001&&n.push(r)}for(let e=n.length-1;e>=0;e-=1)a.splice(n[e],1);if(0===n.length)break}i[e]+=l-s}return i})(e,t,n,r),a=n+1,s=t[n],o=t[a];if(s.collapsible&&l[n]<b(s)&&l[n]<e[n]){let e=l[n];l[a]+=e,l[n]=0}else if(o.collapsible&&l[a]<b(o)&&l[a]<e[a]){let e=l[a];l[n]+=e,l[a]=0}return l}let l=function(e,t,n,r){let i=n+1,l=t[n],a=t[i],s=e[n]+r,o=e[i]-r;if(l.collapsible&&s<b(l)&&s<e[n]){let t=[...e];return t[i]+=t[n],t[n]=0,t}if(a.collapsible&&o<b(a)&&o<e[i]){let t=[...e];return t[n]+=t[i],t[i]=0,t}return null}(e,t,n,r);return l||g(e,t,n,r)}e.s(["useSplitter",0,function(e){let{panels:r,orientation:i="horizontal",sizes:l,onSizeChange:a,onCollapseChange:d,redistribute:b,step:z=1,shiftStep:y=10,dir:P="ltr",resetOnDoubleClick:w=!0,enabled:v=!0}=e,C=o(e),k=r.map(e=>e.defaultSize),[M,R]=(0,t.useUncontrolled)({value:l,defaultValue:k,finalValue:k,onChange:a}),[D,F]=(0,n.useState)(-1),[I,T]=(0,n.useState)(0),B=(0,n.useRef)(e);B.current=e;let A=(0,n.useRef)({isDragging:!1,handleIndex:-1,startPointer:0,containerSize:0,rootFontSize:16,pixelMode:!1,startSizes:[],startRaw:[],preCollapseSizes:[]}),E=(0,n.useRef)(null),_=(0,n.useRef)(0),W=(0,n.useRef)(16),U=(0,n.useRef)(null),V=(0,n.useRef)(0),H=(0,n.useRef)(M);H.current=M;let $=(0,n.useRef)(k),L=M.map(e=>0===s(e)),N=(0,n.useCallback)(()=>{let e=E.current;if(!e)return 0;let t=e.getBoundingClientRect();return(B.current.orientation??"horizontal")==="horizontal"?t.width:t.height},[]),G=(0,n.useCallback)(e=>{H.current=e,R(e)},[R]),X=(0,n.useCallback)(e=>{if(!r[e]?.collapsible)return;let t=H.current;if(0===s(t[e]))return;let n=C?_.current||N():0,i=W.current,l=u(t,C,n,i);$.current=[...t];let a=l[e];l[e]=0,l[0===e?1:e-1]+=a,G(l.map((e,r)=>h(e,t[r],C,n,i))),d?.(e,!0)},[r,C,N,G,d]),O=(0,n.useCallback)(e=>{if(!r[e]?.collapsible)return;let t=H.current;if(0!==s(t[e]))return;let n=C?_.current||N():0,i=W.current,l=u(t,C,n,i),a=$.current,o=p(null!=a[e]&&0!==s(a[e])?a[e]:r[e].defaultSize,C,n,i),c=0===e?1:e-1,m=null!=r[c].min?p(r[c].min,C,n,i):0,f=Math.min(o,Math.max(0,l[c]-m));f<=0||(l[e]=f,l[c]-=f,G(l.map((e,r)=>h(e,t[r],C,n,i))),d?.(e,!1))},[r,C,N,G,d]),K=(0,n.useCallback)(e=>{0===s(H.current[e])?O(e):X(e)},[X,O]),q=(0,n.useCallback)((e,t,n,r)=>{let i=B.current.onCollapseChange;for(let l of n){let n=0===s(e[l]),a=0===t[l];!n&&a?($.current=[...r],i?.(l,!0)):n&&!a&&i?.(l,!1)}},[]),Y=(0,n.useCallback)(e=>{let t=H.current,n=e+1;if(e<0||n>=t.length)return;let r=C?_.current||N():0,i=W.current,l=u(t,C,r,i),a=B.current.panels.map(e=>f(e,C,r,i)),s=l[e]+l[n],o=a[e].defaultSize,c=o+a[n].defaultSize,p=g(l,a,e,(0===c?s/2:o/c*s)-l[e]);q(t,p,[e,n],t),G(m(p,l,t,C,r,i))},[q,G,C,N]),J=(0,n.useCallback)(e=>{E.current=e},[]);(0,n.useEffect)(()=>{if(!C||"u"<typeof ResizeObserver)return;let e=E.current;if(!e)return;let t=0,n=()=>{let t=e.getBoundingClientRect(),n=(B.current.orientation??"horizontal")==="horizontal"?t.width:t.height;W.current=c(),_.current=n,T(e=>e!==n?n:e)},r=new ResizeObserver(()=>{cancelAnimationFrame(t),t=requestAnimationFrame(n)});return r.observe(e),n(),()=>{cancelAnimationFrame(t),r.disconnect()}},[C,i]);let Q=(0,n.useRef)(new Map),Z=(0,n.useRef)(new Map),ee=(0,n.useCallback)(e=>{if(Q.current.has(e))return Q.current.get(e);let t=t=>{let n=Z.current.get(e);if(n&&(n.abort(),Z.current.delete(e)),!t)return;let r=new AbortController;Z.current.set(e,r);let i=e=>{let t=A.current;if(!t.containerSize)return;let n=B.current,r=(n.orientation??"horizontal")==="horizontal",i=(r&&"rtl"===n.dir?-1:1)*((r?e.clientX:e.clientY)-t.startPointer),l=t.pixelMode?i:i/t.containerSize*100,a=n.panels.map(e=>f(e,t.pixelMode,t.containerSize,t.rootFontSize)),s=j(t.startSizes,a,t.handleIndex,l,n.redistribute);q(H.current,s,[t.handleIndex,t.handleIndex+1],t.startRaw);let o=m(s,t.startSizes,t.startRaw,t.pixelMode,t.containerSize,t.rootFontSize);H.current=o,R(o)},l=e=>{A.current.isDragging&&(cancelAnimationFrame(V.current),V.current=requestAnimationFrame(()=>{i(e)}))},a=e=>{let t=A.current;if(!t.isDragging)return;cancelAnimationFrame(V.current),i(e),t.isDragging=!1;let n=t.handleIndex;t.handleIndex=-1,F(-1),document.body.style.userSelect="",document.body.style.webkitUserSelect="",document.body.style.cursor="",U.current?.abort(),U.current=null,B.current.onResizeEnd?.(n,[...H.current])};t.addEventListener("pointerdown",t=>{if(!1===B.current.enabled||0!==t.button)return;let n=E.current;if(!n)return;let r=B.current,i=(r.orientation??"horizontal")==="horizontal",s=n.getBoundingClientRect(),p=i?s.width:s.height,d=i?t.clientX:t.clientY,h=o(r),m=c(),f=A.current;f.isDragging=!0,f.handleIndex=e,f.startPointer=d,f.containerSize=p,f.rootFontSize=m,f.pixelMode=h,f.startRaw=[...H.current],f.startSizes=u(f.startRaw,h,p,m),f.preCollapseSizes=[...$.current],F(e),document.body.style.userSelect="none",document.body.style.webkitUserSelect="none",document.body.style.cursor=i?"col-resize":"row-resize",r.onResizeStart?.(e),U.current?.abort(),U.current=new AbortController;let x=U.current.signal;document.addEventListener("pointermove",l,{signal:x}),document.addEventListener("pointerup",a,{signal:x}),document.addEventListener("pointercancel",a,{signal:x})},{signal:r.signal})};return Q.current.set(e,t),t},[R]),et=(0,n.useCallback)(e=>{let{index:t}=e,n=W.current,l=u(M,C,I,n),a=r.map(e=>f(e,C,I,n)),s=l[t]??0,o=a[t];return{ref:ee(t),role:"separator","aria-orientation":i,"aria-valuenow":Math.round(s),"aria-valuemin":Math.round(x(o)),"aria-valuemax":Math.round(S(o)),tabIndex:0,onKeyDown:e=>{if(!v)return;let n="horizontal"===i,l="rtl"===P,a=C?_.current||N():0,s=W.current,o=u(M,C,a,s),c=r.map(e=>f(e,C,a,s)),d=c[t],h=c[t+1],g=0,w=p(e.shiftKey?y:z,C,a,s);switch(e.key){case"ArrowLeft":if(!n)return;g=l?w:-w;break;case"ArrowRight":if(!n)return;g=l?-w:w;break;case"ArrowUp":if(n)return;g=-w;break;case"ArrowDown":if(n)return;g=w;break;case"Home":g=-(o[t]-x(d));break;case"End":g=S(d)-o[t];break;case"Enter":{let n=d?.collapsible,r=h?.collapsible;if(n&&o[t]<=o[t+1]){K(t),e.preventDefault();return}if(r){K(t+1),e.preventDefault();return}n&&(K(t),e.preventDefault());return}default:return}if(e.preventDefault(),0!==g){let e=j(o,c,t,g,b);q(M,e,[t,t+1],M),G(m(e,o,M,C,a,s))}},onDoubleClick:()=>{v&&w&&Y(t)},"data-active":D===t||void 0,"data-orientation":i}},[i,M,r,C,I,v,P,z,y,w,D,b,N,ee,K,G,q,Y]);return(0,n.useEffect)(()=>()=>{U.current?.abort(),U.current=null,Z.current.forEach(e=>e.abort()),Z.current.clear(),cancelAnimationFrame(V.current),A.current.isDragging&&(A.current.isDragging=!1,document.body.style.userSelect="",document.body.style.webkitUserSelect="",document.body.style.cursor="")},[]),{ref:J,sizes:M,pixelMode:C,collapsed:L,activeHandle:D,getHandleProps:et,setSizes:G,collapse:X,expand:O,toggleCollapse:K,reset:Y}}])},598386,e=>{"use strict";var t=e.i(648863),n=e.i(779177),r=e.i(481178),i=e.i(317477),l=e.i(44091),a=e.i(391466),s=e.i(275519),o=e.i(232471),c=e.i(323283),p=e.i(191788),d=e.i(391398);function u(e){return(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,d.jsx)("path",{d:"M8 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}),(0,d.jsx)("path",{d:"M8 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}),(0,d.jsx)("path",{d:"M8 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}),(0,d.jsx)("path",{d:"M14 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}),(0,d.jsx)("path",{d:"M14 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}),(0,d.jsx)("path",{d:"M14 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"})]})}function h(e){return(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,d.jsx)("path",{d:"M4 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}),(0,d.jsx)("path",{d:"M4 15a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}),(0,d.jsx)("path",{d:"M11 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}),(0,d.jsx)("path",{d:"M11 15a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}),(0,d.jsx)("path",{d:"M18 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}),(0,d.jsx)("path",{d:"M18 15a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"})]})}let[m,f]=(0,e.i(386179).createSafeContext)("Splitter component was not found in the tree");var x={root:"m_19e66008",pane:"m_19e5428e",handle:"m_27f81bce",thumb:"m_22feb770"};let S=(0,s.factory)(e=>{let t=(0,l.useProps)("SplitterPane",null,e),{className:n,classNames:r,style:i,styles:a,vars:s,children:c,defaultSize:p,min:u,max:h,collapsible:m,collapseThreshold:x,__index:S,mod:b,...g}=t,j=f(),z=j.collapsed[S],y=j.getPaneStyle(S);return(0,d.jsx)(o.Box,{...j.getStyles("pane",{className:n,classNames:r,style:[y,i],styles:a,props:t}),mod:[{collapsed:z||void 0},b],...g,children:c})});S.classes=x,S.displayName="@mantine/core/SplitterPane";var b=e.i(332977),g=e.i(841649);let j=/^(-?[\d.]+)px$/,z=/^(-?[\d.]+)rem$/,y={orientation:"horizontal",lineSize:2,withHandle:!0,resetOnDoubleClick:!0},P=(0,r.createVarsResolver)((e,{lineSize:t,handleColor:r})=>({root:{"--splitter-line-size":(0,n.rem)(t),"--splitter-handle-color":r?(0,i.getThemeColor)(r,e):void 0}})),w=(0,s.factory)(e=>{let t=(0,l.useProps)("Splitter",y,e),{orientation:n,sizes:r,onSizeChange:i,onResizeStart:s,onResizeEnd:f,onCollapseChange:S,redistribute:w,step:v,shiftStep:C,lineSize:k,handleColor:M,handleIcon:R,withHandle:D,resetOnDoubleClick:F,splitterRef:I,children:T,className:B,classNames:A,style:E,styles:_,unstyled:W,vars:U,mod:V,attributes:H,ref:$,...L}=t,{dir:N}=(0,c.useDirection)(),G=p.Children.toArray(T),X=(0,g.useSplitter)({panels:G.map(e=>({defaultSize:e.props.defaultSize,min:e.props.min,max:e.props.max,collapsible:e.props.collapsible,collapseThreshold:e.props.collapseThreshold})),orientation:n,sizes:r,onSizeChange:i,onResizeStart:s,onResizeEnd:f,onCollapseChange:S,redistribute:w,step:v,shiftStep:C,dir:N,resetOnDoubleClick:F});(0,p.useImperativeHandle)(I,()=>X,[X]);let O=(0,b.useMergedRef)($,X.ref),K=(0,a.useStyles)({name:"Splitter",classes:x,props:t,className:B,style:E,classNames:A,styles:_,unstyled:W,attributes:H,vars:U,varsResolver:P}),q=void 0!==R?R:"vertical"===n?(0,d.jsx)(h,{}):(0,d.jsx)(u,{}),Y=[];return G.forEach((e,t)=>{if(t>0){let e=X.getHandleProps({index:t-1}),r=X.activeHandle===t-1;Y.push((0,p.createElement)(o.Box,{...K("handle"),key:`handle-${t-1}`,...e},D&&(0,d.jsx)("div",{...K("thumb"),"data-orientation":n,"data-active":r||void 0,children:q})))}Y.push((0,p.cloneElement)(e,{key:`pane-${t}`,__index:t}))}),(0,d.jsx)(m,{value:{getStyles:K,sizes:X.sizes,collapsed:X.collapsed,orientation:n,getPaneStyle:e=>(function(e,t){let n="number"==typeof e?e:parseFloat(e);return t?"string"==typeof e&&(j.test(e)||z.test(e))?{flexGrow:0,flexShrink:1,flexBasis:e}:{flexGrow:n,flexShrink:1,flexBasis:0}:{flexBasis:`${n}%`}})(X.sizes[e],X.pixelMode)},children:(0,d.jsx)(o.Box,{ref:O,...K("root"),mod:[{orientation:n},V],...L,children:Y})})});w.classes=x,w.varsResolver=P,w.displayName="@mantine/core/Splitter",w.Pane=S;let v={type:"configurator",component:function(e){return(0,d.jsxs)(w,{...e,h:200,children:[(0,d.jsx)(w.Pane,{defaultSize:50,min:20,bg:"blue",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"First pane"}),(0,d.jsx)(w.Pane,{defaultSize:50,min:20,bg:"teal",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Second pane"})]})},code:`
import { Splitter } from '@mantine/core';

function Demo() {
  return (
    <Splitter{{props}} h={200}>
      <Splitter.Pane defaultSize={50} min={20} bg="blue">
        First pane
      </Splitter.Pane>
      <Splitter.Pane defaultSize={50} min={20} bg="teal">
        Second pane
      </Splitter.Pane>
    </Splitter>
  );
}`,centered:!0,maxWidth:"100%",controls:[{prop:"orientation",type:"segmented",initialValue:"horizontal",libraryValue:"horizontal",data:[{value:"horizontal",label:"Horizontal"},{value:"vertical",label:"Vertical"}]}]},C={type:"code",component:function(){return(0,d.jsxs)(w,{h:200,children:[(0,d.jsx)(w.Pane,{defaultSize:"240px",min:"160px",max:"50%",bg:"blue",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Fixed 240px sidebar"}),(0,d.jsx)(w.Pane,{defaultSize:100,bg:"teal",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Flexible content"})]})},code:`
import { Splitter } from '@mantine/core';

function Demo() {
  return (
    <Splitter h={200}>
      <Splitter.Pane defaultSize="240px" min="160px" max="50%" bg="blue">
        Fixed 240px sidebar
      </Splitter.Pane>
      <Splitter.Pane defaultSize={100} bg="teal">
        Flexible content
      </Splitter.Pane>
    </Splitter>
  );
}`,centered:!0,maxWidth:"100%"},k={type:"code",component:function(){return(0,d.jsxs)(w,{orientation:"vertical",h:300,children:[(0,d.jsx)(w.Pane,{defaultSize:60,min:20,bg:"blue",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Top pane"}),(0,d.jsx)(w.Pane,{defaultSize:40,min:20,bg:"teal",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Bottom pane"})]})},code:`
import { Splitter } from '@mantine/core';

function Demo() {
  return (
    <Splitter orientation="vertical" h={300}>
      <Splitter.Pane defaultSize={60} min={20} bg="blue">
        Top pane
      </Splitter.Pane>
      <Splitter.Pane defaultSize={40} min={20} bg="teal">
        Bottom pane
      </Splitter.Pane>
    </Splitter>
  );
}`,centered:!0,maxWidth:"100%"};var M=e.i(485108),R=e.i(725695);let D={type:"code",component:function(){let e=(0,p.useRef)(null);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(w,{splitterRef:e,h:200,children:[(0,d.jsx)(w.Pane,{defaultSize:30,min:20,collapsible:!0,bg:"blue",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Collapsible sidebar"}),(0,d.jsx)(w.Pane,{defaultSize:70,min:30,bg:"teal",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Main content"})]}),(0,d.jsx)(R.Group,{mt:"md",children:(0,d.jsx)(M.Button,{size:"xs",onClick:()=>e.current?.toggleCollapse(0),children:"Toggle sidebar"})})]})},code:`
import { useRef } from 'react';
import { Button, Group, Splitter } from '@mantine/core';
import { UseSplitterReturnValue } from '@mantine/hooks';

function Demo() {
  const splitterRef = useRef<UseSplitterReturnValue>(null);

  return (
    <>
      <Splitter splitterRef={splitterRef} h={200}>
        <Splitter.Pane defaultSize={30} min={20} collapsible bg="blue">
          Collapsible sidebar
        </Splitter.Pane>
        <Splitter.Pane defaultSize={70} min={30} bg="teal">
          Main content
        </Splitter.Pane>
      </Splitter>
      <Group mt="md">
        <Button size="xs" onClick={() => splitterRef.current?.toggleCollapse(0)}>
          Toggle sidebar
        </Button>
      </Group>
    </>
  );
}`,centered:!0,maxWidth:"100%"};var F=e.i(883364);let I={type:"code",component:function(){let[e,t]=(0,p.useState)([50,50]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(w,{sizes:e,onSizeChange:e=>t(e),h:200,children:[(0,d.jsxs)(w.Pane,{defaultSize:50,min:20,bg:"blue",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:["Panel A (",Math.round(e[0]),"%)"]}),(0,d.jsxs)(w.Pane,{defaultSize:50,min:20,bg:"teal",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:["Panel B (",Math.round(e[1]),"%)"]})]}),(0,d.jsxs)(F.Text,{size:"sm",mt:"sm",children:["Current sizes: [",e.map(e=>Math.round(e)).join(", "),"]"]}),(0,d.jsxs)(R.Group,{mt:"xs",children:[(0,d.jsx)(M.Button,{size:"xs",onClick:()=>t([30,70]),children:"30 / 70"}),(0,d.jsx)(M.Button,{size:"xs",onClick:()=>t([50,50]),children:"50 / 50"}),(0,d.jsx)(M.Button,{size:"xs",onClick:()=>t([70,30]),children:"70 / 30"})]})]})},code:`
import { useState } from 'react';
import { Button, Group, Splitter, Text } from '@mantine/core';

function Demo() {
  const [sizes, setSizes] = useState([50, 50]);

  return (
    <>
      <Splitter sizes={sizes} onSizeChange={setSizes} h={200}>
        <Splitter.Pane defaultSize={50} min={20} bg="blue">
          Panel A ({Math.round(sizes[0])}%)
        </Splitter.Pane>
        <Splitter.Pane defaultSize={50} min={20} bg="teal">
          Panel B ({Math.round(sizes[1])}%)
        </Splitter.Pane>
      </Splitter>
      <Text size="sm" mt="sm">
        Current sizes: [{sizes.map((s) => Math.round(s)).join(', ')}]
      </Text>
      <Group mt="xs">
        <Button size="xs" onClick={() => setSizes([30, 70])}>30 / 70</Button>
        <Button size="xs" onClick={() => setSizes([50, 50])}>50 / 50</Button>
        <Button size="xs" onClick={() => setSizes([70, 30])}>70 / 30</Button>
      </Group>
    </>
  );
}`,centered:!0,maxWidth:"100%"},T=["blue","teal","grape"],B=["First","Second","Third"],A={type:"code",component:function(){return(0,d.jsx)(w,{h:200,children:B.map((e,t)=>(0,d.jsx)(w.Pane,{defaultSize:1===t?50:25,min:10,bg:T[t],c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:e},e))})},code:`
import { Splitter } from '@mantine/core';

function Demo() {
  return (
    <Splitter h={200}>
      <Splitter.Pane defaultSize={25} min={10} bg="blue">
        First
      </Splitter.Pane>
      <Splitter.Pane defaultSize={50} min={10} bg="teal">
        Second
      </Splitter.Pane>
      <Splitter.Pane defaultSize={25} min={10} bg="grape">
        Third
      </Splitter.Pane>
    </Splitter>
  );
}`,centered:!0,maxWidth:"100%"},E={type:"code",component:function(){return(0,d.jsxs)(w,{h:350,children:[(0,d.jsx)(w.Pane,{defaultSize:30,min:15,bg:"blue",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Sidebar"}),(0,d.jsx)(w.Pane,{defaultSize:70,min:30,children:(0,d.jsxs)(w,{orientation:"vertical",h:"100%",children:[(0,d.jsx)(w.Pane,{defaultSize:60,min:20,bg:"teal",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Editor"}),(0,d.jsx)(w.Pane,{defaultSize:40,min:20,bg:"grape",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Terminal"})]})})]})},code:`
import { Splitter } from '@mantine/core';

function Demo() {
  return (
    <Splitter h={350}>
      <Splitter.Pane defaultSize={30} min={15} bg="blue">
        Sidebar
      </Splitter.Pane>
      <Splitter.Pane defaultSize={70} min={30}>
        <Splitter orientation="vertical" h="100%">
          <Splitter.Pane defaultSize={60} min={20} bg="teal">
            Editor
          </Splitter.Pane>
          <Splitter.Pane defaultSize={40} min={20} bg="grape">
            Terminal
          </Splitter.Pane>
        </Splitter>
      </Splitter.Pane>
    </Splitter>
  );
}`,centered:!0,maxWidth:"100%"},_=["blue","teal","grape","orange"],W=["Panel A","Panel B","Panel C","Panel D"],U={type:"code",component:function(){return(0,d.jsx)(w,{redistribute:"nearest",h:200,children:W.map((e,t)=>(0,d.jsx)(w.Pane,{defaultSize:25,min:10,bg:_[t],c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:e},e))})},code:`
import { Splitter } from '@mantine/core';

function Demo() {
  return (
    <Splitter redistribute="nearest" h={200}>
      <Splitter.Pane defaultSize={25} min={10} bg="blue">
        Panel A
      </Splitter.Pane>
      <Splitter.Pane defaultSize={25} min={10} bg="teal">
        Panel B
      </Splitter.Pane>
      <Splitter.Pane defaultSize={25} min={10} bg="grape">
        Panel C
      </Splitter.Pane>
      <Splitter.Pane defaultSize={25} min={10} bg="orange">
        Panel D
      </Splitter.Pane>
    </Splitter>
  );
}`,centered:!0,maxWidth:"100%"},V={type:"configurator",component:function(e){return(0,d.jsxs)(w,{...e,h:200,children:[(0,d.jsx)(w.Pane,{defaultSize:50,min:20,bg:"blue",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"First pane"}),(0,d.jsx)(w.Pane,{defaultSize:50,min:20,bg:"teal",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Second pane"})]})},code:`
import { Splitter } from '@mantine/core';

function Demo() {
  return (
    <Splitter{{props}} h={200}>
      <Splitter.Pane defaultSize={50} min={20} bg="blue">
        First pane
      </Splitter.Pane>
      <Splitter.Pane defaultSize={50} min={20} bg="teal">
        Second pane
      </Splitter.Pane>
    </Splitter>
  );
}`,centered:!0,maxWidth:"100%",controls:[{prop:"lineSize",type:"number",initialValue:2,libraryValue:2,min:1,max:10,step:1}]},H={type:"code",component:function(){return(0,d.jsxs)(w,{withHandle:!1,h:200,children:[(0,d.jsx)(w.Pane,{defaultSize:50,min:20,bg:"blue",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"First pane"}),(0,d.jsx)(w.Pane,{defaultSize:50,min:20,bg:"teal",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Second pane"})]})},code:`
import { Splitter } from '@mantine/core';

function Demo() {
  return (
    <Splitter withHandle={false} h={200}>
      <Splitter.Pane defaultSize={50} min={20} bg="blue">
        First pane
      </Splitter.Pane>
      <Splitter.Pane defaultSize={50} min={20} bg="teal">
        Second pane
      </Splitter.Pane>
    </Splitter>
  );
}`,centered:!0,maxWidth:"100%"};var $=(0,t.__exportAll)({collapsible:()=>D,controlled:()=>I,cssUnits:()=>C,lineSize:()=>V,multiple:()=>A,nested:()=>E,redistribute:()=>U,usage:()=>v,vertical:()=>k,withHandle:()=>H});e.s(["SplitterDemos",0,$],598386)},656519,e=>{"use strict";var t=e.i(391398),n=e.i(38856),r=e.i(598386);e.i(603441);var i=e.i(62558);e.i(457450);var l=e.i(418026);let a=(0,i.Layout)(l.MDX_DATA.Splitter);function s(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.useMDXComponents)(),...e.components},{Demo:l}=i;return l||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"Splitter"})," component provides resizable split pane layout. It is built on top of the\n",(0,t.jsx)(i.a,{href:"/hooks/use-splitter/",children:"use-splitter"})," hook and provides a declarative API with\nStyles API integration."]}),"\n",(0,t.jsx)(l,{data:r.SplitterDemos.usage}),"\n",(0,t.jsx)(i.h2,{id:"css-units",children:"CSS units"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"Splitter.Pane"})," ",(0,t.jsx)(i.code,{children:"defaultSize"}),", ",(0,t.jsx)(i.code,{children:"min"})," and ",(0,t.jsx)(i.code,{children:"max"})," props accept CSS units in addition to plain numbers:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["A plain ",(0,t.jsx)(i.code,{children:"number"})," or a ",(0,t.jsx)(i.code,{children:"%"})," string (",(0,t.jsx)(i.code,{children:"'30%'"}),") is a ",(0,t.jsx)(i.strong,{children:"flexible"})," size – the pane shares the leftover\nspace with other flexible panes."]}),"\n",(0,t.jsxs)(i.li,{children:["A ",(0,t.jsx)(i.code,{children:"px"})," or ",(0,t.jsx)(i.code,{children:"rem"})," string (",(0,t.jsx)(i.code,{children:"'240px'"}),", ",(0,t.jsx)(i.code,{children:"'15rem'"}),") is a ",(0,t.jsx)(i.strong,{children:"fixed"})," size – the pane keeps its pixel size\nwhen the container is resized and only changes when its own handle is dragged."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"This makes it possible to mix a fixed-width sidebar with a fluid content pane that absorbs the\nremaining space:"}),"\n",(0,t.jsx)(l,{data:r.SplitterDemos.cssUnits}),"\n",(0,t.jsxs)(i.p,{children:["Sizes are reported back in the unit they were declared in: a ",(0,t.jsx)(i.code,{children:"'240px'"})," pane stays ",(0,t.jsx)(i.code,{children:"'240px'"})," in\n",(0,t.jsx)(i.code,{children:"sizes"})," / ",(0,t.jsx)(i.code,{children:"onSizeChange"}),", while a flexible pane reports its resolved percentage. When the container\nbecomes smaller than the sum of the fixed panes, fixed panes shrink proportionally."]}),"\n",(0,t.jsx)(i.h2,{id:"vertical-orientation",children:"Vertical orientation"}),"\n",(0,t.jsxs)(i.p,{children:["Set ",(0,t.jsx)(i.code,{children:'orientation="vertical"'})," to split panes vertically:"]}),"\n",(0,t.jsx)(l,{data:r.SplitterDemos.vertical}),"\n",(0,t.jsx)(i.h2,{id:"collapsible-panes",children:"Collapsible panes"}),"\n",(0,t.jsxs)(i.p,{children:["Set ",(0,t.jsx)(i.code,{children:"collapsible"})," prop on ",(0,t.jsx)(i.code,{children:"Splitter.Pane"})," to allow the pane to be collapsed\nby dragging past its minimum size. Use ",(0,t.jsx)(i.code,{children:"splitterRef"})," to access imperative API\nfor programmatic collapse/expand:"]}),"\n",(0,t.jsx)(l,{data:r.SplitterDemos.collapsible}),"\n",(0,t.jsx)(i.h2,{id:"controlled",children:"Controlled"}),"\n",(0,t.jsxs)(i.p,{children:["To control panel sizes, use ",(0,t.jsx)(i.code,{children:"sizes"})," and ",(0,t.jsx)(i.code,{children:"onSizeChange"})," props:"]}),"\n",(0,t.jsx)(l,{data:r.SplitterDemos.controlled}),"\n",(0,t.jsx)(i.h2,{id:"multiple-panes",children:"Multiple panes"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"Splitter"})," supports any number of panes. Handles are automatically rendered between panes:"]}),"\n",(0,t.jsx)(l,{data:r.SplitterDemos.multiple}),"\n",(0,t.jsx)(i.h2,{id:"nested-splitters",children:"Nested splitters"}),"\n",(0,t.jsxs)(i.p,{children:["You can nest ",(0,t.jsx)(i.code,{children:"Splitter"})," components to create complex layouts:"]}),"\n",(0,t.jsx)(l,{data:r.SplitterDemos.nested}),"\n",(0,t.jsx)(i.h2,{id:"redistribute",children:"Redistribute"}),"\n",(0,t.jsxs)(i.p,{children:["When using multiple panes, set ",(0,t.jsx)(i.code,{children:"redistribute"})," prop to control how space is borrowed from\nnon-adjacent panels when the immediate neighbor is at its min/max:"]}),"\n",(0,t.jsx)(l,{data:r.SplitterDemos.redistribute}),"\n",(0,t.jsx)(i.h2,{id:"line-size",children:"Line size"}),"\n",(0,t.jsxs)(i.p,{children:["Use ",(0,t.jsx)(i.code,{children:"lineSize"})," prop to control the thickness of the separator line between panes:"]}),"\n",(0,t.jsx)(l,{data:r.SplitterDemos.lineSize}),"\n",(0,t.jsx)(i.h2,{id:"without-handle",children:"Without handle"}),"\n",(0,t.jsxs)(i.p,{children:["Set ",(0,t.jsx)(i.code,{children:"withHandle={false}"})," to hide the thumb with grip icon. The separator line\nbetween panes is still visible and draggable:"]}),"\n",(0,t.jsx)(l,{data:r.SplitterDemos.withHandle}),"\n",(0,t.jsx)(i.h2,{id:"imperative-api",children:"Imperative API"}),"\n",(0,t.jsxs)(i.p,{children:["Use ",(0,t.jsx)(i.code,{children:"splitterRef"})," prop to access imperative splitter API:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-tsx",children:"import { useRef } from 'react';\nimport { Splitter } from '@mantine/core';\nimport { UseSplitterReturnValue } from '@mantine/hooks';\n\nfunction Demo() {\n  const splitterRef = useRef<UseSplitterReturnValue>(null);\n\n  return (\n    <>\n      <button onClick={() => splitterRef.current?.collapse(0)}>\n        Collapse first pane\n      </button>\n      <Splitter splitterRef={splitterRef}>\n        <Splitter.Pane defaultSize={50} min={20} collapsible>\n          First pane\n        </Splitter.Pane>\n        <Splitter.Pane defaultSize={50} min={20}>\n          Second pane\n        </Splitter.Pane>\n      </Splitter>\n    </>\n  );\n}\n"})}),"\n",(0,t.jsx)(i.h2,{id:"wrap-splitterpane",children:"Wrap Splitter.Pane"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"Splitter"})," component relies on ",(0,t.jsx)(i.code,{children:"Splitter.Pane"})," order. Wrapping ",(0,t.jsx)(i.code,{children:"Splitter.Pane"})," is not supported,\n",(0,t.jsx)(i.code,{children:"Splitter.Pane"})," must be a direct child of ",(0,t.jsx)(i.code,{children:"Splitter"}),"."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-tsx",children:"import { Splitter } from '@mantine/core';\n\n// This will not work – wrapped pane will not be recognized\nfunction WillNotWork() {\n  return (\n    <Splitter.Pane defaultSize={50} min={20}>\n      This part will not render correctly\n    </Splitter.Pane>\n  );\n}\n\n// Create a separate component for pane content instead\nfunction PaneContent() {\n  return <div>This will work as expected!</div>;\n}\n\nfunction Demo() {\n  return (\n    <Splitter h={200}>\n      <Splitter.Pane defaultSize={50} min={20}>\n        First pane\n      </Splitter.Pane>\n      {/* Do not wrap Splitter.Pane in another component */}\n      {/* <WillNotWork /> */}\n      <Splitter.Pane defaultSize={50} min={20}>\n        <PaneContent />\n      </Splitter.Pane>\n    </Splitter>\n  );\n}\n"})}),"\n",(0,t.jsx)(i.h2,{id:"use-splitter-hook",children:"use-splitter hook"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"Splitter"})," component is built on top of the ",(0,t.jsx)(i.a,{href:"/hooks/use-splitter/",children:"use-splitter"})," hook.\nIf you need more control over the layout and styling, you can use the hook directly."]})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(a,{...e,children:(0,t.jsx)(s,{...e})})}])},359410,(e,t,n)=>{let r="/core/splitter";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(656519)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);