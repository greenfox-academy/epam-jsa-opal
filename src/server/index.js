'use strict';

require('dotenv').config();

const signUp = require('./endpoints/signup-endpoints');
const bodyParser = require('body-parser');
const DatabaseHealth = require('./endpoints/heartbeat');
const express = require('express');
const app = express();
const path = require('path');
const jsonParser = bodyParser.json();
const loginController = require('./endpoints/login-endpoints');
let defaultPortNum = 3000;
let portNum = process.env.PORT || defaultPortNum;
const homeController = require('./endpoints/home-screen-endpoints');
const thumbupController = require('./endpoints/video-thumb');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('dist'));
app.delete('/api/login', loginController.logout);
app.post('/api/signup', signUp.signupUser);
app.post('/api/login', jsonParser, loginController.login);
app.get('/heartbeat', DatabaseHealth.checkDatabaseHealth);
app.get('/api/videos/:videoId', homeController.getHomeInfos);
app.put('/api/videosthumb/:videoId/:votetype', thumbupController.judgeVotetype);
app.post('/api/videos/:videoId/comments', homeController.postComment);
app.post('/api/videos/', homeController.uploadVideo);
app.get('/api/videos', homeController.getVideoInfos);
app.get('*', (req, res) =>{
  res.sendFile('index.html', {root: path.join(__dirname, '../../dist')});
});

app.listen(portNum, () => {
  console.log(`listening on port:${portNum}`);
});

