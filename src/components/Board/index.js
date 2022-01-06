import React, { useEffect, useState } from "react";
import Horizon from "../Horizon";
import styled from "@emotion/styled";
import styles from "../../styles";
import add from "../../images/add.png";
import clock from "../../images/clock.png";

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
    padding: 1rem;
    flex-direction: column;
    flex: 1;
    max-width: 100%;
`;

const Title = styled.h2`
    text-align: left;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.2;
    margin: 0 0 2rem 0.5rem;
    color: black;
`;

const BodyBox = styled.div`
    background-color: rgb(250, 250, 250);
    border: 1px solid rgb(238, 238, 238);
    padding: 2rem 2rem 0.5rem 2rem;
`;

const BodyWrapper = styled.div`
    display: flex;
    padding: 0 1rem;
`;

const StyledA = styled.a`
    cursor: pointer;
    margin: 0 1rem;
    text-decoration: none;
    color: black;
`;

const StyledImg = styled.img`
    width: 16px;
    height: 16px;
    opacity: 0.4;
    vertical-align: middle;
`;

const NoticeWrapper = styled.div`
    display: flex;
    margin-bottom: 1.5rem;
    width: 100%;
    justify-content: space-between;
`;

const DummyPost = [
    {
        postId: "78",
        title: "[공고] 신주발행 공고(제3자 배정방식)",
        date: "2021-09-15",
        poster: "admin",
        link: "https://www.teamfresh.co.kr/notice/notice/noticeDetail.do",
    },
    {
        postId: "72",
        title: "[공고] 신주발행 공고(제3자 배정방식)",
        date: "2021-09-08",
        poster: "admin",
        link: "https://www.teamfresh.co.kr/notice/notice/noticeDetail.do",
    },
    {
        postId: "69",
        title: "[공고] 신주발행 공고(제3자 배정방식)",
        date: "2021-08-31",
        poster: "admin",
        link: "https://www.teamfresh.co.kr/notice/notice/noticeDetail.do",
    },
    {
        postId: "67",
        title: "[공고] 신주발행 공고(제3자 배정방식)",
        date: "2021-08-15",
        poster: "admin",
        link: "https://www.teamfresh.co.kr/notice/notice/noticeDetail.do",
    },
    {
        postId: "66",
        title: "[공고] 신주발행 공고(제3자 배정방식)",
        date: "2021-08-08",
        poster: "admin",
        link: "https://www.teamfresh.co.kr/notice/notice/noticeDetail.do",
    },
];

const Board = () => {
    const [notices, setNotices] = useState([]);

    const BodyTitle = {
        fontSize: "1.25rem",
        fontWeight: "500",
        lineHeight: "1.2",
        margin: "0 0 0.5rem 0",
    };

    useEffect(() => {
        const getNoticeDetail = (count = 3) => {
            const notices = DummyPost.slice(0, count);

            return notices.map((notice) => (
                <NoticeWrapper key={notice.postId}>
                    <StyledA href={notice.link}>{notice.title}</StyledA>
                    <StyledA>
                        <StyledImg src={clock} alt="업로드일" style={{ marginRight: "0.8rem" }} />
                        {notice.date}
                    </StyledA>
                </NoticeWrapper>
            ));
        };

        setNotices(getNoticeDetail());
    }, []);

    return (
        <BoardContainer>
            <Horizon />
            <Wrapper>
                <Section>
                    <Title>공지사항</Title>
                    <BodyBox>
                        <BodyWrapper>
                            <Title style={BodyTitle}>Notice</Title>
                            <StyledA href="/notice/notice/noticeList.do">
                                <StyledImg src={add} alt="더보기" title="더보기" />
                            </StyledA>
                        </BodyWrapper>
                        <Horizon />
                        {notices}
                    </BodyBox>
                </Section>
                <Section>
                    <Title>보도자료</Title>
                    <BodyBox>
                        <BodyWrapper>
                            <Title style={BodyTitle}>TimF News</Title>
                            <StyledA href="/pressrelease/pressReleaseList.do">
                                <StyledImg src={add} alt="더보기" title="더보기" />
                            </StyledA>
                        </BodyWrapper>
                        <Horizon />
                    </BodyBox>
                </Section>
            </Wrapper>
        </BoardContainer>
    );
};

export default Board;
