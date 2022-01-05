import React from "react";
import styled from "@emotion/styled";

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 1rem;
    width: 100%;

    @media (min-width: 768px) {
        flex: 0 0 25%;
        max-width: 25%;
    }
`;

const StyledImg = styled.img`
    width: 100%;
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
`;

const CardBody = styled.div`
    flex: 1 1 auto;
    padding: 1.25rem;
`;

const Title = styled.h4`
    font-size: 1.2rem;
    font-weight: 700;
    color: rgb(52, 54, 56);
    margin: 0;
`;

const MoreButton = styled.a`
    text-decoration: none;
    color: #6c757d;
    background-color: transparent;
    border: 1px solid #6c757d;
    border-radius: 2rem;
    font-size: 0.85rem;
    font-weight: 700;
    cursor: pointer;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    margin-right: 2rem;
    padding: 0.375rem 0.75rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

const Card = ({ children, title, link, src, alt, ...props }) => {
    return (
        <CardContainer>
            <StyledImg src={src} alt={alt} />
            <CardBody>
                <Title>{title}</Title>
                {children}
                <MoreButton href={link}>더 알아보기</MoreButton>
            </CardBody>
        </CardContainer>
    );
};

export default Card;
