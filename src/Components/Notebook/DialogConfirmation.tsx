import React, { useState } from "react";
import { Button, Dialog, DialogContent, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter as useNavigate } from "next/navigation";

export default function SimpleDialog() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
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
          <Typography color="#7D8DA6" fontSize={"14px"} fontWeight={400}>
            40 min de provs
          </Typography>
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
