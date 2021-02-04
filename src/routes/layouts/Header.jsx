import React from "react";
import {
  WholeWrapper,
  Wrapper,
  Image,
  TextInput,
} from "../../Components/CommonComponents";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

const RowWrapper1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 1px solid #d5dfe4;
  border-top: 1px solid #d5dfe4;
  width: 100%;
  height: 30px;
`;
const RowWrapper2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 800px;
  height: 50px;
  margin: 0 auto;
`;

const Header = () => {
  return (
    <WholeWrapper borderBottom={`1px solid #D5DFE4`}>
      <RowWrapper1>
        <Wrapper fontSize={`12px`} width={`75px`} al={`center`}>
          마이페이지
        </Wrapper>
        <Wrapper
          fontSize={`12px`}
          width={`75px`}
          height={`100%`}
          al={`center`}
          borderLeft={`1px solid #d5dfe4`}
          borderRight={`1px solid #d5dfe4`}
        >
          회원가입
        </Wrapper>
        <Wrapper
          fontSize={`12px`}
          width={`75px`}
          al={`center`}
          margin={`0 150px 0 0`}
        >
          로그인
        </Wrapper>
      </RowWrapper1>
      <Wrapper
        width={`1000px`}
        display={`flex`}
        dr={"row"}
        al={`center`}
        ju={`center`}
      >
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/idstore-webapp-6ffe9.appspot.com/o/images%2Flogo%2Flogo.png?alt=media&token=18d622eb-178c-452b-af17-2d4b23e9da3f"
          width="160px"
          margin="25px 25px"
        />
        <Wrapper
          width={`calc(80% - 210px)`}
          height={`43px`}
          borderBottom="2px solid #352784"
          display={`flex`}
          dr={`row`}
        >
          <TextInput
            outLine={`none`}
            boxShadow={`none`}
            border={`none`}
            width={`calc(100% - 50px)`}
          />
          <BiSearch fontSize={`30px`} color={`#352784`} />
        </Wrapper>
      </Wrapper>
      <Wrapper
        borderBottom={` 1px solid #d5dfe4`}
        borderTop={`1px solid #D5DFE4`}
      >
        <RowWrapper2 width={`1000px`}>
          <Wrapper fontSize={`14px`} fontWeight={`500`} width={`auto`}>
            게임리스트
          </Wrapper>
          <Wrapper fontSize={`14px`} fontWeight={`500`} width={`auto`}>
            머니거래
          </Wrapper>
          <Wrapper fontSize={`14px`} fontWeight={`500`} width={`auto`}>
            계정거래
          </Wrapper>
          <Wrapper fontSize={`14px`} fontWeight={`500`} width={`auto`}>
            커뮤니티
          </Wrapper>
          <Wrapper fontSize={`14px`} fontWeight={`500`} width={`auto`}>
            이벤트/뉴스
          </Wrapper>
          <Wrapper fontSize={`14px`} fontWeight={`500`} width={`auto`}>
            고객지원
          </Wrapper>
          <Wrapper fontSize={`14px`} fontWeight={`500`} width={`auto`}>
            물품등록
          </Wrapper>
        </RowWrapper2>
      </Wrapper>
    </WholeWrapper>
  );
};
export default Header;
