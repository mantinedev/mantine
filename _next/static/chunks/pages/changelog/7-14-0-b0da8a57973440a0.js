(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[18272],{51709:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-14-0",function(){return t(73895)}])},73895:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var a=t(52322),r=t(45392),o=t(86103),l=t(28683),i=t(43502),s=t(60589),c=t(47838),d=t(9345),u=t(54078),h=t(15019);let m=(0,u.A)(h.us.Changelog7140);function p(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"angleslider-component",children:"AngleSlider component"}),"\n",(0,a.jsxs)(n.p,{children:["New ",(0,a.jsx)(n.a,{href:"/core/angle-slider/",children:"AngleSlider"})," component:"]}),"\n",(0,a.jsx)(t,{data:o.E}),"\n",(0,a.jsx)(n.h2,{id:"radialbarchart-component",children:"RadialBarChart component"}),"\n",(0,a.jsxs)(n.p,{children:["New ",(0,a.jsx)(n.a,{href:"/charts/radial-bar-chart/",children:"RadialBarChart"})," component:"]}),"\n",(0,a.jsx)(t,{data:l.p}),"\n",(0,a.jsx)(n.h2,{id:"funnelchart-component",children:"FunnelChart component"}),"\n",(0,a.jsxs)(n.p,{children:["New ",(0,a.jsx)(n.a,{href:"/charts/funnel-chart/",children:"FunnelChart"})," component:"]}),"\n",(0,a.jsx)(t,{data:i.j}),"\n",(0,a.jsx)(n.h2,{id:"modalstack-and-drawerstack-components",children:"Modal.Stack and Drawer.Stack components"}),"\n",(0,a.jsxs)(n.p,{children:["New ",(0,a.jsx)(n.a,{href:"/core/modal/",children:"Modal.Stack"})," and ",(0,a.jsx)(n.a,{href:"/core/drawer",children:"Drawer.Stack"})," components simplify usage of multiple modals/drawers at the same time."]}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"Modal.Stack"})," component to render multiple modals at the same time.\n",(0,a.jsx)(n.code,{children:"Modal.Stack"})," keeps track of opened modals, manages z-index values, focus trapping\nand ",(0,a.jsx)(n.code,{children:"closeOnEscape"})," behavior. ",(0,a.jsx)(n.code,{children:"Modal.Stack"})," is designed to be used with ",(0,a.jsx)(n.code,{children:"useModalsStack"})," hook."]}),"\n",(0,a.jsxs)(n.p,{children:["Differences from using multiple ",(0,a.jsx)(n.code,{children:"Modal"})," components:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Modal.Stack"})," manages z-index values – modals that are opened later will always have higher z-index value disregarding their order in the DOM"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Modal.Stack"})," disables focus trap and ",(0,a.jsx)(n.code,{children:"Escape"})," key handling for all modals except the one that is currently opened"]}),"\n",(0,a.jsxs)(n.li,{children:["Modals that are not currently opened are present in the DOM but are hidden with ",(0,a.jsx)(n.code,{children:"opacity: 0"})," and ",(0,a.jsx)(n.code,{children:"pointer-events: none"})]}),"\n",(0,a.jsx)(n.li,{children:"Only one overlay is rendered at a time"}),"\n"]}),"\n",(0,a.jsx)(t,{data:s.k}),"\n",(0,a.jsx)(n.h2,{id:"usemodalsstackusedrawersstack-hooks",children:"useModalsStack/useDrawersStack hooks"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"useModalsStack"})," hook provides an easy way to control multiple modals at the same time.\nIt accepts an array of unique modals ids and returns an object with the following properties:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"interface ModalStackReturnType<T extends string> {\n  // Current opened state of each modal\n  state: Record<T, boolean>;\n\n  // Opens modal with the given id\n  open: (id: T) => void;\n\n  // Closes modal with the given id\n  close: (id: T) => void;\n\n  // Toggles modal with the given id\n  toggle: (id: T) => void;\n\n  // Closes all modals within the stack\n  closeAll: () => void;\n\n  // Returns props for modal with the given id\n  register: (id: T) => {\n    opened: boolean;\n    onClose: () => void;\n    stackId: T;\n  };\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Example of using ",(0,a.jsx)(n.code,{children:"useModalsStack"})," with ",(0,a.jsx)(n.code,{children:"Modal"})," component:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { Modal, useModalsStack } from '@mantine/core';\n\nfunction Demo() {\n  const stack = useModalsStack(['first', 'second']);\n\n  return (\n    <>\n      <Modal {...stack.register('first')}>First</Modal>\n      <Modal {...stack.register('second')}>Second</Modal>\n      <Button onClick={() => stack.open('first')}>Open first</Button>\n    </>\n  );\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"restrict-slider-selection-to-marks",children:"Restrict Slider selection to marks"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/core/slider",children:"Slider"})," component now supports ",(0,a.jsx)(n.code,{children:"restrictToMarks"})," prop that restricts slider value to marks only.\nNote that in this case ",(0,a.jsx)(n.code,{children:"step"})," prop is ignored:"]}),"\n",(0,a.jsx)(t,{data:c.Z}),"\n",(0,a.jsx)(n.h2,{id:"barchart-svg-pattern-fill",children:"BarChart SVG pattern fill"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/charts/bar-chart",children:"BarChart"})," now can be used with SVG pattern fill:"]}),"\n",(0,a.jsx)(t,{data:d.W}),"\n",(0,a.jsx)(n.h2,{id:"help-center-updates",children:"Help center updates"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["New ",(0,a.jsx)(n.a,{href:"https://help.mantine.dev/q/nested-inline-styles",children:"Can I use nested inline styles with Mantine components?"})," question"]}),"\n",(0,a.jsxs)(n.li,{children:["New ",(0,a.jsx)(n.a,{href:"https://help.mantine.dev/q/postcss-fns-inline",children:"Can I use PostCSS function in inline styles?"})," question"]}),"\n",(0,a.jsxs)(n.li,{children:["New ",(0,a.jsx)(n.a,{href:"https://help.mantine.dev/q/carousel-missing-styles",children:"Why my Carousel slides are in vertical orientation?"})," question"]}),"\n",(0,a.jsxs)(n.li,{children:["New ",(0,a.jsx)(n.a,{href:"https://help.mantine.dev/q/transparent-buttons",children:"My buttons are transparent and the background is visible only on hover, what is wrong?"})," question"]}),"\n",(0,a.jsxs)(n.li,{children:["New ",(0,a.jsx)(n.a,{href:"https://help.mantine.dev/q/primary-virtual-color",children:"Can I have different primary color for light and dark color schemes?"})," question"]}),"\n",(0,a.jsxs)(n.li,{children:["New ",(0,a.jsx)(n.a,{href:"https://help.mantine.dev/q/body-background",children:"How can I change body background color?"})," question"]}),"\n",(0,a.jsxs)(n.li,{children:["New ",(0,a.jsx)(n.a,{href:"https://help.mantine.dev/q/nested-popover-closes",children:"My Popover dropdown closes when I click on the dropdown of nested Popover"})," question"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/core/tree/",children:"useTree"})," hook now accepts ",(0,a.jsx)(n.code,{children:"onNodeExpand"})," and ",(0,a.jsx)(n.code,{children:"onNodeCollapse"})," callbacks"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/core/tree/",children:"useTree"})," hook now returns additional ",(0,a.jsx)(n.code,{children:"checkAllNodes"}),", ",(0,a.jsx)(n.code,{children:"uncheckAllNodes"})," and ",(0,a.jsx)(n.code,{children:"setCheckedState"})," handlers"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/core/tree",children:"Tree"})," component now includes ",(0,a.jsx)(n.code,{children:"getTreeExpandedState"})," to generate expanded state based on the tree data"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/form/use-form",children:"use-form"})," now supports ",(0,a.jsx)(n.code,{children:"form.replaceListItem"})," handler to replace list item at given index"]}),"\n"]})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(m,{...e,children:(0,a.jsx)(p,{...e})})}},43502:function(e,n,t){"use strict";t.d(n,{j:function(){return l}});var a=t(52322),r=t(17802),o=t(36966);let l={type:"code",component:function(){return(0,a.jsx)(r.G,{data:o.a})},code:[{code:`
import { FunnelChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <FunnelChart data={data} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:o.o,language:"tsx",fileName:"data.ts"}],centered:!0}},36966:function(e,n,t){"use strict";t.d(n,{a:function(){return a},o:function(){return r}});let a=[{name:"USA",value:400,color:"indigo.6"},{name:"India",value:300,color:"yellow.6"},{name:"Japan",value:100,color:"teal.6"},{name:"Other",value:200,color:"gray.6"}],r=`
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
`},28683:function(e,n,t){"use strict";t.d(n,{p:function(){return l}});var a=t(52322),r=t(3769),o=t(39770);let l={type:"code",component:function(){return(0,a.jsx)(r.B,{data:o.a,dataKey:"value",h:280,withLabels:!0})},code:[{fileName:"Demo.tsx",code:`
import { RadialBarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <RadialBarChart data={data} dataKey="value" h={280} withLabels />;
}
`,language:"tsx"},{fileName:"data.ts",code:o.o,language:"tsx"}]}},39770:function(e,n,t){"use strict";t.d(n,{a:function(){return a},o:function(){return r}});let a=[{name:"18-24",value:31.47,color:"blue.7"},{name:"25-29",value:26.69,color:"orange.6"},{name:"30-34",value:15.69,color:"yellow.7"},{name:"35-39",value:8.22,color:"cyan.6"},{name:"40-49",value:8.63,color:"green"},{name:"50+",value:2.63,color:"pink"},{name:"unknown",value:6.67,color:"gray"}],r=`
export const data = [
  { name: '18-24', value: 31.47, color: 'blue.7' },
  { name: '25-29', value: 26.69, color: 'orange.6' },
  { name: '30-34', value: 15.69, color: 'yellow.7' },
  { name: '35-39', value: 8.22, color: 'cyan.6' },
  { name: '40-49', value: 8.63, color: 'green' },
  { name: '50+', value: 2.63, color: 'pink' },
  { name: 'unknown', value: 6.67, color: 'gray' },
];
`},86103:function(e,n,t){"use strict";t.d(n,{E:function(){return l}});var a=t(52322),r=t(93010),o=t(6004);let l={type:"code",component:function(){return(0,a.jsxs)(r.Z,{p:"lg",gap:50,children:[(0,a.jsx)(o.r,{"aria-label":"Angle slider",formatLabel:e=>`${e}\xb0`,size:100,restrictToMarks:!0,marks:[{value:0},{value:45},{value:90},{value:135},{value:180},{value:225},{value:270},{value:315}]}),(0,a.jsx)(o.r,{"aria-label":"Angle slider",formatLabel:e=>`${e}\xb0`,size:100,marks:[{value:0,label:"0\xb0"},{value:45,label:"45\xb0"},{value:90,label:"90\xb0"},{value:135,label:"135\xb0"},{value:180,label:"180\xb0"},{value:225,label:"225\xb0"},{value:270,label:"270\xb0"},{value:315,label:"315\xb0"}]})]})},code:`
import { AngleSlider, Group } from '@mantine/core';

function Demo() {
  return (
    <Group p="lg" gap={50}>
      <AngleSlider
        aria-label="Angle slider"
        formatLabel={(value) => \`\${value}\xb0\`}
        size={100}
        restrictToMarks
        marks={[
          { value: 0 },
          { value: 45 },
          { value: 90 },
          { value: 135 },
          { value: 180 },
          { value: 225 },
          { value: 270 },
          { value: 315 },
        ]}
      />

      <AngleSlider
        aria-label="Angle slider"
        formatLabel={(value) => \`\${value}\xb0\`}
        size={100}
        marks={[
          { value: 0, label: '0\xb0' },
          { value: 45, label: '45\xb0' },
          { value: 90, label: '90\xb0' },
          { value: 135, label: '135\xb0' },
          { value: 180, label: '180\xb0' },
          { value: 225, label: '225\xb0' },
          { value: 270, label: '270\xb0' },
          { value: 315, label: '315\xb0' },
        ]}
      />
    </Group>
  );
}
`,centered:!0}},60589:function(e,n,t){"use strict";t.d(n,{k:function(){return s}});var a=t(52322),r=t(80832),o=t(31946),l=t(93010),i=t(39629);let s={type:"code",code:`
import { Button, Group, Modal, useModalsStack } from '@mantine/core';

function Demo() {
  const stack = useModalsStack(['delete-page', 'confirm-action', 'really-confirm-action']);

  return (
    <>
      <Modal.Stack>
        <Modal {...stack.register('delete-page')} title="Delete this page?">
          Are you sure you want to delete this page? This action cannot be undone.
          <Group mt="lg" justify="flex-end">
            <Button onClick={stack.closeAll} variant="default">
              Cancel
            </Button>
            <Button onClick={() => stack.open('confirm-action')} color="red">
              Delete
            </Button>
          </Group>
        </Modal>

        <Modal {...stack.register('confirm-action')} title="Confirm action">
          Are you sure you want to perform this action? This action cannot be undone. If you are
          sure, press confirm button below.
          <Group mt="lg" justify="flex-end">
            <Button onClick={stack.closeAll} variant="default">
              Cancel
            </Button>
            <Button onClick={() => stack.open('really-confirm-action')} color="red">
              Confirm
            </Button>
          </Group>
        </Modal>

        <Modal {...stack.register('really-confirm-action')} title="Really confirm action">
          Jokes aside. You have confirmed this action. This is your last chance to cancel it. After
          you press confirm button below, action will be performed and cannot be undone. For real
          this time. Are you sure you want to proceed?
          <Group mt="lg" justify="flex-end">
            <Button onClick={stack.closeAll} variant="default">
              Cancel
            </Button>
            <Button onClick={stack.closeAll} color="red">
              Confirm
            </Button>
          </Group>
        </Modal>
      </Modal.Stack>

      <Button variant="default" onClick={() => stack.open('delete-page')}>
        Open modal
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let e=(0,r.p)(["delete-page","confirm-action","really-confirm-action"]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.u.Stack,{children:[(0,a.jsxs)(o.u,{...e.register("delete-page"),title:"Delete this page?",children:["Are you sure you want to delete this page? This action cannot be undone.",(0,a.jsxs)(l.Z,{mt:"lg",justify:"flex-end",children:[(0,a.jsx)(i.z,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,a.jsx)(i.z,{onClick:()=>e.open("confirm-action"),color:"red",children:"Delete"})]})]}),(0,a.jsxs)(o.u,{...e.register("confirm-action"),title:"Confirm action",children:["Are you sure you want to perform this action? This action cannot be undone. If you are sure, press confirm button below.",(0,a.jsxs)(l.Z,{mt:"lg",justify:"flex-end",children:[(0,a.jsx)(i.z,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,a.jsx)(i.z,{onClick:()=>e.open("really-confirm-action"),color:"red",children:"Confirm"})]})]}),(0,a.jsxs)(o.u,{...e.register("really-confirm-action"),title:"Really confirm action",children:["Jokes aside. You have confirmed this action. This is your last chance to cancel it. After you press confirm button below, action will be performed and cannot be undone. For real this time. Are you sure you want to proceed?",(0,a.jsxs)(l.Z,{mt:"lg",justify:"flex-end",children:[(0,a.jsx)(i.z,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,a.jsx)(i.z,{onClick:e.closeAll,color:"red",children:"Confirm"})]})]})]}),(0,a.jsx)(i.z,{variant:"default",onClick:()=>e.open("delete-page"),children:"Open modal"})]})}}},47838:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var a=t(52322),r=t(65438),o=t(73822),l=t(5356);let i={type:"code",component:function(){return(0,a.jsxs)(r.K,{children:[(0,a.jsx)(o.i,{restrictToMarks:!0,defaultValue:25,marks:Array.from({length:5}).map((e,n)=>({value:25*n}))}),(0,a.jsx)(l.U,{restrictToMarks:!0,defaultValue:[5,15],marks:[{value:5},{value:15},{value:25},{value:35},{value:70},{value:80},{value:90}]})]})},code:`
import { RangeSlider, Slider, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Slider
        restrictToMarks
        defaultValue={25}
        marks={Array.from({ length: 5 }).map((_, index) => ({ value: index * 25 }))}
      />

      <RangeSlider
        restrictToMarks
        defaultValue={[5, 15]}
        marks={[
          { value: 5 },
          { value: 15 },
          { value: 25 },
          { value: 35 },
          { value: 70 },
          { value: 80 },
          { value: 90 },
        ]}
      />
    </Stack>
  );
}
`,centered:!0,maxWidth:400}},17802:function(e,n,t){"use strict";t.d(n,{G:function(){return w}});var a=t(52322),r=t(18205),o=t(21836),l=t(77568),i=t(96621),s=t(11011),c=t(21154),d=t(11200),u=t(13588),h=t(58898),m=t(82027),p=t(38483),f=t(68755),v=t(46690),x=t(51477),j=t(28559),g=t(50425),b={root:"m_80d531e7"};let k={withTooltip:!0,size:300,strokeWidth:1,withLabels:!1,labelsPosition:"right",tooltipDataSource:"all"},y=(0,d.Z)((e,{strokeColor:n,labelColor:t,size:a})=>({root:{"--chart-stroke-color":n?(0,u.p)(n,e):void 0,"--chart-labels-color":t?(0,u.p)(t,e):void 0,"--chart-size":(0,h.h)(a)}})),w=(0,m.d5)((e,n)=>{let t=(0,p.w)("FunnelChart",k,e),{classNames:d,className:h,style:m,styles:w,unstyled:M,vars:C,data:S,withTooltip:A,tooltipAnimationDuration:E,tooltipProps:D,strokeWidth:T,withLabels:B,size:N,valueFormatter:R,children:L,funnelChartProps:z,funnelProps:_,labelsPosition:F,tooltipDataSource:O,...G}=t,I=(0,f.rZ)(),q=(0,v.y)({name:"FunnelChart",classes:b,props:t,className:h,style:m,classNames:d,styles:w,unstyled:M,vars:C,varsResolver:y}),{resolvedClassNames:Z,resolvedStyles:J}=(0,x.h)({classNames:d,styles:w,props:t});return(0,a.jsx)(j.x,{ref:n,size:N,...q("root"),...G,children:(0,a.jsx)(r.h,{children:(0,a.jsxs)(o.G,{...z,children:[(0,a.jsxs)(l.o,{data:S,dataKey:"value",isAnimationActive:!1,stroke:"var(--chart-stroke-color, var(--mantine-color-body))",strokeWidth:T,..._,children:[B&&(0,a.jsx)(i.e,{position:F,fill:"inside"===F?"var(--chart-labels-color, var(--mantine-color-white))":"var(--chart-labels-color, var(--mantine-color-dimmed))",stroke:"none",fontFamily:"var(--mantine-font-family)",fontSize:14,dataKey:e=>"function"==typeof R?R(e.value):e.value}),S.map((e,n)=>(0,a.jsx)(s.b,{fill:(0,u.p)(e.color,I),stroke:"var(--chart-stroke-color, var(--mantine-color-body))",strokeWidth:T},n))]}),A&&(0,a.jsx)(c.u,{animationDuration:E,isAnimationActive:!1,content:({payload:e})=>(0,a.jsx)(g.h,{payload:S,classNames:Z,styles:J,type:"radial",segmentId:"segment"===O?e?.[0]?.name:void 0,valueFormatter:R}),...D}),L]})})})});w.displayName="@mantine/charts/FunnelChart",w.classes=b},3769:function(e,n,t){"use strict";t.d(n,{B:function(){return C}});var a=t(52322),r=t(2784),o=t(18205),l=t(43470),i=t(20341),s=t(55734),c=t(21154),d=t(11200),u=t(13588),h=t(82027),m=t(38483),p=t(46690),f=t(68755),v=t(51477),x=t(28559),j=t(1198),g=t(93010),b=t(27009),k=t(46293),y={root:"m_cd2bd9e5",tooltip:"m_6bcc3420"};let w={barSize:20,startAngle:90,endAngle:-270,withBackground:!0,withTooltip:!0},M=(0,d.Z)((e,{emptyBackgroundColor:n})=>({root:{"--chart-empty-background":n?(0,u.p)(n,e):void 0}})),C=(0,h.d5)((e,n)=>{let t=(0,m.w)("RadialBarChart",w,e),{classNames:d,className:h,style:C,styles:S,unstyled:A,vars:E,data:D,barSize:T,withBackground:B,dataKey:N,radialBarProps:R,radialBarChartProps:L,withLabels:z,withLegend:_,legendProps:F,withTooltip:O,tooltipProps:G,startAngle:I,endAngle:q,...Z}=t,[J,P]=(0,r.useState)(null),K=(0,p.y)({name:"RadialBarChart",classes:y,props:t,className:h,style:C,classNames:d,styles:S,unstyled:A,vars:E,varsResolver:M}),H=(0,f.rZ)(),U=D.map(({color:e,...n})=>{let t=(0,u.p)(e,H);return{...n,fill:t,fillOpacity:J?J===n.name?n.opacity||1:.05:n.opacity||1}}),{resolvedClassNames:V,resolvedStyles:$}=(0,v.h)({classNames:d,styles:S,props:t});return(0,a.jsx)(x.x,{ref:n,...K("root"),...Z,children:(0,a.jsx)(o.h,{children:(0,a.jsxs)(l.B,{margin:{top:0,bottom:0,left:0,right:0},innerRadius:"10%",outerRadius:"100%",cx:"50%",cy:"50%",barSize:T,startAngle:I,endAngle:q,data:U,...L,children:[(0,a.jsx)(i.G,{label:z?{position:"insideStart",fill:"var(--mantine-color-white)",fontSize:12}:void 0,background:B?{fill:"var(--chart-empty-background)"}:void 0,dataKey:N,isAnimationActive:!1,...R}),_&&(0,a.jsx)(s.D,{verticalAlign:"bottom",content:e=>(0,a.jsx)(k.Q,{payload:e.payload?.map(e=>({...e,dataKey:e.payload?.name})),onHighlight:P,legendPosition:F?.verticalAlign||"bottom",classNames:V,styles:$,centered:!0}),...F}),O&&(0,a.jsx)(c.u,{animationDuration:0,isAnimationActive:!1,cursor:{stroke:"var(--chart-cursor-color)"},content:({payload:e})=>(0,a.jsxs)(j.X,{...K("tooltip"),children:[(0,a.jsxs)(g.Z,{gap:"sm",children:[(0,a.jsx)(b.b,{color:e?.[0]?.payload.fill,size:12,withShadow:!1}),(0,a.jsx)("span",{children:e?.[0]?.payload.name})]}),(0,a.jsx)("span",{children:e?.[0]?.payload[N]})]}),...G})]})})})});C.displayName="@mantine/core/RadialBarChart",C.classes=y},6004:function(e,n,t){"use strict";t.d(n,{r:function(){return j}});var a=t(52322),r=t(2784),o=t(9341),l=t(28994),i=t(70837),s=t(58898),c=t(86411),d=t(11200),u=t(38483),h=t(46690),m=t(28559),p=t(82027),f={root:"m_48204f9b",marks:"m_bb9cdbad",mark:"m_481dd586",thumb:"m_bc02ba3d",label:"m_bb8e875b"};let v={step:1,withLabel:!0},x=(0,d.Z)((e,{size:n,thumbSize:t})=>({root:{"--slider-size":(0,s.h)(n),"--thumb-size":(0,s.h)(t)}})),j=(0,p.d5)((e,n)=>{let t=(0,u.w)("AngleSlider",v,e),{classNames:s,className:d,style:p,styles:j,unstyled:g,vars:b,step:k,value:y,defaultValue:w,onChange:M,onMouseDown:C,withLabel:S,marks:A,thumbSize:E,restrictToMarks:D,formatLabel:T,onChangeEnd:B,disabled:N,onTouchStart:R,name:L,hiddenInputProps:z,"aria-label":_,tabIndex:F,onScrubStart:O,onScrubEnd:G,...I}=t,[q,Z]=(0,o.C)({value:y,defaultValue:w,finalValue:0,onChange:M}),{ref:J}=(0,l.M)(e=>{J.current&&Z(D&&Array.isArray(A)?(0,c.s)(e,A.map(e=>e.value)):e)},{step:k,onChangeEnd:B,onScrubStart:O,onScrubEnd:G}),P=(0,h.y)({name:"AngleSlider",classes:f,props:t,className:d,style:p,classNames:s,styles:j,unstyled:g,vars:b,varsResolver:x}),K=A?.map((e,n)=>r.createElement("div",{...P("mark",{style:{"--angle":`${e.value}deg`}}),"data-label":e.label||void 0,key:n}));return(0,a.jsxs)(m.x,{ref:(0,i.Yx)(n,J),...P("root",{focusable:!0}),...I,children:[K&&K.length>0&&(0,a.jsx)("div",{...P("marks"),children:K}),S&&(0,a.jsx)("div",{...P("label"),children:"function"==typeof T?T(q):q}),(0,a.jsx)("div",{tabIndex:F??(N?-1:0),role:"slider","aria-valuemax":360,"aria-valuemin":0,"aria-valuenow":q,onKeyDown:e=>{if(!N){if("ArrowLeft"===e.key||"ArrowDown"===e.key){let e=(0,l.w)(q-k,k);Z(e),B?.(e)}if("ArrowRight"===e.key||"ArrowUp"===e.key){let e=(0,l.w)(q+k,k);Z(e),B?.(e)}"Home"===e.key&&(Z(0),B?.(0)),"End"===e.key&&(Z(359),B?.(359))}},"aria-label":_,...P("thumb",{style:{transform:`rotate(${q}deg)`}})}),(0,a.jsx)("input",{type:"hidden",name:L,value:q,...z})]})});j.displayName="@mantine/core/AngleSlider",j.classes=f},80832:function(e,n,t){"use strict";t.d(n,{K:function(){return o},p:function(){return r}});var a=t(2784);function r(e){let n=e.reduce((e,n)=>({...e,[n]:!1}),{}),[t,r]=(0,a.useState)(n),o=(0,a.useCallback)(e=>{r(n=>({...n,[e]:!0}))},[]),l=(0,a.useCallback)(e=>r(n=>({...n,[e]:!1})),[]),i=(0,a.useCallback)(e=>r(n=>({...n,[e]:!n[e]})),[]),s=(0,a.useCallback)(()=>r(n),[]),c=(0,a.useCallback)(e=>({opened:t[e],onClose:()=>l(e),stackId:e}),[t]);return{state:t,open:o,close:l,closeAll:s,toggle:i,register:c}}let o=r},5356:function(e,n,t){"use strict";t.d(n,{U:function(){return E}});var a=t(52322),r=t(2784),o=t(9341),l=t(51438),i=t(58898),s=t(91482),c=t(86411),d=t(11200),u=t(13588),h=t(38483),m=t(46690),p=t(82027),f=t(89027),v=t(56867),x=t(10497),j=t(39172),g=t(77970),b=t(37748),k=t(81515),y=t(49514),w=t(40148),M=t(83879),C=t(40908);let S=(0,d.Z)((e,{size:n,color:t,thumbSize:a,radius:r})=>({root:{"--slider-size":(0,s.ap)(n,"slider-size"),"--slider-color":t?(0,u.p)(t,e):void 0,"--slider-radius":void 0===r?void 0:(0,s.H5)(r),"--slider-thumb-size":void 0!==a?(0,i.h)(a):"calc(var(--slider-size) * 2)"}})),A={min:0,max:100,minRange:10,step:1,marks:[],label:e=>e,labelTransitionProps:{transition:"fade",duration:0},labelAlwaysOn:!1,showLabelOnHover:!0,disabled:!1,scale:e=>e},E=(0,p.d5)((e,n)=>{let t=(0,h.w)("RangeSlider",A,e),{classNames:i,styles:s,value:d,onChange:u,onChangeEnd:p,size:E,min:D,max:T,minRange:B,maxRange:N,step:R,precision:L,defaultValue:z,name:_,marks:F,label:O,labelTransitionProps:G,labelAlwaysOn:I,thumbFromLabel:q,thumbToLabel:Z,showLabelOnHover:J,thumbChildren:P,disabled:K,unstyled:H,scale:U,inverted:V,className:$,style:X,vars:W,hiddenInputProps:Y,restrictToMarks:Q,thumbProps:ee,...en}=t,et=(0,m.y)({name:"Slider",props:t,classes:C.Z,classNames:i,className:$,styles:s,style:X,vars:W,varsResolver:S,unstyled:H}),{dir:ea}=(0,f.gm)(),[er,eo]=(0,r.useState)(-1),[el,ei]=(0,r.useState)(!1),[es,ec]=(0,o.C)({value:d,defaultValue:z,finalValue:[D,T],onChange:u}),ed=(0,r.useRef)(es),eu=(0,r.useRef)([]),eh=(0,r.useRef)(void 0),em=[(0,y.b)({value:es[0],min:D,max:T}),(0,y.b)({value:es[1],min:D,max:T})],ep=L??(0,w.p)(R),ef=e=>{ec(e),ed.current=e};(0,r.useEffect)(()=>{Array.isArray(d)&&(ed.current=d)},Array.isArray(d)?[d[0],d[1]]:[null,null]);let ev=(e,n,t)=>{if(-1===n)return;let a=[...ed.current];if(Q&&F){let t=(0,c.s)(e,F.map(e=>e.value)),r=a[n];a[n]=t;let o=0===n?1:0,l=(0,M.Jy)(F),i=(0,M.Bm)(F);t===l&&a[o]===l?a[n]=r:t===i&&a[o]===i?a[n]=r:t===a[o]&&(r>a[o]?a[o]=(0,M.ru)(t,F):a[o]=(0,M.Ml)(t,F))}else a[n]=e,0===n&&(e>a[1]-(B-1e-9)&&(a[1]=Math.min(e+B,T)),e>(T-(B-1e-9)||D)&&(a[n]=ed.current[n]),a[1]-e>N&&(a[1]=e+N)),1===n&&(e<a[0]+B&&(a[0]=Math.max(e-B,D)),e<a[0]+B&&(a[n]=ed.current[n]),e-a[0]>N&&(a[0]=e-N));if(a[0]=(0,k.J)(a[0],ep),a[1]=(0,k.J)(a[1],ep),a[0]>a[1]){let e=a[0];a[0]=a[1],a[1]=e}ef(a),t&&p?.(ed.current)},ex=e=>{K||ev((0,b.i)({value:e,min:D,max:T,step:R,precision:ep}),eh.current,!1)},{ref:ej,active:eg}=(0,l.r)(({x:e})=>ex(e),{onScrubEnd:()=>!K&&p?.(ed.current)},ea),eb=e=>{var n;ej.current.focus();let t=ej.current.getBoundingClientRect(),a=(n=e.nativeEvent,"TouchEvent"in window&&n instanceof window.TouchEvent?n.touches[0].clientX:n.clientX),r=(0,b.i)({value:a-t.left,max:T,min:D,step:R,containerWidth:t.width}),o=Math.abs(es[0]-r)>Math.abs(es[1]-r)?1:0,l="ltr"===ea?o:1===o?0:1;eh.current=l},ek=()=>1!==er&&0!==er?(eo(0),0):er,ey={max:T,min:D,size:E,labelTransitionProps:G,labelAlwaysOn:I,onBlur:()=>eo(-1)},ew=Array.isArray(P);return(0,a.jsx)(v.Y,{value:{getStyles:et},children:(0,a.jsxs)(x.l,{...en,size:E,ref:n,disabled:K,children:[(0,a.jsxs)(g.f,{offset:em[0],marksOffset:es[0],filled:em[1]-em[0],marks:F,inverted:V,min:D,max:T,value:es[1],disabled:K,containerProps:{ref:ej,onMouseEnter:J?()=>ei(!0):void 0,onMouseLeave:J?()=>ei(!1):void 0,onTouchStartCapture:eb,onTouchEndCapture:()=>{eh.current=-1},onMouseDownCapture:eb,onMouseUpCapture:()=>{eh.current=-1},onKeyDownCapture:e=>{if(!K)switch(e.key){case"ArrowUp":{e.preventDefault();let n=ek();eu.current[n].focus();let t=Q&&F?(0,M.Ml)(ed.current[n],F):Math.min(Math.max(ed.current[n]+R,D),T);ev((0,k.J)(t,ep),n,!0);break}case"ArrowRight":{e.preventDefault();let n=ek();eu.current[n].focus();let t=Q&&F?("rtl"===ea?M.ru:M.Ml)(ed.current[n],F):Math.min(Math.max("rtl"===ea?ed.current[n]-R:ed.current[n]+R,D),T);ev((0,k.J)(t,ep),n,!0);break}case"ArrowDown":{e.preventDefault();let n=ek();eu.current[n].focus();let t=Q&&F?(0,M.ru)(ed.current[n],F):Math.min(Math.max(ed.current[n]-R,D),T);ev((0,k.J)(t,ep),n,!0);break}case"ArrowLeft":{e.preventDefault();let n=ek();eu.current[n].focus();let t=Q&&F?("rtl"===ea?M.Ml:M.ru)(ed.current[n],F):Math.min(Math.max("rtl"===ea?ed.current[n]+R:ed.current[n]-R,D),T);ev((0,k.J)(t,ep),n,!0)}}}},children:[(0,a.jsx)(j.b,{...ey,value:U(es[0]),position:em[0],dragging:eg,label:"function"==typeof O?O((0,k.J)(U(es[0]),ep)):O,ref:e=>{eu.current[0]=e},thumbLabel:q,onMouseDown:()=>void(eh.current=0),onFocus:()=>eo(0),showLabelOnHover:J,isHovered:el,disabled:K,...ee?.(0),children:ew?P[0]:P}),(0,a.jsx)(j.b,{...ey,thumbLabel:Z,value:U(es[1]),position:em[1],dragging:eg,label:"function"==typeof O?O((0,k.J)(U(es[1]),ep)):O,ref:e=>{eu.current[1]=e},onMouseDown:()=>void(eh.current=1),onFocus:()=>eo(1),showLabelOnHover:J,isHovered:el,disabled:K,...ee?.(1),children:ew?P[1]:P})]}),(0,a.jsx)("input",{type:"hidden",name:`${_}_from`,value:es[0],...Y}),(0,a.jsx)("input",{type:"hidden",name:`${_}_to`,value:es[1],...Y})]})})});E.classes=C.Z,E.displayName="@mantine/core/RangeSlider"},28994:function(e,n,t){"use strict";t.d(n,{M:function(){return l},w:function(){return o}});var a=t(2784),r=t(82692);function o(e,n){var t,a;let o=(0,r.u)(e,0,360),l=Math.ceil(o/n);return t=l>=o/n?l*n==360?0:l*n:Math.round(o/n)*n,a=n.toString().split(".")[1]?.length||0,parseFloat(t.toFixed(a))}function l(e,{step:n=.01,onChangeEnd:t,onScrubStart:r,onScrubEnd:l}={}){let i=(0,a.useRef)(null),s=(0,a.useRef)(!1),[c,d]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{s.current=!0},[]),(0,a.useEffect)(()=>{let a=(a,r=!1)=>{if(i.current){i.current.style.userSelect="none";let l=o(function(e,n){let t=function(e){let n=e.getBoundingClientRect();return[n.left+n.width/2,n.top+n.height/2]}(n);return 360-(180/Math.PI*Math.atan2(e[0]-t[0],e[1]-t[1])+180)}([a.clientX,a.clientY],i.current),n||1);e(l),r&&t?.(l)}},s=()=>{r?.(),d(!0),document.addEventListener("mousemove",h,!1),document.addEventListener("mouseup",m,!1),document.addEventListener("touchmove",p,{passive:!1}),document.addEventListener("touchend",f,!1)},c=()=>{l?.(),d(!1),document.removeEventListener("mousemove",h,!1),document.removeEventListener("mouseup",m,!1),document.removeEventListener("touchmove",p,!1),document.removeEventListener("touchend",f,!1)},u=e=>{s(),a(e)},h=e=>{a(e)},m=e=>{a(e,!0),c()},p=e=>{e.preventDefault(),a(e.touches[0])},f=e=>{a(e.changedTouches[0],!0),c()},v=e=>{e.preventDefault(),s(),a(e.touches[0])};return i.current?.addEventListener("mousedown",u),i.current?.addEventListener("touchstart",v,{passive:!1}),()=>{i.current&&(i.current.removeEventListener("mousedown",u),i.current.removeEventListener("touchstart",v))}},[e]),{ref:i,active:c}}}},function(e){e.O(0,[61177,5248,90160,59966,21836,43470,66748,61639,40296,87325,92888,49774,40179],function(){return e(e.s=51709)}),_N_E=e.O()}]);