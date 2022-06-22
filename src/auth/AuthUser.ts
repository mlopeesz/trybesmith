import jwt from 'jsonwebtoken';

const SECRET = 'trybesmith';
const jwtConfig = {
  expiresIn: '7d',
};

type User = {
  id: number,
  username: string,
  password: string,
};

class AuthUser {
  public generateToken = (user: User) => {
    const token = jwt.sign(user, SECRET, jwtConfig);
    return token;
  };
}

export default AuthUser;