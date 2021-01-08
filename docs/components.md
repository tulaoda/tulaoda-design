<!-- ---
title: Tulaoda Design - 组件总览
order: 0
group:
  path: /
nav:
  title: 组件
  path: /components
---

# 架构设计

Tulaoda Design 是为了降低在中后台实现 CRUD 的成本而研发，其思路是减少必要的状态维护，更专注于业务。

- [ProLayout](/components/layout) 解决布局的问题，提供开箱即用的菜单和面包屑功能
- [ProTable](/components/table) 解决表格问题，抽象网络请求和表格格式化
- [ProForm](/components/form) 解决表单问题，预设常见布局和行为
- [ProCard](/components/card) 提供卡片切分以及栅格布局能力
- [ProDescriptions](/components/descriptions) 提供与 table 使用同等配置的能力
- [ProSkeleton](/components/skeleton) 页面级别的骨架屏

## CRUD

ProTable，ProDescriptions，ProForm 都是基于 ProField 来进行封装。ProTable 和 ProDescriptions 根据 valueType 来渲染不同的 ProField，Form 则是通过不同的 FormField 来实现封装。

使用同样的底层实现为 ProTable，ProDescriptions，ProForm 打通带来了便利。ProForm 可以很方便的实现只读模式，ProTable 可以快速实现查询表单和可编辑表格。ProDescriptions 可以实现节点编辑，以下有个例子可以切换三个组件。

<code src="../packages/table/src/demos/crud.tsx">

## Form 的 layout 切换

ProForm 的主要功能是预设了很多 layout，如果需要切换只需要改变外面包裹的 Layout 即可，以下是个 demo。

<code src="../packages/form/src/demos/layout-change.tsx">

## 通用配置

ProTable，ProDescriptions 公用一套配置，可以使用同样的 columns 和 request 来生成数据，唯一的不同是 Table 需要数组，而 ProDescriptions 只需要一个对象。以下是具体的配置：

```tsx | pure
/**
 * 各个组件公共支持的 render
 */
export type ProSchema<T = unknown, U = string, Extra = unknown> = {
  /**
   * @name 确定这个列的唯一值
   */
  key?: React.ReactText;
  /**
   * @name 与实体映射的key
   * @description 支持一个数字，[a,b] 会转化为 obj.a.b
   */
  dataIndex?: string | number | (string | number)[];
  /**
   * 选择如何渲染相应的模式
   */
  valueType?: ((entity: T, type: ProSchemaComponentTypes) => U) | U;

  /**
   * @name 标题
   * @description 支持 ReactNode 和 方法
   */
  title?:
    | ((
        schema: ProSchema<T, U, Extra>,
        type: ProSchemaComponentTypes,
        dom: React.ReactNode,
      ) => React.ReactNode)
    | React.ReactNode;

  /**
   *@name 展示一个 icon，hover 是展示一些提示信息
   */
  tooltip?: string;

  /**
   * @deprecated 你可以使用 tooltip，这个更改是为了与 antd 统一
   */
  tip?: string;

  render?: (
    dom: React.ReactNode,
    entity: T,
    index: number,
    action: ProCoreActionType,
    schema: ProSchema<T, U, Extra>,
  ) => React.ReactNode;

  /**
   * @name 自定义编辑模式
   * @description 返回一个node，会自动包裹 value 和 onChange
   */
  renderFormItem?: (
    item: ProSchema<T, U, Extra>,
    config: {
      index?: number;
      value?: any;
      onChange?: (value: any) => void;
      onSelect?: (value: any) => void;
      type: ProSchemaComponentTypes;
      defaultRender: (newItem: ProSchema<T, U, Extra>) => JSX.Element | null;
    },
    form: FormInstance,
  ) => React.ReactNode;

  /**
   * @name 自定义 render
   * @description 必须要返回 string
   */
  renderText?: (text: any, record: T, index: number, action: ProCoreActionType) => any;

  fieldProps?: any;
  /**
   * @name 映射值的类型
   */
  valueEnum?: ProSchemaValueEnumObj | ProSchemaValueEnumMap;

  /**
   * @name 从服务器请求枚举
   */
  request?: ProFieldRequestData<ProSchema>;

  /**
   * @name 从服务器请求的参数，改变了会触发 reload
   */
  params?: {
    [key: string]: any;
  };
  /**
   * @name 隐藏在 descriptions
   */
  hideInDescriptions?: boolean;
} & Extra;
``` -->
