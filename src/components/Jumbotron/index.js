import React from "react";
import styled from "@emotion/styled";

const JumbotronContainer = styled.div`
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: rgb(23, 45, 76);
    color: white;
    padding: 79px 50px;
`;

const Title = styled.p`
    text-align: center;
    font-weight: 700;
    font-size: 1.5rem;
    margin: 1rem 0;
`;

const Body = styled.p`
    text-align: center;
    font-size: 1.2rem;
    margin: 1rem 0;
`;

const Jumbotron = () => {
    return (
        <JumbotronContainer>
            <Title>대한민국 No.1 Cold-Chain Platform</Title>
            <Body>
                팀프레시는 국내 유일 Door to Door Cold Chain 통합물류 서비스를 제공합니다. 입출고 –
                주문처리 - 새벽배송 전 과정에 신선도 유지를 위한 설비/역량을 보유하고 있습니다.
            </Body>
        </JumbotronContainer>
    );
};

export default Jumbotron;
