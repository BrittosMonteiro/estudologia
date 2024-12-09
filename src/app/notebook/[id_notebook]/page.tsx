"use client";

import React, { useEffect, useState } from "react";

import HeaderNotebook from "@/Components/Notebook/HeaderNotebook";
import { INotebook } from "@/types/notebook.types";
import notebooks from "@/utils/notebooks.json";
import NotebookTitleAndTimer from "@/Components/Notebook/NotebookTitleAndTimer";
import {
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import TestFinishedDialog from "@/Components/Notebook/TestFinishedDialog";

interface INotebookPage {
  params: { id_notebook: string };
}

export default function Page({ params }: INotebookPage) {
  const [selectedNotebook, setSelectedNotebook] = useState<INotebook>();
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answer, setAnswer] = useState<string>("");

  const handleAnswer = (text: string) => {
    if (answer?.length > 300) return;

    setAnswer(text);
  };

  const confirmAnswer = () => {
    if (currentQuestion + 1 < (selectedNotebook?.questions.length || 0)) {
      setCurrentQuestion(currentQuestion + 1);

      return;
    }
  };

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
      <NotebookTitleAndTimer title={selectedNotebook?.title || null} />

      <Container
        maxWidth={"md"}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          alignItems: "start",
          justifyContent: "start",
        }}
        component={"section"}
      >
        <Box
          component={"div"}
          display={"flex"}
          flexDirection={"column"}
          gap={"12px"}
        >
          <Typography color="#7D8DA6" fontWeight={400}>
            {`${currentQuestion + 1}/${
              selectedNotebook?.questions.length || 0 + 1
            }`}
          </Typography>
          <Typography color="#7D8DA6" fontWeight={400}>
            {selectedNotebook?.questions[currentQuestion].title}
          </Typography>
        </Box>

        <Box
          component={"div"}
          width={"100%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"end"}
          justifyContent={"start"}
          gap={"12px"}
        >
          <TextField
            id="filled-multiline-static"
            label="Escreva sua resposta aqui"
            multiline
            rows={4}
            variant="filled" // Use filled variant
            defaultValue={answer}
            sx={{
              backgroundColor: "#F3F3F3",
              width: "100%",
              borderRadius: "5px",
              fontSize: "14px",
              color: "#000000",
              "& .MuiInputLabel-root": {
                color: "#000000",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#000000",
              },
              "& .MuiFilledInput-root": {
                backgroundColor: "#F3F3F3",
                border: "none",
                borderRadius: "5px",
                "&:hover": {
                  backgroundColor: "#F3F3F3",
                  border: "none",
                },
                "&:focus": {
                  backgroundColor: "#F3F3F3",
                  border: "none",
                },
              },
              "& .MuiFilledInput-root:before, & .MuiFilledInput-root:after": {
                border: "none",
              },
            }}
            onChange={(e) => handleAnswer(e.target.value)}
            inputProps={{
              maxLength: 300, // Limit input to 300 characters
            }}
          />
          <Typography color="#000" fontWeight={400}>{`${
            answer?.length || 0
          }/300`}</Typography>
        </Box>

        {currentQuestion + 1 === selectedNotebook?.questions.length ? (
          <TestFinishedDialog />
        ) : (
          <Button
            onClick={confirmAnswer}
            variant="contained"
            sx={{
              backgroundColor: "#502DB3",
              boxShadow: "none",
              "&:hover": { boxShadow: "none" },
              borderRadius: "42px",
            }}
          >
            Enviar resposta
          </Button>
        )}

        <Divider
          orientation="horizontal"
          sx={{ backgroundColor: "#F3F3F3", width: "100%" }}
        />

        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          component={"div"}
          width={"100%"}
        >
          <Button
            onClick={() => setCurrentQuestion(currentQuestion - 1)}
            disabled={currentQuestion === 0}
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "8px",
              color: "#7D8DA6",
            }}
          >
            <ArrowLeft />
            Anterior
          </Button>

          <Button
            onClick={() => setCurrentQuestion(currentQuestion + 1)}
            disabled={
              currentQuestion + 1 === selectedNotebook?.questions.length
            }
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "8px",
              color: "#7D8DA6",
            }}
          >
            Próxima <ArrowRight />
          </Button>
        </Box>
      </Container>
    </>
  );
}
