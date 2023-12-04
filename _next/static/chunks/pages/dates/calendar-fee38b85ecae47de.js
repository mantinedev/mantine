(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7025],{27693:function(t){var e,n,r,a,i,s,o,u,c,d,l,f,h,m,$,p,g,v,y,D,S,M;t.exports=(e="millisecond",n="second",r="minute",a="hour",i="week",s="month",o="quarter",u="year",c="date",d="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},($={})[m="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||"th")+"]"}},p="$isDayjsObject",g=function(t){return t instanceof S||!(!t||!t[p])},v=function t(e,n,r){var a;if(!e)return m;if("string"==typeof e){var i=e.toLowerCase();$[i]&&(a=i),n&&($[i]=n,a=i);var s=e.split("-");if(!a&&s.length>1)return t(s[0])}else{var o=e.name;$[o]=e,a=o}return!r&&a&&(m=a),a||!r&&m},y=function(t,e){if(g(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},(D={s:h,z:function(t){var e=-t.utcOffset(),n=Math.abs(e);return(e<=0?"+":"-")+h(Math.floor(n/60),2,"0")+":"+h(n%60,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),a=e.clone().add(r,s),i=n-a<0,o=e.clone().add(r+(i?-1:1),s);return+(-(r+(n-a)/(i?a-o:o-a))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return({M:s,y:u,w:i,d:"day",D:c,h:a,m:r,s:n,ms:e,Q:o})[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}}).l=v,D.i=g,D.w=function(t,e){return y(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})},M=(S=function(){function t(t){this.$L=v(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0}var h=t.prototype;return h.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var a=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(e)}(t),this.init()},h.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},h.$utils=function(){return D},h.isValid=function(){return this.$d.toString()!==d},h.isSame=function(t,e){var n=y(t);return this.startOf(e)<=n&&n<=this.endOf(e)},h.isAfter=function(t,e){return y(t)<this.startOf(e)},h.isBefore=function(t,e){return this.endOf(e)<y(t)},h.$g=function(t,e,n){return D.u(t)?this[e]:this.set(n,t)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,e){var o=this,d=!!D.u(e)||e,l=D.p(t),f=function(t,e){var n=D.w(o.$u?Date.UTC(o.$y,e,t):new Date(o.$y,e,t),o);return d?n:n.endOf("day")},h=function(t,e){return D.w(o.toDate()[t].apply(o.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),o)},m=this.$W,$=this.$M,p=this.$D,g="set"+(this.$u?"UTC":"");switch(l){case u:return d?f(1,0):f(31,11);case s:return d?f(1,$):f(0,$+1);case i:var v=this.$locale().weekStart||0,y=(m<v?m+7:m)-v;return f(d?p-y:p+(6-y),$);case"day":case c:return h(g+"Hours",0);case a:return h(g+"Minutes",1);case r:return h(g+"Seconds",2);case n:return h(g+"Milliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(t,i){var o,d=D.p(t),l="set"+(this.$u?"UTC":""),f=((o={}).day=l+"Date",o[c]=l+"Date",o[s]=l+"Month",o[u]=l+"FullYear",o[a]=l+"Hours",o[r]=l+"Minutes",o[n]=l+"Seconds",o[e]=l+"Milliseconds",o)[d],h="day"===d?this.$D+(i-this.$W):i;if(d===s||d===u){var m=this.clone().set(c,1);m.$d[f](h),m.init(),this.$d=m.set(c,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},h.set=function(t,e){return this.clone().$set(t,e)},h.get=function(t){return this[D.p(t)]()},h.add=function(t,e){var o,c=this;t=Number(t);var d=D.p(e),l=function(e){var n=y(c);return D.w(n.date(n.date()+Math.round(e*t)),c)};if(d===s)return this.set(s,this.$M+t);if(d===u)return this.set(u,this.$y+t);if("day"===d)return l(1);if(d===i)return l(7);var f=((o={})[r]=6e4,o[a]=36e5,o[n]=1e3,o)[d]||1,h=this.$d.getTime()+t*f;return D.w(h,this)},h.subtract=function(t,e){return this.add(-1*t,e)},h.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",a=D.z(this),i=this.$H,s=this.$m,o=this.$M,u=n.weekdays,c=n.months,l=n.meridiem,h=function(t,n,a,i){return t&&(t[n]||t(e,r))||a[n].slice(0,i)},m=function(t){return D.s(i%12||12,t,"0")},$=l||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(f,function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return D.s(e.$y,4,"0");case"M":return o+1;case"MM":return D.s(o+1,2,"0");case"MMM":return h(n.monthsShort,o,c,3);case"MMMM":return h(c,o);case"D":return e.$D;case"DD":return D.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,u,2);case"ddd":return h(n.weekdaysShort,e.$W,u,3);case"dddd":return u[e.$W];case"H":return String(i);case"HH":return D.s(i,2,"0");case"h":return m(1);case"hh":return m(2);case"a":return $(i,s,!0);case"A":return $(i,s,!1);case"m":return String(s);case"mm":return D.s(s,2,"0");case"s":return String(e.$s);case"ss":return D.s(e.$s,2,"0");case"SSS":return D.s(e.$ms,3,"0");case"Z":return a}return null}(t)||a.replace(":","")})},h.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},h.diff=function(t,e,c){var d,l=this,f=D.p(e),h=y(t),m=(h.utcOffset()-this.utcOffset())*6e4,$=this-h,p=function(){return D.m(l,h)};switch(f){case u:d=p()/12;break;case s:d=p();break;case o:d=p()/3;break;case i:d=($-m)/6048e5;break;case"day":d=($-m)/864e5;break;case a:d=$/36e5;break;case r:d=$/6e4;break;case n:d=$/1e3;break;default:d=$}return c?d:D.a(d)},h.daysInMonth=function(){return this.endOf(s).$D},h.$locale=function(){return $[this.$L]},h.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=v(t,e,!0);return r&&(n.$L=r),n},h.clone=function(){return D.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},t}()).prototype,y.prototype=M,[["$ms",e],["$s",n],["$m",r],["$H",a],["$W","day"],["$M",s],["$y",u],["$D",c]].forEach(function(t){M[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),y.extend=function(t,e){return t.$i||(t(e,S,y),t.$i=!0),y},y.locale=v,y.isDayjs=g,y.unix=function(t){return y(1e3*t)},y.en=$[m],y.Ls=$,y.p={},y)},12197:function(t){var e,n;t.exports=(e={year:0,month:1,day:2,hour:3,minute:4,second:5},n={},function(t,r,a){var i,s=function(t,e,r){void 0===r&&(r={});var a,i,s,o,u=new Date(t);return(void 0===(a=r)&&(a={}),(o=n[s=e+"|"+(i=a.timeZoneName||"short")])||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:i}),n[s]=o),o).formatToParts(u)},o=function(t,n){for(var r=s(t,n),i=[],o=0;o<r.length;o+=1){var u=r[o],c=u.type,d=u.value,l=e[c];l>=0&&(i[l]=parseInt(d,10))}var f=i[3],h=i[0]+"-"+i[1]+"-"+i[2]+" "+(24===f?0:f)+":"+i[4]+":"+i[5]+":000",m=+t;return(a.utc(h).valueOf()-(m-=m%1e3))/6e4},u=r.prototype;u.tz=function(t,e){void 0===t&&(t=i);var n=this.utcOffset(),r=this.toDate(),s=r.toLocaleString("en-US",{timeZone:t}),o=Math.round((r-new Date(s))/1e3/60),u=a(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(-(15*Math.round(r.getTimezoneOffset()/15))-o,!0);if(e){var c=u.utcOffset();u=u.add(n-c,"minute")}return u.$x.$timezone=t,u},u.offsetName=function(t){var e=this.$x.$timezone||a.tz.guess(),n=s(this.valueOf(),e,{timeZoneName:t}).find(function(t){return"timezonename"===t.type.toLowerCase()});return n&&n.value};var c=u.startOf;u.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return c.call(this,t,e);var n=a(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return c.call(n,t,e).tz(this.$x.$timezone,!0)},a.tz=function(t,e,n){var r=n&&e,s=n||e||i,u=o(+a(),s);if("string"!=typeof t)return a(t).tz(s);var c=function(t,e,n){var r=t-60*e*1e3,a=o(r,n);if(e===a)return[r,e];var i=o(r-=60*(a-e)*1e3,n);return a===i?[r,a]:[t-60*Math.min(a,i)*1e3,Math.max(a,i)]}(a.utc(t,r).valueOf(),u,s),d=c[0],l=c[1],f=a(d).utcOffset(l);return f.$x.$timezone=s,f},a.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},a.tz.setDefault=function(t){i=t}})},96600:function(t){var e,n,r;t.exports=(e="minute",n=/[+-]\d\d(?::?\d\d)?/g,r=/([+-]|\d\d)/g,function(t,a,i){var s=a.prototype;i.utc=function(t){var e={date:t,utc:!0,args:arguments};return new a(e)},s.utc=function(t){var n=i(this.toDate(),{locale:this.$L,utc:!0});return t?n.add(this.utcOffset(),e):n},s.local=function(){return i(this.toDate(),{locale:this.$L,utc:!1})};var o=s.parse;s.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),o.call(this,t)};var u=s.init;s.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else u.call(this)};var c=s.utcOffset;s.utcOffset=function(t,a){var i=this.$utils().u;if(i(t))return this.$u?0:i(this.$offset)?c.call(this):this.$offset;if("string"==typeof t&&null===(t=function(t){void 0===t&&(t="");var e=t.match(n);if(!e)return null;var a=(""+e[0]).match(r)||["-",0,0],i=a[0],s=60*+a[1]+ +a[2];return 0===s?0:"+"===i?s:-s}(t)))return this;var s=16>=Math.abs(t)?60*t:t,o=this;if(a)return o.$offset=s,o.$u=0===t,o;if(0!==t){var u=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(o=this.local().add(s+u,e)).$offset=s,o.$x.$localOffset=u}else o=this.utc();return o};var d=s.format;s.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return d.call(this,e)},s.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},s.isUTC=function(){return!!this.$u},s.toISOString=function(){return this.toDate().toISOString()},s.toString=function(){return this.toDate().toUTCString()};var l=s.toDate;s.toDate=function(t){return"s"===t&&this.$offset?i(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():l.call(this)};var f=s.diff;s.diff=function(t,e,n){if(t&&this.$u===t.$u)return f.call(this,t,e,n);var r=this.local(),a=i(t).local();return f.call(r,a,e,n)}})},62650:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dates/calendar",function(){return n(22871)}])},22871:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return w}});var r=n(24246),a=n(71670),i=n(3916),s=n(30289),o=n(27378),u=n(53993);let c=`
import { Calendar } from '@mantine/dates';

function Demo() {
  return <Calendar />;
}
`,d={type:"code",centered:!0,component:function(){return o.createElement(u.f,null)},code:c};var l=n(27693);let f=`
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
`,h={type:"code",centered:!0,component:function(){let[t,e]=(0,o.useState)([]),n=n=>{let r=t.some(t=>l(n).isSame(t,"date"));r?e(t=>t.filter(t=>!l(t).isSame(n,"date"))):t.length<3&&e(t=>[...t,n])};return o.createElement(u.f,{getDayProps:e=>({selected:t.some(t=>l(e).isSame(t,"date")),onClick:()=>n(e)})})},code:f},m=`
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
`;function $(t){let e=t.getDay();return 0===e?6:e-1}function p(t,e){return!!e&&l(t).isBefore(l(new Date(e.getFullYear(),e.getMonth(),e.getDate()+(6-$(e)))).endOf("date").toDate())&&l(t).isAfter(new Date(e.getFullYear(),e.getMonth(),e.getDate()-$(e)-1))}let g={type:"code",centered:!0,component:function(){let[t,e]=(0,o.useState)(null),[n,r]=(0,o.useState)(null);return o.createElement(u.f,{withCellSpacing:!1,getDayProps:a=>{let i=p(a,t),s=p(a,n),o=i||s;return{onMouseEnter:()=>e(a),onMouseLeave:()=>e(null),inRange:o,firstInRange:o&&1===a.getDay(),lastInRange:o&&0===a.getDay(),selected:s,onClick:()=>r(a)}}})},code:m};var v=n(87121);let y=`
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
`,D={type:"code",centered:!0,component:function(){return o.createElement(u.f,{static:!0,renderDay:t=>{let e=t.getDate();return o.createElement(v.z,{size:6,color:"red",offset:-2,disabled:16!==e},o.createElement("div",null,e))}})},code:y},S=(0,i.A)(s.us.Calendar);function M(t){let e={a:"a",code:"code",h2:"h2",p:"p",...(0,a.a)(),...t.components},{Demo:n}=e;return n||function(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(e.p,{children:["Use ",(0,r.jsx)(e.code,{children:"Calendar"})," component to create custom date pickers if ",(0,r.jsx)(e.a,{href:"/dates/date-picker/",children:"DatePicker"}),"\ncomponent does not meet your requirements. ",(0,r.jsx)(e.code,{children:"Calendar"})," supports all ",(0,r.jsx)(e.a,{href:"/dates/date-picker/",children:"DatePicker"}),"\nprops and some other props that are listed in props table – check it out to learn about all component features."]}),"\n",(0,r.jsxs)(e.p,{children:["By default, ",(0,r.jsx)(e.code,{children:"Calendar"})," works the same way as ",(0,r.jsx)(e.a,{href:"/dates/date-picker/",children:"DatePicker"})," component but does not\ninclude any logic of dates selection:"]}),"\n",(0,r.jsx)(n,{data:d}),"\n",(0,r.jsx)(e.h2,{id:"custom-date-pickers",children:"Custom date pickers"}),"\n",(0,r.jsxs)(e.p,{children:["Use ",(0,r.jsx)(e.code,{children:"Calendar"})," as a base for custom date pickers. For example, you can create a date picker\nthat allows user to pick three or less dates:"]}),"\n",(0,r.jsx)(n,{data:h}),"\n",(0,r.jsx)(e.p,{children:"Another custom date picker example – week picker:"}),"\n",(0,r.jsx)(n,{data:g}),"\n",(0,r.jsx)(e.h2,{id:"static-prop",children:"Static prop"}),"\n",(0,r.jsxs)(e.p,{children:["Set ",(0,r.jsx)(e.code,{children:"static"})," prop to display a calendar that user cannot interact with.\nIt is useful when you want to display data with in calendar view but do\nnot want it to be interactive."]}),"\n",(0,r.jsx)(n,{data:D})]})}function w(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(S,{...t,children:(0,r.jsx)(M,{...t})})}},87121:function(t,e,n){"use strict";n.d(e,{z:function(){return $}});var r=n(27378),a=n(71078),i=n(92082),s=n(83453),o=n(89738),u=n(96739),c=n(6231),d=n(56589),l=n(20410),f={root:"m-e5262200",indicator:"m-760d1fb1",processing:"m-885901b1"};let h={position:"top-end",offset:0,inline:!1,withBorder:!1,disabled:!1,processing:!1},m=(0,s.Z)((t,{color:e,position:n,offset:r,size:s,radius:u,zIndex:c})=>({root:{"--indicator-color":e?(0,o.p)(e,t):void 0,"--indicator-size":(0,a.h)(s),"--indicator-radius":void 0===u?void 0:(0,i.H5)(u),"--indicator-z-index":c?.toString(),...function(t="top-end",e=0){let n={"--indicator-top":void 0,"--indicator-bottom":void 0,"--indicator-left":void 0,"--indicator-right":void 0,"--indicator-translate-x":void 0,"--indicator-translate-y":void 0},r=(0,a.h)(e),[i,s]=t.split("-");return"top"===i&&(n["--indicator-top"]=r,n["--indicator-translate-y"]="-50%"),"middle"===i&&(n["--indicator-top"]="50%",n["--indicator-translate-y"]="-50%"),"bottom"===i&&(n["--indicator-bottom"]=r,n["--indicator-translate-y"]="50%"),"start"===s&&(n["--indicator-left"]=r,n["--indicator-translate-x"]="-50%"),"center"===s&&(n["--indicator-left"]="50%",n["--indicator-translate-x"]="-50%"),"end"===s&&(n["--indicator-right"]=r,n["--indicator-translate-x"]="50%"),n}(n,r)}})),$=(0,l.d)((t,e)=>{let n=(0,u.w)("Indicator",h,t),{classNames:a,className:i,style:s,styles:o,unstyled:l,vars:$,children:p,position:g,offset:v,inline:y,label:D,radius:S,color:M,withBorder:w,disabled:O,processing:x,zIndex:k,...C}=n,b=(0,c.y)({name:"Indicator",classes:f,props:n,className:i,style:s,classNames:a,styles:o,unstyled:l,vars:$,varsResolver:m});return r.createElement(d.x,{ref:e,...b("root"),mod:{inline:y},...C},!O&&r.createElement(r.Fragment,null,r.createElement(d.x,{mod:{"with-label":!!D,"with-border":w,processing:x},...b("indicator")},D)),p)});$.classes=f,$.displayName="@mantine/core/Indicator"}},function(t){t.O(0,[370,5819,2775,7082,9774,2888,179],function(){return t(t.s=62650)}),_N_E=t.O()}]);