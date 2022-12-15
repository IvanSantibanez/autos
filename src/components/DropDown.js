import React from 'react'
import  SendButtonComponent  from './Boton'

const DropDown = ({deleteUser,usuarios,setUsuarioEditado}) => {
  return (
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Acción
  </button>
  {/* <ul class="dropdown-menu">
  <li><button
                  type="button"
                  class="btn btn-warning"
                  onClick={() => {
                    setUsuarioEditado(usuarios);
                  }}
                >
                 Editar
                </button>
</li>
    <li><button
              type="button"
              class="btn btn-danger"
              onClick={() => {
                deleteUser(usuarios.rut);
              }}
            >
              Eliminar
            </button></li>
  </ul> */}
</div>
  )
}

export default DropDown