import styled from "styled-components";
import Colors from "../../resources/Colors";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100px;
    margin-top: 30px;
    cursor: pointer;
`;
export const ContainerAvatar = styled.div`
    background-color: transparent;
    width: 90px;
    height: 90px;
    perspective: 1000px;
    margin-bottom: 50px;
    cursor: pointer;
    img {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        object-fit: cover;
    }
    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
    }

    &:hover .flip-card-inner {
        transform: rotateY(180deg);
    }

    .flip-card-front,
    .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }

    .flip-card-front {
        color: black;
    }

    .flip-card-back {
        color: white;
        transform: rotateY(180deg);
    }
`;
export const AvatarImg = styled.div`
    overflow: hidden;
    border-radius: 50%;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition-delay: 5s;
    }

    ${Container}:hover & {
        transform: rotateY(180deg);
    }
`;

export const ContainerTitle = styled.div`
    margin-top: 75px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const ContainerLinks = styled.div``;
export const H2 = styled.h2`
    @import url("https://fonts.googleapis.com/css2?family=Chango&family=Pacifico&display=swap");
    color: #fff;
    padding: 10px;
    font-size: 25px;
    span {
        color: ${Colors.primary};
        text-shadow: 1px 1px 0px #fff;

        font-family: "Pacifico", cursive;
    }
`;

export const H3Link = styled.h3`
    //border: 1px solid #707070;
    font-size: 15px;
    border-radius: 5px;
    padding: 10px;
    text-decoration: none;
    text-transform: uppercase;
    text-decoration-style: none;
    color: #707070;
    margin: 20px;
    display: flex;
    justify-content: center;
`;
