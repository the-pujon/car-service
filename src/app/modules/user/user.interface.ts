type TRole = "admin" | "user";

export type TUser = {
  name: string;
  email: string;
  password: string;
  phone: number;
  role: TRole;
  address: string;
};
