import API from "@/common/api";
import { IUser } from "@/types";

export const getUsers = async (): Promise<IUser[]> => {
    const res = await API.get("/users");
    return res.data;
};
