import * as React from 'react';
import * as JSGantt from './jsgantt';
import './jsgantt.less';

import { formatData } from './jsgantt/lib/formatData';

export type Props = {
  data: any[];
  options: any;
  onInit: (instance) => void;
  onChange: (tasks, row, column) => void;
};

export { formatData };
export default class JSGanttComponent extends React.Component<Props> {
  public id = `react-gantt-editor${Math.floor(Math.random() * 1000000)}`;
  public editor: any;
  options: any;
  public optionsChanged = false;

  public static defaultProps = {
    data: [],
    options: {},
    onInit: () => {},
    onChange: () => {},
  };

  componentDidMount() {
    this.makeChart();
  }
  componentDidUpdate() {
    this.makeChart();
  }

  makeChart() {
    const jsantt: any = JSGantt;
    const { GanttChart } = jsantt.default;
    const g = (this.editor = new GanttChart(document.getElementById(this.id), 'week'));
    let optionsBefore = this.options || this.props.options;
    // 初始化成功实例
    const { onInit } = this.props;
    onInit(g);
    if (!this.optionsChanged && this.editor && this.editor.options) {
      optionsBefore = this.editor.options;
    }

    if (g.getDivId() != null) {
      g.setOptions({
        vCaptionType: 'Complete', // Set to Show Caption : None,Caption,Resource,Duration,Complete,
        vDateTaskDisplayFormat: 'day dd month yyyy', // Shown in tool tip box
        vDayMajorDateDisplayFormat: 'mon yyyy - Week ww', // Set format to display dates in the "Major" header of the "Day" view
        vWeekMinorDateDisplayFormat: 'dd mon', // Set format to display dates in the "Minor" header of the "Week" view
        vShowTaskInfoLink: 0, // Show link in tool tip (0/1)
        vShowTaskCaption: 0, // Show link in tool tip (0/1)
        vShowEndWeekDate: 0, // Show/Hide the date for the last day of the week in header for
        vUseSingleCell: 10000,
        vLang: 'cn',
        vFormat: 'day',
        vEditable: true,
        vShowRes: 0,
        vShowCost: 0,
        vShowComp: 1,
        vShowDur: 1,
        vEventsChange: {
          taskname: this.editValue,
          res: this.editValue,
          dur: this.editValue,
          comp: this.editValue,
          start: this.editValue,
          end: this.editValue,
          planstart: this.editValue,
          planend: this.editValue,
          cost: this.editValue,
        },
        // vDebug: true,
        // Even with setUseSingleCell using Hour format on such a large chart can cause issues in some browsers
        vFormatArr: ['Day', 'Week', 'Month', 'Quarter'],
        ...optionsBefore,
      });
      const { data } = this.props;
      if (data && data.forEach) {
        data.forEach((row: any) => {
          row.pGantt = g;
          g.AddTaskItemObject(row);
        });
      }
      g.Draw();
    }
  }

  editValue = (tasks, task, event, cell, column) => {
    const { onChange } = this.props;
    const realTaskList = tasks.map((item) => item.getAllData().pDataObjec);
    const found = realTaskList.find((item) => item.pID == Number(task.getOriginalID()));
    const foundIndex = realTaskList.findIndex((item) => item.pID == Number(task.getOriginalID()));
    if (!found) {
    } else {
      found[column] = event ? event.target.value : '';
      realTaskList[foundIndex][column] = event ? event.target.value : '';
      onChange(realTaskList, found, column);
    }
  };

  render() {
    return <div id={this.id} className="gantt"></div>;
  }
}
