#!/usr/bin/env python3
import os
import re
import sys
from pathlib import Path

def fix_jsdoc_in_content(content):
    """
    修复 JSDoc 注释格式
    将: /** Description @default value */
    改为:
    /**
     * Description
     *
     * @default value
     */
    """
    # 匹配单行 JSDoc 注释，包含 @ 标签
    # 格式: /** 描述文本 @标签 标签内容 */
    pattern = r'/\*\*\s*([^*@]+?)\s+(@\w+\s+[^*]+?)\s*\*/'
    
    def replace_func(match):
        description = match.group(1).strip()
        tag = match.group(2).strip()
        
        # 构建多行格式
        result = f"""/**
   * {description}
   *
   * {tag}
   */"""
        return result
    
    # 执行替换
    new_content = re.sub(pattern, replace_func, content)
    
    return new_content

def process_file(file_path):
    """处理单个文件"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            original_content = f.read()
        
        fixed_content = fix_jsdoc_in_content(original_content)
        
        if original_content != fixed_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            return True
        
        return False
    except Exception as e:
        print(f"❌ Error processing {file_path}: {e}", file=sys.stderr)
        return False

def main():
    # 获取 @mantine 包目录
    script_dir = Path(__file__).parent
    mantine_dir = script_dir.parent / 'packages' / '@mantine'
    
    if not mantine_dir.exists():
        print(f"❌ Directory not found: {mantine_dir}")
        sys.exit(1)
    
    # 查找所有 .ts 和 .tsx 文件
    ts_files = list(mantine_dir.glob('**/*.ts'))
    tsx_files = list(mantine_dir.glob('**/*.tsx'))
    all_files = ts_files + tsx_files
    
    # 过滤掉 node_modules, dist 等目录
    all_files = [
        f for f in all_files
        if 'node_modules' not in str(f)
        and 'dist' not in str(f)
        and not str(f).endswith('.d.ts')
    ]
    
    print(f"Found {len(all_files)} TypeScript files to process...\n")
    
    changed_count = 0
    
    for file_path in all_files:
        if process_file(file_path):
            changed_count += 1
            rel_path = file_path.relative_to(mantine_dir)
            print(f"✅ Fixed: {rel_path}")
    
    print(f"\n{'='*50}")
    print(f"Summary:")
    print(f"  Total files: {len(all_files)}")
    print(f"  Changed: {changed_count}")
    print(f"  Unchanged: {len(all_files) - changed_count}")
    print(f"{'='*50}\n")

if __name__ == '__main__':
    main()
