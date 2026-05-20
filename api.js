// index.js
const express = require('express');
const app = express();
const visiteur = process.env.visiteur || 'Anonyme';

app.get('/', (req, res) => {
  res.send('You have well deployed you app: Congrats');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});