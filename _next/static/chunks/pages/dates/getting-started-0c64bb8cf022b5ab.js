(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[49381],{28879:function(e){var t,n,r,a,i,s,o,u,l,c,d,f,h,m,p,y,$,v,g,D,x,S;e.exports=(t="millisecond",n="second",r="minute",a="hour",i="week",s="month",o="quarter",u="year",l="date",c="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},(p={})[m="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||"th")+"]"}},y="$isDayjsObject",$=function(e){return e instanceof x||!(!e||!e[y])},v=function e(t,n,r){var a;if(!t)return m;if("string"==typeof t){var i=t.toLowerCase();p[i]&&(a=i),n&&(p[i]=n,a=i);var s=t.split("-");if(!a&&s.length>1)return e(s[0])}else{var o=t.name;p[o]=t,a=o}return!r&&a&&(m=a),a||!r&&m},g=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new x(n)},(D={s:h,z:function(e){var t=-e.utcOffset(),n=Math.abs(t);return(t<=0?"+":"-")+h(Math.floor(n/60),2,"0")+":"+h(n%60,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),a=t.clone().add(r,s),i=n-a<0,o=t.clone().add(r+(i?-1:1),s);return+(-(r+(n-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return({M:s,y:u,w:i,d:"day",D:l,h:a,m:r,s:n,ms:t,Q:o})[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}}).l=v,D.i=$,D.w=function(e,t){return g(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})},S=(x=function(){function e(e){this.$L=v(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[y]=!0}var h=e.prototype;return h.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(d);if(r){var a=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},h.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},h.$utils=function(){return D},h.isValid=function(){return this.$d.toString()!==c},h.isSame=function(e,t){var n=g(e);return this.startOf(t)<=n&&n<=this.endOf(t)},h.isAfter=function(e,t){return g(e)<this.startOf(t)},h.isBefore=function(e,t){return this.endOf(t)<g(e)},h.$g=function(e,t,n){return D.u(e)?this[t]:this.set(n,e)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(e,t){var o=this,c=!!D.u(t)||t,d=D.p(e),f=function(e,t){var n=D.w(o.$u?Date.UTC(o.$y,t,e):new Date(o.$y,t,e),o);return c?n:n.endOf("day")},h=function(e,t){return D.w(o.toDate()[e].apply(o.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),o)},m=this.$W,p=this.$M,y=this.$D,$="set"+(this.$u?"UTC":"");switch(d){case u:return c?f(1,0):f(31,11);case s:return c?f(1,p):f(0,p+1);case i:var v=this.$locale().weekStart||0,g=(m<v?m+7:m)-v;return f(c?y-g:y+(6-g),p);case"day":case l:return h($+"Hours",0);case a:return h($+"Minutes",1);case r:return h($+"Seconds",2);case n:return h($+"Milliseconds",3);default:return this.clone()}},h.endOf=function(e){return this.startOf(e,!1)},h.$set=function(e,i){var o,c=D.p(e),d="set"+(this.$u?"UTC":""),f=((o={}).day=d+"Date",o[l]=d+"Date",o[s]=d+"Month",o[u]=d+"FullYear",o[a]=d+"Hours",o[r]=d+"Minutes",o[n]=d+"Seconds",o[t]=d+"Milliseconds",o)[c],h="day"===c?this.$D+(i-this.$W):i;if(c===s||c===u){var m=this.clone().set(l,1);m.$d[f](h),m.init(),this.$d=m.set(l,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},h.set=function(e,t){return this.clone().$set(e,t)},h.get=function(e){return this[D.p(e)]()},h.add=function(e,t){var o,l=this;e=Number(e);var c=D.p(t),d=function(t){var n=g(l);return D.w(n.date(n.date()+Math.round(t*e)),l)};if(c===s)return this.set(s,this.$M+e);if(c===u)return this.set(u,this.$y+e);if("day"===c)return d(1);if(c===i)return d(7);var f=((o={})[r]=6e4,o[a]=36e5,o[n]=1e3,o)[c]||1,h=this.$d.getTime()+e*f;return D.w(h,this)},h.subtract=function(e,t){return this.add(-1*e,t)},h.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||c;var r=e||"YYYY-MM-DDTHH:mm:ssZ",a=D.z(this),i=this.$H,s=this.$m,o=this.$M,u=n.weekdays,l=n.months,d=n.meridiem,h=function(e,n,a,i){return e&&(e[n]||e(t,r))||a[n].slice(0,i)},m=function(e){return D.s(i%12||12,e,"0")},p=d||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(f,function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return D.s(t.$y,4,"0");case"M":return o+1;case"MM":return D.s(o+1,2,"0");case"MMM":return h(n.monthsShort,o,l,3);case"MMMM":return h(l,o);case"D":return t.$D;case"DD":return D.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return h(n.weekdaysMin,t.$W,u,2);case"ddd":return h(n.weekdaysShort,t.$W,u,3);case"dddd":return u[t.$W];case"H":return String(i);case"HH":return D.s(i,2,"0");case"h":return m(1);case"hh":return m(2);case"a":return p(i,s,!0);case"A":return p(i,s,!1);case"m":return String(s);case"mm":return D.s(s,2,"0");case"s":return String(t.$s);case"ss":return D.s(t.$s,2,"0");case"SSS":return D.s(t.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")})},h.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},h.diff=function(e,t,l){var c,d=this,f=D.p(t),h=g(e),m=(h.utcOffset()-this.utcOffset())*6e4,p=this-h,y=function(){return D.m(d,h)};switch(f){case u:c=y()/12;break;case s:c=y();break;case o:c=y()/3;break;case i:c=(p-m)/6048e5;break;case"day":c=(p-m)/864e5;break;case a:c=p/36e5;break;case r:c=p/6e4;break;case n:c=p/1e3;break;default:c=p}return l?c:D.a(c)},h.daysInMonth=function(){return this.endOf(s).$D},h.$locale=function(){return p[this.$L]},h.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=v(e,t,!0);return r&&(n.$L=r),n},h.clone=function(){return D.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},e}()).prototype,g.prototype=S,[["$ms",t],["$s",n],["$m",r],["$H",a],["$W","day"],["$M",s],["$y",u],["$D",l]].forEach(function(e){S[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),g.extend=function(e,t){return e.$i||(e(t,x,g),e.$i=!0),g},g.locale=v,g.isDayjs=$,g.unix=function(e){return g(1e3*e)},g.en=p[m],g.Ls=p,g.p={},g)},67338:function(e){var t,n;e.exports=(t={year:0,month:1,day:2,hour:3,minute:4,second:5},n={},function(e,r,a){var i,s=function(e,t,r){void 0===r&&(r={});var a,i,s,o,u=new Date(e);return(void 0===(a=r)&&(a={}),(o=n[s=t+"|"+(i=a.timeZoneName||"short")])||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:i}),n[s]=o),o).formatToParts(u)},o=function(e,n){for(var r=s(e,n),i=[],o=0;o<r.length;o+=1){var u=r[o],l=u.type,c=u.value,d=t[l];d>=0&&(i[d]=parseInt(c,10))}var f=i[3],h=i[0]+"-"+i[1]+"-"+i[2]+" "+(24===f?0:f)+":"+i[4]+":"+i[5]+":000",m=+e;return(a.utc(h).valueOf()-(m-=m%1e3))/6e4},u=r.prototype;u.tz=function(e,t){void 0===e&&(e=i);var n=this.utcOffset(),r=this.toDate(),s=r.toLocaleString("en-US",{timeZone:e}),o=Math.round((r-new Date(s))/1e3/60),u=a(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(-(15*Math.round(r.getTimezoneOffset()/15))-o,!0);if(t){var l=u.utcOffset();u=u.add(n-l,"minute")}return u.$x.$timezone=e,u},u.offsetName=function(e){var t=this.$x.$timezone||a.tz.guess(),n=s(this.valueOf(),t,{timeZoneName:e}).find(function(e){return"timezonename"===e.type.toLowerCase()});return n&&n.value};var l=u.startOf;u.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var n=a(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return l.call(n,e,t).tz(this.$x.$timezone,!0)},a.tz=function(e,t,n){var r=n&&t,s=n||t||i,u=o(+a(),s);if("string"!=typeof e)return a(e).tz(s);var l=function(e,t,n){var r=e-60*t*1e3,a=o(r,n);if(t===a)return[r,t];var i=o(r-=60*(a-t)*1e3,n);return a===i?[r,a]:[e-60*Math.min(a,i)*1e3,Math.max(a,i)]}(a.utc(e,r).valueOf(),u,s),c=l[0],d=l[1],f=a(c).utcOffset(d);return f.$x.$timezone=s,f},a.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},a.tz.setDefault=function(e){i=e}})},10264:function(e){var t,n,r;e.exports=(t="minute",n=/[+-]\d\d(?::?\d\d)?/g,r=/([+-]|\d\d)/g,function(e,a,i){var s=a.prototype;i.utc=function(e){var t={date:e,utc:!0,args:arguments};return new a(t)},s.utc=function(e){var n=i(this.toDate(),{locale:this.$L,utc:!0});return e?n.add(this.utcOffset(),t):n},s.local=function(){return i(this.toDate(),{locale:this.$L,utc:!1})};var o=s.parse;s.parse=function(e){e.utc&&(this.$u=!0),this.$utils().u(e.$offset)||(this.$offset=e.$offset),o.call(this,e)};var u=s.init;s.init=function(){if(this.$u){var e=this.$d;this.$y=e.getUTCFullYear(),this.$M=e.getUTCMonth(),this.$D=e.getUTCDate(),this.$W=e.getUTCDay(),this.$H=e.getUTCHours(),this.$m=e.getUTCMinutes(),this.$s=e.getUTCSeconds(),this.$ms=e.getUTCMilliseconds()}else u.call(this)};var l=s.utcOffset;s.utcOffset=function(e,a){var i=this.$utils().u;if(i(e))return this.$u?0:i(this.$offset)?l.call(this):this.$offset;if("string"==typeof e&&null===(e=function(e){void 0===e&&(e="");var t=e.match(n);if(!t)return null;var a=(""+t[0]).match(r)||["-",0,0],i=a[0],s=60*+a[1]+ +a[2];return 0===s?0:"+"===i?s:-s}(e)))return this;var s=16>=Math.abs(e)?60*e:e,o=this;if(a)return o.$offset=s,o.$u=0===e,o;if(0!==e){var u=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(o=this.local().add(s+u,t)).$offset=s,o.$x.$localOffset=u}else o=this.utc();return o};var c=s.format;s.format=function(e){var t=e||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return c.call(this,t)},s.valueOf=function(){var e=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*e},s.isUTC=function(){return!!this.$u},s.toISOString=function(){return this.toDate().toISOString()},s.toString=function(){return this.toDate().toUTCString()};var d=s.toDate;s.toDate=function(e){return"s"===e&&this.$offset?i(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():d.call(this)};var f=s.diff;s.diff=function(e,t,n){if(e&&this.$u===e.$u)return f.call(this,e,t,n);var r=this.local(),a=i(e).local();return f.call(r,a,t,n)}})},81533:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dates/getting-started",function(){return n(56760)}])},56760:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(52322),a=n(45392),i=n(65328),s=n(71812),o=n(79016),u=n(33638);let l=(0,o.A)(u.us.GettingStartedDates);function c(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Demo:n,InstallScript:o}=t;return n||f("Demo",!0),o||f("InstallScript",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(o,{packages:"@mantine/dates dayjs"}),"\n",(0,r.jsx)(t.p,{children:"After installation import package styles at the root of your application:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import '@mantine/dates/styles.css';\n"})}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:["After installing ",(0,r.jsx)(t.code,{children:"@mantine/dates"})," package and importing styles, you can use all components from it:"]}),"\n",(0,r.jsx)(n,{data:i.j_}),"\n",(0,r.jsx)(t.h2,{id:"dayjs",children:"dayjs"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"@mantine/dates"})," components use ",(0,r.jsx)(t.a,{href:"https://day.js.org/",children:"dayjs"})," under the hood for date manipulations and formatting.\ndayjs is a required dependency – you cannot change it to another date library. If you want to use a different\ndate library in your application, you will need to install it separately."]}),"\n",(0,r.jsx)(t.h2,{id:"consistent-weeks",children:"Consistent weeks"}),"\n",(0,r.jsxs)(t.p,{children:["If you want to avoid layout shifts, set ",(0,r.jsx)(t.code,{children:"consistentWeeks: true"})," in ",(0,r.jsx)(t.code,{children:"DatesProvider"})," settings.\nThis will make sure that every month has 6 weeks, even if outside days are not in the same month."]}),"\n",(0,r.jsx)(n,{data:s.U}),"\n",(0,r.jsx)(t.h2,{id:"custom-parse-format",children:"Custom parse format"}),"\n",(0,r.jsxs)(t.p,{children:["Some components like ",(0,r.jsx)(t.a,{href:"/dates/date-input",children:"DateInput"})," require ",(0,r.jsx)(t.a,{href:"https://day.js.org/docs/en/plugin/custom-parse-format",children:"custom parse format"}),"\ndayjs plugin. You need to extend dayjs with this plugin before using components that require it. Note that\nit is usually done once in your application root file, so you don't need to do it every time you use component."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import dayjs from 'dayjs';\nimport customParseFormat from 'dayjs/plugin/customParseFormat';\n\ndayjs.extend(customParseFormat);\n"})}),"\n",(0,r.jsx)(t.h2,{id:"localization-and-server-components",children:"Localization and server components"}),"\n",(0,r.jsxs)(t.p,{children:["To add localization you must import ",(0,r.jsx)(t.code,{children:"import 'dayjs/locale/x';"})," in your application (",(0,r.jsx)(t.code,{children:"x"})," is locale name)\nand set ",(0,r.jsx)(t.code,{children:"locale"})," either on ",(0,r.jsx)(t.a,{href:"/dates/dates-provider",children:"DatesProvider"})," or on each component individually."]}),"\n",(0,r.jsx)(t.p,{children:"Example of setting locale on DatesProvider:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import 'dayjs/locale/ru';\n\nimport { DatesProvider } from '@mantine/dates';\n\nfunction Demo() {\n  return (\n    <DatesProvider settings={{ locale: 'ru' }}>\n      {/* Your app  */}\n    </DatesProvider>\n  );\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The code above works in all environments, except Next.js app router.\nIf you are using Next.js app router, you must add ",(0,r.jsx)(t.code,{children:"'use client';"})," to the\ntop of the file where you are importing ",(0,r.jsx)(t.code,{children:"dayjs/locale/x"})," – locale data\nis required both on client and server."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"'use client';\n\nimport 'dayjs/locale/ru';\n\nimport { DatesProvider } from '@mantine/dates';\n\nfunction Demo() {\n  return (\n    <DatesProvider settings={{ locale: 'ru' }}>\n      {/* Your app  */}\n    </DatesProvider>\n  );\n}\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(l,{...e,children:(0,r.jsx)(c,{...e})})}function f(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},65328:function(e,t,n){"use strict";n.d(t,{$S:function(){return d},gB:function(){return u},j_:function(){return i},m6:function(){return s},oC:function(){return l},qv:function(){return c},w6:function(){return o},wD:function(){return f}});var r=n(18738);n(2784);var a=n(42411);let{usage:i,multiple:s,range:o,configurator:u,modal:l,icon:c,clearable:d,valueFormatter:f}=(0,a.B)(r.a)},71812:function(e,t,n){"use strict";n.d(t,{U:function(){return o}});var r=n(2784),a=n(92014),i=n(95488);let s=`
import { DatePicker, DatesProvider } from '@mantine/dates';

function Demo() {
  return (
    <DatesProvider settings={{ consistentWeeks: true }}>
      <DatePicker />
    </DatesProvider>
  );
}
`,o={type:"code",component:function(){return r.createElement(a.wf,{settings:{consistentWeeks:!0}},r.createElement(i.M,null))},code:s,centered:!0}},42411:function(e,t,n){"use strict";n.d(t,{B:function(){return y}});var r=n(2784);let a=e=>`
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
`;var s=n(70932),o=n(58898);let u=e=>`
import { useState } from 'react';
import { rem } from '@mantine/core';
import { IconCalendar } from '@tabler/icons-react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  const icon = <IconCalendar style={{ width: rem(18), height: rem(18) }} stroke={1.5} />;
  return (
    <${e}
      leftSection={icon}
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
`,p=({type:e,date:t,locale:n,format:r})=>{if("multiple"===e&&Array.isArray(t)){if(1===t.length)return h(t[0]).locale(n).format(r);if(t.length>1)return`${t.length} dates selected`}return""};function y(e){return{usage:{type:"code",centered:!0,maxWidth:400,code:f(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,r.useState)(null);return r.createElement(e,{label:"Pick date",placeholder:"Pick date",value:t,onChange:n})}},multiple:{type:"code",centered:!0,maxWidth:400,code:c(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,r.useState)([]);return r.createElement(e,{type:"multiple",label:"Pick dates",placeholder:"Pick dates",value:t,onChange:n})}},range:{type:"code",centered:!0,maxWidth:400,code:d(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,r.useState)([null,null]);return r.createElement(e,{type:"range",label:"Pick dates range",placeholder:"Pick dates range",value:t,onChange:n})}},configurator:{type:"configurator",component:e,centered:!0,maxWidth:400,code:i(e.displayName.replace("@mantine/dates/","")),controls:[{prop:"placeholder",type:"string",initialValue:"Pick date",libraryValue:"__"},{prop:"label",type:"string",initialValue:"Pick date",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"variant",type:"select",data:[{label:"default",value:"default"},{label:"filled",value:"filled"},{label:"unstyled",value:"unstyled"}],initialValue:"default",libraryValue:"default"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]},modal:{type:"code",centered:!0,maxWidth:400,code:l(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,r.useState)(null);return r.createElement(e,{dropdownType:"modal",label:"Pick date",placeholder:"Pick date",value:t,onChange:n})}},icon:{type:"code",centered:!0,maxWidth:400,code:u(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,r.useState)(null);return r.createElement(e,{leftSection:r.createElement(s.Z,{style:{width:(0,o.h)(18),height:(0,o.h)(18)},stroke:1.5}),leftSectionPointerEvents:"none",label:"Pick date",placeholder:"Pick date",value:t,onChange:n})}},clearable:{type:"code",centered:!0,maxWidth:400,code:a(e.displayName.replace("@mantine/dates/","")),component:()=>r.createElement(e,{clearable:!0,defaultValue:new Date,label:"Pick date",placeholder:"Pick date"})},valueFormatter:{type:"code",centered:!0,maxWidth:400,code:m(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,r.useState)([]);return r.createElement(e,{label:"Pick 2 dates or more",placeholder:"Pick 2 dates or more",value:t,onChange:n,type:"multiple",valueFormatter:p})}}}}}},function(e){e.O(0,[57938,17454,47747,11204,18738,49774,92888,40179],function(){return e(e.s=81533)}),_N_E=e.O()}]);