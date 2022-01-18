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
}

export const SingleTask: React.FC<Props> = ({ taskContent, taskId }) => {
  const [checkMark, setCheckMark] = useState(false);

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
      <ButtonTrash>
        <BsFillTrashFill size={24}></BsFillTrashFill>
      </ButtonTrash>
    </MainContainer>
  );
};
