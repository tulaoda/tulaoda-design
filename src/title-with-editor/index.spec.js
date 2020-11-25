"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var index_1 = require("./index");
describe('Component Init', function () {
    it('should load success', function () {
        var renderer = enzyme_1.shallow(<index_1["default"] value="Foo" onChange={function () { }}/>);
        expect(renderer.text()).toEqual('Foo');
        expect(renderer.find('div.change i').prop('className')).toBe('fa fa-pencil-square-o');
    });
    it('should switch to edit mode', function () {
        var renderer = enzyme_1.shallow(<index_1["default"] value="Foo" onChange={function () { }}/>);
        var inst = renderer.instance();
        inst.onEditClick();
        expect(renderer.exists('div.show')).toBeFalsy();
        expect(renderer.exists('div.edit')).toBeTruthy();
        expect(renderer.exists('Input')).toBe(true);
    });
    it('should trigger onChange event', function () {
        var changeHandler = function (e) {
            expect(e).toBe('newFoo');
        };
        var renderer = enzyme_1.shallow(<index_1["default"] value="Foo" onChange={changeHandler}/>);
        var inst = renderer.instance();
        inst.triggerChange({ target: { value: 'newFoo' } });
        expect(renderer.exists('div.show')).toBeTruthy();
    });
    it('should not trigger onChange event when new value equals old value', function () {
        var changeHandler = function (e) {
            expect(true).toBe(false);
        };
        var renderer = enzyme_1.shallow(<index_1["default"] value="Foo" onChange={changeHandler}/>);
        var inst = renderer.instance();
        inst.triggerChange({ target: { value: 'Foo' } });
        expect(renderer.exists('div.show')).toBeTruthy();
    });
    it('should not trigger onChange event when new value is empty', function () {
        var changeHandler = function (e) {
            expect(true).toBe(false);
        };
        var renderer = enzyme_1.shallow(<index_1["default"] value="Foo" onChange={changeHandler}/>);
        var inst = renderer.instance();
        inst.triggerChange({ target: { value: '' } });
        expect(renderer.exists('div.show')).toBeTruthy();
    });
    it('should be no error when no pass onChange event handler', function () {
        var renderer = enzyme_1.shallow(<index_1["default"] value="Foo"/>);
        var inst = renderer.instance();
        inst.triggerChange({ target: { value: 'newFoo' } });
        expect(true).toBe(true);
    });
    it('should use customize icon', function () {
        var renderer = enzyme_1.shallow(<index_1["default"] value="Foo" onChange={function () { }} iconClassName='fa fa-pencil'/>);
        expect(renderer.find('div.change i').prop('className')).toBe('fa fa-pencil');
    });
    // TODO: 需要找到修改component inputRef属性的方法
    xit('should select input content', function () {
        var renderer = enzyme_1.shallow(<index_1["default"] value="Foo" onChange={function () { }}/>);
        var inst = renderer.instance();
        inst.onEditClick();
        // mock the inputRef
        inst.inputRef.current = {
            select: jest.fn(function () { })
        };
        jest.runAllTimers();
    });
});
