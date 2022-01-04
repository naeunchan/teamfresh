import React from "react";
import styled from "@emotion/styled";

const StyledHr = styled.hr`
    width: 100%;
    border: 0;
    margin: 1rem 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: content-box;
    overflow: visible;
`;

const Horizon = ({ ...props }) => {
    return <StyledHr style={{ ...props.style }} />;
};

export default Horizon;
