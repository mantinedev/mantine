# PhoneInput

- Always set `defaultCountry` (`defaultCountry="us"`, or the country of the product's main
  audience). Without it the country button is empty and the dial code is unknown until the user
  picks a country.
- The value is the raw international number (`+12025550123`); the input displays it formatted
  (`+1 (202) 555-0123`). Show the formatted value in summaries, not the raw one.
- `preferredCountries={['us', 'gb', 'de']}` puts the likely countries first; `onlyCountries` and
  `excludeCountries` restrict the list.
- `placeholder="Phone"` like any input; the label is `Phone`, not `Phone number (+country code)`.

```tsx
<PhoneInput label="Phone" placeholder="Phone" defaultCountry="us" {...form.getInputProps('phone')} />
```
