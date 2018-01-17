const crypto = require('crypto');

const hashPassword = (password, salt) =>
  crypto
    .pbkdf2Sync(password, new Buffer(salt, 'base64'), 10000, 64, 'SHA1')
    .toString('base64');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: {
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: {
          msg: 'First name must contain only alphanumeric characters.'
        }
      }
    },
    last_name: {
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: {
          msg: 'Last name must contain only alphanumeric characters.'
        }
      }
    },
    username: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: 'Email must be a valid email address.'
        }
      }
    },
    password: {
      type: DataTypes.STRING
    }
  });

  // `beforeCreate` hook to hash the password
  User.beforeCreate(user => {
    user.salt = crypto.randomBytes(16).toString('base64');
    user.password = hashPassword(user.password, user.salt);
  });

  User.beforeUpdate(user => {
    if (user.changed('password')) {
      hashPassword(user.password, user.salt);
    }
  });

  User.associate = models => {
    // Associations can be defined here
  };

  return User;
};
