const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false}));

app.use(express.json())
const route = require('./router');

const port = 3000;

app.use('/api',route);


//  Home Route.
app.get('/', (req,res) => {
    res.end("Routing App")
});

app.listen(port,() => {
    console.log(`Express Server currently running on http://localhost:${port}`);

})