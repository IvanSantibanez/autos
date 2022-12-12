import React from "react";

const ButtonComponent = () => {
  return (
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Acción
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item " href="#">Guardar</a></li>
    <li><a class="dropdown-item" href="#">Editar</a></li>
    <li><a class="dropdown-item" href="#">Eliminar</a></li>
  </ul>
</div>
  );
};

const SendButtonComponent = () => {
  return (
    <div class="Button">
      <button type="button" class="btn btn-success">Enviar</button>
    </div>
  )
}

export {ButtonComponent,SendButtonComponent};
