#!/usr/bin/env tsx
import path from 'path';
import glob from 'fast-glob';
import fs from 'fs-extra';
import matter from 'gray-matter';
import remarkMdx from 'remark-mdx';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';

interface CompilerConfig {
  outputDir: string;
  rootDir: string;
  mdxPaths: {
    docs: string;
    help: string;
  };
  demosPath: string;
  stylesApiPath: string;
  propsDataPath: string;
  mdxDataPath: string;
  maxFileSize: number; // in bytes
}

const config: CompilerConfig = {
  outputDir: './llm-docs',
  rootDir: process.cwd(),
  mdxPaths: {
    docs: './apps/mantine.dev/src/pages',
    help: './apps/help.mantine.dev/src/pages/q',
  },
  demosPath: './packages/@docs/demos/src/demos',
  stylesApiPath: './packages/@docs/styles-api/src/data',
  propsDataPath: './apps/mantine.dev/src/.docgen',
  mdxDataPath: './apps/mantine.dev/src/mdx/data',
  maxFileSize: 256 * 1024, // 256KB
};

interface PackageContent {
  name: string;
  output: string[];
  currentSize: number;
  fileIndex: number;
}

class MantineLLMCompiler {
  private packageContents: Map<string, PackageContent> = new Map();
  private mdxMetadata: Map<string, any> = new Map();
  private stylesApiData: Map<string, any> = new Map();
  private propsData: Map<string, any> = new Map();

  constructor(private config: CompilerConfig) {}

  async compile() {
    console.log('🚀 Starting Mantine LLM documentation compilation...');

    // Ensure output directory exists
    await fs.ensureDir(this.config.outputDir);

    // Clean output directory
    const existingFiles = await glob('*.md', {
      cwd: this.config.outputDir,
      absolute: true,
    });

    for (const file of existingFiles) {
      await fs.remove(file);
    }

    // Load all metadata first
    await this.loadMdxMetadata();
    await this.loadStylesApiData();
    await this.loadPropsData();

    // Process main documentation
    await this.processMdxFiles();

    // Process FAQ content separately
    await this.processFaqContent();

    // Write all package files
    await this.writeAllOutputs();

    console.log('✅ Compilation complete!');
    console.log(`📁 Output written to: ${this.config.outputDir}/`);
  }

  private getPackageContent(packageName: string): PackageContent {
    if (!this.packageContents.has(packageName)) {
      this.packageContents.set(packageName, {
        name: packageName,
        output: [],
        currentSize: 0,
        fileIndex: 1,
      });
      this.addPackageHeader(packageName);
    }
    return this.packageContents.get(packageName)!;
  }

  private addPackageHeader(packageName: string) {
    const content = this.getPackageContent(packageName);
    const header = [
      `# Mantine UI Library - ${packageName}`,
      '',
      `This file contains comprehensive documentation for the ${packageName} package including:`,
      '- Complete component documentation with all usage examples',
      '- Full demo code for every example shown in the documentation',
      '- Complete props tables with types and descriptions for all components',
      '- Styles API documentation showing all available selectors',
      '',
      '='.repeat(80),
      '',
    ];

    this.addToPackage(packageName, header);
  }

  private addToPackage(packageName: string, lines: string[]) {
    const content = this.getPackageContent(packageName);
    const newContent = lines.join('\n');
    const newSize = Buffer.byteLength(newContent, 'utf8');

    // Check if adding this content would exceed the size limit
    if (content.currentSize + newSize > this.config.maxFileSize && content.output.length > 0) {
      // Write current content to file and start a new one
      this.writePackageFile(packageName);

      // Reset for new file
      content.output = [];
      content.currentSize = 0;
      content.fileIndex++;
      this.addPackageHeader(packageName);
    }

    content.output.push(...lines);
    content.currentSize += newSize;
  }

  private async loadMdxMetadata() {
    console.log('📚 Loading MDX metadata...');

    const dataFiles = await glob('mdx-*-data.ts', {
      cwd: this.config.mdxDataPath,
      absolute: true,
    });

    for (const file of dataFiles) {
      try {
        const content = await fs.readFile(file, 'utf-8');

        // Extract MDX data exports
        const exportMatch = content.match(/export const MDX_\w+_DATA[^=]*=\s*{([\s\S]*?)};/);
        if (!exportMatch) continue;

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
          }
        }
      } catch (error) {
        console.warn(`Warning: Could not parse ${file}:`, error);
      }
    }

    console.log(`📊 Loaded metadata for ${this.mdxMetadata.size / 2} components`);
  }

  private async loadStylesApiData() {
    console.log('🎨 Loading Styles API data...');

    const stylesFiles = await glob('**/*.styles-api.ts', {
      cwd: this.config.stylesApiPath,
      absolute: true,
    });

    for (const file of stylesFiles) {
      try {
        const content = await fs.readFile(file, 'utf-8');
        const componentName = path.basename(file, '.styles-api.ts');

        // Extract selectors and vars
        const selectorsMatch = content.match(/selectors:\s*({[\s\S]*?})/);
        const varsMatch = content.match(/vars:\s*({[\s\S]*?})/);

        if (selectorsMatch || varsMatch) {
          this.stylesApiData.set(componentName.toLowerCase(), {
            selectors: selectorsMatch ? selectorsMatch[1] : null,
            vars: varsMatch ? varsMatch[1] : null,
            raw: content,
          });
        }
      } catch (error) {
        console.warn(`Could not load styles API for ${file}:`, error);
      }
    }

    console.log(`📊 Loaded Styles API data for ${this.stylesApiData.size} components`);
  }

  private async loadPropsData() {
    console.log('📊 Loading props data...');

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
        console.warn(`Could not load docgen data:`, error);
      }
    }

    console.log(`📊 Loaded props data for ${this.propsData.size / 2} components`);
  }

  private getCategoryPackageName(category: string): string | null {
    const categoryPackageMap: Record<string, string> = {
      core: '@mantine/core',
      hooks: '@mantine/hooks',
      dates: '@mantine/dates',
      charts: '@mantine/charts',
      x: '@mantine/x',
      form: '@mantine/form',
      notifications: '@mantine/notifications',
      nprogress: '@mantine/nprogress',
      tiptap: '@mantine/tiptap',
      dropzone: '@mantine/dropzone',
      carousel: '@mantine/carousel',
      spotlight: '@mantine/spotlight',
      modals: '@mantine/modals',
      'code-highlight': '@mantine/code-highlight',
      emotion: '@mantine/emotion',
      guides: null,
      theming: null,
      styles: null,
      other: null,
    };

    return categoryPackageMap[category] ?? null;
  }

  private async processMdxFiles() {
    console.log('📄 Processing MDX documentation files...');

    const mdxFiles = await glob('**/*.mdx', {
      cwd: this.config.mdxPaths.docs,
      absolute: true,
    });

    // Group files by package
    const filesByPackage = new Map<string, string[]>();

    for (const file of mdxFiles) {
      const relativePath = path.relative(this.config.mdxPaths.docs, file);
      const category = relativePath.split('/')[0];
      const packageName = this.getCategoryPackageName(category) || 'guides';

      if (!filesByPackage.has(packageName)) {
        filesByPackage.set(packageName, []);
      }
      filesByPackage.get(packageName)!.push(file);
    }

    // Process each package's files
    for (const [packageName, files] of filesByPackage) {
      console.log(`📦 Processing ${packageName} (${files.length} files)...`);

      for (const file of files) {
        await this.processSingleMdx(file, packageName);
      }
    }
  }

  private async processSingleMdx(filePath: string, targetPackage: string) {
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      const fileName = path.basename(filePath, '.mdx');

      // Try to get metadata from our loaded data
      const metadata = this.mdxMetadata.get(fileName.toLowerCase());
      const packageName = metadata?.package || targetPackage;

      // Extract component name from MDX file
      const componentMatch = content.match(/Layout\(MDX_DATA\.(\w+)\)/);
      const componentName = componentMatch ? componentMatch[1] : fileName;
      const componentTitle = metadata?.title || componentName;

      const componentLines: string[] = [];

      componentLines.push(`### ${componentTitle}`);

      if (packageName && packageName !== 'guides') {
        componentLines.push(`Package: ${packageName}`);
        const capitalizedComponent = componentName.charAt(0).toUpperCase() + componentName.slice(1);
        componentLines.push(`Import: import { ${capitalizedComponent} } from '${packageName}';`);
      }

      if (metadata?.description) {
        componentLines.push(`Description: ${metadata.description}`);
      }

      componentLines.push('');

      // Extract and process MDX content with embedded demos
      const processedContent = await this.extractMdxContent(content, packageName, componentName);
      componentLines.push(processedContent);

      // Add props documentation
      const propsLines = await this.getComponentProps(componentName);
      if (propsLines.length > 0) {
        componentLines.push(...propsLines);
      }

      // Add Styles API documentation
      const stylesLines = await this.getComponentStylesApi(componentName);
      if (stylesLines.length > 0) {
        componentLines.push(...stylesLines);
      }

      componentLines.push('');
      componentLines.push('-'.repeat(80));
      componentLines.push('');

      // Add to appropriate package
      this.addToPackage(packageName || 'guides', componentLines);
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error);
    }
  }

  private async extractMdxContent(
    content: string,
    packageName?: string,
    componentName?: string
  ): Promise<string> {
    // Remove import statements and export default Layout
    const cleanContent = content
      .split('\n')
      .filter((line) => {
        const trimmed = line.trim();
        return !trimmed.startsWith('import') && !trimmed.startsWith('export default Layout');
      })
      .join('\n');

    // Store demos we find for later processing
    const demosToInclude: Array<{ name: string; packageName?: string }> = [];

    // Process with remark to extract text content
    const processor = unified()
      .use(remarkParse)
      .use(remarkMdx)
      .use(() => {
        return (tree: any) => {
          // Remove component references and convert demos
          visit(tree, 'mdxJsxFlowElement', (node: any, index: number, parent: any) => {
            // Handle Demo components
            if (node.name === 'Demo' && node.attributes) {
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
            // Remove unwanted components
            else if (
              [
                'StylesApiSelectors',
                'KeyboardEventsTable',
                'InstallScript',
                'DataTable',
                'GetElementRef',
                'Polymorphic',
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
      .use(remarkStringify);

    let result = String(await processor.process(cleanContent));

    // Now replace each demo placeholder with the actual demo code
    for (const demo of demosToInclude) {
      const demoCode = await this.loadDemoCode(demo.name);
      if (demoCode) {
        const demoSection = [
          `#### Example: ${demo.name.split('.').pop()}`,
          '',
          '```tsx',
          demoCode,
          '```',
          '',
        ].join('\n');

        const placeholder = `DEMOPLACEHOLDER::${demo.name}::END`;
        if (result.includes(placeholder)) {
          result = result.replace(placeholder, demoSection);
        }
      } else {
        // If we can't find the demo, remove the placeholder
        result = result.replace(`DEMOPLACEHOLDER::${demo.name}::END`, '');
      }
    }

    return result;
  }

  private async loadDemoCode(demoName: string): Promise<string | null> {
    try {
      // Demo name format: ComponentDemos.demoname (e.g., AccordionDemos.configurator)
      const [componentWithDemos, demoId] = demoName.split('.');

      // Remove "Demos" suffix to get component name
      const component = componentWithDemos.replace(/Demos$/, '');

      // Find the demo file with pattern: Component.demo.demoId.tsx
      const demoPattern = `**/${component}/${component}.demo.${demoId}.tsx`;
      const demoFiles = await glob(demoPattern, {
        cwd: this.config.demosPath,
        absolute: true,
      });

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
              files.push(`// ${fileName}\n${fileCode.trim()}`);
            }
          }

          if (files.length > 0) {
            return files.join('\n\n');
          }
        }

        // Single file demo - try existing patterns
        // First, try to find a standalone code template literal (most common pattern)
        const standaloneCodeMatch = content.match(/const code\s*=\s*`([\s\S]*?)`(?:\s*;|\s*\n)/);
        if (standaloneCodeMatch) {
          // Clean up the code: remove {{props}} placeholders
          let code = standaloneCodeMatch[1];
          code = code.replace(/\{\{props\}\}/g, '');
          return code.trim();
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
            // Check if it's a direct template literal
            const varContentMatch = content.match(
              new RegExp(`const ${varName}\\s*=\\s*\`([\\s\\S]*?)\``)
            );
            if (varContentMatch) {
              let code = varContentMatch[1];
              code = code.replace(/\{\{props\}\}/g, '');
              return code.trim();
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

        // If we still can't extract, return null
        return null;
      }
    } catch (error) {
      console.warn(`Could not load demo ${demoName}:`, error);
    }
    return null;
  }

  private async extractCodeVariable(
    varName: string,
    content: string,
    demoDir: string
  ): Promise<string> {
    // Try different patterns to extract code
    const patterns = [
      // Template literal: const code = `...`;
      new RegExp(`const ${varName}\\s*=\\s*\`([\\s\\S]*?)\`;`, 'm'),
      // Template literal without semicolon: const code = `...`
      new RegExp(`const ${varName}\\s*=\\s*\`([\\s\\S]*?)\`(?:\\s|$)`, 'm'),
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

  private async getComponentProps(componentName: string): Promise<string[]> {
    const propsData = this.propsData.get(componentName.toLowerCase());

    if (!propsData || !propsData.props) {
      return [];
    }

    const lines: string[] = [];
    lines.push('');
    lines.push('#### Props');
    lines.push('');
    lines.push('| Prop | Type | Default | Description |');
    lines.push('|------|------|---------|-------------|');

    for (const [propName, propData] of Object.entries(propsData.props as any)) {
      const { type, defaultValue, description, required } = propData as any;
      const typeStr = type?.name || 'unknown';
      const defaultStr = defaultValue?.value || (required ? 'required' : '-');
      const descStr = description || '-';

      lines.push(`| ${propName} | ${typeStr} | ${defaultStr} | ${descStr} |`);
    }

    lines.push('');
    return lines;
  }

  private async getComponentStylesApi(componentName: string): Promise<string[]> {
    const stylesData = this.stylesApiData.get(componentName.toLowerCase());

    if (!stylesData) {
      return [];
    }

    const lines: string[] = [];
    lines.push('');
    lines.push('#### Styles API');
    lines.push('');

    if (stylesData.selectors) {
      lines.push('This component supports the following CSS selectors:');
      lines.push('');
      lines.push('```typescript');
      lines.push(stylesData.selectors);
      lines.push('```');
    }

    if (stylesData.vars) {
      lines.push('');
      lines.push('CSS variables:');
      lines.push('');
      lines.push('```typescript');
      lines.push(stylesData.vars);
      lines.push('```');
    }

    lines.push('');
    return lines;
  }

  private async processFaqContent() {
    console.log('❓ Processing FAQ content...');

    const faqFiles = await glob('**/*.mdx', {
      cwd: this.config.mdxPaths.help,
      absolute: true,
    });

    const faqLines: string[] = [];
    faqLines.push('## FREQUENTLY ASKED QUESTIONS');
    faqLines.push('');

    for (const file of faqFiles) {
      const content = await fs.readFile(file, 'utf-8');
      const { data: frontmatter, content: mdxContent } = matter(content);

      if (frontmatter.title) {
        faqLines.push(`### FAQ: ${frontmatter.title}`);
      }

      if (frontmatter.description) {
        faqLines.push(`${frontmatter.description}`);
      }

      faqLines.push('');

      const processedContent = await this.extractMdxContent(mdxContent, undefined);
      faqLines.push(processedContent);
      faqLines.push('');
      faqLines.push('-'.repeat(40));
      faqLines.push('');
    }

    // Add FAQ to a separate file
    this.addToPackage('faq', faqLines);
  }

  private writePackageFile(packageName: string) {
    const content = this.getPackageContent(packageName);
    // Sanitize package name for filesystem (replace @mantine/core with mantine-core)
    const safePackageName = packageName.replace('@', '').replace(/\//g, '-');
    const fileName =
      content.fileIndex > 1
        ? `${safePackageName}-${content.fileIndex}.md`
        : `${safePackageName}.md`;

    const filePath = path.join(this.config.outputDir, fileName);
    const outputContent = content.output.join('\n');

    fs.writeFileSync(filePath, outputContent, 'utf-8');

    const stats = fs.statSync(filePath);
    console.log(`  📄 ${fileName} - ${(stats.size / 1024).toFixed(1)} KB`);
  }

  private async writeAllOutputs() {
    console.log('\n📝 Writing output files...');

    for (const [packageName, content] of this.packageContents) {
      if (content.output.length > 0) {
        this.writePackageFile(packageName);
      }
    }

    // Create an index file
    const indexContent = [
      '# Mantine UI Library Documentation Index',
      '',
      'This directory contains comprehensive documentation for the Mantine UI library.',
      'Each file corresponds to a specific package or section of the documentation.',
      '',
      '## Files in this directory:',
      '',
    ];

    const files = await glob('*.md', {
      cwd: this.config.outputDir,
    });

    for (const file of files.sort()) {
      const stats = await fs.stat(path.join(this.config.outputDir, file));
      const sizeKB = (stats.size / 1024).toFixed(1);
      indexContent.push(`- ${file} (${sizeKB} KB)`);
    }

    await fs.writeFile(
      path.join(this.config.outputDir, 'index.md'),
      indexContent.join('\n'),
      'utf-8'
    );
  }
}

// Run the compiler
const compiler = new MantineLLMCompiler(config);
compiler.compile().catch(console.error);
