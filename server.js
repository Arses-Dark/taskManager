const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });
const app = require('./app');


const connectDB=require('./db/connect');
const mongoose= require('mongoose');
connectDB(process.env.URL)
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
