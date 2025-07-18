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

export function getQuizSubjectById(id:number){
  if(id<=0 && id>9){
    return "Subject Invalid"
  } 

  return QUIZ_SUBJECT?.[id-1]
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