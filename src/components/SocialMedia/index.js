import React from "react";

import { GrTwitter, GrLinkedin, GrGithub } from "react-icons/gr";
import { SocialContainer } from "./styled";
import { motion } from "framer-motion";

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const frameVariants = {
    hover: { scale: 1.2 },
};
function SocialMedia() {
    return (
        <SocialContainer>
            <motion.div
                className="frame"
                whileHover="hover"
                variants={frameVariants}
                transition={transition}
            >
                <a href="https://twitter.com/italo08paula">
                    <GrTwitter color="#707070" size={16} />
                </a>
            </motion.div>
            <motion.div
                className="frame"
                whileHover="hover"
                variants={frameVariants}
                transition={transition}
            >
                <a href="https://www.linkedin.com/in/italojosenp/">
                    <GrLinkedin color="#707070" size={16} />
                </a>
            </motion.div>
            <motion.div
                className="frame"
                whileHover="hover"
                variants={frameVariants}
                transition={transition}
            >
                <a href="https://github.com/italojosee">
                    <GrGithub color="#707070" size={16} />
                </a>
            </motion.div>
        </SocialContainer>
    );
}

export default SocialMedia;
