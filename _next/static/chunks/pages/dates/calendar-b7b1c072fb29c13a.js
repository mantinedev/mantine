(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[77025],{28879:function(t){var e;e=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",a="week",i="month",s="quarter",o="year",u="date",c="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},h="en",m={};m[h]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||"th")+"]"}};var $="$isDayjsObject",p=function(t){return t instanceof D||!(!t||!t[$])},v=function t(e,n,r){var a;if(!e)return h;if("string"==typeof e){var i=e.toLowerCase();m[i]&&(a=i),n&&(m[i]=n,a=i);var s=e.split("-");if(!a&&s.length>1)return t(s[0])}else{var o=e.name;m[o]=e,a=o}return!r&&a&&(h=a),a||!r&&h},g=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new D(n)},y={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e);return(e<=0?"+":"-")+f(Math.floor(n/60),2,"0")+":"+f(n%60,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),a=e.clone().add(r,i),s=n-a<0,o=e.clone().add(r+(s?-1:1),i);return+(-(r+(n-a)/(s?a-o:o-a))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return({M:i,y:o,w:a,d:"day",D:u,h:r,m:n,s:e,ms:t,Q:s})[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}};y.l=v,y.i=p,y.w=function(t,e){return g(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function f(t){this.$L=v(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[$]=!0}var h=f.prototype;return h.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(y.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(d);if(r){var a=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(e)}(t),this.init()},h.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},h.$utils=function(){return y},h.isValid=function(){return this.$d.toString()!==c},h.isSame=function(t,e){var n=g(t);return this.startOf(e)<=n&&n<=this.endOf(e)},h.isAfter=function(t,e){return g(t)<this.startOf(e)},h.isBefore=function(t,e){return this.endOf(e)<g(t)},h.$g=function(t,e,n){return y.u(t)?this[e]:this.set(n,t)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,s){var c=this,d=!!y.u(s)||s,l=y.p(t),f=function(t,e){var n=y.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return d?n:n.endOf("day")},h=function(t,e){return y.w(c.toDate()[t].apply(c.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},m=this.$W,$=this.$M,p=this.$D,v="set"+(this.$u?"UTC":"");switch(l){case o:return d?f(1,0):f(31,11);case i:return d?f(1,$):f(0,$+1);case a:var g=this.$locale().weekStart||0,D=(m<g?m+7:m)-g;return f(d?p-D:p+(6-D),$);case"day":case u:return h(v+"Hours",0);case r:return h(v+"Minutes",1);case n:return h(v+"Seconds",2);case e:return h(v+"Milliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(a,s){var c,d=y.p(a),l="set"+(this.$u?"UTC":""),f=((c={}).day=l+"Date",c[u]=l+"Date",c[i]=l+"Month",c[o]=l+"FullYear",c[r]=l+"Hours",c[n]=l+"Minutes",c[e]=l+"Seconds",c[t]=l+"Milliseconds",c)[d],h="day"===d?this.$D+(s-this.$W):s;if(d===i||d===o){var m=this.clone().set(u,1);m.$d[f](h),m.init(),this.$d=m.set(u,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},h.set=function(t,e){return this.clone().$set(t,e)},h.get=function(t){return this[y.p(t)]()},h.add=function(t,s){var u,c=this;t=Number(t);var d=y.p(s),l=function(e){var n=g(c);return y.w(n.date(n.date()+Math.round(e*t)),c)};if(d===i)return this.set(i,this.$M+t);if(d===o)return this.set(o,this.$y+t);if("day"===d)return l(1);if(d===a)return l(7);var f=((u={})[n]=6e4,u[r]=36e5,u[e]=1e3,u)[d]||1,h=this.$d.getTime()+t*f;return y.w(h,this)},h.subtract=function(t,e){return this.add(-1*t,e)},h.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||c;var r=t||"YYYY-MM-DDTHH:mm:ssZ",a=y.z(this),i=this.$H,s=this.$m,o=this.$M,u=n.weekdays,d=n.months,f=n.meridiem,h=function(t,n,a,i){return t&&(t[n]||t(e,r))||a[n].slice(0,i)},m=function(t){return y.s(i%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(l,function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return y.s(e.$y,4,"0");case"M":return o+1;case"MM":return y.s(o+1,2,"0");case"MMM":return h(n.monthsShort,o,d,3);case"MMMM":return h(d,o);case"D":return e.$D;case"DD":return y.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,u,2);case"ddd":return h(n.weekdaysShort,e.$W,u,3);case"dddd":return u[e.$W];case"H":return String(i);case"HH":return y.s(i,2,"0");case"h":return m(1);case"hh":return m(2);case"a":return $(i,s,!0);case"A":return $(i,s,!1);case"m":return String(s);case"mm":return y.s(s,2,"0");case"s":return String(e.$s);case"ss":return y.s(e.$s,2,"0");case"SSS":return y.s(e.$ms,3,"0");case"Z":return a}return null}(t)||a.replace(":","")})},h.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},h.diff=function(t,u,c){var d,l=this,f=y.p(u),h=g(t),m=(h.utcOffset()-this.utcOffset())*6e4,$=this-h,p=function(){return y.m(l,h)};switch(f){case o:d=p()/12;break;case i:d=p();break;case s:d=p()/3;break;case a:d=($-m)/6048e5;break;case"day":d=($-m)/864e5;break;case r:d=$/36e5;break;case n:d=$/6e4;break;case e:d=$/1e3;break;default:d=$}return c?d:y.a(d)},h.daysInMonth=function(){return this.endOf(i).$D},h.$locale=function(){return m[this.$L]},h.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=v(t,e,!0);return r&&(n.$L=r),n},h.clone=function(){return y.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},f}(),S=D.prototype;return g.prototype=S,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W","day"],["$M",i],["$y",o],["$D",u]].forEach(function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),g.extend=function(t,e){return t.$i||(t(e,D,g),t.$i=!0),g},g.locale=v,g.isDayjs=p,g.unix=function(t){return g(1e3*t)},g.en=m[h],g.Ls=m,g.p={},g},t.exports=e()},67338:function(t){var e;e=function(){"use strict";var t={year:0,month:1,day:2,hour:3,minute:4,second:5},e={};return function(n,r,a){var i,s=function(t,n,r){void 0===r&&(r={});var a,i,s,o,u=new Date(t);return(void 0===(a=r)&&(a={}),(o=e[s=n+"|"+(i=a.timeZoneName||"short")])||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:n,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:i}),e[s]=o),o).formatToParts(u)},o=function(e,n){for(var r=s(e,n),i=[],o=0;o<r.length;o+=1){var u=r[o],c=u.type,d=u.value,l=t[c];l>=0&&(i[l]=parseInt(d,10))}var f=i[3],h=i[0]+"-"+i[1]+"-"+i[2]+" "+(24===f?0:f)+":"+i[4]+":"+i[5]+":000",m=+e;return(a.utc(h).valueOf()-(m-=m%1e3))/6e4},u=r.prototype;u.tz=function(t,e){void 0===t&&(t=i);var n=this.utcOffset(),r=this.toDate(),s=r.toLocaleString("en-US",{timeZone:t}),o=Math.round((r-new Date(s))/1e3/60),u=a(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(-(15*Math.round(r.getTimezoneOffset()/15))-o,!0);if(e){var c=u.utcOffset();u=u.add(n-c,"minute")}return u.$x.$timezone=t,u},u.offsetName=function(t){var e=this.$x.$timezone||a.tz.guess(),n=s(this.valueOf(),e,{timeZoneName:t}).find(function(t){return"timezonename"===t.type.toLowerCase()});return n&&n.value};var c=u.startOf;u.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return c.call(this,t,e);var n=a(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return c.call(n,t,e).tz(this.$x.$timezone,!0)},a.tz=function(t,e,n){var r=n&&e,s=n||e||i,u=o(+a(),s);if("string"!=typeof t)return a(t).tz(s);var c=function(t,e,n){var r=t-60*e*1e3,a=o(r,n);if(e===a)return[r,e];var i=o(r-=60*(a-e)*1e3,n);return a===i?[r,a]:[t-60*Math.min(a,i)*1e3,Math.max(a,i)]}(a.utc(t,r).valueOf(),u,s),d=c[0],l=c[1],f=a(d).utcOffset(l);return f.$x.$timezone=s,f},a.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},a.tz.setDefault=function(t){i=t}}},t.exports=e()},10264:function(t){var e;e=function(){"use strict";var t="minute",e=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g;return function(r,a,i){var s=a.prototype;i.utc=function(t){var e={date:t,utc:!0,args:arguments};return new a(e)},s.utc=function(e){var n=i(this.toDate(),{locale:this.$L,utc:!0});return e?n.add(this.utcOffset(),t):n},s.local=function(){return i(this.toDate(),{locale:this.$L,utc:!1})};var o=s.parse;s.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),o.call(this,t)};var u=s.init;s.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else u.call(this)};var c=s.utcOffset;s.utcOffset=function(r,a){var i=this.$utils().u;if(i(r))return this.$u?0:i(this.$offset)?c.call(this):this.$offset;if("string"==typeof r&&null===(r=function(t){void 0===t&&(t="");var r=t.match(e);if(!r)return null;var a=(""+r[0]).match(n)||["-",0,0],i=a[0],s=60*+a[1]+ +a[2];return 0===s?0:"+"===i?s:-s}(r)))return this;var s=16>=Math.abs(r)?60*r:r,o=this;if(a)return o.$offset=s,o.$u=0===r,o;if(0!==r){var u=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(o=this.local().add(s+u,t)).$offset=s,o.$x.$localOffset=u}else o=this.utc();return o};var d=s.format;s.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return d.call(this,e)},s.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},s.isUTC=function(){return!!this.$u},s.toISOString=function(){return this.toDate().toISOString()},s.toString=function(){return this.toDate().toUTCString()};var l=s.toDate;s.toDate=function(t){return"s"===t&&this.$offset?i(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():l.call(this)};var f=s.diff;s.diff=function(t,e,n){if(t&&this.$u===t.$u)return f.call(this,t,e,n);var r=this.local(),a=i(t).local();return f.call(r,a,e,n)}}},t.exports=e()},30913:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dates/calendar",function(){return n(12694)}])},12694:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return y}});var r=n(52322),a=n(45392),i=n(11204);let s={type:"code",centered:!0,component:function(){return(0,r.jsx)(i.f,{})},code:`
import { Calendar } from '@mantine/dates';

function Demo() {
  return <Calendar />;
}
`};var o=n(28879),u=n(2784);let c={type:"code",centered:!0,component:function(){let[t,e]=(0,u.useState)([]),n=n=>{t.some(t=>o(n).isSame(t,"date"))?e(t=>t.filter(t=>!o(t).isSame(n,"date"))):t.length<3&&e(t=>[...t,n])};return(0,r.jsx)(i.f,{getDayProps:e=>({selected:t.some(t=>o(e).isSame(t,"date")),onClick:()=>n(e)})})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { Calendar } from '@mantine/dates';

function Demo() {
  const [selected, setSelected] = useState<Date[]>([]);
  const handleSelect = (date: Date) => {
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
`};function d(t){let e=t.getDay();return 0===e?6:e-1}function l(t,e){return!!e&&o(t).isBefore(o(new Date(e.getFullYear(),e.getMonth(),e.getDate()+(6-d(e)))).endOf("date").toDate())&&o(t).isAfter(new Date(e.getFullYear(),e.getMonth(),e.getDate()-d(e)-1))}let f={type:"code",centered:!0,component:function(){let[t,e]=(0,u.useState)(null),[n,a]=(0,u.useState)(null);return(0,r.jsx)(i.f,{withCellSpacing:!1,getDayProps:r=>{let i=l(r,t),s=l(r,n),o=i||s;return{onMouseEnter:()=>e(r),onMouseLeave:()=>e(null),inRange:o,firstInRange:o&&1===r.getDay(),lastInRange:o&&0===r.getDay(),selected:s,onClick:()=>a(r)}}})},code:`
import { useState } from 'react';
import { Calendar } from '@mantine/dates';
import dayjs from 'dayjs';

function getDay(date: Date) {
  const day = date.getDay();
  return day === 0 ? 6 : day - 1;
}

function startOfWeek(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - getDay(date) - 1);
}

function endOfWeek(date: Date) {
  return dayjs(new Date(date.getFullYear(), date.getMonth(), date.getDate() + (6 - getDay(date))))
    .endOf('date')
    .toDate();
}

function isInWeekRange(date: Date, value: Date | null) {
  return value
    ? dayjs(date).isBefore(endOfWeek(value)) && dayjs(date).isAfter(startOfWeek(value))
    : false;
}

function Demo() {
  const [hovered, setHovered] = useState<Date | null>(null);
  const [value, setValue] = useState<Date | null>(null);

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
          firstInRange: isInRange && date.getDay() === 1,
          lastInRange: isInRange && date.getDay() === 0,
          selected: isSelected,
          onClick: () => setValue(date),
        };
      }}
    />
  );
}
`};var h=n(77566);let m={type:"code",centered:!0,component:function(){return(0,r.jsx)(i.f,{static:!0,renderDay:t=>{let e=t.getDate();return(0,r.jsx)(h.z,{size:6,color:"red",offset:-2,disabled:16!==e,children:(0,r.jsx)("div",{children:e})})}})},code:`
import { Indicator } from '@mantine/core';
import { Calendar } from '@mantine/dates';

function Demo() {
  return (
    <Calendar
      static
      renderDay={(date) => {
        const day = date.getDate();
        return (
          <Indicator size={6} color="red" offset={-2} disabled={day !== 16}>
            <div>{day}</div>
          </Indicator>
        );
      }}
    />
  );
}
`};var $=n(25071),p=n(15019);let v=(0,$.A)(p.us.Calendar);function g(t){let e={a:"a",code:"code",h2:"h2",p:"p",...(0,a.a)(),...t.components},{Demo:n}=e;return n||function(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(e.p,{children:["Use ",(0,r.jsx)(e.code,{children:"Calendar"})," component to create custom date pickers if ",(0,r.jsx)(e.a,{href:"/dates/date-picker/",children:"DatePicker"}),"\ncomponent does not meet your requirements. ",(0,r.jsx)(e.code,{children:"Calendar"})," supports all ",(0,r.jsx)(e.a,{href:"/dates/date-picker/",children:"DatePicker"}),"\nprops and some other props that are listed in props table – check it out to learn about all component features."]}),"\n",(0,r.jsxs)(e.p,{children:["By default, ",(0,r.jsx)(e.code,{children:"Calendar"})," works the same way as ",(0,r.jsx)(e.a,{href:"/dates/date-picker/",children:"DatePicker"})," component but does not\ninclude any logic of dates selection:"]}),"\n",(0,r.jsx)(n,{data:s}),"\n",(0,r.jsx)(e.h2,{id:"custom-date-pickers",children:"Custom date pickers"}),"\n",(0,r.jsxs)(e.p,{children:["Use ",(0,r.jsx)(e.code,{children:"Calendar"})," as a base for custom date pickers. For example, you can create a date picker\nthat allows user to pick three or less dates:"]}),"\n",(0,r.jsx)(n,{data:c}),"\n",(0,r.jsx)(e.p,{children:"Another custom date picker example – week picker:"}),"\n",(0,r.jsx)(n,{data:f}),"\n",(0,r.jsx)(e.h2,{id:"static-prop",children:"Static prop"}),"\n",(0,r.jsxs)(e.p,{children:["Set ",(0,r.jsx)(e.code,{children:"static"})," prop to display a calendar that user cannot interact with.\nIt is useful when you want to display data with in calendar view but do\nnot want it to be interactive."]}),"\n",(0,r.jsx)(n,{data:m})]})}function y(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(v,{...t,children:(0,r.jsx)(g,{...t})})}},77566:function(t,e,n){"use strict";n.d(e,{z:function(){return v}});var r=n(52322),a=n(58898);n(2784);var i=n(91482),s=n(11200),o=n(13588),u=n(39568),c=n(90006),d=n(38483),l=n(46690),f=n(28559),h=n(82027),m={root:"m_e5262200",indicator:"m_760d1fb1",processing:"m_885901b1"};let $={position:"top-end",offset:0,inline:!1,withBorder:!1,disabled:!1,processing:!1},p=(0,s.Z)((t,{color:e,position:n,offset:r,size:s,radius:d,zIndex:l,autoContrast:f})=>({root:{"--indicator-color":e?(0,o.p)(e,t):void 0,"--indicator-text-color":(0,c.o)(f,t)?(0,u.R)({color:e,theme:t,autoContrast:f}):void 0,"--indicator-size":(0,a.h)(s),"--indicator-radius":void 0===d?void 0:(0,i.H5)(d),"--indicator-z-index":l?.toString(),...function(t="top-end",e=0){let n={"--indicator-top":void 0,"--indicator-bottom":void 0,"--indicator-left":void 0,"--indicator-right":void 0,"--indicator-translate-x":void 0,"--indicator-translate-y":void 0},r=(0,a.h)(e),[i,s]=t.split("-");return"top"===i&&(n["--indicator-top"]=r,n["--indicator-translate-y"]="-50%"),"middle"===i&&(n["--indicator-top"]="50%",n["--indicator-translate-y"]="-50%"),"bottom"===i&&(n["--indicator-bottom"]=r,n["--indicator-translate-y"]="50%"),"start"===s&&(n["--indicator-left"]=r,n["--indicator-translate-x"]="-50%"),"center"===s&&(n["--indicator-left"]="50%",n["--indicator-translate-x"]="-50%"),"end"===s&&(n["--indicator-right"]=r,n["--indicator-translate-x"]="50%"),n}(n,r)}})),v=(0,h.d5)((t,e)=>{let n=(0,d.w)("Indicator",$,t),{classNames:a,className:i,style:s,styles:o,unstyled:u,vars:c,children:h,position:v,offset:g,inline:y,label:D,radius:S,color:M,withBorder:x,disabled:w,processing:O,zIndex:j,autoContrast:k,mod:C,...b}=n,_=(0,l.y)({name:"Indicator",classes:m,props:n,className:i,style:s,classNames:a,styles:o,unstyled:u,vars:c,varsResolver:p});return(0,r.jsxs)(f.x,{ref:e,..._("root"),mod:[{inline:y},C],...b,children:[!w&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(f.x,{mod:{"with-label":!!D,"with-border":x,processing:O},..._("indicator"),children:D})}),h]})});v.classes=m,v.displayName="@mantine/core/Indicator"}},function(t){t.O(0,[61177,66748,11340,11204,92888,49774,40179],function(){return t(t.s=30913)}),_N_E=t.O()}]);