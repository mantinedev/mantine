(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8929],{92147:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/rating",function(){return n(59901)}])},59901:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return eo}});var o=n(24246),a=n(71670),l=n(3916),r=n(30289),c=n(27378),i=n(31002),u=n(58675),s=n(28086),m=n(72840),d=n(92082),y=n(83453),p=n(89738),g=n(96739),f=n(6231),h=n(56589),v=n(20410),M=n(49134),S=n(71656);let[E,b]=(0,S.R)("Rating was not found in tree");var I={root:"m-f8d312f2",symbolGroup:"m-61734bb7",starSymbol:"m-5662a89a",input:"m-211007ba",label:"m-21342ee4",symbolBody:"m-fae05d6a"};function k(e){let{width:t,height:n,style:o,...a}=e;return c.createElement("svg",{viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:t,height:n,...o},...a},c.createElement("path",{d:"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"}))}function x({type:e}){let t=b();return c.createElement(k,{...t.getStyles("starSymbol"),"data-filled":"full"===e||void 0})}function w({size:e,getSymbolLabel:t,emptyIcon:n,fullIcon:o,full:a,active:l,value:r,readOnly:i,fractionValue:u,color:s,id:m,onBlur:d,onChange:y,onInputChange:p,style:g,...f}){let v=b(),S="function"==typeof o?o(r):o,E="function"==typeof n?n(r):n,{dir:I}=(0,M.gm)();return c.createElement(c.Fragment,null,!i&&c.createElement("input",{...v.getStyles("input"),onKeyDown:e=>" "===e.key&&y(r),id:m,type:"radio","data-active":l||void 0,"aria-label":t?.(r),value:r,onBlur:d,onChange:p,...f}),c.createElement(h.x,{component:i?"div":"label",...v.getStyles("label"),"data-read-only":i||void 0,htmlFor:m,onClick:()=>y(r),__vars:{"--rating-item-z-index":(1===u?void 0:l?2:0)?.toString()}},c.createElement(h.x,{...v.getStyles("symbolBody"),__vars:{"--rating-symbol-clip-path":1===u?void 0:"ltr"===I?`inset(0 ${l?100-100*u:100}% 0 0)`:`inset(0 0 0 ${l?100-100*u:100}% )`}},a?S||c.createElement(x,{type:"full"}):E||c.createElement(x,{type:"empty"}))))}function R(e,t){let n=`${t}`.split(".")[1]?.length||0;return Number((Math.round(e/t)*t).toFixed(n))}k.displayName="@mantine/core/StarIcon",x.displayName="@mantine/core/StarSymbol",w.displayName="@mantine/core/RatingItem";let C={size:"sm",getSymbolLabel:e=>`${e}`,count:5,fractions:1,color:"yellow"},V=(0,y.Z)((e,{size:t,color:n})=>({root:{"--rating-size":(0,d.ap)(t,"rating-size"),"--rating-color":(0,p.p)(n,e)}})),j=(0,v.d)((e,t)=>{let n=(0,g.w)("Rating",C,e),{classNames:o,className:a,style:l,styles:r,unstyled:d,vars:y,name:p,id:v,value:S,defaultValue:b,onChange:k,fractions:x,count:j,onMouseEnter:z,readOnly:_,onMouseMove:F,onHover:N,onMouseLeave:Z,onTouchStart:$,onTouchEnd:D,size:G,variant:H,getSymbolLabel:O,color:B,emptySymbol:A,fullSymbol:L,highlightSelectedOnly:T,...X}=n,K=(0,f.y)({name:"Rating",classes:I,props:n,className:a,style:l,classNames:o,styles:r,unstyled:d,vars:y,varsResolver:V}),{dir:P}=(0,M.gm)(),U=(0,i.M)(p),Y=(0,i.M)(v),q=(0,c.useRef)(null),[J,Q]=(0,u.C)({value:S,defaultValue:b,finalValue:0,onChange:k}),[W,ee]=(0,c.useState)(-1),[et,en]=(0,c.useState)(!0),eo=Math.floor(x),ea=Math.floor(j),el=1/eo,er=R(J,el),ec=-1!==W?W:er,ei=e=>{let{left:t,right:n,width:o}=q.current.getBoundingClientRect(),a=o/ea;return(0,s.u)(R(("rtl"===P?n-e:e-t)/a+el/2,el),el,ea)},eu=()=>et&&ee(-1),es=e=>{_||("number"==typeof e?ee(e):ee(parseFloat(e.target.value)))},em=e=>{_||("number"==typeof e?Q(e):Q(parseFloat(e.target.value)))},ed=Array(ea).fill(0).map((e,t)=>{let n=t+1,o=Array.from(Array(0===t?eo+1:eo)),a=!_&&Math.ceil(W)===n;return c.createElement("div",{key:n,"data-active":a||void 0,...K("symbolGroup")},o.map((e,o)=>{let a=el*(0===t?o:o+1),l=R(n-1+a,el);return c.createElement(w,{key:`${n}-${l}`,size:G,getSymbolLabel:O,emptyIcon:A,fullIcon:L,full:T?l===ec:l<=ec,active:l===ec,checked:l===er,readOnly:_,fractionValue:a,value:l,name:U,onChange:em,onBlur:eu,onInputChange:es,id:`${Y}-${t}-${o}`})}))});return c.createElement(E,{value:{getStyles:K}},c.createElement(h.x,{ref:(0,m.Yx)(q,t),...K("root"),onMouseMove:e=>{if(F?.(e),_)return;let t=ei(e.clientX);ee(t),t!==W&&N?.(t)},onMouseEnter:e=>{z?.(e),_||en(!1)},onMouseLeave:e=>{Z?.(e),_||(ee(-1),en(!0),-1!==W&&N?.(-1))},onTouchStart:e=>{e.preventDefault();let{touches:t}=e;if(1!==t.length)return;let n=t[0];Q(ei(n.clientX)),$?.(e)},onTouchEnd:e=>{e.preventDefault(),D?.(e)},variant:H,size:G,id:Y,...X},ed))});j.classes=I,j.displayName="@mantine/core/Rating";let z=`
import { Rating } from '@mantine/core';

function Demo() {
  return <Rating defaultValue={2}{{props}} />
}
`,_={type:"configurator",component:function(e){return c.createElement(j,{defaultValue:2,...e})},code:z,centered:!0,controls:[{prop:"color",type:"color",initialValue:"yellow",libraryValue:"yellow"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"count",type:"number",initialValue:5,libraryValue:5,min:1,max:8},{prop:"highlightSelectedOnly",type:"boolean",initialValue:!1,libraryValue:!1}]},F=`
import { Rating } from '@mantine/core';

function Demo() {
  return <Rating value={3.5} fractions={2} readOnly />;
}
`,N={type:"code",component:function(){return c.createElement(j,{value:3.5,fractions:2,readOnly:!0})},code:F,centered:!0};var Z=n(27884),$=n(22971);let D=`
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
`,G={type:"code",component:function(){return c.createElement(Z.K,null,c.createElement($.Z,null,c.createElement("div",null,"Fractions: 2"),c.createElement(j,{fractions:2,defaultValue:1.5})),c.createElement($.Z,null,c.createElement("div",null,"Fractions: 3"),c.createElement(j,{fractions:3,defaultValue:2.33333333})),c.createElement($.Z,null,c.createElement("div",null,"Fractions: 4"),c.createElement(j,{fractions:4,defaultValue:3.75})))},code:D};var H=n(61736),O=n(11541);let B=`
import { Rating } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

function Demo() {
  return <Rating emptySymbol={<IconSun size="1rem" />} fullSymbol={<IconMoon size="1rem" />} />;
}
`,A={type:"code",component:function(){return c.createElement(j,{emptySymbol:c.createElement(H.Z,{size:"1rem"}),fullSymbol:c.createElement(O.Z,{size:"1rem"})})},code:B,centered:!0};var L=n(71078),T=n(54764),X=(0,T.Z)("mood-cry","IconMoodCry",[["path",{d:"M9 10l.01 0",key:"svg-0"}],["path",{d:"M15 10l.01 0",key:"svg-1"}],["path",{d:"M9.5 15.25a3.5 3.5 0 0 1 5 0",key:"svg-2"}],["path",{d:"M17.566 17.606a2 2 0 1 0 2.897 .03l-1.463 -1.636l-1.434 1.606z",key:"svg-3"}],["path",{d:"M20.865 13.517a8.937 8.937 0 0 0 .135 -1.517a9 9 0 1 0 -9 9c.69 0 1.36 -.076 2 -.222",key:"svg-4"}]]),K=(0,T.Z)("mood-sad","IconMoodSad",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 10l.01 0",key:"svg-1"}],["path",{d:"M15 10l.01 0",key:"svg-2"}],["path",{d:"M9.5 15.25a3.5 3.5 0 0 1 5 0",key:"svg-3"}]]),P=(0,T.Z)("mood-smile","IconMoodSmile",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 10l.01 0",key:"svg-1"}],["path",{d:"M15 10l.01 0",key:"svg-2"}],["path",{d:"M9.5 15a3.5 3.5 0 0 0 5 0",key:"svg-3"}]]),U=(0,T.Z)("mood-happy","IconMoodHappy",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 9l.01 0",key:"svg-1"}],["path",{d:"M15 9l.01 0",key:"svg-2"}],["path",{d:"M8 13a4 4 0 1 0 8 0h-8",key:"svg-3"}]]),Y=(0,T.Z)("mood-crazy-happy","IconMoodCrazyHappy",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M7 8.5l3 3",key:"svg-1"}],["path",{d:"M7 11.5l3 -3",key:"svg-2"}],["path",{d:"M14 8.5l3 3",key:"svg-3"}],["path",{d:"M14 11.5l3 -3",key:"svg-4"}],["path",{d:"M9.5 15a3.5 3.5 0 0 0 5 0",key:"svg-5"}]]);let q=`
import { Rating, rem } from '@mantine/core';
import {
  IconMoodCry,
  IconMoodSad,
  IconMoodSmile,
  IconMoodHappy,
  IconMoodCrazyHappy,
} from '@tabler/icons-react';

const getIconStyle = (color?: string) => ({
  width: rem(24),
  height: rem(24),
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
`,J=e=>({width:(0,L.h)(24),height:(0,L.h)(24),color:e?`var(--mantine-color-${e}-7)`:void 0}),Q=e=>{let t=J();switch(e){case 1:return c.createElement(X,{style:t});case 2:return c.createElement(K,{style:t});case 3:return c.createElement(P,{style:t});case 4:return c.createElement(U,{style:t});case 5:return c.createElement(Y,{style:t});default:return null}},W=e=>{switch(e){case 1:return c.createElement(X,{style:J("red")});case 2:return c.createElement(K,{style:J("orange")});case 3:return c.createElement(P,{style:J("yellow")});case 4:return c.createElement(U,{style:J("lime")});case 5:return c.createElement(Y,{style:J("green")});default:return null}},ee={type:"code",code:q,component:function(){return c.createElement(j,{emptySymbol:Q,fullSymbol:W,highlightSelectedOnly:!0})},centered:!0},et=(0,l.A)(r.us.Rating);function en(e){let t={code:"code",h2:"h2",pre:"pre",...(0,a.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n,{data:_}),"\n",(0,o.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Rating } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState(0);\n  return <Rating value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"read-only",children:"Read only"}),"\n",(0,o.jsx)(n,{data:N}),"\n",(0,o.jsx)(t.h2,{id:"fractions",children:"Fractions"}),"\n",(0,o.jsx)(n,{data:G}),"\n",(0,o.jsx)(t.h2,{id:"custom-symbol",children:"Custom symbol"}),"\n",(0,o.jsx)(n,{data:A}),"\n",(0,o.jsx)(t.h2,{id:"symbols-for-each-item",children:"Symbols for each item"}),"\n",(0,o.jsx)(n,{data:ee})]})}function eo(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(et,{...e,children:(0,o.jsx)(en,{...e})})}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=92147)}),_N_E=e.O()}]);