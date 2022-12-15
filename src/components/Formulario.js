import React, { useState,useEffect } from "react";
import SendButtonComponent  from "./Boton";

const initialUsuario ={
  nombre:"",
  apellido:"",
  correo:"",
  rut:""
}
//Recibo todos los props que necesito usar para editar usuarios
const UserFormComponent = ({userAdd,usuarioEditado,setUsuarioEditado,userEdit}) => {
  const [usuario,setUsuario] = useState(initialUsuario);
  const {nombre,apellido,correo,rut} = usuario;
    //el hook useEffect siempre está pendiente de si la variable q tiene dentro de sus corchetes cambia, eld eberá hacer todo lo q tiene en su función dentro
    // CONSIDERACIÓN: useEffect siempre correo al menos 1 vez cuando la pág carga por primera vez
  useEffect(()=>{
    if(usuarioEditado!==null){
      setUsuario(usuarioEditado)
    }else{
      setUsuario(
        {
          nombre:"",
          apellido:"",
          correo:"",
          rut:""
        }

      )
    }
    
  },[usuarioEditado]);


  const handleInputChange =(e)=>{
    //esta función se llama cada vez q nosotros escribimsos algo en algún input de nuestra pág.
      const changedFormValue = {
        //va a antener los datos q tiene usuario de los input q no he tocado pero va a actualizar el atributo q cambié por su nuevo valor
        ...usuario,
        [e.target.name]:e.target.value
      }
      //finalmente los cambios deberán verse reflejados en nuestro hook
      setUsuario(changedFormValue);
  }
  return (
    <div class="container border ">
      <h4 class="text-center">Formulario Usuario</h4>
      <form >
      {usuarioEditado!==null ? <h1>Editar Usuario</h1>:<h1>Ingrese Usuario</h1>}

        <div class="mb-3">
          <label for="formNombreInput" class="form-group col">
            Nombre
          </label>
          <input
            type="text"
            class="form-control"
            id="EjemploNombre"
            placeholder="Juanito"
            name="nombre"
            value={nombre}
            onChange={handleInputChange}
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
            placeholder="Perez"
            name="apellido"
            value={apellido}
            onChange={handleInputChange}
          />
        </div>
        <div class="mb-3">
          <label for="formCorreoInput" class="form-label">
            Correo
          </label>
          <input
            type="email"
            class="form-control"
            id="EjemploCorreo"
            placeholder="juanitoperez@juanitoperez.cl"
            name="correo"
            value={correo}
            onChange={handleInputChange}
          />
        </div>
        <div class="mb-3">
          <label for="formCorreoInput" class="form-label">
            Rut
          </label>
          <input
            type="text"
            class="form-control"
            id="EjemploRut"
            placeholder="19308999-2"
            //Para q mi formulario sea capaz de crear un usuario, debemos agregar a los input lo siguiente
            name="rut"
            value={rut}
            onChange={handleInputChange}
          />
          <br/>
          {/* Si mi usuario q recibo está en mi lista de usuarios registrados, mi botón que aparecerá será de editar */}
          {usuarioEditado !== null ? (
          <button
            type="button"
            class="btn btn-success"
            onClick={() => userEdit(usuario)}
          >
            Editar usuario
          </button>
          /* Caso contrario, aparecera mi botón de ingresar usuario */
        ) : (
          <button
            type="button"
            class="btn btn-success"
            onClick={() => userAdd(usuario)}
          >
            Ingresar usuario
          </button>
        )}
        {/* Si mi usuario q recibo está en la lista de registrados, aparecera el botón de cancelar */}
        {usuarioEditado !== null ? (
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => setUsuarioEditado(null)}
          >
            Cancelar
          </button>
        ) : (
          <></>
        )}

        </div>
      </form>
      
      
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
            placeholder="Yaris"
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
            placeholder="Blanco"
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
            placeholder="2022"
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
            placeholder="12.000.000"
          />
        </div>
      </form>
      <SendButtonComponent infoBoton={"Agregar auto"}/>
      

    </div>
  );
};

export { UserFormComponent, CarFormComponent };
