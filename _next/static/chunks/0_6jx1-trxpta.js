(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,i)=>{let l={};for(var r in e)t(l,r,{get:e[r],enumerable:!0});return i||t(l,Symbol.toStringTag,{value:"Module"}),l}])},752082,e=>{"use strict";var t=e.i(648863),i=e.i(779177),l=e.i(481178),r=e.i(317477),o=e.i(44091),n=e.i(391466),s=e.i(275519),a=e.i(232471),c={root:"m_fa528724",svg:"m_62e9e7e2",filledSegment:"m_c573fb6f",label:"m_4fa340f2"},m=e.i(852361),d=e.i(391398);let u={size:200,thickness:12,orientation:"up",fillDirection:"left-to-right",labelPosition:"bottom"},p=(0,l.createVarsResolver)((e,{filledSegmentColor:t,emptySegmentColor:l,orientation:o,fillDirection:n,transitionDuration:s,thickness:a})=>({root:{"--scp-filled-segment-color":t?(0,r.getThemeColor)(t,e):void 0,"--scp-empty-segment-color":l?(0,r.getThemeColor)(l,e):void 0,"--scp-rotation":function({orientation:e,fillDirection:t}){return"down"===e?"right-to-left"===t?"rotate(180deg) rotateY(180deg)":"rotate(180deg)":"left-to-right"===t?"rotateY(180deg)":void 0}({orientation:o,fillDirection:n}),"--scp-transition-duration":s?`${s}ms`:void 0,"--scp-thickness":(0,i.rem)(a)}})),g=(0,s.factory)(e=>{let t=(0,o.useProps)("SemiCircleProgress",u,e),{classNames:i,className:l,style:r,styles:s,unstyled:g,vars:h,size:f,thickness:v,value:b,orientation:x,fillDirection:y,filledSegmentColor:S,emptySegmentColor:j,transitionDuration:C,label:P,labelPosition:k,attributes:w,...D}=t,L=(0,n.useStyles)({name:"SemiCircleProgress",classes:c,props:t,className:l,style:r,classNames:i,styles:s,unstyled:g,attributes:w,vars:h,varsResolver:p}),T=f/2,z=(f-2*v)/2,B=Math.PI*z,_=(0,m.clamp)(b,0,100)*(B/100);return(0,d.jsxs)(a.Box,{size:f,...L("root"),...D,children:[P&&(0,d.jsx)("div",{...L("label"),"data-position":k,"data-orientation":x,children:P}),(0,d.jsxs)("svg",{width:f,height:f/2,viewBox:`0 0 ${f} ${f/2}`,...L("svg"),children:[(0,d.jsx)("circle",{cx:T,cy:T,r:z,fill:"none",stroke:"var(--scp-empty-segment-color)",strokeWidth:v,strokeDasharray:B,...L("emptySegment",{style:{strokeDashoffset:B}})}),(0,d.jsx)("circle",{cx:T,cy:T,r:z,fill:"none",stroke:"var(--scp-filled-segment-color)",strokeWidth:v,strokeDasharray:B,...L("filledSegment",{style:{strokeDashoffset:_,...0===_?{strokeOpacity:0}:null}})})]})]})});g.displayName="@mantine/core/SemiCircleProgress",g.classes=c,g.varsResolver=p;let h={type:"configurator",component:function(e){return(0,d.jsx)(g,{label:"Label",...e})},code:`
import { SemiCircleProgress } from '@mantine/core';


function Demo() {
  return (
    <SemiCircleProgress
      {{props}}
      label="Label"
    />
  );
}
`,centered:!0,controls:[{type:"segmented",prop:"fillDirection",initialValue:"left-to-right",data:[{label:"Right to left",value:"right-to-left"},{label:"Left to right",value:"left-to-right"}],libraryValue:null},{type:"segmented",prop:"orientation",initialValue:"up",data:[{label:"Up",value:"up"},{label:"Down",value:"down"}],libraryValue:null},{type:"color",prop:"filledSegmentColor",initialValue:"blue",libraryValue:null},{type:"number",prop:"size",min:120,max:450,initialValue:200,libraryValue:null},{type:"number",prop:"thickness",min:1,max:20,initialValue:12,libraryValue:null},{type:"number",prop:"value",min:0,max:100,initialValue:40,libraryValue:null}]},f={type:"code",component:function(){return(0,d.jsx)(g,{value:30,emptySegmentColor:"var(--mantine-color-dimmed)"})},code:`
import { SemiCircleProgress } from '@mantine/core';

function Demo() {
  return <SemiCircleProgress value={30} emptySegmentColor="var(--mantine-color-dimmed)" />;
}
`,centered:!0},v={type:"code",component:function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(g,{value:30,label:"Bottom",mb:"xl"}),(0,d.jsx)(g,{value:30,label:"Center",labelPosition:"center"})]})},code:`
import { SemiCircleProgress } from '@mantine/core';

function Demo() {
  return (
    <>
      <SemiCircleProgress value={30} label="Bottom" mb="xl" />
      <SemiCircleProgress value={30} label="Center" labelPosition="center" />
    </>
  );
}
`,centered:!0};var b=e.i(191788),x=e.i(485108);let y={type:"code",component:function(){let[e,t]=(0,b.useState)(30);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(g,{value:e,transitionDuration:250,label:`${e}%`}),(0,d.jsx)(x.Button,{onClick:()=>t(Math.floor(100*Math.random())),mt:"xl",fullWidth:!0,children:"Set random value"})]})},code:`
import { useState } from 'react';
import { Button, SemiCircleProgress } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(30);

  return (
    <>
      <SemiCircleProgress value={value} transitionDuration={250} label={\`\${value}%\`} />

      <Button onClick={() => setValue(Math.floor(Math.random() * 100))} mt="xl" fullWidth>
        Set random value
      </Button>
    </>
  );
}
`,centered:!0};var S=e.i(140763);let j={type:"code",component:function(){return(0,d.jsxs)(S.SimpleGrid,{cols:{sm:2},spacing:"xl",children:[(0,d.jsx)(g,{value:60,orientation:"up",fillDirection:"left-to-right",label:"Up, L→R",size:150}),(0,d.jsx)(g,{value:60,orientation:"up",fillDirection:"right-to-left",label:"Up, R→L",size:150}),(0,d.jsx)(g,{value:60,orientation:"down",fillDirection:"left-to-right",label:"Down, L→R",size:150}),(0,d.jsx)(g,{value:60,orientation:"down",fillDirection:"right-to-left",label:"Down, R→L",size:150})]})},code:`
import { SemiCircleProgress, SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid cols={{ sm:2 }} spacing="xl">
      <SemiCircleProgress
        value={60}
        orientation="up"
        fillDirection="left-to-right"
        label="Up, L→R"
        size={150}
      />
      <SemiCircleProgress
        value={60}
        orientation="up"
        fillDirection="right-to-left"
        label="Up, R→L"
        size={150}
      />
      <SemiCircleProgress
        value={60}
        orientation="down"
        fillDirection="left-to-right"
        label="Down, L→R"
        size={150}
      />
      <SemiCircleProgress
        value={60}
        orientation="down"
        fillDirection="right-to-left"
        label="Down, R→L"
        size={150}
      />
    </SimpleGrid>
  );
}
`,defaultExpanded:!1,centered:!0};var C=e.i(60695),P=e.i(671640),k=e.i(883364);let w={type:"code",component:function(){let[e,t]=(0,b.useState)(75);return(0,d.jsxs)(P.Stack,{align:"center",gap:"md",children:[(0,d.jsx)("div",{style:{position:"relative",width:200,height:120},children:(0,d.jsx)(g,{value:e,filledSegmentColor:(e=>{switch(!0){case e<20:return"red";case e<50:return"yellow";default:return"green"}})(e),label:`${e}%`,labelPosition:"center",size:200,thickness:12})}),(0,d.jsx)(k.Text,{size:"sm",c:"dimmed",children:"Battery Level"}),(0,d.jsx)(a.Box,{w:200,children:(0,d.jsx)(C.Slider,{min:0,max:100,value:e,onChange:t})})]})},code:`
import { SemiCircleProgress, Stack, Text } from '@mantine/core';
import { useState } from 'react';

const getBatteryColor = (level: number) => {
  switch (true) {
    case level < 20:
      return 'red';
    case level < 50:
      return 'yellow';
    default:
      return 'green';
  }
};

function Demo() {
  const [batteryLevel, setBatteryLevel] = useState(75);

  return (
    <Stack align="center" gap="md">
      <div style={{ position: 'relative', width: 200, height: 120 }}>
        <SemiCircleProgress
          value={batteryLevel}
          filledSegmentColor={getBatteryColor(batteryLevel)}
          label={\`\${batteryLevel}%\`}
          labelPosition="center"
          size={200}
          thickness={12}
        />
      </div>
      <Text size="sm" c="dimmed">
        Battery Level
      </Text>
      <input
        type="range"
        min="0"
        max="100"
        value={batteryLevel}
        onChange={(e) => setBatteryLevel(Number(e.target.value))}
        style={{ width: 200 }}
      />
    </Stack>
  );
}
`,defaultExpanded:!1,centered:!0};var D=e.i(725695),L=e.i(284629);let T=["red","orange","yellow","lime","green"],z={type:"code",component:function(){let[e,t]=(0,b.useState)(4);return(0,d.jsxs)(P.Stack,{align:"center",gap:"xs",children:[(0,d.jsx)("div",{style:{position:"relative",width:200,height:120},children:(0,d.jsx)(g,{value:e/5*100,filledSegmentColor:T[e-1]||"gray",label:(0,d.jsx)(k.Text,{fz:36,fw:800,pb:30,children:`${e}/5`}),labelPosition:"center",orientation:"down",size:200,thickness:12})}),(0,d.jsx)(k.Text,{size:"sm",c:"dimmed",children:"Skill Rating"}),(0,d.jsx)(D.Group,{gap:"xs",children:[1,2,3,4,5].map(i=>(0,d.jsx)(L.UnstyledButton,{onClick:()=>t(i),px:"sm",py:4,bg:e===i?"#087f5b":"#e7f5f0",c:e===i?"white":"#087f5b",style:{borderRadius:4},children:i},i))})]})},code:`
import { SemiCircleProgress, Stack, Text } from '@mantine/core';
import { useState } from 'react';

const colors = ['red', 'orange', 'yellow', 'lime', 'green'];

function Demo() {
  const [skillLevel, setSkillLevel] = useState(4);

  return (
    <Stack align="center" gap="md">
      <div style={{ position: 'relative', width: 200, height: 120 }}>
        <SemiCircleProgress
          value={(skillLevel / 5) * 100}
          filledSegmentColor={colors[skillLevel - 1] || 'gray'}
          label={<Text fz={36} fw={800} pb={30}>{\`\${skillLevel}/5\`}</Text>}
          labelPosition="center"
          orientation="down"
          size={200}
          thickness={12}
        />
      </div>

      <Text size="sm" c="dimmed">
        Skill Rating
      </Text>

      <div style={{ display: 'flex', gap: 8 }}>
        {[1, 2, 3, 4, 5].map((level) => (
          <button
            key={level}
            onClick={() => setSkillLevel(level)}
            style={{
              padding: '4px 12px',
              backgroundColor: skillLevel === level ? '#087f5b' : '#e7f5f0',
              color: skillLevel === level ? 'white' : '#087f5b',
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer',
            }}
          >
            {level}
          </button>
        ))}
      </div>
    </Stack>
  );
}
`,defaultExpanded:!1,centered:!0};var B=(0,t.__exportAll)({batteryIndicator:()=>w,emptySegmentColor:()=>f,labelPosition:()=>v,orientations:()=>j,skillRating:()=>z,transitions:()=>y,usage:()=>h});e.s(["SemiCircleProgressDemos",0,B],752082)},152507,e=>{"use strict";var t=e.i(391398),i=e.i(38856),l=e.i(752082);e.i(603441);var r=e.i(62558);e.i(457450);var o=e.i(418026);let n=(0,r.Layout)(o.MDX_DATA.SemiCircleProgress);function s(e){let r={code:"code",h2:"h2",p:"p",...(0,i.useMDXComponents)(),...e.components},{Demo:o}=r;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(o,{data:l.SemiCircleProgressDemos.usage}),"\n",(0,t.jsx)(r.h2,{id:"change-empty-segment-color",children:"Change empty segment color"}),"\n",(0,t.jsxs)(r.p,{children:["Use ",(0,t.jsx)(r.code,{children:"emptySegmentColor"})," prop to change color of empty segment,\nit accepts key of ",(0,t.jsx)(r.code,{children:"theme.colors"})," or any valid CSS color value:"]}),"\n",(0,t.jsx)(o,{data:l.SemiCircleProgressDemos.emptySegmentColor}),"\n",(0,t.jsx)(r.h2,{id:"change-label-position",children:"Change label position"}),"\n",(0,t.jsxs)(r.p,{children:["By default, the label is displayed at the bottom of the component,\nyou can change its position to ",(0,t.jsx)(r.code,{children:"center"})," by using ",(0,t.jsx)(r.code,{children:"labelPosition"})," prop:"]}),"\n",(0,t.jsx)(o,{data:l.SemiCircleProgressDemos.labelPosition}),"\n",(0,t.jsx)(r.h2,{id:"filled-segment-transition",children:"Filled segment transition"}),"\n",(0,t.jsxs)(r.p,{children:["By default, transitions are disabled, to enable them, set ",(0,t.jsx)(r.code,{children:"transitionDuration"})," prop\nto a number of milliseconds:"]}),"\n",(0,t.jsx)(o,{data:l.SemiCircleProgressDemos.transitions})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})})}])},202179,(e,t,i)=>{let l="/core/semi-circle-progress";(window.__NEXT_P=window.__NEXT_P||[]).push([l,()=>e.r(152507)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([l])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);