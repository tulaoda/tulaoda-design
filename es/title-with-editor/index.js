import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Input } from 'antd';
import './index.scss';
class TitleWithEditor extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.onEditClick = () => {
            this.setState({ enableEditing: true }, () => {
                setTimeout(() => {
                    // 选中输入框的文字
                    this.inputRef.current.select();
                });
            });
        };
        this.triggerChange = (e) => {
            this.setState({ enableEditing: false });
            const { value, onChange } = this.props;
            const newValue = e.target.value;
            if (newValue === value || !newValue) {
                // 当输入的值为空或者与之前的值一样的时候，不触发onChange事件
                return;
            }
            onChange(e.target.value);
        };
        this.state = {
            enableEditing: false
        };
    }
    render() {
        const { iconClassName, value } = this.props;
        const { enableEditing } = this.state;
        return (React.createElement("div", { className: "title-with-editor-container" }, !enableEditing ? (React.createElement("div", { className: "show" },
            React.createElement("div", { className: "title" },
                React.createElement("span", null, value)),
            React.createElement("div", { className: "change", role: "presentation", onClick: this.onEditClick },
                React.createElement("i", { className: iconClassName, "aria-hidden": "true" })))) : (React.createElement("div", { className: "edit" },
            React.createElement(Input, { ref: this.inputRef, defaultValue: value, style: { width: '100%' }, onPressEnter: this.triggerChange, onBlur: this.triggerChange })))));
    }
}
TitleWithEditor.defaultProps = {
    iconClassName: 'fa fa-pencil-square-o',
    onChange: () => {
        console.log('onchange');
    }
};
TitleWithEditor.propTypes = {
    iconClassName: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func
};
export default TitleWithEditor;
