import React, { useState } from "react";

import Author01 from "../../resources/img/author01.jpg";
import Author02 from "../../resources/img/author02.jpg";
import Author03 from "../../resources/img/author03.jpg";

import { useSpring, motion } from "framer-motion";
import { AvatarImg, ContainerAvatar } from "./styled";

export default function Avatar() {
    const [isShown, setIsShown] = useState(false);
    const [isImageShown, setIsImageShown] = useState(0);

    const setHover = () => {
        let count = isImageShown + 1;
        setIsShown(true);
        if (count > 1) setIsImageShown(0);
    };
    const variants = {
        open: { opacity: 1, scale: 1.1, delay: 0.5 },
        closed: { opacity: 0.4 },
    };
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
