export function parsePhoneValue(value: string, withExtension = false) {
  const extensionIndex = withExtension ? value.search(/x/i) : -1;

  return {
    phoneNumber: extensionIndex === -1 ? value : value.slice(0, extensionIndex).trimEnd(),
    extension:
      extensionIndex === -1 ? undefined : value.slice(extensionIndex + 1).replace(/\D/g, ''),
  };
}
