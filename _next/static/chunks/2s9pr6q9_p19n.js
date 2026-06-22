(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,995424,166787,e=>{"use strict";var t=e.i(648863),o=e.i(485108),n=e.i(802046),i=e.i(749218),s=e.i(44091),r=e.i(391466),l=e.i(275519),a=e.i(470743),d=e.i(164483),c={root:"m_df020499"},u=e.i(191788);function f(e={}){var t;let o,[n,i]=(0,u.useState)(null),s=(0,u.useRef)(null),r=(0,u.useRef)({x:0,y:0}),l=(0,u.useRef)({x:0,y:0}),[a,d]=(0,u.useState)(!1),c=(0,u.useRef)(!1),p=(0,u.useRef)(!1),x=(t=e.enabled,(o=(0,u.useRef)(t)).current=t,o),b=(0,u.useCallback)(e=>{d(e),c.current=e},[]),v=(0,u.useCallback)(e=>{e?(s.current=e,i(e)):(s.current=null,i(null))},[]);return(0,u.useEffect)(()=>{var t,o;let n,i,l,a,d,c,u,f,g,h,x,b=s.current;return!p.current&&b&&(p.current=!0,t=b,o=e,n=t.getBoundingClientRect(),i=o.constrainOffset??0,l=window.innerWidth,a=window.innerHeight,d=window.getComputedStyle(t),c=o.initialPosition?.top,u=o.initialPosition?.left,f=o.initialPosition?.right,g=o.initialPosition?.bottom,h=i,x=i,h=null!=u?u:null!=f?l-n.width-f:m(d.left)||l-n.width-m(d.right)||i,x=null!=c?c:null!=g?a-n.height-g:m(d.top)||a-n.height-m(d.bottom)||i,r.current=o.constrainToViewport?w(h,x,t,o.constrainOffset):{x:h,y:x},b.style.left=`${r.current.x}px`,b.style.top=`${r.current.y}px`,b.style.right="unset",b.style.bottom="unset"),()=>{p.current=!1}},[n,e.constrainOffset,e.initialPosition?.top,e.initialPosition?.left,e.initialPosition?.right,e.initialPosition?.bottom,e.constrainToViewport]),(0,u.useEffect)(()=>{let t=s.current;if(!t)return;let o=new AbortController,n=o.signal,i=o=>{var i,s,r;if(!1===x.current)return;let c="touches"in o?o.touches[0]:o;if("button"in o&&0!==o.button||(i=t,s=o.target,r=e,!(s instanceof Node&&(r.dragHandleSelector?Array.from(i.querySelectorAll(r.dragHandleSelector)).some(e=>e.contains(s)&&!h(s,r.excludeDragHandleSelector)):!h(s,r.excludeDragHandleSelector)))))return;b(!0),document.body.style.userSelect="none",document.body.style.webkitUserSelect="none";let u=t.getBoundingClientRect();l.current={x:c.clientX-u.left,y:c.clientY-u.top},e.onDragStart?.(),document.addEventListener("mousemove",a,{signal:n}),document.addEventListener("mouseup",d,{signal:n}),document.addEventListener("touchmove",a,{signal:n,passive:!1}),document.addEventListener("touchend",d,{signal:n})},a=o=>{if(!c.current)return;let n="touches"in o?o.touches[0]:o;o.preventDefault();let i=n.clientX-l.current.x,a=n.clientY-l.current.y,d=g(t,{x:i,y:a},e);"x"===e.axis?(i=d.x,a=r.current.y):(i="y"===e.axis?r.current.x:d.x,a=d.y),r.current={x:i,y:a},s.current&&(s.current.style.left=`${i}px`,s.current.style.top=`${a}px`),e.onPositionChange?.({x:i,y:a})},d=()=>{c.current&&(b(!1),document.body.style.userSelect="",document.body.style.webkitUserSelect="",e.onDragEnd?.())};return t.addEventListener("mousedown",i,{signal:n}),t.addEventListener("touchstart",i,{signal:n,passive:!1}),()=>{o.abort()}},[e.constrainToViewport,e.constrainOffset,e.dragHandleSelector,e.axis,e.onPositionChange,e.onDragStart,e.onDragEnd,e.initialPosition?.top,e.initialPosition?.left,e.initialPosition?.right,e.initialPosition?.bottom,n]),(0,u.useEffect)(()=>{let t=s.current;if(!t)return;let o=new ResizeObserver(()=>{let o=g(t,r.current,e);r.current=o,t.style.left=`${o.x}px`,t.style.top=`${o.y}px`});return o.observe(t),()=>{o.disconnect()}},[e.constrainToViewport,e.constrainOffset]),{ref:v,setPosition:(0,u.useCallback)(t=>{let o,n,i=s.current;if(!i)return;let l=e.constrainOffset??0,a=i.getBoundingClientRect();if(null!=t.left?o=t.left:null!=t.right&&(o=window.innerWidth-a.width-t.right),null!=t.top?n=t.top:null!=t.bottom&&(n=window.innerHeight-a.height-t.bottom),o=o??r.current.x,n=n??r.current.y,e.constrainToViewport){let e=w(o,n,i,l);o=e.x,n=e.y}r.current={x:o,y:n},i.style.left=`${o}px`,i.style.top=`${n}px`,e.onPositionChange?.({x:o,y:n})},[e.constrainToViewport,e.constrainOffset,e.onPositionChange]),isDragging:a}}function m(e){return e.endsWith("px")?parseFloat(e):0}function g(e,t,o){if(!o.constrainToViewport||!e)return t;let n=e.getBoundingClientRect(),i=o.constrainOffset??0,s=window.innerWidth-n.width-i,r=window.innerHeight-n.height-i;return{x:Math.min(Math.max(i,t.x),s),y:Math.min(Math.max(i,t.y),r)}}function h(e,t){return!!t&&e instanceof Element&&!!e.closest(t)}function w(e,t,o,n=0){let i=o.getBoundingClientRect(),s=window.innerWidth-i.width-n,r=window.innerHeight-i.height-n;return{x:Math.min(Math.max(n,e),s),y:Math.min(Math.max(n,t),r)}}var p=e.i(332977),x=e.i(391398);let b={constrainToViewport:!0,zIndex:(0,i.getDefaultZIndex)("overlay")},v=(0,l.factory)(e=>{let t=(0,s.useProps)("FloatingWindow",b,e),{classNames:o,className:n,style:i,styles:l,unstyled:m,vars:g,mod:h,enabled:w,constrainToViewport:v,constrainOffset:j,dragHandleSelector:y,excludeDragHandleSelector:T,axis:C,initialPosition:B,onPositionChange:P,onDragStart:D,onDragEnd:S,setPositionRef:k,withinPortal:G,portalProps:W,zIndex:H,ref:F,...z}=t,O=(0,r.useStyles)({name:"FloatingWindow",classes:c,props:t,className:n,style:i,classNames:o,styles:l,unstyled:m,vars:g}),V=f({enabled:w,constrainToViewport:v,constrainOffset:j,dragHandleSelector:y,excludeDragHandleSelector:T,axis:C,initialPosition:B,onPositionChange:P,onDragStart:D,onDragEnd:S});return(0,u.useImperativeHandle)(k,()=>V.setPosition,[V.setPosition]),(0,x.jsx)(d.OptionalPortal,{withinPortal:G,...W,children:(0,x.jsx)(a.Paper,{ref:(0,p.useMergedRef)(F,V.ref),mod:[{dragging:V.isDragging},h],...O("root"),...z,__vars:{"--floating-window-z-index":H.toString()}})})});v.displayName="@mantine/core/FloatingWindow",v.classes=c;var j=e.i(725695),y=e.i(883364),T=e.i(541772);let C={type:"code",component:function(){let[e,t]=(0,T.useDisclosure)();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(o.Button,{onClick:t.toggle,variant:"default",children:[e?"Hide":"Show"," floating window"]}),e&&(0,x.jsxs)(v,{w:280,p:"md",withBorder:!0,excludeDragHandleSelector:"button",initialPosition:{top:300,left:20},style:{cursor:"move"},children:[(0,x.jsxs)(j.Group,{justify:"space-between",mb:"md",children:[(0,x.jsx)(y.Text,{children:"Usage demo"}),(0,x.jsx)(n.CloseButton,{onClick:t.close})]}),(0,x.jsx)(y.Text,{fz:"sm",children:"This is a floating window. You can drag it around."})]})]})},code:`
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
`,centered:!0};var B=e.i(892791);let P={type:"code",component:function(){let[e,t]=(0,T.useDisclosure)(),[i,s]=(0,u.useState)("y");return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(j.Group,{children:[(0,x.jsxs)(o.Button,{onClick:t.toggle,variant:"default",children:[e?"Hide":"Show"," floating window"]}),(0,x.jsx)(B.SegmentedControl,{data:["x","y"],onChange:e=>s(e),value:i})]}),e&&(0,x.jsxs)(v,{w:280,p:"md",withBorder:!0,excludeDragHandleSelector:"button",initialPosition:{top:200,left:40},style:{cursor:"move"},axis:i,children:[(0,x.jsxs)(j.Group,{justify:"space-between",mb:"md",children:[(0,x.jsx)(y.Text,{children:"Axis demo"}),(0,x.jsx)(n.CloseButton,{onClick:t.close})]}),(0,x.jsx)(y.Text,{fz:"sm",children:"When you set axis prop, the floating window can be dragged only horizontally or vertically."})]})]})},code:`
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
`,centered:!0},D={type:"code",component:function(){let[e,t]=(0,T.useDisclosure)();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(o.Button,{onClick:t.toggle,variant:"default",children:[e?"Hide":"Show"," floating window"]}),e&&(0,x.jsxs)(v,{w:280,p:"md",withBorder:!0,excludeDragHandleSelector:"button",initialPosition:{top:300,left:20},style:{cursor:"move"},constrainToViewport:!1,children:[(0,x.jsxs)(j.Group,{justify:"space-between",mb:"md",children:[(0,x.jsx)(y.Text,{children:"No constrain demo"}),(0,x.jsx)(n.CloseButton,{onClick:t.close})]}),(0,x.jsx)(y.Text,{fz:"sm",children:"The floating window is not constrained by the viewport, it can move out of bounds."})]})]})},code:`
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
`,centered:!0},S={type:"code",component:function(){let[e,t]=(0,T.useDisclosure)();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(o.Button,{onClick:t.toggle,variant:"default",children:[e?"Hide":"Show"," floating window"]}),e&&(0,x.jsxs)(v,{w:280,p:"md",withBorder:!0,excludeDragHandleSelector:"button",initialPosition:{top:300,left:30},style:{cursor:"move"},constrainToViewport:!0,constrainOffset:30,children:[(0,x.jsxs)(j.Group,{justify:"space-between",mb:"md",children:[(0,x.jsx)(y.Text,{children:"Constrain offset demo"}),(0,x.jsx)(n.CloseButton,{onClick:t.close})]}),(0,x.jsx)(y.Text,{fz:"sm",children:"This floating window has 30px offset, it cannot move closer that 30px to the edge of the viewport."})]})]})},code:`
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
`,centered:!0},k={type:"code",component:function(){let[e,t]=(0,T.useDisclosure)();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(o.Button,{onClick:t.toggle,variant:"default",children:[e?"Hide":"Show"," floating window"]}),e&&(0,x.jsxs)(v,{w:280,withBorder:!0,dragHandleSelector:".drag-handle",excludeDragHandleSelector:"button",initialPosition:{top:300,left:20},children:[(0,x.jsxs)(j.Group,{justify:"space-between",px:"md",py:"sm",className:"drag-handle",style:{cursor:"move"},children:[(0,x.jsx)(y.Text,{children:"Drag handle demo"}),(0,x.jsx)(n.CloseButton,{onClick:t.close})]}),(0,x.jsx)(y.Text,{fz:"sm",px:"md",pb:"sm",children:"Drag floating window around with drag handle element."})]})]})},code:`
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
`,centered:!0};var G=e.i(653122);let W={type:"code",component:function(){let[e,t]=(0,T.useDisclosure)(),[i,s]=(0,u.useState)(!0);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(j.Group,{children:[(0,x.jsxs)(o.Button,{variant:"default",onClick:t.toggle,children:[e?"Hide":"Show"," floating window"]}),(0,x.jsxs)(G.Chip,{checked:i,onChange:()=>s(e=>!e),children:["Drag ",i?"enabled":"disabled"]})]}),e&&(0,x.jsxs)(v,{w:280,p:"md",withBorder:!0,excludeDragHandleSelector:"button",initialPosition:{top:300,left:20},style:{cursor:"move"},enabled:i,children:[(0,x.jsxs)(j.Group,{justify:"space-between",mb:"md",children:[(0,x.jsx)(y.Text,{children:"Enabled demo"}),(0,x.jsx)(n.CloseButton,{onClick:t.close})]}),(0,x.jsx)(y.Text,{fz:"sm",children:"This is a floating window. You can drag it around."})]})]})},code:`
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
`,centered:!0},H={type:"code",component:function(){let[e,t]=(0,T.useDisclosure)(),i=(0,u.useRef)(null);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(j.Group,{children:[(0,x.jsxs)(o.Button,{onClick:t.toggle,variant:"default",children:[e?"Hide":"Show"," floating window"]}),(0,x.jsx)(o.Button,{onClick:()=>{i.current?.({bottom:40,right:40})},variant:"default",children:"Set position to bottom right corner"})]}),e&&(0,x.jsxs)(v,{w:280,p:"md",withBorder:!0,excludeDragHandleSelector:"button",initialPosition:{top:300,left:20},style:{cursor:"move"},setPositionRef:i,children:[(0,x.jsxs)(j.Group,{justify:"space-between",mb:"md",children:[(0,x.jsx)(y.Text,{children:"Set position demo"}),(0,x.jsx)(n.CloseButton,{onClick:t.close})]}),(0,x.jsx)(y.Text,{fz:"sm",children:"You can control floating window position programmatically with setPositionRef."})]})]})},code:`
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
`,centered:!0};var F=(0,t.__exportAll)({axis:()=>P,constrainOffset:()=>S,constrainToViewport:()=>D,dragHandleSelector:()=>k,enabled:()=>W,setPosition:()=>H,usage:()=>C});e.s(["FloatingWindowDemos",0,F],995424);var z=e.i(927501);let O={type:"code",component:function(){let[e,t]=(0,T.useDisclosure)(),i=f({constrainToViewport:!0,constrainOffset:20,excludeDragHandleSelector:"button",initialPosition:{top:300,left:20}});return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(o.Button,{onClick:t.toggle,variant:"default",children:[e?"Hide":"Show"," floating window"]}),e&&(0,x.jsx)(z.Portal,{children:(0,x.jsxs)(a.Paper,{w:280,p:"md",withBorder:!0,pos:"fixed",style:{cursor:"move",transition:"box-shadow 70ms ease",zIndex:400},shadow:i.isDragging?"md":void 0,ref:i.ref,children:[(0,x.jsxs)(j.Group,{justify:"space-between",mb:"md",children:[(0,x.jsx)(y.Text,{children:"Usage demo"}),(0,x.jsx)(n.CloseButton,{onClick:t.close})]}),(0,x.jsx)(y.Text,{fz:"sm",children:"This is a floating window. You can drag it around."})]})})]})},code:`
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
`,centered:!0},V={type:"code",component:function(){let[e,t]=(0,T.useDisclosure)(),i=f({constrainToViewport:!0,constrainOffset:20,excludeDragHandleSelector:"button",initialPosition:{top:300,left:20}});return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(j.Group,{children:[(0,x.jsxs)(o.Button,{onClick:t.toggle,variant:"default",children:[e?"Hide":"Show"," floating window"]}),(0,x.jsx)(o.Button,{onClick:()=>i.setPosition({bottom:40,right:40}),variant:"default",children:"Set position to bottom right corner"})]}),e&&(0,x.jsx)(z.Portal,{children:(0,x.jsxs)(a.Paper,{w:280,p:"md",withBorder:!0,pos:"fixed",style:{cursor:"move",transition:"box-shadow 70ms ease",zIndex:400},shadow:i.isDragging?"md":void 0,ref:i.ref,children:[(0,x.jsxs)(j.Group,{justify:"space-between",mb:"md",children:[(0,x.jsx)(y.Text,{children:"Set position demo"}),(0,x.jsx)(n.CloseButton,{onClick:t.close})]}),(0,x.jsx)(y.Text,{fz:"sm",children:"This is a floating window. You can drag it around."})]})})]})},code:`
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
`,centered:!0},R={type:"code",component:function(){let[e,t]=(0,T.useDisclosure)(),[i,s]=(0,u.useState)(!0),r=f({enabled:i,constrainToViewport:!0,constrainOffset:20,excludeDragHandleSelector:"button",initialPosition:{top:300,left:20}});return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(j.Group,{children:[(0,x.jsxs)(o.Button,{variant:"default",onClick:t.toggle,children:[e?"Hide":"Show"," floating window"]}),(0,x.jsxs)(G.Chip,{checked:i,onChange:()=>s(e=>!e),children:["Drag ",i?"enabled":"disabled"]})]}),e&&(0,x.jsx)(z.Portal,{children:(0,x.jsxs)(a.Paper,{w:280,p:"md",withBorder:!0,pos:"fixed",style:{cursor:"move",transition:"box-shadow 70ms ease",zIndex:400},shadow:r.isDragging?"md":void 0,ref:r.ref,children:[(0,x.jsxs)(j.Group,{justify:"space-between",mb:"md",children:[(0,x.jsx)(y.Text,{children:"Enabled demo"}),(0,x.jsx)(n.CloseButton,{onClick:t.close})]}),(0,x.jsx)(y.Text,{fz:"sm",children:"This is a floating window. You can drag it around."})]})})]})},code:`
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
`,centered:!0},E={type:"code",component:function(){let[e,t]=(0,T.useDisclosure)(),i=f({constrainToViewport:!0,constrainOffset:20,dragHandleSelector:".drag-handle",excludeDragHandleSelector:"button",initialPosition:{top:300,left:20}});return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(o.Button,{onClick:t.toggle,variant:"default",children:[e?"Hide":"Show"," floating window"]}),e&&(0,x.jsx)(z.Portal,{children:(0,x.jsxs)(a.Paper,{w:280,withBorder:!0,pos:"fixed",style:{transition:"box-shadow 70ms ease",zIndex:400},shadow:i.isDragging?"md":void 0,ref:i.ref,children:[(0,x.jsxs)(j.Group,{justify:"space-between",px:"md",py:"sm",className:"drag-handle",style:{cursor:"move"},children:[(0,x.jsx)(y.Text,{children:"Drag handle demo"}),(0,x.jsx)(n.CloseButton,{onClick:t.close})]}),(0,x.jsx)(y.Text,{fz:"sm",px:"md",pb:"sm",children:"Drag floating window around with drag handle element."})]})})]})},code:`
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
`,centered:!0},I={type:"code",component:function(){let[e,t]=(0,T.useDisclosure)(),i=f({constrainToViewport:!1,excludeDragHandleSelector:"button",initialPosition:{top:300,left:20}});return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(o.Button,{onClick:t.toggle,variant:"default",children:[e?"Hide":"Show"," floating window"]}),e&&(0,x.jsx)(z.Portal,{children:(0,x.jsxs)(a.Paper,{w:280,p:"md",withBorder:!0,pos:"fixed",style:{cursor:"move",transition:"box-shadow 70ms ease",zIndex:400},shadow:i.isDragging?"md":void 0,ref:i.ref,children:[(0,x.jsxs)(j.Group,{justify:"space-between",mb:"md",children:[(0,x.jsx)(y.Text,{children:"No constrain demo"}),(0,x.jsx)(n.CloseButton,{onClick:t.close})]}),(0,x.jsx)(y.Text,{fz:"sm",children:"The floating window is not constrained by the viewport, it can move out of bounds."})]})})]})},code:`
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
`,centered:!0},A={type:"code",component:function(){let[e,t]=(0,T.useDisclosure)(),i=f({constrainToViewport:!0,constrainOffset:30,excludeDragHandleSelector:"button",initialPosition:{top:300,left:30}});return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(o.Button,{onClick:t.toggle,variant:"default",children:[e?"Hide":"Show"," floating window"]}),e&&(0,x.jsx)(z.Portal,{children:(0,x.jsxs)(a.Paper,{w:280,p:"md",withBorder:!0,pos:"fixed",style:{cursor:"move",transition:"box-shadow 70ms ease",zIndex:400},shadow:i.isDragging?"md":void 0,ref:i.ref,children:[(0,x.jsxs)(j.Group,{justify:"space-between",mb:"md",children:[(0,x.jsx)(y.Text,{children:"Constrain offset demo"}),(0,x.jsx)(n.CloseButton,{onClick:t.close})]}),(0,x.jsx)(y.Text,{fz:"sm",children:"This floating window has 30px offset, it cannot move closer that 30px to the edge of the viewport."})]})})]})},code:`
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
`,centered:!0},Y={type:"code",component:function(){let[e,t]=(0,T.useDisclosure)(),[i,s]=(0,u.useState)("y"),r=f({axis:i,constrainToViewport:!0,constrainOffset:20,excludeDragHandleSelector:"button",initialPosition:{top:300,left:20}});return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(j.Group,{children:[(0,x.jsxs)(o.Button,{onClick:t.toggle,variant:"default",children:[e?"Hide":"Show"," floating window"]}),(0,x.jsx)(B.SegmentedControl,{data:["x","y"],onChange:e=>s(e),value:i})]}),e&&(0,x.jsx)(z.Portal,{children:(0,x.jsxs)(a.Paper,{w:280,p:"md",withBorder:!0,pos:"fixed",style:{cursor:"move",transition:"box-shadow 70ms ease",zIndex:400},shadow:r.isDragging?"md":void 0,ref:r.ref,children:[(0,x.jsxs)(j.Group,{justify:"space-between",mb:"md",children:[(0,x.jsx)(y.Text,{children:"Axis demo"}),(0,x.jsx)(n.CloseButton,{onClick:t.close})]}),(0,x.jsx)(y.Text,{fz:"sm",children:"When you set axis prop, the floating window can be dragged only horizontally or vertically."})]})})]})},code:`
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
`,centered:!0};var N=(0,t.__exportAll)({axis:()=>Y,constrainOffset:()=>A,constrainToViewport:()=>I,dragHandleSelector:()=>E,enabled:()=>R,setPosition:()=>V,usage:()=>O});e.s(["UseFloatingWindowDemos",0,N],166787)}]);