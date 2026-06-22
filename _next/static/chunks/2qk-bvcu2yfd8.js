(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,n)=>{let r={};for(var s in e)t(r,s,{get:e[s],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:"Module"}),r}])},509637,e=>{"use strict";var t=e.i(191788);let n={9:/[0-9]/,a:/[A-Za-z]/,A:/[A-Z]/,"*":/[A-Za-z0-9]/,"#":/[-+0-9]/};function r(e,t,n,r){let s="",a=0,l=0;for(l=0;l<t.length;l++){let n=t[l];if("literal"===n.type)s+=n.char;else if(a<e.length){let t=r?r(e[a]):e[a];n.pattern&&n.pattern.test(t)?(s+=t,a++):(a++,l--)}else break}return s}function s(e,t,n,r){if(!r)return e;let s=e;for(let r=e.length;r<t.length;r++){let e=t[r];if("literal"===e.type)s+=e.char;else{var a;let e=(a=r,null===n||""===n||void 0===n?"":n.length>1?n[a]||"_":n);if(!e)break;s+=e}}return s}function a(e,t){let n="";for(let r=0;r<e.length&&r<t.length;r++)"token"===t[r].type&&(n+=e[r]);return n}function l(e,t){for(let n=0;n<t.length;n++)if("token"===t[n].type&&!t[n].optional&&(n>=e.length||!t[n].pattern.test(e[n])))return!1;return!0}function i(e,t){for(let n=t;n<e.length;n++)if("token"===e[n].type)return n;return e.length}function o(e,t,n){let r="",s=0;for(let n=0;n<t.length&&s<=e.length;n++){let a=t[n];if("literal"===a.type){r+=a.char,s<e.length&&e[s]===a.char&&s++;continue}if(s>=e.length)break;for(;s<e.length;){let t=e[s];if(s++,a.pattern.test(t)){r+=t;break}}if(r.length<=n)break}return r}function c(e,t){let r={...n,...e.tokens},s=e.mask,a=void 0===e.slotChar?"_":e.slotChar,l=e.separate??!1;if(e.modify){let n=e.modify(t);n&&(void 0!==n.mask&&(s=n.mask),void 0!==n.tokens&&Object.assign(r,n.tokens),void 0!==n.slotChar&&(a=n.slotChar),void 0!==n.separate&&(l=n.separate))}return{slots:function(e,t){if(Array.isArray(e))return e.map(e=>e instanceof RegExp?{type:"token",char:"_",pattern:e}:{type:"literal",char:e});let n=[],r=!1;for(let s=0;s<e.length;s++){let a=e[s];if("\\"===a&&s+1<e.length){s++,n.push({type:"literal",char:e[s]});continue}if("?"===a){r=!0;continue}t[a]?n.push({type:"token",char:a,pattern:t[a],optional:r}):n.push({type:"literal",char:a,optional:r})}return n}(s,r),slotChar:a,separate:l,tokens:r,transform:e.transform}}function u(e,t,n){let r=e;for(;r<t.length&&r<n.length&&t[r]&&"literal"===t[r].type;)r++;return r}e.s(["useMask",0,function(e){let n=(0,t.useRef)(e);n.current=e;let h=(0,t.useRef)(null),[d,m]=(0,t.useState)(""),[p,f]=(0,t.useState)(""),x=(0,t.useRef)(""),k=(0,t.useRef)(""),g=(0,t.useRef)(""),j=(0,t.useRef)(!1),v=(0,t.useRef)(!1),y=(0,t.useRef)([]),w=(0,t.useRef)([]),M=(0,t.useCallback)(()=>c(n.current,p),[p]),b=(0,t.useCallback)(({reprocessed:e,newRaw:t,displayValue:r,resolvedSlots:s,cursorPos:a,notifyChange:i})=>{let o=n.current;if(x.current=e,k.current=r,g.current=t,m(r),f(t),h.current&&(h.current.value=r,void 0!==a&&document.activeElement===h.current)){let t=Math.min(a,e.length);h.current.setSelectionRange(t,t)}i&&o.onChangeRaw&&o.onChangeRaw(t,r);let c=l(e,s);i&&c&&!j.current&&o.onComplete&&o.onComplete(r,t),j.current=c},[]),_=(0,t.useCallback)((e,t)=>{let r=n.current,{slots:l}=c(r,a(e,c(r,"").slots)),{slots:i,slotChar:u}=c(r,a(e,l)),h=o(e,i,u),d=a(h,i),m=r.alwaysShowMask||v.current,p=!1!==r.showMaskOnFocus,f=s(h,i,u,m&&(p||h.length>0));return b({reprocessed:h,newRaw:d,displayValue:f,resolvedSlots:i,cursorPos:t,notifyChange:!0}),{displayValue:f,newRaw:d,reprocessed:h,resolvedSlots:i}},[b,M]),T=(0,t.useCallback)(e=>{let t=n.current;if(!e.value)return!1;let{slots:r,slotChar:l}=c(t,""),{slots:i,slotChar:u}=c(t,a(o(e.value,r,l),r)),h=o(e.value,i,u),d=a(h,i),m=t.alwaysShowMask||v.current,p=!1!==t.showMaskOnFocus;return b({reprocessed:h,newRaw:d,displayValue:s(h,i,u,m&&(p||h.length>0)),resolvedSlots:i,notifyChange:!1}),!0},[b]),C=(0,t.useCallback)(()=>{let e=h.current?.selectionStart??g.current.length,t={rawValue:g.current,selectionStart:e},n=y.current,r=n[n.length-1];r&&r.rawValue===t.rawValue&&r.selectionStart===t.selectionStart||(n.push(t),n.length>100&&n.shift(),w.current=[])},[]),R=(0,t.useCallback)(e=>{let{slots:t,slotChar:s,transform:a}=c(n.current,e.rawValue);_(r(e.rawValue,t,s,a),e.selectionStart)},[_]),A=(0,t.useCallback)(e=>{let t=e.target,{slots:s,slotChar:l,transform:i}=c(n.current,""),o=k.current,u=t.value,h=0,d=Math.min(o.length,u.length);for(;h<d&&o[h]===u[h];)h++;let m=0,p=Math.min(o.length-h,u.length-h);for(;m<p&&o[o.length-1-m]===u[u.length-1-m];)m++;let f=u.slice(h,u.length-m),x=o.length-m,g=a(o.slice(0,h),s.slice(0,h)),j=r(g+f+a(o.slice(x),s.slice(x)),s,l,i),v=r(g+f,s,l,i);j!==o&&C(),_(j,v.length)},[C,_]),E=(0,t.useCallback)(e=>{let t=e.selectionStart??0;if(t!==(e.selectionEnd??0))return;let{slots:r}=c(n.current,""),s=x.current,a=s.length>0?u(s.length,r,s):i(r,0),l=i(r,0);(t>a||t<l)&&e.setSelectionRange(a,a)},[]),D=(0,t.useCallback)(()=>{v.current=!0;let e=n.current,t=h.current;if(!t)return;let{slots:r,slotChar:a}=c(e,""),l=!1!==e.showMaskOnFocus,i=x.current;if(l||e.alwaysShowMask){let e=s(i,r,a,!0);t.value=e,k.current=e,m(e)}requestAnimationFrame(()=>{t===document.activeElement&&E(t)})},[E]),S=(0,t.useCallback)(()=>{let e=h.current;e&&e===document.activeElement&&E(e)},[E]),V=(0,t.useCallback)(()=>{let e=h.current;e&&requestAnimationFrame(()=>{if(e!==document.activeElement)return;let t=e.selectionStart??0;if(t!==(e.selectionEnd??0))return;let{slots:r}=c(n.current,""),s=x.current,a=s.length>0?u(s.length,r,s):i(r,0);t>a&&e.setSelectionRange(a,a)})},[]),z=(0,t.useCallback)(()=>{v.current=!1;let e=n.current,t=h.current;if(!t)return;let{slots:r,slotChar:i}=c(e,p),u=s(x.current,r,i,!0),d=t.value===u?x.current:o(t.value,r,i),y=l(d,r);if(e.autoClear&&!y&&d.length>0){if(t.value="",x.current="",k.current="",g.current="",m(""),f(""),j.current=!1,e.onChangeRaw&&e.onChangeRaw("",""),e.alwaysShowMask){let e=s("",r,i,!0);t.value=e,k.current=e,m(e)}return}if(!e.alwaysShowMask&&!y){if(0===a(d,r).length){t.value="",x.current="",k.current="",g.current="",m(""),f(""),j.current=!1,e.onChangeRaw&&e.onChangeRaw("","");return}let n=s(d,r,i,!1);t.value=n,k.current=n,m(n)}},[p]),I=(0,t.useCallback)(e=>{let t=e.target,{slots:s,slotChar:l,transform:i}=c(n.current,p),o=t.selectionStart??0,h=t.selectionEnd??0,d=x.current,m=e.metaKey||e.ctrlKey&&!e.altKey,f=e.key.toLowerCase();if(m&&"z"===f&&!e.shiftKey){e.preventDefault();let n=y.current.pop();if(!n)return;w.current.push({rawValue:g.current,selectionStart:t.selectionStart??0}),R(n);return}if(m&&("z"===f&&e.shiftKey||"y"===f&&!e.shiftKey)){e.preventDefault();let n=w.current.pop();if(!n)return;y.current.push({rawValue:g.current,selectionStart:t.selectionStart??0}),R(n);return}if("Backspace"===e.key){if(e.preventDefault(),e.metaKey||e.ctrlKey&&!e.altKey){let e=Math.min(o,d.length),t=r(a(d.slice(e),s.slice(e)),s,l,i);C(),_(t,0);return}if(o!==h){let e=Math.min(h,d.length),t=d.slice(0,o),n=a(d.slice(e),s.slice(e)),c=r(a(t,s)+n,s,l,i);C(),_(c,o);return}if(0===o)return;let t=o-1;for(;t>=0&&s[t]&&"literal"===s[t].type;)t--;if(t<0)return;let n=r(a(d.slice(0,t),s.slice(0,t))+a(d.slice(t+1),s.slice(t+1)),s,l,i);C(),_(n,t)}else if("Delete"===e.key){if(e.preventDefault(),o!==h){let e=Math.min(h,d.length),t=d.slice(0,o),n=a(d.slice(e),s.slice(e)),c=r(a(t,s)+n,s,l,i);C(),_(c,o);return}let t=o;for(;t<s.length&&s[t]&&"literal"===s[t].type;)t++;if(t>=d.length)return;let n=r(a(d.slice(0,o),s.slice(0,o))+a(d.slice(t+1),s.slice(t+1)),s,l,i);C(),_(n,o)}else if("ArrowRight"!==e.key||e.shiftKey){if("ArrowLeft"!==e.key||e.shiftKey){if(1===e.key.length&&!e.ctrlKey&&!e.metaKey&&!e.altKey){e.preventDefault();let t=Math.min(o,d.length);for(;t<s.length&&s[t]&&"literal"===s[t].type;)t++;if(t>=s.length)return;let n=s[t],c=i?i(e.key):e.key;if(!n.pattern.test(c))return;let m=r(a(d.slice(0,t),s.slice(0,t))+c+(o<h?a(d.slice(Math.min(h,d.length)),s.slice(Math.min(h,d.length))):a(d.slice(t),s.slice(t))),s,l,i),p=u(t+1,s,m);C(),_(m,p)}}else if(o>0){let n=function(e,t){for(let n=t;n>=0;n--)if("token"===e[n].type)return n;return -1}(s,o-1);n>=0&&n!==o-1&&(e.preventDefault(),t.setSelectionRange(n+1,n+1))}}else{let n=u(o+1,s,t.value);n!==o+1&&(e.preventDefault(),t.setSelectionRange(n,n))}},[R,C,p,_]),U=(0,t.useCallback)(e=>{e.preventDefault();let t=e.target,s=n.current,l=e.clipboardData?.getData("text")??"",i=t.selectionStart??0,o=t.selectionEnd??0,u=x.current,{slots:h,slotChar:d,transform:m}=c(s,""),p=Math.min(i,u.length),f=Math.min(o,u.length),k=a(u.slice(0,p),h.slice(0,p)),g=r(k+l+a(u.slice(f),h.slice(f)),h,d,m);C(),_(g);let j=Math.min(r(k+l,h,d,m).length,h.length);t===document.activeElement&&t.setSelectionRange(j,j)},[C,_]),P=(0,t.useCallback)(e=>{n.current.invalid?e.setAttribute("aria-invalid","true"):e.removeAttribute("aria-invalid")},[]),L=(0,t.useCallback)(t=>{let n=h.current;if(n&&(n.removeEventListener("input",A),n.removeEventListener("focus",D),n.removeEventListener("blur",z),n.removeEventListener("mousedown",V),n.removeEventListener("mouseup",S),n.removeEventListener("keydown",I),n.removeEventListener("paste",U)),h.current=t,t){t.addEventListener("input",A),t.addEventListener("focus",D),t.addEventListener("blur",z),t.addEventListener("mousedown",V),t.addEventListener("mouseup",S),t.addEventListener("keydown",I),t.addEventListener("paste",U),P(t);let n=T(t);if(e.alwaysShowMask&&!n){let{slots:n,slotChar:r}=c(e,""),a=s("",n,r,!0);t.value=a,k.current=a,m(a)}}},[A,D,z,V,S,I,U,T,P,e]);return(0,t.useEffect)(()=>{let e=h.current;e&&P(e)},[e.invalid,P]),{ref:L,value:d,rawValue:p,isComplete:(()=>{let{slots:e}=M();return l(x.current,e)})(),reset:(0,t.useCallback)(()=>{let e=n.current,t=h.current;if(x.current="",k.current="",g.current="",y.current=[],w.current=[],m(""),f(""),j.current=!1,t)if(e.alwaysShowMask){let{slots:n,slotChar:r}=c(e,""),a=s("",n,r,!0);t.value=a,k.current=a,m(a)}else t.value="";e.onChangeRaw&&e.onChangeRaw("","")},[])}}])},719561,e=>{"use strict";var t=e.i(648863),n=e.i(883364),r=e.i(841209),s=e.i(391398),a=e.i(509637);let l={type:"code",code:`
import { TextInput, Text } from '@mantine/core';
import { useMask } from '@mantine/hooks';

function Demo() {
  const { ref, value, rawValue } = useMask({ mask: '(999) 999-9999' });

  return (
    <>
      <TextInput ref={ref} label="Phone number" placeholder="(___) ___-____" />
      <Text size="sm" mt="sm">Masked value: {value}</Text>
      <Text size="sm">Raw value: {rawValue}</Text>
    </>
  );
}
`,component:function(){let{ref:e,value:t,rawValue:l}=(0,a.useMask)({mask:"(999) 999-9999"});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.TextInput,{ref:e,label:"Phone number",placeholder:"(___) ___-____"}),(0,s.jsxs)(n.Text,{size:"sm",mt:"sm",children:["Masked value: ",t]}),(0,s.jsxs)(n.Text,{size:"sm",children:["Raw value: ",l]})]})}};var i=e.i(485108),o=e.i(725695);let c={type:"code",code:`
import { Button, Group, Text, TextInput } from '@mantine/core';
import { useMask } from '@mantine/hooks';

function Demo() {
  const { ref, isComplete, rawValue } = useMask({
    mask: 'AAA-9999',
    slotChar: 'XXX-0000',
    transform: (char) => char.toUpperCase(),
  });

  return (
    <>
      <TextInput ref={ref} label="Promo code" placeholder="Enter promo code" />
      <Text size="sm" mt="sm">Raw value: {rawValue}</Text>
      <Group mt="xs">
        <Button disabled={!isComplete} size="xs">Apply code</Button>
      </Group>
    </>
  );
}
`,component:function(){let{ref:e,isComplete:t,rawValue:l}=(0,a.useMask)({mask:"AAA-9999",slotChar:"XXX-0000",transform:e=>e.toUpperCase()});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.TextInput,{ref:e,label:"Promo code",placeholder:"Enter promo code"}),(0,s.jsxs)(n.Text,{size:"sm",mt:"sm",children:["Raw value: ",l]}),(0,s.jsx)(o.Group,{mt:"xs",children:(0,s.jsx)(i.Button,{disabled:!t,size:"xs",children:"Apply code"})})]})}},u={type:"code",code:`
import { TextInput, Text } from '@mantine/core';
import { useMask } from '@mantine/hooks';

function Demo() {
  const { ref, rawValue } = useMask({
    mask: '9999 9999 9999 9999',
    modify: (value) => {
      const digits = value.replace(/\\D/g, '');
      if (digits.startsWith('34') || digits.startsWith('37')) {
        return { mask: '9999 999999 99999' };
      }
    },
  });

  return (
    <>
      <TextInput ref={ref} label="Credit card number" placeholder="Enter card number" />
      <Text size="sm" mt="sm">Raw value: {rawValue}</Text>
      <Text size="xs" c="dimmed">Try starting with 34 or 37 for Amex format</Text>
    </>
  );
}
`,component:function(){let{ref:e,rawValue:t}=(0,a.useMask)({mask:"9999 9999 9999 9999",modify:e=>{let t=e.replace(/\D/g,"");if(t.startsWith("34")||t.startsWith("37"))return{mask:"9999 999999 99999"}}});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.TextInput,{ref:e,label:"Credit card number",placeholder:"Enter card number"}),(0,s.jsxs)(n.Text,{size:"sm",mt:"sm",children:["Raw value: ",t]}),(0,s.jsx)(n.Text,{size:"xs",c:"dimmed",children:"Try starting with 34 or 37 for Amex format"})]})}},h={type:"code",code:`
import { TextInput, Text } from '@mantine/core';
import { useMask } from '@mantine/hooks';

function Demo() {
  const { ref, rawValue } = useMask({
    mask: '\\#hhhhhh',
    tokens: { h: /[0-9a-fA-F]/ },
  });

  return (
    <>
      <TextInput ref={ref} label="Hex color" placeholder="#______" />
      <Text size="sm" mt="sm">Raw value: {rawValue}</Text>
    </>
  );
}
`,component:function(){let{ref:e,rawValue:t}=(0,a.useMask)({mask:"\\#hhhhhh",tokens:{h:/[0-9a-fA-F]/}});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.TextInput,{ref:e,label:"Hex color",placeholder:"#______"}),(0,s.jsxs)(n.Text,{size:"sm",mt:"sm",children:["Raw value: ",t]})]})}},d={type:"code",code:`
import { TextInput, Text } from '@mantine/core';
import { useMask } from '@mantine/hooks';

function Demo() {
  const { ref, rawValue } = useMask({
    mask: '\\A-9999',
  });

  return (
    <>
      <TextInput ref={ref} label="Product code" placeholder="A-____" />
      <Text size="sm" mt="sm">Raw value: {rawValue}</Text>
    </>
  );
}
`,component:function(){let{ref:e,rawValue:t}=(0,a.useMask)({mask:"\\A-9999"});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.TextInput,{ref:e,label:"Product code",placeholder:"A-____"}),(0,s.jsxs)(n.Text,{size:"sm",mt:"sm",children:["Raw value: ",t]})]})}},m={type:"code",code:`
import { TextInput, Text } from '@mantine/core';
import { useMask } from '@mantine/hooks';

function Demo() {
  const { ref, rawValue } = useMask({
    mask: [/[0-2]/, /\\d/, ':', /[0-5]/, /\\d/],
  });

  return (
    <>
      <TextInput ref={ref} label="Time (HH:MM)" placeholder="__:__" />
      <Text size="sm" mt="sm">Raw value: {rawValue}</Text>
    </>
  );
}
`,component:function(){let{ref:e,rawValue:t}=(0,a.useMask)({mask:[/[0-2]/,/\d/,":",/[0-5]/,/\d/]});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.TextInput,{ref:e,label:"Time (HH:MM)",placeholder:"__:__"}),(0,s.jsxs)(n.Text,{size:"sm",mt:"sm",children:["Raw value: ",t]})]})}},p={type:"code",code:`
import { Button, Group, Text, TextInput } from '@mantine/core';
import { useMask } from '@mantine/hooks';

function Demo() {
  const { ref, value, rawValue, reset } = useMask({
    mask: '(999) 999-9999',
  });

  return (
    <>
      <TextInput ref={ref} label="Phone number" placeholder="(___) ___-____" />
      <Text size="sm" mt="sm">Masked: {value}</Text>
      <Text size="sm">Raw: {rawValue}</Text>
      <Group mt="xs">
        <Button size="xs" variant="default" onClick={reset}>Reset</Button>
      </Group>
    </>
  );
}
`,component:function(){let{ref:e,value:t,rawValue:l,reset:c}=(0,a.useMask)({mask:"(999) 999-9999"});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.TextInput,{ref:e,label:"Phone number",placeholder:"(___) ___-____"}),(0,s.jsxs)(n.Text,{size:"sm",mt:"sm",children:["Masked: ",t]}),(0,s.jsxs)(n.Text,{size:"sm",children:["Raw: ",l]}),(0,s.jsx)(o.Group,{mt:"xs",children:(0,s.jsx)(i.Button,{size:"xs",variant:"default",onClick:c,children:"Reset"})})]})}};var f=(0,t.__exportAll)({complete:()=>c,customTokens:()=>h,dynamic:()=>u,escape:()=>d,regex:()=>m,reset:()=>p,usage:()=>l});e.s(["UseMaskDemos",0,f],719561)},923466,e=>{"use strict";var t=e.i(391398),n=e.i(38856),r=e.i(719561);e.i(603441);var s=e.i(62558);e.i(457450);var a=e.i(418026);let l=(0,s.Layout)(a.MDX_DATA.useMask);function i(e){let s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.useMDXComponents)(),...e.components},{Demo:a}=s;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"useMask"})," attaches real-time input masking to any ",(0,t.jsx)(s.code,{children:"<input>"})," element via a ref callback.\nIt formats user input against a defined pattern and exposes both the masked display value\nand the raw unmasked value. If you need a ready-made input component, use ",(0,t.jsx)(s.a,{href:"/core/mask-input",children:"MaskInput"}),"\nwhich wraps this hook with all standard input props."]}),"\n",(0,t.jsx)(a,{data:r.UseMaskDemos.usage}),"\n",(0,t.jsx)(s.h2,{id:"iscomplete-slotchar-and-transform",children:"isComplete, slotChar, and transform"}),"\n",(0,t.jsxs)(s.p,{children:["Use ",(0,t.jsx)(s.code,{children:"isComplete"})," to check whether all required mask slots are filled — for example, to control\na submit button. The ",(0,t.jsx)(s.code,{children:"slotChar"})," option accepts a multi-character string to show positional\nhints for each slot. The ",(0,t.jsx)(s.code,{children:"transform"})," option converts each character before validation —\nthis example uses it to auto-uppercase input so the ",(0,t.jsx)(s.code,{children:"A"})," token (",(0,t.jsx)(s.code,{children:"[A-Z]"}),") accepts lowercase letters:"]}),"\n",(0,t.jsx)(a,{data:r.UseMaskDemos.complete}),"\n",(0,t.jsx)(s.h2,{id:"dynamic-mask",children:"Dynamic mask"}),"\n",(0,t.jsxs)(s.p,{children:["Use the ",(0,t.jsx)(s.code,{children:"modify"})," option to change the mask based on the current input value.\nThis example switches between standard and American Express credit card formats:"]}),"\n",(0,t.jsx)(a,{data:r.UseMaskDemos.dynamic}),"\n",(0,t.jsx)(s.h2,{id:"custom-tokens",children:"Custom tokens"}),"\n",(0,t.jsxs)(s.p,{children:["Override or extend the built-in token map with the ",(0,t.jsx)(s.code,{children:"tokens"})," option:"]}),"\n",(0,t.jsx)(a,{data:r.UseMaskDemos.customTokens}),"\n",(0,t.jsx)(s.h2,{id:"escaping",children:"Escaping"}),"\n",(0,t.jsxs)(s.p,{children:["Prefix a token character with ",(0,t.jsx)(s.code,{children:"\\"})," to treat it as a literal.\nIn this example, ",(0,t.jsx)(s.code,{children:"A"})," would normally be an uppercase letter token,\nbut ",(0,t.jsx)(s.code,{children:"\\A"})," makes it a literal character:"]}),"\n",(0,t.jsx)(a,{data:r.UseMaskDemos.escape}),"\n",(0,t.jsx)(s.h2,{id:"regex-array-format",children:"Regex array format"}),"\n",(0,t.jsxs)(s.p,{children:["For complex masks where built-in tokens are not enough, pass an array of\nstring literals and ",(0,t.jsx)(s.code,{children:"RegExp"})," objects. This example creates a time input where\nthe first digit is restricted to ",(0,t.jsx)(s.code,{children:"0-2"})," and the minute tens digit to ",(0,t.jsx)(s.code,{children:"0-5"}),":"]}),"\n",(0,t.jsx)(a,{data:r.UseMaskDemos.regex}),"\n",(0,t.jsx)(s.h2,{id:"reset",children:"Reset"}),"\n",(0,t.jsxs)(s.p,{children:["Use the ",(0,t.jsx)(s.code,{children:"reset"})," function returned by the hook to programmatically clear\nthe input value:"]}),"\n",(0,t.jsx)(a,{data:r.UseMaskDemos.reset}),"\n",(0,t.jsx)(s.h2,{id:"mask-pattern-syntax",children:"Mask pattern syntax"}),"\n",(0,t.jsxs)(s.p,{children:["The mask string defines the expected format. Each character is either a ",(0,t.jsx)(s.strong,{children:"token"})," (editable slot)\nor a ",(0,t.jsx)(s.strong,{children:"literal"})," (fixed character inserted automatically)."]}),"\n",(0,t.jsx)(s.h3,{id:"built-in-tokens",children:"Built-in tokens"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"9"})," – any single digit (",(0,t.jsx)(s.code,{children:"[0-9]"}),")"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"a"})," – any single letter (",(0,t.jsx)(s.code,{children:"[A-Za-z]"}),")"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"A"})," – any uppercase letter (",(0,t.jsx)(s.code,{children:"[A-Z]"}),")"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"*"})," – any alphanumeric character (",(0,t.jsx)(s.code,{children:"[A-Za-z0-9]"}),")"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"#"})," – digit or sign (",(0,t.jsx)(s.code,{children:"[-+0-9]"}),")"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"optional-segments",children:"Optional segments"}),"\n",(0,t.jsxs)(s.p,{children:["Append ",(0,t.jsx)(s.code,{children:"?"})," after the last required character to mark remaining slots as optional:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",children:"useMask({ mask: '(999) 999-9999? x9999' }) // Extension is optional\n"})}),"\n",(0,t.jsx)(s.h2,{id:"utility-functions",children:"Utility functions"}),"\n",(0,t.jsx)(s.p,{children:"The following pure functions are exported alongside the hook:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"formatMask(raw, options)"})," – apply a mask to a raw value string"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"unformatMask(masked, options)"})," – strip all mask literals from a masked value"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"isMaskComplete(masked, options)"})," – check if all required slots are filled"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"generatePattern(mode, options)"})," – generate a regex string for HTML ",(0,t.jsx)(s.code,{children:"pattern"})," attribute"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",children:"import { formatMask, unformatMask, isMaskComplete } from '@mantine/hooks';\n\nconst options = { mask: '(999) 999-9999' };\n\nformatMask('1234567890', options);      // \"(123) 456-7890\"\nunformatMask('(123) 456-7890', options); // \"1234567890\"\nisMaskComplete('(123) 456-7890', options); // true\n"})}),"\n",(0,t.jsx)(s.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",children:"interface UseMaskOptions {\n  // Mask pattern string or array of string literals and RegExp objects\n  mask: string | Array<string | RegExp>;\n\n  // Override or extend the default token map\n  tokens?: Record<string, RegExp>;\n\n  // Called on each keystroke, can return overrides for mask, tokens, or slotChar\n  modify?: (value: string) => Partial<Pick<UseMaskOptions, 'mask' | 'tokens' | 'slotChar'>> | undefined;\n\n  // Transform each character before validation and insertion\n  transform?: (char: string) => string;\n\n  // Character displayed in unfilled slots, \"_\" by default\n  slotChar?: string | null;\n\n  // Show mask pattern even when the field is empty and unfocused\n  alwaysShowMask?: boolean;\n\n  // Show mask placeholder on focus, true by default\n  showMaskOnFocus?: boolean;\n\n  // Clear value on blur when mask is incomplete, false by default\n  autoClear?: boolean;\n\n  // Sets aria-invalid on the input\n  invalid?: boolean;\n\n  // Called on every change with raw and masked values\n  onChangeRaw?: (rawValue: string, maskedValue: string) => void;\n\n  // Called when all required mask slots are filled\n  onComplete?: (maskedValue: string, rawValue: string) => void;\n\n}\n\ninterface UseMaskReturnValue {\n  // Ref callback to attach to the input element\n  ref: React.RefCallback<HTMLInputElement>;\n\n  // Current masked display value\n  value: string;\n\n  // Current raw unmasked value\n  rawValue: string;\n\n  // Whether all required mask slots are filled\n  isComplete: boolean;\n\n  // Clear the input value and reset state\n  reset: () => void;\n}\n\nfunction useMask(options: UseMaskOptions): UseMaskReturnValue;\n"})}),"\n",(0,t.jsx)(s.h2,{id:"exported-types",children:"Exported types"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"UseMaskOptions"})," and ",(0,t.jsx)(s.code,{children:"UseMaskReturnValue"})," types are exported from the ",(0,t.jsx)(s.code,{children:"@mantine/hooks"})," package;\nyou can import them in your application:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",children:"import type { UseMaskOptions, UseMaskReturnValue } from '@mantine/hooks';\n"})})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(l,{...e,children:(0,t.jsx)(i,{...e})})}])},692388,(e,t,n)=>{let r="/hooks/use-mask";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(923466)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);