import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function CardCreateForm() {
  const [nameValue, setNameValue] = useState("");
  const [contentValue, setContentValue] = useState("");

  const submit = async (event) => {
    event.preventDefault();

    console.log(nameValue, contentValue);

    const response = await fetch("/api/card/create/", {
      method: "POST",
      body: JSON.stringify({
        content: contentValue,
        name: nameValue,
      }),
    });
  };

  return (
    <form onSubmit={submit}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TextField
            name="content"
            label="Content"
            fullWidth
            multiline
            rows={2}
            value={contentValue}
            onChange={(event) => {
              setContentValue(event.target.value);
            }}
            sx={{ marginBottom: 2 }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="name"
            label="Name"
            fullWidth
            value={nameValue}
            onChange={(event) => {
              setNameValue(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
