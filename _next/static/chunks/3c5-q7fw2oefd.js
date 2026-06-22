(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,369974,e=>{"use strict";var t=e.i(44091),a=e.i(392862);let[r,n]=(0,e.i(386179).createSafeContext)("HoverCard component was not found in the tree");var o=e.i(191788),l=e.i(391398),s=e.i(458272);let i=(0,o.createContext)({withinGroup:!1}),d={openDelay:0,closeDelay:0};function c(e){let{openDelay:a,closeDelay:r,children:n}=(0,t.useProps)("HoverCardGroup",d,e);return(0,l.jsx)(i,{value:{withinGroup:!0},children:(0,l.jsx)(s.FloatingDelayGroup,{delay:{open:a,close:r},children:n})})}c.displayName="@mantine/core/HoverCardGroup",c.extend=e=>e;var u=e.i(334816);function m(e){let{children:r,onMouseEnter:s,onMouseLeave:d,...c}=(0,t.useProps)("HoverCardDropdown",null,e),m=n();if((0,o.use)(i).withinGroup&&m.getFloatingProps&&m.floating){let e=m.getFloatingProps();return(0,l.jsx)(a.Popover.Dropdown,{ref:m.floating,...e,onMouseEnter:(0,u.createEventHandler)(s,e.onMouseEnter),onMouseLeave:(0,u.createEventHandler)(d,e.onMouseLeave),...c,children:r})}let v=(0,u.createEventHandler)(s,m.openDropdown),p=(0,u.createEventHandler)(d,m.closeDropdown);return(0,l.jsx)(a.Popover.Dropdown,{onMouseEnter:v,onMouseLeave:p,...c,children:r})}m.displayName="@mantine/core/HoverCardDropdown";var v=e.i(275825),p=e.i(409703),g=e.i(332977);let f={refProp:"ref"};function h(e){let{children:r,refProp:s,eventPropsWrapperName:d,...c}=(0,t.useProps)("HoverCardTarget",f,e),m=(0,p.getSingleElementChild)(r);if(!m)throw Error("HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let h=n(),y=(0,o.use)(i),b=(0,g.useMergedRef)((0,v.getRefProp)(m),h.assignTarget);if(y.withinGroup&&h.getReferenceProps&&h.reference){let e=h.getReferenceProps();return(0,l.jsx)(a.Popover.Target,{refProp:s,...c,children:(0,o.cloneElement)(m,d?{[d]:{...e,ref:h.reference}}:{...e,ref:h.reference})})}let x={onMouseEnter:(0,u.createEventHandler)(m.props.onMouseEnter,h.openDropdown),onMouseLeave:(0,u.createEventHandler)(m.props.onMouseLeave,h.closeDropdown)},D={...d?{[d]:x}:x,ref:b};return(0,l.jsx)(a.Popover.Target,{refProp:s,...c,children:(0,o.cloneElement)(m,D)})}h.displayName="@mantine/core/HoverCardTarget";var y=e.i(107315);let b={openDelay:0,closeDelay:150,initiallyOpened:!1};function x(e){let{children:n,onOpen:d,onClose:c,openDelay:u,closeDelay:m,initiallyOpened:v,...p}=(0,t.useProps)("HoverCard",b,e),g=function(e){let[t,a]=(0,o.useState)(e.defaultOpened),r="boolean"==typeof e.opened?e.opened:t,n=(0,o.use)(i).withinGroup,l=(0,y.useId)(),d=(0,o.useRef)(-1),c=(0,o.useRef)(-1),u=(0,o.useRef)(null),m=(0,o.useCallback)(e=>{u.current=e},[]),v=(0,o.useCallback)(()=>{window.clearTimeout(d.current),window.clearTimeout(c.current)},[]),p=(0,o.useCallback)(t=>{a(t),t?(b(l),e.onOpen?.()):e.onClose?.()},[l,e.onOpen,e.onClose]),{context:g,refs:f}=(0,s.useFloating)({open:r,onOpenChange:p}),{delay:h,setCurrentId:b}=(0,s.useDelayGroup)(g,{id:l}),{getReferenceProps:x,getFloatingProps:D}=(0,s.useInteractions)([(0,s.useHover)(g,{enabled:!0,delay:n?h:{open:e.openDelay,close:e.closeDelay}}),(0,s.useRole)(g,{role:"dialog"}),(0,s.useDismiss)(g,{enabled:n})]),S=(0,o.useCallback)(()=>{n||(v(),0===e.openDelay||void 0===e.openDelay?p(!0):d.current=window.setTimeout(()=>p(!0),e.openDelay))},[n,v,e.openDelay,p]),C=(0,o.useCallback)(()=>{n||(v(),0===e.closeDelay||void 0===e.closeDelay?p(!1):c.current=window.setTimeout(()=>p(!1),e.closeDelay))},[n,v,e.closeDelay,p]),w=(0,o.useRef)(p);return w.current=p,(0,o.useEffect)(()=>()=>v(),[v]),(0,o.useEffect)(()=>{if(!r||n||"u"<typeof IntersectionObserver)return;let e=u.current;if(!e)return;let t=new IntersectionObserver(()=>{e.isConnected&&0!==e.getClientRects().length||(v(),w.current(!1))});return t.observe(e),()=>t.disconnect()},[r,n,v]),{opened:r,reference:f.setReference,floating:f.setFloating,assignTarget:m,getReferenceProps:x,getFloatingProps:D,openDropdown:S,closeDropdown:C}}({openDelay:u,closeDelay:m,defaultOpened:v,onOpen:d,onClose:c});return(0,l.jsx)(r,{value:{openDropdown:g.openDropdown,closeDropdown:g.closeDropdown,assignTarget:g.assignTarget,getReferenceProps:g.getReferenceProps,getFloatingProps:g.getFloatingProps,reference:g.reference,floating:g.floating},children:(0,l.jsx)(a.Popover,{...p,opened:g.opened,__staticSelector:"HoverCard",children:n})})}x.displayName="@mantine/core/HoverCard",x.Target=h,x.Dropdown=m,x.Group=c,x.extend=e=>e,e.s(["HoverCard",0,x],369974)},27355,(e,t,a)=>{e.e,t.exports=function(e){"use strict";var t={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(e){return e+"º"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(t,null,!0),t}(e.r(494834))},4332,e=>{"use strict";var t=e.i(494834);e.s(["toDateString",0,function(e){return(0,t.default)(e).format("YYYY-MM-DD 00:00:00")}])},966696,428127,e=>{"use strict";var t=e.i(86473),a={header:"m_9d44fc56",navigationGroup:"m_21150122",todayControl:"m_7a42c1e5",viewSelect:"m_5998194a",compactControls:"m_744ceb50",compactAgendaControl:"m_92bea757",compactViewSelect:"m_feecf21b"},r=e.i(191788);let n=(0,r.createContext)(void 0);function o(e){let t=(0,r.useContext)(n);return e?t?{...t,...e}:e:t}n.displayName="@mantine/schedule/ScheduleHeaderLabelsContext";var l={headerControl:"m_b366a0f3"},s=e.i(462138),i=e.i(284629),d=e.i(481178),c=e.i(275519),u=e.i(433512),m=e.i(323283),v=e.i(44091),p=e.i(391466),g=e.i(391398);let f={__staticSelector:"HeaderControl",interactive:!0},h=(0,d.createVarsResolver)((e,{radius:t})=>({headerControl:{"--control-radius":void 0===t?void 0:(0,u.getRadius)(t)}})),y=(0,c.factory)(e=>{let t=(0,v.useProps)("HeaderControl",f,e),{classNames:a,className:r,style:n,styles:o,unstyled:s,vars:d,__staticSelector:c,mod:u,attributes:m,active:y,square:b,radius:x,interactive:D,labels:S,...C}=t;return(0,g.jsx)(i.UnstyledButton,{...(0,p.useStyles)({name:c,classes:l,props:t,className:r,style:n,classNames:a,styles:o,unstyled:s,attributes:m,vars:d,varsResolver:h,rootSelector:"headerControl"})("headerControl",{active:D}),mod:[{active:y,square:b,interactive:D},u],tabIndex:D?void 0:-1,...C})});function b(e){let{dir:a}=(0,m.useDirection)();return(0,g.jsx)(y,{"data-type":"next","aria-label":(0,t.getLabel)("next",o(e.labels)),square:!0,...e,children:(0,g.jsx)(s.AccordionChevron,{style:{transform:`rotate(${"rtl"===a?90:-90}deg)`}})})}function x(e){let{dir:a}=(0,m.useDirection)();return(0,g.jsx)(y,{"data-type":"previous","aria-label":(0,t.getLabel)("previous",o(e.labels)),square:!0,...e,children:(0,g.jsx)(s.AccordionChevron,{style:{transform:`rotate(${"rtl"===a?-90:90}deg)`}})})}function D(e){let a=o(e.labels);return(0,g.jsx)(y,{"data-type":"today","aria-label":(0,t.getLabel)("today",a),...e,children:(0,t.getLabel)("today",a)})}y.displayName="@mantine/schedule/HeaderControl",y.classes=l,y.varsResolver=h,b.displayName="@mantine/schedule/ScheduleHeaderNext",x.displayName="@mantine/schedule/ScheduleHeaderPrevious",D.displayName="@mantine/schedule/ScheduleHeaderToday";var S=e.i(27748),C=e.i(494834),w={monthYearSelectTarget:"m_9d235876",monthYearSelectList:"m_673e0cc3",monthYearSelectDropdown:"m_e24605b6",monthYearSelectLabel:"m_807fa76f",monthYearSelectControl:"m_9baf5b18"},E=e.i(392862),j=e.i(654486),T=e.i(541772),_=e.i(205693);let Y={__staticSelector:"MonthYearSelect",withMonths:!0},M=(0,d.createVarsResolver)((e,{radius:t})=>({monthYearSelectDropdown:{"--control-radius":void 0===t?void 0:(0,u.getRadius)(t)}})),k=(0,c.factory)(e=>{let a=(0,v.useProps)("MonthYearSelect",Y,e),{__staticSelector:r,classNames:n,className:l,style:s,styles:d,unstyled:c,vars:u,attributes:m,popoverProps:f,startYear:h,endYear:b,onYearChange:x,onMonthChange:D,locale:k,monthsListFormat:H,monthValue:P,yearValue:L,labelFormat:R,radius:I,getMonthControlProps:N,getYearControlProps:B,withMonths:F,id:z,labels:G,...V}=a,A=(0,p.useStyles)({name:r,classes:w,props:a,className:l,style:s,classNames:n,styles:d,unstyled:c,attributes:m,vars:u,varsResolver:M,rootSelector:"monthYearSelectTarget"}),[O,K]=(0,T.useDisclosure)(!1),q=o(G),U=new Date,$=(0,_.useDatesContext)(),J=h??U.getFullYear()-5,W=b??U.getFullYear()+5,X=void 0!==L&&L>=J&&L<=W,Q=(function({startYear:e,endYear:t}){let a=[];for(let r=e;r<=t;r++)a.push(r);return a})({startYear:J,endYear:W}).map((e,a)=>{let r=B?.(e);return(0,g.jsx)(i.UnstyledButton,{onClick:()=>{x?.(e),F||K.close()},mod:{type:"year",active:e===L},"aria-label":`${(0,t.getLabel)("selectYear",q)} ${e}`,tabIndex:X?e===L?0:-1:0===a?0:-1,...r,onKeyDown:(0,j.createScopedKeydownHandler)({siblingSelector:'[data-type="year"]:not(:disabled)',parentSelector:"[data-list]",activateOnFocus:!1,loop:!0,orientation:"vertical",onKeyDown:r?.onKeyDown}),...A("monthYearSelectControl",{className:r?.className,style:r?.style}),children:e},e)}),Z=F?(function({locale:e,format:t}){let a=[],r=(0,C.default)().locale(e).startOf("year");for(let n=0;n<12;n++)a.push({month:n,name:(0,S.formatDate)({date:r.add(n,"month"),format:t,locale:e})});return a})({locale:$.getLocale(k),format:H||"MMMM"}).map(e=>{let a=N?.(e.month);return(0,g.jsx)(i.UnstyledButton,{onClick:()=>D?.(e.month),mod:{type:"month",active:e.month===P},tabIndex:e.month===P?0:-1,onKeyDown:(0,j.createScopedKeydownHandler)({siblingSelector:'[data-type="month"]:not(:disabled)',parentSelector:"[data-list]",activateOnFocus:!1,loop:!0,orientation:"vertical",onKeyDown:a?.onKeyDown}),...a,...A("monthYearSelectControl",{className:a?.className,style:a?.style}),"aria-label":`${(0,t.getLabel)("selectMonth",q)} ${e.name}`,children:e.name},e.name)}):null;return(0,g.jsxs)(E.Popover,{position:"bottom-start",__staticSelector:r,trapFocus:!0,transitionProps:{transition:"pop",duration:120},radius:I||"var(--schedule-radius, var(--mantine-radius-default))",shadow:"md",offset:3,width:F?void 0:"target",opened:O,onChange:K.set,id:z,...f,children:[(0,g.jsx)(E.Popover.Target,{children:(0,g.jsx)(y,{...A("monthYearSelectTarget"),__staticSelector:r,radius:I,"data-with-months":F||void 0,onClick:K.toggle,...V,children:(0,S.formatDate)({locale:$.getLocale(k),date:new Date(L??U.getFullYear(),P??U.getMonth()),format:R||(F?"MMMM YYYY":"YYYY")})})}),(0,g.jsxs)(E.Popover.Dropdown,{"data-with-months":F||void 0,...A("monthYearSelectDropdown"),children:[F&&(0,g.jsxs)("div",{"data-list":!0,...A("monthYearSelectList"),children:[(0,g.jsx)("div",{...A("monthYearSelectLabel"),children:(0,t.getLabel)("month",q)}),Z]}),(0,g.jsxs)("div",{"data-list":!0,...A("monthYearSelectList"),children:[F&&(0,g.jsx)("div",{...A("monthYearSelectLabel"),children:(0,t.getLabel)("year",q)}),Q]})]})]})});k.displayName="@mantine/schedule/MonthYearSelect",k.classes=w,k.varsResolver=M;var H={viewSelect:"m_e106e12d"},P=e.i(232471),L=e.i(62904);let R={__staticSelector:"ViewSelect",views:["day","week","month","year"]},I=(0,c.factory)(e=>{let a=(0,v.useProps)("ViewSelect",R,e),{classNames:n,className:l,style:s,styles:i,unstyled:d,vars:c,attributes:u,value:f,onChange:h,views:b,__staticSelector:x,radius:D,labels:S,...C}=a,w=(0,p.useStyles)({name:x,classes:H,props:a,className:l,style:s,classNames:n,styles:i,unstyled:d,attributes:u,vars:c,rootSelector:"viewSelect"}),E=o(S),{resolvedClassNames:j,resolvedStyles:T}=(0,L.useResolvedStylesApi)({classNames:n,styles:i,props:a}),{dir:_}=(0,m.useDirection)(),Y=(0,r.useRef)([]),M=(0,r.useRef)(!1);(0,r.useEffect)(()=>{if(M.current&&document.activeElement===document.body){let e=b.findIndex(e=>e===f);-1!==e&&Y.current[e]?.focus()}M.current=!1},[]);let k={day:"switchToDayView",week:"switchToWeekView",month:"switchToMonthView",year:"switchToYearView"},I=b.map((e,a)=>{let r=f===e;return(0,g.jsx)(y,{ref:e=>{Y.current[a]=e},"data-type":e,active:r,onClick:()=>h?.(e),onKeyDown:e=>((e,t)=>{let a="rtl"===_;if(e.key===(a?"ArrowLeft":"ArrowRight")){e.preventDefault();let a=t<b.length-1?t+1:0;Y.current[a]?.focus()}else if(e.key===(a?"ArrowRight":"ArrowLeft")){e.preventDefault();let a=t>0?t-1:b.length-1;Y.current[a]?.focus()}else"Home"===e.key?(e.preventDefault(),Y.current[0]?.focus()):"End"===e.key?(e.preventDefault(),Y.current[b.length-1]?.focus()):("Enter"===e.key||" "===e.key)&&(M.current=!0)})(e,a),classNames:j,styles:T,__staticSelector:x,radius:D,role:"tab","aria-label":(0,t.getLabel)(k[e],E),"aria-selected":r,tabIndex:r?0:-1,children:(0,t.getLabel)(e,E)},e)});return(0,g.jsx)(P.Box,{...w("viewSelect"),role:"tablist","aria-label":(0,t.getLabel)("viewSelectLabel",E),...C,children:I})});I.displayName="@mantine/schedule/ViewSelect",I.classes=H;let N={__staticSelector:"ScheduleHeader"},B=(0,d.createVarsResolver)(()=>({scheduleHeader:{"--test":"test"}})),F=(0,c.factory)(e=>{let t=(0,v.useProps)("ScheduleHeader",N,e),{classNames:r,className:o,style:l,styles:s,unstyled:i,vars:d,attributes:c,__staticSelector:u,labels:m,...f}=t,h=(0,p.useStyles)({name:u,classes:a,props:t,className:o,style:l,classNames:r,styles:s,unstyled:i,vars:d,varsResolver:B,attributes:c,rootSelector:"header"});return(0,g.jsx)(n.Provider,{value:m,children:(0,g.jsx)(P.Box,{...h("header"),...f})})});F.displayName="@mantine/schedule/ScheduleHeader",F.classes=a,F.varsResolver=B,F.Control=y,F.Next=b,F.Previous=x,F.Today=D,F.ViewSelect=I,F.MonthYearSelect=k,e.s(["ScheduleHeader",0,F],428127);var z=e.i(856171);let G=["day","week","month","year"];e.s(["ScheduleHeaderBase",0,function({view:e,navigationHandlers:r,control:n,labels:o,onDateChange:l,onViewChange:s,previousControlProps:i,nextControlProps:d,todayControlProps:c,viewSelectProps:u,stylesApiProps:m,onAgendaClick:v,agendaActive:p}){let f=n.monthYearSelect?(0,g.jsx)(F.MonthYearSelect,{...m,labels:o,...n.monthYearSelect}):(0,g.jsx)(F.Control,{...m,interactive:!1,miw:n.miw,children:n.title}),h=(u?.views||G).map(e=>({value:e,label:(0,t.getLabel)(e,o)}));return(0,g.jsxs)(F,{...m,labels:o,children:[(0,g.jsxs)("div",{className:a.navigationGroup,children:[(0,g.jsx)(F.Previous,{...m,onClick:()=>l?.(r.previous()),labels:o,...i}),f,(0,g.jsx)(F.Next,{...m,onClick:()=>l?.(r.next()),labels:o,...d})]}),(0,g.jsxs)("div",{className:a.todayControl,children:[(0,g.jsx)(F.Today,{...m,onClick:()=>l?.(r.today()),labels:o,...c}),v&&(0,g.jsx)(F.Control,{...m,"data-type":"agenda",active:p,onClick:v,"aria-label":(0,t.getLabel)("agenda",o),children:(0,t.getLabel)("agenda",o)})]}),(0,g.jsxs)("div",{className:a.compactControls,children:[v&&(0,g.jsx)(F.Control,{...m,"data-type":"agenda",active:p,onClick:v,"aria-label":(0,t.getLabel)("agenda",o),className:a.compactAgendaControl,children:(0,t.getLabel)("agenda",o)}),(0,g.jsx)(z.NativeSelect,{className:a.compactViewSelect,data:h,value:e,onChange:e=>s?.(e.currentTarget.value),"aria-label":(0,t.getLabel)("viewSelectLabel",o),size:"sm"})]}),(0,g.jsx)("div",{className:a.viewSelect,style:{marginInlineStart:"auto"},children:(0,g.jsx)(F.ViewSelect,{value:e,onChange:s,labels:o,...m,...u})})]})}],966696)},783261,376879,201867,891343,162077,e=>{"use strict";var t=e.i(191788);let a={isDragging:!1,draggedEventId:null,draggedEvent:null,dropTarget:null};var r=e.i(494834);e.s(["useDragDropHandlers",0,function(e){let{enabled:n,mode:o,onEventDrop:l,canDragEvent:s,onEventDragStart:i,onEventDragEnd:d,calculateDropTarget:c,onExternalDrop:u}=e,m=(0,t.useEffectEvent)(l||(()=>{})),v=(0,t.useEffectEvent)(i||(()=>{})),p=(0,t.useEffectEvent)(d||(()=>{})),g=(0,t.useEffectEvent)(u||(()=>{})),f=function(){let[e,r]=(0,t.useState)(a);return{state:e,startDrag:(0,t.useCallback)(e=>{r({isDragging:!0,draggedEventId:e.id,draggedEvent:e,dropTarget:null})},[]),endDrag:(0,t.useCallback)(()=>{r(a)},[]),setDropTarget:(0,t.useCallback)(e=>{r(t=>({...t,dropTarget:e}))},[]),clearDropTarget:(0,t.useCallback)(()=>{r(e=>({...e,dropTarget:null}))},[])}}(),[h,y]=(0,t.useState)(null),b=(0,t.useCallback)(()=>{f.endDrag(),y(null),p()},[f]),x=(0,t.useCallback)(e=>{n&&"static"!==o&&(f.startDrag(e),v(e))},[n,o,f]),D=(0,t.useCallback)((e,t)=>{if("static"===o)return;let a=f.state.isDragging;a&&!e.dataTransfer.types.includes("application/json")&&(b(),a=!1),a&&!n||(a||u)&&(e.preventDefault(),e.dataTransfer.dropEffect=a?"move":"copy",y(t))},[n,o,f.state.isDragging,u,b]),S=(0,t.useCallback)(()=>{y(null)},[]),C=(0,t.useCallback)((e,t)=>{e.preventDefault();let a=f.state.isDragging&&e.dataTransfer.types.includes("application/json");if(a&&n&&f.state.draggedEvent&&l){let{start:e,end:a}=c(t,f.state.draggedEvent);m({eventId:f.state.draggedEventId,newStart:(0,r.default)(e).format("YYYY-MM-DD HH:mm:ss"),newEnd:(0,r.default)(a).format("YYYY-MM-DD HH:mm:ss"),event:f.state.draggedEvent}),b();return}if(!a&&u){f.state.isDragging&&b(),g(e,t),y(null);return}y(null)},[n,f.state,l,u,c,b,m,g]),w=(0,t.useCallback)(e=>n&&"static"!==o&&"background"!==e.display&&(!s||s(e)),[n,o,s]),E=(0,t.useCallback)(e=>h&&"object"==typeof h&&"object"==typeof e?JSON.stringify(h)===JSON.stringify(e):h===e,[h]);return{dragContextValue:{isDragging:f.state.isDragging,draggedEventId:f.state.draggedEventId,draggedEvent:f.state.draggedEvent,dropTarget:f.state.dropTarget,onDragStart:x,onDragEnd:b,setDropTarget:f.setDropTarget},dropTarget:h,handleDragStart:x,handleDragEnd:b,handleDragOver:D,handleDragLeave:S,handleDrop:C,isDraggableEvent:w,isDropTarget:E}}],783261),e.s(["useSlotDragSelect",0,function({enabled:e=!0,onDragEnd:a}){let[r,n]=(0,t.useState)(null),o=(0,t.useRef)(null),l=(0,t.useEffectEvent)(a||(()=>{})),s=(0,t.useCallback)((t,a,r)=>{e&&(o.current={group:r,startIndex:a,currentIndex:a},n({group:r,start:a,end:a}))},[e]),i=null!==r;return(0,t.useEffect)(()=>{if(!i)return;let e=document.body.style.userSelect;document.body.style.userSelect="none";let t=e=>{if(o.current)for(let t of document.elementsFromPoint(e.clientX,e.clientY)){let e=t.getAttribute?.("data-drag-slot-index"),a=t.getAttribute?.("data-drag-slot-group");if(null!=e&&null!=a){if(a===o.current.group){let t=Number(e);isNaN(t)||t===o.current.currentIndex||(o.current.currentIndex=t,n({group:a,start:Math.min(o.current.startIndex,t),end:Math.max(o.current.startIndex,t)}))}break}}},a=()=>{if(o.current){let{startIndex:e,currentIndex:t,group:a}=o.current;e!==t&&l(Math.min(e,t),Math.max(e,t),a)}o.current=null,n(null)};return document.addEventListener("pointermove",t),document.addEventListener("pointerup",a),()=>{document.body.style.userSelect=e,document.removeEventListener("pointermove",t),document.removeEventListener("pointerup",a)}},[i]),{handleSlotPointerDown:s,isSlotSelected:(0,t.useCallback)((e,t)=>!!r&&r.group===t&&e>=r.start&&e<=r.end,[r]),isDragging:i}}],376879);let n=(0,t.createContext)({});e.s(["DragContext",0,n],201867);var o={event:"m_1ac94670",eventInner:"m_71699dc6",eventResizeHandle:"m_520128c"},l=e.i(232471),s=e.i(284629),i=e.i(481178),d=e.i(275519),c=e.i(433512),u=e.i(44091),m=e.i(391466),v=e.i(391398);let p={__staticSelector:"ScheduleEvent",mode:"default",radius:"sm"},g=(0,i.createVarsResolver)((e,{event:t,variant:a,radius:r})=>{let n=e.variantColorResolver({color:t.color||e.primaryColor,theme:e,variant:a||t.variant||"light",autoContrast:!0});return{event:{"--event-bg":n.background,"--event-hover":n.hover,"--event-color":n.color,"--event-radius":(0,c.getRadius)(r)}}}),f=(0,d.factory)(e=>{let a=(0,u.useProps)("ScheduleEvent",p,e),{classNames:r,className:i,style:d,styles:c,unstyled:f,vars:h,attributes:y,children:b,nowrap:x,radius:D,color:S,__staticSelector:C,event:w,renderEventBody:E,renderEvent:j,size:T,autoSize:_,mod:Y,hanging:M,draggable:k=!1,onEventDragStart:H,onEventDragEnd:P,isDragging:L=!1,mode:R,withResize:I=!1,onResizeStart:N,isResizing:B=!1,...F}=a,z=(0,t.use)(n),G=(0,m.useStyles)({name:C,classes:o,props:a,className:i,style:d,classNames:r,styles:c,unstyled:f,attributes:y,vars:h,varsResolver:g,rootSelector:"event"}),V=L||z.draggedEventId===w.id,A=z.isDragging||!1,O=(0,t.useRef)(z.onDragEnd);O.current=z.onDragEnd,(0,t.useEffect)(()=>{if(V)return()=>{O.current?.()}},[V]);let K=I&&"static"!==R,q=(0,v.jsxs)(v.Fragment,{children:[K&&(0,v.jsx)(l.Box,{...G("eventResizeHandle"),mod:{edge:"top"},onPointerDown:e=>N?.("top",e)}),(0,v.jsx)(l.Box,{mod:{nowrap:x,size:T,autoSize:_,hanging:M},...G("eventInner"),children:"function"==typeof E?E(w):w.title}),K&&(0,v.jsx)(l.Box,{...G("eventResizeHandle"),mod:{edge:"bottom"},onPointerDown:e=>N?.("bottom",e)})]}),U={...G("event"),"data-event-id":w.id,size:T,title:w.title,mod:[{autoSize:_,hanging:M,draggable:k,dragging:V,"any-dragging":A,static:"static"===R,resizing:B,resizable:K},Y],...F,draggable:k&&"static"!==R,tabIndex:"static"===R?-1:0,onDragStart:"static"===R?void 0:e=>{k?(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("application/json",JSON.stringify({eventId:w.id})),H?.(w),z.onDragStart?.(w)):e.preventDefault()},onDragEnd:"static"===R?void 0:()=>{P?.(),z.onDragEnd?.()},onClick:"static"===R?void 0:F.onClick,children:q};return"function"==typeof j?j(w,U):(0,v.jsx)(s.UnstyledButton,{...U})});f.displayName="@mantine/schedule/ScheduleEvent",f.classes=o,f.varsResolver=g,e.s(["ScheduleEvent",0,f],891343);var h=e.i(485108),y=e.i(725695),b=e.i(424302),x=e.i(671640),D=e.i(841209),S=e.i(387703),C=e.i(582498),w=e.i(288034);let E=`import { useEffect } from 'react';
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
}`;e.s(["EventForm",0,function({opened:e,onClose:a,values:n,onSubmit:o,onDelete:l,children:s,...i}){let d=(0,C.useForm)({initialValues:{id:n?.id,title:n?.title||"",start:n?.start||new Date,end:n?.end||new Date,color:n?.color||"blue"},validate:{title:(0,S.isNotEmpty)("Event title is required"),start:(0,S.isNotEmpty)("Start time is required"),end:(e,{start:t})=>e?(0,r.default)(e).isBefore((0,r.default)(t))?"End time must be after start time":null:"End time is required"}});return(0,t.useEffect)(()=>{d.setValues({id:n?.id,title:n?.title||"",start:n?.start||new Date,end:n?.end||new Date,color:n?.color||"blue"})},[n]),(0,v.jsx)(b.Modal,{opened:e,onClose:a,title:d.values.id?"Edit Event":"Create Event",...i,children:(0,v.jsx)("form",{onSubmit:d.onSubmit(e=>{o({id:e.id,title:e.title,start:e.start,end:e.end,color:e.color}),a()}),children:(0,v.jsxs)(x.Stack,{gap:"md",children:[(0,v.jsx)(D.TextInput,{label:"Event Title",placeholder:"Enter event title","data-autofocus":!0,...d.getInputProps("title")}),(0,v.jsx)(w.DateTimePicker,{label:"Start Time",clearable:!0,...d.getInputProps("start")}),(0,v.jsx)(w.DateTimePicker,{label:"End Time",...d.getInputProps("end"),clearable:!0}),s,(0,v.jsxs)(y.Group,{justify:"flex-end",gap:"sm",children:[d.values.id&&l&&(0,v.jsx)(h.Button,{color:"red",onClick:()=>{l?.(),a()},mie:"auto",children:"Delete"}),(0,v.jsx)(h.Button,{variant:"default",onClick:a,children:"Cancel"}),(0,v.jsx)(h.Button,{type:"submit",children:d.values.id?"Update":"Create"})]})]})})})},"_eventFormCode",0,E],162077)},19683,e=>{"use strict";var t=e.i(257177),a=e.i(725695),r=e.i(671640),n=e.i(883364),o=e.i(391398),l=e.i(494834);let s=`import dayjs from 'dayjs';
import { Badge, Group, Stack, Text } from '@mantine/core';
import { ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';

interface EventDetailsProps {
  event: ScheduleEventData;
  resources?: ScheduleResourceData[];
}

export function EventDetails({ event, resources }: EventDetailsProps) {
  const resource = resources?.find((r) => r.id === event.resourceId);

  return (
    <Stack gap="xs">
      <Text fw={600} size="sm">
        {event.title}
      </Text>

      <Text size="xs" c="dimmed">
        {dayjs(event.start).format('MMM D, YYYY HH:mm')} – {dayjs(event.end).format('HH:mm')}
      </Text>

      {resource && (
        <Text size="xs" c="dimmed">
          {resource.label}
        </Text>
      )}

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
}`;e.s(["EventDetails",0,function({event:e,resources:s}){let i=s?.find(t=>t.id===e.resourceId);return(0,o.jsxs)(r.Stack,{gap:"xs",children:[(0,o.jsx)(n.Text,{fw:600,size:"sm",children:e.title}),(0,o.jsxs)(n.Text,{size:"xs",c:"dimmed",children:[(0,l.default)(e.start).format("MMM D, YYYY HH:mm")," – ",(0,l.default)(e.end).format("HH:mm")]}),i&&(0,o.jsx)(n.Text,{size:"xs",c:"dimmed",children:i.label}),e.payload?.description&&(0,o.jsx)(n.Text,{size:"xs",c:"dimmed",children:e.payload.description}),e.payload?.location&&(0,o.jsx)(a.Group,{gap:4,children:(0,o.jsx)(t.Badge,{size:"sm",variant:"light",children:e.payload.location})}),e.payload?.attendees&&(0,o.jsxs)("div",{children:[(0,o.jsx)(n.Text,{size:"xs",fw:500,mb:4,children:"Attendees:"}),(0,o.jsx)(n.Text,{size:"xs",c:"dimmed",children:e.payload.attendees.join(", ")})]})]})},"_eventDetailsCode",0,s])}]);