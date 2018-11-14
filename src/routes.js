import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Home, Services, Contact } from "./components";

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
						<Link className="gsap-btn" to="/">Home</Link>
						<Link className="gsap-btn" to="/services">Services</Link>
						<Link className="gsap-btn" to="/contact">Contact</Link>
					</nav>

					{/* CONTENT */}
					<div>
						<Route path="/" exact>
							{ ({ match }) => <Home show={match !== null} /> }
						</Route>
						
						<Route path="/services">
							{ ({ match }) => <Services show={match !== null} /> }
						</Route>
						<Route path="/contact">
							{ ({ match }) => <Contact show={match !== null} /> }
						</Route>
					</div>

				</div>
			</BrowserRouter>
			</div>
		</div>;
	}

}

export default Routes;
