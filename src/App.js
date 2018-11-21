import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import HeaderCarousel from './components/HeaderCarousel/HeaderCarousel';
import Routes from './routes';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 55,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Particles
          className='particles'
          params={particlesOptions}
        />
        <Navigation />
        <HeaderCarousel />
        {/* <Rating /> */}
        {/* <Title /> */}
        {/* <Trailer /> */}
        {/* <Rating /> */}

        <Routes />
      </div>
    );
  }
}

export default App;