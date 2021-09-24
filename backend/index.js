require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./router/index');
const errorMiddleware = require('./middlewares/error-middleware');

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: '*',
  credentials: true,
  exposedHeaders: ["set-cookie"]
}));

app.use('/api', router);


app.use(errorMiddleware);


app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));



