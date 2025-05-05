(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[66078],{23464:function(e){var t;t=function(){"use strict";var e="millisecond",t="second",a="minute",n="hour",r="week",s="month",o="quarter",i="year",l="date",d="Invalid Date",c=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,u=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(e,t,a){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(a)+e},m="en",p={};p[m]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],a=e%100;return"["+e+(t[(a-20)%10]||t[a]||"th")+"]"}};var f="$isDayjsObject",g=function(e){return e instanceof D||!(!e||!e[f])},v=function e(t,a,n){var r;if(!t)return m;if("string"==typeof t){var s=t.toLowerCase();p[s]&&(r=s),a&&(p[s]=a,r=s);var o=t.split("-");if(!r&&o.length>1)return e(o[0])}else{var i=t.name;p[i]=t,r=i}return!n&&r&&(m=r),r||!n&&m},y=function(e,t){if(g(e))return e.clone();var a="object"==typeof t?t:{};return a.date=e,a.args=arguments,new D(a)},x={s:h,z:function(e){var t=-e.utcOffset(),a=Math.abs(t);return(t<=0?"+":"-")+h(Math.floor(a/60),2,"0")+":"+h(a%60,2,"0")},m:function e(t,a){if(t.date()<a.date())return-e(a,t);var n=12*(a.year()-t.year())+(a.month()-t.month()),r=t.clone().add(n,s),o=a-r<0,i=t.clone().add(n+(o?-1:1),s);return+(-(n+(a-r)/(o?r-i:i-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(d){return({M:s,y:i,w:r,d:"day",D:l,h:n,m:a,s:t,ms:e,Q:o})[d]||String(d||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};x.l=v,x.i=g,x.w=function(e,t){return y(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function h(e){this.$L=v(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[f]=!0}var m=h.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,a=e.utc;if(null===t)return new Date(NaN);if(x.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(c);if(n){var r=n[2]-1||0,s=(n[7]||"0").substring(0,3);return a?new Date(Date.UTC(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)):new Date(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)}}return new Date(t)}(e),this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return x},m.isValid=function(){return this.$d.toString()!==d},m.isSame=function(e,t){var a=y(e);return this.startOf(t)<=a&&a<=this.endOf(t)},m.isAfter=function(e,t){return y(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<y(e)},m.$g=function(e,t,a){return x.u(e)?this[t]:this.set(a,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,o){var d=this,c=!!x.u(o)||o,u=x.p(e),h=function(e,t){var a=x.w(d.$u?Date.UTC(d.$y,t,e):new Date(d.$y,t,e),d);return c?a:a.endOf("day")},m=function(e,t){return x.w(d.toDate()[e].apply(d.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),d)},p=this.$W,f=this.$M,g=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case i:return c?h(1,0):h(31,11);case s:return c?h(1,f):h(0,f+1);case r:var y=this.$locale().weekStart||0,D=(p<y?p+7:p)-y;return h(c?g-D:g+(6-D),f);case"day":case l:return m(v+"Hours",0);case n:return m(v+"Minutes",1);case a:return m(v+"Seconds",2);case t:return m(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(r,o){var d,c=x.p(r),u="set"+(this.$u?"UTC":""),h=((d={}).day=u+"Date",d[l]=u+"Date",d[s]=u+"Month",d[i]=u+"FullYear",d[n]=u+"Hours",d[a]=u+"Minutes",d[t]=u+"Seconds",d[e]=u+"Milliseconds",d)[c],m="day"===c?this.$D+(o-this.$W):o;if(c===s||c===i){var p=this.clone().set(l,1);p.$d[h](m),p.init(),this.$d=p.set(l,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[x.p(e)]()},m.add=function(e,o){var l,d=this;e=Number(e);var c=x.p(o),u=function(t){var a=y(d);return x.w(a.date(a.date()+Math.round(t*e)),d)};if(c===s)return this.set(s,this.$M+e);if(c===i)return this.set(i,this.$y+e);if("day"===c)return u(1);if(c===r)return u(7);var h=((l={})[a]=6e4,l[n]=36e5,l[t]=1e3,l)[c]||1,m=this.$d.getTime()+e*h;return x.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,a=this.$locale();if(!this.isValid())return a.invalidDate||d;var n=e||"YYYY-MM-DDTHH:mm:ssZ",r=x.z(this),s=this.$H,o=this.$m,i=this.$M,l=a.weekdays,c=a.months,h=a.meridiem,m=function(e,a,r,s){return e&&(e[a]||e(t,n))||r[a].slice(0,s)},p=function(e){return x.s(s%12||12,e,"0")},f=h||function(e,t,a){var n=e<12?"AM":"PM";return a?n.toLowerCase():n};return n.replace(u,function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return x.s(t.$y,4,"0");case"M":return i+1;case"MM":return x.s(i+1,2,"0");case"MMM":return m(a.monthsShort,i,c,3);case"MMMM":return m(c,i);case"D":return t.$D;case"DD":return x.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return m(a.weekdaysMin,t.$W,l,2);case"ddd":return m(a.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(s);case"HH":return x.s(s,2,"0");case"h":return p(1);case"hh":return p(2);case"a":return f(s,o,!0);case"A":return f(s,o,!1);case"m":return String(o);case"mm":return x.s(o,2,"0");case"s":return String(t.$s);case"ss":return x.s(t.$s,2,"0");case"SSS":return x.s(t.$ms,3,"0");case"Z":return r}return null}(e)||r.replace(":","")})},m.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},m.diff=function(e,l,d){var c,u=this,h=x.p(l),m=y(e),p=(m.utcOffset()-this.utcOffset())*6e4,f=this-m,g=function(){return x.m(u,m)};switch(h){case i:c=g()/12;break;case s:c=g();break;case o:c=g()/3;break;case r:c=(f-p)/6048e5;break;case"day":c=(f-p)/864e5;break;case n:c=f/36e5;break;case a:c=f/6e4;break;case t:c=f/1e3;break;default:c=f}return d?c:x.a(c)},m.daysInMonth=function(){return this.endOf(s).$D},m.$locale=function(){return p[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var a=this.clone(),n=v(e,t,!0);return n&&(a.$L=n),a},m.clone=function(){return x.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},h}(),w=D.prototype;return y.prototype=w,[["$ms",e],["$s",t],["$m",a],["$H",n],["$W","day"],["$M",s],["$y",i],["$D",l]].forEach(function(e){w[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),y.extend=function(e,t){return e.$i||(e(t,D,y),e.$i=!0),y},y.locale=v,y.isDayjs=g,y.unix=function(e){return y(1e3*e)},y.en=p[m],y.Ls=p,y.p={},y},e.exports=t()},5757:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/heatmap",function(){return a(30398)}])},30398:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>b});var n=a(31085),r=a(71184),s=a(35676),o=a(88872);let i={type:"code",component:function(){return(0,n.jsx)(s.R,{data:o.p,startDate:"2024-02-16",endDate:"2025-02-16"})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <Heatmap data={data} startDate="2024-02-16" endDate="2025-02-16" />;
}
`,language:"tsx"},{fileName:"data.ts",code:o.k,language:"tsx"}]};var l=a(78221);let d={type:"code",component:function(){return(0,n.jsx)(s.R,{data:o.p,startDate:"2024-02-16",endDate:"2025-02-16",colors:["var(--mantine-color-orange-4)","var(--mantine-color-orange-6)","var(--mantine-color-orange-7)","var(--mantine-color-orange-9)"]})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      colors={[
        'var(--mantine-color-orange-4)',
        'var(--mantine-color-orange-6)',
        'var(--mantine-color-orange-7)',
        'var(--mantine-color-orange-9)',
      ]}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:o.k,language:"tsx"}]};var c={root:"m_2b796525"};let u={type:"code",component:function(){return(0,n.jsx)(s.R,{classNames:c,data:o.p,startDate:"2024-02-16",endDate:"2025-02-16"})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      classNames={classes}
    />
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`.root {
  @mixin light {
    --heatmap-level-1: var(--mantine-color-blue-2);
    --heatmap-level-2: var(--mantine-color-blue-4);
    --heatmap-level-3: var(--mantine-color-blue-6);
    --heatmap-level-4: var(--mantine-color-blue-9);
  }

  @mixin dark {
    --heatmap-level-1: alpha(var(--mantine-color-orange-6), 0.35);
    --heatmap-level-2: alpha(var(--mantine-color-orange-6), 0.65);
    --heatmap-level-3: var(--mantine-color-orange-6);
    --heatmap-level-4: var(--mantine-color-yellow-4);
  }
}`,language:"scss"},{fileName:"data.ts",code:o.k,language:"tsx"}]},h={type:"code",component:function(){return(0,n.jsx)(s.R,{data:o.p,startDate:"2024-02-16",endDate:"2025-02-16",withMonthLabels:!0,withWeekdayLabels:!0})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      withMonthLabels
      withWeekdayLabels
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:o.k,language:"tsx"}]},m={type:"code",component:function(){return(0,n.jsx)(s.R,{data:o.p,startDate:"2024-02-16",endDate:"2025-02-16",withMonthLabels:!0,withWeekdayLabels:!0,weekdayLabels:["Вс","Пн","","Ср","","Пт",""],monthLabels:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"]})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      withMonthLabels
      withWeekdayLabels
      weekdayLabels={['\u0412\u0441', '\u041F\u043D', '', '\u0421\u0440', '', '\u041F\u0442', '']}
      monthLabels={[
        '\u042F\u043D\u0432',
        '\u0424\u0435\u0432',
        '\u041C\u0430\u0440',
        '\u0410\u043F\u0440',
        '\u041C\u0430\u0439',
        '\u0418\u044E\u043D',
        '\u0418\u044E\u043B',
        '\u0410\u0432\u0433',
        '\u0421\u0435\u043D',
        '\u041E\u043A\u0442',
        '\u041D\u043E\u044F',
        '\u0414\u0435\u043A',
      ]}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:o.k,language:"tsx"}]},p={type:"configurator",component:function(e){return(0,n.jsx)(s.R,{data:o.p,withMonthLabels:!0,withWeekdayLabels:!0,startDate:"2024-02-16",endDate:"2024-04-16",...e})},code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';


function Demo() {
  return (
    <Heatmap
      data={data}
      withMonthLabels
      withWeekdayLabels
      startDate="2024-02-16"
      endDate="2024-04-16"
      {{props}}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:o.k,language:"tsx"}],centered:!0,controls:[{type:"number",prop:"rectSize",min:6,max:20,initialValue:10,libraryValue:"__"},{type:"number",prop:"rectRadius",min:0,max:20,initialValue:2,libraryValue:"__"},{type:"number",prop:"gap",min:0,max:5,initialValue:1,libraryValue:"__"}]},f={type:"code",component:function(){return(0,n.jsx)(s.R,{data:o.p,startDate:"2024-02-16",endDate:"2025-02-16",getRectProps:({date:e,value:t})=>({onClick:()=>console.log({date:e,value:t})})})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      getRectProps={({ date, value }) => ({
        onClick: () => console.log({ date, value }),
      })}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:o.k,language:"tsx"}]},g={type:"code",component:function(){return(0,n.jsx)(s.R,{data:o.p,startDate:"2024-02-16",endDate:"2024-04-16",withOutsideDates:!1,withMonthLabels:!0,withWeekdayLabels:!0,withTooltip:!0,getTooltipLabel:({date:e,value:t})=>`${e} \u2013 ${t??0} contributions`})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2024-04-16"
      withOutsideDates={false}
      withMonthLabels
      withWeekdayLabels
      withTooltip
      getTooltipLabel={({ date, value }) => \`\${date} \u2013 \${value ?? 0} contributions\`}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:o.k,language:"tsx"}]},v={type:"code",component:function(){return(0,n.jsx)(s.R,{data:o.p,startDate:"2024-02-16",endDate:"2024-04-26",withMonthLabels:!0,withWeekdayLabels:!0,withTooltip:!0,firstDayOfWeek:0,weekdayLabels:["","Mon","","Wed","","Fri",""],getTooltipLabel:({date:e,value:t})=>`${e} \u2013 ${t??0} contributions`})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2024-04-26"
      withMonthLabels
      withWeekdayLabels
      withTooltip
      firstDayOfWeek={0}
      weekdayLabels={['', 'Mon', '', 'Wed', '', 'Fri', '']}
      getTooltipLabel={({ date, value }) => \`\${date} \u2013 \${value ?? 0} contributions\`}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:o.k,language:"tsx"}]};var y=a(18675),x=a(20017);let D=(0,y.P)(x.XZ.Heatmap);function w(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Demo:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Heatmap"})," is used to display data in a table where each column represents a week.\nThe only required prop is ",(0,n.jsx)(t.code,{children:"data"})," – object where keys are dates in ",(0,n.jsx)(t.code,{children:"YYYY-MM-DD"})," format and values are numbers."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"startDate"})," and ",(0,n.jsx)(t.code,{children:"endDate"})," props are optional, they are used to define heatmap range.\nIf not set, heatmap will display data for the last year."]}),"\n",(0,n.jsx)(a,{data:i}),"\n",(0,n.jsx)(t.h2,{id:"data-format",children:"Data format"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Heatmap"})," expects data in the following format:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"export const data = {\n  '2025-02-14': 2,\n  '2025-02-11': 3,\n  '2025-02-06': 4,\n  '2025-02-05': 1,\n  '2025-02-03': 2,\n  '2025-02-01': 2,\n  '2025-01-31': 4,\n  '2025-01-30': 2,\n  // ...\n};\n"})}),"\n",(0,n.jsx)(t.h2,{id:"with-tooltip",children:"With tooltip"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"withTooltip"})," and ",(0,n.jsx)(t.code,{children:"getTooltipLabel"})," props to display tooltip when\n",(0,n.jsx)(t.code,{children:"Heatmap"})," cells are hovered. ",(0,n.jsx)(t.code,{children:"getTooltipLabel"})," is called with date and value\nand must return string to display in tooltip."]}),"\n",(0,n.jsx)(a,{data:l.Y}),"\n",(0,n.jsx)(t.h2,{id:"change-colors",children:"Change colors"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Heatmap"})," colors can be changed with ",(0,n.jsx)(t.code,{children:"colors"})," prop. It should be an array of any\nvalid CSS color values (hex, rgba, CSS variables, etc.). By default, ",(0,n.jsx)(t.code,{children:"Heatmap"}),"\nuses 4 colors to indicate heat level, but you can pass any number of colors."]}),"\n",(0,n.jsx)(a,{data:d}),"\n",(0,n.jsx)(t.h2,{id:"colors-depending-on-color-scheme",children:"Colors depending on color scheme"}),"\n",(0,n.jsxs)(t.p,{children:["If you want to change colors depending on the color scheme,\nyou should define those colors in ",(0,n.jsx)(t.code,{children:".css"})," file:"]}),"\n",(0,n.jsx)(a,{data:u}),"\n",(0,n.jsxs)(t.p,{children:["Note that in this case, you can only use 4 colors without passing ",(0,n.jsx)(t.code,{children:"colors"})," prop.\nIf you need more colors, you should pass them manually to the component:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { Heatmap } from '@mantine/charts';\nimport { data } from './data';\nimport classes from './Demo.module.css';\n\nfunction Demo() {\n  return (\n    <Heatmap\n      data={data}\n      startDate=\"2024-02-16\"\n      endDate=\"2025-02-16\"\n      classNames={classes}\n      colors={[\n        'var(--heatmap-level-1)',\n        'var(--heatmap-level-2)',\n        'var(--heatmap-level-3)',\n        'var(--heatmap-level-4)',\n        'var(--heatmap-level-5)',\n        'var(--heatmap-level-6)',\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"values-domain",children:"Values domain"}),"\n",(0,n.jsxs)(t.p,{children:["By default, ",(0,n.jsx)(t.code,{children:"Heatmap"})," calculates domain based on data values, for example, for\nthe following data, the domain will be ",(0,n.jsx)(t.code,{children:"[1, 4]"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"const data = {\n  '2025-02-14': 2,\n  '2025-02-11': 3,\n  '2025-02-06': 4,\n  '2025-02-05': 1,\n};\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Based on the domain, ",(0,n.jsx)(t.code,{children:"Heatmap"})," calculates colors for each rect: 1 – min heat level,\n4 – max heat level. To specify domain manually, use ",(0,n.jsx)(t.code,{children:"domain"})," prop. It is useful\nwhen your data does not cover the whole range of possible values. For example,\nthe subset of data passed to the heatmap has values from 1 to 4, but the actual\nrange is from 1 to 10. In this case, you can pass ",(0,n.jsx)(t.code,{children:"[1, 10]"})," to ",(0,n.jsx)(t.code,{children:"domain"})," prop:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { Heatmap } from '@mantine/charts';\n\nconst data = {\n  '2025-02-14': 2,\n  '2025-02-11': 3,\n  '2025-02-06': 4,\n  '2025-02-05': 1,\n};\n\nfunction Demo() {\n  return <Heatmap data={data} domain={[1, 10]} />;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"weekdays-and-months-labels",children:"Weekdays and months labels"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"withMonthLabels"})," and ",(0,n.jsx)(t.code,{children:"withWeekdayLabels"})," props to display chart labels:"]}),"\n",(0,n.jsx)(a,{data:h}),"\n",(0,n.jsx)(t.h2,{id:"change-labels-text",children:"Change labels text"}),"\n",(0,n.jsxs)(t.p,{children:["To change labels, use ",(0,n.jsx)(t.code,{children:"weekdayLabels"})," and ",(0,n.jsx)(t.code,{children:"monthLabels"})," props.\n",(0,n.jsx)(t.code,{children:"weekdayLabels"})," prop must be an array of 7 strings with weekday names starting from Sunday.\n",(0,n.jsx)(t.code,{children:"monthLabels"})," prop must be an array of 12 strings with month names starting from January."]}),"\n",(0,n.jsx)(a,{data:m}),"\n",(0,n.jsx)(t.h2,{id:"rect-size-gap-and-radius",children:"Rect size, gap and radius"}),"\n",(0,n.jsx)(a,{data:p}),"\n",(0,n.jsx)(t.h2,{id:"pass-props-to-rect",children:"Pass props to rect"}),"\n",(0,n.jsxs)(t.p,{children:["Use ",(0,n.jsx)(t.code,{children:"getRectProps"})," to pass props to each rect. For example,\nit can be used to add onClick handler to each rect:"]}),"\n",(0,n.jsx)(a,{data:f}),"\n",(0,n.jsx)(t.h2,{id:"hide-outside-dates",children:"Hide outside dates"}),"\n",(0,n.jsx)(a,{data:g}),"\n",(0,n.jsx)(t.h2,{id:"first-day-of-week",children:"First day of week"}),"\n",(0,n.jsxs)(t.p,{children:["The default first day of the week is Monday, you can change it with ",(0,n.jsx)(t.code,{children:"firstDayOfWeek"})," prop:"]}),"\n",(0,n.jsx)(a,{data:v})]})}function b(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(D,{...e,children:(0,n.jsx)(w,{...e})})}},87186:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});var n=(0,a(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});var n=(0,a(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});var n=(0,a(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});var n=(0,a(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});var n=(0,a(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});var n=(0,a(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});var n=(0,a(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});var n=(0,a(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});var n=(0,a(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},78221:(e,t,a)=>{"use strict";a.d(t,{Y:()=>i});var n=a(31085),r=a(23464),s=a(35676),o=a(88872);let i={type:"code",component:function(){return(0,n.jsx)(s.R,{data:o.p,startDate:"2024-02-16",endDate:"2025-02-16",withTooltip:!0,withWeekdayLabels:!0,withMonthLabels:!0,getTooltipLabel:({date:e,value:t})=>`${r(e).format("DD MMM, YYYY")} \u2013 ${null===t||0===t?"No contributions":`${t} contribution${t>1?"s":""}`}`})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import dayjs from 'dayjs';
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      withTooltip
      withWeekdayLabels
      withMonthLabels
      getTooltipLabel={({ date, value }) =>
        \`\${dayjs(date).format('DD MMM, YYYY')} \u2013 \${value === null || value === 0 ? 'No contributions' : \`\${value} contribution\${value > 1 ? 's' : ''}\`}\`
      }
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:o.k,language:"tsx"}]}},88872:(e,t,a)=>{"use strict";a.d(t,{k:()=>r,p:()=>n});let n={"2025-02-14":2,"2025-02-11":3,"2025-02-06":4,"2025-02-05":1,"2025-02-03":2,"2025-02-01":2,"2025-01-31":4,"2025-01-30":2,"2025-01-29":3,"2025-01-26":2,"2025-01-25":2,"2025-01-24":2,"2025-01-23":2,"2025-01-20":3,"2025-01-19":2,"2025-01-17":3,"2025-01-16":2,"2025-01-14":3,"2025-01-08":2,"2025-01-07":1,"2025-01-05":3,"2025-01-04":1,"2025-01-03":1,"2025-01-01":2,"2024-12-30":4,"2024-12-27":3,"2024-12-26":1,"2024-12-22":3,"2024-12-20":2,"2024-12-19":3,"2024-12-16":4,"2024-12-15":1,"2024-12-14":4,"2024-12-11":2,"2024-12-09":4,"2024-12-05":4,"2024-12-04":3,"2024-12-03":2,"2024-12-01":1,"2024-11-30":3,"2024-11-29":1,"2024-11-28":1,"2024-11-26":4,"2024-11-25":3,"2024-11-24":3,"2024-11-22":4,"2024-11-20":2,"2024-11-19":3,"2024-11-16":3,"2024-11-15":1,"2024-11-14":4,"2024-11-12":1,"2024-11-11":2,"2024-11-10":1,"2024-11-09":3,"2024-11-07":1,"2024-11-06":4,"2024-11-04":1,"2024-11-03":4,"2024-11-02":4,"2024-10-31":1,"2024-10-30":1,"2024-10-28":4,"2024-10-27":2,"2024-10-26":3,"2024-10-25":4,"2024-10-23":1,"2024-10-22":1,"2024-10-21":4,"2024-10-20":3,"2024-10-15":3,"2024-10-13":4,"2024-10-10":1,"2024-10-08":1,"2024-10-07":4,"2024-10-05":1,"2024-10-04":4,"2024-10-02":2,"2024-10-01":3,"2024-09-29":4,"2024-09-27":3,"2024-09-26":4,"2024-09-25":3,"2024-09-20":4,"2024-09-18":3,"2024-09-17":1,"2024-09-14":2,"2024-09-12":3,"2024-09-10":1,"2024-09-08":1,"2024-09-06":2,"2024-09-04":4,"2024-08-31":4,"2024-08-29":3,"2024-08-26":4,"2024-08-25":1,"2024-08-23":2,"2024-08-21":4,"2024-08-19":1,"2024-08-14":4,"2024-08-13":2,"2024-08-11":4,"2024-08-09":4,"2024-08-06":4,"2024-08-05":4,"2024-08-04":1,"2024-08-02":4,"2024-08-01":4,"2024-07-31":3,"2024-07-30":2,"2024-07-29":2,"2024-07-28":1,"2024-07-27":4,"2024-07-25":2,"2024-07-22":4,"2024-07-21":1,"2024-07-19":2,"2024-07-17":2,"2024-07-16":1,"2024-07-15":4,"2024-07-14":4,"2024-07-13":2,"2024-07-12":1,"2024-07-11":3,"2024-07-10":3,"2024-07-09":4,"2024-07-08":2,"2024-07-07":2,"2024-07-06":4,"2024-07-05":3,"2024-07-03":4,"2024-06-30":4,"2024-06-26":2,"2024-06-25":1,"2024-06-24":2,"2024-06-22":3,"2024-06-19":4,"2024-06-18":2,"2024-06-17":1,"2024-06-14":4,"2024-06-13":4,"2024-06-12":1,"2024-06-11":2,"2024-06-10":1,"2024-06-08":4,"2024-06-06":2,"2024-06-04":2,"2024-06-03":1,"2024-06-01":2,"2024-05-31":1,"2024-05-30":3,"2024-05-26":4,"2024-05-23":3,"2024-05-22":1,"2024-05-21":4,"2024-05-18":4,"2024-05-16":4,"2024-05-14":2,"2024-05-10":1,"2024-05-08":3,"2024-05-07":2,"2024-05-03":2,"2024-05-02":4,"2024-04-30":3,"2024-04-29":1,"2024-04-28":4,"2024-04-26":1,"2024-04-22":1,"2024-04-21":4,"2024-04-20":2,"2024-04-19":2,"2024-04-17":1,"2024-04-16":3,"2024-04-15":4,"2024-04-14":3,"2024-04-13":4,"2024-04-12":3,"2024-04-11":2,"2024-04-10":3,"2024-04-08":4,"2024-04-05":1,"2024-04-03":4,"2024-03-31":1,"2024-03-30":2,"2024-03-29":1,"2024-03-28":1,"2024-03-27":3,"2024-03-26":1,"2024-03-24":4,"2024-03-20":1,"2024-03-19":1,"2024-03-17":1,"2024-03-14":2,"2024-03-13":3,"2024-03-12":2,"2024-03-11":1,"2024-03-09":3,"2024-03-06":1,"2024-03-03":1,"2024-03-02":2,"2024-03-01":1,"2024-02-29":2,"2024-02-28":2,"2024-02-23":3,"2024-02-22":4,"2024-02-20":4,"2024-02-19":4,"2024-02-17":3,"2024-02-16":3},r=`export const data = ${JSON.stringify(n,null,2)};`},35676:(e,t,a)=>{"use strict";a.d(t,{R:()=>m});var n=a(31085),r=a(14041),s=a(6754),o=a(29686),i=a(69564),l=a(34056),d=a(2912);function c(e,t){return new Date(e.getTime()+864e5*t)}var u={root:"m_2ef228c3",rect:"m_2ef201c5",monthLabel:"m_7e977775",weekdayLabel:"m_c4b68f8d"};let h={monthLabels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdayLabels:["Sun","Mon","","Wed","","Fri",""],withOutsideDates:!0,firstDayOfWeek:1,rectSize:10,weekdaysLabelsWidth:30,monthsLabelsHeight:14,gap:1,rectRadius:2,fontSize:12,colors:["var(--heatmap-level-1)","var(--heatmap-level-2)","var(--heatmap-level-3)","var(--heatmap-level-4)"]},m=(0,s.P9)((e,t)=>{let a=(0,o.Y)("Heatmap",h,e),{classNames:s,className:m,style:p,styles:f,unstyled:g,vars:v,data:y,startDate:x,endDate:D,withMonthLabels:w,withWeekdayLabels:b,weekdayLabels:M,withOutsideDates:k,monthLabels:j,firstDayOfWeek:$,rectSize:L=10,gap:S=1,rectRadius:H,domain:N,colors:_,weekdaysLabelsWidth:O,monthsLabelsHeight:T,fontSize:A,getTooltipLabel:W,withTooltip:Y,tooltipProps:I,getRectProps:C,...F}=a,R=(0,i.I)({name:"Heatmap",classes:u,props:a,className:m,style:p,classNames:s,styles:f,unstyled:g,vars:v}),[z,E]=(0,r.useState)(null),P=L+S,V=b?O:0,J=w?T:0,[U,B]=function({data:e,domain:t}){if(Array.isArray(t))return t;let a=Object.values(e);return[Math.min(...a),Math.max(...a)]}({data:y,domain:N}),Z=(0,r.useMemo)(()=>(function(e,t){let a=[...e];for(let e=0;e<t;e+=1)a.push(a.shift());return a})(M,$),[M,$]),X=function({startDate:e,endDate:t,withOutsideDates:a=!0,firstDayOfWeek:n=1}={}){let r=e?new Date(e):new Date(new Date().getFullYear()-1,new Date().getMonth(),new Date().getDate()),s=t?new Date(t):new Date,o=function(e,t){let a=new Date(e);for(;a.getDay()!==t;)a=c(a,-1);return a}(r,n),i=function(e,t){let a=e.getDay();return c(e,6-((a<t?7:0)+a-t))}(s,n),l=[],d=o;for(;d<=i;){let e=Array.from({length:7},(e,t)=>{let n=c(d,t);return a||n>=r&&n<=s?n.toISOString().split("T")[0]:null});l.push(e),d=c(d,7)}return l}({startDate:x,endDate:D,withOutsideDates:k,firstDayOfWeek:$}),q=X.map((e,t)=>{let a=e.map((e,t)=>{if(!e)return null;let a=e in y&&null!==y[e],r=a?y[e]:null;return(0,n.jsx)("rect",{width:L,height:L,x:S,y:t*P+S,rx:H,"data-empty":!a||void 0,fill:a?function({value:e,min:t,max:a,colors:n}){let r=Math.round((n.length-1)*((e-t)/(a-t)));return n[r]}({value:y[e],min:U,max:B,colors:_}):void 0,onPointerEnter:Y?()=>E({date:e,value:r}):void 0,...C?.({date:e,value:r}),...R("rect")},e)});return(0,n.jsx)("g",{transform:`translate(${t*P}, 0)`,"data-id":"week",children:a},t)}),Q=w?function(e){let t=0,a=null,n=[];return e.forEach(e=>{let r=new Date(null===e[0]?e[e.length-1]:e[0]).getMonth();a!==r&&(a=r,n.push({month:a,position:t,size:0})),n[n.length-1].size+=1,t+=1}),n}(X):[],G=w&&j?Q.map((e,t)=>{if(e.size<3)return null;let a=j[e.month];return(0,n.jsx)("text",{x:e.position*P+S+V,y:T-4,width:e.size*P,fontSize:A,...R("monthLabel"),children:a},t)}):null,K=b&&M?Z.map((e,t)=>(0,n.jsx)("text",{x:0,y:(t+1)*P-S+J,width:O,fontSize:A,...R("weekdayLabel"),children:e},t)):null,ee=W&&z&&Y?W(z):null;return(0,n.jsxs)(l.a,{component:"svg",ref:t,width:P*X.length+S+V,height:7*P+S+J,...R("root"),...F,children:[(0,n.jsx)(d.m.Floating,{label:ee,disabled:!Y||!ee,position:"top",...I,children:(0,n.jsxs)("g",{transform:`translate(${V}, ${J})`,"data-id":"all-weeks",children:[Y&&(0,n.jsx)("rect",{fill:"transparent",width:P*X.length+S,height:7*P+S}),q]})}),K,G]})});m.displayName="@mantine/charts/Heatmap",m.classes=u}},e=>{var t=t=>e(e.s=t);e.O(0,[18675,90636,46593,38792],()=>t(5757)),_N_E=e.O()}]);