"use client";

import React, { useEffect, useState } from "react";

import HeaderNotebook from "@/Components/Notebook/HeaderNotebook";
import { INotebook } from "@/types/notebook.types";
import notebooks from "@/utils/notebooks.json";
import { Box, Container, Typography } from "@mui/material";
import { Clock } from "@phosphor-icons/react";

interface INotebookPage {
  params: { id_notebook: string };
}

export default function Page({ params }: INotebookPage) {
  const [selectedNotebook, setSelectedNotebook] = useState<INotebook | null>(
    null
  );

  useEffect(() => {
    if (!notebooks.notebooks) return;

    const getNotebook = notebooks.notebooks.find(
      (notebook) => notebook.id === params.id_notebook
    );

    setSelectedNotebook(getNotebook!);
  }, [params.id_notebook]);

  return (
    <>
      <HeaderNotebook />
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          paddingBottom: 4,
        }}
        component={"main"}
      >
        <Box
          component={"div"}
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box></Box>
          <Typography color="#7D8DA6">{selectedNotebook?.title}</Typography>
          <Box
            border={1}
            padding={"10px 20px"}
            borderRadius={"10px"}
            borderColor={"#7D8DA6"}
            textAlign={"center"}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={"8px"}
          >
            <Clock size={24} color="#7D8DA6" />
            <Typography color="#7D8DA6">0:00:00</Typography>
          </Box>
        </Box>
        {/* 
        {selectedNotebook?.questions.length} */}
      </Container>
    </>
  );
}
