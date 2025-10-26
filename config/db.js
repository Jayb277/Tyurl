import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB Connected:', conn.connection.host);
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error.message);
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Check password in .env file');
    console.log('2. Verify IP is whitelisted in MongoDB Atlas');
    console.log('3. Ensure database user exists');
    process.exit(1);
  }
};

export default connectDB;