import path from 'path';
import glob from 'fast-glob';
import fs from 'fs-extra';

export async function extractCodeVariable(
  varName: string,
  content: string,
  demoDir: string
): Promise<string> {
  const varDeclPattern = new RegExp(`const ${varName}\\s*=\\s*\``, 'm');
  const varDeclMatch = content.match(varDeclPattern);

  if (varDeclMatch && varDeclMatch.index !== undefined) {
    const startIdx = varDeclMatch.index + varDeclMatch[0].length;
    let endIdx = startIdx;
    let templateDepth = 1;
    let braceDepth = 0;
    let inExpression = false;

    while (endIdx < content.length && templateDepth > 0) {
      const char = content[endIdx];
      const prevChar = endIdx > 0 ? content[endIdx - 1] : '';

      if (prevChar === '\\') {
        endIdx++;
        continue;
      }

      if (char === '`') {
        if (!inExpression) {
          templateDepth--;
        }
      } else if (char === '$' && content[endIdx + 1] === '{') {
        inExpression = true;
        braceDepth++;
        endIdx++;
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
      let extracted = content.substring(startIdx, endIdx - 1);
      extracted = extracted.replace(/\\`/g, '`');
      extracted = extracted.replace(/\\\$/g, '$');
      return extracted;
    }
  }

  const patterns = [
    new RegExp(`const ${varName}\\s*=\\s*'([\\s\\S]*?)';`, 'm'),
    new RegExp(`const ${varName}\\s*=\\s*"([\\s\\S]*?)";`, 'm'),
  ];

  for (const pattern of patterns) {
    const match = content.match(pattern);
    if (match) {
      return match[1];
    }
  }

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

async function resolveDemoFileViaIndex(
  demoName: string,
  demosPath: string
): Promise<string | null> {
  const [namespaceName, exportName] = demoName.split('.');
  const mainIndexPath = path.resolve(demosPath, '..', 'index.ts');

  try {
    const mainIndex = await fs.readFile(mainIndexPath, 'utf-8');
    const namespaceMatch = mainIndex.match(
      new RegExp(`export \\* as ${namespaceName} from ['"]([^'"]+)['"]`)
    );

    if (!namespaceMatch) {
      return null;
    }

    const namespaceDirRel = namespaceMatch[1];
    const namespaceDir = path.resolve(path.dirname(mainIndexPath), namespaceDirRel);
    const namespaceIndexPath = path.join(namespaceDir, 'index.ts');
    const namespaceIndex = await fs.readFile(namespaceIndexPath, 'utf-8');

    const exportMatch = namespaceIndex.match(
      new RegExp(`export\\s*\\{\\s*${exportName}\\s*\\}\\s*from\\s*['"]([^'"]+)['"]`)
    );

    if (!exportMatch) {
      return null;
    }

    const demoFileRel = exportMatch[1];
    const extensions = ['.tsx', '.ts'];
    for (const ext of extensions) {
      const demoFilePath = path.resolve(namespaceDir, demoFileRel + ext);
      if (await fs.pathExists(demoFilePath)) {
        return demoFilePath;
      }
    }
  } catch (e) {
    // Could not resolve via index
  }

  return null;
}

export async function loadDemoCode(demoName: string, demosPath: string): Promise<string | null> {
  try {
    const [componentWithDemos, demoId] = demoName.split('.');
    const component = componentWithDemos.replace(/Demos$/, '');

    const demoPattern = `**/${component}/${component}.demo.${demoId}.tsx`;
    const kebabCasePattern = `**/${component
      .replace(/([A-Z])/g, '-$1')
      .toLowerCase()
      .slice(1)}/${component}.demo.${demoId}.tsx`;

    let demoFiles = await glob(demoPattern, {
      cwd: demosPath,
      absolute: true,
    });

    if (demoFiles.length === 0) {
      demoFiles = await glob(kebabCasePattern, {
        cwd: demosPath,
        absolute: true,
      });
    }

    if (demoFiles.length === 0) {
      const resolvedPath = await resolveDemoFileViaIndex(demoName, demosPath);
      if (resolvedPath) {
        demoFiles = [resolvedPath];
      }
    }

    if (demoFiles.length > 0) {
      const content = await fs.readFile(demoFiles[0], 'utf-8');
      const demoDir = path.dirname(demoFiles[0]);

      const exportMatch = content.match(
        /export const \w+:\s*MantineDemo\s*=\s*{[\s\S]*?code:\s*\[([\s\S]*?)\],?[\s\S]*?}/
      );

      if (exportMatch) {
        const codeArrayContent = exportMatch[1];
        const files: string[] = [];
        const objectStrings = codeArrayContent.split(/},\s*{/);

        for (let objStr of objectStrings) {
          objStr = objStr.replace(/^\s*\{?\s*/, '').replace(/\s*\}?\s*$/, '');

          const fileNameMatch = objStr.match(/fileName:\s*['"]([^'"]+)['"]/);
          const fileName = fileNameMatch ? fileNameMatch[1] : '';

          const codeMatch = objStr.match(/code(?::\s*(\w+))?\s*,/);
          const codeRef = codeMatch ? codeMatch[1] || 'code' : '';

          if (!fileName || !codeRef) {
            continue;
          }

          let fileCode = '';

          if (codeRef.startsWith('`')) {
            const inlineMatch = codeRef.match(/`([\s\S]*?)`/);
            if (inlineMatch) {
              fileCode = inlineMatch[1];
            }
          } else if (codeRef.match(/^['"][\s\S]*?['"]$/)) {
            const stringMatch = codeRef.match(/^['"]([^'"]*?)['"]$/);
            if (stringMatch) {
              fileCode = stringMatch[1];
            }
          } else {
            const varName = codeRef;
            fileCode = await extractCodeVariable(varName, content, demoDir);
          }

          if (fileCode) {
            fileCode = fileCode.replace(/\{\{props\}\}/g, '');

            fileCode = fileCode.replace(/\$\{(\w+)\}/g, (match, varName) => {
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

      const codeVarMatch = content.match(/const code\s*=/);
      if (codeVarMatch) {
        const extractedCode = await extractCodeVariable('code', content, demoDir);
        if (extractedCode) {
          let code = extractedCode;
          code = code.replace(/\{\{props\}\}/g, '');

          code = code.replace(/\$\{(\w+)\}/g, (match, varName) => {
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

      const functionCodeMatch = content.match(/const code\s*=\s*\([^)]*\)\s*=>\s*`([\s\S]*?)`/);
      if (functionCodeMatch) {
        let code = functionCodeMatch[1];
        code = code.replace(/\$\{props\.gradientFrom[^}]*\}/g, 'cyan');
        code = code.replace(/\$\{props\.gradientTo[^}]*\}/g, 'blue');
        code = code.replace(/\$\{props\.gradientDegree[^}]*\}/g, '90');
        code = code.replace(/\$\{props\.size[^}]*\}/g, 'md');
        code = code.replace(/\$\{props\.position[^}]*\}/g, 'bottom');
        code = code.replace(/\$\{props\.[^}]+\}/g, '');
        return code.trim();
      }

      const singleFileExportMatch = content.match(
        /export const \w+:\s*MantineDemo\s*=\s*{[\s\S]*?code:\s*([^,}]+)(?:,|\s*})/
      );
      if (singleFileExportMatch) {
        const codeValue = singleFileExportMatch[1].trim();

        if (codeValue.startsWith('`')) {
          const match = codeValue.match(/`([\s\S]*?)`/);
          if (match) {
            let code = match[1];
            code = code.replace(/\{\{props\}\}/g, '');
            return code.trim();
          }
        } else if (codeValue.match(/^['"][\s\S]*?['"]$/)) {
          const match = codeValue.match(/^['"]([^'"]*?)['"]$/);
          return match ? match[1].trim() : null;
        } else {
          const varName = codeValue;
          const extractedCode = await extractCodeVariable(varName, content, demoDir);
          if (extractedCode) {
            return extractedCode;
          }

          const varFunctionMatch = content.match(
            new RegExp(`const ${varName}\\s*=\\s*\\([^)]*\\)\\s*=>\\s*\`([\\s\\S]*?)\``)
          );
          if (varFunctionMatch) {
            let code = varFunctionMatch[1];
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

      const componentFunctionMatch = content.match(/function Demo\(\)\s*{([\s\S]*?)^}/m);
      if (componentFunctionMatch) {
        return `function Demo() {${componentFunctionMatch[1]}}`;
      }

      return null;
    }
  } catch (error) {
    // Could not load demo
  }
  return null;
}
