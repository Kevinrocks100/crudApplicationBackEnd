const express = require("express");
const router = express.Router();
const { Student, Campus } = require("../db/models");

router.get("/", async (req, res, next) => {
    try {
        const allStudents = await Student.findAll();

        allStudents
            ? res.status(200).json(allStudents)
            : res.status(404).send("Students List Not Found");
    } catch (error) {
        next(error);
    }
});

//http://localhost:8080/api/students/:id
router.get("/:id", async (req, res, next) => {
    try {
      const student = await Student.findByPk(req.params.id, {
        include: {
          association: 'campus',
          attributes: ['name'],
        },
      })
      student
        ? res.status(200).json(student)
        : res.status(404).send("Student Not Found");
    } catch (error) {
      next(error);
    }
});

router.post("/add", async (req, res, next) => {
  const {firstName, lastName, email, imageUrl, gpa, campusId} = req.body;
  try {
      const newStudent = await Student.create({firstName, lastName, email, imageUrl, gpa, campusId});
      res.status(201).json(newStudent);
  } catch (err) {
      next(err);
  }
});

router.delete("/delete/:id", async (req, res, next) => {
  try {
    const RemoveStudent = await Student.destroy({ where: { id: req.params.id } });
    RemoveStudent
      ? res.status(200).send("Student removed successfully")
      : res.status(404).send("Student Not Found");
  } catch (error) {
    next(error);
  }
});

module.exports = router; 