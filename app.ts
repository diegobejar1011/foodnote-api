import express from "express";
import cors from "cors";
import { db } from "./core/data/application/conn";
import { indexRouter } from "./core/indexRouter";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", indexRouter);

app.listen(3000, () => {
    console.log("The FoodNote-Api is running...");
});

db.connect()
.then(() => {
    console.log("database conected...");
})
.catch((error: any) => {
    throw new Error(error.message);
});