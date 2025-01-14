(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[589],{28879:function(e){var t;t=function(){"use strict";var e="millisecond",t="second",n="minute",r="hour",a="week",i="month",s="quarter",o="year",u="date",l="Invalid Date",c=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},h="en",p={};p[h]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||"th")+"]"}};var m="$isDayjsObject",$=function(e){return e instanceof D||!(!e||!e[m])},y=function e(t,n,r){var a;if(!t)return h;if("string"==typeof t){var i=t.toLowerCase();p[i]&&(a=i),n&&(p[i]=n,a=i);var s=t.split("-");if(!a&&s.length>1)return e(s[0])}else{var o=t.name;p[o]=t,a=o}return!r&&a&&(h=a),a||!r&&h},v=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new D(n)},g={s:f,z:function(e){var t=-e.utcOffset(),n=Math.abs(t);return(t<=0?"+":"-")+f(Math.floor(n/60),2,"0")+":"+f(n%60,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),a=t.clone().add(r,i),s=n-a<0,o=t.clone().add(r+(s?-1:1),i);return+(-(r+(n-a)/(s?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(l){return({M:i,y:o,w:a,d:"day",D:u,h:r,m:n,s:t,ms:e,Q:s})[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};g.l=y,g.i=$,g.w=function(e,t){return v(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function f(e){this.$L=y(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[m]=!0}var h=f.prototype;return h.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(g.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(c);if(r){var a=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},h.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},h.$utils=function(){return g},h.isValid=function(){return this.$d.toString()!==l},h.isSame=function(e,t){var n=v(e);return this.startOf(t)<=n&&n<=this.endOf(t)},h.isAfter=function(e,t){return v(e)<this.startOf(t)},h.isBefore=function(e,t){return this.endOf(t)<v(e)},h.$g=function(e,t,n){return g.u(e)?this[t]:this.set(n,e)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(e,s){var l=this,c=!!g.u(s)||s,d=g.p(e),f=function(e,t){var n=g.w(l.$u?Date.UTC(l.$y,t,e):new Date(l.$y,t,e),l);return c?n:n.endOf("day")},h=function(e,t){return g.w(l.toDate()[e].apply(l.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),l)},p=this.$W,m=this.$M,$=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case o:return c?f(1,0):f(31,11);case i:return c?f(1,m):f(0,m+1);case a:var v=this.$locale().weekStart||0,D=(p<v?p+7:p)-v;return f(c?$-D:$+(6-D),m);case"day":case u:return h(y+"Hours",0);case r:return h(y+"Minutes",1);case n:return h(y+"Seconds",2);case t:return h(y+"Milliseconds",3);default:return this.clone()}},h.endOf=function(e){return this.startOf(e,!1)},h.$set=function(a,s){var l,c=g.p(a),d="set"+(this.$u?"UTC":""),f=((l={}).day=d+"Date",l[u]=d+"Date",l[i]=d+"Month",l[o]=d+"FullYear",l[r]=d+"Hours",l[n]=d+"Minutes",l[t]=d+"Seconds",l[e]=d+"Milliseconds",l)[c],h="day"===c?this.$D+(s-this.$W):s;if(c===i||c===o){var p=this.clone().set(u,1);p.$d[f](h),p.init(),this.$d=p.set(u,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},h.set=function(e,t){return this.clone().$set(e,t)},h.get=function(e){return this[g.p(e)]()},h.add=function(e,s){var u,l=this;e=Number(e);var c=g.p(s),d=function(t){var n=v(l);return g.w(n.date(n.date()+Math.round(t*e)),l)};if(c===i)return this.set(i,this.$M+e);if(c===o)return this.set(o,this.$y+e);if("day"===c)return d(1);if(c===a)return d(7);var f=((u={})[n]=6e4,u[r]=36e5,u[t]=1e3,u)[c]||1,h=this.$d.getTime()+e*f;return g.w(h,this)},h.subtract=function(e,t){return this.add(-1*e,t)},h.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=e||"YYYY-MM-DDTHH:mm:ssZ",a=g.z(this),i=this.$H,s=this.$m,o=this.$M,u=n.weekdays,c=n.months,f=n.meridiem,h=function(e,n,a,i){return e&&(e[n]||e(t,r))||a[n].slice(0,i)},p=function(e){return g.s(i%12||12,e,"0")},m=f||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(d,function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return g.s(t.$y,4,"0");case"M":return o+1;case"MM":return g.s(o+1,2,"0");case"MMM":return h(n.monthsShort,o,c,3);case"MMMM":return h(c,o);case"D":return t.$D;case"DD":return g.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return h(n.weekdaysMin,t.$W,u,2);case"ddd":return h(n.weekdaysShort,t.$W,u,3);case"dddd":return u[t.$W];case"H":return String(i);case"HH":return g.s(i,2,"0");case"h":return p(1);case"hh":return p(2);case"a":return m(i,s,!0);case"A":return m(i,s,!1);case"m":return String(s);case"mm":return g.s(s,2,"0");case"s":return String(t.$s);case"ss":return g.s(t.$s,2,"0");case"SSS":return g.s(t.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")})},h.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},h.diff=function(e,u,l){var c,d=this,f=g.p(u),h=v(e),p=(h.utcOffset()-this.utcOffset())*6e4,m=this-h,$=function(){return g.m(d,h)};switch(f){case o:c=$()/12;break;case i:c=$();break;case s:c=$()/3;break;case a:c=(m-p)/6048e5;break;case"day":c=(m-p)/864e5;break;case r:c=m/36e5;break;case n:c=m/6e4;break;case t:c=m/1e3;break;default:c=m}return l?c:g.a(c)},h.daysInMonth=function(){return this.endOf(i).$D},h.$locale=function(){return p[this.$L]},h.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=y(e,t,!0);return r&&(n.$L=r),n},h.clone=function(){return g.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},f}(),x=D.prototype;return v.prototype=x,[["$ms",e],["$s",t],["$m",n],["$H",r],["$W","day"],["$M",i],["$y",o],["$D",u]].forEach(function(e){x[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),v.extend=function(e,t){return e.$i||(e(t,D,v),e.$i=!0),v},v.locale=y,v.isDayjs=$,v.unix=function(e){return v(1e3*e)},v.en=p[h],v.Ls=p,v.p={},v},e.exports=t()},66653:function(e){var t;t=function(){return function(e,t,n){var r=function(e){return e.add(4-e.isoWeekday(),"day")},a=t.prototype;a.isoWeekYear=function(){return r(this).year()},a.isoWeek=function(e){if(!this.$utils().u(e))return this.add(7*(e-this.isoWeek()),"day");var t,a,i,s=r(this),o=(t=this.isoWeekYear(),i=4-(a=(this.$u?n.utc:n)().year(t).startOf("year")).isoWeekday(),a.isoWeekday()>4&&(i+=7),a.add(i,"day"));return s.diff(o,"week")+1},a.isoWeekday=function(e){return this.$utils().u(e)?this.day()||7:this.day(this.day()%7?e:e-7)};var i=a.startOf;a.startOf=function(e,t){var n=this.$utils(),r=!!n.u(t)||t;return"isoweek"===n.p(e)?r?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):i.bind(this)(e,t)}}},e.exports=t()},67338:function(e){var t;t=function(){"use strict";var e={year:0,month:1,day:2,hour:3,minute:4,second:5},t={};return function(n,r,a){var i,s=function(e,n,r){void 0===r&&(r={});var a,i,s,o,u=new Date(e);return(void 0===(a=r)&&(a={}),(o=t[s=n+"|"+(i=a.timeZoneName||"short")])||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:n,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:i}),t[s]=o),o).formatToParts(u)},o=function(t,n){for(var r=s(t,n),i=[],o=0;o<r.length;o+=1){var u=r[o],l=u.type,c=u.value,d=e[l];d>=0&&(i[d]=parseInt(c,10))}var f=i[3],h=i[0]+"-"+i[1]+"-"+i[2]+" "+(24===f?0:f)+":"+i[4]+":"+i[5]+":000",p=+t;return(a.utc(h).valueOf()-(p-=p%1e3))/6e4},u=r.prototype;u.tz=function(e,t){void 0===e&&(e=i);var n,r=this.utcOffset(),s=this.toDate(),o=s.toLocaleString("en-US",{timeZone:e}),u=Math.round((s-new Date(o))/1e3/60),l=-(15*Math.round(s.getTimezoneOffset()/15))-u;if(Number(l)){if(n=a(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(l,!0),t){var c=n.utcOffset();n=n.add(r-c,"minute")}}else n=this.utcOffset(0,t);return n.$x.$timezone=e,n},u.offsetName=function(e){var t=this.$x.$timezone||a.tz.guess(),n=s(this.valueOf(),t,{timeZoneName:e}).find(function(e){return"timezonename"===e.type.toLowerCase()});return n&&n.value};var l=u.startOf;u.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var n=a(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return l.call(n,e,t).tz(this.$x.$timezone,!0)},a.tz=function(e,t,n){var r=n&&t,s=n||t||i,u=o(+a(),s);if("string"!=typeof e)return a(e).tz(s);var l=function(e,t,n){var r=e-60*t*1e3,a=o(r,n);if(t===a)return[r,t];var i=o(r-=60*(a-t)*1e3,n);return a===i?[r,a]:[e-60*Math.min(a,i)*1e3,Math.max(a,i)]}(a.utc(e,r).valueOf(),u,s),c=l[0],d=l[1],f=a(c).utcOffset(d);return f.$x.$timezone=s,f},a.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},a.tz.setDefault=function(e){i=e}}},e.exports=t()},10264:function(e){var t;t=function(){"use strict";var e="minute",t=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g;return function(r,a,i){var s=a.prototype;i.utc=function(e){var t={date:e,utc:!0,args:arguments};return new a(t)},s.utc=function(t){var n=i(this.toDate(),{locale:this.$L,utc:!0});return t?n.add(this.utcOffset(),e):n},s.local=function(){return i(this.toDate(),{locale:this.$L,utc:!1})};var o=s.parse;s.parse=function(e){e.utc&&(this.$u=!0),this.$utils().u(e.$offset)||(this.$offset=e.$offset),o.call(this,e)};var u=s.init;s.init=function(){if(this.$u){var e=this.$d;this.$y=e.getUTCFullYear(),this.$M=e.getUTCMonth(),this.$D=e.getUTCDate(),this.$W=e.getUTCDay(),this.$H=e.getUTCHours(),this.$m=e.getUTCMinutes(),this.$s=e.getUTCSeconds(),this.$ms=e.getUTCMilliseconds()}else u.call(this)};var l=s.utcOffset;s.utcOffset=function(r,a){var i=this.$utils().u;if(i(r))return this.$u?0:i(this.$offset)?l.call(this):this.$offset;if("string"==typeof r&&null===(r=function(e){void 0===e&&(e="");var r=e.match(t);if(!r)return null;var a=(""+r[0]).match(n)||["-",0,0],i=a[0],s=60*+a[1]+ +a[2];return 0===s?0:"+"===i?s:-s}(r)))return this;var s=16>=Math.abs(r)?60*r:r,o=this;if(a)return o.$offset=s,o.$u=0===r,o;if(0!==r){var u=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(o=this.local().add(s+u,e)).$offset=s,o.$x.$localOffset=u}else o=this.utc();return o};var c=s.format;s.format=function(e){var t=e||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return c.call(this,t)},s.valueOf=function(){var e=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*e},s.isUTC=function(){return!!this.$u},s.toISOString=function(){return this.toDate().toISOString()},s.toString=function(){return this.toDate().toUTCString()};var d=s.toDate;s.toDate=function(e){return"s"===e&&this.$offset?i(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():d.call(this)};var f=s.diff;s.diff=function(e,t,n){if(e&&this.$u===e.$u)return f.call(this,e,t,n);var r=this.local(),a=i(e).local();return f.call(r,a,t,n)}}},e.exports=t()},4917:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dates/date-picker-input",function(){return n(12999)}])},12999:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(52322),a=n(45392),i=n(65328),s=n(18738);let o={type:"code",centered:!0,maxWidth:400,component:function(){return(0,r.jsx)(s.a,{valueFormat:"YYYY MMM DD",type:"multiple",label:"Pick date",placeholder:"Pick date"})},code:`
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <DatePickerInput
      valueFormat="YYYY MMM DD"
      type="multiple"
      label="Pick date"
      placeholder="Pick date"
    />
  );
}
`},u={type:"code",centered:!0,maxWidth:400,component:function(){return(0,r.jsx)(s.a,{valueFormat:"YYYY MMM DD",type:"multiple",label:"Disabled",placeholder:"Pick date",disabled:!0})},code:`
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <DatePickerInput
      valueFormat="YYYY MMM DD"
      type="multiple"
      label="Disabled"
      placeholder="Pick date"
      disabled
    />
  );
}
`};var l=n(54078),c=n(15019);let d=(0,l.A)(c.us.DatePickerInput);function f(e){let t={a:"a",code:"code",h2:"h2",p:"p",...(0,a.a)(),...e.components},{Demo:n,GetElementRef:s,InputAccessibility:l,InputFeatures:c}=t;return n||p("Demo",!0),s||p("GetElementRef",!0),l||p("InputAccessibility",!0),c||p("InputFeatures",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"datepicker-props",children:"DatePicker props"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"DatePickerInput"})," supports most of the ",(0,r.jsx)(t.a,{href:"/dates/date-picker/",children:"DatePicker"})," props,\nread through ",(0,r.jsx)(t.a,{href:"/dates/date-picker/",children:"DatePicker"})," documentation to learn about all component features that are not listed on this page."]}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n,{data:i.j_}),"\n",(0,r.jsx)(t.h2,{id:"multiple-dates",children:"Multiple dates"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:'type="multiple"'})," to allow user to pick multiple dates:"]}),"\n",(0,r.jsx)(n,{data:i.m6}),"\n",(0,r.jsx)(t.h2,{id:"dates-range",children:"Dates range"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:'type="range"'})," to allow user to pick dates range:"]}),"\n",(0,r.jsx)(n,{data:i.w6}),"\n",(0,r.jsx)(t.h2,{id:"open-picker-in-modal",children:"Open picker in modal"}),"\n",(0,r.jsxs)(t.p,{children:["By default, ",(0,r.jsx)(t.a,{href:"/dates/date-picker/",children:"DatePicker"})," is rendered inside ",(0,r.jsx)(t.a,{href:"/core/popover/",children:"Popover"}),".\nYou can change that to ",(0,r.jsx)(t.a,{href:"/core/modal/",children:"Modal"})," by setting ",(0,r.jsx)(t.code,{children:'dropdownType="modal"'}),":"]}),"\n",(0,r.jsx)(n,{data:i.oC}),"\n",(0,r.jsx)(t.h2,{id:"value-format",children:"Value format"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"valueFormat"})," prop to change ",(0,r.jsx)(t.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format"})," of value label:"]}),"\n",(0,r.jsx)(n,{data:o}),"\n",(0,r.jsx)(t.h2,{id:"value-formatter",children:"Value formatter"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"valueFormatter"})," is a more powerful alternative to ",(0,r.jsx)(t.code,{children:"valueFormat"})," prop.\nIt allows formatting value label with a custom function.\nThe function is the same for all component types (",(0,r.jsx)(t.code,{children:"default"}),", ",(0,r.jsx)(t.code,{children:"multiple"})," and ",(0,r.jsx)(t.code,{children:"range"}),")\n– you need to perform additional checks inside the function to handle different types."]}),"\n",(0,r.jsxs)(t.p,{children:["Example of using a custom formatter function with ",(0,r.jsx)(t.code,{children:'type="multiple"'}),":"]}),"\n",(0,r.jsx)(n,{data:i.wD}),"\n",(0,r.jsx)(t.h2,{id:"clearable",children:"Clearable"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"clearable"})," prop to display clear button in the right section. Note that if you set ",(0,r.jsx)(t.code,{children:"rightSection"}),"\nprop, clear button will not be displayed."]}),"\n",(0,r.jsx)(n,{data:i.$S}),"\n",(0,r.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,r.jsx)(n,{data:u}),"\n",(0,r.jsx)(t.h2,{id:"input-props",children:"Input props"}),"\n",(0,r.jsx)(c,{component:"DatePickerInput",element:"button"}),"\n",(0,r.jsx)(n,{data:i.gB}),"\n",(0,r.jsx)(t.h2,{id:"with-icon",children:"With icon"}),"\n",(0,r.jsx)(n,{data:i.qv}),"\n",(0,r.jsx)(s,{component:"DatePickerInput",refType:"button",package:"@mantine/dates"}),"\n",(0,r.jsx)(l,{component:"DatePickerInput",packageName:"@mantine/dates"})]})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(d,{...e,children:(0,r.jsx)(f,{...e})})}function p(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},65328:function(e,t,n){"use strict";n.d(t,{$S:function(){return c},gB:function(){return o},j_:function(){return a},m6:function(){return i},oC:function(){return u},qv:function(){return l},w6:function(){return s},wD:function(){return d}});var r=n(18738);n(52322),n(2784);let{usage:a,multiple:i,range:s,configurator:o,modal:u,icon:l,clearable:c,valueFormatter:d}=(0,n(42411).B)(r.a)},42411:function(e,t,n){"use strict";n.d(t,{B:function(){return $}});var r=n(52322);let a=e=>`
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
`;var h=n(28879);let p=e=>`
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
`,m=({type:e,date:t,locale:n,format:r})=>{if("multiple"===e&&Array.isArray(t)){if(1===t.length)return h(t[0]).locale(n).format(r);if(t.length>1)return`${t.length} dates selected`}return""};function $(e){return{usage:{type:"code",centered:!0,maxWidth:400,code:f(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,s.useState)(null);return(0,r.jsx)(e,{label:"Pick date",placeholder:"Pick date",value:t,onChange:n})}},multiple:{type:"code",centered:!0,maxWidth:400,code:c(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,s.useState)([]);return(0,r.jsx)(e,{type:"multiple",label:"Pick dates",placeholder:"Pick dates",value:t,onChange:n})}},range:{type:"code",centered:!0,maxWidth:400,code:d(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,s.useState)([null,null]);return(0,r.jsx)(e,{type:"range",label:"Pick dates range",placeholder:"Pick dates range",value:t,onChange:n})}},configurator:{type:"configurator",component:e,centered:!0,maxWidth:400,code:i(e.displayName.replace("@mantine/dates/","")),controls:[{prop:"placeholder",type:"string",initialValue:"Pick date",libraryValue:"__"},{prop:"label",type:"string",initialValue:"Pick date",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"variant",type:"select",data:[{label:"default",value:"default"},{label:"filled",value:"filled"},{label:"unstyled",value:"unstyled"}],initialValue:"default",libraryValue:"default"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]},modal:{type:"code",centered:!0,maxWidth:400,code:l(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,s.useState)(null);return(0,r.jsx)(e,{dropdownType:"modal",label:"Pick date",placeholder:"Pick date",value:t,onChange:n})}},icon:{type:"code",centered:!0,maxWidth:400,code:u(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,s.useState)(null);return(0,r.jsx)(e,{leftSection:(0,r.jsx)(o.Z,{size:18,stroke:1.5}),leftSectionPointerEvents:"none",label:"Pick date",placeholder:"Pick date",value:t,onChange:n})}},clearable:{type:"code",centered:!0,maxWidth:400,code:a(e.displayName.replace("@mantine/dates/","")),component:()=>(0,r.jsx)(e,{clearable:!0,defaultValue:new Date,label:"Pick date",placeholder:"Pick date"})},valueFormatter:{type:"code",centered:!0,maxWidth:400,code:p(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,s.useState)([]);return(0,r.jsx)(e,{label:"Pick 2 dates or more",placeholder:"Pick 2 dates or more",value:t,onChange:n,type:"multiple",valueFormatter:m})}}}}}},function(e){e.O(0,[61177,66748,61639,45953,18738,92888,49774,40179],function(){return e(e.s=4917)}),_N_E=e.O()}]);