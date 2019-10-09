import React from 'react';

export default class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            editValue: props.item.value
        }
    }
    componentDidMount() {
        this.refs.editValue.focus();
    }
    onClickClose = () => {
        var index = parseInt(this.props.index);
        this.props.removeItem(index);
    }

    componentDidUpdate(prevProps) {
        if (this.props.item !== prevProps.item) {
            this.setState({ editValue: this.props.item.value });
        }
        this.refs.editValue.focus();
    }

    onClickDone = () => {
        var index = parseInt(this.props.index);
        this.props.markTodoDone(index);
    }

    _handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            const index = this.props.index;
            const newTodoItem = this.refs.editValue.value;
            this.props.updateItem(index, newTodoItem);
            this.setState({ editing: false });
        }
        if (event.keyCode === 27) {
            this.setState({ editing: false });
        }
    }
    render() {
        var viewStyle = {};
        var editStyle = {};
        const { item: { done } } = this.props
        var todoClass = done ? "column is-full done" : "column is-full undone";

        if (this.state.editing) {
            viewStyle.display = 'none';
        } else {
            editStyle.display = 'none';

        }

        const { editValue } = this.state
        return (
            <div>
                <div style={viewStyle}>
                    <div className="panel-block">
                        <div className="control">
                            <div className="columns">
                                <div className={todoClass} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <input type="checkbox" className="checkbox" onClick={this.onClickDone} checked={done} onChange={() => { }} />
                                    <div onClick={() => {
                                        this.setState({ editing: true })
                                    }}>
                                        {this.props.item.value}
                                    </div>
                                </div>
                                <div className="column" style={{ display: 'flex', alignItems: 'center' }}>
                                    <button type="button" className="button is-danger" onClick={this.onClickClose}>remove</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div style={editStyle}>
                    <div className="panel-block">
                        <div className="column is-full">
                            <div className="field" >
                                <div className="control">
                                    <input
                                        className="input"
                                        ref="editValue"
                                        type="text"
                                        value={editValue}
                                        onChange={(event) => this.setState({ editValue: event.target.value })}
                                        onKeyDown={this._handleKeyDown}
                                        onBlur={() => this.setState({ editing: false })}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}