import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import {Home,Film} from './pages';
class App extends React.Component {
  render() {
    return (
      <div>

        <BrowserRouter>
          <Header />

          <Route component={Home} path={'/home'} />
          <Route component={Film} path={'/film/:filmID'} />

        </BrowserRouter>        
      </div>
    );
  }
}

export default App;
