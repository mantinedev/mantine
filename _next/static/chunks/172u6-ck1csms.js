(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,119764,378073,e=>{"use strict";var t=e.i(648863),o=e.i(485108),n=e.i(802046),i=e.i(749218),s=e.i(44091),r=e.i(391466),l=e.i(275519),a=e.i(470743),d=e.i(164483);let[u,c]=(0,e.i(386179).createSafeContext)("FloatingWindow.ResizeHandle must be used within FloatingWindow");var h=e.i(232471),m=e.i(191788),f=e.i(332977),g=e.i(391398);let w={};function p(e,t,o,n){let i=e;return null!=t&&(i=Math.max(i,t)),null!=o&&(i=Math.min(i,o)),null!=n&&(i=Math.min(i,n)),i}function x(e,t,o){if(!t)return{maxWidth:void 0,maxHeight:void 0};let n=e.getBoundingClientRect(),i=o??0;return{maxWidth:window.innerWidth-n.left-i,maxHeight:window.innerHeight-n.top-i}}let b=(0,l.factory)(e=>{let{children:t,ref:o,style:n,...i}=(0,s.useProps)("FloatingWindowResizeHandle",w,e),r=c(),l=(0,m.useRef)(null),a=r.dimensions?.initialWidth!=null||r.dimensions?.minWidth!=null||r.dimensions?.maxWidth!=null,d=r.dimensions?.initialHeight!=null||r.dimensions?.minHeight!=null||r.dimensions?.maxHeight!=null;return(0,m.useEffect)(()=>{let e=l.current;if(!e)return;let t=new AbortController,{signal:o}=t,n=!1,i=0,s=0,u=0,c=0,h=(t,o)=>{let n=r.rootRef.current;if(n){if(null!==t){let o=function(e,t,o,n,i){let{maxWidth:s}=x(e,n,i);return p(t,o?.minWidth,o?.maxWidth,s)}(n,t,r.dimensions,r.constrainToViewport,r.constrainOffset);n.style.width=`${o}px`,e.setAttribute("aria-valuenow",String(Math.round(o)))}if(null!==o){let e=function(e,t,o,n,i){let{maxHeight:s}=x(e,n,i);return p(t,o?.minHeight,o?.maxHeight,s)}(n,o,r.dimensions,r.constrainToViewport,r.constrainOffset);n.style.height=`${e}px`}}},m=e=>{if("button"in e&&0!==e.button)return;e.stopPropagation(),e.preventDefault();let t=r.rootRef.current;if(!t)return;let l="touches"in e?e.touches[0]:e;i=l.clientX,s=l.clientY;let a=t.getBoundingClientRect();u=a.width,c=a.height,n=!0,document.body.style.userSelect="none",document.body.style.webkitUserSelect="none",document.addEventListener("mousemove",f,{signal:o}),document.addEventListener("mouseup",g,{signal:o}),document.addEventListener("touchmove",f,{signal:o,passive:!1}),document.addEventListener("touchend",g,{signal:o})},f=e=>{if(!n)return;e.preventDefault();let t="touches"in e?e.touches[0]:e,o=t.clientX-i,r=t.clientY-s;h(a?u+o:null,d?c+r:null)},g=()=>{n&&(n=!1,document.body.style.userSelect="",document.body.style.webkitUserSelect="")};return e.addEventListener("mousedown",m,{signal:o}),e.addEventListener("touchstart",m,{signal:o,passive:!1}),e.addEventListener("keydown",e=>{let t=r.rootRef.current;if(!t)return;let o=t.getBoundingClientRect(),n=null,i=null;"ArrowRight"===e.key&&a?n=o.width+10:"ArrowLeft"===e.key&&a?n=o.width-10:"ArrowDown"===e.key&&d?i=o.height+10:"ArrowUp"===e.key&&d?i=o.height-10:"Home"===e.key?(a&&(n=r.dimensions?.minWidth??o.width),d&&(i=r.dimensions?.minHeight??o.height)):"End"===e.key&&(a&&(n=r.dimensions?.maxWidth??o.width),d&&(i=r.dimensions?.maxHeight??o.height)),(null!==n||null!==i)&&(e.preventDefault(),h(n,i))},{signal:o}),()=>{t.abort()}},[r.rootRef,r.dimensions,r.constrainToViewport,r.constrainOffset,a,d]),(0,g.jsx)(h.Box,{ref:(0,f.useMergedRef)(o,l),role:"separator","aria-label":"Resize window","aria-valuenow":r.dimensions?.initialWidth,"aria-valuemin":r.dimensions?.minWidth,"aria-valuemax":r.dimensions?.maxWidth,tabIndex:0,...i,style:[{touchAction:"none"},n],children:t})});b.displayName="@mantine/core/FloatingWindowResizeHandle";var v={root:"m_df020499"};function y(e={}){var t;let o,[n,i]=(0,m.useState)(null),s=(0,m.useRef)(null),r=(0,m.useRef)({x:0,y:0}),l=(0,m.useRef)({x:0,y:0}),[a,d]=(0,m.useState)(!1),u=(0,m.useRef)(!1),c=(0,m.useRef)(!1),h=(t=e.enabled,(o=(0,m.useRef)(t)).current=t,o),f=(0,m.useCallback)(e=>{d(e),u.current=e},[]),g=(0,m.useCallback)(e=>{e?(s.current=e,i(e)):(s.current=null,i(null))},[]);return(0,m.useEffect)(()=>{var t,o;let n,i,l,a,d,u,h,m,f,g,w,p=s.current;return!c.current&&p&&(c.current=!0,t=p,o=e,n=t.getBoundingClientRect(),i=o.constrainOffset??0,l=window.innerWidth,a=window.innerHeight,d=window.getComputedStyle(t),u=o.initialPosition?.top,h=o.initialPosition?.left,m=o.initialPosition?.right,f=o.initialPosition?.bottom,g=i,w=i,g=null!=h?h:null!=m?l-n.width-m:j(d.left)||l-n.width-j(d.right)||i,w=null!=u?u:null!=f?a-n.height-f:j(d.top)||a-n.height-j(d.bottom)||i,r.current=o.constrainToViewport?B(g,w,t,o.constrainOffset):{x:g,y:w},p.style.left=`${r.current.x}px`,p.style.top=`${r.current.y}px`,p.style.right="unset",p.style.bottom="unset"),()=>{c.current=!1}},[n,e.constrainOffset,e.initialPosition?.top,e.initialPosition?.left,e.initialPosition?.right,e.initialPosition?.bottom,e.constrainToViewport]),(0,m.useEffect)(()=>{let t=s.current;if(!t)return;let o=new AbortController,n=o.signal,i=o=>{var i,s,r;if(!1===h.current)return;let u="touches"in o?o.touches[0]:o;if("button"in o&&0!==o.button||(i=t,s=o.target,r=e,!(s instanceof Node&&(r.dragHandleSelector?Array.from(i.querySelectorAll(r.dragHandleSelector)).some(e=>e.contains(s)&&!T(s,r.excludeDragHandleSelector)):!T(s,r.excludeDragHandleSelector)))))return;f(!0),document.body.style.userSelect="none",document.body.style.webkitUserSelect="none";let c=t.getBoundingClientRect();l.current={x:u.clientX-c.left,y:u.clientY-c.top},e.onDragStart?.(),document.addEventListener("mousemove",a,{signal:n}),document.addEventListener("mouseup",d,{signal:n}),document.addEventListener("touchmove",a,{signal:n,passive:!1}),document.addEventListener("touchend",d,{signal:n})},a=o=>{if(!u.current)return;let n="touches"in o?o.touches[0]:o;o.preventDefault();let i=n.clientX-l.current.x,a=n.clientY-l.current.y,d=C(t,{x:i,y:a},e);"x"===e.axis?(i=d.x,a=r.current.y):(i="y"===e.axis?r.current.x:d.x,a=d.y),r.current={x:i,y:a},s.current&&(s.current.style.left=`${i}px`,s.current.style.top=`${a}px`),e.onPositionChange?.({x:i,y:a})},d=()=>{u.current&&(f(!1),document.body.style.userSelect="",document.body.style.webkitUserSelect="",e.onDragEnd?.())};return t.addEventListener("mousedown",i,{signal:n}),t.addEventListener("touchstart",i,{signal:n,passive:!1}),()=>{o.abort()}},[e.constrainToViewport,e.constrainOffset,e.dragHandleSelector,e.axis,e.onPositionChange,e.onDragStart,e.onDragEnd,e.initialPosition?.top,e.initialPosition?.left,e.initialPosition?.right,e.initialPosition?.bottom,n]),(0,m.useEffect)(()=>{let t=s.current;if(!t)return;let o=new ResizeObserver(()=>{let o=C(t,r.current,e);r.current=o,t.style.left=`${o.x}px`,t.style.top=`${o.y}px`});return o.observe(t),()=>{o.disconnect()}},[e.constrainToViewport,e.constrainOffset]),{ref:g,setPosition:(0,m.useCallback)(t=>{let o,n,i=s.current;if(!i)return;let l=e.constrainOffset??0,a=i.getBoundingClientRect();if(null!=t.left?o=t.left:null!=t.right&&(o=window.innerWidth-a.width-t.right),null!=t.top?n=t.top:null!=t.bottom&&(n=window.innerHeight-a.height-t.bottom),o=o??r.current.x,n=n??r.current.y,e.constrainToViewport){let e=B(o,n,i,l);o=e.x,n=e.y}r.current={x:o,y:n},i.style.left=`${o}px`,i.style.top=`${n}px`,e.onPositionChange?.({x:o,y:n})},[e.constrainToViewport,e.constrainOffset,e.onPositionChange]),isDragging:a}}function j(e){return e.endsWith("px")?parseFloat(e):0}function C(e,t,o){if(!o.constrainToViewport||!e)return t;let n=e.getBoundingClientRect(),i=o.constrainOffset??0,s=window.innerWidth-n.width-i,r=window.innerHeight-n.height-i;return{x:Math.min(Math.max(i,t.x),s),y:Math.min(Math.max(i,t.y),r)}}function T(e,t){return!!t&&e instanceof Element&&!!e.closest(t)}function B(e,t,o,n=0){let i=o.getBoundingClientRect(),s=window.innerWidth-i.width-n,r=window.innerHeight-i.height-n;return{x:Math.min(Math.max(n,e),s),y:Math.min(Math.max(n,t),r)}}e.s(["useFloatingWindow",0,y],378073);let D={constrainToViewport:!0,zIndex:(0,i.getDefaultZIndex)("overlay")};function P(e,t,o){let n=e;return null!=t&&(n=Math.max(n,t)),null!=o&&(n=Math.min(n,o)),n}let S=(0,l.factory)(e=>{let t=(0,s.useProps)("FloatingWindow",D,e),{classNames:o,className:n,style:i,styles:l,unstyled:c,vars:h,mod:w,enabled:p,constrainToViewport:x,constrainOffset:b,dragHandleSelector:j,excludeDragHandleSelector:C,axis:T,initialPosition:B,onPositionChange:S,onDragStart:W,onDragEnd:H,setPositionRef:k,withinPortal:F,portalProps:G,zIndex:z,dimensions:R,ref:E,...V}=t,O=(0,m.useRef)(null),A=(0,r.useStyles)({name:"FloatingWindow",classes:v,props:t,className:n,style:i,classNames:o,styles:l,unstyled:c,vars:h}),M=y({enabled:p,constrainToViewport:x,constrainOffset:b,dragHandleSelector:j,excludeDragHandleSelector:C,axis:T,initialPosition:B,onPositionChange:S,onDragStart:W,onDragEnd:H});(0,m.useImperativeHandle)(k,()=>M.setPosition,[M.setPosition]);let I={"--floating-window-z-index":z.toString()};return R?.initialWidth!=null&&(I["--floating-window-width"]=`${P(R.initialWidth,R.minWidth,R.maxWidth)}px`),R?.initialHeight!=null&&(I["--floating-window-height"]=`${P(R.initialHeight,R.minHeight,R.maxHeight)}px`),(0,g.jsx)(u,{value:{rootRef:O,dimensions:R,constrainToViewport:x,constrainOffset:b},children:(0,g.jsx)(d.OptionalPortal,{withinPortal:F,...G,children:(0,g.jsx)(a.Paper,{ref:(0,f.useMergedRef)(E,M.ref,O),mod:[{dragging:M.isDragging},w],...A("root"),...V,__vars:I})})})});S.displayName="@mantine/core/FloatingWindow",S.classes=v,S.ResizeHandle=b;var W=e.i(725695),H=e.i(883364),k=e.i(541772);let F={type:"code",component:function(){let[e,t]=(0,k.useDisclosure)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(o.Button,{onClick:t.toggle,variant:"default",children:[e?"Hide":"Show"," floating window"]}),e&&(0,g.jsxs)(S,{w:280,p:"md",withBorder:!0,excludeDragHandleSelector:"button",initialPosition:{top:300,left:20},style:{cursor:"move"},children:[(0,g.jsxs)(W.Group,{justify:"space-between",mb:"md",children:[(0,g.jsx)(H.Text,{children:"Usage demo"}),(0,g.jsx)(n.CloseButton,{onClick:t.close})]}),(0,g.jsx)(H.Text,{fz:"sm",children:"This is a floating window. You can drag it around."})]})]})},code:`
import { Button, CloseButton, FloatingWindow, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [visible, handlers] = useDisclosure();

  return (
    <>
      <Button onClick={handlers.toggle} variant="default">
        {visible ? 'Hide' : 'Show'} floating window
      </Button>

      {visible && (
        <FloatingWindow
          w={280}
          p="md"
          withBorder
          excludeDragHandleSelector="button"
          initialPosition={{ top: 300, left: 20 }}
          style={{ cursor: 'move' }}
        >
          <Group justify="space-between" mb="md">
            <Text>Usage demo</Text>
            <CloseButton onClick={handlers.close} />
          </Group>
          <Text fz="sm">This is a floating window. You can drag it around.</Text>
        </FloatingWindow>
      )}
    </>
  );
}
`,centered:!0};var G=e.i(892791);let z={type:"code",component:function(){let[e,t]=(0,k.useDisclosure)(),[i,s]=(0,m.useState)("y");return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(W.Group,{children:[(0,g.jsxs)(o.Button,{onClick:t.toggle,variant:"default",children:[e?"Hide":"Show"," floating window"]}),(0,g.jsx)(G.SegmentedControl,{data:["x","y"],onChange:e=>s(e),value:i})]}),e&&(0,g.jsxs)(S,{w:280,p:"md",withBorder:!0,excludeDragHandleSelector:"button",initialPosition:{top:200,left:40},style:{cursor:"move"},axis:i,children:[(0,g.jsxs)(W.Group,{justify:"space-between",mb:"md",children:[(0,g.jsx)(H.Text,{children:"Axis demo"}),(0,g.jsx)(n.CloseButton,{onClick:t.close})]}),(0,g.jsx)(H.Text,{fz:"sm",children:"When you set axis prop, the floating window can be dragged only horizontally or vertically."})]})]})},code:`
import { Button, CloseButton, FloatingWindow, Group, SegmentedControl, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [visible, handlers] = useDisclosure();
  const [axis, setAxis] = useState<'x' | 'y'>('y');

  return (
    <>
      <Group>
        <Button onClick={handlers.toggle} variant="default">
          {visible ? 'Hide' : 'Show'} floating window
        </Button>
        <SegmentedControl data={['x', 'y']} onChange={(val) => setAxis(val as 'x')} value={axis} />
      </Group>

      {visible && (
        <FloatingWindow
          w={280}
          p="md"
          withBorder
          excludeDragHandleSelector="button"
          initialPosition={{ top: 200, left: 40 }}
          style={{ cursor: 'move' }}
          axis={axis}
        >
          <Group justify="space-between" mb="md">
            <Text>Axis demo</Text>
            <CloseButton onClick={handlers.close} />
          </Group>
          <Text fz="sm">
            When you set axis prop, the floating window can be dragged only horizontally or
            vertically.
          </Text>
        </FloatingWindow>
      )}
    </>
  );
}
`,centered:!0},R={type:"code",component:function(){let[e,t]=(0,k.useDisclosure)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(o.Button,{onClick:t.toggle,variant:"default",children:[e?"Hide":"Show"," floating window"]}),e&&(0,g.jsxs)(S,{w:280,p:"md",withBorder:!0,excludeDragHandleSelector:"button",initialPosition:{top:300,left:20},style:{cursor:"move"},constrainToViewport:!1,children:[(0,g.jsxs)(W.Group,{justify:"space-between",mb:"md",children:[(0,g.jsx)(H.Text,{children:"No constrain demo"}),(0,g.jsx)(n.CloseButton,{onClick:t.close})]}),(0,g.jsx)(H.Text,{fz:"sm",children:"The floating window is not constrained by the viewport, it can move out of bounds."})]})]})},code:`
import { Button, CloseButton, FloatingWindow, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [visible, handlers] = useDisclosure();
  return (
    <>
      <Button onClick={handlers.toggle} variant="default">
        {visible ? 'Hide' : 'Show'} floating window
      </Button>

      {visible && (
        <FloatingWindow
          w={280}
          p="md"
          withBorder
          excludeDragHandleSelector="button"
          initialPosition={{ top: 300, left: 20 }}
          style={{ cursor: 'move' }}
          constrainToViewport={false}
        >
          <Group justify="space-between" mb="md">
            <Text>No constrain demo</Text>
            <CloseButton onClick={handlers.close} />
          </Group>
          <Text fz="sm">
            The floating window is not constrained by the viewport, it can move out of bounds.
          </Text>
        </FloatingWindow>
      )}
    </>
  );
}
`,centered:!0},E={type:"code",component:function(){let[e,t]=(0,k.useDisclosure)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(o.Button,{onClick:t.toggle,variant:"default",children:[e?"Hide":"Show"," floating window"]}),e&&(0,g.jsxs)(S,{w:280,p:"md",withBorder:!0,excludeDragHandleSelector:"button",initialPosition:{top:300,left:30},style:{cursor:"move"},constrainToViewport:!0,constrainOffset:30,children:[(0,g.jsxs)(W.Group,{justify:"space-between",mb:"md",children:[(0,g.jsx)(H.Text,{children:"Constrain offset demo"}),(0,g.jsx)(n.CloseButton,{onClick:t.close})]}),(0,g.jsx)(H.Text,{fz:"sm",children:"This floating window has 30px offset, it cannot move closer that 30px to the edge of the viewport."})]})]})},code:`
import { Button, CloseButton, FloatingWindow, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [visible, handlers] = useDisclosure();

  return (
    <>
      <Button onClick={handlers.toggle} variant="default">
        {visible ? 'Hide' : 'Show'} floating window
      </Button>

      {visible && (
        <FloatingWindow
          w={280}
          p="md"
          withBorder
          excludeDragHandleSelector="button"
          initialPosition={{ top: 300, left: 30 }}
          style={{ cursor: 'move' }}
          constrainToViewport
          constrainOffset={30}
        >
          <Group justify="space-between" mb="md">
            <Text>Constrain offset demo</Text>
            <CloseButton onClick={handlers.close} />
          </Group>
          <Text fz="sm">
            This floating window has 30px offset, it cannot move closer that 30px to the edge of the
            viewport.
          </Text>
        </FloatingWindow>
      )}
    </>
  );
}
`,centered:!0},V={type:"code",component:function(){let[e,t]=(0,k.useDisclosure)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(o.Button,{onClick:t.toggle,variant:"default",children:[e?"Hide":"Show"," floating window"]}),e&&(0,g.jsxs)(S,{w:280,withBorder:!0,dragHandleSelector:".drag-handle",excludeDragHandleSelector:"button",initialPosition:{top:300,left:20},children:[(0,g.jsxs)(W.Group,{justify:"space-between",px:"md",py:"sm",className:"drag-handle",style:{cursor:"move"},children:[(0,g.jsx)(H.Text,{children:"Drag handle demo"}),(0,g.jsx)(n.CloseButton,{onClick:t.close})]}),(0,g.jsx)(H.Text,{fz:"sm",px:"md",pb:"sm",children:"Drag floating window around with drag handle element."})]})]})},code:`
import { Button, CloseButton, FloatingWindow, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [visible, handlers] = useDisclosure();

  return (
    <>
      <Button onClick={handlers.toggle} variant="default">
        {visible ? 'Hide' : 'Show'} floating window
      </Button>

      {visible && (
        <FloatingWindow
          w={280}
          withBorder
          dragHandleSelector=".drag-handle"
          excludeDragHandleSelector="button"
          initialPosition={{ top: 300, left: 20 }}
        >
          <Group
            justify="space-between"
            px="md"
            py="sm"
            className="drag-handle"
            style={{ cursor: 'move' }}
          >
            <Text>Drag handle demo</Text>
            <CloseButton onClick={handlers.close} />
          </Group>
          <Text fz="sm" px="md" pb="sm">
            Drag floating window around with drag handle element.
          </Text>
        </FloatingWindow>
      )}
    </>
  );
}
`,centered:!0};var O=e.i(653122);let A={type:"code",component:function(){let[e,t]=(0,k.useDisclosure)(),[i,s]=(0,m.useState)(!0);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(W.Group,{children:[(0,g.jsxs)(o.Button,{variant:"default",onClick:t.toggle,children:[e?"Hide":"Show"," floating window"]}),(0,g.jsxs)(O.Chip,{checked:i,onChange:()=>s(e=>!e),children:["Drag ",i?"enabled":"disabled"]})]}),e&&(0,g.jsxs)(S,{w:280,p:"md",withBorder:!0,excludeDragHandleSelector:"button",initialPosition:{top:300,left:20},style:{cursor:"move"},enabled:i,children:[(0,g.jsxs)(W.Group,{justify:"space-between",mb:"md",children:[(0,g.jsx)(H.Text,{children:"Enabled demo"}),(0,g.jsx)(n.CloseButton,{onClick:t.close})]}),(0,g.jsx)(H.Text,{fz:"sm",children:"This is a floating window. You can drag it around."})]})]})},code:`
import { Button, Chip, CloseButton, FloatingWindow, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [visible, handlers] = useDisclosure();
  const [enabled, setEnabled] = useState(true);

  return (
    <>
      <Group>
        <Button variant="default" onClick={handlers.toggle}>
          {visible ? 'Hide' : 'Show'} floating window
        </Button>
        <Chip checked={enabled} onChange={() => setEnabled((e) => !e)}>
          Drag {enabled ? 'enabled' : 'disabled'}
        </Chip>
      </Group>

      {visible && (
        <FloatingWindow
          w={280}
          p="md"
          withBorder
          excludeDragHandleSelector="button"
          initialPosition={{ top: 300, left: 20 }}
          style={{ cursor: 'move' }}
          enabled={enabled}
        >
          <Group justify="space-between" mb="md">
            <Text>Enabled demo</Text>
            <CloseButton onClick={handlers.close} />
          </Group>
          <Text fz="sm">This is a floating window. You can drag it around.</Text>
        </FloatingWindow>
      )}
    </>
  );
}
`,centered:!0},M={type:"code",component:function(){let[e,t]=(0,k.useDisclosure)(),i=(0,m.useRef)(null);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(W.Group,{children:[(0,g.jsxs)(o.Button,{onClick:t.toggle,variant:"default",children:[e?"Hide":"Show"," floating window"]}),(0,g.jsx)(o.Button,{onClick:()=>{i.current?.({bottom:40,right:40})},variant:"default",children:"Set position to bottom right corner"})]}),e&&(0,g.jsxs)(S,{w:280,p:"md",withBorder:!0,excludeDragHandleSelector:"button",initialPosition:{top:300,left:20},style:{cursor:"move"},setPositionRef:i,children:[(0,g.jsxs)(W.Group,{justify:"space-between",mb:"md",children:[(0,g.jsx)(H.Text,{children:"Set position demo"}),(0,g.jsx)(n.CloseButton,{onClick:t.close})]}),(0,g.jsx)(H.Text,{fz:"sm",children:"You can control floating window position programmatically with setPositionRef."})]})]})},code:`
import { useRef } from 'react';
import { Button, CloseButton, FloatingWindow, Group, Text } from '@mantine/core';
import { SetFloatingWindowPosition, useDisclosure } from '@mantine/hooks';

function Demo() {
  const [visible, handlers] = useDisclosure();
  const setPositionRef = useRef<SetFloatingWindowPosition | null>(null);
  const setPosition = () => {
    setPositionRef.current?.({ bottom: 40, right: 40 });
  };

  return (
    <>
      <Group>
        <Button onClick={handlers.toggle} variant="default">
          {visible ? 'Hide' : 'Show'} floating window
        </Button>
        <Button onClick={setPosition} variant="default">
          Set position to bottom right corner
        </Button>
      </Group>

      {visible && (
        <FloatingWindow
          w={280}
          p="md"
          withBorder
          excludeDragHandleSelector="button"
          initialPosition={{ top: 300, left: 20 }}
          style={{ cursor: 'move' }}
          setPositionRef={setPositionRef}
        >
          <Group justify="space-between" mb="md">
            <Text>Set position demo</Text>
            <CloseButton onClick={handlers.close} />
          </Group>
          <Text fz="sm">
            You can control floating window position programmatically with setPositionRef.
          </Text>
        </FloatingWindow>
      )}
    </>
  );
}
`,centered:!0};var I=e.i(171481);let L=new Map([["bold",m.createElement(m.Fragment,null,m.createElement("path",{d:"M216.49,136.49l-80,80a12,12,0,1,1-17-17l80-80a12,12,0,1,1,17,17Zm-16-105a12,12,0,0,0-17,0l-152,152a12,12,0,0,0,17,17l152-152A12,12,0,0,0,200.49,31.51Z"}))],["duotone",m.createElement(m.Fragment,null,m.createElement("path",{d:"M192,40V192H40Z",opacity:"0.2"}),m.createElement("path",{d:"M195.06,32.61a8,8,0,0,0-8.72,1.73l-152,152A8,8,0,0,0,40,200H192a8,8,0,0,0,8-8V40A8,8,0,0,0,195.06,32.61ZM184,184H59.31L184,59.31Z"}))],["fill",m.createElement(m.Fragment,null,m.createElement("path",{d:"M200,40V192a8,8,0,0,1-8,8H40a8,8,0,0,1-5.66-13.66l152-152A8,8,0,0,1,200,40Z"}))],["light",m.createElement(m.Fragment,null,m.createElement("path",{d:"M212.24,132.24l-80,80a6,6,0,1,1-8.48-8.48l80-80a6,6,0,1,1,8.48,8.48Zm-16-96.48a6,6,0,0,0-8.48,0l-152,152a6,6,0,1,0,8.48,8.48l152-152A6,6,0,0,0,196.24,35.76Z"}))],["regular",m.createElement(m.Fragment,null,m.createElement("path",{d:"M213.66,133.66l-80,80a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,11.32Zm-16-99.32a8,8,0,0,0-11.32,0l-152,152a8,8,0,0,0,11.32,11.32l152-152A8,8,0,0,0,197.66,34.34Z"}))],["thin",m.createElement(m.Fragment,null,m.createElement("path",{d:"M210.83,130.83l-80,80a4,4,0,1,1-5.66-5.66l80-80a4,4,0,1,1,5.66,5.66Zm-16-93.66a4,4,0,0,0-5.66,0l-152,152a4,4,0,0,0,5.66,5.66l152-152A4,4,0,0,0,194.83,37.17Z"}))]]),N=m.forwardRef((e,t)=>m.createElement(I.default,{ref:t,...e,weights:L}));N.displayName="NotchesIcon";let U={type:"code",component:function(){let[e,t]=(0,k.useDisclosure)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(o.Button,{onClick:t.toggle,variant:"default",children:[e?"Hide":"Show"," floating window"]}),e&&(0,g.jsxs)(S,{withBorder:!0,constrainOffset:40,dimensions:{initialWidth:260,maxWidth:500,minWidth:180,initialHeight:260,maxHeight:400,minHeight:220},dragHandleSelector:".drag-handle",excludeDragHandleSelector:"button",initialPosition:{top:300,left:60},style:{overflow:"hidden"},children:[(0,g.jsxs)(W.Group,{justify:"space-between",px:"md",py:"sm",className:"drag-handle",style:{cursor:"move"},children:[(0,g.jsx)(H.Text,{fw:500,fz:"sm",children:"Resize demo"}),(0,g.jsx)(n.CloseButton,{onClick:t.close})]}),(0,g.jsx)(H.Text,{fz:"sm",px:"md",pb:"sm",children:"Drag the grip icon in the bottom-right corner to resize. Use Arrow keys when the handle is focused: Left/Right for width, Up/Down for height."}),(0,g.jsx)(S.ResizeHandle,{"aria-label":"Resize floating window",style:{position:"absolute",right:0,bottom:0,width:20,height:20,display:"flex",alignItems:"center",justifyContent:"center",cursor:"nwse-resize"},children:(0,g.jsx)(N,{size:14,style:{opacity:.5}})})]})]})},code:`
import { NotchesIcon } from '@phosphor-icons/react';
import { Button, CloseButton, FloatingWindow, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [visible, handlers] = useDisclosure();

  return (
    <>
      <Button onClick={handlers.toggle} variant="default">
        {visible ? 'Hide' : 'Show'} floating window
      </Button>

      {visible && (
        <FloatingWindow
          withBorder
          constrainOffset={40}
          dimensions={{
            initialWidth: 260,
            maxWidth: 500,
            minWidth: 180,
            initialHeight: 260,
            maxHeight: 400,
            minHeight: 220,
          }}
          dragHandleSelector=".drag-handle"
          excludeDragHandleSelector="button"
          initialPosition={{ top: 300, left: 60 }}
          style={{ overflow: 'hidden' }}
        >
          <Group
            justify="space-between"
            px="md"
            py="sm"
            className="drag-handle"
            style={{ cursor: 'move' }}
          >
            <Text fw={500} fz="sm">
              Resize demo
            </Text>
            <CloseButton onClick={handlers.close} />
          </Group>
          <Text fz="sm" px="md" pb="sm">
            Drag the grip icon in the bottom-right corner to resize.
            Use Arrow keys when the handle is focused:
            Left/Right for width, Up/Down for height.
          </Text>
          <FloatingWindow.ResizeHandle
            aria-label="Resize floating window"
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              width: 20,
              height: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'nwse-resize',
            }}
          >
            <NotchesIcon size={14} style={{ opacity: 0.5 }} />
          </FloatingWindow.ResizeHandle>
        </FloatingWindow>
      )}
    </>
  );
}
`,centered:!0};var Y=(0,t.__exportAll)({axis:()=>z,constrainOffset:()=>E,constrainToViewport:()=>R,dragHandleSelector:()=>V,enabled:()=>A,resizeHandle:()=>U,setPosition:()=>M,usage:()=>F});e.s(["FloatingWindowDemos",0,Y],119764)},972839,e=>{"use strict";var t=e.i(648863),o=e.i(485108),n=e.i(802046),i=e.i(725695),s=e.i(470743),r=e.i(927501),l=e.i(883364),a=e.i(391398),d=e.i(541772),u=e.i(378073);let c={type:"code",component:function(){let[e,t]=(0,d.useDisclosure)(),c=(0,u.useFloatingWindow)({constrainToViewport:!0,constrainOffset:20,excludeDragHandleSelector:"button",initialPosition:{top:300,left:20}});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.Button,{onClick:t.toggle,variant:"default",children:[e?"Hide":"Show"," floating window"]}),e&&(0,a.jsx)(r.Portal,{children:(0,a.jsxs)(s.Paper,{w:280,p:"md",withBorder:!0,pos:"fixed",style:{cursor:"move",transition:"box-shadow 70ms ease",zIndex:400},shadow:c.isDragging?"md":void 0,ref:c.ref,children:[(0,a.jsxs)(i.Group,{justify:"space-between",mb:"md",children:[(0,a.jsx)(l.Text,{children:"Usage demo"}),(0,a.jsx)(n.CloseButton,{onClick:t.close})]}),(0,a.jsx)(l.Text,{fz:"sm",children:"This is a floating window. You can drag it around."})]})})]})},code:`
import { Button, CloseButton, Group, Paper, Portal, Text } from '@mantine/core';
import { useDisclosure, useFloatingWindow } from '@mantine/hooks';

function Demo() {
  const [visible, handlers] = useDisclosure();
  const floatingWindow = useFloatingWindow({
    constrainToViewport: true,
    constrainOffset: 20,
    excludeDragHandleSelector: 'button',
    initialPosition: { top: 300, left: 20 },
  });

  return (
    <>
      <Button onClick={handlers.toggle} variant="default">
        {visible ? 'Hide' : 'Show'} floating window
      </Button>

      {visible && (
        <Portal>
          <Paper
            w={280}
            p="md"
            withBorder
            pos="fixed"
            style={{ cursor: 'move', transition: 'box-shadow 70ms ease', zIndex: 400 }}
            shadow={floatingWindow.isDragging ? 'md' : undefined}
            ref={floatingWindow.ref}
          >
            <Group justify="space-between" mb="md">
              <Text>Usage demo</Text>
              <CloseButton onClick={handlers.close} />
            </Group>
            <Text fz="sm">This is a floating window. You can drag it around.</Text>
          </Paper>
        </Portal>
      )}
    </>
  );
}
`,centered:!0},h={type:"code",component:function(){let[e,t]=(0,d.useDisclosure)(),c=(0,u.useFloatingWindow)({constrainToViewport:!0,constrainOffset:20,excludeDragHandleSelector:"button",initialPosition:{top:300,left:20}});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.Group,{children:[(0,a.jsxs)(o.Button,{onClick:t.toggle,variant:"default",children:[e?"Hide":"Show"," floating window"]}),(0,a.jsx)(o.Button,{onClick:()=>c.setPosition({bottom:40,right:40}),variant:"default",children:"Set position to bottom right corner"})]}),e&&(0,a.jsx)(r.Portal,{children:(0,a.jsxs)(s.Paper,{w:280,p:"md",withBorder:!0,pos:"fixed",style:{cursor:"move",transition:"box-shadow 70ms ease",zIndex:400},shadow:c.isDragging?"md":void 0,ref:c.ref,children:[(0,a.jsxs)(i.Group,{justify:"space-between",mb:"md",children:[(0,a.jsx)(l.Text,{children:"Set position demo"}),(0,a.jsx)(n.CloseButton,{onClick:t.close})]}),(0,a.jsx)(l.Text,{fz:"sm",children:"This is a floating window. You can drag it around."})]})})]})},code:`
import { Button, CloseButton, Group, Paper, Portal, Text } from '@mantine/core';
import { useDisclosure, useFloatingWindow } from '@mantine/hooks';

function Demo() {
  const [visible, handlers] = useDisclosure();
  const floatingWindow = useFloatingWindow({
    constrainToViewport: true,
    constrainOffset: 20,
    excludeDragHandleSelector: 'button',
    initialPosition: { top: 300, left: 20 },
  });

  return (
    <>
      <Group>
        <Button onClick={handlers.toggle} variant="default">
          {visible ? 'Hide' : 'Show'} floating window
        </Button>
        <Button
          onClick={() => floatingWindow.setPosition({ bottom: 40, right: 40 })}
          variant="default"
        >
          Set position to bottom right corner
        </Button>
      </Group>

      {visible && (
        <Portal>
          <Paper
            w={280}
            p="md"
            withBorder
            pos="fixed"
            style={{ cursor: 'move', transition: 'box-shadow 70ms ease', zIndex: 400 }}
            shadow={floatingWindow.isDragging ? 'md' : undefined}
            ref={floatingWindow.ref}
          >
            <Group justify="space-between" mb="md">
              <Text>Set position demo</Text>
              <CloseButton onClick={handlers.close} />
            </Group>
            <Text fz="sm">This is a floating window. You can drag it around.</Text>
          </Paper>
        </Portal>
      )}
    </>
  );
}
`,centered:!0};var m=e.i(191788),f=e.i(653122);let g={type:"code",component:function(){let[e,t]=(0,d.useDisclosure)(),[c,h]=(0,m.useState)(!0),g=(0,u.useFloatingWindow)({enabled:c,constrainToViewport:!0,constrainOffset:20,excludeDragHandleSelector:"button",initialPosition:{top:300,left:20}});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.Group,{children:[(0,a.jsxs)(o.Button,{variant:"default",onClick:t.toggle,children:[e?"Hide":"Show"," floating window"]}),(0,a.jsxs)(f.Chip,{checked:c,onChange:()=>h(e=>!e),children:["Drag ",c?"enabled":"disabled"]})]}),e&&(0,a.jsx)(r.Portal,{children:(0,a.jsxs)(s.Paper,{w:280,p:"md",withBorder:!0,pos:"fixed",style:{cursor:"move",transition:"box-shadow 70ms ease",zIndex:400},shadow:g.isDragging?"md":void 0,ref:g.ref,children:[(0,a.jsxs)(i.Group,{justify:"space-between",mb:"md",children:[(0,a.jsx)(l.Text,{children:"Enabled demo"}),(0,a.jsx)(n.CloseButton,{onClick:t.close})]}),(0,a.jsx)(l.Text,{fz:"sm",children:"This is a floating window. You can drag it around."})]})})]})},code:`
import { useState } from 'react';
import { Button, Chip, CloseButton, Group, Paper, Portal, Text } from '@mantine/core';
import { useDisclosure, useFloatingWindow } from '@mantine/hooks';

function Demo() {
  const [visible, handlers] = useDisclosure();
  const [enabled, setEnabled] = useState(true);
  const floatingWindow = useFloatingWindow({
    enabled,
    constrainToViewport: true,
    constrainOffset: 20,
    excludeDragHandleSelector: 'button',
    initialPosition: { top: 300, left: 20 },
  });

  return (
    <>
      <Group>
        <Button variant="default" onClick={handlers.toggle}>
          {visible ? 'Hide' : 'Show'} floating window
        </Button>
        <Chip checked={enabled} onChange={() => setEnabled((e) => !e)}>
          Drag {enabled ? 'enabled' : 'disabled'}
        </Chip>
      </Group>

      {visible && (
        <Portal>
          <Paper
            w={280}
            p="md"
            withBorder
            pos="fixed"
            style={{ cursor: 'move', transition: 'box-shadow 70ms ease', zIndex: 400 }}
            shadow={floatingWindow.isDragging ? 'md' : undefined}
            ref={floatingWindow.ref}
          >
            <Group justify="space-between" mb="md">
              <Text>Enabled demo</Text>
              <CloseButton onClick={handlers.close} />
            </Group>
            <Text fz="sm">This is a floating window. You can drag it around.</Text>
          </Paper>
        </Portal>
      )}
    </>
  );
}
`,centered:!0},w={type:"code",component:function(){let[e,t]=(0,d.useDisclosure)(),c=(0,u.useFloatingWindow)({constrainToViewport:!0,constrainOffset:20,dragHandleSelector:".drag-handle",excludeDragHandleSelector:"button",initialPosition:{top:300,left:20}});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.Button,{onClick:t.toggle,variant:"default",children:[e?"Hide":"Show"," floating window"]}),e&&(0,a.jsx)(r.Portal,{children:(0,a.jsxs)(s.Paper,{w:280,withBorder:!0,pos:"fixed",style:{transition:"box-shadow 70ms ease",zIndex:400},shadow:c.isDragging?"md":void 0,ref:c.ref,children:[(0,a.jsxs)(i.Group,{justify:"space-between",px:"md",py:"sm",className:"drag-handle",style:{cursor:"move"},children:[(0,a.jsx)(l.Text,{children:"Drag handle demo"}),(0,a.jsx)(n.CloseButton,{onClick:t.close})]}),(0,a.jsx)(l.Text,{fz:"sm",px:"md",pb:"sm",children:"Drag floating window around with drag handle element."})]})})]})},code:`
import { Button, CloseButton, Group, Paper, Portal, Text } from '@mantine/core';
import { useDisclosure, useFloatingWindow } from '@mantine/hooks';

function Demo() {
  const [visible, handlers] = useDisclosure();
  const floatingWindow = useFloatingWindow({
    constrainToViewport: true,
    constrainOffset: 20,
    dragHandleSelector: '.drag-handle',
    excludeDragHandleSelector: 'button',
    initialPosition: { top: 300, left: 20 },
  });

  return (
    <>
      <Button onClick={handlers.toggle} variant="default">
        {visible ? 'Hide' : 'Show'} floating window
      </Button>

      {visible && (
        <Portal>
          <Paper
            w={280}
            withBorder
            pos="fixed"
            style={{ transition: 'box-shadow 70ms ease', zIndex: 400 }}
            shadow={floatingWindow.isDragging ? 'md' : undefined}
            ref={floatingWindow.ref}
          >
            <Group
              justify="space-between"
              px="md"
              py="sm"
              className="drag-handle"
              style={{ cursor: 'move' }}
            >
              <Text>Drag handle demo</Text>
              <CloseButton onClick={handlers.close} />
            </Group>
            <Text fz="sm" px="md" pb="sm">
              Drag floating window around with drag handle element.
            </Text>
          </Paper>
        </Portal>
      )}
    </>
  );
}
`,centered:!0},p={type:"code",component:function(){let[e,t]=(0,d.useDisclosure)(),c=(0,u.useFloatingWindow)({constrainToViewport:!1,excludeDragHandleSelector:"button",initialPosition:{top:300,left:20}});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.Button,{onClick:t.toggle,variant:"default",children:[e?"Hide":"Show"," floating window"]}),e&&(0,a.jsx)(r.Portal,{children:(0,a.jsxs)(s.Paper,{w:280,p:"md",withBorder:!0,pos:"fixed",style:{cursor:"move",transition:"box-shadow 70ms ease",zIndex:400},shadow:c.isDragging?"md":void 0,ref:c.ref,children:[(0,a.jsxs)(i.Group,{justify:"space-between",mb:"md",children:[(0,a.jsx)(l.Text,{children:"No constrain demo"}),(0,a.jsx)(n.CloseButton,{onClick:t.close})]}),(0,a.jsx)(l.Text,{fz:"sm",children:"The floating window is not constrained by the viewport, it can move out of bounds."})]})})]})},code:`
import { Button, CloseButton, Group, Paper, Portal, Text } from '@mantine/core';
import { useDisclosure, useFloatingWindow } from '@mantine/hooks';

function Demo() {
  const [visible, handlers] = useDisclosure();
  const floatingWindow = useFloatingWindow({
    constrainToViewport: false,
    excludeDragHandleSelector: 'button',
    initialPosition: { top: 300, left: 20 },
  });

  return (
    <>
      <Button onClick={handlers.toggle} variant="default">
        {visible ? 'Hide' : 'Show'} floating window
      </Button>

      {visible && (
        <Portal>
          <Paper
            w={280}
            p="md"
            withBorder
            pos="fixed"
            style={{ cursor: 'move', transition: 'box-shadow 70ms ease', zIndex: 400 }}
            shadow={floatingWindow.isDragging ? 'md' : undefined}
            ref={floatingWindow.ref}
          >
            <Group justify="space-between" mb="md">
              <Text>No constrain demo</Text>
              <CloseButton onClick={handlers.close} />
            </Group>
            <Text fz="sm">
              The floating window is not constrained by the viewport, it can move out of bounds.
            </Text>
          </Paper>
        </Portal>
      )}
    </>
  );
}
`,centered:!0},x={type:"code",component:function(){let[e,t]=(0,d.useDisclosure)(),c=(0,u.useFloatingWindow)({constrainToViewport:!0,constrainOffset:30,excludeDragHandleSelector:"button",initialPosition:{top:300,left:30}});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.Button,{onClick:t.toggle,variant:"default",children:[e?"Hide":"Show"," floating window"]}),e&&(0,a.jsx)(r.Portal,{children:(0,a.jsxs)(s.Paper,{w:280,p:"md",withBorder:!0,pos:"fixed",style:{cursor:"move",transition:"box-shadow 70ms ease",zIndex:400},shadow:c.isDragging?"md":void 0,ref:c.ref,children:[(0,a.jsxs)(i.Group,{justify:"space-between",mb:"md",children:[(0,a.jsx)(l.Text,{children:"Constrain offset demo"}),(0,a.jsx)(n.CloseButton,{onClick:t.close})]}),(0,a.jsx)(l.Text,{fz:"sm",children:"This floating window has 30px offset, it cannot move closer that 30px to the edge of the viewport."})]})})]})},code:`
import { Button, CloseButton, Group, Paper, Portal, Text } from '@mantine/core';
import { useDisclosure, useFloatingWindow } from '@mantine/hooks';

function Demo() {
  const [visible, handlers] = useDisclosure();
  const floatingWindow = useFloatingWindow({
    constrainToViewport: true,
    constrainOffset: 30,
    excludeDragHandleSelector: 'button',
    initialPosition: { top: 300, left: 30 },
  });

  return (
    <>
      <Button onClick={handlers.toggle} variant="default">
        {visible ? 'Hide' : 'Show'} floating window
      </Button>

      {visible && (
        <Portal>
          <Paper
            w={280}
            p="md"
            withBorder
            pos="fixed"
            style={{ cursor: 'move', transition: 'box-shadow 70ms ease', zIndex: 400 }}
            shadow={floatingWindow.isDragging ? 'md' : undefined}
            ref={floatingWindow.ref}
          >
            <Group justify="space-between" mb="md">
              <Text>Constrain offset demo</Text>
              <CloseButton onClick={handlers.close} />
            </Group>
            <Text fz="sm">
              This floating window has 30px offset, it cannot move closer that 30px to the edge of
              the viewport.
            </Text>
          </Paper>
        </Portal>
      )}
    </>
  );
}
`,centered:!0};var b=e.i(892791);let v={type:"code",component:function(){let[e,t]=(0,d.useDisclosure)(),[c,h]=(0,m.useState)("y"),f=(0,u.useFloatingWindow)({axis:c,constrainToViewport:!0,constrainOffset:20,excludeDragHandleSelector:"button",initialPosition:{top:300,left:20}});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.Group,{children:[(0,a.jsxs)(o.Button,{onClick:t.toggle,variant:"default",children:[e?"Hide":"Show"," floating window"]}),(0,a.jsx)(b.SegmentedControl,{data:["x","y"],onChange:e=>h(e),value:c})]}),e&&(0,a.jsx)(r.Portal,{children:(0,a.jsxs)(s.Paper,{w:280,p:"md",withBorder:!0,pos:"fixed",style:{cursor:"move",transition:"box-shadow 70ms ease",zIndex:400},shadow:f.isDragging?"md":void 0,ref:f.ref,children:[(0,a.jsxs)(i.Group,{justify:"space-between",mb:"md",children:[(0,a.jsx)(l.Text,{children:"Axis demo"}),(0,a.jsx)(n.CloseButton,{onClick:t.close})]}),(0,a.jsx)(l.Text,{fz:"sm",children:"When you set axis prop, the floating window can be dragged only horizontally or vertically."})]})})]})},code:`
import { useState } from 'react';
import { Button, CloseButton, Group, Paper, Portal, SegmentedControl, Text } from '@mantine/core';
import { useDisclosure, useFloatingWindow } from '@mantine/hooks';

function Demo() {
  const [visible, handlers] = useDisclosure();
  const [axis, setAxis] = useState<'x' | 'y'>('y');
  const floatingWindow = useFloatingWindow({
    axis,
    constrainToViewport: true,
    constrainOffset: 20,
    excludeDragHandleSelector: 'button',
    initialPosition: { top: 300, left: 20 },
  });

  return (
    <>
      <Group>
        <Button onClick={handlers.toggle} variant="default">
          {visible ? 'Hide' : 'Show'} floating window
        </Button>
        <SegmentedControl data={['x', 'y']} onChange={(val) => setAxis(val as 'x')} value={axis} />
      </Group>

      {visible && (
        <Portal>
          <Paper
            w={280}
            p="md"
            withBorder
            pos="fixed"
            style={{ cursor: 'move', transition: 'box-shadow 70ms ease', zIndex: 400 }}
            shadow={floatingWindow.isDragging ? 'md' : undefined}
            ref={floatingWindow.ref}
          >
            <Group justify="space-between" mb="md">
              <Text>Axis demo</Text>
              <CloseButton onClick={handlers.close} />
            </Group>
            <Text fz="sm">
              When you set axis prop, the floating window can be dragged only horizontally or
              vertically.
            </Text>
          </Paper>
        </Portal>
      )}
    </>
  );
}
`,centered:!0};var y=(0,t.__exportAll)({axis:()=>v,constrainOffset:()=>x,constrainToViewport:()=>p,dragHandleSelector:()=>w,enabled:()=>g,setPosition:()=>h,usage:()=>c});e.s(["UseFloatingWindowDemos",0,y],972839)}]);