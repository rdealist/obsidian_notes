# Obsidian 笔记转 Quartz 网站设计

## 概述

将 Obsidian 笔记项目改造成 Wiki/双链风格的静态网站，支持自动链接生成和交互式图谱。

## 技术栈

- **Quartz 4.x** - 静态网站生成器
- **GitHub Actions** - 自动构建
- **Vercel** - 托管部署

## 项目结构

```
notes/
├── content/           # Quartz 内容目录
│   ├── index.md       # 首页
│   └── ai-glossary/   # AI术语笔记
│       ├── 核心概念与原理.md
│       ├── 模型架构与组件.md
│       └── ...
├── quartz/            # Quartz 框架文件
├── quartz.config.ts   # 站点配置
└── quartz.layout.ts   # 布局配置
```

## 功能特性

- 双链解析：`[[笔记名]]` 自动转为可点击链接
- 反向链接：显示"哪些笔记链接到此页"
- 交互式图谱：可视化笔记关联关系
- 全文搜索：支持中文
- 目录导航：根据标题自动生成

## 部署流程

1. 推送代码到 GitHub
2. GitHub Actions 自动构建
3. Vercel 自动部署

## 日常使用

```bash
# 本地预览
npx quartz build --serve

# 发布
git add . && git commit -m "更新笔记" && git push
```
