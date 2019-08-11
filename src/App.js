import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './style.scss'
// redux import
import {Provider} from 'react-redux';
import store from './redux/store';
// import components
import HeadLine from './components/HeadLine'
import IconBoxConnected from './components/IconBox'
// import Pages
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import BacksidePage from './pages/BacksidePage'

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <>
        <HeadLine />
        
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/backside" component={BacksidePage} />

        <IconBoxConnected />
      </>
    </Router>
  </Provider>
)

function App() {
  return (
    <Root store={store} />
  );
}

export default App;