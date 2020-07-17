import React from 'react'

const Post=(props)=>{
	return (

				<div className="App">
			      	<h1>{props.data.title}</h1> 
			      		<p>{props.data.body}</p> 
			      			<button
			      				onClick={()=>props.hapus(props.data.id)}
			      			>
			      			{props.data.id}
			      			</button> 
			      		<hr/> 
			    </div>
		)
}

export default Post;