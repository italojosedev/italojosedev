import React from "react";

import Author01 from "../../resources/img/author01.jpg";
import Author02 from "../../resources/img/author02.jpg";
import {  ContainerAvatar } from "./styled";

export default function Avatar() {
  
    return (
        <>
            <ContainerAvatar
            // onMouseEnter={() => setHover()}
            // onMouseLeave={() => setIsShown(false)}
            >
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img
                            src={Author01}
                            alt="Avatar"
                            //style="width:300px;height:300px;"
                        />
                    </div>
                    <div class="flip-card-back">
                        <img
                            src={Author02}
                            alt="Avatar"
                            //style="width:300px;height:300px;"
                        />
                    </div>
                </div>
            </ContainerAvatar>
        </>
    );
}
