import { useState } from 'react';
import { Button, Group, TextInput, Tour } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button, Group, TextInput, Tour } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(false);
  const [step, setStep] = useState(0);

  return (
    <>
      <Group>
        <Button id="labels-target-1">Primer objetivo</Button>
        <TextInput id="labels-target-2" placeholder="Segundo objetivo" />
      </Group>

      <Button mt="md" onClick={() => { setStep(0); setActive(true); }}>
        Iniciar recorrido
      </Button>

      <Tour
        active={active}
        step={step}
        onStepChange={setStep}
        onClose={() => setActive(false)}
        labels={{
          next: 'Siguiente',
          back: 'Anterior',
          skip: 'Omitir',
          close: 'Cerrar',
          stepCounter: (current, total) => \`\${current} de \${total}\`,
        }}
      >
        <Tour.Step target="#labels-target-1" title="Paso 1">
          Este es el primer paso del recorrido.
        </Tour.Step>
        <Tour.Step target="#labels-target-2" title="Paso 2">
          Este es el segundo paso del recorrido.
        </Tour.Step>
      </Tour>
    </>
  );
}
`;

function Demo() {
  const [active, setActive] = useState(false);
  const [step, setStep] = useState(0);

  return (
    <>
      <Group>
        <Button id="labels-target-1">Primer objetivo</Button>
        <TextInput id="labels-target-2" placeholder="Segundo objetivo" />
      </Group>

      <Button
        mt="md"
        onClick={() => {
          setStep(0);
          setActive(true);
        }}
      >
        Iniciar recorrido
      </Button>

      <Tour
        active={active}
        step={step}
        onStepChange={setStep}
        onClose={() => setActive(false)}
        labels={{
          next: 'Siguiente',
          back: 'Anterior',
          skip: 'Omitir',
          close: 'Cerrar',
          stepCounter: (current, total) => `${current} de ${total}`,
        }}
      >
        <Tour.Step target="#labels-target-1" title="Paso 1">
          Este es el primer paso del recorrido.
        </Tour.Step>
        <Tour.Step target="#labels-target-2" title="Paso 2">
          Este es el segundo paso del recorrido.
        </Tour.Step>
      </Tour>
    </>
  );
}

export const labels: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
