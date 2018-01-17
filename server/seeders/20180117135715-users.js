const User = require('../models').User;

module.exports = {
  up: (queryInterface, Sequelize) => {
    const users = [];
    const numberOfUsers = 10;

    for (let i = 0; i < numberOfUsers; ++i) {
      users.push({
        first_name: `User${i}FirstName`,
        last_name: `User${i}LastName`,
        username: `User${i}Username`,
        email: `User${i}@example.com`,
        password: `User${i}`
      });
    }

    // Move away from `queryInterface.bulkInsert` because of lack of validations
    const usersPromiseArr = users.map(el => User.create(el));
    return Promise.all(usersPromiseArr).catch(err => console.log(err));

    // return queryInterface.bulkInsert('Users', users);
  },

  down: (queryInterface, Sequelize) => {}
};
