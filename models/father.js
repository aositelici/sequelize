'use strict';
module.exports = function(sequelize, DataTypes) {
  var Father = sequelize.define('Father', {
    name: DataTypes.STRING,
    sonCount: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Father.hasMany(models.Son,{as: 'Son'});
      }
    }
  });
  return Father;
};
