---
title: jsgantt
order: 1
group:
  path: /
nav:
  title: 组件
  path: /components
---

## jsgantt

## 甘特图

本组件 fork 自 jsGanttImproved，支持甘特图编辑，解决了可编辑甘特图开发难度的高的问题。对于底层进行重新封装，样式进行优化，暴露值改变函数与组件挂载之后实例。

<code src="./demos/index.tsx"  height="300px" />

## Install

```bash
npm install --save @tulaoda/rc-jsgantt
```

## API

| Prop     | Description                                     | Default |
| -------- | ----------------------------------------------- | ------- |
| data     | 数据                                            | []      |
| onChange | 值改变触发 onChange = (task, row, column) => {} | noop    |
| options  | 配置项                                          | {}      |
| onInit   | 实例挂载之后回调函数                            |         |

## 后续计划

- 后续将对时间轴可拖动功能进行实现。
- 使用 antd 重构

## License

MIT © [tulaoda](https://github.com/tulaoda)
