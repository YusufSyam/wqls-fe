"use client";

import { postQuiz } from "@/api/quiz.api";
import HeaderText1 from "@/components/HeaderText1.component";
import { IconHistory } from "@/components/icons/Icons.component";
import NavbarMenu from "@/components/layout/NavbarMenu.component";
import LoadingModal from "@/components/LoadingModal.component";
import MainButton from "@/components/MainButton.component";
import { useAuth } from "@/context/AuthContext.context";
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
import { notifications } from "@mantine/notifications";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
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
  const router = useRouter();

  const { user, isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
      notifications.show({
        title: "Silahkan login terlebih dahulu",
        message:
          "Hanya user yang telah login sebelumnya yang bisa mengerjakan quiz",
        color: "red",
      });
    }
  }, [isLoggedIn, router]);

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

      notifications.show({
        title: "Berhasil Submit Quiz",
        message: "Anda berhasil mengumpulkan quiz",
        color: "green",
      });

      form.reset()
      console.log("response", response);
    } catch (error) {
      console.error("Failed to fetch leaderboard:", error);
      notifications.show({
        title: "Gagal Submit",
        message: "Terjadi kesalahan",
        color: "red",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack className="px-56 py-10 gap-12">
      <LoadingModal opened={loading} />
      <Group className="justify-between">
        <HeaderText1
          title="Quiz"
          subTitle="Submit hasil quiz anda dan dapatkan skor yang sesuai"
        />

        <MainButton
          icon={<IconHistory size={20} color="white" />}
          href={ROUTES.SUBMISSIONS}
          label="Lihat Riwayat Quiz"
        />
      </Group>
      <form onSubmit={form.onSubmit(handleSubmit)} className="space-y-4">
        <Group>
          <Select
            label="Subjek"
            placeholder="Pilih subjek"
            data={QUIZ_SUBJECT_SELECT_LIST}
            {...form.getInputProps("quiz")}
            clearable
            className="flex-1"
          />

          <NumberInput
            label="Skor"
            placeholder="Masukkan skor (0–100)"
            type="number"
            {...form.getInputProps("score")}
            min={0}
            max={100}
            className="flex-1"
          />
        </Group>

        <TextInput
          label="Waktu Mulai Pengerjaan"
          type="datetime-local"
          {...form.getInputProps("user_start")}
        />

        <TextInput
          label="Waktu Berakhir Pengerjaan"
          type="datetime-local"
          {...form.getInputProps("user_end")}
        />

        <Button
          type="submit"
          className="rounded-full bg-dark-blue hover:bg-blue duration-300 ease-in-out transition-all"
          fullWidth
        >
          Submit
        </Button>
      </form>
    </Stack>
  );
};
export default QuizPage;
