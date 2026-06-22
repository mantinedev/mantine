(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var a=Object.defineProperty;e.s(["__exportAll",0,(e,t)=>{let r={};for(var n in e)a(r,n,{get:e[n],enumerable:!0});return t||a(r,Symbol.toStringTag,{value:"Module"}),r}])},20035,e=>{"use strict";var a=e.i(481178),t=e.i(44091),r=e.i(391466),n=e.i(83353),o=e.i(275519),l=e.i(232471);let[i,s]=(0,e.i(386179).createSafeContext)("Grid component was not found in tree");var c={container:"m_8478a6da",root:"m_410352e9",inner:"m_dee7bd2f",col:"m_96bdd299"},d=e.i(76112),m=e.i(931718),u=e.i(230780),p=e.i(496766),h=e.i(951254),f=e.i(871346),x=e.i(391398);let g=(e,a)=>"content"===e?"auto":"auto"===e?"0rem":e?e===a?"100%":`calc(${100*e/a}% - ${(a-e)/a} * var(--grid-column-gap))`:void 0,y=(e,a,t)=>t||"auto"===e?"100%":"content"===e?"unset":g(e,a),v=(e,a)=>{if(e)return"auto"===e||a?"1":"auto"},b=(e,a)=>0===e?"0":e?`calc(${100*e/a}% + ${e/a} * var(--grid-column-gap))`:void 0;function C({span:e,order:a,offset:t,align:r,selector:n}){let o=(0,h.useMantineTheme)(),l=s(),i=l.breakpoints||o.breakpoints,c=(0,p.getBaseValue)(e),A=void 0===c?12:c,j=(0,m.filterProps)({"--col-order":(0,p.getBaseValue)(a)?.toString(),"--col-flex-grow":v(A,l.grow),"--col-flex-basis":g(A,l.columns),"--col-width":"content"===A?"auto":void 0,"--col-max-width":y(A,l.columns,l.grow),"--col-offset":b((0,p.getBaseValue)(t),l.columns),"--col-align-self":(0,p.getBaseValue)(r)}),w=(0,d.keys)(i).reduce((n,o)=>(n[o]||(n[o]={}),"object"==typeof a&&void 0!==a[o]&&(n[o]["--col-order"]=a[o]?.toString()),"object"==typeof e&&void 0!==e[o]&&(n[o]["--col-flex-grow"]=v(e[o],l.grow),n[o]["--col-flex-basis"]=g(e[o],l.columns),n[o]["--col-width"]="content"===e[o]?"auto":void 0,n[o]["--col-max-width"]=y(e[o],l.columns,l.grow)),"object"==typeof t&&void 0!==t[o]&&(n[o]["--col-offset"]=b(t[o],l.columns)),"object"==typeof r&&void 0!==r[o]&&(n[o]["--col-align-self"]=r[o]),n),{}),k=(0,u.getSortedBreakpoints)((0,d.keys)(w),i).filter(e=>(0,d.keys)(w[e.value]).length>0).map(e=>({query:"container"===l.type?`mantine-grid (min-width: ${i[e.value]})`:`(min-width: ${i[e.value]})`,styles:w[e.value]}));return(0,x.jsx)(f.InlineStyles,{styles:j,media:"container"===l.type?void 0:k,container:"container"===l.type?k:void 0,selector:n})}var A=e.i(56206);let j={span:12},w=(0,o.factory)(e=>{let{classNames:a,className:r,style:o,styles:i,vars:c,span:d,order:m,offset:u,align:p,...h}=(0,t.useProps)("GridCol",j,e),f=s(),g=(0,n.useRandomClassName)();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(C,{selector:`.${g}`,span:d,order:m,offset:u,align:p}),(0,x.jsx)(l.Box,{...f.getStyles("col",{className:(0,A.default)(r,g),style:o,classNames:a,styles:i}),...h})]})});w.classes=c,w.displayName="@mantine/core/GridCol";var k=e.i(433512);function E({gap:e,rowGap:a,columnGap:t,selector:r,breakpoints:n,type:o}){let l=(0,h.useMantineTheme)(),i=n||l.breakpoints,s=(0,m.filterProps)({"--grid-gap":(0,k.getSpacing)((0,p.getBaseValue)(e)),"--grid-row-gap":(0,k.getSpacing)((0,p.getBaseValue)(a)),"--grid-column-gap":(0,k.getSpacing)((0,p.getBaseValue)(t))}),c=(0,d.keys)(i).reduce((r,n)=>(r[n]||(r[n]={}),"object"==typeof e&&void 0!==e[n]&&(r[n]["--grid-gap"]=(0,k.getSpacing)(e[n])),"object"==typeof a&&void 0!==a[n]&&(r[n]["--grid-row-gap"]=(0,k.getSpacing)(a[n])),"object"==typeof t&&void 0!==t[n]&&(r[n]["--grid-column-gap"]=(0,k.getSpacing)(t[n])),r),{}),g=(0,u.getSortedBreakpoints)((0,d.keys)(c),i).filter(e=>(0,d.keys)(c[e.value]).length>0).map(e=>({query:"container"===o?`mantine-grid (min-width: ${i[e.value]})`:`(min-width: ${i[e.value]})`,styles:c[e.value]}));return(0,x.jsx)(f.InlineStyles,{styles:s,media:"container"===o?void 0:g,container:"container"===o?g:void 0,selector:r})}let S={gap:"md",columns:12},N=(0,a.createVarsResolver)((e,{justify:a,align:t,overflow:r})=>({root:{"--grid-justify":a,"--grid-align":t,"--grid-overflow":r}})),D=(0,o.factory)(e=>{let a=(0,t.useProps)("Grid",S,e),{classNames:o,className:s,style:d,styles:m,unstyled:u,vars:p,grow:h,gap:f,rowGap:g,columnGap:y,columns:v,align:b,justify:C,children:A,breakpoints:j,type:w,attributes:k,...D}=a,T=(0,r.useStyles)({name:"Grid",classes:c,props:a,className:s,style:d,classNames:o,styles:m,unstyled:u,attributes:k,vars:p,varsResolver:N}),V=(0,n.useRandomClassName)();return"container"===w&&j?(0,x.jsxs)(i,{value:{getStyles:T,grow:h,columns:v,breakpoints:j,type:w},children:[(0,x.jsx)(E,{selector:`.${V}`,...a}),(0,x.jsx)("div",{...T("container"),children:(0,x.jsx)(l.Box,{...T("root",{className:V}),...D,children:(0,x.jsx)("div",{...T("inner"),children:A})})})]}):(0,x.jsxs)(i,{value:{getStyles:T,grow:h,columns:v,breakpoints:j,type:w},children:[(0,x.jsx)(E,{selector:`.${V}`,...a}),(0,x.jsx)(l.Box,{...T("root",{className:V}),...D,children:(0,x.jsx)("div",{...T("inner"),children:A})})]})});D.classes=c,D.varsResolver=N,D.displayName="@mantine/core/Grid",D.Col=w,e.s(["Grid",0,D],20035)},414124,e=>{"use strict";var a=e.i(191788),t=e.i(171481);let r=new Map([["bold",a.createElement(a.Fragment,null,a.createElement("path",{d:"M108,60A16,16,0,1,1,92,44,16,16,0,0,1,108,60Zm56,16a16,16,0,1,0-16-16A16,16,0,0,0,164,76ZM92,112a16,16,0,1,0,16,16A16,16,0,0,0,92,112Zm72,0a16,16,0,1,0,16,16A16,16,0,0,0,164,112ZM92,180a16,16,0,1,0,16,16A16,16,0,0,0,92,180Zm72,0a16,16,0,1,0,16,16A16,16,0,0,0,164,180Z"}))],["duotone",a.createElement(a.Fragment,null,a.createElement("path",{d:"M208,32V224a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V32A16,16,0,0,1,64,16H192A16,16,0,0,1,208,32Z",opacity:"0.2"}),a.createElement("path",{d:"M104,60A12,12,0,1,1,92,48,12,12,0,0,1,104,60Zm60,12a12,12,0,1,0-12-12A12,12,0,0,0,164,72ZM92,116a12,12,0,1,0,12,12A12,12,0,0,0,92,116Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,116ZM92,184a12,12,0,1,0,12,12A12,12,0,0,0,92,184Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,184Z"}))],["fill",a.createElement(a.Fragment,null,a.createElement("path",{d:"M192,16H64A16,16,0,0,0,48,32V224a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V32A16,16,0,0,0,192,16ZM100,200a12,12,0,1,1,12-12A12,12,0,0,1,100,200Zm0-60a12,12,0,1,1,12-12A12,12,0,0,1,100,140Zm0-60a12,12,0,1,1,12-12A12,12,0,0,1,100,80Zm56,120a12,12,0,1,1,12-12A12,12,0,0,1,156,200Zm0-60a12,12,0,1,1,12-12A12,12,0,0,1,156,140Zm0-60a12,12,0,1,1,12-12A12,12,0,0,1,156,80Z"}))],["light",a.createElement(a.Fragment,null,a.createElement("path",{d:"M102,60A10,10,0,1,1,92,50,10,10,0,0,1,102,60Zm62,10a10,10,0,1,0-10-10A10,10,0,0,0,164,70ZM92,118a10,10,0,1,0,10,10A10,10,0,0,0,92,118Zm72,0a10,10,0,1,0,10,10A10,10,0,0,0,164,118ZM92,186a10,10,0,1,0,10,10A10,10,0,0,0,92,186Zm72,0a10,10,0,1,0,10,10A10,10,0,0,0,164,186Z"}))],["regular",a.createElement(a.Fragment,null,a.createElement("path",{d:"M104,60A12,12,0,1,1,92,48,12,12,0,0,1,104,60Zm60,12a12,12,0,1,0-12-12A12,12,0,0,0,164,72ZM92,116a12,12,0,1,0,12,12A12,12,0,0,0,92,116Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,116ZM92,184a12,12,0,1,0,12,12A12,12,0,0,0,92,184Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,184Z"}))],["thin",a.createElement(a.Fragment,null,a.createElement("path",{d:"M100,60a8,8,0,1,1-8-8A8,8,0,0,1,100,60Zm64,8a8,8,0,1,0-8-8A8,8,0,0,0,164,68ZM92,120a8,8,0,1,0,8,8A8,8,0,0,0,92,120Zm72,0a8,8,0,1,0,8,8A8,8,0,0,0,164,120ZM92,188a8,8,0,1,0,8,8A8,8,0,0,0,92,188Zm72,0a8,8,0,1,0,8,8A8,8,0,0,0,164,188Z"}))]]),n=a.forwardRef((e,n)=>a.createElement(t.default,{ref:n,...e,weights:r}));n.displayName="DotsSixVerticalIcon",e.s(["DotsSixVerticalIcon",0,n],414124)},328940,e=>{"use strict";var a=e.i(779177),t=e.i(433512),r=e.i(312773),n=e.i(481178),o=e.i(317477),l=e.i(44091),i=e.i(391466),s=e.i(275519),c=e.i(323283),d=e.i(55383),m=e.i(585968),u=e.i(782814),p=e.i(130624),h=e.i(23168),f=e.i(635961),x=e.i(846711),g=e.i(178372),y=e.i(229737),v=e.i(504297),b=e.i(191788),C=e.i(852361),A=e.i(332977),j=e.i(502315),w=e.i(579560),k=e.i(391398);let E=(0,n.createVarsResolver)((e,{size:r,color:n,thumbSize:l,radius:i})=>({root:{"--slider-size":(0,t.getSize)(r,"slider-size"),"--slider-color":n?(0,o.getThemeColor)(n,e):void 0,"--slider-radius":void 0===i?void 0:(0,t.getRadius)(i),"--slider-thumb-size":void 0!==l?(0,a.rem)(l):"calc(var(--slider-size) * 2)"}})),S={min:0,max:100,minRange:10,step:1,marks:[],label:e=>e,labelTransitionProps:{transition:"fade",duration:0},labelAlwaysOn:!1,showLabelOnHover:!0,disabled:!1,pushOnOverlap:!0,scale:e=>e,size:"md",maxRange:1/0},N=(0,s.factory)(e=>{let a=(0,l.useProps)("RangeSlider",S,e),{classNames:t,styles:n,value:o,onChange:s,onChangeEnd:N,size:D,min:T,max:V,domain:L,minRange:M,maxRange:G,step:P,precision:I,defaultValue:O,name:B,marks:R,label:F,labelTransitionProps:Z,labelAlwaysOn:z,thumbFromLabel:W,thumbToLabel:H,thumbValueText:K,showLabelOnHover:_,thumbChildren:U,disabled:$,unstyled:q,scale:Y,inverted:X,orientation:J,className:Q,style:ee,vars:ea,hiddenInputProps:et,restrictToMarks:er,thumbProps:en,pushOnOverlap:eo,attributes:el,ref:ei,...es}=a,ec=(0,i.useStyles)({name:"RangeSlider",props:a,classes:v.default,classNames:t,className:Q,styles:n,style:ee,attributes:el,vars:ea,varsResolver:E,unstyled:q}),ed=(0,b.useRef)(null),{dir:em}=(0,c.useDirection)(),[eu,ep]=(0,b.useState)(-1),[eh,ef]=(0,b.useState)(!1),[ex,eg]=(0,w.useUncontrolled)({value:o,defaultValue:O,finalValue:[T,V],onChange:s}),ey=(0,b.useRef)(ex),ev=(0,b.useRef)([]),eb=(0,b.useRef)(null),eC=(0,b.useRef)(void 0),[eA,ej]=L||[T,V],ew=[(0,p.getPosition)({value:ex[0],min:eA,max:ej}),(0,p.getPosition)({value:ex[1],min:eA,max:ej})],ek=I??(0,g.getPrecision)(P);(0,b.useEffect)(()=>{Array.isArray(o)&&(ey.current=o)},Array.isArray(o)?[o[0],o[1]]:[null,null]);let eE=(e,a,t)=>{if(-1===a)return;let n=[...ey.current];if(er&&R){let t=(0,r.findClosestNumber)(e,R.map(e=>e.value)),o=n[a];n[a]=t;let l=+(0===a),i=(0,y.getLastMarkValue)(R),s=(0,y.getFirstMarkValue)(R);t===i&&n[l]===i||t===s&&n[l]===s?n[a]=o:t===n[l]&&(o>n[l]?n[l]=(0,y.getPreviousMarkValue)(t,R):n[l]=(0,y.getNextMarkValue)(t,R))}else{let t=(0,C.clamp)(e,T,V);n[a]=t,0===a&&(t>n[1]-(M-1e-9)&&(eo?n[1]=Math.min(e+M,V):n[a]=ey.current[a]),t>(V-(M-1e-9)||T)&&(n[a]=ey.current[a]),n[1]-e>G&&(eo?n[1]=e+G:n[a]=ey.current[a])),1===a&&(t<n[0]+M&&(eo?n[0]=Math.max(e-M,T):n[a]=ey.current[a]),t<n[0]+M&&(n[a]=ey.current[a]),t-n[0]>G&&(eo?n[0]=e-G:n[a]=ey.current[a]))}if(n[0]=(0,x.getFloatingValue)(n[0],ek),n[1]=(0,x.getFloatingValue)(n[1],ek),n[0]>n[1]){let e=n[0];n[0]=n[1],n[1]=e}eg(n),ey.current=n,t&&N?.(ey.current)},{ref:eS,active:eN}=(0,j.useMove)(({x:e,y:a})=>{var t;return t="vertical"===J?1-a:e,void(!$&&void 0!==eC.current&&eE((0,f.getChangeValue)({value:t,min:eA,max:ej,step:P,precision:ek}),eC.current,!1))},{onScrubEnd:()=>!$&&N?.(ey.current)},em),eD=e=>{if(ed.current){ed.current.focus();let a=ed.current.getBoundingClientRect(),t=function(e,a){if("TouchEvent"in window&&e instanceof window.TouchEvent){let t=e.touches[0];return"vertical"===a?t.clientY:t.clientX}return"vertical"===a?e.clientY:e.clientX}(e.nativeEvent,J),r="vertical"===J?(0,f.getChangeValue)({value:a.bottom-t,max:V,min:T,step:P,containerWidth:a.height}):(0,f.getChangeValue)({value:t-a.left,max:V,min:T,step:P,containerWidth:a.width}),n=+(Math.abs(ex[0]-r)>Math.abs(ex[1]-r));eC.current="vertical"===J||"ltr"===em?n:+(1!==n)}},eT=()=>1!==eu&&0!==eu?(ep(0),0):eu,eV={max:V,min:T,size:D,labelTransitionProps:Z,labelAlwaysOn:z,orientation:J,onBlur:()=>ep(-1)},eL=Array.isArray(U);return(0,k.jsx)(d.SliderProvider,{value:{getStyles:ec},children:(0,k.jsxs)(m.SliderRoot,{...es,size:D,ref:(0,A.useMergedRef)(ei,eb),disabled:$,orientation:J,onMouseDownCapture:()=>eb.current?.focus(),onKeyDownCapture:()=>{ev.current[0]?.parentElement?.contains(document.activeElement)||ev.current[0]?.focus()},children:[(0,k.jsxs)(h.Track,{offset:ew[0],marksOffset:ex[0],filled:ew[1]-ew[0],marks:R,inverted:X,min:eA,max:ej,value:ex[1],disabled:$,containerProps:{ref:(0,A.useMergedRef)(ed,eS),onMouseEnter:_?()=>ef(!0):void 0,onMouseLeave:_?()=>ef(!1):void 0,onTouchStartCapture:eD,onTouchEndCapture:()=>{eC.current=-1},onMouseDownCapture:eD,onMouseUpCapture:()=>{eC.current=-1},onKeyDownCapture:e=>{if(!$)switch(e.key){case"ArrowUp":{e.preventDefault();let a=eT();ev.current[a].focus(),eE((0,x.getFloatingValue)(er&&R?(0,y.getNextMarkValue)(ey.current[a],R):Math.min(Math.max(ey.current[a]+P,eA),ej),ek),a,!0);break}case"ArrowRight":{e.preventDefault();let a=eT();ev.current[a].focus(),eE((0,x.getFloatingValue)(er&&R?("rtl"===em?y.getPreviousMarkValue:y.getNextMarkValue)(ey.current[a],R):Math.min(Math.max("rtl"===em?ey.current[a]-P:ey.current[a]+P,eA),ej),ek),a,!0);break}case"ArrowDown":{e.preventDefault();let a=eT();ev.current[a].focus(),eE((0,x.getFloatingValue)(er&&R?(0,y.getPreviousMarkValue)(ey.current[a],R):Math.min(Math.max(ey.current[a]-P,eA),ej),ek),a,!0);break}case"ArrowLeft":{e.preventDefault();let a=eT();ev.current[a].focus(),eE((0,x.getFloatingValue)(er&&R?("rtl"===em?y.getNextMarkValue:y.getPreviousMarkValue)(ey.current[a],R):Math.min(Math.max("rtl"===em?ey.current[a]+P:ey.current[a]-P,eA),ej),ek),a,!0)}}}},children:[(0,k.jsx)(u.Thumb,{...eV,value:Y(ex[0]),position:ew[0],dragging:eN,label:"function"==typeof F?F((0,x.getFloatingValue)(Y(ex[0]),ek)):F,ref:e=>{e&&(ev.current[0]=e)},thumbLabel:W,thumbValueText:K,onMouseDown:()=>void(eC.current=0),onFocus:()=>ep(0),showLabelOnHover:_,isHovered:eh,disabled:$,...en?.(0),children:eL?U[0]:U}),(0,k.jsx)(u.Thumb,{...eV,thumbLabel:H,value:Y(ex[1]),position:ew[1],dragging:eN,label:"function"==typeof F?F((0,x.getFloatingValue)(Y(ex[1]),ek)):F,ref:e=>{e&&(ev.current[1]=e)},thumbValueText:K,onMouseDown:()=>void(eC.current=1),onFocus:()=>ep(1),showLabelOnHover:_,isHovered:eh,disabled:$,...en?.(1),children:eL?U[1]:U})]}),(0,k.jsx)("input",{type:"hidden",name:`${B}_from`,value:ex[0],...et}),(0,k.jsx)("input",{type:"hidden",name:`${B}_to`,value:ex[1],...et})]})})});N.classes=v.default,N.varsResolver=E,N.displayName="@mantine/core/RangeSlider",e.s(["RangeSlider",0,N],328940)},501655,e=>{"use strict";var a=e.i(648863),t=e.i(60695),r=e.i(391398);let n={type:"configurator",component:function(e){return(0,r.jsx)(t.Slider,{defaultValue:40,marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}],...e})},code:`
import { Slider } from '@mantine/core';


function Demo() {
  return (
    <Slider
      {{props}}
      defaultValue={40}
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
    />
  );
}
`,centered:!0,maxWidth:400,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"__none__"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"showLabelOnHover",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"labelAlwaysOn",type:"boolean",initialValue:!1,libraryValue:!1}]};var o={track:"m_7b015c03",mark:"m_88156515",markLabel:"m_beb40edf",thumb:"m_7afd1c8e"},l=e.i(232471);let i={type:"code",component:function(){return(0,r.jsx)(l.Box,{maw:400,pt:15,pb:20,mx:"auto",children:(0,r.jsx)(t.Slider,{defaultValue:40,size:2,classNames:o,marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}]})})},code:[{fileName:"Demo.tsx",code:`
import { Slider } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Slider
      defaultValue={40}
      size={2}
      classNames={classes}
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
    />
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`
.track {
  &::before {
    background-color: light-dark(var(--mantine-color-blue-1), var(--mantine-color-dark-3));
  }
}

.mark {
  width: 6px;
  height: 6px;
  border-radius: 6px;
  transform: translateX(-3px) translateY(-2px);
  border-color: light-dark(var(--mantine-color-blue-1), var(--mantine-color-dark-3));

  &[data-filled] {
    border-color: var(--mantine-color-blue-6);
  }
}

.markLabel {
  font-size: var(--mantine-font-size-xs);
  margin-bottom: 5px;
  margin-top: 0;
}

.thumb {
  height: 16px;
  width: 16px;
  background-color: var(--mantine-color-white);
  border-width: 1px;
  box-shadow: var(--mantine-shadow-sm);
}
`,language:"scss"}]},s={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.Slider,{defaultValue:40,marks:[{value:10},{value:40},{value:95}],mb:32}),(0,r.jsx)(t.Slider,{mb:32,defaultValue:40,marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}]})]})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Slider defaultValue={40} marks={[{ value: 10 }, { value: 40 }, { value: 95 }]} mb={32} />
      <Slider
        mb={32}
        defaultValue={40}
        marks={[
          { value: 20, label: '20%' },
          { value: 50, label: '50%' },
          { value: 80, label: '80%' },
        ]}
      />
    </>
  );
}
`,centered:!0,maxWidth:400};var c=e.i(883364);let d={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Text,{size:"sm",children:"No label"}),(0,r.jsx)(t.Slider,{defaultValue:40,label:null}),(0,r.jsx)(c.Text,{size:"sm",mt:"xl",children:"Formatted label"}),(0,r.jsx)(t.Slider,{defaultValue:40,label:e=>`${e} \xb0C`}),(0,r.jsx)(c.Text,{size:"sm",mt:"xl",children:"Label always visible"}),(0,r.jsx)(t.Slider,{defaultValue:40,labelAlwaysOn:!0}),(0,r.jsx)(c.Text,{size:"sm",mt:"xl",children:"Custom label transition"}),(0,r.jsx)(t.Slider,{defaultValue:40,labelTransitionProps:{transition:"skew-down",duration:150,timingFunction:"linear"}})]})},code:`
import { Slider, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="sm">No label</Text>
      <Slider defaultValue={40} label={null} />

      <Text size="sm" mt="xl">Formatted label</Text>
      <Slider defaultValue={40} label={(value) => \`\${value} \xb0C\`} />

      <Text size="sm" mt="xl">Label always visible</Text>
      <Slider defaultValue={40} labelAlwaysOn />

      <Text size="sm" mt="xl">Custom label transition</Text>
      <Slider
        defaultValue={40}
        labelTransitionProps={{
          transition: 'skew-down',
          duration: 150,
          timingFunction: 'linear',
        }}
      />
    </>
  );
}
`,centered:!0,maxWidth:400},m=[{value:0,label:"xs"},{value:25,label:"sm"},{value:50,label:"md"},{value:75,label:"lg"},{value:100,label:"xl"}],u={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Text,{children:"Decimal step"}),(0,r.jsx)(t.Slider,{defaultValue:0,min:-10,max:10,label:e=>e.toFixed(1),step:.1,styles:{markLabel:{display:"none"}}}),(0,r.jsx)(c.Text,{mt:"md",children:"Step matched with marks"}),(0,r.jsx)(t.Slider,{defaultValue:50,label:e=>m.find(a=>a.value===e).label,step:25,marks:m,styles:{markLabel:{display:"none"}}})]})},code:`
import { Slider, Text } from '@mantine/core';

const marks = [
  { value: 0, label: 'xs' },
  { value: 25, label: 'sm' },
  { value: 50, label: 'md' },
  { value: 75, label: 'lg' },
  { value: 100, label: 'xl' },
];

function Demo() {
  return (
    <>
      <Text>Decimal step</Text>
      <Slider
        defaultValue={0}
        min={-10}
        max={10}
        label={(value) => value.toFixed(1)}
        step={0.1}
        styles={{ markLabel: { display: 'none' } }}
      />

      <Text mt="md">Step matched with marks</Text>
      <Slider
        defaultValue={50}
        label={(val) => marks.find((mark) => mark.value === val)!.label}
        step={25}
        marks={marks}
        styles={{ markLabel: { display: 'none' } }}
      />
    </>
  );
}
`,centered:!0,maxWidth:400};var p=e.i(191788);let h={type:"code",component:function(){let[e,a]=(0,p.useState)(50),[n,o]=(0,p.useState)(50);return(0,r.jsxs)(l.Box,{maw:400,mx:"auto",children:[(0,r.jsx)(t.Slider,{value:e,onChange:a,onChangeEnd:o}),(0,r.jsxs)(c.Text,{mt:"md",size:"sm",children:["onChange value: ",(0,r.jsx)("b",{children:e})]}),(0,r.jsxs)(c.Text,{mt:5,size:"sm",children:["onChangeEnd value: ",(0,r.jsx)("b",{children:n})]})]})},code:`
import { useState } from 'react';
import { Slider, Text, Box } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(50);
  const [endValue, setEndValue] = useState(50);

  return (
    <Box maw={400} mx="auto">
      <Slider value={value} onChange={setValue} onChangeEnd={setEndValue} />

      <Text mt="md" size="sm">
        onChange value: <b>{value}</b>
      </Text>
      <Text mt={5} size="sm">
        onChangeEnd value: <b>{endValue}</b>
      </Text>
    </Box>
  );
}
`},f={type:"code",component:function(){return(0,r.jsx)(t.Slider,{defaultValue:60,disabled:!0})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider defaultValue={60} disabled />;
}
`,centered:!0,maxWidth:340},x={type:"configurator",component:function(e){return(0,r.jsx)(t.Slider,{...e,defaultValue:20})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider{{props}} defaultValue={20} />;
}
`,maxWidth:400,centered:!0,controls:[{prop:"thumbSize",type:"number",min:16,max:32,initialValue:14,libraryValue:null}]};var g=e.i(171481);let y=new Map([["bold",p.createElement(p.Fragment,null,p.createElement("path",{d:"M178,36a65.6,65.6,0,0,0-46.67,19.33L128,58.66l-3.33-3.33A66,66,0,0,0,12,102c0,72.34,105.81,130.14,110.31,132.57a12,12,0,0,0,11.38,0C138.19,232.14,244,174.34,244,102A66.08,66.08,0,0,0,178,36Zm-5.49,142.36A328.69,328.69,0,0,1,128,210.16a328.69,328.69,0,0,1-44.51-31.8C61.82,159.77,36,131.42,36,102a42,42,0,0,1,71.7-29.7L111,75.63l-7.52,7.52a12,12,0,0,0,0,17l21.7,21.7-13.7,13.69a12,12,0,1,0,17,17l22.18-22.19a12,12,0,0,0,0-17L129,91.63,148.3,72.3A42,42,0,0,1,220,102C220,131.42,194.18,159.77,172.51,178.36Z"}))],["duotone",p.createElement(p.Fragment,null,p.createElement("path",{d:"M232,102c0,66-104,122-104,122S24,168,24,102a54,54,0,0,1,92.18-38.18L128,75.63l11.82-11.81A54,54,0,0,1,232,102Z",opacity:"0.2"}),p.createElement("path",{d:"M178,40a61.6,61.6,0,0,0-43.84,18.16L128,64.32l-6.16-6.16A62,62,0,0,0,16,102c0,70,103.79,126.67,108.21,129a8,8,0,0,0,7.58,0C136.21,228.67,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102a46,46,0,0,1,78.53-32.53l6.16,6.16L106.34,86a8,8,0,0,0,0,11.31l24.53,24.53-16.53,16.52a8,8,0,0,0,11.32,11.32l22.18-22.19a8,8,0,0,0,0-11.31L123.31,91.63l22.16-22.16A46,46,0,0,1,224,102C224,155.61,146.24,204.15,128,214.8Z"}))],["fill",p.createElement(p.Fragment,null,p.createElement("path",{d:"M239.81,107.5c-5.19,67.42-103.7,121.23-108,123.54a8,8,0,0,1-7.58,0C119.8,228.67,16,172,16,102a62,62,0,0,1,96.47-51.55,4,4,0,0,1,.61,6.17L99.72,70a8,8,0,0,0,0,11.31l32.53,32.53L111,135a8,8,0,1,0,11.31,11.31l26.88-26.87a8,8,0,0,0,0-11.31L116.7,75.63l17.47-17.47h0A61.63,61.63,0,0,1,178.41,40C214.73,40.23,242.59,71.29,239.81,107.5Z"}))],["light",p.createElement(p.Fragment,null,p.createElement("path",{d:"M178,42a59.63,59.63,0,0,0-42.43,17.57L128,67.15l-7.57-7.58A60,60,0,0,0,18,102c0,29.2,18.2,59.59,54.1,90.31a334.68,334.68,0,0,0,53.06,37,6,6,0,0,0,5.68,0,334.68,334.68,0,0,0,53.06-37C219.8,161.59,238,131.2,238,102A60.07,60.07,0,0,0,178,42ZM128,217.11C111.59,207.64,30,157.72,30,102a48,48,0,0,1,81.94-33.94l7.57,7.57L107.76,87.39a6,6,0,0,0,0,8.49l25.94,25.94-17.94,17.94a6,6,0,0,0,8.48,8.48l22.19-22.18a6,6,0,0,0,0-8.49L120.49,91.63l23.57-23.57A48,48,0,0,1,226,102C226,157.72,144.41,207.64,128,217.11Z"}))],["regular",p.createElement(p.Fragment,null,p.createElement("path",{d:"M178,40a61.6,61.6,0,0,0-43.84,18.16L128,64.32l-6.16-6.16A62,62,0,0,0,16,102c0,70,103.79,126.67,108.21,129a8,8,0,0,0,7.58,0C136.21,228.67,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102a46,46,0,0,1,78.53-32.53l6.16,6.16L106.34,86a8,8,0,0,0,0,11.31l24.53,24.53-16.53,16.52a8,8,0,0,0,11.32,11.32l22.18-22.19a8,8,0,0,0,0-11.31L123.31,91.63l22.16-22.16A46,46,0,0,1,224,102C224,155.61,146.24,204.15,128,214.8Z"}))],["thin",p.createElement(p.Fragment,null,p.createElement("path",{d:"M178,44a57.59,57.59,0,0,0-41,17l-9,9-9-9a58,58,0,0,0-99,41c0,28.59,18,58.47,53.4,88.79a333.81,333.81,0,0,0,52.7,36.73,4,4,0,0,0,3.8,0,333.81,333.81,0,0,0,52.7-36.73C218,160.47,236,130.59,236,102A58.07,58.07,0,0,0,178,44ZM128,219.42c-14-8-100-59.35-100-117.42a50,50,0,0,1,85.36-35.36l9,9L109.17,88.8a4,4,0,0,0,0,5.66l27.36,27.36-19.36,19.35a4,4,0,0,0,5.66,5.66L145,124.64a4,4,0,0,0,0-5.65L117.66,91.63l13.16-13.16h0l11.8-11.81A50,50,0,0,1,228,102C228,160,142,211.46,128,219.42Z"}))]]),v=p.forwardRef((e,a)=>p.createElement(g.default,{ref:a,...e,weights:y}));v.displayName="HeartBreakIcon";var b=e.i(853907),C=e.i(328940);let A={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.Slider,{thumbChildren:(0,r.jsx)(b.HeartIcon,{size:16}),color:"red",label:null,defaultValue:40,thumbSize:26,styles:{thumb:{borderWidth:2,padding:3}}}),(0,r.jsx)(C.RangeSlider,{mt:"xl",styles:{thumb:{borderWidth:2,padding:3}},color:"red",label:null,defaultValue:[20,60],thumbSize:26,thumbChildren:[(0,r.jsx)(b.HeartIcon,{size:16},"1"),(0,r.jsx)(v,{size:16},"2")]})]})},code:`
import { Slider, RangeSlider } from '@mantine/core';
import { HeartIcon, HeartBreakIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <>
      <Slider
        thumbChildren={<HeartIcon size={16} />}
        color="red"
        label={null}
        defaultValue={40}
        thumbSize={26}
        styles={{ thumb: { borderWidth: 2, padding: 3 } }}
      />

      <RangeSlider
        mt="xl"
        styles={{ thumb: { borderWidth: 2, padding: 3 } }}
        color="red"
        label={null}
        defaultValue={[20, 60]}
        thumbSize={26}
        thumbChildren={[<HeartIcon size={16} key="1" />, <HeartBreakIcon size={16} key="2" />]}
      />
    </>
  );
}
`,maxWidth:400,centered:!0};function j(e){let a=["KB","MB","GB","TB"],t=0,r=e;for(;r>=1024&&t<a.length-1;)t+=1,r/=1024;return`${r} ${a[t]}`}let w=e=>2**e,k={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.Slider,{scale:w,step:1,min:2,max:30,labelAlwaysOn:!0,defaultValue:10,label:j}),(0,r.jsx)(C.RangeSlider,{mt:50,scale:w,step:1,min:2,max:30,labelAlwaysOn:!0,defaultValue:[10,20],label:j})]})},code:`
import { RangeSlider, Slider } from '@mantine/core';

function valueLabelFormat(value: number) {
  const units = ['KB', 'MB', 'GB', 'TB'];

  let unitIndex = 0;
  let scaledValue = value;

  while (scaledValue >= 1024 && unitIndex < units.length - 1) {
    unitIndex += 1;
    scaledValue /= 1024;
  }

  return \`\${scaledValue} \${units[unitIndex]}\`;
}

const getScale = (v: number) => 2 ** v;

function Demo() {
  return (
    <>
      <Slider
        scale={getScale}
        step={1}
        min={2}
        max={30}
        labelAlwaysOn
        defaultValue={10}
        label={valueLabelFormat}
      />
      <RangeSlider
        mt={50}
        scale={getScale}
        step={1}
        min={2}
        max={30}
        labelAlwaysOn
        defaultValue={[10, 20]}
        label={valueLabelFormat}
      />
    </>
  );
}
`,centered:!0,maxWidth:400},E={type:"code",component:function(){return(0,r.jsx)(t.Slider,{inverted:!0,defaultValue:80})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider inverted defaultValue={80} />;
}
`,centered:!0,maxWidth:400};var S=e.i(220026);let N=`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider{{props}} marks={[{ value: 20, label: '20%' }, { value: 80, label: '80%' }]} labelAlwaysOn />;
}
`,D={type:"styles-api",data:S.SliderStylesApi,component:function(e){return(0,r.jsx)(t.Slider,{marks:[{value:20,label:"20%"},{value:80,label:"80%"}],defaultValue:40,labelAlwaysOn:!0,mb:40,...e})},code:N,centered:!0,maxWidth:400},T={type:"code",component:function(){return(0,r.jsx)(t.Slider,{min:0,max:1,step:5e-4,defaultValue:.5535})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider min={0} max={1} step={0.0005} defaultValue={0.5535} />;
}
`,centered:!0,maxWidth:340};var V="m_b2d44517",L=e.i(414124),M=e.i(852361),G=e.i(502315);let P={type:"code",component:function(){let[e,a]=(0,p.useState)(.3),{ref:t}=(0,G.useMove)(({x:e})=>a((0,M.clamp)(e,.1,.9))),n=e<.2||e>.8;return(0,r.jsx)("div",{className:"m_1e8dea5f",children:(0,r.jsxs)("div",{className:"m_b34cb76e",ref:t,children:[(0,r.jsx)("div",{className:"m_9decab9f",style:{width:`calc(${100*e}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)`},children:(0,r.jsx)("span",{className:V,"data-floating":n||void 0,"data-filled":!0,children:(100*e).toFixed(0)})}),(0,r.jsx)("div",{className:"m_b2774b70",style:{width:`calc(${(1-e)*100}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)`},children:(0,r.jsx)("span",{className:V,"data-floating":n||void 0,children:((1-e)*100).toFixed(0)})}),(0,r.jsx)("div",{className:"m_b34877f9",style:{left:`calc(${100*e}% - var(--thumb-width) / 2)`},children:(0,r.jsx)(L.DotsSixVerticalIcon,{})})]})})},code:[{fileName:"Demo.tsx",code:`
import { useState } from 'react';
import { DotsSixVerticalIcon } from '@phosphor-icons/react';
import { clamp, useMove } from '@mantine/hooks';
import classes from './Demo.module.css';

function Demo() {
  const [value, setValue] = useState(0.3);
  const { ref } = useMove(({ x }) => setValue(clamp(x, 0.1, 0.9)));
  const labelFloating = value < 0.2 || value > 0.8;

  return (
    <div className={classes.root}>
      <div className={classes.track} ref={ref}>
        <div
          className={classes.filled}
          style={{
            width: \`calc(\${value * 100}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)\`,
          }}
        >
          <span className={classes.label} data-floating={labelFloating || undefined} data-filled>
            {(value * 100).toFixed(0)}
          </span>
        </div>

        <div
          className={classes.empty}
          style={{
            width: \`calc(\${(1 - value) * 100}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)\`,
          }}
        >
          <span className={classes.label} data-floating={labelFloating || undefined}>
            {((1 - value) * 100).toFixed(0)}
          </span>
        </div>

        <div
          className={classes.thumb}
          style={{ left: \`calc(\${value * 100}% - var(--thumb-width) / 2)\` }}
        >
          <DotsSixVerticalIcon />
        </div>
      </div>
    </div>
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`
.root {
  padding-top: 20px;
}

.track {
  --thumb-width: 20px;
  --thumb-offset: 10px;

  position: relative;
  height: 60px;
  display: flex;
}

.filled {
  height: 100%;
  margin-right: calc(var(--thumb-offset) / 2 + var(--thumb-width) / 2);
  border-radius: var(--mantine-radius-md);
  background-color: var(--mantine-color-blue-filled);
  display: flex;
  align-items: center;
  padding-inline: 10px;
}

.empty {
  height: 100%;
  margin-left: calc(var(--thumb-offset) / 2 + var(--thumb-width) / 2);
  border-radius: var(--mantine-radius-md);
  background-color: var(--mantine-color-gray-1);
  display: flex;
  align-items: center;
  padding-inline: 10px;
  justify-content: flex-end;

  @mixin dark {
    background-color: var(--mantine-color-dark-6);
  }
}

.thumb {
  position: absolute;
  background-color: var(--mantine-color-white);
  border: 1px solid var(--mantine-color-gray-2);
  border-radius: var(--mantine-radius-md);
  height: 100%;
  width: var(--thumb-width);
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--mantine-color-gray-5);

  @mixin dark {
    background-color: var(--mantine-color-dark-6);
    border-color: var(--mantine-color-dark-4);
    color: var(--mantine-color-dark-0);
  }
}

.label {
  font-size: var(--mantine-font-size-xl);
  font-weight: 700;
  transition:
    transform 100ms ease,
    color 100ms ease;

  &[data-filled] {
    color: var(--mantine-color-white);
  }

  &[data-floating] {
    transform: translateY(-44px) translateX(-10px);
    color: var(--mantine-color-black);

    &:not([data-filled]) {
      transform: translateY(-44px) translateX(10px);
    }

    @mixin dark {
      color: var(--mantine-color-white);
    }
  }
}
`,language:"scss"}],maxWidth:500,centered:!0};var I=e.i(671640);let O={type:"code",component:function(){return(0,r.jsxs)(I.Stack,{children:[(0,r.jsx)(t.Slider,{restrictToMarks:!0,defaultValue:25,marks:Array.from({length:5}).map((e,a)=>({value:25*a}))}),(0,r.jsx)(C.RangeSlider,{restrictToMarks:!0,defaultValue:[5,15],marks:[{value:5},{value:15},{value:25},{value:35},{value:70},{value:80},{value:90}]})]})},code:`
import { RangeSlider, Slider, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Slider
        restrictToMarks
        defaultValue={25}
        marks={Array.from({ length: 5 }).map((_, index) => ({ value: index * 25 }))}
      />

      <RangeSlider
        restrictToMarks
        defaultValue={[5, 15]}
        marks={[
          { value: 5 },
          { value: 15 },
          { value: 25 },
          { value: 35 },
          { value: 70 },
          { value: 80 },
          { value: 90 },
        ]}
      />
    </Stack>
  );
}
`,centered:!0,maxWidth:400},B={type:"code",component:function(){return(0,r.jsx)(t.Slider,{domain:[0,100],min:10,max:90,defaultValue:25,mb:40,marks:[{value:10,label:"min"},{value:90,label:"max"}]})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return (
    <Slider
      domain={[0, 100]}
      min={10}
      max={90}
      defaultValue={25}
      marks={[
        { value: 10, label: 'min' },
        { value: 90, label: 'max' },
      ]}
    />
  );
}
`,maxWidth:400,centered:!0},R=[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}],F={type:"code",component:function(){return(0,r.jsxs)("div",{style:{display:"flex",gap:40},children:[(0,r.jsx)(t.Slider,{orientation:"vertical",defaultValue:45,marks:R}),(0,r.jsx)(C.RangeSlider,{orientation:"vertical",defaultValue:[25,65],marks:R})]})},code:`
import { RangeSlider, Slider } from '@mantine/core';

const marks = [
  { value: 20, label: '20%' },
  { value: 50, label: '50%' },
  { value: 80, label: '80%' },
];

function Demo() {
  return (
    <div style={{ display: 'flex', gap: 40 }}>
      <Slider orientation="vertical" defaultValue={45} marks={marks} />
      <RangeSlider orientation="vertical" defaultValue={[25, 65]} marks={marks} />
    </div>
  );
}
`,centered:!0},Z={type:"code",component:function(){let[e,a]=(0,p.useState)(50);return(0,r.jsxs)(l.Box,{pb:"md",children:[(0,r.jsxs)(c.Text,{size:"sm",mb:"xs",children:["Hidden marks allow you to snap to specific values without displaying them visually. Current value: ",e]}),(0,r.jsx)(t.Slider,{value:e,onChange:a,min:0,max:100,step:1,restrictToMarks:!0,marks:[{value:0,label:"0%"},{value:25,hidden:!0},{value:50,label:"50%"},{value:75,hidden:!0},{value:100,label:"100%"}]})]})},code:`
import { Slider, Text, Box } from '@mantine/core';
import { useState } from 'react';

function Demo() {
  const [value, setValue] = useState(50);

  return (
    <Box pb="md">
      <Text size="sm" mb="xs">
        Hidden marks allow you to snap to specific values without displaying them visually. Current
        value: {value}
      </Text>
      <Slider
        value={value}
        onChange={setValue}
        min={0}
        max={100}
        step={1}
        restrictToMarks
        marks={[
          { value: 0, label: '0%' },
          { value: 25, hidden: true },
          { value: 50, label: '50%' },
          { value: 75, hidden: true },
          { value: 100, label: '100%' },
        ]}
      />
    </Box>
  );
}
`},z={type:"code",component:function(){return(0,r.jsx)(t.Slider,{startPointValue:-50,min:-100,max:100,defaultValue:40,mb:40,marks:[{value:-100,label:"-100"},{value:-50,label:"-50"},{value:0,label:"0"},{value:50,label:"50"},{value:100,label:"100"}]})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return (
    <Slider
      startPointValue={0}
      min={-100}
      max={100}
      defaultValue={40}
      marks={[
        { value: -100, label: '-100' },
        { value: -50, label: '-50' },
        { value: 0, label: '0' },
        { value: 50, label: '50' },
        { value: 100, label: '100' },
      ]}
    />
  );
}
`,centered:!0,maxWidth:400};var W=(0,a.__exportAll)({changeEnd:()=>h,configurator:()=>n,customSlider:()=>P,customize:()=>i,decimal:()=>T,disabled:()=>f,domain:()=>B,hiddenMarks:()=>Z,inverted:()=>E,label:()=>d,marks:()=>s,restrictToMarks:()=>O,scale:()=>k,startPoint:()=>z,step:()=>u,stylesApi:()=>D,thumbChildren:()=>A,thumbSize:()=>x,vertical:()=>F});e.s(["SliderDemos",0,W],501655)},789859,328233,482593,e=>{"use strict";var a=e.i(191788),t=e.i(56206),r=e.i(778979),n=e.i(883388),o=e.i(270627);function l(){return(l=Object.assign.bind()).apply(null,arguments)}var i=e=>{var{cx:i,cy:s,r:c,className:d}=e,m=(0,t.clsx)("recharts-dot",d);return(0,o.isNumber)(i)&&(0,o.isNumber)(s)&&(0,o.isNumber)(c)?a.createElement("circle",l({},(0,n.svgPropertiesNoEvents)(e),(0,r.adaptEventHandlers)(e),{className:m,cx:i,cy:s,r:c})):null};e.s(["Dot",0,i],328233);var s=e.i(815954),c=e.i(106043),d=e.i(62037),m=e.i(561622),u=e.i(446354),p=["points"];function h(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function f(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?h(Object(t),!0).forEach(function(a){var r,n,o;r=e,n=a,o=t[a],(n=function(e){var a=function(e,a){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,a||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(e,"string");return"symbol"==typeof a?a:a+""}(n))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function x(){return(x=Object.assign.bind()).apply(null,arguments)}function g(e){var{option:r,dotProps:n,className:o}=e;if((0,a.isValidElement)(r))return(0,a.cloneElement)(r,n);if("function"==typeof r)return r(n);var l=(0,t.clsx)(o,"boolean"!=typeof r?r.className:""),s=null!=n?n:{},{points:c}=s,d=function(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==a.indexOf(r))continue;t[r]=e[r]}return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],-1===a.indexOf(t)&&({}).propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}(s,p);return a.createElement(i,x({},d,{className:l}))}e.s(["Dots",0,function(e){var{points:t,dot:r,className:n,dotClassName:o,dataKey:l,baseProps:i,needClip:p,clipPathId:h,zIndex:y=u.DefaultZIndexes.scatter}=e;if(null==t||!r&&1!==t.length)return null;var v=(0,c.isClipDot)(r),b=(0,d.svgPropertiesAndEventsFromUnknown)(r),C=t.map((e,n)=>{var s,c,d=f(f(f({r:3},i),b),{},{index:n,cx:null!=(s=e.x)?s:void 0,cy:null!=(c=e.y)?c:void 0,dataKey:l,value:e.value,payload:e.payload,points:t});return a.createElement(g,{key:"dot-".concat(n),option:r,dotProps:d,className:o})}),A={};return p&&null!=h&&(A.clipPath="url(#clipPath-".concat(v?"":"dots-").concat(h,")")),a.createElement(m.ZIndexLayer,{zIndex:y},a.createElement(s.Layer,x({className:n},A),C))}],789859);var y=e.i(543372),v=e.i(281695),b=e.i(630173);function C(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function A(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?C(Object(t),!0).forEach(function(a){var r,n,o;r=e,n=a,o=t[a],(n=function(e){var a=function(e,a){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,a||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(e,"string");return"symbol"==typeof a?a:a+""}(n))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var j=e=>{var t,{point:o,childIndex:l,mainColor:c,activeDot:d,dataKey:m,clipPath:u}=e;if(!1===d||null==o.x||null==o.y)return null;var p=A(A(A({},{index:l,dataKey:m,cx:o.x,cy:o.y,r:4,fill:null!=c?c:"none",strokeWidth:2,stroke:"#fff",payload:o.payload,value:o.value}),(0,n.svgPropertiesNoEventsFromUnknown)(d)),(0,r.adaptEventHandlers)(d));return t=(0,a.isValidElement)(d)?(0,a.cloneElement)(d,p):"function"==typeof d?d(p):a.createElement(i,p),a.createElement(s.Layer,{className:"recharts-active-dot",clipPath:u},t)};e.s(["ActivePoints",0,function(e){var{points:t,mainColor:r,activeDot:n,itemDataKey:l,clipPath:i,zIndex:s=u.DefaultZIndexes.activeDot}=e,c=(0,y.useAppSelector)(v.selectActiveTooltipIndex),d=(0,b.useActiveTooltipDataPoints)();if(null==t||null==d)return null;var p=t.find(e=>d.includes(e.payload));return(0,o.isNullish)(p)?null:a.createElement(m.ZIndexLayer,{zIndex:s},a.createElement(j,{point:p,childIndex:Number(c),mainColor:r,dataKey:l,activeDot:n,clipPath:i}))}],482593)},554687,e=>{"use strict";var a=e.i(883388);e.s(["getRadiusAndStrokeWidthFromDot",0,function(e){var t=(0,a.svgPropertiesNoEventsFromUnknown)(e);if(null!=t){var{r,strokeWidth:n}=t,o=Number(r),l=Number(n);return(Number.isNaN(o)||o<0)&&(o=3),(Number.isNaN(l)||l<0)&&(l=2),{r:o,strokeWidth:l}}return{r:3,strokeWidth:2}}])},739539,e=>{"use strict";var a=e.i(391398);e.s(["PointLabel",0,function({x:e,y:t,value:r,valueFormatter:n}){return(0,a.jsx)("g",{transform:`translate(${e},${t})`,children:(0,a.jsx)("text",{x:0,y:0,dy:-8,dx:-10,textAnchor:"start",fill:"var(--chart-text-color, var(--mantine-color-dimmed))",fontSize:8,children:n?n(r):r})})}])},321020,e=>{"use strict";e.s(["Area",()=>eu,"computeArea",()=>em],321020);var a=e.i(191788),t=e.i(56206),r=e.i(366998),n=e.i(815954),o=e.i(301426),l=e.i(789859),i=e.i(270627),s=e.i(516257),c=e.i(106043),d=e.i(482593),m=e.i(128002),u=e.i(777814),p=e.i(451400),h=e.i(83727),f=e.i(901841),x=e.i(399479),g=e.i(365441),y=e.i(755335),v=e.i(780950),b=(e,a,t)=>(0,h.selectAxisWithScale)(e,"xAxis",(0,v.selectXAxisIdFromGraphicalItemId)(e,a),t),C=(e,a,t)=>(0,h.selectTicksOfGraphicalItem)(e,"xAxis",(0,v.selectXAxisIdFromGraphicalItemId)(e,a),t),A=(e,a,t)=>(0,h.selectAxisWithScale)(e,"yAxis",(0,v.selectYAxisIdFromGraphicalItemId)(e,a),t),j=(e,a,t)=>(0,h.selectTicksOfGraphicalItem)(e,"yAxis",(0,v.selectYAxisIdFromGraphicalItemId)(e,a),t),w=(0,p.createSelector)([f.selectChartLayout,b,A,C,j],(e,a,t,r,n)=>(0,s.isCategoricalAxis)(e,"xAxis")?(0,s.getBandSizeOfAxis)(a,r,!1):(0,s.getBandSizeOfAxis)(t,n,!1)),k=(0,p.createSelector)([h.selectUnfilteredCartesianItems,(e,a)=>a],(e,a)=>e.filter(e=>"area"===e.type).find(e=>e.id===a)),E=e=>{var a=(0,f.selectChartLayout)(e);return(0,s.isCategoricalAxis)(a,"xAxis")?"yAxis":"xAxis"},S=(0,p.createSelector)([k,(e,a,t)=>(0,h.selectStackGroups)(e,E(e),"yAxis"===E(e)?(0,v.selectYAxisIdFromGraphicalItemId)(e,a):(0,v.selectXAxisIdFromGraphicalItemId)(e,a),t)],(e,a)=>{if(null!=e&&null!=a){var t,{stackId:r}=e,n=(0,g.getStackSeriesIdentifier)(e);if(null!=r&&null!=n){var o=null==(t=a[r])?void 0:t.stackedData,l=null==o?void 0:o.find(e=>e.key===n);if(null!=l)return l.map(e=>[e[0],e[1]])}}}),N=(0,p.createSelector)([f.selectChartLayout,b,A,C,j,S,x.selectChartDataWithIndexesIfNotInPanoramaPosition3,w,k,y.selectChartBaseValue],(e,a,t,r,n,o,l,i,s,c)=>{var d,{chartData:m,dataStartIndex:u,dataEndIndex:p}=l;if(null!=s&&("horizontal"===e||"vertical"===e)&&null!=a&&null!=t&&null!=r&&null!=n&&0!==r.length&&0!==n.length&&null!=i){var{data:h}=s;if(null!=(d=h&&h.length>0?h:null==m?void 0:m.slice(u,p+1)))return em({layout:e,xAxis:a,yAxis:t,xAxisTicks:r,yAxisTicks:n,dataStartIndex:u,areaSettings:s,stackedData:o,displayedData:d,chartBaseValue:c,bandSize:i})}}),D=e.i(662688),T=e.i(524970),V=e.i(836094),L=e.i(543372),M=e.i(3304),G=e.i(297974),P=e.i(500678),I=e.i(630173),O=e.i(768069),B=e.i(436323),R=e.i(883388),F=e.i(355476),Z=e.i(554687),z=e.i(62037),W=e.i(561622),H=e.i(446354),K=e.i(547810),_=["id"],U=["activeDot","animationBegin","animationDuration","animationEasing","connectNulls","dot","fill","fillOpacity","hide","isAnimationActive","legendType","stroke","xAxisId","yAxisId"];function $(){return($=Object.assign.bind()).apply(null,arguments)}function q(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==a.indexOf(r))continue;t[r]=e[r]}return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],-1===a.indexOf(t)&&({}).propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function Y(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function X(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?Y(Object(t),!0).forEach(function(a){var r,n,o;r=e,n=a,o=t[a],(n=function(e){var a=function(e,a){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,a||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(e,"string");return"symbol"==typeof a?a:a+""}(n))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Y(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function J(e,a){return e&&"none"!==e?e:a}var Q=a.memo(e=>{var{dataKey:t,data:r,stroke:n,strokeWidth:o,fill:l,name:c,hide:d,unit:u,tooltipType:p,id:h}=e,f={dataDefinedOnItem:r,getPosition:i.noop,settings:{stroke:n,strokeWidth:o,fill:l,dataKey:t,nameKey:void 0,name:(0,s.getTooltipNameProp)(c,t),hide:d,type:p,color:J(n,l),unit:u,graphicalItemId:h}};return a.createElement(m.SetTooltipEntrySettings,{tooltipEntrySettings:f})});function ee(e){var{clipPathId:t,points:r,props:n}=e,{needClip:o,dot:i,dataKey:s}=n,c=(0,R.svgPropertiesNoEvents)(n);return a.createElement(l.Dots,{points:r,dot:i,className:"recharts-area-dots",dotClassName:"recharts-area-dot",dataKey:s,baseProps:c,needClip:o,clipPathId:t})}function ea(e){var{showLabels:t,children:r,points:n}=e,l=n.map(e=>{var a,t,r={x:null!=(a=e.x)?a:0,y:null!=(t=e.y)?t:0,width:0,lowerWidth:0,upperWidth:0,height:0};return X(X({},r),{},{value:e.value,payload:e.payload,parentViewBox:void 0,viewBox:r,fill:void 0})});return a.createElement(o.CartesianLabelListContextProvider,{value:t?l:void 0},r)}function et(e){var{points:t,baseLine:o,needClip:l,clipPathId:i,props:s}=e,{layout:c,type:d,stroke:m,connectNulls:u,isRange:p}=s,{id:h}=s,f=q(s,_),x=(0,R.svgPropertiesNoEvents)(f),g=(0,z.svgPropertiesAndEvents)(f);return a.createElement(a.Fragment,null,(null==t?void 0:t.length)>1&&a.createElement(n.Layer,{clipPath:l?"url(#clipPath-".concat(i,")"):void 0},a.createElement(r.Curve,$({},g,{id:h,points:t,connectNulls:u,type:d,baseLine:o,layout:c,stroke:"none",className:"recharts-area-area"})),"none"!==m&&a.createElement(r.Curve,$({},x,{className:"recharts-area-curve",layout:c,type:d,connectNulls:u,fill:"none",points:t})),"none"!==m&&p&&Array.isArray(o)&&a.createElement(r.Curve,$({},x,{className:"recharts-area-curve",layout:c,type:d,connectNulls:u,fill:"none",points:o}))),a.createElement(ee,{points:t,props:f,clipPathId:i}))}function er(e){var t,r,{alpha:n,baseLine:o,points:l,strokeWidth:s}=e,c=null==(t=l[0])?void 0:t.y,d=null==(r=l[l.length-1])?void 0:r.y;if(!(0,P.isWellBehavedNumber)(c)||!(0,P.isWellBehavedNumber)(d))return null;var m=n*Math.abs(c-d),u=Math.max(...l.map(e=>e.x||0));return((0,i.isNumber)(o)?u=Math.max(o,u):o&&Array.isArray(o)&&o.length&&(u=Math.max(...o.map(e=>e.x||0),u)),(0,i.isNumber)(u))?a.createElement("rect",{x:0,y:c<d?c:c-m,width:u+(s?parseInt("".concat(s),10):1),height:Math.floor(m)}):null}function en(e){var t,r,{alpha:n,baseLine:o,points:l,strokeWidth:s}=e,c=null==(t=l[0])?void 0:t.x,d=null==(r=l[l.length-1])?void 0:r.x;if(!(0,P.isWellBehavedNumber)(c)||!(0,P.isWellBehavedNumber)(d))return null;var m=n*Math.abs(c-d),u=Math.max(...l.map(e=>e.y||0));return((0,i.isNumber)(o)?u=Math.max(o,u):o&&Array.isArray(o)&&o.length&&(u=Math.max(...o.map(e=>e.y||0),u)),(0,i.isNumber)(u))?a.createElement("rect",{x:c<d?c:c-m,y:0,width:m,height:Math.floor(u+(s?parseInt("".concat(s),10):1))}):null}function eo(e){var{alpha:t,layout:r,points:n,baseLine:o,strokeWidth:l}=e;return"vertical"===r?a.createElement(er,{alpha:t,points:n,baseLine:o,strokeWidth:l}):a.createElement(en,{alpha:t,points:n,baseLine:o,strokeWidth:l})}function el(e){var{needClip:t,clipPathId:r,props:l,previousPointsRef:s,previousBaselineRef:c}=e,{points:d,baseLine:m,isAnimationActive:u,animationBegin:p,animationDuration:h,animationEasing:x,onAnimationStart:g,onAnimationEnd:y}=l,v=(0,a.useMemo)(()=>({points:d,baseLine:m}),[d,m]),b=(0,M.useAnimationId)(v,"recharts-area-"),C=(0,f.useCartesianChartLayout)(),[A,j]=(0,a.useState)(!1),w=(0,a.useCallback)(()=>{"function"==typeof y&&y(),j(!1)},[y]),k=(0,a.useCallback)(()=>{"function"==typeof g&&g(),j(!0)},[g]);if(null==C)return null;var E=s.current,S=c.current;return a.createElement(ea,{showLabels:!A,points:d},l.children,a.createElement(F.JavascriptAnimate,{animationId:b,begin:p,duration:h,isActive:u,easing:x,onAnimationEnd:w,onAnimationStart:k,key:b},e=>{if(E){var o,p=E.length/d.length,h=1===e?d:d.map((a,t)=>{var r=Math.floor(t*p);if(E[r]){var n=E[r];return X(X({},a),{},{x:(0,i.interpolate)(n.x,a.x,e),y:(0,i.interpolate)(n.y,a.y,e)})}return a});return o=(0,i.isNumber)(m)?(0,i.interpolate)(S,m,e):(0,i.isNullish)(m)||(0,i.isNan)(m)?(0,i.interpolate)(S,0,e):m.map((a,t)=>{var r=Math.floor(t*p);if(Array.isArray(S)&&S[r]){var n=S[r];return X(X({},a),{},{x:(0,i.interpolate)(n.x,a.x,e),y:(0,i.interpolate)(n.y,a.y,e)})}return a}),e>0&&(s.current=h,c.current=o),a.createElement(et,{points:h,baseLine:o,needClip:t,clipPathId:r,props:l})}return e>0&&(s.current=d,c.current=m),a.createElement(n.Layer,null,u&&a.createElement("defs",null,a.createElement("clipPath",{id:"animationClipPath-".concat(r)},a.createElement(eo,{alpha:e,points:d,baseLine:m,layout:C,strokeWidth:l.strokeWidth}))),a.createElement(n.Layer,{clipPath:"url(#animationClipPath-".concat(r,")")},a.createElement(et,{points:d,baseLine:m,needClip:t,clipPathId:r,props:l})))}),a.createElement(o.LabelListFromLabelProp,{label:l.label}))}function ei(e){var{needClip:t,clipPathId:r,props:n}=e,o=(0,a.useRef)(null),l=(0,a.useRef)();return a.createElement(el,{needClip:t,clipPathId:r,props:n,previousPointsRef:o,previousBaselineRef:l})}class es extends a.PureComponent{render(){var{hide:e,dot:r,points:o,className:l,top:i,left:s,needClip:m,xAxisId:p,yAxisId:h,width:f,height:x,id:g,baseLine:y,zIndex:v}=this.props;if(e)return null;var b=(0,t.clsx)("recharts-area",l),{r:C,strokeWidth:A}=(0,Z.getRadiusAndStrokeWidthFromDot)(r),j=(0,c.isClipDot)(r),w=2*C+A,k=m?"url(#clipPath-".concat(j?"":"dots-").concat(g,")"):void 0;return a.createElement(W.ZIndexLayer,{zIndex:v},a.createElement(n.Layer,{className:b},m&&a.createElement("defs",null,a.createElement(u.GraphicalItemClipPath,{clipPathId:g,xAxisId:p,yAxisId:h}),!j&&a.createElement("clipPath",{id:"clipPath-dots-".concat(g)},a.createElement("rect",{x:s-w/2,y:i-w/2,width:f+w,height:x+w}))),a.createElement(ei,{needClip:m,clipPathId:g,props:this.props})),a.createElement(d.ActivePoints,{points:o,mainColor:J(this.props.stroke,this.props.fill),itemDataKey:this.props.dataKey,activeDot:this.props.activeDot,clipPath:k}),this.props.isRange&&Array.isArray(y)&&a.createElement(d.ActivePoints,{points:y,mainColor:J(this.props.stroke,this.props.fill),itemDataKey:this.props.dataKey,activeDot:this.props.activeDot,clipPath:k}))}}var ec={activeDot:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",connectNulls:!1,dot:!1,fill:"#3182bd",fillOpacity:.6,hide:!1,isAnimationActive:"auto",legendType:"line",stroke:"#3182bd",strokeWidth:1,type:"linear",label:!1,xAxisId:0,yAxisId:0,zIndex:H.DefaultZIndexes.area};function ed(e){var t,{activeDot:r,animationBegin:n,animationDuration:o,animationEasing:l,connectNulls:i,dot:s,fill:c,fillOpacity:d,hide:m,isAnimationActive:p,legendType:h,stroke:x,xAxisId:g,yAxisId:y}=e,v=q(e,U),b=(0,f.useChartLayout)(),C=(0,T.useChartName)(),{needClip:A}=(0,u.useNeedsClip)(g,y),j=(0,D.useIsPanorama)(),{points:w,isRange:k,baseLine:E}=null!=(t=(0,L.useAppSelector)(a=>N(a,e.id,j)))?t:{},S=(0,I.usePlotArea)();if("horizontal"!==b&&"vertical"!==b||null==S||"AreaChart"!==C&&"ComposedChart"!==C)return null;var{height:V,width:M,x:G,y:P}=S;return w&&w.length?a.createElement(es,$({},v,{activeDot:r,animationBegin:n,animationDuration:o,animationEasing:l,baseLine:E,connectNulls:i,dot:s,fill:c,fillOpacity:d,height:V,hide:m,layout:b,isAnimationActive:p,isRange:k,legendType:h,needClip:A,points:w,stroke:x,width:M,left:G,top:P,xAxisId:g,yAxisId:y})):null}function em(e){var a,{areaSettings:{connectNulls:t,baseValue:r,dataKey:n},stackedData:o,layout:l,chartBaseValue:c,xAxis:d,yAxis:m,displayedData:u,dataStartIndex:p,xAxisTicks:h,yAxisTicks:f,bandSize:x}=e,g=o&&o.length,y=((e,a,t,r,n)=>{var o=null!=t?t:a;if((0,i.isNumber)(o))return o;var l="horizontal"===e?n:r,s=l.scale.domain();if("number"===l.type){var c=Math.max(s[0],s[1]),d=Math.min(s[0],s[1]);return"dataMin"===o?d:"dataMax"===o||c<0?c:Math.max(Math.min(s[0],s[1]),0)}return"dataMin"===o?s[0]:"dataMax"===o?s[1]:s[0]})(l,c,r,d,m),v="horizontal"===l,b=!1,C=u.map((e,a)=>{if(g)c=o[p+a];else{var r,l,i,c,u,C=(0,s.getValueByDataKey)(e,n);Array.isArray(C)?(c=C,b=!0):c=[y,C]}var A=null!=(r=null==(l=c)?void 0:l[1])?r:null,j=null==A||g&&!t&&null==(0,s.getValueByDataKey)(e,n);return v?{x:(0,s.getCateCoordinateOfLine)({axis:d,ticks:h,bandSize:x,entry:e,index:a}),y:j?null:null!=(u=m.scale.map(A))?u:null,value:c,payload:e}:{x:j?null:null!=(i=d.scale.map(A))?i:null,y:(0,s.getCateCoordinateOfLine)({axis:m,ticks:f,bandSize:x,entry:e,index:a}),value:c,payload:e}});return a=g||b?C.map(e=>{var a,t,r=Array.isArray(e.value)?e.value[0]:null;return v?{x:e.x,y:null!=r&&null!=e.y&&null!=(t=m.scale.map(r))?t:null,payload:e.payload}:{x:null!=r&&null!=(a=d.scale.map(r))?a:null,y:e.y,payload:e.payload}}):v?m.scale.map(y):d.scale.map(y),{points:C,baseLine:null!=a?a:0,isRange:b}}var eu=a.memo(function(e){var t=(0,G.resolveDefaultProps)(e,ec),r=(0,D.useIsPanorama)();return a.createElement(O.RegisterGraphicalItemId,{id:t.id,type:"area"},e=>a.createElement(a.Fragment,null,a.createElement(V.SetLegendPayload,{legendPayload:(e=>{var{dataKey:a,name:t,stroke:r,fill:n,legendType:o,hide:l}=e;return[{inactive:l,dataKey:a,type:o,color:J(r,n),value:(0,s.getTooltipNameProp)(t,a),payload:e}]})(t)}),a.createElement(Q,{dataKey:t.dataKey,data:t.data,stroke:t.stroke,strokeWidth:t.strokeWidth,fill:t.fill,name:t.name,hide:t.hide,unit:t.unit,tooltipType:t.tooltipType,id:e}),a.createElement(B.SetCartesianGraphicalItem,{type:"area",id:e,data:t.data,dataKey:t.dataKey,xAxisId:t.xAxisId,yAxisId:t.yAxisId,zAxisId:0,stackId:(0,s.getNormalizedStackId)(t.stackId),hide:t.hide,barSize:void 0,baseValue:t.baseValue,isPanorama:r,connectNulls:t.connectNulls}),a.createElement(ed,$({},t,{id:e}))))},K.propsAreEqual);eu.displayName="Area"},639613,e=>{"use strict";var a=e.i(191788),t=e.i(171481);let r=new Map([["bold",a.createElement(a.Fragment,null,a.createElement("path",{d:"M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"}))],["duotone",a.createElement(a.Fragment,null,a.createElement("path",{d:"M192,64V168L88,64Z",opacity:"0.2"}),a.createElement("path",{d:"M192,56H88a8,8,0,0,0-5.66,13.66L128.69,116,58.34,186.34a8,8,0,0,0,11.32,11.32L140,127.31l46.34,46.35A8,8,0,0,0,200,168V64A8,8,0,0,0,192,56Zm-8,92.69-38.34-38.34h0L107.31,72H184Z"}))],["fill",a.createElement(a.Fragment,null,a.createElement("path",{d:"M200,64V168a8,8,0,0,1-13.66,5.66L140,127.31,69.66,197.66a8,8,0,0,1-11.32-11.32L128.69,116,82.34,69.66A8,8,0,0,1,88,56H192A8,8,0,0,1,200,64Z"}))],["light",a.createElement(a.Fragment,null,a.createElement("path",{d:"M198,64V168a6,6,0,0,1-12,0V78.48L68.24,196.24a6,6,0,0,1-8.48-8.48L177.52,70H88a6,6,0,0,1,0-12H192A6,6,0,0,1,198,64Z"}))],["regular",a.createElement(a.Fragment,null,a.createElement("path",{d:"M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"}))],["thin",a.createElement(a.Fragment,null,a.createElement("path",{d:"M196,64V168a4,4,0,0,1-8,0V73.66L66.83,194.83a4,4,0,0,1-5.66-5.66L182.34,68H88a4,4,0,0,1,0-8H192A4,4,0,0,1,196,64Z"}))]]),n=a.forwardRef((e,n)=>a.createElement(t.default,{ref:n,...e,weights:r}));n.displayName="ArrowUpRightIcon",e.s(["ArrowUpRightIcon",0,n],639613)},67219,e=>{"use strict";var a=e.i(191788),t=e.i(171481);let r=new Map([["bold",a.createElement(a.Fragment,null,a.createElement("path",{d:"M208.49,120.49a12,12,0,0,1-17,0L140,69V216a12,12,0,0,1-24,0V69L64.49,120.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0l72,72A12,12,0,0,1,208.49,120.49Z"}))],["duotone",a.createElement(a.Fragment,null,a.createElement("path",{d:"M200,112H56l72-72Z",opacity:"0.2"}),a.createElement("path",{d:"M205.66,106.34l-72-72a8,8,0,0,0-11.32,0l-72,72A8,8,0,0,0,56,120h64v96a8,8,0,0,0,16,0V120h64a8,8,0,0,0,5.66-13.66ZM75.31,104,128,51.31,180.69,104Z"}))],["fill",a.createElement(a.Fragment,null,a.createElement("path",{d:"M207.39,115.06A8,8,0,0,1,200,120H136v96a8,8,0,0,1-16,0V120H56a8,8,0,0,1-5.66-13.66l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,207.39,115.06Z"}))],["light",a.createElement(a.Fragment,null,a.createElement("path",{d:"M204.24,116.24a6,6,0,0,1-8.48,0L134,54.49V216a6,6,0,0,1-12,0V54.49L60.24,116.24a6,6,0,0,1-8.48-8.48l72-72a6,6,0,0,1,8.48,0l72,72A6,6,0,0,1,204.24,116.24Z"}))],["regular",a.createElement(a.Fragment,null,a.createElement("path",{d:"M205.66,117.66a8,8,0,0,1-11.32,0L136,59.31V216a8,8,0,0,1-16,0V59.31L61.66,117.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,117.66Z"}))],["thin",a.createElement(a.Fragment,null,a.createElement("path",{d:"M202.83,114.83a4,4,0,0,1-5.66,0L132,49.66V216a4,4,0,0,1-8,0V49.66L58.83,114.83a4,4,0,0,1-5.66-5.66l72-72a4,4,0,0,1,5.66,0l72,72A4,4,0,0,1,202.83,114.83Z"}))]]),n=a.forwardRef((e,n)=>a.createElement(t.default,{ref:n,...e,weights:r}));n.displayName="ArrowUpIcon",e.s(["ArrowUpIcon",0,n],67219)},852363,e=>{"use strict";var a=e.i(648863),t="m_378d0bd5",r="m_cc1130c9",n=e.i(191788),o=e.i(171481);let l=new Map([["bold",n.createElement(n.Fragment,null,n.createElement("path",{d:"M208.49,152.49l-72,72a12,12,0,0,1-17,0l-72-72a12,12,0,0,1,17-17L116,187V40a12,12,0,0,1,24,0V187l51.51-51.52a12,12,0,0,1,17,17Z"}))],["duotone",n.createElement(n.Fragment,null,n.createElement("path",{d:"M200,144l-72,72L56,144Z",opacity:"0.2"}),n.createElement("path",{d:"M207.39,140.94A8,8,0,0,0,200,136H136V40a8,8,0,0,0-16,0v96H56a8,8,0,0,0-5.66,13.66l72,72a8,8,0,0,0,11.32,0l72-72A8,8,0,0,0,207.39,140.94ZM128,204.69,75.31,152H180.69Z"}))],["fill",n.createElement(n.Fragment,null,n.createElement("path",{d:"M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72A8,8,0,0,1,56,136h64V40a8,8,0,0,1,16,0v96h64a8,8,0,0,1,5.66,13.66Z"}))],["light",n.createElement(n.Fragment,null,n.createElement("path",{d:"M204.24,148.24l-72,72a6,6,0,0,1-8.48,0l-72-72a6,6,0,0,1,8.48-8.48L122,201.51V40a6,6,0,0,1,12,0V201.51l61.76-61.75a6,6,0,0,1,8.48,8.48Z"}))],["regular",n.createElement(n.Fragment,null,n.createElement("path",{d:"M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z"}))],["thin",n.createElement(n.Fragment,null,n.createElement("path",{d:"M202.83,146.83l-72,72a4,4,0,0,1-5.66,0l-72-72a4,4,0,0,1,5.66-5.66L124,206.34V40a4,4,0,0,1,8,0V206.34l65.17-65.17a4,4,0,0,1,5.66,5.66Z"}))]]),i=n.forwardRef((e,a)=>n.createElement(o.default,{ref:a,...e,weights:l}));i.displayName="ArrowDownIcon";let s=new Map([["bold",n.createElement(n.Fragment,null,n.createElement("path",{d:"M200.49,72.48,93,180h75a12,12,0,0,1,0,24H64a12,12,0,0,1-12-12V88a12,12,0,0,1,24,0v75L183.51,55.51a12,12,0,0,1,17,17Z"}))],["duotone",n.createElement(n.Fragment,null,n.createElement("path",{d:"M168,192H64V88Z",opacity:"0.2"}),n.createElement("path",{d:"M197.66,58.34a8,8,0,0,0-11.32,0L116,128.69,69.66,82.34A8,8,0,0,0,56,88V192a8,8,0,0,0,8,8H168a8,8,0,0,0,5.66-13.66L127.31,140l70.35-70.34A8,8,0,0,0,197.66,58.34ZM72,184V107.31l38.34,38.34h0L148.69,184Z"}))],["fill",n.createElement(n.Fragment,null,n.createElement("path",{d:"M197.66,69.66,127.31,140l46.35,46.34A8,8,0,0,1,168,200H64a8,8,0,0,1-8-8V88a8,8,0,0,1,13.66-5.66L116,128.69l70.34-70.35a8,8,0,0,1,11.32,11.32Z"}))],["light",n.createElement(n.Fragment,null,n.createElement("path",{d:"M196.24,68.24,78.48,186H168a6,6,0,0,1,0,12H64a6,6,0,0,1-6-6V88a6,6,0,0,1,12,0v89.52L187.76,59.76a6,6,0,0,1,8.48,8.48Z"}))],["regular",n.createElement(n.Fragment,null,n.createElement("path",{d:"M197.66,69.66,83.31,184H168a8,8,0,0,1,0,16H64a8,8,0,0,1-8-8V88a8,8,0,0,1,16,0v84.69L186.34,58.34a8,8,0,0,1,11.32,11.32Z"}))],["thin",n.createElement(n.Fragment,null,n.createElement("path",{d:"M194.83,66.83,73.66,188H168a4,4,0,0,1,0,8H64a4,4,0,0,1-4-4V88a4,4,0,0,1,8,0v94.34L189.17,61.17a4,4,0,1,1,5.66,5.66Z"}))]]),c=n.forwardRef((e,a)=>n.createElement(o.default,{ref:a,...e,weights:s}));c.displayName="ArrowDownLeftIcon";let d=new Map([["bold",n.createElement(n.Fragment,null,n.createElement("path",{d:"M204,88V192a12,12,0,0,1-12,12H88a12,12,0,0,1,0-24h75L55.51,72.48a12,12,0,0,1,17-17L180,163V88a12,12,0,0,1,24,0Z"}))],["duotone",n.createElement(n.Fragment,null,n.createElement("path",{d:"M192,88V192H88Z",opacity:"0.2"}),n.createElement("path",{d:"M195.06,80.61a8,8,0,0,0-8.72,1.73L140,128.69,69.66,58.34A8,8,0,0,0,58.34,69.66L128.69,140,82.34,186.34A8,8,0,0,0,88,200H192a8,8,0,0,0,8-8V88A8,8,0,0,0,195.06,80.61ZM184,184H107.31l38.34-38.34h0L184,107.31Z"}))],["fill",n.createElement(n.Fragment,null,n.createElement("path",{d:"M200,88V192a8,8,0,0,1-8,8H88a8,8,0,0,1-5.66-13.66L128.69,140,58.34,69.66A8,8,0,0,1,69.66,58.34L140,128.69l46.34-46.35A8,8,0,0,1,200,88Z"}))],["light",n.createElement(n.Fragment,null,n.createElement("path",{d:"M198,88V192a6,6,0,0,1-6,6H88a6,6,0,0,1,0-12h89.52L59.76,68.24a6,6,0,0,1,8.48-8.48L186,177.52V88a6,6,0,0,1,12,0Z"}))],["regular",n.createElement(n.Fragment,null,n.createElement("path",{d:"M200,88V192a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h84.69L58.34,69.66A8,8,0,0,1,69.66,58.34L184,172.69V88a8,8,0,0,1,16,0Z"}))],["thin",n.createElement(n.Fragment,null,n.createElement("path",{d:"M196,88V192a4,4,0,0,1-4,4H88a4,4,0,0,1,0-8h94.34L61.17,66.83a4,4,0,0,1,5.66-5.66L188,182.34V88a4,4,0,0,1,8,0Z"}))]]),m=n.forwardRef((e,a)=>n.createElement(o.default,{ref:a,...e,weights:d}));m.displayName="ArrowDownRightIcon";var u=e.i(943311),p=e.i(858508),h=e.i(67219);let f=new Map([["bold",n.createElement(n.Fragment,null,n.createElement("path",{d:"M200.49,200.49a12,12,0,0,1-17,0L76,93v75a12,12,0,0,1-24,0V64A12,12,0,0,1,64,52H168a12,12,0,0,1,0,24H93L200.49,183.51A12,12,0,0,1,200.49,200.49Z"}))],["duotone",n.createElement(n.Fragment,null,n.createElement("path",{d:"M168,64,64,168V64Z",opacity:"0.2"}),n.createElement("path",{d:"M197.66,186.34,127.31,116l46.35-46.34A8,8,0,0,0,168,56H64a8,8,0,0,0-8,8V168a8,8,0,0,0,13.66,5.66L116,127.31l70.34,70.35a8,8,0,0,0,11.32-11.32ZM72,72h76.69l-38.34,38.34h0L72,148.69Z"}))],["fill",n.createElement(n.Fragment,null,n.createElement("path",{d:"M197.66,197.66a8,8,0,0,1-11.32,0L116,127.31,69.66,173.66A8,8,0,0,1,56,168V64a8,8,0,0,1,8-8H168a8,8,0,0,1,5.66,13.66L127.31,116l70.35,70.34A8,8,0,0,1,197.66,197.66Z"}))],["light",n.createElement(n.Fragment,null,n.createElement("path",{d:"M196.24,196.24a6,6,0,0,1-8.48,0L70,78.48V168a6,6,0,0,1-12,0V64a6,6,0,0,1,6-6H168a6,6,0,0,1,0,12H78.48L196.24,187.76A6,6,0,0,1,196.24,196.24Z"}))],["regular",n.createElement(n.Fragment,null,n.createElement("path",{d:"M197.66,197.66a8,8,0,0,1-11.32,0L72,83.31V168a8,8,0,0,1-16,0V64a8,8,0,0,1,8-8H168a8,8,0,0,1,0,16H83.31L197.66,186.34A8,8,0,0,1,197.66,197.66Z"}))],["thin",n.createElement(n.Fragment,null,n.createElement("path",{d:"M194.83,194.83a4,4,0,0,1-5.66,0L68,73.66V168a4,4,0,0,1-8,0V64a4,4,0,0,1,4-4H168a4,4,0,0,1,0,8H73.66L194.83,189.17A4,4,0,0,1,194.83,194.83Z"}))]]),x=n.forwardRef((e,a)=>n.createElement(o.default,{ref:a,...e,weights:f}));x.displayName="ArrowUpLeftIcon";var g=e.i(639613);let y=new Map([["bold",n.createElement(n.Fragment,null,n.createElement("path",{d:"M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Z"}))],["duotone",n.createElement(n.Fragment,null,n.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),n.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z"}))],["fill",n.createElement(n.Fragment,null,n.createElement("path",{d:"M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"}))],["light",n.createElement(n.Fragment,null,n.createElement("path",{d:"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Z"}))],["regular",n.createElement(n.Fragment,null,n.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z"}))],["thin",n.createElement(n.Fragment,null,n.createElement("path",{d:"M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Z"}))]]),v=n.forwardRef((e,a)=>n.createElement(o.default,{ref:a,...e,weights:y}));v.displayName="CircleIcon";var b=e.i(610941),C=e.i(284629),A=e.i(391398);let j={type:"code",component:function(){let[e,a]=(0,n.useState)(null),[o,l]=(0,n.useState)({}),[s,d]=(0,n.useState)("center"),f=e=>a=>{o[e]=a,l(o)};return(0,A.jsxs)("div",{className:"m_59c14cf6",dir:"ltr",ref:a,children:[(0,A.jsx)(b.FloatingIndicator,{target:o[s],parent:e,className:"m_f9a45e7b"}),(0,A.jsxs)("div",{className:t,children:[(0,A.jsx)(C.UnstyledButton,{className:r,onClick:()=>d("up-left"),ref:f("up-left"),mod:{active:"up-left"===s},children:(0,A.jsx)(x,{size:26})}),(0,A.jsx)(C.UnstyledButton,{className:r,onClick:()=>d("up"),ref:f("up"),mod:{active:"up"===s},children:(0,A.jsx)(h.ArrowUpIcon,{size:26})}),(0,A.jsx)(C.UnstyledButton,{className:r,onClick:()=>d("up-right"),ref:f("up-right"),mod:{active:"up-right"===s},children:(0,A.jsx)(g.ArrowUpRightIcon,{size:26})})]}),(0,A.jsxs)("div",{className:t,children:[(0,A.jsx)(C.UnstyledButton,{className:r,onClick:()=>d("left"),ref:f("left"),mod:{active:"left"===s},children:(0,A.jsx)(u.ArrowLeftIcon,{size:26})}),(0,A.jsx)(C.UnstyledButton,{className:r,onClick:()=>d("center"),ref:f("center"),mod:{active:"center"===s},children:(0,A.jsx)(v,{size:26})}),(0,A.jsx)(C.UnstyledButton,{className:r,onClick:()=>d("right"),ref:f("right"),mod:{active:"right"===s},children:(0,A.jsx)(p.ArrowRightIcon,{size:26})})]}),(0,A.jsxs)("div",{className:t,children:[(0,A.jsx)(C.UnstyledButton,{className:r,onClick:()=>d("down-left"),ref:f("down-left"),mod:{active:"down-left"===s},children:(0,A.jsx)(c,{size:26})}),(0,A.jsx)(C.UnstyledButton,{className:r,onClick:()=>d("down"),ref:f("down"),mod:{active:"down"===s},children:(0,A.jsx)(i,{size:26})}),(0,A.jsx)(C.UnstyledButton,{className:r,onClick:()=>d("down-right"),ref:f("down-right"),mod:{active:"down-right"===s},children:(0,A.jsx)(m,{size:26})})]})]})},centered:!0,defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { useState } from 'react';
import { ArrowDownIcon, ArrowDownLeftIcon, ArrowDownRightIcon, ArrowLeftIcon, ArrowRightIcon, ArrowUpIcon, ArrowUpLeftIcon, ArrowUpRightIcon, CircleIcon } from '@phosphor-icons/react';
import { FloatingIndicator, UnstyledButton } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({});
  const [active, setActive] = useState('center');

  const setControlRef = (name: string) => (node: HTMLButtonElement) => {
    controlsRefs[name] = node;
    setControlsRefs(controlsRefs);
  };

  return (
    <div className={classes.root} dir="ltr" ref={setRootRef}>
      <FloatingIndicator
        target={controlsRefs[active]}
        parent={rootRef}
        className={classes.indicator}
      />

      <div className={classes.controlsGroup}>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('up-left')}
          ref={setControlRef('up-left')}
          mod={{ active: active === 'up-left' }}
        >
          <ArrowUpLeftIcon size={26} />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('up')}
          ref={setControlRef('up')}
          mod={{ active: active === 'up' }}
        >
          <ArrowUpIcon size={26} />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('up-right')}
          ref={setControlRef('up-right')}
          mod={{ active: active === 'up-right' }}
        >
          <ArrowUpRightIcon size={26} />
        </UnstyledButton>
      </div>
      <div className={classes.controlsGroup}>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('left')}
          ref={setControlRef('left')}
          mod={{ active: active === 'left' }}
        >
          <ArrowLeftIcon size={26} />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('center')}
          ref={setControlRef('center')}
          mod={{ active: active === 'center' }}
        >
          <CircleIcon size={26} />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('right')}
          ref={setControlRef('right')}
          mod={{ active: active === 'right' }}
        >
          <ArrowRightIcon size={26} />
        </UnstyledButton>
      </div>
      <div className={classes.controlsGroup}>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('down-left')}
          ref={setControlRef('down-left')}
          mod={{ active: active === 'down-left' }}
        >
          <ArrowDownLeftIcon size={26} />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('down')}
          ref={setControlRef('down')}
          mod={{ active: active === 'down' }}
        >
          <ArrowDownIcon size={26} />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('down-right')}
          ref={setControlRef('down-right')}
          mod={{ active: active === 'down-right' }}
        >
          <ArrowDownRightIcon size={26} />
        </UnstyledButton>
      </div>
    </div>
  );
}
`},{fileName:"Demo.module.css",language:"scss",code:`.root {
  position: relative;
  background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-8));
  width: fit-content;
  padding: var(--mantine-spacing-sm);
  border-radius: var(--mantine-radius-md);
}

.indicator {
  background-color: light-dark(var(--mantine-color-white), var(--mantine-color-dark-6));
  border-radius: var(--mantine-radius-md);
  box-shadow: var(--mantine-shadow-md);
  border: 1px solid light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-4));
}

.controlsGroup {
  display: flex;
}

.control {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: light-dark(var(--mantine-color-gray-6), var(--mantine-color-dark-2));
  border-radius: var(--mantine-radius-md);

  &[data-active] {
    color: light-dark(var(--mantine-color-black), var(--mantine-color-white));
  }

  @mixin hover {
    color: light-dark(var(--mantine-color-black), var(--mantine-color-white));
    background-color: light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-7));
  }

  & svg {
    display: block;
    position: relative;
    z-index: 1;
  }
}`}]},w=["React","Vue","Angular","Svelte"],k={type:"code",component:function(){let[e,a]=(0,n.useState)(null),[t,r]=(0,n.useState)({}),[o,l]=(0,n.useState)(0),i=w.map((e,a)=>(0,A.jsx)(C.UnstyledButton,{className:"m_f163915c",ref:e=>{t[a]=e,r(t)},onClick:()=>l(a),mod:{active:o===a},children:(0,A.jsx)("span",{className:"m_848976f8",children:e})},e));return(0,A.jsxs)("div",{className:"m_f1cded43",ref:a,children:[i,(0,A.jsx)(b.FloatingIndicator,{target:t[o],parent:e,className:"m_13e0e64e"})]})},centered:!0,defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { useState } from 'react';
import { FloatingIndicator, UnstyledButton } from '@mantine/core';
import classes from './Demo.module.css';

const data = ['React', 'Vue', 'Angular', 'Svelte'];

function Demo() {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({});
  const [active, setActive] = useState(0);

  const setControlRef = (index: number) => (node: HTMLButtonElement) => {
    controlsRefs[index] = node;
    setControlsRefs(controlsRefs);
  };

  const controls = data.map((item, index) => (
    <UnstyledButton
      key={item}
      className={classes.control}
      ref={setControlRef(index)}
      onClick={() => setActive(index)}
      mod={{ active: active === index }}
    >
      <span className={classes.controlLabel}>{item}</span>
    </UnstyledButton>
  ));

  return (
    <div className={classes.root} ref={setRootRef}>
      {controls}

      <FloatingIndicator
        target={controlsRefs[active]}
        parent={rootRef}
        className={classes.indicator}
      />
    </div>
  );
}
`},{fileName:"Demo.module.css",language:"scss",code:`.root {
  position: relative;
  background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-8));
  width: fit-content;
  border-radius: var(--mantine-radius-md);
  padding: 5px;
  border: 1px solid light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-4));
}

.control {
  padding: 7px 12px;
  line-height: 1;
  color: light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-2));
  border-radius: var(--mantine-radius-md);
  font-size: var(--mantine-font-size-sm);
  transition: color 100ms ease;
  font-weight: 600;

  @mixin hover {
    color: light-dark(var(--mantine-color-black), var(--mantine-color-white));
    background-color: light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-7));
  }

  &[data-active] {
    color: var(--mantine-color-white);
  }
}

.controlLabel {
  position: relative;
  z-index: 1;
}

.indicator {
  background-color: var(--mantine-primary-color-filled);
  border-radius: var(--mantine-radius-md);
}`}]};var E="m_65f82fcc",S=e.i(383312);let N={type:"code",component:function(){let[e,a]=(0,n.useState)(null),[t,r]=(0,n.useState)("1"),[o,l]=(0,n.useState)({}),i=e=>a=>{o[e]=a,l(o)};return(0,A.jsxs)(S.Tabs,{variant:"none",value:t,onChange:r,children:[(0,A.jsxs)(S.Tabs.List,{ref:a,className:"m_590a4747",children:[(0,A.jsx)(S.Tabs.Tab,{value:"1",ref:i("1"),className:E,children:"First tab"}),(0,A.jsx)(S.Tabs.Tab,{value:"2",ref:i("2"),className:E,children:"Second tab"}),(0,A.jsx)(S.Tabs.Tab,{value:"3",ref:i("3"),className:E,children:"Third tab"}),(0,A.jsx)(b.FloatingIndicator,{target:t?o[t]:null,parent:e,className:"m_8268e906"})]}),(0,A.jsx)(S.Tabs.Panel,{value:"1",children:"First tab content"}),(0,A.jsx)(S.Tabs.Panel,{value:"2",children:"Second tab content"}),(0,A.jsx)(S.Tabs.Panel,{value:"3",children:"Third tab content"})]})},code:[{fileName:"Demo.tsx",code:`
import { useState } from 'react';
import { FloatingIndicator, Tabs } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [value, setValue] = useState<string | null>('1');
  const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({});
  const setControlRef = (val: string) => (node: HTMLButtonElement) => {
    controlsRefs[val] = node;
    setControlsRefs(controlsRefs);
  };

  return (
    <Tabs variant="none" value={value} onChange={setValue}>
      <Tabs.List ref={setRootRef} className={classes.list}>
        <Tabs.Tab value="1" ref={setControlRef('1')} className={classes.tab}>
          First tab
        </Tabs.Tab>
        <Tabs.Tab value="2" ref={setControlRef('2')} className={classes.tab}>
          Second tab
        </Tabs.Tab>
        <Tabs.Tab value="3" ref={setControlRef('3')} className={classes.tab}>
          Third tab
        </Tabs.Tab>

        <FloatingIndicator
          target={value ? controlsRefs[value] : null}
          parent={rootRef}
          className={classes.indicator}
        />
      </Tabs.List>

      <Tabs.Panel value="1">First tab content</Tabs.Panel>
      <Tabs.Panel value="2">Second tab content</Tabs.Panel>
      <Tabs.Panel value="3">Third tab content</Tabs.Panel>
    </Tabs>
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`
.list {
  position: relative;
  margin-bottom: var(--mantine-spacing-md);
}

.indicator {
  background-color: var(--mantine-color-white);
  border-radius: var(--mantine-radius-md);
  border: 1px solid var(--mantine-color-gray-2);
  box-shadow: var(--mantine-shadow-sm);

  @mixin dark {
    background-color: var(--mantine-color-dark-6);
    border-color: var(--mantine-color-dark-4);
  }
}

.tab {
  z-index: 1;
  font-weight: 600;
  transition: color 100ms ease;
  color: var(--mantine-color-gray-7);

  &[data-active] {
    color: var(--mantine-color-black);
  }

  @mixin dark {
    color: var(--mantine-color-dark-1);

    &[data-active] {
      color: var(--mantine-color-white);
    }
  }
}
`,language:"scss"}]};var D=(0,a.__exportAll)({direction:()=>j,segmented:()=>k,tabs:()=>N});e.s(["FloatingIndicatorDemos",0,D],852363)},118981,e=>{"use strict";var a=e.i(648863),t=e.i(20035),r=e.i(391398);function n({children:e,...a}){return(0,r.jsx)(t.Grid.Col,{...a,children:(0,r.jsx)("div",{className:"m_548ba23a",children:(0,r.jsx)("div",{className:"m_60a4592e",children:e})})})}let o={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,r.jsxs)(t.Grid,{children:[(0,r.jsx)(n,{span:4,children:"1"}),(0,r.jsx)(n,{span:4,children:"2"}),(0,r.jsx)(n,{span:4,children:"3"})]})}},l={type:"configurator",component:function(e){return(0,r.jsxs)(t.Grid,{...e,children:[(0,r.jsx)(n,{span:4,children:"1"}),(0,r.jsx)(n,{span:4,children:"2"}),(0,r.jsx)(n,{span:4,children:"3"}),(0,r.jsx)(n,{span:4,children:"4"}),(0,r.jsx)(n,{span:4,children:"5"})]})},code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid{{props}}>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
      <Grid.Col span={4}>4</Grid.Col>
      <Grid.Col span={4}>5</Grid.Col>
    </Grid>
  );
}
`,controls:[{prop:"grow",type:"boolean",initialValue:!0,libraryValue:!1},{prop:"gap",type:"size",initialValue:"md",libraryValue:"md"}]},i={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={3}>1</Grid.Col>
      <Grid.Col span={3}>2</Grid.Col>
      <Grid.Col span={3} offset={3}>3</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,r.jsxs)(t.Grid,{children:[(0,r.jsx)(n,{span:3,children:"1"}),(0,r.jsx)(n,{span:3,children:"2"}),(0,r.jsx)(n,{span:3,offset:3,children:"3"})]})}},s={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={3} order={{ base: 2, sm: 1, lg: 3 }}>2</Grid.Col>
      <Grid.Col span={3} order={{ base: 3, sm: 2, lg: 2 }}>3</Grid.Col>
      <Grid.Col span={3} order={{ base: 1, sm: 3, lg: 1 }}>1</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,r.jsxs)(t.Grid,{children:[(0,r.jsx)(n,{span:3,order:{base:2,sm:1,lg:3},children:"2"}),(0,r.jsx)(n,{span:3,order:{base:3,sm:2,lg:2},children:"3"}),(0,r.jsx)(n,{span:3,order:{base:1,sm:3,lg:1},children:"1"})]})}},c={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
      <Grid.Col span={4}>4</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,r.jsxs)(t.Grid,{children:[(0,r.jsx)(n,{span:4,children:"1"}),(0,r.jsx)(n,{span:4,children:"2"}),(0,r.jsx)(n,{span:4,children:"3"}),(0,r.jsx)(n,{span:4,children:"4"})]})}},d={type:"configurator",component:function(e){return(0,r.jsxs)(t.Grid,{...e,id:"grid-configurator",children:[(0,r.jsx)(n,{span:3,h:80,children:"1"}),(0,r.jsx)(n,{span:3,h:120,children:"2"}),(0,r.jsx)(n,{span:3,h:100,children:"3"})]})},code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid{{props}}>
      <Grid.Col span={3} h={80}>1</Grid.Col>
      <Grid.Col span={3} h={120}>2</Grid.Col>
      <Grid.Col span={3} h={100}>3</Grid.Col>
    </Grid>
  );
}
`,controls:[{prop:"justify",type:"select",initialValue:"flex-start",libraryValue:"__",data:[{label:"flex-start",value:"flex-start"},{label:"flex-end",value:"flex-end"},{label:"center",value:"center"},{label:"space-between",value:"space-between"},{label:"space-around",value:"space-around"}]},{prop:"align",type:"select",initialValue:"flex-start",libraryValue:"__",data:[{label:"flex-start",value:"flex-start"},{label:"flex-end",value:"flex-end"},{label:"center",value:"center"}]}]},m={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>1</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>2</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>3</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>4</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,r.jsxs)(t.Grid,{children:[(0,r.jsx)(n,{span:{base:12,md:6,lg:3},children:"1"}),(0,r.jsx)(n,{span:{base:12,md:6,lg:3},children:"2"}),(0,r.jsx)(n,{span:{base:12,md:6,lg:3},children:"3"}),(0,r.jsx)(n,{span:{base:12,md:6,lg:3},children:"4"})]})}},u={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid columns={24}>
      <Grid.Col span={12}>1</Grid.Col>
      <Grid.Col span={6}>2</Grid.Col>
      <Grid.Col span={6}>3</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,r.jsxs)(t.Grid,{columns:24,children:[(0,r.jsx)(n,{span:12,children:"1"}),(0,r.jsx)(n,{span:6,children:"2"}),(0,r.jsx)(n,{span:6,children:"3"})]})}},p={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span="auto">1</Grid.Col>
      <Grid.Col span={6}>2</Grid.Col>
      <Grid.Col span="auto">3</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,r.jsxs)(t.Grid,{children:[(0,r.jsx)(n,{span:"auto",children:"1"}),(0,r.jsx)(n,{span:6,children:"2"}),(0,r.jsx)(n,{span:"auto",children:"3"})]})}},h={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span="content">fit content</Grid.Col>
      <Grid.Col span={6}>2</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,r.jsxs)(t.Grid,{children:[(0,r.jsx)(n,{span:"content",children:"fit content"}),(0,r.jsx)(n,{span:6,children:"2"})]})}},f={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid gap={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,r.jsxs)(t.Grid,{gap:{base:5,xs:"md",md:"xl",xl:50},children:[(0,r.jsx)(n,{span:4,children:"1"}),(0,r.jsx)(n,{span:4,children:"2"}),(0,r.jsx)(n,{span:4,children:"3"})]})}},x={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid gap="md" rowGap="xl" columnGap="sm">
      <Grid.Col span={3}>1</Grid.Col>
      <Grid.Col span={3}>2</Grid.Col>
      <Grid.Col span={3}>3</Grid.Col>
      <Grid.Col span={3}>4</Grid.Col>
      <Grid.Col span={3}>5</Grid.Col>
      <Grid.Col span={3}>6</Grid.Col>
      <Grid.Col span={3}>7</Grid.Col>
      <Grid.Col span={3}>8</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,r.jsxs)(t.Grid,{gap:"md",rowGap:"xl",columnGap:"sm",children:[(0,r.jsx)(n,{span:3,children:"1"}),(0,r.jsx)(n,{span:3,children:"2"}),(0,r.jsx)(n,{span:3,children:"3"}),(0,r.jsx)(n,{span:3,children:"4"}),(0,r.jsx)(n,{span:3,children:"5"}),(0,r.jsx)(n,{span:3,children:"6"}),(0,r.jsx)(n,{span:3,children:"7"}),(0,r.jsx)(n,{span:3,children:"8"})]})}},g={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid align="stretch">
      <Grid.Col span={4} align="flex-start">
        <div style={{ height: '100px', background: 'var(--mantine-color-blue-light)' }}>
          flex-start
        </div>
      </Grid.Col>
      <Grid.Col span={4} align="center">
        <div style={{ height: '100px', background: 'var(--mantine-color-blue-light)' }}>
          center
        </div>
      </Grid.Col>
      <Grid.Col span={4} align="flex-end">
        <div style={{ height: '100px', background: 'var(--mantine-color-blue-light)' }}>
          flex-end
        </div>
      </Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,r.jsxs)(t.Grid,{align:"stretch",children:[(0,r.jsx)(n,{span:4,align:"flex-start",style:{minHeight:"150px"},children:"flex-start"}),(0,r.jsx)(n,{span:4,align:"center",style:{minHeight:"150px"},children:"center"}),(0,r.jsx)(n,{span:4,align:"flex-end",style:{minHeight:"150px"},children:"flex-end"})]})}},y={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    // Wrapper div is added for demonstration purposes only.
    // It is not required in real projects.
    <div style={{ resize: 'horizontal', overflow: 'hidden', maxWidth: '100%' }}>
      <Grid
        type="container"
        breakpoints={{ xs: '100px', sm: '200px', md: '300px', lg: '400px', xl: '500px' }}
      >
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>1</Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>2</Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>3</Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>4</Grid.Col>
      </Grid>
    </div>
  );
}
`,component:function(){return(0,r.jsx)("div",{style:{resize:"horizontal",overflow:"hidden",maxWidth:"100%"},children:(0,r.jsxs)(t.Grid,{type:"container",breakpoints:{xs:"100px",sm:"200px",md:"300px",lg:"400px",xl:"500px"},children:[(0,r.jsx)(n,{span:{base:12,md:6,lg:3},children:"1"}),(0,r.jsx)(n,{span:{base:12,md:6,lg:3},children:"2"}),(0,r.jsx)(n,{span:{base:12,md:6,lg:3},children:"3"}),(0,r.jsx)(n,{span:{base:12,md:6,lg:3},children:"4"})]})})}};var v=(0,a.__exportAll)({auto:()=>p,columnAlign:()=>g,columns:()=>u,container:()=>y,content:()=>h,flexConfigurator:()=>d,gap:()=>f,growConfigurator:()=>l,offset:()=>i,order:()=>s,responsive:()=>m,rowColumnGap:()=>x,rows:()=>c,usage:()=>o});e.s(["GridDemos",0,v],118981)},766821,e=>{"use strict";var a=e.i(648863);let t=[{date:"Mar 22",Apples:2301,Oranges:723,Tomatoes:2452},{date:"Mar 23",Apples:2181,Oranges:1887,Tomatoes:2402},{date:"Mar 24",Apples:1821,Oranges:986,Tomatoes:1821},{date:"Mar 25",Apples:2764,Oranges:987,Tomatoes:2809},{date:"Mar 26",Apples:1821,Oranges:403,Tomatoes:2290}],r=`
export const data = [
  {
    date: 'Mar 22',
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: 'Mar 23',
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: 'Mar 24',
    Apples: 3322,
    Oranges: 986,
    Tomatoes: 1821,
  },
  {
    date: 'Mar 25',
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: 'Mar 26',
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
];
`,n=[{name:"Page A",uv:4e3,pv:2400},{name:"Page B",uv:3e3,pv:1398},{name:"Page C",uv:2e3,pv:9800},{name:"Page D",uv:2780,pv:3908},{name:"Page E",uv:1890,pv:4800},{name:"Page F",uv:2390,pv:3800},{name:"Page G",uv:3490,pv:4300}],o=`
export const biaxialData = [
  { name: 'Page A', uv: 4000, pv: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398 },
  { name: 'Page C', uv: 2000, pv: 9800 },
  { name: 'Page D', uv: 2780, pv: 3908 },
  { name: 'Page E', uv: 1890, pv: 4800 },
  { name: 'Page F', uv: 2390, pv: 3800 },
  { name: 'Page G', uv: 3490, pv: 4300 },
];
`,l=[{date:"Mar 22",Apples:50},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:40},{date:"Mar 25",Apples:30},{date:"Mar 26",Apples:0},{date:"Mar 27",Apples:20},{date:"Mar 28",Apples:20},{date:"Mar 29",Apples:10}],i=`
export const data = [
  {
    date: 'Mar 22',
    Apples: 50,
  },
  {
    date: 'Mar 23',
    Apples: 60,
  },
  {
    date: 'Mar 24',
    Apples: 40,
  },
  {
    date: 'Mar 25',
    Apples: 30,
  },
  {
    date: 'Mar 26',
    Apples: 0,
  },
  {
    date: 'Mar 27',
    Apples: 20,
  },
  {
    date: 'Mar 28',
    Apples: 20,
  },
  {
    date: 'Mar 29',
    Apples: 10,
  },
];
`;var s=e.i(391398),c=e.i(520916),d=e.i(577596),m=e.i(739539),u=e.i(979298),p=e.i(232471),h=e.i(481178),f=e.i(275519),x=e.i(317477),g=e.i(951254),y=e.i(44091),v=e.i(62904),b=e.i(391466),C=e.i(191788),A=e.i(321020),j=e.i(57699),w=e.i(526626),k=e.i(471970),E=e.i(437515),S=["axis"],N=(0,C.forwardRef)((e,a)=>C.createElement(E.CartesianChart,{chartName:"ComposedChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:S,tooltipPayloadSearcher:k.arrayTooltipSearcher,categoricalChartProps:e,ref:a})),D=e.i(905e3),T=e.i(301426),V=e.i(881264),L=e.i(385429),M=e.i(86443),G=e.i(723451),P=e.i(694713),I=e.i(756902),O=e.i(976835);let B={withXAxis:!0,withYAxis:!0,withTooltip:!0,tooltipAnimationDuration:0,tickLine:"y",strokeDasharray:"5 5",gridAxis:"x",withDots:!0,connectNulls:!0,strokeWidth:2,curveType:"monotone"},R=(0,h.createVarsResolver)((e,{textColor:a,gridColor:t})=>({root:{"--chart-text-color":a?(0,x.getThemeColor)(a,e):void 0,"--chart-grid-color":t?(0,x.getThemeColor)(t,e):void 0}})),F=(0,f.factory)(e=>{let a=(0,y.useProps)("CompositeChart",B,e),{classNames:t,className:r,style:n,styles:o,unstyled:l,vars:i,data:h,withLegend:f,legendProps:k,series:E,onMouseLeave:S,dataKey:F,withTooltip:Z,withXAxis:z,withYAxis:W,gridAxis:H,tickLine:K,xAxisProps:_,yAxisProps:U,unit:$,tooltipAnimationDuration:q,strokeDasharray:Y,gridProps:X,tooltipProps:J,referenceLines:Q,withDots:ee,dotProps:ea,activeDotProps:et,strokeWidth:er,connectNulls:en,curveType:eo,dir:el,valueFormatter:ei,children:es,lineProps:ec,xAxisLabel:ed,yAxisLabel:em,withRightYAxis:eu,rightYAxisLabel:ep,rightYAxisProps:eh,withPointLabels:ef,areaProps:ex,barProps:eg,withBarValueLabel:ey,minBarSize:ev,maxBarWidth:eb,composedChartProps:eC,attributes:eA,...ej}=a,ew=(0,g.useMantineTheme)(),[ek,eE]=(0,C.useState)(null),eS=null!==ek,{resolvedClassNames:eN,resolvedStyles:eD}=(0,v.useResolvedStylesApi)({classNames:t,styles:o,props:a}),eT=(0,b.useStyles)({name:"CompositeChart",classes:u.default,props:a,className:r,style:n,classNames:t,styles:o,unstyled:l,attributes:eA,vars:i,varsResolver:R}),eV=E.map(e=>{let a=(0,x.getThemeColor)(e.color,ew),t=eS&&ek!==e.name;return"line"===e.type?(0,C.createElement)(L.Line,{...eT("line"),key:e.name,name:e.name,dataKey:e.name,dot:!!ee&&{fillOpacity:+!t,strokeOpacity:+!t,strokeWidth:1,fill:a,stroke:a,...ea},activeDot:!!ee&&{fill:"var(--mantine-color-white)",stroke:a,...et},fill:a,stroke:a,strokeWidth:er,isAnimationActive:!1,fillOpacity:+!t,strokeOpacity:t?.5:1,connectNulls:en,type:eo,strokeDasharray:e.strokeDasharray,yAxisId:e.yAxisId||void 0,label:ef?(0,s.jsx)(m.PointLabel,{valueFormatter:ei}):void 0,..."function"==typeof ec?ec(e):ec}):"area"===e.type?(0,C.createElement)(A.Area,{...eT("area"),key:e.name,name:e.name,type:eo,dataKey:e.name,fill:a,strokeWidth:er,stroke:a,isAnimationActive:!1,connectNulls:en,dot:!!ee&&{fillOpacity:+!t,strokeOpacity:+!t,strokeWidth:1,fill:a,stroke:a,...ea},activeDot:!!ee&&{fill:ew.white,stroke:a,strokeWidth:2,r:4,...et},fillOpacity:.2*!t,strokeOpacity:t?.5:1,strokeDasharray:e.strokeDasharray,yAxisId:e.yAxisId||void 0,label:ef?(0,s.jsx)(m.PointLabel,{valueFormatter:ei}):void 0,..."function"==typeof ex?ex(e):ex}):"bar"===e.type?(0,C.createElement)(j.Bar,{...eT("bar"),key:e.name,name:e.name,dataKey:e.name,fill:a,stroke:a,isAnimationActive:!1,fillOpacity:t?.1:1,strokeOpacity:.2*!!t,yAxisId:e.yAxisId||void 0,minPointSize:ev,..."function"==typeof eg?eg(e):eg},ey&&(0,s.jsx)(T.LabelList,{position:"top",fontSize:12,fill:"var(--chart-bar-label-color, var(--mantine-color-dimmed))",formatter:e=>ei?.(e)})):null}),eL=Q?.map((e,a)=>{let t=(0,x.getThemeColor)(e.color,ew);return(0,s.jsx)(M.ReferenceLine,{stroke:e.color?t:"var(--chart-grid-color)",strokeWidth:1,yAxisId:e.yAxisId||void 0,...e,label:{fill:e.color?t:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft",..."object"==typeof e.label?e.label:{value:e.label}},...eT("referenceLine")},a)}),eM={axisLine:!1,type:"number",tickLine:"none"!==H&&("y"===K||"xy"===K)&&{stroke:"currentColor"},allowDecimals:!0,unit:$,tickFormatter:ei,...eT("axis")};return(0,s.jsx)(p.Box,{...eT("root"),onMouseLeave:e=>{eE(null),S?.(e)},dir:el||"ltr",...ej,children:(0,s.jsx)(G.ResponsiveContainer,{...eT("container"),children:(0,s.jsxs)(N,{data:h,maxBarSize:eb,margin:{bottom:ed?30:void 0,left:em?10:void 0,right:em?5:void 0},...eC,children:[f&&(0,s.jsx)(V.Legend,{verticalAlign:"top",content:e=>(0,s.jsx)(d.ChartLegend,{payload:e.payload,onHighlight:eE,legendPosition:k?.verticalAlign||"top",classNames:eN,styles:eD,series:E,attributes:eA}),...k}),(0,s.jsxs)(I.XAxis,{hide:!z,dataKey:F,tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:"none"!==H&&("x"===K||"xy"===K)&&{stroke:"currentColor"},minTickGap:5,...eT("axis"),..._,children:[ed&&(0,s.jsx)(D.Label,{position:"insideBottom",offset:-20,fontSize:12,...eT("axisLabel"),children:ed}),_?.children]}),(0,s.jsxs)(O.YAxis,{orientation:"left",tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},hide:!W,...eM,...U,children:[em&&(0,s.jsx)(D.Label,{position:"insideLeft",angle:-90,textAnchor:"middle",fontSize:12,offset:-5,...eT("axisLabel"),children:em}),U?.children]}),(0,s.jsxs)(O.YAxis,{yAxisId:"right",orientation:"right",tick:{transform:"translate(10, 0)",fontSize:12,fill:"currentColor"},hide:!eu,...eM,...eh,children:[ep&&(0,s.jsx)(D.Label,{position:"insideRight",angle:90,textAnchor:"middle",fontSize:12,offset:-5,...eT("axisLabel"),children:ep}),U?.children]}),(0,s.jsx)(w.CartesianGrid,{strokeDasharray:Y,vertical:"y"===H||"xy"===H,horizontal:"x"===H||"xy"===H,...eT("grid"),...X}),Z&&(0,s.jsx)(P.Tooltip,{animationDuration:q,isAnimationActive:0!==q,position:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:Y},content:({label:e,payload:a,labelFormatter:t})=>(0,s.jsx)(c.ChartTooltip,{label:t&&a?t(e,a):e,payload:a,unit:$,classNames:eN,styles:eD,series:E,valueFormatter:ei,attributes:eA}),...J}),eV,eL,es]})})})});F.displayName="@mantine/charts/CompositeChart",F.classes=u.default,F.varsResolver=R;let Z={type:"configurator",component:function(e){return(0,s.jsx)(F,{h:300,data:t,dataKey:"date",maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}],...e})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
      {{props}}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"segmented",prop:"tickLine",initialValue:"y",libraryValue:"y",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"segmented",prop:"gridAxis",initialValue:"x",libraryValue:"x",transformLabel:!1,data:[{value:"x",label:"x"},{value:"y",label:"y"},{value:"xy",label:"xy"},{value:"none",label:"none"}]},{type:"boolean",prop:"withXAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withYAxis",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withDots",initialValue:!0,libraryValue:!0}]},z={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:t,dataKey:"date",xAxisLabel:"Date",yAxisLabel:"Amount",maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      xAxisLabel="Date"
      yAxisLabel="Amount"
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},W={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:t,dataKey:"date",tickLine:"xy",yAxisProps:{tickMargin:15,orientation:"right"},xAxisProps:{tickMargin:15,orientation:"top"},series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      tickLine="xy"
      yAxisProps={{ tickMargin: 15, orientation: 'right' }}
      xAxisProps={{ tickMargin: 15, orientation: 'top' }}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},H={type:"configurator",component:function(e){return(0,s.jsx)(F,{h:300,data:t,dataKey:"date",series:[{name:"Apples",type:"line",color:e.color}],...e})},code:[{code:e=>`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      series={[{ name: 'Apples', type: 'line', color: '${e.color}' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:!0}]},K={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:t,dataKey:"date",className:"m_f98102e0",series:[{name:"Apples",color:"var(--chart-color)",type:"line"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      className={classes.root}
      series={[{ name: 'Apples', color: 'var(--chart-color)', type: 'line' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:`.root {
  @mixin light {
    --chart-color: var(--mantine-color-orange-8);
  }

  @mixin dark {
    --chart-color: var(--mantine-color-lime-4);
  }
}
`,language:"scss",fileName:"Demo.module.css"},{code:r,language:"tsx",fileName:"data.ts"}]};var _=e.i(470743),U=e.i(883364),$=e.i(744335);function q({label:e,payload:a}){return a?(0,s.jsxs)(_.Paper,{px:"md",py:"sm",withBorder:!0,shadow:"md",children:[(0,s.jsx)(U.Text,{fw:500,mb:5,children:e}),a.map(e=>(0,s.jsxs)(U.Text,{c:(0,$.alpha)(e.color,1),fz:"sm",children:[e.name,": ",e.value]},e.name))]}):null}let Y={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:t,dataKey:"date",tooltipProps:{content:({label:e,payload:a})=>(0,s.jsx)(q,{label:e,payload:a})},maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { alpha, Paper, Text } from '@mantine/core';
import { data } from './data';

interface ChartTooltipProps {
  label: React.ReactNode;
  payload: readonly Record<string, any>[] | undefined;
}

function ChartTooltip({ label, payload }: ChartTooltipProps) {
  if (!payload) return null;

  return (
    <Paper px="md" py="sm" withBorder shadow="md">
      <Text fw={500} mb={5}>
        {label}
      </Text>
      {payload.map((item: any) => (
        <Text key={item.name} c={alpha(item.color, 1)} fz="sm">
          {item.name}: {item.value}
        </Text>
      ))}
    </Paper>
  );
}

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      tooltipProps={{
        content: ({ label, payload }) => <ChartTooltip label={label} payload={payload} />,
      }}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},X={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:t,dataKey:"date",dotProps:{r:6,strokeWidth:2,stroke:"#fff"},activeDotProps:{r:8,strokeWidth:1,fill:"#fff"},maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      dotProps={{ r: 6, strokeWidth: 2, stroke: '#fff' }}
      activeDotProps={{ r: 8, strokeWidth: 1, fill: '#fff' }}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},J={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:t,dataKey:"date",className:"m_300a99a6",maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
.root {
  @mixin light {
    --chart-grid-color: alpha(var(--mantine-color-black), 0.15);
    --chart-text-color: var(--mantine-color-gray-7);
  }

  @mixin dark {
    --chart-grid-color: alpha(var(--mantine-color-white), 0.15);
    --chart-text-color: var(--mantine-color-dark-0);
  }
}
`,language:"scss",fileName:"Demo.module.css"},{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      className={classes.root}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},Q={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:t,dataKey:"date",withLegend:!0,maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      withLegend
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ee={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:t,dataKey:"date",withLegend:!0,legendProps:{verticalAlign:"bottom",height:50},maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      withLegend
      legendProps={{ verticalAlign: 'bottom', height: 50 }}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ea={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:t,dataKey:"date",strokeWidth:1,dotProps:{r:2},activeDotProps:{r:3,strokeWidth:1},maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line",strokeDasharray:"5 5"},{name:"Oranges",color:"yellow.8",type:"area",strokeDasharray:"5 5"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      strokeWidth={1}
      dotProps={{ r: 2 }}
      activeDotProps={{ r: 3, strokeWidth: 1 }}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line', strokeDasharray: '5 5' },
        { name: 'Oranges', color: 'yellow.8', type: 'area', strokeDasharray: '5 5' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},et={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:t,dataKey:"date",withTooltip:!1,maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      withTooltip={false}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},er={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:t,dataKey:"date",withPointLabels:!0,maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      withPointLabels
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},en={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:t,dataKey:"date",yAxisProps:{domain:[0,100]},referenceLines:[{y:1200,label:"Average sales",color:"red.6"},{x:"Mar 25",label:"Report out",color:"blue.7"}],maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      yAxisProps={{ domain: [0, 100] }}
      referenceLines={[
        { y: 1200, label: 'Average sales', color: 'red.6' },
        { x: 'Mar 25', label: 'Report out', color: 'blue.7' },
      ]}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},eo={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:n,dataKey:"name",withRightYAxis:!0,yAxisLabel:"uv",rightYAxisLabel:"pv",series:[{name:"uv",color:"pink.6",type:"line"},{name:"pv",color:"cyan.6",yAxisId:"right",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="name"
      withRightYAxis
      yAxisLabel="uv"
      rightYAxisLabel="pv"
      series={[
        { name: 'uv', color: 'pink.6', type: 'line' },
        { name: 'pv', color: 'cyan.6', yAxisId: 'right', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},el={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:t,dataKey:"date",tickLine:"xy",xAxisProps:{angle:-20},maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      tickLine="xy"
      xAxisProps={{ angle: -20 }}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ei={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:t,dataKey:"date",withLegend:!0,legendProps:{verticalAlign:"bottom"},maxBarWidth:30,series:[{name:"Tomatoes",label:"Tomatoes sales",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",label:"Apples sales",color:"red.8",type:"line"},{name:"Oranges",label:"Oranges sales",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      withLegend
      legendProps={{ verticalAlign: 'bottom' }}
      maxBarWidth={30}
      series={[
        {
          name: 'Tomatoes',
          label: 'Tomatoes sales',
          color: 'rgba(18, 120, 255, 0.2)',
          type: 'bar',
        },
        { name: 'Apples', label: 'Apples sales', color: 'red.8', type: 'line' },
        { name: 'Oranges', label: 'Oranges sales', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},es={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:t,dataKey:"date",strokeDasharray:"15 15",maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      strokeDasharray="15 15"
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ec={type:"configurator",component:function(e){return(0,s.jsx)(F,{h:300,data:t,dataKey:"date",maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}],...e})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
      {{props}}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}],controls:[{type:"number",prop:"strokeWidth",initialValue:2,libraryValue:null,step:.1,min:.5,max:5}]},ed={type:"code",component:function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(U.Text,{mb:"md",pl:"md",children:"Apples sales:"}),(0,s.jsx)(F,{h:180,data:t,dataKey:"date",series:[{name:"Apples",color:"indigo.6",type:"area"}],composedChartProps:{syncId:"groceries"}}),(0,s.jsx)(U.Text,{mb:"md",pl:"md",mt:"xl",children:"Tomatoes sales:"}),(0,s.jsx)(F,{h:180,data:t,dataKey:"date",composedChartProps:{syncId:"groceries"},series:[{name:"Tomatoes",color:"cyan.6",type:"bar"}]})]})},code:[{code:`
import { Text } from '@mantine/core';
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <>
      <Text mb="md" pl="md">
        Apples sales:
      </Text>

      <CompositeChart
        h={180}
        data={data}
        dataKey="date"
        series={[{ name: 'Apples', color: 'indigo.6', type: 'area' }]}
        composedChartProps={{ syncId: 'groceries' }}
      />

      <Text mb="md" pl="md" mt="xl">
        Tomatoes sales:
      </Text>

      <CompositeChart
        h={180}
        data={data}
        dataKey="date"
        composedChartProps={{ syncId: 'groceries' }}
        series={[{ name: 'Tomatoes', color: 'cyan.6', type: 'bar' }]}
      />
    </>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},em={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:t,dataKey:"date",tooltipAnimationDuration:200,maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      tooltipAnimationDuration={200}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},eu={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:t,dataKey:"date",unit:"$",maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      unit="$"
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ep={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:t,dataKey:"date",valueFormatter:e=>new Intl.NumberFormat("en-US").format(e),maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      valueFormatter={(value) => new Intl.NumberFormat('en-US').format(value)}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},eh={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:t,dataKey:"date",xAxisProps:{padding:{left:30,right:30}},maxBarWidth:30,series:[{name:"Tomatoes",color:"rgba(18, 120, 255, 0.2)",type:"bar"},{name:"Apples",color:"red.8",type:"line"},{name:"Oranges",color:"yellow.8",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      xAxisProps={{ padding: { left: 30, right: 30 } }}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r,language:"tsx",fileName:"data.ts"}]},ef={type:"code",component:function(){return(0,s.jsx)(F,{h:300,data:l,dataKey:"date",yAxisProps:{domain:[0,100]},series:[{name:"Apples",color:"indigo.6",type:"area"}]})},code:[{code:`
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      yAxisProps={{ domain: [0, 100] }}
      series={[{ name: 'Apples', color: 'indigo.6', type: 'area' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i,language:"tsx",fileName:"data.ts"}]};var ex=(0,a.__exportAll)({axisLabels:()=>z,axisProps:()=>W,color:()=>H,colorSchemeColor:()=>K,customTooltip:()=>Y,dotProps:()=>X,gridColor:()=>J,legend:()=>Q,legendPosition:()=>ee,lineDasharray:()=>ea,noTooltip:()=>et,pointLabels:()=>er,referenceLines:()=>en,rightYAxis:()=>eo,rotateLabels:()=>el,seriesLabels:()=>ei,strokeDasharray:()=>es,strokeWidth:()=>ec,sync:()=>ed,tooltipAnimation:()=>em,unit:()=>eu,usage:()=>Z,valueFormatter:()=>ep,xAxisOffset:()=>eh,yScale:()=>ef});e.s(["CompositeChartDemos",0,ex],766821)},576379,e=>{"use strict";var a=e.i(391398),t=e.i(38856),r=e.i(113997),n=e.i(766821),o=e.i(852363),l=e.i(118981),i=e.i(588741),s=e.i(483732),c=e.i(501655);e.i(603441);var d=e.i(62558);e.i(457450);var m=e.i(418026);let u=(0,d.Layout)(m.MDX_DATA.Changelog7130);function p(e){let d={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.useMDXComponents)(),...e.components},{Demo:m}=d;return m||function(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.h2,{id:"container-queries-support-in-grid",children:"Container queries support in Grid"}),"\n",(0,a.jsxs)(d.p,{children:["You can now use ",(0,a.jsx)(d.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",children:"container queries"}),"\nin ",(0,a.jsx)(d.a,{href:"/core/grid",children:"Grid"})," component. With container queries, all responsive values\nare adjusted based on the container width, not the viewport width."]}),"\n",(0,a.jsx)(d.p,{children:"Example of using container queries. To see how the grid changes, resize the root element\nof the demo with the resize handle located at the bottom right corner of the demo:"}),"\n",(0,a.jsx)(m,{data:l.GridDemos.container}),"\n",(0,a.jsx)(d.h2,{id:"compositechart-component",children:"CompositeChart component"}),"\n",(0,a.jsxs)(d.p,{children:["New ",(0,a.jsx)(d.a,{href:"/charts/composite-chart",children:"CompositeChart"})," component allows using ",(0,a.jsx)(d.code,{children:"Line"}),", ",(0,a.jsx)(d.code,{children:"Area"})," and ",(0,a.jsx)(d.code,{children:"Bar"})," charts together in a single chart:"]}),"\n",(0,a.jsx)(m,{data:n.CompositeChartDemos.unit}),"\n",(0,a.jsx)(d.h2,{id:"points-labels",children:"Points labels"}),"\n",(0,a.jsxs)(d.p,{children:[(0,a.jsx)(d.a,{href:"/charts/line-chart",children:"LineChart"})," and ",(0,a.jsx)(d.a,{href:"/charts/area-chart",children:"AreaChart"})," now support ",(0,a.jsx)(d.code,{children:"withPointLabels"})," prop to display labels on data points:"]}),"\n",(0,a.jsx)(m,{data:i.LineChartDemos.pointLabels}),"\n",(0,a.jsxs)(d.p,{children:[(0,a.jsx)(d.a,{href:"/charts/scatter-chart",children:"ScatterChart"})," also supports point labels, but also allows to control which axis should display labels with ",(0,a.jsx)(d.code,{children:"pointLabels"})," prop:"]}),"\n",(0,a.jsx)(m,{data:s.ScatterChartDemos.pointLabels}),"\n",(0,a.jsx)(d.h2,{id:"barchart-mixed-stacks",children:"BarChart: Mixed stacks"}),"\n",(0,a.jsxs)(d.p,{children:["You can now control how ",(0,a.jsx)(d.a,{href:"/charts/bar-chart",children:"BarChart"})," series are stacked by setting ",(0,a.jsx)(d.code,{children:"stackId"})," property in series object:"]}),"\n",(0,a.jsx)(m,{data:r.BarChartDemos.mixedStack}),"\n",(0,a.jsx)(d.h2,{id:"barchart-minimum-bar-size",children:"BarChart: Minimum bar size"}),"\n",(0,a.jsxs)(d.p,{children:[(0,a.jsx)(d.a,{href:"/charts/bar-chart",children:"BarChart"})," now supports ",(0,a.jsx)(d.code,{children:"minBarSize"})," prop to set the minimum size of the bar in px:"]}),"\n",(0,a.jsx)(m,{data:r.BarChartDemos.minBarSize}),"\n",(0,a.jsx)(d.h2,{id:"new-demo-custom-tabs-variant",children:"New demo: Custom Tabs variant"}),"\n",(0,a.jsxs)(d.p,{children:["A new example of adding a custom variant to ",(0,a.jsx)(d.a,{href:"/core/tabs",children:"Tabs"})," component with\n",(0,a.jsx)(d.a,{href:"/core/floating-indicator",children:"FloatingIndicator"}),":"]}),"\n",(0,a.jsx)(m,{data:o.FloatingIndicatorDemos.tabs}),"\n",(0,a.jsx)(d.h2,{id:"new-demo-custom-slider",children:"New demo: Custom slider"}),"\n",(0,a.jsxs)(d.p,{children:["Example of ",(0,a.jsx)(d.a,{href:"/hooks/use-move",children:"use-move"})," hook usage to create a custom slider:"]}),"\n",(0,a.jsx)(m,{data:c.SliderDemos.customSlider}),"\n",(0,a.jsx)(d.h2,{id:"help-center-updates",children:"Help Center updates"}),"\n",(0,a.jsxs)(d.ul,{children:["\n",(0,a.jsxs)(d.li,{children:["New ",(0,a.jsx)(d.a,{href:"https://help.mantine.dev/q/custom-input-use-form",children:"How to integrate custom input with use-form hook?"})," question"]}),"\n",(0,a.jsxs)(d.li,{children:["New ",(0,a.jsx)(d.a,{href:"https://help.mantine.dev/q/multiselect-value-placeholder",children:"Can I remove MultiSelect placeholder when the component has selected values?"})," question"]}),"\n",(0,a.jsxs)(d.li,{children:["New ",(0,a.jsx)(d.a,{href:"https://help.mantine.dev/q/react-router-load-fonts",children:"How can I load fonts in React Router?"})," question"]}),"\n",(0,a.jsxs)(d.li,{children:["New ",(0,a.jsx)(d.a,{href:"https://help.mantine.dev/q/styles-order",children:"My styles are overridden by Mantine components styles, what should I do?"})," question"]}),"\n",(0,a.jsxs)(d.li,{children:["New ",(0,a.jsx)(d.a,{href:"https://help.mantine.dev/q/polymorphic-in-polymorphic",children:"Why I cannot use one polymorphic component in component prop of another polymorphic component?"})," question"]}),"\n",(0,a.jsxs)(d.li,{children:["New ",(0,a.jsx)(d.a,{href:"https://help.mantine.dev/q/list-of-strings-in-use-form",children:"Can I use an array of strings as a list in use-form?"})," question"]}),"\n"]}),"\n",(0,a.jsx)(d.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,a.jsxs)(d.ul,{children:["\n",(0,a.jsxs)(d.li,{children:["New demo has been added to ",(0,a.jsx)(d.a,{href:"/core/chip",children:"Chip"})," component with an example of how to deselect radio chip"]}),"\n",(0,a.jsxs)(d.li,{children:[(0,a.jsx)(d.a,{href:"/charts/bar-chart",children:"BarChart"})," now supports ",(0,a.jsx)(d.code,{children:"maxBarWidth"})," prop to set the maximum width of each bar in px"]}),"\n"]})]})}e.s(["default",0,function(e={}){return(0,a.jsx)(u,{...e,children:(0,a.jsx)(p,{...e})})}])},458170,(e,a,t)=>{let r="/changelog/7-13-0";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(576379)]),a.hot&&a.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(a=>Promise.all(["static/chunks/22379_btw709h.js"].map(a=>e.l(a))).then(()=>a(493594)))},828805,e=>{e.v(a=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(a=>e.l(a))).then(()=>a(879466)))}]);