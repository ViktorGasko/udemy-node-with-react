const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
<<<<<<< HEAD
  googleId: String,
  credits: { type: Number, default: 0 },
=======
  googleId: String
>>>>>>> b7bb14e24a61cc18ea694c85cc628c3527e9a3a4
});

mongoose.model('users', userSchema);
