"use client";

import HeaderText1 from "@/components/HeaderText1.component";
import { QUIZ_SUBJECT } from "@/utils/constants/quizSubject.const";
import { Button, Select, Stack, TextInput } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import React from "react";
import * as yup from "yup";

export interface IQuizPage {}

const schema = yup.object().shape({
  subject: yup.string().required("Subject is required"),
  score: yup
    .number()
    .min(0, "Minimal 0")
    .max(100, "Maksimal 100")
    .required("Score wajib diisi"),
  startTime: yup.date().required("Waktu mulai wajib diisi"),
  endTime: yup
    .date()
    .required("Waktu selesai wajib diisi")
    .min(yup.ref("startTime"), "Waktu selesai harus setelah waktu mulai"),
});

const QuizPage: React.FC<IQuizPage> = ({}) => {
  const form = useForm({
    validate: yupResolver(schema),
    initialValues: {
      subject: "",
      score: "",
      startTime: "",
      endTime: "",
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    console.log(values, "values");
    // try {
    //   const res = await fetch("/api/submit", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(values),
    //   });

    //   if (res.ok) {
    //     alert("Berhasil disubmit!");
    //     form.reset();
    //   } else {
    //     alert("Gagal submit!");
    //   }
    // } catch (err) {
    //   console.error(err);
    //   alert("Terjadi kesalahan.");
    // }
  };

  return (
    <Stack>
      <HeaderText1
        title="Quiz"
        subTitle="Submit hasil quiz anda dan dapatkan skor yang sesuai"
      />
      <form onSubmit={form.onSubmit(handleSubmit)} className="space-y-4">
        <Select
          label="Subject"
          placeholder="Pilih subject"
          data={QUIZ_SUBJECT}
          {...form.getInputProps("subject")}
          clearable
        />

        <TextInput
          label="Score"
          placeholder="Masukkan skor (0–100)"
          type="number"
          {...form.getInputProps("score")}
        />

        <TextInput
          label="Start Time"
          type="datetime-local"
          {...form.getInputProps("startTime")}
        />

        <TextInput
          label="End Time"
          type="datetime-local"
          {...form.getInputProps("endTime")}
        />

        <Button type="submit" fullWidth>
          Submit
        </Button>
      </form>
    </Stack>
  );
};
export default QuizPage;
