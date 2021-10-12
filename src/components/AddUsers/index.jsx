import React from "react";
import { withRouter } from "react-router";

const initialState = {
    name: '',
    email: '',
}

class AddUsers extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  componentDidUpdate() {
    console.log(this.state)
  }

  nameChangeHandler(event) {
    this.setState({
      name: event.target.value
    });
  }

  emailChangeHandler(event) {
    this.setState({
      email: event.target.value
    });
  }

  submitHandler(e) {
    e.preventDefault();
    if( !this.formIsValid() ) {
      return;
    }
    
    console.log(`User Added ${ JSON.stringify(this.state) }`)

    fetch('http://localhost:4000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    }).then(
      res => res.json()
    ).then(
      res => console.log(res)
    );
    
    this.setState(initialState)
    this.props.history.push('/users')
  }

  nameIsValid = () => this.state.name !== '';
  emailIsValid = () => this.state.email !== '';
  formIsValid = () => this.nameIsValid() && this.emailIsValid()

  render() {
    return(
      <form onSubmit={ (event) => this.submitHandler(event) } className="col-lg-6">
        <div className='control-group'>
          <div className='input-group mb-3'>
            <span className='input-group-text'>Name</span>
            <input className='form-control' value={ this.state.name } onChange={ (event) => this.nameChangeHandler(event) } type='text' name='name' id='name'/>
          </div>
          <div className='input-group mb-3'>
            <span className='input-group-text'>Email</span>
            <input className='form-control' value={ this.state.email } onChange={ (event) => this.emailChangeHandler(event) } type='email' name='email' id='email'/>
          </div>  
        </div>
        <div className='form-actions'>
          <button className="btn btn-primary" type="submit">Add User</button>
        </div>
      </form>  
    )
  }
}

export default withRouter(AddUsers);