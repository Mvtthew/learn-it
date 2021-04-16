const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(require('./router'));

const PORT = 5069;
app.listen(PORT);
console.log(`Application is listening on port :${PORT}`);
