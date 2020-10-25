import React, {Components} from 'react';
import Subject from "./components/Subject"
import TOC from "./components/TOC"
import Content from "./components/Content"
function App() {
  return (
    <div className="App">
        <Subject title="www" sub="World wide web"></Subject>
        <TOC></TOC>
        <Content title="HTML" description="HyperText"></Content>
    </div>
  );
}

// function Subject(props) {
//   return (
//       <header>
//           <h1>{props.title}</h1>
//           {props.sub}
//       </header>
//   )
// }
// function TOC() {
//   return (
//       <nav>
//           <ul>
//               <li><a href="1.html">HTML</a></li>
//               <li><a href="2.html">CSS</a></li>
//               <li><a href="3.html">JS</a></li>
//           </ul>
//       </nav>
//   )
// }
// function Content(props) {
//   return (
//       <article>
//           <h2>{props.title}</h2>
//           {props.description}
//       </article>
//   )
// }
// class Content extends React.component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <article>
//           <h2>{this.props.title}</h2>
//           {this.props.description}
//       </article>
//     );
//   }
// }

export default App;
