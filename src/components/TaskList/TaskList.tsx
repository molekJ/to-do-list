import React from "react";
import { SingleTask } from "../SingleTask/SingleTask";

interface Props {
  arrayTask: {
    taskContent: string;
    isChecked: boolean;
  }[];
  setArrayTask: React.Dispatch<
    React.SetStateAction<
      {
        taskContent: string;
        isChecked: boolean;
      }[]
    >
  >;
}

export const TaskList: React.FC<Props> = ({ arrayTask, setArrayTask }) => {
  return (
    <>
      {arrayTask.map((el, index) => {
        return (
          <SingleTask
            key={index}
            taskContent={el.taskContent}
            taskId={index}
            arrayTask={arrayTask}
            setArrayTask={setArrayTask}
            isChecked={el.isChecked}
          ></SingleTask>
        );
      })}
    </>
  );
};
