import React, { Component } from 'react';

class BadgeForm extends Component {
  state = {
    jobTitle: 'Developer',
  };

  // handleChange = e =>{
  //   // console.log({
  //   //     name: e.target.name,
  //   //     value: e.target.value,
  //   //   }
  //   // )
  // this.setState({
  //   [e.target.name]: e.target.value,
  // })
  // };

  handleClick = e =>{ //Recuerda que button tiene submit por defecto y hay que definirlo con type="button"
    console.log('Hago click')
  };

  // handleSubmit = e =>{  //Se usa como alternativa de type="button"
  //   e.preventDefault()
  //   console.log('No se envia el formulario')
  //   console.log(this.state)
  // };


  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input onChange={this.props.onChange} className="form-control" type="text" name="firstName" value={this.props.formValues.firstName} id=""/>
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input onChange={this.props.onChange} className="form-control" type="text" name="lastName" value={this.props.formValues.lastName} id=""/>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input onChange={this.props.onChange} className="form-control" type="email" name="email" value={this.props.formValues.email} id=""/>
          </div>
          <div className="form-group">
            <label>Job title</label>
            <input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle" value={this.props.formValues.jobTitle} id=""/>
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input onChange={this.props.onChange} className="form-control" type="text" name="twitter" value={this.props.formValues.twitter} id=""/>
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">save</button>
        
          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </div>
    );
  }
}

export default BadgeForm;