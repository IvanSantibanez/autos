import React from "react";
import {UserFormComponent,UserTableComponent,TitleComponent,NavBarComponent} from "../components";

const HomePage = () => {
    return (
        <div class="container-fluid">
            <NavBarComponent />
            <div class="container">
                <TitleComponent />
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <UserFormComponent />
                        </div>
                    </div>
                    <br />
                    <div class="container">
                        <div class="row">
                            <UserTableComponent />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
