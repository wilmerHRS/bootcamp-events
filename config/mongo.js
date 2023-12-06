const mongoose = require('mongoose');

const dbConnect = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Base de datos conectada');
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = dbConnect;