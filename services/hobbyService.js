const Hobby = require("./../models/hobbyModel");

class HobbyService {
  getHobbyByName(name) {
    const query = Hobby.findOne({ name: name }).lean();
    return query;
  }
}

module.exports = HobbyService;
