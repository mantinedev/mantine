(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,420924,176304,461304,e=>{"use strict";e.s(["getOrderedResources",0,function(e,t){if(!t||0===t.length)return{orderedResources:e,groupRanges:[],resourceGroupMap:[]};let r=new Map(e.map(e=>[e.id,e])),o=new Set,a=[],s=[];for(let e of t){let t=a.length,n=0;for(let t of e.resourceIds){let e=r.get(t);e&&!o.has(t)&&(a.push(e),o.add(t),n++)}n>0&&s.push({group:e,startIndex:t,count:n})}for(let t of e)o.has(t.id)||a.push(t);let n=Array(a.length).fill(null);for(let e of s)for(let t=0;t<e.count;t++){let r,o=e.startIndex+t;r=1===e.count?"only":0===t?"first":t===e.count-1?"last":"middle",n[o]={group:e.group,position:r,count:e.count}}return{orderedResources:a,groupRanges:s,resourceGroupMap:n}}],420924),e.s(["getGroupToResourceIdMap",0,function(e){let t=new Map;for(let r of e)t.set(String(r.id),r.id);return t}],176304),e.s(["getIndexFromDragPoint",0,function(e,t){let r=e.findIndex(e=>{if(!e)return!1;let r=e.getBoundingClientRect();return t>=r.left&&t<=r.right});if(r>=0)return r;let o=e[0],a=e[e.length-1];if(!o||!a)return null;let s=o.getBoundingClientRect(),n=a.getBoundingClientRect();return t<s.left?0:t>n.right?e.length-1:null}],461304)},640542,367752,578373,e=>{"use strict";e.s(["handleResourcesGridKeyDown",0,function({controlsRef:e,resourceIndex:t,slotIndex:r,event:o}){let a=function(e){switch(e){case"ArrowDown":return"down";case"ArrowUp":return"up";case"ArrowRight":return"right";case"ArrowLeft":return"left";default:return null}}(o.key);if(a){o.preventDefault();let s=e.current?e.current.map(e=>e?e.length:0):null;if(!s)return;!function e({controlsRef:t,direction:r,resourceIndex:o,slotIndex:a,size:s}){let n=function({direction:e,resourceIndex:t,slotIndex:r,size:o}){let a=o[t];if(!a)return null;switch(e){case"left":if(0===r)return null;return{resourceIndex:t,slotIndex:r-1};case"right":if(r===a-1)return null;return{resourceIndex:t,slotIndex:r+1};case"up":{if(0===t)return null;let e=o[t-1];return{resourceIndex:t-1,slotIndex:Math.min(r,e-1)}}case"down":{if(t===o.length-1)return null;let e=o[t+1];return{resourceIndex:t+1,slotIndex:Math.min(r,e-1)}}default:return null}}({direction:r,resourceIndex:o,slotIndex:a,size:s});if(!n)return;let i=t.current?.[n.resourceIndex]?.[n.slotIndex];i&&(i.disabled||i.getAttribute("data-hidden")?e({controlsRef:t,direction:r,resourceIndex:n.resourceIndex,slotIndex:n.slotIndex,size:s}):i.focus())}({controlsRef:e,direction:a,resourceIndex:t,slotIndex:r,size:s})}}],640542);var t=e.i(751198);e.s(["getOverlapClusters",0,function(e){let r=[],o=new Set;for(let a=0;a<e.length;a++){if(o.has(a))continue;let s=[e[a]];o.add(a);let n=0;for(;n<s.length;){for(let r=0;r<e.length;r++)!o.has(r)&&(0,t.isEventsOverlap)(s[n],e[r])&&(s.push(e[r]),o.add(r));n++}r.push(s)}return r}],367752);var r=e.i(969610),o=e.i(298008),a=e.i(68642),s=e.i(532965),n=e.i(922621),i=e.i(494834);e.s(["getResourcesDayViewEvents",0,function({events:e,resources:t,date:d,startTime:l,endTime:c}){let u={regularEvents:{},allDayEvents:{},backgroundTimedEvents:{},backgroundAllDayEvents:{}};for(let e of t)u.regularEvents[e.id]=[],u.allDayEvents[e.id]=[],u.backgroundTimedEvents[e.id]=[],u.backgroundAllDayEvents[e.id]=[];if(void 0===e)return u;let m=(0,i.default)(d).startOf("day"),f=(0,i.default)(d).endOf("day"),D={},v={};for(let e of t)D[e.id]=[],v[e.id]=[];let y=new Set;for(let t of e){if(void 0===t.resourceId||!(t.resourceId in D))continue;let e=(0,i.default)(t.start),r=(0,i.default)(t.end),s=e.isSame(m,"day"),n=!s&&"background"===t.display&&e.isBefore(f)&&r.isAfter(m);if(s||n){if(s&&!(0,a.isEventInTimeRange)({event:t,startTime:l,endTime:c}))continue;let e=(0,o.validateEvent)(t);if(y.has(t.id))throw Error(`[@mantine/schedule] ResourcesDayView: Duplicated event ids found: ${t.id}`);y.add(t.id),"background"===t.display?v[t.resourceId].push(e):D[t.resourceId].push(e)}}for(let e of t){for(let t of(0,n.getDayPositionedEvents)({events:D[e.id],startTime:l,endTime:c,date:d}))t.position.allDay?u.allDayEvents[e.id].push(t):u.regularEvents[e.id].push(t);for(let t of v[e.id]){let o=(0,i.default)(t.start),a=(0,i.default)(t.end),n=o.isBefore(m)?m:o,D=a.isAfter(f)?f:a,v={...t,start:n.format("YYYY-MM-DD HH:mm:ss"),end:D.format("YYYY-MM-DD HH:mm:ss")};if((0,r.isAllDayEvent)({event:v,date:d}))u.backgroundAllDayEvents[e.id].push({...t,position:{top:0,height:100,allDay:!0,width:100,offset:0,column:0,overlaps:1}});else{let{top:r,height:o}=(0,s.getDayPosition)({event:v,startTime:l,endTime:c});if(o<=0)continue;u.backgroundTimedEvents[e.id].push({...t,position:{top:r,height:o,allDay:!1,width:100,offset:0,column:0,overlaps:1}})}}}return u}],578373)},499083,e=>{"use strict";var t=e.i(86473),r=e.i(27748),o=e.i(898496),a=e.i(4332),s=e.i(918006),n=e.i(625712),i=e.i(900513),d=e.i(688785),l=e.i(664397),c=e.i(969610),u=e.i(792930),m=e.i(505696),f=e.i(420924),D=e.i(640542),v=e.i(176304),y=e.i(461304),g=e.i(783261),p=e.i(376879),w=e.i(201867),Y=e.i(891343),h=e.i(67312),k=e.i(966696),S=e.i(612148),x=e.i(367752),M=e.i(898770),T=e.i(657068),b=e.i(922552),$=e.i(539517),E=e.i(578373),I=e.i(494834),R=e.i(232471),W=e.i(284629),j=e.i(391398);function C({resource:e,resourceIndex:r,weekdays:o,slots:a,getStyles:s,children:n,labels:i,highlightBusinessHours:d,businessHours:l,withEventsDragAndDrop:c,onRowSlotsDragOver:u,onRowSlotsDragLeave:f,onRowSlotsDrop:D,onSlotClick:v,dropTargetSlotIndex:y,mode:g,slotsRef:p,firstSlotIndex:w,onSlotKeyDown:Y,withDragSlotSelect:h,onSlotPointerDown:k,isSlotDragSelected:S,rowSlotsContainerRef:x,renderResourceLabel:M,renderGroupLabel:T,scrolledX:b,groupInfo:$,allDayCount:E}){let I=String(e.id),V=o.flatMap((o,n)=>a.map((u,f)=>{let D=n*a.length+f,x=y===D,M=w?.resourceIndex===r&&w?.slotIndex===D,T=S?.(D,I)||!1;return(0,j.jsx)(W.UnstyledButton,{ref:e=>{if(!p?.current)return;p.current[r]||(p.current[r]=[]);let t=p.current[r];if(e)t[D]=e;else for(delete t[D];t.length>0&&null==t[t.length-1];)t.length-=1},...s("resourcesWeekViewRowSlot"),mod:{"hour-start":u.isHourStart,...(0,m.getBusinessHoursMod)({time:u.startTime,businessHours:l,highlightBusinessHours:d}),"drop-target":x,"drag-selected":T,static:"static"===g},"aria-label":`${(0,t.getLabel)("resourceSlot",i)} ${e.label} ${o} ${u.startTime} - ${u.endTime}`,tabIndex:"static"===g?-1:M?0:-1,"data-drag-slot-index":h&&"static"!==g?D:void 0,"data-drag-slot-group":h&&"static"!==g?I:void 0,onKeyDown:e=>{Y&&Y(e,r,D)},onPointerDown:h&&"static"!==g?e=>k?.(e,D,I):void 0,onClick:"static"!==g&&v?t=>v(e.id,o,u.startTime,t):void 0,onDragOver:c&&"static"!==g?e=>e.preventDefault():void 0},`${o}-${u.startTime}`)})),H=$?.position==="first"||$?.position==="only",A=void 0!==$?null!==$?(0,j.jsx)(R.Box,{...s("resourcesWeekViewGroupColumn"),mod:{"scrolled-x":b,"group-position":$.position},children:H&&(0,j.jsx)("span",{style:$.count>1?{transform:`translateY(calc((${$.count-1} * (var(--resources-week-view-row-height) + 1px)) / 2))`}:void 0,children:T?T($.group):$.group.label})}):(0,j.jsx)(R.Box,{...s("resourcesWeekViewGroupColumnEmpty"),mod:{"scrolled-x":b}}):null;return(0,j.jsxs)(R.Box,{...s("resourcesWeekViewRow"),children:[A,(0,j.jsx)(R.Box,{...s("resourcesWeekViewResourceLabel"),mod:{"scrolled-x":b,"has-groups":void 0!==$},children:M?M(e):e.label}),(0,j.jsxs)(R.Box,{ref:x,...s("resourcesWeekViewRowSlots",{style:E?{minHeight:`max(var(--resources-week-view-row-height), calc(${E} * (var(--resources-week-view-all-day-height) + 2px) + 4px))`}:void 0}),onDragOver:c&&"static"!==g?t=>u?.(t,e.id,r):void 0,onDragLeave:c&&"static"!==g?f:void 0,onDrop:c&&"static"!==g?t=>D?.(t,e.id,r):void 0,children:[n,V]})]})}var V={resourcesWeekView:"m_ed4c47cf",resourcesWeekViewRoot:"m_5b5cbd51",resourcesWeekViewScrollArea:"m_b88ea29",resourcesWeekViewInner:"m_fbb9fc7",resourcesWeekViewHeaderRows:"m_7d7bb735",resourcesWeekViewCorner:"m_dd8b4f04",resourcesWeekViewHeaderContent:"m_85f2b19d",resourcesWeekViewDayLabelsRow:"m_cde0b68e",resourcesWeekViewDayLabel:"m_354e59a7",resourcesWeekViewTimeLabelsRow:"m_b7f0617f",resourcesWeekViewTimeLabel:"m_a6832518",resourcesWeekViewRow:"m_9fd9b38b",resourcesWeekViewResourceLabel:"m_9c6373f7",resourcesWeekViewGroupColumn:"m_fdcb5366",resourcesWeekViewGroupColumnEmpty:"m_3d5e7187",resourcesWeekViewRowSlots:"m_c534316a",resourcesWeekViewRowSlot:"m_ed965429",resourcesWeekViewBackgroundEvent:"m_3c19323d",resourcesWeekViewAllDayEvent:"m_682c45d0",resourcesWeekViewResizeHandle:"m_30c8fd6b",resourcesWeekViewEventWrapper:"m_2d13c608",resourcesWeekViewCurrentTimeIndicator:"m_6f70bf38",resourcesWeekViewCurrentTimeIndicatorLine:"m_be32874c",resourcesWeekViewCurrentTimeIndicatorThumb:"m_88ec57e",resourcesWeekViewCurrentTimeIndicatorTimeBubble:"m_9ff3db11"},H=e.i(19300),A=e.i(481178),N=e.i(275519),B=e.i(433512),O=e.i(779177),P=e.i(951254),L=e.i(44091),_=e.i(62904),F=e.i(391466),G=e.i(822933),z=e.i(417241),U=e.i(332977),K=e.i(191788),Q=e.i(205693);let X={__staticSelector:"ResourcesWeekView",startTime:"00:00:00",endTime:"23:59:59",slotLabelFormat:"HH:mm",intervalMinutes:60,withHeader:!0,weekLabelFormat:"MMM DD",weekdayFormat:"ddd D",highlightBusinessHours:!1,businessHours:["09:00:00","17:00:00"],withEventsDragAndDrop:!1,withDragSlotSelect:!1,withWeekendDays:!0,withCurrentTimeBubble:!0,highlightToday:!0,mode:"default",maxEventsPerTimeSlot:2},q=(0,A.createVarsResolver)((e,{radius:t,slotWidth:r,rowHeight:o,groupLabelWidth:a})=>({resourcesWeekView:{"--resources-week-view-radius":t?(0,B.getRadius)(t):void 0,"--resources-week-view-slot-width":(0,O.rem)(r),"--resources-week-view-row-height":(0,O.rem)(o),"--resources-week-view-group-label-width":(0,O.rem)(a)}})),J=(0,N.factory)(e=>{let W=(0,L.useProps)("ResourcesWeekView",X,e),{classNames:A,className:N,style:B,styles:O,unstyled:J,attributes:Z,vars:ee,startTime:et,endTime:er,date:eo,onDateChange:ea,resources:es,intervalMinutes:en,slotLabelFormat:ei,radius:ed,startScrollDateTime:el,scrollAreaProps:ec,locale:eu,withCurrentTimeIndicator:em,withCurrentTimeBubble:ef,__staticSelector:eD,withHeader:ev,onViewChange:ey,previousControlProps:eg,nextControlProps:ep,todayControlProps:ew,viewSelectProps:eY,weekLabelFormat:eh,renderWeekLabel:ek,events:eS,slotWidth:ex,rowHeight:eM,labels:eT,highlightBusinessHours:eb,businessHours:e$,renderEventBody:eE,renderEvent:eI,renderResourceLabel:eR,groups:eW,renderGroupLabel:ej,groupLabelWidth:eC,withEventsDragAndDrop:eV,onEventDrop:eH,canDragEvent:eA,onEventDragStart:eN,onEventDragEnd:eB,onTimeSlotClick:eO,onEventClick:eP,withDragSlotSelect:eL,onSlotDragEnd:e_,mode:eF,onExternalEventDrop:eG,recurrenceExpansionLimit:ez,maxEventsPerTimeSlot:eU,moreEventsProps:eK,firstDayOfWeek:eQ,weekendDays:eX,withWeekendDays:eq,weekdayFormat:eJ,highlightToday:eZ,...e0}=W,e1=void 0!==eU?Math.max(1,eU):void 0,e8=(0,F.useStyles)({name:eD,classes:V,props:W,className:N,style:B,classNames:A,styles:O,unstyled:J,vars:ee,varsResolver:q,attributes:Z,rootSelector:"resourcesWeekView"}),{resolvedClassNames:e3,resolvedStyles:e2}=(0,_.useResolvedStylesApi)({classNames:A,styles:O,props:W}),e9={classNames:e3,styles:e2,attributes:Z,__staticSelector:eD,radius:ed},e4=(0,P.useMantineTheme)(),[e6,e7]=(0,K.useState)(!1),[e5,te]=(0,K.useState)(!1),tt=(0,Q.useDatesContext)(),tr=(0,o.getDayTimeIntervals)({startTime:et,endTime:er,intervalMinutes:en}),{orderedResources:to,groupRanges:ta,resourceGroupMap:ts}=(0,K.useMemo)(()=>(0,f.getOrderedResources)(es,eW),[es,eW]),tn=ta.length>0,ti=(0,K.useMemo)(()=>(0,s.getWeekDays)({week:eo,withWeekendDays:eq,weekendDays:tt.getWeekendDays(eX),firstDayOfWeek:tt.getFirstDayOfWeek(eQ)}),[eo,eq,eX,eQ,tt]),td=tr.length,tl=ti.some(e=>(0,I.default)(e).isSame((0,I.default)(),"day")),[tc,tu]=(0,K.useState)((0,d.getCurrentTimePosition)({startTime:et,endTime:er,intervalMinutes:en}));(0,G.useInterval)(()=>tu((0,d.getCurrentTimePosition)({startTime:et,endTime:er,intervalMinutes:en})),6e4,{autoInvoke:!0});let tm=ti.findIndex(e=>(0,I.default)(e).isSame((0,I.default)(),"day")),tf=(em??tl)&&tm>=0&&(0,l.isInTimeRange)({date:(0,I.default)().toDate(),startTime:et,endTime:er}),tD=ef?(0,r.formatDate)({locale:tt.getLocale(eu),date:(0,I.default)(),format:ei}):"",tv=(0,K.useCallback)((e,t)=>{if(!eG)return;let r=Math.floor(t.slotIndex/td),o=t.slotIndex%td,a=ti[r];a&&eG({dataTransfer:e.dataTransfer,dropDateTime:`${(0,I.default)(a).format("YYYY-MM-DD")} ${tr[o].startTime}`,resourceId:t.resourceId})},[eG,tr,ti,td]),ty=(0,K.useRef)(void 0),tg=(0,g.useDragDropHandlers)({enabled:eV,mode:eF,onEventDrop:(0,K.useCallback)(e=>{eH?.({...e,resourceId:ty.current})},[eH]),canDragEvent:eA,onEventDragStart:eN,onEventDragEnd:eB,calculateDropTarget:(e,t)=>{ty.current=e.resourceId;let r=Math.floor(e.slotIndex/td),o=tr[e.slotIndex%td].startTime;return(0,u.calculateDropTime)({draggedEvent:t,targetDate:ti[r]||ti[0],targetSlotTime:o,intervalMinutes:en})},onExternalDrop:eG?tv:void 0}),tp=(0,K.useMemo)(()=>(0,v.getGroupToResourceIdMap)(es),[es]),tw=(0,p.useSlotDragSelect)({enabled:eL&&"static"!==eF,onDragEnd:(e,t,r)=>{if(!e_)return;let o=Math.floor(e/td),a=e%td,s=Math.floor(t/td),n=t%td,i=ti[o],d=ti[s];i&&d&&e_({rangeStart:`${(0,I.default)(i).format("YYYY-MM-DD")} ${tr[a].startTime}`,rangeEnd:`${(0,I.default)(d).format("YYYY-MM-DD")} ${tr[n].endTime}`,resourceId:tp.get(r)??r})}}),tY=(eV||!!eG)&&"static"!==eF,th=(e,t,r,o)=>{if(!eO)return;let a=tr.findIndex(e=>e.startTime===r);if(-1===a)return;let s=tr[a],n=(0,I.default)(t).format("YYYY-MM-DD");eO({slotStart:`${n} ${s.startTime}`,slotEnd:`${n} ${s.endTime}`,nativeEvent:o,resourceId:e})},tk=(0,K.useMemo)(()=>(function({events:e,resources:t,weekdays:r,startTime:o,endTime:a,expansionLimit:s}){let n=(0,T.expandRecurringEvents)({events:e,rangeStart:(0,I.default)(r[0]).startOf("day").toDate(),rangeEnd:(0,I.default)(r[r.length-1]).endOf("day").toDate(),expansionLimit:s});if(n){let e=new Set;for(let t of n){if(e.has(t.id))throw Error(`[@mantine/schedule] ResourcesWeekView: Duplicated event ids found: ${t.id}`);e.add(t.id)}}let i={},d=new Set,l=e=>"background"!==e.display&&(0,M.isMultidayEvent)(e);for(let e of r){let r=n?.filter(t=>{if(d.has(t.id)||l(t))return!1;let r=(0,I.default)(t.start),o=(0,I.default)(e).startOf("day");return r.isSame(o,"day")?(d.add(t.id),!0):!!("background"===t.display&&r.isBefore((0,I.default)(e).endOf("day"))&&(0,I.default)(t.end).isAfter(o))});i[e]=(0,E.getResourcesDayViewEvents)({events:r,resources:t,date:e,startTime:o,endTime:a})}let c={};for(let e of t)c[e.id]=[];if(r.forEach((e,r)=>{for(let o of t)for(let t of i[e].allDayEvents[o.id]??[])c[o.id].push({event:t,startDayIndex:r,endDayIndex:r,row:0})}),n)for(let e of n){if(!l(e)||void 0===e.resourceId||!(e.resourceId in c))continue;let t=(0,b.calculateEventDays)({event:e,weekDays:r,actualEndDate:(0,$.getEventEndDate)(e)});0!==t.length&&c[e.resourceId].push({event:e,startDayIndex:r.indexOf(t[0]),endDayIndex:r.indexOf(t[t.length-1]),row:0})}for(let e of t)!function(e){let t=e.map((e,t)=>({bar:e,index:t})).sort((e,t)=>e.bar.startDayIndex-t.bar.startDayIndex||e.bar.endDayIndex-t.bar.endDayIndex||e.index-t.index),r=[];for(let{bar:e}of t){let t=0;for(;t<r.length&&r[t]>=e.startDayIndex;)t+=1;r[t]=e.endDayIndex,e.row=t}}(c[e.id]);return{byDay:i,allDayBars:c}})({events:eS,resources:es,weekdays:ti,startTime:et,endTime:er,expansionLimit:ez}),[eS,es,ti,et,er,ez]),tS=ti.map(e=>{let t=(0,I.default)(e),o=t.isSame((0,I.default)(),"day")&&eZ,a=tt.getWeekendDays(eX).includes(t.day());return(0,K.createElement)(R.Box,{...e8("resourcesWeekViewDayLabel"),key:e,mod:{today:o,weekend:a},style:{width:`calc(var(--resources-week-view-slot-width) * ${td})`}},(0,r.formatDate)({date:t,locale:tt.getLocale(eu),format:eJ}))}),tx=ti.flatMap(e=>tr.map(t=>{let o=(0,r.formatDate)({date:(0,I.default)(`${(0,I.default)(e).format("YYYY-MM-DD")} ${t.startTime}`),locale:tt.getLocale(eu),format:ei});return(0,K.createElement)(R.Box,{...e8("resourcesWeekViewTimeLabel"),key:`${e}-${t.startTime}`,mod:{"hour-start":t.isHourStart,...(0,m.getBusinessHoursMod)({time:t.startTime,businessHours:e$,highlightBusinessHours:eb})}},o)})),tM=(0,K.useRef)([]),tT=(0,K.useRef)([]),tb=(0,K.useRef)(null),t$=(0,U.useMergedRef)(tb,ec?.viewportRef),tE={resourceIndex:0,slotIndex:0};(0,z.useIsomorphicEffect)(()=>{if(!el||!tb.current)return;let e=(0,I.default)(el),t=e.format("YYYY-MM-DD 00:00:00"),r=e.format("HH:mm:ss"),o=ti.indexOf(t);if(o<0)return;let a=tr.findIndex(e=>e.startTime>=r);if(a<0)return;let s=o*td+a,n=tM.current[0];if(!n||0===n.length)return;let i=n[s];if(!i)return;let d=i.getBoundingClientRect(),l=tb.current.getBoundingClientRect(),c=tb.current.querySelector(`.${V.resourcesWeekViewCorner}`),u=c?c.getBoundingClientRect().width:0;tb.current.scrollTo({left:d.left-l.left-u,top:0})},[]);let tI=(0,K.useCallback)((e,t)=>(0,y.getIndexFromDragPoint)(tM.current[t]??[],e.clientX),[]),tR=(e,t,r)=>{(0,D.handleResourcesGridKeyDown)({controlsRef:tM,resourceIndex:t,slotIndex:r,event:e})},tW=100/ti.length,tj=to.map((e,t)=>{let r=[],o=tk.allDayBars[e.id]??[],a=o.reduce((e,t)=>Math.max(e,t.row+1),0);ti.forEach((t,o)=>{let a=tk.byDay[t];if(!a)return;let s=o/ti.length*100;for(let o of[...a.backgroundTimedEvents[e.id]||[],...a.backgroundAllDayEvents[e.id]||[]]){let e=e4.variantColorResolver({color:o.color||e4.primaryColor,theme:e4,variant:"light",autoContrast:!0}),a="function"==typeof eE?eE(o):o.title,n={key:`bg-${o.id}-${t}`,...e8("resourcesWeekViewBackgroundEvent",{style:{left:`${s+o.position.top/100*tW}%`,width:`${o.position.height/100*tW}%`,top:0,height:"100%"}}),__vars:{"--bg-event-bg":e.background,"--bg-event-color":e.color},children:a};"function"==typeof eI?r.push(eI(o,n)):r.push((0,j.jsx)(R.Box,{...n}))}let n=(a.regularEvents[e.id]||[]).filter(e=>!(0,c.isAllDayEvent)({event:e,date:t}));for(let e of void 0!==e1?n.filter(e=>e.position.column<e1):n){let o=tg.isDraggableEvent(e),a=s+e.position.top/100*tW,n=e.position.height/100*tW,i=void 0!==e1&&e.position.overlaps>e1;r.push((0,j.jsx)("div",{...e8("resourcesWeekViewEventWrapper"),style:{left:`calc(${a}% + 1px)`,top:i?`calc((100% - 22px) * ${e.position.column} / ${e1})`:`${e.position.offset}%`,width:`calc(${n}% - 2px)`,height:i?`calc((100% - 22px) / ${e1})`:`${e.position.width}%`},children:(0,j.jsx)(Y.ScheduleEvent,{event:e,autoSize:!0,nowrap:!0,draggable:o,renderEventBody:eE,renderEvent:eI,radius:ed,mode:eF,onClick:eP?t=>eP(e,t):void 0,style:{width:"100%",height:"100%"}})},`${e.id}-${t}`))}if(void 0!==e1)for(let o of(0,x.getOverlapClusters)(n)){let a=o.filter(e=>e.position.column>=e1).length;if(a>0&&"static"!==eF){let n=s+Math.min(...o.map(e=>e.position.top))/100*tW,i=s+Math.max(...o.map(e=>e.position.top+e.position.height))/100*tW;r.push((0,j.jsx)(h.MoreEvents,{events:o,moreEventsCount:a,mode:eF,labels:eT,renderEventBody:eE,renderEvent:eI,onEventClick:eP,style:{position:"absolute",left:`calc(${n}% + 1px)`,width:`calc(${i-n}% - 2px)`,bottom:0,height:"22px",paddingInline:4,zIndex:4},...e9,...eK},`more-${e.id}-${t}-${o[0].id}`))}}});let s=tn?"calc(var(--resources-week-view-group-label-width) + var(--resources-week-view-resource-label-width) + 5px)":"calc(var(--resources-week-view-resource-label-width) + 5px)";return o.forEach(e=>{let t=e.startDayIndex*tW,o=(e.endDayIndex-e.startDayIndex+1)*tW;r.push((0,j.jsx)("div",{...e8("resourcesWeekViewAllDayEvent",{style:{left:`calc(${t}% + 1px)`,width:`calc(${o}% - 2px)`,top:`calc(${e.row} * (var(--resources-week-view-all-day-height) + 2px) + 2px)`}}),children:(0,j.jsx)(Y.ScheduleEvent,{event:e.event,autoSize:!0,nowrap:!0,renderEventBody:e=>(0,j.jsx)("span",{style:{position:"sticky",insetInlineStart:s,display:"inline-block",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis"},children:eE?eE(e):e.title}),renderEvent:eI,radius:ed,mode:eF,onClick:eP?t=>eP(e.event,t):void 0,style:{width:"100%",height:"100%",overflow:"visible"},styles:{eventInner:{display:"block",overflow:"visible",lineHeight:"var(--resources-week-view-all-day-height)"}}})},`all-day-${e.event.id}-${e.startDayIndex}`))}),(0,j.jsx)(C,{resource:e,resourceIndex:t,weekdays:ti,slots:tr,getStyles:e8,labels:eT,highlightBusinessHours:eb,businessHours:e$,withEventsDragAndDrop:tY,mode:eF,slotsRef:tM,firstSlotIndex:tE,onSlotKeyDown:tR,onSlotClick:th,onRowSlotsDragOver:(e,t,r)=>{let o=tI(e,r);null!==o&&tg.handleDragOver(e,{resourceId:t,slotIndex:o})},onRowSlotsDragLeave:tg.handleDragLeave,onRowSlotsDrop:(e,t,r)=>{let o=tI(e,r);null!==o&&tg.handleDrop(e,{resourceId:t,slotIndex:o})},dropTargetSlotIndex:tg.dropTarget?.resourceId===e.id?tg.dropTarget.slotIndex:void 0,withDragSlotSelect:eL,onSlotPointerDown:tw.handleSlotPointerDown,isSlotDragSelected:tw.isSlotSelected,rowSlotsContainerRef:e=>{tT.current[t]=e},renderResourceLabel:eR,renderGroupLabel:ej,scrolledX:e5,groupInfo:tn?ts[t]:void 0,allDayCount:a,children:r},e.id)}),tC=(0,S.getWeekLabel)({weekdays:ti,locale:tt.getLocale(eu),weekLabelFormat:eh,renderWeekLabel:ek}),tV=tm>=0?(tm+tc/100)/ti.length*100:0,tH=(0,j.jsxs)(R.Box,{...e8("resourcesWeekView"),mod:{static:"static"===eF,"slot-dragging":tw.isDragging,"event-interaction":tg.dragContextValue.isDragging},...e0,children:[ev&&(0,j.jsx)(k.ScheduleHeaderBase,{view:"week",navigationHandlers:{previous:()=>(0,i.previousWeek)(eo,tt.getFirstDayOfWeek(eQ)),next:()=>(0,n.nextWeek)(eo,tt.getFirstDayOfWeek(eQ)),today:()=>(0,a.toDateString)((0,I.default)())},control:{miw:180,title:tC},labels:eT,onDateChange:ea,onViewChange:ey,previousControlProps:eg,nextControlProps:ep,todayControlProps:ew,viewSelectProps:{views:["day","week","month"],...eY},stylesApiProps:e9}),(0,j.jsx)(R.Box,{...e8("resourcesWeekViewRoot"),children:(0,j.jsx)(H.ScrollArea,{scrollbarSize:4,...ec,...e8("resourcesWeekViewScrollArea",{className:ec?.className,style:ec?.style}),onScrollPositionChange:e=>{ec?.onScrollPositionChange?.(e),e7(0!==e.y),te(0!==e.x)},viewportRef:t$,children:(0,j.jsxs)("div",{...e8("resourcesWeekViewInner"),children:[(0,j.jsxs)("div",{...e8("resourcesWeekViewHeaderRows"),children:[(0,K.createElement)("div",{...e8("resourcesWeekViewCorner"),key:"corner",style:tn?{flexBasis:"calc(var(--resources-week-view-resource-label-width) + var(--resources-week-view-group-label-width))",minWidth:"calc(var(--resources-week-view-resource-label-width) + var(--resources-week-view-group-label-width))"}:void 0},(0,t.getLabel)("resources",eT)),(0,j.jsxs)("div",{...e8("resourcesWeekViewHeaderContent"),children:[(0,j.jsx)("div",{...e8("resourcesWeekViewDayLabelsRow"),children:tS}),(0,j.jsx)(R.Box,{...e8("resourcesWeekViewTimeLabelsRow"),mod:{scrolled:e6},children:tx})]})]}),tj,tf&&(0,j.jsxs)(R.Box,{...e8("resourcesWeekViewCurrentTimeIndicator"),__vars:{"--indicator-left-offset":tn?`calc(var(--resources-week-view-resource-label-width) + var(--resources-week-view-group-label-width) + (100% - var(--resources-week-view-resource-label-width) - var(--resources-week-view-group-label-width)) * ${tV} / 100)`:`calc(var(--resources-week-view-resource-label-width) + (100% - var(--resources-week-view-resource-label-width)) * ${tV} / 100)`,"--_time-bubble-width":tD?.toString().toLowerCase().includes("m")?"64px":"46px"},children:[ef&&(0,j.jsx)("div",{...e8("resourcesWeekViewCurrentTimeIndicatorTimeBubble"),children:tD}),!ef&&(0,j.jsx)("div",{...e8("resourcesWeekViewCurrentTimeIndicatorThumb")}),(0,j.jsx)("div",{...e8("resourcesWeekViewCurrentTimeIndicatorLine")})]})]})})})]}),tA=(0,K.useMemo)(()=>tg.dragContextValue,[tg.dragContextValue]);return eV?(0,j.jsx)(w.DragContext.Provider,{value:tA,children:tH}):tH});J.displayName="@mantine/schedule/ResourcesWeekView",J.classes=V,J.varsResolver=q,e.s(["ResourcesWeekView",0,J],499083)},259072,e=>{"use strict";var t=e.i(648863),r=e.i(494834);let o=(0,r.default)().format("YYYY-MM-DD"),a=(0,r.default)().add(1,"day").format("YYYY-MM-DD"),s=(0,r.default)().add(2,"day").format("YYYY-MM-DD"),n=(0,r.default)().add(3,"day").format("YYYY-MM-DD"),i=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"},{id:"new-york",label:"Meeting room: New York"},{id:"london",label:"Meeting room: London"}],d=[{id:1,title:"Team Standup",start:`${o} 09:00:00`,end:`${o} 09:30:00`,color:"blue",resourceId:"tokyo"},{id:2,title:"Sprint Planning",start:`${o} 10:00:00`,end:`${o} 11:30:00`,color:"green",resourceId:"tokyo"},{id:3,title:"Client Call",start:`${a} 09:30:00`,end:`${a} 10:30:00`,color:"violet",resourceId:"paris"},{id:4,title:"Design Review",start:`${o} 13:00:00`,end:`${o} 14:00:00`,color:"orange",resourceId:"paris"},{id:5,title:"1:1 Meeting",start:`${a} 11:00:00`,end:`${a} 11:30:00`,color:"cyan",resourceId:"new-york"},{id:6,title:"Workshop",start:`${s} 14:00:00`,end:`${s} 16:00:00`,color:"pink",resourceId:"new-york"},{id:7,title:"Architecture Review",start:`${a} 10:00:00`,end:`${a} 11:00:00`,color:"red",resourceId:"london"},{id:8,title:"Retrospective",start:`${o} 15:00:00`,end:`${o} 16:00:00`,color:"grape",resourceId:"london"},{id:9,title:"Product Demo",start:`${s} 09:00:00`,end:`${s} 10:00:00`,color:"teal",resourceId:"tokyo"},{id:10,title:"Budget Review",start:`${n} 11:00:00`,end:`${n} 12:30:00`,color:"indigo",resourceId:"paris"}],l=`
import dayjs from 'dayjs';
import { ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
const dayAfter = dayjs().add(2, 'day').format('YYYY-MM-DD');
const dayAfter2 = dayjs().add(3, 'day').format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
  { id: 'london', label: 'Meeting room: London' },
];

const events = [
  {
    id: 1,
    title: 'Team Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
    resourceId: 'tokyo',
  },
  {
    id: 2,
    title: 'Sprint Planning',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'green',
    resourceId: 'tokyo',
  },
  {
    id: 3,
    title: 'Client Call',
    start: \`\${tomorrow} 09:30:00\`,
    end: \`\${tomorrow} 10:30:00\`,
    color: 'violet',
    resourceId: 'paris',
  },
  {
    id: 4,
    title: 'Design Review',
    start: \`\${today} 13:00:00\`,
    end: \`\${today} 14:00:00\`,
    color: 'orange',
    resourceId: 'paris',
  },
  {
    id: 5,
    title: '1:1 Meeting',
    start: \`\${tomorrow} 11:00:00\`,
    end: \`\${tomorrow} 11:30:00\`,
    color: 'cyan',
    resourceId: 'new-york',
  },
  {
    id: 6,
    title: 'Workshop',
    start: \`\${dayAfter} 14:00:00\`,
    end: \`\${dayAfter} 16:00:00\`,
    color: 'pink',
    resourceId: 'new-york',
  },
  {
    id: 7,
    title: 'Architecture Review',
    start: \`\${tomorrow} 10:00:00\`,
    end: \`\${tomorrow} 11:00:00\`,
    color: 'red',
    resourceId: 'london',
  },
  {
    id: 8,
    title: 'Retrospective',
    start: \`\${today} 15:00:00\`,
    end: \`\${today} 16:00:00\`,
    color: 'grape',
    resourceId: 'london',
  },
  {
    id: 9,
    title: 'Product Demo',
    start: \`\${dayAfter} 09:00:00\`,
    end: \`\${dayAfter} 10:00:00\`,
    color: 'teal',
    resourceId: 'tokyo',
  },
  {
    id: 10,
    title: 'Budget Review',
    start: \`\${dayAfter2} 11:00:00\`,
    end: \`\${dayAfter2} 12:30:00\`,
    color: 'indigo',
    resourceId: 'paris',
  },
];
`;var c=e.i(191788),u=e.i(391398),m=e.i(499083);let f={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:d,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 08:00:00`})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},D=(0,r.default)().startOf("week").add(1,"day"),v=e=>D.add(e,"day").format("YYYY-MM-DD"),y=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"},{id:"new-york",label:"Meeting room: New York"}],g=[{id:1,title:"Offsite",start:`${v(1)} 00:00:00`,end:`${v(2)} 00:00:00`,color:"blue",resourceId:"tokyo"},{id:2,title:"Review",start:`${v(1)} 00:00:00`,end:`${v(2)} 00:00:00`,color:"grape",resourceId:"tokyo"},{id:3,title:"Sprint Planning",start:`${v(0)} 10:00:00`,end:`${v(0)} 11:30:00`,color:"green",resourceId:"tokyo"},{id:4,title:"Maintenance",start:`${v(2)} 00:00:00`,end:`${v(3)} 00:00:00`,color:"gray",display:"background",resourceId:"paris"},{id:5,title:"Client Call",start:`${v(1)} 09:30:00`,end:`${v(1)} 10:30:00`,color:"violet",resourceId:"paris"},{id:6,title:"Holiday",start:`${v(4)} 00:00:00`,end:`${v(5)} 00:00:00`,color:"orange",resourceId:"new-york"}],p={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,o]=(0,c.useState)(e);return(0,u.jsx)(m.ResourcesWeekView,{date:t,onDateChange:o,resources:y,events:g,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:`
import dayjs from 'dayjs';
import { ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';

const monday = dayjs().startOf('week').add(1, 'day');
const day = (offset: number) => monday.add(offset, 'day').format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
];

// All-day events span a single whole day (start at 00:00, end at the next day 00:00).
// A foreground all-day event renders as a full-width bar pinned to the top of its day
// column and stacks when there are several; all-day events with display: 'background'
// tint the whole day column.
const events: ScheduleEventData[] = [
  { id: 1, title: 'Offsite', start: \`\${day(1)} 00:00:00\`, end: \`\${day(2)} 00:00:00\`, color: 'blue', resourceId: 'tokyo' },
  { id: 2, title: 'Review', start: \`\${day(1)} 00:00:00\`, end: \`\${day(2)} 00:00:00\`, color: 'grape', resourceId: 'tokyo' },
  { id: 3, title: 'Sprint Planning', start: \`\${day(0)} 10:00:00\`, end: \`\${day(0)} 11:30:00\`, color: 'green', resourceId: 'tokyo' },
  { id: 4, title: 'Maintenance', start: \`\${day(2)} 00:00:00\`, end: \`\${day(3)} 00:00:00\`, color: 'gray', display: 'background', resourceId: 'paris' },
  { id: 5, title: 'Client Call', start: \`\${day(1)} 09:30:00\`, end: \`\${day(1)} 10:30:00\`, color: 'violet', resourceId: 'paris' },
  { id: 6, title: 'Holiday', start: \`\${day(4)} 00:00:00\`, end: \`\${day(5)} 00:00:00\`, color: 'orange', resourceId: 'new-york' },
];
`,language:"tsx",fileName:"data.ts"}]},w={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,r.default)().format("YYYY-MM-DD")),[o,a]=(0,c.useState)(d);return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:o,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 08:00:00`,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:r,resourceId:o})=>{a(a=>a.map(a=>a.id===e?{...a,start:t,end:r,resourceId:o}:a))}})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView, ScheduleEventData } from '@mantine/schedule';
import { events as initialEvents, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
      withEventsDragAndDrop
      onEventDrop={({ eventId, newStart, newEnd, resourceId }) => {
        setEvents((current) =>
          current.map((event) =>
            event.id === eventId
              ? { ...event, start: newStart, end: newEnd, resourceId }
              : event
          )
        );
      }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var Y=e.i(162077),h=e.i(988798);let k={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,r.default)().format("YYYY-MM-DD")),[o,a]=(0,c.useState)(d),[s,n]=(0,c.useState)(!1),[l,f]=(0,c.useState)(null),[D,v]=(0,c.useState)(String(i[0].id));return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:o,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 08:00:00`,withDragSlotSelect:!0,onTimeSlotClick:({slotStart:e,slotEnd:t,resourceId:r})=>{v(r?String(r):String(i[0].id)),f({title:"",start:new Date(e),end:new Date(t),color:"blue"}),n(!0)},onSlotDragEnd:({rangeStart:e,rangeEnd:t,resourceId:r})=>{v(r?String(r):String(i[0].id)),f({title:"",start:new Date(e),end:new Date(t),color:"blue"}),n(!0)},onEventClick:e=>{v(e.resourceId?String(e.resourceId):String(i[0].id)),f({id:e.id,title:e.title,start:new Date(e.start),end:new Date(e.end),color:e.color||"blue"}),n(!0)}}),(0,u.jsx)(Y.EventForm,{opened:s,onClose:()=>n(!1),onExitTransitionEnd:()=>f(null),values:l,onSubmit:e=>{e.id?a(t=>t.map(t=>t.id===e.id?{...t,title:e.title,start:(0,r.default)(e.start).format("YYYY-MM-DD HH:mm:ss"),end:(0,r.default)(e.end).format("YYYY-MM-DD HH:mm:ss"),color:e.color||"blue",resourceId:D||i[0].id}:t)):a(t=>[...t,{id:Date.now(),title:e.title,start:(0,r.default)(e.start).format("YYYY-MM-DD HH:mm:ss"),end:(0,r.default)(e.end).format("YYYY-MM-DD HH:mm:ss"),color:e.color||"blue",resourceId:D||i[0].id}])},onDelete:l?.id?()=>{l?.id&&a(e=>e.filter(e=>e.id!==l.id))}:void 0,children:(0,u.jsx)(h.Select,{label:"Conference Room",placeholder:"Select a room",radius:"md",data:i.map(e=>({value:String(e.id),label:String(e.label)})),value:D,onChange:v})})]})},code:[{code:`import dayjs from 'dayjs';
import { useState } from 'react';
import { Select } from '@mantine/core';
import { ResourcesWeekView, ScheduleEventData } from '@mantine/schedule';
import { EventData, EventForm } from './EventForm';
import { events as initialEvents, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);
  const [formOpened, setFormOpened] = useState(false);
  const [selectedEventData, setSelectedEventData] = useState<EventData | null>(null);
  const [selectedResourceId, setSelectedResourceId] = useState<string | null>(
    String(resources[0].id)
  );

  const handleTimeSlotClick = (
    slotStart: string,
    slotEnd: string,
    _e: React.MouseEvent,
    resourceId?: string | number
  ) => {
    setSelectedResourceId(resourceId ? String(resourceId) : String(resources[0].id));
    setSelectedEventData({
      title: '',
      start: new Date(slotStart),
      end: new Date(slotEnd),
      color: 'blue',
    });
    setFormOpened(true);
  };

  const handleEventClick = (event: ScheduleEventData) => {
    setSelectedResourceId(event.resourceId ? String(event.resourceId) : String(resources[0].id));
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
                start: dayjs(values.start).format('YYYY-MM-DD HH:mm:ss'),
                end: dayjs(values.end).format('YYYY-MM-DD HH:mm:ss'),
                color: values.color || 'blue',
                resourceId: selectedResourceId || resources[0].id,
              }
            : event
        )
      );
    } else {
      setEvents((prev) => [
        ...prev,
        {
          id: Date.now(),
          title: values.title,
          start: dayjs(values.start).format('YYYY-MM-DD HH:mm:ss'),
          end: dayjs(values.end).format('YYYY-MM-DD HH:mm:ss'),
          color: values.color || 'blue',
          resourceId: selectedResourceId || resources[0].id,
        },
      ]);
    }
  };

  const handleSlotDragEnd = (
    rangeStart: string,
    rangeEnd: string,
    resourceId?: string | number
  ) => {
    setSelectedResourceId(resourceId ? String(resourceId) : String(resources[0].id));
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
      <ResourcesWeekView
        date={date}
        onDateChange={setDate}
        resources={resources}
        events={events}
        startTime="08:00:00"
        endTime="18:00:00"
        startScrollDateTime={\`\${today} 08:00:00\`}
        withDragSlotSelect
        onTimeSlotClick={handleTimeSlotClick}
        onSlotDragEnd={handleSlotDragEnd}
        onEventClick={handleEventClick}
      />

      <EventForm
        opened={formOpened}
        onClose={() => setFormOpened(false)}
        onExitTransitionEnd={() => setSelectedEventData(null)}
        values={selectedEventData}
        onSubmit={handleSubmit}
        onDelete={selectedEventData?.id ? handleDeleteEvent : undefined}
      >
        <Select
          label="Conference Room"
          placeholder="Select a room"
          radius="md"
          data={resources.map((r) => ({ value: String(r.id), label: String(r.label) }))}
          value={selectedResourceId}
          onChange={setSelectedResourceId}
        />
      </EventForm>
    </>
  );
}`,language:"tsx",fileName:"Demo.tsx"},{code:Y._eventFormCode,language:"tsx",fileName:"EventForm.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},S={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:d,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 08:00:00`,mode:"static"})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
      mode="static"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},x={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:d,startTime:"07:00:00",endTime:"20:00:00",startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 08:00:00`,highlightBusinessHours:!0,businessHours:["09:00:00","17:00:00"]})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="07:00:00"
      endTime="20:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
      highlightBusinessHours
      businessHours={['09:00:00', '17:00:00']}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},M={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:d,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 08:00:00`,withWeekendDays:!1})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
      withWeekendDays={false}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var T=e.i(671640),b=e.i(883364);let $={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:d,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 08:00:00`,renderResourceLabel:e=>(0,u.jsxs)(T.Stack,{gap:2,align:"flex-start",children:[(0,u.jsx)(b.Text,{size:"sm",fw:600,children:e.label}),(0,u.jsx)(b.Text,{size:"xs",c:"dimmed",children:"Floor 2"})]})})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { Stack, Text } from '@mantine/core';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
      renderResourceLabel={(resource) => (
        <Stack gap={2} align="flex-start">
          <Text size="sm" fw={600}>{resource.label}</Text>
          <Text size="xs" c="dimmed">Floor 2</Text>
        </Stack>
      )}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var E=e.i(19683),I=e.i(369974),R=e.i(284629);let W=(0,r.default)().format("YYYY-MM-DD"),j=(0,r.default)().add(1,"day").format("YYYY-MM-DD"),C=(0,r.default)().add(2,"day").format("YYYY-MM-DD"),V=[{id:1,title:"Team Standup",start:`${W} 09:00:00`,end:`${W} 09:30:00`,color:"blue",resourceId:"tokyo",payload:{description:"Daily team sync meeting",attendees:["Alice","Bob","Charlie"],location:"Floor 3"}},{id:2,title:"Sprint Planning",start:`${W} 10:00:00`,end:`${W} 11:30:00`,color:"green",resourceId:"tokyo",payload:{description:"Plan next sprint tasks and goals",attendees:["Diana","Eve"],location:"Main Hall"}},{id:3,title:"Client Call",start:`${j} 09:30:00`,end:`${j} 10:30:00`,color:"violet",resourceId:"paris",payload:{description:"Quarterly review with client",attendees:["Frank","Grace"],location:"Zoom"}},{id:4,title:"Design Review",start:`${W} 13:00:00`,end:`${W} 14:00:00`,color:"orange",resourceId:"paris",payload:{description:"Review UI/UX designs for new feature",attendees:["Henry","Alice"],location:"Studio B"}},{id:5,title:"Workshop",start:`${C} 14:00:00`,end:`${C} 16:00:00`,color:"pink",resourceId:"new-york",payload:{description:"Hands-on coding workshop",attendees:["Bob","Charlie","Diana"],location:"Lab 2"}}],H={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,r.default)().format("YYYY-MM-DD")),[o,a]=(0,c.useState)(V);return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:o,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 08:00:00`,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:r,resourceId:o})=>{a(a=>a.map(a=>a.id===e?{...a,start:t,end:r,resourceId:o}:a))},renderEvent:(e,t)=>(0,u.jsxs)(I.HoverCard,{width:280,position:"bottom",closeDelay:0,transitionProps:{duration:0},children:[(0,u.jsx)(I.HoverCard.Target,{children:(0,u.jsx)(R.UnstyledButton,{...t})}),(0,u.jsx)(I.HoverCard.Dropdown,{children:(0,u.jsx)(E.EventDetails,{event:e})})]})})},code:[{fileName:"Demo.tsx",code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { HoverCard, UnstyledButton } from '@mantine/core';
import { ResourcesWeekView, ScheduleEventData } from '@mantine/schedule';
import { EventDetails } from './EventDetails';
import { events as initialEvents, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
      withEventsDragAndDrop
      onEventDrop={({ eventId, newStart, newEnd, resourceId }) => {
        setEvents((current) =>
          current.map((event) =>
            event.id === eventId
              ? { ...event, start: newStart, end: newEnd, resourceId }
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
`,language:"tsx"},{fileName:"EventDetails.tsx",code:E._eventDetailsCode,language:"tsx"},{fileName:"data.ts",code:`import { ScheduleEventData } from '@mantine/schedule';

export const eventsData: ScheduleEventData[] = ${JSON.stringify(V,null,2)};`,language:"tsx"}]};e.i(27355);let A={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:d,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 08:00:00`,locale:"es",labels:{day:"Día",week:"Semana",month:"Mes",year:"Año",allDay:"Todo el día",timeSlot:"Franja horaria",today:"Hoy",previous:"Anterior",next:"Siguiente",resources:"Recursos"}})},code:[{code:`
import 'dayjs/locale/es';
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
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
        resources: 'Recursos',
      }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},N={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:d,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 08:00:00`,radius:"md"})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
      radius="md"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},B={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:d,startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 10:00:00`})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startScrollDateTime={\`\${today} 10:00:00\`}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},O={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:d,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 08:00:00`,scrollAreaProps:{scrollbarSize:10,offsetScrollbars:!0}})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
      scrollAreaProps={{
        scrollbarSize: 10,
        offsetScrollbars: true,
      }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},P={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:d,startTime:"09:00:00",endTime:"17:00:00",intervalMinutes:30,startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 09:00:00`})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="09:00:00"
      endTime="17:00:00"
      intervalMinutes={30}
      startScrollDateTime={\`\${today} 09:00:00\`}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},L={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:d,startTime:"00:00:00",endTime:"23:59:59",withCurrentTimeIndicator:!0,withCurrentTimeBubble:!1})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="00:00:00"
      endTime="23:59:59"
      withCurrentTimeIndicator
      withCurrentTimeBubble={false}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},_={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:d,startTime:"08:00:00",endTime:"18:00:00",firstDayOfWeek:0,withWeekendDays:!0,weekdayFormat:"dddd D"})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      firstDayOfWeek={0}
      withWeekendDays
      weekdayFormat="dddd D"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},F={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:d,startTime:"08:00:00",endTime:"18:00:00",renderWeekLabel:({weekStart:e,weekEnd:t})=>`Week of ${(0,r.default)(e).format("MMM D")} – ${(0,r.default)(t).format("MMM D, YYYY")}`})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      renderWeekLabel={({ weekStart, weekEnd }) =>
        \`Week of \${dayjs(weekStart).format('MMM D')} – \${dayjs(weekEnd).format('MMM D, YYYY')}\`
      }
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},G=(0,r.default)().format("YYYY-MM-DD"),z=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"}],U=[{id:1,title:"Team Standup",start:`${G} 09:00:00`,end:`${G} 10:00:00`,color:"blue",resourceId:"tokyo"},{id:2,title:"Sprint Planning",start:`${G} 09:00:00`,end:`${G} 10:30:00`,color:"green",resourceId:"tokyo"},{id:3,title:"Code Review",start:`${G} 09:30:00`,end:`${G} 10:00:00`,color:"violet",resourceId:"tokyo"},{id:4,title:"1:1 Meeting",start:`${G} 09:15:00`,end:`${G} 10:15:00`,color:"orange",resourceId:"tokyo"},{id:5,title:"Client Call",start:`${G} 09:00:00`,end:`${G} 10:00:00`,color:"cyan",resourceId:"paris"},{id:6,title:"Design Review",start:`${G} 09:00:00`,end:`${G} 10:00:00`,color:"pink",resourceId:"paris"},{id:7,title:"Architecture Review",start:`${G} 09:00:00`,end:`${G} 10:00:00`,color:"red",resourceId:"paris"}],K={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:z,events:U,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${G} 08:00:00`,maxEventsPerTimeSlot:2})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView, ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
];

const events: ScheduleEventData[] = [
  // ... many overlapping events per resource
];

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
      maxEventsPerTimeSlot={2}
    />
  );
}
`},Q=(0,r.default)().format("YYYY-MM-DD"),X=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"}],q=[{id:"daily-sync-series",title:"Daily sync (series)",start:`${(0,r.default)(Q).subtract(2,"day").format("YYYY-MM-DD")} 09:00:00`,end:`${(0,r.default)(Q).subtract(2,"day").format("YYYY-MM-DD")} 11:00:00`,color:"blue",resourceId:"tokyo",recurrence:{rrule:"FREQ=DAILY;COUNT=10",exdate:[`${Q} 09:00:00`]}},{id:"daily-sync-override",title:"Daily sync (moved today)",start:`${Q} 14:00:00`,end:`${Q} 16:00:00`,color:"grape",resourceId:"tokyo",recurringEventId:"daily-sync-series",recurrenceId:`${Q} 09:00:00`},{id:"one-off",title:"One-off planning",start:`${Q} 11:00:00`,end:`${Q} 13:00:00`,color:"green",resourceId:"paris"}],J={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)(Q);return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:X,events:q,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${Q} 08:00:00`})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const resources = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
];

const events = [
  {
    id: 'daily-sync-series',
    title: 'Daily sync (series)',
    start: \`\${dayjs(today).subtract(2, 'day').format('YYYY-MM-DD')} 09:00:00\`,
    end: \`\${dayjs(today).subtract(2, 'day').format('YYYY-MM-DD')} 11:00:00\`,
    color: 'blue',
    resourceId: 'tokyo',
    recurrence: {
      rrule: 'FREQ=DAILY;COUNT=10',
      exdate: [\`\${today} 09:00:00\`],
    },
  },
  {
    id: 'daily-sync-override',
    title: 'Daily sync (moved today)',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 16:00:00\`,
    color: 'grape',
    resourceId: 'tokyo',
    recurringEventId: 'daily-sync-series',
    recurrenceId: \`\${today} 09:00:00\`,
  },
  {
    id: 'one-off',
    title: 'One-off planning',
    start: \`\${today} 11:00:00\`,
    end: \`\${today} 13:00:00\`,
    color: 'green',
    resourceId: 'paris',
  },
];

function Demo() {
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
    />
  );
}
`},Z=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"},{id:"new-york",label:"Meeting room: New York"},{id:"london",label:"Meeting room: London"},{id:"overflow",label:"Overflow room"}],ee=[{label:"Floor 1",resourceIds:["tokyo","paris"]},{label:"Floor 2",resourceIds:["new-york","london"]}],et={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:Z,events:d,groups:ee,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 08:00:00`})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView, ScheduleResourceGroup } from '@mantine/schedule';
import { events } from './data';

const resources = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
  { id: 'london', label: 'Meeting room: London' },
  { id: 'overflow', label: 'Overflow room' },
];

const groups: ScheduleResourceGroup[] = [
  { label: 'Floor 1', resourceIds: ['tokyo', 'paris'] },
  { label: 'Floor 2', resourceIds: ['new-york', 'london'] },
];

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      groups={groups}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"}]};var er=(0,t.__exportAll)({allDayEvents:()=>p,businessHours:()=>x,currentTimeIndicator:()=>L,dragDrop:()=>w,eventForm:()=>k,firstDayOfWeek:()=>_,localization:()=>A,maxEventsPerTimeSlot:()=>K,radius:()=>N,recurringEvents:()=>J,renderEvent:()=>H,renderResourceLabel:()=>$,renderWeekLabel:()=>F,resourceGroups:()=>et,scrollAreaProps:()=>O,startScrollDateTime:()=>B,staticMode:()=>S,timeRange:()=>P,usage:()=>f,withoutWeekendDays:()=>M});e.s(["ResourcesWeekViewDemos",0,er],259072)}]);