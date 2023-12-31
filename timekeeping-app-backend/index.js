const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const times = require('./Router/times')
const corsOptions = {
    methods:'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}

app.use(cors(corsOptions));

app.use('/times', times)


app.listen(port, () => {
    console.log(`The Server is running on port ${port}`);
});
