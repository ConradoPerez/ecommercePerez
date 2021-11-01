import React from "react";

const NavBar = ()=> {
    
    return (
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Autos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Motos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Lanchas</a>
        </li>
      </ul>
    );
  }
  export default NavBar;