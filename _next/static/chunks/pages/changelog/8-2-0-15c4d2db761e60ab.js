(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[74785],{21754:(e,t,o)=>{"use strict";o.d(t,{z:()=>d});var n=o(6029),r=o(55729),i=o(19577),s=o(4349),a=o(50806);let l=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}],d={type:"code",component:function(){let[e,t]=function(e){let[t,o]=(0,r.useState)(new Set(e.defaultSelection||[]));(0,a.C)(()=>{e.resetSelectionOnDataChange&&o(new Set)},[e.data,e.resetSelectionOnDataChange]);let n=(0,r.useCallback)(e=>{o(t=>{if(!t.has(e)){let o=new Set(t);return o.add(e),o}return t})},[]),i=(0,r.useCallback)(e=>{o(t=>{if(t.has(e)){let o=new Set(t);return o.delete(e),o}return t})},[]),s=(0,r.useCallback)(e=>{o(t=>{let o=new Set(t);return t.has(e)?o.delete(e):o.add(e),o})},[]),l=(0,r.useCallback)(()=>{o(new Set)},[]),d=(0,r.useCallback)(e=>{o(new Set(e))},[]),c=(0,r.useCallback)(()=>0!==e.data.length&&e.data.every(e=>t.has(e)),[t,e.data]),h=(0,r.useCallback)(()=>e.data.some(e=>t.has(e)),[t,e.data]);return[Array.from(t),{select:n,deselect:i,toggle:s,isAllSelected:c,isSomeSelected:h,setSelection:d,resetSelection:l}]}({data:(0,r.useMemo)(()=>l.map(e=>e.position),[l]),defaultSelection:[39,56]}),o=l.map(o=>{let r=e.includes(o.position);return(0,n.jsxs)(i.X.Tr,{bg:r?"var(--mantine-color-blue-light)":void 0,children:[(0,n.jsx)(i.X.Td,{children:(0,n.jsx)(s.S,{"aria-label":"Select row",checked:r,onChange:e=>{e.target.checked?t.select(o.position):t.deselect(o.position)}})}),(0,n.jsx)(i.X.Td,{children:o.position}),(0,n.jsx)(i.X.Td,{children:o.name}),(0,n.jsx)(i.X.Td,{children:o.symbol}),(0,n.jsx)(i.X.Td,{children:o.mass})]},o.name)});return(0,n.jsxs)(i.X,{children:[(0,n.jsx)(i.X.Thead,{children:(0,n.jsxs)(i.X.Tr,{children:[(0,n.jsx)(i.X.Th,{children:(0,n.jsx)(s.S,{"aria-label":"Select deselect all rows",indeterminate:t.isSomeSelected(),checked:t.isAllSelected(),onChange:()=>{t.isAllSelected()?t.resetSelection():t.setSelection(l.map(e=>e.position))}})}),(0,n.jsx)(i.X.Th,{children:"Element position"}),(0,n.jsx)(i.X.Th,{children:"Element name"}),(0,n.jsx)(i.X.Th,{children:"Symbol"}),(0,n.jsx)(i.X.Th,{children:"Atomic mass"})]})}),(0,n.jsx)(i.X.Tbody,{children:o})]})},code:`
import { Checkbox, Table } from '@mantine/core';
import { useSelection } from '@mantine/hooks';

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

function Demo() {
  const positions = useMemo(() => elements.map((element) => element.position), [elements]);

  const [selection, handlers] = useSelection({
    data: positions,
    defaultSelection: [39, 56],
  });

  const rows = elements.map((element) => {
    const isSelected = selection.includes(element.position);
    return (
      <Table.Tr key={element.name} bg={isSelected ? 'var(--mantine-color-blue-light)' : undefined}>
        <Table.Td>
          <Checkbox
            aria-label="Select row"
            checked={isSelected}
            onChange={(event) => {
              if (event.target.checked) {
                handlers.select(element.position);
              } else {
                handlers.deselect(element.position);
              }
            }}
          />
        </Table.Td>
        <Table.Td>{element.position}</Table.Td>
        <Table.Td>{element.name}</Table.Td>
        <Table.Td>{element.symbol}</Table.Td>
        <Table.Td>{element.mass}</Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>
            <Checkbox
              aria-label="Select deselect all rows"
              indeterminate={handlers.isSomeSelected()}
              checked={handlers.isAllSelected()}
              onChange={() => {
                if (handlers.isAllSelected()) {
                  handlers.resetSelection();
                } else {
                  handlers.setSelection(elements.map((el) => el.position));
                }
              }}
            />
          </Table.Th>
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
`}},27294:(e,t,o)=>{"use strict";o.d(t,{O:()=>l});var n=o(6029),r=o(56814),i=o(57414),s=o(61087),a=o(45208);let l={type:"code",component:function(){return(0,n.jsx)(r.j.Group,{openDelay:500,closeDelay:100,children:(0,n.jsxs)(i.Y,{justify:"center",children:[(0,n.jsxs)(r.j,{shadow:"md",children:[(0,n.jsx)(r.j.Target,{children:(0,n.jsx)(s.$,{children:"First"})}),(0,n.jsx)(r.j.Dropdown,{children:(0,n.jsx)(a.E,{size:"sm",children:"First hover card content"})})]}),(0,n.jsxs)(r.j,{shadow:"md",children:[(0,n.jsx)(r.j.Target,{children:(0,n.jsx)(s.$,{children:"Second"})}),(0,n.jsx)(r.j.Dropdown,{children:(0,n.jsx)(a.E,{size:"sm",children:"Second hover card content"})})]}),(0,n.jsxs)(r.j,{shadow:"md",children:[(0,n.jsx)(r.j.Target,{children:(0,n.jsx)(s.$,{children:"Third"})}),(0,n.jsx)(r.j.Dropdown,{children:(0,n.jsx)(a.E,{size:"sm",children:"Third hover card content"})})]})]})})},code:`
import { HoverCard, Button, Text, Group } from '@mantine/core';

function Demo() {
  return (
    <HoverCard.Group openDelay={500} closeDelay={100}>
      <Group justify="center">
        <HoverCard shadow="md">
          <HoverCard.Target>
            <Button>First</Button>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Text size="sm">First hover card content</Text>
          </HoverCard.Dropdown>
        </HoverCard>

        <HoverCard shadow="md">
          <HoverCard.Target>
            <Button>Second</Button>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Text size="sm">Second hover card content</Text>
          </HoverCard.Dropdown>
        </HoverCard>

        <HoverCard shadow="md">
          <HoverCard.Target>
            <Button>Third</Button>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Text size="sm">Third hover card content</Text>
          </HoverCard.Dropdown>
        </HoverCard>
      </Group>
    </HoverCard.Group>
  );
}
`}},42252:(e,t,o)=>{"use strict";o.d(t,{U:()=>l});var n=o(6029),r=o(55729),i=o(70649),s=o(72160),a=o(62421);let l={type:"code",component:function(){let[e,t]=(0,r.useState)(!1),o=(0,i.hG)({immediatelyRender:!1,shouldRerenderOnTransaction:!0,extensions:[s.A],content:"<p>Source code control example</p><p>New line with <strong>bold text</strong></p><p>New line with <em>italic</em> <em>text</em></p>"});return(0,n.jsxs)(a.d,{editor:o,onSourceCodeTextSwitch:t,children:[(0,n.jsxs)(a.d.Toolbar,{children:[(0,n.jsx)(a.d.ControlsGroup,{children:(0,n.jsx)(a.d.SourceCode,{})}),!e&&(0,n.jsxs)(a.d.ControlsGroup,{children:[(0,n.jsx)(a.d.Blockquote,{}),(0,n.jsx)(a.d.Bold,{}),(0,n.jsx)(a.d.Italic,{}),(0,n.jsx)(a.d.Underline,{}),(0,n.jsx)(a.d.Strikethrough,{}),(0,n.jsx)(a.d.ClearFormatting,{}),(0,n.jsx)(a.d.Highlight,{})]})]}),(0,n.jsx)(a.d.Content,{})]})},code:`
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor } from '@mantine/tiptap';
import { useState } from 'react';

function Demo() {
  const [isSourceCodeModeActive, onSourceCodeTextSwitch] = useState(false)

  const editor = useEditor({
    extensions: [StarterKit],
    shouldRerenderOnTransaction: true,
    content: '<p>Source code control example</p><p>New line with <strong>bold text</strong></p><p>New line with <em>italic</em> <em>text</em></p>',
  });

  return (
    <RichTextEditor editor={editor} onSourceCodeTextSwitch={onSourceCodeTextSwitch}>
      <RichTextEditor.Toolbar>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.SourceCode icon={BoldIcon} />
        </RichTextEditor.ControlsGroup>
        {!isSourceCodeModeActive && (
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Blockquote />
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Underline />
            <RichTextEditor.Strikethrough />
            <RichTextEditor.ClearFormatting />
            <RichTextEditor.Highlight />
          </RichTextEditor.ControlsGroup>
        )}
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
`}},56814:(e,t,o)=>{"use strict";o.d(t,{j:()=>w});var n=o(6029),r=o(55729),i=o(38919),s=o(17598);let[a,l]=(0,o(95681).F)("HoverCard component was not found in the tree");var d=o(41787);let c=(0,r.createContext)(!1),h=c.Provider,p=()=>(0,r.useContext)(c);function u(e){let{children:t,onMouseEnter:o,onMouseLeave:r,...a}=(0,i.Y)("HoverCardDropdown",null,e),c=l();if(p()&&c.getFloatingProps&&c.floating){let e=c.getFloatingProps();return(0,n.jsx)(s.A.Dropdown,{ref:c.floating,...e,onMouseEnter:(0,d.T)(o,e.onMouseEnter),onMouseLeave:(0,d.T)(r,e.onMouseLeave),...a,children:t})}let h=(0,d.T)(o,c.openDropdown),u=(0,d.T)(r,c.closeDropdown);return(0,n.jsx)(s.A.Dropdown,{onMouseEnter:h,onMouseLeave:u,...a,children:t})}u.displayName="@mantine/core/HoverCardDropdown";var m=o(75096);let x={openDelay:0,closeDelay:0};function j(e){let{openDelay:t,closeDelay:o,children:r}=(0,i.Y)("HoverCardGroup",x,e);return(0,n.jsx)(h,{value:!0,children:(0,n.jsx)(m.T3,{delay:{open:t,close:o},children:r})})}j.displayName="@mantine/core/HoverCardGroup",j.extend=e=>e;var T=o(52557);let g={refProp:"ref"},b=(0,r.forwardRef)((e,t)=>{let{children:o,refProp:a,eventPropsWrapperName:c,...h}=(0,i.Y)("HoverCardTarget",g,e),u=(0,T.D)(o);if(!u)throw Error("HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let m=l();if(p()&&m.getReferenceProps&&m.reference){let e=m.getReferenceProps();return(0,n.jsx)(s.A.Target,{refProp:a,ref:t,...h,children:(0,r.cloneElement)(u,c?{[c]:{...e,ref:m.reference}}:{...e,ref:m.reference})})}let x={onMouseEnter:(0,d.T)(u.props.onMouseEnter,m.openDropdown),onMouseLeave:(0,d.T)(u.props.onMouseLeave,m.closeDropdown)};return(0,n.jsx)(s.A.Target,{refProp:a,ref:t,...h,children:(0,r.cloneElement)(u,c?{[c]:x}:x)})});b.displayName="@mantine/core/HoverCardTarget";var f=o(2011);let v={openDelay:0,closeDelay:150,initiallyOpened:!1};function w(e){let{children:t,onOpen:o,onClose:l,openDelay:d,closeDelay:c,initiallyOpened:h,...u}=(0,i.Y)("HoverCard",v,e),x=function(e){let[t,o]=(0,r.useState)(e.defaultOpened),n="boolean"==typeof e.opened?e.opened:t,i=p(),s=(0,f.B)(),a=(0,r.useRef)(-1),l=(0,r.useRef)(-1),d=(0,r.useCallback)(()=>{window.clearTimeout(a.current),window.clearTimeout(l.current)},[]),c=(0,r.useCallback)(t=>{o(t),t?(j(s),e.onOpen?.()):e.onClose?.()},[s,e.onOpen,e.onClose]),{context:h,refs:u}=(0,m.we)({open:n,onOpenChange:c}),{delay:x,setCurrentId:j}=(0,m.ck)(h,{id:s}),{getReferenceProps:T,getFloatingProps:g}=(0,m.bv)([(0,m.Mk)(h,{enabled:!0,delay:i?x:{open:e.openDelay,close:e.closeDelay}}),(0,m.It)(h,{role:"dialog"}),(0,m.s9)(h,{enabled:i})]),b=(0,r.useCallback)(()=>{i||(d(),0===e.openDelay||void 0===e.openDelay?c(!0):a.current=window.setTimeout(()=>c(!0),e.openDelay))},[i,d,e.openDelay,c]),v=(0,r.useCallback)(()=>{i||(d(),0===e.closeDelay||void 0===e.closeDelay?c(!1):l.current=window.setTimeout(()=>c(!1),e.closeDelay))},[i,d,e.closeDelay,c]);return(0,r.useEffect)(()=>()=>d(),[d]),{opened:n,reference:u.setReference,floating:u.setFloating,getReferenceProps:T,getFloatingProps:g,openDropdown:b,closeDropdown:v}}({openDelay:d,closeDelay:c,defaultOpened:h,onOpen:o,onClose:l});return(0,n.jsx)(a,{value:{openDropdown:x.openDropdown,closeDropdown:x.closeDropdown,getReferenceProps:x.getReferenceProps,getFloatingProps:x.getFloatingProps,reference:x.reference,floating:x.floating},children:(0,n.jsx)(s.A,{...u,opened:x.opened,__staticSelector:"HoverCard",children:t})})}w.displayName="@mantine/core/HoverCard",w.Target=b,w.Dropdown=u,w.Group=j,w.extend=e=>e},67640:(e,t,o)=>{"use strict";o.d(t,{a:()=>s});var n=o(6029),r=o(70304),i=o(61087);let s={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.m,{target:"#hover-me",label:"Tooltip over button"}),(0,n.jsx)(i.$,{id:"hover-me",children:"Hover me to see tooltip"})]})},code:`
import { Button, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <>
      <Tooltip target="#hover-me" label="Tooltip over button" />
      <Button id="hover-me">Hover me to see tooltip</Button>
    </>
  );
}
`,centered:!0}},79941:(e,t,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/8-2-0",function(){return o(87202)}])},87202:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>x});var n=o(6029),r=o(16285),i=o(94736),s=o(67640),a=o(27294),l=o(21754),d=o(51736),c=o(42252),h=o(38547),p=o(5262);let u=(0,h.P)(p.XZ.Changelog820);function m(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Demo:o,SponsorButton:h}=t;return o||j("Demo",!0),h||j("SponsorButton",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"support-mantine-development",children:"Support Mantine development"}),"\n",(0,n.jsxs)(t.p,{children:["You can now sponsor Mantine development with ",(0,n.jsx)(t.a,{href:"https://opencollective.com/mantinedev",children:"OpenCollective"}),".\nAll funds are used to improve Mantine and create new features and components."]}),"\n",(0,n.jsx)(h,{}),"\n",(0,n.jsx)(t.h2,{id:"styles-api-attributes",children:"Styles API attributes"}),"\n",(0,n.jsxs)(t.p,{children:["You now can pass attributes to inner elements of all components that support Styles API with ",(0,n.jsx)(t.code,{children:"attributes"})," prop.\nFor example, it can be used to add data attributes for testing purposes:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Button\n      attributes={{\n        root: { 'data-test-id': 'root' },\n        label: { 'data-test-id': 'label' },\n        inner: { 'data-test-id': 'inner' },\n      }}\n    >\n      Button\n    </Button>\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"container-grid-strategy",children:"Container grid strategy"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/core/container",children:"Container"})," now supports ",(0,n.jsx)(t.code,{children:'strategy="grid"'})," prop which enables more\nfeatures."]}),"\n",(0,n.jsxs)(t.p,{children:["Differences from the default ",(0,n.jsx)(t.code,{children:'strategy="block"'}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Uses ",(0,n.jsx)(t.code,{children:"display: grid"})," instead of ",(0,n.jsx)(t.code,{children:"display: block"})]}),"\n",(0,n.jsx)(t.li,{children:"Does not include default inline padding"}),"\n",(0,n.jsxs)(t.li,{children:["Does not set ",(0,n.jsx)(t.code,{children:"max-width"})," on the root element (uses grid template columns instead)"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Features supported by ",(0,n.jsx)(t.code,{children:'strategy="grid"'}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Everything that is supported by ",(0,n.jsx)(t.code,{children:'strategy="block"'})]}),"\n",(0,n.jsxs)(t.li,{children:["Children with ",(0,n.jsx)(t.code,{children:"data-breakout"})," attribute take the entire width of the container's parent element"]}),"\n",(0,n.jsxs)(t.li,{children:["Children with ",(0,n.jsx)(t.code,{children:"data-container"})," inside ",(0,n.jsx)(t.code,{children:"data-breakout"})," have the same width as the main grid column"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Example of using breakout feature:"}),"\n",(0,n.jsx)(o,{data:i.o}),"\n",(0,n.jsx)(t.h2,{id:"tooltip-target",children:"Tooltip target"}),"\n",(0,n.jsxs)(t.p,{children:["New ",(0,n.jsx)(t.a,{href:"/core/tooltip",children:"Tooltip"})," ",(0,n.jsx)(t.code,{children:"target"})," prop is an alternative to ",(0,n.jsx)(t.code,{children:"children"}),". It accepts a string (selector),\nan HTML element or a ref object with HTML element. Use ",(0,n.jsx)(t.code,{children:"target"})," prop when you do\nnot render tooltip target as JSX element."]}),"\n",(0,n.jsxs)(t.p,{children:["Example of using ",(0,n.jsx)(t.code,{children:"target"})," prop with a string selector:"]}),"\n",(0,n.jsx)(o,{data:s.a}),"\n",(0,n.jsx)(t.h2,{id:"hovercardgroup",children:"HoverCard.Group"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/core/hover-card",children:"HoverCard"})," now supports delay synchronization between multiple instances using ",(0,n.jsx)(t.code,{children:"HoverCard.Group"})," component:"]}),"\n",(0,n.jsx)(o,{data:a.O,demoProps:{defaultExpanded:!1}}),"\n",(0,n.jsx)(t.h2,{id:"use-selection-hook",children:"use-selection hook"}),"\n",(0,n.jsxs)(t.p,{children:["New ",(0,n.jsx)(t.a,{href:"/hooks/use-selection",children:"use-selection"})," hook:"]}),"\n",(0,n.jsx)(o,{data:l.z,demoProps:{defaultExpanded:!1}}),"\n",(0,n.jsx)(t.h2,{id:"autoselectonblur-prop",children:"autoSelectOnBlur prop"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/core/select",children:"Select"})," and ",(0,n.jsx)(t.a,{href:"/core/autocomplete",children:"Autocomplete"})," components now support ",(0,n.jsx)(t.code,{children:"autoSelectOnBlur"})," prop.\nUse it to automatically select the highlighted option when the input loses focus.\nTo see this feature in action: select an option with up/down arrows, then click outside the input:"]}),"\n",(0,n.jsx)(o,{data:d.Y}),"\n",(0,n.jsx)(t.h2,{id:"source-edit-mode-in-richtexteditor",children:"Source edit mode in RichTextEditor"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/x/tiptap",children:"RichTextEditor"})," now supports source edit mode:"]}),"\n",(0,n.jsx)(o,{data:c.U}),"\n",(0,n.jsx)(t.h2,{id:"recharts-3-support",children:"Recharts 3 support"}),"\n",(0,n.jsxs)(t.p,{children:["You can now use the latest ",(0,n.jsx)(t.a,{href:"https://recharts.org/en-US/",children:"Recharts 3"})," version with Mantine charts.\n",(0,n.jsx)(t.code,{children:"@mantine/charts"})," package was validated to work with both Recharts 2 and Recharts 3 versions.\nNote that, there might still be some minor issues with Recharts 3, you are welcome to report issues on GitHub."]}),"\n",(0,n.jsx)(t.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/core/accordion",children:"Accordion"})," default ",(0,n.jsx)(t.code,{children:"chevronSize"})," prop value was changed to ",(0,n.jsx)(t.code,{children:"auto"})," to allow using dynamic icon sizes"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/core/accordion",children:"Accordion"})," now supports ",(0,n.jsx)(t.code,{children:"chevronIconSize"})," prop to configure size of the default chevron icon"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/core/affix",children:"AffixPosition"})," type is now exported from ",(0,n.jsx)(t.code,{children:"@mantine/core"})," package"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"errorProps"}),", ",(0,n.jsx)(t.code,{children:"labelProps"})," and ",(0,n.jsx)(t.code,{children:"descriptionProps"})," props of all inputs now have stricter types and better IDE autocomplete"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"TypographyStylesProvider"})," was renamed to just ",(0,n.jsx)(t.code,{children:"Typography"})," to simplify usage. ",(0,n.jsx)(t.code,{children:"TypographyStylesProvider"})," name is still available but marked as deprecated – it will be removed in ",(0,n.jsx)(t.code,{children:"9.0.0"})," release."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/core/slider",children:"Slider"})," and ",(0,n.jsx)(t.a,{href:"/core/range-slider",children:"RangeSlider"})," components now have separate documentation pages"]}),"\n"]})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(u,{...e,children:(0,n.jsx)(m,{...e})})}function j(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},94736:(e,t,o)=>{"use strict";o.d(t,{o:()=>s});var n=o(6029),r=o(27490),i=o(76320);let s={type:"code",component:function(){return(0,n.jsxs)(r.m,{strategy:"grid",size:500,children:[(0,n.jsx)(i.a,{bg:"var(--mantine-color-indigo-light)",h:50,children:"Main content"}),(0,n.jsxs)(i.a,{"data-breakout":!0,bg:"var(--mantine-color-indigo-light)",mt:"xs",children:[(0,n.jsx)("div",{children:"Breakout"}),(0,n.jsx)(i.a,{"data-container":!0,bg:"indigo",c:"white",h:50,children:(0,n.jsx)("div",{children:"Container inside breakout"})})]})]})},code:`
import { Box, Container } from '@mantine/core';

function Demo() {
  return (
    <Container strategy="grid" size={500}>
      <Box bg="var(--mantine-color-indigo-light)" h={50}>
        Main content
      </Box>

      <Box data-breakout bg="var(--mantine-color-indigo-light)" mt="xs">
        <div>Breakout</div>

        <Box data-container bg="indigo" c="white" h={50}>
          <div>Container inside breakout</div>
        </Box>
      </Box>
    </Container>
  );
}
`}}},e=>{e.O(0,[36010,38635,78213,32777,38547,2061,62421,48537,90636,46593,38792],()=>e(e.s=79941)),_N_E=e.O()}]);