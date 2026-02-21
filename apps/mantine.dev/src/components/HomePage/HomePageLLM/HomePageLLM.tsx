import { BookOpenTextIcon, BrainIcon, FileTextIcon, PlugIcon } from '@phosphor-icons/react';
import { SimpleGrid } from '@mantine/core';
import { HomePageContainer } from '../shared/HomePageContainer/HomePageContainer';
import { HomePageDescription } from '../shared/HomePageDescription/HomePageDescription';
import {
  HomePageFeatures,
  HomePageFeaturesData,
} from '../shared/HomePageFeatures/HomePageFeatures';
import { HomePageLearnMore } from '../shared/HomePageLearnMore/HomePageLearnMore';
import { HomePageTitle } from '../shared/HomePageTitle/HomePageTitle';
import classes from './HomePageLLM.module.css';
import { HomePageLLMDemo } from './HomePageLLMDemo';

const features: HomePageFeaturesData = [
  {
    icon: FileTextIcon,
    title: 'LLM documentation',
    description:
      'llms.txt and llms-full.txt files follow the LLMs.txt standard – use them with Cursor, Windsurf, ChatGPT, Claude, and other AI tools',
  },
  {
    icon: BrainIcon,
    title: 'Skills for AI agents',
    description:
      'Install Mantine skills for complex tasks like building forms, custom components, and combobox-based inputs',
  },
  {
    icon: PlugIcon,
    title: 'MCP server',
    description:
      'Use @mantine/mcp-server to give AI agents direct access to component docs, props, and search across the entire library',
  },
  {
    icon: BookOpenTextIcon,
    title: 'Always up to date',
    description:
      'LLM documentation is regenerated with every release – AI tools always have access to the latest API and examples',
  },
];

export function HomePageLLM() {
  return (
    <section className={classes.root}>
      <HomePageContainer>
        <SimpleGrid cols={{ md: 2 }} spacing={50} verticalSpacing={30}>
          <div className={classes.column}>
            <div className={classes.main}>
              <HomePageTitle order={2}>AI-ready documentation</HomePageTitle>
              <HomePageDescription className={classes.description}>
                Mantine provides LLM-friendly documentation, skills for AI coding agents, and an MCP
                server – everything AI tools need to work with Mantine effectively
              </HomePageDescription>
              <HomePageLearnMore href="/guides/llms/">
                Learn more about LLM integrations
              </HomePageLearnMore>

              <HomePageFeatures data={features} />
            </div>
          </div>
          <div className={classes.column}>
            <HomePageLLMDemo />
          </div>
        </SimpleGrid>
      </HomePageContainer>
    </section>
  );
}
