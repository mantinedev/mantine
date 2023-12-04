(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6959],{27693:function(e){var t,o,n,r,i,s,a,l,c,u,d,p,h,f,m,v,w,g,x,b,y,P;e.exports=(t="millisecond",o="second",n="minute",r="hour",i="week",s="month",a="quarter",l="year",c="date",u="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(e,t,o){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(o)+e},(m={})[f="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],o=e%100;return"["+e+(t[(o-20)%10]||t[o]||"th")+"]"}},v="$isDayjsObject",w=function(e){return e instanceof y||!(!e||!e[v])},g=function e(t,o,n){var r;if(!t)return f;if("string"==typeof t){var i=t.toLowerCase();m[i]&&(r=i),o&&(m[i]=o,r=i);var s=t.split("-");if(!r&&s.length>1)return e(s[0])}else{var a=t.name;m[a]=t,r=a}return!n&&r&&(f=r),r||!n&&f},x=function(e,t){if(w(e))return e.clone();var o="object"==typeof t?t:{};return o.date=e,o.args=arguments,new y(o)},(b={s:h,z:function(e){var t=-e.utcOffset(),o=Math.abs(t);return(t<=0?"+":"-")+h(Math.floor(o/60),2,"0")+":"+h(o%60,2,"0")},m:function e(t,o){if(t.date()<o.date())return-e(o,t);var n=12*(o.year()-t.year())+(o.month()-t.month()),r=t.clone().add(n,s),i=o-r<0,a=t.clone().add(n+(i?-1:1),s);return+(-(n+(o-r)/(i?r-a:a-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return({M:s,y:l,w:i,d:"day",D:c,h:r,m:n,s:o,ms:t,Q:a})[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}}).l=g,b.i=w,b.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})},P=(y=function(){function e(e){this.$L=g(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[v]=!0}var h=e.prototype;return h.parse=function(e){this.$d=function(e){var t=e.date,o=e.utc;if(null===t)return new Date(NaN);if(b.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(d);if(n){var r=n[2]-1||0,i=(n[7]||"0").substring(0,3);return o?new Date(Date.UTC(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.init()},h.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},h.$utils=function(){return b},h.isValid=function(){return this.$d.toString()!==u},h.isSame=function(e,t){var o=x(e);return this.startOf(t)<=o&&o<=this.endOf(t)},h.isAfter=function(e,t){return x(e)<this.startOf(t)},h.isBefore=function(e,t){return this.endOf(t)<x(e)},h.$g=function(e,t,o){return b.u(e)?this[t]:this.set(o,e)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(e,t){var a=this,u=!!b.u(t)||t,d=b.p(e),p=function(e,t){var o=b.w(a.$u?Date.UTC(a.$y,t,e):new Date(a.$y,t,e),a);return u?o:o.endOf("day")},h=function(e,t){return b.w(a.toDate()[e].apply(a.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),a)},f=this.$W,m=this.$M,v=this.$D,w="set"+(this.$u?"UTC":"");switch(d){case l:return u?p(1,0):p(31,11);case s:return u?p(1,m):p(0,m+1);case i:var g=this.$locale().weekStart||0,x=(f<g?f+7:f)-g;return p(u?v-x:v+(6-x),m);case"day":case c:return h(w+"Hours",0);case r:return h(w+"Minutes",1);case n:return h(w+"Seconds",2);case o:return h(w+"Milliseconds",3);default:return this.clone()}},h.endOf=function(e){return this.startOf(e,!1)},h.$set=function(e,i){var a,u=b.p(e),d="set"+(this.$u?"UTC":""),p=((a={}).day=d+"Date",a[c]=d+"Date",a[s]=d+"Month",a[l]=d+"FullYear",a[r]=d+"Hours",a[n]=d+"Minutes",a[o]=d+"Seconds",a[t]=d+"Milliseconds",a)[u],h="day"===u?this.$D+(i-this.$W):i;if(u===s||u===l){var f=this.clone().set(c,1);f.$d[p](h),f.init(),this.$d=f.set(c,Math.min(this.$D,f.daysInMonth())).$d}else p&&this.$d[p](h);return this.init(),this},h.set=function(e,t){return this.clone().$set(e,t)},h.get=function(e){return this[b.p(e)]()},h.add=function(e,t){var a,c=this;e=Number(e);var u=b.p(t),d=function(t){var o=x(c);return b.w(o.date(o.date()+Math.round(t*e)),c)};if(u===s)return this.set(s,this.$M+e);if(u===l)return this.set(l,this.$y+e);if("day"===u)return d(1);if(u===i)return d(7);var p=((a={})[n]=6e4,a[r]=36e5,a[o]=1e3,a)[u]||1,h=this.$d.getTime()+e*p;return b.w(h,this)},h.subtract=function(e,t){return this.add(-1*e,t)},h.format=function(e){var t=this,o=this.$locale();if(!this.isValid())return o.invalidDate||u;var n=e||"YYYY-MM-DDTHH:mm:ssZ",r=b.z(this),i=this.$H,s=this.$m,a=this.$M,l=o.weekdays,c=o.months,d=o.meridiem,h=function(e,o,r,i){return e&&(e[o]||e(t,n))||r[o].slice(0,i)},f=function(e){return b.s(i%12||12,e,"0")},m=d||function(e,t,o){var n=e<12?"AM":"PM";return o?n.toLowerCase():n};return n.replace(p,function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return b.s(t.$y,4,"0");case"M":return a+1;case"MM":return b.s(a+1,2,"0");case"MMM":return h(o.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return t.$D;case"DD":return b.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return h(o.weekdaysMin,t.$W,l,2);case"ddd":return h(o.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return b.s(i,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return m(i,s,!0);case"A":return m(i,s,!1);case"m":return String(s);case"mm":return b.s(s,2,"0");case"s":return String(t.$s);case"ss":return b.s(t.$s,2,"0");case"SSS":return b.s(t.$ms,3,"0");case"Z":return r}return null}(e)||r.replace(":","")})},h.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},h.diff=function(e,t,c){var u,d=this,p=b.p(t),h=x(e),f=(h.utcOffset()-this.utcOffset())*6e4,m=this-h,v=function(){return b.m(d,h)};switch(p){case l:u=v()/12;break;case s:u=v();break;case a:u=v()/3;break;case i:u=(m-f)/6048e5;break;case"day":u=(m-f)/864e5;break;case r:u=m/36e5;break;case n:u=m/6e4;break;case o:u=m/1e3;break;default:u=m}return c?u:b.a(u)},h.daysInMonth=function(){return this.endOf(s).$D},h.$locale=function(){return m[this.$L]},h.locale=function(e,t){if(!e)return this.$L;var o=this.clone(),n=g(e,t,!0);return n&&(o.$L=n),o},h.clone=function(){return b.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},e}()).prototype,x.prototype=P,[["$ms",t],["$s",o],["$m",n],["$H",r],["$W","day"],["$M",s],["$y",l],["$D",c]].forEach(function(e){P[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),x.extend=function(e,t){return e.$i||(e(t,y,x),e.$i=!0),x},x.locale=g,x.isDayjs=w,x.unix=function(e){return x(1e3*e)},x.en=m[f],x.Ls=m,x.p={},x)},12197:function(e){var t,o;e.exports=(t={year:0,month:1,day:2,hour:3,minute:4,second:5},o={},function(e,n,r){var i,s=function(e,t,n){void 0===n&&(n={});var r,i,s,a,l=new Date(e);return(void 0===(r=n)&&(r={}),(a=o[s=t+"|"+(i=r.timeZoneName||"short")])||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:i}),o[s]=a),a).formatToParts(l)},a=function(e,o){for(var n=s(e,o),i=[],a=0;a<n.length;a+=1){var l=n[a],c=l.type,u=l.value,d=t[c];d>=0&&(i[d]=parseInt(u,10))}var p=i[3],h=i[0]+"-"+i[1]+"-"+i[2]+" "+(24===p?0:p)+":"+i[4]+":"+i[5]+":000",f=+e;return(r.utc(h).valueOf()-(f-=f%1e3))/6e4},l=n.prototype;l.tz=function(e,t){void 0===e&&(e=i);var o=this.utcOffset(),n=this.toDate(),s=n.toLocaleString("en-US",{timeZone:e}),a=Math.round((n-new Date(s))/1e3/60),l=r(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(-(15*Math.round(n.getTimezoneOffset()/15))-a,!0);if(t){var c=l.utcOffset();l=l.add(o-c,"minute")}return l.$x.$timezone=e,l},l.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),o=s(this.valueOf(),t,{timeZoneName:e}).find(function(e){return"timezonename"===e.type.toLowerCase()});return o&&o.value};var c=l.startOf;l.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return c.call(this,e,t);var o=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return c.call(o,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,o){var n=o&&t,s=o||t||i,l=a(+r(),s);if("string"!=typeof e)return r(e).tz(s);var c=function(e,t,o){var n=e-60*t*1e3,r=a(n,o);if(t===r)return[n,t];var i=a(n-=60*(r-t)*1e3,o);return r===i?[n,r]:[e-60*Math.min(r,i)*1e3,Math.max(r,i)]}(r.utc(e,n).valueOf(),l,s),u=c[0],d=c[1],p=r(u).utcOffset(d);return p.$x.$timezone=s,p},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){i=e}})},96600:function(e){var t,o,n;e.exports=(t="minute",o=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g,function(e,r,i){var s=r.prototype;i.utc=function(e){var t={date:e,utc:!0,args:arguments};return new r(t)},s.utc=function(e){var o=i(this.toDate(),{locale:this.$L,utc:!0});return e?o.add(this.utcOffset(),t):o},s.local=function(){return i(this.toDate(),{locale:this.$L,utc:!1})};var a=s.parse;s.parse=function(e){e.utc&&(this.$u=!0),this.$utils().u(e.$offset)||(this.$offset=e.$offset),a.call(this,e)};var l=s.init;s.init=function(){if(this.$u){var e=this.$d;this.$y=e.getUTCFullYear(),this.$M=e.getUTCMonth(),this.$D=e.getUTCDate(),this.$W=e.getUTCDay(),this.$H=e.getUTCHours(),this.$m=e.getUTCMinutes(),this.$s=e.getUTCSeconds(),this.$ms=e.getUTCMilliseconds()}else l.call(this)};var c=s.utcOffset;s.utcOffset=function(e,r){var i=this.$utils().u;if(i(e))return this.$u?0:i(this.$offset)?c.call(this):this.$offset;if("string"==typeof e&&null===(e=function(e){void 0===e&&(e="");var t=e.match(o);if(!t)return null;var r=(""+t[0]).match(n)||["-",0,0],i=r[0],s=60*+r[1]+ +r[2];return 0===s?0:"+"===i?s:-s}(e)))return this;var s=16>=Math.abs(e)?60*e:e,a=this;if(r)return a.$offset=s,a.$u=0===e,a;if(0!==e){var l=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(a=this.local().add(s+l,t)).$offset=s,a.$x.$localOffset=l}else a=this.utc();return a};var u=s.format;s.format=function(e){var t=e||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return u.call(this,t)},s.valueOf=function(){var e=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*e},s.isUTC=function(){return!!this.$u},s.toISOString=function(){return this.toDate().toISOString()},s.toString=function(){return this.toDate().toUTCString()};var d=s.toDate;s.toDate=function(e){return"s"===e&&this.$offset?i(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():d.call(this)};var p=s.diff;s.diff=function(e,t,o){if(e&&this.$u===e.$u)return p.call(this,e,t,o);var n=this.local(),r=i(e).local();return p.call(n,r,t,o)}})},26353:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/popover",function(){return o(82075)}])},82075:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return N}});var n=o(24246),r=o(71670),i=o(3916),s=o(30289),a=o(27378),l=o(63433),c=o(8671),Text=o(26569);let u=`
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
`,d={type:"code",code:u,centered:!0,component:function(){return a.createElement(l.J,{width:200,position:"bottom",withArrow:!0,shadow:"md"},a.createElement(l.J.Target,null,a.createElement(c.z,null,"Toggle popover")),a.createElement(l.J.Dropdown,null,a.createElement(Text.x,{size:"xs"},"This is uncontrolled popover, it is opened when button is clicked")))}};var p=o(87921);let h=`
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
`,f={type:"code",code:h,centered:!0,component:function(){let[e,{close:t,open:o}]=(0,p.q)(!1);return a.createElement(l.J,{width:200,position:"bottom",withArrow:!0,shadow:"md",opened:e},a.createElement(l.J.Target,null,a.createElement(c.z,{onMouseEnter:o,onMouseLeave:t},"Hover to see popover")),a.createElement(l.J.Dropdown,{style:{pointerEvents:"none"}},a.createElement(Text.x,{size:"sm"},"This popover is shown when user hovers the target element")))}};var m=o(7033);let v=`
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
`,w={type:"code",code:v,centered:!0,component:function(){return a.createElement(l.J,{width:300,trapFocus:!0,position:"bottom",withArrow:!0,shadow:"md"},a.createElement(l.J.Target,null,a.createElement(c.z,null,"Toggle popover")),a.createElement(l.J.Dropdown,null,a.createElement(m.o,{label:"Name",placeholder:"Name",size:"xs"}),a.createElement(m.o,{label:"Email",placeholder:"john@doe.com",size:"xs",mt:"xs"})))}};var g=o(20804);let x=`
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
`,b={type:"code",component:function(){return a.createElement(Text.x,null,"Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this Pok\xe9mon was hunted close to extinction by those who were after the priceless antlers."," ",a.createElement(l.J,{middlewares:{flip:!0,shift:!0,inline:!0},position:"top"},a.createElement(l.J.Target,null,a.createElement(g.v,null,"When visiting a junkyard")),a.createElement(l.J.Dropdown,null,"Inline dropdown")),", you may catch sight of it having an intense fight with Murkrow over shiny objects.Ho-Oh’s feathers glow in seven colors depending on the angle at which they are struck by light. These feathers are said to bring happiness to the bearers. This Pok\xe9mon is said to live at the foot of a rainbow.")},code:x},y=`
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

`,P={type:"code",code:y,centered:!0,component:function(){return a.createElement(l.J,{width:"target",position:"bottom",withArrow:!0,shadow:"md"},a.createElement(l.J.Target,null,a.createElement(c.z,{w:280},"Toggle popover")),a.createElement(l.J.Dropdown,null,a.createElement(Text.x,{size:"sm"},"This popover has same width as target, it is useful when you are building input dropdowns")))}};var D=o(67240);let $=`
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
`,T={type:"configurator",component:function(e){return a.createElement(l.J,{width:200,opened:!0,...e},a.createElement(l.J.Target,null,a.createElement(c.z,null,"Popover target")),a.createElement(l.J.Dropdown,null,a.createElement(Text.x,{size:"xs"},"Change position and offset to configure dropdown offset relative to target")))},code:$,centered:!0,controls:[{type:"select",prop:"position",initialValue:"bottom",data:D.c,libraryValue:null},{type:"number",prop:"offset",initialValue:0,libraryValue:null,min:-50,max:50}]},j={type:"configurator",component:function(e){return a.createElement(l.J,{width:200,position:e.position,opened:!0,offset:{mainAxis:e.mainAxis,crossAxis:e.crossAxis}},a.createElement(l.J.Target,null,a.createElement(c.z,null,"Popover target")),a.createElement(l.J.Dropdown,null,a.createElement(Text.x,{size:"xs"},"Change position and offset to configure dropdown offset relative to target")))},code:e=>`
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
`,centered:!0,controls:[{type:"select",prop:"position",initialValue:"bottom",data:D.c,libraryValue:null},{type:"number",prop:"mainAxis",initialValue:0,libraryValue:null,min:-50,max:50},{type:"number",prop:"crossAxis",initialValue:0,libraryValue:null,min:-50,max:50}]},E=`
import { Popover } from '@mantine/core';

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
`,S={type:"configurator",component:function(e){return a.createElement(l.J,{width:200,opened:!0,position:"bottom-start",withArrow:!0,...e},a.createElement(l.J.Target,null,a.createElement(c.z,null,"Target element")),a.createElement(l.J.Dropdown,null,a.createElement(Text.x,{size:"xs"},"Arrow position can be changed for *-start and *-end positions")))},code:E,centered:!0,controls:[{type:"segmented",prop:"arrowPosition",initialValue:"center",libraryValue:"center",data:["center","side"]},{type:"number",prop:"arrowOffset",initialValue:10,libraryValue:10,min:5,max:50},{type:"number",prop:"arrowSize",initialValue:7,libraryValue:7,min:5,max:12},{type:"number",prop:"arrowRadius",initialValue:0,libraryValue:0,min:0,max:10}]},O=`
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
`,M={type:"configurator",component:function(e){return a.createElement(l.J,{width:200,...e},a.createElement(l.J.Target,null,a.createElement(c.z,null,"Toggle popover")),a.createElement(l.J.Dropdown,null,a.createElement(Text.x,{size:"xs"},"Disabled popover dropdown is always hidden")))},code:O,centered:!0,controls:[{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1}]},k=`
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
`,z={type:"code",component:function(){return a.createElement(l.J,{width:200,position:"bottom",clickOutsideEvents:["mouseup","touchend"]},a.createElement(l.J.Target,null,a.createElement(c.z,null,"Toggle popover")),a.createElement(l.J.Dropdown,null,a.createElement(Text.x,{size:"xs"},"Popover will be closed with mouseup and touchend events")))},code:k,centered:!0};var A=o(2570),C=o(83014);let B=`
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
`,J={type:"code",component:function(){return a.createElement(l.J,{width:300,position:"bottom",withArrow:!0,shadow:"md"},a.createElement(l.J.Target,null,a.createElement(c.z,null,"Toggle popover")),a.createElement(l.J.Dropdown,{bg:"var(--mantine-color-body)"},a.createElement(A.P,{label:"Select within Popover",placeholder:"Select within Popover",comboboxProps:{withinPortal:!1},data:["React","Angular","Svelte","Vue"]}),a.createElement(C.a,{label:"DatePickerInput within Popover",placeholder:"DatePickerInput within Popover",popoverProps:{withinPortal:!1},mt:"md"})))},code:B,centered:!0},_=(0,i.A)(s.us.Popover);function I(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Demo:o,KeyboardEventsTable:i,TargetComponent:s}=t;return o||Y("Demo",!0),i||Y("KeyboardEventsTable",!0),s||Y("TargetComponent",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(o,{data:d}),"\n",(0,n.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsxs)(t.p,{children:["You can control Popover state with ",(0,n.jsx)(t.code,{children:"opened"})," and ",(0,n.jsx)(t.code,{children:"onChange"})," props:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Popover, Button } from '@mantine/core';\n\nfunction Demo() {\n  const [opened, setOpened] = useState(false);\n  return (\n    <Popover opened={opened} onChange={setOpened}>\n      <Popover.Target>\n        <Button onClick={() => setOpened((o) => !o)}>\n          Toggle popover\n        </Button>\n      </Popover.Target>\n\n      <Popover.Dropdown>Dropdown</Popover.Dropdown>\n    </Popover>\n  );\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"Controlled example with mouse events:"}),"\n",(0,n.jsx)(o,{data:f,demoProps:{toggle:!1}}),"\n",(0,n.jsx)(t.h2,{id:"focus-trap",children:"Focus trap"}),"\n",(0,n.jsxs)(t.p,{children:["If you need to use interactive elements (inputs, buttons, etc.) inside ",(0,n.jsx)(t.code,{children:"Popover.Dropdown"}),", set ",(0,n.jsx)(t.code,{children:"trapFocus"})," prop:"]}),"\n",(0,n.jsx)(o,{data:w}),"\n",(0,n.jsx)(t.h2,{id:"inline-elements",children:"Inline elements"}),"\n",(0,n.jsxs)(t.p,{children:["Enable ",(0,n.jsx)(t.code,{children:"inline"})," middleware to use ",(0,n.jsx)(t.code,{children:"Popover"})," with inline elements:"]}),"\n",(0,n.jsx)(o,{data:b}),"\n",(0,n.jsx)(t.h2,{id:"same-width",children:"Same width"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:'width="target"'})," prop to make Popover dropdown take the same width as target element:"]}),"\n",(0,n.jsx)(o,{data:P}),"\n",(0,n.jsx)(t.h2,{id:"offset",children:"offset"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"offset"})," prop to a number to change dropdown position relative to the target element.\nThis way you can control dropdown offset on main axis only."]}),"\n",(0,n.jsx)(o,{data:T}),"\n",(0,n.jsxs)(t.p,{children:["To control offset on both axis, pass object with ",(0,n.jsx)(t.code,{children:"mainAxis"})," and ",(0,n.jsx)(t.code,{children:"crossAxis"})," properties:"]}),"\n",(0,n.jsx)(o,{data:j}),"\n",(0,n.jsx)(t.h2,{id:"dropdown-arrow",children:"Dropdown arrow"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"withArrow"})," prop to add an arrow to the dropdown. Arrow is a ",(0,n.jsx)(t.code,{children:"div"})," element rotated with ",(0,n.jsx)(t.code,{children:"transform: rotate(45deg)"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"arrowPosition"})," prop determines how arrow is position relative to the target element when ",(0,n.jsx)(t.code,{children:"position"})," is set to ",(0,n.jsx)(t.code,{children:"*-start"})," and ",(0,n.jsx)(t.code,{children:"*-end"})," values on ",(0,n.jsx)(t.code,{children:"Popover"})," component.\nBy default, the value is ",(0,n.jsx)(t.code,{children:"center"})," – the arrow is positioned in the center of the target element if it is possible."]}),"\n",(0,n.jsxs)(t.p,{children:["If you change ",(0,n.jsx)(t.code,{children:"arrowPosition"})," to ",(0,n.jsx)(t.code,{children:"side"}),", then the arrow will be positioned on the side of the target element,\nand you will be able to control arrow offset with ",(0,n.jsx)(t.code,{children:"arrowOffset"})," prop. Note that when ",(0,n.jsx)(t.code,{children:"arrowPosition"})," is set to ",(0,n.jsx)(t.code,{children:"center"}),",\n",(0,n.jsx)(t.code,{children:"arrowOffset"})," prop is ignored."]}),"\n",(0,n.jsx)(o,{data:S}),"\n",(0,n.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"disabled"})," prop to prevent ",(0,n.jsx)(t.code,{children:"Popover.Dropdown"})," from rendering:"]}),"\n",(0,n.jsx)(o,{data:M}),"\n",(0,n.jsx)(t.h2,{id:"click-outside",children:"Click outside"}),"\n",(0,n.jsxs)(t.p,{children:["By default, ",(0,n.jsx)(t.code,{children:"Popover"})," closes when you click outside of the dropdown. To disable this behavior, set ",(0,n.jsx)(t.code,{children:"closeOnClickOutside={false}"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["You can configure events that are used for click outside detection with ",(0,n.jsx)(t.code,{children:"clickOutsideEvents"})," prop.\nBy default, ",(0,n.jsx)(t.code,{children:"Popover"})," listens to ",(0,n.jsx)(t.code,{children:"mousedown"})," and ",(0,n.jsx)(t.code,{children:"touchstart"})," events. You can change it to any other\nevents, for example, ",(0,n.jsx)(t.code,{children:"mouseup"})," and ",(0,n.jsx)(t.code,{children:"touchend"}),":"]}),"\n",(0,n.jsx)(o,{data:z}),"\n",(0,n.jsx)(t.h2,{id:"initial-focus",children:"Initial focus"}),"\n",(0,n.jsxs)(t.p,{children:["Popover uses ",(0,n.jsx)(t.a,{href:"/core/focus-trap/",children:"FocusTrap"})," component to manage focus.\nAdd ",(0,n.jsx)(t.code,{children:"data-autofocus"})," attribute to element that should receive initial focus:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { Popover } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Popover>\n      <Popover.Target>\n        <button type=\"button\">Target</button>\n      </Popover.Target>\n      <Popover.Dropdown>\n        <input />\n        <input data-autofocus />\n        <input />\n      </Popover.Dropdown>\n    </Popover>\n  );\n}\n"})}),"\n",(0,n.jsx)(s,{component:"Popover"}),"\n",(0,n.jsx)(t.h2,{id:"nested-popovers",children:"Nested popovers"}),"\n",(0,n.jsxs)(t.p,{children:["Nested popovers require children rendering without ",(0,n.jsx)(t.a,{href:"/core/portal/",children:"Portal"}),". Usually, you\nshould disable portal with props of the component that renders popover content, for example,\n",(0,n.jsx)(t.a,{href:"/core/select/",children:"Select"})," has ",(0,n.jsx)(t.code,{children:"comboboxProps={{ withinPortal: false }}"})," prop. Check documentation\nof the component that you are using to render popover content to find out how to disable the portal.\nIf the portal is not disabled, outside click will close all popovers."]}),"\n",(0,n.jsxs)(t.p,{children:["Example of disabling portal in ",(0,n.jsx)(t.a,{href:"/core/select/",children:"Select"})," and ",(0,n.jsx)(t.a,{href:"/dates/date-picker-input/",children:"DatePickerInput"}),"\ncomponents:"]}),"\n",(0,n.jsx)(o,{data:J}),"\n",(0,n.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsxs)(t.p,{children:["Popover follows ",(0,n.jsx)(t.a,{href:"https://www.w3.org/TR/wai-aria-practices-1.2/#dialog_modal",children:"WAI-ARIA recommendations"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Dropdown element has ",(0,n.jsx)(t.code,{children:'role="dialog"'})," and ",(0,n.jsx)(t.code,{children:'aria-labelledby="target-id"'})," attributes"]}),"\n",(0,n.jsxs)(t.li,{children:["Target element has ",(0,n.jsx)(t.code,{children:'aria-haspopup="dialog"'}),", ",(0,n.jsx)(t.code,{children:"aria-expanded"}),", ",(0,n.jsx)(t.code,{children:'aria-controls="dropdown-id"'})," attributes"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Uncontrolled Popover will be accessible only when used with ",(0,n.jsx)(t.code,{children:"button"})," element or component that renders it (",(0,n.jsx)(t.a,{href:"/core/button/",children:"Button"}),", ",(0,n.jsx)(t.a,{href:"/core/action-icon/",children:"ActionIcon"}),", etc.).\nOther elements will not support ",(0,n.jsx)(t.code,{children:"Space"})," and ",(0,n.jsx)(t.code,{children:"Enter"})," key presses."]}),"\n",(0,n.jsx)(t.h2,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,n.jsx)(i,{data:[{key:"Escape",description:"Closes dropdown",condition:"Focus within dropdown"},{key:"Space/Enter",description:"Opens/closes dropdown",condition:"Focus on target element"}]})]})}function N(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(_,{...e,children:(0,n.jsx)(I,{...e})})}function Y(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},67240:function(e,t,o){"use strict";o.d(t,{M:function(){return r},c:function(){return n}});let n=[{label:"top",value:"top"},{label:"top-start",value:"top-start"},{label:"top-end",value:"top-end"},{label:"left",value:"left"},{label:"left-start",value:"left-start"},{label:"left-end",value:"left-end"},{label:"right",value:"right"},{label:"right-start",value:"right-start"},{label:"right-end",value:"right-end"},{label:"bottom",value:"bottom"},{label:"bottom-start",value:"bottom-start"},{label:"bottom-end",value:"bottom-end"}],r=[{label:"side",value:"side"},{label:"center",value:"center"}]},81097:function(e,t,o){"use strict";o.d(t,{r:function(){return d}});var n=o(27378),r=o(40624),i=o(49849),s=o(38765),a=o(45608),l=o(61777),c=o(62443);function u(e,t){return Array.isArray(e)?e.includes(t):e===t}function Option({data:e,withCheckIcon:t,value:o,checkIconPosition:i,unstyled:d}){if(!(0,l.f)(e)){let l=t&&u(o,e.value)&&n.createElement(s.n,{className:c.Z.optionsDropdownCheckIcon});return n.createElement(a.h.Option,{value:e.value,disabled:e.disabled,className:(0,r.Z)({[c.Z.optionsDropdownOption]:!d}),"data-reverse":"right"===i||void 0,"data-checked":u(o,e.value)||void 0,"aria-selected":u(o,e.value)},"left"===i&&l,e.label,"right"===i&&l)}let p=e.items.map(e=>n.createElement(Option,{data:e,value:o,key:e.value,unstyled:d,withCheckIcon:t,checkIconPosition:i}));return n.createElement(a.h.Group,{label:e.group},p)}function d({data:e,hidden:t,hiddenWhenEmpty:o,filter:r,search:s,limit:u,maxDropdownHeight:d,withScrollArea:p=!0,filterOptions:h=!0,withCheckIcon:f=!1,value:m,checkIconPosition:v,nothingFoundMessage:w,unstyled:g,labelId:x}){!function e(t,o=new Set){if(Array.isArray(t))for(let n of t)if((0,l.f)(n))e(n.items,o);else{if(void 0===n.value)throw Error("[@mantine/core] Each option must have value property");if("string"!=typeof n.value)throw Error(`[@mantine/core] Option value must be a string, other data formats are not supported, got ${typeof n.value}`);if(o.has(n.value))throw Error(`[@mantine/core] Duplicate options are not supported. Option with value "${n.value}" was provided more than once`);o.add(n.value)}}(e);let b="string"==typeof s,y=b?(r||function e({options:t,search:o,limit:n}){let r=o.trim().toLowerCase(),i=[];for(let s=0;s<t.length;s+=1){let a=t[s];if(i.length===n)break;(0,l.f)(a)&&i.push({group:a.group,items:e({options:a.items,search:o,limit:n-i.length})}),!(0,l.f)(a)&&a.label.toLowerCase().includes(r)&&i.push(a)}return i})({options:e,search:h?s:"",limit:u??1/0}):e,P=function(e){if(0===e.length)return!0;for(let t of e)if(!("group"in t)||t.items.length>0)return!1;return!0}(y),D=y.map(e=>n.createElement(Option,{data:e,key:(0,l.f)(e)?e.group:e.value,withCheckIcon:f,value:m,checkIconPosition:v,unstyled:g}));return n.createElement(a.h.Dropdown,{hidden:t||o&&P},n.createElement(a.h.Options,{labelledBy:x},p?n.createElement(i.x.Autosize,{mah:d??220,type:"scroll",scrollbarSize:"var(--_combobox-padding)",offsetScrollbars:"y",className:c.Z.optionsDropdownScrollArea},D):D,P&&w&&n.createElement(a.h.Empty,null,w)))}},61777:function(e,t,o){"use strict";function n(e){return"group"in e}o.d(t,{f:function(){return n}})},38099:function(e,t,o){"use strict";o.d(t,{g:function(){return function e(t){return t.reduce((t,o)=>"group"in o?{...t,...e(o.items)}:(t[o.value]=o,t),{})}}})},2570:function(e,t,o){"use strict";o.d(t,{P:function(){return v}});var n=o(27378),r=o(31002),i=o(58675),s=o(5564),a=o(96739),l=o(20410),c=o(23163),u=o(2161),d=o(38099),p=o(45608),h=o(81097),f=o(54526);let m={searchable:!1,withCheckIcon:!0,allowDeselect:!0,checkIconPosition:"left"},v=(0,l.d)((e,t)=>{let o=(0,a.w)("Select",m,e),{classNames:l,styles:v,unstyled:w,vars:g,dropdownOpened:x,defaultDropdownOpened:b,onDropdownClose:y,onDropdownOpen:P,onFocus:D,onBlur:$,onClick:T,onChange:j,data:E,value:S,defaultValue:O,selectFirstOptionOnChange:M,onOptionSubmit:k,comboboxProps:z,readOnly:A,disabled:C,filter:B,limit:J,withScrollArea:_,maxDropdownHeight:I,size:N,searchable:Y,rightSection:V,checkIconPosition:H,withCheckIcon:U,nothingFoundMessage:F,name:L,form:Z,searchValue:W,defaultSearchValue:R,onSearchChange:q,allowDeselect:K,error:X,rightSectionPointerEvents:G,id:Q,clearable:ee,clearButtonProps:et,hiddenInputProps:eo,...en}=o,er=(0,n.useMemo)(()=>(0,u.R)(E),[E]),ei=(0,n.useMemo)(()=>(0,d.g)(er),[er]),es=(0,r.M)(Q),[ea,el]=(0,i.C)({value:S,defaultValue:O,finalValue:null,onChange:j}),ec=ea?ei[ea]:void 0,[eu,ed]=(0,i.C)({value:W,defaultValue:R,finalValue:ec?ec.label:"",onChange:q}),ep=(0,f.K)({opened:x,defaultOpened:b,onDropdownOpen:P,onDropdownClose:()=>{y?.(),ep.resetSelectedOption()}}),{resolvedClassNames:eh,resolvedStyles:ef}=(0,s.h)({props:o,styles:v,classNames:l});(0,n.useEffect)(()=>{M&&ep.selectFirstOption()},[M,ea]),(0,n.useEffect)(()=>{null===S&&ed(""),"string"==typeof S&&ec&&ed(ec.label)},[S,ec]);let em=ee&&!!ea&&!C&&!A&&n.createElement(p.h.ClearButton,{size:N,...et,onClear:()=>{el(null),ed("")}});return n.createElement(n.Fragment,null,n.createElement(p.h,{store:ep,__staticSelector:"Select",classNames:eh,styles:ef,unstyled:w,readOnly:A,onOptionSubmit:e=>{k?.(e);let t=K&&ei[e].value===ea?null:ei[e].value;el(t),ed("string"==typeof t?ei[e].label:""),ep.closeDropdown()},size:N,...z},n.createElement(p.h.Target,{targetType:Y?"input":"button"},n.createElement(c.M,{id:es,ref:t,rightSection:V||em||n.createElement(p.h.Chevron,{size:N,error:X,unstyled:w}),rightSectionPointerEvents:G||em?"all":"none",...en,size:N,__staticSelector:"Select",disabled:C,readOnly:A||!Y,value:eu,onChange:e=>{ed(e.currentTarget.value),ep.openDropdown(),M&&ep.selectFirstOption()},onFocus:e=>{Y&&ep.openDropdown(),D?.(e)},onBlur:e=>{Y&&ep.closeDropdown(),ed(null!=ea&&ei[ea]?.label||""),$?.(e)},onClick:e=>{Y?ep.openDropdown():ep.toggleDropdown(),T?.(e)},classNames:eh,styles:ef,unstyled:w,pointer:!Y,error:X})),n.createElement(h.r,{data:er,hidden:A||C,filter:B,search:eu,limit:J,hiddenWhenEmpty:!Y||!F,withScrollArea:_,maxDropdownHeight:I,filterOptions:Y&&ec?.label!==eu,value:ea,checkIconPosition:H,withCheckIcon:U,nothingFoundMessage:F,unstyled:w,labelId:`${es}-label`})),n.createElement("input",{type:"hidden",name:L,value:ea||"",form:Z,disabled:C,...eo}))});v.classes={...c.M.classes,...p.h.classes},v.displayName="@mantine/core/Select"}},function(e){e.O(0,[370,5819,2775,7082,5608,3014,9774,2888,179],function(){return e(e.s=26353)}),_N_E=e.O()}]);