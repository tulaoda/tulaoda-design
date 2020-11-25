import * as React from 'react';
import * as PropTypes from 'prop-types';
import './index.scss';
export interface ITitleWithEditorProps {
    iconClassName?: string;
    value: string;
    onChange?: Function;
}
interface ITitleWithEditorState {
    enableEditing: boolean;
}
declare class TitleWithEditor extends React.Component<ITitleWithEditorProps, ITitleWithEditorState> {
    static defaultProps: {
        iconClassName: string;
        onChange: () => void;
    };
    static propTypes: {
        iconClassName: PropTypes.Requireable<string>;
        value: PropTypes.Validator<string>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
    };
    constructor(props: any);
    inputRef: React.RefObject<any>;
    onEditClick: () => void;
    triggerChange: (e: any) => void;
    render(): React.ReactElement;
}
export default TitleWithEditor;
