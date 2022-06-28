import styled from "styled-components";

export const StyledButton = styled.button`
    border: none;
    background-color: var(--clr-neon-green);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.25rem;
    border-radius: 50%;
    transform: translateY(-50%);
    outline: none !important;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
        box-shadow: 0 0 25px 0px var(--clr-neon-green);
    }
`;
