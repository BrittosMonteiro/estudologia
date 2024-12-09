import React, { useState } from "react";
import { Box, Button, Dialog, DialogContent, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter as useNavigate } from "next/navigation";
import { useTimer } from "@/context/timer.context";
import { Clock } from "@phosphor-icons/react";

export default function TestFinishedDialog() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { pauseTimer, resetTimer, formattedTime } = useTimer();

  const handleOpen = () => {
    pauseTimer();
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    resetTimer();
    navigate.push("/");
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{
          backgroundColor: "#502DB3",
          boxShadow: "none",
          "&:hover": { boxShadow: "none" },
          borderRadius: "42px",
        }}
      >
        Enviar resposta e finalizar
      </Button>

      <Dialog
        open={open}
        onClose={(event, reason) => {
          if (reason !== "backdropClick" && reason !== "escapeKeyDown") {
            setOpen(false);
          }
        }}
        maxWidth={"sm"}
        fullWidth={true}
        sx={{
          display: "flex",
          flexDirection: "column",
          "& .MuiPaper-root": {
            borderRadius: "50px",
            padding: "30px",
          },
        }}
      >
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            justifyContent: "center",
            alignItems: "center",
            padding: 0,
          }}
        >
          <Image
            alt="Parabéns!"
            src={"/assets/trophy.png"}
            width={154}
            height={153}
          />
          <Typography color="#502DB3" fontSize={"30px"} fontWeight={700}>
            Agradecemos sua participação!
          </Typography>
          <Typography color="#7D8DA6" fontSize={"20px"} fontWeight={400}>
            Respostas enviadas com sucesso
          </Typography>
          <Box
            display={"flex"}
            flexDirection={"row"}
            gap={"8px"}
            alignItems={"center"}
          >
            <Clock size={24} color="#7D8DA6" />
            <Typography color="#7D8DA6" fontSize={"14px"} fontWeight={400}>
              Tempo total: {formattedTime}
            </Typography>
          </Box>
          <Button
            onClick={handleClose}
            variant="outlined"
            sx={{
              borderColor: "#502DB3",
              boxShadow: "none",
              "&:hover": { boxShadow: "none" },
              borderRadius: "42px",
              color: "#502DB3",
              padding: "4px 36px",
              fontSize: "14px",
            }}
          >
            Valeu!
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
