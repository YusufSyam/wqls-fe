"use client";
import HeaderText1 from "@/components/HeaderText1.component";
import { useAuth } from "@/context/AuthContext.context";
import { Stack, Text } from "@mantine/core";

import React, { useEffect } from "react";

export interface IHomePage {}

const HomePage: React.FC<IHomePage> = ({}) => {
  const { user, isLoggedIn } = useAuth();

  // useEffect(()=>{

  // }, [isLoggedIn])
  console.log(isLoggedIn, "isLoggedIn")
  console.log(user, "user")
  return (
    <Stack>
      {isLoggedIn || user!=null ? (
        <HeaderText1
          title={`Selamat Datang ${user?.username}`}
          subTitle="lorem ipsum dolor sit amet"
        />
      ) : (
        <HeaderText1
          title={`Selamat Datang Tamu`}
          subTitle="lorem ipsum dolor sit amet"
        />
      )}
    </Stack>
  );
};
export default HomePage;
