const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;
const MONGO_DB = process.env.MONGO_DB;

if (!MONGO_URI) {
  console.error('MONGO_URI not set in server/.env');
  process.exit(1);
}

mongoose.set('strictQuery', true);

async function connect() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ...(MONGO_DB ? { dbName: MONGO_DB } : {}),
    });
    console.log('MongoDB connected —', 'database:', mongoose.connection.name, 'host:', mongoose.connection.host);
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
}

connect();

module.exports = mongoose;
