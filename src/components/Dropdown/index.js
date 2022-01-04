import React from "react";
import styled from "@emotion/styled";
import styles from "../../styles";

const StyledDropdown = styled.div`
    display: flex;
    flex-direction: column;
    float: none;
    background-color: rgb(241, 241, 241);
    min-width: 160px;
    box-shadow: rgb(0 0 0 / 20%) 0px 8px 16px 0px;
    z-index: 100;
    position: absolute;
    border-style: none;
    top: 100%;
    left: 0;
    padding: 0.5rem 0;
    margin: 0.125rem 0 0 0;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    border-radius: 0.25rem;

    @media ${styles.media.sm} {
        position: static;
    }
`;

const Dropdown = ({ children, ...props }) => {
    return <StyledDropdown>{children}</StyledDropdown>;
};

export default Dropdown;
