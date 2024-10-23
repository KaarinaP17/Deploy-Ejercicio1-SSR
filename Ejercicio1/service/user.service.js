const {User} = require('../model/user.model');

const saveUserService = (name, email, age) => {
  const addUser = new User(name, email, age);
  return addUser;
}

module.exports = {
  saveUserService,
}