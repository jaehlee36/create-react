import React from 'react';

class TOC extends React.Component {

  render() {
    var data = this.props.data;
    var i = 0;
    var lists = [];
    while (i < data.length){
        lists.push(
        <li key= {data[i].id}>
            <a
                href={"/content/"+data[i].id}
                data-id={data[i].id}
                onClick={function(e) {
                    e.preventDefault();
                    this.props.onChangePage(e.target.dataset.id);
                }.bind(this)}>
            {data[i].title}</a>
        </li>);
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