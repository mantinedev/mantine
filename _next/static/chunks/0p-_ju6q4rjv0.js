(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,894972,e=>{"use strict";var t=e.i(648863),i=e.i(191788),r=e.i(414124),o=e.i(391398),n=e.i(841649);let l=["var(--mantine-color-blue-filled)","var(--mantine-color-teal-filled)"],a=["Panel A","Panel B"],s={type:"code",code:`
import React from 'react';
import { DotsSixVerticalIcon } from '@phosphor-icons/react';
import { useSplitter } from '@mantine/hooks';

const colors = ['var(--mantine-color-blue-filled)', 'var(--mantine-color-teal-filled)'];
const labels = ['Panel A', 'Panel B'];

function Demo() {
  const splitter = useSplitter({
    panels: [
      { defaultSize: 50, min: 20 },
      { defaultSize: 50, min: 20 },
    ],
  });

  return (
    <div
      ref={splitter.ref}
      style={{
        display: 'flex',
        height: 200,
        borderRadius: 'var(--mantine-radius-md)',
        overflow: 'hidden',
      }}
    >
      {splitter.sizes.map((size, i) => (
        <React.Fragment key={i}>
          {i > 0 && (
            <div
              {...splitter.getHandleProps({ index: i - 1 })}
              style={{
                width: 4,
                flexShrink: 0,
                cursor: 'col-resize',
                touchAction: 'none',
                backgroundColor: 'var(--mantine-color-default-border)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 8,
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 'var(--mantine-radius-xs)',
                  backgroundColor: 'var(--mantine-color-default)',
                  border: '1px solid var(--mantine-color-default-border)',
                  color: 'var(--mantine-color-dimmed)',
                }}
              >
                <DotsSixVerticalIcon />
              </div>
            </div>
          )}
          <div
            style={{
              width: \`\${size}%\`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors[i],
              color: 'var(--mantine-color-white)',
              fontWeight: 500,
              whiteSpace: 'nowrap',
              gap: 2,
            }}
          >
            {labels[i]} ({Math.round(size)}%)
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
`,component:function(){let e=(0,n.useSplitter)({panels:[{defaultSize:50,min:20},{defaultSize:50,min:20}]});return(0,o.jsx)("div",{ref:e.ref,style:{display:"flex",height:200,borderRadius:"var(--mantine-radius-md)",overflow:"hidden"},children:e.sizes.map((t,n)=>(0,o.jsxs)(i.default.Fragment,{children:[n>0&&(0,o.jsx)("div",{...e.getHandleProps({index:n-1}),style:{width:4,flexShrink:0,cursor:"col-resize",touchAction:"none",backgroundColor:"var(--mantine-color-default-border)",position:"relative"},children:(0,o.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:8,height:40,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"var(--mantine-radius-xs)",backgroundColor:"var(--mantine-color-default)",border:"1px solid var(--mantine-color-default-border)",color:"var(--mantine-color-dimmed)"},children:(0,o.jsx)(r.DotsSixVerticalIcon,{})})}),(0,o.jsxs)("div",{style:{width:`${t}%`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:l[n],color:"var(--mantine-color-white)",fontWeight:500,whiteSpace:"nowrap",gap:2},children:[a[n]," (",Math.round(t),"%)"]})]},n))})}};var d=e.i(776115);let c=["var(--mantine-color-blue-filled)","var(--mantine-color-teal-filled)"],u=["Panel A","Panel B"],m={type:"code",code:`
import React from 'react';
import { DotsSixIcon } from '@phosphor-icons/react';
import { useSplitter } from '@mantine/hooks';

const colors = ['var(--mantine-color-blue-filled)', 'var(--mantine-color-teal-filled)'];
const labels = ['Panel A', 'Panel B'];

function Demo() {
  const splitter = useSplitter({
    panels: [
      { defaultSize: 50, min: 20 },
      { defaultSize: 50, min: 20 },
    ],
    orientation: 'vertical',
  });

  return (
    <div
      ref={splitter.ref}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: 300,
        borderRadius: 'var(--mantine-radius-md)',
        overflow: 'hidden',
      }}
    >
      {splitter.sizes.map((size, i) => (
        <React.Fragment key={i}>
          {i > 0 && (
            <div
              {...splitter.getHandleProps({ index: i - 1 })}
              style={{
                height: 4,
                flexShrink: 0,
                cursor: 'row-resize',
                touchAction: 'none',
                backgroundColor: 'var(--mantine-color-default-border)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 40,
                  height: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 'var(--mantine-radius-xs)',
                  backgroundColor: 'var(--mantine-color-default)',
                  border: '1px solid var(--mantine-color-default-border)',
                  color: 'var(--mantine-color-dimmed)',
                }}
              >
                <DotsSixIcon />
              </div>
            </div>
          )}
          <div
            style={{
              height: \`\${size}%\`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors[i],
              color: 'var(--mantine-color-white)',
              fontWeight: 500,
              whiteSpace: 'nowrap',
              gap: 2,
            }}
          >
            {labels[i]} ({Math.round(size)}%)
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
`,component:function(){let e=(0,n.useSplitter)({panels:[{defaultSize:50,min:20},{defaultSize:50,min:20}],orientation:"vertical"});return(0,o.jsx)("div",{ref:e.ref,style:{display:"flex",flexDirection:"column",height:300,borderRadius:"var(--mantine-radius-md)",overflow:"hidden"},children:e.sizes.map((t,r)=>(0,o.jsxs)(i.default.Fragment,{children:[r>0&&(0,o.jsx)("div",{...e.getHandleProps({index:r-1}),style:{height:4,flexShrink:0,cursor:"row-resize",touchAction:"none",backgroundColor:"var(--mantine-color-default-border)",position:"relative"},children:(0,o.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:40,height:8,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"var(--mantine-radius-xs)",backgroundColor:"var(--mantine-color-default)",border:"1px solid var(--mantine-color-default-border)",color:"var(--mantine-color-dimmed)"},children:(0,o.jsx)(d.DotsSixIcon,{})})}),(0,o.jsxs)("div",{style:{height:`${t}%`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:c[r],color:"var(--mantine-color-white)",fontWeight:500,whiteSpace:"nowrap",gap:2},children:[u[r]," (",Math.round(t),"%)"]})]},r))})}};var p=e.i(485108),f=e.i(725695);let h={type:"code",code:`
import { DotsSixVerticalIcon } from '@phosphor-icons/react';
import { Button, Group } from '@mantine/core';
import { useSplitter } from '@mantine/hooks';

function Demo() {
  const splitter = useSplitter({
    panels: [
      { defaultSize: 30, collapsible: true, min: 15 },
      { defaultSize: 70, min: 20 },
    ],
  });

  return (
    <>
      <div
        ref={splitter.ref}
        style={{
          display: 'flex',
          height: 200,
          borderRadius: 'var(--mantine-radius-md)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: \`\${splitter.sizes[0]}%\`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--mantine-color-blue-filled)',
            color: 'var(--mantine-color-white)',
            fontWeight: 500,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            gap: 2,
          }}
        >
          {!splitter.collapsed[0] && \`Panel A (\${Math.round(splitter.sizes[0])}%)\`}
        </div>
        <div
          {...splitter.getHandleProps({ index: 0 })}
          style={{
            width: 4,
            flexShrink: 0,
            cursor: 'col-resize',
            touchAction: 'none',
            backgroundColor: 'var(--mantine-color-default-border)',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 8,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 'var(--mantine-radius-xs)',
              backgroundColor: 'var(--mantine-color-default)',
              border: '1px solid var(--mantine-color-default-border)',
              color: 'var(--mantine-color-dimmed)',
            }}
          >
            <DotsSixVerticalIcon />
          </div>
        </div>
        <div
          style={{
            width: \`\${splitter.sizes[1]}%\`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--mantine-color-teal-filled)',
            color: 'var(--mantine-color-white)',
            fontWeight: 500,
            whiteSpace: 'nowrap',
            gap: 2,
          }}
        >
          Panel B ({Math.round(splitter.sizes[1])}%)
        </div>
      </div>
      <Group mt="md">
        <Button size="xs" onClick={() => splitter.toggleCollapse(0)}>
          {splitter.collapsed[0] ? 'Expand Panel A' : 'Collapse Panel A'}
        </Button>
      </Group>
    </>
  );
}
`,component:function(){let e=(0,n.useSplitter)({panels:[{defaultSize:30,collapsible:!0,min:15},{defaultSize:70,min:20}]});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{ref:e.ref,style:{display:"flex",height:200,borderRadius:"var(--mantine-radius-md)",overflow:"hidden"},children:[(0,o.jsx)("div",{style:{width:`${e.sizes[0]}%`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"var(--mantine-color-blue-filled)",color:"var(--mantine-color-white)",fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",gap:2},children:!e.collapsed[0]&&`Panel A (${Math.round(e.sizes[0])}%)`}),(0,o.jsx)("div",{...e.getHandleProps({index:0}),style:{width:4,flexShrink:0,cursor:"col-resize",touchAction:"none",backgroundColor:"var(--mantine-color-default-border)",position:"relative"},children:(0,o.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:8,height:40,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"var(--mantine-radius-xs)",backgroundColor:"var(--mantine-color-default)",border:"1px solid var(--mantine-color-default-border)",color:"var(--mantine-color-dimmed)"},children:(0,o.jsx)(r.DotsSixVerticalIcon,{})})}),(0,o.jsxs)("div",{style:{width:`${e.sizes[1]}%`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"var(--mantine-color-teal-filled)",color:"var(--mantine-color-white)",fontWeight:500,whiteSpace:"nowrap",gap:2},children:["Panel B (",Math.round(e.sizes[1]),"%)"]})]}),(0,o.jsx)(f.Group,{mt:"md",children:(0,o.jsx)(p.Button,{size:"xs",onClick:()=>e.toggleCollapse(0),children:e.collapsed[0]?"Expand Panel A":"Collapse Panel A"})})]})}},v=["var(--mantine-color-blue-filled)","var(--mantine-color-teal-filled)","var(--mantine-color-grape-filled)"],x=["Panel A","Panel B","Panel C"],g={type:"code",code:`
import React from 'react';
import { DotsSixVerticalIcon } from '@phosphor-icons/react';
import { useSplitter } from '@mantine/hooks';

const colors = [
  'var(--mantine-color-blue-filled)',
  'var(--mantine-color-teal-filled)',
  'var(--mantine-color-grape-filled)',
];
const labels = ['Panel A', 'Panel B', 'Panel C'];

function Demo() {
  const splitter = useSplitter({
    panels: [
      { defaultSize: 25, min: 10 },
      { defaultSize: 50, min: 20 },
      { defaultSize: 25, min: 10 },
    ],
  });

  return (
    <div
      ref={splitter.ref}
      style={{
        display: 'flex',
        height: 200,
        borderRadius: 'var(--mantine-radius-md)',
        overflow: 'hidden',
      }}
    >
      {splitter.sizes.map((size, i) => (
        <React.Fragment key={i}>
          {i > 0 && (
            <div
              {...splitter.getHandleProps({ index: i - 1 })}
              style={{
                width: 4,
                flexShrink: 0,
                cursor: 'col-resize',
                touchAction: 'none',
                backgroundColor: 'var(--mantine-color-default-border)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 8,
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 'var(--mantine-radius-xs)',
                  backgroundColor: 'var(--mantine-color-default)',
                  border: '1px solid var(--mantine-color-default-border)',
                  color: 'var(--mantine-color-dimmed)',
                }}
              >
                <DotsSixVerticalIcon />
              </div>
            </div>
          )}
          <div
            style={{
              width: \`\${size}%\`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors[i],
              color: 'var(--mantine-color-white)',
              fontWeight: 500,
              whiteSpace: 'nowrap',
              gap: 2,
            }}
          >
            {labels[i]} ({Math.round(size)}%)
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
`,component:function(){let e=(0,n.useSplitter)({panels:[{defaultSize:25,min:10},{defaultSize:50,min:20},{defaultSize:25,min:10}]});return(0,o.jsx)("div",{ref:e.ref,style:{display:"flex",height:200,borderRadius:"var(--mantine-radius-md)",overflow:"hidden"},children:e.sizes.map((t,n)=>(0,o.jsxs)(i.default.Fragment,{children:[n>0&&(0,o.jsx)("div",{...e.getHandleProps({index:n-1}),style:{width:4,flexShrink:0,cursor:"col-resize",touchAction:"none",backgroundColor:"var(--mantine-color-default-border)",position:"relative"},children:(0,o.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:8,height:40,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"var(--mantine-radius-xs)",backgroundColor:"var(--mantine-color-default)",border:"1px solid var(--mantine-color-default-border)",color:"var(--mantine-color-dimmed)"},children:(0,o.jsx)(r.DotsSixVerticalIcon,{})})}),(0,o.jsxs)("div",{style:{width:`${t}%`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:v[n],color:"var(--mantine-color-white)",fontWeight:500,whiteSpace:"nowrap",gap:2},children:[x[n]," (",Math.round(t),"%)"]})]},n))})}};var b=e.i(883364);let y={type:"code",code:`
import { useState } from 'react';
import { DotsSixVerticalIcon } from '@phosphor-icons/react';
import { Button, Group, Text } from '@mantine/core';
import { useSplitter } from '@mantine/hooks';

function Demo() {
  const [sizes, setSizes] = useState([50, 50]);

  const splitter = useSplitter({
    panels: [
      { defaultSize: 50, min: 20 },
      { defaultSize: 50, min: 20 },
    ],
    sizes,
    onSizeChange: setSizes,
  });

  return (
    <>
      <div
        ref={splitter.ref}
        style={{
          display: 'flex',
          height: 200,
          borderRadius: 'var(--mantine-radius-md)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: \`\${splitter.sizes[0]}%\`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--mantine-color-blue-filled)',
            color: 'var(--mantine-color-white)',
            fontWeight: 500,
            whiteSpace: 'nowrap',
            gap: 2,
          }}
        >
          Panel A ({Math.round(splitter.sizes[0])}%)
        </div>
        <div
          {...splitter.getHandleProps({ index: 0 })}
          style={{
            width: 4,
            flexShrink: 0,
            cursor: 'col-resize',
            touchAction: 'none',
            backgroundColor: 'var(--mantine-color-default-border)',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 8,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 'var(--mantine-radius-xs)',
              backgroundColor: 'var(--mantine-color-default)',
              border: '1px solid var(--mantine-color-default-border)',
              color: 'var(--mantine-color-dimmed)',
            }}
          >
            <DotsSixVerticalIcon />
          </div>
        </div>
        <div
          style={{
            width: \`\${splitter.sizes[1]}%\`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--mantine-color-teal-filled)',
            color: 'var(--mantine-color-white)',
            fontWeight: 500,
            whiteSpace: 'nowrap',
            gap: 2,
          }}
        >
          Panel B ({Math.round(splitter.sizes[1])}%)
        </div>
      </div>
      <Text size="sm" mt="sm">
        Current sizes: [{sizes.map((s) => Math.round(s)).join(', ')}]
      </Text>
      <Group mt="xs">
        <Button size="xs" onClick={() => setSizes([30, 70])}>30 / 70</Button>
        <Button size="xs" onClick={() => setSizes([50, 50])}>50 / 50</Button>
        <Button size="xs" onClick={() => setSizes([70, 30])}>70 / 30</Button>
      </Group>
    </>
  );
}
`,component:function(){let[e,t]=(0,i.useState)([50,50]),l=(0,n.useSplitter)({panels:[{defaultSize:50,min:20},{defaultSize:50,min:20}],sizes:e,onSizeChange:t});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{ref:l.ref,style:{display:"flex",height:200,borderRadius:"var(--mantine-radius-md)",overflow:"hidden"},children:[(0,o.jsxs)("div",{style:{width:`${l.sizes[0]}%`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"var(--mantine-color-blue-filled)",color:"var(--mantine-color-white)",fontWeight:500,whiteSpace:"nowrap",gap:2},children:["Panel A (",Math.round(l.sizes[0]),"%)"]}),(0,o.jsx)("div",{...l.getHandleProps({index:0}),style:{width:4,flexShrink:0,cursor:"col-resize",touchAction:"none",backgroundColor:"var(--mantine-color-default-border)",position:"relative"},children:(0,o.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:8,height:40,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"var(--mantine-radius-xs)",backgroundColor:"var(--mantine-color-default)",border:"1px solid var(--mantine-color-default-border)",color:"var(--mantine-color-dimmed)"},children:(0,o.jsx)(r.DotsSixVerticalIcon,{})})}),(0,o.jsxs)("div",{style:{width:`${l.sizes[1]}%`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"var(--mantine-color-teal-filled)",color:"var(--mantine-color-white)",fontWeight:500,whiteSpace:"nowrap",gap:2},children:["Panel B (",Math.round(l.sizes[1]),"%)"]})]}),(0,o.jsxs)(b.Text,{size:"sm",mt:"sm",children:["Current sizes: [",e.map(e=>Math.round(e)).join(", "),"]"]}),(0,o.jsxs)(f.Group,{mt:"xs",children:[(0,o.jsx)(p.Button,{size:"xs",onClick:()=>t([30,70]),children:"30 / 70"}),(0,o.jsx)(p.Button,{size:"xs",onClick:()=>t([50,50]),children:"50 / 50"}),(0,o.jsx)(p.Button,{size:"xs",onClick:()=>t([70,30]),children:"70 / 30"})]})]})}},w=["var(--mantine-color-blue-filled)","var(--mantine-color-teal-filled)","var(--mantine-color-grape-filled)","var(--mantine-color-orange-filled)"],S=["Panel A","Panel B","Panel C","Panel D"],z={type:"code",code:`
import React from 'react';
import { DotsSixVerticalIcon } from '@phosphor-icons/react';
import { useSplitter } from '@mantine/hooks';

const colors = [
  'var(--mantine-color-blue-filled)',
  'var(--mantine-color-teal-filled)',
  'var(--mantine-color-grape-filled)',
  'var(--mantine-color-orange-filled)',
];
const labels = ['Panel A', 'Panel B', 'Panel C', 'Panel D'];

function Demo() {
  const splitter = useSplitter({
    panels: [
      { defaultSize: 25, min: 10 },
      { defaultSize: 25, min: 20 },
      { defaultSize: 25, min: 10 },
      { defaultSize: 25, min: 10 },
    ],
    redistribute: 'nearest',
  });

  return (
    <div
      ref={splitter.ref}
      style={{
        display: 'flex',
        height: 200,
        borderRadius: 'var(--mantine-radius-md)',
        overflow: 'hidden',
      }}
    >
      {splitter.sizes.map((size, i) => (
        <React.Fragment key={i}>
          {i > 0 && (
            <div
              {...splitter.getHandleProps({ index: i - 1 })}
              style={{
                width: 4,
                flexShrink: 0,
                cursor: 'col-resize',
                touchAction: 'none',
                backgroundColor: 'var(--mantine-color-default-border)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 8,
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 'var(--mantine-radius-xs)',
                  backgroundColor: 'var(--mantine-color-default)',
                  border: '1px solid var(--mantine-color-default-border)',
                  color: 'var(--mantine-color-dimmed)',
                }}
              >
                <DotsSixVerticalIcon />
              </div>
            </div>
          )}
          <div
            style={{
              width: \`\${size}%\`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors[i],
              color: 'var(--mantine-color-white)',
              fontWeight: 500,
              whiteSpace: 'nowrap',
              gap: 2,
            }}
          >
            {labels[i]} ({Math.round(size)}%)
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
`,component:function(){let e=(0,n.useSplitter)({panels:[{defaultSize:25,min:10},{defaultSize:25,min:20},{defaultSize:25,min:10},{defaultSize:25,min:10}],redistribute:"nearest"});return(0,o.jsx)("div",{ref:e.ref,style:{display:"flex",height:200,borderRadius:"var(--mantine-radius-md)",overflow:"hidden"},children:e.sizes.map((t,n)=>(0,o.jsxs)(i.default.Fragment,{children:[n>0&&(0,o.jsx)("div",{...e.getHandleProps({index:n-1}),style:{width:4,flexShrink:0,cursor:"col-resize",touchAction:"none",backgroundColor:"var(--mantine-color-default-border)",position:"relative"},children:(0,o.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:8,height:40,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"var(--mantine-radius-xs)",backgroundColor:"var(--mantine-color-default)",border:"1px solid var(--mantine-color-default-border)",color:"var(--mantine-color-dimmed)"},children:(0,o.jsx)(r.DotsSixVerticalIcon,{})})}),(0,o.jsxs)("div",{style:{width:`${t}%`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:w[n],color:"var(--mantine-color-white)",fontWeight:500,whiteSpace:"nowrap",gap:2},children:[S[n]," (",Math.round(t),"%)"]})]},n))})}},C=["var(--mantine-color-blue-filled)","var(--mantine-color-teal-filled)","var(--mantine-color-grape-filled)","var(--mantine-color-orange-filled)"],j=["Panel A","Panel B","Panel C","Panel D"],k={type:"code",code:`
import React from 'react';
import { DotsSixVerticalIcon } from '@phosphor-icons/react';
import { useSplitter } from '@mantine/hooks';

const colors = [
  'var(--mantine-color-blue-filled)',
  'var(--mantine-color-teal-filled)',
  'var(--mantine-color-grape-filled)',
  'var(--mantine-color-orange-filled)',
];
const labels = ['Panel A', 'Panel B', 'Panel C', 'Panel D'];

function Demo() {
  const splitter = useSplitter({
    panels: [
      { defaultSize: 25, min: 10 },
      { defaultSize: 25, min: 20 },
      { defaultSize: 25, min: 10 },
      { defaultSize: 25, min: 10 },
    ],
    redistribute: 'equal',
  });

  return (
    <div
      ref={splitter.ref}
      style={{
        display: 'flex',
        height: 200,
        borderRadius: 'var(--mantine-radius-md)',
        overflow: 'hidden',
      }}
    >
      {splitter.sizes.map((size, i) => (
        <React.Fragment key={i}>
          {i > 0 && (
            <div
              {...splitter.getHandleProps({ index: i - 1 })}
              style={{
                width: 4,
                flexShrink: 0,
                cursor: 'col-resize',
                touchAction: 'none',
                backgroundColor: 'var(--mantine-color-default-border)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 8,
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 'var(--mantine-radius-xs)',
                  backgroundColor: 'var(--mantine-color-default)',
                  border: '1px solid var(--mantine-color-default-border)',
                  color: 'var(--mantine-color-dimmed)',
                }}
              >
                <DotsSixVerticalIcon />
              </div>
            </div>
          )}
          <div
            style={{
              width: \`\${size}%\`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors[i],
              color: 'var(--mantine-color-white)',
              fontWeight: 500,
              whiteSpace: 'nowrap',
              gap: 2,
            }}
          >
            {labels[i]} ({Math.round(size)}%)
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
`,component:function(){let e=(0,n.useSplitter)({panels:[{defaultSize:25,min:10},{defaultSize:25,min:20},{defaultSize:25,min:10},{defaultSize:25,min:10}],redistribute:"equal"});return(0,o.jsx)("div",{ref:e.ref,style:{display:"flex",height:200,borderRadius:"var(--mantine-radius-md)",overflow:"hidden"},children:e.sizes.map((t,n)=>(0,o.jsxs)(i.default.Fragment,{children:[n>0&&(0,o.jsx)("div",{...e.getHandleProps({index:n-1}),style:{width:4,flexShrink:0,cursor:"col-resize",touchAction:"none",backgroundColor:"var(--mantine-color-default-border)",position:"relative"},children:(0,o.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:8,height:40,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"var(--mantine-radius-xs)",backgroundColor:"var(--mantine-color-default)",border:"1px solid var(--mantine-color-default-border)",color:"var(--mantine-color-dimmed)"},children:(0,o.jsx)(r.DotsSixVerticalIcon,{})})}),(0,o.jsxs)("div",{style:{width:`${t}%`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:C[n],color:"var(--mantine-color-white)",fontWeight:500,whiteSpace:"nowrap",gap:2},children:[j[n]," (",Math.round(t),"%)"]})]},n))})}};function I(e){let{sizes:t,panels:i,handleIndex:r,delta:o}=e,n=[...t];if(o>0){let e=n.length-1,t=i[e].min??0,l=Math.min(o,(i[r].max??100)-n[r],n[e]-t);n[r]+=l,n[e]-=l}else{let e=i[0].min??0,t=r+1,l=Math.min(Math.abs(o),(i[t].max??100)-n[t],n[0]-e);n[t]+=l,n[0]-=l}return n}let D={type:"code",code:`
import { DotsSixVerticalIcon } from '@phosphor-icons/react';
import { useSplitter, UseSplitterRedistributeInput } from '@mantine/hooks';

// Custom strategy: only take from the last panel, leave others untouched
function redistributeFromLast(input: UseSplitterRedistributeInput) {
  const { sizes, panels, handleIndex, delta } = input;
  const result = [...sizes];

  if (delta > 0) {
    const lastIdx = result.length - 1;
    const minLast = panels[lastIdx].min ?? 0;
    const maxGrow = (panels[handleIndex].max ?? 100) - result[handleIndex];
    const canTake = result[lastIdx] - minLast;
    const take = Math.min(delta, maxGrow, canTake);
    result[handleIndex] += take;
    result[lastIdx] -= take;
  } else {
    const firstIdx = 0;
    const minFirst = panels[firstIdx].min ?? 0;
    const growIdx = handleIndex + 1;
    const maxGrow = (panels[growIdx].max ?? 100) - result[growIdx];
    const canTake = result[firstIdx] - minFirst;
    const take = Math.min(Math.abs(delta), maxGrow, canTake);
    result[growIdx] += take;
    result[firstIdx] -= take;
  }

  return result;
}

function Demo() {
  const splitter = useSplitter({
    panels: [
      { defaultSize: 25, min: 10 },
      { defaultSize: 25, min: 20 },
      { defaultSize: 50, min: 10 },
    ],
    redistribute: redistributeFromLast,
  });

  return (
    <div
      ref={splitter.ref}
      style={{
        display: 'flex',
        height: 200,
        borderRadius: 'var(--mantine-radius-md)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: \`\${splitter.sizes[0]}%\`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--mantine-color-blue-filled)',
          color: 'var(--mantine-color-white)',
          fontWeight: 500,
          whiteSpace: 'nowrap',
          gap: 2,
        }}
      >
        Panel A ({Math.round(splitter.sizes[0])}%)
      </div>
      <div
        {...splitter.getHandleProps({ index: 0 })}
        style={{
          width: 4,
          flexShrink: 0,
          cursor: 'col-resize',
          touchAction: 'none',
          backgroundColor: 'var(--mantine-color-default-border)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 8,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 'var(--mantine-radius-xs)',
            backgroundColor: 'var(--mantine-color-default)',
            border: '1px solid var(--mantine-color-default-border)',
            color: 'var(--mantine-color-dimmed)',
          }}
        >
          <DotsSixVerticalIcon />
        </div>
      </div>
      <div
        style={{
          width: \`\${splitter.sizes[1]}%\`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--mantine-color-teal-filled)',
          color: 'var(--mantine-color-white)',
          fontWeight: 500,
          whiteSpace: 'nowrap',
          gap: 2,
        }}
      >
        Panel B ({Math.round(splitter.sizes[1])}%)
      </div>
      <div
        {...splitter.getHandleProps({ index: 1 })}
        style={{
          width: 4,
          flexShrink: 0,
          cursor: 'col-resize',
          touchAction: 'none',
          backgroundColor: 'var(--mantine-color-default-border)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 8,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 'var(--mantine-radius-xs)',
            backgroundColor: 'var(--mantine-color-default)',
            border: '1px solid var(--mantine-color-default-border)',
            color: 'var(--mantine-color-dimmed)',
          }}
        >
          <DotsSixVerticalIcon />
        </div>
      </div>
      <div
        style={{
          width: \`\${splitter.sizes[2]}%\`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--mantine-color-grape-filled)',
          color: 'var(--mantine-color-white)',
          fontWeight: 500,
          whiteSpace: 'nowrap',
          gap: 2,
        }}
      >
        Panel C ({Math.round(splitter.sizes[2])}%)
      </div>
    </div>
  );
}
`,component:function(){let e=(0,n.useSplitter)({panels:[{defaultSize:25,min:10},{defaultSize:25,min:20},{defaultSize:50,min:10}],redistribute:I});return(0,o.jsxs)("div",{ref:e.ref,style:{display:"flex",height:200,borderRadius:"var(--mantine-radius-md)",overflow:"hidden"},children:[(0,o.jsxs)("div",{style:{width:`${e.sizes[0]}%`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"var(--mantine-color-blue-filled)",color:"var(--mantine-color-white)",fontWeight:500,whiteSpace:"nowrap",gap:2},children:["Panel A (",Math.round(e.sizes[0]),"%)"]}),(0,o.jsx)("div",{...e.getHandleProps({index:0}),style:{width:4,flexShrink:0,cursor:"col-resize",touchAction:"none",backgroundColor:"var(--mantine-color-default-border)",position:"relative"},children:(0,o.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:8,height:40,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"var(--mantine-radius-xs)",backgroundColor:"var(--mantine-color-default)",border:"1px solid var(--mantine-color-default-border)",color:"var(--mantine-color-dimmed)"},children:(0,o.jsx)(r.DotsSixVerticalIcon,{})})}),(0,o.jsxs)("div",{style:{width:`${e.sizes[1]}%`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"var(--mantine-color-teal-filled)",color:"var(--mantine-color-white)",fontWeight:500,whiteSpace:"nowrap",gap:2},children:["Panel B (",Math.round(e.sizes[1]),"%)"]}),(0,o.jsx)("div",{...e.getHandleProps({index:1}),style:{width:4,flexShrink:0,cursor:"col-resize",touchAction:"none",backgroundColor:"var(--mantine-color-default-border)",position:"relative"},children:(0,o.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:8,height:40,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"var(--mantine-radius-xs)",backgroundColor:"var(--mantine-color-default)",border:"1px solid var(--mantine-color-default-border)",color:"var(--mantine-color-dimmed)"},children:(0,o.jsx)(r.DotsSixVerticalIcon,{})})}),(0,o.jsxs)("div",{style:{width:`${e.sizes[2]}%`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"var(--mantine-color-grape-filled)",color:"var(--mantine-color-white)",fontWeight:500,whiteSpace:"nowrap",gap:2},children:["Panel C (",Math.round(e.sizes[2]),"%)"]})]})}},P={type:"code",code:`
import { DotsSixVerticalIcon } from '@phosphor-icons/react';
import { useSplitter } from '@mantine/hooks';

function Demo() {
  const splitter = useSplitter({
    panels: [
      { defaultSize: 50, min: 20 },
      { defaultSize: 50, min: 20 },
    ],
  });

  return (
    <div
      ref={splitter.ref}
      style={{
        display: 'flex',
        height: 200,
        borderRadius: 'var(--mantine-radius-md)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: \`\${splitter.sizes[0]}%\`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--mantine-color-blue-filled)',
          color: 'var(--mantine-color-white)',
          fontWeight: 500,
          whiteSpace: 'nowrap',
          gap: 2,
        }}
      >
        Panel A ({Math.round(splitter.sizes[0])}%)
      </div>
      <div
        style={{
          width: 1,
          flexShrink: 0,
          backgroundColor: 'var(--mantine-color-default-border)',
          position: 'relative',
        }}
      >
        <div
          {...splitter.getHandleProps({ index: 0 })}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 20,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'col-resize',
            touchAction: 'none',
            backgroundColor: 'var(--mantine-color-default)',
            border: '1px solid var(--mantine-color-default-border)',
            borderRadius: 'var(--mantine-radius-sm)',
            color: 'var(--mantine-color-dimmed)',
            zIndex: 1,
          }}
        >
          <DotsSixVerticalIcon />
        </div>
      </div>
      <div
        style={{
          width: \`\${splitter.sizes[1]}%\`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--mantine-color-teal-filled)',
          color: 'var(--mantine-color-white)',
          fontWeight: 500,
          whiteSpace: 'nowrap',
          gap: 2,
        }}
      >
        Panel B ({Math.round(splitter.sizes[1])}%)
      </div>
    </div>
  );
}
`,component:function(){let e=(0,n.useSplitter)({panels:[{defaultSize:50,min:20},{defaultSize:50,min:20}]});return(0,o.jsxs)("div",{ref:e.ref,style:{display:"flex",height:200,borderRadius:"var(--mantine-radius-md)",overflow:"hidden"},children:[(0,o.jsxs)("div",{style:{width:`${e.sizes[0]}%`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"var(--mantine-color-blue-filled)",color:"var(--mantine-color-white)",fontWeight:500,whiteSpace:"nowrap",gap:2},children:["Panel A (",Math.round(e.sizes[0]),"%)"]}),(0,o.jsx)("div",{style:{width:1,flexShrink:0,backgroundColor:"var(--mantine-color-default-border)",position:"relative"},children:(0,o.jsx)("div",{...e.getHandleProps({index:0}),style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:20,height:40,display:"flex",alignItems:"center",justifyContent:"center",cursor:"col-resize",touchAction:"none",backgroundColor:"var(--mantine-color-default)",border:"1px solid var(--mantine-color-default-border)",borderRadius:"var(--mantine-radius-sm)",color:"var(--mantine-color-dimmed)",zIndex:1},children:(0,o.jsx)(r.DotsSixVerticalIcon,{})})}),(0,o.jsxs)("div",{style:{width:`${e.sizes[1]}%`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"var(--mantine-color-teal-filled)",color:"var(--mantine-color-white)",fontWeight:500,whiteSpace:"nowrap",gap:2},children:["Panel B (",Math.round(e.sizes[1]),"%)"]})]})}},A={type:"code",code:`
import { DotsSixVerticalIcon, DotsSixIcon } from '@phosphor-icons/react';
import { useSplitter } from '@mantine/hooks';

function Demo() {
  const horizontal = useSplitter({
    panels: [
      { defaultSize: 30, min: 15 },
      { defaultSize: 70, min: 30 },
    ],
  });

  const vertical = useSplitter({
    panels: [
      { defaultSize: 60, min: 20 },
      { defaultSize: 40, min: 20 },
    ],
    orientation: 'vertical',
  });

  return (
    <div
      ref={horizontal.ref}
      style={{
        display: 'flex',
        height: 350,
        borderRadius: 'var(--mantine-radius-md)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: \`\${horizontal.sizes[0]}%\`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--mantine-color-blue-filled)',
          color: 'var(--mantine-color-white)',
          fontWeight: 500,
          whiteSpace: 'nowrap',
          gap: 2,
        }}
      >
        Panel A ({Math.round(horizontal.sizes[0])}%)
      </div>
      <div
        {...horizontal.getHandleProps({ index: 0 })}
        style={{
          width: 4,
          flexShrink: 0,
          cursor: 'col-resize',
          touchAction: 'none',
          backgroundColor: 'var(--mantine-color-default-border)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 8,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 'var(--mantine-radius-xs)',
            backgroundColor: 'var(--mantine-color-default)',
            border: '1px solid var(--mantine-color-default-border)',
            color: 'var(--mantine-color-dimmed)',
          }}
        >
          <DotsSixVerticalIcon style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
      <div
        ref={vertical.ref}
        style={{
          width: \`\${horizontal.sizes[1]}%\`,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            height: \`\${vertical.sizes[0]}%\`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--mantine-color-teal-filled)',
            color: 'var(--mantine-color-white)',
            fontWeight: 500,
            whiteSpace: 'nowrap',
            gap: 2,
          }}
        >
          Panel B ({Math.round(vertical.sizes[0])}%)
        </div>
        <div
          {...vertical.getHandleProps({ index: 0 })}
          style={{
            height: 4,
            flexShrink: 0,
            cursor: 'row-resize',
            touchAction: 'none',
            backgroundColor: 'var(--mantine-color-default-border)',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 40,
              height: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 'var(--mantine-radius-xs)',
              backgroundColor: 'var(--mantine-color-default)',
              border: '1px solid var(--mantine-color-default-border)',
              color: 'var(--mantine-color-dimmed)',
            }}
          >
            <DotsSixIcon style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
        <div
          style={{
            height: \`\${vertical.sizes[1]}%\`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--mantine-color-grape-filled)',
            color: 'var(--mantine-color-white)',
            fontWeight: 500,
            whiteSpace: 'nowrap',
            gap: 2,
          }}
        >
          Panel C ({Math.round(vertical.sizes[1])}%)
        </div>
      </div>
    </div>
  );
}
`,component:function(){let e=(0,n.useSplitter)({panels:[{defaultSize:30,min:15},{defaultSize:70,min:30}]}),t=(0,n.useSplitter)({panels:[{defaultSize:60,min:20},{defaultSize:40,min:20}],orientation:"vertical"});return(0,o.jsxs)("div",{ref:e.ref,style:{display:"flex",height:350,borderRadius:"var(--mantine-radius-md)",overflow:"hidden"},children:[(0,o.jsxs)("div",{style:{width:`${e.sizes[0]}%`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"var(--mantine-color-blue-filled)",color:"var(--mantine-color-white)",fontWeight:500,whiteSpace:"nowrap",gap:2},children:["Panel A (",Math.round(e.sizes[0]),"%)"]}),(0,o.jsx)("div",{...e.getHandleProps({index:0}),style:{width:4,flexShrink:0,cursor:"col-resize",touchAction:"none",backgroundColor:"var(--mantine-color-default-border)",position:"relative"},children:(0,o.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:8,height:40,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"var(--mantine-radius-xs)",backgroundColor:"var(--mantine-color-default)",border:"1px solid var(--mantine-color-default-border)",color:"var(--mantine-color-dimmed)"},children:(0,o.jsx)(r.DotsSixVerticalIcon,{style:{width:"100%",height:"100%"}})})}),(0,o.jsxs)("div",{ref:t.ref,style:{width:`${e.sizes[1]}%`,display:"flex",flexDirection:"column"},children:[(0,o.jsxs)("div",{style:{height:`${t.sizes[0]}%`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"var(--mantine-color-teal-filled)",color:"var(--mantine-color-white)",fontWeight:500,whiteSpace:"nowrap",gap:2},children:["Panel B (",Math.round(t.sizes[0]),"%)"]}),(0,o.jsx)("div",{...t.getHandleProps({index:0}),style:{height:4,flexShrink:0,cursor:"row-resize",touchAction:"none",backgroundColor:"var(--mantine-color-default-border)",position:"relative"},children:(0,o.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:40,height:8,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"var(--mantine-radius-xs)",backgroundColor:"var(--mantine-color-default)",border:"1px solid var(--mantine-color-default-border)",color:"var(--mantine-color-dimmed)"},children:(0,o.jsx)(d.DotsSixIcon,{style:{width:"100%",height:"100%"}})})}),(0,o.jsxs)("div",{style:{height:`${t.sizes[1]}%`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"var(--mantine-color-grape-filled)",color:"var(--mantine-color-white)",fontWeight:500,whiteSpace:"nowrap",gap:2},children:["Panel C (",Math.round(t.sizes[1]),"%)"]})]})]})}};var R=e.i(301388),$=e.i(19300);let M=["src/App.tsx","src/index.tsx","src/components/Header.tsx","src/components/Sidebar.tsx","src/hooks/useAuth.ts","src/utils/api.ts","package.json","tsconfig.json"],B=`import { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Header title="My App" />
      <div className="content">
        <Sidebar />
        <main>
          <h1>Welcome</h1>
          <p>Count: {count}</p>
          <button onClick={() => setCount(c => c + 1)}>
            Increment
          </button>
        </main>
      </div>
    </div>
  );
}`,W=`[vite] Dev server running at:

  > Local:    http://localhost:5173/
  > Network:  http://192.168.1.42:5173/

  ready in 142ms.

[vite] page reload src/App.tsx
[vite] hmr update /src/App.tsx`,H={width:4,flexShrink:0,cursor:"col-resize",touchAction:"none",backgroundColor:"var(--mantine-color-default-border)",position:"relative"},V={height:4,flexShrink:0,cursor:"row-resize",touchAction:"none",backgroundColor:"var(--mantine-color-default-border)",position:"relative"},F={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:8,height:40,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"var(--mantine-radius-xs)",backgroundColor:"var(--mantine-color-default)",border:"1px solid var(--mantine-color-default-border)",color:"var(--mantine-color-dimmed)"},T={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:40,height:8,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"var(--mantine-radius-xs)",backgroundColor:"var(--mantine-color-default)",border:"1px solid var(--mantine-color-default-border)",color:"var(--mantine-color-dimmed)"},G={type:"code",code:`
import { DotsSixVerticalIcon, DotsSixIcon } from '@phosphor-icons/react';
import { Code, ScrollArea, Text } from '@mantine/core';
import { useSplitter } from '@mantine/hooks';

const files = [
  'src/App.tsx',
  'src/index.tsx',
  'src/components/Header.tsx',
  'src/components/Sidebar.tsx',
  'src/hooks/useAuth.ts',
  'src/utils/api.ts',
  'package.json',
  'tsconfig.json',
];

const sampleCode = \`import { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Header title="My App" />
      <div className="content">
        <Sidebar />
        <main>
          <h1>Welcome</h1>
          <p>Count: {count}</p>
          <button onClick={() => setCount(c => c + 1)}>
            Increment
          </button>
        </main>
      </div>
    </div>
  );
}\`;

const output = \`[vite] Dev server running at:

  > Local:    http://localhost:5173/
  > Network:  http://192.168.1.42:5173/

  ready in 142ms.

[vite] page reload src/App.tsx
[vite] hmr update /src/App.tsx\`;

const handleH: React.CSSProperties = {
  width: 4,
  flexShrink: 0,
  cursor: 'col-resize',
  touchAction: 'none',
  backgroundColor: 'var(--mantine-color-default-border)',
  position: 'relative',
};

const handleV: React.CSSProperties = {
  height: 4,
  flexShrink: 0,
  cursor: 'row-resize',
  touchAction: 'none',
  backgroundColor: 'var(--mantine-color-default-border)',
  position: 'relative',
};

const gripH: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 8,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 'var(--mantine-radius-xs)',
  backgroundColor: 'var(--mantine-color-default)',
  border: '1px solid var(--mantine-color-default-border)',
  color: 'var(--mantine-color-dimmed)',
};

const gripV: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 40,
  height: 8,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 'var(--mantine-radius-xs)',
  backgroundColor: 'var(--mantine-color-default)',
  border: '1px solid var(--mantine-color-default-border)',
  color: 'var(--mantine-color-dimmed)',
};

function Demo() {
  const horizontal = useSplitter({
    panels: [
      { defaultSize: 20, min: 10, collapsible: true },
      { defaultSize: 80, min: 30 },
    ],
  });

  const vertical = useSplitter({
    panels: [
      { defaultSize: 70, min: 20 },
      { defaultSize: 30, min: 10 },
    ],
    orientation: 'vertical',
  });

  return (
    <div
      ref={horizontal.ref}
      style={{
        display: 'flex',
        height: 400,
        border: '1px solid var(--mantine-color-default-border)',
        borderRadius: 'var(--mantine-radius-md)',
        overflow: 'hidden',
        fontSize: 'var(--mantine-font-size-sm)',
      }}
    >
      <div style={{ width: \\\`\\\${horizontal.sizes[0]}%\\\`, overflow: 'hidden' }}>
        <div
          style={{
            padding: '8px 12px',
            fontWeight: 600,
            borderBottom: '1px solid var(--mantine-color-default-border)',
            whiteSpace: 'nowrap',
          }}
        >
          Explorer
        </div>
        <ScrollArea h="calc(100% - 37px)">
          {files.map((file) => (
            <div
              key={file}
              style={{
                padding: '4px 12px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {file}
            </div>
          ))}
        </ScrollArea>
      </div>

      <div {...horizontal.getHandleProps({ index: 0 })} style={handleH}>
        <div style={gripH}>
          <DotsSixVerticalIcon style={{ width: '100%', height: '100%' }} />
        </div>
      </div>

      <div
        ref={vertical.ref}
        style={{
          width: \\\`\\\${horizontal.sizes[1]}%\\\`,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ height: \\\`\\\${vertical.sizes[0]}%\\\`, overflow: 'hidden' }}>
          <div
            style={{
              padding: '8px 12px',
              fontWeight: 600,
              borderBottom: '1px solid var(--mantine-color-default-border)',
              whiteSpace: 'nowrap',
            }}
          >
            src/App.tsx
          </div>
          <ScrollArea h="calc(100% - 37px)">
            <Code block style={{ border: 'none', borderRadius: 0, background: 'transparent' }}>
              {sampleCode}
            </Code>
          </ScrollArea>
        </div>

        <div {...vertical.getHandleProps({ index: 0 })} style={handleV}>
          <div style={gripV}>
            <DotsSixIcon style={{ width: '100%', height: '100%' }} />
          </div>
        </div>

        <div style={{ height: \\\`\\\${vertical.sizes[1]}%\\\`, overflow: 'hidden' }}>
          <div
            style={{
              padding: '8px 12px',
              fontWeight: 600,
              borderBottom: '1px solid var(--mantine-color-default-border)',
              whiteSpace: 'nowrap',
            }}
          >
            Terminal
          </div>
          <ScrollArea h="calc(100% - 37px)">
            <Text
              component="pre"
              size="xs"
              style={{ margin: 0, padding: '8px 12px', fontFamily: 'monospace' }}
            >
              {output}
            </Text>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
`,component:function(){let e=(0,n.useSplitter)({panels:[{defaultSize:20,min:10,collapsible:!0},{defaultSize:80,min:30}]}),t=(0,n.useSplitter)({panels:[{defaultSize:70,min:20},{defaultSize:30,min:10}],orientation:"vertical"});return(0,o.jsxs)("div",{ref:e.ref,style:{display:"flex",height:400,border:"1px solid var(--mantine-color-default-border)",borderRadius:"var(--mantine-radius-md)",overflow:"hidden",fontSize:"var(--mantine-font-size-sm)"},children:[(0,o.jsxs)("div",{style:{width:`${e.sizes[0]}%`,overflow:"hidden"},children:[(0,o.jsx)("div",{style:{padding:"8px 12px",fontWeight:600,borderBottom:"1px solid var(--mantine-color-default-border)",whiteSpace:"nowrap"},children:"Explorer"}),(0,o.jsx)($.ScrollArea,{h:"calc(100% - 37px)",children:M.map(e=>(0,o.jsx)("div",{style:{padding:"4px 12px",cursor:"pointer",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e},e))})]}),(0,o.jsx)("div",{...e.getHandleProps({index:0}),style:H,children:(0,o.jsx)("div",{style:F,children:(0,o.jsx)(r.DotsSixVerticalIcon,{style:{width:"100%",height:"100%"}})})}),(0,o.jsxs)("div",{ref:t.ref,style:{width:`${e.sizes[1]}%`,display:"flex",flexDirection:"column"},children:[(0,o.jsxs)("div",{style:{height:`${t.sizes[0]}%`,overflow:"hidden"},children:[(0,o.jsx)("div",{style:{padding:"8px 12px",fontWeight:600,borderBottom:"1px solid var(--mantine-color-default-border)",whiteSpace:"nowrap"},children:"src/App.tsx"}),(0,o.jsx)($.ScrollArea,{h:"calc(100% - 37px)",children:(0,o.jsx)(R.Code,{block:!0,style:{border:"none",borderRadius:0,background:"transparent"},children:B})})]}),(0,o.jsx)("div",{...t.getHandleProps({index:0}),style:V,children:(0,o.jsx)("div",{style:T,children:(0,o.jsx)(d.DotsSixIcon,{style:{width:"100%",height:"100%"}})})}),(0,o.jsxs)("div",{style:{height:`${t.sizes[1]}%`,overflow:"hidden"},children:[(0,o.jsx)("div",{style:{padding:"8px 12px",fontWeight:600,borderBottom:"1px solid var(--mantine-color-default-border)",whiteSpace:"nowrap"},children:"Terminal"}),(0,o.jsx)($.ScrollArea,{h:"calc(100% - 37px)",children:(0,o.jsx)(b.Text,{component:"pre",size:"xs",style:{margin:0,padding:"8px 12px",fontFamily:"monospace"},children:W})})]})]})]})}};var N=(0,t.__exportAll)({codeEditor:()=>G,collapsible:()=>h,controlled:()=>y,gripOnly:()=>P,multiple:()=>g,nested:()=>A,redistributeCustom:()=>D,redistributeEqual:()=>k,redistributeNearest:()=>z,usage:()=>s,vertical:()=>m});e.s(["UseSplitterDemos",0,N],894972)}]);