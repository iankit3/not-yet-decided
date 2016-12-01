import React from 'react';

import SelectedUser from './SelectedUser'
import Data from '../services/data-service';

class Main extends React.Component{
  constructor(props){
      super(props);
    this.state = {
        randomData:''
    }  
  }

  componentDidMount(){
     Data.getData('https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1')
     .then( (res) => { this.setState({randomData:res});console.log(this);console.log(res) })
  }
  render(){
      return(
          <div className="col-md-9 full-height main">
            <div className="row">
                <SelectedUser selecteduser={this.props.selecteduser} />
            </div>
           <h1 style={{marginTop: 0.1+'em'}}>Some bacon ipsum content</h1>
              <section>
                  <article>
                      {this.state.randomData}
                  </article>
              </section>
          </div>
      )
  }

}

export default Main;