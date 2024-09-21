import { Router } from "express";
import { createProject, getProjects } from "../controllers/projectController";

// uses router and setting get request using getProjects
const router = Router();

router.get("/", getProjects); // GET
router.post("/", createProject) // CREATE

export default router;