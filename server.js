"use strict";
import express from 'express';
import morgan from 'morgan';
// import mongoose from 'mongoose';
import router from './router';

// Connect to MongoDB
// mongoose.connect('mongodb://localhost/');

const app = express();

app.use(morgan('combined'));
app.use('/api', router);

const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});