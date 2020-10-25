import React from 'react';

class Subject extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}

export default Subject;