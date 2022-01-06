import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import background1 from "../../images/background1.png";
import background2 from "../../images/background2.png";
import background3 from "../../images/background3.png";
import left from "../../images/left.png";
import right from "../../images/right.png";

const SliderContainer = styled.div`
    display: block;
    position: relative;
`;

const StyledUl = styled.ul`
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 10px;
    z-index: 20;
    justify-content: center;
    margin: 0 15% 1rem 15%;
    padding: 0;
    list-style: none;

    @media (max-width: 576px) {
        display: none;
    }
`;

const StyledLi = styled.li`
    position: relative;
    flex: 0 1 auto;
    width: 30px;
    height: 3px;
    text-indent: -999px;
    background-color: ${({ selected }) =>
        selected ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.5)"};
    margin: 0 3px;
`;

const Inner = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
`;

const SliderItem = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    width: 100%;
    perspective: 1000px;
    backface-visibility: hidden;
    transition: -webkit-transform 0.6s ease;
    transition: transform 0.6s ease;
    transition: transform 0.6s ease, -webkit-transform 0.6s ease;
`;

const SliderImg = styled.img`
    width: 100%;
    height: 100%;
    image-rendering: unset;
    vertical-align: middle;

    @media (max-width: 576px) {
        height: 20rem;
    }
`;

const Caption = styled.div`
    position: absolute;
    top: 60%;
    transform: translateY(-50%);
    right: 15%;
    left: 15%;
    bottom: 20px;
    z-index: 10;
    padding: 0 1rem;
    color: white;
    text-align: center;
`;

const StyledH1 = styled.h1`
    font-size: 200%;
    font-weight; 500;
    text-transform: uppercase;
    text-shadow: rgb(0 0 0) 1px 1px 15px;
    line-height: 1.2;
    margin-top: 0;
    margin-bottom: 0.5rem;
    
    @media (max-width: 768px){
        font-size: 120%;
    }
`;

const StyledH3 = styled.h3`
    font-size: 300%;
    text-shadow: rgb(0 0 0) 1px 1px 10px;
    padding-bottom: 1rem;
    font-weight: 700;
    opacity: 0.8;
    line-height: 1.2;
    margin-top: 0;
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
        font-size: 160%;
        text-shadow: rgb(0 0 0) 1px 1px 10px;
        padding-bottom: 1rem;
        font-weight: 700;
        opacity: 0.8;
    }
`;

const SliderDirection = styled.a`
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15%;
    color: #fff;
    text-align: center;
    opacity: 0.5;
    cursor: pointer;
    text-decoration: none;
    background-color: transparent;

    &:hover {
        color: #fff;
        text-decoration: none;
        outline: 0;
        opacity: 0.9;
    }
`;

const DirectionSpan = styled.span`
    display: inline-block;
    width: 20px;
    height: 20px;
    background: transparent no-repeat center center;
    background-size: 100% 100%;
`;

const slideImage = [
    {
        h1: "대한민국 No.1",
        h3: "Cold Chain Platform",
        src: background1,
        alt: "홈페이지 사진1",
    },
    {
        h1: "Timf",
        h3: "Connect Freshness",
        src: background2,
        alt: "홈페이지 사진2",
    },
    {
        h1: "Commerce Trend",
        h3: "신선식품 물류를 선도하는 시스템 구축",
        src: background3,
        alt: "홈페이지 사진3",
    },
];

const Slider = ({ ...props }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlide = 3;
    const intervalRef = useRef();

    const goToNextSlide = () => {
        setCurrentSlide((currentSlide + 1) % totalSlide);
    };

    const goToPrevSlide = () => {
        setCurrentSlide(currentSlide - 1 < 0 ? totalSlide - 1 : currentSlide - 1);
    };

    useEffect(() => {
        intervalRef.current = setInterval(goToNextSlide, 5000);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, [currentSlide]);

    return (
        <SliderContainer>
            <StyledUl>
                <StyledLi {...(currentSlide === 0 ? { selected: true } : null)} />
                <StyledLi {...(currentSlide === 1 ? { selected: true } : null)} />
                <StyledLi {...(currentSlide === 2 ? { selected: true } : null)} />
            </StyledUl>
            <Inner>
                <SliderItem>
                    <SliderImg
                        src={slideImage[currentSlide].src}
                        alt={slideImage[currentSlide].alt}
                    />
                    <Caption>
                        <StyledH1>{slideImage[currentSlide].h1}</StyledH1>
                        <StyledH3>{slideImage[currentSlide].h3}</StyledH3>
                    </Caption>
                </SliderItem>
            </Inner>
            <SliderDirection style={{ left: "0" }} onClick={goToPrevSlide}>
                <DirectionSpan style={{ backgroundImage: `url(${left})` }} />
            </SliderDirection>
            <SliderDirection style={{ right: "0" }} onClick={goToNextSlide}>
                <DirectionSpan style={{ backgroundImage: `url(${right})` }} />
            </SliderDirection>
        </SliderContainer>
    );
};

export default Slider;
