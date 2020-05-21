import React from "react";
import styled from "styled-components";

const TestComponent = () => {
  return (
    <Wrapper>
      <img
        src="https://images.unsplash.com/photo-1590074754829-545e927bcd57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        alt="Prickly pear cactus with yellow flowers"
      />
      <Text>
        <Title>Desert Vibes</Title>
        <Count>1</Count>
        <User>You</User>
      </Text>
    </Wrapper>
  );
};

export default TestComponent;

const Wrapper = styled.article`
  width: 250px;
  margin-top: 5vh;
  background: ${(props) => props.theme.body};
  border: 3px solid ${(props) => props.theme.border};
  box-shadow: 7px 7px 0px ${(props) => props.theme.border};

  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
`;

const Text = styled.div`
  padding: 0 0 5% 5%;
  color: ${(props) => props.theme.text};
`;

const Title = styled.p`
  margin: 5% 0 2.4% 0;
`;

const Count = styled.span`
  margin-right: 10px;

  :before {
    content: "📑";
    margin-right: 5px;
  }
`;

const User = styled.span`
  :before {
    content: "👤";
    margin-right: 5px;
  }
`;
