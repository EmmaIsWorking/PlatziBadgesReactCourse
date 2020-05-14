import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {
  state={ form:{
    firstName:'',
    lastName:'',
    email:'',
    jobTitle:'Developer',
    twitter:'',
  }};

  handleChange = e =>{
    // const nextForm= this.state.form;  //<----Esta es otra manera de hacer form:{...this.state...}
    // nextForm[e.target.name] = e.target.value;
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value,
      } 
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                jobTitle={this.state.form.jobTitle}
                twitter={this.state.form.twitter}
                email={this.state.form.email}
                avatarUrl = "https://avatars0.githubusercontent.com/u/50759695?s=460&u=bb743cc30a8ff5e90344b55518ce141c963d5c3a&v=4"
              />
            </div>

            <div className="col-6">
              <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
