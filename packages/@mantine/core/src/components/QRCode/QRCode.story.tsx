import { QRCode } from './QRCode';

export default { title: 'QRCode' };

export function Usage() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 20 }}>
      <QRCode value="https://mantine.dev" />
      <div style={{ width: 160, height: 160 }}>
        <QRCode value="https://mantine.dev" unstyled />
      </div>
    </div>
  );
}

export function Sizes() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 20, alignItems: 'flex-start' }}>
      <QRCode value="https://mantine.dev" size={100} />
      <QRCode value="https://mantine.dev" size={160} />
      <QRCode value="https://mantine.dev" size={240} />
    </div>
  );
}

export function Colors() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 20 }}>
      <QRCode value="https://mantine.dev" color="blue.8" bg="blue.0" />
      <QRCode value="https://mantine.dev" color="var(--mantine-color-grape-9)" />
    </div>
  );
}

export function ErrorCorrection() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 20 }}>
      {(['L', 'M', 'Q', 'H'] as const).map((level) => (
        <QRCode key={level} value="https://mantine.dev" errorCorrectionLevel={level} />
      ))}
    </div>
  );
}

export function WithLogo() {
  return (
    <div style={{ padding: 40 }}>
      <QRCode
        value="https://mantine.dev"
        size={240}
        errorCorrectionLevel="H"
        logo={
          <div
            style={{
              width: '100%',
              height: '100%',
              background: 'var(--mantine-color-blue-6)',
              borderRadius: 4,
            }}
          />
        }
      />
    </div>
  );
}

export function EmptyValue() {
  return (
    <div style={{ padding: 40 }}>
      <QRCode value="" />
    </div>
  );
}

export function LongValue() {
  return (
    <div style={{ padding: 40 }}>
      <QRCode value={'a'.repeat(2000)} size={400} />
    </div>
  );
}

export function OverCapacity() {
  return (
    <div style={{ padding: 40 }}>
      <QRCode value={'a'.repeat(3000)} />
    </div>
  );
}

export function StringSize() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 20, alignItems: 'flex-start', width: 600 }}>
      <QRCode value="https://mantine.dev" size="12rem" />
      <QRCode value="https://mantine.dev" size="50%" />
    </div>
  );
}

export function DarkScheme() {
  return (
    <div
      data-mantine-color-scheme="dark"
      style={{ padding: 40, background: 'var(--mantine-color-dark-7)' }}
    >
      <QRCode value="https://mantine.dev" />
    </div>
  );
}
