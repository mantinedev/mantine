(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7372],{35062:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/others/modals",function(){return n(35317)}])},35317:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return T}});var t=n(24246),l=n(71670),i=n(3916),a=n(30289),d=n(27378),Text=n(26569),r=n(8671),s=n(41788),c=n(59269);let m=`
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
`,p={type:"code",centered:!0,component:function(){return d.createElement(r.z,{onClick:()=>s.qk.openConfirmModal({modalId:"test-id",title:"Please confirm your action",children:d.createElement(Text.x,{size:"sm"},"This action is so important that you are required to confirm it with a modal. Please click one of these buttons to proceed."),onCancel:()=>c.N9.show({title:"Canceled",message:"Confirm modal was canceled",color:"gray"}),onConfirm:()=>c.N9.show({title:"Confirmed",message:"Confirm modal was confirmed",color:"teal"})})},"Open confirm modal")},code:m},u=`
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
`,h={type:"code",centered:!0,component:function(){return d.createElement(r.z,{onClick:()=>s.qk.openConfirmModal({title:"Delete your profile",centered:!0,children:d.createElement(Text.x,{size:"sm"},"Are you sure you want to delete your profile? This action is destructive and you will have to contact support to restore your data."),labels:{confirm:"Delete account",cancel:"No don't delete it"},confirmProps:{color:"red"},onCancel:()=>c.N9.show({title:"Canceled",message:"Delete modal was canceled",color:"gray"}),onConfirm:()=>c.N9.show({title:"Deleted",message:"Delete modal was confirmed",color:"red"})}),color:"red"},"Delete account")},code:u},f=`
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
`,x={type:"code",centered:!0,component:function(){return d.createElement(r.z,{onClick:()=>s.qk.openContextModal({modal:"demonstration",title:"Test modal from context",innerProps:{modalBody:"This modal was defined in ModalsProvider, you can open it anywhere in you app with useModals hook"}})},"Open demonstration context modal")},code:f};var C=n(7033);let j=`
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
`,y={type:"code",centered:!0,component:function(){return d.createElement(r.z,{onClick:()=>{s.qk.open({title:"Subscribe to newsletter",children:d.createElement(d.Fragment,null,d.createElement(C.o,{label:"Your email",placeholder:"Your email","data-autofocus":!0}),d.createElement(r.z,{fullWidth:!0,onClick:()=>s.qk.closeAll(),mt:"md"},"Submit"))})}},"Open content modal")},code:j},M=`
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
`,w={type:"code",centered:!0,component:function(){return d.createElement(r.z,{onClick:()=>s.qk.openConfirmModal({title:"Please confirm your action",closeOnConfirm:!1,labels:{confirm:"Next modal",cancel:"Close modal"},children:d.createElement(Text.x,{size:"sm"},"This action is so important that you are required to confirm it with a modal. Please click one of these buttons to proceed."),onConfirm:()=>s.qk.openConfirmModal({title:"This is modal at second layer",labels:{confirm:"Close modal",cancel:"Back"},closeOnConfirm:!1,children:d.createElement(Text.x,{size:"sm"},"When this modal is closed modals state will revert to first modal"),onConfirm:s.qk.closeAll})})},"Open multiple steps modal")},code:M},P=`
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
`,b={type:"code",centered:!0,component:function(){return d.createElement(r.z,{onClick:()=>s.qk.openConfirmModal({modalId:"test-id",title:"Please confirm your action",size:"sm",radius:"md",withCloseButton:!1,children:d.createElement(Text.x,{size:"sm"},"This action is so important that you are required to confirm it with a modal. Please click one of these buttons to proceed."),onCancel:()=>c.N9.show({title:"Canceled",message:"Confirm modal was canceled",color:"gray"}),onConfirm:()=>c.N9.show({title:"Confirmed",message:"Confirm modal was confirmed",color:"teal"})})},"Open confirm modal")},code:P},g=(0,i.A)(a.us.Modals);function k(e){let o={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components},{Demo:n,InstallScript:i}=o;return n||v("Demo",!0),i||v("InstallScript",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(i,{packages:"@mantine/modals"}),"\n",(0,t.jsx)(o.h2,{id:"setup-modalsprovider",children:"Setup ModalsProvider"}),"\n",(0,t.jsxs)(o.p,{children:["Wrap your app with ",(0,t.jsx)(o.code,{children:"ModalsProvider"})," component:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\nimport { ModalsProvider } from '@mantine/modals';\n\nfunction Demo() {\n  return (\n    <MantineProvider>\n      <ModalsProvider>\n        <App />\n      </ModalsProvider>\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"confirm-modal",children:"Confirm modal"}),"\n",(0,t.jsxs)(o.p,{children:["@mantine/modals package includes special modal that can be used for confirmations.\nComponent includes confirm and cancel buttons and supports children to display additional\ninformation about action. Use ",(0,t.jsx)(o.code,{children:"openConfirmModal"})," function to open a confirm modal:"]}),"\n",(0,t.jsx)(n,{data:p}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"openConfirmModal"})," function accepts one argument with following properties:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"modalId"})," – modal id, defaults to random id, can be used to close modal programmatically"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"children"})," – additional modal content displayed before actions"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"onCancel"})," – called when cancel button is clicked"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"onConfirm"})," – called when confirm button is clicked"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"closeOnConfirm"})," – should modal be closed when confirm button is clicked, defaults to ",(0,t.jsx)(o.code,{children:"true"})]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"closeOnCancel"})," – should modal be closed when cancel button is clicked, defaults to ",(0,t.jsx)(o.code,{children:"true"})]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"cancelProps"})," – cancel button props"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"confirmProps"})," – confirm button props"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"groupProps"})," – buttons ",(0,t.jsx)(o.a,{href:"/core/group/",children:"Group"})," props"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"labels"})," – cancel and confirm buttons labels, can be defined on ModalsProvider"]}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:"Using this properties you can customize confirm modal to match current context requirements:"}),"\n",(0,t.jsx)(n,{data:h}),"\n",(0,t.jsxs)(o.p,{children:["To setup shared labels for confirm modals set ",(0,t.jsx)(o.code,{children:"labels"})," on ",(0,t.jsx)(o.code,{children:"ModalsProvider"}),":"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { ModalsProvider } from '@mantine/modals';\n\nfunction Demo() {\n  return (\n    <ModalsProvider labels={{ confirm: 'Submit', cancel: 'Cancel' }}>\n      <App />\n    </ModalsProvider>\n  );\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"context-modals",children:"Context modals"}),"\n",(0,t.jsx)(o.p,{children:"You can define any amount of modals in ModalsProvider context:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { ContextModalProps, ModalsProvider } from '@mantine/modals';\nimport { Text, Button } from '@mantine/core';\n\nconst TestModal = ({\n  context,\n  id,\n  innerProps,\n}: ContextModalProps<{ modalBody: string }>) => (\n  <>\n    <Text size=\"sm\">{innerProps.modalBody}</Text>\n    <Button fullWidth mt=\"md\" onClick={() => context.closeModal(id)}>\n      Close modal\n    </Button>\n  </>\n);\n\nfunction Demo() {\n  return (\n    <ModalsProvider\n      modals={{ demonstration: TestModal /* ...other modals */ }}\n    >\n      <App />\n    </ModalsProvider>\n  );\n}\n"})}),"\n",(0,t.jsxs)(o.p,{children:["And then open one of these modals with ",(0,t.jsx)(o.code,{children:"modals.openContextModal"})," function.\n",(0,t.jsx)(o.code,{children:"modals.openContextModal"})," function accepts 2 arguments: modal key (should match one defined on ModalsProvider) and modal props:"]}),"\n",(0,t.jsx)(n,{data:x}),"\n",(0,t.jsx)(o.h2,{id:"typesafe-context-modals",children:"Typesafe context modals"}),"\n",(0,t.jsxs)(o.p,{children:["By default ",(0,t.jsx)(o.code,{children:"innerProps"})," and ",(0,t.jsx)(o.code,{children:"modal"})," are not typesafe. You can add typesafety with a Typescript module declaration."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:'const TestModal = ({\n  context,\n  id,\n  innerProps,\n}: ContextModalProps<{ modalBody: string }>) => (\n  <>\n    <Text size="sm">{innerProps.modalBody}</Text>\n    <Button fullWidth mt="md" onClick={() => context.closeModal(id)}>\n      Close modal\n    </Button>\n  </>\n);\nconst modals = {\n  demonstration: TestModal,\n  /* ...other modals */\n};\ndeclare module \'@mantine/modals\' {\n  export interface MantineModalsOverride {\n    modals: typeof modals;\n  }\n}\nfunction Demo() {\n  return (\n    <ModalsProvider modals={modals}>\n      <App />\n    </ModalsProvider>\n  );\n}\n'})}),"\n",(0,t.jsxs)(o.p,{children:["Typesafe context modals will force you to use the correct types for ",(0,t.jsx)(o.code,{children:"openContextModal"}),":"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { openContextModal, closeModal } from '@mantine/modals';\nopenContextModal({\n  modal: 'demonstration',\n  title: 'Test modal from context',\n  innerProps: {\n    modalBody:\n      'This modal was defined in ModalsProvider, you can open it anywhere in you app with useModals hook',\n  },\n});\ncloseModal('demonstration');\n"})}),"\n",(0,t.jsx)(o.h2,{id:"content-modals",children:"Content modals"}),"\n",(0,t.jsxs)(o.p,{children:["With ",(0,t.jsx)(o.code,{children:"modals.open"})," function you can open a modal with any content:"]}),"\n",(0,t.jsx)(n,{data:y}),"\n",(0,t.jsx)(o.h2,{id:"multiple-opened-modals",children:"Multiple opened modals"}),"\n",(0,t.jsxs)(o.p,{children:["You can open multiple layers of modals. Every opened modal is added as first element in modals queue.\nTo close all opened modals call ",(0,t.jsx)(o.code,{children:"modals.closeAll()"})," function:"]}),"\n",(0,t.jsx)(n,{data:w}),"\n",(0,t.jsx)(o.h2,{id:"modal-props",children:"Modal props"}),"\n",(0,t.jsxs)(o.p,{children:["You can pass props down to the ",(0,t.jsx)(o.a,{href:"/core/modal",children:"Modal"})," component by adding them to the\nargument of every ",(0,t.jsx)(o.code,{children:"modals.x"})," function. Example of setting ",(0,t.jsx)(o.code,{children:"radius"}),", ",(0,t.jsx)(o.code,{children:"size"})," and ",(0,t.jsx)(o.code,{children:"withCloseButton"}),"\nprops:"]}),"\n",(0,t.jsx)(n,{data:b}),"\n",(0,t.jsx)(o.h2,{id:"dynamic-content-and-the-modals-manager",children:"Dynamic Content and the modals manager"}),"\n",(0,t.jsx)(o.p,{children:"Note that when using the Modals manager, dynamic content is not supported.\nOnce modal is opened, a snapshot is saved into internal state and cannot be updated."}),"\n",(0,t.jsx)(o.p,{children:"If you intend to have dynamic content in modals, either:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"Use internal component state, or"}),"\n",(0,t.jsx)(o.li,{children:"Use the modal component instead of modals manager"}),"\n"]})]})}function T(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(g,{...e,children:(0,t.jsx)(k,{...e})})}function v(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=35062)}),_N_E=e.O()}]);