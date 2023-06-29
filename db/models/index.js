const Campus = require("./campus");
const Student = require("./student");

// Associations Go Here

// one to Many
Campus.hasMany(Student);
Student.belongsTo(Campus);

module.exports = {
    Campus,
    Student,
};