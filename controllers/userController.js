class UserController {
  constructor(userService, hobbyService) {
    this.userService = userService;
    this.hobbyService = hobbyService;
  }

  async getUsers(req, res) {
    const users = await this.userService.getUsers();
    return res.json(users);
  }

  async getUserById(req, res) {
    const { id } = req.params;

    try {
      const user = await this.userService.getUserById(id);
      const hobby = await this.hobbyService.getHobbyByName(user.hobby);
      
      const data = {
        name: user.name,
        message: `Su hobby es ${user.hobby} que tiene una dificultad ${hobby.dificultad}`,
      };
      res.json(data);
    } catch (e) {
      console.log(e);
    }
  }

  async createUser(req, res) {
    const data = req.body;

    if (body.name && body.age) {
      try {
        const user = await this.userService.addUser(data);
        res.send("usuario creado");
      } catch (e) {
        console.log(e);
        res.status(500).send("error en la creación");
      }
    } else {
      res.status(400).send("Falta info obligatoria");
    }
  }
}

module.exports = UserController;
