import { useState } from 'react';
import { CheckIcon, CopyIcon, LightbulbFilamentIcon, RobotIcon } from '@phosphor-icons/react';
import { ActionIcon, Affix, Card, Stack, Text, Tooltip } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { Frontmatter } from '@/types';

interface MdxLlmAffixProps {
  meta: Frontmatter;
}

function getLlmUrl(slug: string) {
  return `/llms/${slug.slice(1).replace(/\//g, '-')}.md`;
}

export function MdxLlmAffix({ meta }: MdxLlmAffixProps) {
  const [copied, setCopied] = useState(false);
  const llmUrl = getLlmUrl(meta.slug);

  const handleCopy = async () => {
    try {
      const response = await fetch(llmUrl);
      const text = await response.text();
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      /* eslint-disable-next-line no-console */
      console.error('Failed to copy LLM documentation content:', error);
      notifications.show({
        title: 'Failed to copy',
        message: 'Unable to copy LLM documentation content, see console for details',
        color: 'red',
      });
    }
  };

  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <Card withBorder padding={6} radius="md" bg="body">
        <Text ff="monospace" fw="600" ta="center" fz={12} mb={4}>
          LLM
        </Text>

        <Stack gap={4}>
          <Tooltip
            label="Open LLM optimized docs ↗"
            position="left"
            transitionProps={{ duration: 0 }}
            radius="md"
          >
            <ActionIcon
              component="a"
              href={llmUrl}
              target="_blank"
              variant="default"
              size={44}
              radius="md"
            >
              <RobotIcon size={22} />
            </ActionIcon>
          </Tooltip>
          <Tooltip
            label={copied ? 'Copied!' : 'Copy LLM optimized docs'}
            position="left"
            transitionProps={{ duration: 0 }}
            radius="md"
          >
            <ActionIcon variant="default" size={44} radius="md" onClick={handleCopy}>
              {copied ? <CheckIcon size={22} /> : <CopyIcon size={22} />}
            </ActionIcon>
          </Tooltip>
          <Tooltip
            label="Submit LLM documentation feedback ↗"
            position="left"
            transitionProps={{ duration: 0 }}
            radius="md"
          >
            <ActionIcon
              component="a"
              href="https://github.com/orgs/mantinedev/discussions/new?category=ai-and-llm-usage-feedback"
              target="_blank"
              rel="noopener noreferrer"
              variant="default"
              size={44}
              radius="md"
            >
              <LightbulbFilamentIcon size={22} />
            </ActionIcon>
          </Tooltip>
        </Stack>
      </Card>
    </Affix>
  );
}
