import React from "react";

export default class Home extends React.Component {
  render() {
    return(
      <div className="alert alert-primary" role="alert">
        Hello! Welcome to my SPA,  go to the Users List section to CRUD'em!
      </div>
    )
  }
}