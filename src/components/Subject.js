import React from 'react';

class Subject extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
        <header>
            <h1><a href="/" onClick={function(e) {
                e.preventDefault();
                this.props.onChangePage();
            }.bind(this)}
                >{this.props.title}</a></h1>
            {this.props.sub}<br></br>
            <b>mode: '{this.props.mode}'</b>
        </header>
    );
  }
}

export default Subject;