import { Router } from "express";
import { createTask, getTasks, updateTaskStatus, getUserTasks } from "../controllers/taskController";

// uses router and setting get request using getProjects
const router = Router();

router.get("/", getTasks); // GET
router.post("/", createTask);
router.patch("/:taskId/status", updateTaskStatus); // UPDATE
router.get("/user/:userId", getUserTasks);

export default router;