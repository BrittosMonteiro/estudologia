import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "@mui/material";

import NotebookAnswersComponent from "./NotebookAnswersComponent";
import { PencilSimple } from "@phosphor-icons/react";
import { INotebook } from "@/types/notebook.types";
import notebooks from "@/utils/notebooks.json";

export default function NotebookAnswersListComponent() {
  const [listNotebooks, setListNotebooks] = useState<INotebook[]>([]);
  const [selectedNotebook, setSelectedNotebook] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedNotebook(newValue);
  };

  useEffect(() => {
    setListNotebooks(notebooks.notebooks);
  }, []);

  return (
    <>
      <Tabs
        value={selectedNotebook}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        TabIndicatorProps={{
          sx: {
            backgroundColor: "#502DB3",
          },
        }}
      >
        {listNotebooks?.map(({ id, title }, index) => (
          <Tab
            key={id}
            label={title}
            sx={{
              color: selectedNotebook === index ? "#502DB3" : "#E3DFEF",
              "&.Mui-selected": { color: "#502DB3" },
            }}
            icon={
              <PencilSimple
                size={20}
                color={selectedNotebook === index ? "#502DB3" : "#E3DFEF"}
              />
            }
            iconPosition="start"
          />
        ))}
      </Tabs>

      {listNotebooks?.length > 0 && (
        <NotebookAnswersComponent notebook={listNotebooks[selectedNotebook]} />
      )}
    </>
  );
}
