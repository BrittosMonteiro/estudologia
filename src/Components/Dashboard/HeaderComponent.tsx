"use client";

import { AppBar, Badge, Box, Toolbar, Typography } from "@mui/material";

import React from "react";
import CustomIconComponent from "../CustomIconComponent";
import { Bell, ChatTeardropDots, MagnifyingGlass } from "@phosphor-icons/react";

export default function HeaderComponent() {
  return (
    <Box sx={{ flexGrow: 1 }} component={"header"}>
      <AppBar
        position="sticky"
        sx={{ boxShadow: "none", borderBottom: 1, borderColor: "#DFE5F1" }}
        color="transparent"
      >
        <Toolbar sx={{ justifyContent: "end" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "30px",
            }}
          >
            <CustomIconComponent>
              <Badge
                badgeContent=""
                variant="dot"
                sx={{
                  "& .MuiBadge-dot": {
                    backgroundColor: "#FE6470",
                  },
                }}
              >
                <Bell size={24} color={"#A5B4CB"} />
              </Badge>
            </CustomIconComponent>

            <CustomIconComponent>
              <ChatTeardropDots size={24} color="#A5B4CB" />
            </CustomIconComponent>

            <CustomIconComponent>
              <MagnifyingGlass size={24} color="#A5B4CB" />
              <Typography color="#A5B4CB" fontSize={16}>
                Pesquisar
              </Typography>
            </CustomIconComponent>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
