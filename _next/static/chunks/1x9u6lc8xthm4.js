(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,o)=>{let r={};for(var n in e)t(r,n,{get:e[n],enumerable:!0});return o||t(r,Symbol.toStringTag,{value:"Module"}),r}])},257177,e=>{"use strict";var t=e.i(433512),o=e.i(481178),r=e.i(317477),n=e.i(44091),a=e.i(391466),l=e.i(956449),i=e.i(232471),s={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"},c=e.i(391398);let d=(0,o.createVarsResolver)((e,{radius:o,color:n,gradient:a,variant:l,size:i,autoContrast:s,circle:c})=>{let d=e.variantColorResolver({color:n||e.primaryColor,theme:e,gradient:a,variant:l||"filled",autoContrast:s});return{root:{"--badge-height":(0,t.getSize)(i,"badge-height"),"--badge-padding-x":(0,t.getSize)(i,"badge-padding-x"),"--badge-fz":(0,t.getSize)(i,"badge-fz"),"--badge-radius":c||void 0===o?void 0:(0,t.getRadius)(o),"--badge-bg":n||l?d.background:void 0,"--badge-color":n||l?d.color:void 0,"--badge-bd":n||l?d.border:void 0,"--badge-dot-color":"dot"===l?(0,r.getThemeColor)(n,e):void 0}}}),u=(0,l.polymorphicFactory)(e=>{let t=(0,n.useProps)("Badge",null,e),{classNames:o,className:r,style:l,styles:u,unstyled:p,vars:m,radius:h,color:b,gradient:x,leftSection:f,rightSection:g,children:v,variant:y,fullWidth:C,autoContrast:w,circle:T,mod:j,attributes:H,...A}=t,D=(0,a.useStyles)({name:"Badge",props:t,classes:s,className:r,style:l,classNames:o,styles:u,unstyled:p,attributes:H,vars:m,varsResolver:d});return(0,c.jsxs)(i.Box,{variant:y,mod:[{block:C,circle:T,"with-right-section":!!g,"with-left-section":!!f},j],...D("root",{variant:y}),...A,children:[f&&(0,c.jsx)("span",{...D("section"),"data-position":"left",children:f}),(0,c.jsx)("span",{...D("label"),children:v}),g&&(0,c.jsx)("span",{...D("section"),"data-position":"right",children:g})]})});u.classes=s,u.varsResolver=d,u.displayName="@mantine/core/Badge",e.s(["Badge",0,u],257177)},734858,e=>{"use strict";function t(e,o=document){let r=o.querySelector(e);if(r)return r;let n=o.querySelectorAll("*");for(let o=0;o<n.length;o+=1){let r=n[o];if(r.shadowRoot){let o=t(e,r.shadowRoot);if(o)return o}}return null}function o(e,t=document){let r=[],n=t.querySelectorAll(e);r.push(...Array.from(n));let a=t.querySelectorAll("*");for(let t=0;t<a.length;t+=1){let n=a[t];if(n.shadowRoot){let t=o(e,n.shadowRoot);r.push(...t)}}return r}function r(e){if(!e)return document;let t=e.getRootNode();return t instanceof ShadowRoot||t instanceof Document?t:document}var n=e.i(191788),a=e.i(579560);e.s(["useCombobox",0,function({defaultOpened:e,opened:l,onOpenedChange:i,onDropdownClose:s,onDropdownOpen:c,loop:d=!0,scrollBehavior:u="instant"}={}){let[p,m]=(0,a.useUncontrolled)({value:l,defaultValue:e,finalValue:!1,onChange:i}),h=(0,n.useRef)(null),b=(0,n.useRef)(-1),x=(0,n.useRef)(null),f=(0,n.useRef)(null),g=(0,n.useRef)(-1),v=(0,n.useRef)(-1),y=(0,n.useRef)(-1),C=(0,n.useCallback)((e="unknown")=>{p||(m(!0),c?.(e))},[m,c,p]),w=(0,n.useCallback)((e="unknown")=>{p&&(m(!1),s?.(e))},[m,s,p]),T=(0,n.useCallback)((e="unknown")=>{p?w(e):C(e)},[w,C,p]),j=(0,n.useCallback)(()=>{let e=r(f.current),o=t(`#${h.current} [data-combobox-selected]`,e);o?.removeAttribute("data-combobox-selected"),o?.removeAttribute("aria-selected")},[]),H=(0,n.useCallback)(e=>{let n=r(f.current),a=t(`#${h.current}`,n),l=a?o("[data-combobox-option]",a):null;if(!l)return null;let i=e>=l.length?0:e<0?l.length-1:e;return(b.current=i,l?.[i]&&!l[i].hasAttribute("data-combobox-disabled"))?(j(),l[i].setAttribute("data-combobox-selected","true"),l[i].setAttribute("aria-selected","true"),l[i].scrollIntoView({block:"nearest",behavior:u}),l[i].id):null},[u,j]),A=(0,n.useCallback)(()=>{let e=r(f.current),n=t(`#${h.current} [data-combobox-active]`,e);return n?H(o(`#${h.current} [data-combobox-option]`,e).findIndex(e=>e===n)):H(0)},[H]),D=(0,n.useCallback)(()=>{let e=r(f.current),t=o(`#${h.current} [data-combobox-option]`,e);return H(function(e,t,o){for(let o=e+1;o<t.length;o+=1)if(!t[o].hasAttribute("data-combobox-disabled"))return o;if(o){for(let e=0;e<t.length;e+=1)if(!t[e].hasAttribute("data-combobox-disabled"))return e}return e}(b.current,t,d))},[H,d]),E=(0,n.useCallback)(()=>{let e=r(f.current),t=o(`#${h.current} [data-combobox-option]`,e);return H(function(e,t,o){for(let o=e-1;o>=0;o-=1)if(!t[o].hasAttribute("data-combobox-disabled"))return o;if(o){for(let e=t.length-1;e>-1;e-=1)if(!t[e].hasAttribute("data-combobox-disabled"))return e}return e}(b.current,t,d))},[H,d]),S=(0,n.useCallback)(()=>{let e=r(f.current);return H(function(e){for(let t=0;t<e.length;t+=1)if(!e[t].hasAttribute("data-combobox-disabled"))return t;return -1}(o(`#${h.current} [data-combobox-option]`,e)))},[H]),Z=(0,n.useCallback)((e="selected",t)=>{if("number"==typeof e){b.current=e;let n=r(f.current),a=o(`#${h.current} [data-combobox-option]`,n);t?.scrollIntoView&&a[e]?.scrollIntoView({block:"nearest",behavior:u});return}y.current=window.setTimeout(()=>{let n=r(f.current),a=o(`#${h.current} [data-combobox-option]`,n),l=a.findIndex(t=>t.hasAttribute(`data-combobox-${e}`));b.current=l,t?.scrollIntoView&&a[l]?.scrollIntoView({block:"nearest",behavior:u})},0)},[]),B=(0,n.useCallback)(()=>{b.current=-1,j()},[j]),M=(0,n.useCallback)(()=>{let e=r(f.current);o(`#${h.current} [data-combobox-option]`,e)?.[b.current]?.click()},[]),k=(0,n.useCallback)(e=>{h.current=e},[]),V=(0,n.useCallback)(()=>{g.current=window.setTimeout(()=>x.current?.focus(),0)},[]),O=(0,n.useCallback)(()=>{v.current=window.setTimeout(()=>f.current?.focus(),0)},[]),P=(0,n.useCallback)(()=>b.current,[]);return(0,n.useEffect)(()=>()=>{window.clearTimeout(g.current),window.clearTimeout(v.current),window.clearTimeout(y.current)},[]),{dropdownOpened:p,openDropdown:C,closeDropdown:w,toggleDropdown:T,selectedOptionIndex:b.current,getSelectedOptionIndex:P,selectOption:H,selectFirstOption:S,selectActiveOption:A,selectNextOption:D,selectPreviousOption:E,resetSelectedOption:B,updateSelectedOptionIndex:Z,listId:h.current,setListId:k,clickSelectedOption:M,searchRef:x,focusSearchInput:V,targetRef:f,focusTarget:O}}],734858)},219867,891032,637727,520936,566236,143796,740909,381224,24691,353165,329145,38403,476602,65582,429773,e=>{"use strict";let[t,o]=(0,e.i(386179).createSafeContext)("Combobox component was not found in tree");e.s(["ComboboxProvider",0,t,"useComboboxContext",0,o],219867);var r=e.i(294788),n=e.i(391398);function a({onMouseDown:e,onClick:t,onClear:o,...l}){return(0,n.jsx)(r.Input.ClearButton,{tabIndex:-1,"aria-hidden":!0,...l,onMouseDown:t=>{t.preventDefault(),e?.(t)},onClick:e=>{o(),t?.(e)}})}a.displayName="@mantine/core/ComboboxClearButton",e.s(["ComboboxClearButton",0,a],891032);var l=e.i(44091),i=e.i(275519),s=e.i(392862),c=e.i(506712);let d=(0,i.factory)(e=>{let{classNames:t,styles:r,className:a,style:i,hidden:c,...d}=(0,l.useProps)("ComboboxDropdown",null,e),u=o();return(0,n.jsx)(s.Popover.Dropdown,{...d,role:"presentation","data-hidden":c||void 0,"data-floating-height":u.floatingHeight||void 0,...u.getStyles("dropdown",{className:a,style:i,classNames:t,styles:r})})});d.classes=c.default,d.displayName="@mantine/core/ComboboxDropdown",e.s(["ComboboxDropdown",0,d],637727);var u=e.i(826639);let p={refProp:"ref"},m=(0,i.factory)(e=>{let{children:t,refProp:r,ref:a}=(0,l.useProps)("ComboboxDropdownTarget",p,e);if(o(),!(0,u.isElement)(t))throw Error("Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");return(0,n.jsx)(s.Popover.Target,{ref:a,refProp:r,children:t})});m.displayName="@mantine/core/ComboboxDropdownTarget",e.s(["ComboboxDropdownTarget",0,m],520936);var h=e.i(232471);let b=(0,i.factory)(e=>{let{classNames:t,className:r,style:a,styles:i,vars:s,...c}=(0,l.useProps)("ComboboxEmpty",null,e);return(0,n.jsx)(h.Box,{...o().getStyles("empty",{className:r,classNames:t,styles:i,style:a}),...c})});b.classes=c.default,b.displayName="@mantine/core/ComboboxEmpty",e.s(["ComboboxEmpty",0,b],566236);var x=e.i(275825),f=e.i(409703),g=e.i(191788);function v({onKeyDown:e,onClick:t,withKeyboardNavigation:r,withAriaAttributes:n,withExpandedAttribute:a,targetType:l,autoComplete:i}){let s=o(),[c,d]=(0,g.useState)(null);return{...n?{...a?{role:"combobox"}:{},"aria-haspopup":"listbox","aria-expanded":a?!!(s.store.listId&&s.store.dropdownOpened):void 0,"aria-controls":s.store.dropdownOpened&&s.store.listId?s.store.listId:void 0,"aria-activedescendant":s.store.dropdownOpened&&c||void 0,autoComplete:i,"data-expanded":s.store.dropdownOpened||void 0,"data-mantine-stop-propagation":s.store.dropdownOpened||void 0}:{},onKeyDown:t=>{if((e?.(t),!s.readOnly&&r)&&!t.nativeEvent.isComposing){if("ArrowDown"===t.nativeEvent.code&&(t.preventDefault(),s.store.dropdownOpened?d(s.store.selectNextOption()):(s.store.openDropdown("keyboard"),d(s.store.selectActiveOption()),s.store.updateSelectedOptionIndex("selected",{scrollIntoView:!0}))),"ArrowUp"===t.nativeEvent.code&&(t.preventDefault(),s.store.dropdownOpened?d(s.store.selectPreviousOption()):(s.store.openDropdown("keyboard"),d(s.store.selectActiveOption()),s.store.updateSelectedOptionIndex("selected",{scrollIntoView:!0}))),"Enter"===t.nativeEvent.code||"NumpadEnter"===t.nativeEvent.code){if(229===t.nativeEvent.keyCode)return;let e=s.store.getSelectedOptionIndex();s.store.dropdownOpened&&-1!==e?(t.preventDefault(),s.store.clickSelectedOption()):"button"===l&&(t.preventDefault(),s.store.openDropdown("keyboard"))}"Escape"===t.key&&s.store.closeDropdown("keyboard"),"Space"===t.nativeEvent.code&&"button"===l&&(t.preventDefault(),s.store.toggleDropdown("keyboard"))}},onClick:e=>{"button"===l&&e.currentTarget.focus(),t?.(e)}}}e.s(["useComboboxTargetProps",0,v],143796);var y=e.i(332977);let C={refProp:"ref",targetType:"input",withKeyboardNavigation:!0,withAriaAttributes:!0,withExpandedAttribute:!1,autoComplete:"off"},w=(0,i.factory)(e=>{let{children:t,refProp:r,withKeyboardNavigation:n,withAriaAttributes:a,withExpandedAttribute:i,targetType:s,autoComplete:c,ref:d,...u}=(0,l.useProps)("ComboboxEventsTarget",C,e),p=(0,f.getSingleElementChild)(t);if(!p)throw Error("Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let m=o();return(0,g.cloneElement)(p,{...v({targetType:s,withAriaAttributes:a,withKeyboardNavigation:n,withExpandedAttribute:i,onKeyDown:p.props.onKeyDown,onClick:p.props.onClick,autoComplete:c}),...u,[r]:(0,y.useMergedRef)(d,m.store.targetRef,(0,x.getRefProp)(p))})});w.displayName="@mantine/core/ComboboxEventsTarget",e.s(["ComboboxEventsTarget",0,w],740909);let T=(0,i.factory)(e=>{let{classNames:t,className:r,style:a,styles:i,vars:s,...c}=(0,l.useProps)("ComboboxFooter",null,e);return(0,n.jsx)(h.Box,{...o().getStyles("footer",{className:r,classNames:t,style:a,styles:i}),...c,onMouseDown:e=>{e.preventDefault()}})});T.classes=c.default,T.displayName="@mantine/core/ComboboxFooter",e.s(["ComboboxFooter",0,T],381224);var j=e.i(107315);let H=(0,i.factory)(e=>{let{classNames:t,className:r,style:a,styles:i,vars:s,children:c,label:d,id:u,...p}=(0,l.useProps)("ComboboxGroup",null,e),m=o(),b=(0,j.useId)(u),x=null!=d&&!1!==d&&""!==d;return(0,n.jsxs)(h.Box,{role:"group","aria-labelledby":x?b:void 0,...m.getStyles("group",{className:r,classNames:t,style:a,styles:i}),...p,children:[x&&(0,n.jsx)("div",{id:b,...m.getStyles("groupLabel",{classNames:t,styles:i}),children:d}),c]})});H.classes=c.default,H.displayName="@mantine/core/ComboboxGroup",e.s(["ComboboxGroup",0,H],24691);let A=(0,i.factory)(e=>{let{classNames:t,className:r,style:a,styles:i,vars:s,...c}=(0,l.useProps)("ComboboxHeader",null,e);return(0,n.jsx)(h.Box,{...o().getStyles("header",{className:r,classNames:t,style:a,styles:i}),...c,onMouseDown:e=>{e.preventDefault()}})});function D({value:e,valuesDivider:t=",",...o}){return(0,n.jsx)("input",{type:"hidden",value:Array.isArray(e)?e.join(t):e?`${e}`:"",...o})}A.classes=c.default,A.displayName="@mantine/core/ComboboxHeader",e.s(["ComboboxHeader",0,A],353165),D.displayName="@mantine/core/ComboboxHiddenInput",e.s(["ComboboxHiddenInput",0,D],329145);let E=(0,i.factory)(e=>{let t=(0,l.useProps)("ComboboxOption",null,e),{classNames:r,className:a,style:i,styles:s,vars:c,onClick:d,id:u,active:p,onMouseDown:m,onMouseOver:b,disabled:x,selected:f,mod:v,...y}=t,C=o(),w=(0,g.useId)();return(0,n.jsx)(h.Box,{...C.getStyles("option",{className:a,classNames:r,styles:s,style:i}),...y,id:u||w,mod:["combobox-option",{"combobox-active":p,"combobox-disabled":x,"combobox-selected":f},v],role:"option",onClick:e=>{x?e.preventDefault():(C.onOptionSubmit?.(t.value,t),d?.(e))},onMouseDown:e=>{e.preventDefault(),m?.(e)},onMouseOver:e=>{C.resetSelectionOnOptionHover&&C.store.resetSelectedOption(),b?.(e)}})});E.classes=c.default,E.displayName="@mantine/core/ComboboxOption",e.s(["ComboboxOption",0,E],38403);let S=(0,i.factory)(e=>{let{classNames:t,className:r,style:a,styles:i,id:s,onMouseDown:c,labelledBy:d,...u}=(0,l.useProps)("ComboboxOptions",null,e),p=o(),m=(0,j.useId)(s);return(0,g.useEffect)(()=>{p.store.setListId(m)},[m]),(0,n.jsx)(h.Box,{...p.getStyles("options",{className:r,style:a,classNames:t,styles:i}),...u,id:m,role:"listbox","aria-labelledby":d,onMouseDown:e=>{e.preventDefault(),c?.(e)}})});S.classes=c.default,S.displayName="@mantine/core/ComboboxOptions",e.s(["ComboboxOptions",0,S],476602);let Z={withAriaAttributes:!0,withKeyboardNavigation:!0},B=(0,i.factory)(e=>{let{classNames:t,styles:a,unstyled:i,vars:s,withAriaAttributes:c,onKeyDown:d,onClick:u,withKeyboardNavigation:p,size:m,ref:h,...b}=(0,l.useProps)("ComboboxSearch",Z,e),x=o(),f=x.getStyles("search"),g=v({targetType:"input",withAriaAttributes:c,withKeyboardNavigation:p,withExpandedAttribute:!1,onKeyDown:d,onClick:u,autoComplete:"off"});return(0,n.jsx)(r.Input,{ref:(0,y.useMergedRef)(h,x.store.searchRef),classNames:[{input:f.className},t],styles:[{input:f.style},a],size:m||x.size,...g,...b,__staticSelector:"Combobox"})});B.classes=c.default,B.displayName="@mantine/core/ComboboxSearch",e.s(["ComboboxSearch",0,B],65582);let M={refProp:"ref",targetType:"input",withKeyboardNavigation:!0,withAriaAttributes:!0,withExpandedAttribute:!1,autoComplete:"off"},k=(0,i.factory)(e=>{let{children:t,refProp:r,withKeyboardNavigation:a,withAriaAttributes:i,withExpandedAttribute:c,targetType:d,autoComplete:u,ref:p,...m}=(0,l.useProps)("ComboboxTarget",M,e),h=(0,f.getSingleElementChild)(t);if(!h)throw Error("Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let b=o(),x=(0,g.cloneElement)(h,{...v({targetType:d,withAriaAttributes:i,withKeyboardNavigation:a,withExpandedAttribute:c,onKeyDown:h.props.onKeyDown,onClick:h.props.onClick,autoComplete:u}),...m});return(0,n.jsx)(s.Popover.Target,{refProp:r,ref:(0,y.useMergedRef)(p,b.store.targetRef),children:x})});k.displayName="@mantine/core/ComboboxTarget",e.s(["ComboboxTarget",0,k],429773)},711976,e=>{"use strict";var t=e.i(779177),o=e.i(433512),r=e.i(481178),n=e.i(44091),a=e.i(391466),l=e.i(392862),i=e.i(506712),s=e.i(918359),c=e.i(219867),d=e.i(891032),u=e.i(637727),p=e.i(520936),m=e.i(566236),h=e.i(740909),b=e.i(381224),x=e.i(24691),f=e.i(353165),g=e.i(329145),v=e.i(38403),y=e.i(476602),C=e.i(65582),w=e.i(429773),T=e.i(734858),j=e.i(391398);let H={keepMounted:!0,keepMountedMode:"display-none",withinPortal:!0,resetSelectionOnOptionHover:!1,width:"target",transitionProps:{transition:"fade",duration:0},size:"sm"},A=(0,r.createVarsResolver)((e,{size:r,dropdownPadding:n})=>({options:{"--combobox-option-fz":(0,o.getFontSize)(r),"--combobox-option-padding":(0,o.getSize)(r,"combobox-option-padding")},dropdown:{"--combobox-padding":void 0===n?void 0:(0,t.rem)(n),"--combobox-option-fz":(0,o.getFontSize)(r),"--combobox-option-padding":(0,o.getSize)(r,"combobox-option-padding")}})),D=e=>{let t=(0,n.useProps)("Combobox",H,e),{classNames:o,styles:r,unstyled:s,children:d,store:u,vars:p,onOptionSubmit:m,onClose:h,size:b,dropdownPadding:x,resetSelectionOnOptionHover:f,__staticSelector:g,readOnly:v,attributes:y,floatingHeight:C,middlewares:w,...D}=t,E="viewport"===C?{...w,flip:!1,size:{..."object"==typeof w?.size?w.size:{},padding:"object"==typeof w?.size&&void 0!==w.size.padding?w.size.padding:10,apply:({availableHeight:e,availableWidth:t,elements:o,...r})=>{o.floating.style.setProperty("--combobox-floating-max-height",`${e}px`);let n=w?.size;"object"==typeof n&&n.apply?n.apply({availableHeight:e,availableWidth:t,elements:o,...r}):n&&Object.assign(o.floating.style,{maxWidth:`${t}px`,maxHeight:`${e}px`})}}}:w,S=(0,T.useCombobox)(),Z=u||S,B=(0,a.useStyles)({name:g||"Combobox",classes:i.default,props:t,classNames:o,styles:r,unstyled:s,attributes:y,vars:p,varsResolver:A});return(0,j.jsx)(c.ComboboxProvider,{value:{getStyles:B,store:Z,onOptionSubmit:m,size:b,resetSelectionOnOptionHover:f,readOnly:v,floatingHeight:C},children:(0,j.jsx)(l.Popover,{opened:Z.dropdownOpened,...D,middlewares:E,onChange:e=>!e&&void(h?.(),Z.closeDropdown()),withRoles:!1,unstyled:s,children:d})})};D.extend=e=>e,D.classes=i.default,D.varsResolver=A,D.displayName="@mantine/core/Combobox",D.Target=w.ComboboxTarget,D.Dropdown=u.ComboboxDropdown,D.Options=y.ComboboxOptions,D.Option=v.ComboboxOption,D.Search=C.ComboboxSearch,D.Empty=m.ComboboxEmpty,D.Chevron=s.ComboboxChevron,D.Footer=b.ComboboxFooter,D.Header=f.ComboboxHeader,D.EventsTarget=h.ComboboxEventsTarget,D.DropdownTarget=p.ComboboxDropdownTarget,D.Group=x.ComboboxGroup,D.ClearButton=d.ComboboxClearButton,D.HiddenInput=g.ComboboxHiddenInput,e.s(["Combobox",0,D])},464224,463112,211169,679089,212491,e=>{"use strict";e.s(["getOptionsLockup",0,function e(t){return t.reduce((t,o)=>"group"in o?{...t,...e(o.items)}:(t[`${o.value}`]=o,t),{})}],464224);var t=e.i(19300),o=e.i(506712),r=e.i(219867),n=e.i(711976),a=e.i(956031);function l(e){return"group"in e}function i({options:e,search:t,limit:o}){let r=t.trim().toLowerCase(),n=[];for(let a=0;a<e.length;a+=1){let s=e[a];if(n.length===o)break;l(s)&&n.push({group:s.group,items:i({options:s.items,search:t,limit:o-n.length})}),!l(s)&&s.label.toLowerCase().includes(r)&&n.push(s)}return n}function s(e){if(0===e.length)return!0;for(let t of e)if(!("group"in t)||t.items.length>0)return!1;return!0}e.s(["isOptionsGroup",0,l],463112),e.s(["defaultOptionsFilter",0,i],211169),e.s(["isEmptyComboboxData",0,s],679089);var c=e.i(56206),d=e.i(391398);function u({data:e,withCheckIcon:t,withAlignedLabels:r,value:i,checkIconPosition:s,unstyled:p,renderOption:m}){if(!l(e)){var h;let l=(h=e.value,Array.isArray(i)?i.includes(h):i===h),u=t&&(l?(0,d.jsx)(a.CheckIcon,{className:o.default.optionsDropdownCheckIcon}):r?(0,d.jsx)("div",{className:o.default.optionsDropdownCheckPlaceholder}):null),b=(0,d.jsxs)(d.Fragment,{children:["left"===s&&u,(0,d.jsx)("span",{children:e.label}),"right"===s&&u]});return(0,d.jsx)(n.Combobox.Option,{value:e.value,disabled:e.disabled,className:(0,c.default)({[o.default.optionsDropdownOption]:!p}),"data-reverse":"right"===s||void 0,"data-checked":l||void 0,"aria-selected":l,active:l,children:"function"==typeof m?m({option:e,checked:l}):b})}let b=e.items.map(e=>(0,d.jsx)(u,{data:e,value:i,unstyled:p,withCheckIcon:t,withAlignedLabels:r,checkIconPosition:s,renderOption:m},`${e.value}`));return(0,d.jsx)(n.Combobox.Group,{label:e.group,children:b})}e.s(["OptionsDropdown",0,function({data:e,hidden:o,hiddenWhenEmpty:a,filter:c,search:p,limit:m,maxDropdownHeight:h,floatingHeight:b,withScrollArea:x=!0,filterOptions:f=!0,withCheckIcon:g=!1,withAlignedLabels:v=!1,value:y,checkIconPosition:C,nothingFoundMessage:w,unstyled:T,labelId:j,renderOption:H,scrollAreaProps:A,"aria-label":D}){let E=(0,r.useComboboxContext)();!function e(t,o=new Set){if(Array.isArray(t))for(let r of t)if(l(r))e(r.items,o);else{if(void 0===r.value)throw Error("[@mantine/core] Each option must have value property");if(o.has(r.value))throw Error(`[@mantine/core] Duplicate options are not supported. Option with value "${r.value}" was provided more than once`);o.add(r.value)}}(e);let S="string"==typeof p?(c||i)({options:e,search:f?p:"",limit:m??1/0}):e,Z=s(S),B=S.map((e,t)=>(0,d.jsx)(u,{data:e,withCheckIcon:g,withAlignedLabels:v,value:y,checkIconPosition:C,unstyled:T,renderOption:H},l(e)?`group-${"string"==typeof e.group?e.group:t}`:`${e.value}`));return(0,d.jsx)(n.Combobox.Dropdown,{hidden:o||a&&Z,"data-composed":!0,children:(0,d.jsxs)(n.Combobox.Options,{labelledBy:j,"aria-label":D,children:[x?(0,d.jsx)(t.ScrollArea.Autosize,{mah:(b??E.floatingHeight)==="viewport"?"var(--combobox-floating-options-max-height)":h??220,type:"scroll",scrollbarSize:"var(--combobox-padding)",offsetScrollbars:"y",...A,children:B}):B,Z&&w&&(0,d.jsx)(n.Combobox.Empty,{children:w})]})})}],212491)},509496,e=>{"use strict";var t=e.i(191788);e.s(["usePrevious",0,function(e){let o=(0,t.useRef)(void 0);return(0,t.useEffect)(()=>{o.current=e},[e]),o.current}])},988798,e=>{"use strict";var t=e.i(44091),o=e.i(62904),r=e.i(275519),n=e.i(586488),a=e.i(205764),l=e.i(464224),i=e.i(734858),s=e.i(711976),c=e.i(212491),d=e.i(191788),u=e.i(107315),p=e.i(509496),m=e.i(579560),h=e.i(391398);let b={size:"sm",withCheckIcon:!0,allowDeselect:!0,checkIconPosition:"left",openOnFocus:!0},x=(0,r.genericFactory)(e=>{let r=(0,t.useProps)(["Input","InputWrapper","Select"],b,e),{classNames:x,styles:f,unstyled:g,vars:v,dropdownOpened:y,defaultDropdownOpened:C,onDropdownClose:w,onDropdownOpen:T,onFocus:j,onBlur:H,onClick:A,onChange:D,data:E,value:S,defaultValue:Z,selectFirstOptionOnChange:B,selectFirstOptionOnDropdownOpen:M,onOptionSubmit:k,comboboxProps:V,readOnly:O,disabled:P,filter:F,limit:I,withScrollArea:z,maxDropdownHeight:L,floatingHeight:R,size:N,searchable:G,rightSection:_,checkIconPosition:$,withCheckIcon:U,withAlignedLabels:W,nothingFoundMessage:K,name:Y,form:q,searchValue:X,defaultSearchValue:J,onSearchChange:Q,allowDeselect:ee,error:et,rightSectionPointerEvents:eo,id:er,clearable:en,clearSectionMode:ea,clearButtonProps:el,hiddenInputProps:ei,renderOption:es,onClear:ec,autoComplete:ed,scrollAreaProps:eu,__defaultRightSection:ep,__clearSection:em,__clearable:eh,chevronColor:eb,autoSelectOnBlur:ex,openOnFocus:ef,attributes:eg,...ev}=r,ey=(0,d.useMemo)(()=>(0,a.getParsedComboboxData)(E),[E]),eC=(0,d.useRef)({}),ew=(0,d.useMemo)(()=>(0,l.getOptionsLockup)(ey),[ey]),eT=(0,u.useId)(er),[ej,eH,eA]=(0,m.useUncontrolled)({value:S,defaultValue:Z,finalValue:null,onChange:D}),eD=null!=ej?`${ej}`in ew?ew[`${ej}`]:eC.current[`${ej}`]:void 0,eE=(0,p.usePrevious)(eD),[eS,eZ,eB]=(0,m.useUncontrolled)({value:X,defaultValue:J,finalValue:eD?eD.label:"",onChange:Q}),eM=(0,i.useCombobox)({opened:y,defaultOpened:C,onDropdownOpen:()=>{T?.(),M?eM.selectFirstOption():eM.updateSelectedOptionIndex("active",{scrollIntoView:!0})},onDropdownClose:()=>{w?.(),setTimeout(eM.resetSelectedOption,0)}}),ek=e=>{eZ(e),eM.resetSelectedOption()},{resolvedClassNames:eV,resolvedStyles:eO}=(0,o.useResolvedStylesApi)({props:r,styles:f,classNames:x});(0,d.useEffect)(()=>{B&&eM.selectFirstOption()},[B,eS]),(0,d.useEffect)(()=>{null===S&&ek(""),null!=S&&eD&&(eE?.value!==eD.value||eE?.label!==eD.label)&&ek(eD.label)},[S,eD]),(0,d.useEffect)(()=>{eA||eB||ek(null!=ej?`${ej}`in ew?ew[`${ej}`]?.label:eC.current[`${ej}`]?.label||"":"")},[ew,ej]),(0,d.useEffect)(()=>{ej&&`${ej}`in ew&&(eC.current[`${ej}`]=ew[`${ej}`])},[ew,ej]);let eP=(0,h.jsx)(s.Combobox.ClearButton,{...el,onClear:()=>{eH(null,null),ek(""),ec?.()}}),eF=en&&null!=ej&&!P&&!O;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(s.Combobox,{store:eM,__staticSelector:"Select",classNames:eV,styles:eO,unstyled:g,readOnly:O,size:N,attributes:eg,floatingHeight:R,keepMounted:ex,onOptionSubmit:e=>{k?.(e);let t=ee&&`${ew[e].value}`==`${ej}`?null:ew[e],o=t?t.value:null;o!==ej&&eH(o,t),eA||ek(null!=o&&t?.label||""),eM.closeDropdown()},...V,children:[(0,h.jsx)(s.Combobox.Target,{targetType:G?"input":"button",autoComplete:ed,withExpandedAttribute:!0,children:(0,h.jsx)(n.InputBase,{id:eT,__defaultRightSection:(0,h.jsx)(s.Combobox.Chevron,{size:N,error:et,unstyled:g,color:eb}),__clearSection:eP,__clearable:eF,__clearSectionMode:ea,rightSection:_,rightSectionPointerEvents:eo||"none",...ev,size:N,__staticSelector:"Select",disabled:P,readOnly:O||!G,value:eS,onChange:e=>{ek(e.currentTarget.value),eM.openDropdown(),B&&eM.selectFirstOption()},onFocus:e=>{ef&&G&&eM.openDropdown(),j?.(e)},onBlur:e=>{ex&&eM.clickSelectedOption(),G&&eM.closeDropdown();let t=null!=ej&&(`${ej}`in ew?ew[`${ej}`]:eC.current[`${ej}`]);ek(t&&t.label||""),H?.(e)},onClick:e=>{G?eM.openDropdown():eM.toggleDropdown(),A?.(e)},classNames:eV,styles:eO,unstyled:g,pointer:!G,error:et,attributes:eg})}),(0,h.jsx)(c.OptionsDropdown,{data:ey,hidden:O||P,filter:F,search:eS,limit:I,hiddenWhenEmpty:!K,withScrollArea:z,maxDropdownHeight:L,filterOptions:!!G&&eD?.label!==eS,value:ej,checkIconPosition:$,withCheckIcon:U,withAlignedLabels:W,nothingFoundMessage:K,unstyled:g,labelId:ev.label?`${eT}-label`:void 0,"aria-label":ev.label?void 0:ev["aria-label"],renderOption:es,scrollAreaProps:eu})]}),(0,h.jsx)(s.Combobox.HiddenInput,{value:ej,name:Y,form:q,disabled:P,...ei})]})});x.classes={...n.InputBase.classes,...s.Combobox.classes},x.displayName="@mantine/core/Select",e.s(["Select",0,x])},530514,e=>{"use strict";e.s(["createTheme",0,function(e){return e}])},169972,387136,e=>{"use strict";var t=e.i(191788),o=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M28,64A12,12,0,0,1,40,52H216a12,12,0,0,1,0,24H40A12,12,0,0,1,28,64Zm12,52H168a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24Zm176,16H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm-48,40H40a12,12,0,0,0,0,24H168a12,12,0,0,0,0-24Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,64V168a16,16,0,0,1-16,16H40V64Z",opacity:"0.2"}),t.createElement("path",{d:"M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,48H168a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm176,24H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm-48,40H40a8,8,0,0,0,0,16H168a8,8,0,0,0,0-16Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM160,184H64a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm32-32H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16ZM56,112a8,8,0,0,1,8-8h96a8,8,0,0,1,0,16H64A8,8,0,0,1,56,112ZM192,88H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M34,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H40A6,6,0,0,1,34,64Zm6,46H168a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12Zm176,28H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Zm-48,40H40a6,6,0,0,0,0,12H168a6,6,0,0,0,0-12Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,48H168a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm176,24H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm-48,40H40a8,8,0,0,0,0,16H168a8,8,0,0,0,0-16Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M36,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H40A4,4,0,0,1,36,64Zm4,44H168a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8Zm176,32H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Zm-48,40H40a4,4,0,0,0,0,8H168a4,4,0,0,0,0-8Z"}))]]),n=t.forwardRef((e,n)=>t.createElement(o.default,{ref:n,...e,weights:r}));n.displayName="TextAlignLeftIcon",e.s(["TextAlignLeftIcon",0,n],169972);let a=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M28,64A12,12,0,0,1,40,52H216a12,12,0,0,1,0,24H40A12,12,0,0,1,28,64ZM216,92H88a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm0,40H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm0,40H88a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,64V184H56a16,16,0,0,1-16-16V64Z",opacity:"0.2"}),t.createElement("path",{d:"M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64ZM216,96H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM192,184H96a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm0-32H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm0-32H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M34,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H40A6,6,0,0,1,34,64ZM216,98H88a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Zm0,40H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Zm0,40H88a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64ZM216,96H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M36,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H40A4,4,0,0,1,36,64Zm180,36H88a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Zm0,40H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Zm0,40H88a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z"}))]]),l=t.forwardRef((e,r)=>t.createElement(o.default,{ref:r,...e,weights:a}));l.displayName="TextAlignRightIcon",e.s(["TextAlignRightIcon",0,l],387136)},141806,e=>{"use strict";var t=e.i(433512),o=e.i(481178),r=e.i(44091),n=e.i(391466),a=e.i(956449),l=e.i(232471),i={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"},s=e.i(275519),c=e.i(191788),d=e.i(391398);let u=(0,c.createContext)({withinGroup:!1}),p=(0,o.createVarsResolver)((e,{spacing:o})=>({group:{"--ag-spacing":(0,t.getSpacing)(o)}})),m=(0,s.factory)(e=>{let t=(0,r.useProps)("AvatarGroup",null,e),{classNames:o,className:a,style:s,styles:c,unstyled:m,vars:h,spacing:b,attributes:x,...f}=t;return(0,d.jsx)(u,{value:{withinGroup:!0},children:(0,d.jsx)(l.Box,{...(0,n.useStyles)({name:"AvatarGroup",classes:i,props:t,className:a,style:s,classNames:o,styles:c,unstyled:m,attributes:x,vars:h,varsResolver:p,rootSelector:"group"})("group"),...f})})});function h(e){return(0,d.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}m.classes=i,m.varsResolver=p,m.displayName="@mantine/core/AvatarGroup";let b=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],x=(0,o.createVarsResolver)((e,{size:o,radius:r,variant:n,gradient:a,color:l,autoContrast:i,name:s,allowedInitialsColors:c})=>{let d="initials"===l&&"string"==typeof s?function(e,t=b){return t[Math.abs(function(e){let t=0;for(let o=0;o<e.length;o+=1)t=(t<<5)-t+e.charCodeAt(o)|0;return t}(e))%t.length]}(s,c):l,u=e.variantColorResolver({color:d||"gray",theme:e,gradient:a,variant:n||"light",autoContrast:i});return{root:{"--avatar-size":(0,t.getSize)(o,"avatar-size"),"--avatar-radius":void 0===r?void 0:(0,t.getRadius)(r),"--avatar-bg":d||n?u.background:void 0,"--avatar-color":d||n?u.color:void 0,"--avatar-bd":d||n?u.border:void 0}}}),f=(0,a.polymorphicFactory)(e=>{let t=(0,r.useProps)("Avatar",null,e),{classNames:o,className:a,style:s,styles:p,unstyled:m,vars:b,src:f,alt:g,radius:v,color:y,gradient:C,imageProps:w,children:T,autoContrast:j,mod:H,name:A,allowedInitialsColors:D,attributes:E,...S}=t,Z=(0,c.use)(u),[B,M]=(0,c.useState)(!f),k=(0,n.useStyles)({name:"Avatar",props:t,classes:i,className:a,style:s,classNames:o,styles:p,unstyled:m,attributes:E,vars:b,varsResolver:x});return(0,c.useEffect)(()=>M(!f),[f]),(0,d.jsx)(l.Box,{...k("root"),mod:[{"within-group":Z.withinGroup},H],...S,children:B||!f?(0,d.jsx)("span",{...k("placeholder"),title:g,children:T||"string"==typeof A&&function(e,t=2){let o=e.split(" ");return 1===o.length?e.slice(0,t).toUpperCase():o.map(e=>e[0]).slice(0,t).join("").toUpperCase()}(A)||(0,d.jsx)(h,{})}):(0,d.jsx)("img",{...w,...k("image"),src:f,alt:g,onError:e=>{M(!0),w?.onError?.(e)}})})});f.classes=i,f.varsResolver=x,f.displayName="@mantine/core/Avatar",f.Group=m,e.s(["Avatar",0,f],141806)},369974,e=>{"use strict";var t=e.i(44091),o=e.i(392862);let[r,n]=(0,e.i(386179).createSafeContext)("HoverCard component was not found in the tree");var a=e.i(191788),l=e.i(391398),i=e.i(458272);let s=(0,a.createContext)({withinGroup:!1}),c={openDelay:0,closeDelay:0};function d(e){let{openDelay:o,closeDelay:r,children:n}=(0,t.useProps)("HoverCardGroup",c,e);return(0,l.jsx)(s,{value:{withinGroup:!0},children:(0,l.jsx)(i.FloatingDelayGroup,{delay:{open:o,close:r},children:n})})}d.displayName="@mantine/core/HoverCardGroup",d.extend=e=>e;var u=e.i(334816);function p(e){let{children:r,onMouseEnter:i,onMouseLeave:c,...d}=(0,t.useProps)("HoverCardDropdown",null,e),p=n();if((0,a.use)(s).withinGroup&&p.getFloatingProps&&p.floating){let e=p.getFloatingProps();return(0,l.jsx)(o.Popover.Dropdown,{ref:p.floating,...e,onMouseEnter:(0,u.createEventHandler)(i,e.onMouseEnter),onMouseLeave:(0,u.createEventHandler)(c,e.onMouseLeave),...d,children:r})}let m=(0,u.createEventHandler)(i,p.openDropdown),h=(0,u.createEventHandler)(c,p.closeDropdown);return(0,l.jsx)(o.Popover.Dropdown,{onMouseEnter:m,onMouseLeave:h,...d,children:r})}p.displayName="@mantine/core/HoverCardDropdown";var m=e.i(275825),h=e.i(409703),b=e.i(332977);let x={refProp:"ref"};function f(e){let{children:r,refProp:i,eventPropsWrapperName:c,...d}=(0,t.useProps)("HoverCardTarget",x,e),p=(0,h.getSingleElementChild)(r);if(!p)throw Error("HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let f=n(),g=(0,a.use)(s),v=(0,b.useMergedRef)((0,m.getRefProp)(p),f.assignTarget);if(g.withinGroup&&f.getReferenceProps&&f.reference){let e=f.getReferenceProps();return(0,l.jsx)(o.Popover.Target,{refProp:i,...d,children:(0,a.cloneElement)(p,c?{[c]:{...e,ref:f.reference}}:{...e,ref:f.reference})})}let y={onMouseEnter:(0,u.createEventHandler)(p.props.onMouseEnter,f.openDropdown),onMouseLeave:(0,u.createEventHandler)(p.props.onMouseLeave,f.closeDropdown)},C={...c?{[c]:y}:y,ref:v};return(0,l.jsx)(o.Popover.Target,{refProp:i,...d,children:(0,a.cloneElement)(p,C)})}f.displayName="@mantine/core/HoverCardTarget";var g=e.i(107315);let v={openDelay:0,closeDelay:150,initiallyOpened:!1};function y(e){let{children:n,onOpen:c,onClose:d,openDelay:u,closeDelay:p,initiallyOpened:m,...h}=(0,t.useProps)("HoverCard",v,e),b=function(e){let[t,o]=(0,a.useState)(e.defaultOpened),r="boolean"==typeof e.opened?e.opened:t,n=(0,a.use)(s).withinGroup,l=(0,g.useId)(),c=(0,a.useRef)(-1),d=(0,a.useRef)(-1),u=(0,a.useRef)(null),p=(0,a.useCallback)(e=>{u.current=e},[]),m=(0,a.useCallback)(()=>{window.clearTimeout(c.current),window.clearTimeout(d.current)},[]),h=(0,a.useCallback)(t=>{o(t),t?(v(l),e.onOpen?.()):e.onClose?.()},[l,e.onOpen,e.onClose]),{context:b,refs:x}=(0,i.useFloating)({open:r,onOpenChange:h}),{delay:f,setCurrentId:v}=(0,i.useDelayGroup)(b,{id:l}),{getReferenceProps:y,getFloatingProps:C}=(0,i.useInteractions)([(0,i.useHover)(b,{enabled:!0,delay:n?f:{open:e.openDelay,close:e.closeDelay}}),(0,i.useRole)(b,{role:"dialog"}),(0,i.useDismiss)(b,{enabled:n})]),w=(0,a.useCallback)(()=>{n||(m(),0===e.openDelay||void 0===e.openDelay?h(!0):c.current=window.setTimeout(()=>h(!0),e.openDelay))},[n,m,e.openDelay,h]),T=(0,a.useCallback)(()=>{n||(m(),0===e.closeDelay||void 0===e.closeDelay?h(!1):d.current=window.setTimeout(()=>h(!1),e.closeDelay))},[n,m,e.closeDelay,h]),j=(0,a.useRef)(h);return j.current=h,(0,a.useEffect)(()=>()=>m(),[m]),(0,a.useEffect)(()=>{if(!r||n||"u"<typeof IntersectionObserver)return;let e=u.current;if(!e)return;let t=new IntersectionObserver(()=>{e.isConnected&&0!==e.getClientRects().length||(m(),j.current(!1))});return t.observe(e),()=>t.disconnect()},[r,n,m]),{opened:r,reference:x.setReference,floating:x.setFloating,assignTarget:p,getReferenceProps:y,getFloatingProps:C,openDropdown:w,closeDropdown:T}}({openDelay:u,closeDelay:p,defaultOpened:m,onOpen:c,onClose:d});return(0,l.jsx)(r,{value:{openDropdown:b.openDropdown,closeDropdown:b.closeDropdown,assignTarget:b.assignTarget,getReferenceProps:b.getReferenceProps,getFloatingProps:b.getFloatingProps,reference:b.reference,floating:b.floating},children:(0,l.jsx)(o.Popover,{...h,opened:b.opened,__staticSelector:"HoverCard",children:n})})}y.displayName="@mantine/core/HoverCard",y.Target=f,y.Dropdown=p,y.Group=d,y.extend=e=>e,e.s(["HoverCard",0,y],369974)},541772,e=>{"use strict";var t=e.i(191788);e.s(["useDisclosure",0,function(e=!1,o={}){let[r,n]=(0,t.useState)(e),a=(0,t.useCallback)(()=>{n(e=>e||(o.onOpen?.(),!0))},[o.onOpen]),l=(0,t.useCallback)(()=>{n(e=>e?(o.onClose?.(),!1):e)},[o.onClose]);return[r,{open:a,close:l,toggle:(0,t.useCallback)(()=>{r?l():a()},[l,a,r]),set:n}]}])},931882,e=>{"use strict";var t=e.i(191788),o=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,96l-80,80L48,96Z",opacity:"0.2"}),t.createElement("path",{d:"M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"}))]]),n=t.forwardRef((e,n)=>t.createElement(o.default,{ref:n,...e,weights:r}));n.displayName="CaretDownIcon",e.s(["CaretDownIcon",0,n],931882)},123895,e=>{"use strict";var t=e.i(191788),o=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,20a108,108,0,0,0,0,216c22.27,0,45.69-6.73,62.64-18a12,12,0,1,0-13.29-20c-13,8.63-31.89,14-49.35,14a84,84,0,1,1,84-84c0,9.29-1.67,17.08-4.69,21.95-2.64,4.24-6,6.05-11.31,6.05s-8.67-1.81-11.31-6.05c-3-4.87-4.69-12.66-4.69-21.95V88a12,12,0,0,0-23.49-3.46,52,52,0,1,0,8.86,79.57C172.3,174.3,182.81,180,196,180c24.67,0,40-19.92,40-52A108.12,108.12,0,0,0,128,20Zm0,136a28,28,0,1,1,28-28A28,28,0,0,1,128,156Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M232,128c0,.51,0,1,0,1.52-.34,14.26-5.63,30.48-28,30.48-23.14,0-28-17.4-28-32V88a8,8,0,0,0-8.53-8A8.17,8.17,0,0,0,160,88.27v4a48,48,0,1,0,6.73,64.05,40.19,40.19,0,0,0,3.38,5C175.48,168,185.71,176,204,176a54.81,54.81,0,0,0,9.22-.75,4,4,0,0,1,4.09,6A104.05,104.05,0,0,1,125.91,232C71.13,230.9,26.2,186.86,24.08,132.11A104,104,0,1,1,232,128ZM96,128a32,32,0,1,0,32-32A32,32,0,0,0,96,128Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,26a102,102,0,0,0,0,204c21.13,0,43.31-6.35,59.32-17a6,6,0,0,0-6.65-10c-13.9,9.25-34.09,15-52.67,15a90,90,0,1,1,90-90c0,29.58-13.78,34-22,34s-22-4.42-22-34V88a6,6,0,0,0-12,0v9a46,46,0,1,0,4.34,56.32C171.76,166.6,182,174,196,174c21.29,0,34-17.2,34-46A102.12,102.12,0,0,0,128,26Zm0,136a34,34,0,1,1,34-34A34,34,0,0,1,128,162Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,28a100,100,0,0,0,0,200c20.76,0,42.52-6.23,58.21-16.66a4,4,0,1,0-4.43-6.67C167.35,214.27,147.24,220,128,220a92,92,0,1,1,92-92c0,31.32-15,36-24,36s-24-4.68-24-36V88a4,4,0,0,0-8,0v14.75a44,44,0,1,0,2.82,45.94C171.46,163.58,181.66,172,196,172c20,0,32-16.45,32-44A100.11,100.11,0,0,0,128,28Zm0,136a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z"}))]]),n=t.forwardRef((e,n)=>t.createElement(o.default,{ref:n,...e,weights:r}));n.displayName="AtIcon",e.s(["AtIcon",0,n],123895)},960831,e=>{"use strict";e.s(["inputControls",0,[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"md",libraryValue:"md"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}],"inputOnlyControls",0,[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"md",libraryValue:"md"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],"inputWrapperOnlyControls",0,[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}]])},293907,e=>{"use strict";var t=e.i(191788),o=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M100,36H56A20,20,0,0,0,36,56v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,100,36ZM96,96H60V60H96ZM200,36H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36Zm-4,60H160V60h36Zm-96,40H56a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,100,136Zm-4,60H60V160H96Zm104-60H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,200,136Zm-4,60H160V160h36Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M112,56v48a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h48A8,8,0,0,1,112,56Zm88-8H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V56A8,8,0,0,0,200,48Zm-96,96H56a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,104,144Zm96,0H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,200,144Z",opacity:"0.2"}),t.createElement("path",{d:"M200,136H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48ZM104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M120,56v48a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40h48A16,16,0,0,1,120,56Zm80-16H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm-96,96H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm96,0H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M104,42H56A14,14,0,0,0,42,56v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,104,42Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm-98,34H56a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,104,138Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,200,138Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M104,44H56A12,12,0,0,0,44,56v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,104,44Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm92-60H152a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,200,44Zm4,60a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4ZM104,140H56a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V152A12,12,0,0,0,104,140Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm92-60H152a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V152A12,12,0,0,0,200,140Zm4,60a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Z"}))]]),n=t.forwardRef((e,n)=>t.createElement(o.default,{ref:n,...e,weights:r}));n.displayName="SquaresFourIcon",e.s(["SquaresFourIcon",0,n],293907)},981377,e=>{"use strict";var t=e.i(44091),o=e.i(391466),r=e.i(275519),n=e.i(232471),a={root:"m_d08caa0"},l=e.i(391398);let i=(0,r.factory)(e=>{let r=(0,t.useProps)("Typography",null,e),{classNames:i,className:s,style:c,styles:d,unstyled:u,attributes:p,...m}=r;return(0,l.jsx)(n.Box,{...(0,o.useStyles)({name:"Typography",classes:a,props:r,className:s,style:c,classNames:i,styles:d,unstyled:u,attributes:p})("root"),...m})});i.classes=a,i.displayName="@mantine/core/Typography",e.s(["Typography",0,i],981377)},471714,e=>{"use strict";var t=e.i(191788),o=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M243,96a20.33,20.33,0,0,0-17.74-14l-56.59-4.57L146.83,24.62a20.36,20.36,0,0,0-37.66,0L87.35,77.44,30.76,82A20.45,20.45,0,0,0,19.1,117.88l43.18,37.24-13.2,55.7A20.37,20.37,0,0,0,79.57,233L128,203.19,176.43,233a20.39,20.39,0,0,0,30.49-22.15l-13.2-55.7,43.18-37.24A20.43,20.43,0,0,0,243,96ZM172.53,141.7a12,12,0,0,0-3.84,11.86L181.58,208l-47.29-29.08a12,12,0,0,0-12.58,0L74.42,208l12.89-54.4a12,12,0,0,0-3.84-11.86L41.2,105.24l55.4-4.47a12,12,0,0,0,10.13-7.38L128,41.89l21.27,51.5a12,12,0,0,0,10.13,7.38l55.4,4.47Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M229.06,108.79l-48.7,42,14.88,62.79a8.4,8.4,0,0,1-12.52,9.17L128,189.09,73.28,222.74a8.4,8.4,0,0,1-12.52-9.17l14.88-62.79-48.7-42A8.46,8.46,0,0,1,31.73,94L95.64,88.8l24.62-59.6a8.36,8.36,0,0,1,15.48,0l24.62,59.6L224.27,94A8.46,8.46,0,0,1,229.06,108.79Z",opacity:"0.2"}),t.createElement("path",{d:"M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M237.28,97.87A14.18,14.18,0,0,0,224.76,88l-60.25-4.87-23.22-56.2a14.37,14.37,0,0,0-26.58,0L91.49,83.11,31.24,88a14.18,14.18,0,0,0-12.52,9.89A14.43,14.43,0,0,0,23,113.32L69,152.93l-14,59.25a14.4,14.4,0,0,0,5.59,15,14.1,14.1,0,0,0,15.91.6L128,196.12l51.58,31.71a14.1,14.1,0,0,0,15.91-.6,14.4,14.4,0,0,0,5.59-15l-14-59.25L233,113.32A14.43,14.43,0,0,0,237.28,97.87Zm-12.14,6.37-48.69,42a6,6,0,0,0-1.92,5.92l14.88,62.79a2.35,2.35,0,0,1-.95,2.57,2.24,2.24,0,0,1-2.6.1L131.14,184a6,6,0,0,0-6.28,0L70.14,217.61a2.24,2.24,0,0,1-2.6-.1,2.35,2.35,0,0,1-1-2.57l14.88-62.79a6,6,0,0,0-1.92-5.92l-48.69-42a2.37,2.37,0,0,1-.73-2.65,2.28,2.28,0,0,1,2.07-1.65l63.92-5.16a6,6,0,0,0,5.06-3.69l24.63-59.6a2.35,2.35,0,0,1,4.38,0l24.63,59.6a6,6,0,0,0,5.06,3.69l63.92,5.16a2.28,2.28,0,0,1,2.07,1.65A2.37,2.37,0,0,1,225.14,104.24Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M235.36,98.49A12.21,12.21,0,0,0,224.59,90l-61.47-5L139.44,27.67a12.37,12.37,0,0,0-22.88,0L92.88,85,31.41,90a12.45,12.45,0,0,0-7.07,21.84l46.85,40.41L56.87,212.64a12.35,12.35,0,0,0,18.51,13.49L128,193.77l52.62,32.36a12.12,12.12,0,0,0,13.69-.51,12.28,12.28,0,0,0,4.82-13l-14.32-60.42,46.85-40.41A12.29,12.29,0,0,0,235.36,98.49Zm-8.93,7.26-48.68,42a4,4,0,0,0-1.28,3.95l14.87,62.79a4.37,4.37,0,0,1-1.72,4.65,4.24,4.24,0,0,1-4.81.18L130.1,185.67a4,4,0,0,0-4.2,0L71.19,219.32a4.24,4.24,0,0,1-4.81-.18,4.37,4.37,0,0,1-1.72-4.65L79.53,151.7a4,4,0,0,0-1.28-3.95l-48.68-42A4.37,4.37,0,0,1,28.25,101a4.31,4.31,0,0,1,3.81-3L96,92.79a4,4,0,0,0,3.38-2.46L124,30.73a4.35,4.35,0,0,1,8.08,0l24.62,59.6A4,4,0,0,0,160,92.79l63.9,5.15a4.31,4.31,0,0,1,3.81,3A4.37,4.37,0,0,1,226.43,105.75Z"}))]]),n=t.forwardRef((e,n)=>t.createElement(o.default,{ref:n,...e,weights:r}));n.displayName="StarIcon",e.s(["StarIcon",0,n],471714)},26485,e=>{"use strict";var t=e.i(191788);e.s(["useInputState",0,function(e){let[o,r]=(0,t.useState)(e);return[o,e=>{if(e)if("function"==typeof e)r(e);else if("object"==typeof e&&"nativeEvent"in e){let{currentTarget:t}=e;r("checkbox"===t.type?t.checked:t.value)}else r(e);else r(e)}]}])},648858,e=>{"use strict";var t=e.i(191788),o=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M228,67.24a39.77,39.77,0,0,0-12.51-28.52C199.91,24,174.71,24.5,159.29,39.93L142.48,56.84a28,28,0,0,0-35.64,3.29l-9,9a20,20,0,0,0-.73,27.49L48.9,144.84A43.76,43.76,0,0,0,37,185.28l-7.5,17.19a17.66,17.66,0,0,0,3.71,19.65,19.9,19.9,0,0,0,22.15,4.19l16.31-7.13a43.88,43.88,0,0,0,39.45-12.09l48.24-48.26a20,20,0,0,0,27.47-.73l9-9a28.06,28.06,0,0,0,3.26-35.72l17.23-17.33A39.69,39.69,0,0,0,228,67.24ZM94.15,190.11a20,20,0,0,1-20,5,11.93,11.93,0,0,0-8.32.47L57,199.38,60.69,191a12,12,0,0,0,.37-8.64,19.92,19.92,0,0,1,4.81-20.55l48.2-48.22,28.28,28.3Zm105.14-111-25.37,25.52a12,12,0,0,0,0,16.95l4.88,4.89a4,4,0,0,1,0,5.66l-6.14,6.15-55-55.05,6.14-6.14a4,4,0,0,1,5.65,0L134.35,82a12,12,0,0,0,8.49,3.51h0A12,12,0,0,0,151.34,82l24.94-25.08c6.3-6.3,16.48-6.63,22.71-.74a16,16,0,0,1,.3,23Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M207.8,87.6l-25.37,25.53,4.89,4.88a16,16,0,0,1,0,22.64l-9,9a8,8,0,0,1-11.32,0l-60.68-60.7a8,8,0,0,1,0-11.32l9-9a16,16,0,0,1,22.63,0l4.88,4.89,25-25.11c10.79-10.79,28.37-11.45,39.45-1A28,28,0,0,1,207.8,87.6Z",opacity:"0.2"}),t.createElement("path",{d:"M224,67.3a35.79,35.79,0,0,0-11.26-25.66c-14-13.28-36.72-12.78-50.62,1.13L142.8,62.2a24,24,0,0,0-33.14.77l-9,9a16,16,0,0,0,0,22.64l2,2.06-51,51a39.75,39.75,0,0,0-10.53,38l-8,18.41A13.68,13.68,0,0,0,36,219.3a15.92,15.92,0,0,0,17.71,3.35L71.23,215a39.89,39.89,0,0,0,37.06-10.75l51-51,2.06,2.06a16,16,0,0,0,22.62,0l9-9a24,24,0,0,0,.74-33.18l19.75-19.87A35.75,35.75,0,0,0,224,67.3ZM97,193a24,24,0,0,1-24,6,8,8,0,0,0-5.55.31l-18.1,7.91L57,189.41a8,8,0,0,0,.25-5.75A23.88,23.88,0,0,1,63,159l51-51,33.94,34ZM202.13,82l-25.37,25.52a8,8,0,0,0,0,11.3l4.89,4.89a8,8,0,0,1,0,11.32l-9,9L112,83.26l9-9a8,8,0,0,1,11.31,0l4.89,4.89a8,8,0,0,0,5.65,2.34h0a8,8,0,0,0,5.66-2.36l24.94-25.09c7.81-7.82,20.5-8.18,28.29-.81a20,20,0,0,1,.39,28.7Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,67.3a35.79,35.79,0,0,0-11.26-25.66c-14-13.28-36.72-12.78-50.62,1.13L138.8,66.2a24,24,0,0,0-33.14.77l-5,5a16,16,0,0,0,0,22.64l2,2.06-51,51a39.75,39.75,0,0,0-10.53,38l-8,18.41A13.68,13.68,0,0,0,36,219.3a15.92,15.92,0,0,0,17.71,3.35L71.23,215a39.89,39.89,0,0,0,37.06-10.75l51-51,2.06,2.06a16,16,0,0,0,22.62,0l5-5a24,24,0,0,0,.74-33.18l23.75-23.87A35.75,35.75,0,0,0,224,67.3ZM97,193a24,24,0,0,1-24,6,8,8,0,0,0-5.55.31l-18.1,7.91L57,189.41a8,8,0,0,0,.25-5.75A23.88,23.88,0,0,1,63,159l51-51,33.94,34Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M222,67.34a33.81,33.81,0,0,0-10.64-24.25C198.12,30.56,176.68,31,163.54,44.18L142.82,65l-.63-.63a22,22,0,0,0-31.11,0l-9,9a14,14,0,0,0,0,19.81l3.47,3.47L53.14,149.1a37.79,37.79,0,0,0-9.84,36.73l-8.31,19a11.68,11.68,0,0,0,2.46,13A13.91,13.91,0,0,0,47.32,222,14.15,14.15,0,0,0,53,220.82L71,212.92a37.92,37.92,0,0,0,35.84-10.07l52.44-52.46,3.47,3.48a14,14,0,0,0,19.8,0l9-9a22,22,0,0,0,0-31.12l-.66-.66L212,91.85A33.76,33.76,0,0,0,222,67.34Zm-123.61,127a26,26,0,0,1-26,6.47,6,6,0,0,0-4.16.24l-20,8.75a2,2,0,0,1-2.09-.31l9.12-20.9a5.94,5.94,0,0,0,.19-4.31,25.88,25.88,0,0,1,6.26-26.72l52.44-52.45,36.76,36.78Zm105.16-111L178.17,108.9a6,6,0,0,0,0,8.47l4.88,4.89a10,10,0,0,1,0,14.15l-9,9a2,2,0,0,1-2.82,0l-60.69-60.7a2,2,0,0,1,0-2.83l9-9a10,10,0,0,1,14.14,0l4.89,4.89a6,6,0,0,0,4.24,1.75h0a6,6,0,0,0,4.25-1.77L172,52.66c8.58-8.58,22.52-9,31.08-.85a22,22,0,0,1,.44,31.57Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,67.3a35.79,35.79,0,0,0-11.26-25.66c-14-13.28-36.72-12.78-50.62,1.13L142.8,62.2a24,24,0,0,0-33.14.77l-9,9a16,16,0,0,0,0,22.64l2,2.06-51,51a39.75,39.75,0,0,0-10.53,38l-8,18.41A13.68,13.68,0,0,0,36,219.3a15.92,15.92,0,0,0,17.71,3.35L71.23,215a39.89,39.89,0,0,0,37.06-10.75l51-51,2.06,2.06a16,16,0,0,0,22.62,0l9-9a24,24,0,0,0,.74-33.18l19.75-19.87A35.75,35.75,0,0,0,224,67.3ZM97,193a24,24,0,0,1-24,6,8,8,0,0,0-5.55.31l-18.1,7.91L57,189.41a8,8,0,0,0,.25-5.75A23.88,23.88,0,0,1,63,159l51-51,33.94,34ZM202.13,82l-25.37,25.52a8,8,0,0,0,0,11.3l4.89,4.89a8,8,0,0,1,0,11.32l-9,9L112,83.26l9-9a8,8,0,0,1,11.31,0l4.89,4.89a8,8,0,0,0,11.33,0l24.94-25.09c7.81-7.82,20.5-8.18,28.29-.81a20,20,0,0,1,.39,28.7Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M220,67.37a31.82,31.82,0,0,0-10-22.82c-12.46-11.8-32.66-11.33-45,1.05L142.82,67.86l-2-2a20,20,0,0,0-28.28,0l-9,9a12,12,0,0,0,0,17l4.89,4.89L54.55,150.52A35.81,35.81,0,0,0,45.42,186l-8.6,19.7a9.7,9.7,0,0,0,2,10.79A12,12,0,0,0,52.15,219l18.72-8.18a35.9,35.9,0,0,0,34.59-9.37l53.86-53.87,4.88,4.89a12,12,0,0,0,17,0l9-9a20,20,0,0,0,0-28.3l-2.06-2.06,22.55-22.69A31.75,31.75,0,0,0,220,67.37ZM99.81,195.78a28,28,0,0,1-28,7,4,4,0,0,0-2.78.15l-20,8.75a4,4,0,0,1-4.43-.84,1.73,1.73,0,0,1-.36-1.93l9.19-21.06a4,4,0,0,0,.12-2.88,27.87,27.87,0,0,1,6.74-28.77l53.85-53.87,39.6,39.61Zm79.78-85.47a4,4,0,0,0,0,5.65l4.89,4.89a12,12,0,0,1,0,17l-9,9a4,4,0,0,1-5.66,0L109.18,86.1a4,4,0,0,1,0-5.66l9-9a12,12,0,0,1,17,0L140,76.36a4,4,0,0,0,2.83,1.17h0a4,4,0,0,0,2.83-1.18l25-25.1c9.33-9.34,24.52-9.73,33.87-.89A24,24,0,0,1,205,84.79Z"}))]]),n=t.forwardRef((e,n)=>t.createElement(o.default,{ref:n,...e,weights:r}));n.displayName="EyedropperIcon",e.s(["EyedropperIcon",0,n],648858)},7883,e=>{"use strict";e.s(["FLOATING_ARROW_POSITION_DATA",0,[{label:"side",value:"side"},{label:"center",value:"center"}],"FLOATING_POSITION_DATA",0,[{label:"top",value:"top"},{label:"top-start",value:"top-start"},{label:"top-end",value:"top-end"},{label:"left",value:"left"},{label:"left-start",value:"left-start"},{label:"left-end",value:"left-end"},{label:"right",value:"right"},{label:"right-start",value:"right-start"},{label:"right-end",value:"right-end"},{label:"bottom",value:"bottom"},{label:"bottom-start",value:"bottom-start"},{label:"bottom-end",value:"bottom-end"}]])},165678,e=>{"use strict";var t=e.i(648863),o=e.i(485108),r=e.i(431868),n=e.i(391398);let a={type:"configurator",component:function(e){return(0,n.jsx)(r.Tooltip,{label:"Tooltip",...e,children:(0,n.jsx)(o.Button,{children:"With tooltip"})})},code:`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip"{{props}}>
      <Button>With tooltip</Button>
    </Tooltip>
  );
}
`,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"__none__"}]};var l=e.i(191788);let i={type:"code",centered:!0,code:`
import { useState } from 'react';
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(true);

  return (
    <Tooltip label="Ctrl + J" opened={opened}>
      <Button onClick={() => setOpened((o) => !o)}>
        Toggle color scheme
      </Button>
    </Tooltip>
  );
}`,component:function(){let[e,t]=(0,l.useState)(!1);return(0,n.jsx)(r.Tooltip,{label:"Ctrl + J",opened:e,children:(0,n.jsx)(o.Button,{onClick:()=>t(e=>!e),children:"Toggle color scheme"})})}},s={type:"configurator",component:function(e){return(0,n.jsx)(r.Tooltip,{label:"Tooltip",withArrow:!0,opened:!0,position:"top-start",...e,children:(0,n.jsx)(o.Button,{children:"Button with tooltip"})})},code:`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip{{props}} label="Tooltip" withArrow opened position="top-start">
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
`,centered:!0,controls:[{type:"segmented",prop:"arrowPosition",initialValue:"center",libraryValue:"center",data:["center","side","merge"]},{type:"number",prop:"arrowOffset",initialValue:10,libraryValue:null,min:5,max:50},{type:"number",prop:"arrowSize",initialValue:4,libraryValue:null,min:2,max:8},{type:"number",prop:"arrowRadius",initialValue:0,libraryValue:0,min:0,max:10}]},c={type:"code",code:`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip
      multiline
      w={220}
      withArrow
      transitionProps={{ duration: 200 }}
      label="Use this button to save this information in your profile, after that you will be able to access it any time and share it via email."
    >
      <Button>Multiline tooltip</Button>
    </Tooltip>
  );
}
`,centered:!0,component:function(){return(0,n.jsx)(r.Tooltip,{multiline:!0,w:220,withArrow:!0,transitionProps:{duration:200},label:"Use this button to save this information in your profile, after that you will be able to access it any time and share it via email.",children:(0,n.jsx)(o.Button,{children:"Multiline tooltip"})})}};var d=e.i(257177),u=e.i(725695),p=e.i(412011),p=p,m=e.i(76112);let h={type:"code",component:function(){return(0,n.jsx)(u.Group,{justify:"center",style:{cursor:"default"},children:(0,m.keys)(p.transitions).map(e=>(0,n.jsx)(r.Tooltip,{label:e,transitionProps:{transition:e,duration:300},children:(0,n.jsx)(d.Badge,{variant:"light",children:e})},e))})}},b={type:"code",code:`
import { Button, Tooltip, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Tooltip label="Opened after 500ms" openDelay={500}>
        <Button>Delay open - 500ms</Button>
      </Tooltip>
      <Tooltip label="Closes after 500ms" closeDelay={500}>
        <Button>Delay close - 500ms</Button>
      </Tooltip>
    </Group>
  );
}
`,component:function(){return(0,n.jsxs)(u.Group,{justify:"center",children:[(0,n.jsx)(r.Tooltip,{label:"Opened after 500ms",openDelay:500,children:(0,n.jsx)(o.Button,{children:"Delay open - 500ms"})}),(0,n.jsx)(r.Tooltip,{label:"Closes after 500ms",closeDelay:500,children:(0,n.jsx)(o.Button,{children:"Delay close - 500ms"})})]})}};var x=e.i(232471);let f={type:"code",component:function(){return(0,n.jsx)(r.Tooltip.Floating,{label:"Floating tooltip",children:(0,n.jsx)(x.Box,{p:"xl",bg:"var(--mantine-color-blue-light)",style:{cursor:"default"},children:"Hover over the box to see tooltip"})})},code:`
import { Box, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip.Floating label="Floating tooltip">
      <Box p="xl" bg="var(--mantine-color-blue-light)" style={{ cursor: 'default' }}>
        Hover over the box to see tooltip
      </Box>
    </Tooltip.Floating>
  );
}
`,centered:!0},g={type:"code",component:function(){return(0,n.jsx)(r.Tooltip,{label:"Tooltip",children:(0,n.jsx)(o.Button,{children:"Button with tooltip"})})},centered:!0,code:`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip">
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
`},v={type:"code",component:function(){return(0,n.jsx)(r.Tooltip.Group,{openDelay:500,closeDelay:100,children:(0,n.jsxs)(u.Group,{justify:"center",children:[(0,n.jsx)(r.Tooltip,{label:"Tooltip 1",children:(0,n.jsx)(o.Button,{children:"Button 1"})}),(0,n.jsx)(r.Tooltip,{label:"Tooltip 2",children:(0,n.jsx)(o.Button,{children:"Button 2"})}),(0,n.jsx)(r.Tooltip,{label:"Tooltip 3",children:(0,n.jsx)(o.Button,{children:"Button 3"})})]})})},code:`
import { Tooltip, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Tooltip.Group openDelay={500} closeDelay={100}>
      <Group justify="center">
        <Tooltip label="Tooltip 1">
          <Button>Button 1</Button>
        </Tooltip>
        <Tooltip label="Tooltip 2">
          <Button>Button 2</Button>
        </Tooltip>
        <Tooltip label="Tooltip 3">
          <Button>Button 3</Button>
        </Tooltip>
      </Group>
    </Tooltip.Group>
  );
}
`};var y=e.i(7883);let C={type:"configurator",component:function(e){return(0,n.jsx)(r.Tooltip,{label:"Tooltip",opened:!0,...e,children:(0,n.jsx)(o.Button,{children:"Button with tooltip"})})},code:`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip" opened{{props}}>
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
`,centered:!0,controls:[{type:"select",prop:"position",initialValue:"top",data:y.FLOATING_POSITION_DATA,libraryValue:null},{type:"number",prop:"offset",initialValue:5,libraryValue:null,min:-50,max:50}]};var w=e.i(218262),T=e.i(883364);let j={type:"code",component:function(){return(0,n.jsxs)(T.Text,{children:["Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this Pokémon was hunted close to extinction by those who were after the priceless antlers."," ",(0,n.jsx)(r.Tooltip,{inline:!0,label:"Inline tooltip",children:(0,n.jsx)(w.Mark,{children:"When visiting a junkyard"})}),", you may catch sight of it having an intense fight with Murkrow over shiny objects.Ho-Oh’s feathers glow in seven colors depending on the angle at which they are struck by light. These feathers are said to bring happiness to the bearers. This Pokémon is said to live at the foot of a rainbow."]})},code:`
import { Tooltip, Mark, Text } from '@mantine/core';

function Demo() {
  return (
    <Text>
      Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this
      Pok\xe9mon was hunted close to extinction by those who were after the priceless antlers.{' '}
      <Tooltip inline label="Inline tooltip">
        <Mark>When visiting a junkyard</Mark>
      </Tooltip>
      , you may catch sight of it having an intense fight with Murkrow over shiny objects.Ho-Oh’s
      feathers glow in seven colors depending on the angle at which they are struck by light. These
      feathers are said to bring happiness to the bearers. This Pok\xe9mon is said to live at the foot
      of a rainbow.
    </Text>
  );
}
`},H={type:"code",centered:!0,component:function(){return(0,n.jsx)(r.Tooltip,{label:"top",position:"top",closeDelay:1500,children:(0,n.jsx)(r.Tooltip,{label:"bottom",position:"bottom",openDelay:500,closeDelay:1e3,children:(0,n.jsx)(r.Tooltip,{label:"left",position:"left",openDelay:1e3,closeDelay:500,children:(0,n.jsx)(r.Tooltip,{label:"right",position:"right",openDelay:1500,children:(0,n.jsx)(o.Button,{children:"Nested Tooltips"})})})})})},code:`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="top" position="top" closeDelay={1500}>
      <Tooltip label="bottom" position="bottom" openDelay={500} closeDelay={1000}>
        <Tooltip label="left" position="left" openDelay={1000} closeDelay={500}>
          <Tooltip label="right" position="right" openDelay={1500}>
            <Button>Nested Tooltips</Button>
          </Tooltip>
        </Tooltip>
      </Tooltip>
    </Tooltip>
  );
}
`},A={type:"configurator",component:function(e){return(0,n.jsx)(r.Tooltip,{position:e.position,opened:!0,label:"Tooltip",offset:{mainAxis:e.mainAxis,crossAxis:e.crossAxis},children:(0,n.jsx)(o.Button,{children:"Button with tooltip"})})},code:e=>`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip
      position="${e.position}"
      opened
      label="Tooltip"
      offset={{ mainAxis: ${e.mainAxis}, crossAxis: ${e.crossAxis} }}
    >
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
`,centered:!0,controls:[{type:"select",prop:"position",initialValue:"top",data:y.FLOATING_POSITION_DATA,libraryValue:null},{type:"number",prop:"mainAxis",initialValue:5,libraryValue:null,min:-50,max:50},{type:"number",prop:"crossAxis",initialValue:0,libraryValue:null,min:-50,max:50}]},D={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.Tooltip,{target:"#hover-me",label:"Tooltip over button"}),(0,n.jsx)(o.Button,{id:"hover-me",children:"Hover me to see tooltip"})]})},code:`
import { Button, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <>
      <Tooltip target="#hover-me" label="Tooltip over button" />
      <Button id="hover-me">Hover me to see tooltip</Button>
    </>
  );
}
`,centered:!0};var E=(0,t.__exportAll)({arrow:()=>s,configurator:()=>a,controlled:()=>i,delay:()=>b,floating:()=>f,group:()=>v,inline:()=>j,multiline:()=>c,nested:()=>H,offset:()=>C,offsetAxis:()=>A,target:()=>D,transitions:()=>h,usage:()=>g});e.s(["TooltipDemos",0,E],165678)},814957,e=>{"use strict";var t=e.i(648863),o=e.i(882377),r=e.i(391398);let n={type:"code",component:function(){let e={bg:"var(--mantine-color-blue-light)",h:50,mt:"md"};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Container,{...e,mt:0,children:"Default Container"}),(0,r.jsx)(o.Container,{size:"xs",...e,children:"xs Container"}),(0,r.jsx)(o.Container,{px:0,size:480,...e,children:"480px Container without padding"})]})},code:`
import { Container } from '@mantine/core';

function Demo() {
  const demoProps = {
    bg: 'var(--mantine-color-blue-light)',
    h: 50,
    mt: 'md',
  };

  return (
    <>
      <Container {...demoProps}>Default Container</Container>

      <Container size="xs" {...demoProps}>
        xs Container
      </Container>

      <Container px={0} size={480} {...demoProps}>
        480px Container without padding
      </Container>
    </>
  );
}
`};var a=e.i(951254),l=e.i(530514),i=e.i(779177);let s=`
import { Container, MantineProvider, createTheme, rem } from '@mantine/core';

const CONTAINER_SIZES: Record<string, number> = {
  xxs: 300,
  xs: 400,
  sm: 500,
  md: 600,
  lg: 700,
  xl: 800,
  xxl: 900,
};

const theme = createTheme({
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          '--container-size': fluid
            ? '100%'
            : size !== undefined && size in CONTAINER_SIZES
              ? rem(CONTAINER_SIZES[size])
              : rem(size),
        },
      }),
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Container size="xxs" bg="var(--mantine-color-blue-light)">
        Container with custom size
      </Container>
    </MantineProvider>
  );
}

`,c={xxs:300,xs:400,sm:500,md:600,lg:700,xl:800,xxl:900},d=(0,l.createTheme)({components:{Container:o.Container.extend({vars:(e,{size:t,fluid:o})=>({root:{"--container-size":o?"100%":void 0!==t&&t in c?(0,i.rem)(c[t]):(0,i.rem)(t)}})})}}),u={type:"code",component:function(){return(0,r.jsx)(a.MantineThemeProvider,{theme:d,children:(0,r.jsx)(o.Container,{size:"xxs",bg:"var(--mantine-color-blue-light)",children:"Container with custom size"})})},code:s},p={type:"code",component:function(){return(0,r.jsx)(o.Container,{fluid:!0,h:50,bg:"var(--mantine-color-blue-light)",children:"Fluid container has 100% max-width"})},code:`
import { Container } from '@mantine/core';

function Demo() {
  return (
    <Container fluid h={50} bg="var(--mantine-color-blue-light)">
      Fluid container has 100% max-width
    </Container>
  );
}
`};var m=e.i(56206);let h=`
import cx from 'clsx';
import { MantineProvider, Container, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Container: Container.extend({
      classNames: (_, { size }) => ({
        root: cx({ [classes.responsiveContainer]: size === 'responsive' }),
      }),
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Container size="responsive" bg="var(--mantine-color-blue-light)">
        Container with responsive size
      </Container>
    </MantineProvider>
  );
}
`,b=`
.responsiveContainer {
  max-width: 300px;

  @media (min-width: em(400px)) {
    max-width: 400px;
  }

  @media (min-width: em(600px)) {
    max-width: 600px;
  }
}
`,x=(0,l.createTheme)({components:{Container:o.Container.extend({classNames:(e,{size:t})=>({root:(0,m.default)({m_fcba15f2:"responsive"===t})})})}}),f={type:"code",component:function(){return(0,r.jsx)(a.MantineThemeProvider,{theme:x,children:(0,r.jsx)(o.Container,{size:"responsive",bg:"var(--mantine-color-blue-light)",children:"Container with responsive size"})})},code:[{fileName:"Demo.tsx",code:h,language:"tsx"},{fileName:"Demo.module.css",code:b,language:"scss"}]};var g=e.i(232471);let v={type:"code",component:function(){return(0,r.jsxs)(o.Container,{strategy:"grid",size:500,children:[(0,r.jsx)(g.Box,{bg:"var(--mantine-color-indigo-light)",h:50,children:"Main content"}),(0,r.jsxs)(g.Box,{"data-breakout":!0,bg:"var(--mantine-color-indigo-light)",mt:"xs",children:[(0,r.jsx)("div",{children:"Breakout"}),(0,r.jsx)(g.Box,{"data-container":!0,bg:"indigo",c:"white",h:50,children:(0,r.jsx)("div",{children:"Container inside breakout"})})]})]})},code:`
import { Box, Container } from '@mantine/core';

function Demo() {
  return (
    <Container strategy="grid" size={500}>
      <Box bg="var(--mantine-color-indigo-light)" h={50}>
        Main content
      </Box>

      <Box data-breakout bg="var(--mantine-color-indigo-light)" mt="xs">
        <div>Breakout</div>

        <Box data-container bg="indigo" c="white" h={50}>
          <div>Container inside breakout</div>
        </Box>
      </Box>
    </Container>
  );
}
`};var y=(0,t.__exportAll)({breakout:()=>v,fluid:()=>p,responsive:()=>f,sizes:()=>u,usage:()=>n});e.s(["ContainerDemos",0,y],814957)},322920,e=>{"use strict";var t=e.i(648863),o=e.i(191788),r=e.i(37541),n=e.i(245745),a=e.i(391398),l=e.i(729262);let i=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}],s={type:"code",component:function(){let[e,t]=function(e){let[t,r]=(0,o.useState)(new Set(e.defaultSelection||[]));(0,l.useDidUpdate)(()=>{e.resetSelectionOnDataChange&&r(new Set)},[e.data,e.resetSelectionOnDataChange]);let n=(0,o.useCallback)(e=>{r(t=>{if(!t.has(e)){let o=new Set(t);return o.add(e),o}return t})},[]),a=(0,o.useCallback)(e=>{r(t=>{if(t.has(e)){let o=new Set(t);return o.delete(e),o}return t})},[]),i=(0,o.useCallback)(e=>{r(t=>{let o=new Set(t);return t.has(e)?o.delete(e):o.add(e),o})},[]),s=(0,o.useCallback)(()=>{r(new Set)},[]),c=(0,o.useCallback)(e=>{r(new Set(e))},[]),d=(0,o.useCallback)(()=>0!==e.data.length&&e.data.every(e=>t.has(e)),[t,e.data]),u=(0,o.useCallback)(()=>e.data.some(e=>t.has(e)),[t,e.data]);return[Array.from(t),{select:n,deselect:a,toggle:i,isAllSelected:d,isSomeSelected:u,setSelection:c,resetSelection:s}]}({data:(0,o.useMemo)(()=>i.map(e=>e.position),[i]),defaultSelection:[39,56]}),s=i.map(o=>{let l=e.includes(o.position);return(0,a.jsxs)(n.Table.Tr,{bg:l?"var(--mantine-color-blue-light)":void 0,children:[(0,a.jsx)(n.Table.Td,{children:(0,a.jsx)(r.Checkbox,{"aria-label":"Select row",checked:l,onChange:e=>{e.target.checked?t.select(o.position):t.deselect(o.position)}})}),(0,a.jsx)(n.Table.Td,{children:o.position}),(0,a.jsx)(n.Table.Td,{children:o.name}),(0,a.jsx)(n.Table.Td,{children:o.symbol}),(0,a.jsx)(n.Table.Td,{children:o.mass})]},o.name)});return(0,a.jsxs)(n.Table,{children:[(0,a.jsx)(n.Table.Thead,{children:(0,a.jsxs)(n.Table.Tr,{children:[(0,a.jsx)(n.Table.Th,{children:(0,a.jsx)(r.Checkbox,{"aria-label":"Select deselect all rows",indeterminate:t.isSomeSelected(),checked:t.isAllSelected(),onChange:()=>{t.isAllSelected()?t.resetSelection():t.setSelection(i.map(e=>e.position))}})}),(0,a.jsx)(n.Table.Th,{children:"Element position"}),(0,a.jsx)(n.Table.Th,{children:"Element name"}),(0,a.jsx)(n.Table.Th,{children:"Symbol"}),(0,a.jsx)(n.Table.Th,{children:"Atomic mass"})]})}),(0,a.jsx)(n.Table.Tbody,{children:s})]})},code:`
import { Checkbox, Table } from '@mantine/core';
import { useSelection } from '@mantine/hooks';

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

function Demo() {
  const positions = useMemo(() => elements.map((element) => element.position), [elements]);

  const [selection, handlers] = useSelection({
    data: positions,
    defaultSelection: [39, 56],
  });

  const rows = elements.map((element) => {
    const isSelected = selection.includes(element.position);
    return (
      <Table.Tr key={element.name} bg={isSelected ? 'var(--mantine-color-blue-light)' : undefined}>
        <Table.Td>
          <Checkbox
            aria-label="Select row"
            checked={isSelected}
            onChange={(event) => {
              if (event.target.checked) {
                handlers.select(element.position);
              } else {
                handlers.deselect(element.position);
              }
            }}
          />
        </Table.Td>
        <Table.Td>{element.position}</Table.Td>
        <Table.Td>{element.name}</Table.Td>
        <Table.Td>{element.symbol}</Table.Td>
        <Table.Td>{element.mass}</Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>
            <Checkbox
              aria-label="Select deselect all rows"
              indeterminate={handlers.isSomeSelected()}
              checked={handlers.isAllSelected()}
              onChange={() => {
                if (handlers.isAllSelected()) {
                  handlers.resetSelection();
                } else {
                  handlers.setSelection(elements.map((el) => el.position));
                }
              }}
            />
          </Table.Th>
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
`};var c=(0,t.__exportAll)({usage:()=>s});e.s(["UseSelectionDemos",0,c],322920)},720761,e=>{"use strict";var t=e.i(648863),o=e.i(79897),r=e.i(141806),n=e.i(725695),a=e.i(369974),l=e.i(671640),i=e.i(883364),s=e.i(391398);function c({children:e}){return(0,s.jsxs)(a.HoverCard,{width:320,shadow:"md",withArrow:!0,openDelay:200,closeDelay:400,children:[(0,s.jsx)(a.HoverCard.Target,{children:e}),(0,s.jsxs)(a.HoverCard.Dropdown,{children:[(0,s.jsxs)(n.Group,{children:[(0,s.jsx)(r.Avatar,{src:"https://avatars.githubusercontent.com/u/79146003?s=200&v=4",radius:"xl"}),(0,s.jsxs)(l.Stack,{gap:5,children:[(0,s.jsx)(i.Text,{size:"sm",fw:700,style:{lineHeight:1},children:"Mantine"}),(0,s.jsx)(o.Anchor,{href:"https://x.com/mantinedev",c:"dimmed",size:"xs",style:{lineHeight:1},children:"@mantinedev"})]})]}),(0,s.jsx)(i.Text,{size:"sm",mt:"md",children:"Customizable React components and hooks library with focus on usability, accessibility and developer experience"}),(0,s.jsxs)(n.Group,{mt:"md",gap:"xl",children:[(0,s.jsxs)(i.Text,{size:"sm",children:[(0,s.jsx)("b",{children:"0"})," Following"]}),(0,s.jsxs)(i.Text,{size:"sm",children:[(0,s.jsx)("b",{children:"1,174"})," Followers"]})]})]})]})}let d={type:"code",component:function(){return(0,s.jsx)(n.Group,{justify:"center",children:(0,s.jsx)(c,{children:(0,s.jsx)(r.Avatar,{src:"https://avatars.githubusercontent.com/u/79146003?s=200&v=4",radius:"xl"})})})},code:`
import { HoverCard, Avatar, Text, Group, Anchor, Stack } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <HoverCard width={320} shadow="md" withArrow openDelay={200} closeDelay={400}>
        <HoverCard.Target>
          <Avatar src="https://avatars.githubusercontent.com/u/79146003?s=200&v=4" radius="xl" />
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Group>
            <Avatar src="https://avatars.githubusercontent.com/u/79146003?s=200&v=4" radius="xl" />
            <Stack gap={5}>
              <Text size="sm" fw={700} style={{ lineHeight: 1 }}>
                Mantine
              </Text>
              <Anchor
                href="https://x.com/mantinedev"
                c="dimmed"
                size="xs"
                style={{ lineHeight: 1 }}
              >
                @mantinedev
              </Anchor>
            </Stack>
          </Group>

          <Text size="sm" mt="md">
            Customizable React components and hooks library with focus on usability, accessibility
            and developer experience
          </Text>

          <Group mt="md" gap="xl">
            <Text size="sm">
              <b>0</b> Following
            </Text>
            <Text size="sm">
              <b>1,174</b> Followers
            </Text>
          </Group>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}
`};var u=e.i(485108);let p={type:"code",component:function(){return(0,s.jsx)(n.Group,{justify:"center",children:(0,s.jsxs)(a.HoverCard,{width:280,shadow:"md",children:[(0,s.jsx)(a.HoverCard.Target,{children:(0,s.jsx)(u.Button,{children:"Hover to reveal the card"})}),(0,s.jsx)(a.HoverCard.Dropdown,{children:(0,s.jsx)(i.Text,{size:"sm",children:"Hover card is revealed when user hovers over target element, it will be hidden once mouse is not over both target and dropdown elements"})})]})})},code:`
import { HoverCard, Button, Text, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <HoverCard width={280} shadow="md">
        <HoverCard.Target>
          <Button>Hover to reveal the card</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">
            Hover card is revealed when user hovers over target element, it will be hidden once
            mouse is not over both target and dropdown elements
          </Text>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}

`},m={type:"code",component:function(){return(0,s.jsxs)(n.Group,{justify:"center",children:[(0,s.jsxs)(a.HoverCard,{shadow:"md",openDelay:1e3,children:[(0,s.jsx)(a.HoverCard.Target,{children:(0,s.jsx)(u.Button,{children:"1000ms open delay"})}),(0,s.jsx)(a.HoverCard.Dropdown,{children:(0,s.jsx)(i.Text,{size:"sm",children:"Opened with 1000ms delay"})})]}),(0,s.jsxs)(a.HoverCard,{shadow:"md",closeDelay:1e3,children:[(0,s.jsx)(a.HoverCard.Target,{children:(0,s.jsx)(u.Button,{children:"1000ms close delay"})}),(0,s.jsx)(a.HoverCard.Dropdown,{children:(0,s.jsx)(i.Text,{size:"sm",children:"Will close with 1000ms delay"})})]})]})},code:`
import { HoverCard, Button, Text, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <HoverCard shadow="md" openDelay={1000}>
        <HoverCard.Target>
          <Button>1000ms open delay</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">Opened with 1000ms delay</Text>
        </HoverCard.Dropdown>
      </HoverCard>

      <HoverCard shadow="md" closeDelay={1000}>
        <HoverCard.Target>
          <Button>1000ms close delay</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">Will close with 1000ms delay</Text>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}
`},h={type:"code",component:function(){return(0,s.jsx)(a.HoverCard.Group,{openDelay:500,closeDelay:100,children:(0,s.jsxs)(n.Group,{justify:"center",children:[(0,s.jsxs)(a.HoverCard,{shadow:"md",children:[(0,s.jsx)(a.HoverCard.Target,{children:(0,s.jsx)(u.Button,{children:"First"})}),(0,s.jsx)(a.HoverCard.Dropdown,{children:(0,s.jsx)(i.Text,{size:"sm",children:"First hover card content"})})]}),(0,s.jsxs)(a.HoverCard,{shadow:"md",children:[(0,s.jsx)(a.HoverCard.Target,{children:(0,s.jsx)(u.Button,{children:"Second"})}),(0,s.jsx)(a.HoverCard.Dropdown,{children:(0,s.jsx)(i.Text,{size:"sm",children:"Second hover card content"})})]}),(0,s.jsxs)(a.HoverCard,{shadow:"md",children:[(0,s.jsx)(a.HoverCard.Target,{children:(0,s.jsx)(u.Button,{children:"Third"})}),(0,s.jsx)(a.HoverCard.Dropdown,{children:(0,s.jsx)(i.Text,{size:"sm",children:"Third hover card content"})})]})]})})},code:`
import { HoverCard, Button, Text, Group } from '@mantine/core';

function Demo() {
  return (
    <HoverCard.Group openDelay={500} closeDelay={100}>
      <Group justify="center">
        <HoverCard shadow="md">
          <HoverCard.Target>
            <Button>First</Button>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Text size="sm">First hover card content</Text>
          </HoverCard.Dropdown>
        </HoverCard>

        <HoverCard shadow="md">
          <HoverCard.Target>
            <Button>Second</Button>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Text size="sm">Second hover card content</Text>
          </HoverCard.Dropdown>
        </HoverCard>

        <HoverCard shadow="md">
          <HoverCard.Target>
            <Button>Third</Button>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Text size="sm">Third hover card content</Text>
          </HoverCard.Dropdown>
        </HoverCard>
      </Group>
    </HoverCard.Group>
  );
}
`};var b=(0,t.__exportAll)({delay:()=>m,group:()=>h,profile:()=>d,usage:()=>p});e.s(["HoverCardDemos",0,b],720761)},924862,e=>{"use strict";var t=e.i(391398),o=e.i(38856),r=e.i(814957),n=e.i(720761),a=e.i(788225),l=e.i(37628),i=e.i(165678),s=e.i(322920);e.i(603441);var c=e.i(62558);e.i(457450);var d=e.i(418026);let u=(0,c.Layout)(d.MDX_DATA.Changelog820);function p(e){let c={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.useMDXComponents)(),...e.components},{Demo:d,SponsorButton:u}=c;return d||m("Demo",!0),u||m("SponsorButton",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.h2,{id:"support-mantine-development",children:"Support Mantine development"}),"\n",(0,t.jsxs)(c.p,{children:["You can now sponsor Mantine development with ",(0,t.jsx)(c.a,{href:"https://opencollective.com/mantinedev",children:"OpenCollective"}),".\nAll funds are used to improve Mantine and create new features and components."]}),"\n",(0,t.jsx)(u,{}),"\n",(0,t.jsx)(c.h2,{id:"styles-api-attributes",children:"Styles API attributes"}),"\n",(0,t.jsxs)(c.p,{children:["You now can pass attributes to inner elements of all components that support Styles API with ",(0,t.jsx)(c.code,{children:"attributes"})," prop.\nFor example, it can be used to add data attributes for testing purposes:"]}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-tsx",children:"import { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Button\n      attributes={{\n        root: { 'data-test-id': 'root' },\n        label: { 'data-test-id': 'label' },\n        inner: { 'data-test-id': 'inner' },\n      }}\n    >\n      Button\n    </Button>\n  );\n}\n"})}),"\n",(0,t.jsx)(c.h2,{id:"container-grid-strategy",children:"Container grid strategy"}),"\n",(0,t.jsxs)(c.p,{children:[(0,t.jsx)(c.a,{href:"/core/container",children:"Container"})," now supports ",(0,t.jsx)(c.code,{children:'strategy="grid"'})," prop which enables more\nfeatures."]}),"\n",(0,t.jsxs)(c.p,{children:["Differences from the default ",(0,t.jsx)(c.code,{children:'strategy="block"'}),":"]}),"\n",(0,t.jsxs)(c.ul,{children:["\n",(0,t.jsxs)(c.li,{children:["Uses ",(0,t.jsx)(c.code,{children:"display: grid"})," instead of ",(0,t.jsx)(c.code,{children:"display: block"})]}),"\n",(0,t.jsx)(c.li,{children:"Does not include default inline padding"}),"\n",(0,t.jsxs)(c.li,{children:["Does not set ",(0,t.jsx)(c.code,{children:"max-width"})," on the root element (uses grid template columns instead)"]}),"\n"]}),"\n",(0,t.jsxs)(c.p,{children:["Features supported by ",(0,t.jsx)(c.code,{children:'strategy="grid"'}),":"]}),"\n",(0,t.jsxs)(c.ul,{children:["\n",(0,t.jsxs)(c.li,{children:["Everything that is supported by ",(0,t.jsx)(c.code,{children:'strategy="block"'})]}),"\n",(0,t.jsxs)(c.li,{children:["Children with ",(0,t.jsx)(c.code,{children:"data-breakout"})," attribute take the entire width of the container's parent element"]}),"\n",(0,t.jsxs)(c.li,{children:["Children with ",(0,t.jsx)(c.code,{children:"data-container"})," inside ",(0,t.jsx)(c.code,{children:"data-breakout"})," have the same width as the main grid column"]}),"\n"]}),"\n",(0,t.jsx)(c.p,{children:"Example of using breakout feature:"}),"\n",(0,t.jsx)(d,{data:r.ContainerDemos.breakout}),"\n",(0,t.jsx)(c.h2,{id:"tooltip-target",children:"Tooltip target"}),"\n",(0,t.jsxs)(c.p,{children:["New ",(0,t.jsx)(c.a,{href:"/core/tooltip",children:"Tooltip"})," ",(0,t.jsx)(c.code,{children:"target"})," prop is an alternative to ",(0,t.jsx)(c.code,{children:"children"}),". It accepts a string (selector),\nan HTML element or a ref object with HTML element. Use ",(0,t.jsx)(c.code,{children:"target"})," prop when you do\nnot render tooltip target as JSX element."]}),"\n",(0,t.jsxs)(c.p,{children:["Example of using ",(0,t.jsx)(c.code,{children:"target"})," prop with a string selector:"]}),"\n",(0,t.jsx)(d,{data:i.TooltipDemos.target}),"\n",(0,t.jsx)(c.h2,{id:"hovercardgroup",children:"HoverCard.Group"}),"\n",(0,t.jsxs)(c.p,{children:[(0,t.jsx)(c.a,{href:"/core/hover-card",children:"HoverCard"})," now supports delay synchronization between multiple instances using ",(0,t.jsx)(c.code,{children:"HoverCard.Group"})," component:"]}),"\n",(0,t.jsx)(d,{data:n.HoverCardDemos.group,demoProps:{defaultExpanded:!1}}),"\n",(0,t.jsx)(c.h2,{id:"use-selection-hook",children:"use-selection hook"}),"\n",(0,t.jsxs)(c.p,{children:["New ",(0,t.jsx)(c.a,{href:"/hooks/use-selection",children:"use-selection"})," hook:"]}),"\n",(0,t.jsx)(d,{data:s.UseSelectionDemos.usage,demoProps:{defaultExpanded:!1}}),"\n",(0,t.jsx)(c.h2,{id:"autoselectonblur-prop",children:"autoSelectOnBlur prop"}),"\n",(0,t.jsxs)(c.p,{children:[(0,t.jsx)(c.a,{href:"/core/select",children:"Select"})," and ",(0,t.jsx)(c.a,{href:"/core/autocomplete",children:"Autocomplete"})," components now support ",(0,t.jsx)(c.code,{children:"autoSelectOnBlur"})," prop.\nUse it to automatically select the highlighted option when the input loses focus.\nTo see this feature in action: select an option with up/down arrows, then click outside the input:"]}),"\n",(0,t.jsx)(d,{data:a.SelectDemos.autoSelectOnBlur}),"\n",(0,t.jsx)(c.h2,{id:"source-edit-mode-in-richtexteditor",children:"Source edit mode in RichTextEditor"}),"\n",(0,t.jsxs)(c.p,{children:[(0,t.jsx)(c.a,{href:"/x/tiptap",children:"RichTextEditor"})," now supports source edit mode:"]}),"\n",(0,t.jsx)(d,{data:l.TipTapDemos.sourceCodeSwitcher}),"\n",(0,t.jsx)(c.h2,{id:"recharts-3-support",children:"Recharts 3 support"}),"\n",(0,t.jsxs)(c.p,{children:["You can now use the latest ",(0,t.jsx)(c.a,{href:"https://recharts.org/en-US/",children:"Recharts 3"})," version with Mantine charts.\n",(0,t.jsx)(c.code,{children:"@mantine/charts"})," package was validated to work with both Recharts 2 and Recharts 3 versions.\nNote that, there might still be some minor issues with Recharts 3, you are welcome to report issues on GitHub."]}),"\n",(0,t.jsx)(c.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,t.jsxs)(c.ul,{children:["\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.a,{href:"/core/accordion",children:"Accordion"})," default ",(0,t.jsx)(c.code,{children:"chevronSize"})," prop value was changed to ",(0,t.jsx)(c.code,{children:"auto"})," to allow using dynamic icon sizes"]}),"\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.a,{href:"/core/accordion",children:"Accordion"})," now supports ",(0,t.jsx)(c.code,{children:"chevronIconSize"})," prop to configure size of the default chevron icon"]}),"\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.a,{href:"/core/affix",children:"AffixPosition"})," type is now exported from ",(0,t.jsx)(c.code,{children:"@mantine/core"})," package"]}),"\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.code,{children:"errorProps"}),", ",(0,t.jsx)(c.code,{children:"labelProps"})," and ",(0,t.jsx)(c.code,{children:"descriptionProps"})," props of all inputs now have stricter types and better IDE autocomplete"]}),"\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.code,{children:"TypographyStylesProvider"})," was renamed to just ",(0,t.jsx)(c.code,{children:"Typography"})," to simplify usage. ",(0,t.jsx)(c.code,{children:"TypographyStylesProvider"})," name is still available but marked as deprecated – it will be removed in ",(0,t.jsx)(c.code,{children:"9.0.0"})," release."]}),"\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.a,{href:"/core/slider",children:"Slider"})," and ",(0,t.jsx)(c.a,{href:"/core/range-slider",children:"RangeSlider"})," components now have separate documentation pages"]}),"\n"]})]})}function m(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,t.jsx)(u,{...e,children:(0,t.jsx)(p,{...e})})}])},851099,(e,t,o)=>{let r="/changelog/8-2-0";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(924862)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);