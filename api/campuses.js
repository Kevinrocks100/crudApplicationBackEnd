const express = require("express");
const router = express.Router();
const { Campus, Student } = require("../db/models");

router.get("/", async (req, res, next) => {
    try {
        const allCampuses = await Campus.findAll();

        allCampuses
            ? res.status(200).json(allCampuses)
            : res.status(404).send("Campuses List Not Found");
    } catch (error) {
        next(error);
    }
});

//http://localhost:8080/api/campuses/:id
router.get("/:id", async (req, res, next) => {
    try {
      const campus = await Campus.findByPk(req.params.id, {
        include: {
          association: 'students',
          attributes: ['id', 'firstName', 'lastName'],
        },
      });
      campus
        ? res.status(200).json(campus)
        : res.status(404).send("Campus Not Found");
    } catch (error) {
      next(error);
    }
});

router.post("/add", async (req, res, next) => {
  const {name, imageUrl, address, description} = req.body;
  try {
      const newCampus = await Campus.create({name, imageUrl, address, description});
      res.status(201).json(newCampus);
  } catch (err) {
      next(err);
  }
});

module.exports = router; 