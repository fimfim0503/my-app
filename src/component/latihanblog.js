import React, {Component} from 'react';
import axios from 'axios';
import Post from './post';

  class Blogpost extends Component {
  
    state={
      isi:[]
    }

    getApi=()=>{
        axios.get('http://localhost:3004/posts')
      .then((hasil)=>{
        this.setState({
          isi:hasil.data
        })
      })
    }


  handleHapus=(data)=>{
    axios.delete(`http://localhost:3004/posts/${data}`)
    .then((respon)=>{
      this.getApi()
    })
  }

    componentDidMount(){
      this.getApi()
    }

    render() {
      return (
              <div >
                   <div className="App">
                         <h1> Berita Utama </h1> 
                     </div>
                 <div >

                  {
                    this.state.isi.map(post=>{
                      return <Post 
                              key={post.id}
                              data={post} 
                              hapus={this.handleHapus}
                              />
                    })
                  }
                  
              </div> 
                </div>
             
      );
      }
  } 

  export default Blogpost