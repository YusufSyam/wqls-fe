"use client";
import HeaderText1 from "@/components/HeaderText1.component";
import { useAuth } from "@/context/AuthContext.context";
import { Stack, Text } from "@mantine/core";

import React, { useEffect } from "react";
import HeroSection from "./Hero.section";

export interface IHomePage {}

const HomePage: React.FC<IHomePage> = ({}) => {
  const { user, isLoggedIn } = useAuth();

  // useEffect(()=>{

  // }, [isLoggedIn])
  console.log(isLoggedIn, "isLoggedIn");
  console.log(user, "user");
  return (
    <Stack>
      <HeroSection />
    </Stack>
  );
};
export default HomePage;
