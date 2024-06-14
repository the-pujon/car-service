type TRole = 'admin' | 'user';

export type TAddress = {
    street: string;
    city: string;
    state: string;
    zip: string;
}

export type TUser = {
    name: string;
    email: string;
    password: string;
    phone: number;
    role: TRole;
    address: TAddress;
}