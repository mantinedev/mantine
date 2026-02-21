import { MdxCodeHighlight } from '@/components/MdxProvider';
import { HomePageTabs } from '../shared/HomePageTabs/HomePageTabs';
import classes from './HomePageLLM.module.css';

const llmsTxtCode = `# Reference Mantine docs in Cursor
@Docs https://mantine.dev/llms.txt

# Or download full documentation
curl -o mantine-docs.txt https://mantine.dev/llms-full.txt

# Use with ChatGPT/Claude
"Using Mantine, how do I create a dark mode toggle?
Reference: https://mantine.dev/llms.txt"`;

const skillsCode = `# Install Mantine skills for AI agents
npx skills add https://github.com/mantinedev/skills \\
  --skill mantine-combobox
npx skills add https://github.com/mantinedev/skills \\
  --skill mantine-form
npx skills add https://github.com/mantinedev/skills \\
  --skill mantine-custom-components

# Use in your AI prompt:
# "Use $mantine-form and build a profile
#  form with validation and nested fields"`;

const mcpCode = `// Add to your MCP client configuration
{
  "mcpServers": {
    "mantine": {
      "command": "npx",
      "args": ["-y", "@mantine/mcp-server"]
    }
  }
}

// Available tools:
// - list_items
// - get_item_doc
// - get_item_props
// - search_docs`;

const tabsData = [
  {
    label: 'Documentation',
    value: 'docs',
    content: <MdxCodeHighlight code={llmsTxtCode} language="bash" className={classes.code} />,
  },
  {
    label: 'Skills',
    value: 'skills',
    content: <MdxCodeHighlight code={skillsCode} language="bash" className={classes.code} />,
  },
  {
    label: 'MCP server',
    value: 'mcp',
    content: <MdxCodeHighlight code={mcpCode} language="json" className={classes.code} />,
  },
];

export function HomePageLLMDemo() {
  return <HomePageTabs data={tabsData} />;
}
