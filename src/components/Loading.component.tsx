import {
  Loader,
  MantineSize,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import React from "react";

export interface ILoading {
  size?: MantineSize;
  message?: string;
}

const Loading: React.FC<ILoading> = ({ size = "xl", message= "Sedang mengambil data, harap bersabar..." }) => {
  const theme = useMantineTheme();
  return (
    <Stack className="w-full h-full items-center justify-center mb-4 mt-10 self-center">
      <Loader
        size={size}
        variant="oval"
        color={theme?.colors?.["dark-blue"][5]}
      />
      <Text className="text-secondary-text text-md">{message}</Text>
    </Stack>
  );
};

export default Loading;
