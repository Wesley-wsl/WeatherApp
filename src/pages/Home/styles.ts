import styled from "styled-components";

import CloudyJPG from "../../assets/cloudy.jpg";
import SnowyJPG from "../../assets/snowy.jpg";

export const Logo = styled.h1`
    width: 100px;
    font-size: 19px;
    margin: 2rem;
    color: ${({ color }) => color};
    font-weight: 400;
    z-index: 9999;
    cursor: pointer;

    @media (max-width: 830px) {
        color: #fff;
    }

    @media (max-width: 650px) {
        margin-top: 20px;
    }
`;

export const Background = styled.div`
    background-attachment: fixed;
    background-size: cover;
    position: absolute;
    top: 0;
    z-index: -100;
    width: 60%;
    height: 100%;
    filter: contrast(150%) sepia(60%);

    @media (max-width: 350px) {
        width: 100%;
    }
`;

export const BackgroundAside = styled.div`
    background-attachment: fixed;
    background-size: cover;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -200;
    filter: brightness(30%) contrast(150%) sepia(60%);

    @media (max-width: 830px) {
        z-index: -10;
        width: 100%;
        filter: brightness(30%) contrast(150%) sepia(10%) saturate(70%);
    }
`;

export const SearchWeather = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    input {
        padding: 10px;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid #fff;
        width: 300px;
        margin: 0 auto;
        color: #fff;

        &::placeholder {
            color: #fffa;
        }
    }

    button {
        width: 90px;
        height: 86px;
        border: none;
        cursor: pointer;
        background-color: rgba(247, 169, 0, 0.705);
        color: #fff;

        i {
            font-size: 26px;
        }
    }

    @media (max-width: 593) {
        input {
            width: 100px;
        }
        button {
            width: 70px;
            height: 50px;

            i {
                font-size: 20px;
            }
        }
    }
`;

export const Details = styled.div`
    max-width: 390px;
    margin: 0 auto;

    p {
        font-size: 17px;
        font-weight: 500;
        margin: 40px 0;
    }

    ul > li {
        display: flex;
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 15px;
        justify-content: space-between;
        span {
            display: flex;
        }
    }

    hr {
        border-color: #fff;
        max-width: 100%;
    }

    @media (max-width: 1015px) {
        p {
            margin-left: 20px;
        }
        ul > li {
            margin-left: 20px;

            span {
                margin-right: 15px;
            }
        }
    }
`;

export const WeatherInfo = styled.section`
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.164);
    width: 40%;
    height: 100%;
    box-shadow: -1px 0px 10px 0px black;
    color: rgb(255, 255, 255);

    @media (max-width: 830px) {
        width: 100%;
        background-color: rgba(0, 0, 0, 0);
    }
`;

export const Container = styled.div`
    .cloudy {
        background-image: url(${CloudyJPG});
        @media (max-width: 830px) {
            filter: brightness(50%) contrast(120%) sepia(20%);
        }
    }

    .cloudy2 {
        background-image: url(${CloudyJPG});
    }

    .snowy {
        background-image: url(${SnowyJPG});
    }
`;
