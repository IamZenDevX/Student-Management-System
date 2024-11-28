const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const cors  = require('cors')
const session = require('express-session');
require('dotenv').config();
const indexfile = require("./router/index.js");


// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
// app.use(morgan('dev'));
// app.use(express.static('public'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(session({
//     secret: config.sessionSecret,
//     resave: true,
//     saveUninitialized: false,
//     store: new RedisStore({
//         client: redisClient,
//     }),
//     cookie: {
//         secure: false,
//         httpOnly: false,
//         maxAge: 6000000//the time expires of cookie is 2 min
//     }
// }));
// DOTENV CONFIGURATION
// dotenv.config();

// DATABASE CONFIGURATION
// connectDB();

// REST OBJ
const app = express();

//******** MIDDLEWARE *******/
app.use(cors());
// app.use(morgan("dev"));
app.use(express.json());

app.use("/", indexfile);

// ***** MIDDLEWARE ROUTES * ****/
// app.use("/api/v1/auth", UserRoute);
// app.use("/api/v1/admin", adminRoutes);
// app.use("/api/v1/doctor", doctorRoutes);

//******** PORTS AND LISTEN *******/
// const port = process.env.PORT || 8080;
// app.listen(port, () => {
//   console.log(
//     `Node server running in ${process.env.DEV_MODE} mode on Port ${port}.`
//       .bgBrightMagenta.white
//   );
// });
const dbURI = `mongodb+srv://Vihang:LlN2reduqeSUv9z9@cluster0.0tq4xsw.mongodb.net/student_mangment?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(dbURI)
  .then(() => {
    app.listen(1717);
    console.log("MongoDB connected...Welcome You are live Now !!!!!!!!!!");
  })
  .catch((err) => console.log(err));
