import * as React from "react";
import { motion } from "framer-motion";
import BackNavigation from "../../components/BackNavigation";
import Title from "../../components/Title";
import { TextArea } from "./styled";
const transition = {
    duration: 1,
    ease: [0.43, 0.13, 0.23, 0.96],
};

const backVariants = {
    exit: { x: 100, opacity: 0, transition },
    enter: { x: 0, opacity: 1, transition: { delay: 0.7, ...transition } },
};

const About = ({ match }) => (
    <motion.div className="single" initial="exit" animate="enter" exit="exit">
        <BackNavigation />
        <Title>Sobre mim</Title>
        <motion.div className="back" variants={backVariants}>
            <TextArea>
                <p>
                    Sou estudante de sistemas de informação na Faculdade Federal
                    do Espírito Santo desde agosto de 2016,
                </p>
                <p>
                    Trabalho como desenvolvedor Full Stack para Parati CFI recém
                    adquirida pela AME das lojas americanas.
                </p>
                <p>
                    Profissionalmente conectado com a indústria de
                    desenvolvimento web e tecnologia da informação.
                </p>
                <p>
                    Pessoa bem curiosa, funcionário independente, em busca de
                    conhecimento{" "}
                </p>
                <p>e de e novas formas de solucionar problemas. </p>
                <p>
                    Fã de séries de TV e jogos FPS. Uma pessoa caseira,
                    portanto, prefere-se um emprego remoto, tanto por conta dos
                    estudos também
                </p>
                Interessado em comercial e trabalhando em projetos ambiciosos
                com pessoas positivas.
                <br />
            </TextArea>
        </motion.div>
    </motion.div>
);

export default About;
