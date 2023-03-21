import express from "express";
import proRouter from "./routes/product";
import mongoose from "mongoose";
const app = express();

app.use(express.json());


app.use("/api", proRouter);

mongoose.connect("mongodb://127.0.0.1:27017/we17302");

export const viteNodeApp = app;