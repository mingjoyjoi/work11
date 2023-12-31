import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { json } from 'body-parser';
import { connect } from 'mongoose';
import routes from './routes/index.js';

const app = express();

app.use(json());

app.use(routes.commentsRoutes);
app.use(routes.postsRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message : 'Not found'
    });
  });

connect(process.env.DB_CONNECTION)
  .then(result => {
    app.listen(8080);
  })
  .catch(err => {
    console.log(err);
  });

