(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,966696,428127,e=>{"use strict";var t=e.i(86473),a={header:"m_9d44fc56",navigationGroup:"m_21150122",todayControl:"m_7a42c1e5",viewSelect:"m_5998194a",compactViewSelect:"m_feecf21b"},r=e.i(191788);let n=(0,r.createContext)(void 0);function o(e){let t=(0,r.useContext)(n);return e?t?{...t,...e}:e:t}n.displayName="@mantine/schedule/ScheduleHeaderLabelsContext";var d={headerControl:"m_b366a0f3"},i=e.i(462138),s=e.i(284629),l=e.i(481178),c=e.i(275519),u=e.i(433512),m=e.i(323283),f=e.i(44091),y=e.i(391466),h=e.i(391398);let Y={__staticSelector:"HeaderControl",interactive:!0},D=(0,l.createVarsResolver)((e,{radius:t})=>({headerControl:{"--control-radius":void 0===t?void 0:(0,u.getRadius)(t)}})),w=(0,c.factory)(e=>{let t=(0,f.useProps)("HeaderControl",Y,e),{classNames:a,className:r,style:n,styles:o,unstyled:i,vars:l,__staticSelector:c,mod:u,attributes:m,active:w,square:v,radius:p,interactive:x,labels:g,...M}=t;return(0,h.jsx)(s.UnstyledButton,{...(0,y.useStyles)({name:c,classes:d,props:t,className:r,style:n,classNames:a,styles:o,unstyled:i,attributes:m,vars:l,varsResolver:D,rootSelector:"headerControl"})("headerControl",{active:x}),mod:[{active:w,square:v,interactive:x},u],tabIndex:x?void 0:-1,...M})});function v(e){let{dir:a}=(0,m.useDirection)();return(0,h.jsx)(w,{"data-type":"next","aria-label":(0,t.getLabel)("next",o(e.labels)),square:!0,...e,children:(0,h.jsx)(i.AccordionChevron,{style:{transform:`rotate(${"rtl"===a?90:-90}deg)`}})})}function p(e){let{dir:a}=(0,m.useDirection)();return(0,h.jsx)(w,{"data-type":"previous","aria-label":(0,t.getLabel)("previous",o(e.labels)),square:!0,...e,children:(0,h.jsx)(i.AccordionChevron,{style:{transform:`rotate(${"rtl"===a?-90:90}deg)`}})})}function x(e){let a=o(e.labels);return(0,h.jsx)(w,{"data-type":"today","aria-label":(0,t.getLabel)("today",a),...e,children:(0,t.getLabel)("today",a)})}w.displayName="@mantine/schedule/HeaderControl",w.classes=d,w.varsResolver=D,v.displayName="@mantine/schedule/ScheduleHeaderNext",p.displayName="@mantine/schedule/ScheduleHeaderPrevious",x.displayName="@mantine/schedule/ScheduleHeaderToday";var g=e.i(27748),M=e.i(494834),S={monthYearSelectTarget:"m_9d235876",monthYearSelectList:"m_673e0cc3",monthYearSelectDropdown:"m_e24605b6",monthYearSelectLabel:"m_807fa76f",monthYearSelectControl:"m_9baf5b18"},k=e.i(392862),V=e.i(654486),b=e.i(541772),j=e.i(205693);let C={__staticSelector:"MonthYearSelect",withMonths:!0},I=(0,l.createVarsResolver)((e,{radius:t})=>({monthYearSelectDropdown:{"--control-radius":void 0===t?void 0:(0,u.getRadius)(t)}})),H=(0,c.factory)(e=>{let a=(0,f.useProps)("MonthYearSelect",C,e),{__staticSelector:r,classNames:n,className:d,style:i,styles:l,unstyled:c,vars:u,attributes:m,popoverProps:Y,startYear:D,endYear:v,onYearChange:p,onMonthChange:x,locale:H,monthsListFormat:N,monthValue:O,yearValue:W,labelFormat:_,radius:$,getMonthControlProps:E,getYearControlProps:L,withMonths:A,id:R,labels:T,...P}=a,F=(0,y.useStyles)({name:r,classes:S,props:a,className:d,style:i,classNames:n,styles:l,unstyled:c,attributes:m,vars:u,varsResolver:I,rootSelector:"monthYearSelectTarget"}),[B,K]=(0,b.useDisclosure)(!1),U=o(T),q=new Date,z=(0,j.useDatesContext)(),G=D??q.getFullYear()-5,Q=v??q.getFullYear()+5,J=void 0!==W&&W>=G&&W<=Q,X=(function({startYear:e,endYear:t}){let a=[];for(let r=e;r<=t;r++)a.push(r);return a})({startYear:G,endYear:Q}).map((e,a)=>{let r=L?.(e);return(0,h.jsx)(s.UnstyledButton,{onClick:()=>{p?.(e),A||K.close()},mod:{type:"year",active:e===W},"aria-label":`${(0,t.getLabel)("selectYear",U)} ${e}`,tabIndex:J?e===W?0:-1:0===a?0:-1,...r,onKeyDown:(0,V.createScopedKeydownHandler)({siblingSelector:'[data-type="year"]:not(:disabled)',parentSelector:"[data-list]",activateOnFocus:!1,loop:!0,orientation:"vertical",onKeyDown:r?.onKeyDown}),...F("monthYearSelectControl",{className:r?.className,style:r?.style}),children:e},e)}),Z=A?(function({locale:e,format:t}){let a=[],r=(0,M.default)().locale(e).startOf("year");for(let n=0;n<12;n++)a.push({month:n,name:(0,g.formatDate)({date:r.add(n,"month"),format:t,locale:e})});return a})({locale:z.getLocale(H),format:N||"MMMM"}).map(e=>{let a=E?.(e.month);return(0,h.jsx)(s.UnstyledButton,{onClick:()=>x?.(e.month),mod:{type:"month",active:e.month===O},tabIndex:e.month===O?0:-1,onKeyDown:(0,V.createScopedKeydownHandler)({siblingSelector:'[data-type="month"]:not(:disabled)',parentSelector:"[data-list]",activateOnFocus:!1,loop:!0,orientation:"vertical",onKeyDown:a?.onKeyDown}),...a,...F("monthYearSelectControl",{className:a?.className,style:a?.style}),"aria-label":`${(0,t.getLabel)("selectMonth",U)} ${e.name}`,children:e.name},e.name)}):null;return(0,h.jsxs)(k.Popover,{position:"bottom-start",__staticSelector:r,trapFocus:!0,transitionProps:{transition:"pop",duration:120},radius:$||"var(--schedule-radius, var(--mantine-radius-default))",shadow:"md",offset:3,width:A?void 0:"target",opened:B,onChange:K.set,id:R,...Y,children:[(0,h.jsx)(k.Popover.Target,{children:(0,h.jsx)(w,{...F("monthYearSelectTarget"),__staticSelector:r,radius:$,"data-with-months":A||void 0,onClick:K.toggle,...P,children:(0,g.formatDate)({locale:z.getLocale(H),date:new Date(W??q.getFullYear(),O??q.getMonth()),format:_||(A?"MMMM YYYY":"YYYY")})})}),(0,h.jsxs)(k.Popover.Dropdown,{"data-with-months":A||void 0,...F("monthYearSelectDropdown"),children:[A&&(0,h.jsxs)("div",{"data-list":!0,...F("monthYearSelectList"),children:[(0,h.jsx)("div",{...F("monthYearSelectLabel"),children:(0,t.getLabel)("month",U)}),Z]}),(0,h.jsxs)("div",{"data-list":!0,...F("monthYearSelectList"),children:[A&&(0,h.jsx)("div",{...F("monthYearSelectLabel"),children:(0,t.getLabel)("year",U)}),X]})]})]})});H.displayName="@mantine/schedule/MonthYearSelect",H.classes=S,H.varsResolver=I;var N={viewSelect:"m_e106e12d"},O=e.i(232471),W=e.i(62904);let _={__staticSelector:"ViewSelect",views:["day","week","month","year"]},$=(0,c.factory)(e=>{let a=(0,f.useProps)("ViewSelect",_,e),{classNames:n,className:d,style:i,styles:s,unstyled:l,vars:c,attributes:u,value:Y,onChange:D,views:v,__staticSelector:p,radius:x,labels:g,...M}=a,S=(0,y.useStyles)({name:p,classes:N,props:a,className:d,style:i,classNames:n,styles:s,unstyled:l,attributes:u,vars:c,rootSelector:"viewSelect"}),k=o(g),{resolvedClassNames:V,resolvedStyles:b}=(0,W.useResolvedStylesApi)({classNames:n,styles:s,props:a}),{dir:j}=(0,m.useDirection)(),C=(0,r.useRef)([]),I=(0,r.useRef)(!1);(0,r.useEffect)(()=>{if(I.current&&document.activeElement===document.body){let e=v.findIndex(e=>e===Y);-1!==e&&C.current[e]?.focus()}I.current=!1},[]);let H={day:"switchToDayView",week:"switchToWeekView",month:"switchToMonthView",year:"switchToYearView"},$=v.map((e,a)=>{let r=Y===e;return(0,h.jsx)(w,{ref:e=>{C.current[a]=e},"data-type":e,active:r,onClick:()=>D?.(e),onKeyDown:e=>((e,t)=>{let a="rtl"===j;if(e.key===(a?"ArrowLeft":"ArrowRight")){e.preventDefault();let a=t<v.length-1?t+1:0;C.current[a]?.focus()}else if(e.key===(a?"ArrowRight":"ArrowLeft")){e.preventDefault();let a=t>0?t-1:v.length-1;C.current[a]?.focus()}else"Home"===e.key?(e.preventDefault(),C.current[0]?.focus()):"End"===e.key?(e.preventDefault(),C.current[v.length-1]?.focus()):("Enter"===e.key||" "===e.key)&&(I.current=!0)})(e,a),classNames:V,styles:b,__staticSelector:p,radius:x,role:"tab","aria-label":(0,t.getLabel)(H[e],k),"aria-selected":r,tabIndex:r?0:-1,children:(0,t.getLabel)(e,k)},e)});return(0,h.jsx)(O.Box,{...S("viewSelect"),role:"tablist","aria-label":(0,t.getLabel)("viewSelectLabel",k),...M,children:$})});$.displayName="@mantine/schedule/ViewSelect",$.classes=N;let E={__staticSelector:"ScheduleHeader"},L=(0,l.createVarsResolver)(()=>({scheduleHeader:{"--test":"test"}})),A=(0,c.factory)(e=>{let t=(0,f.useProps)("ScheduleHeader",E,e),{classNames:r,className:o,style:d,styles:i,unstyled:s,vars:l,attributes:c,__staticSelector:u,labels:m,...Y}=t,D=(0,y.useStyles)({name:u,classes:a,props:t,className:o,style:d,classNames:r,styles:i,unstyled:s,vars:l,varsResolver:L,attributes:c,rootSelector:"header"});return(0,h.jsx)(n.Provider,{value:m,children:(0,h.jsx)(O.Box,{...D("header"),...Y})})});A.displayName="@mantine/schedule/ScheduleHeader",A.classes=a,A.varsResolver=L,A.Control=w,A.Next=v,A.Previous=p,A.Today=x,A.ViewSelect=$,A.MonthYearSelect=H,e.s(["ScheduleHeader",0,A],428127);var R=e.i(856171);let T=["day","week","month","year"];e.s(["ScheduleHeaderBase",0,function({view:e,navigationHandlers:r,control:n,labels:o,onDateChange:d,onViewChange:i,previousControlProps:s,nextControlProps:l,todayControlProps:c,viewSelectProps:u,stylesApiProps:m}){let f=n.monthYearSelect?(0,h.jsx)(A.MonthYearSelect,{...m,labels:o,...n.monthYearSelect}):(0,h.jsx)(A.Control,{...m,interactive:!1,miw:n.miw,children:n.title}),y=(u?.views||T).map(e=>({value:e,label:(0,t.getLabel)(e,o)}));return(0,h.jsxs)(A,{...m,labels:o,children:[(0,h.jsxs)("div",{className:a.navigationGroup,children:[(0,h.jsx)(A.Previous,{...m,onClick:()=>d?.(r.previous()),labels:o,...s}),f,(0,h.jsx)(A.Next,{...m,onClick:()=>d?.(r.next()),labels:o,...l})]}),(0,h.jsx)("div",{className:a.todayControl,children:(0,h.jsx)(A.Today,{...m,onClick:()=>d?.(r.today()),labels:o,...c})}),(0,h.jsx)(R.NativeSelect,{className:a.compactViewSelect,data:y,value:e,onChange:e=>i?.(e.currentTarget.value),"aria-label":(0,t.getLabel)("viewSelectLabel",o),size:"sm"}),(0,h.jsx)("div",{className:a.viewSelect,style:{marginInlineStart:"auto"},children:(0,h.jsx)(A.ViewSelect,{value:e,onChange:i,labels:o,...m,...u})})]})}],966696)},441058,e=>{"use strict";var t=e.i(494834);e.s(["getStartOfWeek",0,function({date:e,firstDayOfWeek:a=1}){let r=(0,t.default)(e);for(;r.day()!==a;)r=r.subtract(1,"day");return r.format("YYYY-MM-DD")}])},855578,e=>{"use strict";var t=e.i(494834),a=e.i(604363);t.default.extend(a.default),e.s(["getWeekNumber",0,function(e){return Array.isArray(e)?(0,t.default)(e.find(e=>1===(0,t.default)(e).day())).isoWeek():(0,t.default)(e).isoWeek()}])},605520,753381,e=>{"use strict";var t=e.i(441058),a=e.i(494834);e.s(["getMonthDays",0,function({month:e,firstDayOfWeek:r=1,consistentWeeks:n}){let o=(0,a.default)((0,a.default)(e).subtract((0,a.default)(e).date()-1,"day").format("YYYY-MM-DD")),d=o.format("YYYY-MM-DD"),i=function(e,t=1){let r=(0,a.default)(e);if(!r.isValid())return r;let n=0===t?6:t-1;for(;r.day()!==n;)r=r.add(1,"day");return r.format("YYYY-MM-DD")}(o.add(o.daysInMonth()-1,"day").format("YYYY-MM-DD"),r),s=[],l=(0,a.default)((0,t.getStartOfWeek)({date:d,firstDayOfWeek:r}));for(;(0,a.default)(l).isBefore(i,"day");){let e=[];for(let t=0;t<7;t+=1)e.push(l.format("YYYY-MM-DD 00:00:00")),l=l.add(1,"day");s.push(e)}if(n&&s.length<6){let e=s[s.length-1],t=e[e.length-1],r=(0,a.default)(t).add(1,"day");for(;s.length<6;){let e=[];for(let t=0;t<7;t+=1)e.push(r.format("YYYY-MM-DD 00:00:00")),r=r.add(1,"day");s.push(e)}}return s}],605520),e.s(["isSameMonth",0,function(e,t){return(0,a.default)(e).format("YYYY-MM")===(0,a.default)(t).format("YYYY-MM")}],753381)},621304,e=>{"use strict";var t=e.i(27748),a=e.i(494834);e.s(["getWeekdaysNames",0,function({locale:e,format:r="dd",firstDayOfWeek:n=1}){let o=(0,a.default)().day(n),d=[];for(let a=0;a<7;a+=1)d.push((0,t.formatDate)({locale:e,date:o.add(a,"days"),format:r}));return d}])},122308,e=>{"use strict";var t=e.i(605520),a=e.i(753381),r=e.i(494834),n=e.i(4332),o=e.i(657068),d=e.i(966696),i=e.i(298008),s=e.i(898770),l=e.i(27748),c=e.i(621304),u=e.i(855578),m=e.i(232471),f=e.i(284629),y=e.i(317477),h=e.i(951254),Y=e.i(191788),D=e.i(205693),w=e.i(391398);function v({month:e,getStyles:n,monthLabelFormat:o="MMMM",withWeekNumbers:d,withWeekDays:i,locale:s,firstDayOfWeek:p,weekdayFormat:x,weekendDays:g,getDayProps:M,onDayClick:S,onWeekNumberClick:k,onMonthClick:V,getWeekNumberProps:b,highlightToday:j,groupedEvents:C,mode:I,withOutsideDays:H,__getDayRef:N,__onDayKeyDown:O,firstDayIndex:W}){let _=(0,D.useDatesContext)(),$=(0,h.useMantineTheme)(),E=(0,r.default)(),L=i?(0,c.getWeekdaysNames)({locale:_.getLocale(s),format:x,firstDayOfWeek:_.getFirstDayOfWeek(p)}).map((e,t)=>(0,Y.createElement)("div",{...n("yearViewWeekday"),key:t},e)):null,A=(0,t.getMonthDays)({month:(0,r.default)(e).format("YYYY-MM-DD"),firstDayOfWeek:_.getFirstDayOfWeek(p),consistentWeeks:!0}).map((t,o)=>{let i=t.map((t,d)=>{let i=!(0,a.isSameMonth)(t,e);if(i&&!H)return(0,Y.createElement)("div",{...n("yearViewDay"),"data-day-placeholder":!0,key:t});let l=_.getWeekendDays(g).includes((0,r.default)(t).day()),c=(0,r.default)(t).locale(s||_.locale).format("MMMM D, YYYY"),u=M?.((0,r.default)(t).format("YYYY-MM-DD"))||{},m=(0,r.default)(t).isSame(E,"day")&&j,h=C?.[(0,r.default)(t).format("YYYY-MM-DD")]||[],D=W&&o===W.weekIndex&&d===W.dayIndex,v="static"!==I&&!i&&D,p=h.slice(0,3).map(e=>(0,Y.createElement)("div",{...n("yearViewDayIndicator",{style:{backgroundColor:(0,y.getThemeColor)(e.color,$)}}),key:e.id}));return(0,Y.createElement)(f.UnstyledButton,{"aria-label":c,...u,...n("yearViewDay",{className:u.className,style:u.style}),key:t,mod:[{outside:i,weekend:l,today:m,static:"static"===I},u.mod],tabIndex:v?0:-1,ref:e=>{e&&N?.(o,d,e)},onKeyDown:e=>{u.onKeyDown?.(e),O?.(e,{weekIndex:o,dayIndex:d,date:t})},onClick:"static"===I?void 0:e=>{S?.((0,r.default)(t).format("YYYY-MM-DD"),e),u.onClick?.(e)}},(0,r.default)(t).format("D"),(0,w.jsx)("div",{...n("yearViewDayIndicators"),children:p}))}),l=b?.((0,r.default)(t[0]).format("YYYY-MM-DD"))||{},c=(0,u.getWeekNumber)(t);return(0,Y.createElement)("div",{...n("yearViewWeek"),key:o},d&&(0,w.jsx)(f.UnstyledButton,{"aria-label":`Week ${c}`,title:`Week ${c}`,...l,onClick:"static"===I?void 0:e=>{k?.((0,r.default)(t[0]).format("YYYY-MM-DD"),e),l.onClick?.(e)},mod:{static:"static"===I},tabIndex:"static"===I?-1:0,...n("yearViewWeekNumber",{className:l.className,style:l.style}),children:c},c),i)});return(0,w.jsxs)(m.Box,{mod:[{"with-week-numbers":d,"with-weekdays":i,static:"static"===I}],...n("yearViewMonth"),children:[(0,w.jsx)(f.UnstyledButton,{onClick:"static"===I?void 0:t=>V?.((0,r.default)(e).startOf("month").format("YYYY-MM-DD"),t),mod:{static:"static"===I},tabIndex:"static"===I?-1:0,...n("yearViewMonthCaption"),children:(0,l.formatDate)({locale:_.getLocale(s),date:e,format:o})}),L&&(0,w.jsxs)("div",{...n("yearViewWeekdays"),children:[d&&(0,w.jsx)("div",{...n("yearViewWeekdaysCorner")}),L]}),A]})}var p={yearView:"m_7301354d",yearViewMonths:"m_8b7a61a0",yearViewMonth:"m_3e4e4533",yearViewWeekdays:"m_845972b8",yearViewWeek:"m_f9c4dae1",yearViewWeekNumber:"m_af51358a",yearViewWeekday:"m_e33cb11b",yearViewWeekdaysCorner:"m_221ce72d",yearViewDay:"m_399ab70f",yearViewMonthCaption:"m_950e3d33",yearViewDayIndicators:"m_98250b3",yearViewDayIndicator:"m_10d2a7c0"},x=e.i(481178),g=e.i(275519),M=e.i(433512),S=e.i(44091),k=e.i(62904),V=e.i(391466);let b={__staticSelector:"YearView",monthLabelFormat:"MMMM",withWeekDays:!0,highlightToday:!0,withHeader:!0,withOutsideDays:!0,mode:"default"},j=(0,x.createVarsResolver)((e,{radius:t})=>({yearView:{"--year-view-radius":void 0!==t?(0,M.getRadius)(t):void 0}})),C=(0,g.factory)(e=>{let l=(0,S.useProps)("YearView",b,e),{date:c,onDateChange:u,events:f,monthLabelFormat:y,withWeekNumbers:h,withWeekDays:x,locale:g,firstDayOfWeek:M,weekdayFormat:C,weekendDays:I,onMonthClick:H,onDayClick:N,onWeekNumberClick:O,getDayProps:W,getWeekNumberProps:_,highlightToday:$,labels:E,withOutsideDays:L,withHeader:A,monthYearSelectProps:R,onViewChange:T,previousControlProps:P,nextControlProps:F,todayControlProps:B,viewSelectProps:K,__staticSelector:U,classNames:q,className:z,style:G,styles:Q,unstyled:J,vars:X,attributes:Z,radius:ee,mode:et,recurrenceExpansionLimit:ea,...er}=l,en=(0,D.useDatesContext)(),eo=(0,V.useStyles)({name:U,classes:p,props:l,className:z,style:G,classNames:q,styles:Q,unstyled:J,vars:X,varsResolver:j,attributes:Z,rootSelector:"yearView"}),{resolvedClassNames:ed,resolvedStyles:ei}=(0,k.useResolvedStylesApi)({classNames:q,styles:Q,props:l}),es=function({date:e,events:t}){let a={};if(void 0===t)return a;let n=new Set;for(let o of t)if((0,r.default)(o.start).isSame((0,r.default)(e),"year")){if(!function(e,t){if((0,s.isMultidayEvent)(e)){let a=(0,r.default)(e.start).startOf("day"),n=(0,r.default)(e.end).startOf("day");for(let r=a;r.isBefore(n)||r.isSame(n);r=r.add(1,"day")){let a=r.format("YYYY-MM-DD");t[a]||(t[a]=[]),t[a].push(e)}return}let a=(0,r.default)(e.start).format("YYYY-MM-DD");t[a]||(t[a]=[]),t[a].push(e)}((0,i.validateEvent)(o),a),n.has(o.id))throw Error(`[@mantine/schedule] YearView: Duplicated event ids found: ${o.id}`);n.add(o.id)}return a}({date:c,events:(0,o.expandRecurringEvents)({events:f,rangeStart:(0,r.default)(c).startOf("year").toDate(),rangeEnd:(0,r.default)(c).endOf("year").toDate(),expansionLimit:ea})}),el=(0,Y.useRef)([]),ec=0,eu=(function(e){let t=(0,r.default)(e).startOf("year").toDate(),a=[[],[],[],[]],n=0;for(let e=0;e<4;e+=1)for(let o=0;o<3;o+=1)a[e].push((0,r.default)(t).add(n,"months").format("YYYY-MM-DD")),n+=1;return a})((0,r.default)(c).format("YYYY-MM-DD")).flat().map(e=>{let n=ec;return ec++,(0,w.jsx)(v,{month:e,getStyles:eo,monthLabelFormat:y,withWeekNumbers:h,withWeekDays:x,locale:g,firstDayOfWeek:M,weekdayFormat:C||(e=>(0,r.default)(e).locale(en.getLocale(g)).format("dd").slice(0,1)),weekendDays:I,getDayProps:W,getWeekNumberProps:_,onMonthClick:H,onDayClick:N,onWeekNumberClick:O,highlightToday:$,groupedEvents:es,mode:et,withOutsideDays:L,firstDayIndex:(e=>{let n=(0,t.getMonthDays)({month:(0,r.default)(e).format("YYYY-MM-DD"),firstDayOfWeek:en.getFirstDayOfWeek(M),consistentWeeks:!0});for(let t=0;t<n.length;t++){let r=n[t];for(let n=0;n<r.length;n++){let o=r[n];if((0,a.isSameMonth)(o,e))return{weekIndex:t,dayIndex:n}}}})(e),__getDayRef:(e,t,a)=>{Array.isArray(el.current[n])||(el.current[n]=[]),Array.isArray(el.current[n][e])||(el.current[n][e]=[]),el.current[n][e][t]=a},__onDayKeyDown:(e,t)=>{!function({controlsRef:e,monthIndex:t,weekIndex:a,dayIndex:r,event:n}){let o=function(e){switch(e){case"ArrowDown":return"down";case"ArrowUp":return"up";case"ArrowRight":return"right";case"ArrowLeft":return"left";default:return null}}(n.key);if(o){n.preventDefault();let d=e.current?e.current.map(e=>e?e.map(e=>e?e.length:0):[]):null;if(!d)return;!function e({controlsRef:t,direction:a,monthIndex:r,weekIndex:n,dayIndex:o,size:d}){let i=function({direction:e,monthIndex:t,weekIndex:a,dayIndex:r,size:n}){let o=n[t];if(!o)return null;switch(e){case"up":{if(0===a){if(0===t)return null;let e=n[t-1];if(!e||0===e.length)return null;let a=e.length-1,o=Math.min(r,e[a]-1);return{monthIndex:t-1,weekIndex:a,dayIndex:o}}let e=Math.min(r,o[a-1]-1);return{monthIndex:t,weekIndex:a-1,dayIndex:e}}case"down":{if(a===o.length-1){if(t===n.length-1)return null;let e=n[t+1];if(!e||0===e.length)return null;return{monthIndex:t+1,weekIndex:0,dayIndex:Math.min(r,e[0]-1)}}let e=Math.min(r,o[a+1]-1);return{monthIndex:t,weekIndex:a+1,dayIndex:e}}case"left":if(0===r){if(0===a){if(0===t)return null;let e=n[t-1];if(!e||0===e.length)return null;let a=e.length-1;return{monthIndex:t-1,weekIndex:a,dayIndex:e[a]-1}}return{monthIndex:t,weekIndex:a-1,dayIndex:o[a-1]-1}}return{monthIndex:t,weekIndex:a,dayIndex:r-1};case"right":if(r===o[a]-1){if(a===o.length-1){if(t===n.length-1)return null;let e=n[t+1];if(!e||0===e.length)return null;return{monthIndex:t+1,weekIndex:0,dayIndex:0}}return{monthIndex:t,weekIndex:a+1,dayIndex:0}}return{monthIndex:t,weekIndex:a,dayIndex:r+1};default:return null}}({direction:a,monthIndex:r,weekIndex:n,dayIndex:o,size:d});if(!i)return;let s=t.current?.[i.monthIndex]?.[i.weekIndex]?.[i.dayIndex];s&&(s.disabled||s.getAttribute("data-hidden")||s.getAttribute("data-outside")||s.getAttribute("data-day-placeholder")?e({controlsRef:t,direction:a,monthIndex:i.monthIndex,weekIndex:i.weekIndex,dayIndex:i.dayIndex,size:d}):s.focus())}({controlsRef:e,direction:o,monthIndex:t,weekIndex:a,dayIndex:r,size:d})}}({controlsRef:el,monthIndex:n,weekIndex:t.weekIndex,dayIndex:t.dayIndex,event:e})}},e)});return(0,w.jsxs)(m.Box,{...eo("yearView"),mod:{static:"static"===et},...er,children:[A&&(0,w.jsx)(d.ScheduleHeaderBase,{view:"year",navigationHandlers:{previous:()=>(0,n.toDateString)((0,r.default)(c).subtract(1,"year").startOf("year")),next:()=>(0,n.toDateString)((0,r.default)(c).add(1,"year").startOf("year")),today:()=>(0,n.toDateString)((0,r.default)())},control:{monthYearSelect:{locale:g,withMonths:!1,yearValue:(0,r.default)(c).get("year"),monthValue:(0,r.default)(c).get("month"),onYearChange:e=>u?.((0,n.toDateString)((0,r.default)(c).set("year",e).startOf("year"))),...R}},labels:E,onDateChange:u,onViewChange:T,previousControlProps:P,nextControlProps:F,todayControlProps:B,viewSelectProps:K,stylesApiProps:{classNames:ed,styles:ei,attributes:Z,__staticSelector:U,radius:ee}}),(0,w.jsx)("div",{...eo("yearViewMonths"),children:eu})]})});C.displayName="@mantine/schedule/YearView",C.classes=p,C.varsResolver=j,e.s(["YearView",0,C],122308)},408169,e=>{"use strict";var t=e.i(648863),a=e.i(494834);let r=(0,a.default)().format("YYYY"),n=[{id:1,title:"New Year",start:`${r}-01-01 00:00:00`,end:(0,a.default)(`${r}-01-01`).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"blue"},{id:2,title:"Spring Event",start:`${r}-03-15 00:00:00`,end:(0,a.default)(`${r}-03-15`).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"green"},{id:3,title:"Summer Conference",start:`${r}-07-20 00:00:00`,end:(0,a.default)(`${r}-07-20`).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"orange"},{id:4,title:"Fall Workshop",start:`${r}-10-10 00:00:00`,end:(0,a.default)(`${r}-10-10`).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"violet"},{id:5,title:"Year End Party",start:`${r}-12-25 00:00:00`,end:(0,a.default)(`${r}-12-25`).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"}],o=`
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
`;var d=e.i(191788),i=e.i(391398),s=e.i(122308);let l={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,i.jsx)(s.YearView,{date:e,onDateChange:t,events:n})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]},c={defaultExpanded:!1,type:"code",component:function(){return(0,i.jsx)(s.YearView,{date:new Date,events:n,withWeekNumbers:!0})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} withWeekNumbers />;
}
`},u={defaultExpanded:!1,type:"code",component:function(){return(0,i.jsx)(s.YearView,{date:new Date,events:n,withWeekDays:!1})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} withWeekDays={false} />;
}
`},m={defaultExpanded:!1,type:"code",component:function(){return(0,i.jsx)(s.YearView,{date:new Date,events:n,withOutsideDays:!1})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} withOutsideDays={false} />;
}
`},f={defaultExpanded:!1,type:"code",component:function(){return(0,i.jsx)(s.YearView,{date:new Date,events:n,firstDayOfWeek:0})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} firstDayOfWeek={0} />;
}
`},y={defaultExpanded:!1,type:"code",component:function(){return(0,i.jsx)(s.YearView,{date:new Date,events:n,weekdayFormat:"dd"})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} weekdayFormat="dd" />;
}
`},h={defaultExpanded:!1,type:"code",component:function(){return(0,i.jsx)(s.YearView,{date:new Date,events:n,highlightToday:!1})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} highlightToday={false} />;
}
`},Y={defaultExpanded:!1,type:"code",component:function(){return(0,i.jsx)(s.YearView,{date:new Date,events:n,withHeader:!1})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} withHeader={false} />;
}
`},D={defaultExpanded:!1,type:"code",component:function(){return(0,i.jsx)(s.YearView,{date:new Date,events:n,mode:"static"})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} mode="static" />;
}
`},w=(0,a.default)().year(),v=[{id:"yearly-series",title:"Monthly architecture review (series)",start:`${w}-01-10 09:00:00`,end:`${w}-01-10 10:00:00`,color:"blue",recurrence:{rrule:"FREQ=MONTHLY;COUNT=12",exdate:[`${w}-11-10 09:00:00`]}},{id:"yearly-series-override",title:"Monthly architecture review (moved in Nov)",start:`${w}-11-10 13:00:00`,end:`${w}-11-10 14:00:00`,color:"grape",recurringEventId:"yearly-series",recurrenceId:`${w}-11-10 09:00:00`},{id:"year-one-off",title:"One-off summit",start:`${w}-12-01 00:00:00`,end:`${w}-12-02 00:00:00`,color:"green"}],p={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)(`${w}-01-01`);return(0,i.jsx)(s.YearView,{date:e,onDateChange:t,events:v,withWeekNumbers:!0})},code:`
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
`};var x=e.i(428127);let g={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,i.jsxs)("div",{children:[(0,i.jsxs)(x.ScheduleHeader,{children:[(0,i.jsx)(x.ScheduleHeader.Previous,{onClick:()=>t((0,a.default)(e).subtract(1,"year").startOf("year").format("YYYY-MM-DD"))}),(0,i.jsx)(x.ScheduleHeader.MonthYearSelect,{withMonths:!1,yearValue:(0,a.default)(e).year(),monthValue:(0,a.default)(e).month(),onYearChange:r=>t((0,a.default)(e).year(r).startOf("year").format("YYYY-MM-DD"))}),(0,i.jsx)(x.ScheduleHeader.Next,{onClick:()=>t((0,a.default)(e).add(1,"year").startOf("year").format("YYYY-MM-DD"))}),(0,i.jsx)(x.ScheduleHeader.Today,{onClick:()=>t((0,a.default)().format("YYYY-MM-DD"))}),(0,i.jsx)(x.ScheduleHeader.Control,{style:{marginInlineStart:"auto"},onClick:()=>window.print(),children:"Print"})]}),(0,i.jsx)(s.YearView,{date:e,onDateChange:t,events:n,withHeader:!1})]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]};e.i(27355);let M={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,i.jsx)(s.YearView,{date:e,onDateChange:t,events:n,locale:"es",labels:{day:"Día",week:"Semana",month:"Mes",year:"Año",today:"Hoy",previous:"Anterior",next:"Siguiente"}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:o,language:"tsx",fileName:"data.ts"}]};var S=(0,t.__exportAll)({customHeader:()=>g,firstDayOfWeek:()=>f,highlightToday:()=>h,localization:()=>M,recurringEvents:()=>p,staticMode:()=>D,usage:()=>l,weekdayFormat:()=>y,withOutsideDays:()=>m,withWeekNumbers:()=>c,withoutHeader:()=>Y,withoutWeekDays:()=>u});e.s(["YearViewDemos",0,S],408169)}]);