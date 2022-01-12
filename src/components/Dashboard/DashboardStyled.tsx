import styled from "styled-components";

export const MainContainer = styled.div`
  width: 1162px;
  min-height: 1312px;
  background: var(--dark);
  margin: 0 auto;
  position: relative;
  top: 144px;
  display: flex;
  flex-direction: column;
`;

export const InputTask = styled.input`
  width: 80%;
  height: 50px;
  align-self: center;
  margin: 20px 0px;
  border-radius: 8px;
  border: none;
  outline: none;
  padding: 0 10px;
  font-size: 24px;
  font-weight: 300;
`;

export const Button = styled.button`
  width: 128px;
  height: 44px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin-left: 67px;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: var(--white);
  background: ${(props) => props.color};
`;

export const ButtonContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const Line = styled.div`
  width: 80%;
  height: 4px;
  background: var(--orange);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  align-self: center;
  border-radius: 1px;
`;
