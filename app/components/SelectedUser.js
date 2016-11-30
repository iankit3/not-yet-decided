import React from 'react';

class SelectedUser extends React.Component{
            //  <ul>{Object.keys(this.props.selecteduser).map((e, i) => {
            //        return <li> {this.props.selecteduser[e]} </li>
            //     })} 
            //  </ul>
               // <h4>{this.props.selecteduser.name}</h4>
    render(){
        return(
            <div className="jumbotron">
             <h3>User Details</h3>    
             <ul className="list-group">
                <li>{this.props.selecteduser.dob}</li>
                <li>{this.props.selecteduser.email}</li>
                <li>{this.props.selecteduser.gender}</li>
            </ul>
            </div>
        )
    }
}

export default SelectedUser;