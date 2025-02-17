(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[23623],{23464:function(e){var t;t=function(){"use strict";var e="millisecond",t="second",o="minute",n="hour",r="week",i="month",s="quarter",a="year",l="date",d="Invalid Date",c=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,u=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p=function(e,t,o){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(o)+e},h="en",f={};f[h]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],o=e%100;return"["+e+(t[(o-20)%10]||t[o]||"th")+"]"}};var m="$isDayjsObject",v=function(e){return e instanceof j||!(!e||!e[m])},x=function e(t,o,n){var r;if(!t)return h;if("string"==typeof t){var i=t.toLowerCase();f[i]&&(r=i),o&&(f[i]=o,r=i);var s=t.split("-");if(!r&&s.length>1)return e(s[0])}else{var a=t.name;f[a]=t,r=a}return!n&&r&&(h=r),r||!n&&h},w=function(e,t){if(v(e))return e.clone();var o="object"==typeof t?t:{};return o.date=e,o.args=arguments,new j(o)},g={s:p,z:function(e){var t=-e.utcOffset(),o=Math.abs(t);return(t<=0?"+":"-")+p(Math.floor(o/60),2,"0")+":"+p(o%60,2,"0")},m:function e(t,o){if(t.date()<o.date())return-e(o,t);var n=12*(o.year()-t.year())+(o.month()-t.month()),r=t.clone().add(n,i),s=o-r<0,a=t.clone().add(n+(s?-1:1),i);return+(-(n+(o-r)/(s?r-a:a-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(d){return({M:i,y:a,w:r,d:"day",D:l,h:n,m:o,s:t,ms:e,Q:s})[d]||String(d||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};g.l=x,g.i=v,g.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var j=function(){function p(e){this.$L=x(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[m]=!0}var h=p.prototype;return h.parse=function(e){this.$d=function(e){var t=e.date,o=e.utc;if(null===t)return new Date(NaN);if(g.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(c);if(n){var r=n[2]-1||0,i=(n[7]||"0").substring(0,3);return o?new Date(Date.UTC(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.init()},h.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},h.$utils=function(){return g},h.isValid=function(){return this.$d.toString()!==d},h.isSame=function(e,t){var o=w(e);return this.startOf(t)<=o&&o<=this.endOf(t)},h.isAfter=function(e,t){return w(e)<this.startOf(t)},h.isBefore=function(e,t){return this.endOf(t)<w(e)},h.$g=function(e,t,o){return g.u(e)?this[t]:this.set(o,e)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(e,s){var d=this,c=!!g.u(s)||s,u=g.p(e),p=function(e,t){var o=g.w(d.$u?Date.UTC(d.$y,t,e):new Date(d.$y,t,e),d);return c?o:o.endOf("day")},h=function(e,t){return g.w(d.toDate()[e].apply(d.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),d)},f=this.$W,m=this.$M,v=this.$D,x="set"+(this.$u?"UTC":"");switch(u){case a:return c?p(1,0):p(31,11);case i:return c?p(1,m):p(0,m+1);case r:var w=this.$locale().weekStart||0,j=(f<w?f+7:f)-w;return p(c?v-j:v+(6-j),m);case"day":case l:return h(x+"Hours",0);case n:return h(x+"Minutes",1);case o:return h(x+"Seconds",2);case t:return h(x+"Milliseconds",3);default:return this.clone()}},h.endOf=function(e){return this.startOf(e,!1)},h.$set=function(r,s){var d,c=g.p(r),u="set"+(this.$u?"UTC":""),p=((d={}).day=u+"Date",d[l]=u+"Date",d[i]=u+"Month",d[a]=u+"FullYear",d[n]=u+"Hours",d[o]=u+"Minutes",d[t]=u+"Seconds",d[e]=u+"Milliseconds",d)[c],h="day"===c?this.$D+(s-this.$W):s;if(c===i||c===a){var f=this.clone().set(l,1);f.$d[p](h),f.init(),this.$d=f.set(l,Math.min(this.$D,f.daysInMonth())).$d}else p&&this.$d[p](h);return this.init(),this},h.set=function(e,t){return this.clone().$set(e,t)},h.get=function(e){return this[g.p(e)]()},h.add=function(e,s){var l,d=this;e=Number(e);var c=g.p(s),u=function(t){var o=w(d);return g.w(o.date(o.date()+Math.round(t*e)),d)};if(c===i)return this.set(i,this.$M+e);if(c===a)return this.set(a,this.$y+e);if("day"===c)return u(1);if(c===r)return u(7);var p=((l={})[o]=6e4,l[n]=36e5,l[t]=1e3,l)[c]||1,h=this.$d.getTime()+e*p;return g.w(h,this)},h.subtract=function(e,t){return this.add(-1*e,t)},h.format=function(e){var t=this,o=this.$locale();if(!this.isValid())return o.invalidDate||d;var n=e||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$H,s=this.$m,a=this.$M,l=o.weekdays,c=o.months,p=o.meridiem,h=function(e,o,r,i){return e&&(e[o]||e(t,n))||r[o].slice(0,i)},f=function(e){return g.s(i%12||12,e,"0")},m=p||function(e,t,o){var n=e<12?"AM":"PM";return o?n.toLowerCase():n};return n.replace(u,function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return g.s(t.$y,4,"0");case"M":return a+1;case"MM":return g.s(a+1,2,"0");case"MMM":return h(o.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return t.$D;case"DD":return g.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return h(o.weekdaysMin,t.$W,l,2);case"ddd":return h(o.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return g.s(i,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return m(i,s,!0);case"A":return m(i,s,!1);case"m":return String(s);case"mm":return g.s(s,2,"0");case"s":return String(t.$s);case"ss":return g.s(t.$s,2,"0");case"SSS":return g.s(t.$ms,3,"0");case"Z":return r}return null}(e)||r.replace(":","")})},h.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},h.diff=function(e,l,d){var c,u=this,p=g.p(l),h=w(e),f=(h.utcOffset()-this.utcOffset())*6e4,m=this-h,v=function(){return g.m(u,h)};switch(p){case a:c=v()/12;break;case i:c=v();break;case s:c=v()/3;break;case r:c=(m-f)/6048e5;break;case"day":c=(m-f)/864e5;break;case n:c=m/36e5;break;case o:c=m/6e4;break;case t:c=m/1e3;break;default:c=m}return d?c:g.a(c)},h.daysInMonth=function(){return this.endOf(i).$D},h.$locale=function(){return f[this.$L]},h.locale=function(e,t){if(!e)return this.$L;var o=this.clone(),n=x(e,t,!0);return n&&(o.$L=n),o},h.clone=function(){return g.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},p}(),b=j.prototype;return w.prototype=b,[["$ms",e],["$s",t],["$m",o],["$H",n],["$W","day"],["$M",i],["$y",a],["$D",l]].forEach(function(e){b[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),w.extend=function(e,t){return e.$i||(e(t,j,w),e.$i=!0),w},w.locale=x,w.isDayjs=v,w.unix=function(e){return w(1e3*e)},w.en=f[h],w.Ls=f,w.p={},w},e.exports=t()},58390:function(e){var t;t=function(){return function(e,t,o){var n=function(e){return e.add(4-e.isoWeekday(),"day")},r=t.prototype;r.isoWeekYear=function(){return n(this).year()},r.isoWeek=function(e){if(!this.$utils().u(e))return this.add(7*(e-this.isoWeek()),"day");var t,r,i,s=n(this),a=(t=this.isoWeekYear(),i=4-(r=(this.$u?o.utc:o)().year(t).startOf("year")).isoWeekday(),r.isoWeekday()>4&&(i+=7),r.add(i,"day"));return s.diff(a,"week")+1},r.isoWeekday=function(e){return this.$utils().u(e)?this.day()||7:this.day(this.day()%7?e:e-7)};var i=r.startOf;r.startOf=function(e,t){var o=this.$utils(),n=!!o.u(t)||t;return"isoweek"===o.p(e)?n?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):i.bind(this)(e,t)}}},e.exports=t()},26168:function(e){var t;t=function(){"use strict";var e={year:0,month:1,day:2,hour:3,minute:4,second:5},t={};return function(o,n,r){var i,s=function(e,o,n){void 0===n&&(n={});var r,i,s,a,l=new Date(e);return(void 0===(r=n)&&(r={}),(a=t[s=o+"|"+(i=r.timeZoneName||"short")])||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:o,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:i}),t[s]=a),a).formatToParts(l)},a=function(t,o){for(var n=s(t,o),i=[],a=0;a<n.length;a+=1){var l=n[a],d=l.type,c=l.value,u=e[d];u>=0&&(i[u]=parseInt(c,10))}var p=i[3],h=i[0]+"-"+i[1]+"-"+i[2]+" "+(24===p?0:p)+":"+i[4]+":"+i[5]+":000",f=+t;return(r.utc(h).valueOf()-(f-=f%1e3))/6e4},l=n.prototype;l.tz=function(e,t){void 0===e&&(e=i);var o,n=this.utcOffset(),s=this.toDate(),a=s.toLocaleString("en-US",{timeZone:e}),l=Math.round((s-new Date(a))/1e3/60),d=-(15*Math.round(s.getTimezoneOffset()/15))-l;if(Number(d)){if(o=r(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(d,!0),t){var c=o.utcOffset();o=o.add(n-c,"minute")}}else o=this.utcOffset(0,t);return o.$x.$timezone=e,o},l.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),o=s(this.valueOf(),t,{timeZoneName:e}).find(function(e){return"timezonename"===e.type.toLowerCase()});return o&&o.value};var d=l.startOf;l.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return d.call(this,e,t);var o=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return d.call(o,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,o){var n=o&&t,s=o||t||i,l=a(+r(),s);if("string"!=typeof e)return r(e).tz(s);var d=function(e,t,o){var n=e-60*t*1e3,r=a(n,o);if(t===r)return[n,t];var i=a(n-=60*(r-t)*1e3,o);return r===i?[n,r]:[e-60*Math.min(r,i)*1e3,Math.max(r,i)]}(r.utc(e,n).valueOf(),l,s),c=d[0],u=d[1],p=r(c).utcOffset(u);return p.$x.$timezone=s,p},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){i=e}}},e.exports=t()},57657:function(e){var t;t=function(){"use strict";var e="minute",t=/[+-]\d\d(?::?\d\d)?/g,o=/([+-]|\d\d)/g;return function(n,r,i){var s=r.prototype;i.utc=function(e){var t={date:e,utc:!0,args:arguments};return new r(t)},s.utc=function(t){var o=i(this.toDate(),{locale:this.$L,utc:!0});return t?o.add(this.utcOffset(),e):o},s.local=function(){return i(this.toDate(),{locale:this.$L,utc:!1})};var a=s.parse;s.parse=function(e){e.utc&&(this.$u=!0),this.$utils().u(e.$offset)||(this.$offset=e.$offset),a.call(this,e)};var l=s.init;s.init=function(){if(this.$u){var e=this.$d;this.$y=e.getUTCFullYear(),this.$M=e.getUTCMonth(),this.$D=e.getUTCDate(),this.$W=e.getUTCDay(),this.$H=e.getUTCHours(),this.$m=e.getUTCMinutes(),this.$s=e.getUTCSeconds(),this.$ms=e.getUTCMilliseconds()}else l.call(this)};var d=s.utcOffset;s.utcOffset=function(n,r){var i=this.$utils().u;if(i(n))return this.$u?0:i(this.$offset)?d.call(this):this.$offset;if("string"==typeof n&&null===(n=function(e){void 0===e&&(e="");var n=e.match(t);if(!n)return null;var r=(""+n[0]).match(o)||["-",0,0],i=r[0],s=60*+r[1]+ +r[2];return 0===s?0:"+"===i?s:-s}(n)))return this;var s=16>=Math.abs(n)?60*n:n,a=this;if(r)return a.$offset=s,a.$u=0===n,a;if(0!==n){var l=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(a=this.local().add(s+l,e)).$offset=s,a.$x.$localOffset=l}else a=this.utc();return a};var c=s.format;s.format=function(e){var t=e||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return c.call(this,t)},s.valueOf=function(){var e=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*e},s.isUTC=function(){return!!this.$u},s.toISOString=function(){return this.toDate().toISOString()},s.toString=function(){return this.toDate().toUTCString()};var u=s.toDate;s.toDate=function(e){return"s"===e&&this.$offset?i(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():u.call(this)};var p=s.diff;s.diff=function(e,t,o){if(e&&this.$u===e.$u)return p.call(this,e,t,o);var n=this.local(),r=i(e).local();return p.call(n,r,t,o)}}},e.exports=t()},38063:(e,t,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/popover",function(){return o(43728)}])},43728:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>O});var n=o(31085),r=o(71184),i=o(35764),s=o(52022),a=o(93065);let l={type:"code",code:`
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  return (
    <Popover width={200} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">This is uncontrolled popover, it is opened when button is clicked</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0,component:function(){return(0,n.jsxs)(i.A,{width:200,position:"bottom",withArrow:!0,shadow:"md",children:[(0,n.jsx)(i.A.Target,{children:(0,n.jsx)(s.$,{children:"Toggle popover"})}),(0,n.jsx)(i.A.Dropdown,{children:(0,n.jsx)(a.E,{size:"xs",children:"This is uncontrolled popover, it is opened when button is clicked"})})]})}};var d=o(92051);let c={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <Popover width={200} position="bottom" withArrow shadow="md" opened={opened}>
      <Popover.Target>
        <Button onMouseEnter={open} onMouseLeave={close}>
          Hover to see popover
        </Button>
      </Popover.Target>
      <Popover.Dropdown style={{ pointerEvents: 'none' }}>
        <Text size="sm">This popover is shown when user hovers the target element</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0,component:function(){let[e,{close:t,open:o}]=(0,d.j)(!1);return(0,n.jsxs)(i.A,{width:200,position:"bottom",withArrow:!0,shadow:"md",opened:e,children:[(0,n.jsx)(i.A.Target,{children:(0,n.jsx)(s.$,{onMouseEnter:o,onMouseLeave:t,children:"Hover to see popover"})}),(0,n.jsx)(i.A.Dropdown,{style:{pointerEvents:"none"},children:(0,n.jsx)(a.E,{size:"sm",children:"This popover is shown when user hovers the target element"})})]})}};var u=o(90275);let p={type:"code",code:`
import { Popover, Button, TextInput } from '@mantine/core';

function Demo() {
  return (
    <Popover width={300} trapFocus position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <TextInput label="Name" placeholder="Name" size="xs" />
        <TextInput label="Email" placeholder="john@doe.com" size="xs" mt="xs" />
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0,component:function(){return(0,n.jsxs)(i.A,{width:300,trapFocus:!0,position:"bottom",withArrow:!0,shadow:"md",children:[(0,n.jsx)(i.A.Target,{children:(0,n.jsx)(s.$,{children:"Toggle popover"})}),(0,n.jsxs)(i.A.Dropdown,{children:[(0,n.jsx)(u.k,{label:"Name",placeholder:"Name",size:"xs"}),(0,n.jsx)(u.k,{label:"Email",placeholder:"john@doe.com",size:"xs",mt:"xs"})]})]})}};var h=o(75995);let f={type:"code",component:function(){return(0,n.jsxs)(a.E,{children:["Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this Pok\xe9mon was hunted close to extinction by those who were after the priceless antlers."," ",(0,n.jsxs)(i.A,{middlewares:{flip:!0,shift:!0,inline:!0},position:"top",children:[(0,n.jsx)(i.A.Target,{children:(0,n.jsx)(h.C,{children:"When visiting a junkyard"})}),(0,n.jsx)(i.A.Dropdown,{children:"Inline dropdown"})]}),", you may catch sight of it having an intense fight with Murkrow over shiny objects.Ho-Oh’s feathers glow in seven colors depending on the angle at which they are struck by light. These feathers are said to bring happiness to the bearers. This Pok\xe9mon is said to live at the foot of a rainbow."]})},code:`
import { Popover, Mark, Text } from '@mantine/core';

function Demo() {
  return (
    <Text>
      Stantler\u2019s magnificent antlers were traded at high prices as works of art. As a result, this
      Pok\xe9mon was hunted close to extinction by those who were after the priceless antlers.{' '}
      <Popover middlewares={{ flip: true, shift: true, inline: true }} position="top">
        <Popover.Target>
          <Mark>When visiting a junkyard</Mark>
        </Popover.Target>
        <Popover.Dropdown>Inline dropdown</Popover.Dropdown>
      </Popover>
      , you may catch sight of it having an intense fight with Murkrow over shiny objects.Ho-Oh\u2019s
      feathers glow in seven colors depending on the angle at which they are struck by light. These
      feathers are said to bring happiness to the bearers. This Pok\xe9mon is said to live at the foot
      of a rainbow.
    </Text>
  );
}
`},m={type:"code",code:`
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  return (
    <Popover width="target" position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button w={280}>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="sm">
          This popover has same width as target, it is useful when you are building input dropdowns
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}

`,centered:!0,component:function(){return(0,n.jsxs)(i.A,{width:"target",position:"bottom",withArrow:!0,shadow:"md",children:[(0,n.jsx)(i.A.Target,{children:(0,n.jsx)(s.$,{w:280,children:"Toggle popover"})}),(0,n.jsx)(i.A.Dropdown,{children:(0,n.jsx)(a.E,{size:"sm",children:"This popover has same width as target, it is useful when you are building input dropdowns"})})]})}};var v=o(73368);let x={type:"configurator",component:function(e){return(0,n.jsxs)(i.A,{width:200,opened:!0,...e,children:[(0,n.jsx)(i.A.Target,{children:(0,n.jsx)(s.$,{children:"Popover target"})}),(0,n.jsx)(i.A.Dropdown,{children:(0,n.jsx)(a.E,{size:"xs",children:"Change position and offset to configure dropdown offset relative to target"})})]})},code:`
import { Popover, Button, Text } from '@mantine/core';


function Demo() {
  return (
    <Popover
      width={200}
      opened
      {{props}}
    >
      <Popover.Target>
        <Button>Popover target</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">
          Change position and offset to configure dropdown offset relative to target
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0,controls:[{type:"select",prop:"position",initialValue:"bottom",data:v.K,libraryValue:null},{type:"number",prop:"offset",initialValue:0,libraryValue:null,min:-50,max:50}]},w={type:"configurator",component:function(e){return(0,n.jsxs)(i.A,{width:200,position:e.position,opened:!0,offset:{mainAxis:e.mainAxis,crossAxis:e.crossAxis},children:[(0,n.jsx)(i.A.Target,{children:(0,n.jsx)(s.$,{children:"Popover target"})}),(0,n.jsx)(i.A.Dropdown,{children:(0,n.jsx)(a.E,{size:"xs",children:"Change position and offset to configure dropdown offset relative to target"})})]})},code:e=>`
import { Popover, Button, Text } from '@mantine/core';

function Demo() {
  return (
    <Popover
      width={200}
      position="${e.position}"
      opened
      offset={{ mainAxis: ${e.mainAxis}, crossAxis: ${e.crossAxis} }}
    >
      <Popover.Target>
        <Button>Popover target</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">
          Change position and offset to configure dropdown offset relative to target
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0,controls:[{type:"select",prop:"position",initialValue:"bottom",data:v.K,libraryValue:null},{type:"number",prop:"mainAxis",initialValue:0,libraryValue:null,min:-50,max:50},{type:"number",prop:"crossAxis",initialValue:0,libraryValue:null,min:-50,max:50}]},g={type:"configurator",component:function(e){return(0,n.jsxs)(i.A,{width:200,opened:!0,position:"bottom-start",withArrow:!0,...e,children:[(0,n.jsx)(i.A.Target,{children:(0,n.jsx)(s.$,{children:"Target element"})}),(0,n.jsx)(i.A.Dropdown,{children:(0,n.jsx)(a.E,{size:"xs",children:"Arrow position can be changed for *-start and *-end positions"})})]})},code:`
import { Popover, Button, Text } from '@mantine/core';

function Demo() {
  return (
    <Popover width={200} opened position="bottom-start" withArrow{{props}}>
      <Popover.Target>
        <Button>Target element</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">Arrow position can be changed for *-start and *-end positions</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0,controls:[{type:"segmented",prop:"arrowPosition",initialValue:"center",libraryValue:"center",data:["center","side"]},{type:"number",prop:"arrowOffset",initialValue:10,libraryValue:10,min:5,max:50},{type:"number",prop:"arrowSize",initialValue:7,libraryValue:7,min:5,max:12},{type:"number",prop:"arrowRadius",initialValue:0,libraryValue:0,min:0,max:10}]};var j=o(75898);let b={type:"configurator",component:function(e){return(0,n.jsxs)(i.A,{width:200,...e,children:[(0,n.jsx)(i.A.Target,{children:(0,n.jsx)(s.$,{children:"Toggle popover"})}),(0,n.jsx)(i.A.Dropdown,{children:(0,n.jsx)(a.E,{size:"xs",children:"Disabled popover dropdown is always hidden"})})]})},code:`
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  return (
    <Popover width={200}{{props}}>
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">Disabled popover dropdown is always hidden</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0,controls:[{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1}]},y={type:"code",component:function(){return(0,n.jsxs)(i.A,{width:200,position:"bottom",clickOutsideEvents:["mouseup","touchend"],children:[(0,n.jsx)(i.A.Target,{children:(0,n.jsx)(s.$,{children:"Toggle popover"})}),(0,n.jsx)(i.A.Dropdown,{children:(0,n.jsx)(a.E,{size:"xs",children:"Popover will be closed with mouseup and touchend events"})})]})},code:`
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  return (
    <Popover width={200} position="bottom" clickOutsideEvents={['mouseup', 'touchend']}>
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">Popover will be closed with mouseup and touchend events</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0};var P=o(78501),D=o(50543);let $={type:"code",component:function(){return(0,n.jsxs)(i.A,{width:300,position:"bottom",withArrow:!0,shadow:"md",children:[(0,n.jsx)(i.A.Target,{children:(0,n.jsx)(s.$,{children:"Toggle popover"})}),(0,n.jsxs)(i.A.Dropdown,{bg:"var(--mantine-color-body)",children:[(0,n.jsx)(P.l,{label:"Select within Popover",placeholder:"Select within Popover",comboboxProps:{withinPortal:!1},data:["React","Angular","Svelte","Vue"]}),(0,n.jsx)(D.t,{label:"DatePickerInput within Popover",placeholder:"DatePickerInput within Popover",popoverProps:{withinPortal:!1},mt:"md"})]})]})},code:`
import { Button, Popover, Select } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <Popover width={300} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown bg="var(--mantine-color-body)">
        <Select
          label="Select within Popover"
          placeholder="Select within Popover"
          comboboxProps={{ withinPortal: false }}
          data={['React', 'Angular', 'Svelte', 'Vue']}
        />
        <DatePickerInput
          label="DatePickerInput within Popover"
          placeholder="DatePickerInput within Popover"
          popoverProps={{ withinPortal: false }}
          mt="md"
        />
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0};var T=o(85954),A=o(38215);let S=(0,T.P)(A.XZ.Popover);function k(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Demo:o,KeyboardEventsTable:i,TargetComponent:s}=t;return o||C("Demo",!0),i||C("KeyboardEventsTable",!0),s||C("TargetComponent",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(o,{data:l}),"\n",(0,n.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsxs)(t.p,{children:["You can control Popover state with ",(0,n.jsx)(t.code,{children:"opened"})," and ",(0,n.jsx)(t.code,{children:"onChange"})," props:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Button, Popover } from '@mantine/core';\n\nfunction Demo() {\n  const [opened, setOpened] = useState(false);\n  return (\n    <Popover opened={opened} onChange={setOpened}>\n      <Popover.Target>\n        <Button onClick={() => setOpened((o) => !o)}>\n          Toggle popover\n        </Button>\n      </Popover.Target>\n\n      <Popover.Dropdown>Dropdown</Popover.Dropdown>\n    </Popover>\n  );\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"Controlled example with mouse events:"}),"\n",(0,n.jsx)(o,{data:c,demoProps:{toggle:!1}}),"\n",(0,n.jsx)(t.h2,{id:"focus-trap",children:"Focus trap"}),"\n",(0,n.jsxs)(t.p,{children:["If you need to use interactive elements (inputs, buttons, etc.) inside ",(0,n.jsx)(t.code,{children:"Popover.Dropdown"}),", set ",(0,n.jsx)(t.code,{children:"trapFocus"})," prop:"]}),"\n",(0,n.jsx)(o,{data:p}),"\n",(0,n.jsx)(t.h2,{id:"inline-elements",children:"Inline elements"}),"\n",(0,n.jsxs)(t.p,{children:["Enable ",(0,n.jsx)(t.code,{children:"inline"})," middleware to use ",(0,n.jsx)(t.code,{children:"Popover"})," with inline elements:"]}),"\n",(0,n.jsx)(o,{data:f}),"\n",(0,n.jsx)(t.h2,{id:"same-width",children:"Same width"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:'width="target"'})," prop to make Popover dropdown take the same width as target element:"]}),"\n",(0,n.jsx)(o,{data:m}),"\n",(0,n.jsx)(t.h2,{id:"offset",children:"offset"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"offset"})," prop to a number to change dropdown position relative to the target element.\nThis way you can control dropdown offset on main axis only."]}),"\n",(0,n.jsx)(o,{data:x}),"\n",(0,n.jsxs)(t.p,{children:["To control offset on both axis, pass object with ",(0,n.jsx)(t.code,{children:"mainAxis"})," and ",(0,n.jsx)(t.code,{children:"crossAxis"})," properties:"]}),"\n",(0,n.jsx)(o,{data:w}),"\n",(0,n.jsx)(t.h2,{id:"middlewares",children:"Middlewares"}),"\n",(0,n.jsxs)(t.p,{children:["You can enable or disable ",(0,n.jsx)(t.a,{href:"https://floating-ui.com/",children:"Floating UI"})," middlewares with\n",(0,n.jsx)(t.code,{children:"middlewares"})," prop:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://floating-ui.com/docs/shift",children:"shift"})," middleware shifts the dropdown to keep it in view. It is enabled by default"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://floating-ui.com/docs/flip",children:"flip"})," middleware changes the placement of the dropdown to keep it in view. It is enabled by default."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://floating-ui.com/docs/inline",children:"inline"})," middleware improves positioning for inline reference elements that span over multiple lines. It is disabled by default."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://floating-ui.com/docs/size",children:"size"})," middleware manipulates dropdown size. It is disabled by default."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Example of turning off ",(0,n.jsx)(t.code,{children:"shift"})," and ",(0,n.jsx)(t.code,{children:"flip"})," middlewares:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { Popover } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Popover\n      middlewares={{ flip: false, shift: false }}\n      position=\"bottom\"\n    >\n      {/* Popover content */}\n    </Popover>\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"customize-middleware-options",children:"Customize middleware options"}),"\n",(0,n.jsxs)(t.p,{children:["To customize ",(0,n.jsx)(t.a,{href:"https://floating-ui.com/",children:"Floating UI"})," middlewares options, pass them as\nan object to the ",(0,n.jsx)(t.code,{children:"middlewares"})," prop. For example, to change ",(0,n.jsx)(t.a,{href:"https://floating-ui.com/docs/shift",children:"shift"}),"\nmiddleware padding to ",(0,n.jsx)(t.code,{children:"20px"})," use the following configuration:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { Popover } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Popover\n      middlewares={{ shift: { padding: 20 } }}\n      position=\"bottom\"\n    >\n      {/* Popover content */}\n    </Popover>\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"dropdown-arrow",children:"Dropdown arrow"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"withArrow"})," prop to add an arrow to the dropdown. Arrow is a ",(0,n.jsx)(t.code,{children:"div"})," element rotated with ",(0,n.jsx)(t.code,{children:"transform: rotate(45deg)"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"arrowPosition"})," prop determines how arrow is position relative to the target element when ",(0,n.jsx)(t.code,{children:"position"})," is set to ",(0,n.jsx)(t.code,{children:"*-start"})," and ",(0,n.jsx)(t.code,{children:"*-end"})," values on ",(0,n.jsx)(t.code,{children:"Popover"})," component.\nBy default, the value is ",(0,n.jsx)(t.code,{children:"center"})," – the arrow is positioned in the center of the target element if it is possible."]}),"\n",(0,n.jsxs)(t.p,{children:["If you change ",(0,n.jsx)(t.code,{children:"arrowPosition"})," to ",(0,n.jsx)(t.code,{children:"side"}),", then the arrow will be positioned on the side of the target element,\nand you will be able to control arrow offset with ",(0,n.jsx)(t.code,{children:"arrowOffset"})," prop. Note that when ",(0,n.jsx)(t.code,{children:"arrowPosition"})," is set to ",(0,n.jsx)(t.code,{children:"center"}),",\n",(0,n.jsx)(t.code,{children:"arrowOffset"})," prop is ignored."]}),"\n",(0,n.jsx)(o,{data:g}),"\n",(0,n.jsx)(t.h2,{id:"with-overlay",children:"With overlay"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"withOverlay"})," prop to add overlay behind the dropdown. You can pass additional\nconfiguration to ",(0,n.jsx)(t.a,{href:"/core/overlay/",children:"Overlay"})," component with ",(0,n.jsx)(t.code,{children:"overlayProps"})," prop:"]}),"\n",(0,n.jsx)(o,{data:j.L}),"\n",(0,n.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"disabled"})," prop to prevent ",(0,n.jsx)(t.code,{children:"Popover.Dropdown"})," from rendering:"]}),"\n",(0,n.jsx)(o,{data:b}),"\n",(0,n.jsx)(t.h2,{id:"click-outside",children:"Click outside"}),"\n",(0,n.jsxs)(t.p,{children:["By default, ",(0,n.jsx)(t.code,{children:"Popover"})," closes when you click outside of the dropdown. To disable this behavior, set ",(0,n.jsx)(t.code,{children:"closeOnClickOutside={false}"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["You can configure events that are used for click outside detection with ",(0,n.jsx)(t.code,{children:"clickOutsideEvents"})," prop.\nBy default, ",(0,n.jsx)(t.code,{children:"Popover"})," listens to ",(0,n.jsx)(t.code,{children:"mousedown"})," and ",(0,n.jsx)(t.code,{children:"touchstart"})," events. You can change it to any other\nevents, for example, ",(0,n.jsx)(t.code,{children:"mouseup"})," and ",(0,n.jsx)(t.code,{children:"touchend"}),":"]}),"\n",(0,n.jsx)(o,{data:y}),"\n",(0,n.jsx)(t.h2,{id:"ondismiss",children:"onDismiss"}),"\n",(0,n.jsxs)(t.p,{children:["If you need to control opened state, but still want to close popover on outside clicks\nand escape key presses, use ",(0,n.jsx)(t.code,{children:"onDismiss"})," prop:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Button, Popover } from '@mantine/core';\n\nfunction Demo() {\n  const [opened, setOpened] = useState(false);\n  return (\n    <Popover\n      opened={opened}\n      onDismiss={() => setOpened(false)}\n    >\n      <Popover.Target>\n        <Button onClick={() => setOpened((o) => !o)}>\n          Toggle popover\n        </Button>\n      </Popover.Target>\n\n      <Popover.Dropdown>Dropdown</Popover.Dropdown>\n    </Popover>\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"initial-focus",children:"Initial focus"}),"\n",(0,n.jsxs)(t.p,{children:["Popover uses ",(0,n.jsx)(t.a,{href:"/core/focus-trap/",children:"FocusTrap"})," component to manage focus.\nAdd ",(0,n.jsx)(t.code,{children:"data-autofocus"})," attribute to element that should receive initial focus:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { Popover } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Popover>\n      <Popover.Target>\n        <button type=\"button\">Target</button>\n      </Popover.Target>\n      <Popover.Dropdown>\n        <input />\n        <input data-autofocus />\n        <input />\n      </Popover.Dropdown>\n    </Popover>\n  );\n}\n"})}),"\n",(0,n.jsx)(s,{component:"Popover"}),"\n",(0,n.jsx)(t.h2,{id:"nested-popovers",children:"Nested popovers"}),"\n",(0,n.jsxs)(t.p,{children:["Nested popovers require children rendering without ",(0,n.jsx)(t.a,{href:"/core/portal/",children:"Portal"}),". Usually, you\nshould disable portal with props of the component that renders popover content, for example,\n",(0,n.jsx)(t.a,{href:"/core/select/",children:"Select"})," has ",(0,n.jsx)(t.code,{children:"comboboxProps={{ withinPortal: false }}"})," prop. Check documentation\nof the component that you are using to render popover content to find out how to disable the portal.\nIf the portal is not disabled, outside click will close all popovers."]}),"\n",(0,n.jsxs)(t.p,{children:["Example of disabling portal in ",(0,n.jsx)(t.a,{href:"/core/select/",children:"Select"})," and ",(0,n.jsx)(t.a,{href:"/dates/date-picker-input/",children:"DatePickerInput"}),"\ncomponents:"]}),"\n",(0,n.jsx)(o,{data:$}),"\n",(0,n.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsxs)(t.p,{children:["Popover follows ",(0,n.jsx)(t.a,{href:"https://www.w3.org/TR/wai-aria-practices-1.2/#dialog_modal",children:"WAI-ARIA recommendations"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Dropdown element has ",(0,n.jsx)(t.code,{children:'role="dialog"'})," and ",(0,n.jsx)(t.code,{children:'aria-labelledby="target-id"'})," attributes"]}),"\n",(0,n.jsxs)(t.li,{children:["Target element has ",(0,n.jsx)(t.code,{children:'aria-haspopup="dialog"'}),", ",(0,n.jsx)(t.code,{children:"aria-expanded"}),", ",(0,n.jsx)(t.code,{children:'aria-controls="dropdown-id"'})," attributes"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Uncontrolled Popover will be accessible only when used with ",(0,n.jsx)(t.code,{children:"button"})," element or component that renders it (",(0,n.jsx)(t.a,{href:"/core/button/",children:"Button"}),", ",(0,n.jsx)(t.a,{href:"/core/action-icon/",children:"ActionIcon"}),", etc.).\nOther elements will not support ",(0,n.jsx)(t.code,{children:"Space"})," and ",(0,n.jsx)(t.code,{children:"Enter"})," key presses."]}),"\n",(0,n.jsx)(t.h2,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,n.jsx)(i,{data:[{key:"Escape",description:"Closes dropdown",condition:"Focus within dropdown"},{key:"Space/Enter",description:"Opens/closes dropdown",condition:"Focus on target element"}]})]})}function O(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(S,{...e,children:(0,n.jsx)(k,{...e})})}function C(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},75898:(e,t,o)=>{"use strict";o.d(t,{L:()=>u});var n=o(31085),r=o(35764),i=o(33970),s=o(86658),a=o(56051),l=o(75390),d=o(93065),c=o(12129);let u={type:"code",component:function(){return(0,n.jsxs)(r.A,{width:320,shadow:"md",withArrow:!0,withOverlay:!0,overlayProps:{zIndex:1e4,blur:"8px"},zIndex:10001,children:[(0,n.jsx)(r.A.Target,{children:(0,n.jsx)(i.N,{style:{zIndex:10001,position:"relative"},children:(0,n.jsx)(s.e,{src:"https://avatars.githubusercontent.com/u/79146003?s=200&v=4",radius:"xl"})})}),(0,n.jsxs)(r.A.Dropdown,{children:[(0,n.jsxs)(a.Y,{children:[(0,n.jsx)(s.e,{src:"https://avatars.githubusercontent.com/u/79146003?s=200&v=4",radius:"xl"}),(0,n.jsxs)(l.B,{gap:5,children:[(0,n.jsx)(d.E,{size:"sm",fw:700,style:{lineHeight:1},children:"Mantine"}),(0,n.jsx)(c.M,{href:"https://x.com/mantinedev",c:"dimmed",size:"xs",style:{lineHeight:1},children:"@mantinedev"})]})]}),(0,n.jsx)(d.E,{size:"sm",mt:"md",children:"Customizable React components and hooks library with focus on usability, accessibility and developer experience"}),(0,n.jsxs)(a.Y,{mt:"md",gap:"xl",children:[(0,n.jsxs)(d.E,{size:"sm",children:[(0,n.jsx)("b",{children:"0"})," Following"]}),(0,n.jsxs)(d.E,{size:"sm",children:[(0,n.jsx)("b",{children:"1,174"})," Followers"]})]})]})]})},code:`
import { Popover, Avatar, Text, Group, Anchor, Stack } from '@mantine/core';

function Demo() {
  return (
    <Popover
      width={320}
      shadow="md"
      withArrow
      withOverlay
      overlayProps={{ zIndex: 10000, blur: '8px' }}
      zIndex={10001}
    >
      <Popover.Target>
        <UnstyledButton style={{ zIndex: 10001, position: 'relative' }}>
          <Avatar src="https://avatars.githubusercontent.com/u/79146003?s=200&v=4" radius="xl" />
        </UnstyledButton>
      </Popover.Target>
      <Popover.Dropdown>
        <Group>
          <Avatar src="https://avatars.githubusercontent.com/u/79146003?s=200&v=4" radius="xl" />
          <Stack gap={5}>
            <Text size="sm" fw={700} style={{ lineHeight: 1 }}>
              Mantine
            </Text>
            <Anchor href="https://x.com/mantinedev" c="dimmed" size="xs" style={{ lineHeight: 1 }}>
              @mantinedev
            </Anchor>
          </Stack>
        </Group>

        <Text size="sm" mt="md">
          Customizable React components and hooks library with focus on usability, accessibility and
          developer experience
        </Text>

        <Group mt="md" gap="xl">
          <Text size="sm">
            <b>0</b> Following
          </Text>
          <Text size="sm">
            <b>1,174</b> Followers
          </Text>
        </Group>
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0}},73368:(e,t,o)=>{"use strict";o.d(t,{K:()=>n,s:()=>r});let n=[{label:"top",value:"top"},{label:"top-start",value:"top-start"},{label:"top-end",value:"top-end"},{label:"left",value:"left"},{label:"left-start",value:"left-start"},{label:"left-end",value:"left-end"},{label:"right",value:"right"},{label:"right-start",value:"right-start"},{label:"right-end",value:"right-end"},{label:"bottom",value:"bottom"},{label:"bottom-start",value:"bottom-start"},{label:"bottom-end",value:"bottom-end"}],r=[{label:"side",value:"side"},{label:"center",value:"center"}]},86658:(e,t,o)=>{"use strict";o.d(t,{e:()=>y});var n=o(31085),r=o(14041),i=o(33450),s=o(7098),a=o(29686),l=o(69564),d=o(34056),c=o(2453),u=o(6754);let p=(0,r.createContext)(null),h=p.Provider;var f={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};let m={},v=(0,s.V)((e,{spacing:t})=>({group:{"--ag-spacing":(0,i.GY)(t)}})),x=(0,u.P9)((e,t)=>{let o=(0,a.Y)("AvatarGroup",m,e),{classNames:r,className:i,style:s,styles:c,unstyled:u,vars:p,spacing:x,...w}=o,g=(0,l.I)({name:"AvatarGroup",classes:f,props:o,className:i,style:s,classNames:r,styles:c,unstyled:u,vars:p,varsResolver:v,rootSelector:"group"});return(0,n.jsx)(h,{value:!0,children:(0,n.jsx)(d.a,{ref:t,...g("group"),...w})})});function w(e){return(0,n.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}x.classes=f,x.displayName="@mantine/core/AvatarGroup";let g=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],j={},b=(0,s.V)((e,{size:t,radius:o,variant:n,gradient:r,color:s,autoContrast:a,name:l,allowedInitialsColors:d})=>{let c="initials"===s&&"string"==typeof l?function(e,t=g){let o=Math.abs(function(e){let t=0;for(let o=0;o<e.length;o+=1)t=(t<<5)-t+e.charCodeAt(o)|0;return t}(e))%t.length;return t[o]}(l,d):s,u=e.variantColorResolver({color:c||"gray",theme:e,gradient:r,variant:n||"light",autoContrast:a});return{root:{"--avatar-size":(0,i.YC)(t,"avatar-size"),"--avatar-radius":void 0===o?void 0:(0,i.nJ)(o),"--avatar-bg":c||n?u.background:void 0,"--avatar-color":c||n?u.color:void 0,"--avatar-bd":c||n?u.border:void 0}}}),y=(0,c.v)((e,t)=>{let o=(0,a.Y)("Avatar",j,e),{classNames:i,className:s,style:c,styles:u,unstyled:h,vars:m,src:v,alt:x,radius:g,color:y,gradient:P,imageProps:D,children:$,autoContrast:T,mod:A,name:S,allowedInitialsColors:k,...O}=o,C={withinGroup:!!(0,r.useContext)(p)},[M,z]=(0,r.useState)(!v),I=(0,l.I)({name:"Avatar",props:o,classes:f,className:s,style:c,classNames:i,styles:u,unstyled:h,vars:m,varsResolver:b});return(0,r.useEffect)(()=>z(!v),[v]),(0,n.jsx)(d.a,{...I("root"),mod:[{"within-group":C.withinGroup},A],ref:t,...O,children:M?(0,n.jsx)("span",{...I("placeholder"),title:x,children:$||"string"==typeof S&&function(e,t=2){let o=e.split(" ");return 1===o.length?e.slice(0,t).toUpperCase():o.map(e=>e[0]).slice(0,t).join("").toUpperCase()}(S)||(0,n.jsx)(w,{})}):(0,n.jsx)("img",{...D,...I("image"),src:v,alt:x,onError:e=>{z(!0),D?.onError?.(e)}})})});y.classes=f,y.displayName="@mantine/core/Avatar",y.Group=x},65567:(e,t,o)=>{"use strict";o.d(t,{i:()=>u});var n=o(31085),r=o(54357),i=o(5583),s=o(37950),a=o(31791),l=o(51513),d=o(51200);function c({data:e,withCheckIcon:t,value:o,checkIconPosition:s,unstyled:u,renderOption:p}){if(!(0,l.c)(e)){var h;let l=(h=e.value,Array.isArray(o)?o.includes(h):o===h),c=t&&l&&(0,n.jsx)(i.S,{className:d.A.optionsDropdownCheckIcon}),f=(0,n.jsxs)(n.Fragment,{children:["left"===s&&c,(0,n.jsx)("span",{children:e.label}),"right"===s&&c]});return(0,n.jsx)(a.G.Option,{value:e.value,disabled:e.disabled,className:(0,r.A)({[d.A.optionsDropdownOption]:!u}),"data-reverse":"right"===s||void 0,"data-checked":l||void 0,"aria-selected":l,active:l,children:"function"==typeof p?p({option:e,checked:l}):f})}let f=e.items.map(e=>(0,n.jsx)(c,{data:e,value:o,unstyled:u,withCheckIcon:t,checkIconPosition:s,renderOption:p},e.value));return(0,n.jsx)(a.G.Group,{label:e.group,children:f})}function u({data:e,hidden:t,hiddenWhenEmpty:o,filter:r,search:i,limit:d,maxDropdownHeight:u,withScrollArea:p=!0,filterOptions:h=!0,withCheckIcon:f=!1,value:m,checkIconPosition:v,nothingFoundMessage:x,unstyled:w,labelId:g,renderOption:j,scrollAreaProps:b,"aria-label":y}){!function e(t,o=new Set){if(Array.isArray(t))for(let n of t)if((0,l.c)(n))e(n.items,o);else{if(void 0===n.value)throw Error("[@mantine/core] Each option must have value property");if("string"!=typeof n.value)throw Error(`[@mantine/core] Option value must be a string, other data formats are not supported, got ${typeof n.value}`);if(o.has(n.value))throw Error(`[@mantine/core] Duplicate options are not supported. Option with value "${n.value}" was provided more than once`);o.add(n.value)}}(e);let P="string"==typeof i?(r||function e({options:t,search:o,limit:n}){let r=o.trim().toLowerCase(),i=[];for(let s=0;s<t.length;s+=1){let a=t[s];if(i.length===n)break;(0,l.c)(a)&&i.push({group:a.group,items:e({options:a.items,search:o,limit:n-i.length})}),!(0,l.c)(a)&&a.label.toLowerCase().includes(r)&&i.push(a)}return i})({options:e,search:h?i:"",limit:d??1/0}):e,D=function(e){if(0===e.length)return!0;for(let t of e)if(!("group"in t)||t.items.length>0)return!1;return!0}(P),$=P.map(e=>(0,n.jsx)(c,{data:e,withCheckIcon:f,value:m,checkIconPosition:v,unstyled:w,renderOption:j},(0,l.c)(e)?e.group:e.value));return(0,n.jsx)(a.G.Dropdown,{hidden:t||o&&D,"data-composed":!0,children:(0,n.jsxs)(a.G.Options,{labelledBy:g,"aria-label":y,children:[p?(0,n.jsx)(s.F.Autosize,{mah:u??220,type:"scroll",scrollbarSize:"var(--combobox-padding)",offsetScrollbars:"y",...b,children:$}):$,D&&x&&(0,n.jsx)(a.G.Empty,{children:x})]})})}},51513:(e,t,o)=>{"use strict";function n(e){return"group"in e}o.d(t,{c:()=>n})},35213:(e,t,o)=>{"use strict";o.d(t,{D:()=>function e(t){return t.reduce((t,o)=>"group"in o?{...t,...e(o.items)}:(t[o.value]=o,t),{})}})},78501:(e,t,o)=>{"use strict";o.d(t,{l:()=>w});var n=o(31085),r=o(14041),i=o(97567),s=o(82307),a=o(34211),l=o(36456),d=o(29686),c=o(6754),u=o(46395),p=o(35213),h=o(31791),f=o(65567),m=o(88559),v=o(87059);let x={searchable:!1,withCheckIcon:!0,allowDeselect:!0,checkIconPosition:"left"},w=(0,c.P9)((e,t)=>{let o=(0,d.Y)("Select",x,e),{classNames:c,styles:w,unstyled:g,vars:j,dropdownOpened:b,defaultDropdownOpened:y,onDropdownClose:P,onDropdownOpen:D,onFocus:$,onBlur:T,onClick:A,onChange:S,data:k,value:O,defaultValue:C,selectFirstOptionOnChange:M,onOptionSubmit:z,comboboxProps:I,readOnly:B,disabled:E,filter:_,limit:Y,withScrollArea:N,maxDropdownHeight:V,size:H,searchable:F,rightSection:U,checkIconPosition:W,withCheckIcon:G,nothingFoundMessage:L,name:Z,form:R,searchValue:J,defaultSearchValue:K,onSearchChange:X,allowDeselect:q,error:Q,rightSectionPointerEvents:ee,id:et,clearable:eo,clearButtonProps:en,hiddenInputProps:er,renderOption:ei,onClear:es,autoComplete:ea,scrollAreaProps:el,__defaultRightSection:ed,__clearSection:ec,__clearable:eu,chevronColor:ep,...eh}=o,ef=(0,r.useMemo)(()=>(0,u.d)(k),[k]),em=(0,r.useMemo)(()=>(0,p.D)(ef),[ef]),ev=(0,i.B)(et),[ex,ew,eg]=(0,s.Z)({value:O,defaultValue:C,finalValue:null,onChange:S}),ej="string"==typeof ex?em[ex]:void 0,eb=(0,a.Z)(ej),[ey,eP]=(0,s.Z)({value:J,defaultValue:K,finalValue:ej?ej.label:"",onChange:X}),eD=(0,m.B)({opened:b,defaultOpened:y,onDropdownOpen:()=>{D?.(),eD.updateSelectedOptionIndex("active",{scrollIntoView:!0})},onDropdownClose:()=>{P?.(),eD.resetSelectedOption()}}),{resolvedClassNames:e$,resolvedStyles:eT}=(0,l.Y)({props:o,styles:w,classNames:c});(0,r.useEffect)(()=>{M&&eD.selectFirstOption()},[M,ex]),(0,r.useEffect)(()=>{null===O&&eP(""),"string"==typeof O&&ej&&(eb?.value!==ej.value||eb?.label!==ej.label)&&eP(ej.label)},[O,ej]);let eA=(0,n.jsx)(h.G.ClearButton,{...en,onClear:()=>{ew(null,null),eP(""),es?.()}}),eS=eo&&!!ex&&!E&&!B;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(h.G,{store:eD,__staticSelector:"Select",classNames:e$,styles:eT,unstyled:g,readOnly:B,onOptionSubmit:e=>{z?.(e);let t=q&&em[e].value===ex?null:em[e],o=t?t.value:null;o!==ex&&ew(o,t),eg||eP("string"==typeof o&&t?.label||""),eD.closeDropdown()},size:H,...I,children:[(0,n.jsx)(h.G.Target,{targetType:F?"input":"button",autoComplete:ea,children:(0,n.jsx)(v.O,{id:ev,ref:t,__defaultRightSection:(0,n.jsx)(h.G.Chevron,{size:H,error:Q,unstyled:g,color:ep}),__clearSection:eA,__clearable:eS,rightSection:U,rightSectionPointerEvents:ee||(eS?"all":"none"),...eh,size:H,__staticSelector:"Select",disabled:E,readOnly:B||!F,value:ey,onChange:e=>{eP(e.currentTarget.value),eD.openDropdown(),M&&eD.selectFirstOption()},onFocus:e=>{F&&eD.openDropdown(),$?.(e)},onBlur:e=>{F&&eD.closeDropdown(),eP(null!=ex&&em[ex]?.label||""),T?.(e)},onClick:e=>{F?eD.openDropdown():eD.toggleDropdown(),A?.(e)},classNames:e$,styles:eT,unstyled:g,pointer:!F,error:Q})}),(0,n.jsx)(f.i,{data:ef,hidden:B||E,filter:_,search:ey,limit:Y,hiddenWhenEmpty:!L,withScrollArea:N,maxDropdownHeight:V,filterOptions:F&&ej?.label!==ey,value:ex,checkIconPosition:W,withCheckIcon:G,nothingFoundMessage:L,unstyled:g,labelId:eh.label?`${ev}-label`:void 0,"aria-label":eh.label?void 0:eh["aria-label"],renderOption:ei,scrollAreaProps:el})]}),(0,n.jsx)(h.G.HiddenInput,{value:ex,name:Z,form:R,disabled:E,...er})]})});w.classes={...v.O.classes,...h.G.classes},w.displayName="@mantine/core/Select"},34211:(e,t,o)=>{"use strict";o.d(t,{Z:()=>r});var n=o(14041);function r(e){let t=(0,n.useRef)(void 0);return(0,n.useEffect)(()=>{t.current=e},[e]),t.current}}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,39699,68831,68213,31791,50543,90636,46593,38792],()=>t(38063)),_N_E=e.O()}]);