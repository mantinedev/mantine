(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,124307,151461,t=>{"use strict";var e=t.i(44091),a=t.i(275519),n=t.i(232471),o=t.i(725695);let[i,r]=(0,t.i(386179).createSafeContext)("Pagination.Root component was not found in tree");var l={root:"m_4addd315",control:"m_326d024a",dots:"m_4ad7767d",items:"m_105fdbed",label:"m_10817321"},s=t.i(284629),c=t.i(391398);let m={withPadding:!0},u=(0,a.factory)(t=>{let{classNames:a,className:n,style:o,styles:i,vars:l,active:u,disabled:g,withPadding:p,mod:d,...x}=(0,e.useProps)("PaginationControl",m,t),h=r(),f=g||h.disabled;return(0,c.jsx)(s.UnstyledButton,{disabled:f,mod:[{active:u,disabled:f,"with-padding":p},d],...h.getStyles("control",{className:n,style:o,classNames:a,styles:i,active:!f}),...x})});function g({style:t,children:e,path:a,...n}){return(0,c.jsx)("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",style:{width:"calc(var(--pagination-control-size) / 1.8)",height:"calc(var(--pagination-control-size) / 1.8)",...t},...n,children:(0,c.jsx)("path",{d:a,fill:"currentColor"})})}u.classes=l,u.displayName="@mantine/core/PaginationControl";let p={icon:t=>(0,c.jsx)(g,{...t,path:"M2 8c0-.733.6-1.333 1.333-1.333.734 0 1.334.6 1.334 1.333s-.6 1.333-1.334 1.333C2.6 9.333 2 8.733 2 8zm9.333 0c0-.733.6-1.333 1.334-1.333C13.4 6.667 14 7.267 14 8s-.6 1.333-1.333 1.333c-.734 0-1.334-.6-1.334-1.333zM6.667 8c0-.733.6-1.333 1.333-1.333s1.333.6 1.333 1.333S8.733 9.333 8 9.333 6.667 8.733 6.667 8z"})},d=(0,a.factory)(t=>{let{classNames:a,className:o,style:i,styles:l,vars:s,icon:m,...u}=(0,e.useProps)("PaginationDots",p,t);return(0,c.jsx)(n.Box,{...r().getStyles("dots",{className:o,style:i,styles:l,classNames:a}),...u,children:(0,c.jsx)(m,{style:{width:"calc(var(--pagination-control-size) / 1.8)",height:"calc(var(--pagination-control-size) / 1.8)"}})})});d.classes=l,d.displayName="@mantine/core/PaginationDots";var x=t.i(642291);function h({icon:t,name:a,action:n,type:o}){let i={icon:t},l=t=>{let{icon:l,...s}=(0,e.useProps)(a,i,t),m=r(),g="next"===o?m.active===m.total:1===m.active;return(0,c.jsx)(u,{disabled:m.disabled||g,onClick:m[n],withPadding:!1,...s,children:(0,c.jsx)(l,{className:"mantine-rotate-rtl",style:{width:"calc(var(--pagination-control-size) / 1.8)",height:"calc(var(--pagination-control-size) / 1.8)"}})})};return l.displayName=`@mantine/core/${a}`,(0,x.polymorphic)(l)}let f=h({icon:t=>(0,c.jsx)(g,{...t,path:"M8.781 8l-3.3-3.3.943-.943L10.667 8l-4.243 4.243-.943-.943 3.3-3.3z"}),name:"PaginationNext",action:"onNext",type:"next"}),P=h({icon:t=>(0,c.jsx)(g,{...t,path:"M7.219 8l3.3 3.3-.943.943L5.333 8l4.243-4.243.943.943-3.3 3.3z"}),name:"PaginationPrevious",action:"onPrevious",type:"previous"}),j=h({icon:t=>(0,c.jsx)(g,{...t,path:"M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z"}),name:"PaginationFirst",action:"onFirst",type:"previous"}),b=h({icon:t=>(0,c.jsx)(g,{...t,path:"M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"}),name:"PaginationLast",action:"onLast",type:"next"});function v({dotsIcon:t}){let e=r();return(0,c.jsx)(c.Fragment,{children:e.range.map((a,n)=>"dots"===a?(0,c.jsx)(d,{icon:t},n):(0,c.jsx)(u,{active:a===e.active,"aria-current":a===e.active?"page":void 0,onClick:()=>e.onChange(a),disabled:e.disabled,...e.getItemProps?.(a),children:e.getItemProps?.(a)?.children??a},n))})}v.displayName="@mantine/core/PaginationItems";let A={formatLabel:({page:t,totalPages:e})=>`Page ${t} of ${e}`},y=(0,a.factory)(t=>{let{classNames:a,className:o,style:i,styles:l,vars:s,formatLabel:m,...u}=(0,e.useProps)("PaginationLabel",A,t),g=r();return(0,c.jsx)(n.Box,{...g.getStyles("label",{className:o,style:i,styles:l,classNames:a}),...u,children:m({page:g.active,totalPages:g.total})})});y.classes=l,y.displayName="@mantine/core/PaginationLabel";var V=t.i(433512),Z=t.i(334816),L=t.i(481178),M=t.i(317477),C=t.i(700145),I=t.i(853487),w=t.i(391466),T=t.i(579560),E=t.i(191788);function z(t,e){return Array.from({length:e-t+1},(e,a)=>a+t)}let F="dots";function R({total:t,siblings:e=1,boundaries:a=1,page:n,initialPage:o,onChange:i,startValue:r=1}){let l=Math.max(Math.trunc(r),1),s=Math.max(Math.trunc(t),l),c=s-l+1,m=o??l,[u,g]=(0,T.useUncontrolled)({value:n,onChange:i,defaultValue:m,finalValue:m}),p=(0,E.useCallback)(t=>{t<l?g(l):t>s?g(s):g(t)},[l,s,g]),d=(0,E.useCallback)(()=>p(u+1),[u,p]),x=(0,E.useCallback)(()=>p(u-1),[u,p]),h=(0,E.useCallback)(()=>p(l),[p,l]),f=(0,E.useCallback)(()=>p(s),[s,p]);return{range:(0,E.useMemo)(()=>{if(2*e+3+2*a>=c)return z(l,s);let t=Math.max(u-e,l+a-1),n=Math.min(u+e,s-a),o=t>l+a+1,i=n<s-a;if(!o&&i)return[...z(l,l+(2*e+a+2)-1),F,...z(s-(a-1),s)];if(o&&!i){let t=a+1+2*e;return[...z(l,l+a-1),F,...z(s-t,s)]}return[...z(l,l+a-1),F,...z(t,n),F,...z(s-a+1,s)]},[c,e,u,l,s,a]),active:u,setPage:p,next:d,previous:x,first:h,last:f}}t.s(["usePagination",0,R],151461);let H={siblings:1,boundaries:1},S=(0,L.createVarsResolver)((t,{size:e,radius:a,color:n,autoContrast:o})=>({root:{"--pagination-control-radius":void 0===a?void 0:(0,V.getRadius)(a),"--pagination-control-size":(0,V.getSize)(e,"pagination-control-size"),"--pagination-control-fz":(0,V.getFontSize)(e),"--pagination-active-bg":n?(0,M.getThemeColor)(n,t):void 0,"--pagination-active-color":(0,I.getAutoContrastValue)(o,t)?(0,C.getContrastColor)({color:n,theme:t,autoContrast:o}):void 0}})),D=(0,a.factory)(t=>{let a=(0,e.useProps)("PaginationRoot",H,t),{classNames:o,className:r,style:s,styles:m,unstyled:u,vars:g,total:p,value:d,defaultValue:x,onChange:h,disabled:f,siblings:P,boundaries:j,color:b,radius:v,onNextPage:A,onPreviousPage:y,onFirstPage:V,onLastPage:L,getItemProps:M,autoContrast:C,startValue:I,layout:T,mod:E,attributes:z,...F}=a,D=(0,w.useStyles)({name:"Pagination",classes:l,props:a,className:r,style:s,classNames:o,styles:m,unstyled:u,attributes:z,vars:g,varsResolver:S}),{range:G,setPage:N,next:B,previous:k,active:$,first:_,last:U}=R({page:d,initialPage:x,onChange:h,total:p,siblings:P,boundaries:j,startValue:I});return(0,c.jsx)(i,{value:{total:p,range:G,active:$,disabled:f,layout:T,getItemProps:M,onChange:N,onNext:(0,Z.createEventHandler)(A,B),onPrevious:(0,Z.createEventHandler)(y,k),onFirst:(0,Z.createEventHandler)(V,_),onLast:(0,Z.createEventHandler)(L,U),getStyles:D},children:(0,c.jsx)(n.Box,{...D("root"),mod:[{layout:T},E],...F})})});D.classes=l,D.varsResolver=S,D.displayName="@mantine/core/PaginationRoot";let G={withControls:!0,withPages:!0,siblings:1,boundaries:1,gap:8};function N({children:t}){return(0,c.jsx)(n.Box,{...r().getStyles("items"),children:t})}let B=(0,a.factory)(t=>{let{withEdges:a,withControls:n,getControlProps:i,nextIcon:r,previousIcon:l,lastIcon:s,firstIcon:m,dotsIcon:u,total:g,gap:p,hideWithOnePage:d,withPages:x,layout:h,formatLabel:A,...V}=(0,e.useProps)("Pagination",G,t);if(g<=0||d&&1===g)return null;let Z=x?"responsive"===h?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(N,{children:(0,c.jsx)(v,{dotsIcon:u})}),(0,c.jsx)(y,{formatLabel:A})]}):(0,c.jsx)(v,{dotsIcon:u}):null;return(0,c.jsx)(D,{total:g,layout:h,...V,children:(0,c.jsxs)(o.Group,{gap:p,children:[a&&(0,c.jsx)(j,{icon:m,...i?.("first")}),n&&(0,c.jsx)(P,{icon:l,...i?.("previous")}),Z,n&&(0,c.jsx)(f,{icon:r,...i?.("next")}),a&&(0,c.jsx)(b,{icon:s,...i?.("last")})]})})});B.classes=l,B.displayName="@mantine/core/Pagination",B.Root=D,B.Control=u,B.Dots=d,B.First=j,B.Last=b,B.Next=f,B.Previous=P,B.Items=v,B.Label=y,t.s(["Pagination",0,B],124307)},776115,t=>{"use strict";var e=t.i(191788),a=t.i(171481);let n=new Map([["bold",e.createElement(e.Fragment,null,e.createElement("path",{d:"M76,92A16,16,0,1,1,60,76,16,16,0,0,1,76,92Zm52-16a16,16,0,1,0,16,16A16,16,0,0,0,128,76Zm68,32a16,16,0,1,0-16-16A16,16,0,0,0,196,108ZM60,148a16,16,0,1,0,16,16A16,16,0,0,0,60,148Zm68,0a16,16,0,1,0,16,16A16,16,0,0,0,128,148Zm68,0a16,16,0,1,0,16,16A16,16,0,0,0,196,148Z"}))],["duotone",e.createElement(e.Fragment,null,e.createElement("path",{d:"M240,64V192a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V64A16,16,0,0,1,32,48H224A16,16,0,0,1,240,64Z",opacity:"0.2"}),e.createElement("path",{d:"M72,92A12,12,0,1,1,60,80,12,12,0,0,1,72,92Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,128,80Zm68,24a12,12,0,1,0-12-12A12,12,0,0,0,196,104ZM60,152a12,12,0,1,0,12,12A12,12,0,0,0,60,152Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,152Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,152Z"}))],["fill",e.createElement(e.Fragment,null,e.createElement("path",{d:"M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM68,168a12,12,0,1,1,12-12A12,12,0,0,1,68,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,68,112Zm60,56a12,12,0,1,1,12-12A12,12,0,0,1,128,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,128,112Zm60,56a12,12,0,1,1,12-12A12,12,0,0,1,188,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,188,112Z"}))],["light",e.createElement(e.Fragment,null,e.createElement("path",{d:"M70,92A10,10,0,1,1,60,82,10,10,0,0,1,70,92Zm58-10a10,10,0,1,0,10,10A10,10,0,0,0,128,82Zm68,20a10,10,0,1,0-10-10A10,10,0,0,0,196,102ZM60,154a10,10,0,1,0,10,10A10,10,0,0,0,60,154Zm68,0a10,10,0,1,0,10,10A10,10,0,0,0,128,154Zm68,0a10,10,0,1,0,10,10A10,10,0,0,0,196,154Z"}))],["regular",e.createElement(e.Fragment,null,e.createElement("path",{d:"M72,92A12,12,0,1,1,60,80,12,12,0,0,1,72,92Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,128,80Zm68,24a12,12,0,1,0-12-12A12,12,0,0,0,196,104ZM60,152a12,12,0,1,0,12,12A12,12,0,0,0,60,152Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,152Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,152Z"}))],["thin",e.createElement(e.Fragment,null,e.createElement("path",{d:"M68,92a8,8,0,1,1-8-8A8,8,0,0,1,68,92Zm60-8a8,8,0,1,0,8,8A8,8,0,0,0,128,84Zm68,16a8,8,0,1,0-8-8A8,8,0,0,0,196,100ZM60,156a8,8,0,1,0,8,8A8,8,0,0,0,60,156Zm68,0a8,8,0,1,0,8,8A8,8,0,0,0,128,156Zm68,0a8,8,0,1,0,8,8A8,8,0,0,0,196,156Z"}))]]),o=e.forwardRef((t,o)=>e.createElement(a.default,{ref:o,...t,weights:n}));o.displayName="DotsSixIcon",t.s(["DotsSixIcon",0,o],776115)},806205,t=>{"use strict";var e=t.i(648863),a=t.i(124307),n=t.i(391398);let o={type:"configurator",component:function(t){return(0,n.jsx)(a.Pagination,{total:10,...t})},code:`
import { Pagination } from '@mantine/core';

function Demo() {
  return <Pagination total={10}{{props}} />;
}
`,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"radius",type:"size",initialValue:"md",libraryValue:"md"},{prop:"withControls",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"withEdges",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1}]};var i=t.i(883364);let r={type:"code",code:`
import { Text, Pagination } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text mb="xs">1 sibling (default)</Text>
      <Pagination total={20} siblings={1} defaultValue={10} />

      <Text mb="xs" mt="xl">2 siblings</Text>
      <Pagination total={20} siblings={2} defaultValue={10} />

      <Text mb="xs" mt="xl">3 siblings</Text>
      <Pagination total={20} siblings={3} defaultValue={10} />
    </>
  );
}
`,component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Text,{mb:"xs",children:"1 sibling (default)"}),(0,n.jsx)(a.Pagination,{total:20,siblings:1,defaultValue:10}),(0,n.jsx)(i.Text,{mb:"xs",mt:"xl",children:"2 siblings"}),(0,n.jsx)(a.Pagination,{total:20,siblings:2,defaultValue:10}),(0,n.jsx)(i.Text,{mb:"xs",mt:"xl",children:"3 siblings"}),(0,n.jsx)(a.Pagination,{total:20,siblings:3,defaultValue:10})]})}},l={type:"code",code:`
import { Text, Pagination } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text mb="xs">1 boundary (default)</Text>
      <Pagination total={20} boundaries={1} defaultValue={10} />

      <Text mt="xl" mb="xs">2 boundaries</Text>
      <Pagination total={20} boundaries={2} defaultValue={10} />

      <Text mt="xl" mb="xs">3 boundaries</Text>
      <Pagination total={20} boundaries={3} defaultValue={10} />
    </>
  );
}
`,component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Text,{mb:"xs",children:"1 boundary (default)"}),(0,n.jsx)(a.Pagination,{total:20,boundaries:1,defaultValue:10}),(0,n.jsx)(i.Text,{mt:"xl",mb:"xs",children:"2 boundaries"}),(0,n.jsx)(a.Pagination,{total:20,boundaries:2,defaultValue:10}),(0,n.jsx)(i.Text,{mt:"xl",mb:"xs",children:"3 boundaries"}),(0,n.jsx)(a.Pagination,{total:20,boundaries:3,defaultValue:10})]})}},s={type:"code",component:function(){return(0,n.jsx)(a.Pagination,{total:10})},centered:!0};var c=t.i(363937);let m=`
import { Pagination } from '@mantine/core';

function Demo() {
  return <Pagination total={10}{{props}} />;
}
`,u={type:"styles-api",data:c.PaginationStylesApi,component:function(t){return(0,n.jsx)(a.Pagination,{total:10,...t})},code:m,centered:!0};var g=t.i(725695);let p={type:"code",component:function(){return(0,n.jsx)(a.Pagination.Root,{total:10,children:(0,n.jsxs)(g.Group,{gap:5,justify:"center",children:[(0,n.jsx)(a.Pagination.First,{}),(0,n.jsx)(a.Pagination.Previous,{}),(0,n.jsx)(a.Pagination.Items,{}),(0,n.jsx)(a.Pagination.Next,{}),(0,n.jsx)(a.Pagination.Last,{})]})})},code:`
import { Group, Pagination } from '@mantine/core';

function Demo() {
  return (
    <Pagination.Root total={10}>
      <Group gap={5} justify="center">
        <Pagination.First />
        <Pagination.Previous />
        <Pagination.Items />
        <Pagination.Next />
        <Pagination.Last />
      </Group>
    </Pagination.Root>
  );
}
`};var d=t.i(943311),x=t.i(191788),h=t.i(171481);let f=new Map([["bold",x.createElement(x.Fragment,null,x.createElement("path",{d:"M236,128a12,12,0,0,1-12,12H109l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L109,116H224A12,12,0,0,1,236,128ZM40,28A12,12,0,0,0,28,40V216a12,12,0,0,0,24,0V40A12,12,0,0,0,40,28Z"}))],["duotone",x.createElement(x.Fragment,null,x.createElement("path",{d:"M144,56V200L72,128Z",opacity:"0.2"}),x.createElement("path",{d:"M224,120H152V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,152,200V136h72a8,8,0,0,0,0-16Zm-88,60.69L83.31,128,136,75.31ZM48,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0Z"}))],["fill",x.createElement(x.Fragment,null,x.createElement("path",{d:"M48,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0Zm176,80H152V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,152,200V136h72a8,8,0,0,0,0-16Z"}))],["light",x.createElement(x.Fragment,null,x.createElement("path",{d:"M230,128a6,6,0,0,1-6,6H86.49l61.75,61.76a6,6,0,1,1-8.48,8.48l-72-72a6,6,0,0,1,0-8.48l72-72a6,6,0,0,1,8.48,8.48L86.49,122H224A6,6,0,0,1,230,128ZM40,34a6,6,0,0,0-6,6V216a6,6,0,0,0,12,0V40A6,6,0,0,0,40,34Z"}))],["regular",x.createElement(x.Fragment,null,x.createElement("path",{d:"M232,128a8,8,0,0,1-8,8H91.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L91.31,120H224A8,8,0,0,1,232,128ZM40,32a8,8,0,0,0-8,8V216a8,8,0,0,0,16,0V40A8,8,0,0,0,40,32Z"}))],["thin",x.createElement(x.Fragment,null,x.createElement("path",{d:"M228,128a4,4,0,0,1-4,4H81.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,1,1,5.66,5.66L81.66,124H224A4,4,0,0,1,228,128ZM40,36a4,4,0,0,0-4,4V216a4,4,0,0,0,8,0V40A4,4,0,0,0,40,36Z"}))]]),P=x.forwardRef((t,e)=>x.createElement(h.default,{ref:e,...t,weights:f}));P.displayName="ArrowLineLeftIcon";let j=new Map([["bold",x.createElement(x.Fragment,null,x.createElement("path",{d:"M184.49,119.51a12,12,0,0,1,0,17l-72,72a12,12,0,0,1-17-17L147,140H32a12,12,0,0,1,0-24H147L95.51,64.49a12,12,0,0,1,17-17ZM216,28a12,12,0,0,0-12,12V216a12,12,0,0,0,24,0V40A12,12,0,0,0,216,28Z"}))],["duotone",x.createElement(x.Fragment,null,x.createElement("path",{d:"M184,128l-72,72V56Z",opacity:"0.2"}),x.createElement("path",{d:"M117.66,50.34A8,8,0,0,0,104,56v64H32a8,8,0,0,0,0,16h72v64a8,8,0,0,0,13.66,5.66l72-72a8,8,0,0,0,0-11.32ZM120,180.69V75.31L172.69,128ZM224,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0Z"}))],["fill",x.createElement(x.Fragment,null,x.createElement("path",{d:"M224,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0ZM117.66,50.34A8,8,0,0,0,104,56v64H32a8,8,0,0,0,0,16h72v64a8,8,0,0,0,13.66,5.66l72-72a8,8,0,0,0,0-11.32Z"}))],["light",x.createElement(x.Fragment,null,x.createElement("path",{d:"M188.24,123.76a6,6,0,0,1,0,8.48l-72,72a6,6,0,0,1-8.48-8.48L169.51,134H32a6,6,0,0,1,0-12H169.51L107.76,60.24a6,6,0,0,1,8.48-8.48ZM216,34a6,6,0,0,0-6,6V216a6,6,0,0,0,12,0V40A6,6,0,0,0,216,34Z"}))],["regular",x.createElement(x.Fragment,null,x.createElement("path",{d:"M189.66,122.34a8,8,0,0,1,0,11.32l-72,72a8,8,0,0,1-11.32-11.32L164.69,136H32a8,8,0,0,1,0-16H164.69L106.34,61.66a8,8,0,0,1,11.32-11.32ZM216,32a8,8,0,0,0-8,8V216a8,8,0,0,0,16,0V40A8,8,0,0,0,216,32Z"}))],["thin",x.createElement(x.Fragment,null,x.createElement("path",{d:"M186.83,125.17a4,4,0,0,1,0,5.66l-72,72a4,4,0,0,1-5.66-5.66L174.34,132H32a4,4,0,0,1,0-8H174.34L109.17,58.83a4,4,0,0,1,5.66-5.66ZM216,36a4,4,0,0,0-4,4V216a4,4,0,0,0,8,0V40A4,4,0,0,0,216,36Z"}))]]),b=x.forwardRef((t,e)=>x.createElement(h.default,{ref:e,...t,weights:j}));b.displayName="ArrowLineRightIcon";var v=t.i(858508),A=t.i(776115);let y={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Pagination,{total:10,withEdges:!0,nextIcon:v.ArrowRightIcon,previousIcon:d.ArrowLeftIcon,firstIcon:P,lastIcon:b,dotsIcon:A.DotsSixIcon}),(0,n.jsx)(a.Pagination.Root,{total:10,children:(0,n.jsxs)(g.Group,{gap:7,mt:"xl",children:[(0,n.jsx)(a.Pagination.First,{icon:P}),(0,n.jsx)(a.Pagination.Previous,{icon:d.ArrowLeftIcon}),(0,n.jsx)(a.Pagination.Items,{dotsIcon:A.DotsSixIcon}),(0,n.jsx)(a.Pagination.Next,{icon:v.ArrowRightIcon}),(0,n.jsx)(a.Pagination.Last,{icon:b})]})})]})},code:`
import { Group, Pagination } from '@mantine/core';
import { ArrowLineRightIcon, ArrowLineLeftIcon, ArrowLeftIcon, ArrowRightIcon, DotsSixIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <>
      {/* Regular pagination */}
      <Pagination
        total={10}
        withEdges
        nextIcon={ArrowRightIcon}
        previousIcon={ArrowLeftIcon}
        firstIcon={ArrowLineLeftIcon}
        lastIcon={ArrowLineRightIcon}
        dotsIcon={DotsSixIcon}
      />

      {/* Compound pagination */}
      <Pagination.Root total={10}>
        <Group gap={7} mt="xl">
          <Pagination.First icon={ArrowLineLeftIcon} />
          <Pagination.Previous icon={ArrowLeftIcon} />
          <Pagination.Items dotsIcon={DotsSixIcon} />
          <Pagination.Next icon={ArrowRightIcon} />
          <Pagination.Last icon={ArrowLineRightIcon} />
        </Group>
      </Pagination.Root>
    </>
  );
}
`},V={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Pagination,{total:10,withEdges:!0,getItemProps:t=>({component:"a",href:`#page-${t}`}),getControlProps:t=>"first"===t?{component:"a",href:"#page-0"}:"last"===t?{component:"a",href:"#page-10"}:"next"===t?{component:"a",href:"#page-2"}:"previous"===t?{component:"a",href:"#page-1"}:{}}),(0,n.jsx)(a.Pagination.Root,{total:10,getItemProps:t=>({component:"a",href:`#page-${t}`}),children:(0,n.jsxs)(g.Group,{gap:7,mt:"xl",children:[(0,n.jsx)(a.Pagination.First,{component:"a",href:"#page-0"}),(0,n.jsx)(a.Pagination.Previous,{component:"a",href:"#page-1"}),(0,n.jsx)(a.Pagination.Items,{}),(0,n.jsx)(a.Pagination.Next,{component:"a",href:"#page-2"}),(0,n.jsx)(a.Pagination.Last,{component:"a",href:"#page-10"})]})})]})},code:`
import { Group, Pagination } from '@mantine/core';

function Demo() {
  return (
    <>
      {/* Regular pagination */}
      <Pagination
        total={10}
        withEdges
        getItemProps={(page) => ({
          component: 'a',
          href: \`#page-\${page}\`,
        })}
        getControlProps={(control) => {
          if (control === 'first') {
            return { component: 'a', href: '#page-0' };
          }

          if (control === 'last') {
            return { component: 'a', href: '#page-10' };
          }

          if (control === 'next') {
            return { component: 'a', href: '#page-2' };
          }

          if (control === 'previous') {
            return { component: 'a', href: '#page-1' };
          }

          return {};
        }}
      />

      {/* Compound pagination */}
      <Pagination.Root
        total={10}
        getItemProps={(page) => ({
          component: 'a',
          href: \`#page-\${page}\`,
        })}
      >
        <Group gap={7} mt="xl">
          <Pagination.First component="a" href="#page-0" />
          <Pagination.Previous component="a" href="#page-1" />
          <Pagination.Items />
          <Pagination.Next component="a" href="#page-2" />
          <Pagination.Last component="a" href="#page-10" />
        </Group>
      </Pagination.Root>
    </>
  );
}

`};var Z=t.i(57807);let L=`
import { useState } from 'react';
import { randomId } from '@mantine/hooks';
import { Pagination, Text } from '@mantine/core';

function chunk<T>(array: T[], size: number): T[][] {
  if (!array.length) {
    return [];
  }
  const head = array.slice(0, size);
  const tail = array.slice(size);
  return [head, ...chunk(tail, size)];
}

const data = chunk(
  Array(30)
    .fill(0)
    .map((_, index) => ({ id: index, name: randomId() })),
  5
);

function Demo() {
  const [activePage, setPage] = useState(1);
  const items = data[activePage - 1].map((item) => (
    <Text key={item.id}>
      id: {item.id}, name: {item.name}
    </Text>
  ));

  return (
    <>
      {items}
      <Pagination total={data.length} value={activePage} onChange={setPage} mt="sm" />
    </>
  );
}
`,M=function t(e,a){return e.length?[e.slice(0,a),...t(e.slice(a),a)]:[]}(Array(30).fill(0).map((t,e)=>({id:e,name:(0,Z.randomId)()})),5),C={type:"code",component:function(){let[t,e]=(0,x.useState)(1);return(0,n.jsxs)(n.Fragment,{children:[M[t-1].map(t=>(0,n.jsxs)(i.Text,{children:["id: ",t.id,", name: ",t.name]},t.id)),(0,n.jsx)(a.Pagination,{total:M.length,value:t,onChange:e,mt:"sm"})]})},code:L,centered:!0},I={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Text,{children:"autoContrast: off"}),(0,n.jsx)(a.Pagination,{total:10,color:"lime.4"}),(0,n.jsx)(i.Text,{mt:"md",children:"autoContrast: on"}),(0,n.jsx)(a.Pagination,{total:10,autoContrast:!0,color:"lime.4"})]})},code:`
import { Pagination, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text>autoContrast: off</Text>
      <Pagination total={10} color="lime.4" />

      <Text mt="md">autoContrast: on</Text>
      <Pagination total={10} autoContrast color="lime.4" />
    </>
  );
}`,centered:!0},w=Math.ceil(14.5),T={type:"code",component:function(){let[t,e]=(0,x.useState)(1);return(0,n.jsxs)(g.Group,{justify:"flex-end",children:[(0,n.jsx)(i.Text,{size:"sm",children:`Showing ${10*(t-1)+1} – ${Math.min(145,10*t)} of 145`}),(0,n.jsx)(a.Pagination,{total:w,value:t,onChange:e,withPages:!1})]})},code:`
import { useState } from 'react';
import { Group, Pagination, Text } from '@mantine/core';

const limit = 10;
const total = 145;
const totalPages = Math.ceil(total / limit);

function Demo() {
  const [page, setPage] = useState(1);
  const message = \`Showing \${limit * (page - 1) + 1} – \${Math.min(total, limit * page)} of \${total}\`;

  return (
    <Group justify="flex-end">
      <Text size="sm">{message}</Text>
      <Pagination total={totalPages} value={page} onChange={setPage} withPages={false} />
    </Group>
  );
}
`};var E=t.i(485108),z=t.i(841209);let F={type:"code",component:function(){return(0,n.jsxs)("div",{children:[(0,n.jsxs)(g.Group,{children:[(0,n.jsx)(a.Pagination,{total:45,size:"sm"}),(0,n.jsx)(E.Button,{size:"sm",children:"sm button"}),(0,n.jsx)(z.TextInput,{size:"sm",placeholder:"sm input"})]}),(0,n.jsxs)(g.Group,{mt:"md",children:[(0,n.jsx)(a.Pagination,{total:45,size:"input-sm"}),(0,n.jsx)(E.Button,{size:"sm",children:"sm button"}),(0,n.jsx)(z.TextInput,{size:"sm",placeholder:"sm input"})]})]})},code:`
import { Button, Group, Pagination, TextInput } from '@mantine/core';

function Demo() {
  return (
    <div>
      <Group>
        <Pagination total={45} size="sm" />
        <Button size="sm">sm button</Button>
        <TextInput size="sm" placeholder="sm input" />
      </Group>

      <Group mt="md">
        <Pagination total={45} size="input-sm" />
        <Button size="sm">sm button</Button>
        <TextInput size="sm" placeholder="sm input" />
      </Group>
    </div>
  );
}
`},R={type:"code",code:`
import { Text, Pagination } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text mb="xs">Pages 5–15 (startValue=5, total=15)</Text>
      <Pagination total={15} startValue={5} defaultValue={5} />
    </>
  );
}
`,component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Text,{mb:"xs",children:"Pages 5–15 (startValue=5, total=15)"}),(0,n.jsx)(a.Pagination,{total:15,startValue:5,defaultValue:5})]})}};var H=t.i(232471);let S={type:"code",component:function(){return(0,n.jsx)(H.Box,{style:{resize:"horizontal",overflow:"auto",minWidth:200,maxWidth:"100%"},children:(0,n.jsx)(a.Pagination,{total:20,layout:"responsive"})})},code:`
import { Box, Pagination } from '@mantine/core';

function Demo() {
  return (
    <Box style={{ resize: 'horizontal', overflow: 'auto', minWidth: 200, maxWidth: '100%' }}>
      <Pagination total={20} layout="responsive" />
    </Box>
  );
}
`};var D=(0,e.__exportAll)({autoContrast:()=>I,boundaries:()=>l,composition:()=>p,configurator:()=>o,icons:()=>y,links:()=>V,responsive:()=>S,siblings:()=>r,size:()=>F,startValue:()=>R,stylesApi:()=>u,usage:()=>s,withContent:()=>C,withPages:()=>T});t.s(["PaginationDemos",0,D],806205)}]);