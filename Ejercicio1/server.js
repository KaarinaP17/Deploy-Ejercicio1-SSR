const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const userRouter = require('./routes/user.route');
const cors = require('cors');

const PORT = process.env.port || 3000;

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(userRouter);

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});