//node v dobe tvorby kurzu nepodporoval import express from ...
const express = require("express");
const mongoose = require("mongoose");
require("./models/User");
require("./services/passport");
const keys = require("./config/keys");
const passport = require("passport");
const cookieSession = require("cookie-session");

mongoose.connect(keys.mongoUri);
const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 3600000, //30 dni v ms
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

// app.get("/", (req, res) => {
//   res.send({ hi: "there" });
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT);
