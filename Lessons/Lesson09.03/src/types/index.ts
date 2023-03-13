export interface IProduct {
    id?: number;
    name: string;
    price: number;
}

export interface IUser {
    id: number;
    name: string;
    email: string;
}

export interface IUsersReduser {
    users: IUser[];
    status: "idle" | "pending" | "fulfilled" | "rejected";
    error: any | null;
}
