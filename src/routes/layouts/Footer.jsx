import React from "react";
import styled from "styled-components";
import CircularIndeterminate from "../../Components/loading/CircularIndeterminate";
import {
  WholeWrapper,
  Wrapper,
  Image,
} from "../../Components/CommonComponents";

const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  height: 70px;
  color: #fff;
  margin-left: 200px;
`;

const FooterBottom = styled.div`
  display: flex;
  flex-direction: row;
  color: #fff;
  justify-content: flex-start;
`;

const FooterMenu = styled.div`
  height: 70px;
  color: #ffffff;
  font-size: 13px;
  font-weight: bold;
  margin: 0 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <WholeWrapper
      height={`332px`}
      bgColor={`#090428`}
      al={`flex-start`}
      ju={`flex-start`}
    >
      <FooterTop>
        <FooterMenu>이용약관</FooterMenu>
        <FooterMenu>개인정보 처리방침</FooterMenu>
        <FooterMenu>청소년보호정책</FooterMenu>
        <FooterMenu>이메일 수집거부</FooterMenu>
        <FooterMenu>제휴문의</FooterMenu>
      </FooterTop>
      <Wrapper
        width={`auto`}
        height={`260px`}
        al={`flex-start`}
        margin={`0 0 0 200px`}
      >
        <Image
          ju={`center`}
          al={`center`}
          width={`200px`}
          height={`69px`}
          margin={`0 20px 0 0`}
          src={`https://firebasestorage.googleapis.com/v0/b/idstore-webapp-6ffe9.appspot.com/o/images%2Flogo%2Flogo_W.png?alt=media&token=b33b6771-c28c-43f6-be15-f5263ce9d3c9`}
        />
        <Wrapper dr={`column`} ju={`flex-start`}>
          <Wrapper dr={`row`} width={`600px`} ju={`flex-start`}>
            <Wrapper
              width={`auto`}
              height={`24px`}
              fontSize={`13px`}
              color={`#ffffff`}
              margin={`0 20px 0 0 `}
            >
              주소 : 서울특별시 마포구 월드컵북로 7길 56, 301호 (서교동)
            </Wrapper>
            <Wrapper width={`auto`} fontSize={`13px`} color={`#ffffff`}>
              대표이사 : 전상환
            </Wrapper>
          </Wrapper>

          <Wrapper dr={`row`} width={`600px`} ju={`flex-start`}>
            <Wrapper
              width={`auto`}
              height={`24px`}
              fontSize={`13px`}
              color={`#ffffff`}
              margin={`0 20px 0 0 `}
            >
              E-Mail : idstore1985@gmail.com
            </Wrapper>
            <Wrapper width={`auto`} fontSize={`13px`} color={`#ffffff`}>
              TEL : 02-336-5766
            </Wrapper>
          </Wrapper>

          <Wrapper dr={`row`} width={`600px`} ju={`flex-start`}>
            <Wrapper
              width={`auto`}
              height={`24px`}
              fontSize={`13px`}
              color={`#ffffff`}
              margin={`0 20px 0 0 `}
            >
              상호명 : 아이디스토어 (ID STORE)
            </Wrapper>
            <Wrapper
              width={`auto`}
              height={`24px`}
              fontSize={`13px`}
              color={`#ffffff`}
              margin={`0 20px 0 0 `}
            >
              사업자등록번호 : 642-64-00316
            </Wrapper>
            <Wrapper
              width={`auto`}
              height={`24px`}
              fontSize={`13px`}
              color={`#ffffff`}
            >
              개인정보관리책임자 : 전상환
            </Wrapper>
          </Wrapper>

          <Wrapper dr={`row`} width={`600px`} ju={`flex-start`}>
            <Wrapper
              width={`auto`}
              height={`24px`}
              fontSize={`13px`}
              color={`#ffffff`}
            >
              통신판매업신고번호 : 제 2020-서울마포-2987 호 [사업자정보확인]
            </Wrapper>
          </Wrapper>

          <Wrapper dr={`row`} width={`600px`} ju={`flex-start`}>
            <Wrapper
              width={`auto`}
              height={`24px`}
              fontSize={`13px`}
              color={`#ffffff`}
              margin={`20px 0 0 0`}
            >
              Copyright © IDSTORE. ALL RIGHTS RESERVED Design by 4LEAF SOFTWARE
            </Wrapper>
          </Wrapper>

          <Wrapper dr={`row`} width={`600px`} ju={`flex-start`}>
            <Wrapper
              width={`auto`}
              height={`24px`}
              fontSize={`13px`}
              color={`#bbb2b2`}
              margin={`10px 0 0 0`}
            >
              아이디스토어는 통신판매중개자이며 통신판매의 당사자가 아닙니다.
            </Wrapper>
          </Wrapper>

          <Wrapper dr={`row`} width={`600px`} ju={`flex-start`}>
            <Wrapper
              width={`auto`}
              height={`24px`}
              fontSize={`13px`}
              color={`#bbb2b2`}
            >
              따라서 아이디스토어는 상품 거래정보 및 거래에 대하여 책임을 지지
              않습니다.
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </WholeWrapper>
  );
};

export default Footer;
