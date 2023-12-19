import "dotenv/config";
import express from "express";
import cors from "cors";

import dbConnect from "./config/mongo";
import { routes } from "./routes";

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.use("/api", routes);

dbConnect().then(() => {
  console.log("Base de datos conectada");
});

app.listen(port, () => {
  console.log(`Servidor ejecutandose en http://localhost:${port}`);
});
