import React from "react";
import { SingleTask } from "../SingleTask/SingleTask";

interface Props {
  arrayTasks: string[];
  useArrayTask: React.Dispatch<React.SetStateAction<string[]>>;
}

export const TaskList: React.FC<Props> = ({ arrayTasks, useArrayTask }) => {
  return (
    <>
      {arrayTasks.map((el, index) => {
        return (
          <SingleTask
            key={index}
            taskContent={el}
            taskId={index}
            arrayTasks={arrayTasks}
            useArrayTask={useArrayTask}
          ></SingleTask>
        );
      })}
    </>
  );
};
