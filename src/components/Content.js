import React from 'react';

class Content extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
      return (
          <article>
              <h2>{this.props.title}</h2>
              {this.props.description}
          </article>
      );
  }
}


export default Content;