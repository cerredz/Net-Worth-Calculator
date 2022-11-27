const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get('/calculate', (req, res) => {
    res.sendFile(__dirname + "/public/calculate.html");
});

app.post('/calculate', (req,res) => {
    res.sendFile(__dirname + "/public/calculate.html");

})

app.listen("5000", () => {
    console.log('Server is running on port 5000');
})

