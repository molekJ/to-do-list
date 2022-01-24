import styled from "styled-components";

export const MainContainer = styled.div`
  min-height: 36px;
  border-radius: 8px;
  background: var(--dark-strong);
  margin: 20px auto 0;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;

  @media screen and (max-width: 576px) {
    width: 90%;
  }

  @media screen and (min-width: 768px) {
    width: 90%;
  }

  @media screen and (min-width: 992px) {
    width: 80%;
  }
`;

export const ButtonTrash = styled.button`
  border: none;
  background: transparent;
  position: relative;
  color: var(--red-orange);
  opacity: 0.8;
  right: 10px;
  :hover {
    cursor: pointer;
    opacity: 1;
  }
  transition: all 0.2s;
  :active {
    transform: scale(0.9);
  }
`;

interface IsChecked {
  isChecked: boolean;
}

export const CheckTask = styled.input<IsChecked>`
  margin-left: 15px;
  transition: 0.5s ease;
  opacity: 0.8;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  border: solid 2px
    var(${({ isChecked }) => (isChecked ? "--checked" : "--red-orange")});

  @media screen and (max-width: 576px) {
    width: 12px;
    height: 12px;
  }
  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
  @media screen and (min-width: 992px) {
    width: 18px;
    height: 18px;
  }
  @media screen and (min-width: 1200px) {
    width: 20px;
    height: 20px;
  }
`;

export const LabelTask = styled.label<IsChecked>`
  color: var(--white);
  width: 90%;
  text-align: left;
  position: relative;
  padding-bottom: 2px;
  border-bottom: 1px solid var(--orange);
  ::first-letter {
    text-transform: capitalize;
  }
  cursor: pointer;
  text-decoration: ${({ isChecked }) => (isChecked ? "line-through" : "none")};
  opacity: ${({ isChecked }) => (isChecked ? "0.4" : "1")};
  transition: 0.5s ease;
  word-wrap: break-word;

  @media screen and (max-width: 576px) {
    width: 80%;
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    width: 85%;
    font-size: 18px;
  }
  @media screen and (min-width: 992px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1200px) {
    width: 90%;
  }
`;
