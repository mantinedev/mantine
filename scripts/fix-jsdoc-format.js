const fs = require('fs');
const path = require('path');
const glob = require('fast-glob');

/**
 * 修复单行 JSDoc 注释，将 @default 等标签移到新行
 *
 * 错误格式: /** Description @default `value` *\/
 * 正确格式:
 * /**
 *  * Description
 *  *
 *  * @default `value`
 *  *\/
 */
function fixJSDocComment(content) {
  // 匹配单行 JSDoc，包含 @default、@see、@param、@returns 等标签
  const jsdocPattern =
    /\/\*\*\s*([^*]*?)\s+(@(?:default|see|param|returns|throws|example|deprecated|since|type|typedef|callback|memberof|property|readonly|override|access|public|private|protected|static|async|generator|yields|link|tutorial|external|mixin|interface|implements|enum|module|namespace|class|extends|augments|fires|listens|emits)\s+[^*]+?)\s*\*\//g;

  return content.replace(jsdocPattern, (match, description, tag) => {
    // 清理描述和标签
    const cleanDescription = description.trim();
    const cleanTag = tag.trim();

    // 构建多行格式
    return `/**
   * ${cleanDescription}
   *
   * ${cleanTag}
   */`;
  });
}

async function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSDocComment(content);

    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      return { file: filePath, changed: true };
    }

    return { file: filePath, changed: false };
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return { file: filePath, error: error.message };
  }
}

async function main() {
  const packagesDir = path.join(__dirname, '../packages/@mantine');

  // 查找所有 TypeScript 和 TSX 文件
  const files = await glob(['**/*.{ts,tsx}'], {
    cwd: packagesDir,
    absolute: true,
    ignore: ['**/node_modules/**', '**/dist/**', '**/*.d.ts'],
  });

  console.log(`Found ${files.length} files to process...\n`);

  let changedCount = 0;
  let errorCount = 0;

  for (const file of files) {
    const result = await processFile(file);

    if (result.error) {
      errorCount++;
      console.error(`❌ Error: ${result.file}`);
    } else if (result.changed) {
      changedCount++;
      console.log(`✅ Fixed: ${path.relative(packagesDir, result.file)}`);
    }
  }

  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`Summary:`);
  console.log(`  Total files: ${files.length}`);
  console.log(`  Changed: ${changedCount}`);
  console.log(`  Errors: ${errorCount}`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);
}

main().catch(console.error);
