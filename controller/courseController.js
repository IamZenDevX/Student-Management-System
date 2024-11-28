const ErrorHandler = require('../utils/default/errorHandler');
const Course = require('../models/CourseModel');


exports.getallcourse = async(req, res, next) => {
let var_Course_List;
try {
 var_Course_List = await Course.find({ },'desc praticeHours lecturer credits lecturhour title ');
} catch (err) {
const error = new ErrorHandler(
'error',
200
);
return next(error);
}
res.json(var_Course_List);



}

exports.insertcorse = async(req, res, next) => {
const {credits, desc, lecturer, lecturhour, praticeHours, title} = req.body;
let createdCourse;
createdCourse = await Course.create({
lecturhour, 
praticeHours, 
lecturer, 
desc, 
credits, 
title, 
});
res.json(createdCourse);



}




