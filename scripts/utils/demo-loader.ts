import path from 'path';
import glob from 'fast-glob';
import fs from 'fs-extra';

type ControlPrimitive = string | number | boolean | null;

const sharedControlExpressions = new Map<string, string>();
let sharedControlsLoaded = false;

function readBalancedExpression(
  source: string,
  startIndex: number
): { expression: string; end: number } {
  let i = startIndex;
  let depthParen = 0;
  let depthBracket = 0;
  let depthBrace = 0;
  let quote: '"' | "'" | '`' | null = null;

  while (i < source.length) {
    const ch = source[i];
    const prev = i > 0 ? source[i - 1] : '';

    if (quote) {
      if (ch === quote && prev !== '\\') {
        quote = null;
      }
      i += 1;
      continue;
    }

    if (ch === '"' || ch === "'" || ch === '`') {
      quote = ch as '"' | "'" | '`';
      i += 1;
      continue;
    }

    if (ch === '(') depthParen += 1;
    else if (ch === ')') depthParen = Math.max(0, depthParen - 1);
    else if (ch === '[') depthBracket += 1;
    else if (ch === ']') depthBracket = Math.max(0, depthBracket - 1);
    else if (ch === '{') depthBrace += 1;
    else if (ch === '}') depthBrace = Math.max(0, depthBrace - 1);
    else if (ch === ';' && depthParen === 0 && depthBracket === 0 && depthBrace === 0) {
      return { expression: source.slice(startIndex, i).trim(), end: i };
    }

    i += 1;
  }

  return { expression: source.slice(startIndex).trim(), end: source.length };
}

function readBracketExpression(
  source: string,
  startIndex: number,
  openBracket: '[' | '{',
  closeBracket: ']' | '}'
): { expression: string; end: number } {
  let i = startIndex;
  let depth = 0;
  let quote: '"' | "'" | '`' | null = null;

  while (i < source.length) {
    const ch = source[i];
    const prev = i > 0 ? source[i - 1] : '';

    if (quote) {
      if (ch === quote && prev !== '\\') {
        quote = null;
      }
      i += 1;
      continue;
    }

    if (ch === '"' || ch === "'" || ch === '`') {
      quote = ch as '"' | "'" | '`';
      i += 1;
      continue;
    }

    if (ch === openBracket) {
      depth += 1;
    } else if (ch === closeBracket) {
      depth -= 1;
      if (depth === 0) {
        return { expression: source.slice(startIndex, i + 1).trim(), end: i + 1 };
      }
    }

    i += 1;
  }

  return { expression: source.slice(startIndex).trim(), end: source.length };
}

function splitTopLevelArrayItems(arrayBody: string): string[] {
  const result: string[] = [];
  let current = '';
  let depthParen = 0;
  let depthBracket = 0;
  let depthBrace = 0;
  let quote: '"' | "'" | '`' | null = null;

  for (let i = 0; i < arrayBody.length; i += 1) {
    const ch = arrayBody[i];
    const prev = i > 0 ? arrayBody[i - 1] : '';

    if (quote) {
      current += ch;
      if (ch === quote && prev !== '\\') {
        quote = null;
      }
      continue;
    }

    if (ch === '"' || ch === "'" || ch === '`') {
      quote = ch as '"' | "'" | '`';
      current += ch;
      continue;
    }

    if (ch === '(') depthParen += 1;
    else if (ch === ')') depthParen = Math.max(0, depthParen - 1);
    else if (ch === '[') depthBracket += 1;
    else if (ch === ']') depthBracket = Math.max(0, depthBracket - 1);
    else if (ch === '{') depthBrace += 1;
    else if (ch === '}') depthBrace = Math.max(0, depthBrace - 1);

    if (ch === ',' && depthParen === 0 && depthBracket === 0 && depthBrace === 0) {
      const trimmed = current.trim();
      if (trimmed.length > 0) {
        result.push(trimmed);
      }
      current = '';
      continue;
    }

    current += ch;
  }

  const tail = current.trim();
  if (tail.length > 0) {
    result.push(tail);
  }

  return result;
}

function parsePrimitiveLiteral(raw: string): ControlPrimitive | undefined {
  const value = raw.trim();
  const quoted = value.match(/^(['"`])([\s\S]*?)\1$/);
  if (quoted) {
    return quoted[2];
  }

  if (value === 'true') return true;
  if (value === 'false') return false;
  if (value === 'null') return null;
  if (/^-?\d+(\.\d+)?$/.test(value)) return Number(value);
  return undefined;
}

function parseControlObject(
  controlExpression: string
): { prop: string; initialValue: ControlPrimitive } | null {
  const propMatch = controlExpression.match(/prop:\s*(['"`])([\w$.-]+)\1/);
  const quotedInitialValueMatch = controlExpression.match(/initialValue:\s*(['"`])([\s\S]*?)\1/);
  const primitiveInitialValueMatch = controlExpression.match(
    /initialValue:\s*(true|false|null|-?\d+(?:\.\d+)?)/
  );

  if (!propMatch || (!quotedInitialValueMatch && !primitiveInitialValueMatch)) {
    return null;
  }

  const prop = propMatch[2];
  const initialValue = quotedInitialValueMatch
    ? quotedInitialValueMatch[2]
    : parsePrimitiveLiteral(primitiveInitialValueMatch![1]);

  if (initialValue === undefined) {
    return null;
  }

  return { prop, initialValue };
}

function formatJsxProp(prop: string, value: ControlPrimitive): string {
  if (typeof value === 'string') {
    return ` ${prop}="${value}"`;
  }

  if (typeof value === 'number' || typeof value === 'boolean' || value === null) {
    return ` ${prop}={${String(value)}}`;
  }

  return '';
}

async function loadSharedControlExpressions(demosPath: string) {
  if (sharedControlsLoaded) {
    return;
  }

  const sharedDir = path.resolve(demosPath, '..', 'shared');
  const files = await glob('**/*.{ts,tsx}', {
    cwd: sharedDir,
    absolute: true,
  });

  for (const file of files) {
    const content = await fs.readFile(file, 'utf-8');
    const exportRegex = /export const (\w+)(?:\s*:[^=]+)?\s*=\s*/g;
    let match: RegExpExecArray | null;

    while ((match = exportRegex.exec(content)) !== null) {
      const name = match[1];
      const exprStart = match.index + match[0].length;
      const { expression } = readBalancedExpression(content, exprStart);
      if (expression) {
        sharedControlExpressions.set(name, expression);
      }
    }
  }

  sharedControlsLoaded = true;
}

async function extractConfiguratorDefaults(
  content: string,
  demoDir: string,
  demosPath: string
): Promise<Map<string, ControlPrimitive>> {
  const defaults = new Map<string, ControlPrimitive>();
  await loadSharedControlExpressions(demosPath);

  const localConstExpressions = new Map<string, string>();
  const constRegex = /const (\w+)(?:\s*:[^=]+)?\s*=\s*/g;
  let constMatch: RegExpExecArray | null;
  while ((constMatch = constRegex.exec(content)) !== null) {
    const exprStart = constMatch.index + constMatch[0].length;
    const { expression } = readBalancedExpression(content, exprStart);
    localConstExpressions.set(constMatch[1], expression);
  }

  const importMap = new Map<string, { importPath: string; importedName: string }>();
  const importRegex = /import\s*{([^}]+)}\s*from\s*['"]([^'"]+)['"]/g;
  let importMatch: RegExpExecArray | null;
  while ((importMatch = importRegex.exec(content)) !== null) {
    const names = importMatch[1]
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);
    for (const nameEntry of names) {
      const aliasMatch = nameEntry.match(/^(\w+)\s+as\s+(\w+)$/);
      if (aliasMatch) {
        importMap.set(aliasMatch[2], { importPath: importMatch[2], importedName: aliasMatch[1] });
      } else {
        importMap.set(nameEntry, { importPath: importMatch[2], importedName: nameEntry });
      }
    }
  }

  const importedExpressionCache = new Map<string, string>();

  async function resolveImportedExpression(
    importPath: string,
    importedName: string
  ): Promise<string | null> {
    const cacheKey = `${importPath}::${importedName}`;
    if (importedExpressionCache.has(cacheKey)) {
      return importedExpressionCache.get(cacheKey) || null;
    }

    // Shared controls are frequently re-exported via ../../../shared
    if (sharedControlExpressions.has(importedName)) {
      const expression = sharedControlExpressions.get(importedName) || null;
      importedExpressionCache.set(cacheKey, expression || '');
      return expression;
    }

    const candidates = [
      path.resolve(demoDir, `${importPath}.ts`),
      path.resolve(demoDir, `${importPath}.tsx`),
      path.resolve(demoDir, importPath, 'index.ts'),
      path.resolve(demoDir, importPath, 'index.tsx'),
    ];

    for (const filePath of candidates) {
      if (!(await fs.pathExists(filePath))) {
        continue;
      }

      const source = await fs.readFile(filePath, 'utf-8');

      const directExport = new RegExp(`export const ${importedName}\\s*=\\s*`, 'm').exec(source);
      if (directExport) {
        const exprStart = directExport.index + directExport[0].length;
        const { expression } = readBalancedExpression(source, exprStart);
        importedExpressionCache.set(cacheKey, expression);
        return expression;
      }

      const reExport = new RegExp(
        `export\\s*\\{[^}]*\\b${importedName}\\b[^}]*\\}\\s*from\\s*['"]([^'"]+)['"]`,
        'm'
      ).exec(source);
      if (reExport) {
        const nested = await resolveImportedExpression(reExport[1], importedName);
        importedExpressionCache.set(cacheKey, nested || '');
        return nested;
      }
    }

    importedExpressionCache.set(cacheKey, '');
    return null;
  }

  async function resolveControlsExpression(
    name: string,
    visited = new Set<string>()
  ): Promise<string | null> {
    if (visited.has(name)) {
      return null;
    }
    visited.add(name);

    if (localConstExpressions.has(name)) {
      return localConstExpressions.get(name) || null;
    }

    if (sharedControlExpressions.has(name)) {
      return sharedControlExpressions.get(name) || null;
    }

    const importInfo = importMap.get(name);
    if (importInfo) {
      const importedExpr = await resolveImportedExpression(
        importInfo.importPath,
        importInfo.importedName
      );
      if (importedExpr) {
        return importedExpr;
      }
    }

    return null;
  }

  async function collectDefaultsFromExpression(expression: string, depth = 0): Promise<void> {
    if (!expression || depth > 8) {
      return;
    }

    const trimmed = expression.trim();
    if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
      const body = trimmed.slice(1, -1);
      const items = splitTopLevelArrayItems(body);
      for (const item of items) {
        const normalized = item.trim().replace(/^\.{3}/, '');
        if (normalized.startsWith('{') && normalized.endsWith('}')) {
          const parsed = parseControlObject(normalized);
          if (parsed) {
            defaults.set(parsed.prop, parsed.initialValue);
          }
          continue;
        }

        if (/^\w+$/.test(normalized)) {
          const resolved = await resolveControlsExpression(normalized);
          if (resolved) {
            await collectDefaultsFromExpression(resolved, depth + 1);
          }
        }
      }
      return;
    }

    if (trimmed.startsWith('{') && trimmed.endsWith('}')) {
      const parsed = parseControlObject(trimmed);
      if (parsed) {
        defaults.set(parsed.prop, parsed.initialValue);
      }
      return;
    }

    if (/^\w+$/.test(trimmed)) {
      const resolved = await resolveControlsExpression(trimmed);
      if (resolved) {
        await collectDefaultsFromExpression(resolved, depth + 1);
      }
    }
  }

  const exportMatch = content.match(/export const \w+:\s*MantineDemo\s*=\s*{([\s\S]*?)}\s*;/m);
  if (!exportMatch) {
    return defaults;
  }

  const exportBody = exportMatch[1];
  const controlsArrayStart = exportBody.match(/controls:\s*\[/m);
  if (controlsArrayStart) {
    const startIndex = controlsArrayStart.index! + controlsArrayStart[0].length - 1;
    const { expression } = readBracketExpression(exportBody, startIndex, '[', ']');
    await collectDefaultsFromExpression(expression);
    return defaults;
  }

  const controlsRefMatch = exportBody.match(/controls:\s*([A-Za-z_]\w*)/m);
  if (controlsRefMatch) {
    await collectDefaultsFromExpression(controlsRefMatch[1]);
  }

  return defaults;
}

function applyConfiguratorDefaultsToCode(
  code: string,
  defaults: Map<string, ControlPrimitive>
): string {
  if (defaults.size === 0) {
    return code.replace(/\{\{props\}\}/g, '');
  }

  const propsString = [...defaults.entries()]
    .map(([prop, value]) => formatJsxProp(prop, value))
    .join('');

  let resolved = code.replace(/\{\{props\}\}/g, propsString);
  resolved = resolved.replace(/\$\{props\.(\w+)(?:[^}]*)\}/g, (_match, propName: string) => {
    if (!defaults.has(propName)) {
      return '';
    }
    const value = defaults.get(propName);
    return value === null ? 'null' : String(value);
  });

  return resolved;
}

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
      const defaults = await extractConfiguratorDefaults(content, demoDir, demosPath);

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
            fileCode = applyConfiguratorDefaultsToCode(fileCode, defaults);

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
          code = applyConfiguratorDefaultsToCode(code, defaults);

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
        code = applyConfiguratorDefaultsToCode(code, defaults);
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
            code = applyConfiguratorDefaultsToCode(code, defaults);
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
            code = applyConfiguratorDefaultsToCode(code, defaults);
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
