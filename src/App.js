import React, {Components} from 'react';
import Subject from "./components/Subject"
import TOC from "./components/TOC"
import ReadContent from "./components/ReadContent"
import CreateContent from "./components/CreateContent"
import UpdateContent from "./components/UpdateContent"
import Control from "./components/Control"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode:"create",
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
  getReadContent() {
    var i = 0;
    while (i<this.state.contents.length) {
      var data = this.state.contents[i];
      if (data.id == this.state.selectedContents_id) {
        return data;
        break;
      }
      i++;
    }
  }
  getContent() {
    var _title, _desc, _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === "read") {
      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    } else if (this.state.mode == "create") {
      _article = <CreateContent onSubmit={function(_title, _desc) {
        this.max_content_id++;
        var _contents = this.state.contents.concat(
          {id: this.max_content_id, title: _title, desc:_desc}
        )
        this.setState({
          contents: _contents,
          mode: "read"
        })
      }.bind(this)}></CreateContent>
    } else if (this.state.mode == "update") {
      _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={function(_id, _title, _desc) {
        var _contents = Array.from(this.state.contents);
        _contents[this.state.selectedContents_id - 1] = {id:_id, title:_title, desc:_desc};
        this.setState({
          contents: _contents,
          mode: "read"
        })
      }.bind(this)}
        ></UpdateContent>
    } 
    return _article;
  }
  render() {
    return (
      <div className="App">
          <Subject  
            title={this.state.subject.title}
            sub={this.state.subject.sub}
            mode={this.state.mode}
            onChangePage ={ function() {
              this.setState({ mode:"welcome"})
            }.bind(this)}>
            </Subject>
          <TOC
            onChangePage={function(id) {
              this.setState({mode: "read", selectedContents_id: Number(id)})
            }.bind(this)}
            data={this.state.contents}>
          </TOC>
          <Control onChangeMode={function(_mode) {
            if(_mode == "delete") {
              if(window.confirm("레알지워?")) {
                var _contents = Array.from(this.state.contents);
                var i = 0;
                while (i< _contents.length) {
                  if(_contents[i].id === this.state.selectedContents_id) {
                    _contents.splice(i,1);
                    break;
                  }
                  i++;
                }
                this.setState({ mode: "welcome", contents:_contents});
              }
            } else {
              this.setState({mode: _mode})
            }
          }.bind(this)}>
          </Control>
          {this.getContent()}
      </div>
    );
  }
}

export default App;
