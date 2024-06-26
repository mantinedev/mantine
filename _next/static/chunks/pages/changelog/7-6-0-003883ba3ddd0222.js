(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9900],{65131:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-6-0",function(){return n(95975)}])},95975:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(52322),a=n(45392),i=n(25985),o=n(21988),s=n(35221),l=n(8672),c=n(66556),d=n(94091),h=n(19970),p=n(31336),u=n(88442),m=n(25071),x=n(15019);let f=(0,m.A)(x.us.Changelog760);function j(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"container-queries-support",children:"Container queries support"}),"\n",(0,r.jsxs)(t.p,{children:["You can now use ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries",children:"container queries"}),"\nwith Mantine components. ",(0,r.jsx)(t.code,{children:"rem"})," and ",(0,r.jsx)(t.code,{children:"em"})," functions from ",(0,r.jsx)(t.a,{href:"/styles/postcss-preset/#remem-functions",children:"postcss-preset-mantine"}),"\nare available in container queries staring from ",(0,r.jsx)(t.code,{children:"postcss-preset-mantine@1.13.0"}),"."]}),"\n",(0,r.jsx)(n,{data:i.c}),"\n",(0,r.jsx)(t.h2,{id:"radarchart-component",children:"RadarChart component"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/charts/radar-chart/",children:"RadarChart"})," component:"]}),"\n",(0,r.jsx)(n,{data:o.m}),"\n",(0,r.jsx)(t.h2,{id:"focustrapinitialfocus-component",children:"FocusTrap.InitialFocus component"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/core/focus-trap",children:"FocusTrap.InitialFocus"})," is a new component that adds a visually hidden\nelement which will receive the focus when the focus trap is activated.\nOnce ",(0,r.jsx)(t.code,{children:"FocusTrap.InitialFocus"})," loses focus, it is removed from the tab order."]}),"\n",(0,r.jsxs)(t.p,{children:["For example, it is useful if you do not want to focus any elements inside the ",(0,r.jsx)(t.a,{href:"/core/modal",children:"Modal"})," when it is opened:"]}),"\n",(0,r.jsx)(n,{data:s.g}),"\n",(0,r.jsx)(t.h2,{id:"new-mantineprovider-props",children:"New MantineProvider props"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/theming/mantine-provider",children:"MantineProvider"})," now includes more props to control how styles\nare generated and injected. These props are useful if you use Mantine as a headless library\nand in test environments."]}),"\n",(0,r.jsx)(t.h3,{id:"deduplicatecssvariables",children:"deduplicateCssVariables"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"deduplicateCssVariables"})," prop determines whether CSS variables should be deduplicated: if a CSS variable has the same value as in the default theme, it is not added in the runtime.\nBy default, it is set to ",(0,r.jsx)(t.code,{children:"true"}),". If set to ",(0,r.jsx)(t.code,{children:"false"}),", all Mantine CSS variables will be added in ",(0,r.jsx)(t.code,{children:"<style />"})," tag,\neven if they have the same value as in the default theme."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider deduplicateCssVariables={false}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"withstaticclasses",children:"withStaticClasses"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"withStaticClasses"})," determines whether components should have static classes, for example, ",(0,r.jsx)(t.code,{children:"mantine-Button-root"}),".\nBy default, static classes are enabled, to disable them set ",(0,r.jsx)(t.code,{children:"withStaticClasses"})," to ",(0,r.jsx)(t.code,{children:"false"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider withStaticClasses={false}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"withglobalclasses",children:"withGlobalClasses"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"withGlobalClasses"})," determines whether global classes should be added with ",(0,r.jsx)(t.code,{children:"<style />"})," tag.\nGlobal classes are required for ",(0,r.jsx)(t.code,{children:"hiddenFrom"}),"/",(0,r.jsx)(t.code,{children:"visibleFrom"})," and ",(0,r.jsx)(t.code,{children:"lightHidden"}),"/",(0,r.jsx)(t.code,{children:"darkHidden"})," props to work.\nBy default, global classes are enabled, to disable them set ",(0,r.jsx)(t.code,{children:"withGlobalClasses"})," to ",(0,r.jsx)(t.code,{children:"false"}),". Note that\ndisabling global classes may break styles of some components."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider withGlobalClasses={false}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"headlessmantineprovider",children:"HeadlessMantineProvider"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"HeadlessMantineProvider"})," is an alternative to ",(0,r.jsx)(t.a,{href:"/theming/mantine-provider",children:"MantineProvider"}),"\nthat should be used when you want to use Mantine as a headless UI library. It removes all\nfeatures that are related to Mantine styles:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Mantine classes are not applied to components"}),"\n",(0,r.jsxs)(t.li,{children:["Inline CSS variables are not added with ",(0,r.jsx)(t.code,{children:"style"})," attribute"]}),"\n",(0,r.jsx)(t.li,{children:"All color scheme related features are removed"}),"\n",(0,r.jsx)(t.li,{children:"Global styles are not generated"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Limitations of ",(0,r.jsx)(t.code,{children:"HeadlessMantineProvider"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/theming/color-schemes/",children:"Color scheme switching"})," will not work. If your application has a dark mode, you will need to implement it on your side."]}),"\n",(0,r.jsxs)(t.li,{children:["Props that are related to styles in all components (",(0,r.jsx)(t.code,{children:"color"}),", ",(0,r.jsx)(t.code,{children:"radius"}),", ",(0,r.jsx)(t.code,{children:"size"}),", etc.) will have no effect."]}),"\n",(0,r.jsxs)(t.li,{children:["Some components that rely on styles will become unusable (",(0,r.jsx)(t.a,{href:"/core/grid",children:"Grid"}),", ",(0,r.jsx)(t.a,{href:"/core/simple-grid",children:"SimpleGrid"}),", ",(0,r.jsx)(t.a,{href:"/core/container",children:"Container"}),", etc.)."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"lightHidden"}),"/",(0,r.jsx)(t.code,{children:"darkHidden"}),", ",(0,r.jsx)(t.code,{children:"visibleFrom"}),"/",(0,r.jsx)(t.code,{children:"hiddenFrom"})," props will not work."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/styles/style-props/",children:"Style props"})," will work only with explicit values, for example ",(0,r.jsx)(t.code,{children:'mt="xs"'})," will not work, but ",(0,r.jsx)(t.code,{children:"mt={5}"})," will."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["To use ",(0,r.jsx)(t.code,{children:"HeadlessMantineProvider"}),", follow the ",(0,r.jsx)(t.a,{href:"/getting-started/",children:"getting started guide"})," and replace ",(0,r.jsx)(t.code,{children:"MantineProvider"})," with ",(0,r.jsx)(t.code,{children:"HeadlessMantineProvider"}),".\nNote that you do not need to use ",(0,r.jsx)(t.a,{href:"/theming/color-schemes/#colorschemescript",children:"ColorSchemeScript"})," in your application, it will not have any effect,\nyou can ignore this part of the guide."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { HeadlessMantineProvider } from '@mantine/core';\n\nfunction App() {\n  return (\n    <HeadlessMantineProvider>\n      {/* Your application */}\n    </HeadlessMantineProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"sparkline-trendcolors",children:"Sparkline trendColors"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/charts/sparkline/",children:"Sparkline"})," now supports ",(0,r.jsx)(t.code,{children:"trendColors"})," prop to change chart color depending on the trend.\nThe prop accepts an object with ",(0,r.jsx)(t.code,{children:"positive"}),", ",(0,r.jsx)(t.code,{children:"negative"})," and ",(0,r.jsx)(t.code,{children:"neutral"})," properties:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"positive"})," - color for positive trend (first value is less than the last value in ",(0,r.jsx)(t.code,{children:"data"})," array)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"negative"})," - color for negative trend (first value is greater than the last value in ",(0,r.jsx)(t.code,{children:"data"})," array)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"neutral"})," - color for neutral trend (first and last values are equal)"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"neutral"})," is optional, if not provided, the color will be the same as ",(0,r.jsx)(t.code,{children:"positive"}),"."]}),"\n",(0,r.jsx)(n,{data:l.A}),"\n",(0,r.jsx)(t.h2,{id:"richtexteditor-tasks-extension",children:"RichTextEditor tasks extension"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/x/tiptap/#tasks",children:"RichTextEditor"})," now supports tasks ",(0,r.jsx)(t.a,{href:"https://tiptap.dev/docs/editor/api/nodes/task-list",children:"tiptap extension"}),":"]}),"\n",(0,r.jsx)(n,{data:c.w}),"\n",(0,r.jsx)(t.h2,{id:"renderoption-prop",children:"renderOption prop"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/core/select",children:"Select"}),", ",(0,r.jsx)(t.a,{href:"/core/multi-select",children:"MultiSelect"}),", ",(0,r.jsx)(t.a,{href:"/inputs/tags-input",children:"TagsInput"})," and ",(0,r.jsx)(t.a,{href:"/inputs/autocomplete",children:"Autocomplete"}),"\ncomponents now support ",(0,r.jsx)(t.code,{children:"renderOption"})," prop that allows to customize option rendering:"]}),"\n",(0,r.jsx)(n,{data:d.z}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n,{data:h.z}),"\n",(0,r.jsx)(t.h2,{id:"styles-improvements",children:"Styles improvements"}),"\n",(0,r.jsxs)(t.p,{children:["All Mantine components have been migrated to ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values",children:"logical CSS properties"}),"\n(as a replacement for rtl styles) and ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:where",children:":where"})," pseudo-class\n(as a replacement for ",(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/private-css-variables",children:"private CSS variables"}),"). These changes\nshould not impact the usage of Mantine components, but now Mantine CSS files have smaller size. For example,\n",(0,r.jsx)(t.code,{children:"@mantine/core/styles.css"})," now has ~ 8% smaller size (192kb -> 177kb)."]}),"\n",(0,r.jsx)(t.h2,{id:"pass-props-to-inner-recharts-components",children:"Pass props to inner recharts components"}),"\n",(0,r.jsxs)(t.p,{children:["You can now pass props down to recharts ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/Bar",children:"Bar"}),", ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/Area",children:"Area"})," and ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/Line",children:"Line"})," components\nwith ",(0,r.jsx)(t.code,{children:"barProps"}),", ",(0,r.jsx)(t.code,{children:"areaProps"})," and ",(0,r.jsx)(t.code,{children:"lineProps"})," props on ",(0,r.jsx)(t.a,{href:"/charts/bar-chart",children:"BarChart"}),", ",(0,r.jsx)(t.a,{href:"/charts/area-chart",children:"AreaChart"})," and ",(0,r.jsx)(t.a,{href:"/charts/line-chart",children:"LineChart"})," components."]}),"\n",(0,r.jsx)(t.p,{children:"All props accept either an object with props or a function that receives\nseries data as an argument and returns an object with props."}),"\n",(0,r.jsx)(n,{data:p.D}),"\n",(0,r.jsx)(t.h2,{id:"piechart-percent-labels",children:"PieChart percent labels"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/charts/pie-chart/",children:"PieChart"})," now supports ",(0,r.jsx)(t.code,{children:"percent"})," labels:"]}),"\n",(0,r.jsx)(n,{data:u.r}),"\n",(0,r.jsx)(t.h2,{id:"documentation-updates",children:"Documentation updates"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/styles/responsive",children:"Responsive styles guide"})," now includes new sections about responsive props and container queries"]}),"\n",(0,r.jsxs)(t.li,{children:["New ",(0,r.jsx)(t.a,{href:"/styles/unstyled/#headlessmantineprovider",children:"HeadlessMantineProvider section"})," in the unstyled guide"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/action-icon/",children:"ActionIcon"})," now includes additional documentation section on how to make the button the same size as Mantine inputs"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/charts/area-chart",children:"AreaChart"})," now includes an example of how to rotate x-axis labels"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/guides/redwood/",children:"Redwood guide"})," has been updated to the latest redwood version with Vite"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"help-center-updates",children:"Help center updates"}),"\n",(0,r.jsxs)(t.p,{children:["New articles added to the ",(0,r.jsx)(t.a,{href:"https://help.mantine.dev",children:"help center"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/browser-zooms-on-focus",children:"Browser zooms in when input is focused. What should I do?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/pinch-to-zoom-modal",children:"It is not possible to pinch to zoom when Modal is opened. What should I do?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/how-to-lock-scroll",children:"How can I lock scroll in my application?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/roadmap",children:"Where can I find the roadmap?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/tabs-border-color",children:"How can I change Tabs border color?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/input-focus-styles",children:"How can I change inputs focus styles?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/third-party-styles",children:"Can I use Mantine with Emotion/styled-components/tailwindcss?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/input-mask",children:"Is there a way to add mask to Mantine input?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/align-input-button",children:"How to align input with a button in a flex container?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/color-scheme-color",children:"How can I change component color prop value depending on the color scheme?"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/hooks/use-list-state/",children:"use-list-state"})," hook now supports ",(0,r.jsx)(t.code,{children:"swap"})," handler"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"form.setFieldValue"})," now supports callback function as an argument"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"px"}),", ",(0,r.jsx)(t.code,{children:"py"}),", ",(0,r.jsx)(t.code,{children:"mx"})," and ",(0,r.jsx)(t.code,{children:"my"})," ",(0,r.jsx)(t.a,{href:"/styles/style-props/",children:"style props"})," now use logical CSS properties ",(0,r.jsx)(t.code,{children:"padding-inline"}),", ",(0,r.jsx)(t.code,{children:"padding-block"}),", ",(0,r.jsx)(t.code,{children:"margin-inline"})," and ",(0,r.jsx)(t.code,{children:"margin-block"})," instead of ",(0,r.jsx)(t.code,{children:"padding-left"}),", ",(0,r.jsx)(t.code,{children:"padding-right"}),", etc."]}),"\n",(0,r.jsxs)(t.li,{children:["All components now support ",(0,r.jsx)(t.code,{children:"me"}),", ",(0,r.jsx)(t.code,{children:"ms"}),", ",(0,r.jsx)(t.code,{children:"ps"}),", ",(0,r.jsx)(t.code,{children:"pe"})," ",(0,r.jsx)(t.a,{href:"/styles/style-props/",children:"style props"})," to set ",(0,r.jsx)(t.code,{children:"margin-inline-end"}),", ",(0,r.jsx)(t.code,{children:"margin-inline-start"}),", ",(0,r.jsx)(t.code,{children:"padding-inline-start"})," and ",(0,r.jsx)(t.code,{children:"padding-inline-end"})," CSS properties"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/tooltip",children:"Tooltip"}),", ",(0,r.jsx)(t.a,{href:"/core/popover",children:"Popover"})," and other components based on ",(0,r.jsx)(t.code,{children:"Popover"})," now support ",(0,r.jsx)(t.code,{children:"floatingStrategy"})," prop to control ",(0,r.jsx)(t.a,{href:"https://floating-ui.com/docs/usefloating#strategy",children:"Floating UI strategy"})]}),"\n",(0,r.jsxs)(t.li,{children:["All ",(0,r.jsx)(t.code,{children:"@mantine/charts"})," components now support ",(0,r.jsx)(t.code,{children:"children"})," prop, which passes children to the root recharts component"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/hooks/use-resize-observer/",children:"use-resize-observer"})," and ",(0,r.jsx)(t.a,{href:"/hooks/use-element-size/",children:"use-element-size"})," hooks now support ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/observe#parameters",children:"ResizeObserver options"})," as hook argument"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/select",children:"Select"}),", ",(0,r.jsx)(t.a,{href:"/core/multi-select",children:"MultiSelect"})," and ",(0,r.jsx)(t.a,{href:"/inputs/tags-input",children:"TagsInput"})," now support ",(0,r.jsx)(t.code,{children:"onClear"})," prop, the function is called when clear button is clicked"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/multi-select",children:"MultiSelect"})," and ",(0,r.jsx)(t.a,{href:"/inputs/tags-input",children:"TagsInput"})," now support ",(0,r.jsx)(t.code,{children:"onRemove"})," prop, the function is called with removed item value when one of the items is deselected"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/mantinedev/redwood-template",children:"Redwood template"})," has been updated to the latest redwood version with Vite"]}),"\n"]})]})}function v(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(f,{...e,children:(0,r.jsx)(j,{...e})})}},31336:function(e,t,n){"use strict";n.d(t,{D:function(){return o}});var r=n(52322),a=n(8132),i=n(9404);let o={type:"code",component:function(){return(0,r.jsx)(a.v,{h:200,data:i.aT,dataKey:"month",orientation:"vertical",yAxisProps:{width:80},barProps:{radius:10},series:[{name:"Smartphones",color:"blue.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={200}
      data={data}
      dataKey="month"
      orientation="vertical"
      yAxisProps={{ width: 80 }}
      barProps={{ radius: 10 }}
      series={[{ name: 'Smartphones', color: 'blue.6' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.op,language:"tsx",fileName:"data.ts"}]}},9404:function(e,t,n){"use strict";n.d(t,{It:function(){return i},K$:function(){return o},aT:function(){return r},op:function(){return a}});let r=[{month:"January",Smartphones:1200,Laptops:900,Tablets:200},{month:"February",Smartphones:1900,Laptops:1200,Tablets:400},{month:"March",Smartphones:400,Laptops:1e3,Tablets:200},{month:"April",Smartphones:1e3,Laptops:200,Tablets:800},{month:"May",Smartphones:800,Laptops:1400,Tablets:1200},{month:"June",Smartphones:750,Laptops:600,Tablets:1e3}],a=`
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
`,i=[{item:"TaxRate","Effective tax rate in %":21,color:"blue"},{item:"Foreign inc.","Effective tax rate in %":-15.5,color:"teal"},{item:"Perm. diff.","Effective tax rate in %":-3,color:"teal"},{item:"Credits","Effective tax rate in %":-3,color:"teal"},{item:"Loss carryf. ","Effective tax rate in %":-2,color:"teal"},{item:"Law changes","Effective tax rate in %":2,color:"red"},{item:"Reven. adj.","Effective tax rate in %":4,color:"red"},{item:"ETR","Effective tax rate in %":3.5,color:"blue",standalone:!0}],o=`
export const data =
[
  { item: 'TaxRate', 'Effective tax rate in %': 21, color: 'blue' },
  { item: 'Foreign inc.', 'Effective tax rate in %': -15.5, color: 'teal' },
  { item: 'Perm. diff.', 'Effective tax rate in %': -3, color: 'teal' },
  { item: 'Credits', 'Effective tax rate in %': -3, color: 'teal' },
  { item: 'Loss carryf. ', 'Effective tax rate in %': -2, color: 'teal' },
  { item: 'Law changes', 'Effective tax rate in %': 2, color: 'red' },
  { item: 'Reven. adj.', 'Effective tax rate in %': 4, color: 'red' },
  { item: 'ETR', 'Effective tax rate in %': 3.5, color: 'blue', standalone: true },
];
`},88442:function(e,t,n){"use strict";n.d(t,{r:function(){return o}});var r=n(52322),a=n(38840),i=n(10301);let o={type:"configurator",component:function(e){return(0,r.jsx)(a.u,{...e,withLabels:!0,data:i.a,miw:300})},code:[{fileName:"Demo.tsx",code:`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart{{props}} withLabels data={data} />;
}
`,language:"tsx"},{fileName:"data.ts",code:i.o,language:"tsx"}],centered:!0,controls:[{type:"boolean",prop:"withLabelsLine",initialValue:!0,libraryValue:"__"},{type:"segmented",prop:"labelsPosition",initialValue:"outside",libraryValue:"__",data:["inside","outside"]},{type:"segmented",prop:"labelsType",initialValue:"value",libraryValue:"__",data:["value","percent"]}]}},10301:function(e,t,n){"use strict";n.d(t,{a:function(){return r},o:function(){return a}});let r=[{name:"USA",value:400,color:"indigo.6"},{name:"India",value:300,color:"yellow.6"},{name:"Japan",value:300,color:"teal.6"},{name:"Other",value:200,color:"gray.6"}],a=`
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 300, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
`},21988:function(e,t,n){"use strict";n.d(t,{m:function(){return o}});var r=n(52322),a=n(22309),i=n(47550);let o={type:"code",component:function(){return(0,r.jsx)(a.H,{h:300,data:i.qH,dataKey:"product",withPolarRadiusAxis:!0,series:[{name:"Sales January",color:"lime.4",opacity:.1},{name:"Sales February",color:"cyan.4",opacity:.1}]})},code:[{code:`
import { RadarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <RadarChart
      h={300}
      data={data}
      dataKey="product"
      withPolarRadiusAxis
      series={[
        { name: 'Sales January', color: 'lime.4', opacity: 0.1 },
        { name: 'Sales February', color: 'cyan.4', opacity: 0.1 },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i.gv,language:"tsx",fileName:"data.ts"}]}},47550:function(e,t,n){"use strict";n.d(t,{aT:function(){return r},gv:function(){return o},op:function(){return a},qH:function(){return i}});let r=[{product:"Apples",sales:120},{product:"Oranges",sales:98},{product:"Tomatoes",sales:86},{product:"Grapes",sales:99},{product:"Bananas",sales:85},{product:"Lemons",sales:65}],a=`
export const data = [
  {
    product: 'Apples',
    sales: 120,
  },
  {
    product: 'Oranges',
    sales: 98,
  },
  {
    product: 'Tomatoes',
    sales: 86,
  },
  {
    product: 'Grapes',
    sales: 99,
  },
  {
    product: 'Bananas',
    sales: 85,
  },
  {
    product: 'Lemons',
    sales: 65,
  },
];
`,i=[{product:"Apples","Sales January":120,"Sales February":100},{product:"Oranges","Sales January":98,"Sales February":90},{product:"Tomatoes","Sales January":86,"Sales February":70},{product:"Grapes","Sales January":99,"Sales February":80},{product:"Bananas","Sales January":85,"Sales February":120},{product:"Lemons","Sales January":65,"Sales February":150}],o=`
export const data = [
  {
    product: 'Apples',
    'Sales January': 120,
    'Sales February': 100,
  },
  {
    product: 'Oranges',
    'Sales January': 98,
    'Sales February': 90,
  },
  {
    product: 'Tomatoes',
    'Sales January': 86,
    'Sales February': 70,
  },
  {
    product: 'Grapes',
    'Sales January': 99,
    'Sales February': 80,
  },
  {
    product: 'Bananas',
    'Sales January': 85,
    'Sales February': 120,
  },
  {
    product: 'Lemons',
    'Sales January': 65,
    'Sales February': 150,
  },
];`},8672:function(e,t,n){"use strict";n.d(t,{A:function(){return d}});var r=n(52322),a=n(77533),i=n(65438),o=n(8582);let s=[10,20,40,20,40,10,50],l=[50,40,20,40,20,40,10],c=[10,20,40,20,40,10,50,5,10],d={type:"code",component:function(){return(0,r.jsxs)(i.K,{gap:"sm",children:[(0,r.jsx)(o.x,{children:"Positive trend:"}),(0,r.jsx)(a.b,{w:200,h:60,data:s,trendColors:{positive:"teal.6",negative:"red.6",neutral:"gray.5"},fillOpacity:.2}),(0,r.jsx)(o.x,{mt:"md",children:"Negative trend:"}),(0,r.jsx)(a.b,{w:200,h:60,data:l,trendColors:{positive:"teal.6",negative:"red.6",neutral:"gray.5"},fillOpacity:.2}),(0,r.jsx)(o.x,{mt:"md",children:"Neutral trend:"}),(0,r.jsx)(a.b,{w:200,h:60,data:c,trendColors:{positive:"teal.6",negative:"red.6",neutral:"gray.5"},fillOpacity:.2})]})},code:`
import { Sparkline } from '@mantine/charts';
import { Stack, Text } from '@mantine/core';

const positiveTrend = [10, 20, 40, 20, 40, 10, 50];
const negativeTrend = [50, 40, 20, 40, 20, 40, 10];
const neutralTrend = [10, 20, 40, 20, 40, 10, 50, 5, 10];

function Demo() {
  return (
    <Stack gap="sm">
      <Text>Positive trend:</Text>
      <Sparkline
        w={200}
        h={60}
        data={positiveTrend}
        trendColors={{ positive: 'teal.6', negative: 'red.6', neutral: 'gray.5' }}
        fillOpacity={0.2}
      />

      <Text mt="md">Negative trend:</Text>
      <Sparkline
        w={200}
        h={60}
        data={negativeTrend}
        trendColors={{ positive: 'teal.6', negative: 'red.6', neutral: 'gray.5' }}
        fillOpacity={0.2}
      />

      <Text mt="md">Neutral trend:</Text>
      <Sparkline
        w={200}
        h={60}
        data={neutralTrend}
        trendColors={{ positive: 'teal.6', negative: 'red.6', neutral: 'gray.5' }}
        fillOpacity={0.2}
      />
    </Stack>
  );
}
`,centered:!0}},35221:function(e,t,n){"use strict";n.d(t,{g:function(){return c}});var r=n(52322),a=n(78222),i=n(10266),o=n(74770),s=n(17115),l=n(3900);let c={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput, FocusTrap } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Focus demo">
        <FocusTrap.InitialFocus />
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,l.q)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.u,{opened:e,onClose:n,title:"Focus demo",children:[(0,r.jsx)(i.i.InitialFocus,{}),(0,r.jsx)(o.o,{label:"First input",placeholder:"First input"}),(0,r.jsx)(o.o,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})]}),(0,r.jsx)(s.z,{onClick:t,children:"Open modal"})]})}}},94091:function(e,t,n){"use strict";n.d(t,{z:function(){return x}});var r=n(52322),a=n(98783),i=n(73007),o=n(13924),s=n(20793),l=n(9705),c=n(93010),d=n(79649);let h=`
import {
  IconAlignCenter,
  IconAlignJustified,
  IconAlignLeft,
  IconAlignRight,
  IconCheck,
} from '@tabler/icons-react';
import { Group, Select, SelectProps } from '@mantine/core';

const iconProps = {
  stroke: 1.5,
  color: 'currentColor',
  opacity: 0.6,
  size: 18,
};

const icons: Record<string, React.ReactNode> = {
  left: <IconAlignLeft {...iconProps} />,
  center: <IconAlignCenter {...iconProps} />,
  right: <IconAlignRight {...iconProps} />,
  justify: <IconAlignJustified {...iconProps} />,
};

const renderSelectOption: SelectProps['renderOption'] = ({ option, checked }) => (
  <Group flex="1" gap="xs">
    {icons[option.value]}
    {option.label}
    {checked && <IconCheck style={{ marginInlineStart: 'auto' }} {...iconProps} />}
  </Group>
);

function Demo() {
  return (
    <Select
      label="Select with renderOption"
      placeholder="Select text align"
      data={[
        { value: 'left', label: 'Left' },
        { value: 'center', label: 'Center' },
        { value: 'right', label: 'Right' },
        { value: 'justify', label: 'Justify' },
      ]}
      renderOption={renderSelectOption}
    />
  );
}
`,p={stroke:1.5,color:"currentColor",opacity:.6,size:18},u={left:(0,r.jsx)(a.Z,{...p}),center:(0,r.jsx)(i.Z,{...p}),right:(0,r.jsx)(o.Z,{...p}),justify:(0,r.jsx)(s.Z,{...p})},m=({option:e,checked:t})=>(0,r.jsxs)(c.Z,{flex:"1",gap:"xs",children:[u[e.value],e.label,t&&(0,r.jsx)(l.Z,{style:{marginInlineStart:"auto"},...p})]}),x={type:"code",component:function(){return(0,r.jsx)(d.P,{label:"Select with renderOption",placeholder:"Select text align",data:[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"},{value:"justify",label:"Justify"}],renderOption:m})},code:h,centered:!0,maxWidth:340,defaultExpanded:!1}},19970:function(e,t,n){"use strict";n.d(t,{z:function(){return c}});var r=n(52322),a=n(93010),i=n(8582),o=n(77413);let s={Apples:{emoji:"\uD83C\uDF4E",description:"Crisp and juicy snacking delight"},Bread:{emoji:"\uD83C\uDF5E",description:"Freshly baked daily essential"},Bananas:{emoji:"\uD83C\uDF4C",description:"Perfect for a healthy breakfast"},Eggs:{emoji:"\uD83E\uDD5A",description:"Versatile protein source for cooking"},Broccoli:{emoji:"\uD83E\uDD66",description:"Nutrient-rich green vegetable"}},l=({option:e})=>(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(i.x,{span:!0,fz:24,children:s[e.value].emoji}),(0,r.jsxs)("div",{children:[(0,r.jsx)(i.x,{children:e.value}),(0,r.jsx)(i.x,{size:"xs",opacity:.5,children:s[e.value].description})]})]}),c={type:"code",component:function(){return(0,r.jsx)(o.B,{data:["Apples","Bread","Bananas","Eggs","Broccoli"],renderOption:l,label:"Groceries",placeholder:"Pick tag from list or type to add new",maxDropdownHeight:300})},code:`
import { Group, TagsInput, TagsInputProps, Text } from '@mantine/core';

const data: Record<string, { emoji: string; description: string }> = {
  Apples: {
    emoji: '\u{1F34E}',
    description: 'Crisp and juicy snacking delight',
  },
  Bread: {
    emoji: '\u{1F35E}',
    description: 'Freshly baked daily essential',
  },
  Bananas: {
    emoji: '\u{1F34C}',
    description: 'Perfect for a healthy breakfast',
  },
  Eggs: {
    emoji: '\u{1F95A}',
    description: 'Versatile protein source for cooking',
  },
  Broccoli: {
    emoji: '\u{1F966}',
    description: 'Nutrient-rich green vegetable',
  },
};

const renderTagsInputOption: TagsInputProps['renderOption'] = ({ option }) => (
  <Group>
    <Text span fz={24}>
      {data[option.value].emoji}
    </Text>
    <div>
      <Text>{option.value}</Text>
      <Text size="xs" opacity={0.5}>
        {data[option.value].description}
      </Text>
    </div>
  </Group>
);

function Demo() {
  return (
    <TagsInput
      data={['Apples', 'Bread', 'Bananas', 'Eggs', 'Broccoli']}
      renderOption={renderTagsInputOption}
      label="Groceries"
      placeholder="Pick tag from list or type to add new"
      maxDropdownHeight={300}
    />
  );
}
`,centered:!0,maxWidth:340,defaultExpanded:!1}},25985:function(e,t,n){"use strict";n.d(t,{c:function(){return a}});var r=n(52322);let a={type:"code",component:function(){return(0,r.jsx)("div",{className:"m_cd12fd1e",children:(0,r.jsx)("div",{className:"m_d4760060",children:"Resize parent element to see container query in action"})})},code:[{code:`.root {
  min-width: 200px;
  max-width: 100%;
  min-height: 120px;
  container-type: inline-size;
  overflow: auto;
  resize: horizontal;
}

.child {
  background-color: var(--mantine-color-dimmed);
  color: var(--mantine-color-white);
  padding: var(--mantine-spacing-md);

  @container (max-width: 500px) {
    background-color: var(--mantine-color-blue-filled);
  }

  @container (max-width: 300px) {
    background-color: var(--mantine-color-red-filled);
  }
}`,language:"scss",fileName:"Demo.module.css"},{code:`
import classes from './Demo.module.css';

function Demo() {
  return (
    <div className={classes.root}>
      <div className={classes.child}>Resize parent element to see container query in action</div>
    </div>
  );
}
`,language:"tsx",fileName:"Demo.tsx"}]}},66556:function(e,t,n){"use strict";n.d(t,{w:function(){return h}});var r=n(52322),a=n(25396),i=n(18429),o=n(13635),s=n(31981),l=n(14852);let c=e=>e.extend({addKeyboardShortcuts:()=>({"Mod-[":({editor:e})=>(e.chain().focus().liftListItem("taskItem").run(),!0),"Mod-]":({editor:e})=>(e.chain().focus().sinkListItem("taskItem").run(),!0)})}).configure({HTMLAttributes:{class:`${l.Z.taskList} mantine-RichTextEditor-taskList`}});var d=n(76124);let h={type:"code",component:function(){let e=(0,o.jE)({extensions:[s.Z,c(i.Z),a.ZP.configure({nested:!0,HTMLAttributes:{class:"test-item"}})],content:`
        <ul data-type="taskList">
          <li data-type="taskItem" data-checked="true">A list item</li>
          <li data-type="taskItem" data-checked="false">And another one</li>
        </ul>
      `});return(0,r.jsxs)(d.L,{editor:e,children:[(0,r.jsx)(d.L.Toolbar,{children:(0,r.jsxs)(d.L.ControlsGroup,{children:[(0,r.jsx)(d.L.TaskList,{}),(0,r.jsx)(d.L.TaskListLift,{}),(0,r.jsx)(d.L.TaskListSink,{})]})}),(0,r.jsx)(d.L.Content,{})]})},code:`
import TaskItem from '@tiptap/extension-task-item';
import TipTapTaskList from '@tiptap/extension-task-list';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor, getTaskListExtension } from '@mantine/tiptap';

function Demo() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      getTaskListExtension(TipTapTaskList),
      TaskItem.configure({
        nested: true,
        HTMLAttributes: {
          class: 'test-item',
        },
      }),
    ],
    content: \`
        <ul data-type="taskList">
          <li data-type="taskItem" data-checked="true">A list item</li>
          <li data-type="taskItem" data-checked="false">And another one</li>
        </ul>
      \`,
  });

  return (
    <div style={{ padding: 40 }}>
      <RichTextEditor editor={editor}>
        <RichTextEditor.Toolbar>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.TaskList />
            <RichTextEditor.TaskListLift />
            <RichTextEditor.TaskListSink />
          </RichTextEditor.ControlsGroup>
        </RichTextEditor.Toolbar>

        <RichTextEditor.Content />
      </RichTextEditor>
    </div>
  );
}
`}},32125:function(e,t,n){"use strict";n.d(t,{v:function(){return a}});var r=n(52322);function a({color:e,id:t,withGradient:n,fillOpacity:a}){return(0,r.jsx)(r.Fragment,{children:n?(0,r.jsxs)("linearGradient",{id:t,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,r.jsx)("stop",{offset:"0%",stopColor:e,stopOpacity:a}),(0,r.jsx)("stop",{offset:"100%",stopColor:e,stopOpacity:.01})]}):(0,r.jsx)("linearGradient",{id:t,x1:"0",y1:"0",x2:"0",y2:"1",children:(0,r.jsx)("stop",{stopColor:e,stopOpacity:a??.2})})})}a.displayName="@mantine/charts/AreaGradient"},8132:function(e,t,n){"use strict";n.d(t,{v:function(){return F}});var r=n(52322),a=n(2784),i=n(171),o=n(11011),s=n(30840),l=n(18205),c=n(80739),d=n(55734),h=n(25556),p=n(81224),u=n(3131),m=n(55484),x=n(21154),f=n(11200),j=n(13588),v=n(82027),y=n(38483),g=n(68755),b=n(51477),w=n(46690),S=n(28559),k=n(46293),C=n(50425),T=n(7064);function I(e){return`${(100*e).toFixed(0)}%`}let A={withXAxis:!0,withYAxis:!0,withTooltip:!0,tooltipAnimationDuration:0,fillOpacity:1,tickLine:"y",strokeDasharray:"5 5",gridAxis:"x",type:"default"},L=(0,f.Z)((e,{textColor:t,gridColor:n,cursorFill:r})=>({root:{"--chart-text-color":t?(0,j.p)(t,e):void 0,"--chart-grid-color":n?(0,j.p)(n,e):void 0,"--chart-cursor-fill":r?(0,j.p)(r,e):void 0}}));function P({value:e,valueFormatter:t,...n}){return(0,r.jsx)("text",{...n,dy:-10,fontSize:12,fill:"var(--chart-text-color, var(--mantine-color-dimmed))",textAnchor:"center",children:"function"==typeof t?t(e):e})}let F=(0,v.d)((e,t)=>{let n,f;let v=(0,y.w)("BarChart",A,e),{classNames:F,className:M,style:E,styles:_,unstyled:N,vars:O,data:R,withLegend:z,legendProps:D,series:B,onMouseLeave:H,dataKey:G,withTooltip:q,withXAxis:J,withYAxis:K,gridAxis:Z,tickLine:V,xAxisProps:W,yAxisProps:U,unit:$,tooltipAnimationDuration:Y,strokeDasharray:X,gridProps:Q,tooltipProps:ee,referenceLines:et,fillOpacity:en,barChartProps:er,type:ea,orientation:ei,dir:eo,valueFormatter:es,children:el,barProps:ec,xAxisLabel:ed,yAxisLabel:eh,withBarValueLabel:ep,withRightYAxis:eu,rightYAxisLabel:em,rightYAxisProps:ex,...ef}=v,ej=(0,g.rZ)(),[ev,ey]=(0,a.useState)(null),eg=null!==ev,eb="stacked"===ea||"percent"===ea,{resolvedClassNames:ew,resolvedStyles:eS}=(0,b.h)({classNames:F,styles:_,props:v}),ek="waterfall"===ea?(n=0,f=0,R.map(e=>{if(e.standalone)for(let t in e)"number"==typeof e[t]&&t!==G&&(e[t]=[0,e[t]]);else for(let t in e)"number"==typeof e[t]&&t!==G&&(f+=e[t],e[t]=[n,f],n=f);return e})):R,eC=(0,w.y)({name:"BarChart",classes:T.Z,props:v,className:M,style:E,classNames:F,styles:_,unstyled:N,vars:O,varsResolver:L}),eT=B.map(e=>{let t=(0,j.p)(e.color,ej),n=eg&&ev!==e.name;return(0,a.createElement)(i.$,{...eC("bar"),key:e.name,name:e.name,dataKey:e.name,fill:t,stroke:t,isAnimationActive:!1,fillOpacity:n?.1:en,strokeOpacity:n?.2:0,stackId:eb?"stack":void 0,label:ep?(0,r.jsx)(P,{valueFormatter:es}):void 0,yAxisId:e.yAxisId||"left",..."function"==typeof ec?ec(e):ec},ek.map((e,n)=>(0,r.jsx)(o.b,{fill:e.color?(0,j.p)(e.color,ej):t},`cell-${n}`)))}),eI=et?.map((e,t)=>{let n=j.p(e.color,ej);return r.jsx(s.d,{stroke:e.color?n:"var(--chart-grid-color)",strokeWidth:1,yAxisId:e.yAxisId||"left",...e,label:{value:e.label,fill:e.color?n:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft"},...eC("referenceLine")},t)}),eA={hide:!K,axisLine:!1,..."vertical"===ei?{dataKey:G,type:"category"}:{type:"number"},tickLine:!!("none"!==Z&&("y"===V||"xy"===V))&&{stroke:"currentColor"},allowDecimals:!0,unit:$,tickFormatter:"percent"===ea?I:es,...eC("axis")};return(0,r.jsx)(S.x,{ref:t,...eC("root"),onMouseLeave:e=>{ey(null),H?.(e)},dir:eo||"ltr",...ef,children:(0,r.jsx)(l.h,{...eC("container"),children:(0,r.jsxs)(c.v,{data:ek,stackOffset:"percent"===ea?"expand":void 0,layout:ei,margin:{bottom:ed?30:void 0,left:eh?10:void 0,right:eh?5:void 0},...er,children:[z&&(0,r.jsx)(d.D,{verticalAlign:"top",content:e=>(0,r.jsx)(k.Q,{payload:e.payload,onHighlight:ey,legendPosition:D?.verticalAlign||"top",classNames:ew,styles:eS,series:B,showColor:"waterfall"!==ea}),...D}),(0,r.jsxs)(h.K,{hide:!J,..."vertical"===ei?{type:"number"}:{dataKey:G},tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:!!("none"!==Z&&("x"===V||"xy"===V))&&{stroke:"currentColor"},minTickGap:5,...eC("axis"),...W,children:[ed&&(0,r.jsx)(p._,{position:"insideBottom",offset:-20,fontSize:12,...eC("axisLabel"),children:ed}),W?.children]}),(0,r.jsxs)(u.B,{yAxisId:"left",orientation:"left",tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},...eA,...U,children:[em&&(0,r.jsx)(p._,{position:"insideLeft",angle:-90,textAnchor:"middle",fontSize:12,offset:-5,...eC("axisLabel"),children:em}),U?.children]}),(0,r.jsxs)(u.B,{yAxisId:"right",orientation:"right",tick:{transform:"translate(10, 0)",fontSize:12,fill:"currentColor"},...eA,...ex,children:[eh&&(0,r.jsx)(p._,{position:"insideRight",angle:90,textAnchor:"middle",fontSize:12,offset:-5,...eC("axisLabel"),children:eh}),U?.children]}),(0,r.jsx)(m.q,{strokeDasharray:X,vertical:"y"===Z||"xy"===Z,horizontal:"x"===Z||"xy"===Z,...eC("grid"),...Q}),q&&(0,r.jsx)(x.u,{animationDuration:Y,isAnimationActive:0!==Y,position:"vertical"===ei?{}:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:X,fill:"var(--chart-cursor-fill)"},content:({label:e,payload:t})=>(0,r.jsx)(C.h,{label:e,payload:t,type:"waterfall"===ea?"scatter":void 0,unit:$,classNames:ew,styles:eS,series:B,valueFormatter:es}),...ee}),eT,eI,el]})})})});F.displayName="@mantine/charts/BarChart",F.classes=T.Z},46293:function(e,t,n){"use strict";n.d(t,{Q:function(){return p}});var r=n(52322),a=n(82027),i=n(38483),o=n(46690),s=n(27009),l=n(28559),c=n(64438),d={legend:"m_847eaf",legendItem:"m_17da7e62",legendItemColor:"m_6e236e21",legendItemName:"m_8ff56c0d"};let h={},p=(0,a.d)((e,t)=>{let n=(0,i.w)("ChartLegend",h,e),{classNames:a,className:p,style:u,styles:m,unstyled:x,vars:f,payload:j,onHighlight:v,legendPosition:y,mod:g,series:b,showColor:w,centered:S,...k}=n,C=(0,o.y)({name:"ChartLegend",classes:d,props:n,className:p,style:u,classNames:a,styles:m,unstyled:x});if(!j)return null;let T=j.filter(e=>"none"!==e.color),I=(0,c.v)(b),A=T.map((e,t)=>(0,r.jsxs)("div",{...C("legendItem"),onMouseEnter:()=>v(e.dataKey),onMouseLeave:()=>v(null),"data-without-color":!1===w||void 0,children:[(0,r.jsx)(s.b,{color:e.color,size:12,...C("legendItemColor"),withShadow:!1}),(0,r.jsx)("p",{...C("legendItemName"),children:I[e.dataKey]||e.dataKey})]},t));return(0,r.jsx)(l.x,{ref:t,mod:[{position:y,centered:S},g],...C("legend"),...k,children:A})});p.displayName="@mantine/charts/ChartLegend"},50425:function(e,t,n){"use strict";n.d(t,{h:function(){return f},X:function(){return u}});var r=n(52322),a=n(82027),i=n(38483),o=n(68755),s=n(46690),l=n(27009),c=n(13588),d=n(28559),h=n(64438),p={tooltip:"m_e4d36c9b",tooltipLabel:"m_7f4bcb19",tooltipBody:"m_3de554dd",tooltipItem:"m_3de8964e",tooltipItemColor:"m_b30369b5",tooltipItemBody:"m_50186d10",tooltipItemName:"m_501dadf9",tooltipItemData:"m_50192318"};function u(e,t){let n=e.filter(e=>"none"!==e.fill||!e.color);return t?n.filter(e=>e.name===t):n}function m(e,t){return"radial"===t||"scatter"===t?Array.isArray(e.value)?e.value[1]-e.value[0]:e.value:Array.isArray(e.payload[e.dataKey])?e.payload[e.dataKey][1]-e.payload[e.dataKey][0]:e.payload[e.dataKey]}let x={type:"area",showColor:!0},f=(0,a.d)((e,t)=>{let n=(0,i.w)("ChartTooltip",x,e),{classNames:a,className:f,style:j,styles:v,unstyled:y,vars:g,payload:b,label:w,unit:S,type:k,segmentId:C,mod:T,series:I,valueFormatter:A,showColor:L,...P}=n,F=(0,o.rZ)(),M=(0,s.y)({name:"ChartTooltip",classes:p,props:n,className:f,style:j,classNames:a,styles:v,unstyled:y});if(!b)return null;let E=u(b,C),_="scatter"===k?b[0]?.payload?.name:null,N=(0,h.v)(I),O=w||_,R=E.map(e=>(0,r.jsxs)("div",{"data-type":k,...M("tooltipItem"),children:[(0,r.jsxs)("div",{...M("tooltipItemBody"),children:[L&&(0,r.jsx)(l.b,{color:(0,c.p)(e.color,F),size:12,...M("tooltipItemColor"),withShadow:!1}),(0,r.jsx)("div",{...M("tooltipItemName"),children:N[e.name]||e.name})]}),(0,r.jsxs)("div",{...M("tooltipItemData"),children:["function"==typeof A?A(m(e,k)):m(e,k),S||e.unit]})]},e.name));return(0,r.jsxs)(d.x,{...M("tooltip"),mod:[{type:k},T],ref:t,...P,children:[O&&(0,r.jsx)("div",{...M("tooltipLabel"),children:O}),(0,r.jsx)("div",{...M("tooltipBody"),children:R})]})});f.displayName="@mantine/charts/ChartTooltip"},38840:function(e,t,n){"use strict";n.d(t,{u:function(){return S}});var r=n(52322),a=n(11011),i=n(18205),o=n(43454),s=n(79941),l=n(21154),c=n(11200),d=n(13588),h=n(58898),p=n(82027),u=n(38483),m=n(68755),x=n(46690),f=n(51477),j=n(28559),v=n(50425),y={root:"m_cd8943fd",label:"m_e3441f39"};let g={withTooltip:!1,withLabelsLine:!0,paddingAngle:0,size:160,strokeWidth:1,startAngle:0,endAngle:360,tooltipDataSource:"all",labelsPosition:"outside",labelsType:"value"},b=(0,c.Z)((e,{strokeColor:t,labelColor:n,withLabels:r,size:a,labelsPosition:i})=>({root:{"--chart-stroke-color":t?(0,d.p)(t,e):void 0,"--chart-labels-color":n?(0,d.p)(n,e):void 0,"--chart-size":r&&"outside"===i?(0,h.h)(a+80):(0,h.h)(a)}})),w=(e,t)=>({cx:n,cy:a,midAngle:i,innerRadius:o,outerRadius:s,value:l,percent:c})=>{let d=Math.PI/180,h=o+(s-o)*.5,p=n+h*Math.cos(-i*d);return(0,r.jsx)("text",{x:p,y:a+h*Math.sin(-i*d),textAnchor:p>n?"start":"end",dominantBaseline:"central",className:y.label,children:"percent"===e?`${(100*c).toFixed(0)}%`:"function"==typeof t?t(l):l})},S=(0,p.d)((e,t)=>{let n=(0,u.w)("PieChart",g,e),{classNames:c,className:h,style:p,styles:S,unstyled:k,vars:C,data:T,withTooltip:I,tooltipAnimationDuration:A,tooltipProps:L,pieProps:P,paddingAngle:F,withLabels:M,withLabelsLine:E,size:_,strokeWidth:N,startAngle:O,endAngle:R,tooltipDataSource:z,children:D,pieChartProps:B,labelsPosition:H,valueFormatter:G,labelsType:q,...J}=n,K=(0,m.rZ)(),Z=(0,x.y)({name:"PieChart",classes:y,props:n,className:h,style:p,classNames:c,styles:S,unstyled:k,vars:C,varsResolver:b}),{resolvedClassNames:V,resolvedStyles:W}=(0,f.h)({classNames:c,styles:S,props:n}),U=T.map((e,t)=>(0,r.jsx)(a.b,{fill:(0,d.p)(e.color,K),stroke:"var(--chart-stroke-color, var(--mantine-color-body))",strokeWidth:N},t));return(0,r.jsx)(j.x,{ref:t,size:_,...Z("root"),...J,children:(0,r.jsx)(i.h,{children:(0,r.jsxs)(o.u,{...B,children:[(0,r.jsx)(s.b,{data:T,innerRadius:0,outerRadius:_/2,dataKey:"value",isAnimationActive:!1,paddingAngle:F,startAngle:O,endAngle:R,label:!!M&&("inside"===H?w(q||"value",G):"percent"===q?({percent:e,x:t,y:n,cx:a,cy:i})=>(0,r.jsx)("text",{x:t,y:n,cx:a,cy:i,textAnchor:t>a?"start":"end",dominantBaseline:"central",fill:"var(--chart-labels-color, var(--mantine-color-dimmed))",fontFamily:"var(--mantine-font-family)",fontSize:12,children:(0,r.jsx)("tspan",{x:t,children:`${(100*e).toFixed(0)}%`})}):{fill:"var(--chart-labels-color, var(--mantine-color-dimmed))",fontSize:12,fontFamily:"var(--mantine-font-family)"}),labelLine:!!E&&"outside"===H&&{stroke:"var(--chart-label-color, var(--mantine-color-dimmed))",strokeWidth:1},...P,children:U}),I&&(0,r.jsx)(l.u,{animationDuration:A,isAnimationActive:!1,content:({payload:e})=>(0,r.jsx)(v.h,{payload:T,classNames:V,styles:W,type:"radial",segmentId:"segment"===z?e?.[0]?.name:void 0,valueFormatter:G}),...L}),D]})})})});S.displayName="@mantine/charts/PieChart",S.classes=y},22309:function(e,t,n){"use strict";n.d(t,{H:function(){return k}});var r=n(52322),a=n(2784),i=n(53891),o=n(18205),s=n(62411),l=n(25076),c=n(79669),d=n(10086),h=n(55734),p=n(11200),u=n(13588),m=n(82027),x=n(38483),f=n(68755),j=n(46690),v=n(51477),y=n(28559),g=n(46293),b={root:"m_1f271cf7",container:"m_cf06f58c"};let w={withPolarGrid:!0,withPolarAngleAxis:!0,withPolarRadiusAxis:!1},S=(0,p.Z)((e,{gridColor:t,textColor:n})=>({root:{"--chart-grid-color":t?(0,u.p)(t,e):void 0,"--chart-text-color":n?(0,u.p)(n,e):void 0}})),k=(0,m.d)((e,t)=>{let n=(0,x.w)("RadarChart",w,e),{classNames:p,className:m,style:k,styles:C,unstyled:T,vars:I,data:A,series:L,dataKey:P,gridColor:F,textColor:M,radarProps:E,radarChartProps:_,polarGridProps:N,polarAngleAxisProps:O,polarRadiusAxisProps:R,withPolarGrid:z,withPolarAngleAxis:D,withPolarRadiusAxis:B,children:H,withLegend:G,legendProps:q,...J}=n,K=(0,f.rZ)(),Z=(0,j.y)({name:"RadarChart",classes:b,props:n,className:m,style:k,classNames:p,styles:C,unstyled:T,vars:I,varsResolver:S}),[V,W]=(0,a.useState)(null),{resolvedClassNames:U,resolvedStyles:$}=(0,v.h)({classNames:p,styles:C,props:n}),Y=L.map((e,t)=>(0,r.jsx)(i.F,{name:e.name,dataKey:e.name,stroke:(0,u.p)(e.strokeColor||e.color,K),fill:(0,u.p)(e.color,K),fillOpacity:V?V===e.name?e.opacity||.4:.05:e.opacity||.4,strokeOpacity:V?V===e.name?1:.1:1,isAnimationActive:!1,..."function"==typeof E?E(e):E},t));return(0,r.jsx)(y.x,{ref:t,...Z("root"),...J,children:(0,r.jsx)(o.h,{...Z("container"),children:(0,r.jsxs)(s.H,{data:A,..._,children:[z&&(0,r.jsx)(l.n,{stroke:"var(--chart-grid-color)",...N}),D&&(0,r.jsx)(c.I,{dataKey:P,...O}),B&&(0,r.jsx)(d.S,{stroke:"var(--chart-grid-color)",...R}),Y,G&&(0,r.jsx)(h.D,{verticalAlign:"bottom",content:e=>(0,r.jsx)(g.Q,{payload:e.payload,onHighlight:W,legendPosition:q?.verticalAlign||"bottom",classNames:U,styles:$,series:L,centered:!0}),...q}),H]})})})});k.displayName="@mantine/charts/RadarChart",k.classes=b},77533:function(e,t,n){"use strict";n.d(t,{b:function(){return v}});var r=n(52322),a=n(2784),i=n(18205),o=n(50603),s=n(81073),l=n(11200),c=n(13588),d=n(82027),h=n(38483),p=n(46690),u=n(28559),m=n(32125);let x={},f={withGradient:!0,connectNulls:!0,fillOpacity:.6,strokeWidth:2,curveType:"linear"},j=(0,l.Z)((e,{color:t,data:n,trendColors:r})=>({root:{"--chart-color":r?(0,c.p)(function(e,t){let n=e[0],r=e[e.length-1];return n<r?t.positive:n>r?t.negative:t.neutral||t.positive}(n,r),e):t?(0,c.p)(t,e):void 0}})),v=(0,d.d)((e,t)=>{let n=(0,h.w)("Sparkline",f,e),{classNames:l,className:c,style:d,styles:v,unstyled:y,vars:g,data:b,withGradient:w,fillOpacity:S,curveType:k,strokeWidth:C,trendColors:T,connectNulls:I,areaProps:A,...L}=n,P=(0,p.y)({name:"Sparkline",classes:x,props:n,className:c,style:d,classNames:l,styles:v,unstyled:y,vars:g,varsResolver:j}),F=(0,a.useId)(),M=(0,a.useMemo)(()=>b.map((e,t)=>({value:e,index:t})),[b]);return(0,r.jsx)(u.x,{ref:t,...P("root"),...L,dir:"ltr",children:(0,r.jsx)(i.h,{children:(0,r.jsxs)(o.T,{data:M,children:[(0,r.jsx)(s.u,{dataKey:"value",type:k,fill:`url(#${F})`,stroke:"var(--chart-color, var(--mantine-color-blue-filled))",isAnimationActive:!1,connectNulls:I,strokeWidth:C,fillOpacity:1,...A}),(0,r.jsx)("defs",{children:(0,r.jsx)(m.v,{id:F,color:"var(--chart-color, var(--mantine-color-blue-filled))",fillOpacity:S,withGradient:w})})]})})})});v.displayName="@mantine/charts/Sparkline",v.classes=x},7064:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r={root:"m_a50f3e58",container:"m_af9188cb",grid:"m_a50a48bc",axis:"m_a507a517",axisLabel:"m_2293801d",tooltip:"m_92b296cd"}},64438:function(e,t,n){"use strict";function r(e){return e?e.reduce((e,t)=>(e[t.name]=t.label,e),{}):{}}n.d(t,{v:function(){return r}})},79649:function(e,t,n){"use strict";n.d(t,{P:function(){return v}});var r=n(52322),a=n(2784),i=n(66178),o=n(9341),s=n(85057),l=n(51477),c=n(38483),d=n(82027),h=n(29995),p=n(77606),u=n(61324),m=n(66958),x=n(56237),f=n(73063);let j={searchable:!1,withCheckIcon:!0,allowDeselect:!0,checkIconPosition:"left"},v=(0,d.d)((e,t)=>{let n=(0,c.w)("Select",j,e),{classNames:d,styles:v,unstyled:y,vars:g,dropdownOpened:b,defaultDropdownOpened:w,onDropdownClose:S,onDropdownOpen:k,onFocus:C,onBlur:T,onClick:I,onChange:A,data:L,value:P,defaultValue:F,selectFirstOptionOnChange:M,onOptionSubmit:E,comboboxProps:_,readOnly:N,disabled:O,filter:R,limit:z,withScrollArea:D,maxDropdownHeight:B,size:H,searchable:G,rightSection:q,checkIconPosition:J,withCheckIcon:K,nothingFoundMessage:Z,name:V,form:W,searchValue:U,defaultSearchValue:$,onSearchChange:Y,allowDeselect:X,error:Q,rightSectionPointerEvents:ee,id:et,clearable:en,clearButtonProps:er,hiddenInputProps:ea,renderOption:ei,onClear:eo,autoComplete:es,scrollAreaProps:el,...ec}=n,ed=(0,a.useMemo)(()=>(0,h.R)(L),[L]),eh=(0,a.useMemo)(()=>(0,p.g)(ed),[ed]),ep=(0,i.M)(et),[eu,em,ex]=(0,o.C)({value:P,defaultValue:F,finalValue:null,onChange:A}),ef="string"==typeof eu?eh[eu]:void 0,ej=(0,s.D)(ef),[ev,ey]=(0,o.C)({value:U,defaultValue:$,finalValue:ef?ef.label:"",onChange:Y}),eg=(0,x.K)({opened:b,defaultOpened:w,onDropdownOpen:()=>{k?.(),eg.updateSelectedOptionIndex("active",{scrollIntoView:!0})},onDropdownClose:()=>{S?.(),eg.resetSelectedOption()}}),{resolvedClassNames:eb,resolvedStyles:ew}=(0,l.h)({props:n,styles:v,classNames:d});(0,a.useEffect)(()=>{M&&eg.selectFirstOption()},[M,eu]),(0,a.useEffect)(()=>{null===P&&ey(""),"string"==typeof P&&ef&&(ej?.value!==ef.value||ej?.label!==ef.label)&&ey(ef.label)},[P,ef]);let eS=en&&!!eu&&!O&&!N&&(0,r.jsx)(u.h.ClearButton,{size:H,...er,onClear:()=>{em(null,null),ey(""),eo?.()}});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(u.h,{store:eg,__staticSelector:"Select",classNames:eb,styles:ew,unstyled:y,readOnly:N,onOptionSubmit:e=>{E?.(e);let t=X&&eh[e].value===eu?null:eh[e],n=t?t.value:null;em(n,t),ex||ey("string"==typeof n&&t?.label||""),eg.closeDropdown()},size:H,..._,children:[(0,r.jsx)(u.h.Target,{targetType:G?"input":"button",autoComplete:es,children:(0,r.jsx)(f.M,{id:ep,ref:t,rightSection:q||eS||(0,r.jsx)(u.h.Chevron,{size:H,error:Q,unstyled:y}),rightSectionPointerEvents:ee||(eS?"all":"none"),...ec,size:H,__staticSelector:"Select",disabled:O,readOnly:N||!G,value:ev,onChange:e=>{ey(e.currentTarget.value),eg.openDropdown(),M&&eg.selectFirstOption()},onFocus:e=>{G&&eg.openDropdown(),C?.(e)},onBlur:e=>{G&&eg.closeDropdown(),ey(null!=eu&&eh[eu]?.label||""),T?.(e)},onClick:e=>{G?eg.openDropdown():eg.toggleDropdown(),I?.(e)},classNames:eb,styles:ew,unstyled:y,pointer:!G,error:Q})}),(0,r.jsx)(m.r,{data:ed,hidden:N||O,filter:R,search:ev,limit:z,hiddenWhenEmpty:!G||!Z,withScrollArea:D,maxDropdownHeight:B,filterOptions:G&&ef?.label!==ev,value:eu,checkIconPosition:J,withCheckIcon:K,nothingFoundMessage:Z,unstyled:y,labelId:ec.label?`${ep}-label`:void 0,"aria-label":ec.label?void 0:ec["aria-label"],renderOption:ei,scrollAreaProps:el})]}),(0,r.jsx)(u.h.HiddenInput,{value:eu,name:V,form:W,disabled:O,...ea})]})});v.classes={...f.M.classes,...u.h.classes},v.displayName="@mantine/core/Select"},3900:function(e,t,n){"use strict";n.d(t,{q:function(){return a}});var r=n(2784);function a(e=!1,t){let{onOpen:n,onClose:a}=t||{},[i,o]=(0,r.useState)(e),s=(0,r.useCallback)(()=>{o(e=>e||(n?.(),!0))},[n]),l=(0,r.useCallback)(()=>{o(e=>e?(a?.(),!1):e)},[a]),c=(0,r.useCallback)(()=>{i?l():s()},[l,s,i]);return[i,{open:s,close:l,toggle:c}]}},85057:function(e,t,n){"use strict";n.d(t,{D:function(){return a}});var r=n(2784);function a(e){let t=(0,r.useRef)();return(0,r.useEffect)(()=>{t.current=e},[e]),t.current}}},function(e){e.O(0,[72812,47091,75417,61177,16717,59966,50603,43454,29985,37355,97054,66748,11340,61324,77413,76124,92888,49774,40179],function(){return e(e.s=65131)}),_N_E=e.O()}]);