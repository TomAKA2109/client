import exp from "constants";
import express from "express";
import { Router } from "express";
import { register } from "../controllers/user";

const router = express.Router();

router.post('/register', register);

export default router;
