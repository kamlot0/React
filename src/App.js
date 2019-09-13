import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, NavLink, Route} from 'react-router-dom'
import Header from './Header.js'
import Navigation from './Navigation.js'
import Page from './Page.js'
import Footer from './Footer.js'

class App extends Component {

  
  render(){
   return (
     <BrowserRouter>
      <div className="app">
        <header>
          {<Header/>}
        </header>
        <main>
          <aside>
            {<Navigation/>}
          </aside>
          <section className="page">
            {<Page/>}
          </section>
        </main>
        <footer>
          {<Footer/>}
        </footer>
     </div>
    
     </BrowserRouter>
  );
  }
}

export default App;
