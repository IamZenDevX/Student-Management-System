const user = require("../models/userModel");
const bcrypt =require("bcryptjs")


exports.deletuser = async (req, res, next) => {
  const { id } = req.params;
  const deleteduser = await user.findByIdAndDelete(id);
  if (deleteduser) {
    console.log(data);
  }
  res.json('"Deleted !"');
};

exports.verifyLoginByAdmin = async (req, res, next) => {
  const { email, password } = req.body;
  let adminData;
  adminData = await user.findOne(
    {
      email,
      isadmin: true,
    },
    "password firstname course lastname isadmin isverified phonenumber email "
  );
  let passwordCompare = false;
  if (adminData) {
    passwordCompare = await bcrypt.compare(password, adminData.password);
    //		  console.log(passwordCompare);
    console.log(passwordCompare);

    if (passwordCompare) {
      if (adminData.isadmin == true) {
        //		req.session.admin_id = adminData._id;
       
        console.log("admin have been connected ");
      } else {
        res.json("You did not allow to admin account");
      }
    } else {
      res.json(
        "Your typed password is incorrect!,Please remember it one more!"
      );
    }
  } else {
    res.json("Both email and password aren't correct!Please try again.");
  }
};
