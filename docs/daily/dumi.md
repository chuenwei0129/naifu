---
group:
  title: 2024 🐲
  order: -2024
title: Dumi
toc: content
---

# 记录一下我是如何使用 dumi 的

## 我的文档内容组织结构

<Tree>
  <ul>
    <li>
      docs
      <small>文档路由</small>
      <ul>
        <li>
          index.md
          <small>首页</small>
        </li>
        <li>
          guide.md
          <small>指南</small>
        </li>
        <li>
          blog
          <ul>
            <li>
              index.md
              <small>博客归档</small>
            </li>
            <li>
              dumi.md
              <small>第一篇博客</small>
            </li>
          </ul>
        </li>
        <li>
          garden
          <ul>
            <li>
              index.md
              <small>可选，但要 garden 显示为中文则须配置</small>
            </li>
            <li>
              js
              <ul>
                <li>
                  index.md
                  <small>二级导航：JS 索引</small>
                </li>
                <li>
                  null-undefined.md
                  <small>JS 第一篇文章</small>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li>package.json</li>
  </ul>
</Tree>

## 文件路径及页面配置

### 主页配置 - `docs/index.md`

```yaml
---
title: 首页
hero:
  title: TODO
  description: 没有经过整理的知识才是徒然浪费时间，伤透脑筋！
  actions:
    - text: 立即上手
      link: /guide
    - text: GitHub
      link: https://github.com/chuenwei0129/naifu
---
```

主页设定为引导用户迅速了解和参与项目，提供直接链接到指南页面和项目的 GitHub 页面，鼓励用户立即参与和贡献。

### 指南页 - `docs/guide.md`

```yaml
---
nav:
  title: 指南
  order: -1

title: 我的标题
order: -1
---
```

指南部分旨在为用户提供详细的操作和使用说明，以方便用户快速上手。

### 博客页入口 - `docs/blog/index.md`

```yaml
---
nav:
  title: 博客
  order: 1
group:
  title: 归档
  order: -999
title: 这是什么？
---
```

### 博客页 - `docs/blog/dumi.md`

```yaml
nav:
  title: 博客
  order: 1
group:
  title: 2024 🐲
  order: 0
title: 我如何使用 dumi
---
```

### 知识库入口 - `docs/garden/index.md`

```yaml
---
nav:
  title: 知识库
  order: 999
---
```

知识库作为综合信息聚集地，设置于导航的末端，旨在为用户提供广泛的知识资源。

### JavaScript 页入口 - `docs/garden/js/index.md`

```yaml
---
nav:
  second:
    title: JavaScript
    order: 0
group:
  title: 介绍
  order: -999
title: 这是什么？
---
```

### JavaScript 页 - `docs/garden/js/null-undefined.md`

```yaml
---
group:
  title: 数据类型
  order: -1
title: Null 与 Undefined
order: -1
toc: content
---
```

## Markdown 之间的相互跳转

> 在 `blog/index.md` 中跳转到 `dumi.md`

```markdown
[跳转到 dumi](./dumi.md)
```

> 在 `blog/dumi.md` 中跳转到 `blog/switch.md`。

```markdown
[跳转到 switch](./switch)
```

## 配置 tailwindcss

`tailwindcss` 配置项需要安装 `@umijs/plugins`，并且挂载 `@umijs/plugins/dist/tailwindcss` 插件才能使用。

具体实现，为以下步骤：

1. 安装：

    ```sh
    pnpm i @umijs/plugins tailwindcss -D
    ```

2. 在 `.dumirc.ts` 中配置：

    ```js
    plugins: ['@umijs/plugins/dist/tailwindcss']
    ```

3. 启用 `tailwindcss`：同样在 `.dumirc.ts` 加入

    ```js
    tailwindcss: {}
    ```

4. 确保在根目录下已创建 `tailwind.config.js` 和 `tailwind.css`。

    ![20240613235249](https://raw.githubusercontent.com/chuenwei0129/my-picgo-repo/master/me/20240613235249.png)

5. 配置 `tailwind.config.js`：

    ```js
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      // 关闭 tailwindcss 提供的浏览器样式重置，否则会与 dumi 样式冲突。
      corePlugins: {
        preflight: false,
      },
      content: ['./code/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
      theme: {
        extend: {},
      },
      plugins: [],
    };
    ```

未配置情况下会出现如下样式：

![20240614052556](https://raw.githubusercontent.com/chuenwei0129/my-picgo-repo/master/me/20240614052556.png)

## 配置 zhlint 格式化 Markdown

安装 `zhlint`：

```sh
pnpm i zhlint -D
```

配置 `package.json`：

```json
"lint:md": "zhlint \"./docs/**/*.md\" --fix"
```

## [部署到 GitHub Pages](https://d.umijs.org/guide/faq#%E9%83%A8%E7%BD%B2%E5%88%B0-github-pages)

### 配置 `.dumirc.ts`

由于 GitHub Pages 是[非域名根路径部署](https://d.umijs.org/guide/faq#%E9%9D%9E%E6%A0%B9%E7%9B%AE%E5%BD%95%E9%83%A8%E7%BD%B2)，第一个要注意的就是 `.dumirc.ts` 配置中，我们要把 `base` 和 `publicPath` 改成项目仓库名称的路径。

```js
// .dumirc.ts
import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  base: '/naifu/', // 文档起始路由
  publicPath: '/naifu/', // 静态资源起始路径
});
```

> 文档项目独立时，通常 `base` 和 `publicPath` 配置项相同。

当我们部署到 GitHub 时，网站路径上会加上项目的仓库名。例如 `chuenwei0129.github.io/naifu/`。

- `base` 的作用：在 `docs` 文件夹生成的路由 `/` 和 `/guide`，如果部署到 GitHub 可能会路由跳转错误，因此必须给路由补上前缀 `naifu`。

- `publicPath` 的作用：保证打包后静态资源路径正确，对打包后 `index.html` 中引入的静态资源路径加上前缀。此处也即代表 `/public` 映射的路径为 `/naifu/public`，所以我们引入 `/public` 文件时需注意，例如：`/logo.png` 实际上要写成 `/naifu/logo.png` 才能正确引入。

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="shortcut icon" href="https://raw.githubusercontent.com/chuenwei0129/my-picgo-repo/master/me/icon.svg">
<link rel="stylesheet" href="/naifu/umi.ea670057.css">
<!-- 不加前缀会生成 /preload_helper.58c08a69.js-->
<script src="/naifu/preload_helper.58c08a69.js"></script>
</head>
<body>
<div id="root"></div>
<script src="/naifu/umi.e7aa0b1e.js"></script>
</body>
</html>
```

### 手动部署

借助 `gh-pages` 可以轻松帮助我们部署文档到 GitHub Pages：

```sh
pnpm install gh-pages --save-dev
```

在 `package.json` 中添加：

```json
"scripts": {
  "deploy": "gh-pages -d doc-dist"
}
```

先编译生成 `doc-dist` 目录，然后再一键发布：

```sh
npm run deploy
```

### 自动部署

在项目根目录新建 `.github/workflows/gh-pages.yml` 文件。

```yaml
name: github pages

on:
  push:
    branches:
      - main # default branch

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
      - name: Install dependencies
        run: npm install
      - name: Build with dumi
        run: npm run docs:build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./docs-dist
```

**解释**：每次有新代码更新到主分支时，会触发 GitHub Action，`gh-pages` 工具会自动打包并发布到 `gh-pages` 分支，以便让源码和打包代码区分开来。

在这里，我们需要确保 `GITHUB_TOKEN` 被授权为读写权限。

![20241022214856](https://raw.githubusercontent.com/chuenwei0129/my-picgo-repo/master/react/20241022214856.png)

然后在 GitHub 的设置中，选择 `gh-pages` 分支作为网站构建分支。

![d320e499c3664a95b3a843206dfe025b~tplv-k3u1fbpfcp-zoom-in-crop-mark_1512_0_0_0](https://raw.githubusercontent.com/chuenwei0129/my-picgo-repo/master/react/d320e499c3664a95b3a843206dfe025b%7Etplv-k3u1fbpfcp-zoom-in-crop-mark_1512_0_0_0.webp)

## 发包

> <https://github.com/umijs/father/issues/514>

## 参考

src 中的代码可以影响 docs 中的代码可以影响
code 是我自定义的代码空间
