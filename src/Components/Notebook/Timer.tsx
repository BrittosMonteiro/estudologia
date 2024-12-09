import { Box, Typography } from "@mui/material";
import { Clock } from "@phosphor-icons/react";
import React from "react";

export default function Timer() {
  return (
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
  );
}
