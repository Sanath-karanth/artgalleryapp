import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import MainPage from './components/mainPage';
// import SecondPage from './components/secondPage';
import About from './components/about';
// import MarkerPage from './components/markerSketch';
// import PortraitPage from './components/portraitSketch';
// import PhotographyPage from './components/photography';
// import Demo from './components/demo';

function App() {
  return (
    <Switch>
     <Route exact path="/">
           <MainPage />
     </Route>
     <Route path="/about">
           <About />
      </Route>
     {/* <Route path="/secondPage">
           <SecondPage />
      </Route>
      
      <Route path="/markerSketch">
           <MarkerPage />
      </Route>
      <Route path="/portraitSketch">
           <PortraitPage />
      </Route>
      <Route path="/photography">
           <PhotographyPage />
      </Route>
      <Route path="/demopage">
           <Demo />
      </Route> */}
          
      </Switch>
  );
}

export default App;


// import React from 'react';
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
