import React from "react";
import styled from "@emotion/styled";

const ConnectContainer = styled.div`
    position: relative;
    width: 100%;
    padding: 0 15px 2rem 15px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0;
`;

const TitleBox = styled.div`
    display: flex;
    padding: 1rem;
    width: 100%;
    border: 0;
    border-top: 1px solid gray;
`;

const Title = styled.h2`
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.2;
    margin: 0 auto 0.5rem auto;
    color: black;
`;

const Connect = ({ ...props }) => {
    return (
        <ConnectContainer>
            <Wrapper>
                <TitleBox>
                    <Title>Connect</Title>
                </TitleBox>
            </Wrapper>
        </ConnectContainer>
    );
};

export default Connect;
