import React, {Component} from 'react';

	class Header extends Component {
  
  	render() {
    	return (
      		  
      			<div className="App">
      		      		<h1>nama :{this.props.nama} </h1> 
      		      		<h1>alamat :{this.props.alamat}  </h1> 

      		    </div>
    	);
  	  }
	} 

	export default Header;