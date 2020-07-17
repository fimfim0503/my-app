import React, {Component} from 'react';
import Hitung2 from './Header/Hitung2'

  class Hitung extends Component {
    constructor(){
      super();
      this.state={
        angka:1
      }
    }

    handlecounterChange1=(newValue)=>{
      this.setState({
        angka:newValue
      })
    }
  
    render() {
      return (
              <div className="App">
                  
                  <div className="App">
                        <h1> {this.state.angka}</h1> 
                    </div>

                      <div className="App">
                          <Hitung2
                          oncounterChange={(value)=>this.handlecounterChange1(value)}
                          />
                        </div>

                </div>
      
      );
      }
  } 

  export default Hitung;