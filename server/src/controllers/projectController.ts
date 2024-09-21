import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

// so we can use the prisma and grab data from db
const prisma = new PrismaClient();

export const getProjects = async (
    req: Request,
    res: Response //this will grab info from req and res for response
  ): Promise<void> => {
    try {
      const projects = await prisma.project.findMany();
      res.json(projects);
    } catch (error: any) {
      res
        .status(500)
        .json({ message: `Error retrieving projects: ${error.message}` });
    }
  };

export const createProject = async (
req: Request,
res: Response
): Promise<void> => {
const { name, description, startDate, endDate } = req.body; // these are the values we want the front end to send to the backend to create project
try {
    const newProject = await prisma.project.create({
    data: {
        name,
        description,
        startDate,
        endDate,
    },
    });
    res.status(201).json(newProject);
} catch (error: any) {
    res
    .status(500)
    .json({ message: `Error creating a project: ${error.message}` });
}
};