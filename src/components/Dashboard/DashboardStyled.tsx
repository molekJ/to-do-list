import styled from "styled-components";

export const MainContainer = styled.div`
  min-height: 612px;
  background: var(--dark);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;

  @media screen and (max-width: 576px) {
    width: 100vw;
  }
  @media screen and (min-width: 768px) {
    width: 90vw;
  }
  @media screen and (min-width: 992px) {
    width: 80vw;
  }
  @media screen and (min-width: 1200px) {
    width: 1162px;
  }
`;

export const InputTask = styled.input`
  align-self: center;
  margin: 20px 0px;
  border-radius: 8px;
  border: none;
  outline: none;
  padding: 0 10px;
  font-weight: 300;

  @media screen and (max-width: 576px) {
    width: 90%;
    height: 30px;
    font-size: 14px;
  }

  @media screen and (min-width: 768px) {
    width: 90%;
    height: 38px;
    font-size: 18px;
  }

  @media screen and (min-width: 992px) {
    width: 80%;
    height: 44px;
    font-size: 20px;
  }
  @media screen and (min-width: 1200px) {
    height: 50px;
    font-size: 24px;
  }
`;

export const Button = styled.button`
  width: 128px;
  height: 44px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  font-weight: 500;
  line-height: 28px;
  color: var(--white);
  background: ${(props) => props.color};

  @media screen and (max-width: 576px) {
    font-size: 16px;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-left: 30px;
  }

  @media screen and (min-width: 992px) {
    font-size: 24px;
    margin-left: 50px;
  }
`;

export const ButtonContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  @media screen and (max-width: 576px) {
    width: 90%;
    margin: 20px auto;
    justify-content: space-between;
  }
  @media screen and (min-width: 768px) {
    width: 90%;
  }
  @media screen and (min-width: 992px) {
    width: 80%;
  }
`;

export const Line = styled.div`
  width: 80%;
  background: var(--orange);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  align-self: center;
  border-radius: 1px;

  @media screen and (max-width: 576px) {
    height: 2px;
    width: 90%;
  }

  @media screen and (min-width: 768px) {
    height: 3px;
    width: 90%;
  }

  @media screen and (min-width: 992px) {
    height: 4px;
    width: 80%;
  }
`;
