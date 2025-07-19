import {
  QuizSubjectMap,
  TQuizSubject,
} from "@/utils/constants/quizSubject.const";
import { IFluentProps } from "./icons.component";

type Props = {
  iconName: TQuizSubject;
} & IFluentProps;

export const IconRenderer: React.FC<Props> = ({ iconName, ...rest }) => {
  const IconComponent = QuizSubjectMap[iconName];

  if (!IconComponent) {
    return <div>Icon not found</div>;
  }

  return <IconComponent {...rest} />;
};
