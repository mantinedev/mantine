(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7372],{33507:function(e,o,n){"use strict";n.d(o,{Z:function(){return t}});var t=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,o,n){"use strict";n.d(o,{Z:function(){return t}});var t=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,o,n){"use strict";n.d(o,{Z:function(){return t}});var t=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,o,n){"use strict";n.d(o,{Z:function(){return t}});var t=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,o,n){"use strict";n.d(o,{Z:function(){return t}});var t=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,o,n){"use strict";n.d(o,{Z:function(){return t}});var t=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,o,n){"use strict";n.d(o,{Z:function(){return t}});var t=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},57258:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/others/modals",function(){return n(77913)}])},77913:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return P}});var t=n(85893),l=n(11151),a=n(19905),d=n(9904),i=n(67294),r=n(72039),s=n(14469),c=n(94478),m=n(30644);let u=`
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
`,p={type:"code",centered:!0,component:function(){let e=()=>c.qk.openConfirmModal({modalId:"test-id",title:"Please confirm your action",children:i.createElement(r.x,{size:"sm"},"This action is so important that you are required to confirm it with a modal. Please click one of these buttons to proceed."),onCancel:()=>m.N9.show({title:"Canceled",message:"Confirm modal was canceled",color:"gray"}),onConfirm:()=>m.N9.show({title:"Confirmed",message:"Confirm modal was confirmed",color:"teal"})});return i.createElement(s.z,{onClick:e},"Open confirm modal")},code:u},h=`
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
`,f={type:"code",centered:!0,component:function(){let e=()=>c.qk.openConfirmModal({title:"Delete your profile",centered:!0,children:i.createElement(r.x,{size:"sm"},"Are you sure you want to delete your profile? This action is destructive and you will have to contact support to restore your data."),labels:{confirm:"Delete account",cancel:"No don't delete it"},confirmProps:{color:"red"},onCancel:()=>m.N9.show({title:"Canceled",message:"Delete modal was canceled",color:"gray"}),onConfirm:()=>m.N9.show({title:"Deleted",message:"Delete modal was confirmed",color:"red"})});return i.createElement(s.z,{onClick:e,color:"red"},"Delete account")},code:h},x=`
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
`,y={type:"code",centered:!0,component:function(){return i.createElement(s.z,{onClick:()=>c.qk.openContextModal({modal:"demonstration",title:"Test modal from context",innerProps:{modalBody:"This modal was defined in ModalsProvider, you can open it anywhere in you app with useModals hook"}})},"Open demonstration context modal")},code:x};var M=n(50780);let v=`
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
`,j={type:"code",centered:!0,component:function(){return i.createElement(s.z,{onClick:()=>{c.qk.open({title:"Subscribe to newsletter",children:i.createElement(i.Fragment,null,i.createElement(M.o,{label:"Your email",placeholder:"Your email","data-autofocus":!0}),i.createElement(s.z,{fullWidth:!0,onClick:()=>c.qk.closeAll(),mt:"md"},"Submit"))})}},"Open content modal")},code:v},C=`
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
`,g={type:"code",centered:!0,component:function(){return i.createElement(s.z,{onClick:()=>c.qk.openConfirmModal({title:"Please confirm your action",closeOnConfirm:!1,labels:{confirm:"Next modal",cancel:"Close modal"},children:i.createElement(r.x,{size:"sm"},"This action is so important that you are required to confirm it with a modal. Please click one of these buttons to proceed."),onConfirm:()=>c.qk.openConfirmModal({title:"This is modal at second layer",labels:{confirm:"Close modal",cancel:"Back"},closeOnConfirm:!1,children:i.createElement(r.x,{size:"sm"},"When this modal is closed modals state will revert to first modal"),onConfirm:c.qk.closeAll})})},"Open multiple steps modal")},code:C},k=(0,a.A)(d.us.Modals);function w(e){let o=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",a:"a"},(0,l.ah)(),e.components),{InstallScript:n,Demo:a}=o;return a||b("Demo",!0),n||b("InstallScript",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n,{packages:"@mantine/modals"}),"\n",(0,t.jsx)(o.h2,{id:"setup-modalsprovider",children:"Setup ModalsProvider"}),"\n",(0,t.jsxs)(o.p,{children:["Wrap your app with ",(0,t.jsx)(o.code,{children:"ModalsProvider"})," component:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\nimport { ModalsProvider } from '@mantine/modals';\n\nfunction Demo() {\n  return (\n    <MantineProvider>\n      <ModalsProvider>\n        <App />\n      </ModalsProvider>\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"confirm-modal",children:"Confirm modal"}),"\n",(0,t.jsxs)(o.p,{children:["@mantine/modals package includes special modal that can be used for confirmations.\nComponent includes confirm and cancel buttons and supports children to display additional\ninformation about action. Use ",(0,t.jsx)(o.code,{children:"openConfirmModal"})," function to open a confirm modal:"]}),"\n",(0,t.jsx)(a,{data:p}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"openConfirmModal"})," function accepts one argument with following properties:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"modalId"})," – modal id, defaults to random id, can be used to close modal programmatically"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"children"})," – additional modal content displayed before actions"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"onCancel"})," – called when cancel button is clicked"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"onConfirm"})," – called when confirm button is clicked"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"closeOnConfirm"})," – should modal be closed when confirm button is clicked, defaults to ",(0,t.jsx)(o.code,{children:"true"})]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"closeOnCancel"})," – should modal be closed when cancel button is clicked, defaults to ",(0,t.jsx)(o.code,{children:"true"})]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"cancelProps"})," – cancel button props"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"confirmProps"})," – confirm button props"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"groupProps"})," – buttons ",(0,t.jsx)(o.a,{href:"/core/group/",children:"Group"})," props"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"labels"})," – cancel and confirm buttons labels, can be defined on ModalsProvider"]}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:"Using this properties you can customize confirm modal to match current context requirements:"}),"\n",(0,t.jsx)(a,{data:f}),"\n",(0,t.jsxs)(o.p,{children:["To setup shared labels for confirm modals set ",(0,t.jsx)(o.code,{children:"labels"})," on ",(0,t.jsx)(o.code,{children:"ModalsProvider"}),":"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { ModalsProvider } from '@mantine/modals';\n\nfunction Demo() {\n  return (\n    <ModalsProvider labels={{ confirm: 'Submit', cancel: 'Cancel' }}>\n      <App />\n    </ModalsProvider>\n  );\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"context-modals",children:"Context modals"}),"\n",(0,t.jsx)(o.p,{children:"You can define any amount of modals in ModalsProvider context:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { ContextModalProps, ModalsProvider } from '@mantine/modals';\nimport { Text, Button } from '@mantine/core';\n\nconst TestModal = ({ context, id, innerProps }: ContextModalProps<{ modalBody: string }>) => (\n  <>\n    <Text size=\"sm\">{innerProps.modalBody}</Text>\n    <Button fullWidth mt=\"md\" onClick={() => context.closeModal(id)}>\n      Close modal\n    </Button>\n  </>\n);\n\nfunction Demo() {\n  return (\n    <ModalsProvider modals={{ demonstration: TestModal /* ...other modals */ }}>\n      <App />\n    </ModalsProvider>\n  );\n}\n"})}),"\n",(0,t.jsxs)(o.p,{children:["And then open one of these modals with ",(0,t.jsx)(o.code,{children:"modals.openContextModal"})," function.\n",(0,t.jsx)(o.code,{children:"modals.openContextModal"})," function accepts 2 arguments: modal key (should match one defined on ModalsProvider) and modal props:"]}),"\n",(0,t.jsx)(a,{data:y}),"\n",(0,t.jsx)(o.h2,{id:"typesafe-context-modals",children:"Typesafe context modals"}),"\n",(0,t.jsxs)(o.p,{children:["By default ",(0,t.jsx)(o.code,{children:"innerProps"})," and ",(0,t.jsx)(o.code,{children:"modal"})," are not typesafe. You can add typesafety with a Typescript module declaration."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:'const TestModal = ({ context, id, innerProps }: ContextModalProps<{ modalBody: string }>) => (\n  <>\n    <Text size="sm">{innerProps.modalBody}</Text>\n    <Button fullWidth mt="md" onClick={() => context.closeModal(id)}>\n      Close modal\n    </Button>\n  </>\n);\nconst modals = {\n  demonstration: TestModal,\n  /* ...other modals */\n};\ndeclare module \'@mantine/modals\' {\n  export interface MantineModalsOverride {\n    modals: typeof modals;\n  }\n}\nfunction Demo() {\n  return (\n    <ModalsProvider modals={modals}>\n      <App />\n    </ModalsProvider>\n  );\n}\n'})}),"\n",(0,t.jsxs)(o.p,{children:["Typesafe context modals will force you to use the correct types for ",(0,t.jsx)(o.code,{children:"openContextModal"}),":"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { openContextModal, closeModal } from '@mantine/modals';\nopenContextModal({\n  modal: 'demonstration',\n  title: 'Test modal from context',\n  innerProps: {\n    modalBody:\n      'This modal was defined in ModalsProvider, you can open it anywhere in you app with useModals hook',\n  },\n});\ncloseModal('demonstration');\n"})}),"\n",(0,t.jsx)(o.h2,{id:"content-modals",children:"Content modals"}),"\n",(0,t.jsxs)(o.p,{children:["With ",(0,t.jsx)(o.code,{children:"modals.open"})," function you can open a modal with any content:"]}),"\n",(0,t.jsx)(a,{data:j}),"\n",(0,t.jsx)(o.h2,{id:"multiple-opened-modals",children:"Multiple opened modals"}),"\n",(0,t.jsxs)(o.p,{children:["You can open multiple layers of modals. Every opened modal is added as first element in modals queue.\nTo close all opened modals call ",(0,t.jsx)(o.code,{children:"modals.closeAll()"})," function:"]}),"\n",(0,t.jsx)(a,{data:g}),"\n",(0,t.jsx)(o.h2,{id:"dynamic-content-and-the-modals-manager",children:"Dynamic Content and the modals manager"}),"\n",(0,t.jsx)(o.p,{children:"Note that when using the Modals manager, dynamic content is not supported.\nOnce modal is opened, a snapshot is saved into internal state and cannot be updated."}),"\n",(0,t.jsx)(o.p,{children:"If you intend to have dynamic content in modals, either:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"Use internal component state, or"}),"\n",(0,t.jsx)(o.li,{children:"Use the modal component instead of modals manager"}),"\n"]})]})}var P=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(k,Object.assign({},e,{children:(0,t.jsx)(w,e)}))};function b(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=57258)}),_N_E=e.O()}]);