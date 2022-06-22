import UserModel from '../models/UserModel';

const userService = new UserModel();

class UserService {
  public create = async (username: string, classe: string, level: number, password: string) => {
    const user = await userService.create(username, classe, level, password);
    return user;
  };
}

export default UserService;