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
        <Title>Skills</Title>
        <motion.div className="back" variants={backVariants}>
            <div
                style={{ display: "flex", flex: 1, flexDirection: "row", justifyContent:"space-around" }}
            >
            <TextArea>
                <h2>Front end</h2>
                <p>HTML5</p>
                <p>CSS3</p>
                <p>javascript</p>
                <p>ReactJS</p>
                <p>React Native</p>
                <p>Redux</p>
                <p>Graphql</p>
            </TextArea>
            <TextArea>
                <h2>Back end</h2>
                <p>PHP 7</p>
                <p>Codeigniter</p>
                <p>Laravel</p>
                <p>Nodejs</p>
                <p>Express</p>
                <p>Socket io</p>
                <p>Adonis js</p>
            </TextArea>
            <TextArea>
                <h2>Banco de Dados</h2>
                <p>MYSQL</p>
                <p>Postgre</p>
                <p>Mongo</p>
                <p>Dynamodb</p>
            </TextArea>
            </div>
        </motion.div>
    </motion.div>
);

export default About;
