"use client";

import { Container } from "@mui/material";
import { Chivo } from "next/font/google";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";

// Load the Chivo font
const chivo = Chivo({
  subsets: ["latin"],
  variable: "--font-chivo",
});

const theme = createTheme({
  typography: {
    fontFamily: `${chivo.style.fontFamily}, Arial, sans-serif`,
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={chivo.className}>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container
            maxWidth={false}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              paddingLeft: "0px",
              paddingRight: "0px",
            }}
          >
            {children}
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
