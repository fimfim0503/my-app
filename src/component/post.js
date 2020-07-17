import React from 'react';

const Post =(props)=>{
	return (

				<div className="App">
			      		<div className="App">
			      				<p>{props.data.id} </p> 
			      				</div>
			      					<div className="App">
			      				      
			      	    <h1 onClick={()=>props.Detailgo(props.data.id)}
			      	    > judul :{props.data.title}</h1> 
			      		<p>{props.data.body}  </p>
			      				    </div>
			      	      
			      	      
			      	      <div className="App">
			      	      	<button
			      	      		onClick={()=>props.hapus(props.data.id)}
			      	      	>delete</button> 

			      	      	<button
			      	      		onClick={()=>props.edit(props.data)}
			      	      	>Edit</button> 
			      	      	         
			      	      </div>  
			    </div>
		)
}

export default Post