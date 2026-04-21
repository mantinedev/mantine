(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,822633,e=>{"use strict";let t,o;var r,n,l,a,i,m,u,s,c,d,p,f,h,b,g,y,x,v,k,I=e.i(648863),S=e.i(485108),w=e.i(37541),j=e.i(725695),P=e.i(841209),T=e.i(582498),N=e.i(391398);let F={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{email:"",termsOfService:!1},validate:{email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email"}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,N.jsx)(P.TextInput,{withAsterisk:!0,label:"Email",placeholder:"your@email.com",...e.getInputProps("email")},e.key("email")),(0,N.jsx)(w.Checkbox,{mt:"md",label:"I agree to sell my privacy",...e.getInputProps("termsOfService",{type:"checkbox"})},e.key("termsOfService")),(0,N.jsx)(j.Group,{justify:"flex-end",mt:"md",children:(0,N.jsx)(S.Button,{type:"submit",children:"Submit"})})]})},code:`
import { Button, Checkbox, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput
        withAsterisk
        label="Email"
        placeholder="your@email.com"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Checkbox
        mt="md"
        label="I agree to sell my privacy"
        key={form.key('termsOfService')}
        {...form.getInputProps('termsOfService', { type: 'checkbox' })}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`,maxWidth:340,centered:!0};var B=e.i(823439),E=e.i(658109),C=e.i(232471),G=e.i(502325),V=e.i(883364),D=e.i(57807);let A={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{employees:[{name:"",active:!1,key:(0,D.randomId)()}]}}),t=e.getValues().employees.map((t,o)=>(0,N.jsxs)(j.Group,{mt:"xs",children:[(0,N.jsx)(P.TextInput,{placeholder:"John Doe",withAsterisk:!0,style:{flex:1},...e.getInputProps(`employees.${o}.name`)},e.key(`employees.${o}.name`)),(0,N.jsx)(G.Switch,{label:"Active",...e.getInputProps(`employees.${o}.active`,{type:"checkbox"})},e.key(`employees.${o}.active`)),(0,N.jsx)(E.ActionIcon,{color:"red",onClick:()=>e.removeListItem("employees",o),children:(0,N.jsx)(B.TrashIcon,{size:16})})]},t.key));return(0,N.jsxs)(C.Box,{maw:500,mx:"auto",children:[t.length>0?(0,N.jsxs)(j.Group,{mb:"xs",children:[(0,N.jsx)(V.Text,{fw:500,size:"sm",style:{flex:1},children:"Name"}),(0,N.jsx)(V.Text,{fw:500,size:"sm",pr:90,children:"Status"})]}):(0,N.jsx)(V.Text,{c:"dimmed",ta:"center",children:"No one here..."}),t,(0,N.jsx)(j.Group,{justify:"center",mt:"md",children:(0,N.jsx)(S.Button,{onClick:()=>e.insertListItem("employees",{name:"",active:!1,key:(0,D.randomId)()}),children:"Add employee"})})]})},code:`
import { useForm } from '@mantine/form';
import { TextInput, Switch, Group, ActionIcon, Box, Text, Button } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { TrashIcon } from '@phosphor-icons/react';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      employees: [{ name: '', active: false, key: randomId() }],
    },
  });

  const fields = form.getValues().employees.map((item, index) => (
    <Group key={item.key} mt="xs">
      <TextInput
        placeholder="John Doe"
        withAsterisk
        style={{ flex: 1 }}
        key={form.key(\`employees.\${index}.name\`)}
        {...form.getInputProps(\`employees.\${index}.name\`)}
      />
      <Switch
        label="Active"
        key={form.key(\`employees.\${index}.active\`)}
        {...form.getInputProps(\`employees.\${index}.active\`, { type: 'checkbox' })}
      />
      <ActionIcon color="red" onClick={() => form.removeListItem('employees', index)}>
        <TrashIcon size={16} />
      </ActionIcon>
    </Group>
  ));

  return (
    <Box maw={500} mx="auto">
      {fields.length > 0 ? (
        <Group mb="xs">
          <Text fw={500} size="sm" style={{ flex: 1 }}>
            Name
          </Text>
          <Text fw={500} size="sm" pr={90}>
            Status
          </Text>
        </Group>
      ) : (
        <Text c="dimmed" ta="center">
          No one here...
        </Text>
      )}

      {fields}

      <Group justify="center" mt="md">
        <Button
          onClick={() =>
            form.insertListItem('employees', { name: '', active: false, key: randomId() })
          }
        >
          Add employee
        </Button>
      </Group>
    </Box>
  );
}
`};var R=e.i(414124),O=e.i(330573),Y=e.i(191788),L=e.i(730943);let M="u">typeof window&&void 0!==window.document&&void 0!==window.document.createElement;function J(e){let t=Object.prototype.toString.call(e);return"[object Window]"===t||"[object global]"===t}function $(e){return"nodeType"in e}function z(e){var t,o;return e?J(e)?e:$(e)&&null!=(t=null==(o=e.ownerDocument)?void 0:o.defaultView)?t:window:window}function W(e){let{Document:t}=z(e);return e instanceof t}function U(e){return!J(e)&&e instanceof z(e).HTMLElement}function q(e){return e instanceof z(e).SVGElement}function X(e){return e?J(e)?e.document:$(e)?W(e)?e:U(e)||q(e)?e.ownerDocument:document:document:document}let _=M?Y.useLayoutEffect:Y.useEffect;function K(e){let t=(0,Y.useRef)(e);return _(()=>{t.current=e}),(0,Y.useCallback)(function(){for(var e=arguments.length,o=Array(e),r=0;r<e;r++)o[r]=arguments[r];return null==t.current?void 0:t.current(...o)},[])}function H(e,t){void 0===t&&(t=[e]);let o=(0,Y.useRef)(e);return _(()=>{o.current!==e&&(o.current=e)},t),o}function Q(e,t){let o=(0,Y.useRef)();return(0,Y.useMemo)(()=>{let t=e(o.current);return o.current=t,t},[...t])}function Z(e){let t=K(e),o=(0,Y.useRef)(null),r=(0,Y.useCallback)(e=>{e!==o.current&&(null==t||t(e,o.current)),o.current=e},[]);return[o,r]}function ee(e){let t=(0,Y.useRef)();return(0,Y.useEffect)(()=>{t.current=e},[e]),t.current}let et={};function eo(e,t){return(0,Y.useMemo)(()=>{if(t)return t;let o=null==et[e]?0:et[e]+1;return et[e]=o,e+"-"+o},[e,t])}function er(e){return function(t){for(var o=arguments.length,r=Array(o>1?o-1:0),n=1;n<o;n++)r[n-1]=arguments[n];return r.reduce((t,o)=>{for(let[r,n]of Object.entries(o)){let o=t[r];null!=o&&(t[r]=o+e*n)}return t},{...t})}}let en=er(1),el=er(-1);function ea(e){if(!e)return!1;let{KeyboardEvent:t}=z(e.target);return t&&e instanceof t}function ei(e){if(function(e){if(!e)return!1;let{TouchEvent:t}=z(e.target);return t&&e instanceof t}(e)){if(e.touches&&e.touches.length){let{clientX:t,clientY:o}=e.touches[0];return{x:t,y:o}}else if(e.changedTouches&&e.changedTouches.length){let{clientX:t,clientY:o}=e.changedTouches[0];return{x:t,y:o}}}return"clientX"in e&&"clientY"in e?{x:e.clientX,y:e.clientY}:null}let em=Object.freeze({Translate:{toString(e){if(!e)return;let{x:t,y:o}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(o?Math.round(o):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;let{scaleX:t,scaleY:o}=e;return"scaleX("+t+") scaleY("+o+")"}},Transform:{toString(e){if(e)return[em.Translate.toString(e),em.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:o,easing:r}=e;return t+" "+o+"ms "+r}}}),eu="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]",es={display:"none"};function ec(e){let{id:t,value:o}=e;return Y.default.createElement("div",{id:t,style:es},o)}function ed(e){let{id:t,announcement:o,ariaLiveType:r="assertive"}=e;return Y.default.createElement("div",{id:t,style:{position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"},role:"status","aria-live":r,"aria-atomic":!0},o)}let ep=(0,Y.createContext)(null),ef={draggable:"\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "},eh={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:o}=e;return o?"Draggable item "+t.id+" was moved over droppable area "+o.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:o}=e;return o?"Draggable item "+t.id+" was dropped over droppable area "+o.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function eb(e){var t;let o,{announcements:r=eh,container:n,hiddenTextDescribedById:l,screenReaderInstructions:a=ef}=e,{announce:i,announcement:m}=function(){let[e,t]=(0,Y.useState)("");return{announce:(0,Y.useCallback)(e=>{null!=e&&t(e)},[]),announcement:e}}(),u=eo("DndLiveRegion"),[s,c]=(0,Y.useState)(!1);if((0,Y.useEffect)(()=>{c(!0)},[]),t=(0,Y.useMemo)(()=>({onDragStart(e){let{active:t}=e;i(r.onDragStart({active:t}))},onDragMove(e){let{active:t,over:o}=e;r.onDragMove&&i(r.onDragMove({active:t,over:o}))},onDragOver(e){let{active:t,over:o}=e;i(r.onDragOver({active:t,over:o}))},onDragEnd(e){let{active:t,over:o}=e;i(r.onDragEnd({active:t,over:o}))},onDragCancel(e){let{active:t,over:o}=e;i(r.onDragCancel({active:t,over:o}))}}),[i,r]),o=(0,Y.useContext)(ep),(0,Y.useEffect)(()=>{if(!o)throw Error("useDndMonitor must be used within a children of <DndContext>");return o(t)},[t,o]),!s)return null;let d=Y.default.createElement(Y.default.Fragment,null,Y.default.createElement(ec,{id:l,value:a.draggable}),Y.default.createElement(ed,{id:u,announcement:m}));return n?(0,L.createPortal)(d,n):d}function eg(){}(r=d||(d={})).DragStart="dragStart",r.DragMove="dragMove",r.DragEnd="dragEnd",r.DragCancel="dragCancel",r.DragOver="dragOver",r.RegisterDroppable="registerDroppable",r.SetDroppableDisabled="setDroppableDisabled",r.UnregisterDroppable="unregisterDroppable";let ey=Object.freeze({x:0,y:0});function ex(e,t){let{data:{value:o}}=e,{data:{value:r}}=t;return o-r}function ev(e,t){let{data:{value:o}}=e,{data:{value:r}}=t;return r-o}function ek(e,t,o){return void 0===t&&(t=e.left),void 0===o&&(o=e.top),{x:t+.5*e.width,y:o+.5*e.height}}let eI=e=>{let{collisionRect:t,droppableRects:o,droppableContainers:r}=e,n=ek(t,t.left,t.top),l=[];for(let e of r){let{id:t}=e,r=o.get(t);if(r){var a;let o=(a=ek(r),Math.sqrt(Math.pow(a.x-n.x,2)+Math.pow(a.y-n.y,2)));l.push({id:t,data:{droppableContainer:e,value:o}})}}return l.sort(ex)},eS=e=>{let{collisionRect:t,droppableRects:o,droppableContainers:r}=e,n=[];for(let e of r){let{id:r}=e,l=o.get(r);if(l){let o=function(e,t){let o=Math.max(t.top,e.top),r=Math.max(t.left,e.left),n=Math.min(t.left+t.width,e.left+e.width),l=Math.min(t.top+t.height,e.top+e.height);if(r<n&&o<l){let a=t.width*t.height,i=e.width*e.height,m=(n-r)*(l-o);return Number((m/(a+i-m)).toFixed(4))}return 0}(l,t);o>0&&n.push({id:r,data:{droppableContainer:e,value:o}})}}return n.sort(ev)};function ew(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:ey}let ej=function(e){for(var t=arguments.length,o=Array(t>1?t-1:0),r=1;r<t;r++)o[r-1]=arguments[r];return o.reduce((e,t)=>({...e,top:e.top+ +t.y,bottom:e.bottom+ +t.y,left:e.left+ +t.x,right:e.right+ +t.x}),{...e})},eP={ignoreTransform:!1};function eT(e,t){void 0===t&&(t=eP);let o=e.getBoundingClientRect();if(t.ignoreTransform){let{transform:t,transformOrigin:r}=z(e).getComputedStyle(e);t&&(o=function(e,t,o){let r=function(e){if(e.startsWith("matrix3d(")){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith("matrix(")){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}(t);if(!r)return e;let{scaleX:n,scaleY:l,x:a,y:i}=r,m=e.left-a-(1-n)*parseFloat(o),u=e.top-i-(1-l)*parseFloat(o.slice(o.indexOf(" ")+1)),s=n?e.width/n:e.width,c=l?e.height/l:e.height;return{width:s,height:c,top:u,right:m+s,bottom:u+c,left:m}}(o,t,r))}let{top:r,left:n,width:l,height:a,bottom:i,right:m}=o;return{top:r,left:n,width:l,height:a,bottom:i,right:m}}function eN(e){return eT(e,{ignoreTransform:!0})}function eF(e,t){let o=[];return e?function r(n){var l,a;let i;if(null!=t&&o.length>=t||!n)return o;if(W(n)&&null!=n.scrollingElement&&!o.includes(n.scrollingElement))return o.push(n.scrollingElement),o;if(!U(n)||q(n)||o.includes(n))return o;let m=z(e).getComputedStyle(n);return(n!==e&&(void 0===(l=m)&&(l=z(n).getComputedStyle(n)),i=/(auto|scroll|overlay)/,["overflow","overflowX","overflowY"].some(e=>{let t=l[e];return"string"==typeof t&&i.test(t)}))&&o.push(n),void 0===(a=m)&&(a=z(n).getComputedStyle(n)),"fixed"===a.position)?o:r(n.parentNode)}(e):o}function eB(e){let[t]=eF(e,1);return null!=t?t:null}function eE(e){return M&&e?J(e)?e:$(e)?W(e)||e===X(e).scrollingElement?window:U(e)?e:null:null:null}function eC(e){return J(e)?e.scrollX:e.scrollLeft}function eG(e){return J(e)?e.scrollY:e.scrollTop}function eV(e){return{x:eC(e),y:eG(e)}}function eD(e){return!!M&&!!e&&e===document.scrollingElement}function eA(e){let t={x:0,y:0},o=eD(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-o.width,y:e.scrollHeight-o.height},n=e.scrollTop<=t.y,l=e.scrollLeft<=t.x;return{isTop:n,isLeft:l,isBottom:e.scrollTop>=r.y,isRight:e.scrollLeft>=r.x,maxScroll:r,minScroll:t}}(n=p||(p={}))[n.Forward=1]="Forward",n[n.Backward=-1]="Backward";let eR={x:.2,y:.2};function eO(e){return e.reduce((e,t)=>en(e,eV(t)),ey)}let eY=[["x",["left","right"],function(e){return e.reduce((e,t)=>e+eC(t),0)}],["y",["top","bottom"],function(e){return e.reduce((e,t)=>e+eG(t),0)}]];class eL{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const o=eF(t),r=eO(o);for(const[t,n,l]of(this.rect={...e},this.width=e.width,this.height=e.height,eY))for(const e of n)Object.defineProperty(this,e,{get:()=>{let n=l(o),a=r[t]-n;return this.rect[e]+a},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class eM{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(e=>{var t;return null==(t=this.target)?void 0:t.removeEventListener(...e)})},this.target=e}add(e,t,o){var r;null==(r=this.target)||r.addEventListener(e,t,o),this.listeners.push([e,t,o])}}function eJ(e,t){let o=Math.abs(e.x),r=Math.abs(e.y);return"number"==typeof t?Math.sqrt(o**2+r**2)>t:"x"in t&&"y"in t?o>t.x&&r>t.y:"x"in t?o>t.x:"y"in t&&r>t.y}function e$(e){e.preventDefault()}function ez(e){e.stopPropagation()}(l=f||(f={})).Click="click",l.DragStart="dragstart",l.Keydown="keydown",l.ContextMenu="contextmenu",l.Resize="resize",l.SelectionChange="selectionchange",l.VisibilityChange="visibilitychange",(a=h||(h={})).Space="Space",a.Down="ArrowDown",a.Right="ArrowRight",a.Left="ArrowLeft",a.Up="ArrowUp",a.Esc="Escape",a.Enter="Enter",a.Tab="Tab";let eW={start:[h.Space,h.Enter],cancel:[h.Esc],end:[h.Space,h.Enter,h.Tab]},eU=(e,t)=>{let{currentCoordinates:o}=t;switch(e.code){case h.Right:return{...o,x:o.x+25};case h.Left:return{...o,x:o.x-25};case h.Down:return{...o,y:o.y+25};case h.Up:return{...o,y:o.y-25}}};class eq{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:t}}=e;this.props=e,this.listeners=new eM(X(t)),this.windowListeners=new eM(z(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(f.Resize,this.handleCancel),this.windowListeners.add(f.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(f.Keydown,this.handleKeyDown))}handleStart(){let{activeNode:e,onStart:t}=this.props,o=e.node.current;o&&function(e,t){if(void 0===t&&(t=eT),!e)return;let{top:o,left:r,bottom:n,right:l}=t(e);eB(e)&&(n<=0||l<=0||o>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}(o),t(ey)}handleKeyDown(e){if(ea(e)){let{active:t,context:o,options:r}=this.props,{keyboardCodes:n=eW,coordinateGetter:l=eU,scrollBehavior:a="smooth"}=r,{code:i}=e;if(n.end.includes(i))return void this.handleEnd(e);if(n.cancel.includes(i))return void this.handleCancel(e);let{collisionRect:m}=o.current,u=m?{x:m.left,y:m.top}:ey;this.referenceCoordinates||(this.referenceCoordinates=u);let s=l(e,{active:t,context:o.current,currentCoordinates:u});if(s){let t=el(s,u),r={x:0,y:0},{scrollableAncestors:n}=o.current;for(let o of n){let n=e.code,{isTop:l,isRight:i,isLeft:m,isBottom:u,maxScroll:c,minScroll:d}=eA(o),p=function(e){if(e===document.scrollingElement){let{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}let{top:t,left:o,right:r,bottom:n}=e.getBoundingClientRect();return{top:t,left:o,right:r,bottom:n,width:e.clientWidth,height:e.clientHeight}}(o),f={x:Math.min(n===h.Right?p.right-p.width/2:p.right,Math.max(n===h.Right?p.left:p.left+p.width/2,s.x)),y:Math.min(n===h.Down?p.bottom-p.height/2:p.bottom,Math.max(n===h.Down?p.top:p.top+p.height/2,s.y))},b=n===h.Right&&!i||n===h.Left&&!m,g=n===h.Down&&!u||n===h.Up&&!l;if(b&&f.x!==s.x){let e=o.scrollLeft+t.x,l=n===h.Right&&e<=c.x||n===h.Left&&e>=d.x;if(l&&!t.y)return void o.scrollTo({left:e,behavior:a});l?r.x=o.scrollLeft-e:r.x=n===h.Right?o.scrollLeft-c.x:o.scrollLeft-d.x,r.x&&o.scrollBy({left:-r.x,behavior:a});break}if(g&&f.y!==s.y){let e=o.scrollTop+t.y,l=n===h.Down&&e<=c.y||n===h.Up&&e>=d.y;if(l&&!t.x)return void o.scrollTo({top:e,behavior:a});l?r.y=o.scrollTop-e:r.y=n===h.Down?o.scrollTop-c.y:o.scrollTop-d.y,r.y&&o.scrollBy({top:-r.y,behavior:a});break}}this.handleMove(e,en(el(s,this.referenceCoordinates),r))}}}handleMove(e,t){let{onMove:o}=this.props;e.preventDefault(),o(t)}handleEnd(e){let{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){let{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}function eX(e){return!!(e&&"distance"in e)}function e_(e){return!!(e&&"delay"in e)}eq.activators=[{eventName:"onKeyDown",handler:(e,t,o)=>{let{keyboardCodes:r=eW,onActivation:n}=t,{active:l}=o,{code:a}=e.nativeEvent;if(r.start.includes(a)){let t=l.activatorNode.current;return(!t||e.target===t)&&(e.preventDefault(),null==n||n({event:e.nativeEvent}),!0)}return!1}}];class eK{constructor(e,t,o){var r;void 0===o&&(o=function(e){let{EventTarget:t}=z(e);return e instanceof t?e:X(e)}(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;const{event:n}=e,{target:l}=n;this.props=e,this.events=t,this.document=X(l),this.documentListeners=new eM(this.document),this.listeners=new eM(o),this.windowListeners=new eM(z(l)),this.initialCoordinates=null!=(r=ei(n))?r:ey,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){let{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:o}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),e.cancel&&this.listeners.add(e.cancel.name,this.handleCancel),this.windowListeners.add(f.Resize,this.handleCancel),this.windowListeners.add(f.DragStart,e$),this.windowListeners.add(f.VisibilityChange,this.handleCancel),this.windowListeners.add(f.ContextMenu,e$),this.documentListeners.add(f.Keydown,this.handleKeydown),t){if(null!=o&&o({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(e_(t)){this.timeoutId=setTimeout(this.handleStart,t.delay),this.handlePending(t);return}if(eX(t))return void this.handlePending(t)}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),null!==this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(e,t){let{active:o,onPending:r}=this.props;r(o,e,this.initialCoordinates,t)}handleStart(){let{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(f.Click,ez,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(f.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){var t;let{activated:o,initialCoordinates:r,props:n}=this,{onMove:l,options:{activationConstraint:a}}=n;if(!r)return;let i=null!=(t=ei(e))?t:ey,m=el(r,i);if(!o&&a){if(eX(a)){if(null!=a.tolerance&&eJ(m,a.tolerance))return this.handleCancel();if(eJ(m,a.distance))return this.handleStart()}return e_(a)&&eJ(m,a.tolerance)?this.handleCancel():void this.handlePending(a,m)}e.cancelable&&e.preventDefault(),l(i)}handleEnd(){let{onAbort:e,onEnd:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleCancel(){let{onAbort:e,onCancel:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleKeydown(e){e.code===h.Esc&&this.handleCancel()}removeTextSelection(){var e;null==(e=this.document.getSelection())||e.removeAllRanges()}}let eH={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}};class eQ extends eK{constructor(e){const{event:t}=e;super(e,eH,X(t.target))}}eQ.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:o}=e,{onActivation:r}=t;return!!o.isPrimary&&0===o.button&&(null==r||r({event:o}),!0)}}];(i=b||(b={}))[i.RightClick=2]="RightClick";(m=g||(g={}))[m.Pointer=0]="Pointer",m[m.DraggableRect=1]="DraggableRect",(u=y||(y={}))[u.TreeOrder=0]="TreeOrder",u[u.ReversedTreeOrder=1]="ReversedTreeOrder";let eZ={x:{[p.Backward]:!1,[p.Forward]:!1},y:{[p.Backward]:!1,[p.Forward]:!1}};(s=x||(x={}))[s.Always=0]="Always",s[s.BeforeDragging=1]="BeforeDragging",s[s.WhileDragging=2]="WhileDragging",(v||(v={})).Optimized="optimized";let e0=new Map;function e1(e,t){return Q(o=>e?o||("function"==typeof t?t(e):e):null,[t,e])}function e2(e){let{callback:t,disabled:o}=e,r=K(t),n=(0,Y.useMemo)(()=>{if(o||"u"<typeof window||void 0===window.ResizeObserver)return;let{ResizeObserver:e}=window;return new e(r)},[o]);return(0,Y.useEffect)(()=>()=>null==n?void 0:n.disconnect(),[n]),n}function e3(e){return new eL(eT(e),e)}function e8(e,t,o){void 0===t&&(t=e3);let[r,n]=(0,Y.useState)(null);function l(){n(r=>{if(!e)return null;if(!1===e.isConnected){var n;return null!=(n=null!=r?r:o)?n:null}let l=t(e);return JSON.stringify(r)===JSON.stringify(l)?r:l})}let a=function(e){let{callback:t,disabled:o}=e,r=K(t),n=(0,Y.useMemo)(()=>{if(o||"u"<typeof window||void 0===window.MutationObserver)return;let{MutationObserver:e}=window;return new e(r)},[r,o]);return(0,Y.useEffect)(()=>()=>null==n?void 0:n.disconnect(),[n]),n}({callback(t){if(e)for(let o of t){let{type:t,target:r}=o;if("childList"===t&&r instanceof HTMLElement&&r.contains(e)){l();break}}}}),i=e2({callback:l});return _(()=>{l(),e?(null==i||i.observe(e),null==a||a.observe(document.body,{childList:!0,subtree:!0})):(null==i||i.disconnect(),null==a||a.disconnect())},[e]),r}let e9=[];function e5(e,t){void 0===t&&(t=[]);let o=(0,Y.useRef)(null);return(0,Y.useEffect)(()=>{o.current=null},t),(0,Y.useEffect)(()=>{let t=e!==ey;t&&!o.current&&(o.current=e),!t&&o.current&&(o.current=null)},[e]),o.current?el(e,o.current):ey}function e4(e){return(0,Y.useMemo)(()=>{let t,o;return e?(t=e.innerWidth,{top:0,left:0,right:t,bottom:o=e.innerHeight,width:t,height:o}):null},[e])}let e6=[],e7=[{sensor:eQ,options:{}},{sensor:eq,options:{}}],te={current:{}},tt={draggable:{measure:eN},droppable:{measure:eN,strategy:x.WhileDragging,frequency:v.Optimized},dragOverlay:{measure:eT}};class to extends Map{get(e){var t;return null!=e&&null!=(t=super.get(e))?t:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(e=>{let{disabled:t}=e;return!t})}getNodeFor(e){var t,o;return null!=(t=null==(o=this.get(e))?void 0:o.node.current)?t:void 0}}let tr={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new to,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:eg},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:tt,measureDroppableContainers:eg,windowRect:null,measuringScheduled:!1},tn={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:eg,draggableNodes:new Map,over:null,measureDroppableContainers:eg},tl=(0,Y.createContext)(tn),ta=(0,Y.createContext)(tr);function ti(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new to}}}function tm(e,t){switch(t.type){case d.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case d.DragMove:if(null==e.draggable.active)return e;return{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case d.DragEnd:case d.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case d.RegisterDroppable:{let{element:o}=t,{id:r}=o,n=new to(e.droppable.containers);return n.set(r,o),{...e,droppable:{...e.droppable,containers:n}}}case d.SetDroppableDisabled:{let{id:o,key:r,disabled:n}=t,l=e.droppable.containers.get(o);if(!l||r!==l.key)return e;let a=new to(e.droppable.containers);return a.set(o,{...l,disabled:n}),{...e,droppable:{...e.droppable,containers:a}}}case d.UnregisterDroppable:{let{id:o,key:r}=t,n=e.droppable.containers.get(o);if(!n||r!==n.key)return e;let l=new to(e.droppable.containers);return l.delete(o),{...e,droppable:{...e.droppable,containers:l}}}default:return e}}function tu(e){let{disabled:t}=e,{active:o,activatorEvent:r,draggableNodes:n}=(0,Y.useContext)(tl),l=ee(r),a=ee(null==o?void 0:o.id);return(0,Y.useEffect)(()=>{if(!t&&!r&&l&&null!=a){if(!ea(l)||document.activeElement===l.target)return;let e=n.get(a);if(!e)return;let{activatorNode:t,node:o}=e;(t.current||o.current)&&requestAnimationFrame(()=>{for(let e of[t.current,o.current]){if(!e)continue;let t=e.matches(eu)?e:e.querySelector(eu);if(t){t.focus();break}}})}},[r,t,n,a,l]),null}let ts=(0,Y.createContext)({...ey,scaleX:1,scaleY:1});(c=k||(k={}))[c.Uninitialized=0]="Uninitialized",c[c.Initializing=1]="Initializing",c[c.Initialized=2]="Initialized";let tc=(0,Y.memo)(function(e){var t,o,r,n,l,a,i,m;let u,s,c,f,h,b,v,I,{id:S,accessibility:w,autoScroll:j=!0,children:P,sensors:T=e7,collisionDetection:N=eS,measuring:F,modifiers:B,...E}=e,[C,G]=(0,Y.useReducer)(tm,void 0,ti),[V,D]=function(){let[e]=(0,Y.useState)(()=>new Set),t=(0,Y.useCallback)(t=>(e.add(t),()=>e.delete(t)),[e]);return[(0,Y.useCallback)(t=>{let{type:o,event:r}=t;e.forEach(e=>{var t;return null==(t=e[o])?void 0:t.call(e,r)})},[e]),t]}(),[A,R]=(0,Y.useState)(k.Uninitialized),O=A===k.Initialized,{draggable:{active:J,nodes:$,translate:W},droppable:{containers:q}}=C,X=null!=J?$.get(J):null,K=(0,Y.useRef)({initial:null,translated:null}),et=(0,Y.useMemo)(()=>{var e;return null!=J?{id:J,data:null!=(e=null==X?void 0:X.data)?e:te,rect:K}:null},[J,X]),er=(0,Y.useRef)(null),[el,ea]=(0,Y.useState)(null),[em,eu]=(0,Y.useState)(null),es=H(E,Object.values(E)),ec=eo("DndDescribedBy",S),ed=(0,Y.useMemo)(()=>q.getEnabled(),[q]),ef=(0,Y.useMemo)(()=>({draggable:{...tt.draggable,...null==F?void 0:F.draggable},droppable:{...tt.droppable,...null==F?void 0:F.droppable},dragOverlay:{...tt.dragOverlay,...null==F?void 0:F.dragOverlay}}),[null==F?void 0:F.draggable,null==F?void 0:F.droppable,null==F?void 0:F.dragOverlay]),{droppableRects:eh,measureDroppableContainers:eg,measuringScheduled:ex}=function(e,t){let{dragging:o,dependencies:r,config:n}=t,[l,a]=(0,Y.useState)(null),{frequency:i,measure:m,strategy:u}=n,s=(0,Y.useRef)(e),c=function(){switch(u){case x.Always:return!1;case x.BeforeDragging:return o;default:return!o}}(),d=H(c),p=(0,Y.useCallback)(function(e){void 0===e&&(e=[]),d.current||a(t=>null===t?e:t.concat(e.filter(e=>!t.includes(e))))},[d]),f=(0,Y.useRef)(null),h=Q(t=>{if(c&&!o)return e0;if(!t||t===e0||s.current!==e||null!=l){let t=new Map;for(let o of e){if(!o)continue;if(l&&l.length>0&&!l.includes(o.id)&&o.rect.current){t.set(o.id,o.rect.current);continue}let e=o.node.current,r=e?new eL(m(e),e):null;o.rect.current=r,r&&t.set(o.id,r)}return t}return t},[e,l,o,c,m]);return(0,Y.useEffect)(()=>{s.current=e},[e]),(0,Y.useEffect)(()=>{c||p()},[o,c]),(0,Y.useEffect)(()=>{l&&l.length>0&&a(null)},[JSON.stringify(l)]),(0,Y.useEffect)(()=>{c||"number"!=typeof i||null!==f.current||(f.current=setTimeout(()=>{p(),f.current=null},i))},[i,c,p,...r]),{droppableRects:h,measureDroppableContainers:p,measuringScheduled:null!=l}}(ed,{dragging:O,dependencies:[W.x,W.y],config:ef.droppable}),ev=Q(e=>{var t;return null==J?null:null!=(t=null!=h?h:e)?t:null},[h=(f=null!=J?$.get(J):void 0)?f.node.current:null,J]),ek=(0,Y.useMemo)(()=>em?ei(em):null,[em]),eI=(u=(null==el?void 0:el.autoScrollEnabled)===!1,s="object"==typeof j?!1===j.enabled:!1===j,c=O&&!u&&!s,"object"==typeof j?{...j,enabled:c}:{enabled:c}),eP=e1(ev,ef.draggable.measure);!function(e){let{activeNode:t,measure:o,initialRect:r,config:n=!0}=e,l=(0,Y.useRef)(!1),{x:a,y:i}="boolean"==typeof n?{x:n,y:n}:n;_(()=>{if(!a&&!i||!t){l.current=!1;return}if(l.current||!r)return;let e=null==t?void 0:t.node.current;if(!e||!1===e.isConnected)return;let n=ew(o(e),r);if(a||(n.x=0),i||(n.y=0),l.current=!0,Math.abs(n.x)>0||Math.abs(n.y)>0){let t=eB(e);t&&t.scrollBy({top:n.y,left:n.x})}},[t,a,i,r,o])}({activeNode:null!=J?$.get(J):null,config:eI.layoutShiftCompensation,initialRect:eP,measure:ef.draggable.measure});let eN=e8(ev,ef.draggable.measure,eP),eC=e8(ev?ev.parentElement:null),eG=(0,Y.useRef)({activatorEvent:null,active:null,activeNode:ev,collisionRect:null,collisions:null,droppableRects:eh,draggableNodes:$,draggingNode:null,draggingNodeRect:null,droppableContainers:q,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),eY=q.getNodeFor(null==(t=eG.current.over)?void 0:t.id),eM=function(e){let{measure:t}=e,[o,r]=(0,Y.useState)(null),n=e2({callback:(0,Y.useCallback)(e=>{for(let{target:o}of e)if(U(o)){r(e=>{let r=t(o);return e?{...e,width:r.width,height:r.height}:r});break}},[t])}),[l,a]=Z((0,Y.useCallback)(e=>{let o=function(e){if(!e)return null;if(e.children.length>1)return e;let t=e.children[0];return U(t)?t:e}(e);null==n||n.disconnect(),o&&(null==n||n.observe(o)),r(o?t(o):null)},[t,n]));return(0,Y.useMemo)(()=>({nodeRef:l,rect:o,setRef:a}),[o,l,a])}({measure:ef.dragOverlay.measure}),eJ=null!=(o=eM.nodeRef.current)?o:ev,e$=O?null!=(r=eM.rect)?r:eN:null,ez=!!(eM.nodeRef.current&&eM.rect),eW=(b=e1(l=ez?null:eN),ew(l,b)),eU=e4(eJ?z(eJ):null),eq=(a=O?null!=eY?eY:ev:null,v=(0,Y.useRef)(a),I=Q(e=>a?e&&e!==e9&&a&&v.current&&a.parentNode===v.current.parentNode?e:eF(a):e9,[a]),(0,Y.useEffect)(()=>{v.current=a},[a]),I),eX=function(e,t){void 0===t&&(t=eT);let[o]=e,r=e4(o?z(o):null),[n,l]=(0,Y.useState)(e6);function a(){l(()=>e.length?e.map(e=>eD(e)?r:new eL(t(e),e)):e6)}let i=e2({callback:a});return _(()=>{null==i||i.disconnect(),a(),e.forEach(e=>null==i?void 0:i.observe(e))},[e]),n}(eq),e_=function(e,t){let{transform:o,...r}=t;return null!=e&&e.length?e.reduce((e,t)=>t({transform:e,...r}),o):o}(B,{transform:{x:W.x-eW.x,y:W.y-eW.y,scaleX:1,scaleY:1},activatorEvent:em,active:et,activeNodeRect:eN,containerNodeRect:eC,draggingNodeRect:e$,over:eG.current.over,overlayNodeRect:eM.rect,scrollableAncestors:eq,scrollableAncestorRects:eX,windowRect:eU}),eK=ek?en(ek,W):null,eH=function(e){let[t,o]=(0,Y.useState)(null),r=(0,Y.useRef)(e),n=(0,Y.useCallback)(e=>{let t=eE(e.target);t&&o(e=>e?(e.set(t,eV(t)),new Map(e)):null)},[]);return(0,Y.useEffect)(()=>{let t=r.current;if(e!==t){l(t);let a=e.map(e=>{let t=eE(e);return t?(t.addEventListener("scroll",n,{passive:!0}),[t,eV(t)]):null}).filter(e=>null!=e);o(a.length?new Map(a):null),r.current=e}return()=>{l(e),l(t)};function l(e){e.forEach(e=>{let t=eE(e);null==t||t.removeEventListener("scroll",n)})}},[n,e]),(0,Y.useMemo)(()=>e.length?t?Array.from(t.values()).reduce((e,t)=>en(e,t),ey):eO(e):ey,[e,t])}(eq),eQ=e5(eH),e3=e5(eH,[eN]),to=en(e_,eQ),tr=e$?ej(e$,e_):null,tn=et&&tr?N({active:et,collisionRect:tr,droppableRects:eh,droppableContainers:ed,pointerCoordinates:eK}):null,tc=function(e){if(!e||0===e.length)return null;let[t]=e;return t.id}(tn),[td,tp]=(0,Y.useState)(null),tf=(i=ez?e_:en(e_,e3),m=null!=(n=null==td?void 0:td.rect)?n:null,{...i,scaleX:m&&eN?m.width/eN.width:1,scaleY:m&&eN?m.height/eN.height:1}),th=(0,Y.useRef)(null),tb=(0,Y.useCallback)((e,t)=>{let{sensor:o,options:r}=t;if(null==er.current)return;let n=$.get(er.current);if(!n)return;let l=e.nativeEvent,a=new o({active:er.current,activeNode:n,event:l,options:r,context:eG,onAbort(e){if(!$.get(e))return;let{onDragAbort:t}=es.current,o={id:e};null==t||t(o),V({type:"onDragAbort",event:o})},onPending(e,t,o,r){if(!$.get(e))return;let{onDragPending:n}=es.current,l={id:e,constraint:t,initialCoordinates:o,offset:r};null==n||n(l),V({type:"onDragPending",event:l})},onStart(e){let t=er.current;if(null==t)return;let o=$.get(t);if(!o)return;let{onDragStart:r}=es.current,n={activatorEvent:l,active:{id:t,data:o.data,rect:K}};(0,L.unstable_batchedUpdates)(()=>{null==r||r(n),R(k.Initializing),G({type:d.DragStart,initialCoordinates:e,active:t}),V({type:"onDragStart",event:n}),ea(th.current),eu(l)})},onMove(e){G({type:d.DragMove,coordinates:e})},onEnd:i(d.DragEnd),onCancel:i(d.DragCancel)});function i(e){return async function(){let{active:t,collisions:o,over:r,scrollAdjustedTranslate:n}=eG.current,a=null;if(t&&n){let{cancelDrop:i}=es.current;a={activatorEvent:l,active:t,collisions:o,delta:n,over:r},e===d.DragEnd&&"function"==typeof i&&await Promise.resolve(i(a))&&(e=d.DragCancel)}er.current=null,(0,L.unstable_batchedUpdates)(()=>{G({type:e}),R(k.Uninitialized),tp(null),ea(null),eu(null),th.current=null;let t=e===d.DragEnd?"onDragEnd":"onDragCancel";if(a){let e=es.current[t];null==e||e(a),V({type:t,event:a})}})}}th.current=a},[$]),tg=(0,Y.useCallback)((e,t)=>(o,r)=>{let n=o.nativeEvent,l=$.get(r);null!==er.current||!l||n.dndKit||n.defaultPrevented||!0===e(o,t.options,{active:l})&&(n.dndKit={capturedBy:t.sensor},er.current=r,tb(o,t))},[$,tb]),ty=(0,Y.useMemo)(()=>T.reduce((e,t)=>{let{sensor:o}=t;return[...e,...o.activators.map(e=>({eventName:e.eventName,handler:tg(e.handler,t)}))]},[]),[T,tg]);(0,Y.useEffect)(()=>{if(!M)return;let e=T.map(e=>{let{sensor:t}=e;return null==t.setup?void 0:t.setup()});return()=>{for(let t of e)null==t||t()}},T.map(e=>{let{sensor:t}=e;return t})),_(()=>{eN&&A===k.Initializing&&R(k.Initialized)},[eN,A]),(0,Y.useEffect)(()=>{let{onDragMove:e}=es.current,{active:t,activatorEvent:o,collisions:r,over:n}=eG.current;if(!t||!o)return;let l={active:t,activatorEvent:o,collisions:r,delta:{x:to.x,y:to.y},over:n};(0,L.unstable_batchedUpdates)(()=>{null==e||e(l),V({type:"onDragMove",event:l})})},[to.x,to.y]),(0,Y.useEffect)(()=>{let{active:e,activatorEvent:t,collisions:o,droppableContainers:r,scrollAdjustedTranslate:n}=eG.current;if(!e||null==er.current||!t||!n)return;let{onDragOver:l}=es.current,a=r.get(tc),i=a&&a.rect.current?{id:a.id,rect:a.rect.current,data:a.data,disabled:a.disabled}:null,m={active:e,activatorEvent:t,collisions:o,delta:{x:n.x,y:n.y},over:i};(0,L.unstable_batchedUpdates)(()=>{tp(i),null==l||l(m),V({type:"onDragOver",event:m})})},[tc]),_(()=>{eG.current={activatorEvent:em,active:et,activeNode:ev,collisionRect:tr,collisions:tn,droppableRects:eh,draggableNodes:$,draggingNode:eJ,draggingNodeRect:e$,droppableContainers:q,over:td,scrollableAncestors:eq,scrollAdjustedTranslate:to},K.current={initial:e$,translated:tr}},[et,ev,tn,tr,$,eJ,e$,eh,q,td,eq,to]),function(e){let t,{acceleration:o,activator:r=g.Pointer,canScroll:n,draggingRect:l,enabled:a,interval:i=5,order:m=y.TreeOrder,pointerCoordinates:u,scrollableAncestors:s,scrollableAncestorRects:c,delta:d,threshold:f}=e,h=function(e){let{delta:t,disabled:o}=e,r=ee(t);return Q(e=>{if(o||!r||!e)return eZ;let n={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[p.Backward]:e.x[p.Backward]||-1===n.x,[p.Forward]:e.x[p.Forward]||1===n.x},y:{[p.Backward]:e.y[p.Backward]||-1===n.y,[p.Forward]:e.y[p.Forward]||1===n.y}}},[o,t,r])}({delta:d,disabled:!a}),[b,x]=(t=(0,Y.useRef)(null),[(0,Y.useCallback)((e,o)=>{t.current=setInterval(e,o)},[]),(0,Y.useCallback)(()=>{null!==t.current&&(clearInterval(t.current),t.current=null)},[])]),v=(0,Y.useRef)({x:0,y:0}),k=(0,Y.useRef)({x:0,y:0}),I=(0,Y.useMemo)(()=>{switch(r){case g.Pointer:return u?{top:u.y,bottom:u.y,left:u.x,right:u.x}:null;case g.DraggableRect:return l}},[r,l,u]),S=(0,Y.useRef)(null),w=(0,Y.useCallback)(()=>{let e=S.current;if(!e)return;let t=v.current.x*k.current.x,o=v.current.y*k.current.y;e.scrollBy(t,o)},[]),j=(0,Y.useMemo)(()=>m===y.TreeOrder?[...s].reverse():s,[m,s]);(0,Y.useEffect)(()=>{if(!a||!s.length||!I)return void x();for(let e of j){if((null==n?void 0:n(e))===!1)continue;let t=c[s.indexOf(e)];if(!t)continue;let{direction:r,speed:l}=function(e,t,o,r,n){let{top:l,left:a,right:i,bottom:m}=o;void 0===r&&(r=10),void 0===n&&(n=eR);let{isTop:u,isBottom:s,isLeft:c,isRight:d}=eA(e),f={x:0,y:0},h={x:0,y:0},b={height:t.height*n.y,width:t.width*n.x};return!u&&l<=t.top+b.height?(f.y=p.Backward,h.y=r*Math.abs((t.top+b.height-l)/b.height)):!s&&m>=t.bottom-b.height&&(f.y=p.Forward,h.y=r*Math.abs((t.bottom-b.height-m)/b.height)),!d&&i>=t.right-b.width?(f.x=p.Forward,h.x=r*Math.abs((t.right-b.width-i)/b.width)):!c&&a<=t.left+b.width&&(f.x=p.Backward,h.x=r*Math.abs((t.left+b.width-a)/b.width)),{direction:f,speed:h}}(e,t,I,o,f);for(let e of["x","y"])h[e][r[e]]||(l[e]=0,r[e]=0);if(l.x>0||l.y>0){x(),S.current=e,b(w,i),v.current=l,k.current=r;return}}v.current={x:0,y:0},k.current={x:0,y:0},x()},[o,w,n,x,a,i,JSON.stringify(I),JSON.stringify(h),b,s,j,c,JSON.stringify(f)])}({...eI,delta:W,draggingRect:tr,pointerCoordinates:eK,scrollableAncestors:eq,scrollableAncestorRects:eX});let tx=(0,Y.useMemo)(()=>({active:et,activeNode:ev,activeNodeRect:eN,activatorEvent:em,collisions:tn,containerNodeRect:eC,dragOverlay:eM,draggableNodes:$,droppableContainers:q,droppableRects:eh,over:td,measureDroppableContainers:eg,scrollableAncestors:eq,scrollableAncestorRects:eX,measuringConfiguration:ef,measuringScheduled:ex,windowRect:eU}),[et,ev,eN,em,tn,eC,eM,$,q,eh,td,eg,eq,eX,ef,ex,eU]),tv=(0,Y.useMemo)(()=>({activatorEvent:em,activators:ty,active:et,activeNodeRect:eN,ariaDescribedById:{draggable:ec},dispatch:G,draggableNodes:$,over:td,measureDroppableContainers:eg}),[em,ty,et,eN,G,ec,$,td,eg]);return Y.default.createElement(ep.Provider,{value:D},Y.default.createElement(tl.Provider,{value:tv},Y.default.createElement(ta.Provider,{value:tx},Y.default.createElement(ts.Provider,{value:tf},P)),Y.default.createElement(tu,{disabled:(null==w?void 0:w.restoreFocus)===!1})),Y.default.createElement(eb,{...w,hiddenTextDescribedById:ec}))}),td=(0,Y.createContext)(null),tp="button",tf={timeout:25},th={position:"fixed",touchAction:"none"},tb=e=>ea(e)?"transform 250ms ease":void 0;function tg(e,t,o){let r=e.slice();return r.splice(o<0?r.length+o:o,0,r.splice(t,1)[0]),r}function ty(e){return null!==e&&e>=0}(e,t)=>{let{as:o,activatorEvent:r,adjustScale:n,children:l,className:a,rect:i,style:m,transform:u,transition:s=tb}=e;if(!i)return null;let c=n?u:{...u,scaleX:1,scaleY:1},d={...th,width:i.width,height:i.height,top:i.top,left:i.left,transform:em.Transform.toString(c),transformOrigin:n&&r?function(e,t){let o=ei(e);if(!o)return"0 0";let r={x:(o.x-t.left)/t.width*100,y:(o.y-t.top)/t.height*100};return r.x+"% "+r.y+"%"}(r,i):void 0,transition:"function"==typeof s?s(r):s,...m};return Y.default.createElement(o,{className:a,style:d,ref:t},l)},t={styles:{active:{opacity:"0"}}};let tx=e=>{let{rects:t,activeIndex:o,overIndex:r,index:n}=e,l=tg(t,r,o),a=t[n],i=l[n];return i&&a?{x:i.left-a.left,y:i.top-a.top,scaleX:i.width/a.width,scaleY:i.height/a.height}:null},tv={scaleX:1,scaleY:1},tk=e=>{var t,o,r,n;let l,a,i,{activeIndex:m,activeNodeRect:u,index:s,rects:c,overIndex:d}=e,p=null!=(t=c[m])?t:u;if(!p)return null;if(s===m){let e=c[d];return e?{x:0,y:m<d?e.top+e.height-(p.top+p.height):e.top-p.top,...tv}:null}let f=(o=c,r=s,n=m,l=o[r],a=o[r-1],i=o[r+1],l?n<r?a?l.top-(a.top+a.height):i?i.top-(l.top+l.height):0:i?i.top-(l.top+l.height):a?l.top-(a.top+a.height):0:0);return s>m&&s<=d?{x:0,y:-p.height-f,...tv}:s<m&&s>=d?{x:0,y:p.height+f,...tv}:{x:0,y:0,...tv}},tI="Sortable",tS=Y.default.createContext({activeIndex:-1,containerId:tI,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:tx,disabled:{draggable:!1,droppable:!1}});function tw(e){let{children:t,id:o,items:r,strategy:n=tx,disabled:l=!1}=e,{active:a,dragOverlay:i,droppableRects:m,over:u,measureDroppableContainers:s}=(0,Y.useContext)(ta),c=eo(tI,o),d=null!==i.rect,p=(0,Y.useMemo)(()=>r.map(e=>"object"==typeof e&&"id"in e?e.id:e),[r]),f=null!=a,h=a?p.indexOf(a.id):-1,b=u?p.indexOf(u.id):-1,g=(0,Y.useRef)(p),y=!function(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let o=0;o<e.length;o++)if(e[o]!==t[o])return!1;return!0}(p,g.current),x=-1!==b&&-1===h||y,v="boolean"==typeof l?{draggable:l,droppable:l}:l;_(()=>{y&&f&&s(p)},[y,p,f,s]),(0,Y.useEffect)(()=>{g.current=p},[p]);let k=(0,Y.useMemo)(()=>({activeIndex:h,containerId:c,disabled:v,disableTransforms:x,items:p,overIndex:b,useDragOverlay:d,sortedRects:p.reduce((e,t,o)=>{let r=m.get(t);return r&&(e[o]=r),e},Array(p.length)),strategy:n}),[h,c,v.draggable,v.droppable,x,p,b,m,d,n]);return Y.default.createElement(tS.Provider,{value:k},t)}let tj=e=>{let{id:t,items:o,activeIndex:r,overIndex:n}=e;return tg(o,r,n).indexOf(t)},tP=e=>{let{containerId:t,isSorting:o,wasDragging:r,index:n,items:l,newIndex:a,previousItems:i,previousContainerId:m,transition:u}=e;return!!u&&!!r&&(i===l||n!==a)&&(!!o||a!==n&&t===m)},tT={duration:200,easing:"ease"},tN="transform",tF=em.Transition.toString({property:tN,duration:0,easing:"linear"}),tB={roleDescription:"sortable"};function tE({id:e,index:t,form:o}){let{attributes:r,listeners:n,setNodeRef:l,transform:a,transition:i}=function(e){var t,o,r,n;let{animateLayoutChanges:l=tP,attributes:a,disabled:i,data:m,getNewIndex:u=tj,id:s,strategy:c,resizeObserverConfig:p,transition:f=tT}=e,{items:h,containerId:b,activeIndex:g,disabled:y,disableTransforms:x,sortedRects:v,overIndex:k,useDragOverlay:I,strategy:S}=(0,Y.useContext)(tS),w=(t=i,o=y,"boolean"==typeof t?{draggable:t,droppable:!1}:{draggable:null!=(r=null==t?void 0:t.draggable)?r:o.draggable,droppable:null!=(n=null==t?void 0:t.droppable)?n:o.droppable}),j=h.indexOf(s),P=(0,Y.useMemo)(()=>({sortable:{containerId:b,index:j,items:h},...m}),[b,m,j,h]),T=(0,Y.useMemo)(()=>h.slice(h.indexOf(s)),[h,s]),{rect:N,node:F,isOver:B,setNodeRef:E}=function(e){let{data:t,disabled:o=!1,id:r,resizeObserverConfig:n}=e,l=eo("Droppable"),{active:a,dispatch:i,over:m,measureDroppableContainers:u}=(0,Y.useContext)(tl),s=(0,Y.useRef)({disabled:o}),c=(0,Y.useRef)(!1),p=(0,Y.useRef)(null),f=(0,Y.useRef)(null),{disabled:h,updateMeasurementsFor:b,timeout:g}={...tf,...n},y=H(null!=b?b:r),x=e2({callback:(0,Y.useCallback)(()=>{if(!c.current){c.current=!0;return}null!=f.current&&clearTimeout(f.current),f.current=setTimeout(()=>{u(Array.isArray(y.current)?y.current:[y.current]),f.current=null},g)},[g]),disabled:h||!a}),[v,k]=Z((0,Y.useCallback)((e,t)=>{x&&(t&&(x.unobserve(t),c.current=!1),e&&x.observe(e))},[x])),I=H(t);return(0,Y.useEffect)(()=>{x&&v.current&&(x.disconnect(),c.current=!1,x.observe(v.current))},[v,x]),(0,Y.useEffect)(()=>(i({type:d.RegisterDroppable,element:{id:r,key:l,disabled:o,node:v,rect:p,data:I}}),()=>i({type:d.UnregisterDroppable,key:l,id:r})),[r]),(0,Y.useEffect)(()=>{o!==s.current.disabled&&(i({type:d.SetDroppableDisabled,id:r,key:l,disabled:o}),s.current.disabled=o)},[r,l,o,i]),{active:a,rect:p,isOver:(null==m?void 0:m.id)===r,node:v,over:m,setNodeRef:k}}({id:s,data:P,disabled:w.droppable,resizeObserverConfig:{updateMeasurementsFor:T,...p}}),{active:C,activatorEvent:G,activeNodeRect:V,attributes:D,setNodeRef:A,listeners:R,isDragging:O,over:L,setActivatorNodeRef:M,transform:J}=function(e){let{id:t,data:o,disabled:r=!1,attributes:n}=e,l=eo("Draggable"),{activators:a,activatorEvent:i,active:m,activeNodeRect:u,ariaDescribedById:s,draggableNodes:c,over:d}=(0,Y.useContext)(tl),{role:p=tp,roleDescription:f="draggable",tabIndex:h=0}=null!=n?n:{},b=(null==m?void 0:m.id)===t,g=(0,Y.useContext)(b?ts:td),[y,x]=Z(),[v,k]=Z(),I=(0,Y.useMemo)(()=>a.reduce((e,o)=>{let{eventName:r,handler:n}=o;return e[r]=e=>{n(e,t)},e},{}),[a,t]),S=H(o);return _(()=>(c.set(t,{id:t,key:l,node:y,activatorNode:v,data:S}),()=>{let e=c.get(t);e&&e.key===l&&c.delete(t)}),[c,t]),{active:m,activatorEvent:i,activeNodeRect:u,attributes:(0,Y.useMemo)(()=>({role:p,tabIndex:h,"aria-disabled":r,"aria-pressed":!!b&&p===tp||void 0,"aria-roledescription":f,"aria-describedby":s.draggable}),[r,p,h,b,f,s.draggable]),isDragging:b,listeners:r?void 0:I,node:y,over:d,setNodeRef:x,setActivatorNodeRef:k,transform:g}}({id:s,data:P,attributes:{...tB,...a},disabled:w.draggable}),$=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return(0,Y.useMemo)(()=>e=>{t.forEach(t=>t(e))},t)}(E,A),z=!!C,W=z&&!x&&ty(g)&&ty(k),U=!I&&O,q=U&&W?J:null,X=W?null!=q?q:(null!=c?c:S)({rects:v,activeNodeRect:V,activeIndex:g,overIndex:k,index:j}):null,K=ty(g)&&ty(k)?u({id:s,items:h,activeIndex:g,overIndex:k}):j,Q=null==C?void 0:C.id,ee=(0,Y.useRef)({activeId:Q,items:h,newIndex:K,containerId:b}),et=h!==ee.current.items,er=l({active:C,containerId:b,isDragging:O,isSorting:z,id:s,index:j,items:h,newIndex:ee.current.newIndex,previousItems:ee.current.items,previousContainerId:ee.current.containerId,transition:f,wasDragging:null!=ee.current.activeId}),en=function(e){let{disabled:t,index:o,node:r,rect:n}=e,[l,a]=(0,Y.useState)(null),i=(0,Y.useRef)(o);return _(()=>{if(!t&&o!==i.current&&r.current){let e=n.current;if(e){let t=eT(r.current,{ignoreTransform:!0}),o={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(o.x||o.y)&&a(o)}}o!==i.current&&(i.current=o)},[t,o,r,n]),(0,Y.useEffect)(()=>{l&&a(null)},[l]),l}({disabled:!er,index:j,node:F,rect:N});return(0,Y.useEffect)(()=>{z&&ee.current.newIndex!==K&&(ee.current.newIndex=K),b!==ee.current.containerId&&(ee.current.containerId=b),h!==ee.current.items&&(ee.current.items=h)},[z,K,b,h]),(0,Y.useEffect)(()=>{if(Q===ee.current.activeId)return;if(null!=Q&&null==ee.current.activeId){ee.current.activeId=Q;return}let e=setTimeout(()=>{ee.current.activeId=Q},50);return()=>clearTimeout(e)},[Q]),{active:C,activeIndex:g,attributes:D,data:P,rect:N,index:j,newIndex:K,items:h,isOver:B,isSorting:z,isDragging:O,listeners:R,node:F,overIndex:k,over:L,setNodeRef:$,setActivatorNodeRef:M,setDroppableNodeRef:E,setDraggableNodeRef:A,transform:null!=en?en:X,transition:en||et&&ee.current.newIndex===j?tF:(!U||ea(G))&&f&&(z||er)?em.Transition.toString({...f,property:tN}):void 0}}({id:e});return(0,N.jsxs)(j.Group,{ref:l,mt:"xs",style:{transform:em.Transform.toString(a),transition:i},...r,children:[(0,N.jsx)(O.Center,{...n,children:(0,N.jsx)(R.DotsSixVerticalIcon,{size:18})}),(0,N.jsx)(P.TextInput,{placeholder:"John Doe",...o.getInputProps(`employees.${t}.name`)},o.key(`employees.${t}.name`)),(0,N.jsx)(P.TextInput,{placeholder:"example@mail.com",...o.getInputProps(`employees.${t}.email`)},o.key(`employees.${t}.email`))]})}h.Down,h.Right,h.Up,h.Left;let tC={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{employees:[{name:"John Doe",email:"john@mantine.dev",key:(0,D.randomId)()},{name:"Bill Love",email:"bill@mantine.dev",key:(0,D.randomId)()},{name:"Nancy Eagle",email:"nanacy@mantine.dev",key:(0,D.randomId)()},{name:"Lim Notch",email:"lim@mantine.dev",key:(0,D.randomId)()},{name:"Susan Seven",email:"susan@mantine.dev",key:(0,D.randomId)()}]}}),t=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return(0,Y.useMemo)(()=>[...t].filter(e=>null!=e),[...t])}((0,Y.useMemo)(()=>({sensor:eQ,options:{}}),[eQ,void 0])),o=e.getValues().employees.map(e=>e.key);return(0,N.jsxs)("div",{children:[(0,N.jsx)(tc,{sensors:t,collisionDetection:eI,onDragEnd:t=>{let{active:o,over:r}=t;if(r&&o.id!==r.id){let t=e.getValues().employees,n=t.findIndex(e=>e.key===o.id),l=t.findIndex(e=>e.key===r.id);e.setFieldValue("employees",tg(t,n,l))}},children:(0,N.jsx)(tw,{items:o,strategy:tk,children:o.map((t,o)=>(0,N.jsx)(tE,{id:t,index:o,form:e},t))})}),(0,N.jsx)(j.Group,{justify:"center",mt:"md",children:(0,N.jsx)(S.Button,{onClick:()=>e.insertListItem("employees",{name:"",email:"",key:(0,D.randomId)()}),children:"Add employee"})})]})},code:`
import { Group, TextInput, Button, Center } from '@mantine/core';
import { useForm } from '@mantine/form';
import { randomId } from '@mantine/hooks';
import { DotsSixVerticalIcon } from '@phosphor-icons/react';
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function SortableItem({ id, index, form }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Group ref={setNodeRef} mt="xs" style={style} {...attributes}>
      <Center {...listeners}>
        <DotsSixVerticalIcon size={18} />
      </Center>
      <TextInput
        placeholder="John Doe"
        key={form.key(\`employees.\${index}.name\`)}
        {...form.getInputProps(\`employees.\${index}.name\`)}
      />
      <TextInput
        placeholder="example@mail.com"
        key={form.key(\`employees.\${index}.email\`)}
        {...form.getInputProps(\`employees.\${index}.email\`)}
      />
    </Group>
  );
}

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      employees: [
        { name: 'John Doe', email: 'john@mantine.dev', key: randomId() },
        { name: 'Bill Love', email: 'bill@mantine.dev', key: randomId() },
        { name: 'Nancy Eagle', email: 'nanacy@mantine.dev', key: randomId() },
        { name: 'Lim Notch', email: 'lim@mantine.dev', key: randomId() },
        { name: 'Susan Seven', email: 'susan@mantine.dev', key: randomId() },
      ],
    },
  });

  const sensors = useSensors(useSensor(PointerSensor));

  const items = form.getValues().employees.map((item) => item.key);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const employees = form.getValues().employees;
      const oldIndex = employees.findIndex((e) => e.key === active.id);
      const newIndex = employees.findIndex((e) => e.key === over.id);
      form.setFieldValue(
        'employees',
        arrayMove(employees, oldIndex, newIndex)
      );
    }
  };

  return (
    <div>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map((id, index) => (
            <SortableItem key={id} id={id} index={index} form={form} />
          ))}
        </SortableContext>
      </DndContext>
      <Group justify="center" mt="md">
        <Button onClick={() => form.insertListItem('employees', { name: '', email: '', key: randomId() })}>
          Add employee
        </Button>
      </Group>
    </div>
  );
}
`,centered:!0,maxWidth:440};var tG=e.i(937389);let tV={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{password:"secret",confirmPassword:"sevret"},validate:{confirmPassword:(e,t)=>e!==t.password?"Passwords did not match":null}});return(0,N.jsx)(C.Box,{maw:340,mx:"auto",children:(0,N.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,N.jsx)(tG.PasswordInput,{label:"Password",placeholder:"Password",...e.getInputProps("password")},e.key("password")),(0,N.jsx)(tG.PasswordInput,{mt:"sm",label:"Confirm password",placeholder:"Confirm password",...e.getInputProps("confirmPassword")},e.key("confirmPassword")),(0,N.jsx)(j.Group,{justify:"flex-end",mt:"md",children:(0,N.jsx)(S.Button,{type:"submit",children:"Submit"})})]})})},code:`
import { useForm } from '@mantine/form';
import { PasswordInput, Group, Button, Box } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      password: 'secret',
      confirmPassword: 'sevret',
    },

    validate: {
      confirmPassword: (value, values) =>
        value !== values.password ? 'Passwords did not match' : null,
    },
  });

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <PasswordInput
          label="Password"
          placeholder="Password"
          key={form.key('password')}
          {...form.getInputProps('password')}
        />

        <PasswordInput
          mt="sm"
          label="Confirm password"
          placeholder="Confirm password"
          key={form.key('confirmPassword')}
          {...form.getInputProps('confirmPassword')}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
`};var tD=e.i(613529);let tA={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{name:"",age:void 0},validate:e=>({name:e.name.length<2?"Too short name":null,age:void 0===e.age?"Age is required":e.age<18?"You must be at least 18":null})});return(0,N.jsx)(C.Box,{maw:340,mx:"auto",children:(0,N.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,N.jsx)(P.TextInput,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,N.jsx)(tD.NumberInput,{mt:"sm",label:"Age",placeholder:"You age",...e.getInputProps("age")},e.key("age")),(0,N.jsx)(j.Group,{justify:"flex-end",mt:"md",children:(0,N.jsx)(S.Button,{type:"submit",children:"Submit"})})]})})},code:`
import { useForm } from '@mantine/form';
import { Box, TextInput, NumberInput, Button, Group } from '@mantine/core';

function Demo() {
  const form = useForm<{ name: string; age: number | undefined }>({
    mode: 'uncontrolled',
    initialValues: { name: '', age: undefined },
    validate: (values) => ({
      name: values.name.length < 2 ? 'Too short name' : null,
      age:
        values.age === undefined
          ? 'Age is required'
          : values.age < 18
            ? 'You must be at least 18'
            : null,
    }),
  });

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          label="Name"
          placeholder="Name"
          key={form.key('name')}
          {...form.getInputProps('name')}
        />
        <NumberInput
          mt="sm"
          label="Age"
          placeholder="You age"
          key={form.key('age')}
          {...form.getInputProps('age')}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
`},tR={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{name:"",occupation:""},onValuesChange:e=>{window.localStorage.setItem("user-form",JSON.stringify(e))}});return(0,Y.useEffect)(()=>{if(window.localStorage.getItem("user-form"))try{e.setValues(JSON.parse(window.localStorage.getItem("user-form")))}catch(e){console.log("Failed to parse stored value")}},[]),(0,N.jsxs)(C.Box,{maw:340,mx:"auto",children:[(0,N.jsx)(P.TextInput,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,N.jsx)(P.TextInput,{mt:"md",label:"Occupation",placeholder:"Occupation",...e.getInputProps("occupation")},e.key("occupation"))]})},code:`
import { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Box } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: '', occupation: '' },
    onValuesChange: (values) => {
      window.localStorage.setItem('user-form', JSON.stringify(values));
    },
  });

  useEffect(() => {
    const storedValue = window.localStorage.getItem('user-form');
    if (storedValue) {
      try {
        form.setValues(JSON.parse(window.localStorage.getItem('user-form')!));
      } catch (e) {
        console.log('Failed to parse stored value');
      }
    }
  }, []);

  return (
    <Box maw={340} mx="auto">
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="md"
        label="Occupation"
        placeholder="Occupation"
        key={form.key('occupation')}
        {...form.getInputProps('occupation')}
      />
    </Box>
  );
}
`},tO={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{terms:!1,user:{firstName:"",lastName:""}}});return(0,N.jsxs)(C.Box,{maw:340,mx:"auto",children:[(0,N.jsx)(P.TextInput,{label:"First name",placeholder:"First name",...e.getInputProps("user.firstName")},e.key("user.firstName")),(0,N.jsx)(P.TextInput,{label:"Last name",placeholder:"Last name",mt:"md",...e.getInputProps("user.lastName")},e.key("user.lastName")),(0,N.jsx)(w.Checkbox,{label:"I accept terms and conditions",mt:"sm",...e.getInputProps("terms",{type:"checkbox"})},e.key("terms"))]})},code:`
import { useForm } from '@mantine/form';
import { Box, Checkbox, TextInput } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      terms: false,
      user: {
        firstName: '',
        lastName: '',
      },
    },
  });

  return (
    <Box maw={340} mx="auto">
      <TextInput
        label="First name"
        placeholder="First name"
        key={form.key('user.firstName')}
        {...form.getInputProps('user.firstName')}
      />
      <TextInput
        label="Last name"
        placeholder="Last name"
        mt="md"
        key={form.key('user.lastName')}
        {...form.getInputProps('user.lastName')}
      />
      <Checkbox
        label="I accept terms and conditions"
        mt="sm"
        key={form.key('terms')}
        {...form.getInputProps('terms', { type: 'checkbox' })}
      />
    </Box>
  );
}
`},tY={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{name:"",email:"",age:0},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email",age:e=>e<18?"You must be at least 18 to register":null}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(console.log),children:[(0,N.jsx)(P.TextInput,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,N.jsx)(P.TextInput,{mt:"sm",label:"Email",placeholder:"Email",...e.getInputProps("email")},e.key("email")),(0,N.jsx)(tD.NumberInput,{mt:"sm",label:"Age",placeholder:"Age",min:0,max:99,...e.getInputProps("age")},e.key("age")),(0,N.jsx)(S.Button,{type:"submit",mt:"sm",children:"Submit"})]})},code:`
import { useForm } from '@mantine/form';
import { NumberInput, TextInput, Button } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: '', email: '', age: 0 },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
      age: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
    },
  });

  return (
    <form onSubmit={form.onSubmit(console.log)}>
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="sm"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <NumberInput
        mt="sm"
        label="Age"
        placeholder="Age"
        min={0}
        max={99}
        key={form.key('age')}
        {...form.getInputProps('age')}
      />
      <Button type="submit" mt="sm">
        Submit
      </Button>
    </form>
  );
}
`,centered:!0,maxWidth:340},tL={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",validateInputOnChange:!0,initialValues:{name:"",email:"",age:0},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email",age:e=>e<18?"You must be at least 18 to register":null}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(console.log),children:[(0,N.jsx)(P.TextInput,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,N.jsx)(P.TextInput,{mt:"sm",label:"Email",placeholder:"Email",...e.getInputProps("email")},e.key("email")),(0,N.jsx)(tD.NumberInput,{mt:"sm",label:"Age",placeholder:"Age",min:0,max:99,...e.getInputProps("age")},e.key("age")),(0,N.jsx)(S.Button,{type:"submit",mt:"sm",children:"Submit"})]})},code:`
import { useForm } from '@mantine/form';
import { NumberInput, TextInput, Button, } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    validateInputOnChange: true,
    initialValues: { name: '', email: '', age: 0 },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
      age: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
    },
  });

  return (
    <form onSubmit={form.onSubmit(console.log)}>
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="sm"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <NumberInput
        mt="sm"
        label="Age"
        placeholder="Age"
        min={0}
        max={99}
        key={form.key('age')}
        {...form.getInputProps('age')}
      />
      <Button type="submit" mt="sm">
        Submit
      </Button>
    </form>
  );
}
`,centered:!0,maxWidth:340};var tM=e.i(546816);let tJ={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",validateInputOnChange:["email","name",`jobs.${tM.FORM_INDEX}.title`],initialValues:{name:"",email:"",age:0,jobs:[{title:""},{title:""}]},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email",age:e=>e<18?"You must be at least 18 to register":null,jobs:{title:e=>e.length<2?"Job must have at least 2 letters":null}}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(console.log),children:[(0,N.jsx)(P.TextInput,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,N.jsx)(P.TextInput,{mt:"sm",label:"Email",placeholder:"Email",...e.getInputProps("email")},e.key("email")),(0,N.jsx)(tD.NumberInput,{mt:"sm",label:"Age",placeholder:"Age",min:0,max:99,...e.getInputProps("age")},e.key("age")),(0,N.jsx)(P.TextInput,{mt:"sm",label:"Job 1",placeholder:"Job 1",...e.getInputProps("jobs.0.title")},e.key("jobs.0.title")),(0,N.jsx)(P.TextInput,{mt:"sm",label:"Job 2",placeholder:"Job 2",...e.getInputProps("jobs.1.title")},e.key("jobs.1.title")),(0,N.jsx)(S.Button,{type:"submit",mt:"sm",children:"Submit"})]})},code:`
import { useForm, FORM_INDEX } from '@mantine/form';
import { NumberInput, TextInput, Button } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    validateInputOnChange: [
      'email',
      'name',
      // use FORM_INDEX to reference fields indices
      \`jobs.\${FORM_INDEX}.title\`,
    ],
    initialValues: { name: '', email: '', age: 0, jobs: [{ title: '' }, { title: '' }] },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
      age: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
      jobs: {
        title: (value) => (value.length < 2 ? 'Job must have at least 2 letters' : null),
      },
    },
  });

  return (
    <form onSubmit={form.onSubmit(console.log)}>
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="sm"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <NumberInput
        mt="sm"
        label="Age"
        placeholder="Age"
        min={0}
        max={99}
        key={form.key('age')}
        {...form.getInputProps('age')}
      />
      <TextInput
        mt="sm"
        label="Job 1"
        placeholder="Job 1"
        key={form.key('jobs.0.title')}
        {...form.getInputProps('jobs.0.title')}
      />
      <TextInput
        mt="sm"
        label="Job 2"
        placeholder="Job 2"
        key={form.key('jobs.1.title')}
        {...form.getInputProps('jobs.1.title')}
      />
      <Button type="submit" mt="sm">
        Submit
      </Button>
    </form>
  );
}
`,centered:!0,maxWidth:340},t$={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",clearInputErrorOnChange:!1,initialValues:{email:"",termsOfService:!1},validate:{email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email"}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,N.jsx)(P.TextInput,{withAsterisk:!0,label:"Email",placeholder:"your@email.com",...e.getInputProps("email")},e.key("email")),(0,N.jsx)(w.Checkbox,{mt:"md",label:"I agree to sell my privacy",...e.getInputProps("termsOfService",{type:"checkbox"})},e.key("termsOfService")),(0,N.jsx)(j.Group,{justify:"flex-end",mt:"md",children:(0,N.jsx)(S.Button,{type:"submit",children:"Submit"})})]})},code:`
import { TextInput, Checkbox, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    clearInputErrorOnChange: false,
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput
        withAsterisk
        label="Email"
        placeholder="your@email.com"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Checkbox
        mt="md"
        label="I agree to sell my privacy"
        key={form.key('termsOfService')}
        {...form.getInputProps('termsOfService', { type: 'checkbox' })}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`,centered:!0,maxWidth:340};var tz=e.i(200140);let tW={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{name:"",email:""},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email"}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(console.log,e=>{e.name?tz.notifications.show({message:"Please fill name field",color:"red"}):e.email&&tz.notifications.show({message:"Please provide a valid email",color:"red"})}),children:[(0,N.jsx)(P.TextInput,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,N.jsx)(P.TextInput,{mt:"sm",label:"Email",placeholder:"Email",...e.getInputProps("email")},e.key("email")),(0,N.jsx)(S.Button,{type:"submit",mt:"sm",children:"Submit"})]})},code:`
import { useForm } from '@mantine/form';
import { TextInput, Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: '', email: '' },
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const handleError = (errors: typeof form.errors) => {
    if (errors.name) {
      notifications.show({ message: 'Please fill name field', color: 'red' });
    } else if (errors.email) {
      notifications.show({ message: 'Please provide a valid email', color: 'red' });
    }
  };

  return (
    <form onSubmit={form.onSubmit(console.log, handleError)}>
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="sm"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <Button type="submit" mt="sm">
        Submit
      </Button>
    </form>
  );
}
`,centered:!0,maxWidth:340},tU={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{email:"",terms:!1}});return(0,Y.useEffect)(()=>{new Promise(e=>{setTimeout(()=>e({email:"test@email",terms:!0}),2e3)}).then(t=>{e.setValues(t),e.resetDirty(t)})},[]),(0,N.jsxs)("form",{onSubmit:e.onSubmit(console.log),children:[(0,N.jsx)(P.TextInput,{label:"Email",placeholder:"Email",...e.getInputProps("email")},e.key("email")),(0,N.jsx)(w.Checkbox,{mt:"sm",label:"I accept terms and conditions",...e.getInputProps("terms",{type:"checkbox"})},e.key("terms"))]})},code:`
import { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Checkbox } from '@mantine/core';

interface FormValues {
  email: string;
  terms: boolean;
}

function loadInitialValues(): Promise<FormValues> {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ email: 'test@email', terms: true }), 2000);
  });
}

function Demo() {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: { email: '', terms: false },
  });

  useEffect(() => {
    loadInitialValues().then((values) => {
      form.setValues(values);
      form.resetDirty(values);
    });
  }, []);

  return (
    <form onSubmit={form.onSubmit(console.log)}>
      <TextInput
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <Checkbox
        mt="sm"
        label="I accept terms and conditions"
        key={form.key('terms')}
        {...form.getInputProps('terms', { type: 'checkbox' })}
      />
    </form>
  );
}
`,centered:!0,maxWidth:340};var tq=e.i(301388),tX=e.i(702992);let t_={type:"code",component:function(){let[e,t]=(0,Y.useState)(0),o=(0,T.useForm)({mode:"uncontrolled",initialValues:{username:"",password:"",name:"",email:"",website:"",github:""},validate:t=>0===e?{username:t.username.trim().length<6?"Username must include at least 6 characters":null,password:t.password.length<6?"Password must include at least 6 characters":null}:1===e?{name:t.name.trim().length<2?"Name must include at least 2 characters":null,email:/^\S+@\S+$/.test(t.email)?null:"Invalid email"}:{}}),r=async()=>{(await o.validate()).hasErrors||t(e=>e<3?e+1:e)};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(tX.Stepper,{active:e,children:[(0,N.jsxs)(tX.Stepper.Step,{label:"First step",description:"Profile settings",children:[(0,N.jsx)(P.TextInput,{label:"Username",placeholder:"Username",...o.getInputProps("username")},o.key("username")),(0,N.jsx)(tG.PasswordInput,{mt:"md",label:"Password",placeholder:"Password",...o.getInputProps("password")},o.key("password"))]}),(0,N.jsxs)(tX.Stepper.Step,{label:"Second step",description:"Personal information",children:[(0,N.jsx)(P.TextInput,{label:"Name",placeholder:"Name",...o.getInputProps("name")},o.key("name")),(0,N.jsx)(P.TextInput,{mt:"md",label:"Email",placeholder:"Email",...o.getInputProps("email")},o.key("email"))]}),(0,N.jsxs)(tX.Stepper.Step,{label:"Final step",description:"Social media",children:[(0,N.jsx)(P.TextInput,{label:"Website",placeholder:"Website",...o.getInputProps("website")},o.key("website")),(0,N.jsx)(P.TextInput,{mt:"md",label:"GitHub",placeholder:"GitHub",...o.getInputProps("github")},o.key("github"))]}),(0,N.jsxs)(tX.Stepper.Completed,{children:["Completed! Form values:",(0,N.jsx)(tq.Code,{block:!0,mt:"xl",children:JSON.stringify(o.getValues(),null,2)})]})]}),(0,N.jsxs)(j.Group,{justify:"flex-end",mt:"xl",children:[0!==e&&(0,N.jsx)(S.Button,{variant:"default",onClick:()=>t(e=>e>0?e-1:e),children:"Back"}),3!==e&&(0,N.jsx)(S.Button,{onClick:r,children:"Next step"})]})]})},code:`
import { useState } from 'react';
import { Stepper, Button, Group, TextInput, PasswordInput, Code } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const [active, setActive] = useState(0);

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      username: '',
      password: '',
      name: '',
      email: '',
      website: '',
      github: '',
    },

    validate: (values) => {
      if (active === 0) {
        return {
          username:
            values.username.trim().length < 6
              ? 'Username must include at least 6 characters'
              : null,
          password:
            values.password.length < 6 ? 'Password must include at least 6 characters' : null,
        };
      }

      if (active === 1) {
        return {
          name: values.name.trim().length < 2 ? 'Name must include at least 2 characters' : null,
          email: /^\\S+@\\S+$/.test(values.email) ? null : 'Invalid email',
        };
      }

      return {};
    },
  });

  const nextStep = async () => {
    const result = await form.validate();
    if (!result.hasErrors) {
      setActive((current) => (current < 3 ? current + 1 : current));
    }
  };

  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active}>
        <Stepper.Step label="First step" description="Profile settings">
          <TextInput
            label="Username"
            placeholder="Username"
            key={form.key('username')}
            {...form.getInputProps('username')}
          />
          <PasswordInput
            mt="md"
            label="Password"
            placeholder="Password"
            key={form.key('password')}
            {...form.getInputProps('password')}
          />
        </Stepper.Step>

        <Stepper.Step label="Second step" description="Personal information">
          <TextInput
            label="Name"
            placeholder="Name"
            key={form.key('name')}
            {...form.getInputProps('name')}
          />
          <TextInput
            mt="md"
            label="Email"
            placeholder="Email"
            key={form.key('email')}
            {...form.getInputProps('email')}
          />
        </Stepper.Step>

        <Stepper.Step label="Final step" description="Social media">
          <TextInput
            label="Website"
            placeholder="Website"
            key={form.key('website')}
            {...form.getInputProps('website')}
          />
          <TextInput
            mt="md"
            label="GitHub"
            placeholder="GitHub"
            key={form.key('github')}
            {...form.getInputProps('github')}
          />
        </Stepper.Step>
        <Stepper.Completed>
          Completed! Form values:
          <Code block mt="xl">
            {JSON.stringify(form.getValues(), null, 2)}
          </Code>
        </Stepper.Completed>
      </Stepper>

      <Group justify="flex-end" mt="xl">
        {active !== 0 && (
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
        )}
        {active !== 3 && <Button onClick={nextStep}>Next step</Button>}
      </Group>
    </>
  );
}
`},tK={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{name:"",email:""}});return(0,N.jsxs)("div",{children:[(0,N.jsx)(P.TextInput,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,N.jsx)(P.TextInput,{mt:"md",label:"Email",placeholder:"Email",...e.getInputProps("email")},e.key("email")),(0,N.jsxs)(j.Group,{justify:"center",mt:"xl",children:[(0,N.jsx)(S.Button,{onClick:()=>e.setFieldValue("name",(0,D.randomId)()),children:"Random name"}),(0,N.jsx)(S.Button,{onClick:()=>e.setFieldValue("email",`${(0,D.randomId)()}@test.com`),children:"Random email"})]})]})},code:`
import { useForm } from '@mantine/form';
import { TextInput, Button, Group } from '@mantine/core';
import { randomId } from '@mantine/hooks';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
    },
  });

  return (
    <div>
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="md"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Group justify="center" mt="xl">
        <Button onClick={() => form.setFieldValue('name', randomId())}>Random name</Button>
        <Button onClick={() => form.setFieldValue('email', \`\${randomId()}@test.com\`)}>
          Random email
        </Button>
      </Group>
    </div>
  );
}
`,centered:!0,maxWidth:340},tH={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{name:"",email:""}});return(0,N.jsxs)("div",{children:[(0,N.jsx)(P.TextInput,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,N.jsx)(P.TextInput,{mt:"md",label:"Email",placeholder:"Email",...e.getInputProps("email")},e.key("email")),(0,N.jsx)(j.Group,{justify:"center",mt:"xl",children:(0,N.jsx)(S.Button,{onClick:()=>e.setValues({name:(0,D.randomId)(),email:`${(0,D.randomId)()}@test.com`}),children:"Set random values"})})]})},code:`
import { useForm } from '@mantine/form';
import { TextInput, Button, Group } from '@mantine/core';
import { randomId } from '@mantine/hooks';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
    },
  });

  return (
    <div>
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="md"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Group justify="center" mt="xl">
        <Button
          onClick={() =>
            form.setValues({
              name: randomId(),
              email: \`\${randomId()}@test.com\`,
            })
          }
        >
          Set random values
        </Button>
      </Group>
    </div>
  );
}
`,centered:!0,maxWidth:340},tQ={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{name:"",email:""}});return(0,N.jsxs)("div",{children:[(0,N.jsx)(P.TextInput,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,N.jsx)(P.TextInput,{mt:"md",label:"Email",placeholder:"Email",...e.getInputProps("email")},e.key("email")),(0,N.jsx)(j.Group,{justify:"center",mt:"xl",children:(0,N.jsx)(S.Button,{onClick:()=>e.reset(),children:"Reset to initial values"})})]})},code:`
import { useForm } from '@mantine/form';
import { TextInput, Button, Group } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
    },
  });

  return (
    <div>
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="md"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Group justify="center" mt="xl">
        <Button onClick={() => form.reset()}>Reset to initial values</Button>
      </Group>
    </div>
  );
}
`,centered:!0,maxWidth:340},tZ={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{text:"initial value"}});return(0,N.jsxs)("div",{children:[(0,Y.createElement)(P.TextInput,{...e.getInputProps("text"),key:e.key("text"),label:"Touched/dirty demo",placeholder:"Touched/dirty demo"}),(0,N.jsx)(S.Button,{mt:"md",onClick:()=>console.log({touched:e.isTouched("text"),dirty:e.isDirty("text")}),children:"Log status to console"})]})},code:`
import { useForm } from '@mantine/form';
import { TextInput, Button } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { text: 'initial value' },
  });

  return (
    <div>
      <TextInput
        {...form.getInputProps('text')}
        key={form.key('text')}
        label="Touched/dirty demo"
        placeholder="Touched/dirty demo"
      />

      <Button
        onClick={() =>
          console.log({ touched: form.isTouched('text'), dirty: form.isDirty('text') })
        }
      >
        Log status to console
      </Button>
    </div>
  );
}
`,centered:!0,maxWidth:340},t0={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",validateInputOnBlur:!0,initialValues:{name:"",email:"",age:0},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email",age:e=>e<18?"You must be at least 18 to register":null}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(console.log),children:[(0,N.jsx)(P.TextInput,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,N.jsx)(P.TextInput,{mt:"sm",label:"Email",placeholder:"Email",...e.getInputProps("email")},e.key("email")),(0,N.jsx)(tD.NumberInput,{mt:"sm",label:"Age",placeholder:"Age",min:0,max:99,...e.getInputProps("age")},e.key("age")),(0,N.jsx)(S.Button,{type:"submit",mt:"sm",children:"Submit"})]})},code:`
import { useForm } from '@mantine/form';
import { NumberInput, TextInput, Button } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    validateInputOnBlur: true,
    initialValues: { name: '', email: '', age: 0 },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
      age: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
    },
  });

  return (
    <form onSubmit={form.onSubmit(console.log)}>
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="sm"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <NumberInput
        mt="sm"
        label="Age"
        placeholder="Age"
        min={0}
        max={99}
        key={form.key('age')}
        {...form.getInputProps('age')}
      />
      <Button type="submit" mt="sm">
        Submit
      </Button>
    </form>
  );
}
`,centered:!0,maxWidth:340},t1={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",validateInputOnBlur:["email","name",`jobs.${tM.FORM_INDEX}.title`],initialValues:{name:"",email:"",age:0,jobs:[{title:""},{title:""}]},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email",age:e=>e<18?"You must be at least 18 to register":null,jobs:{title:e=>e.length<2?"Job must have at least 2 letters":null}}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(console.log),children:[(0,N.jsx)(P.TextInput,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,N.jsx)(P.TextInput,{mt:"sm",label:"Email",placeholder:"Email",...e.getInputProps("email")},e.key("email")),(0,N.jsx)(tD.NumberInput,{mt:"sm",label:"Age",placeholder:"Age",min:0,max:99,...e.getInputProps("age")},e.key("age")),(0,N.jsx)(P.TextInput,{mt:"sm",label:"Job 1",placeholder:"Job 1",...e.getInputProps("jobs.0.title")},e.key("jobs.0.title")),(0,N.jsx)(P.TextInput,{mt:"sm",label:"Job 2",placeholder:"Job 2",...e.getInputProps("jobs.1.title")},e.key("jobs.1.title")),(0,N.jsx)(S.Button,{type:"submit",mt:"sm",children:"Submit"})]})},code:`
import { useForm, FORM_INDEX } from '@mantine/form';
import { NumberInput, TextInput, Button } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    validateInputOnBlur: [
      'email',
      'name',
      // use FORM_INDEX to reference fields indices
      \`jobs.\${FORM_INDEX}.title\`,
    ],
    initialValues: { name: '', email: '', age: 0, jobs: [{ title: '' }, { title: '' }] },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
      age: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
      jobs: {
        title: (value) => (value.length < 2 ? 'Job must have at least 2 letters' : null),
      },
    },
  });

  return (
    <form onSubmit={form.onSubmit(console.log)}>
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="sm"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <NumberInput
        mt="sm"
        label="Age"
        placeholder="Age"
        min={0}
        max={99}
        key={form.key('age')}
        {...form.getInputProps('age')}
      />
      <TextInput
        mt="sm"
        label="Job 1"
        placeholder="Job 1"
        key={form.key('jobs.0.title')}
        {...form.getInputProps('jobs.0.title')}
      />
      <TextInput
        mt="sm"
        label="Job 2"
        placeholder="Job 2"
        key={form.key('jobs.1.title')}
        {...form.getInputProps('jobs.1.title')}
      />
      <Button type="submit" mt="sm">
        Submit
      </Button>
    </form>
  );
}
`,centered:!0,maxWidth:340},t2={type:"code",component:function(){let[e,t]=(0,Y.useState)(""),o=(0,T.useForm)({mode:"uncontrolled",initialValues:{firstName:"Jane",lastName:"Doe",age:"33"},transformValues:e=>({fullName:`${e.firstName} ${e.lastName}`,age:Number(e.age)||0})});return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)("form",{onSubmit:o.onSubmit(e=>t(JSON.stringify(e,null,2))),children:[(0,N.jsx)(P.TextInput,{label:"First name",placeholder:"First name",...o.getInputProps("firstName")},o.key("firstName")),(0,N.jsx)(P.TextInput,{label:"Last name",placeholder:"Last name",mt:"md",...o.getInputProps("lastName")},o.key("lastName")),(0,N.jsx)(P.TextInput,{type:"number",label:"Age",placeholder:"Age",mt:"md",...o.getInputProps("age")},o.key("age")),(0,N.jsx)(S.Button,{type:"submit",mt:"md",children:"Submit"})]}),e&&(0,N.jsx)(tq.Code,{block:!0,mt:"md",children:e})]})},code:`
import { useState } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, Code } from '@mantine/core';

function Demo() {
  const [submittedValues, setSubmittedValues] = useState('');

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      firstName: 'Jane',
      lastName: 'Doe',
      age: '33',
    },

    transformValues: (values) => ({
      fullName: \`\${values.firstName} \${values.lastName}\`,
      age: Number(values.age) || 0,
    }),
  });

  return (
    <>
      <form
        onSubmit={form.onSubmit((values) => setSubmittedValues(JSON.stringify(values, null, 2)))}
      >
        <TextInput
          label="First name"
          placeholder="First name"
          key={form.key('firstName')}
          {...form.getInputProps('firstName')}
        />
        <TextInput
          label="Last name"
          placeholder="Last name"
          mt="md"
          key={form.key('lastName')}
          {...form.getInputProps('lastName')}
        />
        <TextInput
          type="number"
          label="Age"
          placeholder="Age"
          mt="md"
          key={form.key('age')}
          {...form.getInputProps('age')}
        />
        <Button type="submit" mt="md">
          Submit
        </Button>
      </form>

      {submittedValues && (
        <Code block mt="md">
          {submittedValues}
        </Code>
      )}
    </>
  );
}
`,centered:!0,maxWidth:340};var t3=e.i(856171),t8=e.i(638895),t9=e.i(382855);function t5({min:e,max:t},o){let r=o||!0;return o=>{if("number"!=typeof o)return r;let n=!0;return"number"==typeof e&&o<e&&(n=!1),"number"==typeof t&&o>t&&(n=!1),n?null:r}}var t4=e.i(387703);function t6(e,t){let o=t||!0;return t=>e.includes(t)?null:o}function t7(e,t){let o,r={};null!=e&&"object"==typeof e&&!Array.isArray(e)&&("protocols"in e||"allowLocalhost"in e)?(r=e,o=t||!0):o=e||!0;let n=r.protocols??["http","https"],l=r.allowLocalhost??!1;return e=>{if("string"!=typeof e)return o;try{let t=new URL(e),r=t.protocol.replace(":","");if(!n.includes(r)||!l&&"localhost"===t.hostname)return o;return null}catch{return o}}}var oe=e.i(717177);let ot={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{name:"",job:"",email:"",favoriteColor:"",age:18,website:"",role:""},validate:{name:(0,t8.hasLength)({min:2,max:10},"Name must be 2-10 characters long"),job:(0,t4.isNotEmpty)("Enter your current job"),email:(0,t9.isEmail)("Invalid email"),favoriteColor:(0,oe.matches)(/^#([0-9a-f]{3}){1,2}$/,"Enter a valid hex color"),age:t5({min:18,max:99},"You must be 18-99 years old to register"),website:t7("Invalid URL"),role:t6(["developer","designer","manager"],"Pick a valid role")}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(()=>{}),children:[(0,N.jsx)(P.TextInput,{label:"Name",placeholder:"Name",withAsterisk:!0,...e.getInputProps("name")},e.key("name")),(0,N.jsx)(P.TextInput,{label:"Your job",placeholder:"Your job",withAsterisk:!0,mt:"md",...e.getInputProps("job")},e.key("job")),(0,N.jsx)(P.TextInput,{label:"Your email",placeholder:"Your email",withAsterisk:!0,mt:"md",...e.getInputProps("email")},e.key("email")),(0,N.jsx)(P.TextInput,{label:"Your favorite color",placeholder:"Your favorite color",withAsterisk:!0,mt:"md",...e.getInputProps("favoriteColor")},e.key("favoriteColor")),(0,N.jsx)(tD.NumberInput,{label:"Your age",placeholder:"Your age",withAsterisk:!0,mt:"md",...e.getInputProps("age")},e.key("age")),(0,N.jsx)(P.TextInput,{label:"Your website",placeholder:"https://example.com",withAsterisk:!0,mt:"md",...e.getInputProps("website")},e.key("website")),(0,N.jsx)(t3.NativeSelect,{label:"Your role",data:["","developer","designer","manager"],withAsterisk:!0,mt:"md",...e.getInputProps("role")},e.key("role")),(0,N.jsx)(j.Group,{justify:"flex-end",mt:"md",children:(0,N.jsx)(S.Button,{type:"submit",children:"Submit"})})]})},code:`
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches, isUrl, isOneOf } from '@mantine/form';
import { Button, Group, TextInput, NumberInput, NativeSelect } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      job: '',
      email: '',
      favoriteColor: '',
      age: 18,
      website: '',
      role: '',
    },

    validate: {
      name: hasLength({ min: 2, max: 10 }, 'Name must be 2-10 characters long'),
      job: isNotEmpty('Enter your current job'),
      email: isEmail('Invalid email'),
      favoriteColor: matches(/^#([0-9a-f]{3}){1,2}$/, 'Enter a valid hex color'),
      age: isInRange({ min: 18, max: 99 }, 'You must be 18-99 years old to register'),
      website: isUrl('Invalid URL'),
      role: isOneOf(['developer', 'designer', 'manager'], 'Pick a valid role'),
    },
  });

  return (
    <form onSubmit={form.onSubmit(() => {})}>
      <TextInput
        label="Name"
        placeholder="Name"
        withAsterisk
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        label="Your job"
        placeholder="Your job"
        withAsterisk
        mt="md"
        key={form.key('job')}
        {...form.getInputProps('job')}
      />
      <TextInput
        label="Your email"
        placeholder="Your email"
        withAsterisk
        mt="md"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <TextInput
        label="Your favorite color"
        placeholder="Your favorite color"
        withAsterisk
        mt="md"
        key={form.key('favoriteColor')}
        {...form.getInputProps('favoriteColor')}
      />
      <NumberInput
        label="Your age"
        placeholder="Your age"
        withAsterisk
        mt="md"
        key={form.key('age')}
        {...form.getInputProps('age')}
      />
      <TextInput
        label="Your website"
        placeholder="https://example.com"
        withAsterisk
        mt="md"
        key={form.key('website')}
        {...form.getInputProps('website')}
      />
      <NativeSelect
        label="Your role"
        data={['', 'developer', 'designer', 'manager']}
        withAsterisk
        mt="md"
        key={form.key('role')}
        {...form.getInputProps('role')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`,centered:!0,maxWidth:340},oo={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{name:"",job:"",email:"",favoriteColor:"",age:18,website:"",role:""},validate:{name:(0,t8.hasLength)({min:2,max:10}),job:(0,t4.isNotEmpty)(),email:(0,t9.isEmail)(),favoriteColor:(0,oe.matches)(/^#([0-9a-f]{3}){1,2}$/),age:t5({min:18,max:99}),website:t7(),role:t6(["developer","designer","manager"])}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(()=>{}),children:[(0,N.jsx)(P.TextInput,{label:"Name",placeholder:"Name",withAsterisk:!0,...e.getInputProps("name")},e.key("name")),(0,N.jsx)(P.TextInput,{label:"Your job",placeholder:"Your job",withAsterisk:!0,mt:"md",...e.getInputProps("job")},e.key("job")),(0,N.jsx)(P.TextInput,{label:"Your email",placeholder:"Your email",withAsterisk:!0,mt:"md",...e.getInputProps("email")},e.key("email")),(0,N.jsx)(P.TextInput,{label:"Your favorite color",placeholder:"Your favorite color",withAsterisk:!0,mt:"md",...e.getInputProps("favoriteColor")},e.key("favoriteColor")),(0,N.jsx)(tD.NumberInput,{label:"Your age",placeholder:"Your age",withAsterisk:!0,mt:"md",...e.getInputProps("age")},e.key("age")),(0,N.jsx)(P.TextInput,{label:"Your website",placeholder:"https://example.com",withAsterisk:!0,mt:"md",...e.getInputProps("website")},e.key("website")),(0,N.jsx)(t3.NativeSelect,{label:"Your role",data:["","developer","designer","manager"],withAsterisk:!0,mt:"md",...e.getInputProps("role")},e.key("role")),(0,N.jsx)(j.Group,{justify:"flex-end",mt:"md",children:(0,N.jsx)(S.Button,{type:"submit",children:"Submit"})})]})},code:`
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches, isUrl, isOneOf } from '@mantine/form';
import { Button, Group, TextInput, NumberInput, NativeSelect } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      job: '',
      email: '',
      favoriteColor: '',
      age: 18,
      website: '',
      role: '',
    },

    validate: {
      name: hasLength({ min: 2, max: 10 }),
      job: isNotEmpty(),
      email: isEmail(),
      favoriteColor: matches(/^#([0-9a-f]{3}){1,2}$/),
      age: isInRange({ min: 18, max: 99 }),
      website: isUrl(),
      role: isOneOf(['developer', 'designer', 'manager']),
    },
  });

  return (
    <form onSubmit={form.onSubmit(() => {})}>
      <TextInput
        label="Name"
        placeholder="Name"
        withAsterisk
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        label="Your job"
        placeholder="Your job"
        withAsterisk
        mt="md"
        key={form.key('job')}
        {...form.getInputProps('job')}
      />
      <TextInput
        label="Your email"
        placeholder="Your email"
        withAsterisk
        mt="md"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <TextInput
        label="Your favorite color"
        placeholder="Your favorite color"
        withAsterisk
        mt="md"
        key={form.key('favoriteColor')}
        {...form.getInputProps('favoriteColor')}
      />
      <NumberInput
        label="Your age"
        placeholder="Your age"
        withAsterisk
        mt="md"
        key={form.key('age')}
        {...form.getInputProps('age')}
      />
      <TextInput
        label="Your website"
        placeholder="https://example.com"
        withAsterisk
        mt="md"
        key={form.key('website')}
        {...form.getInputProps('website')}
      />
      <NativeSelect
        label="Your role"
        data={['', 'developer', 'designer', 'manager']}
        withAsterisk
        mt="md"
        key={form.key('role')}
        {...form.getInputProps('role')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`,centered:!0,maxWidth:340},or={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{name:"",age:0},validate:{name:(0,t4.isNotEmpty)("Name is required"),age:t5({min:18},"You must be at least 18 to register")}});return(0,N.jsxs)(N.Fragment,{children:[(0,Y.createElement)(P.TextInput,{...e.getInputProps("name"),key:e.key("name"),label:"Name",placeholder:"Name"}),(0,Y.createElement)(tD.NumberInput,{...e.getInputProps("age"),key:e.key("age"),label:"Age",placeholder:"Age",mt:"md"}),(0,N.jsx)(S.Button,{onClick:()=>new Promise(e=>{setTimeout(()=>{e({name:"John Doe",age:25})},1e3)}).then(t=>e.initialize(t)),mt:"md",children:"Initialize form"})]})},code:`
import { Button, NumberInput, TextInput } from '@mantine/core';
import { isInRange, isNotEmpty, useForm } from '@mantine/form';

interface FormValues {
  name: string;
  age: number | string;
}

function apiRequest(): Promise<FormValues> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: 'John Doe', age: 25 });
    }, 1000);
  });
}

function Demo() {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: { name: '', age: 0 },
    validate: {
      name: isNotEmpty('Name is required'),
      age: isInRange({ min: 18 }, 'You must be at least 18 to register'),
    },
  });

  return (
    <>
      <TextInput
        {...form.getInputProps('name')}
        key={form.key('name')}
        label="Name"
        placeholder="Name"
      />
      <NumberInput
        {...form.getInputProps('age')}
        key={form.key('age')}
        label="Age"
        placeholder="Age"
        mt="md"
      />
      <Button onClick={() => apiRequest().then((values) => form.initialize(values))} mt="md">
        Initialize form
      </Button>
    </>
  );
}
`,centered:!0,maxWidth:340},on={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{name:"",age:""},enhanceGetInputProps:e=>({disabled:"name"===e.field})});return(0,N.jsxs)(N.Fragment,{children:[(0,Y.createElement)(P.TextInput,{...e.getInputProps("name"),key:e.key("name"),label:"Name",placeholder:"Name"}),(0,Y.createElement)(tD.NumberInput,{...e.getInputProps("age"),key:e.key("age"),label:"Age",placeholder:"Age",mt:"md"})]})},code:`
import { NumberInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

interface FormValues {
  name: string;
  age: number | string;
}

function Demo() {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: { name: '', age: '' },
    enhanceGetInputProps: (payload) => ({
      disabled: payload.field === 'name',
    }),
  });

  return (
    <>
      <TextInput
        {...form.getInputProps('name')}
        key={form.key('name')}
        label="Name"
        placeholder="Name"
      />
      <NumberInput
        {...form.getInputProps('age')}
        key={form.key('age')}
        label="Age"
        placeholder="Age"
        mt="md"
      />
    </>
  );
}
`,centered:!0,maxWidth:340},ol={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{name:"",age:""},enhanceGetInputProps:e=>"name"===e.options.fieldType?{label:"Your name",placeholder:"Your name",withAsterisk:!0,description:"Your personal information is stored securely. (Just kidding!)"}:{}});return(0,N.jsxs)(N.Fragment,{children:[(0,Y.createElement)(P.TextInput,{...e.getInputProps("name",{fieldType:"name"}),key:e.key("name")}),(0,Y.createElement)(tD.NumberInput,{...e.getInputProps("age"),key:e.key("age"),label:"Age",placeholder:"Age",mt:"md"})]})},code:`
import { NumberInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

interface FormValues {
  name: string;
  age: number | string;
}

function Demo() {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: { name: '', age: '' },
    enhanceGetInputProps: (payload) => {
      if (payload.options.fieldType === 'name') {
        return {
          label: 'Your name',
          placeholder: 'Your name',
          withAsterisk: true,
          description: 'Your personal information is stored securely. (Just kidding!)',
        };
      }

      return {};
    },
  });

  return (
    <>
      <TextInput {...form.getInputProps('name', { fieldType: 'name' })} key={form.key('name')} />
      <NumberInput
        {...form.getInputProps('age')}
        key={form.key('age')}
        label="Age"
        placeholder="Age"
        mt="md"
      />
    </>
  );
}
`,centered:!0,maxWidth:340},oa={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{name:"",age:""},enhanceGetInputProps:e=>e.form.initialized?{}:{disabled:!0}});return(0,N.jsxs)(N.Fragment,{children:[(0,Y.createElement)(P.TextInput,{...e.getInputProps("name"),key:e.key("name"),label:"Your name",placeholder:"Your name"}),(0,Y.createElement)(tD.NumberInput,{...e.getInputProps("age"),key:e.key("age"),label:"Age",placeholder:"Age",mt:"md"}),(0,N.jsx)(S.Button,{onClick:()=>e.initialize({name:"John",age:20}),mt:"md",children:"Initialize form"})]})},code:`
import { NumberInput, TextInput, Button } from '@mantine/core';
import { useForm } from '@mantine/form';

interface FormValues {
  name: string;
  age: number | string;
}

function Demo() {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: { name: '', age: '' },
    enhanceGetInputProps: (payload) => {
      if (!payload.form.initialized) {
        return { disabled: true };
      }

      return {};
    },
  });

  return (
    <>
      <TextInput
        {...form.getInputProps('name')}
        key={form.key('name')}
        label="Your name"
        placeholder="Your name"
      />
      <NumberInput
        {...form.getInputProps('age')}
        key={form.key('age')}
        label="Age"
        placeholder="Age"
        mt="md"
      />
      <Button onClick={() => form.initialize({ name: 'John', age: 20 })} mt="md">
        Initialize form
      </Button>
    </>
  );
}
`,centered:!0,maxWidth:340},oi={type:"code",component:function(){let e=(0,T.useForm)({mode:"controlled",initialValues:{name:"",email:""},validate:{name:(0,t8.hasLength)({min:3},"Must be at least 3 characters"),email:(0,t9.isEmail)("Invalid email")}}),[t,o]=(0,Y.useState)(null);return(0,N.jsxs)("form",{onSubmit:e.onSubmit(o),children:[(0,N.jsx)(P.TextInput,{...e.getInputProps("name"),label:"Name",placeholder:"Name"}),(0,N.jsx)(P.TextInput,{...e.getInputProps("email"),mt:"md",label:"Email",placeholder:"Email"}),(0,N.jsx)(S.Button,{type:"submit",mt:"md",children:"Submit"}),(0,N.jsx)(V.Text,{mt:"md",children:"Form values:"}),(0,N.jsx)(tq.Code,{block:!0,children:JSON.stringify(e.values,null,2)}),(0,N.jsx)(V.Text,{mt:"md",children:"Submitted values:"}),(0,N.jsx)(tq.Code,{block:!0,children:t?JSON.stringify(t,null,2):"–"})]})},code:`
import { useState } from 'react';
import { Button, Code, Text, TextInput } from '@mantine/core';
import { hasLength, isEmail, useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'controlled',
    initialValues: { name: '', email: '' },
    validate: {
      name: hasLength({ min: 3 }, 'Must be at least 3 characters'),
      email: isEmail('Invalid email'),
    },
  });

  const [submittedValues, setSubmittedValues] = useState<typeof form.values | null>(null);

  return (
    <form onSubmit={form.onSubmit(setSubmittedValues)}>
      <TextInput {...form.getInputProps('name')} label="Name" placeholder="Name" />
      <TextInput {...form.getInputProps('email')} mt="md" label="Email" placeholder="Email" />
      <Button type="submit" mt="md">
        Submit
      </Button>

      <Text mt="md">Form values:</Text>
      <Code block>{JSON.stringify(form.values, null, 2)}</Code>

      <Text mt="md">Submitted values:</Text>
      <Code block>{submittedValues ? JSON.stringify(submittedValues, null, 2) : '–'}</Code>
    </form>
  );
}
`,maxWidth:500,centered:!0,defaultExpanded:!1},om={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{name:"",email:""},validate:{name:(0,t8.hasLength)({min:3},"Must be at least 3 characters"),email:(0,t9.isEmail)("Invalid email")}}),[t,o]=(0,Y.useState)(null);return(0,N.jsxs)("form",{onSubmit:e.onSubmit(o),children:[(0,Y.createElement)(P.TextInput,{...e.getInputProps("name"),key:e.key("name"),label:"Name",placeholder:"Name"}),(0,Y.createElement)(P.TextInput,{...e.getInputProps("email"),key:e.key("email"),mt:"md",label:"Email",placeholder:"Email"}),(0,N.jsx)(S.Button,{type:"submit",mt:"md",children:"Submit"}),(0,N.jsx)(V.Text,{mt:"md",children:"Form values:"}),(0,N.jsx)(tq.Code,{block:!0,children:JSON.stringify(e.values,null,2)}),(0,N.jsx)(V.Text,{mt:"md",children:"Submitted values:"}),(0,N.jsx)(tq.Code,{block:!0,children:t?JSON.stringify(t,null,2):"–"})]})},code:`
import { useState } from 'react';
import { Button, Code, Text, TextInput } from '@mantine/core';
import { hasLength, isEmail, useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: '', email: '' },
    validate: {
      name: hasLength({ min: 3 }, 'Must be at least 3 characters'),
      email: isEmail('Invalid email'),
    },
  });

  const [submittedValues, setSubmittedValues] = useState<typeof form.values | null>(null);

  return (
    <form onSubmit={form.onSubmit(setSubmittedValues)}>
      <TextInput
        {...form.getInputProps('name')}
        key={form.key('name')}
        label="Name"
        placeholder="Name"
      />
      <TextInput
        {...form.getInputProps('email')}
        key={form.key('email')}
        mt="md"
        label="Email"
        placeholder="Email"
      />
      <Button type="submit" mt="md">
        Submit
      </Button>

      <Text mt="md">Form values:</Text>
      <Code block>{JSON.stringify(form.values, null, 2)}</Code>

      <Text mt="md">Submitted values:</Text>
      <Code block>{submittedValues ? JSON.stringify(submittedValues, null, 2) : '–'}</Code>
    </form>
  );
}
`,maxWidth:500,centered:!0,defaultExpanded:!1},ou={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{name:"",email:""},onValuesChange:e=>{console.log(e)}});return(0,N.jsxs)("div",{children:[(0,N.jsx)(P.TextInput,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,N.jsx)(P.TextInput,{mt:"md",label:"Email",placeholder:"Email",...e.getInputProps("email")},e.key("email"))]})},code:`
import { TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
    },
    onValuesChange: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="md"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
    </div>
  );
}
`,centered:!0,maxWidth:340},os={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{name:"",email:""}});return e.watch("name",({previousValue:e,value:t,touched:o,dirty:r})=>{console.log({previousValue:e,value:t,touched:o,dirty:r})}),(0,N.jsxs)("div",{children:[(0,N.jsx)(P.TextInput,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,N.jsx)(P.TextInput,{mt:"md",label:"Email",placeholder:"Email",...e.getInputProps("email")},e.key("email"))]})},code:`
import { TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
    },
  });

  form.watch('name', ({ previousValue, value, touched, dirty }) => {
    console.log({ previousValue, value, touched, dirty });
  });

  return (
    <div>
      <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
      <TextInput mt="md" label="Email" placeholder="Email" {...form.getInputProps('email')} />
    </div>
  );
}
`,centered:!0,maxWidth:340};var oc=e.i(671640);let od={type:"code",component:function(){let[e,t]=(0,Y.useState)(0),o=(0,T.useForm)({mode:"uncontrolled",initialValues:{products:[{name:"Apple",price:2,quantity:3,key:(0,D.randomId)()},{name:"Orange",price:1,quantity:5,key:(0,D.randomId)()}]}});return o.watch("products",({value:e})=>{t(e.reduce((e,t)=>e+t.price*t.quantity,0))}),(0,N.jsxs)(oc.Stack,{children:[(0,N.jsxs)(V.Text,{fw:700,children:["Total: $",e]}),o.getValues().products.map((e,t)=>(0,N.jsxs)(j.Group,{align:"flex-end",children:[(0,N.jsx)(P.TextInput,{label:"Name",style:{flex:1},...o.getInputProps(`products.${t}.name`)},o.key(`products.${t}.name`)),(0,N.jsx)(tD.NumberInput,{label:"Price",style:{width:80},...o.getInputProps(`products.${t}.price`)},o.key(`products.${t}.price`)),(0,N.jsx)(tD.NumberInput,{label:"Qty",style:{width:80},...o.getInputProps(`products.${t}.quantity`)},o.key(`products.${t}.quantity`)),(0,N.jsx)(S.Button,{color:"red",onClick:()=>o.removeListItem("products",t),children:"Remove"})]},e.key)),(0,N.jsx)(j.Group,{children:(0,N.jsx)(S.Button,{onClick:()=>o.insertListItem("products",{name:"",price:0,quantity:1,key:(0,D.randomId)()}),children:"Add product"})}),(0,N.jsx)(tq.Code,{block:!0,children:JSON.stringify(o.getValues(),null,2)})]})},code:`
import { useState } from 'react';
import { Button, Code, Group, NumberInput, Stack, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { randomId } from '@mantine/hooks';

function Demo() {
  const [total, setTotal] = useState(0);

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      products: [
        { name: 'Apple', price: 2, quantity: 3, key: randomId() },
        { name: 'Orange', price: 1, quantity: 5, key: randomId() },
      ],
    },
  });

  form.watch('products', ({ value }) => {
    setTotal(value.reduce((acc, item) => acc + item.price * item.quantity, 0));
  });

  return (
    <Stack>
      <Text fw={700}>Total: \${total}</Text>
      {form.getValues().products.map((item, index) => (
        <Group key={item.key} align="flex-end">
          <TextInput
            label="Name"
            style={{ flex: 1 }}
            key={form.key(\`products.\${index}.name\`)}
            {...form.getInputProps(\`products.\${index}.name\`)}
          />
          <NumberInput
            label="Price"
            style={{ width: 80 }}
            key={form.key(\`products.\${index}.price\`)}
            {...form.getInputProps(\`products.\${index}.price\`)}
          />
          <NumberInput
            label="Qty"
            style={{ width: 80 }}
            key={form.key(\`products.\${index}.quantity\`)}
            {...form.getInputProps(\`products.\${index}.quantity\`)}
          />
          <Button
            color="red"
            onClick={() => form.removeListItem('products', index)}
          >
            Remove
          </Button>
        </Group>
      ))}
      <Group>
        <Button
          onClick={() =>
            form.insertListItem('products', {
              name: '',
              price: 0,
              quantity: 1,
              key: randomId(),
            })
          }
        >
          Add product
        </Button>
      </Group>
      <Code block>{JSON.stringify(form.getValues(), null, 2)}</Code>
    </Stack>
  );
}
`,centered:!0,maxWidth:600},op={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",name:"register-form",initialValues:{name:"",email:""},validate:{name:(0,t4.isNotEmpty)("Name is required"),email:(0,t9.isEmail)("Invalid email")}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e),t=>{let o=Object.keys(t)[0];e.getInputNode(o)?.focus()}),children:[(0,N.jsx)(P.TextInput,{withAsterisk:!0,label:"Your name",placeholder:"Your name",...e.getInputProps("name")},e.key("name")),(0,N.jsx)(P.TextInput,{withAsterisk:!0,label:"Your email",placeholder:"your@email.com",mt:"md",...e.getInputProps("email")},e.key("email")),(0,N.jsx)(j.Group,{justify:"flex-end",mt:"md",children:(0,N.jsx)(S.Button,{type:"submit",children:"Submit"})})]})},code:`
import { Button, Group, TextInput } from '@mantine/core';
import { isEmail, isNotEmpty, useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    name: 'register-form',
    initialValues: {
      name: '',
      email: '',
    },

    validate: {
      name: isNotEmpty('Name is required'),
      email: isEmail('Invalid email'),
    },
  });

  return (
    <form
      onSubmit={form.onSubmit(
        (values) => console.log(values),
        (errors) => {
          const firstErrorPath = Object.keys(errors)[0];
          form.getInputNode(firstErrorPath)?.focus();
        }
      )}
    >
      <TextInput
        withAsterisk
        label="Your name"
        placeholder="Your name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />

      <TextInput
        withAsterisk
        label="Your email"
        placeholder="your@email.com"
        mt="md"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`,maxWidth:340,centered:!0},of={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{name:"John"}}),[t,o]=(0,Y.useState)(!1),r=async e=>{await new Promise(t=>setTimeout(()=>t(e),3e3)),o(!0)};return t?(0,N.jsxs)(oc.Stack,{children:[(0,N.jsx)(V.Text,{children:"Form submitted!"}),(0,N.jsx)(S.Button,{onClick:()=>o(!1),children:"Reset to initial state"})]}):(0,N.jsxs)("form",{onSubmit:e.onSubmit(r),children:[(0,N.jsx)(P.TextInput,{withAsterisk:!0,label:"Name",placeholder:"Your name",disabled:e.submitting,...e.getInputProps("name")},e.key("name")),(0,N.jsx)(j.Group,{justify:"flex-end",mt:"md",children:(0,N.jsx)(S.Button,{type:"submit",loading:e.submitting,children:"Submit"})})]})},code:`
import { useState } from 'react';
import { Button, Group, Stack, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

const asyncSubmit = (values: any) =>
  new Promise((resolve) => setTimeout(() => resolve(values), 3000));

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: 'John' },
  });

  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (values: typeof form.values) => {
    await asyncSubmit(values);
    setCompleted(true);
  };

  if (completed) {
    return (
      <Stack>
        <Text>Form submitted!</Text>
        <Button onClick={() => setCompleted(false)}>Reset to initial state</Button>
      </Stack>
    );
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput
        withAsterisk
        label="Name"
        placeholder="Your name"
        key={form.key('name')}
        disabled={form.submitting}
        {...form.getInputProps('name')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit" loading={form.submitting}>
          Submit
        </Button>
      </Group>
    </form>
  );
}
`,maxWidth:340,centered:!0};var oh=e.i(473951);let ob={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{user:{firstName:"",lastName:""}},validate:{user:{[oh.formRootRule]:e=>e.firstName.trim().length>0&&e.firstName===e.lastName?"First name and last name cannot be the same":null,firstName:(0,t4.isNotEmpty)("First name is required"),lastName:(0,t4.isNotEmpty)("Last name is required")}}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(()=>{}),children:[(0,N.jsx)(P.TextInput,{label:"First name",placeholder:"First name",...e.getInputProps("user.firstName")}),(0,N.jsx)(P.TextInput,{label:"Last name",placeholder:"Last name",mt:"md",...e.getInputProps("user.lastName")}),e.errors.user&&(0,N.jsx)(V.Text,{c:"red",mt:5,fz:"sm",children:e.errors.user}),(0,N.jsx)(S.Button,{type:"submit",mt:"lg",children:"Submit"})]})},code:`
import { Button, Text, TextInput } from '@mantine/core';
import { formRootRule, isNotEmpty, useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      user: {
        firstName: '',
        lastName: '',
      },
    },

    validate: {
      user: {
        [formRootRule]: (value) =>
          value.firstName.trim().length > 0 && value.firstName === value.lastName
            ? 'First name and last name cannot be the same'
            : null,
        firstName: isNotEmpty('First name is required'),
        lastName: isNotEmpty('Last name is required'),
      },
    },
  });

  return (
    <form onSubmit={form.onSubmit(() => {})}>
      <TextInput
        label="First name"
        placeholder="First name"
        {...form.getInputProps('user.firstName')}
      />
      <TextInput
        label="Last name"
        placeholder="Last name"
        mt="md"
        {...form.getInputProps('user.lastName')}
      />
      {form.errors.user && (
        <Text c="red" mt={5} fz="sm">
          {form.errors.user}
        </Text>
      )}
      <Button type="submit" mt="lg">
        Submit
      </Button>
    </form>
  );
}
`,maxWidth:340,centered:!0},og={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{employees:[{name:"",active:!1,key:(0,D.randomId)()}]},validate:{employees:{[oh.formRootRule]:(0,t4.isNotEmpty)("AtIcon least one employee is required"),name:(0,t4.isNotEmpty)("Name is required")}}}),t=e.getValues().employees.map((t,o)=>(0,N.jsxs)(j.Group,{mt:"xs",children:[(0,N.jsx)(P.TextInput,{placeholder:"John Doe",withAsterisk:!0,style:{flex:1},...e.getInputProps(`employees.${o}.name`)},e.key(`employees.${o}.name`)),(0,N.jsx)(G.Switch,{label:"Active",...e.getInputProps(`employees.${o}.active`,{type:"checkbox"})},e.key(`employees.${o}.active`)),(0,N.jsx)(E.ActionIcon,{color:"red",onClick:()=>e.removeListItem("employees",o),children:(0,N.jsx)(B.TrashIcon,{size:16})})]},t.key));return(0,N.jsxs)("form",{onSubmit:e.onSubmit(()=>{}),children:[t.length>0?(0,N.jsxs)(j.Group,{mb:"xs",children:[(0,N.jsx)(V.Text,{fw:500,size:"sm",style:{flex:1},children:"Name"}),(0,N.jsx)(V.Text,{fw:500,size:"sm",pr:90,children:"Status"})]}):(0,N.jsx)(V.Text,{c:"dimmed",ta:"center",children:"No one here..."}),t,e.errors.employees&&(0,N.jsx)(V.Text,{c:"red",size:"sm",mt:"sm",children:e.errors.employees}),(0,N.jsxs)(j.Group,{justify:"space-between",mt:"md",children:[(0,N.jsx)(S.Button,{variant:"default",onClick:()=>{e.insertListItem("employees",{name:"",active:!1,key:(0,D.randomId)()}),e.clearFieldError("employees")},children:"Add employee"}),(0,N.jsx)(S.Button,{type:"submit",children:"Submit"})]})]})},code:`
import { TrashIcon } from '@phosphor-icons/react';
import { ActionIcon, Button, Group, Switch, Text, TextInput } from '@mantine/core';
import { formRootRule, isNotEmpty, useForm } from '@mantine/form';
import { randomId } from '@mantine/hooks';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      employees: [{ name: '', active: false, key: randomId() }],
    },
    validate: {
      employees: {
        [formRootRule]: isNotEmpty('AtIcon least one employee is required'),
        name: isNotEmpty('Name is required'),
      },
    },
  });

  const fields = form.getValues().employees.map((item, index) => (
    <Group key={item.key} mt="xs">
      <TextInput
        placeholder="John Doe"
        withAsterisk
        style={{ flex: 1 }}
        key={form.key(\`employees.\${index}.name\`)}
        {...form.getInputProps(\`employees.\${index}.name\`)}
      />
      <Switch
        label="Active"
        key={form.key(\`employees.\${index}.active\`)}
        {...form.getInputProps(\`employees.\${index}.active\`, { type: 'checkbox' })}
      />
      <ActionIcon color="red" onClick={() => form.removeListItem('employees', index)}>
        <TrashIcon size={16} />
      </ActionIcon>
    </Group>
  ));

  return (
    <form onSubmit={form.onSubmit(() => {})}>
      {fields.length > 0 ? (
        <Group mb="xs">
          <Text fw={500} size="sm" style={{ flex: 1 }}>
            Name
          </Text>
          <Text fw={500} size="sm" pr={90}>
            Status
          </Text>
        </Group>
      ) : (
        <Text c="dimmed" ta="center">
          No one here...
        </Text>
      )}

      {fields}

      {form.errors.employees && (
        <Text c="red" size="sm" mt="sm">
          {form.errors.employees}
        </Text>
      )}

      <Group justify="space-between" mt="md">
        <Button
          variant="default"
          onClick={() => {
            form.insertListItem('employees', { name: '', active: false, key: randomId() });
            form.clearFieldError('employees');
          }}
        >
          Add employee
        </Button>
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`,centered:!0,defaultExpanded:!1,maxWidth:440},oy=`
import { Button, Code, Stack, TextInput } from '@mantine/core';
import { createFormContext } from '@mantine/form';
import { useState } from 'react';

const [Provider, usePersonFormContext, usePersonForm] = createFormContext<{ person: { name: string } }>();

function Demo() {
  const form = usePersonForm({
    mode: 'uncontrolled',
    cascadeUpdates: true,
    initialValues: {
      person: { name: "" }
    }
  })

  return (
    <Provider form={form}>
      <Stack>
        <TextInput
          label="Name"
          placeholder="Name"
          key={form.key('person.name')}
          {...form.getInputProps('person.name')}
        />
        <Button onClick={() => form.setFieldValue("person", { name: "Jane Doe" })}>Set 'person' object to \`{'{ name: "Jane Doe" }'}\`</Button>
        <Watcher />
      </Stack>
    </Provider>
  );
}

function Watcher() {
  const form = usePersonFormContext();

  const [person, setPerson] = useState<{ name: string }>();
  const [name, setName] = useState<string>();

  form.watch('person', ({ value }) => setPerson(value));
  form.watch("person.name", ({ value }) => setName(value));

  return <Code block>{JSON.stringify({ person, name }, null, 2)}</Code>
}
`,[ox,ov,ok]=(o=(0,Y.createContext)(null),[function({form:e,children:t}){return(0,N.jsx)(o,{value:e,children:t})},function(){let e=(0,Y.use)(o);if(!e)throw Error("useFormContext was called outside of FormProvider context");return e},T.useForm]);function oI(){let e=ov(),[t,o]=(0,Y.useState)(),[r,n]=(0,Y.useState)();return e.watch("person",({value:e})=>o(e)),e.watch("person.name",({value:e})=>n(e)),(0,N.jsx)(tq.Code,{block:!0,children:JSON.stringify({person:t,name:r},null,2)})}let oS={type:"code",component:function(){let e=ok({mode:"uncontrolled",cascadeUpdates:!0,initialValues:{person:{name:""}}});return(0,N.jsx)(ox,{form:e,children:(0,N.jsxs)(oc.Stack,{children:[(0,N.jsx)(P.TextInput,{label:"Name",placeholder:"Name",...e.getInputProps("person.name")},e.key("person.name")),(0,N.jsxs)(S.Button,{onClick:()=>e.setFieldValue("person",{name:"Jane Doe"}),children:["Set 'person' object to `",'{ name: "Jane Doe" }',"`"]}),(0,N.jsx)(oI,{})]})})},code:oy,centered:!0,maxWidth:340};var ow=e.i(690920);let oj={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{color:"red"}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,N.jsx)(V.Text,{fw:500,size:"sm",children:"Pick your favorite color"}),(0,N.jsxs)(j.Group,{mt:5,children:[(0,N.jsx)(ow.Radio,{label:"Red",name:"color",...e.getInputProps("color",{type:"radio",value:"red"})}),(0,N.jsx)(ow.Radio,{label:"Blue",name:"color",...e.getInputProps("color",{type:"radio",value:"blue"})}),(0,N.jsx)(ow.Radio,{label:"Green",name:"color",...e.getInputProps("color",{type:"radio",value:"green"})})]}),(0,N.jsx)(j.Group,{justify:"flex-end",mt:"md",children:(0,N.jsx)(S.Button,{type:"submit",children:"Submit"})})]})},code:`
import { Button, Group, Radio, Text } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      color: 'red',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Text fw={500} size="sm">
        Pick your favorite color
      </Text>

      <Group mt={5}>
        <Radio
          label="Red"
          name="color"
          {...form.getInputProps('color', { type: 'radio', value: 'red' })}
        />
        <Radio
          label="Blue"
          name="color"
          {...form.getInputProps('color', { type: 'radio', value: 'blue' })}
        />
        <Radio
          label="Green"
          name="color"
          {...form.getInputProps('color', { type: 'radio', value: 'green' })}
        />
      </Group>
      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`,maxWidth:340,centered:!0};var oP=e.i(935769);let oT={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{username:"",email:""},validate:{username:async(e,t,o,r)=>e.trim().length<3?"Username must be at least 3 characters":new Promise((t,o)=>{let n=setTimeout(()=>{t(["admin","user","test","mantine"].includes(e.toLowerCase())?"Username is already taken":null)},800);r?.addEventListener("abort",()=>{clearTimeout(n),o(new DOMException("Aborted","AbortError"))})}),email:(0,t9.isEmail)("Invalid email")}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,N.jsx)(P.TextInput,{withAsterisk:!0,label:"Username",placeholder:"Pick a username",disabled:e.submitting,rightSection:e.validating?(0,N.jsx)(oP.Loader,{size:16}):null,...e.getInputProps("username")},e.key("username")),(0,N.jsx)(P.TextInput,{withAsterisk:!0,mt:"md",label:"Email",placeholder:"your@email.com",disabled:e.submitting,...e.getInputProps("email")},e.key("email")),(0,N.jsx)(j.Group,{justify:"flex-end",mt:"md",children:(0,N.jsx)(S.Button,{type:"submit",loading:e.submitting,children:"Submit"})})]})},code:`
import { Button, Group, Loader, TextInput } from '@mantine/core';
import { isEmail, useForm } from '@mantine/form';

// Simulates an async API call to check if the username is available
function checkUsernameAvailability(username: string, signal?: AbortSignal): Promise<string | null> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      const taken = ['admin', 'user', 'test', 'mantine'];
      resolve(taken.includes(username.toLowerCase()) ? 'Username is already taken' : null);
    }, 800);

    signal?.addEventListener('abort', () => {
      clearTimeout(timer);
      reject(new DOMException('Aborted', 'AbortError'));
    });
  });
}

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { username: '', email: '' },
    validate: {
      username: async (value, _values, _path, signal) => {
        if (value.trim().length < 3) {
          return 'Username must be at least 3 characters';
        }
        return checkUsernameAvailability(value, signal);
      },
      email: isEmail('Invalid email'),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput
        withAsterisk
        label="Username"
        placeholder="Pick a username"
        key={form.key('username')}
        disabled={form.submitting}
        rightSection={form.validating ? <Loader size={16} /> : null}
        {...form.getInputProps('username')}
      />

      <TextInput
        withAsterisk
        mt="md"
        label="Email"
        placeholder="your@email.com"
        key={form.key('email')}
        disabled={form.submitting}
        {...form.getInputProps('email')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit" loading={form.submitting}>
          Submit
        </Button>
      </Group>
    </form>
  );
}
`,maxWidth:340,centered:!0},oN={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{username:"",email:""},validateDebounce:500,validateInputOnChange:["username"],validate:{username:async(e,t,o,r)=>e.trim().length<3?"Username must be at least 3 characters":new Promise((t,o)=>{let n=setTimeout(()=>{t(["admin","user","test","mantine"].includes(e.toLowerCase())?"Username is already taken":null)},800);r?.addEventListener("abort",()=>{clearTimeout(n),o(new DOMException("Aborted","AbortError"))})}),email:(0,t9.isEmail)("Invalid email")}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,N.jsx)(P.TextInput,{withAsterisk:!0,label:"Username",description:"Try: admin, user, test, mantine",placeholder:"Pick a username",disabled:e.submitting,rightSection:e.isValidating("username")?(0,N.jsx)(oP.Loader,{size:16}):null,...e.getInputProps("username")},e.key("username")),(0,N.jsx)(P.TextInput,{withAsterisk:!0,mt:"md",label:"Email",placeholder:"your@email.com",disabled:e.submitting,...e.getInputProps("email")},e.key("email")),(0,N.jsx)(j.Group,{justify:"flex-end",mt:"md",children:(0,N.jsx)(S.Button,{type:"submit",loading:e.submitting,children:"Submit"})})]})},code:`
import { Button, Group, Loader, TextInput } from '@mantine/core';
import { useForm, isEmail } from '@mantine/form';

// Simulates an async API call to check if the username is available
function checkUsernameAvailability(username: string, signal?: AbortSignal): Promise<string | null> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      const taken = ['admin', 'user', 'test', 'mantine'];
      resolve(taken.includes(username.toLowerCase()) ? 'Username is already taken' : null);
    }, 800);

    signal?.addEventListener('abort', () => {
      clearTimeout(timer);
      reject(new DOMException('Aborted', 'AbortError'));
    });
  });
}

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { username: '', email: '' },

    // Debounce async validation by 500ms – prevents firing
    // an API call on every keystroke
    validateDebounce: 500,
    validateInputOnChange: ['username'],

    validate: {
      username: async (value, _values, _path, signal) => {
        if (value.trim().length < 3) {
          return 'Username must be at least 3 characters';
        }
        return checkUsernameAvailability(value, signal);
      },
      email: isEmail('Invalid email'),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput
        withAsterisk
        label="Username"
        description="Try: admin, user, test, mantine"
        placeholder="Pick a username"
        key={form.key('username')}
        disabled={form.submitting}
        rightSection={form.isValidating('username') ? <Loader size={16} /> : null}
        {...form.getInputProps('username')}
      />

      <TextInput
        withAsterisk
        mt="md"
        label="Email"
        placeholder="your@email.com"
        key={form.key('email')}
        disabled={form.submitting}
        {...form.getInputProps('email')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit" loading={form.submitting}>
          Submit
        </Button>
      </Group>
    </form>
  );
}
`,maxWidth:340,centered:!0};var oF=e.i(946288),oB=e.i(845734),oE=e.i(653122),oC=e.i(972913),oG=e.i(402638),oV=e.i(89361),oD=e.i(567179),oA=e.i(294788),oR=e.i(989826),oO=e.i(996969),oY=e.i(853312),oL=e.i(328940),oM=e.i(724168),oJ=e.i(892791),o$=e.i(988798),oz=e.i(60695),oW=e.i(788350),oU=e.i(158178);let oq={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{email:""},validate:{email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email"}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,N.jsx)(P.TextInput,{withAsterisk:!0,label:"Email",placeholder:"your@email.com",...e.getInputProps("email")},e.key("email")),(0,N.jsx)(j.Group,{mt:"md",children:(0,N.jsx)(S.Button,{type:"submit",children:"Submit"})})]})},code:`
import { TextInput, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
    },

    validate: {
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput
        withAsterisk
        label="Email"
        placeholder="your@email.com"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`},oX={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{angle:0}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,N.jsx)(oF.AngleSlider,{"aria-label":"Angle",...e.getInputProps("angle")},e.key("angle")),(0,N.jsx)(j.Group,{mt:"md",children:(0,N.jsx)(S.Button,{type:"submit",children:"Submit"})})]})},code:`
import { AngleSlider, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      angle: 0,
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <AngleSlider
        aria-label="Angle"
        key={form.key('angle')}
        {...form.getInputProps('angle')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`},o_={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{termsParams:!1},validate:{termsParams:e=>e?null:"You must agree to sell your soul"}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,N.jsx)(w.Checkbox,{label:"I agree to sell my privacy",...e.getInputProps("termsParams",{type:"checkbox"})},e.key("termsParams")),(0,N.jsx)(j.Group,{mt:"md",children:(0,N.jsx)(S.Button,{type:"submit",children:"Submit"})})]})},code:`
import { Checkbox, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      termsParams: false,
    },

    validate: {
      termsParams: (value) => (value ? null : 'You must agree to sell your soul'),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Checkbox
        label="I agree to sell my privacy"
        key={form.key('termsParams')}
        {...form.getInputProps('termsParams', { type: 'checkbox' })}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`},oK={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{favFrameworks:[]}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,N.jsx)(w.Checkbox.Group,{label:"Select your favorite frameworks/libraries",withAsterisk:!0,...e.getInputProps("favFrameworks"),children:(0,N.jsxs)(j.Group,{mt:"xs",children:[(0,N.jsx)(w.Checkbox,{value:"react",label:"React"}),(0,N.jsx)(w.Checkbox,{value:"mantine",label:"Mantine"}),(0,N.jsx)(w.Checkbox,{value:"ng",label:"Angular"}),(0,N.jsx)(w.Checkbox,{value:"svelte",label:"Svelte"})]})},e.key("favFrameworks")),(0,N.jsx)(j.Group,{mt:"md",children:(0,N.jsx)(S.Button,{type:"submit",children:"Submit"})})]})},code:`
import { Checkbox, Group, Button } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      favFrameworks: [],
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Checkbox.Group
        label="Select your favorite frameworks/libraries"
        withAsterisk
        key={form.key('favFrameworks')}
        {...form.getInputProps('favFrameworks')}
      >
        <Group mt="xs">
          <Checkbox value="react" label="React" />
          <Checkbox value="mantine" label="Mantine" />
          <Checkbox value="ng" label="Angular" />
          <Checkbox value="svelte" label="Svelte" />
        </Group>
      </Checkbox.Group>

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`},oH={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{awesome:!1}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,N.jsx)(oE.Chip,{...e.getInputProps("awesome",{type:"checkbox"}),children:"Mantine is awesome"},e.key("awesome")),(0,N.jsx)(j.Group,{mt:"md",children:(0,N.jsx)(S.Button,{type:"submit",children:"Submit"})})]})},code:`
import { Chip, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      awesome: false,
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Chip
        key={form.key('awesome')}
        {...form.getInputProps('awesome', { type: 'checkbox' })}
      >
        Mantine is awesome
      </Chip>

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`},oQ={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{color:""}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,N.jsx)(oC.ColorInput,{label:"Your favorite color",placeholder:"Pick color",...e.getInputProps("color")},e.key("color")),(0,N.jsx)(j.Group,{mt:"md",children:(0,N.jsx)(S.Button,{type:"submit",children:"Submit"})})]})},code:`
import { ColorInput, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      color: '',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <ColorInput
        label="Your favorite color"
        placeholder="Pick color"
        key={form.key('color')}
        {...form.getInputProps('color')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`},oZ={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{color:"#000000"}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,N.jsx)(V.Text,{size:"sm",fw:500,mb:3,children:"Pick color"}),(0,N.jsx)(oG.ColorPicker,{format:"hex",...e.getInputProps("color")},e.key("color")),(0,N.jsx)(j.Group,{mt:"md",children:(0,N.jsx)(S.Button,{type:"submit",children:"Submit"})})]})},code:`
import { ColorPicker, Text, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      color: '#000000',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Text size="sm" fw={500} mb={3}>Pick color</Text>
      <ColorPicker
        format="hex"
        key={form.key('color')}
        {...form.getInputProps('color')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`},o0={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{name:"",email:""}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,N.jsxs)(oV.Fieldset,{legend:"Personal information",children:[(0,N.jsx)(P.TextInput,{label:"Name",placeholder:"Your name",...e.getInputProps("name")},e.key("name")),(0,N.jsx)(P.TextInput,{label:"Email",placeholder:"Your email",mt:"md",...e.getInputProps("email")},e.key("email"))]}),(0,N.jsx)(j.Group,{mt:"md",children:(0,N.jsx)(S.Button,{type:"submit",children:"Submit"})})]})},code:`
import { Fieldset, TextInput, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Fieldset legend="Personal information">
        <TextInput
          label="Name"
          placeholder="Your name"
          key={form.key('name')}
          {...form.getInputProps('name')}
        />
        <TextInput
          label="Email"
          placeholder="Your email"
          mt="md"
          key={form.key('email')}
          {...form.getInputProps('email')}
        />
      </Fieldset>

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`},o1={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{avatar:null}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,N.jsx)(oD.FileInput,{label:"Avatar",placeholder:"Upload avatar",...e.getInputProps("avatar")},e.key("avatar")),(0,N.jsx)(j.Group,{mt:"md",children:(0,N.jsx)(S.Button,{type:"submit",children:"Submit"})})]})},code:`
import { FileInput, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      avatar: null,
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <FileInput
        label="Avatar"
        placeholder="Upload avatar"
        key={form.key('avatar')}
        {...form.getInputProps('avatar')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`},o2={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{phone:""}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,N.jsx)(oA.Input.Wrapper,{label:"Phone",withAsterisk:!0,children:(0,N.jsx)(oA.Input,{component:"input",placeholder:"Your phone",...e.getInputProps("phone")},e.key("phone"))}),(0,N.jsx)(j.Group,{mt:"md",children:(0,N.jsx)(S.Button,{type:"submit",children:"Submit"})})]})},code:`
import { Input, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      phone: '',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Input.Wrapper label="Phone" withAsterisk>
        <Input
          component="input"
          placeholder="Your phone"
          key={form.key('phone')}
          {...form.getInputProps('phone')}
        />
      </Input.Wrapper>

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`},o3={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{packageJson:'{"name": "mantine"}'}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,N.jsx)(oR.JsonInput,{label:"package.json",placeholder:"package.json",formatOnBlur:!0,autosize:!0,minRows:4,...e.getInputProps("packageJson")},e.key("packageJson")),(0,N.jsx)(j.Group,{mt:"md",children:(0,N.jsx)(S.Button,{type:"submit",children:"Submit"})})]})},code:`
import { JsonInput, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      packageJson: '{"name": "mantine"}',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <JsonInput
        label="package.json"
        placeholder="package.json"
        formatOnBlur
        autosize
        minRows={4}
        key={form.key('packageJson')}
        {...form.getInputProps('packageJson')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`},o8={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{framewrok:"react"}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,N.jsx)(t3.NativeSelect,{label:"Select framework",data:["React","Angular","Svelte","Vue"],...e.getInputProps("framewrok")},e.key("framewrok")),(0,N.jsx)(j.Group,{mt:"md",children:(0,N.jsx)(S.Button,{type:"submit",children:"Submit"})})]})},code:`
import { NativeSelect, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      framewrok: 'react',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <NativeSelect
        label="Select framework"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        key={form.key('framewrok')}
        {...form.getInputProps('framewrok')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`},o9={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{age:18}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,N.jsx)(tD.NumberInput,{label:"Your age",placeholder:"Your age",min:0,max:120,...e.getInputProps("age")},e.key("age")),(0,N.jsx)(j.Group,{mt:"md",children:(0,N.jsx)(S.Button,{type:"submit",children:"Submit"})})]})},code:`
import { NumberInput, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      age: 18,
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <NumberInput
        label="Your age"
        placeholder="Your age"
        min={0}
        max={120}
        key={form.key('age')}
        {...form.getInputProps('age')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`},o5={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{password:""}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,N.jsx)(tG.PasswordInput,{label:"Password",placeholder:"Your password",...e.getInputProps("password")},e.key("password")),(0,N.jsx)(j.Group,{mt:"md",children:(0,N.jsx)(S.Button,{type:"submit",children:"Submit"})})]})},code:`
import { PasswordInput, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      password: '',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <PasswordInput
        label="Password"
        placeholder="Your password"
        key={form.key('password')}
        {...form.getInputProps('password')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`},o4={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{pin:""}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,N.jsx)(V.Text,{size:"sm",fw:500,mb:3,children:"Enter PIN"}),(0,N.jsx)(oY.PinInput,{...e.getInputProps("pin")},e.key("pin")),(0,N.jsx)(j.Group,{mt:"md",children:(0,N.jsx)(S.Button,{type:"submit",children:"Submit"})})]})},code:`
import { PinInput, Button, Group, Text } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      pin: '',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Text size="sm" fw={500} mb={3}>Enter PIN</Text>
      <PinInput
        key={form.key('pin')}
        {...form.getInputProps('pin')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`},o6={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{framework:"react"}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,N.jsx)(ow.Radio.Group,{label:"Select your favorite framework/library",...e.getInputProps("framework"),children:(0,N.jsxs)(j.Group,{mt:"xs",children:[(0,N.jsx)(ow.Radio,{value:"react",label:"React"}),(0,N.jsx)(ow.Radio,{value:"mantine",label:"Mantine"}),(0,N.jsx)(ow.Radio,{value:"ng",label:"Angular"}),(0,N.jsx)(ow.Radio,{value:"svelte",label:"Svelte"})]})},e.key("framework")),(0,N.jsx)(j.Group,{mt:"md",children:(0,N.jsx)(S.Button,{type:"submit",children:"Submit"})})]})},code:`
import { Radio, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      framework: 'react',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Radio.Group
        label="Select your favorite framework/library"
        key={form.key('framework')}
        {...form.getInputProps('framework')}
      >
        <Group mt="xs">
          <Radio value="react" label="React" />
          <Radio value="mantine" label="Mantine" />
          <Radio value="ng" label="Angular" />
          <Radio value="svelte" label="Svelte" />
        </Group>
      </Radio.Group>

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`},o7={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{range:[20,80]}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,N.jsx)(V.Text,{size:"sm",fw:500,mb:3,children:"Price range"}),(0,N.jsx)(oL.RangeSlider,{...e.getInputProps("range")},e.key("range")),(0,N.jsx)(j.Group,{mt:"md",children:(0,N.jsx)(S.Button,{type:"submit",children:"Submit"})})]})},code:`
import { RangeSlider, Button, Group, Text } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      range: [20, 80] as [number, number],
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Text size="sm" fw={500} mb={3}>Price range</Text>
      <RangeSlider
        key={form.key('range')}
        {...form.getInputProps('range')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`},re={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{rating:0}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,N.jsx)(V.Text,{size:"sm",fw:500,mb:3,children:"Rating"}),(0,N.jsx)(oM.Rating,{...e.getInputProps("rating")},e.key("rating")),(0,N.jsx)(j.Group,{mt:"md",children:(0,N.jsx)(S.Button,{type:"submit",children:"Submit"})})]})},code:`
import { Rating, Button, Group, Text } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      rating: 0,
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Text size="sm" fw={500} mb={3}>Rating</Text>
      <Rating
        key={form.key('rating')}
        {...form.getInputProps('rating')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`},rt={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{framewrok:"react"}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,N.jsx)(V.Text,{size:"sm",fw:500,mb:3,children:"Select framework"}),(0,N.jsx)(oJ.SegmentedControl,{data:["React","Angular","Svelte","Vue"],...e.getInputProps("framewrok")},e.key("framewrok")),(0,N.jsx)(j.Group,{mt:"md",children:(0,N.jsx)(S.Button,{type:"submit",children:"Submit"})})]})},code:`
import { SegmentedControl, Button, Group, Text } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      framewrok: 'react',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Text size="sm" fw={500} mb={3}>Select framework</Text>
      <SegmentedControl
        data={['React', 'Angular', 'Svelte', 'Vue']}
        key={form.key('framewrok')}
        {...form.getInputProps('framewrok')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`},ro={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{value:40}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,N.jsx)(V.Text,{size:"sm",fw:500,mb:3,children:"Volume"}),(0,N.jsx)(oz.Slider,{...e.getInputProps("value")},e.key("value")),(0,N.jsx)(j.Group,{mt:"md",children:(0,N.jsx)(S.Button,{type:"submit",children:"Submit"})})]})},code:`
import { Slider, Button, Group, Text } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      value: 40,
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Text size="sm" fw={500} mb={3}>Volume</Text>
      <Slider
        key={form.key('value')}
        {...form.getInputProps('value')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`},rr={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{notifications:!1}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,N.jsx)(G.Switch,{label:"Enable notifications",...e.getInputProps("notifications",{type:"checkbox"})},e.key("notifications")),(0,N.jsx)(j.Group,{mt:"md",children:(0,N.jsx)(S.Button,{type:"submit",children:"Submit"})})]})},code:`
import { Switch, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      notifications: false,
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Switch
        label="Enable notifications"
        key={form.key('notifications')}
        {...form.getInputProps('notifications', { type: 'checkbox' })}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`},rn={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{favFrameworks:[]}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,N.jsx)(G.Switch.Group,{label:"Select your favorite frameworks/libraries",...e.getInputProps("favFrameworks"),children:(0,N.jsxs)(j.Group,{mt:"xs",children:[(0,N.jsx)(G.Switch,{value:"react",label:"React"}),(0,N.jsx)(G.Switch,{value:"mantine",label:"Mantine"}),(0,N.jsx)(G.Switch,{value:"ng",label:"Angular"}),(0,N.jsx)(G.Switch,{value:"svelte",label:"Svelte"})]})},e.key("favFrameworks")),(0,N.jsx)(j.Group,{mt:"md",children:(0,N.jsx)(S.Button,{type:"submit",children:"Submit"})})]})},code:`
import { Switch, Group, Button } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      favFrameworks: [],
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Switch.Group
        label="Select your favorite frameworks/libraries"
        key={form.key('favFrameworks')}
        {...form.getInputProps('favFrameworks')}
      >
        <Group mt="xs">
          <Switch value="react" label="React" />
          <Switch value="mantine" label="Mantine" />
          <Switch value="ng" label="Angular" />
          <Switch value="svelte" label="Svelte" />
        </Group>
      </Switch.Group>

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`},rl={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{message:""}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,N.jsx)(oU.Textarea,{label:"Your message",placeholder:"Your message",...e.getInputProps("message")},e.key("message")),(0,N.jsx)(j.Group,{mt:"md",children:(0,N.jsx)(S.Button,{type:"submit",children:"Submit"})})]})},code:`
import { Textarea, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      message: '',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Textarea
        label="Your message"
        placeholder="Your message"
        key={form.key('message')}
        {...form.getInputProps('message')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`},ra={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{framework:""}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,N.jsx)(oB.Autocomplete,{label:"Pick framework",placeholder:"Pick framework",data:["React","Angular","Svelte","Vue"],...e.getInputProps("framework")},e.key("framework")),(0,N.jsx)(j.Group,{mt:"md",children:(0,N.jsx)(S.Button,{type:"submit",children:"Submit"})})]})},code:`
import { Autocomplete, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      framework: '',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Autocomplete
        label="Pick framework"
        placeholder="Pick framework"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        key={form.key('framework')}
        {...form.getInputProps('framework')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`},ri={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{frameworks:[]}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,N.jsx)(oO.MultiSelect,{label:"Pick frameworks",placeholder:"Pick frameworks",data:["React","Angular","Svelte","Vue"],...e.getInputProps("frameworks")},e.key("frameworks")),(0,N.jsx)(j.Group,{mt:"md",children:(0,N.jsx)(S.Button,{type:"submit",children:"Submit"})})]})},code:`
import { MultiSelect, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      frameworks: [],
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <MultiSelect
        label="Pick frameworks"
        placeholder="Pick frameworks"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        key={form.key('frameworks')}
        {...form.getInputProps('frameworks')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`},rm={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{framework:""}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,N.jsx)(o$.Select,{label:"Pick framework",placeholder:"Pick framework",data:["React","Angular","Svelte","Vue"],...e.getInputProps("framework")},e.key("framework")),(0,N.jsx)(j.Group,{mt:"md",children:(0,N.jsx)(S.Button,{type:"submit",children:"Submit"})})]})},code:`
import { Select, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      framework: '',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Select
        label="Pick framework"
        placeholder="Pick framework"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        key={form.key('framework')}
        {...form.getInputProps('framework')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`},ru={type:"code",component:function(){let e=(0,T.useForm)({mode:"uncontrolled",initialValues:{frameworks:[]}});return(0,N.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,N.jsx)(oW.TagsInput,{label:"Press Enter to submit a tag",placeholder:"Enter tag",...e.getInputProps("frameworks")},e.key("frameworks")),(0,N.jsx)(j.Group,{mt:"md",children:(0,N.jsx)(S.Button,{type:"submit",children:"Submit"})})]})},code:`
import { TagsInput, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      frameworks: [],
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TagsInput
        label="Press Enter to submit a tag"
        placeholder="Enter tag"
        key={form.key('frameworks')}
        {...form.getInputProps('frameworks')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`};var rs=(0,I.__exportAll)({angleSlider:()=>oX,asyncSetValues:()=>tU,asyncValidation:()=>oT,asyncValidationDebounce:()=>oN,autocomplete:()=>ra,blurFieldValidation:()=>t1,blurValidation:()=>t0,cascadeUpdates:()=>oS,checkbox:()=>o_,checkboxGroup:()=>oK,chip:()=>oH,clearErrorOnChange:()=>t$,colorInput:()=>oQ,colorPicker:()=>oZ,controlled:()=>oi,dnd:()=>tC,enhanceGetInputProps:()=>on,enhanceGetInputPropsForm:()=>oa,enhanceGetInputPropsOptions:()=>ol,fieldset:()=>o0,fileInput:()=>o1,focusError:()=>op,initialize:()=>or,input:()=>o2,jsonInput:()=>o3,lists:()=>A,liveFieldValidation:()=>tJ,liveValidation:()=>tL,localStorage:()=>tR,multiSelect:()=>ri,nativeSelect:()=>o8,nested:()=>tO,numberInput:()=>o9,onSubmitErrors:()=>tW,onValuesChange:()=>ou,password:()=>tV,passwordInput:()=>o5,pinInput:()=>o4,radioGetInputProps:()=>oj,radioGroup:()=>o6,rangeSlider:()=>o7,rating:()=>re,reset:()=>tQ,rootRuleArray:()=>og,rootRuleObject:()=>ob,rulesValidation:()=>tY,segmentedControl:()=>rt,select:()=>rm,setFieldValue:()=>tK,setValues:()=>tH,slider:()=>ro,status:()=>tZ,stepper:()=>t_,submitting:()=>of,switchDemo:()=>rr,switchGroup:()=>rn,tagsInput:()=>ru,textInput:()=>oq,textarea:()=>rl,transformValues:()=>t2,uncontrolled:()=>om,usage:()=>F,validateFunction:()=>tA,validators:()=>ot,validatorsEmpty:()=>oo,watch:()=>os,watchList:()=>od});e.s(["FormDemos",0,rs],822633)}]);