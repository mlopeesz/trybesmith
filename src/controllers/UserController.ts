import { Request, Response } from 'express';
import AuthUser from '../auth/AuthUser';
import UserService from '../services/UserService';

const userService = new UserService();
const auth = new AuthUser();

class UserController {
  public create = async (req: Request, res: Response) => {
    const { username, classe, level, password } = req.body;
    const user = await userService.create(username, classe, level, password);
    const token = auth.generateToken(user);
    return res.status(201).json({ token });
  };
}

export default UserController;