import React from "react";
import styled from "styled-components";

const Toggle = ({ setTheme }) => {
  const handleToggle = (e) => {
    let isToggled = e.target.checked;
    setTheme(isToggled ? "dark" : "light");
  };

  return (
    <Wrapper>
      <span role="img" aria-label="sun">
        ☀️
      </span>
      <Checkbox type="checkbox" onClick={(e) => handleToggle(e)} />
      <Switch />
      <span role="img" aria-label="moon">
        🌙
      </span>
    </Wrapper>
  );
};

export default Toggle;

const Wrapper = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

const Switch = styled.span`
  cursor: pointer;
  position: relative;

  :before,
  :after {
    content: "";
    margin: 0 3px;
    transition: all 0.3s;
    display: block;
  }

  :before {
    height: 25px;
    width: 43px;
    border-radius: 0.95em;
    /* opacity: 0.6; */
    background: #40484d;
  }

  :after {
    position: absolute;
    top: 10%;
    left: 3px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: white;
  }
`;

const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;

  :checked {
    + ${Switch} {
      :before {
        background: #38dedf;
      }

      :after {
        left: 20px;
      }
    }
  }

  :focus {
    + ${Switch} {
      outline: #5d9dd5 solid 1px;
      box-shadow: 0 0 8px #5e9ed6;
    }
  }
`;
