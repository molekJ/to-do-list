import React from "react";
import { CheckTask, LabelTask, MainContainer } from "./SingleTaskStyled";

export default function SingleTask() {
  return (
    <MainContainer>
      <CheckTask id="task" type="checkbox"></CheckTask>
      <LabelTask htmlFor="task">Halo halo</LabelTask>
    </MainContainer>
  );
}
