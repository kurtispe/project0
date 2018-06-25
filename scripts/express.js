var express = require('express');
var path = require('path');
const app = express();

app.use(express.static('./styles/images'));
app.use(express.static('./styles'));

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, '.index.html'));
});

app.listen(9001);
