(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[72127],{88221:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/rating",function(){return n(79604)}])},79604:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>U});var o=n(31085),a=n(71184),l=n(14041),r=n(97567),s=n(82307),i=n(68193),c=n(34321),d=n(33450),u=n(7098),y=n(51606),p=n(29686),h=n(69564),v=n(34056),g=n(6754),m=n(46746);let[f,M]=(0,n(59852).F)("Rating was not found in tree");function k(e){let{width:t,height:n,style:a,...l}=e;return(0,o.jsx)("svg",{viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:t,height:n,...a},...l,children:(0,o.jsx)("path",{d:"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"})})}function x({type:e}){let t=M();return(0,o.jsx)(k,{...t.getStyles("starSymbol"),"data-filled":"full"===e||void 0})}function j({getSymbolLabel:e,emptyIcon:t,fullIcon:n,full:a,active:l,value:r,readOnly:s,fractionValue:i,color:c,id:d,onBlur:u,onChange:y,onInputChange:p,style:h,...g}){let f=M(),k="function"==typeof n?n(r):n,j="function"==typeof t?t(r):t,{dir:S}=(0,m.jH)();return(0,o.jsxs)(o.Fragment,{children:[!s&&(0,o.jsx)("input",{...f.getStyles("input"),onKeyDown:e=>" "===e.key&&y(r),id:d,type:"radio","data-active":l||void 0,"aria-label":e?.(r),value:r,onBlur:u,onChange:p,...g}),(0,o.jsx)(v.a,{component:s?"div":"label",...f.getStyles("label"),"data-read-only":s||void 0,htmlFor:d,onClick:()=>y(r),__vars:{"--rating-item-z-index":(1===i?void 0:l?2:0)?.toString()},children:(0,o.jsx)(v.a,{...f.getStyles("symbolBody"),__vars:{"--rating-symbol-clip-path":1===i?void 0:"ltr"===S?`inset(0 ${l?100-100*i:100}% 0 0)`:`inset(0 0 0 ${l?100-100*i:100}% )`},children:a?k||(0,o.jsx)(x,{type:"full"}):j||(0,o.jsx)(x,{type:"empty"})})})]})}k.displayName="@mantine/core/StarIcon",x.displayName="@mantine/core/StarSymbol",j.displayName="@mantine/core/RatingItem";var S={root:"m_f8d312f2",symbolGroup:"m_61734bb7",starSymbol:"m_5662a89a",input:"m_211007ba",label:"m_21342ee4",symbolBody:"m_fae05d6a"};function I(e,t){let n=Math.round(e/t)*t,o=`${t}`.split(".")[1]?.length||0;return Number(n.toFixed(o))}let b={size:"sm",getSymbolLabel:e=>`${e}`,count:5,fractions:1,color:"yellow"},w=(0,u.V)((e,{size:t,color:n})=>({root:{"--rating-size":(0,d.YC)(t,"rating-size"),"--rating-color":(0,y.r)(n,e)}})),A=(0,g.P9)((e,t)=>{let n=(0,p.Y)("Rating",b,e),{classNames:a,className:d,style:u,styles:y,unstyled:g,vars:M,name:k,id:x,value:A,defaultValue:R,onChange:_,fractions:C,count:V,onMouseEnter:z,readOnly:F,onMouseMove:E,onHover:N,onMouseLeave:$,onTouchStart:H,onTouchEnd:D,size:G,variant:B,getSymbolLabel:O,color:L,emptySymbol:P,fullSymbol:T,highlightSelectedOnly:X,...Y}=n,Z=(0,h.I)({name:"Rating",classes:S,props:n,className:d,style:u,classNames:a,styles:y,unstyled:g,vars:M,varsResolver:w}),{dir:q}=(0,m.jH)(),K=(0,r.B)(k),U=(0,r.B)(x),J=(0,l.useRef)(null),[Q,W]=(0,s.Z)({value:A,defaultValue:R,finalValue:0,onChange:_}),[ee,et]=(0,l.useState)(-1),[en,eo]=(0,l.useState)(!0),ea=Math.floor(C),el=Math.floor(V),er=1/ea,es=I(Q,er),ei=-1!==ee?ee:es,ec=e=>{if(!J.current)return 0;let{left:t,right:n,width:o}=J.current.getBoundingClientRect(),a=o/el;return(0,i.q)(I(("rtl"===q?n-e:e-t)/a+er/2,er),er,el)},ed=()=>en&&et(-1),eu=e=>{F||("number"==typeof e?et(e):et(parseFloat(e.target.value)))},ey=e=>{F||("number"==typeof e?W(e):W(parseFloat(e.target.value)))},ep=Array(el).fill(0).map((e,t)=>{let n=t+1,a=Array.from(Array(0===t?ea+1:ea)),l=!F&&Math.ceil(ee)===n;return(0,o.jsx)("div",{"data-active":l||void 0,...Z("symbolGroup"),children:a.map((e,a)=>{let l=er*(0===t?a:a+1),r=I(n-1+l,er);return(0,o.jsx)(j,{getSymbolLabel:O,emptyIcon:P,fullIcon:T,full:X?r===ei:r<=ei,active:r===ei,checked:r===es,readOnly:F,fractionValue:l,value:r,name:K,onChange:ey,onBlur:ed,onInputChange:eu,id:`${U}-${t}-${a}`},`${n}-${r}`)})},n)});return(0,o.jsx)(f,{value:{getStyles:Z},children:(0,o.jsx)(v.a,{ref:(0,c.pc)(J,t),...Z("root"),onMouseMove:e=>{if(E?.(e),F)return;let t=ec(e.clientX);et(t),t!==ee&&N?.(t)},onMouseEnter:e=>{z?.(e),F||eo(!1)},onMouseLeave:e=>{$?.(e),F||(et(-1),eo(!0),-1!==ee&&N?.(-1))},onTouchStart:e=>{let{touches:t}=e;1===t.length&&(F||W(ec(t[0].clientX)),H?.(e))},onTouchEnd:e=>{e.preventDefault(),D?.(e)},variant:B,size:G,id:U,...Y,children:ep})})});A.classes=S,A.displayName="@mantine/core/Rating";let R={type:"configurator",component:function(e){return(0,o.jsx)(A,{defaultValue:2,...e})},code:`
import { Rating } from '@mantine/core';

function Demo() {
  return <Rating defaultValue={2}{{props}} />
}
`,centered:!0,controls:[{prop:"color",type:"color",initialValue:"yellow",libraryValue:"yellow"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"count",type:"number",initialValue:5,libraryValue:5,min:1,max:8},{prop:"highlightSelectedOnly",type:"boolean",initialValue:!1,libraryValue:!1}]},_={type:"code",component:function(){return(0,o.jsx)(A,{value:3.5,fractions:2,readOnly:!0})},code:`
import { Rating } from '@mantine/core';

function Demo() {
  return <Rating value={3.5} fractions={2} readOnly />;
}
`,centered:!0};var C=n(75390),V=n(56051);let z={type:"code",component:function(){return(0,o.jsxs)(C.B,{children:[(0,o.jsxs)(V.Y,{children:[(0,o.jsx)("div",{children:"Fractions: 2"}),(0,o.jsx)(A,{fractions:2,defaultValue:1.5})]}),(0,o.jsxs)(V.Y,{children:[(0,o.jsx)("div",{children:"Fractions: 3"}),(0,o.jsx)(A,{fractions:3,defaultValue:2.33333333})]}),(0,o.jsxs)(V.Y,{children:[(0,o.jsx)("div",{children:"Fractions: 4"}),(0,o.jsx)(A,{fractions:4,defaultValue:3.75})]})]})},code:`
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
`};var F=n(84032),E=n(18905);let N={type:"code",component:function(){return(0,o.jsx)(A,{emptySymbol:(0,o.jsx)(F.A,{size:16}),fullSymbol:(0,o.jsx)(E.A,{size:16})})},code:`
import { Rating } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

function Demo() {
  return <Rating emptySymbol={<IconSun size={16} />} fullSymbol={<IconMoon size={16} />} />;
}
`,centered:!0};var $=n(73366),H=(0,$.A)("outline","mood-cry","IconMoodCry",[["path",{d:"M9 10l.01 0",key:"svg-0"}],["path",{d:"M15 10l.01 0",key:"svg-1"}],["path",{d:"M9.5 15.25a3.5 3.5 0 0 1 5 0",key:"svg-2"}],["path",{d:"M17.566 17.606a2 2 0 1 0 2.897 .03l-1.463 -1.636l-1.434 1.606z",key:"svg-3"}],["path",{d:"M20.865 13.517a8.937 8.937 0 0 0 .135 -1.517a9 9 0 1 0 -9 9c.69 0 1.36 -.076 2 -.222",key:"svg-4"}]]),D=(0,$.A)("outline","mood-sad","IconMoodSad",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 10l.01 0",key:"svg-1"}],["path",{d:"M15 10l.01 0",key:"svg-2"}],["path",{d:"M9.5 15.25a3.5 3.5 0 0 1 5 0",key:"svg-3"}]]),G=(0,$.A)("outline","mood-smile","IconMoodSmile",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 10l.01 0",key:"svg-1"}],["path",{d:"M15 10l.01 0",key:"svg-2"}],["path",{d:"M9.5 15a3.5 3.5 0 0 0 5 0",key:"svg-3"}]]),B=(0,$.A)("outline","mood-happy","IconMoodHappy",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 9l.01 0",key:"svg-1"}],["path",{d:"M15 9l.01 0",key:"svg-2"}],["path",{d:"M8 13a4 4 0 1 0 8 0h-8",key:"svg-3"}]]),O=(0,$.A)("outline","mood-crazy-happy","IconMoodCrazyHappy",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M7 8.5l3 3",key:"svg-1"}],["path",{d:"M7 11.5l3 -3",key:"svg-2"}],["path",{d:"M14 8.5l3 3",key:"svg-3"}],["path",{d:"M14 11.5l3 -3",key:"svg-4"}],["path",{d:"M9.5 15a3.5 3.5 0 0 0 5 0",key:"svg-5"}]]);let L=e=>({width:24,height:24,color:e?`var(--mantine-color-${e}-7)`:void 0}),P=e=>{let t=L();switch(e){case 1:return(0,o.jsx)(H,{style:t});case 2:return(0,o.jsx)(D,{style:t});case 3:return(0,o.jsx)(G,{style:t});case 4:return(0,o.jsx)(B,{style:t});case 5:return(0,o.jsx)(O,{style:t});default:return null}},T=e=>{switch(e){case 1:return(0,o.jsx)(H,{style:L("red")});case 2:return(0,o.jsx)(D,{style:L("orange")});case 3:return(0,o.jsx)(G,{style:L("yellow")});case 4:return(0,o.jsx)(B,{style:L("lime")});case 5:return(0,o.jsx)(O,{style:L("green")});default:return null}},X={type:"code",code:`
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
`,component:function(){return(0,o.jsx)(A,{emptySymbol:P,fullSymbol:T,highlightSelectedOnly:!0})},centered:!0};var Y=n(18675),Z=n(20017);let q=(0,Y.P)(Z.XZ.Rating);function K(e){let t={code:"code",h2:"h2",pre:"pre",...(0,a.R)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n,{data:R}),"\n",(0,o.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Rating } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState(0);\n  return <Rating value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"read-only",children:"Read only"}),"\n",(0,o.jsx)(n,{data:_}),"\n",(0,o.jsx)(t.h2,{id:"fractions",children:"Fractions"}),"\n",(0,o.jsx)(n,{data:z}),"\n",(0,o.jsx)(t.h2,{id:"custom-symbol",children:"Custom symbol"}),"\n",(0,o.jsx)(n,{data:N}),"\n",(0,o.jsx)(t.h2,{id:"symbols-for-each-item",children:"Symbols for each item"}),"\n",(0,o.jsx)(n,{data:X})]})}function U(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(q,{...e,children:(0,o.jsx)(K,{...e})})}},87186:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])}},e=>{var t=t=>e(e.s=t);e.O(0,[18675,90636,46593,38792],()=>t(88221)),_N_E=e.O()}]);