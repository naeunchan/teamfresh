import React from "react";
import styled from "@emotion/styled";
import facebook from "../../images/facebook.png";
import youtube from "../../images/youtube.png";
import Horizon from "../Horizon";

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
`;

const Title = styled.h2`
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.2;
    margin: 0 auto 0.5rem auto;
    color: black;
`;

const ConnectBox = styled.div`
    display: flex;
    justify-content: center;
`;

const StyledA = styled.a`
    text-decoration: none;
`;

const StyledImg = styled.img`
    width: 63px;
    height: 63px;
    margin: 1rem 2rem;

    &:hover {
        filter: opacity(0.3);
    }
`;

const Connect = ({ ...props }) => {
    return (
        <ConnectContainer>
            <Wrapper>
                <Horizon />
                <TitleBox>
                    <Title>Connect</Title>
                </TitleBox>
                <ConnectBox>
                    <StyledA href="https://www.facebook.com/teamfresh.timf">
                        <StyledImg src={facebook} alt="페이스북" />
                    </StyledA>
                    <StyledA href="https://www.youtube.com/watch?v=vlXzU-1Oec4">
                        <StyledImg src={youtube} alt="유튜브" />
                    </StyledA>
                </ConnectBox>
            </Wrapper>
        </ConnectContainer>
    );
};

export default Connect;
