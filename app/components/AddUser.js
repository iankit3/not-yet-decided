import React from 'react';

class AddUser extends React.Component{
    render(){
        return(
            <form className="input-group"
                       onSubmit={this.props.addToList.bind(this)}>
               <input name="newuser" type="text" className="form-control" placeholder="Add user..." />
               <span className="input-group-btn">
                 <button className="btn btn-default" type="submit">Add</button>
               </span>
            </form>
        )
    }
}

export default AddUser;