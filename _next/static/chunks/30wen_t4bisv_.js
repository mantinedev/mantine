(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:"Module"}),r}])},257177,e=>{"use strict";var t=e.i(433512),n=e.i(481178),r=e.i(317477),i=e.i(44091),s=e.i(391466),o=e.i(956449),a=e.i(232471),c={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"},l=e.i(391398);let d=(0,n.createVarsResolver)((e,{radius:n,color:i,gradient:s,variant:o,size:a,autoContrast:c,circle:l})=>{let d=e.variantColorResolver({color:i||e.primaryColor,theme:e,gradient:s,variant:o||"filled",autoContrast:c});return{root:{"--badge-height":(0,t.getSize)(a,"badge-height"),"--badge-padding-x":(0,t.getSize)(a,"badge-padding-x"),"--badge-fz":(0,t.getSize)(a,"badge-fz"),"--badge-radius":l||void 0===n?void 0:(0,t.getRadius)(n),"--badge-bg":i||o?d.background:void 0,"--badge-color":i||o?d.color:void 0,"--badge-bd":i||o?d.border:void 0,"--badge-dot-color":"dot"===o?(0,r.getThemeColor)(i,e):void 0}}}),u=(0,o.polymorphicFactory)(e=>{let t=(0,i.useProps)("Badge",null,e),{classNames:n,className:r,style:o,styles:u,unstyled:m,vars:h,radius:f,color:p,gradient:x,leftSection:g,rightSection:v,children:y,variant:b,fullWidth:j,autoContrast:T,circle:R,mod:D,attributes:w,...S}=t,k=(0,s.useStyles)({name:"Badge",props:t,classes:c,className:r,style:o,classNames:n,styles:u,unstyled:m,attributes:w,vars:h,varsResolver:d});return(0,l.jsxs)(a.Box,{variant:b,mod:[{block:j,circle:R,"with-right-section":!!v,"with-left-section":!!g},D],...k("root",{variant:b}),...S,children:[g&&(0,l.jsx)("span",{...k("section"),"data-position":"left",children:g}),(0,l.jsx)("span",{...k("label"),children:y}),v&&(0,l.jsx)("span",{...k("section"),"data-position":"right",children:v})]})});u.classes=c,u.varsResolver=d,u.displayName="@mantine/core/Badge",e.s(["Badge",0,u],257177)},618875,e=>{"use strict";var t=e.i(191788);function n(e){return e>0?1:e<0?-1:0}function r(e){let t=e??0;return"number"==typeof t?[t,t]:t}e.s(["useDrag",0,function(e,i={}){let[s,o]=(0,t.useState)(!1),a=(0,t.useRef)(e);a.current=e;let c=(0,t.useRef)(i);c.current=i;let l=(0,t.useRef)({isActive:!1,pointerId:-1,startXY:[0,0],prevXY:[0,0],startTimestamp:0,prevTimestamp:0,thresholdMet:!1,firstFired:!1,lockedAxis:null,canceled:!1,lastVelocity:[0,0]}),d=(0,t.useRef)(null);return{ref:(0,t.useCallback)(e=>{if(!e)return;let t=new AbortController,i=e=>{let t=c.current,n=l.current;if("x"===t.axis)return[e[0],0];if("y"===t.axis)return[0,e[1]];if("lock"===t.axis){if(null===n.lockedAxis){let r=t.axisThreshold??1;(Math.abs(e[0])>r||Math.abs(e[1])>r)&&(n.lockedAxis=Math.abs(e[0])>=Math.abs(e[1])?"x":"y")}if("x"===n.lockedAxis)return[e[0],0];if("y"===n.lockedAxis)return[0,e[1]]}return e},s=()=>{let e=l.current;e.isActive=!1,e.pointerId=-1,e.thresholdMet=!1,e.firstFired=!1,e.lockedAxis=null,e.canceled=!1,o(!1),document.body.style.userSelect="",document.body.style.webkitUserSelect="",d.current?.abort(),d.current=null},u=()=>{l.current.isActive&&(l.current.canceled=!0,s())},m=()=>{o(!0),document.body.style.userSelect="none",document.body.style.webkitUserSelect="none"},h=e=>{let t=l.current;if(!t.isActive||e.pointerId!==t.pointerId)return;let s=[e.clientX-t.startXY[0],e.clientY-t.startXY[1]];if(!t.thresholdMet){let[n,i]=r(c.current.threshold);if(Math.abs(s[0])<n&&Math.abs(s[1])<i){t.prevXY=[e.clientX,e.clientY],t.prevTimestamp=e.timeStamp;return}t.thresholdMet=!0,m()}let o=i(s),d=i([e.clientX-t.prevXY[0],e.clientY-t.prevXY[1]]),h=e.timeStamp-t.prevTimestamp,f=h>0?[Math.abs(d[0])/h,Math.abs(d[1])/h]:t.lastVelocity;t.lastVelocity=f;let p=!t.firstFired;t.firstFired=!0,t.prevXY=[e.clientX,e.clientY],t.prevTimestamp=e.timeStamp,a.current({xy:[e.clientX,e.clientY],initial:[...t.startXY],movement:o,delta:d,distance:[Math.abs(o[0]),Math.abs(o[1])],direction:[n(d[0]),n(d[1])],velocity:f,elapsedTime:e.timeStamp-t.startTimestamp,first:p,last:!1,active:!0,tap:!1,canceled:!1,cancel:u,event:e})},f=e=>{let t=l.current;if(!t.isActive||e.pointerId!==t.pointerId)return;let r=c.current;if(!t.thresholdMet){if(r.filterTaps){let s=i([e.clientX-t.startXY[0],e.clientY-t.startXY[1]]),o=[Math.abs(s[0]),Math.abs(s[1])],c=Math.max(o[0],o[1])<(r.tapThreshold??3);a.current({xy:[e.clientX,e.clientY],initial:[...t.startXY],movement:s,delta:s,distance:o,direction:[n(s[0]),n(s[1])],velocity:[0,0],elapsedTime:e.timeStamp-t.startTimestamp,first:!0,last:!0,active:!1,tap:c,canceled:!1,cancel:u,event:e})}s();return}let o=i([e.clientX-t.startXY[0],e.clientY-t.startXY[1]]),d=[Math.abs(o[0]),Math.abs(o[1])],m=i([e.clientX-t.prevXY[0],e.clientY-t.prevXY[1]]),h=e.timeStamp-t.prevTimestamp>100?[0,0]:t.lastVelocity,f=Math.max(d[0],d[1]),p=!0===r.filterTaps&&f<(r.tapThreshold??3);a.current({xy:[e.clientX,e.clientY],initial:[...t.startXY],movement:o,delta:m,distance:d,direction:[n(m[0]),n(m[1])],velocity:h,elapsedTime:e.timeStamp-t.startTimestamp,first:!t.firstFired,last:!0,active:!1,tap:p,canceled:!1,cancel:u,event:e}),s()},p=e=>{let t=l.current;if(!t.isActive||e.pointerId!==t.pointerId)return;let n=i([e.clientX-t.startXY[0],e.clientY-t.startXY[1]]);a.current({xy:[e.clientX,e.clientY],initial:[...t.startXY],movement:n,delta:[0,0],distance:[Math.abs(n[0]),Math.abs(n[1])],direction:[0,0],velocity:[0,0],elapsedTime:e.timeStamp-t.startTimestamp,first:!t.firstFired,last:!0,active:!1,tap:!1,canceled:!0,cancel:u,event:e}),s()};return e.addEventListener("pointerdown",e=>{if(!1===c.current.enabled||0!==e.button||l.current.isActive)return;let t=l.current;t.isActive=!0,t.pointerId=e.pointerId,t.startXY=[e.clientX,e.clientY],t.prevXY=[e.clientX,e.clientY],t.startTimestamp=e.timeStamp,t.prevTimestamp=e.timeStamp,t.thresholdMet=!1,t.firstFired=!1,t.lockedAxis=null,t.canceled=!1,t.lastVelocity=[0,0];let[n,i]=r(c.current.threshold);0===n&&0===i&&(t.thresholdMet=!0,t.firstFired=!0,m(),a.current({xy:[e.clientX,e.clientY],initial:[e.clientX,e.clientY],movement:[0,0],delta:[0,0],distance:[0,0],direction:[0,0],velocity:[0,0],elapsedTime:0,first:!0,last:!1,active:!0,tap:!1,canceled:!1,cancel:u,event:e})),d.current?.abort(),d.current=new AbortController;let s=d.current.signal;document.addEventListener("pointermove",h,{signal:s}),document.addEventListener("pointerup",f,{signal:s}),document.addEventListener("pointercancel",p,{signal:s})},{signal:t.signal}),()=>{t.abort(),d.current?.abort(),d.current=null,l.current.isActive&&(l.current.isActive=!1,o(!1),document.body.style.userSelect="",document.body.style.webkitUserSelect="")}},[]),active:s}}])},184435,e=>{"use strict";var t=e.i(648863),n=e.i(191788),r=e.i(301388),i=e.i(725695),s=e.i(883364),o=e.i(391398),a=e.i(618875);let c={type:"code",code:`
import { useRef, useState } from 'react';
import { Code, Group, Text } from '@mantine/core';
import { useDrag } from '@mantine/hooks';

function Demo() {
  const posRef = useRef({ x: 0, y: 0 });
  const startPosRef = useRef({ x: 0, y: 0 });
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const { ref, active } = useDrag((state) => {
    if (state.first) {
      startPosRef.current = { ...posRef.current };
    }
    const newPos = {
      x: startPosRef.current.x + state.movement[0],
      y: startPosRef.current.y + state.movement[1],
    };
    posRef.current = newPos;
    setPos(newPos);
  });

  return (
    <>
      <Group justify="center">
        <div
          ref={ref}
          style={{
            width: 200,
            height: 120,
            backgroundColor: active
              ? 'var(--mantine-color-teal-filled)'
              : 'var(--mantine-color-blue-filled)',
            borderRadius: 'var(--mantine-radius-md)',
            transform: \`translate(\${pos.x}px, \${pos.y}px)\`,
            cursor: active ? 'grabbing' : 'grab',
            touchAction: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--mantine-color-white)',
            fontWeight: 600,
            userSelect: 'none',
          }}
        >
          Drag me
        </div>
      </Group>
      <Text ta="center" mt="sm" size="sm">
        Position: <Code>{\`{ x: \${Math.round(pos.x)}, y: \${Math.round(pos.y)} }\`}</Code>
      </Text>
    </>
  );
}
`,component:function(){let e=(0,n.useRef)({x:0,y:0}),t=(0,n.useRef)({x:0,y:0}),[c,l]=(0,n.useState)({x:0,y:0}),{ref:d,active:u}=(0,a.useDrag)(n=>{n.first&&(t.current={...e.current});let r={x:t.current.x+n.movement[0],y:t.current.y+n.movement[1]};e.current=r,l(r)});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.Group,{justify:"center",children:(0,o.jsx)("div",{ref:d,style:{width:200,height:120,backgroundColor:u?"var(--mantine-color-teal-filled)":"var(--mantine-color-blue-filled)",borderRadius:"var(--mantine-radius-md)",transform:`translate(${c.x}px, ${c.y}px)`,cursor:u?"grabbing":"grab",touchAction:"none",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--mantine-color-white)",fontWeight:600,userSelect:"none"},children:"Drag me"})}),(0,o.jsxs)(s.Text,{ta:"center",mt:"sm",size:"sm",children:["Position: ",(0,o.jsx)(r.Code,{children:`{ x: ${Math.round(c.x)}, y: ${Math.round(c.y)} }`})]})]})}},l={type:"code",code:`
import { useRef, useState } from 'react';
import { Group, Text } from '@mantine/core';
import { useDrag } from '@mantine/hooks';

function Demo() {
  const xPosRef = useRef(0);
  const xStartRef = useRef(0);
  const [xPos, setXPos] = useState(0);

  const yPosRef = useRef(0);
  const yStartRef = useRef(0);
  const [yPos, setYPos] = useState(0);

  const { ref: xRef, active: xActive } = useDrag(
    (state) => {
      if (state.first) {
        xStartRef.current = xPosRef.current;
      }
      const x = xStartRef.current + state.movement[0];
      xPosRef.current = x;
      setXPos(x);
    },
    { axis: 'x' }
  );

  const { ref: yRef, active: yActive } = useDrag(
    (state) => {
      if (state.first) {
        yStartRef.current = yPosRef.current;
      }
      const y = yStartRef.current + state.movement[1];
      yPosRef.current = y;
      setYPos(y);
    },
    { axis: 'y' }
  );

  return (
    <>
      <Group justify="center" gap="xl">
        <div>
          <div
            ref={xRef}
            style={{
              width: 80,
              height: 80,
              backgroundColor: xActive
                ? 'var(--mantine-color-teal-filled)'
                : 'var(--mantine-color-blue-filled)',
              borderRadius: 'var(--mantine-radius-md)',
              transform: \`translateX(\${xPos}px)\`,
              cursor: xActive ? 'grabbing' : 'grab',
              touchAction: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--mantine-color-white)',
              fontWeight: 600,
              userSelect: 'none',
            }}
          >
            X only
          </div>
          <Text ta="center" mt="xs" size="sm">x: {Math.round(xPos)}</Text>
        </div>
        <div>
          <div
            ref={yRef}
            style={{
              width: 80,
              height: 80,
              backgroundColor: yActive
                ? 'var(--mantine-color-teal-filled)'
                : 'var(--mantine-color-blue-filled)',
              borderRadius: 'var(--mantine-radius-md)',
              transform: \`translateY(\${yPos}px)\`,
              cursor: yActive ? 'grabbing' : 'grab',
              touchAction: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--mantine-color-white)',
              fontWeight: 600,
              userSelect: 'none',
            }}
          >
            Y only
          </div>
          <Text ta="center" mt="xs" size="sm">y: {Math.round(yPos)}</Text>
        </div>
      </Group>
    </>
  );
}
`,component:function(){let e=(0,n.useRef)(0),t=(0,n.useRef)(0),[r,c]=(0,n.useState)(0),l=(0,n.useRef)(0),d=(0,n.useRef)(0),[u,m]=(0,n.useState)(0),{ref:h,active:f}=(0,a.useDrag)(n=>{n.first&&(t.current=e.current);let r=t.current+n.movement[0];e.current=r,c(r)},{axis:"x"}),{ref:p,active:x}=(0,a.useDrag)(e=>{e.first&&(d.current=l.current);let t=d.current+e.movement[1];l.current=t,m(t)},{axis:"y"});return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(i.Group,{justify:"center",gap:"xl",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{ref:h,style:{width:80,height:80,backgroundColor:f?"var(--mantine-color-teal-filled)":"var(--mantine-color-blue-filled)",borderRadius:"var(--mantine-radius-md)",transform:`translateX(${r}px)`,cursor:f?"grabbing":"grab",touchAction:"none",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--mantine-color-white)",fontWeight:600,userSelect:"none"},children:"X only"}),(0,o.jsxs)(s.Text,{ta:"center",mt:"xs",size:"sm",children:["x: ",Math.round(r)]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{ref:p,style:{width:80,height:80,backgroundColor:x?"var(--mantine-color-teal-filled)":"var(--mantine-color-blue-filled)",borderRadius:"var(--mantine-radius-md)",transform:`translateY(${u}px)`,cursor:x?"grabbing":"grab",touchAction:"none",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--mantine-color-white)",fontWeight:600,userSelect:"none"},children:"Y only"}),(0,o.jsxs)(s.Text,{ta:"center",mt:"xs",size:"sm",children:["y: ",Math.round(u)]})]})]})})}};var d=e.i(485108),u=e.i(470743);function m({notification:e,onDismiss:t}){let[r,i]=(0,n.useState)(0),[s,c]=(0,n.useState)(!1),{ref:l,active:d}=(0,a.useDrag)(n=>{n.last?Math.abs(n.movement[0])>120||n.velocity[0]>.5?(c(!0),setTimeout(()=>t(e.id),300)):i(0):i(n.movement[0])},{axis:"x",threshold:5,filterTaps:!0});return(0,o.jsx)(u.Paper,{ref:l,p:"sm",mb:"xs",radius:"md",withBorder:!0,style:{transform:s?`translateX(${r>0?400:-400}px)`:`translateX(${r}px)`,opacity:s?0:1-.6*Math.min(Math.abs(r)/200,1),transition:d?"none":"transform 300ms ease, opacity 300ms ease",cursor:d?"grabbing":"grab",touchAction:"pan-y",userSelect:"none"},children:e.text})}let h=[{id:1,text:"New message from Alice"},{id:2,text:"Build succeeded"},{id:3,text:"Deployment complete"},{id:4,text:"Review requested"}],f={type:"code",code:`
import { useState } from 'react';
import { Button, Group, Paper, Text } from '@mantine/core';
import { useDrag } from '@mantine/hooks';

interface NotificationItem {
  id: number;
  text: string;
}

function SwipeNotification({
  notification,
  onDismiss,
}: {
  notification: NotificationItem;
  onDismiss: (id: number) => void;
}) {
  const [offset, setOffset] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  const { ref, active } = useDrag(
    (state) => {
      if (state.last) {
        const shouldDismiss =
          Math.abs(state.movement[0]) > 120 || state.velocity[0] > 0.5;
        if (shouldDismiss) {
          setDismissed(true);
          setTimeout(() => onDismiss(notification.id), 300);
        } else {
          setOffset(0);
        }
      } else {
        setOffset(state.movement[0]);
      }
    },
    { axis: 'x', threshold: 5, filterTaps: true }
  );

  return (
    <Paper
      ref={ref}
      p="sm"
      mb="xs"
      withBorder
      radius="md"
      style={{
        transform: dismissed
          ? \`translateX(\${offset > 0 ? 400 : -400}px)\`
          : \`translateX(\${offset}px)\`,
        opacity: dismissed ? 0 : 1 - Math.min(Math.abs(offset) / 200, 1) * 0.6,
        transition: active ? 'none' : 'transform 300ms ease, opacity 300ms ease',
        cursor: active ? 'grabbing' : 'grab',
        touchAction: 'pan-y',
        userSelect: 'none',
      }}
    >
      {notification.text}
    </Paper>
  );
}

const initialItems: NotificationItem[] = [
  { id: 1, text: 'New message from Alice' },
  { id: 2, text: 'Build succeeded' },
  { id: 3, text: 'Deployment complete' },
  { id: 4, text: 'Review requested' },
];

function Demo() {
  const [notifications, setNotifications] = useState(initialItems);

  return (
    <div style={{ height: 300 }}>
      {notifications.map((n) => (
        <SwipeNotification
          key={n.id}
          notification={n}
          onDismiss={(id) =>
            setNotifications((items) => items.filter((item) => item.id !== id))
          }
        />
      ))}

      {notifications.length === 0 && (
        <Text ta="center" c="dimmed" py="md">All cleared!</Text>
      )}

      <Group justify="center" mt="md">
        <Button onClick={() => setNotifications(initialItems)}>
          Reset
        </Button>
      </Group>
    </div>
  );
}
`,component:function(){let[e,t]=(0,n.useState)(h);return(0,o.jsxs)("div",{style:{height:300},children:[e.map(e=>(0,o.jsx)(m,{notification:e,onDismiss:e=>t(t=>t.filter(t=>t.id!==e))},e.id)),0===e.length&&(0,o.jsx)(s.Text,{ta:"center",c:"dimmed",py:"md",children:"All cleared!"}),(0,o.jsx)(i.Group,{justify:"center",mt:"md",children:(0,o.jsx)(d.Button,{onClick:()=>t(h),children:"Reset"})})]})},centered:!0,maxWidth:400},p={type:"code",code:`
import { useRef } from 'react';
import { Text } from '@mantine/core';
import { useDrag } from '@mantine/hooks';

function Demo() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { ref, active } = useDrag(
    (state) => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft -= state.delta[0];
      }
    },
    { axis: 'x', filterTaps: true, threshold: 5 }
  );

  const assignRef = (node: HTMLDivElement | null) => {
    scrollRef.current = node;
    ref(node);
  };

  return (
    <>
      <div
        ref={assignRef}
        style={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          cursor: active ? 'grabbing' : 'grab',
          touchAction: 'pan-y',
          userSelect: 'none',
          borderRadius: 'var(--mantine-radius-md)',
          border: '1px solid var(--mantine-color-default-border)',
          padding: 'var(--mantine-spacing-md)',
        }}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 120,
              height: 80,
              marginRight: 12,
              backgroundColor: \`hsl(\${i * 18}, 60%, 70%)\`,
              borderRadius: 'var(--mantine-radius-sm)',
              fontWeight: 600,
              verticalAlign: 'top',
            }}
          >
            Card {i + 1}
          </div>
        ))}
      </div>
      <Text ta="center" mt="sm" size="sm" c="dimmed">
        Drag horizontally to scroll
      </Text>
    </>
  );
}
`,component:function(){let e=(0,n.useRef)(null),{ref:t,active:r}=(0,a.useDrag)(t=>{e.current&&(e.current.scrollLeft-=t.delta[0])},{axis:"x",filterTaps:!0,threshold:5});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{ref:n=>{e.current=n,t(n)},style:{overflow:"hidden",whiteSpace:"nowrap",cursor:r?"grabbing":"grab",touchAction:"pan-y",userSelect:"none",borderRadius:"var(--mantine-radius-md)",border:"1px solid var(--mantine-color-default-border)",padding:"var(--mantine-spacing-md)"},children:Array.from({length:20},(e,t)=>(0,o.jsxs)("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:120,height:80,marginRight:12,backgroundColor:`hsl(${18*t}, 60%, 70%)`,borderRadius:"var(--mantine-radius-sm)",fontWeight:600,verticalAlign:"top",color:"var(--mantine-color-black)"},children:["Card ",t+1]},t))}),(0,o.jsx)(s.Text,{ta:"center",mt:"sm",size:"sm",c:"dimmed",children:"Drag horizontally to scroll"})]})}};var x=e.i(257177),g=e.i(284629);let v={type:"code",code:`
import { useState } from 'react';
import { Badge, Group, Text, UnstyledButton } from '@mantine/core';
import { useDrag } from '@mantine/hooks';

function Demo() {
  const [taps, setTaps] = useState(0);
  const [drags, setDrags] = useState(0);

  const { ref, active } = useDrag(
    (state) => {
      if (state.last) {
        if (state.tap) {
          setTaps((t) => t + 1);
        } else {
          setDrags((d) => d + 1);
        }
      }
    },
    { filterTaps: true, threshold: 5 }
  );

  return (
    <>
      <Group justify="center">
        <UnstyledButton
          ref={ref}
          style={{
            width: 200,
            height: 80,
            backgroundColor: active
              ? 'var(--mantine-color-teal-filled)'
              : 'var(--mantine-color-blue-filled)',
            borderRadius: 'var(--mantine-radius-md)',
            cursor: active ? 'grabbing' : 'pointer',
            touchAction: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--mantine-color-white)',
            fontWeight: 600,
            userSelect: 'none',
          }}
        >
          Click or drag me
        </UnstyledButton>
      </Group>

      <Group justify="center" mt="md" gap="lg">
        <Text size="sm">
          Taps: <Badge>{taps}</Badge>
        </Text>
        <Text size="sm">
          Drags: <Badge color="teal">{drags}</Badge>
        </Text>
      </Group>
    </>
  );
}
`,component:function(){let[e,t]=(0,n.useState)(0),[r,c]=(0,n.useState)(0),{ref:l,active:d}=(0,a.useDrag)(e=>{e.last&&(e.tap?t(e=>e+1):c(e=>e+1))},{filterTaps:!0,threshold:5});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.Group,{justify:"center",children:(0,o.jsx)(g.UnstyledButton,{ref:l,style:{width:200,height:80,backgroundColor:d?"var(--mantine-color-teal-filled)":"var(--mantine-color-blue-filled)",borderRadius:"var(--mantine-radius-md)",cursor:d?"grabbing":"pointer",touchAction:"none",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--mantine-color-white)",fontWeight:600,userSelect:"none"},children:"Click or drag me"})}),(0,o.jsxs)(i.Group,{justify:"center",mt:"md",gap:"lg",children:[(0,o.jsxs)(s.Text,{size:"sm",children:["Taps: ",(0,o.jsx)(x.Badge,{children:e})]}),(0,o.jsxs)(s.Text,{size:"sm",children:["Drags: ",(0,o.jsx)(x.Badge,{color:"teal",children:r})]})]})]})}};var y=(0,t.__exportAll)({axis:()=>l,filterTaps:()=>v,scroll:()=>p,swipe:()=>f,usage:()=>c});e.s(["UseDragDemos",0,y],184435)},215846,e=>{"use strict";var t=e.i(391398),n=e.i(38856),r=e.i(184435);e.i(603441);var i=e.i(62558);e.i(457450);var s=e.i(418026);let o=(0,i.Layout)(s.MDX_DATA.useDrag);function a(e){let i={code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.useMDXComponents)(),...e.components},{Demo:s}=i;return s||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"use-drag"})," hook handles pointer drag gestures over an element. It tracks movement,\nvelocity, direction and supports axis constraints, threshold activation and tap detection.\nThe hook uses the Pointer Events API and works with both mouse and touch input."]}),"\n",(0,t.jsx)(s,{data:r.UseDragDemos.usage}),"\n",(0,t.jsx)(i.h2,{id:"axis-constraint",children:"Axis constraint"}),"\n",(0,t.jsxs)(i.p,{children:["Use the ",(0,t.jsx)(i.code,{children:"axis"})," option to constrain movement to a single axis.\nSet ",(0,t.jsx)(i.code,{children:"axis"})," to ",(0,t.jsx)(i.code,{children:"'x'"})," or ",(0,t.jsx)(i.code,{children:"'y'"})," for a fixed constraint, or ",(0,t.jsx)(i.code,{children:"'lock'"})," to\nlock to whichever axis has more movement after ",(0,t.jsx)(i.code,{children:"axisThreshold"})," is exceeded:"]}),"\n",(0,t.jsx)(s,{data:r.UseDragDemos.axis}),"\n",(0,t.jsx)(i.h2,{id:"distinguishing-taps-from-drags",children:"Distinguishing taps from drags"}),"\n",(0,t.jsxs)(i.p,{children:["When ",(0,t.jsx)(i.code,{children:"filterTaps"})," is enabled, the last state includes a ",(0,t.jsx)(i.code,{children:"tap"})," property that is ",(0,t.jsx)(i.code,{children:"true"}),"\nwhen the total distance is below ",(0,t.jsx)(i.code,{children:"tapThreshold"})," (default ",(0,t.jsx)(i.code,{children:"3px"}),"). Combined with ",(0,t.jsx)(i.code,{children:"threshold"}),",\nthis lets you distinguish clicks from drags on the same element:"]}),"\n",(0,t.jsx)(s,{data:r.UseDragDemos.filterTaps}),"\n",(0,t.jsx)(i.h2,{id:"swipe-to-dismiss",children:"Swipe to dismiss"}),"\n",(0,t.jsxs)(i.p,{children:["Use ",(0,t.jsx)(i.code,{children:"movement"})," and ",(0,t.jsx)(i.code,{children:"velocity"})," on the last event to decide whether to dismiss an item.\nThis pattern works well for notifications:"]}),"\n",(0,t.jsx)(s,{data:r.UseDragDemos.swipe}),"\n",(0,t.jsx)(i.h2,{id:"drag-to-scroll",children:"Drag to scroll"}),"\n",(0,t.jsxs)(i.p,{children:["Apply ",(0,t.jsx)(i.code,{children:"delta"})," to a container's ",(0,t.jsx)(i.code,{children:"scrollLeft"})," to create a drag-to-scroll interaction:"]}),"\n",(0,t.jsx)(s,{data:r.UseDragDemos.scroll}),"\n",(0,t.jsx)(i.h2,{id:"touch-support",children:"Touch support"}),"\n",(0,t.jsxs)(i.p,{children:["The hook uses the Pointer Events API which handles both mouse and touch automatically.\nFor touch devices, set ",(0,t.jsx)(i.code,{children:"touch-action: none"})," on the draggable element to prevent\nthe browser from interpreting touch drag as scroll:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-css",children:".draggable {\n  touch-action: none;\n}\n"})}),"\n",(0,t.jsxs)(i.p,{children:["If you want to allow scrolling on one axis while dragging on the other (e.g. horizontal\ndrag with vertical scroll), use ",(0,t.jsx)(i.code,{children:"touch-action: pan-y"})," or ",(0,t.jsx)(i.code,{children:"touch-action: pan-x"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-tsx",children:"type Vector2 = [number, number];\n\ninterface UseDragState {\n  /** Current pointer position */\n  xy: Vector2;\n\n  /** Position where the gesture started */\n  initial: Vector2;\n\n  /** Displacement from start, respects axis constraint */\n  movement: Vector2;\n\n  /** Change since previous event */\n  delta: Vector2;\n\n  /** Absolute distance per axis */\n  distance: Vector2;\n\n  /** Movement direction per axis: -1, 0 or 1 */\n  direction: Vector2;\n\n  /** Speed per axis in px/ms */\n  velocity: Vector2;\n\n  /** Time since drag started in ms */\n  elapsedTime: number;\n\n  /** `true` on the first handler call */\n  first: boolean;\n\n  /** `true` on the last handler call (pointer released or canceled) */\n  last: boolean;\n\n  /** `true` while the gesture is ongoing */\n  active: boolean;\n\n  /** `true` when the gesture qualifies as a tap (requires `filterTaps`) */\n  tap: boolean;\n\n  /** `true` when the gesture was interrupted by a `pointercancel` event */\n  canceled: boolean;\n\n  /** Function to programmatically cancel the current gesture */\n  cancel: () => void;\n\n  /** The source pointer event */\n  event: PointerEvent;\n\n}\n\ninterface UseDragOptions {\n  /** Constrain movement to an axis, `'lock'` locks to whichever axis has more movement */\n  axis?: 'x' | 'y' | 'lock';\n\n  /** Movement in px to determine lock axis, default `1` */\n  axisThreshold?: number;\n\n  /** Enable tap detection on the last event, default `false` */\n  filterTaps?: boolean;\n\n  /** Max displacement in px to be considered a tap, default `3` */\n  tapThreshold?: number;\n\n  /** Min displacement before drag activates, default `0` */\n  threshold?: number | Vector2;\n\n  /** Enable or disable the hook, default `true` */\n  enabled?: boolean;\n\n}\n\ninterface UseDragReturnValue<T extends HTMLElement = any> {\n  /** Ref callback to attach to the target element */\n  ref: React.RefCallback<T | null>;\n\n  /** `true` while a drag gesture is active */\n  active: boolean;\n}\n\nfunction useDrag<T extends HTMLElement = any>(\n  handler: (state: UseDragState) => void,\n  options?: UseDragOptions,\n): UseDragReturnValue<T>\n"})}),"\n",(0,t.jsx)(i.h2,{id:"exported-types",children:"Exported types"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"UseDragState"}),", ",(0,t.jsx)(i.code,{children:"UseDragOptions"})," and ",(0,t.jsx)(i.code,{children:"UseDragReturnValue"})," types are exported from the ",(0,t.jsx)(i.code,{children:"@mantine/hooks"})," package;\nyou can import them in your application:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-tsx",children:"import type { UseDragState, UseDragOptions, UseDragReturnValue } from '@mantine/hooks';\n"})})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(o,{...e,children:(0,t.jsx)(a,{...e})})}])},947358,(e,t,n)=>{let r="/hooks/use-drag";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(215846)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);