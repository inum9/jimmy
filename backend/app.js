import express from 'express';
import morgan from 'morgan';
import connectDb from './db/db.js';
// import userRoutes from './routes/user.routes.js';
// import projectRoutes from './routes/project.routes.js';
// import aiRoutes from './routes/ai.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

connectDb().then(()=>{
    console.log(`connectDb is working `);
    
})


const app = express();

// backend/index.js


app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// app.use('/users', userRoutes);
// app.use('/projects', projectRoutes);
// app.use("/ai", aiRoutes)



app.get('/', (req, res) => {
    res.send('Hello World!');
});

import userRoutes from "../backend/routes/user.routes.js"
import projectRoute from "../backend/routes/project.routes.js"
import aiRoute from "../backend/routes/ai.routes.js";
app.use ("/api/v1/users",userRoutes);
app.use("/api/v1/project",projectRoute)
app.use("/api/v1/ai",aiRoute);
app
export default app; 