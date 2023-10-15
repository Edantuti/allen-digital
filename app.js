const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const app = express();
const port = 8080;

app.use(express.static(__dirname + "/static/"));

app.set('view engine', 'pug')

app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.status(200).render('student.pug');
})
app.get('/teacher', (req, res) => {
  res.status(200).render('teacher.pug');
})
app.get('/live', (req, res) => {
  res.status(200).render('liveStudent.pug');
})
app.get('/recorded', (req, res) => {
  res.status(200).render('recordedStudent.pug');
})
app.get('/teacher/set-lecture', (req, res) => {
  res.status(200).render('setTeacher.pug');
})

app.listen(port, () => {
  console.log(`The application started successfully on the port ${port}`)
})
