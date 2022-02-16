import React, { Component } from 'react'
import User from './User';

 class Users extends Component {
  render() {
    const{users} = this.props;
    return (
      <div>
        {
          users.map(user=>{
            return(
              <User
                key = {user.id}
                id = {user.id}
                name = {user.name}
                salary = {user.salary}
                branch = {user.branch}

              
              />
            )
          })
        }
      </div>
    )
  }
}

export default Users