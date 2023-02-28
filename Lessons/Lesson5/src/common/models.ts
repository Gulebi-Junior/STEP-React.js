export interface IUser {
    email: string;
    id: number;
    name: string;
    phone: string;
    username: string;
}

export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}
