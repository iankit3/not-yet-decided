import React from 'react';

import Sidebar from './components/Sidebar';
import Main from './components/Main';

class App extends React.Component{
  render(){
      return(
          <div className="col-md-12 outer" >
              <Sidebar />
              <Main />   
          </div>
      )
  }
}

export default App;