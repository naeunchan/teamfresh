import React from "react";
import styled from "@emotion/styled";
import Content from "./Content";
import Horizon from "../Horizon";

const FooterContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    background-color: rgb(49, 53, 62);
    color: rgb(213, 213, 213);
    padding: 1rem 0;
    left: 0;
    bottom: 0;
`;

const Wrapper = styled.div`
    display: flex;
    padding: 0;
    flex-wrap: wrap;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 0.85rem;
`;

const StyledP = styled.p`
    margin-top: 0;
    margin-bottom: 15px;
`;

const StyledA = styled.a`
    color: rgb(213, 213, 213);
    text-decoration: none;
    background-color: transparent;

    &:hover {
        text-decoration: underline;
    }
`;

const CopyRightContainer = styled.div`
    width: 100%;
    padding: 1rem;
`;

const Footer = ({ ...props }) => {
    const StyledHr = {
        width: "auto",
        margin: "1rem 15px",
        border: "0",
        height: "1px",
        background: "rgb(213, 213, 213)",
    };

    const StyledH5 = {
        fontSize: "0.85rem",
        fontWeight: "normal",
        margin: "0 auto 15px auto",
    };

    return (
        <FooterContainer>
            <Wrapper>
                <Content title="Timf">
                    <ContentContainer>
                        <StyledP>상호명: (주)팀프레시</StyledP>
                        <StyledP>사업자등록번호: 561-88-01138</StyledP>
                        <StyledP>대표자: 이성일</StyledP>
                    </ContentContainer>
                </Content>
                <Content title="Contact us">
                    <ContentContainer>
                        <StyledP>Tel: 02-423-0525</StyledP>
                        <StyledP>Fax: 02-3432-0525</StyledP>
                        <StyledP>E-mail: info@timf.co.kr</StyledP>
                        <StyledP>서울특별시 송파구 위례성대로 12길 15-1</StyledP>
                        <br />
                        <StyledP>영업 및 제휴 문의: </StyledP>
                        <StyledP>E-mail: sales@timf.co.kr</StyledP>
                    </ContentContainer>
                </Content>
                <Content title="Others">
                    <ContentContainer>
                        <StyledA href="../notice/employment/employmentList.do">
                            <StyledP>인재채용</StyledP>
                        </StyledA>
                        <StyledA href="../notice/serviceinfo/serviceInfo.do">
                            <StyledP>서비스 소개</StyledP>
                        </StyledA>
                        <StyledA href="../main/userpolicy/userPolicy.do">
                            <StyledP>개인정보 처리방침</StyledP>
                        </StyledA>
                        <StyledA href="../main/locationBasedService/locationBasedService.do">
                            <StyledP>위치기반 서비스 이용약관</StyledP>
                        </StyledA>
                    </ContentContainer>
                </Content>
                <CopyRightContainer>
                    <Horizon style={StyledHr} />
                    <h5 style={StyledH5}>
                        <StyledA href="../login/login.do">©</StyledA> TeamFresh All right reserved
                    </h5>
                </CopyRightContainer>
            </Wrapper>
        </FooterContainer>
    );
};

export default Footer;
