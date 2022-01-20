import {
  CheckTask,
  LabelTask,
  MainContainer,
  ButtonTrash,
} from "./SingleTaskStyled";
import { BsFillTrashFill } from "react-icons/bs";

interface Props {
  taskContent: string;
  taskId: number;
  setArrayTask: React.Dispatch<
    React.SetStateAction<
      {
        taskContent: string;
        isChecked: boolean;
      }[]
    >
  >;
  arrayTask: {
    taskContent: string;
    isChecked: boolean;
  }[];
  isChecked: boolean;
}

export const SingleTask: React.FC<Props> = ({
  taskContent,
  taskId,
  setArrayTask,
  arrayTask,
  isChecked,
}) => {
  function DeleteTaskFromArray() {
    setArrayTask((arrayTasks) =>
      arrayTasks.filter((old) => old != arrayTasks[taskId])
    );
  }

  function ChangeCheckTask() {
    setArrayTask((arrayTask) =>
      arrayTask.map((task1) =>
        task1.taskContent !== taskContent
          ? task1
          : { ...task1, isChecked: !arrayTask[taskId].isChecked }
      )
    );
  }

  const taskIdString = taskId.toString();
  return (
    <MainContainer>
      <CheckTask
        id={taskIdString}
        type="checkbox"
        onClick={() => {
          ChangeCheckTask();
        }}
        isChecked={isChecked}
      ></CheckTask>

      <LabelTask htmlFor={taskIdString} isChecked={isChecked}>
        {taskContent}{" "}
      </LabelTask>
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
