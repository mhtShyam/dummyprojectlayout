const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

app.use(express.json({ limit: '50mb', extended: true }));
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

app.use(cors());

var server = require('http').createServer(app);

var port = process.env.PORT || 10010;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

var testRoute = require('./routes/testRoute');
app.use('/api/v1/test', testRoute);

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');

})

server.listen(port);
console.log('App running on :>> ', port);
module.exports = app;