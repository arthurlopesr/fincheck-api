import { plainToInstance } from 'class-transformer';
import { IsNotEmpty, IsString, NotEquals, validateSync } from 'class-validator';

class Env {
  @IsString()
  @IsNotEmpty()
  @NotEquals('unsecure_jwt_secret')
  jwtSecret: string;
}

export const env: Env = plainToInstance(Env, {
  jwtScret: process.env.JWT_SECRET,
});

const errors = validateSync(Env);

if (errors.length > 0) {
  throw new Error(JSON.stringify(errors, null, 2));
}
