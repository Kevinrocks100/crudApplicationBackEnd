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
          attributes: ['firstName', 'lastName'],
        },
      });
      campus
        ? res.status(200).json(campus)
        : res.status(404).send("Campus Not Found");
    } catch (error) {
      next(error);
    }
  });

module.exports = router; 