import { ICreateUserTokenDTO } from "../dtos/ICreateUserTokenDTO";
import { UserTokens } from "../entities/UserTokens";

interface IUsersTokensRepositoty {
  create({
    expires_date,
    refresh_token,
    user_id,
  }: ICreateUserTokenDTO): Promise<UserTokens>;
  findByUserId(user_id: string): Promise<UserTokens[]>;
  findByUserIdAndRefreshToken(
    user_id: string,
    refresh_token: string
  ): Promise<UserTokens>;

  deleteById(id: string): Promise<void>;
}

export { IUsersTokensRepositoty };
