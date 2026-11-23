import { useStyles } from '../../core';
import { PhoneInputCountryData } from './phone-data';
import type { PhoneInputFactory } from './PhoneInput';

interface CountryOptionContentProps {
  country: PhoneInputCountryData;
  renderFlag?: (country: PhoneInputCountryData | null) => React.ReactNode;
  renderCountryOption?: (country: PhoneInputCountryData) => React.ReactNode;
  getStyles: ReturnType<typeof useStyles<PhoneInputFactory>>;
}

export function CountryOptionContent({
  country,
  renderFlag,
  renderCountryOption,
  getStyles,
}: CountryOptionContentProps) {
  if (renderCountryOption) {
    return <>{renderCountryOption(country)}</>;
  }

  return (
    <span {...getStyles('countryOption')}>
      {renderFlag && renderFlag(country)}
      <span {...getStyles('optionName')}>{country.name}</span>
      <span {...getStyles('optionDialCode')}>+{country.dialCode}</span>
    </span>
  );
}
