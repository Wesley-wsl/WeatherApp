import styled from "styled-components";

export const Container = styled.section`
    color: ${({ color }) => color};
    font-size: clamp(13px, 3vw, 16px);
    position: absolute;
    bottom: 80px;
    left: 80px;
    max-width: 490px;
    z-index: 9999;
    display: flex;
    flex-wrap: wrap;
    h2 {
        font-size: clamp(35px, 5vw, 50px);
        width: 100%;

        span {
            font-size: clamp(45px, 6vw, 70px);
        }
    }

    p {
        margin-left: 20px;
    }

    @media (max-width: 830px) {
        color: #fff;
    }

    @media (max-width: 500px) {
        bottom: 120px;
        left: 40px;
    }
`;
