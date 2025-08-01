#!/usr/bin/env tsx
import path from 'path';
import glob from 'fast-glob';
import fs from 'fs-extra';
import remarkMdx from 'remark-mdx';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';

interface CompilerConfig {
  outputPath: string;
  rootDir: string;
  mdxPaths: {
    docs: string;
    help: string;
  };
  demosPath: string;
  stylesApiPath: string;
  propsDataPath: string;
  mdxDataPath: string;
  publicPath?: string;
}

const config: CompilerConfig = {
  outputPath: './LLM.md',
  rootDir: process.cwd(),
  mdxPaths: {
    docs: './apps/mantine.dev/src/pages',
    help: './apps/help.mantine.dev/src/pages/q',
  },
  demosPath: './packages/@docs/demos/src/demos',
  stylesApiPath: './packages/@docs/styles-api/src/data',
  propsDataPath: './apps/mantine.dev/src/.docgen',
  mdxDataPath: './apps/mantine.dev/src/mdx/data',
  publicPath: './apps/mantine.dev/public',
};

class MantineLLMCompiler {
  private config: CompilerConfig;
  private output: string[] = [];
  private mdxMetadata = new Map<string, any>();
  private stylesApiData = new Map<
    string,
    {
      selectors?: Record<string, string>;
      vars?: Record<string, Record<string, string> | any>;
      modifiers?: Array<{
        modifier?: string;
        selector?: string;
        condition?: string;
        value?: string;
      }>;
      raw: string;
    }
  >();
  private propsData = new Map<string, any>();

  constructor(config: CompilerConfig) {
    this.config = config;
  }

  async compile() {
    // Load all metadata first
    await this.loadMdxMetadata();
    await this.loadStylesApiData();
    await this.loadPropsData();

    this.addHeader();

    // Process main documentation
    await this.processMdxFiles();

    // Process FAQ content
    await this.processFaqContent();

    // Write output
    await this.writeOutput();

    // Compilation complete
  }

  private addHeader() {
    this.output.push('# Mantine UI Library - Complete Documentation');
    this.output.push('');
    this.output.push(
      'This file contains comprehensive documentation for the Mantine UI library including:'
    );
    this.output.push('- Complete component documentation with all usage examples');
    this.output.push('- Full demo code for every example shown in the documentation');
    this.output.push('- Complete props tables with types and descriptions for all components');
    this.output.push('- Styles API documentation showing all available selectors');
    this.output.push('- FAQ and troubleshooting guides');
    this.output.push('');
    this.output.push(
      'All code examples use production npm package imports (e.g., @mantine/core, @mantine/hooks)'
    );
    this.output.push('');
    this.output.push('='.repeat(80));
    this.output.push('');
  }

  private async loadMdxMetadata() {
    const dataFiles = await glob('mdx-*-data.ts', {
      cwd: this.config.mdxDataPath,
      absolute: true,
    });

    for (const file of dataFiles) {
      try {
        const content = await fs.readFile(file, 'utf-8');

        // Extract MDX data exports
        const exportMatch = content.match(/export const MDX_\w+_DATA[^=]*=\s*{([\s\S]*?)};/);
        if (!exportMatch) {
          continue;
        }

        // Extract all component entries with their metadata
        const dataContent = exportMatch[1];

        // Match component entries
        const componentRegex = /(\w+):\s*{([^{}]*(?:{[^{}]*}[^{}]*)*)}/g;
        let match;

        while ((match = componentRegex.exec(dataContent)) !== null) {
          const componentName = match[1];
          const componentData = match[2];

          // Extract package
          const packageMatch = componentData.match(/package:\s*['"](@mantine\/[^'"]+)['"]/);
          const titleMatch = componentData.match(/title:\s*['"]([^'"]+)['"]/);
          const descriptionMatch = componentData.match(/description:\s*['"]([^'"]+)['"]/);

          if (packageMatch) {
            const metadata = {
              package: packageMatch[1],
              title: titleMatch ? titleMatch[1] : componentName,
              description: descriptionMatch ? descriptionMatch[1] : '',
            };

            // Store both original case and lowercase for lookup flexibility
            this.mdxMetadata.set(componentName, metadata);
            this.mdxMetadata.set(componentName.toLowerCase(), metadata);
            // Also store with kebab-case for code-highlight
            const kebabName = componentName
              .replace(/([A-Z])/g, '-$1')
              .toLowerCase()
              .replace(/^-/, '');
            this.mdxMetadata.set(kebabName, metadata);
          }
        }
      } catch (error) {
        // Warning: Could not parse file
      }
    }

    // Loaded metadata
  }

  private async loadStylesApiData() {
    // Loading Styles API data

    const stylesFiles = await glob('**/*.styles-api.ts', {
      cwd: this.config.stylesApiPath,
      absolute: true,
    });

    // First pass: load all files to build the data
    for (const file of stylesFiles) {
      try {
        const content = await fs.readFile(file, 'utf-8');
        // const componentName = path.basename(file, '.styles-api.ts');

        // Parse the TypeScript file to extract the StylesApi exports
        // Look for export const ComponentStylesApi: StylesApiData<ComponentFactory> = { ... }
        const stylesApiRegex =
          /export const (\w+)StylesApi:\s*StylesApiData<[^>]+>\s*=\s*({[\s\S]*?})\s*;/g;
        let match;

        while ((match = stylesApiRegex.exec(content)) !== null) {
          const exportName = match[1];
          const dataObject = match[2];

          // Parse selectors
          const selectorsMatch = dataObject.match(/selectors:\s*({[\s\S]*?})\s*(?:,|$)/);
          const selectors: Record<string, string> = {};

          if (selectorsMatch) {
            const selectorsContent = selectorsMatch[1];

            // First, handle spread operators (e.g., ...InputStylesApi.selectors)
            const spreadRegex = /\.\.\.(\w+)\.selectors/g;
            let spreadMatch;
            while ((spreadMatch = spreadRegex.exec(selectorsContent)) !== null) {
              // Note: We'll handle spreads later by looking up the referenced component
              // For now, just add a placeholder
              selectors[`_spread_${spreadMatch[1]}`] = 'inherited';
            }

            // Extract key-value pairs from the selectors object
            // Match pattern: selector: 'description with `code`'
            const selectorLines = selectorsContent.split('\n');
            for (const line of selectorLines) {
              // Match either single quotes, double quotes, or backticks
              const selectorMatch = line.match(/(\w+):\s*(['"`])(.*?)\2/);
              if (selectorMatch) {
                selectors[selectorMatch[1]] = selectorMatch[3];
              }
            }
          }

          // Parse vars
          const varsMatch = dataObject.match(/vars:\s*({[\s\S]*?})\s*(?:,|$)/);
          const vars: Record<string, Record<string, string>> = {};

          if (varsMatch) {
            const varsContent = varsMatch[1];
            // Extract nested var definitions
            // Pattern: componentName: { '--var-name': 'description' }
            const componentVarRegex = /(\w+):\s*({[^}]+})/g;
            let varMatch;
            while ((varMatch = componentVarRegex.exec(varsContent)) !== null) {
              const varComponent = varMatch[1];
              const varDefs = varMatch[2];
              vars[varComponent] = {};

              // Extract individual CSS variables
              // Match pattern: '--var-name': 'description with `code`'
              const cssVarLines = varDefs.split('\n');
              for (const line of cssVarLines) {
                // Match CSS variable pattern with nested quotes
                const cssVarMatch = line.match(/(['"`])(--[^'"`]+)\1:\s*(['"`])(.*?)\3/);
                if (cssVarMatch) {
                  vars[varComponent][cssVarMatch[2]] = cssVarMatch[4];
                }
              }
            }

            // Also check for direct references to other vars (e.g., vars: { indicator: RadioStylesApi.vars.root })
            const varRefRegex = /(\w+):\s*(\w+)\.vars\.(\w+)/g;
            let varRefMatch;
            while ((varRefMatch = varRefRegex.exec(varsContent)) !== null) {
              vars[`_ref_${varRefMatch[1]}`] = { from: varRefMatch[2], component: varRefMatch[3] };
            }
          }

          // Parse modifiers if present
          const modifiersMatch = dataObject.match(/modifiers:\s*\[([\s\S]*?)\]/);
          const modifiers: any[] = [];

          if (modifiersMatch) {
            const modifiersContent = modifiersMatch[1];
            // Extract modifier objects
            const modifierRegex = /{([^}]+)}/g;
            let modifierMatch;
            while ((modifierMatch = modifierRegex.exec(modifiersContent)) !== null) {
              const modifierContent = modifierMatch[1];
              const modifier: any = {};

              // Extract modifier properties
              const propRegex = /(\w+):\s*['"`]([^'"`]+)['"`]/g;
              let propMatch;
              while ((propMatch = propRegex.exec(modifierContent)) !== null) {
                modifier[propMatch[1]] = propMatch[2];
              }

              // Also handle 'value' property
              const valueMatch = modifierContent.match(/value:\s*['"`]([^'"`]+)['"`]/);
              if (valueMatch) {
                modifier.value = valueMatch[1];
              }

              if (Object.keys(modifier).length > 0) {
                modifiers.push(modifier);
              }
            }
          }

          // Store the parsed data
          const key = exportName.toLowerCase().replace('stylescontent', '').replace('styles', '');
          this.stylesApiData.set(key, {
            selectors,
            vars,
            modifiers,
            raw: content,
          });
        }
      } catch (error) {
        // Could not load styles API
      }
    }

    // Loaded Styles API data

    // Second pass: resolve spread selectors and variable references
    for (const [_key, data] of this.stylesApiData.entries()) {
      // Resolve spread selectors
      if (data.selectors) {
        const resolvedSelectors: Record<string, string> = {};

        for (const [selector, description] of Object.entries(data.selectors)) {
          if (selector.startsWith('_spread_')) {
            // Extract the referenced component name
            const refComponent = selector.replace('_spread_', '').replace('StylesApi', '');
            const refData = this.stylesApiData.get(refComponent.toLowerCase());

            if (refData && refData.selectors) {
              // Copy all selectors from the referenced component
              for (const [refSelector, refDescription] of Object.entries(refData.selectors)) {
                if (!refSelector.startsWith('_spread_')) {
                  resolvedSelectors[refSelector] = refDescription;
                }
              }
            }
          } else {
            resolvedSelectors[selector] = description;
          }
        }

        data.selectors = resolvedSelectors;
      }

      // Resolve variable references
      if (data.vars) {
        const resolvedVars: Record<string, Record<string, string> | any> = {};

        for (const [varKey, varValue] of Object.entries(data.vars)) {
          if (varKey.startsWith('_ref_')) {
            // This is a reference to another component's vars
            const actualKey = varKey.replace('_ref_', '');
            const refInfo = varValue as any;
            if (refInfo.from && refInfo.component) {
              // Find the referenced component's vars
              const refComponentName = refInfo.from.replace('StylesApi', '').toLowerCase();
              const refData = this.stylesApiData.get(refComponentName);
              if (refData && refData.vars && refData.vars[refInfo.component]) {
                resolvedVars[actualKey] = refData.vars[refInfo.component];
              }
            }
          } else {
            resolvedVars[varKey] = varValue;
          }
        }

        data.vars = resolvedVars;
      }
    }
  }

  private async loadPropsData() {
    // Loading props data

    // Load from docgen.json
    const docgenPath = path.join(this.config.propsDataPath, 'docgen.json');
    const docgenExists = await fs.pathExists(docgenPath);

    if (docgenExists) {
      try {
        const docgenData = await fs.readJson(docgenPath);

        // Store props data for each component
        for (const [componentName, componentData] of Object.entries(docgenData)) {
          if (componentData && typeof componentData === 'object') {
            this.propsData.set(componentName.toLowerCase(), componentData);
            // Also store with original case for flexibility
            this.propsData.set(componentName, componentData);
          }
        }
      } catch (error) {
        // Could not load docgen data
      }
    }

    // Loaded props data
  }

  private getCategoryPackageName(category: string): string | null {
    const categoryPackageMap: Record<string, string | null> = {
      core: '@mantine/core',
      hooks: '@mantine/hooks',
      dates: '@mantine/dates',
      charts: '@mantine/charts',
      x: '@mantine/x',
      form: '@mantine/form',
      guides: null,
      theming: null,
      styles: null,
      other: null,
    };

    return categoryPackageMap[category] ?? null;
  }

  private async processMdxFiles() {
    // Processing MDX documentation files

    const mdxFiles = await glob('**/*.mdx', {
      cwd: this.config.mdxPaths.docs,
      absolute: true,
      ignore: ['**/changelog/**/*.mdx'],
    });

    const categories = {
      core: [] as string[],
      hooks: [] as string[],
      dates: [] as string[],
      charts: [] as string[],
      guides: [] as string[],
      theming: [] as string[],
      styles: [] as string[],
      x: [] as string[],
      other: [] as string[],
    };

    // Categorize files
    for (const file of mdxFiles) {
      const relativePath = path.relative(this.config.mdxPaths.docs, file);
      const category = relativePath.split('/')[0] as keyof typeof categories;

      if (category in categories) {
        categories[category].push(file);
      } else {
        categories.other.push(file);
      }
    }

    // Process by category
    for (const [category, files] of Object.entries(categories)) {
      if (files.length === 0) {
        continue;
      }

      const packageName = this.getCategoryPackageName(category);
      this.output.push(`## ${category.toUpperCase()} COMPONENTS AND FEATURES`);
      if (packageName) {
        this.output.push(`Primary Package: ${packageName}`);
      }
      this.output.push('');

      for (const file of files) {
        await this.processSingleMdx(file);
      }
    }
  }

  private async processSingleMdx(filePath: string) {
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      const fileName = path.basename(filePath, '.mdx');

      // Try to get metadata from our loaded data
      const metadata = this.mdxMetadata.get(fileName.toLowerCase());
      const packageName = metadata?.package || this.inferPackageFromPath(filePath);

      // Extract component name from MDX file
      const componentMatch = content.match(/Layout\(MDX_DATA\.(\w+)\)/);
      const componentName = componentMatch ? componentMatch[1] : fileName;
      const componentTitle = metadata?.title || componentName;

      this.output.push(`### ${componentTitle}`);

      if (packageName) {
        this.output.push(`Package: ${packageName}`);
        const capitalizedComponent = componentName.charAt(0).toUpperCase() + componentName.slice(1);
        // Use the actual component name from metadata if available
        const importName = metadata?.title || capitalizedComponent;
        this.output.push(`Import: import { ${importName} } from '${packageName}';`);
      }

      if (metadata?.description) {
        this.output.push(`Description: ${metadata.description}`);
      }

      this.output.push('');

      // Extract and process MDX content with embedded demos
      const processedContent = await this.extractMdxContent(content, packageName, componentName);
      this.output.push(processedContent);

      // Add props documentation
      await this.addComponentProps(componentName);

      // Add Styles API documentation
      await this.addComponentStylesApi(componentName);

      this.output.push('');
      this.output.push('-'.repeat(80));
      this.output.push('');
    } catch (error) {
      // Error processing file
    }
  }

  private inferPackageFromPath(filePath: string): string | null {
    const relativePath = path.relative(this.config.mdxPaths.docs, filePath);
    const category = relativePath.split('/')[0];
    return this.getCategoryPackageName(category);
  }

  private async extractMdxContent(
    content: string,
    packageName?: string,
    _componentName?: string
  ): Promise<string> {
    // Remove only the top-level imports and export default Layout
    // Split content into lines to handle imports more carefully
    const lines = content.split('\n');
    const cleanedLines: string[] = [];
    let inCodeBlock = false;
    let skipNextLines = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Track code blocks
      if (line.trim().startsWith('```')) {
        inCodeBlock = !inCodeBlock;
      }

      // Skip lines if we're in a multi-line import
      if (skipNextLines > 0) {
        skipNextLines--;
        continue;
      }

      // Only remove imports that are not in code blocks
      if (!inCodeBlock) {
        // Check for imports at the beginning of the file (before any content)
        const isTopLevelImport =
          cleanedLines.filter((l) => l.trim() && !l.trim().startsWith('import')).length === 0;

        if (isTopLevelImport && line.trim().startsWith('import')) {
          // Check if it's a multi-line import
          if (line.includes('{') && !line.includes('}')) {
            // Find the end of the import
            for (let j = i + 1; j < lines.length; j++) {
              skipNextLines++;
              if (lines[j].includes('}')) {
                break;
              }
            }
          }
          continue;
        }

        if (isTopLevelImport && line.trim().startsWith('export default Layout')) {
          continue;
        }
      }

      cleanedLines.push(line);
    }

    const cleanContent = cleanedLines.join('\n');

    // Store demos we find for later processing
    const demosToInclude: Array<{ name: string; packageName?: string }> = [];

    // Process with remark to extract text content
    const processor = unified()
      .use(remarkParse as any)
      .use(remarkMdx as any)
      .use(() => {
        return (tree: any) => {
          // Remove component references and convert demos
          visit(tree, 'mdxJsxFlowElement', (node: any, index: number | undefined, parent: any) => {
            // Handle InstallScript components
            if (node.name === 'InstallScript' && node.attributes) {
              const packagesAttr = node.attributes.find((attr: any) => attr.name === 'packages');
              if (packagesAttr) {
                const packages = packagesAttr.value || '';

                // Create installation instructions for both npm and yarn
                node.type = 'paragraph';
                node.children = [
                  {
                    type: 'text',
                    value: `INSTALLSCRIPT::${packages}::END`,
                  },
                ];
              }
            }
            // Handle Demo components
            else if (node.name === 'Demo' && node.attributes) {
              const dataAttr = node.attributes.find((attr: any) => attr.name === 'data');
              if (dataAttr) {
                let demoName = '';

                // Simple case: direct string value
                if (typeof dataAttr.value === 'string') {
                  demoName = dataAttr.value;
                }
                // Complex case: expression like {AccordionDemos.configurator}
                else if (
                  dataAttr.value &&
                  dataAttr.value.type === 'mdxJsxAttributeValueExpression'
                ) {
                  // Extract from value.value
                  demoName = dataAttr.value.value || '';
                }

                if (demoName) {
                  demosToInclude.push({ name: demoName, packageName });

                  // Create a marker for where to insert the demo
                  node.type = 'paragraph';
                  node.children = [
                    {
                      type: 'text',
                      value: `DEMOPLACEHOLDER::${demoName}::END`,
                    },
                  ];
                }
              }
            }
            // Handle shared content components by creating placeholders
            else if (
              [
                'AutoContrast',
                'ComboboxData',
                'ComboboxFiltering',
                'ComboboxLargeData',
                'FlexboxGapSupport',
                'GetElementRef',
                'Gradient',
                'InputAccessibility',
                'InputFeatures',
                'InputSections',
                'Polymorphic',
                'ServerComponentsIncompatible',
                'TargetComponent',
                'WrapperProps',
              ].includes(node.name)
            ) {
              // Create placeholder for shared component content
              const attributesStr =
                node.attributes?.map((attr: any) => `${attr.name}="${attr.value}"`).join('|') || '';

              // Reconstruct the original JSX for preservation
              const jsxProps =
                node.attributes
                  ?.map((attr: any) => {
                    if (attr.value === true || attr.name === 'withNext') {
                      return attr.name;
                    }
                    return `${attr.name}="${attr.value}"`;
                  })
                  .join(' ') || '';
              const originalJsx = `<${node.name} ${jsxProps} />`;

              node.type = 'paragraph';
              node.children = [
                {
                  type: 'text',
                  value: `SHAREDCONTENT::${node.name}::${attributesStr}::JSX::${originalJsx}::END`,
                },
              ];
            }
            // Remove other unwanted components
            else if (
              [
                'StylesApiSelectors',
                'KeyboardEventsTable',
                'DataTable',
                'PropsTable',
                'MantineProvider',
                'DemoContainer',
                'StorybookGallery',
                'NextSteps',
                'PageHeader',
                'ComponentDescription',
                'PackageInstall',
                'GettingStarted',
                'MdxProvider',
                'MdxLink',
                'Title',
                'Head',
              ].includes(node.name)
            ) {
              if (parent && parent.children && index !== undefined) {
                parent.children.splice(index, 1);
                return index; // Return index to continue from same position
              }
            }
          });

          // Convert internal links to full URLs
          visit(tree, 'link', (node: any) => {
            if (node.url && node.url.startsWith('/')) {
              node.url = `https://mantine.dev${node.url}`;
            }
          });

          // Fix code block formatting
          visit(tree, 'code', (node: any) => {
            if (node.value) {
              // Replace any malformed backtick sequences
              node.value = node.value.replace(/\/`\/`\/`/g, '```');
            }
          });
        };
      })
      .use(remarkStringify as any);

    let result = String(await processor.process(cleanContent));

    // Now replace each demo placeholder with the actual demo code
    for (const demo of demosToInclude) {
      const demoCode = await this.loadDemoCode(demo.name);
      if (demoCode) {
        // Check if this is a code highlighting demo that shows example output
        const exampleCodeMatch = demoCode.match(/const exampleCode\s*=\s*`([\s\S]+?)`;/);
        let demoSection = '';

        if (exampleCodeMatch) {
          // For code highlighting demos, show the example output first
          const exampleCode = exampleCodeMatch[1].trim();

          demoSection = [
            '',
            '```tsx',
            exampleCode,
            '```',
            '',
            `#### Example: ${demo.name.split('.').pop()}`,
            '',
            '```tsx',
            demoCode,
            '```',
            '',
          ].join('\n');
        } else {
          // Regular demo
          demoSection = [
            `#### Example: ${demo.name.split('.').pop()}`,
            '',
            '```tsx',
            demoCode,
            '```',
            '',
          ].join('\n');
        }

        const placeholder = `DEMOPLACEHOLDER::${demo.name}::END`;
        result = result.replace(placeholder, demoSection);
      } else {
        // If we can't find the demo, remove the placeholder
        result = result.replace(`DEMOPLACEHOLDER::${demo.name}::END`, '');
      }
    }

    // Replace InstallScript placeholders with installation instructions
    // Also remove any duplicate "After installation" text that follows
    const installScriptRegex =
      /INSTALLSCRIPT::([^:]+)::END(?:\s*After installation import package styles[\s\S]*?```[\s\S]*?```)?/g;
    result = result.replace(installScriptRegex, (_match, packages) => {
      const packageList = packages.trim();
      let installSection = `\`\`\`bash
yarn add ${packageList}
\`\`\`

\`\`\`bash
npm install ${packageList}
\`\`\``;

      // Add style imports for packages that have styles
      const packagesWithStyles = [
        '@mantine/core',
        '@mantine/dates',
        '@mantine/code-highlight',
        '@mantine/spotlight',
        '@mantine/tiptap',
        '@mantine/dropzone',
        '@mantine/carousel',
        '@mantine/nprogress',
        '@mantine/notifications',
        '@mantine/charts',
      ];

      // Check if any of the packages need style imports
      const needsStyles = packageList
        .split(' ')
        .some((pkg: string) => packagesWithStyles.includes(pkg.trim()));

      if (needsStyles) {
        installSection += `

After installation import package styles at the root of your application:

\`\`\`tsx
import '@mantine/core/styles.css';`;

        // Add specific package styles with comments
        packageList.split(' ').forEach((pkg: string) => {
          const trimmedPkg = pkg.trim();
          if (trimmedPkg !== '@mantine/core' && packagesWithStyles.includes(trimmedPkg)) {
            const pkgShortName = trimmedPkg.split('/').pop();
            installSection += `
// ‼️ import ${pkgShortName} styles after core package styles
import '${trimmedPkg}/styles.css';`;
          }
        });

        installSection += `
\`\`\``;
      }

      return installSection;
    });

    // Replace shared content placeholders with actual content
    const sharedContentRegex = /SHAREDCONTENT::([^:]+)::([^:]*?)::JSX::(.+?)::END/g;
    result = result.replace(
      sharedContentRegex,
      (_match, componentName, attributesStr, originalJsx) => {
        // Parse attributes from string
        const attributes: any[] = [];
        if (attributesStr) {
          const attrPairs = attributesStr.split('|');
          for (const pair of attrPairs) {
            const [name, value] = pair.split('=');
            if (name && value) {
              attributes.push({ name, value: value.replace(/"/g, '') });
            }
          }
        }

        // Include the original JSX example along with the rendered content
        const content = this.getSharedComponentContent(componentName, attributes);
        // Remove any escape characters that might have been added
        const cleanJsx = originalJsx.replace(/\\/g, '');
        return `${cleanJsx}\n\n${content}`;
      }
    );

    return result;
  }

  private async loadDemoCode(demoName: string): Promise<string | null> {
    try {
      // Demo name format: ComponentDemos.demoname (e.g., AccordionDemos.configurator)
      const [componentWithDemos, demoId] = demoName.split('.');

      // Remove "Demos" suffix to get component name
      const component = componentWithDemos.replace(/Demos$/, '');

      // Find the demo file with pattern: Component.demo.demoId.tsx
      // Also check for kebab-case folder names
      const demoPattern = `**/${component}/${component}.demo.${demoId}.tsx`;
      const kebabCasePattern = `**/${component
        .replace(/([A-Z])/g, '-$1')
        .toLowerCase()
        .slice(1)}/${component}.demo.${demoId}.tsx`;

      let demoFiles = await glob(demoPattern, {
        cwd: this.config.demosPath,
        absolute: true,
      });

      // If not found, try kebab-case folder name
      if (demoFiles.length === 0) {
        demoFiles = await glob(kebabCasePattern, {
          cwd: this.config.demosPath,
          absolute: true,
        });
      }

      if (demoFiles.length > 0) {
        const content = await fs.readFile(demoFiles[0], 'utf-8');
        const demoDir = path.dirname(demoFiles[0]);

        // First check if this is a multi-file demo
        const exportMatch = content.match(
          /export const \w+:\s*MantineDemo\s*=\s*{[\s\S]*?code:\s*\[([\s\S]*?)\],?[\s\S]*?}/
        );

        if (exportMatch) {
          // Multi-file demo - extract all files
          const codeArrayContent = exportMatch[1];
          // Parse each file object manually
          const files: string[] = [];

          // Split by commas at the top level (between objects)
          const objectStrings = codeArrayContent.split(/},\s*{/);

          for (let objStr of objectStrings) {
            // Clean up the object string
            objStr = objStr.replace(/^\s*\{?\s*/, '').replace(/\s*\}?\s*$/, '');

            // Extract fileName
            const fileNameMatch = objStr.match(/fileName:\s*['"]([^'"]+)['"]/);
            const fileName = fileNameMatch ? fileNameMatch[1] : '';

            // Extract code reference - handle both 'code' and 'code: varName'
            // Match: "code," or "code: varName,"
            const codeMatch = objStr.match(/code(?::\s*(\w+))?\s*,/);
            const codeRef = codeMatch ? codeMatch[1] || 'code' : '';

            if (!fileName || !codeRef) {
              continue;
            }

            // Try to resolve the code reference
            let fileCode = '';

            if (codeRef.startsWith('`')) {
              // Inline code
              const inlineMatch = codeRef.match(/`([\s\S]*?)`/);
              if (inlineMatch) {
                fileCode = inlineMatch[1];
              }
            } else if (codeRef.match(/^['"][\s\S]*?['"]$/)) {
              // Direct string
              const stringMatch = codeRef.match(/^['"]([^'"]*?)['"]$/);
              if (stringMatch) {
                fileCode = stringMatch[1];
              }
            } else {
              // Variable reference - try to find it
              const varName = codeRef;
              fileCode = await this.extractCodeVariable(varName, content, demoDir);
            }

            if (fileCode) {
              // Clean up the code
              fileCode = fileCode.replace(/\{\{props\}\}/g, '');

              // Handle ${varName} interpolations in the extracted code
              fileCode = fileCode.replace(/\$\{(\w+)\}/g, (match, varName) => {
                // Try to find the variable definition in the file content
                const varMatch = content.match(
                  new RegExp(`const ${varName}\\s*=\\s*\`([\\s\\S]*?)\`;`, 'm')
                );
                if (varMatch) {
                  return varMatch[1];
                }
                return match;
              });

              files.push(`// ${fileName}\n${fileCode.trim()}`);
            }
          }

          if (files.length > 0) {
            return files.join('\n\n');
          }
        }

        // Single file demo - try existing patterns
        // Use the more robust extraction method for template literals
        const codeVarMatch = content.match(/const code\s*=/);
        if (codeVarMatch) {
          const extractedCode = await this.extractCodeVariable('code', content, demoDir);
          if (extractedCode) {
            // Clean up the code and handle interpolations
            let code = extractedCode;
            code = code.replace(/\{\{props\}\}/g, '');

            // Handle ${varName} interpolations
            code = code.replace(/\$\{(\w+)\}/g, (match, varName) => {
              // Try to find the variable definition
              const varMatch = content.match(
                new RegExp(`const ${varName}\\s*=\\s*\`([\\s\\S]*?)\`;`, 'm')
              );
              if (varMatch) {
                return varMatch[1];
              }
              return match;
            });

            return code.trim();
          }
        }

        // Try to find code as a function that returns a template literal
        const functionCodeMatch = content.match(/const code\s*=\s*\([^)]*\)\s*=>\s*`([\s\S]*?)`/);
        if (functionCodeMatch) {
          // Clean up the code: remove ${props.*} interpolations with reasonable defaults
          let code = functionCodeMatch[1];
          // Replace gradient props with example values
          code = code.replace(/\$\{props\.gradientFrom[^}]*\}/g, 'cyan');
          code = code.replace(/\$\{props\.gradientTo[^}]*\}/g, 'blue');
          code = code.replace(/\$\{props\.gradientDegree[^}]*\}/g, '90');
          // Replace size props
          code = code.replace(/\$\{props\.size[^}]*\}/g, 'md');
          // Replace position props
          code = code.replace(/\$\{props\.position[^}]*\}/g, 'bottom');
          // Replace generic props
          code = code.replace(/\$\{props\.[^}]+\}/g, '');
          return code.trim();
        }

        // Look for code in export object (single file)
        const singleFileExportMatch = content.match(
          /export const \w+:\s*MantineDemo\s*=\s*{[\s\S]*?code:\s*([^,}]+)(?:,|\s*})/
        );
        if (singleFileExportMatch) {
          const codeValue = singleFileExportMatch[1].trim();

          // Handle different code formats
          if (codeValue.startsWith('`')) {
            // Inline template literal
            const match = codeValue.match(/`([\s\S]*?)`/);
            if (match) {
              let code = match[1];
              code = code.replace(/\{\{props\}\}/g, '');
              return code.trim();
            }
          } else if (codeValue.match(/^['"][\s\S]*?['"]$/)) {
            // Direct string
            const match = codeValue.match(/^['"]([^'"]*?)['"]$/);
            return match ? match[1].trim() : null;
          } else {
            // Variable reference
            const varName = codeValue;
            // Extract the code variable using dedicated function
            const extractedCode = await this.extractCodeVariable(varName, content, demoDir);
            if (extractedCode) {
              return extractedCode;
            }

            // Check if it's a function that returns a template literal
            const varFunctionMatch = content.match(
              new RegExp(`const ${varName}\\s*=\\s*\\([^)]*\\)\\s*=>\\s*\`([\\s\\S]*?)\``)
            );
            if (varFunctionMatch) {
              let code = varFunctionMatch[1];
              // Replace prop interpolations with defaults
              code = code.replace(/\$\{props\.gradientFrom[^}]*\}/g, 'cyan');
              code = code.replace(/\$\{props\.gradientTo[^}]*\}/g, 'blue');
              code = code.replace(/\$\{props\.gradientDegree[^}]*\}/g, '90');
              code = code.replace(/\$\{props\.size[^}]*\}/g, 'md');
              code = code.replace(/\$\{props\.position[^}]*\}/g, 'bottom');
              code = code.replace(/\$\{props\.[^}]+\}/g, '');
              return code.trim();
            }
          }
        }

        // If we still can't extract, check if it's a demo with no code property
        // In this case, return the entire component function as the demo code
        const componentFunctionMatch = content.match(/function Demo\(\)\s*{([\s\S]*?)^}/m);
        if (componentFunctionMatch) {
          // Return the entire Demo component as the code
          return `function Demo() {${componentFunctionMatch[1]}}`;
        }

        // If we still can't extract, return null silently
        return null;
      }
    } catch (error) {
      // Could not load demo
    }
    return null;
  }

  private async extractCodeVariable(
    varName: string,
    content: string,
    demoDir: string
  ): Promise<string> {
    // Try to find the variable declaration
    const varDeclPattern = new RegExp(`const ${varName}\\s*=\\s*\``, 'm');
    const varDeclMatch = content.match(varDeclPattern);

    if (varDeclMatch && varDeclMatch.index !== undefined) {
      // Find the matching closing backtick by tracking nested backticks and braces
      const startIdx = varDeclMatch.index + varDeclMatch[0].length;
      let endIdx = startIdx;
      let templateDepth = 1;
      let braceDepth = 0;
      let inExpression = false;

      while (endIdx < content.length && templateDepth > 0) {
        const char = content[endIdx];
        const prevChar = endIdx > 0 ? content[endIdx - 1] : '';

        // Handle escaped characters
        if (prevChar === '\\') {
          endIdx++;
          continue;
        }

        // Track template literal boundaries
        if (char === '`') {
          if (!inExpression) {
            templateDepth--;
          }
        }
        // Track expression boundaries
        else if (char === '$' && content[endIdx + 1] === '{') {
          inExpression = true;
          braceDepth++;
          endIdx++; // Skip the {
        } else if (char === '{' && inExpression) {
          braceDepth++;
        } else if (char === '}' && inExpression) {
          braceDepth--;
          if (braceDepth === 0) {
            inExpression = false;
          }
        }

        endIdx++;
      }

      if (templateDepth === 0) {
        // Get the extracted content and handle escaped characters
        let extracted = content.substring(startIdx, endIdx - 1);
        // Replace escaped backticks with regular backticks
        extracted = extracted.replace(/\\`/g, '`');
        // Replace escaped dollar signs with regular dollar signs
        extracted = extracted.replace(/\\\$/g, '$');
        return extracted;
      }
    }

    // Fallback to simpler patterns
    const patterns = [
      // Single quotes: const code = '...';
      new RegExp(`const ${varName}\\s*=\\s*'([\\s\\S]*?)';`, 'm'),
      // Double quotes: const code = "...";
      new RegExp(`const ${varName}\\s*=\\s*"([\\s\\S]*?)";`, 'm'),
    ];

    // Try each pattern in the current file
    for (const pattern of patterns) {
      const match = content.match(pattern);
      if (match) {
        return match[1];
      }
    }

    // If not found in current file, check imports
    const importMatch = content.match(
      new RegExp(`import\\s*{[^}]*\\b${varName}\\b[^}]*}\\s*from\\s*['"]([^'"]+)['"]`)
    );

    if (importMatch) {
      const importPath = importMatch[1];
      const extensions = ['.tsx', '.ts', '.js', '.jsx'];

      for (const ext of extensions) {
        try {
          const resolvedPath = path.resolve(demoDir, importPath + ext);
          const importedContent = await fs.readFile(resolvedPath, 'utf-8');

          // Try patterns with export prefix
          const exportPatterns = [
            new RegExp(`export const ${varName}\\s*=\\s*\`([\\s\\S]*?)\`;`, 'm'),
            new RegExp(`export const ${varName}\\s*=\\s*\`([\\s\\S]*?)\`(?:\\s|$)`, 'm'),
            new RegExp(`export const ${varName}\\s*=\\s*'([\\s\\S]*?)';`, 'm'),
            new RegExp(`export const ${varName}\\s*=\\s*"([\\s\\S]*?)";`, 'm'),
          ];

          for (const pattern of exportPatterns) {
            const match = importedContent.match(pattern);
            if (match) {
              return match[1];
            }
          }
        } catch (e) {
          // Try next extension
        }
      }
    }

    return '';
  }

  private getSharedComponentContent(componentName: string, attributes: any[]): string {
    // Extract component prop from attributes
    const componentAttr = attributes?.find((attr: any) => attr.name === 'component');
    const component = componentAttr?.value || 'Component';

    switch (componentName) {
      case 'AutoContrast': {
        const withVariantAttr = attributes?.find((attr: any) => attr.name === 'withVariant');
        const withVariant = withVariantAttr ? withVariantAttr.value !== 'false' : true;

        let autoContrastContent = `## autoContrast

${component} supports autoContrast prop and [theme.autoContrast](https://mantine.dev/theming/theme-object/#autocontrast). If autoContrast is set either on ${component} or on theme, content color will be adjusted to have sufficient contrast with the value specified in color prop.

Note that autoContrast feature works only if you use color prop to change background color.`;

        if (withVariant) {
          autoContrastContent += ' autoContrast works only with filled variant.';
        }

        return autoContrastContent;
      }

      case 'GetElementRef': {
        const refTypeAttr = attributes?.find((attr: any) => attr.name === 'refType');
        const refType = refTypeAttr?.value || 'HTMLElement';
        const refTypeMap: Record<string, string> = {
          div: 'HTMLDivElement',
          button: 'HTMLButtonElement',
          input: 'HTMLInputElement',
          textarea: 'HTMLTextAreaElement',
          select: 'HTMLSelectElement',
          a: 'HTMLAnchorElement',
        };
        const actualRefType = refTypeMap[refType] || refType;
        return `## Get element ref

\`\`\`tsx
import { useRef } from 'react';
import { ${component} } from '@mantine/core';

function Demo() {
  const ref = useRef<${actualRefType}>(null);
  return <${component} ref={ref} />;
}
\`\`\``;
      }

      case 'Polymorphic': {
        const defaultElementAttr = attributes?.find((attr: any) => attr.name === 'defaultElement');
        const changeToElementAttr = attributes?.find(
          (attr: any) => attr.name === 'changeToElement'
        );
        const withNextAttr = attributes?.find((attr: any) => attr.name === 'withNext');

        const defaultElement = defaultElementAttr?.value || 'div';
        const changeToElement = changeToElementAttr?.value || 'span';
        const withNext = withNextAttr !== undefined;

        let polymorphicContent = `## Polymorphic component

${component} is a polymorphic component – its default root element is ${defaultElement}, but it can be changed to any other element or component with component prop:

\`\`\`tsx
import { ${component} } from '@mantine/core';

function Demo() {
  return <${component} component="${changeToElement}" />;
}
\`\`\``;

        if (withNext) {
          polymorphicContent += `

You can also use components in component prop, for example, Next.js Link:

\`\`\`tsx
import Link from 'next/link';
import { ${component} } from '@mantine/core';

function Demo() {
  return <${component} component={Link} href="/" />;
}
\`\`\``;
        }

        polymorphicContent += `

**Polymorphic components with TypeScript**

Note that polymorphic components props types are different from regular components – they do not extend HTML element props of the default element. For example, ${component}Props does not extend React.ComponentPropsWithoutRef<'${defaultElement}'> although ${defaultElement} is the default element.

If you want to create a wrapper for a polymorphic component that is not polymorphic (does not support component prop), then your component props interface should extend HTML element props.`;

        return polymorphicContent;
      }

      case 'ServerComponentsIncompatible': {
        return `## Server components

${component} is not compatible with React Server Components as it uses useEffect and other client-side features. You can use it in client components only.`;
      }

      case 'Gradient': {
        return `## Gradient

${component} supports Mantine color format in color prop. Color can be specified as:
- Mantine color name (e.g., 'blue')
- CSS color value (e.g., '#fff', 'rgba(255, 255, 255, 0.8)')
- Gradient string (e.g., 'linear-gradient(45deg, blue, red)')`;
      }

      case 'InputAccessibility': {
        return `## Accessibility

${component} provides better accessibility support when used in forms. Make sure to associate the input with a label for better screen reader support.`;
      }

      case 'FlexboxGapSupport': {
        return `## Browser support

Flex component uses CSS flexbox gap to add spacing between children. Flexbox gap is supported by all modern browsers, but if you need to support older browsers, use Space component instead.`;
      }

      case 'ComboboxData': {
        return `## Data prop

Data that is used in ${component} must be an array of strings or objects with value and label properties. You can also specify additional properties that will be available in renderOption function.`;
      }

      case 'ComboboxFiltering': {
        return `## Filtering

${component} provides built-in filtering functionality. You can control filtering behavior with filter prop or implement custom filtering logic.`;
      }

      case 'ComboboxLargeData': {
        return `## Large datasets

${component} can handle large datasets efficiently. Consider implementing virtualization for datasets with thousands of items to improve performance.`;
      }

      case 'InputFeatures': {
        const elementAttr = attributes?.find((attr: any) => attr.name === 'element');
        const element = elementAttr?.value || 'input';
        return `${component} component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all ${element} element props. ${component} documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.`;
      }

      case 'InputSections': {
        return `## Input sections

${component} supports left and right sections to display icons, buttons or other content alongside the input.`;
      }

      case 'TargetComponent': {
        return `## Target component

The target element determines where the ${component} will be positioned relative to.`;
      }

      case 'WrapperProps': {
        return `## Wrapper props

${component} supports additional props that are passed to the wrapper element for more customization options.`;
      }

      default: {
        return `## ${componentName}

Additional information about ${component} component.`;
      }
    }
  }

  private async addComponentProps(componentName: string) {
    const propsData = this.propsData.get(componentName.toLowerCase());

    if (!propsData || !propsData.props) {
      return;
    }

    this.output.push('');
    this.output.push('#### Props');
    this.output.push('');
    this.output.push('| Prop | Type | Default | Description |');
    this.output.push('|------|------|---------|-------------|');

    for (const [propName, propData] of Object.entries(propsData.props as any)) {
      const { type, defaultValue, description, required } = propData as any;
      const typeStr = type?.name || 'unknown';
      const defaultStr = defaultValue?.value || (required ? 'required' : '-');
      const descStr = description || '-';

      this.output.push(`| ${propName} | ${typeStr} | ${defaultStr} | ${descStr} |`);
    }

    this.output.push('');
  }

  private async addComponentStylesApi(componentName: string) {
    // Get all styles data for this component (including sub-components like Radio.Group)
    const allStylesData: Array<{ name: string; data: any }> = [];

    // First, get the main component styles
    const mainData = this.stylesApiData.get(componentName.toLowerCase());
    if (mainData && mainData.selectors && Object.keys(mainData.selectors).length > 0) {
      allStylesData.push({ name: componentName, data: mainData });
    }

    // Then, look for sub-components (e.g., RadioGroup, RadioIndicator, RadioCard)
    for (const [key, data] of this.stylesApiData.entries()) {
      if (key.startsWith(componentName.toLowerCase()) && key !== componentName.toLowerCase()) {
        const subName = key.replace(componentName.toLowerCase(), '');
        // Convert radioindicator -> Radio.Indicator, radiogroup -> Radio.Group
        const formattedSubName = subName
          .replace(/^group$/, '.Group')
          .replace(/^indicator$/, '.Indicator')
          .replace(/^card$/, '.Card')
          .replace(/^tabs$/, '.Tabs');

        if (data.selectors && Object.keys(data.selectors).length > 0) {
          allStylesData.push({ name: componentName + formattedSubName, data });
        }
      }
    }

    if (allStylesData.length === 0) {
      return;
    }

    this.output.push('');
    this.output.push('#### Styles API');
    this.output.push('');
    this.output.push(
      `${componentName} component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.`
    );
    this.output.push('');

    // Process each component's styles
    for (const { name, data } of allStylesData) {
      const componentPrefix = name.replace(/\./g, '');

      // Add selectors table
      if (data.selectors && Object.keys(data.selectors).length > 0) {
        this.output.push(`**${name} selectors**`);
        this.output.push('');
        this.output.push('| Selector | Static selector | Description |');
        this.output.push('|----------|----------------|-------------|');

        for (const [selector, description] of Object.entries(data.selectors)) {
          // Skip spread placeholders
          if (selector.startsWith('_spread_')) {
            continue;
          }

          // Generate the CSS class name from the selector
          const className = `.mantine-${componentPrefix}-${selector}`;
          this.output.push(`| ${selector} | ${className} | ${description} |`);
        }
        this.output.push('');
      }

      // Add CSS variables table
      if (data.vars && Object.keys(data.vars).length > 0) {
        const hasActualVars = Object.keys(data.vars).some((k) => !k.startsWith('_ref_'));

        if (hasActualVars) {
          this.output.push(`**${name} CSS variables**`);
          this.output.push('');
          this.output.push('| Selector | Variable | Description |');
          this.output.push('|----------|----------|-------------|');

          for (const [component, variables] of Object.entries(data.vars)) {
            // Skip reference entries
            if (component.startsWith('_ref_')) {
              continue;
            }

            if (typeof variables === 'object' && variables && !(variables as any).from) {
              for (const [varName, description] of Object.entries(variables)) {
                this.output.push(`| ${component} | ${varName} | ${description} |`);
              }
            }
          }
          this.output.push('');
        }
      }

      // Add data attributes table
      if (data.modifiers && data.modifiers.length > 0) {
        this.output.push(`**${name} data attributes**`);
        this.output.push('');
        this.output.push('| Selector | Attribute | Condition | Value |');
        this.output.push('|----------|-----------|-----------|-------|');

        for (const modifier of data.modifiers) {
          const selector = modifier.selector || '-';
          const attribute = modifier.modifier || '-';
          const condition = modifier.condition || '-';
          const value = modifier.value || '-';
          this.output.push(`| ${selector} | ${attribute} | ${condition} | ${value} |`);
        }
        this.output.push('');
      }
    }
  }

  private async processFaqContent() {
    // Processing FAQ content

    this.output.push('## FREQUENTLY ASKED QUESTIONS');
    this.output.push('');

    const faqFiles = await glob('**/*.mdx', {
      cwd: this.config.mdxPaths.help,
      absolute: true,
    });

    for (const file of faqFiles) {
      await this.processSingleFaq(file);
    }
  }

  private async processSingleFaq(filePath: string) {
    try {
      const content = await fs.readFile(filePath, 'utf-8');

      // Extract metadata from export const meta object
      let title = '';
      let description = '';
      const metaMatch = content.match(/export const meta = {([\s\S]*?)};/);
      if (metaMatch) {
        const metaContent = metaMatch[1];
        // Extract title
        const titleMatch = metaContent.match(/title:\s*['"`]([^'"`]+)['"`]/);
        if (titleMatch) {
          title = titleMatch[1];
        }
        // Extract description
        const descMatch = metaContent.match(/description:\s*['"`]([^'"`]+)['"`]/);
        if (descMatch) {
          description = descMatch[1];
        }
      }

      // Format title as # {title}
      if (title) {
        this.output.push(`# ${title}`);
      }

      // Add description on the next line
      if (description) {
        this.output.push(description);
      }

      this.output.push('');

      // Process FAQ content with custom extraction
      const processedContent = await this.extractFaqContent(content, filePath);
      this.output.push(processedContent);
      this.output.push('');
      this.output.push('-'.repeat(40));
      this.output.push('');
    } catch (error) {
      // Error processing FAQ
    }
  }

  private async extractFaqContent(content: string, filePath: string): Promise<string> {
    // First, extract all code blocks to preserve them
    const codeBlocks: string[] = [];
    const codeBlockRegex = /```[\w]*\n([\s\S]*?)\n```/g;
    let match;
    while ((match = codeBlockRegex.exec(content)) !== null) {
      codeBlocks.push(match[0]);
    }

    // Replace code blocks with placeholders temporarily
    let contentWithPlaceholders = content;
    codeBlocks.forEach((block, index) => {
      contentWithPlaceholders = contentWithPlaceholders.replace(
        block,
        `CODEBLOCK_PLACEHOLDER_${index}`
      );
    });

    // Remove imports, export default Layout, and meta export (but not from code blocks)
    let inImportBlock = false;
    const contentLines = contentWithPlaceholders.split('\n').filter((line) => {
      const trimmed = line.trim();

      // Check if we're starting an import
      if (trimmed.startsWith('import ')) {
        inImportBlock = !line.includes(';');
        return false;
      }

      // Check if we're in a multi-line import
      if (inImportBlock) {
        if (line.includes(';')) {
          inImportBlock = false;
        }
        return false;
      }

      // Skip export default Layout
      if (trimmed.startsWith('export default Layout')) {
        return false;
      }

      return true;
    });

    // Remove the meta export
    let contentWithoutMeta = contentLines
      .join('\n')
      .replace(/export const meta = {[\s\S]*?};/g, '');

    // Restore code blocks
    codeBlocks.forEach((block, index) => {
      contentWithoutMeta = contentWithoutMeta.replace(`CODEBLOCK_PLACEHOLDER_${index}`, block);
    });

    // Extract demo names from imports
    const demoNames: string[] = [];
    const importMatch = content.match(/import\s*{([^}]+)}\s*from\s*['"]@\/demos\/[^'"]+['"]/);
    if (importMatch) {
      const imports = importMatch[1].split(',').map((name) => name.trim());
      demoNames.push(...imports);
    }

    // Process with unified/remark
    const processor = unified()
      .use(remarkParse as any)
      .use(remarkMdx as any)
      .use(() => {
        return (tree: any) => {
          visit(
            tree,
            'mdxJsxFlowElement',
            (node: any, _index: number | undefined, _parent: any) => {
              if (node.name === 'Demo' && node.attributes) {
                const dataAttr = node.attributes.find((attr: any) => attr.name === 'data');
                if (dataAttr) {
                  let demoName = '';

                  // Handle different attribute value formats
                  if (
                    dataAttr.value &&
                    typeof dataAttr.value === 'object' &&
                    dataAttr.value.type === 'mdxJsxAttributeValueExpression'
                  ) {
                    // Expression like {AlignInputButton}
                    demoName = dataAttr.value.value || '';
                  } else if (typeof dataAttr.value === 'string') {
                    // Direct string value
                    demoName = dataAttr.value;
                  }

                  if (demoName) {
                    // For FAQ demos, we need to load them specially
                    node.type = 'paragraph';
                    node.children = [
                      {
                        type: 'text',
                        value: `FAQDEMOPLACEHOLDER::${demoName}::END`,
                      },
                    ];
                  }
                }
              }
            }
          );
        };
      })
      .use(remarkStringify as any);

    let result = String(await processor.process(contentWithoutMeta));

    // Load and replace FAQ demos - find all placeholders in the result
    const placeholderRegex = /FAQDEMOPLACEHOLDER::([^:]+)::END/g;
    let placeholderMatch;
    while ((placeholderMatch = placeholderRegex.exec(result)) !== null) {
      const demoName = placeholderMatch[1];
      const placeholder = placeholderMatch[0];
      const demoCode = await this.loadFaqDemoCode(demoName, filePath);
      if (demoCode) {
        const demoSection = [`#### Example: ${demoName}`, '', '```tsx', demoCode, '```', ''].join(
          '\n'
        );
        result = result.replace(placeholder, demoSection);
      } else {
        result = result.replace(placeholder, '');
      }
    }

    return result;
  }

  private async loadFaqDemoCode(demoName: string, faqFilePath: string): Promise<string | null> {
    try {
      // FAQ demos are in the same directory structure as the FAQ pages
      const faqDir = path.dirname(faqFilePath);
      const demosDir = path.join(path.dirname(path.dirname(faqDir)), 'demos');
      const demoFile = path.join(demosDir, `${demoName}.demo.tsx`);

      // First try the exact file name
      if (await fs.pathExists(demoFile)) {
        const content = await fs.readFile(demoFile, 'utf-8');

        // Look for the named export
        const exportRegex = new RegExp(
          `export const ${demoName}:\\s*MantineDemo\\s*=\\s*{[\\s\\S]*?}\\s*;`
        );
        const exportMatch = content.match(exportRegex);

        if (exportMatch) {
          // Extract code from the export
          const exportContent = exportMatch[0];

          // Check if it's a multi-file demo (code is an array)
          const codeArrayMatch = exportContent.match(/code:\s*\[/);
          if (codeArrayMatch) {
            // For multi-file demos, we need to extract from the array structure
            // Look for all code references in the array
            const codeRefs = exportContent.match(/code:\s*(\w+)/g);
            if (codeRefs) {
              // Try to find a variable that ends with 'Code' and contains TSX
              for (const codeRefMatch of codeRefs) {
                const codeRef = codeRefMatch.replace(/code:\s*/, '').trim();
                if (codeRef && !codeRef.startsWith('[')) {
                  const codeVarMatch = content.match(
                    new RegExp(`const ${codeRef}\\s*=\\s*\`([\\s\\S]*?)\``, 'm')
                  );
                  if (codeVarMatch) {
                    const code = codeVarMatch[1];
                    // Check if this looks like TSX code (has JSX elements or React imports)
                    if (
                      code.includes('import') &&
                      (code.includes("from '@mantine") ||
                        code.includes('function') ||
                        code.includes('return'))
                    ) {
                      return code.trim();
                    }
                  }
                }
              }
            }
          } else {
            // Single file demo
            const codeMatch = exportContent.match(/code:\s*([^,}]+)/);
            if (codeMatch) {
              const codeRef = codeMatch[1].trim();

              // If code is a variable reference, find its definition
              if (
                !codeRef.startsWith('`') &&
                !codeRef.startsWith('"') &&
                !codeRef.startsWith("'")
              ) {
                const codeVarMatch = content.match(
                  new RegExp(`const ${codeRef}\\s*=\\s*\`([\\s\\S]*?)\``, 'm')
                );
                if (codeVarMatch) {
                  return codeVarMatch[1].trim();
                }
              } else {
                // Direct string
                const match = codeRef.match(/^['"`]([^'"`]*?)['"`]$/);
                if (match) {
                  return match[1];
                }
              }
            }
          }
        }

        // Fallback: look for const code = `...`
        const codeMatch = content.match(/const code\s*=\s*`([\s\S]*?)`;?/);
        if (codeMatch) {
          return codeMatch[1].trim();
        }
      } else {
        // If exact file doesn't exist, search all demo files in the directory
        const allDemoFiles = await glob('*.demo.tsx', { cwd: demosDir, absolute: true });

        for (const file of allDemoFiles) {
          const content = await fs.readFile(file, 'utf-8');

          // Look for the named export
          const exportRegex = new RegExp(
            `export const ${demoName}:\\s*MantineDemo\\s*=\\s*{[\\s\\S]*?}\\s*;`
          );
          const exportMatch = content.match(exportRegex);

          if (exportMatch) {
            // Extract code from the export
            const exportContent = exportMatch[0];

            // Check if it's a multi-file demo (code is an array)
            const codeArrayMatch = exportContent.match(/code:\s*\[/);
            if (codeArrayMatch) {
              // For multi-file demos, we need to extract from the array structure
              // Look for all code references in the array
              const codeRefs = exportContent.match(/code:\s*(\w+)/g);
              if (codeRefs) {
                // Try to find a variable that ends with 'Code' and contains TSX
                for (const codeRefMatch of codeRefs) {
                  const codeRef = codeRefMatch.replace(/code:\s*/, '').trim();
                  if (codeRef && !codeRef.startsWith('[')) {
                    const codeVarMatch = content.match(
                      new RegExp(`const ${codeRef}\\s*=\\s*\`([\\s\\S]*?)\``, 'm')
                    );
                    if (codeVarMatch) {
                      const code = codeVarMatch[1];
                      // Check if this looks like TSX code (has JSX elements or React imports)
                      if (
                        code.includes('import') &&
                        (code.includes("from '@mantine") ||
                          code.includes('function') ||
                          code.includes('return'))
                      ) {
                        return code.trim();
                      }
                    }
                  }
                }
              }
            } else {
              // Single file demo
              const codeMatch = exportContent.match(/code:\s*([^,}]+)/);
              if (codeMatch) {
                const codeRef = codeMatch[1].trim();

                // If code is a variable reference, find its definition
                if (
                  !codeRef.startsWith('`') &&
                  !codeRef.startsWith('"') &&
                  !codeRef.startsWith("'")
                ) {
                  const codeVarMatch = content.match(
                    new RegExp(`const ${codeRef}\\s*=\\s*\`([\\s\\S]*?)\``, 'm')
                  );
                  if (codeVarMatch) {
                    return codeVarMatch[1].trim();
                  }
                } else {
                  // Direct string
                  const match = codeRef.match(/^['"`]([^'"`]*?)['"`]$/);
                  if (match) {
                    return match[1];
                  }
                }
              }
            }
          }
        }
      }
    } catch (error) {
      // Silent fail
    }
    return null;
  }

  private async writeOutput() {
    const outputContent = this.output.join('\n');

    // Write to LLM.md in root
    // await fs.writeFile(this.config.outputPath, outputContent, 'utf-8');

    // Write to llms.txt in public folder if publicPath is configured
    if (this.config.publicPath) {
      const llmsTxtPath = path.join(this.config.publicPath, 'llms.txt');
      await fs.writeFile(llmsTxtPath, outputContent, 'utf-8');
    }

    await fs.stat(this.config.outputPath);
    // Output files generated
  }
}

// Run the compiler
const compiler = new MantineLLMCompiler(config);
compiler.compile().catch(() => {
  // Handle compilation error
  process.exit(1);
});
