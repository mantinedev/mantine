import { PhoneInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { PhoneInput } from '@mantine/core';

const COUNTRIES_ES: Record<string, string> = {
  us: 'Estados Unidos',
  gb: 'Reino Unido',
  es: 'España',
  mx: 'México',
  ar: 'Argentina',
};

function Demo() {
  return (
    <PhoneInput
      label="Número de teléfono"
      placeholder="Tu número de teléfono"
      defaultCountry="es"
      onlyCountries={['us', 'gb', 'es', 'mx', 'ar']}
      nothingFoundMessage="No se encontraron países"
      renderFlag={(country) => (
        <img
          src={\`https://hatscripts.github.io/circle-flags/flags/\${country?.iso2 ?? 'xx'}.svg\`}
          alt={country ? COUNTRIES_ES[country.iso2] ?? country.name : 'Seleccionar país'}
          style={{ width: 20, height: 20, borderRadius: 20 }}
        />
      )}
      renderCountryOption={(country) => (
        <span style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%' }}>
          <img
            src={\`https://hatscripts.github.io/circle-flags/flags/\${country.iso2}.svg\`}
            alt={COUNTRIES_ES[country.iso2] ?? country.name}
            style={{ width: 20, height: 20, borderRadius: 20 }}
          />
          <span style={{ flex: 1 }}>{COUNTRIES_ES[country.iso2] ?? country.name}</span>
          <span style={{ opacity: 0.5, fontSize: 'var(--mantine-font-size-xs)' }}>
            +{country.dialCode}
          </span>
        </span>
      )}
    />
  );
}
`;

const COUNTRIES_ES: Record<string, string> = {
  us: 'Estados Unidos',
  gb: 'Reino Unido',
  es: 'España',
  mx: 'México',
  ar: 'Argentina',
};

function Demo() {
  return (
    <PhoneInput
      label="Número de teléfono"
      placeholder="Tu número de teléfono"
      defaultCountry="es"
      onlyCountries={['us', 'gb', 'es', 'mx', 'ar']}
      nothingFoundMessage="No se encontraron países"
      renderFlag={(country) => (
        <img
          src={`https://hatscripts.github.io/circle-flags/flags/${country?.iso2 ?? 'xx'}.svg`}
          alt={country ? (COUNTRIES_ES[country.iso2] ?? country.name) : 'Seleccionar país'}
          style={{ width: 20, height: 20, borderRadius: 20 }}
        />
      )}
      renderCountryOption={(country) => (
        <span style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%' }}>
          <img
            src={`https://hatscripts.github.io/circle-flags/flags/${country.iso2}.svg`}
            alt={COUNTRIES_ES[country.iso2] ?? country.name}
            style={{ width: 20, height: 20, borderRadius: 20 }}
          />
          <span style={{ flex: 1 }}>{COUNTRIES_ES[country.iso2] ?? country.name}</span>
          <span style={{ opacity: 0.5, fontSize: 'var(--mantine-font-size-xs)' }}>
            +{country.dialCode}
          </span>
        </span>
      )}
    />
  );
}

export const localization: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
