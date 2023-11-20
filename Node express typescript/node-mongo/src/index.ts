import express, { Application } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
import personaRouter from "./routes/personaRoutes";
import empresaRouter from "./routes/empresaRoutes";
/*
dotenv.config();

if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI environment variable is not defined.");
}
const mongoUri: string = process.env.MONGO_URI;

if (!process.env.PORT) {
  throw new Error("PORT environment variable is not defined.");
}
const port: number = parseInt(process.env.PORT, 10);
*/

// Connect to the MongoDB database
/*mongoose.connect(mongoUri);

const db = mongoose.connection;

db.on("error", (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});
*/
const port: number=3000;
const app: Application = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/persona", personaRouter);
app.use("/api/empresa",empresaRouter);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
