'use strict';
module.exports = function(sequelize, DataTypes) {
  var StudentCourse = sequelize.define('StudentCourse', {
    studentId: DataTypes.INTEGER,
    courseId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return StudentCourse;
};