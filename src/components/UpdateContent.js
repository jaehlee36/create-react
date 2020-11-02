import React from 'react';

class updateContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
      desc: this.props.data.desc
    }
  }
    render() {
      return (
        <article>
          <h2>Update</h2>
          <form action="/update_process" method="post"
            onSubmit = {function(e) {
              e.preventDefault();
              this.props.onSubmit(
                this.state.id,
                e.target.title.value,
                e.target.desc.value
              )
            }.bind(this)}
          >
            <p>
              <input 
                type="text"
                name="title"
                placeholder="placeholder"
                value={this.state.title}
                onChange={function(e) {
                  this.setState({ title: e.target.value});
                }.bind(this)}>
              </input>
            </p>
            <p>
              <textarea
                name="desc"
                value={this.state.desc} 
                placeholder="placeholder"
                onChange={function(e) {
                  this.setState({ desc: e.target.value});
                }.bind(this)}></textarea>
            </p>
            <p>
              <input type="submit"></input>
            </p>
          </form>
        </article>
        );
    }
}


export default updateContent;