import jwt from "jsonwebtoken";
export const createToken = (
  jwtPayload: {
    email: string;
    role: string;
  },
  secret: string,
  expireIn: string,
) => {
  return jwt.sign(jwtPayload, secret, { expiresIn: expireIn });
};
