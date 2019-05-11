import React from 'react';
import Header from './components/Header.js';
import Play from './components/Play.js';
import Me from './components/Me.js';


//import './App.css';

function PlayTab() {
  return (
      <div className="PlayTab">
      <Header/>
      <Play/>
      <Me/>
      </div>
  );
}

export default PlayTab;