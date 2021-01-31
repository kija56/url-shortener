mongoose = require('mongoose');
dotenv =require('dotenv');

dotenv.config();
// copy MongoDB URL
const DATABASE = process.env.DATABASE;
mongoose.connect(DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('error', (err) => {
  console.log("Mongoose Connection error" + err.message);
});

mongoose.connection.once('open', () => {
  console.log("MongoDB connected");
});

const bodyParser = require('body-parser');
// import Models

const express = require('express');


const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// create Routes
require("./routes/urlshorten")(app);
app.listen(process.env.PORT || 8000, () => {
  console.log('Listening on port 8000');
})