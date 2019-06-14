import styled from "styled-components";

export const ControllsStyle = styled.section`
  background-color: var(--darkBG);
  height: 100vh;
  h2 {
    height: 50px;
    background-color: #4467ad;
    color: #fff;
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-size: 22px;
    font-weight: 400;
    text-transform: uppercase;
  }
  .controls_group {
    padding: 20px;
    border-bottom: 2px solid var(--lightBG);
    h3 {
      font-size: 15px;
      font-weight: bold;
      text-transform: uppercase;
      font-style: italic;
      color: #aaa;
      margin-bottom: 12px;
    }
  }
`;
