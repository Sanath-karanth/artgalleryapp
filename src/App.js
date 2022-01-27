import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import MainPage from './components/mainPage';
import FeedbackPage from './components/feedback';
import About from './components/about';
import PortraitPage from './components/portrait';
import PhotographyPage from './components/photography';
import Demo from './components/demo';

function App() {
  return (
     <Router>
          <AuthProvider>
               <Switch>
                    <Route exact path="/">
                         <MainPage />
                    </Route>
                    <Route path="/portrait">
                         <PortraitPage />
                    </Route>
                    <Route path="/photography">
                         <PhotographyPage />
                    </Route>
                    <Route path="/about">
                         <About />
                    </Route>
                    <Route path="/demopage">
                         <Demo />
                    </Route>
                    <Route path="/feedback">
                         <FeedbackPage />
                    </Route>
               </Switch>
          </AuthProvider>
     </Router>
  );
}

export default App;