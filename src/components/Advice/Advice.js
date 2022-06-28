import React from "react";
import { AdviceStyled } from "./AdviceStyle";
import divider from "../../assets/images/pattern-divider.svg";

const Advice = ({ advice, id }) => {
    return (
        <AdviceStyled>
            <span className="advice-id">ADVICE #{id}</span>
            <h1 className="advice-text">“{advice}”</h1>
            <img src={divider} alt="divider" className="divider" />
        </AdviceStyled>
    );
};

export default Advice;
