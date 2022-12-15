import React from "react";



const SendButtonComponent = ({infoBoton, handleOnClick}) => {
  return (
    <div class="Button m-1">
      <button type="button" class="btn btn-success" 
      onClick={()=>{
        handleOnClick();
        }}>
          {infoBoton}</button>
    </div>
  )
}

export default SendButtonComponent;
