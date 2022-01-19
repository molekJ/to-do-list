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
  const [arrayTask, setArrayTask] = useState<
    { taskContent: string; isChecked: boolean }[]
  >([]);
  const [newTask, setNewTask] = useState({ taskContent: "", isChecked: false });

  function AddingTaskToArray() {
    setArrayTask((arrayTask) => [...arrayTask, newTask]);
  }

  return (
    <MainContainer>
      <InputTask
        type={"text"}
        placeholder="Write your task"
        value={newTask.taskContent}
        onChange={(e) =>
          setNewTask({ taskContent: e.target.value, isChecked: false })
        }
      ></InputTask>
      <Line></Line>
      <TaskList arrayTask={arrayTask} setArrayTask={setArrayTask}></TaskList>
      <ButtonContainer>
        <Button
          color="var(--red-orange)"
          onClick={(e) => {
            e.preventDefault();
            setNewTask({ taskContent: "", isChecked: false });
          }}
        >
          CLEAR
        </Button>
        <Button
          color="var(--orange)"
          onClick={(e) => {
            e.preventDefault();
            if (!newTask) {
              alert("Nie można dodać pustego zadania");
              return;
            }
            if (newTask.taskContent.length < 10) {
              alert("Zbyt krótka treść");
              return;
            }
            AddingTaskToArray();
            setNewTask({ taskContent: "", isChecked: false });
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
