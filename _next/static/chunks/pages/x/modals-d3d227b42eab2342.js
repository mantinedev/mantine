(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[49409],{27775:function(o,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/x/modals",function(){return n(15171)}])},15171:function(o,e,n){"use strict";n.r(e),n.d(e,{default:function(){return M}});var t=n(52322),l=n(45392),i=n(8582),d=n(17115),a=n(2807),r=n(60048);let s={type:"code",centered:!0,component:function(){return(0,t.jsx)(d.z,{onClick:()=>a.qk.openConfirmModal({modalId:"test-id",title:"Please confirm your action",children:(0,t.jsx)(i.x,{size:"sm",children:"This action is so important that you are required to confirm it with a modal. Please click one of these buttons to proceed."}),onCancel:()=>r.N9.show({title:"Canceled",message:"Confirm modal was canceled",color:"gray"}),onConfirm:()=>r.N9.show({title:"Confirmed",message:"Confirm modal was confirmed",color:"teal"})}),children:"Open confirm modal"})},code:`
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
`},c={type:"code",centered:!0,component:function(){return(0,t.jsx)(d.z,{onClick:()=>a.qk.openConfirmModal({title:"Delete your profile",centered:!0,children:(0,t.jsx)(i.x,{size:"sm",children:"Are you sure you want to delete your profile? This action is destructive and you will have to contact support to restore your data."}),labels:{confirm:"Delete account",cancel:"No don't delete it"},confirmProps:{color:"red"},onCancel:()=>r.N9.show({title:"Canceled",message:"Delete modal was canceled",color:"gray"}),onConfirm:()=>r.N9.show({title:"Deleted",message:"Delete modal was confirmed",color:"red"})}),color:"red",children:"Delete account"})},code:`
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
`},m={type:"code",centered:!0,component:function(){return(0,t.jsx)(d.z,{onClick:()=>a.qk.openContextModal({modal:"demonstration",title:"Test modal from context",innerProps:{modalBody:"This modal was defined in ModalsProvider, you can open it anywhere in you app with useModals hook"}}),children:"Open demonstration context modal"})},code:`
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
`};var u=n(74770);let p={type:"code",centered:!0,component:function(){return(0,t.jsx)(d.z,{onClick:()=>{a.qk.open({title:"Subscribe to newsletter",children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.o,{label:"Your email",placeholder:"Your email","data-autofocus":!0}),(0,t.jsx)(d.z,{fullWidth:!0,onClick:()=>a.qk.closeAll(),mt:"md",children:"Submit"})]})})},children:"Open content modal"})},code:`
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
`},h={type:"code",centered:!0,component:function(){return(0,t.jsx)(d.z,{onClick:()=>a.qk.openConfirmModal({title:"Please confirm your action",closeOnConfirm:!1,labels:{confirm:"Next modal",cancel:"Close modal"},children:(0,t.jsx)(i.x,{size:"sm",children:"This action is so important that you are required to confirm it with a modal. Please click one of these buttons to proceed."}),onConfirm:()=>a.qk.openConfirmModal({title:"This is modal at second layer",labels:{confirm:"Close modal",cancel:"Back"},closeOnConfirm:!1,children:(0,t.jsx)(i.x,{size:"sm",children:"When this modal is closed modals state will revert to first modal"}),onConfirm:a.qk.closeAll})}),children:"Open multiple steps modal"})},code:`
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
`},f={type:"code",centered:!0,component:function(){return(0,t.jsx)(d.z,{onClick:()=>a.qk.openConfirmModal({modalId:"test-id",title:"Please confirm your action",size:"sm",radius:"md",withCloseButton:!1,children:(0,t.jsx)(i.x,{size:"sm",children:"This action is so important that you are required to confirm it with a modal. Please click one of these buttons to proceed."}),onCancel:()=>r.N9.show({title:"Canceled",message:"Confirm modal was canceled",color:"gray"}),onConfirm:()=>r.N9.show({title:"Confirmed",message:"Confirm modal was confirmed",color:"teal"})}),children:"Open confirm modal"})},code:`
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
`};var x=n(25071),j=n(15019);let C=(0,x.A)(j.us.Modals);function y(o){let e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...o.components},{Demo:n,InstallScript:i}=e;return n||w("Demo",!0),i||w("InstallScript",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(i,{packages:"@mantine/modals"}),"\n",(0,t.jsx)(e.h2,{id:"setup-modalsprovider",children:"Setup ModalsProvider"}),"\n",(0,t.jsxs)(e.p,{children:["Wrap your app with ",(0,t.jsx)(e.code,{children:"ModalsProvider"})," component:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\nimport { ModalsProvider } from '@mantine/modals';\n\nfunction Demo() {\n  return (\n    <MantineProvider>\n      <ModalsProvider>{/* Your app here */}</ModalsProvider>\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"confirm-modal",children:"Confirm modal"}),"\n",(0,t.jsxs)(e.p,{children:["@mantine/modals package includes special modal that can be used for confirmations.\nComponent includes confirm and cancel buttons and supports children to display additional\ninformation about action. Use ",(0,t.jsx)(e.code,{children:"openConfirmModal"})," function to open a confirm modal:"]}),"\n",(0,t.jsx)(n,{data:s}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"openConfirmModal"})," function accepts one argument with following properties:"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"modalId"})," – modal id, defaults to random id, can be used to close modal programmatically"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"children"})," – additional modal content displayed before actions"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"onCancel"})," – called when cancel button is clicked"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"onConfirm"})," – called when confirm button is clicked"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"closeOnConfirm"})," – should modal be closed when confirm button is clicked, defaults to ",(0,t.jsx)(e.code,{children:"true"})]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"closeOnCancel"})," – should modal be closed when cancel button is clicked, defaults to ",(0,t.jsx)(e.code,{children:"true"})]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"cancelProps"})," – cancel button props"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"confirmProps"})," – confirm button props"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"groupProps"})," – buttons ",(0,t.jsx)(e.a,{href:"/core/group/",children:"Group"})," props"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"labels"})," – cancel and confirm buttons labels, can be defined on ModalsProvider"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"Using this properties you can customize confirm modal to match current context requirements:"}),"\n",(0,t.jsx)(n,{data:c}),"\n",(0,t.jsxs)(e.p,{children:["To setup shared labels for confirm modals set ",(0,t.jsx)(e.code,{children:"labels"})," on ",(0,t.jsx)(e.code,{children:"ModalsProvider"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import { ModalsProvider } from '@mantine/modals';\n\nfunction Demo() {\n  return (\n    <ModalsProvider labels={{ confirm: 'Submit', cancel: 'Cancel' }}>\n      {/* Your app here */}\n    </ModalsProvider>\n  );\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"context-modals",children:"Context modals"}),"\n",(0,t.jsx)(e.p,{children:"You can define any amount of modals in ModalsProvider context:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import { Button, Text } from '@mantine/core';\nimport { ContextModalProps, ModalsProvider } from '@mantine/modals';\n\nconst TestModal = ({\n  context,\n  id,\n  innerProps,\n}: ContextModalProps<{ modalBody: string }>) => (\n  <>\n    <Text size=\"sm\">{innerProps.modalBody}</Text>\n    <Button fullWidth mt=\"md\" onClick={() => context.closeModal(id)}>\n      Close modal\n    </Button>\n  </>\n);\n\nfunction Demo() {\n  return (\n    <ModalsProvider\n      modals={{ demonstration: TestModal /* ...other modals */ }}\n    >\n      {/* Your app here */}\n    </ModalsProvider>\n  );\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:["And then open one of these modals with ",(0,t.jsx)(e.code,{children:"modals.openContextModal"})," function.\n",(0,t.jsx)(e.code,{children:"modals.openContextModal"})," function accepts 2 arguments: modal key (should match one defined on ModalsProvider) and modal props:"]}),"\n",(0,t.jsx)(n,{data:m}),"\n",(0,t.jsx)(e.h2,{id:"typesafe-context-modals",children:"Typesafe context modals"}),"\n",(0,t.jsxs)(e.p,{children:["By default ",(0,t.jsx)(e.code,{children:"innerProps"})," and ",(0,t.jsx)(e.code,{children:"modal"})," are not typesafe. You can add typesafety with a Typescript module declaration."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:'const TestModal = ({\n  context,\n  id,\n  innerProps,\n}: ContextModalProps<{ modalBody: string }>) => (\n  <>\n    <Text size="sm">{innerProps.modalBody}</Text>\n    <Button fullWidth mt="md" onClick={() => context.closeModal(id)}>\n      Close modal\n    </Button>\n  </>\n);\nconst modals = {\n  demonstration: TestModal,\n  /* ...other modals */\n};\ndeclare module \'@mantine/modals\' {\n  export interface MantineModalsOverride {\n    modals: typeof modals;\n  }\n}\nfunction Demo() {\n  return (\n    <ModalsProvider modals={modals}>\n      {/* Your app here */}\n    </ModalsProvider>\n  );\n}\n'})}),"\n",(0,t.jsxs)(e.p,{children:["Typesafe context modals will force you to use the correct types for ",(0,t.jsx)(e.code,{children:"openContextModal"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import { closeModal, openContextModal } from '@mantine/modals';\n\nopenContextModal({\n  modal: 'demonstration',\n  title: 'Test modal from context',\n  innerProps: {\n    modalBody:\n      'This modal was defined in ModalsProvider, you can open it anywhere in you app with useModals hook',\n  },\n});\ncloseModal('demonstration');\n"})}),"\n",(0,t.jsx)(e.h2,{id:"content-modals",children:"Content modals"}),"\n",(0,t.jsxs)(e.p,{children:["With ",(0,t.jsx)(e.code,{children:"modals.open"})," function you can open a modal with any content:"]}),"\n",(0,t.jsx)(n,{data:p}),"\n",(0,t.jsx)(e.h2,{id:"multiple-opened-modals",children:"Multiple opened modals"}),"\n",(0,t.jsxs)(e.p,{children:["You can open multiple layers of modals. Every opened modal is added as first element in modals queue.\nTo close all opened modals call ",(0,t.jsx)(e.code,{children:"modals.closeAll()"})," function:"]}),"\n",(0,t.jsx)(n,{data:h}),"\n",(0,t.jsx)(e.h2,{id:"modal-props",children:"Modal props"}),"\n",(0,t.jsxs)(e.p,{children:["You can pass props down to the ",(0,t.jsx)(e.a,{href:"/core/modal",children:"Modal"})," component by adding them to the\nargument of every ",(0,t.jsx)(e.code,{children:"modals.x"})," function. Example of setting ",(0,t.jsx)(e.code,{children:"radius"}),", ",(0,t.jsx)(e.code,{children:"size"})," and ",(0,t.jsx)(e.code,{children:"withCloseButton"}),"\nprops:"]}),"\n",(0,t.jsx)(n,{data:f}),"\n",(0,t.jsx)(e.h2,{id:"dynamic-content-and-the-modals-manager",children:"Dynamic Content and the modals manager"}),"\n",(0,t.jsx)(e.p,{children:"Note that when using the Modals manager, dynamic content is not supported.\nOnce modal is opened, a snapshot is saved into internal state and cannot be updated."}),"\n",(0,t.jsx)(e.p,{children:"If you intend to have dynamic content in modals, either:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Use internal component state, or"}),"\n",(0,t.jsx)(e.li,{children:"Use the modal component instead of modals manager"}),"\n"]})]})}function M(){let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(C,{...o,children:(0,t.jsx)(y,{...o})})}function w(o,e){throw Error("Expected "+(e?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(o){o.O(0,[61177,66748,11340,92888,49774,40179],function(){return o(o.s=27775)}),_N_E=o.O()}]);