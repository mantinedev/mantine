(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var a=Object.defineProperty;e.s(["__exportAll",0,(e,n)=>{let t={};for(var l in e)a(t,l,{get:e[l],enumerable:!0});return n||a(t,Symbol.toStringTag,{value:"Module"}),t}])},728649,e=>{"use strict";var a,n,t,l,o,r=e.i(191788);function i(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&0>a.indexOf(t)&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)0>a.indexOf(t[l])&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(n[t[l]]=e[t[l]]);return n}function s(){}function m(e){return!!(e||"").match(/\d/)}function T(e){return null==e}function d(e){return T(e)||"number"==typeof e&&isNaN(e)||"number"==typeof e&&!isFinite(e)}function c(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function b(e){var a=(0,r.useRef)(e);return a.current=e,(0,r.useRef)(function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];return a.current.apply(a,e)}).current}function u(e,a){void 0===a&&(a=!0);var n="-"===e[0],t=n&&a,l=(e=e.replace("-","")).split(".");return{beforeDecimal:l[0],afterDecimal:l[1]||"",hasNegation:n,addNegation:t}}function h(e,a,n){for(var t="",l=n?"0":"",o=0;o<=a-1;o++)t+=e[o]||l;return t}function p(e,a){return Array(a+1).join(e)}function f(e){var a=e+"",n="-"===a[0]?"-":"";n&&(a=a.substring(1));var t=a.split(/[eE]/g),l=t[0],o=t[1];if(!(o=Number(o)))return n+l;l=l.replace(".","");var r=1+o,i=l.length;return r<0?l="0."+p("0",Math.abs(r))+l:r>=i?l+=p("0",r-i):l=(l.substring(0,r)||"0")+"."+l.substring(r),n+l}function x(e,a,n){if(-1!==["","-"].indexOf(e))return e;var t=(-1!==e.indexOf(".")||n)&&a,l=u(e),o=l.beforeDecimal,r=l.afterDecimal,i=l.hasNegation,s=parseFloat("0."+(r||"0")),m=(r.length<=a?"0."+r:s.toFixed(a)).split("."),T=o;return o&&Number(m[0])&&(T=o.split("").reverse().reduce(function(e,a,n){return e.length>n?(Number(e[0])+Number(a)).toString()+e.substring(1,e.length):a+e},m[0])),(i?"-":"")+T+(t?".":"")+h(m[1]||"",a,n)}function y(e,a){if(e.value=e.value,null!==e){if(e.createTextRange){var n=e.createTextRange();return n.move("character",a),n.select(),!0}return e.selectionStart||0===e.selectionStart?(e.focus(),e.setSelectionRange(a,a),!0):(e.focus(),!1)}}(a=o||(o={})).event="event",a.props="prop";var v=(n=function(e,a){for(var n=0,t=0,l=e.length,o=a.length;e[n]===a[n]&&n<l;)n++;for(;e[l-1-t]===a[o-1-t]&&o-t>n&&l-t>n;)t++;return{from:{start:n,end:l-t},to:{start:n,end:o-t}}},l=void 0,function(){for(var e=[],a=arguments.length;a--;)e[a]=arguments[a];return t&&e.length===t.length&&e.every(function(e,a){return e===t[a]})?l:(t=e,l=n.apply(void 0,e))}),j=function(e,a){var n=Math.min(e.selectionStart,a);return{from:{start:n,end:e.selectionEnd},to:{start:n,end:a}}};function g(e){return Math.max(e.selectionStart,e.selectionEnd)}function S(e){var a=e.currentValue,n=e.formattedValue,t=e.currentValueIndex,l=e.formattedValueIndex;return a[t]===n[l]}function w(e,a,n,t){var l=e.length;if(a=Math.min(Math.max(a,0),l),"left"===t){for(;a>=0&&!n[a];)a--;-1===a&&(a=n.indexOf(!0))}else{for(;a<=l&&!n[a];)a++;a>l&&(a=n.lastIndexOf(!0))}return -1===a&&(a=l),a}function C(e){for(var a=Array.from({length:e.length+1}).map(function(){return!0}),n=0,t=a.length;n<t;n++)a[n]=!!(m(e[n])||m(e[n-1]));return a}function N(e,a,n,t,l,i){void 0===i&&(i=s);var m=b(function(e,a){var n,o;return d(e)?(o="",n=""):n="number"==typeof e||a?t(o="number"==typeof e?f(e):e):t(o=l(e,void 0)),{formattedValue:n,numAsString:o}}),c=(0,r.useState)(function(){return m(T(e)?a:e,n)}),u=c[0],h=c[1],p=b(function(e,a){e.formattedValue!==u.formattedValue&&h({formattedValue:e.formattedValue,numAsString:e.value}),i(e,a)}),x=e,y=n;T(e)&&(x=u.numAsString,y=!0);var v=m(x,y);return(0,r.useMemo)(function(){h(v)},[v.formattedValue]),(0,r.useEffect)(function(){if(!T(a)&&T(e)&&""!==u.formattedValue){var n=parseFloat(u.numAsString);p({formattedValue:u.formattedValue,value:u.numAsString,floatValue:isNaN(n)?void 0:n},{event:void 0,source:o.props})}},[]),[u,p]}function E(e){return e.replace(/[^0-9]/g,"")}function V(e){return e}function D(e){var a=e.type;void 0===a&&(a="text");var n=e.displayType;void 0===n&&(n="input");var t=e.customInput,l=e.renderText,T=e.getInputRef,d=e.format;void 0===d&&(d=V);var c=e.removeFormatting;void 0===c&&(c=E);var b=e.defaultValue,u=e.valueIsNumericString,h=e.onValueChange,p=e.isAllowed,f=e.onChange;void 0===f&&(f=s);var x=e.onKeyDown;void 0===x&&(x=s);var D=e.onMouseUp;void 0===D&&(D=s);var A=e.onFocus;void 0===A&&(A=s);var B=e.onBlur;void 0===B&&(B=s);var k=e.value,O=e.getCaretBoundary;void 0===O&&(O=C);var R=e.isValidInputCharacter;void 0===R&&(R=m);var P=e.isCharacterSame,F=i(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter","isCharacterSame"]),I=N(k,b,!!u,d,c,h),M=I[0],H=M.formattedValue,Y=M.numAsString,W=I[1],_=(0,r.useRef)(),L=(0,r.useRef)({formattedValue:H,numAsString:Y}),K=function(e,a){L.current={formattedValue:e.formattedValue,numAsString:e.value},W(e,a)},G=(0,r.useState)(!1),U=G[0],X=G[1],Z=(0,r.useRef)(null),z=(0,r.useRef)({setCaretTimeout:null,focusTimeout:null});(0,r.useEffect)(function(){return X(!0),function(){clearTimeout(z.current.setCaretTimeout),clearTimeout(z.current.focusTimeout)}},[]);var $=d,q=function(e,a){var n=parseFloat(a);return{formattedValue:e,value:a,floatValue:isNaN(n)?void 0:n}},J=function(e,a,n){(0!==e.selectionStart||e.selectionEnd!==e.value.length)&&(y(e,a),z.current.setCaretTimeout=setTimeout(function(){e.value===n&&e.selectionStart!==a&&y(e,a)},0))},Q=function(e,a,n){return w(e,a,O(e),n)},ee=function(e,a,n){var t=O(a),l=function(e,a,n,t,l,o,r){void 0===r&&(r=S);var i=l.findIndex(function(e){return e}),s=e.slice(0,i);a||n.startsWith(s)||(a=s,n=s+n,t+=s.length);for(var m=n.length,T=e.length,d={},c=Array(m),b=0;b<m;b++){c[b]=-1;for(var u=0;u<T;u++)if(r({currentValue:n,lastValue:a,formattedValue:e,currentValueIndex:b,formattedValueIndex:u})&&!0!==d[u]){c[b]=u,d[u]=!0;break}}for(var h=t;h<m&&(-1===c[h]||!o(n[h]));)h++;var p=h===m||-1===c[h]?T:c[h];for(h=t-1;h>0&&-1===c[h];)h--;var f=-1===h||-1===c[h]?0:c[h]+1;return f>p?p:t-f<p-t?f:p}(a,H,e,n,t,R,P);return w(a,l,t)},ea=function(e){var a,n=e.formattedValue;void 0===n&&(n="");var t=e.input,l=e.source,o=e.event,r=e.numAsString;if(t){var i=e.inputValue||t.value,s=g(t);t.value=n,void 0!==(a=ee(i,n,s))&&J(t,a,n)}n!==H&&K(q(n,r),{event:o,source:l})};(0,r.useEffect)(function(){var e=L.current,a=e.formattedValue,n=e.numAsString;(H!==a||Y!==n)&&K(q(H,Y),{event:void 0,source:o.props})},[H,Y]);var en=Z.current?g(Z.current):void 0;("u">typeof window?r.useLayoutEffect:r.useEffect)(function(){var e=Z.current;if(H!==L.current.formattedValue&&e){var a=ee(L.current.formattedValue,H,en);e.value=H,J(e,a,H)}},[H]);var et=function(e,a,n){var t=a.target,l=Object.assign(Object.assign({},_.current?j(_.current,t.selectionEnd):v(H,e)),{lastValue:H}),o=c(e,l),r=$(o);if(o=c(r,void 0),p&&!p(q(r,o))){var i=a.target,s=ee(e,H,g(i));return i.value=H,J(i,s,H),!1}return ea({formattedValue:r,numAsString:o,inputValue:e,event:a,source:n,input:a.target}),!0},el=function(e,a){void 0===a&&(a=0),_.current={selectionStart:e.selectionStart,selectionEnd:e.selectionEnd+a}},eo=Object.assign({inputMode:U&&"u">typeof navigator&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))?"numeric":void 0},F,{type:a,value:H,onChange:function(e){et(e.target.value,e,o.event)&&f(e),_.current=void 0},onKeyDown:function(e){var a,n=e.target,t=e.key,l=n.selectionStart,o=n.selectionEnd,r=n.value;void 0===r&&(r=""),"ArrowLeft"===t||"Backspace"===t?a=Math.max(l-1,0):"ArrowRight"===t?a=Math.min(l+1,r.length):"Delete"===t&&(a=l);var i=0;"Delete"===t&&l===o&&(i=1);var s="ArrowLeft"===t||"ArrowRight"===t;if(void 0===a||l!==o&&!s){x(e),el(n,i);return}var m=a;s?(m=Q(r,a,"ArrowLeft"===t?"left":"right"))!==a&&e.preventDefault():"Delete"!==t||R(r[a])?"Backspace"!==t||R(r[a])||(m=Q(r,a,"left")):m=Q(r,a,"right"),m!==a&&J(n,m,r),x(e),el(n,i)},onMouseUp:function(e){var a=e.target,n=function(){var e=a.selectionStart,n=a.selectionEnd,t=a.value;if(void 0===t&&(t=""),e===n){var l=Q(t,e);l!==e&&J(a,l,t)}};n(),requestAnimationFrame(function(){n()}),D(e),el(a)},onFocus:function(e){e.persist&&e.persist();var a=e.target,n=e.currentTarget;Z.current=a,z.current.focusTimeout=setTimeout(function(){var t=a.selectionStart,l=a.selectionEnd,o=a.value;void 0===o&&(o="");var r=Q(o,t);r!==t&&(0!==t||l!==o.length)&&J(a,r,o),A(Object.assign(Object.assign({},e),{currentTarget:n}))},0)},onBlur:function(e){Z.current=null,clearTimeout(z.current.focusTimeout),clearTimeout(z.current.setCaretTimeout),B(e)}});return"text"===n?l?r.default.createElement(r.default.Fragment,null,l(H,F)||null):r.default.createElement("span",Object.assign({},F,{ref:T}),H):t?r.default.createElement(t,Object.assign({},eo,{ref:T})):r.default.createElement("input",Object.assign({},eo,{ref:T}))}function A(e,a){var n,t,l,o=a.decimalScale,r=a.fixedDecimalScale,i=a.prefix;void 0===i&&(i="");var s=a.suffix;void 0===s&&(s="");var m=a.allowNegative,T=a.thousandsGroupStyle;if(void 0===T&&(T="thousand"),""===e||"-"===e)return e;var d=B(a),c=d.thousandSeparator,b=d.decimalSeparator,p=0!==o&&-1!==e.indexOf(".")||o&&r,f=u(e,m),x=f.beforeDecimal,y=f.afterDecimal,v=f.addNegation;return void 0!==o&&(y=h(y,o,!!r)),c&&(n=x,t=function(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;default:return/(\d)(?=(\d{3})+(?!\d))/g}}(T),l=-1===(l=n.search(/[1-9]/))?n.length:l,x=n.substring(0,l)+n.substring(l,n.length).replace(t,"$1"+c)),i&&(x=i+x),s&&(y+=s),v&&(x="-"+x),e=x+(p&&b||"")+y}function B(e){var a=e.decimalSeparator;void 0===a&&(a=".");var n=e.thousandSeparator,t=e.allowedDecimalSeparators;return!0===n&&(n=","),t||(t=[a,"."]),{decimalSeparator:a,thousandSeparator:n,allowedDecimalSeparators:t}}e.s(["NumericFormat",0,function(e){var a,n,t,l,b,h,p,j,g,S,w,C,E,V,k,O,R,P,F,I,M,H,Y,W,_,L,K,G,U,X=((a=function(e){var a=B(e),n=a.thousandSeparator,t=a.decimalSeparator,l=e.prefix;void 0===l&&(l="");var o=e.allowNegative;if(void 0===o&&(o=!0),n===t)throw Error("\n        Decimal separator can't be same as thousand separator.\n        thousandSeparator: "+n+' (thousandSeparator = {true} is same as thousandSeparator = ",")\n        decimalSeparator: '+t+" (default value for decimalSeparator is .)\n     ");return l.startsWith("-")&&o&&(console.error("\n      Prefix can't start with '-' when allowNegative is true.\n      prefix: "+l+"\n      allowNegative: "+o+"\n    "),o=!1),Object.assign(Object.assign({},e),{allowNegative:o})}(a=e)).decimalSeparator,a.allowedDecimalSeparators,a.thousandsGroupStyle,n=a.suffix,t=a.allowNegative,l=a.allowLeadingZeros,void 0===(b=a.onKeyDown)&&(b=s),void 0===(h=a.onBlur)&&(h=s),p=a.thousandSeparator,j=a.decimalScale,g=a.fixedDecimalScale,void 0===(S=a.prefix)&&(S=""),w=a.defaultValue,C=a.value,E=a.valueIsNumericString,V=a.onValueChange,k=i(a,["decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","suffix","allowNegative","allowLeadingZeros","onKeyDown","onBlur","thousandSeparator","decimalScale","fixedDecimalScale","prefix","defaultValue","value","valueIsNumericString","onValueChange"]),R=(O=B(a)).decimalSeparator,P=O.allowedDecimalSeparators,F=function(e){return A(e,a)},I=function(e,n){return function(e,a,n){void 0===a&&(a={from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""});var t,l,o,r,i=n.allowNegative,s=n.prefix;void 0===s&&(s="");var T=n.suffix;void 0===T&&(T="");var d=n.decimalScale,b=a.from,h=a.to,p=h.start,f=h.end,x=B(n),y=x.allowedDecimalSeparators,v=x.decimalSeparator,j=e[f]===v;if(m(e)&&(e===s||e===T)&&""===a.lastValue)return e;if(f-p==1&&-1!==y.indexOf(e[p])){var g=0===d?"":v;e=e.substring(0,p)+g+e.substring(p+1,e.length)}var S=function(e,a,n){var t=!1,l=!1;s.startsWith("-")?t=!1:e.startsWith("--")?(t=!1,l=!0):T.startsWith("-")&&e.length===T.length?t=!1:"-"===e[0]&&(t=!0);var o=+!!t;return l&&(o=2),o&&(e=e.substring(o),a-=o,n-=o),{value:e,start:a,end:n,hasNegation:t}},w=S(e,p,f),C=w.hasNegation;e=w.value,p=w.start,f=w.end;var N=S(a.lastValue,b.start,b.end),E=N.start,V=N.end,D=N.value,A=e.substring(p,f);e.length&&D.length&&(E>D.length-T.length||V<s.length)&&!(A&&T.startsWith(A))&&(e=D);var k=0;e.startsWith(s)?k+=s.length:p<s.length&&(k=p),e=e.substring(k),f-=k;var O=e.length,R=e.length-T.length;e.endsWith(T)?O=R:f>R?O=f:f>e.length-T.length&&(O=f),e=e.substring(0,O),void 0===(t=C?"-"+e:e)&&(t=""),l=RegExp("(-)(.)*(-)"),o=/(-)/.test(t),r=l.test(t),t=t.replace(/-/g,""),o&&!r&&i&&(t="-"+t);var P=(e=((e=t).match(RegExp("(^-)|[0-9]|"+c(v),"g"))||[]).join("")).indexOf(v),F=u(e=e.replace(RegExp(c(v),"g"),function(e,a){return a===P?".":""}),i),I=F.beforeDecimal,M=F.afterDecimal,H=F.addNegation;return h.end-h.start<b.end-b.start&&""===I&&j&&!parseFloat(M)&&(e=H?"-":""),e}(e,n,a)},M=T(C)?w:C,Y=null!=E?E:(H=S,""===M||!(null==H?void 0:H.match(/\d/))&&!(null==n?void 0:n.match(/\d/))&&"string"==typeof M&&!isNaN(Number(M))),T(C)?T(w)||(Y=Y||"number"==typeof w):Y=Y||"number"==typeof C,K=(L=(_=N((W=function(e){return d(e)?e:("number"==typeof e&&(e=f(e)),Y&&"number"==typeof j)?x(e,j,!!g):e})(C),W(w),!!Y,F,I,V))[0]).numAsString,G=L.formattedValue,U=_[1],Object.assign(Object.assign({},k),{value:G,valueIsNumericString:!1,isValidInputCharacter:function(e){return e===R||m(e)},isCharacterSame:function(e){var a=e.currentValue,n=e.lastValue,t=e.formattedValue,l=e.currentValueIndex,o=e.formattedValueIndex,r=a[l],i=t[o],s=v(n,a).to,m=function(e){return I(e).indexOf(".")+S.length};return!(0===C&&g&&j&&a[s.start]===R&&m(a)<l&&m(t)>o)&&(!!(l>=s.start&&l<s.end&&P&&P.includes(r))&&i===R||r===i)},onValueChange:U,format:F,removeFormatting:I,getCaretBoundary:function(e){var n,t,l,o,r,i;return void 0===(t=(n=a).prefix)&&(t=""),void 0===(l=n.suffix)&&(l=""),o=Array.from({length:e.length+1}).map(function(){return!0}),r="-"===e[0],o.fill(!1,0,Math.min(t.length+ +!!r,e.length)),i=e.length,o.fill(!1,i-l.length+1,i+1),o},onKeyDown:function(e){var a=e.target,n=e.key,l=a.selectionStart,o=a.selectionEnd,r=a.value;if(void 0===r&&(r=""),("Backspace"===n||"Delete"===n)&&o<S.length&&"-"!==r)return void e.preventDefault();if(l!==o)return void b(e);"Backspace"===n&&"-"===r[0]&&l===S.length+1&&t&&y(a,1),j&&g&&("Backspace"===n&&r[l-1]===R?(y(a,l-1),e.preventDefault()):"Delete"===n&&r[l]===R&&e.preventDefault()),(null==P?void 0:P.includes(n))&&r[l]===R&&y(a,l+1);var i=!0===p?",":p;"Backspace"===n&&r[l-1]===i&&y(a,l-1),"Delete"===n&&r[l]===i&&y(a,l+1),b(e)},onBlur:function(e){var n=K;n.match(/\d/g)||(n=""),l||(n=function(e){if(!e)return e;var a="-"===e[0];a&&(e=e.substring(1,e.length));var n=e.split("."),t=n[0].replace(/^0+/,"")||"0",l=n[1]||"";return(a?"-":"")+t+(l?"."+l:"")}(n)),g&&j&&(n=x(n,j,g)),n!==K&&U({formattedValue:A(n,a),value:n,floatValue:parseFloat(n)},{event:e,source:o.event}),h(e)}}));return r.default.createElement(D,Object.assign({},X))}])},943618,e=>{"use strict";var a=e.i(44091),n=e.i(391398),t=e.i(728649);function l(e){let{value:l,defaultValue:o,...r}=(0,a.useProps)("NumberFormatter",null,e);return void 0===l?null:(0,n.jsx)(t.NumericFormat,{displayType:"text",value:l,...r})}l.extend=e=>e,l.displayName="@mantine/core/NumberFormatter",e.s(["NumberFormatter",0,l])},214045,e=>{"use strict";var a=e.i(648863);let n=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}],t=[{position:1,mass:1.008,symbol:"H",name:"Hydrogen"},{position:2,mass:4.0026,symbol:"He",name:"Helium"},{position:3,mass:6.94,symbol:"Li",name:"Lithium"},{position:4,mass:9.0122,symbol:"Be",name:"Beryllium"},{position:5,mass:10.81,symbol:"B",name:"Boron"},{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:8,mass:15.999,symbol:"O",name:"Oxygen"},{position:9,mass:18.998,symbol:"F",name:"Fluorine"},{position:10,mass:20.18,symbol:"Ne",name:"Neon"},{position:11,mass:22.99,symbol:"Na",name:"Sodium"},{position:12,mass:24.305,symbol:"Mg",name:"Magnesium"},{position:13,mass:26.982,symbol:"Al",name:"Aluminium"},{position:14,mass:28.085,symbol:"Si",name:"Silicon"},{position:15,mass:30.974,symbol:"P",name:"Phosphorus"},{position:16,mass:32.06,symbol:"S",name:"Sulfur"},{position:17,mass:35.45,symbol:"Cl",name:"Chlorine"},{position:18,mass:39.948,symbol:"Ar",name:"Argon"},{position:19,mass:39.098,symbol:"K",name:"Potassium"},{position:20,mass:39.098,symbol:"Ca",name:"Calcium"},{position:21,mass:40.078,symbol:"Sc",name:"Scandium"},{position:22,mass:47.867,symbol:"Ti",name:"Titanium"},{position:23,mass:50.941,symbol:"V",name:"Vanadium"},{position:24,mass:51.996,symbol:"Cr",name:"Chromium"},{position:25,mass:54.938,symbol:"Mn",name:"Manganese"},{position:26,mass:55.845,symbol:"Fe",name:"Iron"},{position:27,mass:58.933,symbol:"Co",name:"Cobalt"},{position:28,mass:58.933,symbol:"Ni",name:"Nickel"},{position:29,mass:63.546,symbol:"Cu",name:"Copper"},{position:30,mass:65.38,symbol:"Zn",name:"Zinc"},{position:31,mass:69.723,symbol:"Ga",name:"Gallium"},{position:32,mass:72.63,symbol:"Ge",name:"Germanium"},{position:33,mass:74.922,symbol:"As",name:"Arsenic"},{position:34,mass:78.971,symbol:"Se",name:"Selenium"},{position:35,mass:79.904,symbol:"Br",name:"Bromine"},{position:36,mass:83.798,symbol:"Kr",name:"Krypton"},{position:37,mass:83.798,symbol:"Rb",name:"Rubidium"},{position:38,mass:87.62,symbol:"Sr",name:"Strontium"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:40,mass:91.224,symbol:"Zr",name:"Zirconium"},{position:41,mass:92.906,symbol:"Nb",name:"Niobium"},{position:42,mass:95.95,symbol:"Mo",name:"Molybdenum"},{position:43,mass:98,symbol:"Tc",name:"Technetium"},{position:44,mass:101.07,symbol:"Ru",name:"Ruthenium"},{position:45,mass:102.905,symbol:"Rh",name:"Rhodium"},{position:46,mass:106.42,symbol:"Pd",name:"Palladium"},{position:47,mass:106.42,symbol:"Ag",name:"Silver"},{position:48,mass:112.414,symbol:"Cd",name:"Cadmium"},{position:49,mass:114.818,symbol:"In",name:"Indium"},{position:50,mass:118.71,symbol:"Sn",name:"Tin"},{position:51,mass:121.76,symbol:"Sb",name:"Antimony"},{position:52,mass:127.6,symbol:"Te",name:"Tellurium"},{position:53,mass:126.904,symbol:"I",name:"Iodine"},{position:54,mass:126.904,symbol:"Xe",name:"Xenon"},{position:55,mass:126.904,symbol:"Cs",name:"Cesium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:57,mass:138.905,symbol:"La",name:"Lanthanum"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"},{position:59,mass:140.116,symbol:"Pr",name:"Praseodymium"},{position:60,mass:140.907,symbol:"Nd",name:"Neodymium"},{position:61,mass:144.242,symbol:"Pm",name:"Promethium"},{position:62,mass:145,symbol:"Sm",name:"Samarium"},{position:63,mass:150.36,symbol:"Eu",name:"Europium"},{position:64,mass:151.964,symbol:"Gd",name:"Gadolinium"},{position:65,mass:157.25,symbol:"Tb",name:"Terbium"},{position:66,mass:158.925,symbol:"Dy",name:"Dysprosium"},{position:67,mass:162.5,symbol:"Ho",name:"Holmium"},{position:68,mass:164.93,symbol:"Er",name:"Erbium"},{position:69,mass:167.259,symbol:"Tm",name:"Thulium"}];var l=e.i(245745),o=e.i(391398);let r={type:"code",code:`
import { Table } from '@mantine/core';

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
`,component:function(){let e=n.map(e=>(0,o.jsxs)(l.Table.Tr,{children:[(0,o.jsx)(l.Table.Td,{children:e.position}),(0,o.jsx)(l.Table.Td,{children:e.name}),(0,o.jsx)(l.Table.Td,{children:e.symbol}),(0,o.jsx)(l.Table.Td,{children:e.mass})]},e.name));return(0,o.jsxs)(l.Table,{children:[(0,o.jsx)(l.Table.Thead,{children:(0,o.jsxs)(l.Table.Tr,{children:[(0,o.jsx)(l.Table.Th,{children:"Element position"}),(0,o.jsx)(l.Table.Th,{children:"Element name"}),(0,o.jsx)(l.Table.Th,{children:"Symbol"}),(0,o.jsx)(l.Table.Th,{children:"Atomic mass"})]})}),(0,o.jsx)(l.Table.Tbody,{children:e})]})}},i={type:"code",code:`
import { Table } from '@mantine/core';

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  const ths = (
    <Table.Tr>
      <Table.Th>Element position</Table.Th>
      <Table.Th>Element name</Table.Th>
      <Table.Th>Symbol</Table.Th>
      <Table.Th>Atomic mass</Table.Th>
    </Table.Tr>
  );

  return (
    <Table captionSide="bottom">
      <Table.Caption>Some elements from periodic table</Table.Caption>
      <Table.Thead>{ths}</Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
      <Table.Tfoot>{ths}</Table.Tfoot>
    </Table>
  );
}
`,component:function(){let e=n.map(e=>(0,o.jsxs)(l.Table.Tr,{children:[(0,o.jsx)(l.Table.Td,{children:e.position}),(0,o.jsx)(l.Table.Td,{children:e.name}),(0,o.jsx)(l.Table.Td,{children:e.symbol}),(0,o.jsx)(l.Table.Td,{children:e.mass})]},e.name)),a=(0,o.jsxs)(l.Table.Tr,{children:[(0,o.jsx)(l.Table.Th,{children:"Element position"}),(0,o.jsx)(l.Table.Th,{children:"Element name"}),(0,o.jsx)(l.Table.Th,{children:"Symbol"}),(0,o.jsx)(l.Table.Th,{children:"Atomic mass"})]});return(0,o.jsxs)(l.Table,{captionSide:"bottom",children:[(0,o.jsx)(l.Table.Caption,{children:"Some elements from the periodic table"}),(0,o.jsx)(l.Table.Thead,{children:a}),(0,o.jsx)(l.Table.Tbody,{children:e}),(0,o.jsx)(l.Table.Tfoot,{children:a})]})}},s={type:"configurator",component:function(e){return(0,o.jsxs)(l.Table,{...e,children:[(0,o.jsx)(l.Table.Thead,{children:(0,o.jsxs)(l.Table.Tr,{children:[(0,o.jsx)(l.Table.Th,{children:"Element position"}),(0,o.jsx)(l.Table.Th,{children:"Element name"}),(0,o.jsx)(l.Table.Th,{children:"Symbol"}),(0,o.jsx)(l.Table.Th,{children:"Atomic mass"})]})}),(0,o.jsx)(l.Table.Tbody,{children:n.map(e=>(0,o.jsxs)(l.Table.Tr,{children:[(0,o.jsx)(l.Table.Td,{children:e.position}),(0,o.jsx)(l.Table.Td,{children:e.name}),(0,o.jsx)(l.Table.Td,{children:e.symbol}),(0,o.jsx)(l.Table.Td,{children:e.mass})]},e.name))})]})},code:`
import { Table } from '@mantine/core';

function Demo() {
  return (
    <Table{{props}}>
      {/* {...rows} */}
    </Table>
  );
}
`,controls:[{prop:"striped",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"highlightOnHover",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withTableBorder",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withColumnBorders",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withRowBorders",type:"boolean",initialValue:!0,libraryValue:!0}]},m={type:"configurator",component:function(e){return(0,o.jsxs)(l.Table,{...e,children:[(0,o.jsx)(l.Table.Thead,{children:(0,o.jsxs)(l.Table.Tr,{children:[(0,o.jsx)(l.Table.Th,{children:"Position"}),(0,o.jsx)(l.Table.Th,{children:"Name"}),(0,o.jsx)(l.Table.Th,{children:"Symbol"})]})}),(0,o.jsx)(l.Table.Tbody,{children:n.map(e=>(0,o.jsxs)(l.Table.Tr,{children:[(0,o.jsx)(l.Table.Td,{children:e.position}),(0,o.jsx)(l.Table.Td,{children:e.name}),(0,o.jsx)(l.Table.Td,{children:e.symbol})]},e.name))})]})},code:`
import { Table } from '@mantine/core';

function Demo() {
  return (
    <Table{{props}}>
      {/* {...rows} */}
    </Table>
  );
}
`,controls:[{prop:"horizontalSpacing",type:"size",libraryValue:"xs",initialValue:"xs"},{prop:"verticalSpacing",type:"size",initialValue:"xs",libraryValue:"xs"}]},T={type:"code",code:`
import { Table } from '@mantine/core';

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={500}>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Element position</Table.Th>
            <Table.Th>Element name</Table.Th>
            <Table.Th>Symbol</Table.Th>
            <Table.Th>Atomic mass</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
`,component:function(){let e=n.map(e=>(0,o.jsxs)(l.Table.Tr,{children:[(0,o.jsx)(l.Table.Td,{children:e.position}),(0,o.jsx)(l.Table.Td,{children:e.name}),(0,o.jsx)(l.Table.Td,{children:e.symbol}),(0,o.jsx)(l.Table.Td,{children:e.mass})]},e.name));return(0,o.jsx)(l.Table.ScrollContainer,{minWidth:500,children:(0,o.jsxs)(l.Table,{children:[(0,o.jsx)(l.Table.Thead,{children:(0,o.jsxs)(l.Table.Tr,{children:[(0,o.jsx)(l.Table.Th,{children:"Element position"}),(0,o.jsx)(l.Table.Th,{children:"Element name"}),(0,o.jsx)(l.Table.Th,{children:"Symbol"}),(0,o.jsx)(l.Table.Th,{children:"Atomic mass"})]})}),(0,o.jsx)(l.Table.Tbody,{children:e})]})})}},d={type:"code",code:`
import { Table } from '@mantine/core';

function Demo() {
  const rows = elementsLong.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={500} maxHeight={300}>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Element position</Table.Th>
            <Table.Th>Element name</Table.Th>
            <Table.Th>Symbol</Table.Th>
            <Table.Th>Atomic mass</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
`,component:function(){let e=t.map(e=>(0,o.jsxs)(l.Table.Tr,{children:[(0,o.jsx)(l.Table.Td,{children:e.position}),(0,o.jsx)(l.Table.Td,{children:e.name}),(0,o.jsx)(l.Table.Td,{children:e.symbol}),(0,o.jsx)(l.Table.Td,{children:e.mass})]},e.name));return(0,o.jsx)(l.Table.ScrollContainer,{minWidth:500,maxHeight:300,children:(0,o.jsxs)(l.Table,{children:[(0,o.jsx)(l.Table.Thead,{children:(0,o.jsxs)(l.Table.Tr,{children:[(0,o.jsx)(l.Table.Th,{children:"Element position"}),(0,o.jsx)(l.Table.Th,{children:"Element name"}),(0,o.jsx)(l.Table.Th,{children:"Symbol"}),(0,o.jsx)(l.Table.Th,{children:"Atomic mass"})]})}),(0,o.jsx)(l.Table.Tbody,{children:e})]})})}},c={type:"code",code:`
import { Table } from '@mantine/core';

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={500} type="native">
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Element position</Table.Th>
            <Table.Th>Element name</Table.Th>
            <Table.Th>Symbol</Table.Th>
            <Table.Th>Atomic mass</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
`,component:function(){let e=n.map(e=>(0,o.jsxs)(l.Table.Tr,{children:[(0,o.jsx)(l.Table.Td,{children:e.position}),(0,o.jsx)(l.Table.Td,{children:e.name}),(0,o.jsx)(l.Table.Td,{children:e.symbol}),(0,o.jsx)(l.Table.Td,{children:e.mass})]},e.name));return(0,o.jsx)(l.Table.ScrollContainer,{minWidth:500,type:"native",children:(0,o.jsxs)(l.Table,{children:[(0,o.jsx)(l.Table.Thead,{children:(0,o.jsxs)(l.Table.Tr,{children:[(0,o.jsx)(l.Table.Th,{children:"Element position"}),(0,o.jsx)(l.Table.Th,{children:"Element name"}),(0,o.jsx)(l.Table.Th,{children:"Symbol"}),(0,o.jsx)(l.Table.Th,{children:"Atomic mass"})]})}),(0,o.jsx)(l.Table.Tbody,{children:e})]})})}},b={type:"code",code:`
import { Table } from '@mantine/core';

function Demo() {
  const rows = elementsLong.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={500} maxHeight={300} type="native">
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Element position</Table.Th>
            <Table.Th>Element name</Table.Th>
            <Table.Th>Symbol</Table.Th>
            <Table.Th>Atomic mass</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
`,component:function(){let e=t.map(e=>(0,o.jsxs)(l.Table.Tr,{children:[(0,o.jsx)(l.Table.Td,{children:e.position}),(0,o.jsx)(l.Table.Td,{children:e.name}),(0,o.jsx)(l.Table.Td,{children:e.symbol}),(0,o.jsx)(l.Table.Td,{children:e.mass})]},e.name));return(0,o.jsx)(l.Table.ScrollContainer,{minWidth:500,maxHeight:300,type:"native",children:(0,o.jsxs)(l.Table,{children:[(0,o.jsx)(l.Table.Thead,{children:(0,o.jsxs)(l.Table.Tr,{children:[(0,o.jsx)(l.Table.Th,{children:"Element position"}),(0,o.jsx)(l.Table.Th,{children:"Element name"}),(0,o.jsx)(l.Table.Th,{children:"Symbol"}),(0,o.jsx)(l.Table.Th,{children:"Atomic mass"})]})}),(0,o.jsx)(l.Table.Tbody,{children:e})]})})}};var u=e.i(191788),h=e.i(37541);let p=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}],f={type:"code",component:function(){let[e,a]=(0,u.useState)([]),n=p.map(n=>(0,o.jsxs)(l.Table.Tr,{bg:e.includes(n.position)?"var(--mantine-color-blue-light)":void 0,children:[(0,o.jsx)(l.Table.Td,{children:(0,o.jsx)(h.Checkbox,{"aria-label":"Select row",checked:e.includes(n.position),onChange:t=>a(t.currentTarget.checked?[...e,n.position]:e.filter(e=>e!==n.position))})}),(0,o.jsx)(l.Table.Td,{children:n.position}),(0,o.jsx)(l.Table.Td,{children:n.name}),(0,o.jsx)(l.Table.Td,{children:n.symbol}),(0,o.jsx)(l.Table.Td,{children:n.mass})]},n.name));return(0,o.jsxs)(l.Table,{children:[(0,o.jsx)(l.Table.Thead,{visibleFrom:"sm",children:(0,o.jsxs)(l.Table.Tr,{children:[(0,o.jsx)(l.Table.Th,{}),(0,o.jsx)(l.Table.Th,{children:"Element position"}),(0,o.jsx)(l.Table.Th,{children:"Element name"}),(0,o.jsx)(l.Table.Th,{children:"Symbol"}),(0,o.jsx)(l.Table.Th,{children:"Atomic mass"})]})}),(0,o.jsx)(l.Table.Tbody,{children:n})]})},defaultExpanded:!1,code:`
import { useState } from 'react';
import { Table, Checkbox } from '@mantine/core';

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

function Demo() {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const rows = elements.map((element) => (
    <Table.Tr
      key={element.name}
      bg={selectedRows.includes(element.position) ? 'var(--mantine-color-blue-light)' : undefined}
    >
      <Table.Td>
        <Checkbox
          aria-label="Select row"
          checked={selectedRows.includes(element.position)}
          onChange={(event) =>
            setSelectedRows(
              event.currentTarget.checked
                ? [...selectedRows, element.position]
                : selectedRows.filter((position) => position !== element.position)
            )
          }
        />
      </Table.Td>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th />
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
`},x={caption:"Some elements from the periodic table",head:["Element position","Atomic mass","Symbol","Element name"],body:[[6,12.011,"C","Carbon"],[7,14.007,"N","Nitrogen"],[39,88.906,"Y","Yttrium"],[56,137.33,"Ba","Barium"],[58,140.12,"Ce","Cerium"]]},y={type:"code",component:function(){return(0,o.jsx)(l.Table,{data:x})},code:`
import { Table, TableData } from '@mantine/core';

const tableData: TableData = {
  caption: 'Some elements from periodic table',
  head: ['Element position', 'Atomic mass', 'Symbol', 'Element name'],
  body: [
    [6, 12.011, 'C', 'Carbon'],
    [7, 14.007, 'N', 'Nitrogen'],
    [39, 88.906, 'Y', 'Yttrium'],
    [56, 137.33, 'Ba', 'Barium'],
    [58, 140.12, 'Ce', 'Cerium'],
  ],
};

function Demo() {
  return <Table data={tableData} />;
}
`},v={type:"code",code:`
import { Table } from '@mantine/core';

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table stickyHeader stickyHeaderOffset={60}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
      <Table.Caption>Scroll page to see sticky thead</Table.Caption>
    </Table>
  );
}
`,component:function(){let e=n.map(e=>(0,o.jsxs)(l.Table.Tr,{children:[(0,o.jsx)(l.Table.Td,{children:e.position}),(0,o.jsx)(l.Table.Td,{children:e.name}),(0,o.jsx)(l.Table.Td,{children:e.symbol}),(0,o.jsx)(l.Table.Td,{children:e.mass})]},e.name));return(0,o.jsxs)(l.Table,{stickyHeader:!0,stickyHeaderOffset:"var(--docs-header-height)",children:[(0,o.jsx)(l.Table.Thead,{children:(0,o.jsxs)(l.Table.Tr,{children:[(0,o.jsx)(l.Table.Th,{children:"Element position"}),(0,o.jsx)(l.Table.Th,{children:"Element name"}),(0,o.jsx)(l.Table.Th,{children:"Symbol"}),(0,o.jsx)(l.Table.Th,{children:"Atomic mass"})]})}),(0,o.jsx)(l.Table.Tbody,{children:e}),(0,o.jsx)(l.Table.Caption,{children:"Scroll page to see sticky thead"})]})}},j={type:"code",code:`
import { Table } from '@mantine/core';

export function Demo() {
  return (
    <Table variant="vertical" layout="fixed" withTableBorder>
      <Table.Tbody>
        <Table.Tr>
          <Table.Th w={160}>Epic name</Table.Th>
          <Table.Td>7.x migration</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th>Status</Table.Th>
          <Table.Td>Open</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th>Total issues</Table.Th>
          <Table.Td>135</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th>Total story points</Table.Th>
          <Table.Td>874</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th>Last updated at</Table.Th>
          <Table.Td>September 26, 2024 17:41:26</Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  );
}
`,component:function(){return(0,o.jsx)(l.Table,{variant:"vertical",layout:"fixed",withTableBorder:!0,children:(0,o.jsxs)(l.Table.Tbody,{children:[(0,o.jsxs)(l.Table.Tr,{children:[(0,o.jsx)(l.Table.Th,{w:160,children:"Epic name"}),(0,o.jsx)(l.Table.Td,{children:"7.x migration"})]}),(0,o.jsxs)(l.Table.Tr,{children:[(0,o.jsx)(l.Table.Th,{children:"Status"}),(0,o.jsx)(l.Table.Td,{children:"Open"})]}),(0,o.jsxs)(l.Table.Tr,{children:[(0,o.jsx)(l.Table.Th,{children:"Total issues"}),(0,o.jsx)(l.Table.Td,{children:"135"})]}),(0,o.jsxs)(l.Table.Tr,{children:[(0,o.jsx)(l.Table.Th,{children:"Total story points"}),(0,o.jsx)(l.Table.Td,{children:"874"})]}),(0,o.jsxs)(l.Table.Tr,{children:[(0,o.jsx)(l.Table.Th,{children:"Last updated at"}),(0,o.jsx)(l.Table.Td,{children:"September 26, 2024 17:41:26"})]})]})})}};var g=e.i(943618);let S=[{product:"Apples",unitsSold:0x83fd3be2},{product:"Oranges",unitsSold:0x25314e33b},{product:"Bananas",unitsSold:0x499602d2},{product:"Pineapples",unitsSold:994881e4},{product:"Pears",unitsSold:0x250195167}],w={type:"configurator",component:function(e){let a=S.map(e=>(0,o.jsxs)(l.Table.Tr,{children:[(0,o.jsx)(l.Table.Td,{children:e.product}),(0,o.jsx)(l.Table.Td,{children:(0,o.jsx)(g.NumberFormatter,{value:e.unitsSold,thousandSeparator:!0})})]},e.product));return(0,o.jsxs)(l.Table,{...e,children:[(0,o.jsx)(l.Table.Thead,{children:(0,o.jsxs)(l.Table.Tr,{children:[(0,o.jsx)(l.Table.Th,{children:"Product"}),(0,o.jsx)(l.Table.Th,{children:"Units sold"})]})}),(0,o.jsx)(l.Table.Tbody,{children:a})]})},code:`
import { NumberFormatter, Table } from '@mantine/core';

const data = [
  { product: 'Apples', unitsSold: 2214411234 },
  { product: 'Oranges', unitsSold: 9983812411 },
  { product: 'Bananas', unitsSold: 1234567890 },
  { product: 'Pineapples', unitsSold: 9948810000 },
  { product: 'Pears', unitsSold: 9933771111 },
];

function Demo() {
  const rows = data.map((item) => (
    <Table.Tr key={item.product}>
      <Table.Td>{item.product}</Table.Td>
      <Table.Td>
        <NumberFormatter value={item.unitsSold} thousandSeparator />
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table{{props}}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Product</Table.Th>
          <Table.Th>Units sold</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
`,controls:[{type:"boolean",prop:"tabularNums",initialValue:!0,libraryValue:!1}]};var C=(0,a.__exportAll)({captions:()=>i,configurator:()=>s,data:()=>y,rowSelection:()=>f,scrollContainer:()=>T,scrollContainerMaxHeight:()=>d,scrollContainerNative:()=>c,scrollContainerNativeMaxHeight:()=>b,spacingConfigurator:()=>m,stickyHeader:()=>v,tabularNums:()=>w,usage:()=>r,vertical:()=>j});e.s(["TableDemos",0,C],214045)},273674,e=>{"use strict";var a=e.i(391398),n=e.i(38856),t=e.i(214045);e.i(603441);var l=e.i(62558);e.i(457450);var o=e.i(418026);let r=(0,l.Layout)(o.MDX_DATA.Table);function i(e){let l={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.useMDXComponents)(),...e.components},{Demo:o}=l;return o||function(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(l.p,{children:"Table data for all examples:"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-tsx",children:"const elements = [\n  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },\n  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },\n  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },\n  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },\n  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },\n];\n"})}),"\n",(0,a.jsx)(o,{data:t.TableDemos.usage}),"\n",(0,a.jsx)(l.h2,{id:"data-prop",children:"data prop"}),"\n",(0,a.jsxs)(l.p,{children:["You can use the ",(0,a.jsx)(l.code,{children:"data"})," prop to automatically generate table rows from an array of React nodes.\nThe ",(0,a.jsx)(l.code,{children:"data"})," prop accepts an object with the following properties:"]}),"\n",(0,a.jsxs)(l.ul,{children:["\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"head"})," – an array of React nodes (",(0,a.jsx)(l.code,{children:"React.ReactNode[]"}),") to render ",(0,a.jsx)(l.code,{children:"Table.Th"})," in ",(0,a.jsx)(l.code,{children:"Table.Thead"})]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"foot"})," – an array of React nodes (",(0,a.jsx)(l.code,{children:"React.ReactNode[]"}),") to render ",(0,a.jsx)(l.code,{children:"Table.Th"})," in ",(0,a.jsx)(l.code,{children:"Table.Tfoot"})]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"body"})," - an array of arrays of React nodes (",(0,a.jsx)(l.code,{children:"React.ReactNode[][]"}),") to render ",(0,a.jsx)(l.code,{children:"Table.Td"})," in ",(0,a.jsx)(l.code,{children:"Table.Tbody"})]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"caption"})," – a React node to render ",(0,a.jsx)(l.code,{children:"Table.Caption"})]}),"\n"]}),"\n",(0,a.jsx)(o,{data:t.TableDemos.data}),"\n",(0,a.jsx)(l.h2,{id:"sticky-header",children:"Sticky header"}),"\n",(0,a.jsxs)(l.p,{children:["Set ",(0,a.jsx)(l.code,{children:"stickyHeader"})," to make the table header sticky. To customize the top position of the header, use the ",(0,a.jsx)(l.code,{children:"stickyHeaderOffset"})," prop:\nit is useful when you have a fixed header in your application. For example, the Mantine documentation website has a fixed\nheader with 60px height:"]}),"\n",(0,a.jsx)(o,{data:t.TableDemos.stickyHeader}),"\n",(0,a.jsx)(l.h2,{id:"spacing",children:"Spacing"}),"\n",(0,a.jsxs)(l.p,{children:["To control spacing, use the ",(0,a.jsx)(l.code,{children:"horizontalSpacing"})," and ",(0,a.jsx)(l.code,{children:"verticalSpacing"})," props. Both props support spacing from ",(0,a.jsx)(l.code,{children:"theme.spacing"})," and any valid CSS value to set cell padding:"]}),"\n",(0,a.jsx)(o,{data:t.TableDemos.spacingConfigurator}),"\n",(0,a.jsx)(l.h2,{id:"caption-and-tfoot",children:"Caption and tfoot"}),"\n",(0,a.jsxs)(l.p,{children:["Table supports tfoot and caption elements. Set the ",(0,a.jsx)(l.code,{children:"captionSide"})," prop (top or bottom) to change the caption position."]}),"\n",(0,a.jsx)(o,{data:t.TableDemos.captions}),"\n",(0,a.jsx)(l.h2,{id:"striped-and-rows-hover",children:"Striped and rows hover"}),"\n",(0,a.jsx)(o,{data:t.TableDemos.configurator}),"\n",(0,a.jsx)(l.h2,{id:"scroll-container",children:"Scroll container"}),"\n",(0,a.jsxs)(l.p,{children:["To prevent viewport overflow, wrap ",(0,a.jsx)(l.code,{children:"Table"})," with ",(0,a.jsx)(l.code,{children:"Table.ScrollContainer"}),".\nThe component accepts a ",(0,a.jsx)(l.code,{children:"minWidth"})," prop which sets the minimum width below which the table will be scrollable."]}),"\n",(0,a.jsx)(o,{data:t.TableDemos.scrollContainer}),"\n",(0,a.jsxs)(l.p,{children:["By default, ",(0,a.jsx)(l.code,{children:"Table.ScrollContainer"})," uses ",(0,a.jsx)(l.a,{href:"/core/scroll-area",children:"ScrollArea"}),", you can change it\nto native scrollbars by setting ",(0,a.jsx)(l.code,{children:'type="native"'}),":"]}),"\n",(0,a.jsx)(o,{data:t.TableDemos.scrollContainerNative}),"\n",(0,a.jsxs)(l.p,{children:["You can also set the ",(0,a.jsx)(l.code,{children:"maxHeight"})," prop on ",(0,a.jsx)(l.code,{children:"Table.ScrollContainer"})," to limit the table height:"]}),"\n",(0,a.jsx)(o,{data:t.TableDemos.scrollContainerMaxHeight}),"\n",(0,a.jsx)(l.h2,{id:"vertical-variant",children:"Vertical variant"}),"\n",(0,a.jsxs)(l.p,{children:["Set ",(0,a.jsx)(l.code,{children:'variant="vertical"'})," to render the table with a vertical layout:"]}),"\n",(0,a.jsx)(o,{data:t.TableDemos.vertical}),"\n",(0,a.jsx)(l.h2,{id:"tabular-numbers",children:"Tabular numbers"}),"\n",(0,a.jsxs)(l.p,{children:["Set the ",(0,a.jsx)(l.code,{children:"tabularNums"})," prop to render numbers in tabular style. It sets\n",(0,a.jsx)(l.code,{children:"font-variant-numeric: tabular-nums"})," which makes numbers have equal width.\nThis is useful when you have columns with numbers and you want them to be aligned:"]}),"\n",(0,a.jsx)(o,{data:t.TableDemos.tabularNums}),"\n",(0,a.jsx)(l.h2,{id:"example-table-with-row-selection",children:"Example: Table with row selection"}),"\n",(0,a.jsx)(o,{data:t.TableDemos.rowSelection})]})}e.s(["default",0,function(e={}){return(0,a.jsx)(r,{...e,children:(0,a.jsx)(i,{...e})})}])},335815,(e,a,n)=>{let t="/core/table";(window.__NEXT_P=window.__NEXT_P||[]).push([t,()=>e.r(273674)]),a.hot&&a.hot.dispose(function(){window.__NEXT_P.push([t])})},648761,e=>{e.v(a=>Promise.all(["static/chunks/22379_btw709h.js"].map(a=>e.l(a))).then(()=>a(493594)))},828805,e=>{e.v(a=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(a=>e.l(a))).then(()=>a(879466)))}]);