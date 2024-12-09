"use client";

import { Chivo } from "next/font/google";
import { Container } from "@mui/material";
import { TimerProvider } from "@/context/timer.context";

const chivo = Chivo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TimerProvider>
      <Container
        maxWidth={"lg"}
        sx={{ display: "flex", flexDirection: "column", gap: "30px" }}
        className={chivo.className}
      >
        {children}
      </Container>
    </TimerProvider>
  );
}
