import { useCallback, useRef, useState } from 'react';
import { DEFAULT_THEME, MantineSize } from '../../core';
import { Button } from '../Button';
import { PinInput } from './PinInput';

export default { title: 'PinInput' };

export function Usage() {
  const [value, setValue] = useState('');
  return (
    <div style={{ padding: 40 }}>
      <PinInput id="test-id" value={value} onChange={setValue} />
      <Button onClick={() => setValue('')}>Reset</Button>
    </div>
  );
}

const sleep = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export function AsyncReset() {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const login = useCallback(async (code: string) => {
    /* ... */
    await sleep(500);
    /* ... */

    throw new Error(`CodeMismatchException: ${code} is not valid`);
  }, []);

  const handleChange = useCallback(
    async (newValue: string) => {
      setValue(newValue);

      if (newValue.length !== 4) {
        return;
      }

      setIsLoading(true);

      await login(newValue)
        .then(() => {
          setErrorMessage('');
        })
        .catch((error) => {
          setValue('');
          if (error instanceof Error) {
            setErrorMessage(error.message);
          }
        });

      setIsLoading(false);
    },
    [login]
  );

  return (
    <>
      <PinInput disabled={isLoading} onChange={handleChange} value={value} />
      <div className="text-red-500">{errorMessage}</div>
      <pre>{JSON.stringify({ value }, null, 2)}</pre>
    </>
  );
}

export function InputRef() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div style={{ padding: 40 }}>
      <PinInput ref={inputRef} />
      <Button onClick={() => inputRef.current?.focus()}>Focus first input</Button>
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <PinInput unstyled />
    </div>
  );
}

export function OnComplete() {
  const [value, setValue] = useState('');
  return (
    <div style={{ padding: 40 }}>
      <PinInput length={5} onComplete={setValue} />
      Pin: {value}
    </div>
  );
}

export function ResetControlled() {
  const [value, setValue] = useState('1234');

  return (
    <div style={{ padding: 40 }}>
      <PinInput value={value} onChange={setValue} />
      <Button onClick={() => setValue('')}>Reset</Button>
    </div>
  );
}

export function ReadOnly() {
  return (
    <div style={{ padding: 40 }}>
      <PinInput readOnly />
    </div>
  );
}

export function Autofocus() {
  return (
    <div style={{ padding: 40 }}>
      <PinInput autoFocus />
    </div>
  );
}

export function Controlled() {
  const [value, setValue] = useState('');
  return (
    <div style={{ padding: 40 }}>
      <PinInput value={value} onChange={setValue} />
      Value: {value}
    </div>
  );
}

export function Mask() {
  const [value, setValue] = useState('');
  return (
    <div style={{ padding: 40 }}>
      <PinInput value={value} onChange={setValue} mask />
      Value: {value}
    </div>
  );
}

export function Sizes() {
  const sizes = Object.keys(DEFAULT_THEME.fontSizes).map((size) => (
    <PinInput size={size as MantineSize} key={size} mt="md" />
  ));
  return <div style={{ padding: 40 }}>{sizes}</div>;
}

export function Number() {
  return (
    <div style={{ padding: 40 }}>
      <PinInput type="number" />
    </div>
  );
}

export function Tab() {
  return (
    <div style={{ padding: 40 }}>
      <PinInput />
      <PinInput mt="md" />
    </div>
  );
}
