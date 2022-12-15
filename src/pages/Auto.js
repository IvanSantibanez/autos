import React, { useCallback,useState } from "react";
import { useNavigate } from "react-router-dom";
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import {CarFormComponent,CarTableComponent,NavBarComponent,SendButtonComponent} from "../components";

const auto1=[{
  marca:'Toyota',
  modelo:'Yaris',
  color:'Verde',
  año:'2022',
  valor:'15000000'
  },
  {
    marca:'Hyundai',
    modelo:'Grand i10',
    color:'Azul',
    año:'2022',
    valor:'9000000'
    },
    {
      marca:'Subaru',
      modelo:'Impreza GTX STI',
      color:'Blanco',
      año:'2022',
      valor:'25000000'
      },]


const AutoPage = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(()=> navigate("/",{},[navigate]));
    const handleOnClickGallery = useCallback(()=> navigate("/Galeria",{},[navigate]));
    const GreenSwitch = styled(Switch)(({ theme }) => ({
        '& .MuiSwitch-switchBase.Mui-checked': {
          color: pink[600],
          '&:hover': {
            backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
          },
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
          backgroundColor: pink[600],
        },
      }));
      const label = { inputProps: { 'aria-label': 'Color switch demo' } };

      const [state,setState] = useState(auto1);

      const carDelete = (modeloAuto)=>{
        const changeCar = state.filter(auto => auto.modelo != modeloAuto);
        setState(changeCar);
      }
    return (
        <div class="container-fluid">
            <NavBarComponent />
            
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <CarFormComponent />
                        </div>
                        <div class="m-2 ">
      <SendButtonComponent infoBoton={"Ir a usuario"} handleOnClick={handleOnClick}/>
      <SendButtonComponent infoBoton={"Ir a galeria"} handleOnClick={handleOnClickGallery}/>
      </div>
      

                    </div>
                    <br />
                    <div class="container">
                        <div class="row">
                            <CarTableComponent autos={state} deleteCar={carDelete}/>
                        </div>
                            <Switch {...label} defaultChecked color="warning" />
                            <GreenSwitch {...label} defaultChecked />
                    </div>
                </div>
            
        </div>
    );
};

export default AutoPage;