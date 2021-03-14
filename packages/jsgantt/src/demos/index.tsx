import * as React from 'react';

import JSGantt from '@tulaoda/rc-jsgantt';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.data = [
      {
        pID: 1,
        pName: '任务1',
        pStart: '',
        pEnd: '',
        pClass: 'black',
        pGroup: 1,
        pParent: 0,
      },
      {
        pID: 12,
        pName: '子任务',
        pStart: '',
        pEnd: '',
        pClass: 'black',
        pGroup: 1,
        pParent: 1,
      },
      {
        pID: 121,
        pName: '完成甘特图开发',
        pStart: '2020-02-21',
        pEnd: '2020-03-09',
        pClass: 'blue',
        pGroup: 0,
        pParent: 12,
        pComp: 40,
        toolTipsInfo: [{ key: '工作', value: '测试一下' }],
      },
      {
        pID: 123,
        pName: '支持时间区间可拖动',
        pStart: '2020-02-21',
        pEnd: '2020-03-09',
        pClass: 'blue',
        pGroup: 0,
        pParent: 12,
        pComp: 30,
        toolTipsInfo: [{ key: '工作', value: '测试一下' }],
      },
      {
        pID: 2,
        pName: '任务2',
        pStart: '',
        pEnd: '',
        pClass: 'black',
        pGroup: 1,
        pParent: 0,
        pComp: 20,
      },
      {
        pID: 13,
        pName: '子任务',
        pStart: '',
        pEnd: '',
        pClass: 'black',
        pGroup: 1,
        pParent: 2,
      },
      {
        pID: 110,
        pName: '完成甘特图开发',
        pStart: '2020-02-21',
        pEnd: '2020-03-09',
        pClass: 'blue',
        pGroup: 0,
        pParent: 13,
        pComp: 40,
        toolTipsInfo: [{ key: '工作', value: '测试一下' }],
      },
      {
        pID: 111,
        pName: '支持时间区间可拖动',
        pStart: '2020-02-21',
        pEnd: '2020-03-09',
        pClass: 'blue',
        pGroup: 0,
        pParent: 13,
        pComp: 50,
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
      <JSGantt
        data={this.data}
        options={this.editorOptions}
        onInit={this.onInit}
        onChange={this.onChange}
      />
    );
  }
}

export default Example;
