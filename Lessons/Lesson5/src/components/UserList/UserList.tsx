import React, { useState, useEffect } from "react";
import apiClient from "@/common/api";
import { IUser } from "@/common/models";
import "./UserList.css";

function UserList() {
    const [users, setUsers] = useState<IUser[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const getUsers = async () => {
        try {
            const res = await apiClient.get("/users");
            setUsers(res.data);
        } catch (e) {
            console.log({ e });
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="user-list-block block">
            {isLoading ? <h2>Loading...</h2> : users.map((user) => <p key={user.id}>{user.name}</p>)}
        </div>
    );
}

export default UserList;
