import React from "react";
import TaskList from "../TaskList/TaskList";

import {
  Button,
  InputTask,
  MainContainer,
  Line,
  ButtonContainer,
} from "./DashboardStyled";

export default function Dashboard() {
  return (
    <MainContainer>
      <InputTask type={"text"} placeholder="Write your task"></InputTask>
      <Line></Line>
      <TaskList></TaskList>
      <ButtonContainer>
        <Button color="var(--red-orange)">CLEAR</Button>
        <Button color="var(--orange)">ADD</Button>
      </ButtonContainer>
    </MainContainer>
  );
}
