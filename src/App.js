// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <main className='container'>
//       <h1>Hello World</h1>
//     </main>
//   );
// }

// export default App;

import React, { Component } from 'react';
import Movies from './components/movies';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className='container'>
        <Movies />
      </main>
    );
  }
}

export default App;
