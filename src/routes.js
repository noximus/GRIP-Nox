import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Home, Top, Reviewed } from "./components";
import './routes.css';

class Routes extends Component {

	render(){
		return <div>
			<div>
				<h1>hello app</h1>
			</div>
			<div>
			<BrowserRouter>
				<div>
					{/* MENU */}
					<nav>
						
					</nav>
					{/* CONTENT */}
					<div className="main-cont">
						<Route path="/" exact>
							{ ({ match }) => <Home show={match !== null} /> }
						</Route>
						<Route path="/top">
							{ ({ match }) => <Top show={match !== null} /> }
						</Route>
						<Route path="/reviewed">
							{ ({ match }) => <Reviewed show={match !== null} /> }
						</Route>
					</div>
					<footer>
						<Link className="gsap-btn active" to="/">Home</Link>
						<Link className="gsap-btn" to="/top">Top</Link>
						<Link className="gsap-btn" to="/reviewed">Reviewed</Link>
					</footer>
				</div>	
			</BrowserRouter>
			</div>
		</div>;
	}

}

export default Routes;
