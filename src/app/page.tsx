"use client";

import NotebookAnswersListComponent from "@/Components/Dashboard/NotebookAnswersListComponent";
import NotebooksListComponent from "@/Components/Dashboard/NotebooksListComponent";
import HeaderComponent from "@/Components/Dashboard/HeaderComponent";
import { Container, Tab, Tabs } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabOptions: { title: string }[] = [
    {
      title: "Questões",
    },
    {
      title: "Respostas",
    },
  ];

  return (
    <>
      <HeaderComponent />
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          paddingBottom: 4,
        }}
        component={"main"}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            sx: {
              backgroundColor: "#502DB3",
            },
          }}
        >
          {tabOptions?.map(({ title }, index) => (
            <Tab
              key={index}
              label={title}
              sx={{
                color: value === index ? "#502DB3" : "#E3DFEF",
                "&.Mui-selected": { color: "#502DB3" },
              }}
            />
          ))}
        </Tabs>

        {value === 0 && <NotebooksListComponent />}
        {value === 1 && <NotebookAnswersListComponent />}
      </Container>
    </>
  );
}
