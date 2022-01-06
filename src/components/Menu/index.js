import React, { useState } from "react";
import styled from "@emotion/styled";
import styles from "../../styles";
import Dropdown from "../Dropdown";
import menu from "../../images/menu.png";

const StyledButton = styled.button`
    visibility: hidden;
    background-color: transparent;
    cursor: pointer;
    border-radius: 5px;
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    border: 1px solid rgba(0, 0, 0, 0.1);

    @media ${styles.media.sm} {
        visibility: visible;
    }
`;

const StyledImg = styled.img`
    width: 30px;
    height: 30px;
    padding: 2px 0;
    cursor: pointer;
`;

const StyledMenu = styled.div`
    display: block;
    position: absolute;
    right: 1rem;
    flex-basis: auto;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    z-index: 10;
    padding-right: 20px;

    @media ${styles.media.sm} {
        visibility: ${({ isToggled }) => (isToggled ? "visible" : "hidden")};
        height: ${({ isToggled }) => (isToggled ? "100%" : "0")};
        position: relative;
        padding-left: 0;
        padding-right: 0;
        right: 0;
        flex-basis: 100%;
        text-align: left;
    }
`;

const StyledUl = styled.ul`
    display: flex;
    flex-direction: row;
    padding-left: 0;
    list-style: none;

    @media ${styles.media.sm} {
        background-color: rgb(248, 249, 250);
        flex-direction: column;
        padding: 20px;
        margin-top: 0;
        margin-bottom: 0;
    }
`;

const StyledLi = styled.li`
    padding-right: 20px;
    position: relative;
`;

const StyledA = styled.a`
    cursor: pointer;
    display: block;
    color: ${({ isItem }) => (isItem ? "black" : "rgba(0, 0, 0, 0.5)")};
    padding: ${({ isItem }) => (isItem ? "12px 16px" : "0.5rem 1rem")};
    font-size: ${({ isItem }) => (isItem ? "0.9rem" : "0.85rem")};
    text-decoration: none;
    background-color: transparent;

    &:hover {
        background-color: ${({ isItem }) => (isItem ? "rgb(221, 221, 221)" : "transparent")};
        color: rgba(0, 0, 0, 1);
        font-weight: bold;
    }
`;

const StyledSpan = styled.span`
    color: rgb(96, 96, 96);
    font-size: 0.9rem;

    &:hover {
        color: black;
        font-weight: bold;
    }
`;

const Menu = ({ ...props }) => {
    const [toggle, setToggle] = useState(false);
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);

    const handleClickButton = (e) => {
        e.preventDefault();
        setToggle(!toggle);
    };

    const handleMouseEnter1 = (e) => {
        e.preventDefault();
        setHover1(true);
    };

    const handleMouseEnter2 = (e) => {
        e.preventDefault();
        setHover2(true);
    };

    const handleMouseEnter3 = (e) => {
        e.preventDefault();
        setHover3(true);
    };

    const handleMouseLeave1 = (e) => {
        e.preventDefault();
        setHover1(false);
    };

    const handleMouseLeave2 = (e) => {
        e.preventDefault();
        setHover2(false);
    };

    const handleMouseLeave3 = (e) => {
        e.preventDefault();
        setHover3(false);
    };

    return (
        <>
            <StyledButton onClick={handleClickButton}>
                <StyledImg src={menu} alt="메뉴" />
            </StyledButton>
            <StyledMenu className={toggle ? "show" : null} isToggled={toggle}>
                <StyledUl>
                    <StyledLi onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
                        <StyledA>
                            <StyledSpan>회사소개</StyledSpan>
                        </StyledA>
                        {hover1 && (
                            <Dropdown>
                                <StyledA href="../company/timf/timfInfo.do" isItem>
                                    회사소개
                                </StyledA>
                                <StyledA href="../company/partner/partnerInfo.do" isItem>
                                    협력사 소개
                                </StyledA>
                                <StyledA href="../company/customer/customerInfo.do" isItem>
                                    고객사 소개
                                </StyledA>
                                <StyledA href="../company/map/timfMap.do" isItem>
                                    오시는 길
                                </StyledA>
                            </Dropdown>
                        )}
                    </StyledLi>
                    <StyledLi onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                        <StyledA>
                            <StyledSpan>사업소개</StyledSpan>
                        </StyledA>
                        {hover2 && (
                            <Dropdown>
                                <StyledA href="../business/ts/TS.do" isItem>
                                    새벽배송
                                </StyledA>
                                <StyledA href="../business/lf/LF.do" isItem>
                                    화물주선
                                </StyledA>
                                <StyledA href="../business/fu/FU.do" isItem>
                                    풀필먼트
                                </StyledA>
                                <StyledA href="../business/gr/GR.do" isItem>
                                    그로서리
                                </StyledA>
                            </Dropdown>
                        )}
                    </StyledLi>
                    <StyledLi onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
                        <StyledA>
                            <StyledSpan>공지사항</StyledSpan>
                        </StyledA>
                        {hover3 && (
                            <Dropdown>
                                <StyledA href="../notice/notice/noticeList.do" isItem>
                                    공지사항
                                </StyledA>
                                <StyledA href="../notice/employment/employmentList.do" isItem>
                                    인재채용
                                </StyledA>
                                <StyledA href="../notice/serviceinfo/serviceInfo.do" isItem>
                                    서비스 소개
                                </StyledA>
                            </Dropdown>
                        )}
                    </StyledLi>
                    <StyledLi>
                        <StyledA href="../pressrelease/pressReleaseList.do">
                            <StyledSpan>보도자료</StyledSpan>
                        </StyledA>
                    </StyledLi>
                </StyledUl>
            </StyledMenu>
        </>
    );
};

export default Menu;
