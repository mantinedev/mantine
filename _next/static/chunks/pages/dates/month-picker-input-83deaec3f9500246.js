(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[99382],{28879:function(e){var t;t=function(){"use strict";var e="millisecond",t="second",n="minute",r="hour",a="week",i="month",s="quarter",o="year",l="date",u="Invalid Date",c=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},h="en",m={};m[h]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||"th")+"]"}};var p="$isDayjsObject",y=function(e){return e instanceof S||!(!e||!e[p])},g=function e(t,n,r){var a;if(!t)return h;if("string"==typeof t){var i=t.toLowerCase();m[i]&&(a=i),n&&(m[i]=n,a=i);var s=t.split("-");if(!a&&s.length>1)return e(s[0])}else{var o=t.name;m[o]=t,a=o}return!r&&a&&(h=a),a||!r&&h},$=function(e,t){if(y(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new S(n)},v={s:f,z:function(e){var t=-e.utcOffset(),n=Math.abs(t);return(t<=0?"+":"-")+f(Math.floor(n/60),2,"0")+":"+f(n%60,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),a=t.clone().add(r,i),s=n-a<0,o=t.clone().add(r+(s?-1:1),i);return+(-(r+(n-a)/(s?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(u){return({M:i,y:o,w:a,d:"day",D:l,h:r,m:n,s:t,ms:e,Q:s})[u]||String(u||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};v.l=g,v.i=y,v.w=function(e,t){return $(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var S=function(){function f(e){this.$L=g(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[p]=!0}var h=f.prototype;return h.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(v.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(c);if(r){var a=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},h.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},h.$utils=function(){return v},h.isValid=function(){return this.$d.toString()!==u},h.isSame=function(e,t){var n=$(e);return this.startOf(t)<=n&&n<=this.endOf(t)},h.isAfter=function(e,t){return $(e)<this.startOf(t)},h.isBefore=function(e,t){return this.endOf(t)<$(e)},h.$g=function(e,t,n){return v.u(e)?this[t]:this.set(n,e)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(e,s){var u=this,c=!!v.u(s)||s,d=v.p(e),f=function(e,t){var n=v.w(u.$u?Date.UTC(u.$y,t,e):new Date(u.$y,t,e),u);return c?n:n.endOf("day")},h=function(e,t){return v.w(u.toDate()[e].apply(u.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),u)},m=this.$W,p=this.$M,y=this.$D,g="set"+(this.$u?"UTC":"");switch(d){case o:return c?f(1,0):f(31,11);case i:return c?f(1,p):f(0,p+1);case a:var $=this.$locale().weekStart||0,S=(m<$?m+7:m)-$;return f(c?y-S:y+(6-S),p);case"day":case l:return h(g+"Hours",0);case r:return h(g+"Minutes",1);case n:return h(g+"Seconds",2);case t:return h(g+"Milliseconds",3);default:return this.clone()}},h.endOf=function(e){return this.startOf(e,!1)},h.$set=function(a,s){var u,c=v.p(a),d="set"+(this.$u?"UTC":""),f=((u={}).day=d+"Date",u[l]=d+"Date",u[i]=d+"Month",u[o]=d+"FullYear",u[r]=d+"Hours",u[n]=d+"Minutes",u[t]=d+"Seconds",u[e]=d+"Milliseconds",u)[c],h="day"===c?this.$D+(s-this.$W):s;if(c===i||c===o){var m=this.clone().set(l,1);m.$d[f](h),m.init(),this.$d=m.set(l,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},h.set=function(e,t){return this.clone().$set(e,t)},h.get=function(e){return this[v.p(e)]()},h.add=function(e,s){var l,u=this;e=Number(e);var c=v.p(s),d=function(t){var n=$(u);return v.w(n.date(n.date()+Math.round(t*e)),u)};if(c===i)return this.set(i,this.$M+e);if(c===o)return this.set(o,this.$y+e);if("day"===c)return d(1);if(c===a)return d(7);var f=((l={})[n]=6e4,l[r]=36e5,l[t]=1e3,l)[c]||1,h=this.$d.getTime()+e*f;return v.w(h,this)},h.subtract=function(e,t){return this.add(-1*e,t)},h.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||u;var r=e||"YYYY-MM-DDTHH:mm:ssZ",a=v.z(this),i=this.$H,s=this.$m,o=this.$M,l=n.weekdays,c=n.months,f=n.meridiem,h=function(e,n,a,i){return e&&(e[n]||e(t,r))||a[n].slice(0,i)},m=function(e){return v.s(i%12||12,e,"0")},p=f||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(d,function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return v.s(t.$y,4,"0");case"M":return o+1;case"MM":return v.s(o+1,2,"0");case"MMM":return h(n.monthsShort,o,c,3);case"MMMM":return h(c,o);case"D":return t.$D;case"DD":return v.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return h(n.weekdaysMin,t.$W,l,2);case"ddd":return h(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return v.s(i,2,"0");case"h":return m(1);case"hh":return m(2);case"a":return p(i,s,!0);case"A":return p(i,s,!1);case"m":return String(s);case"mm":return v.s(s,2,"0");case"s":return String(t.$s);case"ss":return v.s(t.$s,2,"0");case"SSS":return v.s(t.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")})},h.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},h.diff=function(e,l,u){var c,d=this,f=v.p(l),h=$(e),m=(h.utcOffset()-this.utcOffset())*6e4,p=this-h,y=function(){return v.m(d,h)};switch(f){case o:c=y()/12;break;case i:c=y();break;case s:c=y()/3;break;case a:c=(p-m)/6048e5;break;case"day":c=(p-m)/864e5;break;case r:c=p/36e5;break;case n:c=p/6e4;break;case t:c=p/1e3;break;default:c=p}return u?c:v.a(c)},h.daysInMonth=function(){return this.endOf(i).$D},h.$locale=function(){return m[this.$L]},h.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=g(e,t,!0);return r&&(n.$L=r),n},h.clone=function(){return v.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},f}(),x=S.prototype;return $.prototype=x,[["$ms",e],["$s",t],["$m",n],["$H",r],["$W","day"],["$M",i],["$y",o],["$D",l]].forEach(function(e){x[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),$.extend=function(e,t){return e.$i||(e(t,S,$),e.$i=!0),$},$.locale=g,$.isDayjs=y,$.unix=function(e){return $(1e3*e)},$.en=m[h],$.Ls=m,$.p={},$},e.exports=t()},67338:function(e){var t;t=function(){"use strict";var e={year:0,month:1,day:2,hour:3,minute:4,second:5},t={};return function(n,r,a){var i,s=function(e,n,r){void 0===r&&(r={});var a,i,s,o,l=new Date(e);return(void 0===(a=r)&&(a={}),(o=t[s=n+"|"+(i=a.timeZoneName||"short")])||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:n,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:i}),t[s]=o),o).formatToParts(l)},o=function(t,n){for(var r=s(t,n),i=[],o=0;o<r.length;o+=1){var l=r[o],u=l.type,c=l.value,d=e[u];d>=0&&(i[d]=parseInt(c,10))}var f=i[3],h=i[0]+"-"+i[1]+"-"+i[2]+" "+(24===f?0:f)+":"+i[4]+":"+i[5]+":000",m=+t;return(a.utc(h).valueOf()-(m-=m%1e3))/6e4},l=r.prototype;l.tz=function(e,t){void 0===e&&(e=i);var n=this.utcOffset(),r=this.toDate(),s=r.toLocaleString("en-US",{timeZone:e}),o=Math.round((r-new Date(s))/1e3/60),l=a(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(-(15*Math.round(r.getTimezoneOffset()/15))-o,!0);if(t){var u=l.utcOffset();l=l.add(n-u,"minute")}return l.$x.$timezone=e,l},l.offsetName=function(e){var t=this.$x.$timezone||a.tz.guess(),n=s(this.valueOf(),t,{timeZoneName:e}).find(function(e){return"timezonename"===e.type.toLowerCase()});return n&&n.value};var u=l.startOf;l.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return u.call(this,e,t);var n=a(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return u.call(n,e,t).tz(this.$x.$timezone,!0)},a.tz=function(e,t,n){var r=n&&t,s=n||t||i,l=o(+a(),s);if("string"!=typeof e)return a(e).tz(s);var u=function(e,t,n){var r=e-60*t*1e3,a=o(r,n);if(t===a)return[r,t];var i=o(r-=60*(a-t)*1e3,n);return a===i?[r,a]:[e-60*Math.min(a,i)*1e3,Math.max(a,i)]}(a.utc(e,r).valueOf(),l,s),c=u[0],d=u[1],f=a(c).utcOffset(d);return f.$x.$timezone=s,f},a.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},a.tz.setDefault=function(e){i=e}}},e.exports=t()},10264:function(e){var t;t=function(){"use strict";var e="minute",t=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g;return function(r,a,i){var s=a.prototype;i.utc=function(e){var t={date:e,utc:!0,args:arguments};return new a(t)},s.utc=function(t){var n=i(this.toDate(),{locale:this.$L,utc:!0});return t?n.add(this.utcOffset(),e):n},s.local=function(){return i(this.toDate(),{locale:this.$L,utc:!1})};var o=s.parse;s.parse=function(e){e.utc&&(this.$u=!0),this.$utils().u(e.$offset)||(this.$offset=e.$offset),o.call(this,e)};var l=s.init;s.init=function(){if(this.$u){var e=this.$d;this.$y=e.getUTCFullYear(),this.$M=e.getUTCMonth(),this.$D=e.getUTCDate(),this.$W=e.getUTCDay(),this.$H=e.getUTCHours(),this.$m=e.getUTCMinutes(),this.$s=e.getUTCSeconds(),this.$ms=e.getUTCMilliseconds()}else l.call(this)};var u=s.utcOffset;s.utcOffset=function(r,a){var i=this.$utils().u;if(i(r))return this.$u?0:i(this.$offset)?u.call(this):this.$offset;if("string"==typeof r&&null===(r=function(e){void 0===e&&(e="");var r=e.match(t);if(!r)return null;var a=(""+r[0]).match(n)||["-",0,0],i=a[0],s=60*+a[1]+ +a[2];return 0===s?0:"+"===i?s:-s}(r)))return this;var s=16>=Math.abs(r)?60*r:r,o=this;if(a)return o.$offset=s,o.$u=0===r,o;if(0!==r){var l=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(o=this.local().add(s+l,e)).$offset=s,o.$x.$localOffset=l}else o=this.utc();return o};var c=s.format;s.format=function(e){var t=e||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return c.call(this,t)},s.valueOf=function(){var e=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*e},s.isUTC=function(){return!!this.$u},s.toISOString=function(){return this.toDate().toISOString()},s.toString=function(){return this.toDate().toUTCString()};var d=s.toDate;s.toDate=function(e){return"s"===e&&this.$offset?i(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():d.call(this)};var f=s.diff;s.diff=function(e,t,n){if(e&&this.$u===e.$u)return f.call(this,e,t,n);var r=this.local(),a=i(e).local();return f.call(r,a,t,n)}}},e.exports=t()},67300:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dates/month-picker-input",function(){return n(92977)}])},92977:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var r=n(52322),a=n(45392),i=n(71082);n(2784);let{usage:s,multiple:o,range:l,configurator:u,modal:c,icon:d,clearable:f,valueFormatter:h}=(0,n(42411).B)(i.J),m={type:"code",centered:!0,maxWidth:400,component:function(){return(0,r.jsx)(i.J,{valueFormat:"YYYY MMM",type:"multiple",label:"Pick month",placeholder:"Pick month"})},code:`
import { MonthPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <MonthPickerInput
      valueFormat="YYYY MMM"
      type="multiple"
      label="Pick month"
      placeholder="Pick month"
    />
  );
}
`},p={type:"code",centered:!0,maxWidth:400,component:function(){return(0,r.jsx)(i.J,{valueFormat:"YYYY MMM",type:"multiple",label:"Disabled",placeholder:"Pick month",disabled:!0})},code:`
import { MonthPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <MonthPickerInput
      valueFormat="YYYY MMM"
      type="multiple"
      label="Disabled"
      placeholder="Pick month"
      disabled
    />
  );
}
`};var y=n(25071),g=n(15019);let $=(0,y.A)(g.us.MonthPickerInput);function v(e){let t={a:"a",code:"code",h2:"h2",p:"p",...(0,a.a)(),...e.components},{Demo:n,GetElementRef:i,InputAccessibility:y,InputFeatures:g}=t;return n||x("Demo",!0),i||x("GetElementRef",!0),y||x("InputAccessibility",!0),g||x("InputFeatures",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"monthpicker-props",children:"MonthPicker props"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"MonthPickerInput"})," supports most of the ",(0,r.jsx)(t.a,{href:"/dates/month-picker/",children:"MonthPicker"})," props,\nread through ",(0,r.jsx)(t.a,{href:"/dates/month-picker/",children:"MonthPicker"})," documentation to learn about all component features that are not listed on this page."]}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n,{data:s}),"\n",(0,r.jsx)(t.h2,{id:"multiple-dates",children:"Multiple dates"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:'type="multiple"'})," to allow user to pick multiple dates:"]}),"\n",(0,r.jsx)(n,{data:o}),"\n",(0,r.jsx)(t.h2,{id:"dates-range",children:"Dates range"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:'type="range"'})," to allow user to pick dates range:"]}),"\n",(0,r.jsx)(n,{data:l}),"\n",(0,r.jsx)(t.h2,{id:"open-picker-in-modal",children:"Open picker in modal"}),"\n",(0,r.jsxs)(t.p,{children:["By default, ",(0,r.jsx)(t.a,{href:"/dates/month-picker/",children:"MonthPicker"})," is rendered inside ",(0,r.jsx)(t.a,{href:"/core/popover/",children:"Popover"}),".\nYou can change that to ",(0,r.jsx)(t.a,{href:"/core/modal/",children:"Modal"})," by setting ",(0,r.jsx)(t.code,{children:'dropdownType="modal"'}),":"]}),"\n",(0,r.jsx)(n,{data:c}),"\n",(0,r.jsx)(t.h2,{id:"value-format",children:"Value format"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"valueFormat"})," prop to change ",(0,r.jsx)(t.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format"})," of value label:"]}),"\n",(0,r.jsx)(n,{data:m}),"\n",(0,r.jsx)(t.h2,{id:"value-formatter",children:"Value formatter"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"valueFormatter"})," is a more powerful alternative to ",(0,r.jsx)(t.code,{children:"valueFormat"})," prop.\nIt allows formatting value label with a custom function.\nThe function is the same for all component types (",(0,r.jsx)(t.code,{children:"default"}),", ",(0,r.jsx)(t.code,{children:"multiple"})," and ",(0,r.jsx)(t.code,{children:"range"}),")\n– you need to perform additional checks inside the function to handle different types."]}),"\n",(0,r.jsxs)(t.p,{children:["Example of using a custom formatter function with ",(0,r.jsx)(t.code,{children:'type="multiple"'}),":"]}),"\n",(0,r.jsx)(n,{data:h}),"\n",(0,r.jsx)(t.h2,{id:"clearable",children:"Clearable"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"clearable"})," prop to display clear button in the right section. Note that if you set ",(0,r.jsx)(t.code,{children:"rightSection"}),"\nprop, clear button will not be displayed."]}),"\n",(0,r.jsx)(n,{data:f}),"\n",(0,r.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,r.jsx)(n,{data:p}),"\n",(0,r.jsx)(t.h2,{id:"input-props",children:"Input props"}),"\n",(0,r.jsx)(g,{component:"MonthPickerInput",element:"button"}),"\n",(0,r.jsx)(n,{data:u}),"\n",(0,r.jsx)(t.h2,{id:"with-icon",children:"With icon"}),"\n",(0,r.jsx)(n,{data:d}),"\n",(0,r.jsx)(i,{component:"MonthPickerInput",refType:"button",package:"@mantine/dates"}),"\n",(0,r.jsx)(y,{component:"MonthPickerInput",packageName:"@mantine/dates"})]})}function S(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)($,{...e,children:(0,r.jsx)(v,{...e})})}function x(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},42411:function(e,t,n){"use strict";n.d(t,{B:function(){return g}});var r=n(52322);let a=e=>`
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
`;var s=n(2784),o=n(11868),l=n(58898);let u=e=>`
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
`,c=e=>`
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
`,d=e=>`
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
`,f=e=>`
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
`,h=e=>`
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
`;var m=n(28879);let p=e=>`
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
`,y=({type:e,date:t,locale:n,format:r})=>{if("multiple"===e&&Array.isArray(t)){if(1===t.length)return m(t[0]).locale(n).format(r);if(t.length>1)return`${t.length} dates selected`}return""};function g(e){return{usage:{type:"code",centered:!0,maxWidth:400,code:h(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,s.useState)(null);return(0,r.jsx)(e,{label:"Pick date",placeholder:"Pick date",value:t,onChange:n})}},multiple:{type:"code",centered:!0,maxWidth:400,code:d(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,s.useState)([]);return(0,r.jsx)(e,{type:"multiple",label:"Pick dates",placeholder:"Pick dates",value:t,onChange:n})}},range:{type:"code",centered:!0,maxWidth:400,code:f(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,s.useState)([null,null]);return(0,r.jsx)(e,{type:"range",label:"Pick dates range",placeholder:"Pick dates range",value:t,onChange:n})}},configurator:{type:"configurator",component:e,centered:!0,maxWidth:400,code:i(e.displayName.replace("@mantine/dates/","")),controls:[{prop:"placeholder",type:"string",initialValue:"Pick date",libraryValue:"__"},{prop:"label",type:"string",initialValue:"Pick date",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"variant",type:"select",data:[{label:"default",value:"default"},{label:"filled",value:"filled"},{label:"unstyled",value:"unstyled"}],initialValue:"default",libraryValue:"default"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]},modal:{type:"code",centered:!0,maxWidth:400,code:c(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,s.useState)(null);return(0,r.jsx)(e,{dropdownType:"modal",label:"Pick date",placeholder:"Pick date",value:t,onChange:n})}},icon:{type:"code",centered:!0,maxWidth:400,code:u(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,s.useState)(null);return(0,r.jsx)(e,{leftSection:(0,r.jsx)(o.Z,{style:{width:(0,l.h)(18),height:(0,l.h)(18)},stroke:1.5}),leftSectionPointerEvents:"none",label:"Pick date",placeholder:"Pick date",value:t,onChange:n})}},clearable:{type:"code",centered:!0,maxWidth:400,code:a(e.displayName.replace("@mantine/dates/","")),component:()=>(0,r.jsx)(e,{clearable:!0,defaultValue:new Date,label:"Pick date",placeholder:"Pick date"})},valueFormatter:{type:"code",centered:!0,maxWidth:400,code:p(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,s.useState)([]);return(0,r.jsx)(e,{label:"Pick 2 dates or more",placeholder:"Pick 2 dates or more",value:t,onChange:n,type:"multiple",valueFormatter:y})}}}}},9882:function(e,t,n){"use strict";function r(e){let{maxLevel:t,minLevel:n,defaultLevel:r,level:a,onLevelChange:i,nextIcon:s,previousIcon:o,date:l,defaultDate:u,onDateChange:c,numberOfColumns:d,columnsToScroll:f,ariaLabels:h,onYearSelect:m,onMonthSelect:p,onYearMouseEnter:y,onMonthMouseEnter:g,onNextMonth:$,onPreviousMonth:v,onNextYear:S,onPreviousYear:x,onNextDecade:D,onPreviousDecade:M,withCellSpacing:k,highlightToday:b,__updateDateOnYearSelect:j,__updateDateOnMonthSelect:P,firstDayOfWeek:w,weekdayFormat:O,weekendDays:C,getDayProps:T,excludeDate:Y,renderDay:_,hideOutsideDates:I,hideWeekdays:V,getDayAriaLabel:N,monthLabelFormat:z,monthsListFormat:A,getMonthControlProps:F,yearLabelFormat:W,yearsListFormat:H,getYearControlProps:L,decadeLabelFormat:U,allowSingleDateInRange:E,allowDeselect:Z,minDate:B,maxDate:J,locale:R,...q}=e;return{calendarProps:{maxLevel:t,minLevel:n,defaultLevel:r,level:a,onLevelChange:i,nextIcon:s,previousIcon:o,date:l,defaultDate:u,onDateChange:c,numberOfColumns:d,columnsToScroll:f,ariaLabels:h,onYearSelect:m,onMonthSelect:p,onYearMouseEnter:y,onMonthMouseEnter:g,onNextMonth:$,onPreviousMonth:v,onNextYear:S,onPreviousYear:x,onNextDecade:D,onPreviousDecade:M,withCellSpacing:k,highlightToday:b,__updateDateOnYearSelect:j,__updateDateOnMonthSelect:P,firstDayOfWeek:w,weekdayFormat:O,weekendDays:C,getDayProps:T,excludeDate:Y,renderDay:_,hideOutsideDates:I,hideWeekdays:V,getDayAriaLabel:N,monthLabelFormat:z,monthsListFormat:A,getMonthControlProps:F,yearLabelFormat:W,yearsListFormat:H,getYearControlProps:L,decadeLabelFormat:U,allowSingleDateInRange:E,allowDeselect:Z,minDate:B,maxDate:J,locale:R},others:q}}n.d(t,{M:function(){return r}})},20228:function(e,t,n){"use strict";n.d(t,{n:function(){return a}});var r=n(52322);function a({value:e,type:t,name:n,form:a}){return(0,r.jsx)("input",{type:"hidden",value:function(e,t){if("range"===t&&Array.isArray(e)){let[t,n]=e;return t?n?`${t.toISOString()} \u2013 ${n.toISOString()}`:`${t.toISOString()} \u2013`:""}return"multiple"===t&&Array.isArray(e)?e.map(e=>e?.toISOString()).filter(Boolean).join(", "):!Array.isArray(e)&&e?e.toISOString():""}(e,t),name:n,form:a})}a.displayName="@mantine/dates/HiddenDatesInput"},87871:function(e,t,n){"use strict";n.d(t,{l:function(){return f}});var r=n(52322),a=n(82027),i=n(38483),s=n(51477),o=n(82083),l=n(46766);n(28879);var u=n(51235);n(2784);var c=n(11204);let d={type:"default"},f=(0,a.d)((e,t)=>{let n=(0,i.w)("MonthPicker",d,e),{classNames:a,styles:f,vars:h,type:m,defaultValue:p,value:y,onChange:g,__staticSelector:$,getMonthControlProps:v,allowSingleDateInRange:S,allowDeselect:x,onMouseLeave:D,onMonthSelect:M,__updateDateOnMonthSelect:k,__timezoneApplied:b,onLevelChange:j,...P}=n,{onDateChange:w,onRootMouseLeave:O,onHoveredDateChange:C,getControlProps:T}=(0,o.D)({type:m,level:"month",allowDeselect:x,allowSingleDateInRange:S,value:y,defaultValue:p,onChange:g,onMouseLeave:D,applyTimezone:!b}),{resolvedClassNames:Y,resolvedStyles:_}=(0,s.h)({classNames:a,styles:f,props:n}),I=(0,l.e)();return(0,r.jsx)(c.f,{ref:t,minLevel:"year",__updateDateOnMonthSelect:k??!1,__staticSelector:$||"MonthPicker",onMouseLeave:O,onMonthMouseEnter:(e,t)=>C(t),onMonthSelect:e=>{w(e),M?.(e)},getMonthControlProps:e=>({...T(e),...v?.(e)}),classNames:Y,styles:_,onLevelChange:j,...P,date:(0,u.w)("add",P.date,I.getTimezone(),b)})});f.classes=c.f.classes,f.displayName="@mantine/dates/MonthPicker"},71082:function(e,t,n){"use strict";n.d(t,{J:function(){return p}});var r=n(52322),a=n(82027),i=n(38483),s=n(51477);n(28879),n(2784);var o=n(46766),l=n(93893),u=n(51235),c=n(26005),d=n(9882),f=n(87871),h=n(71686);let m={type:"default",valueFormat:"MMMM YYYY",closeOnChange:!0,sortDates:!0,dropdownType:"popover"},p=(0,a.d)((e,t)=>{let n=(0,i.w)("MonthPickerInput",m,e),{type:a,value:p,defaultValue:y,onChange:g,valueFormat:$,labelSeparator:v,locale:S,classNames:x,styles:D,unstyled:M,closeOnChange:k,size:b,variant:j,dropdownType:P,sortDates:w,minDate:O,maxDate:C,vars:T,valueFormatter:Y,..._}=n,{resolvedClassNames:I,resolvedStyles:V}=(0,s.h)({classNames:x,styles:D,props:n}),{calendarProps:N,others:z}=(0,d.M)(_),{_value:A,setValue:F,formattedValue:W,dropdownHandlers:H,dropdownOpened:L,onClear:U,shouldClear:E}=(0,c.u)({type:a,value:p,defaultValue:y,onChange:g,locale:S,format:$,labelSeparator:v,closeOnChange:k,sortDates:w,valueFormatter:Y}),Z=(0,o.e)();return(0,r.jsx)(h.i,{formattedValue:W,dropdownOpened:L,dropdownHandlers:H,classNames:I,styles:V,unstyled:M,ref:t,onClear:U,shouldClear:E,value:A,size:b,variant:j,dropdownType:P,...z,type:a,__staticSelector:"MonthPickerInput",children:(0,r.jsx)(f.l,{...N,date:(0,u.w)("add",N.date,Z.getTimezone()),size:b,variant:j,type:a,value:A,defaultDate:Array.isArray(A)?A[0]||(0,l.S)({maxDate:C,minDate:O}):A||(0,l.S)({maxDate:C,minDate:O}),onChange:F,locale:S,classNames:I,styles:V,unstyled:M,__staticSelector:"MonthPickerInput",__stopPropagation:"popover"===P,minDate:O,maxDate:C,__timezoneApplied:!0})})});p.classes={...h.i.classes,...f.l.classes},p.displayName="@mantine/dates/MonthPickerInput"},71686:function(e,t,n){"use strict";n.d(t,{i:function(){return m}});var r=n(52322),a=n(40489),i=n(82027),s=n(7140),o=n(2670),l=n(78222),u=n(6941),c=n(50205),d=n(20228),f={input:"m_6fa5e2aa"};let h={},m=(0,i.d)((e,t)=>{let{inputProps:n,wrapperProps:i,placeholder:m,classNames:p,styles:y,unstyled:g,popoverProps:$,modalProps:v,dropdownType:S,children:x,formattedValue:D,dropdownHandlers:M,dropdownOpened:k,onClick:b,clearable:j,onClear:P,clearButtonProps:w,rightSection:O,shouldClear:C,readOnly:T,disabled:Y,value:_,name:I,form:V,type:N,...z}=(0,s.k)("PickerInputBase",h,e),A=O||(j&&C&&!T&&!Y?(0,r.jsx)(o.P,{variant:"transparent",onClick:P,unstyled:g,size:n.size||"sm",...w}):null),F=()=>{"range"===N&&Array.isArray(_)&&_[0]&&!_[1]&&P(),M.close()};return(0,r.jsxs)(r.Fragment,{children:["modal"===S&&!T&&(0,r.jsx)(l.u,{opened:k,onClose:F,withCloseButton:!1,size:"auto","data-dates-modal":!0,unstyled:g,...v,children:x}),(0,r.jsx)(u.I.Wrapper,{...i,children:(0,r.jsxs)(c.J,{position:"bottom-start",opened:k,trapFocus:!0,returnFocus:!0,unstyled:g,...$,disabled:$?.disabled||"modal"===S||T,onClose:()=>{$?.onClose?.(),F()},children:[(0,r.jsx)(c.J.Target,{children:(0,r.jsx)(u.I,{"aria-label":D||m,"data-dates-input":!0,"data-read-only":T||void 0,disabled:Y,component:"button",type:"button",multiline:!0,onClick:e=>{b?.(e),M.toggle()},rightSection:A,...n,ref:t,classNames:{...p,input:(0,a.Z)(f.input,p?.input)},...z,children:D||(0,r.jsx)(u.I.Placeholder,{error:n.error,unstyled:g,className:p?.placeholder,style:y?.placeholder,children:m})})}),(0,r.jsx)(c.J.Dropdown,{"data-dates-dropdown":!0,children:x})]})}),(0,r.jsx)(d.n,{value:_,name:I,form:V,type:N})]})});m.classes=f,m.displayName="@mantine/dates/PickerInputBase"},26005:function(e,t,n){"use strict";n.d(t,{u:function(){return o}});var r=n(3900),a=n(46766),i=n(28879),s=n(93141);function o({type:e,value:t,defaultValue:n,onChange:o,locale:l,format:u,closeOnChange:c,sortDates:d,labelSeparator:f,valueFormatter:h}){let m=(0,a.e)(),[p,y]=(0,r.q)(!1),[g,$]=(0,s.l)({type:e,value:t,defaultValue:n,onChange:o}),v=function({formatter:e,...t}){return(e||function({type:e,date:t,locale:n,format:r,labelSeparator:a}){let s=e=>i(e).locale(n).format(r);if("default"===e)return null===t?"":s(t);if("multiple"===e)return t.map(s).join(", ");if("range"===e&&Array.isArray(t)){if(t[0]&&t[1])return`${s(t[0])} ${a} ${s(t[1])}`;if(t[0])return`${s(t[0])} ${a} `}return""})(t)}({type:e,date:g,locale:m.getLocale(l),format:u,labelSeparator:m.getLabelSeparator(f),formatter:h}),S=t=>{c&&("default"===e&&y.close(),"range"===e&&t[0]&&t[1]&&y.close()),d&&"multiple"===e?$([...t].sort((e,t)=>e.getTime()-t.getTime())):$(t)},x="range"===e?!!g[0]:"multiple"===e?g.length>0:null!==g;return{_value:g,setValue:S,onClear:()=>S("range"===e?[null,null]:"multiple"===e?[]:null),shouldClear:x,formattedValue:v,dropdownOpened:p,dropdownHandlers:y}}},82083:function(e,t,n){"use strict";n.d(t,{D:function(){return o}});var r=n(28879),a=n(2784),i=n(93141);function s(e,t){let n=[...t].sort((e,t)=>e.getTime()-t.getTime());return r(n[0]).startOf("day").subtract(1,"ms").isBefore(e)&&r(n[1]).endOf("day").add(1,"ms").isAfter(e)}function o({type:e,level:t,value:n,defaultValue:o,onChange:l,allowSingleDateInRange:u,allowDeselect:c,onMouseLeave:d,applyTimezone:f=!0}){let[h,m]=(0,i.l)({type:e,value:n,defaultValue:o,onChange:l,applyTimezone:f}),[p,y]=(0,a.useState)("range"===e&&h[0]&&!h[1]?h[0]:null),[g,$]=(0,a.useState)(null),v=e=>p instanceof Date&&g instanceof Date?s(e,[g,p]):h[0]instanceof Date&&h[1]instanceof Date&&s(e,h),S="range"===e?e=>{d?.(e),$(null)}:d,x=e=>h[0]instanceof Date&&!!r(e).isSame(h[0],t)&&!(g&&r(g).isBefore(h[0])),D=e=>h[1]instanceof Date?r(e).isSame(h[1],t):h[0]instanceof Date&&!!g&&r(g).isBefore(h[0])&&r(e).isSame(h[0],t),M="range"===e&&p?$:()=>{};return(0,a.useEffect)(()=>{"range"!==e||h[0]||h[1]||y(null)},[n]),{onDateChange:n=>{if("range"===e){if(p instanceof Date&&!h[1]){if(r(n).isSame(p,t)&&!u){y(null),$(null),m([null,null]);return}let e=[n,p];e.sort((e,t)=>e.getTime()-t.getTime()),m(e),$(null),y(null);return}if(h[0]&&!h[1]&&r(n).isSame(h[0],t)&&!u){y(null),$(null),m([null,null]);return}m([n,null]),$(null),y(n);return}if("multiple"===e){h.some(e=>r(e).isSame(n,t))?m(h.filter(e=>!r(e).isSame(n,t))):m([...h,n]);return}h&&c&&r(n).isSame(h,t)?m(null):m(n)},onRootMouseLeave:S,onHoveredDateChange:M,getControlProps:n=>{if("range"===e)return{selected:h.some(e=>e&&r(e).isSame(n,t)),inRange:v(n),firstInRange:x(n),lastInRange:D(n),"data-autofocus":!!h[0]&&r(h[0]).isSame(n,t)||void 0};if("multiple"===e)return{selected:h.some(e=>e&&r(e).isSame(n,t)),"data-autofocus":!!h[0]&&r(h[0]).isSame(n,t)||void 0};let a=r(h).isSame(n,t);return{selected:a,"data-autofocus":a||void 0}},_value:h,setValue:m}}},93893:function(e,t,n){"use strict";n.d(t,{S:function(){return i}});var r=n(28879),a=n(51235);function i({minDate:e,maxDate:t,timezone:n}){let i=(0,a.w)("add",new Date,n);return e||t?e&&r(i).isBefore(e)?e:t&&r(i).isAfter(t)?t:i:i}},3900:function(e,t,n){"use strict";n.d(t,{q:function(){return a}});var r=n(2784);function a(e=!1,t){let{onOpen:n,onClose:a}=t||{},[i,s]=(0,r.useState)(e),o=(0,r.useCallback)(()=>{s(e=>e||(n?.(),!0))},[n]),l=(0,r.useCallback)(()=>{s(e=>e?(a?.(),!1):e)},[a]),u=(0,r.useCallback)(()=>{i?l():o()},[l,o,i]);return[i,{open:o,close:l,toggle:u}]}}},function(e){e.O(0,[61177,66748,11340,11204,92888,49774,40179],function(){return e(e.s=67300)}),_N_E=e.O()}]);