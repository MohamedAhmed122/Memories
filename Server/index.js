import express from 'express';
import mongoose from 'mongoose'
import cors from 'cors';
import bodyParser from 'body-parser';

import postRoutes from './Routes/Posts.js'

const app = express();





app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use(cors());

app.use('/posts', postRoutes);


app.use(cors());

const CONNECTION_URL ='mongodb+srv://Mohamed:Mohamed123@cluster0.7v3rw.mongodb.net/<dbname>?retryWrites=true&w=majority'

const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
