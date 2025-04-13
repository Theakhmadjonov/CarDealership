import express from "express";
import "dotenv/config";
import connectDb from "./config/db.js";
import Routes from "./routes/routes.js";
import errorMiddleware from "./middleware/error.middleware.js";
import createAdmin from "./scripts/create.admin.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use("/api", Routes());
app.use(errorMiddleware);

const init = async () => {
  try {
    await connectDb();
    await createAdmin();
    app.listen(PORT, () => console.log(`Server is running port ${PORT}`));
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
init();
