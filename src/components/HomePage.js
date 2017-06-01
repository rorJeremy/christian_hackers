import React from 'react';
// import globalStyles from '../styles';
// import Data from '../data';

class HomePage extends React.Component {

  render() {
  	return (
  	<div>
	    <div style={{display: 'flex', justifyContent: 'center'}}>
	      <h1>Hello Hackers</h1>
	    </div>
	    <div style={{display: 'flex', justifyContent: 'center'}}>
	    	<p style={{marginTop: 0}}>We help Christian consumers become Christian creators.</p>
	    </div>
	    <div style={{display: 'flex', justifyContent: 'center'}}>
	    	<p style={{marginTop: 0}}>Join us for one of our weekly hacknights as we work together to meet our goal!</p>
	    </div>	    
    </div>
  	)
  }
}

export default HomePage;