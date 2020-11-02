import React, {Components} from 'react';
import Subject from "./components/Subject"
import TOC from "./components/TOC"
import Content from "./components/Content"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:"welcome",
      selectedContents_id:2,
      subject: {title:'web', sub:'world wide web'},
      welcome:{title:'welcome', desc:"Hello react"},
      contents: [
        {id: 1, title:"html", desc:"html"},
        {id: 2, title:"css", desc:"css"},
        {id: 3, title:"javascript", desc:"javascript"}
      ]
    }
  }
  render() {
    var _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      var i = 0;
      debugger;
      while (i<this.state.contents.length) {
        var data = this.state.contents[i];
        debugger;
        if (data.id == this.state.selectedContents_id) {
          console.log("render");
          debugger;
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i++;
      }
    }
    return (
      <div className="App">
          <Subject  
            title={this.state.subject.title}
            sub={this.state.subject.sub}
            onChangePage ={ function() {
              this.setState({
                mode:"welcome"
              })
            }.bind(this)}
            >
            </Subject>
          <TOC
            onChangePage={function(id){
              this.setState({
                mode: "read",
                selectedContents_id: Number(id)
              })
            }.bind(this)}
            data={this.state.contents}>
            </TOC>
          <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
