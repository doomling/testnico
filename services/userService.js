const User = require("./../models/userModel");

class UserService {
  getUserById(id) {
    const query = User.findOne({ _id: id }).lean();
    return query;
  }

  deleteUser() {
    const query = User.deleteOne({ name: "Bel," }, function (err) {
      if (err) console.log(err);
      console.log("Successful deletion");
    });

    return query;
  }

  updateUser(id, data) {
    const user = User.findOneAndUpdate({ _id: id }, data).exec();
    return user;
  }

  addUser(data) {
    const newUser = new User(data);
    return newUser.save();
  }
}

module.exports = UserService;
