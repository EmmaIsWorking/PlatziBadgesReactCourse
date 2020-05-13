import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Emmanuel"
                lastName="García"
                twitter="emmaisworking"
                jobTitle="Frontend Developer"
                avatarUrl = "https://avatars0.githubusercontent.com/u/50759695?s=460&u=bb743cc30a8ff5e90344b55518ce141c963d5c3a&v=4"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
