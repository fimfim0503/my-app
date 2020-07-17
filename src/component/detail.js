import React,{Component} from 'react'
import axios from 'axios';

	class Detail extends Component {
		state={
			pis:{

			}
		}

		componentDidMount(){
			let id=this.props.match.params.postid
			axios.get(`http://localhost:3004/posts/${id}`)
			.then((result)=>{
				let hasilapi=result.data
				this.setState({
					pis:{
						title:hasilapi.title,
						body:hasilapi.body
					}
				})
			})
		}

  	render() {

    	return (
      		  	<div className="App">

      		        	<h1> {this.state.pis.title}</h1>
      		        		<h4>{this.state.pis.body}</h4> 
      		      </div>
      
    	);
  	  }
	} 

	export default Detail;