import styled from "styled-components";

export const MainContainer = styled.div`
  width: 80%;
  min-height: 36px;
  border-radius: 8px;
  background: var(--dark-strong);
  margin: 20px auto 0;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
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
  width: 20px;
  height: 20px;
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
`;
