import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import { BrowserRouter, Route, Switch }  from 'react-router-dom';

function App() {
  return (
  	<BrowserRouter>
	    <div className="App">
	     <Navbar/>
		     <div className="container">
		     <Switch>
		     	<Route exact path="/" component={Index}/>
		     </Switch>
		     </div>
	    </div>
    </BrowserRouter>
  );
}

export default App;
