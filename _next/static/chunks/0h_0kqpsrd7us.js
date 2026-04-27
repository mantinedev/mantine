(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,966696,428127,e=>{"use strict";var t=e.i(86473),a={header:"m_9d44fc56",navigationGroup:"m_21150122",todayControl:"m_7a42c1e5",viewSelect:"m_5998194a",compactViewSelect:"m_feecf21b"},r=e.i(191788);let n=(0,r.createContext)(void 0);function o(e){let t=(0,r.useContext)(n);return e?t?{...t,...e}:e:t}n.displayName="@mantine/schedule/ScheduleHeaderLabelsContext";var d={headerControl:"m_b366a0f3"},s=e.i(462138),i=e.i(284629),l=e.i(481178),u=e.i(275519),c=e.i(433512),m=e.i(323283),f=e.i(44091),y=e.i(391466),h=e.i(391398);let Y={__staticSelector:"HeaderControl",interactive:!0},D=(0,l.createVarsResolver)((e,{radius:t})=>({headerControl:{"--control-radius":void 0===t?void 0:(0,c.getRadius)(t)}})),w=(0,u.factory)(e=>{let t=(0,f.useProps)("HeaderControl",Y,e),{classNames:a,className:r,style:n,styles:o,unstyled:s,vars:l,__staticSelector:u,mod:c,attributes:m,active:w,square:v,radius:p,interactive:M,labels:x,...g}=t;return(0,h.jsx)(i.UnstyledButton,{...(0,y.useStyles)({name:u,classes:d,props:t,className:r,style:n,classNames:a,styles:o,unstyled:s,attributes:m,vars:l,varsResolver:D,rootSelector:"headerControl"})("headerControl",{active:M}),mod:[{active:w,square:v,interactive:M},c],tabIndex:M?void 0:-1,...g})});function v(e){let{dir:a}=(0,m.useDirection)();return(0,h.jsx)(w,{"data-type":"next","aria-label":(0,t.getLabel)("next",o(e.labels)),square:!0,...e,children:(0,h.jsx)(s.AccordionChevron,{style:{transform:`rotate(${"rtl"===a?90:-90}deg)`}})})}function p(e){let{dir:a}=(0,m.useDirection)();return(0,h.jsx)(w,{"data-type":"previous","aria-label":(0,t.getLabel)("previous",o(e.labels)),square:!0,...e,children:(0,h.jsx)(s.AccordionChevron,{style:{transform:`rotate(${"rtl"===a?-90:90}deg)`}})})}function M(e){let a=o(e.labels);return(0,h.jsx)(w,{"data-type":"today","aria-label":(0,t.getLabel)("today",a),...e,children:(0,t.getLabel)("today",a)})}w.displayName="@mantine/schedule/HeaderControl",w.classes=d,w.varsResolver=D,v.displayName="@mantine/schedule/ScheduleHeaderNext",p.displayName="@mantine/schedule/ScheduleHeaderPrevious",M.displayName="@mantine/schedule/ScheduleHeaderToday";var x=e.i(27748),g=e.i(494834),S={monthYearSelectTarget:"m_9d235876",monthYearSelectList:"m_673e0cc3",monthYearSelectDropdown:"m_e24605b6",monthYearSelectLabel:"m_807fa76f",monthYearSelectControl:"m_9baf5b18"},k=e.i(392862),b=e.i(654486),V=e.i(541772),j=e.i(205693);let _={__staticSelector:"MonthYearSelect",withMonths:!0},C=(0,l.createVarsResolver)((e,{radius:t})=>({monthYearSelectDropdown:{"--control-radius":void 0===t?void 0:(0,c.getRadius)(t)}})),H=(0,u.factory)(e=>{let a=(0,f.useProps)("MonthYearSelect",_,e),{__staticSelector:r,classNames:n,className:d,style:s,styles:l,unstyled:u,vars:c,attributes:m,popoverProps:Y,startYear:D,endYear:v,onYearChange:p,onMonthChange:M,locale:H,monthsListFormat:I,monthValue:N,yearValue:O,labelFormat:L,radius:W,getMonthControlProps:$,getYearControlProps:E,withMonths:T,id:A,labels:R,...P}=a,F=(0,y.useStyles)({name:r,classes:S,props:a,className:d,style:s,classNames:n,styles:l,unstyled:u,attributes:m,vars:c,varsResolver:C,rootSelector:"monthYearSelectTarget"}),[B,K]=(0,V.useDisclosure)(!1),U=o(R),z=new Date,q=(0,j.useDatesContext)(),G=D??z.getFullYear()-5,Q=v??z.getFullYear()+5,J=void 0!==O&&O>=G&&O<=Q,X=(function({startYear:e,endYear:t}){let a=[];for(let r=e;r<=t;r++)a.push(r);return a})({startYear:G,endYear:Q}).map((e,a)=>{let r=E?.(e);return(0,h.jsx)(i.UnstyledButton,{onClick:()=>{p?.(e),T||K.close()},mod:{type:"year",active:e===O},"aria-label":`${(0,t.getLabel)("selectYear",U)} ${e}`,tabIndex:J?e===O?0:-1:0===a?0:-1,...r,onKeyDown:(0,b.createScopedKeydownHandler)({siblingSelector:'[data-type="year"]:not(:disabled)',parentSelector:"[data-list]",activateOnFocus:!1,loop:!0,orientation:"vertical",onKeyDown:r?.onKeyDown}),...F("monthYearSelectControl",{className:r?.className,style:r?.style}),children:e},e)}),Z=T?(function({locale:e,format:t}){let a=[],r=(0,g.default)().locale(e).startOf("year");for(let n=0;n<12;n++)a.push({month:n,name:(0,x.formatDate)({date:r.add(n,"month"),format:t,locale:e})});return a})({locale:q.getLocale(H),format:I||"MMMM"}).map(e=>{let a=$?.(e.month);return(0,h.jsx)(i.UnstyledButton,{onClick:()=>M?.(e.month),mod:{type:"month",active:e.month===N},tabIndex:e.month===N?0:-1,onKeyDown:(0,b.createScopedKeydownHandler)({siblingSelector:'[data-type="month"]:not(:disabled)',parentSelector:"[data-list]",activateOnFocus:!1,loop:!0,orientation:"vertical",onKeyDown:a?.onKeyDown}),...a,...F("monthYearSelectControl",{className:a?.className,style:a?.style}),"aria-label":`${(0,t.getLabel)("selectMonth",U)} ${e.name}`,children:e.name},e.name)}):null;return(0,h.jsxs)(k.Popover,{position:"bottom-start",__staticSelector:r,trapFocus:!0,transitionProps:{transition:"pop",duration:120},radius:W||"var(--schedule-radius, var(--mantine-radius-default))",shadow:"md",offset:3,width:T?void 0:"target",opened:B,onChange:K.set,id:A,...Y,children:[(0,h.jsx)(k.Popover.Target,{children:(0,h.jsx)(w,{...F("monthYearSelectTarget"),__staticSelector:r,radius:W,"data-with-months":T||void 0,onClick:K.toggle,...P,children:(0,x.formatDate)({locale:q.getLocale(H),date:new Date(O??z.getFullYear(),N??z.getMonth()),format:L||(T?"MMMM YYYY":"YYYY")})})}),(0,h.jsxs)(k.Popover.Dropdown,{"data-with-months":T||void 0,...F("monthYearSelectDropdown"),children:[T&&(0,h.jsxs)("div",{"data-list":!0,...F("monthYearSelectList"),children:[(0,h.jsx)("div",{...F("monthYearSelectLabel"),children:(0,t.getLabel)("month",U)}),Z]}),(0,h.jsxs)("div",{"data-list":!0,...F("monthYearSelectList"),children:[T&&(0,h.jsx)("div",{...F("monthYearSelectLabel"),children:(0,t.getLabel)("year",U)}),X]})]})]})});H.displayName="@mantine/schedule/MonthYearSelect",H.classes=S,H.varsResolver=C;var I={viewSelect:"m_e106e12d"},N=e.i(232471),O=e.i(62904);let L={__staticSelector:"ViewSelect",views:["day","week","month","year"]},W=(0,u.factory)(e=>{let a=(0,f.useProps)("ViewSelect",L,e),{classNames:n,className:d,style:s,styles:i,unstyled:l,vars:u,attributes:c,value:Y,onChange:D,views:v,__staticSelector:p,radius:M,labels:x,...g}=a,S=(0,y.useStyles)({name:p,classes:I,props:a,className:d,style:s,classNames:n,styles:i,unstyled:l,attributes:c,vars:u,rootSelector:"viewSelect"}),k=o(x),{resolvedClassNames:b,resolvedStyles:V}=(0,O.useResolvedStylesApi)({classNames:n,styles:i,props:a}),{dir:j}=(0,m.useDirection)(),_=(0,r.useRef)([]),C=(0,r.useRef)(!1);(0,r.useEffect)(()=>{if(C.current&&document.activeElement===document.body){let e=v.findIndex(e=>e===Y);-1!==e&&_.current[e]?.focus()}C.current=!1},[]);let H={day:"switchToDayView",week:"switchToWeekView",month:"switchToMonthView",year:"switchToYearView"},W=v.map((e,a)=>{let r=Y===e;return(0,h.jsx)(w,{ref:e=>{_.current[a]=e},"data-type":e,active:r,onClick:()=>D?.(e),onKeyDown:e=>((e,t)=>{let a="rtl"===j;if(e.key===(a?"ArrowLeft":"ArrowRight")){e.preventDefault();let a=t<v.length-1?t+1:0;_.current[a]?.focus()}else if(e.key===(a?"ArrowRight":"ArrowLeft")){e.preventDefault();let a=t>0?t-1:v.length-1;_.current[a]?.focus()}else"Home"===e.key?(e.preventDefault(),_.current[0]?.focus()):"End"===e.key?(e.preventDefault(),_.current[v.length-1]?.focus()):("Enter"===e.key||" "===e.key)&&(C.current=!0)})(e,a),classNames:b,styles:V,__staticSelector:p,radius:M,role:"tab","aria-label":(0,t.getLabel)(H[e],k),"aria-selected":r,tabIndex:r?0:-1,children:(0,t.getLabel)(e,k)},e)});return(0,h.jsx)(N.Box,{...S("viewSelect"),role:"tablist","aria-label":(0,t.getLabel)("viewSelectLabel",k),...g,children:W})});W.displayName="@mantine/schedule/ViewSelect",W.classes=I;let $={__staticSelector:"ScheduleHeader"},E=(0,l.createVarsResolver)(()=>({scheduleHeader:{"--test":"test"}})),T=(0,u.factory)(e=>{let t=(0,f.useProps)("ScheduleHeader",$,e),{classNames:r,className:o,style:d,styles:s,unstyled:i,vars:l,attributes:u,__staticSelector:c,labels:m,...Y}=t,D=(0,y.useStyles)({name:c,classes:a,props:t,className:o,style:d,classNames:r,styles:s,unstyled:i,vars:l,varsResolver:E,attributes:u,rootSelector:"header"});return(0,h.jsx)(n.Provider,{value:m,children:(0,h.jsx)(N.Box,{...D("header"),...Y})})});T.displayName="@mantine/schedule/ScheduleHeader",T.classes=a,T.varsResolver=E,T.Control=w,T.Next=v,T.Previous=p,T.Today=M,T.ViewSelect=W,T.MonthYearSelect=H,e.s(["ScheduleHeader",0,T],428127);var A=e.i(856171);let R=["day","week","month","year"];e.s(["ScheduleHeaderBase",0,function({view:e,navigationHandlers:r,control:n,labels:o,onDateChange:d,onViewChange:s,previousControlProps:i,nextControlProps:l,todayControlProps:u,viewSelectProps:c,stylesApiProps:m}){let f=n.monthYearSelect?(0,h.jsx)(T.MonthYearSelect,{...m,labels:o,...n.monthYearSelect}):(0,h.jsx)(T.Control,{...m,interactive:!1,miw:n.miw,children:n.title}),y=(c?.views||R).map(e=>({value:e,label:(0,t.getLabel)(e,o)}));return(0,h.jsxs)(T,{...m,labels:o,children:[(0,h.jsxs)("div",{className:a.navigationGroup,children:[(0,h.jsx)(T.Previous,{...m,onClick:()=>d?.(r.previous()),labels:o,...i}),f,(0,h.jsx)(T.Next,{...m,onClick:()=>d?.(r.next()),labels:o,...l})]}),(0,h.jsx)("div",{className:a.todayControl,children:(0,h.jsx)(T.Today,{...m,onClick:()=>d?.(r.today()),labels:o,...u})}),(0,h.jsx)(A.NativeSelect,{className:a.compactViewSelect,data:y,value:e,onChange:e=>s?.(e.currentTarget.value),"aria-label":(0,t.getLabel)("viewSelectLabel",o),size:"sm"}),(0,h.jsx)("div",{className:a.viewSelect,style:{marginInlineStart:"auto"},children:(0,h.jsx)(T.ViewSelect,{value:e,onChange:s,labels:o,...m,...c})})]})}],966696)},898770,e=>{"use strict";var t=e.i(494834);e.s(["isMultidayEvent",0,function(e){let a=(0,t.default)(e.start).startOf("day"),r=(0,t.default)(e.end);return(0===r.hour()&&0===r.minute()&&0===r.second()?r.startOf("day").subtract(1,"day"):r.startOf("day")).isAfter(a)}])},27355,(e,t,a)=>{e.e,t.exports=function(e){"use strict";var t={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(e){return e+"º"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(t,null,!0),t}(e.r(494834))},441058,e=>{"use strict";var t=e.i(494834);e.s(["getStartOfWeek",0,function({date:e,firstDayOfWeek:a=1}){let r=(0,t.default)(e);for(;r.day()!==a;)r=r.subtract(1,"day");return r.format("YYYY-MM-DD")}])},855578,e=>{"use strict";var t=e.i(494834),a=e.i(604363);t.default.extend(a.default),e.s(["getWeekNumber",0,function(e){return Array.isArray(e)?(0,t.default)(e.find(e=>1===(0,t.default)(e).day())).isoWeek():(0,t.default)(e).isoWeek()}])},605520,753381,e=>{"use strict";var t=e.i(441058),a=e.i(494834);e.s(["getMonthDays",0,function({month:e,firstDayOfWeek:r=1,consistentWeeks:n}){let o=(0,a.default)((0,a.default)(e).subtract((0,a.default)(e).date()-1,"day").format("YYYY-MM-DD")),d=o.format("YYYY-MM-DD"),s=function(e,t=1){let r=(0,a.default)(e);if(!r.isValid())return r;let n=0===t?6:t-1;for(;r.day()!==n;)r=r.add(1,"day");return r.format("YYYY-MM-DD")}(o.add(o.daysInMonth()-1,"day").format("YYYY-MM-DD"),r),i=[],l=(0,a.default)((0,t.getStartOfWeek)({date:d,firstDayOfWeek:r}));for(;(0,a.default)(l).isBefore(s,"day");){let e=[];for(let t=0;t<7;t+=1)e.push(l.format("YYYY-MM-DD 00:00:00")),l=l.add(1,"day");i.push(e)}if(n&&i.length<6){let e=i[i.length-1],t=e[e.length-1],r=(0,a.default)(t).add(1,"day");for(;i.length<6;){let e=[];for(let t=0;t<7;t+=1)e.push(r.format("YYYY-MM-DD 00:00:00")),r=r.add(1,"day");i.push(e)}}return i}],605520),e.s(["isSameMonth",0,function(e,t){return(0,a.default)(e).format("YYYY-MM")===(0,a.default)(t).format("YYYY-MM")}],753381)},621304,e=>{"use strict";var t=e.i(27748),a=e.i(494834);e.s(["getWeekdaysNames",0,function({locale:e,format:r="dd",firstDayOfWeek:n=1}){let o=(0,a.default)().day(n),d=[];for(let a=0;a<7;a+=1)d.push((0,t.formatDate)({locale:e,date:o.add(a,"days"),format:r}));return d}])},122308,e=>{"use strict";var t=e.i(605520),a=e.i(753381),r=e.i(494834),n=e.i(4332),o=e.i(657068),d=e.i(966696),s=e.i(298008),i=e.i(898770),l=e.i(27748),u=e.i(621304),c=e.i(855578),m=e.i(232471),f=e.i(284629),y=e.i(317477),h=e.i(951254),Y=e.i(191788),D=e.i(205693),w=e.i(391398);function v({month:e,getStyles:n,monthLabelFormat:o="MMMM",withWeekNumbers:d,withWeekDays:s,locale:i,firstDayOfWeek:p,weekdayFormat:M,weekendDays:x,getDayProps:g,onDayClick:S,onWeekNumberClick:k,onMonthClick:b,getWeekNumberProps:V,highlightToday:j,groupedEvents:_,mode:C,withOutsideDays:H,__getDayRef:I,__onDayKeyDown:N,firstDayIndex:O}){let L=(0,D.useDatesContext)(),W=(0,h.useMantineTheme)(),$=(0,r.default)(),E=s?(0,u.getWeekdaysNames)({locale:L.getLocale(i),format:M,firstDayOfWeek:L.getFirstDayOfWeek(p)}).map((e,t)=>(0,Y.createElement)("div",{...n("yearViewWeekday"),key:t},e)):null,T=(0,t.getMonthDays)({month:(0,r.default)(e).format("YYYY-MM-DD"),firstDayOfWeek:L.getFirstDayOfWeek(p),consistentWeeks:!0}).map((t,o)=>{let s=t.map((t,d)=>{let s=!(0,a.isSameMonth)(t,e);if(s&&!H)return(0,Y.createElement)("div",{...n("yearViewDay"),"data-day-placeholder":!0,key:t});let l=L.getWeekendDays(x).includes((0,r.default)(t).day()),u=(0,r.default)(t).locale(i||L.locale).format("MMMM D, YYYY"),c=g?.((0,r.default)(t).format("YYYY-MM-DD"))||{},m=(0,r.default)(t).isSame($,"day")&&j,h=_?.[(0,r.default)(t).format("YYYY-MM-DD")]||[],D=O&&o===O.weekIndex&&d===O.dayIndex,v="static"!==C&&!s&&D,p=h.slice(0,3).map(e=>(0,Y.createElement)("div",{...n("yearViewDayIndicator",{style:{backgroundColor:(0,y.getThemeColor)(e.color,W)}}),key:e.id}));return(0,Y.createElement)(f.UnstyledButton,{"aria-label":u,...c,...n("yearViewDay",{className:c.className,style:c.style}),key:t,mod:[{outside:s,weekend:l,today:m,static:"static"===C},c.mod],tabIndex:v?0:-1,ref:e=>{e&&I?.(o,d,e)},onKeyDown:e=>{c.onKeyDown?.(e),N?.(e,{weekIndex:o,dayIndex:d,date:t})},onClick:"static"===C?void 0:e=>{S?.((0,r.default)(t).format("YYYY-MM-DD"),e),c.onClick?.(e)}},(0,r.default)(t).format("D"),(0,w.jsx)("div",{...n("yearViewDayIndicators"),children:p}))}),l=V?.((0,r.default)(t[0]).format("YYYY-MM-DD"))||{},u=(0,c.getWeekNumber)(t);return(0,Y.createElement)("div",{...n("yearViewWeek"),key:o},d&&(0,w.jsx)(f.UnstyledButton,{"aria-label":`Week ${u}`,title:`Week ${u}`,...l,onClick:"static"===C?void 0:e=>{k?.((0,r.default)(t[0]).format("YYYY-MM-DD"),e),l.onClick?.(e)},mod:{static:"static"===C},tabIndex:"static"===C?-1:0,...n("yearViewWeekNumber",{className:l.className,style:l.style}),children:u},u),s)});return(0,w.jsxs)(m.Box,{mod:[{"with-week-numbers":d,"with-weekdays":s,static:"static"===C}],...n("yearViewMonth"),children:[(0,w.jsx)(f.UnstyledButton,{onClick:"static"===C?void 0:t=>b?.((0,r.default)(e).startOf("month").format("YYYY-MM-DD"),t),mod:{static:"static"===C},tabIndex:"static"===C?-1:0,...n("yearViewMonthCaption"),children:(0,l.formatDate)({locale:L.getLocale(i),date:e,format:o})}),E&&(0,w.jsxs)("div",{...n("yearViewWeekdays"),children:[d&&(0,w.jsx)("div",{...n("yearViewWeekdaysCorner")}),E]}),T]})}var p={yearView:"m_7301354d",yearViewMonths:"m_8b7a61a0",yearViewMonth:"m_3e4e4533",yearViewWeekdays:"m_845972b8",yearViewWeek:"m_f9c4dae1",yearViewWeekNumber:"m_af51358a",yearViewWeekday:"m_e33cb11b",yearViewWeekdaysCorner:"m_221ce72d",yearViewDay:"m_399ab70f",yearViewMonthCaption:"m_950e3d33",yearViewDayIndicators:"m_98250b3",yearViewDayIndicator:"m_10d2a7c0"},M=e.i(481178),x=e.i(275519),g=e.i(433512),S=e.i(44091),k=e.i(62904),b=e.i(391466);let V={__staticSelector:"YearView",monthLabelFormat:"MMMM",withWeekDays:!0,highlightToday:!0,withHeader:!0,withOutsideDays:!0,mode:"default"},j=(0,M.createVarsResolver)((e,{radius:t})=>({yearView:{"--year-view-radius":void 0!==t?(0,g.getRadius)(t):void 0}})),_=(0,x.factory)(e=>{let l=(0,S.useProps)("YearView",V,e),{date:u,onDateChange:c,events:f,monthLabelFormat:y,withWeekNumbers:h,withWeekDays:M,locale:x,firstDayOfWeek:g,weekdayFormat:_,weekendDays:C,onMonthClick:H,onDayClick:I,onWeekNumberClick:N,getDayProps:O,getWeekNumberProps:L,highlightToday:W,labels:$,withOutsideDays:E,withHeader:T,monthYearSelectProps:A,onViewChange:R,previousControlProps:P,nextControlProps:F,todayControlProps:B,viewSelectProps:K,__staticSelector:U,classNames:z,className:q,style:G,styles:Q,unstyled:J,vars:X,attributes:Z,radius:ee,mode:et,recurrenceExpansionLimit:ea,...er}=l,en=(0,D.useDatesContext)(),eo=(0,b.useStyles)({name:U,classes:p,props:l,className:q,style:G,classNames:z,styles:Q,unstyled:J,vars:X,varsResolver:j,attributes:Z,rootSelector:"yearView"}),{resolvedClassNames:ed,resolvedStyles:es}=(0,k.useResolvedStylesApi)({classNames:z,styles:Q,props:l}),ei=function({date:e,events:t}){let a={};if(void 0===t)return a;let n=new Set;for(let o of t)if((0,r.default)(o.start).isSame((0,r.default)(e),"year")){if(!function(e,t){if((0,i.isMultidayEvent)(e)){let a=(0,r.default)(e.start).startOf("day"),n=(0,r.default)(e.end).startOf("day");for(let r=a;r.isBefore(n)||r.isSame(n);r=r.add(1,"day")){let a=r.format("YYYY-MM-DD");t[a]||(t[a]=[]),t[a].push(e)}return}let a=(0,r.default)(e.start).format("YYYY-MM-DD");t[a]||(t[a]=[]),t[a].push(e)}((0,s.validateEvent)(o),a),n.has(o.id))throw Error(`[@mantine/schedule] YearView: Duplicated event ids found: ${o.id}`);n.add(o.id)}return a}({date:u,events:(0,o.expandRecurringEvents)({events:f,rangeStart:(0,r.default)(u).startOf("year").toDate(),rangeEnd:(0,r.default)(u).endOf("year").toDate(),expansionLimit:ea})}),el=(0,Y.useRef)([]),eu=0,ec=(function(e){let t=(0,r.default)(e).startOf("year").toDate(),a=[[],[],[],[]],n=0;for(let e=0;e<4;e+=1)for(let o=0;o<3;o+=1)a[e].push((0,r.default)(t).add(n,"months").format("YYYY-MM-DD")),n+=1;return a})((0,r.default)(u).format("YYYY-MM-DD")).flat().map(e=>{let n=eu;return eu++,(0,w.jsx)(v,{month:e,getStyles:eo,monthLabelFormat:y,withWeekNumbers:h,withWeekDays:M,locale:x,firstDayOfWeek:g,weekdayFormat:_||(e=>(0,r.default)(e).locale(en.getLocale(x)).format("dd").slice(0,1)),weekendDays:C,getDayProps:O,getWeekNumberProps:L,onMonthClick:H,onDayClick:I,onWeekNumberClick:N,highlightToday:W,groupedEvents:ei,mode:et,withOutsideDays:E,firstDayIndex:(e=>{let n=(0,t.getMonthDays)({month:(0,r.default)(e).format("YYYY-MM-DD"),firstDayOfWeek:en.getFirstDayOfWeek(g),consistentWeeks:!0});for(let t=0;t<n.length;t++){let r=n[t];for(let n=0;n<r.length;n++){let o=r[n];if((0,a.isSameMonth)(o,e))return{weekIndex:t,dayIndex:n}}}})(e),__getDayRef:(e,t,a)=>{Array.isArray(el.current[n])||(el.current[n]=[]),Array.isArray(el.current[n][e])||(el.current[n][e]=[]),el.current[n][e][t]=a},__onDayKeyDown:(e,t)=>{!function({controlsRef:e,monthIndex:t,weekIndex:a,dayIndex:r,event:n}){let o=function(e){switch(e){case"ArrowDown":return"down";case"ArrowUp":return"up";case"ArrowRight":return"right";case"ArrowLeft":return"left";default:return null}}(n.key);if(o){n.preventDefault();let d=e.current?e.current.map(e=>e?e.map(e=>e?e.length:0):[]):null;if(!d)return;!function e({controlsRef:t,direction:a,monthIndex:r,weekIndex:n,dayIndex:o,size:d}){let s=function({direction:e,monthIndex:t,weekIndex:a,dayIndex:r,size:n}){let o=n[t];if(!o)return null;switch(e){case"up":{if(0===a){if(0===t)return null;let e=n[t-1];if(!e||0===e.length)return null;let a=e.length-1,o=Math.min(r,e[a]-1);return{monthIndex:t-1,weekIndex:a,dayIndex:o}}let e=Math.min(r,o[a-1]-1);return{monthIndex:t,weekIndex:a-1,dayIndex:e}}case"down":{if(a===o.length-1){if(t===n.length-1)return null;let e=n[t+1];if(!e||0===e.length)return null;return{monthIndex:t+1,weekIndex:0,dayIndex:Math.min(r,e[0]-1)}}let e=Math.min(r,o[a+1]-1);return{monthIndex:t,weekIndex:a+1,dayIndex:e}}case"left":if(0===r){if(0===a){if(0===t)return null;let e=n[t-1];if(!e||0===e.length)return null;let a=e.length-1;return{monthIndex:t-1,weekIndex:a,dayIndex:e[a]-1}}return{monthIndex:t,weekIndex:a-1,dayIndex:o[a-1]-1}}return{monthIndex:t,weekIndex:a,dayIndex:r-1};case"right":if(r===o[a]-1){if(a===o.length-1){if(t===n.length-1)return null;let e=n[t+1];if(!e||0===e.length)return null;return{monthIndex:t+1,weekIndex:0,dayIndex:0}}return{monthIndex:t,weekIndex:a+1,dayIndex:0}}return{monthIndex:t,weekIndex:a,dayIndex:r+1};default:return null}}({direction:a,monthIndex:r,weekIndex:n,dayIndex:o,size:d});if(!s)return;let i=t.current?.[s.monthIndex]?.[s.weekIndex]?.[s.dayIndex];i&&(i.disabled||i.getAttribute("data-hidden")||i.getAttribute("data-outside")||i.getAttribute("data-day-placeholder")?e({controlsRef:t,direction:a,monthIndex:s.monthIndex,weekIndex:s.weekIndex,dayIndex:s.dayIndex,size:d}):i.focus())}({controlsRef:e,direction:o,monthIndex:t,weekIndex:a,dayIndex:r,size:d})}}({controlsRef:el,monthIndex:n,weekIndex:t.weekIndex,dayIndex:t.dayIndex,event:e})}},e)});return(0,w.jsxs)(m.Box,{...eo("yearView"),mod:{static:"static"===et},...er,children:[T&&(0,w.jsx)(d.ScheduleHeaderBase,{view:"year",navigationHandlers:{previous:()=>(0,n.toDateString)((0,r.default)(u).subtract(1,"year").startOf("year")),next:()=>(0,n.toDateString)((0,r.default)(u).add(1,"year").startOf("year")),today:()=>(0,n.toDateString)((0,r.default)())},control:{monthYearSelect:{locale:x,withMonths:!1,yearValue:(0,r.default)(u).get("year"),monthValue:(0,r.default)(u).get("month"),onYearChange:e=>c?.((0,n.toDateString)((0,r.default)(u).set("year",e).startOf("year"))),...A}},labels:$,onDateChange:c,onViewChange:R,previousControlProps:P,nextControlProps:F,todayControlProps:B,viewSelectProps:K,stylesApiProps:{classNames:ed,styles:es,attributes:Z,__staticSelector:U,radius:ee}}),(0,w.jsx)("div",{...eo("yearViewMonths"),children:ec})]})});_.displayName="@mantine/schedule/YearView",_.classes=p,_.varsResolver=j,e.s(["YearView",0,_],122308)},408169,e=>{"use strict";var t=e.i(648863),a=e.i(494834);let r=(0,a.default)().format("YYYY"),n=[{id:1,title:"New Year",start:`${r}-01-01 00:00:00`,end:(0,a.default)(`${r}-01-01`).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"blue"},{id:2,title:"Spring Event",start:`${r}-03-15 00:00:00`,end:(0,a.default)(`${r}-03-15`).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"green"},{id:3,title:"Summer Conference",start:`${r}-07-20 00:00:00`,end:(0,a.default)(`${r}-07-20`).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"orange"},{id:4,title:"Fall Workshop",start:`${r}-10-10 00:00:00`,end:(0,a.default)(`${r}-10-10`).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"violet"},{id:5,title:"Year End Party",start:`${r}-12-25 00:00:00`,end:(0,a.default)(`${r}-12-25`).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"}],o=`
import dayjs from 'dayjs';

const thisYear = dayjs().format('YYYY');

const events = [
  {
    id: 1,
    title: 'New Year',
    start: \\\`\\\${thisYear}-01-01 00:00:00\\\`,
    end: dayjs(\\\`\\\${thisYear}-01-01\\\`).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'blue',
  },
  {
    id: 2,
    title: 'Spring Event',
    start: \\\`\\\${thisYear}-03-15 00:00:00\\\`,
    end: dayjs(\\\`\\\${thisYear}-03-15\\\`).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'green',
  },
];
`;var d=e.i(191788),s=e.i(391398),i=e.i(122308);let l={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,s.jsx)(i.YearView,{date:e,onDateChange:t,events:n})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <YearView
      date={date}
      onDateChange={setDate}
      events={events}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},u={defaultExpanded:!1,type:"code",component:function(){return(0,s.jsx)(i.YearView,{date:new Date,events:n,withWeekNumbers:!0})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} withWeekNumbers />;
}
`},c={defaultExpanded:!1,type:"code",component:function(){return(0,s.jsx)(i.YearView,{date:new Date,events:n,withWeekDays:!1})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} withWeekDays={false} />;
}
`},m={defaultExpanded:!1,type:"code",component:function(){return(0,s.jsx)(i.YearView,{date:new Date,events:n,withOutsideDays:!1})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} withOutsideDays={false} />;
}
`},f={defaultExpanded:!1,type:"code",component:function(){return(0,s.jsx)(i.YearView,{date:new Date,events:n,firstDayOfWeek:0})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} firstDayOfWeek={0} />;
}
`},y={defaultExpanded:!1,type:"code",component:function(){return(0,s.jsx)(i.YearView,{date:new Date,events:n,weekdayFormat:"dd"})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} weekdayFormat="dd" />;
}
`},h={defaultExpanded:!1,type:"code",component:function(){return(0,s.jsx)(i.YearView,{date:new Date,events:n,highlightToday:!1})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} highlightToday={false} />;
}
`},Y={defaultExpanded:!1,type:"code",component:function(){return(0,s.jsx)(i.YearView,{date:new Date,events:n,withHeader:!1})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} withHeader={false} />;
}
`},D={defaultExpanded:!1,type:"code",component:function(){return(0,s.jsx)(i.YearView,{date:new Date,events:n,mode:"static"})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} mode="static" />;
}
`},w=(0,a.default)().year(),v=[{id:"yearly-series",title:"Monthly architecture review (series)",start:`${w}-01-10 09:00:00`,end:`${w}-01-10 10:00:00`,color:"blue",recurrence:{rrule:"FREQ=MONTHLY;COUNT=12",exdate:[`${w}-11-10 09:00:00`]}},{id:"yearly-series-override",title:"Monthly architecture review (moved in Nov)",start:`${w}-11-10 13:00:00`,end:`${w}-11-10 14:00:00`,color:"grape",recurringEventId:"yearly-series",recurrenceId:`${w}-11-10 09:00:00`},{id:"year-one-off",title:"One-off summit",start:`${w}-12-01 00:00:00`,end:`${w}-12-02 00:00:00`,color:"green"}],p={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)(`${w}-01-01`);return(0,s.jsx)(i.YearView,{date:e,onDateChange:t,events:v,withWeekNumbers:!0})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { YearView } from '@mantine/schedule';

const year = dayjs().year();

const events = [
  {
    id: 'yearly-series',
    title: 'Monthly architecture review (series)',
    start: \`\${year}-01-10 09:00:00\`,
    end: \`\${year}-01-10 10:00:00\`,
    color: 'blue',
    recurrence: {
      rrule: 'FREQ=MONTHLY;COUNT=12',
      exdate: [\`\${year}-11-10 09:00:00\`],
    },
  },
  {
    id: 'yearly-series-override',
    title: 'Monthly architecture review (moved in Nov)',
    start: \`\${year}-11-10 13:00:00\`,
    end: \`\${year}-11-10 14:00:00\`,
    color: 'grape',
    recurringEventId: 'yearly-series',
    recurrenceId: \`\${year}-11-10 09:00:00\`,
  },
];

function Demo() {
  const [date, setDate] = useState(\`\${year}-01-01\`);
  return <YearView date={date} onDateChange={setDate} events={events} withWeekNumbers />;
}
`};var M=e.i(428127);let x={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,s.jsxs)("div",{children:[(0,s.jsxs)(M.ScheduleHeader,{children:[(0,s.jsx)(M.ScheduleHeader.Previous,{onClick:()=>t((0,a.default)(e).subtract(1,"year").startOf("year").format("YYYY-MM-DD"))}),(0,s.jsx)(M.ScheduleHeader.MonthYearSelect,{withMonths:!1,yearValue:(0,a.default)(e).year(),monthValue:(0,a.default)(e).month(),onYearChange:r=>t((0,a.default)(e).year(r).startOf("year").format("YYYY-MM-DD"))}),(0,s.jsx)(M.ScheduleHeader.Next,{onClick:()=>t((0,a.default)(e).add(1,"year").startOf("year").format("YYYY-MM-DD"))}),(0,s.jsx)(M.ScheduleHeader.Today,{onClick:()=>t((0,a.default)().format("YYYY-MM-DD"))}),(0,s.jsx)(M.ScheduleHeader.Control,{style:{marginInlineStart:"auto"},onClick:()=>window.print(),children:"Print"})]}),(0,s.jsx)(i.YearView,{date:e,onDateChange:t,events:n,withHeader:!1})]})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { DateStringValue, ScheduleHeader, YearView } from '@mantine/schedule';
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
                .subtract(1, 'year')
                .startOf('year')
                .format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.MonthYearSelect
          withMonths={false}
          yearValue={dayjs(date).year()}
          monthValue={dayjs(date).month()}
          onYearChange={(year) =>
            setDate(
              dayjs(date)
                .year(year)
                .startOf('year')
                .format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.Next
          onClick={() =>
            setDate(
              dayjs(date)
                .add(1, 'year')
                .startOf('year')
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

      <YearView
        date={date}
        onDateChange={setDate}
        events={events}
        withHeader={false}
      />
    </div>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]};e.i(27355);let g={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,s.jsx)(i.YearView,{date:e,onDateChange:t,events:n,locale:"es",labels:{day:"Día",week:"Semana",month:"Mes",year:"Año",today:"Hoy",previous:"Anterior",next:"Siguiente"}})},code:[{code:`
import 'dayjs/locale/es';
import dayjs from 'dayjs';
import { useState } from 'react';
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <YearView
      date={date}
      onDateChange={setDate}
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
      }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]};var S=(0,t.__exportAll)({customHeader:()=>x,firstDayOfWeek:()=>f,highlightToday:()=>h,localization:()=>g,recurringEvents:()=>p,staticMode:()=>D,usage:()=>l,weekdayFormat:()=>y,withOutsideDays:()=>m,withWeekNumbers:()=>u,withoutHeader:()=>Y,withoutWeekDays:()=>c});e.s(["YearViewDemos",0,S],408169)}]);