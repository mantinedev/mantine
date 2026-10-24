import { useState } from 'react';
import { PhoneInput } from './PhoneInput';

export default { title: 'PhoneInput' };

const renderFlag = (country: any) => (
  <img
    src={`https://hatscripts.github.io/circle-flags/flags/${country?.iso2 ?? 'xx'}.svg`}
    alt={country?.name ?? 'Select country'}
    style={{ width: 20, height: 20, borderRadius: 20 }}
  />
);

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 340 }}>
      <PhoneInput
        label="Phone number"
        placeholder="Your phone number"
        defaultCountry="us"
        renderFlag={renderFlag}
      />
    </div>
  );
}

export function NoDefaultCountry() {
  return (
    <div style={{ padding: 40, maxWidth: 340 }}>
      <PhoneInput label="No defaultCountry" placeholder="Your phone number" />
      <PhoneInput label="With chevron" placeholder="Your phone number" withChevron mt="md" />
      <PhoneInput
        label="Custom flag"
        placeholder="Your phone number"
        renderFlag={renderFlag}
        mt="md"
      />
      <PhoneInput label="Size xl" placeholder="Your phone number" size="xl" mt="md" />
    </div>
  );
}

export function DefaultValue() {
  return (
    <div style={{ padding: 40, maxWidth: 340 }}>
      <PhoneInput
        label="Phone number"
        defaultValue="+12025551234"
        defaultCountry="us"
        renderFlag={renderFlag}
      />
    </div>
  );
}

export function Controlled() {
  const [value, setValue] = useState('+44');
  return (
    <div style={{ padding: 40, maxWidth: 340 }}>
      <PhoneInput
        label="Phone number"
        value={value}
        onChange={(raw, details) => {
          setValue(raw);
          console.log('raw:', raw, 'details:', details);
        }}
        defaultCountry="gb"
        renderFlag={renderFlag}
      />
      <div style={{ marginTop: 16, fontSize: 14 }}>Raw value: {value}</div>
    </div>
  );
}

export function PreferredCountries() {
  return (
    <div style={{ padding: 40, maxWidth: 340 }}>
      <PhoneInput
        label="Phone number"
        preferredCountries={['us', 'gb', 'ca', 'au']}
        renderFlag={renderFlag}
      />
    </div>
  );
}

export function OnlyCountries() {
  return (
    <div style={{ padding: 40, maxWidth: 340 }}>
      <PhoneInput
        label="Phone number"
        onlyCountries={['us', 'gb', 'ca', 'au', 'de', 'fr']}
        renderFlag={renderFlag}
      />
    </div>
  );
}

export function ExcludeCountries() {
  return (
    <div style={{ padding: 40, maxWidth: 340 }}>
      <PhoneInput
        label="Phone number"
        excludeCountries={['us', 'gb']}
        defaultCountry="de"
        renderFlag={renderFlag}
      />
    </div>
  );
}

export function NoFlag() {
  return (
    <div style={{ padding: 40, maxWidth: 340 }}>
      <PhoneInput label="Phone number" defaultCountry="us" />
    </div>
  );
}

export function NotSearchable() {
  return (
    <div style={{ padding: 40, maxWidth: 340 }}>
      <PhoneInput label="Phone number" searchable={false} renderFlag={renderFlag} />
    </div>
  );
}

export function NotInternational() {
  return (
    <div style={{ padding: 40, maxWidth: 340 }}>
      <PhoneInput label="Phone number" international={false} renderFlag={renderFlag} />
    </div>
  );
}

export function WithError() {
  return (
    <div style={{ padding: 40, maxWidth: 340 }}>
      <PhoneInput label="Phone number" error="Invalid phone number" renderFlag={renderFlag} />
      <PhoneInput label="Phone number" error mt="md" renderFlag={renderFlag} />
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ padding: 40, maxWidth: 340 }}>
      <PhoneInput
        label="Phone number"
        disabled
        defaultValue="+12025551234"
        renderFlag={renderFlag}
      />
    </div>
  );
}

export function ReadOnly() {
  return (
    <div style={{ padding: 40, maxWidth: 340 }}>
      <PhoneInput
        label="Phone number"
        readOnly
        defaultValue="+12025551234"
        renderFlag={renderFlag}
      />
    </div>
  );
}

export function Sizes() {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'].map((size) => (
    <PhoneInput label={`Size ${size}`} size={size} key={size} mb="md" renderFlag={renderFlag} />
  ));
  return <div style={{ padding: 40, maxWidth: 340 }}>{sizes}</div>;
}

export function Unstyled() {
  return (
    <div style={{ padding: 40, maxWidth: 340 }}>
      <PhoneInput label="Phone number" unstyled renderFlag={renderFlag} />
    </div>
  );
}

export function OnCountryChange() {
  const [country, setCountry] = useState('');
  return (
    <div style={{ padding: 40, maxWidth: 340 }}>
      <PhoneInput
        label="Phone number"
        onCountryChange={(c) => {
          setCountry(`${c.name} (${c.iso2})`);
          console.log('Country changed:', c);
        }}
        renderFlag={renderFlag}
      />
      <div style={{ marginTop: 16, fontSize: 14 }}>Selected country: {country}</div>
    </div>
  );
}

export function DropdownOpened() {
  return (
    <div style={{ padding: 40, maxWidth: 340 }}>
      <PhoneInput
        label="Phone number"
        dropdownOpened
        onlyCountries={['us', 'gb', 'de', 'fr', 'ca']}
        renderFlag={renderFlag}
      />
    </div>
  );
}

export function WithinForm() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log('Form submitted');
      }}
      style={{ padding: 40, maxWidth: 340 }}
    >
      <PhoneInput label="Phone number" renderFlag={renderFlag} />
      <button type="submit" style={{ marginTop: 16 }}>
        Submit
      </button>
    </form>
  );
}

export function BottomOfThePage() {
  return (
    <div style={{ padding: 40, maxWidth: 340 }}>
      <div style={{ height: 1200 }} />
      <PhoneInput label="Phone number" renderFlag={renderFlag} />
      <div style={{ height: 1200 }} />
    </div>
  );
}
