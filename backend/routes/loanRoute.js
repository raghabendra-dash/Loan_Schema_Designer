import express from "express";
import { submitApplication, getApplications } from "../controllers/loanControllers.js";

const router = express.Router();

router.post("/submit", submitApplication);
router.get("/applications", getApplications);

export default router;