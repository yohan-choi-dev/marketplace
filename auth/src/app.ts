import express from "express";
import { json } from "body-parser";

import {
  currentUserRouter,
  signupRouter,
  signinRouter,
  signoutRouter,
} from "./routes";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(json());

app.use(currentUserRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
