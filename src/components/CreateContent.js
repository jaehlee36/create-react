import React from 'react';

class CreateContent extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
    render() {
      return (
        <article>
          <h2>Create</h2>
          <form action="/create_process" method="post"
            onSubmit = {function(e) {
              e.preventDefault();
              this.props.onSubmit(
                e.target.title.value,
                e.target.desc.value
              )
            }.bind(this)}
          >
            <p>
              <input type="text" name="title" placeholder="placeholder">
              </input>
            </p>
            <p>
              <textarea name="desc" placeholder="placeholder"></textarea>
            </p>
            <p>
              <input type="submit"></input>
            </p>
          </form>
        </article>
        );
    }
}


export default CreateContent;