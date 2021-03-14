import express from "express";
const router = express.Router();

router.get("/api/users/currentuser", (request, response) => {
  response.send("current user");
});

export default router;
