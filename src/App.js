import React from "react";
import Subaru_WRX_STI_2022 from "./img/Subaru_WRX_STI_2022.jpg"
import hyundaigrandi10 from "./img/hyundaigrandi10.jpg"


const App= ()=>{
    return(
        <div align="center">
            <h1> Esto es un proyecto de autitos</h1>
            <h2>  Vamos como avión</h2>
            <table border="1">
                <tr> 
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Año</th>
                    <th>Precio</th>
                </tr>
                <tr>
                    <td>Subaru</td>
                    <td>Impreza WRX Sti</td>
                    <td>2022</td>
                    <td>25.000.000</td>
                </tr>
            </table>
            <img src={Subaru_WRX_STI_2022} alt="subaruImp"/>
            <div align="center">
            <table border="1">
                <tr> 
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Año</th>
                    <th>Precio</th>
                </tr>
                <tr>
                    <td>Hyundai</td>
                    <td>Grand i10</td>
                    <td>2022</td>
                    <td>9.000.000</td>
                </tr>
            </table>
            <img src={hyundaigrandi10} alt="HyundaiGi10"/>




            </div>
        </div>
    );
}

export default App;
