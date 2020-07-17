import React, {Component} from 'react';
import axios from 'axios';

	class Api extends Component {

		constructor(props){
			super(props);
			this.state={
				first_name:"",
				last_name:""
			}
		}

		inputonchangeHandler=(even)=>{
			this.setState({ [even.target.name]:even.target.value

			})
		}

		onHandler=(event)=>{
			console.log("diklik");
			event.preventDefault();
			var payload={
				first_name:this.state.first_name,
				last_name:this.state.last_name
			};

			var url="https://reqres.in/api/users"
			axios.post(url, payload)
			.then(response=>{
				console.log(response)
			})
			.catch(error=>{
				console.log(error)
			})
		}


  
  	render() {
    	return (
      		  	<div className="App">
      		        	<form onSubmit={this.onHandler}>
      		        		<input
      		        			type="text"
      		        			name="first_name"
      		        			value={this.state.first_name}
      		        			onChange={this.inputonchangeHandler}
      		        		/>
      		        		<input
      		        			type="text"
      		        			name="last_name"
      		        			value={this.state.last_name}
      		        			onChange={this.inputonchangeHandler}
      		        		/>

      		        		<button >Simpan</button> 
      		        	</form> 
      		      </div>
      
    	);
  	  }
	} 

	export default Api;