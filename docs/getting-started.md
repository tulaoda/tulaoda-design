---
title: 快速开始
order: 2
group:
  path: /
nav:
  title: 文档
  path: /docs
---

## 安装

当前 Tulaoda Design 每一个组件都是一个独立的包，你需要在你的项目中安装对应的 npm 包并使用。

```shell
$ npm i @tulaoda/cron-editor --save
```

当前 Tulaoda Design 提供了如下组件可直接使用：

- `npm i @tulaoda/cron-editor --save`

## 在项目中使用

每一个包都是一个独立的组件包，使用示例如下 ：

<!-- ```jsx
import React from 'react';
import CronEditor from '@tulaoda/cron-editor';

export default () => {
  return (
     <CronEditor 
     onChange={handleCronChange} 
     tabType="card" 
     showTime 
     value={'0 0 0 * * ?'} 
     />;
  );
}; -->

````

所有的包都使用 less 来进行样式管理，方便进行主题的自定义。如果你没有 less-loader 可以尝试从 `dist` 中导入 css。

```tsx | pure
import '@tulaoda/cron-editor/dist/index.css';
````

建议还是使用 less，可以方便进行主题自定义，来可以做到按需加载。
