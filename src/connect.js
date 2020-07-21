const mongoose = require('mongoose');

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@main-ogevx.mongodb.net/main?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
  )
  .then(() => console.log('DB Connected!'))
  .catch((error) => {
    console.log(`DB Connection Error: ${error.message}`);
  });

mongoose.connection.on(
  'error',
  console.error.bind(console, 'MongoDB connection error:')
);

module.exports = mongoose.connection;