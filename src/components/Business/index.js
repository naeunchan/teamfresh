import React from "react";
import styled from "@emotion/styled";
import Ts from "../../images/Ts.png";
import Lf from "../../images/Lf.png";
import Fu from "../../images/Fu.jpg";
import Gr from "../../images/Gr.jpg";
import Horizon from "../Horizon";
import Card from "./Card";

const BusinessContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    width: 80%;
`;

const Title = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    color: rgb(52, 54, 56);
`;

const CardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 2rem;
    margin: 0 -15px;
`;

const CardDescription = styled.p`
    font-size: 0.85rem;
    margin-bottom: 1.2rem;
`;

const Business = ({ ...props }) => {
    return (
        <BusinessContainer>
            <TitleWrapper>
                <Title>TIMF BUSINESS</Title>
                <Horizon style={{ width: "95%", borderTop: "2px solid #b4b4b4" }} />
            </TitleWrapper>
            <CardContainer>
                <Card title="새벽배송" src={Ts} alt="새벽배송" link="/business/ts/TS.do">
                    <CardDescription>
                        팀프레시는 당일 입고 및 출고를 원칙으로 새벽배송 망을 운영 중입니다. 배송
                        기사님들은 팀프레시 배송매니저 앱을 사용해 아침 7시까지 배송을 완료합니다.
                    </CardDescription>
                </Card>
                <Card title="화물주선" src={Lf} alt="화물주선" link="/business/Lf/LF.do">
                    <CardDescription>
                        화물주선은 화물차량이 필요한 곳에 차량을 보내드리는 서비스입니다. 팀프레시의
                        데이터베이스를 활용해 차량의 원활한 수급이 가능하도록 도와드립니다.
                    </CardDescription>
                </Card>
                <Card title="풀필먼트" src={Fu} alt="풀필먼트" link="/business/Fu/FU.do">
                    <CardDescription>
                        풀필먼트는 재고관리, 주문처리, CS 업무 등을 자체적으로 해결하기 어려운
                        기업을 위한 서비스입니다.
                        <br /> 각 화주사별 요구사항을 매뉴얼화해 관리합니다.
                    </CardDescription>
                </Card>
                <Card title="그로서리" src={Gr} alt="그로서리" link="/business/Gr/GR.do">
                    <CardDescription>
                        급식·외식·온라인 커머스 등의 고객사에 식자재를 공급하는 서비스입니다. 기존
                        물류망을 활용해 식자재를 일괄 공급함으로써 비용 효율화가 가능하도록 합니다.
                    </CardDescription>
                </Card>
            </CardContainer>
        </BusinessContainer>
    );
};

export default Business;
