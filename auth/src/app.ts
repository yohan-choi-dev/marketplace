import express from "express";
import { json } from "body-parser";

import {
  currentUserRouter,
  signinRouter,
  signoutRouter,
  signupRouter,
} from "./routes";

const PORT = process.env.PORT || 8001;

const app = express();

app.use(json());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.listen(PORT, () =>
  console.log(`Listening on port ${PORT}! \n url: http//localhost:8001`)
);
