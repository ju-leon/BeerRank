import React from 'react';
import { Link } from 'react-router-dom'

import './index.css';

function Landingpage() {
  return (
    <div className="Landingpage">
      <div className="EntryBox">
          <div className="EntryTitle">Ready for some Beerpong?</div>
          <div className="RegisterButtons">
            <Link to="/login"><button className="ghost">LogIn</button></Link>
            <Link to="signup"><button className="primary">SignUp</button></Link>
          </div>
      </div>
    </div>
  );
}

export default Landingpage;