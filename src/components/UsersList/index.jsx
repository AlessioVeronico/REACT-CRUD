import React from "react";
import UserRow from '../UserRow';
import { getUser } from '../../models/User';
import { Link } from 'react-router-dom';

export default class UserList extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:4000/users').then(
      res => res.json()
    ).then(
      users => this.setState({
        users: users.map( user => getUser(user) )
      })
    );
  }

  onDelete = user => {
    fetch(`http://localhost:4000/users/${ user.id }`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( this.state ),
    }).then(
      res => res.json()
    ).then(
      res => console.log(res)
    );

    const users = [...this.state.users];
    users.splice( this.state.users.indexOf(user), 1 );

    this.setState({
      users
    });    
  }

  render() {
    const list = this.state.users.map( user => <UserRow key={ user.id } onDelete={ this.onDelete } user={ user } /> );

    return (
      <div>
        <table className="table table-secondary table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { list }
          </tbody>
        </table>
        <Link className="btn btn-primary" to={ '/addUsers' }>Add Users</Link>
      </div>
    );
  }
}