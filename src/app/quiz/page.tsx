"use client";

import { postQuiz } from "@/api/quiz.api";
import HeaderText1 from "@/components/HeaderText1.component";
import { IconHistory } from "@/components/icons/Icons.component";
import NavbarMenu from "@/components/layout/NavbarMenu.component";
import MainButton from "@/components/MainButton.component";
import {
  QUIZ_SUBJECT,
  QUIZ_SUBJECT_SELECT_LIST,
  TQuizSubject,
} from "@/utils/constants/quizSubject.const";
import ROUTES from "@/utils/constants/routes.const";
import {
  Button,
  Group,
  NumberInput,
  Select,
  Stack,
  TextInput,
} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import React, { useState } from "react";
import * as yup from "yup";

export interface IQuizPage {}

export interface ISubmitQuiz {
  quiz: number;
  score: number;
  user_start: string;
  user_end: string;
}

const schema = yup.object().shape({
  quiz: yup.string().required("Subject is required"),
  score: yup
    .number()
    .min(0, "Minimal 0")
    .max(100, "Maksimal 100")
    .required("Score wajib diisi"),
  user_start: yup.date().required("Waktu mulai wajib diisi"),
  user_end: yup
    .date()
    .required("Waktu selesai wajib diisi")
    .min(yup.ref("user_start"), "Waktu selesai harus setelah waktu mulai"),
});

const QuizPage: React.FC<IQuizPage> = ({}) => {
  const form = useForm<ISubmitQuiz>({
    validate: yupResolver(schema),
    initialValues: {
      quiz: 0,
      score: 0,
      user_start: "",
      user_end: "",
    },
  });

  const [loading, setLoading] = useState(true);
  const handleSubmit = async (values: typeof form.values) => {
    setLoading(true);
    try {
      const response: any = await postQuiz(
        values?.quiz,
        values?.score,
        values?.user_start,
        values?.user_end
      );

      console.log("response", response);
    } catch (error) {
      console.error("Failed to fetch leaderboard:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack className="px-40 py-10">
      <Group className="justify-between">
        <HeaderText1
          title="Quiz"
          subTitle="Submit hasil quiz anda dan dapatkan skor yang sesuai"
        />

        <MainButton
          icon={<IconHistory size={20} color="white" />}
          href={ROUTES.SUBMISSIONS}
          label="Riwayat Quiz"
        />
      </Group>
      <form onSubmit={form.onSubmit(handleSubmit)} className="space-y-4">
        <Select
          label="Subject"
          placeholder="Pilih subject"
          data={QUIZ_SUBJECT_SELECT_LIST}
          {...form.getInputProps("quiz")}
          clearable
        />

        <NumberInput
          label="Score"
          placeholder="Masukkan skor (0–100)"
          type="number"
          {...form.getInputProps("score")}
          min={0}
          max={100}
        />

        <TextInput
          label="Start Time"
          type="datetime-local"
          {...form.getInputProps("user_start")}
        />

        <TextInput
          label="End Time"
          type="datetime-local"
          {...form.getInputProps("user_end")}
        />

        <Button type="submit" fullWidth>
          Submit
        </Button>
      </form>
    </Stack>
  );
};
export default QuizPage;
