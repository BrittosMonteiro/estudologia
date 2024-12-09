import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Timer from "./Timer";
import { PencilSimple } from "@phosphor-icons/react";

interface INotebookTitleAndTimer {
  title: string | null;
}

export default function NotebookTitleAndTimer({
  title,
}: INotebookTitleAndTimer) {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0px",
      }}
      component={"section"}
    >
      <Box></Box>

      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        gap={"8px"}
      >
        <PencilSimple size={20} color="#7D8DA6" />
        <Typography fontSize={"16px"} color="#141736">
          {title}
        </Typography>
      </Box>
      <Timer />
    </Container>
  );
}
