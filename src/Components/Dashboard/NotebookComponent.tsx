"use client";

import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

import { INotebook } from "@/types/notebook.types";
import { PencilSimple } from "@phosphor-icons/react";

export default function NotebookComponent({
  id,
  qtyQuestions,
  status,
  title,
}: Partial<INotebook> & { qtyQuestions: number }) {
  const router = useRouter();

  return (
    <Card
      sx={{
        borderRadius: "20px",
        padding: "20px",
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none",
        },
        border: 1,
        borderColor: "#DFE5F1",
        width: {
          xs: "100%",
          sm: "100%",
          md: "350px",
        },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "start",
          gap: "20px",
        }}
      >
        <PencilSimple size={24} color="#7D8DA6" />
        <Typography fontWeight={400} color="#141736" fontSize={16}>
          {title}
        </Typography>

        <Chip
          size="medium"
          label={status ? "Respondido" : "Não respondido"}
          variant="filled"
          sx={{
            borderRadius: "4px",
            backgroundColor: status ? "#E1F5D5" : "#FFF8E4",
            color: status ? "#219653" : "#E99A00",
            fontWeight: "400",
            fontSize: "10px",
            padding: "2px 7px",
          }}
        />

        <Typography fontWeight={400} color="#7D8DA6" fontSize={12}>
          {`${qtyQuestions} respostas`}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          sx={{
            textAlign: "center",
            borderRadius: "36px",
            backgroundColor: "#502DB3",
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
            },
            "&:disabled": {
              backgroundColor: "#E3DFEF",
            },
            fontSize: "14px",
          }}
          fullWidth
          variant="contained"
          onClick={() => router.push(`/notebook/${id}`)}
          disabled={status}
        >
          Responder
        </Button>
      </CardActions>
    </Card>
  );
}
