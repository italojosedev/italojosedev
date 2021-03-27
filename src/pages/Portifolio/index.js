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
        <Title>Portifólio</Title>
        <motion.div className="back" variants={backVariants}>
           
            <TextArea>
                <h2>Opa, estou me esforçando, mas por enquanto não possuo um portifolio público.</h2>
              
            </TextArea>
            
           
        </motion.div>
    </motion.div>
);

export default About;
