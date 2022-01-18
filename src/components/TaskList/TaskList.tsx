import React from "react";
import { SingleTask } from "../SingleTask/SingleTask";

interface Props {
  arrayTasks: string[];
}

export const TaskList: React.FC<Props> = ({ arrayTasks }) => {
  return (
    <>
      {arrayTasks.map((el, index) => {
        return (
          <SingleTask key={index} taskContent={el} taskId={index}></SingleTask>
        );
      })}
    </>
  );
};
