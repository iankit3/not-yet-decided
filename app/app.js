import React from 'react';

import Sidebar from './components/Sidebar';
import Main from './components/Main';

class App extends React.Component{
  constructor(){
      super();
      this.state = {
          selecteduser:{name:{first:'Ankit'}}
      }
  } 
 
  setSeletedUser(e){
      console.log(e.e)
    this.setState({selecteduser:e.e});
  }

  render(){
      return(
          <div className="col-md-12 outer" >
              <Sidebar setSeletedUser={this.setSeletedUser.bind(this)} />
              <Main selecteduser={this.state.selecteduser} />   
          </div>
      )
  }
}

export default App;