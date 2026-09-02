import { useState } from 'react';
import { Button } from '../Button';
import { Slider } from '../Slider';
import { TextInput } from '../TextInput';
import { Tour } from './Tour';

export default { title: 'Tour' };

export function Usage() {
  const [active, setActive] = useState(false);
  const [step, setStep] = useState(0);

  return (
    <div style={{ padding: 40 }}>
      <Button id="start-btn" onClick={() => setActive(true)}>
        Start Tour
      </Button>
      <TextInput id="search-input" placeholder="Search..." mt="md" />
      <Button id="action-btn" mt="md" variant="outline">
        Action
      </Button>

      <Tour
        active={active}
        step={step}
        onStepChange={setStep}
        onClose={() => {
          setActive(false);
          setStep(0);
        }}
      >
        <Tour.Step target="#start-btn" title="Welcome">
          Click this button to start the guided tour.
        </Tour.Step>
        <Tour.Step target="#search-input" title="Search">
          Use this input to search for items.
        </Tour.Step>
        <Tour.Step target="#action-btn" title="Take Action">
          Click here to perform an action.
        </Tour.Step>
      </Tour>
    </div>
  );
}

export function BeaconMode() {
  const [active] = useState(true);
  const [step, setStep] = useState(0);

  return (
    <div style={{ padding: 40 }}>
      <Button id="beacon-btn-1">First Target</Button>
      <TextInput id="beacon-input" placeholder="Second target" mt="md" />
      <Button id="beacon-btn-2" mt="md" variant="outline">
        Third Target
      </Button>

      <Tour active={active} step={step} onStepChange={setStep} mode="beacon" onClose={() => {}}>
        <Tour.Step target="#beacon-btn-1" title="First">
          This is the first beacon target.
        </Tour.Step>
        <Tour.Step target="#beacon-input" title="Second">
          This is the second beacon target.
        </Tour.Step>
        <Tour.Step target="#beacon-btn-2" title="Third">
          This is the third beacon target.
        </Tour.Step>
      </Tour>
    </div>
  );
}

export function NoOverlay() {
  const [active, setActive] = useState(false);
  const [step, setStep] = useState(0);

  return (
    <div style={{ padding: 40 }}>
      <Button id="no-overlay-btn" onClick={() => setActive(true)}>
        Start Tour
      </Button>
      <TextInput id="no-overlay-input" placeholder="Type here..." mt="md" />

      <Tour
        active={active}
        step={step}
        onStepChange={setStep}
        withOverlay={false}
        onClose={() => {
          setActive(false);
          setStep(0);
        }}
      >
        <Tour.Step target="#no-overlay-btn" title="No Overlay">
          This tour has no overlay behind it.
        </Tour.Step>
        <Tour.Step target="#no-overlay-input" title="Input Field">
          You can interact with the page freely.
        </Tour.Step>
      </Tour>
    </div>
  );
}

export function CenteredStep() {
  const [active, setActive] = useState(false);
  const [step, setStep] = useState(0);

  return (
    <div style={{ padding: 40 }}>
      <Button id="centered-btn" onClick={() => setActive(true)}>
        Start Tour
      </Button>

      <Tour
        active={active}
        step={step}
        onStepChange={setStep}
        onClose={() => {
          setActive(false);
          setStep(0);
        }}
      >
        <Tour.Step title="Welcome">
          This step has no target and appears centered on the screen.
        </Tour.Step>
        <Tour.Step target="#centered-btn" title="Button">
          Now the tooltip is anchored to this button.
        </Tour.Step>
      </Tour>
    </div>
  );
}

export function CustomLabels() {
  const [active, setActive] = useState(false);
  const [step, setStep] = useState(0);

  return (
    <div style={{ padding: 40 }}>
      <Button id="custom-labels-btn" onClick={() => setActive(true)}>
        Iniciar Tour
      </Button>
      <TextInput id="custom-labels-input" placeholder="Buscar..." mt="md" />
      <Button id="custom-labels-action" mt="md" variant="outline">
        Accion
      </Button>

      <Tour
        active={active}
        step={step}
        onStepChange={setStep}
        onClose={() => {
          setActive(false);
          setStep(0);
        }}
        labels={{
          next: 'Siguiente',
          back: 'Anterior',
          skip: 'Omitir',
          close: 'Cerrar',
          stepCounter: (current, total) => `${current} de ${total}`,
        }}
      >
        <Tour.Step target="#custom-labels-btn" title="Bienvenido">
          Haz clic aqui para iniciar el tour.
        </Tour.Step>
        <Tour.Step target="#custom-labels-input" title="Buscar">
          Usa este campo para buscar elementos.
        </Tour.Step>
        <Tour.Step target="#custom-labels-action" title="Accion">
          Haz clic aqui para realizar una accion.
        </Tour.Step>
      </Tour>
    </div>
  );
}

export function BeaconScroll() {
  const [active, setActive] = useState(false);

  return (
    <div style={{ padding: 40 }}>
      <Button onClick={() => setActive(true)}>Start beacon tour, then scroll the page</Button>
      <div style={{ height: 600 }} />
      <Button id="beacon-scroll-1">First target</Button>
      <div style={{ height: 600 }} />
      <TextInput id="beacon-scroll-2" placeholder="Second target" />
      <div style={{ height: 1200 }} />

      <Tour active={active} mode="beacon" defaultStep={-1} onClose={() => setActive(false)}>
        <Tour.Step target="#beacon-scroll-1" title="First">
          Beacons must stay attached to their targets while the page scrolls.
        </Tour.Step>
        <Tour.Step target="#beacon-scroll-2" title="Second">
          This one too.
        </Tour.Step>
      </Tour>
    </div>
  );
}

export function InteractiveTarget() {
  const [active, setActive] = useState(false);
  const [step, setStep] = useState(0);

  return (
    <div style={{ padding: 40 }}>
      <Button id="interactive-start" onClick={() => setActive(true)}>
        Start Tour
      </Button>
      <div id="interactive-slider" style={{ maxWidth: 400, marginTop: 40 }}>
        <Slider defaultValue={40} />
      </div>
      <TextInput id="interactive-input" placeholder="Arrow keys move the caret" mt="md" />

      <Tour
        active={active}
        step={step}
        onStepChange={setStep}
        withOverlayInteraction
        onClose={() => {
          setActive(false);
          setStep(0);
        }}
      >
        <Tour.Step target="#interactive-start" title="Welcome">
          Arrow keys navigate the tour from here.
        </Tour.Step>
        <Tour.Step target="#interactive-slider" title="Slider">
          Focus the slider thumb: arrow keys move the thumb and do not change the step.
        </Tour.Step>
        <Tour.Step target="#interactive-input" title="Input">
          Arrow keys inside the input move the caret only.
        </Tour.Step>
      </Tour>
    </div>
  );
}
