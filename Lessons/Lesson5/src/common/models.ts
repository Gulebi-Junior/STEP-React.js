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

export interface IComment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export interface IPostExtended {
    post: IPost;
    user: IUser;
    comments: IComment[];
}
