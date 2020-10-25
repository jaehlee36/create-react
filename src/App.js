import React, {Components} from 'react';
import Subject from "./components/Subject"
import TOC from "./components/TOC"
import Content from "./components/Content"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: {title:'web', sub:'world wide web'},
      contents: [
        {id: '1', title:"html"},
        {id: '2', title:"css"},
        {id: '3', title:"javascript"}
      ]
    }
  }
  render() {
    return (
      <div className="App">
          <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
          <TOC data={this.state.contents}></TOC>
          <Content title="HTML" description="HyperText"></Content>
      </div>
    );
  }
}

export default App;
