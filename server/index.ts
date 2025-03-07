import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './src/routers/user';
import cors from 'cors';

dotenv.config();

const dbURL = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@test.dyew0.mongodb.net/?retryWrites=true&w=majority&appName=Test`;
console.log("DB URL:", dbURL);

const app = express();
const PORT = process.env.PORT || 3001; // Dùng PORT mặc định nếu chưa có

app.use(express.json());
app.use(cors());

// Đảm bảo đúng route '/auth'
app.use('/auth', userRouter);

const connectDB = async () => {
    try {
        await mongoose.connect(dbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        } as any);
        console.log('✅ Connected to MongoDB');
    } catch (error) {
        console.error('❌ Error connecting to MongoDB:', error);
        process.exit(1); // Dừng server nếu lỗi
    }
};

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Server is running at http://localhost:${PORT}`);
    });
}).catch((error) => {
    console.error('❌ Server failed to start:', error);
});
