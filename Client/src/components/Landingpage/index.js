import React from 'react';
import './index.css';

function Landingpage() {
  return (
    <div className="Landingpage">
      <div className="EntryBox">
          <div className="EntryTitle">Ready for some Beerpong?</div>
          <div className="RegisterButtons">
            <button className="ghost primary">LogIn</button>
            <button className="primary">SignUp</button>
          </div>
      </div>
    </div>
  );
}

export default Landingpage;