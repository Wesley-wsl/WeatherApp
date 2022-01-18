import styled from "styled-components";

export const Container = styled.section`
    color: ${({ color }) => color};
    position: absolute;
    bottom: 80px;
    left: 80px;
    max-width: 490px;
    z-index: 9999;
    display: flex;
    flex-wrap: wrap;
    h2 {
        font-size: 50px;
        width: 100%;

        span {
            font-size: 70px;
        }
    }

    p {
        margin-left: 20px;
    }

    @media (max-width: 830px) {
        color: #fff;
    }

    @media (max-width: 742px) {
        font-size: 12px;
        h2 {
            font-size: 40px;
            span {
                font-size: 50px;
            }
        }
    }

    @media (max-width: 500px) {
        bottom: 120px;
        left: 40px;
    }

    @media (max-width: 400px) {
        font-size: 11px;

        h2 {
            font-size: 35px;

            span {
                font-size: 45px;
            }
        }
    }
`;
