import React,{Component} from 'react'


	class Latihhitung2 extends Component {
		constructor(){
			super();
			this.state={
				angka:1
			}
		}
lemparprops=(newValue)=>{
	this.props.terimaprops(newValue)
}

handlerClick=()=>{
	this.setState({
		angka:this.state.angka + 1
	},
		()=>{
			this.lemparprops(this.state.angka)
		}
	)
}

  
  	render() {
    	return (

    			<div className="App">
    		      	<div className="App">
    		            	<button
    		            		onClick={this.handlerClick}
    		            	> tambah </button> 
    		          </div>
    		          	<div className="App">
    		                	<h1>{this.state.angka}</h1> 
    		              </div>
    		    </div>
      		  
      
    	);
  	  }
	} 


export default Latihhitung2;