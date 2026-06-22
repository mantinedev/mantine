(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,618875,t=>{"use strict";var e=t.i(191788);function i(t){return t>0?1:t<0?-1:0}function o(t){let e=t??0;return"number"==typeof e?[e,e]:e}t.s(["useDrag",0,function(t,n={}){let[r,s]=(0,e.useState)(!1),a=(0,e.useRef)(t);a.current=t;let c=(0,e.useRef)(n);c.current=n;let l=(0,e.useRef)({isActive:!1,pointerId:-1,startXY:[0,0],prevXY:[0,0],startTimestamp:0,prevTimestamp:0,thresholdMet:!1,firstFired:!1,lockedAxis:null,canceled:!1,lastVelocity:[0,0]}),u=(0,e.useRef)(null);return{ref:(0,e.useCallback)(t=>{if(!t)return;let e=new AbortController,n=t=>{let e=c.current,i=l.current;if("x"===e.axis)return[t[0],0];if("y"===e.axis)return[0,t[1]];if("lock"===e.axis){if(null===i.lockedAxis){let o=e.axisThreshold??1;(Math.abs(t[0])>o||Math.abs(t[1])>o)&&(i.lockedAxis=Math.abs(t[0])>=Math.abs(t[1])?"x":"y")}if("x"===i.lockedAxis)return[t[0],0];if("y"===i.lockedAxis)return[0,t[1]]}return t},r=()=>{let t=l.current;t.isActive=!1,t.pointerId=-1,t.thresholdMet=!1,t.firstFired=!1,t.lockedAxis=null,t.canceled=!1,s(!1),document.body.style.userSelect="",document.body.style.webkitUserSelect="",u.current?.abort(),u.current=null},d=()=>{l.current.isActive&&(l.current.canceled=!0,r())},f=()=>{s(!0),document.body.style.userSelect="none",document.body.style.webkitUserSelect="none"},p=t=>{let e=l.current;if(!e.isActive||t.pointerId!==e.pointerId)return;let r=[t.clientX-e.startXY[0],t.clientY-e.startXY[1]];if(!e.thresholdMet){let[i,n]=o(c.current.threshold);if(Math.abs(r[0])<i&&Math.abs(r[1])<n){e.prevXY=[t.clientX,t.clientY],e.prevTimestamp=t.timeStamp;return}e.thresholdMet=!0,f()}let s=n(r),u=n([t.clientX-e.prevXY[0],t.clientY-e.prevXY[1]]),p=t.timeStamp-e.prevTimestamp,m=p>0?[Math.abs(u[0])/p,Math.abs(u[1])/p]:e.lastVelocity;e.lastVelocity=m;let h=!e.firstFired;e.firstFired=!0,e.prevXY=[t.clientX,t.clientY],e.prevTimestamp=t.timeStamp,a.current({xy:[t.clientX,t.clientY],initial:[...e.startXY],movement:s,delta:u,distance:[Math.abs(s[0]),Math.abs(s[1])],direction:[i(u[0]),i(u[1])],velocity:m,elapsedTime:t.timeStamp-e.startTimestamp,first:h,last:!1,active:!0,tap:!1,canceled:!1,cancel:d,event:t})},m=t=>{let e=l.current;if(!e.isActive||t.pointerId!==e.pointerId)return;let o=c.current;if(!e.thresholdMet){if(o.filterTaps){let r=n([t.clientX-e.startXY[0],t.clientY-e.startXY[1]]),s=[Math.abs(r[0]),Math.abs(r[1])],c=Math.max(s[0],s[1])<(o.tapThreshold??3);a.current({xy:[t.clientX,t.clientY],initial:[...e.startXY],movement:r,delta:r,distance:s,direction:[i(r[0]),i(r[1])],velocity:[0,0],elapsedTime:t.timeStamp-e.startTimestamp,first:!0,last:!0,active:!1,tap:c,canceled:!1,cancel:d,event:t})}r();return}let s=n([t.clientX-e.startXY[0],t.clientY-e.startXY[1]]),u=[Math.abs(s[0]),Math.abs(s[1])],f=n([t.clientX-e.prevXY[0],t.clientY-e.prevXY[1]]),p=t.timeStamp-e.prevTimestamp>100?[0,0]:e.lastVelocity,m=Math.max(u[0],u[1]),h=!0===o.filterTaps&&m<(o.tapThreshold??3);a.current({xy:[t.clientX,t.clientY],initial:[...e.startXY],movement:s,delta:f,distance:u,direction:[i(f[0]),i(f[1])],velocity:p,elapsedTime:t.timeStamp-e.startTimestamp,first:!e.firstFired,last:!0,active:!1,tap:h,canceled:!1,cancel:d,event:t}),r()},h=t=>{let e=l.current;if(!e.isActive||t.pointerId!==e.pointerId)return;let i=n([t.clientX-e.startXY[0],t.clientY-e.startXY[1]]);a.current({xy:[t.clientX,t.clientY],initial:[...e.startXY],movement:i,delta:[0,0],distance:[Math.abs(i[0]),Math.abs(i[1])],direction:[0,0],velocity:[0,0],elapsedTime:t.timeStamp-e.startTimestamp,first:!e.firstFired,last:!0,active:!1,tap:!1,canceled:!0,cancel:d,event:t}),r()};return t.addEventListener("pointerdown",t=>{if(!1===c.current.enabled||0!==t.button||l.current.isActive)return;let e=l.current;e.isActive=!0,e.pointerId=t.pointerId,e.startXY=[t.clientX,t.clientY],e.prevXY=[t.clientX,t.clientY],e.startTimestamp=t.timeStamp,e.prevTimestamp=t.timeStamp,e.thresholdMet=!1,e.firstFired=!1,e.lockedAxis=null,e.canceled=!1,e.lastVelocity=[0,0];let[i,n]=o(c.current.threshold);0===i&&0===n&&(e.thresholdMet=!0,e.firstFired=!0,f(),a.current({xy:[t.clientX,t.clientY],initial:[t.clientX,t.clientY],movement:[0,0],delta:[0,0],distance:[0,0],direction:[0,0],velocity:[0,0],elapsedTime:0,first:!0,last:!1,active:!0,tap:!1,canceled:!1,cancel:d,event:t})),u.current?.abort(),u.current=new AbortController;let r=u.current.signal;document.addEventListener("pointermove",p,{signal:r}),document.addEventListener("pointerup",m,{signal:r}),document.addEventListener("pointercancel",h,{signal:r})},{signal:e.signal}),()=>{e.abort(),u.current?.abort(),u.current=null,l.current.isActive&&(l.current.isActive=!1,s(!1),document.body.style.userSelect="",document.body.style.webkitUserSelect="")}},[]),active:r}}])},912565,t=>{"use strict";var e=t.i(433512),i=t.i(481178),o=t.i(317477),n=t.i(44091),r=t.i(391466),s=t.i(275519),a=t.i(232471),c=t.i(935769),l=t.i(802046),u={root:"m_a513464",icon:"m_a4ceffb",loader:"m_b0920b15",body:"m_a49ed24",title:"m_3feedf16",description:"m_3d733a3a",closeButton:"m_919a4d88"},d=t.i(391398);let f={withCloseButton:!0},p=(0,i.createVarsResolver)((t,{radius:i,color:n})=>({root:{"--notification-radius":void 0===i?void 0:(0,e.getRadius)(i),"--notification-color":n?(0,o.getThemeColor)(n,t):void 0}})),m=(0,s.factory)(t=>{let e=(0,n.useProps)("Notification",f,t),{className:i,color:o,radius:s,loading:m,withCloseButton:h,withBorder:x,title:v,icon:y,children:b,onClose:g,closeButtonProps:w,classNames:E,style:C,styles:S,unstyled:k,vars:N,mod:j,loaderProps:T,role:B,attributes:M,...D}=e,X=(0,r.useStyles)({name:"Notification",classes:u,props:e,className:i,style:C,classNames:E,styles:S,unstyled:k,attributes:M,vars:N,varsResolver:p});return(0,d.jsxs)(a.Box,{...X("root"),mod:[{"data-with-icon":!!y||m,"data-with-border":x},j],role:B||"alert",...D,children:[y&&!m&&(0,d.jsx)("div",{...X("icon"),children:y}),m&&(0,d.jsx)(c.Loader,{size:28,color:o,...X("loader"),...T}),(0,d.jsxs)("div",{...X("body"),children:[v&&(0,d.jsx)("div",{...X("title"),children:v}),(0,d.jsx)(a.Box,{...X("description"),mod:{"data-with-title":!!v},children:b})]}),h&&(0,d.jsx)(l.CloseButton,{iconSize:16,color:"gray",...w,unstyled:k,onClick:t=>{w?.onClick?.(t),g?.()},...X("closeButton")})]})});m.classes=u,m.varsResolver=p,m.displayName="@mantine/core/Notification",t.s(["Notification",0,m],912565)},595739,t=>{"use strict";var e=t.i(200140);let i=["bottom-center","bottom-left","bottom-right","top-center","top-left","top-right"],o={left:"translateX(-100%)",right:"translateX(100%)","top-center":"translateY(-100%)","bottom-center":"translateY(100%)"},n={left:"translateX(0)",right:"translateX(0)","top-center":"translateY(0)","bottom-center":"translateY(0)"};var r=t.i(618875),s=t.i(332977),a=t.i(191788),c=t.i(912565),l=t.i(634917),u=t.i(951254),d=t.i(391398);function f({data:t,onHide:e,autoClose:i,transitionDuration:o,allowDragDismiss:n,allowScrollDismiss:p,paused:m,onHoverStart:h,onHoverEnd:x,ref:v,style:y,...b}){var g;let[w,E]=(0,a.useState)(0),[C,S]=(0,a.useState)(!1),[k,N]=(0,a.useState)(1),[j,T]=(0,a.useState)(!1),B=(0,u.useMantineTheme)(),{autoClose:M,message:D,allowClose:X,position:Y,style:O,withCloseButton:R,onOpen:I,priority:A,__sequence:G,..._}=t,L="number"==typeof(g=t.autoClose)?g:!1!==g&&!1!==i&&i,P=(0,a.useRef)(-1),$=(0,a.useRef)(-1),F=(0,a.useRef)(-1),q=(0,a.useRef)(null),V=(0,a.useRef)(!1),H=(0,a.useRef)(0),U=!1===X,z=()=>window.clearTimeout(P.current),W=t=>{H.current=t,E(t)},J=()=>{e(t.id),z(),window.clearTimeout($.current),window.clearTimeout(F.current)},Q=()=>{C||ti||m||V.current||"number"!=typeof L||(P.current=window.setTimeout(J,L))},K=t=>t*((q.current?.offsetWidth??440)+40),Z=(t,e)=>Math.abs(t)>.35*(q.current?.offsetWidth??440)||e>.5,tt=t=>{N(t),S(!0),T(!1),W(K(t)),z(),window.clearTimeout($.current),window.clearTimeout(F.current),$.current=window.setTimeout(J,o)},{ref:te,active:ti}=(0,r.useDrag)(t=>{if(!C)if(t.first&&z(),t.last){if(t.tap||t.canceled){W(0),Q();return}let e=t.movement[0],i=0===e?-1===t.direction[0]?-1:1:e>0?1:-1;Z(e,t.velocity[0])?tt(i):(W(0),Q())}else W(t.movement[0])},{axis:"x",threshold:5,filterTaps:!0,enabled:n&&!U&&!C}),to=(0,s.useMergedRef)(v,q,te),tn=(0,l.getStyleObject)(y,B),tr=(0,l.getStyleObject)(O,B),ts={...tn,...tr},ta="number"==typeof ts.opacity?ts.opacity:1,tc=C?0:1-.6*Math.min(Math.abs(w)/200,1),tl=ts.transitionDuration??`${o}ms, ${o}ms, ${o}ms`,tu={...ts,"--notifications-state-transform":"string"==typeof ts.transform?ts.transform:"translateX(0)","--notifications-state-opacity":String(ta),"--notifications-swipe-offset":`${w}px`,"--notifications-swipe-opacity":String(tc),transform:"var(--notifications-state-transform) translate3d(var(--notifications-swipe-offset), 0, 0)",opacity:"calc(var(--notifications-state-opacity) * var(--notifications-swipe-opacity))",transitionDuration:ti||j?"0ms, 0ms, 0ms":tl,cursor:"default",touchAction:"pan-y"},td=(0,a.useEffectEvent)(t=>{if(C||ti)return;let e=t.currentTarget===document;if(!e&&!V.current)return;let{deltaX:i,deltaY:o}=t;if(Math.abs(i)<=Math.abs(o)||0===i||!p||U)return;e||(t.preventDefault(),t.stopPropagation()),z(),T(!0);let n=H.current-i,r=n>0?1:-1;Z(n,0)?tt(r):(W(n),window.clearTimeout(F.current),F.current=window.setTimeout(()=>{T(!1),W(0),Q()},120))});return(0,a.useEffect)(()=>{if(j)return document.addEventListener("wheel",td,{passive:!1}),()=>document.removeEventListener("wheel",td,{passive:!1})},[j]),(0,a.useEffect)(()=>{let t=()=>{C&&W(K(k))};return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[k,C]),(0,a.useEffect)(()=>{let t=q.current;if(t)return t.addEventListener("wheel",td,{passive:!1}),()=>t.removeEventListener("wheel",td,{passive:!1})},[]),(0,a.useEffect)(()=>()=>{window.clearTimeout($.current),window.clearTimeout(F.current)},[]),(0,a.useEffect)(()=>{t.onOpen?.(t)},[]),(0,a.useEffect)(()=>(Q(),z),[L,ti,C]),(0,a.useEffect)(()=>(m?z():Q(),z),[m]),(0,d.jsx)(c.Notification,{ref:to,...b,style:tu,..._,withCloseButton:!U&&R,onClose:J,onMouseEnter:()=>{V.current=!0,z(),h?.()},onMouseLeave:()=>{V.current=!1,j||(window.clearTimeout(F.current),T(!1),W(0),Q()),x?.()},children:D})}f.displayName="@mantine/notifications/NotificationContainer";var p={root:"m_b37d9ac7",notification:"m_5ed0edd0"},m=t.i(729262),h=t.i(266181),x=t.i(779861);function v(t,e){if(null==t)return{};var i,o,n={},r=Object.keys(t);for(o=0;o<r.length;o++)i=r[o],e.indexOf(i)>=0||(n[i]=t[i]);return n}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,y(t,e)}t.i(350461);var g=t.i(730943);let w=a.default.createContext(null);var E="unmounted",C="exited",S="entering",k="entered",N="exiting",j=function(t){function e(e,i){var o,n=t.call(this,e,i)||this,r=i&&!i.isMounting?e.enter:e.appear;return n.appearStatus=null,e.in?r?(o=C,n.appearStatus=S):o=k:o=e.unmountOnExit||e.mountOnEnter?E:C,n.state={status:o},n.nextCallback=null,n}b(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===E?{status:C}:null};var i=e.prototype;return i.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},i.componentDidUpdate=function(t){var e=null;if(t!==this.props){var i=this.state.status;this.props.in?i!==S&&i!==k&&(e=S):(i===S||i===k)&&(e=N)}this.updateStatus(!1,e)},i.componentWillUnmount=function(){this.cancelNextCallback()},i.getTimeouts=function(){var t,e,i,o=this.props.timeout;return t=e=i=o,null!=o&&"number"!=typeof o&&(t=o.exit,e=o.enter,i=void 0!==o.appear?o.appear:e),{exit:t,enter:e,appear:i}},i.updateStatus=function(t,e){if(void 0===t&&(t=!1),null!==e)if(this.cancelNextCallback(),e===S){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:g.default.findDOMNode(this);i&&i.scrollTop}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===C&&this.setState({status:E})},i.performEnter=function(t){var e=this,i=this.props.enter,o=this.context?this.context.isMounting:t,n=this.props.nodeRef?[o]:[g.default.findDOMNode(this),o],r=n[0],s=n[1],a=this.getTimeouts(),c=o?a.appear:a.enter;(t||i)&&1?(this.props.onEnter(r,s),this.safeSetState({status:S},function(){e.props.onEntering(r,s),e.onTransitionEnd(c,function(){e.safeSetState({status:k},function(){e.props.onEntered(r,s)})})})):this.safeSetState({status:k},function(){e.props.onEntered(r)})},i.performExit=function(){var t=this,e=this.props.exit,i=this.getTimeouts(),o=this.props.nodeRef?void 0:g.default.findDOMNode(this);e?(this.props.onExit(o),this.safeSetState({status:N},function(){t.props.onExiting(o),t.onTransitionEnd(i.exit,function(){t.safeSetState({status:C},function(){t.props.onExited(o)})})})):this.safeSetState({status:C},function(){t.props.onExited(o)})},i.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},i.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},i.setNextCallback=function(t){var e=this,i=!0;return this.nextCallback=function(o){i&&(i=!1,e.nextCallback=null,t(o))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},i.onTransitionEnd=function(t,e){this.setNextCallback(e);var i=this.props.nodeRef?this.props.nodeRef.current:g.default.findDOMNode(this),o=null==t&&!this.props.addEndListener;if(!i||o)return void setTimeout(this.nextCallback,0);if(this.props.addEndListener){var n=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],r=n[0],s=n[1];this.props.addEndListener(r,s)}null!=t&&setTimeout(this.nextCallback,t)},i.render=function(){var t=this.state.status;if(t===E)return null;var e=this.props,i=e.children,o=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,v(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.default.createElement(w.Provider,{value:null},"function"==typeof i?i(t,o):a.default.cloneElement(a.default.Children.only(i),o))},e}(a.default.Component);function T(){}function B(){return(B=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t}).apply(this,arguments)}function M(t,e){var i=Object.create(null);return t&&a.Children.map(t,function(t){return t}).forEach(function(t){i[t.key]=e&&(0,a.isValidElement)(t)?e(t):t}),i}function D(t,e,i){return null!=i[e]?i[e]:t.props[e]}j.contextType=w,j.propTypes={},j.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:T,onEntering:T,onEntered:T,onExit:T,onExiting:T,onExited:T},j.UNMOUNTED=E,j.EXITED=C,j.ENTERING=S,j.ENTERED=k,j.EXITING=N;var X=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},Y=function(t){function e(e,i){var o=t.call(this,e,i)||this,n=o.handleExited.bind(function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(o));return o.state={contextValue:{isMounting:!0},handleExited:n,firstRender:!0},o}b(e,t);var i=e.prototype;return i.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},i.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(t,e){var i,o,n=e.children,r=e.handleExited;return{children:e.firstRender?M(t.children,function(e){return(0,a.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:D(e,"appear",t),enter:D(e,"enter",t),exit:D(e,"exit",t)})}):(Object.keys(o=function(t,e){function i(i){return i in e?e[i]:t[i]}t=t||{},e=e||{};var o,n=Object.create(null),r=[];for(var s in t)s in e?r.length&&(n[s]=r,r=[]):r.push(s);var a={};for(var c in e){if(n[c])for(o=0;o<n[c].length;o++){var l=n[c][o];a[n[c][o]]=i(l)}a[c]=i(c)}for(o=0;o<r.length;o++)a[r[o]]=i(r[o]);return a}(n,i=M(t.children))).forEach(function(e){var s=o[e];if((0,a.isValidElement)(s)){var c=e in n,l=e in i,u=n[e],d=(0,a.isValidElement)(u)&&!u.props.in;l&&(!c||d)?o[e]=(0,a.cloneElement)(s,{onExited:r.bind(null,s),in:!0,exit:D(s,"exit",t),enter:D(s,"enter",t)}):l||!c||d?l&&c&&(0,a.isValidElement)(u)&&(o[e]=(0,a.cloneElement)(s,{onExited:r.bind(null,s),in:u.props.in,exit:D(s,"exit",t),enter:D(s,"enter",t)})):o[e]=(0,a.cloneElement)(s,{in:!1})}}),o),firstRender:!1}},i.handleExited=function(t,e){var i=M(this.props.children);t.key in i||(t.props.onExited&&t.props.onExited(e),this.mounted&&this.setState(function(e){var i=B({},e.children);return delete i[t.key],{children:i}}))},i.render=function(){var t=this.props,e=t.component,i=t.childFactory,o=v(t,["component","childFactory"]),n=this.state.contextValue,r=X(this.state.children).map(i);return(delete o.appear,delete o.enter,delete o.exit,null===e)?a.default.createElement(w.Provider,{value:n},r):a.default.createElement(w.Provider,{value:n},a.default.createElement(e,o,r))},e}(a.default.Component);Y.propTypes={},Y.defaultProps={component:"div",childFactory:function(t){return t}};var O=t.i(232471),R=t.i(164483),I=t.i(865823),A=t.i(481178),G=t.i(275519),_=t.i(749218),L=t.i(779177),P=t.i(44091),$=t.i(391466);let F={position:"bottom-right",autoClose:4e3,transitionDuration:250,allowDragDismiss:!0,allowScrollDismiss:!0,containerWidth:440,notificationMaxHeight:200,limit:5,zIndex:(0,_.getDefaultZIndex)("overlay"),store:e.notificationsStore,withinPortal:!0,pauseResetOnHover:"all"},q=(0,A.createVarsResolver)((t,{zIndex:e,containerWidth:i})=>({root:{"--notifications-z-index":e?.toString(),"--notifications-container-width":(0,L.rem)(i)}})),V=(0,G.factory)(t=>{var r;let s=(0,P.useProps)("Notifications",F,t),{classNames:c,className:l,style:v,styles:y,unstyled:b,vars:g,attributes:w,position:E,autoClose:C,transitionDuration:S,allowDragDismiss:k,allowScrollDismiss:N,containerWidth:T,notificationMaxHeight:B,limit:M,zIndex:D,store:X,portalProps:A,withinPortal:G,pauseResetOnHover:_,...L}=s,V=(0,u.useMantineTheme)(),H=(0,e.useNotifications)(X),U=(0,h.useForceUpdate)(),z=(0,x.useReducedMotion)(),W=(0,a.useRef)({}),J=(0,a.useRef)(0),[Q,K]=(0,a.useState)(0),Z=(0,a.useCallback)(()=>K(t=>t+1),[]),tt=(0,a.useCallback)(()=>K(t=>Math.max(0,t-1)),[]),te=V.respectReducedMotion&&z?1:S,ti=(0,$.useStyles)({name:"Notifications",classes:p,props:s,className:l,style:v,classNames:c,styles:y,unstyled:b,attributes:w,vars:g,varsResolver:q});(0,a.useEffect)(()=>{X?.updateState(t=>({...t,limit:M||5,defaultPosition:E}))},[M,E]),(0,m.useDidUpdate)(()=>{H.notifications.length>J.current&&setTimeout(()=>U(),0),J.current=H.notifications.length},[H.notifications]);let to=(r=H.notifications,r.reduce((t,e)=>(t[e.position||E].push(e),t),i.reduce((t,e)=>(t[e]=[],t),{}))),tn=i.reduce((t,i)=>(t[i]=to[i].map(({style:t,...r})=>(0,d.jsx)(j,{timeout:te,onEnter:()=>W.current[r.id].offsetHeight,nodeRef:{current:W.current[r.id]},children:s=>(0,d.jsx)(f,{ref:t=>{t?W.current[r.id]=t:delete W.current[r.id]},data:r,onHide:t=>(0,e.hideNotification)(t,X),autoClose:C,transitionDuration:te,allowDragDismiss:k,allowScrollDismiss:N,paused:"all"===_&&Q>0,onHoverStart:Z,onHoverEnd:tt,...ti("notification",{style:{...function({state:t,maxHeight:e,position:i,transitionDuration:r}){let[s,a]=i.split("-"),c="center"===a?`${s}-center`:a,l={opacity:0,maxHeight:e,transform:o[c],transitionDuration:`${r}ms, ${r}ms, ${r}ms`,transitionTimingFunction:"cubic-bezier(.51,.3,0,1.21), cubic-bezier(.51,.3,0,1.21), linear",transitionProperty:"opacity, transform, max-height"},u={opacity:1,transform:n[c]},d={opacity:0,maxHeight:0,transform:o[c]};return{...l,...{entering:u,entered:u,exiting:d,exited:d}[t]}}({state:s,position:i,transitionDuration:te,maxHeight:B}),...t}})})},r.id)),t),{});return(0,d.jsxs)(R.OptionalPortal,{withinPortal:G,...A,children:[(0,d.jsx)(O.Box,{...ti("root"),"data-position":"top-center",...L,children:(0,d.jsx)(Y,{children:tn["top-center"]})}),(0,d.jsx)(O.Box,{...ti("root"),"data-position":"top-left",...L,children:(0,d.jsx)(Y,{children:tn["top-left"]})}),(0,d.jsx)(O.Box,{...ti("root",{className:I.RemoveScroll.classNames.fullWidth}),"data-position":"top-right",...L,children:(0,d.jsx)(Y,{children:tn["top-right"]})}),(0,d.jsx)(O.Box,{...ti("root",{className:I.RemoveScroll.classNames.fullWidth}),"data-position":"bottom-right",...L,children:(0,d.jsx)(Y,{children:tn["bottom-right"]})}),(0,d.jsx)(O.Box,{...ti("root"),"data-position":"bottom-left",...L,children:(0,d.jsx)(Y,{children:tn["bottom-left"]})}),(0,d.jsx)(O.Box,{...ti("root"),"data-position":"bottom-center",...L,children:(0,d.jsx)(Y,{children:tn["bottom-center"]})})]})});V.classes=p,V.varsResolver=q,V.displayName="@mantine/notifications/Notifications",V.show=e.notifications.show,V.hide=e.notifications.hide,V.update=e.notifications.update,V.clean=e.notifications.clean,V.cleanQueue=e.notifications.cleanQueue,V.updateState=e.notifications.updateState,t.s(["Notifications",0,V],595739)},736897,t=>{"use strict";var e=t.i(648863),i=t.i(485108),o=t.i(725695),n=t.i(391398),r=t.i(200140);let s={type:"code",code:`
import { Group, Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  return (
    <Group justify="center">
      <Button
        onClick={() => notifications.show({ message: 'I will close in 4 seconds' })}
      >
        Notifications Provider timeout
      </Button>

      <Button
        onClick={() =>
          notifications.show({
            message: 'I will close in 500ms',
            autoClose: 500,
          })
        }
      >
        Closes in 500ms
      </Button>

      <Button
        onClick={() =>
          notifications.show({
            color: 'blue',
            title: 'I will never close',
            message: 'unless you click X',
            autoClose: false,
          })
        }
      >
        Never closes automatically
      </Button>
    </Group>
  );
}
`,component:function(){return(0,n.jsxs)(o.Group,{justify:"center",children:[(0,n.jsx)(i.Button,{onClick:()=>r.notifications.show({message:"I will close in 4 seconds"}),children:"Notifications Provider timeout"}),(0,n.jsx)(i.Button,{onClick:()=>r.notifications.show({message:"I will close in 500ms",autoClose:500}),children:"Closes in 500ms"}),(0,n.jsx)(i.Button,{onClick:()=>r.notifications.show({color:"blue",title:"I will never close",message:"unless you click X",autoClose:!1}),children:"Never closes automatically"})]})}},a={type:"code",code:`
import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  return (
    <Button
      onClick={() =>
        notifications.show({
          title: 'Default notification',
          message: 'Do not forget to star Mantine on GitHub! 🌟',
        })
      }
    >
      Show notification
    </Button>
  );
}`,centered:!0,component:function(){return(0,n.jsx)(i.Button,{onClick:()=>r.notifications.show({title:"Default notification",message:"Do not forget to star Mantine on GitHub! 🌟"}),children:"Show notification"})}},c={type:"code",code:`
import { Group, Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  return (
    <Group justify="center">
      <Button
        onClick={() => {
          Array(10)
            .fill(0)
            .forEach((_, index) => {
              notifications.show({
                title: \`Notification \${index + 1}\`,
                message: 'Most notifications are added to queue',
                autoClose: false,
              });
            });
        }}
      >
        Show 10 notifications
      </Button>

      <Button variant="default" onClick={() => notifications.cleanQueue()}>
        Clean queue
      </Button>

      <Button variant="outline" color="red" onClick={() => notifications.clean()}>
        Clean all
      </Button>
    </Group>
  );
}`,component:function(){return(0,n.jsxs)(o.Group,{justify:"center",children:[(0,n.jsx)(i.Button,{onClick:()=>{Array(10).fill(0).forEach((t,e)=>{r.notifications.show({title:`Notification ${e+1}`,message:"Most notifications are added to queue",autoClose:!1})})},children:"Show 10 notifications"}),(0,n.jsx)(i.Button,{variant:"default",onClick:()=>r.notifications.cleanQueue(),children:"Clean queue"}),(0,n.jsx)(i.Button,{variant:"outline",color:"red",onClick:()=>r.notifications.clean(),children:"Clean all"})]})}},l={type:"code",code:`
import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  return (
    <Button
      onClick={() => {
        Array(10).fill(0).forEach((_, index) => {
          setTimeout(() => {
            notifications.show({
              title: \`Notification \${index + 1}\`,
              message: 'Most notifications are added to queue',
            });
          }, 200 * index);
        });
      }}
    >
      Show 10 notifications
    </Button>
  );
}`,centered:!0,component:function(){return(0,n.jsx)(i.Button,{onClick:()=>{Array(10).fill(0).forEach((t,e)=>{setTimeout(()=>{r.notifications.show({title:`Notification ${e+1}`,message:"Most notifications are added to queue"})},200*e)})},children:"Show 10 notifications"})}};var u=t.i(595739);let d=`
import { Button, Group } from '@mantine/core';
import { createNotificationsStore, notifications, Notifications } from '@mantine/notifications';

// Dedicated store with limit={1} so the priority behavior is easy to see
const store = createNotificationsStore();

function Demo() {
  return (
    <>
      <Notifications store={store} limit={1} position="top-center" />

      <Group justify="center">
        <Button
          color="gray"
          onClick={() =>
            notifications.show(
              {
                title: 'Low priority',
                message: 'I am pushed to the queue when an urgent notification arrives',
                autoClose: false,
                priority: 0,
              },
              store
            )
          }
        >
          Show low priority
        </Button>

        <Button
          color="red"
          onClick={() =>
            notifications.show(
              {
                title: 'High priority',
                message: 'I take the visible slot even when the limit is reached',
                color: 'red',
                autoClose: false,
                priority: 10,
              },
              store
            )
          }
        >
          Show high priority
        </Button>
      </Group>
    </>
  );
}`,f=(0,r.createNotificationsStore)(),p={type:"code",code:d,centered:!0,component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.Notifications,{store:f,limit:1,position:"top-center"}),(0,n.jsxs)(o.Group,{justify:"center",children:[(0,n.jsx)(i.Button,{color:"gray",onClick:()=>r.notifications.show({title:"Low priority",message:"I am pushed to the queue when an urgent notification arrives",autoClose:!1,priority:0},f),children:"Show low priority"}),(0,n.jsx)(i.Button,{color:"red",onClick:()=>r.notifications.show({title:"High priority",message:"I take the visible slot even when the limit is reached",color:"red",autoClose:!1,priority:10},f),children:"Show high priority"})]})]})}};var m=t.i(837048);let h={type:"code",code:`
import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { CheckIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <Button
      onClick={() => {
        const id = notifications.show({
          loading: true,
          title: 'Loading your data',
          message: 'Data will be loaded in 3 seconds, you cannot close this yet',
          autoClose: false,
          allowClose: false,
        });

        setTimeout(() => {
          notifications.update({
            id,
            color: 'teal',
            title: 'Data was loaded',
            message: 'Notification will close in 2 seconds, you can close this notification now',
            icon: <CheckIcon size={18} />,
            loading: false,
            autoClose: 2000,
            allowClose: true,
          });
        }, 3000);
      }}
    >
      Show update notification
    </Button>
  );
}
`,centered:!0,component:function(){return(0,n.jsx)(i.Button,{onClick:()=>{let t=r.notifications.show({loading:!0,title:"Loading your data",message:"Data will be loaded in 3 seconds, you cannot close this yet",autoClose:!1,allowClose:!1});setTimeout(()=>{r.notifications.update({id:t,color:"teal",title:"Data was loaded",message:"Notification will close in 2 seconds, you can close this notification now",icon:(0,n.jsx)(m.CheckIcon,{size:18}),loading:!1,autoClose:2e3,allowClose:!0})},3e3)},children:"Show update notification"})}};var x={root:"m_45c99571",description:"m_436b008d",title:"m_73829fa9",closeButton:"m_979213db"};let v={type:"code",centered:!0,component:function(){return(0,n.jsxs)(o.Group,{justify:"center",children:[(0,n.jsx)(i.Button,{onClick:()=>r.notifications.show({title:"Notification with custom styles",message:"It is default blue",classNames:x}),children:"Default notification"}),(0,n.jsx)(i.Button,{color:"red",onClick:()=>r.notifications.show({color:"red",title:"Notification with custom styles",message:"It is red",classNames:x}),children:"Error notification"})]})},code:[{fileName:"Demo.tsx",code:`
import { Button, Group } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Group justify="center">
      <Button
        onClick={() =>
          notifications.show({
            title: 'Notification with custom styles',
            message: 'It is default blue',
            classNames: classes,
          })
        }
      >
        Default notification
      </Button>

      <Button
        color="red"
        onClick={() =>
          notifications.show({
            color: 'red',
            title: 'Notification with custom styles',
            message: 'It is red',
            classNames: classes,
          })
        }
      >
        Error notification
      </Button>
    </Group>
  );
}`,language:"tsx"},{fileName:"Demo.module.css",code:`
.root {
  background-color: var(--notification-color, var(--mantine-primary-color-filled));

  &::before {
    background-color: var(--mantine-color-white);
  }
}

.description,
.title {
  color: var(--mantine-color-white);
}

.closeButton {
  color: var(--mantine-color-white);

  @mixin hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
`,language:"scss"}]},y=["top-left","top-right","bottom-left","bottom-right","top-center","bottom-center"],b={type:"code",code:`
import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

const positions = [
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
  'top-center',
  'bottom-center',
] as const;

function Demo() {
  const buttons = positions.map((position) => (
    <Button
      key={position}
      onClick={() =>
        notifications.show({
          title: \`Notification at \${position}\`,
          message: \`Notification at \${position} message\`,
          position,
        })
      }
    >
      {position}
    </Button>
  ));

  return <Group>{buttons}</Group>;
}`,centered:!0,component:function(){return(0,n.jsx)(o.Group,{children:y.map(t=>(0,n.jsx)(i.Button,{onClick:()=>r.notifications.show({title:`Notification at ${t}`,message:`Notification at ${t} message`,position:t}),children:t},t))})}};var g=t.i(301388),w=t.i(883364),E=t.i(692385);let C={type:"code",code:`
function Demo() {
  const [counter, { increment }] = useCounter();
  const notificationsStore = useNotifications();

  const showNotification = () => {
    notifications.show({
      title: \`Notification \${counter}\`,
      message: 'Most notifications are added to queue',
    });

    increment();
  };

  return (
    <>
      <Button onClick={showNotification} mb="md">
        Show notification
      </Button>

      <Text>Notifications state</Text>
      <Code block>{JSON.stringify(notificationsStore.notifications, null, 2)}</Code>

      <Text mt="md">Notifications queue</Text>
      <Code block>{JSON.stringify(notificationsStore.queue, null, 2)}</Code>
    </>
  );
}`,component:function(){let[t,{increment:e}]=(0,E.useCounter)(),o=(0,r.useNotifications)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Button,{onClick:()=>{r.notifications.show({title:`Notification ${t}`,message:"Most notifications are added to queue"}),e()},mb:"md",children:"Show notification"}),(0,n.jsx)(w.Text,{children:"Notifications state"}),(0,n.jsx)(g.Code,{block:!0,children:JSON.stringify(o.notifications,null,2)}),(0,n.jsx)(w.Text,{mt:"md",children:"Notifications queue"}),(0,n.jsx)(g.Code,{block:!0,children:JSON.stringify(o.queue,null,2)})]})}};var S=(0,e.__exportAll)({autoclose:()=>s,base:()=>a,clean:()=>c,customize:()=>v,limit:()=>l,position:()=>b,priority:()=>p,store:()=>C,update:()=>h});t.s(["NotificationsDemos",0,S],736897)}]);