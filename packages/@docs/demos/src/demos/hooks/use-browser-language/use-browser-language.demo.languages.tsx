import { Code, List, Text } from '@mantine/core';
import { usePreferredLanguages } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Code, List, Text } from '@mantine/core';
import { usePreferredLanguages } from '@mantine/hooks';

function Demo() {
  const languages = usePreferredLanguages();

  return (
    <>
      <Text mb="xs">Your preferred languages, most preferred first:</Text>
      <List withPadding>
        {languages.map((language) => (
          <List.Item key={language}>
            <Code>{language}</Code>
          </List.Item>
        ))}
      </List>
    </>
  );
}
`;

function Demo() {
  const languages = usePreferredLanguages();

  return (
    <>
      <Text mb="xs">Your preferred languages, most preferred first:</Text>
      <List withPadding>
        {languages.map((language) => (
          <List.Item key={language}>
            <Code>{language}</Code>
          </List.Item>
        ))}
      </List>
    </>
  );
}

export const languages: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
