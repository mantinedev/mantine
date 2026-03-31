(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,734980,(e,t,r)=>{"use strict";var n=e.r(767875),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function c(e){return n.isMemo(e)?s:i[e.$$typeof]||o}i[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i[n.Memo]=s;var l=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,h=Object.prototype;t.exports=function e(t,r,n){if("string"!=typeof r){if(h){var o=f(r);o&&o!==h&&e(t,o,n)}var s=u(r);d&&(s=s.concat(d(r)));for(var i=c(t),p=c(r),g=0;g<s.length;++g){var b=s[g];if(!a[b]&&!(n&&n[b])&&!(p&&p[b])&&!(i&&i[b])){var y=m(r,b);try{l(t,b,y)}catch(e){}}}}return t}},163360,808514,809440,984110,468162,400474,e=>{"use strict";var t,r,n,o=e.i(191788),a=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(((t=document.createElement("style")).setAttribute("data-emotion",this.key),void 0!==this.nonce&&t.setAttribute("nonce",this.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t));var t,r=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(r);try{n.insertRule(e,n.cssRules.length)}catch(e){}}else r.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),this.tags=[],this.ctr=0},e}(),s=Math.abs,i=String.fromCharCode,c=Object.assign;function l(e,t,r){return e.replace(t,r)}function u(e,t){return e.indexOf(t)}function d(e,t){return 0|e.charCodeAt(t)}function m(e,t,r){return e.slice(t,r)}function f(e){return e.length}function h(e,t){return t.push(e),e}var p=1,g=1,b=0,y=0,v=0,k="";function x(e,t,r,n,o,a,s){return{value:e,root:t,parent:r,type:n,props:o,children:a,line:p,column:g,length:s,return:""}}function w(e,t){return c(x("",null,null,"",null,null,0),e,{length:-e.length},t)}function C(){return v=y<b?d(k,y++):0,g++,10===v&&(g=1,p++),v}function S(){return d(k,y)}function $(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function E(e){return p=g=1,b=f(k=e),y=0,[]}function N(e){var t,r;return(t=y-1,r=function e(t){for(;C();)switch(v){case t:return y;case 34:case 39:34!==t&&39!==t&&e(v);break;case 40:41===t&&e(t);break;case 92:C()}return y}(91===e?e+2:40===e?e+1:e),m(k,t,r)).trim()}var j="-ms-",A="-moz-",O="-webkit-",_="comm",T="rule",R="decl",P="@keyframes";function D(e,t){for(var r="",n=e.length,o=0;o<n;o++)r+=t(e[o],o,e,t)||"";return r}function z(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case R:return e.return=e.return||e.value;case _:return"";case P:return e.return=e.value+"{"+D(e.children,n)+"}";case T:e.value=e.props.join(",")}return f(r=D(e.children,n))?e.return=e.value+"{"+r+"}":""}function M(e,t,r,n,o,a,i,c,u,d,f){for(var h=o-1,p=0===o?a:[""],g=p.length,b=0,y=0,v=0;b<n;++b)for(var k=0,w=m(e,h+1,h=s(y=i[b])),C=e;k<g;++k)(C=(y>0?p[k]+" "+w:l(w,/&\f/g,p[k])).trim())&&(u[v++]=C);return x(e,t,r,0===o?T:c,u,d,f)}function F(e,t,r,n){return x(e,t,r,R,m(e,0,n),m(e,n+1,-1),n)}var I=function(e,t,r){for(var n=0,o=0;n=o,o=S(),38===n&&12===o&&(t[r]=1),!$(o);)C();return m(k,e,y)},B=function(e,t){var r=-1,n=44;do switch($(n)){case 0:38===n&&12===S()&&(t[r]=1),e[r]+=I(y-1,t,r);break;case 2:e[r]+=N(n);break;case 4:if(44===n){e[++r]=58===S()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=i(n)}while(n=C())return e},L=function(e,t){var r;return r=B(E(e),t),k="",r},W=new WeakMap,G=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||W.get(r))&&!n){W.set(e,!0);for(var o=[],a=L(t,o),s=r.props,i=0,c=0;i<a.length;i++)for(var l=0;l<s.length;l++,c++)e.props[c]=o[i]?a[i].replace(/&\f/g,s[l]):s[l]+" "+a[i]}}},H=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},q=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case R:e.return=function e(t,r){switch(45^d(t,0)?(((r<<2^d(t,0))<<2^d(t,1))<<2^d(t,2))<<2^d(t,3):0){case 5103:return O+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return O+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return O+t+A+t+j+t+t;case 6828:case 4268:return O+t+j+t+t;case 6165:return O+t+j+"flex-"+t+t;case 5187:return O+t+l(t,/(\w+).+(:[^]+)/,O+"box-$1$2"+j+"flex-$1$2")+t;case 5443:return O+t+j+"flex-item-"+l(t,/flex-|-self/,"")+t;case 4675:return O+t+j+"flex-line-pack"+l(t,/align-content|flex-|-self/,"")+t;case 5548:return O+t+j+l(t,"shrink","negative")+t;case 5292:return O+t+j+l(t,"basis","preferred-size")+t;case 6060:return O+"box-"+l(t,"-grow","")+O+t+j+l(t,"grow","positive")+t;case 4554:return O+l(t,/([^-])(transform)/g,"$1"+O+"$2")+t;case 6187:return l(l(l(t,/(zoom-|grab)/,O+"$1"),/(image-set)/,O+"$1"),t,"")+t;case 5495:case 3959:return l(t,/(image-set\([^]*)/,O+"$1$`$1");case 4968:return l(l(t,/(.+:)(flex-)?(.*)/,O+"box-pack:$3"+j+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+O+t+t;case 4095:case 3583:case 4068:case 2532:return l(t,/(.+)-inline(.+)/,O+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(f(t)-1-r>6)switch(d(t,r+1)){case 109:if(45!==d(t,r+4))break;case 102:return l(t,/(.+:)(.+)-([^]+)/,"$1"+O+"$2-$3$1"+A+(108==d(t,r+3)?"$3":"$2-$3"))+t;case 115:return~u(t,"stretch")?e(l(t,"stretch","fill-available"),r)+t:t}break;case 4949:if(115!==d(t,r+1))break;case 6444:switch(d(t,f(t)-3-(~u(t,"!important")&&10))){case 107:return l(t,":",":"+O)+t;case 101:return l(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+O+(45===d(t,14)?"inline-":"")+"box$3$1"+O+"$2$3$1"+j+"$2box$3")+t}break;case 5936:switch(d(t,r+11)){case 114:return O+t+j+l(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return O+t+j+l(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return O+t+j+l(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return O+t+j+t+t}return t}(e.value,e.length);break;case P:return D([w(e,{value:l(e.value,"@","@"+O)})],n);case T:if(e.length){var o,a;return o=e.props,a=function(t){var r;switch(r=t,(r=/(::plac\w+|:read-\w+)/.exec(r))?r[0]:r){case":read-only":case":read-write":return D([w(e,{props:[l(t,/:(read-\w+)/,":"+A+"$1")]})],n);case"::placeholder":return D([w(e,{props:[l(t,/:(plac\w+)/,":"+O+"input-$1")]}),w(e,{props:[l(t,/:(plac\w+)/,":"+A+"$1")]}),w(e,{props:[l(t,/:(plac\w+)/,j+"input-$1")]})],n)}return""},o.map(a).join("")}}}],U=function(e){var t,r,n,o,s,c=e.key;if("css"===c){var b=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(b,function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))})}var w=e.stylisPlugins||q,j={},A=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+c+' "]'),function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)j[t[r]]=!0;A.push(e)});var O=(r=(t=[G,H].concat(w,[z,(n=function(e){s.insert(e)},function(e){!e.root&&(e=e.return)&&n(e)})])).length,function(e,n,o,a){for(var s="",i=0;i<r;i++)s+=t[i](e,n,o,a)||"";return s}),T=function(e){var t,r;return D((r=function e(t,r,n,o,a,s,c,b,w){for(var E,j=0,A=0,O=c,T=0,R=0,P=0,D=1,z=1,I=1,B=0,L="",W=a,G=s,H=o,q=L;z;)switch(P=B,B=C()){case 40:if(108!=P&&58==d(q,O-1)){-1!=u(q+=l(N(B),"&","&\f"),"&\f")&&(I=-1);break}case 34:case 39:case 91:q+=N(B);break;case 9:case 10:case 13:case 32:q+=function(e){for(;v=S();)if(v<33)C();else break;return $(e)>2||$(v)>3?"":" "}(P);break;case 92:q+=function(e,t){for(var r;--t&&C()&&!(v<48)&&!(v>102)&&(!(v>57)||!(v<65))&&(!(v>70)||!(v<97)););return r=y+(t<6&&32==S()&&32==C()),m(k,e,r)}(y-1,7);continue;case 47:switch(S()){case 42:case 47:h((E=function(e,t){for(;C();)if(e+v===57)break;else if(e+v===84&&47===S())break;return"/*"+m(k,t,y-1)+"*"+i(47===e?e:C())}(C(),y),x(E,r,n,_,i(v),m(E,2,-2),0)),w);break;default:q+="/"}break;case 123*D:b[j++]=f(q)*I;case 125*D:case 59:case 0:switch(B){case 0:case 125:z=0;case 59+A:-1==I&&(q=l(q,/\f/g,"")),R>0&&f(q)-O&&h(R>32?F(q+";",o,n,O-1):F(l(q," ","")+";",o,n,O-2),w);break;case 59:q+=";";default:if(h(H=M(q,r,n,j,A,a,b,L,W=[],G=[],O),s),123===B)if(0===A)e(q,r,H,H,W,s,O,b,G);else switch(99===T&&110===d(q,3)?100:T){case 100:case 108:case 109:case 115:e(t,H,H,o&&h(M(t,H,H,0,0,a,b,L,a,W=[],O),G),a,G,O,b,o?W:G);break;default:e(q,H,H,H,[""],G,0,b,G)}}j=A=R=0,D=I=1,L=q="",O=c;break;case 58:O=1+f(q),R=P;default:if(D<1){if(123==B)--D;else if(125==B&&0==D++&&125==(v=y>0?d(k,--y):0,g--,10===v&&(g=1,p--),v))continue}switch(q+=i(B),B*D){case 38:I=A>0?1:(q+="\f",-1);break;case 44:b[j++]=(f(q)-1)*I,I=1;break;case 64:45===S()&&(q+=N(C())),T=S(),A=O=f(L=q+=function(e){for(;!$(S());)C();return m(k,e,y)}(y)),B++;break;case 45:45===P&&2==f(q)&&(D=0)}}return s}("",null,null,null,[""],t=E(t=e),0,[0],t),k="",r),O)},R={key:c,sheet:new a({key:c,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:j,registered:{},insert:function(e,t,r,n){s=r,T(e?e+"{"+t.styles+"}":t.styles),n&&(R.inserted[t.name]=!0)}};return R.sheet.hydrate(A),R};function K(e,t,r){var n="";return r.split(" ").forEach(function(r){void 0!==e[r]?t.push(e[r]+";"):r&&(n+=r+" ")}),n}e.s(["default",0,U],808514),e.i(734980);var V=function(e,t,r){var n=e.key+"-"+t.name;!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},J=function(e,t,r){V(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var o=t;do e.insert(t===o?"."+n:"",o,e.sheet,!0),o=o.next;while(void 0!==o)}};e.s(["getRegisteredStyles",0,K,"insertStyles",0,J,"registerStyles",0,V],809440);var X={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Y=/[A-Z]|^ms/g,Z=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Q=function(e){return 45===e.charCodeAt(1)},ee=function(e){return null!=e&&"boolean"!=typeof e},et=(t=function(e){return Q(e)?e:e.replace(Y,"-$&").toLowerCase()},r=Object.create(null),function(e){return void 0===r[e]&&(r[e]=t(e)),r[e]}),er=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(Z,function(e,t,r){return n={name:t,styles:r,next:n},t})}return 1===X[e]||Q(e)||"number"!=typeof t||0===t?t:t+"px"};function en(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return n={name:r.name,styles:r.styles,next:n},r.name;if(void 0!==r.styles){var o=r.next;if(void 0!==o)for(;void 0!==o;)n={name:o.name,styles:o.styles,next:n},o=o.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var o=0;o<r.length;o++)n+=en(e,t,r[o])+";";else for(var a in r){var s=r[a];if("object"!=typeof s)null!=t&&void 0!==t[s]?n+=a+"{"+t[s]+"}":ee(s)&&(n+=et(a)+":"+er(a,s)+";");else if(Array.isArray(s)&&"string"==typeof s[0]&&(null==t||void 0===t[s[0]]))for(var i=0;i<s.length;i++)ee(s[i])&&(n+=et(a)+":"+er(a,s[i])+";");else{var c=en(e,t,s);switch(a){case"animation":case"animationName":n+=et(a)+":"+c+";";break;default:n+=a+"{"+c+"}"}}}return n}(e,t,r);case"function":if(void 0!==e){var a=n,s=r(e);return n=a,en(e,t,s)}}if(null==t)return r;var i=t[r];return void 0!==i?i:r}var eo=/label:\s*([^\s;{]+)\s*(;|$)/g;function ea(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var o,a=!0,s="";n=void 0;var i=e[0];null==i||void 0===i.raw?(a=!1,s+=en(r,t,i)):s+=i[0];for(var c=1;c<e.length;c++)s+=en(r,t,e[c]),a&&(s+=i[c]);eo.lastIndex=0;for(var l="";null!==(o=eo.exec(s));)l+="-"+o[1];return{name:function(e){for(var t,r=0,n=0,o=e.length;o>=4;++n,o-=4)t=(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))*0x5bd1e995+((t>>>16)*59797<<16),t^=t>>>24,r=(65535&t)*0x5bd1e995+((t>>>16)*59797<<16)^(65535&r)*0x5bd1e995+((r>>>16)*59797<<16);switch(o){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r^=255&e.charCodeAt(n),r=(65535&r)*0x5bd1e995+((r>>>16)*59797<<16)}return r^=r>>>13,(((r=(65535&r)*0x5bd1e995+((r>>>16)*59797<<16))^r>>>15)>>>0).toString(36)}(s)+l,styles:s,next:n}}e.s(["serializeStyles",0,ea],984110);var es=!!o.useInsertionEffect&&o.useInsertionEffect,ei=es||function(e){return e()},ec=es||o.useLayoutEffect;e.s(["useInsertionEffectAlwaysWithSyncFallback",0,ei,"useInsertionEffectWithLayoutFallback",0,ec],468162);var el=o.createContext("u">typeof HTMLElement?U({key:"css"}):null);el.Provider;var eu=function(e){return(0,o.forwardRef)(function(t,r){return e(t,(0,o.useContext)(el),r)})},ed=o.createContext({}),em={}.hasOwnProperty,ef="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",eh=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;return V(t,r,n),ei(function(){return J(t,r,n)}),null},ep=eu(function(e,t,r){var n=e.css;"string"==typeof n&&void 0!==t.registered[n]&&(n=t.registered[n]);var a=e[ef],s=[n],i="";"string"==typeof e.className?i=K(t.registered,s,e.className):null!=e.className&&(i=e.className+" ");var c=ea(s,void 0,o.useContext(ed));i+=t.key+"-"+c.name;var l={};for(var u in e)em.call(e,u)&&"css"!==u&&u!==ef&&(l[u]=e[u]);return l.className=i,r&&(l.ref=r),o.createElement(o.Fragment,null,o.createElement(eh,{cache:t,serialized:c,isStringTag:"string"==typeof a}),o.createElement(a,l))});e.s(["E",0,ep,"T",0,ed,"c",0,function(e,t){var r={};for(var n in t)em.call(t,n)&&(r[n]=t[n]);return r[ef]=e,r},"h",0,em,"i",0,!1,"w",0,eu],400474);var eg=e.i(391398);let eb=(0,o.createContext)(null),ey=eu(({children:e,cache:t},r)=>(0,eg.jsx)(eb,{value:t||r,children:e}));e.s(["MantineEmotionProvider",0,ey,"useEmotionCache",0,function(){let e=(0,o.use)(eb);if(null===e)throw Error("Emotion cache is not available in context, make sure that you have MantineEmotionProvider in the component tree");return e}],163360)},706827,e=>{"use strict";var t,r,n=e.i(648863),o=e.i(391398),a=e.i(163360),s=e.i(191788),i=e.i(984110),c=e.i(809440),l=e.i(56206);let{cssFactory:u}={cssFactory:function(e){let{cache:t}=e,r=(...e)=>{let{ref:r,args:n}=function(e){let t;if(1!==e.length)return{args:e,ref:t};let[r]=e;if(!(r instanceof Object)||!("ref"in r))return{args:e,ref:t};t=r.ref;let n={...r};return delete n.ref,{args:[n],ref:t}}(e),o=(0,i.serializeStyles)(n,t.registered);return(0,c.insertStyles)(t,o,!1),`${t.key}-${o.name}${void 0===r?"":` ${r}`}`};return{css:r,cx:(...e)=>{var n,o;let a,s;return n=t.registered,o=(0,l.default)(e),a=[],s=(0,c.getRegisteredStyles)(n,a,o),a.length<2?o:s+r(a)}}}};var d=e.i(779177),m=e.i(366317),f=e.i(951254);function h(e){return`___ref-${e||""}`}function p(e,t){return t in e.breakpoints&&"number"!=typeof t?(0,m.px)(e.breakpoints[t]):(0,m.px)(t)}function g(e){let t="function"==typeof e?e:()=>e;return function(e){var r,n;let o,i,c=(0,f.useMantineTheme)(),l=t(c,e,{light:'[data-mantine-color-scheme="light"] &',dark:'[data-mantine-color-scheme="dark"] &',rtl:'[dir="rtl"] &',ltr:'[dir="ltr"] &',notRtl:'[dir="ltr"] &',notLtr:'[dir="rtl"] &',ref:h,smallerThan:e=>`@media (max-width: ${(0,d.em)(p(c,e)-.1)})`,largerThan:e=>`@media (min-width: ${(0,d.em)(p(c,e))})`}),{css:m,cx:g}=(o=(0,a.useEmotionCache)(),r=()=>u({cache:o}),n=[o],(!(i=(0,s.useRef)(null)).current||n.length!==i.current.prevDeps.length||i.current.prevDeps.map((e,t)=>e===n[t]).indexOf(!1)>=0)&&(i.current={v:r(),prevDeps:[...n]}),i.current.v);return{classes:Object.keys(l).reduce((e,t)=>(e[t]=m(l[t]),e),{}),cx:g,theme:c}}}let b=`
import { createStyles } from '@mantine/emotion';

const useStyles = createStyles((theme, _, u) => ({
  wrapper: {
    maxWidth: 400,
    width: '100%',
    height: 180,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: theme.radius.sm,

    // Use light and dark selectors to change styles based on color scheme
    [u.light]: {
      backgroundColor: theme.colors.gray[1],
    },

    [u.dark]: {
      backgroundColor: theme.colors.dark[5],
    },

    // Reference theme.breakpoints in smallerThan and largerThan functions
    [u.smallerThan('sm')]: {
      // Child reference in nested selectors via ref
      [\`& .\${u.ref('child')}\`]: {
        fontSize: theme.fontSizes.xs,
      },
    },
  },

  child: {
    // Assign selector to a ref to reference it in other styles
    ref: u.ref('child'),
    padding: theme.spacing.md,
    borderRadius: theme.radius.sm,
    boxShadow: theme.shadows.md,

    [u.light]: {
      backgroundColor: theme.white,
      color: theme.black,
    },

    [u.dark]: {
      backgroundColor: theme.colors.dark[8],
      color: theme.white,
    },
  },
}));

function Demo() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.child}>createStyles demo</div>
    </div>
  );
}
`,y=g((e,t,r)=>({wrapper:{maxWidth:400,width:"100%",height:180,display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"auto",marginRight:"auto",borderRadius:e.radius.sm,[r.light]:{backgroundColor:e.colors.gray[1]},[r.dark]:{backgroundColor:e.colors.dark[5]},[r.smallerThan("sm")]:{[`& .${r.ref("child")}`]:{fontSize:e.fontSizes.xs}}},child:{ref:r.ref("child"),padding:e.spacing.md,borderRadius:e.radius.sm,boxShadow:e.shadows.md,[r.light]:{backgroundColor:e.white,color:e.black},[r.dark]:{backgroundColor:e.colors.dark[8],color:e.white}}})),v={type:"code",component:function(){let{classes:e}=y();return(0,o.jsx)("div",{className:e.wrapper,children:(0,o.jsx)("div",{className:e.child,children:"createStyles demo"})})},code:b,defaultExpanded:!1},k=`
import { createStyles } from '@mantine/emotion';

const useStyles = createStyles((theme, _, u) => ({
  button: {
    // assign reference to selector
    ref: u.ref('button'),

    // and add any other properties
    backgroundColor: theme.colors.blue[6],
    color: theme.white,
    padding: \`\${theme.spacing.sm} \${theme.spacing.lg}\`,
    borderRadius: theme.radius.md,
    cursor: 'pointer',
    border: 0,
  },

  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing.xl,

    [u.light]: {
      backgroundColor: theme.colors.gray[1],
    },

    [u.dark]: {
      backgroundColor: theme.colors.dark[8],
    },

    // reference button with nested selector
    [\`&:hover .\${u.ref('button')}\`]: {
      backgroundColor: theme.colors.violet[6],
    },
  },
}));

function Demo() {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <button className={classes.button} type="button">
        Hover container to change button color
      </button>
    </div>
  );
}
`,x=g((e,t,r)=>({button:{ref:r.ref("button"),backgroundColor:e.colors.blue[6],color:e.white,padding:`${e.spacing.sm} ${e.spacing.lg}`,borderRadius:e.radius.md,cursor:"pointer",border:0},container:{display:"flex",justifyContent:"center",padding:e.spacing.xl,[r.light]:{backgroundColor:e.colors.gray[1]},[r.dark]:{backgroundColor:e.colors.dark[8]},[`&:hover .${r.ref("button")}`]:{backgroundColor:e.colors.violet[6]}}})),w={type:"code",component:function(){let{classes:e}=x();return(0,o.jsx)("div",{className:e.container,children:(0,o.jsx)("button",{className:e.button,type:"button",children:"Hover container to change button color"})})},code:k,defaultExpanded:!1},C=`
import { useState } from 'react';
import { createStyles } from '@mantine/emotion';

const useStyles = createStyles((theme, _, u) => ({
  button: {
    border: 0,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    cursor: 'pointer',
    margin: theme.spacing.md,
    lineHeight: 1,

    [u.light]: {
      backgroundColor: theme.colors.gray[1],
    },

    [u.dark]: {
      backgroundColor: theme.colors.dark[5],
    },
  },

  active: {
    color: theme.white,

    [u.light]: {
      backgroundColor: theme.colors.blue[6],
    },
    [u.dark]: {
      backgroundColor: theme.colors.blue[8],
    },
  },
}));

function Demo() {
  const [active, setActive] = useState(0);
  const { classes, cx } = useStyles();

  return (
    <div>
      <button
        className={cx(classes.button, { [classes.active]: active === 0 })}
        onClick={() => setActive(0)}
        type="button"
      >
        First
      </button>
      <button
        className={cx(classes.button, { [classes.active]: active === 1 })}
        onClick={() => setActive(1)}
        type="button"
      >
        Second
      </button>
    </div>
  );
}
`,S=g((e,t,r)=>({button:{border:0,borderRadius:e.radius.md,padding:e.spacing.md,cursor:"pointer",margin:e.spacing.md,lineHeight:1,[r.light]:{backgroundColor:e.colors.gray[1]},[r.dark]:{backgroundColor:e.colors.dark[5]}},active:{color:e.white,[r.light]:{backgroundColor:e.colors.blue[6]},[r.dark]:{backgroundColor:e.colors.blue[8]}}})),$={type:"code",component:function(){let[e,t]=(0,s.useState)(0),{classes:r,cx:n}=S();return(0,o.jsxs)("div",{children:[(0,o.jsx)("button",{className:n(r.button,{[r.active]:0===e}),onClick:()=>t(0),type:"button",children:"First"}),(0,o.jsx)("button",{className:n(r.button,{[r.active]:1===e}),onClick:()=>t(1),type:"button",children:"Second"})]})},code:C,defaultExpanded:!1},E=`
import { createStyles } from '@mantine/emotion';

const useStyles = createStyles((theme) => ({
  button: {
    color: theme.white,
    backgroundColor: theme.colors.blue[6],
    border: 0,
    borderRadius: theme.radius.md,
    padding: \`\${theme.spacing.sm} \${theme.spacing.lg}\`,
    cursor: 'pointer',
    margin: theme.spacing.md,

    // Use pseudo-classes just like you would in Sass
    '&:hover': {
      backgroundColor: theme.colors.blue[9],
    },

    '&:not(:first-of-type)': {
      backgroundColor: theme.colors.violet[6],

      // pseudo-classes can be nested
      '&:hover': {
        backgroundColor: theme.colors.violet[9],
      },
    },
  },
}));

function Demo() {
  const { classes } = useStyles();
  return (
    <div>
      <button type="button" className={classes.button}>
        First
      </button>
      <button type="button" className={classes.button}>
        Second
      </button>
      <button type="button" className={classes.button}>
        Third
      </button>
    </div>
  );
}
`,N=g(e=>({button:{color:e.white,backgroundColor:e.colors.blue[6],border:0,borderRadius:e.radius.md,padding:`${e.spacing.sm} ${e.spacing.lg}`,cursor:"pointer",margin:e.spacing.md,"&:hover":{backgroundColor:e.colors.blue[9]},"&:not(:first-of-type)":{backgroundColor:e.colors.violet[6],"&:hover":{backgroundColor:e.colors.violet[9]}}}})),j={type:"code",component:function(){let{classes:e}=N();return(0,o.jsxs)("div",{children:[(0,o.jsx)("button",{type:"button",className:e.button,children:"First"}),(0,o.jsx)("button",{type:"button",className:e.button,children:"Second"}),(0,o.jsx)("button",{type:"button",className:e.button,children:"Third"})]})},code:E,defaultExpanded:!1},A=`
import { createStyles } from '@mantine/emotion';

interface ButtonProps {
  color: 'blue' | 'violet';
  radius: number;
}

const useStyles = createStyles((theme, { color, radius }: ButtonProps) => ({
  button: {
    color: theme.white,
    backgroundColor: theme.colors[color][6],
    borderRadius: radius,
    padding: theme.spacing.md,
    margin: theme.spacing.md,
    border: 0,
    cursor: 'pointer',
  },
}));

function Button({ color, radius }: ButtonProps) {
  const { classes } = useStyles({ color, radius });
  return (
    <button type="button" className={classes.button}>
      {color} button with {radius} radius
    </button>
  );
}

function Demo() {
  return (
    <>
      <Button color="blue" radius={5} />
      <Button color="violet" radius={50} />
    </>
  );
}
`,O=g((e,{color:t,radius:r})=>({button:{color:e.white,backgroundColor:e.colors[t][6],borderRadius:r,padding:e.spacing.md,margin:e.spacing.md,border:0,cursor:"pointer"}}));function _({color:e,radius:t}){let{classes:r}=O({color:e,radius:t});return(0,o.jsxs)("button",{type:"button",className:r.button,children:[e," button with ",t," radius"]})}let T={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(_,{color:"blue",radius:5}),(0,o.jsx)(_,{color:"violet",radius:50})]})},code:A,defaultExpanded:!1};var R=e.i(632057);let P=`
import { em, getBreakpointValue } from '@mantine/core';
import { createStyles } from '@mantine/emotion';

const useStyles = createStyles((theme, _, u) => ({
  container: {
    height: 100,
    backgroundColor: theme.colors.blue[6],

    // Media query with value from theme
    [\`@media (max-width: \${em(getBreakpointValue(theme.breakpoints.xl, theme.breakpoints) - 1)})\`]: {
      backgroundColor: theme.colors.pink[6],
    },

    // Simplify media query writing with theme functions
    [u.smallerThan('lg')]: {
      backgroundColor: theme.colors.yellow[6],
    },

    // Static media query
    [\`@media (max-width: \${em(800)})\`]: {
      backgroundColor: theme.colors.orange[6],
    },
  },
}));

function Demo() {
  const { classes } = useStyles();
  return <div className={classes.container} />;
}
`,D=g((e,t,r)=>({container:{height:100,backgroundColor:e.colors.blue[6],[`@media (max-width: ${(0,d.em)((0,R.getBreakpointValue)(e.breakpoints.xl,e.breakpoints)-1)})`]:{backgroundColor:e.colors.pink[6]},[r.smallerThan("lg")]:{backgroundColor:e.colors.yellow[6]},[`@media (max-width: ${(0,d.em)(800)})`]:{backgroundColor:e.colors.orange[6]}}})),z={type:"code",component:function(){let{classes:e}=D();return(0,o.jsx)("div",{className:e.container})},code:P,defaultExpanded:!1};var M=e.i(400474);e.i(468162),e.i(734980);var F=function(e,t){var r=arguments;if(null==t||!M.h.call(t,"css"))return s.createElement.apply(void 0,r);var n=r.length,o=Array(n);o[0]=M.E,o[1]=(0,M.c)(e,t);for(var a=2;a<n;a++)o[a]=r[a];return s.createElement.apply(null,o)};function I(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,i.serializeStyles)(t)}t=F||(F={}),r||(r=t.JSX||(t.JSX={}));let B=`
import { createStyles, keyframes } from '@mantine/emotion';

// Export animation to reuse it in other components
export const bounce = keyframes({
  'from, 20%, 53%, 80%, to': { transform: 'translate3d(0, 0, 0)' },
  '40%, 43%': { transform: 'translate3d(0, -30px, 0)' },
  '70%': { transform: 'translate3d(0, -15px, 0)' },
  '90%': { transform: 'translate3d(0, -4px, 0)' },
});

const useStyles = createStyles((theme) => ({
  container: {
    textAlign: 'center',
    padding: theme.spacing.xl,
    animation: \`\${bounce} 3s ease-in-out infinite\`,
  },
}));

function Demo() {
  const { classes } = useStyles();
  return <div className={classes.container}>Keyframes demo</div>;
}
`,L=function(){var e=I.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}({"from, 20%, 53%, 80%, to":{transform:"translate3d(0, 0, 0)"},"40%, 43%":{transform:"translate3d(0, -30px, 0)"},"70%":{transform:"translate3d(0, -15px, 0)"},"90%":{transform:"translate3d(0, -4px, 0)"}}),W=g((e,t,r)=>({container:{textAlign:"center",padding:e.spacing.xl,animation:`${L} 3s ease-in-out infinite`,[r.light]:{color:e.black},[r.dark]:{color:e.white}}})),G={type:"code",component:function(){let{classes:e}=W();return(0,o.jsx)("div",{className:e.container,children:"Keyframes demo"})},code:B,defaultExpanded:!1};var H=(0,n.__exportAll)({composition:()=>w,cx:()=>$,keyframes:()=>G,media:()=>z,parameters:()=>T,pseudo:()=>j,usage:()=>v});e.s(["EmotionDemos",0,H],706827)}]);