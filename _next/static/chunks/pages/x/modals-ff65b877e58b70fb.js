(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[40021],{1798:(e,o,n)=>{"use strict";n.d(o,{A:()=>t});let t=(0,n(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},6620:(e,o,n)=>{"use strict";n.d(o,{A:()=>t});let t=(0,n(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,o,n)=>{"use strict";n.d(o,{A:()=>t});let t=(0,n(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},17868:(e,o,n)=>{"use strict";n.r(o),n.d(o,{default:()=>v});var t=n(6029),l=n(16285),d=n(45208),a=n(61087),s=n(87167),i=n(70530);let r={type:"code",centered:!0,component:function(){return(0,t.jsx)(a.$,{onClick:()=>s.jQ.openConfirmModal({modalId:"test-id",title:"Please confirm your action",children:(0,t.jsx)(d.E,{size:"sm",children:"This action is so important that you are required to confirm it with a modal. Please click one of these buttons to proceed."}),onCancel:()=>i.$e.show({title:"Canceled",message:"Confirm modal was canceled",color:"gray"}),onConfirm:()=>i.$e.show({title:"Confirmed",message:"Confirm modal was confirmed",color:"teal"})}),children:"Open confirm modal"})},code:`
import { Button, Text } from '@mantine/core';
import { modals } from '@mantine/modals';

function Demo() {
  const openModal = () => modals.openConfirmModal({
    title: 'Please confirm your action',
    children: (
      <Text size="sm">
        This action is so important that you are required to confirm it with a modal. Please click
        one of these buttons to proceed.
      </Text>
    ),
    labels: { confirm: 'Confirm', cancel: 'Cancel' },
    onCancel: () => console.log('Cancel'),
    onConfirm: () => console.log('Confirmed'),
  });

  return <Button onClick={openModal}>Open confirm modal</Button>;
}
`},c={type:"code",centered:!0,component:function(){return(0,t.jsx)(a.$,{onClick:()=>s.jQ.openConfirmModal({title:"Delete your profile",centered:!0,children:(0,t.jsx)(d.E,{size:"sm",children:"Are you sure you want to delete your profile? This action is destructive and you will have to contact support to restore your data."}),labels:{confirm:"Delete account",cancel:"No don't delete it"},confirmProps:{color:"red"},onCancel:()=>i.$e.show({title:"Canceled",message:"Delete modal was canceled",color:"gray"}),onConfirm:()=>i.$e.show({title:"Deleted",message:"Delete modal was confirmed",color:"red"})}),color:"red",children:"Delete account"})},code:`
import { Button, Text } from '@mantine/core';
import { modals } from '@mantine/modals';

function Demo() {
  const openDeleteModal = () =>
    modals.openConfirmModal({
      title: 'Delete your profile',
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to delete your profile? This action is destructive and you will have
          to contact support to restore your data.
        </Text>
      ),
      labels: { confirm: 'Delete account', cancel: "No don't delete it" },
      confirmProps: { color: 'red' },
      onCancel: () => console.log('Cancel'),
      onConfirm: () => console.log('Confirmed'),
    });

  return <Button onClick={openDeleteModal} color="red">Delete account</Button>;
}
`},m={type:"code",centered:!0,component:function(){return(0,t.jsx)(a.$,{onClick:()=>s.jQ.openContextModal({modal:"demonstration",title:"Test modal from context",innerProps:{modalBody:"This modal was defined in ModalsProvider, you can open it anywhere in you app with useModals hook"}}),children:"Open demonstration context modal"})},code:`
import { Button } from '@mantine/core';
import { modals } from '@mantine/modals';

function Demo() {
  return (
    <Button
      onClick={() =>
        modals.openContextModal({
          modal: 'demonstration',
          title: 'Test modal from context',
          innerProps: {
            modalBody:
              'This modal was defined in ModalsProvider, you can open it anywhere in you app with useModals hook',
          },
        })
      }
    >
      Open demonstration context modal
    </Button>
  );
}
`};var p=n(38774);let u={type:"code",centered:!0,component:function(){return(0,t.jsx)(a.$,{onClick:()=>{s.jQ.open({title:"Subscribe to newsletter",children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(p.k,{label:"Your email",placeholder:"Your email","data-autofocus":!0}),(0,t.jsx)(a.$,{fullWidth:!0,onClick:()=>s.jQ.closeAll(),mt:"md",children:"Submit"})]})})},children:"Open content modal"})},code:`
import { TextInput, Button } from '@mantine/core';
import { modals } from '@mantine/modals';

function Demo() {
  return (
    <Button
      onClick={() => {
        modals.open({
          title: 'Subscribe to newsletter',
          children: (
            <>
              <TextInput label="Your email" placeholder="Your email" data-autofocus />
              <Button fullWidth onClick={() => modals.closeAll()} mt="md">
                Submit
              </Button>
            </>
          ),
        });
      }}
    >
      Open content modal
    </Button>
  );
}
`},h={type:"code",centered:!0,component:function(){return(0,t.jsx)(a.$,{onClick:()=>s.jQ.openConfirmModal({title:"Please confirm your action",closeOnConfirm:!1,labels:{confirm:"Next modal",cancel:"Close modal"},children:(0,t.jsx)(d.E,{size:"sm",children:"This action is so important that you are required to confirm it with a modal. Please click one of these buttons to proceed."}),onConfirm:()=>s.jQ.openConfirmModal({title:"This is modal at second layer",labels:{confirm:"Close modal",cancel:"Back"},closeOnConfirm:!1,children:(0,t.jsx)(d.E,{size:"sm",children:"When this modal is closed modals state will revert to first modal"}),onConfirm:s.jQ.closeAll})}),children:"Open multiple steps modal"})},code:`
import { Button, Text } from '@mantine/core';
import { modals } from '@mantine/modals';

function Demo() {
  return (
    <Button
      onClick={() =>
        modals.openConfirmModal({
          title: 'Please confirm your action',
          closeOnConfirm: false,
          labels: { confirm: 'Next modal', cancel: 'Close modal' },
          children: (
            <Text size="sm">
              This action is so important that you are required to confirm it with a modal. Please
              click one of these buttons to proceed.
            </Text>
          ),
          onConfirm: () =>
            modals.openConfirmModal({
              title: 'This is modal at second layer',
              labels: { confirm: 'Close modal', cancel: 'Back' },
              closeOnConfirm: false,
              children: (
                <Text size="sm">
                  When this modal is closed modals state will revert to first modal
                </Text>
              ),
              onConfirm: modals.closeAll,
            }),
        })
      }
    >
      Open multiple steps modal
    </Button>
  );
}
`},f={type:"code",centered:!0,component:function(){return(0,t.jsx)(a.$,{onClick:()=>s.jQ.openConfirmModal({modalId:"test-id",title:"Please confirm your action",size:"sm",radius:"md",withCloseButton:!1,children:(0,t.jsx)(d.E,{size:"sm",children:"This action is so important that you are required to confirm it with a modal. Please click one of these buttons to proceed."}),onCancel:()=>i.$e.show({title:"Canceled",message:"Confirm modal was canceled",color:"gray"}),onConfirm:()=>i.$e.show({title:"Confirmed",message:"Confirm modal was confirmed",color:"teal"})}),children:"Open confirm modal"})},code:`
import { Button, Text } from '@mantine/core';
import { modals } from '@mantine/modals';

function Demo() {
  const openModal = () => modals.openConfirmModal({
    title: 'Please confirm your action',
    size: 'sm',
    radius: 'md',
    withCloseButton: false,
    children: (
      <Text size="sm">
        This action is so important that you are required to confirm it with a modal. Please click
        one of these buttons to proceed.
      </Text>
    ),
    labels: { confirm: 'Confirm', cancel: 'Cancel' },
    onCancel: () => console.log('Cancel'),
    onConfirm: () => console.log('Confirmed'),
  });

  return <Button onClick={openModal}>Open confirm modal</Button>;
}
`};var x=n(92123);let y={type:"code",centered:!0,component:function(){return(0,t.jsx)(a.$,{onClick:()=>{let e=s.jQ.openContextModal({modal:"asyncDemonstration",title:"Processing...",closeOnEscape:!1,closeOnClickOutside:!1,closeButtonProps:{disabled:!0},innerProps:{modalBody:"You cannot close this modal until 2 seconds have passed.",loading:!0}});setTimeout(()=>{s.jQ.updateContextModal({modalId:e,title:"Processing Complete!",closeOnEscape:!0,closeOnClickOutside:!0,closeButtonProps:{disabled:!1},innerProps:{modalBody:"You can now close the modal.",loading:!1}})},2e3)},children:"Open updating context modal"})},code:`
import { Button, Text, Stack, Center, Loader } from '@mantine/core';
import { modals, ContextModalProps, ModalsProvider } from '@mantine/modals';
import { IconCheck } from '@tabler/icons-react';

const TestModal = ({
  context,
  id,
  innerProps,
}: ContextModalProps<{ modalBody: string, loading: boolean }>) => (
  <>
    <Stack>
      <Text size="sm">{innerProps.modalBody}</Text>
      <Center>
        {innerProps.loading ? (
          <Loader size={32}/>
        ): (
          <IconCheck size={23} color="var(--mantine-color-teal-6)" />
        )}
      </Center>
    </Stack>
    <Button fullWidth mt="md" disabled={innerProps.loading} onClick={() => context.closeModal(id)}>
      Close modal
    </Button>
  </>
);

function Demo() {
  return (
    <ModalsProvider
      modals={{ demonstration: TestModal /* ...other modals */ }}
    >
      <Button
        onClick={() => {
          const modalId = modals.openContextModal({
            modal: 'asyncDemonstration',
            title: 'Processing...',
            closeOnEscape: false,
            closeOnClickOutside: false,
            closeButtonProps:{ disabled:true },
            innerProps: {
              modalBody:
                'You cannot close this modal until 2 seconds have passed.',
              loading: true,
            },
          });

          setTimeout(() => {
            modals.updateContextModal({
              modalId,
              title: "Processing Complete!",
              closeOnEscape: true,
              closeOnClickOutside: true,
              closeButtonProps:{ disabled: false },
              innerProps: {
                modalBody:
                  'You can now close the modal.',
                loading: false,
              },
            })
          }, 2000);
        }}
      >
        Open updating context modal
      </Button>
    </ModalsProvider>
  );
}
`};var M=n(38547),C=n(5262);let j=(0,M.P)(C.XZ.Modals);function g(e){let o={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components},{Demo:n,InstallScript:d}=o;return n||k("Demo",!0),d||k("InstallScript",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(d,{packages:"@mantine/modals"}),"\n",(0,t.jsx)(o.h2,{id:"setup-modalsprovider",children:"Setup ModalsProvider"}),"\n",(0,t.jsxs)(o.p,{children:["Wrap your app with ",(0,t.jsx)(o.code,{children:"ModalsProvider"})," component:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\nimport { ModalsProvider } from '@mantine/modals';\n\nfunction Demo() {\n  return (\n    <MantineProvider>\n      <ModalsProvider>{/* Your app here */}</ModalsProvider>\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"confirm-modal",children:"Confirm modal"}),"\n",(0,t.jsxs)(o.p,{children:["@mantine/modals package includes special modal that can be used for confirmations.\nComponent includes confirm and cancel buttons and supports children to display additional\ninformation about action. Use ",(0,t.jsx)(o.code,{children:"openConfirmModal"})," function to open a confirm modal:"]}),"\n",(0,t.jsx)(n,{data:r}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"openConfirmModal"})," function accepts one argument with following properties:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"modalId"})," – modal id, defaults to random id, can be used to close modal programmatically"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"children"})," – additional modal content displayed before actions"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"onCancel"})," – called when cancel button is clicked"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"onConfirm"})," – called when confirm button is clicked"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"closeOnConfirm"})," – should modal be closed when confirm button is clicked, defaults to ",(0,t.jsx)(o.code,{children:"true"})]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"closeOnCancel"})," – should modal be closed when cancel button is clicked, defaults to ",(0,t.jsx)(o.code,{children:"true"})]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"cancelProps"})," – cancel button props"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"confirmProps"})," – confirm button props"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"groupProps"})," – buttons ",(0,t.jsx)(o.a,{href:"/core/group/",children:"Group"})," props"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"labels"})," – cancel and confirm buttons labels, can be defined on ModalsProvider"]}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:"Using this properties you can customize confirm modal to match current context requirements:"}),"\n",(0,t.jsx)(n,{data:c}),"\n",(0,t.jsxs)(o.p,{children:["To setup shared labels for confirm modals set ",(0,t.jsx)(o.code,{children:"labels"})," on ",(0,t.jsx)(o.code,{children:"ModalsProvider"}),":"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { ModalsProvider } from '@mantine/modals';\n\nfunction Demo() {\n  return (\n    <ModalsProvider labels={{ confirm: 'Submit', cancel: 'Cancel' }}>\n      {/* Your app here */}\n    </ModalsProvider>\n  );\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"context-modals",children:"Context modals"}),"\n",(0,t.jsx)(o.p,{children:"You can define any amount of modals in ModalsProvider context:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { Button, Text } from '@mantine/core';\nimport { ContextModalProps, ModalsProvider } from '@mantine/modals';\n\nconst TestModal = ({\n  context,\n  id,\n  innerProps,\n}: ContextModalProps<{ modalBody: string }>) => (\n  <>\n    <Text size=\"sm\">{innerProps.modalBody}</Text>\n    <Button fullWidth mt=\"md\" onClick={() => context.closeModal(id)}>\n      Close modal\n    </Button>\n  </>\n);\n\nfunction Demo() {\n  return (\n    <ModalsProvider\n      modals={{ demonstration: TestModal /* ...other modals */ }}\n    >\n      {/* Your app here */}\n    </ModalsProvider>\n  );\n}\n"})}),"\n",(0,t.jsxs)(o.p,{children:["And then open one of these modals with ",(0,t.jsx)(o.code,{children:"modals.openContextModal"})," function.\n",(0,t.jsx)(o.code,{children:"modals.openContextModal"})," function accepts 2 arguments: modal key (should match one defined on ModalsProvider) and modal props:"]}),"\n",(0,t.jsx)(n,{data:m}),"\n",(0,t.jsx)(o.h2,{id:"typesafe-context-modals",children:"Typesafe context modals"}),"\n",(0,t.jsxs)(o.p,{children:["By default ",(0,t.jsx)(o.code,{children:"innerProps"})," and ",(0,t.jsx)(o.code,{children:"modal"})," are not typesafe. You can add typesafety with a Typescript module declaration."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:'const TestModal = ({\n  context,\n  id,\n  innerProps,\n}: ContextModalProps<{ modalBody: string }>) => (\n  <>\n    <Text size="sm">{innerProps.modalBody}</Text>\n    <Button fullWidth mt="md" onClick={() => context.closeModal(id)}>\n      Close modal\n    </Button>\n  </>\n);\nconst modals = {\n  demonstration: TestModal,\n  /* ...other modals */\n};\ndeclare module \'@mantine/modals\' {\n  export interface MantineModalsOverride {\n    modals: typeof modals;\n  }\n}\nfunction Demo() {\n  return (\n    <ModalsProvider modals={modals}>\n      {/* Your app here */}\n    </ModalsProvider>\n  );\n}\n'})}),"\n",(0,t.jsxs)(o.p,{children:["Typesafe context modals will force you to use the correct types for ",(0,t.jsx)(o.code,{children:"openContextModal"}),":"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { closeModal, openContextModal } from '@mantine/modals';\n\nopenContextModal({\n  modal: 'demonstration',\n  title: 'Test modal from context',\n  innerProps: {\n    modalBody:\n      'This modal was defined in ModalsProvider, you can open it anywhere in you app with useModals hook',\n  },\n});\ncloseModal('demonstration');\n"})}),"\n",(0,t.jsx)(o.h2,{id:"content-modals",children:"Content modals"}),"\n",(0,t.jsxs)(o.p,{children:["With ",(0,t.jsx)(o.code,{children:"modals.open"})," function you can open a modal with any content:"]}),"\n",(0,t.jsx)(n,{data:u}),"\n",(0,t.jsx)(o.h2,{id:"multiple-opened-modals",children:"Multiple opened modals"}),"\n",(0,t.jsxs)(o.p,{children:["You can open multiple layers of modals. Every opened modal is added as first element in modals queue.\nTo close all opened modals call ",(0,t.jsx)(o.code,{children:"modals.closeAll()"})," function:"]}),"\n",(0,t.jsx)(n,{data:h}),"\n",(0,t.jsx)(o.h2,{id:"modal-props",children:"Modal props"}),"\n",(0,t.jsxs)(o.p,{children:["You can pass props down to the ",(0,t.jsx)(o.a,{href:"/core/modal",children:"Modal"})," component by adding them to the\nargument of every ",(0,t.jsx)(o.code,{children:"modals.x"})," function. Example of setting ",(0,t.jsx)(o.code,{children:"radius"}),", ",(0,t.jsx)(o.code,{children:"size"})," and ",(0,t.jsx)(o.code,{children:"withCloseButton"}),"\nprops:"]}),"\n",(0,t.jsx)(n,{data:f}),"\n",(0,t.jsx)(o.h2,{id:"dynamic-content-and-the-modals-manager",children:"Dynamic Content and the modals manager"}),"\n",(0,t.jsx)(o.p,{children:"The Modals manager allows you to dynamically update the content and properties of both standard and context modals after they are opened."}),"\n",(0,t.jsxs)(o.p,{children:["To update regular modals, use the ",(0,t.jsx)(o.code,{children:"modals.updateModal"})," function:"]}),"\n",(0,t.jsx)(n,{data:x.z}),"\n",(0,t.jsxs)(o.p,{children:["Context modals can also be updated dynamically using ",(0,t.jsx)(o.code,{children:"modals.updateContextModal"}),":"]}),"\n",(0,t.jsx)(n,{data:y})]})}function v(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(j,{...e,children:(0,t.jsx)(g,{...e})})}function k(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},24583:(e,o,n)=>{"use strict";n.d(o,{A:()=>t});let t=(0,n(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},34891:(e,o,n)=>{"use strict";n.d(o,{A:()=>t});let t=(0,n(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},41949:(e,o,n)=>{"use strict";n.d(o,{A:()=>t});let t=(0,n(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},65433:(e,o,n)=>{"use strict";n.d(o,{A:()=>t});let t=(0,n(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},84276:(e,o,n)=>{"use strict";n.d(o,{A:()=>t});let t=(0,n(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,o,n)=>{"use strict";n.d(o,{A:()=>t});let t=(0,n(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},90475:(e,o,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/x/modals",function(){return n(17868)}])},92123:(e,o,n)=>{"use strict";n.d(o,{z:()=>s});var t=n(6029),l=n(61087),d=n(45208),a=n(87167);let s={type:"code",centered:!0,component:function(){return(0,t.jsx)(l.$,{onClick:()=>{let e=a.jQ.open({title:"Initial Modal Title",children:(0,t.jsx)(d.E,{size:"sm",children:"This text will update after 2 seconds."})});setTimeout(()=>{a.jQ.updateModal({modalId:e,title:"Updated Modal Title",children:(0,t.jsx)(d.E,{size:"sm",children:"This is the updated content of the modal."})})},2e3)},children:"Open updating modal"})},code:`
import { Button } from '@mantine/core';
import { modals } from '@mantine/modals';

function Demo() {
  return (
    <Button
      onClick={() => {
        const modalId = modals.open({
          title: 'Initial Modal Title',
          children: <Text>This text will update in 2 seconds.</Text>,
        });

        setTimeout(() => {
          modals.updateModal({
            modalId,
            title: 'Updated Modal Title',
            children: (
              <Text size="sm" c="dimmed">
                This is the updated content of the modal.
              </Text>
            ),
          });
        }, 2000);
      }}
    >
      Open updating modal
    </Button>
  );
}
`}}},e=>{e.O(0,[38547,90636,46593,38792],()=>e(e.s=90475)),_N_E=e.O()}]);