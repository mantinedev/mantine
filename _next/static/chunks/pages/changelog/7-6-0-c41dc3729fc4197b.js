(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9900],{65131:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-6-0",function(){return n(95975)}])},95975:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(52322),s=n(45392),i=n(25985),a=n(21988),o=n(35221),l=n(8672),c=n(66556),d=n(94091),h=n(19970),p=n(31336),u=n(88442),m=n(25071),x=n(15019);let f=(0,m.A)(x.us.Changelog760);function j(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"container-queries-support",children:"Container queries support"}),"\n",(0,r.jsxs)(t.p,{children:["You can now use ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries",children:"container queries"}),"\nwith Mantine components. ",(0,r.jsx)(t.code,{children:"rem"})," and ",(0,r.jsx)(t.code,{children:"em"})," functions from ",(0,r.jsx)(t.a,{href:"/styles/postcss-preset/#remem-functions",children:"postcss-preset-mantine"}),"\nare available in container queries staring from ",(0,r.jsx)(t.code,{children:"postcss-preset-mantine@1.13.0"}),"."]}),"\n",(0,r.jsx)(n,{data:i.c}),"\n",(0,r.jsx)(t.h2,{id:"radarchart-component",children:"RadarChart component"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/charts/radar-chart/",children:"RadarChart"})," component:"]}),"\n",(0,r.jsx)(n,{data:a.m}),"\n",(0,r.jsx)(t.h2,{id:"focustrapinitialfocus-component",children:"FocusTrap.InitialFocus component"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/core/focus-trap",children:"FocusTrap.InitialFocus"})," is a new component that adds a visually hidden\nelement which will receive the focus when the focus trap is activated.\nOnce ",(0,r.jsx)(t.code,{children:"FocusTrap.InitialFocus"})," loses focus, it is removed from the tab order."]}),"\n",(0,r.jsxs)(t.p,{children:["For example, it is useful if you do not want to focus any elements inside the ",(0,r.jsx)(t.a,{href:"/core/modal",children:"Modal"})," when it is opened:"]}),"\n",(0,r.jsx)(n,{data:o.g}),"\n",(0,r.jsx)(t.h2,{id:"new-mantineprovider-props",children:"New MantineProvider props"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/theming/mantine-provider",children:"MantineProvider"})," now includes more props to control how styles\nare generated and injected. These props are useful if you use Mantine as a headless library\nand in test environments."]}),"\n",(0,r.jsx)(t.h3,{id:"deduplicatecssvariables",children:"deduplicateCssVariables"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"deduplicateCssVariables"})," prop determines whether CSS variables should be deduplicated: if a CSS variable has the same value as in the default theme, it is not added in the runtime.\nBy default, it is set to ",(0,r.jsx)(t.code,{children:"true"}),". If set to ",(0,r.jsx)(t.code,{children:"false"}),", all Mantine CSS variables will be added in ",(0,r.jsx)(t.code,{children:"<style />"})," tag,\neven if they have the same value as in the default theme."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider deduplicateCssVariables={false}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"withstaticclasses",children:"withStaticClasses"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"withStaticClasses"})," determines whether components should have static classes, for example, ",(0,r.jsx)(t.code,{children:"mantine-Button-root"}),".\nBy default, static classes are enabled, to disable them set ",(0,r.jsx)(t.code,{children:"withStaticClasses"})," to ",(0,r.jsx)(t.code,{children:"false"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider withStaticClasses={false}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"withglobalclasses",children:"withGlobalClasses"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"withGlobalClasses"})," determines whether global classes should be added with ",(0,r.jsx)(t.code,{children:"<style />"})," tag.\nGlobal classes are required for ",(0,r.jsx)(t.code,{children:"hiddenFrom"}),"/",(0,r.jsx)(t.code,{children:"visibleFrom"})," and ",(0,r.jsx)(t.code,{children:"lightHidden"}),"/",(0,r.jsx)(t.code,{children:"darkHidden"})," props to work.\nBy default, global classes are enabled, to disable them set ",(0,r.jsx)(t.code,{children:"withGlobalClasses"})," to ",(0,r.jsx)(t.code,{children:"false"}),". Note that\ndisabling global classes may break styles of some components."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider withGlobalClasses={false}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"headlessmantineprovider",children:"HeadlessMantineProvider"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"HeadlessMantineProvider"})," is an alternative to ",(0,r.jsx)(t.a,{href:"/theming/mantine-provider",children:"MantineProvider"}),"\nthat should be used when you want to use Mantine as a headless UI library. It removes all\nfeatures that are related to Mantine styles:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Mantine classes are not applied to components"}),"\n",(0,r.jsxs)(t.li,{children:["Inline CSS variables are not added with ",(0,r.jsx)(t.code,{children:"style"})," attribute"]}),"\n",(0,r.jsx)(t.li,{children:"All color scheme related features are removed"}),"\n",(0,r.jsx)(t.li,{children:"Global styles are not generated"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Limitations of ",(0,r.jsx)(t.code,{children:"HeadlessMantineProvider"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/theming/color-schemes/",children:"Color scheme switching"})," will not work. If your application has a dark mode, you will need to implement it on your side."]}),"\n",(0,r.jsxs)(t.li,{children:["Props that are related to styles in all components (",(0,r.jsx)(t.code,{children:"color"}),", ",(0,r.jsx)(t.code,{children:"radius"}),", ",(0,r.jsx)(t.code,{children:"size"}),", etc.) will have no effect."]}),"\n",(0,r.jsxs)(t.li,{children:["Some components that rely on styles will become unusable (",(0,r.jsx)(t.a,{href:"/core/grid",children:"Grid"}),", ",(0,r.jsx)(t.a,{href:"/core/simple-grid",children:"SimpleGrid"}),", ",(0,r.jsx)(t.a,{href:"/core/container",children:"Container"}),", etc.)."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"lightHidden"}),"/",(0,r.jsx)(t.code,{children:"darkHidden"}),", ",(0,r.jsx)(t.code,{children:"visibleFrom"}),"/",(0,r.jsx)(t.code,{children:"hiddenFrom"})," props will not work."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/styles/style-props/",children:"Style props"})," will work only with explicit values, for example ",(0,r.jsx)(t.code,{children:'mt="xs"'})," will not work, but ",(0,r.jsx)(t.code,{children:"mt={5}"})," will."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["To use ",(0,r.jsx)(t.code,{children:"HeadlessMantineProvider"}),", follow the ",(0,r.jsx)(t.a,{href:"/getting-started/",children:"getting started guide"})," and replace ",(0,r.jsx)(t.code,{children:"MantineProvider"})," with ",(0,r.jsx)(t.code,{children:"HeadlessMantineProvider"}),".\nNote that you do not need to use ",(0,r.jsx)(t.a,{href:"/theming/color-schemes/#colorschemescript",children:"ColorSchemeScript"})," in your application, it will not have any effect,\nyou can ignore this part of the guide."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { HeadlessMantineProvider } from '@mantine/core';\n\nfunction App() {\n  return (\n    <HeadlessMantineProvider>\n      {/* Your application */}\n    </HeadlessMantineProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"sparkline-trendcolors",children:"Sparkline trendColors"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/charts/sparkline/",children:"Sparkline"})," now supports ",(0,r.jsx)(t.code,{children:"trendColors"})," prop to change chart color depending on the trend.\nThe prop accepts an object with ",(0,r.jsx)(t.code,{children:"positive"}),", ",(0,r.jsx)(t.code,{children:"negative"})," and ",(0,r.jsx)(t.code,{children:"neutral"})," properties:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"positive"})," - color for positive trend (first value is less than the last value in ",(0,r.jsx)(t.code,{children:"data"})," array)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"negative"})," - color for negative trend (first value is greater than the last value in ",(0,r.jsx)(t.code,{children:"data"})," array)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"neutral"})," - color for neutral trend (first and last values are equal)"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"neutral"})," is optional, if not provided, the color will be the same as ",(0,r.jsx)(t.code,{children:"positive"}),"."]}),"\n",(0,r.jsx)(n,{data:l.A}),"\n",(0,r.jsx)(t.h2,{id:"richtexteditor-tasks-extension",children:"RichTextEditor tasks extension"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/x/tiptap/#tasks",children:"RichTextEditor"})," now supports tasks ",(0,r.jsx)(t.a,{href:"https://tiptap.dev/docs/editor/api/nodes/task-list",children:"tiptap extension"}),":"]}),"\n",(0,r.jsx)(n,{data:c.w}),"\n",(0,r.jsx)(t.h2,{id:"renderoption-prop",children:"renderOption prop"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/core/select",children:"Select"}),", ",(0,r.jsx)(t.a,{href:"/core/multi-select",children:"MultiSelect"}),", ",(0,r.jsx)(t.a,{href:"/inputs/tags-input",children:"TagsInput"})," and ",(0,r.jsx)(t.a,{href:"/inputs/autocomplete",children:"Autocomplete"}),"\ncomponents now support ",(0,r.jsx)(t.code,{children:"renderOption"})," prop that allows to customize option rendering:"]}),"\n",(0,r.jsx)(n,{data:d.z}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n,{data:h.z}),"\n",(0,r.jsx)(t.h2,{id:"styles-improvements",children:"Styles improvements"}),"\n",(0,r.jsxs)(t.p,{children:["All Mantine components have been migrated to ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values",children:"logical CSS properties"}),"\n(as a replacement for rtl styles) and ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:where",children:":where"})," pseudo-class\n(as a replacement for ",(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/private-css-variables",children:"private CSS variables"}),"). These changes\nshould not impact the usage of Mantine components, but now Mantine CSS files have smaller size. For example,\n",(0,r.jsx)(t.code,{children:"@mantine/core/styles.css"})," now has ~ 8% smaller size (192kb -> 177kb)."]}),"\n",(0,r.jsx)(t.h2,{id:"pass-props-to-inner-recharts-components",children:"Pass props to inner recharts components"}),"\n",(0,r.jsxs)(t.p,{children:["You can now pass props down to recharts ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/Bar",children:"Bar"}),", ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/Area",children:"Area"})," and ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/Line",children:"Line"})," components\nwith ",(0,r.jsx)(t.code,{children:"barProps"}),", ",(0,r.jsx)(t.code,{children:"areaProps"})," and ",(0,r.jsx)(t.code,{children:"lineProps"})," props on ",(0,r.jsx)(t.a,{href:"/charts/bar-chart",children:"BarChart"}),", ",(0,r.jsx)(t.a,{href:"/charts/area-chart",children:"AreaChart"})," and ",(0,r.jsx)(t.a,{href:"/charts/line-chart",children:"LineChart"})," components."]}),"\n",(0,r.jsx)(t.p,{children:"All props accept either an object with props or a function that receives\nseries data as an argument and returns an object with props."}),"\n",(0,r.jsx)(n,{data:p.D}),"\n",(0,r.jsx)(t.h2,{id:"piechart-percent-labels",children:"PieChart percent labels"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/charts/pie-chart/",children:"PieChart"})," now supports ",(0,r.jsx)(t.code,{children:"percent"})," labels:"]}),"\n",(0,r.jsx)(n,{data:u.r}),"\n",(0,r.jsx)(t.h2,{id:"documentation-updates",children:"Documentation updates"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/styles/responsive",children:"Responsive styles guide"})," now includes new sections about responsive props and container queries"]}),"\n",(0,r.jsxs)(t.li,{children:["New ",(0,r.jsx)(t.a,{href:"/styles/unstyled/#headlessmantineprovider",children:"HeadlessMantineProvider section"})," in the unstyled guide"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/action-icon/",children:"ActionIcon"})," now includes additional documentation section on how to make the button the same size as Mantine inputs"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/charts/area-chart",children:"AreaChart"})," now includes an example of how to rotate x-axis labels"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/guides/redwood/",children:"Redwood guide"})," has been updated to the latest redwood version with Vite"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"help-center-updates",children:"Help center updates"}),"\n",(0,r.jsxs)(t.p,{children:["New articles added to the ",(0,r.jsx)(t.a,{href:"https://help.mantine.dev",children:"help center"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/browser-zooms-on-focus",children:"Browser zooms in when input is focused. What should I do?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/pinch-to-zoom-modal",children:"It is not possible to pinch to zoom when Modal is opened. What should I do?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/how-to-lock-scroll",children:"How can I lock scroll in my application?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/roadmap",children:"Where can I find the roadmap?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/tabs-border-color",children:"How can I change Tabs border color?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/input-focus-styles",children:"How can I change inputs focus styles?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/third-party-styles",children:"Can I use Mantine with Emotion/styled-components/tailwindcss?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/input-mask",children:"Is there a way to add mask to Mantine input?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/align-input-button",children:"How to align input with a button in a flex container?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/color-scheme-color",children:"How can I change component color prop value depending on the color scheme?"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/hooks/use-list-state/",children:"use-list-state"})," hook now supports ",(0,r.jsx)(t.code,{children:"swap"})," handler"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"form.setFieldValue"})," now supports callback function as an argument"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"px"}),", ",(0,r.jsx)(t.code,{children:"py"}),", ",(0,r.jsx)(t.code,{children:"mx"})," and ",(0,r.jsx)(t.code,{children:"my"})," ",(0,r.jsx)(t.a,{href:"/styles/style-props/",children:"style props"})," now use logical CSS properties ",(0,r.jsx)(t.code,{children:"padding-inline"}),", ",(0,r.jsx)(t.code,{children:"padding-block"}),", ",(0,r.jsx)(t.code,{children:"margin-inline"})," and ",(0,r.jsx)(t.code,{children:"margin-block"})," instead of ",(0,r.jsx)(t.code,{children:"padding-left"}),", ",(0,r.jsx)(t.code,{children:"padding-right"}),", etc."]}),"\n",(0,r.jsxs)(t.li,{children:["All components now support ",(0,r.jsx)(t.code,{children:"me"}),", ",(0,r.jsx)(t.code,{children:"ms"}),", ",(0,r.jsx)(t.code,{children:"ps"}),", ",(0,r.jsx)(t.code,{children:"pe"})," ",(0,r.jsx)(t.a,{href:"/styles/style-props/",children:"style props"})," to set ",(0,r.jsx)(t.code,{children:"margin-inline-end"}),", ",(0,r.jsx)(t.code,{children:"margin-inline-start"}),", ",(0,r.jsx)(t.code,{children:"padding-inline-start"})," and ",(0,r.jsx)(t.code,{children:"padding-inline-end"})," CSS properties"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/tooltip",children:"Tooltip"}),", ",(0,r.jsx)(t.a,{href:"/core/popover",children:"Popover"})," and other components based on ",(0,r.jsx)(t.code,{children:"Popover"})," now support ",(0,r.jsx)(t.code,{children:"floatingStrategy"})," prop to control ",(0,r.jsx)(t.a,{href:"https://floating-ui.com/docs/usefloating#strategy",children:"Floating UI strategy"})]}),"\n",(0,r.jsxs)(t.li,{children:["All ",(0,r.jsx)(t.code,{children:"@mantine/charts"})," components now support ",(0,r.jsx)(t.code,{children:"children"})," prop, which passes children to the root recharts component"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/hooks/use-resize-observer/",children:"use-resize-observer"})," and ",(0,r.jsx)(t.a,{href:"/hooks/use-element-size/",children:"use-element-size"})," hooks now support ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/observe#parameters",children:"ResizeObserver options"})," as hook argument"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/select",children:"Select"}),", ",(0,r.jsx)(t.a,{href:"/core/multi-select",children:"MultiSelect"})," and ",(0,r.jsx)(t.a,{href:"/inputs/tags-input",children:"TagsInput"})," now support ",(0,r.jsx)(t.code,{children:"onClear"})," prop, the function is called when clear button is clicked"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/multi-select",children:"MultiSelect"})," and ",(0,r.jsx)(t.a,{href:"/inputs/tags-input",children:"TagsInput"})," now support ",(0,r.jsx)(t.code,{children:"onRemove"})," prop, the function is called with removed item value when one of the items is deselected"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/mantinedev/redwood-template",children:"Redwood template"})," has been updated to the latest redwood version with Vite"]}),"\n"]})]})}function v(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(f,{...e,children:(0,r.jsx)(j,{...e})})}},31336:function(e,t,n){"use strict";n.d(t,{D:function(){return a}});var r=n(52322),s=n(8132),i=n(9404);let a={type:"code",component:function(){return(0,r.jsx)(s.v,{h:200,data:i.aT,dataKey:"month",orientation:"vertical",yAxisProps:{width:80},barProps:{radius:10},series:[{name:"Smartphones",color:"blue.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:i.op,language:"tsx",fileName:"data.ts"}]}},88442:function(e,t,n){"use strict";n.d(t,{r:function(){return a}});var r=n(52322),s=n(38840),i=n(10301);let a={type:"configurator",component:function(e){return(0,r.jsx)(s.u,{...e,withLabels:!0,data:i.a,miw:300})},code:[{fileName:"Demo.tsx",code:`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart{{props}} withLabels data={data} />;
}
`,language:"tsx"},{fileName:"data.ts",code:i.o,language:"tsx"}],centered:!0,controls:[{type:"boolean",prop:"withLabelsLine",initialValue:!0,libraryValue:"__"},{type:"segmented",prop:"labelsPosition",initialValue:"outside",libraryValue:"__",data:["inside","outside"]},{type:"segmented",prop:"labelsType",initialValue:"value",libraryValue:"__",data:["value","percent"]}]}},10301:function(e,t,n){"use strict";n.d(t,{a:function(){return r},o:function(){return s}});let r=[{name:"USA",value:400,color:"indigo.6"},{name:"India",value:300,color:"yellow.6"},{name:"Japan",value:300,color:"teal.6"},{name:"Other",value:200,color:"gray.6"}],s=`
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 300, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
`},21988:function(e,t,n){"use strict";n.d(t,{m:function(){return a}});var r=n(52322),s=n(22309),i=n(47550);let a={type:"code",component:function(){return(0,r.jsx)(s.H,{h:300,data:i.qH,dataKey:"product",withPolarRadiusAxis:!0,series:[{name:"Sales January",color:"lime.4",opacity:.1},{name:"Sales February",color:"cyan.4",opacity:.1}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:i.gv,language:"tsx",fileName:"data.ts"}]}},47550:function(e,t,n){"use strict";n.d(t,{aT:function(){return r},gv:function(){return a},op:function(){return s},qH:function(){return i}});let r=[{product:"Apples",sales:120},{product:"Oranges",sales:98},{product:"Tomatoes",sales:86},{product:"Grapes",sales:99},{product:"Bananas",sales:85},{product:"Lemons",sales:65}],s=`
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
`,i=[{product:"Apples","Sales January":120,"Sales February":100},{product:"Oranges","Sales January":98,"Sales February":90},{product:"Tomatoes","Sales January":86,"Sales February":70},{product:"Grapes","Sales January":99,"Sales February":80},{product:"Bananas","Sales January":85,"Sales February":120},{product:"Lemons","Sales January":65,"Sales February":150}],a=`
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
];`},8672:function(e,t,n){"use strict";n.d(t,{A:function(){return d}});var r=n(52322),s=n(77533),i=n(65438),a=n(8582);let o=[10,20,40,20,40,10,50],l=[50,40,20,40,20,40,10],c=[10,20,40,20,40,10,50,5,10],d={type:"code",component:function(){return(0,r.jsxs)(i.K,{gap:"sm",children:[(0,r.jsx)(a.x,{children:"Positive trend:"}),(0,r.jsx)(s.b,{w:200,h:60,data:o,trendColors:{positive:"teal.6",negative:"red.6",neutral:"gray.5"},fillOpacity:.2}),(0,r.jsx)(a.x,{mt:"md",children:"Negative trend:"}),(0,r.jsx)(s.b,{w:200,h:60,data:l,trendColors:{positive:"teal.6",negative:"red.6",neutral:"gray.5"},fillOpacity:.2}),(0,r.jsx)(a.x,{mt:"md",children:"Neutral trend:"}),(0,r.jsx)(s.b,{w:200,h:60,data:c,trendColors:{positive:"teal.6",negative:"red.6",neutral:"gray.5"},fillOpacity:.2})]})},code:`
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
`,centered:!0}},35221:function(e,t,n){"use strict";n.d(t,{g:function(){return c}});var r=n(52322),s=n(31946),i=n(10266),a=n(74770),o=n(17115),l=n(3900);let c={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,l.q)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.u,{opened:e,onClose:n,title:"Focus demo",children:[(0,r.jsx)(i.i.InitialFocus,{}),(0,r.jsx)(a.o,{label:"First input",placeholder:"First input"}),(0,r.jsx)(a.o,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})]}),(0,r.jsx)(o.z,{onClick:t,children:"Open modal"})]})}}},94091:function(e,t,n){"use strict";n.d(t,{z:function(){return x}});var r=n(52322),s=n(98783),i=n(73007),a=n(13924),o=n(20793),l=n(9705),c=n(93010),d=n(79649);let h=`
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
`,p={stroke:1.5,color:"currentColor",opacity:.6,size:18},u={left:(0,r.jsx)(s.Z,{...p}),center:(0,r.jsx)(i.Z,{...p}),right:(0,r.jsx)(a.Z,{...p}),justify:(0,r.jsx)(o.Z,{...p})},m=({option:e,checked:t})=>(0,r.jsxs)(c.Z,{flex:"1",gap:"xs",children:[u[e.value],e.label,t&&(0,r.jsx)(l.Z,{style:{marginInlineStart:"auto"},...p})]}),x={type:"code",component:function(){return(0,r.jsx)(d.P,{label:"Select with renderOption",placeholder:"Select text align",data:[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"},{value:"justify",label:"Justify"}],renderOption:m})},code:h,centered:!0,maxWidth:340,defaultExpanded:!1}},19970:function(e,t,n){"use strict";n.d(t,{z:function(){return c}});var r=n(52322),s=n(93010),i=n(8582),a=n(77413);let o={Apples:{emoji:"\uD83C\uDF4E",description:"Crisp and juicy snacking delight"},Bread:{emoji:"\uD83C\uDF5E",description:"Freshly baked daily essential"},Bananas:{emoji:"\uD83C\uDF4C",description:"Perfect for a healthy breakfast"},Eggs:{emoji:"\uD83E\uDD5A",description:"Versatile protein source for cooking"},Broccoli:{emoji:"\uD83E\uDD66",description:"Nutrient-rich green vegetable"}},l=({option:e})=>(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(i.x,{span:!0,fz:24,children:o[e.value].emoji}),(0,r.jsxs)("div",{children:[(0,r.jsx)(i.x,{children:e.value}),(0,r.jsx)(i.x,{size:"xs",opacity:.5,children:o[e.value].description})]})]}),c={type:"code",component:function(){return(0,r.jsx)(a.B,{data:["Apples","Bread","Bananas","Eggs","Broccoli"],renderOption:l,label:"Groceries",placeholder:"Pick tag from list or type to add new",maxDropdownHeight:300})},code:`
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
`,centered:!0,maxWidth:340,defaultExpanded:!1}},25985:function(e,t,n){"use strict";n.d(t,{c:function(){return s}});var r=n(52322);let s={type:"code",component:function(){return(0,r.jsx)("div",{className:"m_cd12fd1e",children:(0,r.jsx)("div",{className:"m_d4760060",children:"Resize parent element to see container query in action"})})},code:[{code:`.root {
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
`,language:"tsx",fileName:"Demo.tsx"}]}},66556:function(e,t,n){"use strict";n.d(t,{w:function(){return h}});var r=n(52322),s=n(25396),i=n(18429),a=n(13635),o=n(31981),l=n(14852);let c=e=>e.extend({addKeyboardShortcuts:()=>({"Mod-[":({editor:e})=>(e.chain().focus().liftListItem("taskItem").run(),!0),"Mod-]":({editor:e})=>(e.chain().focus().sinkListItem("taskItem").run(),!0)})}).configure({HTMLAttributes:{class:`${l.Z.taskList} mantine-RichTextEditor-taskList`}});var d=n(76124);let h={type:"code",component:function(){let e=(0,a.jE)({extensions:[o.Z,c(i.Z),s.ZP.configure({nested:!0,HTMLAttributes:{class:"test-item"}})],content:`
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
`}},32125:function(e,t,n){"use strict";n.d(t,{v:function(){return s}});var r=n(52322);function s({color:e,id:t,withGradient:n,fillOpacity:s}){return(0,r.jsx)(r.Fragment,{children:n?(0,r.jsxs)("linearGradient",{id:t,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,r.jsx)("stop",{offset:"0%",stopColor:e,stopOpacity:s}),(0,r.jsx)("stop",{offset:"100%",stopColor:e,stopOpacity:.01})]}):(0,r.jsx)("linearGradient",{id:t,x1:"0",y1:"0",x2:"0",y2:"1",children:(0,r.jsx)("stop",{stopColor:e,stopOpacity:s??.2})})})}s.displayName="@mantine/charts/AreaGradient"},38840:function(e,t,n){"use strict";n.d(t,{u:function(){return C}});var r=n(52322),s=n(11011),i=n(18205),a=n(43454),o=n(79941),l=n(21154),c=n(11200),d=n(13588),h=n(58898),p=n(82027),u=n(38483),m=n(68755),x=n(46690),f=n(51477),j=n(28559),v=n(50425),g={root:"m_cd8943fd"};let y={withTooltip:!1,withLabelsLine:!0,paddingAngle:0,size:160,strokeWidth:1,startAngle:0,endAngle:360,tooltipDataSource:"all",labelsPosition:"outside",labelsType:"value"},b=(0,c.Z)((e,{strokeColor:t,labelColor:n,withLabels:r,size:s,labelsPosition:i})=>({root:{"--chart-stroke-color":t?(0,d.p)(t,e):void 0,"--chart-labels-color":n?(0,d.p)(n,e):void 0,"--chart-size":r&&"outside"===i?(0,h.h)(s+80):(0,h.h)(s)}})),w=(e,t,n,r)=>"percent"===e?`${(100*n).toFixed(0)}%`:"function"==typeof r?r(t):t,S=(e,t)=>({cx:n,cy:s,midAngle:i,innerRadius:a,outerRadius:o,value:l,percent:c})=>{let d=Math.PI/180,h=a+(o-a)*.5,p=n+h*Math.cos(-i*d);return(0,r.jsx)("text",{x:p,y:s+h*Math.sin(-i*d),textAnchor:p>n?"start":"end",dominantBaseline:"central",className:g.label,children:w(e,l,c,t)})},k=(e,t)=>({x:n,y:s,cx:i,cy:a,percent:o,value:l})=>(0,r.jsx)("text",{x:n,y:s,cx:i,cy:a,textAnchor:n>i?"start":"end",fill:"var(--chart-labels-color, var(--mantine-color-dimmed))",fontFamily:"var(--mantine-font-family)",fontSize:12,children:(0,r.jsx)("tspan",{x:n,children:w(e,l,o,t)})}),C=(0,p.d5)((e,t)=>{let n=(0,u.w)("PieChart",y,e),{classNames:c,className:h,style:p,styles:w,unstyled:C,vars:T,data:I,withTooltip:P,tooltipAnimationDuration:A,tooltipProps:M,pieProps:F,paddingAngle:O,withLabels:L,withLabelsLine:N,size:R,strokeWidth:D,startAngle:E,endAngle:z,tooltipDataSource:B,children:_,pieChartProps:H,labelsPosition:G,valueFormatter:q,labelsType:J,strokeColor:V,...Z}=n,W=(0,m.rZ)(),K=(0,x.y)({name:"PieChart",classes:g,props:n,className:h,style:p,classNames:c,styles:w,unstyled:C,vars:T,varsResolver:b}),{resolvedClassNames:U,resolvedStyles:Y}=(0,f.h)({classNames:c,styles:w,props:n}),$=I.map((e,t)=>(0,r.jsx)(s.b,{fill:(0,d.p)(e.color,W),stroke:"var(--chart-stroke-color, var(--mantine-color-body))",strokeWidth:D},t));return(0,r.jsx)(j.x,{ref:t,size:R,...K("root"),...Z,children:(0,r.jsx)(i.h,{children:(0,r.jsxs)(a.u,{...H,children:[(0,r.jsx)(o.b,{data:I,innerRadius:0,outerRadius:R/2,dataKey:"value",isAnimationActive:!1,paddingAngle:O,startAngle:E,endAngle:z,label:!!L&&("inside"===G?S(J||"value",q):k(J||"value",q)),labelLine:!!N&&"outside"===G&&{stroke:"var(--chart-label-color, var(--mantine-color-dimmed))",strokeWidth:1},...F,children:$}),P&&(0,r.jsx)(l.u,{animationDuration:A,isAnimationActive:!1,content:({payload:e})=>(0,r.jsx)(v.h,{payload:I,classNames:U,styles:Y,type:"radial",segmentId:"segment"===B?e?.[0]?.name:void 0,valueFormatter:q}),...M}),_]})})})});C.displayName="@mantine/charts/PieChart",C.classes=g},22309:function(e,t,n){"use strict";n.d(t,{H:function(){return k}});var r=n(52322),s=n(2784),i=n(53891),a=n(18205),o=n(62411),l=n(25076),c=n(79669),d=n(10086),h=n(55734),p=n(11200),u=n(13588),m=n(82027),x=n(38483),f=n(68755),j=n(46690),v=n(51477),g=n(28559),y=n(46293),b={root:"m_1f271cf7",container:"m_cf06f58c"};let w={withPolarGrid:!0,withPolarAngleAxis:!0,withPolarRadiusAxis:!1},S=(0,p.Z)((e,{gridColor:t,textColor:n})=>({root:{"--chart-grid-color":t?(0,u.p)(t,e):void 0,"--chart-text-color":n?(0,u.p)(n,e):void 0}})),k=(0,m.d5)((e,t)=>{let n=(0,x.w)("RadarChart",w,e),{classNames:p,className:m,style:k,styles:C,unstyled:T,vars:I,data:P,series:A,dataKey:M,gridColor:F,textColor:O,radarProps:L,radarChartProps:N,polarGridProps:R,polarAngleAxisProps:D,polarRadiusAxisProps:E,withPolarGrid:z,withPolarAngleAxis:B,withPolarRadiusAxis:_,children:H,withLegend:G,legendProps:q,...J}=n,V=(0,f.rZ)(),Z=(0,j.y)({name:"RadarChart",classes:b,props:n,className:m,style:k,classNames:p,styles:C,unstyled:T,vars:I,varsResolver:S}),[W,K]=(0,s.useState)(null),{resolvedClassNames:U,resolvedStyles:Y}=(0,v.h)({classNames:p,styles:C,props:n}),$=A.map((e,t)=>(0,r.jsx)(i.F,{name:e.name,dataKey:e.name,stroke:(0,u.p)(e.strokeColor||e.color,V),fill:(0,u.p)(e.color,V),fillOpacity:W?W===e.name?e.opacity||.4:.05:e.opacity||.4,strokeOpacity:W?W===e.name?1:.1:1,isAnimationActive:!1,..."function"==typeof L?L(e):L},t));return(0,r.jsx)(g.x,{ref:t,...Z("root"),...J,children:(0,r.jsx)(a.h,{...Z("container"),children:(0,r.jsxs)(o.H,{data:P,...N,children:[z&&(0,r.jsx)(l.n,{stroke:"var(--chart-grid-color)",...R}),B&&(0,r.jsx)(c.I,{dataKey:M,...D}),_&&(0,r.jsx)(d.S,{stroke:"var(--chart-grid-color)",...E}),$,G&&(0,r.jsx)(h.D,{verticalAlign:"bottom",content:e=>(0,r.jsx)(y.Q,{payload:e.payload,onHighlight:K,legendPosition:q?.verticalAlign||"bottom",classNames:U,styles:Y,series:A,centered:!0}),...q}),H]})})})});k.displayName="@mantine/charts/RadarChart",k.classes=b},77533:function(e,t,n){"use strict";n.d(t,{b:function(){return v}});var r=n(52322),s=n(2784),i=n(18205),a=n(50603),o=n(81073),l=n(11200),c=n(13588),d=n(82027),h=n(38483),p=n(46690),u=n(28559),m=n(32125);let x={},f={withGradient:!0,connectNulls:!0,fillOpacity:.6,strokeWidth:2,curveType:"linear"},j=(0,l.Z)((e,{color:t,data:n,trendColors:r})=>({root:{"--chart-color":r?(0,c.p)(function(e,t){let n=e[0],r=e[e.length-1];return null===n||null===r?t.neutral||t.positive:n<r?t.positive:n>r?t.negative:t.neutral||t.positive}(n,r),e):t?(0,c.p)(t,e):void 0}})),v=(0,d.d5)((e,t)=>{let n=(0,h.w)("Sparkline",f,e),{classNames:l,className:c,style:d,styles:v,unstyled:g,vars:y,data:b,withGradient:w,fillOpacity:S,curveType:k,strokeWidth:C,trendColors:T,connectNulls:I,areaProps:P,...A}=n,M=(0,p.y)({name:"Sparkline",classes:x,props:n,className:c,style:d,classNames:l,styles:v,unstyled:g,vars:y,varsResolver:j}),F=(0,s.useId)(),O=(0,s.useMemo)(()=>b.map((e,t)=>({value:e,index:t})),[b]);return(0,r.jsx)(u.x,{ref:t,...M("root"),...A,dir:"ltr",children:(0,r.jsx)(i.h,{children:(0,r.jsxs)(a.T,{data:O,children:[(0,r.jsx)(o.u,{dataKey:"value",type:k,fill:`url(#${F})`,stroke:"var(--chart-color, var(--mantine-color-blue-filled))",isAnimationActive:!1,connectNulls:I,strokeWidth:C,fillOpacity:1,...P}),(0,r.jsx)("defs",{children:(0,r.jsx)(m.v,{id:F,color:"var(--chart-color, var(--mantine-color-blue-filled))",fillOpacity:S,withGradient:w})})]})})})});v.displayName="@mantine/charts/Sparkline",v.classes=x},79649:function(e,t,n){"use strict";n.d(t,{P:function(){return v}});var r=n(52322),s=n(2784),i=n(66178),a=n(9341),o=n(85057),l=n(51477),c=n(38483),d=n(82027),h=n(29995),p=n(77606),u=n(61324),m=n(66958),x=n(56237),f=n(73063);let j={searchable:!1,withCheckIcon:!0,allowDeselect:!0,checkIconPosition:"left"},v=(0,d.d5)((e,t)=>{let n=(0,c.w)("Select",j,e),{classNames:d,styles:v,unstyled:g,vars:y,dropdownOpened:b,defaultDropdownOpened:w,onDropdownClose:S,onDropdownOpen:k,onFocus:C,onBlur:T,onClick:I,onChange:P,data:A,value:M,defaultValue:F,selectFirstOptionOnChange:O,onOptionSubmit:L,comboboxProps:N,readOnly:R,disabled:D,filter:E,limit:z,withScrollArea:B,maxDropdownHeight:_,size:H,searchable:G,rightSection:q,checkIconPosition:J,withCheckIcon:V,nothingFoundMessage:Z,name:W,form:K,searchValue:U,defaultSearchValue:Y,onSearchChange:$,allowDeselect:X,error:Q,rightSectionPointerEvents:ee,id:et,clearable:en,clearButtonProps:er,hiddenInputProps:es,renderOption:ei,onClear:ea,autoComplete:eo,scrollAreaProps:el,...ec}=n,ed=(0,s.useMemo)(()=>(0,h.R)(A),[A]),eh=(0,s.useMemo)(()=>(0,p.g)(ed),[ed]),ep=(0,i.M)(et),[eu,em,ex]=(0,a.C)({value:M,defaultValue:F,finalValue:null,onChange:P}),ef="string"==typeof eu?eh[eu]:void 0,ej=(0,o.D)(ef),[ev,eg]=(0,a.C)({value:U,defaultValue:Y,finalValue:ef?ef.label:"",onChange:$}),ey=(0,x.K)({opened:b,defaultOpened:w,onDropdownOpen:()=>{k?.(),ey.updateSelectedOptionIndex("active",{scrollIntoView:!0})},onDropdownClose:()=>{S?.(),ey.resetSelectedOption()}}),{resolvedClassNames:eb,resolvedStyles:ew}=(0,l.h)({props:n,styles:v,classNames:d});(0,s.useEffect)(()=>{O&&ey.selectFirstOption()},[O,eu]),(0,s.useEffect)(()=>{null===M&&eg(""),"string"==typeof M&&ef&&(ej?.value!==ef.value||ej?.label!==ef.label)&&eg(ef.label)},[M,ef]);let eS=en&&!!eu&&!D&&!R&&(0,r.jsx)(u.h.ClearButton,{size:H,...er,onClear:()=>{em(null,null),eg(""),ea?.()}});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(u.h,{store:ey,__staticSelector:"Select",classNames:eb,styles:ew,unstyled:g,readOnly:R,onOptionSubmit:e=>{L?.(e);let t=X&&eh[e].value===eu?null:eh[e],n=t?t.value:null;n!==eu&&em(n,t),ex||eg("string"==typeof n&&t?.label||""),ey.closeDropdown()},size:H,...N,children:[(0,r.jsx)(u.h.Target,{targetType:G?"input":"button",autoComplete:eo,children:(0,r.jsx)(f.M,{id:ep,ref:t,rightSection:q||eS||(0,r.jsx)(u.h.Chevron,{size:H,error:Q,unstyled:g}),rightSectionPointerEvents:ee||(eS?"all":"none"),...ec,size:H,__staticSelector:"Select",disabled:D,readOnly:R||!G,value:ev,onChange:e=>{eg(e.currentTarget.value),ey.openDropdown(),O&&ey.selectFirstOption()},onFocus:e=>{G&&ey.openDropdown(),C?.(e)},onBlur:e=>{G&&ey.closeDropdown(),eg(null!=eu&&eh[eu]?.label||""),T?.(e)},onClick:e=>{G?ey.openDropdown():ey.toggleDropdown(),I?.(e)},classNames:eb,styles:ew,unstyled:g,pointer:!G,error:Q})}),(0,r.jsx)(m.r,{data:ed,hidden:R||D,filter:E,search:ev,limit:z,hiddenWhenEmpty:!Z,withScrollArea:B,maxDropdownHeight:_,filterOptions:G&&ef?.label!==ev,value:eu,checkIconPosition:J,withCheckIcon:V,nothingFoundMessage:Z,unstyled:g,labelId:ec.label?`${ep}-label`:void 0,"aria-label":ec.label?void 0:ec["aria-label"],renderOption:ei,scrollAreaProps:el})]}),(0,r.jsx)(u.h.HiddenInput,{value:eu,name:W,form:K,disabled:D,...es})]})});v.classes={...f.M.classes,...u.h.classes},v.displayName="@mantine/core/Select"},3900:function(e,t,n){"use strict";n.d(t,{q:function(){return s}});var r=n(2784);function s(e=!1,t){let{onOpen:n,onClose:s}=t||{},[i,a]=(0,r.useState)(e),o=(0,r.useCallback)(()=>{a(e=>e||(n?.(),!0))},[n]),l=(0,r.useCallback)(()=>{a(e=>e?(s?.(),!1):e)},[s]),c=(0,r.useCallback)(()=>{i?l():o()},[l,o,i]);return[i,{open:o,close:l,toggle:c}]}},85057:function(e,t,n){"use strict";n.d(t,{D:function(){return s}});var r=n(2784);function s(e){let t=(0,r.useRef)();return(0,r.useEffect)(()=>{t.current=e},[e]),t.current}}},function(e){e.O(0,[53224,72812,75417,61177,5248,90160,59966,81073,43454,95607,37355,65712,66748,11340,61324,40296,77413,76124,92888,49774,40179],function(){return e(e.s=65131)}),_N_E=e.O()}]);