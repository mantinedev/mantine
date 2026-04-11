import { useState } from 'react';
import { CheckIcon, CopyIcon, LightbulbFilamentIcon, RobotIcon } from '@phosphor-icons/react';
import { ActionIcon, Affix, Card, Stack, Text, Tooltip } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { Frontmatter } from '@/types';
import classes from './MdxLlmAffix.module.css';

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
      notifications.show({
        title: 'Failed to copy',
        message: 'Unable to copy LLM documentation content, see console for details',
        color: 'red',
      });
    }
  };

  return (
    <Affix position={{ bottom: 20, right: 20 }} visibleFrom="sm">
      <Card className={classes.root}>
        <Text className={classes.title}>LLM</Text>

        <Stack gap={4}>
          <Tooltip
            label="Open LLM optimized docs ↗"
            position="left"
            transitionProps={{ duration: 0 }}
          >
            <ActionIcon
              component="a"
              href={llmUrl}
              target="_blank"
              variant="default"
              size={44}
              className={classes.control}
            >
              <RobotIcon size={22} className={classes.icon} data-color="red" />
            </ActionIcon>
          </Tooltip>
          <Tooltip
            label={copied ? 'Copied!' : 'Copy LLM optimized docs'}
            position="left"
            transitionProps={{ duration: 0 }}
          >
            <ActionIcon
              variant="default"
              size={44}
              className={classes.control}
              onClick={handleCopy}
            >
              {copied ? (
                <CheckIcon size={22} className={classes.icon} data-color="teal" />
              ) : (
                <CopyIcon size={22} className={classes.icon} data-color="cyan" />
              )}
            </ActionIcon>
          </Tooltip>
          <Tooltip
            label="Submit LLM documentation feedback ↗"
            position="left"
            transitionProps={{ duration: 0 }}
          >
            <ActionIcon
              component="a"
              href="https://github.com/orgs/mantinedev/discussions/new?category=ai-and-llm-usage-feedback"
              target="_blank"
              rel="noopener noreferrer"
              variant="default"
              size={44}
              className={classes.control}
            >
              <LightbulbFilamentIcon size={22} className={classes.icon} data-color="yellow" />
            </ActionIcon>
          </Tooltip>
        </Stack>
      </Card>
    </Affix>
  );
}
