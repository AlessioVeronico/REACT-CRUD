import React from 'react';
import { withRouter } from 'react-router-dom';

class UpdateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      name: '',
      email: '',
    } 
  }

  componentDidMount() {
    fetch(`http://localhost:4000/users/${this.props.match.params.id}`).then(
      res => res.json()
    ).then(
      res => this.setState({
        name: res.name,
        email: res.email,
      }),
      console.log(this.state)
    );
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

    console.log(`User Updated ${ JSON.stringify(this.state) }`);

    fetch(`http://localhost:4000/users/${ this.props.match.params.id }`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name: this.state.name, email: this.state.email}),
    }).then(
      res => res.json()
    ).then(
      res => console.log(res)
    );
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
          <button className="btn btn-primary" type="submit">Update User { this.props.match.params.id }</button>
        </div>
      </form>  
    )
  }
}

export default withRouter(UpdateUser);