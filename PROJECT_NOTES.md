# Solar-System 项目约定与偏好

> 后续维护本项目时，请先阅读本文件，再创建页面或修改链接。

## 用户偏好

- 用户会持续新增天体 / 天文主题图片。
- 每当新增一张主题图片时，需要：
  1. 在 `pages/` 下为该图片创建独立 HTML 页面；
  2. 页面使用现有 `styles.css` 的全屏图片展示样式；
  3. 根据用户指定的来源页面，在对应图片区域添加可点击热区；
  4. 热区点击后跳转到新页面。

## 页面与图片约定

- 图片统一放在 `images/` 目录。
- 页面统一放在 `pages/` 目录。
- 页面文件名优先使用图片文件名，例如：
  - `images/black-holes.png` -> `pages/black-holes.html`
  - `images/stellar-evolution.png` -> `pages/stellar-evolution.html`
- HTML 页面保持当前项目的简单结构：

```html
<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>页面标题</title>
  <link rel="stylesheet" href="../styles.css" />
</head>
<body>
  <main class="screen" aria-label="页面标题页面">
    <img class="full-image" src="../images/图片文件名.png" alt="页面标题" />
    <a class="back" href="上一级页面.html" aria-label="返回上一级具体页面">← 返回具体页面</a>
  </main>
</body>
</html>
```

## 返回策略

- 每个页面只保留一个返回按钮。
- 返回按钮链接只返回“上一级页面”，不要额外提供跨级返回。
- 返回按钮文案必须保留具体目标，不要写成“返回上一级”：
  - 从一级详情页返回首页：`← 返回太阳系`
  - 从月球页返回地球页：`← 返回地球`
  - 从恒星演化页返回太阳页：`← 返回太阳`
  - 从黑洞页返回恒星演化页：`← 返回恒星演化`

## 热区链接约定

- 使用 SVG 覆盖层 `.hotspots` 添加点击区域。
- 圆形目标使用 `.hotspot-circle`。
- 矩形 / 大块区域使用 `.hotspot-rect`。
- 热区坐标基于图片原始尺寸 `1672 x 941`，示例：

```html
<svg class="hotspots" viewBox="0 0 1672 941" preserveAspectRatio="xMidYMid meet" aria-hidden="false">
  <a href="target.html" aria-label="查看目标页面">
    <rect class="hotspot-rect" x="10" y="535" width="615" height="255" rx="10" />
  </a>
</svg>
```

## 已建立的层级关系

- `index.html` -> 各太阳系一级详情页。
- `pages/earth.html` -> `pages/moon.html`。
- `pages/sun.html` -> `pages/stellar-evolution.html`。
- `pages/stellar-evolution.html` -> `pages/black-holes.html`。
- `pages/stellar-evolution.html` -> `pages/neutron-stars.html`。
- `pages/stellar-evolution.html` -> `pages/planetary-nebula.html`。
- `pages/stellar-evolution.html` -> `pages/red-giant.html`。
- `pages/stellar-evolution.html` -> `pages/white-dwarf.html`。
- `pages/stellar-evolution.html` -> `pages/main-sequence.html`。
- `pages/stellar-evolution.html` -> `pages/protostar.html`。
- `pages/stellar-evolution.html` -> `pages/black-dwarf.html`。
- `pages/stellar-evolution.html` -> `pages/supernova.html`。

## 操作检查清单

新增页面和链接后，请检查：

- 新图片是否存在于 `images/`。
- 新页面是否存在于 `pages/`。
- 来源页面是否添加了正确数量的跳转热区。
- 新页面返回按钮是否只返回上一级，且文案是具体目标。
- 不要把返回按钮文案统一改成“返回上一级”。
