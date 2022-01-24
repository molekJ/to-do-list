import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: var(--ciemny);
  font-family: "ZCOOL KuaiLe", cursive;
  font-size: 64px;
  font-weight: 400;
  position: relative;
  margin: 40px 0;
  color: var(--orange);

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }

  @media screen and (min-width: 992px) {
    font-size: 56px;
  }
`;
