import React from "react";
import { Link } from "react-router-dom";

class UserRow extends React.Component {
  render() {
    const update = `/users/${this.props.user.id}/update`

    return (
      <tr>
        <td>{ this.props.user.id }</td>
        <td>{ this.props.user.email }</td>
        <td>{ this.props.user.name }</td>
        <td>
          <button className="btn btn-danger" onClick={ () => this.props.onDelete(this.props.user) }>Delete</button>
          <Link className="btn btn-warning mx-2" to={ update }>Update</Link>
        </td>
      </tr>
    )
  }
}

export default UserRow;