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

router.delete("/delete/:id", async (req, res, next) => {
  try {
    const RemoveCampus = await Campus.destroy({ where: { id: req.params.id } });
    RemoveCampus
      ? res.status(200).send("Campus removed successfully")
      : res.status(404).send("Campus Not Found");
  } catch (error) {
    next(error);
  }
});

// Route for updating a campus
router.put("/edit/:id", async (req, res, next) => {
  try {
    const { name, imageUrl, address, description } = req.body; 

    const [rowsAffected, updatedCampus] = await Campus.update(
      {
        name,
        imageUrl,
        address,
        description,
      },
      {
        where: { id: req.params.id },
        returning: true,
      }
    );
    if (rowsAffected > 0) {
      res.status(200).json({ updatedCampus });
    } else {
      res.status(404).send("Campus Not Found");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router; 