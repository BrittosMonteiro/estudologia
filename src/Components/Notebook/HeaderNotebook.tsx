"use client";

import React from "react";
import Image from "next/image";

import { AppBar, Box, Toolbar } from "@mui/material";

export default function HeaderNotebook() {
  return (
    <Box sx={{ flexGrow: 1 }} component={"header"}>
      <AppBar
        position="sticky"
        sx={{ boxShadow: "none", borderBottom: 1, borderColor: "#DFE5F1" }}
        color="transparent"
      >
        <Toolbar sx={{ justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "30px",
            }}
          >
            <Image
              alt="Logo - Estudologia"
              title="Logo - Estudologia"
              src={"/assets/Logotipo.png"}
              width={107}
              height={18}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
