import {
  CheckTask,
  LabelTask,
  MainContainer,
  ButtonTrash,
} from "./SingleTaskStyled";
import { BsFillTrashFill } from "react-icons/bs";

import { useState } from "react";

interface Props {
  taskContent: string;
  taskId: number;
  useArrayTask: React.Dispatch<React.SetStateAction<string[]>>;
  arrayTasks: string[];
}

export const SingleTask: React.FC<Props> = ({
  taskContent,
  taskId,
  useArrayTask,
  arrayTasks,
}) => {
  const [checkMark, setCheckMark] = useState(false);

  function DeleteTaskFromArray() {
    useArrayTask((arrayTasks) =>
      arrayTasks.filter((old) => old != arrayTasks[taskId])
    );
  }

  const taskIdString = taskId.toString();
  return (
    <MainContainer>
      <CheckTask
        id={taskIdString}
        type="checkbox"
        onClick={() => {
          setCheckMark(!checkMark);
        }}
      ></CheckTask>

      <LabelTask htmlFor={taskIdString}>{taskContent} </LabelTask>
      <ButtonTrash
        onClick={() => {
          DeleteTaskFromArray();
        }}
      >
        <BsFillTrashFill size={24}></BsFillTrashFill>
      </ButtonTrash>
    </MainContainer>
  );
};
