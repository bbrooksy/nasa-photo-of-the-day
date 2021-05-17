import React, { useState } from 'react';
import "./App.css";
import Body from './Components/Body'
import Head from './Components/Head'


import { Nav, NavItem, NavLink } from 'reactstrap';

const HeadNav = (props) => {
  return (
    <div>
      <hr />
      <p>Learn More</p>
      <Nav>
      <NavLink href="#">Home</NavLink> 
      <NavLink href="#">Photos</NavLink>
      <NavLink href="#">Explore</NavLink> 
      <NavLink disabled href="#">Contact</NavLink>
      </Nav>
    </div>
  );
}

  


function App() {
  return (
    <div className="App">
      <p>
      <Head />
      <p>
      <HeadNav />
      </p>
      <Body />
      </p>
    </div>
  );
}

export default App;

