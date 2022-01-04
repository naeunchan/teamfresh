import React from "react";
import Logo from "../Logo";
import Menu from "../Menu";
import styled from "@emotion/styled";
import styles from "../../styles";

const StyledNav = styled.nav`
    position: fixed;
    height: 60px;
    width: 100%;
    display: flex;
    padding: 0.8rem;
    z-index: 10;
    background-color: #f8f9fa;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media ${styles.media.md} {
        flex-flow: row nowrap;
        justify-content: flex-start;
    }
`;

const Navbar = ({ ...props }) => {
    return (
        <StyledNav>
            <Logo />
            <Menu />
        </StyledNav>
    );
};

export default Navbar;
