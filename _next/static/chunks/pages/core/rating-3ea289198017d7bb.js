(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[72127],{88221:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/rating",function(){return n(79604)}])},79604:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>U});var o=n(31085),a=n(71184),r=n(14041),l=n(97567),i=n(82307),s=n(68193),c=n(34321),d=n(33450),u=n(7098),y=n(51606),p=n(29686),m=n(69564),h=n(34056),g=n(6754),f=n(46746);let[v,x]=(0,n(59852).F)("Rating was not found in tree");function j(e){let{width:t,height:n,style:a,...r}=e;return(0,o.jsx)("svg",{viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:t,height:n,...a},...r,children:(0,o.jsx)("path",{d:"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"})})}function M({type:e}){let t=x();return(0,o.jsx)(j,{...t.getStyles("starSymbol"),"data-filled":"full"===e||void 0})}function S({getSymbolLabel:e,emptyIcon:t,fullIcon:n,full:a,active:r,value:l,readOnly:i,fractionValue:s,color:c,id:d,onBlur:u,onChange:y,onInputChange:p,style:m,...g}){let v=x(),j="function"==typeof n?n(l):n,S="function"==typeof t?t(l):t,{dir:b}=(0,f.jH)();return(0,o.jsxs)(o.Fragment,{children:[!i&&(0,o.jsx)("input",{...v.getStyles("input"),onKeyDown:e=>" "===e.key&&y(l),id:d,type:"radio","data-active":r||void 0,"aria-label":e?.(l),value:l,onBlur:u,onChange:p,...g}),(0,o.jsx)(h.a,{component:i?"div":"label",...v.getStyles("label"),"data-read-only":i||void 0,htmlFor:d,onClick:()=>y(l),__vars:{"--rating-item-z-index":(1===s?void 0:r?2:0)?.toString()},children:(0,o.jsx)(h.a,{...v.getStyles("symbolBody"),__vars:{"--rating-symbol-clip-path":1===s?void 0:"ltr"===b?`inset(0 ${r?100-100*s:100}% 0 0)`:`inset(0 0 0 ${r?100-100*s:100}% )`},children:a?j||(0,o.jsx)(M,{type:"full"}):S||(0,o.jsx)(M,{type:"empty"})})})]})}j.displayName="@mantine/core/StarIcon",M.displayName="@mantine/core/StarSymbol",S.displayName="@mantine/core/RatingItem";var b={root:"m_f8d312f2",symbolGroup:"m_61734bb7",starSymbol:"m_5662a89a",input:"m_211007ba",label:"m_21342ee4",symbolBody:"m_fae05d6a"};function I(e,t){let n=Math.round(e/t)*t,o=`${t}`.split(".")[1]?.length||0;return Number(n.toFixed(o))}let k={size:"sm",getSymbolLabel:e=>`${e}`,count:5,fractions:1,color:"yellow"},w=(0,u.V)((e,{size:t,color:n})=>({root:{"--rating-size":(0,d.YC)(t,"rating-size"),"--rating-color":(0,y.r)(n,e)}})),R=(0,g.P9)((e,t)=>{let n=(0,p.Y)("Rating",k,e),{classNames:a,className:d,style:u,styles:y,unstyled:g,vars:x,name:j,id:M,value:R,defaultValue:_,onChange:V,fractions:C,count:z,onMouseEnter:F,readOnly:E,onMouseMove:N,onHover:$,onMouseLeave:A,onTouchStart:H,onTouchEnd:D,size:G,variant:B,getSymbolLabel:O,color:X,emptySymbol:Y,fullSymbol:L,highlightSelectedOnly:P,...T}=n,Z=(0,m.I)({name:"Rating",classes:b,props:n,className:d,style:u,classNames:a,styles:y,unstyled:g,vars:x,varsResolver:w}),{dir:q}=(0,f.jH)(),K=(0,l.B)(j),U=(0,l.B)(M),J=(0,r.useRef)(null),[Q,W]=(0,i.Z)({value:R,defaultValue:_,finalValue:0,onChange:V}),[ee,et]=(0,r.useState)(-1),[en,eo]=(0,r.useState)(!0),ea=Math.floor(C),er=Math.floor(z),el=1/ea,ei=I(Q,el),es=-1!==ee?ee:ei,ec=e=>{let{left:t,right:n,width:o}=J.current.getBoundingClientRect(),a=o/er;return(0,s.q)(I(("rtl"===q?n-e:e-t)/a+el/2,el),el,er)},ed=()=>en&&et(-1),eu=e=>{E||("number"==typeof e?et(e):et(parseFloat(e.target.value)))},ey=e=>{E||("number"==typeof e?W(e):W(parseFloat(e.target.value)))},ep=Array(er).fill(0).map((e,t)=>{let n=t+1,a=Array.from(Array(0===t?ea+1:ea)),r=!E&&Math.ceil(ee)===n;return(0,o.jsx)("div",{"data-active":r||void 0,...Z("symbolGroup"),children:a.map((e,a)=>{let r=el*(0===t?a:a+1),l=I(n-1+r,el);return(0,o.jsx)(S,{getSymbolLabel:O,emptyIcon:Y,fullIcon:L,full:P?l===es:l<=es,active:l===es,checked:l===ei,readOnly:E,fractionValue:r,value:l,name:K,onChange:ey,onBlur:ed,onInputChange:eu,id:`${U}-${t}-${a}`},`${n}-${l}`)})},n)});return(0,o.jsx)(v,{value:{getStyles:Z},children:(0,o.jsx)(h.a,{ref:(0,c.pc)(J,t),...Z("root"),onMouseMove:e=>{if(N?.(e),E)return;let t=ec(e.clientX);et(t),t!==ee&&$?.(t)},onMouseEnter:e=>{F?.(e),E||eo(!1)},onMouseLeave:e=>{A?.(e),E||(et(-1),eo(!0),-1!==ee&&$?.(-1))},onTouchStart:e=>{let{touches:t}=e;1===t.length&&(E||W(ec(t[0].clientX)),H?.(e))},onTouchEnd:e=>{e.preventDefault(),D?.(e)},variant:B,size:G,id:U,...T,children:ep})})});R.classes=b,R.displayName="@mantine/core/Rating";let _={type:"configurator",component:function(e){return(0,o.jsx)(R,{defaultValue:2,...e})},code:`
import { Rating } from '@mantine/core';

function Demo() {
  return <Rating defaultValue={2}{{props}} />
}
`,centered:!0,controls:[{prop:"color",type:"color",initialValue:"yellow",libraryValue:"yellow"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"count",type:"number",initialValue:5,libraryValue:5,min:1,max:8},{prop:"highlightSelectedOnly",type:"boolean",initialValue:!1,libraryValue:!1}]},V={type:"code",component:function(){return(0,o.jsx)(R,{value:3.5,fractions:2,readOnly:!0})},code:`
import { Rating } from '@mantine/core';

function Demo() {
  return <Rating value={3.5} fractions={2} readOnly />;
}
`,centered:!0};var C=n(75390),z=n(56051);let F={type:"code",component:function(){return(0,o.jsxs)(C.B,{children:[(0,o.jsxs)(z.Y,{children:[(0,o.jsx)("div",{children:"Fractions: 2"}),(0,o.jsx)(R,{fractions:2,defaultValue:1.5})]}),(0,o.jsxs)(z.Y,{children:[(0,o.jsx)("div",{children:"Fractions: 3"}),(0,o.jsx)(R,{fractions:3,defaultValue:2.33333333})]}),(0,o.jsxs)(z.Y,{children:[(0,o.jsx)("div",{children:"Fractions: 4"}),(0,o.jsx)(R,{fractions:4,defaultValue:3.75})]})]})},code:`
import { Rating, Group, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Group>
        <div>Fractions: 2</div>
        <Rating fractions={2} defaultValue={1.5} />
      </Group>
      <Group>
        <div>Fractions: 3</div>
        <Rating fractions={3} defaultValue={2.33333333} />
      </Group>
      <Group>
        <div>Fractions: 4</div>
        <Rating fractions={4} defaultValue={3.75} />
      </Group>
    </Stack>
  );
}
`};var E=n(84032),N=n(18905);let $={type:"code",component:function(){return(0,o.jsx)(R,{emptySymbol:(0,o.jsx)(E.A,{size:16}),fullSymbol:(0,o.jsx)(N.A,{size:16})})},code:`
import { Rating } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

function Demo() {
  return <Rating emptySymbol={<IconSun size={16} />} fullSymbol={<IconMoon size={16} />} />;
}
`,centered:!0};var A=n(73366),H=(0,A.A)("outline","mood-cry","IconMoodCry",[["path",{d:"M9 10l.01 0",key:"svg-0"}],["path",{d:"M15 10l.01 0",key:"svg-1"}],["path",{d:"M9.5 15.25a3.5 3.5 0 0 1 5 0",key:"svg-2"}],["path",{d:"M17.566 17.606a2 2 0 1 0 2.897 .03l-1.463 -1.636l-1.434 1.606z",key:"svg-3"}],["path",{d:"M20.865 13.517a8.937 8.937 0 0 0 .135 -1.517a9 9 0 1 0 -9 9c.69 0 1.36 -.076 2 -.222",key:"svg-4"}]]),D=(0,A.A)("outline","mood-sad","IconMoodSad",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 10l.01 0",key:"svg-1"}],["path",{d:"M15 10l.01 0",key:"svg-2"}],["path",{d:"M9.5 15.25a3.5 3.5 0 0 1 5 0",key:"svg-3"}]]),G=(0,A.A)("outline","mood-smile","IconMoodSmile",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 10l.01 0",key:"svg-1"}],["path",{d:"M15 10l.01 0",key:"svg-2"}],["path",{d:"M9.5 15a3.5 3.5 0 0 0 5 0",key:"svg-3"}]]),B=(0,A.A)("outline","mood-happy","IconMoodHappy",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 9l.01 0",key:"svg-1"}],["path",{d:"M15 9l.01 0",key:"svg-2"}],["path",{d:"M8 13a4 4 0 1 0 8 0h-8",key:"svg-3"}]]),O=(0,A.A)("outline","mood-crazy-happy","IconMoodCrazyHappy",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M7 8.5l3 3",key:"svg-1"}],["path",{d:"M7 11.5l3 -3",key:"svg-2"}],["path",{d:"M14 8.5l3 3",key:"svg-3"}],["path",{d:"M14 11.5l3 -3",key:"svg-4"}],["path",{d:"M9.5 15a3.5 3.5 0 0 0 5 0",key:"svg-5"}]]);let X=e=>({width:24,height:24,color:e?`var(--mantine-color-${e}-7)`:void 0}),Y=e=>{let t=X();switch(e){case 1:return(0,o.jsx)(H,{style:t});case 2:return(0,o.jsx)(D,{style:t});case 3:return(0,o.jsx)(G,{style:t});case 4:return(0,o.jsx)(B,{style:t});case 5:return(0,o.jsx)(O,{style:t});default:return null}},L=e=>{switch(e){case 1:return(0,o.jsx)(H,{style:X("red")});case 2:return(0,o.jsx)(D,{style:X("orange")});case 3:return(0,o.jsx)(G,{style:X("yellow")});case 4:return(0,o.jsx)(B,{style:X("lime")});case 5:return(0,o.jsx)(O,{style:X("green")});default:return null}},P={type:"code",code:`
import { Rating } from '@mantine/core';
import {
  IconMoodCry,
  IconMoodSad,
  IconMoodSmile,
  IconMoodHappy,
  IconMoodCrazyHappy,
} from '@tabler/icons-react';

const getIconStyle = (color?: string) => ({
  width: 24,
  height: 24,
  color: color ? \`var(--mantine-color-\${color}-7)\` : undefined,
});

const getEmptyIcon = (value: number) => {
  const iconStyle = getIconStyle();

  switch (value) {
    case 1:
      return <IconMoodCry style={iconStyle} />;
    case 2:
      return <IconMoodSad style={iconStyle} />;
    case 3:
      return <IconMoodSmile style={iconStyle} />;
    case 4:
      return <IconMoodHappy style={iconStyle} />;
    case 5:
      return <IconMoodCrazyHappy style={iconStyle} />;
    default:
      return null;
  }
};

const getFullIcon = (value: number) => {
  switch (value) {
    case 1:
      return <IconMoodCry style={getIconStyle('red')} />;
    case 2:
      return <IconMoodSad style={getIconStyle('orange')} />;
    case 3:
      return <IconMoodSmile style={getIconStyle('yellow')} />;
    case 4:
      return <IconMoodHappy style={getIconStyle('lime')} />;
    case 5:
      return <IconMoodCrazyHappy style={getIconStyle('green')} />;
    default:
      return null;
  }
};

function Demo() {
  return <Rating emptySymbol={getEmptyIcon} fullSymbol={getFullIcon} highlightSelectedOnly />;
}
`,component:function(){return(0,o.jsx)(R,{emptySymbol:Y,fullSymbol:L,highlightSelectedOnly:!0})},centered:!0};var T=n(85954),Z=n(38215);let q=(0,T.P)(Z.XZ.Rating);function K(e){let t={code:"code",h2:"h2",pre:"pre",...(0,a.R)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n,{data:_}),"\n",(0,o.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Rating } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState(0);\n  return <Rating value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"read-only",children:"Read only"}),"\n",(0,o.jsx)(n,{data:V}),"\n",(0,o.jsx)(t.h2,{id:"fractions",children:"Fractions"}),"\n",(0,o.jsx)(n,{data:F}),"\n",(0,o.jsx)(t.h2,{id:"custom-symbol",children:"Custom symbol"}),"\n",(0,o.jsx)(n,{data:$}),"\n",(0,o.jsx)(t.h2,{id:"symbols-for-each-item",children:"Symbols for each item"}),"\n",(0,o.jsx)(n,{data:P})]})}function U(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(q,{...e,children:(0,o.jsx)(K,{...e})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,39699,68831,90636,46593,38792],()=>t(88221)),_N_E=e.O()}]);