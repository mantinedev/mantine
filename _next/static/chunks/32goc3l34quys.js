(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,i)=>{let o={};for(var n in e)t(o,n,{get:e[n],enumerable:!0});return i||t(o,Symbol.toStringTag,{value:"Module"}),o}])},462138,e=>{"use strict";var t=e.i(779177),i=e.i(391398);function o({style:e,size:n=16,...l}){return(0,i.jsx)("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...e,width:(0,t.rem)(n),height:(0,t.rem)(n),display:"block"},...l,children:(0,i.jsx)("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}o.displayName="@mantine/core/AccordionChevron",e.s(["AccordionChevron",0,o])},257177,e=>{"use strict";var t=e.i(433512),i=e.i(481178),o=e.i(317477),n=e.i(44091),l=e.i(391466),a=e.i(956449),r=e.i(232471),s={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"},c=e.i(391398);let d=(0,i.createVarsResolver)((e,{radius:i,color:n,gradient:l,variant:a,size:r,autoContrast:s,circle:c})=>{let d=e.variantColorResolver({color:n||e.primaryColor,theme:e,gradient:l,variant:a||"filled",autoContrast:s});return{root:{"--badge-height":(0,t.getSize)(r,"badge-height"),"--badge-padding-x":(0,t.getSize)(r,"badge-padding-x"),"--badge-fz":(0,t.getSize)(r,"badge-fz"),"--badge-radius":c||void 0===i?void 0:(0,t.getRadius)(i),"--badge-bg":n||a?d.background:void 0,"--badge-color":n||a?d.color:void 0,"--badge-bd":n||a?d.border:void 0,"--badge-dot-color":"dot"===a?(0,o.getThemeColor)(n,e):void 0}}}),h=(0,a.polymorphicFactory)(e=>{let t=(0,n.useProps)("Badge",null,e),{classNames:i,className:o,style:a,styles:h,unstyled:u,vars:m,radius:p,color:f,gradient:b,leftSection:x,rightSection:g,children:v,variant:k,fullWidth:C,autoContrast:y,circle:S,mod:A,attributes:j,...R}=t,w=(0,l.useStyles)({name:"Badge",props:t,classes:s,className:o,style:a,classNames:i,styles:h,unstyled:u,attributes:j,vars:m,varsResolver:d});return(0,c.jsxs)(r.Box,{variant:k,mod:[{block:C,circle:S,"with-right-section":!!g,"with-left-section":!!x},A],...w("root",{variant:k}),...R,children:[x&&(0,c.jsx)("span",{...w("section"),"data-position":"left",children:x}),(0,c.jsx)("span",{...w("label"),children:v}),g&&(0,c.jsx)("span",{...w("section"),"data-position":"right",children:g})]})});h.classes=s,h.varsResolver=d,h.displayName="@mantine/core/Badge",e.s(["Badge",0,h],257177)},530514,e=>{"use strict";e.s(["createTheme",0,function(e){return e}])},463044,e=>{"use strict";let t;var i=e.i(191788),o=e.i(730943);function n(e,t,i){let o,n=i.initialDeps??[],l=!0;function a(){let a=e();return(a.length!==n.length||a.some((e,t)=>n[t]!==e))&&(n=a,o=t(...a),(null==i?void 0:i.onChange)&&!(l&&i.skipInitialOnChange)&&i.onChange(o),l=!1),o}return a.updateDeps=e=>{n=e},a}function l(e,t){if(void 0!==e)return e;throw Error(`Unexpected undefined${t?`: ${t}`:""}`)}e.i(350461);let a=()=>{if(void 0!==t)return t;if("u"<typeof navigator)return t=!1;if(/iP(hone|od|ad)/.test(navigator.userAgent))return t=!0;let e=navigator.maxTouchPoints;return t="MacIntel"===navigator.platform&&void 0!==e&&e>0},r=e=>{let{offsetWidth:t,offsetHeight:i}=e;return{width:t,height:i}},s=e=>e,c=e=>{let t=Math.max(e.startIndex-e.overscan,0),i=Math.min(e.endIndex+e.overscan,e.count-1)-t+1,o=Array(i);for(let e=0;e<i;e++)o[e]=t+e;return o},d=(e,t)=>{let i=e.scrollElement;if(!i)return;let o=e.targetWindow;if(!o)return;let n=e=>{let{width:i,height:o}=e;t({width:Math.round(i),height:Math.round(o)})};if(n(r(i)),!o.ResizeObserver)return()=>{};let l=new o.ResizeObserver(t=>{let o=()=>{let e=t[0];if(null==e?void 0:e.borderBoxSize){let t=e.borderBoxSize[0];if(t)return void n({width:t.inlineSize,height:t.blockSize})}n(r(i))};e.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(o):o()});return l.observe(i,{box:"border-box"}),()=>{l.unobserve(i)}},h={passive:!0},u="u"<typeof window||"onscrollend"in window,m=(e,t)=>((e,t,i)=>{var o,n;let l,a=e.scrollElement;if(!a)return;let r=e.targetWindow;if(!r)return;let s=e.options.useScrollendEvent&&u,c=0,d=s?null:(o=()=>t(c,!1),n=e.options.isScrollingResetDelay,function(...e){r.clearTimeout(l),l=r.setTimeout(()=>o.apply(this,e),n)}),m=e=>()=>{c=i(a),null==d||d(),t(c,e)},p=m(!0),f=m(!1);return a.addEventListener("scroll",p,h),s&&a.addEventListener("scrollend",f,h),()=>{a.removeEventListener("scroll",p),s&&a.removeEventListener("scrollend",f)}})(e,t,t=>{let{horizontal:i,isRtl:o}=e.options;return i?t.scrollLeft*(o&&-1||1):t.scrollTop}),p=(e,t,i)=>{if(i.options.useCachedMeasurements){let t=i.indexFromElement(e),o=i.options.getItemKey(t);return i.itemSizeCache.get(o)??i.options.estimateSize(t)}if(null==t?void 0:t.borderBoxSize){let e=t.borderBoxSize[0];if(e)return Math.round(e[i.options.horizontal?"inlineSize":"blockSize"])}if(!t){let t=i.indexFromElement(e),o=i.options.getItemKey(t),n=i.itemSizeCache.get(o);if(void 0!==n)return n}return e[i.options.horizontal?"offsetWidth":"offsetHeight"]},f=(e,{adjustments:t=0,behavior:i},o)=>{var n,l;null==(l=null==(n=o.scrollElement)?void 0:n.scrollTo)||l.call(n,{[o.options.horizontal?"left":"top"]:e+t,behavior:i})};class b{constructor(e){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollState=null,this.measurementsCache=[],this._flatMeasurements=null,this.itemSizeCache=new Map,this.itemSizeCacheVersion=0,this.laneAssignments=new Map,this.pendingMin=null,this.prevLanes=void 0,this.lanesChangedFlag=!1,this.lanesSettling=!1,this.pendingScrollAnchor=null,this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this._iosDeferredAdjustment=0,this._iosTouching=!1,this._iosJustTouchEnded=!1,this._iosTouchEndTimerId=null,this._intendedScrollOffset=null,this.elementsCache=new Map,this.now=()=>{var e,t,i;return(null==(i=null==(t=null==(e=this.targetWindow)?void 0:e.performance)?void 0:t.now)?void 0:i.call(t))??Date.now()},this.observer=(()=>{let e=null,t=()=>e||(this.targetWindow&&this.targetWindow.ResizeObserver?e=new this.targetWindow.ResizeObserver(e=>{e.forEach(e=>{let t=()=>{let t=e.target,i=this.indexFromElement(t);if(!t.isConnected){for(let[e,i]of(this.observer.unobserve(t),this.elementsCache))if(i===t){this.elementsCache.delete(e);break}return}this.shouldMeasureDuringScroll(i)&&this.resizeItem(i,this.options.measureElement(t,e,this))};this.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(t):t()})}):null);return{disconnect:()=>{var i;null==(i=t())||i.disconnect(),e=null},observe:e=>{var i;return null==(i=t())?void 0:i.observe(e,{box:"border-box"})},unobserve:e=>{var i;return null==(i=t())?void 0:i.unobserve(e)}}})(),this.range=null,this.setOptions=e=>{var t,i;let o={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:s,rangeExtractor:c,onChange:()=>{},measureElement:p,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,anchorTo:"start",followOnAppend:!1,scrollEndThreshold:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,useScrollendEvent:!1,useAnimationFrameWithResizeObserver:!1,laneAssignmentMode:"estimate",useCachedMeasurements:!1};for(let t in e){let i=e[t];void 0!==i&&(o[t]=i)}let n=this.options,l=null,a=null,r=!1;if(void 0!==n&&n.enabled&&o.enabled&&"end"===o.anchorTo&&null!==this.scrollElement){let e=n.count,s=o.count,c=this.getMeasurements(),d=e>0?(null==(t=c[0])?void 0:t.key)??n.getItemKey(0):null,h=e>0?(null==(i=c[e-1])?void 0:i.key)??n.getItemKey(e-1):null;if(s!==e||e>0&&s>0&&(o.getItemKey(0)!==d||o.getItemKey(s-1)!==h)){r=!0;let t=e>0?this.getVirtualItemForOffset(this.getScrollOffset())??c[0]:null;t&&(l=[t.key,this.getScrollOffset()-t.start]);let i=!0===o.followOnAppend?"auto":o.followOnAppend||null;i&&s>e&&this.isAtEnd(n.scrollEndThreshold)&&(0===e||o.getItemKey(s-1)!==h)&&(a=i)}}this.options=o,r&&(this.pendingMin=0,this.itemSizeCacheVersion++);let d=!1,h=0;if(l&&null!==this.scrollOffset){let[e,t]=l,i=this.getMeasurements(),{count:o,getItemKey:n}=this.options,a=0;for(;a<o&&n(a)!==e;)a++;if(a<o){let e=i[a];if(e){let i=e.start+t;i!==this.scrollOffset&&(h=i-this.scrollOffset,this.scrollOffset=i,d=!0)}}}(d||a)&&(this.pendingScrollAnchor=[d?l[0]:null,d?l[1]:0,a,h])},this.notify=e=>{var t,i;null==(i=(t=this.options).onChange)||i.call(t,this,e)},this.maybeNotify=n(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),e=>{this.notify(e)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(e=>e()),this.unsubs=[],this.observer.disconnect(),null!=this.rafId&&this.targetWindow&&(this.targetWindow.cancelAnimationFrame(this.rafId),this.rafId=null),this.scrollState=null,this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var e;let t=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==t){if(this.cleanup(),!t)return void this.maybeNotify();if(this.scrollElement=t,this.scrollElement&&"ownerDocument"in this.scrollElement?this.targetWindow=this.scrollElement.ownerDocument.defaultView:this.targetWindow=(null==(e=this.scrollElement)?void 0:e.window)??null,this.elementsCache.forEach(e=>{this.observer.observe(e)}),this.unsubs.push(this.options.observeElementRect(this,e=>{this.scrollRect=e,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(e,t)=>{if(t&&null===this._intendedScrollOffset&&e===this.scrollOffset)return;null!==this._intendedScrollOffset&&1.5>Math.abs(e-this._intendedScrollOffset)&&(e=this._intendedScrollOffset),this._intendedScrollOffset=null,this.scrollAdjustments=0;let i=this.getScrollOffset();this.scrollDirection=t?i===e?this.scrollDirection:i<e?"forward":"backward":null,this.scrollOffset=e,this.isScrolling=t,this._flushIosDeferredIfReady(),this.scrollState&&this.scheduleScrollReconcile(),this.maybeNotify()})),"addEventListener"in this.scrollElement){let e=this.scrollElement,t=()=>{this._iosTouching=!0,this._iosJustTouchEnded=!1,null!==this._iosTouchEndTimerId&&null!=this.targetWindow&&(this.targetWindow.clearTimeout(this._iosTouchEndTimerId),this._iosTouchEndTimerId=null)},i=()=>{this._iosTouching=!1,a()&&null!=this.targetWindow&&(this._iosJustTouchEnded=!0,this._iosTouchEndTimerId=this.targetWindow.setTimeout(()=>{this._iosJustTouchEnded=!1,this._iosTouchEndTimerId=null,this._flushIosDeferredIfReady()},150))};e.addEventListener("touchstart",t,h),e.addEventListener("touchend",i,h),this.unsubs.push(()=>{e.removeEventListener("touchstart",t),e.removeEventListener("touchend",i),null!==this._iosTouchEndTimerId&&null!=this.targetWindow&&(this.targetWindow.clearTimeout(this._iosTouchEndTimerId),this._iosTouchEndTimerId=null)})}this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0})}let i=this.pendingScrollAnchor;if(this.pendingScrollAnchor=null,i&&this.scrollElement&&this.options.enabled){let[e,t,o,n]=i;null===e||o||(a()&&(this.isScrolling||this._iosTouching||this._iosJustTouchEnded)?0!==n&&(this._iosDeferredAdjustment+=n):this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0})),o&&this.scrollToEnd({behavior:o})}},this._flushIosDeferredIfReady=()=>{if(0===this._iosDeferredAdjustment||this.isScrolling||this._iosTouching||this._iosJustTouchEnded)return;let e=this.getScrollOffset(),t=this.getMaxScrollOffset();if(e<0||e>t)return;let i=this._iosDeferredAdjustment;this._iosDeferredAdjustment=0,this._scrollToOffset(e,{adjustments:this.scrollAdjustments+=i,behavior:void 0})},this.rafId=null,this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??("function"==typeof this.options.initialOffset?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(e,t)=>{let i=new Map,o=new Map;for(let n=t-1;n>=0;n--){let t=e[n];if(i.has(t.lane))continue;let l=o.get(t.lane);if(null==l||t.end>l.end?o.set(t.lane,t):t.end<l.end&&i.set(t.lane,!0),i.size===this.options.lanes)break}return o.size===this.options.lanes?Array.from(o.values()).sort((e,t)=>e.end===t.end?e.index-t.index:e.end-t.end)[0]:void 0},this.getMeasurementOptions=n(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled,this.options.lanes,this.options.laneAssignmentMode],(e,t,i,o,n,l,a)=>(void 0!==this.prevLanes&&this.prevLanes!==l&&(this.lanesChangedFlag=!0),this.prevLanes=l,this.pendingMin=null,{count:e,paddingStart:t,scrollMargin:i,getItemKey:o,enabled:n,lanes:l,laneAssignmentMode:a}),{key:!1}),this.getMeasurements=n(()=>[this.getMeasurementOptions(),this.itemSizeCacheVersion],({count:e,paddingStart:t,scrollMargin:i,getItemKey:o,enabled:n,lanes:l,laneAssignmentMode:a},r)=>{let s=this.itemSizeCache;if(!n)return this.measurementsCache=[],this.itemSizeCache.clear(),this.laneAssignments.clear(),[];if(this.laneAssignments.size>e)for(let t of this.laneAssignments.keys())t>=e&&this.laneAssignments.delete(t);this.lanesChangedFlag&&(this.lanesChangedFlag=!1,this.lanesSettling=!0,this.measurementsCache=[],this.itemSizeCache.clear(),this.laneAssignments.clear(),this.pendingMin=null),0!==this.measurementsCache.length||this.lanesSettling||(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(e=>{this.itemSizeCache.set(e.key,e.size)}));let c=this.lanesSettling?0:this.pendingMin??0;if(this.pendingMin=null,this.lanesSettling&&this.measurementsCache.length===e&&(this.lanesSettling=!1),1===l){var d;let n,l=this.options.gap,a=2*e,r=this._flatMeasurements;if(!r||r.length<a){let e=new Float64Array(a);r&&c>0&&e.set(r.subarray(0,2*c)),r=e,this._flatMeasurements=r}if(0===c)n=t+i;else{let e=c-1;n=r[2*e]+r[2*e+1]+l}for(let t=c;t<e;t++){let e=o(t),i=s.get(e),a="number"==typeof i?i:this.options.estimateSize(t);r[2*t]=n,r[2*t+1]=a,n+=a+l}let h=(d=r,new Proxy(Array(e),{get(t,i,n){if("string"==typeof i){let n=i.charCodeAt(0);if(n>=48&&n<=57){let n=+i;if(Number.isInteger(n)&&n>=0&&n<e){let e=t[n];if(!e){let i=d[2*n];e=t[n]={index:n,key:o(n),start:i,size:d[2*n+1],end:i+d[2*n+1],lane:0}}return e}}if("length"===i)return e}return Reflect.get(t,i,n)}}));return this.measurementsCache=h,h}let h=this.measurementsCache.slice(0,c),u=Array(l).fill(void 0);for(let e=0;e<c;e++){let t=h[e];t&&(u[t.lane]=e)}for(let n=c;n<e;n++){let e,l,r=o(n),c=this.laneAssignments.get(n),d="estimate"===a||s.has(r);if(void 0!==c&&this.options.lanes>1){let o=u[e=c],n=void 0!==o?h[o]:void 0;l=n?n.end+this.options.gap:t+i}else{let o=1===this.options.lanes?h[n-1]:this.getFurthestMeasurement(h,n);l=o?o.end+this.options.gap:t+i,e=o?o.lane:n%this.options.lanes,this.options.lanes>1&&d&&this.laneAssignments.set(n,e)}let m=s.get(r),p="number"==typeof m?m:this.options.estimateSize(n),f=l+p;h[n]={index:n,start:l,size:p,end:f,key:r,lane:e},u[e]=n}return this.measurementsCache=h,h},{key:!1,debug:()=>this.options.debug}),this.calculateRange=n(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset(),this.options.lanes],(e,t,i,o)=>0===e.length||0===t?(this.range=null,null):(this.range=function(e,t,i,o,n){let l=e.length-1;if(e.length<=o)return{startIndex:0,endIndex:l};if(1===o&&null!==n){let e=function(e,t,i){let o=0;for(;o<=t;){let n=(o+t)/2|0,l=e[2*n];if(l<i)o=n+1;else{if(!(l>i))return n;t=n-1}}return o>0?o-1:0}(n,l,i),o=e,a=i+t;for(;o<l&&n[2*o]+n[2*o+1]<a;)o++;return{startIndex:e,endIndex:o}}let a=x(0,l,t=>e[t].start,i),r=a;if(1===o)for(;r<l&&e[r].end<i+t;)r++;else if(o>1){let n=Array(o).fill(0);for(;r<l&&n.some(e=>e<i+t);){let t=e[r];n[t.lane]=t.end,r++}let s=Array(o).fill(i+t);for(;a>=0&&s.some(e=>e>=i);){let t=e[a];s[t.lane]=t.start,a--}a=Math.max(0,a-a%o),r=Math.min(l,r+(o-1-r%o))}return{startIndex:a,endIndex:r}}(e,t,i,o,1===o&&null!=this._flatMeasurements?this._flatMeasurements:null),this.range),{key:!1,debug:()=>this.options.debug}),this.getVirtualIndexes=n(()=>{let e=null,t=null,i=this.calculateRange();return i&&(e=i.startIndex,t=i.endIndex),this.maybeNotify.updateDeps([this.isScrolling,e,t]),[this.options.rangeExtractor,this.options.overscan,this.options.count,e,t]},(e,t,i,o,n)=>null===o||null===n?[]:e({startIndex:o,endIndex:n,overscan:t,count:i}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=e=>{let t=this.options.indexAttribute,i=e.getAttribute(t);return i?parseInt(i,10):(console.warn(`Missing attribute name '${t}={index}' on measured element.`),-1)},this.shouldMeasureDuringScroll=e=>{var t;if(!this.scrollState||"smooth"!==this.scrollState.behavior)return!0;let i=this.scrollState.index??(null==(t=this.getVirtualItemForOffset(this.scrollState.lastTargetOffset))?void 0:t.index);if(void 0!==i&&this.range){let t=Math.max(this.options.overscan,Math.ceil((this.range.endIndex-this.range.startIndex)/2)),o=Math.max(0,i-t),n=Math.min(this.options.count-1,i+t);return e>=o&&e<=n}return!0},this.measureElement=e=>{if(!e)return void this.elementsCache.forEach((e,t)=>{e.isConnected||(this.observer.unobserve(e),this.elementsCache.delete(t))});let t=this.indexFromElement(e),i=this.options.getItemKey(t),o=this.elementsCache.get(i);o!==e&&(o&&this.observer.unobserve(o),this.observer.observe(e),this.elementsCache.set(i,e)),(!this.isScrolling||this.scrollState)&&this.shouldMeasureDuringScroll(t)&&this.resizeItem(t,this.options.measureElement(e,void 0,this))},this.resizeItem=(e,t)=>{var i,o;let n,l,a;if(e<0||e>=this.options.count)return;let r=this._flatMeasurements;if(1===this.options.lanes&&null!==r)a=this.options.getItemKey(e),l=r[2*e],n=r[2*e+1];else{let t=this.measurementsCache[e];if(!t)return;a=t.key,l=t.start,n=t.size}let s=t-(this.itemSizeCache.get(a)??n);if(0!==s){let r="end"===this.options.anchorTo&&(null==(i=this.scrollState)?void 0:i.behavior)!=="smooth"&&this.getVirtualDistanceFromEnd()<=this.options.scrollEndThreshold,c=r?this.getTotalSize():0,d=(null==(o=this.scrollState)?void 0:o.behavior)!=="smooth"&&(void 0!==this.shouldAdjustScrollPositionOnItemSizeChange?this.shouldAdjustScrollPositionOnItemSizeChange(this.measurementsCache[e]??{index:e,key:a,start:l,size:n,end:l+n,lane:0},s,this):l<this.getScrollOffset()+this.scrollAdjustments&&(!this.itemSizeCache.has(a)||"backward"!==this.scrollDirection));(null===this.pendingMin||e<this.pendingMin)&&(this.pendingMin=e),this.itemSizeCache.set(a,t),this.itemSizeCacheVersion++,r?this.applyScrollAdjustment(this.getTotalSize()-c):d&&this.applyScrollAdjustment(s),this.notify(!1)}},this.getVirtualItems=n(()=>[this.getVirtualIndexes(),this.getMeasurements()],(e,t)=>{let i=[];for(let o=0,n=e.length;o<n;o++){let n=t[e[o]];i.push(n)}return i},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=e=>{let t=this.getMeasurements();if(0===t.length)return;let i=this._flatMeasurements,o=1===this.options.lanes&&null!=i,n=x(0,t.length-1,o?e=>i[2*e]:e=>l(t[e]).start,e);return l(t[n])},this.getMaxScrollOffset=()=>{if(!this.scrollElement)return 0;if("scrollHeight"in this.scrollElement)return this.options.horizontal?this.scrollElement.scrollWidth-this.scrollElement.clientWidth:this.scrollElement.scrollHeight-this.scrollElement.clientHeight;{let e=this.scrollElement.document.documentElement;return this.options.horizontal?e.scrollWidth-this.scrollElement.innerWidth:e.scrollHeight-this.scrollElement.innerHeight}},this.getVirtualDistanceFromEnd=()=>Math.max(this.getTotalSize()-this.getSize()-this.getScrollOffset(),0),this.getDistanceFromEnd=()=>Math.max(this.getMaxScrollOffset()-this.getScrollOffset(),0),this.isAtEnd=(e=this.options.scrollEndThreshold)=>this.getDistanceFromEnd()<=e,this.getOffsetForAlignment=(e,t,i=0)=>{if(!this.scrollElement)return 0;let o=this.getSize(),n=this.getScrollOffset();return"auto"===t&&(t=e>=n+o?"end":"start"),"center"===t?e+=(i-o)/2:"end"===t&&(e-=o),Math.max(Math.min(this.getMaxScrollOffset(),e),0)},this.getOffsetForIndex=(e,t="auto")=>{e=Math.max(0,Math.min(e,this.options.count-1));let i=this.getSize(),o=this.getScrollOffset(),n=this.measurementsCache[e];if(!n)return;if("auto"===t)if(n.end>=o+i-this.options.scrollPaddingEnd)t="end";else{if(!(n.start<=o+this.options.scrollPaddingStart))return[o,t];t="start"}if("end"===t&&e===this.options.count-1)return[this.getMaxScrollOffset(),t];let l="end"===t?n.end+this.options.scrollPaddingEnd:n.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(l,t,n.size),t]},this.scrollToOffset=(e,{align:t="start",behavior:i="auto"}={})=>{let o=this.getOffsetForAlignment(e,t),n=this.now();this.scrollState={index:null,align:t,behavior:i,startedAt:n,lastTargetOffset:o,stableFrames:0},this._scrollToOffset(o,{adjustments:void 0,behavior:i}),this.scheduleScrollReconcile()},this.scrollToIndex=(e,{align:t="auto",behavior:i="auto"}={})=>{e=Math.max(0,Math.min(e,this.options.count-1));let o=this.getOffsetForIndex(e,t);if(!o)return;let[n,l]=o,a=this.now();this.scrollState={index:e,align:l,behavior:i,startedAt:a,lastTargetOffset:n,stableFrames:0},this._scrollToOffset(n,{adjustments:void 0,behavior:i}),this.scheduleScrollReconcile()},this.scrollBy=(e,{behavior:t="auto"}={})=>{let i=this.getScrollOffset()+e,o=this.now();this.scrollState={index:null,align:"start",behavior:t,startedAt:o,lastTargetOffset:i,stableFrames:0},this._scrollToOffset(i,{adjustments:void 0,behavior:t}),this.scheduleScrollReconcile()},this.scrollToEnd=({behavior:e="auto"}={})=>{this.options.count>0?this.scrollToIndex(this.options.count-1,{align:"end",behavior:e}):this.scrollToOffset(Math.max(this.getTotalSize()-this.getSize(),0),{behavior:e})},this.getTotalSize=()=>{var e;let t,i=this.getMeasurements();if(0===i.length)t=this.options.paddingStart;else if(1===this.options.lanes){let o=i.length-1,n=this._flatMeasurements;t=null!=n?n[2*o]+n[2*o+1]:(null==(e=i[o])?void 0:e.end)??0}else{let e=Array(this.options.lanes).fill(null),o=i.length-1;for(;o>=0&&e.some(e=>null===e);){let t=i[o];null===e[t.lane]&&(e[t.lane]=t.end),o--}t=Math.max(...e.filter(e=>null!==e))}return Math.max(t-this.options.scrollMargin+this.options.paddingEnd,0)},this.takeSnapshot=()=>{let e=[];if(0===this.itemSizeCache.size)return e;for(let t of this.getMeasurements())t&&this.itemSizeCache.has(t.key)&&e.push({index:t.index,key:t.key,start:t.start,size:t.size,end:t.end,lane:t.lane});return e},this._scrollToOffset=(e,{adjustments:t,behavior:i})=>{this._intendedScrollOffset=e+(t??0),this.options.scrollToFn(e,{behavior:i,adjustments:t},this)},this.measure=()=>{this.pendingMin=null,this.itemSizeCache.clear(),this.laneAssignments.clear(),this.itemSizeCacheVersion++,this.notify(!1)},this.setOptions(e)}applyScrollAdjustment(e,t){0!==e&&(a()&&(this.isScrolling||this._iosTouching||this._iosJustTouchEnded)?this._iosDeferredAdjustment+=e:(this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=e,behavior:t}),null!==this.scrollOffset&&(this.scrollOffset+=this.scrollAdjustments,this.scrollAdjustments=0)))}scheduleScrollReconcile(){if(!this.targetWindow){this.scrollState=null;return}null==this.rafId&&(this.rafId=this.targetWindow.requestAnimationFrame(()=>{this.rafId=null,this.reconcileScroll()}))}reconcileScroll(){if(!this.scrollState||!this.scrollElement)return;if(this.now()-this.scrollState.startedAt>5e3){this.scrollState=null;return}let e=null!=this.scrollState.index?this.getOffsetForIndex(this.scrollState.index,this.scrollState.align):void 0,t=e?e[0]:this.scrollState.lastTargetOffset,i=t!==this.scrollState.lastTargetOffset;if(!i&&1.01>Math.abs(t-this.getScrollOffset())){if(this.scrollState.stableFrames++,this.scrollState.stableFrames>=1){this.getScrollOffset()!==t&&this._scrollToOffset(t,{adjustments:void 0,behavior:"auto"}),this.scrollState=null;return}}else if(this.scrollState.stableFrames=0,i){let e=this.getSize()||600,i=Math.abs(t-this.getScrollOffset()),o="smooth"===this.scrollState.behavior&&i>e;this.scrollState.lastTargetOffset=t,o||(this.scrollState.behavior="auto"),this._scrollToOffset(t,{adjustments:void 0,behavior:o?"smooth":"auto"})}this.scheduleScrollReconcile()}}let x=(e,t,i,o)=>{for(;e<=t;){let n=(e+t)/2|0,l=i(n);if(l<o)e=n+1;else{if(!(l>o))return n;t=n-1}}return e>0?e-1:0},g="u">typeof document?i.useLayoutEffect:i.useEffect;e.s(["useVirtualizer",0,function(e){return function({useFlushSync:e=!0,directDomUpdates:t=!1,directDomUpdatesMode:n="transform",...l}){let a=i.useReducer(e=>e+1,0)[1],r=i.useRef({enabled:t,mode:n,container:null,lastSize:null,lastPositions:new WeakMap,prevRange:null});r.current.enabled=t,r.current.mode=n;let s=e=>{let t=r.current;if(!t.enabled||!t.container)return;let i=e.getTotalSize();if(i!==t.lastSize){t.lastSize=i;let o=e.options.horizontal?"width":"height";t.container.style[o]=`${i}px`}let o=!!e.options.horizontal,n="transform"===t.mode,l=o?"left":"top",a=e.options.scrollMargin;for(let i of e.getVirtualItems()){let r=i.start-a,s=e.elementsCache.get(i.key);s&&t.lastPositions.get(s)!==r&&(t.lastPositions.set(s,r),n?s.style.transform=o?`translate3d(${r}px, 0, 0)`:`translate3d(0, ${r}px, 0)`:s.style[l]=`${r}px`)}},c={...l,onChange:(t,i)=>{var n;let c=r.current,d=!0;if(c.enabled){s(t);let e=t.range,i=c.prevRange;(d=!i||i.isScrolling!==t.isScrolling||i.startIndex!==(null==e?void 0:e.startIndex)||i.endIndex!==(null==e?void 0:e.endIndex))&&(c.prevRange=e?{startIndex:e.startIndex,endIndex:e.endIndex,isScrolling:t.isScrolling}:null)}d&&(e&&i?(0,o.flushSync)(a):a()),null==(n=l.onChange)||n.call(l,t,i)}},[d]=i.useState(()=>{let e=new b(c);return Object.assign(e,{containerRef:t=>{let i=r.current;if(i.container=t,i.lastSize=null,t&&i.enabled){let o=e.getTotalSize();i.lastSize=o;let n=e.options.horizontal?"width":"height";t.style[n]=`${o}px`}}})});return d.setOptions(c),g(()=>d._didMount(),[]),g(()=>d._willUpdate()),g(()=>{s(d)}),d}({observeElementRect:d,observeElementOffset:m,scrollToFn:f,...e})}],463044)},89495,e=>{"use strict";var t=e.i(191788),i=e.i(171481);let o=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128ZM60,112a16,16,0,1,0,16,16A16,16,0,0,0,60,112Zm136,0a16,16,0,1,0,16,16A16,16,0,0,0,196,112Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M240,96v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80H224A16,16,0,0,1,240,96Z",opacity:"0.2"}),t.createElement("path",{d:"M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V96A16,16,0,0,0,224,80ZM60,140a12,12,0,1,1,12-12A12,12,0,0,1,60,140Zm68,0a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm68,0a12,12,0,1,1,12-12A12,12,0,0,1,196,140Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M138,128a10,10,0,1,1-10-10A10,10,0,0,1,138,128ZM60,118a10,10,0,1,0,10,10A10,10,0,0,0,60,118Zm136,0a10,10,0,1,0,10,10A10,10,0,0,0,196,118Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M136,128a8,8,0,1,1-8-8A8,8,0,0,1,136,128Zm-76-8a8,8,0,1,0,8,8A8,8,0,0,0,60,120Zm136,0a8,8,0,1,0,8,8A8,8,0,0,0,196,120Z"}))]]),n=t.forwardRef((e,n)=>t.createElement(i.default,{ref:n,...e,weights:o}));n.displayName="DotsThreeIcon",e.s(["DotsThreeIcon",0,n],89495)},96618,e=>{"use strict";function t(e,i){for(let o of i){if(o.value===e)return o;if(Array.isArray(o.children)){let i=t(e,o.children);if(i)return i}}return null}e.s(["findTreeNode",0,t,"getAllChildrenNodes",0,function e(t){return t.reduce((t,i)=>(Array.isArray(i.children)&&i.children.length>0?t.push(...e(i.children)):t.push(i.value),t),[])},"getChildrenNodesValues",0,function e(i,o,n=[]){let l=t(i,o);return l?Array.isArray(l.children)&&0!==l.children.length?(l.children.forEach(t=>{Array.isArray(t.children)&&t.children.length>0?e(t.value,o,n):n.push(t.value)}),n):[l.value]:n}])},76407,e=>{"use strict";e.s(["getAllCheckedNodes",0,function e(t,i,o=[]){let n=[];for(let l of t)if(Array.isArray(l.children)&&l.children.length>0){let t=e(l.children,i,o);if(t.currentTreeChecked.length===l.children.length){let e=t.currentTreeChecked.every(e=>e.checked),i={checked:e,indeterminate:!e,value:l.value,hasChildren:!0};n.push(i),o.push(i)}else if(t.currentTreeChecked.length>0){let e={checked:!1,indeterminate:!0,value:l.value,hasChildren:!0};n.push(e),o.push(e)}}else if(i.includes(l.value)){let e={checked:!0,indeterminate:!1,value:l.value,hasChildren:!1};n.push(e),o.push(e)}return{result:o,currentTreeChecked:n}}])},614398,e=>{"use strict";e.s(["memoize",0,function(e){let t=new Map;return(...i)=>{let o=JSON.stringify(i);if(t.has(o))return t.get(o);let n=e(...i);return t.set(o,n),n}}])},127262,183988,488400,401570,e=>{"use strict";var t=e.i(96618),i=e.i(76407),o=e.i(614398);function n(e,t,o){return 0!==o.length&&(!!o.includes(e)||(0,i.getAllCheckedNodes)(t,o).result.some(t=>t.value===e&&t.checked))}let l=(0,o.memoize)(n);function a(e,t,o){return 0!==o.length&&(0,i.getAllCheckedNodes)(t,o).result.some(t=>t.value===e&&t.indeterminate)}e.s(["isNodeChecked",0,n,"memoizedIsNodeChecked",0,l],183988);let r=(0,o.memoize)(a);e.s(["isNodeIndeterminate",0,a,"memoizedIsNodeIndeterminate",0,r],488400);var s=e.i(191788),c=e.i(579560);function d(e,t,i,o={}){return t.forEach(t=>{o[t.value]=t.value in e?e[t.value]:t.value===i,Array.isArray(t.children)&&d(e,t.children,i,o)}),o}function h(e,t){return("string"==typeof t.label?t.label:t.value).toLowerCase().includes(e.toLowerCase().trim())}e.s(["getTreeExpandedState",0,function(e,t){let i=d({},e,[]);if("*"===t){let e={},t=Object.keys(i);for(let i=0;i<t.length;i++)e[t[i]]=!0;return e}return t.forEach(e=>{i[e]=!0}),i},"useTree",0,function({initialSelectedState:e=[],expandedState:o,initialCheckedState:n=[],checkedState:a,initialExpandedState:h={},selectedState:u,multiple:m=!1,onNodeCollapse:p,onNodeExpand:f,onCheckedStateChange:b,onSelectedStateChange:x,onExpandedStateChange:g,onLoadChildren:v,checkStrictly:k=!1}={}){let[C,y]=(0,s.useState)([]),[S,A]=(0,c.useUncontrolled)({value:o,defaultValue:h,finalValue:{},onChange:g}),[j,R]=(0,c.useUncontrolled)({value:u,defaultValue:e,finalValue:[],onChange:x}),[w,E]=(0,c.useUncontrolled)({value:a,defaultValue:n,finalValue:[],onChange:b}),[T,M]=(0,s.useState)(null),V=(0,s.useRef)(new Set),I=(0,s.useRef)(new Set),[z,D]=(0,s.useState)([]),[O,G]=(0,s.useState)({}),Z=(0,s.useCallback)(e=>{A(d(S,e,j)),E(function(e,i,o){if(o)return e;let n=[];return e.forEach(e=>n.push(...(0,t.getChildrenNodesValues)(e,i))),Array.from(new Set(n))}(w,e,k)),y(e)},[j,w,S,k]),F=(0,s.useCallback)(async e=>{if(v&&!(V.current.has(e)||I.current.has(e))){V.current.add(e),D(Array.from(V.current)),G(t=>{if(!(e in t))return t;let i={...t};return delete i[e],i});try{await v(e),I.current.add(e)}catch(i){let t=i instanceof Error?i:Error(String(i));G(i=>({...i,[e]:t}))}finally{V.current.delete(e),D(Array.from(V.current))}}},[v]),_=(0,s.useCallback)(e=>{if(!v)return;let i=(0,t.findTreeNode)(e,C);i&&i.hasChildren&&!Array.isArray(i.children)&&F(e)},[v,C,F]),H=(0,s.useCallback)(e=>{let t={...S,[e]:!S[e]};t[e]?f?.(e):p?.(e),t[e]&&_(e),A(t)},[p,f,S,_]),N=(0,s.useCallback)(e=>{!1!==S[e]&&p?.(e),A({...S,[e]:!1})},[p,S]),L=(0,s.useCallback)(e=>{!0!==S[e]&&f?.(e),_(e),A({...S,[e]:!0})},[f,S,_]),W=(0,s.useCallback)(()=>{let e={...S};Object.keys(e).forEach(t=>{e[t]=!0,_(t)}),A(e)},[S,_]),P=(0,s.useCallback)(()=>{let e={...S};Object.keys(e).forEach(t=>{e[t]=!1}),A(e)},[S]),B=(0,s.useCallback)(e=>m?j.includes(e)?(M(null),j.filter(t=>t!==e)):void(M(e),R([...j,e])):j.includes(e)?(M(null),[]):(M(e),[e]),[j]),q=(0,s.useCallback)(e=>{M(e),R(m?j.includes(e)?j:[...j,e]:[e])},[j]),K=(0,s.useCallback)(e=>{T===e&&M(null),R(j.filter(t=>t!==e))},[j]),U=(0,s.useCallback)(()=>{R([]),M(null)},[]),J=(0,s.useCallback)(e=>{k?w.includes(e)||E([...w,e]):E(Array.from(new Set([...w,...(0,t.getChildrenNodesValues)(e,C)])))},[C,w,k]),$=(0,s.useCallback)(e=>{if(k)E(w.filter(t=>t!==e));else{let i=(0,t.getChildrenNodesValues)(e,C);E(w.filter(e=>!i.includes(e)))}},[C,w,k]),X=(0,s.useCallback)(()=>{k?E(function e(t){let i=[];for(let o of t)i.push(o.value),Array.isArray(o.children)&&o.children.length>0&&i.push(...e(o.children));return i}(C)):E((0,t.getAllChildrenNodes)(C))},[C,k]),Y=(0,s.useCallback)(()=>{E([])},[]),Q=(0,s.useCallback)(()=>k?w.map(e=>{let i=(0,t.findTreeNode)(e,C);return{checked:!0,indeterminate:!1,value:e,hasChildren:!!i&&(Array.isArray(i.children)&&i.children.length>0||!!i.hasChildren)}}):(0,i.getAllCheckedNodes)(C,w).result,[k,w,C]),ee=(0,s.useCallback)(e=>k?w.includes(e):l(e,C,w),[k,w,C]),et=(0,s.useCallback)(e=>!k&&r(e,C,w),[k,w,C]),ei=(0,s.useCallback)(e=>z.includes(e),[z]),eo=(0,s.useCallback)(e=>O[e]||null,[O]),en=(0,s.useCallback)(e=>{I.current.delete(e),G(t=>{if(!(e in t))return t;let i={...t};return delete i[e],i})},[]);return(0,s.useMemo)(()=>({checkStrictly:k,multiple:m,expandedState:S,selectedState:j,checkedState:w,anchorNode:T,initialize:Z,toggleExpanded:H,collapse:N,expand:L,expandAllNodes:W,collapseAllNodes:P,setExpandedState:A,checkNode:J,uncheckNode:$,checkAllNodes:X,uncheckAllNodes:Y,setCheckedState:E,toggleSelected:B,select:q,deselect:K,clearSelected:U,setSelectedState:R,getCheckedNodes:Q,isNodeChecked:ee,isNodeIndeterminate:et,isNodeLoading:ei,getNodeLoadError:eo,loadNode:F,invalidateNode:en}),[k,m,S,j,w,T,Z,H,N,L,W,P,A,J,$,X,Y,E,B,q,K,U,R,Q,ee,et,ei,eo,F,en])}],127262),e.s(["defaultTreeNodeFilter",0,h,"filterTreeData",0,function e(t,i,o=h){if(!i.trim())return t;let n=[];for(let l of t){let t=o(i,l),a=Array.isArray(l.children)&&l.children.length>0?e(l.children,i,o):[];(t||a.length>0)&&n.push(a.length>0?{...l,children:a}:{...l})}return n}],401570)},540413,235209,e=>{"use strict";var t=e.i(191788),i=e.i(171481);let o=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M248.23,112.31A20,20,0,0,0,232,104H220V88a20,20,0,0,0-20-20H132L105.34,48a20.12,20.12,0,0,0-12-4H40A20,20,0,0,0,20,64V208a12,12,0,0,0,12,12H211.1a12,12,0,0,0,11.33-8l28.49-81.47.06-.17A20,20,0,0,0,248.23,112.31ZM92,68l28.8,21.6A12,12,0,0,0,128,92h68v12H69.77a20,20,0,0,0-18.94,13.58L44,137.15V68ZM202.59,196H48.89l23.72-68H226.37Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,88v24H69.77a8,8,0,0,0-7.59,5.47L32,208V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6L128,80h72A8,8,0,0,1,208,88Z",opacity:"0.2"}),t.createElement("path",{d:"M245,110.64A16,16,0,0,0,232,104H216V88a16,16,0,0,0-16-16H130.67L102.94,51.2a16.14,16.14,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V208a8,8,0,0,0,8,8H211.1a8,8,0,0,0,7.59-5.47l28.49-85.47A16.05,16.05,0,0,0,245,110.64ZM93.34,64,123.2,86.4A8,8,0,0,0,128,88h72v16H69.77a16,16,0,0,0-15.18,10.94L40,158.7V64Zm112,136H43.1l26.67-80H232Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M245,110.64A16,16,0,0,0,232,104H216V88a16,16,0,0,0-16-16H130.67L102.94,51.2a16.14,16.14,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V208h0a8,8,0,0,0,8,8H211.1a8,8,0,0,0,7.59-5.47l28.49-85.47A16.05,16.05,0,0,0,245,110.64ZM93.34,64,123.2,86.4A8,8,0,0,0,128,88h72v16H69.77a16,16,0,0,0-15.18,10.94L40,158.7V64Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M243.36,111.81A14,14,0,0,0,232,106H214V88a14,14,0,0,0-14-14H130L101.74,52.8a14.06,14.06,0,0,0-8.4-2.8H40A14,14,0,0,0,26,64V208a6,6,0,0,0,6,6H211.1a6,6,0,0,0,5.69-4.1l28.49-85.47A14,14,0,0,0,243.36,111.81ZM40,62H93.34a2,2,0,0,1,1.2.4L124.4,84.8A6,6,0,0,0,128,86h72a2,2,0,0,1,2,2v18H69.77a14,14,0,0,0-13.28,9.57L38,171V64A2,2,0,0,1,40,62Zm193.9,58.63L206.78,202H40.33l27.54-82.63a2,2,0,0,1,1.9-1.37H232a2,2,0,0,1,1.9,2.63Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M245,110.64A16,16,0,0,0,232,104H216V88a16,16,0,0,0-16-16H130.67L102.94,51.2a16.14,16.14,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V208h0a8,8,0,0,0,8,8H211.1a8,8,0,0,0,7.59-5.47l28.49-85.47A16.05,16.05,0,0,0,245,110.64ZM93.34,64,123.2,86.4A8,8,0,0,0,128,88h72v16H69.77a16,16,0,0,0-15.18,10.94L40,158.7V64Zm112,136H43.1l26.67-80H232Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M241.72,113a11.88,11.88,0,0,0-9.73-5H212V88a12,12,0,0,0-12-12H129.33l-28.8-21.6a12.05,12.05,0,0,0-7.2-2.4H40A12,12,0,0,0,28,64V208a4,4,0,0,0,4,4H211.09a4,4,0,0,0,3.79-2.74l28.49-85.47A11.86,11.86,0,0,0,241.72,113ZM40,60H93.33a4,4,0,0,1,2.4.8L125.6,83.2a4,4,0,0,0,2.4.8h72a4,4,0,0,1,4,4v20H69.76a12,12,0,0,0-11.38,8.21L36,183.35V64A4,4,0,0,1,40,60Zm195.78,61.26L208.2,204H37.55L66,118.74A4,4,0,0,1,69.76,116H232a4,4,0,0,1,3.79,5.26Z"}))]]),n=t.forwardRef((e,n)=>t.createElement(i.default,{ref:n,...e,weights:o}));n.displayName="FolderOpenIcon",e.s(["FolderOpenIcon",0,n],540413);let l=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,68H132L105.33,48a20.12,20.12,0,0,0-12-4H40A20,20,0,0,0,20,64V200a20,20,0,0,0,20,20H216.89A19.13,19.13,0,0,0,236,200.89V88A20,20,0,0,0,216,68Zm-4,128H44V68H92l28.8,21.6A12,12,0,0,0,128,92h84Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,88V200.89a7.11,7.11,0,0,1-7.11,7.11H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6L128,80h88A8,8,0,0,1,224,88Z",opacity:"0.2"}),t.createElement("path",{d:"M216,72H130.67L102.93,51.2a16.12,16.12,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V200a16,16,0,0,0,16,16H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72Zm0,128H40V64H93.33L123.2,86.4A8,8,0,0,0,128,88h88Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M232,88V200.89A15.13,15.13,0,0,1,216.89,216H40a16,16,0,0,1-16-16V64A16,16,0,0,1,40,48H93.33a16.12,16.12,0,0,1,9.6,3.2L130.67,72H216A16,16,0,0,1,232,88Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,74H130L101.73,52.8a14,14,0,0,0-8.4-2.8H40A14,14,0,0,0,26,64V200a14,14,0,0,0,14,14H216.89A13.12,13.12,0,0,0,230,200.89V88A14,14,0,0,0,216,74Zm2,126.89a1.11,1.11,0,0,1-1.11,1.11H40a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H93.33a2,2,0,0,1,1.2.4L124.4,84.8A6,6,0,0,0,128,86h88a2,2,0,0,1,2,2Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,72H130.67L102.93,51.2a16.12,16.12,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V200a16,16,0,0,0,16,16H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72Zm0,128H40V64H93.33L123.2,86.4A8,8,0,0,0,128,88h88Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,76H129.33l-28.8-21.6a12.05,12.05,0,0,0-7.2-2.4H40A12,12,0,0,0,28,64V200a12,12,0,0,0,12,12H216.89A11.12,11.12,0,0,0,228,200.89V88A12,12,0,0,0,216,76Zm4,124.89a3.12,3.12,0,0,1-3.11,3.11H40a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4H93.33a4,4,0,0,1,2.4.8L125.6,83.2a4,4,0,0,0,2.4.8h88a4,4,0,0,1,4,4Z"}))]]),a=t.forwardRef((e,o)=>t.createElement(i.default,{ref:o,...e,weights:l}));a.displayName="FolderSimpleIcon",e.s(["FolderSimpleIcon",0,a],235209)},192222,e=>{"use strict";var t=e.i(648863),i=e.i(232471),o=e.i(883364),n=e.i(391398),l=e.i(56206);function a({className:e,children:t,...r}){return(0,n.jsx)(i.Box,{className:(0,l.default)("m_a4dc100e",e),...r,children:(0,n.jsx)(o.Text,{className:"m_f6c78959",children:t})})}let r=[,,,,,].fill(0).map((e,t)=>(0,n.jsx)(a,{children:t+1},t));var s=e.i(140763);let c={type:"configurator",component:function(e){return(0,n.jsx)(s.SimpleGrid,{...e,id:"grid-configurator",children:r})},code:`
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid{{props}}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  )
}
`,controls:[{prop:"cols",type:"number",initialValue:3,min:1,max:6,step:1,libraryValue:"__"},{prop:"spacing",type:"size",initialValue:"md",libraryValue:"md"},{prop:"verticalSpacing",type:"size",initialValue:"md",libraryValue:"md"}]},d={type:"code",component:function(){return(0,n.jsx)(s.SimpleGrid,{cols:{base:1,sm:2,lg:5},spacing:{base:10,sm:"xl"},verticalSpacing:{base:"md",sm:"xl"},children:r})},code:`
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, lg: 5 }}
      spacing={{ base: 10, sm: 'xl' }}
      verticalSpacing={{ base: 'md', sm: 'xl' }}
    >
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  );
}
`},h={type:"code",component:function(){return(0,n.jsx)("div",{style:{resize:"horizontal",overflow:"hidden",maxWidth:"100%"},children:(0,n.jsx)(s.SimpleGrid,{type:"container",cols:{base:1,"300px":2,"500px":5},spacing:{base:10,"300px":"xl"},children:r})})},code:`
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    // Wrapper div is added for demonstration purposes only,
    // it is not required in real projects
    <div style={{ resize: 'horizontal', overflow: 'hidden', maxWidth: '100%' }}>
      <SimpleGrid
        type="container"
        cols={{ base: 1, '300px': 2, '500px': 5 }}
        spacing={{ base: 10, '300px': 'xl' }}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </SimpleGrid>
    </div>
  );
}
`},u={type:"code",component:function(){return(0,n.jsx)(s.SimpleGrid,{minColWidth:"200px",children:r})},code:`
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid minColWidth="200px">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  );
}
`};var m=e.i(671640);let p=`
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <>
      {/* auto-fill: empty tracks are preserved, items do not stretch */}
      <SimpleGrid minColWidth="200px" autoFlow="auto-fill">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </SimpleGrid>

      {/* auto-fit: empty tracks are collapsed, items stretch to fill the row */}
      <SimpleGrid minColWidth="200px" autoFlow="auto-fit">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </SimpleGrid>
    </>
  );
}
`,f=[,,,].fill(0).map((e,t)=>(0,n.jsx)(a,{children:t+1},t)),b={type:"code",component:function(){return(0,n.jsxs)(m.Stack,{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(o.Text,{mb:"xs",fw:500,children:"auto-fill"}),(0,n.jsx)(s.SimpleGrid,{minColWidth:"200px",autoFlow:"auto-fill",children:f})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(o.Text,{mb:"xs",fw:500,children:"auto-fit"}),(0,n.jsx)(s.SimpleGrid,{minColWidth:"200px",autoFlow:"auto-fit",children:f})]})]})},code:p},x={type:"code",component:function(){return(0,n.jsx)(s.SimpleGrid,{cols:3,autoRows:"minmax(100px, auto)",children:r})},code:`
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid cols={3} autoRows="minmax(100px, auto)">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  );
}
`};var g=(0,t.__exportAll)({autoFlow:()=>b,autoRows:()=>x,container:()=>h,minColWidth:()=>u,responsive:()=>d,usage:()=>c});e.s(["SimpleGridDemos",0,g],192222)},379328,e=>{"use strict";var t=e.i(648863),i=e.i(37541),o=e.i(391398);let n={type:"configurator",component:e=>(0,o.jsx)(i.Checkbox,{...e,defaultChecked:!0}),code:`
import { Checkbox } from '@mantine/core';


function Demo() {
  return (
    <Checkbox
      defaultChecked
      {{props}}
    />
  );
}
`,centered:!0,controls:[{prop:"labelPosition",type:"segmented",data:[{value:"right",label:"Right"},{value:"left",label:"Left"}],initialValue:"right",libraryValue:"right"},{prop:"label",type:"string",initialValue:"I agree to sell my privacy",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"variant",type:"segmented",data:[{value:"filled",label:"Filled"},{value:"outline",label:"Outline"}],initialValue:"filled",libraryValue:"filled"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"indeterminate",type:"boolean",initialValue:!1,libraryValue:!1}]};var l=e.i(232471),a=e.i(57807),r=e.i(191788);let s=`
import { useListState, randomId } from '@mantine/hooks';
import { Checkbox } from '@mantine/core';

const initialValues = [
  { label: 'Receive email notifications', checked: false, key: randomId() },
  { label: 'Receive sms notifications', checked: false, key: randomId() },
  { label: 'Receive push notifications', checked: false, key: randomId() },
];

export function IndeterminateCheckbox() {
  const [values, handlers] = useListState(initialValues);

  const allChecked = values.every((value) => value.checked);
  const indeterminate = values.some((value) => value.checked) && !allChecked;

  const items = values.map((value, index) => (
    <Checkbox
      mt="xs"
      ml={33}
      label={value.label}
      key={value.key}
      checked={value.checked}
      onChange={(event) => handlers.setItemProp(index, 'checked', event.currentTarget.checked)}
    />
  ));

  return (
    <>
      <Checkbox
        checked={allChecked}
        indeterminate={indeterminate}
        label="Receive all notifications"
        onChange={() =>
          handlers.setState((current) =>
            current.map((value) => ({ ...value, checked: !allChecked }))
          )
        }
      />
      {items}
    </>
  );
}
`,c=[{label:"Receive email notifications",checked:!1,key:(0,a.randomId)()},{label:"Receive sms notifications",checked:!1,key:(0,a.randomId)()},{label:"Receive push notifications",checked:!1,key:(0,a.randomId)()}],d={type:"code",code:s,component:function(){let[e,t]=function(e=[]){let[t,i]=(0,r.useState)(e),o=(0,r.useCallback)((...e)=>i(t=>[...t,...e]),[]),n=(0,r.useCallback)((...e)=>i(t=>[...e,...t]),[]),l=(0,r.useCallback)((e,...t)=>i(i=>[...i.slice(0,e),...t,...i.slice(e)]),[]),a=(0,r.useCallback)(e=>i(t=>t.map((t,i)=>e(t,i))),[]),s=(0,r.useCallback)((...e)=>i(t=>t.filter((t,i)=>!e.includes(i))),[]),c=(0,r.useCallback)(()=>i(e=>{let t=[...e];return t.pop(),t}),[]),d=(0,r.useCallback)(()=>i(e=>{let t=[...e];return t.shift(),t}),[]),h=(0,r.useCallback)(({from:e,to:t})=>i(i=>{let o=[...i],n=i[e];return o.splice(e,1),o.splice(t,0,n),o}),[]),u=(0,r.useCallback)(({from:e,to:t})=>i(i=>{let o=[...i],n=o[e],l=o[t];return o.splice(t,1,n),o.splice(e,1,l),o}),[]),m=(0,r.useCallback)((e,t)=>i(i=>{let o=[...i];return o[e]=t,o}),[]),p=(0,r.useCallback)((e,t,o)=>i(i=>{let n=[...i];return n[e]={...n[e],[t]:o},n}),[]),f=(0,r.useCallback)((e,t)=>i(i=>i.map((i,o)=>e(i,o)?t(i,o):i)),[]),b=(0,r.useCallback)(e=>{i(t=>t.filter(e))},[]);return[t,(0,r.useMemo)(()=>({setState:i,append:o,prepend:n,insert:l,pop:c,shift:d,apply:a,applyWhere:f,remove:s,reorder:h,swap:u,setItem:m,setItemProp:p,filter:b}),[])]}(c),n=e.every(e=>e.checked),a=e.some(e=>e.checked)&&!n,s=e.map((e,n)=>(0,o.jsx)(i.Checkbox,{mt:"xs",ml:33,label:e.label,checked:e.checked,onChange:e=>t.setItemProp(n,"checked",e.currentTarget.checked)},e.key));return(0,o.jsxs)(l.Box,{maw:400,mx:"auto",children:[(0,o.jsx)(i.Checkbox,{checked:n,indeterminate:a,label:"Receive all notifications",onChange:()=>t.setState(e=>e.map(e=>({...e,checked:!n})))}),s]})}};var h=e.i(671640);let u={type:"code",component:function(){return(0,o.jsxs)(h.Stack,{children:[(0,o.jsx)(i.Checkbox,{checked:!1,onChange:()=>{},label:"Default checkbox"}),(0,o.jsx)(i.Checkbox,{checked:!1,onChange:()=>{},indeterminate:!0,label:"Indeterminate checkbox"}),(0,o.jsx)(i.Checkbox,{checked:!0,onChange:()=>{},label:"Checked checkbox"}),(0,o.jsx)(i.Checkbox,{checked:!0,variant:"outline",onChange:()=>{},label:"Outline checked checkbox"}),(0,o.jsx)(i.Checkbox,{variant:"outline",onChange:()=>{},indeterminate:!0,label:"Outline indeterminate checkbox"}),(0,o.jsx)(i.Checkbox,{disabled:!0,label:"Disabled checkbox"}),(0,o.jsx)(i.Checkbox,{disabled:!0,checked:!0,onChange:()=>{},label:"Disabled checked checkbox"}),(0,o.jsx)(i.Checkbox,{disabled:!0,indeterminate:!0,label:"Disabled indeterminate checkbox"})]})},code:`
import { Checkbox, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Checkbox checked={false} onChange={() => {}} label="Default checkbox" />
      <Checkbox checked={false} onChange={() => {}} indeterminate label="Indeterminate checkbox" />
      <Checkbox checked onChange={() => {}} label="Checked checkbox" />
      <Checkbox checked variant="outline" onChange={() => {}} label="Outline checked checkbox" />
      <Checkbox
        variant="outline"
        onChange={() => {}}
        indeterminate
        label="Outline indeterminate checkbox"
      />
      <Checkbox disabled label="Disabled checkbox" />
      <Checkbox disabled checked onChange={() => {}} label="Disabled checked checkbox" />
      <Checkbox disabled indeterminate label="Disabled indeterminate checkbox" />
    </Stack>
  );
}
`};var m=e.i(171481);let p=new Map([["bold",r.createElement(r.Fragment,null,r.createElement("path",{d:"M188.26,100.55c-.37-.71-.76-1.42-1.16-2.11a64,64,0,0,0-29.55-81.29,12,12,0,1,0-11.1,21.28A39.91,39.91,0,0,1,168,73.92c0,1-.05,2-.13,3a67.79,67.79,0,0,0-79.74,0c-.08-1-.13-2-.13-3a39.92,39.92,0,0,1,21.55-35.5A12,12,0,1,0,98.46,17.14,64,64,0,0,0,68.89,98.45c-.4.7-.78,1.39-1.15,2.1A64.08,64.08,0,0,0,12,164a12,12,0,0,0,24,0,40,40,0,0,1,24.18-36.73c-.11,1.56-.18,3.14-.18,4.73a68.12,68.12,0,0,0,41.63,62.68,40,40,0,0,1-47.16,3,12,12,0,1,0-12.94,20.21A63.95,63.95,0,0,0,128,201.24a63.95,63.95,0,0,0,86.47,16.69,12,12,0,1,0-12.94-20.21,40,40,0,0,1-47.16-3A68.12,68.12,0,0,0,196,132c0-1.59-.07-3.17-.18-4.73A40,40,0,0,1,220,164a12,12,0,0,0,24,0A64.08,64.08,0,0,0,188.26,100.55ZM128,88a43.85,43.85,0,0,1,30.23,12.07,39.93,39.93,0,0,1-60.46,0A43.81,43.81,0,0,1,128,88ZM84,132a44.35,44.35,0,0,1,.57-7.06,40,40,0,0,1,30.18,49A44.08,44.08,0,0,1,84,132Zm57.25,42a40,40,0,0,1,30.18-49,44,44,0,0,1-30.18,49Z"}))],["duotone",r.createElement(r.Fragment,null,r.createElement("path",{d:"M184,132a56,56,0,1,1-56-56A56,56,0,0,1,184,132Z",opacity:"0.2"}),r.createElement("path",{d:"M185.68,104.28q-1.4-2.88-3.06-5.6a60,60,0,0,0-26.92-78,8,8,0,0,0-7.4,14.19A44,44,0,0,1,170.72,84.4a63.85,63.85,0,0,0-85.46,0A44,44,0,0,1,107.7,34.87a8,8,0,1,0-7.4-14.19,60,60,0,0,0-26.93,78,62.59,62.59,0,0,0-3.05,5.58A60.07,60.07,0,0,0,16,164a8,8,0,0,0,16,0,44.09,44.09,0,0,1,32.89-42.58A63.94,63.94,0,0,0,109,193.11a44,44,0,0,1-56.65,8,8,8,0,1,0-8.62,13.47A60,60,0,0,0,126.74,196l1.26,0,1.26,0a60,60,0,0,0,83.05,18.59,8,8,0,1,0-8.62-13.47,44,44,0,0,1-56.65-8,63.94,63.94,0,0,0,44.07-71.69A44.09,44.09,0,0,1,224,164a8,8,0,0,0,16,0A60.07,60.07,0,0,0,185.68,104.28ZM128,84a47.91,47.91,0,0,1,35.56,15.79,44,44,0,0,1-71.13,0A47.89,47.89,0,0,1,128,84Zm.12,49.92-.12.2-.12-.2h.24ZM80,132a47.6,47.6,0,0,1,1.44-11.65,44,44,0,0,1,36,58.46A48.07,48.07,0,0,1,80,132Zm58.57,46.81a44,44,0,0,1,36-58.46,48,48,0,0,1-36,58.46Z"}))],["fill",r.createElement(r.Fragment,null,r.createElement("path",{d:"M239.83,159.58a60.09,60.09,0,0,0-54.17-55.31,61.63,61.63,0,0,0-3-5.59,59.94,59.94,0,0,0-26.82-77.93l-.14-.08a8.1,8.1,0,0,0-1.14-.48h0a8,8,0,0,0-6.21,14.69l.07,0C149.6,35.57,168,45.73,168,68a40,40,0,0,1-2,12.53,63.83,63.83,0,0,0-76,0A40,40,0,0,1,88,68c0-22.35,18.53-32.51,19.65-33.1l0,0a8,8,0,0,0-7.33-14.22l-.15.08a60,60,0,0,0-26.85,78c-1.1,1.8-2.12,3.66-3,5.57a60.11,60.11,0,0,0-54.15,55.32,35.86,35.86,0,0,0-.14,4.87A8,8,0,0,0,32,164c0-1.36.07-2.71.19-4,.73-6.25,4.06-19.08,18.64-27.49a39.83,39.83,0,0,1,13.32-4.81c-.1,1.43-.16,2.88-.16,4.34a64.09,64.09,0,0,0,39,58.91,39.81,39.81,0,0,1-12.15,10.84c-19.07,11-36.88.36-38.39-.58l-.12-.08a8,8,0,0,0-8.71,13.42l.24.15A59.95,59.95,0,0,0,126.74,196c.42,0,.83,0,1.25,0s.84,0,1.27,0a60,60,0,0,0,82.89,18.69l.23-.15a8,8,0,0,0-8.71-13.42l-.12.08c-1.51.94-19.32,11.59-38.39.58A39.84,39.84,0,0,1,153,190.9,64.09,64.09,0,0,0,192,132c0-1.46-.07-2.9-.16-4.33a39.84,39.84,0,0,1,13.33,4.8c14.47,8.35,17.86,21.06,18.63,27.32.13,1.39.2,2.79.2,4.21a8,8,0,0,0,16,.46A36,36,0,0,0,239.83,159.58Zm-130.1,16.8A48.08,48.08,0,0,1,80,132c0-1.27.07-2.53.17-3.78l1,.25a40,40,0,0,1,28.54,47.91ZM128,134.11l-.11-.19h.22ZM128,108A39.91,39.91,0,0,1,98.07,94.51a47.84,47.84,0,0,1,59.84,0A39.88,39.88,0,0,1,128,108Zm18.29,68.37a39.9,39.9,0,0,1,29.55-48.13c.1,1.24.16,2.49.16,3.76A48.07,48.07,0,0,1,146.28,176.37Z"}))],["light",r.createElement(r.Fragment,null,r.createElement("path",{d:"M184.35,106.18a61.77,61.77,0,0,0-4-7.33,58,58,0,0,0-25.58-76.38,6,6,0,1,0-5.54,10.64,46,46,0,0,1,22.51,55,61.89,61.89,0,0,0-87.5,0,46,46,0,0,1,22.53-55,6,6,0,0,0-5.54-10.64A58,58,0,0,0,75.64,98.87a60.67,60.67,0,0,0-4,7.31A58.06,58.06,0,0,0,18,164a6,6,0,0,0,12,0,46.08,46.08,0,0,1,37.43-45.19,61.95,61.95,0,0,0,45,73.21,46,46,0,0,1-61.2,10.75,6,6,0,0,0-6.48,10.11,58,58,0,0,0,80.9-18.94c.77,0,1.55.06,2.34.06s1.57,0,2.34-.06a58,58,0,0,0,80.9,18.94,6,6,0,0,0-6.48-10.11A46,46,0,0,1,143.56,192a61.95,61.95,0,0,0,45-73.21A46.08,46.08,0,0,1,226,164a6,6,0,0,0,12,0A58.06,58.06,0,0,0,184.35,106.18ZM128,82a49.87,49.87,0,0,1,38.09,17.67,46,46,0,0,1-76.19,0A49.86,49.86,0,0,1,128,82Zm3.8,49.79a56.82,56.82,0,0,0-3.8,6.56,58.24,58.24,0,0,0-3.79-6.56c1.25.08,2.51.13,3.78.13S130.54,131.87,131.8,131.79ZM78,132a49.68,49.68,0,0,1,2-13.82A46.06,46.06,0,0,1,122,164a45.59,45.59,0,0,1-3.32,17.12A50.07,50.07,0,0,1,78,132Zm59.32,49.12A45.59,45.59,0,0,1,134,164a46.06,46.06,0,0,1,42-45.82,50,50,0,0,1-38.72,62.94Z"}))],["regular",r.createElement(r.Fragment,null,r.createElement("path",{d:"M185.68,104.28q-1.4-2.88-3.06-5.6a60,60,0,0,0-26.92-78,8,8,0,0,0-7.4,14.19A44,44,0,0,1,170.72,84.4a63.85,63.85,0,0,0-85.46,0A44,44,0,0,1,107.7,34.87a8,8,0,1,0-7.4-14.19,60,60,0,0,0-26.93,78,62.59,62.59,0,0,0-3.05,5.58A60.07,60.07,0,0,0,16,164a8,8,0,0,0,16,0,44.09,44.09,0,0,1,32.89-42.58A63.94,63.94,0,0,0,109,193.11a44,44,0,0,1-56.65,8,8,8,0,1,0-8.62,13.47A60,60,0,0,0,126.74,196l1.26,0,1.26,0a60,60,0,0,0,83.05,18.59,8,8,0,1,0-8.62-13.47,44,44,0,0,1-56.65-8,63.94,63.94,0,0,0,44.07-71.69A44.09,44.09,0,0,1,224,164a8,8,0,0,0,16,0A60.07,60.07,0,0,0,185.68,104.28ZM128,84a47.91,47.91,0,0,1,35.56,15.79,44,44,0,0,1-71.13,0A47.89,47.89,0,0,1,128,84Zm.12,49.92-.12.2-.12-.2h.24ZM80,132a47.6,47.6,0,0,1,1.44-11.65,44,44,0,0,1,36,58.46A48.07,48.07,0,0,1,80,132Zm58.57,46.81a44,44,0,0,1,36-58.46,48,48,0,0,1-36,58.46Z"}))],["thin",r.createElement(r.Fragment,null,r.createElement("path",{d:"M183,108.08A60.22,60.22,0,0,0,178.06,99a56,56,0,0,0-24.21-74.73,4,4,0,1,0-3.7,7.09,48,48,0,0,1,22.37,60.49,59.91,59.91,0,0,0-89.05,0,48,48,0,0,1,22.38-60.5,4,4,0,0,0-3.7-7.1A56,56,0,0,0,77.93,99,60.85,60.85,0,0,0,73,108.08,56.07,56.07,0,0,0,20,164a4,4,0,0,0,8,0,48.06,48.06,0,0,1,42.08-47.62,60,60,0,0,0,45.75,74.38,48,48,0,0,1-65.67,13.7,4,4,0,1,0-4.32,6.73,56,56,0,0,0,78.69-19.3c1.15.07,2.3.11,3.47.11s2.32,0,3.47-.11a56,56,0,0,0,78.69,19.3,4,4,0,1,0-4.32-6.73,48,48,0,0,1-65.67-13.7,60,60,0,0,0,45.75-74.38A48.06,48.06,0,0,1,228,164a4,4,0,0,0,8,0A56.07,56.07,0,0,0,183,108.08Zm-8.75.21c-.79.08-1.56.19-2.34.3.5-.63,1-1.28,1.46-1.93C173.69,107.2,174,107.74,174.26,108.29ZM128,80a51.93,51.93,0,0,1,40.57,19.52,48,48,0,0,1-81.15,0A51.94,51.94,0,0,1,128,80Zm8.07,49.33A56.11,56.11,0,0,0,128,143.25a55.87,55.87,0,0,0-8.07-13.91,56.43,56.43,0,0,0,8.06.58A55.29,55.29,0,0,0,136.07,129.33Zm-52-20.74c-.77-.11-1.54-.22-2.32-.3q.42-.81.87-1.62C83.08,107.32,83.56,108,84.06,108.59ZM76,132a51.78,51.78,0,0,1,2.51-15.93,48,48,0,0,1,41.39,67.3A52.08,52.08,0,0,1,76,132Zm60.1,51.37a48,48,0,0,1,41.39-67.3,52,52,0,0,1-41.39,67.3Z"}))]]),f=r.forwardRef((e,t)=>r.createElement(m.default,{ref:t,...e,weights:p}));f.displayName="BiohazardIcon";let b=new Map([["bold",r.createElement(r.Fragment,null,r.createElement("path",{d:"M128,112a16,16,0,1,1-16,16A16,16,0,0,1,128,112ZM96,128a12,12,0,0,0-12-12H44.47a83.88,83.88,0,0,1,31.2-54.11L95.38,96a12,12,0,1,0,20.78-12l-22-38a20,20,0,0,0-28.87-6.34,107.85,107.85,0,0,0-45.26,78.4,20.22,20.22,0,0,0,5.21,15.43A20,20,0,0,0,40,140H84A12,12,0,0,0,96,128Zm139.92-9.94a107.81,107.81,0,0,0-45.26-78.39A20,20,0,0,0,161.79,46L139.84,84a12,12,0,0,0,20.78,12l19.71-34.13A83.88,83.88,0,0,1,211.53,116H172a12,12,0,0,0,0,24h44a20,20,0,0,0,14.71-6.51A20.22,20.22,0,0,0,235.92,118.06ZM160.4,160.11a12,12,0,0,0-20.79,12L159.19,206a84.33,84.33,0,0,1-62.38,0l19.58-33.91a12,12,0,0,0-20.79-12l-21.82,37.8a20,20,0,0,0,8.91,28.15,108.24,108.24,0,0,0,90.62,0,20,20,0,0,0,8.91-28.15Z"}))],["duotone",r.createElement(r.Fragment,null,r.createElement("path",{d:"M92,128H40a8.1,8.1,0,0,1-8-8.86A95.94,95.94,0,0,1,72.27,49.47,8,8,0,0,1,83.82,52l26,44.94A36,36,0,0,0,92,128Zm54,31.18a36,36,0,0,1-36,0L84.17,203.91a8,8,0,0,0,3.56,11.26,96.24,96.24,0,0,0,80.54,0,8,8,0,0,0,3.56-11.26Zm78-40a95.94,95.94,0,0,0-40.24-69.67A8,8,0,0,0,172.18,52L146.23,97A36,36,0,0,1,164,126.12c0,.62.05,1.23.05,1.85l52,0A8.1,8.1,0,0,0,224,119.14Z",opacity:"0.2"}),r.createElement("path",{d:"M116,128a12,12,0,1,1,12,12A12,12,0,0,1,116,128Zm-16,0a8,8,0,0,0-8-8l-51.93,0a.19.19,0,0,1-.07-.16A87.83,87.83,0,0,1,76.89,56l26,45a8,8,0,1,0,13.86-8L90.75,48a16,16,0,0,0-23.1-5.07,103.83,103.83,0,0,0-43.58,75.49,16.21,16.21,0,0,0,4.17,12.37A16,16,0,0,0,40,136H92A8,8,0,0,0,100,128Zm131.93-9.58a103.83,103.83,0,0,0-43.58-75.49A16,16,0,0,0,165.25,48L139.3,93a8,8,0,0,0,13.86,8l26-45A87.87,87.87,0,0,1,216,119.86c0,.07,0,.12,0,.14H164a8,8,0,0,0,0,16h52a16,16,0,0,0,11.76-5.21A16.21,16.21,0,0,0,231.93,118.42Zm-79,36.76a8,8,0,1,0-13.86,8l25.84,44.73a88.22,88.22,0,0,1-73.81,0l25.83-44.73a8,8,0,1,0-13.86-8L77.25,199.91a16,16,0,0,0,7.12,22.52,104.24,104.24,0,0,0,87.26,0,16,16,0,0,0,7.12-22.52Z"}))],["fill",r.createElement(r.Fragment,null,r.createElement("path",{d:"M116,128a12,12,0,1,1,12,12A12,12,0,0,1,116,128Zm-15.78,3.51A29,29,0,0,1,100,128a28,28,0,0,1,16.94-25.73,4,4,0,0,0,1.87-5.66L90.75,48a16,16,0,0,0-23.1-5.07,103.83,103.83,0,0,0-43.58,75.49,16.21,16.21,0,0,0,4.17,12.37A16,16,0,0,0,40,136H96.26A4,4,0,0,0,100.22,131.51Zm131.71-13.09a103.83,103.83,0,0,0-43.58-75.49A16,16,0,0,0,165.25,48L137.19,96.61a4,4,0,0,0,1.87,5.66A28,28,0,0,1,156,128a29,29,0,0,1-.22,3.51,4,4,0,0,0,4,4.49H216a16,16,0,0,0,11.76-5.21A16.21,16.21,0,0,0,231.93,118.42ZM150.8,151.48a4,4,0,0,0-5.91-1.15,28,28,0,0,1-33.78,0,4,4,0,0,0-5.91,1.15L77.25,199.91a16,16,0,0,0,7.12,22.52,104.24,104.24,0,0,0,87.26,0,16,16,0,0,0,7.12-22.52Z"}))],["light",r.createElement(r.Fragment,null,r.createElement("path",{d:"M92,134H40a13.94,13.94,0,0,1-10.28-4.56,14.17,14.17,0,0,1-3.66-10.84,101.81,101.81,0,0,1,42.75-74A14,14,0,0,1,89,49l26,45a6,6,0,0,1-10.4,6L78.62,55a2,2,0,0,0-2.88-.65A89.83,89.83,0,0,0,38,119.68a2.13,2.13,0,0,0,.57,1.67A1.88,1.88,0,0,0,40,122H92a6,6,0,0,1,0,12Zm137.94-15.4a101.81,101.81,0,0,0-42.75-74A14,14,0,0,0,167,49L141,94a6,6,0,0,0,10.4,6L177.38,55a2,2,0,0,1,2.88-.65A89.83,89.83,0,0,1,218,119.68a2.13,2.13,0,0,1-.57,1.67A1.88,1.88,0,0,1,216,122H164a6,6,0,0,0,0,12h52a13.94,13.94,0,0,0,10.28-4.56A14.17,14.17,0,0,0,229.94,118.6ZM151.2,156.18a6,6,0,1,0-10.39,6l25.82,44.73a2,2,0,0,1-.88,2.82,90.29,90.29,0,0,1-75.5,0,2,2,0,0,1-.88-2.82l25.82-44.73a6,6,0,1,0-10.39-6L79,200.91a14,14,0,0,0,6.23,19.71,102.29,102.29,0,0,0,85.58,0A14,14,0,0,0,177,200.91ZM128,138a10,10,0,1,0-10-10A10,10,0,0,0,128,138Z"}))],["regular",r.createElement(r.Fragment,null,r.createElement("path",{d:"M92,136H40a16,16,0,0,1-11.76-5.21,16.21,16.21,0,0,1-4.17-12.37A103.83,103.83,0,0,1,67.65,42.93,16,16,0,0,1,90.75,48l26,45a8,8,0,1,1-13.86,8L76.89,56A87.83,87.83,0,0,0,40,119.86a.19.19,0,0,0,.07.16L92,120a8,8,0,0,1,0,16Zm139.93-17.58a103.83,103.83,0,0,0-43.58-75.49A16,16,0,0,0,165.25,48L139.3,93a8,8,0,0,0,13.86,8l26-45A87.87,87.87,0,0,1,216,119.86c0,.07,0,.12,0,.14H164a8,8,0,0,0,0,16h52a16,16,0,0,0,11.76-5.21A16.21,16.21,0,0,0,231.93,118.42Zm-79,36.76a8,8,0,1,0-13.86,8l25.84,44.73a88.22,88.22,0,0,1-73.81,0l25.83-44.73a8,8,0,1,0-13.86-8L77.25,199.91a16,16,0,0,0,7.12,22.52,104.24,104.24,0,0,0,87.26,0,16,16,0,0,0,7.12-22.52ZM128,140a12,12,0,1,0-12-12A12,12,0,0,0,128,140Z"}))],["thin",r.createElement(r.Fragment,null,r.createElement("path",{d:"M92,132H40a12,12,0,0,1-8.81-3.91,12.2,12.2,0,0,1-3.14-9.31A99.82,99.82,0,0,1,70,46.2,12,12,0,0,1,87.29,50l25.94,45a4,4,0,0,1-6.92,4L80.36,54a4,4,0,0,0-5.78-1.27A91.83,91.83,0,0,0,36,119.5a4.2,4.2,0,0,0,1.08,3.2A3.9,3.9,0,0,0,40,124H92a4,4,0,0,1,0,8Zm136-13.22A99.82,99.82,0,0,0,186,46.2,12,12,0,0,0,168.72,50L142.77,95a4,4,0,0,0,6.92,4L175.64,54a4,4,0,0,1,5.78-1.27A91.83,91.83,0,0,1,220,119.5a4.2,4.2,0,0,1-1.08,3.2A3.9,3.9,0,0,1,216,124H164a4,4,0,0,0,0,8h52a12,12,0,0,0,8.81-3.91A12.2,12.2,0,0,0,228,118.78Zm-78.48,38.4a4,4,0,0,0-6.93,4l25.82,44.73a4,4,0,0,1,.35,3.22,3.9,3.9,0,0,1-2.12,2.41,92.24,92.24,0,0,1-77.18,0,3.9,3.9,0,0,1-2.12-2.41,4,4,0,0,1,.35-3.22l25.82-44.73a4,4,0,0,0-6.93-4L80.71,201.91a12,12,0,0,0,5.34,16.89,100.24,100.24,0,0,0,83.9,0,12,12,0,0,0,5.34-16.89ZM128,136a8,8,0,1,0-8-8A8,8,0,0,0,128,136Z"}))]]),x=r.forwardRef((e,t)=>r.createElement(m.default,{ref:t,...e,weights:b}));x.displayName="RadioactiveIcon";let g=({indeterminate:e,...t})=>e?(0,o.jsx)(x,{...t}):(0,o.jsx)(f,{...t}),v={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.Checkbox,{icon:g,label:"Custom icon",defaultChecked:!0}),(0,o.jsx)(i.Checkbox,{icon:g,label:"Custom icon: indeterminate",indeterminate:!0,mt:"sm"})]})},code:`
import { Checkbox, CheckboxIconComponent } from '@mantine/core';
import { BiohazardIcon, RadioactiveIcon } from '@phosphor-icons/react';

const CheckboxIcon: CheckboxIconComponent = ({ indeterminate, ...others }) =>
  indeterminate ? <RadioactiveIcon {...others} /> : <BiohazardIcon {...others} />;

function Demo() {
  return (
    <>
      <Checkbox icon={CheckboxIcon} label="Custom icon" defaultChecked />
      <Checkbox icon={CheckboxIcon} label="Custom icon: indeterminate" indeterminate mt="sm" />
    </>
  );
}
`};var k=e.i(725695);let C={type:"configurator",component:function(e){return(0,o.jsx)(i.Checkbox.Group,{defaultValue:["react"],...e,children:(0,o.jsxs)(k.Group,{mt:"xs",children:[(0,o.jsx)(i.Checkbox,{value:"react",label:"React"}),(0,o.jsx)(i.Checkbox,{value:"svelte",label:"Svelte"}),(0,o.jsx)(i.Checkbox,{value:"ng",label:"Angular"}),(0,o.jsx)(i.Checkbox,{value:"vue",label:"Vue"})]})})},code:`
import { Checkbox, Group } from '@mantine/core';


function Demo() {
  return (
    <Checkbox.Group
      defaultValue={['react']}
      {{props}}
    >
      <Group mt="xs">
        <Checkbox value="react" label="React" />
        <Checkbox value="svelte" label="Svelte" />
        <Checkbox value="ng" label="Angular" />
        <Checkbox value="vue" label="Vue" />
      </Group>
    </Checkbox.Group>
  );
}
`,centered:!0,maxWidth:"100%",controls:[{prop:"label",type:"string",initialValue:"Select your favorite frameworks/libraries",libraryValue:""},{prop:"description",type:"string",initialValue:"This is anonymous",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]};var y=e.i(79897);let S={type:"code",component:function(){return(0,o.jsx)(i.Checkbox,{label:(0,o.jsxs)(o.Fragment,{children:["I accept"," ",(0,o.jsx)(y.Anchor,{href:"https://mantine.dev",target:"_blank",inherit:!0,children:"terms and conditions"})]})})},code:`
import { Checkbox, Anchor } from '@mantine/core';

function Demo() {
  return (
    <Checkbox
      label={
        <>
          I accept{' '}
          <Anchor href="https://mantine.dev" target="_blank" inherit>
            terms and conditions
          </Anchor>
        </>
      }
    />
  );
}
`};var A="m_2cb8989f",j="m_69ff5ed7",R="m_cf98ad9f",w=e.i(883364);let E={type:"code",centered:!0,maxWidth:320,component:function(){let[e,t]=(0,r.useState)(!1);return(0,o.jsx)(i.Checkbox.Card,{className:A,checked:e,onClick:()=>t(e=>!e),children:(0,o.jsxs)(k.Group,{wrap:"nowrap",align:"flex-start",children:[(0,o.jsx)(i.Checkbox.Indicator,{}),(0,o.jsxs)("div",{children:[(0,o.jsx)(w.Text,{className:j,children:"mantine/core"}),(0,o.jsx)(w.Text,{className:R,children:"Core components library: inputs, buttons, overlays, etc."})]})]})})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { useState } from 'react';
import { Checkbox, Group, Text } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox.Card
      className={classes.root}
      checked={checked}
      onClick={() => setChecked((c) => !c)}
    >
      <Group wrap="nowrap" align="flex-start">
        <Checkbox.Indicator />

        <div>
          <Text className={classes.label}>mantine/core</Text>
          <Text className={classes.description}>
            Core components library: inputs, buttons, overlays, etc.
          </Text>
        </div>
      </Group>
    </Checkbox.Card>
  );
}
`},{fileName:"Demo.module.css",language:"scss",code:`.root {
  position: relative;
  padding: var(--mantine-spacing-md);
  transition: border-color 150ms ease;

  &[data-checked] {
    border-color: var(--mantine-primary-color-filled);
  }

  @mixin hover {
    @mixin light {
      background-color: var(--mantine-color-gray-0);
    }

    @mixin dark {
      background-color: var(--mantine-color-dark-6);
    }
  }
}

.label {
  font-weight: 600;
  font-size: var(--mantine-font-size-sm);
  line-height: 1.3;
  color: var(--mantine-color-bright);
}

.description {
  margin-top: 4px;
  color: var(--mantine-color-dimmed);
  font-size: var(--mantine-font-size-xs);
}
`}]};var T=e.i(529755);let M=`
import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <Checkbox
      label="Checkbox"
      description="Checkbox description"
      error="Checkbox error"
      defaultChecked
     {{props}}
    />
  );
}
`,V={type:"styles-api",data:T.CheckboxStylesApi,component:function(e){return(0,o.jsx)(i.Checkbox,{label:"Checkbox",description:"Checkbox description",error:"Checkbox error",defaultChecked:!0,...e})},code:M,centered:!0};var I={root:"m_43bfb50c"};let z={type:"code",component:function(){let[e,t]=(0,r.useState)(!1);return(0,o.jsx)(i.Checkbox,{classNames:I,label:"Checkbox button",checked:e,onChange:e=>t(e.currentTarget.checked),wrapperProps:{onClick:()=>t(e=>!e)}})},centered:!0,defaultExpanded:!1,code:[{fileName:"Demo.tsx",code:`
import { useState } from 'react';
import { Checkbox } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      classNames={classes}
      label="Checkbox button"
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
      wrapperProps={{
        onClick: () => setChecked((c) => !c),
      }}
    />
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`
.root {
  border: 1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4));
  padding: var(--mantine-spacing-xs) var(--mantine-spacing-sm);
  border-radius: var(--mantine-radius-md);
  font-weight: 600;
  transition:
    color 100ms ease,
    background-color 100ms ease,
    border-color 100ms ease;
  cursor: pointer;

  &[data-checked] {
    background-color: var(--mantine-color-blue-filled);
    border-color: var(--mantine-color-blue-filled);
    color: var(--mantine-color-white);
  }

  & * {
    pointer-events: none;
    user-select: none;
  }
}
`,language:"scss"}]},D={type:"code",component:function(){return(0,o.jsx)(i.Checkbox,{defaultChecked:!0,color:"lime.4",iconColor:"dark.8",size:"md",label:"Bright lime checkbox"})},code:`
import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <Checkbox
      defaultChecked
      color="lime.4"
      iconColor="dark.8"
      size="md"
      label="Bright lime checkbox"
    />
  );
}
`,centered:!0};var O=e.i(431868);let G={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(O.Tooltip,{label:"Checkbox with tooltip",children:(0,o.jsx)(i.Checkbox,{label:"Tooltip on checkbox only"})}),(0,o.jsx)(O.Tooltip,{label:"Checkbox with tooltip",refProp:"rootRef",children:(0,o.jsx)(i.Checkbox,{label:"Tooltip the entire element",mt:"md"})})]})},code:`
import { Tooltip, Checkbox } from '@mantine/core';

function Demo() {
  return (
    <>
      <Tooltip label="Checkbox with tooltip">
        <Checkbox label="Tooltip on checkbox only" />
      </Tooltip>

      <Tooltip label="Checkbox with tooltip" refProp="rootRef">
        <Checkbox label="Tooltip the entire element" mt="md" />
      </Tooltip>
    </>
  );
}
`,centered:!0};var Z=e.i(951254),F=e.i(530514);let _=`.root {
  --checkbox-size-xxl: 42px;
  --checkbox-size-xxs: 14px;

  &[data-size='xxl'] {
    .label {
      font-size: 22px;
      line-height: 40px;
    }
  }

  &[data-size='xxs'] {
    .label {
      font-size: 10px;
      line-height: 14px;
    }
  }
}
`,H=`
import { MantineProvider, Checkbox, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Checkbox: Checkbox.extend({ classNames: classes }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Checkbox size="xxs" label="Extra small checkbox" />
      <Checkbox size="xxl" label="Extra large checkbox" mt="md" />
    </MantineProvider>
  );
}
`,N=(0,F.createTheme)({components:{Checkbox:i.Checkbox.extend({classNames:{root:"m_4308addd",label:"m_1db1f159"}})}}),L={type:"code",centered:!0,component:function(){return(0,o.jsxs)(Z.MantineThemeProvider,{theme:N,children:[(0,o.jsx)(i.Checkbox,{size:"xxs",label:"Extra small checkbox"}),(0,o.jsx)(i.Checkbox,{size:"xxl",label:"Extra large checkbox",mt:"md"})]})},code:[{fileName:"Demo.tsx",code:H,language:"tsx"},{fileName:"Demo.module.css",code:_,language:"scss"}]},W=[{name:"mantine/core",description:"Core components library: inputs, buttons, overlays, etc."},{name:"mantine/hooks",description:"Collection of reusable hooks for React applications."},{name:"mantine/notifications",description:"Notifications system"}],P={type:"code",centered:!0,maxWidth:320,component:function(){let[e,t]=(0,r.useState)([]),n=W.map(e=>(0,o.jsx)(i.Checkbox.Card,{className:A,value:e.name,children:(0,o.jsxs)(k.Group,{wrap:"nowrap",align:"flex-start",children:[(0,o.jsx)(i.Checkbox.Indicator,{}),(0,o.jsxs)("div",{children:[(0,o.jsx)(w.Text,{className:j,children:e.name}),(0,o.jsx)(w.Text,{className:R,children:e.description})]})]})},e.name));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.Checkbox.Group,{value:e,onChange:t,label:"Pick packages to install",description:"Choose all packages that you will need in your application",children:(0,o.jsx)(h.Stack,{pt:"md",gap:"xs",children:n})}),(0,o.jsxs)(w.Text,{fz:"xs",mt:"md",children:["CurrentValue: ",e.join(", ")||"–"]})]})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { useState } from 'react';
import { Checkbox, Group, Stack, Text } from '@mantine/core';
import classes from './Demo.module.css';

const data = [
  {
    name: 'mantine/core',
    description: 'Core components library: inputs, buttons, overlays, etc.',
  },
  { name: 'mantine/hooks', description: 'Collection of reusable hooks for React applications.' },
  { name: 'mantine/notifications', description: 'Notifications system' },
];

function Demo() {
  const [value, setValue] = useState<string[]>([]);

  const cards = data.map((item) => (
    <Checkbox.Card className={classes.root} value={item.name} key={item.name}>
      <Group wrap="nowrap" align="flex-start">
        <Checkbox.Indicator />
        <div>
          <Text className={classes.label}>{item.name}</Text>
          <Text className={classes.description}>{item.description}</Text>
        </div>
      </Group>
    </Checkbox.Card>
  ));

  return (
    <>
      <Checkbox.Group
        value={value}
        onChange={setValue}
        label="Pick packages to install"
        description="Choose all packages that you will need in your application"
      >
        <Stack pt="md" gap="xs">
          {cards}
        </Stack>
      </Checkbox.Group>

      <Text fz="xs" mt="md">
        CurrentValue: {value.join(', ') || '–'}
      </Text>
    </>
  );
}
`},{fileName:"Demo.module.css",language:"scss",code:`.root {
  position: relative;
  padding: var(--mantine-spacing-md);
  transition: border-color 150ms ease;

  &[data-checked] {
    border-color: var(--mantine-primary-color-filled);
  }

  @mixin hover {
    @mixin light {
      background-color: var(--mantine-color-gray-0);
    }

    @mixin dark {
      background-color: var(--mantine-color-dark-6);
    }
  }
}

.label {
  font-weight: 600;
  font-size: var(--mantine-font-size-sm);
  line-height: 1.3;
  color: var(--mantine-color-bright);
}

.description {
  margin-top: 4px;
  color: var(--mantine-color-dimmed);
  font-size: var(--mantine-font-size-xs);
}
`}]},B={type:"code",component:function(){return(0,o.jsxs)(k.Group,{children:[(0,o.jsx)(i.Checkbox.Indicator,{}),(0,o.jsx)(i.Checkbox.Indicator,{checked:!0}),(0,o.jsx)(i.Checkbox.Indicator,{indeterminate:!0}),(0,o.jsx)(i.Checkbox.Indicator,{disabled:!0}),(0,o.jsx)(i.Checkbox.Indicator,{disabled:!0,checked:!0}),(0,o.jsx)(i.Checkbox.Indicator,{disabled:!0,indeterminate:!0})]})},code:`
import { Checkbox, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Checkbox.Indicator />
      <Checkbox.Indicator checked />
      <Checkbox.Indicator indeterminate />
      <Checkbox.Indicator disabled />
      <Checkbox.Indicator disabled checked />
      <Checkbox.Indicator disabled indeterminate />
    </Group>
  );
}
`},q={type:"code",component:function(){return(0,o.jsxs)(h.Stack,{children:[(0,o.jsx)(i.Checkbox,{checked:!0,label:"regular checkbox",size:"lg",color:"lime.4",onChange:()=>{}}),(0,o.jsx)(i.Checkbox,{autoContrast:!0,checked:!0,label:"autoContrast checkbox",size:"lg",color:"lime.4",onChange:()=>{}})]})},code:`
import { Checkbox, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Checkbox checked label="regular checkbox" size="lg" color="lime.4" />
      <Checkbox autoContrast checked label="autoContrast checkbox" size="lg" color="lime.4" />
    </Stack>
  );
}
`,centered:!0},K={type:"code",component:function(){return(0,o.jsxs)(h.Stack,{children:[(0,o.jsx)(i.Checkbox,{label:"With boolean error",error:!0}),(0,o.jsx)(i.Checkbox,{label:"With error message",error:"Must be checked"}),(0,o.jsx)(i.Checkbox,{label:"With error message",error:"No error styles",withErrorStyles:!1})]})},code:`
import { Checkbox, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Checkbox label="With boolean error" error />
      <Checkbox label="With error message" error="Must be checked" />
      <Checkbox label="With error message" error="No error styles" withErrorStyles={false} />
    </Stack>
  );
}
`,centered:!0};var U=e.i(485108),J=e.i(387703),$=e.i(582498);let X={type:"code",component:function(){let e=(0,$.useForm)({mode:"uncontrolled",initialValues:{terms:!1},validate:{terms:(0,J.isNotEmpty)("You must accept terms and conditions")}});return(0,o.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,o.jsx)(i.Checkbox,{label:"I accept the terms and conditions",...e.getInputProps("terms",{type:"checkbox"})},e.key("terms")),(0,o.jsx)(U.Button,{type:"submit",mt:"md",children:"Submit"})]})},code:`
import { Button, Checkbox } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { terms: false },
    validate: {
      terms: isNotEmpty('You must accept terms and conditions'),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Checkbox
        label="I accept the terms and conditions"
        key={form.key('terms')}
        {...form.getInputProps('terms', { type: 'checkbox' })}
      />

      <Button type="submit" mt="md">
        Submit
      </Button>
    </form>
  );
}
`,maxWidth:340,centered:!0};var Y=e.i(638895);let Q={type:"code",component:function(){let e=(0,$.useForm)({mode:"uncontrolled",initialValues:{frameworks:[]},validate:{frameworks:(0,Y.hasLength)({min:1},"Select at least one framework")}});return(0,o.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,r.createElement)(i.Checkbox.Group,{...e.getInputProps("frameworks"),key:e.key("frameworks"),label:"Select your favorite frameworks/libraries",withAsterisk:!0},(0,o.jsxs)(k.Group,{my:5,children:[(0,o.jsx)(i.Checkbox,{value:"react",label:"React"}),(0,o.jsx)(i.Checkbox,{value:"svelte",label:"Svelte"}),(0,o.jsx)(i.Checkbox,{value:"ng",label:"Angular"}),(0,o.jsx)(i.Checkbox,{value:"vue",label:"Vue"})]})),(0,o.jsx)(U.Button,{type:"submit",mt:"md",children:"Submit"})]})},code:`
import { Button, Checkbox, Group } from '@mantine/core';
import { hasLength, useForm } from '@mantine/form';

interface FormValues {
  frameworks: string[];
}

function Demo() {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: { frameworks: [] },
    validate: {
      frameworks: hasLength({ min: 1 }, 'Select at least one framework'),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Checkbox.Group
        {...form.getInputProps('frameworks')}
        key={form.key('frameworks')}
        label="Select your favorite frameworks/libraries"
        withAsterisk
      >
        <Group my={5}>
          <Checkbox value="react" label="React" />
          <Checkbox value="svelte" label="Svelte" />
          <Checkbox value="ng" label="Angular" />
          <Checkbox value="vue" label="Vue" />
        </Group>
      </Checkbox.Group>

      <Button type="submit" mt="md">
        Submit
      </Button>
    </form>
  );
}
`},ee={type:"code",component:function(){return(0,o.jsx)(i.Checkbox.Group,{defaultValue:["react"],maxSelectedValues:2,children:(0,o.jsxs)(k.Group,{children:[(0,o.jsx)(i.Checkbox,{value:"react",label:"React"}),(0,o.jsx)(i.Checkbox,{value:"svelte",label:"Svelte"}),(0,o.jsx)(i.Checkbox,{value:"ng",label:"Angular"}),(0,o.jsx)(i.Checkbox,{value:"vue",label:"Vue"})]})})},code:`
import { Checkbox, Group } from '@mantine/core';

function Demo() {
  return (
    <Checkbox.Group defaultValue={['react']} maxSelectedValues={2}>
      <Group>
        <Checkbox value="react" label="React" />
        <Checkbox value="svelte" label="Svelte" />
        <Checkbox value="ng" label="Angular" />
        <Checkbox value="vue" label="Vue" />
      </Group>
    </Checkbox.Group>
  );
}
`},et={type:"code",component:function(){return(0,o.jsx)(i.Checkbox.Group,{disabled:!0,label:"Select your favorite frameworks/libraries",description:"This is anonymous",children:(0,o.jsxs)(h.Stack,{mt:"xs",children:[(0,o.jsx)(i.Checkbox,{value:"react",label:"React"}),(0,o.jsx)(i.Checkbox,{value:"svelte",label:"Svelte"}),(0,o.jsx)(i.Checkbox,{value:"angular",label:"Angular"}),(0,o.jsx)(i.Checkbox,{value:"vue",label:"Vue"})]})})},code:`
import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <Checkbox.Group disabled>
      <Stack>
        <Checkbox value="react" label="React" />
        <Checkbox value="svelte" label="Svelte" />
        <Checkbox value="angular" label="Angular" />
        <Checkbox value="vue" label="Vue" />
      </Stack>
    </Checkbox.Group>
  );
}
`,centered:!0};var ei=(0,t.__exportAll)({anchor:()=>S,autoContrast:()=>q,card:()=>E,cardGroup:()=>P,configurator:()=>n,customSize:()=>L,customize:()=>z,error:()=>K,groupConfigurator:()=>C,groupDisabled:()=>et,groupWithUseForm:()=>Q,icon:()=>v,iconColor:()=>D,indeterminate:()=>d,indicator:()=>B,maxSelectedValues:()=>ee,states:()=>u,stylesApi:()=>V,tooltip:()=>G,withUseForm:()=>X});e.s(["CheckboxDemos",0,ei],379328)},378380,e=>{"use strict";var t=e.i(648863),i=e.i(725695),o=e.i(690920),n=e.i(391398);let l={type:"configurator",component:function(e){return(0,n.jsx)(o.Radio.Group,{defaultValue:"react",name:"favoriteFramework",...e,children:(0,n.jsxs)(i.Group,{mt:"xs",children:[(0,n.jsx)(o.Radio,{value:"react",label:"React"}),(0,n.jsx)(o.Radio,{value:"svelte",label:"Svelte"}),(0,n.jsx)(o.Radio,{value:"ng",label:"Angular"}),(0,n.jsx)(o.Radio,{value:"vue",label:"Vue"})]})})},centered:!0,code:`
import { Radio, Group } from '@mantine/core';


function Demo() {
  return (
    <Radio.Group
      name="favoriteFramework"
      {{props}}
    >
      <Group mt="xs">
        <Radio value="react" label="React" />
        <Radio value="svelte" label="Svelte" />
        <Radio value="ng" label="Angular" />
        <Radio value="vue" label="Vue" />
      </Group>
    </Radio.Group>
  );
}
`,controls:[{prop:"label",type:"string",initialValue:"Select your favorite framework/library",libraryValue:""},{prop:"description",type:"string",initialValue:"This is anonymous",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]},a={type:"configurator",component:function(e){return(0,n.jsx)(o.Radio.Group,{name:"demo",defaultValue:"react",children:(0,n.jsx)(o.Radio,{value:"react",...e})})},code:`
import { Radio } from '@mantine/core';


function Demo() {
  return (
    <Radio
      {{props}}
    />
  );
}
`,centered:!0,controls:[{prop:"labelPosition",type:"segmented",data:[{value:"right",label:"Right"},{value:"left",label:"Left"}],initialValue:"right",libraryValue:"right"},{prop:"label",type:"string",initialValue:"I cannot be unchecked",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"variant",type:"segmented",data:[{value:"filled",label:"Filled"},{value:"outline",label:"Outline"}],initialValue:"filled",libraryValue:"filled"}]},r={type:"code",centered:!0,component:function(){return(0,n.jsx)(o.Radio.Group,{disabled:!0,name:"favoriteFramework",label:"Select your favorite framework/library",description:"This is anonymous",children:(0,n.jsxs)(i.Group,{mt:"xs",children:[(0,n.jsx)(o.Radio,{label:"React",value:"react"}),(0,n.jsx)(o.Radio,{label:"Angular",value:"nu"}),(0,n.jsx)(o.Radio,{label:"Svelte",value:"sv"})]})})},code:`
import { Radio, Group } from '@mantine/core';

function Demo() {
  return (
    <Radio.Group
      disabled
      name="favoriteFramework"
      label="Select your favorite framework/library"
      description="This is anonymous"
    >
      <Group mt="xs">
        <Radio label="React" value="react" />
        <Radio label="Angular" value="nu" />
        <Radio label="Svelte" value="sv" />
      </Group>
    </Radio.Group>
  );
}
`};var s=e.i(956031);let c={type:"code",centered:!0,component:function(){return(0,n.jsx)(o.Radio,{icon:s.CheckIcon,label:"Custom check icon",name:"check",value:"check",defaultChecked:!0})},code:`
import { Radio, CheckIcon } from '@mantine/core';

function Demo() {
  return (
    <Radio icon={CheckIcon} label="Custom check icon" name="check" value="check" defaultChecked />
  );
}
`},d={type:"code",centered:!0,component:function(){return(0,n.jsx)(o.Radio,{iconColor:"dark.8",color:"lime.4",label:"Custom icon color",name:"check",value:"check",defaultChecked:!0})},code:`
import { Radio } from '@mantine/core';

function Demo() {
  return (
    <Radio
      iconColor="dark.8"
      color="lime.4"
      label="Custom icon color"
      name="check"
      value="check"
      defaultChecked
    />
  );
}
`};var h=e.i(277991);let u=`
import { Radio } from '@mantine/core';

function Demo() {
  return (
    <Radio
      label="Radio"
      description="Radio description"
      error="Radio error"
      defaultChecked
     {{props}}
    />
  );
}
`,m={type:"styles-api",data:h.RadioStylesApi,component:function(e){return(0,n.jsx)(o.Radio,{label:"Radio",description:"Radio description",error:"Radio error",defaultChecked:!0,...e})},code:u,centered:!0};var p=e.i(431868);let f={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p.Tooltip,{label:"Radio with tooltip",children:(0,n.jsx)(o.Radio,{label:"Tooltip on radio only"})}),(0,n.jsx)(p.Tooltip,{label:"Radio with tooltip",refProp:"rootRef",children:(0,n.jsx)(o.Radio,{label:"Tooltip the entire element",mt:"md"})})]})},code:`
import { Tooltip, Radio } from '@mantine/core';

function Demo() {
  return (
    <>
      <Tooltip label="Radio with tooltip">
        <Radio label="Tooltip on radio only" />
      </Tooltip>

      <Tooltip label="Radio with tooltip" refProp="rootRef">
        <Radio label="Tooltip the entire element" mt="md" />
      </Tooltip>
    </>
  );
}
`,centered:!0};var b=e.i(671640);let x={type:"code",component:function(){return(0,n.jsxs)(b.Stack,{children:[(0,n.jsx)(o.Radio,{checked:!1,onChange:()=>{},label:"Default radio"}),(0,n.jsx)(o.Radio,{checked:!0,onChange:()=>{},label:"Checked radio"}),(0,n.jsx)(o.Radio,{checked:!0,variant:"outline",onChange:()=>{},label:"Outline checked radio"}),(0,n.jsx)(o.Radio,{disabled:!0,label:"Disabled radio"}),(0,n.jsx)(o.Radio,{disabled:!0,checked:!0,onChange:()=>{},label:"Disabled checked radio"})]})},code:`
import { Radio, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Radio checked={false} onChange={() => {}} label="Default radio" />
      <Radio checked onChange={() => {}} label="Checked radio" />
      <Radio checked variant="outline" onChange={() => {}} label="Outline checked radio" />
      <Radio disabled label="Disabled radio" />
      <Radio disabled checked onChange={() => {}} label="Disabled checked radio" />
    </Stack>
  );
}
`};var g="m_6fb185a7",v="m_862412cf",k="m_7b348797",C=e.i(191788),y=e.i(883364);let S={type:"code",centered:!0,maxWidth:320,component:function(){let[e,t]=(0,C.useState)(!1);return(0,n.jsx)(o.Radio.Card,{className:g,checked:e,onClick:()=>t(e=>!e),children:(0,n.jsxs)(i.Group,{wrap:"nowrap",align:"flex-start",children:[(0,n.jsx)(o.Radio.Indicator,{}),(0,n.jsxs)("div",{children:[(0,n.jsx)(y.Text,{className:v,children:"@mantine/core"}),(0,n.jsx)(y.Text,{className:k,children:"Core components library: inputs, buttons, overlays, etc."})]})]})})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { useState } from 'react';
import { Radio, Group, Text } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <Radio.Card
      className={classes.root}
      checked={checked}
      onClick={() => setChecked((c) => !c)}
    >
      <Group wrap="nowrap" align="flex-start">
        <Radio.Indicator />
        <div>
          <Text className={classes.label}>@mantine/core</Text>
          <Text className={classes.description}>
            Core components library: inputs, buttons, overlays, etc.
          </Text>
        </div>
      </Group>
    </Radio.Card>
  );
}
`},{fileName:"Demo.module.css",language:"scss",code:`.root {
  position: relative;
  padding: var(--mantine-spacing-md);
  transition: border-color 150ms ease;

  &[data-checked] {
    border-color: var(--mantine-primary-color-filled);
  }

  @mixin hover {
    @mixin light {
      background-color: var(--mantine-color-gray-0);
    }

    @mixin dark {
      background-color: var(--mantine-color-dark-6);
    }
  }
}

.label {
  font-family: var(--mantine-font-family-monospace);
  font-weight: bold;
  font-size: var(--mantine-font-size-md);
  line-height: 1.3;
  color: var(--mantine-color-bright);
}

.description {
  margin-top: 8px;
  color: var(--mantine-color-dimmed);
  font-size: var(--mantine-font-size-xs);
}
`}]},A=[{name:"@mantine/core",description:"Core components library: inputs, buttons, overlays, etc."},{name:"@mantine/hooks",description:"Collection of reusable hooks for React applications."},{name:"@mantine/notifications",description:"Notifications system"}],j={type:"code",centered:!0,maxWidth:320,component:function(){let[e,t]=(0,C.useState)(null),l=A.map(e=>(0,n.jsx)(o.Radio.Card,{className:g,value:e.name,children:(0,n.jsxs)(i.Group,{wrap:"nowrap",align:"flex-start",children:[(0,n.jsx)(o.Radio.Indicator,{}),(0,n.jsxs)("div",{children:[(0,n.jsx)(y.Text,{className:v,children:e.name}),(0,n.jsx)(y.Text,{className:k,children:e.description})]})]})},e.name));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Radio.Group,{value:e,onChange:t,label:"Pick one package to install",description:"Choose a package that you will need in your application",children:(0,n.jsx)(b.Stack,{pt:"md",gap:"xs",children:l})}),(0,n.jsxs)(y.Text,{fz:"xs",mt:"md",children:["CurrentValue: ",e||"–"]})]})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { useState } from 'react';
import { Radio, Group, Stack, Text } from '@mantine/core';
import classes from './Demo.module.css';

const data = [
  {
    name: '@mantine/core',
    description: 'Core components library: inputs, buttons, overlays, etc.',
  },
  { name: '@mantine/hooks', description: 'Collection of reusable hooks for React applications.' },
  { name: '@mantine/notifications', description: 'Notifications system' },
];

function Demo() {
  const [value, setValue] = useState<string | null>(null);

  const cards = data.map((item) => (
    <Radio.Card className={classes.root} value={item.name} key={item.name}>
      <Group wrap="nowrap" align="flex-start">
        <Radio.Indicator />
        <div>
          <Text className={classes.label}>{item.name}</Text>
          <Text className={classes.description}>{item.description}</Text>
        </div>
      </Group>
    </Radio.Card>
  ));

  return (
    <>
      <Radio.Group
        value={value}
        onChange={setValue}
        label="Pick one package to install"
        description="Choose a package that you will need in your application"
      >
        <Stack pt="md" gap="xs">
          {cards}
        </Stack>
      </Radio.Group>

      <Text fz="xs" mt="md">
        CurrentValue: {value || '–'}
      </Text>
    </>
  );
}
`},{fileName:"Demo.module.css",language:"scss",code:`.root {
  position: relative;
  padding: var(--mantine-spacing-md);
  transition: border-color 150ms ease;

  &[data-checked] {
    border-color: var(--mantine-primary-color-filled);
  }

  @mixin hover {
    @mixin light {
      background-color: var(--mantine-color-gray-0);
    }

    @mixin dark {
      background-color: var(--mantine-color-dark-6);
    }
  }
}

.label {
  font-family: var(--mantine-font-family-monospace);
  font-weight: bold;
  font-size: var(--mantine-font-size-md);
  line-height: 1.3;
  color: var(--mantine-color-bright);
}

.description {
  margin-top: 8px;
  color: var(--mantine-color-dimmed);
  font-size: var(--mantine-font-size-xs);
}
`}]},R={type:"code",component:function(){return(0,n.jsxs)(i.Group,{children:[(0,n.jsx)(o.Radio.Indicator,{}),(0,n.jsx)(o.Radio.Indicator,{checked:!0}),(0,n.jsx)(o.Radio.Indicator,{disabled:!0}),(0,n.jsx)(o.Radio.Indicator,{disabled:!0,checked:!0})]})},code:`
import { Radio, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Radio.Indicator />
      <Radio.Indicator checked />
      <Radio.Indicator disabled />
      <Radio.Indicator disabled checked />
    </Group>
  );
}
`},w={type:"code",centered:!0,component:function(){return(0,n.jsxs)(i.Group,{children:[(0,n.jsx)(o.Radio,{checked:!0,disabled:!0,label:"React",value:"react"}),(0,n.jsx)(o.Radio,{disabled:!0,label:"Angular",value:"nu"}),(0,n.jsx)(o.Radio,{disabled:!0,label:"Svelte",value:"sv"})]})},code:`
import { Radio, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Radio checked disabled label="React" value="react" />
      <Radio disabled label="Angular" value="nu" />
      <Radio disabled label="Svelte" value="sv" />
    </Group>
  );
}
`};var E=(0,t.__exportAll)({card:()=>S,cardGroup:()=>j,configurator:()=>a,disabled:()=>w,groupConfigurator:()=>l,groupDisabled:()=>r,icon:()=>c,iconColor:()=>d,indicator:()=>R,states:()=>x,stylesApi:()=>m,tooltip:()=>f});e.s(["RadioDemos",0,E],378380)},813788,e=>{"use strict";var t=e.i(391398),i=e.i(38856),o=e.i(379328),n=e.i(574280),l=e.i(378380),a=e.i(192222),r=e.i(720271);e.i(603441);var s=e.i(62558);e.i(457450);var c=e.i(418026);let d=(0,s.Layout)(c.MDX_DATA.Changelog7100);function h(e){let s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.useMDXComponents)(),...e.components},{Demo:c}=s;return c||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"tree-component",children:"Tree component"}),"\n",(0,t.jsxs)(s.p,{children:["New ",(0,t.jsx)(s.a,{href:"/core/tree",children:"Tree"})," component:"]}),"\n",(0,t.jsx)(c,{data:r.TreeDemos.files}),"\n",(0,t.jsx)(s.h2,{id:"formgetinputnode",children:"form.getInputNode"}),"\n",(0,t.jsxs)(s.p,{children:["New ",(0,t.jsx)(s.code,{children:"form.getInputNode(path)"})," handler returns input DOM node for the given field path.\nForm example, it can be used to focus input on form submit if there is an error:"]}),"\n",(0,t.jsx)(c,{data:n.FormDemos.focusError}),"\n",(0,t.jsx)(s.h2,{id:"container-queries-in-simplegrid",children:"Container queries in SimpleGrid"}),"\n",(0,t.jsxs)(s.p,{children:["You can now use ",(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",children:"container queries"}),"\nin ",(0,t.jsx)(s.a,{href:"/core/simple-grid",children:"SimpleGrid"})," component. With container queries, grid columns and spacing\nwill be adjusted based on the container width, not the viewport width."]}),"\n",(0,t.jsx)(s.p,{children:"Example of using container queries. To see how the grid changes, resize the root element\nof the demo with the resize handle located at the bottom right corner of the demo:"}),"\n",(0,t.jsx)(c,{data:a.SimpleGridDemos.container}),"\n",(0,t.jsx)(s.h2,{id:"checkbox-and-radio-indicators",children:"Checkbox and Radio indicators"}),"\n",(0,t.jsxs)(s.p,{children:["New ",(0,t.jsx)(s.a,{href:"/core/checkbox/#checkboxindicator",children:"Checkbox.Indicator"})," and ",(0,t.jsx)(s.a,{href:"/core/radio/#radioindicator",children:"Radio.Indicator"}),"\ncomponents look exactly the same as ",(0,t.jsx)(s.code,{children:"Checkbox"})," and ",(0,t.jsx)(s.code,{children:"Radio"})," components, but they do not\nhave any semantic meaning, they are just visual representations of checkbox and radio states."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Checkbox.Indicator"})," component:"]}),"\n",(0,t.jsx)(c,{data:o.CheckboxDemos.indicator}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Radio.Indicator"})," component:"]}),"\n",(0,t.jsx)(c,{data:l.RadioDemos.indicator}),"\n",(0,t.jsx)(s.h2,{id:"checkbox-and-radio-cards",children:"Checkbox and Radio cards"}),"\n",(0,t.jsxs)(s.p,{children:["New ",(0,t.jsx)(s.a,{href:"/core/checkbox/#checkboxcard-component",children:"Checkbox.Card"})," and ",(0,t.jsx)(s.a,{href:"/core/radio/#radiocard-component",children:"Radio.Card"}),"\ncomponents can be used as replacements for ",(0,t.jsx)(s.code,{children:"Checkbox"})," and ",(0,t.jsx)(s.code,{children:"Radio"})," to build custom cards/buttons/etc.\nthat work as checkboxes and radios. Components are accessible by default and support the same\nkeyboard interactions as ",(0,t.jsx)(s.code,{children:'input[type="checkbox"]'})," and ",(0,t.jsx)(s.code,{children:'input[type="radio"]'}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Checkbox.Card"})," component:"]}),"\n",(0,t.jsx)(c,{data:o.CheckboxDemos.card}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Checkbox.Card"})," component with ",(0,t.jsx)(s.code,{children:"Checkbox.Group"}),":"]}),"\n",(0,t.jsx)(c,{data:o.CheckboxDemos.cardGroup}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Radio.Card"})," component:"]}),"\n",(0,t.jsx)(c,{data:l.RadioDemos.card}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Radio.Card"})," component with ",(0,t.jsx)(s.code,{children:"Radio.Group"}),":"]}),"\n",(0,t.jsx)(c,{data:l.RadioDemos.cardGroup}),"\n",(0,t.jsx)(s.h2,{id:"bd-style-prop",children:"bd style prop"}),"\n",(0,t.jsxs)(s.p,{children:["New ",(0,t.jsx)(s.a,{href:"/styles/style-props/",children:"bd style prop"})," can be used to set ",(0,t.jsx)(s.code,{children:"border"})," CSS property.\nIt is available in all components that support style props."]}),"\n",(0,t.jsx)(s.p,{children:"Border width value is automatically converted to rem. For border color you can reference\ntheme colors similar to other style props:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",children:"import { Box } from '@mantine/core';\n\nfunction Demo() {\n  return <Box bd=\"1px solid red.5\" />;\n}\n"})})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(d,{...e,children:(0,t.jsx)(h,{...e})})}])},760705,(e,t,i)=>{let o="/changelog/7-10-0";(window.__NEXT_P=window.__NEXT_P||[]).push([o,()=>e.r(813788)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([o])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);