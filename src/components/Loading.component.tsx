import { Loader, MantineSize, useMantineTheme } from "@mantine/core";
import React from 'react';

export interface ILoading {
  size?: MantineSize,
}

const Loading : React.FC<ILoading> = ({size="xl"}) => {
  const theme= useMantineTheme();
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Loader size={size} variant="oval" />
    </div>
  );
};

export default Loading;
