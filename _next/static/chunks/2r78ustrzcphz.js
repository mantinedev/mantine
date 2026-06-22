(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,a)=>{let n={};for(var r in e)t(n,r,{get:e[r],enumerable:!0});return a||t(n,Symbol.toStringTag,{value:"Module"}),n}])},462138,e=>{"use strict";var t=e.i(779177),a=e.i(391398);function n({style:e,size:r=16,...i}){return(0,a.jsx)("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...e,width:(0,t.rem)(r),height:(0,t.rem)(r),display:"block"},...i,children:(0,a.jsx)("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}n.displayName="@mantine/core/AccordionChevron",e.s(["AccordionChevron",0,n])},257177,e=>{"use strict";var t=e.i(433512),a=e.i(481178),n=e.i(317477),r=e.i(44091),i=e.i(391466),o=e.i(956449),s=e.i(232471),d={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"},c=e.i(391398);let l=(0,a.createVarsResolver)((e,{radius:a,color:r,gradient:i,variant:o,size:s,autoContrast:d,circle:c})=>{let l=e.variantColorResolver({color:r||e.primaryColor,theme:e,gradient:i,variant:o||"filled",autoContrast:d});return{root:{"--badge-height":(0,t.getSize)(s,"badge-height"),"--badge-padding-x":(0,t.getSize)(s,"badge-padding-x"),"--badge-fz":(0,t.getSize)(s,"badge-fz"),"--badge-radius":c||void 0===a?void 0:(0,t.getRadius)(a),"--badge-bg":r||o?l.background:void 0,"--badge-color":r||o?l.color:void 0,"--badge-bd":r||o?l.border:void 0,"--badge-dot-color":"dot"===o?(0,n.getThemeColor)(r,e):void 0}}}),m=(0,o.polymorphicFactory)(e=>{let t=(0,r.useProps)("Badge",null,e),{classNames:a,className:n,style:o,styles:m,unstyled:h,vars:p,radius:u,color:g,gradient:x,leftSection:v,rightSection:f,children:w,variant:j,fullWidth:C,autoContrast:b,circle:y,mod:M,attributes:Z,...H}=t,V=(0,i.useStyles)({name:"Badge",props:t,classes:d,className:n,style:o,classNames:a,styles:m,unstyled:h,attributes:Z,vars:p,varsResolver:l});return(0,c.jsxs)(s.Box,{variant:j,mod:[{block:C,circle:y,"with-right-section":!!f,"with-left-section":!!v},M],...V("root",{variant:j}),...H,children:[v&&(0,c.jsx)("span",{...V("section"),"data-position":"left",children:v}),(0,c.jsx)("span",{...V("label"),children:w}),f&&(0,c.jsx)("span",{...V("section"),"data-position":"right",children:f})]})});m.classes=d,m.varsResolver=l,m.displayName="@mantine/core/Badge",e.s(["Badge",0,m],257177)},420759,e=>{"use strict";var t=e.i(779177),a=e.i(391398);e.s(["RadioIcon",0,function({size:e,style:n,...r}){return(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 5 5",style:{width:(0,t.rem)(e),height:(0,t.rem)(e),...n},"aria-hidden":!0,...r,children:(0,a.jsx)("circle",{cx:"2.5",cy:"2.5",r:"2.5",fill:"currentColor"})})}])},823439,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,48H180V36A28,28,0,0,0,152,8H104A28,28,0,0,0,76,36V48H40a12,12,0,0,0,0,24h4V208a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V72h4a12,12,0,0,0,0-24ZM100,36a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4V48H100Zm88,168H68V72H188ZM116,104v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Zm48,0v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z",opacity:"0.2"}),t.createElement("path",{d:"M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,50H174V40a22,22,0,0,0-22-22H104A22,22,0,0,0,82,40V50H40a6,6,0,0,0,0,12H50V208a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V62h10a6,6,0,0,0,0-12ZM94,40a10,10,0,0,1,10-10h48a10,10,0,0,1,10,10V50H94ZM194,208a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V62H194ZM110,104v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Zm48,0v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,52H172V40a20,20,0,0,0-20-20H104A20,20,0,0,0,84,40V52H40a4,4,0,0,0,0,8H52V208a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V60h12a4,4,0,0,0,0-8ZM92,40a12,12,0,0,1,12-12h48a12,12,0,0,1,12,12V52H92ZM196,208a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V60H196ZM108,104v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Zm48,0v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(a.default,{ref:r,...e,weights:n}));r.displayName="TrashIcon",e.s(["TrashIcon",0,r],823439)},724288,e=>{"use strict";var t=e.i(433512),a=e.i(481178),n=e.i(44091),r=e.i(391466),i=e.i(956449),o=e.i(232471),s={root:"m_9e117634"},d=e.i(191788),c=e.i(391398);let l=(0,a.createVarsResolver)((e,{radius:a,fit:n})=>({root:{"--image-radius":void 0===a?void 0:(0,t.getRadius)(a),"--image-object-fit":n}})),m=(0,i.polymorphicFactory)(e=>{let t=(0,n.useProps)("Image",null,e),{classNames:a,className:i,style:m,styles:h,unstyled:p,vars:u,onError:g,src:x,radius:v,fit:f,fallbackSrc:w,mod:j,attributes:C,...b}=t,[y,M]=(0,d.useState)(!x);(0,d.useEffect)(()=>M(!x),[x]);let Z=(0,r.useStyles)({name:"Image",classes:s,props:t,className:i,style:m,classNames:a,styles:h,unstyled:p,attributes:C,vars:u,varsResolver:l});return y&&w?(0,c.jsx)(o.Box,{component:"img",src:w,...Z("root"),onError:g,mod:["fallback",j],...b}):(0,c.jsx)(o.Box,{component:"img",...Z("root"),src:x,onError:e=>{g?.(e),M(!0)},mod:j,...b})});m.classes=s,m.varsResolver=l,m.displayName="@mantine/core/Image",e.s(["Image",0,m],724288)},604955,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M251,123.13c-.37-.81-9.13-20.26-28.48-39.61C196.63,57.67,164,44,128,44S59.37,57.67,33.51,83.52C14.16,102.87,5.4,122.32,5,123.13a12.08,12.08,0,0,0,0,9.75c.37.82,9.13,20.26,28.49,39.61C59.37,198.34,92,212,128,212s68.63-13.66,94.48-39.51c19.36-19.35,28.12-38.79,28.49-39.61A12.08,12.08,0,0,0,251,123.13Zm-46.06,33C183.47,177.27,157.59,188,128,188s-55.47-10.73-76.91-31.88A130.36,130.36,0,0,1,29.52,128,130.45,130.45,0,0,1,51.09,99.89C72.54,78.73,98.41,68,128,68s55.46,10.73,76.91,31.89A130.36,130.36,0,0,1,226.48,128,130.45,130.45,0,0,1,204.91,156.12ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,148Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),t.createElement("path",{d:"M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M245.48,125.57c-.34-.78-8.66-19.23-27.24-37.81C201,70.54,171.38,50,128,50S55,70.54,37.76,87.76c-18.58,18.58-26.9,37-27.24,37.81a6,6,0,0,0,0,4.88c.34.77,8.66,19.22,27.24,37.8C55,185.47,84.62,206,128,206s73-20.53,90.24-37.75c18.58-18.58,26.9-37,27.24-37.8A6,6,0,0,0,245.48,125.57ZM128,194c-31.38,0-58.78-11.42-81.45-33.93A134.77,134.77,0,0,1,22.69,128,134.56,134.56,0,0,1,46.55,95.94C69.22,73.42,96.62,62,128,62s58.78,11.42,81.45,33.94A134.56,134.56,0,0,1,233.31,128C226.94,140.21,195,194,128,194Zm0-112a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M243.66,126.38c-.34-.76-8.52-18.89-26.83-37.2C199.87,72.22,170.7,52,128,52S56.13,72.22,39.17,89.18c-18.31,18.31-26.49,36.44-26.83,37.2a4.08,4.08,0,0,0,0,3.25c.34.77,8.52,18.89,26.83,37.2,17,17,46.14,37.17,88.83,37.17s71.87-20.21,88.83-37.17c18.31-18.31,26.49-36.43,26.83-37.2A4.08,4.08,0,0,0,243.66,126.38Zm-32.7,35c-23.07,23-51,34.62-83,34.62s-59.89-11.65-83-34.62A135.71,135.71,0,0,1,20.44,128,135.69,135.69,0,0,1,45,94.62C68.11,71.65,96,60,128,60s59.89,11.65,83,34.62A135.79,135.79,0,0,1,235.56,128,135.71,135.71,0,0,1,211,161.38ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(a.default,{ref:r,...e,weights:n}));r.displayName="EyeIcon",e.s(["EyeIcon",0,r],604955)},848719,e=>{"use strict";var t=e.i(779177),a=e.i(481178),n=e.i(44091),r=e.i(391466),i=e.i(275519),o=e.i(232471),s=e.i(317477),d=e.i(951254),c=e.i(431868),l=e.i(391398);function m({size:e,value:t,offset:a,sum:n,thickness:r,root:i,color:h,lineRoundCaps:p,tooltip:u,getStyles:g,display:x,...v}){let f=(0,d.useMantineTheme)();return(0,l.jsx)(c.Tooltip.Floating,{disabled:!u,label:u,children:(0,l.jsx)(o.Box,{component:"circle",...v,...g("curve"),__vars:{"--curve-color":h?(0,s.getThemeColor)(h,f):void 0},fill:"none",strokeLinecap:p?"round":"butt",...function({size:e,thickness:t,sum:a,value:n,root:r,offset:i}){let o=(.9*e-2*t)/2,s=Math.PI*o*2/100,d=r||void 0===n?`${(100-a)*s}, ${a*s}`:`${n*s}, ${(100-n)*s}`;return{strokeWidth:Number.isNaN(t)?12:t,cx:e/2||0,cy:e/2||0,r:o||0,transform:r?`scale(1, -1) translate(0, -${e})`:void 0,strokeDasharray:d,strokeDashoffset:r?0:i||0}}({sum:n,size:e,thickness:r,value:t,offset:a,root:i})})})}m.displayName="@mantine/core/Curve";var h={root:"m_b32e4812",svg:"m_d43b5134",curve:"m_b1ca1fbf",label:"m_b23f9dc4"},p=e.i(191788);let u={size:120,thickness:12,startAngle:270},g=(0,a.createVarsResolver)((e,{size:a,thickness:n,transitionDuration:r,startAngle:i})=>({root:{"--rp-size":(0,t.rem)(a),"--rp-label-offset":(0,t.rem)(2*n),"--rp-transition-duration":r?`${r}ms`:void 0},svg:{"--rp-start-angle":`${i}deg`}})),x=(0,i.factory)(e=>{let t=(0,n.useProps)("RingProgress",u,e),{classNames:a,className:i,style:s,styles:d,unstyled:c,vars:x,label:v,sections:f,size:w,thickness:j,roundCaps:C,rootColor:b,transitionDuration:y,sectionGap:M,startAngle:Z,attributes:H,...V}=t,A=(0,r.useStyles)({name:"RingProgress",classes:h,props:t,className:i,style:s,classNames:a,styles:d,unstyled:c,attributes:H,vars:x,varsResolver:g}),T=Math.min(j||12,(w||120)/4),S=(function({size:e,thickness:t,sections:a,renderRoundedLineCaps:n,rootColor:r,sectionGap:i=0}){let o=a.reduce((e,t)=>e+t.value,0),s=(.9*e-2*t)/2*Math.PI*2,d=s,c=[],l=[],m=i/360*100;for(let e=0;e<a.length;e+=1){let t=Math.max(0,a[e].value-m);c.push({sum:o,offset:d,data:{...a[e],value:t},root:!1}),d-=a[e].value/100*s}if(c.push({sum:o,offset:d,data:{color:r},root:!0}),l.push({...c[c.length-1],lineRoundCaps:!1}),c.length>2){l.push({...c[0],lineRoundCaps:n}),l.push({...c[c.length-2],lineRoundCaps:n});for(let e=1;e<=c.length-3;e+=1)l.push({...c[e],lineRoundCaps:!1})}else l.push({...c[0],lineRoundCaps:n});return l})({size:w,thickness:T,sections:f,renderRoundedLineCaps:C,rootColor:b,sectionGap:M}).map(({data:e,sum:t,root:a,lineRoundCaps:n,offset:r},i)=>(0,p.createElement)(m,{...e,key:i,size:w,thickness:T,sum:t,offset:r,color:e?.color,root:a,lineRoundCaps:n,getStyles:A}));return(0,l.jsxs)(o.Box,{...A("root"),size:w,...V,children:[(0,l.jsx)("svg",{...A("svg"),viewBox:`0 0 ${w} ${w}`,children:S}),v&&(0,l.jsx)("div",{...A("label"),children:v})]})});x.classes=h,x.varsResolver=g,x.displayName="@mantine/core/RingProgress",e.s(["RingProgress",0,x],848719)},209996,e=>{"use strict";var t=e.i(648863),a=e.i(257177),n=e.i(485108),r=e.i(382422),i=e.i(725695),o=e.i(724288),s=e.i(883364),d=e.i(391398);let c={type:"code",code:`
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Card shadow="sm" padding="lg" withBorder>
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Norway Fjord Adventures</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button color="blue" fullWidth mt="md">
        Book classic tour now
      </Button>
    </Card>
  );
}

`,component:function(){return(0,d.jsxs)(r.Card,{shadow:"sm",padding:"lg",withBorder:!0,children:[(0,d.jsx)(r.Card.Section,{children:(0,d.jsx)(o.Image,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",height:160,alt:"Norway"})}),(0,d.jsxs)(i.Group,{justify:"space-between",mt:"md",mb:"xs",children:[(0,d.jsx)(s.Text,{fw:500,children:"Norway Fjord Adventures"}),(0,d.jsx)(a.Badge,{color:"pink",children:"On Sale"})]}),(0,d.jsx)(s.Text,{size:"sm",c:"dimmed",children:"With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway"}),(0,d.jsx)(n.Button,{color:"blue",fullWidth:!0,mt:"md",children:"Book classic tour now"})]})},centered:!0,maxWidth:340,dimmed:!0},l={type:"code",code:`
import { Card, Image, Text } from '@mantine/core';

function Demo() {
  return (
    <Card
      shadow="sm"
      padding="xl"
      component="a"
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      target="_blank"
    >
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
          h={160}
          alt="No way!"
        />
      </Card.Section>

      <Text fw={500} size="lg" mt="md">
        You&apos;ve won a million dollars in cash!
      </Text>

      <Text mt="xs" c="dimmed" size="sm">
        Please click anywhere on this card to claim your reward, this is not a fraud, trust us
      </Text>
    </Card>
  );
}
`,component:function(){return(0,d.jsxs)(r.Card,{shadow:"sm",padding:"lg",component:"a",href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",target:"_blank",children:[(0,d.jsx)(r.Card.Section,{children:(0,d.jsx)(o.Image,{src:"https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",h:160,alt:"No way!"})}),(0,d.jsx)(s.Text,{fw:500,size:"lg",mt:"md",children:"You've won a million dollars in cash!"}),(0,d.jsx)(s.Text,{mt:"xs",c:"dimmed",size:"sm",children:"Please click anywhere on this card to claim your reward, this is not a fraud, trust us"})]})},centered:!0,maxWidth:340,dimmed:!0},m={type:"code",code:`
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Card shadow="sm" padding="lg" withBorder>
      <Card.Section component="a" href="https://mantine.dev/">
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Norway Fjord Adventures</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button color="blue" fullWidth mt="md">
        Book classic tour now
      </Button>
    </Card>
  );
}
`,component:function(){return(0,d.jsxs)(r.Card,{shadow:"sm",padding:"lg",withBorder:!0,children:[(0,d.jsx)(r.Card.Section,{component:"a",href:"https://mantine.dev/",children:(0,d.jsx)(o.Image,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",height:160,alt:"Norway"})}),(0,d.jsxs)(i.Group,{justify:"space-between",mt:"md",mb:"xs",children:[(0,d.jsx)(s.Text,{fw:500,children:"Norway Fjord Adventures"}),(0,d.jsx)(a.Badge,{color:"pink",children:"On Sale"})]}),(0,d.jsx)(s.Text,{size:"sm",c:"dimmed",children:"With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway"}),(0,d.jsx)(n.Button,{color:"blue",fullWidth:!0,mt:"md",children:"Book classic tour now"})]})},centered:!0,maxWidth:340,dimmed:!0};var h=e.i(89495),p=e.i(604955),u=e.i(191788),g=e.i(171481);let x=new Map([["bold",u.createElement(u.Fragment,null,u.createElement("path",{d:"M188,140H172a12,12,0,0,0-12,12v56a12,12,0,0,0,24,0v-4h4a32,32,0,0,0,0-64Zm0,40h-4V164h4a8,8,0,0,1,0,16Zm-48-28v56a12,12,0,0,1-24,0V152a12,12,0,0,1,24,0ZM96,208a12,12,0,0,1-12,12H52a12,12,0,0,1-10.42-17.95L63.32,164H52a12,12,0,0,1,0-24H84A12,12,0,0,1,94.42,158L72.68,196H84A12,12,0,0,1,96,208ZM216.49,79.52l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40v68a12,12,0,0,0,24,0V44h76V92a12,12,0,0,0,12,12h48v4a12,12,0,0,0,24,0V88A12,12,0,0,0,216.49,79.52ZM160,80V57l23,23Z"}))],["duotone",u.createElement(u.Fragment,null,u.createElement("path",{d:"M208,88H152V32Z",opacity:"0.2"}),u.createElement("path",{d:"M184,144H168a8,8,0,0,0-8,8v56a8,8,0,0,0,16,0v-8h8a28,28,0,0,0,0-56Zm0,40h-8V160h8a12,12,0,0,1,0,24Zm-48-32v56a8,8,0,0,1-16,0V152a8,8,0,0,1,16,0ZM96,208a8,8,0,0,1-8,8H56a8,8,0,0,1-7-12l25.16-44H56a8,8,0,0,1,0-16H88a8,8,0,0,1,7,12L69.79,200H88A8,8,0,0,1,96,208ZM213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v72a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48v16a8,8,0,0,0,16,0V88A8,8,0,0,0,213.66,82.34ZM160,80V51.31L188.69,80Z"}))],["fill",u.createElement(u.Fragment,null,u.createElement("path",{d:"M184,144H168a8,8,0,0,0-8,8v55.73a8.17,8.17,0,0,0,7.47,8.25,8,8,0,0,0,8.53-8v-8h7.4c15.24,0,28.14-11.92,28.59-27.15A28,28,0,0,0,184,144Zm-.35,40H176V160h8A12,12,0,0,1,196,173.16,12.25,12.25,0,0,1,183.65,184ZM136,152v55.73a8.17,8.17,0,0,1-7.47,8.25,8,8,0,0,1-8.53-8V152.27a8.17,8.17,0,0,1,7.47-8.25A8,8,0,0,1,136,152ZM96,208.53A8.17,8.17,0,0,1,87.73,216H56.23a8.27,8.27,0,0,1-6-2.5A8,8,0,0,1,49.05,204l25.16-44H56.27A8.17,8.17,0,0,1,48,152.53,8,8,0,0,1,56,144H87.77a8.27,8.27,0,0,1,6,2.5A8,8,0,0,1,95,156L69.79,200H88A8,8,0,0,1,96,208.53ZM213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v76a4,4,0,0,0,4,4H212a4,4,0,0,0,4-4V88A8,8,0,0,0,213.66,82.34ZM152,88V44l44,44Z"}))],["light",u.createElement(u.Fragment,null,u.createElement("path",{d:"M184,146H168a6,6,0,0,0-6,6v56a6,6,0,0,0,12,0V198h10a26,26,0,0,0,0-52Zm0,40H174V158h10a14,14,0,0,1,0,28Zm-50-34v56a6,6,0,0,1-12,0V152a6,6,0,0,1,12,0ZM94,208a6,6,0,0,1-6,6H56a6,6,0,0,1-5.21-9l26.87-47H56a6,6,0,0,1,0-12H88a6,6,0,0,1,5.21,9L66.34,202H88A6,6,0,0,1,94,208ZM212.24,83.76l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40v72a6,6,0,0,0,12,0V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50v18a6,6,0,0,0,12,0V88A6,6,0,0,0,212.24,83.76ZM158,82V46.48L193.52,82Z"}))],["regular",u.createElement(u.Fragment,null,u.createElement("path",{d:"M184,144H168a8,8,0,0,0-8,8v56a8,8,0,0,0,16,0v-8h8a28,28,0,0,0,0-56Zm0,40h-8V160h8a12,12,0,0,1,0,24Zm-48-32v56a8,8,0,0,1-16,0V152a8,8,0,0,1,16,0ZM96,208a8,8,0,0,1-8,8H56a8,8,0,0,1-7-12l25.16-44H56a8,8,0,0,1,0-16H88a8,8,0,0,1,7,12L69.79,200H88A8,8,0,0,1,96,208ZM213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v72a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48v16a8,8,0,0,0,16,0V88A8,8,0,0,0,213.66,82.34ZM160,80V51.31L188.69,80Z"}))],["thin",u.createElement(u.Fragment,null,u.createElement("path",{d:"M184,148H168a4,4,0,0,0-4,4v56a4,4,0,0,0,8,0V196h12a24,24,0,0,0,0-48Zm0,40H172V156h12a16,16,0,0,1,0,32Zm-52-36v56a4,4,0,0,1-8,0V152a4,4,0,0,1,8,0Zm-40.53,2L62.89,204H88a4,4,0,0,1,0,8H56a4,4,0,0,1-3.47-6l28.58-50H56a4,4,0,0,1,0-8H88a4,4,0,0,1,3.47,6ZM210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40v72a4,4,0,0,0,8,0V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52v20a4,4,0,0,0,8,0V88A4,4,0,0,0,210.83,85.17ZM156,84V41.65L198.34,84Z"}))]]),v=u.forwardRef((e,t)=>u.createElement(g.default,{ref:t,...e,weights:x}));v.displayName="FileZipIcon";var f=e.i(823439),w=e.i(658109),j=e.i(610287),C=e.i(140763);let b=["https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png"],y={type:"code",component:function(){return(0,d.jsxs)(r.Card,{withBorder:!0,shadow:"sm",children:[(0,d.jsx)(r.Card.Section,{withBorder:!0,inheritPadding:!0,py:"xs",children:(0,d.jsxs)(i.Group,{justify:"space-between",children:[(0,d.jsx)(s.Text,{fw:500,children:"Review pictures"}),(0,d.jsxs)(j.Menu,{withinPortal:!0,position:"bottom-end",shadow:"sm",children:[(0,d.jsx)(j.Menu.Target,{children:(0,d.jsx)(w.ActionIcon,{variant:"subtle",color:"gray",children:(0,d.jsx)(h.DotsThreeIcon,{size:16})})}),(0,d.jsxs)(j.Menu.Dropdown,{children:[(0,d.jsx)(j.Menu.Item,{leftSection:(0,d.jsx)(v,{size:14}),children:"Download zip"}),(0,d.jsx)(j.Menu.Item,{leftSection:(0,d.jsx)(p.EyeIcon,{size:14}),children:"Preview all"}),(0,d.jsx)(j.Menu.Item,{leftSection:(0,d.jsx)(f.TrashIcon,{size:14}),color:"red",children:"Delete all"})]})]})]})}),(0,d.jsxs)(s.Text,{mt:"sm",c:"dimmed",size:"sm",children:[(0,d.jsx)(s.Text,{span:!0,inherit:!0,c:"var(--mantine-color-anchor)",children:"200+ images uploaded"})," ","since last visit, review them to select which one should be added to your gallery"]}),(0,d.jsx)(r.Card.Section,{mt:"sm",children:(0,d.jsx)(o.Image,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png"})}),(0,d.jsx)(r.Card.Section,{inheritPadding:!0,mt:"sm",pb:"md",children:(0,d.jsx)(C.SimpleGrid,{cols:3,children:b.map(e=>(0,d.jsx)(o.Image,{src:e,radius:"sm"},e))})})]})},code:`
import { ActionIcon, Card, Group, Image, Menu, SimpleGrid, Text } from '@mantine/core';
import { DotsThreeIcon, EyeIcon, FileZipIcon, TrashIcon } from '@phosphor-icons/react';

const images = [
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
];

function Demo() {
  return (
    <Card withBorder shadow="sm">
      <Card.Section withBorder inheritPadding py="xs">
        <Group justify="space-between">
          <Text fw={500}>Review pictures</Text>
          <Menu withinPortal position="bottom-end" shadow="sm">
            <Menu.Target>
              <ActionIcon variant="subtle" color="gray">
                <DotsThreeIcon size={16} />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item leftSection={<FileZipIcon size={14} />}>
                Download zip
              </Menu.Item>
              <Menu.Item leftSection={<EyeIcon size={14} />}>
                Preview all
              </Menu.Item>
              <Menu.Item
                leftSection={<TrashIcon size={14} />}
                color="red"
              >
                Delete all
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Card.Section>

      <Text mt="sm" c="dimmed" size="sm">
        <Text span inherit c="var(--mantine-color-anchor)">
          200+ images uploaded
        </Text>{' '}
        since last visit, review them to select which one should be added to your gallery
      </Text>

      <Card.Section mt="sm">
        <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png" />
      </Card.Section>

      <Card.Section inheritPadding mt="sm" pb="md">
        <SimpleGrid cols={3}>
          {images.map((image) => (
            <Image src={image} key={image} radius="sm" />
          ))}
        </SimpleGrid>
      </Card.Section>
    </Card>
  );
}
`,centered:!0,maxWidth:340,dimmed:!0};var M=e.i(232471),Z=e.i(848719);let H=[{value:447,label:"Remaining"},{value:76,label:"In progress"}],V={type:"code",code:`
import { Box, Card, Group, RingProgress, Text } from '@mantine/core';

const completed = 1887;
const total = 2334;
const stats = [
  { value: 447, label: 'Remaining' },
  { value: 76, label: 'In progress' },
];

function Demo() {
  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text>{stat.value}</Text>
      <Text size="xs" c="dimmed">
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Card padding="sm" withBorder orientation="horizontal">
      <Card.Section inheritPadding px="xs" withBorder>
        <RingProgress
          roundCaps
          thickness={6}
          size={150}
          sections={[{ value: (completed / total) * 100, color: 'blue' }]}
          label={
            <div>
              <Text ta="center" fz="lg">
                {((completed / total) * 100).toFixed(0)}%
              </Text>
              <Text ta="center" fz="xs" c="dimmed">
                Completed
              </Text>
            </div>
          }
        />
      </Card.Section>

      <Card.Section inheritPadding px="md">
        <Text fz="xl">Project tasks</Text>
        <Box mt="xs">
          <Text>1887</Text>
          <Text fz="xs" c="dimmed">
            Completed
          </Text>
        </Box>

        <Group mt="sm">{items}</Group>
      </Card.Section>
    </Card>
  );
}
`,component:function(){let e=H.map(e=>(0,d.jsxs)("div",{children:[(0,d.jsx)(s.Text,{children:e.value}),(0,d.jsx)(s.Text,{size:"xs",c:"dimmed",children:e.label})]},e.label));return(0,d.jsxs)(r.Card,{padding:"sm",withBorder:!0,orientation:"horizontal",children:[(0,d.jsx)(r.Card.Section,{inheritPadding:!0,px:"xs",withBorder:!0,children:(0,d.jsx)(Z.RingProgress,{roundCaps:!0,thickness:6,size:150,sections:[{value:1887/2334*100,color:"blue"}],label:(0,d.jsxs)("div",{children:[(0,d.jsxs)(s.Text,{ta:"center",fz:"lg",children:[(1887/2334*100).toFixed(0),"%"]}),(0,d.jsx)(s.Text,{ta:"center",fz:"xs",c:"dimmed",children:"Completed"})]})})}),(0,d.jsxs)(r.Card.Section,{inheritPadding:!0,px:"md",children:[(0,d.jsx)(s.Text,{fz:"xl",children:"Project tasks"}),(0,d.jsxs)(M.Box,{mt:"xs",children:[(0,d.jsx)(s.Text,{children:"1887"}),(0,d.jsx)(s.Text,{fz:"xs",c:"dimmed",children:"Completed"})]}),(0,d.jsx)(i.Group,{mt:"sm",children:e})]})]})},maxWidth:400,centered:!0,dimmed:!0};var A=(0,t.__exportAll)({horizontal:()=>V,link:()=>l,linkSection:()=>m,section:()=>y,usage:()=>c});e.s(["CardDemos",0,A],209996)},466324,e=>{"use strict";var t=e.i(391398),a=e.i(38856),n=e.i(209996);e.i(603441);var r=e.i(62558);e.i(457450);var i=e.i(418026);let o=(0,r.Layout)(i.MDX_DATA.Card);function s(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.useMDXComponents)(),...e.components},{Demo:i}=r;return i||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Card"})," is a wrapper around the ",(0,t.jsx)(r.a,{href:"/core/paper/",children:"Paper"})," component with some additional styles and a ",(0,t.jsx)(r.code,{children:"Card.Section"}),"\ncomponent that allows you to split the card into sections. If you do not need sections, you can use the ",(0,t.jsx)(r.a,{href:"/core/paper/",children:"Paper"})," component instead."]}),"\n",(0,t.jsx)(i,{data:n.CardDemos.usage}),"\n",(0,t.jsx)(r.h2,{id:"horizontal-orientation",children:"Horizontal orientation"}),"\n",(0,t.jsx)(i,{data:n.CardDemos.horizontal,demoProps:{defaultExpanded:!1}}),"\n",(0,t.jsx)(r.h2,{id:"polymorphic-component",children:"Polymorphic component"}),"\n",(0,t.jsxs)(r.p,{children:["Card is a ",(0,t.jsx)(r.a,{href:"/guides/polymorphic/",children:"polymorphic component"}),", you can change its root element:"]}),"\n",(0,t.jsx)(i,{data:n.CardDemos.link}),"\n",(0,t.jsx)(r.h2,{id:"cardsection",children:"Card.Section"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Card.Section"})," is a special component that is used to remove Card padding from its children while other elements still have horizontal spacing.\n",(0,t.jsx)(r.code,{children:"Card.Section"})," works in the following way:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"If the component is the first child in Card, then it has negative top, left and right margins"}),"\n",(0,t.jsx)(r.li,{children:"If it is the last child in Card, then it has negative bottom, left and right margins"}),"\n",(0,t.jsx)(r.li,{children:"If it is in the middle, then only the left and right margins will be negative"}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"import { Card, Text } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Card padding=\"xl\">\n      {/* top, right, left margins are negative – -1 * theme.spacing.xl */}\n      <Card.Section>First section</Card.Section>\n\n      {/* Content that is not inside Card.Section will have theme.spacing.xl spacing on all sides relative to Card */}\n      <Text>Some other content</Text>\n\n      {/* right, left margins are negative – -1 * theme.spacing.xl */}\n      <Card.Section>Middle section</Card.Section>\n\n      {/* bottom, right, left margins are negative – -1 * theme.spacing.xl */}\n      <Card.Section>Last section</Card.Section>\n    </Card>\n  );\n}\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Note that ",(0,t.jsx)(r.code,{children:"Card"})," relies on mapping direct children and you cannot use fragments or other wrappers for ",(0,t.jsx)(r.code,{children:"Card.Section"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"import { Card } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Card padding=\"xl\">\n      <div>\n        <Card.Section>Won't work</Card.Section>\n      </div>\n\n      <>\n        <Card.Section>Won't work either</Card.Section>\n      </>\n\n      <Card.Section>Works fine</Card.Section>\n    </Card>\n  );\n}\n"})}),"\n",(0,t.jsx)(r.h2,{id:"polymorphic-cardsection",children:"Polymorphic Card.Section"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Card.Section"})," is a ",(0,t.jsx)(r.a,{href:"/guides/polymorphic/",children:"polymorphic component"}),", you can change its root element:"]}),"\n",(0,t.jsx)(i,{data:n.CardDemos.linkSection}),"\n",(0,t.jsx)(r.h2,{id:"withborder-and-inheritpadding-props",children:"withBorder and inheritPadding props"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"withBorder"})," prop adds top and bottom borders to ",(0,t.jsx)(r.code,{children:"Card.Section"})," depending on its position relative to other content and sections"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"inheritPadding"})," prop adds the same left and right padding to ",(0,t.jsx)(r.code,{children:"Card.Section"})," as set in the ",(0,t.jsx)(r.code,{children:"Card"})," component"]}),"\n"]}),"\n",(0,t.jsx)(i,{data:n.CardDemos.section})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(o,{...e,children:(0,t.jsx)(s,{...e})})}])},460622,(e,t,a)=>{let n="/core/card";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(466324)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);