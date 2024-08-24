import express from "express";
import "dotenv/config";
import dbConnect from "./db/dbConnect.js";
const app = express();
import cors from "cors";

//Middlewares
app.use(cors());
app.use(express.json());

//database connect
dbConnect;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("App listening on PORT: ", process.env.PORT || 3000);
});

//Routes
import userRoutes from "./routes/users.routes.js";
import productRoutes from "./routes/products.routes.js";
import contactRoutes from "./routes/contact.routes.js";

app.use("/user", userRoutes);
app.use("/products", productRoutes);
app.use("/contact", contactRoutes);
