import React from "react";
import ButtonComponent from "./Boton";
import DropDown from "./DropDown";

const UserTableComponent = ({ usuarios, deleteUser,setUsuarioEditado}) => {
  return (
    <table class="table table-striped-columns table-bordered ">
      <thead>
        <tr>
          <th scope="col text-center text-center">ID</th>
          <th scope="col text-center">Nombre</th>
          <th scope="col text-center">Apellido</th>
          <th scope="col text-center">Correo</th>
          <th scope="col text-center">Rut</th>
          <th scope="col text-center"></th>
        </tr>
      </thead>
      <tbody>
        {/* Iteramos usuarios con .map, a cada elemento de usuarios lo llamaremos usuario y realizaremos lo siguiente => */}

        {usuarios.map(usuario => (
          <tr>
            <th scope="row"></th>
            <td>{usuario.nombre}</td>
            <td>{usuario.apellido}</td>
            <td>{usuario.correo}</td>
            <td>{usuario.rut}</td>
           
             {/* <td>{<DropDown usuarios={usuario} deleteUser={deleteUser} setUsuarioEditado={usuario}/>}</td>  */}
            <td class="text-center"><button
              type="button"
              class="btn btn-danger"
              onClick={() => {
                deleteUser(usuario.rut);
              }}
            >
              Eliminar
            </button>
            <br/>
            <button
                  type="button"
                  class="btn btn-warning"
                  onClick={() => {
                    setUsuarioEditado(usuario);
                  }}
                >
                 Editar
                </button>
            </td>
            
            

          </tr>
        ))}


      </tbody>
    </table>
  )
}


const CarTableComponent = ({autos, deleteCar}) => {
  return (
    <table class="table table-striped-columns table-bordered ">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Marca</th>
          <th scope="col">Modelo</th>
          <th scope="col">Color</th>
          <th scope="col">Año</th>
          <th scope="col">Valor</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {autos.map(auto=>(
        <tr>
          <th scope="row"></th>
          <td>{auto.marca}</td>
          <td>{auto.modelo}</td>
          <td>{auto.color}</td>
          <td>{auto.año}</td>
          <td>{auto.valor}</td>
          <td class="text-center"><button
              type="button"
              class="btn btn-danger"
              onClick={() => {
                deleteCar(auto.modelo);
              }}
            >
              Eliminar
            </button>
            </td>
        </tr>

        ))}
      </tbody>
    </table>
  )
}

export { UserTableComponent, CarTableComponent };