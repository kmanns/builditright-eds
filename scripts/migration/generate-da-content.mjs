#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';

const repoRoot = process.cwd();
const draftsRoot = path.join(repoRoot, 'drafts');
const outputRoot = path.join(draftsRoot, 'da');

async function listHtmlFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'da' || entry.name === 'tmp') {
        return [];
      }
      return listHtmlFiles(fullPath);
    }
    if (entry.isFile() && entry.name.endsWith('.html')) {
      return [fullPath];
    }
    return [];
  }));
  return files.flat();
}

function extractMainContent(html, filePath) {
  const start = html.search(/<main\b[^>]*>/i);
  const end = html.search(/<\/main>/i);

  if (start === -1 || end === -1 || end <= start) {
    throw new Error(`Missing <main>...</main> in ${filePath}`);
  }

  const openTag = html.slice(start).match(/<main\b[^>]*>/i)?.[0];
  if (!openTag) {
    throw new Error(`Could not parse <main> tag in ${filePath}`);
  }

  const contentStart = start + openTag.length;
  return html.slice(contentStart, end).trim();
}

function toOutputFilePath(sourcePath) {
  const relative = path.relative(draftsRoot, sourcePath);
  return path.join(outputRoot, relative);
}

async function generate() {
  const htmlFiles = await listHtmlFiles(draftsRoot);
  await fs.mkdir(outputRoot, { recursive: true });

  const results = [];
  for (const filePath of htmlFiles) {
    const source = await fs.readFile(filePath, 'utf-8');
    const relative = path.relative(draftsRoot, filePath);
    const isFragment = relative.endsWith('.plain.html');

    const output = isFragment ? source.trim() : extractMainContent(source, relative);
    const outPath = toOutputFilePath(filePath);
    await fs.mkdir(path.dirname(outPath), { recursive: true });
    await fs.writeFile(outPath, `${output}\n`, 'utf-8');

    results.push({
      source: relative,
      output: path.relative(repoRoot, outPath),
      mode: isFragment ? 'fragment' : 'page-main',
    });
  }

  results.sort((a, b) => a.source.localeCompare(b.source));
  console.log('Generated DA-ready content files:\n');
  results.forEach((item) => {
    console.log(`- [${item.mode}] ${item.source} -> ${item.output}`);
  });
}

generate().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
