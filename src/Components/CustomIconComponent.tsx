"use client";

import IconButton from "@mui/material/IconButton";
import React, { ReactNode } from "react";

interface ICustomIconComponent {
  children: ReactNode;
}

export default function CustomIconComponent({
  children,
}: ICustomIconComponent) {
  return (
    <IconButton
      sx={{
        "&:hover": { backgroundColor: "transparent" },
        gap: 1,
      }}
    >
      {children}
    </IconButton>
  );
}
