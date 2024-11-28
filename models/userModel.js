const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
{
course: [{

course_id: {
courseid_info: { type: String }},

registrationdate: { type: Date }}],
firstname: {
type: String, 
},
lastname: {
type: String, 
},
email: {
type: String, 
},
phonenumber: {
type: String, 
},
isadmin: {
type: Boolean, 
},
password: {
type: String, 
select: false, 
},
isverified: {
type: Boolean, 
},
},
);


userSchema.pre("save", async function (next) {
this.password = await bcrypt.hash(this.password, 10);
});



module.exports = mongoose.model("user", userSchema);
