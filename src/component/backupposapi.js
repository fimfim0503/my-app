import React, {Component} from 'react';
import axios from 'axios';
import Post from './post';

  class Blogpost extends Component {
  
    state={
      isi:[],
      formblogpost:{
                  id:1,
                  title:"",
                  body:"",
                  userid:1
      }
    }

    getApi=()=>{
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
      .then((hasil)=>{
        this.setState({
          isi:hasil.data
        })
      })
    }

    postApi=()=>{
      axios.post('http://localhost:3004/posts', this.state.formblogpost)
      .then((result)=>{
        console.log(result)
        this.getApi()
      }, (err)=>{
        console.log('error'.err)
      })
    }


  handleHapus=(data)=>{
    axios.delete(`http://localhost:3004/posts/${data}`)
    .then((respon)=>{
      this.getApi()
    })
  }

  handleforminput=(event)=>{
    let formblogpostnew={...this.state.formblogpost};
    let timestamps= new Date().getTime();
    formblogpostnew['id']=timestamps;
    formblogpostnew[event.target.name] = event.target.value
    this.setState({
      formblogpost:formblogpostnew
    })
  }

  handleSubmit=()=>{
    this.postApi()
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
                       <div className="App">
                           <label>judul posting  </label>
                             <input 
                             name="title" 
                             type="text"
                             onChange={this.handleforminput}
                             />
                        </div>
                        <div className="App">
                           <label>Isi Berita  </label>
                             <textarea
                              name="body"
                              onChange={this.handleforminput}
                             ></textarea>
                        </div>
                        <div className="App">
                             <button 
                              onClick={this.handleSubmit}
                             >Simpan </button> 
                        </div>
                          <div className="App">
                              <hr/>
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