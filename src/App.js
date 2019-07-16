import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Lyrics from "./components/tracks/Lyrics";

import { BrowserRouter, Route, Switch }  from 'react-router-dom';

import { Provider } from './context';

function App() {
  return (
		<Provider>
			<BrowserRouter>
				<div className="App">
					<Navbar/>
						<div className="container">
						<Switch>
							<Route exact path="/" component={Index}/>
							<Route exact path="/lyrics/track/:id" component={Lyrics} />
						</Switch>
						</div>
				</div>
			</BrowserRouter>
		</Provider>
  );
}

export default App;
