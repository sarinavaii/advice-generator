import styled from "styled-components";

export const AdviceStyled = styled.div`
    width: min(530px, 95%);
    background-color: var(--clr-dark-grayish-blue);
    border-radius: 1rem;
    text-align: center;
    padding: 3rem 3rem 4rem;
    .advice-id {
        display: inline-block;
        letter-spacing: 0.5ch;
        font-size: 0.875rem;
        color: var(--clr-neon-green);
        margin-bottom: 2rem;
    }
    .advice-text {
        color: var(--clr-light-cyan);
        font-size: clamp(1.5rem, calc(1rem + 1.5vw), 1.75rem);
        margin-bottom: 2rem;
    }
    .divider {
        width: 100%;
    }
`;
