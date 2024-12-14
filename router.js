import { Register } from "./login.js";
import express, { Router } from "express";

const app = express();
const router = Router();
router.route("/register").post(Register);

export default router;
