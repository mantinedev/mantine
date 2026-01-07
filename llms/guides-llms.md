# LLMDocumentation

# LLMs.txt

Mantine provides LLM-friendly documentation to help AI tools like **Cursor**, **Windsurf**, **GitHub Copilot**, **ChatGPT**, and **Claude** understand and work with the Mantine UI library.

`llms.txt` documentation is updated with every Mantine release.

## Documentation

Links:

* [llms.txt](https://mantine.dev/llms.txt) – compact
* [Download](https://mantine.dev/llms-full.txt) full documentation in single document (~1.8MB)

The LLM documentation includes:

* **Getting Started** - Installation and setup guides
* **Components** - All Mantine components with props, examples, and usage
* **Hooks** - Complete hooks documentation with examples
* **Theming** - Theme customization and MantineProvider setup
* **Styles** - CSS modules, CSS variables, and styling approaches
* **Frequently Asked Questions** - Common questions and solutions

## Cursor

In Cursor, you can reference the documentation using the `@Docs` feature:

1. Type `@Docs` in your prompt
2. Reference the Mantine documentation URL: `https://mantine.dev/llms.txt`
3. Ask questions about Mantine components, styling, or implementation

## Windsurf

For Windsurf users:

1. Reference the documentation using `@https://mantine.dev/llms.txt`
2. Or add it to your `.windsurfrules` file for persistent access

## ChatGPT and Claude

When using ChatGPT or Claude:

1. Mention that you're using Mantine v8
2. Reference the documentation URL: `https://mantine.dev/llms.txt`
3. The AI will fetch and use the documentation to provide accurate answers

### GitHub Copilot

While Copilot doesn't directly support external documentation, you can:

1. Include relevant documentation snippets in your comments
2. Reference component names and props accurately for better suggestions

## Example prompts

Here are some example prompts you can use with AI tools:

* "Using Mantine v8, how do I create a dark mode toggle?"
* "Show me how to use the AppShell component with a collapsible navbar"
* "How can I customize the theme colors in MantineProvider?"
* "Create a form with validation using Mantine's form hooks"
* "How to align input with a button in a flex container?"

## Documentation Generation

The LLM documentation is automatically generated from our source files using a compilation script. It includes:

* Component documentation from MDX files
* Props tables and types
* Code examples and demos
* Styles API documentation
* FAQ content from help.mantine.dev

There are two generated formats:

* `llms.txt` – the default compact index that links to per-page `.md` files under the `/llms` path
* `llms-full.txt` – a single large file with all documentation content

To ensure you have the latest documentation, we regenerate these files with each release. The files follow the [LLMs.txt](https://llmstxt.org/) standard for better compatibility with AI tools.

## Contributing

If you find any issues with the LLM documentation or have suggestions for improvement, please [open an issue](https://github.com/mantinedev/mantine/issues) on our GitHub repository.
