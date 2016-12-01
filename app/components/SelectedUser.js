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
                <h2 className="panel panel-info panel-heading">{this.props.selecteduser.name.first}</h2>
                <div className="card">
                    <h3>User Details</h3>    
                    <ul className="list-group">  
                        <li className="list-group-item">
                        <span className="glyphicon glyphicon-envelope"></span>
                        {this.props.selecteduser.email}
                        </li>
                        <li className="list-group-item">
                        <span className="glyphicon glyphicon-time"></span>
                        {this.props.selecteduser.dob}
                        </li>
                        <li className="list-group-item">
                        <span className="glyphicon glyphicon-user"></span>
                        {this.props.selecteduser.gender}
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default SelectedUser;