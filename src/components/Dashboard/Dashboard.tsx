import React, { useState } from "react";
import { TaskList } from "../TaskList/TaskList";

import {
  Button,
  InputTask,
  MainContainer,
  Line,
  ButtonContainer,
} from "./DashboardStyled";

export default function Dashboard() {
  const [arrayTask, useArrayTask] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  function showTask() {
    console.log(newTask);
  }

  function AddingTaskToArray() {
    useArrayTask((arrayTask) => [...arrayTask, newTask]);
  }

  return (
    <MainContainer>
      <InputTask
        type={"text"}
        placeholder="Write your task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      ></InputTask>
      <Line></Line>
      <TaskList arrayTasks={arrayTask}></TaskList>
      <ButtonContainer>
        <Button
          color="var(--red-orange)"
          onClick={(e) => {
            e.preventDefault();
            setNewTask("");
          }}
        >
          CLEAR
        </Button>
        <Button
          color="var(--orange)"
          onClick={(e) => {
            e.preventDefault();
            if (newTask == "" || newTask == " ") {
              return;
            }
            AddingTaskToArray();
            showTask();
            setNewTask("");
          }}
        >
          ADD
        </Button>
      </ButtonContainer>
      <Button
        color="var(--orange)"
        style={{ position: "absolute", bottom: 20, right: "10%" }}
      >
        SAVE
      </Button>
    </MainContainer>
  );
}
