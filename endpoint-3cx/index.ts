import express, { Request, Response, request } from "express";
import phoneRoutes from "./source/routes/endpoint";
import router from "./source/routes/endpoint";

const app = express();

const staticBearerToken = "2d0nS3c2X4";

const authenticateToken = (req: Request, res: Response, next: Function) => {
  const token = req.header("Authorization");
  if (!token || token !== `Bearer ${staticBearerToken}`) {
    return res
      .status(401)
      .json({ message: "Unauthorized - Invalid Bearer Token" });
  }
  next();
};

app.use(express.json());
app.use("/api/v1", authenticateToken, phoneRoutes);

app.use((req: Request, res: Response) => {
  const error = new Error("Request Not Found");
  return res.status(404).json({
    message: error.message,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
