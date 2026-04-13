(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,334816,e=>{"use strict";e.s(["createEventHandler",0,function(e,t){return a=>{e?.(a),t?.(a)}}])},369974,e=>{"use strict";var t=e.i(44091),a=e.i(392862);let[n,o]=(0,e.i(386179).createSafeContext)("HoverCard component was not found in the tree");var r=e.i(191788),d=e.i(391398),s=e.i(458272);let i=(0,r.createContext)({withinGroup:!1}),l={openDelay:0,closeDelay:0};function c(e){let{openDelay:a,closeDelay:n,children:o}=(0,t.useProps)("HoverCardGroup",l,e);return(0,d.jsx)(i,{value:{withinGroup:!0},children:(0,d.jsx)(s.FloatingDelayGroup,{delay:{open:a,close:n},children:o})})}c.displayName="@mantine/core/HoverCardGroup",c.extend=e=>e;var m=e.i(334816);function u(e){let{children:n,onMouseEnter:s,onMouseLeave:l,...c}=(0,t.useProps)("HoverCardDropdown",null,e),u=o();if((0,r.use)(i).withinGroup&&u.getFloatingProps&&u.floating){let e=u.getFloatingProps();return(0,d.jsx)(a.Popover.Dropdown,{ref:u.floating,...e,onMouseEnter:(0,m.createEventHandler)(s,e.onMouseEnter),onMouseLeave:(0,m.createEventHandler)(l,e.onMouseLeave),...c,children:n})}let f=(0,m.createEventHandler)(s,u.openDropdown),D=(0,m.createEventHandler)(l,u.closeDropdown);return(0,d.jsx)(a.Popover.Dropdown,{onMouseEnter:f,onMouseLeave:D,...c,children:n})}u.displayName="@mantine/core/HoverCardDropdown";var f=e.i(409703);let D={refProp:"ref"};function p(e){let{children:n,refProp:s,eventPropsWrapperName:l,...c}=(0,t.useProps)("HoverCardTarget",D,e),u=(0,f.getSingleElementChild)(n);if(!u)throw Error("HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let p=o();if((0,r.use)(i).withinGroup&&p.getReferenceProps&&p.reference){let e=p.getReferenceProps();return(0,d.jsx)(a.Popover.Target,{refProp:s,...c,children:(0,r.cloneElement)(u,l?{[l]:{...e,ref:p.reference}}:{...e,ref:p.reference})})}let v={onMouseEnter:(0,m.createEventHandler)(u.props.onMouseEnter,p.openDropdown),onMouseLeave:(0,m.createEventHandler)(u.props.onMouseLeave,p.closeDropdown)};return(0,d.jsx)(a.Popover.Target,{refProp:s,...c,children:(0,r.cloneElement)(u,l?{[l]:v}:v)})}p.displayName="@mantine/core/HoverCardTarget";var v=e.i(107315);let h={openDelay:0,closeDelay:150,initiallyOpened:!1};function g(e){let{children:o,onOpen:l,onClose:c,openDelay:m,closeDelay:u,initiallyOpened:f,...D}=(0,t.useProps)("HoverCard",h,e),p=function(e){let[t,a]=(0,r.useState)(e.defaultOpened),n="boolean"==typeof e.opened?e.opened:t,o=(0,r.use)(i).withinGroup,d=(0,v.useId)(),l=(0,r.useRef)(-1),c=(0,r.useRef)(-1),m=(0,r.useCallback)(()=>{window.clearTimeout(l.current),window.clearTimeout(c.current)},[]),u=(0,r.useCallback)(t=>{a(t),t?(h(d),e.onOpen?.()):e.onClose?.()},[d,e.onOpen,e.onClose]),{context:f,refs:D}=(0,s.useFloating)({open:n,onOpenChange:u}),{delay:p,setCurrentId:h}=(0,s.useDelayGroup)(f,{id:d}),{getReferenceProps:g,getFloatingProps:y}=(0,s.useInteractions)([(0,s.useHover)(f,{enabled:!0,delay:o?p:{open:e.openDelay,close:e.closeDelay}}),(0,s.useRole)(f,{role:"dialog"}),(0,s.useDismiss)(f,{enabled:o})]),Y=(0,r.useCallback)(()=>{o||(m(),0===e.openDelay||void 0===e.openDelay?u(!0):l.current=window.setTimeout(()=>u(!0),e.openDelay))},[o,m,e.openDelay,u]),w=(0,r.useCallback)(()=>{o||(m(),0===e.closeDelay||void 0===e.closeDelay?u(!1):c.current=window.setTimeout(()=>u(!1),e.closeDelay))},[o,m,e.closeDelay,u]);return(0,r.useEffect)(()=>()=>m(),[m]),{opened:n,reference:D.setReference,floating:D.setFloating,getReferenceProps:g,getFloatingProps:y,openDropdown:Y,closeDropdown:w}}({openDelay:m,closeDelay:u,defaultOpened:f,onOpen:l,onClose:c});return(0,d.jsx)(n,{value:{openDropdown:p.openDropdown,closeDropdown:p.closeDropdown,getReferenceProps:p.getReferenceProps,getFloatingProps:p.getFloatingProps,reference:p.reference,floating:p.floating},children:(0,d.jsx)(a.Popover,{...D,opened:p.opened,__staticSelector:"HoverCard",children:o})})}g.displayName="@mantine/core/HoverCard",g.Target=p,g.Dropdown=u,g.Group=c,g.extend=e=>e,e.s(["HoverCard",0,g],369974)},27355,(e,t,a)=>{e.e,t.exports=function(e){"use strict";var t={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(e){return e+"º"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(t,null,!0),t}(e.r(494834))},19683,e=>{"use strict";var t=e.i(257177),a=e.i(725695),n=e.i(671640),o=e.i(883364),r=e.i(391398);let d=`import { Badge, Group, Stack, Text } from '@mantine/core';
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
}`;e.s(["EventDetails",0,function({event:e}){return(0,r.jsxs)(n.Stack,{gap:"xs",children:[(0,r.jsx)(o.Text,{fw:600,size:"sm",children:e.title}),e.payload?.description&&(0,r.jsx)(o.Text,{size:"xs",c:"dimmed",children:e.payload.description}),e.payload?.location&&(0,r.jsx)(a.Group,{gap:4,children:(0,r.jsx)(t.Badge,{size:"sm",variant:"light",children:e.payload.location})}),e.payload?.attendees&&(0,r.jsxs)("div",{children:[(0,r.jsx)(o.Text,{size:"xs",fw:500,mb:4,children:"Attendees:"}),(0,r.jsx)(o.Text,{size:"xs",c:"dimmed",children:e.payload.attendees.join(", ")})]})]})},"_eventDetailsCode",0,d])},855578,e=>{"use strict";var t=e.i(494834),a=e.i(604363);t.default.extend(a.default),e.s(["getWeekNumber",0,function(e){return Array.isArray(e)?(0,t.default)(e.find(e=>1===(0,t.default)(e).day())).isoWeek():(0,t.default)(e).isoWeek()}])},441058,e=>{"use strict";var t=e.i(494834);e.s(["getStartOfWeek",0,function({date:e,firstDayOfWeek:a=1}){let n=(0,t.default)(e);for(;n.day()!==a;)n=n.subtract(1,"day");return n.format("YYYY-MM-DD")}])},621304,e=>{"use strict";var t=e.i(27748),a=e.i(494834);e.s(["getWeekdaysNames",0,function({locale:e,format:n="dd",firstDayOfWeek:o=1}){let r=(0,a.default)().day(o),d=[];for(let a=0;a<7;a+=1)d.push((0,t.formatDate)({locale:e,date:r.add(a,"days"),format:n}));return d}])},605520,753381,e=>{"use strict";var t=e.i(441058),a=e.i(494834);e.s(["getMonthDays",0,function({month:e,firstDayOfWeek:n=1,consistentWeeks:o}){let r=(0,a.default)((0,a.default)(e).subtract((0,a.default)(e).date()-1,"day").format("YYYY-MM-DD")),d=r.format("YYYY-MM-DD"),s=function(e,t=1){let n=(0,a.default)(e);if(!n.isValid())return n;let o=0===t?6:t-1;for(;n.day()!==o;)n=n.add(1,"day");return n.format("YYYY-MM-DD")}(r.add(r.daysInMonth()-1,"day").format("YYYY-MM-DD"),n),i=[],l=(0,a.default)((0,t.getStartOfWeek)({date:d,firstDayOfWeek:n}));for(;(0,a.default)(l).isBefore(s,"day");){let e=[];for(let t=0;t<7;t+=1)e.push(l.format("YYYY-MM-DD 00:00:00")),l=l.add(1,"day");i.push(e)}if(o&&i.length<6){let e=i[i.length-1],t=e[e.length-1],n=(0,a.default)(t).add(1,"day");for(;i.length<6;){let e=[];for(let t=0;t<7;t+=1)e.push(n.format("YYYY-MM-DD 00:00:00")),n=n.add(1,"day");i.push(e)}}return i}],605520),e.s(["isSameMonth",0,function(e,t){return(0,a.default)(e).format("YYYY-MM")===(0,a.default)(t).format("YYYY-MM")}],753381)},647170,e=>{"use strict";e.s(["handleMonthViewKeyDown",0,function({controlsRef:e,weekIndex:t,dayIndex:a,event:n}){let o=function(e){switch(e){case"ArrowDown":return"down";case"ArrowUp":return"up";case"ArrowRight":return"right";case"ArrowLeft":return"left";default:return null}}(n.key);if(o){n.preventDefault();let r=e.current?e.current.map(e=>e?e.length:0):null;if(!r)return;!function e({controlsRef:t,direction:a,weekIndex:n,dayIndex:o,size:r}){let d=function({direction:e,weekIndex:t,dayIndex:a,size:n}){let o=n[t];if(!o)return null;switch(e){case"up":{if(0===t)return null;let e=Math.min(a,n[t-1]-1);return{weekIndex:t-1,dayIndex:e}}case"down":{if(t===n.length-1)return null;let e=Math.min(a,n[t+1]-1);return{weekIndex:t+1,dayIndex:e}}case"left":if(0===a){if(0===t)return null;return{weekIndex:t-1,dayIndex:n[t-1]-1}}return{weekIndex:t,dayIndex:a-1};case"right":if(a===o-1){if(t===n.length-1)return null;return{weekIndex:t+1,dayIndex:0}}return{weekIndex:t,dayIndex:a+1};default:return null}}({direction:a,weekIndex:n,dayIndex:o,size:r});if(!d)return;let s=t.current?.[d.weekIndex]?.[d.dayIndex];s&&(s.disabled||s.getAttribute("data-hidden")||s.getAttribute("data-day-placeholder")?e({controlsRef:t,direction:a,weekIndex:d.weekIndex,dayIndex:d.dayIndex,size:r}):s.focus())}({controlsRef:e,direction:o,weekIndex:t,dayIndex:a,size:r})}}])},67312,e=>{"use strict";var t=e.i(86473),a=e.i(891343),n={moreEventsButton:"m_c958249f",moreEventsDropdown:"m_fc2b9a3e",moreEventsList:"m_89f3254b"},o=e.i(424302),r=e.i(392862),d=e.i(284629),s=e.i(275519),i=e.i(44091),l=e.i(391466),c=e.i(541772),m=e.i(391398);let u={dropdownType:"popover"},f=(0,s.factory)(e=>{let s=(0,i.useProps)("MoreEvents",u,e),{classNames:f,className:D,style:p,styles:v,unstyled:h,vars:g,attributes:y,radius:Y,dropdownType:w,events:M,moreEventsCount:x,popoverProps:E,modalProps:S,onDropdownClose:b,children:j,modalTitle:k,renderEventBody:H,id:C,labels:O,mode:V,...T}=s,[$,I]=(0,c.useDisclosure)(),N=(0,l.useStyles)({name:"MoreEvents",classes:n,props:s,className:D,style:p,classNames:f,styles:v,unstyled:h,attributes:y,vars:g,rootSelector:"moreEventsButton"}),_=()=>{I.close(),b?.()},W=(0,m.jsx)("div",{...N("moreEventsList"),children:M.map(e=>(0,m.jsx)(a.ScheduleEvent,{radius:Y,event:e,size:"md",renderEventBody:H,mode:V,children:e.title},e.id))});return(0,m.jsxs)(m.Fragment,{children:["modal"===w&&(0,m.jsx)(o.Modal,{opened:$,onClose:_,unstyled:h,radius:Y,title:k,...S,children:W}),(0,m.jsxs)(r.Popover,{position:"bottom-start",width:260,opened:$,trapFocus:!0,returnFocus:!1,unstyled:h,disabled:E?.disabled||"modal"===w,radius:Y,transitionProps:{transition:"pop",duration:120},offset:-46,id:C,...E,onChange:e=>{e||(E?.onChange?.(e),_())},children:[(0,m.jsx)(r.Popover.Target,{children:(0,m.jsx)(d.UnstyledButton,{...N("moreEventsButton"),mod:{static:"static"===V},onClick:()=>I.toggle(),...T,children:(0,t.getLabel)("moreLabel",O)(x)})}),(0,m.jsx)(r.Popover.Dropdown,{...N("moreEventsDropdown"),children:W})]})]})});f.displayName="@mantine/schedule/MoreEvents",f.classes=n,e.s(["MoreEvents",0,f],67312)},168574,e=>{"use strict";var t=e.i(621304),a=e.i(855578),n=e.i(605520),o=e.i(753381),r=e.i(4332),d=e.i(494834);function s({month:e,withOutsideDays:t,consistentWeeks:a,firstDayOfWeek:o}){if(!t)return{start:(0,r.toDateString)((0,d.default)(e).startOf("month")),end:(0,r.toDateString)((0,d.default)(e).endOf("month"))};let i=(0,n.getMonthDays)({month:e,firstDayOfWeek:o,consistentWeeks:a});return{start:i[0][0],end:i[i.length-1][6]}}var i=e.i(657068),l=e.i(783261),c=e.i(376879),m=e.i(201867),u=e.i(891343),f=e.i(67312),D=e.i(966696),p=e.i(647170),v=e.i(298008),h=e.i(441058),g={monthView:"m_8eceba9d",monthViewWeekdays:"m_6634a808",monthViewWeek:"m_bdaf3831",monthViewWeekNumber:"m_873456da",monthViewWeekday:"m_c97d91cb",monthViewWeekdaysCorner:"m_25eee07d",monthViewDay:"m_ab476fbf",monthViewDayLabel:"m_fd501e75",monthViewBackgroundEvent:"m_9e8509af",monthViewEvents:"m_f0fa5e16"},y=e.i(232471),Y=e.i(19300),w=e.i(284629),M=e.i(481178),x=e.i(275519),E=e.i(433512),S=e.i(951254),b=e.i(44091),j=e.i(62904),k=e.i(391466),H=e.i(191788),C=e.i(205693),O=e.i(391398);let V=(0,M.createVarsResolver)((e,{radius:t,maxEventsPerDay:a})=>({monthView:{"--month-view-radius":void 0!==t?(0,E.getRadius)(t):void 0,"--month-view-max-events":void 0!==a?`${Math.min(10,Math.max(1,a))}`:void 0}})),T={__staticSelector:"MonthView",withWeekDays:!0,consistentWeeks:!0,highlightToday:!0,withOutsideDays:!0,withHeader:!0,weekdayFormat:"ddd",withEventsDragAndDrop:!1,withDragSlotSelect:!1,mode:"default"},$=(0,x.factory)(e=>{let M=(0,b.useProps)("MonthView",T,e),{classNames:x,className:E,style:$,styles:I,unstyled:N,attributes:_,vars:W,mod:B,date:A,onDateChange:P,withWeekNumbers:R,withWeekDays:L,locale:F,weekdayFormat:G,firstDayOfWeek:z,weekendDays:U,__staticSelector:J,getDayProps:K,getWeekNumberProps:Q,onDayClick:q,onWeekNumberClick:Z,consistentWeeks:X,highlightToday:ee,radius:et,withOutsideDays:ea,withHeader:en,monthYearSelectProps:eo,onViewChange:er,todayControlProps:ed,nextControlProps:es,previousControlProps:ei,viewSelectProps:el,events:ec,moreEventsProps:em,renderEventBody:eu,renderEvent:ef,withEventsDragAndDrop:eD,onEventDrop:ep,canDragEvent:ev,onEventDragStart:eh,onEventDragEnd:eg,onEventClick:ey,withDragSlotSelect:eY,onSlotDragEnd:ew,labels:eM,mode:ex,scrollAreaProps:eE,onExternalEventDrop:eS,recurrenceExpansionLimit:eb,maxEventsPerDay:ej,...ek}=M,eH=Math.min(10,Math.max(1,ej??2)),eC=(0,k.useStyles)({name:J,classes:g,props:M,className:E,style:$,classNames:x,styles:I,unstyled:N,attributes:_,vars:W,varsResolver:V,rootSelector:"monthView"}),{resolvedClassNames:eO,resolvedStyles:eV}=(0,j.useResolvedStylesApi)({classNames:x,styles:I,props:M}),eT=(0,S.useMantineTheme)(),e$=(0,C.useDatesContext)(),eI=s({month:A,withOutsideDays:ea,consistentWeeks:X,firstDayOfWeek:e$.getFirstDayOfWeek(z)}),eN=function({date:e,events:t,firstDayOfWeek:a=1,withOutsideDays:n,consistentWeeks:o}){if(void 0===t)return{groupedByDay:{},groupedByWeek:{},backgroundByWeek:{}};let r=new Set,i=[],l=s({month:e,withOutsideDays:n,consistentWeeks:o,firstDayOfWeek:a});for(let e of t)if((0,d.default)(e.end).isAfter(l.start,"day")||(0,d.default)(e.start).isBefore(l.end,"day")){if(i.push((0,v.validateEvent)(e)),r.has(e.id))throw Error(`[@mantine/schedule] MonthView: Duplicated event ids found: ${e.id}`);r.add(e.id)}return function({date:e,events:t,firstDayOfWeek:a=1,range:n}){let o={},r={},s=new Set,{weeks:i,groupedByDay:l}=function({rangeStart:e,rangeEnd:t,firstDayOfWeek:a}){let n=[],o={},r=(0,d.default)((0,h.getStartOfWeek)({date:e.format("YYYY-MM-DD"),firstDayOfWeek:a}));for(;r.isBefore(t)||r.isSame(t,"day");){let e=[];for(let t=0;t<7;t++){let t=r.format("YYYY-MM-DD 00:00:00");e.push(t),o[t]||(o[t]=[]),r=r.add(1,"day")}n.push(e)}return{weeks:n,groupedByDay:o}}({rangeStart:n?(0,d.default)(n.start):(0,d.default)(e).startOf("month"),rangeEnd:n?(0,d.default)(n.end):(0,d.default)(e).startOf("month").endOf("month"),firstDayOfWeek:a});for(let e=0;e<i.length;e++)o[e.toString()]=[],r[e.toString()]=[];for(let e of t){let t=(0,d.default)(e.start).startOf("day"),a=(0,d.default)(e.end).startOf("day"),n=a.isAfter(t);for(let c=0;c<i.length;c++){let m=i[c],u=(0,d.default)(m[0]).startOf("day"),f=(0,d.default)(m[6]).endOf("day");if((t.isBefore(f)||t.isSame(f,"day"))&&(a.isAfter(u)||a.isSame(u,"day"))){let{startDayIndex:i,daysSpanned:m,startOffset:D,width:p,hanging:v}=function({eventStart:e,eventEnd:t,weekStart:a,weekEnd:n,isMultiday:o}){let r=e,d=t,s=e.isBefore(a),i=t.isAfter(n);r.isBefore(a)&&(r=a),d.isAfter(n)&&(d=n);let l=r.diff(a,"day"),c=Math.max(1,d.diff(a,"day")-l+ +!!o);return{startDayIndex:l,daysSpanned:c,startOffset:l/7*100,width:c/7*100,hanging:s&&i?"both":s?"start":i?"end":"none"}}({eventStart:t,eventEnd:a,weekStart:u,weekEnd:f,isMultiday:n});if("background"===e.display){r[c.toString()].push({...e,position:{startOffset:D,width:p,weekIndex:c,row:0,hanging:v}});continue}let h=function({existingEvents:e,startDayIndex:t,daysSpanned:a,weekStart:n}){let o=0;for(let r of e){let e=(0,d.default)(r.start).startOf("day"),s=(e.isBefore(n)||e.isSame(n,"day")?n:e).diff(n,"day");s+(r.position?.width||0)/100*7>t&&s<t+a&&(o=Math.max(o,(r.position?.row||0)+1))}return o}({existingEvents:o[c.toString()],startDayIndex:i,daysSpanned:m,weekStart:u}),g={...e,position:{startOffset:D,width:p,weekIndex:c,row:h,hanging:v}};o[c.toString()].push(g),function({positionedEvent:e,eventStart:t,eventEnd:a,groupedByDay:n,eventsAddedToDay:o,weekIdx:r}){if(0===r||!o.has(e.id.toString())){let r=t;for(;r.isBefore(a)||r.isSame(a,"day");){let t=r.format("YYYY-MM-DD 00:00:00");n[t]&&n[t].push(e),r=r.add(1,"day")}o.add(e.id.toString())}}({positionedEvent:g,eventStart:t,eventEnd:a,groupedByDay:l,eventsAddedToDay:s,weekIdx:c})}}}return{groupedByWeek:o,groupedByDay:l,backgroundByWeek:r}}({date:e,events:i,firstDayOfWeek:a,range:l})}({date:A,events:(0,i.expandRecurringEvents)({events:ec,rangeStart:(0,d.default)(eI.start).startOf("day").toDate(),rangeEnd:(0,d.default)(eI.end).endOf("day").toDate(),expansionLimit:eb}),firstDayOfWeek:e$.getFirstDayOfWeek(z),withOutsideDays:ea,consistentWeeks:X}),e_=(0,H.useCallback)((e,t)=>{eS&&eS(e.dataTransfer,`${(0,d.default)(t).format("YYYY-MM-DD")} 00:00:00`)},[eS]),eW=(0,l.useDragDropHandlers)({enabled:eD,mode:ex,onEventDrop:ep,canDragEvent:ev,onEventDragStart:eh,onEventDragEnd:eg,calculateDropTarget:(e,t)=>(function({draggedEvent:e,targetDay:t}){let a=(0,d.default)(e.end).diff((0,d.default)(e.start),"millisecond"),n=(0,d.default)(e.start),o=(0,d.default)(t).startOf("day").hour(n.hour()).minute(n.minute()).second(n.second()).millisecond(n.millisecond()),r=o.add(a,"millisecond");return{start:o.toDate(),end:r.toDate()}})({draggedEvent:t,targetDay:e}),onExternalDrop:eS?e_:void 0}),eB=(eD||!!eS)&&"static"!==ex,eA=(0,H.useRef)([]),eP=(0,c.useSlotDragSelect)({enabled:eY&&"static"!==ex,onDragEnd:(e,t)=>{if(!ew)return;let a=eA.current[e],n=eA.current[t];a&&n&&ew((0,d.default)(a).startOf("day").format("YYYY-MM-DD HH:mm:ss"),(0,d.default)(n).endOf("day").format("YYYY-MM-DD HH:mm:ss"))}}),eR=(0,H.useRef)([]),eL=(0,n.getMonthDays)({month:(0,d.default)(A).format("YYYY-MM-DD 00:00:00"),firstDayOfWeek:e$.getFirstDayOfWeek(z),consistentWeeks:X&&ea}),eF=(()=>{for(let e=0;e<eL.length;e++){let t=eL[e];for(let a=0;a<t.length;a++){let n=t[a];if((0,o.isSameMonth)(A,n)||ea)return{weekIndex:e,dayIndex:a}}}return{weekIndex:0,dayIndex:0}})(),eG=L?(0,t.getWeekdaysNames)({locale:e$.getLocale(F),format:G,firstDayOfWeek:e$.getFirstDayOfWeek(z)}).map((e,t)=>(0,H.createElement)("div",{...eC("monthViewWeekday"),key:t},e)):null,ez="month";eA.current=eL.flat();let eU=eL.map((e,t)=>{eR.current[t]||(eR.current[t]=[]);let n=e.map((e,a)=>{let n=!(0,o.isSameMonth)(A,e),r=e$.getWeekendDays(U).includes((0,d.default)(e).day()),s=(0,d.default)(e).locale(F||e$.locale).format("MMMM D, YYYY"),i=K?.((0,d.default)(e).format("YYYY-MM-DD"))||{},l=(0,d.default)(e).isSame((0,d.default)(),"day")&&ee;if(n&&!ea)return(0,O.jsx)("div",{"data-static":!0,...eC("monthViewDay",{style:i.style})},e);let c=t===eF.weekIndex&&a===eF.dayIndex,m=eW.isDropTarget(e),u=7*t+a,f=eP.isSlotSelected(u,ez);return(0,H.createElement)(w.UnstyledButton,{"aria-label":s,...i,...eC("monthViewDay",{className:i.className,style:i.style}),key:e,ref:e=>{e&&(eR.current[t]||(eR.current[t]=[]),eR.current[t][a]=e)},"data-drag-slot-index":eY&&"static"!==ex?u:void 0,"data-drag-slot-group":eY&&"static"!==ex?ez:void 0,onClick:"static"===ex?void 0:t=>{q?.((0,d.default)(e).format("YYYY-MM-DD"),t),i.onClick?.(t)},onPointerDown:eY&&"static"!==ex?e=>eP.handleSlotPointerDown(e,u,ez):void 0,onKeyDown:e=>{(0,p.handleMonthViewKeyDown)({controlsRef:eR,weekIndex:t,dayIndex:a,event:e}),i.onKeyDown?.(e)},mod:[{outside:n,weekend:r,today:l,"drop-target":m,"drag-selected":f,static:"static"===ex},i.mod],"data-outside":n||void 0,tabIndex:"static"===ex?-1:c?0:-1,onDragOver:eB?t=>eW.handleDragOver(t,e):void 0,onDragLeave:eB?eW.handleDragLeave:void 0,onDrop:eB?t=>eW.handleDrop(t,e):void 0},(0,O.jsx)("span",{"data-today":l||void 0,...eC("monthViewDayLabel"),children:(0,d.default)(e).format("D")}))}),s=Q?.((0,d.default)(e[0]).format("YYYY-MM-DD"))||{},i=(0,a.getWeekNumber)(e),l=(eN.backgroundByWeek[t]||[]).map(e=>{let a=eT.variantColorResolver({color:e.color||eT.primaryColor,theme:eT,variant:"light",autoContrast:!0}),n="function"==typeof eu?eu(e):e.title,o={key:`bg-${e.id}-${t}`,...eC("monthViewBackgroundEvent",{style:{left:`calc(${e.position.startOffset}% + 2px)`,width:`calc(${e.position.width}% - 3px)`}}),__vars:{"--bg-event-bg":a.background,"--bg-event-color":a.color},children:n};if("function"==typeof ef)return ef(e,o);let{key:r,...d}=o;return(0,O.jsx)(y.Box,{...d},r)}),c=100/eH,m=(eN.groupedByWeek[t]||[]).filter(e=>e.position.row<eH).map(e=>{let t=eW.isDraggableEvent(e);return(0,O.jsx)(u.ScheduleEvent,{event:e,nowrap:!0,autoSize:!0,hanging:e.position.hanging,draggable:t,renderEventBody:eu,renderEvent:ef,radius:et,mode:ex,onClick:ey?t=>ey(e,t):void 0,style:{position:"absolute",top:`calc(${e.position.row*c}% + 1px)`,left:`calc(${e.position.startOffset}% + 1px)`,width:`calc(${e.position.width}% - 2px)`,height:`calc(${c}% - 2px)`}},e.id)}),D=e.map((e,t)=>{let a=eN.groupedByDay[e]||[],n=Math.max(0,a.length-eH);return n<=0?null:(0,O.jsx)(f.MoreEvents,{events:a,moreEventsCount:n,mode:ex,style:{position:"absolute",top:"calc(100% - 2px)",left:`calc(${t/7*100}% + 1px)`,width:`calc(${1/7*100}% - 1px)`,height:"22px",paddingInline:4},...em},`more-${e}`)});return(0,H.createElement)("div",{...eC("monthViewWeek"),key:t},R&&(0,O.jsx)(w.UnstyledButton,{"aria-label":`Week ${i}`,...s,onClick:"static"===ex?void 0:t=>{er?.("week"),P?.((0,r.toDateString)(e[0])),Z?.((0,d.default)(e[0]).format("YYYY-MM-DD"),t),s.onClick?.(t)},mod:{static:"static"===ex},tabIndex:"static"===ex?-1:0,...eC("monthViewWeekNumber",{className:s.className,style:s.style}),children:i},i),(0,H.createElement)("div",{...eC("monthViewEvents"),key:"week-events"},l,m,D),n)}),eJ=(0,O.jsxs)(y.Box,{mod:[{"with-week-numbers":R,"with-weekdays":L,static:"static"===ex,"slot-dragging":eP.isDragging},B],...eC("monthView"),...ek,children:[en&&(0,O.jsx)(D.ScheduleHeaderBase,{view:"month",navigationHandlers:{previous:()=>(0,r.toDateString)((0,d.default)(A).subtract(1,"month").startOf("month")),next:()=>(0,r.toDateString)((0,d.default)(A).add(1,"month").startOf("month")),today:()=>(0,r.toDateString)((0,d.default)())},control:{monthYearSelect:{locale:F,yearValue:(0,d.default)(A).get("year"),monthValue:(0,d.default)(A).get("month"),onYearChange:e=>P?.((0,r.toDateString)((0,d.default)(A).set("year",e).startOf("month"))),onMonthChange:e=>P?.((0,r.toDateString)((0,d.default)(A).set("month",e).startOf("month"))),...eo}},labels:eM,onDateChange:P,onViewChange:er,previousControlProps:ei,nextControlProps:es,todayControlProps:ed,viewSelectProps:el,stylesApiProps:{classNames:eO,styles:eV,attributes:_,__staticSelector:J,radius:et}}),(0,O.jsx)(Y.ScrollArea,{scrollbarSize:4,...eE,...eC("monthViewScrollArea",{className:eE?.className,style:eE?.style}),children:(0,O.jsxs)("div",{...eC("monthViewInner"),children:[eG&&(0,O.jsxs)("div",{...eC("monthViewWeekdays"),children:[R&&(0,O.jsx)("div",{...eC("monthViewWeekdaysCorner")}),eG]}),eU]})})]});return eD?(0,O.jsx)(m.DragContext.Provider,{value:eW.dragContextValue,children:eJ}):eJ});$.displayName="@mantine/schedule/MonthView",$.classes=g,$.varsResolver=V,e.s(["MonthView",0,$],168574)},791941,e=>{"use strict";var t=e.i(648863),a=e.i(494834);let n=(0,a.default)().format("YYYY-MM-DD"),o=(0,a.default)().startOf("month").format("YYYY-MM-DD"),r=(0,a.default)().date(15).format("YYYY-MM-DD"),d=(0,a.default)().endOf("month").format("YYYY-MM-DD"),s=[{id:1,title:"Team Meeting",start:`${o} 09:00:00`,end:`${o} 10:30:00`,color:"blue"},{id:2,title:"Project Deadline",start:`${r} 00:00:00`,end:(0,a.default)(r).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"},{id:3,title:"Client Call",start:`${n} 14:00:00`,end:`${n} 15:00:00`,color:"green"},{id:4,title:"Monthly Review",start:`${d} 00:00:00`,end:(0,a.default)(d).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"violet"},{id:5,title:"Workshop",start:(0,a.default)().add(3,"day").format("YYYY-MM-DD 10:00:00"),end:(0,a.default)().add(3,"day").format("YYYY-MM-DD 12:00:00"),color:"orange"},{id:6,title:"Conference",start:(0,a.default)().add(5,"day").format("YYYY-MM-DD 00:00:00"),end:(0,a.default)().add(6,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"cyan"}],i=[{id:1,title:"Event 1",start:`${n} 09:00:00`,end:`${n} 10:00:00`,color:"blue"},{id:2,title:"Event 2",start:`${n} 10:00:00`,end:`${n} 11:00:00`,color:"green"},{id:3,title:"Event 3",start:`${n} 11:00:00`,end:`${n} 12:00:00`,color:"orange"},{id:4,title:"Event 4",start:`${n} 13:00:00`,end:`${n} 14:00:00`,color:"violet"},{id:5,title:"Event 5",start:`${n} 14:00:00`,end:`${n} 15:00:00`,color:"cyan"},{id:6,title:"Event 6",start:`${n} 15:00:00`,end:`${n} 16:00:00`,color:"pink"}],l=`
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');
const startOfMonth = dayjs().startOf('month').format('YYYY-MM-DD');
const midMonth = dayjs().date(15).format('YYYY-MM-DD');
const endOfMonth = dayjs().endOf('month').format('YYYY-MM-DD');

export const events = [
  {
    id: 1,
    title: 'Team Meeting',
    start: \`\${startOfMonth} 09:00:00\`,
    end: \`\${startOfMonth} 10:30:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Project Deadline',
    start: \`\${midMonth} 00:00:00\`,
    end: dayjs(midMonth).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
  {
    id: 3,
    title: 'Client Call',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'green',
  },
  {
    id: 4,
    title: 'Monthly Review',
    start: \`\${endOfMonth} 00:00:00\`,
    end: dayjs(endOfMonth).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'violet',
  },
  {
    id: 5,
    title: 'Workshop',
    start: dayjs().add(3, 'day').format('YYYY-MM-DD 10:00:00'),
    end: dayjs().add(3, 'day').format('YYYY-MM-DD 12:00:00'),
    color: 'orange',
  },
  {
    id: 6,
    title: 'Conference',
    start: dayjs().add(5, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(6, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'cyan',
  },
];
`,c=`
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');

export const events = [
  {
    id: 1,
    title: 'Event 1',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 10:00:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Event 2',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:00:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Event 3',
    start: \`\${today} 11:00:00\`,
    end: \`\${today} 12:00:00\`,
    color: 'orange',
  },
  {
    id: 4,
    title: 'Event 4',
    start: \`\${today} 13:00:00\`,
    end: \`\${today} 14:00:00\`,
    color: 'violet',
  },
  {
    id: 5,
    title: 'Event 5',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'cyan',
  },
  {
    id: 6,
    title: 'Event 6',
    start: \`\${today} 15:00:00\`,
    end: \`\${today} 16:00:00\`,
    color: 'pink',
  },
];
`;var m=e.i(391398),u=e.i(168574);let f={defaultExpanded:!1,type:"code",component:function(){return(0,m.jsx)(u.MonthView,{date:new Date,events:s})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},D={defaultExpanded:!1,type:"code",component:function(){return(0,m.jsx)(u.MonthView,{date:new Date,events:s,withWeekNumbers:!0})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} withWeekNumbers />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},p={defaultExpanded:!1,type:"code",component:function(){return(0,m.jsx)(u.MonthView,{date:new Date,events:s,withWeekDays:!1})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} withWeekDays={false} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},v={defaultExpanded:!1,type:"code",component:function(){return(0,m.jsx)(u.MonthView,{date:new Date,events:s,firstDayOfWeek:0})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} firstDayOfWeek={0} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},h={defaultExpanded:!1,type:"code",component:function(){return(0,m.jsx)(u.MonthView,{date:new Date,events:s,weekdayFormat:"ddd"})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} weekdayFormat="ddd" />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var g=e.i(191788);let y={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,g.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,m.jsx)(u.MonthView,{date:e,consistentWeeks:!1,onDateChange:t})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { MonthView } from '@mantine/schedule';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  return <MonthView date={date} consistentWeeks={false} onDateChange={setDate} />;
}
`},Y={defaultExpanded:!1,type:"code",component:function(){return(0,m.jsx)(u.MonthView,{date:new Date,events:s,highlightToday:!1})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} highlightToday={false} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},w={defaultExpanded:!1,type:"code",component:function(){return(0,m.jsx)(u.MonthView,{date:new Date,events:s,withOutsideDays:!1})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} withOutsideDays={false} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},M={defaultExpanded:!1,type:"code",component:function(){return(0,m.jsx)(u.MonthView,{date:new Date,events:s,withHeader:!1})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} withHeader={false} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},x={defaultExpanded:!1,type:"code",component:function(){return(0,m.jsx)(u.MonthView,{date:new Date,events:i})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:c,language:"tsx",fileName:"data.ts"}]},E=(0,a.default)().format("YYYY-MM-DD"),S=[{id:1,title:"Team Meeting",start:`${E} 09:00:00`,end:`${E} 10:30:00`,color:"blue"},{id:2,title:"Project Deadline",start:(0,a.default)().add(5,"day").format("YYYY-MM-DD 00:00:00"),end:(0,a.default)().add(6,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"}],b={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,g.useState)(S);return(0,m.jsx)(u.MonthView,{date:new Date,events:e,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { MonthView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const initialEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Team Meeting',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 10:30:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Project Deadline',
    start: dayjs().add(5, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(6, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
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

  return <MonthView date={new Date()} events={events} withEventsDragAndDrop onEventDrop={handleEventDrop} />;
}
`};var j=e.i(19683),k=e.i(369974),H=e.i(284629);let C=(0,a.default)().startOf("month"),O=[{id:1,title:"Team Standup",start:C.add(2,"day").hour(9).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:C.add(2,"day").hour(9).minute(30).format("YYYY-MM-DD HH:mm:ss"),color:"blue",payload:{description:"Daily team sync meeting",attendees:["Alice","Bob","Charlie"],location:"Conference Room A"}},{id:2,title:"Design Workshop",start:C.add(5,"day").hour(10).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:C.add(5,"day").hour(12).minute(0).format("YYYY-MM-DD HH:mm:ss"),color:"grape",payload:{description:"Collaborative design thinking session",attendees:["Diana","Eve","Frank"],location:"Creative Space"}},{id:3,title:"Client Presentation",start:C.add(10,"day").hour(14).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:C.add(10,"day").hour(15).minute(30).format("YYYY-MM-DD HH:mm:ss"),color:"green",payload:{description:"Q4 progress presentation to client",attendees:["Grace","Henry"],location:"Zoom"}},{id:4,title:"Sprint Planning",start:C.add(15,"day").hour(10).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:C.add(15,"day").hour(12).minute(0).format("YYYY-MM-DD HH:mm:ss"),color:"orange",payload:{description:"Plan next sprint tasks and priorities",attendees:["Alice","Charlie","Bob"],location:"Dev Lab"}},{id:5,title:"Code Review",start:C.add(18,"day").hour(16).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:C.add(18,"day").hour(17).minute(0).format("YYYY-MM-DD HH:mm:ss"),color:"cyan",payload:{description:"Review pull requests from this week",attendees:["Alice","Charlie"],location:"Dev Lab"}},{id:6,title:"Tech Conference",start:C.add(22,"day").format("YYYY-MM-DD 00:00:00"),end:C.add(22,"day").format("YYYY-MM-DD 23:59:59"),color:"pink",payload:{description:"Annual tech conference",attendees:["All Team"],location:"Convention Center"}}],V={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,g.useState)(O);return(0,m.jsx)(u.MonthView,{date:new Date,events:e,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:n,newEnd:o})=>{t(t=>t.map(t=>t.id===e?{...t,start:(0,a.default)(n).format("YYYY-MM-DD HH:mm:ss"),end:(0,a.default)(o).format("YYYY-MM-DD HH:mm:ss")}:t))},renderEvent:(e,t)=>(0,m.jsxs)(k.HoverCard,{width:280,position:"right",closeDelay:0,transitionProps:{duration:0},children:[(0,m.jsx)(k.HoverCard.Target,{children:(0,m.jsx)(H.UnstyledButton,{...t})}),(0,m.jsx)(k.HoverCard.Dropdown,{children:(0,m.jsx)(j.EventDetails,{event:e})})]})})},code:[{fileName:"Demo.tsx",code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { HoverCard, UnstyledButton } from '@mantine/core';
import { MonthView, ScheduleEventData } from '@mantine/schedule';
import { EventDetails } from './EventDetails';
import { eventsData } from './events';

function Demo() {
  const [events, setEvents] = useState<ScheduleEventData[]>(eventData);

  return (
    <MonthView
      date={new Date()}
      events={selectedEvents}
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
        <HoverCard width={280} position="right" closeDelay={0} transitionProps={{ duration: 0 }}>
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
`,language:"tsx"},{fileName:"EventDetails.tsx",code:j._eventDetailsCode,language:"tsx"},{fileName:"events.ts",code:`import { ScheduleEventData } from '@mantine/schedule';

export const eventsData: ScheduleEventData[] = ${JSON.stringify(O,null,2)};`,language:"tsx"}]},T={defaultExpanded:!1,type:"code",component:function(){return(0,m.jsx)(u.MonthView,{date:new Date,events:s,mode:"static"})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} mode="static" />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var $=e.i(162077);let I={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,g.useState)(s),[n,o]=(0,g.useState)(!1),[r,d]=(0,g.useState)(null);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(u.MonthView,{date:new Date,events:e,withDragSlotSelect:!0,onDayClick:e=>{d({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),o(!0)},onSlotDragEnd:(e,t)=>{d({title:"",start:new Date(e),end:new Date(t),color:"blue"}),o(!0)},onEventClick:e=>{d({id:e.id,title:e.title,start:new Date(e.start),end:new Date(e.end),color:e.color||"blue"}),o(!0)}}),(0,m.jsx)($.EventForm,{opened:n,onClose:()=>o(!1),onExitTransitionEnd:()=>d(null),values:r,onSubmit:e=>{e.id?t(t=>t.map(t=>t.id===e.id?{...t,title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}:t)):t(t=>[...t,{id:Math.random().toString(36).substring(2,11),title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}])},onDelete:r?.id?()=>{r?.id&&t(e=>e.filter(e=>e.id!==r.id))}:void 0})]})},code:[{code:`import dayjs from 'dayjs';
import { useState } from 'react';
import { MonthView, ScheduleEventData } from '@mantine/schedule';
import { EventData, EventForm } from './_EventForm';
import { events } from './events';

function Demo() {
  const [events, setEvents] = useState<ScheduleEventData[]>(events);
  const [formOpened, setFormOpened] = useState(false);
  const [selectedEventData, setSelectedEventData] = useState<EventData | null>(null);

  const handleDayClick = (date: string) => {
    setSelectedEventData({
      title: '',
      start: dayjs(date).startOf('day').toDate(),
      end: dayjs(date).endOf('day').toDate(),
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
      setEvents((prev) => prev.filter((e) => e.id !== selectedEventData.id));
    }
  };

  return (
    <>
      <MonthView
        date={new Date()}
        events={events}
        withDragSlotSelect
        onDayClick={handleDayClick}
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
      />
    </>
  );
}`,language:"tsx",fileName:"Demo.tsx"},{code:$._eventFormCode,language:"tsx",fileName:"EventForm.tsx"},{code:l,language:"tsx",fileName:"events.ts"}]};var N=e.i(232471),_=e.i(20035),W=e.i(883364);let B=[{title:"Team Offsite",color:"teal"},{title:"Release Day",color:"orange"},{title:"All Hands",color:"violet"}],A={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,g.useState)([]),n=(0,g.useRef)(1);return(0,m.jsxs)(_.Grid,{children:[(0,m.jsxs)(_.Grid.Col,{span:{base:12,sm:3},children:[(0,m.jsx)(W.Text,{fw:500,mb:"xs",children:"Drag to schedule"}),B.map(e=>(0,m.jsx)(N.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:(0,m.jsx)(W.Text,{size:"sm",fw:500,children:e.title})},e.title))]}),(0,m.jsx)(_.Grid.Col,{span:{base:12,sm:9},children:(0,m.jsx)(u.MonthView,{date:new Date,events:e,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))},onExternalEventDrop:(e,o)=>{let r=e.getData("text/plain");if(!r)return;let d=JSON.parse(r),s=(0,a.default)(o),i=s.endOf("day");t(e=>[...e,{id:n.current++,title:d.title,start:s.format("YYYY-MM-DD HH:mm:ss"),end:i.format("YYYY-MM-DD HH:mm:ss"),color:d.color}])}})})]})},code:`
import { useRef, useState } from 'react';
import dayjs from 'dayjs';
import { Box, Grid, Text } from '@mantine/core';
import { MonthView, ScheduleEventData } from '@mantine/schedule';

const sidebarItems = [
  { title: 'Team Offsite', color: 'teal' },
  { title: 'Release Day', color: 'orange' },
  { title: 'All Hands', color: 'violet' },
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
    const end = start.endOf('day');

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
          </Box>
        ))}
      </Grid.Col>
      <Grid.Col span={{ base: 12, sm: 9 }}>
        <MonthView
          date={new Date()}
          events={events}
          withEventsDragAndDrop
          onEventDrop={handleEventDrop}
          onExternalEventDrop={handleExternalDrop}
        />
      </Grid.Col>
    </Grid>
  );
}
`},P=[{title:"Team Offsite",color:"teal"},{title:"Release Day",color:"orange"},{title:"All Hands",color:"violet"}],R={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,g.useState)(P),[n,o]=(0,g.useState)([]),[r,d]=(0,g.useState)(!1),s=(0,g.useRef)(1);return(0,m.jsxs)(_.Grid,{children:[(0,m.jsx)(_.Grid.Col,{span:{base:12,sm:3},children:(0,m.jsxs)(N.Box,{onDragOver:e=>{e.preventDefault(),e.dataTransfer.dropEffect="move",d(!0)},onDragLeave:()=>d(!1),onDrop:e=>{e.preventDefault(),d(!1);let a=e.dataTransfer.getData("application/json");if(!a)return;let{eventId:r}=JSON.parse(a),s=n.find(e=>String(e.id)===String(r));s&&(t(e=>[...e,{title:s.title,color:s.color||"blue"}]),o(e=>e.filter(e=>e.id!==s.id)))},style:{padding:8,borderRadius:8,border:r?"2px dashed var(--mantine-color-blue-5)":"2px dashed transparent",transition:"border-color 150ms"},children:[(0,m.jsx)(W.Text,{fw:500,mb:"xs",children:"Unscheduled"}),e.map(e=>(0,m.jsx)(N.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:(0,m.jsx)(W.Text,{size:"sm",fw:500,children:e.title})},e.title)),0===e.length&&(0,m.jsx)(W.Text,{size:"xs",c:"dimmed",children:"Drag events here to unschedule"})]})}),(0,m.jsx)(_.Grid.Col,{span:{base:12,sm:9},children:(0,m.jsx)(u.MonthView,{date:new Date,events:n,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:a})=>{o(n=>n.map(n=>n.id===e?{...n,start:t,end:a}:n))},onExternalEventDrop:(e,n)=>{let r=e.getData("text/plain");if(!r)return;let d=JSON.parse(r),i=(0,a.default)(n),l=i.endOf("day");o(e=>[...e,{id:s.current++,title:d.title,start:i.format("YYYY-MM-DD HH:mm:ss"),end:l.format("YYYY-MM-DD HH:mm:ss"),color:d.color}]),t(e=>e.filter(e=>e.title!==d.title))}})})]})},code:`
import { useRef, useState } from 'react';
import dayjs from 'dayjs';
import { Box, Grid, Text } from '@mantine/core';
import { MonthView, ScheduleEventData } from '@mantine/schedule';

interface SidebarItem {
  title: string;
  color: string;
}

const initialSidebarItems: SidebarItem[] = [
  { title: 'Team Offsite', color: 'teal' },
  { title: 'Release Day', color: 'orange' },
  { title: 'All Hands', color: 'violet' },
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
    const end = start.endOf('day');

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

    setSidebarItems((prev) => [
      ...prev,
      { title: event.title, color: event.color || 'blue' },
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
            </Box>
          ))}
          {sidebarItems.length === 0 && (
            <Text size="xs" c="dimmed">Drag events here to unschedule</Text>
          )}
        </Box>
      </Grid.Col>
      <Grid.Col span={{ base: 12, sm: 9 }}>
        <MonthView
          date={new Date()}
          events={events}
          withEventsDragAndDrop
          onEventDrop={handleEventDrop}
          onExternalEventDrop={handleExternalDrop}
        />
      </Grid.Col>
    </Grid>
  );
}
`},L=[{id:"monthly-planning-series",title:"Weekly planning (series)",start:"2025-11-03 10:00:00",end:"2025-11-03 11:00:00",color:"blue",recurrence:{rrule:"FREQ=WEEKLY;BYDAY=MO;COUNT=10",exdate:["2025-11-17 10:00:00"]}},{id:"monthly-planning-override",title:"Weekly planning (moved occurrence)",start:"2025-11-17 15:00:00",end:"2025-11-17 16:00:00",color:"grape",recurringEventId:"monthly-planning-series",recurrenceId:"2025-11-17 10:00:00"},{id:"month-one-off",title:"One-off product demo",start:"2025-11-20 12:00:00",end:"2025-11-20 13:00:00",color:"green"}],F={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,g.useState)("2025-11-01");return(0,m.jsx)(u.MonthView,{date:e,onDateChange:t,events:L,withWeekNumbers:!0})},code:`
import { useState } from 'react';
import { MonthView } from '@mantine/schedule';

const month = '2025-11-01';

const events = [
  {
    id: 'monthly-planning-series',
    title: 'Weekly planning (series)',
    start: '2025-11-03 10:00:00',
    end: '2025-11-03 11:00:00',
    color: 'blue',
    recurrence: {
      rrule: 'FREQ=WEEKLY;BYDAY=MO;COUNT=10',
      exdate: ['2025-11-17 10:00:00'],
    },
  },
  {
    id: 'monthly-planning-override',
    title: 'Weekly planning (moved occurrence)',
    start: '2025-11-17 15:00:00',
    end: '2025-11-17 16:00:00',
    color: 'grape',
    recurringEventId: 'monthly-planning-series',
    recurrenceId: '2025-11-17 10:00:00',
  },
];

function Demo() {
  const [date, setDate] = useState(month);

  return <MonthView date={date} onDateChange={setDate} events={events} withWeekNumbers />;
}
`},G=(0,a.default)().format("YYYY-MM-DD"),z=[{id:"company-offsite",title:"Company offsite",start:`${(0,a.default)(G).startOf("week").add(1,"day").format("YYYY-MM-DD")} 00:00:00`,end:`${(0,a.default)(G).startOf("week").add(3,"day").format("YYYY-MM-DD")} 23:59:59`,color:"blue",display:"background"},{id:"team-meeting",title:"Team meeting",start:`${G} 10:00:00`,end:`${G} 11:00:00`,color:"violet"},{id:"code-review",title:"Code review",start:`${(0,a.default)(G).add(1,"day").format("YYYY-MM-DD")} 14:00:00`,end:`${(0,a.default)(G).add(1,"day").format("YYYY-MM-DD")} 15:00:00`,color:"green"}],U={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,g.useState)(z);return(0,m.jsx)(u.MonthView,{date:new Date,events:e,withEventsDragAndDrop:!0,onEventDrop:({eventId:a,newStart:n,newEnd:o})=>{e.some(e=>"background"===e.display&&n<e.end&&o>e.start)||t(e=>e.map(e=>e.id===a?{...e,start:n,end:o}:e))}})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { MonthView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const initialEvents: ScheduleEventData[] = [
  {
    id: 'company-offsite',
    title: 'Company offsite',
    start: \`\${dayjs(today).startOf('week').add(1, 'day').format('YYYY-MM-DD')} 00:00:00\`,
    end: \`\${dayjs(today).startOf('week').add(3, 'day').format('YYYY-MM-DD')} 23:59:59\`,
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
    start: \`\${dayjs(today).add(1, 'day').format('YYYY-MM-DD')} 14:00:00\`,
    end: \`\${dayjs(today).add(1, 'day').format('YYYY-MM-DD')} 15:00:00\`,
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
    <MonthView
      date={new Date()}
      events={events}
      withEventsDragAndDrop
      onEventDrop={handleEventDrop}
    />
  );
}
`};var J=e.i(428127);let K={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,g.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,m.jsxs)("div",{children:[(0,m.jsxs)(J.ScheduleHeader,{children:[(0,m.jsx)(J.ScheduleHeader.Previous,{onClick:()=>t((0,a.default)(e).subtract(1,"month").startOf("month").format("YYYY-MM-DD"))}),(0,m.jsx)(J.ScheduleHeader.MonthYearSelect,{yearValue:(0,a.default)(e).year(),monthValue:(0,a.default)(e).month(),onYearChange:n=>t((0,a.default)(e).year(n).startOf("month").format("YYYY-MM-DD")),onMonthChange:n=>t((0,a.default)(e).month(n).startOf("month").format("YYYY-MM-DD"))}),(0,m.jsx)(J.ScheduleHeader.Next,{onClick:()=>t((0,a.default)(e).add(1,"month").startOf("month").format("YYYY-MM-DD"))}),(0,m.jsx)(J.ScheduleHeader.Today,{onClick:()=>t((0,a.default)().format("YYYY-MM-DD"))}),(0,m.jsx)(J.ScheduleHeader.Control,{style:{marginInlineStart:"auto"},onClick:()=>window.print(),children:"Print"})]}),(0,m.jsx)(u.MonthView,{date:e,onDateChange:t,events:s,withHeader:!1})]})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { DateStringValue, MonthView, ScheduleHeader } from '@mantine/schedule';
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
        <ScheduleHeader.Control
          style={{ marginInlineStart: 'auto' }}
          onClick={() => window.print()}
        >
          Print
        </ScheduleHeader.Control>
      </ScheduleHeader>

      <MonthView
        date={date}
        onDateChange={setDate}
        events={events}
        withHeader={false}
      />
    </div>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},Q=(0,a.default)().format("YYYY-MM-DD"),q=[{id:1,title:"Team Meeting",start:`${Q} 09:00:00`,end:`${Q} 10:00:00`,color:"blue"},{id:2,title:"Code Review",start:`${Q} 11:00:00`,end:`${Q} 12:00:00`,color:"green"},{id:3,title:"Design Review",start:`${Q} 13:00:00`,end:`${Q} 14:00:00`,color:"violet"},{id:4,title:"Sprint Planning",start:`${Q} 15:00:00`,end:`${Q} 16:00:00`,color:"orange"},{id:5,title:"Retrospective",start:`${Q} 16:30:00`,end:`${Q} 17:30:00`,color:"cyan"}],Z={defaultExpanded:!1,type:"code",component:function(){return(0,m.jsx)(u.MonthView,{date:new Date,events:q,maxEventsPerDay:4})},code:`
import { MonthView, ScheduleEventData } from '@mantine/schedule';

const events: ScheduleEventData[] = [
  // ... 5 events on the same day
];

function Demo() {
  return (
    <MonthView
      date={new Date()}
      events={events}
      maxEventsPerDay={4}
    />
  );
}
`};e.i(27355);let X={defaultExpanded:!1,type:"code",component:function(){return(0,m.jsx)(u.MonthView,{date:new Date,events:s,locale:"es",labels:{day:"Día",week:"Semana",month:"Mes",year:"Año",today:"Hoy",previous:"Anterior",next:"Siguiente",more:"Más",moreLabel:e=>`+${e} m\xe1s`}})},code:[{code:`
import 'dayjs/locale/es';
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <MonthView
      date={new Date()}
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
        moreLabel: (hiddenEventsCount) => \`+\${hiddenEventsCount} m\xe1s\`,
      }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},ee={defaultExpanded:!1,type:"code",component:function(){return(0,m.jsx)(u.MonthView,{date:new Date,events:s,radius:0})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} radius={0} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var et=(0,t.__exportAll)({backgroundEvents:()=>U,bidirectionalDragDrop:()=>R,consistentWeeks:()=>y,customHeader:()=>K,dragDrop:()=>b,eventForm:()=>I,externalDragDrop:()=>A,firstDayOfWeek:()=>v,highlightToday:()=>Y,localization:()=>X,manyEvents:()=>x,maxEventsPerDay:()=>Z,radius:()=>ee,recurringEvents:()=>F,renderEvent:()=>V,staticMode:()=>T,usage:()=>f,weekdayFormat:()=>h,withWeekNumbers:()=>D,withoutHeader:()=>M,withoutOutsideDays:()=>w,withoutWeekDays:()=>p});e.s(["MonthViewDemos",0,et],791941)}]);