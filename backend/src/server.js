// import express from 'express';
// import bodyParser from 'body-parser';
// import viewEngine from './configs/viewEngine';
// import initWebRoutes from './routes/web';
// //import connectDB from './config/connectDB';
// require('dotenv').config();
// let app = express();
// app.use(function (req, res, next) {
//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     setTimeout(() => {
//         next();
//     }, 300);
// });
// app.use(bodyParser.json({ limit: '50mb' }));
// app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// viewEngine(app);
// initWebRoutes(app);

// //connectDB();

// let port = process.env.PORT || 6969;

// app.listen(port, () => {
//     console.log('Backend Nodejs is running on the port : ' + port);
// });
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Backend is running!');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
