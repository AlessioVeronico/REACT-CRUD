import React from "react";

export default class NotFound extends React.Component {
  render() {
    return(
      <div className="alert alert-danger" role="alert">
        Error 404! What are you doing? Don't try to be a hacker!
      </div>
    )
  }
}