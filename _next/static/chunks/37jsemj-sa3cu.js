(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,r)=>{let a={};for(var n in e)t(a,n,{get:e[n],enumerable:!0});return r||t(a,Symbol.toStringTag,{value:"Module"}),a}])},257177,e=>{"use strict";var t=e.i(433512),r=e.i(481178),a=e.i(317477),n=e.i(44091),i=e.i(391466),d=e.i(956449),s=e.i(232471),o={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"},l=e.i(391398);let c=(0,r.createVarsResolver)((e,{radius:r,color:n,gradient:i,variant:d,size:s,autoContrast:o,circle:l})=>{let c=e.variantColorResolver({color:n||e.primaryColor,theme:e,gradient:i,variant:d||"filled",autoContrast:o});return{root:{"--badge-height":(0,t.getSize)(s,"badge-height"),"--badge-padding-x":(0,t.getSize)(s,"badge-padding-x"),"--badge-fz":(0,t.getSize)(s,"badge-fz"),"--badge-radius":l||void 0===r?void 0:(0,t.getRadius)(r),"--badge-bg":n||d?c.background:void 0,"--badge-color":n||d?c.color:void 0,"--badge-bd":n||d?c.border:void 0,"--badge-dot-color":"dot"===d?(0,a.getThemeColor)(n,e):void 0}}}),u=(0,d.polymorphicFactory)(e=>{let t=(0,n.useProps)("Badge",null,e),{classNames:r,className:a,style:d,styles:u,unstyled:h,vars:m,radius:f,color:y,gradient:x,leftSection:Y,rightSection:w,children:p,variant:g,fullWidth:D,autoContrast:v,circle:j,mod:M,attributes:k,...V}=t,b=(0,i.useStyles)({name:"Badge",props:t,classes:o,className:a,style:d,classNames:r,styles:u,unstyled:h,attributes:k,vars:m,varsResolver:c});return(0,l.jsxs)(s.Box,{variant:g,mod:[{block:D,circle:j,"with-right-section":!!w,"with-left-section":!!Y},M],...b("root",{variant:g}),...V,children:[Y&&(0,l.jsx)("span",{...b("section"),"data-position":"left",children:Y}),(0,l.jsx)("span",{...b("label"),children:p}),w&&(0,l.jsx)("span",{...b("section"),"data-position":"right",children:w})]})});u.classes=o,u.varsResolver=c,u.displayName="@mantine/core/Badge",e.s(["Badge",0,u],257177)},122308,e=>{"use strict";var t=e.i(605520),r=e.i(753381),a=e.i(494834),n=e.i(4332),i=e.i(657068),d=e.i(966696),s=e.i(298008),o=e.i(898770),l=e.i(27748),c=e.i(621304),u=e.i(855578),h=e.i(232471),m=e.i(284629),f=e.i(317477),y=e.i(951254),x=e.i(191788),Y=e.i(205693),w=e.i(391398);function p({month:e,getStyles:n,monthLabelFormat:i="MMMM",withWeekNumbers:d,withWeekDays:s,locale:o,firstDayOfWeek:g,weekdayFormat:D,weekendDays:v,getDayProps:j,onDayClick:M,onWeekNumberClick:k,onMonthClick:V,getWeekNumberProps:b,highlightToday:S,groupedEvents:E,mode:I,withOutsideDays:O,__getDayRef:C,__onDayKeyDown:H,firstDayIndex:N}){let W=(0,Y.useDatesContext)(),_=(0,y.useMantineTheme)(),R=(0,a.default)(),$=s?(0,c.getWeekdaysNames)({locale:W.getLocale(o),format:D,firstDayOfWeek:W.getFirstDayOfWeek(g)}).map((e,t)=>(0,x.createElement)("div",{...n("yearViewWeekday"),key:t},e)):null,T=(0,t.getMonthDays)({month:(0,a.default)(e).format("YYYY-MM-DD"),firstDayOfWeek:W.getFirstDayOfWeek(g),consistentWeeks:!0}).map((t,i)=>{let s=t.map((t,d)=>{let s=!(0,r.isSameMonth)(t,e);if(s&&!O)return(0,x.createElement)("div",{...n("yearViewDay"),"data-day-placeholder":!0,key:t});let l=W.getWeekendDays(v).includes((0,a.default)(t).day()),c=(0,a.default)(t).locale(o||W.locale).format("MMMM D, YYYY"),u=j?.((0,a.default)(t).format("YYYY-MM-DD"))||{},h=(0,a.default)(t).isSame(R,"day")&&S,y=E?.[(0,a.default)(t).format("YYYY-MM-DD")]||[],Y=N&&i===N.weekIndex&&d===N.dayIndex,p="static"!==I&&!s&&Y,g=y.slice(0,3).map(e=>(0,x.createElement)("div",{...n("yearViewDayIndicator",{style:{backgroundColor:(0,f.getThemeColor)(e.color,_)}}),key:e.id}));return(0,x.createElement)(m.UnstyledButton,{"aria-label":c,...u,...n("yearViewDay",{className:u.className,style:u.style}),key:t,mod:[{outside:s,weekend:l,today:h,static:"static"===I},u.mod],tabIndex:p?0:-1,ref:e=>{e&&C?.(i,d,e)},onKeyDown:e=>{u.onKeyDown?.(e),H?.(e,{weekIndex:i,dayIndex:d,date:t})},onClick:"static"===I?void 0:e=>{M?.((0,a.default)(t).format("YYYY-MM-DD"),e),u.onClick?.(e)}},(0,a.default)(t).format("D"),(0,w.jsx)("div",{...n("yearViewDayIndicators"),children:g}))}),l=b?.((0,a.default)(t[0]).format("YYYY-MM-DD"))||{},c=(0,u.getWeekNumber)(t);return(0,x.createElement)("div",{...n("yearViewWeek"),key:i},d&&(0,w.jsx)(m.UnstyledButton,{"aria-label":`Week ${c}`,title:`Week ${c}`,...l,onClick:"static"===I?void 0:e=>{k?.((0,a.default)(t[0]).format("YYYY-MM-DD"),e),l.onClick?.(e)},mod:{static:"static"===I},tabIndex:"static"===I?-1:0,...n("yearViewWeekNumber",{className:l.className,style:l.style}),children:c},c),s)});return(0,w.jsxs)(h.Box,{mod:[{"with-week-numbers":d,"with-weekdays":s,static:"static"===I}],...n("yearViewMonth"),children:[(0,w.jsx)(m.UnstyledButton,{onClick:"static"===I?void 0:t=>V?.((0,a.default)(e).startOf("month").format("YYYY-MM-DD"),t),mod:{static:"static"===I},tabIndex:"static"===I?-1:0,...n("yearViewMonthCaption"),children:(0,l.formatDate)({locale:W.getLocale(o),date:e,format:i})}),$&&(0,w.jsxs)("div",{...n("yearViewWeekdays"),children:[d&&(0,w.jsx)("div",{...n("yearViewWeekdaysCorner")}),$]}),T]})}var g={yearView:"m_7301354d",yearViewMonths:"m_8b7a61a0",yearViewMonth:"m_3e4e4533",yearViewWeekdays:"m_845972b8",yearViewWeek:"m_f9c4dae1",yearViewWeekNumber:"m_af51358a",yearViewWeekday:"m_e33cb11b",yearViewWeekdaysCorner:"m_221ce72d",yearViewDay:"m_399ab70f",yearViewMonthCaption:"m_950e3d33",yearViewDayIndicators:"m_98250b3",yearViewDayIndicator:"m_10d2a7c0"},D=e.i(481178),v=e.i(275519),j=e.i(433512),M=e.i(44091),k=e.i(62904),V=e.i(391466);let b={__staticSelector:"YearView",monthLabelFormat:"MMMM",withWeekDays:!0,highlightToday:!0,withHeader:!0,withOutsideDays:!0,mode:"default"},S=(0,D.createVarsResolver)((e,{radius:t})=>({yearView:{"--year-view-radius":void 0!==t?(0,j.getRadius)(t):void 0}})),E=(0,v.factory)(e=>{let l=(0,M.useProps)("YearView",b,e),{date:c,onDateChange:u,events:m,monthLabelFormat:f,withWeekNumbers:y,withWeekDays:D,locale:v,firstDayOfWeek:j,weekdayFormat:E,weekendDays:I,onMonthClick:O,onDayClick:C,onWeekNumberClick:H,getDayProps:N,getWeekNumberProps:W,highlightToday:_,labels:R,withOutsideDays:$,withHeader:T,monthYearSelectProps:A,onViewChange:F,previousControlProps:L,nextControlProps:B,todayControlProps:P,viewSelectProps:U,__staticSelector:Q,classNames:z,className:K,style:X,styles:G,unstyled:q,vars:J,attributes:Z,radius:ee,mode:et,recurrenceExpansionLimit:er,...ea}=l,en=(0,Y.useDatesContext)(),ei=(0,V.useStyles)({name:Q,classes:g,props:l,className:K,style:X,classNames:z,styles:G,unstyled:q,vars:J,varsResolver:S,attributes:Z,rootSelector:"yearView"}),{resolvedClassNames:ed,resolvedStyles:es}=(0,k.useResolvedStylesApi)({classNames:z,styles:G,props:l}),eo=function({date:e,events:t}){let r={};if(void 0===t)return r;let n=new Set;for(let i of t)if((0,a.default)(i.start).isSame((0,a.default)(e),"year")){if(!function(e,t){if((0,o.isMultidayEvent)(e)){let r=(0,a.default)(e.start).startOf("day"),n=(0,a.default)(e.end).startOf("day");for(let a=r;a.isBefore(n)||a.isSame(n);a=a.add(1,"day")){let r=a.format("YYYY-MM-DD");t[r]||(t[r]=[]),t[r].push(e)}return}let r=(0,a.default)(e.start).format("YYYY-MM-DD");t[r]||(t[r]=[]),t[r].push(e)}((0,s.validateEvent)(i),r),n.has(i.id))throw Error(`[@mantine/schedule] YearView: Duplicated event ids found: ${i.id}`);n.add(i.id)}return r}({date:c,events:(0,i.expandRecurringEvents)({events:m,rangeStart:(0,a.default)(c).startOf("year").toDate(),rangeEnd:(0,a.default)(c).endOf("year").toDate(),expansionLimit:er})}),el=(0,x.useRef)([]),ec=0,eu=(function(e){let t=(0,a.default)(e).startOf("year").toDate(),r=[[],[],[],[]],n=0;for(let e=0;e<4;e+=1)for(let i=0;i<3;i+=1)r[e].push((0,a.default)(t).add(n,"months").format("YYYY-MM-DD")),n+=1;return r})((0,a.default)(c).format("YYYY-MM-DD")).flat().map(e=>{let n=ec;return ec++,(0,w.jsx)(p,{month:e,getStyles:ei,monthLabelFormat:f,withWeekNumbers:y,withWeekDays:D,locale:v,firstDayOfWeek:j,weekdayFormat:E||(e=>(0,a.default)(e).locale(en.getLocale(v)).format("dd").slice(0,1)),weekendDays:I,getDayProps:N,getWeekNumberProps:W,onMonthClick:O,onDayClick:C,onWeekNumberClick:H,highlightToday:_,groupedEvents:eo,mode:et,withOutsideDays:$,firstDayIndex:(e=>{let n=(0,t.getMonthDays)({month:(0,a.default)(e).format("YYYY-MM-DD"),firstDayOfWeek:en.getFirstDayOfWeek(j),consistentWeeks:!0});for(let t=0;t<n.length;t++){let a=n[t];for(let n=0;n<a.length;n++){let i=a[n];if((0,r.isSameMonth)(i,e))return{weekIndex:t,dayIndex:n}}}})(e),__getDayRef:(e,t,r)=>{Array.isArray(el.current[n])||(el.current[n]=[]),Array.isArray(el.current[n][e])||(el.current[n][e]=[]),el.current[n][e][t]=r},__onDayKeyDown:(e,t)=>{!function({controlsRef:e,monthIndex:t,weekIndex:r,dayIndex:a,event:n}){let i=function(e){switch(e){case"ArrowDown":return"down";case"ArrowUp":return"up";case"ArrowRight":return"right";case"ArrowLeft":return"left";default:return null}}(n.key);if(i){n.preventDefault();let d=e.current?e.current.map(e=>e?e.map(e=>e?e.length:0):[]):null;if(!d)return;!function e({controlsRef:t,direction:r,monthIndex:a,weekIndex:n,dayIndex:i,size:d}){let s=function({direction:e,monthIndex:t,weekIndex:r,dayIndex:a,size:n}){let i=n[t];if(!i)return null;switch(e){case"up":{if(0===r){if(0===t)return null;let e=n[t-1];if(!e||0===e.length)return null;let r=e.length-1,i=Math.min(a,e[r]-1);return{monthIndex:t-1,weekIndex:r,dayIndex:i}}let e=Math.min(a,i[r-1]-1);return{monthIndex:t,weekIndex:r-1,dayIndex:e}}case"down":{if(r===i.length-1){if(t===n.length-1)return null;let e=n[t+1];if(!e||0===e.length)return null;return{monthIndex:t+1,weekIndex:0,dayIndex:Math.min(a,e[0]-1)}}let e=Math.min(a,i[r+1]-1);return{monthIndex:t,weekIndex:r+1,dayIndex:e}}case"left":if(0===a){if(0===r){if(0===t)return null;let e=n[t-1];if(!e||0===e.length)return null;let r=e.length-1;return{monthIndex:t-1,weekIndex:r,dayIndex:e[r]-1}}return{monthIndex:t,weekIndex:r-1,dayIndex:i[r-1]-1}}return{monthIndex:t,weekIndex:r,dayIndex:a-1};case"right":if(a===i[r]-1){if(r===i.length-1){if(t===n.length-1)return null;let e=n[t+1];if(!e||0===e.length)return null;return{monthIndex:t+1,weekIndex:0,dayIndex:0}}return{monthIndex:t,weekIndex:r+1,dayIndex:0}}return{monthIndex:t,weekIndex:r,dayIndex:a+1};default:return null}}({direction:r,monthIndex:a,weekIndex:n,dayIndex:i,size:d});if(!s)return;let o=t.current?.[s.monthIndex]?.[s.weekIndex]?.[s.dayIndex];o&&(o.disabled||o.getAttribute("data-hidden")||o.getAttribute("data-outside")||o.getAttribute("data-day-placeholder")?e({controlsRef:t,direction:r,monthIndex:s.monthIndex,weekIndex:s.weekIndex,dayIndex:s.dayIndex,size:d}):o.focus())}({controlsRef:e,direction:i,monthIndex:t,weekIndex:r,dayIndex:a,size:d})}}({controlsRef:el,monthIndex:n,weekIndex:t.weekIndex,dayIndex:t.dayIndex,event:e})}},e)});return(0,w.jsxs)(h.Box,{...ei("yearView"),mod:{static:"static"===et},...ea,children:[T&&(0,w.jsx)(d.ScheduleHeaderBase,{view:"year",navigationHandlers:{previous:()=>(0,n.toDateString)((0,a.default)(c).subtract(1,"year").startOf("year")),next:()=>(0,n.toDateString)((0,a.default)(c).add(1,"year").startOf("year")),today:()=>(0,n.toDateString)((0,a.default)())},control:{monthYearSelect:{locale:v,withMonths:!1,yearValue:(0,a.default)(c).get("year"),monthValue:(0,a.default)(c).get("month"),onYearChange:e=>u?.((0,n.toDateString)((0,a.default)(c).set("year",e).startOf("year"))),...A}},labels:R,onDateChange:u,onViewChange:F,previousControlProps:L,nextControlProps:B,todayControlProps:P,viewSelectProps:U,stylesApiProps:{classNames:ed,styles:es,attributes:Z,__staticSelector:Q,radius:ee}}),(0,w.jsx)("div",{...ei("yearViewMonths"),children:eu})]})});E.displayName="@mantine/schedule/YearView",E.classes=g,E.varsResolver=S,e.s(["YearView",0,E],122308)},408169,e=>{"use strict";var t=e.i(648863),r=e.i(494834);let a=(0,r.default)().format("YYYY"),n=[{id:1,title:"New Year",start:`${a}-01-01 00:00:00`,end:(0,r.default)(`${a}-01-01`).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"blue"},{id:2,title:"Spring Event",start:`${a}-03-15 00:00:00`,end:(0,r.default)(`${a}-03-15`).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"green"},{id:3,title:"Summer Conference",start:`${a}-07-20 00:00:00`,end:(0,r.default)(`${a}-07-20`).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"orange"},{id:4,title:"Fall Workshop",start:`${a}-10-10 00:00:00`,end:(0,r.default)(`${a}-10-10`).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"violet"},{id:5,title:"Year End Party",start:`${a}-12-25 00:00:00`,end:(0,r.default)(`${a}-12-25`).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"}],i=`
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
`;var d=e.i(191788),s=e.i(391398),o=e.i(122308);let l={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,s.jsx)(o.YearView,{date:e,onDateChange:t,events:n})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:i,language:"tsx",fileName:"data.ts"}]},c={defaultExpanded:!1,type:"code",component:function(){return(0,s.jsx)(o.YearView,{date:new Date,events:n,withWeekNumbers:!0})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} withWeekNumbers />;
}
`},u={defaultExpanded:!1,type:"code",component:function(){return(0,s.jsx)(o.YearView,{date:new Date,events:n,withWeekDays:!1})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} withWeekDays={false} />;
}
`},h={defaultExpanded:!1,type:"code",component:function(){return(0,s.jsx)(o.YearView,{date:new Date,events:n,withOutsideDays:!1})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} withOutsideDays={false} />;
}
`},m={defaultExpanded:!1,type:"code",component:function(){return(0,s.jsx)(o.YearView,{date:new Date,events:n,firstDayOfWeek:0})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} firstDayOfWeek={0} />;
}
`},f={defaultExpanded:!1,type:"code",component:function(){return(0,s.jsx)(o.YearView,{date:new Date,events:n,weekdayFormat:"dd"})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} weekdayFormat="dd" />;
}
`},y={defaultExpanded:!1,type:"code",component:function(){return(0,s.jsx)(o.YearView,{date:new Date,events:n,highlightToday:!1})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} highlightToday={false} />;
}
`},x={defaultExpanded:!1,type:"code",component:function(){return(0,s.jsx)(o.YearView,{date:new Date,events:n,withHeader:!1})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} withHeader={false} />;
}
`},Y={defaultExpanded:!1,type:"code",component:function(){return(0,s.jsx)(o.YearView,{date:new Date,events:n,mode:"static"})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} mode="static" />;
}
`},w=(0,r.default)().year(),p=[{id:"yearly-series",title:"Monthly architecture review (series)",start:`${w}-01-10 09:00:00`,end:`${w}-01-10 10:00:00`,color:"blue",recurrence:{rrule:"FREQ=MONTHLY;COUNT=12",exdate:[`${w}-11-10 09:00:00`]}},{id:"yearly-series-override",title:"Monthly architecture review (moved in Nov)",start:`${w}-11-10 13:00:00`,end:`${w}-11-10 14:00:00`,color:"grape",recurringEventId:"yearly-series",recurrenceId:`${w}-11-10 09:00:00`},{id:"year-one-off",title:"One-off summit",start:`${w}-12-01 00:00:00`,end:`${w}-12-02 00:00:00`,color:"green"}],g={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)(`${w}-01-01`);return(0,s.jsx)(o.YearView,{date:e,onDateChange:t,events:p,withWeekNumbers:!0})},code:`
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
`};var D=e.i(428127);let v={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,s.jsxs)("div",{children:[(0,s.jsxs)(D.ScheduleHeader,{children:[(0,s.jsx)(D.ScheduleHeader.Previous,{onClick:()=>t((0,r.default)(e).subtract(1,"year").startOf("year").format("YYYY-MM-DD"))}),(0,s.jsx)(D.ScheduleHeader.MonthYearSelect,{withMonths:!1,yearValue:(0,r.default)(e).year(),monthValue:(0,r.default)(e).month(),onYearChange:a=>t((0,r.default)(e).year(a).startOf("year").format("YYYY-MM-DD"))}),(0,s.jsx)(D.ScheduleHeader.Next,{onClick:()=>t((0,r.default)(e).add(1,"year").startOf("year").format("YYYY-MM-DD"))}),(0,s.jsx)(D.ScheduleHeader.Today,{onClick:()=>t((0,r.default)().format("YYYY-MM-DD"))}),(0,s.jsx)(D.ScheduleHeader.Control,{style:{marginInlineStart:"auto"},onClick:()=>window.print(),children:"Print"})]}),(0,s.jsx)(o.YearView,{date:e,onDateChange:t,events:n,withHeader:!1})]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:i,language:"tsx",fileName:"data.ts"}]};e.i(27355);let j={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,s.jsx)(o.YearView,{date:e,onDateChange:t,events:n,locale:"es",labels:{day:"Día",week:"Semana",month:"Mes",year:"Año",today:"Hoy",previous:"Anterior",next:"Siguiente"}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:i,language:"tsx",fileName:"data.ts"}]};var M=(0,t.__exportAll)({customHeader:()=>v,firstDayOfWeek:()=>m,highlightToday:()=>y,localization:()=>j,recurringEvents:()=>g,staticMode:()=>Y,usage:()=>l,weekdayFormat:()=>f,withOutsideDays:()=>h,withWeekNumbers:()=>c,withoutHeader:()=>x,withoutWeekDays:()=>u});e.s(["YearViewDemos",0,M],408169)},489053,e=>{"use strict";var t=e.i(391398),r=e.i(38856),a=e.i(7834),n=e.i(791941),i=e.i(238715),d=e.i(953813),s=e.i(408169);e.i(603441);var o=e.i(62558);e.i(457450);var l=e.i(418026);let c=(0,o.Layout)(l.MDX_DATA.RecurringEventsSchedule);function u(e){let o={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.useMDXComponents)(),...e.components},{Demo:l}=o;return l||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"recurring-events",children:"Recurring events"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"@mantine/schedule"})," supports recurring events via ",(0,t.jsx)(o.a,{href:"https://datatracker.ietf.org/doc/html/rfc5545",children:"RFC 5545"}),"\nrecurrence rules (powered by the ",(0,t.jsx)(o.a,{href:"https://github.com/jkbrzt/rrule",children:"rrule"})," library)."]}),"\n",(0,t.jsx)(o.p,{children:"There are three event shapes:"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"Series event"})," – has a ",(0,t.jsx)(o.code,{children:"recurrence"})," field with an ",(0,t.jsx)(o.code,{children:"rrule"})," string"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"Override event"})," – has ",(0,t.jsx)(o.code,{children:"recurringEventId"})," + ",(0,t.jsx)(o.code,{children:"recurrenceId"})," to replace one generated occurrence"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"One-off event"})," – has none of the recurring fields (regular event)"]}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"series-event",children:"Series event"}),"\n",(0,t.jsxs)(o.p,{children:["Series events define recurrence with ",(0,t.jsx)(o.code,{children:"recurrence.rrule"}),". You can optionally add\n",(0,t.jsx)(o.code,{children:"recurrence.exdate"})," to exclude specific occurrences and ",(0,t.jsx)(o.code,{children:"recurrence.dtstart"})," to set\nan explicit series start date (defaults to ",(0,t.jsx)(o.code,{children:"start"}),")."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"const event = {\n  id: 'weekly-series',\n  title: 'Weekly planning',\n  start: '2024-01-15 10:00:00',\n  end: '2024-01-15 11:00:00',\n  color: 'blue',\n  recurrence: {\n    rrule: 'FREQ=WEEKLY;BYDAY=MO,WE;COUNT=16',\n    exdate: ['2024-01-17 10:00:00'],\n  },\n};\n"})}),"\n",(0,t.jsx)(o.p,{children:"Common rrule patterns:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"FREQ=DAILY;COUNT=10"})," – every day, 10 occurrences"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"FREQ=WEEKLY;BYDAY=MO,WE,FR"})," – every Mon, Wed, Fri"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"FREQ=MONTHLY;BYMONTHDAY=15"})," – 15th of every month"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"FREQ=YEARLY;COUNT=5"})," – once a year, 5 times"]}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"override-event",children:"Override event"}),"\n",(0,t.jsxs)(o.p,{children:["Override events replace a single generated occurrence from a series.\nUse ",(0,t.jsx)(o.code,{children:"recurringEventId"})," to point to the series and ",(0,t.jsx)(o.code,{children:"recurrenceId"})," to identify\nwhich occurrence to replace (in ",(0,t.jsx)(o.code,{children:"YYYY-MM-DD HH:mm:ss"})," format matching the original start time):"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"const override = {\n  id: 'weekly-series-override',\n  title: 'Weekly planning (moved)',\n  start: '2024-01-17 16:00:00',\n  end: '2024-01-17 17:00:00',\n  color: 'grape',\n  recurringEventId: 'weekly-series',\n  recurrenceId: '2024-01-17 10:00:00',\n};\n"})}),"\n",(0,t.jsx)(o.h2,{id:"how-rendering-works",children:"How rendering works"}),"\n",(0,t.jsx)(o.p,{children:"Each view expands recurring events only for its visible date range:"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:["Parse the ",(0,t.jsx)(o.code,{children:"rrule"})," string and generate occurrence start times within the range"]}),"\n",(0,t.jsxs)(o.li,{children:["Remove occurrences that match ",(0,t.jsx)(o.code,{children:"exdate"})," entries"]}),"\n",(0,t.jsx)(o.li,{children:"Replace matching occurrences with override events"}),"\n",(0,t.jsx)(o.li,{children:"Merge with one-off events and render"}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:["Generated instances include a ",(0,t.jsx)(o.code,{children:"recurringInstance"})," metadata object with:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"isRecurringInstance"})," – always ",(0,t.jsx)(o.code,{children:"true"})," for generated events"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"recurringEventId"})," – parent series id"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"recurrenceId"})," – occurrence identifier"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"originalStart"})," / ",(0,t.jsx)(o.code,{children:"originalEnd"})," – the occurrence dates before any overrides"]}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"expandrecurringevents-utility",children:"expandRecurringEvents utility"}),"\n",(0,t.jsxs)(o.p,{children:["You can use the ",(0,t.jsx)(o.code,{children:"expandRecurringEvents"})," utility directly for custom logic:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { expandRecurringEvents } from '@mantine/schedule';\n\nconst expanded = expandRecurringEvents({\n  events,\n  rangeStart: '2024-01-15 00:00:00',\n  rangeEnd: '2024-01-21 23:59:59',\n  expansionLimit: 2000, // optional, default 2000\n});\n"})}),"\n",(0,t.jsx)(o.h2,{id:"recurrenceexpansionlimit-prop",children:"recurrenceExpansionLimit prop"}),"\n",(0,t.jsxs)(o.p,{children:["All views accept a ",(0,t.jsx)(o.code,{children:"recurrenceExpansionLimit"})," prop (default ",(0,t.jsx)(o.code,{children:"2000"}),") to cap the number\nof generated instances per recurring series. This prevents performance issues with\nunbounded recurrence rules (e.g., ",(0,t.jsx)(o.code,{children:"FREQ=DAILY"})," without ",(0,t.jsx)(o.code,{children:"COUNT"})," or ",(0,t.jsx)(o.code,{children:"UNTIL"}),").\nNote that the limit applies independently to each series, so a schedule with\nmultiple unbounded series may generate up to ",(0,t.jsx)(o.code,{children:"limit × number of series"})," total instances."]}),"\n",(0,t.jsx)(o.h2,{id:"schedule-demo",children:"Schedule demo"}),"\n",(0,t.jsx)(l,{data:i.ScheduleDemos.recurringEvents}),"\n",(0,t.jsx)(o.h2,{id:"dayview-demo",children:"DayView demo"}),"\n",(0,t.jsx)(l,{data:a.DayViewDemos.recurringEvents}),"\n",(0,t.jsx)(o.h2,{id:"weekview-demo",children:"WeekView demo"}),"\n",(0,t.jsx)(l,{data:d.WeekViewDemos.recurringEvents}),"\n",(0,t.jsx)(o.h2,{id:"monthview-demo",children:"MonthView demo"}),"\n",(0,t.jsx)(l,{data:n.MonthViewDemos.recurringEvents}),"\n",(0,t.jsx)(o.h2,{id:"yearview-demo",children:"YearView demo"}),"\n",(0,t.jsx)(l,{data:s.YearViewDemos.recurringEvents})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(c,{...e,children:(0,t.jsx)(u,{...e})})}])},549649,(e,t,r)=>{let a="/schedule/recurring-events";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(489053)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([a])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);