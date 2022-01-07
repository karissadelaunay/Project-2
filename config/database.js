const mongoose = require('mongoose');

// replace your database connection string here
mongoose.connect(process.env.DATABASE_URL ,{ //will need to change test to main resource later
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = mongoose.connection;

// database connection event
db.on('connected', function () {
  console.log(`Mongoose connected to: ${db.host}:${db.port}`);
});
