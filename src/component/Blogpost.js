import React, {Component} from 'react';
import axios from 'axios';
import Post from './post';



  class Blogpost extends Component {

    state={
      isi:[],
      isiform:{
        id:1,
        title:"",
        body:"",
        userid:1
      },
      isUpdate:false
    }

    getApi=()=>{
      axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
      .then((result)=>{
        this.setState({
          isi:result.data
        })
      })
    }



  postApi=()=>{
    axios.post('http://localhost:3004/posts/',this.state.isiform)
    .then((result)=>{
      this.setState({
        isiform:{
          id:1,
          title:"",
          body:"",
          userid:""
        }
      })
      this.getApi()
    })
  }

  putapi=()=>{
    axios.put(`http://localhost:3004/posts/${this.state.isiform.id}`,this.state.isiform)
    .then((result)=>{
      
      this.setState({
        isiform:{
          id:1,
          title:"",
          body:"",
          userid:""
        },
        isUpdate:false
      })
      this.getApi();
    })
  }


    handlehapus=(data)=>{
      axios.delete(`http://localhost:3004/posts/${data}`)
      .then((result)=>{
        this.getApi()
      })
    }

   handleSimpan=()=>{
    if(this.state.isUpdate) {
      this.putapi()
    }else{
      this.postApi();
    }

      
    }



    

    handlechange=(event)=>{
      let isiformnew={...this.state.isiform}
      let waktu= new Date().getTime()
     if(!this.state.isUpdate){
        isiformnew['id']=waktu
     }
      
      isiformnew[event.target.name]=event.target.value
      this.setState({
        isiform:isiformnew
      })

    }

    handleedit=(data)=>{
      
      this.setState({
        isiform:data,
        isUpdate:true
      })
    }

    detailhandle=(id)=>{
        this.props.history.push(`/detail/${id}`)
    }

  
    
    componentDidMount(){
      this.getApi()
    }
  
    render() {
      return (
            
              <div className="">
                    <div className="App">
                        <div className="App">
                                <h1>Judul </h1>
                                  <h2> 
                                      <input
                                        type="text"
                                        name="title"
                                        value={this.state.isiform.title}
                                        onChange={this.handlechange}
                                      />
                                  </h2> 

                            </div> 
                             <div className="App">
                                <h1>Isi </h1>
                                  <h2> 
                                      <textarea
                                        name="body"
                                        value={this.state.isiform.body}
                                        onChange={this.handlechange}
                                      ></textarea>
                                  </h2> 

                            </div>
                            <div className="App">
                                
                                   <h2> 
                                        <button
                                          onClick={this.handleSimpan}
                                        >Simpan</button> 
                                  </h2>

                            </div> 
                      </div>

                    <div className="App">
                          {
                            this.state.isi.map(post=>{
                              return <Post 
                                    key={post.id}
                                    data={post}
                                    hapus={this.handlehapus}
                                    edit={this.handleedit}
                                    Detailgo={this.detailhandle}
                                    
                                    />
                            })
                          }
                      </div>
                </div>
      );
      }
  } 

  export default Blogpost;