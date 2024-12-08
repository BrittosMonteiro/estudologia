import React, { Fragment } from "react";
import { Container, Divider, Stack, Typography } from "@mui/material";
import { INotebook } from "@/types/notebook.types";

interface INotebookAnswersComponent {
  notebook: INotebook;
}

export default function NotebookAnswersComponent({
  notebook,
}: INotebookAnswersComponent) {
  return (
    <Stack gap={"40px"}>
      {notebook.questions?.map(({ answer, title }, index) => (
        <Fragment key={index}>
          <Answer answer={answer} title={title} />
          {index < notebook.questions.length - 1 && (
            <Divider orientation="horizontal" variant="middle" />
          )}
        </Fragment>
      ))}
    </Stack>
  );
}

interface IAnswer {
  title: string;
  answer: string | null;
}

const Answer = ({ answer, title }: IAnswer) => {
  return (
    <Container
      maxWidth={false}
      component={"div"}
      sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
    >
      <Typography fontSize={16} variant="h2" color="#000">
        {title}
      </Typography>
      <Typography fontSize={13} color="#7D8DA6">
        Resposta
      </Typography>
      <Typography fontSize={13} color="#7D8DA6">
        {answer}
      </Typography>
    </Container>
  );
};
