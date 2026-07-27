(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,20035,e=>{"use strict";var t=e.i(481178),a=e.i(44091),n=e.i(391466),o=e.i(83353),r=e.i(275519),i=e.i(232471);let[d,s]=(0,e.i(386179).createSafeContext)("Grid component was not found in tree");var l={container:"m_8478a6da",root:"m_410352e9",inner:"m_dee7bd2f",col:"m_96bdd299"},c=e.i(76112),m=e.i(931718),u=e.i(230780),v=e.i(496766),D=e.i(951254),f=e.i(871346),p=e.i(391398);let y=(e,t)=>"content"===e?"auto":"auto"===e?"0rem":e?e===t?"100%":`calc(${100*e/t}% - ${(t-e)/t} * var(--grid-column-gap))`:void 0,g=(e,t,a)=>a||"auto"===e?"100%":"content"===e?"unset":y(e,t),h=(e,t)=>{if(e)return"auto"===e||t?"1":"auto"},w=(e,t)=>0===e?"0":e?`calc(${100*e/t}% + ${e/t} * var(--grid-column-gap))`:void 0;function Y({span:e,order:t,offset:a,align:n,selector:o}){let r=(0,D.useMantineTheme)(),i=s(),d=i.breakpoints||r.breakpoints,l=(0,v.getBaseValue)(e),x=void 0===l?12:l,E=(0,m.filterProps)({"--col-order":(0,v.getBaseValue)(t)?.toString(),"--col-flex-grow":h(x,i.grow),"--col-flex-basis":y(x,i.columns),"--col-width":"content"===x?"auto":void 0,"--col-max-width":g(x,i.columns,i.grow),"--col-offset":w((0,v.getBaseValue)(a),i.columns),"--col-align-self":(0,v.getBaseValue)(n)}),S=(0,c.keys)(d).reduce((o,r)=>(o[r]||(o[r]={}),"object"==typeof t&&void 0!==t[r]&&(o[r]["--col-order"]=t[r]?.toString()),"object"==typeof e&&void 0!==e[r]&&(o[r]["--col-flex-grow"]=h(e[r],i.grow),o[r]["--col-flex-basis"]=y(e[r],i.columns),o[r]["--col-width"]="content"===e[r]?"auto":void 0,o[r]["--col-max-width"]=g(e[r],i.columns,i.grow)),"object"==typeof a&&void 0!==a[r]&&(o[r]["--col-offset"]=w(a[r],i.columns)),"object"==typeof n&&void 0!==n[r]&&(o[r]["--col-align-self"]=n[r]),o),{}),T=(0,u.getSortedBreakpoints)((0,c.keys)(S),d).filter(e=>(0,c.keys)(S[e.value]).length>0).map(e=>({query:"container"===i.type?`mantine-grid (min-width: ${d[e.value]})`:`(min-width: ${d[e.value]})`,styles:S[e.value]}));return(0,p.jsx)(f.InlineStyles,{styles:E,media:"container"===i.type?void 0:T,container:"container"===i.type?T:void 0,selector:o})}var x=e.i(56206);let E={span:12},S=(0,r.factory)(e=>{let{classNames:t,className:n,style:r,styles:d,vars:l,span:c,order:m,offset:u,align:v,...D}=(0,a.useProps)("GridCol",E,e),f=s(),y=(0,o.useRandomClassName)();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(Y,{selector:`.${y}`,span:c,order:m,offset:u,align:v}),(0,p.jsx)(i.Box,{...f.getStyles("col",{className:(0,x.default)(n,y),style:r,classNames:t,styles:d}),...D})]})});S.classes=l,S.displayName="@mantine/core/GridCol";var T=e.i(433512);function b({gap:e,rowGap:t,columnGap:a,selector:n,breakpoints:o,type:r}){let i=(0,D.useMantineTheme)(),d=o||i.breakpoints,s=(0,m.filterProps)({"--grid-gap":(0,T.getSpacing)((0,v.getBaseValue)(e)),"--grid-row-gap":(0,T.getSpacing)((0,v.getBaseValue)(t)),"--grid-column-gap":(0,T.getSpacing)((0,v.getBaseValue)(a))}),l=(0,c.keys)(d).reduce((n,o)=>(n[o]||(n[o]={}),"object"==typeof e&&void 0!==e[o]&&(n[o]["--grid-gap"]=(0,T.getSpacing)(e[o])),"object"==typeof t&&void 0!==t[o]&&(n[o]["--grid-row-gap"]=(0,T.getSpacing)(t[o])),"object"==typeof a&&void 0!==a[o]&&(n[o]["--grid-column-gap"]=(0,T.getSpacing)(a[o])),n),{}),y=(0,u.getSortedBreakpoints)((0,c.keys)(l),d).filter(e=>(0,c.keys)(l[e.value]).length>0).map(e=>({query:"container"===r?`mantine-grid (min-width: ${d[e.value]})`:`(min-width: ${d[e.value]})`,styles:l[e.value]}));return(0,p.jsx)(f.InlineStyles,{styles:s,media:"container"===r?void 0:y,container:"container"===r?y:void 0,selector:n})}let M={gap:"md",columns:12},$=(0,t.createVarsResolver)((e,{justify:t,align:a,overflow:n})=>({root:{"--grid-justify":t,"--grid-align":a,"--grid-overflow":n}})),j=(0,r.factory)(e=>{let t=(0,a.useProps)("Grid",M,e),{classNames:r,className:s,style:c,styles:m,unstyled:u,vars:v,grow:D,gap:f,rowGap:y,columnGap:g,columns:h,align:w,justify:Y,children:x,breakpoints:E,type:S,attributes:T,...j}=t,C=(0,n.useStyles)({name:"Grid",classes:l,props:t,className:s,style:c,classNames:r,styles:m,unstyled:u,attributes:T,vars:v,varsResolver:$}),V=(0,o.useRandomClassName)();return"container"===S&&E?(0,p.jsxs)(d,{value:{getStyles:C,grow:D,columns:h,breakpoints:E,type:S},children:[(0,p.jsx)(b,{selector:`.${V}`,...t}),(0,p.jsx)("div",{...C("container"),children:(0,p.jsx)(i.Box,{...C("root",{className:V}),...j,children:(0,p.jsx)("div",{...C("inner"),children:x})})})]}):(0,p.jsxs)(d,{value:{getStyles:C,grow:D,columns:h,breakpoints:E,type:S},children:[(0,p.jsx)(b,{selector:`.${V}`,...t}),(0,p.jsx)(i.Box,{...C("root",{className:V}),...j,children:(0,p.jsx)("div",{...C("inner"),children:x})})]})});j.classes=l,j.varsResolver=$,j.displayName="@mantine/core/Grid",j.Col=S,e.s(["Grid",0,j],20035)},67312,e=>{"use strict";var t=e.i(86473),a=e.i(891343),n={moreEventsButton:"m_c958249f",moreEventsDropdown:"m_fc2b9a3e",moreEventsList:"m_89f3254b"},o=e.i(424302),r=e.i(392862),i=e.i(284629),d=e.i(275519),s=e.i(44091),l=e.i(391466),c=e.i(541772),m=e.i(391398);let u={dropdownType:"popover"},v=(0,d.factory)(e=>{let d=(0,s.useProps)("MoreEvents",u,e),{classNames:v,className:D,style:f,styles:p,unstyled:y,vars:g,attributes:h,radius:w,dropdownType:Y,events:x,moreEventsCount:E,popoverProps:S,modalProps:T,onDropdownClose:b,children:M,modalTitle:$,renderEventBody:j,renderEvent:C,id:V,labels:k,mode:H,onEventClick:B,...R}=d,[I,A]=(0,c.useDisclosure)(),N=(0,l.useStyles)({name:"MoreEvents",classes:n,props:d,className:D,style:f,classNames:v,styles:p,unstyled:y,attributes:h,vars:g,rootSelector:"moreEventsButton"}),O=()=>{A.close(),b?.()},z=(0,m.jsx)("div",{...N("moreEventsList"),children:x.map(e=>(0,m.jsx)(a.ScheduleEvent,{radius:w,event:e,size:"md",renderEventBody:j,renderEvent:C,mode:H,onClick:B?t=>B(e,t):void 0,children:e.title},e.id))});return(0,m.jsxs)(m.Fragment,{children:["modal"===Y&&(0,m.jsx)(o.Modal,{opened:I,onClose:O,unstyled:y,radius:w,title:$,...T,children:z}),(0,m.jsxs)(r.Popover,{position:"bottom-start",width:260,opened:I,trapFocus:!0,returnFocus:!1,unstyled:y,disabled:S?.disabled||"modal"===Y,radius:w,transitionProps:{transition:"pop",duration:120},offset:-46,id:V,...S,onChange:e=>{e||(S?.onChange?.(e),O())},children:[(0,m.jsx)(r.Popover.Target,{children:(0,m.jsx)(i.UnstyledButton,{...N("moreEventsButton"),mod:{static:"static"===H},onClick:()=>A.toggle(),...R,children:(0,t.getLabel)("moreLabel",k)(E)})}),(0,m.jsx)(r.Popover.Dropdown,{...N("moreEventsDropdown"),children:z})]})]})});v.displayName="@mantine/schedule/MoreEvents",v.classes=n,e.s(["MoreEvents",0,v],67312)},922621,e=>{"use strict";var t=e.i(969610),a=e.i(813982),n=e.i(751198),o=e.i(532965);e.s(["getDayPositionedEvents",0,function({events:e,startTime:r,endTime:i,intervalMinutes:d,date:s}){let l=[],c=[];for(let m of(0,a.sortEvents)(e)){let e=(0,t.isAllDayEvent)({event:m,date:s}),a=0;for(;function({columns:e,columnIndex:a,event:o,allDay:r,date:i}){return!!e[a]&&e[a].some(e=>{let a=(0,t.isAllDayEvent)({event:e,date:i}),d=(0,n.isEventsOverlap)(e,o);return!r&&!a&&d})}({columns:l,columnIndex:a,event:m,allDay:e,date:s});)a++;l[a]||(l[a]=[]),l[a].push(m);let u=e?{top:0,height:100}:(0,o.getDayPosition)({event:m,startTime:r,endTime:i,intervalMinutes:d});c.push({...m,position:{...u,allDay:e,column:a,width:0,offset:0,overlaps:0}})}for(let e of c){let{allDay:t,column:a}=e.position;if(t){e.position.overlaps=1,e.position.width=100,e.position.offset=0;continue}let o=[];for(let t of c)t!==e&&!t.position.allDay&&(0,n.isEventsOverlap)(t,e)&&o.push(t);let r=a;for(let e of o)for(let t of(r=Math.max(r,e.position.column),c))t!==e&&!t.position.allDay&&(0,n.isEventsOverlap)(t,e)&&(r=Math.max(r,t.position.column));let i=r+1,d=i;for(let e of o)e.position.column>a&&e.position.column<d&&(d=e.position.column);let s=d-a;e.position.overlaps=i,e.position.width=s/i*100,e.position.offset=100*a/i}return c}])},200183,e=>{"use strict";var t=e.i(86473),a=e.i(27748),n=e.i(672654),o=e.i(898496),r=e.i(4332),i=e.i(969610),d=e.i(575148),s=e.i(792930),l=e.i(505696),c=e.i(657068),m=e.i(245086),u=e.i(783261),v=e.i(637079),D=e.i(376879),f=e.i(663551),p=e.i(312709),y=e.i(201867),g=e.i(891343),h=e.i(67312),w=e.i(966696),Y=e.i(298008),x=e.i(68642),E=e.i(532965),S=e.i(922621),T=e.i(494834),b={dayView:"m_3c5fb2d5",dayViewHeader:"m_d27b4dc2",dayViewScrollArea:"m_f2eec5af",dayViewInner:"m_d5502881",dayViewTimeSlots:"m_9389813",dayViewSlot:"m_cd179e73",dayViewSlotLabels:"m_c30b0852",dayViewSlotLabel:"m_2f950041",dayViewSlots:"m_d5dc3060",dayViewBackgroundEvent:"m_c5cd9a77",dayViewAllDay:"m_c6f08d70",dayViewAllDayEvents:"m_42b986a9"},M=e.i(232471),$=e.i(19300),j=e.i(284629),C=e.i(481178),V=e.i(275519),k=e.i(433512),H=e.i(779177),B=e.i(951254),R=e.i(44091),I=e.i(62904),A=e.i(391466),N=e.i(417241),O=e.i(332977),z=e.i(191788),G=e.i(205693),L=e.i(391398);let F={__staticSelector:"DayView",startTime:"00:00:00",endTime:"23:59:59",intervalMinutes:15,withSubHourGridLines:!0,withAllDaySlot:!0,slotLabelFormat:"HH:mm",headerFormat:"MMMM D, YYYY",withCurrentTimeBubble:!0,withHeader:!0,highlightBusinessHours:!1,businessHours:["09:00:00","17:00:00"],withEventsDragAndDrop:!1,withDragSlotSelect:!1,withEventResize:!1,mode:"default"},P=(0,C.createVarsResolver)((e,{radius:t,slotHeight:a,allDaySlotHeight:n})=>({dayView:{"--day-view-radius":void 0!==t?(0,k.getRadius)(t):void 0,"--day-view-slot-height":(0,H.rem)(a),"--day-view-all-day-slot-height":(0,H.rem)(n)}})),_=(0,V.factory)(e=>{let C=(0,R.useProps)("DayView",F,e),{classNames:V,className:k,style:H,styles:_,unstyled:U,attributes:W,vars:J,__staticSelector:K,startTime:Q,endTime:q,intervalMinutes:X,withSubHourGridLines:Z,withAllDaySlot:ee,date:et,locale:ea,slotLabelFormat:en,headerFormat:eo,getCurrentTime:er,withCurrentTimeIndicator:ei,withCurrentTimeBubble:ed,withHeader:es,radius:el,onDateChange:ec,onViewChange:em,previousControlProps:eu,nextControlProps:ev,todayControlProps:eD,viewSelectProps:ef,slotHeight:ep,allDaySlotHeight:ey,scrollAreaProps:eg,events:eh,moreEventsProps:ew,renderEventBody:eY,renderEvent:ex,labels:eE,highlightBusinessHours:eS,businessHours:eT,withEventsDragAndDrop:eb,onEventDrop:eM,canDragEvent:e$,onEventDragStart:ej,onEventDragEnd:eC,onTimeSlotClick:eV,onAllDaySlotClick:ek,onEventClick:eH,withDragSlotSelect:eB,onSlotDragEnd:eR,mode:eI,startScrollTime:eA,onExternalEventDrop:eN,withEventResize:eO,onEventResize:ez,canResizeEvent:eG,recurrenceExpansionLimit:eL,getTimeSlotProps:eF,withAgenda:eP,...e_}=C,[eU,eW]=(0,z.useState)(!1),eJ=(0,A.useStyles)({name:K,classes:b,props:C,className:k,style:H,classNames:V,styles:_,unstyled:U,attributes:W,vars:J,varsResolver:P,rootSelector:"dayView"}),{resolvedClassNames:eK,resolvedStyles:eQ}=(0,I.useResolvedStylesApi)({classNames:V,styles:_,props:C}),eq={classNames:eK,styles:eQ,attributes:W,__staticSelector:K,radius:el},eX=(0,B.useMantineTheme)(),eZ=(0,G.useDatesContext)(),e0=()=>er?(0,T.default)(er()):(0,T.default)(),e1=ei??(0,T.default)(et).isSame(e0(),"day"),e8=(0,o.getDayTimeIntervals)({startTime:Q,endTime:q,intervalMinutes:X}),e2=(0,z.useRef)([]),e3=(0,z.useRef)(null),e9=(0,z.useRef)(null),e4=(0,O.useMergedRef)(e3,eg?.viewportRef);(0,m.useAutoScrollOnDrag)({viewportRef:e3,enabled:(eb||!!eN)&&"static"!==eI}),(0,N.useIsomorphicEffect)(()=>{if(!eA||!e3.current||0===e2.current.length)return;let e=e8.findIndex(e=>e.startTime>=eA);if(e<0)return;let t=e2.current[e];if(!t)return;let a=t.getBoundingClientRect(),n=e3.current.getBoundingClientRect();e3.current.scrollTo({left:0,top:a.top-n.top})},[]);let e5=(0,z.useCallback)(e=>{let t=e2.current.findIndex(t=>{if(!t)return!1;let a=t.getBoundingClientRect();return e.clientY>=a.top&&e.clientY<=a.bottom});if(t>=0)return t;let a=e2.current[0],n=e2.current[e2.current.length-1];if(!a||!n)return null;let o=a.getBoundingClientRect(),r=n.getBoundingClientRect();return e.clientY<o.top?0:e.clientY>r.bottom?e2.current.length-1:null},[]),e6=(0,D.useSlotDragSelect)({enabled:eB&&"static"!==eI,onDragEnd:(e,t)=>{if(!eR)return;let a=(0,T.default)(et).format("YYYY-MM-DD");eR(`${a} ${e8[e].startTime}`,`${a} ${e8[t].endTime}`)}}),e7=function({events:e,date:t,startTime:a,endTime:n,intervalMinutes:o}){if(void 0===e)return{allDayEvents:[],regularEvents:[],backgroundTimedEvents:[],backgroundAllDayEvents:[]};let r=new Set,d=[],s=[],l=(0,T.default)(t).startOf("day"),c=(0,T.default)(t).endOf("day");for(let t of e){let e=(0,T.default)(t.start),o=(0,T.default)(t.end),i=e.isSame(l,"day"),m=!i&&"background"===t.display&&e.isBefore(c)&&o.isAfter(l);if(i||m){if(i&&!(0,x.isEventInTimeRange)({event:t,startTime:a,endTime:n}))continue;let e=(0,Y.validateEvent)(t);if(r.has(t.id))throw Error(`[@mantine/schedule] DayView: Duplicated event ids found: ${t.id}`);r.add(t.id),"background"===t.display?s.push(e):d.push(e)}}let m=(0,S.getDayPositionedEvents)({events:d,startTime:a,endTime:n,intervalMinutes:o,date:t}),u=[],v=[];for(let e of m)e.position.allDay?u.push(e):v.push(e);let D=[],f=[];for(let e of s){let r=(0,T.default)(e.start),d=(0,T.default)(e.end),s=r.isBefore(l)?l:r,m=d.isAfter(c)?c:d,u={...e,start:s.format("YYYY-MM-DD HH:mm:ss"),end:m.format("YYYY-MM-DD HH:mm:ss")};if((0,i.isAllDayEvent)({event:u,date:t}))f.push({...e,position:{top:0,height:100,allDay:!0,width:100,offset:0,column:0,overlaps:1}});else{let{top:t,height:r}=(0,E.getDayPosition)({event:u,startTime:a,endTime:n,intervalMinutes:o});if(r<=0)continue;D.push({...e,position:{top:t,height:r,allDay:!1,width:100,offset:0,column:0,overlaps:1}})}}return{allDayEvents:u,regularEvents:v,backgroundTimedEvents:D,backgroundAllDayEvents:f}}({events:(0,c.expandRecurringEvents)({events:eh,rangeStart:(0,T.default)(et).startOf("day").toDate(),rangeEnd:(0,T.default)(et).endOf("day").toDate(),expansionLimit:eL}),date:et,startTime:Q,endTime:q,intervalMinutes:X}),te=(0,z.useCallback)((e,t)=>{if(!eN)return;let a=(0,T.default)(et).format("YYYY-MM-DD");eN(e.dataTransfer,`${a} ${e8[t].startTime}`)},[eN,et,e8]),tt=(0,u.useDragDropHandlers)({enabled:eb,mode:eI,onEventDrop:eM,canDragEvent:e$,onEventDragStart:ej,onEventDragEnd:eC,calculateDropTarget:(e,t)=>{let a=e8[e].startTime;return(0,s.calculateDropTime)({draggedEvent:t,targetDate:et,targetSlotTime:a,intervalMinutes:X})},onExternalDrop:eN?te:void 0}),ta=(0,v.useEventResize)({enabled:eO,mode:eI,startTime:Q,endTime:q,intervalMinutes:X,onEventResize:ez,canResizeEvent:eG}),tn=(eb||!!eN)&&"static"!==eI,to=e7.regularEvents.map(e=>{let t=(0,i.isAllDayEvent)({event:e,date:et}),a=!t&&tt.isDraggableEvent(e),n=!t&&ta.isResizableEvent(e),o=ta.getResizePosition(e.id),r=o?o.top:e.position.top,d=o?o.height:e.position.height;return(0,L.jsx)(g.ScheduleEvent,{event:e,renderEventBody:eY,renderEvent:ex,autoSize:!0,draggable:a,withResize:n,isResizing:null!==o,onResizeStart:n?(t,a)=>{e9.current&&ta.handleResizeStart({event:e,edge:t,container:e9.current,originalTop:e.position.top,originalHeight:e.position.height,eventDate:(0,T.default)(et).format("YYYY-MM-DD"),pointerEvent:a})}:void 0,mode:eI,onClick:eH?t=>{ta.wasResizing()||eH(e,t)}:void 0,...eq,style:{...eq.styles?.event,top:`${r}%`,height:`${d}%`,insetInlineStart:`${e.position.offset}%`,width:`${e.position.width}%`,position:"absolute"}},e.id)}),tr=function({maxEvents:e,totalEvents:t}){return t<=e?{visibleEventsCount:t,hiddenEventsCount:0}:{visibleEventsCount:e-1,hiddenEventsCount:t-(e-1)}}({maxEvents:2,totalEvents:e7.allDayEvents.length}),ti=e7.allDayEvents.slice(0,tr.visibleEventsCount).map(e=>(0,L.jsx)(g.ScheduleEvent,{event:e,renderEventBody:eY,renderEvent:ex,style:{maxHeight:"50%"},nowrap:!0,autoSize:!0,mode:eI,onClick:eH?t=>eH(e,t):void 0,...eq},e.id)),td=(0,T.default)(et).format("YYYY-MM-DD"),ts=e8.map((e,a)=>{let o=tt.isDropTarget(a),r=e6.isSlotSelected(a,td),i=`${td} ${e.startTime}`,d=`${td} ${e.endTime}`,{onClick:s,...c}=eF?.({start:i,end:d})||{},m="static"===eI?void 0:e=>{eV?.({slotStart:i,slotEnd:d,nativeEvent:e}),s?.(e)};return(0,z.createElement)(j.UnstyledButton,{...eJ("dayViewSlot"),key:e.startTime,ref:e=>{e2.current[a]=e},mod:{first:0===a,"hour-start":e.isHourStart,...(0,l.getBusinessHoursMod)({time:e.startTime,businessHours:eT,highlightBusinessHours:eS}),"drop-target":o,"drag-selected":r,static:"static"===eI},__vars:{"--slot-size":`${(0,n.clampIntervalMinutes)(X)/60}`},"aria-label":`${(0,t.getLabel)("timeSlot",eE)} ${e.startTime} - ${e.endTime}`,tabIndex:"static"===eI?-1:0===a?0:-1,"data-drag-slot-index":eB&&"static"!==eI?a:void 0,"data-drag-slot-group":eB&&"static"!==eI?td:void 0,onKeyDown:"static"===eI?void 0:e=>{let t;"ArrowDown"===(t=e.key)&&a<e8.length-1?(e.preventDefault(),e2.current[a+1]?.focus()):"ArrowUp"===t&&a>0&&(e.preventDefault(),e2.current[a-1]?.focus())},onPointerDown:eB&&"static"!==eI?e=>e6.handleSlotPointerDown(e,a,td):void 0,onClick:m,onDragOver:tn?e=>e.preventDefault():void 0,...c})}),tl=e8.reduce((e,t)=>{if(t.isHourStart){let n=(0,T.default)(`${(0,T.default)(et).format("YYYY-MM-DD")} ${t.startTime}`),o=(0,a.formatDate)({locale:eZ.getLocale(ea),date:n,format:en});e.push((0,z.createElement)(M.Box,{...eJ("dayViewSlotLabel"),key:t.startTime,mod:(0,l.getBusinessHoursMod)({time:t.startTime,businessHours:eT,highlightBusinessHours:eS})},o))}return e},[]),tc=e7.backgroundAllDayEvents.map(e=>{let t=eX.variantColorResolver({color:e.color||eX.primaryColor,theme:eX,variant:"light",autoContrast:!0}),a="function"==typeof eY?eY(e):e.title,n={key:`bg-allday-${e.id}`,...eJ("dayViewBackgroundEvent",{style:{top:0,height:"100%",width:"100%"}}),__vars:{"--bg-event-bg":t.background,"--bg-event-color":t.color},children:a};if("function"==typeof ex)return ex(e,n);let{key:o,...r}=n;return(0,L.jsx)(M.Box,{...r},o)}),tm=e7.backgroundTimedEvents.map(e=>{let t=eX.variantColorResolver({color:e.color||eX.primaryColor,theme:eX,variant:"light",autoContrast:!0}),a="function"==typeof eY?eY(e):e.title,n={key:e.id,...eJ("dayViewBackgroundEvent",{style:{...(0,d.getTimeAxisEventStyle)({start:e.position.top,span:e.position.height,axis:"vertical"}),width:"100%"}}),__vars:{"--bg-event-bg":t.background,"--bg-event-color":t.color},children:a};if("function"==typeof ex)return ex(e,n);let{key:o,...r}=n;return(0,L.jsx)(M.Box,{...r},o)}),tu=(0,L.jsxs)(M.Box,{...eJ("dayView"),mod:{static:"static"===eI,"slot-dragging":e6.isDragging,"hide-sub-hour-grid-lines":!Z,"event-interaction":ta.isResizing||tt.dragContextValue.isDragging},...e_,children:[es&&(0,L.jsx)(w.ScheduleHeaderBase,{view:"day",navigationHandlers:{previous:()=>(0,r.toDateString)((0,T.default)(et).subtract(1,"day")),next:()=>(0,r.toDateString)((0,T.default)(et).add(1,"day")),today:()=>(0,r.toDateString)(e0())},control:{title:(0,a.formatDate)({locale:eZ.getLocale(ea),date:et,format:eo}),miw:140},labels:eE,onDateChange:ec,onViewChange:em,previousControlProps:eu,nextControlProps:ev,todayControlProps:eD,viewSelectProps:ef,stylesApiProps:eq,onAgendaClick:eP?()=>eW(e=>!e):void 0,agendaActive:eU}),eU&&(0,L.jsx)(f.AgendaView,{rangeStart:(0,T.default)(et).startOf("day").format("YYYY-MM-DD"),rangeEnd:(0,T.default)(et).endOf("day").format("YYYY-MM-DD"),events:eh,locale:ea,labels:eE,mode:eI,onEventClick:eH,recurrenceExpansionLimit:eL,...eq}),!eU&&(0,L.jsx)($.ScrollArea.Autosize,{scrollbarSize:4,...eg,...eJ("dayViewScrollArea",{className:eg?.className,style:eg?.style}),viewportRef:e4,children:(0,L.jsxs)(M.Box,{...eJ("dayViewInner"),children:[(0,L.jsxs)("div",{...eJ("dayViewSlotLabels"),children:[ee&&(0,L.jsx)(M.Box,{...eJ("dayViewSlotLabel"),mod:{"all-day":!0},children:(0,t.getLabel)("allDay",eE)}),tl]}),(0,L.jsxs)("div",{...eJ("dayViewSlots"),children:[ee&&(0,L.jsxs)("div",{...eJ("dayViewAllDay"),children:[tc,(0,L.jsxs)("div",{...eJ("dayViewAllDayEvents"),children:[ti,tr.hiddenEventsCount>0&&(0,L.jsx)(h.MoreEvents,{events:e7.allDayEvents,moreEventsCount:tr.hiddenEventsCount,renderEventBody:eY,renderEvent:ex,mode:eI,labels:eE,onEventClick:eH,...eq,...ew})]}),(0,L.jsx)(j.UnstyledButton,{...eJ("dayViewSlot"),mod:{"all-day":!0,static:"static"===eI},"aria-label":`${(0,t.getLabel)("timeSlot",eE)} ${(0,t.getLabel)("allDay",eE)}`,onClick:"static"!==eI&&ek?e=>{ek((0,T.default)(et).format("YYYY-MM-DD"),e)}:void 0})]}),(0,L.jsxs)("div",{ref:e9,...eJ("dayViewTimeSlots"),onDragOver:tn?e=>{let t=e5(e);null!==t&&tt.handleDragOver(e,t)}:void 0,onDragLeave:tn?tt.handleDragLeave:void 0,onDrop:tn?e=>{let t=e5(e);null!==t&&tt.handleDrop(e,t)}:void 0,children:[tm,to,e1&&(0,L.jsx)(p.CurrentTimeIndicator,{startOffset:"calc(var(--day-view-slot-labels-width) * -1)",endOffset:"0rem",topOffset:"0rem",timeBubbleStartOffset:"calc(var(--day-view-slot-labels-width) * -1 + 30px)",currentTimeFormat:en,withTimeBubble:ed,withThumb:!ed,locale:ea,startTime:Q,endTime:q,intervalMinutes:X,getCurrentTime:er,...eq}),ts]})]})]})})]});return eb?(0,L.jsx)(y.DragContext.Provider,{value:tt.dragContextValue,children:tu}):tu});_.displayName="@mantine/schedule/DayView",_.classes=b,_.varsResolver=P,e.s(["DayView",0,_],200183)},625003,e=>{"use strict";var t=e.i(648863),a=e.i(494834);let n=(0,a.default)().format("YYYY-MM-DD"),o=[{id:1,title:"Morning Standup",start:`${n} 09:00:00`,end:`${n} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${n} 10:00:00`,end:`${n} 11:30:00`,color:"green"},{id:3,title:"Lunch Break",start:`${n} 12:00:00`,end:`${n} 13:00:00`,color:"orange"},{id:4,title:"Code Review",start:`${n} 14:00:00`,end:`${n} 15:00:00`,color:"violet"},{id:5,title:"Client Call",start:`${n} 15:30:00`,end:`${n} 16:30:00`,color:"cyan"},{id:6,title:"All Day Conference",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"}],r=[{id:1,title:"Workshop Session 1",start:`${n} 10:00:00`,end:`${n} 11:30:00`,color:"blue"},{id:2,title:"Workshop Session 2",start:`${n} 11:00:00`,end:`${n} 12:30:00`,color:"violet"},{id:3,title:"Workshop Session 3",start:`${n} 11:30:00`,end:`${n} 13:00:00`,color:"cyan"},{id:4,title:"Full Day Session",start:`${n} 10:00:00`,end:`${n} 16:00:00`,color:"green"}],i=[{id:1,title:"Conference Day",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"},{id:2,title:"Holiday",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"pink"},{id:3,title:"Team Building",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"orange"},{id:4,title:"Product Launch",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"green"},{id:5,title:"Year Kickoff",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"blue"}],d=[{id:1,title:"Early Morning Meeting",start:`${n} 08:30:00`,end:`${n} 09:00:00`,color:"blue"},{id:2,title:"Business Hours Task 1",start:`${n} 10:00:00`,end:`${n} 11:00:00`,color:"green"},{id:3,title:"Business Hours Task 2",start:`${n} 14:00:00`,end:`${n} 15:00:00`,color:"violet"},{id:4,title:"Evening Sync",start:`${n} 17:30:00`,end:`${n} 18:00:00`,color:"orange"}],s=`
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');

const events = [
  {
    id: 1,
    title: 'Morning Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Team Meeting',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Lunch Break',
    start: \`\${today} 12:00:00\`,
    end: \`\${today} 13:00:00\`,
    color: 'orange',
  },
  {
    id: 4,
    title: 'Code Review',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'violet',
  },
  {
    id: 5,
    title: 'Client Call',
    start: \`\${today} 15:30:00\`,
    end: \`\${today} 16:30:00\`,
    color: 'cyan',
  },
  {
    id: 6,
    title: 'All Day Conference',
    start: \`\${today} 00:00:00\`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
];
`,l=`
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');

const events = [
  {
    id: 1,
    title: 'Workshop Session 1',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Workshop Session 2',
    start: \`\${today} 11:00:00\`,
    end: \`\${today} 12:30:00\`,
    color: 'violet',
  },
  {
    id: 3,
    title: 'Workshop Session 3',
    start: \`\${today} 11:30:00\`,
    end: \`\${today} 13:00:00\`,
    color: 'cyan',
  },
  {
    id: 4,
    title: 'Full Day Session',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 16:00:00\`,
    color: 'green',
  },
];
`,c=`
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');

const events = [
  {
    id: 1,
    title: 'Conference Day',
    start: \`\${today} 00:00:00\`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
  {
    id: 2,
    title: 'Holiday',
    start: \`\${today} 00:00:00\`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'pink',
  },
  {
    id: 3,
    title: 'Team Building',
    start: \`\${today} 00:00:00\`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'orange',
  },
  {
    id: 4,
    title: 'Product Launch',
    start: \`\${today} 00:00:00\`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'green',
  },
  {
    id: 5,
    title: 'Year Kickoff',
    start: \`\${today} 00:00:00\`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'blue',
  },
];
`,m=`
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');

const events = [
  {
    id: 1,
    title: 'Early Morning Meeting',
    start: \`\${today} 08:30:00\`,
    end: \`\${today} 09:00:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Business Hours Task 1',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:00:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Business Hours Task 2',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'violet',
  },
  {
    id: 4,
    title: 'Evening Sync',
    start: \`\${today} 17:30:00\`,
    end: \`\${today} 18:00:00\`,
    color: 'orange',
  },
];
`;var u=e.i(191788),v=e.i(391398),D=e.i(200183);let f={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,v.jsx)(D.DayView,{date:e,onDateChange:t,events:o,startTime:"08:00:00",endTime:"18:00:00"})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <DayView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},p={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:o,startTime:"09:00:00",endTime:"17:00:00"})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="09:00:00"
      endTime="17:00:00"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},y={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:30})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      intervalMinutes={30}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},g=(0,a.default)().format("YYYY-MM-DD"),h=[{id:1,title:"Morning Standup",start:`${g} 09:00:00`,end:`${g} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${g} 11:15:00`,end:`${g} 12:00:00`,color:"green"},{id:3,title:"Code Review",start:`${g} 14:00:00`,end:`${g} 14:45:00`,color:"violet"}],w={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(h);return(0,v.jsx)(D.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:15,withSubHourGridLines:!1,withEventResize:!0,onEventResize:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { DayView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const initialEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Morning Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Team Meeting',
    start: \`\${today} 11:15:00\`,
    end: \`\${today} 12:00:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Code Review',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 14:45:00\`,
    color: 'violet',
  },
];

function Demo() {
  const [events, setEvents] = useState(initialEvents);

  const handleEventResize = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  // Events snap to 15 minutes increments, but only one grid line per hour is displayed
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      intervalMinutes={15}
      withSubHourGridLines={false}
      withEventResize
      onEventResize={handleEventResize}
    />
  );
}
`},Y={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00"})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:c,language:"tsx",fileName:"data.ts"}]},x={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:r,startTime:"08:00:00",endTime:"18:00:00"})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},E={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:o,withCurrentTimeIndicator:!0,withCurrentTimeBubble:!0})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      withCurrentTimeIndicator
      withCurrentTimeBubble
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};var S=e.i(988798),T=e.i(671640),b=e.i(664894),M=e.i(53157);a.default.extend(M.default),a.default.extend(b.default);let $=["UTC","America/New_York","Europe/Berlin","Asia/Kolkata","Asia/Tokyo"],j={type:"code",component:function(){let[e,t]=(0,u.useState)("UTC"),n=()=>(0,a.default)().tz(e).format("YYYY-MM-DD HH:mm:ss"),o=n().split(" ")[0];return(0,v.jsxs)(T.Stack,{children:[(0,v.jsx)(S.Select,{label:"Display timezone",data:$,value:e,onChange:e=>t(e),allowDeselect:!1}),(0,v.jsx)(D.DayView,{date:o,events:[{id:1,title:"Morning standup",start:`${o} 09:00:00`,end:`${o} 09:30:00`,color:"blue"},{id:2,title:"Team meeting",start:`${o} 12:00:00`,end:`${o} 13:00:00`,color:"teal"},{id:3,title:"Code review",start:`${o} 16:00:00`,end:`${o} 17:00:00`,color:"grape"}],getCurrentTime:n,startScrollTime:(0,a.default)(n()).subtract(2,"hour").format("HH:mm:ss"),withCurrentTimeIndicator:!0,withCurrentTimeBubble:!0})]})},code:[{code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { Select, Stack } from '@mantine/core';
import { DayView } from '@mantine/schedule';
import { getEvents } from './data';

dayjs.extend(utc);
dayjs.extend(timezone);

const timezones = ['UTC', 'America/New_York', 'Europe/Berlin', 'Asia/Kolkata', 'Asia/Tokyo'];

function Demo() {
  const [tz, setTz] = useState('UTC');

  // getCurrentTime is called on every tick, so the indicator keeps updating
  const getCurrentTime = () => dayjs().tz(tz).format('YYYY-MM-DD HH:mm:ss');
  const currentDate = getCurrentTime().split(' ')[0];

  return (
    <Stack>
      <Select
        label="Display timezone"
        data={timezones}
        value={tz}
        onChange={(value) => setTz(value!)}
        allowDeselect={false}
      />

      <DayView
        date={currentDate}
        events={getEvents(currentDate)}
        getCurrentTime={getCurrentTime}
        startScrollTime={dayjs(getCurrentTime()).subtract(2, 'hour').format('HH:mm:ss')}
        withCurrentTimeIndicator
        withCurrentTimeBubble
      />
    </Stack>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:"\nimport dayjs from 'dayjs';\nimport { ScheduleEventData } from '@mantine/schedule';\n\nexport function getEvents(date: string): ScheduleEventData[] {\n  return [\n    { id: 1, title: 'Morning standup', start: `${date} 09:00:00`, end: `${date} 09:30:00`, color: 'blue' },\n    { id: 2, title: 'Team meeting', start: `${date} 12:00:00`, end: `${date} 13:00:00`, color: 'teal' },\n    { id: 3, title: 'Code review', start: `${date} 16:00:00`, end: `${date} 17:00:00`, color: 'grape' },\n  ];\n}\n",language:"tsx",fileName:"data.ts"}]},C={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:d,highlightBusinessHours:!0,businessHours:["09:00:00","17:00:00"]})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      highlightBusinessHours
      businessHours={['09:00:00', '17:00:00']}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:m,language:"tsx",fileName:"data.ts"}]},V={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",slotHeight:80,allDaySlotHeight:60})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      slotHeight={80}
      allDaySlotHeight={60}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},k={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",withHeader:!1})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withHeader={false}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},H={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",headerFormat:"dddd, MMMM D"})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      headerFormat="dddd, MMMM D"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},B={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",slotLabelFormat:"h:mm A"})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      slotLabelFormat="h:mm A"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},R={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",radius:0})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      radius={0}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},I=(0,a.default)().format("YYYY-MM-DD"),A=[{id:1,title:"Morning Standup",start:`${I} 09:00:00`,end:`${I} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${I} 11:00:00`,end:`${I} 12:00:00`,color:"green"},{id:3,title:"Code Review",start:`${I} 14:00:00`,end:`${I} 15:00:00`,color:"violet"}],N={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(A);return(0,v.jsx)(D.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { DayView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const initialEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Morning Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Team Meeting',
    start: \`\${today} 11:00:00\`,
    end: \`\${today} 12:00:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Code Review',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'violet',
  },
];

function Demo() {
  const [events, setEvents] = useState(initialEvents);

  const handleEventDrop = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventsDragAndDrop
      onEventDrop={handleEventDrop}
    />
  );
}
`},O=(0,a.default)().format("YYYY-MM-DD"),z=[{id:1,title:"Draggable Event",start:`${O} 09:00:00`,end:`${O} 10:00:00`,color:"blue"},{id:2,title:"Locked Event",start:`${O} 11:00:00`,end:`${O} 12:00:00`,color:"gray",payload:{locked:!0}},{id:3,title:"Another Draggable",start:`${O} 14:00:00`,end:`${O} 15:00:00`,color:"green"}],G={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(z);return(0,v.jsx)(D.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))},canDragEvent:e=>!e.payload?.locked})},code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { DayView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const initialEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Draggable Event',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 10:00:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Locked Event',
    start: \`\${today} 11:00:00\`,
    end: \`\${today} 12:00:00\`,
    color: 'gray',
    payload: { locked: true },
  },
  {
    id: 3,
    title: 'Another Draggable',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'green',
  },
];

function Demo() {
  const [events, setEvents] = useState(initialEvents);

  const handleEventDrop = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventsDragAndDrop
      onEventDrop={handleEventDrop}
      canDragEvent={(event) => !event.payload?.locked}
    />
  );
}
`},L=(0,a.default)().format("YYYY-MM-DD"),F=[{id:1,title:"Morning Standup",start:`${L} 09:00:00`,end:`${L} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${L} 11:00:00`,end:`${L} 12:00:00`,color:"green"},{id:3,title:"Code Review",start:`${L} 14:00:00`,end:`${L} 15:00:00`,color:"violet"}],P={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(F);return(0,v.jsx)(D.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventResize:!0,onEventResize:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { DayView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const initialEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Morning Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Team Meeting',
    start: \`\${today} 11:00:00\`,
    end: \`\${today} 12:00:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Code Review',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'violet',
  },
];

function Demo() {
  const [events, setEvents] = useState(initialEvents);

  const handleEventResize = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventResize
      onEventResize={handleEventResize}
    />
  );
}
`},_=(0,a.default)().format("YYYY-MM-DD"),U=[{id:1,title:"Resizable Event",start:`${_} 09:00:00`,end:`${_} 10:00:00`,color:"blue"},{id:2,title:"Locked Event",start:`${_} 11:00:00`,end:`${_} 12:00:00`,color:"gray",payload:{locked:!0}},{id:3,title:"Another Resizable",start:`${_} 14:00:00`,end:`${_} 15:00:00`,color:"green"}],W={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(U);return(0,v.jsx)(D.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventResize:!0,onEventResize:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))},canResizeEvent:e=>!e.payload?.locked})},code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { DayView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const initialEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Resizable Event',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 10:00:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Locked Event',
    start: \`\${today} 11:00:00\`,
    end: \`\${today} 12:00:00\`,
    color: 'gray',
    payload: { locked: true },
  },
  {
    id: 3,
    title: 'Another Resizable',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'green',
  },
];

function Demo() {
  const [events, setEvents] = useState(initialEvents);

  const handleEventResize = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventResize
      onEventResize={handleEventResize}
      canResizeEvent={(event) => !event.payload?.locked}
    />
  );
}
`};var J=e.i(593612),K=e.i(554166),Q=e.i(725695),q=e.i(883364);let X=(0,a.default)().format("YYYY-MM-DD"),Z=[{id:1,title:"Morning Standup",start:`${X} 09:00:00`,end:`${X} 09:30:00`,color:"blue",payload:{location:"Room A"}},{id:2,title:"Client Meeting",start:`${X} 11:00:00`,end:`${X} 12:00:00`,color:"green",payload:{location:"Video Call"}},{id:3,title:"Lunch Break",start:`${X} 12:30:00`,end:`${X} 13:30:00`,color:"orange",payload:{location:"Cafeteria"}}],ee={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:Z,startTime:"08:00:00",endTime:"18:00:00",renderEventBody:e=>(0,v.jsxs)(Q.Group,{children:[(0,v.jsx)(q.Text,{fz:12,fw:500,children:e.title}),(0,v.jsxs)(Q.Group,{gap:4,children:[(0,v.jsx)(J.ClockIcon,{size:12}),(0,v.jsx)(q.Text,{fz:10,lh:1,children:(0,a.default)(e.start).format("h:mm A")})]}),e.payload?.location&&(0,v.jsxs)(Q.Group,{gap:4,children:[(0,v.jsx)(K.MapPinIcon,{size:12}),(0,v.jsx)(q.Text,{fz:10,children:e.payload.location})]})]})})},code:`
import dayjs from 'dayjs';
import { ClockIcon, MapPinIcon } from '@phosphor-icons/react';
import { Group, Text } from '@mantine/core';
import { DayView, ScheduleEventData } from '@mantine/schedule';

const events: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Morning Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
    payload: { location: 'Room A' },
  },
  // ... more events
];

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      renderEventBody={(event) => (
        <Group>
          <Text fz={12} fw={500}>
            {event.title}
          </Text>
          <Group gap={4}>
            <ClockIcon size={12} />
            <Text fz={10} lh={1}>
              {dayjs(event.start).format('h:mm A')}
            </Text>
          </Group>

          {event.payload?.location && (
            <Group gap={4}>
              <MapPinIcon size={12} />
              <Text fz={10}>{event.payload.location}</Text>
            </Group>
          )}
        </Group>
      )}
    />
  );
}
`};var et=e.i(19683),ea=e.i(369974),en=e.i(284629);let eo=(0,a.default)().format("YYYY-MM-DD"),er=[{id:1,title:"Team Standup",start:`${eo} 09:00:00`,end:`${eo} 09:30:00`,color:"blue",payload:{description:"Daily team sync meeting",attendees:["Alice","Bob","Charlie"],location:"Conference Room A"}},{id:2,title:"Design Review",start:`${eo} 10:00:00`,end:`${eo} 11:30:00`,color:"grape",payload:{description:"Review UI/UX designs for new feature",attendees:["Diana","Eve"],location:"Virtual Meeting"}},{id:3,title:"Client Presentation",start:`${eo} 14:00:00`,end:`${eo} 15:30:00`,color:"green",payload:{description:"Q4 progress presentation to client",attendees:["Frank","Grace","Henry"],location:"Zoom"}},{id:4,title:"Code Review",start:`${eo} 16:00:00`,end:`${eo} 17:00:00`,color:"orange",payload:{description:"Review pull requests from this week",attendees:["Alice","Charlie"],location:"Dev Lab"}}],ei={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(er);return(0,v.jsx)(D.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:n,newEnd:o})=>{t(t=>t.map(t=>t.id===e?{...t,start:(0,a.default)(n).format("YYYY-MM-DD HH:mm:ss"),end:(0,a.default)(o).format("YYYY-MM-DD HH:mm:ss")}:t))},renderEvent:(e,t)=>(0,v.jsxs)(ea.HoverCard,{width:280,position:"bottom",closeDelay:0,transitionProps:{duration:0},children:[(0,v.jsx)(ea.HoverCard.Target,{children:(0,v.jsx)(en.UnstyledButton,{...t})}),(0,v.jsx)(ea.HoverCard.Dropdown,{children:(0,v.jsx)(et.EventDetails,{event:e})})]})})},code:[{fileName:"Demo.tsx",code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { HoverCard, UnstyledButton } from '@mantine/core';
import { DayView, ScheduleEventData } from '@mantine/schedule';
import { EventDetails } from './EventDetails';
import { eventsData } from './events';

function Demo() {
  const [events, setEvents] = useState<ScheduleEventData[]>(eventData);

  return (
    <DayView
      date={new Date()}
      events={selectedEvents}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventsDragAndDrop
      onEventDrop={({ eventId, newStart, newEnd }) => {
        setEvents((current) =>
          current.map((event) =>
            event.id === eventId
              ? {
                  ...event,
                  start: dayjs(newStart).format('YYYY-MM-DD HH:mm:ss'),
                  end: dayjs(newEnd).format('YYYY-MM-DD HH:mm:ss'),
                }
              : event
          )
        );
      }}
      renderEvent={(event, props) => (
        <HoverCard width={280} position="bottom" closeDelay={0} transitionProps={{ duration: 0 }}>
          <HoverCard.Target>
            <UnstyledButton {...props} />
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <EventDetails event={event} />
          </HoverCard.Dropdown>
        </HoverCard>
      )}
    />
  );
}
`,language:"tsx"},{fileName:"EventDetails.tsx",code:et._eventDetailsCode,language:"tsx"},{fileName:"events.ts",code:`import { ScheduleEventData } from '@mantine/schedule';

export const eventsData: ScheduleEventData[] = ${JSON.stringify(er,null,2)};`,language:"tsx"}]},ed={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",mode:"static"})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      mode="static"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},es={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",labels:{allDay:"Todo el día",timeSlot:"Franja horaria",today:"Hoy",previous:"Anterior",next:"Siguiente"}})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      labels={{
        allDay: 'Todo el d\xeda',
        timeSlot: 'Franja horaria',
        today: 'Hoy',
        previous: 'Anterior',
        next: 'Siguiente',
      }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};var el=e.i(485108);let ec={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,v.jsxs)("div",{children:[(0,v.jsxs)(Q.Group,{mb:"md",children:[(0,v.jsx)(el.Button,{onClick:()=>t((0,a.default)(e).subtract(1,"day").format("YYYY-MM-DD HH:mm:ss")),children:"Previous Day"}),(0,v.jsx)(q.Text,{fw:500,children:(0,a.default)(e).format("MMMM D, YYYY")}),(0,v.jsx)(el.Button,{onClick:()=>t((0,a.default)(e).add(1,"day").format("YYYY-MM-DD HH:mm:ss")),children:"Next Day"})]}),(0,v.jsx)(D.DayView,{date:e,onDateChange:t,events:o,startTime:"08:00:00",endTime:"18:00:00"})]})},code:[{code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { DayView } from '@mantine/schedule';
import { Button, Group, Text } from '@mantine/core';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <div>
      <Group mb="md">
        <Button onClick={() => setDate(dayjs(date).subtract(1, 'day').format('YYYY-MM-DD HH:mm:ss'))}>
          Previous Day
        </Button>
        <Text fw={500}>{dayjs(date).format('MMMM D, YYYY')}</Text>
        <Button onClick={() => setDate(dayjs(date).add(1, 'day').format('YYYY-MM-DD HH:mm:ss'))}>
          Next Day
        </Button>
      </Group>

      <DayView
        date={date}
        onDateChange={setDate}
        events={events}
        startTime="08:00:00"
        endTime="18:00:00"
      />
    </div>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},em={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)("day");return(0,v.jsxs)("div",{children:[(0,v.jsxs)(q.Text,{mb:"md",children:["Selected view: ",e]}),(0,v.jsx)(D.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",onViewChange:t})]})},code:[{code:`
import { useState } from 'react';
import { DayView, ScheduleViewLevel } from '@mantine/schedule';
import { Text } from '@mantine/core';
import { events } from './data';

function Demo() {
  const [view, setView] = useState<ScheduleViewLevel>('day');

  return (
    <div>
      <Text mb="md">Selected view: {view}</Text>

      <DayView
        date={new Date()}
        events={events}
        startTime="08:00:00"
        endTime="18:00:00"
        onViewChange={setView}
      />
    </div>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};var eu=e.i(162077);let ev={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD")),[n,r]=(0,u.useState)(o),[i,d]=(0,u.useState)(!1),[s,l]=(0,u.useState)(null);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(D.DayView,{date:e,onDateChange:t,events:n,withDragSlotSelect:!0,onTimeSlotClick:({slotStart:e,slotEnd:t})=>{l({title:"",start:new Date(e),end:new Date(t),color:"blue"}),d(!0)},onAllDaySlotClick:e=>{l({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),d(!0)},onSlotDragEnd:(e,t)=>{l({title:"",start:new Date(e),end:new Date(t),color:"blue"}),d(!0)},onEventClick:e=>{l({id:e.id,title:e.title,start:new Date(e.start),end:new Date(e.end),color:e.color||"blue"}),d(!0)},startTime:"08:00:00",endTime:"18:00:00"}),(0,v.jsx)(eu.EventForm,{opened:i,onClose:()=>d(!1),onExitTransitionEnd:()=>l(null),values:s,onSubmit:e=>{e.id?r(t=>t.map(t=>t.id===e.id?{...t,title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}:t)):r(t=>[...t,{id:Math.random().toString(36).substring(2,11),title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}])},onDelete:s?.id?()=>{s?.id&&r(e=>e.filter(e=>e.id!==s.id))}:void 0})]})},code:[{code:`import dayjs from 'dayjs';
import { useState } from 'react';
import { DayView, ScheduleEventData } from '@mantine/schedule';
import { EventData, EventForm } from './EventForm';
import { events } from './events';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [events, setEvents] = useState<ScheduleEventData[]>(events);
  const [formOpened, setFormOpened] = useState(false);
  const [selectedEventData, setSelectedEventData] = useState<EventData | null>(null);

  const handleTimeSlotClick = ({ slotStart, slotEnd }: { slotStart: string; slotEnd: string }) => {
    setSelectedEventData({
      title: '',
      start: new Date(slotStart),
      end: new Date(slotEnd),
      color: 'blue',
    });
    setFormOpened(true);
  };

  const handleAllDaySlotClick = (slotDate: string) => {
    setSelectedEventData({
      title: '',
      start: dayjs(slotDate).startOf('day').toDate(),
      end: dayjs(slotDate).endOf('day').toDate(),
      color: 'blue',
    });
    setFormOpened(true);
  };

  const handleEventClick = (event: ScheduleEventData) => {
    setSelectedEventData({
      id: event.id,
      title: event.title,
      start: new Date(event.start),
      end: new Date(event.end),
      color: event.color || 'blue',
    });
    setFormOpened(true);
  };

  const handleSubmit = (values: EventData) => {
    if (values.id) {
      setEvents((prev) =>
        prev.map((event) =>
          event.id === values.id
            ? {
                ...event,
                title: values.title,
                start: dayjs(values.start).toISOString(),
                end: dayjs(values.end).toISOString(),
                color: values.color || 'blue',
              }
            : event
        )
      );
    } else {
      setEvents((prev) => [
        ...prev,
        {
          id: Math.random().toString(36).substring(2, 11),
          title: values.title,
          start: dayjs(values.start).toISOString(),
          end: dayjs(values.end).toISOString(),
          color: values.color || 'blue',
        },
      ]);
    }
  };

  const handleSlotDragEnd = (rangeStart: string, rangeEnd: string) => {
    setSelectedEventData({
      title: '',
      start: new Date(rangeStart),
      end: new Date(rangeEnd),
      color: 'blue',
    });
    setFormOpened(true);
  };

  const handleDeleteEvent = () => {
    if (selectedEventData?.id) {
      setEvents((prev) => prev.filter((event) => event.id !== selectedEventData.id));
    }
  };

  return (
    <>
      <DayView
        date={date}
        onDateChange={setDate}
        events={events}
        withDragSlotSelect
        onTimeSlotClick={handleTimeSlotClick}
        onAllDaySlotClick={handleAllDaySlotClick}
        onSlotDragEnd={handleSlotDragEnd}
        onEventClick={handleEventClick}
        startTime="08:00:00"
        endTime="18:00:00"
      />

      <EventForm
        opened={formOpened}
        onClose={() => setFormOpened(false)}
        onExitTransitionEnd={() => setSelectedEventData(null)}
        values={selectedEventData}
        onSubmit={handleSubmit}
        onDelete={selectedEventData?.id ? handleDeleteEvent : undefined}
      />
    </>
  );
}`,language:"tsx",fileName:"Demo.tsx"},{code:eu._eventFormCode,language:"tsx",fileName:"EventForm.tsx"},{code:s,language:"tsx",fileName:"events.ts"}]},eD={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(o);return(0,v.jsx)(D.DayView,{date:new Date,events:e,startScrollTime:"09:00:00",scrollAreaProps:{mah:500},withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:[{code:`
import { useState } from 'react';
import { DayView, ScheduleEventData } from '@mantine/schedule';
import { events as initialEvents } from './data';

function Demo() {
  const [events, setEvents] = useState(initialEvents);

  const handleEventDrop = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return (
    <DayView
      date={new Date()}
      events={events}
      startScrollTime="09:00:00"
      scrollAreaProps={{ mah: 500 }}
      withEventsDragAndDrop
      onEventDrop={handleEventDrop}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};var ef=e.i(232471),ep=e.i(20035);let ey=(0,a.default)().format("YYYY-MM-DD"),eg=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],eh={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)([]),n=(0,u.useRef)(1);return(0,v.jsxs)(ep.Grid,{children:[(0,v.jsxs)(ep.Grid.Col,{span:{base:12,sm:3},children:[(0,v.jsx)(q.Text,{fw:500,mb:"xs",children:"Drag to schedule"}),eg.map(e=>(0,v.jsxs)(ef.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,v.jsx)(q.Text,{size:"sm",fw:500,children:e.title}),(0,v.jsxs)(q.Text,{size:"xs",children:[e.duration," min"]})]},e.title))]}),(0,v.jsx)(ep.Grid.Col,{span:{base:12,sm:9},children:(0,v.jsx)(D.DayView,{date:ey,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))},onExternalEventDrop:(e,o)=>{let r=e.getData("text/plain");if(!r)return;let i=JSON.parse(r),d=(0,a.default)(o),s=d.add(i.duration,"minutes");t(e=>[...e,{id:n.current++,title:i.title,start:d.format("YYYY-MM-DD HH:mm:ss"),end:s.format("YYYY-MM-DD HH:mm:ss"),color:i.color}])}})})]})},code:`
import { useRef, useState } from 'react';
import dayjs from 'dayjs';
import { Box, Grid, Text } from '@mantine/core';
import { DayView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const sidebarItems = [
  { title: 'Quick Sync', duration: 30, color: 'teal' },
  { title: 'Workshop', duration: 120, color: 'orange' },
  { title: 'One-on-One', duration: 60, color: 'violet' },
];

function Demo() {
  const [events, setEvents] = useState<ScheduleEventData[]>([]);
  const nextId = useRef(1);

  const handleExternalDrop = (dataTransfer: DataTransfer, dropDateTime: string) => {
    const raw = dataTransfer.getData('text/plain');
    if (!raw) {
      return;
    }

    const data = JSON.parse(raw);
    const start = dayjs(dropDateTime);
    const end = start.add(data.duration, 'minutes');

    setEvents((prev) => [
      ...prev,
      {
        id: nextId.current++,
        title: data.title,
        start: start.format('YYYY-MM-DD HH:mm:ss'),
        end: end.format('YYYY-MM-DD HH:mm:ss'),
        color: data.color,
      },
    ]);
  };

  const handleEventDrop = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return (
    <Grid>
      <Grid.Col span={{ base: 12, sm: 3 }}>
        <Text fw={500} mb="xs">Drag to schedule</Text>
        {sidebarItems.map((item) => (
          <Box
            key={item.title}
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData('text/plain', JSON.stringify(item));
              e.dataTransfer.effectAllowed = 'copy';
            }}
            style={{
              padding: '8px 12px',
              marginBottom: 8,
              borderRadius: 4,
              cursor: 'grab',
              backgroundColor: \`var(--mantine-color-\${item.color}-light)\`,
              color: \`var(--mantine-color-\${item.color}-light-color)\`,
            }}
          >
            <Text size="sm" fw={500}>{item.title}</Text>
            <Text size="xs">{item.duration} min</Text>
          </Box>
        ))}
      </Grid.Col>
      <Grid.Col span={{ base: 12, sm: 9 }}>
        <DayView
          date={new Date()}
          events={events}
          startTime="08:00:00"
          endTime="18:00:00"
          withEventsDragAndDrop
          onEventDrop={handleEventDrop}
          onExternalEventDrop={handleExternalDrop}
        />
      </Grid.Col>
    </Grid>
  );
}
`},ew=(0,a.default)().format("YYYY-MM-DD"),eY=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],ex={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(eY),[n,o]=(0,u.useState)([]),[r,i]=(0,u.useState)(!1),d=(0,u.useRef)(1);return(0,v.jsxs)(ep.Grid,{children:[(0,v.jsx)(ep.Grid.Col,{span:{base:12,sm:3},children:(0,v.jsxs)(ef.Box,{onDragOver:e=>{e.preventDefault(),e.dataTransfer.dropEffect="move",i(!0)},onDragLeave:()=>i(!1),onDrop:e=>{e.preventDefault(),i(!1);let r=e.dataTransfer.getData("application/json");if(!r)return;let{eventId:d}=JSON.parse(r),s=n.find(e=>String(e.id)===String(d));if(!s)return;let l=(0,a.default)(s.end).diff((0,a.default)(s.start),"minutes");t(e=>[...e,{title:s.title,duration:l,color:s.color||"blue"}]),o(e=>e.filter(e=>e.id!==s.id))},style:{padding:8,borderRadius:8,border:r?"2px dashed var(--mantine-color-blue-5)":"2px dashed transparent",transition:"border-color 150ms"},children:[(0,v.jsx)(q.Text,{fw:500,mb:"xs",children:"Unscheduled"}),e.map(e=>(0,v.jsxs)(ef.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,v.jsx)(q.Text,{size:"sm",fw:500,children:e.title}),(0,v.jsxs)(q.Text,{size:"xs",children:[e.duration," min"]})]},e.title)),0===e.length&&(0,v.jsx)(q.Text,{size:"xs",c:"dimmed",children:"Drag events here to unschedule"})]})}),(0,v.jsx)(ep.Grid.Col,{span:{base:12,sm:9},children:(0,v.jsx)(D.DayView,{date:ew,events:n,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:a})=>{o(n=>n.map(n=>n.id===e?{...n,start:t,end:a}:n))},onExternalEventDrop:(e,n)=>{let r=e.getData("text/plain");if(!r)return;let i=JSON.parse(r),s=(0,a.default)(n),l=s.add(i.duration,"minutes");o(e=>[...e,{id:d.current++,title:i.title,start:s.format("YYYY-MM-DD HH:mm:ss"),end:l.format("YYYY-MM-DD HH:mm:ss"),color:i.color}]),t(e=>e.filter(e=>e.title!==i.title))}})})]})},code:`
import { useRef, useState } from 'react';
import dayjs from 'dayjs';
import { Box, Grid, Text } from '@mantine/core';
import { DayView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

interface SidebarItem {
  title: string;
  duration: number;
  color: string;
}

const initialSidebarItems: SidebarItem[] = [
  { title: 'Quick Sync', duration: 30, color: 'teal' },
  { title: 'Workshop', duration: 120, color: 'orange' },
  { title: 'One-on-One', duration: 60, color: 'violet' },
];

function Demo() {
  const [sidebarItems, setSidebarItems] = useState(initialSidebarItems);
  const [events, setEvents] = useState<ScheduleEventData[]>([]);
  const [sidebarHighlight, setSidebarHighlight] = useState(false);
  const nextId = useRef(1);

  const handleExternalDrop = (dataTransfer: DataTransfer, dropDateTime: string) => {
    const raw = dataTransfer.getData('text/plain');
    if (!raw) {
      return;
    }

    const data = JSON.parse(raw);
    const start = dayjs(dropDateTime);
    const end = start.add(data.duration, 'minutes');

    setEvents((prev) => [
      ...prev,
      {
        id: nextId.current++,
        title: data.title,
        start: start.format('YYYY-MM-DD HH:mm:ss'),
        end: end.format('YYYY-MM-DD HH:mm:ss'),
        color: data.color,
      },
    ]);
    setSidebarItems((prev) => prev.filter((item) => item.title !== data.title));
  };

  const handleEventDrop = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  const handleSidebarDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setSidebarHighlight(false);
    const raw = e.dataTransfer.getData('application/json');
    if (!raw) {
      return;
    }

    const { eventId } = JSON.parse(raw);
    const event = events.find((ev) => String(ev.id) === String(eventId));
    if (!event) {
      return;
    }

    const duration = dayjs(event.end).diff(dayjs(event.start), 'minutes');
    setSidebarItems((prev) => [
      ...prev,
      { title: event.title, duration, color: event.color || 'blue' },
    ]);
    setEvents((prev) => prev.filter((ev) => ev.id !== event.id));
  };

  return (
    <Grid>
      <Grid.Col span={{ base: 12, sm: 3 }}>
        <Box
          onDragOver={(e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            setSidebarHighlight(true);
          }}
          onDragLeave={() => setSidebarHighlight(false)}
          onDrop={handleSidebarDrop}
          style={{
            padding: 8,
            borderRadius: 8,
            border: sidebarHighlight
              ? '2px dashed var(--mantine-color-blue-5)'
              : '2px dashed transparent',
            transition: 'border-color 150ms',
          }}
        >
          <Text fw={500} mb="xs">Unscheduled</Text>
          {sidebarItems.map((item) => (
            <Box
              key={item.title}
              draggable
              onDragStart={(e) => {
                e.dataTransfer.setData('text/plain', JSON.stringify(item));
                e.dataTransfer.effectAllowed = 'copy';
              }}
              style={{
                padding: '8px 12px',
                marginBottom: 8,
                borderRadius: 4,
                cursor: 'grab',
                backgroundColor: \`var(--mantine-color-\${item.color}-light)\`,
                color: \`var(--mantine-color-\${item.color}-light-color)\`,
              }}
            >
              <Text size="sm" fw={500}>{item.title}</Text>
              <Text size="xs">{item.duration} min</Text>
            </Box>
          ))}
          {sidebarItems.length === 0 && (
            <Text size="xs" c="dimmed">Drag events here to unschedule</Text>
          )}
        </Box>
      </Grid.Col>
      <Grid.Col span={{ base: 12, sm: 9 }}>
        <DayView
          date={new Date()}
          events={events}
          startTime="08:00:00"
          endTime="18:00:00"
          withEventsDragAndDrop
          onEventDrop={handleEventDrop}
          onExternalEventDrop={handleExternalDrop}
        />
      </Grid.Col>
    </Grid>
  );
}
`},eE=(0,a.default)().format("YYYY-MM-DD"),eS=[{id:"daily-sync-series",title:"Daily sync (series)",start:`${(0,a.default)(eE).subtract(2,"day").format("YYYY-MM-DD")} 09:00:00`,end:`${(0,a.default)(eE).subtract(2,"day").format("YYYY-MM-DD")} 09:30:00`,color:"blue",recurrence:{rrule:"FREQ=DAILY;COUNT=10",exdate:[`${eE} 09:00:00`]}},{id:"daily-sync-override",title:"Daily sync (moved today)",start:`${eE} 14:00:00`,end:`${eE} 14:30:00`,color:"grape",recurringEventId:"daily-sync-series",recurrenceId:`${eE} 09:00:00`},{id:"one-off-day",title:"One-off planning",start:`${eE} 11:00:00`,end:`${eE} 12:00:00`,color:"green"}],eT={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(eE);return(0,v.jsx)(D.DayView,{date:e,onDateChange:t,events:eS,startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:30})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { DayView } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const events = [
  {
    id: 'daily-sync-series',
    title: 'Daily sync (series)',
    start: \`\${dayjs(today).subtract(2, 'day').format('YYYY-MM-DD')} 09:00:00\`,
    end: \`\${dayjs(today).subtract(2, 'day').format('YYYY-MM-DD')} 09:30:00\`,
    color: 'blue',
    recurrence: {
      rrule: 'FREQ=DAILY;COUNT=10',
      exdate: [\`\${today} 09:00:00\`],
    },
  },
  {
    id: 'daily-sync-override',
    title: 'Daily sync (moved today)',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 14:30:00\`,
    color: 'grape',
    recurringEventId: 'daily-sync-series',
    recurrenceId: \`\${today} 09:00:00\`,
  },
  {
    id: 'one-off-day',
    title: 'One-off planning',
    start: \`\${today} 11:00:00\`,
    end: \`\${today} 12:00:00\`,
    color: 'green',
  },
];

function Demo() {
  const [date, setDate] = useState(today);

  return (
    <DayView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      intervalMinutes={30}
    />
  );
}
`},eb=(0,a.default)().format("YYYY-MM-DD"),eM=[{id:"lunch-block",title:"Lunch break",start:`${eb} 12:00:00`,end:`${eb} 13:00:00`,color:"gray",display:"background"},{id:"focus-time",title:"Focus time",start:`${eb} 14:00:00`,end:`${eb} 16:00:00`,color:"blue",display:"background"},{id:"team-meeting",title:"Team meeting",start:`${eb} 10:00:00`,end:`${eb} 11:00:00`,color:"violet"},{id:"code-review",title:"Code review",start:`${eb} 14:30:00`,end:`${eb} 15:30:00`,color:"green"}],e$={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(eb);return(0,v.jsx)(D.DayView,{date:e,onDateChange:t,events:eM,startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:30})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { DayView } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const events = [
  {
    id: 'lunch-block',
    title: 'Lunch break',
    start: \`\${today} 12:00:00\`,
    end: \`\${today} 13:00:00\`,
    color: 'gray',
    display: 'background',
  },
  {
    id: 'focus-time',
    title: 'Focus time',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 16:00:00\`,
    color: 'blue',
    display: 'background',
  },
  {
    id: 'team-meeting',
    title: 'Team meeting',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:00:00\`,
    color: 'violet',
  },
  {
    id: 'code-review',
    title: 'Code review',
    start: \`\${today} 14:30:00\`,
    end: \`\${today} 15:30:00\`,
    color: 'green',
  },
];

function Demo() {
  const [date, setDate] = useState(today);

  return (
    <DayView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      intervalMinutes={30}
    />
  );
}
`},ej=(0,a.default)().format("YYYY-MM-DD"),eC=[{id:"blocked-time",title:"Blocked",start:`${ej} 12:00:00`,end:`${ej} 14:00:00`,color:"red",display:"background"},{id:"team-meeting",title:"Team meeting",start:`${ej} 10:00:00`,end:`${ej} 11:00:00`,color:"violet"},{id:"code-review",title:"Code review",start:`${ej} 15:00:00`,end:`${ej} 16:00:00`,color:"green"}],eV={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(eC);return(0,v.jsx)(D.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:30,withEventsDragAndDrop:!0,onEventDrop:({eventId:a,newStart:n,newEnd:o})=>{e.some(e=>"background"===e.display&&n<e.end&&o>e.start)||t(e=>e.map(e=>e.id===a?{...e,start:n,end:o}:e))},styles:{dayViewBackgroundEvent:{background:`repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 10px,
            var(--mantine-color-red-light) 10px,
            var(--mantine-color-red-light) 12px
          )`,color:"var(--mantine-color-red-light-color)"}}})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { DayView, ScheduleEventData } from '@mantine/schedule';
import classes from './Demo.module.css';

const today = dayjs().format('YYYY-MM-DD');

const initialEvents: ScheduleEventData[] = [
  {
    id: 'blocked-time',
    title: 'Blocked',
    start: \`\${today} 12:00:00\`,
    end: \`\${today} 14:00:00\`,
    color: 'red',
    display: 'background',
  },
  {
    id: 'team-meeting',
    title: 'Team meeting',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:00:00\`,
    color: 'violet',
  },
  {
    id: 'code-review',
    title: 'Code review',
    start: \`\${today} 15:00:00\`,
    end: \`\${today} 16:00:00\`,
    color: 'green',
  },
];

function overlapsBackground(
  newStart: string,
  newEnd: string,
  events: ScheduleEventData[]
) {
  return events.some(
    (e) =>
      e.display === 'background' && newStart < e.end && newEnd > e.start
  );
}

function Demo() {
  const [events, setEvents] = useState(initialEvents);

  const handleEventDrop = ({
    eventId,
    newStart,
    newEnd,
  }: {
    eventId: string | number;
    newStart: string;
    newEnd: string;
  }) => {
    if (overlapsBackground(newStart, newEnd, events)) {
      return;
    }

    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId
          ? { ...event, start: newStart, end: newEnd }
          : event
      )
    );
  };

  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      intervalMinutes={30}
      withEventsDragAndDrop
      onEventDrop={handleEventDrop}
      classNames={{ dayViewBackgroundEvent: classes.backgroundEvent }}
    />
  );
}
`},{fileName:"Demo.module.css",language:"css",code:`.backgroundEvent {
  background: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 10px,
    var(--mantine-color-red-light) 10px,
    var(--mantine-color-red-light) 12px
  );
  color: var(--mantine-color-red-light-color);
}
`}]};var ek=e.i(428127);let eH={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,v.jsxs)("div",{children:[(0,v.jsxs)(ek.ScheduleHeader,{children:[(0,v.jsx)(ek.ScheduleHeader.Previous,{onClick:()=>t((0,a.default)(e).subtract(1,"day").format("YYYY-MM-DD"))}),(0,v.jsx)(ek.ScheduleHeader.Control,{interactive:!1,miw:200,children:(0,a.default)(e).format("dddd, MMMM D, YYYY")}),(0,v.jsx)(ek.ScheduleHeader.Next,{onClick:()=>t((0,a.default)(e).add(1,"day").format("YYYY-MM-DD"))}),(0,v.jsx)(ek.ScheduleHeader.Today,{onClick:()=>t((0,a.default)().format("YYYY-MM-DD"))}),(0,v.jsx)(ek.ScheduleHeader.Control,{style:{marginInlineStart:"auto"},onClick:()=>window.print(),children:"Print"})]}),(0,v.jsx)(D.DayView,{date:e,onDateChange:t,events:o,startTime:"08:00:00",endTime:"18:00:00",withHeader:!1})]})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { DateStringValue, DayView, ScheduleHeader } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState<DateStringValue>(
    dayjs().format('YYYY-MM-DD')
  );

  return (
    <div>
      <ScheduleHeader>
        <ScheduleHeader.Previous
          onClick={() =>
            setDate(
              dayjs(date)
                .subtract(1, 'day')
                .format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.Control interactive={false} miw={200}>
          {dayjs(date).format('dddd, MMMM D, YYYY')}
        </ScheduleHeader.Control>
        <ScheduleHeader.Next
          onClick={() =>
            setDate(
              dayjs(date)
                .add(1, 'day')
                .format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.Today
          onClick={() =>
            setDate(
              dayjs().format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.Control
          style={{ marginInlineStart: 'auto' }}
          onClick={() => window.print()}
        >
          Print
        </ScheduleHeader.Control>
      </ScheduleHeader>

      <DayView
        date={date}
        onDateChange={setDate}
        events={events}
        startTime="08:00:00"
        endTime="18:00:00"
        withHeader={false}
      />
    </div>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};e.i(27355);let eB={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",locale:"es",labels:{day:"Día",week:"Semana",month:"Mes",year:"Año",allDay:"Todo el día",timeSlot:"Franja horaria",today:"Hoy",previous:"Anterior",next:"Siguiente"}})},code:[{code:`
import 'dayjs/locale/es';
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      locale="es"
      labels={{
        day: 'D\xeda',
        week: 'Semana',
        month: 'Mes',
        year: 'A\xf1o',
        allDay: 'Todo el d\xeda',
        timeSlot: 'Franja horaria',
        today: 'Hoy',
        previous: 'Anterior',
        next: 'Siguiente',
      }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},eR={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:o,startScrollTime:"07:00:00",getTimeSlotProps:({start:e})=>{let t=parseInt(e.split(" ")[1],10);return t>=7&&t<20?{"data-business-hours":!0}:{"data-non-business-hours":!0}}})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startScrollTime="07:00:00"
      getTimeSlotProps={({ start }) => {
        const hour = parseInt(start.split(' ')[1], 10);
        if (hour >= 7 && hour < 20) {
          return { 'data-business-hours': true };
        }
        return { 'data-non-business-hours': true };
      }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},eI=(0,a.default)().format("YYYY-MM-DD"),eA=[{id:"standup",title:"Morning Standup",start:`${eI} 09:00:00`,end:`${eI} 09:30:00`,color:"blue"},{id:"team-meeting",title:"Team Meeting",start:`${eI} 10:00:00`,end:`${eI} 11:30:00`,color:"green"},{id:"weekly-review-series",title:"Weekly review",start:`${(0,a.default)(eI).startOf("week").format("YYYY-MM-DD")} 16:00:00`,end:`${(0,a.default)(eI).startOf("week").format("YYYY-MM-DD")} 17:00:00`,color:"orange",recurrence:{rrule:"FREQ=WEEKLY;COUNT=8"}}],eN={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(eI);return(0,v.jsx)(D.DayView,{date:e,onDateChange:t,events:eA,withAgenda:!0})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { DayView } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const events = [
  {
    id: 'standup',
    title: 'Morning Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
  },
  {
    id: 'team-meeting',
    title: 'Team Meeting',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'green',
  },
  {
    id: 'weekly-review-series',
    title: 'Weekly review',
    start: \`\${dayjs(today).startOf('week').format('YYYY-MM-DD')} 16:00:00\`,
    end: \`\${dayjs(today).startOf('week').format('YYYY-MM-DD')} 17:00:00\`,
    color: 'orange',
    recurrence: {
      rrule: 'FREQ=WEEKLY;COUNT=8',
    },
  },
];

function Demo() {
  const [date, setDate] = useState(today);

  return (
    <DayView
      date={date}
      onDateChange={setDate}
      events={events}
      withAgenda
    />
  );
}
`};var eO=(0,t.__exportAll)({allDayEvents:()=>Y,backgroundEvents:()=>e$,backgroundEventsCustomStyle:()=>eV,bidirectionalDragDrop:()=>ex,businessHours:()=>C,canDragEvent:()=>G,canResizeEvent:()=>W,controlledDate:()=>ec,currentTimeIndicator:()=>E,customHeader:()=>eH,dragDrop:()=>N,eventForm:()=>ev,eventResize:()=>P,externalDragDrop:()=>eh,getTimeSlotProps:()=>eR,headerFormat:()=>H,intervalMinutes:()=>y,labels:()=>es,localization:()=>eB,overlappingEvents:()=>x,radius:()=>R,recurringEvents:()=>eT,renderEvent:()=>ei,renderEventBody:()=>ee,slotHeight:()=>V,slotLabelFormat:()=>B,startScrollTime:()=>eD,staticMode:()=>ed,subHourGridLines:()=>w,timeRange:()=>p,timezone:()=>j,usage:()=>f,viewChange:()=>em,withAgenda:()=>eN,withoutHeader:()=>k});e.s(["DayViewDemos",0,eO],625003)}]);