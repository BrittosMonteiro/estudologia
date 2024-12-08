"use client";

import { useEffect, useState } from "react";
import { Box, Checkbox, FormControlLabel, FormGroup } from "@mui/material";

import notebooks from "@/utils/notebooks.json";
import { INotebook } from "@/types/notebook.types";
import NotebookComponent from "./NotebookComponent";

export default function NotebooksListComponent() {
  const [listNotebooks, setListNotebooks] = useState<INotebook[]>([]);

  const filterList = (condition: boolean) => {
    if (!condition) {
      setListNotebooks(notebooks.notebooks);
      return;
    }

    const newList = listNotebooks?.filter((item) => item.status === false);
    setListNotebooks(newList);
  };

  useEffect(() => {
    setListNotebooks(notebooks.notebooks);
  }, []);

  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                "& .MuiSvgIcon-root": {
                  color: "#DFE5F1",
                },
                "&.Mui-checked .MuiSvgIcon-root": {
                  color: "#502DB3",
                },
              }}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                filterList(event.target.checked)
              }
            />
          }
          label="Mostrar apenas questões não respondidas"
          sx={{
            "& .MuiFormControlLabel-label": {
              color: "#141736",
              fontSize: "14px",
            },
          }}
        />
      </FormGroup>
      <Box
        display={"flex"}
        flex={"row"}
        flexWrap={"wrap"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={4}
      >
        {listNotebooks?.map(({ id, questions, status, title }) => (
          <NotebookComponent
            key={id}
            id={id}
            qtyQuestions={questions.length}
            status={status}
            title={title}
          />
        ))}
      </Box>
    </>
  );
}
