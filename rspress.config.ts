import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  globalStyles: path.join(__dirname, 'tailwind.css'),
  title: 'Anti-PUA Skill',
  description:
    '好的结果不需要坏的方式 — 让 AI 成为沟通方式的镜子，而非恐惧的容器',
  lang: 'zh',
  logoText: 'Anti-PUA',
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/p-toy-factory/anti-pua',
      },
    ],
  },
});
