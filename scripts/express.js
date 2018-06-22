var express = require('express');
var path = require('path');
const app = express();

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(6969);
