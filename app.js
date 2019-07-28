const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')
const postsRoutes = require('./routes/posts')
const app = express();

// Connect to mongodb atlas cluster
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, () => {
  console.log('Connected to database')
})

// Middlewares
// app.use('/', () => {
//   console.log('This is a middleware which will execute before getting root page!.')
// });

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/posts', postsRoutes)





// Routes
app.get('/', (req, res) => {
  res.send('Here I am');
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
