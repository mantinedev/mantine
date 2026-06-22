(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var o=Object.defineProperty;e.s(["__exportAll",0,(e,t)=>{let n={};for(var a in e)o(n,a,{get:e[a],enumerable:!0});return t||o(n,Symbol.toStringTag,{value:"Module"}),n}])},541772,e=>{"use strict";var o=e.i(191788);e.s(["useDisclosure",0,function(e=!1,t={}){let[n,a]=(0,o.useState)(e),r=(0,o.useCallback)(()=>{a(e=>e||(t.onOpen?.(),!0))},[t.onOpen]),l=(0,o.useCallback)(()=>{a(e=>e?(t.onClose?.(),!1):e)},[t.onClose]);return[n,{open:r,close:l,toggle:(0,o.useCallback)(()=>{n?l():r()},[l,r,n]),set:a}]}])},734858,e=>{"use strict";function o(e,t=document){let n=t.querySelector(e);if(n)return n;let a=t.querySelectorAll("*");for(let t=0;t<a.length;t+=1){let n=a[t];if(n.shadowRoot){let t=o(e,n.shadowRoot);if(t)return t}}return null}function t(e,o=document){let n=[],a=o.querySelectorAll(e);n.push(...Array.from(a));let r=o.querySelectorAll("*");for(let o=0;o<r.length;o+=1){let a=r[o];if(a.shadowRoot){let o=t(e,a.shadowRoot);n.push(...o)}}return n}function n(e){if(!e)return document;let o=e.getRootNode();return o instanceof ShadowRoot||o instanceof Document?o:document}var a=e.i(191788),r=e.i(579560);e.s(["useCombobox",0,function({defaultOpened:e,opened:l,onOpenedChange:i,onDropdownClose:s,onDropdownOpen:c,loop:u=!0,scrollBehavior:d="instant"}={}){let[m,p]=(0,r.useUncontrolled)({value:l,defaultValue:e,finalValue:!1,onChange:i}),b=(0,a.useRef)(null),x=(0,a.useRef)(-1),h=(0,a.useRef)(null),v=(0,a.useRef)(null),g=(0,a.useRef)(-1),f=(0,a.useRef)(-1),C=(0,a.useRef)(-1),w=(0,a.useCallback)((e="unknown")=>{m||(p(!0),c?.(e))},[p,c,m]),j=(0,a.useCallback)((e="unknown")=>{m&&(p(!1),s?.(e))},[p,s,m]),H=(0,a.useCallback)((e="unknown")=>{m?j(e):w(e)},[j,w,m]),y=(0,a.useCallback)(()=>{let e=n(v.current),t=o(`#${b.current} [data-combobox-selected]`,e);t?.removeAttribute("data-combobox-selected"),t?.removeAttribute("aria-selected")},[]),S=(0,a.useCallback)(e=>{let a=n(v.current),r=o(`#${b.current}`,a),l=r?t("[data-combobox-option]",r):null;if(!l)return null;let i=e>=l.length?0:e<0?l.length-1:e;return(x.current=i,l?.[i]&&!l[i].hasAttribute("data-combobox-disabled"))?(y(),l[i].setAttribute("data-combobox-selected","true"),l[i].setAttribute("aria-selected","true"),l[i].scrollIntoView({block:"nearest",behavior:d}),l[i].id):null},[d,y]),P=(0,a.useCallback)(()=>{let e=n(v.current),a=o(`#${b.current} [data-combobox-active]`,e);return a?S(t(`#${b.current} [data-combobox-option]`,e).findIndex(e=>e===a)):S(0)},[S]),A=(0,a.useCallback)(()=>{let e=n(v.current),o=t(`#${b.current} [data-combobox-option]`,e);return S(function(e,o,t){for(let t=e+1;t<o.length;t+=1)if(!o[t].hasAttribute("data-combobox-disabled"))return t;if(t){for(let e=0;e<o.length;e+=1)if(!o[e].hasAttribute("data-combobox-disabled"))return e}return e}(x.current,o,u))},[S,u]),T=(0,a.useCallback)(()=>{let e=n(v.current),o=t(`#${b.current} [data-combobox-option]`,e);return S(function(e,o,t){for(let t=e-1;t>=0;t-=1)if(!o[t].hasAttribute("data-combobox-disabled"))return t;if(t){for(let e=o.length-1;e>-1;e-=1)if(!o[e].hasAttribute("data-combobox-disabled"))return e}return e}(x.current,o,u))},[S,u]),D=(0,a.useCallback)(()=>{let e=n(v.current);return S(function(e){for(let o=0;o<e.length;o+=1)if(!e[o].hasAttribute("data-combobox-disabled"))return o;return -1}(t(`#${b.current} [data-combobox-option]`,e)))},[S]),k=(0,a.useCallback)((e="selected",o)=>{if("number"==typeof e){x.current=e;let a=n(v.current),r=t(`#${b.current} [data-combobox-option]`,a);o?.scrollIntoView&&r[e]?.scrollIntoView({block:"nearest",behavior:d});return}C.current=window.setTimeout(()=>{let a=n(v.current),r=t(`#${b.current} [data-combobox-option]`,a),l=r.findIndex(o=>o.hasAttribute(`data-combobox-${e}`));x.current=l,o?.scrollIntoView&&r[l]?.scrollIntoView({block:"nearest",behavior:d})},0)},[]),E=(0,a.useCallback)(()=>{x.current=-1,y()},[y]),Z=(0,a.useCallback)(()=>{let e=n(v.current);t(`#${b.current} [data-combobox-option]`,e)?.[x.current]?.click()},[]),B=(0,a.useCallback)(e=>{b.current=e},[]),V=(0,a.useCallback)(()=>{g.current=window.setTimeout(()=>h.current?.focus(),0)},[]),O=(0,a.useCallback)(()=>{f.current=window.setTimeout(()=>v.current?.focus(),0)},[]),M=(0,a.useCallback)(()=>x.current,[]);return(0,a.useEffect)(()=>()=>{window.clearTimeout(g.current),window.clearTimeout(f.current),window.clearTimeout(C.current)},[]),{dropdownOpened:m,openDropdown:w,closeDropdown:j,toggleDropdown:H,selectedOptionIndex:x.current,getSelectedOptionIndex:M,selectOption:S,selectFirstOption:D,selectActiveOption:P,selectNextOption:A,selectPreviousOption:T,resetSelectedOption:E,updateSelectedOptionIndex:k,listId:b.current,setListId:B,clickSelectedOption:Z,searchRef:h,focusSearchInput:V,targetRef:v,focusTarget:O}}],734858)},219867,891032,637727,520936,566236,143796,740909,381224,24691,353165,329145,38403,476602,65582,429773,e=>{"use strict";let[o,t]=(0,e.i(386179).createSafeContext)("Combobox component was not found in tree");e.s(["ComboboxProvider",0,o,"useComboboxContext",0,t],219867);var n=e.i(294788),a=e.i(391398);function r({onMouseDown:e,onClick:o,onClear:t,...l}){return(0,a.jsx)(n.Input.ClearButton,{tabIndex:-1,"aria-hidden":!0,...l,onMouseDown:o=>{o.preventDefault(),e?.(o)},onClick:e=>{t(),o?.(e)}})}r.displayName="@mantine/core/ComboboxClearButton",e.s(["ComboboxClearButton",0,r],891032);var l=e.i(44091),i=e.i(275519),s=e.i(392862),c=e.i(506712);let u=(0,i.factory)(e=>{let{classNames:o,styles:n,className:r,style:i,hidden:c,...u}=(0,l.useProps)("ComboboxDropdown",null,e),d=t();return(0,a.jsx)(s.Popover.Dropdown,{...u,role:"presentation","data-hidden":c||void 0,"data-floating-height":d.floatingHeight||void 0,...d.getStyles("dropdown",{className:r,style:i,classNames:o,styles:n})})});u.classes=c.default,u.displayName="@mantine/core/ComboboxDropdown",e.s(["ComboboxDropdown",0,u],637727);var d=e.i(826639);let m={refProp:"ref"},p=(0,i.factory)(e=>{let{children:o,refProp:n,ref:r}=(0,l.useProps)("ComboboxDropdownTarget",m,e);if(t(),!(0,d.isElement)(o))throw Error("Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");return(0,a.jsx)(s.Popover.Target,{ref:r,refProp:n,children:o})});p.displayName="@mantine/core/ComboboxDropdownTarget",e.s(["ComboboxDropdownTarget",0,p],520936);var b=e.i(232471);let x=(0,i.factory)(e=>{let{classNames:o,className:n,style:r,styles:i,vars:s,...c}=(0,l.useProps)("ComboboxEmpty",null,e);return(0,a.jsx)(b.Box,{...t().getStyles("empty",{className:n,classNames:o,styles:i,style:r}),...c})});x.classes=c.default,x.displayName="@mantine/core/ComboboxEmpty",e.s(["ComboboxEmpty",0,x],566236);var h=e.i(275825),v=e.i(409703),g=e.i(191788);function f({onKeyDown:e,onClick:o,withKeyboardNavigation:n,withAriaAttributes:a,withExpandedAttribute:r,targetType:l,autoComplete:i}){let s=t(),[c,u]=(0,g.useState)(null);return{...a?{...r?{role:"combobox"}:{},"aria-haspopup":"listbox","aria-expanded":r?!!(s.store.listId&&s.store.dropdownOpened):void 0,"aria-controls":s.store.dropdownOpened&&s.store.listId?s.store.listId:void 0,"aria-activedescendant":s.store.dropdownOpened&&c||void 0,autoComplete:i,"data-expanded":s.store.dropdownOpened||void 0,"data-mantine-stop-propagation":s.store.dropdownOpened||void 0}:{},onKeyDown:o=>{if((e?.(o),!s.readOnly&&n)&&!o.nativeEvent.isComposing){if("ArrowDown"===o.nativeEvent.code&&(o.preventDefault(),s.store.dropdownOpened?u(s.store.selectNextOption()):(s.store.openDropdown("keyboard"),u(s.store.selectActiveOption()),s.store.updateSelectedOptionIndex("selected",{scrollIntoView:!0}))),"ArrowUp"===o.nativeEvent.code&&(o.preventDefault(),s.store.dropdownOpened?u(s.store.selectPreviousOption()):(s.store.openDropdown("keyboard"),u(s.store.selectActiveOption()),s.store.updateSelectedOptionIndex("selected",{scrollIntoView:!0}))),"Enter"===o.nativeEvent.code||"NumpadEnter"===o.nativeEvent.code){if(229===o.nativeEvent.keyCode)return;let e=s.store.getSelectedOptionIndex();s.store.dropdownOpened&&-1!==e?(o.preventDefault(),s.store.clickSelectedOption()):"button"===l&&(o.preventDefault(),s.store.openDropdown("keyboard"))}"Escape"===o.key&&s.store.closeDropdown("keyboard"),"Space"===o.nativeEvent.code&&"button"===l&&(o.preventDefault(),s.store.toggleDropdown("keyboard"))}},onClick:e=>{"button"===l&&e.currentTarget.focus(),o?.(e)}}}e.s(["useComboboxTargetProps",0,f],143796);var C=e.i(332977);let w={refProp:"ref",targetType:"input",withKeyboardNavigation:!0,withAriaAttributes:!0,withExpandedAttribute:!1,autoComplete:"off"},j=(0,i.factory)(e=>{let{children:o,refProp:n,withKeyboardNavigation:a,withAriaAttributes:r,withExpandedAttribute:i,targetType:s,autoComplete:c,ref:u,...d}=(0,l.useProps)("ComboboxEventsTarget",w,e),m=(0,v.getSingleElementChild)(o);if(!m)throw Error("Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let p=t();return(0,g.cloneElement)(m,{...f({targetType:s,withAriaAttributes:r,withKeyboardNavigation:a,withExpandedAttribute:i,onKeyDown:m.props.onKeyDown,onClick:m.props.onClick,autoComplete:c}),...d,[n]:(0,C.useMergedRef)(u,p.store.targetRef,(0,h.getRefProp)(m))})});j.displayName="@mantine/core/ComboboxEventsTarget",e.s(["ComboboxEventsTarget",0,j],740909);let H=(0,i.factory)(e=>{let{classNames:o,className:n,style:r,styles:i,vars:s,...c}=(0,l.useProps)("ComboboxFooter",null,e);return(0,a.jsx)(b.Box,{...t().getStyles("footer",{className:n,classNames:o,style:r,styles:i}),...c,onMouseDown:e=>{e.preventDefault()}})});H.classes=c.default,H.displayName="@mantine/core/ComboboxFooter",e.s(["ComboboxFooter",0,H],381224);var y=e.i(107315);let S=(0,i.factory)(e=>{let{classNames:o,className:n,style:r,styles:i,vars:s,children:c,label:u,id:d,...m}=(0,l.useProps)("ComboboxGroup",null,e),p=t(),x=(0,y.useId)(d),h=null!=u&&!1!==u&&""!==u;return(0,a.jsxs)(b.Box,{role:"group","aria-labelledby":h?x:void 0,...p.getStyles("group",{className:n,classNames:o,style:r,styles:i}),...m,children:[h&&(0,a.jsx)("div",{id:x,...p.getStyles("groupLabel",{classNames:o,styles:i}),children:u}),c]})});S.classes=c.default,S.displayName="@mantine/core/ComboboxGroup",e.s(["ComboboxGroup",0,S],24691);let P=(0,i.factory)(e=>{let{classNames:o,className:n,style:r,styles:i,vars:s,...c}=(0,l.useProps)("ComboboxHeader",null,e);return(0,a.jsx)(b.Box,{...t().getStyles("header",{className:n,classNames:o,style:r,styles:i}),...c,onMouseDown:e=>{e.preventDefault()}})});function A({value:e,valuesDivider:o=",",...t}){return(0,a.jsx)("input",{type:"hidden",value:Array.isArray(e)?e.join(o):e?`${e}`:"",...t})}P.classes=c.default,P.displayName="@mantine/core/ComboboxHeader",e.s(["ComboboxHeader",0,P],353165),A.displayName="@mantine/core/ComboboxHiddenInput",e.s(["ComboboxHiddenInput",0,A],329145);let T=(0,i.factory)(e=>{let o=(0,l.useProps)("ComboboxOption",null,e),{classNames:n,className:r,style:i,styles:s,vars:c,onClick:u,id:d,active:m,onMouseDown:p,onMouseOver:x,disabled:h,selected:v,mod:f,...C}=o,w=t(),j=(0,g.useId)();return(0,a.jsx)(b.Box,{...w.getStyles("option",{className:r,classNames:n,styles:s,style:i}),...C,id:d||j,mod:["combobox-option",{"combobox-active":m,"combobox-disabled":h,"combobox-selected":v},f],role:"option",onClick:e=>{h?e.preventDefault():(w.onOptionSubmit?.(o.value,o),u?.(e))},onMouseDown:e=>{e.preventDefault(),p?.(e)},onMouseOver:e=>{w.resetSelectionOnOptionHover&&w.store.resetSelectedOption(),x?.(e)}})});T.classes=c.default,T.displayName="@mantine/core/ComboboxOption",e.s(["ComboboxOption",0,T],38403);let D=(0,i.factory)(e=>{let{classNames:o,className:n,style:r,styles:i,id:s,onMouseDown:c,labelledBy:u,...d}=(0,l.useProps)("ComboboxOptions",null,e),m=t(),p=(0,y.useId)(s);return(0,g.useEffect)(()=>{m.store.setListId(p)},[p]),(0,a.jsx)(b.Box,{...m.getStyles("options",{className:n,style:r,classNames:o,styles:i}),...d,id:p,role:"listbox","aria-labelledby":u,onMouseDown:e=>{e.preventDefault(),c?.(e)}})});D.classes=c.default,D.displayName="@mantine/core/ComboboxOptions",e.s(["ComboboxOptions",0,D],476602);let k={withAriaAttributes:!0,withKeyboardNavigation:!0},E=(0,i.factory)(e=>{let{classNames:o,styles:r,unstyled:i,vars:s,withAriaAttributes:c,onKeyDown:u,onClick:d,withKeyboardNavigation:m,size:p,ref:b,...x}=(0,l.useProps)("ComboboxSearch",k,e),h=t(),v=h.getStyles("search"),g=f({targetType:"input",withAriaAttributes:c,withKeyboardNavigation:m,withExpandedAttribute:!1,onKeyDown:u,onClick:d,autoComplete:"off"});return(0,a.jsx)(n.Input,{ref:(0,C.useMergedRef)(b,h.store.searchRef),classNames:[{input:v.className},o],styles:[{input:v.style},r],size:p||h.size,...g,...x,__staticSelector:"Combobox"})});E.classes=c.default,E.displayName="@mantine/core/ComboboxSearch",e.s(["ComboboxSearch",0,E],65582);let Z={refProp:"ref",targetType:"input",withKeyboardNavigation:!0,withAriaAttributes:!0,withExpandedAttribute:!1,autoComplete:"off"},B=(0,i.factory)(e=>{let{children:o,refProp:n,withKeyboardNavigation:r,withAriaAttributes:i,withExpandedAttribute:c,targetType:u,autoComplete:d,ref:m,...p}=(0,l.useProps)("ComboboxTarget",Z,e),b=(0,v.getSingleElementChild)(o);if(!b)throw Error("Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let x=t(),h=(0,g.cloneElement)(b,{...f({targetType:u,withAriaAttributes:i,withKeyboardNavigation:r,withExpandedAttribute:c,onKeyDown:b.props.onKeyDown,onClick:b.props.onClick,autoComplete:d}),...p});return(0,a.jsx)(s.Popover.Target,{refProp:n,ref:(0,C.useMergedRef)(m,x.store.targetRef),children:h})});B.displayName="@mantine/core/ComboboxTarget",e.s(["ComboboxTarget",0,B],429773)},711976,e=>{"use strict";var o=e.i(779177),t=e.i(433512),n=e.i(481178),a=e.i(44091),r=e.i(391466),l=e.i(392862),i=e.i(506712),s=e.i(918359),c=e.i(219867),u=e.i(891032),d=e.i(637727),m=e.i(520936),p=e.i(566236),b=e.i(740909),x=e.i(381224),h=e.i(24691),v=e.i(353165),g=e.i(329145),f=e.i(38403),C=e.i(476602),w=e.i(65582),j=e.i(429773),H=e.i(734858),y=e.i(391398);let S={keepMounted:!0,keepMountedMode:"display-none",withinPortal:!0,resetSelectionOnOptionHover:!1,width:"target",transitionProps:{transition:"fade",duration:0},size:"sm"},P=(0,n.createVarsResolver)((e,{size:n,dropdownPadding:a})=>({options:{"--combobox-option-fz":(0,t.getFontSize)(n),"--combobox-option-padding":(0,t.getSize)(n,"combobox-option-padding")},dropdown:{"--combobox-padding":void 0===a?void 0:(0,o.rem)(a),"--combobox-option-fz":(0,t.getFontSize)(n),"--combobox-option-padding":(0,t.getSize)(n,"combobox-option-padding")}})),A=e=>{let o=(0,a.useProps)("Combobox",S,e),{classNames:t,styles:n,unstyled:s,children:u,store:d,vars:m,onOptionSubmit:p,onClose:b,size:x,dropdownPadding:h,resetSelectionOnOptionHover:v,__staticSelector:g,readOnly:f,attributes:C,floatingHeight:w,middlewares:j,...A}=o,T="viewport"===w?{...j,flip:!1,size:{..."object"==typeof j?.size?j.size:{},padding:"object"==typeof j?.size&&void 0!==j.size.padding?j.size.padding:10,apply:({availableHeight:e,availableWidth:o,elements:t,...n})=>{t.floating.style.setProperty("--combobox-floating-max-height",`${e}px`);let a=j?.size;"object"==typeof a&&a.apply?a.apply({availableHeight:e,availableWidth:o,elements:t,...n}):a&&Object.assign(t.floating.style,{maxWidth:`${o}px`,maxHeight:`${e}px`})}}}:j,D=(0,H.useCombobox)(),k=d||D,E=(0,r.useStyles)({name:g||"Combobox",classes:i.default,props:o,classNames:t,styles:n,unstyled:s,attributes:C,vars:m,varsResolver:P});return(0,y.jsx)(c.ComboboxProvider,{value:{getStyles:E,store:k,onOptionSubmit:p,size:x,resetSelectionOnOptionHover:v,readOnly:f,floatingHeight:w},children:(0,y.jsx)(l.Popover,{opened:k.dropdownOpened,...A,middlewares:T,onChange:e=>!e&&void(b?.(),k.closeDropdown()),withRoles:!1,unstyled:s,children:u})})};A.extend=e=>e,A.classes=i.default,A.varsResolver=P,A.displayName="@mantine/core/Combobox",A.Target=j.ComboboxTarget,A.Dropdown=d.ComboboxDropdown,A.Options=C.ComboboxOptions,A.Option=f.ComboboxOption,A.Search=w.ComboboxSearch,A.Empty=p.ComboboxEmpty,A.Chevron=s.ComboboxChevron,A.Footer=x.ComboboxFooter,A.Header=v.ComboboxHeader,A.EventsTarget=b.ComboboxEventsTarget,A.DropdownTarget=m.ComboboxDropdownTarget,A.Group=h.ComboboxGroup,A.ClearButton=u.ComboboxClearButton,A.HiddenInput=g.ComboboxHiddenInput,e.s(["Combobox",0,A])},464224,463112,211169,679089,212491,e=>{"use strict";e.s(["getOptionsLockup",0,function e(o){return o.reduce((o,t)=>"group"in t?{...o,...e(t.items)}:(o[`${t.value}`]=t,o),{})}],464224);var o=e.i(19300),t=e.i(506712),n=e.i(219867),a=e.i(711976),r=e.i(956031);function l(e){return"group"in e}function i({options:e,search:o,limit:t}){let n=o.trim().toLowerCase(),a=[];for(let r=0;r<e.length;r+=1){let s=e[r];if(a.length===t)break;l(s)&&a.push({group:s.group,items:i({options:s.items,search:o,limit:t-a.length})}),!l(s)&&s.label.toLowerCase().includes(n)&&a.push(s)}return a}function s(e){if(0===e.length)return!0;for(let o of e)if(!("group"in o)||o.items.length>0)return!1;return!0}e.s(["isOptionsGroup",0,l],463112),e.s(["defaultOptionsFilter",0,i],211169),e.s(["isEmptyComboboxData",0,s],679089);var c=e.i(56206),u=e.i(391398);function d({data:e,withCheckIcon:o,withAlignedLabels:n,value:i,checkIconPosition:s,unstyled:m,renderOption:p}){if(!l(e)){var b;let l=(b=e.value,Array.isArray(i)?i.includes(b):i===b),d=o&&(l?(0,u.jsx)(r.CheckIcon,{className:t.default.optionsDropdownCheckIcon}):n?(0,u.jsx)("div",{className:t.default.optionsDropdownCheckPlaceholder}):null),x=(0,u.jsxs)(u.Fragment,{children:["left"===s&&d,(0,u.jsx)("span",{children:e.label}),"right"===s&&d]});return(0,u.jsx)(a.Combobox.Option,{value:e.value,disabled:e.disabled,className:(0,c.default)({[t.default.optionsDropdownOption]:!m}),"data-reverse":"right"===s||void 0,"data-checked":l||void 0,"aria-selected":l,active:l,children:"function"==typeof p?p({option:e,checked:l}):x})}let x=e.items.map(e=>(0,u.jsx)(d,{data:e,value:i,unstyled:m,withCheckIcon:o,withAlignedLabels:n,checkIconPosition:s,renderOption:p},`${e.value}`));return(0,u.jsx)(a.Combobox.Group,{label:e.group,children:x})}e.s(["OptionsDropdown",0,function({data:e,hidden:t,hiddenWhenEmpty:r,filter:c,search:m,limit:p,maxDropdownHeight:b,floatingHeight:x,withScrollArea:h=!0,filterOptions:v=!0,withCheckIcon:g=!1,withAlignedLabels:f=!1,value:C,checkIconPosition:w,nothingFoundMessage:j,unstyled:H,labelId:y,renderOption:S,scrollAreaProps:P,"aria-label":A}){let T=(0,n.useComboboxContext)();!function e(o,t=new Set){if(Array.isArray(o))for(let n of o)if(l(n))e(n.items,t);else{if(void 0===n.value)throw Error("[@mantine/core] Each option must have value property");if(t.has(n.value))throw Error(`[@mantine/core] Duplicate options are not supported. Option with value "${n.value}" was provided more than once`);t.add(n.value)}}(e);let D="string"==typeof m?(c||i)({options:e,search:v?m:"",limit:p??1/0}):e,k=s(D),E=D.map((e,o)=>(0,u.jsx)(d,{data:e,withCheckIcon:g,withAlignedLabels:f,value:C,checkIconPosition:w,unstyled:H,renderOption:S},l(e)?`group-${"string"==typeof e.group?e.group:o}`:`${e.value}`));return(0,u.jsx)(a.Combobox.Dropdown,{hidden:t||r&&k,"data-composed":!0,children:(0,u.jsxs)(a.Combobox.Options,{labelledBy:y,"aria-label":A,children:[h?(0,u.jsx)(o.ScrollArea.Autosize,{mah:(x??T.floatingHeight)==="viewport"?"var(--combobox-floating-options-max-height)":b??220,type:"scroll",scrollbarSize:"var(--combobox-padding)",offsetScrollbars:"y",...P,children:E}):E,k&&j&&(0,u.jsx)(a.Combobox.Empty,{children:j})]})})}],212491)},169972,387136,e=>{"use strict";var o=e.i(191788),t=e.i(171481);let n=new Map([["bold",o.createElement(o.Fragment,null,o.createElement("path",{d:"M28,64A12,12,0,0,1,40,52H216a12,12,0,0,1,0,24H40A12,12,0,0,1,28,64Zm12,52H168a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24Zm176,16H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm-48,40H40a12,12,0,0,0,0,24H168a12,12,0,0,0,0-24Z"}))],["duotone",o.createElement(o.Fragment,null,o.createElement("path",{d:"M216,64V168a16,16,0,0,1-16,16H40V64Z",opacity:"0.2"}),o.createElement("path",{d:"M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,48H168a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm176,24H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm-48,40H40a8,8,0,0,0,0,16H168a8,8,0,0,0,0-16Z"}))],["fill",o.createElement(o.Fragment,null,o.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM160,184H64a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm32-32H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16ZM56,112a8,8,0,0,1,8-8h96a8,8,0,0,1,0,16H64A8,8,0,0,1,56,112ZM192,88H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z"}))],["light",o.createElement(o.Fragment,null,o.createElement("path",{d:"M34,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H40A6,6,0,0,1,34,64Zm6,46H168a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12Zm176,28H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Zm-48,40H40a6,6,0,0,0,0,12H168a6,6,0,0,0,0-12Z"}))],["regular",o.createElement(o.Fragment,null,o.createElement("path",{d:"M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,48H168a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm176,24H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm-48,40H40a8,8,0,0,0,0,16H168a8,8,0,0,0,0-16Z"}))],["thin",o.createElement(o.Fragment,null,o.createElement("path",{d:"M36,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H40A4,4,0,0,1,36,64Zm4,44H168a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8Zm176,32H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Zm-48,40H40a4,4,0,0,0,0,8H168a4,4,0,0,0,0-8Z"}))]]),a=o.forwardRef((e,a)=>o.createElement(t.default,{ref:a,...e,weights:n}));a.displayName="TextAlignLeftIcon",e.s(["TextAlignLeftIcon",0,a],169972);let r=new Map([["bold",o.createElement(o.Fragment,null,o.createElement("path",{d:"M28,64A12,12,0,0,1,40,52H216a12,12,0,0,1,0,24H40A12,12,0,0,1,28,64ZM216,92H88a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm0,40H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm0,40H88a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"}))],["duotone",o.createElement(o.Fragment,null,o.createElement("path",{d:"M216,64V184H56a16,16,0,0,1-16-16V64Z",opacity:"0.2"}),o.createElement("path",{d:"M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64ZM216,96H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"}))],["fill",o.createElement(o.Fragment,null,o.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM192,184H96a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm0-32H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm0-32H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z"}))],["light",o.createElement(o.Fragment,null,o.createElement("path",{d:"M34,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H40A6,6,0,0,1,34,64ZM216,98H88a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Zm0,40H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Zm0,40H88a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z"}))],["regular",o.createElement(o.Fragment,null,o.createElement("path",{d:"M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64ZM216,96H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"}))],["thin",o.createElement(o.Fragment,null,o.createElement("path",{d:"M36,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H40A4,4,0,0,1,36,64Zm180,36H88a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Zm0,40H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Zm0,40H88a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z"}))]]),l=o.forwardRef((e,n)=>o.createElement(t.default,{ref:n,...e,weights:r}));l.displayName="TextAlignRightIcon",e.s(["TextAlignRightIcon",0,l],387136)},661426,433506,e=>{"use strict";var o=e.i(191788),t=e.i(171481);let n=new Map([["bold",o.createElement(o.Fragment,null,o.createElement("path",{d:"M28,64A12,12,0,0,1,40,52H216a12,12,0,0,1,0,24H40A12,12,0,0,1,28,64ZM64,92a12,12,0,0,0,0,24H192a12,12,0,0,0,0-24Zm152,40H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm-24,40H64a12,12,0,0,0,0,24H192a12,12,0,0,0,0-24Z"}))],["duotone",o.createElement(o.Fragment,null,o.createElement("path",{d:"M216,64V168a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V64Z",opacity:"0.2"}),o.createElement("path",{d:"M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64ZM64,96a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16Zm152,40H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm-24,40H64a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16Z"}))],["fill",o.createElement(o.Fragment,null,o.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM176,184H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm16-32H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16ZM72,112a8,8,0,0,1,8-8h96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,112ZM192,88H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z"}))],["light",o.createElement(o.Fragment,null,o.createElement("path",{d:"M34,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H40A6,6,0,0,1,34,64ZM64,98a6,6,0,0,0,0,12H192a6,6,0,0,0,0-12Zm152,40H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Zm-24,40H64a6,6,0,0,0,0,12H192a6,6,0,0,0,0-12Z"}))],["regular",o.createElement(o.Fragment,null,o.createElement("path",{d:"M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64ZM64,96a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16Zm152,40H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm-24,40H64a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16Z"}))],["thin",o.createElement(o.Fragment,null,o.createElement("path",{d:"M36,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H40A4,4,0,0,1,36,64Zm28,36a4,4,0,0,0,0,8H192a4,4,0,0,0,0-8Zm152,40H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Zm-24,40H64a4,4,0,0,0,0,8H192a4,4,0,0,0,0-8Z"}))]]),a=o.forwardRef((e,a)=>o.createElement(t.default,{ref:a,...e,weights:n}));a.displayName="TextAlignCenterIcon",e.s(["TextAlignCenterIcon",0,a],661426);let r=new Map([["bold",o.createElement(o.Fragment,null,o.createElement("path",{d:"M28,64A12,12,0,0,1,40,52H216a12,12,0,0,1,0,24H40A12,12,0,0,1,28,64ZM216,92H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm0,40H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm0,40H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"}))],["duotone",o.createElement(o.Fragment,null,o.createElement("path",{d:"M216,64V184H40V64Z",opacity:"0.2"}),o.createElement("path",{d:"M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64ZM216,96H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"}))],["fill",o.createElement(o.Fragment,null,o.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM192,184H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-32H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-32H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-32H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z"}))],["light",o.createElement(o.Fragment,null,o.createElement("path",{d:"M34,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H40A6,6,0,0,1,34,64ZM216,98H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Zm0,40H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Zm0,40H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z"}))],["regular",o.createElement(o.Fragment,null,o.createElement("path",{d:"M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64ZM216,96H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"}))],["thin",o.createElement(o.Fragment,null,o.createElement("path",{d:"M36,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H40A4,4,0,0,1,36,64Zm180,36H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Zm0,40H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Zm0,40H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z"}))]]),l=o.forwardRef((e,n)=>o.createElement(t.default,{ref:n,...e,weights:r}));l.displayName="TextAlignJustifyIcon",e.s(["TextAlignJustifyIcon",0,l],433506)},781041,e=>{"use strict";var o=e.i(648863),t=e.i(191788),n=e.i(485108),a=e.i(44091),r=e.i(62904),l=e.i(275519),i=e.i(19300),s=e.i(205764),c=e.i(464224),u=e.i(506712),d=e.i(734858),m=e.i(711976),p=e.i(956031),b=e.i(463112),x=e.i(211169),h=e.i(679089),v=e.i(212491),g=e.i(275825),f=e.i(409703),C=e.i(392862),w=e.i(219867),j=e.i(143796),H=e.i(332977),y=e.i(391398);let S={refProp:"ref"},P=(0,l.factory)(e=>{let{children:o,refProp:n,ref:r,...l}=(0,a.useProps)("ComboboxPopoverTarget",S,e),i=(0,f.getSingleElementChild)(o);if(!i)throw Error("ComboboxPopover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let s=(0,w.useComboboxContext)(),c=(0,H.useMergedRef)(r,s.store.targetRef,(0,g.getRefProp)(i)),u=(0,t.cloneElement)(i,{...(0,j.useComboboxTargetProps)({targetType:"button",withAriaAttributes:!0,withKeyboardNavigation:!0,withExpandedAttribute:!0,onKeyDown:i.props.onKeyDown,onClick:e=>{s.store.toggleDropdown(),i.props.onClick?.(e)},autoComplete:"off"}),...l,[n]:c});return(0,y.jsx)(C.Popover.Target,{refProp:n,children:u})});P.displayName="@mantine/core/ComboboxPopoverTarget";var A=e.i(579560),T=e.i(56206);function D({data:e,withCheckIcon:o,withAlignedLabels:t,value:n,checkIconPosition:a,unstyled:r,renderOption:l}){var i;if((0,b.isOptionsGroup)(e)){let i=e.items.map(e=>(0,y.jsx)(D,{data:e,value:n,unstyled:r,withCheckIcon:o,withAlignedLabels:t,checkIconPosition:a,renderOption:l},`${e.value}`));return(0,y.jsx)(m.Combobox.Group,{label:e.group,children:i})}let s=(i=e.value,Array.isArray(n)?n.includes(i):n===i),c=o&&(s?(0,y.jsx)(p.CheckIcon,{className:u.default.optionsDropdownCheckIcon}):t?(0,y.jsx)("div",{className:u.default.optionsDropdownCheckPlaceholder}):null),d=(0,y.jsxs)(y.Fragment,{children:["left"===a&&c,(0,y.jsx)("span",{children:e.label}),"right"===a&&c]});return(0,y.jsx)(m.Combobox.Option,{value:e.value,disabled:e.disabled,className:(0,T.default)({[u.default.optionsDropdownOption]:!r}),"data-reverse":"right"===a||void 0,"data-checked":s||void 0,"aria-selected":s,active:s,children:"function"==typeof l?l({option:e,checked:s}):d})}function k({data:e,filter:o,search:t,limit:n,nothingFoundMessage:a,withScrollArea:r=!0,maxDropdownHeight:l,value:s,checkIconPosition:c,withCheckIcon:u=!1,withAlignedLabels:d=!1,unstyled:p,renderOption:v,scrollAreaProps:g,onSearchChange:f}){let C=(o||x.defaultOptionsFilter)({options:e,search:t,limit:n??1/0}),w=(0,h.isEmptyComboboxData)(C),j=C.map((e,o)=>(0,y.jsx)(D,{data:e,withCheckIcon:u,withAlignedLabels:d,value:s,checkIconPosition:c,unstyled:p,renderOption:v},(0,b.isOptionsGroup)(e)?`group-${"string"==typeof e.group?e.group:o}`:`${e.value}`));return(0,y.jsxs)(m.Combobox.Dropdown,{"data-composed":!0,children:[(0,y.jsx)(m.Combobox.Search,{value:t,onChange:f,placeholder:"Search..."}),(0,y.jsxs)(m.Combobox.Options,{children:[r?(0,y.jsx)(i.ScrollArea.Autosize,{mah:l??220,type:"scroll",scrollbarSize:"var(--combobox-padding)",offsetScrollbars:"y",...g,children:j}):j,w&&a&&(0,y.jsx)(m.Combobox.Empty,{children:a})]})]})}let E={withCheckIcon:!0,allowDeselect:!0,checkIconPosition:"left",hiddenInputValuesDivider:","},Z=(0,l.genericFactory)(e=>{let o=(0,a.useProps)("ComboboxPopover",E,e),{classNames:n,styles:l,unstyled:i,vars:u,children:p,multiple:b,value:x,defaultValue:h,onChange:g,data:f,dropdownOpened:C,defaultDropdownOpened:w,onDropdownOpen:j,onDropdownClose:H,onOptionSubmit:S,comboboxProps:P,filter:T,limit:D,withScrollArea:Z,maxDropdownHeight:B,selectFirstOptionOnDropdownOpen:V,withCheckIcon:O,withAlignedLabels:M,checkIconPosition:R,nothingFoundMessage:I,searchable:F,searchValue:N,defaultSearchValue:z,onSearchChange:$,allowDeselect:_,renderOption:L,scrollAreaProps:G,hiddenInputProps:U,name:K,form:W,hiddenInputValuesDivider:J,attributes:q,...X}=o,Q=(0,t.useMemo)(()=>(0,s.getParsedComboboxData)(f),[f]),Y=(0,t.useMemo)(()=>(0,c.getOptionsLockup)(Q),[Q]),[ee,eo]=(0,A.useUncontrolled)({value:x,defaultValue:h,finalValue:b?[]:null,onChange:g}),[et,en]=(0,A.useUncontrolled)({value:N,defaultValue:z,finalValue:"",onChange:$}),ea=(0,d.useCombobox)({opened:C,defaultOpened:w,onDropdownOpen:()=>{j?.(),F&&ea.focusSearchInput(),V&&ea.selectFirstOption()},onDropdownClose:()=>{H?.(),ea.resetSelectedOption(),F&&ea.focusTarget()}}),er=e=>{en(e),ea.resetSelectedOption()},{resolvedClassNames:el,resolvedStyles:ei}=(0,r.useResolvedStylesApi)({props:o,styles:l,classNames:n});return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(m.Combobox,{store:ea,__staticSelector:"ComboboxPopover",classNames:el,styles:ei,unstyled:i,attributes:q,onOptionSubmit:e=>{S?.(e);let o=Y[e];if(b){let e=Array.isArray(ee)?ee:[];e.includes(o.value)?eo(e.filter(e=>e!==o.value)):eo([...e,o.value]),ea.updateSelectedOptionIndex("selected")}else eo(_&&`${o.value}`==`${ee}`?null:o.value),ea.closeDropdown();F&&er("")},...P,...X,children:[p,F?(0,y.jsx)(k,{data:Q,filter:T,search:et,limit:D,nothingFoundMessage:I,withScrollArea:Z,maxDropdownHeight:B,value:ee,checkIconPosition:R,withCheckIcon:O,withAlignedLabels:M,unstyled:i,renderOption:L,scrollAreaProps:G,onSearchChange:e=>{er(e.currentTarget.value)}}):(0,y.jsx)(v.OptionsDropdown,{data:Q,filter:T,search:void 0,limit:D,hiddenWhenEmpty:!I,withScrollArea:Z,maxDropdownHeight:B,filterOptions:!1,value:ee,checkIconPosition:R,withCheckIcon:O,withAlignedLabels:M,nothingFoundMessage:I,unstyled:i,renderOption:L,scrollAreaProps:G,labelId:void 0,"aria-label":void 0})]}),(0,y.jsx)(m.Combobox.HiddenInput,{name:K,value:ee,form:W,valuesDivider:J,...U})]})});Z.classes=m.Combobox.classes,Z.displayName="@mantine/core/ComboboxPopover",Z.Target=P;let B={type:"code",component:function(){let[e,o]=(0,t.useState)(null);return(0,y.jsx)(Z,{data:["React","Angular","Vue","Svelte"],value:e,onChange:o,children:(0,y.jsx)(Z.Target,{children:(0,y.jsx)(n.Button,{variant:"default",miw:200,children:e||"Select framework"})})})},code:`
import { useState } from 'react';
import { Button, ComboboxPopover } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <ComboboxPopover
      data={['React', 'Angular', 'Vue', 'Svelte']}
      value={value}
      onChange={setValue}
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>{value || 'Select framework'}</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
`,centered:!0},V={type:"code",component:function(){let[e,o]=(0,t.useState)([]);return(0,y.jsx)(Z,{data:["React","Angular","Vue","Svelte"],value:e,onChange:o,multiple:!0,children:(0,y.jsx)(Z.Target,{children:(0,y.jsx)(n.Button,{variant:"default",miw:200,children:e.length>0?e.join(", "):"Select frameworks"})})})},code:`
import { useState } from 'react';
import { Button, ComboboxPopover } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <ComboboxPopover
      data={['React', 'Angular', 'Vue', 'Svelte']}
      value={value}
      onChange={setValue}
      multiple
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>
          {value.length > 0 ? value.join(', ') : 'Select frameworks'}
        </Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
`,centered:!0},O={type:"code",component:function(){let[e,o]=(0,t.useState)(null);return(0,y.jsx)(Z,{data:[{group:"Frontend",items:["React","Angular","Vue"]},{group:"Backend",items:["Node.js","Django","Rails"]}],value:e,onChange:o,children:(0,y.jsx)(Z.Target,{children:(0,y.jsx)(n.Button,{variant:"default",miw:200,children:e||"Select technology"})})})},code:`
import { useState } from 'react';
import { Button, ComboboxPopover } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <ComboboxPopover
      data={[
        { group: 'Frontend', items: ['React', 'Angular', 'Vue'] },
        { group: 'Backend', items: ['Node.js', 'Django', 'Rails'] },
      ]}
      value={value}
      onChange={setValue}
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>{value || 'Select technology'}</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
`,centered:!0},M={type:"configurator",component:function(e){return(0,y.jsx)(Z,{...e,data:["React","Angular","Svelte","Vue"],dropdownOpened:!0,defaultValue:"React",comboboxProps:{hideDetached:!1},children:(0,y.jsx)(Z.Target,{children:(0,y.jsx)(n.Button,{variant:"default",miw:200,mb:150,children:"Select framework"})})})},code:`
import { Button, ComboboxPopover } from '@mantine/core';

function Demo() {
  return (
    <ComboboxPopover
      {{props}}
      data={['React', 'Angular', 'Svelte', 'Vue']}
      dropdownOpened
      defaultValue="React"
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200} mb={150}>Select framework</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
`,centered:!0,maxWidth:340,controls:[{type:"boolean",prop:"withCheckIcon",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withAlignedLabels",initialValue:!1,libraryValue:!1},{type:"segmented",prop:"checkIconPosition",initialValue:"left",libraryValue:null,data:["left","right"]}]},R={type:"code",component:function(){return(0,y.jsx)(Z,{data:[{value:"react",label:"React"},{value:"ng",label:"Angular"},{value:"vue",label:"Vue",disabled:!0},{value:"svelte",label:"Svelte",disabled:!0}],children:(0,y.jsx)(Z.Target,{children:(0,y.jsx)(n.Button,{variant:"default",miw:200,children:"Select framework"})})})},code:`
import { Button, ComboboxPopover } from '@mantine/core';

function Demo() {
  return (
    <ComboboxPopover
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'vue', label: 'Vue', disabled: true },
        { value: 'svelte', label: 'Svelte', disabled: true },
      ]}
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>Select framework</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
`,centered:!0};var I=e.i(671640);let F={type:"code",component:function(){let[e,o]=(0,t.useState)("React"),[a,r]=(0,t.useState)("React");return(0,y.jsxs)(I.Stack,{children:[(0,y.jsx)(Z,{data:["React","Angular","Vue","Svelte"],value:e,onChange:o,allowDeselect:!1,children:(0,y.jsx)(Z.Target,{children:(0,y.jsx)(n.Button,{variant:"default",miw:200,children:e||"Cannot deselect"})})}),(0,y.jsx)(Z,{data:["React","Angular","Vue","Svelte"],value:a,onChange:r,allowDeselect:!0,children:(0,y.jsx)(Z.Target,{children:(0,y.jsx)(n.Button,{variant:"default",miw:200,children:a||"Can deselect (default)"})})})]})},code:`
import { useState } from 'react';
import { Button, ComboboxPopover, Stack } from '@mantine/core';

function Demo() {
  const [value1, setValue1] = useState<string | null>('React');
  const [value2, setValue2] = useState<string | null>('React');

  return (
    <Stack>
      <ComboboxPopover
        data={['React', 'Angular', 'Vue', 'Svelte']}
        value={value1}
        onChange={setValue1}
        allowDeselect={false}
      >
        <ComboboxPopover.Target>
          <Button variant="default" miw={200}>
            {value1 || 'Cannot deselect'}
          </Button>
        </ComboboxPopover.Target>
      </ComboboxPopover>

      <ComboboxPopover
        data={['React', 'Angular', 'Vue', 'Svelte']}
        value={value2}
        onChange={setValue2}
        allowDeselect
      >
        <ComboboxPopover.Target>
          <Button variant="default" miw={200}>
            {value2 || 'Can deselect (default)'}
          </Button>
        </ComboboxPopover.Target>
      </ComboboxPopover>
    </Stack>
  );
}
`,centered:!0},N={type:"code",component:function(){return(0,y.jsx)(Z,{data:[],nothingFoundMessage:"No options available",children:(0,y.jsx)(Z.Target,{children:(0,y.jsx)(n.Button,{variant:"default",miw:200,children:"Open dropdown"})})})},code:`
import { Button, ComboboxPopover } from '@mantine/core';

function Demo() {
  return (
    <ComboboxPopover
      data={[]}
      nothingFoundMessage="No options available"
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>Open dropdown</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
`,centered:!0},z={type:"code",component:function(){let[e,o]=(0,t.useState)(null);return(0,y.jsx)(Z,{data:["React","Angular","Vue","Svelte"],value:e,onChange:o,searchable:!0,nothingFoundMessage:"Nothing found...",children:(0,y.jsx)(Z.Target,{children:(0,y.jsx)(n.Button,{variant:"default",miw:200,children:e||"Select framework"})})})},code:`
import { useState } from 'react';
import { Button, ComboboxPopover } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <ComboboxPopover
      data={['React', 'Angular', 'Vue', 'Svelte']}
      value={value}
      onChange={setValue}
      searchable
      nothingFoundMessage="Nothing found..."
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>{value || 'Select framework'}</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
`,centered:!0};var $=e.i(883364);let _={type:"code",component:function(){let[e,o]=(0,t.useState)(null),[a,r]=(0,t.useState)("");return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Z,{data:["React","Angular","Vue","Svelte"],value:e,onChange:o,searchable:!0,searchValue:a,onSearchChange:r,children:(0,y.jsx)(Z.Target,{children:(0,y.jsx)(n.Button,{variant:"default",miw:200,children:e||"Select framework"})})}),(0,y.jsxs)($.Text,{mt:"md",size:"sm",children:["Search value: ",(0,y.jsx)("b",{children:a||"(empty)"})]}),(0,y.jsxs)($.Text,{size:"sm",children:["Selected value: ",(0,y.jsx)("b",{children:e||"(none)"})]})]})},code:`
import { useState } from 'react';
import { Button, ComboboxPopover, Text } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <ComboboxPopover
        data={['React', 'Angular', 'Vue', 'Svelte']}
        value={value}
        onChange={setValue}
        searchable
        searchValue={searchValue}
        onSearchChange={setSearchValue}
      >
        <ComboboxPopover.Target>
          <Button variant="default" miw={200}>{value || 'Select framework'}</Button>
        </ComboboxPopover.Target>
      </ComboboxPopover>

      <Text mt="md" size="sm">
        Search value: <b>{searchValue || '(empty)'}</b>
      </Text>
      <Text size="sm">
        Selected value: <b>{value || '(none)'}</b>
      </Text>
    </>
  );
}
`,centered:!0,maxWidth:340};var L=e.i(837048),G=e.i(661426),U=e.i(433506),K=e.i(169972),W=e.i(387136),J=e.i(725695);let q=`
import { useState } from 'react';
import {
  CheckIcon,
  TextAlignCenterIcon,
  TextAlignJustifyIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
} from '@phosphor-icons/react';
import { Button, ComboboxPopover, ComboboxPopoverProps, Group } from '@mantine/core';

const iconProps = {
  color: 'currentColor',
  opacity: 0.6,
  size: 18,
};

const icons: Record<string, React.ReactNode> = {
  left: <TextAlignLeftIcon {...iconProps} />,
  center: <TextAlignCenterIcon {...iconProps} />,
  right: <TextAlignRightIcon {...iconProps} />,
  justify: <TextAlignJustifyIcon {...iconProps} />,
};

const renderSelectOption: ComboboxPopoverProps['renderOption'] = ({ option, checked }) => (
  <Group flex="1" gap="xs">
    {icons[option.value]}
    {option.label}
    {checked && <CheckIcon style={{ marginInlineStart: 'auto' }} {...iconProps} />}
  </Group>
);

function Demo() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <ComboboxPopover
      data={[
        { value: 'left', label: 'Left' },
        { value: 'center', label: 'Center' },
        { value: 'right', label: 'Right' },
        { value: 'justify', label: 'Justify' },
      ]}
      value={value}
      onChange={setValue}
      renderOption={renderSelectOption}
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>{value || 'Select alignment'}</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
`,X={color:"currentColor",opacity:.6,size:18},Q={left:(0,y.jsx)(K.TextAlignLeftIcon,{...X}),center:(0,y.jsx)(G.TextAlignCenterIcon,{...X}),right:(0,y.jsx)(W.TextAlignRightIcon,{...X}),justify:(0,y.jsx)(U.TextAlignJustifyIcon,{...X})},Y=({option:e,checked:o})=>(0,y.jsxs)(J.Group,{flex:"1",gap:"xs",children:[Q[e.value],e.label,o&&(0,y.jsx)(L.CheckIcon,{style:{marginInlineStart:"auto"},...X})]}),ee={type:"code",component:function(){let[e,o]=(0,t.useState)(null);return(0,y.jsx)(Z,{data:[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"},{value:"justify",label:"Justify"}],value:e,onChange:o,renderOption:Y,children:(0,y.jsx)(Z.Target,{children:(0,y.jsx)(n.Button,{variant:"default",miw:200,children:e||"Select alignment"})})})},code:q,centered:!0,defaultExpanded:!1},eo=`
import { Button, ComboboxPopover } from '@mantine/core';

const data = Array(50)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  return (
    <ComboboxPopover data={data} maxDropdownHeight={200}>
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>Select option</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
`,et=Array(50).fill(0).map((e,o)=>`Option ${o}`),en={type:"code",component:function(){return(0,y.jsx)(Z,{data:et,maxDropdownHeight:200,children:(0,y.jsx)(Z.Target,{children:(0,y.jsx)(n.Button,{variant:"default",miw:200,children:"Select option"})})})},code:eo,centered:!0},ea={type:"code",component:function(){return(0,y.jsx)(Z,{data:["React","Angular","Vue","Svelte"],comboboxProps:{position:"top",middlewares:{flip:!1,shift:!1}},children:(0,y.jsx)(Z.Target,{children:(0,y.jsx)(n.Button,{variant:"default",miw:200,children:"Open dropdown above"})})})},code:`
import { Button, ComboboxPopover } from '@mantine/core';

function Demo() {
  return (
    <ComboboxPopover
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ position: 'top', middlewares: { flip: false, shift: false } }}
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>Open dropdown above</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
`,centered:!0},er={type:"code",component:function(){return(0,y.jsx)(Z,{data:["React","Angular","Vue","Svelte"],comboboxProps:{transitionProps:{transition:"pop",duration:200}},children:(0,y.jsx)(Z.Target,{children:(0,y.jsx)(n.Button,{variant:"default",miw:200,children:"With animation"})})})},code:`
import { Button, ComboboxPopover } from '@mantine/core';

function Demo() {
  return (
    <ComboboxPopover
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>With animation</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
`,centered:!0};var el=e.i(541772);let ei={type:"code",component:function(){let[e,{toggle:o}]=(0,el.useDisclosure)();return(0,y.jsxs)(J.Group,{children:[(0,y.jsx)(n.Button,{onClick:o,children:"Toggle dropdown"}),(0,y.jsx)(Z,{data:["React","Angular","Vue","Svelte"],dropdownOpened:e,children:(0,y.jsx)(Z.Target,{children:(0,y.jsx)(n.Button,{variant:"default",miw:200,children:"Select framework"})})})]})},code:`
import { Button, ComboboxPopover, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [dropdownOpened, { toggle }] = useDisclosure();

  return (
    <Group>
      <Button onClick={toggle}>Toggle dropdown</Button>
      <ComboboxPopover
        data={['React', 'Angular', 'Vue', 'Svelte']}
        dropdownOpened={dropdownOpened}
      >
        <ComboboxPopover.Target>
          <Button variant="default" miw={200}>Select framework</Button>
        </ComboboxPopover.Target>
      </ComboboxPopover>
    </Group>
  );
}
`,centered:!0},es={type:"code",component:function(){let[e,o]=(0,t.useState)(null),[a,r]=(0,t.useState)("");return(0,y.jsx)("form",{onSubmit:e=>{e.preventDefault(),r(new FormData(e.currentTarget).get("framework"))},children:(0,y.jsxs)(I.Stack,{children:[(0,y.jsx)(Z,{data:["React","Angular","Vue","Svelte"],value:e,onChange:o,name:"framework",children:(0,y.jsx)(Z.Target,{children:(0,y.jsx)(n.Button,{variant:"default",miw:200,type:"button",children:e||"Select framework"})})}),(0,y.jsx)(n.Button,{type:"submit",children:"Submit"}),a&&(0,y.jsxs)($.Text,{size:"sm",children:["Submitted value: ",(0,y.jsx)("b",{children:a})]})]})})},code:`
import { useState } from 'react';
import { Button, ComboboxPopover, Stack, Text } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        setSubmitted(formData.get('framework') as string);
      }}
    >
      <Stack>
        <ComboboxPopover
          data={['React', 'Angular', 'Vue', 'Svelte']}
          value={value}
          onChange={setValue}
          name="framework"
        >
          <ComboboxPopover.Target>
            <Button variant="default" miw={200} type="button">
              {value || 'Select framework'}
            </Button>
          </ComboboxPopover.Target>
        </ComboboxPopover>

        <Button type="submit">Submit</Button>
        {submitted && <Text size="sm">Submitted value: <b>{submitted}</b></Text>}
      </Stack>
    </form>
  );
}
`,centered:!0,maxWidth:340},ec=({options:e,search:o})=>{let t=e.filter(e=>e.label.toLowerCase().trim().includes(o.toLowerCase().trim()));return t.sort((e,o)=>e.label.localeCompare(o.label)),t},eu={type:"code",component:function(){let[e,o]=(0,t.useState)(null);return(0,y.jsx)(Z,{data:["4 – React","1 – Angular","3 – Vue","2 – Svelte"],value:e,onChange:o,searchable:!0,filter:ec,nothingFoundMessage:"Nothing found...",children:(0,y.jsx)(Z.Target,{children:(0,y.jsx)(n.Button,{variant:"default",miw:200,children:e||"Select framework"})})})},code:`
import { useState } from 'react';
import { Button, ComboboxItem, ComboboxPopover, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const filtered = (options as ComboboxItem[]).filter((option) =>
    option.label.toLowerCase().trim().includes(search.toLowerCase().trim())
  );

  filtered.sort((a, b) => a.label.localeCompare(b.label));
  return filtered;
};

function Demo() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <ComboboxPopover
      data={['4 – React', '1 – Angular', '3 – Vue', '2 – Svelte']}
      value={value}
      onChange={setValue}
      searchable
      filter={optionsFilter}
      nothingFoundMessage="Nothing found..."
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>{value || 'Select framework'}</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
`,centered:!0},ed=`
import { useState } from 'react';
import { Button, ComboboxPopover } from '@mantine/core';

const largeData = Array(1000)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <ComboboxPopover
      data={largeData}
      value={value}
      onChange={setValue}
      searchable
      limit={5}
      nothingFoundMessage="Nothing found..."
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>{value || 'Select option'}</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
`,em=Array(1e3).fill(0).map((e,o)=>`Option ${o}`),ep={type:"code",component:function(){let[e,o]=(0,t.useState)(null);return(0,y.jsx)(Z,{data:em,value:e,onChange:o,searchable:!0,limit:5,nothingFoundMessage:"Nothing found...",children:(0,y.jsx)(Z.Target,{children:(0,y.jsx)(n.Button,{variant:"default",miw:200,children:e||"Select option"})})})},code:ed,centered:!0},eb={type:"code",component:function(){return(0,y.jsx)(Z,{data:["React","Angular","Vue","Svelte"],comboboxProps:{width:250,position:"bottom-start"},children:(0,y.jsx)(Z.Target,{children:(0,y.jsx)(n.Button,{variant:"default",miw:200,children:"Select framework"})})})},code:`
import { Button, ComboboxPopover } from '@mantine/core';

function Demo() {
  return (
    <ComboboxPopover
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ width: 250, position: 'bottom-start' }}
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>Select framework</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
`,centered:!0};var ex=(0,o.__exportAll)({allowDeselect:()=>F,checkIcon:()=>M,controlledSearch:()=>_,disabledOptions:()=>R,dropdownAnimation:()=>er,dropdownOpened:()=>ei,dropdownPosition:()=>ea,dropdownWidth:()=>eb,formSubmission:()=>es,groups:()=>O,limit:()=>ep,multiple:()=>V,nothingFound:()=>N,renderOption:()=>ee,scrollArea:()=>en,searchable:()=>z,sort:()=>eu,usage:()=>B});e.s(["ComboboxPopoverDemos",0,ex],781041)},671601,e=>{"use strict";var o=e.i(391398),t=e.i(38856),n=e.i(781041);e.i(603441);var a=e.i(62558);e.i(457450);var r=e.i(418026);let l=(0,a.Layout)(r.MDX_DATA.ComboboxPopover);function i(e){let a={a:"a",code:"code",h2:"h2",p:"p",...(0,t.useMDXComponents)(),...e.components},{ComboboxData:r,Demo:l}=a;return r||s("ComboboxData",!0),l||s("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.code,{children:"ComboboxPopover"})," allows adding a combobox dropdown with selectable options to any button element.\nUnlike ",(0,o.jsx)(a.code,{children:"Select"})," and ",(0,o.jsx)(a.code,{children:"MultiSelect"}),", it does not render an input – instead, you provide your own\ntarget element (typically a ",(0,o.jsx)(a.code,{children:"Button"}),") via ",(0,o.jsx)(a.code,{children:"ComboboxPopover.Target"}),"."]}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.code,{children:"ComboboxPopover.Target"})," child must be a single element or component that accepts a ",(0,o.jsx)(a.code,{children:"ref"}),".\nFragments, strings, and other primitive values are not supported."]}),"\n",(0,o.jsx)(l,{data:n.ComboboxPopoverDemos.usage}),"\n",(0,o.jsx)(a.h2,{id:"data-format",children:"Data format"}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.code,{children:"ComboboxPopover"})," supports the same ",(0,o.jsx)(a.code,{children:"data"})," format as ",(0,o.jsx)(a.a,{href:"/core/select",children:"Select"})," component:\nan array of strings, objects with ",(0,o.jsx)(a.code,{children:"value"})," and ",(0,o.jsx)(a.code,{children:"label"}),", or grouped items."]}),"\n",(0,o.jsx)(r,{component:"ComboboxPopover"}),"\n",(0,o.jsx)(a.h2,{id:"searchable",children:"Searchable"}),"\n",(0,o.jsxs)(a.p,{children:["Set ",(0,o.jsx)(a.code,{children:"searchable"})," prop to enable a search input inside the dropdown that filters options as you type.\nUse ",(0,o.jsx)(a.code,{children:"nothingFoundMessage"})," to display a message when no options match the search query."]}),"\n",(0,o.jsx)(l,{data:n.ComboboxPopoverDemos.searchable}),"\n",(0,o.jsx)(a.h2,{id:"controlled-search-value",children:"Controlled search value"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"searchValue"})," and ",(0,o.jsx)(a.code,{children:"onSearchChange"})," props to control the search input value:"]}),"\n",(0,o.jsx)(l,{data:n.ComboboxPopoverDemos.controlledSearch}),"\n",(0,o.jsx)(a.h2,{id:"sort-options",children:"Sort options"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"filter"})," prop with ",(0,o.jsx)(a.code,{children:"searchable"})," to provide a custom filtering and sorting function:"]}),"\n",(0,o.jsx)(l,{data:n.ComboboxPopoverDemos.sort}),"\n",(0,o.jsx)(a.h2,{id:"limit-options",children:"Limit options"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"limit"})," prop with ",(0,o.jsx)(a.code,{children:"searchable"})," to limit the number of options displayed at a time.\nThis is useful for large data sets to improve performance:"]}),"\n",(0,o.jsx)(l,{data:n.ComboboxPopoverDemos.limit}),"\n",(0,o.jsx)(a.h2,{id:"multiple-selection",children:"Multiple selection"}),"\n",(0,o.jsxs)(a.p,{children:["Set ",(0,o.jsx)(a.code,{children:"multiple"})," prop to allow selecting multiple values. When ",(0,o.jsx)(a.code,{children:"multiple"})," is set,\n",(0,o.jsx)(a.code,{children:"value"})," type changes from ",(0,o.jsx)(a.code,{children:"string | null"})," to ",(0,o.jsx)(a.code,{children:"string[]"}),", and ",(0,o.jsx)(a.code,{children:"onChange"})," callback\nreceives an array of selected values."]}),"\n",(0,o.jsx)(l,{data:n.ComboboxPopoverDemos.multiple}),"\n",(0,o.jsx)(a.h2,{id:"check-icon",children:"Check icon"}),"\n",(0,o.jsx)(l,{data:n.ComboboxPopoverDemos.checkIcon}),"\n",(0,o.jsx)(a.h2,{id:"allow-deselect",children:"Allow deselect"}),"\n",(0,o.jsxs)(a.p,{children:["By default, the selected option can be deselected by clicking it again.\nSet ",(0,o.jsx)(a.code,{children:"allowDeselect={false}"})," to prevent this behavior."]}),"\n",(0,o.jsx)(l,{data:n.ComboboxPopoverDemos.allowDeselect}),"\n",(0,o.jsx)(a.h2,{id:"nothing-found-message",children:"Nothing found message"}),"\n",(0,o.jsxs)(a.p,{children:["Set ",(0,o.jsx)(a.code,{children:"nothingFoundMessage"})," prop to display a message when no options are available:"]}),"\n",(0,o.jsx)(l,{data:n.ComboboxPopoverDemos.nothingFound}),"\n",(0,o.jsx)(a.h2,{id:"disabled-options",children:"Disabled options"}),"\n",(0,o.jsx)(l,{data:n.ComboboxPopoverDemos.disabledOptions}),"\n",(0,o.jsx)(a.h2,{id:"groups",children:"Groups"}),"\n",(0,o.jsx)(l,{data:n.ComboboxPopoverDemos.groups}),"\n",(0,o.jsx)(a.h2,{id:"render-option",children:"Render option"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"renderOption"})," prop to customize option rendering:"]}),"\n",(0,o.jsx)(l,{data:n.ComboboxPopoverDemos.renderOption}),"\n",(0,o.jsx)(a.h2,{id:"large-data-sets",children:"Large data sets"}),"\n",(0,o.jsxs)(a.p,{children:["By default, the dropdown is wrapped with ",(0,o.jsx)(a.code,{children:"ScrollArea.Autosize"}),".\nUse ",(0,o.jsx)(a.code,{children:"maxDropdownHeight"})," to control the maximum height:"]}),"\n",(0,o.jsx)(l,{data:n.ComboboxPopoverDemos.scrollArea}),"\n",(0,o.jsx)(a.h2,{id:"control-dropdown-opened-state",children:"Control dropdown opened state"}),"\n",(0,o.jsxs)(a.p,{children:["Use ",(0,o.jsx)(a.code,{children:"dropdownOpened"})," prop to control the dropdown state.\nAdditionally, you can use ",(0,o.jsx)(a.code,{children:"onDropdownOpen"})," and ",(0,o.jsx)(a.code,{children:"onDropdownClose"})," callbacks\nto react to dropdown state changes."]}),"\n",(0,o.jsx)(l,{data:n.ComboboxPopoverDemos.dropdownOpened}),"\n",(0,o.jsx)(a.h2,{id:"dropdown-position",children:"Dropdown position"}),"\n",(0,o.jsx)(l,{data:n.ComboboxPopoverDemos.dropdownPosition}),"\n",(0,o.jsx)(a.h2,{id:"dropdown-width",children:"Dropdown width"}),"\n",(0,o.jsxs)(a.p,{children:["By default, the dropdown width matches the target element. Use ",(0,o.jsx)(a.code,{children:"comboboxProps"}),"\nto set a custom width:"]}),"\n",(0,o.jsx)(l,{data:n.ComboboxPopoverDemos.dropdownWidth}),"\n",(0,o.jsx)(a.h2,{id:"dropdown-animation",children:"Dropdown animation"}),"\n",(0,o.jsx)(l,{data:n.ComboboxPopoverDemos.dropdownAnimation}),"\n",(0,o.jsx)(a.h2,{id:"form-submission",children:"Form submission"}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.code,{children:"ComboboxPopover"})," renders a hidden input with the selected value for native form submission.\nUse ",(0,o.jsx)(a.code,{children:"name"})," prop to set the input name. For multiple selection, values are joined with a comma\nby default – use ",(0,o.jsx)(a.code,{children:"hiddenInputValuesDivider"})," to change the separator."]}),"\n",(0,o.jsx)(l,{data:n.ComboboxPopoverDemos.formSubmission})]})}function s(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,o.jsx)(l,{...e,children:(0,o.jsx)(i,{...e})})}])},812448,(e,o,t)=>{let n="/core/combobox-popover";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(671601)]),o.hot&&o.hot.dispose(function(){window.__NEXT_P.push([n])})},648761,e=>{e.v(o=>Promise.all(["static/chunks/22379_btw709h.js"].map(o=>e.l(o))).then(()=>o(493594)))},828805,e=>{e.v(o=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(o=>e.l(o))).then(()=>o(879466)))}]);