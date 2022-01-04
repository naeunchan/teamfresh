import React from "react";
import styled from "@emotion/styled";
import logo from "../../images/logo.png";

const StyledA = styled.a`
    text-decoration: none;
    background-color: transparent;
    display: inline-block;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin-right: 1rem;
    white-space: nowrap;
`;

const StyledImg = styled.img`
    width: 110px;
    margin-top: -10px;
    padding-left: 10px;
`;

const Logo = ({ ...props }) => {
    return (
        <StyledA href="/">
            <StyledImg src={logo} alt="팀프레시" />
        </StyledA>
    );
};

export default Logo;
