(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,o=>{"use strict";var e=Object.defineProperty;o.s(["__exportAll",0,(o,n)=>{let t={};for(var l in o)e(t,l,{get:o[l],enumerable:!0});return n||e(t,Symbol.toStringTag,{value:"Module"}),t}])},322091,o=>{"use strict";var e,n=o.i(417241),t=o.i(57807);let[l,d]=(e="mantine-modals",[function(o){let t=Object.keys(o).reduce((n,t)=>(n[`${e}:${t}`]=e=>o[t](e.detail),n),{});(0,n.useIsomorphicEffect)(()=>(Object.keys(t).forEach(o=>{window.removeEventListener(o,t[o]),window.addEventListener(o,t[o])}),()=>Object.keys(t).forEach(o=>{window.removeEventListener(o,t[o])})),[t])},function(o){return(...n)=>{var t,l;return t=`${e}:${String(o)}`,l=n[0],void window.dispatchEvent(new CustomEvent(t,{detail:l}))}}]),a=d("closeModal"),i=d("closeAllModals");o.s(["modals",0,{open:o=>{let e=o.modalId||(0,t.randomId)();return d("openModal")({...o,modalId:e}),e},close:a,closeAll:i,openConfirmModal:o=>{let e=o.modalId||(0,t.randomId)();return d("openConfirmModal")({...o,modalId:e}),e},openContextModal:o=>{let e=o.modalId||(0,t.randomId)();return d("openContextModal")({...o,modalId:e}),e},updateModal:o=>d("updateModal")(o),updateContextModal:o=>d("updateContextModal")(o)},"useModalsEvents",0,l],322091)},859087,o=>{"use strict";var e=o.i(648863),n=o.i(485108),t=o.i(883364),l=o.i(391398),d=o.i(200140),a=o.i(322091);let i={type:"code",centered:!0,component:function(){return(0,l.jsx)(n.Button,{onClick:()=>a.modals.openConfirmModal({modalId:"test-id",title:"Please confirm your action",children:(0,l.jsx)(t.Text,{size:"sm",children:"This action is so important that you are required to confirm it with a modal. Please click one of these buttons to proceed."}),onCancel:()=>d.notifications.show({title:"Canceled",message:"Confirm modal was canceled",color:"gray"}),onConfirm:()=>d.notifications.show({title:"Confirmed",message:"Confirm modal was confirmed",color:"teal"})}),children:"Open confirm modal"})},code:`
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
`},s={type:"code",centered:!0,component:function(){return(0,l.jsx)(n.Button,{onClick:()=>a.modals.openContextModal({modal:"demonstration",title:"Test modal from context",innerProps:{modalBody:"This modal was defined in ModalsProvider, you can open it anywhere in you app with useModals hook"}}),children:"Open demonstration context modal"})},code:`
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
`},r={type:"code",centered:!0,component:function(){return(0,l.jsx)(n.Button,{onClick:()=>a.modals.openConfirmModal({title:"Delete your profile",centered:!0,children:(0,l.jsx)(t.Text,{size:"sm",children:"Are you sure you want to delete your profile? This action is destructive and you will have to contact support to restore your data."}),labels:{confirm:"Delete account",cancel:"No don't delete it"},confirmProps:{color:"red"},onCancel:()=>d.notifications.show({title:"Canceled",message:"Delete modal was canceled",color:"gray"}),onConfirm:()=>d.notifications.show({title:"Deleted",message:"Delete modal was confirmed",color:"red"})}),color:"red",children:"Delete account"})},code:`
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
`},c={type:"code",centered:!0,component:function(){return(0,l.jsx)(n.Button,{onClick:()=>a.modals.openConfirmModal({title:"Please confirm your action",closeOnConfirm:!1,labels:{confirm:"Next modal",cancel:"Close modal"},children:(0,l.jsx)(t.Text,{size:"sm",children:"This action is so important that you are required to confirm it with a modal. Please click one of these buttons to proceed."}),onConfirm:()=>a.modals.openConfirmModal({title:"This is modal at second layer",labels:{confirm:"Close modal",cancel:"Back"},closeOnConfirm:!1,children:(0,l.jsx)(t.Text,{size:"sm",children:"When this modal is closed modals state will revert to first modal"}),onConfirm:a.modals.closeAll})}),children:"Open multiple steps modal"})},code:`
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
`};var m=o.i(841209);let u={type:"code",centered:!0,component:function(){return(0,l.jsx)(n.Button,{onClick:()=>{a.modals.open({title:"Subscribe to newsletter",children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(m.TextInput,{label:"Your email",placeholder:"Your email","data-autofocus":!0}),(0,l.jsx)(n.Button,{fullWidth:!0,onClick:()=>a.modals.closeAll(),mt:"md",children:"Submit"})]})})},children:"Open content modal"})},code:`
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
`},p={type:"code",centered:!0,component:function(){return(0,l.jsx)(n.Button,{onClick:()=>a.modals.openConfirmModal({modalId:"test-id",title:"Please confirm your action",size:"sm",withCloseButton:!1,children:(0,l.jsx)(t.Text,{size:"sm",children:"This action is so important that you are required to confirm it with a modal. Please click one of these buttons to proceed."}),onCancel:()=>d.notifications.show({title:"Canceled",message:"Confirm modal was canceled",color:"gray"}),onConfirm:()=>d.notifications.show({title:"Confirmed",message:"Confirm modal was confirmed",color:"teal"})}),children:"Open confirm modal"})},code:`
import { Button, Text } from '@mantine/core';
import { modals } from '@mantine/modals';

function Demo() {
  const openModal = () => modals.openConfirmModal({
    title: 'Please confirm your action',
    size: 'sm',
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
`},h={type:"code",centered:!0,component:function(){return(0,l.jsx)(n.Button,{onClick:()=>{let o=a.modals.open({title:"Initial Modal Title",children:(0,l.jsx)(t.Text,{size:"sm",children:"This text will update after 2 seconds."})});setTimeout(()=>{a.modals.updateModal({modalId:o,title:"Updated Modal Title",children:(0,l.jsx)(t.Text,{size:"sm",children:"This is the updated content of the modal."})})},2e3)},children:"Open updating modal"})},code:`
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
`},f={type:"code",centered:!0,component:function(){return(0,l.jsx)(n.Button,{onClick:()=>{let o=a.modals.openContextModal({modal:"asyncDemonstration",title:"Processing...",closeOnEscape:!1,closeOnClickOutside:!1,closeButtonProps:{disabled:!0},innerProps:{modalBody:"You cannot close this modal until 2 seconds have passed.",loading:!0}});setTimeout(()=>{a.modals.updateContextModal({modalId:o,title:"Processing Complete!",closeOnEscape:!0,closeOnClickOutside:!0,closeButtonProps:{disabled:!1},innerProps:{modalBody:"You can now close the modal.",loading:!1}})},2e3)},children:"Open updating context modal"})},code:`
import { Button, Text, Stack, Center, Loader } from '@mantine/core';
import { modals, ContextModalProps, ModalsProvider } from '@mantine/modals';
import { CheckIcon } from '@phosphor-icons/react';

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
          <CheckIcon size={23} color="var(--mantine-color-teal-6)" />
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
`};var x=(0,e.__exportAll)({confirm:()=>i,confirmCustomize:()=>r,content:()=>u,context:()=>s,modalProps:()=>p,multipleSteps:()=>c,updateContextModal:()=>f,updateModal:()=>h});o.s(["ModalsDemos",0,x],859087)},376911,o=>{"use strict";var e=o.i(391398),n=o.i(38856),t=o.i(859087);o.i(603441);var l=o.i(62558);o.i(457450);var d=o.i(418026);let a=(0,l.Layout)(d.MDX_DATA.Modals);function i(o){let l={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.useMDXComponents)(),...o.components},{Demo:d,InstallScript:a}=l;return d||s("Demo",!0),a||s("InstallScript",!0),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l.h2,{id:"installation",children:"Installation"}),"\n",(0,e.jsx)(a,{packages:"@mantine/modals"}),"\n",(0,e.jsx)(l.h2,{id:"setup-modalsprovider",children:"Setup ModalsProvider"}),"\n",(0,e.jsxs)(l.p,{children:["Wrap your app with ",(0,e.jsx)(l.code,{children:"ModalsProvider"})," component:"]}),"\n",(0,e.jsx)(l.pre,{children:(0,e.jsx)(l.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\nimport { ModalsProvider } from '@mantine/modals';\n\nfunction Demo() {\n  return (\n    <MantineProvider>\n      <ModalsProvider>{/* Your app here */}</ModalsProvider>\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,e.jsx)(l.h2,{id:"confirm-modal",children:"Confirm modal"}),"\n",(0,e.jsxs)(l.p,{children:["The @mantine/modals package includes a special modal that can be used for confirmations.\nThe component includes confirm and cancel buttons and supports children to display additional\ninformation about the action. Use the ",(0,e.jsx)(l.code,{children:"openConfirmModal"})," function to open a confirm modal:"]}),"\n",(0,e.jsx)(d,{data:t.ModalsDemos.confirm}),"\n",(0,e.jsxs)(l.p,{children:[(0,e.jsx)(l.code,{children:"openConfirmModal"})," function accepts one argument with the following properties:"]}),"\n",(0,e.jsxs)(l.ul,{children:["\n",(0,e.jsxs)(l.li,{children:[(0,e.jsx)(l.code,{children:"modalId"})," – modal id, defaults to a random id, can be used to close the modal programmatically"]}),"\n",(0,e.jsxs)(l.li,{children:[(0,e.jsx)(l.code,{children:"children"})," – additional modal content displayed before actions"]}),"\n",(0,e.jsxs)(l.li,{children:[(0,e.jsx)(l.code,{children:"onCancel"})," – called when the cancel button is clicked"]}),"\n",(0,e.jsxs)(l.li,{children:[(0,e.jsx)(l.code,{children:"onConfirm"})," – called when the confirm button is clicked"]}),"\n",(0,e.jsxs)(l.li,{children:[(0,e.jsx)(l.code,{children:"closeOnConfirm"})," – should the modal be closed when the confirm button is clicked, defaults to ",(0,e.jsx)(l.code,{children:"true"})]}),"\n",(0,e.jsxs)(l.li,{children:[(0,e.jsx)(l.code,{children:"closeOnCancel"})," – should the modal be closed when the cancel button is clicked, defaults to ",(0,e.jsx)(l.code,{children:"true"})]}),"\n",(0,e.jsxs)(l.li,{children:[(0,e.jsx)(l.code,{children:"cancelProps"})," – cancel button props"]}),"\n",(0,e.jsxs)(l.li,{children:[(0,e.jsx)(l.code,{children:"confirmProps"})," – confirm button props"]}),"\n",(0,e.jsxs)(l.li,{children:[(0,e.jsx)(l.code,{children:"groupProps"})," – buttons ",(0,e.jsx)(l.a,{href:"/core/group/",children:"Group"})," props"]}),"\n",(0,e.jsxs)(l.li,{children:[(0,e.jsx)(l.code,{children:"labels"})," – cancel and confirm button labels, can be defined on ModalsProvider"]}),"\n"]}),"\n",(0,e.jsx)(l.p,{children:"Using these properties, you can customize the confirm modal to match current context requirements:"}),"\n",(0,e.jsx)(d,{data:t.ModalsDemos.confirmCustomize}),"\n",(0,e.jsxs)(l.p,{children:["To set up shared labels for confirm modals, set ",(0,e.jsx)(l.code,{children:"labels"})," on ",(0,e.jsx)(l.code,{children:"ModalsProvider"}),":"]}),"\n",(0,e.jsx)(l.pre,{children:(0,e.jsx)(l.code,{className:"language-tsx",children:"import { ModalsProvider } from '@mantine/modals';\n\nfunction Demo() {\n  return (\n    <ModalsProvider labels={{ confirm: 'Submit', cancel: 'Cancel' }}>\n      {/* Your app here */}\n    </ModalsProvider>\n  );\n}\n"})}),"\n",(0,e.jsx)(l.h2,{id:"context-modals",children:"Context modals"}),"\n",(0,e.jsx)(l.p,{children:"You can define any number of modals in the ModalsProvider context:"}),"\n",(0,e.jsx)(l.pre,{children:(0,e.jsx)(l.code,{className:"language-tsx",children:"import { Button, Text } from '@mantine/core';\nimport { ContextModalProps, ModalsProvider } from '@mantine/modals';\n\nconst TestModal = ({\n  context,\n  id,\n  innerProps,\n}: ContextModalProps<{ modalBody: string }>) => (\n  <>\n    <Text size=\"sm\">{innerProps.modalBody}</Text>\n    <Button fullWidth mt=\"md\" onClick={() => context.closeModal(id)}>\n      Close modal\n    </Button>\n  </>\n);\n\nfunction Demo() {\n  return (\n    <ModalsProvider\n      modals={{ demonstration: TestModal /* ...other modals */ }}\n    >\n      {/* Your app here */}\n    </ModalsProvider>\n  );\n}\n"})}),"\n",(0,e.jsxs)(l.p,{children:["And then open one of these modals with the ",(0,e.jsx)(l.code,{children:"modals.openContextModal"})," function.\nThe ",(0,e.jsx)(l.code,{children:"modals.openContextModal"})," function accepts 2 arguments: modal key (should match one defined on ModalsProvider) and modal props:"]}),"\n",(0,e.jsx)(d,{data:t.ModalsDemos.context}),"\n",(0,e.jsx)(l.h2,{id:"typesafe-context-modals",children:"Typesafe context modals"}),"\n",(0,e.jsxs)(l.p,{children:["By default, ",(0,e.jsx)(l.code,{children:"innerProps"})," and ",(0,e.jsx)(l.code,{children:"modal"})," are not typesafe. You can add type safety with a TypeScript module declaration."]}),"\n",(0,e.jsx)(l.pre,{children:(0,e.jsx)(l.code,{className:"language-tsx",children:'const TestModal = ({\n  context,\n  id,\n  innerProps,\n}: ContextModalProps<{ modalBody: string }>) => (\n  <>\n    <Text size="sm">{innerProps.modalBody}</Text>\n    <Button fullWidth mt="md" onClick={() => context.closeModal(id)}>\n      Close modal\n    </Button>\n  </>\n);\nconst modals = {\n  demonstration: TestModal,\n  /* ...other modals */\n};\ndeclare module \'@mantine/modals\' {\n  export interface MantineModalsOverride {\n    modals: typeof modals;\n  }\n}\nfunction Demo() {\n  return (\n    <ModalsProvider modals={modals}>\n      {/* Your app here */}\n    </ModalsProvider>\n  );\n}\n'})}),"\n",(0,e.jsxs)(l.p,{children:["Type-safe context modals will force you to use the correct types for ",(0,e.jsx)(l.code,{children:"openContextModal"}),":"]}),"\n",(0,e.jsx)(l.pre,{children:(0,e.jsx)(l.code,{className:"language-tsx",children:"import { closeModal, openContextModal } from '@mantine/modals';\n\nopenContextModal({\n  modal: 'demonstration',\n  title: 'Test modal from context',\n  innerProps: {\n    modalBody:\n      'This modal was defined in ModalsProvider, you can open it anywhere in your app with useModals hook',\n  },\n});\ncloseModal('demonstration');\n"})}),"\n",(0,e.jsx)(l.h2,{id:"content-modals",children:"Content modals"}),"\n",(0,e.jsxs)(l.p,{children:["With the ",(0,e.jsx)(l.code,{children:"modals.open"})," function, you can open a modal with any content:"]}),"\n",(0,e.jsx)(d,{data:t.ModalsDemos.content}),"\n",(0,e.jsx)(l.h2,{id:"multiple-opened-modals",children:"Multiple opened modals"}),"\n",(0,e.jsxs)(l.p,{children:["You can open multiple layers of modals. Every opened modal is added as the first element in the modals queue.\nTo close all opened modals, call the ",(0,e.jsx)(l.code,{children:"modals.closeAll()"})," function:"]}),"\n",(0,e.jsx)(d,{data:t.ModalsDemos.multipleSteps}),"\n",(0,e.jsx)(l.h2,{id:"modal-props",children:"Modal props"}),"\n",(0,e.jsxs)(l.p,{children:["You can pass props down to the ",(0,e.jsx)(l.a,{href:"/core/modal",children:"Modal"})," component by adding them to the\nargument of every ",(0,e.jsx)(l.code,{children:"modals.x"})," function. Example of setting the ",(0,e.jsx)(l.code,{children:"radius"}),", ",(0,e.jsx)(l.code,{children:"size"}),", and ",(0,e.jsx)(l.code,{children:"withCloseButton"}),"\nprops:"]}),"\n",(0,e.jsx)(d,{data:t.ModalsDemos.modalProps}),"\n",(0,e.jsx)(l.h2,{id:"dynamic-content-and-the-modals-manager",children:"Dynamic content and the modals manager"}),"\n",(0,e.jsx)(l.p,{children:"The modals manager allows you to dynamically update the content and properties of both standard and context modals after they are opened."}),"\n",(0,e.jsxs)(l.p,{children:["To update regular modals, use the ",(0,e.jsx)(l.code,{children:"modals.updateModal"})," function:"]}),"\n",(0,e.jsx)(d,{data:t.ModalsDemos.updateModal}),"\n",(0,e.jsxs)(l.p,{children:["Context modals can also be updated dynamically using ",(0,e.jsx)(l.code,{children:"modals.updateContextModal"}),":"]}),"\n",(0,e.jsx)(d,{data:t.ModalsDemos.updateContextModal})]})}function s(o,e){throw Error("Expected "+(e?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}o.s(["default",0,function(o={}){return(0,e.jsx)(a,{...o,children:(0,e.jsx)(i,{...o})})}])},547486,(o,e,n)=>{let t="/x/modals";(window.__NEXT_P=window.__NEXT_P||[]).push([t,()=>o.r(376911)]),e.hot&&e.hot.dispose(function(){window.__NEXT_P.push([t])})},648761,o=>{o.v(e=>Promise.all(["static/chunks/22379_btw709h.js"].map(e=>o.l(e))).then(()=>e(493594)))},828805,o=>{o.v(e=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(e=>o.l(e))).then(()=>e(879466)))}]);