# @tulaoda/rc-jsgantt

> @tulaoda/rc-jsgantt.

See our website [@tulaoda/rc-jsgantt](https://umijs.org/plugins/jsgantt) for more information.

## Install

Using npm:

```bash
$ npm install --save @tulaoda/rc-jsgantt
```

or using yarn:

```bash
$ yarn add @tulaoda/rc-jsgantt
```

## Usage

```tsx
import * as React from 'react';

import JSGantt from '@tulaoda/rc-jsgantt';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.data = [
      {
        pID: 1,
        pName: 'Define Chart API v1',
        pStart: '',
        pEnd: '',
        pClass: 'black',
        pGroup: 1,
        pParent: 0,
      },
      {
        pID: 12,
        pName: 'Task Objects',
        pStart: '',
        pEnd: '',
        pClass: 'black',
        pGroup: 1,
        pParent: 1,
      },
      {
        pID: 121,
        pName: 'Constructor Proc ',
        pStart: '2020-02-21',
        pEnd: '2020-03-09',
        pClass: 'blue',
        pGroup: 0,
        pParent: 12,
        toolTipsInfo: [{ key: '工作', value: '测试一下' }],
      },
    ];

    this.editorOptions = {
      vEditable: true, //是否可编辑
    };
  }

  //挂载实例
  onInit = (editor) => {
    console.log('editor', editor);
  };

  onChange = (task, row, column) => {
    //所有任务数据（平铺）
    console.log('task', task);
    console.log('row', row);
    console.log('column', column);
  };

  render() {
    return (
      <JSGanttComponent
        data={this.data}
        options={this.editorOptions}
        onInit={this.onInit}
        onChange={this.onChange}
      />
    );
  }
}
```
