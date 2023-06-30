const Campus = require("./campus");
const Student = require("./student");

// Associations Go Here

// one to Many
Campus.hasMany(Student, { foreignKey: 'campusId' });
Student.belongsTo(Campus, { foreignKey: 'campusId' });

module.exports = {
    Campus,
    Student,
};