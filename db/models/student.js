const { DataTypes } = require('sequelize');
const db = require('../db');

const Student = db.define('student', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  imageUrl: {
    type: DataTypes.STRING,
    defaultValue: 'default_image_url.jpg', 
  },
  gpa: {
    type: DataTypes.DECIMAL(2, 1),
    validate: {
      min: 0.0,
      max: 4.0,
    },
  },
});

module.exports = Student;