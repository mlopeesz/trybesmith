import { ResultSetHeader } from 'mysql2';
import connection from './connection';

class UserModel {
  public create = async (
    username: string,
    classe: string,
    level: number,
    password: string,
  ) => {
    const [user] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES(?,?,?,?)',
      [username, classe, level, password],
    );
    return {
      id: user.insertId,
      username,
      classe,
      level,
      password,
    };
  };
}

export default UserModel;