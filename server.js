const app = require("./app")
const PORT = process.env.PORT;
const express = require('express');
app.use(express.json());

app.listen(PORT, () => {
  console.log('Server running on: ', PORT);
});
