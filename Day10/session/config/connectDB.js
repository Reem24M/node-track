require('dotenv').config(); 
const mongoose = require('mongoose');
// let  path=process.env.DATABASE_URL
// تحقق سريع من المتغير قبل الاتصال
// if (typeof path) {
  // throw new Error("DATABASE_URL is undefined! تأكدي من ملف .env ومكانه",typeof path);
// }
console.log("DATABASE_URL:",process.env.ENV);
console.log("URL:",process.env.URL);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.ENV, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to DB");
  } catch (error) {
    console.error("Error in DB connection:", error);
  }
}

// connectDB();

module.exports = { connectDB };
