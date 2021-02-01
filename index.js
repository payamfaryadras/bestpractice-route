const express = require('express');
const router = require('./routes/index');
const route =  require('./routes/index');

const app = express();

app.use(router);
const port = 3000;



app.listen(port, () => {
    console.log(`Server on port ${port}`);
});