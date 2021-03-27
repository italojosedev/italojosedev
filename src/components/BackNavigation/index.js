import React from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import styled from "styled-components";

const A = styled(Link)`
    color: white;
    font-size: 20px;
    span {
        top: -3px;
        position: relative;
        margin-right: 5px;
    }
`;
const LinkItem = styled(Link)`
    color: white;
    font-size: 20px;
    padding-right: 10px;

`;
const Nav = styled.div`
    color: white;
    font-size: 20px;
    display: flex;
    flex-direction: row;
    margin-left: 50px;
`;
const transition = {
    duration: 0.3,
    ease: [0.43, 0.13, 0.23, 0.96],
};

const backVariants = {
    exit: { x: 100, opacity: 0, transition },
    enter: { x: 0, opacity: 1, transition: { delay: 0.3, ...transition } },
};

function BackNavigation() {
    return (
        <motion.div className="back" variants={backVariants} style={{display:"flex", flexDirection:'row'}}>
            <A to="/">
                <span>←</span> Voltar
            </A>
            <Nav>
                <LinkItem to="/about">About</LinkItem>
                <LinkItem to="/skills">Skills</LinkItem>
                <LinkItem to="/portifolio">Portifólio</LinkItem>
                <LinkItem to="/contact">Contato</LinkItem>
            </Nav>
        </motion.div>
    );
}

export default BackNavigation;
