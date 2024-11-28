(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[18272],{51709:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-14-0",function(){return t(73895)}])},73895:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var a=t(52322),o=t(45392),r=t(86103),l=t(28683),i=t(43502),s=t(60589),c=t(47838),d=t(9345),u=t(25071),h=t(15019);let m=(0,u.A)(h.us.Changelog7140);function p(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"angleslider-component",children:"AngleSlider component"}),"\n",(0,a.jsxs)(n.p,{children:["New ",(0,a.jsx)(n.a,{href:"/core/angle-slider/",children:"AngleSlider"})," component:"]}),"\n",(0,a.jsx)(t,{data:r.E}),"\n",(0,a.jsx)(n.h2,{id:"radialbarchart-component",children:"RadialBarChart component"}),"\n",(0,a.jsxs)(n.p,{children:["New ",(0,a.jsx)(n.a,{href:"/charts/radial-bar-chart/",children:"RadialBarChart"})," component:"]}),"\n",(0,a.jsx)(t,{data:l.p}),"\n",(0,a.jsx)(n.h2,{id:"funnelchart-component",children:"FunnelChart component"}),"\n",(0,a.jsxs)(n.p,{children:["New ",(0,a.jsx)(n.a,{href:"/charts/funnel-chart/",children:"FunnelChart"})," component:"]}),"\n",(0,a.jsx)(t,{data:i.j}),"\n",(0,a.jsx)(n.h2,{id:"modalstack-and-drawerstack-components",children:"Modal.Stack and Drawer.Stack components"}),"\n",(0,a.jsxs)(n.p,{children:["New ",(0,a.jsx)(n.a,{href:"/core/modal/",children:"Modal.Stack"})," and ",(0,a.jsx)(n.a,{href:"/core/drawer",children:"Drawer.Stack"})," components simplify usage of multiple modals/drawers at the same time."]}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"Modal.Stack"})," component to render multiple modals at the same time.\n",(0,a.jsx)(n.code,{children:"Modal.Stack"})," keeps track of opened modals, manages z-index values, focus trapping\nand ",(0,a.jsx)(n.code,{children:"closeOnEscape"})," behavior. ",(0,a.jsx)(n.code,{children:"Modal.Stack"})," is designed to be used with ",(0,a.jsx)(n.code,{children:"useModalsStack"})," hook."]}),"\n",(0,a.jsxs)(n.p,{children:["Differences from using multiple ",(0,a.jsx)(n.code,{children:"Modal"})," components:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Modal.Stack"})," manages z-index values – modals that are opened later will always have higher z-index value disregarding their order in the DOM"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Modal.Stack"})," disables focus trap and ",(0,a.jsx)(n.code,{children:"Escape"})," key handling for all modals except the one that is currently opened"]}),"\n",(0,a.jsxs)(n.li,{children:["Modals that are not currently opened are present in the DOM but are hidden with ",(0,a.jsx)(n.code,{children:"opacity: 0"})," and ",(0,a.jsx)(n.code,{children:"pointer-events: none"})]}),"\n",(0,a.jsx)(n.li,{children:"Only one overlay is rendered at a time"}),"\n"]}),"\n",(0,a.jsx)(t,{data:s.k}),"\n",(0,a.jsx)(n.h2,{id:"usemodalsstackusedrawersstack-hooks",children:"useModalsStack/useDrawersStack hooks"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"useModalsStack"})," hook provides an easy way to control multiple modals at the same time.\nIt accepts an array of unique modals ids and returns an object with the following properties:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"interface ModalStackReturnType<T extends string> {\n  // Current opened state of each modal\n  state: Record<T, boolean>;\n\n  // Opens modal with the given id\n  open: (id: T) => void;\n\n  // Closes modal with the given id\n  close: (id: T) => void;\n\n  // Toggles modal with the given id\n  toggle: (id: T) => void;\n\n  // Closes all modals within the stack\n  closeAll: () => void;\n\n  // Returns props for modal with the given id\n  register: (id: T) => {\n    opened: boolean;\n    onClose: () => void;\n    stackId: T;\n  };\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Example of using ",(0,a.jsx)(n.code,{children:"useModalsStack"})," with ",(0,a.jsx)(n.code,{children:"Modal"})," component:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { Modal, useModalsStack } from '@mantine/core';\n\nfunction Demo() {\n  const stack = useModalsStack(['first', 'second']);\n\n  return (\n    <>\n      <Modal {...stack.register('first')}>First</Modal>\n      <Modal {...stack.register('second')}>Second</Modal>\n      <Button onClick={() => stack.open('first')}>Open first</Button>\n    </>\n  );\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"restrict-slider-selection-to-marks",children:"Restrict Slider selection to marks"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/core/slider",children:"Slider"})," component now supports ",(0,a.jsx)(n.code,{children:"restrictToMarks"})," prop that restricts slider value to marks only.\nNote that in this case ",(0,a.jsx)(n.code,{children:"step"})," prop is ignored:"]}),"\n",(0,a.jsx)(t,{data:c.Z}),"\n",(0,a.jsx)(n.h2,{id:"barchart-svg-pattern-fill",children:"BarChart SVG pattern fill"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/charts/bar-chart",children:"BarChart"})," now can be used with SVG pattern fill:"]}),"\n",(0,a.jsx)(t,{data:d.W}),"\n",(0,a.jsx)(n.h2,{id:"help-center-updates",children:"Help center updates"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["New ",(0,a.jsx)(n.a,{href:"https://help.mantine.dev/q/nested-inline-styles",children:"Can I use nested inline styles with Mantine components?"})," question"]}),"\n",(0,a.jsxs)(n.li,{children:["New ",(0,a.jsx)(n.a,{href:"https://help.mantine.dev/q/postcss-fns-inline",children:"Can I use PostCSS function in inline styles?"})," question"]}),"\n",(0,a.jsxs)(n.li,{children:["New ",(0,a.jsx)(n.a,{href:"https://help.mantine.dev/q/carousel-missing-styles",children:"Why my Carousel slides are in vertical orientation?"})," question"]}),"\n",(0,a.jsxs)(n.li,{children:["New ",(0,a.jsx)(n.a,{href:"https://help.mantine.dev/q/transparent-buttons",children:"My buttons are transparent and the background is visible only on hover, what is wrong?"})," question"]}),"\n",(0,a.jsxs)(n.li,{children:["New ",(0,a.jsx)(n.a,{href:"https://help.mantine.dev/q/primary-virtual-color",children:"Can I have different primary color for light and dark color schemes?"})," question"]}),"\n",(0,a.jsxs)(n.li,{children:["New ",(0,a.jsx)(n.a,{href:"https://help.mantine.dev/q/body-background",children:"How can I change body background color?"})," question"]}),"\n",(0,a.jsxs)(n.li,{children:["New ",(0,a.jsx)(n.a,{href:"https://help.mantine.dev/q/nested-popover-closes",children:"My Popover dropdown closes when I click on the dropdown of nested Popover"})," question"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/core/tree/",children:"useTree"})," hook now accepts ",(0,a.jsx)(n.code,{children:"onNodeExpand"})," and ",(0,a.jsx)(n.code,{children:"onNodeCollapse"})," callbacks"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/core/tree/",children:"useTree"})," hook now returns additional ",(0,a.jsx)(n.code,{children:"checkAllNodes"}),", ",(0,a.jsx)(n.code,{children:"uncheckAllNodes"})," and ",(0,a.jsx)(n.code,{children:"setCheckedState"})," handlers"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/core/tree",children:"Tree"})," component now includes ",(0,a.jsx)(n.code,{children:"getTreeExpandedState"})," to generate expanded state based on the tree data"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/form/use-form",children:"use-form"})," now supports ",(0,a.jsx)(n.code,{children:"form.replaceListItem"})," handler to replace list item at given index"]}),"\n"]})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(m,{...e,children:(0,a.jsx)(p,{...e})})}},43502:function(e,n,t){"use strict";t.d(n,{j:function(){return l}});var a=t(52322),o=t(17802),r=t(36966);let l={type:"code",component:function(){return(0,a.jsx)(o.G,{data:r.a})},code:[{code:`
import { FunnelChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <FunnelChart data={data} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:r.o,language:"tsx",fileName:"data.ts"}],centered:!0}},36966:function(e,n,t){"use strict";t.d(n,{a:function(){return a},o:function(){return o}});let a=[{name:"USA",value:400,color:"indigo.6"},{name:"India",value:300,color:"yellow.6"},{name:"Japan",value:100,color:"teal.6"},{name:"Other",value:200,color:"gray.6"}],o=`
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
`},28683:function(e,n,t){"use strict";t.d(n,{p:function(){return l}});var a=t(52322),o=t(3769),r=t(39770);let l={type:"code",component:function(){return(0,a.jsx)(o.B,{data:r.a,dataKey:"value",h:280,withLabels:!0})},code:[{fileName:"Demo.tsx",code:`
import { RadialBarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <RadialBarChart data={data} dataKey="value" h={280} withLabels />;
}
`,language:"tsx"},{fileName:"data.ts",code:r.o,language:"tsx"}]}},39770:function(e,n,t){"use strict";t.d(n,{a:function(){return a},o:function(){return o}});let a=[{name:"18-24",value:31.47,color:"blue.7"},{name:"25-29",value:26.69,color:"orange.6"},{name:"30-34",value:15.69,color:"yellow.7"},{name:"35-39",value:8.22,color:"cyan.6"},{name:"40-49",value:8.63,color:"green"},{name:"50+",value:2.63,color:"pink"},{name:"unknown",value:6.67,color:"gray"}],o=`
export const data = [
  { name: '18-24', value: 31.47, color: 'blue.7' },
  { name: '25-29', value: 26.69, color: 'orange.6' },
  { name: '30-34', value: 15.69, color: 'yellow.7' },
  { name: '35-39', value: 8.22, color: 'cyan.6' },
  { name: '40-49', value: 8.63, color: 'green' },
  { name: '50+', value: 2.63, color: 'pink' },
  { name: 'unknown', value: 6.67, color: 'gray' },
];
`},86103:function(e,n,t){"use strict";t.d(n,{E:function(){return l}});var a=t(52322),o=t(93010),r=t(6004);let l={type:"code",component:function(){return(0,a.jsxs)(o.Z,{p:"lg",gap:50,children:[(0,a.jsx)(r.r,{"aria-label":"Angle slider",formatLabel:e=>`${e}\xb0`,size:100,restrictToMarks:!0,marks:[{value:0},{value:45},{value:90},{value:135},{value:180},{value:225},{value:270},{value:315}]}),(0,a.jsx)(r.r,{"aria-label":"Angle slider",formatLabel:e=>`${e}\xb0`,size:100,marks:[{value:0,label:"0\xb0"},{value:45,label:"45\xb0"},{value:90,label:"90\xb0"},{value:135,label:"135\xb0"},{value:180,label:"180\xb0"},{value:225,label:"225\xb0"},{value:270,label:"270\xb0"},{value:315,label:"315\xb0"}]})]})},code:`
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
`,centered:!0}},60589:function(e,n,t){"use strict";t.d(n,{k:function(){return s}});var a=t(52322),o=t(80832),r=t(31946),l=t(93010),i=t(17115);let s={type:"code",code:`
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

      <Button onClick={() => stack.open('delete-page')}>Open modal</Button>
    </>
  );
}
`,centered:!0,component:function(){let e=(0,o.p)(["delete-page","confirm-action","really-confirm-action"]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.u.Stack,{children:[(0,a.jsxs)(r.u,{...e.register("delete-page"),title:"Delete this page?",children:["Are you sure you want to delete this page? This action cannot be undone.",(0,a.jsxs)(l.Z,{mt:"lg",justify:"flex-end",children:[(0,a.jsx)(i.z,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,a.jsx)(i.z,{onClick:()=>e.open("confirm-action"),color:"red",children:"Delete"})]})]}),(0,a.jsxs)(r.u,{...e.register("confirm-action"),title:"Confirm action",children:["Are you sure you want to perform this action? This action cannot be undone. If you are sure, press confirm button below.",(0,a.jsxs)(l.Z,{mt:"lg",justify:"flex-end",children:[(0,a.jsx)(i.z,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,a.jsx)(i.z,{onClick:()=>e.open("really-confirm-action"),color:"red",children:"Confirm"})]})]}),(0,a.jsxs)(r.u,{...e.register("really-confirm-action"),title:"Really confirm action",children:["Jokes aside. You have confirmed this action. This is your last chance to cancel it. After you press confirm button below, action will be performed and cannot be undone. For real this time. Are you sure you want to proceed?",(0,a.jsxs)(l.Z,{mt:"lg",justify:"flex-end",children:[(0,a.jsx)(i.z,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,a.jsx)(i.z,{onClick:e.closeAll,color:"red",children:"Confirm"})]})]})]}),(0,a.jsx)(i.z,{onClick:()=>e.open("delete-page"),children:"Open modal"})]})}}},47838:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var a=t(52322),o=t(69633);let r={type:"code",component:function(){return(0,a.jsx)(o.i,{restrictToMarks:!0,defaultValue:25,marks:Array.from({length:5}).map((e,n)=>({value:25*n}))})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return (
    <Slider
      restrictToMarks
      defaultValue={25}
      marks={Array.from({ length: 5 }).map((_, index) => ({ value: index * 25 }))}
    />
  );
}
`,centered:!0,maxWidth:400}},17802:function(e,n,t){"use strict";t.d(n,{G:function(){return w}});var a=t(52322),o=t(18205),r=t(21836),l=t(77568),i=t(96621),s=t(11011),c=t(21154),d=t(11200),u=t(13588),h=t(58898),m=t(82027),p=t(38483),f=t(68755),x=t(46690),v=t(51477),j=t(28559),g=t(50425),k={root:"m_80d531e7"};let b={withTooltip:!0,size:300,strokeWidth:1,withLabels:!1,labelsPosition:"right",tooltipDataSource:"all"},y=(0,d.Z)((e,{strokeColor:n,labelColor:t,size:a})=>({root:{"--chart-stroke-color":n?(0,u.p)(n,e):void 0,"--chart-labels-color":t?(0,u.p)(t,e):void 0,"--chart-size":(0,h.h)(a)}})),w=(0,m.d5)((e,n)=>{let t=(0,p.w)("FunnelChart",b,e),{classNames:d,className:h,style:m,styles:w,unstyled:C,vars:A,data:S,withTooltip:M,tooltipAnimationDuration:N,tooltipProps:B,strokeWidth:T,withLabels:D,size:E,valueFormatter:z,children:_,funnelChartProps:L,funnelProps:R,labelsPosition:G,tooltipDataSource:I,...q}=t,O=(0,f.rZ)(),F=(0,x.y)({name:"FunnelChart",classes:k,props:t,className:h,style:m,classNames:d,styles:w,unstyled:C,vars:A,varsResolver:y}),{resolvedClassNames:Z,resolvedStyles:P}=(0,v.h)({classNames:d,styles:w,props:t});return(0,a.jsx)(j.x,{ref:n,size:E,...F("root"),...q,children:(0,a.jsx)(o.h,{children:(0,a.jsxs)(r.G,{...L,children:[(0,a.jsxs)(l.o,{data:S,dataKey:"value",isAnimationActive:!1,stroke:"var(--chart-stroke-color, var(--mantine-color-body))",strokeWidth:T,...R,children:[D&&(0,a.jsx)(i.e,{position:G,fill:"inside"===G?"var(--chart-labels-color, var(--mantine-color-white))":"var(--chart-labels-color, var(--mantine-color-dimmed))",stroke:"none",fontFamily:"var(--mantine-font-family)",fontSize:14,dataKey:e=>"function"==typeof z?z(e.value):e.value}),S.map((e,n)=>(0,a.jsx)(s.b,{fill:(0,u.p)(e.color,O),stroke:"var(--chart-stroke-color, var(--mantine-color-body))",strokeWidth:T},n))]}),M&&(0,a.jsx)(c.u,{animationDuration:N,isAnimationActive:!1,content:({payload:e})=>(0,a.jsx)(g.h,{payload:S,classNames:Z,styles:P,type:"radial",segmentId:"segment"===I?e?.[0]?.name:void 0,valueFormatter:z}),...B}),_]})})})});w.displayName="@mantine/charts/FunnelChart",w.classes=k},3769:function(e,n,t){"use strict";t.d(n,{B:function(){return A}});var a=t(52322),o=t(2784),r=t(18205),l=t(43470),i=t(20341),s=t(55734),c=t(21154),d=t(11200),u=t(13588),h=t(82027),m=t(38483),p=t(46690),f=t(68755),x=t(51477),v=t(28559),j=t(1198),g=t(93010),k=t(27009),b=t(46293),y={root:"m_cd2bd9e5",tooltip:"m_6bcc3420"};let w={barSize:20,startAngle:90,endAngle:-270,withBackground:!0,withTooltip:!0},C=(0,d.Z)((e,{emptyBackgroundColor:n})=>({root:{"--chart-empty-background":n?(0,u.p)(n,e):void 0}})),A=(0,h.d5)((e,n)=>{let t=(0,m.w)("RadialBarChart",w,e),{classNames:d,className:h,style:A,styles:S,unstyled:M,vars:N,data:B,barSize:T,withBackground:D,dataKey:E,radialBarProps:z,radialBarChartProps:_,withLabels:L,withLegend:R,legendProps:G,withTooltip:I,tooltipProps:q,startAngle:O,endAngle:F,...Z}=t,[P,K]=(0,o.useState)(null),$=(0,p.y)({name:"RadialBarChart",classes:y,props:t,className:h,style:A,classNames:d,styles:S,unstyled:M,vars:N,varsResolver:C}),V=(0,f.rZ)(),H=B.map(({color:e,...n})=>{let t=(0,u.p)(e,V);return{...n,fill:t,fillOpacity:P?P===n.name?n.opacity||1:.05:n.opacity||1}}),{resolvedClassNames:J,resolvedStyles:U}=(0,x.h)({classNames:d,styles:S,props:t});return(0,a.jsx)(v.x,{ref:n,...$("root"),...Z,children:(0,a.jsx)(r.h,{children:(0,a.jsxs)(l.B,{margin:{top:0,bottom:0,left:0,right:0},innerRadius:"10%",outerRadius:"100%",cx:"50%",cy:"50%",barSize:T,startAngle:O,endAngle:F,data:H,..._,children:[(0,a.jsx)(i.G,{label:L?{position:"insideStart",fill:"var(--mantine-color-white)",fontSize:12}:void 0,background:D?{fill:"var(--chart-empty-background)"}:void 0,dataKey:E,isAnimationActive:!1,...z}),R&&(0,a.jsx)(s.D,{verticalAlign:"bottom",content:e=>(0,a.jsx)(b.Q,{payload:e.payload?.map(e=>({...e,dataKey:e.payload?.name})),onHighlight:K,legendPosition:G?.verticalAlign||"bottom",classNames:J,styles:U,centered:!0}),...G}),I&&(0,a.jsx)(c.u,{animationDuration:0,isAnimationActive:!1,cursor:{stroke:"var(--chart-cursor-color)"},content:({payload:e})=>(0,a.jsxs)(j.X,{...$("tooltip"),children:[(0,a.jsxs)(g.Z,{gap:"sm",children:[(0,a.jsx)(k.b,{color:e?.[0]?.payload.fill,size:12,withShadow:!1}),(0,a.jsx)("span",{children:e?.[0]?.payload.name})]}),(0,a.jsx)("span",{children:e?.[0]?.payload[E]})]}),...q})]})})})});A.displayName="@mantine/core/RadialBarChart",A.classes=y},6004:function(e,n,t){"use strict";t.d(n,{r:function(){return g}});var a=t(52322),o=t(2784),r=t(82692),l=t(9341),i=t(70837),s=t(58898),c=t(86411),d=t(11200),u=t(38483),h=t(46690),m=t(28559),p=t(82027),f={root:"m_48204f9b",marks:"m_bb9cdbad",mark:"m_481dd586",thumb:"m_bc02ba3d",label:"m_bb8e875b"};function x(e,n){let t=(0,r.u)(e,0,360),a=Math.ceil(t/n);return a>=t/n?a*n==360?0:a*n:Math.round(t/n)*n}let v={step:1,withLabel:!0},j=(0,d.Z)((e,{size:n,thumbSize:t})=>({root:{"--slider-size":(0,s.h)(n),"--thumb-size":(0,s.h)(t)}})),g=(0,p.d5)((e,n)=>{let t=(0,u.w)("AngleSlider",v,e),{classNames:r,className:s,style:d,styles:p,unstyled:g,vars:k,step:b,value:y,defaultValue:w,onChange:C,onMouseDown:A,withLabel:S,marks:M,thumbSize:N,restrictToMarks:B,formatLabel:T,onChangeEnd:D,disabled:E,onTouchStart:z,name:_,hiddenInputProps:L,"aria-label":R,tabIndex:G,...I}=t,q=(0,o.useRef)(null),[O,F]=(0,l.C)({value:y,defaultValue:w,finalValue:0,onChange:C}),Z=(0,h.y)({name:"AngleSlider",classes:f,props:t,className:s,style:d,classNames:r,styles:p,unstyled:g,vars:k,varsResolver:j}),P=(e,n=!1)=>{if(q.current){let t=x(function(e,n){let t=function(e){let n=e.getBoundingClientRect();return[n.left+n.width/2,n.top+n.height/2]}(n);return 360-(180/Math.PI*Math.atan2(e[0]-t[0],e[1]-t[1])+180)}([e.clientX,e.clientY],q.current),b||1),a=B&&Array.isArray(M)?(0,c.s)(t,M.map(e=>e.value)):t;F(a),n&&D?.(a)}},K=(0,o.useCallback)(e=>{P(e)},[]),$=(0,o.useCallback)(e=>{P(e,!0),U()},[]),V=(0,o.useCallback)(e=>{e.preventDefault(),P(e.touches[0])},[]),H=(0,o.useCallback)(e=>{P(e.changedTouches[0],!0),U()},[]),J=()=>{document.addEventListener("mousemove",K,!1),document.addEventListener("mouseup",$,!1),document.addEventListener("touchmove",V,{passive:!1}),document.addEventListener("touchend",H,!1)},U=()=>{document.removeEventListener("mousemove",K,!1),document.removeEventListener("mouseup",$,!1),document.removeEventListener("touchmove",V,!1),document.removeEventListener("touchend",H,!1)},W=M?.map((e,n)=>o.createElement("div",{...Z("mark",{style:{"--angle":`${e.value}deg`}}),"data-label":e.label||void 0,key:n}));return(0,a.jsxs)(m.x,{ref:(0,i.Yx)(n,q),...Z("root",{focusable:!0}),onMouseDown:e=>{A?.(e),J()},onTouchStart:e=>{e.preventDefault(),z?.(e),J()},...I,children:[W&&W.length>0&&(0,a.jsx)("div",{...Z("marks"),children:W}),S&&(0,a.jsx)("div",{...Z("label"),children:"function"==typeof T?T(O):O}),(0,a.jsx)("div",{tabIndex:G??(E?-1:0),role:"slider","aria-valuemax":360,"aria-valuemin":0,"aria-valuenow":O,onKeyDown:e=>{if(!E){if("ArrowLeft"===e.key||"ArrowDown"===e.key){let e=x(O-b,b);F(e),D?.(e)}if("ArrowRight"===e.key||"ArrowUp"===e.key){let e=x(O+b,b);F(e),D?.(e)}"Home"===e.key&&(F(0),D?.(0)),"End"===e.key&&(F(359),D?.(359))}},"aria-label":R,...Z("thumb",{style:{transform:`rotate(${O}deg)`}})}),(0,a.jsx)("input",{type:"hidden",name:_,value:O,...L})]})});g.displayName="@mantine/core/AngleSlider",g.classes=f},80832:function(e,n,t){"use strict";t.d(n,{K:function(){return r},p:function(){return o}});var a=t(2784);function o(e){let n=e.reduce((e,n)=>({...e,[n]:!1}),{}),[t,o]=(0,a.useState)(n),r=(0,a.useCallback)(e=>{o(n=>({...n,[e]:!0}))},[]),l=(0,a.useCallback)(e=>o(n=>({...n,[e]:!1})),[]),i=(0,a.useCallback)(e=>o(n=>({...n,[e]:!n[e]})),[]),s=(0,a.useCallback)(()=>o(n),[]),c=(0,a.useCallback)(e=>({opened:t[e],onClose:()=>l(e),stackId:e}),[t]);return{state:t,open:r,close:l,closeAll:s,toggle:i,register:c}}let r=o}},function(e){e.O(0,[61177,5248,90160,59966,21836,43470,66748,11340,40296,87325,92888,49774,40179],function(){return e(e.s=51709)}),_N_E=e.O()}]);