import React,{useCallback, useState }from "react";
import { useNavigate } from "react-router-dom";
import {UserFormComponent,UserTableComponent,TitleComponent,NavBarComponent, SendButtonComponent} from "../components";

const usuario1=[{
    nombre:'Joseph',
    apellido:'Joestar',
    correo:'jo.jo@gmail.com',
    rut:'11234765-2'
    },
    {nombre:'Josuke',
    apellido:'Higashikata',
    correo:'jojo@gmail.com',
    rut:'14518513-2'},
    {nombre:'Calor',
    apellido:'Ql',
    correo:'jojo@gmail.com',
    rut:'145483513-2'

    }
    ]

const usuario2={
        nombre:'Josuke',
        apellido:'Higashikata',
        correo:'jojo@gmail.com',
        rut:'14518513-2'
        }
 
    

const HomePage = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(()=> navigate("/Auto",{},[navigate]))
    const handleOnClickGallery = useCallback(()=> navigate("/Galeria",{},[navigate]));
    // En este momento state vale lo mismo q usuario1.
    //genera una función setteadora q me permite cambiar los datos de ususario1 sin afectarlo directamente(setState)
    const [state,setState] = useState(usuario1);
    const [usuarioEditado,setUsuarioEditado] = useState(null);

    const userDelete = (rutUsuario)=>{
        // funcion q filtra mi lista de usuarios
        const changeUser = state.filter(usuario => usuario.rut != rutUsuario)
        // al momento de ocupar la funcion de setState, yo le voy a cambiar el valor TEMPORAL a mis usuarios
        setState(changeUser);    
    }
    //Función para agregar usuarios
    const userAdd =(usuario)=>{
        const addUsuario =[
            // manten los datos q tengo en user y agregame lo q yo te entrego aqui(usuario)
            ...state,usuario
        ]
        //luego actualizamos ( o setteamos) el state
        setState(addUsuario);
    }    

    const userEdit =(usuarioEditado)=>{
        // creamos una constante de usuario, donde mapeamos nuestra lista de usuarios, y si un dato de algún usuario de esta lista es igual al que entregamos como parametro en nuestra función, tomaremos ese usuario y lo editaremos
        const editUser = state.map(usuario =>(usuario.rut === usuarioEditado.rut ? usuarioEditado: usuario))
        //Editamos el state
        setState(editUser);
    }
    return (
        <div class="container-fluid">
            <NavBarComponent />
            <div class="container">
                <TitleComponent />
                <div class="container">
                    <div class="row">
                        <div class="col">
                               {/*  Creamos variables y le entregamos las funciones que creamos mas arriba para poder usarlas en el formulario de usuario */}
                            <UserFormComponent userAdd={userAdd} usuarioEditado={usuarioEditado} setUsuarioEditado={setUsuarioEditado} userEdit={userEdit}/> 
                        </div>
                        <div class="m-2">
      <SendButtonComponent infoBoton={"Ir a Autos"} handleOnClick={handleOnClick}/>
      <SendButtonComponent infoBoton={"Ir a galeria"} handleOnClick={handleOnClickGallery}/>
      </div>
                    </div>
                    <br />
                    <div class="container">
                        <div class="row">
                            {/* Creamos variables y le entregamos las funciones que creamos mas arriba para utilizarlas en nuestra tabla de usuarios */}
                            <UserTableComponent usuarios={state} deleteUser={userDelete} setUsuarioEditado={setUsuarioEditado}/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
