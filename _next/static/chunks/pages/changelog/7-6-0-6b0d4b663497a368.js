(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9900],{48132:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-6-0",function(){return n(41676)}])},41676:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(24246),a=n(71670),o=n(86079),i=n(25352),s=n(40539),l=n(90039),c=n(13943),d=n(64563),p=n(51712),h=n(93738),u=n(9572),m=n(3916),f=n(54568);let x=(0,m.A)(f.us.Changelog760);function v(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"container-queries-support",children:"Container queries support"}),"\n",(0,r.jsxs)(t.p,{children:["You can now use ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries",children:"container queries"}),"\nwith Mantine components. ",(0,r.jsx)(t.code,{children:"rem"})," and ",(0,r.jsx)(t.code,{children:"em"})," functions from ",(0,r.jsx)(t.a,{href:"/styles/postcss-preset/#remem-functions",children:"postcss-preset-mantine"}),"\nare available in container queries staring from ",(0,r.jsx)(t.code,{children:"postcss-preset-mantine@1.13.0"}),"."]}),"\n",(0,r.jsx)(n,{data:o.c}),"\n",(0,r.jsx)(t.h2,{id:"radarchart-component",children:"RadarChart component"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/charts/radar-chart/",children:"RadarChart"})," component:"]}),"\n",(0,r.jsx)(n,{data:i.m}),"\n",(0,r.jsx)(t.h2,{id:"focustrapinitialfocus-component",children:"FocusTrap.InitialFocus component"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/core/focus-trap",children:"FocusTrap.InitialFocus"})," is a new component that adds a visually hidden\nelement which will receive the focus when the focus trap is activated.\nOnce ",(0,r.jsx)(t.code,{children:"FocusTrap.InitialFocus"})," loses focus, it is removed from the tab order."]}),"\n",(0,r.jsxs)(t.p,{children:["For example, it is useful if you do not want to focus any elements inside the ",(0,r.jsx)(t.a,{href:"/core/modal",children:"Modal"})," when it is opened:"]}),"\n",(0,r.jsx)(n,{data:s.g}),"\n",(0,r.jsx)(t.h2,{id:"new-mantineprovider-props",children:"New MantineProvider props"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/theming/mantine-provider",children:"MantineProvider"})," now includes more props to control how styles\nare generated and injected. These props are useful if you use Mantine as a headless library\nand in test environments."]}),"\n",(0,r.jsx)(t.h3,{id:"deduplicatecssvariables",children:"deduplicateCssVariables"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"deduplicateCssVariables"})," prop determines whether CSS variables should be deduplicated: if a CSS variable has the same value as in the default theme, it is not added in the runtime.\nBy default, it is set to ",(0,r.jsx)(t.code,{children:"true"}),". If set to ",(0,r.jsx)(t.code,{children:"false"}),", all Mantine CSS variables will be added in ",(0,r.jsx)(t.code,{children:"<style />"})," tag,\neven if they have the same value as in the default theme."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider deduplicateCssVariables={false}>\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"withstaticclasses",children:"withStaticClasses"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"withStaticClasses"})," determines whether components should have static classes, for example, ",(0,r.jsx)(t.code,{children:"mantine-Button-root"}),".\nBy default, static classes are enabled, to disable them set ",(0,r.jsx)(t.code,{children:"withStaticClasses"})," to ",(0,r.jsx)(t.code,{children:"false"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider withStaticClasses={false}>\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"withglobalclasses",children:"withGlobalClasses"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"withGlobalClasses"})," determines whether global classes should be added with ",(0,r.jsx)(t.code,{children:"<style />"})," tag.\nGlobal classes are required for ",(0,r.jsx)(t.code,{children:"hiddenFrom"}),"/",(0,r.jsx)(t.code,{children:"visibleFrom"})," and ",(0,r.jsx)(t.code,{children:"lightHidden"}),"/",(0,r.jsx)(t.code,{children:"darkHidden"})," props to work.\nBy default, global classes are enabled, to disable them set ",(0,r.jsx)(t.code,{children:"withGlobalClasses"})," to ",(0,r.jsx)(t.code,{children:"false"}),". Note that\ndisabling global classes may break styles of some components."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider withGlobalClasses={false}>\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"headlessmantineprovider",children:"HeadlessMantineProvider"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"HeadlessMantineProvider"})," is an alternative to ",(0,r.jsx)(t.a,{href:"/theming/mantine-provider",children:"MantineProvider"}),"\nthat should be used when you want to use Mantine as a headless UI library. It removes all\nfeatures that are related to Mantine styles:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Mantine classes are not applied to components"}),"\n",(0,r.jsxs)(t.li,{children:["Inline CSS variables are not added with ",(0,r.jsx)(t.code,{children:"style"})," attribute"]}),"\n",(0,r.jsx)(t.li,{children:"All color scheme related features are removed"}),"\n",(0,r.jsx)(t.li,{children:"Global styles are not generated"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Limitations of ",(0,r.jsx)(t.code,{children:"HeadlessMantineProvider"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/theming/color-schemes/",children:"Color scheme switching"})," will not work. If your application has a dark mode, you will need to implement it on your side."]}),"\n",(0,r.jsxs)(t.li,{children:["Props that are related to styles in all components (",(0,r.jsx)(t.code,{children:"color"}),", ",(0,r.jsx)(t.code,{children:"radius"}),", ",(0,r.jsx)(t.code,{children:"size"}),", etc.) will have no effect."]}),"\n",(0,r.jsxs)(t.li,{children:["Some components that rely on styles will become unusable (",(0,r.jsx)(t.a,{href:"/core/grid",children:"Grid"}),", ",(0,r.jsx)(t.a,{href:"/core/simple-grid",children:"SimpleGrid"}),", ",(0,r.jsx)(t.a,{href:"/core/container",children:"Container"}),", etc.)."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"lightHidden"}),"/",(0,r.jsx)(t.code,{children:"darkHidden"}),", ",(0,r.jsx)(t.code,{children:"visibleFrom"}),"/",(0,r.jsx)(t.code,{children:"hiddenFrom"})," props will not work."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/styles/style-props/",children:"Style props"})," will work only with explicit values, for example ",(0,r.jsx)(t.code,{children:'mt="xs"'})," will not work, but ",(0,r.jsx)(t.code,{children:"mt={5}"})," will."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["To use ",(0,r.jsx)(t.code,{children:"HeadlessMantineProvider"}),", follow the ",(0,r.jsx)(t.a,{href:"/getting-started/",children:"getting started guide"})," and replace ",(0,r.jsx)(t.code,{children:"MantineProvider"})," with ",(0,r.jsx)(t.code,{children:"HeadlessMantineProvider"}),".\nNote that you do not need to use ",(0,r.jsx)(t.a,{href:"/theming/color-schemes/#colorschemescript",children:"ColorSchemeScript"})," in your application, it will not have any effect,\nyou can ignore this part of the guide."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { HeadlessMantineProvider } from '@mantine/core';\n\nfunction App() {\n  return (\n    <HeadlessMantineProvider>\n      {/* Your application */}\n    </HeadlessMantineProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"sparkline-trendcolors",children:"Sparkline trendColors"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/charts/sparkline/",children:"Sparkline"})," now supports ",(0,r.jsx)(t.code,{children:"trendColors"})," prop to change chart color depending on the trend.\nThe prop accepts an object with ",(0,r.jsx)(t.code,{children:"positive"}),", ",(0,r.jsx)(t.code,{children:"negative"})," and ",(0,r.jsx)(t.code,{children:"neutral"})," properties:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"positive"})," - color for positive trend (first value is less than the last value in ",(0,r.jsx)(t.code,{children:"data"})," array)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"negative"})," - color for negative trend (first value is greater than the last value in ",(0,r.jsx)(t.code,{children:"data"})," array)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"neutral"})," - color for neutral trend (first and last values are equal)"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"neutral"})," is optional, if not provided, the color will be the same as ",(0,r.jsx)(t.code,{children:"positive"}),"."]}),"\n",(0,r.jsx)(n,{data:l.A}),"\n",(0,r.jsx)(t.h2,{id:"richtexteditor-tasks-extension",children:"RichTextEditor tasks extension"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/x/tiptap/#tasks",children:"RichTextEditor"})," now supports tasks ",(0,r.jsx)(t.a,{href:"https://tiptap.dev/docs/editor/api/nodes/task-list",children:"tiptap extension"}),":"]}),"\n",(0,r.jsx)(n,{data:c.w}),"\n",(0,r.jsx)(t.h2,{id:"renderoption-prop",children:"renderOption prop"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/core/select",children:"Select"}),", ",(0,r.jsx)(t.a,{href:"/core/multi-select",children:"MultiSelect"}),", ",(0,r.jsx)(t.a,{href:"/inputs/tags-input",children:"TagsInput"})," and ",(0,r.jsx)(t.a,{href:"/inputs/autocomplete",children:"Autocomplete"}),"\ncomponents now support ",(0,r.jsx)(t.code,{children:"renderOption"})," prop that allows to customize option rendering:"]}),"\n",(0,r.jsx)(n,{data:d.z}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n,{data:p.z}),"\n",(0,r.jsx)(t.h2,{id:"styles-improvements",children:"Styles improvements"}),"\n",(0,r.jsxs)(t.p,{children:["All Mantine components have been migrated to ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values",children:"logical CSS properties"}),"\n(as a replacement for rtl styles) and ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:where",children:":where"})," pseudo-class\n(as a replacement for ",(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/private-css-variables",children:"private CSS variables"}),"). These changes\nshould not impact the usage of Mantine components, but now Mantine CSS files have smaller size. For example,\n",(0,r.jsx)(t.code,{children:"@mantine/core/styles.css"})," now has ~ 8% smaller size (192kb -> 177kb)."]}),"\n",(0,r.jsx)(t.h2,{id:"pass-props-to-inner-recharts-components",children:"Pass props to inner recharts components"}),"\n",(0,r.jsxs)(t.p,{children:["You can now pass props down to recharts ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/Bar",children:"Bar"}),", ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/Area",children:"Area"})," and ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/Line",children:"Line"})," components\nwith ",(0,r.jsx)(t.code,{children:"barProps"}),", ",(0,r.jsx)(t.code,{children:"areaProps"})," and ",(0,r.jsx)(t.code,{children:"lineProps"})," props on ",(0,r.jsx)(t.a,{href:"/charts/bar-chart",children:"BarChart"}),", ",(0,r.jsx)(t.a,{href:"/charts/area-chart",children:"AreaChart"})," and ",(0,r.jsx)(t.a,{href:"/charts/line-chart",children:"LineChart"})," components."]}),"\n",(0,r.jsx)(t.p,{children:"All props accept either an object with props or a function that receives\nseries data as an argument and returns an object with props."}),"\n",(0,r.jsx)(n,{data:h.D}),"\n",(0,r.jsx)(t.h2,{id:"piechart-percent-labels",children:"PieChart percent labels"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/charts/pie-chart/",children:"PieChart"})," now supports ",(0,r.jsx)(t.code,{children:"percent"})," labels:"]}),"\n",(0,r.jsx)(n,{data:u.r}),"\n",(0,r.jsx)(t.h2,{id:"documentation-updates",children:"Documentation updates"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/styles/responsive",children:"Responsive styles guide"})," now includes new sections about responsive props and container queries"]}),"\n",(0,r.jsxs)(t.li,{children:["New ",(0,r.jsx)(t.a,{href:"/styles/unstyled/#headlessmantineprovider",children:"HeadlessMantineProvider section"})," in the unstyled guide"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/action-icon/",children:"ActionIcon"})," now includes additional documentation section on how to make the button the same size as Mantine inputs"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/charts/area-chart",children:"AreaChart"})," now includes an example of how to rotate x-axis labels"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/guides/redwood/",children:"Redwood guide"})," has been updated to the latest redwood version with Vite"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"help-center-updates",children:"Help center updates"}),"\n",(0,r.jsxs)(t.p,{children:["New articles added to the ",(0,r.jsx)(t.a,{href:"https://help.mantine.dev",children:"help center"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/browser-zooms-on-focus",children:"Browser zooms in when input is focused. What should I do?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/pinch-to-zoom-modal",children:"It is not possible to pinch to zoom when Modal is opened. What should I do?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/how-to-lock-scroll",children:"How can I lock scroll in my application?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/roadmap",children:"Where can I find the roadmap?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/tabs-border-color",children:"How can I change Tabs border color?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/input-focus-styles",children:"How can I change inputs focus styles?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/third-party-styles",children:"Can I use Mantine with Emotion/styled-components/tailwindcss?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/input-mask",children:"Is there a way to add mask to Mantine input?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/align-input-button",children:"How to align input with a button in a flex container?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/color-scheme-color",children:"How can I change component color prop value depending on the color scheme?"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/hooks/use-list-state/",children:"use-list-state"})," hook now supports ",(0,r.jsx)(t.code,{children:"swap"})," handler"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"form.setFieldValue"})," now supports callback function as an argument"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"px"}),", ",(0,r.jsx)(t.code,{children:"py"}),", ",(0,r.jsx)(t.code,{children:"mx"})," and ",(0,r.jsx)(t.code,{children:"my"})," ",(0,r.jsx)(t.a,{href:"/styles/style-props/",children:"style props"})," now use logical CSS properties ",(0,r.jsx)(t.code,{children:"padding-inline"}),", ",(0,r.jsx)(t.code,{children:"padding-block"}),", ",(0,r.jsx)(t.code,{children:"margin-inline"})," and ",(0,r.jsx)(t.code,{children:"margin-block"})," instead of ",(0,r.jsx)(t.code,{children:"padding-left"}),", ",(0,r.jsx)(t.code,{children:"padding-right"}),", etc."]}),"\n",(0,r.jsxs)(t.li,{children:["All components now support ",(0,r.jsx)(t.code,{children:"me"}),", ",(0,r.jsx)(t.code,{children:"ms"}),", ",(0,r.jsx)(t.code,{children:"ps"}),", ",(0,r.jsx)(t.code,{children:"pe"})," ",(0,r.jsx)(t.a,{href:"/styles/style-props/",children:"style props"})," to set ",(0,r.jsx)(t.code,{children:"margin-inline-end"}),", ",(0,r.jsx)(t.code,{children:"margin-inline-start"}),", ",(0,r.jsx)(t.code,{children:"padding-inline-start"})," and ",(0,r.jsx)(t.code,{children:"padding-inline-end"})," CSS properties"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/tooltip",children:"Tooltip"}),", ",(0,r.jsx)(t.a,{href:"/core/popover",children:"Popover"})," and other components based on ",(0,r.jsx)(t.code,{children:"Popover"})," now support ",(0,r.jsx)(t.code,{children:"floatingStrategy"})," prop to control ",(0,r.jsx)(t.a,{href:"https://floating-ui.com/docs/usefloating#strategy",children:"Floating UI strategy"})]}),"\n",(0,r.jsxs)(t.li,{children:["All ",(0,r.jsx)(t.code,{children:"@mantine/charts"})," components now support ",(0,r.jsx)(t.code,{children:"children"})," prop, which passes children to the root recharts component"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/hooks/use-resize-observer/",children:"use-resize-observer"})," and ",(0,r.jsx)(t.a,{href:"/hooks/use-element-size/",children:"use-element-size"})," hooks now support ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/observe#parameters",children:"ResizeObserver options"})," as hook argument"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/select",children:"Select"}),", ",(0,r.jsx)(t.a,{href:"/core/multi-select",children:"MultiSelect"})," and ",(0,r.jsx)(t.a,{href:"/inputs/tags-input",children:"TagsInput"})," now support ",(0,r.jsx)(t.code,{children:"onClear"})," prop, the function is called when clear button is clicked"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/multi-select",children:"MultiSelect"})," and ",(0,r.jsx)(t.a,{href:"/inputs/tags-input",children:"TagsInput"})," now support ",(0,r.jsx)(t.code,{children:"onRemove"})," prop, the function is called with removed item value when one of the items is deselected"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/mantinedev/redwood-template",children:"Redwood template"})," has been updated to the latest redwood version with Vite"]}),"\n"]})]})}function j(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(x,{...e,children:(0,r.jsx)(v,{...e})})}},93738:function(e,t,n){"use strict";n.d(t,{D:function(){return s}});var r=n(27378),a=n(61648),o=n(35105);let i=`
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
`,s={type:"code",component:function(){return r.createElement(a.v,{h:200,data:o.a,dataKey:"month",orientation:"vertical",yAxisProps:{width:80},barProps:{radius:10},series:[{name:"Smartphones",color:"blue.6"}]})},code:[{code:i,language:"tsx",fileName:"Demo.tsx"},{code:o.o,language:"tsx",fileName:"data.ts"}]}},35105:function(e,t,n){"use strict";n.d(t,{a:function(){return r},o:function(){return a}});let r=[{month:"January",Smartphones:1200,Laptops:900,Tablets:200},{month:"February",Smartphones:1900,Laptops:1200,Tablets:400},{month:"March",Smartphones:400,Laptops:1e3,Tablets:200},{month:"April",Smartphones:1e3,Laptops:200,Tablets:800},{month:"May",Smartphones:800,Laptops:1400,Tablets:1200},{month:"June",Smartphones:750,Laptops:600,Tablets:1e3}],a=`
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
`},9572:function(e,t,n){"use strict";n.d(t,{r:function(){return s}});var r=n(27378),a=n(88915),o=n(58822);let i=`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart{{props}} withLabels data={data} />;
}
`,s={type:"configurator",component:function(e){return r.createElement(a.u,{...e,withLabels:!0,data:o.a,miw:300})},code:[{fileName:"Demo.tsx",code:i,language:"tsx"},{fileName:"data.ts",code:o.o,language:"tsx"}],centered:!0,controls:[{type:"boolean",prop:"withLabelsLine",initialValue:!0,libraryValue:"__"},{type:"segmented",prop:"labelsPosition",initialValue:"outside",libraryValue:"__",data:["inside","outside"]},{type:"segmented",prop:"labelsType",initialValue:"value",libraryValue:"__",data:["value","percent"]}]}},58822:function(e,t,n){"use strict";n.d(t,{a:function(){return r},o:function(){return a}});let r=[{name:"USA",value:400,color:"indigo.6"},{name:"India",value:300,color:"yellow.6"},{name:"Japan",value:300,color:"teal.6"},{name:"Other",value:200,color:"gray.6"}],a=`
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 300, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
`},25352:function(e,t,n){"use strict";n.d(t,{m:function(){return s}});var r=n(27378),a=n(36590),o=n(90931);let i=`
import { RadarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <RadarChart
      h={300}
      data={multiData}
      dataKey="product"
      withPolarRadiusAxis
      series={[
        { name: 'sales_january', color: 'lime.4', opacity: 0.1 },
        { name: 'sales_february', color: 'cyan.4', opacity: 0.1 },
      ]}
    />
  );
}
`,s={type:"code",component:function(){return r.createElement(a.H,{h:300,data:o.qH,dataKey:"product",withPolarRadiusAxis:!0,series:[{name:"sales_january",color:"lime.4",opacity:.1},{name:"sales_february",color:"cyan.4",opacity:.1}]})},code:[{code:i,language:"tsx",fileName:"Demo.tsx"},{code:o.gv,language:"tsx",fileName:"data.ts"}]}},90931:function(e,t,n){"use strict";n.d(t,{aT:function(){return r},gv:function(){return i},op:function(){return a},qH:function(){return o}});let r=[{product:"Apples",sales:120},{product:"Oranges",sales:98},{product:"Tomatoes",sales:86},{product:"Grapes",sales:99},{product:"Bananas",sales:85},{product:"Lemons",sales:65}],a=`
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
`,o=[{product:"Apples",sales_january:120,sales_february:100},{product:"Oranges",sales_january:98,sales_february:90},{product:"Tomatoes",sales_january:86,sales_february:70},{product:"Grapes",sales_january:99,sales_february:80},{product:"Bananas",sales_january:85,sales_february:120},{product:"Lemons",sales_january:65,sales_february:150}],i=`
export const multiData = [
  {
    product: 'Apples',
    sales_january: 120,
    sales_february: 100,
  },
  {
    product: 'Oranges',
    sales_january: 98,
    sales_february: 90,
  },
  {
    product: 'Tomatoes',
    sales_january: 86,
    sales_february: 70,
  },
  {
    product: 'Grapes',
    sales_january: 99,
    sales_february: 80,
  },
  {
    product: 'Bananas',
    sales_january: 85,
    sales_february: 120,
  },
  {
    product: 'Lemons',
    sales_january: 65,
    sales_february: 150,
  },
];`},90039:function(e,t,n){"use strict";n.d(t,{A:function(){return p}});var r=n(27378),a=n(28535),o=n(27884),i=n(26569);let s=[10,20,40,20,40,10,50],l=[50,40,20,40,20,40,10],c=[10,20,40,20,40,10,50,5,10],d=`
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
`,p={type:"code",component:function(){return r.createElement(o.K,{gap:"sm"},r.createElement(i.x,null,"Positive trend:"),r.createElement(a.b,{w:200,h:60,data:s,trendColors:{positive:"teal.6",negative:"red.6",neutral:"gray.5"},fillOpacity:.2}),r.createElement(i.x,{mt:"md"},"Negative trend:"),r.createElement(a.b,{w:200,h:60,data:l,trendColors:{positive:"teal.6",negative:"red.6",neutral:"gray.5"},fillOpacity:.2}),r.createElement(i.x,{mt:"md"},"Neutral trend:"),r.createElement(a.b,{w:200,h:60,data:c,trendColors:{positive:"teal.6",negative:"red.6",neutral:"gray.5"},fillOpacity:.2}))},code:d,centered:!0}},40539:function(e,t,n){"use strict";n.d(t,{g:function(){return d}});var r=n(27378),a=n(72120),o=n(47210),i=n(7033),s=n(8671),l=n(87921);let c=`
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
`,d={type:"code",code:c,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,l.q)(!1);return r.createElement(r.Fragment,null,r.createElement(a.u,{opened:e,onClose:n,title:"Focus demo"},r.createElement(o.i.InitialFocus,null),r.createElement(i.o,{label:"First input",placeholder:"First input"}),r.createElement(i.o,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})),r.createElement(s.z,{onClick:t},"Open modal"))}}},64563:function(e,t,n){"use strict";n.d(t,{z:function(){return f}});var r=n(27378),a=n(89483),o=n(90318),i=n(4861),s=n(68577),l=n(16659),c=n(22971),d=n(2570);let p=`
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
`,h={stroke:1.5,color:"currentColor",opacity:.6,size:18},u={left:r.createElement(a.Z,{...h}),center:r.createElement(o.Z,{...h}),right:r.createElement(i.Z,{...h}),justify:r.createElement(s.Z,{...h})},m=({option:e,checked:t})=>r.createElement(c.Z,{flex:"1",gap:"xs"},u[e.value],e.label,t&&r.createElement(l.Z,{style:{marginInlineStart:"auto"},...h})),f={type:"code",component:function(){return r.createElement(d.P,{label:"Select with renderOption",placeholder:"Select text align",data:[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"},{value:"justify",label:"Justify"}],renderOption:m})},code:p,centered:!0,maxWidth:340,defaultExpanded:!1}},51712:function(e,t,n){"use strict";n.d(t,{z:function(){return d}});var r=n(27378),a=n(22971),o=n(26569),i=n(16161);let s=`
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
`,l={Apples:{emoji:"\uD83C\uDF4E",description:"Crisp and juicy snacking delight"},Bread:{emoji:"\uD83C\uDF5E",description:"Freshly baked daily essential"},Bananas:{emoji:"\uD83C\uDF4C",description:"Perfect for a healthy breakfast"},Eggs:{emoji:"\uD83E\uDD5A",description:"Versatile protein source for cooking"},Broccoli:{emoji:"\uD83E\uDD66",description:"Nutrient-rich green vegetable"}},c=({option:e})=>r.createElement(a.Z,null,r.createElement(o.x,{span:!0,fz:24},l[e.value].emoji),r.createElement("div",null,r.createElement(o.x,null,e.value),r.createElement(o.x,{size:"xs",opacity:.5},l[e.value].description))),d={type:"code",component:function(){return r.createElement(i.B,{data:["Apples","Bread","Bananas","Eggs","Broccoli"],renderOption:c,label:"Groceries",placeholder:"Pick tag from list or type to add new",maxDropdownHeight:300})},code:s,centered:!0,maxWidth:340,defaultExpanded:!1}},86079:function(e,t,n){"use strict";n.d(t,{c:function(){return i}});var r=n(27378);let a=`.root {
  min-width: rem(200px);
  max-width: 100%;
  min-height: rem(120px);
  container-type: inline-size;
  overflow: auto;
  resize: horizontal;
}

.child {
  background-color: var(--mantine-color-dimmed);
  color: var(--mantine-color-white);
  padding: var(--mantine-spacing-md);

  @container (max-width: rem(500px)) {
    background-color: var(--mantine-color-blue-filled);
  }

  @container (max-width: rem(300px)) {
    background-color: var(--mantine-color-red-filled);
  }
}`,o=`
import classes from './Demo.module.css';

function Demo() {
  return (
    <div className={classes.root}>
      <div className={classes.child}>Resize parent element to see container query in action</div>
    </div>
  );
}
`,i={type:"code",component:function(){return r.createElement("div",{className:"m-cd12fd1e"},r.createElement("div",{className:"m-d4760060"},"Resize parent element to see container query in action"))},code:[{code:a,language:"scss",fileName:"Demo.module.css"},{code:o,language:"tsx",fileName:"Demo.tsx"}]}},13943:function(e,t,n){"use strict";n.d(t,{w:function(){return h}});var r=n(27378),a=n(35437),o=n(15714),i=n(49947),s=n(86873),l=n(46586);let c=e=>e.extend({addKeyboardShortcuts:()=>({"Mod-[":({editor:e})=>(e.chain().focus().liftListItem("taskItem").run(),!0),"Mod-]":({editor:e})=>(e.chain().focus().sinkListItem("taskItem").run(),!0)})}).configure({HTMLAttributes:{class:`${l.Z.taskList} mantine-RichTextEditor-taskList`}});var d=n(98921);let p=`
import TaskItem from '@tiptap/extension-task-item';
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
`,h={type:"code",component:function(){let e=(0,i.jE)({extensions:[s.Z,c(o.Z),a.ZP.configure({nested:!0,HTMLAttributes:{class:"test-item"}})],content:`
        <ul data-type="taskList">
          <li data-type="taskItem" data-checked="true">A list item</li>
          <li data-type="taskItem" data-checked="false">And another one</li>
        </ul>
      `});return r.createElement(d.L,{editor:e},r.createElement(d.L.Toolbar,null,r.createElement(d.L.ControlsGroup,null,r.createElement(d.L.TaskList,null),r.createElement(d.L.TaskListLift,null),r.createElement(d.L.TaskListSink,null))),r.createElement(d.L.Content,null))},code:p}},65923:function(e,t,n){"use strict";n.d(t,{v:function(){return a}});var r=n(27378);function a({color:e,id:t,withGradient:n,fillOpacity:a}){return r.createElement(r.Fragment,null,n?r.createElement("linearGradient",{id:t,x1:"0",y1:"0",x2:"0",y2:"1"},r.createElement("stop",{offset:"0%",stopColor:e,stopOpacity:a}),r.createElement("stop",{offset:"100%",stopColor:e,stopOpacity:.01})):r.createElement("linearGradient",{id:t,x1:"0",y1:"0",x2:"0",y2:"1"},r.createElement("stop",{stopColor:e,stopOpacity:a??.2})))}a.displayName="@mantine/charts/AreaGradient"},61648:function(e,t,n){"use strict";n.d(t,{v:function(){return T}});var r=n(27378),a=n(88058),o=n(97879),i=n(9911),s=n(99308),l=n(46246),c=n(32529),d=n(26299),p=n(38616),h=n(44460),u=n(83453),m=n(89738),f=n(20410),x=n(96739),v=n(2256),j=n(5564),g=n(6231),y=n(56589),b=n(3525),w=n(96688),k=n(51010);function E(e){return`${(100*e).toFixed(0)}%`}let S={withXAxis:!0,withYAxis:!0,withTooltip:!0,tooltipAnimationDuration:0,fillOpacity:1,tickLine:"y",strokeDasharray:"5 5",gridAxis:"x",type:"default"},C=(0,u.Z)((e,{textColor:t,gridColor:n,cursorFill:r})=>({root:{"--chart-text-color":t?(0,m.p)(t,e):void 0,"--chart-grid-color":n?(0,m.p)(n,e):void 0,"--chart-cursor-fill":r?(0,m.p)(r,e):void 0}})),T=(0,f.d)((e,t)=>{let n=(0,x.w)("BarChart",S,e),{classNames:u,className:f,style:T,styles:I,unstyled:A,vars:P,data:L,withLegend:M,legendProps:_,series:N,onMouseLeave:O,dataKey:F,withTooltip:D,withXAxis:z,withYAxis:B,gridAxis:R,tickLine:H,xAxisProps:G,yAxisProps:q,unit:Z,tooltipAnimationDuration:K,strokeDasharray:V,gridProps:W,tooltipProps:U,referenceLines:J,fillOpacity:$,barChartProps:X,type:Y,orientation:Q,dir:ee,valueFormatter:et,children:en,barProps:er,...ea}=n,eo=(0,v.rZ)(),[ei,es]=(0,r.useState)(null),el=null!==ei,ec="stacked"===Y||"percent"===Y,{resolvedClassNames:ed,resolvedStyles:ep}=(0,j.h)({classNames:u,styles:I,props:n}),eh=(0,g.y)({name:"BarChart",classes:k.Z,props:n,className:f,style:T,classNames:u,styles:I,unstyled:A,vars:P,varsResolver:C}),eu=N.map(e=>{let t=(0,m.p)(e.color,eo),n=el&&ei!==e.name;return r.createElement(a.$,{...eh("bar"),key:e.name,name:e.name,dataKey:e.name,fill:t,stroke:t,isAnimationActive:!1,fillOpacity:n?.1:$,strokeOpacity:n?.2:0,stackId:ec?"stack":void 0,..."function"==typeof er?er(e):er})}),em=J?.map((e,t)=>{let n=m.p(e.color,eo);return r.createElement(o.d,{key:t,stroke:e.color?n:"var(--chart-grid-color)",strokeWidth:1,...e,label:{value:e.label,fill:e.color?n:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft"},...eh("referenceLine")})});return r.createElement(y.x,{ref:t,...eh("root"),onMouseLeave:e=>{es(null),O?.(e)},dir:ee||"ltr",...ea},r.createElement(i.h,{...eh("container")},r.createElement(s.v,{data:L,stackOffset:"percent"===Y?"expand":void 0,layout:Q,...X},M&&r.createElement(l.D,{verticalAlign:"top",content:e=>r.createElement(b.Q,{payload:e.payload,onHighlight:es,legendPosition:_?.verticalAlign||"top",classNames:ed,styles:ep,series:N}),height:44,..._}),r.createElement(c.K,{hide:!z,..."vertical"===Q?{type:"number"}:{dataKey:F},tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:!!("none"!==R&&("x"===H||"xy"===H))&&{stroke:"currentColor"},minTickGap:5,...eh("axis"),...G}),r.createElement(d.B,{hide:!B,axisLine:!1,..."vertical"===Q?{dataKey:F,type:"category"}:{type:"number"},tickLine:!!("none"!==R&&("y"===H||"xy"===H))&&{stroke:"currentColor"},tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},allowDecimals:!0,unit:Z,tickFormatter:"percent"===Y?E:et,...eh("axis"),...q}),r.createElement(p.q,{strokeDasharray:V,vertical:"y"===R||"xy"===R,horizontal:"x"===R||"xy"===R,...eh("grid"),...W}),D&&r.createElement(h.u,{animationDuration:K,isAnimationActive:0!==K,position:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:V,fill:"var(--chart-cursor-fill)"},content:({label:e,payload:t})=>r.createElement(w.h,{label:e,payload:t,unit:Z,classNames:ed,styles:ep,series:N,valueFormatter:et}),...U}),eu,em,en)))});T.displayName="@mantine/charts/BarChart",T.classes=k.Z},3525:function(e,t,n){"use strict";n.d(t,{Q:function(){return h}});var r=n(27378),a=n(20410),o=n(96739),i=n(6231),s=n(16202),l=n(56589),c=n(3671),d={legend:"m-847eaf",legendItem:"m-17da7e62",legendItemName:"m-8ff56c0d"};let p={},h=(0,a.d)((e,t)=>{let n=(0,o.w)("ChartLegend",p,e),{classNames:a,className:h,style:u,styles:m,unstyled:f,vars:x,payload:v,onHighlight:j,legendPosition:g,mod:y,series:b,...w}=n,k=(0,i.y)({name:"ChartLegend",classes:d,props:n,className:h,style:u,classNames:a,styles:m,unstyled:f});if(!v)return null;let E=v.filter(e=>"none"!==e.color),S=(0,c.v)(b),C=E.map((e,t)=>r.createElement("div",{key:t,...k("legendItem"),onMouseEnter:()=>j(e.dataKey),onMouseLeave:()=>j(null)},r.createElement(s.b,{color:e.color,size:12,...k("legendItemColor"),withShadow:!1}),r.createElement("p",{...k("legendItemName")},S[e.dataKey]||e.dataKey)));return r.createElement(l.x,{ref:t,mod:[{position:g},y],...k("legend"),...w},C)});h.displayName="@mantine/charts/ChartLegend"},96688:function(e,t,n){"use strict";n.d(t,{h:function(){return x},X:function(){return u}});var r=n(27378),a=n(20410),o=n(96739),i=n(2256),s=n(6231),l=n(16202),c=n(89738),d=n(56589),p=n(3671),h={tooltip:"m-e4d36c9b",tooltipLabel:"m-7f4bcb19",tooltipBody:"m-3de554dd",tooltipItem:"m-3de8964e",tooltipItemBody:"m-50186d10",tooltipItemName:"m-501dadf9",tooltipItemData:"m-50192318"};function u(e,t){let n=e.filter(e=>"none"!==e.fill||!e.color);return t?n.filter(e=>e.name===t):n}function m(e,t){return"radial"===t?e.value:e.payload[e.dataKey]}let f={type:"area"},x=(0,a.d)((e,t)=>{let n=(0,o.w)("ChartTooltip",f,e),{classNames:a,className:x,style:v,styles:j,unstyled:g,vars:y,payload:b,label:w,unit:k,type:E,segmentId:S,mod:C,series:T,valueFormatter:I,...A}=n,P=(0,i.rZ)(),L=(0,s.y)({name:"ChartTooltip",classes:h,props:n,className:x,style:v,classNames:a,styles:j,unstyled:g});if(!b)return null;let M=u(b,S),_=(0,p.v)(T),N=M.map(e=>r.createElement("div",{key:e.name,...L("tooltipItem")},r.createElement("div",{...L("tooltipItemBody")},r.createElement(l.b,{color:(0,c.p)(e.color,P),size:12,...L("tooltipItemColor"),withShadow:!1}),r.createElement("div",{...L("tooltipItemName")},_[e.name]||e.name)),r.createElement("div",{...L("tooltipItemData")},"function"==typeof I?I(m(e,E)):m(e,E),k)));return r.createElement(d.x,{...L("tooltip"),mod:[{type:E},C],ref:t,...A},w&&r.createElement("div",{...L("tooltipLabel")},w),r.createElement("div",{...L("tooltipBody")},N))});x.displayName="@mantine/charts/ChartTooltip"},88915:function(e,t,n){"use strict";n.d(t,{u:function(){return k}});var r=n(27378),a=n(14569),o=n(9911),i=n(32071),s=n(3509),l=n(44460),c=n(83453),d=n(89738),p=n(71078),h=n(20410),u=n(96739),m=n(2256),f=n(6231),x=n(5564),v=n(56589),j=n(96688),g={root:"m-cd8943fd",label:"m-e3441f39"};let y={withTooltip:!1,withLabelsLine:!0,paddingAngle:0,size:160,strokeWidth:1,startAngle:0,endAngle:360,tooltipDataSource:"all",labelsPosition:"outside",labelsType:"value"},b=(0,c.Z)((e,{strokeColor:t,labelColor:n,withLabels:r,size:a,labelsPosition:o})=>({root:{"--chart-stroke-color":t?(0,d.p)(t,e):void 0,"--chart-labels-color":n?(0,d.p)(n,e):void 0,"--chart-size":r&&"outside"===o?(0,p.h)(a+80):(0,p.h)(a)}})),w=e=>({cx:t,cy:n,midAngle:a,innerRadius:o,outerRadius:i,value:s,percent:l})=>{let c=Math.PI/180,d=o+(i-o)*.5,p=t+d*Math.cos(-a*c);return r.createElement("text",{x:p,y:n+d*Math.sin(-a*c),textAnchor:p>t?"start":"end",dominantBaseline:"central",className:g.label},"percent"===e?`${(100*l).toFixed(0)}%`:s)},k=(0,h.d)((e,t)=>{let n=(0,u.w)("PieChart",y,e),{classNames:c,className:p,style:h,styles:k,unstyled:E,vars:S,data:C,withTooltip:T,tooltipAnimationDuration:I,tooltipProps:A,pieProps:P,paddingAngle:L,withLabels:M,withLabelsLine:_,size:N,strokeWidth:O,startAngle:F,endAngle:D,tooltipDataSource:z,children:B,pieChartProps:R,labelsPosition:H,valueFormatter:G,labelsType:q,...Z}=n,K=(0,m.rZ)(),V=(0,f.y)({name:"PieChart",classes:g,props:n,className:p,style:h,classNames:c,styles:k,unstyled:E,vars:S,varsResolver:b}),{resolvedClassNames:W,resolvedStyles:U}=(0,x.h)({classNames:c,styles:k,props:n}),J=C.map((e,t)=>r.createElement(a.b,{key:t,fill:(0,d.p)(e.color,K),stroke:"var(--chart-stroke-color, var(--mantine-color-body))",strokeWidth:O}));return r.createElement(v.x,{ref:t,size:N,...V("root"),...Z},r.createElement(o.h,null,r.createElement(i.u,{...R},r.createElement(s.b,{data:C,innerRadius:0,outerRadius:N/2,dataKey:"value",isAnimationActive:!1,paddingAngle:L,startAngle:F,endAngle:D,label:!!M&&("inside"===H?w(q||"value"):"percent"===q?({percent:e,x:t,y:n,cx:a,cy:o})=>r.createElement("text",{x:t,y:n,cx:a,cy:o,textAnchor:t>a?"start":"end",dominantBaseline:"central",fill:"var(--chart-labels-color, var(--mantine-color-dimmed))",fontFamily:"var(--mantine-font-family)",fontSize:12},r.createElement("tspan",{x:t},`${(100*e).toFixed(0)}%`)):{fill:"var(--chart-labels-color, var(--mantine-color-dimmed))",fontSize:12,fontFamily:"var(--mantine-font-family)"}),labelLine:!!_&&"outside"===H&&{stroke:"var(--chart-label-color, var(--mantine-color-dimmed))",strokeWidth:1},...P},J),T&&r.createElement(l.u,{animationDuration:I,isAnimationActive:!1,content:({payload:e})=>r.createElement(j.h,{payload:C,classNames:W,styles:U,type:"radial",segmentId:"segment"===z?e?.[0]?.name:void 0,valueFormatter:G}),...A}),B)))});k.displayName="@mantine/charts/PieChart",k.classes=g},36590:function(e,t,n){"use strict";n.d(t,{H:function(){return y}});var r=n(27378),a=n(45249),o=n(9911),i=n(35487),s=n(39027),l=n(68676),c=n(12690),d=n(83453),p=n(89738),h=n(20410),u=n(96739),m=n(2256),f=n(6231),x=n(56589),v={root:"m-1f271cf7",container:"m-cf06f58c"};let j={withPolarGrid:!0,withPolarAngleAxis:!0,withPolarRadiusAxis:!1},g=(0,d.Z)((e,{gridColor:t,textColor:n})=>({root:{"--chart-grid-color":t?(0,p.p)(t,e):void 0,"--chart-text-color":n?(0,p.p)(n,e):void 0}})),y=(0,h.d)((e,t)=>{let n=(0,u.w)("RadarChart",j,e),{classNames:d,className:h,style:y,styles:b,unstyled:w,vars:k,data:E,series:S,dataKey:C,gridColor:T,textColor:I,radarProps:A,radarChartProps:P,polarGridProps:L,polarAngleAxisProps:M,polarRadiusAxisProps:_,withPolarGrid:N,withPolarAngleAxis:O,withPolarRadiusAxis:F,children:D,...z}=n,B=(0,m.rZ)(),R=(0,f.y)({name:"RadarChart",classes:v,props:n,className:h,style:y,classNames:d,styles:b,unstyled:w,vars:k,varsResolver:g}),H=S.map((e,t)=>r.createElement(a.F,{key:t,name:e.name,dataKey:e.name,stroke:(0,p.p)(e.strokeColor||e.color,B),fill:(0,p.p)(e.color,B),fillOpacity:e.opacity||.4,isAnimationActive:!1,..."function"==typeof A?A(e):A}));return r.createElement(x.x,{ref:t,...R("root"),...z},r.createElement(o.h,{...R("container")},r.createElement(i.H,{data:E,...P},N&&r.createElement(s.n,{stroke:"var(--chart-grid-color)",...L}),O&&r.createElement(l.I,{dataKey:C,...M}),F&&r.createElement(c.S,{stroke:"var(--chart-grid-color)",..._}),H,D)))});y.displayName="@mantine/charts/RadarChart",y.classes=v},28535:function(e,t,n){"use strict";n.d(t,{b:function(){return v}});var r=n(27378),a=n(9911),o=n(290),i=n(68871),s=n(83453),l=n(89738),c=n(20410),d=n(96739),p=n(6231),h=n(56589),u=n(65923);let m={},f={withGradient:!0,fillOpacity:.6,strokeWidth:2,curveType:"linear"},x=(0,s.Z)((e,{color:t,data:n,trendColors:r})=>({root:{"--chart-color":r?(0,l.p)(function(e,t){let n=e[0],r=e[e.length-1];return n<r?t.positive:n>r?t.negative:t.neutral||t.positive}(n,r),e):t?(0,l.p)(t,e):void 0}})),v=(0,c.d)((e,t)=>{let n=(0,d.w)("Sparkline",f,e),{classNames:s,className:l,style:c,styles:v,unstyled:j,vars:g,data:y,withGradient:b,fillOpacity:w,curveType:k,strokeWidth:E,trendColors:S,...C}=n,T=(0,p.y)({name:"Sparkline",classes:m,props:n,className:l,style:c,classNames:s,styles:v,unstyled:j,vars:g,varsResolver:x}),I=(0,r.useId)(),A=(0,r.useMemo)(()=>y.map((e,t)=>({value:e,index:t})),[y]);return r.createElement(h.x,{ref:t,...T("root"),...C,dir:"ltr"},r.createElement(a.h,null,r.createElement(o.T,{data:A},r.createElement(i.u,{dataKey:"value",type:k,fill:`url(#${I})`,stroke:"var(--chart-color, var(--mantine-color-blue-filled))",isAnimationActive:!1,connectNulls:!0,strokeWidth:E,fillOpacity:1}),r.createElement("defs",null,r.createElement(u.v,{id:I,color:"var(--chart-color, var(--mantine-color-blue-filled))",fillOpacity:w,withGradient:b})))))});v.displayName="@mantine/charts/Sparkline",v.classes=m},51010:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r={root:"m-a50f3e58",container:"m-af9188cb",grid:"m-a50a48bc",axis:"m-a507a517"}},3671:function(e,t,n){"use strict";function r(e){return e?e.reduce((e,t)=>(e[t.name]=t.label,e),{}):{}}n.d(t,{v:function(){return r}})},2570:function(e,t,n){"use strict";n.d(t,{P:function(){return x}});var r=n(27378),a=n(31002),o=n(58675),i=n(5564),s=n(96739),l=n(20410),c=n(2161),d=n(38099),p=n(45608),h=n(81097),u=n(54526),m=n(23163);let f={searchable:!1,withCheckIcon:!0,allowDeselect:!0,checkIconPosition:"left"},x=(0,l.d)((e,t)=>{let n=(0,s.w)("Select",f,e),{classNames:l,styles:x,unstyled:v,vars:j,dropdownOpened:g,defaultDropdownOpened:y,onDropdownClose:b,onDropdownOpen:w,onFocus:k,onBlur:E,onClick:S,onChange:C,data:T,value:I,defaultValue:A,selectFirstOptionOnChange:P,onOptionSubmit:L,comboboxProps:M,readOnly:_,disabled:N,filter:O,limit:F,withScrollArea:D,maxDropdownHeight:z,size:B,searchable:R,rightSection:H,checkIconPosition:G,withCheckIcon:q,nothingFoundMessage:Z,name:K,form:V,searchValue:W,defaultSearchValue:U,onSearchChange:J,allowDeselect:$,error:X,rightSectionPointerEvents:Y,id:Q,clearable:ee,clearButtonProps:et,hiddenInputProps:en,renderOption:er,onClear:ea,autoComplete:eo,...ei}=n,es=(0,r.useMemo)(()=>(0,c.R)(T),[T]),el=(0,r.useMemo)(()=>(0,d.g)(es),[es]),ec=(0,a.M)(Q),[ed,ep]=(0,o.C)({value:I,defaultValue:A,finalValue:null,onChange:C}),eh="string"==typeof ed?el[ed]:void 0,[eu,em]=(0,o.C)({value:W,defaultValue:U,finalValue:eh?eh.label:"",onChange:J}),ef=(0,u.K)({opened:g,defaultOpened:y,onDropdownOpen:()=>{w?.(),ef.updateSelectedOptionIndex("active",{scrollIntoView:!0})},onDropdownClose:()=>{b?.(),ef.resetSelectedOption()}}),{resolvedClassNames:ex,resolvedStyles:ev}=(0,i.h)({props:n,styles:x,classNames:l});(0,r.useEffect)(()=>{P&&ef.selectFirstOption()},[P,ed]),(0,r.useEffect)(()=>{null===I&&em(""),"string"==typeof I&&eh&&em(eh.label)},[I,eh]);let ej=ee&&!!ed&&!N&&!_&&r.createElement(p.h.ClearButton,{size:B,...et,onClear:()=>{ep(null,null),em(""),ea?.()}});return r.createElement(r.Fragment,null,r.createElement(p.h,{store:ef,__staticSelector:"Select",classNames:ex,styles:ev,unstyled:v,readOnly:_,onOptionSubmit:e=>{L?.(e);let t=$&&el[e].value===ed?null:el[e],n=t?t.value:null;ep(n,t),em("string"==typeof n&&t?.label||""),ef.closeDropdown()},size:B,...M},r.createElement(p.h.Target,{targetType:R?"input":"button",autoComplete:eo},r.createElement(m.M,{id:ec,ref:t,rightSection:H||ej||r.createElement(p.h.Chevron,{size:B,error:X,unstyled:v}),rightSectionPointerEvents:Y||(ej?"all":"none"),...ei,size:B,__staticSelector:"Select",disabled:N,readOnly:_||!R,value:eu,onChange:e=>{em(e.currentTarget.value),ef.openDropdown(),P&&ef.selectFirstOption()},onFocus:e=>{R&&ef.openDropdown(),k?.(e)},onBlur:e=>{R&&ef.closeDropdown(),em(null!=ed&&el[ed]?.label||""),E?.(e)},onClick:e=>{R?ef.openDropdown():ef.toggleDropdown(),S?.(e)},classNames:ex,styles:ev,unstyled:v,pointer:!R,error:X})),r.createElement(h.r,{data:es,hidden:_||N,filter:O,search:eu,limit:F,hiddenWhenEmpty:!R||!Z,withScrollArea:D,maxDropdownHeight:z,filterOptions:R&&eh?.label!==eu,value:ed,checkIconPosition:G,withCheckIcon:q,nothingFoundMessage:Z,unstyled:v,labelId:`${ec}-label`,renderOption:er})),r.createElement("input",{type:"hidden",name:K,value:ed||"",form:V,disabled:N,...en}))});x.classes={...m.M.classes,...p.h.classes},x.displayName="@mantine/core/Select"},87921:function(e,t,n){"use strict";n.d(t,{q:function(){return a}});var r=n(27378);function a(e=!1,t){let{onOpen:n,onClose:a}=t||{},[o,i]=(0,r.useState)(e),s=(0,r.useCallback)(()=>{i(e=>e||(n?.(),!0))},[n]),l=(0,r.useCallback)(()=>{i(e=>e?(a?.(),!1):e)},[a]),c=(0,r.useCallback)(()=>{o?l():s()},[l,s,o]);return[o,{open:s,close:l,toggle:c}]}}},function(e){e.O(0,[38345,93883,84101,30370,60898,84889,290,32071,62535,38934,34312,15819,2775,45608,98921,16161,49774,92888,40179],function(){return e(e.s=48132)}),_N_E=e.O()}]);