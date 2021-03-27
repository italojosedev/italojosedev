import React from "react";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

// import X from '../../resources/img/x.png';
// import bolinha from "../../resources/img/bolinha.png";
// import triangulo from "../../resources/img/triangulo.png";
// import quadrado from "../../resources/img/quadrado.png";
import {
    H2,
    H3Link,
    Container,
    ContainerTitle,
    ContainerLinks,
} from "./styled";
import Avatar from "./Avatar";

import SocialMedia from '../../components/SocialMedia'
const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
    initial: { scale: 0.9, opacity: 0 },
    enter: { scale: 1, opacity: 1, transition },
    exit: {
        scale: 0.5,
        opacity: 0,
        transition: { duration: 1.5, ...transition },
    },
};

const frameVariants = {
    hover: { scale: 1.2 },
};
const links = [
    {
        value: "/about",
        label: "Sobre mim",
    },
    {
        value: "/skills",
        label: "Skills",
    },
    {
        value: "/portifolio",
        label: "Meus trabalhos",
    },
    {
        value: "/contact",
        label: "Contato",
    },
];
function Home() {
    return (
        <Container>
            <ContainerTitle>
                <motion.div
                    animate={{ scale: 1.5 }}
                    transition={{ duration: 0.7 }}
                >
                    <Avatar />
                </motion.div>

                <H2>
                    Olá, meu nome é <span>Ítalo José</span>,{" "}
                </H2>
                <H2>
                    sou desenvolvedor <span>Full Stack</span>
                </H2>
                <SocialMedia />
            </ContainerTitle>

            <ContainerLinks>
                {links.map((link, i) => (
                    <motion.div
                        className="thumbnail"
                        variants={thumbnailVariants}
                    >
                        <motion.div
                            className="frame"
                            whileHover="hover"
                            variants={frameVariants}
                            transition={transition}
                        >
                            <motion.div
                                animate={{ scale: 1.5 }}
                                transition={{ duration: i * 1 }}
                            >
                                <Link to={link.value}>
                                    <H3Link>{link.label}</H3Link>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                ))}
            </ContainerLinks>
        </Container>
    );
}

export default Home;
