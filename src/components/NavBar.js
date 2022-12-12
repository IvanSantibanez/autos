import React from "react";



const NavBarComponent = () => {
    return (
        <div class="container-fluid">
          <nav class="navbar navbar-expand-md navbar-dark bg-black">
            <div class="container-fluid">
              <a href="/" class="navbar-brand"><img src="logo21.png" alt=""/></a>
              <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#MenuNavegacion">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div id="MenuNavegacion" class="collapse navbar-collapse">
                <ul class="navbar-nav mx-auto">
                  <li class="nav-item"><a class="nav-link text-light fs-3 m-2 font-monospace" href="#"  >Regístrate</a></li>
                  <li class="nav-item"><a class="nav-link text-light fs-3 m-2 font-monospace" href="#">Inicia sesión</a></li>
                  <li class="nav-item"><a class="nav-link text-light fs-3 m-2 font-monospace" href="#">Quienes somos</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
    )
}

export default NavBarComponent;