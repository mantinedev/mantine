(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,959870,e=>{"use strict";var a=e.i(648863);let o=[{value:"asia",label:"Asia",children:[{value:"jp",label:"Japan",children:[{value:"tokyo",label:"Tokyo"},{value:"osaka",label:"Osaka"},{value:"kyoto",label:"Kyoto"}]},{value:"kr",label:"South Korea",children:[{value:"seoul",label:"Seoul"},{value:"busan",label:"Busan"}]}]},{value:"europe",label:"Europe",children:[{value:"fr",label:"France",children:[{value:"paris",label:"Paris"},{value:"lyon",label:"Lyon"}]},{value:"de",label:"Germany",children:[{value:"berlin",label:"Berlin"},{value:"munich",label:"Munich"}]}]},{value:"north-america",label:"North America",children:[{value:"us",label:"United States",children:[{value:"new-york",label:"New York"},{value:"san-francisco",label:"San Francisco"}]},{value:"ca",label:"Canada",children:[{value:"toronto",label:"Toronto"},{value:"vancouver",label:"Vancouver"}]}]}],t=`import { CascaderOption } from '@mantine/core';

export const data: CascaderOption[] = [
  {
    value: 'asia',
    label: 'Asia',
    children: [
      {
        value: 'jp',
        label: 'Japan',
        children: [
          { value: 'tokyo', label: 'Tokyo' },
          { value: 'osaka', label: 'Osaka' },
          { value: 'kyoto', label: 'Kyoto' },
        ],
      },
      {
        value: 'kr',
        label: 'South Korea',
        children: [
          { value: 'seoul', label: 'Seoul' },
          { value: 'busan', label: 'Busan' },
        ],
      },
    ],
  },
  {
    value: 'europe',
    label: 'Europe',
    children: [
      {
        value: 'fr',
        label: 'France',
        children: [
          { value: 'paris', label: 'Paris' },
          { value: 'lyon', label: 'Lyon' },
        ],
      },
      {
        value: 'de',
        label: 'Germany',
        children: [
          { value: 'berlin', label: 'Berlin' },
          { value: 'munich', label: 'Munich' },
        ],
      },
    ],
  },
  {
    value: 'north-america',
    label: 'North America',
    children: [
      {
        value: 'us',
        label: 'United States',
        children: [
          { value: 'new-york', label: 'New York' },
          { value: 'san-francisco', label: 'San Francisco' },
        ],
      },
      {
        value: 'ca',
        label: 'Canada',
        children: [
          { value: 'toronto', label: 'Toronto' },
          { value: 'vancouver', label: 'Vancouver' },
        ],
      },
    ],
  },
];`;var n=e.i(44091),l=e.i(62904),r=e.i(391466),i=e.i(425254),c=e.i(275519),s=e.i(19300),d=e.i(586488),u=e.i(734858),m=e.i(711976),p=e.i(956031),h=e.i(284629),f=e.i(462138);function b(e){return Array.isArray(e.children)&&e.children.length>0}function x(e,a){let o=[e],t=e;for(let e=0;e<a.length;e+=1){let n=function(e,a){return e.find(e=>e.value===a)}(t,a[e]);if(!n)break;let l=e===a.length-1;if(Array.isArray(n.children)&&n.children.length>0)l||(o.push(n.children),t=n.children);else break}return o}var g=e.i(191788),v=e.i(391398);function C({data:e,activePath:a,value:o,keyboardNav:t,withCheckIcon:n,checkIconPosition:l,renderOption:r,columnWidth:i,maxDisplayedLevels:c,previousLevelsControlLabel:d,nextLevelsControlLabel:u,maxDropdownHeight:m,nothingFoundMessage:w,getStyles:y,unstyled:k,scrollAreaProps:P,onOptionClick:j,onOptionMouseEnter:D,onColumnsMouseLeave:L,onPointerActivity:M,listId:N}){let O=x(e,a),S=O.length,A=c&&c>0?c:S,W=Math.max(0,S-A),V=a.length-1,_=JSON.stringify(a),[I,T]=(0,g.useState)({key:_,offset:0}),B=I.key===_?I.offset:0;I.key!==_&&T({key:_,offset:0});let E=e=>T(a=>({key:_,offset:e(a.offset)})),F=Math.max(0,W-Math.min(B,W)),K=Math.min(S,F+A),U=O.slice(F,K),$=S-K,z=!1!==n?(0,v.jsx)(p.CheckIcon,{...y("columnOptionCheck")}):null;return(0,v.jsxs)("div",{...y("columnsList"),role:"presentation",onMouseLeave:L,onMouseMove:M,children:[F>0&&(0,v.jsx)(h.UnstyledButton,{...y("columnsOverflow"),"data-position":"start",tabIndex:-1,unstyled:k,"aria-label":d,title:d,onMouseDown:e=>e.preventDefault(),onClick:()=>E(e=>Math.min(W,e+1)),children:(0,v.jsx)(f.AccordionChevron,{})}),U.map((e,n)=>{let c=F+n;return(0,v.jsx)("div",{"data-last":n===U.length-1&&0===$||void 0,...y("column",{style:i?{width:i,minWidth:i}:void 0}),children:(0,v.jsx)(s.ScrollArea.Autosize,{mah:m??260,type:"scroll",scrollbarSize:"var(--combobox-padding)",role:"listbox",...P,...y("columnScroll"),children:0===e.length?(0,v.jsx)("div",{...y("columnEmpty"),children:w}):e.map(e=>{var n;let i=a[c]===e.value,s=i&&c===V&&t,d=i&&c<V,u=b(e),m=!!o&&o.length===c+1&&o[c]===e.value;return(0,v.jsxs)(h.UnstyledButton,{id:(n=e.value,N?`${N}-${c}-${n}`:void 0),role:"option","aria-selected":s||void 0,"aria-disabled":e.disabled||void 0,"data-active":s||void 0,"data-in-path":d||void 0,"data-selected":m||void 0,"data-disabled":e.disabled||void 0,tabIndex:-1,unstyled:k,onMouseDown:e=>e.preventDefault(),onClick:()=>{e.disabled||j(c,e)},onMouseEnter:()=>{e.disabled||D(c,e)},...y("columnOption"),children:[m&&"left"===l&&z,(0,v.jsx)("span",{...y("columnOptionLabel"),children:r?r(e,c):e.label??e.value}),m&&"left"!==l&&z,u&&(0,v.jsx)("span",{...y("columnOptionIcon"),children:(0,v.jsx)(f.AccordionChevron,{})})]},e.value)})})},c)}),$>0&&(0,v.jsx)(h.UnstyledButton,{...y("columnsOverflow"),"data-position":"end",tabIndex:-1,unstyled:k,"aria-label":u,title:u,onMouseDown:e=>e.preventDefault(),onClick:()=>E(e=>Math.max(0,e-1)),children:(0,v.jsx)(f.AccordionChevron,{})})]})}function w(e,a){if(!a||0===a.length)return[];let o=[],t=e;for(let e of a){if(!t)break;let a=t.find(a=>a.value===e);if(!a)break;o.push(a),t=a.children}return o}C.displayName="@mantine/core/CascaderColumns";var y=e.i(579560);function k(e,a,o){let t=a+o;for(;t>=0&&t<e.length;){if(!e[t].disabled)return t;t+=o}return -1}var P={columnsList:"m_9a782f2c",column:"m_4c5a03a5",columnScroll:"m_7f3ac6d2",columnsOverflow:"m_6b93b90",columnOption:"m_791f687a",flatOption:"m_452a61d",columnOptionLabel:"m_aecd629a",columnOptionIcon:"m_92054c13",columnOptionCheck:"m_ae51c8ae",columnEmpty:"m_97ff10a8"},j=e.i(107315);let D={expandTrigger:"click",changeOnSelect:!1,allowDeselect:!0,withCheckIcon:!0,checkIconPosition:"right",withColumns:!0,searchable:!1,separator:"/",maxDisplayedLevels:3,previousLevelsControlLabel:"Show previous levels",nextLevelsControlLabel:"Show next levels",maxDropdownHeight:260,openOnFocus:!0,size:"sm"};function L(e){return"string"==typeof e.label||"number"==typeof e.label?String(e.label):e.value}function M(e,a){return e.map(L).join(` ${a} `)}let N=(0,c.factory)(e=>{let a=(0,n.useProps)(["Input","InputWrapper","Cascader"],D,e),{classNames:o,className:t,style:c,styles:h,unstyled:f,vars:L,size:N,data:O,value:S,defaultValue:A,onChange:W,changeOnSelect:V,closeOnSelect:_,allowDeselect:I,withCheckIcon:T,checkIconPosition:B,withColumns:E,expandTrigger:F,searchable:K,searchValue:U,defaultSearchValue:$,onSearchChange:z,filter:G,renderSearchOption:J,formatValue:R,renderOption:H,separator:Y,columnWidth:q,maxDisplayedLevels:Q,previousLevelsControlLabel:X,nextLevelsControlLabel:Z,maxDropdownHeight:ee,nothingFoundMessage:ea,clearable:eo,clearSectionMode:et,clearButtonProps:en,onClear:el,dropdownOpened:er,defaultDropdownOpened:ei,onDropdownOpen:ec,onDropdownClose:es,comboboxProps:ed,scrollAreaProps:eu,chevronColor:em,hiddenInputProps:ep,openOnFocus:eh,variant:ef,onKeyDown:eb,onFocus:ex,onBlur:eg,onClick:ev,readOnly:eC,disabled:ew,radius:ey,rightSection:ek,rightSectionWidth:eP,rightSectionPointerEvents:ej,rightSectionProps:eD,leftSection:eL,leftSectionWidth:eM,leftSectionPointerEvents:eN,leftSectionProps:eO,inputContainer:eS,inputWrapperOrder:eA,withAsterisk:eW,labelProps:eV,descriptionProps:e_,errorProps:eI,successProps:eT,wrapperProps:eB,description:eE,label:eF,error:eK,success:eU,withErrorStyles:e$,withSuccessStyles:ez,name:eG,form:eJ,id:eR,placeholder:eH,required:eY,mod:eq,attributes:eQ,...eX}=a,eZ=(0,j.useId)(eR),e0="string"==typeof Y||"number"==typeof Y?String(Y):"/",e1=(0,u.useCombobox)({opened:er,defaultOpened:ei,onDropdownOpen:()=>{ec?.(),e4.resetActivePath()},onDropdownClose:()=>{es?.(),K&&at(e4.value?aa:"")}}),e3=_??!I,e4=function({data:e,value:a,defaultValue:o,onChange:t,changeOnSelect:n,allowDeselect:l,expandTrigger:r,onLeafSelect:i}){let[c,s]=(0,g.useState)(!1),[d,u]=(0,y.useUncontrolled)({value:a,defaultValue:o,finalValue:null,onChange:a=>t?.(a,w(e,a))}),[m,p]=(0,g.useState)(()=>d??[]),h=(0,g.useRef)(m);h.current=m;let f=(0,g.useCallback)(()=>{p(d??[])},[d]),v=(0,g.useCallback)(e=>{u(l&&d&&d.length===e.length&&d.every((a,o)=>a===e[o])?null:e)},[l,d,u]),C=(0,g.useCallback)((e,a)=>{let o=[...h.current.slice(0,e),a.value],t=a.children;if(Array.isArray(t)&&t.length>0){let e=k(t,-1,1);p(e>=0?[...o,t[e].value]:o)}else p(o)},[]);return{value:d,setValue:u,selectPath:v,activePath:m,setActivePath:p,resetActivePath:f,keyboardNav:c,setKeyboardNav:s,handleOptionClick:(0,g.useCallback)((e,a)=>{s(!1);let o=[...m.slice(0,e),a.value];b(a)?(n&&v(o),C(e,a),n&&i?.()):(v(o),i?.())},[m,n,v,C,i]),handleOptionMouseEnter:(0,g.useCallback)((e,a)=>{s(!1),"hover"===r&&(b(a)?C(e,a):p([...m.slice(0,e),a.value]))},[r,m,C]),handleColumnsKeyDown:(0,g.useCallback)(a=>{s(!0);let o=x(e,m),t=Math.max(0,m.length-1),l=o[t]??o[0]??[],r=l.findIndex(e=>e.value===m[t]),c=r>=0?l[r]:void 0;switch(a.key){case"ArrowDown":{let e=k(l,r,1);return e>=0&&p([...m.slice(0,t),l[e].value]),!0}case"ArrowUp":{let e=k(l,r<0?l.length:r,-1);return e>=0&&p([...m.slice(0,t),l[e].value]),!0}case"ArrowRight":return c&&b(c)&&C(t,c),!0;case"ArrowLeft":return m.length>1&&p(m.slice(0,-1)),!0;case"Enter":if(!c)return!1;return b(c)?(n&&v([...m.slice(0,t),c.value]),C(t,c),n&&i?.()):(v([...m.slice(0,t),c.value]),i?.()),!0;default:return!1}},[e,m,n,v,C,i]),pathOptions:(0,g.useMemo)(()=>w(e,d),[e,d])}}({data:O,value:S,defaultValue:A,onChange:W,changeOnSelect:V,allowDeselect:I,expandTrigger:F,onLeafSelect:()=>{e3&&e1.closeDropdown()}}),e2=(0,r.useStyles)({name:"Cascader",classes:P,props:a,classNames:o,styles:h,unstyled:f,attributes:eQ}),{resolvedClassNames:e6,resolvedStyles:e9}=(0,l.useResolvedStylesApi)({props:a,styles:h,classNames:o}),{styleProps:e8,rest:{type:e5,autoComplete:e7,...ae}}=(0,i.extractStyleProps)(eX),aa=(0,g.useMemo)(()=>{if(0===e4.pathOptions.length||!e4.value)return"";if(R){let e=R({value:e4.value,options:e4.pathOptions});if("string"==typeof e||"number"==typeof e)return String(e)}return M(e4.pathOptions,e0)},[e4.pathOptions,e4.value,R,e0]),[ao,at]=(0,y.useUncontrolled)({value:U,defaultValue:$,finalValue:(0,g.useMemo)(()=>K&&A?M(w(O,A),e0):"",[]),onChange:z}),an=!!K&&ao.trim().length>0&&ao!==aa;(0,g.useEffect)(()=>{K&&at(e4.value?aa:"")},[e4.value]);let al=an||!E,ar=(0,g.useMemo)(()=>{let e,a;return e=[],(a=(o,t,n,l)=>{for(let r of o){let o=[...t,r.value],i=[...n,r],c=l||!!r.disabled,s=Array.isArray(r.children)&&r.children.length>0;e.push({path:o,options:i,leaf:!s,disabled:c}),s&&a(r.children,o,i,c)}})(O,[],[],!1),e},[O]),ai=(0,g.useMemo)(()=>{if(!al)return[];let e=ar.filter(e=>!!V||e.leaf);return an?e.filter(e=>{var a;let o;return G?G(ao,e.options):(a=e.options,0===(o=ao.trim().toLowerCase()).length||M(a,e0).toLowerCase().includes(o))}):e},[ar,al,an,ao,V,G,e0]),ac=!eC&&!ew,as=(0,v.jsx)(m.Combobox.ClearButton,{...en,onClear:()=>{el?.(),e4.setValue(null),e4.setActivePath([]),at(""),e1.focusTarget()}}),ad=Array.isArray(e4.value)&&e4.value.length>0,au=eo&&ad&&!ew&&!eC,am=eZ?`${eZ}-cascader-list`:void 0,ap=e4.value?JSON.stringify(e4.value):null,ah=(0,v.jsx)(m.Combobox.Dropdown,{hidden:eC||ew,style:al?void 0:{padding:0},children:al?(0,v.jsxs)(m.Combobox.Options,{"aria-label":"string"==typeof eF?eF:void 0,children:[(0,v.jsx)(s.ScrollArea.Autosize,{mah:ee??260,type:"scroll",scrollbarSize:"var(--combobox-padding)",offsetScrollbars:"y",...eu,children:ai.map((e,a)=>{var o;let t=JSON.stringify(e.path),n=null!==ap&&t===ap;return(0,v.jsx)(m.Combobox.Option,{value:`${a}`,active:n,disabled:e.disabled,children:(0,v.jsxs)("span",{...e2("flatOption"),children:[n&&T&&"left"===B&&(0,v.jsx)(p.CheckIcon,{...e2("columnOptionCheck")}),(0,v.jsx)("span",{...e2("columnOptionLabel"),children:J?J(ao,e.options):(o=e.options,o.map((e,a)=>(0,v.jsxs)(g.Fragment,{children:[a>0&&(0,v.jsxs)("span",{"data-cascader-separator":!0,children:[" ",Y," "]}),e.label??e.value]},e.value)))}),n&&T&&"left"!==B&&(0,v.jsx)(p.CheckIcon,{...e2("columnOptionCheck")})]})},t)})}),0===ai.length&&ea&&(0,v.jsx)(m.Combobox.Empty,{children:ea})]}):(0,v.jsx)(C,{data:O,activePath:e4.activePath,value:e4.value,keyboardNav:e4.keyboardNav,withCheckIcon:T,checkIconPosition:B,renderOption:H,columnWidth:q,maxDisplayedLevels:Q,previousLevelsControlLabel:X,nextLevelsControlLabel:Z,maxDropdownHeight:ee,nothingFoundMessage:ea,getStyles:e2,unstyled:f,scrollAreaProps:eu,onOptionClick:e4.handleOptionClick,onOptionMouseEnter:e4.handleOptionMouseEnter,onColumnsMouseLeave:()=>{"hover"===F&&e4.setActivePath(e4.value??[])},onPointerActivity:()=>e4.setKeyboardNav(!1),listId:am})});return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(m.Combobox,{store:e1,__staticSelector:"Cascader",classNames:e6,styles:e9,unstyled:f,readOnly:eC,size:N,attributes:eQ,width:al?"target":"max-content",position:"bottom-start",onOptionSubmit:e=>{let a=ai[Number(e)];a&&!a.disabled&&(e4.selectPath(a.path),e4.setActivePath(a.path),e3&&e1.closeDropdown())},...ed,children:[(0,v.jsx)(m.Combobox.Target,{targetType:K?"input":"button",withKeyboardNavigation:al,autoComplete:e7,children:(0,v.jsx)(d.InputBase,{id:eZ,__defaultRightSection:(0,v.jsx)(m.Combobox.Chevron,{size:N,error:eK,unstyled:f,color:em}),__clearSection:as,__clearable:au,__clearSectionMode:et,rightSection:ek,rightSectionPointerEvents:ej||"none",...ae,...e8,size:N,__staticSelector:"Cascader",disabled:ew,readOnly:eC||!K,value:K?ao:aa,onChange:e=>{at(e.currentTarget.value),ac&&e1.openDropdown()},onFocus:e=>{eh&&K&&ac&&e1.openDropdown(),ex?.(e)},onBlur:e=>{e1.closeDropdown(),eg?.(e)},onClick:e=>{ac&&(e4.setKeyboardNav(!1),K?e1.openDropdown():e1.toggleDropdown()),ev?.(e)},onKeyDown:e=>{if(eb?.(e),"Escape"===e.key)return void e1.closeDropdown();if(!al&&ac){if(!e1.dropdownOpened){if(("ArrowDown"===e.key||"ArrowUp"===e.key||"ArrowRight"===e.key||"Enter"===e.key||!K&&" "===e.key)&&(e.preventDefault(),e4.setKeyboardNav(!0),e1.openDropdown(),!e4.value&&("ArrowDown"===e.key||"ArrowUp"===e.key))){let a="ArrowDown"===e.key?O.findIndex(e=>!e.disabled):function(e){for(let a=e.length-1;a>=0;a-=1)if(!e[a].disabled)return a;return -1}(O);a>=0&&e4.setActivePath([O[a].value])}return}e4.handleColumnsKeyDown(e)?e.preventDefault():K||" "!==e.key||e.preventDefault()}},classNames:e6,styles:e9,unstyled:f,pointer:!K,error:eK,success:eU,attributes:eQ,className:t,style:c,variant:ef,radius:ey,leftSection:eL,leftSectionWidth:eM,leftSectionPointerEvents:eN,leftSectionProps:eO,rightSectionWidth:eP,rightSectionProps:eD,inputContainer:eS,inputWrapperOrder:eA,withAsterisk:eW,labelProps:eV,descriptionProps:e_,errorProps:eI,successProps:eT,wrapperProps:eB,description:eE,label:eF,withErrorStyles:e$,withSuccessStyles:ez,placeholder:eH,required:eY,mod:eq})}),ah]}),(0,v.jsx)(m.Combobox.HiddenInput,{value:e4.value,name:eG,form:eJ,disabled:ew,...ep})]})});N.classes={...d.InputBase.classes,...m.Combobox.classes,...P},N.displayName="@mantine/core/Cascader";var O=e.i(400117);let S={type:"code",component:function(){return(0,v.jsx)(N,{withColumns:(0,O.useMatches)({base:!1,sm:!0}),label:"Location",placeholder:"Pick location",data:o})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { Cascader, useMatches } from '@mantine/core';
import { data } from './data';

function Demo() {
  // Switch to a flat list on small screens
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader
      withColumns={withColumns}
      label="Location"
      placeholder="Pick location"
      data={data}
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:t}],maxWidth:340,centered:!0},A={type:"configurator",component:function(e){let a=(0,O.useMatches)({base:!1,sm:!0});return(0,v.jsx)(N,{...e,withColumns:a,placeholder:"Pick location",data:o})},code:`
import { Cascader, useMatches } from '@mantine/core';
import { data } from './data';

function Demo() {
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader
      {{props}}
      withColumns={withColumns}
      placeholder="Pick location"
      data={data}
    />
  );
}
`,centered:!0,maxWidth:340,controls:e.i(960831).inputControls},W={type:"code",component:function(){return(0,v.jsx)(N,{withColumns:(0,O.useMatches)({base:!1,sm:!0}),changeOnSelect:!0,label:"Location",placeholder:"Pick any level",data:o})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { Cascader, useMatches } from '@mantine/core';
import { data } from './data';

function Demo() {
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader
      withColumns={withColumns}
      changeOnSelect
      label="Location"
      placeholder="Pick any level"
      data={data}
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:t}],maxWidth:340,centered:!0},V={type:"code",component:function(){return(0,v.jsx)(N,{withColumns:(0,O.useMatches)({base:!1,sm:!0}),closeOnSelect:!1,label:"Location",placeholder:"Pick location",data:o})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { Cascader, useMatches } from '@mantine/core';
import { data } from './data';

function Demo() {
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader
      withColumns={withColumns}
      closeOnSelect={false}
      label="Location"
      placeholder="Pick location"
      data={data}
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:t}],maxWidth:340,centered:!0},_={type:"code",component:function(){return(0,v.jsx)(N,{label:"Location",placeholder:"Pick location",allowDeselect:!0,defaultValue:["asia","jp","tokyo"],data:o})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { Cascader } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <Cascader
      label="Location"
      placeholder="Pick location"
      allowDeselect
      defaultValue={['asia', 'jp', 'tokyo']}
      data={data}
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:t}],maxWidth:340,centered:!0},I={type:"code",component:function(){return(0,v.jsx)(N,{withColumns:(0,O.useMatches)({base:!1,sm:!0}),expandTrigger:"hover",label:"Location",placeholder:"Hover to expand",data:o})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { Cascader, useMatches } from '@mantine/core';
import { data } from './data';

function Demo() {
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader
      withColumns={withColumns}
      expandTrigger="hover"
      label="Location"
      placeholder="Hover to expand"
      data={data}
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:t}],maxWidth:340,centered:!0},T={type:"code",component:function(){return(0,v.jsx)(N,{withColumns:(0,O.useMatches)({base:!1,sm:!0}),maxDisplayedLevels:2,label:"Location",placeholder:"Pick location",defaultValue:["asia","jp","tokyo"],data:o})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { Cascader, useMatches } from '@mantine/core';
import { data } from './data';

function Demo() {
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader
      withColumns={withColumns}
      maxDisplayedLevels={2}
      label="Location"
      placeholder="Pick location"
      defaultValue={['asia', 'jp', 'tokyo']}
      data={data}
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:t}],maxWidth:340,centered:!0},B={type:"code",component:function(){return(0,v.jsx)(N,{withColumns:(0,O.useMatches)({base:!1,sm:!0}),searchable:!0,label:"Location",placeholder:"Search location",nothingFoundMessage:"Nothing found...",data:o})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { Cascader, useMatches } from '@mantine/core';
import { data } from './data';

function Demo() {
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader
      withColumns={withColumns}
      searchable
      label="Location"
      placeholder="Search location"
      nothingFoundMessage="Nothing found..."
      data={data}
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:t}],maxWidth:340,centered:!0},E={type:"code",component:function(){return(0,v.jsx)(N,{searchable:!0,label:"Location",placeholder:"Search location",nothingFoundMessage:"Nothing found...",data:o})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { Cascader } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <Cascader
      searchable
      label="Location"
      placeholder="Search location"
      nothingFoundMessage="Nothing found..."
      data={data}
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:t}],maxWidth:340,centered:!0},F={type:"code",component:function(){return(0,v.jsx)(N,{withColumns:!1,searchable:!0,label:"Location",placeholder:"Pick location",nothingFoundMessage:"Nothing found...",data:o})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { Cascader } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <Cascader
      withColumns={false}
      searchable
      label="Location"
      placeholder="Pick location"
      nothingFoundMessage="Nothing found..."
      data={data}
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:t}],maxWidth:340,centered:!0},K={type:"code",component:function(){return(0,v.jsx)(N,{withColumns:(0,O.useMatches)({base:!1,sm:!0}),clearable:!0,label:"Location",placeholder:"Pick location",defaultValue:["asia","jp","tokyo"],data:o})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { Cascader, useMatches } from '@mantine/core';
import { data } from './data';

function Demo() {
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader
      withColumns={withColumns}
      clearable
      label="Location"
      placeholder="Pick location"
      defaultValue={['asia', 'jp', 'tokyo']}
      data={data}
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:t}],maxWidth:340,centered:!0},U={type:"code",component:function(){return(0,v.jsx)(N,{label:"Location",placeholder:"Pick location",clearable:!0,clearSectionMode:"clear",defaultValue:["asia","jp","tokyo"],data:o})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { Cascader } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <Cascader
      label="Location"
      placeholder="Pick location"
      clearable
      clearSectionMode="clear"
      defaultValue={['asia', 'jp', 'tokyo']}
      data={data}
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:t}],maxWidth:340,centered:!0},$={type:"code",component:function(){return(0,v.jsx)(N,{checkIconPosition:"left",label:"Location",placeholder:"Pick location",defaultValue:["asia","jp","tokyo"],data:o})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { Cascader } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <Cascader
      checkIconPosition="left"
      label="Location"
      placeholder="Pick location"
      defaultValue={['asia', 'jp', 'tokyo']}
      data={data}
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:t}],maxWidth:340,centered:!0},z={type:"code",component:function(){return(0,v.jsx)(N,{withColumns:(0,O.useMatches)({base:!1,sm:!0}),label:"Location",placeholder:"Pick location",separator:"›",defaultValue:["asia","jp","tokyo"],formatValue:({options:e})=>e.map(e=>e.label).join(" › "),data:o})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { Cascader, useMatches } from '@mantine/core';
import { data } from './data';

function Demo() {
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader
      withColumns={withColumns}
      label="Location"
      placeholder="Pick location"
      separator="›"
      defaultValue={['asia', 'jp', 'tokyo']}
      formatValue={({ options }) => options.map((option) => option.label).join(' › ')}
      data={data}
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:t}],maxWidth:340,centered:!0};var G=e.i(554166);let J={type:"code",component:function(){return(0,v.jsx)(N,{withColumns:(0,O.useMatches)({base:!1,sm:!0}),label:"Location",placeholder:"Pick location",leftSectionPointerEvents:"none",leftSection:(0,v.jsx)(G.MapPinIcon,{size:16}),data:o})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { MapPinIcon } from '@phosphor-icons/react';
import { Cascader, useMatches } from '@mantine/core';
import { data } from './data';

function Demo() {
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader
      withColumns={withColumns}
      label="Location"
      placeholder="Pick location"
      leftSectionPointerEvents="none"
      leftSection={<MapPinIcon size={16} />}
      data={data}
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:t}],maxWidth:340,centered:!0};var R=e.i(257177),H=e.i(725695);let Y={jp:"🇯🇵",kr:"🇰🇷",fr:"🇫🇷",de:"🇩🇪",us:"🇺🇸",ca:"🇨🇦"},q=(e,a)=>(0,v.jsxs)(H.Group,{gap:"xs",justify:"space-between",wrap:"nowrap",flex:"1",children:[(0,v.jsxs)(H.Group,{gap:6,wrap:"nowrap",children:[1===a&&(0,v.jsx)("span",{children:Y[e.value]}),(0,v.jsx)("span",{children:e.label})]}),0===a&&(0,v.jsxs)(R.Badge,{size:"xs",variant:"light",color:"gray",children:[function e(a){return a.children&&0!==a.children.length?a.children.reduce((a,o)=>a+e(o),0):1}(e)," cities"]})]}),Q={type:"code",component:function(){return(0,v.jsx)(N,{withColumns:(0,O.useMatches)({base:!1,sm:!0}),label:"Location",placeholder:"Pick location",renderOption:q,data:o})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { Badge, Cascader, CascaderOption, CascaderProps, Group, useMatches } from '@mantine/core';
import { data } from './data';

const flags: Record<string, string> = {
  jp: '🇯🇵', kr: '🇰🇷', fr: '🇫🇷', de: '🇩🇪', us: '🇺🇸', ca: '🇨🇦',
};

function countCities(option: CascaderOption): number {
  if (!option.children || option.children.length === 0) {
    return 1;
  }
  return option.children.reduce((acc, child) => acc + countCities(child), 0);
}

// Regions display the number of cities, countries display a flag, cities display nothing extra
const renderCascaderOption: CascaderProps['renderOption'] = (option, level) => (
  <Group gap="xs" justify="space-between" wrap="nowrap" flex="1">
    <Group gap={6} wrap="nowrap">
      {level === 1 && <span>{flags[option.value]}</span>}
      <span>{option.label}</span>
    </Group>
    {level === 0 && (
      <Badge size="xs" variant="light" color="gray">
        {countCities(option)} cities
      </Badge>
    )}
  </Group>
);

function Demo() {
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader
      withColumns={withColumns}
      label="Location"
      placeholder="Pick location"
      renderOption={renderCascaderOption}
      data={data}
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:t}],maxWidth:360,centered:!0},X={type:"code",component:function(){return(0,v.jsx)(N,{withColumns:(0,O.useMatches)({base:!1,sm:!0}),columnWidth:140,maxDropdownHeight:200,label:"Location",placeholder:"Pick location",data:o})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { Cascader, useMatches } from '@mantine/core';
import { data } from './data';

function Demo() {
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader
      withColumns={withColumns}
      columnWidth={140}
      maxDropdownHeight={200}
      label="Location"
      placeholder="Pick location"
      data={data}
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:t}],maxWidth:340,centered:!0},Z=[{value:"asia",label:"Asia",children:[{value:"jp",label:"Japan",children:[{value:"tokyo",label:"Tokyo"}]},{value:"kr",label:"South Korea",disabled:!0}]},{value:"antarctica",label:"Antarctica",disabled:!0}],ee={type:"code",component:function(){return(0,v.jsx)(N,{withColumns:(0,O.useMatches)({base:!1,sm:!0}),label:"Location",placeholder:"Pick location",data:Z})},code:`
import { Cascader, CascaderOption, useMatches } from '@mantine/core';

const data: CascaderOption[] = [
  {
    value: 'asia',
    label: 'Asia',
    children: [
      { value: 'jp', label: 'Japan', children: [{ value: 'tokyo', label: 'Tokyo' }] },
      { value: 'kr', label: 'South Korea', disabled: true },
    ],
  },
  { value: 'antarctica', label: 'Antarctica', disabled: true },
];

function Demo() {
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader
      withColumns={withColumns}
      label="Location"
      placeholder="Pick location"
      data={data}
    />
  );
}
`,maxWidth:340,centered:!0},ea=Array.from({length:30},(e,a)=>({value:`city-${a+1}`,label:`City ${a+1}`})),eo=[{value:"asia",label:"Asia",children:[{value:"jp",label:"Japan",children:ea}]},{value:"europe",label:"Europe",children:[{value:"fr",label:"France",children:ea}]}],et={type:"code",component:function(){return(0,v.jsx)(N,{label:"Location",placeholder:"Pick location",defaultValue:["asia","jp"],maxDropdownHeight:180,data:eo})},code:`
import { Cascader, CascaderOption } from '@mantine/core';

const cities = Array.from({ length: 30 }, (_, index) => ({
  value: \`city-\${index + 1}\`,
  label: \`City \${index + 1}\`,
}));

const data: CascaderOption[] = [
  { value: 'asia', label: 'Asia', children: [{ value: 'jp', label: 'Japan', children: cities }] },
  { value: 'europe', label: 'Europe', children: [{ value: 'fr', label: 'France', children: cities }] },
];

function Demo() {
  return (
    <Cascader
      label="Location"
      placeholder="Pick location"
      defaultValue={['asia', 'jp']}
      maxDropdownHeight={180}
      data={data}
    />
  );
}
`,maxWidth:340,centered:!0};var en=e.i(485108),el=e.i(392862);let er={type:"code",component:function(){return(0,v.jsxs)(el.Popover,{width:320,position:"bottom",withArrow:!0,shadow:"md",children:[(0,v.jsx)(el.Popover.Target,{children:(0,v.jsx)(en.Button,{children:"Toggle popover"})}),(0,v.jsx)(el.Popover.Dropdown,{children:(0,v.jsx)(N,{withColumns:!1,label:"Location",placeholder:"Pick location",comboboxProps:{withinPortal:!1},data:o})})]})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { Button, Cascader, Popover } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <Popover width={320} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Cascader
          withColumns={false}
          label="Location"
          placeholder="Pick location"
          comboboxProps={{ withinPortal: false }}
          data={data}
        />
      </Popover.Dropdown>
    </Popover>
  );
}
`},{fileName:"data.ts",language:"tsx",code:t}],centered:!0},ei={type:"code",component:function(){return(0,v.jsx)(N,{label:"Location",placeholder:"Pick location",comboboxProps:{position:"top-start"},data:o})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { Cascader } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <Cascader
      label="Location"
      placeholder="Pick location"
      comboboxProps={{ position: 'top-start' }}
      data={data}
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:t}],maxWidth:340,centered:!0},ec={type:"code",component:function(){return(0,v.jsx)(N,{withColumns:!1,label:"Location",placeholder:"Pick location",comboboxProps:{width:220,position:"bottom-start"},data:o})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { Cascader } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <Cascader
      withColumns={false}
      label="Location"
      placeholder="Pick location"
      comboboxProps={{ width: 220, position: 'bottom-start' }}
      data={data}
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:t}],maxWidth:340,centered:!0},es={type:"code",component:function(){return(0,v.jsx)(N,{label:"Location",placeholder:"Pick location",comboboxProps:{offset:0},data:o})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { Cascader } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <Cascader
      label="Location"
      placeholder="Pick location"
      comboboxProps={{ offset: 0 }}
      data={data}
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:t}],maxWidth:340,centered:!0},ed={type:"code",component:function(){return(0,v.jsx)(N,{withColumns:!1,label:"Location",placeholder:"Pick location",comboboxProps:{dropdownPadding:12},data:o})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { Cascader } from '@mantine/core';
import { data } from './data';

// Dropdown padding is only applied to the flat list (withColumns={false});
// in columns mode each column manages its own padding.
function Demo() {
  return (
    <Cascader
      withColumns={false}
      label="Location"
      placeholder="Pick location"
      comboboxProps={{ dropdownPadding: 12 }}
      data={data}
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:t}],maxWidth:340,centered:!0},eu={type:"code",component:function(){return(0,v.jsx)(N,{label:"Location",placeholder:"Pick location",comboboxProps:{shadow:"md"},data:o})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { Cascader } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <Cascader
      label="Location"
      placeholder="Pick location"
      comboboxProps={{ shadow: 'md' }}
      data={data}
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:t}],maxWidth:340,centered:!0},em={type:"code",component:function(){return(0,v.jsx)(N,{label:"Location",placeholder:"Pick location",comboboxProps:{transitionProps:{transition:"pop",duration:200}},data:o})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { Cascader } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <Cascader
      label="Location"
      placeholder="Pick location"
      comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
      data={data}
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:t}],maxWidth:340,centered:!0};var ep=e.i(507870);let eh=`
import { Cascader } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <Cascader
      {{props}}
      label="Location"
      placeholder="Pick location"
      data={data}
    />
  );
}
`,ef={type:"styles-api",data:ep.CascaderStylesApi,component:function(e){return(0,v.jsx)(N,{...e,defaultValue:["asia","jp"],defaultDropdownOpened:!0,label:"Location",placeholder:"Pick location",comboboxProps:{withinPortal:!1},data:o})},code:eh,centered:!0,maxWidth:340},eb={type:"code",component:function(){return(0,v.jsx)(N,{withColumns:(0,O.useMatches)({base:!1,sm:!0}),disabled:!0,label:"Location",placeholder:"Pick location",data:o})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { Cascader, useMatches } from '@mantine/core';
import { data } from './data';

function Demo() {
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader
      withColumns={withColumns}
      disabled
      label="Location"
      placeholder="Pick location"
      data={data}
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:t}],maxWidth:340,centered:!0},ex={type:"code",component:function(){return(0,v.jsx)(N,{withColumns:(0,O.useMatches)({base:!1,sm:!0}),readOnly:!0,label:"Location",placeholder:"Pick location",defaultValue:["asia","jp","tokyo"],data:o})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { Cascader, useMatches } from '@mantine/core';
import { data } from './data';

function Demo() {
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader
      withColumns={withColumns}
      readOnly
      label="Location"
      placeholder="Pick location"
      defaultValue={['asia', 'jp', 'tokyo']}
      data={data}
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:t}],maxWidth:340,centered:!0},eg={type:"code",component:function(){return(0,v.jsx)(N,{label:"Location",placeholder:"Pick location",loading:!0,data:o})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { Cascader } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <Cascader
      label="Location"
      placeholder="Pick location"
      loading
      data={data}
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:t}],maxWidth:340,centered:!0},ev={type:"code",component:function(){return(0,v.jsx)(N,{withColumns:(0,O.useMatches)({base:!1,sm:!0}),label:"Location",placeholder:"Pick location",error:"Pick a valid location",data:o})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { Cascader, useMatches } from '@mantine/core';
import { data } from './data';

function Demo() {
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader
      withColumns={withColumns}
      label="Location"
      placeholder="Pick location"
      error="Pick a valid location"
      data={data}
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:t}],maxWidth:340,centered:!0},eC={type:"code",component:function(){return(0,v.jsx)(N,{label:"Location",placeholder:"Pick location",defaultValue:["asia","jp","tokyo"],success:"Looks good!",data:o})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { Cascader } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <Cascader
      label="Location"
      placeholder="Pick location"
      defaultValue={['asia', 'jp', 'tokyo']}
      success="Looks good!"
      data={data}
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:t}],maxWidth:340,centered:!0};var ew=(0,a.__exportAll)({allowDeselect:()=>_,changeOnSelect:()=>W,checkIcon:()=>$,clearSectionMode:()=>U,clearable:()=>K,closeOnSelect:()=>V,columnWidth:()=>X,configurator:()=>A,disabled:()=>eb,disabledOptions:()=>ee,dropdownAnimation:()=>em,dropdownOffset:()=>es,dropdownPadding:()=>ed,dropdownPosition:()=>ei,dropdownShadow:()=>eu,dropdownWidth:()=>ec,error:()=>ev,flatList:()=>F,formatValue:()=>z,hoverExpand:()=>I,loading:()=>eg,maxDisplayedLevels:()=>T,nothingFound:()=>E,readOnly:()=>ex,renderOption:()=>Q,scrollArea:()=>et,searchable:()=>B,sections:()=>J,stylesApi:()=>ef,success:()=>eC,usage:()=>S,withinPopover:()=>er});e.s(["CascaderDemos",0,ew],959870)}]);