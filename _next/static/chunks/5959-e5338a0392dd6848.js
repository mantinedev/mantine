(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5959],{33507:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var a=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var a=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var a=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var a=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var a=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var a=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var a=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},27693:function(t){var e,n,a,r,i,s,u,o,l,c,d,h,f,m,p,v,$,y,g,M,k;t.exports=(e="millisecond",n="second",a="minute",r="hour",i="week",s="month",u="quarter",o="year",l="date",c="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(t,e,n){var a=String(t);return!a||a.length>=e?t:""+Array(e+1-a.length).join(n)+t},(p={})[m="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},v=function(t){return t instanceof M},$=function(t,e,n){var a;if(!t)return m;if("string"==typeof t)p[t]&&(a=t),e&&(p[t]=e,a=t);else{var r=t.name;p[r]=t,a=r}return!n&&a&&(m=a),a||!n&&m},y=function(t,e){if(v(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new M(n)},(g={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e);return(e<=0?"+":"-")+f(Math.floor(n/60),2,"0")+":"+f(n%60,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var a=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(a,s),i=n-r<0,u=e.clone().add(a+(i?-1:1),s);return+(-(a+(n-r)/(i?r-u:u-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return({M:s,y:o,w:i,d:"day",D:l,h:r,m:a,s:n,ms:e,Q:u})[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}}).l=$,g.i=v,g.w=function(t,e){return y(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})},k=(M=function(){function t(t){this.$L=$(t.locale,null,!0),this.parse(t)}var f=t.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var a=e.match(d);if(a){var r=a[2]-1||0,i=(a[7]||"0").substring(0,3);return n?new Date(Date.UTC(a[1],r,a[3]||1,a[4]||0,a[5]||0,a[6]||0,i)):new Date(a[1],r,a[3]||1,a[4]||0,a[5]||0,a[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return g},f.isValid=function(){return this.$d.toString()!==c},f.isSame=function(t,e){var n=y(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return y(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<y(t)},f.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,e){var u=this,c=!!g.u(e)||e,d=g.p(t),h=function(t,e){var n=g.w(u.$u?Date.UTC(u.$y,e,t):new Date(u.$y,e,t),u);return c?n:n.endOf("day")},f=function(t,e){return g.w(u.toDate()[t].apply(u.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),u)},m=this.$W,p=this.$M,v=this.$D,$="set"+(this.$u?"UTC":"");switch(d){case o:return c?h(1,0):h(31,11);case s:return c?h(1,p):h(0,p+1);case i:var y=this.$locale().weekStart||0,M=(m<y?m+7:m)-y;return h(c?v-M:v+(6-M),p);case"day":case l:return f($+"Hours",0);case r:return f($+"Minutes",1);case a:return f($+"Seconds",2);case n:return f($+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(t,i){var u,c=g.p(t),d="set"+(this.$u?"UTC":""),h=((u={}).day=d+"Date",u[l]=d+"Date",u[s]=d+"Month",u[o]=d+"FullYear",u[r]=d+"Hours",u[a]=d+"Minutes",u[n]=d+"Seconds",u[e]=d+"Milliseconds",u)[c],f="day"===c?this.$D+(i-this.$W):i;if(c===s||c===o){var m=this.clone().set(l,1);m.$d[h](f),m.init(),this.$d=m.set(l,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[g.p(t)]()},f.add=function(t,e){var u,l=this;t=Number(t);var c=g.p(e),d=function(e){var n=y(l);return g.w(n.date(n.date()+Math.round(e*t)),l)};if(c===s)return this.set(s,this.$M+t);if(c===o)return this.set(o,this.$y+t);if("day"===c)return d(1);if(c===i)return d(7);var h=((u={})[a]=6e4,u[r]=36e5,u[n]=1e3,u)[c]||1,f=this.$d.getTime()+t*h;return g.w(f,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return c;var n=t||"YYYY-MM-DDTHH:mm:ssZ",a=g.z(this),r=this.$locale(),i=this.$H,s=this.$m,u=this.$M,o=r.weekdays,l=r.months,d=function(t,a,r,i){return t&&(t[a]||t(e,n))||r[a].substr(0,i)},f=function(t){return g.s(i%12||12,t,"0")},m=r.meridiem||function(t,e,n){var a=t<12?"AM":"PM";return n?a.toLowerCase():a},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:g.s(u+1,2,"0"),MMM:d(r.monthsShort,u,l,3),MMMM:d(l,u),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:d(r.weekdaysMin,this.$W,o,2),ddd:d(r.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(i),HH:g.s(i,2,"0"),h:f(1),hh:f(2),a:m(i,s,!0),A:m(i,s,!1),m:String(s),mm:g.s(s,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:a};return n.replace(h,function(t,e){return e||p[t]||a.replace(":","")})},f.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},f.diff=function(t,e,l){var c,d=g.p(e),h=y(t),f=(h.utcOffset()-this.utcOffset())*6e4,m=this-h,p=g.m(this,h);return p=((c={})[o]=p/12,c[s]=p,c[u]=p/3,c[i]=(m-f)/6048e5,c.day=(m-f)/864e5,c[r]=m/36e5,c[a]=m/6e4,c[n]=m/1e3,c)[d]||m,l?p:g.a(p)},f.daysInMonth=function(){return this.endOf(s).$D},f.$locale=function(){return p[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),a=$(t,e,!0);return a&&(n.$L=a),n},f.clone=function(){return g.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},t}()).prototype,y.prototype=k,[["$ms",e],["$s",n],["$m",a],["$H",r],["$W","day"],["$M",s],["$y",o],["$D",l]].forEach(function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),y.extend=function(t,e){return t.$i||(t(e,M,y),t.$i=!0),y},y.locale=$,y.isDayjs=v,y.unix=function(t){return y(1e3*t)},y.en=p[m],y.Ls=p,y.p={},y)},12197:function(t){var e,n;t.exports=(e={year:0,month:1,day:2,hour:3,minute:4,second:5},n={},function(t,a,r){var i,s=function(t,e,a){void 0===a&&(a={});var r,i,s,u,o=new Date(t);return(void 0===(r=a)&&(r={}),(u=n[s=e+"|"+(i=r.timeZoneName||"short")])||(u=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:i}),n[s]=u),u).formatToParts(o)},u=function(t,n){for(var a=s(t,n),i=[],u=0;u<a.length;u+=1){var o=a[u],l=o.type,c=o.value,d=e[l];d>=0&&(i[d]=parseInt(c,10))}var h=i[3],f=i[0]+"-"+i[1]+"-"+i[2]+" "+(24===h?0:h)+":"+i[4]+":"+i[5]+":000",m=+t;return(r.utc(f).valueOf()-(m-=m%1e3))/6e4},o=a.prototype;o.tz=function(t,e){void 0===t&&(t=i);var n=this.utcOffset(),a=this.toDate(),s=a.toLocaleString("en-US",{timeZone:t}),u=Math.round((a-new Date(s))/1e3/60),o=r(s).$set("millisecond",this.$ms).utcOffset(-(15*Math.round(a.getTimezoneOffset()/15))-u,!0);if(e){var l=o.utcOffset();o=o.add(n-l,"minute")}return o.$x.$timezone=t,o},o.offsetName=function(t){var e=this.$x.$timezone||r.tz.guess(),n=s(this.valueOf(),e,{timeZoneName:t}).find(function(t){return"timezonename"===t.type.toLowerCase()});return n&&n.value};var l=o.startOf;o.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return l.call(this,t,e);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return l.call(n,t,e).tz(this.$x.$timezone,!0)},r.tz=function(t,e,n){var a=n||e||i,s=u(+r(),a);if("string"!=typeof t)return r(t).tz(a);var o=function(t,e,n){var a=t-60*e*1e3,r=u(a,n);if(e===r)return[a,e];var i=u(a-=60*(r-e)*1e3,n);return r===i?[a,r]:[t-60*Math.min(r,i)*1e3,Math.max(r,i)]}(r.utc(t,n&&e).valueOf(),s,a),l=o[0],c=o[1],d=r(l).utcOffset(c);return d.$x.$timezone=a,d},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(t){i=t}})},96600:function(t){var e,n,a;t.exports=(e="minute",n=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g,function(t,r,i){var s=r.prototype;i.utc=function(t){var e={date:t,utc:!0,args:arguments};return new r(e)},s.utc=function(t){var n=i(this.toDate(),{locale:this.$L,utc:!0});return t?n.add(this.utcOffset(),e):n},s.local=function(){return i(this.toDate(),{locale:this.$L,utc:!1})};var u=s.parse;s.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),u.call(this,t)};var o=s.init;s.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else o.call(this)};var l=s.utcOffset;s.utcOffset=function(t,r){var i=this.$utils().u;if(i(t))return this.$u?0:i(this.$offset)?l.call(this):this.$offset;if("string"==typeof t&&null===(t=function(t){void 0===t&&(t="");var e=t.match(n);if(!e)return null;var r=(""+e[0]).match(a)||["-",0,0],i=r[0],s=60*+r[1]+ +r[2];return 0===s?0:"+"===i?s:-s}(t)))return this;var s=16>=Math.abs(t)?60*t:t,u=this;if(r)return u.$offset=s,u.$u=0===t,u;if(0!==t){var o=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(u=this.local().add(s+o,e)).$offset=s,u.$x.$localOffset=o}else u=this.utc();return u};var c=s.format;s.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return c.call(this,e)},s.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||(new Date).getTimezoneOffset());return this.$d.valueOf()-6e4*t},s.isUTC=function(){return!!this.$u},s.toISOString=function(){return this.toDate().toISOString()},s.toString=function(){return this.toDate().toUTCString()};var d=s.toDate;s.toDate=function(t){return"s"===t&&this.$offset?i(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():d.call(this)};var h=s.diff;s.diff=function(t,e,n){if(t&&this.$u===t.$u)return h.call(this,t,e,n);var a=this.local(),r=i(t).local();return h.call(a,r,e,n)}})},17891:function(t,e,n){"use strict";n.d(e,{B:function(){return f}});var a=n(67294);let r=t=>`
import { useState } from 'react';
import { ${t} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <${t}
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`,i=t=>`
import { useState } from 'react';
import { ${t} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date[]>([]);
  return (
    <${t}
      type="multiple"
      label="Pick dates"
      placeholder="Pick dates"
      value={value}
      onChange={setValue}
    />
  );
}
`,s=t=>`
import { useState } from 'react';
import { ${t} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <${t}
      type="range"
      label="Pick dates range"
      placeholder="Pick dates range"
      value={value}
      onChange={setValue}
    />
  );
}
`,u=t=>`import { ${t} } from '@mantine/dates';


function Demo() {
  return (
    <${t}
      {{props}}
    />
  );
}
`,o=t=>`
import { useState } from 'react';
import { ${t} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <${t}
      dropdownType="modal"
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`;var l=(0,n(54764).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]]),c=n(72622);let d=t=>`
import { useState } from 'react';
import { rem } from '@mantine/core';
import { IconCalendar } from '@tabler/icons-react';
import { ${t} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  const icon = <IconCalendar style={{ width: rem(18), height: rem(18) }} stroke={1.5} />;
  return (
    <${t}
      leftSection={icon}
      leftSectionPointerEvents="none"
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`,h=t=>`
import { ${t} } from '@mantine/dates';

function Demo() {
  return (
    <${t}
      clearable
      defaultValue={new Date()}
      label="Pick date"
      placeholder="Pick date"
    />
  );
}
`;function f(t){return{usage:{type:"code",centered:!0,maxWidth:400,code:r(t.displayName.replace("@mantine/dates/","")),component:()=>{let[e,n]=(0,a.useState)(null);return a.createElement(t,{label:"Pick date",placeholder:"Pick date",value:e,onChange:n})}},multiple:{type:"code",centered:!0,maxWidth:400,code:i(t.displayName.replace("@mantine/dates/","")),component:()=>{let[e,n]=(0,a.useState)([]);return a.createElement(t,{type:"multiple",label:"Pick dates",placeholder:"Pick dates",value:e,onChange:n})}},range:{type:"code",centered:!0,maxWidth:400,code:s(t.displayName.replace("@mantine/dates/","")),component:()=>{let[e,n]=(0,a.useState)([null,null]);return a.createElement(t,{type:"range",label:"Pick dates range",placeholder:"Pick dates range",value:e,onChange:n})}},configurator:{type:"configurator",component:t,centered:!0,maxWidth:400,code:u(t.displayName.replace("@mantine/dates/","")),controls:[{prop:"placeholder",type:"string",initialValue:"Pick date",libraryValue:"__"},{prop:"label",type:"string",initialValue:"Pick date",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"variant",type:"select",data:[{label:"default",value:"default"},{label:"filled",value:"filled"},{label:"unstyled",value:"unstyled"}],initialValue:"default",libraryValue:"default"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]},modal:{type:"code",centered:!0,maxWidth:400,code:o(t.displayName.replace("@mantine/dates/","")),component:()=>{let[e,n]=(0,a.useState)(null);return a.createElement(t,{dropdownType:"modal",label:"Pick date",placeholder:"Pick date",value:e,onChange:n})}},icon:{type:"code",centered:!0,maxWidth:400,code:d(t.displayName.replace("@mantine/dates/","")),component:()=>{let[e,n]=(0,a.useState)(null);return a.createElement(t,{leftSection:a.createElement(l,{style:{width:(0,c.h)(18),height:(0,c.h)(18)},stroke:1.5}),leftSectionPointerEvents:"none",label:"Pick date",placeholder:"Pick date",value:e,onChange:n})}},clearable:{type:"code",centered:!0,maxWidth:400,code:h(t.displayName.replace("@mantine/dates/","")),component:()=>a.createElement(t,{clearable:!0,defaultValue:new Date,label:"Pick date",placeholder:"Pick date"})}}}},12177:function(t,e,n){"use strict";n.d(e,{q:function(){return r}});var a=n(67294);function r(t=!1,e){let{onOpen:n,onClose:r}=e||{},[i,s]=(0,a.useState)(t),u=(0,a.useCallback)(()=>{s(t=>t||(null==n||n(),!0))},[n]),o=(0,a.useCallback)(()=>{s(t=>t?(null==r||r(),!1):t)},[r]),l=(0,a.useCallback)(()=>{i?o():u()},[o,u,i]);return[i,{open:u,close:o,toggle:l}]}}}]);