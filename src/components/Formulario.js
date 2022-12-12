import React from "react";
import { SendButtonComponent } from "./Boton";

const UserFormComponent = () => {
  return (
    <div class="container border ">
      <h4 class="text-center">Formulario Usuario</h4>
      <form >
        <div class="mb-3">
          <label for="formNombreInput" class="form-group col">
            Nombre
          </label>
          <input
            type="text"
            class="form-control"
            id="EjemploNombre"
            placeholder="Ejemplo: Juanito"
          />
        </div>
        <div class="mb-3">
          <label for="formApellidoInput" class="form-label">
            Apellido
          </label>
          <input
            type="text"
            class="form-control"
            id="EjemploApellido"
            placeholder="Ejemplo: Perez"
          />
        </div>
        <div class="mb-3">
          <label for="formCorreoInput" class="form-label">
            Correo
          </label>
          <input
            type="text"
            class="form-control"
            id="EjemploCorreo"
            placeholder="Ejemplo: juanitoperez@juanitoperez.cl"
          />
        </div>
      </form>
      <SendButtonComponent/>
    </div>
  );
};

const CarFormComponent = () => {
  return (
    <div class="container border ">
      <h4 class="text-center"> Formulario Auto</h4>
      <form >
        <div class="mb-3">
          <label for="formMarcaInput" class="form-label">
            Marca
          </label>
          <input
            type="text"
            class="form-control"
            id="EjemploMarca"
            placeholder="Ejemplo: Toyota"
          />
        </div>
        <div class="mb-3">
          <label for="FormModeloInput" class="form-label">
            Modelo
          </label>
          <input
            type="text"
            class="form-control"
            id="EjemploModelo"
            placeholder="Ejemplo: Yaris"
          />
        </div>
        <div class="mb-3">
          <label for="formColorInput" class="form-label">
            Color
          </label>
          <input
            type="text"
            class="form-control"
            id="EjemploColor"
            placeholder="Ejemplo: Blanco"
          />
        </div>
        <div class="mb-3">
          <label for="formAnioInput" class="form-label">
            Año
          </label>
          <input
            type="text"
            class="form-control"
            id="EjemploAnio"
            placeholder="Ejemplo: 2022"
          />
        </div>
        <div class="mb-3">
          <label for="formValorInput" class="form-label">
            Valor
          </label>
          <input
            type="text"
            class="form-control"
            id="EjemploValor"
            placeholder="Ejemplo: 12.000.000"
          />
        </div>
      </form>
      <SendButtonComponent/>
    </div>
  );
};

export { UserFormComponent, CarFormComponent };
