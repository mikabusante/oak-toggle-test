import React from "react";
import styled, { css } from "styled-components/macro";
import { RiStackLine, RiUser5Line, RiLock2Line } from "react-icons/ri";

const Collection = ({ imgUrl, alt, title, count }) => {
  return (
    <Wrapper>
      <img src={imgUrl} alt={alt} />
      <Text>
        <Title>{title}</Title>
        <Details>
          <div>
            <Detail>
              <RiStackLine /> <span>{count}</span>
            </Detail>

            <Detail>
              <RiUser5Line /> <span>You</span>
            </Detail>
          </div>

          <Detail>
            <RiLock2Line />
          </Detail>
        </Details>
      </Text>
    </Wrapper>
  );
};

export default Collection;

const Wrapper = styled.article(
  ({ theme }) => css`
    width: 250px;
    margin: 5vh 4vw 0 0;
    background: ${theme.body};
    border: 3px solid ${theme.border};
    box-shadow: 7px 7px 0px ${theme.border};

    img {
      height: 200px;
      width: 100%;
      object-fit: cover;
    }
  `
);

const Text = styled.div`
  padding: 0 3% 5% 5%;
`;

const Title = styled.p`
  margin: 5% 0 2.2% 0;
  font-weight: bold;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Detail = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 10px;

  span {
    padding-left: 4px;
  }
`;
