export const inputWrapperQueries = {
  getLabel: (container: HTMLElement) => container.querySelector('.mantine-InputWrapper-label')!,
  getError: (container: HTMLElement) => container.querySelector('.mantine-InputWrapper-error')!,
  getSuccess: (container: HTMLElement) => container.querySelector('.mantine-InputWrapper-success')!,
  getRequired: (container: HTMLElement) =>
    container.querySelector('.mantine-InputWrapper-required')!,
  getDescription: (container: HTMLElement) =>
    container.querySelector('.mantine-InputWrapper-description')!,
};
