import React from 'react';
import Tilt from 'react-tilt'
import gamer from './game-maker.png';

const Logo = () => {
  return (
    <div style={{marginLeft: '0', marginRight: '0', paddingLeft: '0', paddingRight: '0'}} className='f3 link dim white pa2 ma4 mt15 pointer'>
      <Tilt className="Tilt" options={{ max : 45 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-outer">
          <img alt='logo' src={gamer} />
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;