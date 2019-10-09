import React from 'react'

export default class TodoHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.refs.itemName.focus();
  }
  _handdleKeyDown = (event) => {
    if (event.key === "Enter") {
      this.onClickAdd()
    }
  }
  onClickAdd = () => {
    var newItemValue = this.refs.itemName.value;
    this.props.addItem({ newItemValue });
  }
  render() {
    return (
      <div className="columns" style={{ display: 'flex', alignItems: "center" }}>
        <div className="column is-one-fifth " style={{ justifyContent: 'center', alignItems: 'center' }}>
          <h1 className="is-size-4">Todo list:</h1>
        </div>
        <div className="column is-three-fifths">
          <div className="field">
            <div className="control">
              <input
                className="input"
                type="text"
                ref="itemName"
                placeholder="add a new todo..."
                onKeyDown={this._handdleKeyDown}
              />
            </div>
          </div>
        </div>
        <div className="column" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <button className="button is-link" type="button" onClick={this.onClickAdd}>Add</button>
        </div>
      </div>
    )
  }
}