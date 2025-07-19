import {
  IconAlchemyOutlinedRounded,
  IconAstronomyOutlinedRounded,
  IconBiologyOutlinedRounded,
  IconComputerOutlinedRounded,
  IconEarthOutlined,
  IconEarthOutlinedRounded,
  IconEconomyOutlinedRounded,
  IconGeographyOutlinedRounded,
  IconMathOutlinedRounded,
  IconPhysicsOutlinedRounded,
  IFluentProps,
} from "@/components/icons/icons.component";
import { JSX } from "react";

export const QUIZ_SUBJECT: TQuizSubject[] = [
  "Astronomi",
  "Biologi",
  "Ekonomi",
  "Fisika",
  "Geografi",
  "Informatika",
  "Kebumian",
  "Kimia",
  "Matematika",
];

export const QUIZ_SUBJECT_SELECT_LIST: any = [
  { value: 1, label: "Astronomi" },
  { value: 2, label: "Biologi" },
  { value: 3, label: "Ekonomi" },
  { value: 4, label: "Fisika" },
  { value: 5, label: "Geografi" },
  { value: 6, label: "Informatika" },
  { value: 7, label: "Kebumian" },
  { value: 8, label: "Kimia" },
  { value: 9, label: "Matematika" },
];

export function getQuizSubjectById(id: number) {
  if (id <= 0 && id > 9) {
    return "Subject Invalid";
  }

  return QUIZ_SUBJECT?.[id - 1];
}

export type TQuizSubject =
  | "Astronomi"
  | "Biologi"
  | "Ekonomi"
  | "Fisika"
  | "Geografi"
  | "Informatika"
  | "Kebumian"
  | "Kimia"
  | "Matematika";

export const QuizSubjectMap: Record<
  TQuizSubject,
  (props: IFluentProps) => JSX.Element
> = {
  Astronomi: IconAstronomyOutlinedRounded,
  Biologi: IconBiologyOutlinedRounded,
  Ekonomi: IconEconomyOutlinedRounded,
  Fisika: IconPhysicsOutlinedRounded,
  Geografi: IconGeographyOutlinedRounded,
  Informatika: IconComputerOutlinedRounded,
  Kebumian: IconEarthOutlinedRounded,
  Kimia: IconAlchemyOutlinedRounded,
  Matematika: IconMathOutlinedRounded,
};
