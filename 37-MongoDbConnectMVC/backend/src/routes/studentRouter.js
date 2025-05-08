import express from "express"
import { createStudent, deleteStudent, getAllStudents, getStudentsById, patchStudent, updateStudent } from "../controllers/studentController.js"

const studentRouter=express.Router()

studentRouter.post("/",createStudent)
studentRouter.get("/",getAllStudents)
studentRouter.get("/:id",getStudentsById)
studentRouter.delete("/:id",deleteStudent)
studentRouter.put("/:id",updateStudent)
studentRouter.patch("/:id",patchStudent)

export default studentRouter;