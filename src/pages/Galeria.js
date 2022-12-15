import React,{useCallback}from "react";
import { useNavigate } from "react-router-dom";
import {CarGallery,TitleComponent,NavBarComponent, SendButtonComponent} from "../components";

const GaleriaPage = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(()=> navigate("/Auto",{},[navigate]));
    const handleOnClickUser = useCallback(()=> navigate("/",{},[navigate]));
    return (
        <div class="container-fluid">
            <NavBarComponent/>
            <TitleComponent/>
            <CarGallery/>

        <div>
        <SendButtonComponent infoBoton={"Ir a auto"} handleOnClick={handleOnClick}/>
        </div>
        <div class="m-2">
        <SendButtonComponent infoBoton={"Ir a usuario"} handleOnClick={handleOnClickUser}/>
        </div>

        </div>
    );
};

export default GaleriaPage;