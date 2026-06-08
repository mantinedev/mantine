(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,622048,e=>{"use strict";var a=e.i(44091),t=e.i(62904),l=e.i(391466),o=e.i(425254),r=e.i(275519),n=e.i(19300),i=e.i(586488),d=e.i(734858),c=e.i(711976),s=e.i(122057),u=e.i(217633),m=e.i(96618),p=e.i(183988),f=e.i(488400),h=e.i(127262),x=e.i(401570),g=e.i(76407);function b(e,a,t){if(0===e.length)return[];switch(t){case"child":default:return e;case"all":return(0,g.getAllCheckedNodes)(a,e).result.filter(e=>e.checked).map(e=>e.value);case"parent":return function e(a,t){let l=[];for(let o of a)(0,p.isNodeChecked)(o.value,a,t)?l.push(o.value):Array.isArray(o.children)&&o.children.length>0&&l.push(...e(o.children,t));return l}(a,e)}}var v=e.i(462138),S=e.i(956031),T=e.i(885381),k=e.i(391398);function y({node:e,level:a,expanded:t,hasChildren:l,selected:o,checked:r,indeterminate:n,showCheckbox:i,isLastChild:d,lineGuides:s,withLines:u,onToggleExpand:m,renderNode:p,chevronAriaLabels:f}){let h=(a-1)*20,x=a=>{a.stopPropagation(),a.preventDefault(),m(e.value)},g=p?p({node:e,level:a,expanded:t,hasChildren:l,selected:o,checked:r,indeterminate:n}):null,b=u&&a>1?(0,k.jsxs)(k.Fragment,{children:[s.map((e,a)=>e?(0,k.jsx)("span",{className:"m_57207d5d",style:{insetInlineStart:8+(a+1)*20-10}},`g${a}`):null),(0,k.jsx)("span",{className:"m_41b9db0b","data-last":d||void 0,style:{insetInlineStart:8+(a-1)*20-10}}),(0,k.jsx)("span",{className:"m_1246e79",style:{insetInlineStart:8+(a-1)*20-10,width:10}})]}):null,P=o||r,D=!i&&P,N=i?n&&!r?"mixed":r:void 0;return(0,k.jsxs)(c.Combobox.Option,{value:e.value,disabled:e.nodeProps?.disabled,active:P,className:"m_28bb748",style:{paddingInlineStart:8+h+(u&&a>1?5:0)+6*!l},"aria-selected":P,"aria-level":a,"aria-expanded":l?t:void 0,"aria-checked":N,children:[b,g||(0,k.jsxs)(k.Fragment,{children:[l&&(0,k.jsx)("span",{className:"m_aa3e3f86","data-expanded":t||void 0,onClick:x,onKeyDown:e=>{"Enter"===e.key&&x(e)},onMouseDown:e=>{e.preventDefault()},role:"button",tabIndex:-1,"aria-label":t?f?.collapse??"Collapse":f?.expand??"Expand",children:(0,k.jsx)(v.AccordionChevron,{size:"80%"})}),i&&(0,k.jsx)(T.CheckboxIndicator,{checked:r||n,indeterminate:!r&&n,size:"18px"}),(0,k.jsx)("span",{className:"m_ffe3a9c1",children:e.label}),D&&(0,k.jsx)(S.CheckIcon,{className:"m_eaa4cdee"})]})]})}y.displayName="@mantine/core/TreeSelectOption";var P=e.i(191788),D=e.i(107315),N=e.i(579560);let j={mode:"single",allowDeselect:!0,checkedStrategy:"child",maxValues:1/0,hiddenInputValuesDivider:",",clearSearchOnChange:!0,openOnFocus:!0,size:"sm",withLines:!0},w={xs:41,sm:50,md:60,lg:72,xl:89},C=(0,r.genericFactory)(e=>{let r=(0,a.useProps)(["Input","InputWrapper","TreeSelect"],j,e),{classNames:g,className:v,style:S,styles:T,unstyled:C,vars:A,size:E,data:Y,mode:_,value:I,defaultValue:O,onChange:V,checkStrictly:W,checkedStrategy:F,defaultExpandedValues:B,defaultExpandAll:M,expandedValues:z,onExpandedChange:G,expandOnClick:L,searchable:R,searchValue:H,defaultSearchValue:K,onSearchChange:U,filter:q,nothingFoundMessage:$,allowDeselect:Z,clearable:J,clearSectionMode:Q,clearButtonProps:X,maxValues:ee,maxDisplayedValues:ea,maxDisplayedValuesContent:et,onRemove:el,onClear:eo,renderNode:er,withLines:en,hiddenInputProps:ei,hiddenInputValuesDivider:ed,scrollAreaProps:ec,chevronColor:es,maxDropdownHeight:eu,dropdownOpened:em,defaultDropdownOpened:ep,onDropdownOpen:ef,onDropdownClose:eh,comboboxProps:ex,clearSearchOnChange:eg,openOnFocus:eb,chevronAriaLabels:ev,variant:eS,onKeyDown:eT,onFocus:ek,onBlur:ey,onClick:eP,readOnly:eD,disabled:eN,radius:ej,rightSection:ew,rightSectionWidth:eC,rightSectionPointerEvents:eA,rightSectionProps:eE,leftSection:eY,leftSectionWidth:e_,leftSectionPointerEvents:eI,leftSectionProps:eO,inputContainer:eV,inputWrapperOrder:eW,withAsterisk:eF,labelProps:eB,descriptionProps:eM,errorProps:ez,wrapperProps:eG,description:eL,label:eR,error:eH,withErrorStyles:eK,name:eU,form:eq,id:e$,placeholder:eZ,required:eJ,mod:eQ,attributes:eX,...e0}=r,e1="multiple"===_||"checkbox"===_,e3="checkbox"===_,e4=(0,D.useId)(e$),e8=(0,d.useCombobox)({opened:em,defaultOpened:ep,onDropdownOpen:()=>{ef?.(),e8.updateSelectedOptionIndex("active",{scrollIntoView:!0})},onDropdownClose:()=>{eh?.(),e8.resetSelectedOption()}}),e2=(0,P.useMemo)(()=>M?(0,h.getTreeExpandedState)(Y,"*"):B?(0,h.getTreeExpandedState)(Y,B):(0,h.getTreeExpandedState)(Y,[]),[]),[e6,e9]=(0,N.useUncontrolled)({value:(0,P.useCallback)(e=>{if(e)return(0,h.getTreeExpandedState)(Y,e)},[Y])(z),defaultValue:e2,finalValue:{},onChange:e=>{G&&G(Object.entries(e).filter(([,e])=>e).map(([e])=>e))}}),e5=(0,P.useCallback)(e=>{e9({...e6,[e]:!e6[e]})},[e6]),[e7,ae]=(0,N.useUncontrolled)({value:H,defaultValue:K,finalValue:(0,P.useMemo)(()=>{if("single"!==_||!O)return"";let e=(0,m.findTreeNode)(O,Y);return e&&"string"==typeof e.label?e.label:""},[]),onChange:U}),aa=e=>{ae(e),e8.resetSelectedOption()},[at,al]=(0,N.useUncontrolled)({value:I,defaultValue:O,finalValue:e1?[]:null,onChange:V}),ao=(0,P.useMemo)(()=>{if(!e3||!at||!Array.isArray(at))return[];if(W)return at;let e=new Set;for(let a of at)for(let t of(0,m.getChildrenNodesValues)(a,Y))e.add(t);return Array.from(e)},[e3,at,Y,W]),ar=(0,P.useMemo)(()=>{if(!R||!e7)return Y;if("single"===_&&at){let e=(0,m.findTreeNode)(at,Y);if(e&&e7===("string"==typeof e.label?e.label:""))return Y}return(0,x.filterTreeData)(Y,e7,q)},[Y,e7,q,R,_,at]),an=(0,P.useMemo)(()=>{if(e7&&ar!==Y){let e={...e6},a=t=>{for(let l of t)Array.isArray(l.children)&&l.children.length>0&&(e[l.value]=!0,a(l.children))};return a(ar),e}return e6},[ar,e6,e7,Y]),ai=(0,P.useMemo)(()=>{let e;return!function e(a,t,l,o,r,n){for(let i=0;i<t.length;i++){let d=t[i],c=i===t.length-1,s=Array.isArray(d.children),u=!!d.hasChildren&&!s,m=s||u,p=l[d.value]||!1;if(a.push({node:d,level:r,parent:o,hasChildren:m,expanded:p,isLastChild:c,lineGuides:n}),p&&s){let t=r>=2?[...n,!c]:[];e(a,d.children,l,d.value,r+1,t)}}}(e=[],ar,an,null,1,[]),e},[ar,an]),ad=(0,P.useRef)(ai);ad.current=ai;let ac=(0,P.useMemo)(()=>{let e={},a=t=>{for(let l of t)e[l.value]=l,Array.isArray(l.children)&&a(l.children)};return a(Y),e},[Y]),as=e=>{let a=ac[e];return a&&"string"==typeof a.label?a.label:e},au=(0,l.useStyles)({name:"TreeSelect",classes:{},props:r,classNames:g,styles:T,unstyled:C,attributes:eX}),{resolvedClassNames:am,resolvedStyles:ap}=(0,t.useResolvedStylesApi)({props:r,styles:T,classNames:g}),{styleProps:af,rest:{type:ah,autoComplete:ax,...ag}}=(0,o.extractStyleProps)(e0),ab=e=>{if("single"===_){if(L){let a=(0,m.findTreeNode)(e,Y);if(a&&Array.isArray(a.children)&&a.children.length>0)return void e5(e)}let a=Z&&e===at?null:e;al(a),e8.closeDropdown(),eg&&aa(a?as(a):"")}else if("multiple"===_){if(L){let a=(0,m.findTreeNode)(e,Y);if(a&&Array.isArray(a.children)&&a.children.length>0)return void e5(e)}let a=at||[];if(a.includes(e))al(a.filter(a=>a!==e)),el?.(e);else{if(!(a.length<(ee??1/0)))return;al([...a,e])}eg&&ae("")}else if("checkbox"===_){let a,t=W?ao.includes(e):(0,p.isNodeChecked)(e,Y,ao);if(W)a=t?ao.filter(a=>a!==e):[...ao,e];else{let l=(0,m.getChildrenNodesValues)(e,Y);a=t?ao.filter(e=>!l.includes(e)):[...new Set([...ao,...l])]}let l=b(a,Y,F);if(!t&&l.length>(ee??1/0))return;if(al(l),eg&&ae(""),L){let a=(0,m.findTreeNode)(e,Y);a&&Array.isArray(a.children)&&a.children.length>0&&!e6[e]&&e5(e)}}},av=e=>{if(eT?.(e)," "===e.key&&!R&&e1&&(e.preventDefault(),e8.toggleDropdown()),"Backspace"===e.key&&0===e7.length&&e1){let e=at||[];if(e.length>0){let a=e[e.length-1];el?.(a),al(e.slice(0,-1))}}if(!e8.dropdownOpened)return;let a=e8.getSelectedOptionIndex();if(a<0||a>=ad.current.length)return;let t=ad.current[a];if("ArrowRight"===e.key&&t.hasChildren&&!t.expanded&&(e.preventDefault(),e5(t.node.value)),"ArrowLeft"===e.key){if(t.hasChildren&&t.expanded)e.preventDefault(),e5(t.node.value);else if(t.parent){e.preventDefault();let a=ad.current.findIndex(e=>e.node.value===t.parent);a>=0&&e8.selectOption(a)}}};(0,P.useEffect)(()=>{"single"===_&&R&&(null===I?aa(""):"string"==typeof I&&aa(as(I)))},[I]);let aS=(0,P.useRef)(!1);(0,P.useEffect)(()=>{if(e8.dropdownOpened&&!aS.current&&R&&at){let e=Array.isArray(at)?at:[at],a={...e6},t=!1;for(let l of e){let e=function e(a,t){for(let l of t){if(l.value===a)return[];if(Array.isArray(l.children)){let t=e(a,l.children);if(null!==t)return[l.value,...t]}}return null}(l,Y);if(e)for(let l of e)a[l]||(a[l]=!0,t=!0)}t&&(e9(a),requestAnimationFrame(()=>{e8.updateSelectedOptionIndex("active",{scrollIntoView:!0})}))}aS.current=e8.dropdownOpened});let aT=(0,k.jsx)(c.Combobox.ClearButton,{...X,onClear:()=>{eo?.(),al(e1?[]:null),aa(""),e8.focusTarget()}}),ak=e1?Array.isArray(at)&&at.length>0:null!=at&&""!==at,ay=J&&ak&&!eN&&!eD,aP=(0,P.useMemo)(()=>"single"===_&&at?as(at):"",[_,at,ac]),aD=(0,P.useMemo)(()=>e1&&Array.isArray(at)?at:[],[e1,at]),aN=ay&&e1?{paddingInlineEnd:w[E]??w.sm}:void 0,aj=null!=ea?aD.slice(0,ea):aD,aw=null!=ea?Math.max(0,aD.length-ea):0,aC=aj.map((e,a)=>(0,k.jsx)(s.Pill,{withRemoveButton:!eD,onRemove:()=>{if(e3){let a=W?[e]:(0,m.getChildrenNodesValues)(e,Y);al(b(ao.filter(e=>!a.includes(e)),Y,F))}else al(at.filter(a=>a!==e));el?.(e)},unstyled:C,disabled:eN,...au("pill"),children:as(e)},`${e}-${a}`));if(aw>0){let e="function"==typeof et?et(aw):et||`+${aw} more`;aC.push((0,k.jsx)(s.Pill,{unstyled:C,disabled:eN,...au("pill"),children:e},"__overflow"))}let aA=0===ai.length,aE=ai.map(e=>{let a="single"===_?at===e.node.value:"multiple"===_&&(at||[]).includes(e.node.value),t=!!e3&&(W?ao.includes(e.node.value):(0,p.isNodeChecked)(e.node.value,Y,ao)),l=!!e3&&!W&&(0,f.isNodeIndeterminate)(e.node.value,Y,ao);return(0,k.jsx)(y,{node:e.node,level:e.level,expanded:e.expanded,hasChildren:e.hasChildren,selected:a,checked:t,indeterminate:l,showCheckbox:e3,isLastChild:e.isLastChild,lineGuides:e.lineGuides,withLines:!!en,onToggleExpand:e5,renderNode:er,chevronAriaLabels:ev},e.node.value)}),aY=(0,k.jsx)(c.Combobox.Dropdown,{hidden:eD||eN,children:(0,k.jsxs)(c.Combobox.Options,{className:"m_529d33e8","aria-multiselectable":e1||void 0,children:[(0,k.jsx)(n.ScrollArea.Autosize,{mah:eu??220,type:"scroll",scrollbarSize:"var(--combobox-padding)",offsetScrollbars:"y",...ec,children:aE}),aA&&$&&(0,k.jsx)(c.Combobox.Empty,{children:$})]})});return e1?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(c.Combobox,{store:e8,classNames:am,styles:ap,unstyled:C,size:E,readOnly:eD,__staticSelector:"TreeSelect",attributes:eX,onOptionSubmit:ab,...ex,children:[(0,k.jsx)(c.Combobox.DropdownTarget,{children:(0,k.jsx)(u.PillsInput,{...af,__staticSelector:"TreeSelect",classNames:am,styles:ap,unstyled:C,size:E,className:v,style:S,variant:eS,disabled:eN,radius:ej,__defaultRightSection:(0,k.jsx)(c.Combobox.Chevron,{size:E,error:eH,unstyled:C,color:es}),__clearSection:aT,__clearable:ay,__clearSectionMode:Q,rightSection:ew,rightSectionPointerEvents:eA||"none",rightSectionWidth:eC,rightSectionProps:eE,leftSection:eY,leftSectionWidth:e_,leftSectionPointerEvents:eI,leftSectionProps:eO,inputContainer:eV,inputWrapperOrder:eW,withAsterisk:eF,labelProps:eB,descriptionProps:eM,errorProps:ez,wrapperProps:eG,description:eL,label:eR,error:eH,withErrorStyles:eK,__stylesApiProps:{...r,rightSectionPointerEvents:eA||"none",multiline:!0},pointer:!R,onClick:()=>R?e8.openDropdown():e8.toggleDropdown(),"data-expanded":e8.dropdownOpened||void 0,id:e4,required:eJ,mod:eQ,attributes:eX,children:(0,k.jsxs)(s.Pill.Group,{attributes:eX,disabled:eN,unstyled:C,...au("pillsList",{style:aN}),children:[aC,(0,k.jsx)(c.Combobox.EventsTarget,{autoComplete:ax,children:(0,k.jsx)(u.PillsInput.Field,{...ag,id:e4,placeholder:eZ,type:R||eZ?"visible":"hidden",...au("inputField"),unstyled:C,onFocus:e=>{ek?.(e),eb&&R&&e8.openDropdown()},onBlur:e=>{ey?.(e),e8.closeDropdown(),aa("")},onKeyDown:av,value:e7,onChange:e=>{aa(e.currentTarget.value),R&&e8.openDropdown()},disabled:eN,readOnly:eD||!R,pointer:!R})})]})})}),aY]}),(0,k.jsx)(c.Combobox.HiddenInput,{name:eU,valuesDivider:ed,value:at,form:eq,disabled:eN,...ei})]}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(c.Combobox,{store:e8,__staticSelector:"TreeSelect",classNames:am,styles:ap,unstyled:C,readOnly:eD,size:E,attributes:eX,onOptionSubmit:ab,...ex,children:[(0,k.jsx)(c.Combobox.Target,{targetType:R?"input":"button",autoComplete:ax,children:(0,k.jsx)(i.InputBase,{id:e4,__defaultRightSection:(0,k.jsx)(c.Combobox.Chevron,{size:E,error:eH,unstyled:C,color:es}),__clearSection:aT,__clearable:ay,__clearSectionMode:Q,rightSection:ew,rightSectionPointerEvents:eA||"none",...ag,...af,size:E,__staticSelector:"TreeSelect",disabled:eN,readOnly:eD||!R,value:R?e7:aP,onChange:e=>{aa(e.currentTarget.value),e8.openDropdown()},onFocus:e=>{eb&&R&&e8.openDropdown(),ek?.(e)},onBlur:e=>{R&&e8.closeDropdown(),aa(at?as(at):""),ey?.(e)},onClick:e=>{R?e8.openDropdown():e8.toggleDropdown(),eP?.(e)},onKeyDown:av,classNames:am,styles:ap,unstyled:C,pointer:!R,error:eH,attributes:eX,className:v,style:S,variant:eS,radius:ej,leftSection:eY,leftSectionWidth:e_,leftSectionPointerEvents:eI,leftSectionProps:eO,rightSectionWidth:eC,rightSectionProps:eE,inputContainer:eV,inputWrapperOrder:eW,withAsterisk:eF,labelProps:eB,descriptionProps:eM,errorProps:ez,wrapperProps:eG,description:eL,label:eR,withErrorStyles:eK,placeholder:eZ,required:eJ,mod:eQ})}),aY]}),(0,k.jsx)(c.Combobox.HiddenInput,{value:at,name:eU,form:eq,disabled:eN,...ei})]})});C.classes={...i.InputBase.classes,...c.Combobox.classes},C.displayName="@mantine/core/TreeSelect",e.s(["TreeSelect",0,C],622048)},832390,e=>{"use strict";var a=e.i(648863);let t=[{value:"electronics",label:"Electronics",children:[{value:"phones",label:"Phones",children:[{value:"iphone",label:"iPhone"},{value:"samsung",label:"Samsung Galaxy"},{value:"pixel",label:"Google Pixel"}]},{value:"laptops",label:"Laptops",children:[{value:"macbook",label:"MacBook"},{value:"thinkpad",label:"ThinkPad"}]},{value:"headphones",label:"Headphones"}]},{value:"groceries",label:"Groceries",children:[{value:"fruits",label:"Fruits",children:[{value:"apples",label:"Apples"},{value:"bananas",label:"Bananas"}]},{value:"vegetables",label:"Vegetables",children:[{value:"carrots",label:"Carrots"},{value:"broccoli",label:"Broccoli"}]}]},{value:"books",label:"Books"},{value:"toys",label:"Toys"}],l=`import { TreeNodeData } from '@mantine/core';

export const data: TreeNodeData[] = [
  {
    value: 'electronics',
    label: 'Electronics',
    children: [
      {
        value: 'phones',
        label: 'Phones',
        children: [
          { value: 'iphone', label: 'iPhone' },
          { value: 'samsung', label: 'Samsung Galaxy' },
          { value: 'pixel', label: 'Google Pixel' },
        ],
      },
      {
        value: 'laptops',
        label: 'Laptops',
        children: [
          { value: 'macbook', label: 'MacBook' },
          { value: 'thinkpad', label: 'ThinkPad' },
        ],
      },
      { value: 'headphones', label: 'Headphones' },
    ],
  },
  {
    value: 'groceries',
    label: 'Groceries',
    children: [
      {
        value: 'fruits',
        label: 'Fruits',
        children: [
          { value: 'apples', label: 'Apples' },
          { value: 'bananas', label: 'Bananas' },
        ],
      },
      {
        value: 'vegetables',
        label: 'Vegetables',
        children: [
          { value: 'carrots', label: 'Carrots' },
          { value: 'broccoli', label: 'Broccoli' },
        ],
      },
    ],
  },
  { value: 'books', label: 'Books' },
  { value: 'toys', label: 'Toys' },
];`;var o=e.i(622048),r=e.i(391398);let n={type:"code",component:function(){return(0,r.jsx)(o.TreeSelect,{label:"Your favorite item",placeholder:"Pick value",data:t})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <TreeSelect
      label="Your favorite item"
      placeholder="Pick value"
      data={data}
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:l}],maxWidth:340,centered:!0},i={type:"code",component:function(){return(0,r.jsx)(o.TreeSelect,{label:"Your favorite items",placeholder:"Pick values",data:t,mode:"multiple",defaultExpandAll:!0})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <TreeSelect
      label="Your favorite items"
      placeholder="Pick values"
      data={data}
      mode="multiple"
      defaultExpandAll
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:l}],maxWidth:340,centered:!0},d={type:"code",component:function(){return(0,r.jsx)(o.TreeSelect,{label:"Select categories",placeholder:"Pick values",data:t,mode:"checkbox",defaultExpandAll:!0})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <TreeSelect
      label="Select categories"
      placeholder="Pick values"
      data={data}
      mode="checkbox"
      defaultExpandAll
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:l}],maxWidth:340,centered:!0},c={type:"code",component:function(){return(0,r.jsx)(o.TreeSelect,{label:"Your favorite item",placeholder:"Pick value",data:t,searchable:!0})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <TreeSelect
      label="Your favorite item"
      placeholder="Pick value"
      data={data}
      searchable
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:l}],maxWidth:340,centered:!0},s={type:"code",component:function(){return(0,r.jsx)(o.TreeSelect,{label:"Your favorite item",placeholder:"Pick value",data:t,defaultValue:"iphone",defaultExpandedValues:["electronics","phones"],clearable:!0})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <TreeSelect
      label="Your favorite item"
      placeholder="Pick value"
      data={data}
      defaultValue="iphone"
      defaultExpandedValues={['electronics', 'phones']}
      clearable
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:l}],maxWidth:340,centered:!0},u={type:"code",component:function(){return(0,r.jsx)(o.TreeSelect,{label:"Your favorite item",placeholder:"Pick value",data:t,expandOnClick:!0})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <TreeSelect
      label="Your favorite item"
      placeholder="Pick value"
      data={data}
      expandOnClick
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:l}],maxWidth:340,centered:!0},m={type:"code",component:function(){return(0,r.jsx)(o.TreeSelect,{label:"Select items",placeholder:"Pick values",data:t,mode:"checkbox",checkStrictly:!0,defaultExpandAll:!0})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <TreeSelect
      label="Select items"
      placeholder="Pick values"
      data={data}
      mode="checkbox"
      checkStrictly
      defaultExpandAll
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:l}],maxWidth:340,centered:!0};var p=e.i(191788),f=e.i(671640);let h={type:"code",component:function(){let[e,a]=(0,p.useState)([]),[l,n]=(0,p.useState)([]),[i,d]=(0,p.useState)([]);return(0,r.jsxs)(f.Stack,{children:[(0,r.jsx)(o.TreeSelect,{label:"checkedStrategy: child (default)",placeholder:"Pick values",data:t,mode:"checkbox",checkedStrategy:"child",defaultExpandAll:!0,value:e,onChange:a}),(0,r.jsx)(o.TreeSelect,{label:"checkedStrategy: all",placeholder:"Pick values",data:t,mode:"checkbox",checkedStrategy:"all",defaultExpandAll:!0,value:l,onChange:n}),(0,r.jsx)(o.TreeSelect,{label:"checkedStrategy: parent",placeholder:"Pick values",data:t,mode:"checkbox",checkedStrategy:"parent",defaultExpandAll:!0,value:i,onChange:d})]})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { useState } from 'react';
import { Stack, TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  const [childValue, setChildValue] = useState<string[]>([]);
  const [allValue, setAllValue] = useState<string[]>([]);
  const [parentValue, setParentValue] = useState<string[]>([]);

  return (
    <Stack>
      <TreeSelect
        label="checkedStrategy: child (default)"
        placeholder="Pick values"
        data={data}
        mode="checkbox"
        checkedStrategy="child"
        defaultExpandAll
        value={childValue}
        onChange={setChildValue}
      />
      <TreeSelect
        label="checkedStrategy: all"
        placeholder="Pick values"
        data={data}
        mode="checkbox"
        checkedStrategy="all"
        defaultExpandAll
        value={allValue}
        onChange={setAllValue}
      />
      <TreeSelect
        label="checkedStrategy: parent"
        placeholder="Pick values"
        data={data}
        mode="checkbox"
        checkedStrategy="parent"
        defaultExpandAll
        value={parentValue}
        onChange={setParentValue}
      />
    </Stack>
  );
}
`},{fileName:"data.ts",language:"tsx",code:l}],maxWidth:340,centered:!0,defaultExpanded:!1},x={type:"code",component:function(){return(0,r.jsx)(o.TreeSelect,{label:"Without connecting lines",placeholder:"Pick value",data:t,defaultExpandAll:!0,withLines:!1})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <TreeSelect
      label="Without connecting lines"
      placeholder="Pick value"
      data={data}
      defaultExpandAll
      withLines={false}
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:l}],maxWidth:340,centered:!0},g={type:"code",component:function(){return(0,r.jsx)(o.TreeSelect,{label:"Your favorite item",placeholder:"Pick value",data:t,searchable:!0,nothingFoundMessage:"Nothing found..."})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <TreeSelect
      label="Your favorite item"
      placeholder="Pick value"
      data={data}
      searchable
      nothingFoundMessage="Nothing found..."
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:l}],maxWidth:340,centered:!0},b={type:"code",component:function(){return(0,r.jsx)(o.TreeSelect,{label:"Pick up to 3 items",placeholder:"Pick values",data:t,mode:"multiple",maxValues:3,defaultExpandAll:!0})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <TreeSelect
      label="Pick up to 3 items"
      placeholder="Pick values"
      data={data}
      mode="multiple"
      maxValues={3}
      defaultExpandAll
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:l}],maxWidth:340,centered:!0};var v=e.i(119004),S=e.i(540413),T=e.i(235209),k=e.i(725695),y=e.i(883364);let P=({node:e,hasChildren:a,expanded:t})=>(0,r.jsxs)(k.Group,{gap:"xs",children:[a?t?(0,r.jsx)(S.FolderOpenIcon,{color:"var(--mantine-color-yellow-9)",size:16}):(0,r.jsx)(T.FolderSimpleIcon,{color:"var(--mantine-color-yellow-9)",size:16}):(0,r.jsx)(v.FileTextIcon,{size:16}),(0,r.jsx)(y.Text,{size:"sm",children:e.label})]}),D={type:"code",component:function(){return(0,r.jsx)(o.TreeSelect,{label:"Your favorite item",placeholder:"Pick value",data:t,renderNode:P,defaultExpandAll:!0})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { FileTextIcon, FolderOpenIcon, FolderSimpleIcon } from '@phosphor-icons/react';
import { Group, Text, TreeSelect, TreeSelectProps } from '@mantine/core';
import { data } from './data';

const renderTreeNode: TreeSelectProps['renderNode'] = ({ node, hasChildren, expanded }) => (
  <Group gap="xs">
    {hasChildren ? (
      expanded ? (
        <FolderOpenIcon color="var(--mantine-color-yellow-9)" size={16} />
      ) : (
        <FolderSimpleIcon color="var(--mantine-color-yellow-9)" size={16} />
      )
    ) : (
      <FileTextIcon size={16} />
    )}
    <Text size="sm">{node.label}</Text>
  </Group>
);

function Demo() {
  return (
    <TreeSelect
      label="Your favorite item"
      placeholder="Pick value"
      data={data}
      renderNode={renderTreeNode}
      defaultExpandAll
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:l}],maxWidth:340,centered:!0,defaultExpanded:!1},N={type:"code",component:function(){return(0,r.jsx)(o.TreeSelect,{label:"Your favorite item",placeholder:"Pick value",data:t,disabled:!0})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <TreeSelect
      label="Your favorite item"
      placeholder="Pick value"
      data={data}
      disabled
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:l}],maxWidth:340,centered:!0},j={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.TreeSelect,{label:"Boolean error",placeholder:"Boolean error",error:!0,data:t}),(0,r.jsx)(o.TreeSelect,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid value",data:t})]})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <>
      <TreeSelect
        label="Boolean error"
        placeholder="Boolean error"
        error
        data={data}
      />
      <TreeSelect
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid value"
        data={data}
      />
    </>
  );
}
`},{fileName:"data.ts",language:"tsx",code:l}],maxWidth:340,centered:!0};var w=e.i(293907);let C={type:"code",component:function(){let e=(0,r.jsx)(w.SquaresFourIcon,{size:16});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.TreeSelect,{data:t,leftSectionPointerEvents:"none",leftSection:e,label:"Your favorite item",placeholder:"Your favorite item"}),(0,r.jsx)(o.TreeSelect,{mt:"md",data:t,rightSectionPointerEvents:"none",rightSection:e,label:"Your favorite item",placeholder:"Your favorite item"})]})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { TreeSelect } from '@mantine/core';
import { SquaresFourIcon } from '@phosphor-icons/react';
import { data } from './data';

function Demo() {
  const icon = <SquaresFourIcon size={16} />;
  return (
    <>
      <TreeSelect
        data={data}
        leftSectionPointerEvents="none"
        leftSection={icon}
        label="Your favorite item"
        placeholder="Your favorite item"
      />
      <TreeSelect
        mt="md"
        data={data}
        rightSectionPointerEvents="none"
        rightSection={icon}
        label="Your favorite item"
        placeholder="Your favorite item"
      />
    </>
  );
}
`},{fileName:"data.ts",language:"tsx",code:l}],maxWidth:340,centered:!0},A={type:"code",component:function(){return(0,r.jsx)(o.TreeSelect,{label:"Your favorite item",placeholder:"Pick value",data:t,defaultValue:"iphone",readOnly:!0})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <TreeSelect
      label="Your favorite item"
      placeholder="Pick value"
      data={data}
      defaultValue="iphone"
      readOnly
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:l}],maxWidth:340,centered:!0},E={type:"configurator",component:function(e){return(0,r.jsx)(o.TreeSelect,{...e,placeholder:"Pick value",data:t})},code:`
import { TreeSelect } from '@mantine/core';
import { data } from './data';


function Demo() {
  return (
    <TreeSelect
      {{props}}
      placeholder="Pick value"
      data={data}
    />
  );
}
`,centered:!0,maxWidth:340,controls:e.i(960831).inputControls},Y={type:"code",component:function(){return(0,r.jsx)(o.TreeSelect,{label:"Your favorite item",placeholder:"Pick value",data:t,defaultExpandAll:!0,maxDropdownHeight:200})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <TreeSelect
      label="Your favorite item"
      placeholder="Pick value"
      data={data}
      defaultExpandAll
      maxDropdownHeight={200}
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:l}],maxWidth:340,centered:!0};var _=e.i(485108),I=e.i(541772);let O={type:"code",component:function(){let[e,{toggle:a}]=(0,I.useDisclosure)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(_.Button,{onClick:a,mb:"md",children:"Toggle dropdown"}),(0,r.jsx)(o.TreeSelect,{label:"Your favorite item",placeholder:"Pick value",data:t,dropdownOpened:e})]})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { TreeSelect, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { data } from './data';

function Demo() {
  const [dropdownOpened, { toggle }] = useDisclosure();
  return (
    <>
      <Button onClick={toggle} mb="md">
        Toggle dropdown
      </Button>

      <TreeSelect
        label="Your favorite item"
        placeholder="Pick value"
        data={data}
        dropdownOpened={dropdownOpened}
      />
    </>
  );
}
`},{fileName:"data.ts",language:"tsx",code:l}],maxWidth:340,centered:!0},V={type:"code",component:function(){return(0,r.jsx)(o.TreeSelect,{label:"Your favorite item",placeholder:"Pick value",data:t,comboboxProps:{position:"top",middlewares:{flip:!1,shift:!1}}})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <TreeSelect
      label="Your favorite item"
      placeholder="Pick value"
      data={data}
      comboboxProps={{ position: 'top', middlewares: { flip: false, shift: false } }}
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:l}],maxWidth:340,centered:!0},W={type:"code",component:function(){return(0,r.jsx)(o.TreeSelect,{label:"Your favorite item",placeholder:"Pick value",data:t,comboboxProps:{width:200,position:"bottom-start"}})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <TreeSelect
      label="Your favorite item"
      placeholder="Pick value"
      data={data}
      comboboxProps={{ width: 200, position: 'bottom-start' }}
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:l}],maxWidth:340,centered:!0};var F={dropdown:"m_dc7e5bc3",input:"m_ec80ad58"};let B={type:"code",component:function(){return(0,r.jsx)(o.TreeSelect,{label:"Your favorite item",placeholder:"Pick value",data:t,classNames:F,comboboxProps:{position:"bottom",middlewares:{flip:!1,shift:!1},offset:0}})},code:[{fileName:"Demo.tsx",code:`
import { TreeSelect } from '@mantine/core';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <TreeSelect
      label="Your favorite item"
      placeholder="Pick value"
      data={data}
      classNames={classes}
      comboboxProps={{ position: 'bottom', middlewares: { flip: false, shift: false }, offset: 0 }}
    />
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`.dropdown {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  border-color: light-dark(var(--mantine-color-gray-4), var(--mantine-color-dark-4));
  border-top: 0;
}

.input {
  transition: none;

  &[data-expanded] {
    border-color: light-dark(var(--mantine-color-gray-4), var(--mantine-color-dark-4));
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
`,language:"scss"},{fileName:"data.ts",language:"tsx",code:l}],maxWidth:340,centered:!0},M={type:"code",component:function(){return(0,r.jsx)(o.TreeSelect,{label:"Your favorite item",placeholder:"Pick value",data:t,comboboxProps:{transitionProps:{transition:"pop",duration:200}}})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <TreeSelect
      label="Your favorite item"
      placeholder="Pick value"
      data={data}
      comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:l}],maxWidth:340,centered:!0},z={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.TreeSelect,{label:"Zero padding",placeholder:"Pick value",data:t,comboboxProps:{dropdownPadding:0}}),(0,r.jsx)(o.TreeSelect,{mt:"md",label:"10px padding",placeholder:"Pick value",data:t,comboboxProps:{dropdownPadding:10}})]})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <>
      <TreeSelect
        label="Zero padding"
        placeholder="Pick value"
        data={data}
        comboboxProps={{ dropdownPadding: 0 }}
      />
      <TreeSelect
        mt="md"
        label="10px padding"
        placeholder="Pick value"
        data={data}
        comboboxProps={{ dropdownPadding: 10 }}
      />
    </>
  );
}
`},{fileName:"data.ts",language:"tsx",code:l}],maxWidth:340,centered:!0},G={type:"code",component:function(){return(0,r.jsx)(o.TreeSelect,{label:"Your favorite item",placeholder:"Pick value",data:t,comboboxProps:{shadow:"md"}})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <TreeSelect
      label="Your favorite item"
      placeholder="Pick value"
      data={data}
      comboboxProps={{ shadow: 'md' }}
    />
  );
}
`},{fileName:"data.ts",language:"tsx",code:l}],maxWidth:340,centered:!0};var L=(0,a.__exportAll)({checkStrictly:()=>m,checkbox:()=>d,checkedStrategy:()=>h,clearable:()=>s,configurator:()=>E,disabled:()=>N,dropdownAnimation:()=>M,dropdownOffset:()=>B,dropdownOpened:()=>O,dropdownPadding:()=>z,dropdownPosition:()=>V,dropdownShadow:()=>G,dropdownWidth:()=>W,error:()=>j,expandOnClick:()=>u,maxValues:()=>b,multiple:()=>i,nothingFound:()=>g,readOnly:()=>A,renderNode:()=>D,scrollArea:()=>Y,searchable:()=>c,sections:()=>C,usage:()=>n,withLines:()=>x});e.s(["TreeSelectDemos",0,L],832390)}]);