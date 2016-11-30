import React from 'react';
import Data from '../services/data-service';

class Sidebar extends React.Component{
  constructor(props){
      super(props);
   this.state = {
       data:[
           {name:'Ankit'},{name:'Kumar'},
       ]
   }    
  }

    componentDidMount(){
        Data.getData('https://randomuser.me/api/?results=8').then( res => {
          this.setState({data:res.results})
        })
    }

  addToList(ev){
    ev.preventDefault();
    this.setState({data: [...this.state.data,{name:{'first':ev.target.newuser.value}} ] });
    ev.target.newuser.value = '';
  }
 

  render(){
      return(
          <div className="col-md-3 full-height sidebar">
              <div className="row">
                  <form className="input-group"
                       onSubmit={this.addToList.bind(this)}>
                      <input name="newuser" type="text" className="form-control" placeholder="Add user..." />
                          <span className="input-group-btn">
                              <button className="btn btn-default" type="submit">Add</button>
                          </span>
                  </form>
               </div>
            <h2>Active Users List</h2>   
            <ul className="list-group">    
              {this.state.data.map( (e,index) => {
                 return <li onClick={this.props.setSeletedUser.bind(this,{e})} 
                            className="list-group-item" 
                            key={index}>{e.name.first} {e.name.last}</li>
              })}
            </ul>
          </div>
      )
  }

}

export default Sidebar;