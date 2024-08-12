(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[48929],{27479:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/rating",function(){return n(18089)}])},18089:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return J}});var o=n(52322),r=n(45392),l=n(2784),a=n(66178),i=n(9341),s=n(82692),c=n(70837),u=n(91482),d=n(11200),y=n(13588),m=n(38483),p=n(46690),h=n(28559),g=n(82027),f=n(89027);let[v,x]=(0,n(89106).R)("Rating was not found in tree");function j(e){let{width:t,height:n,style:r,...l}=e;return(0,o.jsx)("svg",{viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:t,height:n,...r},...l,children:(0,o.jsx)("path",{d:"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"})})}function M({type:e}){let t=x();return(0,o.jsx)(j,{...t.getStyles("starSymbol"),"data-filled":"full"===e||void 0})}function S({getSymbolLabel:e,emptyIcon:t,fullIcon:n,full:r,active:l,value:a,readOnly:i,fractionValue:s,color:c,id:u,onBlur:d,onChange:y,onInputChange:m,style:p,...g}){let v=x(),j="function"==typeof n?n(a):n,S="function"==typeof t?t(a):t,{dir:b}=(0,f.gm)();return(0,o.jsxs)(o.Fragment,{children:[!i&&(0,o.jsx)("input",{...v.getStyles("input"),onKeyDown:e=>" "===e.key&&y(a),id:u,type:"radio","data-active":l||void 0,"aria-label":e?.(a),value:a,onBlur:d,onChange:m,...g}),(0,o.jsx)(h.x,{component:i?"div":"label",...v.getStyles("label"),"data-read-only":i||void 0,htmlFor:u,onClick:()=>y(a),__vars:{"--rating-item-z-index":(1===s?void 0:l?2:0)?.toString()},children:(0,o.jsx)(h.x,{...v.getStyles("symbolBody"),__vars:{"--rating-symbol-clip-path":1===s?void 0:"ltr"===b?`inset(0 ${l?100-100*s:100}% 0 0)`:`inset(0 0 0 ${l?100-100*s:100}% )`},children:r?j||(0,o.jsx)(M,{type:"full"}):S||(0,o.jsx)(M,{type:"empty"})})})]})}j.displayName="@mantine/core/StarIcon",M.displayName="@mantine/core/StarSymbol",S.displayName="@mantine/core/RatingItem";var b={root:"m_f8d312f2",symbolGroup:"m_61734bb7",starSymbol:"m_5662a89a",input:"m_211007ba",label:"m_21342ee4",symbolBody:"m_fae05d6a"};function I(e,t){let n=`${t}`.split(".")[1]?.length||0;return Number((Math.round(e/t)*t).toFixed(n))}let k={size:"sm",getSymbolLabel:e=>`${e}`,count:5,fractions:1,color:"yellow"},w=(0,d.Z)((e,{size:t,color:n})=>({root:{"--rating-size":(0,u.ap)(t,"rating-size"),"--rating-color":(0,y.p)(n,e)}})),R=(0,g.d5)((e,t)=>{let n=(0,m.w)("Rating",k,e),{classNames:r,className:u,style:d,styles:y,unstyled:g,vars:x,name:j,id:M,value:R,defaultValue:_,onChange:C,fractions:V,count:z,onMouseEnter:F,readOnly:E,onMouseMove:N,onHover:Z,onMouseLeave:$,onTouchStart:D,onTouchEnd:G,size:H,variant:O,getSymbolLabel:B,color:A,emptySymbol:L,fullSymbol:T,highlightSelectedOnly:X,...K}=n,P=(0,p.y)({name:"Rating",classes:b,props:n,className:u,style:d,classNames:r,styles:y,unstyled:g,vars:x,varsResolver:w}),{dir:U}=(0,f.gm)(),Y=(0,a.M)(j),q=(0,a.M)(M),J=(0,l.useRef)(null),[Q,W]=(0,i.C)({value:R,defaultValue:_,finalValue:0,onChange:C}),[ee,et]=(0,l.useState)(-1),[en,eo]=(0,l.useState)(!0),er=Math.floor(V),el=Math.floor(z),ea=1/er,ei=I(Q,ea),es=-1!==ee?ee:ei,ec=e=>{let{left:t,right:n,width:o}=J.current.getBoundingClientRect(),r=o/el;return(0,s.u)(I(("rtl"===U?n-e:e-t)/r+ea/2,ea),ea,el)},eu=()=>en&&et(-1),ed=e=>{E||("number"==typeof e?et(e):et(parseFloat(e.target.value)))},ey=e=>{E||("number"==typeof e?W(e):W(parseFloat(e.target.value)))},em=Array(el).fill(0).map((e,t)=>{let n=t+1,r=Array.from(Array(0===t?er+1:er)),l=!E&&Math.ceil(ee)===n;return(0,o.jsx)("div",{"data-active":l||void 0,...P("symbolGroup"),children:r.map((e,r)=>{let l=ea*(0===t?r:r+1),a=I(n-1+l,ea);return(0,o.jsx)(S,{getSymbolLabel:B,emptyIcon:L,fullIcon:T,full:X?a===es:a<=es,active:a===es,checked:a===ei,readOnly:E,fractionValue:l,value:a,name:Y,onChange:ey,onBlur:eu,onInputChange:ed,id:`${q}-${t}-${r}`},`${n}-${a}`)})},n)});return(0,o.jsx)(v,{value:{getStyles:P},children:(0,o.jsx)(h.x,{ref:(0,c.Yx)(J,t),...P("root"),onMouseMove:e=>{if(N?.(e),E)return;let t=ec(e.clientX);et(t),t!==ee&&Z?.(t)},onMouseEnter:e=>{F?.(e),E||eo(!1)},onMouseLeave:e=>{$?.(e),E||(et(-1),eo(!0),-1!==ee&&Z?.(-1))},onTouchStart:e=>{let{touches:t}=e;1===t.length&&(E||W(ec(t[0].clientX)),D?.(e))},onTouchEnd:e=>{e.preventDefault(),G?.(e)},variant:O,size:H,id:q,...K,children:em})})});R.classes=b,R.displayName="@mantine/core/Rating";let _={type:"configurator",component:function(e){return(0,o.jsx)(R,{defaultValue:2,...e})},code:`
import { Rating } from '@mantine/core';

function Demo() {
  return <Rating defaultValue={2}{{props}} />
}
`,centered:!0,controls:[{prop:"color",type:"color",initialValue:"yellow",libraryValue:"yellow"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"count",type:"number",initialValue:5,libraryValue:5,min:1,max:8},{prop:"highlightSelectedOnly",type:"boolean",initialValue:!1,libraryValue:!1}]},C={type:"code",component:function(){return(0,o.jsx)(R,{value:3.5,fractions:2,readOnly:!0})},code:`
import { Rating } from '@mantine/core';

function Demo() {
  return <Rating value={3.5} fractions={2} readOnly />;
}
`,centered:!0};var V=n(65438),z=n(93010);let F={type:"code",component:function(){return(0,o.jsxs)(V.K,{children:[(0,o.jsxs)(z.Z,{children:[(0,o.jsx)("div",{children:"Fractions: 2"}),(0,o.jsx)(R,{fractions:2,defaultValue:1.5})]}),(0,o.jsxs)(z.Z,{children:[(0,o.jsx)("div",{children:"Fractions: 3"}),(0,o.jsx)(R,{fractions:3,defaultValue:2.33333333})]}),(0,o.jsxs)(z.Z,{children:[(0,o.jsx)("div",{children:"Fractions: 4"}),(0,o.jsx)(R,{fractions:4,defaultValue:3.75})]})]})},code:`
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
`};var E=n(90664),N=n(19289);let Z={type:"code",component:function(){return(0,o.jsx)(R,{emptySymbol:(0,o.jsx)(E.Z,{size:"1rem"}),fullSymbol:(0,o.jsx)(N.Z,{size:"1rem"})})},code:`
import { Rating } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

function Demo() {
  return <Rating emptySymbol={<IconSun size="1rem" />} fullSymbol={<IconMoon size="1rem" />} />;
}
`,centered:!0};var $=n(73681),D=(0,$.Z)("outline","mood-cry","IconMoodCry",[["path",{d:"M9 10l.01 0",key:"svg-0"}],["path",{d:"M15 10l.01 0",key:"svg-1"}],["path",{d:"M9.5 15.25a3.5 3.5 0 0 1 5 0",key:"svg-2"}],["path",{d:"M17.566 17.606a2 2 0 1 0 2.897 .03l-1.463 -1.636l-1.434 1.606z",key:"svg-3"}],["path",{d:"M20.865 13.517a8.937 8.937 0 0 0 .135 -1.517a9 9 0 1 0 -9 9c.69 0 1.36 -.076 2 -.222",key:"svg-4"}]]),G=(0,$.Z)("outline","mood-sad","IconMoodSad",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 10l.01 0",key:"svg-1"}],["path",{d:"M15 10l.01 0",key:"svg-2"}],["path",{d:"M9.5 15.25a3.5 3.5 0 0 1 5 0",key:"svg-3"}]]),H=(0,$.Z)("outline","mood-smile","IconMoodSmile",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 10l.01 0",key:"svg-1"}],["path",{d:"M15 10l.01 0",key:"svg-2"}],["path",{d:"M9.5 15a3.5 3.5 0 0 0 5 0",key:"svg-3"}]]),O=(0,$.Z)("outline","mood-happy","IconMoodHappy",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 9l.01 0",key:"svg-1"}],["path",{d:"M15 9l.01 0",key:"svg-2"}],["path",{d:"M8 13a4 4 0 1 0 8 0h-8",key:"svg-3"}]]),B=(0,$.Z)("outline","mood-crazy-happy","IconMoodCrazyHappy",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M7 8.5l3 3",key:"svg-1"}],["path",{d:"M7 11.5l3 -3",key:"svg-2"}],["path",{d:"M14 8.5l3 3",key:"svg-3"}],["path",{d:"M14 11.5l3 -3",key:"svg-4"}],["path",{d:"M9.5 15a3.5 3.5 0 0 0 5 0",key:"svg-5"}]]),A=n(58898);let L=e=>({width:(0,A.h)(24),height:(0,A.h)(24),color:e?`var(--mantine-color-${e}-7)`:void 0}),T=e=>{let t=L();switch(e){case 1:return(0,o.jsx)(D,{style:t});case 2:return(0,o.jsx)(G,{style:t});case 3:return(0,o.jsx)(H,{style:t});case 4:return(0,o.jsx)(O,{style:t});case 5:return(0,o.jsx)(B,{style:t});default:return null}},X=e=>{switch(e){case 1:return(0,o.jsx)(D,{style:L("red")});case 2:return(0,o.jsx)(G,{style:L("orange")});case 3:return(0,o.jsx)(H,{style:L("yellow")});case 4:return(0,o.jsx)(O,{style:L("lime")});case 5:return(0,o.jsx)(B,{style:L("green")});default:return null}},K={type:"code",code:`
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
`,component:function(){return(0,o.jsx)(R,{emptySymbol:T,fullSymbol:X,highlightSelectedOnly:!0})},centered:!0};var P=n(25071),U=n(15019);let Y=(0,P.A)(U.us.Rating);function q(e){let t={code:"code",h2:"h2",pre:"pre",...(0,r.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n,{data:_}),"\n",(0,o.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Rating } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState(0);\n  return <Rating value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"read-only",children:"Read only"}),"\n",(0,o.jsx)(n,{data:C}),"\n",(0,o.jsx)(t.h2,{id:"fractions",children:"Fractions"}),"\n",(0,o.jsx)(n,{data:F}),"\n",(0,o.jsx)(t.h2,{id:"custom-symbol",children:"Custom symbol"}),"\n",(0,o.jsx)(n,{data:Z}),"\n",(0,o.jsx)(t.h2,{id:"symbols-for-each-item",children:"Symbols for each item"}),"\n",(0,o.jsx)(n,{data:K})]})}function J(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(Y,{...e,children:(0,o.jsx)(q,{...e})})}}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=27479)}),_N_E=e.O()}]);