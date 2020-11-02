import React from 'react';

class Control extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
      return (
        <ul>
          <li>
            <a
              href="/create"
              onClick={function(e) {
                e.preventDefault();
                this.props.onChangeMode("create");
              }.bind(this)}>create</a>
          </li>
          <li>
            <a href="/update"
              onClick={function(e) {
                e.preventDefault();
                this.props.onChangeMode("update");
              }.bind(this)}>update</a>
          </li>
          <input type="button" value="delete"
            onClick={function(e) {
              e.preventDefault();
              this.props.onChangeMode("delete");
            }.bind(this)}></input>
        </ul>
      );
  }
}


export default Control;