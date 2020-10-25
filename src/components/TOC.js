import React from 'react';

class TOC extends React.Component {

  render() {
    var data = this.props.data;
    var i = 0;
    var lists = [];
    while (i < data.length){
        lists.push(<li key= {data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
        i++;
    }
    return (
        <nav>
            <ul>
                {lists}
            </ul>
        </nav>
    );
  }
}

export default TOC;