(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,n)=>{let l={};for(var i in e)t(l,i,{get:e[i],enumerable:!0});return n||t(l,Symbol.toStringTag,{value:"Module"}),l}])},728649,e=>{"use strict";var t,n,l,i,s,a=e.i(191788);function o(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>t.indexOf(l)&&(n[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,l=Object.getOwnPropertySymbols(e);i<l.length;i++)0>t.indexOf(l[i])&&Object.prototype.propertyIsEnumerable.call(e,l[i])&&(n[l[i]]=e[l[i]]);return n}function r(){}function d(e){return!!(e||"").match(/\d/)}function h(e){return null==e}function c(e){return h(e)||"number"==typeof e&&isNaN(e)||"number"==typeof e&&!isFinite(e)}function m(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function u(e){var t=(0,a.useRef)(e);return t.current=e,(0,a.useRef)(function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];return t.current.apply(t,e)}).current}function T(e,t){void 0===t&&(t=!0);var n="-"===e[0],l=n&&t,i=(e=e.replace("-","")).split(".");return{beforeDecimal:i[0],afterDecimal:i[1]||"",hasNegation:n,addNegation:l}}function b(e,t,n){for(var l="",i=n?"0":"",s=0;s<=t-1;s++)l+=e[s]||i;return l}function p(e,t){return Array(t+1).join(e)}function f(e){var t=e+"",n="-"===t[0]?"-":"";n&&(t=t.substring(1));var l=t.split(/[eE]/g),i=l[0],s=l[1];if(!(s=Number(s)))return n+i;i=i.replace(".","");var a=1+s,o=i.length;return a<0?i="0."+p("0",Math.abs(a))+i:a>=o?i+=p("0",a-o):i=(i.substring(0,a)||"0")+"."+i.substring(a),n+i}function g(e,t,n){if(-1!==["","-"].indexOf(e))return e;var l=(-1!==e.indexOf(".")||n)&&t,i=T(e),s=i.beforeDecimal,a=i.afterDecimal,o=i.hasNegation,r=parseFloat("0."+(a||"0")),d=(a.length<=t?"0."+a:r.toFixed(t)).split("."),h=s;return s&&Number(d[0])&&(h=s.split("").reverse().reduce(function(e,t,n){return e.length>n?(Number(e[0])+Number(t)).toString()+e.substring(1,e.length):t+e},d[0])),(o?"-":"")+h+(l?".":"")+b(d[1]||"",t,n)}function x(e,t){if(e.value=e.value,null!==e){if(e.createTextRange){var n=e.createTextRange();return n.move("character",t),n.select(),!0}return e.selectionStart||0===e.selectionStart?(e.focus(),e.setSelectionRange(t,t),!0):(e.focus(),!1)}}(t=s||(s={})).event="event",t.props="prop";var v=(n=function(e,t){for(var n=0,l=0,i=e.length,s=t.length;e[n]===t[n]&&n<i;)n++;for(;e[i-1-l]===t[s-1-l]&&s-l>n&&i-l>n;)l++;return{from:{start:n,end:i-l},to:{start:n,end:s-l}}},i=void 0,function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return l&&e.length===l.length&&e.every(function(e,t){return e===l[t]})?i:(l=e,i=n.apply(void 0,e))}),y=function(e,t){var n=Math.min(e.selectionStart,t);return{from:{start:n,end:e.selectionEnd},to:{start:n,end:t}}};function S(e){return Math.max(e.selectionStart,e.selectionEnd)}function j(e){var t=e.currentValue,n=e.formattedValue,l=e.currentValueIndex,i=e.formattedValueIndex;return t[l]===n[i]}function w(e,t,n,l){var i=e.length;if(t=Math.min(Math.max(t,0),i),"left"===l){for(;t>=0&&!n[t];)t--;-1===t&&(t=n.indexOf(!0))}else{for(;t<=i&&!n[t];)t++;t>i&&(t=n.lastIndexOf(!0))}return -1===t&&(t=i),t}function C(e){for(var t=Array.from({length:e.length+1}).map(function(){return!0}),n=0,l=t.length;n<l;n++)t[n]=!!(d(e[n])||d(e[n-1]));return t}function E(e,t,n,l,i,o){void 0===o&&(o=r);var d=u(function(e,t){var n,s;return c(e)?(s="",n=""):n="number"==typeof e||t?l(s="number"==typeof e?f(e):e):l(s=i(e,void 0)),{formattedValue:n,numAsString:s}}),m=(0,a.useState)(function(){return d(h(e)?t:e,n)}),T=m[0],b=m[1],p=u(function(e,t){e.formattedValue!==T.formattedValue&&b({formattedValue:e.formattedValue,numAsString:e.value}),o(e,t)}),g=e,x=n;h(e)&&(g=T.numAsString,x=!0);var v=d(g,x);return(0,a.useMemo)(function(){b(v)},[v.formattedValue]),(0,a.useEffect)(function(){if(!h(t)&&h(e)&&""!==T.formattedValue){var n=parseFloat(T.numAsString);p({formattedValue:T.formattedValue,value:T.numAsString,floatValue:isNaN(n)?void 0:n},{event:void 0,source:s.props})}},[]),[T,p]}function O(e){return e.replace(/[^0-9]/g,"")}function A(e){return e}function I(e){var t=e.type;void 0===t&&(t="text");var n=e.displayType;void 0===n&&(n="input");var l=e.customInput,i=e.renderText,h=e.getInputRef,c=e.format;void 0===c&&(c=A);var m=e.removeFormatting;void 0===m&&(m=O);var u=e.defaultValue,T=e.valueIsNumericString,b=e.onValueChange,p=e.isAllowed,f=e.onChange;void 0===f&&(f=r);var g=e.onKeyDown;void 0===g&&(g=r);var I=e.onMouseUp;void 0===I&&(I=r);var M=e.onFocus;void 0===M&&(M=r);var D=e.onBlur;void 0===D&&(D=r);var z=e.value,N=e.getCaretBoundary;void 0===N&&(N=C);var V=e.isValidInputCharacter;void 0===V&&(V=d);var R=e.isCharacterSame,k=o(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter","isCharacterSame"]),_=E(z,u,!!T,c,m,b),F=_[0],B=F.formattedValue,W=F.numAsString,P=_[1],H=(0,a.useRef)(),L=(0,a.useRef)({formattedValue:B,numAsString:W}),K=function(e,t){L.current={formattedValue:e.formattedValue,numAsString:e.value},P(e,t)},Y=(0,a.useState)(!1),J=Y[0],G=Y[1],U=(0,a.useRef)(null),$=(0,a.useRef)({setCaretTimeout:null,focusTimeout:null});(0,a.useEffect)(function(){return G(!0),function(){clearTimeout($.current.setCaretTimeout),clearTimeout($.current.focusTimeout)}},[]);var X=c,Z=function(e,t){var n=parseFloat(t);return{formattedValue:e,value:t,floatValue:isNaN(n)?void 0:n}},q=function(e,t,n){(0!==e.selectionStart||e.selectionEnd!==e.value.length)&&(x(e,t),$.current.setCaretTimeout=setTimeout(function(){e.value===n&&e.selectionStart!==t&&x(e,t)},0))},Q=function(e,t,n){return w(e,t,N(e),n)},ee=function(e,t,n){var l=N(t),i=function(e,t,n,l,i,s,a){void 0===a&&(a=j);var o=i.findIndex(function(e){return e}),r=e.slice(0,o);t||n.startsWith(r)||(t=r,n=r+n,l+=r.length);for(var d=n.length,h=e.length,c={},m=Array(d),u=0;u<d;u++){m[u]=-1;for(var T=0;T<h;T++)if(a({currentValue:n,lastValue:t,formattedValue:e,currentValueIndex:u,formattedValueIndex:T})&&!0!==c[T]){m[u]=T,c[T]=!0;break}}for(var b=l;b<d&&(-1===m[b]||!s(n[b]));)b++;var p=b===d||-1===m[b]?h:m[b];for(b=l-1;b>0&&-1===m[b];)b--;var f=-1===b||-1===m[b]?0:m[b]+1;return f>p?p:l-f<p-l?f:p}(t,B,e,n,l,V,R);return w(t,i,l)},et=function(e){var t,n=e.formattedValue;void 0===n&&(n="");var l=e.input,i=e.source,s=e.event,a=e.numAsString;if(l){var o=e.inputValue||l.value,r=S(l);l.value=n,void 0!==(t=ee(o,n,r))&&q(l,t,n)}n!==B&&K(Z(n,a),{event:s,source:i})};(0,a.useEffect)(function(){var e=L.current,t=e.formattedValue,n=e.numAsString;(B!==t||W!==n)&&K(Z(B,W),{event:void 0,source:s.props})},[B,W]);var en=U.current?S(U.current):void 0;("u">typeof window?a.useLayoutEffect:a.useEffect)(function(){var e=U.current;if(B!==L.current.formattedValue&&e){var t=ee(L.current.formattedValue,B,en);e.value=B,q(e,t,B)}},[B]);var el=function(e,t,n){var l=t.target,i=Object.assign(Object.assign({},H.current?y(H.current,l.selectionEnd):v(B,e)),{lastValue:B}),s=m(e,i),a=X(s);if(s=m(a,void 0),p&&!p(Z(a,s))){var o=t.target,r=ee(e,B,S(o));return o.value=B,q(o,r,B),!1}return et({formattedValue:a,numAsString:s,inputValue:e,event:t,source:n,input:t.target}),!0},ei=function(e,t){void 0===t&&(t=0),H.current={selectionStart:e.selectionStart,selectionEnd:e.selectionEnd+t}},es=Object.assign({inputMode:J&&"u">typeof navigator&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))?"numeric":void 0},k,{type:t,value:B,onChange:function(e){el(e.target.value,e,s.event)&&f(e),H.current=void 0},onKeyDown:function(e){var t,n=e.target,l=e.key,i=n.selectionStart,s=n.selectionEnd,a=n.value;void 0===a&&(a=""),"ArrowLeft"===l||"Backspace"===l?t=Math.max(i-1,0):"ArrowRight"===l?t=Math.min(i+1,a.length):"Delete"===l&&(t=i);var o=0;"Delete"===l&&i===s&&(o=1);var r="ArrowLeft"===l||"ArrowRight"===l;if(void 0===t||i!==s&&!r){g(e),ei(n,o);return}var d=t;r?(d=Q(a,t,"ArrowLeft"===l?"left":"right"))!==t&&e.preventDefault():"Delete"!==l||V(a[t])?"Backspace"!==l||V(a[t])||(d=Q(a,t,"left")):d=Q(a,t,"right"),d!==t&&q(n,d,a),g(e),ei(n,o)},onMouseUp:function(e){var t=e.target,n=function(){var e=t.selectionStart,n=t.selectionEnd,l=t.value;if(void 0===l&&(l=""),e===n){var i=Q(l,e);i!==e&&q(t,i,l)}};n(),requestAnimationFrame(function(){n()}),I(e),ei(t)},onFocus:function(e){e.persist&&e.persist();var t=e.target,n=e.currentTarget;U.current=t,$.current.focusTimeout=setTimeout(function(){var l=t.selectionStart,i=t.selectionEnd,s=t.value;void 0===s&&(s="");var a=Q(s,l);a!==l&&(0!==l||i!==s.length)&&q(t,a,s),M(Object.assign(Object.assign({},e),{currentTarget:n}))},0)},onBlur:function(e){U.current=null,clearTimeout($.current.focusTimeout),clearTimeout($.current.setCaretTimeout),D(e)}});return"text"===n?i?a.default.createElement(a.default.Fragment,null,i(B,k)||null):a.default.createElement("span",Object.assign({},k,{ref:h}),B):l?a.default.createElement(l,Object.assign({},es,{ref:h})):a.default.createElement("input",Object.assign({},es,{ref:h}))}function M(e,t){var n,l,i,s=t.decimalScale,a=t.fixedDecimalScale,o=t.prefix;void 0===o&&(o="");var r=t.suffix;void 0===r&&(r="");var d=t.allowNegative,h=t.thousandsGroupStyle;if(void 0===h&&(h="thousand"),""===e||"-"===e)return e;var c=D(t),m=c.thousandSeparator,u=c.decimalSeparator,p=0!==s&&-1!==e.indexOf(".")||s&&a,f=T(e,d),g=f.beforeDecimal,x=f.afterDecimal,v=f.addNegation;return void 0!==s&&(x=b(x,s,!!a)),m&&(n=g,l=function(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;default:return/(\d)(?=(\d{3})+(?!\d))/g}}(h),i=-1===(i=n.search(/[1-9]/))?n.length:i,g=n.substring(0,i)+n.substring(i,n.length).replace(l,"$1"+m)),o&&(g=o+g),r&&(x+=r),v&&(g="-"+g),e=g+(p&&u||"")+x}function D(e){var t=e.decimalSeparator;void 0===t&&(t=".");var n=e.thousandSeparator,l=e.allowedDecimalSeparators;return!0===n&&(n=","),l||(l=[t,"."]),{decimalSeparator:t,thousandSeparator:n,allowedDecimalSeparators:l}}e.s(["NumericFormat",0,function(e){var t,n,l,i,u,b,p,y,S,j,w,C,O,A,z,N,V,R,k,_,F,B,W,P,H,L,K,Y,J,G=((t=function(e){var t=D(e),n=t.thousandSeparator,l=t.decimalSeparator,i=e.prefix;void 0===i&&(i="");var s=e.allowNegative;if(void 0===s&&(s=!0),n===l)throw Error("\n        Decimal separator can't be same as thousand separator.\n        thousandSeparator: "+n+' (thousandSeparator = {true} is same as thousandSeparator = ",")\n        decimalSeparator: '+l+" (default value for decimalSeparator is .)\n     ");return i.startsWith("-")&&s&&(console.error("\n      Prefix can't start with '-' when allowNegative is true.\n      prefix: "+i+"\n      allowNegative: "+s+"\n    "),s=!1),Object.assign(Object.assign({},e),{allowNegative:s})}(t=e)).decimalSeparator,t.allowedDecimalSeparators,t.thousandsGroupStyle,n=t.suffix,l=t.allowNegative,i=t.allowLeadingZeros,void 0===(u=t.onKeyDown)&&(u=r),void 0===(b=t.onBlur)&&(b=r),p=t.thousandSeparator,y=t.decimalScale,S=t.fixedDecimalScale,void 0===(j=t.prefix)&&(j=""),w=t.defaultValue,C=t.value,O=t.valueIsNumericString,A=t.onValueChange,z=o(t,["decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","suffix","allowNegative","allowLeadingZeros","onKeyDown","onBlur","thousandSeparator","decimalScale","fixedDecimalScale","prefix","defaultValue","value","valueIsNumericString","onValueChange"]),V=(N=D(t)).decimalSeparator,R=N.allowedDecimalSeparators,k=function(e){return M(e,t)},_=function(e,n){return function(e,t,n){void 0===t&&(t={from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""});var l,i,s,a,o=n.allowNegative,r=n.prefix;void 0===r&&(r="");var h=n.suffix;void 0===h&&(h="");var c=n.decimalScale,u=t.from,b=t.to,p=b.start,f=b.end,g=D(n),x=g.allowedDecimalSeparators,v=g.decimalSeparator,y=e[f]===v;if(d(e)&&(e===r||e===h)&&""===t.lastValue)return e;if(f-p==1&&-1!==x.indexOf(e[p])){var S=0===c?"":v;e=e.substring(0,p)+S+e.substring(p+1,e.length)}var j=function(e,t,n){var l=!1,i=!1;r.startsWith("-")?l=!1:e.startsWith("--")?(l=!1,i=!0):h.startsWith("-")&&e.length===h.length?l=!1:"-"===e[0]&&(l=!0);var s=+!!l;return i&&(s=2),s&&(e=e.substring(s),t-=s,n-=s),{value:e,start:t,end:n,hasNegation:l}},w=j(e,p,f),C=w.hasNegation;e=w.value,p=w.start,f=w.end;var E=j(t.lastValue,u.start,u.end),O=E.start,A=E.end,I=E.value,M=e.substring(p,f);e.length&&I.length&&(O>I.length-h.length||A<r.length)&&!(M&&h.startsWith(M))&&(e=I);var z=0;e.startsWith(r)?z+=r.length:p<r.length&&(z=p),e=e.substring(z),f-=z;var N=e.length,V=e.length-h.length;e.endsWith(h)?N=V:f>V?N=f:f>e.length-h.length&&(N=f),e=e.substring(0,N),void 0===(l=C?"-"+e:e)&&(l=""),i=RegExp("(-)(.)*(-)"),s=/(-)/.test(l),a=i.test(l),l=l.replace(/-/g,""),s&&!a&&o&&(l="-"+l);var R=(e=((e=l).match(RegExp("(^-)|[0-9]|"+m(v),"g"))||[]).join("")).indexOf(v),k=T(e=e.replace(RegExp(m(v),"g"),function(e,t){return t===R?".":""}),o),_=k.beforeDecimal,F=k.afterDecimal,B=k.addNegation;return b.end-b.start<u.end-u.start&&""===_&&y&&!parseFloat(F)&&(e=B?"-":""),e}(e,n,t)},F=h(C)?w:C,W=null!=O?O:(B=j,""===F||!(null==B?void 0:B.match(/\d/))&&!(null==n?void 0:n.match(/\d/))&&"string"==typeof F&&!isNaN(Number(F))),h(C)?h(w)||(W=W||"number"==typeof w):W=W||"number"==typeof C,K=(L=(H=E((P=function(e){return c(e)?e:("number"==typeof e&&(e=f(e)),W&&"number"==typeof y)?g(e,y,!!S):e})(C),P(w),!!W,k,_,A))[0]).numAsString,Y=L.formattedValue,J=H[1],Object.assign(Object.assign({},z),{value:Y,valueIsNumericString:!1,isValidInputCharacter:function(e){return e===V||d(e)},isCharacterSame:function(e){var t=e.currentValue,n=e.lastValue,l=e.formattedValue,i=e.currentValueIndex,s=e.formattedValueIndex,a=t[i],o=l[s],r=v(n,t).to,d=function(e){return _(e).indexOf(".")+j.length};return!(0===C&&S&&y&&t[r.start]===V&&d(t)<i&&d(l)>s)&&(!!(i>=r.start&&i<r.end&&R&&R.includes(a))&&o===V||a===o)},onValueChange:J,format:k,removeFormatting:_,getCaretBoundary:function(e){var n,l,i,s,a,o;return void 0===(l=(n=t).prefix)&&(l=""),void 0===(i=n.suffix)&&(i=""),s=Array.from({length:e.length+1}).map(function(){return!0}),a="-"===e[0],s.fill(!1,0,Math.min(l.length+ +!!a,e.length)),o=e.length,s.fill(!1,o-i.length+1,o+1),s},onKeyDown:function(e){var t=e.target,n=e.key,i=t.selectionStart,s=t.selectionEnd,a=t.value;if(void 0===a&&(a=""),("Backspace"===n||"Delete"===n)&&s<j.length&&"-"!==a)return void e.preventDefault();if(i!==s)return void u(e);"Backspace"===n&&"-"===a[0]&&i===j.length+1&&l&&x(t,1),y&&S&&("Backspace"===n&&a[i-1]===V?(x(t,i-1),e.preventDefault()):"Delete"===n&&a[i]===V&&e.preventDefault()),(null==R?void 0:R.includes(n))&&a[i]===V&&x(t,i+1);var o=!0===p?",":p;"Backspace"===n&&a[i-1]===o&&x(t,i-1),"Delete"===n&&a[i]===o&&x(t,i+1),u(e)},onBlur:function(e){var n=K;n.match(/\d/g)||(n=""),i||(n=function(e){if(!e)return e;var t="-"===e[0];t&&(e=e.substring(1,e.length));var n=e.split("."),l=n[0].replace(/^0+/,"")||"0",i=n[1]||"";return(t?"-":"")+l+(i?"."+i:"")}(n)),S&&y&&(n=g(n,y,S)),n!==K&&J({formattedValue:M(n,t),value:n,floatValue:parseFloat(n)},{event:e,source:s.event}),b(e)}}));return a.default.createElement(I,Object.assign({},G))}])},463044,e=>{"use strict";let t;var n=e.i(191788),l=e.i(730943);function i(e,t,n){let l,i=n.initialDeps??[],s=!0;function a(){let a=e();return(a.length!==i.length||a.some((e,t)=>i[t]!==e))&&(i=a,l=t(...a),(null==n?void 0:n.onChange)&&!(s&&n.skipInitialOnChange)&&n.onChange(l),s=!1),l}return a.updateDeps=e=>{i=e},a}function s(e,t){if(void 0!==e)return e;throw Error(`Unexpected undefined${t?`: ${t}`:""}`)}e.i(350461);let a=()=>{if(void 0!==t)return t;if("u"<typeof navigator)return t=!1;if(/iP(hone|od|ad)/.test(navigator.userAgent))return t=!0;let e=navigator.maxTouchPoints;return t="MacIntel"===navigator.platform&&void 0!==e&&e>0},o=e=>{let{offsetWidth:t,offsetHeight:n}=e;return{width:t,height:n}},r=e=>e,d=e=>{let t=Math.max(e.startIndex-e.overscan,0),n=Math.min(e.endIndex+e.overscan,e.count-1)-t+1,l=Array(n);for(let e=0;e<n;e++)l[e]=t+e;return l},h=(e,t)=>{let n=e.scrollElement;if(!n)return;let l=e.targetWindow;if(!l)return;let i=e=>{let{width:n,height:l}=e;t({width:Math.round(n),height:Math.round(l)})};if(i(o(n)),!l.ResizeObserver)return()=>{};let s=new l.ResizeObserver(t=>{let l=()=>{let e=t[0];if(null==e?void 0:e.borderBoxSize){let t=e.borderBoxSize[0];if(t)return void i({width:t.inlineSize,height:t.blockSize})}i(o(n))};e.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(l):l()});return s.observe(n,{box:"border-box"}),()=>{s.unobserve(n)}},c={passive:!0},m="u"<typeof window||"onscrollend"in window,u=(e,t)=>((e,t,n)=>{var l,i;let s,a=e.scrollElement;if(!a)return;let o=e.targetWindow;if(!o)return;let r=e.options.useScrollendEvent&&m,d=0,h=r?null:(l=()=>t(d,!1),i=e.options.isScrollingResetDelay,function(...e){o.clearTimeout(s),s=o.setTimeout(()=>l.apply(this,e),i)}),u=e=>()=>{d=n(a),null==h||h(),t(d,e)},T=u(!0),b=u(!1);return a.addEventListener("scroll",T,c),r&&a.addEventListener("scrollend",b,c),()=>{a.removeEventListener("scroll",T),r&&a.removeEventListener("scrollend",b)}})(e,t,t=>{let{horizontal:n,isRtl:l}=e.options;return n?t.scrollLeft*(l&&-1||1):t.scrollTop}),T=(e,t,n)=>{if(n.options.useCachedMeasurements){let t=n.indexFromElement(e),l=n.options.getItemKey(t);return n.itemSizeCache.get(l)??n.options.estimateSize(t)}if(null==t?void 0:t.borderBoxSize){let e=t.borderBoxSize[0];if(e)return Math.round(e[n.options.horizontal?"inlineSize":"blockSize"])}if(!t){let t=n.indexFromElement(e),l=n.options.getItemKey(t),i=n.itemSizeCache.get(l);if(void 0!==i)return i}return e[n.options.horizontal?"offsetWidth":"offsetHeight"]},b=(e,{adjustments:t=0,behavior:n},l)=>{var i,s;null==(s=null==(i=l.scrollElement)?void 0:i.scrollTo)||s.call(i,{[l.options.horizontal?"left":"top"]:e+t,behavior:n})};class p{constructor(e){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollState=null,this.measurementsCache=[],this._flatMeasurements=null,this.itemSizeCache=new Map,this.itemSizeCacheVersion=0,this.laneAssignments=new Map,this.pendingMin=null,this.prevLanes=void 0,this.lanesChangedFlag=!1,this.lanesSettling=!1,this.pendingScrollAnchor=null,this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this._iosDeferredAdjustment=0,this._iosTouching=!1,this._iosJustTouchEnded=!1,this._iosTouchEndTimerId=null,this._intendedScrollOffset=null,this.elementsCache=new Map,this.now=()=>{var e,t,n;return(null==(n=null==(t=null==(e=this.targetWindow)?void 0:e.performance)?void 0:t.now)?void 0:n.call(t))??Date.now()},this.observer=(()=>{let e=null,t=()=>e||(this.targetWindow&&this.targetWindow.ResizeObserver?e=new this.targetWindow.ResizeObserver(e=>{e.forEach(e=>{let t=()=>{let t=e.target,n=this.indexFromElement(t);if(!t.isConnected){for(let[e,n]of(this.observer.unobserve(t),this.elementsCache))if(n===t){this.elementsCache.delete(e);break}return}this.shouldMeasureDuringScroll(n)&&this.resizeItem(n,this.options.measureElement(t,e,this))};this.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(t):t()})}):null);return{disconnect:()=>{var n;null==(n=t())||n.disconnect(),e=null},observe:e=>{var n;return null==(n=t())?void 0:n.observe(e,{box:"border-box"})},unobserve:e=>{var n;return null==(n=t())?void 0:n.unobserve(e)}}})(),this.range=null,this.setOptions=e=>{var t,n;let l={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:r,rangeExtractor:d,onChange:()=>{},measureElement:T,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,anchorTo:"start",followOnAppend:!1,scrollEndThreshold:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,useScrollendEvent:!1,useAnimationFrameWithResizeObserver:!1,laneAssignmentMode:"estimate",useCachedMeasurements:!1};for(let t in e){let n=e[t];void 0!==n&&(l[t]=n)}let i=this.options,s=null,a=null,o=!1;if(void 0!==i&&i.enabled&&l.enabled&&"end"===l.anchorTo&&null!==this.scrollElement){let e=i.count,r=l.count,d=this.getMeasurements(),h=e>0?(null==(t=d[0])?void 0:t.key)??i.getItemKey(0):null,c=e>0?(null==(n=d[e-1])?void 0:n.key)??i.getItemKey(e-1):null;if(r!==e||e>0&&r>0&&(l.getItemKey(0)!==h||l.getItemKey(r-1)!==c)){o=!0;let t=e>0?this.getVirtualItemForOffset(this.getScrollOffset())??d[0]:null;t&&(s=[t.key,this.getScrollOffset()-t.start]);let n=!0===l.followOnAppend?"auto":l.followOnAppend||null;n&&r>e&&this.isAtEnd(i.scrollEndThreshold)&&(0===e||l.getItemKey(r-1)!==c)&&(a=n)}}this.options=l,o&&(this.pendingMin=0,this.itemSizeCacheVersion++);let h=!1,c=0;if(s&&null!==this.scrollOffset){let[e,t]=s,n=this.getMeasurements(),{count:l,getItemKey:i}=this.options,a=0;for(;a<l&&i(a)!==e;)a++;if(a<l){let e=n[a];if(e){let n=e.start+t;n!==this.scrollOffset&&(c=n-this.scrollOffset,this.scrollOffset=n,h=!0)}}}(h||a)&&(this.pendingScrollAnchor=[h?s[0]:null,h?s[1]:0,a,c])},this.notify=e=>{var t,n;null==(n=(t=this.options).onChange)||n.call(t,this,e)},this.maybeNotify=i(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),e=>{this.notify(e)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(e=>e()),this.unsubs=[],this.observer.disconnect(),null!=this.rafId&&this.targetWindow&&(this.targetWindow.cancelAnimationFrame(this.rafId),this.rafId=null),this.scrollState=null,this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var e;let t=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==t){if(this.cleanup(),!t)return void this.maybeNotify();if(this.scrollElement=t,this.scrollElement&&"ownerDocument"in this.scrollElement?this.targetWindow=this.scrollElement.ownerDocument.defaultView:this.targetWindow=(null==(e=this.scrollElement)?void 0:e.window)??null,this.elementsCache.forEach(e=>{this.observer.observe(e)}),this.unsubs.push(this.options.observeElementRect(this,e=>{this.scrollRect=e,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(e,t)=>{if(t&&null===this._intendedScrollOffset&&e===this.scrollOffset)return;null!==this._intendedScrollOffset&&1.5>Math.abs(e-this._intendedScrollOffset)&&(e=this._intendedScrollOffset),this._intendedScrollOffset=null,this.scrollAdjustments=0;let n=this.getScrollOffset();this.scrollDirection=t?n===e?this.scrollDirection:n<e?"forward":"backward":null,this.scrollOffset=e,this.isScrolling=t,this._flushIosDeferredIfReady(),this.scrollState&&this.scheduleScrollReconcile(),this.maybeNotify()})),"addEventListener"in this.scrollElement){let e=this.scrollElement,t=()=>{this._iosTouching=!0,this._iosJustTouchEnded=!1,null!==this._iosTouchEndTimerId&&null!=this.targetWindow&&(this.targetWindow.clearTimeout(this._iosTouchEndTimerId),this._iosTouchEndTimerId=null)},n=()=>{this._iosTouching=!1,a()&&null!=this.targetWindow&&(this._iosJustTouchEnded=!0,this._iosTouchEndTimerId=this.targetWindow.setTimeout(()=>{this._iosJustTouchEnded=!1,this._iosTouchEndTimerId=null,this._flushIosDeferredIfReady()},150))};e.addEventListener("touchstart",t,c),e.addEventListener("touchend",n,c),this.unsubs.push(()=>{e.removeEventListener("touchstart",t),e.removeEventListener("touchend",n),null!==this._iosTouchEndTimerId&&null!=this.targetWindow&&(this.targetWindow.clearTimeout(this._iosTouchEndTimerId),this._iosTouchEndTimerId=null)})}this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0})}let n=this.pendingScrollAnchor;if(this.pendingScrollAnchor=null,n&&this.scrollElement&&this.options.enabled){let[e,t,l,i]=n;null===e||l||(a()&&(this.isScrolling||this._iosTouching||this._iosJustTouchEnded)?0!==i&&(this._iosDeferredAdjustment+=i):this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0})),l&&this.scrollToEnd({behavior:l})}},this._flushIosDeferredIfReady=()=>{if(0===this._iosDeferredAdjustment||this.isScrolling||this._iosTouching||this._iosJustTouchEnded)return;let e=this.getScrollOffset(),t=this.getMaxScrollOffset();if(e<0||e>t)return;let n=this._iosDeferredAdjustment;this._iosDeferredAdjustment=0,this._scrollToOffset(e,{adjustments:this.scrollAdjustments+=n,behavior:void 0})},this.rafId=null,this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??("function"==typeof this.options.initialOffset?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(e,t)=>{let n=new Map,l=new Map;for(let i=t-1;i>=0;i--){let t=e[i];if(n.has(t.lane))continue;let s=l.get(t.lane);if(null==s||t.end>s.end?l.set(t.lane,t):t.end<s.end&&n.set(t.lane,!0),n.size===this.options.lanes)break}return l.size===this.options.lanes?Array.from(l.values()).sort((e,t)=>e.end===t.end?e.index-t.index:e.end-t.end)[0]:void 0},this.getMeasurementOptions=i(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled,this.options.lanes,this.options.laneAssignmentMode],(e,t,n,l,i,s,a)=>(void 0!==this.prevLanes&&this.prevLanes!==s&&(this.lanesChangedFlag=!0),this.prevLanes=s,this.pendingMin=null,{count:e,paddingStart:t,scrollMargin:n,getItemKey:l,enabled:i,lanes:s,laneAssignmentMode:a}),{key:!1}),this.getMeasurements=i(()=>[this.getMeasurementOptions(),this.itemSizeCacheVersion],({count:e,paddingStart:t,scrollMargin:n,getItemKey:l,enabled:i,lanes:s,laneAssignmentMode:a},o)=>{let r=this.itemSizeCache;if(!i)return this.measurementsCache=[],this.itemSizeCache.clear(),this.laneAssignments.clear(),[];if(this.laneAssignments.size>e)for(let t of this.laneAssignments.keys())t>=e&&this.laneAssignments.delete(t);this.lanesChangedFlag&&(this.lanesChangedFlag=!1,this.lanesSettling=!0,this.measurementsCache=[],this.itemSizeCache.clear(),this.laneAssignments.clear(),this.pendingMin=null),0!==this.measurementsCache.length||this.lanesSettling||(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(e=>{this.itemSizeCache.set(e.key,e.size)}));let d=this.lanesSettling?0:this.pendingMin??0;if(this.pendingMin=null,this.lanesSettling&&this.measurementsCache.length===e&&(this.lanesSettling=!1),1===s){var h;let i,s=this.options.gap,a=2*e,o=this._flatMeasurements;if(!o||o.length<a){let e=new Float64Array(a);o&&d>0&&e.set(o.subarray(0,2*d)),o=e,this._flatMeasurements=o}if(0===d)i=t+n;else{let e=d-1;i=o[2*e]+o[2*e+1]+s}for(let t=d;t<e;t++){let e=l(t),n=r.get(e),a="number"==typeof n?n:this.options.estimateSize(t);o[2*t]=i,o[2*t+1]=a,i+=a+s}let c=(h=o,new Proxy(Array(e),{get(t,n,i){if("string"==typeof n){let i=n.charCodeAt(0);if(i>=48&&i<=57){let i=+n;if(Number.isInteger(i)&&i>=0&&i<e){let e=t[i];if(!e){let n=h[2*i];e=t[i]={index:i,key:l(i),start:n,size:h[2*i+1],end:n+h[2*i+1],lane:0}}return e}}if("length"===n)return e}return Reflect.get(t,n,i)}}));return this.measurementsCache=c,c}let c=this.measurementsCache.slice(0,d),m=Array(s).fill(void 0);for(let e=0;e<d;e++){let t=c[e];t&&(m[t.lane]=e)}for(let i=d;i<e;i++){let e,s,o=l(i),d=this.laneAssignments.get(i),h="estimate"===a||r.has(o);if(void 0!==d&&this.options.lanes>1){let l=m[e=d],i=void 0!==l?c[l]:void 0;s=i?i.end+this.options.gap:t+n}else{let l=1===this.options.lanes?c[i-1]:this.getFurthestMeasurement(c,i);s=l?l.end+this.options.gap:t+n,e=l?l.lane:i%this.options.lanes,this.options.lanes>1&&h&&this.laneAssignments.set(i,e)}let u=r.get(o),T="number"==typeof u?u:this.options.estimateSize(i),b=s+T;c[i]={index:i,start:s,size:T,end:b,key:o,lane:e},m[e]=i}return this.measurementsCache=c,c},{key:!1,debug:()=>this.options.debug}),this.calculateRange=i(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset(),this.options.lanes],(e,t,n,l)=>0===e.length||0===t?(this.range=null,null):(this.range=function(e,t,n,l,i){let s=e.length-1;if(e.length<=l)return{startIndex:0,endIndex:s};if(1===l&&null!==i){let e=function(e,t,n){let l=0;for(;l<=t;){let i=(l+t)/2|0,s=e[2*i];if(s<n)l=i+1;else{if(!(s>n))return i;t=i-1}}return l>0?l-1:0}(i,s,n),l=e,a=n+t;for(;l<s&&i[2*l]+i[2*l+1]<a;)l++;return{startIndex:e,endIndex:l}}let a=f(0,s,t=>e[t].start,n),o=a;if(1===l)for(;o<s&&e[o].end<n+t;)o++;else if(l>1){let i=Array(l).fill(0);for(;o<s&&i.some(e=>e<n+t);){let t=e[o];i[t.lane]=t.end,o++}let r=Array(l).fill(n+t);for(;a>=0&&r.some(e=>e>=n);){let t=e[a];r[t.lane]=t.start,a--}a=Math.max(0,a-a%l),o=Math.min(s,o+(l-1-o%l))}return{startIndex:a,endIndex:o}}(e,t,n,l,1===l&&null!=this._flatMeasurements?this._flatMeasurements:null),this.range),{key:!1,debug:()=>this.options.debug}),this.getVirtualIndexes=i(()=>{let e=null,t=null,n=this.calculateRange();return n&&(e=n.startIndex,t=n.endIndex),this.maybeNotify.updateDeps([this.isScrolling,e,t]),[this.options.rangeExtractor,this.options.overscan,this.options.count,e,t]},(e,t,n,l,i)=>null===l||null===i?[]:e({startIndex:l,endIndex:i,overscan:t,count:n}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=e=>{let t=this.options.indexAttribute,n=e.getAttribute(t);return n?parseInt(n,10):(console.warn(`Missing attribute name '${t}={index}' on measured element.`),-1)},this.shouldMeasureDuringScroll=e=>{var t;if(!this.scrollState||"smooth"!==this.scrollState.behavior)return!0;let n=this.scrollState.index??(null==(t=this.getVirtualItemForOffset(this.scrollState.lastTargetOffset))?void 0:t.index);if(void 0!==n&&this.range){let t=Math.max(this.options.overscan,Math.ceil((this.range.endIndex-this.range.startIndex)/2)),l=Math.max(0,n-t),i=Math.min(this.options.count-1,n+t);return e>=l&&e<=i}return!0},this.measureElement=e=>{if(!e)return void this.elementsCache.forEach((e,t)=>{e.isConnected||(this.observer.unobserve(e),this.elementsCache.delete(t))});let t=this.indexFromElement(e),n=this.options.getItemKey(t),l=this.elementsCache.get(n);l!==e&&(l&&this.observer.unobserve(l),this.observer.observe(e),this.elementsCache.set(n,e)),(!this.isScrolling||this.scrollState)&&this.shouldMeasureDuringScroll(t)&&this.resizeItem(t,this.options.measureElement(e,void 0,this))},this.resizeItem=(e,t)=>{var n,l;let i,s,a;if(e<0||e>=this.options.count)return;let o=this._flatMeasurements;if(1===this.options.lanes&&null!==o)a=this.options.getItemKey(e),s=o[2*e],i=o[2*e+1];else{let t=this.measurementsCache[e];if(!t)return;a=t.key,s=t.start,i=t.size}let r=t-(this.itemSizeCache.get(a)??i);if(0!==r){let o="end"===this.options.anchorTo&&(null==(n=this.scrollState)?void 0:n.behavior)!=="smooth"&&this.getVirtualDistanceFromEnd()<=this.options.scrollEndThreshold,d=o?this.getTotalSize():0,h=(null==(l=this.scrollState)?void 0:l.behavior)!=="smooth"&&(void 0!==this.shouldAdjustScrollPositionOnItemSizeChange?this.shouldAdjustScrollPositionOnItemSizeChange(this.measurementsCache[e]??{index:e,key:a,start:s,size:i,end:s+i,lane:0},r,this):s<this.getScrollOffset()+this.scrollAdjustments&&(!this.itemSizeCache.has(a)||"backward"!==this.scrollDirection));(null===this.pendingMin||e<this.pendingMin)&&(this.pendingMin=e),this.itemSizeCache.set(a,t),this.itemSizeCacheVersion++,o?this.applyScrollAdjustment(this.getTotalSize()-d):h&&this.applyScrollAdjustment(r),this.notify(!1)}},this.getVirtualItems=i(()=>[this.getVirtualIndexes(),this.getMeasurements()],(e,t)=>{let n=[];for(let l=0,i=e.length;l<i;l++){let i=t[e[l]];n.push(i)}return n},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=e=>{let t=this.getMeasurements();if(0===t.length)return;let n=this._flatMeasurements,l=1===this.options.lanes&&null!=n,i=f(0,t.length-1,l?e=>n[2*e]:e=>s(t[e]).start,e);return s(t[i])},this.getMaxScrollOffset=()=>{if(!this.scrollElement)return 0;if("scrollHeight"in this.scrollElement)return this.options.horizontal?this.scrollElement.scrollWidth-this.scrollElement.clientWidth:this.scrollElement.scrollHeight-this.scrollElement.clientHeight;{let e=this.scrollElement.document.documentElement;return this.options.horizontal?e.scrollWidth-this.scrollElement.innerWidth:e.scrollHeight-this.scrollElement.innerHeight}},this.getVirtualDistanceFromEnd=()=>Math.max(this.getTotalSize()-this.getSize()-this.getScrollOffset(),0),this.getDistanceFromEnd=()=>Math.max(this.getMaxScrollOffset()-this.getScrollOffset(),0),this.isAtEnd=(e=this.options.scrollEndThreshold)=>this.getDistanceFromEnd()<=e,this.getOffsetForAlignment=(e,t,n=0)=>{if(!this.scrollElement)return 0;let l=this.getSize(),i=this.getScrollOffset();return"auto"===t&&(t=e>=i+l?"end":"start"),"center"===t?e+=(n-l)/2:"end"===t&&(e-=l),Math.max(Math.min(this.getMaxScrollOffset(),e),0)},this.getOffsetForIndex=(e,t="auto")=>{e=Math.max(0,Math.min(e,this.options.count-1));let n=this.getSize(),l=this.getScrollOffset(),i=this.measurementsCache[e];if(!i)return;if("auto"===t)if(i.end>=l+n-this.options.scrollPaddingEnd)t="end";else{if(!(i.start<=l+this.options.scrollPaddingStart))return[l,t];t="start"}if("end"===t&&e===this.options.count-1)return[this.getMaxScrollOffset(),t];let s="end"===t?i.end+this.options.scrollPaddingEnd:i.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(s,t,i.size),t]},this.scrollToOffset=(e,{align:t="start",behavior:n="auto"}={})=>{let l=this.getOffsetForAlignment(e,t),i=this.now();this.scrollState={index:null,align:t,behavior:n,startedAt:i,lastTargetOffset:l,stableFrames:0},this._scrollToOffset(l,{adjustments:void 0,behavior:n}),this.scheduleScrollReconcile()},this.scrollToIndex=(e,{align:t="auto",behavior:n="auto"}={})=>{e=Math.max(0,Math.min(e,this.options.count-1));let l=this.getOffsetForIndex(e,t);if(!l)return;let[i,s]=l,a=this.now();this.scrollState={index:e,align:s,behavior:n,startedAt:a,lastTargetOffset:i,stableFrames:0},this._scrollToOffset(i,{adjustments:void 0,behavior:n}),this.scheduleScrollReconcile()},this.scrollBy=(e,{behavior:t="auto"}={})=>{let n=this.getScrollOffset()+e,l=this.now();this.scrollState={index:null,align:"start",behavior:t,startedAt:l,lastTargetOffset:n,stableFrames:0},this._scrollToOffset(n,{adjustments:void 0,behavior:t}),this.scheduleScrollReconcile()},this.scrollToEnd=({behavior:e="auto"}={})=>{this.options.count>0?this.scrollToIndex(this.options.count-1,{align:"end",behavior:e}):this.scrollToOffset(Math.max(this.getTotalSize()-this.getSize(),0),{behavior:e})},this.getTotalSize=()=>{var e;let t,n=this.getMeasurements();if(0===n.length)t=this.options.paddingStart;else if(1===this.options.lanes){let l=n.length-1,i=this._flatMeasurements;t=null!=i?i[2*l]+i[2*l+1]:(null==(e=n[l])?void 0:e.end)??0}else{let e=Array(this.options.lanes).fill(null),l=n.length-1;for(;l>=0&&e.some(e=>null===e);){let t=n[l];null===e[t.lane]&&(e[t.lane]=t.end),l--}t=Math.max(...e.filter(e=>null!==e))}return Math.max(t-this.options.scrollMargin+this.options.paddingEnd,0)},this.takeSnapshot=()=>{let e=[];if(0===this.itemSizeCache.size)return e;for(let t of this.getMeasurements())t&&this.itemSizeCache.has(t.key)&&e.push({index:t.index,key:t.key,start:t.start,size:t.size,end:t.end,lane:t.lane});return e},this._scrollToOffset=(e,{adjustments:t,behavior:n})=>{this._intendedScrollOffset=e+(t??0),this.options.scrollToFn(e,{behavior:n,adjustments:t},this)},this.measure=()=>{this.pendingMin=null,this.itemSizeCache.clear(),this.laneAssignments.clear(),this.itemSizeCacheVersion++,this.notify(!1)},this.setOptions(e)}applyScrollAdjustment(e,t){0!==e&&(a()&&(this.isScrolling||this._iosTouching||this._iosJustTouchEnded)?this._iosDeferredAdjustment+=e:(this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=e,behavior:t}),null!==this.scrollOffset&&(this.scrollOffset+=this.scrollAdjustments,this.scrollAdjustments=0)))}scheduleScrollReconcile(){if(!this.targetWindow){this.scrollState=null;return}null==this.rafId&&(this.rafId=this.targetWindow.requestAnimationFrame(()=>{this.rafId=null,this.reconcileScroll()}))}reconcileScroll(){if(!this.scrollState||!this.scrollElement)return;if(this.now()-this.scrollState.startedAt>5e3){this.scrollState=null;return}let e=null!=this.scrollState.index?this.getOffsetForIndex(this.scrollState.index,this.scrollState.align):void 0,t=e?e[0]:this.scrollState.lastTargetOffset,n=t!==this.scrollState.lastTargetOffset;if(!n&&1.01>Math.abs(t-this.getScrollOffset())){if(this.scrollState.stableFrames++,this.scrollState.stableFrames>=1){this.getScrollOffset()!==t&&this._scrollToOffset(t,{adjustments:void 0,behavior:"auto"}),this.scrollState=null;return}}else if(this.scrollState.stableFrames=0,n){let e=this.getSize()||600,n=Math.abs(t-this.getScrollOffset()),l="smooth"===this.scrollState.behavior&&n>e;this.scrollState.lastTargetOffset=t,l||(this.scrollState.behavior="auto"),this._scrollToOffset(t,{adjustments:void 0,behavior:l?"smooth":"auto"})}this.scheduleScrollReconcile()}}let f=(e,t,n,l)=>{for(;e<=t;){let i=(e+t)/2|0,s=n(i);if(s<l)e=i+1;else{if(!(s>l))return i;t=i-1}}return e>0?e-1:0},g="u">typeof document?n.useLayoutEffect:n.useEffect;e.s(["useVirtualizer",0,function(e){return function({useFlushSync:e=!0,directDomUpdates:t=!1,directDomUpdatesMode:i="transform",...s}){let a=n.useReducer(e=>e+1,0)[1],o=n.useRef({enabled:t,mode:i,container:null,lastSize:null,lastPositions:new WeakMap,prevRange:null});o.current.enabled=t,o.current.mode=i;let r=e=>{let t=o.current;if(!t.enabled||!t.container)return;let n=e.getTotalSize();if(n!==t.lastSize){t.lastSize=n;let l=e.options.horizontal?"width":"height";t.container.style[l]=`${n}px`}let l=!!e.options.horizontal,i="transform"===t.mode,s=l?"left":"top",a=e.options.scrollMargin;for(let n of e.getVirtualItems()){let o=n.start-a,r=e.elementsCache.get(n.key);r&&t.lastPositions.get(r)!==o&&(t.lastPositions.set(r,o),i?r.style.transform=l?`translate3d(${o}px, 0, 0)`:`translate3d(0, ${o}px, 0)`:r.style[s]=`${o}px`)}},d={...s,onChange:(t,n)=>{var i;let d=o.current,h=!0;if(d.enabled){r(t);let e=t.range,n=d.prevRange;(h=!n||n.isScrolling!==t.isScrolling||n.startIndex!==(null==e?void 0:e.startIndex)||n.endIndex!==(null==e?void 0:e.endIndex))&&(d.prevRange=e?{startIndex:e.startIndex,endIndex:e.endIndex,isScrolling:t.isScrolling}:null)}h&&(e&&n?(0,l.flushSync)(a):a()),null==(i=s.onChange)||i.call(s,t,n)}},[h]=n.useState(()=>{let e=new p(d);return Object.assign(e,{containerRef:t=>{let n=o.current;if(n.container=t,n.lastSize=null,t&&n.enabled){let l=e.getTotalSize();n.lastSize=l;let i=e.options.horizontal?"width":"height";t.style[i]=`${l}px`}}})});return h.setOptions(d),g(()=>h._didMount(),[]),g(()=>h._willUpdate()),g(()=>{r(h)}),h}({observeElementRect:h,observeElementOffset:u,scrollToFn:b,...e})}],463044)},943618,e=>{"use strict";var t=e.i(44091),n=e.i(391398),l=e.i(728649);function i(e){let{value:i,defaultValue:s,...a}=(0,t.useProps)("NumberFormatter",null,e);return void 0===i?null:(0,n.jsx)(l.NumericFormat,{displayType:"text",value:i,...a})}i.extend=e=>e,i.displayName="@mantine/core/NumberFormatter",e.s(["NumberFormatter",0,i])},241111,e=>{"use strict";let t,n,l;var i=e.i(648863);let s=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}],a=[{position:1,mass:1.008,symbol:"H",name:"Hydrogen"},{position:2,mass:4.0026,symbol:"He",name:"Helium"},{position:3,mass:6.94,symbol:"Li",name:"Lithium"},{position:4,mass:9.0122,symbol:"Be",name:"Beryllium"},{position:5,mass:10.81,symbol:"B",name:"Boron"},{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:8,mass:15.999,symbol:"O",name:"Oxygen"},{position:9,mass:18.998,symbol:"F",name:"Fluorine"},{position:10,mass:20.18,symbol:"Ne",name:"Neon"},{position:11,mass:22.99,symbol:"Na",name:"Sodium"},{position:12,mass:24.305,symbol:"Mg",name:"Magnesium"},{position:13,mass:26.982,symbol:"Al",name:"Aluminium"},{position:14,mass:28.085,symbol:"Si",name:"Silicon"},{position:15,mass:30.974,symbol:"P",name:"Phosphorus"},{position:16,mass:32.06,symbol:"S",name:"Sulfur"},{position:17,mass:35.45,symbol:"Cl",name:"Chlorine"},{position:18,mass:39.948,symbol:"Ar",name:"Argon"},{position:19,mass:39.098,symbol:"K",name:"Potassium"},{position:20,mass:39.098,symbol:"Ca",name:"Calcium"},{position:21,mass:40.078,symbol:"Sc",name:"Scandium"},{position:22,mass:47.867,symbol:"Ti",name:"Titanium"},{position:23,mass:50.941,symbol:"V",name:"Vanadium"},{position:24,mass:51.996,symbol:"Cr",name:"Chromium"},{position:25,mass:54.938,symbol:"Mn",name:"Manganese"},{position:26,mass:55.845,symbol:"Fe",name:"Iron"},{position:27,mass:58.933,symbol:"Co",name:"Cobalt"},{position:28,mass:58.933,symbol:"Ni",name:"Nickel"},{position:29,mass:63.546,symbol:"Cu",name:"Copper"},{position:30,mass:65.38,symbol:"Zn",name:"Zinc"},{position:31,mass:69.723,symbol:"Ga",name:"Gallium"},{position:32,mass:72.63,symbol:"Ge",name:"Germanium"},{position:33,mass:74.922,symbol:"As",name:"Arsenic"},{position:34,mass:78.971,symbol:"Se",name:"Selenium"},{position:35,mass:79.904,symbol:"Br",name:"Bromine"},{position:36,mass:83.798,symbol:"Kr",name:"Krypton"},{position:37,mass:83.798,symbol:"Rb",name:"Rubidium"},{position:38,mass:87.62,symbol:"Sr",name:"Strontium"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:40,mass:91.224,symbol:"Zr",name:"Zirconium"},{position:41,mass:92.906,symbol:"Nb",name:"Niobium"},{position:42,mass:95.95,symbol:"Mo",name:"Molybdenum"},{position:43,mass:98,symbol:"Tc",name:"Technetium"},{position:44,mass:101.07,symbol:"Ru",name:"Ruthenium"},{position:45,mass:102.905,symbol:"Rh",name:"Rhodium"},{position:46,mass:106.42,symbol:"Pd",name:"Palladium"},{position:47,mass:106.42,symbol:"Ag",name:"Silver"},{position:48,mass:112.414,symbol:"Cd",name:"Cadmium"},{position:49,mass:114.818,symbol:"In",name:"Indium"},{position:50,mass:118.71,symbol:"Sn",name:"Tin"},{position:51,mass:121.76,symbol:"Sb",name:"Antimony"},{position:52,mass:127.6,symbol:"Te",name:"Tellurium"},{position:53,mass:126.904,symbol:"I",name:"Iodine"},{position:54,mass:126.904,symbol:"Xe",name:"Xenon"},{position:55,mass:126.904,symbol:"Cs",name:"Cesium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:57,mass:138.905,symbol:"La",name:"Lanthanum"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"},{position:59,mass:140.116,symbol:"Pr",name:"Praseodymium"},{position:60,mass:140.907,symbol:"Nd",name:"Neodymium"},{position:61,mass:144.242,symbol:"Pm",name:"Promethium"},{position:62,mass:145,symbol:"Sm",name:"Samarium"},{position:63,mass:150.36,symbol:"Eu",name:"Europium"},{position:64,mass:151.964,symbol:"Gd",name:"Gadolinium"},{position:65,mass:157.25,symbol:"Tb",name:"Terbium"},{position:66,mass:158.925,symbol:"Dy",name:"Dysprosium"},{position:67,mass:162.5,symbol:"Ho",name:"Holmium"},{position:68,mass:164.93,symbol:"Er",name:"Erbium"},{position:69,mass:167.259,symbol:"Tm",name:"Thulium"}];var o=e.i(245745),r=e.i(391398);let d={type:"code",code:`
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
`,component:function(){let e=s.map(e=>(0,r.jsxs)(o.Table.Tr,{children:[(0,r.jsx)(o.Table.Td,{children:e.position}),(0,r.jsx)(o.Table.Td,{children:e.name}),(0,r.jsx)(o.Table.Td,{children:e.symbol}),(0,r.jsx)(o.Table.Td,{children:e.mass})]},e.name));return(0,r.jsxs)(o.Table,{children:[(0,r.jsx)(o.Table.Thead,{children:(0,r.jsxs)(o.Table.Tr,{children:[(0,r.jsx)(o.Table.Th,{children:"Element position"}),(0,r.jsx)(o.Table.Th,{children:"Element name"}),(0,r.jsx)(o.Table.Th,{children:"Symbol"}),(0,r.jsx)(o.Table.Th,{children:"Atomic mass"})]})}),(0,r.jsx)(o.Table.Tbody,{children:e})]})}},h={type:"code",code:`
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
`,component:function(){let e=s.map(e=>(0,r.jsxs)(o.Table.Tr,{children:[(0,r.jsx)(o.Table.Td,{children:e.position}),(0,r.jsx)(o.Table.Td,{children:e.name}),(0,r.jsx)(o.Table.Td,{children:e.symbol}),(0,r.jsx)(o.Table.Td,{children:e.mass})]},e.name)),t=(0,r.jsxs)(o.Table.Tr,{children:[(0,r.jsx)(o.Table.Th,{children:"Element position"}),(0,r.jsx)(o.Table.Th,{children:"Element name"}),(0,r.jsx)(o.Table.Th,{children:"Symbol"}),(0,r.jsx)(o.Table.Th,{children:"Atomic mass"})]});return(0,r.jsxs)(o.Table,{captionSide:"bottom",children:[(0,r.jsx)(o.Table.Caption,{children:"Some elements from the periodic table"}),(0,r.jsx)(o.Table.Thead,{children:t}),(0,r.jsx)(o.Table.Tbody,{children:e}),(0,r.jsx)(o.Table.Tfoot,{children:t})]})}},c={type:"configurator",component:function(e){return(0,r.jsxs)(o.Table,{...e,children:[(0,r.jsx)(o.Table.Thead,{children:(0,r.jsxs)(o.Table.Tr,{children:[(0,r.jsx)(o.Table.Th,{children:"Element position"}),(0,r.jsx)(o.Table.Th,{children:"Element name"}),(0,r.jsx)(o.Table.Th,{children:"Symbol"}),(0,r.jsx)(o.Table.Th,{children:"Atomic mass"})]})}),(0,r.jsx)(o.Table.Tbody,{children:s.map(e=>(0,r.jsxs)(o.Table.Tr,{children:[(0,r.jsx)(o.Table.Td,{children:e.position}),(0,r.jsx)(o.Table.Td,{children:e.name}),(0,r.jsx)(o.Table.Td,{children:e.symbol}),(0,r.jsx)(o.Table.Td,{children:e.mass})]},e.name))})]})},code:`
import { Table } from '@mantine/core';

function Demo() {
  return (
    <Table{{props}}>
      {/* {...rows} */}
    </Table>
  );
}
`,controls:[{prop:"striped",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"highlightOnHover",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withTableBorder",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withColumnBorders",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withRowBorders",type:"boolean",initialValue:!0,libraryValue:!0}]},m={type:"configurator",component:function(e){return(0,r.jsxs)(o.Table,{...e,children:[(0,r.jsx)(o.Table.Thead,{children:(0,r.jsxs)(o.Table.Tr,{children:[(0,r.jsx)(o.Table.Th,{children:"Position"}),(0,r.jsx)(o.Table.Th,{children:"Name"}),(0,r.jsx)(o.Table.Th,{children:"Symbol"})]})}),(0,r.jsx)(o.Table.Tbody,{children:s.map(e=>(0,r.jsxs)(o.Table.Tr,{children:[(0,r.jsx)(o.Table.Td,{children:e.position}),(0,r.jsx)(o.Table.Td,{children:e.name}),(0,r.jsx)(o.Table.Td,{children:e.symbol})]},e.name))})]})},code:`
import { Table } from '@mantine/core';

function Demo() {
  return (
    <Table{{props}}>
      {/* {...rows} */}
    </Table>
  );
}
`,controls:[{prop:"horizontalSpacing",type:"size",libraryValue:"xs",initialValue:"xs"},{prop:"verticalSpacing",type:"size",initialValue:"xs",libraryValue:"xs"}]},u={type:"code",code:`
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
`,component:function(){let e=s.map(e=>(0,r.jsxs)(o.Table.Tr,{children:[(0,r.jsx)(o.Table.Td,{children:e.position}),(0,r.jsx)(o.Table.Td,{children:e.name}),(0,r.jsx)(o.Table.Td,{children:e.symbol}),(0,r.jsx)(o.Table.Td,{children:e.mass})]},e.name));return(0,r.jsx)(o.Table.ScrollContainer,{minWidth:500,children:(0,r.jsxs)(o.Table,{children:[(0,r.jsx)(o.Table.Thead,{children:(0,r.jsxs)(o.Table.Tr,{children:[(0,r.jsx)(o.Table.Th,{children:"Element position"}),(0,r.jsx)(o.Table.Th,{children:"Element name"}),(0,r.jsx)(o.Table.Th,{children:"Symbol"}),(0,r.jsx)(o.Table.Th,{children:"Atomic mass"})]})}),(0,r.jsx)(o.Table.Tbody,{children:e})]})})}},T={type:"code",code:`
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
`,component:function(){let e=a.map(e=>(0,r.jsxs)(o.Table.Tr,{children:[(0,r.jsx)(o.Table.Td,{children:e.position}),(0,r.jsx)(o.Table.Td,{children:e.name}),(0,r.jsx)(o.Table.Td,{children:e.symbol}),(0,r.jsx)(o.Table.Td,{children:e.mass})]},e.name));return(0,r.jsx)(o.Table.ScrollContainer,{minWidth:500,maxHeight:300,children:(0,r.jsxs)(o.Table,{children:[(0,r.jsx)(o.Table.Thead,{children:(0,r.jsxs)(o.Table.Tr,{children:[(0,r.jsx)(o.Table.Th,{children:"Element position"}),(0,r.jsx)(o.Table.Th,{children:"Element name"}),(0,r.jsx)(o.Table.Th,{children:"Symbol"}),(0,r.jsx)(o.Table.Th,{children:"Atomic mass"})]})}),(0,r.jsx)(o.Table.Tbody,{children:e})]})})}},b={type:"code",code:`
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
`,component:function(){let e=s.map(e=>(0,r.jsxs)(o.Table.Tr,{children:[(0,r.jsx)(o.Table.Td,{children:e.position}),(0,r.jsx)(o.Table.Td,{children:e.name}),(0,r.jsx)(o.Table.Td,{children:e.symbol}),(0,r.jsx)(o.Table.Td,{children:e.mass})]},e.name));return(0,r.jsx)(o.Table.ScrollContainer,{minWidth:500,type:"native",children:(0,r.jsxs)(o.Table,{children:[(0,r.jsx)(o.Table.Thead,{children:(0,r.jsxs)(o.Table.Tr,{children:[(0,r.jsx)(o.Table.Th,{children:"Element position"}),(0,r.jsx)(o.Table.Th,{children:"Element name"}),(0,r.jsx)(o.Table.Th,{children:"Symbol"}),(0,r.jsx)(o.Table.Th,{children:"Atomic mass"})]})}),(0,r.jsx)(o.Table.Tbody,{children:e})]})})}},p={type:"code",code:`
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
`,component:function(){let e=a.map(e=>(0,r.jsxs)(o.Table.Tr,{children:[(0,r.jsx)(o.Table.Td,{children:e.position}),(0,r.jsx)(o.Table.Td,{children:e.name}),(0,r.jsx)(o.Table.Td,{children:e.symbol}),(0,r.jsx)(o.Table.Td,{children:e.mass})]},e.name));return(0,r.jsx)(o.Table.ScrollContainer,{minWidth:500,maxHeight:300,type:"native",children:(0,r.jsxs)(o.Table,{children:[(0,r.jsx)(o.Table.Thead,{children:(0,r.jsxs)(o.Table.Tr,{children:[(0,r.jsx)(o.Table.Th,{children:"Element position"}),(0,r.jsx)(o.Table.Th,{children:"Element name"}),(0,r.jsx)(o.Table.Th,{children:"Symbol"}),(0,r.jsx)(o.Table.Th,{children:"Atomic mass"})]})}),(0,r.jsx)(o.Table.Tbody,{children:e})]})})}};var f=e.i(191788),g=e.i(37541);let x=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}],v={type:"code",component:function(){let[e,t]=(0,f.useState)([]),n=x.map(n=>(0,r.jsxs)(o.Table.Tr,{bg:e.includes(n.position)?"var(--mantine-color-blue-light)":void 0,children:[(0,r.jsx)(o.Table.Td,{children:(0,r.jsx)(g.Checkbox,{"aria-label":"Select row",checked:e.includes(n.position),onChange:l=>t(l.currentTarget.checked?[...e,n.position]:e.filter(e=>e!==n.position))})}),(0,r.jsx)(o.Table.Td,{children:n.position}),(0,r.jsx)(o.Table.Td,{children:n.name}),(0,r.jsx)(o.Table.Td,{children:n.symbol}),(0,r.jsx)(o.Table.Td,{children:n.mass})]},n.name));return(0,r.jsxs)(o.Table,{children:[(0,r.jsx)(o.Table.Thead,{visibleFrom:"sm",children:(0,r.jsxs)(o.Table.Tr,{children:[(0,r.jsx)(o.Table.Th,{}),(0,r.jsx)(o.Table.Th,{children:"Element position"}),(0,r.jsx)(o.Table.Th,{children:"Element name"}),(0,r.jsx)(o.Table.Th,{children:"Symbol"}),(0,r.jsx)(o.Table.Th,{children:"Atomic mass"})]})}),(0,r.jsx)(o.Table.Tbody,{children:n})]})},defaultExpanded:!1,code:`
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
`},y={caption:"Some elements from the periodic table",head:["Element position","Atomic mass","Symbol","Element name"],body:[[6,12.011,"C","Carbon"],[7,14.007,"N","Nitrogen"],[39,88.906,"Y","Yttrium"],[56,137.33,"Ba","Barium"],[58,140.12,"Ce","Cerium"]]},S={type:"code",component:function(){return(0,r.jsx)(o.Table,{data:y})},code:`
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
`},j={type:"code",code:`
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
`,component:function(){let e=s.map(e=>(0,r.jsxs)(o.Table.Tr,{children:[(0,r.jsx)(o.Table.Td,{children:e.position}),(0,r.jsx)(o.Table.Td,{children:e.name}),(0,r.jsx)(o.Table.Td,{children:e.symbol}),(0,r.jsx)(o.Table.Td,{children:e.mass})]},e.name));return(0,r.jsxs)(o.Table,{stickyHeader:!0,stickyHeaderOffset:"var(--docs-header-height)",children:[(0,r.jsx)(o.Table.Thead,{children:(0,r.jsxs)(o.Table.Tr,{children:[(0,r.jsx)(o.Table.Th,{children:"Element position"}),(0,r.jsx)(o.Table.Th,{children:"Element name"}),(0,r.jsx)(o.Table.Th,{children:"Symbol"}),(0,r.jsx)(o.Table.Th,{children:"Atomic mass"})]})}),(0,r.jsx)(o.Table.Tbody,{children:e}),(0,r.jsx)(o.Table.Caption,{children:"Scroll page to see sticky thead"})]})}},w={type:"code",code:`
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
`,component:function(){return(0,r.jsx)(o.Table,{variant:"vertical",layout:"fixed",withTableBorder:!0,children:(0,r.jsxs)(o.Table.Tbody,{children:[(0,r.jsxs)(o.Table.Tr,{children:[(0,r.jsx)(o.Table.Th,{w:160,children:"Epic name"}),(0,r.jsx)(o.Table.Td,{children:"7.x migration"})]}),(0,r.jsxs)(o.Table.Tr,{children:[(0,r.jsx)(o.Table.Th,{children:"Status"}),(0,r.jsx)(o.Table.Td,{children:"Open"})]}),(0,r.jsxs)(o.Table.Tr,{children:[(0,r.jsx)(o.Table.Th,{children:"Total issues"}),(0,r.jsx)(o.Table.Td,{children:"135"})]}),(0,r.jsxs)(o.Table.Tr,{children:[(0,r.jsx)(o.Table.Th,{children:"Total story points"}),(0,r.jsx)(o.Table.Td,{children:"874"})]}),(0,r.jsxs)(o.Table.Tr,{children:[(0,r.jsx)(o.Table.Th,{children:"Last updated at"}),(0,r.jsx)(o.Table.Td,{children:"September 26, 2024 17:41:26"})]})]})})}};var C=e.i(943618);let E=[{product:"Apples",unitsSold:0x83fd3be2},{product:"Oranges",unitsSold:0x25314e33b},{product:"Bananas",unitsSold:0x499602d2},{product:"Pineapples",unitsSold:994881e4},{product:"Pears",unitsSold:0x250195167}],O={type:"configurator",component:function(e){let t=E.map(e=>(0,r.jsxs)(o.Table.Tr,{children:[(0,r.jsx)(o.Table.Td,{children:e.product}),(0,r.jsx)(o.Table.Td,{children:(0,r.jsx)(C.NumberFormatter,{value:e.unitsSold,thousandSeparator:!0})})]},e.product));return(0,r.jsxs)(o.Table,{...e,children:[(0,r.jsx)(o.Table.Thead,{children:(0,r.jsxs)(o.Table.Tr,{children:[(0,r.jsx)(o.Table.Th,{children:"Product"}),(0,r.jsx)(o.Table.Th,{children:"Units sold"})]})}),(0,r.jsx)(o.Table.Tbody,{children:t})]})},code:`
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
`,controls:[{type:"boolean",prop:"tabularNums",initialValue:!0,libraryValue:!1}]};var A=e.i(463044);let I=`interface RowData {
  id: number;
  name: string;
  email: string;
  company: string;
  city: string;
}

export function generateData(count: number): RowData[] {
  const names = [
    'James Smith',
    'Maria Garcia',
    'Robert Johnson',
    'Linda Williams',
    'Michael Brown',
    'Barbara Jones',
    'David Miller',
    'Susan Davis',
    'Richard Wilson',
    'Jessica Moore',
    'Charles Taylor',
    'Sarah Anderson',
    'Thomas Jackson',
    'Karen White',
    'Daniel Harris',
    'Nancy Martin',
    'Matthew Thompson',
    'Lisa Robinson',
    'Anthony Clark',
    'Betty Lewis',
  ];

  const companies = [
    'Acme Corp',
    'Globex Inc',
    'Initech',
    'Umbrella Corp',
    'Stark Industries',
    'Wayne Enterprises',
    'Cyberdyne Systems',
    'Oscorp',
    'Hooli',
    'Pied Piper',
  ];

  const cities = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
    'San Antonio',
    'San Diego',
    'Dallas',
    'Austin',
    'Seattle',
  ];

  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: names[index % names.length],
    email: \`user\${index + 1}@example.com\`,
    company: companies[index % companies.length],
    city: cities[index % cities.length],
  }));
}`,M=`
import { useState } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { Table } from '@mantine/core';
import { generateData } from './data';


const data = generateData(5000);
const ROW_HEIGHT = 36;

function Demo() {
  const [scrollParent, setScrollParent] = useState<HTMLDivElement | null>(null);

  const virtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => scrollParent,
    estimateSize: () => ROW_HEIGHT,
    overscan: 20,
  });

  const virtualItems = virtualizer.getVirtualItems();

  return (
    <Table.ScrollContainer
      minWidth={500}
      maxHeight={400}
      scrollAreaProps={{ viewportRef: setScrollParent }}
    >
      <Table stickyHeader layout="fixed">
        <Table.Thead>
          <Table.Tr>
            <Table.Th w={50}>#</Table.Th>
            <Table.Th>Name</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Company</Table.Th>
            <Table.Th>City</Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {virtualItems.length > 0 && (
            <tr aria-hidden>
              <td
                aria-hidden
                colSpan={5}
                style={{ height: virtualItems[0].start, padding: 0, border: 'none' }}
              />
            </tr>
          )}

          {virtualItems.map((virtualItem) => {
            const row = data[virtualItem.index];
            return (
              <Table.Tr key={virtualItem.index}>
                <Table.Td>{row.id}</Table.Td>
                <Table.Td>{row.name}</Table.Td>
                <Table.Td>{row.email}</Table.Td>
                <Table.Td>{row.company}</Table.Td>
                <Table.Td>{row.city}</Table.Td>
              </Table.Tr>
            );
          })}

          {virtualItems.length > 0 && (
            <tr aria-hidden>
              <td
                aria-hidden
                colSpan={5}
                style={{
                  height:
                    virtualizer.getTotalSize() -
                    virtualItems[virtualItems.length - 1].end,
                  padding: 0,
                  border: 'none',
                }}
              />
            </tr>
          )}
        </Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
`,D=(t=["James Smith","Maria Garcia","Robert Johnson","Linda Williams","Michael Brown","Barbara Jones","David Miller","Susan Davis","Richard Wilson","Jessica Moore","Charles Taylor","Sarah Anderson","Thomas Jackson","Karen White","Daniel Harris","Nancy Martin","Matthew Thompson","Lisa Robinson","Anthony Clark","Betty Lewis"],n=["Acme Corp","Globex Inc","Initech","Umbrella Corp","Stark Industries","Wayne Enterprises","Cyberdyne Systems","Oscorp","Hooli","Pied Piper"],l=["New York","Los Angeles","Chicago","Houston","Phoenix","San Antonio","San Diego","Dallas","Austin","Seattle"],Array.from({length:5e3},(e,i)=>({id:i+1,name:t[i%t.length],email:`user${i+1}@example.com`,company:n[i%n.length],city:l[i%l.length]}))),z={type:"code",component:function(){let[e,t]=(0,f.useState)(null),n=(0,A.useVirtualizer)({count:D.length,getScrollElement:()=>e,estimateSize:()=>36,overscan:20}),l=n.getVirtualItems();return(0,r.jsx)(o.Table.ScrollContainer,{minWidth:500,maxHeight:400,scrollAreaProps:{viewportRef:t},children:(0,r.jsxs)(o.Table,{stickyHeader:!0,layout:"fixed",children:[(0,r.jsx)(o.Table.Thead,{children:(0,r.jsxs)(o.Table.Tr,{children:[(0,r.jsx)(o.Table.Th,{w:50,children:"#"}),(0,r.jsx)(o.Table.Th,{children:"Name"}),(0,r.jsx)(o.Table.Th,{children:"Email"}),(0,r.jsx)(o.Table.Th,{children:"Company"}),(0,r.jsx)(o.Table.Th,{children:"City"})]})}),(0,r.jsxs)(o.Table.Tbody,{children:[l.length>0&&(0,r.jsx)("tr",{"aria-hidden":!0,children:(0,r.jsx)("td",{"aria-hidden":!0,colSpan:5,style:{height:l[0].start,padding:0,border:"none"}})}),l.map(e=>{let t=D[e.index];return(0,r.jsxs)(o.Table.Tr,{children:[(0,r.jsx)(o.Table.Td,{children:t.id}),(0,r.jsx)(o.Table.Td,{children:t.name}),(0,r.jsx)(o.Table.Td,{children:t.email}),(0,r.jsx)(o.Table.Td,{children:t.company}),(0,r.jsx)(o.Table.Td,{children:t.city})]},e.index)}),l.length>0&&(0,r.jsx)("tr",{"aria-hidden":!0,children:(0,r.jsx)("td",{"aria-hidden":!0,colSpan:5,style:{height:n.getTotalSize()-l[l.length-1].end,padding:0,border:"none"}})})]})]})})},code:[{fileName:"Demo.tsx",language:"tsx",code:M},{fileName:"data.ts",language:"tsx",code:I}],defaultExpanded:!1};var N=(0,i.__exportAll)({captions:()=>h,configurator:()=>c,data:()=>S,rowSelection:()=>v,scrollContainer:()=>u,scrollContainerMaxHeight:()=>T,scrollContainerNative:()=>b,scrollContainerNativeMaxHeight:()=>p,spacingConfigurator:()=>m,stickyHeader:()=>j,tabularNums:()=>O,usage:()=>d,vertical:()=>w,virtualized:()=>z});e.s(["TableDemos",0,N],241111)},273674,e=>{"use strict";var t=e.i(391398),n=e.i(38856),l=e.i(241111);e.i(603441);var i=e.i(62558);e.i(457450);var s=e.i(418026);let a=(0,i.Layout)(s.MDX_DATA.Table);function o(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.useMDXComponents)(),...e.components},{Demo:s}=i;return s||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(i.p,{children:"Table data for all examples:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-tsx",children:"const elements = [\n  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },\n  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },\n  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },\n  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },\n  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },\n];\n"})}),"\n",(0,t.jsx)(s,{data:l.TableDemos.usage}),"\n",(0,t.jsx)(i.h2,{id:"data-prop",children:"data prop"}),"\n",(0,t.jsxs)(i.p,{children:["You can use the ",(0,t.jsx)(i.code,{children:"data"})," prop to automatically generate table rows from an array of React nodes.\nThe ",(0,t.jsx)(i.code,{children:"data"})," prop accepts an object with the following properties:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"head"})," – an array of React nodes (",(0,t.jsx)(i.code,{children:"React.ReactNode[]"}),") to render ",(0,t.jsx)(i.code,{children:"Table.Th"})," in ",(0,t.jsx)(i.code,{children:"Table.Thead"})]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"foot"})," – an array of React nodes (",(0,t.jsx)(i.code,{children:"React.ReactNode[]"}),") to render ",(0,t.jsx)(i.code,{children:"Table.Th"})," in ",(0,t.jsx)(i.code,{children:"Table.Tfoot"})]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"body"})," - an array of arrays of React nodes (",(0,t.jsx)(i.code,{children:"React.ReactNode[][]"}),") to render ",(0,t.jsx)(i.code,{children:"Table.Td"})," in ",(0,t.jsx)(i.code,{children:"Table.Tbody"})]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"caption"})," – a React node to render ",(0,t.jsx)(i.code,{children:"Table.Caption"})]}),"\n"]}),"\n",(0,t.jsx)(s,{data:l.TableDemos.data}),"\n",(0,t.jsx)(i.h2,{id:"sticky-header",children:"Sticky header"}),"\n",(0,t.jsxs)(i.p,{children:["Set ",(0,t.jsx)(i.code,{children:"stickyHeader"})," to make the table header sticky. To customize the top position of the header, use the ",(0,t.jsx)(i.code,{children:"stickyHeaderOffset"})," prop:\nit is useful when you have a fixed header in your application. For example, the Mantine documentation website has a fixed\nheader with 60px height:"]}),"\n",(0,t.jsx)(s,{data:l.TableDemos.stickyHeader}),"\n",(0,t.jsx)(i.h2,{id:"spacing",children:"Spacing"}),"\n",(0,t.jsxs)(i.p,{children:["To control spacing, use the ",(0,t.jsx)(i.code,{children:"horizontalSpacing"})," and ",(0,t.jsx)(i.code,{children:"verticalSpacing"})," props. Both props support spacing from ",(0,t.jsx)(i.code,{children:"theme.spacing"})," and any valid CSS value to set cell padding:"]}),"\n",(0,t.jsx)(s,{data:l.TableDemos.spacingConfigurator}),"\n",(0,t.jsx)(i.h2,{id:"caption-and-tfoot",children:"Caption and tfoot"}),"\n",(0,t.jsxs)(i.p,{children:["Table supports tfoot and caption elements. Set the ",(0,t.jsx)(i.code,{children:"captionSide"})," prop (top or bottom) to change the caption position."]}),"\n",(0,t.jsx)(s,{data:l.TableDemos.captions}),"\n",(0,t.jsx)(i.h2,{id:"striped-and-rows-hover",children:"Striped and rows hover"}),"\n",(0,t.jsx)(s,{data:l.TableDemos.configurator}),"\n",(0,t.jsx)(i.h2,{id:"scroll-container",children:"Scroll container"}),"\n",(0,t.jsxs)(i.p,{children:["To prevent viewport overflow, wrap ",(0,t.jsx)(i.code,{children:"Table"})," with ",(0,t.jsx)(i.code,{children:"Table.ScrollContainer"}),".\nThe component accepts a ",(0,t.jsx)(i.code,{children:"minWidth"})," prop which sets the minimum width below which the table will be scrollable."]}),"\n",(0,t.jsx)(s,{data:l.TableDemos.scrollContainer}),"\n",(0,t.jsxs)(i.p,{children:["By default, ",(0,t.jsx)(i.code,{children:"Table.ScrollContainer"})," uses ",(0,t.jsx)(i.a,{href:"/core/scroll-area",children:"ScrollArea"}),", you can change it\nto native scrollbars by setting ",(0,t.jsx)(i.code,{children:'type="native"'}),":"]}),"\n",(0,t.jsx)(s,{data:l.TableDemos.scrollContainerNative}),"\n",(0,t.jsxs)(i.p,{children:["You can also set the ",(0,t.jsx)(i.code,{children:"maxHeight"})," prop on ",(0,t.jsx)(i.code,{children:"Table.ScrollContainer"})," to limit the table height:"]}),"\n",(0,t.jsx)(s,{data:l.TableDemos.scrollContainerMaxHeight}),"\n",(0,t.jsx)(i.h2,{id:"vertical-variant",children:"Vertical variant"}),"\n",(0,t.jsxs)(i.p,{children:["Set ",(0,t.jsx)(i.code,{children:'variant="vertical"'})," to render the table with a vertical layout:"]}),"\n",(0,t.jsx)(s,{data:l.TableDemos.vertical}),"\n",(0,t.jsx)(i.h2,{id:"tabular-numbers",children:"Tabular numbers"}),"\n",(0,t.jsxs)(i.p,{children:["Set the ",(0,t.jsx)(i.code,{children:"tabularNums"})," prop to render numbers in tabular style. It sets\n",(0,t.jsx)(i.code,{children:"font-variant-numeric: tabular-nums"})," which makes numbers have equal width.\nThis is useful when you have columns with numbers and you want them to be aligned:"]}),"\n",(0,t.jsx)(s,{data:l.TableDemos.tabularNums}),"\n",(0,t.jsx)(i.h2,{id:"example-table-virtualization",children:"Example: Table virtualization"}),"\n",(0,t.jsxs)(i.p,{children:["This example demonstrates how to use ",(0,t.jsx)(i.code,{children:"Table.ScrollContainer"})," with ",(0,t.jsx)(i.code,{children:"@tanstack/react-virtual"}),"\nto efficiently render large datasets. Only the visible rows are rendered in the DOM,\nwhich significantly improves performance for tables with thousands of rows."]}),"\n",(0,t.jsx)(s,{data:l.TableDemos.virtualized}),"\n",(0,t.jsx)(i.h2,{id:"example-table-with-row-selection",children:"Example: Table with row selection"}),"\n",(0,t.jsx)(s,{data:l.TableDemos.rowSelection})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(a,{...e,children:(0,t.jsx)(o,{...e})})}])},335815,(e,t,n)=>{let l="/core/table";(window.__NEXT_P=window.__NEXT_P||[]).push([l,()=>e.r(273674)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([l])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);