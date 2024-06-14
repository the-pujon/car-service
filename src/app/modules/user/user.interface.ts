type TRole = 'admin' | 'user';

type TAddress = {
    street: string;
    city: string;
    state: string;
    zip: string;
}

type TUser = {
    name: string;
    email: string;
    password: string;
    phone: number;
    role: TRole;
    address: TAddress;
}


export default TUser