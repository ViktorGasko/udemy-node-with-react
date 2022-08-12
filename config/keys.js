if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}

// mongodb+srv://Viktor:6Cm8XjK35XPbJ1Kc@cluster0.o8gwvqx.mongodb.net/emailyprod?retryWrites=true&w=majority
