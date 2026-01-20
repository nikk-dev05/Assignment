import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
app.use(express.json());
import routes from "./routes/routes.js";
import connectDB from "./utils/db.js";
const PORT = process.env.PORT || 3000 ;
app.use("/api",routes);

connectDB();

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
});


