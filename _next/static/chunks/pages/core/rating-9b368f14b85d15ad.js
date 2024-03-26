(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[48929],{27479:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/rating",function(){return n(69738)}])},69738:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return eo}});var o=n(52322),a=n(45392),l=n(2784),r=n(66178),c=n(9341),i=n(82692),u=n(70837),s=n(91482),m=n(11200),d=n(13588),y=n(38483),p=n(62378),g=n(28559),f=n(82027),h=n(89027),v=n(89106);let[M,S]=(0,v.R)("Rating was not found in tree");function E(e){let{width:t,height:n,style:o,...a}=e;return l.createElement("svg",{viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:t,height:n,...o},...a},l.createElement("path",{d:"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"}))}function b({type:e}){let t=S();return l.createElement(E,{...t.getStyles("starSymbol"),"data-filled":"full"===e||void 0})}function I({getSymbolLabel:e,emptyIcon:t,fullIcon:n,full:o,active:a,value:r,readOnly:c,fractionValue:i,color:u,id:s,onBlur:m,onChange:d,onInputChange:y,style:p,...f}){let v=S(),M="function"==typeof n?n(r):n,E="function"==typeof t?t(r):t,{dir:I}=(0,h.gm)();return l.createElement(l.Fragment,null,!c&&l.createElement("input",{...v.getStyles("input"),onKeyDown:e=>" "===e.key&&d(r),id:s,type:"radio","data-active":a||void 0,"aria-label":e?.(r),value:r,onBlur:m,onChange:y,...f}),l.createElement(g.x,{component:c?"div":"label",...v.getStyles("label"),"data-read-only":c||void 0,htmlFor:s,onClick:()=>d(r),__vars:{"--rating-item-z-index":(1===i?void 0:a?2:0)?.toString()}},l.createElement(g.x,{...v.getStyles("symbolBody"),__vars:{"--rating-symbol-clip-path":1===i?void 0:"ltr"===I?`inset(0 ${a?100-100*i:100}% 0 0)`:`inset(0 0 0 ${a?100-100*i:100}% )`}},o?M||l.createElement(b,{type:"full"}):E||l.createElement(b,{type:"empty"}))))}E.displayName="@mantine/core/StarIcon",b.displayName="@mantine/core/StarSymbol",I.displayName="@mantine/core/RatingItem";var k={root:"m-f8d312f2",symbolGroup:"m-61734bb7",starSymbol:"m-5662a89a",input:"m-211007ba",label:"m-21342ee4",symbolBody:"m-fae05d6a"};function x(e,t){let n=`${t}`.split(".")[1]?.length||0;return Number((Math.round(e/t)*t).toFixed(n))}let w={size:"sm",getSymbolLabel:e=>`${e}`,count:5,fractions:1,color:"yellow"},R=(0,m.Z)((e,{size:t,color:n})=>({root:{"--rating-size":(0,s.ap)(t,"rating-size"),"--rating-color":(0,d.p)(n,e)}})),C=(0,f.d)((e,t)=>{let n=(0,y.w)("Rating",w,e),{classNames:o,className:a,style:s,styles:m,unstyled:d,vars:f,name:v,id:S,value:E,defaultValue:b,onChange:C,fractions:V,count:j,onMouseEnter:z,readOnly:_,onMouseMove:F,onHover:N,onMouseLeave:Z,onTouchStart:$,onTouchEnd:D,size:G,variant:H,getSymbolLabel:O,color:B,emptySymbol:A,fullSymbol:L,highlightSelectedOnly:T,...X}=n,K=(0,p.y)({name:"Rating",classes:k,props:n,className:a,style:s,classNames:o,styles:m,unstyled:d,vars:f,varsResolver:R}),{dir:P}=(0,h.gm)(),U=(0,r.M)(v),Y=(0,r.M)(S),q=(0,l.useRef)(null),[J,Q]=(0,c.C)({value:E,defaultValue:b,finalValue:0,onChange:C}),[W,ee]=(0,l.useState)(-1),[et,en]=(0,l.useState)(!0),eo=Math.floor(V),ea=Math.floor(j),el=1/eo,er=x(J,el),ec=-1!==W?W:er,ei=e=>{let{left:t,right:n,width:o}=q.current.getBoundingClientRect(),a=o/ea;return(0,i.u)(x(("rtl"===P?n-e:e-t)/a+el/2,el),el,ea)},eu=()=>et&&ee(-1),es=e=>{_||("number"==typeof e?ee(e):ee(parseFloat(e.target.value)))},em=e=>{_||("number"==typeof e?Q(e):Q(parseFloat(e.target.value)))},ed=Array(ea).fill(0).map((e,t)=>{let n=t+1,o=Array.from(Array(0===t?eo+1:eo)),a=!_&&Math.ceil(W)===n;return l.createElement("div",{key:n,"data-active":a||void 0,...K("symbolGroup")},o.map((e,o)=>{let a=el*(0===t?o:o+1),r=x(n-1+a,el);return l.createElement(I,{key:`${n}-${r}`,getSymbolLabel:O,emptyIcon:A,fullIcon:L,full:T?r===ec:r<=ec,active:r===ec,checked:r===er,readOnly:_,fractionValue:a,value:r,name:U,onChange:em,onBlur:eu,onInputChange:es,id:`${Y}-${t}-${o}`})}))});return l.createElement(M,{value:{getStyles:K}},l.createElement(g.x,{ref:(0,u.Yx)(q,t),...K("root"),onMouseMove:e=>{if(F?.(e),_)return;let t=ei(e.clientX);ee(t),t!==W&&N?.(t)},onMouseEnter:e=>{z?.(e),_||en(!1)},onMouseLeave:e=>{Z?.(e),_||(ee(-1),en(!0),-1!==W&&N?.(-1))},onTouchStart:e=>{e.preventDefault();let{touches:t}=e;if(1!==t.length)return;let n=t[0];Q(ei(n.clientX)),$?.(e)},onTouchEnd:e=>{e.preventDefault(),D?.(e)},variant:H,size:G,id:Y,...X},ed))});C.classes=k,C.displayName="@mantine/core/Rating";let V=`
import { Rating } from '@mantine/core';

function Demo() {
  return <Rating defaultValue={2}{{props}} />
}
`,j={type:"configurator",component:function(e){return l.createElement(C,{defaultValue:2,...e})},code:V,centered:!0,controls:[{prop:"color",type:"color",initialValue:"yellow",libraryValue:"yellow"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"count",type:"number",initialValue:5,libraryValue:5,min:1,max:8},{prop:"highlightSelectedOnly",type:"boolean",initialValue:!1,libraryValue:!1}]},z=`
import { Rating } from '@mantine/core';

function Demo() {
  return <Rating value={3.5} fractions={2} readOnly />;
}
`,_={type:"code",component:function(){return l.createElement(C,{value:3.5,fractions:2,readOnly:!0})},code:z,centered:!0};var F=n(65438),N=n(93010);let Z=`
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
`,$={type:"code",component:function(){return l.createElement(F.K,null,l.createElement(N.Z,null,l.createElement("div",null,"Fractions: 2"),l.createElement(C,{fractions:2,defaultValue:1.5})),l.createElement(N.Z,null,l.createElement("div",null,"Fractions: 3"),l.createElement(C,{fractions:3,defaultValue:2.33333333})),l.createElement(N.Z,null,l.createElement("div",null,"Fractions: 4"),l.createElement(C,{fractions:4,defaultValue:3.75})))},code:Z};var D=n(34345),G=n(29986);let H=`
import { Rating } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

function Demo() {
  return <Rating emptySymbol={<IconSun size="1rem" />} fullSymbol={<IconMoon size="1rem" />} />;
}
`,O={type:"code",component:function(){return l.createElement(C,{emptySymbol:l.createElement(D.Z,{size:"1rem"}),fullSymbol:l.createElement(G.Z,{size:"1rem"})})},code:H,centered:!0};var B=n(99882),A=(0,B.Z)("mood-cry","IconMoodCry",[["path",{d:"M9 10l.01 0",key:"svg-0"}],["path",{d:"M15 10l.01 0",key:"svg-1"}],["path",{d:"M9.5 15.25a3.5 3.5 0 0 1 5 0",key:"svg-2"}],["path",{d:"M17.566 17.606a2 2 0 1 0 2.897 .03l-1.463 -1.636l-1.434 1.606z",key:"svg-3"}],["path",{d:"M20.865 13.517a8.937 8.937 0 0 0 .135 -1.517a9 9 0 1 0 -9 9c.69 0 1.36 -.076 2 -.222",key:"svg-4"}]]),L=(0,B.Z)("mood-sad","IconMoodSad",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 10l.01 0",key:"svg-1"}],["path",{d:"M15 10l.01 0",key:"svg-2"}],["path",{d:"M9.5 15.25a3.5 3.5 0 0 1 5 0",key:"svg-3"}]]),T=(0,B.Z)("mood-smile","IconMoodSmile",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 10l.01 0",key:"svg-1"}],["path",{d:"M15 10l.01 0",key:"svg-2"}],["path",{d:"M9.5 15a3.5 3.5 0 0 0 5 0",key:"svg-3"}]]),X=(0,B.Z)("mood-happy","IconMoodHappy",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 9l.01 0",key:"svg-1"}],["path",{d:"M15 9l.01 0",key:"svg-2"}],["path",{d:"M8 13a4 4 0 1 0 8 0h-8",key:"svg-3"}]]),K=(0,B.Z)("mood-crazy-happy","IconMoodCrazyHappy",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M7 8.5l3 3",key:"svg-1"}],["path",{d:"M7 11.5l3 -3",key:"svg-2"}],["path",{d:"M14 8.5l3 3",key:"svg-3"}],["path",{d:"M14 11.5l3 -3",key:"svg-4"}],["path",{d:"M9.5 15a3.5 3.5 0 0 0 5 0",key:"svg-5"}]]),P=n(58898);let U=`
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
`,Y=e=>({width:(0,P.h)(24),height:(0,P.h)(24),color:e?`var(--mantine-color-${e}-7)`:void 0}),q=e=>{let t=Y();switch(e){case 1:return l.createElement(A,{style:t});case 2:return l.createElement(L,{style:t});case 3:return l.createElement(T,{style:t});case 4:return l.createElement(X,{style:t});case 5:return l.createElement(K,{style:t});default:return null}},J=e=>{switch(e){case 1:return l.createElement(A,{style:Y("red")});case 2:return l.createElement(L,{style:Y("orange")});case 3:return l.createElement(T,{style:Y("yellow")});case 4:return l.createElement(X,{style:Y("lime")});case 5:return l.createElement(K,{style:Y("green")});default:return null}},Q={type:"code",code:U,component:function(){return l.createElement(C,{emptySymbol:q,fullSymbol:J,highlightSelectedOnly:!0})},centered:!0};var W=n(79016),ee=n(33638);let et=(0,W.A)(ee.us.Rating);function en(e){let t={code:"code",h2:"h2",pre:"pre",...(0,a.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n,{data:j}),"\n",(0,o.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Rating } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState(0);\n  return <Rating value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"read-only",children:"Read only"}),"\n",(0,o.jsx)(n,{data:_}),"\n",(0,o.jsx)(t.h2,{id:"fractions",children:"Fractions"}),"\n",(0,o.jsx)(n,{data:$}),"\n",(0,o.jsx)(t.h2,{id:"custom-symbol",children:"Custom symbol"}),"\n",(0,o.jsx)(n,{data:O}),"\n",(0,o.jsx)(t.h2,{id:"symbols-for-each-item",children:"Symbols for each item"}),"\n",(0,o.jsx)(n,{data:Q})]})}function eo(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(et,{...e,children:(0,o.jsx)(en,{...e})})}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=27479)}),_N_E=e.O()}]);