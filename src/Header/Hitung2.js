import React, {Component} from 'react';

  class Hitung2 extends Component {
    constructor(){
      super();
      this.state={
        angka:1
      }
    }

    handleCounterChange=(newValue)=>{
    	this.props.oncounterChange(newValue)
    }

    handlerClik=(e)=>{
    	if (this.state.angka < 10){

      this.setState({
        angka:this.state.angka + 1
      }, ()=>{

      this.handleCounterChange(this.state.angka)
      	
      })
    	} else {
    		alert('habis')
    	}

    }
  
    render() {
      return (
              <div className="App">
                  
                  

                    <div className="App">
                      <h1>   <button 
                              onClick={this.handlerClik}
                      >
                       tambah </button> </h1> 
                    </div>

                    <div className="App">
                      <h1> {this.state.angka} </h1> 
                    </div>

                </div>
      
      );
      }
  } 

  export default Hitung2;