import {
  CheckTask,
  LabelTask,
  MainContainer,
  ButtonTrash,
} from "./SingleTaskStyled";
import { BsFillTrashFill } from "react-icons/bs";

import { useState } from "react";

export default function SingleTask() {
  const [checkMark, setCheckMark] = useState(false);
  return (
    <MainContainer>
      <CheckTask
        id="task"
        type="checkbox"
        onClick={() => {
          setCheckMark(!checkMark);
        }}
      ></CheckTask>

      <LabelTask htmlFor="task">
        halo halo {checkMark ? "Jest" : "Nie"}{" "}
      </LabelTask>
      <ButtonTrash>
        <BsFillTrashFill size={24}></BsFillTrashFill>
      </ButtonTrash>
    </MainContainer>
  );
}
