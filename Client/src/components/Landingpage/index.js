import React from 'react';
import { Link } from 'react-router-dom'
import Logo from 'components/Main/Home/Header/Logo'

import './index.css';

function Landingpage() {
  return (
    <div className="Landingpage">
    <Logo/>
      <div className="EntryBox">
          <div className="EntryTitle">Ready for Beerpong?</div>
          <div className="RegisterButtons">
            <Link to="/login"><button className="ghost">LogIn</button></Link>
            <Link to="signup"><button className="primary">SignUp</button></Link>
          </div>
      </div>
    </div>
  );
}

export default Landingpage;