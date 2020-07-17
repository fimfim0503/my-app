import React, {Component} from 'react'
import Latihhitung2 from './Latihhitung2'

	class Latihhitung1 extends Component {

		state={
			angka:0
		}

		changeanngka=(newValue)=>{
			this.setState({
				angka:newValue
			})
		}
  
  	render() {
    	return (
      		  	<div className="App">
      		        	<h1>{this.state.angka}</h1>
      		        		<div className="App">
      		        	       <Latihhitung2 terimaprops={(New)=>this.changeanngka(New)} />
      		        	     </div> 
      		      </div>
      
    	);
  	  }
	} 

	export default Latihhitung1