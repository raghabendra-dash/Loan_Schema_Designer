import express from "express";
import cors from "cors";
import loanRoutes from "./routes/loanRoute.js";
const PORT = 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", loanRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
