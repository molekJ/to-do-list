import { type } from "os";
import styled from "styled-components";

export const MainContainer = styled.div`
  width: 80%;
  height: 36px;
  border-radius: 8px;
  background: var(--dark-strong);
  margin: 20px auto 0;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const CheckTask = styled.input`
  width: 20px;
  height: 20px;
  margin-left: 15px;
  transition: 0.5s ease;
  opacity: 0.8;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none; // wyglad
  background: transparent;
  border: solid 2px var(--orange);
  cursor: pointer;
  :checked {
    border: solid 2px var(--checked);
  }

  :checked + label {
    text-decoration: line-through;
    opacity: 0.4;
  }
`;

export const LabelTask = styled.label`
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
`;
