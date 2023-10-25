const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const RoutesTitle = require('./src/routes/routes');



const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


app.use('/api/v1', RoutesTitle);



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server on port ${port}`);
})


