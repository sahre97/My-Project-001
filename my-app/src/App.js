// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import style from './style';
// Removed logo since we don't need it anymore
import './App.css';
class App extends Component {
  render() {
    return (
      <div classname="container">
        <h1>Hello World!</h1>
        <p>I just created my first React App</p>
      </div>
    );
  }
}
export default App;

