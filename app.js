'use strict';

var db = require('./models/index');



  db.Husband.create({name: 'michael', job: 'programmer'}).then(function (michael) {
      db.Wife.create({name: 'Lucy', job: 'teacher'}).then(function (lucy) {
          michael.setWife(lucy);
      });
  });

  db.Father.create({name: 'michael', sonCount:3}).then(function (michael) {
      db.Son.bulkCreate([{name: 'Jim', age:14}, {name: 'John', age:15}, {name: 'Jason', age:20}])
          .then(function () {
              db.Son.findAll().then(function (sons) {
                  michael.setSon(sons);
              });
          });
  });

  db.Student.bulkCreate([{name: 'Hanmei', age: 21},
    {name: 'Lily', age: 22},
    {name: 'Lucy', age: 21}
  ]).then(function () {
      db.Student.findAll().then(function (students) {
          db.Course.bulkCreate([{name: 'math'}, {name: 'english'}, {
          name: 'physics'}]).then(function () {
            db.Course.findAll().then(function(courses) {
                students[0].setCourse(courses);
                students[1].setCourse(courses[1]);
                students[2].setCourse(courses[2]);
            });
          });
      });
  });
