interface CreateErrorInput {
  /** Package name, that has thrown an error, e.g. @mantine/headless */
  scope?: string;

  /** Message displayed in the console */
  message: string;

  /** Error code, used to construct link to error decoder on mantine.dev website */
  code: string;
}

export function createError({ message, code, scope = '@mantine/core' }: CreateErrorInput) {
  return `[${scope}] ${
    message.endsWith('.') ? message : `${message}.`
  } Learn more – https://mantine.dev/errors/${code}/`;
}
