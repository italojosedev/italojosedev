import React from "react";

import { motion } from "framer-motion";

import styled from "styled-components";
import Colors from '../../resources/Colors';



const Title = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300&family=Pacifico&display=swap');
    color: ${Colors.primary};
    font-size: 60px;
    margin: 30px 0;
    font-family: 'Pacifico', cursive;
`;
const transition = {
    duration: 0.5,
    ease: [0.43, 0.13, 0.23, 0.96],
};

const backVariants = {
    exit: { x: 100, opacity: 0, transition },
    enter: { x: 0, opacity: 1, transition: { delay: 0.5, ...transition } },
};

function TitleComponent(props) {
    return (
        <motion.div className="back" variants={backVariants}>
            <Title to="/">{props.children}</Title>
        </motion.div>
    );
}

export default TitleComponent;
