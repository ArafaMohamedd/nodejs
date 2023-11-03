const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect server to the local MongoDB server and specify the database name
const uri = 'mongodb://localhost:27017/users';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('DB is now connected');
  })
  .catch((err) => {
    console.error('Mongoose connection error:', err);
  });

// Define a schema for your user model
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    phone: String,
    cv : String,
    address : String,
});

// Create a model based on the schema
const StudentsModel = mongoose.model("ٍStudents", userSchema);


const boysSchema = new mongoose.Schema({
    name: String,
    level: String,
    language: String,
    courseTime : Number,
    cv : String,
  });
  
  // Create a model based on the schema
  const CoursesModel = mongoose.model("Courses", boysSchema);


  const studentsUser = StudentsModel({
    name : "Arafa Mohamed",
    age : 21,
    phone : "01013566323",
    cv : "flutter,dart,object orinted",
    address : "الشرقية-بلبس",
  }).save();

  const coursesUser = CoursesModel({
    name : "flutter course",
    level : "fresh",
    language : "English",
    courseTime : "150",
    cv : "flutter,dart,object orinted",
  }).save();


  app.get("/Students", async (req, res) => {
    let allStudents = await Studentsmodel.find();
    res.status(200);
    console.log(allStudents.length);
    res.json(allStudents);
  });
  
  app.get("/Courses", async (req, res) => {
    let allCourses = await Coursesmodel.find();
    res.status(200);
    console.log(allCourses.length);
    res.json(allCourses);
  });



app.listen(8080, function () {
  console.log('Server is now open on port 8080');
});
