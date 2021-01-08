import { mount } from 'enzyme';
import React from 'react';
import CronEditor from '@tulaoda/rc-cron-editor';
import { waitForComponentToPaint } from '../util';

describe('Field', () => {
  it('🥩 collapsible onCollapse', async () => {
    const fn = jest.fn();
    const wrapper = mount(
      <CronEditor title="可折叠" headerBordered collapsible defaultCollapsed onCollapse={fn}>
        内容
      </CronEditor>,
    );
    await waitForComponentToPaint(wrapper);
    wrapper.find('AntdIcon.ant-pro-card-collapsible-icon').simulate('click');
    expect(fn).toBeCalled();
  });

  it('🥩 collapsible defaultCollapsed', async () => {
    const wrapper = mount(
      <CronEditor title="可折叠" headerBordered collapsible defaultCollapsed>
        内容
      </CronEditor>,
    );
    await waitForComponentToPaint(wrapper);
    expect(wrapper.find('.ant-pro-card-collapse').exists()).toBeTruthy();
  });

  it('🥩 collapsible collapsed', async () => {
    const wrapper = mount(
      <CronEditor title="可折叠" headerBordered collapsed>
        内容
      </CronEditor>,
    );
    await waitForComponentToPaint(wrapper);
    expect(wrapper.find('.ant-pro-card-collapse').exists()).toBeTruthy();

    wrapper.setProps({
      collapsed: false,
    });

    await waitForComponentToPaint(wrapper);
    expect(wrapper.find('.ant-pro-card-collapse').exists()).toBeFalsy();
  });

  it('🥩 tabs onChange', async () => {
    const fn = jest.fn();
    const wrapper = mount(
      <CronEditor
        tabs={{
          onChange: fn,
        }}
      >
        <CronEditor.TabPane key="tab1" tab="产品一">
          内容一
        </CronEditor.TabPane>
        <CronEditor.TabPane key="tab2" tab="产品二">
          内容二
        </CronEditor.TabPane>
      </CronEditor>,
    );

    wrapper.find('.ant-pro-card-tabs .ant-tabs-tab').at(1).simulate('click');

    expect(fn).toHaveBeenCalledWith('tab2');
  });
});
