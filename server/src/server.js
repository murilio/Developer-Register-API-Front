const express = require('express');
const cors = require('cors')
const routes = require('./routes');

const PORT = 3001;

require('./database')

const app = express();

app.use(cors({
  origin: 'http://localhost:3000'
}))

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));

app.use(routes)

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});
