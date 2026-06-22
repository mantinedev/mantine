(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,420924,176304,461304,e=>{"use strict";e.s(["getOrderedResources",0,function(e,t){if(!t||0===t.length)return{orderedResources:e,groupRanges:[],resourceGroupMap:[]};let o=new Map(e.map(e=>[e.id,e])),r=new Set,a=[],s=[];for(let e of t){let t=a.length,n=0;for(let t of e.resourceIds){let e=o.get(t);e&&!r.has(t)&&(a.push(e),r.add(t),n++)}n>0&&s.push({group:e,startIndex:t,count:n})}for(let t of e)r.has(t.id)||a.push(t);let n=Array(a.length).fill(null);for(let e of s)for(let t=0;t<e.count;t++){let o,r=e.startIndex+t;o=1===e.count?"only":0===t?"first":t===e.count-1?"last":"middle",n[r]={group:e.group,position:o,count:e.count}}return{orderedResources:a,groupRanges:s,resourceGroupMap:n}}],420924),e.s(["getGroupToResourceIdMap",0,function(e){let t=new Map;for(let o of e)t.set(String(o.id),o.id);return t}],176304),e.s(["getIndexFromDragPoint",0,function(e,t){let o=e.findIndex(e=>{if(!e)return!1;let o=e.getBoundingClientRect();return t>=o.left&&t<=o.right});if(o>=0)return o;let r=e[0],a=e[e.length-1];if(!r||!a)return null;let s=r.getBoundingClientRect(),n=a.getBoundingClientRect();return t<s.left?0:t>n.right?e.length-1:null}],461304)},272013,e=>{"use strict";var t=e.i(86473),o=e.i(27748),r=e.i(4332),a=e.i(276995),s=e.i(657068),n=e.i(420924),d=e.i(176304),l=e.i(461304),i=e.i(783261),c=e.i(376879),u=e.i(201867),m=e.i(891343),D=e.i(67312),f=e.i(966696),y={resourcesMonthView:"m_652b3acd",resourcesMonthViewRoot:"m_146e014f",resourcesMonthViewScrollArea:"m_b1cab7a7",resourcesMonthViewInner:"m_78d2db89",resourcesMonthViewDayLabelsRow:"m_eae51c8c",resourcesMonthViewCorner:"m_975b8b82",resourcesMonthViewDayLabel:"m_bc016ea5",resourcesMonthViewDayLabelWeekday:"m_52a1c4c3",resourcesMonthViewDayLabelNumber:"m_88d8e64e",resourcesMonthViewRow:"m_21b0f7cd",resourcesMonthViewResourceLabel:"m_1febcdb9",resourcesMonthViewGroupColumn:"m_1fc335a8",resourcesMonthViewGroupColumnEmpty:"m_d5a3a885",resourcesMonthViewRowSlots:"m_4be74668",resourcesMonthViewCell:"m_146709cf"},Y=e.i(494834),p=e.i(232471),h=e.i(19300),g=e.i(284629),v=e.i(481178),M=e.i(275519),S=e.i(433512),w=e.i(779177),x=e.i(44091),$=e.i(62904),I=e.i(391466),k=e.i(417241),E=e.i(332977),R=e.i(191788),b=e.i(205693),j=e.i(391398);let C=(0,v.createVarsResolver)((e,{radius:t,dayWidth:o,rowHeight:r,groupLabelWidth:a})=>({resourcesMonthView:{"--resources-month-view-radius":t?(0,S.getRadius)(t):void 0,"--resources-month-view-day-width":(0,w.rem)(o),"--resources-month-view-row-height":(0,w.rem)(r),"--resources-month-view-group-label-width":(0,w.rem)(a)}})),V={__staticSelector:"ResourcesMonthView",highlightToday:!0,withHeader:!0,weekdayFormat:"ddd",withWeekendDays:!0,withEventsDragAndDrop:!1,withDragSlotSelect:!1,mode:"default"};function O(e,t){let o=(0,Y.default)(e.start),r=(0,Y.default)(t.start),a=(0,Y.default)(e.end).startOf("day").diff(o.startOf("day"),"day"),s=(0,Y.default)(t.end).startOf("day").diff(r.startOf("day"),"day");return a!==s?s-a:o.valueOf()-r.valueOf()}function T(e){return(0,Y.default)(e.end).startOf("day").isAfter((0,Y.default)(e.start).startOf("day"))}let P=(0,M.factory)(e=>{let v=(0,x.useProps)("ResourcesMonthView",V,e),{classNames:M,className:S,style:w,styles:P,unstyled:N,attributes:H,vars:A,mod:F,date:B,onDateChange:L,resources:W,locale:_,weekdayFormat:z,weekendDays:G,withWeekendDays:U,startScrollDate:K,__staticSelector:Q,onDayClick:X,highlightToday:q,radius:J,withHeader:Z,monthYearSelectProps:ee,onViewChange:et,todayControlProps:eo,nextControlProps:er,previousControlProps:ea,viewSelectProps:es,events:en,dayWidth:ed,rowHeight:el,renderResourceLabel:ei,groups:ec,renderGroupLabel:eu,groupLabelWidth:em,renderEventBody:eD,renderEvent:ef,withEventsDragAndDrop:ey,onEventDrop:eY,canDragEvent:ep,onEventDragStart:eh,onEventDragEnd:eg,onEventClick:ev,withDragSlotSelect:eM,onSlotDragEnd:eS,labels:ew,mode:ex,scrollAreaProps:e$,onExternalEventDrop:eI,maxEventsPerTimeSlot:ek,moreEventsProps:eE,recurrenceExpansionLimit:eR,...eb}=v,ej=Math.min(10,Math.max(1,ek??2)),eC=(0,I.useStyles)({name:Q,classes:y,props:v,className:S,style:w,classNames:M,styles:P,unstyled:N,attributes:H,vars:A,varsResolver:C,rootSelector:"resourcesMonthView"}),{resolvedClassNames:eV,resolvedStyles:eO}=(0,$.useResolvedStylesApi)({classNames:M,styles:P,props:v}),eT={classNames:eV,styles:eO,attributes:H,__staticSelector:Q,radius:J},eP=(0,b.useDatesContext)(),eN=eP.getWeekendDays(G),{orderedResources:eH,groupRanges:eA,resourceGroupMap:eF}=(0,R.useMemo)(()=>(0,n.getOrderedResources)(W,ec),[W,ec]),eB=eA.length>0,eL=(0,R.useMemo)(()=>{let e=(0,Y.default)(B).startOf("month"),t=e.endOf("month").date(),o=eP.getWeekendDays(G),r=[];for(let a=1;a<=t;a++){let t=e.date(a);!U&&o.includes(t.day())||r.push(t.format("YYYY-MM-DD"))}return r},[B,U,G,eP]),eW=(0,R.useRef)(null),e_=(0,E.useMergedRef)(eW,e$?.viewportRef),ez=(0,R.useRef)([]),eG=(0,R.useRef)(null),eU=(0,R.useCallback)(e=>{if(!eW.current)return;let t=eL.indexOf(e);if(t<0)return;let o=ez.current[t];if(!o)return;let r=o.getBoundingClientRect(),a=eW.current.getBoundingClientRect(),s=eG.current?.getBoundingClientRect().width??0;eW.current.scrollTo({left:r.left-a.left-s,top:0})},[eL]);(0,k.useIsomorphicEffect)(()=>{K&&eU(K)},[]);let eK=(0,R.useMemo)(()=>(0,s.expandRecurringEvents)({events:en,rangeStart:(0,Y.default)(B).startOf("month").toDate(),rangeEnd:(0,Y.default)(B).endOf("month").toDate(),expansionLimit:eR}),[en,B,eR]),{eventsByResourceAndDay:eQ,eventLayoutByResource:eX}=(0,R.useMemo)(()=>{let e={};for(let t of W)for(let o of(e[t.id]={},eL))e[t.id][o]=[];if(eK)for(let t of eK){if(void 0===t.resourceId||!(t.resourceId in e))continue;let o=(0,Y.default)(t.start),r=(0,Y.default)(t.end);for(let a of eL){let s=(0,Y.default)(a).startOf("day"),n=(0,Y.default)(a).endOf("day");o.isBefore(n)&&r.isAfter(s)&&e[t.resourceId][a].push(t)}}let t={},o=(0,Y.default)(eL[0]).startOf("day"),r=(0,Y.default)(eL[eL.length-1]).add(1,"day").startOf("day");for(let a of W){let s={},n=new Map,d=new Map,l=new Map;eL.forEach((t,o)=>{let r=e[a.id][t];for(let e of(r.sort(O),r)){let t=l.get(e.id);t?t.days.push(o):l.set(e.id,{event:e,days:[o]})}let i=new Set,c=[],u=0;for(let e of r){let t=n.get(e.id);if((void 0===t||t>=ej||i.has(t))&&(t=function(e,t){for(let o=0;o<t;o+=1)if(!e.has(o))return o;return null}(i,ej)),null===t){u+=1;continue}i.add(t),c.push({event:e,row:t}),d.has(e.id)||d.set(e.id,new Map),d.get(e.id).set(o,t),n.set(e.id,t)}s[t]={visible:c,hiddenCount:u}});let i=[];for(let{event:e,days:t}of l.values()){if(!T(e))continue;let a=t[0],n=t[t.length-1],l=d.get(e.id),c=(0,Y.default)(e.start).isBefore(o),u=(0,Y.default)(e.end).isAfter(r),m=null,D=()=>{if(!m)return;let t=m.startDayIndex>a,o=m.endDayIndex<n,r=!t&&c,d=!o&&u,l=!1;for(let e=m.startDayIndex;e<=m.endDayIndex;e+=1)if((s[eL[e]]?.hiddenCount??0)>0){l=!0;break}i.push({event:e,startDayIndex:m.startDayIndex,endDayIndex:m.endDayIndex,row:m.row,clipStart:t,clipEnd:o,hanging:r&&d?"both":r?"start":d?"end":"none",hiddenInSpan:l}),m=null};for(let e=a;e<=n;e+=1){let t=l?.get(e);if(void 0===t){D();continue}m&&m.row===t&&m.endDayIndex===e-1?m.endDayIndex=e:(D(),m={startDayIndex:e,endDayIndex:e,row:t})}D()}t[a.id]={byDay:s,segments:i}}return{eventsByResourceAndDay:e,eventLayoutByResource:t}},[W,eL,eK,ej]),eq=(0,R.useCallback)((e,t)=>{eI&&eI({dataTransfer:e.dataTransfer,dropDateTime:`${(0,Y.default)(t.day).format("YYYY-MM-DD")} 00:00:00`,resourceId:t.resourceId})},[eI]),eJ=(0,i.useDragDropHandlers)({enabled:ey,mode:ex,onEventDrop:e=>{eY?.({...e,resourceId:eZ.current})},canDragEvent:ep,onEventDragStart:eh,onEventDragEnd:eg,calculateDropTarget:(e,t)=>(eZ.current=e.resourceId,(0,a.calculateMonthDropDate)({draggedEvent:t,targetDay:e.day})),onExternalDrop:eI?eq:void 0}),eZ=(0,R.useRef)(void 0),e0=(ey||!!eI)&&"static"!==ex,e1=(0,R.useMemo)(()=>(0,d.getGroupToResourceIdMap)(W),[W]),e3=(0,c.useSlotDragSelect)({enabled:eM&&"static"!==ex,onDragEnd:(e,t,o)=>{if(!eS)return;let r=eL[e],a=eL[t];r&&a&&eS({rangeStart:(0,Y.default)(r).startOf("day").format("YYYY-MM-DD HH:mm:ss"),rangeEnd:(0,Y.default)(a).endOf("day").format("YYYY-MM-DD HH:mm:ss"),resourceId:e1.get(o)??o})}}),e4=eL.map((e,t)=>{let r=(0,Y.default)(e),a=eN.includes(r.day()),s=r.isSame((0,Y.default)(),"day")&&q;return(0,R.createElement)(p.Box,{...eC("resourcesMonthViewDayLabel"),key:e,mod:{weekend:a,today:s},ref:e=>{ez.current[t]=e}},(0,j.jsx)("span",{...eC("resourcesMonthViewDayLabelWeekday"),children:(0,o.formatDate)({date:r,locale:eP.getLocale(_),format:z})}),(0,j.jsx)("span",{...eC("resourcesMonthViewDayLabelNumber"),children:r.date()}))}),e2=(0,R.useRef)([]),e6=(0,R.useCallback)((e,t)=>(0,l.getIndexFromDragPoint)(e2.current[t]??[],e.clientX),[]),e9=100/ej,e7=eH.map((e,t)=>{e2.current[t]||(e2.current[t]=[]);let o=String(e.id),r=eJ.dropTarget,a=eL.length,s=[],n=[],d=eL.map((d,l)=>{let i=(0,Y.default)(d),c=eP.getWeekendDays(G).includes(i.day()),u=null!==r&&"object"==typeof r&&"day"in r&&r.day===d&&r.resourceId===e.id,f=e3.isSlotSelected(l,o),y=eQ[e.id]?.[d]||[],p=eX[e.id]?.byDay[d],h=p?.visible??[],v=p?.hiddenCount??0,M=0===t&&0===l,S=l/a*100,w=100/a,x=v>0&&"static"!==ex;return h.forEach(({event:e,row:t})=>{if(T(e))return;let o=eJ.isDraggableEvent(e),r=x?`calc((100% - 18px) * ${t} / ${ej} + 1px)`:`calc(${t*e9}% + 1px)`,a=x?`calc((100% - 18px) / ${ej} - 2px)`:`calc(${e9}% - 2px)`;s.push((0,j.jsx)(m.ScheduleEvent,{event:e,nowrap:!0,autoSize:!0,size:"sm",draggable:o,renderEventBody:eD,renderEvent:ef,radius:J,mode:ex,onClick:ev?t=>ev(e,t):void 0,style:{position:"absolute",top:r,left:`calc(${S}% + 1px)`,width:`calc(${w}% - 2px)`,height:a,zIndex:3}},`${e.id}-${d}`))}),v>0&&"static"!==ex&&n.push((0,j.jsx)(D.MoreEvents,{events:y,moreEventsCount:v,mode:ex,labels:ew,renderEventBody:eD,renderEvent:ef,onEventClick:ev,style:{position:"absolute",bottom:1,left:`calc(${S}% + 1px)`,width:`calc(${w}% - 2px)`,height:18,zIndex:4},...eT,...eE},`more-${e.id}-${d}`)),(0,j.jsx)(g.UnstyledButton,{ref:e=>{e&&(e2.current[t]||(e2.current[t]=[]),e2.current[t][l]=e)},...eC("resourcesMonthViewCell"),"aria-label":`${e.label} ${i.format("MMMM D, YYYY")}`,"data-drag-slot-index":eM&&"static"!==ex?l:void 0,"data-drag-slot-group":eM&&"static"!==ex?o:void 0,mod:{weekend:c,"drop-target":u,"drag-selected":f,static:"static"===ex},tabIndex:"static"===ex?-1:M?0:-1,onClick:"static"===ex?void 0:t=>X?.({date:d,nativeEvent:t,resourceId:e.id}),onKeyDown:"static"===ex?void 0:e=>((e,t,o)=>{let r=e.key,a=t,s=o;if("ArrowRight"===r)s=Math.min(o+1,eL.length-1);else if("ArrowLeft"===r)s=Math.max(o-1,0);else if("ArrowDown"===r)a=Math.min(t+1,W.length-1);else{if("ArrowUp"!==r)return;a=Math.max(t-1,0)}e.preventDefault(),e2.current[a]?.[s]?.focus()})(e,t,l),onPointerDown:eM&&"static"!==ex?e=>e3.handleSlotPointerDown(e,l,o):void 0,onDragOver:e0?e=>e.preventDefault():void 0},d)});(eX[e.id]?.segments??[]).forEach(e=>{let t=eJ.isDraggableEvent(e.event),o=e.startDayIndex/a*100,r=(e.endDayIndex-e.startDayIndex+1)/a*100,n=e.hiddenInSpan&&"static"!==ex,d=n?`calc((100% - 18px) * ${e.row} / ${ej} + 1px)`:`calc(${e.row*e9}% + 1px)`,l=n?`calc((100% - 18px) / ${ej} - 2px)`:`calc(${e9}% - 2px)`;s.push((0,j.jsx)(m.ScheduleEvent,{event:e.event,nowrap:!0,autoSize:!0,size:"sm",hanging:e.hanging,draggable:t,renderEventBody:eD,renderEvent:ef,radius:J,mode:ex,mod:{"clip-start":e.clipStart,"clip-end":e.clipEnd},onClick:ev?t=>ev(e.event,t):void 0,style:{position:"absolute",top:d,left:`calc(${o}% + 1px)`,width:`calc(${r}% - 2px)`,height:l,zIndex:3}},`${e.event.id}-segment-${e.startDayIndex}`))});let l=eB?eF[t]:void 0,i=l?.position==="first"||l?.position==="only",c=void 0!==l?null!==l?(0,j.jsx)(p.Box,{...eC("resourcesMonthViewGroupColumn"),mod:{"group-position":l.position},children:i&&(0,j.jsx)("span",{style:l.count>1?{transform:`translateY(calc((${l.count-1} * (var(--resources-month-view-row-height) + 1px)) / 2))`}:void 0,children:eu?eu(l.group):l.group.label})}):(0,j.jsx)(p.Box,{...eC("resourcesMonthViewGroupColumnEmpty")}):null;return(0,R.createElement)("div",{...eC("resourcesMonthViewRow"),key:e.id},c,(0,j.jsx)("div",{...eC("resourcesMonthViewResourceLabel"),"data-has-groups":eB||void 0,children:ei?ei(e):e.label}),(0,j.jsxs)("div",{...eC("resourcesMonthViewRowSlots"),onDragOver:e0?o=>{let r=e6(o,t);null!==r&&eL[r]&&eJ.handleDragOver(o,{day:eL[r],resourceId:e.id})}:void 0,onDragLeave:e0?eJ.handleDragLeave:void 0,onDrop:e0?o=>{let r=e6(o,t);null!==r&&eL[r]&&eJ.handleDrop(o,{day:eL[r],resourceId:e.id})}:void 0,children:[s,n,d]}))}),e8=(0,j.jsxs)(p.Box,{mod:[{static:"static"===ex,"slot-dragging":e3.isDragging,"event-interaction":eJ.dragContextValue.isDragging},F],...eC("resourcesMonthView"),...eb,children:[Z&&(0,j.jsx)(f.ScheduleHeaderBase,{view:"month",navigationHandlers:{previous:()=>(0,r.toDateString)((0,Y.default)(B).subtract(1,"month").startOf("month")),next:()=>(0,r.toDateString)((0,Y.default)(B).add(1,"month").startOf("month")),today:()=>(requestAnimationFrame(()=>{eU((0,Y.default)().format("YYYY-MM-DD"))}),(0,r.toDateString)((0,Y.default)()))},control:{monthYearSelect:{locale:_,yearValue:(0,Y.default)(B).get("year"),monthValue:(0,Y.default)(B).get("month"),onYearChange:e=>L?.((0,r.toDateString)((0,Y.default)(B).set("year",e).startOf("month"))),onMonthChange:e=>L?.((0,r.toDateString)((0,Y.default)(B).set("month",e).startOf("month"))),...ee}},labels:ew,onDateChange:L,onViewChange:et,previousControlProps:ea,nextControlProps:er,todayControlProps:eo,viewSelectProps:{views:["day","week","month"],...es},stylesApiProps:eT}),(0,j.jsx)(p.Box,{...eC("resourcesMonthViewRoot"),children:(0,j.jsx)(h.ScrollArea,{scrollbars:"x",scrollbarSize:4,...e$,...eC("resourcesMonthViewScrollArea",{className:e$?.className,style:e$?.style}),viewportRef:e_,children:(0,j.jsxs)("div",{...eC("resourcesMonthViewInner"),children:[(0,j.jsxs)("div",{...eC("resourcesMonthViewDayLabelsRow"),children:[(0,R.createElement)("div",{...eC("resourcesMonthViewCorner"),key:"corner",ref:eG,style:eB?{flexBasis:"calc(var(--resources-month-view-resource-label-width) + var(--resources-month-view-group-label-width))",minWidth:"calc(var(--resources-month-view-resource-label-width) + var(--resources-month-view-group-label-width))"}:void 0},(0,t.getLabel)("resources",ew)),e4]}),e7]})})})]});return ey?(0,j.jsx)(u.DragContext.Provider,{value:eJ.dragContextValue,children:e8}):e8});P.displayName="@mantine/schedule/ResourcesMonthView",P.classes=y,P.varsResolver=C,e.s(["ResourcesMonthView",0,P],272013)},573798,e=>{"use strict";var t=e.i(648863),o=e.i(494834);let r=(0,o.default)().format("YYYY-MM-DD"),a=(0,o.default)().add(1,"day").format("YYYY-MM-DD"),s=(0,o.default)().add(5,"day").format("YYYY-MM-DD"),n=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"},{id:"new-york",label:"Meeting room: New York"}],d=[{id:1,title:"Team Standup",start:`${r} 09:00:00`,end:`${r} 09:30:00`,color:"blue",resourceId:"tokyo"},{id:2,title:"Sprint Planning",start:`${r} 10:00:00`,end:`${r} 11:30:00`,color:"green",resourceId:"paris"},{id:3,title:"Design Review",start:`${a} 13:00:00`,end:`${a} 14:00:00`,color:"orange",resourceId:"tokyo"},{id:4,title:"Client Call",start:`${a} 09:30:00`,end:`${a} 10:30:00`,color:"violet",resourceId:"new-york"},{id:5,title:"Workshop",start:`${s} 14:00:00`,end:`${s} 16:00:00`,color:"pink",resourceId:"paris"}],l=`
import dayjs from 'dayjs';
import { ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
const nextWeek = dayjs().add(5, 'day').format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
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
    resourceId: 'paris',
  },
  {
    id: 3,
    title: 'Design Review',
    start: \`\${tomorrow} 13:00:00\`,
    end: \`\${tomorrow} 14:00:00\`,
    color: 'orange',
    resourceId: 'tokyo',
  },
  {
    id: 4,
    title: 'Client Call',
    start: \`\${tomorrow} 09:30:00\`,
    end: \`\${tomorrow} 10:30:00\`,
    color: 'violet',
    resourceId: 'new-york',
  },
  {
    id: 5,
    title: 'Workshop',
    start: \`\${nextWeek} 14:00:00\`,
    end: \`\${nextWeek} 16:00:00\`,
    color: 'pink',
    resourceId: 'paris',
  },
];
`;var i=e.i(191788),c=e.i(391398),u=e.i(272013);let m={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,o.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.ResourcesMonthView,{date:e,onDateChange:t,resources:n,events:d,startScrollDate:(0,o.default)().format("YYYY-MM-DD")})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},D={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,o.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.ResourcesMonthView,{date:e,onDateChange:t,resources:n,events:d,mode:"static",startScrollDate:(0,o.default)().format("YYYY-MM-DD")})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      mode="static"
      startScrollDate={dayjs().format('YYYY-MM-DD')}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},f={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,o.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.ResourcesMonthView,{date:e,onDateChange:t,resources:n,events:d,radius:"md",startScrollDate:(0,o.default)().format("YYYY-MM-DD")})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      radius="md"
      startScrollDate={dayjs().format('YYYY-MM-DD')}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},y={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,o.default)().format("YYYY-MM-DD")),[r,a]=(0,i.useState)(d);return(0,c.jsx)(u.ResourcesMonthView,{date:e,onDateChange:t,resources:n,events:r,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:o,resourceId:r})=>{a(a=>a.map(a=>a.id===e?{...a,start:t,end:o,resourceId:r}:a))},startScrollDate:(0,o.default)().format("YYYY-MM-DD")})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView, ScheduleEventData } from '@mantine/schedule';
import { events as initialEvents, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
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
      startScrollDate={dayjs().format('YYYY-MM-DD')}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var Y=e.i(162077),p=e.i(988798);let h={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,o.default)().format("YYYY-MM-DD")),[r,a]=(0,i.useState)(d),[s,l]=(0,i.useState)(!1),[m,D]=(0,i.useState)(null),[f,y]=(0,i.useState)(null);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(u.ResourcesMonthView,{date:e,onDateChange:t,resources:n,events:r,withDragSlotSelect:!0,onDayClick:({date:e,resourceId:t})=>{y(t?String(t):null),D({title:"",start:(0,o.default)(e).startOf("day").toDate(),end:(0,o.default)(e).endOf("day").toDate(),color:"blue"}),l(!0)},onSlotDragEnd:({rangeStart:e,rangeEnd:t,resourceId:o})=>{y(o?String(o):null),D({title:"",start:new Date(e),end:new Date(t),color:"blue"}),l(!0)},onEventClick:e=>{y(e.resourceId?String(e.resourceId):null),D({id:e.id,title:e.title,start:new Date(e.start),end:new Date(e.end),color:e.color||"blue"}),l(!0)},startScrollDate:(0,o.default)().format("YYYY-MM-DD")}),(0,c.jsx)(Y.EventForm,{opened:s,onClose:()=>l(!1),onExitTransitionEnd:()=>D(null),values:m,onSubmit:e=>{e.id?a(t=>t.map(t=>t.id===e.id?{...t,title:e.title,start:(0,o.default)(e.start).toISOString(),end:(0,o.default)(e.end).toISOString(),color:e.color||"blue",resourceId:f||t.resourceId}:t)):a(t=>[...t,{id:Math.random().toString(36).substring(2,11),title:e.title,start:(0,o.default)(e.start).toISOString(),end:(0,o.default)(e.end).toISOString(),color:e.color||"blue",resourceId:f||void 0}])},onDelete:m?.id?()=>{m?.id&&a(e=>e.filter(e=>e.id!==m.id))}:void 0,children:(0,c.jsx)(p.Select,{label:"Resource",placeholder:"Select resource",radius:"md",data:n.map(e=>({value:String(e.id),label:String(e.label)})),value:f,onChange:y})})]})},code:[{code:`import dayjs from 'dayjs';
import { useState } from 'react';
import { Select } from '@mantine/core';
import { ResourcesMonthView, ScheduleEventData } from '@mantine/schedule';
import { EventData, EventForm } from './EventForm';
import { events as initialEvents, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);
  const [formOpened, setFormOpened] = useState(false);
  const [selectedEventData, setSelectedEventData] = useState<EventData | null>(null);
  const [selectedResourceId, setSelectedResourceId] = useState<string | null>(null);

  const handleDayClick = ({
    date: clickedDate,
    resourceId,
  }: {
    date: string;
    nativeEvent: React.MouseEvent<HTMLButtonElement>;
    resourceId?: string | number;
  }) => {
    setSelectedResourceId(resourceId ? String(resourceId) : null);
    setSelectedEventData({
      title: '',
      start: dayjs(clickedDate).startOf('day').toDate(),
      end: dayjs(clickedDate).endOf('day').toDate(),
      color: 'blue',
    });
    setFormOpened(true);
  };

  const handleEventClick = (event: ScheduleEventData) => {
    setSelectedResourceId(event.resourceId ? String(event.resourceId) : null);
    setSelectedEventData({
      id: event.id,
      title: event.title,
      start: new Date(event.start),
      end: new Date(event.end),
      color: event.color || 'blue',
    });
    setFormOpened(true);
  };

  const handleSlotDragEnd = ({
    rangeStart,
    rangeEnd,
    resourceId,
  }: {
    rangeStart: string;
    rangeEnd: string;
    resourceId?: string | number;
  }) => {
    setSelectedResourceId(resourceId ? String(resourceId) : null);
    setSelectedEventData({
      title: '',
      start: new Date(rangeStart),
      end: new Date(rangeEnd),
      color: 'blue',
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
                resourceId: selectedResourceId || event.resourceId,
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
          resourceId: selectedResourceId || undefined,
        },
      ]);
    }
  };

  const handleDeleteEvent = () => {
    if (selectedEventData?.id) {
      setEvents((prev) => prev.filter((e) => e.id !== selectedEventData.id));
    }
  };

  return (
    <>
      <ResourcesMonthView
        date={date}
        onDateChange={setDate}
        resources={resources}
        events={events}
        withDragSlotSelect
        onDayClick={handleDayClick}
        onSlotDragEnd={handleSlotDragEnd}
        onEventClick={handleEventClick}
        startScrollDate={dayjs().format('YYYY-MM-DD')}
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
          label="Resource"
          placeholder="Select resource"
          radius="md"
          data={resources.map((r) => ({ value: String(r.id), label: r.label }))}
          value={selectedResourceId}
          onChange={setSelectedResourceId}
        />
      </EventForm>
    </>
  );
}`,language:"tsx",fileName:"Demo.tsx"},{code:Y._eventFormCode,language:"tsx",fileName:"EventForm.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var g=e.i(19683),v=e.i(369974),M=e.i(284629);let S=(0,o.default)().format("YYYY-MM-DD"),w=(0,o.default)().add(1,"day").format("YYYY-MM-DD"),x=(0,o.default)().add(5,"day").format("YYYY-MM-DD"),$=[{id:1,title:"Team Standup",start:`${S} 09:00:00`,end:`${S} 09:30:00`,color:"blue",resourceId:"tokyo",payload:{description:"Daily team sync meeting",attendees:["Alice","Bob","Charlie"],location:"Floor 3"}},{id:2,title:"Sprint Planning",start:`${S} 10:00:00`,end:`${S} 11:30:00`,color:"green",resourceId:"paris",payload:{description:"Plan next sprint tasks and goals",attendees:["Diana","Eve"],location:"Main Hall"}},{id:3,title:"Design Review",start:`${w} 13:00:00`,end:`${w} 14:00:00`,color:"orange",resourceId:"tokyo",payload:{description:"Review UI/UX designs for new feature",attendees:["Henry","Alice"],location:"Studio B"}},{id:4,title:"Client Call",start:`${w} 09:30:00`,end:`${w} 10:30:00`,color:"violet",resourceId:"new-york",payload:{description:"Quarterly review with client",attendees:["Frank","Grace"],location:"Zoom"}},{id:5,title:"Workshop",start:`${x} 14:00:00`,end:`${x} 16:00:00`,color:"pink",resourceId:"paris",payload:{description:"Hands-on coding workshop",attendees:["Bob","Charlie","Diana"],location:"Lab 2"}}],I={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,o.default)().format("YYYY-MM-DD")),[r,a]=(0,i.useState)($);return(0,c.jsx)(u.ResourcesMonthView,{date:e,onDateChange:t,resources:n,events:r,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:o,resourceId:r})=>{a(a=>a.map(a=>a.id===e?{...a,start:t,end:o,resourceId:r}:a))},renderEvent:(e,t)=>(0,c.jsxs)(v.HoverCard,{width:280,position:"right",closeDelay:0,transitionProps:{duration:0},children:[(0,c.jsx)(v.HoverCard.Target,{children:(0,c.jsx)(M.UnstyledButton,{...t})}),(0,c.jsx)(v.HoverCard.Dropdown,{children:(0,c.jsx)(g.EventDetails,{event:e,resources:n})})]}),startScrollDate:(0,o.default)().format("YYYY-MM-DD")})},code:[{fileName:"Demo.tsx",code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { HoverCard, UnstyledButton } from '@mantine/core';
import { ResourcesMonthView, ScheduleEventData } from '@mantine/schedule';
import { EventDetails } from './EventDetails';
import { events as initialEvents, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
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
        <HoverCard width={280} position="right" closeDelay={0} transitionProps={{ duration: 0 }}>
          <HoverCard.Target>
            <UnstyledButton {...props} />
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <EventDetails event={event} resources={resources} />
          </HoverCard.Dropdown>
        </HoverCard>
      )}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
    />
  );
}
`,language:"tsx"},{fileName:"EventDetails.tsx",code:g._eventDetailsCode,language:"tsx"},{fileName:"data.ts",code:`import { ScheduleResourceData } from '@mantine/schedule';

export const resources: ScheduleResourceData[] = ${JSON.stringify(n,null,2)};

// Events with payload data for EventDetails
export const events = [
  // ... events with payload: { description, attendees, location }
];`,language:"tsx"}]};var k=e.i(671640),E=e.i(883364);let R={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,o.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.ResourcesMonthView,{date:e,onDateChange:t,resources:n,events:d,renderResourceLabel:e=>(0,c.jsxs)(k.Stack,{gap:0,align:"flex-start",children:[(0,c.jsx)(E.Text,{fw:600,size:"sm",children:e.label}),(0,c.jsx)(E.Text,{size:"xs",c:"dimmed",children:"Office"})]}),startScrollDate:(0,o.default)().format("YYYY-MM-DD")})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { Stack, Text } from '@mantine/core';
import { ResourcesMonthView, ScheduleResourceData } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      renderResourceLabel={(resource: ScheduleResourceData) => (
        <Stack gap={0} align="flex-start">
          <Text fw={600} size="sm">
            {resource.label}
          </Text>
          <Text size="xs" c="dimmed">
            Office
          </Text>
        </Stack>
      )}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};e.i(27355);let b={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,o.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.ResourcesMonthView,{date:e,onDateChange:t,resources:n,events:d,locale:"es",labels:{day:"Día",week:"Semana",month:"Mes",year:"Año",today:"Hoy",previous:"Anterior",next:"Siguiente",more:"Más",resources:"Recursos",moreLabel:e=>`+${e} m\xe1s`},startScrollDate:(0,o.default)().format("YYYY-MM-DD")})},code:[{code:`
import 'dayjs/locale/es';

import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      locale="es"
      labels={{
        day: 'D\xeda',
        week: 'Semana',
        month: 'Mes',
        year: 'A\xf1o',
        today: 'Hoy',
        previous: 'Anterior',
        next: 'Siguiente',
        more: 'M\xe1s',
        resources: 'Recursos',
        moreLabel: (hiddenEventsCount) => \`+\${hiddenEventsCount} m\xe1s\`,
      }}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},j=(0,o.default)().format("YYYY-MM-DD"),C=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"}],V=[{id:1,title:"Team Meeting",start:`${j} 09:00:00`,end:`${j} 10:00:00`,color:"blue",resourceId:"tokyo"},{id:2,title:"Code Review",start:`${j} 11:00:00`,end:`${j} 12:00:00`,color:"green",resourceId:"tokyo"},{id:3,title:"Design Review",start:`${j} 13:00:00`,end:`${j} 14:00:00`,color:"violet",resourceId:"tokyo"},{id:4,title:"Sprint Planning",start:`${j} 15:00:00`,end:`${j} 16:00:00`,color:"orange",resourceId:"tokyo"},{id:5,title:"Retrospective",start:`${j} 16:30:00`,end:`${j} 17:30:00`,color:"cyan",resourceId:"tokyo"},{id:6,title:"Client Call",start:`${j} 09:00:00`,end:`${j} 10:00:00`,color:"pink",resourceId:"paris"},{id:7,title:"Workshop",start:`${j} 11:00:00`,end:`${j} 12:00:00`,color:"grape",resourceId:"paris"},{id:8,title:"Standup",start:`${j} 14:00:00`,end:`${j} 15:00:00`,color:"red",resourceId:"paris"},{id:9,title:"Demo",start:`${j} 16:00:00`,end:`${j} 17:00:00`,color:"teal",resourceId:"paris"}],O={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,o.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.ResourcesMonthView,{date:e,onDateChange:t,resources:C,events:V,maxEventsPerTimeSlot:3,startScrollDate:(0,o.default)().format("YYYY-MM-DD")})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView, ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
];

const events: ScheduleEventData[] = [
  { id: 1, title: 'Team Meeting', start: \`\${today} 09:00:00\`, end: \`\${today} 10:00:00\`, color: 'blue', resourceId: 'tokyo' },
  { id: 2, title: 'Code Review', start: \`\${today} 11:00:00\`, end: \`\${today} 12:00:00\`, color: 'green', resourceId: 'tokyo' },
  { id: 3, title: 'Design Review', start: \`\${today} 13:00:00\`, end: \`\${today} 14:00:00\`, color: 'violet', resourceId: 'tokyo' },
  { id: 4, title: 'Sprint Planning', start: \`\${today} 15:00:00\`, end: \`\${today} 16:00:00\`, color: 'orange', resourceId: 'tokyo' },
  { id: 5, title: 'Retrospective', start: \`\${today} 16:30:00\`, end: \`\${today} 17:30:00\`, color: 'cyan', resourceId: 'tokyo' },
  { id: 6, title: 'Client Call', start: \`\${today} 09:00:00\`, end: \`\${today} 10:00:00\`, color: 'pink', resourceId: 'paris' },
  { id: 7, title: 'Workshop', start: \`\${today} 11:00:00\`, end: \`\${today} 12:00:00\`, color: 'grape', resourceId: 'paris' },
  { id: 8, title: 'Standup', start: \`\${today} 14:00:00\`, end: \`\${today} 15:00:00\`, color: 'red', resourceId: 'paris' },
  { id: 9, title: 'Demo', start: \`\${today} 16:00:00\`, end: \`\${today} 17:00:00\`, color: 'teal', resourceId: 'paris' },
];

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      maxEventsPerTimeSlot={3}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
    />
  );
}
`},T={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,o.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.ResourcesMonthView,{date:e,onDateChange:t,resources:n,events:d,dayWidth:60,rowHeight:64,startScrollDate:(0,o.default)().format("YYYY-MM-DD")})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      dayWidth={60}
      rowHeight={64}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},P={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,o.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.ResourcesMonthView,{date:e,onDateChange:t,resources:n,events:d,scrollAreaProps:{scrollbarSize:10,offsetScrollbars:!0,type:"always",scrollbars:"x"},startScrollDate:(0,o.default)().format("YYYY-MM-DD")})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      scrollAreaProps={{
        scrollbarSize: 10,
        offsetScrollbars: true,
        type: 'always',
        scrollbars: 'x',
      }}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},N={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,o.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.ResourcesMonthView,{date:e,onDateChange:t,resources:n,events:d,startScrollDate:(0,o.default)().format("YYYY-MM-DD")})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},H={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,o.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.ResourcesMonthView,{date:e,onDateChange:t,resources:n,events:d,withWeekendDays:!1,startScrollDate:(0,o.default)().format("YYYY-MM-DD")})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      withWeekendDays={false}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},A=(0,o.default)().format("YYYY-MM-DD"),F=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"}],B=[{id:1,title:"Team Standup",start:`${A} 08:00:00`,end:`${A} 08:30:00`,color:"blue",resourceId:"tokyo"},{id:2,title:"Sprint Planning",start:`${A} 09:00:00`,end:`${A} 10:00:00`,color:"green",resourceId:"tokyo"},{id:3,title:"Design Review",start:`${A} 10:30:00`,end:`${A} 11:30:00`,color:"violet",resourceId:"tokyo"},{id:4,title:"Code Review",start:`${A} 13:00:00`,end:`${A} 14:00:00`,color:"orange",resourceId:"tokyo"},{id:5,title:"Retrospective",start:`${A} 14:30:00`,end:`${A} 15:30:00`,color:"cyan",resourceId:"tokyo"},{id:6,title:"Client Call",start:`${A} 16:00:00`,end:`${A} 17:00:00`,color:"pink",resourceId:"tokyo"},{id:7,title:"Workshop",start:`${A} 10:00:00`,end:`${A} 11:00:00`,color:"grape",resourceId:"paris"}],L={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,o.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.ResourcesMonthView,{date:e,onDateChange:t,resources:F,events:B,maxEventsPerTimeSlot:2,startScrollDate:(0,o.default)().format("YYYY-MM-DD")})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView, ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
];

const events: ScheduleEventData[] = [
  { id: 1, title: 'Team Standup', start: \`\${today} 08:00:00\`, end: \`\${today} 08:30:00\`, color: 'blue', resourceId: 'tokyo' },
  { id: 2, title: 'Sprint Planning', start: \`\${today} 09:00:00\`, end: \`\${today} 10:00:00\`, color: 'green', resourceId: 'tokyo' },
  { id: 3, title: 'Design Review', start: \`\${today} 10:30:00\`, end: \`\${today} 11:30:00\`, color: 'violet', resourceId: 'tokyo' },
  { id: 4, title: 'Code Review', start: \`\${today} 13:00:00\`, end: \`\${today} 14:00:00\`, color: 'orange', resourceId: 'tokyo' },
  { id: 5, title: 'Retrospective', start: \`\${today} 14:30:00\`, end: \`\${today} 15:30:00\`, color: 'cyan', resourceId: 'tokyo' },
  { id: 6, title: 'Client Call', start: \`\${today} 16:00:00\`, end: \`\${today} 17:00:00\`, color: 'pink', resourceId: 'tokyo' },
  { id: 7, title: 'Workshop', start: \`\${today} 10:00:00\`, end: \`\${today} 11:00:00\`, color: 'grape', resourceId: 'paris' },
];

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      maxEventsPerTimeSlot={2}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
    />
  );
}
`},W=(0,o.default)().format("YYYY-MM-DD"),_=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"}],z=[{id:1,title:"Team Standup",start:`${W} 08:00:00`,end:`${W} 08:30:00`,color:"blue",resourceId:"tokyo"},{id:2,title:"Sprint Planning",start:`${W} 09:00:00`,end:`${W} 10:00:00`,color:"green",resourceId:"tokyo"},{id:3,title:"Design Review",start:`${W} 10:30:00`,end:`${W} 11:30:00`,color:"violet",resourceId:"tokyo"},{id:4,title:"Code Review",start:`${W} 13:00:00`,end:`${W} 14:00:00`,color:"orange",resourceId:"tokyo"},{id:5,title:"Retrospective",start:`${W} 14:30:00`,end:`${W} 15:30:00`,color:"cyan",resourceId:"tokyo"},{id:6,title:"Client Call",start:`${W} 16:00:00`,end:`${W} 17:00:00`,color:"pink",resourceId:"tokyo"},{id:7,title:"Workshop",start:`${W} 10:00:00`,end:`${W} 11:00:00`,color:"grape",resourceId:"paris"}],G={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,o.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.ResourcesMonthView,{date:e,onDateChange:t,resources:_,events:z,maxEventsPerTimeSlot:2,startScrollDate:(0,o.default)().format("YYYY-MM-DD"),moreEventsProps:{dropdownType:"modal",modalTitle:"All Events"}})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView, ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
];

const events: ScheduleEventData[] = [
  { id: 1, title: 'Team Standup', start: \`\${today} 08:00:00\`, end: \`\${today} 08:30:00\`, color: 'blue', resourceId: 'tokyo' },
  { id: 2, title: 'Sprint Planning', start: \`\${today} 09:00:00\`, end: \`\${today} 10:00:00\`, color: 'green', resourceId: 'tokyo' },
  { id: 3, title: 'Design Review', start: \`\${today} 10:30:00\`, end: \`\${today} 11:30:00\`, color: 'violet', resourceId: 'tokyo' },
  { id: 4, title: 'Code Review', start: \`\${today} 13:00:00\`, end: \`\${today} 14:00:00\`, color: 'orange', resourceId: 'tokyo' },
  { id: 5, title: 'Retrospective', start: \`\${today} 14:30:00\`, end: \`\${today} 15:30:00\`, color: 'cyan', resourceId: 'tokyo' },
  { id: 6, title: 'Client Call', start: \`\${today} 16:00:00\`, end: \`\${today} 17:00:00\`, color: 'pink', resourceId: 'tokyo' },
  { id: 7, title: 'Workshop', start: \`\${today} 10:00:00\`, end: \`\${today} 11:00:00\`, color: 'grape', resourceId: 'paris' },
];

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      maxEventsPerTimeSlot={2}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
      moreEventsProps={{ dropdownType: 'modal', modalTitle: 'All Events' }}
    />
  );
}
`};var U=e.i(428127);let K={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,o.default)().format("YYYY-MM-DD"));return(0,c.jsxs)("div",{children:[(0,c.jsxs)(U.ScheduleHeader,{children:[(0,c.jsx)(U.ScheduleHeader.Previous,{onClick:()=>t((0,o.default)(e).subtract(1,"month").startOf("month").format("YYYY-MM-DD"))}),(0,c.jsx)(U.ScheduleHeader.MonthYearSelect,{yearValue:(0,o.default)(e).year(),monthValue:(0,o.default)(e).month(),onYearChange:r=>t((0,o.default)(e).year(r).startOf("month").format("YYYY-MM-DD")),onMonthChange:r=>t((0,o.default)(e).month(r).startOf("month").format("YYYY-MM-DD"))}),(0,c.jsx)(U.ScheduleHeader.Next,{onClick:()=>t((0,o.default)(e).add(1,"month").startOf("month").format("YYYY-MM-DD"))}),(0,c.jsx)(U.ScheduleHeader.Today,{onClick:()=>t((0,o.default)().format("YYYY-MM-DD"))})]}),(0,c.jsx)(u.ResourcesMonthView,{date:e,onDateChange:t,resources:n,events:d,withHeader:!1})]})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { DateStringValue, ResourcesMonthView, ScheduleHeader } from '@mantine/schedule';
import { events, resources } from './data';

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
                .subtract(1, 'month')
                .startOf('month')
                .format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.MonthYearSelect
          yearValue={dayjs(date).year()}
          monthValue={dayjs(date).month()}
          onYearChange={(year) =>
            setDate(
              dayjs(date)
                .year(year)
                .startOf('month')
                .format('YYYY-MM-DD') as DateStringValue
            )
          }
          onMonthChange={(month) =>
            setDate(
              dayjs(date)
                .month(month)
                .startOf('month')
                .format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.Next
          onClick={() =>
            setDate(
              dayjs(date)
                .add(1, 'month')
                .startOf('month')
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
      </ScheduleHeader>

      <ResourcesMonthView
        date={date}
        onDateChange={setDate}
        resources={resources}
        events={events}
        withHeader={false}
      />
    </div>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},Q=(0,o.default)().format("YYYY-MM-DD"),X=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"}],q=[{id:"daily-sync-series",title:"Daily sync (series)",start:`${(0,o.default)(Q).subtract(2,"day").format("YYYY-MM-DD")} 09:00:00`,end:`${(0,o.default)(Q).subtract(2,"day").format("YYYY-MM-DD")} 09:30:00`,color:"blue",resourceId:"tokyo",recurrence:{rrule:"FREQ=DAILY;COUNT=10",exdate:[`${Q} 09:00:00`]}},{id:"daily-sync-override",title:"Daily sync (moved today)",start:`${Q} 14:00:00`,end:`${Q} 14:30:00`,color:"grape",resourceId:"tokyo",recurringEventId:"daily-sync-series",recurrenceId:`${Q} 09:00:00`},{id:"one-off",title:"One-off planning",start:`${Q} 11:00:00`,end:`${Q} 12:00:00`,color:"green",resourceId:"paris"}],J={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)(Q);return(0,c.jsx)(u.ResourcesMonthView,{date:e,onDateChange:t,resources:X,events:q,startScrollDate:Q})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView } from '@mantine/schedule';

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
    end: \`\${dayjs(today).subtract(2, 'day').format('YYYY-MM-DD')} 09:30:00\`,
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
    end: \`\${today} 14:30:00\`,
    color: 'grape',
    resourceId: 'tokyo',
    recurringEventId: 'daily-sync-series',
    recurrenceId: \`\${today} 09:00:00\`,
  },
  {
    id: 'one-off',
    title: 'One-off planning',
    start: \`\${today} 11:00:00\`,
    end: \`\${today} 12:00:00\`,
    color: 'green',
    resourceId: 'paris',
  },
];

function Demo() {
  const [date, setDate] = useState(today);

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startScrollDate={today}
    />
  );
}
`},Z=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"},{id:"new-york",label:"Meeting room: New York"},{id:"overflow",label:"Overflow room"}],ee=[{label:"Floor 1",resourceIds:["tokyo","paris"]},{label:"Floor 2",resourceIds:["new-york"]}],et={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,o.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.ResourcesMonthView,{date:e,onDateChange:t,resources:Z,events:d,groups:ee,startScrollDate:(0,o.default)().format("YYYY-MM-DD")})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView, ScheduleResourceGroup } from '@mantine/schedule';
import { events } from './data';

const resources = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
  { id: 'overflow', label: 'Overflow room' },
];

const groups: ScheduleResourceGroup[] = [
  { label: 'Floor 1', resourceIds: ['tokyo', 'paris'] },
  { label: 'Floor 2', resourceIds: ['new-york'] },
];

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      groups={groups}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"}]};var eo=(0,t.__exportAll)({customHeader:()=>K,dayWidth:()=>T,dragDrop:()=>y,eventForm:()=>h,localization:()=>b,maxEventsPerTimeSlot:()=>O,moreEvents:()=>L,moreEventsProps:()=>G,radius:()=>f,recurringEvents:()=>J,renderEvent:()=>I,renderResourceLabel:()=>R,resourceGroups:()=>et,scrollAreaProps:()=>P,startScrollDate:()=>N,staticMode:()=>D,usage:()=>m,withoutWeekendDays:()=>H});e.s(["ResourcesMonthViewDemos",0,eo],573798)}]);