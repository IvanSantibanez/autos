import React from "react";
import {CarFormComponent,CarTableComponent,TitleComponent,NavBarComponent} from "../components";

const AutoPage = () => {
    return (
        <div class="container-fluid">
            <NavBarComponent />
            
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <CarFormComponent />
                        </div>
                    </div>
                    <br />
                    <div class="container">
                        <div class="row">
                            <CarTableComponent />
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default AutoPage;