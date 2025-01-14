(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[49381],{28879:function(e){var t;t=function(){"use strict";var e="millisecond",t="second",n="minute",r="hour",a="week",i="month",s="quarter",o="year",u="date",l="Invalid Date",c=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},h="en",m={};m[h]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||"th")+"]"}};var p="$isDayjsObject",y=function(e){return e instanceof D||!(!e||!e[p])},$=function e(t,n,r){var a;if(!t)return h;if("string"==typeof t){var i=t.toLowerCase();m[i]&&(a=i),n&&(m[i]=n,a=i);var s=t.split("-");if(!a&&s.length>1)return e(s[0])}else{var o=t.name;m[o]=t,a=o}return!r&&a&&(h=a),a||!r&&h},v=function(e,t){if(y(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new D(n)},g={s:f,z:function(e){var t=-e.utcOffset(),n=Math.abs(t);return(t<=0?"+":"-")+f(Math.floor(n/60),2,"0")+":"+f(n%60,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),a=t.clone().add(r,i),s=n-a<0,o=t.clone().add(r+(s?-1:1),i);return+(-(r+(n-a)/(s?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(l){return({M:i,y:o,w:a,d:"day",D:u,h:r,m:n,s:t,ms:e,Q:s})[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};g.l=$,g.i=y,g.w=function(e,t){return v(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function f(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[p]=!0}var h=f.prototype;return h.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(g.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(c);if(r){var a=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},h.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},h.$utils=function(){return g},h.isValid=function(){return this.$d.toString()!==l},h.isSame=function(e,t){var n=v(e);return this.startOf(t)<=n&&n<=this.endOf(t)},h.isAfter=function(e,t){return v(e)<this.startOf(t)},h.isBefore=function(e,t){return this.endOf(t)<v(e)},h.$g=function(e,t,n){return g.u(e)?this[t]:this.set(n,e)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(e,s){var l=this,c=!!g.u(s)||s,d=g.p(e),f=function(e,t){var n=g.w(l.$u?Date.UTC(l.$y,t,e):new Date(l.$y,t,e),l);return c?n:n.endOf("day")},h=function(e,t){return g.w(l.toDate()[e].apply(l.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),l)},m=this.$W,p=this.$M,y=this.$D,$="set"+(this.$u?"UTC":"");switch(d){case o:return c?f(1,0):f(31,11);case i:return c?f(1,p):f(0,p+1);case a:var v=this.$locale().weekStart||0,D=(m<v?m+7:m)-v;return f(c?y-D:y+(6-D),p);case"day":case u:return h($+"Hours",0);case r:return h($+"Minutes",1);case n:return h($+"Seconds",2);case t:return h($+"Milliseconds",3);default:return this.clone()}},h.endOf=function(e){return this.startOf(e,!1)},h.$set=function(a,s){var l,c=g.p(a),d="set"+(this.$u?"UTC":""),f=((l={}).day=d+"Date",l[u]=d+"Date",l[i]=d+"Month",l[o]=d+"FullYear",l[r]=d+"Hours",l[n]=d+"Minutes",l[t]=d+"Seconds",l[e]=d+"Milliseconds",l)[c],h="day"===c?this.$D+(s-this.$W):s;if(c===i||c===o){var m=this.clone().set(u,1);m.$d[f](h),m.init(),this.$d=m.set(u,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},h.set=function(e,t){return this.clone().$set(e,t)},h.get=function(e){return this[g.p(e)]()},h.add=function(e,s){var u,l=this;e=Number(e);var c=g.p(s),d=function(t){var n=v(l);return g.w(n.date(n.date()+Math.round(t*e)),l)};if(c===i)return this.set(i,this.$M+e);if(c===o)return this.set(o,this.$y+e);if("day"===c)return d(1);if(c===a)return d(7);var f=((u={})[n]=6e4,u[r]=36e5,u[t]=1e3,u)[c]||1,h=this.$d.getTime()+e*f;return g.w(h,this)},h.subtract=function(e,t){return this.add(-1*e,t)},h.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=e||"YYYY-MM-DDTHH:mm:ssZ",a=g.z(this),i=this.$H,s=this.$m,o=this.$M,u=n.weekdays,c=n.months,f=n.meridiem,h=function(e,n,a,i){return e&&(e[n]||e(t,r))||a[n].slice(0,i)},m=function(e){return g.s(i%12||12,e,"0")},p=f||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(d,function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return g.s(t.$y,4,"0");case"M":return o+1;case"MM":return g.s(o+1,2,"0");case"MMM":return h(n.monthsShort,o,c,3);case"MMMM":return h(c,o);case"D":return t.$D;case"DD":return g.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return h(n.weekdaysMin,t.$W,u,2);case"ddd":return h(n.weekdaysShort,t.$W,u,3);case"dddd":return u[t.$W];case"H":return String(i);case"HH":return g.s(i,2,"0");case"h":return m(1);case"hh":return m(2);case"a":return p(i,s,!0);case"A":return p(i,s,!1);case"m":return String(s);case"mm":return g.s(s,2,"0");case"s":return String(t.$s);case"ss":return g.s(t.$s,2,"0");case"SSS":return g.s(t.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")})},h.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},h.diff=function(e,u,l){var c,d=this,f=g.p(u),h=v(e),m=(h.utcOffset()-this.utcOffset())*6e4,p=this-h,y=function(){return g.m(d,h)};switch(f){case o:c=y()/12;break;case i:c=y();break;case s:c=y()/3;break;case a:c=(p-m)/6048e5;break;case"day":c=(p-m)/864e5;break;case r:c=p/36e5;break;case n:c=p/6e4;break;case t:c=p/1e3;break;default:c=p}return l?c:g.a(c)},h.daysInMonth=function(){return this.endOf(i).$D},h.$locale=function(){return m[this.$L]},h.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=$(e,t,!0);return r&&(n.$L=r),n},h.clone=function(){return g.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},f}(),x=D.prototype;return v.prototype=x,[["$ms",e],["$s",t],["$m",n],["$H",r],["$W","day"],["$M",i],["$y",o],["$D",u]].forEach(function(e){x[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),v.extend=function(e,t){return e.$i||(e(t,D,v),e.$i=!0),v},v.locale=$,v.isDayjs=y,v.unix=function(e){return v(1e3*e)},v.en=m[h],v.Ls=m,v.p={},v},e.exports=t()},66653:function(e){var t;t=function(){return function(e,t,n){var r=function(e){return e.add(4-e.isoWeekday(),"day")},a=t.prototype;a.isoWeekYear=function(){return r(this).year()},a.isoWeek=function(e){if(!this.$utils().u(e))return this.add(7*(e-this.isoWeek()),"day");var t,a,i,s=r(this),o=(t=this.isoWeekYear(),i=4-(a=(this.$u?n.utc:n)().year(t).startOf("year")).isoWeekday(),a.isoWeekday()>4&&(i+=7),a.add(i,"day"));return s.diff(o,"week")+1},a.isoWeekday=function(e){return this.$utils().u(e)?this.day()||7:this.day(this.day()%7?e:e-7)};var i=a.startOf;a.startOf=function(e,t){var n=this.$utils(),r=!!n.u(t)||t;return"isoweek"===n.p(e)?r?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):i.bind(this)(e,t)}}},e.exports=t()},67338:function(e){var t;t=function(){"use strict";var e={year:0,month:1,day:2,hour:3,minute:4,second:5},t={};return function(n,r,a){var i,s=function(e,n,r){void 0===r&&(r={});var a,i,s,o,u=new Date(e);return(void 0===(a=r)&&(a={}),(o=t[s=n+"|"+(i=a.timeZoneName||"short")])||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:n,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:i}),t[s]=o),o).formatToParts(u)},o=function(t,n){for(var r=s(t,n),i=[],o=0;o<r.length;o+=1){var u=r[o],l=u.type,c=u.value,d=e[l];d>=0&&(i[d]=parseInt(c,10))}var f=i[3],h=i[0]+"-"+i[1]+"-"+i[2]+" "+(24===f?0:f)+":"+i[4]+":"+i[5]+":000",m=+t;return(a.utc(h).valueOf()-(m-=m%1e3))/6e4},u=r.prototype;u.tz=function(e,t){void 0===e&&(e=i);var n,r=this.utcOffset(),s=this.toDate(),o=s.toLocaleString("en-US",{timeZone:e}),u=Math.round((s-new Date(o))/1e3/60),l=-(15*Math.round(s.getTimezoneOffset()/15))-u;if(Number(l)){if(n=a(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(l,!0),t){var c=n.utcOffset();n=n.add(r-c,"minute")}}else n=this.utcOffset(0,t);return n.$x.$timezone=e,n},u.offsetName=function(e){var t=this.$x.$timezone||a.tz.guess(),n=s(this.valueOf(),t,{timeZoneName:e}).find(function(e){return"timezonename"===e.type.toLowerCase()});return n&&n.value};var l=u.startOf;u.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var n=a(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return l.call(n,e,t).tz(this.$x.$timezone,!0)},a.tz=function(e,t,n){var r=n&&t,s=n||t||i,u=o(+a(),s);if("string"!=typeof e)return a(e).tz(s);var l=function(e,t,n){var r=e-60*t*1e3,a=o(r,n);if(t===a)return[r,t];var i=o(r-=60*(a-t)*1e3,n);return a===i?[r,a]:[e-60*Math.min(a,i)*1e3,Math.max(a,i)]}(a.utc(e,r).valueOf(),u,s),c=l[0],d=l[1],f=a(c).utcOffset(d);return f.$x.$timezone=s,f},a.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},a.tz.setDefault=function(e){i=e}}},e.exports=t()},10264:function(e){var t;t=function(){"use strict";var e="minute",t=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g;return function(r,a,i){var s=a.prototype;i.utc=function(e){var t={date:e,utc:!0,args:arguments};return new a(t)},s.utc=function(t){var n=i(this.toDate(),{locale:this.$L,utc:!0});return t?n.add(this.utcOffset(),e):n},s.local=function(){return i(this.toDate(),{locale:this.$L,utc:!1})};var o=s.parse;s.parse=function(e){e.utc&&(this.$u=!0),this.$utils().u(e.$offset)||(this.$offset=e.$offset),o.call(this,e)};var u=s.init;s.init=function(){if(this.$u){var e=this.$d;this.$y=e.getUTCFullYear(),this.$M=e.getUTCMonth(),this.$D=e.getUTCDate(),this.$W=e.getUTCDay(),this.$H=e.getUTCHours(),this.$m=e.getUTCMinutes(),this.$s=e.getUTCSeconds(),this.$ms=e.getUTCMilliseconds()}else u.call(this)};var l=s.utcOffset;s.utcOffset=function(r,a){var i=this.$utils().u;if(i(r))return this.$u?0:i(this.$offset)?l.call(this):this.$offset;if("string"==typeof r&&null===(r=function(e){void 0===e&&(e="");var r=e.match(t);if(!r)return null;var a=(""+r[0]).match(n)||["-",0,0],i=a[0],s=60*+a[1]+ +a[2];return 0===s?0:"+"===i?s:-s}(r)))return this;var s=16>=Math.abs(r)?60*r:r,o=this;if(a)return o.$offset=s,o.$u=0===r,o;if(0!==r){var u=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(o=this.local().add(s+u,e)).$offset=s,o.$x.$localOffset=u}else o=this.utc();return o};var c=s.format;s.format=function(e){var t=e||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return c.call(this,t)},s.valueOf=function(){var e=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*e},s.isUTC=function(){return!!this.$u},s.toISOString=function(){return this.toDate().toISOString()},s.toString=function(){return this.toDate().toUTCString()};var d=s.toDate;s.toDate=function(e){return"s"===e&&this.$offset?i(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():d.call(this)};var f=s.diff;s.diff=function(e,t,n){if(e&&this.$u===e.$u)return f.call(this,e,t,n);var r=this.local(),a=i(e).local();return f.call(r,a,t,n)}}},e.exports=t()},81533:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dates/getting-started",function(){return n(56760)}])},56760:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(52322),a=n(45392),i=n(65328),s=n(71812),o=n(54078),u=n(15019);let l=(0,o.A)(u.us.GettingStartedDates);function c(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Demo:n,InstallScript:o}=t;return n||f("Demo",!0),o||f("InstallScript",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(o,{packages:"@mantine/dates dayjs"}),"\n",(0,r.jsx)(t.p,{children:"After installation import package styles at the root of your application:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import '@mantine/dates/styles.css';\n"})}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:["After installing ",(0,r.jsx)(t.code,{children:"@mantine/dates"})," package and importing styles, you can use all components from it:"]}),"\n",(0,r.jsx)(n,{data:i.j_}),"\n",(0,r.jsx)(t.h2,{id:"dayjs",children:"dayjs"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"@mantine/dates"})," components use ",(0,r.jsx)(t.a,{href:"https://day.js.org/",children:"dayjs"})," under the hood for date manipulations and formatting.\ndayjs is a required dependency – you cannot change it to another date library. If you want to use a different\ndate library in your application, you will need to install it separately."]}),"\n",(0,r.jsx)(t.h2,{id:"consistent-weeks",children:"Consistent weeks"}),"\n",(0,r.jsxs)(t.p,{children:["If you want to avoid layout shifts, set ",(0,r.jsx)(t.code,{children:"consistentWeeks: true"})," in ",(0,r.jsx)(t.code,{children:"DatesProvider"})," settings.\nThis will make sure that every month has 6 weeks, even if outside days are not in the same month."]}),"\n",(0,r.jsx)(n,{data:s.U}),"\n",(0,r.jsx)(t.h2,{id:"custom-parse-format",children:"Custom parse format"}),"\n",(0,r.jsxs)(t.p,{children:["Some components like ",(0,r.jsx)(t.a,{href:"/dates/date-input",children:"DateInput"})," require ",(0,r.jsx)(t.a,{href:"https://day.js.org/docs/en/plugin/custom-parse-format",children:"custom parse format"}),"\ndayjs plugin. You need to extend dayjs with this plugin before using components that require it. Note that\nit is usually done once in your application root file, so you don't need to do it every time you use component."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import dayjs from 'dayjs';\nimport customParseFormat from 'dayjs/plugin/customParseFormat';\n\ndayjs.extend(customParseFormat);\n"})}),"\n",(0,r.jsx)(t.h2,{id:"localization-and-server-components",children:"Localization and server components"}),"\n",(0,r.jsxs)(t.p,{children:["To add localization you must import ",(0,r.jsx)(t.code,{children:"import 'dayjs/locale/x';"})," in your application (",(0,r.jsx)(t.code,{children:"x"})," is locale name)\nand set ",(0,r.jsx)(t.code,{children:"locale"})," either on ",(0,r.jsx)(t.a,{href:"/dates/dates-provider",children:"DatesProvider"})," or on each component individually."]}),"\n",(0,r.jsx)(t.p,{children:"Example of setting locale on DatesProvider:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import 'dayjs/locale/ru';\n\nimport { DatesProvider } from '@mantine/dates';\n\nfunction Demo() {\n  return (\n    <DatesProvider settings={{ locale: 'ru' }}>\n      {/* Your app  */}\n    </DatesProvider>\n  );\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The code above works in all environments, except Next.js app router.\nIf you are using Next.js app router, you must add ",(0,r.jsx)(t.code,{children:"'use client';"})," to the\ntop of the file where you are importing ",(0,r.jsx)(t.code,{children:"dayjs/locale/x"})," – locale data\nis required both on client and server."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"'use client';\n\nimport 'dayjs/locale/ru';\n\nimport { DatesProvider } from '@mantine/dates';\n\nfunction Demo() {\n  return (\n    <DatesProvider settings={{ locale: 'ru' }}>\n      {/* Your app  */}\n    </DatesProvider>\n  );\n}\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(l,{...e,children:(0,r.jsx)(c,{...e})})}function f(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},65328:function(e,t,n){"use strict";n.d(t,{$S:function(){return c},gB:function(){return o},j_:function(){return a},m6:function(){return i},oC:function(){return u},qv:function(){return l},w6:function(){return s},wD:function(){return d}});var r=n(18738);n(52322),n(2784);let{usage:a,multiple:i,range:s,configurator:o,modal:u,icon:l,clearable:c,valueFormatter:d}=(0,n(42411).B)(r.a)},71812:function(e,t,n){"use strict";n.d(t,{U:function(){return s}});var r=n(52322),a=n(92014),i=n(95488);let s={type:"code",component:function(){return(0,r.jsx)(a.wf,{settings:{consistentWeeks:!0},children:(0,r.jsx)(i.M,{})})},code:`
import { DatePicker, DatesProvider } from '@mantine/dates';

function Demo() {
  return (
    <DatesProvider settings={{ consistentWeeks: true }}>
      <DatePicker />
    </DatesProvider>
  );
}
`,centered:!0}},42411:function(e,t,n){"use strict";n.d(t,{B:function(){return y}});var r=n(52322);let a=e=>`
import { ${e} } from '@mantine/dates';

function Demo() {
  return (
    <${e}
      clearable
      defaultValue={new Date()}
      label="Pick date"
      placeholder="Pick date"
    />
  );
}
`,i=e=>`import { ${e} } from '@mantine/dates';


function Demo() {
  return (
    <${e}
      {{props}}
    />
  );
}
`;var s=n(2784),o=n(11868);let u=e=>`
import { useState } from 'react';
import { IconCalendar } from '@tabler/icons-react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  const icon = <IconCalendar size={18} stroke={1.5} />;
  return (
    <${e}
      leftSection={<IconCalendar size={18} stroke={1.5} />}
      leftSectionPointerEvents="none"
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`,l=e=>`
import { useState } from 'react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <${e}
      dropdownType="modal"
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`,c=e=>`
import { useState } from 'react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date[]>([]);
  return (
    <${e}
      type="multiple"
      label="Pick dates"
      placeholder="Pick dates"
      value={value}
      onChange={setValue}
    />
  );
}
`,d=e=>`
import { useState } from 'react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <${e}
      type="range"
      label="Pick dates range"
      placeholder="Pick dates range"
      value={value}
      onChange={setValue}
    />
  );
}
`,f=e=>`
import { useState } from 'react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <${e}
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`;var h=n(28879);let m=e=>`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ${e}, DateFormatter } from '@mantine/dates';

const formatter: DateFormatter = ({ type, date, locale, format }) => {
  if (type === 'multiple' && Array.isArray(date)) {
    if (date.length === 1) {
      return dayjs(date[0]).locale(locale).format(format);
    }

    if (date.length > 1) {
      return \`\${date.length} dates selected\`;
    }

    return '';
  }

  return '';
};

function Demo() {
  const [value, setValue] = useState<Date[]>([]);

  return (
    <${e}
      label="Pick 2 dates or more"
      placeholder="Pick 2 dates or more"
      value={value}
      onChange={setValue}
      type="multiple"
      valueFormatter={formatter}
    />
  );
}
`,p=({type:e,date:t,locale:n,format:r})=>{if("multiple"===e&&Array.isArray(t)){if(1===t.length)return h(t[0]).locale(n).format(r);if(t.length>1)return`${t.length} dates selected`}return""};function y(e){return{usage:{type:"code",centered:!0,maxWidth:400,code:f(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,s.useState)(null);return(0,r.jsx)(e,{label:"Pick date",placeholder:"Pick date",value:t,onChange:n})}},multiple:{type:"code",centered:!0,maxWidth:400,code:c(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,s.useState)([]);return(0,r.jsx)(e,{type:"multiple",label:"Pick dates",placeholder:"Pick dates",value:t,onChange:n})}},range:{type:"code",centered:!0,maxWidth:400,code:d(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,s.useState)([null,null]);return(0,r.jsx)(e,{type:"range",label:"Pick dates range",placeholder:"Pick dates range",value:t,onChange:n})}},configurator:{type:"configurator",component:e,centered:!0,maxWidth:400,code:i(e.displayName.replace("@mantine/dates/","")),controls:[{prop:"placeholder",type:"string",initialValue:"Pick date",libraryValue:"__"},{prop:"label",type:"string",initialValue:"Pick date",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"variant",type:"select",data:[{label:"default",value:"default"},{label:"filled",value:"filled"},{label:"unstyled",value:"unstyled"}],initialValue:"default",libraryValue:"default"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]},modal:{type:"code",centered:!0,maxWidth:400,code:l(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,s.useState)(null);return(0,r.jsx)(e,{dropdownType:"modal",label:"Pick date",placeholder:"Pick date",value:t,onChange:n})}},icon:{type:"code",centered:!0,maxWidth:400,code:u(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,s.useState)(null);return(0,r.jsx)(e,{leftSection:(0,r.jsx)(o.Z,{size:18,stroke:1.5}),leftSectionPointerEvents:"none",label:"Pick date",placeholder:"Pick date",value:t,onChange:n})}},clearable:{type:"code",centered:!0,maxWidth:400,code:a(e.displayName.replace("@mantine/dates/","")),component:()=>(0,r.jsx)(e,{clearable:!0,defaultValue:new Date,label:"Pick date",placeholder:"Pick date"})},valueFormatter:{type:"code",centered:!0,maxWidth:400,code:m(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,s.useState)([]);return(0,r.jsx)(e,{label:"Pick 2 dates or more",placeholder:"Pick 2 dates or more",value:t,onChange:n,type:"multiple",valueFormatter:p})}}}}}},function(e){e.O(0,[61177,66748,61639,45953,18738,92888,49774,40179],function(){return e(e.s=81533)}),_N_E=e.O()}]);