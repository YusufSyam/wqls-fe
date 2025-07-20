import { Stack, Text } from "@mantine/core";
import React from "react";
import MyModal from "./MyModal.component";
import Loading from "./Loading.component";

interface ILoadingModalProps {
  opened: boolean;
  title?: string;
  description?: string;
  onSubmit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  noButtonLabel?: string;
  yesButtonLabel?: string;
  canBeClosed?: boolean;
  setOpened?: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadingModal = ({
  opened,
  description = "Memproses permintaan, harap tunggu sebentar...",
  setOpened = () => {},
}: ILoadingModalProps) => {
  return (
    <MyModal
      opened={opened}
      setOpened={setOpened}
      title={"Dalam Proses"}
      onClose={() => {}}
    >
      <Stack className="py-4">
        <Loading message="Memproses permintaan, harap tunggu sebentar..." />
      </Stack>
    </MyModal>
  );
};

export default LoadingModal;
