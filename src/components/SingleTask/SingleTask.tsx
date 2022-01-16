import {
  CheckTask,
  LabelTask,
  MainContainer,
  ButtonTrash,
} from "./SingleTaskStyled";
import { BsFillTrashFill } from "react-icons/bs";
export default function SingleTask() {
  return (
    <MainContainer>
      <CheckTask id="task" type="checkbox"></CheckTask>
      <LabelTask htmlFor="task">halo halo</LabelTask>
      <ButtonTrash>
        <BsFillTrashFill size={24}></BsFillTrashFill>
      </ButtonTrash>
    </MainContainer>
  );
}
