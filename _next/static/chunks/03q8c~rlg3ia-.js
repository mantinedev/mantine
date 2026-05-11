(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,334816,e=>{"use strict";e.s(["createEventHandler",0,function(e,t){return a=>{e?.(a),t?.(a)}}])},369974,e=>{"use strict";var t=e.i(44091),a=e.i(392862);let[r,n]=(0,e.i(386179).createSafeContext)("HoverCard component was not found in the tree");var o=e.i(191788),l=e.i(391398),s=e.i(458272);let i=(0,o.createContext)({withinGroup:!1}),d={openDelay:0,closeDelay:0};function c(e){let{openDelay:a,closeDelay:r,children:n}=(0,t.useProps)("HoverCardGroup",d,e);return(0,l.jsx)(i,{value:{withinGroup:!0},children:(0,l.jsx)(s.FloatingDelayGroup,{delay:{open:a,close:r},children:n})})}c.displayName="@mantine/core/HoverCardGroup",c.extend=e=>e;var u=e.i(334816);function m(e){let{children:r,onMouseEnter:s,onMouseLeave:d,...c}=(0,t.useProps)("HoverCardDropdown",null,e),m=n();if((0,o.use)(i).withinGroup&&m.getFloatingProps&&m.floating){let e=m.getFloatingProps();return(0,l.jsx)(a.Popover.Dropdown,{ref:m.floating,...e,onMouseEnter:(0,u.createEventHandler)(s,e.onMouseEnter),onMouseLeave:(0,u.createEventHandler)(d,e.onMouseLeave),...c,children:r})}let v=(0,u.createEventHandler)(s,m.openDropdown),p=(0,u.createEventHandler)(d,m.closeDropdown);return(0,l.jsx)(a.Popover.Dropdown,{onMouseEnter:v,onMouseLeave:p,...c,children:r})}m.displayName="@mantine/core/HoverCardDropdown";var v=e.i(409703);let p={refProp:"ref"};function g(e){let{children:r,refProp:s,eventPropsWrapperName:d,...c}=(0,t.useProps)("HoverCardTarget",p,e),m=(0,v.getSingleElementChild)(r);if(!m)throw Error("HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let g=n();if((0,o.use)(i).withinGroup&&g.getReferenceProps&&g.reference){let e=g.getReferenceProps();return(0,l.jsx)(a.Popover.Target,{refProp:s,...c,children:(0,o.cloneElement)(m,d?{[d]:{...e,ref:g.reference}}:{...e,ref:g.reference})})}let f={onMouseEnter:(0,u.createEventHandler)(m.props.onMouseEnter,g.openDropdown),onMouseLeave:(0,u.createEventHandler)(m.props.onMouseLeave,g.closeDropdown)};return(0,l.jsx)(a.Popover.Target,{refProp:s,...c,children:(0,o.cloneElement)(m,d?{[d]:f}:f)})}g.displayName="@mantine/core/HoverCardTarget";var f=e.i(107315);let h={openDelay:0,closeDelay:150,initiallyOpened:!1};function y(e){let{children:n,onOpen:d,onClose:c,openDelay:u,closeDelay:m,initiallyOpened:v,...p}=(0,t.useProps)("HoverCard",h,e),g=function(e){let[t,a]=(0,o.useState)(e.defaultOpened),r="boolean"==typeof e.opened?e.opened:t,n=(0,o.use)(i).withinGroup,l=(0,f.useId)(),d=(0,o.useRef)(-1),c=(0,o.useRef)(-1),u=(0,o.useCallback)(()=>{window.clearTimeout(d.current),window.clearTimeout(c.current)},[]),m=(0,o.useCallback)(t=>{a(t),t?(h(l),e.onOpen?.()):e.onClose?.()},[l,e.onOpen,e.onClose]),{context:v,refs:p}=(0,s.useFloating)({open:r,onOpenChange:m}),{delay:g,setCurrentId:h}=(0,s.useDelayGroup)(v,{id:l}),{getReferenceProps:y,getFloatingProps:x}=(0,s.useInteractions)([(0,s.useHover)(v,{enabled:!0,delay:n?g:{open:e.openDelay,close:e.closeDelay}}),(0,s.useRole)(v,{role:"dialog"}),(0,s.useDismiss)(v,{enabled:n})]),b=(0,o.useCallback)(()=>{n||(u(),0===e.openDelay||void 0===e.openDelay?m(!0):d.current=window.setTimeout(()=>m(!0),e.openDelay))},[n,u,e.openDelay,m]),S=(0,o.useCallback)(()=>{n||(u(),0===e.closeDelay||void 0===e.closeDelay?m(!1):c.current=window.setTimeout(()=>m(!1),e.closeDelay))},[n,u,e.closeDelay,m]);return(0,o.useEffect)(()=>()=>u(),[u]),{opened:r,reference:p.setReference,floating:p.setFloating,getReferenceProps:y,getFloatingProps:x,openDropdown:b,closeDropdown:S}}({openDelay:u,closeDelay:m,defaultOpened:v,onOpen:d,onClose:c});return(0,l.jsx)(r,{value:{openDropdown:g.openDropdown,closeDropdown:g.closeDropdown,getReferenceProps:g.getReferenceProps,getFloatingProps:g.getFloatingProps,reference:g.reference,floating:g.floating},children:(0,l.jsx)(a.Popover,{...p,opened:g.opened,__staticSelector:"HoverCard",children:n})})}y.displayName="@mantine/core/HoverCard",y.Target=g,y.Dropdown=m,y.Group=c,y.extend=e=>e,e.s(["HoverCard",0,y],369974)},20035,e=>{"use strict";var t=e.i(481178),a=e.i(44091),r=e.i(391466),n=e.i(83353),o=e.i(275519),l=e.i(232471);let[s,i]=(0,e.i(386179).createSafeContext)("Grid component was not found in tree");var d={container:"m_8478a6da",root:"m_410352e9",inner:"m_dee7bd2f",col:"m_96bdd299"},c=e.i(76112),u=e.i(931718),m=e.i(230780),v=e.i(496766),p=e.i(951254),g=e.i(871346),f=e.i(391398);let h=(e,t)=>"content"===e?"auto":"auto"===e?"0rem":e?e===t?"100%":`calc(${100*e/t}% - ${(t-e)/t} * var(--grid-column-gap))`:void 0,y=(e,t,a)=>a||"auto"===e?"100%":"content"===e?"unset":h(e,t),x=(e,t)=>{if(e)return"auto"===e||t?"1":"auto"},b=(e,t)=>0===e?"0":e?`calc(${100*e/t}% + ${e/t} * var(--grid-column-gap))`:void 0;function S({span:e,order:t,offset:a,align:r,selector:n}){let o=(0,p.useMantineTheme)(),l=i(),s=l.breakpoints||o.breakpoints,d=(0,v.getBaseValue)(e),D=void 0===d?12:d,w=(0,u.filterProps)({"--col-order":(0,v.getBaseValue)(t)?.toString(),"--col-flex-grow":x(D,l.grow),"--col-flex-basis":h(D,l.columns),"--col-width":"content"===D?"auto":void 0,"--col-max-width":y(D,l.columns,l.grow),"--col-offset":b((0,v.getBaseValue)(a),l.columns),"--col-align-self":(0,v.getBaseValue)(r)}),C=(0,c.keys)(s).reduce((n,o)=>(n[o]||(n[o]={}),"object"==typeof t&&void 0!==t[o]&&(n[o]["--col-order"]=t[o]?.toString()),"object"==typeof e&&void 0!==e[o]&&(n[o]["--col-flex-grow"]=x(e[o],l.grow),n[o]["--col-flex-basis"]=h(e[o],l.columns),n[o]["--col-width"]="content"===e[o]?"auto":void 0,n[o]["--col-max-width"]=y(e[o],l.columns,l.grow)),"object"==typeof a&&void 0!==a[o]&&(n[o]["--col-offset"]=b(a[o],l.columns)),"object"==typeof r&&void 0!==r[o]&&(n[o]["--col-align-self"]=r[o]),n),{}),E=(0,m.getSortedBreakpoints)((0,c.keys)(C),s).filter(e=>(0,c.keys)(C[e.value]).length>0).map(e=>({query:"container"===l.type?`mantine-grid (min-width: ${s[e.value]})`:`(min-width: ${s[e.value]})`,styles:C[e.value]}));return(0,f.jsx)(g.InlineStyles,{styles:w,media:"container"===l.type?void 0:E,container:"container"===l.type?E:void 0,selector:n})}var D=e.i(56206);let w={span:12},C=(0,o.factory)(e=>{let{classNames:t,className:r,style:o,styles:s,vars:d,span:c,order:u,offset:m,align:v,...p}=(0,a.useProps)("GridCol",w,e),g=i(),h=(0,n.useRandomClassName)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(S,{selector:`.${h}`,span:c,order:u,offset:m,align:v}),(0,f.jsx)(l.Box,{...g.getStyles("col",{className:(0,D.default)(r,h),style:o,classNames:t,styles:s}),...p})]})});C.classes=d,C.displayName="@mantine/core/GridCol";var E=e.i(433512);function j({gap:e,rowGap:t,columnGap:a,selector:r,breakpoints:n,type:o}){let l=(0,p.useMantineTheme)(),s=n||l.breakpoints,i=(0,u.filterProps)({"--grid-gap":(0,E.getSpacing)((0,v.getBaseValue)(e)),"--grid-row-gap":(0,E.getSpacing)((0,v.getBaseValue)(t)),"--grid-column-gap":(0,E.getSpacing)((0,v.getBaseValue)(a))}),d=(0,c.keys)(s).reduce((r,n)=>(r[n]||(r[n]={}),"object"==typeof e&&void 0!==e[n]&&(r[n]["--grid-gap"]=(0,E.getSpacing)(e[n])),"object"==typeof t&&void 0!==t[n]&&(r[n]["--grid-row-gap"]=(0,E.getSpacing)(t[n])),"object"==typeof a&&void 0!==a[n]&&(r[n]["--grid-column-gap"]=(0,E.getSpacing)(a[n])),r),{}),h=(0,m.getSortedBreakpoints)((0,c.keys)(d),s).filter(e=>(0,c.keys)(d[e.value]).length>0).map(e=>({query:"container"===o?`mantine-grid (min-width: ${s[e.value]})`:`(min-width: ${s[e.value]})`,styles:d[e.value]}));return(0,f.jsx)(g.InlineStyles,{styles:i,media:"container"===o?void 0:h,container:"container"===o?h:void 0,selector:r})}let T={gap:"md",columns:12},k=(0,t.createVarsResolver)((e,{justify:t,align:a,overflow:r})=>({root:{"--grid-justify":t,"--grid-align":a,"--grid-overflow":r}})),P=(0,o.factory)(e=>{let t=(0,a.useProps)("Grid",T,e),{classNames:o,className:i,style:c,styles:u,unstyled:m,vars:v,grow:p,gap:g,rowGap:h,columnGap:y,columns:x,align:b,justify:S,children:D,breakpoints:w,type:C,attributes:E,...P}=t,Y=(0,r.useStyles)({name:"Grid",classes:d,props:t,className:i,style:c,classNames:o,styles:u,unstyled:m,attributes:E,vars:v,varsResolver:k}),H=(0,n.useRandomClassName)();return"container"===C&&w?(0,f.jsxs)(s,{value:{getStyles:Y,grow:p,columns:x,breakpoints:w,type:C},children:[(0,f.jsx)(j,{selector:`.${H}`,...t}),(0,f.jsx)("div",{...Y("container"),children:(0,f.jsx)(l.Box,{...Y("root",{className:H}),...P,children:(0,f.jsx)("div",{...Y("inner"),children:D})})})]}):(0,f.jsxs)(s,{value:{getStyles:Y,grow:p,columns:x,breakpoints:w,type:C},children:[(0,f.jsx)(j,{selector:`.${H}`,...t}),(0,f.jsx)(l.Box,{...Y("root",{className:H}),...P,children:(0,f.jsx)("div",{...Y("inner"),children:D})})]})});P.classes=d,P.varsResolver=k,P.displayName="@mantine/core/Grid",P.Col=C,e.s(["Grid",0,P],20035)},966696,428127,e=>{"use strict";var t=e.i(86473),a={header:"m_9d44fc56",navigationGroup:"m_21150122",todayControl:"m_7a42c1e5",viewSelect:"m_5998194a",compactViewSelect:"m_feecf21b"},r=e.i(191788);let n=(0,r.createContext)(void 0);function o(e){let t=(0,r.useContext)(n);return e?t?{...t,...e}:e:t}n.displayName="@mantine/schedule/ScheduleHeaderLabelsContext";var l={headerControl:"m_b366a0f3"},s=e.i(462138),i=e.i(284629),d=e.i(481178),c=e.i(275519),u=e.i(433512),m=e.i(323283),v=e.i(44091),p=e.i(391466),g=e.i(391398);let f={__staticSelector:"HeaderControl",interactive:!0},h=(0,d.createVarsResolver)((e,{radius:t})=>({headerControl:{"--control-radius":void 0===t?void 0:(0,u.getRadius)(t)}})),y=(0,c.factory)(e=>{let t=(0,v.useProps)("HeaderControl",f,e),{classNames:a,className:r,style:n,styles:o,unstyled:s,vars:d,__staticSelector:c,mod:u,attributes:m,active:y,square:x,radius:b,interactive:S,labels:D,...w}=t;return(0,g.jsx)(i.UnstyledButton,{...(0,p.useStyles)({name:c,classes:l,props:t,className:r,style:n,classNames:a,styles:o,unstyled:s,attributes:m,vars:d,varsResolver:h,rootSelector:"headerControl"})("headerControl",{active:S}),mod:[{active:y,square:x,interactive:S},u],tabIndex:S?void 0:-1,...w})});function x(e){let{dir:a}=(0,m.useDirection)();return(0,g.jsx)(y,{"data-type":"next","aria-label":(0,t.getLabel)("next",o(e.labels)),square:!0,...e,children:(0,g.jsx)(s.AccordionChevron,{style:{transform:`rotate(${"rtl"===a?90:-90}deg)`}})})}function b(e){let{dir:a}=(0,m.useDirection)();return(0,g.jsx)(y,{"data-type":"previous","aria-label":(0,t.getLabel)("previous",o(e.labels)),square:!0,...e,children:(0,g.jsx)(s.AccordionChevron,{style:{transform:`rotate(${"rtl"===a?-90:90}deg)`}})})}function S(e){let a=o(e.labels);return(0,g.jsx)(y,{"data-type":"today","aria-label":(0,t.getLabel)("today",a),...e,children:(0,t.getLabel)("today",a)})}y.displayName="@mantine/schedule/HeaderControl",y.classes=l,y.varsResolver=h,x.displayName="@mantine/schedule/ScheduleHeaderNext",b.displayName="@mantine/schedule/ScheduleHeaderPrevious",S.displayName="@mantine/schedule/ScheduleHeaderToday";var D=e.i(27748),w=e.i(494834),C={monthYearSelectTarget:"m_9d235876",monthYearSelectList:"m_673e0cc3",monthYearSelectDropdown:"m_e24605b6",monthYearSelectLabel:"m_807fa76f",monthYearSelectControl:"m_9baf5b18"},E=e.i(392862),j=e.i(654486),T=e.i(541772),k=e.i(205693);let P={__staticSelector:"MonthYearSelect",withMonths:!0},Y=(0,d.createVarsResolver)((e,{radius:t})=>({monthYearSelectDropdown:{"--control-radius":void 0===t?void 0:(0,u.getRadius)(t)}})),H=(0,c.factory)(e=>{let a=(0,v.useProps)("MonthYearSelect",P,e),{__staticSelector:r,classNames:n,className:l,style:s,styles:d,unstyled:c,vars:u,attributes:m,popoverProps:f,startYear:h,endYear:x,onYearChange:b,onMonthChange:S,locale:H,monthsListFormat:N,monthValue:M,yearValue:B,labelFormat:R,radius:I,getMonthControlProps:L,getYearControlProps:_,withMonths:V,id:G,labels:F,...$}=a,z=(0,p.useStyles)({name:r,classes:C,props:a,className:l,style:s,classNames:n,styles:d,unstyled:c,attributes:m,vars:u,varsResolver:Y,rootSelector:"monthYearSelectTarget"}),[A,O]=(0,T.useDisclosure)(!1),K=o(F),q=new Date,U=(0,k.useDatesContext)(),J=h??q.getFullYear()-5,W=x??q.getFullYear()+5,X=void 0!==B&&B>=J&&B<=W,Q=(function({startYear:e,endYear:t}){let a=[];for(let r=e;r<=t;r++)a.push(r);return a})({startYear:J,endYear:W}).map((e,a)=>{let r=_?.(e);return(0,g.jsx)(i.UnstyledButton,{onClick:()=>{b?.(e),V||O.close()},mod:{type:"year",active:e===B},"aria-label":`${(0,t.getLabel)("selectYear",K)} ${e}`,tabIndex:X?e===B?0:-1:0===a?0:-1,...r,onKeyDown:(0,j.createScopedKeydownHandler)({siblingSelector:'[data-type="year"]:not(:disabled)',parentSelector:"[data-list]",activateOnFocus:!1,loop:!0,orientation:"vertical",onKeyDown:r?.onKeyDown}),...z("monthYearSelectControl",{className:r?.className,style:r?.style}),children:e},e)}),Z=V?(function({locale:e,format:t}){let a=[],r=(0,w.default)().locale(e).startOf("year");for(let n=0;n<12;n++)a.push({month:n,name:(0,D.formatDate)({date:r.add(n,"month"),format:t,locale:e})});return a})({locale:U.getLocale(H),format:N||"MMMM"}).map(e=>{let a=L?.(e.month);return(0,g.jsx)(i.UnstyledButton,{onClick:()=>S?.(e.month),mod:{type:"month",active:e.month===M},tabIndex:e.month===M?0:-1,onKeyDown:(0,j.createScopedKeydownHandler)({siblingSelector:'[data-type="month"]:not(:disabled)',parentSelector:"[data-list]",activateOnFocus:!1,loop:!0,orientation:"vertical",onKeyDown:a?.onKeyDown}),...a,...z("monthYearSelectControl",{className:a?.className,style:a?.style}),"aria-label":`${(0,t.getLabel)("selectMonth",K)} ${e.name}`,children:e.name},e.name)}):null;return(0,g.jsxs)(E.Popover,{position:"bottom-start",__staticSelector:r,trapFocus:!0,transitionProps:{transition:"pop",duration:120},radius:I||"var(--schedule-radius, var(--mantine-radius-default))",shadow:"md",offset:3,width:V?void 0:"target",opened:A,onChange:O.set,id:G,...f,children:[(0,g.jsx)(E.Popover.Target,{children:(0,g.jsx)(y,{...z("monthYearSelectTarget"),__staticSelector:r,radius:I,"data-with-months":V||void 0,onClick:O.toggle,...$,children:(0,D.formatDate)({locale:U.getLocale(H),date:new Date(B??q.getFullYear(),M??q.getMonth()),format:R||(V?"MMMM YYYY":"YYYY")})})}),(0,g.jsxs)(E.Popover.Dropdown,{"data-with-months":V||void 0,...z("monthYearSelectDropdown"),children:[V&&(0,g.jsxs)("div",{"data-list":!0,...z("monthYearSelectList"),children:[(0,g.jsx)("div",{...z("monthYearSelectLabel"),children:(0,t.getLabel)("month",K)}),Z]}),(0,g.jsxs)("div",{"data-list":!0,...z("monthYearSelectList"),children:[V&&(0,g.jsx)("div",{...z("monthYearSelectLabel"),children:(0,t.getLabel)("year",K)}),Q]})]})]})});H.displayName="@mantine/schedule/MonthYearSelect",H.classes=C,H.varsResolver=Y;var N={viewSelect:"m_e106e12d"},M=e.i(232471),B=e.i(62904);let R={__staticSelector:"ViewSelect",views:["day","week","month","year"]},I=(0,c.factory)(e=>{let a=(0,v.useProps)("ViewSelect",R,e),{classNames:n,className:l,style:s,styles:i,unstyled:d,vars:c,attributes:u,value:f,onChange:h,views:x,__staticSelector:b,radius:S,labels:D,...w}=a,C=(0,p.useStyles)({name:b,classes:N,props:a,className:l,style:s,classNames:n,styles:i,unstyled:d,attributes:u,vars:c,rootSelector:"viewSelect"}),E=o(D),{resolvedClassNames:j,resolvedStyles:T}=(0,B.useResolvedStylesApi)({classNames:n,styles:i,props:a}),{dir:k}=(0,m.useDirection)(),P=(0,r.useRef)([]),Y=(0,r.useRef)(!1);(0,r.useEffect)(()=>{if(Y.current&&document.activeElement===document.body){let e=x.findIndex(e=>e===f);-1!==e&&P.current[e]?.focus()}Y.current=!1},[]);let H={day:"switchToDayView",week:"switchToWeekView",month:"switchToMonthView",year:"switchToYearView"},I=x.map((e,a)=>{let r=f===e;return(0,g.jsx)(y,{ref:e=>{P.current[a]=e},"data-type":e,active:r,onClick:()=>h?.(e),onKeyDown:e=>((e,t)=>{let a="rtl"===k;if(e.key===(a?"ArrowLeft":"ArrowRight")){e.preventDefault();let a=t<x.length-1?t+1:0;P.current[a]?.focus()}else if(e.key===(a?"ArrowRight":"ArrowLeft")){e.preventDefault();let a=t>0?t-1:x.length-1;P.current[a]?.focus()}else"Home"===e.key?(e.preventDefault(),P.current[0]?.focus()):"End"===e.key?(e.preventDefault(),P.current[x.length-1]?.focus()):("Enter"===e.key||" "===e.key)&&(Y.current=!0)})(e,a),classNames:j,styles:T,__staticSelector:b,radius:S,role:"tab","aria-label":(0,t.getLabel)(H[e],E),"aria-selected":r,tabIndex:r?0:-1,children:(0,t.getLabel)(e,E)},e)});return(0,g.jsx)(M.Box,{...C("viewSelect"),role:"tablist","aria-label":(0,t.getLabel)("viewSelectLabel",E),...w,children:I})});I.displayName="@mantine/schedule/ViewSelect",I.classes=N;let L={__staticSelector:"ScheduleHeader"},_=(0,d.createVarsResolver)(()=>({scheduleHeader:{"--test":"test"}})),V=(0,c.factory)(e=>{let t=(0,v.useProps)("ScheduleHeader",L,e),{classNames:r,className:o,style:l,styles:s,unstyled:i,vars:d,attributes:c,__staticSelector:u,labels:m,...f}=t,h=(0,p.useStyles)({name:u,classes:a,props:t,className:o,style:l,classNames:r,styles:s,unstyled:i,vars:d,varsResolver:_,attributes:c,rootSelector:"header"});return(0,g.jsx)(n.Provider,{value:m,children:(0,g.jsx)(M.Box,{...h("header"),...f})})});V.displayName="@mantine/schedule/ScheduleHeader",V.classes=a,V.varsResolver=_,V.Control=y,V.Next=x,V.Previous=b,V.Today=S,V.ViewSelect=I,V.MonthYearSelect=H,e.s(["ScheduleHeader",0,V],428127);var G=e.i(856171);let F=["day","week","month","year"];e.s(["ScheduleHeaderBase",0,function({view:e,navigationHandlers:r,control:n,labels:o,onDateChange:l,onViewChange:s,previousControlProps:i,nextControlProps:d,todayControlProps:c,viewSelectProps:u,stylesApiProps:m}){let v=n.monthYearSelect?(0,g.jsx)(V.MonthYearSelect,{...m,labels:o,...n.monthYearSelect}):(0,g.jsx)(V.Control,{...m,interactive:!1,miw:n.miw,children:n.title}),p=(u?.views||F).map(e=>({value:e,label:(0,t.getLabel)(e,o)}));return(0,g.jsxs)(V,{...m,labels:o,children:[(0,g.jsxs)("div",{className:a.navigationGroup,children:[(0,g.jsx)(V.Previous,{...m,onClick:()=>l?.(r.previous()),labels:o,...i}),v,(0,g.jsx)(V.Next,{...m,onClick:()=>l?.(r.next()),labels:o,...d})]}),(0,g.jsx)("div",{className:a.todayControl,children:(0,g.jsx)(V.Today,{...m,onClick:()=>l?.(r.today()),labels:o,...c})}),(0,g.jsx)(G.NativeSelect,{className:a.compactViewSelect,data:p,value:e,onChange:e=>s?.(e.currentTarget.value),"aria-label":(0,t.getLabel)("viewSelectLabel",o),size:"sm"}),(0,g.jsx)("div",{className:a.viewSelect,style:{marginInlineStart:"auto"},children:(0,g.jsx)(V.ViewSelect,{value:e,onChange:s,labels:o,...m,...u})})]})}],966696)},783261,376879,201867,891343,162077,e=>{"use strict";var t=e.i(191788);let a={isDragging:!1,draggedEventId:null,draggedEvent:null,dropTarget:null};var r=e.i(494834);e.s(["useDragDropHandlers",0,function(e){let{enabled:n,mode:o,onEventDrop:l,canDragEvent:s,onEventDragStart:i,onEventDragEnd:d,calculateDropTarget:c,onExternalDrop:u}=e,m=(0,t.useEffectEvent)(l||(()=>{})),v=(0,t.useEffectEvent)(i||(()=>{})),p=(0,t.useEffectEvent)(d||(()=>{})),g=(0,t.useEffectEvent)(u||(()=>{})),f=function(){let[e,r]=(0,t.useState)(a);return{state:e,startDrag:(0,t.useCallback)(e=>{r({isDragging:!0,draggedEventId:e.id,draggedEvent:e,dropTarget:null})},[]),endDrag:(0,t.useCallback)(()=>{r(a)},[]),setDropTarget:(0,t.useCallback)(e=>{r(t=>({...t,dropTarget:e}))},[]),clearDropTarget:(0,t.useCallback)(()=>{r(e=>({...e,dropTarget:null}))},[])}}(),[h,y]=(0,t.useState)(null),x=(0,t.useCallback)(()=>{f.endDrag(),y(null),p()},[f]),b=(0,t.useCallback)(e=>{n&&"static"!==o&&(f.startDrag(e),v(e))},[n,o,f]),S=(0,t.useCallback)((e,t)=>{if("static"===o)return;let a=f.state.isDragging;a&&!e.dataTransfer.types.includes("application/json")&&(x(),a=!1),a&&!n||(a||u)&&(e.preventDefault(),e.dataTransfer.dropEffect=a?"move":"copy",y(t))},[n,o,f.state.isDragging,u,x]),D=(0,t.useCallback)(()=>{y(null)},[]),w=(0,t.useCallback)((e,t)=>{e.preventDefault();let a=f.state.isDragging&&e.dataTransfer.types.includes("application/json");if(a&&n&&f.state.draggedEvent&&l){let{start:e,end:a}=c(t,f.state.draggedEvent);m({eventId:f.state.draggedEventId,newStart:(0,r.default)(e).format("YYYY-MM-DD HH:mm:ss"),newEnd:(0,r.default)(a).format("YYYY-MM-DD HH:mm:ss"),event:f.state.draggedEvent}),x();return}if(!a&&u){f.state.isDragging&&x(),g(e,t),y(null);return}y(null)},[n,f.state,l,u,c,x,m,g]),C=(0,t.useCallback)(e=>n&&"static"!==o&&"background"!==e.display&&(!s||s(e)),[n,o,s]),E=(0,t.useCallback)(e=>h&&"object"==typeof h&&"object"==typeof e?JSON.stringify(h)===JSON.stringify(e):h===e,[h]);return{dragContextValue:{isDragging:f.state.isDragging,draggedEventId:f.state.draggedEventId,draggedEvent:f.state.draggedEvent,dropTarget:f.state.dropTarget,onDragStart:b,onDragEnd:x,setDropTarget:f.setDropTarget},dropTarget:h,handleDragStart:b,handleDragEnd:x,handleDragOver:S,handleDragLeave:D,handleDrop:w,isDraggableEvent:C,isDropTarget:E}}],783261),e.s(["useSlotDragSelect",0,function({enabled:e=!0,onDragEnd:a}){let[r,n]=(0,t.useState)(null),o=(0,t.useRef)(null),l=(0,t.useEffectEvent)(a||(()=>{})),s=(0,t.useCallback)((t,a,r)=>{e&&(o.current={group:r,startIndex:a,currentIndex:a},n({group:r,start:a,end:a}))},[e]),i=null!==r;return(0,t.useEffect)(()=>{if(!i)return;let e=document.body.style.userSelect;document.body.style.userSelect="none";let t=e=>{if(o.current)for(let t of document.elementsFromPoint(e.clientX,e.clientY)){let e=t.getAttribute?.("data-drag-slot-index"),a=t.getAttribute?.("data-drag-slot-group");if(null!=e&&null!=a){if(a===o.current.group){let t=Number(e);isNaN(t)||t===o.current.currentIndex||(o.current.currentIndex=t,n({group:a,start:Math.min(o.current.startIndex,t),end:Math.max(o.current.startIndex,t)}))}break}}},a=()=>{if(o.current){let{startIndex:e,currentIndex:t,group:a}=o.current;e!==t&&l(Math.min(e,t),Math.max(e,t),a)}o.current=null,n(null)};return document.addEventListener("pointermove",t),document.addEventListener("pointerup",a),()=>{document.body.style.userSelect=e,document.removeEventListener("pointermove",t),document.removeEventListener("pointerup",a)}},[i]),{handleSlotPointerDown:s,isSlotSelected:(0,t.useCallback)((e,t)=>!!r&&r.group===t&&e>=r.start&&e<=r.end,[r]),isDragging:i}}],376879);let n=(0,t.createContext)({});e.s(["DragContext",0,n],201867);var o={event:"m_1ac94670",eventInner:"m_71699dc6",eventResizeHandle:"m_520128c"},l=e.i(232471),s=e.i(284629),i=e.i(481178),d=e.i(275519),c=e.i(433512),u=e.i(44091),m=e.i(391466),v=e.i(391398);let p={__staticSelector:"ScheduleEvent",mode:"default",radius:"sm"},g=(0,i.createVarsResolver)((e,{event:t,variant:a,radius:r})=>{let n=e.variantColorResolver({color:t.color||e.primaryColor,theme:e,variant:a||t.variant||"light",autoContrast:!0});return{event:{"--event-bg":n.background,"--event-hover":n.hover,"--event-color":n.color,"--event-radius":(0,c.getRadius)(r)}}}),f=(0,d.factory)(e=>{let a=(0,u.useProps)("ScheduleEvent",p,e),{classNames:r,className:i,style:d,styles:c,unstyled:f,vars:h,attributes:y,children:x,nowrap:b,radius:S,color:D,__staticSelector:w,event:C,renderEventBody:E,renderEvent:j,size:T,autoSize:k,mod:P,hanging:Y,draggable:H=!1,onEventDragStart:N,onEventDragEnd:M,isDragging:B=!1,mode:R,withResize:I=!1,onResizeStart:L,isResizing:_=!1,...V}=a,G=(0,t.use)(n),F=(0,m.useStyles)({name:w,classes:o,props:a,className:i,style:d,classNames:r,styles:c,unstyled:f,attributes:y,vars:h,varsResolver:g,rootSelector:"event"}),$=B||G.draggedEventId===C.id,z=G.isDragging||!1,A=(0,t.useRef)(G.onDragEnd);A.current=G.onDragEnd,(0,t.useEffect)(()=>{if($)return()=>{A.current?.()}},[$]);let O=I&&"static"!==R,K=(0,v.jsxs)(v.Fragment,{children:[O&&(0,v.jsx)(l.Box,{...F("eventResizeHandle"),mod:{edge:"top"},onPointerDown:e=>L?.("top",e)}),(0,v.jsx)(l.Box,{mod:{nowrap:b,size:T,autoSize:k,hanging:Y},...F("eventInner"),children:"function"==typeof E?E(C):C.title}),O&&(0,v.jsx)(l.Box,{...F("eventResizeHandle"),mod:{edge:"bottom"},onPointerDown:e=>L?.("bottom",e)})]}),q={...F("event"),"data-event-id":C.id,size:T,title:C.title,mod:[{autoSize:k,hanging:Y,draggable:H,dragging:$,"any-dragging":z,static:"static"===R,resizing:_,resizable:O},P],draggable:H&&"static"!==R,tabIndex:"static"===R?-1:0,onDragStart:"static"===R?void 0:e=>{H?(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("application/json",JSON.stringify({eventId:C.id})),N?.(C),G.onDragStart?.(C)):e.preventDefault()},onDragEnd:"static"===R?void 0:()=>{M?.(),G.onDragEnd?.()},onClick:"static"===R?void 0:V.onClick,...V,children:K};return"function"==typeof j?j(C,q):(0,v.jsx)(s.UnstyledButton,{...q})});f.displayName="@mantine/schedule/ScheduleEvent",f.classes=o,f.varsResolver=g,e.s(["ScheduleEvent",0,f],891343);var h=e.i(485108),y=e.i(725695),x=e.i(424302),b=e.i(671640),S=e.i(841209),D=e.i(387703),w=e.i(582498),C=e.i(288034);let E=`import { useEffect } from 'react';
import { Modal, TextInput, Button, Stack, Group, Checkbox } from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import { useForm } from '@mantine/form';

interface EventData {
  id?: string | number;
  title: string;
  start: Date;
  end: Date;
  color?: string;
  isAllDay?: boolean;
}

interface EventFormProps {
  opened: boolean;
  onClose: () => void;
  initialData: EventData | null;
  onSave: (data: EventData) => void;
  onDelete?: () => void;
}

export function EventForm({
  opened,
  onClose,
  values,
  onSubmit,
  onDelete,
  ...others
}: EventFormProps) {
  const form = useForm({
    initialValues: {
      id: values?.id,
      title: values?.title || '',
      start: values?.start || new Date(),
      end: values?.end || new Date(),
      color: values?.color || 'blue',
    },
    validate: {
      title: isNotEmpty('Event title is required'),
      start: isNotEmpty('Start time is required'),
      end: (value, { start }) => {
        if (!value) {
          return 'End time is required';
        }

        if (dayjs(value).isBefore(dayjs(start))) {
          return 'End time must be after start time';
        }

        return null;
      },
    },
  });

  useEffect(() => {
    form.setValues({
      id: values?.id,
      title: values?.title || '',
      start: values?.start || new Date(),
      end: values?.end || new Date(),
      color: values?.color || 'blue',
    });
  }, [values]);

  const handleSubmit = (values: EventData) => {
    onSubmit({
      id: values.id,
      title: values.title,
      start: values.start,
      end: values.end,
      color: values.color,
    });
    onClose();
  };

  const handleDelete = () => {
    onDelete?.();
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={form.values.id ? 'Edit Event' : 'Create Event'}
      {...others}
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="md">
          <TextInput
            label="Event Title"
            placeholder="Enter event title"
            data-autofocus
            {...form.getInputProps('title')}
          />

          <DateTimePicker
            label="Start Time"
            clearable
            {...form.getInputProps('start')}
          />
          <DateTimePicker label="End Time" {...form.getInputProps('end')} clearable />

          <Group justify="flex-end" gap="sm">
            {form.values.id && onDelete && (
              <Button color="red" onClick={handleDelete} mie="auto">
                Delete
              </Button>
            )}

            <Button variant="default" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              {form.values.id ? 'Update' : 'Create'}
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
}`;e.s(["EventForm",0,function({opened:e,onClose:a,values:n,onSubmit:o,onDelete:l,...s}){let i=(0,w.useForm)({initialValues:{id:n?.id,title:n?.title||"",start:n?.start||new Date,end:n?.end||new Date,color:n?.color||"blue"},validate:{title:(0,D.isNotEmpty)("Event title is required"),start:(0,D.isNotEmpty)("Start time is required"),end:(e,{start:t})=>e?(0,r.default)(e).isBefore((0,r.default)(t))?"End time must be after start time":null:"End time is required"}});return(0,t.useEffect)(()=>{i.setValues({id:n?.id,title:n?.title||"",start:n?.start||new Date,end:n?.end||new Date,color:n?.color||"blue"})},[n]),(0,v.jsx)(x.Modal,{opened:e,onClose:a,title:i.values.id?"Edit Event":"Create Event",...s,children:(0,v.jsx)("form",{onSubmit:i.onSubmit(e=>{o({id:e.id,title:e.title,start:e.start,end:e.end,color:e.color}),a()}),children:(0,v.jsxs)(b.Stack,{gap:"md",children:[(0,v.jsx)(S.TextInput,{label:"Event Title",placeholder:"Enter event title","data-autofocus":!0,...i.getInputProps("title")}),(0,v.jsx)(C.DateTimePicker,{label:"Start Time",clearable:!0,...i.getInputProps("start")}),(0,v.jsx)(C.DateTimePicker,{label:"End Time",...i.getInputProps("end"),clearable:!0}),(0,v.jsxs)(y.Group,{justify:"flex-end",gap:"sm",children:[i.values.id&&l&&(0,v.jsx)(h.Button,{color:"red",onClick:()=>{l?.(),a()},mie:"auto",children:"Delete"}),(0,v.jsx)(h.Button,{variant:"default",onClick:a,children:"Cancel"}),(0,v.jsx)(h.Button,{type:"submit",children:i.values.id?"Update":"Create"})]})]})})})},"_eventFormCode",0,E],162077)},19683,e=>{"use strict";var t=e.i(257177),a=e.i(725695),r=e.i(671640),n=e.i(883364),o=e.i(391398);let l=`import { Badge, Group, Stack, Text } from '@mantine/core';
import { ScheduleEventData } from '@mantine/schedule';

interface EventDetailsProps {
  event: ScheduleEventData;
}

export function EventDetails({ event }: EventDetailsProps) {
  return (
    <Stack gap="xs">
      <Text fw={600} size="sm">
        {event.title}
      </Text>

      {event.payload?.description && (
        <Text size="xs" c="dimmed">
          {event.payload.description}
        </Text>
      )}

      {event.payload?.location && (
        <Group gap={4}>
          <Badge size="sm" variant="light">
            {event.payload.location}
          </Badge>
        </Group>
      )}

      {event.payload?.attendees && (
        <div>
          <Text size="xs" fw={500} mb={4}>
            Attendees:
          </Text>
          <Text size="xs" c="dimmed">
            {event.payload.attendees.join(', ')}
          </Text>
        </div>
      )}
    </Stack>
  );
}`;e.s(["EventDetails",0,function({event:e}){return(0,o.jsxs)(r.Stack,{gap:"xs",children:[(0,o.jsx)(n.Text,{fw:600,size:"sm",children:e.title}),e.payload?.description&&(0,o.jsx)(n.Text,{size:"xs",c:"dimmed",children:e.payload.description}),e.payload?.location&&(0,o.jsx)(a.Group,{gap:4,children:(0,o.jsx)(t.Badge,{size:"sm",variant:"light",children:e.payload.location})}),e.payload?.attendees&&(0,o.jsxs)("div",{children:[(0,o.jsx)(n.Text,{size:"xs",fw:500,mb:4,children:"Attendees:"}),(0,o.jsx)(n.Text,{size:"xs",c:"dimmed",children:e.payload.attendees.join(", ")})]})]})},"_eventDetailsCode",0,l])}]);