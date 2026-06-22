(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,r)=>{let o={};for(var n in e)t(o,n,{get:e[n],enumerable:!0});return r||t(o,Symbol.toStringTag,{value:"Module"}),o}])},257177,e=>{"use strict";var t=e.i(433512),r=e.i(481178),o=e.i(317477),n=e.i(44091),i=e.i(391466),a=e.i(956449),l=e.i(232471),s={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"},d=e.i(391398);let c=(0,r.createVarsResolver)((e,{radius:r,color:n,gradient:i,variant:a,size:l,autoContrast:s,circle:d})=>{let c=e.variantColorResolver({color:n||e.primaryColor,theme:e,gradient:i,variant:a||"filled",autoContrast:s});return{root:{"--badge-height":(0,t.getSize)(l,"badge-height"),"--badge-padding-x":(0,t.getSize)(l,"badge-padding-x"),"--badge-fz":(0,t.getSize)(l,"badge-fz"),"--badge-radius":d||void 0===r?void 0:(0,t.getRadius)(r),"--badge-bg":n||a?c.background:void 0,"--badge-color":n||a?c.color:void 0,"--badge-bd":n||a?c.border:void 0,"--badge-dot-color":"dot"===a?(0,o.getThemeColor)(n,e):void 0}}}),u=(0,a.polymorphicFactory)(e=>{let t=(0,n.useProps)("Badge",null,e),{classNames:r,className:o,style:a,styles:u,unstyled:m,vars:g,radius:p,color:f,gradient:h,leftSection:v,rightSection:x,children:w,variant:y,fullWidth:j,autoContrast:b,circle:C,mod:B,attributes:D,...O}=t,R=(0,i.useStyles)({name:"Badge",props:t,classes:s,className:o,style:a,classNames:r,styles:u,unstyled:m,attributes:D,vars:g,varsResolver:c});return(0,d.jsxs)(l.Box,{variant:y,mod:[{block:j,circle:C,"with-right-section":!!x,"with-left-section":!!v},B],...R("root",{variant:y}),...O,children:[v&&(0,d.jsx)("span",{...R("section"),"data-position":"left",children:v}),(0,d.jsx)("span",{...R("label"),children:w}),x&&(0,d.jsx)("span",{...R("section"),"data-position":"right",children:x})]})});u.classes=s,u.varsResolver=c,u.displayName="@mantine/core/Badge",e.s(["Badge",0,u],257177)},330573,e=>{"use strict";var t=e.i(44091),r=e.i(391466),o=e.i(956449),n=e.i(232471),i={root:"m_4451eb3a"},a=e.i(391398);let l=(0,o.polymorphicFactory)(e=>{let o=(0,t.useProps)("Center",null,e),{classNames:l,className:s,style:d,styles:c,unstyled:u,vars:m,inline:g,mod:p,attributes:f,...h}=o,v=(0,r.useStyles)({name:"Center",props:o,classes:i,className:s,style:d,classNames:l,styles:c,unstyled:u,attributes:f,vars:m});return(0,a.jsx)(n.Box,{mod:[{inline:g},p],...v("root"),...h})});l.classes=i,l.displayName="@mantine/core/Center",e.s(["Center",0,l],330573)},369974,e=>{"use strict";var t=e.i(44091),r=e.i(392862);let[o,n]=(0,e.i(386179).createSafeContext)("HoverCard component was not found in the tree");var i=e.i(191788),a=e.i(391398),l=e.i(458272);let s=(0,i.createContext)({withinGroup:!1}),d={openDelay:0,closeDelay:0};function c(e){let{openDelay:r,closeDelay:o,children:n}=(0,t.useProps)("HoverCardGroup",d,e);return(0,a.jsx)(s,{value:{withinGroup:!0},children:(0,a.jsx)(l.FloatingDelayGroup,{delay:{open:r,close:o},children:n})})}c.displayName="@mantine/core/HoverCardGroup",c.extend=e=>e;var u=e.i(334816);function m(e){let{children:o,onMouseEnter:l,onMouseLeave:d,...c}=(0,t.useProps)("HoverCardDropdown",null,e),m=n();if((0,i.use)(s).withinGroup&&m.getFloatingProps&&m.floating){let e=m.getFloatingProps();return(0,a.jsx)(r.Popover.Dropdown,{ref:m.floating,...e,onMouseEnter:(0,u.createEventHandler)(l,e.onMouseEnter),onMouseLeave:(0,u.createEventHandler)(d,e.onMouseLeave),...c,children:o})}let g=(0,u.createEventHandler)(l,m.openDropdown),p=(0,u.createEventHandler)(d,m.closeDropdown);return(0,a.jsx)(r.Popover.Dropdown,{onMouseEnter:g,onMouseLeave:p,...c,children:o})}m.displayName="@mantine/core/HoverCardDropdown";var g=e.i(275825),p=e.i(409703),f=e.i(332977);let h={refProp:"ref"};function v(e){let{children:o,refProp:l,eventPropsWrapperName:d,...c}=(0,t.useProps)("HoverCardTarget",h,e),m=(0,p.getSingleElementChild)(o);if(!m)throw Error("HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let v=n(),x=(0,i.use)(s),w=(0,f.useMergedRef)((0,g.getRefProp)(m),v.assignTarget);if(x.withinGroup&&v.getReferenceProps&&v.reference){let e=v.getReferenceProps();return(0,a.jsx)(r.Popover.Target,{refProp:l,...c,children:(0,i.cloneElement)(m,d?{[d]:{...e,ref:v.reference}}:{...e,ref:v.reference})})}let y={onMouseEnter:(0,u.createEventHandler)(m.props.onMouseEnter,v.openDropdown),onMouseLeave:(0,u.createEventHandler)(m.props.onMouseLeave,v.closeDropdown)},j={...d?{[d]:y}:y,ref:w};return(0,a.jsx)(r.Popover.Target,{refProp:l,...c,children:(0,i.cloneElement)(m,j)})}v.displayName="@mantine/core/HoverCardTarget";var x=e.i(107315);let w={openDelay:0,closeDelay:150,initiallyOpened:!1};function y(e){let{children:n,onOpen:d,onClose:c,openDelay:u,closeDelay:m,initiallyOpened:g,...p}=(0,t.useProps)("HoverCard",w,e),f=function(e){let[t,r]=(0,i.useState)(e.defaultOpened),o="boolean"==typeof e.opened?e.opened:t,n=(0,i.use)(s).withinGroup,a=(0,x.useId)(),d=(0,i.useRef)(-1),c=(0,i.useRef)(-1),u=(0,i.useRef)(null),m=(0,i.useCallback)(e=>{u.current=e},[]),g=(0,i.useCallback)(()=>{window.clearTimeout(d.current),window.clearTimeout(c.current)},[]),p=(0,i.useCallback)(t=>{r(t),t?(w(a),e.onOpen?.()):e.onClose?.()},[a,e.onOpen,e.onClose]),{context:f,refs:h}=(0,l.useFloating)({open:o,onOpenChange:p}),{delay:v,setCurrentId:w}=(0,l.useDelayGroup)(f,{id:a}),{getReferenceProps:y,getFloatingProps:j}=(0,l.useInteractions)([(0,l.useHover)(f,{enabled:!0,delay:n?v:{open:e.openDelay,close:e.closeDelay}}),(0,l.useRole)(f,{role:"dialog"}),(0,l.useDismiss)(f,{enabled:n})]),b=(0,i.useCallback)(()=>{n||(g(),0===e.openDelay||void 0===e.openDelay?p(!0):d.current=window.setTimeout(()=>p(!0),e.openDelay))},[n,g,e.openDelay,p]),C=(0,i.useCallback)(()=>{n||(g(),0===e.closeDelay||void 0===e.closeDelay?p(!1):c.current=window.setTimeout(()=>p(!1),e.closeDelay))},[n,g,e.closeDelay,p]),B=(0,i.useRef)(p);return B.current=p,(0,i.useEffect)(()=>()=>g(),[g]),(0,i.useEffect)(()=>{if(!o||n||"u"<typeof IntersectionObserver)return;let e=u.current;if(!e)return;let t=new IntersectionObserver(()=>{e.isConnected&&0!==e.getClientRects().length||(g(),B.current(!1))});return t.observe(e),()=>t.disconnect()},[o,n,g]),{opened:o,reference:h.setReference,floating:h.setFloating,assignTarget:m,getReferenceProps:y,getFloatingProps:j,openDropdown:b,closeDropdown:C}}({openDelay:u,closeDelay:m,defaultOpened:g,onOpen:d,onClose:c});return(0,a.jsx)(o,{value:{openDropdown:f.openDropdown,closeDropdown:f.closeDropdown,assignTarget:f.assignTarget,getReferenceProps:f.getReferenceProps,getFloatingProps:f.getFloatingProps,reference:f.reference,floating:f.floating},children:(0,a.jsx)(r.Popover,{...p,opened:f.opened,__staticSelector:"HoverCard",children:n})})}y.displayName="@mantine/core/HoverCard",y.Target=v,y.Dropdown=m,y.Group=c,y.extend=e=>e,e.s(["HoverCard",0,y],369974)},130096,e=>{"use strict";var t=e.i(648863);let r=["Apple","Banana","Cherry","Date","Elderberry","Fig","Grape","Honeydew","Indian Fig","Jackfruit","Kiwi","Lemon","Mango","Nectarine","Orange","Papaya"],o=`export const data = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
  'Honeydew',
  'Indian Fig',
  'Jackfruit',
  'Kiwi',
  'Lemon',
  'Mango',
  'Nectarine',
  'Orange',
  'Papaya',
];`;var n=e.i(257177),i=e.i(433512),a=e.i(481178),l=e.i(44091),s=e.i(391466),d=e.i(275519),c=e.i(232471);function u(e,t){if(!e.current)return null;let r=Array.from(e.current.children).filter(e=>t.current!==e);if(0===r.length)return null;let o=function(e){if(0===e.length)return{};let t={};return e.forEach(e=>{let r=e.getBoundingClientRect(),o=Math.round(r.top),n=Math.round(r.bottom);t[o]?t[o].bottom=Math.max(t[o].bottom,n):t[o]={elements:new Set,bottom:n,top:o},t[o].elements.add(e)}),t}(r);return{itemsSizesMap:o,rowPositions:Object.keys(o).map(Number),children:r}}var m=e.i(191788),g=e.i(730943),p={root:"m_f62ab2af"},f=e.i(417241),h=e.i(332977),v=e.i(391398);let x={maxRows:1,maxVisibleItems:1/0},w=(0,a.createVarsResolver)((e,{gap:t})=>({root:{"--ol-gap":(0,i.getSpacing)(t)}})),y=(0,d.genericFactory)(e=>{let t=(0,l.useProps)("OverflowList",x,e),{classNames:r,className:o,style:n,styles:i,unstyled:a,vars:d,attributes:y,data:j,renderOverflow:b,renderItem:C,maxRows:B,maxVisibleItems:D,collapseFrom:O,getItemKey:R,ref:L,...P}=t,H=(0,s.useStyles)({name:"OverflowList",classes:p,props:t,className:o,style:n,classNames:r,styles:i,unstyled:a,attributes:y,vars:d,varsResolver:w}),[z,E]=(0,m.useState)(j.length),[S,I]=(0,m.useState)(0),[M,T]=(0,m.useState)("normal"),F=(0,m.useRef)(null),N=(0,h.useMergedRef)(F,L),_=z-S,k=j.length-_>0&&"measuring"!==M,G="start"===O,W=G?j.slice(0,j.length-_):j.slice(_),A=k?b?.(W):null,V=(0,m.useRef)(null),U=(0,h.useMergedRef)(V,A?.ref),X=function(e){let t=(0,m.useRef)(null),[r,o]=(0,m.useState)(null);return(0,m.useEffect)(()=>{if(e.current)return t.current=new ResizeObserver(e=>{if(e[0]){let t=e[0];(0,g.flushSync)(()=>{o({width:t.borderBoxSize[0]?.inlineSize??t.target.clientWidth,height:t.borderBoxSize[0]?.blockSize??t.target.clientHeight,contentWidth:t.contentRect.width,contentHeight:t.contentRect.height})})}}),t.current.observe(e.current),()=>{t.current&&(t.current.disconnect(),t.current=null)}},[e.current]),r}(F);(0,f.useIsomorphicEffect)(()=>{T("measuring"),E(j.length),I(0)},[(0,m.useMemo)(()=>j.map((e,t)=>R?R(e,t):null!==e&&("object"==typeof e||"function"==typeof e)?t:String(e)).join("\0"),[j,R]),B,O]),(0,f.useIsomorphicEffect)(()=>{"measuring"===M&&(J(),T("measuring-overflow-indicator"))},[M]),(0,f.useIsomorphicEffect)(()=>{"measuring-overflow-indicator"!==M||Y()||T("normal")},[M,S]),(0,f.useIsomorphicEffect)(()=>{"normal"===M&&(T("measuring"),I(0))},[X]);let K=(e,t,r,o=0)=>{let n=1,i=0;for(let a=o;a<e.length;a+=1){let o=e[a],l=i>0?o+r:o;if(i+l>t&&i>0){if(++n>B)return!1;i=o}else i+=l}return!0},J=()=>{let e=u(F,V);if(!e)return;let t=F.current;if(!t)return;if(G){let r=t.getBoundingClientRect().width,o=parseFloat(getComputedStyle(t).columnGap)||0,n=e.children.map(e=>e.getBoundingClientRect().width),i=0;for(let e=n.length-1;e>=0&&K(n,r,o,e);e--)i=n.length-e;E(i=Math.min(i,D));return}if(1===j.length){let r=e.itemsSizesMap[e.rowPositions[0]].elements.values().next().value,o=t.getBoundingClientRect().width;(r?.getBoundingClientRect().width??0)>o?E(0):E(1);return}let r=e.rowPositions.slice(0,B).reduce((t,r)=>t+e.itemsSizesMap[r].elements.size,0);E(r=Math.min(r,D))},Y=()=>{if(!V.current)return!1;let e=u(F,V);if(!e)return!1;let{rowPositions:t,itemsSizesMap:r}=e;if(G){let t=F.current;if(!t)return!1;let r=t.getBoundingClientRect().width,o=parseFloat(getComputedStyle(t).columnGap)||0;return!K([V.current.getBoundingClientRect().width,...e.children.map(e=>e.getBoundingClientRect().width)],r,o)&&(I(e=>e+1),!0)}let o=V.current.getBoundingClientRect();return o.top+o.height/2>r[t[t.length-1]].bottom&&(I(e=>e+1),!0)},q=A?(0,m.cloneElement)(A,{ref:U}):null,Q=j;D&&(Q=G?Q.slice(-D):Q.slice(0,D));let Z=G?j.length-Q.length:0;return(0,v.jsxs)(c.Box,{ref:N,...H("root"),...P,children:[G&&q,Q.map((e,t)=>{if(!("measuring"===M||(G?t>=Q.length-_:t<_)))return null;let r=Z+t;return(0,v.jsx)(v.Fragment,{children:C(e,r)},r)}),!G&&q]})});y.displayName="@mantine/core/OverflowList",y.classes=p,y.varsResolver=w;let j={type:"code",component:function(){return(0,v.jsx)("div",{style:{resize:"horizontal",overflow:"auto",maxWidth:"100%"},children:(0,v.jsx)(y,{data:r,gap:4,renderOverflow:e=>(0,v.jsxs)(n.Badge,{children:["+",e.length," more"]}),renderItem:(e,t)=>(0,v.jsx)(n.Badge,{children:e},t)})})},code:[{fileName:"OverflowListDemo.tsx",code:`
import { Badge, OverflowList } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <div style={{ resize: 'horizontal', overflow: 'auto', maxWidth: '100%' }}>
      <OverflowList
        data={data}
        gap={4}
        renderOverflow={(items) => <Badge>+{items.length} more</Badge>}
        renderItem={(item, index) => <Badge key={index}>{item}</Badge>}
      />
    </div>
  );
}
`,language:"tsx"},{fileName:"data.ts",code:o,language:"tsx"}]},b={type:"code",component:function(){return(0,v.jsx)("div",{style:{resize:"horizontal",overflow:"auto",maxWidth:500},children:(0,v.jsx)(y,{data:r,gap:4,maxRows:2,renderOverflow:e=>(0,v.jsxs)(n.Badge,{children:["+",e.length," more"]}),renderItem:(e,t)=>(0,v.jsx)(n.Badge,{children:e},t)})})},code:[{fileName:"OverflowListDemo.tsx",code:`
import { Badge, OverflowList } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <div style={{ resize: 'horizontal', overflow: 'auto', maxWidth: 500 }}>
      <OverflowList
        data={data}
        gap={4}
        maxRows={2}
        renderOverflow={(items) => <Badge>+{items.length} more</Badge>}
        renderItem={(item, index) => <Badge key={index}>{item}</Badge>}
      />
    </div>
  );
}
`,language:"tsx"},{fileName:"data.ts",code:o,language:"tsx"}]},C={type:"code",component:function(){return(0,v.jsx)("div",{style:{resize:"horizontal",overflow:"auto",maxWidth:"100%"},children:(0,v.jsx)(y,{data:r,gap:4,maxVisibleItems:5,renderOverflow:e=>(0,v.jsxs)(n.Badge,{children:["+",e.length," more"]}),renderItem:(e,t)=>(0,v.jsx)(n.Badge,{children:e},t)})})},code:[{fileName:"OverflowListDemo.tsx",code:`
import { Badge, OverflowList } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <div style={{ resize: 'horizontal', overflow: 'auto', maxWidth: '100%' }}>
      <OverflowList
        data={data}
        gap={4}
        maxVisibleItems={5}
        renderOverflow={(items) => <Badge>+{items.length} more</Badge>}
        renderItem={(item, index) => <Badge key={index}>{item}</Badge>}
      />
    </div>
  );
}
`,language:"tsx"},{fileName:"data.ts",code:o,language:"tsx"}]},B={type:"code",component:function(){return(0,v.jsx)("div",{style:{resize:"horizontal",overflow:"auto",maxWidth:"100%"},children:(0,v.jsx)(y,{data:r,gap:4,collapseFrom:"start",renderOverflow:e=>(0,v.jsxs)(n.Badge,{children:["+",e.length," more"]}),renderItem:(e,t)=>(0,v.jsx)(n.Badge,{children:e},t)})})},code:[{fileName:"OverflowListDemo.tsx",code:`
import { Badge, OverflowList } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <div style={{ resize: 'horizontal', overflow: 'auto', maxWidth: '100%' }}>
      <OverflowList
        data={data}
        gap={4}
        collapseFrom="start"
        renderOverflow={(items) => <Badge>+{items.length} more</Badge>}
        renderItem={(item, index) => <Badge key={index}>{item}</Badge>}
      />
    </div>
  );
}
`,language:"tsx"},{fileName:"data.ts",code:o,language:"tsx"}]};var D=e.i(330573),O=e.i(369974);let R={type:"code",component:function(){return(0,v.jsx)("div",{style:{resize:"horizontal",overflow:"auto",maxWidth:"100%"},children:(0,v.jsx)(y,{data:r,gap:4,renderItem:(e,t)=>(0,v.jsx)(n.Badge,{children:e},t),renderOverflow:e=>(0,v.jsx)(D.Center,{children:(0,v.jsxs)(O.HoverCard,{children:[(0,v.jsx)(O.HoverCard.Target,{children:(0,v.jsxs)(n.Badge,{children:["+",e.length," more"]})}),(0,v.jsx)(O.HoverCard.Dropdown,{children:e.map((e,t)=>(0,v.jsx)("div",{children:e},t))})]})})})})},code:[{fileName:"OverflowListDemo.tsx",code:`
import { Badge, Center, HoverCard, OverflowList } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <div style={{ resize: 'horizontal', overflow: 'auto', maxWidth: '100%' }}>
      <OverflowList
        data={data}
        gap={4}
        renderItem={(item, index) => <Badge key={index}>{item}</Badge>}
        renderOverflow={(items) => (
          <Center>
            <HoverCard>
              <HoverCard.Target>
                <Badge>+{items.length} more</Badge>
              </HoverCard.Target>
              <HoverCard.Dropdown>
                {items.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </HoverCard.Dropdown>
            </HoverCard>
          </Center>
        )}
      />
    </div>
  );
}
`,language:"tsx"},{fileName:"data.ts",code:o,language:"tsx"}]};var L=(0,t.__exportAll)({collapseFrom:()=>B,hoverCard:()=>R,maxRows:()=>b,maxVisibleItems:()=>C,usage:()=>j});e.s(["OverflowListDemos",0,L],130096)},974087,e=>{"use strict";var t=e.i(391398),r=e.i(38856),o=e.i(130096);e.i(603441);var n=e.i(62558);e.i(457450);var i=e.i(418026);let a=(0,n.Layout)(i.MDX_DATA.OverflowList);function l(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.useMDXComponents)(),...e.components},{Demo:i}=n;return i||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(i,{data:o.OverflowListDemos.usage}),"\n",(0,t.jsx)(n.h2,{id:"data-type",children:"Data type"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"OverflowList"})," data prop supports an array of any type. By default, ",(0,t.jsx)(n.code,{children:"OverflowList"})," infers\ndata type from the data array automatically. To specify data type explicitly, pass\ngeneric type argument to the component:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { OverflowList } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <OverflowList<{ value: string; label: string }>\n      data={[{ value: '1', label: 'Item 1' }]}\n      renderItem={(item) => <div key={item.value}>{item.label}</div>}\n      renderOverflow={(items) => <div>+{items.length} more</div>}\n    />\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"max-rows",children:"Max rows"}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"maxRows"})," to limit visible rows count. By default, 1 row is visible."]}),"\n",(0,t.jsx)(i,{data:o.OverflowListDemos.maxRows}),"\n",(0,t.jsx)(n.h2,{id:"max-visible-items",children:"Max visible items"}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"maxVisibleItems"})," to limit visible items count. By default, there is no limit."]}),"\n",(0,t.jsx)(i,{data:o.OverflowListDemos.maxVisibleItems}),"\n",(0,t.jsx)(n.h2,{id:"collapse-from",children:"Collapse from"}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"collapseFrom"})," prop to control from which direction items are collapsed\nwhen they overflow. By default, items are collapsed from the end. Set\n",(0,t.jsx)(n.code,{children:'collapseFrom="start"'})," to collapse items from the beginning – this is useful\nfor breadcrumb-like patterns where the last items should remain visible."]}),"\n",(0,t.jsx)(i,{data:o.OverflowListDemos.collapseFrom}),"\n",(0,t.jsx)(n.h2,{id:"example-overflow-with-hover-card",children:"Example: overflow with hover card"}),"\n",(0,t.jsxs)(n.p,{children:["You can use any React components in ",(0,t.jsx)(n.code,{children:"renderOverflow"})," function. Example\nof displaying collapsed items inside ",(0,t.jsx)(n.a,{href:"/core/hover-card",children:"HoverCard"}),":"]}),"\n",(0,t.jsx)(i,{data:o.OverflowListDemos.hoverCard})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(a,{...e,children:(0,t.jsx)(l,{...e})})}])},777799,(e,t,r)=>{let o="/core/overflow-list";(window.__NEXT_P=window.__NEXT_P||[]).push([o,()=>e.r(974087)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([o])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);