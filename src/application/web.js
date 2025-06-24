import express from "express";
import { publicRouter } from "../route/public-api.js";
import { errorMiddleware } from "../middleware/error-middleware.js";
import { userRoute } from "../route/api.js";
import cors from "cors";

export const web = express();
web.use(express.json());
web.use(cors());

web.use(publicRouter);
web.use(userRoute);

web.use(errorMiddleware);