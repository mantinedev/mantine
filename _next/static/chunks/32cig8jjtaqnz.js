(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,o)=>{let a={};for(var n in e)t(a,n,{get:e[n],enumerable:!0});return o||t(a,Symbol.toStringTag,{value:"Module"}),a}])},931882,e=>{"use strict";var t=e.i(191788),o=e.i(171481);let a=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,96l-80,80L48,96Z",opacity:"0.2"}),t.createElement("path",{d:"M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"}))]]),n=t.forwardRef((e,n)=>t.createElement(o.default,{ref:n,...e,weights:a}));n.displayName="CaretDownIcon",e.s(["CaretDownIcon",0,n],931882)},960831,e=>{"use strict";e.s(["inputControls",0,[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"md",libraryValue:"md"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}],"inputOnlyControls",0,[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"md",libraryValue:"md"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],"inputWrapperOnlyControls",0,[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}]])},734858,e=>{"use strict";function t(e,o=document){let a=o.querySelector(e);if(a)return a;let n=o.querySelectorAll("*");for(let o=0;o<n.length;o+=1){let a=n[o];if(a.shadowRoot){let o=t(e,a.shadowRoot);if(o)return o}}return null}function o(e,t=document){let a=[],n=t.querySelectorAll(e);a.push(...Array.from(n));let r=t.querySelectorAll("*");for(let t=0;t<r.length;t+=1){let n=r[t];if(n.shadowRoot){let t=o(e,n.shadowRoot);a.push(...t)}}return a}function a(e){if(!e)return document;let t=e.getRootNode();return t instanceof ShadowRoot||t instanceof Document?t:document}var n=e.i(191788),r=e.i(579560);e.s(["useCombobox",0,function({defaultOpened:e,opened:i,onOpenedChange:l,onDropdownClose:s,onDropdownOpen:c,loop:d=!0,scrollBehavior:m="instant"}={}){let[u,p]=(0,r.useUncontrolled)({value:i,defaultValue:e,finalValue:!1,onChange:l}),h=(0,n.useRef)(null),f=(0,n.useRef)(-1),g=(0,n.useRef)(null),x=(0,n.useRef)(null),b=(0,n.useRef)(-1),v=(0,n.useRef)(-1),w=(0,n.useRef)(-1),y=(0,n.useCallback)((e="unknown")=>{u||(p(!0),c?.(e))},[p,c,u]),D=(0,n.useCallback)((e="unknown")=>{u&&(p(!1),s?.(e))},[p,s,u]),j=(0,n.useCallback)((e="unknown")=>{u?D(e):y(e)},[D,y,u]),P=(0,n.useCallback)(()=>{let e=a(x.current),o=t(`#${h.current} [data-combobox-selected]`,e);o?.removeAttribute("data-combobox-selected"),o?.removeAttribute("aria-selected")},[]),T=(0,n.useCallback)(e=>{let n=a(x.current),r=t(`#${h.current}`,n),i=r?o("[data-combobox-option]",r):null;if(!i)return null;let l=e>=i.length?0:e<0?i.length-1:e;return(f.current=l,i?.[l]&&!i[l].hasAttribute("data-combobox-disabled"))?(P(),i[l].setAttribute("data-combobox-selected","true"),i[l].setAttribute("aria-selected","true"),i[l].scrollIntoView({block:"nearest",behavior:m}),i[l].id):null},[m,P]),k=(0,n.useCallback)(()=>{let e=a(x.current),n=t(`#${h.current} [data-combobox-active]`,e);return n?T(o(`#${h.current} [data-combobox-option]`,e).findIndex(e=>e===n)):T(0)},[T]),M=(0,n.useCallback)(()=>{let e=a(x.current),t=o(`#${h.current} [data-combobox-option]`,e);return T(function(e,t,o){for(let o=e+1;o<t.length;o+=1)if(!t[o].hasAttribute("data-combobox-disabled"))return o;if(o){for(let e=0;e<t.length;e+=1)if(!t[e].hasAttribute("data-combobox-disabled"))return e}return e}(f.current,t,d))},[T,d]),C=(0,n.useCallback)(()=>{let e=a(x.current),t=o(`#${h.current} [data-combobox-option]`,e);return T(function(e,t,o){for(let o=e-1;o>=0;o-=1)if(!t[o].hasAttribute("data-combobox-disabled"))return o;if(o){for(let e=t.length-1;e>-1;e-=1)if(!t[e].hasAttribute("data-combobox-disabled"))return e}return e}(f.current,t,d))},[T,d]),S=(0,n.useCallback)(()=>{let e=a(x.current);return T(function(e){for(let t=0;t<e.length;t+=1)if(!e[t].hasAttribute("data-combobox-disabled"))return t;return -1}(o(`#${h.current} [data-combobox-option]`,e)))},[T]),A=(0,n.useCallback)((e="selected",t)=>{if("number"==typeof e){f.current=e;let n=a(x.current),r=o(`#${h.current} [data-combobox-option]`,n);t?.scrollIntoView&&r[e]?.scrollIntoView({block:"nearest",behavior:m});return}w.current=window.setTimeout(()=>{let n=a(x.current),r=o(`#${h.current} [data-combobox-option]`,n),i=r.findIndex(t=>t.hasAttribute(`data-combobox-${e}`));f.current=i,t?.scrollIntoView&&r[i]?.scrollIntoView({block:"nearest",behavior:m})},0)},[]),V=(0,n.useCallback)(()=>{f.current=-1,P()},[P]),L=(0,n.useCallback)(()=>{let e=a(x.current);o(`#${h.current} [data-combobox-option]`,e)?.[f.current]?.click()},[]),Y=(0,n.useCallback)(e=>{h.current=e},[]),E=(0,n.useCallback)(()=>{b.current=window.setTimeout(()=>g.current?.focus(),0)},[]),H=(0,n.useCallback)(()=>{v.current=window.setTimeout(()=>x.current?.focus(),0)},[]),Z=(0,n.useCallback)(()=>f.current,[]);return(0,n.useEffect)(()=>()=>{window.clearTimeout(b.current),window.clearTimeout(v.current),window.clearTimeout(w.current)},[]),{dropdownOpened:u,openDropdown:y,closeDropdown:D,toggleDropdown:j,selectedOptionIndex:f.current,getSelectedOptionIndex:Z,selectOption:T,selectFirstOption:S,selectActiveOption:k,selectNextOption:M,selectPreviousOption:C,resetSelectedOption:V,updateSelectedOptionIndex:A,listId:h.current,setListId:Y,clickSelectedOption:L,searchRef:g,focusSearchInput:E,targetRef:x,focusTarget:H}}],734858)},219867,891032,637727,520936,566236,143796,740909,381224,24691,353165,329145,38403,476602,65582,429773,e=>{"use strict";let[t,o]=(0,e.i(386179).createSafeContext)("Combobox component was not found in tree");e.s(["ComboboxProvider",0,t,"useComboboxContext",0,o],219867);var a=e.i(294788),n=e.i(391398);function r({onMouseDown:e,onClick:t,onClear:o,...i}){return(0,n.jsx)(a.Input.ClearButton,{tabIndex:-1,"aria-hidden":!0,...i,onMouseDown:t=>{t.preventDefault(),e?.(t)},onClick:e=>{o(),t?.(e)}})}r.displayName="@mantine/core/ComboboxClearButton",e.s(["ComboboxClearButton",0,r],891032);var i=e.i(44091),l=e.i(275519),s=e.i(392862),c=e.i(506712);let d=(0,l.factory)(e=>{let{classNames:t,styles:a,className:r,style:l,hidden:c,...d}=(0,i.useProps)("ComboboxDropdown",null,e),m=o();return(0,n.jsx)(s.Popover.Dropdown,{...d,role:"presentation","data-hidden":c||void 0,"data-floating-height":m.floatingHeight||void 0,...m.getStyles("dropdown",{className:r,style:l,classNames:t,styles:a})})});d.classes=c.default,d.displayName="@mantine/core/ComboboxDropdown",e.s(["ComboboxDropdown",0,d],637727);var m=e.i(826639);let u={refProp:"ref"},p=(0,l.factory)(e=>{let{children:t,refProp:a,ref:r}=(0,i.useProps)("ComboboxDropdownTarget",u,e);if(o(),!(0,m.isElement)(t))throw Error("Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");return(0,n.jsx)(s.Popover.Target,{ref:r,refProp:a,children:t})});p.displayName="@mantine/core/ComboboxDropdownTarget",e.s(["ComboboxDropdownTarget",0,p],520936);var h=e.i(232471);let f=(0,l.factory)(e=>{let{classNames:t,className:a,style:r,styles:l,vars:s,...c}=(0,i.useProps)("ComboboxEmpty",null,e);return(0,n.jsx)(h.Box,{...o().getStyles("empty",{className:a,classNames:t,styles:l,style:r}),...c})});f.classes=c.default,f.displayName="@mantine/core/ComboboxEmpty",e.s(["ComboboxEmpty",0,f],566236);var g=e.i(275825),x=e.i(409703),b=e.i(191788);function v({onKeyDown:e,onClick:t,withKeyboardNavigation:a,withAriaAttributes:n,withExpandedAttribute:r,targetType:i,autoComplete:l}){let s=o(),[c,d]=(0,b.useState)(null);return{...n?{...r?{role:"combobox"}:{},"aria-haspopup":"listbox","aria-expanded":r?!!(s.store.listId&&s.store.dropdownOpened):void 0,"aria-controls":s.store.dropdownOpened&&s.store.listId?s.store.listId:void 0,"aria-activedescendant":s.store.dropdownOpened&&c||void 0,autoComplete:l,"data-expanded":s.store.dropdownOpened||void 0,"data-mantine-stop-propagation":s.store.dropdownOpened||void 0}:{},onKeyDown:t=>{if((e?.(t),!s.readOnly&&a)&&!t.nativeEvent.isComposing){if("ArrowDown"===t.nativeEvent.code&&(t.preventDefault(),s.store.dropdownOpened?d(s.store.selectNextOption()):(s.store.openDropdown("keyboard"),d(s.store.selectActiveOption()),s.store.updateSelectedOptionIndex("selected",{scrollIntoView:!0}))),"ArrowUp"===t.nativeEvent.code&&(t.preventDefault(),s.store.dropdownOpened?d(s.store.selectPreviousOption()):(s.store.openDropdown("keyboard"),d(s.store.selectActiveOption()),s.store.updateSelectedOptionIndex("selected",{scrollIntoView:!0}))),"Enter"===t.nativeEvent.code||"NumpadEnter"===t.nativeEvent.code){if(229===t.nativeEvent.keyCode)return;let e=s.store.getSelectedOptionIndex();s.store.dropdownOpened&&-1!==e?(t.preventDefault(),s.store.clickSelectedOption()):"button"===i&&(t.preventDefault(),s.store.openDropdown("keyboard"))}"Escape"===t.key&&s.store.closeDropdown("keyboard"),"Space"===t.nativeEvent.code&&"button"===i&&(t.preventDefault(),s.store.toggleDropdown("keyboard"))}},onClick:e=>{"button"===i&&e.currentTarget.focus(),t?.(e)}}}e.s(["useComboboxTargetProps",0,v],143796);var w=e.i(332977);let y={refProp:"ref",targetType:"input",withKeyboardNavigation:!0,withAriaAttributes:!0,withExpandedAttribute:!1,autoComplete:"off"},D=(0,l.factory)(e=>{let{children:t,refProp:a,withKeyboardNavigation:n,withAriaAttributes:r,withExpandedAttribute:l,targetType:s,autoComplete:c,ref:d,...m}=(0,i.useProps)("ComboboxEventsTarget",y,e),u=(0,x.getSingleElementChild)(t);if(!u)throw Error("Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let p=o();return(0,b.cloneElement)(u,{...v({targetType:s,withAriaAttributes:r,withKeyboardNavigation:n,withExpandedAttribute:l,onKeyDown:u.props.onKeyDown,onClick:u.props.onClick,autoComplete:c}),...m,[a]:(0,w.useMergedRef)(d,p.store.targetRef,(0,g.getRefProp)(u))})});D.displayName="@mantine/core/ComboboxEventsTarget",e.s(["ComboboxEventsTarget",0,D],740909);let j=(0,l.factory)(e=>{let{classNames:t,className:a,style:r,styles:l,vars:s,...c}=(0,i.useProps)("ComboboxFooter",null,e);return(0,n.jsx)(h.Box,{...o().getStyles("footer",{className:a,classNames:t,style:r,styles:l}),...c,onMouseDown:e=>{e.preventDefault()}})});j.classes=c.default,j.displayName="@mantine/core/ComboboxFooter",e.s(["ComboboxFooter",0,j],381224);var P=e.i(107315);let T=(0,l.factory)(e=>{let{classNames:t,className:a,style:r,styles:l,vars:s,children:c,label:d,id:m,...u}=(0,i.useProps)("ComboboxGroup",null,e),p=o(),f=(0,P.useId)(m),g=null!=d&&!1!==d&&""!==d;return(0,n.jsxs)(h.Box,{role:"group","aria-labelledby":g?f:void 0,...p.getStyles("group",{className:a,classNames:t,style:r,styles:l}),...u,children:[g&&(0,n.jsx)("div",{id:f,...p.getStyles("groupLabel",{classNames:t,styles:l}),children:d}),c]})});T.classes=c.default,T.displayName="@mantine/core/ComboboxGroup",e.s(["ComboboxGroup",0,T],24691);let k=(0,l.factory)(e=>{let{classNames:t,className:a,style:r,styles:l,vars:s,...c}=(0,i.useProps)("ComboboxHeader",null,e);return(0,n.jsx)(h.Box,{...o().getStyles("header",{className:a,classNames:t,style:r,styles:l}),...c,onMouseDown:e=>{e.preventDefault()}})});function M({value:e,valuesDivider:t=",",...o}){return(0,n.jsx)("input",{type:"hidden",value:Array.isArray(e)?e.join(t):e?`${e}`:"",...o})}k.classes=c.default,k.displayName="@mantine/core/ComboboxHeader",e.s(["ComboboxHeader",0,k],353165),M.displayName="@mantine/core/ComboboxHiddenInput",e.s(["ComboboxHiddenInput",0,M],329145);let C=(0,l.factory)(e=>{let t=(0,i.useProps)("ComboboxOption",null,e),{classNames:a,className:r,style:l,styles:s,vars:c,onClick:d,id:m,active:u,onMouseDown:p,onMouseOver:f,disabled:g,selected:x,mod:v,...w}=t,y=o(),D=(0,b.useId)();return(0,n.jsx)(h.Box,{...y.getStyles("option",{className:r,classNames:a,styles:s,style:l}),...w,id:m||D,mod:["combobox-option",{"combobox-active":u,"combobox-disabled":g,"combobox-selected":x},v],role:"option",onClick:e=>{g?e.preventDefault():(y.onOptionSubmit?.(t.value,t),d?.(e))},onMouseDown:e=>{e.preventDefault(),p?.(e)},onMouseOver:e=>{y.resetSelectionOnOptionHover&&y.store.resetSelectedOption(),f?.(e)}})});C.classes=c.default,C.displayName="@mantine/core/ComboboxOption",e.s(["ComboboxOption",0,C],38403);let S=(0,l.factory)(e=>{let{classNames:t,className:a,style:r,styles:l,id:s,onMouseDown:c,labelledBy:d,...m}=(0,i.useProps)("ComboboxOptions",null,e),u=o(),p=(0,P.useId)(s);return(0,b.useEffect)(()=>{u.store.setListId(p)},[p]),(0,n.jsx)(h.Box,{...u.getStyles("options",{className:a,style:r,classNames:t,styles:l}),...m,id:p,role:"listbox","aria-labelledby":d,onMouseDown:e=>{e.preventDefault(),c?.(e)}})});S.classes=c.default,S.displayName="@mantine/core/ComboboxOptions",e.s(["ComboboxOptions",0,S],476602);let A={withAriaAttributes:!0,withKeyboardNavigation:!0},V=(0,l.factory)(e=>{let{classNames:t,styles:r,unstyled:l,vars:s,withAriaAttributes:c,onKeyDown:d,onClick:m,withKeyboardNavigation:u,size:p,ref:h,...f}=(0,i.useProps)("ComboboxSearch",A,e),g=o(),x=g.getStyles("search"),b=v({targetType:"input",withAriaAttributes:c,withKeyboardNavigation:u,withExpandedAttribute:!1,onKeyDown:d,onClick:m,autoComplete:"off"});return(0,n.jsx)(a.Input,{ref:(0,w.useMergedRef)(h,g.store.searchRef),classNames:[{input:x.className},t],styles:[{input:x.style},r],size:p||g.size,...b,...f,__staticSelector:"Combobox"})});V.classes=c.default,V.displayName="@mantine/core/ComboboxSearch",e.s(["ComboboxSearch",0,V],65582);let L={refProp:"ref",targetType:"input",withKeyboardNavigation:!0,withAriaAttributes:!0,withExpandedAttribute:!1,autoComplete:"off"},Y=(0,l.factory)(e=>{let{children:t,refProp:a,withKeyboardNavigation:r,withAriaAttributes:l,withExpandedAttribute:c,targetType:d,autoComplete:m,ref:u,...p}=(0,i.useProps)("ComboboxTarget",L,e),h=(0,x.getSingleElementChild)(t);if(!h)throw Error("Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let f=o(),g=(0,b.cloneElement)(h,{...v({targetType:d,withAriaAttributes:l,withKeyboardNavigation:r,withExpandedAttribute:c,onKeyDown:h.props.onKeyDown,onClick:h.props.onClick,autoComplete:m}),...p});return(0,n.jsx)(s.Popover.Target,{refProp:a,ref:(0,w.useMergedRef)(u,f.store.targetRef),children:g})});Y.displayName="@mantine/core/ComboboxTarget",e.s(["ComboboxTarget",0,Y],429773)},711976,e=>{"use strict";var t=e.i(779177),o=e.i(433512),a=e.i(481178),n=e.i(44091),r=e.i(391466),i=e.i(392862),l=e.i(506712),s=e.i(918359),c=e.i(219867),d=e.i(891032),m=e.i(637727),u=e.i(520936),p=e.i(566236),h=e.i(740909),f=e.i(381224),g=e.i(24691),x=e.i(353165),b=e.i(329145),v=e.i(38403),w=e.i(476602),y=e.i(65582),D=e.i(429773),j=e.i(734858),P=e.i(391398);let T={keepMounted:!0,keepMountedMode:"display-none",withinPortal:!0,resetSelectionOnOptionHover:!1,width:"target",transitionProps:{transition:"fade",duration:0},size:"sm"},k=(0,a.createVarsResolver)((e,{size:a,dropdownPadding:n})=>({options:{"--combobox-option-fz":(0,o.getFontSize)(a),"--combobox-option-padding":(0,o.getSize)(a,"combobox-option-padding")},dropdown:{"--combobox-padding":void 0===n?void 0:(0,t.rem)(n),"--combobox-option-fz":(0,o.getFontSize)(a),"--combobox-option-padding":(0,o.getSize)(a,"combobox-option-padding")}})),M=e=>{let t=(0,n.useProps)("Combobox",T,e),{classNames:o,styles:a,unstyled:s,children:d,store:m,vars:u,onOptionSubmit:p,onClose:h,size:f,dropdownPadding:g,resetSelectionOnOptionHover:x,__staticSelector:b,readOnly:v,attributes:w,floatingHeight:y,middlewares:D,...M}=t,C="viewport"===y?{...D,flip:!1,size:{..."object"==typeof D?.size?D.size:{},padding:"object"==typeof D?.size&&void 0!==D.size.padding?D.size.padding:10,apply:({availableHeight:e,availableWidth:t,elements:o,...a})=>{o.floating.style.setProperty("--combobox-floating-max-height",`${e}px`);let n=D?.size;"object"==typeof n&&n.apply?n.apply({availableHeight:e,availableWidth:t,elements:o,...a}):n&&Object.assign(o.floating.style,{maxWidth:`${t}px`,maxHeight:`${e}px`})}}}:D,S=(0,j.useCombobox)(),A=m||S,V=(0,r.useStyles)({name:b||"Combobox",classes:l.default,props:t,classNames:o,styles:a,unstyled:s,attributes:w,vars:u,varsResolver:k});return(0,P.jsx)(c.ComboboxProvider,{value:{getStyles:V,store:A,onOptionSubmit:p,size:f,resetSelectionOnOptionHover:x,readOnly:v,floatingHeight:y},children:(0,P.jsx)(i.Popover,{opened:A.dropdownOpened,...M,middlewares:C,onChange:e=>!e&&void(h?.(),A.closeDropdown()),withRoles:!1,unstyled:s,children:d})})};M.extend=e=>e,M.classes=l.default,M.varsResolver=k,M.displayName="@mantine/core/Combobox",M.Target=D.ComboboxTarget,M.Dropdown=m.ComboboxDropdown,M.Options=w.ComboboxOptions,M.Option=v.ComboboxOption,M.Search=y.ComboboxSearch,M.Empty=p.ComboboxEmpty,M.Chevron=s.ComboboxChevron,M.Footer=f.ComboboxFooter,M.Header=x.ComboboxHeader,M.EventsTarget=h.ComboboxEventsTarget,M.DropdownTarget=u.ComboboxDropdownTarget,M.Group=g.ComboboxGroup,M.ClearButton=d.ComboboxClearButton,M.HiddenInput=b.ComboboxHiddenInput,e.s(["Combobox",0,M])},464224,463112,211169,679089,212491,e=>{"use strict";e.s(["getOptionsLockup",0,function e(t){return t.reduce((t,o)=>"group"in o?{...t,...e(o.items)}:(t[`${o.value}`]=o,t),{})}],464224);var t=e.i(19300),o=e.i(506712),a=e.i(219867),n=e.i(711976),r=e.i(956031);function i(e){return"group"in e}function l({options:e,search:t,limit:o}){let a=t.trim().toLowerCase(),n=[];for(let r=0;r<e.length;r+=1){let s=e[r];if(n.length===o)break;i(s)&&n.push({group:s.group,items:l({options:s.items,search:t,limit:o-n.length})}),!i(s)&&s.label.toLowerCase().includes(a)&&n.push(s)}return n}function s(e){if(0===e.length)return!0;for(let t of e)if(!("group"in t)||t.items.length>0)return!1;return!0}e.s(["isOptionsGroup",0,i],463112),e.s(["defaultOptionsFilter",0,l],211169),e.s(["isEmptyComboboxData",0,s],679089);var c=e.i(56206),d=e.i(391398);function m({data:e,withCheckIcon:t,withAlignedLabels:a,value:l,checkIconPosition:s,unstyled:u,renderOption:p}){if(!i(e)){var h;let i=(h=e.value,Array.isArray(l)?l.includes(h):l===h),m=t&&(i?(0,d.jsx)(r.CheckIcon,{className:o.default.optionsDropdownCheckIcon}):a?(0,d.jsx)("div",{className:o.default.optionsDropdownCheckPlaceholder}):null),f=(0,d.jsxs)(d.Fragment,{children:["left"===s&&m,(0,d.jsx)("span",{children:e.label}),"right"===s&&m]});return(0,d.jsx)(n.Combobox.Option,{value:e.value,disabled:e.disabled,className:(0,c.default)({[o.default.optionsDropdownOption]:!u}),"data-reverse":"right"===s||void 0,"data-checked":i||void 0,"aria-selected":i,active:i,children:"function"==typeof p?p({option:e,checked:i}):f})}let f=e.items.map(e=>(0,d.jsx)(m,{data:e,value:l,unstyled:u,withCheckIcon:t,withAlignedLabels:a,checkIconPosition:s,renderOption:p},`${e.value}`));return(0,d.jsx)(n.Combobox.Group,{label:e.group,children:f})}e.s(["OptionsDropdown",0,function({data:e,hidden:o,hiddenWhenEmpty:r,filter:c,search:u,limit:p,maxDropdownHeight:h,floatingHeight:f,withScrollArea:g=!0,filterOptions:x=!0,withCheckIcon:b=!1,withAlignedLabels:v=!1,value:w,checkIconPosition:y,nothingFoundMessage:D,unstyled:j,labelId:P,renderOption:T,scrollAreaProps:k,"aria-label":M}){let C=(0,a.useComboboxContext)();!function e(t,o=new Set){if(Array.isArray(t))for(let a of t)if(i(a))e(a.items,o);else{if(void 0===a.value)throw Error("[@mantine/core] Each option must have value property");if(o.has(a.value))throw Error(`[@mantine/core] Duplicate options are not supported. Option with value "${a.value}" was provided more than once`);o.add(a.value)}}(e);let S="string"==typeof u?(c||l)({options:e,search:x?u:"",limit:p??1/0}):e,A=s(S),V=S.map((e,t)=>(0,d.jsx)(m,{data:e,withCheckIcon:b,withAlignedLabels:v,value:w,checkIconPosition:y,unstyled:j,renderOption:T},i(e)?`group-${"string"==typeof e.group?e.group:t}`:`${e.value}`));return(0,d.jsx)(n.Combobox.Dropdown,{hidden:o||r&&A,"data-composed":!0,children:(0,d.jsxs)(n.Combobox.Options,{labelledBy:P,"aria-label":M,children:[g?(0,d.jsx)(t.ScrollArea.Autosize,{mah:(f??C.floatingHeight)==="viewport"?"var(--combobox-floating-options-max-height)":h??220,type:"scroll",scrollbarSize:"var(--combobox-padding)",offsetScrollbars:"y",...k,children:V}):V,A&&D&&(0,d.jsx)(n.Combobox.Empty,{children:D})]})})}],212491)},509496,e=>{"use strict";var t=e.i(191788);e.s(["usePrevious",0,function(e){let o=(0,t.useRef)(void 0);return(0,t.useEffect)(()=>{o.current=e},[e]),o.current}])},988798,e=>{"use strict";var t=e.i(44091),o=e.i(62904),a=e.i(275519),n=e.i(586488),r=e.i(205764),i=e.i(464224),l=e.i(734858),s=e.i(711976),c=e.i(212491),d=e.i(191788),m=e.i(107315),u=e.i(509496),p=e.i(579560),h=e.i(391398);let f={size:"sm",withCheckIcon:!0,allowDeselect:!0,checkIconPosition:"left",openOnFocus:!0},g=(0,a.genericFactory)(e=>{let a=(0,t.useProps)(["Input","InputWrapper","Select"],f,e),{classNames:g,styles:x,unstyled:b,vars:v,dropdownOpened:w,defaultDropdownOpened:y,onDropdownClose:D,onDropdownOpen:j,onFocus:P,onBlur:T,onClick:k,onChange:M,data:C,value:S,defaultValue:A,selectFirstOptionOnChange:V,selectFirstOptionOnDropdownOpen:L,onOptionSubmit:Y,comboboxProps:E,readOnly:H,disabled:Z,filter:I,limit:N,withScrollArea:_,maxDropdownHeight:z,floatingHeight:F,size:O,searchable:B,rightSection:R,checkIconPosition:G,withCheckIcon:$,withAlignedLabels:W,nothingFoundMessage:U,name:K,form:q,searchValue:X,defaultSearchValue:J,onSearchChange:Q,allowDeselect:ee,error:et,rightSectionPointerEvents:eo,id:ea,clearable:en,clearSectionMode:er,clearButtonProps:ei,hiddenInputProps:el,renderOption:es,onClear:ec,autoComplete:ed,scrollAreaProps:em,__defaultRightSection:eu,__clearSection:ep,__clearable:eh,chevronColor:ef,autoSelectOnBlur:eg,openOnFocus:ex,attributes:eb,...ev}=a,ew=(0,d.useMemo)(()=>(0,r.getParsedComboboxData)(C),[C]),ey=(0,d.useRef)({}),eD=(0,d.useMemo)(()=>(0,i.getOptionsLockup)(ew),[ew]),ej=(0,m.useId)(ea),[eP,eT,ek]=(0,p.useUncontrolled)({value:S,defaultValue:A,finalValue:null,onChange:M}),eM=null!=eP?`${eP}`in eD?eD[`${eP}`]:ey.current[`${eP}`]:void 0,eC=(0,u.usePrevious)(eM),[eS,eA,eV]=(0,p.useUncontrolled)({value:X,defaultValue:J,finalValue:eM?eM.label:"",onChange:Q}),eL=(0,l.useCombobox)({opened:w,defaultOpened:y,onDropdownOpen:()=>{j?.(),L?eL.selectFirstOption():eL.updateSelectedOptionIndex("active",{scrollIntoView:!0})},onDropdownClose:()=>{D?.(),setTimeout(eL.resetSelectedOption,0)}}),eY=e=>{eA(e),eL.resetSelectedOption()},{resolvedClassNames:eE,resolvedStyles:eH}=(0,o.useResolvedStylesApi)({props:a,styles:x,classNames:g});(0,d.useEffect)(()=>{V&&eL.selectFirstOption()},[V,eS]),(0,d.useEffect)(()=>{null===S&&eY(""),null!=S&&eM&&(eC?.value!==eM.value||eC?.label!==eM.label)&&eY(eM.label)},[S,eM]),(0,d.useEffect)(()=>{ek||eV||eY(null!=eP?`${eP}`in eD?eD[`${eP}`]?.label:ey.current[`${eP}`]?.label||"":"")},[eD,eP]),(0,d.useEffect)(()=>{eP&&`${eP}`in eD&&(ey.current[`${eP}`]=eD[`${eP}`])},[eD,eP]);let eZ=(0,h.jsx)(s.Combobox.ClearButton,{...ei,onClear:()=>{eT(null,null),eY(""),ec?.()}}),eI=en&&null!=eP&&!Z&&!H;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(s.Combobox,{store:eL,__staticSelector:"Select",classNames:eE,styles:eH,unstyled:b,readOnly:H,size:O,attributes:eb,floatingHeight:F,keepMounted:eg,onOptionSubmit:e=>{Y?.(e);let t=ee&&`${eD[e].value}`==`${eP}`?null:eD[e],o=t?t.value:null;o!==eP&&eT(o,t),ek||eY(null!=o&&t?.label||""),eL.closeDropdown()},...E,children:[(0,h.jsx)(s.Combobox.Target,{targetType:B?"input":"button",autoComplete:ed,withExpandedAttribute:!0,children:(0,h.jsx)(n.InputBase,{id:ej,__defaultRightSection:(0,h.jsx)(s.Combobox.Chevron,{size:O,error:et,unstyled:b,color:ef}),__clearSection:eZ,__clearable:eI,__clearSectionMode:er,rightSection:R,rightSectionPointerEvents:eo||"none",...ev,size:O,__staticSelector:"Select",disabled:Z,readOnly:H||!B,value:eS,onChange:e=>{eY(e.currentTarget.value),eL.openDropdown(),V&&eL.selectFirstOption()},onFocus:e=>{ex&&B&&eL.openDropdown(),P?.(e)},onBlur:e=>{eg&&eL.clickSelectedOption(),B&&eL.closeDropdown();let t=null!=eP&&(`${eP}`in eD?eD[`${eP}`]:ey.current[`${eP}`]);eY(t&&t.label||""),T?.(e)},onClick:e=>{B?eL.openDropdown():eL.toggleDropdown(),k?.(e)},classNames:eE,styles:eH,unstyled:b,pointer:!B,error:et,attributes:eb})}),(0,h.jsx)(c.OptionsDropdown,{data:ew,hidden:H||Z,filter:I,search:eS,limit:N,hiddenWhenEmpty:!U,withScrollArea:_,maxDropdownHeight:z,filterOptions:!!B&&eM?.label!==eS,value:eP,checkIconPosition:G,withCheckIcon:$,withAlignedLabels:W,nothingFoundMessage:U,unstyled:b,labelId:ev.label?`${ej}-label`:void 0,"aria-label":ev.label?void 0:ev["aria-label"],renderOption:es,scrollAreaProps:em})]}),(0,h.jsx)(s.Combobox.HiddenInput,{value:eP,name:K,form:q,disabled:Z,...el})]})});g.classes={...n.InputBase.classes,...s.Combobox.classes},g.displayName="@mantine/core/Select",e.s(["Select",0,g])},420759,e=>{"use strict";var t=e.i(779177),o=e.i(391398);e.s(["RadioIcon",0,function({size:e,style:a,...n}){return(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 5 5",style:{width:(0,t.rem)(e),height:(0,t.rem)(e),...a},"aria-hidden":!0,...n,children:(0,o.jsx)("circle",{cx:"2.5",cy:"2.5",r:"2.5",fill:"currentColor"})})}])},823439,e=>{"use strict";var t=e.i(191788),o=e.i(171481);let a=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,48H180V36A28,28,0,0,0,152,8H104A28,28,0,0,0,76,36V48H40a12,12,0,0,0,0,24h4V208a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V72h4a12,12,0,0,0,0-24ZM100,36a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4V48H100Zm88,168H68V72H188ZM116,104v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Zm48,0v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z",opacity:"0.2"}),t.createElement("path",{d:"M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,50H174V40a22,22,0,0,0-22-22H104A22,22,0,0,0,82,40V50H40a6,6,0,0,0,0,12H50V208a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V62h10a6,6,0,0,0,0-12ZM94,40a10,10,0,0,1,10-10h48a10,10,0,0,1,10,10V50H94ZM194,208a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V62H194ZM110,104v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Zm48,0v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,52H172V40a20,20,0,0,0-20-20H104A20,20,0,0,0,84,40V52H40a4,4,0,0,0,0,8H52V208a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V60h12a4,4,0,0,0,0-8ZM92,40a12,12,0,0,1,12-12h48a12,12,0,0,1,12,12V52H92ZM196,208a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V60H196ZM108,104v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Zm48,0v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Z"}))]]),n=t.forwardRef((e,n)=>t.createElement(o.default,{ref:n,...e,weights:a}));n.displayName="TrashIcon",e.s(["TrashIcon",0,n],823439)},915793,e=>{"use strict";var t=e.i(191788),o=e.i(171481);let a=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M116,36V20a12,12,0,0,1,24,0V36a12,12,0,0,1-24,0Zm80,92a68,68,0,1,1-68-68A68.07,68.07,0,0,1,196,128Zm-24,0a44,44,0,1,0-44,44A44.05,44.05,0,0,0,172,128ZM51.51,68.49a12,12,0,1,0,17-17l-12-12a12,12,0,0,0-17,17Zm0,119-12,12a12,12,0,0,0,17,17l12-12a12,12,0,1,0-17-17ZM196,72a12,12,0,0,0,8.49-3.51l12-12a12,12,0,0,0-17-17l-12,12A12,12,0,0,0,196,72Zm8.49,115.51a12,12,0,0,0-17,17l12,12a12,12,0,0,0,17-17ZM48,128a12,12,0,0,0-12-12H20a12,12,0,0,0,0,24H36A12,12,0,0,0,48,128Zm80,80a12,12,0,0,0-12,12v16a12,12,0,0,0,24,0V220A12,12,0,0,0,128,208Zm108-92H220a12,12,0,0,0,0,24h16a12,12,0,0,0,0-24Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M184,128a56,56,0,1,1-56-56A56,56,0,0,1,184,128Z",opacity:"0.2"}),t.createElement("path",{d:"M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm8,24a64,64,0,1,0,64,64A64.07,64.07,0,0,0,128,64ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M122,40V16a6,6,0,0,1,12,0V40a6,6,0,0,1-12,0Zm68,88a62,62,0,1,1-62-62A62.07,62.07,0,0,1,190,128Zm-12,0a50,50,0,1,0-50,50A50.06,50.06,0,0,0,178,128ZM59.76,68.24a6,6,0,1,0,8.48-8.48l-16-16a6,6,0,0,0-8.48,8.48Zm0,119.52-16,16a6,6,0,1,0,8.48,8.48l16-16a6,6,0,1,0-8.48-8.48ZM192,70a6,6,0,0,0,4.24-1.76l16-16a6,6,0,0,0-8.48-8.48l-16,16A6,6,0,0,0,192,70Zm4.24,117.76a6,6,0,0,0-8.48,8.48l16,16a6,6,0,0,0,8.48-8.48ZM46,128a6,6,0,0,0-6-6H16a6,6,0,0,0,0,12H40A6,6,0,0,0,46,128Zm82,82a6,6,0,0,0-6,6v24a6,6,0,0,0,12,0V216A6,6,0,0,0,128,210Zm112-88H216a6,6,0,0,0,0,12h24a6,6,0,0,0,0-12Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M124,40V16a4,4,0,0,1,8,0V40a4,4,0,0,1-8,0Zm64,88a60,60,0,1,1-60-60A60.07,60.07,0,0,1,188,128Zm-8,0a52,52,0,1,0-52,52A52.06,52.06,0,0,0,180,128ZM61.17,66.83a4,4,0,0,0,5.66-5.66l-16-16a4,4,0,0,0-5.66,5.66Zm0,122.34-16,16a4,4,0,0,0,5.66,5.66l16-16a4,4,0,0,0-5.66-5.66ZM192,68a4,4,0,0,0,2.83-1.17l16-16a4,4,0,1,0-5.66-5.66l-16,16A4,4,0,0,0,192,68Zm2.83,121.17a4,4,0,0,0-5.66,5.66l16,16a4,4,0,0,0,5.66-5.66ZM40,124H16a4,4,0,0,0,0,8H40a4,4,0,0,0,0-8Zm88,88a4,4,0,0,0-4,4v24a4,4,0,0,0,8,0V216A4,4,0,0,0,128,212Zm112-88H216a4,4,0,0,0,0,8h24a4,4,0,0,0,0-8Z"}))]]),n=t.forwardRef((e,n)=>t.createElement(o.default,{ref:n,...e,weights:a}));n.displayName="SunIcon",e.s(["SunIcon",0,n],915793)},141806,e=>{"use strict";var t=e.i(433512),o=e.i(481178),a=e.i(44091),n=e.i(391466),r=e.i(956449),i=e.i(232471),l={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"},s=e.i(275519),c=e.i(191788),d=e.i(391398);let m=(0,c.createContext)({withinGroup:!1}),u=(0,o.createVarsResolver)((e,{spacing:o})=>({group:{"--ag-spacing":(0,t.getSpacing)(o)}})),p=(0,s.factory)(e=>{let t=(0,a.useProps)("AvatarGroup",null,e),{classNames:o,className:r,style:s,styles:c,unstyled:p,vars:h,spacing:f,attributes:g,...x}=t;return(0,d.jsx)(m,{value:{withinGroup:!0},children:(0,d.jsx)(i.Box,{...(0,n.useStyles)({name:"AvatarGroup",classes:l,props:t,className:r,style:s,classNames:o,styles:c,unstyled:p,attributes:g,vars:h,varsResolver:u,rootSelector:"group"})("group"),...x})})});function h(e){return(0,d.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}p.classes=l,p.varsResolver=u,p.displayName="@mantine/core/AvatarGroup";let f=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],g=(0,o.createVarsResolver)((e,{size:o,radius:a,variant:n,gradient:r,color:i,autoContrast:l,name:s,allowedInitialsColors:c})=>{let d="initials"===i&&"string"==typeof s?function(e,t=f){return t[Math.abs(function(e){let t=0;for(let o=0;o<e.length;o+=1)t=(t<<5)-t+e.charCodeAt(o)|0;return t}(e))%t.length]}(s,c):i,m=e.variantColorResolver({color:d||"gray",theme:e,gradient:r,variant:n||"light",autoContrast:l});return{root:{"--avatar-size":(0,t.getSize)(o,"avatar-size"),"--avatar-radius":void 0===a?void 0:(0,t.getRadius)(a),"--avatar-bg":d||n?m.background:void 0,"--avatar-color":d||n?m.color:void 0,"--avatar-bd":d||n?m.border:void 0}}}),x=(0,r.polymorphicFactory)(e=>{let t=(0,a.useProps)("Avatar",null,e),{classNames:o,className:r,style:s,styles:u,unstyled:p,vars:f,src:x,alt:b,radius:v,color:w,gradient:y,imageProps:D,children:j,autoContrast:P,mod:T,name:k,allowedInitialsColors:M,attributes:C,...S}=t,A=(0,c.use)(m),[V,L]=(0,c.useState)(!x),Y=(0,n.useStyles)({name:"Avatar",props:t,classes:l,className:r,style:s,classNames:o,styles:u,unstyled:p,attributes:C,vars:f,varsResolver:g});return(0,c.useEffect)(()=>L(!x),[x]),(0,d.jsx)(i.Box,{...Y("root"),mod:[{"within-group":A.withinGroup},T],...S,children:V||!x?(0,d.jsx)("span",{...Y("placeholder"),title:b,children:j||"string"==typeof k&&function(e,t=2){let o=e.split(" ");return 1===o.length?e.slice(0,t).toUpperCase():o.map(e=>e[0]).slice(0,t).join("").toUpperCase()}(k)||(0,d.jsx)(h,{})}):(0,d.jsx)("img",{...D,...Y("image"),src:x,alt:b,onError:e=>{L(!0),D?.onError?.(e)}})})});x.classes=l,x.varsResolver=g,x.displayName="@mantine/core/Avatar",x.Group=p,e.s(["Avatar",0,x],141806)},593612,e=>{"use strict";var t=e.i(191788),o=e.i(171481);let a=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm68-84a12,12,0,0,1-12,12H128a12,12,0,0,1-12-12V72a12,12,0,0,1,24,0v44h44A12,12,0,0,1,196,128Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm62-90a6,6,0,0,1-6,6H128a6,6,0,0,1-6-6V72a6,6,0,0,1,12,0v50h50A6,6,0,0,1,190,128Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm60-92a4,4,0,0,1-4,4H128a4,4,0,0,1-4-4V72a4,4,0,0,1,8,0v52h52A4,4,0,0,1,188,128Z"}))]]),n=t.forwardRef((e,n)=>t.createElement(o.default,{ref:n,...e,weights:a}));n.displayName="ClockIcon",e.s(["ClockIcon",0,n],593612)},393353,e=>{"use strict";var t=e.i(779177),o=e.i(433512),a=e.i(481178),n=e.i(317477),r=e.i(700145),i=e.i(853487),l=e.i(44091),s=e.i(391466),c=e.i(275519),d=e.i(232471),m={root:"m_e5262200",indicator:"m_760d1fb1",processing:"m_885901b1"},u=e.i(391398);let p={position:"top-end",offset:0,showZero:!0},h=(0,a.createVarsResolver)((e,{color:a,position:l,offset:s,size:c,radius:d,zIndex:m,autoContrast:u})=>({root:{"--indicator-color":a?(0,n.getThemeColor)(a,e):void 0,"--indicator-text-color":(0,i.getAutoContrastValue)(u,e)?(0,r.getContrastColor)({color:a,theme:e,autoContrast:u}):void 0,"--indicator-size":(0,t.rem)(c),"--indicator-radius":void 0===d?void 0:(0,o.getRadius)(d),"--indicator-z-index":m?.toString(),...function(e="top-end",o=0){let a={"--indicator-top":void 0,"--indicator-bottom":void 0,"--indicator-left":void 0,"--indicator-right":void 0,"--indicator-translate-x":void 0,"--indicator-translate-y":void 0},n="number"==typeof o?o:o.x,r="number"==typeof o?o:o.y,i=(0,t.rem)(n),l=(0,t.rem)(r),[s,c]=e.split("-");return"top"===s&&(a["--indicator-top"]=l,a["--indicator-translate-y"]="-50%"),"middle"===s&&(a["--indicator-top"]="50%",a["--indicator-translate-y"]="-50%"),"bottom"===s&&(a["--indicator-bottom"]=l,a["--indicator-translate-y"]="50%"),"start"===c&&(a["--indicator-left"]=i,a["--indicator-translate-x"]="-50%"),"center"===c&&(a["--indicator-left"]="50%",a["--indicator-translate-x"]="-50%"),"end"===c&&(a["--indicator-right"]=i,a["--indicator-translate-x"]="50%"),a}(l,s)}})),f=(0,c.factory)(e=>{let t=(0,l.useProps)("Indicator",p,e),{classNames:o,className:a,style:n,styles:r,unstyled:i,vars:c,children:f,position:g,offset:x,inline:b,label:v,radius:w,color:y,withBorder:D,disabled:j,processing:P,zIndex:T,autoContrast:k,maxValue:M,showZero:C,mod:S,attributes:A,...V}=t,L=(0,s.useStyles)({name:"Indicator",classes:m,props:t,className:a,style:n,classNames:o,styles:r,unstyled:i,attributes:A,vars:c,varsResolver:h}),Y=!C&&(0===v||"0"===v),E=void 0!==M&&"number"==typeof v&&v>M?`${M}+`:v;return(0,u.jsxs)(d.Box,{...L("root"),mod:[{inline:b},S],...V,children:[!j&&!Y&&(0,u.jsx)(d.Box,{mod:{"with-label":!!v,"with-border":D,processing:P},...L("indicator"),children:E}),f]})});f.classes=m,f.varsResolver=h,f.displayName="@mantine/core/Indicator",e.s(["Indicator",0,f],393353)},869433,e=>{"use strict";var t=e.i(191788),o=e.i(171481);let a=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),t.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"}))]]),n=t.forwardRef((e,n)=>t.createElement(o.default,{ref:n,...e,weights:a}));n.displayName="XIcon",e.s(["XIcon",0,n],869433)},392385,e=>{"use strict";var t=e.i(191788),o=e.i(171481);let a=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M176,128,96,208V48Z",opacity:"0.2"}),t.createElement("path",{d:"M181.66,122.34l-80-80A8,8,0,0,0,88,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,181.66,122.34ZM104,188.69V67.31L164.69,128Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M180.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L167.51,128,91.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,180.24,132.24Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M178.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L170.34,128,93.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,178.83,130.83Z"}))]]),n=t.forwardRef((e,n)=>t.createElement(o.default,{ref:n,...e,weights:a}));n.displayName="CaretRightIcon",e.s(["CaretRightIcon",0,n],392385)},613688,e=>{"use strict";var t=e.i(191788),o=e.i(171481);let a=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M144,96a16,16,0,1,1,16,16A16,16,0,0,1,144,96Zm92-40V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56ZM44,60v79.72l33.86-33.86a20,20,0,0,1,28.28,0L147.31,147l17.18-17.17a20,20,0,0,1,28.28,0L212,149.09V60Zm0,136H162.34L92,125.66l-48,48Zm168,0V183l-33.37-33.37L164.28,164l32,32Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,56V178.06l-39.72-39.72a8,8,0,0,0-11.31,0L147.31,164,97.66,114.34a8,8,0,0,0-11.32,0L32,168.69V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z",opacity:"0.2"}),t.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM156,88a12,12,0,1,1-12,12A12,12,0,0,1,156,88Zm60,112H40V160.69l46.34-46.35a8,8,0,0,1,11.32,0h0L165,181.66a8,8,0,0,0,11.32-11.32l-17.66-17.65L173,138.34a8,8,0,0,1,11.31,0L216,170.07V200Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM40,54H216a2,2,0,0,1,2,2V163.57L188.53,134.1a14,14,0,0,0-19.8,0l-21.42,21.42L101.9,110.1a14,14,0,0,0-19.8,0L38,154.2V56A2,2,0,0,1,40,54ZM38,200V171.17l52.58-52.58a2,2,0,0,1,2.84,0L176.83,202H40A2,2,0,0,1,38,200Zm178,2H193.8l-38-38,21.41-21.42a2,2,0,0,1,2.83,0l38,38V200A2,2,0,0,1,216,202ZM146,100a10,10,0,1,1,10,10A10,10,0,0,1,146,100Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44ZM40,52H216a4,4,0,0,1,4,4V168.4l-32.89-32.89a12,12,0,0,0-17,0l-22.83,22.83-46.82-46.83a12,12,0,0,0-17,0L36,159V56A4,4,0,0,1,40,52ZM36,200V170.34l53.17-53.17a4,4,0,0,1,5.66,0L181.66,204H40A4,4,0,0,1,36,200Zm180,4H193l-40-40,22.83-22.83a4,4,0,0,1,5.66,0L220,179.71V200A4,4,0,0,1,216,204ZM148,100a8,8,0,1,1,8,8A8,8,0,0,1,148,100Z"}))]]),n=t.forwardRef((e,n)=>t.createElement(o.default,{ref:n,...e,weights:a}));n.displayName="ImageIcon",e.s(["ImageIcon",0,n],613688)},900374,e=>{"use strict";var t=e.i(191788),o=e.i(171481);let a=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,76a52,52,0,1,0,52,52A52.06,52.06,0,0,0,128,76Zm0,80a28,28,0,1,1,28-28A28,28,0,0,1,128,156Zm113.86-49.57A12,12,0,0,0,236,98.34L208.21,82.49l-.11-31.31a12,12,0,0,0-4.25-9.12,116,116,0,0,0-38-21.41,12,12,0,0,0-9.68.89L128,37.27,99.83,21.53a12,12,0,0,0-9.7-.9,116.06,116.06,0,0,0-38,21.47,12,12,0,0,0-4.24,9.1l-.14,31.34L20,98.35a12,12,0,0,0-5.85,8.11,110.7,110.7,0,0,0,0,43.11A12,12,0,0,0,20,157.66l27.82,15.85.11,31.31a12,12,0,0,0,4.25,9.12,116,116,0,0,0,38,21.41,12,12,0,0,0,9.68-.89L128,218.73l28.14,15.74a12,12,0,0,0,9.7.9,116.06,116.06,0,0,0,38-21.47,12,12,0,0,0,4.24-9.1l.14-31.34,27.81-15.81a12,12,0,0,0,5.85-8.11A110.7,110.7,0,0,0,241.86,106.43Zm-22.63,33.18-26.88,15.28a11.94,11.94,0,0,0-4.55,4.59c-.54,1-1.11,1.93-1.7,2.88a12,12,0,0,0-1.83,6.31L184.13,199a91.83,91.83,0,0,1-21.07,11.87l-27.15-15.19a12,12,0,0,0-5.86-1.53h-.29c-1.14,0-2.3,0-3.44,0a12.08,12.08,0,0,0-6.14,1.51L93,210.82A92.27,92.27,0,0,1,71.88,199l-.11-30.24a12,12,0,0,0-1.83-6.32c-.58-.94-1.16-1.91-1.7-2.88A11.92,11.92,0,0,0,63.7,155L36.8,139.63a86.53,86.53,0,0,1,0-23.24l26.88-15.28a12,12,0,0,0,4.55-4.58c.54-1,1.11-1.94,1.7-2.89a12,12,0,0,0,1.83-6.31L71.87,57A91.83,91.83,0,0,1,92.94,45.17l27.15,15.19a11.92,11.92,0,0,0,6.15,1.52c1.14,0,2.3,0,3.44,0a12.08,12.08,0,0,0,6.14-1.51L163,45.18A92.27,92.27,0,0,1,184.12,57l.11,30.24a12,12,0,0,0,1.83,6.32c.58.94,1.16,1.91,1.7,2.88A11.92,11.92,0,0,0,192.3,101l26.9,15.33A86.53,86.53,0,0,1,219.23,139.61Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M230.1,108.76,198.25,90.62c-.64-1.16-1.31-2.29-2-3.41l-.12-36A104.61,104.61,0,0,0,162,32L130,49.89c-1.34,0-2.69,0-4,0L94,32A104.58,104.58,0,0,0,59.89,51.25l-.16,36c-.7,1.12-1.37,2.26-2,3.41l-31.84,18.1a99.15,99.15,0,0,0,0,38.46l31.85,18.14c.64,1.16,1.31,2.29,2,3.41l.12,36A104.61,104.61,0,0,0,94,224l32-17.87c1.34,0,2.69,0,4,0L162,224a104.58,104.58,0,0,0,34.08-19.25l.16-36c.7-1.12,1.37-2.26,2-3.41l31.84-18.1A99.15,99.15,0,0,0,230.1,108.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),t.createElement("path",{d:"M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm109.94-52.79a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A111.92,111.92,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.63a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21Zm-15,34.91-28.57,16.25a8,8,0,0,0-3,3c-.58,1-1.19,2.06-1.81,3.06a7.94,7.94,0,0,0-1.22,4.21l-.15,32.25a95.89,95.89,0,0,1-25.37,14.3L134,199.13a8,8,0,0,0-3.91-1h-.19c-1.21,0-2.43,0-3.64,0a8.1,8.1,0,0,0-4.1,1l-28.84,16.1A96,96,0,0,1,67.88,201l-.11-32.2a8,8,0,0,0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09,8.09,0,0,0-3-3.06l-28.6-16.29a90.49,90.49,0,0,1,0-28.26L61.67,97.63a8,8,0,0,0,3-3c.58-1,1.19-2.06,1.81-3.06a7.94,7.94,0,0,0,1.22-4.21l.15-32.25a95.89,95.89,0,0,1,25.37-14.3L122,56.87a8,8,0,0,0,4.1,1c1.21,0,2.43,0,3.64,0a8,8,0,0,0,4.1-1l28.84-16.1A96,96,0,0,1,188.12,55l.11,32.2a8,8,0,0,0,1.22,4.22c.62,1,1.23,2,1.8,3.06a8.09,8.09,0,0,0,3,3.06l28.6,16.29A90.49,90.49,0,0,1,222.9,142.12Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M237.94,107.21a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A111.92,111.92,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.63a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162Zm108-54.4a6,6,0,0,0-2.92-4L202.64,86.22l-.42-.71L202.1,51.2A6,6,0,0,0,200,46.64a110.12,110.12,0,0,0-36.07-20.31,6,6,0,0,0-4.84.45L128.46,43.86h-1L96.91,26.76a6,6,0,0,0-4.86-.44A109.92,109.92,0,0,0,56,46.68a6,6,0,0,0-2.12,4.55l-.16,34.34c-.14.23-.28.47-.41.71L22.91,103.57A6,6,0,0,0,20,107.62a104.81,104.81,0,0,0,0,40.78,6,6,0,0,0,2.92,4l30.42,17.33.42.71.12,34.31A6,6,0,0,0,56,209.36a110.12,110.12,0,0,0,36.07,20.31,6,6,0,0,0,4.84-.45l30.61-17.08h1l30.56,17.1A6.09,6.09,0,0,0,162,230a5.83,5.83,0,0,0,1.93-.32,109.92,109.92,0,0,0,36-20.36,6,6,0,0,0,2.12-4.55l.16-34.34c.14-.23.28-.47.41-.71l30.42-17.29a6,6,0,0,0,2.92-4.05A104.81,104.81,0,0,0,236,107.6Zm-11.25,35.79L195.32,160.1a6.07,6.07,0,0,0-2.28,2.3c-.59,1-1.21,2.11-1.86,3.14a6,6,0,0,0-.91,3.16l-.16,33.21a98.15,98.15,0,0,1-27.52,15.53L133,200.88a6,6,0,0,0-2.93-.77h-.14c-1.24,0-2.5,0-3.74,0a6,6,0,0,0-3.07.76L93.45,217.43a98,98,0,0,1-27.56-15.49l-.12-33.17a6,6,0,0,0-.91-3.16c-.64-1-1.27-2.08-1.86-3.14a6,6,0,0,0-2.27-2.3L31.3,143.4a93,93,0,0,1,0-30.79L60.68,95.9A6.07,6.07,0,0,0,63,93.6c.59-1,1.21-2.11,1.86-3.14a6,6,0,0,0,.91-3.16l.16-33.21A98.15,98.15,0,0,1,93.41,38.56L123,55.12a5.81,5.81,0,0,0,3.07.76c1.24,0,2.5,0,3.74,0a6,6,0,0,0,3.07-.76l29.65-16.56a98,98,0,0,1,27.56,15.49l.12,33.17a6,6,0,0,0,.91,3.16c.64,1,1.27,2.08,1.86,3.14a6,6,0,0,0,2.27,2.3L224.7,112.6A93,93,0,0,1,224.73,143.39Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm109.94-52.79a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A112.1,112.1,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.62a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21Zm-15,34.91-28.57,16.25a8,8,0,0,0-3,3c-.58,1-1.19,2.06-1.81,3.06a7.94,7.94,0,0,0-1.22,4.21l-.15,32.25a95.89,95.89,0,0,1-25.37,14.3L134,199.13a8,8,0,0,0-3.91-1h-.19c-1.21,0-2.43,0-3.64,0a8.08,8.08,0,0,0-4.1,1l-28.84,16.1A96,96,0,0,1,67.88,201l-.11-32.2a8,8,0,0,0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09,8.09,0,0,0-3-3.06l-28.6-16.29a90.49,90.49,0,0,1,0-28.26L61.67,97.63a8,8,0,0,0,3-3c.58-1,1.19-2.06,1.81-3.06a7.94,7.94,0,0,0,1.22-4.21l.15-32.25a95.89,95.89,0,0,1,25.37-14.3L122,56.87a8,8,0,0,0,4.1,1c1.21,0,2.43,0,3.64,0a8.08,8.08,0,0,0,4.1-1l28.84-16.1A96,96,0,0,1,188.12,55l.11,32.2a8,8,0,0,0,1.22,4.22c.62,1,1.23,2,1.8,3.06a8.09,8.09,0,0,0,3,3.06l28.6,16.29A90.49,90.49,0,0,1,222.9,142.12Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Zm106-56a4,4,0,0,0-2-2.7l-30.89-17.6q-.47-.82-1-1.62L200.1,51.2a3.94,3.94,0,0,0-1.42-3,107.8,107.8,0,0,0-35.41-19.94,4,4,0,0,0-3.23.29L129,45.87h-2l-31-17.36a4,4,0,0,0-3.23-.3,108.05,108.05,0,0,0-35.39,20,4,4,0,0,0-1.41,3l-.16,34.9-1,1.62L23.9,105.3A4,4,0,0,0,22,108a102.76,102.76,0,0,0,0,40,4,4,0,0,0,1.95,2.7l30.89,17.6q.47.83,1,1.62l.12,34.87a3.94,3.94,0,0,0,1.42,3,107.8,107.8,0,0,0,35.41,19.94,4,4,0,0,0,3.23-.29L127,210.13h2l31,17.36a4,4,0,0,0,3.23.3,108.05,108.05,0,0,0,35.39-20,4,4,0,0,0,1.41-3l.16-34.9,1-1.62L232.1,150.7a4,4,0,0,0,2-2.71A102.76,102.76,0,0,0,234,108Zm-7.48,36.67L196.3,161.84a4,4,0,0,0-1.51,1.53c-.61,1.09-1.25,2.17-1.91,3.24a3.92,3.92,0,0,0-.61,2.1l-.16,34.15a99.8,99.8,0,0,1-29.7,16.77l-30.4-17a4.06,4.06,0,0,0-2-.51H130c-1.28,0-2.57,0-3.84,0a4.1,4.1,0,0,0-2.05.51l-30.45,17A100.23,100.23,0,0,1,63.89,202.9l-.12-34.12a3.93,3.93,0,0,0-.61-2.11c-.66-1-1.3-2.14-1.91-3.23a4,4,0,0,0-1.51-1.53L29.49,144.68a94.78,94.78,0,0,1,0-33.34L59.7,94.16a4,4,0,0,0,1.51-1.53c.61-1.09,1.25-2.17,1.91-3.23a4,4,0,0,0,.61-2.11l.16-34.15a99.8,99.8,0,0,1,29.7-16.77l30.4,17a4.1,4.1,0,0,0,2.05.51c1.28,0,2.57,0,3.84,0a4,4,0,0,0,2.05-.51l30.45-17A100.23,100.23,0,0,1,192.11,53.1l.12,34.12a3.93,3.93,0,0,0,.61,2.11c.66,1,1.3,2.14,1.91,3.23a4,4,0,0,0,1.51,1.53l30.25,17.23A94.78,94.78,0,0,1,226.54,144.66Z"}))]]),n=t.forwardRef((e,n)=>t.createElement(o.default,{ref:n,...e,weights:a}));n.displayName="GearSixIcon",e.s(["GearSixIcon",0,n],900374)},210200,e=>{"use strict";var t=e.i(191788),o=e.i(171481);let a=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,20A108,108,0,0,0,31.85,177.23L21,209.66A20,20,0,0,0,46.34,235l32.43-10.81A108,108,0,1,0,128,20Zm0,192a84,84,0,0,1-42.06-11.27,12,12,0,0,0-6-1.62,12.1,12.1,0,0,0-3.8.62l-29.79,9.93,9.93-29.79a12,12,0,0,0-1-9.81A84,84,0,1,1,128,212Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128A96,96,0,0,1,79.93,211.11h0L42.54,223.58a8,8,0,0,1-10.12-10.12l12.47-37.39h0A96,96,0,1,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M232,128A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,26A102,102,0,0,0,38.35,176.69L26.73,211.56a14,14,0,0,0,17.71,17.71l34.87-11.62A102,102,0,1,0,128,26Zm0,192a90,90,0,0,1-45.06-12.08,6.09,6.09,0,0,0-3-.81,6.2,6.2,0,0,0-1.9.31L40.65,217.88a2,2,0,0,1-2.53-2.53L50.58,178a6,6,0,0,0-.5-4.91A90,90,0,1,1,128,218Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,28A100,100,0,0,0,40.53,176.5l-11.9,35.69a12,12,0,0,0,15.18,15.18l35.69-11.9A100,100,0,1,0,128,28Zm0,192a92,92,0,0,1-46.07-12.35,4.05,4.05,0,0,0-2-.54,3.93,3.93,0,0,0-1.27.21L41.28,219.78a4,4,0,0,1-5.06-5.06l12.46-37.38a4,4,0,0,0-.33-3.27A92,92,0,1,1,128,220Z"}))]]),n=t.forwardRef((e,n)=>t.createElement(o.default,{ref:n,...e,weights:a}));n.displayName="ChatCircleIcon",e.s(["ChatCircleIcon",0,n],210200)},878166,e=>{"use strict";var t=e.i(494834),o=e.i(205693),a=e.i(422696),n=e.i(541772);e.s(["useDatesInput",0,function({type:e,value:r,defaultValue:i,onChange:l,locale:s,format:c,closeOnChange:d,sortDates:m,labelSeparator:u,valueFormatter:p}){let h=(0,o.useDatesContext)(),[f,g]=(0,n.useDisclosure)(!1),[x,b]=(0,a.useUncontrolledDates)({type:e,value:r,defaultValue:i,onChange:l}),v=function({formatter:e,...o}){return(e||function({type:e,date:o,locale:a,format:n,labelSeparator:r}){let i=e=>(0,t.default)(e).locale(a).format(n);if("default"===e)return null===o?"":i(o);if("multiple"===e)return o.map(i).join(", ");if("range"===e&&Array.isArray(o)){if(o[0]&&o[1])return`${i(o[0])} ${r} ${i(o[1])}`;if(o[0])return`${i(o[0])} ${r} `}return""})(o)}({type:e,date:x,locale:h.getLocale(s),format:c,labelSeparator:h.getLabelSeparator(u),formatter:p}),w=o=>{d&&("default"===e&&g.close(),"range"===e&&o[0]&&o[1]&&g.close()),m&&"multiple"===e?b([...o].sort((e,o)=>(0,t.default)(e).isAfter((0,t.default)(o))?1:-1)):b(o)};return{_value:x,setValue:w,onClear:()=>w("range"===e?[null,null]:"multiple"===e?[]:null),shouldClear:"range"===e?!!x[0]:"multiple"===e?x.length>0:null!==x,formattedValue:v,dropdownOpened:f,dropdownHandlers:g}}],878166)},267073,e=>{"use strict";var t=e.i(568827),o=e.i(782681),a=e.i(878166),n=e.i(831474),r=e.i(777141),i=e.i(391398),l=e.i(275519),s=e.i(44091),c=e.i(62904);let d={type:"default",size:"sm",valueFormat:"MMMM D, YYYY",closeOnChange:!0,sortDates:!0,dropdownType:"popover"},m=(0,l.factory)(e=>{let l=(0,s.useProps)(["Input","InputWrapper","DatePickerInput"],d,e),{type:m,value:u,defaultValue:p,onChange:h,valueFormat:f,labelSeparator:g,locale:x,classNames:b,styles:v,unstyled:w,closeOnChange:y,size:D,variant:j,dropdownType:P,sortDates:T,minDate:k,maxDate:M,vars:C,defaultDate:S,valueFormatter:A,presets:V,attributes:L,...Y}=l,{resolvedClassNames:E,resolvedStyles:H}=(0,c.useResolvedStylesApi)({classNames:b,styles:v,props:l}),{calendarProps:Z,others:I}=(0,n.pickCalendarProps)(Y),{_value:N,setValue:_,formattedValue:z,dropdownHandlers:F,dropdownOpened:O,onClear:B,shouldClear:R}=(0,a.useDatesInput)({type:m,value:u,defaultValue:p,onChange:h,locale:x,format:f,labelSeparator:g,closeOnChange:y,sortDates:T,valueFormatter:A}),G=Array.isArray(N)?N[0]||S:N||S;return(0,i.jsx)(o.PickerInputBase,{formattedValue:z,dropdownOpened:O,dropdownHandlers:F,classNames:E,styles:H,unstyled:w,onClear:B,shouldClear:R,value:N,size:D,variant:j,dropdownType:P,...I,type:m,__staticSelector:"DatePickerInput",attributes:L,children:(0,i.jsx)(r.DatePicker,{...Z,size:D,variant:j,type:m,value:N,defaultDate:G||(0,t.getDefaultClampedDate)({maxDate:M,minDate:k}),onChange:_,locale:x,classNames:E,styles:H,unstyled:w,__staticSelector:"DatePickerInput",__stopPropagation:"popover"===P,minDate:k,maxDate:M,presets:V,attributes:L})})});m.classes={...o.PickerInputBase.classes,...r.DatePicker.classes},m.displayName="@mantine/dates/DatePickerInput",e.s(["DatePickerInput",0,m])},7883,e=>{"use strict";e.s(["FLOATING_ARROW_POSITION_DATA",0,[{label:"side",value:"side"},{label:"center",value:"center"}],"FLOATING_POSITION_DATA",0,[{label:"top",value:"top"},{label:"top-start",value:"top-start"},{label:"top-end",value:"top-end"},{label:"left",value:"left"},{label:"left-start",value:"left-start"},{label:"left-end",value:"left-end"},{label:"right",value:"right"},{label:"right-start",value:"right-start"},{label:"right-end",value:"right-end"},{label:"bottom",value:"bottom"},{label:"bottom-start",value:"bottom-start"},{label:"bottom-end",value:"bottom-end"}]])},224331,e=>{"use strict";var t=e.i(648863),o=e.i(485108),a=e.i(392862),n=e.i(883364),r=e.i(391398);let i={type:"code",code:`
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  return (
    <Popover width={200} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">This is uncontrolled popover, it is opened when button is clicked</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0,component:function(){return(0,r.jsxs)(a.Popover,{width:200,position:"bottom",withArrow:!0,shadow:"md",children:[(0,r.jsx)(a.Popover.Target,{children:(0,r.jsx)(o.Button,{children:"Toggle popover"})}),(0,r.jsx)(a.Popover.Dropdown,{children:(0,r.jsx)(n.Text,{size:"xs",children:"This is uncontrolled popover, it is opened when button is clicked"})})]})}};var l=e.i(841209);let s={type:"code",code:`
import { Popover, Button, TextInput } from '@mantine/core';

function Demo() {
  return (
    <Popover width={300} trapFocus position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <TextInput label="Name" placeholder="Name" size="xs" />
        <TextInput label="Email" placeholder="john@doe.com" size="xs" mt="xs" />
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0,component:function(){return(0,r.jsxs)(a.Popover,{width:300,trapFocus:!0,position:"bottom",withArrow:!0,shadow:"md",children:[(0,r.jsx)(a.Popover.Target,{children:(0,r.jsx)(o.Button,{children:"Toggle popover"})}),(0,r.jsxs)(a.Popover.Dropdown,{children:[(0,r.jsx)(l.TextInput,{label:"Name",placeholder:"Name",size:"xs"}),(0,r.jsx)(l.TextInput,{label:"Email",placeholder:"john@doe.com",size:"xs",mt:"xs"})]})]})}};var c=e.i(541772);let d={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <Popover width={200} position="bottom" withArrow shadow="md" opened={opened}>
      <Popover.Target>
        <Button onMouseEnter={open} onMouseLeave={close}>
          Hover to see popover
        </Button>
      </Popover.Target>
      <Popover.Dropdown style={{ pointerEvents: 'none' }}>
        <Text size="sm">This popover is shown when user hovers the target element</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0,component:function(){let[e,{close:t,open:i}]=(0,c.useDisclosure)(!1);return(0,r.jsxs)(a.Popover,{width:200,position:"bottom",withArrow:!0,shadow:"md",opened:e,children:[(0,r.jsx)(a.Popover.Target,{children:(0,r.jsx)(o.Button,{onMouseEnter:i,onMouseLeave:t,children:"Hover to see popover"})}),(0,r.jsx)(a.Popover.Dropdown,{style:{pointerEvents:"none"},children:(0,r.jsx)(n.Text,{size:"sm",children:"This popover is shown when user hovers the target element"})})]})}},m={type:"code",code:`
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  return (
    <Popover width="target" position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button w={280}>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="sm">
          This popover has same width as target, it is useful when you are building input dropdowns
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}

`,centered:!0,component:function(){return(0,r.jsxs)(a.Popover,{width:"target",position:"bottom",withArrow:!0,shadow:"md",children:[(0,r.jsx)(a.Popover.Target,{children:(0,r.jsx)(o.Button,{w:280,children:"Toggle popover"})}),(0,r.jsx)(a.Popover.Dropdown,{children:(0,r.jsx)(n.Text,{size:"sm",children:"This popover has same width as target, it is useful when you are building input dropdowns"})})]})}};var u=e.i(218262);let p={type:"code",component:function(){return(0,r.jsxs)(n.Text,{children:["Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this Pokémon was hunted close to extinction by those who were after the priceless antlers."," ",(0,r.jsxs)(a.Popover,{middlewares:{flip:!0,shift:!0,inline:!0},position:"top",children:[(0,r.jsx)(a.Popover.Target,{children:(0,r.jsx)(u.Mark,{children:"When visiting a junkyard"})}),(0,r.jsx)(a.Popover.Dropdown,{children:"Inline dropdown"})]}),", you may catch sight of it having an intense fight with Murkrow over shiny objects.Ho-Oh’s feathers glow in seven colors depending on the angle at which they are struck by light. These feathers are said to bring happiness to the bearers. This Pokémon is said to live at the foot of a rainbow."]})},code:`
import { Popover, Mark, Text } from '@mantine/core';

function Demo() {
  return (
    <Text>
      Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this
      Pok\xe9mon was hunted close to extinction by those who were after the priceless antlers.{' '}
      <Popover middlewares={{ flip: true, shift: true, inline: true }} position="top">
        <Popover.Target>
          <Mark>When visiting a junkyard</Mark>
        </Popover.Target>
        <Popover.Dropdown>Inline dropdown</Popover.Dropdown>
      </Popover>
      , you may catch sight of it having an intense fight with Murkrow over shiny objects.Ho-Oh’s
      feathers glow in seven colors depending on the angle at which they are struck by light. These
      feathers are said to bring happiness to the bearers. This Pok\xe9mon is said to live at the foot
      of a rainbow.
    </Text>
  );
}
`};var h=e.i(7883);let f={type:"configurator",component:function(e){return(0,r.jsxs)(a.Popover,{width:200,position:e.position,opened:!0,offset:{mainAxis:e.mainAxis,crossAxis:e.crossAxis},children:[(0,r.jsx)(a.Popover.Target,{children:(0,r.jsx)(o.Button,{children:"Popover target"})}),(0,r.jsx)(a.Popover.Dropdown,{children:(0,r.jsx)(n.Text,{size:"xs",children:"Change position and offset to configure dropdown offset relative to target"})})]})},code:e=>`
import { Popover, Button, Text } from '@mantine/core';

function Demo() {
  return (
    <Popover
      width={200}
      position="${e.position}"
      opened
      offset={{ mainAxis: ${e.mainAxis}, crossAxis: ${e.crossAxis} }}
    >
      <Popover.Target>
        <Button>Popover target</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">
          Change position and offset to configure dropdown offset relative to target
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0,controls:[{type:"select",prop:"position",initialValue:"bottom",data:h.FLOATING_POSITION_DATA,libraryValue:null},{type:"number",prop:"mainAxis",initialValue:0,libraryValue:null,min:-50,max:50},{type:"number",prop:"crossAxis",initialValue:0,libraryValue:null,min:-50,max:50}]},g={type:"configurator",component:function(e){return(0,r.jsxs)(a.Popover,{width:200,opened:!0,...e,children:[(0,r.jsx)(a.Popover.Target,{children:(0,r.jsx)(o.Button,{children:"Popover target"})}),(0,r.jsx)(a.Popover.Dropdown,{children:(0,r.jsx)(n.Text,{size:"xs",children:"Change position and offset to configure dropdown offset relative to target"})})]})},code:`
import { Popover, Button, Text } from '@mantine/core';


function Demo() {
  return (
    <Popover
      width={200}
      opened
      {{props}}
    >
      <Popover.Target>
        <Button>Popover target</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">
          Change position and offset to configure dropdown offset relative to target
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0,controls:[{type:"select",prop:"position",initialValue:"bottom",data:h.FLOATING_POSITION_DATA,libraryValue:null},{type:"number",prop:"offset",initialValue:0,libraryValue:null,min:-50,max:50}]},x={type:"configurator",component:function(e){return(0,r.jsxs)(a.Popover,{width:200,opened:!0,position:"bottom-start",withArrow:!0,...e,children:[(0,r.jsx)(a.Popover.Target,{children:(0,r.jsx)(o.Button,{children:"Target element"})}),(0,r.jsx)(a.Popover.Dropdown,{children:(0,r.jsx)(n.Text,{size:"xs",children:"Arrow position can be changed for *-start and *-end positions"})})]})},code:`
import { Popover, Button, Text } from '@mantine/core';

function Demo() {
  return (
    <Popover width={200} opened position="bottom-start" withArrow{{props}}>
      <Popover.Target>
        <Button>Target element</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">Arrow position can be changed for *-start and *-end positions</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0,controls:[{type:"segmented",prop:"arrowPosition",initialValue:"center",libraryValue:"center",data:["center","side"]},{type:"number",prop:"arrowOffset",initialValue:10,libraryValue:10,min:5,max:50},{type:"number",prop:"arrowSize",initialValue:7,libraryValue:7,min:5,max:12},{type:"number",prop:"arrowRadius",initialValue:0,libraryValue:0,min:0,max:10}]},b={type:"code",component:function(){return(0,r.jsxs)(a.Popover,{width:200,position:"bottom",clickOutsideEvents:["mouseup","touchend"],children:[(0,r.jsx)(a.Popover.Target,{children:(0,r.jsx)(o.Button,{children:"Toggle popover"})}),(0,r.jsx)(a.Popover.Dropdown,{children:(0,r.jsx)(n.Text,{size:"xs",children:"Popover will be closed with mouseup and touchend events"})})]})},code:`
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  return (
    <Popover width={200} position="bottom" clickOutsideEvents={['mouseup', 'touchend']}>
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">Popover will be closed with mouseup and touchend events</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0},v={type:"configurator",component:function(e){return(0,r.jsxs)(a.Popover,{width:200,...e,children:[(0,r.jsx)(a.Popover.Target,{children:(0,r.jsx)(o.Button,{children:"Toggle popover"})}),(0,r.jsx)(a.Popover.Dropdown,{children:(0,r.jsx)(n.Text,{size:"xs",children:"Disabled popover dropdown is always hidden"})})]})},code:`
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  return (
    <Popover width={200}{{props}}>
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">Disabled popover dropdown is always hidden</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0,controls:[{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1}]};var w=e.i(988798),y=e.i(267073);let D={type:"code",component:function(){return(0,r.jsxs)(a.Popover,{width:300,position:"bottom",withArrow:!0,shadow:"md",children:[(0,r.jsx)(a.Popover.Target,{children:(0,r.jsx)(o.Button,{children:"Toggle popover"})}),(0,r.jsxs)(a.Popover.Dropdown,{bg:"var(--mantine-color-body)",children:[(0,r.jsx)(w.Select,{label:"Select within Popover",placeholder:"Select within Popover",comboboxProps:{withinPortal:!1},data:["React","Angular","Svelte","Vue"]}),(0,r.jsx)(y.DatePickerInput,{label:"DatePickerInput within Popover",placeholder:"DatePickerInput within Popover",popoverProps:{withinPortal:!1},mt:"md"})]})]})},code:`
import { Button, Popover, Select } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <Popover width={300} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown bg="var(--mantine-color-body)">
        <Select
          label="Select within Popover"
          placeholder="Select within Popover"
          comboboxProps={{ withinPortal: false }}
          data={['React', 'Angular', 'Svelte', 'Vue']}
        />
        <DatePickerInput
          label="DatePickerInput within Popover"
          placeholder="DatePickerInput within Popover"
          popoverProps={{ withinPortal: false }}
          mt="md"
        />
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0};var j=e.i(79897),P=e.i(141806),T=e.i(725695),k=e.i(671640),M=e.i(284629);let C={type:"code",component:function(){return(0,r.jsxs)(a.Popover,{width:320,shadow:"md",withArrow:!0,withOverlay:!0,overlayProps:{zIndex:1e4,blur:"8px"},zIndex:10001,children:[(0,r.jsx)(a.Popover.Target,{children:(0,r.jsx)(M.UnstyledButton,{style:{zIndex:10001,position:"relative"},children:(0,r.jsx)(P.Avatar,{src:"https://avatars.githubusercontent.com/u/79146003?s=200&v=4",radius:"xl"})})}),(0,r.jsxs)(a.Popover.Dropdown,{children:[(0,r.jsxs)(T.Group,{children:[(0,r.jsx)(P.Avatar,{src:"https://avatars.githubusercontent.com/u/79146003?s=200&v=4",radius:"xl"}),(0,r.jsxs)(k.Stack,{gap:5,children:[(0,r.jsx)(n.Text,{size:"sm",fw:700,style:{lineHeight:1},children:"Mantine"}),(0,r.jsx)(j.Anchor,{href:"https://x.com/mantinedev",c:"dimmed",size:"xs",style:{lineHeight:1},children:"@mantinedev"})]})]}),(0,r.jsx)(n.Text,{size:"sm",mt:"md",children:"Customizable React components and hooks library with focus on usability, accessibility and developer experience"}),(0,r.jsxs)(T.Group,{mt:"md",gap:"xl",children:[(0,r.jsxs)(n.Text,{size:"sm",children:[(0,r.jsx)("b",{children:"0"})," Following"]}),(0,r.jsxs)(n.Text,{size:"sm",children:[(0,r.jsx)("b",{children:"1,174"})," Followers"]})]})]})]})},code:`
import { Popover, Avatar, Text, Group, Anchor, Stack } from '@mantine/core';

function Demo() {
  return (
    <Popover
      width={320}
      shadow="md"
      withArrow
      withOverlay
      overlayProps={{ zIndex: 10000, blur: '8px' }}
      zIndex={10001}
    >
      <Popover.Target>
        <UnstyledButton style={{ zIndex: 10001, position: 'relative' }}>
          <Avatar src="https://avatars.githubusercontent.com/u/79146003?s=200&v=4" radius="xl" />
        </UnstyledButton>
      </Popover.Target>
      <Popover.Dropdown>
        <Group>
          <Avatar src="https://avatars.githubusercontent.com/u/79146003?s=200&v=4" radius="xl" />
          <Stack gap={5}>
            <Text size="sm" fw={700} style={{ lineHeight: 1 }}>
              Mantine
            </Text>
            <Anchor href="https://x.com/mantinedev" c="dimmed" size="xs" style={{ lineHeight: 1 }}>
              @mantinedev
            </Anchor>
          </Stack>
        </Group>

        <Text size="sm" mt="md">
          Customizable React components and hooks library with focus on usability, accessibility and
          developer experience
        </Text>

        <Group mt="md" gap="xl">
          <Text size="sm">
            <b>0</b> Following
          </Text>
          <Text size="sm">
            <b>1,174</b> Followers
          </Text>
        </Group>
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0};var S=e.i(232471),A=e.i(580312);let V={type:"code",code:`
import { Box, Button, Group, Popover } from '@mantine/core';

function Demo() {
  return (
    <Box
      bd="1px solid var(--mantine-color-dimmed)"
      p="xl"
      w={{ base: 340, sm: 400 }}
      h={200}
      style={{ overflow: 'auto' }}
    >
      <Box w={1000} h={400}>
        <Group>
          <Popover width="target" position="bottom" opened>
            <Popover.Target>
              <Button>Toggle popover</Button>
            </Popover.Target>
            <Popover.Dropdown>This popover dropdown is hidden when detached</Popover.Dropdown>
          </Popover>

          <Popover width="target" position="bottom" opened hideDetached={false}>
            <Popover.Target>
              <Button>Toggle popover</Button>
            </Popover.Target>
            <Popover.Dropdown>This popover dropdown is visible when detached</Popover.Dropdown>
          </Popover>
        </Group>
      </Box>
    </Box>
  );
}
`,centered:!0,component:function(){return(0,r.jsx)(S.Box,{bd:"1px solid var(--mantine-color-dimmed)",p:"xl",w:{base:340,sm:400},h:200,style:{overflow:"auto",colorScheme:(0,A.useComputedColorScheme)()},children:(0,r.jsx)(S.Box,{w:1e3,h:400,children:(0,r.jsxs)(T.Group,{children:[(0,r.jsxs)(a.Popover,{width:"target",position:"bottom",opened:!0,children:[(0,r.jsx)(a.Popover.Target,{children:(0,r.jsx)(o.Button,{children:"Toggle popover"})}),(0,r.jsx)(a.Popover.Dropdown,{children:"This popover dropdown is hidden when detached"})]}),(0,r.jsxs)(a.Popover,{width:"target",position:"bottom",opened:!0,hideDetached:!1,children:[(0,r.jsx)(a.Popover.Target,{children:(0,r.jsx)(o.Button,{children:"Toggle popover"})}),(0,r.jsx)(a.Popover.Dropdown,{children:"This popover dropdown is visible when detached"})]})]})})})}};var L=e.i(470743);let Y={type:"code",code:`
import { Avatar, Button, Group, Paper, Popover, Stack, Text } from '@mantine/core';

function Demo() {
  return (
    <Popover width={260} shadow="md" position="bottom-start" offset={0}>
      <Popover.ContextMenu>
        <Paper withBorder p="xl" radius="md" style={{ userSelect: 'none', textAlign: 'center' }}>
          <Text fw={500}>Right-click anywhere inside this area</Text>
          <Text c="dimmed" size="sm" mt={4}>
            A popover will open at the cursor position
          </Text>
        </Paper>
      </Popover.ContextMenu>

      <Popover.Dropdown>
        <Stack gap="xs">
          <Group gap="sm" wrap="nowrap">
            <Avatar radius="xl" color="blue">JD</Avatar>
            <div>
              <Text size="sm" fw={500}>Jane Doe</Text>
              <Text size="xs" c="dimmed">jane@example.com</Text>
            </div>
          </Group>
          <Group grow gap="xs">
            <Button size="xs" variant="default">Message</Button>
            <Button size="xs">Follow</Button>
          </Group>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0,component:function(){return(0,r.jsxs)(a.Popover,{width:260,shadow:"md",position:"bottom-start",offset:0,children:[(0,r.jsx)(a.Popover.ContextMenu,{children:(0,r.jsxs)(L.Paper,{withBorder:!0,p:"xl",radius:"md",style:{userSelect:"none",textAlign:"center"},children:[(0,r.jsx)(n.Text,{fw:500,children:"Right-click anywhere inside this area"}),(0,r.jsx)(n.Text,{c:"dimmed",size:"sm",mt:4,children:"A popover will open at the cursor position"})]})}),(0,r.jsx)(a.Popover.Dropdown,{children:(0,r.jsxs)(k.Stack,{gap:"xs",children:[(0,r.jsxs)(T.Group,{gap:"sm",wrap:"nowrap",children:[(0,r.jsx)(P.Avatar,{radius:"xl",color:"blue",children:"JD"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(n.Text,{size:"sm",fw:500,children:"Jane Doe"}),(0,r.jsx)(n.Text,{size:"xs",c:"dimmed",children:"jane@example.com"})]})]}),(0,r.jsxs)(T.Group,{grow:!0,gap:"xs",children:[(0,r.jsx)(o.Button,{size:"xs",variant:"default",children:"Message"}),(0,r.jsx)(o.Button,{size:"xs",children:"Follow"})]})]})})]})}};var E=(0,t.__exportAll)({arrow:()=>x,clickOutsideEvents:()=>b,contextMenu:()=>Y,disabled:()=>v,form:()=>s,hideDetached:()=>V,hover:()=>d,inline:()=>p,offset:()=>g,offsetAxis:()=>f,overlay:()=>C,portalChildren:()=>D,sameWidth:()=>m,usage:()=>i});e.s(["PopoverDemos",0,E],224331)},508780,e=>{"use strict";var t=e.i(648863),o=e.i(391398),a=e.i(577824);let n=`
type FilterPropsRes<T extends Record<string, any>> = {
  [Key in keyof T]-?: T[Key] extends undefined ? never : T[Key];
};

export function filterProps<T extends Record<string, any>>(props: T) {
  return Object.keys(props).reduce<FilterPropsRes<T>>((acc, key: keyof T) => {
    if (props[key] !== undefined) {
      acc[key] = props[key];
    }
    return acc;
  }, {} as FilterPropsRes<T>);
}
`,r={type:"code",component:function(){return(0,o.jsx)(a.CodeHighlight,{code:n,language:"tsx",radius:"md"})},code:`
import { CodeHighlight } from '@mantine/code-highlight';

const exampleCode = \`${n}\`;

function Demo() {
  return <CodeHighlight code={exampleCode} language="tsx" radius="md" />;
}
`};var i=e.i(137218);let l=`
import { Group, Button, MantineProvider, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Button: Button.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button variant="danger">Danger variant</Button>
        <Button variant="primary">Primary variant</Button>
      </Group>
    </MantineProvider>
  );
}
`,s=`
.root {
  &[data-variant='danger'] {
    background-color: var(--mantine-color-red-9);
    color: var(--mantine-color-red-0);
  }

  &[data-variant='primary'] {
    background: linear-gradient(45deg, #4b6cb7 10%, #253b67 90%);
    color: var(--mantine-color-white);
  }
}
`,c={type:"code",component:function(){return(0,o.jsx)(i.CodeHighlightTabs,{radius:"md",code:[{fileName:"Demo.tsx",code:l,language:"tsx"},{fileName:"Demo.module.css",code:s,language:"scss"}]})},code:[{fileName:"Demo.tsx",code:`
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { tsxCode, cssCode } from './code';

function Demo() {
  return (
    <CodeHighlightTabs
      radius="md"
      code={[
        { fileName: 'Demo.tsx', code: tsxCode, language: 'tsx' },
        { fileName: 'Demo.module.css', code: cssCode, language: 'scss' },
      ]}
    />
  );
}
`,language:"tsx"},{fileName:"code.ts",code:`
export const tsxCode = \`${l}\`;

export const cssCode = \`${s}\`;
`,language:"tsx"}]};var d=e.i(271270),m=e.i(999479);let u=`
function Button() {
  return <button>Click me</button>;
}
`,p=`
.button {
  background-color: transparent;
  color: var(--mantine-color-blue-9);
}
`,h={type:"code",component:function(){return(0,o.jsx)(i.CodeHighlightTabs,{radius:"md",code:[{fileName:"Button.tsx",code:u,language:"tsx",icon:(0,o.jsx)(m.TypeScriptIcon,{size:14})},{fileName:"Button.module.css",code:p,language:"scss",icon:(0,o.jsx)(d.CssIcon,{size:14})}]})},code:`
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { TypeScriptIcon, CssIcon } from '@mantinex/dev-icons';

const tsxCode = \`${u}\`;

const cssCode = \`${p}\`;

function Demo() {
  const tsIcon = <TypeScriptIcon size={14} />;
  const cssIcon = <CssIcon size={14} />;

  return (
    <CodeHighlightTabs
      radius="md"
      code={[
        {
          fileName: 'Button.tsx',
          code: tsxCode,
          language: 'tsx',
          icon: tsIcon,
        },
        {
          fileName: 'Button.module.css',
          code: cssCode,
          language: 'scss',
          icon: cssIcon,
        },
      ]}
    />
  );
}
`},f=`
function Button() {
  return <button>Click me</button>;
}
`,g=`
.button {
  background-color: transparent;
  color: var(--mantine-color-blue-9);
}
`;function x(e){return e.endsWith(".ts")||e.endsWith(".tsx")?(0,o.jsx)(m.TypeScriptIcon,{size:14}):e.endsWith(".css")?(0,o.jsx)(d.CssIcon,{size:14}):null}let b={type:"code",component:function(){return(0,o.jsx)(i.CodeHighlightTabs,{getFileIcon:x,radius:"md",code:[{fileName:"Button.tsx",code:f,language:"tsx"},{fileName:"Button.module.css",code:g,language:"scss"}]})},code:`
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { TypeScriptIcon, CssIcon } from '@mantinex/dev-icons';

const tsxCode = \`${f}\`;

const cssCode = \`${g}\`;

function getFileIcon(fileName: string) {
  if (fileName.endsWith('.ts') || fileName.endsWith('.tsx')) {
    return <TypeScriptIcon size={14} />;
  }

  if (fileName.endsWith('.css')) {
    return <CssIcon size={14} />;
  }

  return null;
}

function Demo() {
  return (
    <CodeHighlightTabs
      getFileIcon={getFileIcon}
      radius="md"
      code={[
        {
          fileName: 'Button.tsx',
          code: tsxCode,
          language: 'tsx',
        },
        {
          fileName: 'Button.module.css',
          code: cssCode,
          language: 'scss',
        },
      ]}
    />
  );
}
`},v=`
import { Group, Button, MantineProvider, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Button: Button.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button variant="danger">Danger variant</Button>
        <Button variant="primary">Primary variant</Button>
      </Group>
    </MantineProvider>
  );
}
`,w=`
.root {
  &[data-variant='danger'] {
    background-color: var(--mantine-color-red-9);
    color: var(--mantine-color-red-0);
  }

  &[data-variant='primary'] {
    background: linear-gradient(45deg, #4b6cb7 10%, #253b67 90%);
    color: var(--mantine-color-white);
  }
}
`,y={type:"code",component:function(){return(0,o.jsx)(i.CodeHighlightTabs,{withExpandButton:!0,defaultExpanded:!1,expandCodeLabel:"Show full code",collapseCodeLabel:"Show less",code:[{fileName:"Demo.tsx",code:v,language:"tsx"},{fileName:"Demo.module.css",code:w,language:"scss"}]})},code:[{fileName:"Demo.tsx",code:`
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { tsxCode, cssCode } from './code';

function Demo() {
  return (
    <CodeHighlightTabs
      withExpandButton
      defaultExpanded={false}
      expandLabel="Show full code"
      collapseLabel="Show less"
      code={[
        { fileName: 'Demo.tsx', code: tsxCode, language: 'tsx' },
        { fileName: 'Demo.module.css', code: cssCode, language: 'scss' },
      ]}
    />
  );
}
`,language:"tsx"},{fileName:"code.ts",code:`
export const tsxCode = \`${v}\`;

export const cssCode = \`${w}\`;
`,language:"tsx"}]},D=`
function Button() {
  return <button>Click me</button>;
}
`,j={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.CodeHighlight,{code:`// Custom copy label${D}`,language:"tsx",copyLabel:"Copy button code",copiedLabel:"Copied!",radius:"md"}),(0,o.jsx)(a.CodeHighlight,{code:`// Without copy button${D}`,language:"tsx",withCopyButton:!1,mt:"md",radius:"md"})]})},code:`
import { CodeHighlight } from '@mantine/code-highlight';

const exampleCode = \`${D}\`;

function Demo() {
  return (
    <>
      <CodeHighlight
        code={\`// Custom copy label\${exampleCode}\`}
        language="tsx"
        copyLabel="Copy button code"
        copiedLabel="Copied!"
        radius="md"
      />
      <CodeHighlight
        code={\`// Without copy button\${exampleCode}\`}
        language="tsx"
        withCopyButton={false}
        mt="md"
        radius="md"
      />
    </>
  );
}
`};var P=e.i(883364),T=e.i(297800),k=e.i(481178),M=e.i(275519),C=e.i(433512),S=e.i(317477),A=e.i(44091),V=e.i(391466);let L=(0,k.createVarsResolver)((e,{background:t,radius:o})=>({inlineCodeHighlight:{"--ch-background":t?(0,S.getThemeColor)(t,e):void 0,"--ch-radius":void 0!==o?(0,C.getRadius)(o):void 0}})),Y=(0,M.factory)(e=>{let t=(0,A.useProps)("InlineCodeHighlight",null,e),{classNames:n,className:r,style:i,styles:l,unstyled:s,vars:c,attributes:d,ref:m,...u}=t,p=(0,V.useStyles)({name:"InlineCodeHighlight",classes:T.default,props:t,className:r,style:i,classNames:n,styles:l,unstyled:s,attributes:d,vars:c,varsResolver:L,rootSelector:"inlineCodeHighlight"});return(0,o.jsx)(a.CodeHighlight,{...u,ref:m,...p("inlineCodeHighlight"),__inline:!0})});Y.displayName="@mantine/code-highlight/InlineCodeHighlight",Y.classes=T.default,Y.varsResolver=L;let E={type:"code",component:function(){return(0,o.jsxs)(P.Text,{children:["You can highlight code inline:"," ",(0,o.jsx)(Y,{code:'<InlineCodeHighlight code="" language="tsx" />',language:"tsx",withBorder:!0}),". Is that not cool?"]})},code:`
import { Text } from '@mantine/core';
import { InlineCodeHighlight } from '@mantine/code-highlight';

function Demo() {
  return (
    <Text>
      You can highlight code inline:{' '}
      <InlineCodeHighlight
        code='<InlineCodeHighlight code="" language="tsx" />'
        language="tsx"
        withBorder
      />
      . Is that not cool?
    </Text>
  );
}
`};var H=e.i(210200),Z=e.i(191788),I=e.i(171481);let N=new Map([["bold",Z.createElement(Z.Fragment,null,Z.createElement("path",{d:"M225.6,62.65l-88-48.18a19.91,19.91,0,0,0-19.2,0l-88,48.17A20,20,0,0,0,20,80.19v95.62a20,20,0,0,0,10.4,17.55l88,48.17a19.89,19.89,0,0,0,19.2,0l88-48.18A20,20,0,0,0,236,175.81V80.19A20,20,0,0,0,225.6,62.65ZM164,152v47.72l-24,13.14V135.11l72-39.42v22.92l-41.76,22.86A12,12,0,0,0,164,152ZM85.76,141.47,44,118.61V95.69l72,39.42v77.75L92,199.72V152A12,12,0,0,0,85.76,141.47ZM83.14,61.13l39.1,21.4a11.95,11.95,0,0,0,11.52,0l39.1-21.4L199,75.45l-71,38.87L57,75.45ZM128,36.57l19.87,10.88L128,58.33,108.13,47.45ZM44,146l24,13.14v27.47L44,173.44Zm144,40.61V159.11L212,146v27.47Z"}))],["duotone",Z.createElement(Z.Fragment,null,Z.createElement("path",{d:"M32,125.73,80,152v54.84l-43.84-24a8,8,0,0,1-4.16-7ZM176,152v54.84l43.84-24a8,8,0,0,0,4.16-7v-50.1ZM124.16,25l-41,22.46h0L128,72l44.86-24.56L131.84,25A8,8,0,0,0,124.16,25Z",opacity:"0.2"}),Z.createElement("path",{d:"M223.68,66.15,135.68,18a15.94,15.94,0,0,0-15.36,0l-88,48.18a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM168,152v50.09l-32,17.52V132.74l80-43.8v32l-43.84,24A8,8,0,0,0,168,152Zm-84.16-7L40,121v-32l80,43.8v86.87L88,202.09V152A8,8,0,0,0,83.84,145Zm-.7-88.41,41,22.45a8,8,0,0,0,7.68,0l41-22.45,34.48,18.87L128,118.88,48.66,75.44ZM128,32h0l28.2,15.44L128,62.89,99.8,47.45ZM40,139.22l32,17.52v36.59L40,175.82Zm144,54.11V156.74l32-17.52v36.6Z"}))],["fill",Z.createElement(Z.Fragment,null,Z.createElement("path",{d:"M229.89,72.25v0l0,0a15.93,15.93,0,0,0-6.18-6.06L135.68,18a15.94,15.94,0,0,0-15.36,0l-88,48.18a15.93,15.93,0,0,0-6.18,6.06l0,0v0A16,16,0,0,0,24,80.18v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,229.89,72.25ZM120,219.61,88,202.09V152a8,8,0,0,0-4.16-7L40,121v-32l80,43.8Zm8-100.73L48.66,75.44,83.14,56.57l41,22.45a8,8,0,0,0,7.68,0l41-22.45,34.48,18.87Zm88,2.1-43.84,24a8,8,0,0,0-4.16,7v50.09l-32,17.52V132.74l80-43.8Z"}))],["light",Z.createElement(Z.Fragment,null,Z.createElement("path",{d:"M222.72,67.91l-88-48.18a13.9,13.9,0,0,0-13.44,0l-88,48.17A14,14,0,0,0,26,80.18v95.64a14,14,0,0,0,7.28,12.28l88,48.17a13.92,13.92,0,0,0,13.44,0l88-48.17A14,14,0,0,0,230,175.82V80.18A14,14,0,0,0,222.72,67.91ZM128,121.16,44.49,75.44,83.14,54.29l42,23a6,6,0,0,0,5.76,0l42-23,38.65,21.15Zm-1-90.91a2,2,0,0,1,1.92,0l31.4,17.2L128,65.16,95.63,47.45ZM38,175.82v-40l36,19.7v41.16L39,177.57A2,2,0,0,1,38,175.82Zm48,27.46V152a6,6,0,0,0-3.12-5.26L38,122.17V85.57l84,46V223ZM134,223V131.56l84-46v36.6l-44.88,24.57A6,6,0,0,0,170,152v51.28Zm83-45.42-35,19.14V155.55l36-19.7v40A2,2,0,0,1,217,177.57Z"}))],["regular",Z.createElement(Z.Fragment,null,Z.createElement("path",{d:"M223.68,66.15,135.68,18a15.94,15.94,0,0,0-15.36,0l-88,48.18a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM168,152v50.09l-32,17.52V132.74l80-43.8v32l-43.84,24A8,8,0,0,0,168,152Zm-84.16-7L40,121v-32l80,43.8v86.87L88,202.09V152A8,8,0,0,0,83.84,145Zm-.7-88.41,41,22.45a8,8,0,0,0,7.68,0l41-22.45,34.48,18.87L128,118.88,48.66,75.44ZM128,32h0l28.2,15.44L128,62.89,99.8,47.45ZM40,139.22l32,17.52v36.59L40,175.82Zm144,54.11V156.74l32-17.52v36.6Z"}))],["thin",Z.createElement(Z.Fragment,null,Z.createElement("path",{d:"M221.76,69.66l-88-48.18a12,12,0,0,0-11.52,0l-88,48.18A12,12,0,0,0,28,80.18v95.64a12,12,0,0,0,6.24,10.52l88,48.18a11.95,11.95,0,0,0,11.52,0l88-48.18A12,12,0,0,0,228,175.82V80.18A12,12,0,0,0,221.76,69.66ZM128,123.44l-87.67-48L83.14,52l42.94,23.5a4,4,0,0,0,3.84,0L172.86,52l42.81,23.43ZM126.08,28.5a3.94,3.94,0,0,1,3.84,0l34.61,19L128,67.44l-36.53-20ZM36,175.82V132.47l40,21.9v45.72L38.08,179.33A4,4,0,0,1,36,175.82Zm48,28.65V152a4,4,0,0,0-2.08-3.51L36,123.35V82.19l88,48.18v96Zm48,21.89v-96l88-48.18v41.16l-45.92,25.14A4,4,0,0,0,172,152v52.47Zm85.92-47L180,200.09V154.37l40-21.9v43.35A4,4,0,0,1,217.92,179.33Z"}))]]),_=Z.forwardRef((e,t)=>Z.createElement(I.default,{ref:t,...e,weights:N}));_.displayName="CodesandboxLogoIcon";var z=e.i(417063);let F=`
function greet() {
  return 'Hello, World!';
}
`,O={type:"code",component:function(){return(0,o.jsx)(a.CodeHighlight,{code:F,language:"tsx",radius:"md",controls:[(0,o.jsx)(z.CodeHighlightControl,{component:"a",href:"https://codesandbox.io",target:"_blank",tooltipLabel:"Open on codesandbox",children:(0,o.jsx)(_,{})},"sandbox"),(0,o.jsx)(z.CodeHighlightControl,{tooltipLabel:"Discuss with GPT",children:(0,o.jsx)(H.ChatCircleIcon,{})},"gpt")]})},code:`
import { CodesandboxLogoIcon, ChatCircleIcon } from '@phosphor-icons/react';
import { CodeHighlight, CodeHighlightControl } from '@mantine/code-highlight';

const exampleCode = \`${F}\`;

function Demo() {
  return (
    <CodeHighlight
      code={exampleCode}
      language="tsx"
      radius="md"
      controls={[
        <CodeHighlightControl
          component="a"
          href="https://codesandbox.io"
          target="_blank"
          tooltipLabel="Open on codesandbox"
          key="sandbox"
        >
          <CodesandboxLogoIcon />
        </CodeHighlightControl>,
        <CodeHighlightControl tooltipLabel="Discuss with GPT" key="gpt">
          <ChatCircleIcon />
        </CodeHighlightControl>,
      ]}
    />
  );
}
`},B=`
import { Group, Avatar, Text } from '@mantine/core';

interface ItemProps extends React.ComponentProps<'div'> {
  image: string;
  label: string;
  description: string;
}

const SelectItem = ({ image, label, description, ...others }: ItemProps) => (
  <div {...others}>
    <Group noWrap>
      <Avatar src={image} />
      <div>
        <Text size="sm">{label}</Text>
        <Text size="xs" opacity={0.65}>
          {description}
        </Text>
      </div>
    </Group>
  </div>
);
`,R={type:"code",component:function(){return(0,o.jsx)(a.CodeHighlight,{code:B,language:"tsx",withLineNumbers:!0})},code:`
import { CodeHighlight } from '@mantine/code-highlight';

const exampleCode = \`...\`;

function Demo() {
  return <CodeHighlight code={exampleCode} language="tsx" withLineNumbers />;
}
`};var G=(0,t.__exportAll)({copy:()=>j,customControl:()=>O,expand:()=>y,inline:()=>E,lineNumbers:()=>R,tabs:()=>c,tabsGetIcons:()=>b,tabsIcons:()=>h,usage:()=>r});e.s(["CodeHighlightDemos",0,G],508780)},3214,e=>{"use strict";var t=e.i(648863);let o={"2025-02-14":2,"2025-02-11":3,"2025-02-06":4,"2025-02-05":1,"2025-02-03":2,"2025-02-01":2,"2025-01-31":4,"2025-01-30":2,"2025-01-29":3,"2025-01-26":2,"2025-01-25":2,"2025-01-24":2,"2025-01-23":2,"2025-01-20":3,"2025-01-19":2,"2025-01-17":3,"2025-01-16":2,"2025-01-14":3,"2025-01-08":2,"2025-01-07":1,"2025-01-05":3,"2025-01-04":1,"2025-01-03":1,"2025-01-01":2,"2024-12-30":4,"2024-12-27":3,"2024-12-26":1,"2024-12-22":3,"2024-12-20":2,"2024-12-19":3,"2024-12-16":4,"2024-12-15":1,"2024-12-14":4,"2024-12-11":2,"2024-12-09":4,"2024-12-05":4,"2024-12-04":3,"2024-12-03":2,"2024-12-01":1,"2024-11-30":3,"2024-11-29":1,"2024-11-28":1,"2024-11-26":4,"2024-11-25":3,"2024-11-24":3,"2024-11-22":4,"2024-11-20":2,"2024-11-19":3,"2024-11-16":3,"2024-11-15":1,"2024-11-14":4,"2024-11-12":1,"2024-11-11":2,"2024-11-10":1,"2024-11-09":3,"2024-11-07":1,"2024-11-06":4,"2024-11-04":1,"2024-11-03":4,"2024-11-02":4,"2024-10-31":1,"2024-10-30":1,"2024-10-28":4,"2024-10-27":2,"2024-10-26":3,"2024-10-25":4,"2024-10-23":1,"2024-10-22":1,"2024-10-21":4,"2024-10-20":3,"2024-10-15":3,"2024-10-13":4,"2024-10-10":1,"2024-10-08":1,"2024-10-07":4,"2024-10-05":1,"2024-10-04":4,"2024-10-02":2,"2024-10-01":3,"2024-09-29":4,"2024-09-27":3,"2024-09-26":4,"2024-09-25":3,"2024-09-20":4,"2024-09-18":3,"2024-09-17":1,"2024-09-14":2,"2024-09-12":3,"2024-09-10":1,"2024-09-08":1,"2024-09-06":2,"2024-09-04":4,"2024-08-31":4,"2024-08-29":3,"2024-08-26":4,"2024-08-25":1,"2024-08-23":2,"2024-08-21":4,"2024-08-19":1,"2024-08-14":4,"2024-08-13":2,"2024-08-11":4,"2024-08-09":4,"2024-08-06":4,"2024-08-05":4,"2024-08-04":1,"2024-08-02":4,"2024-08-01":4,"2024-07-31":3,"2024-07-30":2,"2024-07-29":2,"2024-07-28":1,"2024-07-27":4,"2024-07-25":2,"2024-07-22":4,"2024-07-21":1,"2024-07-19":2,"2024-07-17":2,"2024-07-16":1,"2024-07-15":4,"2024-07-14":4,"2024-07-13":2,"2024-07-12":1,"2024-07-11":3,"2024-07-10":3,"2024-07-09":4,"2024-07-08":2,"2024-07-07":2,"2024-07-06":4,"2024-07-05":3,"2024-07-03":4,"2024-06-30":4,"2024-06-26":2,"2024-06-25":1,"2024-06-24":2,"2024-06-22":3,"2024-06-19":4,"2024-06-18":2,"2024-06-17":1,"2024-06-14":4,"2024-06-13":4,"2024-06-12":1,"2024-06-11":2,"2024-06-10":1,"2024-06-08":4,"2024-06-06":2,"2024-06-04":2,"2024-06-03":1,"2024-06-01":2,"2024-05-31":1,"2024-05-30":3,"2024-05-26":4,"2024-05-23":3,"2024-05-22":1,"2024-05-21":4,"2024-05-18":4,"2024-05-16":4,"2024-05-14":2,"2024-05-10":1,"2024-05-08":3,"2024-05-07":2,"2024-05-03":2,"2024-05-02":4,"2024-04-30":3,"2024-04-29":1,"2024-04-28":4,"2024-04-26":1,"2024-04-22":1,"2024-04-21":4,"2024-04-20":2,"2024-04-19":2,"2024-04-17":1,"2024-04-16":3,"2024-04-15":4,"2024-04-14":3,"2024-04-13":4,"2024-04-12":3,"2024-04-11":2,"2024-04-10":3,"2024-04-08":4,"2024-04-05":1,"2024-04-03":4,"2024-03-31":1,"2024-03-30":2,"2024-03-29":1,"2024-03-28":1,"2024-03-27":3,"2024-03-26":1,"2024-03-24":4,"2024-03-20":1,"2024-03-19":1,"2024-03-17":1,"2024-03-14":2,"2024-03-13":3,"2024-03-12":2,"2024-03-11":1,"2024-03-09":3,"2024-03-06":1,"2024-03-03":1,"2024-03-02":2,"2024-03-01":1,"2024-02-29":2,"2024-02-28":2,"2024-02-23":3,"2024-02-22":4,"2024-02-20":4,"2024-02-19":4,"2024-02-17":3,"2024-02-16":3},a=`export const data = ${JSON.stringify(o,null,2)};`;var n=e.i(391398);function r(e,t){if(!t)return e.map((e,t)=>({type:"column",month:new Date(e.find(e=>null!==e)).getUTCMonth(),weekIndex:t}));let o=[];e.forEach((e,t)=>{let a=e.map(e=>e?new Date(e).getUTCMonth():null),n=null,r=null;for(let e=0;e<a.length;e+=1)if(null!==a[e]){if(null===n)n=a[e];else if(a[e]!==n){r=e;break}}if(null!==n)if(null===r)o.push({type:"column",month:n,weekIndex:t});else{let e=null;for(let t=r;t<a.length;t+=1)if(null!==a[t]){e=a[t];break}null===e?o.push({type:"column",month:n,weekIndex:t}):(o.push({type:"column",month:n,weekIndex:t}),o.push({type:"column",month:e,weekIndex:t}))}});let a=[];for(let e=0;e<o.length;e+=1)e>0&&o[e].month!==o[e-1].month&&a.push({type:"spacer"}),a.push(o[e]);return a}function i(e,t){return new Date(e.getTime()+864e5*t)}function l(e){if("string"==typeof e){let t=e.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(t)return new Date(Date.UTC(Number(t[1]),Number(t[2])-1,Number(t[3])));let o=new Date(e);return new Date(Date.UTC(o.getUTCFullYear(),o.getUTCMonth(),o.getUTCDate()))}return new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()))}function s({value:e,min:t,max:o,colors:a}){return a[Math.round((a.length-1)*(o===t?1:(e-t)/(o-t)))]}function c({data:e,datesRange:t,rectSize:o,gap:a,rectRadius:i,min:l,max:d,colors:m,withTooltip:u,setHoveredRect:p,getRectProps:h,getStyles:f}){let g=o+a;return(0,n.jsx)(n.Fragment,{children:r(t,!0).map((r,c)=>{if("spacer"===r.type)return(0,n.jsx)("g",{transform:`translate(${c*g}, 0)`},`spacer-${c}`);let x=t[r.weekIndex].map((t,c)=>{if(!t||new Date(t).getUTCMonth()!==r.month)return null;let x=t in e&&null!==e[t],b=x?e[t]:null;return(0,n.jsx)("rect",{width:o,height:o,x:a,y:c*g+a,rx:i,"data-empty":!x||void 0,fill:x?s({value:e[t],min:l,max:d,colors:m}):void 0,onPointerEnter:u?()=>p({date:t,value:b}):void 0,...h?.({date:t,value:b}),...f("rect")},`${t}-${r.month}`)});return(0,n.jsx)("g",{transform:`translate(${c*g}, 0)`,"data-id":"week",children:x},`col-${r.weekIndex}-${r.month}-${c}`)})})}function d({data:e,datesRange:t,rectSize:o,gap:a,rectRadius:r,min:i,max:l,colors:c,withTooltip:m,setHoveredRect:u,getRectProps:p,getStyles:h}){let f=o+a;return(0,n.jsx)(n.Fragment,{children:t.map((t,d)=>{let g=t.map((t,d)=>{if(!t)return null;let g=t in e&&null!==e[t],x=g?e[t]:null;return(0,n.jsx)("rect",{width:o,height:o,x:a,y:d*f+a,rx:r,"data-empty":!g||void 0,fill:g?s({value:e[t],min:i,max:l,colors:c}):void 0,onPointerEnter:m?()=>u({date:t,value:x}):void 0,...p?.({date:t,value:x}),...h("rect")},t)});return(0,n.jsx)("g",{transform:`translate(${d*f}, 0)`,"data-id":"week",children:g},d)})})}var m={root:"m_2ef228c3",rect:"m_2ef201c5",monthLabel:"m_7e977775",weekdayLabel:"m_c4b68f8d",legendLabel:"m_75b4f3e6",legendRect:"m_da847eb2"},u=e.i(232471),p=e.i(431868),h=e.i(275519),f=e.i(44091),g=e.i(391466),x=e.i(191788);let b={monthLabels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdayLabels:["Sun","Mon","","Wed","","Fri",""],withOutsideDates:!0,firstDayOfWeek:1,rectSize:10,weekdaysLabelsWidth:30,monthsLabelsHeight:14,gap:1,rectRadius:2,fontSize:12,colors:["var(--heatmap-level-1)","var(--heatmap-level-2)","var(--heatmap-level-3)","var(--heatmap-level-4)"],legendLabels:["Less","More"]},v=(0,h.factory)(e=>{let t,o,a,s,h,v,w,y,D,j,P=(0,f.useProps)("Heatmap",b,e),{classNames:T,className:k,style:M,styles:C,unstyled:S,vars:A,data:V,startDate:L,endDate:Y,withMonthLabels:E,withWeekdayLabels:H,weekdayLabels:Z,withOutsideDates:I,monthLabels:N,firstDayOfWeek:_,rectSize:z=10,gap:F=1,rectRadius:O,domain:B,colors:R,weekdaysLabelsWidth:G,monthsLabelsHeight:$,fontSize:W,getTooltipLabel:U,withTooltip:K,tooltipProps:q,getRectProps:X,splitMonths:J,withLegend:Q,legendLabels:ee,attributes:et,...eo}=P,ea=(0,g.useStyles)({name:"Heatmap",classes:m,props:P,className:k,style:M,classNames:T,styles:C,unstyled:S,attributes:et,vars:A}),[en,er]=(0,x.useState)(null),ei=z+F,el=H?G:0,es=E?$:0,[ec,ed]=function({data:e,domain:t}){if(Array.isArray(t))return t;let o=Object.values(e);return[Math.min(...o),Math.max(...o)]}({data:V,domain:B}),em=(0,x.useMemo)(()=>(function(e,t){let o=[...e];for(let e=0;e<t;e+=1)o.push(o.shift());return o})(Z,_),[Z,_]),eu=function({startDate:e,endDate:t,withOutsideDates:o=!0,firstDayOfWeek:a=1}={}){let n,r=new Date,s=new Date(r.getFullYear()-1,r.getMonth(),r.getDate()),c=e?l(e):l(s),d=t?l(t):l(r),m=function(e,t){let o=new Date(e);for(;o.getUTCDay()!==t;)o=i(o,-1);return o}(c,a),u=(n=d.getUTCDay(),i(d,6-(7*(n<a)+n-a))),p=[],h=m;for(;h<=u;){let e=Array.from({length:7},(e,t)=>{let a=i(h,t);return o||a>=c&&a<=d?`${a.getUTCFullYear()}-${String(a.getUTCMonth()+1).padStart(2,"0")}-${String(a.getUTCDate()).padStart(2,"0")}`:null});p.push(e),h=i(h,7)}return p}({startDate:L,endDate:Y,withOutsideDates:I,firstDayOfWeek:_}),ep=E||J?(t=0,o=null,a=[],eu.forEach(e=>{let n=new Date(null===e[0]?e[e.length-1]:e[0]).getUTCMonth();o!==n&&(o=n,a.push({month:o,position:t,size:0})),a[a.length-1].size+=1,t+=1}),a):[],eh={data:V,datesRange:eu,rectSize:z,gap:F,rectRadius:O,min:ec,max:ed,colors:R,withTooltip:K,setHoveredRect:er,getRectProps:X,getStyles:ea},ef=J?(0,n.jsx)(c,{...eh}):(0,n.jsx)(d,{...eh}),eg=J?r(eu,J).length:eu.length,ex=E&&N?ep.map((e,t)=>{let o=J?2:3;if(e.size<o)return null;let a=N[e.month];return(0,n.jsx)("text",{x:((e,t)=>{if(!J)return e*ei+F+el;let o=ep[t],a=function(e,t){for(let o=0;o<e.length;o+=1){let a=e[o];if("column"===a.type&&a.month===t)return o}return -1}(r(eu,J),o.month);return((a>=0?a:e)+1)*ei+F+el})(e.position,t),y:$-4,width:e.size*ei,fontSize:W,...ea("monthLabel"),children:a},t)}):null,eb=H&&Z?em.map((e,t)=>(0,n.jsx)("text",{x:0,y:(t+1)*ei-F+es,width:G,fontSize:W,...ea("weekdayLabel"),children:e},t)):null,ev=U&&en&&K?U(en):null,ew=Q?10+z:0,ey=ei*eg+F+el,eD=Q?(s=ee[0],h=ee[1],v=.6*W,w=s.length*v,D=(y=[void 0,...R||[]]).length*z+(y.length-1)*F,j=h.length*v,(0,n.jsxs)("g",{transform:`translate(${ey-(w+6+D+6+j)}, ${7*ei+F+es+10})`,"data-id":"legend",...ea("legend"),children:[(0,n.jsx)("text",{x:0,y:z/2,fontSize:W,dominantBaseline:"central",...ea("legendLabel"),children:s}),y.map((e,t)=>(0,n.jsx)("rect",{x:w+6+t*(z+F),y:0,width:z,height:z,rx:O,fill:e,"data-empty":void 0===e||void 0,...ea("legendRect")},t)),(0,n.jsx)("text",{x:w+6+D+6,y:z/2,fontSize:W,dominantBaseline:"central",...ea("legendLabel"),children:h})]})):null;return(0,n.jsxs)(u.Box,{component:"svg",width:ey,height:7*ei+F+es+ew,...ea("root"),...eo,children:[(0,n.jsx)(p.Tooltip.Floating,{label:ev,disabled:!K||!ev,position:"top",...q,children:(0,n.jsxs)("g",{transform:`translate(${el}, ${es})`,"data-id":"all-weeks",children:[K&&(0,n.jsx)("rect",{fill:"transparent",width:ei*eg+F,height:7*ei+F}),ef]})}),eb,ex,eD]})});v.displayName="@mantine/charts/Heatmap",v.classes=m;let w={type:"code",component:function(){return(0,n.jsx)(v,{data:o,startDate:"2024-02-16",endDate:"2025-02-16"})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <Heatmap data={data} startDate="2024-02-16" endDate="2025-02-16" />;
}
`,language:"tsx"},{fileName:"data.ts",code:a,language:"tsx"}]},y={type:"code",component:function(){return(0,n.jsx)(v,{data:o,startDate:"2024-02-16",endDate:"2025-02-16",withMonthLabels:!0,withWeekdayLabels:!0})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      withMonthLabels
      withWeekdayLabels
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:a,language:"tsx"}]},D={type:"code",component:function(){return(0,n.jsx)(v,{data:o,startDate:"2024-02-16",endDate:"2025-02-16",withMonthLabels:!0,withWeekdayLabels:!0,weekdayLabels:["Вс","Пн","","Ср","","Пт",""],monthLabels:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"]})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      withMonthLabels
      withWeekdayLabels
      weekdayLabels={['Вс', 'Пн', '', 'Ср', '', 'Пт', '']}
      monthLabels={[
        'Янв',
        'Фев',
        'Мар',
        'Апр',
        'Май',
        'Июн',
        'Июл',
        'Авг',
        'Сен',
        'Окт',
        'Ноя',
        'Дек',
      ]}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:a,language:"tsx"}]},j={type:"configurator",component:function(e){return(0,n.jsx)(v,{data:o,withMonthLabels:!0,withWeekdayLabels:!0,startDate:"2024-02-16",endDate:"2024-04-16",...e})},code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';


function Demo() {
  return (
    <Heatmap
      data={data}
      withMonthLabels
      withWeekdayLabels
      startDate="2024-02-16"
      endDate="2024-04-16"
      {{props}}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:a,language:"tsx"}],centered:!0,controls:[{type:"number",prop:"rectSize",min:6,max:20,initialValue:10,libraryValue:"__"},{type:"number",prop:"rectRadius",min:0,max:20,initialValue:2,libraryValue:"__"},{type:"number",prop:"gap",min:0,max:5,initialValue:1,libraryValue:"__"}]};var P=e.i(494834);let T={type:"code",component:function(){return(0,n.jsx)(v,{data:o,startDate:"2024-02-16",endDate:"2025-02-16",withTooltip:!0,withWeekdayLabels:!0,withMonthLabels:!0,getTooltipLabel:({date:e,value:t})=>`${(0,P.default)(e).format("DD MMM, YYYY")} – ${null===t||0===t?"No contributions":`${t} contribution${t>1?"s":""}`}`})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import dayjs from 'dayjs';
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      withTooltip
      withWeekdayLabels
      withMonthLabels
      getTooltipLabel={({ date, value }) =>
        \`\${dayjs(date).format('DD MMM, YYYY')} – \${value === null || value === 0 ? 'No contributions' : \`\${value} contribution\${value > 1 ? 's' : ''}\`}\`
      }
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:a,language:"tsx"}]},k={type:"code",component:function(){return(0,n.jsx)(v,{data:o,startDate:"2024-02-16",endDate:"2024-04-16",withOutsideDates:!1,withMonthLabels:!0,withWeekdayLabels:!0,withTooltip:!0,getTooltipLabel:({date:e,value:t})=>`${e} – ${t??0} contributions`})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2024-04-16"
      withOutsideDates={false}
      withMonthLabels
      withWeekdayLabels
      withTooltip
      getTooltipLabel={({ date, value }) => \`\${date} – \${value ?? 0} contributions\`}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:a,language:"tsx"}]},M={type:"code",component:function(){return(0,n.jsx)(v,{data:o,startDate:"2024-02-16",endDate:"2024-04-26",withMonthLabels:!0,withWeekdayLabels:!0,withTooltip:!0,firstDayOfWeek:0,weekdayLabels:["","Mon","","Wed","","Fri",""],getTooltipLabel:({date:e,value:t})=>`${e} – ${t??0} contributions`})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2024-04-26"
      withMonthLabels
      withWeekdayLabels
      withTooltip
      firstDayOfWeek={0}
      weekdayLabels={['', 'Mon', '', 'Wed', '', 'Fri', '']}
      getTooltipLabel={({ date, value }) => \`\${date} – \${value ?? 0} contributions\`}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:a,language:"tsx"}]},C={type:"code",component:function(){return(0,n.jsx)(v,{data:o,startDate:"2024-02-16",endDate:"2025-02-16",getRectProps:({date:e,value:t})=>({onClick:()=>console.log({date:e,value:t})})})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      getRectProps={({ date, value }) => ({
        onClick: () => console.log({ date, value }),
      })}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:a,language:"tsx"}]},S={type:"code",component:function(){return(0,n.jsx)(v,{data:o,startDate:"2024-02-16",endDate:"2025-02-16",colors:["var(--mantine-color-orange-4)","var(--mantine-color-orange-6)","var(--mantine-color-orange-7)","var(--mantine-color-orange-9)"]})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      colors={[
        'var(--mantine-color-orange-4)',
        'var(--mantine-color-orange-6)',
        'var(--mantine-color-orange-7)',
        'var(--mantine-color-orange-9)',
      ]}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:a,language:"tsx"}]};var A={root:"m_2b796525"};let V={type:"code",component:function(){return(0,n.jsx)(v,{classNames:A,data:o,startDate:"2024-02-16",endDate:"2025-02-16"})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      classNames={classes}
    />
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`.root {
  @mixin light {
    --heatmap-level-1: var(--mantine-color-blue-2);
    --heatmap-level-2: var(--mantine-color-blue-4);
    --heatmap-level-3: var(--mantine-color-blue-6);
    --heatmap-level-4: var(--mantine-color-blue-9);
  }

  @mixin dark {
    --heatmap-level-1: alpha(var(--mantine-color-orange-6), 0.35);
    --heatmap-level-2: alpha(var(--mantine-color-orange-6), 0.65);
    --heatmap-level-3: var(--mantine-color-orange-6);
    --heatmap-level-4: var(--mantine-color-yellow-4);
  }
}`,language:"scss"},{fileName:"data.ts",code:a,language:"tsx"}]},L={type:"code",component:function(){return(0,n.jsx)(v,{data:o,startDate:"2024-02-16",endDate:"2025-02-16",withMonthLabels:!0,splitMonths:!0})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      withMonthLabels
      splitMonths
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:a,language:"tsx"}]},Y={type:"code",component:function(){return(0,n.jsx)(v,{data:o,startDate:"2024-02-16",endDate:"2025-02-16",withMonthLabels:!0,withWeekdayLabels:!0,withLegend:!0})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      withMonthLabels
      withWeekdayLabels
      withLegend
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:a,language:"tsx"}]};var E=(0,t.__exportAll)({colors:()=>S,cssColors:()=>V,firstDayOfWeek:()=>M,getRectProps:()=>C,labels:()=>y,labelsText:()=>D,legend:()=>Y,rectSize:()=>j,splitMonths:()=>L,tooltip:()=>T,usage:()=>w,withOutsideDates:()=>k});e.s(["HeatmapDemos",0,E],3214)},39167,(e,t,o)=>{e.e,t.exports=function(e){"use strict";var t="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),o="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),a="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),n="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),r=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function i(e,t,o){var a,n;return"m"===o?t?"минута":"минуту":e+" "+(a=+e,n=({mm:t?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"})[o].split("_"),a%10==1&&a%100!=11?n[0]:a%10>=2&&a%10<=4&&(a%100<10||a%100>=20)?n[1]:n[2])}var l=function(e,a){return r.test(a)?t[e.month()]:o[e.month()]};l.s=o,l.f=t;var s=function(e,t){return r.test(t)?a[e.month()]:n[e.month()]};s.s=n,s.f=a;var c={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:l,monthsShort:s,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:i,mm:i,h:"час",hh:i,d:"день",dd:i,M:"месяц",MM:i,y:"год",yy:i},ordinal:function(e){return e},meridiem:function(e){return e<4?"ночи":e<12?"утра":e<17?"дня":"вечера"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(c,null,!0),c}(e.r(494834))},111018,e=>{"use strict";var t=e.i(191788),o=e.i(391398),a=e.i(883364),n=e.i(494834);e.s(["getSharedPickerDemos",0,function(e){let r,i,l,s,c,d,m;return{usage:{type:"code",centered:!0,code:(r=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${r} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <${r} value={value} onChange={setValue} />;
}
`),component:()=>{let[a,n]=(0,t.useState)(null);return(0,o.jsx)(e,{value:a,onChange:n})}},range:{type:"code",centered:!0,code:(i=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${i} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  return <${i} type="range" value={value} onChange={setValue} />;
}
`),component:()=>{let[a,n]=(0,t.useState)([null,null]);return(0,o.jsx)(e,{type:"range",value:a,onChange:n})}},multiple:{type:"code",centered:!0,code:(l=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${l} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string[]>([]);
  return <${l} type="multiple" value={value} onChange={setValue} />;
}
`),component:()=>{let[a,n]=(0,t.useState)([]);return(0,o.jsx)(e,{type:"multiple",value:a,onChange:n})}},deselect:{type:"code",centered:!0,code:(s=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${s} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <${s} allowDeselect value={value} onChange={setValue} />;
}
`),component:()=>{let[a,n]=(0,t.useState)(null);return(0,o.jsx)(e,{allowDeselect:!0,value:a,onChange:n})}},singleRange:{type:"code",centered:!0,code:(c=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${c} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  return (
    <${c} type="range" allowSingleDateInRange value={value} onChange={setValue} />
  );
}
`),component:()=>{let[a,n]=(0,t.useState)([null,null]);return(0,o.jsx)(e,{type:"range",allowSingleDateInRange:!0,value:a,onChange:n})}},numberOfColumns:{type:"code",centered:!0,code:(d=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${d} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  return (
    <${d} type="range" numberOfColumns={2} value={value} onChange={setValue} />
  );
}
`),component:()=>{let[n,r]=(0,t.useState)([null,null]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e,{type:"range",numberOfColumns:2,value:n,onChange:r,visibleFrom:"sm"}),(0,o.jsx)(a.Text,{ta:"center",hiddenFrom:"sm",children:"Demo is not available on small screens. Make your screen larger to see the demo."})]})}},sizeConfigurator:{type:"configurator",centered:!0,code:(m=e.displayName.replace("@mantine/dates/",""),`import dayjs from 'dayjs';
import { ${m} } from '@mantine/dates';

function Demo() {
  return <${m} defaultValue={dayjs().format('YYYY-MM-DD')}{{props}} />;
}
`),controls:[{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"}],component:t=>(0,o.jsx)(e,{defaultValue:(0,n.default)().format("YYYY-MM-DD"),...t})}}}],111018)},271706,e=>{"use strict";var t=e.i(648863),o=e.i(111018),a=e.i(191788),n=e.i(391398),r=e.i(777141),i=e.i(494834);let l={type:"code",centered:!0,component:function(){let[e,t]=(0,a.useState)([null,null]),[o,l]=(0,a.useState)((0,i.default)().format("YYYY-MM-DD"));return(0,n.jsx)(r.DatePicker,{date:o,onDateChange:l,type:"range",value:e,onChange:e=>{null!==e[0]&&null===e[1]&&l(e=>(0,i.default)(e).add(1,"month").format("YYYY-MM-DD")),t(e)}})},code:`
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  const [date, setDate] = useState(new Date());

  const handleChange = (val: [Date | null, Date | null]) => {
    if (val[0] !== null && val[1] === null) {
      setDate((current) => new Date(current.getFullYear() + 1, 1));
    }

    setValue(val);
  };

  return (
    <DatePicker
      date={date}
      onDateChange={setDate}
      type="range"
      value={value}
      onChange={handleChange}
    />
  );
}
`},s=e=>{let t=(0,i.default)(e);return 5===t.day()&&13===t.date()?{style:{backgroundColor:"var(--mantine-color-red-filled)",color:"var(--mantine-color-white)"}}:{}},c=e=>{let t=(0,i.default)(e);return t.year()===new Date().getFullYear()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:t.year()===new Date().getFullYear()+1?{disabled:!0}:{}},d=e=>{let t=(0,i.default)(e);return 1===t.month()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:5===t.month()?{disabled:!0}:{}},m={type:"code",centered:!0,component:function(){let[e,t]=(0,a.useState)(null);return(0,n.jsx)(r.DatePicker,{value:e,onChange:t,defaultDate:"2021-08-01",getDayProps:s,getYearControlProps:c,getMonthControlProps:d})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { DatePicker, DatePickerProps } from '@mantine/dates';

const getDayProps: DatePickerProps['getDayProps'] = (date) => {
  const d = dayjs(date);

  if (d.day() === 5 && d.date() === 13) {
    return {
      style: {
        backgroundColor: 'var(--mantine-color-red-filled)',
        color: 'var(--mantine-color-white)',
      },
    };
  }

  return {};
};

const getYearControlProps: DatePickerProps['getYearControlProps'] = (date) => {
  const d = dayjs(date);

  if (d.year() === new Date().getFullYear()) {
    return {
      style: {
        color: 'var(--mantine-color-blue-filled)',
        fontWeight: 700,
      },
    };
  }

  if (d.year() === new Date().getFullYear() + 1) {
    return { disabled: true };
  }

  return {};
};

const getMonthControlProps: DatePickerProps['getMonthControlProps'] = (date) => {
  const d = dayjs(date);
  if (d.month() === 1) {
    return {
      style: {
        color: 'var(--mantine-color-blue-filled)',
        fontWeight: 700,
      },
    };
  }

  if (d.month() === 5) {
    return { disabled: true };
  }

  return {};
};

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <DatePicker
      value={value}
      onChange={setValue}
      defaultDate="2021-08-01"
      getDayProps={getDayProps}
      getYearControlProps={getYearControlProps}
      getMonthControlProps={getMonthControlProps}
    />
  );
}
`},u={type:"code",centered:!0,component:function(){let[e,t]=(0,a.useState)(null);return(0,n.jsx)(r.DatePicker,{defaultDate:"2015-02-01",value:e,onChange:t})},code:`
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <DatePicker defaultDate="2015-02-01" value={value} onChange={setValue} />;
}
`},p={type:"code",centered:!0,component:function(){let[e,t]=(0,a.useState)(null);return(0,n.jsx)(r.DatePicker,{defaultLevel:"decade",decadeLabelFormat:"YY",yearLabelFormat:"YYYY [year]",monthLabelFormat:"MM/YY",value:e,onChange:t})},code:`
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <DatePicker
      defaultLevel="decade"
      decadeLabelFormat="YY"
      yearLabelFormat="YYYY [year]"
      monthLabelFormat="MM/YY"
      value={value}
      onChange={setValue}
    />
  );
}
`},h={type:"code",centered:!0,component:function(){return(0,n.jsx)(r.DatePicker,{monthsListFormat:"MM",yearsListFormat:"YY"})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker monthsListFormat="MM" yearsListFormat="YY" />;
}
`};e.i(39167);let f={type:"code",centered:!0,component:function(){return(0,n.jsx)(r.DatePicker,{locale:"ru"})},code:`
import 'dayjs/locale/ru';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker locale="ru" />;
}
`};var g=e.i(725695);let x={type:"code",component:function(){return(0,n.jsxs)(g.Group,{justify:"center",children:[(0,n.jsx)(r.DatePicker,{maxLevel:"year"}),(0,n.jsx)(r.DatePicker,{maxLevel:"month"})]})},code:`
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <Group justify="center">
      <DatePicker maxLevel="year" />
      <DatePicker maxLevel="month" />
    </Group>
  );
}
`},b={type:"code",centered:!0,component:function(){let[e,t]=(0,a.useState)(null);return(0,n.jsx)(r.DatePicker,{value:e,onChange:t,defaultDate:"2022-02-01",minDate:"2022-02-10",maxDate:"2022-02-25"})},code:`
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <DatePicker
      value={value}
      onChange={setValue}
      defaultDate="2022-02-01"
      minDate="2022-02-10"
      maxDate="2022-02-25"
    />
  );
}
`},v={type:"code",component:function(){return(0,n.jsxs)(g.Group,{justify:"center",children:[(0,n.jsx)(r.DatePicker,{defaultLevel:"decade"}),(0,n.jsx)(r.DatePicker,{defaultLevel:"year"})]})},code:`
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <Group justify="center">
      <DatePicker defaultLevel="decade" />
      <DatePicker defaultLevel="year" />
    </Group>
  );
}
`},w={type:"code",component:function(){return(0,n.jsxs)(g.Group,{justify:"center",children:[(0,n.jsx)(r.DatePicker,{firstDayOfWeek:0}),(0,n.jsx)(r.DatePicker,{firstDayOfWeek:6})]})},code:`
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <Group justify="center">
      <DatePicker firstDayOfWeek={0} />
      <DatePicker firstDayOfWeek={6} />
    </Group>
  );
}
`},y={type:"code",centered:!0,component:function(){return(0,n.jsx)(r.DatePicker,{weekendDays:[1,2]})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker weekendDays={[1, 2]} />;
}
`};var D=e.i(393353);let j=e=>{let t=(0,i.default)(e).date();return(0,n.jsx)(D.Indicator,{size:6,color:"red",offset:-5,disabled:16!==t,children:(0,n.jsx)("div",{children:t})})},P={type:"code",centered:!0,component:function(){return(0,n.jsx)(r.DatePicker,{renderDay:j})},code:`
import dayjs from 'dayjs';
import { Indicator } from '@mantine/core';
import { DatePicker, DatePickerProps } from '@mantine/dates';

const dayRenderer: DatePickerProps['renderDay'] = (date) => {
  const day = dayjs(date).date();
  return (
    <Indicator size={6} color="red" offset={-5} disabled={day !== 16}>
      <div>{day}</div>
    </Indicator>
  );
};

function Demo() {
  return <DatePicker renderDay={dayRenderer} />;
}
`},T={type:"code",centered:!0,component:function(){return(0,n.jsx)(r.DatePicker,{hideWeekdays:!0})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker hideWeekdays />;
}
`},k={type:"code",centered:!0,component:function(){return(0,n.jsx)(r.DatePicker,{hideOutsideDates:!0})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker hideOutsideDates />;
}
`},M={type:"code",component:function(){return(0,n.jsx)(r.DatePicker,{excludeDate:e=>5!==new Date(e).getDay()})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker excludeDate={(date) => new Date(date).getDay() !== 5} />;
}
`,centered:!0},C={type:"code",centered:!0,component:function(){return(0,n.jsx)(r.DatePicker,{withWeekNumbers:!0})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker withWeekNumbers />;
}
`},S={type:"code",centered:!0,component:function(){return(0,n.jsx)(r.DatePicker,{presets:[{value:(0,i.default)().subtract(1,"day").format("YYYY-MM-DD"),label:"Yesterday"},{value:(0,i.default)().format("YYYY-MM-DD"),label:"Today"},{value:(0,i.default)().add(1,"day").format("YYYY-MM-DD"),label:"Tomorrow"},{value:(0,i.default)().add(1,"month").format("YYYY-MM-DD"),label:"Next month"},{value:(0,i.default)().add(1,"year").format("YYYY-MM-DD"),label:"Next year"},{value:(0,i.default)().subtract(1,"month").format("YYYY-MM-DD"),label:"Last month"},{value:(0,i.default)().subtract(1,"year").format("YYYY-MM-DD"),label:"Last year"}]})},code:`
import dayjs from 'dayjs';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <DatePicker
      presets={[
        { value: dayjs().subtract(1, 'day').format('YYYY-MM-DD'), label: 'Yesterday' },
        { value: dayjs().format('YYYY-MM-DD'), label: 'Today' },
        { value: dayjs().add(1, 'day').format('YYYY-MM-DD'), label: 'Tomorrow' },
        { value: dayjs().add(1, 'month').format('YYYY-MM-DD'), label: 'Next month' },
        { value: dayjs().add(1, 'year').format('YYYY-MM-DD'), label: 'Next year' },
        { value: dayjs().subtract(1, 'month').format('YYYY-MM-DD'), label: 'Last month' },
        { value: dayjs().subtract(1, 'year').format('YYYY-MM-DD'), label: 'Last year' },
      ]}
    />
  );
}
`},A={type:"code",centered:!0,component:function(){let e=(0,i.default)();return(0,n.jsx)(r.DatePicker,{type:"range",presets:[{value:[e.subtract(2,"day").format("YYYY-MM-DD"),e.format("YYYY-MM-DD")],label:"Last two days"},{value:[e.subtract(7,"day").format("YYYY-MM-DD"),e.format("YYYY-MM-DD")],label:"Last 7 days"},{value:[e.startOf("month").format("YYYY-MM-DD"),e.format("YYYY-MM-DD")],label:"This month"},{value:[e.subtract(1,"month").startOf("month").format("YYYY-MM-DD"),e.subtract(1,"month").endOf("month").format("YYYY-MM-DD")],label:"Last month"},{value:[e.subtract(1,"year").startOf("year").format("YYYY-MM-DD"),e.subtract(1,"year").endOf("year").format("YYYY-MM-DD")],label:"Last year"}]})},code:`
import dayjs from 'dayjs';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const today = dayjs();

  return (
    <DatePicker
      type="range"
      presets={[
        {
          value: [today.subtract(2, 'day').format('YYYY-MM-DD'), today.format('YYYY-MM-DD')],
          label: 'Last two days',
        },
        {
          value: [today.subtract(7, 'day').format('YYYY-MM-DD'), today.format('YYYY-MM-DD')],
          label: 'Last 7 days',
        },
        {
          value: [today.startOf('month').format('YYYY-MM-DD'), today.format('YYYY-MM-DD')],
          label: 'This month',
        },
        {
          value: [
            today.subtract(1, 'month').startOf('month').format('YYYY-MM-DD'),
            today.subtract(1, 'month').endOf('month').format('YYYY-MM-DD'),
          ],
          label: 'Last month',
        },
        {
          value: [
            today.subtract(1, 'year').startOf('year').format('YYYY-MM-DD'),
            today.subtract(1, 'year').endOf('year').format('YYYY-MM-DD'),
          ],
          label: 'Last year',
        },
      ]}
    />
  );
}
`,defaultExpanded:!1},V={type:"code",centered:!0,component:function(){return(0,n.jsx)(r.DatePicker,{defaultDate:"2022-02-01",headerControlsOrder:["level","previous","next"],styles:{calendarHeaderLevel:{justifyContent:"flex-start",paddingInlineStart:8}}})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <DatePicker
      defaultDate="2022-02-01"
      headerControlsOrder={['level', 'previous', 'next']}
      styles={{
        calendarHeaderLevel: {
          justifyContent: 'flex-start',
          paddingInlineStart: 8,
        },
      }}
    />
  );
}
`},L={type:"code",centered:!0,maxWidth:600,component:function(){let[e,t]=(0,a.useState)(null);return(0,n.jsx)(r.DatePicker,{fullWidth:!0,value:e,onChange:t})},code:`
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <DatePicker fullWidth value={value} onChange={setValue} />;
}
`};var Y=(0,t.__exportAll)({controlProps:()=>m,controlledDate:()=>l,defaultDate:()=>u,defaultLevel:()=>v,deselect:()=>Z,excludeDate:()=>M,firstDayOfWeek:()=>w,fullWidth:()=>L,headerControlsOrder:()=>V,hideOutsideDates:()=>k,hideWeekdays:()=>T,labelFormat:()=>p,listFormat:()=>h,locale:()=>f,maxLevel:()=>x,minMax:()=>b,multiple:()=>H,numberOfColumns:()=>_,presets:()=>S,presetsRange:()=>A,range:()=>I,renderDay:()=>P,singleRange:()=>N,sizeConfigurator:()=>z,usage:()=>E,weekendDays:()=>y,withWeekNumbers:()=>C});let{usage:E,multiple:H,deselect:Z,range:I,singleRange:N,numberOfColumns:_,sizeConfigurator:z}=(0,o.getSharedPickerDemos)(r.DatePicker);e.s(["DatePickerDemos",0,Y],271706)},896399,e=>{"use strict";var t=e.i(648863),o=e.i(391398),a=e.i(288034);let n={type:"code",centered:!0,maxWidth:400,component:function(){return(0,o.jsx)(a.DateTimePicker,{label:"Pick date and time",placeholder:"Pick date and time"})},code:`
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return <DateTimePicker label="Pick date and time" placeholder="Pick date and time" />;
}
`},r={type:"code",centered:!0,maxWidth:400,component:function(){return(0,o.jsx)(a.DateTimePicker,{withSeconds:!0,label:"Pick date and time",placeholder:"Pick date and time"})},code:`
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return <DateTimePicker withSeconds label="Pick date and time" placeholder="Pick date and time" />;
}
`},i={type:"code",centered:!0,maxWidth:400,component:function(){return(0,o.jsx)(a.DateTimePicker,{dropdownType:"modal",label:"Pick date and time",placeholder:"Pick date and time"})},code:`
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      dropdownType="modal"
      label="Pick date and time"
      placeholder="Pick date and time"
    />
  );
}
`},l={type:"configurator",component:function(e){return(0,o.jsx)(a.DateTimePicker,{...e,placeholder:"Input placeholder"})},code:`
import { DateTimePicker } from '@mantine/dates';


function Demo() {
  return (
    <DateTimePicker
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,centered:!0,maxWidth:400,controls:e.i(960831).inputControls};var s=e.i(494834);let c={type:"code",centered:!0,maxWidth:400,component:function(){return(0,o.jsx)(a.DateTimePicker,{clearable:!0,defaultValue:(0,s.default)().format("YYYY-MM-DD"),label:"Pick date and time",placeholder:"Pick date and time"})},code:`
import dayjs from 'dayjs';
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      clearable
      defaultValue={dayjs().format('YYYY-MM-DD')}
      label="Pick date and time"
      placeholder="Pick date and time"
    />
  );
}
`};var d=e.i(931882),m=e.i(671640);let u={type:"code",component:function(){return(0,o.jsxs)(m.Stack,{children:[(0,o.jsx)(a.DateTimePicker,{label:"clearSectionMode='both' (default)",placeholder:"Pick date and time",defaultValue:new Date,clearable:!0,rightSection:(0,o.jsx)(d.CaretDownIcon,{size:16}),clearSectionMode:"both"}),(0,o.jsx)(a.DateTimePicker,{label:"clearSectionMode='rightSection'",placeholder:"Pick date and time",defaultValue:new Date,clearable:!0,rightSection:(0,o.jsx)(d.CaretDownIcon,{size:16}),clearSectionMode:"rightSection"}),(0,o.jsx)(a.DateTimePicker,{label:"clearSectionMode='clear'",placeholder:"Pick date and time",defaultValue:new Date,clearable:!0,rightSection:(0,o.jsx)(d.CaretDownIcon,{size:16}),clearSectionMode:"clear"})]})},code:`
import { CaretDownIcon } from '@phosphor-icons/react';
import { Stack } from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <Stack>
      <DateTimePicker
        label="clearSectionMode='both' (default)"
        placeholder="Pick date and time"
        defaultValue={new Date()}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="both"
      />

      <DateTimePicker
        label="clearSectionMode='rightSection'"
        placeholder="Pick date and time"
        defaultValue={new Date()}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="rightSection"
      />

      <DateTimePicker
        label="clearSectionMode='clear'"
        placeholder="Pick date and time"
        defaultValue={new Date()}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="clear"
      />
    </Stack>
  );
}
`,maxWidth:340,centered:!0},p={type:"code",centered:!0,maxWidth:400,component:function(){return(0,o.jsx)(a.DateTimePicker,{valueFormat:"DD MMM YYYY hh:mm A",label:"Pick date and time",placeholder:"Pick date and time"})},code:`
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      valueFormat="DD MMM YYYY hh:mm A"
      label="Pick date and time"
      placeholder="Pick date and time"
    />
  );
}
`},h={type:"code",centered:!0,maxWidth:400,component:function(){return(0,o.jsx)(a.DateTimePicker,{valueFormat:e=>(0,s.default)(e).format("dddd, MMMM D [at] h:mm A"),defaultValue:"2024-04-11 14:45:00",label:"Pick date and time",placeholder:"Pick date and time"})},code:`
import dayjs from 'dayjs';
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      valueFormat={(date) => dayjs(date).format('dddd, MMMM D [at] h:mm A')}
      defaultValue="2024-04-11 14:45:00"
      label="Pick date and time"
      placeholder="Pick date and time"
    />
  );
}
`},f={type:"code",centered:!0,maxWidth:400,component:function(){return(0,o.jsx)(a.DateTimePicker,{label:"Disabled",placeholder:"Pick date and time",disabled:!0})},code:`
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return <DateTimePicker label="Disabled" placeholder="Pick date and time" disabled />;
}
`},g={type:"code",centered:!0,maxWidth:400,component:function(){return(0,o.jsx)(a.DateTimePicker,{label:"Pick date and time",placeholder:"Pick date and time",timePickerProps:{withDropdown:!0,popoverProps:{withinPortal:!1},format:"12h"}})},code:`
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      label="Pick date and time"
      placeholder="Pick date and time"
      timePickerProps={{
        withDropdown: true,
        popoverProps: { withinPortal: false },
        format: '12h',
      }}
    />
  );
}
`},x={type:"code",centered:!0,maxWidth:400,component:function(){return(0,o.jsx)(a.DateTimePicker,{label:"Pick date and time",placeholder:"Pick date and time",presets:[{value:(0,s.default)().subtract(1,"day").format("YYYY-MM-DD HH:mm:ss"),label:"Yesterday"},{value:(0,s.default)().format("YYYY-MM-DD HH:mm:ss"),label:"Today"},{value:(0,s.default)().add(1,"day").format("YYYY-MM-DD HH:mm:ss"),label:"Tomorrow"},{value:(0,s.default)().add(1,"month").format("YYYY-MM-DD HH:mm:ss"),label:"Next month"},{value:(0,s.default)().add(1,"year").format("YYYY-MM-DD HH:mm:ss"),label:"Next year"},{value:(0,s.default)().subtract(1,"month").format("YYYY-MM-DD HH:mm:ss"),label:"Last month"},{value:(0,s.default)().subtract(1,"year").format("YYYY-MM-DD HH:mm:ss"),label:"Last year"}]})},code:`
import dayjs from 'dayjs';
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      label="Pick date and time"
      placeholder="Pick date and time"
      presets={[
        { value: dayjs().subtract(1, 'day').format('YYYY-MM-DD HH:mm:ss'), label: 'Yesterday' },
        { value: dayjs().format('YYYY-MM-DD HH:mm:ss'), label: 'Today' },
        { value: dayjs().add(1, 'day').format('YYYY-MM-DD HH:mm:ss'), label: 'Tomorrow' },
        { value: dayjs().add(1, 'month').format('YYYY-MM-DD HH:mm:ss'), label: 'Next month' },
        { value: dayjs().add(1, 'year').format('YYYY-MM-DD HH:mm:ss'), label: 'Next year' },
        {
          value: dayjs().subtract(1, 'month').format('YYYY-MM-DD HH:mm:ss'),
          label: 'Last month',
        },
        { value: dayjs().subtract(1, 'year').format('YYYY-MM-DD HH:mm:ss'), label: 'Last year' },
      ]}
    />
  );
}
`},b={type:"code",centered:!0,maxWidth:400,component:function(){return(0,o.jsx)(a.DateTimePicker,{type:"range",label:"Pick dates and times range",placeholder:"Pick dates and times range"})},code:`
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      type="range"
      label="Pick dates and times range"
      placeholder="Pick dates and times range"
    />
  );
}
`};var v=(0,t.__exportAll)({clearSectionMode:()=>u,clearable:()=>c,configurator:()=>l,disabled:()=>f,format:()=>p,formatFunction:()=>h,modal:()=>i,presets:()=>x,range:()=>b,timePickerProps:()=>g,usage:()=>n,withSeconds:()=>r});e.s(["DateTimePickerDemos",0,v],896399)},869921,e=>{"use strict";var t=e.i(648448);e.s(["getTimeRange",0,function({startTime:e,endTime:o,interval:a}){let n=[],r=(0,t.timeToSeconds)(e),i=(0,t.timeToSeconds)(o),l=(0,t.timeToSeconds)(a);for(let e=r;e<=i;e+=l)n.push((0,t.secondsToTime)(e).timeString);return n}])},969233,e=>{"use strict";var t=e.i(648863),o=e.i(391398),a=e.i(779893);let n={type:"code",component:function(){return(0,o.jsx)(a.TimePicker,{label:"Enter time"})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter time" />;
}
`,centered:!0,maxWidth:340},r={type:"code",component:function(){return(0,o.jsx)(a.TimePicker,{label:"Enter time",clearable:!0,defaultValue:"12:34:44"})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter time" clearable defaultValue="12:34:44" />;
}
`,centered:!0,maxWidth:340};var i=e.i(931882),l=e.i(671640);let s={type:"code",component:function(){return(0,o.jsxs)(l.Stack,{children:[(0,o.jsx)(a.TimePicker,{label:"clearSectionMode='both' (default)",defaultValue:"12:30",clearable:!0,rightSection:(0,o.jsx)(i.CaretDownIcon,{size:16}),clearSectionMode:"both"}),(0,o.jsx)(a.TimePicker,{label:"clearSectionMode='rightSection'",defaultValue:"12:30",clearable:!0,rightSection:(0,o.jsx)(i.CaretDownIcon,{size:16}),clearSectionMode:"rightSection"}),(0,o.jsx)(a.TimePicker,{label:"clearSectionMode='clear'",defaultValue:"12:30",clearable:!0,rightSection:(0,o.jsx)(i.CaretDownIcon,{size:16}),clearSectionMode:"clear"})]})},code:`
import { CaretDownIcon } from '@phosphor-icons/react';
import { Stack } from '@mantine/core';
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <Stack>
      <TimePicker
        label="clearSectionMode='both' (default)"
        defaultValue="12:30"
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="both"
      />

      <TimePicker
        label="clearSectionMode='rightSection'"
        defaultValue="12:30"
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="rightSection"
      />

      <TimePicker
        label="clearSectionMode='clear'"
        defaultValue="12:30"
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="clear"
      />
    </Stack>
  );
}
`,maxWidth:340,centered:!0},c={type:"code",component:function(){return(0,o.jsx)(a.TimePicker,{label:"Enter time",disabled:!0})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter time" disabled />;
}
`,centered:!0,maxWidth:340},d={type:"code",component:function(){return(0,o.jsx)(a.TimePicker,{label:"Enter time",defaultValue:"12:45:33",readOnly:!0})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter time" defaultValue="12:45:33" readOnly />;
}
`,centered:!0,maxWidth:340},m={type:"code",component:function(){return(0,o.jsx)(a.TimePicker,{label:"Enter time",withSeconds:!0})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter time" withSeconds />;
}
`,centered:!0,maxWidth:340},u={type:"code",component:function(){return(0,o.jsx)(a.TimePicker,{label:"Enter time",format:"12h"})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter time" format="12h" />;
}
`,centered:!0,maxWidth:340},p={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.TimePicker,{label:"Enter time (24h format)",min:"10:00",max:"18:30"}),(0,o.jsx)(a.TimePicker,{label:"Enter time (12h format)",min:"10:00",max:"18:30",format:"12h",mt:"md"})]})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <>
      <TimePicker label="Enter time (24h format)" min="10:00" max="18:30" />
      <TimePicker label="Enter time (12h format)" min="10:00" max="18:30" format="12h" mt="md" />
    </>
  );
}
`,centered:!0,maxWidth:340},h={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.TimePicker,{label:"Enter time (24h format)",withSeconds:!0,withDropdown:!0}),(0,o.jsx)(a.TimePicker,{label:"Enter time (12h format)",withSeconds:!0,withDropdown:!0,format:"12h",mt:"md"})]})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <>
      <TimePicker label="Enter time (24h format)" withSeconds withDropdown />
      <TimePicker label="Enter time (12h format)" withSeconds withDropdown format="12h" mt="md" />
    </>
  );
}
`,centered:!0,maxWidth:340},f={type:"code",component:function(){return(0,o.jsx)(a.TimePicker,{label:"Enter time",withSeconds:!0,withDropdown:!0,hoursStep:1,minutesStep:5,secondsStep:10})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      label="Enter time"
      withSeconds
      withDropdown
      hoursStep={1}
      minutesStep={5}
      secondsStep={10}
    />
  );
}
`,centered:!0,maxWidth:340},g={type:"code",component:function(){return(0,o.jsx)(a.TimePicker,{label:"Enter time",format:"12h",amPmLabels:{am:"पूर्वाह्न",pm:"अपराह्न"}})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker label="Enter time" format="12h" amPmLabels={{ am: 'पूर्वाह्न', pm: 'अपराह्न' }} />
  );
}
`,centered:!0,maxWidth:340};var x=e.i(191788),b=e.i(593612),v=e.i(658109);let w={type:"code",component:function(){let[e,t]=(0,x.useState)(!1),[n,r]=(0,x.useState)("");return(0,o.jsx)(a.TimePicker,{withDropdown:!0,rightSection:(0,o.jsx)(v.ActionIcon,{onClick:()=>t(!0),variant:"default",children:(0,o.jsx)(b.ClockIcon,{size:18})}),value:n,onChange:e=>{r(e),""===n&&t(!1)},popoverProps:{opened:e,onChange:e=>!e&&t(!1)}})},code:`
import { useState } from 'react';
import { ClockIcon } from '@phosphor-icons/react';
import { ActionIcon } from '@mantine/core';
import { TimePicker } from '@mantine/dates';

function Demo() {
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const [value, setValue] = useState('');

  return (
    <TimePicker
      withDropdown
      rightSection={
        <ActionIcon onClick={() => setDropdownOpened(true)} variant="default">
          <ClockIcon size={18} />
        </ActionIcon>
      }
      value={value}
      onChange={(val) => {
        setValue(val);
        if (value === '') {
          setDropdownOpened(false);
        }
      }}
      popoverProps={{
        opened: dropdownOpened,
        onChange: (_opened) => !_opened && setDropdownOpened(false),
      }}
    />
  );
}
`,centered:!0,maxWidth:340};var y=e.i(301388),D=e.i(883364);let j=/^(1[0-2]|0?[1-9]):[0-5][0-9](?::[0-5][0-9])?\s?(AM|PM)$/,P=({time:e})=>{if(!j.test(e))return{hours:null,minutes:null,seconds:null,amPm:null};let[t,o,a]=e.split(":").map(e=>e.replace(/AM|PM/g,"")),n=e.toLowerCase().includes("pm");return{hours:"string"==typeof t?Number(t):null,minutes:"string"==typeof o?Number(o):null,seconds:"string"==typeof a?Number(a):0,amPm:n?"PM":"AM"}},T={type:"code",component:function(){return(0,o.jsxs)("div",{children:[(0,o.jsx)(a.TimePicker,{label:"Paste time here",format:"12h",withSeconds:!0,pasteSplit:P}),(0,o.jsxs)(D.Text,{mt:"md",children:["Try pasting time in 12h format in any input. For example, try pasting ",(0,o.jsx)(y.Code,{children:"12:34 PM"})," ","or ",(0,o.jsx)(y.Code,{children:"8:56:45 AM"})]})]})},code:`
import { Code, Text } from '@mantine/core';
import { TimePicker, TimePickerPasteSplit } from '@mantine/dates';

const re = /^(1[0-2]|0?[1-9]):[0-5][0-9](?::[0-5][0-9])?\\s?(AM|PM)$/;

const customPasteSplit: TimePickerPasteSplit = ({ time }) => {
  if (!re.test(time)) {
    return { hours: null, minutes: null, seconds: null, amPm: null };
  }

  const [hours, minutes, second] = time.split(':').map((part) => part.replace(/AM|PM/g, ''));
  const isPm = time.toLowerCase().includes('pm');

  return {
    hours: typeof hours === 'string' ? Number(hours) : null,
    minutes: typeof minutes === 'string' ? Number(minutes) : null,
    seconds: typeof second === 'string' ? Number(second) : 0,
    amPm: isPm ? 'PM' : 'AM',
  };
};

function Demo() {
  return (
    <div>
      <TimePicker label="Paste time here" format="12h" withSeconds pasteSplit={customPasteSplit} />
      <Text mt="md">
        Try pasting time in 12h format in any input. For example, try pasting <Code>12:34 PM</Code>{' '}
        or <Code>8:56:45 AM</Code>
      </Text>
    </div>
  );
}
`,centered:!0,maxWidth:340},k={type:"configurator",component:function(e){return(0,o.jsx)(a.TimePicker,{withDropdown:!0,...e})},code:`
import { TimePicker } from '@mantine/dates';


function Demo() {
  return (
    <TimePicker
      withDropdown
      {{props}}
    />
  );
}
`,centered:!0,maxWidth:340,controls:e.i(960831).inputControls},M={type:"code",component:function(){return(0,o.jsx)(a.TimePicker,{label:"Enter time",withDropdown:!0,presets:["12:30","15:45","18:00","20:15","22:30"]})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      label="Enter time"
      withDropdown
      presets={['12:30', '15:45', '18:00', '20:15', '22:30']}
    />
  );
}
`,centered:!0,maxWidth:340},C={type:"code",component:function(){return(0,o.jsx)(a.TimePicker,{label:"Enter time",withDropdown:!0,maxDropdownContentHeight:300,presets:[{label:"Morning",values:["06:00","06:30","08:00","08:30","10:00","10:45"]},{label:"Afternoon",values:["12:00","12:30","14:00","14:45","16:00","17:30"]},{label:"Evening",values:["18:00","18:30","20:00","22:00"]}]})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      label="Enter time"
      withDropdown
      maxDropdownContentHeight={300}
      presets={[
        { label: 'Morning', values: ['06:00:00', '08:00:00', '10:00:00'] },
        { label: 'Afternoon', values: ['12:00:00', '14:00:00', '16:00:00'] },
        { label: 'Evening', values: ['18:00:00', '20:00:00', '22:00:00'] },
      ]}
    />
  );
}
`,centered:!0,maxWidth:340};var S=e.i(869921);let A={type:"code",component:function(){return(0,o.jsx)(a.TimePicker,{label:"Enter time",withDropdown:!0,presets:(0,S.getTimeRange)({startTime:"06:00:00",endTime:"18:00:00",interval:"01:30:00"})})},code:`
import { getTimeRange, TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      label="Enter time"
      withDropdown
      presets={getTimeRange({ startTime: '06:00:00', endTime: '18:00:00', interval: '01:30:00' })}
    />
  );
}
`,centered:!0,maxWidth:340},V={type:"code",component:function(){return(0,o.jsx)(a.TimePicker,{label:"Enter time",withDropdown:!0,closeDropdownOnPresetSelect:!0,presets:["12:30","15:45","18:00","20:15","22:30"]})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      label="Enter time"
      withDropdown
      closeDropdownOnPresetSelect
      presets={['12:30', '15:45', '18:00', '20:15', '22:30']}
    />
  );
}
`,centered:!0,maxWidth:340},L={type:"code",component:function(){return(0,o.jsx)(a.TimePicker,{label:"Enter time",withDropdown:!0,popoverProps:{position:"top-start",middlewares:{flip:!1,shift:!1}}})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      label="Enter time"
      withDropdown
      popoverProps={{
        position: 'top-start',
        middlewares: { flip: false, shift: false },
      }}
    />
  );
}
`,centered:!0,maxWidth:340},Y={type:"code",component:function(){return(0,o.jsx)(a.TimePicker,{label:"Enter time",withDropdown:!0,withSeconds:!0,format:"12h",popoverProps:{width:"target"}})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      label="Enter time"
      withDropdown
      withSeconds
      format="12h"
      popoverProps={{
        width: 'target',
      }}
    />
  );
}
`,centered:!0,maxWidth:340},E={type:"code",component:function(){return(0,o.jsx)(a.TimePicker,{label:"Enter time",withSeconds:!0,hoursPlaceholder:"09",minutesPlaceholder:"50",secondsPlaceholder:"11"})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker label="Enter time" withSeconds hoursPlaceholder="09" minutesPlaceholder="50" secondsPlaceholder="11" />
  );
}
`,centered:!0,maxWidth:340},H={type:"code",component:function(){return(0,o.jsx)(a.TimePicker,{label:"Enter duration",type:"duration",withSeconds:!0})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter duration" type="duration" withSeconds />;
}
`,centered:!0,maxWidth:340},Z={type:"code",component:function(){return(0,o.jsx)(a.TimePicker,{label:"Enter duration",type:"duration",withSeconds:!0,minHoursDigits:3})},code:`
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      label="Enter duration"
      type="duration"
      withSeconds
      minHoursDigits={3}
    />
  );
}
`,centered:!0,maxWidth:340};var I=(0,t.__exportAll)({amPmLabels:()=>g,clearSectionMode:()=>s,clearable:()=>r,closeDropdownOnPresetSelect:()=>V,configurator:()=>k,controlledDropdown:()=>w,disabled:()=>c,dropdownPosition:()=>L,dropdownWidth:()=>Y,duration:()=>H,format12h:()=>u,minHoursDigits:()=>Z,minMax:()=>p,pasteSplit:()=>T,presets:()=>M,presetsGroups:()=>C,presetsRange:()=>A,readOnly:()=>d,steps:()=>f,usage:()=>n,withDropdown:()=>h,withPlaceholders:()=>E,withSeconds:()=>m});e.s(["TimePickerDemos",0,I],969233)},635487,e=>{"use strict";var t=e.i(648863),o=e.i(883364),a=e.i(391398),n=e.i(866373);let r={type:"code",component:function(){return(0,a.jsxs)("div",{children:[(0,a.jsxs)(o.Text,{children:["24h format: ",(0,a.jsx)(n.TimeValue,{value:"18:45:34"})]}),(0,a.jsxs)(o.Text,{children:["12h format: ",(0,a.jsx)(n.TimeValue,{value:"18:45:34",format:"12h"})]})]})},code:`
import { Text } from '@mantine/core';
import { TimeValue } from '@mantine/dates';

function Demo() {
  return (
    <div>
      <Text>
        24h format: <TimeValue value="18:45:34" />
      </Text>
      <Text>
        12h format: <TimeValue value="18:45:34" format="12h" />
      </Text>
    </div>
  );
}
`},i={type:"code",component:function(){return(0,a.jsxs)("div",{children:[(0,a.jsxs)(o.Text,{children:["12h format: ",(0,a.jsx)(n.TimeValue,{value:"18:45:34",format:"12h",withSeconds:!0})]}),(0,a.jsxs)(o.Text,{children:["24h format: ",(0,a.jsx)(n.TimeValue,{value:"18:45:34",withSeconds:!0})]})]})},code:`
import { Text } from '@mantine/core';
import { TimeValue } from '@mantine/dates';

function Demo() {
  return (
    <div>
      <Text>
        12h format: <TimeValue value="18:45:34" format="12h" withSeconds />
      </Text>
      <Text>
        24h format: <TimeValue value="18:45:34" withSeconds />
      </Text>
    </div>
  );
}
`},l={type:"code",component:function(){return(0,a.jsx)("div",{children:(0,a.jsxs)(o.Text,{children:["Custom AM/PM labels:"," ",(0,a.jsx)(n.TimeValue,{value:"18:45:34",format:"12h",amPmLabels:{am:"पूर्वाह्न",pm:"अपराह्न"}})]})})},code:`
import { Text } from '@mantine/core';
import { TimeValue } from '@mantine/dates';

function Demo() {
  return (
    <div>
      <Text>
        Custom AM/PM labels:{' '}
        <TimeValue value="18:45:34" format="12h" amPmLabels={{ am: 'पूर्वाह्न', pm: 'अपराह्न' }} />
      </Text>
    </div>
  );
}
`},s={type:"code",component:function(){return(0,a.jsxs)("div",{children:[(0,a.jsxs)(o.Text,{children:["24h format: ",(0,a.jsx)(n.TimeValue,{value:new Date(2021,1,1,18,45,34)})]}),(0,a.jsxs)(o.Text,{children:["12h format: ",(0,a.jsx)(n.TimeValue,{format:"12h",value:new Date(2021,1,1,18,45,34)})]})]})},code:`
import { Text } from '@mantine/core';
import { TimeValue } from '@mantine/dates';

function Demo() {
  return (
    <div>
      <Text>
        24h format: <TimeValue value={new Date(2021, 1, 1, 18, 45, 34)} />
      </Text>
      <Text>
        12h format: <TimeValue format="12h" value={new Date(2021, 1, 1, 18, 45, 34)} />
      </Text>
    </div>
  );
}
`};var c=(0,t.__exportAll)({amPmLabels:()=>l,dateObject:()=>s,usage:()=>r,withSeconds:()=>i});e.s(["TimeValueDemos",0,c],635487)},477451,e=>{"use strict";var t=e.i(648863),o=e.i(391398),a=e.i(766202),n=e.i(648448);let[r,i]=(0,e.i(386179).createSafeContext)("TimeGridProvider was not found in the component tree");var l=e.i(866373),s=e.i(56206),c=e.i(284629),d=e.i(951254);function m({time:e,active:t,className:a,amPmLabels:n,format:r,withSeconds:u,...p}){let h=i(),f=(0,d.useMantineTheme)();return(0,o.jsx)(c.UnstyledButton,{mod:[{active:t}],...h.getStyles("control",{className:(0,s.default)(f.activeClassName,a)}),...p,children:(0,o.jsx)(l.TimeValue,{value:e,format:r,amPmLabels:n,withSeconds:u})})}var u={control:"m_ac3f4d63"},p=e.i(232471),h=e.i(140763),f=e.i(481178),g=e.i(275519),x=e.i(433512),b=e.i(44091),v=e.i(391466),w=e.i(579560);let y={simpleGridProps:{cols:3,spacing:"xs"},format:"24h",amPmLabels:{am:"AM",pm:"PM"}},D=(0,f.createVarsResolver)((e,{size:t,radius:o})=>({root:{"--time-grid-fz":(0,x.getFontSize)(t),"--time-grid-radius":(0,x.getRadius)(o)}})),j=(0,g.factory)(e=>{let t=(0,b.useProps)("TimeGrid",y,e),{classNames:i,className:l,style:s,styles:c,unstyled:d,vars:f,data:g,value:x,defaultValue:j,onChange:P,format:T,withSeconds:k=!1,amPmLabels:M,allowDeselect:C,simpleGridProps:S,getControlProps:A,minTime:V,maxTime:L,disableTime:Y,disabled:E,attributes:H,...Z}=t,I=(0,v.useStyles)({name:"TimeGrid",classes:u,props:t,className:l,style:s,classNames:i,styles:c,unstyled:d,attributes:H,vars:f,varsResolver:D}),[N,_]=(0,w.useUncontrolled)({value:x,defaultValue:j,finalValue:null,onChange:P}),z=g.map(e=>{let t=E||!!V&&(0,n.timeToSeconds)(e)<(0,n.timeToSeconds)(V)||!!L&&(0,n.timeToSeconds)(e)>(0,n.timeToSeconds)(L)||(Array.isArray(Y)?!!Y.find(t=>(0,a.isSameTime)({time:e,compare:t,withSeconds:k})):!!Y?.(e));return(0,o.jsx)(m,{active:(0,a.isSameTime)({time:e,compare:N||"",withSeconds:k}),time:e,onClick:()=>{let t=C&&(null===N?e===N:(0,a.isSameTime)({time:e,compare:N,withSeconds:k}))?null:e;t!==N&&_(t)},format:T,amPmLabels:M,disabled:t,"data-disabled":t||void 0,withSeconds:k,...A?.(e)},e)});return(0,o.jsx)(r,{value:{getStyles:I},children:(0,o.jsx)(p.Box,{...I("root"),...Z,children:(0,o.jsx)(h.SimpleGrid,{...S,...I("simpleGrid",{className:S?.className,style:S?.style}),children:z})})})});j.displayName="@mantine/dates/TimeGrid",j.classes=u,j.varsResolver=D;var P=e.i(869921);let T={type:"configurator",component:function(e){return(0,o.jsx)(j,{data:(0,P.getTimeRange)({startTime:"10:00",endTime:"21:00",interval:"01:00"}),simpleGridProps:{type:"container",cols:{base:1,"180px":2,"320px":3},spacing:"xs"},...e})},code:`
import { getTimeRange, TimeGrid } from '@mantine/dates';


function Demo() {
  return (
    <TimeGrid
      data={getTimeRange({ startTime: '10:00', endTime: '21:00', interval: '01:00' })}
      simpleGridProps={{
        type: 'container',
        cols: { base: 1, '180px': 2, '320px': 3 },
        spacing: 'xs',
      }}
      {{props}}
    />
  );
}
`,centered:!0,maxWidth:360,controls:[{type:"segmented",prop:"format",data:[{value:"12h",label:"12h"},{value:"24h",label:"24h"}],libraryValue:"24h",initialValue:"24h"},{type:"boolean",prop:"withSeconds",libraryValue:"__",initialValue:!1},{type:"size",prop:"size",libraryValue:"sm",initialValue:"sm"},{type:"size",prop:"radius",libraryValue:"sm",initialValue:"sm"}]},k={type:"code",component:function(){return(0,o.jsx)(j,{data:(0,P.getTimeRange)({startTime:"09:00",endTime:"22:00",interval:"01:00"}),minTime:"11:00",maxTime:"18:00"})},code:`
import { getTimeRange, TimeGrid } from '@mantine/dates';

function Demo() {
  return (
    <TimeGrid
      data={getTimeRange({ startTime: '09:00', endTime: '22:00', interval: '01:00' })}
      minTime="11:00"
      maxTime="18:00"
    />
  );
}
`,centered:!0,maxWidth:360},M={type:"code",component:function(){return(0,o.jsx)(j,{data:(0,P.getTimeRange)({startTime:"09:00",endTime:"14:00",interval:"01:00"}),defaultValue:"11:00",allowDeselect:!0})},code:`
import { getTimeRange, TimeGrid } from '@mantine/dates';

function Demo() {
  return (
    <TimeGrid
      data={getTimeRange({ startTime: '09:00', endTime: '12:00', interval: '01:00' })}
      defaultValue="11:00"
      allowDeselect
    />
  );
}
`,centered:!0,maxWidth:360},C={type:"code",component:function(){return(0,o.jsx)(j,{data:(0,P.getTimeRange)({startTime:"09:00",endTime:"11:45",interval:"00:15"}),disableTime:["10:45","11:00","11:30"]})},code:`
import { getTimeRange, TimeGrid } from '@mantine/dates';

function Demo() {
  return (
    <TimeGrid
      data={getTimeRange({ startTime: '09:00', endTime: '11:45', interval: '00:15' })}
      disableTime={['10:45', '11:00', '11:30']}
    />
  );
}
`,centered:!0,maxWidth:360},S={type:"code",component:function(){return(0,o.jsx)(j,{data:(0,P.getTimeRange)({startTime:"09:00",endTime:"22:00",interval:"01:00"}),format:"12h",amPmLabels:{am:"पूर्वाह्न",pm:"अपराह्न"}})},code:`
import { getTimeRange, TimeGrid } from '@mantine/dates';

function Demo() {
  return (
    <TimeGrid
      data={getTimeRange({ startTime: '09:00', endTime: '22:00', interval: '01:00' })}
      format="12h"
      amPmLabels={{ am: 'पूर्वाह्न', pm: 'अपराह्न' }}
    />
  );
}
`,centered:!0,maxWidth:360},A={type:"code",component:function(){return(0,o.jsx)(j,{data:(0,P.getTimeRange)({startTime:"09:00",endTime:"22:00",interval:"01:00"}),disabled:!0})},code:`
import { getTimeRange, TimeGrid } from '@mantine/dates';

function Demo() {
  return (
    <TimeGrid
      data={getTimeRange({ startTime: '09:00', endTime: '22:00', interval: '01:00' })}
      disabled
    />
  );
}
`,centered:!0,maxWidth:360};var V=(0,t.__exportAll)({allowDeselect:()=>M,amPmLabels:()=>S,disableTime:()=>C,disabled:()=>A,minMax:()=>k,usage:()=>T});e.s(["TimeGridDemos",0,V],477451)},597746,e=>{"use strict";var t=e.i(191788),o=e.i(171481);let a=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M244,96a12,12,0,0,1-12,12H220v12a12,12,0,0,1-24,0V108H184a12,12,0,0,1,0-24h12V72a12,12,0,0,1,24,0V84h12A12,12,0,0,1,244,96ZM144,60h4v4a12,12,0,0,0,24,0V60h4a12,12,0,0,0,0-24h-4V32a12,12,0,0,0-24,0v4h-4a12,12,0,0,0,0,24Zm75.81,90.38A12,12,0,0,1,222,162.3,100,100,0,1,1,93.7,34a12,12,0,0,1,15.89,13.6A85.12,85.12,0,0,0,108,64a84.09,84.09,0,0,0,84,84,85.22,85.22,0,0,0,16.37-1.59A12,12,0,0,1,219.81,150.38ZM190,172A108.13,108.13,0,0,1,84,66,76,76,0,1,0,190,172Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M210.69,158.18A88,88,0,1,1,97.82,45.31,96.08,96.08,0,0,0,192,160,96.78,96.78,0,0,0,210.69,158.18Z",opacity:"0.2"}),t.createElement("path",{d:"M240,96a8,8,0,0,1-8,8H216v16a8,8,0,0,1-16,0V104H184a8,8,0,0,1,0-16h16V72a8,8,0,0,1,16,0V88h16A8,8,0,0,1,240,96ZM144,56h8v8a8,8,0,0,0,16,0V56h8a8,8,0,0,0,0-16h-8V32a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16Zm72.77,97a8,8,0,0,1,1.43,8A96,96,0,1,1,95.07,37.8a8,8,0,0,1,10.6,9.06A88.07,88.07,0,0,0,209.14,150.33,8,8,0,0,1,216.77,153Zm-19.39,14.88c-1.79.09-3.59.14-5.38.14A104.11,104.11,0,0,1,88,64c0-1.79,0-3.59.14-5.38A80,80,0,1,0,197.38,167.86Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M240,96a8,8,0,0,1-8,8H216v16a8,8,0,0,1-16,0V104H184a8,8,0,0,1,0-16h16V72a8,8,0,0,1,16,0V88h16A8,8,0,0,1,240,96ZM144,56h8v8a8,8,0,0,0,16,0V56h8a8,8,0,0,0,0-16h-8V32a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16Zm65.14,94.33A88.07,88.07,0,0,1,105.67,46.86a8,8,0,0,0-10.6-9.06A96,96,0,1,0,218.2,160.93a8,8,0,0,0-9.06-10.6Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M238,96a6,6,0,0,1-6,6H214v18a6,6,0,0,1-12,0V102H184a6,6,0,0,1,0-12h18V72a6,6,0,0,1,12,0V90h18A6,6,0,0,1,238,96ZM144,54h10V64a6,6,0,0,0,12,0V54h10a6,6,0,0,0,0-12H166V32a6,6,0,0,0-12,0V42H144a6,6,0,0,0,0,12Zm71.25,100.28a6,6,0,0,1,1.07,6A94,94,0,1,1,95.76,39.68a6,6,0,0,1,7.94,6.79A90.11,90.11,0,0,0,192,154a90.9,90.9,0,0,0,17.53-1.7A6,6,0,0,1,215.25,154.28Zm-14.37,11.34q-4.42.38-8.88.38A102.12,102.12,0,0,1,90,64q0-4.45.38-8.88a82,82,0,1,0,110.5,110.5Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M240,96a8,8,0,0,1-8,8H216v16a8,8,0,0,1-16,0V104H184a8,8,0,0,1,0-16h16V72a8,8,0,0,1,16,0V88h16A8,8,0,0,1,240,96ZM144,56h8v8a8,8,0,0,0,16,0V56h8a8,8,0,0,0,0-16h-8V32a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16Zm72.77,97a8,8,0,0,1,1.43,8A96,96,0,1,1,95.07,37.8a8,8,0,0,1,10.6,9.06A88.07,88.07,0,0,0,209.14,150.33,8,8,0,0,1,216.77,153Zm-19.39,14.88c-1.79.09-3.59.14-5.38.14A104.11,104.11,0,0,1,88,64c0-1.79,0-3.59.14-5.38A80,80,0,1,0,197.38,167.86Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M236,96a4,4,0,0,1-4,4H212v20a4,4,0,0,1-8,0V100H184a4,4,0,0,1,0-8h20V72a4,4,0,0,1,8,0V92h20A4,4,0,0,1,236,96ZM144,52h12V64a4,4,0,0,0,8,0V52h12a4,4,0,0,0,0-8H164V32a4,4,0,0,0-8,0V44H144a4,4,0,0,0,0,8Zm69.73,103.58a4,4,0,0,1,.71,4,92,92,0,1,1-118-118,4,4,0,0,1,5.29,4.54A93.18,93.18,0,0,0,100,64a92.1,92.1,0,0,0,92,92,93.18,93.18,0,0,0,17.91-1.74A4,4,0,0,1,213.73,155.58Zm-9.46,7.67A100,100,0,0,1,92.75,51.73,84,84,0,1,0,204.27,163.25Z"}))]]),n=t.forwardRef((e,n)=>t.createElement(o.default,{ref:n,...e,weights:a}));n.displayName="MoonStarsIcon",e.s(["MoonStarsIcon",0,n],597746)},313229,e=>{"use strict";var t=e.i(648863),o=e.i(502325),a=e.i(391398);let n={type:"configurator",component:e=>(0,a.jsx)(o.Switch,{defaultChecked:!0,...e}),code:`
import { Switch } from '@mantine/core';


function Demo() {
  return (
    <Switch
      defaultChecked
      {{props}}
    />
  );
}
`,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"withThumbIndicator",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"labelPosition",type:"segmented",data:[{value:"right",label:"Right"},{value:"left",label:"Left"}],initialValue:"right",libraryValue:"right"},{prop:"label",type:"string",initialValue:"I agree to sell my privacy",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1}]};var r=e.i(725695);let i={type:"code",component:function(){return(0,a.jsxs)(r.Group,{justify:"center",children:[(0,a.jsx)(o.Switch,{size:"xs",onLabel:"ON",offLabel:"OFF"}),(0,a.jsx)(o.Switch,{size:"sm",onLabel:"ON",offLabel:"OFF"}),(0,a.jsx)(o.Switch,{size:"md",onLabel:"ON",offLabel:"OFF"}),(0,a.jsx)(o.Switch,{size:"lg",onLabel:"ON",offLabel:"OFF"}),(0,a.jsx)(o.Switch,{size:"xl",onLabel:"ON",offLabel:"OFF"})]})},code:`
import { Switch, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Switch size="xs" onLabel="ON" offLabel="OFF" />
      <Switch size="sm" onLabel="ON" offLabel="OFF" />
      <Switch size="md" onLabel="ON" offLabel="OFF" />
      <Switch size="lg" onLabel="ON" offLabel="OFF" />
      <Switch size="xl" onLabel="ON" offLabel="OFF" />
    </Group>
  );
}
`};var l=e.i(191788),s=e.i(837048),c=e.i(869433);let d={type:"code",component:function(){let[e,t]=(0,l.useState)(!1);return(0,a.jsx)(o.Switch,{checked:e,onChange:e=>t(e.currentTarget.checked),color:"teal",size:"md",label:"Switch with thumb icon",thumbIcon:e?(0,a.jsx)(s.CheckIcon,{size:12,color:"var(--mantine-color-teal-6)"}):(0,a.jsx)(c.XIcon,{size:12,color:"var(--mantine-color-red-6)"})})},centered:!0,code:`
import { useState } from 'react';
import { Switch } from '@mantine/core';
import { CheckIcon, XIcon } from '@phosphor-icons/react';

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <Switch
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
      color="teal"
      size="md"
      label="Switch with thumb icon"
      thumbIcon={
        checked ? (
          <CheckIcon size={12} color="var(--mantine-color-teal-6)" />
        ) : (
          <XIcon size={12} color="var(--mantine-color-red-6)" />
        )
      }
    />
  );
}
`};var m=e.i(597746),u=e.i(915793);let p={type:"code",component:function(){return(0,a.jsx)(o.Switch,{size:"md",color:"dark.4",onLabel:(0,a.jsx)(u.SunIcon,{size:16,color:"var(--mantine-color-yellow-4)"}),offLabel:(0,a.jsx)(m.MoonStarsIcon,{size:16,color:"var(--mantine-color-blue-6)"})})},centered:!0,code:`
import { Switch } from '@mantine/core';
import { SunIcon, MoonStarsIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <Switch
      size="md"
      color="dark.4"
      onLabel={<SunIcon size={16} color="var(--mantine-color-yellow-4)" />}
      offLabel={<MoonStarsIcon size={16} color="var(--mantine-color-blue-6)" />}
    />
  );
}
`},h={type:"configurator",component:function(e){return(0,a.jsx)(o.Switch.Group,{defaultValue:["react"],...e,children:(0,a.jsxs)(r.Group,{mt:"xs",children:[(0,a.jsx)(o.Switch,{value:"react",label:"React"}),(0,a.jsx)(o.Switch,{value:"svelte",label:"Svelte"}),(0,a.jsx)(o.Switch,{value:"ng",label:"Angular"}),(0,a.jsx)(o.Switch,{value:"vue",label:"Vue"})]})})},code:`
import { Switch, Group } from '@mantine/core';

function Demo() {
  return (
    <Switch.Group
      defaultValue={['react']}
      {{props}}
    >
      <Group mt="xs">
        <Switch value="react" label="React" />
        <Switch value="svelte" label="Svelte" />
        <Switch value="ng" label="Angular" />
        <Switch value="vue" label="Vue" />
      </Group>
    </Switch.Group>
  );
}
`,centered:!0,controls:[{prop:"label",type:"string",initialValue:"Select your favorite framework/library",libraryValue:""},{prop:"description",type:"string",initialValue:"This is anonymous",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]};var f=e.i(805925);let g=`
import { Switch } from '@mantine/core';

function Demo() {
  return <Switch{{props}} label="Switch component" description="Switch description" error="Switch error" />;
}
`,x={type:"styles-api",data:f.SwitchStylesApi,component:function(e){return(0,a.jsx)(o.Switch,{...e,label:"Switch component",description:"Switch description",error:"Switch error"})},centered:!0,code:g};var b=e.i(431868);let v={type:"code",component:function(){return(0,a.jsx)(b.Tooltip,{label:"Switch tooltip",refProp:"rootRef",children:(0,a.jsx)(o.Switch,{label:"Switch with tooltip"})})},code:`
import { Switch, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Switch tooltip" refProp="rootRef">
      <Switch label="Switch with tooltip" />
    </Tooltip>
  );
}
`,centered:!0};var w={track:"m_976e9ab1",thumb:"m_976a5b3c"};let y={type:"code",component:function(){return(0,a.jsx)(o.Switch,{classNames:w,size:"lg"})},code:[{fileName:"Demo.module.css",code:`.track {
  transition:
    background-color 200ms ease,
    border-color 200ms ease;

  input:checked + & {
    background-color: var(--mantine-color-lime-5);
    border-color: var(--mantine-color-lime-5);

    & > .thumb {
      background-color: var(--mantine-color-black);

      &::before {
        background-color: var(--mantine-color-lime-5);
      }
    }
  }
}`,language:"scss"},{fileName:"Demo.tsx",code:`
import { Switch } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return <Switch classNames={classes} size="lg" />;
}
`,language:"tsx"}],centered:!0,defaultExpanded:!1},D={type:"code",component:function(){return(0,a.jsx)(o.Switch.Group,{defaultValue:["react"],maxSelectedValues:2,children:(0,a.jsxs)(r.Group,{children:[(0,a.jsx)(o.Switch,{value:"react",label:"React"}),(0,a.jsx)(o.Switch,{value:"svelte",label:"Svelte"}),(0,a.jsx)(o.Switch,{value:"ng",label:"Angular"}),(0,a.jsx)(o.Switch,{value:"vue",label:"Vue"})]})})},code:`
import { Group, Switch } from '@mantine/core';

function Demo() {
  return (
    <Switch.Group defaultValue={['react']} maxSelectedValues={2}>
      <Group>
        <Switch value="react" label="React" />
        <Switch value="svelte" label="Svelte" />
        <Switch value="ng" label="Angular" />
        <Switch value="vue" label="Vue" />
      </Group>
    </Switch.Group>
  );
}
`};var j=e.i(671640);let P={type:"code",centered:!0,component:function(){return(0,a.jsxs)(j.Stack,{children:[(0,a.jsx)(o.Switch,{checked:!1,value:"value",label:"Default switch"}),(0,a.jsx)(o.Switch,{checked:!0,value:"value",label:"Checked switch"}),(0,a.jsx)(o.Switch,{disabled:!0,value:"value",label:"Disabled switch"}),(0,a.jsx)(o.Switch,{checked:!0,disabled:!0,value:"value",label:"Disabled checked switch"})]})},code:`
import { Switch, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Switch value="value" label="Default switch" />
      <Switch checked value="value" label="Checked switch" />
      <Switch disabled value="value" label="Disabled switch" />
      <Switch checked disabled value="value" label="Disabled checked switch" />
    </Stack>
  );
}
`},T={type:"code",centered:!0,component:function(){return(0,a.jsx)(o.Switch.Group,{disabled:!0,label:"Select your favorite framework/library",description:"This is anonymous",children:(0,a.jsxs)(r.Group,{mt:"xs",children:[(0,a.jsx)(o.Switch,{value:"react",label:"React"}),(0,a.jsx)(o.Switch,{value:"svelte",label:"Svelte"}),(0,a.jsx)(o.Switch,{value:"ng",label:"Angular"}),(0,a.jsx)(o.Switch,{value:"vue",label:"Vue"})]})})},code:`
import { Switch, Group } from '@mantine/core';

function Demo() {
  return (
    <Switch.Group
      disabled
      label="Select your favorite framework/library"
      description="This is anonymous"
    >
      <Group mt="xs">
        <Switch value="react" label="React" />
        <Switch value="svelte" label="Svelte" />
        <Switch value="ng" label="Angular" />
        <Switch value="vue" label="Vue" />
      </Group>
    </Switch.Group>
  );
}
`};var k=(0,t.__exportAll)({configurator:()=>n,groupConfigurator:()=>h,groupDisabled:()=>T,iconLabels:()=>p,labels:()=>i,maxSelectedValues:()=>D,states:()=>P,styles:()=>y,stylesApi:()=>x,thumbIcon:()=>d,tooltip:()=>v});e.s(["SwitchDemos",0,k],313229)},489707,e=>{"use strict";var t=e.i(391398),o=e.i(38856),a=e.i(271706),n=e.i(896399),r=e.i(969233),i=e.i(635487),l=e.i(477451),s=e.i(508780),c=e.i(313229),d=e.i(290619),m=e.i(224331),u=e.i(3214);e.i(603441);var p=e.i(62558);e.i(457450);var h=e.i(418026);let f=(0,p.Layout)(h.MDX_DATA.Changelog800);function g(e){let p={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.useMDXComponents)(),...e.components},{Demo:h,InstallScript:f,SponsorButton:g}=p;return h||x("Demo",!0),f||x("InstallScript",!0),g||x("SponsorButton",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(p.h2,{id:"support-mantine-development",children:"Support Mantine development"}),"\n",(0,t.jsxs)(p.p,{children:["You can now sponsor Mantine development with ",(0,t.jsx)(p.a,{href:"https://opencollective.com/mantinedev",children:"OpenCollective"}),".\nAll funds are used to improve Mantine and create new features and components."]}),"\n",(0,t.jsx)(g,{}),"\n",(0,t.jsx)(p.h2,{id:"migration-guide",children:"Migration guide"}),"\n",(0,t.jsxs)(p.p,{children:["This changelog covers breaking changes and new features in Mantine 8.0.\nTo migrate your application to Mantine 8.0, follow ",(0,t.jsx)(p.a,{href:"/guides/7x-to-8x",children:"7.x → 8.x migration guide"}),"."]}),"\n",(0,t.jsx)(p.h2,{id:"granular-global-styles-exports",children:"Granular global styles exports"}),"\n",(0,t.jsx)(p.p,{children:"Global styles are now split between 3 files:"}),"\n",(0,t.jsxs)(p.ul,{children:["\n",(0,t.jsxs)(p.li,{children:[(0,t.jsx)(p.code,{children:"baseline.css"})," – a minimal CSS reset, sets ",(0,t.jsx)(p.code,{children:"box-sizing: border-box"})," and changes font properties"]}),"\n",(0,t.jsxs)(p.li,{children:[(0,t.jsx)(p.code,{children:"default-css-variables.css"})," – contains all CSS variables generated from the default theme"]}),"\n",(0,t.jsxs)(p.li,{children:[(0,t.jsx)(p.code,{children:"global.css"})," – global classes used in Mantine components"]}),"\n"]}),"\n",(0,t.jsxs)(p.p,{children:["If you previously imported individual styles from ",(0,t.jsx)(p.code,{children:"@mantine/core"})," package, you need to update imports\nto use new files:"]}),"\n",(0,t.jsx)(p.pre,{children:(0,t.jsx)(p.code,{className:"language-tsx",children:"import '@mantine/core/styles/baseline.css';\nimport '@mantine/core/styles/default-css-variables.css';\nimport '@mantine/core/styles/global.css';\n"})}),"\n",(0,t.jsxs)(p.p,{children:["If you imported ",(0,t.jsx)(p.code,{children:"@mantine/core/styles.css"}),", no changes are required –\nall new files are already included in ",(0,t.jsx)(p.code,{children:"styles.css"}),"."]}),"\n",(0,t.jsx)(p.h2,{id:"menu-with-submenus",children:"Menu with submenus"}),"\n",(0,t.jsxs)(p.p,{children:[(0,t.jsx)(p.a,{href:"/core/menu",children:"Menu"})," component now supports submenus:"]}),"\n",(0,t.jsx)(h,{data:d.MenuDemos.sub,demoProps:{defaultExpanded:!1}}),"\n",(0,t.jsx)(p.h2,{id:"popover-hidedetached",children:"Popover hideDetached"}),"\n",(0,t.jsxs)(p.p,{children:[(0,t.jsx)(p.a,{href:"/core/popover",children:"Popover"})," component now supports ",(0,t.jsx)(p.code,{children:"hideDetached"})," prop to configure how the dropdown behaves when the target\nelement is hidden with styles (",(0,t.jsx)(p.code,{children:"display: none"}),", ",(0,t.jsx)(p.code,{children:"visibility: hidden"}),", etc.),\nremoved from the DOM, or when the target element is scrolled out of the viewport."]}),"\n",(0,t.jsxs)(p.p,{children:["By default, ",(0,t.jsx)(p.code,{children:"hideDetached"})," is enabled – the dropdown is hidden with the target element.\nYou can change this behavior with ",(0,t.jsx)(p.code,{children:"hideDetached={false}"}),". To see the difference, try to scroll\nthe root element of the following demo:"]}),"\n",(0,t.jsx)(h,{data:m.PopoverDemos.hideDetached,demoProps:{defaultExpanded:!1}}),"\n",(0,t.jsx)(p.h2,{id:"date-values-as-strings",children:"Date values as strings"}),"\n",(0,t.jsxs)(p.p,{children:["All ",(0,t.jsx)(p.code,{children:"@mantine/dates"})," components now use date strings in ",(0,t.jsx)(p.code,{children:"YYYY-MM-DD"})," or ",(0,t.jsx)(p.code,{children:"YYYY-MM-DD HH:mm:ss"}),"\nformat instead of ",(0,t.jsx)(p.code,{children:"Date"})," objects. This change was made to resolve issues related to timezones\n– now the output of all ",(0,t.jsx)(p.code,{children:"@mantine/dates"})," components does not include any timezone-specific information.\nFollow ",(0,t.jsx)(p.a,{href:"/guides/7x-to-8x",children:"7.x → 8.x migration guide"})," to learn how to update the code to use new string values."]}),"\n",(0,t.jsxs)(p.p,{children:["Example of using ",(0,t.jsx)(p.a,{href:"/dates/date-picker",children:"DatePicker"})," component with string values:"]}),"\n",(0,t.jsx)(h,{data:a.DatePickerDemos.usage}),"\n",(0,t.jsx)(p.h2,{id:"datesprovider-timezone",children:"DatesProvider timezone"}),"\n",(0,t.jsxs)(p.p,{children:[(0,t.jsx)(p.code,{children:"DatesProvider"})," component no longer supports ",(0,t.jsx)(p.code,{children:"timezone"})," option – all ",(0,t.jsx)(p.code,{children:"@mantine/dates"}),"\ncomponents now use strings in ",(0,t.jsx)(p.code,{children:"YYYY-MM-DD HH:mm:ss"})," format as values and do not contain\ntimezone information."]}),"\n",(0,t.jsxs)(p.p,{children:["If you need to handle timezones in your application, you can use a dedicated dates library\n(",(0,t.jsx)(p.a,{href:"https://day.js.org/",children:"dayjs"}),", ",(0,t.jsx)(p.a,{href:"https://moment.github.io/luxon/#/",children:"luxon"}),", ",(0,t.jsx)(p.a,{href:"https://date-fns.org/",children:"date-fns"}),")\nto update timezone values."]}),"\n",(0,t.jsxs)(p.p,{children:["Example of using Mantine components with ",(0,t.jsx)(p.a,{href:"https://day.js.org/",children:"dayjs"}),":"]}),"\n",(0,t.jsx)(p.pre,{children:(0,t.jsx)(p.code,{className:"language-tsx",children:"import dayjs from 'dayjs';\nimport { DatePicker } from '@mantine/dates';\n\nfunction Demo() {\n  const [value, setValue] = useState<string | null>('2022-08-21');\n\n  // Mantine components use strings as values, you can pass these\n  // strings to a dates library of your choice to assign timezone\n  const dateWithTimeZone = dayjs(value).tz(\"America/Toronto\").toDate();\n\n  return <DatePicker value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,t.jsx)(p.h2,{id:"timepicker-component",children:"TimePicker component"}),"\n",(0,t.jsxs)(p.p,{children:["New ",(0,t.jsx)(p.a,{href:"/dates/time-picker",children:"TimePicker"})," component is an alternative to\n",(0,t.jsx)(p.a,{href:"/dates/time-input",children:"TimeInput"})," that offers more features. It supports 24-hour and 12-hour formats,\ndropdown with hours, minutes and seconds, and more."]}),"\n",(0,t.jsx)(h,{data:r.TimePickerDemos.withDropdown}),"\n",(0,t.jsx)(p.h2,{id:"datetimepicker-component-changes",children:"DateTimePicker component changes"}),"\n",(0,t.jsxs)(p.p,{children:[(0,t.jsx)(p.a,{href:"/dates/date-time-picker",children:"DateTimePicker"})," component now uses ",(0,t.jsx)(p.a,{href:"/dates/time-picker",children:"TimePicker"})," under\nthe hood instead of ",(0,t.jsx)(p.a,{href:"/dates/time-input",children:"TimeInput"}),". You can now use all ",(0,t.jsx)(p.a,{href:"/dates/time-picker",children:"TimePicker"}),"\nfeatures with ",(0,t.jsx)(p.a,{href:"/dates/date-time-picker",children:"DateTimePicker"})," component."]}),"\n",(0,t.jsxs)(p.p,{children:["Prop ",(0,t.jsx)(p.code,{children:"timeInputProps"})," is no longer available, to pass props down to the underlying ",(0,t.jsx)(p.a,{href:"/dates/time-picker",children:"TimePicker"}),"\nyou need to use ",(0,t.jsx)(p.code,{children:"timePickerProps"})," prop."]}),"\n",(0,t.jsxs)(p.p,{children:["Example of enabling dropdown and setting ",(0,t.jsx)(p.code,{children:"12h"})," format for time picker:"]}),"\n",(0,t.jsx)(h,{data:n.DateTimePickerDemos.timePickerProps}),"\n",(0,t.jsx)(p.h2,{id:"timevalue-component",children:"TimeValue component"}),"\n",(0,t.jsxs)(p.p,{children:["New ",(0,t.jsx)(p.a,{href:"/dates/time-value",children:"TimeValue"})," component can be used to display a formatted time string\nwith similar formatting options to ",(0,t.jsx)(p.a,{href:"/dates/time-picker",children:"TimePicker"})," component."]}),"\n",(0,t.jsx)(h,{data:i.TimeValueDemos.usage}),"\n",(0,t.jsx)(p.h2,{id:"timegrid-component",children:"TimeGrid component"}),"\n",(0,t.jsxs)(p.p,{children:["New ",(0,t.jsx)(p.a,{href:"/dates/time-grid",children:"TimeGrid"})," component allows to capture time value from the user with a\npredefined set of time slots:"]}),"\n",(0,t.jsx)(h,{data:l.TimeGridDemos.usage}),"\n",(0,t.jsx)(p.h2,{id:"heatmap-component",children:"Heatmap component"}),"\n",(0,t.jsxs)(p.p,{children:["New ",(0,t.jsx)(p.a,{href:"/charts/heatmap",children:"Heatmap"})," component allows to display data in a calendar heatmap format:"]}),"\n",(0,t.jsx)(h,{data:u.HeatmapDemos.tooltip}),"\n",(0,t.jsx)(p.h2,{id:"codehighlight-changes",children:"CodeHighlight changes"}),"\n",(0,t.jsxs)(p.p,{children:[(0,t.jsx)(p.a,{href:"/x/code-highlight",children:"@mantine/code-highlight"})," package no longer depends on\n",(0,t.jsx)(p.a,{href:"https://highlightjs.org/",children:"highlight.js"}),". Instead, it now provides a new API based\non adapters that allows using any syntax highlighter of your choice. Out of the, box\n",(0,t.jsx)(p.code,{children:"@mantine/code-highlight"})," provides adapters for ",(0,t.jsx)(p.a,{href:"https://shiki.matsu.io/",children:"shiki"})," and\n",(0,t.jsx)(p.a,{href:"https://highlightjs.org/",children:"highlight.js"}),"."]}),"\n",(0,t.jsxs)(p.p,{children:["To learn about the migration process and how to use the new adapters API, check the\nupdated ",(0,t.jsx)(p.a,{href:"/x/code-highlight",children:"CodeHighlight documentation"})," and ",(0,t.jsx)(p.a,{href:"/guides/7x-to-8x",children:"7.x → 8.x migration guide"}),"."]}),"\n",(0,t.jsx)(p.h2,{id:"codehighlight-with-shiki",children:"CodeHighlight with shiki"}),"\n",(0,t.jsxs)(p.p,{children:["You can now use ",(0,t.jsx)(p.a,{href:"/x/code-highlight",children:"CodeHighlight"})," component with ",(0,t.jsx)(p.a,{href:"https://shiki.matsu.io/",children:"shiki"}),"."]}),"\n",(0,t.jsxs)(p.p,{children:[(0,t.jsx)(p.a,{href:"https://shiki.matsu.io/",children:"Shiki"})," library provides the most advanced syntax highlighting\nfor TypeScript and CSS/Sass code. It uses textmate grammars to highlight code (same as in VSCode).\nShiki adapter is recommended if you need to highlight advanced TypeScript (generics, jsx nested in props) or CSS code (custom syntaxes, newest features).\nShiki adapter is used for all code highlighting in Mantine documentation."]}),"\n",(0,t.jsxs)(p.p,{children:["To use shiki adapter, you need to install ",(0,t.jsx)(p.code,{children:"shiki"})," package:"]}),"\n",(0,t.jsx)(f,{packages:"shiki"}),"\n",(0,t.jsxs)(p.p,{children:["Then wrap your app with ",(0,t.jsx)(p.code,{children:"CodeHighlightAdapterProvider"})," and provide ",(0,t.jsx)(p.code,{children:"createShikiAdapter"})," as ",(0,t.jsx)(p.code,{children:"adapter"})," prop:"]}),"\n",(0,t.jsx)(p.pre,{children:(0,t.jsx)(p.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\nimport { CodeHighlightAdapterProvider, createShikiAdapter } from '@mantine/code-highlight';\n\n// Shiki requires async code to load the highlighter\nasync function loadShiki() {\n  const { createHighlighter } = await import('shiki');\n  const shiki = await createHighlighter({\n    langs: ['tsx', 'scss', 'html', 'bash', 'json'],\n    themes: [],\n  });\n\n  return shiki;\n}\n\nconst shikiAdapter = createShikiAdapter(loadShiki);\n\nfunction App() {\n  return (\n    <MantineProvider>\n      <CodeHighlightAdapterProvider adapter={shikiAdapter}>\n        {/* Your app here */}\n      </CodeHighlightAdapterProvider>\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,t.jsxs)(p.p,{children:["After that, you can use ",(0,t.jsx)(p.code,{children:"CodeHighlight"})," component in your application:"]}),"\n",(0,t.jsx)(h,{data:s.CodeHighlightDemos.usage}),"\n",(0,t.jsx)(p.h2,{id:"carousel-changes",children:"Carousel changes"}),"\n",(0,t.jsxs)(p.p,{children:[(0,t.jsx)(p.a,{href:"/x/carousel",children:"@mantine/carousel"})," package was updated to use the latest version of\n",(0,t.jsx)(p.code,{children:"embla-carousel-react"})," package. This update includes breaking changes:"]}),"\n",(0,t.jsxs)(p.ul,{children:["\n",(0,t.jsxs)(p.li,{children:[(0,t.jsx)(p.code,{children:"speed"})," and ",(0,t.jsx)(p.code,{children:"draggable"})," props were removed – they are no longer supported by ",(0,t.jsx)(p.code,{children:"embla-carousel-react"})]}),"\n",(0,t.jsxs)(p.li,{children:["It is now required to install both ",(0,t.jsx)(p.code,{children:"embla-carousel"})," and ",(0,t.jsx)(p.code,{children:"embla-carousel-react"})," packages explicitly"]}),"\n",(0,t.jsxs)(p.li,{children:[(0,t.jsx)(p.code,{children:"useAnimationOffsetEffect"})," hook was removed – the issue it addressed was fixed in ",(0,t.jsx)(p.code,{children:"embla-carousel-react"})]}),"\n",(0,t.jsxs)(p.li,{children:[(0,t.jsx)(p.code,{children:"Embla"})," type export was removed, you should use ",(0,t.jsx)(p.code,{children:"EmblaCarouselType"})," from ",(0,t.jsx)(p.code,{children:"embla-carousel"})," instead"]}),"\n",(0,t.jsxs)(p.li,{children:["Props that were previously passed to embla are now grouped under ",(0,t.jsx)(p.code,{children:"emblaOptions"})," prop"]}),"\n"]}),"\n",(0,t.jsxs)(p.p,{children:["Follow the ",(0,t.jsx)(p.a,{href:"/guides/7x-to-8x",children:"7.x → 8.x migration guide"})," to update your application to use the latest version of ",(0,t.jsx)(p.code,{children:"@mantine/carousel"}),"."]}),"\n",(0,t.jsx)(p.h2,{id:"switch-withthumbindicator",children:"Switch withThumbIndicator"}),"\n",(0,t.jsxs)(p.p,{children:[(0,t.jsx)(p.a,{href:"/core/switch",children:"Switch"})," component styles were updated to include indicator inside the thumb.\nYou can change it by setting ",(0,t.jsx)(p.code,{children:"withThumbIndicator"})," prop:"]}),"\n",(0,t.jsx)(h,{data:c.SwitchDemos.configurator}),"\n",(0,t.jsx)(p.h2,{id:"theme-types-augmentation",children:"Theme types augmentation"}),"\n",(0,t.jsxs)(p.p,{children:["You can now augment ",(0,t.jsx)(p.code,{children:"spacing"}),", ",(0,t.jsx)(p.code,{children:"radius"}),", ",(0,t.jsx)(p.code,{children:"breakpoints"}),", ",(0,t.jsx)(p.code,{children:"fontSizes"}),", ",(0,t.jsx)(p.code,{children:"lineHeights"}),",\nand ",(0,t.jsx)(p.code,{children:"shadows"})," types. To learn more about this feature, follow ",(0,t.jsx)(p.a,{href:"/guides/typescript/#theme-object-declarations",children:"this guide"}),"."]}),"\n",(0,t.jsxs)(p.p,{children:["Example of types augmentation for ",(0,t.jsx)(p.code,{children:"spacing"})," and ",(0,t.jsx)(p.code,{children:"radius"}),":"]}),"\n",(0,t.jsx)(p.pre,{children:(0,t.jsx)(p.code,{className:"language-tsx",children:"import {\n  DefaultMantineSize,\n  MantineThemeSizesOverride,\n} from '@mantine/core';\n\ntype ExtendedCustomSpacing =\n  | 'xxl'\n  | 'xxxs'\n  | DefaultMantineSize;\n\ntype ExtendedCustomRadius =\n  | 'xxs'\n  | DefaultMantineSize;\n\ndeclare module '@mantine/core' {\n  export interface MantineThemeSizesOverride {\n    spacing: Record<ExtendedCustomSpacing, string>;\n    radius: Record<ExtendedCustomRadius, string>;\n  }\n}\n"})}),"\n",(0,t.jsx)(p.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,t.jsxs)(p.ul,{children:["\n",(0,t.jsxs)(p.li,{children:[(0,t.jsx)(p.a,{href:"/core/kbd",children:"Kbd"})," component now supports ",(0,t.jsx)(p.code,{children:"size"})," prop"]}),"\n",(0,t.jsxs)(p.li,{children:[(0,t.jsx)(p.a,{href:"/dates/date-input",children:"DateInput"})," component no longer supports ",(0,t.jsx)(p.code,{children:"preserveTime"})," prop, use different component to capture time values"]}),"\n",(0,t.jsxs)(p.li,{children:[(0,t.jsx)(p.a,{href:"/core/scroll-area",children:"ScrollArea"})," component no longer has forced ",(0,t.jsx)(p.code,{children:"display: table"})," styles on the wrapper element of the content. It also now supports ",(0,t.jsx)(p.code,{children:"content"})," Styles API selector to apply styles to the content element."]}),"\n",(0,t.jsxs)(p.li,{children:[(0,t.jsx)(p.a,{href:"/core/image",children:"ImageIcon"})," component no longer includes ",(0,t.jsx)(p.code,{children:"flex: 0"})," styles by default"]}),"\n",(0,t.jsxs)(p.li,{children:[(0,t.jsx)(p.a,{href:"/core/segmented-control",children:"SegmentedControl"})," default height values were changed to match sizes of ",(0,t.jsx)(p.a,{href:"/core/input",children:"Input"})," components"]}),"\n",(0,t.jsxs)(p.li,{children:["Type of ",(0,t.jsx)(p.code,{children:"wrapperProps"})," prop in all components that support it (",(0,t.jsx)(p.code,{children:"Checkbox"}),", ",(0,t.jsx)(p.code,{children:"Radio"}),", ",(0,t.jsx)(p.code,{children:"Chip"}),", most inputs) was changed to more strict type"]}),"\n",(0,t.jsxs)(p.li,{children:[(0,t.jsx)(p.a,{href:"/core/portal",children:"Portal"})," component now has ",(0,t.jsx)(p.code,{children:"reuseTargetNode"})," prop enabled by default"]}),"\n",(0,t.jsxs)(p.li,{children:[(0,t.jsx)(p.a,{href:"/form/use-form",children:"use-form"})," ",(0,t.jsx)(p.code,{children:"setFieldValue"})," handler types are now stricter"]}),"\n",(0,t.jsxs)(p.li,{children:[(0,t.jsx)(p.a,{href:"/core/menu",children:"Menu.Item"})," no longer has ",(0,t.jsx)(p.code,{children:"data-hovered"})," attribute, use ",(0,t.jsx)(p.code,{children:":hover"})," and ",(0,t.jsx)(p.code,{children:":focus"})," selectors instead to apply styles"]}),"\n",(0,t.jsxs)(p.li,{children:[(0,t.jsx)(p.a,{href:"/hooks/use-os",children:"use-os"})," now supports Chrome OS detection, its return type now includes ",(0,t.jsx)(p.code,{children:"chromeos"})," value in the union"]}),"\n",(0,t.jsxs)(p.li,{children:["The default eye dropper icon of ",(0,t.jsx)(p.a,{href:"/core/color-input",children:"ColorInput"})," component was updated"]}),"\n",(0,t.jsxs)(p.li,{children:["The default spacing of ",(0,t.jsx)(p.a,{href:"/core/notification",children:"Notification"})," component was increased"]}),"\n",(0,t.jsxs)(p.li,{children:[(0,t.jsx)(p.a,{href:"/core/code",children:"CodeIcon"})," component color styles were updated"]}),"\n"]})]})}function x(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,t.jsx)(f,{...e,children:(0,t.jsx)(g,{...e})})}])},839247,(e,t,o)=>{let a="/changelog/8-0-0";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(489707)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([a])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);