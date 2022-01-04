import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Horizon from "../Horizon";

const ContentContainer = styled.div`
    display: flex;
    width: 100%;
    min-height: 5px;
    flex-direction: column;
    align-items: center;
    padding: 1rem;

    @media (min-width: 768px) {
        flex: 0 0 33.3%;
        max-width: 33.3%;
    }
`;

const Title = styled.h5`
    font-size: 0.85rem;
    font-weight: normal;
    margin: 0;
`;

const Content = ({ children, title, ...props }) => {
    const StyledHr = {
        width: "85%",
        margin: "0.8rem 0",
        border: "0",
        height: "1px",
        background: "rgb(213, 213, 213)",
    };

    return (
        <ContentContainer>
            <Horizon style={StyledHr} />
            <Title>{title}</Title>
            <Horizon style={StyledHr} />
            {children}
        </ContentContainer>
    );
};

Content.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Content;
