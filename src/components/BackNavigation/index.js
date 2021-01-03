import React from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import styled from "styled-components";

const A = styled(Link)`
    color: white;
    font-size: 20px;
`;
const transition = {
    duration: 1,
    ease: [0.43, 0.13, 0.23, 0.96],
};

const backVariants = {
    exit: { x: 100, opacity: 0, transition },
    enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } },
};

function BackNavigation() {
    return (
        <motion.div className="back" variants={backVariants}>
            <A to="/">← Voltar</A>
        </motion.div>
    );
}

export default BackNavigation;
