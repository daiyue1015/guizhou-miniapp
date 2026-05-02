# 黔礼小程序 — AI Agent 驱动开发工作流记录

## 项目概览

- **项目名称**：黔礼 — 贵州特色产品微信小程序
- **AppID**：wxd14e839117e370e0
- **GitHub**：https://github.com/daiyue1015/guizhou-miniapp
- **在线演示**：https://daiyue1015.github.io/guizhou-miniapp/

## AI 平台与工具

| 平台 | 用途 | 费用 |
|------|------|------|
| Claude Code (Anthropic) | 全流程 Agent 驱动开发 | Pro 订阅 $20/月 |
| 微信开发者工具 | 预览与真机调试 | 免费 |
| GitHub Pages | H5 演示托管 | 免费 |

## Agent 工作流关键节点

### 阶段 1：项目初始化
```
> 帮我创建一个贵州特色产品微信小程序
[Agent] 生成 app.js / app.json / app.wxss 全局框架
[Agent] 设计配色方案（贵州民族风：深绿#2D5016 + 暖金#8B6914）
[Agent] 创建项目目录结构 pages/ components/ data/ images/
```

### 阶段 2：数据层
```
> 整理贵州 8 款特色产品的数据
[Agent] 生成 data/products.js，包含：
  - 茅台酒 ¥1499 遵义茅台镇
  - 都匀毛尖茶 ¥268 黔南都匀
  - 老干妈辣椒酱 ¥38 贵阳南明
  - 苗族银饰 ¥680 黔东南雷山
  - 镇宁波波糖 ¥45 安顺镇宁
  - 安顺蜡染 ¥320 安顺西秀
  - 凯里红酸汤 ¥35 黔东南凯里
  - 毕节天麻 ¥198 毕节大方
```

### 阶段 3：核心页面
```
> 生成首页和详情页
[Agent] 生成 pages/index/ 首页（产品列表 + 精选推荐）
[Agent] 生成 pages/detail/ 详情页（产品介绍 + 产地故事 + 相关推荐）
[Agent] 数据驱动渲染，新增产品只需修改 products.js
```

### 阶段 4：复杂组件
```
> 做一个贵州产地插画地图组件
[Agent] 纯 CSS 手写 components/origin-map/
  - CSS box-shadow 山峦叠嶂动画
  - CSS clip-path 河流路径
  - @keyframes 8 个产地标记呼吸灯
  - 无任何第三方依赖
```

### 阶段 5：图片处理
```
> 用 ffmpeg 把图片压缩到 2MB 以内
[Agent] ffmpeg -i 原图.png -vf "scale=450:450:force_original_aspect_ratio=decrease" \
        -compression_level 9 输出图.png
[结果] 8 张图片全部压缩至 2MB 以内
```

### 阶段 6：H5 适配
```
> 生成一个手机 H5 预览版
[Agent] 生成 mobile.html（独立于小程序，双击即可在手机浏览器预览）
```

### 阶段 7：本地服务器
```
> 写个本地 Node 服务器方便开发预览
[Agent] 生成 server.js（零依赖 Node 服务器，node server.js 即可启动）
```

### 阶段 8：GitHub Pages 部署
```
> 推送到 GitHub 并开启 Pages
[Agent] 配置 git → 创建仓库 → SSH 授权 → 推送代码 → 启用 Pages
[结果] https://daiyue1015.github.io/guizhou-miniapp/ 在线可访问
```

## Agent 驱动的关键成果

1. **产地插画地图组件** — 纯 CSS 实现贵州地形风格 SVG-CSS 混合动画，0 依赖
2. **数据驱动架构** — products.js 统一管理产品数据，首页/详情页联动
3. **双端覆盖** — 微信小程序 + H5 手机版，同一套数据和设计语言
4. **全流程 AI 协作** — 从产品设计、UI、编码、压缩部署到上线，全链条 Agent 参与

## 效率对比

| 指标 | 传统开发 | AI Agent 驱动 |
|------|----------|---------------|
| 总耗时 | ~2-3 周 | ~1 个工作日 |
| UI 设计 | 需要设计师 | Agent 自动生成 |
| 前端编码 | 需要前端工程师 | Agent 生成 10+ 文件 |
| 图片处理 | 手动 PS | ffmpeg 命令行批量 |
| 部署上线 | 运维协助 | Agent 指导全流程 |
| 成本 | 数万元外包 | 仅 AI 订阅费 |
