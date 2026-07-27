(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,n)=>{let o={};for(var l in e)t(o,l,{get:e[l],enumerable:!0});return n||t(o,Symbol.toStringTag,{value:"Module"}),o}])},530514,e=>{"use strict";e.s(["createTheme",0,function(e){return e}])},638895,e=>{"use strict";function t(e,t){if("number"==typeof e)return t.length===e;let{max:n,min:o}=e,l=!0;return"number"==typeof n&&t.length>n&&(l=!1),"number"==typeof o&&t.length<o&&(l=!1),l}e.s(["hasLength",0,function(e,n){let o=n||!0;return n=>"string"==typeof n?t(e,n.trim())?null:o:"object"==typeof n&&null!==n&&"length"in n&&t(e,n)?null:o}])},463044,e=>{"use strict";let t;var n=e.i(191788),o=e.i(730943);function l(e,t,n){let o,l=n.initialDeps??[],a=!0;function s(){let s=e();return(s.length!==l.length||s.some((e,t)=>l[t]!==e))&&(l=s,o=t(...s),(null==n?void 0:n.onChange)&&!(a&&n.skipInitialOnChange)&&n.onChange(o),a=!1),o}return s.updateDeps=e=>{l=e},s}function a(e,t){if(void 0!==e)return e;throw Error(`Unexpected undefined${t?`: ${t}`:""}`)}e.i(350461);let s=()=>{if(void 0!==t)return t;if("u"<typeof navigator)return t=!1;if(/iP(hone|od|ad)/.test(navigator.userAgent))return t=!0;let e=navigator.maxTouchPoints;return t="MacIntel"===navigator.platform&&void 0!==e&&e>0},i=e=>{let{offsetWidth:t,offsetHeight:n}=e;return{width:t,height:n}},r=e=>e,c=e=>{let t=Math.max(e.startIndex-e.overscan,0),n=Math.min(e.endIndex+e.overscan,e.count-1)-t+1,o=Array(n);for(let e=0;e<n;e++)o[e]=t+e;return o},h=(e,t)=>{let n=e.scrollElement;if(!n)return;let o=e.targetWindow;if(!o)return;let l=e=>{let{width:n,height:o}=e;t({width:Math.round(n),height:Math.round(o)})};if(l(i(n)),!o.ResizeObserver)return()=>{};let a=new o.ResizeObserver(t=>{let o=()=>{let e=t[0];if(null==e?void 0:e.borderBoxSize){let t=e.borderBoxSize[0];if(t)return void l({width:t.inlineSize,height:t.blockSize})}l(i(n))};e.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(o):o()});return a.observe(n,{box:"border-box"}),()=>{a.unobserve(n)}},d={passive:!0},m="u"<typeof window||"onscrollend"in window,b=(e,t)=>((e,t,n)=>{var o,l;let a,s=e.scrollElement;if(!s)return;let i=e.targetWindow;if(!i)return;let r=e.options.useScrollendEvent&&m,c=0,h=r?null:(o=()=>t(c,!1),l=e.options.isScrollingResetDelay,function(...e){i.clearTimeout(a),a=i.setTimeout(()=>o.apply(this,e),l)}),b=e=>()=>{c=n(s),null==h||h(),t(c,e)},u=b(!0),p=b(!1);return s.addEventListener("scroll",u,d),r&&s.addEventListener("scrollend",p,d),()=>{s.removeEventListener("scroll",u),r&&s.removeEventListener("scrollend",p)}})(e,t,t=>{let{horizontal:n,isRtl:o}=e.options;return n?t.scrollLeft*(o&&-1||1):t.scrollTop}),u=(e,t,n)=>{if(n.options.useCachedMeasurements){let t=n.indexFromElement(e),o=n.options.getItemKey(t);return n.itemSizeCache.get(o)??n.options.estimateSize(t)}if(null==t?void 0:t.borderBoxSize){let e=t.borderBoxSize[0];if(e)return Math.round(e[n.options.horizontal?"inlineSize":"blockSize"])}if(!t){let t=n.indexFromElement(e),o=n.options.getItemKey(t),l=n.itemSizeCache.get(o);if(void 0!==l)return l}return e[n.options.horizontal?"offsetWidth":"offsetHeight"]},p=(e,{adjustments:t=0,behavior:n},o)=>{var l,a;null==(a=null==(l=o.scrollElement)?void 0:l.scrollTo)||a.call(l,{[o.options.horizontal?"left":"top"]:e+t,behavior:n})};class T{constructor(e){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollState=null,this.measurementsCache=[],this._flatMeasurements=null,this.itemSizeCache=new Map,this.itemSizeCacheVersion=0,this.laneAssignments=new Map,this.pendingMin=null,this.prevLanes=void 0,this.lanesChangedFlag=!1,this.lanesSettling=!1,this.pendingScrollAnchor=null,this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this._iosDeferredAdjustment=0,this._iosTouching=!1,this._iosJustTouchEnded=!1,this._iosTouchEndTimerId=null,this._intendedScrollOffset=null,this.elementsCache=new Map,this.now=()=>{var e,t,n;return(null==(n=null==(t=null==(e=this.targetWindow)?void 0:e.performance)?void 0:t.now)?void 0:n.call(t))??Date.now()},this.observer=(()=>{let e=null,t=()=>e||(this.targetWindow&&this.targetWindow.ResizeObserver?e=new this.targetWindow.ResizeObserver(e=>{e.forEach(e=>{let t=()=>{let t=e.target,n=this.indexFromElement(t);if(!t.isConnected){for(let[e,n]of(this.observer.unobserve(t),this.elementsCache))if(n===t){this.elementsCache.delete(e);break}return}this.shouldMeasureDuringScroll(n)&&this.resizeItem(n,this.options.measureElement(t,e,this))};this.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(t):t()})}):null);return{disconnect:()=>{var n;null==(n=t())||n.disconnect(),e=null},observe:e=>{var n;return null==(n=t())?void 0:n.observe(e,{box:"border-box"})},unobserve:e=>{var n;return null==(n=t())?void 0:n.unobserve(e)}}})(),this.range=null,this.setOptions=e=>{var t,n;let o={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:r,rangeExtractor:c,onChange:()=>{},measureElement:u,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,anchorTo:"start",followOnAppend:!1,scrollEndThreshold:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,useScrollendEvent:!1,useAnimationFrameWithResizeObserver:!1,laneAssignmentMode:"estimate",useCachedMeasurements:!1};for(let t in e){let n=e[t];void 0!==n&&(o[t]=n)}let l=this.options,a=null,s=null,i=!1;if(void 0!==l&&l.enabled&&o.enabled&&"end"===o.anchorTo&&null!==this.scrollElement){let e=l.count,r=o.count,c=this.getMeasurements(),h=e>0?(null==(t=c[0])?void 0:t.key)??l.getItemKey(0):null,d=e>0?(null==(n=c[e-1])?void 0:n.key)??l.getItemKey(e-1):null;if(r!==e||e>0&&r>0&&(o.getItemKey(0)!==h||o.getItemKey(r-1)!==d)){i=!0;let t=e>0?this.getVirtualItemForOffset(this.getScrollOffset())??c[0]:null;t&&(a=[t.key,this.getScrollOffset()-t.start]);let n=!0===o.followOnAppend?"auto":o.followOnAppend||null;n&&r>e&&this.isAtEnd(l.scrollEndThreshold)&&(0===e||o.getItemKey(r-1)!==d)&&(s=n)}}this.options=o,i&&(this.pendingMin=0,this.itemSizeCacheVersion++);let h=!1,d=0;if(a&&null!==this.scrollOffset){let[e,t]=a,n=this.getMeasurements(),{count:o,getItemKey:l}=this.options,s=0;for(;s<o&&l(s)!==e;)s++;if(s<o){let e=n[s];if(e){let n=e.start+t;n!==this.scrollOffset&&(d=n-this.scrollOffset,this.scrollOffset=n,h=!0)}}}(h||s)&&(this.pendingScrollAnchor=[h?a[0]:null,h?a[1]:0,s,d])},this.notify=e=>{var t,n;null==(n=(t=this.options).onChange)||n.call(t,this,e)},this.maybeNotify=l(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),e=>{this.notify(e)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(e=>e()),this.unsubs=[],this.observer.disconnect(),null!=this.rafId&&this.targetWindow&&(this.targetWindow.cancelAnimationFrame(this.rafId),this.rafId=null),this.scrollState=null,this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var e;let t=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==t){if(this.cleanup(),!t)return void this.maybeNotify();if(this.scrollElement=t,this.scrollElement&&"ownerDocument"in this.scrollElement?this.targetWindow=this.scrollElement.ownerDocument.defaultView:this.targetWindow=(null==(e=this.scrollElement)?void 0:e.window)??null,this.elementsCache.forEach(e=>{this.observer.observe(e)}),this.unsubs.push(this.options.observeElementRect(this,e=>{this.scrollRect=e,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(e,t)=>{if(t&&null===this._intendedScrollOffset&&e===this.scrollOffset)return;null!==this._intendedScrollOffset&&1.5>Math.abs(e-this._intendedScrollOffset)&&(e=this._intendedScrollOffset),this._intendedScrollOffset=null,this.scrollAdjustments=0;let n=this.getScrollOffset();this.scrollDirection=t?n===e?this.scrollDirection:n<e?"forward":"backward":null,this.scrollOffset=e,this.isScrolling=t,this._flushIosDeferredIfReady(),this.scrollState&&this.scheduleScrollReconcile(),this.maybeNotify()})),"addEventListener"in this.scrollElement){let e=this.scrollElement,t=()=>{this._iosTouching=!0,this._iosJustTouchEnded=!1,null!==this._iosTouchEndTimerId&&null!=this.targetWindow&&(this.targetWindow.clearTimeout(this._iosTouchEndTimerId),this._iosTouchEndTimerId=null)},n=()=>{this._iosTouching=!1,s()&&null!=this.targetWindow&&(this._iosJustTouchEnded=!0,this._iosTouchEndTimerId=this.targetWindow.setTimeout(()=>{this._iosJustTouchEnded=!1,this._iosTouchEndTimerId=null,this._flushIosDeferredIfReady()},150))};e.addEventListener("touchstart",t,d),e.addEventListener("touchend",n,d),this.unsubs.push(()=>{e.removeEventListener("touchstart",t),e.removeEventListener("touchend",n),null!==this._iosTouchEndTimerId&&null!=this.targetWindow&&(this.targetWindow.clearTimeout(this._iosTouchEndTimerId),this._iosTouchEndTimerId=null)})}this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0})}let n=this.pendingScrollAnchor;if(this.pendingScrollAnchor=null,n&&this.scrollElement&&this.options.enabled){let[e,t,o,l]=n;null===e||o||(s()&&(this.isScrolling||this._iosTouching||this._iosJustTouchEnded)?0!==l&&(this._iosDeferredAdjustment+=l):this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0})),o&&this.scrollToEnd({behavior:o})}},this._flushIosDeferredIfReady=()=>{if(0===this._iosDeferredAdjustment||this.isScrolling||this._iosTouching||this._iosJustTouchEnded)return;let e=this.getScrollOffset(),t=this.getMaxScrollOffset();if(e<0||e>t)return;let n=this._iosDeferredAdjustment;this._iosDeferredAdjustment=0,this._scrollToOffset(e,{adjustments:this.scrollAdjustments+=n,behavior:void 0})},this.rafId=null,this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??("function"==typeof this.options.initialOffset?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(e,t)=>{let n=new Map,o=new Map;for(let l=t-1;l>=0;l--){let t=e[l];if(n.has(t.lane))continue;let a=o.get(t.lane);if(null==a||t.end>a.end?o.set(t.lane,t):t.end<a.end&&n.set(t.lane,!0),n.size===this.options.lanes)break}return o.size===this.options.lanes?Array.from(o.values()).sort((e,t)=>e.end===t.end?e.index-t.index:e.end-t.end)[0]:void 0},this.getMeasurementOptions=l(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled,this.options.lanes,this.options.laneAssignmentMode],(e,t,n,o,l,a,s)=>(void 0!==this.prevLanes&&this.prevLanes!==a&&(this.lanesChangedFlag=!0),this.prevLanes=a,this.pendingMin=null,{count:e,paddingStart:t,scrollMargin:n,getItemKey:o,enabled:l,lanes:a,laneAssignmentMode:s}),{key:!1}),this.getMeasurements=l(()=>[this.getMeasurementOptions(),this.itemSizeCacheVersion],({count:e,paddingStart:t,scrollMargin:n,getItemKey:o,enabled:l,lanes:a,laneAssignmentMode:s},i)=>{let r=this.itemSizeCache;if(!l)return this.measurementsCache=[],this.itemSizeCache.clear(),this.laneAssignments.clear(),[];if(this.laneAssignments.size>e)for(let t of this.laneAssignments.keys())t>=e&&this.laneAssignments.delete(t);this.lanesChangedFlag&&(this.lanesChangedFlag=!1,this.lanesSettling=!0,this.measurementsCache=[],this.itemSizeCache.clear(),this.laneAssignments.clear(),this.pendingMin=null),0!==this.measurementsCache.length||this.lanesSettling||(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(e=>{this.itemSizeCache.set(e.key,e.size)}));let c=this.lanesSettling?0:this.pendingMin??0;if(this.pendingMin=null,this.lanesSettling&&this.measurementsCache.length===e&&(this.lanesSettling=!1),1===a){var h;let l,a=this.options.gap,s=2*e,i=this._flatMeasurements;if(!i||i.length<s){let e=new Float64Array(s);i&&c>0&&e.set(i.subarray(0,2*c)),i=e,this._flatMeasurements=i}if(0===c)l=t+n;else{let e=c-1;l=i[2*e]+i[2*e+1]+a}for(let t=c;t<e;t++){let e=o(t),n=r.get(e),s="number"==typeof n?n:this.options.estimateSize(t);i[2*t]=l,i[2*t+1]=s,l+=s+a}let d=(h=i,new Proxy(Array(e),{get(t,n,l){if("string"==typeof n){let l=n.charCodeAt(0);if(l>=48&&l<=57){let l=+n;if(Number.isInteger(l)&&l>=0&&l<e){let e=t[l];if(!e){let n=h[2*l];e=t[l]={index:l,key:o(l),start:n,size:h[2*l+1],end:n+h[2*l+1],lane:0}}return e}}if("length"===n)return e}return Reflect.get(t,n,l)}}));return this.measurementsCache=d,d}let d=this.measurementsCache.slice(0,c),m=Array(a).fill(void 0);for(let e=0;e<c;e++){let t=d[e];t&&(m[t.lane]=e)}for(let l=c;l<e;l++){let e,a,i=o(l),c=this.laneAssignments.get(l),h="estimate"===s||r.has(i);if(void 0!==c&&this.options.lanes>1){let o=m[e=c],l=void 0!==o?d[o]:void 0;a=l?l.end+this.options.gap:t+n}else{let o=1===this.options.lanes?d[l-1]:this.getFurthestMeasurement(d,l);a=o?o.end+this.options.gap:t+n,e=o?o.lane:l%this.options.lanes,this.options.lanes>1&&h&&this.laneAssignments.set(l,e)}let b=r.get(i),u="number"==typeof b?b:this.options.estimateSize(l),p=a+u;d[l]={index:l,start:a,size:u,end:p,key:i,lane:e},m[e]=l}return this.measurementsCache=d,d},{key:!1,debug:()=>this.options.debug}),this.calculateRange=l(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset(),this.options.lanes],(e,t,n,o)=>0===e.length||0===t?(this.range=null,null):(this.range=function(e,t,n,o,l){let a=e.length-1;if(e.length<=o)return{startIndex:0,endIndex:a};if(1===o&&null!==l){let e=function(e,t,n){let o=0;for(;o<=t;){let l=(o+t)/2|0,a=e[2*l];if(a<n)o=l+1;else{if(!(a>n))return l;t=l-1}}return o>0?o-1:0}(l,a,n),o=e,s=n+t;for(;o<a&&l[2*o]+l[2*o+1]<s;)o++;return{startIndex:e,endIndex:o}}let s=x(0,a,t=>e[t].start,n),i=s;if(1===o)for(;i<a&&e[i].end<n+t;)i++;else if(o>1){let l=Array(o).fill(0);for(;i<a&&l.some(e=>e<n+t);){let t=e[i];l[t.lane]=t.end,i++}let r=Array(o).fill(n+t);for(;s>=0&&r.some(e=>e>=n);){let t=e[s];r[t.lane]=t.start,s--}s=Math.max(0,s-s%o),i=Math.min(a,i+(o-1-i%o))}return{startIndex:s,endIndex:i}}(e,t,n,o,1===o&&null!=this._flatMeasurements?this._flatMeasurements:null),this.range),{key:!1,debug:()=>this.options.debug}),this.getVirtualIndexes=l(()=>{let e=null,t=null,n=this.calculateRange();return n&&(e=n.startIndex,t=n.endIndex),this.maybeNotify.updateDeps([this.isScrolling,e,t]),[this.options.rangeExtractor,this.options.overscan,this.options.count,e,t]},(e,t,n,o,l)=>null===o||null===l?[]:e({startIndex:o,endIndex:l,overscan:t,count:n}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=e=>{let t=this.options.indexAttribute,n=e.getAttribute(t);return n?parseInt(n,10):(console.warn(`Missing attribute name '${t}={index}' on measured element.`),-1)},this.shouldMeasureDuringScroll=e=>{var t;if(!this.scrollState||"smooth"!==this.scrollState.behavior)return!0;let n=this.scrollState.index??(null==(t=this.getVirtualItemForOffset(this.scrollState.lastTargetOffset))?void 0:t.index);if(void 0!==n&&this.range){let t=Math.max(this.options.overscan,Math.ceil((this.range.endIndex-this.range.startIndex)/2)),o=Math.max(0,n-t),l=Math.min(this.options.count-1,n+t);return e>=o&&e<=l}return!0},this.measureElement=e=>{if(!e)return void this.elementsCache.forEach((e,t)=>{e.isConnected||(this.observer.unobserve(e),this.elementsCache.delete(t))});let t=this.indexFromElement(e),n=this.options.getItemKey(t),o=this.elementsCache.get(n);o!==e&&(o&&this.observer.unobserve(o),this.observer.observe(e),this.elementsCache.set(n,e)),(!this.isScrolling||this.scrollState)&&this.shouldMeasureDuringScroll(t)&&this.resizeItem(t,this.options.measureElement(e,void 0,this))},this.resizeItem=(e,t)=>{var n,o;let l,a,s;if(e<0||e>=this.options.count)return;let i=this._flatMeasurements;if(1===this.options.lanes&&null!==i)s=this.options.getItemKey(e),a=i[2*e],l=i[2*e+1];else{let t=this.measurementsCache[e];if(!t)return;s=t.key,a=t.start,l=t.size}let r=t-(this.itemSizeCache.get(s)??l);if(0!==r){let i="end"===this.options.anchorTo&&(null==(n=this.scrollState)?void 0:n.behavior)!=="smooth"&&this.getVirtualDistanceFromEnd()<=this.options.scrollEndThreshold,c=i?this.getTotalSize():0,h=(null==(o=this.scrollState)?void 0:o.behavior)!=="smooth"&&(void 0!==this.shouldAdjustScrollPositionOnItemSizeChange?this.shouldAdjustScrollPositionOnItemSizeChange(this.measurementsCache[e]??{index:e,key:s,start:a,size:l,end:a+l,lane:0},r,this):a<this.getScrollOffset()+this.scrollAdjustments&&(!this.itemSizeCache.has(s)||"backward"!==this.scrollDirection));(null===this.pendingMin||e<this.pendingMin)&&(this.pendingMin=e),this.itemSizeCache.set(s,t),this.itemSizeCacheVersion++,i?this.applyScrollAdjustment(this.getTotalSize()-c):h&&this.applyScrollAdjustment(r),this.notify(!1)}},this.getVirtualItems=l(()=>[this.getVirtualIndexes(),this.getMeasurements()],(e,t)=>{let n=[];for(let o=0,l=e.length;o<l;o++){let l=t[e[o]];n.push(l)}return n},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=e=>{let t=this.getMeasurements();if(0===t.length)return;let n=this._flatMeasurements,o=1===this.options.lanes&&null!=n,l=x(0,t.length-1,o?e=>n[2*e]:e=>a(t[e]).start,e);return a(t[l])},this.getMaxScrollOffset=()=>{if(!this.scrollElement)return 0;if("scrollHeight"in this.scrollElement)return this.options.horizontal?this.scrollElement.scrollWidth-this.scrollElement.clientWidth:this.scrollElement.scrollHeight-this.scrollElement.clientHeight;{let e=this.scrollElement.document.documentElement;return this.options.horizontal?e.scrollWidth-this.scrollElement.innerWidth:e.scrollHeight-this.scrollElement.innerHeight}},this.getVirtualDistanceFromEnd=()=>Math.max(this.getTotalSize()-this.getSize()-this.getScrollOffset(),0),this.getDistanceFromEnd=()=>Math.max(this.getMaxScrollOffset()-this.getScrollOffset(),0),this.isAtEnd=(e=this.options.scrollEndThreshold)=>this.getDistanceFromEnd()<=e,this.getOffsetForAlignment=(e,t,n=0)=>{if(!this.scrollElement)return 0;let o=this.getSize(),l=this.getScrollOffset();return"auto"===t&&(t=e>=l+o?"end":"start"),"center"===t?e+=(n-o)/2:"end"===t&&(e-=o),Math.max(Math.min(this.getMaxScrollOffset(),e),0)},this.getOffsetForIndex=(e,t="auto")=>{e=Math.max(0,Math.min(e,this.options.count-1));let n=this.getSize(),o=this.getScrollOffset(),l=this.measurementsCache[e];if(!l)return;if("auto"===t)if(l.end>=o+n-this.options.scrollPaddingEnd)t="end";else{if(!(l.start<=o+this.options.scrollPaddingStart))return[o,t];t="start"}if("end"===t&&e===this.options.count-1)return[this.getMaxScrollOffset(),t];let a="end"===t?l.end+this.options.scrollPaddingEnd:l.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(a,t,l.size),t]},this.scrollToOffset=(e,{align:t="start",behavior:n="auto"}={})=>{let o=this.getOffsetForAlignment(e,t),l=this.now();this.scrollState={index:null,align:t,behavior:n,startedAt:l,lastTargetOffset:o,stableFrames:0},this._scrollToOffset(o,{adjustments:void 0,behavior:n}),this.scheduleScrollReconcile()},this.scrollToIndex=(e,{align:t="auto",behavior:n="auto"}={})=>{e=Math.max(0,Math.min(e,this.options.count-1));let o=this.getOffsetForIndex(e,t);if(!o)return;let[l,a]=o,s=this.now();this.scrollState={index:e,align:a,behavior:n,startedAt:s,lastTargetOffset:l,stableFrames:0},this._scrollToOffset(l,{adjustments:void 0,behavior:n}),this.scheduleScrollReconcile()},this.scrollBy=(e,{behavior:t="auto"}={})=>{let n=this.getScrollOffset()+e,o=this.now();this.scrollState={index:null,align:"start",behavior:t,startedAt:o,lastTargetOffset:n,stableFrames:0},this._scrollToOffset(n,{adjustments:void 0,behavior:t}),this.scheduleScrollReconcile()},this.scrollToEnd=({behavior:e="auto"}={})=>{this.options.count>0?this.scrollToIndex(this.options.count-1,{align:"end",behavior:e}):this.scrollToOffset(Math.max(this.getTotalSize()-this.getSize(),0),{behavior:e})},this.getTotalSize=()=>{var e;let t,n=this.getMeasurements();if(0===n.length)t=this.options.paddingStart;else if(1===this.options.lanes){let o=n.length-1,l=this._flatMeasurements;t=null!=l?l[2*o]+l[2*o+1]:(null==(e=n[o])?void 0:e.end)??0}else{let e=Array(this.options.lanes).fill(null),o=n.length-1;for(;o>=0&&e.some(e=>null===e);){let t=n[o];null===e[t.lane]&&(e[t.lane]=t.end),o--}t=Math.max(...e.filter(e=>null!==e))}return Math.max(t-this.options.scrollMargin+this.options.paddingEnd,0)},this.takeSnapshot=()=>{let e=[];if(0===this.itemSizeCache.size)return e;for(let t of this.getMeasurements())t&&this.itemSizeCache.has(t.key)&&e.push({index:t.index,key:t.key,start:t.start,size:t.size,end:t.end,lane:t.lane});return e},this._scrollToOffset=(e,{adjustments:t,behavior:n})=>{this._intendedScrollOffset=e+(t??0),this.options.scrollToFn(e,{behavior:n,adjustments:t},this)},this.measure=()=>{this.pendingMin=null,this.itemSizeCache.clear(),this.laneAssignments.clear(),this.itemSizeCacheVersion++,this.notify(!1)},this.setOptions(e)}applyScrollAdjustment(e,t){0!==e&&(s()&&(this.isScrolling||this._iosTouching||this._iosJustTouchEnded)?this._iosDeferredAdjustment+=e:(this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=e,behavior:t}),null!==this.scrollOffset&&(this.scrollOffset+=this.scrollAdjustments,this.scrollAdjustments=0)))}scheduleScrollReconcile(){if(!this.targetWindow){this.scrollState=null;return}null==this.rafId&&(this.rafId=this.targetWindow.requestAnimationFrame(()=>{this.rafId=null,this.reconcileScroll()}))}reconcileScroll(){if(!this.scrollState||!this.scrollElement)return;if(this.now()-this.scrollState.startedAt>5e3){this.scrollState=null;return}let e=null!=this.scrollState.index?this.getOffsetForIndex(this.scrollState.index,this.scrollState.align):void 0,t=e?e[0]:this.scrollState.lastTargetOffset,n=t!==this.scrollState.lastTargetOffset;if(!n&&1.01>Math.abs(t-this.getScrollOffset())){if(this.scrollState.stableFrames++,this.scrollState.stableFrames>=1){this.getScrollOffset()!==t&&this._scrollToOffset(t,{adjustments:void 0,behavior:"auto"}),this.scrollState=null;return}}else if(this.scrollState.stableFrames=0,n){let e=this.getSize()||600,n=Math.abs(t-this.getScrollOffset()),o="smooth"===this.scrollState.behavior&&n>e;this.scrollState.lastTargetOffset=t,o||(this.scrollState.behavior="auto"),this._scrollToOffset(t,{adjustments:void 0,behavior:o?"smooth":"auto"})}this.scheduleScrollReconcile()}}let x=(e,t,n,o)=>{for(;e<=t;){let l=(e+t)/2|0,a=n(l);if(a<o)e=l+1;else{if(!(a>o))return l;t=l-1}}return e>0?e-1:0},f="u">typeof document?n.useLayoutEffect:n.useEffect;e.s(["useVirtualizer",0,function(e){return function({useFlushSync:e=!0,directDomUpdates:t=!1,directDomUpdatesMode:l="transform",...a}){let s=n.useReducer(e=>e+1,0)[1],i=n.useRef({enabled:t,mode:l,container:null,lastSize:null,lastPositions:new WeakMap,prevRange:null});i.current.enabled=t,i.current.mode=l;let r=e=>{let t=i.current;if(!t.enabled||!t.container)return;let n=e.getTotalSize();if(n!==t.lastSize){t.lastSize=n;let o=e.options.horizontal?"width":"height";t.container.style[o]=`${n}px`}let o=!!e.options.horizontal,l="transform"===t.mode,a=o?"left":"top",s=e.options.scrollMargin;for(let n of e.getVirtualItems()){let i=n.start-s,r=e.elementsCache.get(n.key);r&&t.lastPositions.get(r)!==i&&(t.lastPositions.set(r,i),l?r.style.transform=o?`translate3d(${i}px, 0, 0)`:`translate3d(0, ${i}px, 0)`:r.style[a]=`${i}px`)}},c={...a,onChange:(t,n)=>{var l;let c=i.current,h=!0;if(c.enabled){r(t);let e=t.range,n=c.prevRange;(h=!n||n.isScrolling!==t.isScrolling||n.startIndex!==(null==e?void 0:e.startIndex)||n.endIndex!==(null==e?void 0:e.endIndex))&&(c.prevRange=e?{startIndex:e.startIndex,endIndex:e.endIndex,isScrolling:t.isScrolling}:null)}h&&(e&&n?(0,o.flushSync)(s):s()),null==(l=a.onChange)||l.call(a,t,n)}},[h]=n.useState(()=>{let e=new T(c);return Object.assign(e,{containerRef:t=>{let n=i.current;if(n.container=t,n.lastSize=null,t&&n.enabled){let o=e.getTotalSize();n.lastSize=o;let l=e.options.horizontal?"width":"height";t.style[l]=`${o}px`}}})});return h.setOptions(c),f(()=>h._didMount(),[]),f(()=>h._willUpdate()),f(()=>{r(h)}),h}({observeElementRect:h,observeElementOffset:b,scrollToFn:p,...e})}],463044)},943618,e=>{"use strict";var t=e.i(44091),n=e.i(391398),o=e.i(728649);function l(e){let{value:l,defaultValue:a,...s}=(0,t.useProps)("NumberFormatter",null,e);return void 0===l?null:(0,n.jsx)(o.NumericFormat,{displayType:"text",value:l,...s})}l.extend=e=>e,l.displayName="@mantine/core/NumberFormatter",e.s(["NumberFormatter",0,l])},241111,e=>{"use strict";let t,n,o;var l=e.i(648863);let a=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}],s=[{position:1,mass:1.008,symbol:"H",name:"Hydrogen"},{position:2,mass:4.0026,symbol:"He",name:"Helium"},{position:3,mass:6.94,symbol:"Li",name:"Lithium"},{position:4,mass:9.0122,symbol:"Be",name:"Beryllium"},{position:5,mass:10.81,symbol:"B",name:"Boron"},{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:8,mass:15.999,symbol:"O",name:"Oxygen"},{position:9,mass:18.998,symbol:"F",name:"Fluorine"},{position:10,mass:20.18,symbol:"Ne",name:"Neon"},{position:11,mass:22.99,symbol:"Na",name:"Sodium"},{position:12,mass:24.305,symbol:"Mg",name:"Magnesium"},{position:13,mass:26.982,symbol:"Al",name:"Aluminium"},{position:14,mass:28.085,symbol:"Si",name:"Silicon"},{position:15,mass:30.974,symbol:"P",name:"Phosphorus"},{position:16,mass:32.06,symbol:"S",name:"Sulfur"},{position:17,mass:35.45,symbol:"Cl",name:"Chlorine"},{position:18,mass:39.948,symbol:"Ar",name:"Argon"},{position:19,mass:39.098,symbol:"K",name:"Potassium"},{position:20,mass:39.098,symbol:"Ca",name:"Calcium"},{position:21,mass:40.078,symbol:"Sc",name:"Scandium"},{position:22,mass:47.867,symbol:"Ti",name:"Titanium"},{position:23,mass:50.941,symbol:"V",name:"Vanadium"},{position:24,mass:51.996,symbol:"Cr",name:"Chromium"},{position:25,mass:54.938,symbol:"Mn",name:"Manganese"},{position:26,mass:55.845,symbol:"Fe",name:"Iron"},{position:27,mass:58.933,symbol:"Co",name:"Cobalt"},{position:28,mass:58.933,symbol:"Ni",name:"Nickel"},{position:29,mass:63.546,symbol:"Cu",name:"Copper"},{position:30,mass:65.38,symbol:"Zn",name:"Zinc"},{position:31,mass:69.723,symbol:"Ga",name:"Gallium"},{position:32,mass:72.63,symbol:"Ge",name:"Germanium"},{position:33,mass:74.922,symbol:"As",name:"Arsenic"},{position:34,mass:78.971,symbol:"Se",name:"Selenium"},{position:35,mass:79.904,symbol:"Br",name:"Bromine"},{position:36,mass:83.798,symbol:"Kr",name:"Krypton"},{position:37,mass:83.798,symbol:"Rb",name:"Rubidium"},{position:38,mass:87.62,symbol:"Sr",name:"Strontium"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:40,mass:91.224,symbol:"Zr",name:"Zirconium"},{position:41,mass:92.906,symbol:"Nb",name:"Niobium"},{position:42,mass:95.95,symbol:"Mo",name:"Molybdenum"},{position:43,mass:98,symbol:"Tc",name:"Technetium"},{position:44,mass:101.07,symbol:"Ru",name:"Ruthenium"},{position:45,mass:102.905,symbol:"Rh",name:"Rhodium"},{position:46,mass:106.42,symbol:"Pd",name:"Palladium"},{position:47,mass:106.42,symbol:"Ag",name:"Silver"},{position:48,mass:112.414,symbol:"Cd",name:"Cadmium"},{position:49,mass:114.818,symbol:"In",name:"Indium"},{position:50,mass:118.71,symbol:"Sn",name:"Tin"},{position:51,mass:121.76,symbol:"Sb",name:"Antimony"},{position:52,mass:127.6,symbol:"Te",name:"Tellurium"},{position:53,mass:126.904,symbol:"I",name:"Iodine"},{position:54,mass:126.904,symbol:"Xe",name:"Xenon"},{position:55,mass:126.904,symbol:"Cs",name:"Cesium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:57,mass:138.905,symbol:"La",name:"Lanthanum"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"},{position:59,mass:140.116,symbol:"Pr",name:"Praseodymium"},{position:60,mass:140.907,symbol:"Nd",name:"Neodymium"},{position:61,mass:144.242,symbol:"Pm",name:"Promethium"},{position:62,mass:145,symbol:"Sm",name:"Samarium"},{position:63,mass:150.36,symbol:"Eu",name:"Europium"},{position:64,mass:151.964,symbol:"Gd",name:"Gadolinium"},{position:65,mass:157.25,symbol:"Tb",name:"Terbium"},{position:66,mass:158.925,symbol:"Dy",name:"Dysprosium"},{position:67,mass:162.5,symbol:"Ho",name:"Holmium"},{position:68,mass:164.93,symbol:"Er",name:"Erbium"},{position:69,mass:167.259,symbol:"Tm",name:"Thulium"}];var i=e.i(245745),r=e.i(391398);let c={type:"code",code:`
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
`,component:function(){let e=a.map(e=>(0,r.jsxs)(i.Table.Tr,{children:[(0,r.jsx)(i.Table.Td,{children:e.position}),(0,r.jsx)(i.Table.Td,{children:e.name}),(0,r.jsx)(i.Table.Td,{children:e.symbol}),(0,r.jsx)(i.Table.Td,{children:e.mass})]},e.name));return(0,r.jsxs)(i.Table,{children:[(0,r.jsx)(i.Table.Thead,{children:(0,r.jsxs)(i.Table.Tr,{children:[(0,r.jsx)(i.Table.Th,{children:"Element position"}),(0,r.jsx)(i.Table.Th,{children:"Element name"}),(0,r.jsx)(i.Table.Th,{children:"Symbol"}),(0,r.jsx)(i.Table.Th,{children:"Atomic mass"})]})}),(0,r.jsx)(i.Table.Tbody,{children:e})]})}},h={type:"code",code:`
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
`,component:function(){let e=a.map(e=>(0,r.jsxs)(i.Table.Tr,{children:[(0,r.jsx)(i.Table.Td,{children:e.position}),(0,r.jsx)(i.Table.Td,{children:e.name}),(0,r.jsx)(i.Table.Td,{children:e.symbol}),(0,r.jsx)(i.Table.Td,{children:e.mass})]},e.name)),t=(0,r.jsxs)(i.Table.Tr,{children:[(0,r.jsx)(i.Table.Th,{children:"Element position"}),(0,r.jsx)(i.Table.Th,{children:"Element name"}),(0,r.jsx)(i.Table.Th,{children:"Symbol"}),(0,r.jsx)(i.Table.Th,{children:"Atomic mass"})]});return(0,r.jsxs)(i.Table,{captionSide:"bottom",children:[(0,r.jsx)(i.Table.Caption,{children:"Some elements from the periodic table"}),(0,r.jsx)(i.Table.Thead,{children:t}),(0,r.jsx)(i.Table.Tbody,{children:e}),(0,r.jsx)(i.Table.Tfoot,{children:t})]})}},d={type:"configurator",component:function(e){return(0,r.jsxs)(i.Table,{...e,children:[(0,r.jsx)(i.Table.Thead,{children:(0,r.jsxs)(i.Table.Tr,{children:[(0,r.jsx)(i.Table.Th,{children:"Element position"}),(0,r.jsx)(i.Table.Th,{children:"Element name"}),(0,r.jsx)(i.Table.Th,{children:"Symbol"}),(0,r.jsx)(i.Table.Th,{children:"Atomic mass"})]})}),(0,r.jsx)(i.Table.Tbody,{children:a.map(e=>(0,r.jsxs)(i.Table.Tr,{children:[(0,r.jsx)(i.Table.Td,{children:e.position}),(0,r.jsx)(i.Table.Td,{children:e.name}),(0,r.jsx)(i.Table.Td,{children:e.symbol}),(0,r.jsx)(i.Table.Td,{children:e.mass})]},e.name))})]})},code:`
import { Table } from '@mantine/core';

function Demo() {
  return (
    <Table{{props}}>
      {/* {...rows} */}
    </Table>
  );
}
`,controls:[{prop:"striped",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"highlightOnHover",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withTableBorder",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withColumnBorders",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withRowBorders",type:"boolean",initialValue:!0,libraryValue:!0}]},m={type:"configurator",component:function(e){return(0,r.jsxs)(i.Table,{...e,children:[(0,r.jsx)(i.Table.Thead,{children:(0,r.jsxs)(i.Table.Tr,{children:[(0,r.jsx)(i.Table.Th,{children:"Position"}),(0,r.jsx)(i.Table.Th,{children:"Name"}),(0,r.jsx)(i.Table.Th,{children:"Symbol"})]})}),(0,r.jsx)(i.Table.Tbody,{children:a.map(e=>(0,r.jsxs)(i.Table.Tr,{children:[(0,r.jsx)(i.Table.Td,{children:e.position}),(0,r.jsx)(i.Table.Td,{children:e.name}),(0,r.jsx)(i.Table.Td,{children:e.symbol})]},e.name))})]})},code:`
import { Table } from '@mantine/core';

function Demo() {
  return (
    <Table{{props}}>
      {/* {...rows} */}
    </Table>
  );
}
`,controls:[{prop:"horizontalSpacing",type:"size",libraryValue:"xs",initialValue:"xs"},{prop:"verticalSpacing",type:"size",initialValue:"xs",libraryValue:"xs"}]},b={type:"code",code:`
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
`,component:function(){let e=a.map(e=>(0,r.jsxs)(i.Table.Tr,{children:[(0,r.jsx)(i.Table.Td,{children:e.position}),(0,r.jsx)(i.Table.Td,{children:e.name}),(0,r.jsx)(i.Table.Td,{children:e.symbol}),(0,r.jsx)(i.Table.Td,{children:e.mass})]},e.name));return(0,r.jsx)(i.Table.ScrollContainer,{minWidth:500,children:(0,r.jsxs)(i.Table,{children:[(0,r.jsx)(i.Table.Thead,{children:(0,r.jsxs)(i.Table.Tr,{children:[(0,r.jsx)(i.Table.Th,{children:"Element position"}),(0,r.jsx)(i.Table.Th,{children:"Element name"}),(0,r.jsx)(i.Table.Th,{children:"Symbol"}),(0,r.jsx)(i.Table.Th,{children:"Atomic mass"})]})}),(0,r.jsx)(i.Table.Tbody,{children:e})]})})}},u={type:"code",code:`
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
`,component:function(){let e=s.map(e=>(0,r.jsxs)(i.Table.Tr,{children:[(0,r.jsx)(i.Table.Td,{children:e.position}),(0,r.jsx)(i.Table.Td,{children:e.name}),(0,r.jsx)(i.Table.Td,{children:e.symbol}),(0,r.jsx)(i.Table.Td,{children:e.mass})]},e.name));return(0,r.jsx)(i.Table.ScrollContainer,{minWidth:500,maxHeight:300,children:(0,r.jsxs)(i.Table,{children:[(0,r.jsx)(i.Table.Thead,{children:(0,r.jsxs)(i.Table.Tr,{children:[(0,r.jsx)(i.Table.Th,{children:"Element position"}),(0,r.jsx)(i.Table.Th,{children:"Element name"}),(0,r.jsx)(i.Table.Th,{children:"Symbol"}),(0,r.jsx)(i.Table.Th,{children:"Atomic mass"})]})}),(0,r.jsx)(i.Table.Tbody,{children:e})]})})}},p={type:"code",code:`
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
`,component:function(){let e=a.map(e=>(0,r.jsxs)(i.Table.Tr,{children:[(0,r.jsx)(i.Table.Td,{children:e.position}),(0,r.jsx)(i.Table.Td,{children:e.name}),(0,r.jsx)(i.Table.Td,{children:e.symbol}),(0,r.jsx)(i.Table.Td,{children:e.mass})]},e.name));return(0,r.jsx)(i.Table.ScrollContainer,{minWidth:500,type:"native",children:(0,r.jsxs)(i.Table,{children:[(0,r.jsx)(i.Table.Thead,{children:(0,r.jsxs)(i.Table.Tr,{children:[(0,r.jsx)(i.Table.Th,{children:"Element position"}),(0,r.jsx)(i.Table.Th,{children:"Element name"}),(0,r.jsx)(i.Table.Th,{children:"Symbol"}),(0,r.jsx)(i.Table.Th,{children:"Atomic mass"})]})}),(0,r.jsx)(i.Table.Tbody,{children:e})]})})}},T={type:"code",code:`
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
`,component:function(){let e=s.map(e=>(0,r.jsxs)(i.Table.Tr,{children:[(0,r.jsx)(i.Table.Td,{children:e.position}),(0,r.jsx)(i.Table.Td,{children:e.name}),(0,r.jsx)(i.Table.Td,{children:e.symbol}),(0,r.jsx)(i.Table.Td,{children:e.mass})]},e.name));return(0,r.jsx)(i.Table.ScrollContainer,{minWidth:500,maxHeight:300,type:"native",children:(0,r.jsxs)(i.Table,{children:[(0,r.jsx)(i.Table.Thead,{children:(0,r.jsxs)(i.Table.Tr,{children:[(0,r.jsx)(i.Table.Th,{children:"Element position"}),(0,r.jsx)(i.Table.Th,{children:"Element name"}),(0,r.jsx)(i.Table.Th,{children:"Symbol"}),(0,r.jsx)(i.Table.Th,{children:"Atomic mass"})]})}),(0,r.jsx)(i.Table.Tbody,{children:e})]})})}};var x=e.i(191788),f=e.i(37541);let g=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}],k={type:"code",component:function(){let[e,t]=(0,x.useState)([]),n=g.map(n=>(0,r.jsxs)(i.Table.Tr,{bg:e.includes(n.position)?"var(--mantine-color-blue-light)":void 0,children:[(0,r.jsx)(i.Table.Td,{children:(0,r.jsx)(f.Checkbox,{"aria-label":"Select row",checked:e.includes(n.position),onChange:o=>t(o.currentTarget.checked?[...e,n.position]:e.filter(e=>e!==n.position))})}),(0,r.jsx)(i.Table.Td,{children:n.position}),(0,r.jsx)(i.Table.Td,{children:n.name}),(0,r.jsx)(i.Table.Td,{children:n.symbol}),(0,r.jsx)(i.Table.Td,{children:n.mass})]},n.name));return(0,r.jsxs)(i.Table,{children:[(0,r.jsx)(i.Table.Thead,{visibleFrom:"sm",children:(0,r.jsxs)(i.Table.Tr,{children:[(0,r.jsx)(i.Table.Th,{}),(0,r.jsx)(i.Table.Th,{children:"Element position"}),(0,r.jsx)(i.Table.Th,{children:"Element name"}),(0,r.jsx)(i.Table.Th,{children:"Symbol"}),(0,r.jsx)(i.Table.Th,{children:"Atomic mass"})]})}),(0,r.jsx)(i.Table.Tbody,{children:n})]})},defaultExpanded:!1,code:`
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
`},y={caption:"Some elements from the periodic table",head:["Element position","Atomic mass","Symbol","Element name"],body:[[6,12.011,"C","Carbon"],[7,14.007,"N","Nitrogen"],[39,88.906,"Y","Yttrium"],[56,137.33,"Ba","Barium"],[58,140.12,"Ce","Cerium"]]},C={type:"code",component:function(){return(0,r.jsx)(i.Table,{data:y})},code:`
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
`,component:function(){let e=a.map(e=>(0,r.jsxs)(i.Table.Tr,{children:[(0,r.jsx)(i.Table.Td,{children:e.position}),(0,r.jsx)(i.Table.Td,{children:e.name}),(0,r.jsx)(i.Table.Td,{children:e.symbol}),(0,r.jsx)(i.Table.Td,{children:e.mass})]},e.name));return(0,r.jsxs)(i.Table,{stickyHeader:!0,stickyHeaderOffset:"var(--docs-header-height)",children:[(0,r.jsx)(i.Table.Thead,{children:(0,r.jsxs)(i.Table.Tr,{children:[(0,r.jsx)(i.Table.Th,{children:"Element position"}),(0,r.jsx)(i.Table.Th,{children:"Element name"}),(0,r.jsx)(i.Table.Th,{children:"Symbol"}),(0,r.jsx)(i.Table.Th,{children:"Atomic mass"})]})}),(0,r.jsx)(i.Table.Tbody,{children:e}),(0,r.jsx)(i.Table.Caption,{children:"Scroll page to see sticky thead"})]})}},v={type:"code",code:`
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
`,component:function(){return(0,r.jsx)(i.Table,{variant:"vertical",layout:"fixed",withTableBorder:!0,children:(0,r.jsxs)(i.Table.Tbody,{children:[(0,r.jsxs)(i.Table.Tr,{children:[(0,r.jsx)(i.Table.Th,{w:160,children:"Epic name"}),(0,r.jsx)(i.Table.Td,{children:"7.x migration"})]}),(0,r.jsxs)(i.Table.Tr,{children:[(0,r.jsx)(i.Table.Th,{children:"Status"}),(0,r.jsx)(i.Table.Td,{children:"Open"})]}),(0,r.jsxs)(i.Table.Tr,{children:[(0,r.jsx)(i.Table.Th,{children:"Total issues"}),(0,r.jsx)(i.Table.Td,{children:"135"})]}),(0,r.jsxs)(i.Table.Tr,{children:[(0,r.jsx)(i.Table.Th,{children:"Total story points"}),(0,r.jsx)(i.Table.Td,{children:"874"})]}),(0,r.jsxs)(i.Table.Tr,{children:[(0,r.jsx)(i.Table.Th,{children:"Last updated at"}),(0,r.jsx)(i.Table.Td,{children:"September 26, 2024 17:41:26"})]})]})})}};var S=e.i(943618);let A=[{product:"Apples",unitsSold:0x83fd3be2},{product:"Oranges",unitsSold:0x25314e33b},{product:"Bananas",unitsSold:0x499602d2},{product:"Pineapples",unitsSold:994881e4},{product:"Pears",unitsSold:0x250195167}],w={type:"configurator",component:function(e){let t=A.map(e=>(0,r.jsxs)(i.Table.Tr,{children:[(0,r.jsx)(i.Table.Td,{children:e.product}),(0,r.jsx)(i.Table.Td,{children:(0,r.jsx)(S.NumberFormatter,{value:e.unitsSold,thousandSeparator:!0})})]},e.product));return(0,r.jsxs)(i.Table,{...e,children:[(0,r.jsx)(i.Table.Thead,{children:(0,r.jsxs)(i.Table.Tr,{children:[(0,r.jsx)(i.Table.Th,{children:"Product"}),(0,r.jsx)(i.Table.Th,{children:"Units sold"})]})}),(0,r.jsx)(i.Table.Tbody,{children:t})]})},code:`
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
`,controls:[{type:"boolean",prop:"tabularNums",initialValue:!0,libraryValue:!1}]};var E=e.i(463044);let I=`interface RowData {
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
`,D=(t=["James Smith","Maria Garcia","Robert Johnson","Linda Williams","Michael Brown","Barbara Jones","David Miller","Susan Davis","Richard Wilson","Jessica Moore","Charles Taylor","Sarah Anderson","Thomas Jackson","Karen White","Daniel Harris","Nancy Martin","Matthew Thompson","Lisa Robinson","Anthony Clark","Betty Lewis"],n=["Acme Corp","Globex Inc","Initech","Umbrella Corp","Stark Industries","Wayne Enterprises","Cyberdyne Systems","Oscorp","Hooli","Pied Piper"],o=["New York","Los Angeles","Chicago","Houston","Phoenix","San Antonio","San Diego","Dallas","Austin","Seattle"],Array.from({length:5e3},(e,l)=>({id:l+1,name:t[l%t.length],email:`user${l+1}@example.com`,company:n[l%n.length],city:o[l%o.length]}))),z={type:"code",component:function(){let[e,t]=(0,x.useState)(null),n=(0,E.useVirtualizer)({count:D.length,getScrollElement:()=>e,estimateSize:()=>36,overscan:20}),o=n.getVirtualItems();return(0,r.jsx)(i.Table.ScrollContainer,{minWidth:500,maxHeight:400,scrollAreaProps:{viewportRef:t},children:(0,r.jsxs)(i.Table,{stickyHeader:!0,layout:"fixed",children:[(0,r.jsx)(i.Table.Thead,{children:(0,r.jsxs)(i.Table.Tr,{children:[(0,r.jsx)(i.Table.Th,{w:50,children:"#"}),(0,r.jsx)(i.Table.Th,{children:"Name"}),(0,r.jsx)(i.Table.Th,{children:"Email"}),(0,r.jsx)(i.Table.Th,{children:"Company"}),(0,r.jsx)(i.Table.Th,{children:"City"})]})}),(0,r.jsxs)(i.Table.Tbody,{children:[o.length>0&&(0,r.jsx)("tr",{"aria-hidden":!0,children:(0,r.jsx)("td",{"aria-hidden":!0,colSpan:5,style:{height:o[0].start,padding:0,border:"none"}})}),o.map(e=>{let t=D[e.index];return(0,r.jsxs)(i.Table.Tr,{children:[(0,r.jsx)(i.Table.Td,{children:t.id}),(0,r.jsx)(i.Table.Td,{children:t.name}),(0,r.jsx)(i.Table.Td,{children:t.email}),(0,r.jsx)(i.Table.Td,{children:t.company}),(0,r.jsx)(i.Table.Td,{children:t.city})]},e.index)}),o.length>0&&(0,r.jsx)("tr",{"aria-hidden":!0,children:(0,r.jsx)("td",{"aria-hidden":!0,colSpan:5,style:{height:n.getTotalSize()-o[o.length-1].end,padding:0,border:"none"}})})]})]})})},code:[{fileName:"Demo.tsx",language:"tsx",code:M},{fileName:"data.ts",language:"tsx",code:I}],defaultExpanded:!1};var O=(0,l.__exportAll)({captions:()=>h,configurator:()=>d,data:()=>C,rowSelection:()=>k,scrollContainer:()=>b,scrollContainerMaxHeight:()=>u,scrollContainerNative:()=>p,scrollContainerNativeMaxHeight:()=>T,spacingConfigurator:()=>m,stickyHeader:()=>j,tabularNums:()=>w,usage:()=>c,vertical:()=>v,virtualized:()=>z});e.s(["TableDemos",0,O],241111)},379328,e=>{"use strict";var t=e.i(648863),n=e.i(37541),o=e.i(391398);let l={type:"configurator",component:e=>(0,o.jsx)(n.Checkbox,{...e,defaultChecked:!0}),code:`
import { Checkbox } from '@mantine/core';


function Demo() {
  return (
    <Checkbox
      defaultChecked
      {{props}}
    />
  );
}
`,centered:!0,controls:[{prop:"labelPosition",type:"segmented",data:[{value:"right",label:"Right"},{value:"left",label:"Left"}],initialValue:"right",libraryValue:"right"},{prop:"label",type:"string",initialValue:"I agree to sell my privacy",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"variant",type:"segmented",data:[{value:"filled",label:"Filled"},{value:"outline",label:"Outline"}],initialValue:"filled",libraryValue:"filled"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"indeterminate",type:"boolean",initialValue:!1,libraryValue:!1}]};var a=e.i(232471),s=e.i(57807),i=e.i(191788);let r=`
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
`,c=[{label:"Receive email notifications",checked:!1,key:(0,s.randomId)()},{label:"Receive sms notifications",checked:!1,key:(0,s.randomId)()},{label:"Receive push notifications",checked:!1,key:(0,s.randomId)()}],h={type:"code",code:r,component:function(){let[e,t]=function(e=[]){let[t,n]=(0,i.useState)(e),o=(0,i.useCallback)((...e)=>n(t=>[...t,...e]),[]),l=(0,i.useCallback)((...e)=>n(t=>[...e,...t]),[]),a=(0,i.useCallback)((e,...t)=>n(n=>[...n.slice(0,e),...t,...n.slice(e)]),[]),s=(0,i.useCallback)(e=>n(t=>t.map((t,n)=>e(t,n))),[]),r=(0,i.useCallback)((...e)=>n(t=>t.filter((t,n)=>!e.includes(n))),[]),c=(0,i.useCallback)(()=>n(e=>{let t=[...e];return t.pop(),t}),[]),h=(0,i.useCallback)(()=>n(e=>{let t=[...e];return t.shift(),t}),[]),d=(0,i.useCallback)(({from:e,to:t})=>n(n=>{let o=[...n],l=n[e];return o.splice(e,1),o.splice(t,0,l),o}),[]),m=(0,i.useCallback)(({from:e,to:t})=>n(n=>{let o=[...n],l=o[e],a=o[t];return o.splice(t,1,l),o.splice(e,1,a),o}),[]),b=(0,i.useCallback)((e,t)=>n(n=>{let o=[...n];return o[e]=t,o}),[]),u=(0,i.useCallback)((e,t,o)=>n(n=>{let l=[...n];return l[e]={...l[e],[t]:o},l}),[]),p=(0,i.useCallback)((e,t)=>n(n=>n.map((n,o)=>e(n,o)?t(n,o):n)),[]),T=(0,i.useCallback)(e=>{n(t=>t.filter(e))},[]);return[t,(0,i.useMemo)(()=>({setState:n,append:o,prepend:l,insert:a,pop:c,shift:h,apply:s,applyWhere:p,remove:r,reorder:d,swap:m,setItem:b,setItemProp:u,filter:T}),[])]}(c),l=e.every(e=>e.checked),s=e.some(e=>e.checked)&&!l,r=e.map((e,l)=>(0,o.jsx)(n.Checkbox,{mt:"xs",ml:33,label:e.label,checked:e.checked,onChange:e=>t.setItemProp(l,"checked",e.currentTarget.checked)},e.key));return(0,o.jsxs)(a.Box,{maw:400,mx:"auto",children:[(0,o.jsx)(n.Checkbox,{checked:l,indeterminate:s,label:"Receive all notifications",onChange:()=>t.setState(e=>e.map(e=>({...e,checked:!l})))}),r]})}};var d=e.i(671640);let m={type:"code",component:function(){return(0,o.jsxs)(d.Stack,{children:[(0,o.jsx)(n.Checkbox,{checked:!1,onChange:()=>{},label:"Default checkbox"}),(0,o.jsx)(n.Checkbox,{checked:!1,onChange:()=>{},indeterminate:!0,label:"Indeterminate checkbox"}),(0,o.jsx)(n.Checkbox,{checked:!0,onChange:()=>{},label:"Checked checkbox"}),(0,o.jsx)(n.Checkbox,{checked:!0,variant:"outline",onChange:()=>{},label:"Outline checked checkbox"}),(0,o.jsx)(n.Checkbox,{variant:"outline",onChange:()=>{},indeterminate:!0,label:"Outline indeterminate checkbox"}),(0,o.jsx)(n.Checkbox,{disabled:!0,label:"Disabled checkbox"}),(0,o.jsx)(n.Checkbox,{disabled:!0,checked:!0,onChange:()=>{},label:"Disabled checked checkbox"}),(0,o.jsx)(n.Checkbox,{disabled:!0,indeterminate:!0,label:"Disabled indeterminate checkbox"})]})},code:`
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
`};var b=e.i(171481);let u=new Map([["bold",i.createElement(i.Fragment,null,i.createElement("path",{d:"M188.26,100.55c-.37-.71-.76-1.42-1.16-2.11a64,64,0,0,0-29.55-81.29,12,12,0,1,0-11.1,21.28A39.91,39.91,0,0,1,168,73.92c0,1-.05,2-.13,3a67.79,67.79,0,0,0-79.74,0c-.08-1-.13-2-.13-3a39.92,39.92,0,0,1,21.55-35.5A12,12,0,1,0,98.46,17.14,64,64,0,0,0,68.89,98.45c-.4.7-.78,1.39-1.15,2.1A64.08,64.08,0,0,0,12,164a12,12,0,0,0,24,0,40,40,0,0,1,24.18-36.73c-.11,1.56-.18,3.14-.18,4.73a68.12,68.12,0,0,0,41.63,62.68,40,40,0,0,1-47.16,3,12,12,0,1,0-12.94,20.21A63.95,63.95,0,0,0,128,201.24a63.95,63.95,0,0,0,86.47,16.69,12,12,0,1,0-12.94-20.21,40,40,0,0,1-47.16-3A68.12,68.12,0,0,0,196,132c0-1.59-.07-3.17-.18-4.73A40,40,0,0,1,220,164a12,12,0,0,0,24,0A64.08,64.08,0,0,0,188.26,100.55ZM128,88a43.85,43.85,0,0,1,30.23,12.07,39.93,39.93,0,0,1-60.46,0A43.81,43.81,0,0,1,128,88ZM84,132a44.35,44.35,0,0,1,.57-7.06,40,40,0,0,1,30.18,49A44.08,44.08,0,0,1,84,132Zm57.25,42a40,40,0,0,1,30.18-49,44,44,0,0,1-30.18,49Z"}))],["duotone",i.createElement(i.Fragment,null,i.createElement("path",{d:"M184,132a56,56,0,1,1-56-56A56,56,0,0,1,184,132Z",opacity:"0.2"}),i.createElement("path",{d:"M185.68,104.28q-1.4-2.88-3.06-5.6a60,60,0,0,0-26.92-78,8,8,0,0,0-7.4,14.19A44,44,0,0,1,170.72,84.4a63.85,63.85,0,0,0-85.46,0A44,44,0,0,1,107.7,34.87a8,8,0,1,0-7.4-14.19,60,60,0,0,0-26.93,78,62.59,62.59,0,0,0-3.05,5.58A60.07,60.07,0,0,0,16,164a8,8,0,0,0,16,0,44.09,44.09,0,0,1,32.89-42.58A63.94,63.94,0,0,0,109,193.11a44,44,0,0,1-56.65,8,8,8,0,1,0-8.62,13.47A60,60,0,0,0,126.74,196l1.26,0,1.26,0a60,60,0,0,0,83.05,18.59,8,8,0,1,0-8.62-13.47,44,44,0,0,1-56.65-8,63.94,63.94,0,0,0,44.07-71.69A44.09,44.09,0,0,1,224,164a8,8,0,0,0,16,0A60.07,60.07,0,0,0,185.68,104.28ZM128,84a47.91,47.91,0,0,1,35.56,15.79,44,44,0,0,1-71.13,0A47.89,47.89,0,0,1,128,84Zm.12,49.92-.12.2-.12-.2h.24ZM80,132a47.6,47.6,0,0,1,1.44-11.65,44,44,0,0,1,36,58.46A48.07,48.07,0,0,1,80,132Zm58.57,46.81a44,44,0,0,1,36-58.46,48,48,0,0,1-36,58.46Z"}))],["fill",i.createElement(i.Fragment,null,i.createElement("path",{d:"M239.83,159.58a60.09,60.09,0,0,0-54.17-55.31,61.63,61.63,0,0,0-3-5.59,59.94,59.94,0,0,0-26.82-77.93l-.14-.08a8.1,8.1,0,0,0-1.14-.48h0a8,8,0,0,0-6.21,14.69l.07,0C149.6,35.57,168,45.73,168,68a40,40,0,0,1-2,12.53,63.83,63.83,0,0,0-76,0A40,40,0,0,1,88,68c0-22.35,18.53-32.51,19.65-33.1l0,0a8,8,0,0,0-7.33-14.22l-.15.08a60,60,0,0,0-26.85,78c-1.1,1.8-2.12,3.66-3,5.57a60.11,60.11,0,0,0-54.15,55.32,35.86,35.86,0,0,0-.14,4.87A8,8,0,0,0,32,164c0-1.36.07-2.71.19-4,.73-6.25,4.06-19.08,18.64-27.49a39.83,39.83,0,0,1,13.32-4.81c-.1,1.43-.16,2.88-.16,4.34a64.09,64.09,0,0,0,39,58.91,39.81,39.81,0,0,1-12.15,10.84c-19.07,11-36.88.36-38.39-.58l-.12-.08a8,8,0,0,0-8.71,13.42l.24.15A59.95,59.95,0,0,0,126.74,196c.42,0,.83,0,1.25,0s.84,0,1.27,0a60,60,0,0,0,82.89,18.69l.23-.15a8,8,0,0,0-8.71-13.42l-.12.08c-1.51.94-19.32,11.59-38.39.58A39.84,39.84,0,0,1,153,190.9,64.09,64.09,0,0,0,192,132c0-1.46-.07-2.9-.16-4.33a39.84,39.84,0,0,1,13.33,4.8c14.47,8.35,17.86,21.06,18.63,27.32.13,1.39.2,2.79.2,4.21a8,8,0,0,0,16,.46A36,36,0,0,0,239.83,159.58Zm-130.1,16.8A48.08,48.08,0,0,1,80,132c0-1.27.07-2.53.17-3.78l1,.25a40,40,0,0,1,28.54,47.91ZM128,134.11l-.11-.19h.22ZM128,108A39.91,39.91,0,0,1,98.07,94.51a47.84,47.84,0,0,1,59.84,0A39.88,39.88,0,0,1,128,108Zm18.29,68.37a39.9,39.9,0,0,1,29.55-48.13c.1,1.24.16,2.49.16,3.76A48.07,48.07,0,0,1,146.28,176.37Z"}))],["light",i.createElement(i.Fragment,null,i.createElement("path",{d:"M184.35,106.18a61.77,61.77,0,0,0-4-7.33,58,58,0,0,0-25.58-76.38,6,6,0,1,0-5.54,10.64,46,46,0,0,1,22.51,55,61.89,61.89,0,0,0-87.5,0,46,46,0,0,1,22.53-55,6,6,0,0,0-5.54-10.64A58,58,0,0,0,75.64,98.87a60.67,60.67,0,0,0-4,7.31A58.06,58.06,0,0,0,18,164a6,6,0,0,0,12,0,46.08,46.08,0,0,1,37.43-45.19,61.95,61.95,0,0,0,45,73.21,46,46,0,0,1-61.2,10.75,6,6,0,0,0-6.48,10.11,58,58,0,0,0,80.9-18.94c.77,0,1.55.06,2.34.06s1.57,0,2.34-.06a58,58,0,0,0,80.9,18.94,6,6,0,0,0-6.48-10.11A46,46,0,0,1,143.56,192a61.95,61.95,0,0,0,45-73.21A46.08,46.08,0,0,1,226,164a6,6,0,0,0,12,0A58.06,58.06,0,0,0,184.35,106.18ZM128,82a49.87,49.87,0,0,1,38.09,17.67,46,46,0,0,1-76.19,0A49.86,49.86,0,0,1,128,82Zm3.8,49.79a56.82,56.82,0,0,0-3.8,6.56,58.24,58.24,0,0,0-3.79-6.56c1.25.08,2.51.13,3.78.13S130.54,131.87,131.8,131.79ZM78,132a49.68,49.68,0,0,1,2-13.82A46.06,46.06,0,0,1,122,164a45.59,45.59,0,0,1-3.32,17.12A50.07,50.07,0,0,1,78,132Zm59.32,49.12A45.59,45.59,0,0,1,134,164a46.06,46.06,0,0,1,42-45.82,50,50,0,0,1-38.72,62.94Z"}))],["regular",i.createElement(i.Fragment,null,i.createElement("path",{d:"M185.68,104.28q-1.4-2.88-3.06-5.6a60,60,0,0,0-26.92-78,8,8,0,0,0-7.4,14.19A44,44,0,0,1,170.72,84.4a63.85,63.85,0,0,0-85.46,0A44,44,0,0,1,107.7,34.87a8,8,0,1,0-7.4-14.19,60,60,0,0,0-26.93,78,62.59,62.59,0,0,0-3.05,5.58A60.07,60.07,0,0,0,16,164a8,8,0,0,0,16,0,44.09,44.09,0,0,1,32.89-42.58A63.94,63.94,0,0,0,109,193.11a44,44,0,0,1-56.65,8,8,8,0,1,0-8.62,13.47A60,60,0,0,0,126.74,196l1.26,0,1.26,0a60,60,0,0,0,83.05,18.59,8,8,0,1,0-8.62-13.47,44,44,0,0,1-56.65-8,63.94,63.94,0,0,0,44.07-71.69A44.09,44.09,0,0,1,224,164a8,8,0,0,0,16,0A60.07,60.07,0,0,0,185.68,104.28ZM128,84a47.91,47.91,0,0,1,35.56,15.79,44,44,0,0,1-71.13,0A47.89,47.89,0,0,1,128,84Zm.12,49.92-.12.2-.12-.2h.24ZM80,132a47.6,47.6,0,0,1,1.44-11.65,44,44,0,0,1,36,58.46A48.07,48.07,0,0,1,80,132Zm58.57,46.81a44,44,0,0,1,36-58.46,48,48,0,0,1-36,58.46Z"}))],["thin",i.createElement(i.Fragment,null,i.createElement("path",{d:"M183,108.08A60.22,60.22,0,0,0,178.06,99a56,56,0,0,0-24.21-74.73,4,4,0,1,0-3.7,7.09,48,48,0,0,1,22.37,60.49,59.91,59.91,0,0,0-89.05,0,48,48,0,0,1,22.38-60.5,4,4,0,0,0-3.7-7.1A56,56,0,0,0,77.93,99,60.85,60.85,0,0,0,73,108.08,56.07,56.07,0,0,0,20,164a4,4,0,0,0,8,0,48.06,48.06,0,0,1,42.08-47.62,60,60,0,0,0,45.75,74.38,48,48,0,0,1-65.67,13.7,4,4,0,1,0-4.32,6.73,56,56,0,0,0,78.69-19.3c1.15.07,2.3.11,3.47.11s2.32,0,3.47-.11a56,56,0,0,0,78.69,19.3,4,4,0,1,0-4.32-6.73,48,48,0,0,1-65.67-13.7,60,60,0,0,0,45.75-74.38A48.06,48.06,0,0,1,228,164a4,4,0,0,0,8,0A56.07,56.07,0,0,0,183,108.08Zm-8.75.21c-.79.08-1.56.19-2.34.3.5-.63,1-1.28,1.46-1.93C173.69,107.2,174,107.74,174.26,108.29ZM128,80a51.93,51.93,0,0,1,40.57,19.52,48,48,0,0,1-81.15,0A51.94,51.94,0,0,1,128,80Zm8.07,49.33A56.11,56.11,0,0,0,128,143.25a55.87,55.87,0,0,0-8.07-13.91,56.43,56.43,0,0,0,8.06.58A55.29,55.29,0,0,0,136.07,129.33Zm-52-20.74c-.77-.11-1.54-.22-2.32-.3q.42-.81.87-1.62C83.08,107.32,83.56,108,84.06,108.59ZM76,132a51.78,51.78,0,0,1,2.51-15.93,48,48,0,0,1,41.39,67.3A52.08,52.08,0,0,1,76,132Zm60.1,51.37a48,48,0,0,1,41.39-67.3,52,52,0,0,1-41.39,67.3Z"}))]]),p=i.forwardRef((e,t)=>i.createElement(b.default,{ref:t,...e,weights:u}));p.displayName="BiohazardIcon";let T=new Map([["bold",i.createElement(i.Fragment,null,i.createElement("path",{d:"M128,112a16,16,0,1,1-16,16A16,16,0,0,1,128,112ZM96,128a12,12,0,0,0-12-12H44.47a83.88,83.88,0,0,1,31.2-54.11L95.38,96a12,12,0,1,0,20.78-12l-22-38a20,20,0,0,0-28.87-6.34,107.85,107.85,0,0,0-45.26,78.4,20.22,20.22,0,0,0,5.21,15.43A20,20,0,0,0,40,140H84A12,12,0,0,0,96,128Zm139.92-9.94a107.81,107.81,0,0,0-45.26-78.39A20,20,0,0,0,161.79,46L139.84,84a12,12,0,0,0,20.78,12l19.71-34.13A83.88,83.88,0,0,1,211.53,116H172a12,12,0,0,0,0,24h44a20,20,0,0,0,14.71-6.51A20.22,20.22,0,0,0,235.92,118.06ZM160.4,160.11a12,12,0,0,0-20.79,12L159.19,206a84.33,84.33,0,0,1-62.38,0l19.58-33.91a12,12,0,0,0-20.79-12l-21.82,37.8a20,20,0,0,0,8.91,28.15,108.24,108.24,0,0,0,90.62,0,20,20,0,0,0,8.91-28.15Z"}))],["duotone",i.createElement(i.Fragment,null,i.createElement("path",{d:"M92,128H40a8.1,8.1,0,0,1-8-8.86A95.94,95.94,0,0,1,72.27,49.47,8,8,0,0,1,83.82,52l26,44.94A36,36,0,0,0,92,128Zm54,31.18a36,36,0,0,1-36,0L84.17,203.91a8,8,0,0,0,3.56,11.26,96.24,96.24,0,0,0,80.54,0,8,8,0,0,0,3.56-11.26Zm78-40a95.94,95.94,0,0,0-40.24-69.67A8,8,0,0,0,172.18,52L146.23,97A36,36,0,0,1,164,126.12c0,.62.05,1.23.05,1.85l52,0A8.1,8.1,0,0,0,224,119.14Z",opacity:"0.2"}),i.createElement("path",{d:"M116,128a12,12,0,1,1,12,12A12,12,0,0,1,116,128Zm-16,0a8,8,0,0,0-8-8l-51.93,0a.19.19,0,0,1-.07-.16A87.83,87.83,0,0,1,76.89,56l26,45a8,8,0,1,0,13.86-8L90.75,48a16,16,0,0,0-23.1-5.07,103.83,103.83,0,0,0-43.58,75.49,16.21,16.21,0,0,0,4.17,12.37A16,16,0,0,0,40,136H92A8,8,0,0,0,100,128Zm131.93-9.58a103.83,103.83,0,0,0-43.58-75.49A16,16,0,0,0,165.25,48L139.3,93a8,8,0,0,0,13.86,8l26-45A87.87,87.87,0,0,1,216,119.86c0,.07,0,.12,0,.14H164a8,8,0,0,0,0,16h52a16,16,0,0,0,11.76-5.21A16.21,16.21,0,0,0,231.93,118.42Zm-79,36.76a8,8,0,1,0-13.86,8l25.84,44.73a88.22,88.22,0,0,1-73.81,0l25.83-44.73a8,8,0,1,0-13.86-8L77.25,199.91a16,16,0,0,0,7.12,22.52,104.24,104.24,0,0,0,87.26,0,16,16,0,0,0,7.12-22.52Z"}))],["fill",i.createElement(i.Fragment,null,i.createElement("path",{d:"M116,128a12,12,0,1,1,12,12A12,12,0,0,1,116,128Zm-15.78,3.51A29,29,0,0,1,100,128a28,28,0,0,1,16.94-25.73,4,4,0,0,0,1.87-5.66L90.75,48a16,16,0,0,0-23.1-5.07,103.83,103.83,0,0,0-43.58,75.49,16.21,16.21,0,0,0,4.17,12.37A16,16,0,0,0,40,136H96.26A4,4,0,0,0,100.22,131.51Zm131.71-13.09a103.83,103.83,0,0,0-43.58-75.49A16,16,0,0,0,165.25,48L137.19,96.61a4,4,0,0,0,1.87,5.66A28,28,0,0,1,156,128a29,29,0,0,1-.22,3.51,4,4,0,0,0,4,4.49H216a16,16,0,0,0,11.76-5.21A16.21,16.21,0,0,0,231.93,118.42ZM150.8,151.48a4,4,0,0,0-5.91-1.15,28,28,0,0,1-33.78,0,4,4,0,0,0-5.91,1.15L77.25,199.91a16,16,0,0,0,7.12,22.52,104.24,104.24,0,0,0,87.26,0,16,16,0,0,0,7.12-22.52Z"}))],["light",i.createElement(i.Fragment,null,i.createElement("path",{d:"M92,134H40a13.94,13.94,0,0,1-10.28-4.56,14.17,14.17,0,0,1-3.66-10.84,101.81,101.81,0,0,1,42.75-74A14,14,0,0,1,89,49l26,45a6,6,0,0,1-10.4,6L78.62,55a2,2,0,0,0-2.88-.65A89.83,89.83,0,0,0,38,119.68a2.13,2.13,0,0,0,.57,1.67A1.88,1.88,0,0,0,40,122H92a6,6,0,0,1,0,12Zm137.94-15.4a101.81,101.81,0,0,0-42.75-74A14,14,0,0,0,167,49L141,94a6,6,0,0,0,10.4,6L177.38,55a2,2,0,0,1,2.88-.65A89.83,89.83,0,0,1,218,119.68a2.13,2.13,0,0,1-.57,1.67A1.88,1.88,0,0,1,216,122H164a6,6,0,0,0,0,12h52a13.94,13.94,0,0,0,10.28-4.56A14.17,14.17,0,0,0,229.94,118.6ZM151.2,156.18a6,6,0,1,0-10.39,6l25.82,44.73a2,2,0,0,1-.88,2.82,90.29,90.29,0,0,1-75.5,0,2,2,0,0,1-.88-2.82l25.82-44.73a6,6,0,1,0-10.39-6L79,200.91a14,14,0,0,0,6.23,19.71,102.29,102.29,0,0,0,85.58,0A14,14,0,0,0,177,200.91ZM128,138a10,10,0,1,0-10-10A10,10,0,0,0,128,138Z"}))],["regular",i.createElement(i.Fragment,null,i.createElement("path",{d:"M92,136H40a16,16,0,0,1-11.76-5.21,16.21,16.21,0,0,1-4.17-12.37A103.83,103.83,0,0,1,67.65,42.93,16,16,0,0,1,90.75,48l26,45a8,8,0,1,1-13.86,8L76.89,56A87.83,87.83,0,0,0,40,119.86a.19.19,0,0,0,.07.16L92,120a8,8,0,0,1,0,16Zm139.93-17.58a103.83,103.83,0,0,0-43.58-75.49A16,16,0,0,0,165.25,48L139.3,93a8,8,0,0,0,13.86,8l26-45A87.87,87.87,0,0,1,216,119.86c0,.07,0,.12,0,.14H164a8,8,0,0,0,0,16h52a16,16,0,0,0,11.76-5.21A16.21,16.21,0,0,0,231.93,118.42Zm-79,36.76a8,8,0,1,0-13.86,8l25.84,44.73a88.22,88.22,0,0,1-73.81,0l25.83-44.73a8,8,0,1,0-13.86-8L77.25,199.91a16,16,0,0,0,7.12,22.52,104.24,104.24,0,0,0,87.26,0,16,16,0,0,0,7.12-22.52ZM128,140a12,12,0,1,0-12-12A12,12,0,0,0,128,140Z"}))],["thin",i.createElement(i.Fragment,null,i.createElement("path",{d:"M92,132H40a12,12,0,0,1-8.81-3.91,12.2,12.2,0,0,1-3.14-9.31A99.82,99.82,0,0,1,70,46.2,12,12,0,0,1,87.29,50l25.94,45a4,4,0,0,1-6.92,4L80.36,54a4,4,0,0,0-5.78-1.27A91.83,91.83,0,0,0,36,119.5a4.2,4.2,0,0,0,1.08,3.2A3.9,3.9,0,0,0,40,124H92a4,4,0,0,1,0,8Zm136-13.22A99.82,99.82,0,0,0,186,46.2,12,12,0,0,0,168.72,50L142.77,95a4,4,0,0,0,6.92,4L175.64,54a4,4,0,0,1,5.78-1.27A91.83,91.83,0,0,1,220,119.5a4.2,4.2,0,0,1-1.08,3.2A3.9,3.9,0,0,1,216,124H164a4,4,0,0,0,0,8h52a12,12,0,0,0,8.81-3.91A12.2,12.2,0,0,0,228,118.78Zm-78.48,38.4a4,4,0,0,0-6.93,4l25.82,44.73a4,4,0,0,1,.35,3.22,3.9,3.9,0,0,1-2.12,2.41,92.24,92.24,0,0,1-77.18,0,3.9,3.9,0,0,1-2.12-2.41,4,4,0,0,1,.35-3.22l25.82-44.73a4,4,0,0,0-6.93-4L80.71,201.91a12,12,0,0,0,5.34,16.89,100.24,100.24,0,0,0,83.9,0,12,12,0,0,0,5.34-16.89ZM128,136a8,8,0,1,0-8-8A8,8,0,0,0,128,136Z"}))]]),x=i.forwardRef((e,t)=>i.createElement(b.default,{ref:t,...e,weights:T}));x.displayName="RadioactiveIcon";let f=({indeterminate:e,...t})=>e?(0,o.jsx)(x,{...t}):(0,o.jsx)(p,{...t}),g={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.Checkbox,{icon:f,label:"Custom icon",defaultChecked:!0}),(0,o.jsx)(n.Checkbox,{icon:f,label:"Custom icon: indeterminate",indeterminate:!0,mt:"sm"})]})},code:`
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
`};var k=e.i(725695);let y={type:"configurator",component:function(e){return(0,o.jsx)(n.Checkbox.Group,{defaultValue:["react"],...e,children:(0,o.jsxs)(k.Group,{mt:"xs",children:[(0,o.jsx)(n.Checkbox,{value:"react",label:"React"}),(0,o.jsx)(n.Checkbox,{value:"svelte",label:"Svelte"}),(0,o.jsx)(n.Checkbox,{value:"ng",label:"Angular"}),(0,o.jsx)(n.Checkbox,{value:"vue",label:"Vue"})]})})},code:`
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
`,centered:!0,maxWidth:"100%",controls:[{prop:"label",type:"string",initialValue:"Select your favorite frameworks/libraries",libraryValue:""},{prop:"description",type:"string",initialValue:"This is anonymous",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]};var C=e.i(79897);let j={type:"code",component:function(){return(0,o.jsx)(n.Checkbox,{label:(0,o.jsxs)(o.Fragment,{children:["I accept"," ",(0,o.jsx)(C.Anchor,{href:"https://mantine.dev",target:"_blank",inherit:!0,children:"terms and conditions"})]})})},code:`
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
`};var v="m_2cb8989f",S="m_69ff5ed7",A="m_cf98ad9f",w=e.i(883364);let E={type:"code",centered:!0,maxWidth:320,component:function(){let[e,t]=(0,i.useState)(!1);return(0,o.jsx)(n.Checkbox.Card,{className:v,checked:e,onClick:()=>t(e=>!e),children:(0,o.jsxs)(k.Group,{wrap:"nowrap",align:"flex-start",children:[(0,o.jsx)(n.Checkbox.Indicator,{}),(0,o.jsxs)("div",{children:[(0,o.jsx)(w.Text,{className:S,children:"mantine/core"}),(0,o.jsx)(w.Text,{className:A,children:"Core components library: inputs, buttons, overlays, etc."})]})]})})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
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
`}]};var I=e.i(529755);let M=`
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
`,D={type:"styles-api",data:I.CheckboxStylesApi,component:function(e){return(0,o.jsx)(n.Checkbox,{label:"Checkbox",description:"Checkbox description",error:"Checkbox error",defaultChecked:!0,...e})},code:M,centered:!0};var z={root:"m_43bfb50c"};let O={type:"code",component:function(){let[e,t]=(0,i.useState)(!1);return(0,o.jsx)(n.Checkbox,{classNames:z,label:"Checkbox button",checked:e,onChange:e=>t(e.currentTarget.checked),wrapperProps:{onClick:()=>t(e=>!e)}})},centered:!0,defaultExpanded:!1,code:[{fileName:"Demo.tsx",code:`
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
`,language:"scss"}]},R={type:"code",component:function(){return(0,o.jsx)(n.Checkbox,{defaultChecked:!0,color:"lime.4",iconColor:"dark.8",size:"md",label:"Bright lime checkbox"})},code:`
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
`,centered:!0};var V=e.i(431868);let N={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(V.Tooltip,{label:"Checkbox with tooltip",children:(0,o.jsx)(n.Checkbox,{label:"Tooltip on checkbox only"})}),(0,o.jsx)(V.Tooltip,{label:"Checkbox with tooltip",refProp:"rootRef",children:(0,o.jsx)(n.Checkbox,{label:"Tooltip the entire element",mt:"md"})})]})},code:`
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
`,centered:!0};var F=e.i(951254),_=e.i(530514);let P=`.root {
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
`,G=`
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
`,L=(0,_.createTheme)({components:{Checkbox:n.Checkbox.extend({classNames:{root:"m_4308addd",label:"m_1db1f159"}})}}),W={type:"code",centered:!0,component:function(){return(0,o.jsxs)(F.MantineThemeProvider,{theme:L,children:[(0,o.jsx)(n.Checkbox,{size:"xxs",label:"Extra small checkbox"}),(0,o.jsx)(n.Checkbox,{size:"xxl",label:"Extra large checkbox",mt:"md"})]})},code:[{fileName:"Demo.tsx",code:G,language:"tsx"},{fileName:"Demo.module.css",code:P,language:"scss"}]},Z=[{name:"mantine/core",description:"Core components library: inputs, buttons, overlays, etc."},{name:"mantine/hooks",description:"Collection of reusable hooks for React applications."},{name:"mantine/notifications",description:"Notifications system"}],B={type:"code",centered:!0,maxWidth:320,component:function(){let[e,t]=(0,i.useState)([]),l=Z.map(e=>(0,o.jsx)(n.Checkbox.Card,{className:v,value:e.name,children:(0,o.jsxs)(k.Group,{wrap:"nowrap",align:"flex-start",children:[(0,o.jsx)(n.Checkbox.Indicator,{}),(0,o.jsxs)("div",{children:[(0,o.jsx)(w.Text,{className:S,children:e.name}),(0,o.jsx)(w.Text,{className:A,children:e.description})]})]})},e.name));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.Checkbox.Group,{value:e,onChange:t,label:"Pick packages to install",description:"Choose all packages that you will need in your application",children:(0,o.jsx)(d.Stack,{pt:"md",gap:"xs",children:l})}),(0,o.jsxs)(w.Text,{fz:"xs",mt:"md",children:["CurrentValue: ",e.join(", ")||"–"]})]})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
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
`}]},H={type:"code",component:function(){return(0,o.jsxs)(k.Group,{children:[(0,o.jsx)(n.Checkbox.Indicator,{}),(0,o.jsx)(n.Checkbox.Indicator,{checked:!0}),(0,o.jsx)(n.Checkbox.Indicator,{indeterminate:!0}),(0,o.jsx)(n.Checkbox.Indicator,{disabled:!0}),(0,o.jsx)(n.Checkbox.Indicator,{disabled:!0,checked:!0}),(0,o.jsx)(n.Checkbox.Indicator,{disabled:!0,indeterminate:!0})]})},code:`
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
`},Y={type:"code",component:function(){return(0,o.jsxs)(d.Stack,{children:[(0,o.jsx)(n.Checkbox,{checked:!0,label:"regular checkbox",size:"lg",color:"lime.4",onChange:()=>{}}),(0,o.jsx)(n.Checkbox,{autoContrast:!0,checked:!0,label:"autoContrast checkbox",size:"lg",color:"lime.4",onChange:()=>{}})]})},code:`
import { Checkbox, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Checkbox checked label="regular checkbox" size="lg" color="lime.4" />
      <Checkbox autoContrast checked label="autoContrast checkbox" size="lg" color="lime.4" />
    </Stack>
  );
}
`,centered:!0},U={type:"code",component:function(){return(0,o.jsxs)(d.Stack,{children:[(0,o.jsx)(n.Checkbox,{label:"With boolean error",error:!0}),(0,o.jsx)(n.Checkbox,{label:"With error message",error:"Must be checked"}),(0,o.jsx)(n.Checkbox,{label:"With error message",error:"No error styles",withErrorStyles:!1})]})},code:`
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
`,centered:!0};var K=e.i(485108),J=e.i(387703),$=e.i(582498);let X={type:"code",component:function(){let e=(0,$.useForm)({mode:"uncontrolled",initialValues:{terms:!1},validate:{terms:(0,J.isNotEmpty)("You must accept terms and conditions")}});return(0,o.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,o.jsx)(n.Checkbox,{label:"I accept the terms and conditions",...e.getInputProps("terms",{type:"checkbox"})},e.key("terms")),(0,o.jsx)(K.Button,{type:"submit",mt:"md",children:"Submit"})]})},code:`
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
`,maxWidth:340,centered:!0};var q=e.i(638895);let Q={type:"code",component:function(){let e=(0,$.useForm)({mode:"uncontrolled",initialValues:{frameworks:[]},validate:{frameworks:(0,q.hasLength)({min:1},"Select at least one framework")}});return(0,o.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,i.createElement)(n.Checkbox.Group,{...e.getInputProps("frameworks"),key:e.key("frameworks"),label:"Select your favorite frameworks/libraries",withAsterisk:!0},(0,o.jsxs)(k.Group,{my:5,children:[(0,o.jsx)(n.Checkbox,{value:"react",label:"React"}),(0,o.jsx)(n.Checkbox,{value:"svelte",label:"Svelte"}),(0,o.jsx)(n.Checkbox,{value:"ng",label:"Angular"}),(0,o.jsx)(n.Checkbox,{value:"vue",label:"Vue"})]})),(0,o.jsx)(K.Button,{type:"submit",mt:"md",children:"Submit"})]})},code:`
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
`},ee={type:"code",component:function(){return(0,o.jsx)(n.Checkbox.Group,{defaultValue:["react"],maxSelectedValues:2,children:(0,o.jsxs)(k.Group,{children:[(0,o.jsx)(n.Checkbox,{value:"react",label:"React"}),(0,o.jsx)(n.Checkbox,{value:"svelte",label:"Svelte"}),(0,o.jsx)(n.Checkbox,{value:"ng",label:"Angular"}),(0,o.jsx)(n.Checkbox,{value:"vue",label:"Vue"})]})})},code:`
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
`},et={type:"code",component:function(){return(0,o.jsx)(n.Checkbox.Group,{disabled:!0,label:"Select your favorite frameworks/libraries",description:"This is anonymous",children:(0,o.jsxs)(d.Stack,{mt:"xs",children:[(0,o.jsx)(n.Checkbox,{value:"react",label:"React"}),(0,o.jsx)(n.Checkbox,{value:"svelte",label:"Svelte"}),(0,o.jsx)(n.Checkbox,{value:"angular",label:"Angular"}),(0,o.jsx)(n.Checkbox,{value:"vue",label:"Vue"})]})})},code:`
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
`,centered:!0};var en=(0,t.__exportAll)({anchor:()=>j,autoContrast:()=>Y,card:()=>E,cardGroup:()=>B,configurator:()=>l,customSize:()=>W,customize:()=>O,error:()=>U,groupConfigurator:()=>y,groupDisabled:()=>et,groupWithUseForm:()=>Q,icon:()=>g,iconColor:()=>R,indeterminate:()=>h,indicator:()=>H,maxSelectedValues:()=>ee,states:()=>m,stylesApi:()=>D,tooltip:()=>N,withUseForm:()=>X});e.s(["CheckboxDemos",0,en],379328)},682789,e=>{"use strict";var t=e.i(391398),n=e.i(38856),o=e.i(379328),l=e.i(241111),a=e.i(572467);e.i(603441);var s=e.i(62558);e.i(457450);var i=e.i(418026);let r=(0,s.Layout)(i.MDX_DATA.Checkbox);function c(e){let s={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.useMDXComponents)(),...e.components},{AutoContrast:i,Demo:r,GetElementRef:c,StylesApiSelectors:d,WrapperProps:m}=s;return i||h("AutoContrast",!0),r||h("Demo",!0),c||h("GetElementRef",!0),d||h("StylesApiSelectors",!0),m||h("WrapperProps",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(r,{data:o.CheckboxDemos.configurator}),"\n",(0,t.jsx)(s.h2,{id:"controlled-state",children:"Controlled state"}),"\n",(0,t.jsxs)(s.p,{children:["Use ",(0,t.jsx)(s.code,{children:"checked"})," and ",(0,t.jsx)(s.code,{children:"onChange"})," props to control ",(0,t.jsx)(s.code,{children:"Checkbox"})," state:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Checkbox } from '@mantine/core';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n  return (\n    <Checkbox\n      checked={checked}\n      onChange={(event) => setChecked(event.currentTarget.checked)}\n    />\n  );\n}\n"})}),"\n",(0,t.jsx)(s.h2,{id:"read-only",children:"Read only"}),"\n",(0,t.jsxs)(s.p,{children:["Set the ",(0,t.jsx)(s.code,{children:"readOnly"})," prop to prevent the checkbox value from being changed by user\ninteraction. The checkbox still displays its current value and reflects programmatic\nupdates to the ",(0,t.jsx)(s.code,{children:"checked"})," prop, but clicking it (or pressing ",(0,t.jsx)("kbd",{children:"Space"}),") does not\ntoggle its state and does not call the ",(0,t.jsx)(s.code,{children:"onChange"})," handler:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Checkbox } from '@mantine/core';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(true);\n  return (\n    <>\n      <Checkbox checked={checked} readOnly label=\"Read only checkbox\" />\n      <button type=\"button\" onClick={() => setChecked((c) => !c)}>\n        Toggle from outside\n      </button>\n    </>\n  );\n}\n"})}),"\n",(0,t.jsx)(s.h2,{id:"checkbox-with-mantineform",children:"Checkbox with @mantine/form"}),"\n",(0,t.jsxs)(s.p,{children:["Example of using ",(0,t.jsx)(s.code,{children:"Checkbox"})," with ",(0,t.jsx)(s.a,{href:"/form/use-form",children:"@mantine/form"}),":"]}),"\n",(0,t.jsx)(r,{data:o.CheckboxDemos.withUseForm}),"\n",(0,t.jsx)(s.h2,{id:"checkbox-with-uncontrolled-forms",children:"Checkbox with uncontrolled forms"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Checkbox"})," can be used with uncontrolled forms the same way as native ",(0,t.jsx)(s.code,{children:'input[type="checkbox"]'}),".\nSet the ",(0,t.jsx)(s.code,{children:"name"})," attribute to include checkbox value in ",(0,t.jsx)(s.code,{children:"FormData"})," object on form submission.\nTo control initial checked state in uncontrolled forms, use ",(0,t.jsx)(s.code,{children:"defaultChecked"})," prop."]}),"\n",(0,t.jsxs)(s.p,{children:["Example usage of uncontrolled ",(0,t.jsx)(s.code,{children:"Checkbox"})," with ",(0,t.jsx)(s.code,{children:"FormData"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",children:"import { Checkbox } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <form\n      onSubmit={(event) => {\n        event.preventDefault();\n        const formData = new FormData(event.currentTarget);\n        console.log('Checkbox value:', !!formData.get('terms'));\n      }}\n    >\n      <Checkbox label=\"Accept terms and conditions\" name=\"terms\" defaultChecked />\n      <button type=\"submit\">Submit</button>\n    </form>\n  );\n}\n"})}),"\n",(0,t.jsx)(s.h2,{id:"states",children:"States"}),"\n",(0,t.jsx)(r,{data:o.CheckboxDemos.states}),"\n",(0,t.jsx)(s.h2,{id:"error-state",children:"Error state"}),"\n",(0,t.jsxs)(s.p,{children:["Use the ",(0,t.jsx)(s.code,{children:"error"})," prop to display error message below the checkbox label.\nIf you want to apply error styles to checkbox without error message, user boolean ",(0,t.jsx)(s.code,{children:"error"})," prop.\nIf you want to display error message without applying error styles, set ",(0,t.jsx)(s.code,{children:"withErrorStyles={false}"}),"."]}),"\n",(0,t.jsx)(r,{data:o.CheckboxDemos.error}),"\n",(0,t.jsx)(s.h2,{id:"change-icons",children:"Change icons"}),"\n",(0,t.jsx)(r,{data:o.CheckboxDemos.icon}),"\n",(0,t.jsx)(s.h2,{id:"change-icon-color",children:"Change icon color"}),"\n",(0,t.jsxs)(s.p,{children:["Use the ",(0,t.jsx)(s.code,{children:"iconColor"})," prop to change the icon color. You can reference colors from ",(0,t.jsx)(s.code,{children:"theme.colors"})," or use any valid CSS color:"]}),"\n",(0,t.jsx)(r,{data:o.CheckboxDemos.iconColor}),"\n",(0,t.jsx)(s.h2,{id:"indeterminate-state",children:"Indeterminate state"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Checkbox"})," supports indeterminate state. When the ",(0,t.jsx)(s.code,{children:"indeterminate"})," prop is set,\nthe ",(0,t.jsx)(s.code,{children:"checked"})," prop is ignored (checkbox always has checked styles):"]}),"\n",(0,t.jsx)(r,{data:o.CheckboxDemos.indeterminate,demoProps:{toggle:!0}}),"\n",(0,t.jsx)(s.h2,{id:"label-with-link",children:"Label with link"}),"\n",(0,t.jsx)(r,{data:o.CheckboxDemos.anchor}),"\n",(0,t.jsx)(s.h2,{id:"checkbox-with-tooltip",children:"Checkbox with tooltip"}),"\n",(0,t.jsxs)(s.p,{children:["You can change the target element to which the tooltip is attached with ",(0,t.jsx)(s.code,{children:"refProp"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["If ",(0,t.jsx)(s.code,{children:"refProp"})," is not set, the tooltip is attached to the checkbox input"]}),"\n",(0,t.jsxs)(s.li,{children:["If ",(0,t.jsx)(s.code,{children:'refProp="rootRef"'})," is set, the tooltip is attached to the root element (contains label, input and other elements)"]}),"\n"]}),"\n",(0,t.jsx)(r,{data:o.CheckboxDemos.tooltip}),"\n",(0,t.jsx)(s.h2,{id:"pointer-cursor",children:"Pointer cursor"}),"\n",(0,t.jsxs)(s.p,{children:["By default, checkbox input and label have ",(0,t.jsx)(s.code,{children:"cursor: default"})," (same as native ",(0,t.jsx)(s.code,{children:'input[type="checkbox"]'}),").\nTo change the cursor to pointer, set ",(0,t.jsx)(s.code,{children:"cursorType"})," on ",(0,t.jsx)(s.a,{href:"/theming/theme-object/",children:"theme"}),":"]}),"\n",(0,t.jsx)(r,{data:a.ThemingDemos.cursorType}),"\n",(0,t.jsx)(i,{component:"Checkbox"}),"\n",(0,t.jsx)(r,{data:o.CheckboxDemos.autoContrast}),"\n",(0,t.jsx)(s.h2,{id:"add-custom-sizes",children:"Add custom sizes"}),"\n",(0,t.jsxs)(s.p,{children:["You can add any number of custom sizes with ",(0,t.jsx)(s.a,{href:"/styles/data-attributes/",children:"data-size"})," attribute:"]}),"\n",(0,t.jsx)(r,{data:o.CheckboxDemos.customSize}),"\n",(0,t.jsx)(m,{component:"Checkbox"}),"\n",(0,t.jsx)(s.h2,{id:"checkboxgroup",children:"Checkbox.Group"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Checkbox.Group"})," manages the state of multiple checkboxes, it accepts ",(0,t.jsx)(s.code,{children:"value"})," and ",(0,t.jsx)(s.code,{children:"onChange"}),"\nprops, which are used to control the state of checkboxes inside the group. The ",(0,t.jsx)(s.code,{children:"value"})," prop should be an array of strings, where each string is the value of a checkbox.\nThe ",(0,t.jsx)(s.code,{children:"onChange"})," prop should be a function that receives the new value as an array of strings."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport { Checkbox } from \'@mantine/core\';\n\nfunction Demo() {\n  const [value, setValue] = useState<string[]>([]);\n\n  return (\n    <Checkbox.Group value={value} onChange={setValue}>\n      <Checkbox value="react" label="React" />\n      <Checkbox value="svelte" label="Svelte" />\n    </Checkbox.Group>\n  );\n}\n'})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Checkbox.Group"})," component supports all ",(0,t.jsx)(s.a,{href:"/core/input/#inputwrapper-component",children:"Input.Wrapper"}),"\nprops."]}),"\n",(0,t.jsx)(r,{data:o.CheckboxDemos.groupConfigurator}),"\n",(0,t.jsx)(s.h2,{id:"checkboxgroup-disabled",children:"Checkbox.Group disabled"}),"\n",(0,t.jsx)(r,{data:o.CheckboxDemos.groupDisabled}),"\n",(0,t.jsx)(s.h2,{id:"maxselectedvalues",children:"maxSelectedValues"}),"\n",(0,t.jsxs)(s.p,{children:["Use ",(0,t.jsx)(s.code,{children:"maxSelectedValues"})," prop to limit the number of selected values in ",(0,t.jsx)(s.code,{children:"Checkbox.Group"}),".\nWhen the limit is reached, the remaining checkboxes are disabled and cannot be selected."]}),"\n",(0,t.jsx)(r,{data:o.CheckboxDemos.maxSelectedValues}),"\n",(0,t.jsx)(s.h2,{id:"checkboxgroup-with-mantineform",children:"Checkbox.Group with @mantine/form"}),"\n",(0,t.jsxs)(s.p,{children:["Example of using ",(0,t.jsx)(s.code,{children:"Checkbox.Group"})," with ",(0,t.jsx)(s.a,{href:"/form/use-form",children:"@mantine/form"}),":"]}),"\n",(0,t.jsx)(r,{data:o.CheckboxDemos.groupWithUseForm}),"\n",(0,t.jsx)(s.h2,{id:"checkboxgroup-with-uncontrolled-forms",children:"Checkbox.Group with uncontrolled forms"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Checkbox.Group"})," can be used with uncontrolled forms, it renders a hidden input\nwhich joins all checked values into a single string using ",(0,t.jsx)(s.code,{children:"hiddenInputValuesSeparator"})," prop."]}),"\n",(0,t.jsx)(s.p,{children:"Props for usage with uncontrolled forms:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"name"})," – name attribute passed to the hidden input"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"hiddenInputValuesSeparator"})," – string used to join checked values into a single string, ",(0,t.jsx)(s.code,{children:"','"})," by default"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"hiddenInputProps"})," – additional props passed to the hidden input"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",children:'export function UncontrolledForm() {\n  return (\n    <form\n      onSubmit={(event) => {\n        event.preventDefault();\n        const formData = new FormData(event.currentTarget);\n        console.log(\'Checkbox group value:\', formData.get(\'frameworks\'));\n      }}\n    >\n      <Checkbox.Group label="Frameworks" name="frameworks" hiddenInputValuesSeparator="|">\n        <Checkbox label="React" value="react" />\n        <Checkbox label="Angular" value="ng" />\n      </Checkbox.Group>\n      <button type="submit">Submit</button>\n    </form>\n  );\n}\n'})}),"\n",(0,t.jsx)(s.h2,{id:"checkboxindicator",children:"Checkbox.Indicator"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Checkbox.Indicator"})," looks exactly the same as the ",(0,t.jsx)(s.code,{children:"Checkbox"})," component, but it does not\nhave any semantic meaning, it's just a visual representation of checkbox state. You\ncan use it in any place where you need to display checkbox state without any interaction\nrelated to the indicator. For example, it is useful in cards based on buttons, trees, etc."]}),"\n",(0,t.jsxs)(s.p,{children:["Note that ",(0,t.jsx)(s.code,{children:"Checkbox.Indicator"})," cannot be focused or selected with keyboard. It is not\naccessible and should not be used as a replacement for the ",(0,t.jsx)(s.code,{children:"Checkbox"})," component."]}),"\n",(0,t.jsx)(r,{data:o.CheckboxDemos.indicator}),"\n",(0,t.jsx)(s.h2,{id:"checkboxcard-component",children:"Checkbox.Card component"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Checkbox.Card"})," component can be used as a replacement for ",(0,t.jsx)(s.code,{children:"Checkbox"})," to build custom\ncards/buttons/other things that work as checkboxes. The root element of the component\nhas ",(0,t.jsx)(s.code,{children:'role="checkbox"'})," attribute, it is accessible by default and supports the same\nkeyboard interactions as ",(0,t.jsx)(s.code,{children:'input[type="checkbox"]'}),"."]}),"\n",(0,t.jsx)(r,{data:o.CheckboxDemos.card}),"\n",(0,t.jsxs)(s.p,{children:["You can use ",(0,t.jsx)(s.code,{children:"Checkbox.Card"})," with ",(0,t.jsx)(s.code,{children:"Checkbox.Group"})," the same way as the ",(0,t.jsx)(s.code,{children:"Checkbox"})," component:"]}),"\n",(0,t.jsx)(r,{data:o.CheckboxDemos.cardGroup}),"\n",(0,t.jsx)(c,{component:"Checkbox",refType:"input"}),"\n",(0,t.jsxs)(s.p,{children:["The example above shows how to get ref of the checkbox input element.\nTo get ref of the root element, use ",(0,t.jsx)(s.code,{children:"rootRef"})," prop:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",children:"import { useRef } from 'react';\nimport { Checkbox } from '@mantine/core';\n\nfunction Demo() {\n  const ref = useRef<HTMLDivElement>(null);\n  return <Checkbox rootRef={ref} />;\n}\n"})}),"\n",(0,t.jsx)(d,{component:"Checkbox"}),"\n",(0,t.jsx)(r,{data:o.CheckboxDemos.stylesApi}),"\n",(0,t.jsx)(s.h2,{id:"example-table-with-row-selection",children:"Example: Table with row selection"}),"\n",(0,t.jsx)(r,{data:l.TableDemos.rowSelection}),"\n",(0,t.jsx)(s.h2,{id:"example-customize-with-styles-api",children:"Example: Customize with Styles API"}),"\n",(0,t.jsx)(r,{data:o.CheckboxDemos.customize}),"\n",(0,t.jsx)(s.h2,{id:"wrapperprops",children:"wrapperProps"}),"\n",(0,t.jsxs)(s.p,{children:["Most of the ",(0,t.jsx)(s.code,{children:"Checkbox"})," props are passed down to the ",(0,t.jsx)(s.code,{children:"input"})," element.\nIf you want to pass props to the root element instead, use ",(0,t.jsx)(s.code,{children:"wrapperProps"})," prop."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",children:"import { Checkbox } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Checkbox\n      label=\"My checkbox\"\n      wrapperProps={{ 'data-root-element': true }}\n    />\n  );\n}\n"})}),"\n",(0,t.jsx)(s.h2,{id:"id-attribute",children:"id attribute"}),"\n",(0,t.jsxs)(s.p,{children:["By default, ",(0,t.jsx)(s.code,{children:"Checkbox"})," generates a random ",(0,t.jsx)(s.code,{children:"id"})," attribute for the input element\nto associate it with the label. You can supply your own ",(0,t.jsx)(s.code,{children:"id"})," attribute with ",(0,t.jsx)(s.code,{children:"id"})," prop.\nIt will be used in ",(0,t.jsx)(s.code,{children:"id"})," attribute of the input element and ",(0,t.jsx)(s.code,{children:"htmlFor"})," attribute of the label element."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",children:'import { Checkbox } from \'@mantine/core\';\n\nfunction Demo() {\n  return <Checkbox id="my-checkbox" label="My checkbox" />;\n}\n'})}),"\n",(0,t.jsx)(s.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(s.p,{children:["Checkbox component is based on the native ",(0,t.jsx)(s.code,{children:'input[type="checkbox"]'})," element, so it is accessible by default."]}),"\n",(0,t.jsxs)(s.p,{children:["Set ",(0,t.jsx)(s.code,{children:"aria-label"})," or ",(0,t.jsx)(s.code,{children:"label"})," prop to make the checkbox accessible for screen readers:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",children:'import { Checkbox } from \'@mantine/core\';\n\n// Not ok, input is not labeled\nfunction Bad() {\n  return <Checkbox />;\n}\n\n// Ok, input is labelled by aria-label\nfunction GoodAriaLabel() {\n  return <Checkbox aria-label="My checkbox" />;\n}\n\n// Ok, input is labelled by label element\nfunction GoodLabel() {\n  return <Checkbox label="My checkbox" />;\n}\n'})})]})}function h(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})})}])},579925,(e,t,n)=>{let o="/core/checkbox";(window.__NEXT_P=window.__NEXT_P||[]).push([o,()=>e.r(682789)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([o])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);