(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[24960],{1798:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},6620:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},9357:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/dates/calendar",function(){return n(23491)}])},23491:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>k});var r=n(6029),a=n(16285),s=n(97164);let i={type:"code",centered:!0,component:function(){return(0,r.jsx)(s.V,{})},code:`
import { Calendar } from '@mantine/dates';

function Demo() {
  return <Calendar />;
}
`};var d=n(74312),o=n(55729);let c={type:"code",centered:!0,component:function(){let[e,t]=(0,o.useState)([]);return(0,r.jsx)(s.V,{getDayProps:n=>({selected:e.some(e=>d(n).isSame(e,"date")),onClick:()=>{e.some(e=>d(n).isSame(e,"date"))?t(e=>e.filter(e=>!d(e).isSame(n,"date"))):e.length<3&&t(e=>[...e,n])}})})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { Calendar } from '@mantine/dates';

function Demo() {
  const [selected, setSelected] = useState<string[]>([]);
  const handleSelect = (date: string) => {
    const isSelected = selected.some((s) => dayjs(date).isSame(s, 'date'));
    if (isSelected) {
      setSelected((current) => current.filter((d) => !dayjs(d).isSame(date, 'date')));
    } else if (selected.length < 3) {
      setSelected((current) => [...current, date]);
    }
  };

  return (
    <Calendar
      getDayProps={(date) => ({
        selected: selected.some((s) => dayjs(date).isSame(s, 'date')),
        onClick: () => handleSelect(date),
      })}
    />
  );
}
`};function u(e){let t=d(e).day();return 0===t?6:t-1}function l(e,t){return!!t&&d(e).isBefore(d(t).add(6-u(t),"day").endOf("day").toDate())&&d(e).isAfter(d(t).subtract(u(t)+1,"day").toDate())}let h={type:"code",centered:!0,component:function(){let[e,t]=(0,o.useState)(null),[n,a]=(0,o.useState)(null);return(0,r.jsx)(s.V,{withCellSpacing:!1,getDayProps:r=>{let s=l(r,e),i=l(r,n),d=s||i;return{onMouseEnter:()=>t(r),onMouseLeave:()=>t(null),inRange:d,firstInRange:d&&1===new Date(r).getDay(),lastInRange:d&&0===new Date(r).getDay(),selected:i,onClick:()=>a(r)}}})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { Calendar } from '@mantine/dates';

function getDay(date: string) {
  const day = dayjs(date).day();
  return day === 0 ? 6 : day - 1;
}

function startOfWeek(date: string) {
  return dayjs(date)
    .subtract(getDay(date) + 1, 'day')
    .toDate();
}

function endOfWeek(date: string) {
  return dayjs(date)
    .add(6 - getDay(date), 'day')
    .endOf('day')
    .toDate();
}

function isInWeekRange(date: string, value: string | null) {
  return value
    ? dayjs(date).isBefore(endOfWeek(value)) && dayjs(date).isAfter(startOfWeek(value))
    : false;
}

function Demo() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [value, setValue] = useState<string | null>(null);

  return (
    <Calendar
      withCellSpacing={false}
      getDayProps={(date) => {
        const isHovered = isInWeekRange(date, hovered);
        const isSelected = isInWeekRange(date, value);
        const isInRange = isHovered || isSelected;
        return {
          onMouseEnter: () => setHovered(date),
          onMouseLeave: () => setHovered(null),
          inRange: isInRange,
          firstInRange: isInRange && new Date(date).getDay() === 1,
          lastInRange: isInRange && new Date(date).getDay() === 0,
          selected: isSelected,
          onClick: () => setValue(date),
        };
      }}
    />
  );
}
`};var f=n(69013);let y={type:"code",centered:!0,component:function(){return(0,r.jsx)(s.V,{static:!0,renderDay:e=>{let t=d(e).date();return(0,r.jsx)(f.C,{size:6,color:"red",offset:-2,disabled:16!==t,children:(0,r.jsx)("div",{children:t})})}})},code:`
import dayjs from 'dayjs';
import { Indicator } from '@mantine/core';
import { Calendar } from '@mantine/dates';

function Demo() {
  return (
    <Calendar
      static
      renderDay={(date) => {
        const day = dayjs(date).date();
        return (
          <Indicator size={6} color="red" offset={-2} disabled={day !== 16}>
            <div>{day}</div>
          </Indicator>
        );
      }}
    />
  );
}
`};var p=n(38547),v=n(5262);let g=(0,p.P)(v.XZ.Calendar);function m(e){let t={a:"a",code:"code",h2:"h2",p:"p",...(0,a.R)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"Calendar"})," component to create custom date pickers if ",(0,r.jsx)(t.a,{href:"/dates/date-picker/",children:"DatePicker"}),"\ncomponent does not meet your requirements. ",(0,r.jsx)(t.code,{children:"Calendar"})," supports all ",(0,r.jsx)(t.a,{href:"/dates/date-picker/",children:"DatePicker"}),"\nprops and some other props that are listed in props table – check it out to learn about all component features."]}),"\n",(0,r.jsxs)(t.p,{children:["By default, ",(0,r.jsx)(t.code,{children:"Calendar"})," works the same way as ",(0,r.jsx)(t.a,{href:"/dates/date-picker/",children:"DatePicker"})," component but does not\ninclude any logic of dates selection:"]}),"\n",(0,r.jsx)(n,{data:i}),"\n",(0,r.jsx)(t.h2,{id:"custom-date-pickers",children:"Custom date pickers"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"Calendar"})," as a base for custom date pickers. For example, you can create a date picker\nthat allows user to pick three or less dates:"]}),"\n",(0,r.jsx)(n,{data:c}),"\n",(0,r.jsx)(t.p,{children:"Another custom date picker example – week picker:"}),"\n",(0,r.jsx)(n,{data:h}),"\n",(0,r.jsx)(t.h2,{id:"static-prop",children:"Static prop"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"static"})," prop to display a calendar that user cannot interact with.\nIt is useful when you want to display data with in calendar view but do\nnot want it to be interactive."]}),"\n",(0,r.jsx)(n,{data:y})]})}function k(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(g,{...e,children:(0,r.jsx)(m,{...e})})}},24583:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},34891:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},41949:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},50560:function(e){e.exports=function(e,t,n){var r=function(e){return e.add(4-e.isoWeekday(),"day")},a=t.prototype;a.isoWeekYear=function(){return r(this).year()},a.isoWeek=function(e){if(!this.$utils().u(e))return this.add(7*(e-this.isoWeek()),"day");var t,a,s,i=r(this),d=(t=this.isoWeekYear(),s=4-(a=(this.$u?n.utc:n)().year(t).startOf("year")).isoWeekday(),a.isoWeekday()>4&&(s+=7),a.add(s,"day"));return i.diff(d,"week")+1},a.isoWeekday=function(e){return this.$utils().u(e)?this.day()||7:this.day(this.day()%7?e:e-7)};var s=a.startOf;a.startOf=function(e,t){var n=this.$utils(),r=!!n.u(t)||t;return"isoweek"===n.p(e)?r?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):s.bind(this)(e,t)}}},65433:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},69013:(e,t,n)=>{"use strict";n.d(t,{C:()=>g});var r=n(6029),a=n(26082);n(55729);var s=n(14163),i=n(33987),d=n(21351),o=n(70151),c=n(58563),u=n(38919),l=n(15583),h=n(76320),f=n(8411),y={root:"m_e5262200",indicator:"m_760d1fb1",processing:"m_885901b1"};let p={position:"top-end",offset:0},v=(0,i.V)((e,{color:t,position:n,offset:r,size:i,radius:u,zIndex:l,autoContrast:h})=>({root:{"--indicator-color":t?(0,d.r)(t,e):void 0,"--indicator-text-color":(0,c.v)(h,e)?(0,o.w)({color:t,theme:e,autoContrast:h}):void 0,"--indicator-size":(0,a.D)(i),"--indicator-radius":void 0===u?void 0:(0,s.nJ)(u),"--indicator-z-index":l?.toString(),...function(e="top-end",t=0){let n={"--indicator-top":void 0,"--indicator-bottom":void 0,"--indicator-left":void 0,"--indicator-right":void 0,"--indicator-translate-x":void 0,"--indicator-translate-y":void 0},r=(0,a.D)(t),[s,i]=e.split("-");return"top"===s&&(n["--indicator-top"]=r,n["--indicator-translate-y"]="-50%"),"middle"===s&&(n["--indicator-top"]="50%",n["--indicator-translate-y"]="-50%"),"bottom"===s&&(n["--indicator-bottom"]=r,n["--indicator-translate-y"]="50%"),"start"===i&&(n["--indicator-left"]=r,n["--indicator-translate-x"]="-50%"),"center"===i&&(n["--indicator-left"]="50%",n["--indicator-translate-x"]="-50%"),"end"===i&&(n["--indicator-right"]=r,n["--indicator-translate-x"]="50%"),n}(n,r)}})),g=(0,f.P9)((e,t)=>{let n=(0,u.Y)("Indicator",p,e),{classNames:a,className:s,style:i,styles:d,unstyled:o,vars:c,children:f,position:g,offset:m,inline:k,label:$,radius:M,color:D,withBorder:S,disabled:w,processing:j,zIndex:x,autoContrast:b,mod:O,attributes:C,..._}=n,A=(0,l.I)({name:"Indicator",classes:y,props:n,className:s,style:i,classNames:a,styles:d,unstyled:o,attributes:C,vars:c,varsResolver:v});return(0,r.jsxs)(h.a,{ref:t,...A("root"),mod:[{inline:k},O],..._,children:[!w&&(0,r.jsx)(h.a,{mod:{"with-label":!!$,"with-border":S,processing:j},...A("indicator"),children:$}),f]})});g.classes=y,g.displayName="@mantine/core/Indicator"},74312:function(e){e.exports=function(){"use strict";var e="millisecond",t="second",n="minute",r="hour",a="week",s="month",i="quarter",d="year",o="date",c="Invalid Date",u=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},f="en",y={};y[f]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}};var p="$isDayjsObject",v=function(e){return e instanceof $||!(!e||!e[p])},g=function e(t,n,r){var a;if(!t)return f;if("string"==typeof t){var s=t.toLowerCase();y[s]&&(a=s),n&&(y[s]=n,a=s);var i=t.split("-");if(!a&&i.length>1)return e(i[0])}else{var d=t.name;y[d]=t,a=d}return!r&&a&&(f=a),a||!r&&f},m=function(e,t){if(v(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new $(n)},k={s:h,z:function(e){var t=-e.utcOffset(),n=Math.abs(t);return(t<=0?"+":"-")+h(Math.floor(n/60),2,"0")+":"+h(n%60,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),a=t.clone().add(r,s),i=n-a<0,d=t.clone().add(r+(i?-1:1),s);return+(-(r+(n-a)/(i?a-d:d-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(c){return({M:s,y:d,w:a,d:"day",D:o,h:r,m:n,s:t,ms:e,Q:i})[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};k.l=g,k.i=v,k.w=function(e,t){return m(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var $=function(){function h(e){this.$L=g(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[p]=!0}var f=h.prototype;return f.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(k.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(u);if(r){var a=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(t)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return k},f.isValid=function(){return this.$d.toString()!==c},f.isSame=function(e,t){var n=m(e);return this.startOf(t)<=n&&n<=this.endOf(t)},f.isAfter=function(e,t){return m(e)<this.startOf(t)},f.isBefore=function(e,t){return this.endOf(t)<m(e)},f.$g=function(e,t,n){return k.u(e)?this[t]:this.set(n,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,i){var c=this,u=!!k.u(i)||i,l=k.p(e),h=function(e,t){var n=k.w(c.$u?Date.UTC(c.$y,t,e):new Date(c.$y,t,e),c);return u?n:n.endOf("day")},f=function(e,t){return k.w(c.toDate()[e].apply(c.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),c)},y=this.$W,p=this.$M,v=this.$D,g="set"+(this.$u?"UTC":"");switch(l){case d:return u?h(1,0):h(31,11);case s:return u?h(1,p):h(0,p+1);case a:var m=this.$locale().weekStart||0,$=(y<m?y+7:y)-m;return h(u?v-$:v+(6-$),p);case"day":case o:return f(g+"Hours",0);case r:return f(g+"Minutes",1);case n:return f(g+"Seconds",2);case t:return f(g+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(a,i){var c,u=k.p(a),l="set"+(this.$u?"UTC":""),h=((c={}).day=l+"Date",c[o]=l+"Date",c[s]=l+"Month",c[d]=l+"FullYear",c[r]=l+"Hours",c[n]=l+"Minutes",c[t]=l+"Seconds",c[e]=l+"Milliseconds",c)[u],f="day"===u?this.$D+(i-this.$W):i;if(u===s||u===d){var y=this.clone().set(o,1);y.$d[h](f),y.init(),this.$d=y.set(o,Math.min(this.$D,y.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},f.set=function(e,t){return this.clone().$set(e,t)},f.get=function(e){return this[k.p(e)]()},f.add=function(e,i){var o,c=this;e=Number(e);var u=k.p(i),l=function(t){var n=m(c);return k.w(n.date(n.date()+Math.round(t*e)),c)};if(u===s)return this.set(s,this.$M+e);if(u===d)return this.set(d,this.$y+e);if("day"===u)return l(1);if(u===a)return l(7);var h=((o={})[n]=6e4,o[r]=36e5,o[t]=1e3,o)[u]||1,f=this.$d.getTime()+e*h;return k.w(f,this)},f.subtract=function(e,t){return this.add(-1*e,t)},f.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||c;var r=e||"YYYY-MM-DDTHH:mm:ssZ",a=k.z(this),s=this.$H,i=this.$m,d=this.$M,o=n.weekdays,u=n.months,h=n.meridiem,f=function(e,n,a,s){return e&&(e[n]||e(t,r))||a[n].slice(0,s)},y=function(e){return k.s(s%12||12,e,"0")},p=h||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(l,function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return k.s(t.$y,4,"0");case"M":return d+1;case"MM":return k.s(d+1,2,"0");case"MMM":return f(n.monthsShort,d,u,3);case"MMMM":return f(u,d);case"D":return t.$D;case"DD":return k.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return f(n.weekdaysMin,t.$W,o,2);case"ddd":return f(n.weekdaysShort,t.$W,o,3);case"dddd":return o[t.$W];case"H":return String(s);case"HH":return k.s(s,2,"0");case"h":return y(1);case"hh":return y(2);case"a":return p(s,i,!0);case"A":return p(s,i,!1);case"m":return String(i);case"mm":return k.s(i,2,"0");case"s":return String(t.$s);case"ss":return k.s(t.$s,2,"0");case"SSS":return k.s(t.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")})},f.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},f.diff=function(e,o,c){var u,l=this,h=k.p(o),f=m(e),y=(f.utcOffset()-this.utcOffset())*6e4,p=this-f,v=function(){return k.m(l,f)};switch(h){case d:u=v()/12;break;case s:u=v();break;case i:u=v()/3;break;case a:u=(p-y)/6048e5;break;case"day":u=(p-y)/864e5;break;case r:u=p/36e5;break;case n:u=p/6e4;break;case t:u=p/1e3;break;default:u=p}return c?u:k.a(u)},f.daysInMonth=function(){return this.endOf(s).$D},f.$locale=function(){return y[this.$L]},f.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=g(e,t,!0);return r&&(n.$L=r),n},f.clone=function(){return k.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},h}(),M=$.prototype;return m.prototype=M,[["$ms",e],["$s",t],["$m",n],["$H",r],["$W","day"],["$M",s],["$y",d],["$D",o]].forEach(function(e){M[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),m.extend=function(e,t){return e.$i||(e(t,$,m),e.$i=!0),m},m.locale=g,m.isDayjs=v,m.unix=function(e){return m(1e3*e)},m.en=y[f],m.Ls=y,m.p={},m}()},84276:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])}},e=>{e.O(0,[38547,97164,90636,46593,38792],()=>e(e.s=9357)),_N_E=e.O()}]);