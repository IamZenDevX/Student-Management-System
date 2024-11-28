const user = require("../models/userModel");
const bcrypt = require("bcryptjs");
const { sendMail } = require("../utils/user");
const ErrorHandler = require('../utils/default/errorHandler');


exports.getalluser = async (req, res, next) => {
  let var_user_List;
  var_user_List = await user.find(
    {
      isadmin: false,
    },
    "password lastname email course isverified phonenumber firstname isadmin "
  );
  res.json(var_user_List);
};

exports.userregister = async (req, res, next) => {
  const {
    course,
    email,
    firstname,
    isadmin,
    isverified,
    lastname,
    password,
    phonenumber,
  } = req.body;
  let createduser_save;
  createduser_save = new user({
    email,
    isverified,
    lastname,
    isadmin,
    course,
    firstname,
    password,
    phonenumber,
  });
  await createduser_save.save();
  res.json(createduser_save);
};

exports.verifylogin = async (req, res, next) => {
  const { email, password } = req.body;
  let var_user_List;
  var_user_List = await user.findOne(
    {
      email,
    },
    "isadmin email phonenumber password lastname course firstname isverified "
  );
  if (var_user_List) {
    let isValidPassword = false;
    isValidPassword = await bcrypt.compare(password, var_user_List.password);
    console.log("  " + isValidPassword + "");
    if (isValidPassword) {
      if (var_user_List.isverified == false) {
        res.send("Please verify your email,let's Check it righ now");
      } else {
        //		     req.session.user_id = userData._id;
        try {
        console.log(email);
          
          await sendMail(email, 'Verify Email', 'Your email is verifed');
    
            res.status(200).json({ success: true, message: 'Password reset email sent' });
            
          } catch (error) {
             console.error('Error sending password reset email:', error);
            return next(new ErrorHandler(500, 'Failed to send password reset email'));
          }
        console.log("oke");
      }
    } else {
      res.send("Pass Is Incorrect");
    }
  } else {
    res.send("Both typed email and passowrd aren't correctly");
  }
};
