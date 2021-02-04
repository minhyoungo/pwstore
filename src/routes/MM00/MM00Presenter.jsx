import React from "react";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import CircularIndeterminate from "../../Components/loading/CircularIndeterminate";
import { Kakao } from "../../images/kakao.png";

import {
  TableHead,
  TableHeadLIST,
  EmptyList,
  TableBody,
  TableBodyLIST,
  TableWrapper,
  Wrapper,
  WholeWrapper,
  Image,
} from "../../Components/CommonComponents";
import { RiKakaoTalkLine } from "react-icons/ri";

const Content = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 13px;
  margin: 5px 0 0 0;
  align-items: center;
  justify-content: center;
`;
const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 0 30px;
`;

const ContentTitle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ContentTitle2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
  border-bottom: 1px solid #eeeeee;
  height: 30px;
`;
const ContentWrapper = styled.div`
  width: 250px;
  height: 250px;
  background-color: #ffffff;
  box-shadow: 5px 5px 15px rgb(231 231 231);
  padding: 10px;
`;
const ContentWrapper2 = styled.div`
  width: 450px;
  height: 250px;
  background-color: #ffffff;
  box-shadow: 5px 5px 15px rgb(231 231 231);
  padding: 10px;
`;
const ContentWrapper3 = styled.div`
  width: 480px;
  height: 240px;
  background-color: #ffffff;
  box-shadow: 5px 5px 15px rgb(231 231 231);
  padding: 10px;
  margin: 0 0 30px 0;
`;

const ContentWrapper4 = styled.div`
  width: 320px;
  height: 170px;
  background-color: #ffffff;
  box-shadow: 5px 5px 15px rgb(231 231 231);
  padding: 10px;
`;

const Papnida = styled.div`
  width: 140px;
  height: 30px;
  line-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0px 1px 8px rgb(0 0 0 / 10%);
  background-color: #415baf;
  color: #fff;
`;

const Sapnida = styled.div`
  width: 140px;
  height: 30px;
  line-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0px 1px 8px rgb(0 0 0 / 10%);
  background-color: #ffffff;
  color: #415baf;
`;

const MM00Presenter = ({
  noticeDatum,
  totalCnt,
  currentPage,
  limit,
  moveLinkHandler,
}) => {
  return (
    <WholeWrapper>
      <Image
        width={`100%`}
        height={`450px`}
        src={`https://firebasestorage.googleapis.com/v0/b/idstore-webapp-6ffe9.appspot.com/o/uploads%2FmainBanner%2F20201020162433mainBanner_03.png?alt=media&token=bfdc7e90-17b1-4540-8b28-9596167a9952`}
      />
      <Wrapper
        height={`120px`}
        fontSize={`22px`}
        fontWeight={`bold`}
        bgColor={`#E9EDF3`}
      >
        "인기 아이템 보고 가세요"
      </Wrapper>
      <Wrapper bgColor={`#fafafa`}>
        <Wrapper
          width={`1000px`}
          display={`flex`}
          dr={`row`}
          ju={`space-between`}
          width={`1000px`}
          height={`310px`}
          margin={`0 0 30px 0`}
        >
          <ContentWrapper>
            <ContentTitle>고객센터</ContentTitle>
            <Wrapper fontSize={`14px`} color={`#777777`} margin={`0 0 5px 0`}>
              대표 Email : 4leaf.omh@gmail.com
            </Wrapper>
            <Wrapper fontSize={`18px`} fontWeight={`800`} color={`#777777`}>
              h.p 010-6269-1936
            </Wrapper>
            <Wrapper
              fontSize={`24px`}
              color={`#E1C06C`}
              fontWeight={`500`}
              margin={`5px 0 0 0`}
            >
              [041.855.1936]
            </Wrapper>
            <Content>
              <Wrapper al={`flex-end`} color={`#888888`}>
                연락가능시간 :{" "}
              </Wrapper>
              <Wrapper al={`flex-start`} color={`#234875`}>
                365일 중 1일
              </Wrapper>
              
            </Content>
            <Content>
              <Wrapper al={`flex-end`} color={`#888888`}>
                충전가능시간 :{" "}
              </Wrapper>
              <Wrapper al={`flex-start`} color={`#234875`}>
                365일 언제든지
              </Wrapper>
            </Content>
            <Content>
              <Wrapper al={`flex-end`} color={`#888888`}>
                출금가능시간 :{" "}
              </Wrapper>
              <Wrapper al={`flex-start`} color={`#234875`}>
                오전 12시 ~ 12시 1분
              </Wrapper>
            </Content>
            <Wrapper margin={`30px 0 0 0`}>카카오</Wrapper>
            <Wrapper></Wrapper>
          </ContentWrapper>
          <ContentWrapper2>
            <Wrapper
              al={`flex-start`}
              fontWeight={`bold`}
              margin={`0 0 20px 0`}
            >
              공지사항
            </Wrapper>
            <Wrapper dr={`row`} ju={`space-around`}>
              <Wrapper width={`auto`} fontSize={`14px`}>
                아이디스토어 거래수수료 알림!!
              </Wrapper>{" "}
              <Wrapper margin={`0 20px 0 0`} width={`auto`} fontSize={`13px`}>
                2020.10.06
              </Wrapper>
            </Wrapper>
            <RowWrapper>
              <Wrapper fontSize={`14px`}>
                아이디스토어 운영시간 상세안내
              </Wrapper>{" "}
              <Wrapper fontSize={`13px`}>2020.10.06</Wrapper>
            </RowWrapper>
            <RowWrapper>
              <Wrapper fontSize={`14px`}>아이디스토어 수수료 무료 알림</Wrapper>{" "}
              <Wrapper fontSize={`13px`}>2020.10.19</Wrapper>
            </RowWrapper>
          </ContentWrapper2>
          <Wrapper
            width={`250px`}
            height={`250px`}
            boxShadow={`5px 5px 15px rgb(231 231 231)`}
            al={`center`}
            ju={`center`}
          >
            <ContentWrapper>
              <ContentTitle>QUICK MENU</ContentTitle>
              <Wrapper al={`center`} ju={`center`}>
                <RowWrapper>
                  <Wrapper
                    borderTop={` 1px solid #eeeeee`}
                    borderLeft={` 1px solid #eeeeee`}
                    fontSize={`11px`}
                    width={`100px`}
                    height={`100px`}
                  >
                    <Image
                      margin={`0 0 5px 0`}
                      width={`40px`}
                      src={`https://firebasestorage.googleapis.com/v0/b/idstore-webapp-6ffe9.appspot.com/o/images%2Ficons%2Fquickmenu-icon-1.png?alt=media&token=e8211c72-196f-4751-94bd-c1fb2dc049b1`}
                    />
                    1:1문의
                  </Wrapper>
                  <Wrapper
                    fontSize={`11px`}
                    width={`100px`}
                    height={`100px`}
                    borderRight={`1px solid #eeeeee`}
                    borderTop={` 1px solid #eeeeee`}
                    borderLeft={` 1px solid #eeeeee`}
                  >
                    <Image
                      margin={`0 0 5px 0`}
                      width={`40px`}
                      src={`https://firebasestorage.googleapis.com/v0/b/idstore-webapp-6ffe9.appspot.com/o/images%2Ficons%2Fquickmenu-icon-4.png?alt=media&token=3f1d0c68-55f9-465d-9770-ba9216a13ec1`}
                    />
                    사기피해정보공유
                  </Wrapper>
                </RowWrapper>
                <RowWrapper>
                  <Wrapper
                    borderTop={`1px solid #eee`}
                    borderLeft={` 1px solid #eeeeee`}
                    borderBottom={`1px solid #eeeeee`}
                    fontSize={`11px`}
                    width={`100px`}
                    height={`100px`}
                  >
                    <Image
                      margin={`0 0 5px 0`}
                      width={`40px`}
                      src={`https://firebasestorage.googleapis.com/v0/b/idstore-webapp-6ffe9.appspot.com/o/images%2Ficons%2Fquickmenu-icon-3.png?alt=media&token=be411d4b-79c7-41db-83cb-a802a9b0f76e`}
                    />
                    제휴문의
                  </Wrapper>
                  <Wrapper
                    borderLeft={` 1px solid #eeeeee`}
                    borderRight={`1px solid #eeeeee`}
                    borderTop={` 1px solid #eeeeee`}
                    borderBottom={`1px solid #eeeeee`}
                    fontSize={`11px`}
                    width={`100px`}
                    height={`100px`}
                  >
                    <Image
                      margin={`0 0 5px 0`}
                      width={`40px`}
                      src={`https://firebasestorage.googleapis.com/v0/b/idstore-webapp-6ffe9.appspot.com/o/images%2Ficons%2Fquickmenu-icon-2.png?alt=media&token=039e8a4f-cb98-4401-9417-639c9516db1a`}
                    />
                    이용안내
                  </Wrapper>
                </RowWrapper>
              </Wrapper>
            </ContentWrapper>
          </Wrapper>
        </Wrapper>

        <Wrapper width={`1000px`} dr={`row`} ju={`space-between`}>
          <ContentWrapper3>
            <ContentTitle>실시간 거래물품</ContentTitle>
            <RowWrapper>
              <Papnida>판매 물품</Papnida>
              <Sapnida>구매 물품</Sapnida>
            </RowWrapper>

            {/* table */}
            <RowWrapper width={`460px`} height={`150px`}>
              <Wrapper
                height={`35px`}
                width={`70px`}
                bgColor={`#f0f2f7`}
                fontSize={`14px`}
              >
                물품
              </Wrapper>
              <Wrapper
                height={`35px`}
                width={`110px`}
                bgColor={`#f0f2f7`}
                fontSize={`14px`}
              >
                게임명
              </Wrapper>
              <Wrapper
                height={`35px`}
                width={`180px`}
                bgColor={`#f0f2f7`}
                fontSize={`14px`}
              >
                제목
              </Wrapper>
              <Wrapper
                height={`35px`}
                width={`100px`}
                bgColor={`#f0f2f7`}
                fontSize={`14px`}
              >
                거래가격
              </Wrapper>
            </RowWrapper>
            <RowWrapper width={`460px`} height={`150px`}>
              <Wrapper
                color={`#616781`}
                fontSize={`14px`}
                height={`35px`}
                width={`70px`}
                borderBottom={`1px solid #eee`}
              >
                게임머니
              </Wrapper>
              <Wrapper
                color={`#616781`}
                fontSize={`14px`}
                height={`35px`}
                width={`110px`}
                borderBottom={`1px solid #eee`}
              >
                메이플스토리
              </Wrapper>
              <Wrapper
                color={`#616781`}
                fontSize={`14px`}
                height={`35px`}
                width={`180px`}
                borderBottom={`1px solid #eee`}
              >
                5억~34억
              </Wrapper>
              <Wrapper
                color={`#616781`}
                fontSize={`14px`}
                height={`35px`}
                width={`100px`}
                borderBottom={`1px solid #eee`}
              >
                15만 3000원
              </Wrapper>
            </RowWrapper>
            <RowWrapper width={`460px`} height={`150px`}>
              <Wrapper
                color={`#616781`}
                fontSize={`14px`}
                height={`35px`}
                width={`70px`}
                borderBottom={`1px solid #eee`}
              >
                게임머니
              </Wrapper>
              <Wrapper
                color={`#616781`}
                fontSize={`14px`}
                height={`35px`}
                width={`110px`}
                borderBottom={`1px solid #eee`}
              >
                메이플스토리
              </Wrapper>
              <Wrapper
                color={`#616781`}
                fontSize={`14px`}
                height={`35px`}
                width={`180px`}
                borderBottom={`1px solid #eee`}
              >
                5억~34억
              </Wrapper>
              <Wrapper
                color={`#616781`}
                fontSize={`14px`}
                height={`35px`}
                width={`100px`}
                borderBottom={`1px solid #eee`}
              >
                15만 3000원
              </Wrapper>
            </RowWrapper>
            <RowWrapper width={`460px`} height={`150px`}>
              <Wrapper
                color={`#616781`}
                fontSize={`14px`}
                height={`35px`}
                width={`70px`}
                borderBottom={`1px solid #eee`}
              >
                게임머니
              </Wrapper>
              <Wrapper
                color={`#616781`}
                fontSize={`14px`}
                height={`35px`}
                width={`110px`}
                borderBottom={`1px solid #eee`}
              >
                메이플스토리
              </Wrapper>
              <Wrapper
                color={`#616781`}
                fontSize={`14px`}
                height={`35px`}
                width={`180px`}
                borderBottom={`1px solid #eee`}
              >
                5억~34억
              </Wrapper>
              <Wrapper
                color={`#616781`}
                fontSize={`14px`}
                height={`35px`}
                width={`100px`}
                borderBottom={`1px solid #eee`}
              >
                15만 3000원
              </Wrapper>
            </RowWrapper>
            {/* table */}
          </ContentWrapper3>
          <ContentWrapper3>
            <ContentTitle>실시간 거래물품</ContentTitle>
            <RowWrapper>
              <Papnida>팝니다</Papnida>
              <Sapnida>삽니다</Sapnida>
            </RowWrapper>

            {/* table */}
            <RowWrapper width={`460px`} height={`150px`}>
              <Wrapper
                height={`35px`}
                width={`70px`}
                bgColor={`#f0f2f7`}
                fontSize={`14px`}
              >
                물품
              </Wrapper>
              <Wrapper
                height={`35px`}
                width={`110px`}
                bgColor={`#f0f2f7`}
                fontSize={`14px`}
              >
                게임명
              </Wrapper>
              <Wrapper
                height={`35px`}
                width={`180px`}
                bgColor={`#f0f2f7`}
                fontSize={`14px`}
              >
                제목
              </Wrapper>
              <Wrapper
                height={`35px`}
                width={`100px`}
                bgColor={`#f0f2f7`}
                fontSize={`14px`}
              >
                가격
              </Wrapper>
            </RowWrapper>
            <RowWrapper width={`460px`} height={`150px`}>
              <Wrapper
                color={`#616781`}
                fontSize={`14px`}
                height={`35px`}
                width={`70px`}
                borderBottom={`1px solid #eee`}
              >
                게임머니
              </Wrapper>
              <Wrapper
                color={`#616781`}
                fontSize={`14px`}
                height={`35px`}
                width={`110px`}
                borderBottom={`1px solid #eee`}
              >
                메이플스토리
              </Wrapper>
              <Wrapper
                color={`#616781`}
                fontSize={`14px`}
                height={`35px`}
                width={`180px`}
                borderBottom={`1px solid #eee`}
              >
                5억~34억
              </Wrapper>
              <Wrapper
                color={`#616781`}
                fontSize={`14px`}
                height={`35px`}
                width={`100px`}
                borderBottom={`1px solid #eee`}
              >
                15만 3000원
              </Wrapper>
            </RowWrapper>
            <RowWrapper width={`460px`} height={`150px`}>
              <Wrapper
                color={`#616781`}
                fontSize={`14px`}
                height={`35px`}
                width={`70px`}
                borderBottom={`1px solid #eee`}
              >
                게임머니
              </Wrapper>
              <Wrapper
                color={`#616781`}
                fontSize={`14px`}
                height={`35px`}
                width={`110px`}
                borderBottom={`1px solid #eee`}
              >
                메이플스토리
              </Wrapper>
              <Wrapper
                color={`#616781`}
                fontSize={`14px`}
                height={`35px`}
                width={`180px`}
                borderBottom={`1px solid #eee`}
              >
                5억~34억
              </Wrapper>
              <Wrapper
                color={`#616781`}
                fontSize={`14px`}
                height={`35px`}
                width={`100px`}
                borderBottom={`1px solid #eee`}
              >
                15만 3000원
              </Wrapper>
            </RowWrapper>
            <RowWrapper width={`460px`} height={`150px`}>
              <Wrapper
                color={`#616781`}
                fontSize={`14px`}
                height={`35px`}
                width={`70px`}
                borderBottom={`1px solid #eee`}
              >
                게임머니
              </Wrapper>
              <Wrapper
                color={`#616781`}
                fontSize={`14px`}
                height={`35px`}
                width={`110px`}
                borderBottom={`1px solid #eee`}
              >
                메이플스토리
              </Wrapper>
              <Wrapper
                color={`#616781`}
                fontSize={`14px`}
                height={`35px`}
                width={`180px`}
                borderBottom={`1px solid #eee`}
              >
                5억~34억
              </Wrapper>
              <Wrapper
                color={`#616781`}
                fontSize={`14px`}
                height={`35px`}
                width={`100px`}
                borderBottom={`1px solid #eee`}
              >
                15만 3000원
              </Wrapper>
            </RowWrapper>
            {/* table */}
          </ContentWrapper3>
          <Wrapper fontSize={`15px`} fontWeight={`bold`} margin={`0 0 15px 0`}>
            ISSUE
          </Wrapper>
          <Wrapper
            width={`1000px`}
            dr={`row`}
            ju={`space-between`}
            margin={`0 0 55px 0`}
          >
            <Image
              width={`320px`}
              height={`170px`}
              src={`https://firebasestorage.googleapis.com/v0/b/idstore-webapp-6ffe9.appspot.com/o/uploads%2FissueBanner%2F202092915146mainBanner_01.png?alt=media&token=2b1720b2-63a2-4963-a182-32c7af793ae1`}
            ></Image>
            <Image
              width={`320px`}
              height={`170px`}
              src={`https://firebasestorage.googleapis.com/v0/b/idstore-webapp-6ffe9.appspot.com/o/uploads%2FissueBanner%2F202092915146mainBanner_01.png?alt=media&token=2b1720b2-63a2-4963-a182-32c7af793ae1`}
            ></Image>
            <Image
              width={`320px`}
              height={`170px`}
              src={`https://firebasestorage.googleapis.com/v0/b/idstore-webapp-6ffe9.appspot.com/o/uploads%2FissueBanner%2F202092915146mainBanner_01.png?alt=media&token=2b1720b2-63a2-4963-a182-32c7af793ae1`}
            ></Image>
          </Wrapper>
          <Wrapper width={`1000px`} height={`235px`} margin={`0 0 100px 0`}>
            <Image
              width={`1000px`}
              height={`235px`}
              src={`https://firebasestorage.googleapis.com/v0/b/idstore-webapp-6ffe9.appspot.com/o/uploads%2FbottomBanner%2F202011331431604340641562.png?alt=media&token=30427971-62a8-4b9e-b437-a70e5a6f0411`}
            ></Image>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </WholeWrapper>
  );
};
export default MM00Presenter;
