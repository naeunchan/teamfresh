import React from "react";
import Horizon from "../Horizon";
import styled from "@emotion/styled";
import styles from "../../styles";

const BoardContainer = styled.div`
    position: relative;
    width: 100%;
    padding: 0 15px 2rem 15px;
`;

const Wrapper = styled.div`
    display: flex;
    padding: 2rem;
    flex-wrap: wrap;
    margin: 0 -15px;

    @media ${styles.media.sm} {
        flex-direction: column;
    }
`;

const Section = styled.div`
    display: flex;
    padding: 0;
    flex-direction: column;
`;

const Title = styled.h2`
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.2;
    margin: 0 0 2rem 0.5rem;
    color: black;
`;

const BodyBox = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgb(250, 250, 250);
    border: 1px solid rgb(238, 238, 238);
    padding: 2rem 2rem 0.5rem 2rem;
`;

const BodyWrapper = styled.div`
    padding: 1rem;
    flex: 0 0 100%;
    max-width: 100%;

    @media ${styles.media.sm} {
        flex: 0 0 50%;
        max-width: 50%;
    }
`;

const Board = () => {
    const BodyTitle = {
        fontSize: "1.25rem",
        fontWeight: "500",
        lineHeight: "1.2",
        margin: "0 0 0.5rem 0",
    };

    return (
        <BoardContainer>
            <Horizon />
            <Wrapper>
                <Section>
                    <Title>공지사항</Title>
                    <BodyBox>
                        <BodyWrapper>
                            <Title style={BodyTitle}>Notice</Title>
                        </BodyWrapper>
                    </BodyBox>
                </Section>
                <Section>
                    <Title>보도자료</Title>
                </Section>
            </Wrapper>
        </BoardContainer>
    );
};

export default Board;
