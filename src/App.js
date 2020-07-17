import React, {Component} from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';



import BlogPost from './component/Blogpost';
import About from './component/About';
import Youtube from './component/Youtube';
import Detail from './component/detail';
import './style.css';

  class App extends Component {
  
    render() {
      return (
              
              <BrowserRouter className="frame">

                <div className="">
                    <Link to="/">Home </Link>
                    <Link to="/About">About </Link>
                    <Link to="/Youtube">Youtube </Link>
                    <Link to="/Detail">Detail </Link>
                   
                   
                    
                    <hr/>
                </div>
              
              <Route path="/" exact component={BlogPost}/>
              <Route path="/About" component={About}/>
              <Route path="/Youtube" component={Youtube}/>
              <Route path="/Detail/:postid" component={Detail}/>
              
              
              
           

                </BrowserRouter>
      
      );
      }
  } 
export default App;
