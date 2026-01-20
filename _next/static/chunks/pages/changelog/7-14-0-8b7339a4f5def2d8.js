(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11965],{1312:(e,n,t)=>{"use strict";t.d(n,{A:()=>i});var a=t(6029),r=t(72139),l=t(68992),o=t(49386);let i={type:"code",component:function(){return(0,a.jsxs)(r.B,{children:[(0,a.jsx)(l.A,{restrictToMarks:!0,defaultValue:25,marks:Array.from({length:5}).map((e,n)=>({value:25*n}))}),(0,a.jsx)(o.F,{restrictToMarks:!0,defaultValue:[5,15],marks:[{value:5},{value:15},{value:25},{value:35},{value:70},{value:80},{value:90}]})]})},code:`
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
`,centered:!0,maxWidth:400}},2651:(e,n,t)=>{"use strict";t.d(n,{v:()=>w});var a=t(6029),r=t(40684),l=t(57686),o=t(25696),i=t(78895),s=t(53259),c=t(31292),d=t(33987),u=t(21351),h=t(26082),m=t(8411),p=t(38919),v=t(49643),f=t(15583),x=t(38757),g=t(76320),k=t(42738),j={root:"m_80d531e7"};let b={withTooltip:!0,size:300,strokeWidth:1,withLabels:!1,labelsPosition:"right",tooltipDataSource:"all"},y=(0,d.V)((e,{strokeColor:n,labelColor:t,size:a})=>({root:{"--chart-stroke-color":n?(0,u.r)(n,e):void 0,"--chart-labels-color":t?(0,u.r)(t,e):void 0,"--chart-size":(0,h.D)(a)}})),w=(0,m.P9)((e,n)=>{let t=(0,p.Y)("FunnelChart",b,e),{classNames:d,className:h,style:m,styles:w,unstyled:C,vars:A,data:M,withTooltip:S,tooltipAnimationDuration:D,tooltipProps:E,strokeWidth:R,withLabels:T,size:N,valueFormatter:B,children:L,funnelChartProps:q,funnelProps:_,labelsPosition:z,tooltipDataSource:I,attributes:O,...F}=t,P=(0,v.xd)(),Y=(0,f.I)({name:"FunnelChart",classes:j,props:t,className:h,style:m,classNames:d,styles:w,unstyled:C,attributes:O,vars:A,varsResolver:y}),{resolvedClassNames:$,resolvedStyles:G}=(0,x.Y)({classNames:d,styles:w,props:t});return(0,a.jsx)(g.a,{ref:n,size:N,...Y("root"),...F,children:(0,a.jsx)(r.u,{children:(0,a.jsxs)(l.v,{...q,children:[(0,a.jsxs)(o.r,{data:M,dataKey:"value",isAnimationActive:!1,stroke:"var(--chart-stroke-color, var(--mantine-color-body))",strokeWidth:R,..._,children:[T&&(0,a.jsx)(i.Z,{position:z,fill:"inside"===z?"var(--chart-labels-color, var(--mantine-color-white))":"var(--chart-labels-color, var(--mantine-color-dimmed))",stroke:"none",fontFamily:"var(--mantine-font-family)",fontSize:14,dataKey:e=>"function"==typeof B?B(e.value):e.value}),M.map((e,n)=>(0,a.jsx)(s.f,{fill:(0,u.r)(e.color,P),stroke:"var(--chart-stroke-color, var(--mantine-color-body))",strokeWidth:R},n))]}),S&&(0,a.jsx)(c.m,{animationDuration:D,isAnimationActive:!1,content:({payload:e})=>(0,a.jsx)(k.I,{payload:M,classNames:$,styles:G,type:"radial",segmentId:"segment"===I?e?.[0]?.name:void 0,valueFormatter:B,attributes:O}),...E}),L]})})})});w.displayName="@mantine/charts/FunnelChart",w.classes=j},12884:(e,n,t)=>{"use strict";t.d(n,{C:()=>o});var a=t(6029),r=t(2651),l=t(73885);let o={type:"code",component:function(){return(0,a.jsx)(r.v,{data:l.p})},code:[{code:`
import { FunnelChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <FunnelChart data={data} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l.k,language:"tsx",fileName:"data.ts"}],centered:!0}},33415:(e,n,t)=>{"use strict";t.d(n,{t:()=>s});var a=t(6029),r=t(94110),l=t(48195),o=t(57414),i=t(61087);let s={type:"code",code:`
import { Button, Group, Modal, useModalsStack } from '@mantine/core';

function Demo() {
  const stack = useModalsStack(['delete-page', 'confirm-action', 'really-confirm-action']);

  return (
    <>
      <Modal.Stack>
        <Modal {...stack.register('delete-page')} title="Delete this page?">
          Are you sure you want to delete this page? This action cannot be undone.
          <Group mt="lg" justify="flex-end">
            <Button onClick={stack.closeAll} variant="default">
              Cancel
            </Button>
            <Button onClick={() => stack.open('confirm-action')} color="red">
              Delete
            </Button>
          </Group>
        </Modal>

        <Modal {...stack.register('confirm-action')} title="Confirm action">
          Are you sure you want to perform this action? This action cannot be undone. If you are
          sure, press confirm button below.
          <Group mt="lg" justify="flex-end">
            <Button onClick={stack.closeAll} variant="default">
              Cancel
            </Button>
            <Button onClick={() => stack.open('really-confirm-action')} color="red">
              Confirm
            </Button>
          </Group>
        </Modal>

        <Modal {...stack.register('really-confirm-action')} title="Really confirm action">
          Jokes aside. You have confirmed this action. This is your last chance to cancel it. After
          you press confirm button below, action will be performed and cannot be undone. For real
          this time. Are you sure you want to proceed?
          <Group mt="lg" justify="flex-end">
            <Button onClick={stack.closeAll} variant="default">
              Cancel
            </Button>
            <Button onClick={stack.closeAll} color="red">
              Confirm
            </Button>
          </Group>
        </Modal>
      </Modal.Stack>

      <Button variant="default" onClick={() => stack.open('delete-page')}>
        Open modal
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let e=(0,r.e)(["delete-page","confirm-action","really-confirm-action"]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(l.a.Stack,{children:[(0,a.jsxs)(l.a,{...e.register("delete-page"),title:"Delete this page?",children:["Are you sure you want to delete this page? This action cannot be undone.",(0,a.jsxs)(o.Y,{mt:"lg",justify:"flex-end",children:[(0,a.jsx)(i.$,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,a.jsx)(i.$,{onClick:()=>e.open("confirm-action"),color:"red",children:"Delete"})]})]}),(0,a.jsxs)(l.a,{...e.register("confirm-action"),title:"Confirm action",children:["Are you sure you want to perform this action? This action cannot be undone. If you are sure, press confirm button below.",(0,a.jsxs)(o.Y,{mt:"lg",justify:"flex-end",children:[(0,a.jsx)(i.$,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,a.jsx)(i.$,{onClick:()=>e.open("really-confirm-action"),color:"red",children:"Confirm"})]})]}),(0,a.jsxs)(l.a,{...e.register("really-confirm-action"),title:"Really confirm action",children:["Jokes aside. You have confirmed this action. This is your last chance to cancel it. After you press confirm button below, action will be performed and cannot be undone. For real this time. Are you sure you want to proceed?",(0,a.jsxs)(o.Y,{mt:"lg",justify:"flex-end",children:[(0,a.jsx)(i.$,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,a.jsx)(i.$,{onClick:e.closeAll,color:"red",children:"Confirm"})]})]})]}),(0,a.jsx)(i.$,{variant:"default",onClick:()=>e.open("delete-page"),children:"Open modal"})]})}}},38877:(e,n,t)=>{"use strict";t.d(n,{k:()=>r,p:()=>a});let a=[{name:"18-24",value:31.47,color:"blue.7"},{name:"25-29",value:26.69,color:"orange.6"},{name:"30-34",value:15.69,color:"yellow.7"},{name:"35-39",value:8.22,color:"cyan.6"},{name:"40-49",value:8.63,color:"green"},{name:"50+",value:2.63,color:"pink"},{name:"unknown",value:6.67,color:"gray"}],r=`
export const data = [
  { name: '18-24', value: 31.47, color: 'blue.7' },
  { name: '25-29', value: 26.69, color: 'orange.6' },
  { name: '30-34', value: 15.69, color: 'yellow.7' },
  { name: '35-39', value: 8.22, color: 'cyan.6' },
  { name: '40-49', value: 8.63, color: 'green' },
  { name: '50+', value: 2.63, color: 'pink' },
  { name: 'unknown', value: 6.67, color: 'gray' },
];
`},49386:(e,n,t)=>{"use strict";t.d(n,{F:()=>R});var a=t(6029),r=t(55729),l=t(7798),o=t(38744),i=t(24854),s=t(28136),c=t(26082),d=t(14163),u=t(78297),h=t(33987),m=t(21351),p=t(38919),v=t(15583),f=t(8411),x=t(90851),g=t(99341),k=t(97233),j=t(68884),b=t(97832),y=t(29056),w=t(13494),C=t(31861),A=t(42268),M=t(51662),S=t(73778);let D=(0,h.V)((e,{size:n,color:t,thumbSize:a,radius:r})=>({root:{"--slider-size":(0,d.YC)(n,"slider-size"),"--slider-color":t?(0,m.r)(t,e):void 0,"--slider-radius":void 0===r?void 0:(0,d.nJ)(r),"--slider-thumb-size":void 0!==a?(0,c.D)(a):"calc(var(--slider-size) * 2)"}})),E={min:0,max:100,minRange:10,step:1,marks:[],label:e=>e,labelTransitionProps:{transition:"fade",duration:0},labelAlwaysOn:!1,showLabelOnHover:!0,disabled:!1,pushOnOverlap:!0,scale:e=>e,size:"md",maxRange:1/0},R=(0,f.P9)((e,n)=>{let t=(0,p.Y)("RangeSlider",E,e),{classNames:c,styles:d,value:h,onChange:m,onChangeEnd:f,size:R,min:T,max:N,domain:B,minRange:L,maxRange:q,step:_,precision:z,defaultValue:I,name:O,marks:F,label:P,labelTransitionProps:Y,labelAlwaysOn:$,thumbFromLabel:G,thumbToLabel:V,showLabelOnHover:H,thumbChildren:K,disabled:U,unstyled:X,scale:Z,inverted:W,className:J,style:Q,vars:ee,hiddenInputProps:en,restrictToMarks:et,thumbProps:ea,pushOnOverlap:er,attributes:el,...eo}=t,ei=(0,v.I)({name:"RangeSlider",props:t,classes:k.A,classNames:c,className:J,styles:d,style:Q,attributes:el,vars:ee,varsResolver:D,unstyled:X}),es=(0,r.useRef)(null),{dir:ec}=(0,x.jH)(),[ed,eu]=(0,r.useState)(-1),[eh,em]=(0,r.useState)(!1),[ep,ev]=(0,l.Z)({value:h,defaultValue:I,finalValue:[T,N],onChange:m}),ef=(0,r.useRef)(ep),ex=(0,r.useRef)([]),eg=(0,r.useRef)(null),ek=(0,r.useRef)(void 0),[ej,eb]=B||[T,N],ey=[(0,A.E)({value:ep[0],min:ej,max:eb}),(0,A.E)({value:ep[1],min:ej,max:eb})],ew=z??(0,M.X)(_);(0,r.useEffect)(()=>{Array.isArray(h)&&(ef.current=h)},Array.isArray(h)?[h[0],h[1]]:[null,null]);let eC=(e,n,t)=>{if(-1===n)return;let a=[...ef.current];if(et&&F){let t=(0,u.k)(e,F.map(e=>e.value)),r=a[n];a[n]=t;let l=+(0===n),o=(0,S.rq)(F),i=(0,S.HE)(F);t===o&&a[l]===o||t===i&&a[l]===i?a[n]=r:t===a[l]&&(r>a[l]?a[l]=(0,S.Mh)(t,F):a[l]=(0,S.C8)(t,F))}else{let t=(0,o.q)(e,T,N);a[n]=t,0===n&&(t>a[1]-(L-1e-9)&&(er?a[1]=Math.min(e+L,N):a[n]=ef.current[n]),t>(N-(L-1e-9)||T)&&(a[n]=ef.current[n]),a[1]-e>q&&(er?a[1]=e+q:a[n]=ef.current[n])),1===n&&(t<a[0]+L&&(er?a[0]=Math.max(e-L,T):a[n]=ef.current[n]),t<a[0]+L&&(a[n]=ef.current[n]),t-a[0]>q&&(er?a[0]=e-q:a[n]=ef.current[n]))}if(a[0]=(0,C.q)(a[0],ew),a[1]=(0,C.q)(a[1],ew),a[0]>a[1]){let e=a[0];a[0]=a[1],a[1]=e}(e=>{ev(e),ef.current=e})(a),t&&f?.(ef.current)},{ref:eA,active:eM}=(0,i.f)(({x:e})=>{!U&&void 0!==ek.current&&eC((0,w.c)({value:e,min:ej,max:eb,step:_,precision:ew}),ek.current,!1)},{onScrubEnd:()=>!U&&f?.(ef.current)},ec),eS=e=>{if(es.current){es.current.focus();let n=es.current.getBoundingClientRect(),t=function(e){return"TouchEvent"in window&&e instanceof window.TouchEvent?e.touches[0].clientX:e.clientX}(e.nativeEvent),a=(0,w.c)({value:t-n.left,max:N,min:T,step:_,containerWidth:n.width}),r=+(Math.abs(ep[0]-a)>Math.abs(ep[1]-a));ek.current="ltr"===ec?r:+(1!==r)}},eD=()=>1!==ed&&0!==ed?(eu(0),0):ed,eE={max:N,min:T,size:R,labelTransitionProps:Y,labelAlwaysOn:$,onBlur:()=>eu(-1)},eR=Array.isArray(K);return(0,a.jsx)(g.h,{value:{getStyles:ei},children:(0,a.jsxs)(j.g,{...eo,size:R,ref:(0,s.pc)(n,eg),disabled:U,onMouseDownCapture:()=>eg.current?.focus(),onKeyDownCapture:()=>{ex.current[0]?.parentElement?.contains(document.activeElement)||ex.current[0]?.focus()},children:[(0,a.jsxs)(y.C,{offset:ey[0],marksOffset:ep[0],filled:ey[1]-ey[0],marks:F,inverted:W,min:ej,max:eb,value:ep[1],disabled:U,containerProps:{ref:(0,s.pc)(es,eA),onMouseEnter:H?()=>em(!0):void 0,onMouseLeave:H?()=>em(!1):void 0,onTouchStartCapture:eS,onTouchEndCapture:()=>{ek.current=-1},onMouseDownCapture:eS,onMouseUpCapture:()=>{ek.current=-1},onKeyDownCapture:e=>{if(!U)switch(e.key){case"ArrowUp":{e.preventDefault();let n=eD();ex.current[n].focus();let t=et&&F?(0,S.C8)(ef.current[n],F):Math.min(Math.max(ef.current[n]+_,T),N);eC((0,C.q)(t,ew),n,!0);break}case"ArrowRight":{e.preventDefault();let n=eD();ex.current[n].focus();let t=et&&F?("rtl"===ec?S.Mh:S.C8)(ef.current[n],F):Math.min(Math.max("rtl"===ec?ef.current[n]-_:ef.current[n]+_,T),N);eC((0,C.q)(t,ew),n,!0);break}case"ArrowDown":{e.preventDefault();let n=eD();ex.current[n].focus();let t=et&&F?(0,S.Mh)(ef.current[n],F):Math.min(Math.max(ef.current[n]-_,T),N);eC((0,C.q)(t,ew),n,!0);break}case"ArrowLeft":{e.preventDefault();let n=eD();ex.current[n].focus();let t=et&&F?("rtl"===ec?S.C8:S.Mh)(ef.current[n],F):Math.min(Math.max("rtl"===ec?ef.current[n]+_:ef.current[n]-_,T),N);eC((0,C.q)(t,ew),n,!0)}}}},children:[(0,a.jsx)(b.z,{...eE,value:Z(ep[0]),position:ey[0],dragging:eM,label:"function"==typeof P?P((0,C.q)(Z(ep[0]),ew)):P,ref:e=>{e&&(ex.current[0]=e)},thumbLabel:G,onMouseDown:()=>void(ek.current=0),onFocus:()=>eu(0),showLabelOnHover:H,isHovered:eh,disabled:U,...ea?.(0),children:eR?K[0]:K}),(0,a.jsx)(b.z,{...eE,thumbLabel:V,value:Z(ep[1]),position:ey[1],dragging:eM,label:"function"==typeof P?P((0,C.q)(Z(ep[1]),ew)):P,ref:e=>{e&&(ex.current[1]=e)},onMouseDown:()=>void(ek.current=1),onFocus:()=>eu(1),showLabelOnHover:H,isHovered:eh,disabled:U,...ea?.(1),children:eR?K[1]:K})]}),(0,a.jsx)("input",{type:"hidden",name:`${O}_from`,value:ep[0],...en}),(0,a.jsx)("input",{type:"hidden",name:`${O}_to`,value:ep[1],...en})]})})});R.classes=k.A,R.displayName="@mantine/core/RangeSlider"},51587:(e,n,t)=>{"use strict";t.d(n,{P:()=>g});var a=t(6029),r=t(55729),l=t(7798),o=t(56302),i=t(28136),s=t(26082),c=t(78297),d=t(33987),u=t(38919),h=t(15583),m=t(76320),p=t(8411),v={root:"m_48204f9b",marks:"m_bb9cdbad",mark:"m_481dd586",thumb:"m_bc02ba3d",label:"m_bb8e875b"};let f={step:1,withLabel:!0},x=(0,d.V)((e,{size:n,thumbSize:t})=>({root:{"--slider-size":(0,s.D)(n),"--thumb-size":(0,s.D)(t)}})),g=(0,p.P9)((e,n)=>{let t=(0,u.Y)("AngleSlider",f,e),{classNames:s,className:d,style:p,styles:g,unstyled:k,vars:j,step:b,value:y,defaultValue:w,onChange:C,onMouseDown:A,withLabel:M,marks:S,thumbSize:D,restrictToMarks:E,formatLabel:R,onChangeEnd:T,disabled:N,onTouchStart:B,name:L,hiddenInputProps:q,"aria-label":_,tabIndex:z,onScrubStart:I,onScrubEnd:O,mod:F,attributes:P,...Y}=t,$=(0,r.useRef)(null),[G,V]=(0,l.Z)({value:y,defaultValue:w,finalValue:0,onChange:C}),{ref:H}=(0,o.R)(e=>{$.current&&!N&&V(E&&Array.isArray(S)?(0,c.k)(e,S.map(e=>e.value)):e)},{step:b,onChangeEnd:T,onScrubStart:I,onScrubEnd:O}),K=(0,h.I)({name:"AngleSlider",classes:v,props:t,className:d,style:p,classNames:s,styles:g,unstyled:k,attributes:P,vars:j,varsResolver:x}),U=S?.map((e,n)=>(0,r.createElement)("div",{...K("mark",{style:{"--angle":`${e.value}deg`}}),"data-label":e.label||void 0,key:n}));return(0,a.jsxs)(m.a,{ref:(0,i.pc)(n,$,H),...K("root",{focusable:!0}),mod:[{disabled:N},F],...Y,children:[U&&U.length>0&&(0,a.jsx)("div",{...K("marks"),children:U}),M&&(0,a.jsx)("div",{...K("label"),children:"function"==typeof R?R(G):G}),(0,a.jsx)("div",{tabIndex:z??(N?-1:0),role:"slider","aria-valuemax":360,"aria-valuemin":0,"aria-valuenow":G,onKeyDown:e=>{if(N)return;let n=G;if(("ArrowLeft"===e.key||"ArrowDown"===e.key)&&(e.preventDefault(),n=(0,o.i)(G-b,b)),("ArrowRight"===e.key||"ArrowUp"===e.key)&&(e.preventDefault(),n=(0,o.i)(G+b,b)),"Home"===e.key&&(n=0),"End"===e.key&&(n=359),E&&Array.isArray(S)){let t=S.map(e=>e.value),a=t.indexOf(G);n=-1!==a?"ArrowLeft"===e.key||"ArrowDown"===e.key?t[Math.max(0,a-1)]:"ArrowRight"===e.key||"ArrowUp"===e.key?t[Math.min(t.length-1,a+1)]:(0,c.k)(n,t):(0,c.k)(n,t)}V(n),T?.(n)},"aria-label":_,...K("thumb",{style:{transform:`rotate(${G}deg)`}})}),(0,a.jsx)("input",{type:"hidden",name:L,value:G,...q})]})});g.displayName="@mantine/core/AngleSlider",g.classes=v},56302:(e,n,t)=>{"use strict";t.d(n,{R:()=>o,i:()=>l});var a=t(55729),r=t(38744);function l(e,n){var t,a;let l=(0,r.q)(e,0,360),o=Math.ceil(l/n),i=Math.round(l/n);return t=o>=l/n?o*n==360?0:o*n:i*n,a=n.toString().split(".")[1]?.length||0,parseFloat(t.toFixed(a))}function o(e,{step:n=.01,onChangeEnd:t,onScrubStart:r,onScrubEnd:i}={}){let s=(0,a.useRef)(!1),[c,d]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{s.current=!0},[]),{ref:(0,a.useCallback)(a=>{let o=(r,o=!1)=>{if(a){a.style.userSelect="none";let i=l(function(e,n){let t=function(e){let n=e.getBoundingClientRect();return[n.left+n.width/2,n.top+n.height/2]}(n);return 360-(180/Math.PI*Math.atan2(e[0]-t[0],e[1]-t[1])+180)}([r.clientX,r.clientY],a),n||1);e(i),o&&t?.(i)}},s=()=>{r?.(),d(!0),document.addEventListener("mousemove",h,!1),document.addEventListener("mouseup",m,!1),document.addEventListener("touchmove",p,{passive:!1}),document.addEventListener("touchend",v,!1)},c=()=>{i?.(),d(!1),document.removeEventListener("mousemove",h,!1),document.removeEventListener("mouseup",m,!1),document.removeEventListener("touchmove",p,!1),document.removeEventListener("touchend",v,!1)},u=e=>{s(),o(e)},h=e=>{o(e)},m=e=>{o(e,!0),c()},p=e=>{e.preventDefault(),o(e.touches[0])},v=e=>{o(e.changedTouches[0],!0),c()},f=e=>{e.preventDefault(),s(),o(e.touches[0])};return a?.addEventListener("mousedown",u),a?.addEventListener("touchstart",f,{passive:!1}),()=>{a&&(a.removeEventListener("mousedown",u),a.removeEventListener("touchstart",f))}},[e]),active:c}}},57096:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>v});var a=t(6029),r=t(16285),l=t(79593),o=t(86970),i=t(12884),s=t(33415),c=t(1312),d=t(99695),u=t(38547),h=t(5262);let m=(0,u.P)(h.XZ.Changelog7140);function p(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"angleslider-component",children:"AngleSlider component"}),"\n",(0,a.jsxs)(n.p,{children:["New ",(0,a.jsx)(n.a,{href:"/core/angle-slider/",children:"AngleSlider"})," component:"]}),"\n",(0,a.jsx)(t,{data:l.Z}),"\n",(0,a.jsx)(n.h2,{id:"radialbarchart-component",children:"RadialBarChart component"}),"\n",(0,a.jsxs)(n.p,{children:["New ",(0,a.jsx)(n.a,{href:"/charts/radial-bar-chart/",children:"RadialBarChart"})," component:"]}),"\n",(0,a.jsx)(t,{data:o.W}),"\n",(0,a.jsx)(n.h2,{id:"funnelchart-component",children:"FunnelChart component"}),"\n",(0,a.jsxs)(n.p,{children:["New ",(0,a.jsx)(n.a,{href:"/charts/funnel-chart/",children:"FunnelChart"})," component:"]}),"\n",(0,a.jsx)(t,{data:i.C}),"\n",(0,a.jsx)(n.h2,{id:"modalstack-and-drawerstack-components",children:"Modal.Stack and Drawer.Stack components"}),"\n",(0,a.jsxs)(n.p,{children:["New ",(0,a.jsx)(n.a,{href:"/core/modal/",children:"Modal.Stack"})," and ",(0,a.jsx)(n.a,{href:"/core/drawer",children:"Drawer.Stack"})," components simplify usage of multiple modals/drawers at the same time."]}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"Modal.Stack"})," component to render multiple modals at the same time.\n",(0,a.jsx)(n.code,{children:"Modal.Stack"})," keeps track of opened modals, manages z-index values, focus trapping\nand ",(0,a.jsx)(n.code,{children:"closeOnEscape"})," behavior. ",(0,a.jsx)(n.code,{children:"Modal.Stack"})," is designed to be used with ",(0,a.jsx)(n.code,{children:"useModalsStack"})," hook."]}),"\n",(0,a.jsxs)(n.p,{children:["Differences from using multiple ",(0,a.jsx)(n.code,{children:"Modal"})," components:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Modal.Stack"})," manages z-index values – modals that are opened later will always have higher z-index value disregarding their order in the DOM"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Modal.Stack"})," disables focus trap and ",(0,a.jsx)(n.code,{children:"Escape"})," key handling for all modals except the one that is currently opened"]}),"\n",(0,a.jsxs)(n.li,{children:["Modals that are not currently opened are present in the DOM but are hidden with ",(0,a.jsx)(n.code,{children:"opacity: 0"})," and ",(0,a.jsx)(n.code,{children:"pointer-events: none"})]}),"\n",(0,a.jsx)(n.li,{children:"Only one overlay is rendered at a time"}),"\n"]}),"\n",(0,a.jsx)(t,{data:s.t}),"\n",(0,a.jsx)(n.h2,{id:"usemodalsstackusedrawersstack-hooks",children:"useModalsStack/useDrawersStack hooks"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"useModalsStack"})," hook provides an easy way to control multiple modals at the same time.\nIt accepts an array of unique modals ids and returns an object with the following properties:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"interface ModalStackReturnType<T extends string> {\n  // Current opened state of each modal\n  state: Record<T, boolean>;\n\n  // Opens modal with the given id\n  open: (id: T) => void;\n\n  // Closes modal with the given id\n  close: (id: T) => void;\n\n  // Toggles modal with the given id\n  toggle: (id: T) => void;\n\n  // Closes all modals within the stack\n  closeAll: () => void;\n\n  // Returns props for modal with the given id\n  register: (id: T) => {\n    opened: boolean;\n    onClose: () => void;\n    stackId: T;\n  };\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Example of using ",(0,a.jsx)(n.code,{children:"useModalsStack"})," with ",(0,a.jsx)(n.code,{children:"Modal"})," component:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { Modal, useModalsStack } from '@mantine/core';\n\nfunction Demo() {\n  const stack = useModalsStack(['first', 'second']);\n\n  return (\n    <>\n      <Modal {...stack.register('first')}>First</Modal>\n      <Modal {...stack.register('second')}>Second</Modal>\n      <Button onClick={() => stack.open('first')}>Open first</Button>\n    </>\n  );\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"restrict-slider-selection-to-marks",children:"Restrict Slider selection to marks"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/core/slider",children:"Slider"})," component now supports ",(0,a.jsx)(n.code,{children:"restrictToMarks"})," prop that restricts slider value to marks only.\nNote that in this case ",(0,a.jsx)(n.code,{children:"step"})," prop is ignored:"]}),"\n",(0,a.jsx)(t,{data:c.A}),"\n",(0,a.jsx)(n.h2,{id:"barchart-svg-pattern-fill",children:"BarChart SVG pattern fill"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/charts/bar-chart",children:"BarChart"})," now can be used with SVG pattern fill:"]}),"\n",(0,a.jsx)(t,{data:d.R}),"\n",(0,a.jsx)(n.h2,{id:"help-center-updates",children:"Help center updates"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["New ",(0,a.jsx)(n.a,{href:"https://help.mantine.dev/q/nested-inline-styles",children:"Can I use nested inline styles with Mantine components?"})," question"]}),"\n",(0,a.jsxs)(n.li,{children:["New ",(0,a.jsx)(n.a,{href:"https://help.mantine.dev/q/postcss-fns-inline",children:"Can I use PostCSS function in inline styles?"})," question"]}),"\n",(0,a.jsxs)(n.li,{children:["New ",(0,a.jsx)(n.a,{href:"https://help.mantine.dev/q/carousel-missing-styles",children:"Why my Carousel slides are in vertical orientation?"})," question"]}),"\n",(0,a.jsxs)(n.li,{children:["New ",(0,a.jsx)(n.a,{href:"https://help.mantine.dev/q/transparent-buttons",children:"My buttons are transparent and the background is visible only on hover, what is wrong?"})," question"]}),"\n",(0,a.jsxs)(n.li,{children:["New ",(0,a.jsx)(n.a,{href:"https://help.mantine.dev/q/primary-virtual-color",children:"Can I have different primary color for light and dark color schemes?"})," question"]}),"\n",(0,a.jsxs)(n.li,{children:["New ",(0,a.jsx)(n.a,{href:"https://help.mantine.dev/q/body-background",children:"How can I change body background color?"})," question"]}),"\n",(0,a.jsxs)(n.li,{children:["New ",(0,a.jsx)(n.a,{href:"https://help.mantine.dev/q/nested-popover-closes",children:"My Popover dropdown closes when I click on the dropdown of nested Popover"})," question"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/core/tree/",children:"useTree"})," hook now accepts ",(0,a.jsx)(n.code,{children:"onNodeExpand"})," and ",(0,a.jsx)(n.code,{children:"onNodeCollapse"})," callbacks"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/core/tree/",children:"useTree"})," hook now returns additional ",(0,a.jsx)(n.code,{children:"checkAllNodes"}),", ",(0,a.jsx)(n.code,{children:"uncheckAllNodes"})," and ",(0,a.jsx)(n.code,{children:"setCheckedState"})," handlers"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/core/tree",children:"Tree"})," component now includes ",(0,a.jsx)(n.code,{children:"getTreeExpandedState"})," to generate expanded state based on the tree data"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/form/use-form",children:"use-form"})," now supports ",(0,a.jsx)(n.code,{children:"form.replaceListItem"})," handler to replace list item at given index"]}),"\n"]})]})}function v(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(m,{...e,children:(0,a.jsx)(p,{...e})})}},68765:(e,n,t)=>{"use strict";t.d(n,{D:()=>A});var a=t(6029),r=t(55729),l=t(40684),o=t(5742),i=t(44494),s=t(64370),c=t(31292),d=t(33987),u=t(21351),h=t(8411),m=t(38919),p=t(15583),v=t(49643),f=t(38757),x=t(76320),g=t(5086),k=t(57414),j=t(11508),b=t(48101),y={root:"m_cd2bd9e5",tooltip:"m_6bcc3420"};let w={barSize:20,startAngle:90,endAngle:-270,withBackground:!0,withTooltip:!0},C=(0,d.V)((e,{emptyBackgroundColor:n})=>({root:{"--chart-empty-background":n?(0,u.r)(n,e):void 0}})),A=(0,h.P9)((e,n)=>{let t=(0,m.Y)("RadialBarChart",w,e),{classNames:d,className:h,style:A,styles:M,unstyled:S,vars:D,data:E,barSize:R,withBackground:T,dataKey:N,radialBarProps:B,radialBarChartProps:L,withLabels:q,withLegend:_,legendProps:z,withTooltip:I,tooltipProps:O,startAngle:F,endAngle:P,attributes:Y,...$}=t,[G,V]=(0,r.useState)(null),H=(0,p.I)({name:"RadialBarChart",classes:y,props:t,className:h,style:A,classNames:d,styles:M,unstyled:S,attributes:Y,vars:D,varsResolver:C}),K=(0,v.xd)(),U=E.map(({color:e,...n})=>{let t=(0,u.r)(e,K);return{...n,fill:t,fillOpacity:G?G===n.name?n.opacity||1:.05:n.opacity||1}}),{resolvedClassNames:X,resolvedStyles:Z}=(0,f.Y)({classNames:d,styles:M,props:t});return(0,a.jsx)(x.a,{ref:n,...H("root"),...$,children:(0,a.jsx)(l.u,{children:(0,a.jsxs)(o.D,{margin:{top:0,bottom:0,left:0,right:0},innerRadius:"10%",outerRadius:"100%",cx:"50%",cy:"50%",barSize:R,startAngle:F,endAngle:P,data:U,...L,children:[(0,a.jsx)(i.Z,{label:q?{position:"insideStart",fill:"var(--mantine-color-white)",fontSize:12}:void 0,background:T?{fill:"var(--chart-empty-background)"}:void 0,dataKey:N,isAnimationActive:!1,...B}),_&&(0,a.jsx)(s.s,{verticalAlign:"bottom",content:e=>(0,a.jsx)(b._,{payload:e.payload?.map(e=>({...e,dataKey:e.payload?.name})),onHighlight:V,legendPosition:z?.verticalAlign||"bottom",classNames:X,styles:Z,centered:!0,attributes:Y}),...z}),I&&(0,a.jsx)(c.m,{animationDuration:0,isAnimationActive:!1,cursor:{stroke:"var(--chart-cursor-color)"},content:({payload:e})=>(0,a.jsxs)(g.t,{...H("tooltip"),children:[(0,a.jsxs)(k.Y,{gap:"sm",children:[(0,a.jsx)(j.q,{color:e?.[0]?.payload.fill,size:12,withShadow:!1}),(0,a.jsx)("span",{children:e?.[0]?.payload.name})]}),(0,a.jsx)("span",{children:e?.[0]?.payload[N]})]}),...O})]})})})});A.displayName="@mantine/core/RadialBarChart",A.classes=y},73885:(e,n,t)=>{"use strict";t.d(n,{k:()=>r,p:()=>a});let a=[{name:"USA",value:400,color:"indigo.6"},{name:"India",value:300,color:"yellow.6"},{name:"Japan",value:100,color:"teal.6"},{name:"Other",value:200,color:"gray.6"}],r=`
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
`},79593:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});var a=t(6029),r=t(57414),l=t(51587);let o={type:"code",component:function(){return(0,a.jsxs)(r.Y,{p:"lg",gap:50,children:[(0,a.jsx)(l.P,{"aria-label":"Angle slider",formatLabel:e=>`${e}\xb0`,size:100,restrictToMarks:!0,marks:[{value:0},{value:45},{value:90},{value:135},{value:180},{value:225},{value:270},{value:315}]}),(0,a.jsx)(l.P,{"aria-label":"Angle slider",formatLabel:e=>`${e}\xb0`,size:100,marks:[{value:0,label:"0\xb0"},{value:45,label:"45\xb0"},{value:90,label:"90\xb0"},{value:135,label:"135\xb0"},{value:180,label:"180\xb0"},{value:225,label:"225\xb0"},{value:270,label:"270\xb0"},{value:315,label:"315\xb0"}]})]})},code:`
import { AngleSlider, Group } from '@mantine/core';

function Demo() {
  return (
    <Group p="lg" gap={50}>
      <AngleSlider
        aria-label="Angle slider"
        formatLabel={(value) => \`\${value}\xb0\`}
        size={100}
        restrictToMarks
        marks={[
          { value: 0 },
          { value: 45 },
          { value: 90 },
          { value: 135 },
          { value: 180 },
          { value: 225 },
          { value: 270 },
          { value: 315 },
        ]}
      />

      <AngleSlider
        aria-label="Angle slider"
        formatLabel={(value) => \`\${value}\xb0\`}
        size={100}
        marks={[
          { value: 0, label: '0\xb0' },
          { value: 45, label: '45\xb0' },
          { value: 90, label: '90\xb0' },
          { value: 135, label: '135\xb0' },
          { value: 180, label: '180\xb0' },
          { value: 225, label: '225\xb0' },
          { value: 270, label: '270\xb0' },
          { value: 315, label: '315\xb0' },
        ]}
      />
    </Group>
  );
}
`,centered:!0}},86970:(e,n,t)=>{"use strict";t.d(n,{W:()=>o});var a=t(6029),r=t(68765),l=t(38877);let o={type:"code",component:function(){return(0,a.jsx)(r.D,{data:l.p,dataKey:"value",h:280,withLabels:!0})},code:[{fileName:"Demo.tsx",code:`
import { RadialBarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <RadialBarChart data={data} dataKey="value" h={280} withLabels />;
}
`,language:"tsx"},{fileName:"data.ts",code:l.k,language:"tsx"}]}},87611:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-14-0",function(){return t(57096)}])},94110:(e,n,t)=>{"use strict";t.d(n,{Q:()=>l,e:()=>r});var a=t(55729);function r(e){let n=e.reduce((e,n)=>({...e,[n]:!1}),{}),[t,r]=(0,a.useState)(n),l=(0,a.useCallback)(e=>{r(n=>({...n,[e]:!0}))},[]),o=(0,a.useCallback)(e=>r(n=>({...n,[e]:!1})),[]),i=(0,a.useCallback)(e=>r(n=>({...n,[e]:!n[e]})),[]),s=(0,a.useCallback)(()=>r(n),[]),c=(0,a.useCallback)(e=>({opened:t[e],onClose:()=>o(e),stackId:e}),[t]);return{state:t,open:l,close:o,closeAll:s,toggle:i,register:c}}let l=r}},e=>{e.O(0,[29040,60454,70330,57686,5742,38547,1490,51280,90636,46593,38792],()=>e(e.s=87611)),_N_E=e.O()}]);