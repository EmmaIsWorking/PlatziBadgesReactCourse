import React, { Component } from 'react';

class BadgeForm extends Component {
  handleChange = e =>{
    console.log({
        name: e.target.name,
        value: e.target.value,
      }
    )
  };

  handleClick = e =>{ //Recuerda que button tiene submit por defecto y hay que definirlo con type="button"
    console.log('Hago click')
  };

  handleSubmit = e =>{  //Se usa como alternativa de type="button"
    e.preventDefault()
    console.log('No se envia el formulario')
  };


  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input onChange={this.handleChange} className="form-control" type="text" name="firstName" id=""/>
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">save</button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;