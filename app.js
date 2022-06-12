const express = require('express');
const session = require('express-session');
const cors = require('cors');

const app = express();

const router = require('./routes/index.js');
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || 'localhost';

app.use(express.json());
app.use(express.static('public'));
app.use(cors({
    origin: "*"
}));
app.use(session({ secret: 'Fanfan'}));
app.use(router);


app.listen(PORT, () => {
  console.log(`App running on http://${HOST}:${PORT}`)
});
