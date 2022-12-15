import React from "react";



const NavBarComponent = () => {
    return (
        <div class="container-flex">
          <nav class="navbar navbar-expand-md navbar-dark bg-primary">
            <div class="container-fluid">
              <a href="/" class="navbar-brand"><img src="autologo.png" alt="" width="100px"/></a>
              <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#MenuNavegacion">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div id="MenuNavegacion" class="collapse navbar-collapse">
                <ul class="navbar-nav mx-auto">
                  <li class="nav-item"><a class="nav-link text-dark fs-3 m-2 font-monospace" href="/Galeria"  >Galeria</a></li>
                  <li class="nav-item"><a class="nav-link text-dark fs-3 m-2 font-monospace" href="/">Usuario</a></li>
                  <li class="nav-item"><a class="nav-link text-dark fs-3 m-2 font-monospace" href="/Auto">Auto</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
    )
}

export default NavBarComponent;