"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var PropTypes = require("prop-types");
var antd_1 = require("antd");
require("./index.scss");
var TitleWithEditor = /** @class */ (function (_super) {
    __extends(TitleWithEditor, _super);
    function TitleWithEditor(props) {
        var _this = _super.call(this, props) || this;
        _this.inputRef = React.createRef();
        _this.onEditClick = function () {
            _this.setState({ enableEditing: true }, function () {
                setTimeout(function () {
                    // 选中输入框的文字
                    _this.inputRef.current.select();
                });
            });
        };
        _this.triggerChange = function (e) {
            _this.setState({ enableEditing: false });
            var _a = _this.props, value = _a.value, onChange = _a.onChange;
            var newValue = e.target.value;
            if (newValue === value || !newValue) {
                // 当输入的值为空或者与之前的值一样的时候，不触发onChange事件
                return;
            }
            onChange(e.target.value);
        };
        _this.state = {
            enableEditing: false
        };
        return _this;
    }
    TitleWithEditor.prototype.render = function () {
        var _a = this.props, iconClassName = _a.iconClassName, value = _a.value;
        var enableEditing = this.state.enableEditing;
        return (<div className="title-with-editor-container">
                {!enableEditing ? (<div className="show">
                        <div className="title">
                            <span>{value}</span>
                        </div>
                        <div className="change" role="presentation" onClick={this.onEditClick}>
                            <i className={iconClassName} aria-hidden="true"/>
                        </div>
                    </div>) : (<div className="edit">
                        <antd_1.Input ref={this.inputRef} defaultValue={value} style={{ width: '100%' }} onPressEnter={this.triggerChange} onBlur={this.triggerChange}/>
                    </div>)}
            </div>);
    };
    TitleWithEditor.defaultProps = {
        iconClassName: 'fa fa-pencil-square-o',
        onChange: function () {
            console.log('onchange');
        }
    };
    TitleWithEditor.propTypes = {
        iconClassName: PropTypes.string,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func
    };
    return TitleWithEditor;
}(React.Component));
exports["default"] = TitleWithEditor;
