import React from "react";
import {SendButtonComponent, ButtonComponent} from "./Boton";

const UserTableComponent = () => {
    return (
        <table class="table table-striped-columns table-bordered ">
  <thead>
    <tr>
      <th scope="col text-center text-center">ID</th>
      <th scope="col text-center">Nombre</th>
      <th scope="col text-center">Apellido</th>
      <th scope="col text-center">Correo</th>
      <th scope="col text-center">Acción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td></td>
      <td></td>
      <td></td>
      <td><ButtonComponent/></td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td></td>
      <td></td>
      <td></td>
      <td><ButtonComponent/></td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td ></td>
      <td></td>
      <td></td>
      <td><ButtonComponent/></td>
    </tr>
  </tbody>
</table>
    )
}


const CarTableComponent = () => {
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
      <th scope="col">Acción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><ButtonComponent/></td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><ButtonComponent/></td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><ButtonComponent/></td>
    </tr>
  </tbody>
</table>
    )
}

export {UserTableComponent,CarTableComponent};