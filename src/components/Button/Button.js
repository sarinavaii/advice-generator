import React from "react";
import { StyledButton } from "./ButtonStyle";
import dice from "../../assets/images/icon-dice.svg";

const Button = ({ onclick }) => {
    return (
        <StyledButton onClick={onclick}>
            <img src={dice} alt="dice" />
        </StyledButton>
    );
};

export default Button;
